#!/usr/bin/env node
/**
 * @script            repair-governance
 * @category          orchestrator
 * @purpose           governance:repo-health
 * @scope             full-repo
 * @owner             docs
 * @needs             R-R14, R-R18, R-C6
 * @purpose-statement Chains audit, safe repair, verification, and reporting into a single self-healing governance pipeline.
 * @pipeline          P2 (push), P5 (scheduled, weekly), P6 (on-demand), manual
 * @dualmode          --report-only | --dry-run | default fix mode
 * @usage             node tools/scripts/orchestrators/repair-governance.js [--dry-run] [--auto-commit] [--report-only] [--strict]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  CLASSIFICATION_DATA_PATH
} = require('../../lib/script-governance-config');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const AUDIT_SCRIPT_PATH = 'tools/scripts/validators/governance/audit-script-inventory.js';
const SCRIPT_DOCS_TEST_PATH = 'tests/unit/script-docs.test.js';
const INVENTORY_JSON_PATH = 'tasks/reports/repo-ops/SCRIPT_INVENTORY_FULL.json';
const INVENTORY_MD_PATH = 'tasks/reports/repo-ops/SCRIPT_INVENTORY_FULL.md';
const REPAIR_REPORT_JSON_PATH = 'tasks/reports/repo-ops/REPAIR_REPORT_LATEST.json';
const REPAIR_REPORT_MD_PATH = 'tasks/reports/repo-ops/REPAIR_REPORT_LATEST.md';
const PYTHON_VALIDATE_COMMAND = ['-c', "import json; json.load(open('tasks/reports/script-classifications.json'))"];

function parseArgs(argv) {
  const args = {
    dryRun: false,
    autoCommit: false,
    reportOnly: false,
    strict: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--auto-commit') {
      args.autoCommit = true;
      continue;
    }
    if (token === '--report-only') {
      args.reportOnly = true;
      continue;
    }
    if (token === '--strict') {
      args.strict = true;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.dryRun && args.reportOnly) {
    throw new Error('--dry-run and --report-only are mutually exclusive.');
  }
  if (args.autoCommit && (args.dryRun || args.reportOnly)) {
    throw new Error('--auto-commit is only valid in fix mode.');
  }

  return args;
}

function usage() {
  console.log(
    'Usage: node tools/scripts/orchestrators/repair-governance.js [--dry-run] [--auto-commit] [--report-only] [--strict]'
  );
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(repoRoot, repoPath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, repoPath), 'utf8'));
}

function writeText(repoRoot, repoPath, content) {
  const absPath = path.join(repoRoot, repoPath);
  ensureDirectory(path.dirname(absPath));
  fs.writeFileSync(absPath, content, 'utf8');
}

function snapshotFiles(repoRoot, repoPaths) {
  const snapshot = new Map();
  [...new Set(repoPaths.filter(Boolean))].forEach((repoPath) => {
    const absPath = path.join(repoRoot, repoPath);
    if (!fs.existsSync(absPath)) {
      snapshot.set(repoPath, null);
      return;
    }
    snapshot.set(repoPath, fs.readFileSync(absPath));
  });
  return snapshot;
}

function restoreSnapshots(repoRoot, snapshot) {
  snapshot.forEach((content, repoPath) => {
    const absPath = path.join(repoRoot, repoPath);
    if (content === null) {
      if (fs.existsSync(absPath)) {
        fs.unlinkSync(absPath);
      }
      return;
    }
    ensureDirectory(path.dirname(absPath));
    fs.writeFileSync(absPath, content);
  });
}

function defaultRunCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || REPO_ROOT,
    encoding: 'utf8'
  });

  return {
    command,
    args,
    status: Number.isInteger(result.status) ? result.status : 1,
    stdout: result.stdout || '',
    stderr: result.stderr || ''
  };
}

function normalizeSummary(summary = {}) {
  return {
    total_scripts: Number(summary.total_scripts || 0),
    grade_A: Number(summary.grade_distribution?.A || 0),
    grade_B: Number(summary.grade_distribution?.B || 0),
    grade_C: Number(summary.grade_distribution?.C || 0),
    grade_F: Number(summary.grade_distribution?.F || 0),
    pipeline_mismatches: Number(summary.pipeline_verification?.MISMATCH || 0),
    not_in_json: Number(summary.classification_sync?.not_in_json || 0),
    phantom_json: Number(summary.classification_sync?.phantom || 0)
  };
}

function cloneFixCounts(rawFixes = {}) {
  const fileList = Array.isArray(rawFixes.files_modified) && rawFixes.files_modified.length > 0
    ? rawFixes.files_modified
    : Array.isArray(rawFixes.planned_files)
      ? rawFixes.planned_files
      : [];
  const fixes = {
    json_phantoms_removed: Number(rawFixes.json_phantoms_removed || 0),
    json_entries_added: Number(rawFixes.json_entries_added || 0),
    json_entries_updated: Number(rawFixes.json_entries_updated || 0),
    headers_category_added: Number(rawFixes.headers_category_added || 0),
    headers_purpose_added: Number(rawFixes.headers_purpose_added || 0),
    headers_owner_added: Number(rawFixes.headers_owner_added || 0),
    headers_script_added: Number(rawFixes.headers_script_added || 0),
    headers_usage_added: Number(rawFixes.headers_usage_added || 0),
    headers_scope_added: Number(rawFixes.headers_scope_added || 0),
    headers_needs_added: Number(rawFixes.headers_needs_added || 0),
    headers_purpose_statement_added: Number(rawFixes.headers_purpose_statement_added || 0),
    headers_pipeline_corrected: Number(rawFixes.headers_pipeline_corrected || 0),
    indexes_regenerated: Boolean(rawFixes.indexes_regenerated),
    total_fixes: Number(rawFixes.total_fixes || 0),
    files_modified: fileList.slice().sort()
  };

  return fixes;
}

function signedDelta(nextValue, previousValue) {
  const delta = Number(nextValue || 0) - Number(previousValue || 0);
  return `${delta >= 0 ? '+' : ''}${delta}`;
}

function computeImprovement(preRepair, postRepair, repairPayload) {
  return {
    grade_A_delta: signedDelta(postRepair.grade_A, preRepair.grade_A),
    grade_F_delta: signedDelta(postRepair.grade_F, preRepair.grade_F),
    fixes_applied: Number(repairPayload.fixes?.total_fixes || 0),
    remaining_human_items: Array.isArray(repairPayload.needs_human) ? repairPayload.needs_human.length : 0
  };
}

function hasReportOnlyIssues(summary) {
  return (
    Number(summary.grade_F || 0) > 0 ||
    Number(summary.pipeline_mismatches || 0) > 0 ||
    Number(summary.not_in_json || 0) > 0 ||
    Number(summary.phantom_json || 0) > 0
  );
}

function buildReportObject({
  mode,
  preRepair,
  repairsApplied,
  postRepair,
  needsHuman,
  verification,
  strict,
  warnings
}) {
  return {
    date: new Date().toISOString(),
    mode,
    strict: Boolean(strict),
    pre_repair: preRepair,
    repairs_applied: repairsApplied,
    post_repair: postRepair,
    needs_human: needsHuman,
    verification,
    warnings,
    improvement: computeImprovement(preRepair, postRepair, {
      fixes: repairsApplied,
      needs_human: needsHuman
    })
  };
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# Governance Repair Report');
  lines.push('');
  lines.push(`- Date: ${report.date}`);
  lines.push(`- Mode: ${report.mode}`);
  lines.push(`- Verification: ${report.verification}`);
  lines.push('');
  lines.push('## Pre Repair');
  lines.push('');
  lines.push(`- Total scripts: ${report.pre_repair.total_scripts}`);
  lines.push(`- Grade A/B/C/F: ${report.pre_repair.grade_A}/${report.pre_repair.grade_B}/${report.pre_repair.grade_C}/${report.pre_repair.grade_F}`);
  lines.push(`- Pipeline mismatches: ${report.pre_repair.pipeline_mismatches}`);
  lines.push(`- Not in JSON: ${report.pre_repair.not_in_json}`);
  lines.push(`- Phantom JSON: ${report.pre_repair.phantom_json}`);
  lines.push('');
  lines.push('## Repairs Applied');
  lines.push('');
  lines.push(`- Total fixes: ${report.repairs_applied.total_fixes}`);
  lines.push(`- JSON phantoms removed: ${report.repairs_applied.json_phantoms_removed}`);
  lines.push(`- JSON entries added: ${report.repairs_applied.json_entries_added}`);
  lines.push(`- JSON entries updated: ${report.repairs_applied.json_entries_updated}`);
  lines.push(`- Header category added: ${report.repairs_applied.headers_category_added}`);
  lines.push(`- Header purpose added: ${report.repairs_applied.headers_purpose_added}`);
  lines.push(`- Header owner added: ${report.repairs_applied.headers_owner_added}`);
  lines.push(`- Header script added: ${report.repairs_applied.headers_script_added}`);
  lines.push(`- Header usage added: ${report.repairs_applied.headers_usage_added}`);
  lines.push(`- Header scope added: ${report.repairs_applied.headers_scope_added}`);
  lines.push(`- Header needs added: ${report.repairs_applied.headers_needs_added}`);
  lines.push(`- Header purpose-statement added: ${report.repairs_applied.headers_purpose_statement_added}`);
  lines.push(`- Header pipeline corrected: ${report.repairs_applied.headers_pipeline_corrected}`);
  lines.push(`- Indexes regenerated: ${report.repairs_applied.indexes_regenerated ? 'true' : 'false'}`);
  lines.push('');

  if (report.repairs_applied.files_modified.length > 0) {
    lines.push('### Files Modified');
    lines.push('');
    report.repairs_applied.files_modified.forEach((repoPath) => {
      lines.push(`- ${repoPath}`);
    });
    lines.push('');
  }

  lines.push('## Post Repair');
  lines.push('');
  lines.push(`- Total scripts: ${report.post_repair.total_scripts}`);
  lines.push(`- Grade A/B/C/F: ${report.post_repair.grade_A}/${report.post_repair.grade_B}/${report.post_repair.grade_C}/${report.post_repair.grade_F}`);
  lines.push(`- Pipeline mismatches: ${report.post_repair.pipeline_mismatches}`);
  lines.push(`- Not in JSON: ${report.post_repair.not_in_json}`);
  lines.push(`- Phantom JSON: ${report.post_repair.phantom_json}`);
  lines.push('');

  lines.push('## Needs Human');
  lines.push('');
  if (report.needs_human.length === 0) {
    lines.push('- None');
  } else {
    report.needs_human.forEach((entry) => {
      lines.push(`- ${entry.path}: ${entry.missing.join(', ')}`);
    });
  }
  lines.push('');

  if (report.warnings.length > 0) {
    lines.push('## Warnings');
    lines.push('');
    report.warnings.forEach((warning) => {
      lines.push(`- ${warning}`);
    });
    lines.push('');
  }

  lines.push('## Improvement');
  lines.push('');
  lines.push(`- Grade A delta: ${report.improvement.grade_A_delta}`);
  lines.push(`- Grade F delta: ${report.improvement.grade_F_delta}`);
  lines.push(`- Fixes applied: ${report.improvement.fixes_applied}`);
  lines.push(`- Remaining human items: ${report.improvement.remaining_human_items}`);
  lines.push('');

  return `${lines.join('\n')}\n`;
}

function writeRepairReports(repoRoot, report) {
  writeText(repoRoot, REPAIR_REPORT_JSON_PATH, `${JSON.stringify(report, null, 2)}\n`);
  writeText(repoRoot, REPAIR_REPORT_MD_PATH, buildMarkdownReport(report));
}

function buildContext(overrides = {}) {
  const repoRoot = overrides.repoRoot || REPO_ROOT;
  const auditScriptPath = overrides.auditScriptPath || AUDIT_SCRIPT_PATH;
  const scriptDocsTestPath = overrides.scriptDocsTestPath || SCRIPT_DOCS_TEST_PATH;
  const classificationJsonPath = overrides.classificationJsonPath || CLASSIFICATION_DATA_PATH;

  return {
    repoRoot,
    auditScriptPath,
    scriptDocsTestPath,
    classificationJsonPath,
    inventoryJsonPath: overrides.inventoryJsonPath || INVENTORY_JSON_PATH,
    inventoryMdPath: overrides.inventoryMdPath || INVENTORY_MD_PATH,
    repairReportJsonPath: overrides.repairReportJsonPath || REPAIR_REPORT_JSON_PATH,
    repairReportMdPath: overrides.repairReportMdPath || REPAIR_REPORT_MD_PATH,
    runCommand: overrides.runCommand || defaultRunCommand
  };
}

function runCommandOrThrow(context, command, args, stageName) {
  const result = context.runCommand(command, args, { cwd: context.repoRoot });
  if (result.status !== 0) {
    const message = result.stderr || result.stdout || `${command} ${args.join(' ')} failed`;
    throw new Error(`${stageName}: ${message.trim()}`);
  }
  return result;
}

function loadInventoryReport(context) {
  return readJson(context.repoRoot, context.inventoryJsonPath);
}

function runAuditStage(context, args, stageName) {
  runCommandOrThrow(context, 'node', [context.auditScriptPath, ...args], stageName);
  return loadInventoryReport(context);
}

function runVerification(context) {
  runCommandOrThrow(context, 'node', [context.scriptDocsTestPath], 'VERIFY script-docs');
  runCommandOrThrow(context, 'python3', PYTHON_VALIDATE_COMMAND, 'VERIFY classification-json');
  const postAudit = runAuditStage(context, ['--json'], 'VERIFY post-audit');
  return postAudit;
}

function listDirtyPaths(context, repoPaths) {
  if (!repoPaths.length) return [];
  const result = context.runCommand('git', ['status', '--porcelain', '--', ...repoPaths], {
    cwd: context.repoRoot
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || 'Failed to inspect git status.');
  }

  return result.stdout
    .split('\n')
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .map((line) => line.replace(/^[ MARCUD?!]{2}\s+/, ''))
    .filter(Boolean)
    .sort();
}

function stageFiles(context, repoPaths) {
  if (repoPaths.length === 0) return;
  runCommandOrThrow(context, 'git', ['add', '--', ...repoPaths], 'STAGE');
}

function commitFiles(context, message) {
  runCommandOrThrow(context, 'git', ['commit', '-m', message], 'COMMIT');
}

function getModeLabel(args) {
  if (args.reportOnly) return 'report-only';
  if (args.dryRun) return 'dry-run';
  return 'fix';
}

function successExitCode(args, needsHumanLength) {
  if (args.strict && needsHumanLength > 0) return 3;
  return 0;
}

function runRepair(args, overrides = {}) {
  const context = buildContext(overrides);
  const warnings = [];
  ensureDirectory(path.join(context.repoRoot, path.dirname(context.repairReportJsonPath)));

  const baselineReport = runAuditStage(context, ['--json'], 'AUDIT');
  const preRepair = normalizeSummary(baselineReport.summary);

  if (args.reportOnly) {
    const report = buildReportObject({
      mode: 'report-only',
      preRepair,
      repairsApplied: cloneFixCounts(),
      postRepair: preRepair,
      needsHuman: [],
      verification: 'SKIPPED (report-only)',
      strict: args.strict,
      warnings
    });
    writeRepairReports(context.repoRoot, report);
    return {
      exitCode: hasReportOnlyIssues(preRepair) ? 2 : 0,
      report
    };
  }

  const previewReport = runAuditStage(context, ['--fix', '--dry-run', '--json'], 'REPAIR preview');
  const previewRepair = previewReport.repair || { fixes: {}, needs_human: [], projected_summary: previewReport.summary };

  if (args.dryRun) {
    const report = buildReportObject({
      mode: 'dry-run',
      preRepair,
      repairsApplied: cloneFixCounts(previewRepair.fixes),
      postRepair: normalizeSummary(previewRepair.projected_summary || previewReport.summary),
      needsHuman: Array.isArray(previewRepair.needs_human) ? previewRepair.needs_human : [],
      verification: 'SKIPPED (dry-run)',
      strict: args.strict,
      warnings
    });
    writeRepairReports(context.repoRoot, report);
    return {
      exitCode: successExitCode(args, report.needs_human.length),
      report
    };
  }

  const plannedFiles = Array.isArray(previewRepair.fixes?.planned_files) ? previewRepair.fixes.planned_files : [];
  const rollbackSnapshot = snapshotFiles(context.repoRoot, [
    ...plannedFiles,
    context.inventoryJsonPath,
    context.inventoryMdPath
  ]);
  const autoCommitTargets = [
    ...new Set([
      ...plannedFiles,
      context.repairReportJsonPath,
      context.repairReportMdPath
    ])
  ];
  const dirtyBeforeRepair = args.autoCommit ? listDirtyPaths(context, autoCommitTargets) : [];

  let fixReport;
  try {
    fixReport = runAuditStage(context, ['--fix', '--json'], 'REPAIR apply');
  } catch (error) {
    restoreSnapshots(context.repoRoot, rollbackSnapshot);
    const report = buildReportObject({
      mode: 'fix',
      preRepair,
      repairsApplied: cloneFixCounts(previewRepair.fixes),
      postRepair: preRepair,
      needsHuman: Array.isArray(previewRepair.needs_human) ? previewRepair.needs_human : [],
      verification: 'FAIL (rolled back at stage REPAIR)',
      strict: args.strict,
      warnings: [...warnings, 'REPAIR ROLLED BACK: verification failed at stage REPAIR']
    });
    writeRepairReports(context.repoRoot, report);
    return {
      exitCode: 1,
      report,
      error
    };
  }

  const fixRepair = fixReport.repair || previewRepair;

  let postAuditReport;
  try {
    postAuditReport = runVerification(context);
  } catch (error) {
    restoreSnapshots(context.repoRoot, rollbackSnapshot);
    const report = buildReportObject({
      mode: 'fix',
      preRepair,
      repairsApplied: cloneFixCounts(fixRepair.fixes),
      postRepair: preRepair,
      needsHuman: Array.isArray(fixRepair.needs_human) ? fixRepair.needs_human : [],
      verification: 'FAIL (rolled back at stage VERIFY)',
      strict: args.strict,
      warnings: [...warnings, 'REPAIR ROLLED BACK: verification failed at stage VERIFY']
    });
    writeRepairReports(context.repoRoot, report);
    return {
      exitCode: 1,
      report,
      error
    };
  }

  const actualFixes = cloneFixCounts(fixRepair.fixes);
  let stageableFiles = [];
  if (args.autoCommit) {
    const commitCandidates = [
      ...new Set([
        ...actualFixes.files_modified,
        context.repairReportJsonPath,
        context.repairReportMdPath
      ])
    ].sort();
    const dirtySet = new Set(dirtyBeforeRepair);
    stageableFiles = commitCandidates.filter((repoPath) => !dirtySet.has(repoPath));
    const skippedDirtyFiles = commitCandidates.filter((repoPath) => dirtySet.has(repoPath));

    if (skippedDirtyFiles.length > 0) {
      warnings.push(`Skipped auto-commit for pre-existing dirty repair targets: ${skippedDirtyFiles.join(', ')}`);
    }
  }

  const report = buildReportObject({
    mode: 'fix',
    preRepair,
    repairsApplied: actualFixes,
    postRepair: normalizeSummary(postAuditReport.summary),
    needsHuman: Array.isArray(fixRepair.needs_human) ? fixRepair.needs_human : [],
    verification: 'PASS',
    strict: args.strict,
    warnings
  });
  writeRepairReports(context.repoRoot, report);

  if (args.autoCommit && stageableFiles.length > 0) {
    stageFiles(context, stageableFiles);
    commitFiles(context, `chore(governance): automated repair -- ${actualFixes.total_fixes} fixes applied`);
  }

  return {
    exitCode: successExitCode(args, report.needs_human.length),
    report
  };
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  try {
    const result = runRepair(args);
    if (result.report) {
      console.log(
        `[repair-governance] mode=${getModeLabel(args)} verification="${result.report.verification}" fixes=${result.report.repairs_applied.total_fixes} needs_human=${result.report.needs_human.length}`
      );
    }
    process.exit(result.exitCode);
  } catch (error) {
    console.error(`repair-governance failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildContext,
  buildMarkdownReport,
  buildReportObject,
  cloneFixCounts,
  computeImprovement,
  hasReportOnlyIssues,
  normalizeSummary,
  parseArgs,
  runRepair
};
