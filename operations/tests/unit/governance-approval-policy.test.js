#!/usr/bin/env node
/**
 * @script            governance-approval-policy.test
 * @category          validator
 * @type              validator
 * @purpose           governance:repo-health
 * @scope             operations/tests/unit, operations/governance/config/governance-approval-policy.json, operations/scripts/validators/governance/pr/check-governance-approvals.js, .github/pull_request_template.md, operations/tests/run-pr-checks.js
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Tests the production governance approval policy and PR approval validator scenarios.
 * @pipeline          manual, P3
 * @usage             node operations/tests/unit/governance-approval-policy.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { POLICY_PATH, extractSection, parseApprovalSection, run } = require('../../scripts/validators/governance/pr/check-governance-approvals');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const PR_TEMPLATE_PATH = path.join(REPO_ROOT, '.github/pull_request_template.md');
const POLICY_ABS_PATH = path.join(REPO_ROOT, POLICY_PATH);

function readJson(absPath) {
  return JSON.parse(fs.readFileSync(absPath, 'utf8'));
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const policy = readJson(POLICY_ABS_PATH);
    assert.strictEqual(policy.version, 'governance-approval-policy.v1');
    assert.ok(Array.isArray(policy.rules));
    assert.ok(policy.rules.some((rule) => rule.id === 'governance-schema'));
    assert.ok(policy.rules.some((rule) => rule.id === 'workflow-governance'));
    assert.ok(policy.rules.some((rule) => rule.id === 'governance-retirement'));
  });

  cases.push(async () => {
    const template = fs.readFileSync(PR_TEMPLATE_PATH, 'utf8');
    const section = extractSection(template, 'Governance Approval');
    assert.ok(section.includes('Approval class:'), 'PR template must include Approval class');
    assert.ok(section.includes('Approver:'), 'PR template must include Approver');
    assert.ok(section.includes('Rationale:'), 'PR template must include Rationale');
    assert.ok(section.includes('Evidence / decision record:'), 'PR template must include Evidence / decision record');
  });

  cases.push(async () => {
    const section = [
      '- Approval class: governance-schema, governance-gate',
      '- Approver: @docs-reviewer',
      '- Rationale: Gate behavior changed for repo governance.',
      '- Evidence / decision record: docs-guide/policies/ownerless-governance.mdx'
    ].join('\n');
    const policy = readJson(POLICY_ABS_PATH);
    const fields = parseApprovalSection(section, policy);
    assert.strictEqual(fields.approval_class, 'governance-schema, governance-gate');
    assert.strictEqual(fields.approver, '@docs-reviewer');
  });

  cases.push(async () => {
    const result = run({
      files: ['operations/governance/config/root-governance.json'],
      labels: ['approval:governance-schema'],
      prBody: [
        '## Description',
        '',
        'Test body',
        '',
        '## Governance Approval',
        '',
        '- Approval class: governance-schema',
        '- Approver: @docs-reviewer',
        '- Rationale: Canonical governance manifest update.',
        '- Evidence / decision record: decision-123'
      ].join('\n')
    });
    assert.ok(result.passed, result.issues.join('\n'));
    assert.deepStrictEqual(result.required_rule_ids, ['governance-schema']);
  });

  cases.push(async () => {
    const result = run({
      files: ['.github/workspace/framework-canonical.md'],
      labels: [],
      prBody: [
        '## Governance Approval',
        '',
        '- Approval class: workflow-governance',
        '- Approver: @docs-reviewer',
        '- Rationale: Transitional workflow governance update.',
        '- Evidence / decision record: decision-456'
      ].join('\n')
    });
    assert.ok(!result.passed, 'workflow-governance changes should fail without the required label');
    assert.ok(
      result.issues.some((issue) => issue.includes('approval:workflow-governance')),
      'failure should mention missing workflow-governance label'
    );
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
        console.log(`\n✅ governance-approval-policy tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} governance-approval-policy test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ governance-approval-policy tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
