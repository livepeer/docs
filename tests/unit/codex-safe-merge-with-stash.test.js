#!/usr/bin/env node
/**
 * @script codex-safe-merge-with-stash.test
 * @summary Validate safe merge helper behavior for clean merges, dirty-tree stash/restore, and conflict handling.
 * @owner docs
 * @scope tests/unit, tools/scripts/codex-safe-merge-with-stash.js
 *
 * @usage
 *   node tests/unit/codex-safe-merge-with-stash.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console test summary
 *
 * @exit-codes
 *   0 = all test cases passed
 *   1 = one or more test cases failed
 *
 * @examples
 *   node tests/unit/codex-safe-merge-with-stash.test.js
 *
 * @notes
 *   Uses temporary git repositories and does not modify tracked repository files.
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/codex-safe-merge-with-stash.js');

function run(cmd, args, cwd) {
  return spawnSync(cmd, args, { cwd, encoding: 'utf8' });
}

function runGit(args, cwd) {
  const out = run('git', args, cwd);
  if (out.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed: ${out.stderr || out.stdout}`);
  }
  return (out.stdout || '').trim();
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function mkRepo(prefix) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  runGit(['init', '-b', 'main'], dir);
  runGit(['config', 'user.email', 'tests@example.com'], dir);
  runGit(['config', 'user.name', 'test-runner'], dir);
  writeFile(path.join(dir, 'app.txt'), 'base\n');
  runGit(['add', 'app.txt'], dir);
  runGit(['commit', '-m', 'init'], dir);
  runGit(['checkout', '-b', 'feature'], dir);
  return dir;
}

function runScript(args, cwd) {
  return run('node', [SCRIPT_PATH, ...args], cwd);
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const repo = mkRepo('codex-safe-merge-clean-');
    runGit(['checkout', 'main'], repo);
    writeFile(path.join(repo, 'app.txt'), 'base\nmain-change\n');
    runGit(['add', 'app.txt'], repo);
    runGit(['commit', '-m', 'main change'], repo);
    runGit(['checkout', 'feature'], repo);

    const exec = runScript(['--target', 'main'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    const merged = fs.readFileSync(path.join(repo, 'app.txt'), 'utf8');
    assert.match(merged, /main-change/, 'feature should include merged change');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-safe-merge-dirty-');
    runGit(['checkout', 'main'], repo);
    writeFile(path.join(repo, 'app.txt'), 'base\nmain-change\n');
    runGit(['add', 'app.txt'], repo);
    runGit(['commit', '-m', 'main change'], repo);
    runGit(['checkout', 'feature'], repo);

    writeFile(path.join(repo, 'local.txt'), 'local-dirty\n');
    writeFile(path.join(repo, 'temp-untracked.txt'), 'temp\n');
    runGit(['add', 'local.txt'], repo);

    const exec = runScript(['--target', 'main'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);

    const localTracked = fs.readFileSync(path.join(repo, 'local.txt'), 'utf8');
    const localUntracked = fs.readFileSync(path.join(repo, 'temp-untracked.txt'), 'utf8');
    assert.match(localTracked, /local-dirty/, 'tracked local file should be restored');
    assert.match(localUntracked, /temp/, 'untracked local file should be restored');
  });

  cases.push(async () => {
    const repo = mkRepo('codex-safe-merge-conflict-');
    runGit(['checkout', 'main'], repo);
    writeFile(path.join(repo, 'app.txt'), 'main-version\n');
    runGit(['add', 'app.txt'], repo);
    runGit(['commit', '-m', 'main update'], repo);
    runGit(['checkout', 'feature'], repo);
    writeFile(path.join(repo, 'app.txt'), 'feature-version\n');
    runGit(['add', 'app.txt'], repo);
    runGit(['commit', '-m', 'feature update'], repo);

    writeFile(path.join(repo, 'dirty.txt'), 'dirty\n');
    runGit(['add', 'dirty.txt'], repo);

    const exec = runScript(['--target', 'main'], repo);
    assert.strictEqual(exec.status, 1, 'merge conflict should fail');

    const stashList = runGit(['stash', 'list'], repo);
    assert.match(stashList, /codex-safe-merge:/, 'stash should be preserved when merge fails');
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
        console.log(`\n✅ codex-safe-merge-with-stash tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} codex-safe-merge-with-stash test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ codex-safe-merge-with-stash tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
