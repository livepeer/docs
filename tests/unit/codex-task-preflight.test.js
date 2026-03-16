#!/usr/bin/env node
/**
 * @script            codex-task-preflight.test
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/codex/task-preflight.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests codex/task-preflight.js — verifies managed worktree default behavior and the explicit in-place override
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/codex-task-preflight.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/codex/task-preflight.js');
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

function realpathSafe(value) {
  try {
    if (fs.realpathSync.native) {
      return fs.realpathSync.native(value);
    }
    return fs.realpathSync(value);
  } catch (_error) {
    return path.resolve(value);
  }
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

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const repo = mkRepo('codex-task-preflight-default-');
    const exec = runScript(['--task', '321', '--slug', 'cleanup', '--scope', 'docs.json'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);

    const worktreePath = path.join(path.dirname(repo), 'codex-worktrees', '321-cleanup');
    assert.ok(fs.existsSync(worktreePath), 'managed worktree should be created by default');
    assert.strictEqual(runGit(['rev-parse', '--abbrev-ref', 'HEAD'], repo), 'docs-v2');
    assert.strictEqual(runGit(['rev-parse', '--abbrev-ref', 'HEAD'], worktreePath), 'codex/321-cleanup');
    assert.ok(fs.existsSync(path.join(worktreePath, '.codex', 'task-contract.yaml')), 'contract should live in managed worktree');
    const contract = fs.readFileSync(path.join(worktreePath, '.codex', 'task-contract.yaml'), 'utf8');
    assert.match(contract, /scope_in:\n(?:.*\n)*\s+- \.codex\/task-contract\.yaml/m, 'contract scope should always include the task contract itself');
    const lockDir = path.join(worktreePath, '.codex', 'locks-local');
    assert.ok(fs.existsSync(lockDir), 'lock directory should live in managed worktree');
    assert.ok(fs.readdirSync(lockDir).filter((name) => name.endsWith('.json')).length >= 1, 'expected at least one lock file');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-preflight-inplace-');
    const exec = runScript(['--task', '654', '--slug', 'reuse-root', '--scope', 'docs.json', '--in-place'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    assert.strictEqual(runGit(['rev-parse', '--abbrev-ref', 'HEAD'], repo), 'codex/654-reuse-root');
    assert.ok(fs.existsSync(path.join(repo, '.codex', 'task-contract.yaml')), 'contract should live in current worktree for --in-place');
    const lockDir = path.join(repo, '.codex', 'locks-local');
    assert.ok(fs.existsSync(lockDir), 'lock directory should live in current worktree for --in-place');
    const lockFile = fs.readdirSync(lockDir).find((name) => name.endsWith('.json'));
    assert.ok(lockFile, 'expected one lock file');
    const lock = JSON.parse(fs.readFileSync(path.join(lockDir, lockFile), 'utf8'));
    assert.strictEqual(realpathSafe(lock.worktree_path), realpathSafe(repo));
    assert.ok(lock.scope_in.includes('.codex/task-contract.yaml'), 'lock scope should always include the task contract itself');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-task-preflight-rerun-');
    const args = ['--task', '777', '--slug', 'rerun-cleanup', '--scope', 'docs.json', '--in-place'];
    const first = runScript(args, repo);
    assert.strictEqual(first.status, 0, first.stderr || first.stdout);
    const second = runScript(args, repo);
    assert.strictEqual(second.status, 0, second.stderr || second.stdout);

    const lockDir = path.join(repo, '.codex', 'locks-local');
    const lockFiles = fs.readdirSync(lockDir).filter((name) => name.endsWith('.json'));
    assert.ok(lockFiles.length >= 2, 'rerun should preserve prior lock records');
    const locks = lockFiles.map((name) => JSON.parse(fs.readFileSync(path.join(lockDir, name), 'utf8')));
    const activeLocks = locks.filter((lock) => lock.status === 'active');
    const releasedLocks = locks.filter((lock) => lock.status === 'released');
    assert.strictEqual(activeLocks.length, 1, 'only the latest same-branch lock should remain active');
    assert.ok(releasedLocks.length >= 1, 'prior same-branch locks should be released');
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
        console.log(`\n✅ codex-task-preflight tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} codex-task-preflight test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ codex-task-preflight tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
