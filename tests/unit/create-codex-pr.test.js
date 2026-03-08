#!/usr/bin/env node
/**
 * @script            create-codex-pr.test
 * @category          generator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/create-codex-pr.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests create-codex-pr.js — validates PR creation logic and branch naming
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/create-codex-pr.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/create-codex-pr.js');

function runScript(args) {
  return spawnSync('node', [SCRIPT_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function makeContract(absPath, taskId = 3456) {
  const content = [
    `task_id: ${taskId}`,
    'base_branch: docs-v2',
    `branch: codex/${taskId}-auto-pr-body`,
    'scope_in:',
    '  - v2/community/',
    '  - docs.json',
    'scope_out:',
    '  - v1/',
    'allowed_generated:',
    '  - docs-index.json',
    'acceptance_checks:',
    '  - node tests/run-pr-checks.js --base-ref docs-v2',
    '  - node tests/integration/v2-link-audit.js --files v2/community/faq.mdx --strict',
    'follow_up_issues:',
    `  - ${taskId + 1}`,
    ''
  ].join('\n');
  writeFile(absPath, content);
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const tmp = mkTmpDir('codex-pr-body-');
    const contractPath = path.join(tmp, 'task-contract.yaml');
    const outputPath = path.join(tmp, 'pr-body.md');
    makeContract(contractPath);

    const run = runScript([
      '--contract',
      contractPath,
      '--output',
      outputPath,
      '--head',
      'codex/3456-auto-pr-body',
      '--base',
      'docs-v2',
      '--changed-files',
      'v2/community/faq.mdx,docs.json'
    ]);

    assert.strictEqual(run.status, 0, `generator failed: ${run.stderr || run.stdout}`);
    const body = fs.readFileSync(outputPath, 'utf8');
    assert.match(body, /codex-pr-body-generated:/, 'body should include generated marker');
    assert.match(body, /^Fixes #3456$/m, 'body should include closing keyword for task issue');
    assert.match(body, /^## Scope/m, 'body should include Scope section');
    assert.match(body, /^## Validation/m, 'body should include Validation section');
    assert.match(body, /^## Follow-up Tasks/m, 'body should include Follow-up section');
    assert.match(body, /`v2\/community\/faq\.mdx`/, 'body should include changed file list');
    assert.match(body, /#3457/, 'body should include follow-up issue id');
  });

  cases.push(async () => {
    const tmp = mkTmpDir('codex-pr-dry-run-');
    const contractPath = path.join(tmp, 'task-contract.yaml');
    const outputPath = path.join(tmp, 'pr-body.md');
    makeContract(contractPath, 4567);

    const run = runScript([
      '--contract',
      contractPath,
      '--output',
      outputPath,
      '--head',
      'codex/4567-auto-pr-body',
      '--base',
      'docs-v2',
      '--changed-files',
      'docs.json',
      '--create',
      '--dry-run'
    ]);

    assert.strictEqual(run.status, 0, `dry-run create failed: ${run.stderr || run.stdout}`);
    const output = `${run.stdout}\n${run.stderr}`;
    assert.match(output, /DRY RUN: gh pr create/, 'dry-run should print gh create command');
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
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
        console.log(`\n✅ create-codex-pr tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} create-codex-pr test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ create-codex-pr tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
