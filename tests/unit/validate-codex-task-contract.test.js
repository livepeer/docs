#!/usr/bin/env node
/**
 * @script            validate-codex-task-contract.test
 * @category          enforcer
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/validate-codex-task-contract.js
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests validate-codex-task-contract.js — validates contract checking logic
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/validate-codex-task-contract.test.js [flags]
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

function writeFile(absPath, content, mode = 0o644) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, { encoding: 'utf8', mode });
}

function runScript(args, env = {}) {
  return spawnSync('node', [SCRIPT_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      ...env
    }
  });
}

function writeContract(absPath, taskId, branchName) {
  const content = [
    `task_id: ${taskId}`,
    'base_branch: docs-v2-dev',
    `branch: ${branchName}`,
    'scope_in:',
    '  - .codex/task-contract.yaml',
    'scope_out:',
    '  - v1/',
    'allowed_generated: []',
    'acceptance_checks:',
    '  - node tests/run-pr-checks.js --base-ref docs-v2-dev',
    'risk_flags: []',
    'follow_up_issues: []',
    ''
  ].join('\n');
  writeFile(absPath, content);
}

function writeIssuePolicy(absPath) {
  const policy = {
    required_labels: ['docs-v2'],
    required_label_prefixes: ['type:', 'area:', 'classification:', 'priority:'],
    forbidden_labels: ['status: needs-info'],
    required_state: 'open'
  };
  writeFile(absPath, `${JSON.stringify(policy, null, 2)}\n`);
}

function buildIssuePayload({ state = 'open', labels = [] }) {
  return JSON.stringify({
    state,
    labels: labels.map((name) => ({ name }))
  });
}

function assertFailedWith(result, regex, msg) {
  assert.strictEqual(result.status, 1, msg || 'expected command to fail');
  const combined = `${result.stdout}\n${result.stderr}`;
  assert.match(combined, regex, `expected output to match ${regex}, got:\n${combined}`);
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
    const prBodyNoClosing = path.join(tmp, 'pr-no-closing.md');
    const prBodyWrongClosing = path.join(tmp, 'pr-wrong-closing.md');
    const issuePolicy = path.join(tmp, 'issue-policy.json');

    writeContract(contractPath, taskId, branchName);
    writeIssuePolicy(issuePolicy);

    writeFile(
      prBodyOk,
      [
        `<!-- codex-pr-body-generated: task_id=${taskId}; branch=${branchName}; contract=.codex/task-contract.yaml -->`,
        '',
        `Fixes #${taskId}`,
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
      prBodyNoClosing,
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
      prBodyWrongClosing,
      [
        `<!-- codex-pr-body-generated: task_id=${taskId}; branch=${branchName}; contract=.codex/task-contract.yaml -->`,
        '',
        'Fixes #9999',
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

    const baseArgs = [
      '--branch',
      branchName,
      '--contract',
      contractPath,
      '--issue-source',
      'gh',
      '--issue-policy',
      issuePolicy,
      '--issue-number',
      String(taskId),
      '--issue-repo',
      'livepeer/docs',
      '--validate-contract-only',
      '--require-issue-state'
    ];

    const baseEnv = {
      PATH: process.env.PATH
    };

    // Marker success
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

    // Marker missing
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
    assertFailedWith(missing, /missing required generated marker/i, 'expected missing-marker run to fail');
    console.log('   ✓ missing-marker case passed');

    // Missing closing keyword for task id
    const noClosing = runScript([
      '--branch',
      branchName,
      '--contract',
      contractPath,
      '--require-pr-body',
      '--pr-body-file',
      prBodyNoClosing,
      '--files',
      '.codex/task-contract.yaml'
    ]);
    assertFailedWith(noClosing, /must include a closing keyword for task issue/i, 'expected missing closing keyword to fail');
    console.log('   ✓ missing-closing-keyword case passed');

    // Wrong closing issue id
    const wrongClosing = runScript([
      '--branch',
      branchName,
      '--contract',
      contractPath,
      '--require-pr-body',
      '--pr-body-file',
      prBodyWrongClosing,
      '--files',
      '.codex/task-contract.yaml'
    ]);
    assertFailedWith(wrongClosing, /must include a closing keyword for task issue/i, 'expected wrong closing issue id to fail');
    console.log('   ✓ wrong-closing-issue case passed');

    // Issue-state pass
    const issuePass = runScript(baseArgs, {
      ...baseEnv,
      CODEX_MOCK_ISSUE_JSON: buildIssuePayload({
        state: 'open',
        labels: ['docs-v2', 'type: enhancement', 'area: ci-cd', 'classification: high', 'priority: high']
      })
    });
    assert.strictEqual(issuePass.status, 0, `expected issue-state pass: ${issuePass.stderr || issuePass.stdout}`);
    console.log('   ✓ issue-state pass case passed');

    // Missing prefix class (area)
    const missingArea = runScript(baseArgs, {
      ...baseEnv,
      CODEX_MOCK_ISSUE_JSON: buildIssuePayload({
        state: 'open',
        labels: ['docs-v2', 'type: enhancement', 'classification: high', 'priority: high']
      })
    });
    assertFailedWith(missingArea, /missing required label prefix class: area:/i, 'expected missing area prefix to fail');
    console.log('   ✓ issue-state missing area prefix case passed');

    // Forbidden needs-info
    const hasNeedsInfo = runScript(baseArgs, {
      ...baseEnv,
      CODEX_MOCK_ISSUE_JSON: buildIssuePayload({
        state: 'open',
        labels: ['docs-v2', 'type: enhancement', 'area: ci-cd', 'classification: high', 'priority: high', 'status: needs-info']
      })
    });
    assertFailedWith(hasNeedsInfo, /forbidden label: status: needs-info/i, 'expected forbidden needs-info to fail');
    console.log('   ✓ issue-state forbidden label case passed');

    // Closed issue
    const closedIssue = runScript(baseArgs, {
      ...baseEnv,
      CODEX_MOCK_ISSUE_JSON: buildIssuePayload({
        state: 'closed',
        labels: ['docs-v2', 'type: enhancement', 'area: ci-cd', 'classification: high', 'priority: high']
      })
    });
    assertFailedWith(closedIssue, /must be in state "open"/i, 'expected closed issue to fail');
    console.log('   ✓ issue-state closed issue case passed');

    // gh unavailable
    const ghUnavailable = runScript(baseArgs, {
      ...baseEnv,
      CODEX_MOCK_ISSUE_ERROR: 'mock issue source unavailable'
    });
    assertFailedWith(ghUnavailable, /issue readiness check failed/i, 'expected gh failure to fail readiness check');
    console.log('   ✓ issue-state unavailable case passed');

    const committedWorkPass = runScript(
      [
        '--branch',
        branchName,
        '--contract',
        contractPath,
        '--require-committed-work',
        '--base-ref',
        'docs-v2-dev',
        '--files',
        '.codex/task-contract.yaml'
      ],
      {
        ...baseEnv,
        CODEX_MOCK_AHEAD_COUNT: '2'
      }
    );
    assert.strictEqual(
      committedWorkPass.status,
      0,
      `expected committed-work pass: ${committedWorkPass.stderr || committedWorkPass.stdout}`
    );
    console.log('   ✓ committed-work pass case passed');

    const committedWorkMissingCommit = runScript(
      [
        '--branch',
        branchName,
        '--contract',
        contractPath,
        '--require-committed-work',
        '--base-ref',
        'docs-v2-dev',
        '--files',
        '.codex/task-contract.yaml'
      ],
      {
        ...baseEnv,
        CODEX_MOCK_AHEAD_COUNT: '0'
      }
    );
    assertFailedWith(
      committedWorkMissingCommit,
      /has no commits ahead of docs-v2-dev/i,
      'expected missing committed work to fail'
    );
    console.log('   ✓ committed-work missing commit case passed');

    const cleanTreePass = runScript(
      [
        '--branch',
        branchName,
        '--contract',
        contractPath,
        '--validate-contract-only',
        '--require-clean-tree'
      ],
      {
        ...baseEnv,
        CODEX_MOCK_WORKTREE_STATUS: ''
      }
    );
    assert.strictEqual(cleanTreePass.status, 0, `expected clean-tree pass: ${cleanTreePass.stderr || cleanTreePass.stdout}`);
    console.log('   ✓ clean-tree pass case passed');

    const cleanTreeFail = runScript(
      [
        '--branch',
        branchName,
        '--contract',
        contractPath,
        '--validate-contract-only',
        '--require-clean-tree'
      ],
      {
        ...baseEnv,
        CODEX_MOCK_WORKTREE_STATUS: ' M docs.json\n?? tasks/generated-report.md'
      }
    );
    assertFailedWith(cleanTreeFail, /working tree is not clean/i, 'expected dirty worktree to fail');
    console.log('   ✓ clean-tree dirty case passed');
  } catch (error) {
    failures.push(error.message);
  }

  return {
    passed: failures.length === 0,
    total: 13,
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
