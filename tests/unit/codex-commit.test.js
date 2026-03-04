#!/usr/bin/env node
/**
 * @script codex-commit.test
 * @summary Validate codex commit helper behavior for normal commits and explicit audited no-verify override handling.
 * @owner docs
 * @scope tests/unit, tools/scripts/codex-commit.js
 *
 * @usage
 *   node tests/unit/codex-commit.test.js
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
 *   node tests/unit/codex-commit.test.js
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
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/codex-commit.js');

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
  writeFile(path.join(dir, 'file.txt'), 'init\n');
  runGit(['add', 'file.txt'], dir);
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
    const repo = mkRepo('codex-commit-normal-');
    writeFile(path.join(repo, 'file.txt'), 'normal\n');
    runGit(['add', 'file.txt'], repo);

    const exec = runScript(['--message', 'chore: normal commit'], repo);
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);
    const body = runGit(['log', '-1', '--pretty=%B'], repo);
    assert.match(body, /chore: normal commit/);
  });

  cases.push(async () => {
    const repo = mkRepo('codex-commit-reject-');
    writeFile(path.join(repo, 'file.txt'), 'reject\n');
    runGit(['add', 'file.txt'], repo);

    const exec = runScript(['--message', 'chore: should fail', '--no-verify'], repo);
    assert.strictEqual(exec.status, 1, 'no-verify without override must fail');
    const output = `${exec.stdout}\n${exec.stderr}`;
    assert.match(output, /requires --human-override true/i);
  });

  cases.push(async () => {
    const repo = mkRepo('codex-commit-override-');
    writeFile(path.join(repo, 'file.txt'), 'override\n');
    runGit(['add', 'file.txt'], repo);

    const exec = runScript(
      [
        '--message',
        'chore: override commit',
        '--no-verify',
        '--human-override',
        'true',
        '--override-note',
        'User said no-verify is allowed for this commit.'
      ],
      repo
    );
    assert.strictEqual(exec.status, 0, exec.stderr || exec.stdout);

    const body = runGit(['log', '-1', '--pretty=%B'], repo);
    assert.match(body, /\[override-audit\]/);
    assert.match(body, /override_type: no-verify/);
    assert.match(body, /requested_by: human/);
    assert.match(body, /User said no-verify is allowed/);
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
        console.log(`\n✅ codex-commit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} codex-commit test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ codex-commit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
