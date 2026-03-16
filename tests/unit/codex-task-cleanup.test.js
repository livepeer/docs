#!/usr/bin/env node
/**
 * @script            codex-task-cleanup.test
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/codex/task-cleanup.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests codex/task-cleanup.js — verifies safe worktree pruning, dirty-worktree preservation, branch pruning, and repo-root protection
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/codex-task-cleanup.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/codex/task-cleanup.js');
const GIT_ENV_STRIP_KEYS = ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_PREFIX'];

function getSanitizedGitEnv(overrides = {}) {
  const env = { ...process.env, ...overrides };
  GIT_ENV_STRIP_KEYS.forEach((key) => {
    delete env[key];
  });
  return env;
}

function run(cmd, args, cwd) {
  return spawnSync(cmd, args, { cwd, encoding: 'utf8', env: getSanitizedGitEnv() });
}

function runGit(args, cwd) {
  const out = run('git', args, cwd);
  if (out.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed: ${out.stderr || out.stdout}`);
  }
  return String(out.stdout || '').trim();
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function mkRepo(prefix) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  runGit(['init', '-b', 'docs-v2'], dir);
  runGit(['config', 'user.email', 'tests@example.com'], dir);
  runGit(['config', 'user.name', 'test-runner'], dir);
  writeFile(path.join(dir, 'docs.json'), '{ "navigation": { "versions": [] } }\n');
  runGit(['add', 'docs.json'], dir);
  runGit(['commit', '-m', 'init'], dir);
  return dir;
}

function runScript(args, cwd) {
  return run('node', [SCRIPT_PATH, ...args], cwd);
}

function createCommittedCodexWorktree(repo, branch, worktreePath, content = '') {
  runGit(['worktree', 'add', '-b', branch, worktreePath, 'docs-v2'], repo);
  if (content) {
    writeFile(path.join(worktreePath, 'note.txt'), content);
    runGit(['add', 'note.txt'], worktreePath);
    runGit(['commit', '-m', `add ${branch}`], worktreePath);
    runGit(['checkout', 'docs-v2'], repo);
    runGit(['merge', '--no-edit', branch], repo);
  }
}

function writeReleasedLock(repo, branch) {
  const lockDir = path.join(repo, '.codex', 'locks-local');
  fs.mkdirSync(lockDir, { recursive: true });
  const lockFile = path.join(lockDir, `${branch.replace(/[^\w-]+/g, '-')}.json`);
  fs.writeFileSync(
    lockFile,
    `${JSON.stringify({
      lock_id: `${branch}-lock`,
      task_id: '1',
      branch,
      worktree_path: repo,
      owner: 'tests',
      scope_in: ['docs.json'],
      created_at: '2026-03-10T00:00:00.000Z',
      expires_at: '2026-03-10T08:00:00.000Z',
      status: 'released',
      released_at: '2026-03-10T01:00:00.000Z'
    }, null, 2)}\n`,
    'utf8'
  );
  return lockFile;
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-remove-');
    const worktreePath = path.join(os.tmpdir(), `codex-clean-${Date.now()}-1`);
    createCommittedCodexWorktree(repo, 'codex/101-clean-merge', worktreePath, 'merged clean\n');
    runGit(['checkout', 'docs-v2'], repo);

    const exec = runScript(['--branch', 'codex/101-clean-merge', '--apply', '--no-sweep'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.ok(!fs.existsSync(worktreePath), 'merged clean worktree should be removed');
    const branches = runGit(['branch', '--format=%(refname:short)'], repo);
    assert.ok(!branches.split('\n').includes('codex/101-clean-merge'), 'merged branch should be pruned once unattached');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-dirty-');
    const worktreePath = path.join(os.tmpdir(), `codex-dirty-${Date.now()}-2`);
    createCommittedCodexWorktree(repo, 'codex/202-dirty-merge', worktreePath, 'merged dirty\n');
    writeFile(path.join(worktreePath, 'note.txt'), 'dirty change\n');

    const exec = runScript(['--branch', 'codex/202-dirty-merge', '--apply', '--no-sweep'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.ok(fs.existsSync(worktreePath), 'dirty merged worktree should be preserved');
    const branches = runGit(['branch', '--format=%(refname:short)'], repo);
    assert.ok(branches.split('\n').includes('codex/202-dirty-merge'), 'dirty branch should remain');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-non-codex-');
    const worktreePath = path.join(os.tmpdir(), `feature-clean-${Date.now()}-non-codex`);
    runGit(['worktree', 'add', '-b', 'feature/keep-clean-worktree', worktreePath, 'docs-v2'], repo);
    writeFile(path.join(worktreePath, 'note.txt'), 'merged non-codex\n');
    runGit(['add', 'note.txt'], worktreePath);
    runGit(['commit', '-m', 'non-codex branch change'], worktreePath);
    runGit(['checkout', 'docs-v2'], repo);
    runGit(['merge', '--no-edit', 'feature/keep-clean-worktree'], repo);
    runGit(['branch', 'codex/212-cleanup-anchor'], repo);

    const exec = runScript(['--branch', 'codex/212-cleanup-anchor', '--apply'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.ok(fs.existsSync(worktreePath), 'clean non-codex worktree should not be removed');
    const branches = runGit(['branch', '--format=%(refname:short)'], repo);
    assert.ok(branches.split('\n').includes('feature/keep-clean-worktree'), 'non-codex branch should remain attached');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-detached-');
    const detachedPath = path.join('/private/tmp', `codex-detached-${Date.now()}-3`);
    runGit(['worktree', 'add', '-d', detachedPath, 'docs-v2'], repo);
    runGit(['branch', 'codex/303-detached-clean'], repo);
    const lockFile = writeReleasedLock(repo, 'codex/303-detached-clean');

    const exec = runScript(['--branch', 'codex/303-detached-clean', '--apply'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.ok(!fs.existsSync(detachedPath), 'clean detached temp worktree should be removed during sweep');
    const branches = runGit(['branch', '--format=%(refname:short)'], repo);
    assert.ok(!branches.split('\n').includes('codex/303-detached-clean'), 'merged unattached codex branch should be pruned');
    assert.ok(!fs.existsSync(lockFile), 'released lock for cleaned branch should be removed');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-root-');
    runGit(['checkout', '-b', 'codex/404-root-clean'], repo);

    const exec = runScript(['--branch', 'codex/404-root-clean', '--apply', '--no-sweep'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.ok(fs.existsSync(path.join(repo, 'docs.json')), 'current repo-root worktree must never be removed');
    assert.strictEqual(runGit(['rev-parse', '--abbrev-ref', 'HEAD'], repo), 'codex/404-root-clean');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-unmerged-');
    const worktreePath = path.join(os.tmpdir(), `codex-unmerged-${Date.now()}-5`);
    runGit(['worktree', 'add', '-b', 'codex/505-unmerged', worktreePath, 'docs-v2'], repo);
    writeFile(path.join(worktreePath, 'note.txt'), 'not merged\n');
    runGit(['add', 'note.txt'], worktreePath);
    runGit(['commit', '-m', 'unmerged branch change'], worktreePath);

    const exec = runScript(['--branch', 'codex/505-unmerged', '--apply', '--no-sweep'], repo);
    assert.strictEqual(exec.status, 1, 'unmerged branch should fail cleanup');
    assert.match(`${exec.stdout}\n${exec.stderr}`, /not merged/i);
    assert.ok(fs.existsSync(worktreePath), 'unmerged worktree must remain');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-cleanup-json-');
    runGit(['branch', 'codex/606-json'], repo);

    const exec = runScript(['--branch', 'codex/606-json', '--json'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    const payload = JSON.parse(exec.stdout);
    assert.ok(payload.report.summary, 'json payload should include summary');
    assert.ok(Array.isArray(payload.report.prunableBranches), 'json payload should include prunableBranches');
    assert.strictEqual(payload.report.summary.prunableBranches, 1);
  });

  for (let i = 0; i < cases.length; i += 1) {
    const name = `case-${i + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[i]();
      console.log(`   ✓ ${name}`);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ codex-task-cleanup tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} codex-task-cleanup test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ codex-task-cleanup tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
