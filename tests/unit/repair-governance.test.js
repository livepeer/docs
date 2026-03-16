#!/usr/bin/env node
/**
 * @script            repair-governance.test
 * @category          validator
 * @purpose           governance:repo-health
 * @scope             tests/unit, tools/scripts/orchestrators/repair-governance.js, .github/workflows/repair-governance.yml
 * @domain            docs
 * @needs             R-R14, R-R18, R-C6
 * @purpose-statement Tests repair-governance.js for safe dry-run, fix, rollback, strict exit handling, and workflow contract coverage.
 * @pipeline          manual
 * @usage             node tests/unit/repair-governance.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  parseArgs,
  runRepair
} = require('../../tools/scripts/orchestrators/repair-governance.js');

const REPO_ROOT = path.resolve(__dirname, '../..');
const AUDIT_SCRIPT_PATH = 'tools/scripts/validators/governance/audit-script-inventory.js';
const SCRIPT_DOCS_TEST_PATH = 'tests/unit/script-docs.test.js';
const INVENTORY_JSON_PATH = 'tasks/reports/repo-ops/SCRIPT_INVENTORY_FULL.json';
const REPORT_JSON_PATH = 'tasks/reports/repo-ops/REPAIR_REPORT_LATEST.json';
const REPORT_MD_PATH = 'tasks/reports/repo-ops/REPAIR_REPORT_LATEST.md';
const WORKFLOW_PATH = path.join(REPO_ROOT, '.github/workflows/repair-governance.yml');

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function writeJson(absPath, value) {
  writeFile(absPath, `${JSON.stringify(value, null, 2)}\n`);
}

function mkRepo(prefix) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  writeJson(path.join(dir, 'tasks/reports/script-classifications.json'), []);
  return dir;
}

function buildSummary(overrides = {}) {
  const gradeDistribution = overrides.grade_distribution || {};
  const pipelineVerification = overrides.pipeline_verification || {};
  const classificationSync = overrides.classification_sync || {};

  return {
    total_scripts: overrides.total_scripts ?? 12,
    grade_distribution: {
      A: gradeDistribution.A ?? 4,
      B: gradeDistribution.B ?? 3,
      C: gradeDistribution.C ?? 2,
      F: gradeDistribution.F ?? 3
    },
    pipeline_verification: {
      MATCH: pipelineVerification.MATCH ?? 0,
      MISMATCH: pipelineVerification.MISMATCH ?? 3,
      MISSING: pipelineVerification.MISSING ?? 0
    },
    classification_sync: {
      not_in_json: classificationSync.not_in_json ?? 2,
      phantom: classificationSync.phantom ?? 1
    }
  };
}

function buildAuditReport({ summary, repair, scripts = [], classificationRows = [] }) {
  return {
    summary,
    scripts,
    classification_rows: classificationRows,
    repair
  };
}

function makeRunner(repoRoot, scenario) {
  const state = {
    plainAuditCalls: 0,
    previewCalls: 0,
    applyCalls: 0,
    auditArgs: [],
    scriptDocsArgs: [],
    gitStatusArgs: [],
    gitAddArgs: [],
    gitCommitArgs: []
  };

  function ok(stdout = '') {
    return { status: 0, stdout, stderr: '' };
  }

  return {
    state,
    run(command, args) {
      if (command === 'node' && args[0] === AUDIT_SCRIPT_PATH) {
        state.auditArgs.push(args.slice());
        if (args.includes('--fix') && args.includes('--dry-run')) {
          state.previewCalls += 1;
          writeJson(path.join(repoRoot, INVENTORY_JSON_PATH), scenario.previewReport);
          return ok();
        }

        if (args.includes('--fix')) {
          state.applyCalls += 1;
          if (typeof scenario.onApply === 'function') {
            scenario.onApply();
          }
          writeJson(path.join(repoRoot, INVENTORY_JSON_PATH), scenario.fixReport);
          return scenario.applyResult || ok();
        }

        const nextReport = state.plainAuditCalls === 0 ? scenario.baselineReport : scenario.postAuditReport || scenario.baselineReport;
        state.plainAuditCalls += 1;
        writeJson(path.join(repoRoot, INVENTORY_JSON_PATH), nextReport);
        return ok();
      }

      if (command === 'node' && args[0] === SCRIPT_DOCS_TEST_PATH) {
        state.scriptDocsArgs.push(args.slice());
        return scenario.scriptDocsResult || ok();
      }

      if (command === 'python3') {
        return scenario.pythonResult || ok();
      }

      if (command === 'git' && args[0] === 'status') {
        state.gitStatusArgs.push(args.slice(3));
        const dirtyOutput = (scenario.dirtyPaths || [])
          .map((repoPath) => ` M ${repoPath}`)
          .join('\n');
        return ok(dirtyOutput ? `${dirtyOutput}\n` : '');
      }

      if (command === 'git' && args[0] === 'add') {
        state.gitAddArgs.push(args.slice(2));
        return ok();
      }

      if (command === 'git' && args[0] === 'commit') {
        state.gitCommitArgs.push(args.slice(1));
        return ok();
      }

      throw new Error(`Unexpected command: ${command} ${args.join(' ')}`);
    }
  };
}

function readReport(repoRoot) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, REPORT_JSON_PATH), 'utf8'));
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    assert.throws(
      () => parseArgs([]),
      /requires explicit scope during the @owner -> @domain migration/
    );
  });

  cases.push(async () => {
    assert.throws(
      () => parseArgs(['--full']),
      /Full-repo script-governance repair is disabled/
    );
  });

  cases.push(async () => {
    const repoRoot = mkRepo('repair-governance-success-');
    const targetPath = 'tools/scripts/example.js';
    writeFile(path.join(repoRoot, targetPath), '#!/usr/bin/env node\nconsole.log("before");\n');

    const baseline = buildAuditReport({
      summary: buildSummary()
    });
    const preview = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          json_entries_updated: 2,
          headers_domain_added: 1,
          headers_script_added: 1,
          headers_usage_added: 1,
          indexes_regenerated: true,
          total_fixes: 5,
          planned_files: [targetPath, 'tasks/reports/script-classifications.json']
        },
        projected_summary: buildSummary({
          grade_distribution: { A: 7, B: 3, C: 1, F: 1 },
          pipeline_verification: { MISMATCH: 0 },
          classification_sync: { not_in_json: 0, phantom: 0 }
        }),
        needs_human: []
      }
    });
    const applied = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          json_entries_updated: 2,
          headers_domain_added: 1,
          headers_script_added: 1,
          headers_usage_added: 1,
          indexes_regenerated: true,
          total_fixes: 5,
          files_modified: [targetPath, 'tasks/reports/script-classifications.json']
        },
        needs_human: []
      }
    });
    const postAudit = buildAuditReport({
      summary: buildSummary({
        grade_distribution: { A: 7, B: 3, C: 1, F: 1 },
        pipeline_verification: { MISMATCH: 0 },
        classification_sync: { not_in_json: 0, phantom: 0 }
      })
    });
    const runner = makeRunner(repoRoot, {
      baselineReport: baseline,
      previewReport: preview,
      fixReport: applied,
      postAuditReport: postAudit,
      onApply() {
        writeFile(path.join(repoRoot, targetPath), '#!/usr/bin/env node\nconsole.log("after");\n');
      }
    });

    const result = runRepair(parseArgs(['--staged']), {
      repoRoot,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: runner.run
    });

    assert.strictEqual(result.exitCode, 0);
    assert.strictEqual(result.report.verification, 'PASS');
    assert.ok(runner.state.auditArgs.every((args) => args.includes('--staged')));
    assert.deepStrictEqual(runner.state.scriptDocsArgs, [[SCRIPT_DOCS_TEST_PATH, '--check', '--staged']]);
    assert.deepStrictEqual(runner.state.gitAddArgs, [['tasks/reports/script-classifications.json', targetPath]]);
    assert.deepStrictEqual(runner.state.gitCommitArgs, []);
    assert.strictEqual(fs.existsSync(path.join(repoRoot, REPORT_MD_PATH)), true);

    const report = readReport(repoRoot);
    assert.strictEqual(report.repairs_applied.total_fixes, 5);
    assert.strictEqual(report.repairs_applied.headers_domain_added, 1);
    assert.deepStrictEqual(report.repairs_applied.files_modified, ['tasks/reports/script-classifications.json', targetPath]);
  });

  cases.push(async () => {
    const repoRoot = mkRepo('repair-governance-files-');
    const targetPath = 'tools/scripts/example.js';
    const baseline = buildAuditReport({
      summary: buildSummary()
    });
    const preview = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          headers_domain_added: 1,
          total_fixes: 1,
          planned_files: [targetPath]
        },
        projected_summary: buildSummary(),
        needs_human: []
      }
    });
    const applied = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          headers_domain_added: 1,
          total_fixes: 1,
          files_modified: [targetPath]
        },
        needs_human: []
      }
    });
    const runner = makeRunner(repoRoot, {
      baselineReport: baseline,
      previewReport: preview,
      fixReport: applied,
      postAuditReport: buildAuditReport({ summary: buildSummary() })
    });

    const result = runRepair(parseArgs(['--files', targetPath]), {
      repoRoot,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: runner.run
    });

    assert.strictEqual(result.exitCode, 0);
    assert.ok(runner.state.auditArgs.every((args) => args.includes('--files') && args.includes(targetPath)));
    assert.deepStrictEqual(runner.state.scriptDocsArgs, [[SCRIPT_DOCS_TEST_PATH, '--check', '--files', targetPath]]);
  });

  cases.push(async () => {
    const repoRoot = mkRepo('repair-governance-strict-');
    const baseline = buildAuditReport({
      summary: buildSummary()
    });
    const preview = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          total_fixes: 1,
          planned_files: ['tools/scripts/example.js']
        },
        projected_summary: buildSummary(),
        needs_human: [
          {
            path: 'tools/scripts/example.js',
            missing: ['@pipeline']
          }
        ]
      }
    });
    const runner = makeRunner(repoRoot, {
      baselineReport: baseline,
      previewReport: preview
    });

    const result = runRepair(parseArgs(['--dry-run', '--strict']), {
      repoRoot,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: runner.run
    });

    assert.strictEqual(result.exitCode, 3);
    assert.strictEqual(result.report.verification, 'SKIPPED (dry-run)');
    assert.strictEqual(result.report.needs_human.length, 1);
  });

  cases.push(async () => {
    const repoRoot = mkRepo('repair-governance-rollback-');
    const targetPath = 'tools/scripts/example.js';
    const original = '#!/usr/bin/env node\nconsole.log("user change");\n';
    writeFile(path.join(repoRoot, targetPath), original);

    const baseline = buildAuditReport({
      summary: buildSummary()
    });
    const preview = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          headers_domain_added: 1,
          total_fixes: 1,
          planned_files: [targetPath]
        },
        projected_summary: buildSummary(),
        needs_human: []
      }
    });
    const applied = buildAuditReport({
      summary: buildSummary(),
      repair: {
        fixes: {
          headers_domain_added: 1,
          total_fixes: 1,
          files_modified: [targetPath]
        },
        needs_human: []
      }
    });
    const runner = makeRunner(repoRoot, {
      baselineReport: baseline,
      previewReport: preview,
      fixReport: applied,
      dirtyPaths: [targetPath],
      onApply() {
        writeFile(path.join(repoRoot, targetPath), '#!/usr/bin/env node\nconsole.log("repair");\n');
      },
      scriptDocsResult: {
        status: 1,
        stdout: '',
        stderr: 'verification failed'
      }
    });

    const result = runRepair(parseArgs(['--staged']), {
      repoRoot,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: runner.run
    });

    assert.strictEqual(result.exitCode, 1);
    assert.strictEqual(result.report.verification, 'FAIL (rolled back at stage VERIFY)');
    assert.strictEqual(fs.readFileSync(path.join(repoRoot, targetPath), 'utf8'), original);
    assert.deepStrictEqual(runner.state.gitAddArgs, []);
  });

  cases.push(async () => {
    const repoWithIssues = mkRepo('repair-governance-report-issues-');
    const issueRunner = makeRunner(repoWithIssues, {
      baselineReport: buildAuditReport({
        summary: buildSummary()
      })
    });

    const issueResult = runRepair(parseArgs(['--report-only']), {
      repoRoot: repoWithIssues,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: issueRunner.run
    });

    assert.strictEqual(issueResult.exitCode, 2);

    const repoClean = mkRepo('repair-governance-report-clean-');
    const cleanRunner = makeRunner(repoClean, {
      baselineReport: buildAuditReport({
        summary: buildSummary({
          grade_distribution: { A: 10, B: 2, C: 0, F: 0 },
          pipeline_verification: { MISMATCH: 0 },
          classification_sync: { not_in_json: 0, phantom: 0 }
        })
      })
    });

    const cleanResult = runRepair(parseArgs(['--report-only']), {
      repoRoot: repoClean,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: cleanRunner.run
    });

    assert.strictEqual(cleanResult.exitCode, 0);
  });

  cases.push(async () => {
    const repoRoot = mkRepo('repair-governance-dry-run-');
    const targetPath = 'tools/scripts/example.js';
    const original = '#!/usr/bin/env node\nconsole.log("unchanged");\n';
    writeFile(path.join(repoRoot, targetPath), original);

    const runner = makeRunner(repoRoot, {
      baselineReport: buildAuditReport({
        summary: buildSummary()
      }),
      previewReport: buildAuditReport({
        summary: buildSummary(),
        repair: {
          fixes: {
            headers_domain_added: 1,
            total_fixes: 1,
            planned_files: [targetPath]
          },
          projected_summary: buildSummary({
            grade_distribution: { A: 5, B: 4, C: 2, F: 1 }
          }),
          needs_human: []
        }
      })
    });

    const result = runRepair(parseArgs(['--dry-run']), {
      repoRoot,
      auditScriptPath: AUDIT_SCRIPT_PATH,
      scriptDocsTestPath: SCRIPT_DOCS_TEST_PATH,
      runCommand: runner.run
    });

    assert.strictEqual(result.exitCode, 0);
    assert.strictEqual(fs.readFileSync(path.join(repoRoot, targetPath), 'utf8'), original);
    assert.deepStrictEqual(runner.state.gitAddArgs, []);
  });

  cases.push(async () => {
    const workflow = fs.readFileSync(WORKFLOW_PATH, 'utf8');

    assert.match(workflow, /cron:\s*'0 5 \* \* 1'/);
    assert.match(workflow, /workflow_dispatch:/);
    assert.match(workflow, /default:\s*dry-run/);
    assert.match(workflow, /ref:\s*docs-v2/);
    assert.match(workflow, /base:\s*docs-v2/);
    assert.match(workflow, /node tools\/scripts\/orchestrators\/repair-governance\.js/);
    assert.match(workflow, /actions\/upload-artifact@v4/);
    assert.match(workflow, /peter-evans\/create-pull-request@v7/);
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   [pass] ${name}`);
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
        console.log(`\n[pass] repair-governance tests passed (${result.total} cases)`);
        process.exit(0);
      }

      console.error(`\n[fail] ${result.errors.length} repair-governance test failure(s)`);
      result.errors.forEach((entry) => console.error(` - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n[fail] repair-governance tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
