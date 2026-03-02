#!/usr/bin/env node
/**
 * @script validate-codex-task-contract.test
 * @summary Validate codex task-contract PR-body marker enforcement behavior for codex branch checks.
 * @owner docs
 * @scope tests/unit, tools/scripts/validate-codex-task-contract.js
 *
 * @usage
 *   node tests/unit/validate-codex-task-contract.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console summary with pass/fail status for marker enforcement cases.
 *
 * @exit-codes
 *   0 = all test cases passed
 *   1 = one or more test cases failed
 *
 * @examples
 *   node tests/unit/validate-codex-task-contract.test.js
 *
 * @notes
 *   Uses temporary files and does not modify tracked repository files.
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/validate-codex-task-contract.js');

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function runScript(args) {
  return spawnSync('node', [SCRIPT_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

function writeContract(absPath, taskId, branchName) {
  const content = [
    `task_id: ${taskId}`,
    'base_branch: docs-v2',
    `branch: ${branchName}`,
    'scope_in:',
    '  - .codex/task-contract.yaml',
    'scope_out:',
    '  - v1/',
    'allowed_generated: []',
    'acceptance_checks:',
    '  - node tests/run-pr-checks.js --base-ref docs-v2',
    'risk_flags: []',
    'follow_up_issues: []',
    ''
  ].join('\n');
  writeFile(absPath, content);
}

async function runTests() {
  const failures = [];

  try {
    const tmp = mkTmpDir('validate-codex-contract-');
    const taskId = 5678;
    const branchName = 'codex/5678-marker-enforcement';
    const contractPath = path.join(tmp, 'task-contract.yaml');
    const prBodyOk = path.join(tmp, 'pr-ok.md');
    const prBodyMissing = path.join(tmp, 'pr-missing.md');

    writeContract(contractPath, taskId, branchName);

    writeFile(
      prBodyOk,
      [
        `<!-- codex-pr-body-generated: task_id=${taskId}; branch=${branchName}; contract=.codex/task-contract.yaml -->`,
        '',
        '## Scope',
        '',
        '- scope details',
        '',
        '## Validation',
        '',
        '- validation details',
        '',
        '## Follow-up Tasks',
        '',
        '- none',
        ''
      ].join('\n')
    );

    writeFile(
      prBodyMissing,
      [
        '## Scope',
        '',
        '- scope details',
        '',
        '## Validation',
        '',
        '- validation details',
        '',
        '## Follow-up Tasks',
        '',
        '- none',
        ''
      ].join('\n')
    );

    const ok = runScript([
      '--branch',
      branchName,
      '--contract',
      contractPath,
      '--require-pr-body',
      '--pr-body-file',
      prBodyOk,
      '--files',
      '.codex/task-contract.yaml'
    ]);
    assert.strictEqual(ok.status, 0, `expected marker-valid run to pass: ${ok.stderr || ok.stdout}`);
    console.log('   ✓ marker-valid case passed');

    const missing = runScript([
      '--branch',
      branchName,
      '--contract',
      contractPath,
      '--require-pr-body',
      '--pr-body-file',
      prBodyMissing,
      '--files',
      '.codex/task-contract.yaml'
    ]);
    assert.strictEqual(missing.status, 1, 'expected missing-marker run to fail');
    const combined = `${missing.stdout}\n${missing.stderr}`;
    assert.match(combined, /missing required generated marker/i, 'expected missing marker failure message');
    console.log('   ✓ missing-marker case passed');
  } catch (error) {
    failures.push(error.message);
  }

  return {
    passed: failures.length === 0,
    total: 2,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ validate-codex-task-contract tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} validate-codex-task-contract test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ validate-codex-task-contract tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
