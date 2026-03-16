#!/usr/bin/env node
/**
 * @script            codex-safe-merge-with-stash.test
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/codex-safe-merge-with-stash.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests codex-safe-merge-with-stash.js — asserts the deprecated stash helper hard-fails and points callers to the supported Codex lifecycle
 * @pipeline          manual — developer tool
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/codex-safe-merge-with-stash.test.js [flags]
 */

const assert = require('assert');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/codex-safe-merge-with-stash.js');
const GIT_ENV_STRIP_KEYS = ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_PREFIX'];

function getSanitizedGitEnv(overrides = {}) {
  const env = { ...process.env, ...overrides };
  GIT_ENV_STRIP_KEYS.forEach((key) => {
    delete env[key];
  });
  return env;
}

function runScript(args) {
  return spawnSync('node', [SCRIPT_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: getSanitizedGitEnv()
  });
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const exec = runScript(['--target', 'docs-v2']);
    assert.strictEqual(exec.status, 1, 'compatibility shim should fail');
    const output = `${exec.stdout}\n${exec.stderr}`;
    assert.match(output, /stash-based codex merge flow is disabled/i);
    assert.match(output, /task-finalize\.js/i);
    assert.match(output, /lock-release\.js/i);
    assert.match(output, /task-cleanup\.js/i);
  });

  cases.push(async () => {
    const exec = runScript(['--target', 'docs-v2', '--json']);
    assert.strictEqual(exec.status, 1, 'json mode should still fail');
    const payload = JSON.parse(exec.stdout);
    assert.strictEqual(payload.passed, false);
    assert.strictEqual(payload.target, 'docs-v2');
    assert.match(payload.message, /disabled/i);
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
