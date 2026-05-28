'use strict';
/**
 * @script            test-helpers
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             operations/tests/unit/script-tests
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Shared helpers for the script-tests/* unit-test suite. Provides temp-dir, fixture-load, sub-process exec, and JSON-parse assertions so each test file stays small and consistent.
 * @pipeline          indirect — library module
 * @usage             const { mkTmpDir, runScript, assertExit, fixturePath } = require('../../../tools/lib/bootstrap/test-helpers');
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), `lpd-script-test-${prefix}-`));
}

function rmTmpDir(dir) {
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch (_) { /* best effort */ }
}

/**
 * Run a repo script in a child node process with controlled args/env/cwd.
 * Returns { exitCode, stdout, stderr } — never throws on non-zero exit.
 */
function runScript(scriptRepoPath, args = [], { cwd = REPO_ROOT, env = {}, timeout = 30000 } = {}) {
  const result = spawnSync('node', [path.join(REPO_ROOT, scriptRepoPath), ...args], {
    cwd,
    env: { ...process.env, NODE_PATH: path.join(REPO_ROOT, 'tools/node_modules'), ...env },
    encoding: 'utf8',
    timeout,
  });
  return {
    exitCode: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    error: result.error,
  };
}

function assertExit(result, expected, msg) {
  assert.strictEqual(
    result.exitCode,
    expected,
    `${msg || 'exit code'}: expected ${expected}, got ${result.exitCode}\n--- stdout ---\n${result.stdout}\n--- stderr ---\n${result.stderr}`
  );
}

function assertStderrIncludes(result, needle) {
  assert.ok(
    result.stderr.includes(needle),
    `stderr did not include "${needle}"\n--- stderr ---\n${result.stderr}`
  );
}

function fixturePath(...parts) {
  return path.join(REPO_ROOT, 'operations/tests/unit/script-tests/_fixtures', ...parts);
}

/**
 * Write a tiny JS script to a temp file for tests that need a real Node entry-point.
 * Returns absolute path.
 */
function writeTempScript(dir, name, content) {
  const p = path.join(dir, name);
  fs.writeFileSync(p, content, { mode: 0o755 });
  return p;
}

/**
 * Tiny test-runner mini-API: declare a suite name, then call `test('case', fn)` to
 * run a case. Cases are sequential; on first failure the suite prints the stack
 * and exits 1. Keeps each test file self-contained, no external framework needed.
 */
function suite(name) {
  let pass = 0;
  let fail = 0;
  const failures = [];
  return {
    test(caseName, fn) {
      try {
        const result = fn();
        if (result && typeof result.then === 'function') {
          throw new Error(`async test cases not supported by suite() — wrap with .then or use suiteAsync()`);
        }
        pass++;
        process.stdout.write(`  ✓ ${caseName}\n`);
      } catch (e) {
        fail++;
        failures.push({ caseName, error: e });
        process.stdout.write(`  ✗ ${caseName}\n    ${e.message}\n`);
      }
    },
    done() {
      process.stdout.write(`\n${name}: ${pass} passed, ${fail} failed\n`);
      if (fail > 0) {
        failures.forEach((f) => process.stderr.write(`\n${name} :: ${f.caseName}\n${f.error.stack || f.error.message}\n`));
        process.exit(1);
      }
      process.exit(0);
    },
  };
}

module.exports = {
  mkTmpDir,
  rmTmpDir,
  runScript,
  assertExit,
  assertStderrIncludes,
  fixturePath,
  writeTempScript,
  suite,
  REPO_ROOT,
};
