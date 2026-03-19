#!/usr/bin/env node
/**
 * @script            review-governance-repair-checklist
 * @category          validator
 * @purpose           governance:repo-health
 * @scope             full-repo
 * @domain            docs
 * @needs             R-R14, R-R18
 * @purpose-statement Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.
 * @pipeline          manual
 * @dualmode          --json | --md | default both
 * @usage             node tools/scripts/validators/governance/review-governance-repair-checklist.js [--output <dir>] [--json] [--md]
 */

const fs = require('fs');
const path = require('path');
const { buildRepairPlan, runAudit } = require('./audit-script-inventory.js');
const { parseDeclaredPipelines } = require('../../../lib/script-governance-config');

const REPO_ROOT = path.resolve(__dirname, '../../../..');
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_JSON_PATH = 'REPAIR_REVIEW_CHECKLIST_LATEST.json';
const DEFAULT_MD_PATH = 'REPAIR_REVIEW_CHECKLIST_LATEST.md';
const JUDGEMENT_FIELDS = ['category', 'purpose', 'needs', 'purpose_statement'];
const PIPELINE_CODES = ['P1', 'P2', 'P3', 'P5', 'P6', 'indirect', 'manual'];

function parseArgs(argv) {
  const args = {
    json: false,
    md: false,
    outputDir: DEFAULT_OUTPUT_DIR
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--md') {
      args.md = true;
      continue;
    }
    if (token === '--output') {
      args.outputDir = String(argv[index + 1] || '').trim() || DEFAULT_OUTPUT_DIR;
      index += 1;
      continue;
    }
    if (token.startsWith('--output=')) {
      args.outputDir = token.slice('--output='.length).trim() || DEFAULT_OUTPUT_DIR;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!args.json && !args.md) {
    args.json = true;
    args.md = true;
  }

  return args;
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/governance/review-governance-repair-checklist.js [--output <dir>] [--json] [--md]'
  );
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function normalizeTagLine(line) {
  return String(line || '')
    .trim()
    .replace(/^\/\*\*?/, '')
    .replace(/\*\/$/, '')
    .replace(/^\*\s?/, '')
    .replace(/^#\s?/, '')
    .trim();
}

function parseHeaderTags(content) {
  const tags = {};
  String(content || '')
    .split(/\r?\n/)
    .forEach((line) => {
      const cleaned = normalizeTagLine(line);
      const match = cleaned.match(/^@([a-z0-9-]+)\s+(.+)$/i);
      if (!match) return;
      const key = match[1].toLowerCase();
      if (!(key in tags)) {
        tags[key] = match[2].trim();
      }
    });
  return tags;
}

function mapTagValueToField(tags) {
  return {
    script: tags.script || '',
    category: tags.category || '',
    purpose: tags.purpose || '',
    scope: tags.scope || '',
    domain: tags.domain || tags.owner || '',
    needs: tags.needs || '',
    purpose_statement: tags['purpose-statement'] || '',
    pipeline_declared: tags.pipeline || '',
    dualmode: tags.dualmode || '',
    usage: tags.usage || ''
  };
}

function pick(obj, fields) {
  const out = {};
  fields.forEach((field) => {
    out[field] = obj && obj[field] !== undefined ? obj[field] : '';
  });
  return out;
}

function getRowField(row, field) {
  if (!row) return '';
  return String(row[field] || '').trim();
}

function toSortedPipelineList(input) {
  const values = input instanceof Set ? [...input] : Array.isArray(input) ? input : [];
  return values
    .filter((value) => PIPELINE_CODES.includes(value))
    .sort((left, right) => PIPELINE_CODES.indexOf(left) - PIPELINE_CODES.indexOf(right));
}

function parsePipelineList(rawValue) {
  return toSortedPipelineList(parseDeclaredPipelines(rawValue));
}

function arrayDifference(left, right) {
  const rightSet = new Set(right);
  return left.filter((value) => !rightSet.has(value));
}

function arraysEqual(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function getFieldSource({ field, proposedValue, previousRow, plannedRow }) {
  const previousValue = getRowField(previousRow, field);
  const plannedValue = getRowField(plannedRow, field);

  if (previousValue && previousValue === proposedValue) {
    return 'existing-classification-row';
  }
  if (!previousRow && plannedValue && plannedValue === proposedValue) {
    return 'generated-classification-row';
  }
  if (plannedValue && plannedValue === proposedValue) {
    return 'planned-classification-row';
  }
  return 'header-derivation';
}

function buildJudgementFieldReview(report, plan, headerUpdateMap) {
  const previousRows = new Map(report.classification_rows.map((row) => [row.path, row]));
  const plannedRows = new Map(plan.classification_rows.map((row) => [row.path, row]));
  const reviewItems = [];
  const fieldCounts = Object.fromEntries(JUDGEMENT_FIELDS.map((field) => [field, 0]));
  const sourceCounts = {
    'existing-classification-row': 0,
    'generated-classification-row': 0,
    'planned-classification-row': 0,
    'header-derivation': 0
  };

  report.scripts.forEach((script) => {
    const updateContent = headerUpdateMap.get(script.path);
    if (!updateContent) return;

    const proposed = mapTagValueToField(parseHeaderTags(updateContent));
    const fields = [];
    const previousRow = previousRows.get(script.path) || null;
    const plannedRow = plannedRows.get(script.path) || null;

    JUDGEMENT_FIELDS.forEach((field) => {
      const currentValue = String(script[field] || '').trim();
      const proposedValue = String(proposed[field] || '').trim();
      if (currentValue || !proposedValue) return;

      const source = getFieldSource({
        field,
        proposedValue,
        previousRow,
        plannedRow
      });

      fields.push({
        field,
        current: currentValue,
        proposed: proposedValue,
        source
      });

      fieldCounts[field] += 1;
      sourceCounts[source] += 1;
    });

    if (fields.length === 0) return;

    reviewItems.push({
      path: script.path,
      trigger_group: script.trigger_group,
      in_json_before: Boolean(previousRow),
      in_json_after: Boolean(plannedRow),
      pipeline_declared: script.pipeline_declared || '',
      pipeline_actual: script.pipeline_actual || '',
      fields,
      current: pick(script, ['category', 'purpose', 'needs', 'purpose_statement']),
      proposed: pick(proposed, ['category', 'purpose', 'needs', 'purpose_statement']),
      classification_before: pick(previousRow || {}, ['category', 'purpose', 'needs', 'purpose_statement']),
      classification_after: pick(plannedRow || {}, ['category', 'purpose', 'needs', 'purpose_statement'])
    });
  });

  reviewItems.sort((left, right) => left.path.localeCompare(right.path));

  return {
    total_scripts: reviewItems.length,
    field_counts: fieldCounts,
    source_counts: sourceCounts,
    items: reviewItems
  };
}

function classifyPipelineRisk(currentPipelines, proposedPipelines, detectedPipelines) {
  const missingDetected = arrayDifference(detectedPipelines, proposedPipelines);
  const addedBeyondDetected = arrayDifference(proposedPipelines, detectedPipelines);

  if (missingDetected.length > 0) {
    return {
      risk: 'drops-detected-pipelines',
      missing_detected_pipelines: missingDetected,
      added_beyond_detected: addedBeyondDetected
    };
  }

  if (arraysEqual(currentPipelines, proposedPipelines)) {
    return {
      risk: 'label-normalization-only',
      missing_detected_pipelines: [],
      added_beyond_detected: addedBeyondDetected
    };
  }

  if (arraysEqual(proposedPipelines, detectedPipelines)) {
    return {
      risk: 'aligns-to-detected-pipelines',
      missing_detected_pipelines: [],
      added_beyond_detected: []
    };
  }

  if (addedBeyondDetected.length > 0) {
    return {
      risk: 'broadens-claim',
      missing_detected_pipelines: [],
      added_beyond_detected: addedBeyondDetected
    };
  }

  return {
    risk: 'review',
    missing_detected_pipelines: [],
    added_beyond_detected: []
  };
}

function buildPipelineReview(report, headerUpdateMap) {
  const reviewItems = [];
  const riskCounts = {
    'drops-detected-pipelines': 0,
    'aligns-to-detected-pipelines': 0,
    'broadens-claim': 0,
    'label-normalization-only': 0,
    review: 0
  };

  report.scripts.forEach((script) => {
    const updateContent = headerUpdateMap.get(script.path);
    if (!updateContent) return;

    const proposed = mapTagValueToField(parseHeaderTags(updateContent));
    const currentPipeline = String(script.pipeline_declared || '').trim();
    const proposedPipeline = String(proposed.pipeline_declared || '').trim();
    if (!proposedPipeline || currentPipeline === proposedPipeline) return;

    const currentPipelines = parsePipelineList(currentPipeline);
    const proposedPipelines = parsePipelineList(proposedPipeline);
    const detectedPipelines = toSortedPipelineList(script.actual_pipeline_set);
    const classification = classifyPipelineRisk(currentPipelines, proposedPipelines, detectedPipelines);

    riskCounts[classification.risk] += 1;

    reviewItems.push({
      path: script.path,
      trigger_group: script.trigger_group,
      current_pipeline: currentPipeline || '(missing)',
      proposed_pipeline: proposedPipeline,
      pipeline_actual: script.pipeline_actual || '',
      pipeline_verified: script.pipeline_verified || '',
      current_pipelines: currentPipelines,
      proposed_pipelines: proposedPipelines,
      detected_pipelines: detectedPipelines,
      detected_multi_pipeline: detectedPipelines.length > 1,
      proposed_multi_pipeline: proposedPipelines.length > 1,
      risk: classification.risk,
      missing_detected_pipelines: classification.missing_detected_pipelines,
      added_beyond_detected: classification.added_beyond_detected
    });
  });

  reviewItems.sort((left, right) => left.path.localeCompare(right.path));

  return {
    total_scripts: reviewItems.length,
    risk_counts: riskCounts,
    detected_multi_pipeline: reviewItems.filter((item) => item.detected_multi_pipeline).length,
    proposed_multi_pipeline: reviewItems.filter((item) => item.proposed_multi_pipeline).length,
    items: reviewItems
  };
}

function buildSummary(report, judgementReview, pipelineReview) {
  const fixes = report.repair?.fixes || {};
  const tier1 = Number(fixes.json_phantoms_removed || 0) + Number(fixes.json_entries_added || 0) + Number(fixes.json_entries_updated || 0);
  const tier2 = Number(fixes.headers_domain_added || 0) +
    Number(fixes.headers_script_added || 0) +
    Number(fixes.headers_usage_added || 0) +
    Number(fixes.headers_scope_added || 0) +
    Number(fixes.headers_category_added || 0) +
    Number(fixes.headers_purpose_added || 0) +
    Number(fixes.headers_needs_added || 0) +
    Number(fixes.headers_purpose_statement_added || 0);
  const tier3 = Number(fixes.headers_pipeline_corrected || 0);

  return {
    total_fixes: Number(fixes.total_fixes || 0),
    tier_1_json_sync: tier1,
    tier_2_header_completion: tier2,
    tier_3_pipeline_corrections: tier3,
    judgement_field_autofill_scripts: judgementReview.total_scripts,
    judgement_field_autofill_fields: Object.values(judgementReview.field_counts).reduce((total, value) => total + value, 0),
    pipeline_correction_scripts: pipelineReview.total_scripts,
    pipeline_drop_risk_scripts: pipelineReview.risk_counts['drops-detected-pipelines'],
    pipeline_multi_detected_scripts: pipelineReview.detected_multi_pipeline,
    pipeline_multi_proposed_scripts: pipelineReview.proposed_multi_pipeline
  };
}

function buildChecklistReport() {
  const report = runAudit({
    verbose: false,
    fix: false,
    dryRun: false,
    outputDir: DEFAULT_OUTPUT_DIR
  });
  const plan = buildRepairPlan(report, { dryRun: true });
  const repairPayload = {
    mode: plan.mode,
    dry_run: true,
    fixes: {
      ...plan.fixes,
      files_modified: [],
      planned_files: plan.fixes.planned_files
    },
    needs_human: plan.needs_human,
    projected_summary: plan.projected_summary
  };
  const reportWithRepair = {
    ...report,
    repair: repairPayload
  };
  const headerUpdateMap = new Map(plan.header_updates.map((entry) => [entry.path, entry.content]));
  const judgementReview = buildJudgementFieldReview(reportWithRepair, plan, headerUpdateMap);
  const pipelineReview = buildPipelineReview(reportWithRepair, headerUpdateMap);

  return {
    generated_at: new Date().toISOString(),
    source: {
      mode: 'dry-run-plan',
      script: 'tools/scripts/validators/governance/review-governance-repair-checklist.js',
      audit_script: 'tools/scripts/validators/governance/audit-script-inventory.js'
    },
    summary: buildSummary(reportWithRepair, judgementReview, pipelineReview),
    repairs_applied: repairPayload.fixes,
    needs_human_count: plan.needs_human.length,
    judgement_field_review: judgementReview,
    pipeline_review: pipelineReview
  };
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# Governance Repair Review Checklist');
  lines.push('');
  lines.push(`Generated: ${report.generated_at}`);
  lines.push(`Source mode: ${report.source.mode}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Total safe fixes in dry-run: ${report.summary.total_fixes}`);
  lines.push(`- Tier 1 JSON sync: ${report.summary.tier_1_json_sync}`);
  lines.push(`- Tier 2 header completion: ${report.summary.tier_2_header_completion}`);
  lines.push(`- Tier 3 pipeline corrections: ${report.summary.tier_3_pipeline_corrections}`);
  lines.push(`- Judgement-field autofill scripts: ${report.summary.judgement_field_autofill_scripts}`);
  lines.push(`- Judgement-field autofill fields: ${report.summary.judgement_field_autofill_fields}`);
  lines.push(`- Pipeline correction scripts: ${report.summary.pipeline_correction_scripts}`);
  lines.push(`- Pipeline drop-risk scripts: ${report.summary.pipeline_drop_risk_scripts}`);
  lines.push(`- Needs human count from repair plan: ${report.needs_human_count}`);
  lines.push('');
  lines.push('## Judgement Field Autofills');
  lines.push('');
  lines.push(`- Scripts to review: ${report.judgement_field_review.total_scripts}`);
  lines.push(`- Existing classification row fields: ${report.judgement_field_review.source_counts['existing-classification-row']}`);
  lines.push(`- Generated classification row fields: ${report.judgement_field_review.source_counts['generated-classification-row']}`);
  lines.push(`- Header derivation fields: ${report.judgement_field_review.source_counts['header-derivation']}`);
  lines.push('');
  lines.push('| Field | Count |');
  lines.push('| --- | ---: |');
  Object.entries(report.judgement_field_review.field_counts).forEach(([field, count]) => {
    lines.push(`| ${field} | ${count} |`);
  });
  lines.push('');

  report.judgement_field_review.items.forEach((item) => {
    lines.push(`### ${item.path}`);
    lines.push('');
    lines.push(`- Trigger group: ${item.trigger_group}`);
    lines.push(`- In classification before/after: ${item.in_json_before ? 'yes' : 'no'} / ${item.in_json_after ? 'yes' : 'no'}`);
    item.fields.forEach((field) => {
      lines.push(`- [ ] ${field.field}: "${field.proposed}" (${field.source})`);
    });
    lines.push(`- Current header values: category=${item.current.category || '(missing)'} | purpose=${item.current.purpose || '(missing)'} | needs=${item.current.needs || '(missing)'} | purpose-statement=${item.current.purpose_statement || '(missing)'}`);
    lines.push(`- Classification before: category=${item.classification_before.category || '(missing)'} | purpose=${item.classification_before.purpose || '(missing)'} | needs=${item.classification_before.needs || '(missing)'} | purpose-statement=${item.classification_before.purpose_statement || '(missing)'}`);
    lines.push(`- Classification after: category=${item.classification_after.category || '(missing)'} | purpose=${item.classification_after.purpose || '(missing)'} | needs=${item.classification_after.needs || '(missing)'} | purpose-statement=${item.classification_after.purpose_statement || '(missing)'}`);
    lines.push('');
  });

  lines.push('## Pipeline Corrections');
  lines.push('');
  lines.push(`- Scripts to review: ${report.pipeline_review.total_scripts}`);
  lines.push(`- Detected multi-pipeline scripts: ${report.pipeline_review.detected_multi_pipeline}`);
  lines.push(`- Proposed multi-pipeline scripts: ${report.pipeline_review.proposed_multi_pipeline}`);
  lines.push('');
  lines.push('| Risk | Count |');
  lines.push('| --- | ---: |');
  Object.entries(report.pipeline_review.risk_counts).forEach(([risk, count]) => {
    lines.push(`| ${risk} | ${count} |`);
  });
  lines.push('');

  report.pipeline_review.items.forEach((item) => {
    lines.push(`### ${item.path}`);
    lines.push('');
    lines.push(`- Trigger group: ${item.trigger_group}`);
    lines.push(`- [ ] Risk: ${item.risk}`);
    lines.push(`- Current: ${item.current_pipeline}`);
    lines.push(`- Proposed: ${item.proposed_pipeline}`);
    lines.push(`- Detected: ${item.pipeline_actual}`);
    lines.push(`- Verification: ${item.pipeline_verified}`);
    lines.push(`- Current codes: ${item.current_pipelines.join(', ') || '(none)'}`);
    lines.push(`- Proposed codes: ${item.proposed_pipelines.join(', ') || '(none)'}`);
    lines.push(`- Detected codes: ${item.detected_pipelines.join(', ') || '(none)'}`);
    if (item.missing_detected_pipelines.length > 0) {
      lines.push(`- Missing detected pipelines in proposal: ${item.missing_detected_pipelines.join(', ')}`);
    }
    if (item.added_beyond_detected.length > 0) {
      lines.push(`- Added beyond detected pipelines: ${item.added_beyond_detected.join(', ')}`);
    }
    lines.push('');
  });

  return `${lines.join('\n')}\n`;
}

function writeOutputs(report, args) {
  const outputDir = path.resolve(REPO_ROOT, args.outputDir);
  ensureDirectory(outputDir);

  if (args.json) {
    fs.writeFileSync(path.join(outputDir, DEFAULT_JSON_PATH), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  }

  if (args.md) {
    fs.writeFileSync(path.join(outputDir, DEFAULT_MD_PATH), buildMarkdownReport(report), 'utf8');
  }
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
    const report = buildChecklistReport();
    writeOutputs(report, args);
    console.log(
      `[review-governance-repair-checklist] judgement_scripts=${report.judgement_field_review.total_scripts} pipeline_scripts=${report.pipeline_review.total_scripts} drop_risk=${report.pipeline_review.risk_counts['drops-detected-pipelines']}`
    );
  } catch (error) {
    console.error(`review-governance-repair-checklist failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildChecklistReport,
  buildJudgementFieldReview,
  buildMarkdownReport,
  buildPipelineReview,
  parseArgs,
  parseHeaderTags
};
