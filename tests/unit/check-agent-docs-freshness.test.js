#!/usr/bin/env node
/**
 * @script            check-agent-docs-freshness.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/validators/governance/check-agent-docs-freshness.js, AGENTS.md, .github/copilot-instructions.md, .claude, .cursor, .windsurf, docs-guide/policies, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Tests the agent governance freshness validator against the canonical runtime file set.
 * @pipeline          P1, P3
 * @usage             node tests/unit/check-agent-docs-freshness.test.js
 */

const assert = require('assert');

const validator = require('../../tools/scripts/validators/governance/check-agent-docs-freshness');

let errors = [];
let warnings = [];

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'tests/unit/check-agent-docs-freshness.test.js',
      rule: 'Agent docs freshness unit',
      message: `${name}: ${error.message}`,
      line: 1
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 Agent Docs Freshness Unit Tests');

  await runCase('Required entries include the canonical runtime set', async () => {
    const entries = validator.buildRequiredEntries();
    const labels = new Set(entries.map((entry) => entry.label));

    [
      'AGENTS',
      'COPILOT-ADAPTER',
      'CLAUDE-ADAPTER',
      'CURSOR-ADAPTER',
      'WINDSURF-ADAPTER',
      'AGENT-GOVERNANCE-POLICY',
      'ROOT-ALLOWLIST-GOVERNANCE-POLICY',
      'CONTRIBUTOR-AGENT-INSTRUCTIONS'
    ].forEach((label) => {
      assert.ok(labels.has(label), `Missing required label: ${label}`);
    });
  });

  await runCase('Validator resolves canonical runtime paths without hard errors', async () => {
    const result = validator.run({ thresholdDays: 3650 });
    assert.ok(result.passed, 'validator should pass without missing canonical files');

    const byLabel = new Map(result.records.map((record) => [record.label, record.path]));
    assert.strictEqual(byLabel.get('AGENTS'), 'AGENTS.md');
    assert.strictEqual(byLabel.get('COPILOT-ADAPTER'), '.github/copilot-instructions.md');
    assert.strictEqual(byLabel.get('CLAUDE-ADAPTER'), '.claude/CLAUDE.md');
    assert.strictEqual(byLabel.get('CURSOR-ADAPTER'), '.cursor/rules/repo-governance.mdc');
    assert.strictEqual(byLabel.get('WINDSURF-ADAPTER'), '.windsurf/rules/repo-governance.md');
    assert.strictEqual(
      byLabel.get('AGENT-GOVERNANCE-POLICY'),
      'docs-guide/policies/agent-governance-framework.mdx'
    );
    assert.strictEqual(
      byLabel.get('ROOT-ALLOWLIST-GOVERNANCE-POLICY'),
      'docs-guide/policies/root-allowlist-governance.mdx'
    );
    assert.strictEqual(
      byLabel.get('CONTRIBUTOR-AGENT-INSTRUCTIONS'),
      'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md'
    );
  });

  return {
    passed: errors.length === 0,
    total: 2,
    errors,
    warnings
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ Agent docs freshness unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} agent docs freshness unit test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Agent docs freshness unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
