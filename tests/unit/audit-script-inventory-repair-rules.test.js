#!/usr/bin/env node
/**
 * @script            audit-script-inventory-repair-rules.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/scripts/validators/governance
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety.
 * @pipeline          manual (not yet in pipeline)
 * @usage             node tests/unit/audit-script-inventory-repair-rules.test.js
 */

const assert = require('assert');
const {
  buildNeedsHumanEntry,
  buildRepairPlan,
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
    domain: overrides.domain || '',
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
    assert.strictEqual(state.projected.domain, 'docs');
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

  runCase('updates stale classification pipeline when header pipeline is already verified', () => {
    const report = {
      classification_rows: [
        {
          path: 'tests/unit/run-pr-checks.test.js',
          script: 'run-pr-checks.test',
          category: 'validator',
          purpose: 'qa:repo-health',
          scope: 'tests/unit, tests/run-pr-checks.js',
          needs: 'R-R14, R-R29',
          purpose_statement: 'Tests run-pr-checks lane parsing.',
          pipeline: 'P1, P3'
        }
      ],
      scripts: [
        {
          path: 'tests/unit/run-pr-checks.test.js',
          script: 'run-pr-checks.test',
          category: 'validator',
          purpose: 'qa:repo-health',
          scope: 'tests/unit, tests/run-pr-checks.js',
          domain: 'docs',
          needs: 'R-R14, R-R29',
          purpose_statement: 'Tests run-pr-checks lane parsing.',
          pipeline_declared: 'manual',
          dualmode: '',
          usage: 'node tests/unit/run-pr-checks.test.js',
          category_valid: true,
          purpose_valid: true,
          scope_valid: true,
          pipeline_verified: 'MATCH',
          actual_pipeline_set: new Set(['manual']),
          triggers: [{ type: 'manual', caller: 'none', pipeline: 'manual' }]
        }
      ]
    };

    const plan = buildRepairPlan(report, {
      scopedMode: true,
      scopedPaths: ['tests/unit/run-pr-checks.test.js']
    });

    const row = plan.classification_rows.find((entry) => entry.path === 'tests/unit/run-pr-checks.test.js');
    assert.ok(row);
    assert.strictEqual(row.pipeline, 'manual');
    assert.strictEqual(plan.fixes.json_entries_updated, 1);
    assert.ok(plan.planned_files.includes('tasks/reports/script-classifications.json'));
  });

  runCase('accepts path-scoped governance values as valid scope', () => {
    const needsHuman = buildNeedsHumanEntry(
      'tests/unit/docs-route-scope.test.js',
      {
        category: 'validator',
        purpose: 'qa:repo-health',
        scope: 'tests, docs.json',
        needs: 'E-C1, R-R14',
        purpose_statement: 'Verifies docs.json-derived tab and group route scopes resolve to live files.',
        pipeline_declared: 'P1 (commit, via run-all)'
      },
      true,
      { pipelineNeedsHuman: false }
    );

    assert.strictEqual(needsHuman, null);
  });

  runCase('keeps explicit empty scoped repair from expanding to full repo', () => {
    const plan = buildRepairPlan(
      {
        classification_rows: [
          {
            path: 'tools/scripts/missing.js',
            script: 'missing'
          }
        ],
        scripts: []
      },
      {
        scopedMode: true,
        scopedPaths: []
      }
    );

    assert.strictEqual(plan.fixes.json_phantoms_removed, 0);
    assert.deepStrictEqual(plan.planned_files, []);
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
