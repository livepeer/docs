#!/usr/bin/env node
/**
 * @script           audit-script-inventory-repair-rules.test
 * @category         validator
 * @purpose          qa:repo-health
 * @scope            tests/unit, tools/scripts/validators/governance
 * @owner            docs
 * @needs            E-C1, R-R14
 * @purpose-statement Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety.
 * @pipeline         manual (not yet in pipeline)
 * @usage            node tests/unit/audit-script-inventory-repair-rules.test.js
 */

const assert = require('assert');
const {
  buildNeedsHumanEntry,
  buildProjectedHeaderState,
  selectSafePipelineProposal
} = require('../../tools/scripts/validators/governance/audit-script-inventory.js');

let failures = [];

function makeScriptInfo(overrides = {}) {
  return {
    path: overrides.path || 'tools/scripts/example.js',
    script: overrides.script || '',
    category: overrides.category || '',
    purpose: overrides.purpose || '',
    scope: overrides.scope || '',
    owner: overrides.owner || '',
    needs: overrides.needs || '',
    purpose_statement: overrides.purpose_statement || '',
    pipeline_declared: overrides.pipeline_declared || '',
    dualmode: overrides.dualmode || '',
    usage: overrides.usage || '',
    actual_pipeline_set: overrides.actual_pipeline_set || new Set(['manual']),
    pipeline_verified: overrides.pipeline_verified || 'MISSING'
  };
}

function runCase(name, fn) {
  try {
    fn();
    console.log(`   [pass] ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
  }
}

function main() {
  failures = [];
  console.log('Audit Script Inventory Repair Rules Tests');

  runCase('does not backfill judgement fields from classification JSON', () => {
    const scriptInfo = makeScriptInfo({
      path: 'tools/scripts/example.js'
    });
    const classificationRow = {
      path: 'tools/scripts/example.js',
      category: 'validator',
      purpose: 'qa:repo-health',
      needs: 'R-R14',
      purpose_statement: 'Example statement',
      pipeline: 'manual'
    };
    const content = '#!/usr/bin/env node\nconsole.log("example");\n';
    const state = buildProjectedHeaderState(scriptInfo, classificationRow, content);

    assert.strictEqual(state.projected.category, '');
    assert.strictEqual(state.projected.purpose, '');
    assert.strictEqual(state.projected.needs, '');
    assert.strictEqual(state.projected.purpose_statement, '');
    assert.strictEqual(state.projected.owner, 'docs');
    assert.strictEqual(state.projected.script, 'example');
    assert.strictEqual(state.projected.usage, 'node tools/scripts/example.js [flags]');
  });

  runCase('rejects pipeline proposals that drop detected triggers', () => {
    const scriptInfo = makeScriptInfo({
      pipeline_declared: 'manual - diagnostic tool',
      actual_pipeline_set: new Set(['P1', 'P3']),
      pipeline_verified: 'MISMATCH:phantom claim manual; undeclared automation P1, P3'
    });
    const pipelineDecision = selectSafePipelineProposal(
      scriptInfo,
      { pipeline: 'manual - not yet in pipeline' },
      {}
    );

    assert.strictEqual(pipelineDecision.safe_to_apply, false);
    assert.strictEqual(pipelineDecision.value, 'manual - diagnostic tool');
    assert.strictEqual(pipelineDecision.needs_human, true);

    const needsHuman = buildNeedsHumanEntry(
      scriptInfo.path,
      {
        category: 'validator',
        purpose: 'qa:repo-health',
        scope: 'full-repo',
        needs: 'R-R14',
        purpose_statement: 'Example statement',
        pipeline_declared: pipelineDecision.value
      },
      true,
      { pipelineNeedsHuman: pipelineDecision.needs_human }
    );

    assert.ok(needsHuman.missing.includes('@pipeline'));
  });

  runCase('accepts pipeline proposals that cover the full detected set', () => {
    const scriptInfo = makeScriptInfo({
      pipeline_declared: 'manual - diagnostic tool',
      actual_pipeline_set: new Set(['P1', 'P2', 'P3']),
      pipeline_verified: 'MISMATCH:phantom claim manual; undeclared automation P1, P2, P3'
    });
    const candidate = 'P1 (commit), P2 (push), P3 (PR, Track B)';
    const pipelineDecision = selectSafePipelineProposal(
      scriptInfo,
      { pipeline: candidate },
      {}
    );

    assert.strictEqual(pipelineDecision.safe_to_apply, true);
    assert.strictEqual(pipelineDecision.value, candidate);
    assert.strictEqual(pipelineDecision.needs_human, false);
  });

  if (failures.length > 0) {
    console.error(`\n[fail] ${failures.length} audit repair rule test(s) failed`);
    failures.forEach((failure) => console.error(` - ${failure}`));
    process.exit(1);
  }

  console.log('\n[pass] Audit repair rule tests passed');
}

if (require.main === module) {
  main();
}
