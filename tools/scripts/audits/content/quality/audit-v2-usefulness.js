#!/usr/bin/env node
/**
 * @script            audit-v2-usefulness
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts, v2, tasks/reports, tools/config
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/audit-v2-usefulness.js [flags]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');
const {
  getDocsJsonRouteKeys,
  toDocsRouteKeyFromFileV2Aware
} = require('../../tests/utils/file-walker');
const { isGeneratedDocsPageContent } = require('../lib/docs-page-scope');
const { analyzeMdxPage, scorePage, computeBand } = require('../lib/docs-usefulness/scoring');
const { getRulesForPage } = require('../lib/docs-usefulness/rubric-loader');
const { checkJourneys } = require('../lib/docs-usefulness/journey-check');
const { LlmEvaluator } = require('../lib/docs-usefulness/llm-evaluator');
const prompts = require('../lib/docs-usefulness/prompts');
const { loadAndValidateUsefulnessConfig } = require('../lib/docs-usefulness/config-validator');

const REMOVED_FLAGS = new Set([
  '--accuracy-mode',
  '--as-of',
  '--verify-sources',
  '--github-repos',
  '--deepwiki-enabled',
  '--deepwiki-base-url',
  '--official-docs-base-url',
  '--github-results-per-repo',
  '--verification-cache-dir',
  '--verification-max-requests',
  '--verification-timeout-ms',
  '--verification-fixture',
  '--scoring-engine'
]);

const BASELINE_DEFAULT_REL = path.join(
  'tools',
  'config',
  'usefulness-baselines',
  'full-run-2026-02-23-page-matrix.csv'
);

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseCsv(raw, fallback = []) {
  if (!raw) return [...fallback];
  return String(raw)
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseBoolean(raw, fallback) {
  if (raw === undefined || raw === null) return fallback;
  const value = String(raw).trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(value)) return true;
  if (['0', 'false', 'no', 'off'].includes(value)) return false;
  return fallback;
}

function parseArgs(argv, repoRoot) {
  for (const token of argv) {
    if (REMOVED_FLAGS.has(token)) {
      throw new Error(`Deprecated flag ${token} is removed. Run without accuracy-verification options; usefulness audit is now purpose-aware by default.`);
    }
  }

  const args = {
    mode: 'full',
    files: [],
    outDir: path.join(repoRoot, 'tasks', 'reports', 'quality-accessibility', 'docs-usefulness', 'latest'),
    format: ['jsonl', 'csv', 'json', 'md'],
    maxPages: null,
    llm: false,
    llmTier: 'free',
    llmBudget: null,
    llmSample: 100,
    llmResume: true,
    journey: true,
    purposeAware: true,
    legacyRubric: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--mode') {
      args.mode = String(argv[i + 1] || args.mode).trim();
      i += 1;
      continue;
    }
    if (token === '--files' || token === '--file') {
      args.files.push(...parseCsv(argv[i + 1], []));
      i += 1;
      continue;
    }
    if (token === '--out-dir') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) args.outDir = path.resolve(repoRoot, raw);
      i += 1;
      continue;
    }
    if (token === '--format') {
      args.format = parseCsv(argv[i + 1], args.format);
      i += 1;
      continue;
    }
    if (token === '--max-pages') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed > 0) {
        args.maxPages = parsed;
      }
      i += 1;
      continue;
    }
    if (token === '--llm') {
      args.llm = true;
      continue;
    }
    if (token === '--llm-tier') {
      args.llmTier = String(argv[i + 1] || args.llmTier).trim();
      i += 1;
      continue;
    }
    if (token === '--llm-budget') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed >= 0) args.llmBudget = parsed;
      i += 1;
      continue;
    }
    if (token === '--llm-sample') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed >= 1 && parsed <= 100) args.llmSample = parsed;
      i += 1;
      continue;
    }
    if (token === '--llm-resume') {
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args.llmResume = parseBoolean(next, true);
        i += 1;
      } else {
        args.llmResume = true;
      }
      continue;
    }
    if (token === '--journey') {
      args.journey = true;
      continue;
    }
    if (token === '--no-journey') {
      args.journey = false;
      continue;
    }
    if (token === '--purpose-aware') {
      args.purposeAware = true;
      continue;
    }
    if (token === '--legacy-rubric') {
      args.legacyRubric = true;
      continue;
    }
  }

  args.files = [...new Set(args.files)];
  if (args.files.length > 0) {
    args.mode = 'files';
  }
  if (args.mode === 'files') {
    args.journey = false;
  }
  if (args.legacyRubric) {
    args.purposeAware = false;
  }

  return args;
}

function normalizeRouteKey(value) {
  let route = toPosix(value || '').trim();
  route = route.replace(/^\/+/, '');
  route = route.replace(/\.(md|mdx)$/i, '');
  route = route.replace(/\/index$/i, '');
  route = route.replace(/\/+/g, '/');
  route = route.replace(/\s+$/g, '');
  return route;
}

function collectPagesFromNode(node, out = []) {
  if (typeof node === 'string') {
    const value = normalizeRouteKey(node);
    if (value.startsWith('v2/')) out.push(value);
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectPagesFromNode(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectPagesFromNode(item, out));
  }

  Object.values(node).forEach((value) => collectPagesFromNode(value, out));
  return out;
}

function loadEnV2Routes(repoRoot) {
  const docsJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'docs.json'), 'utf8'));
  const v2 = (docsJson.navigation?.versions || []).find((version) => version.version === 'v2');
  if (!v2) return [];

  const languages = v2.languages || {};
  const languageEntries = Object.values(languages);
  const english = languageEntries.find((entry) => String(entry?.language || '').toLowerCase() === 'en') || languageEntries[0] || {};

  const entries = collectPagesFromNode(english, []);
  const deduped = [...new Set(entries.map(normalizeRouteKey).filter(Boolean))];
  return deduped.filter((route) => route.startsWith('v2/')).sort((a, b) => a.localeCompare(b));
}

function routeToCandidates(routeKey) {
  const route = normalizeRouteKey(routeKey);
  return [`${route}.mdx`, `${route}/index.mdx`, `${route}.md`];
}

function resolveRouteToFile(routeKey, repoRoot) {
  const candidates = routeToCandidates(routeKey);
  for (const rel of candidates) {
    const abs = path.join(repoRoot, rel);
    if (fs.existsSync(abs)) return toPosix(rel);
  }
  return null;
}

function collectChangedRouteKeys(repoRoot, allowedRoutes) {
  try {
    const output = execSync('git diff --name-only --diff-filter=ACMR HEAD', {
      cwd: repoRoot,
      encoding: 'utf8'
    });
    const changed = output
      .split('\n')
      .map((line) => normalizeRouteKey(line.trim()))
      .filter(Boolean)
      .filter((route) => route.startsWith('v2/'));

    const allowed = new Set(allowedRoutes);
    return [...new Set(changed)].filter((route) => {
      if (allowed.has(route)) return true;
      if (/\.mdx?$/.test(route)) {
        return allowed.has(normalizeRouteKey(route));
      }
      return false;
    });
  } catch (_error) {
    return [];
  }
}

function collectRequestedRouteKeys(rawFiles, allowedRoutes) {
  const allowed = new Set(allowedRoutes);
  const selected = [];

  rawFiles.forEach((value) => {
    const normalized = normalizeRouteKey(value);
    if (!normalized) return;
    if (allowed.has(normalized)) {
      selected.push(normalized);
      return;
    }

    const asRoute = toDocsRouteKeyFromFileV2Aware(normalized, process.cwd());
    if (asRoute && allowed.has(asRoute)) {
      selected.push(asRoute);
    }
  });

  return [...new Set(selected)].sort((a, b) => a.localeCompare(b));
}

function hashForSampling(seed, value) {
  const hex = crypto.createHash('md5').update(`${seed}:${value}`).digest('hex').slice(0, 8);
  return parseInt(hex, 16);
}

function sampleRows(rows, pct) {
  if (pct >= 100) return rows;
  const keep = Math.max(1, Math.floor((rows.length * pct) / 100));
  const seed = new Date().toISOString().slice(0, 10);
  return [...rows]
    .map((row) => ({ row, rank: hashForSampling(seed, row.path) }))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, keep)
    .map((entry) => entry.row);
}

function escapeCsv(value) {
  const text = value === undefined || value === null ? '' : String(value);
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function writeJsonl(filePath, rows) {
  const output = rows.map((row) => JSON.stringify(row)).join('\n');
  fs.writeFileSync(filePath, output ? `${output}\n` : '');
}

function writeCsv(filePath, rows) {
  const columns = [
    'path',
    'route_path',
    'section',
    'purpose',
    'purpose_source',
    'audience',
    'audience_source',
    'tier1_score',
    'tier2_score',
    'combined_score',
    'quality_gate_status',
    'quality_gate_errors',
    'agent_score',
    'band',
    'flags'
  ];

  const lines = [columns.join(',')];
  rows.forEach((row) => {
    const values = columns.map((column) => {
      const value = column === 'flags' ? (row.flags || []).join('|') : row[column];
      return escapeCsv(value);
    });
    lines.push(values.join(','));
  });
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function parseCsvRows(raw) {
  const rows = [];
  const lines = String(raw || '').split('\n').filter(Boolean);
  if (lines.length === 0) return rows;

  function parseLine(line) {
    const out = [];
    let current = '';
    let inQuote = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuote && line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          inQuote = !inQuote;
        }
      } else if (ch === ',' && !inQuote) {
        out.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
    out.push(current);
    return out;
  }

  const headers = parseLine(lines[0]);
  for (let i = 1; i < lines.length; i += 1) {
    const values = parseLine(lines[i]);
    const row = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx] || '';
    });
    rows.push(row);
  }
  return rows;
}

function computeSectionSummary(rows) {
  const stats = new Map();
  rows.forEach((row) => {
    const key = row.section || 'unknown';
    if (!stats.has(key)) {
      stats.set(key, {
        section: key,
        pages: 0,
        combined: 0,
        agent: 0,
        qualityPass: 0,
        purposeCovered: 0
      });
    }
    const section = stats.get(key);
    section.pages += 1;
    section.combined += Number(row.combined_score || 0);
    section.agent += Number(row.agent_score || 0);
    if (row.quality_gate_status === 'pass') section.qualityPass += 1;
    if (row.purpose) section.purposeCovered += 1;
  });

  return [...stats.values()]
    .map((section) => ({
      section: section.section,
      pages: section.pages,
      avgCombined: section.pages ? Math.round(section.combined / section.pages) : 0,
      avgAgent: section.pages ? Math.round(section.agent / section.pages) : 0,
      qualityPassPct: section.pages ? Math.round((section.qualityPass / section.pages) * 100) : 0,
      purposeCoveragePct: section.pages ? Math.round((section.purposeCovered / section.pages) * 100) : 0
    }))
    .sort((a, b) => a.section.localeCompare(b.section));
}

function computeBaselineComparison(repoRoot, currentRows, journeyReports) {
  const baselinePath = path.join(repoRoot, BASELINE_DEFAULT_REL);
  if (!fs.existsSync(baselinePath)) {
    return {
      baselinePath,
      baselineUnavailable: true,
      note: 'baseline_unavailable'
    };
  }

  const baselineRows = parseCsvRows(fs.readFileSync(baselinePath, 'utf8'));
  const baselineScores = baselineRows
    .map((row) => Number(row.combined_score || row.human_usefulness_score || 0))
    .filter((value) => Number.isFinite(value));

  const baselineAvg = baselineScores.length
    ? Number((baselineScores.reduce((sum, value) => sum + value, 0) / baselineScores.length).toFixed(1))
    : 0;

  const currentAvg = currentRows.length
    ? Number((currentRows.reduce((sum, row) => sum + Number(row.combined_score || 0), 0) / currentRows.length).toFixed(1))
    : 0;

  const baselinePurposeSet = baselineRows.filter((row) => String(row.purpose || '').trim()).length;
  const currentPurposeSet = currentRows.filter((row) => String(row.purpose || '').trim()).length;

  const currentJourneyComplete = journeyReports
    ? journeyReports.reduce((sum, report) => sum + Number(report.steps_complete || 0), 0)
    : 0;

  return {
    baselinePath,
    baselineUnavailable: false,
    avgCombined: {
      baseline: baselineAvg,
      current: currentAvg,
      change: Number((currentAvg - baselineAvg).toFixed(1))
    },
    pagesWithPurpose: {
      baseline: baselinePurposeSet,
      current: currentPurposeSet,
      change: currentPurposeSet - baselinePurposeSet
    },
    journeyStepsCompletable: {
      baseline: null,
      current: currentJourneyComplete,
      change: null
    }
  };
}

function printSectionSummary(rows) {
  const summary = computeSectionSummary(rows);
  console.log('SECTION SUMMARY');
  console.log('| Section | Pages | Avg Combined | Avg Agent | Quality Pass % | Purpose Coverage % |');
  console.log('|---------|------:|-------------:|----------:|---------------:|-------------------:|');
  summary.forEach((entry) => {
    console.log(`| ${entry.section} | ${entry.pages} | ${entry.avgCombined} | ${entry.avgAgent} | ${entry.qualityPassPct}% | ${entry.purposeCoveragePct}% |`);
  });
  console.log('');
}

function printJourneyReport(journeyReports) {
  console.log('PERSONA JOURNEY REPORT');
  console.log('=====================');
  console.log('');

  journeyReports.forEach((report) => {
    const criterion = report.maps_to ? ` [${report.maps_to}]` : '';
    console.log(`${report.label}${criterion}: ${report.steps_complete}/${report.steps_total} COMPLETE | ${report.steps_weak} WEAK | ${report.steps_missing} MISSING -> ${report.verdict}`);
    console.log(`  "${report.success_criteria}"`);
    report.steps.forEach((step) => {
      const marker = step.status === 'complete' ? 'OK' : step.status === 'weak' ? 'WARN' : 'MISS';
      const purpose = Array.isArray(step.purpose) ? step.purpose.join('/') : step.purpose;
      const detail = step.page
        ? `${step.page} — score ${step.score}${step.reason ? ` (${step.reason})` : ''}${step.has_link_to_next ? '' : ' [no nav link to next]'}`
        : 'NO PAGE FOUND';
      console.log(`  [${marker}] Step ${step.position} (${purpose}): ${detail}`);
    });
    if (report.blockers.length > 0) {
      console.log(`  BLOCKERS: ${report.blockers.join('; ')}`);
    }
    console.log('');
  });

  console.log('JOURNEY SUMMARY');
  console.log('| Persona | Criterion | Complete | Weak | Missing | Verdict |');
  console.log('|---------|-----------|----------|------|---------|---------|');
  journeyReports.forEach((report) => {
    console.log(`| ${report.label} | ${report.maps_to || '-'} | ${report.steps_complete}/${report.steps_total} | ${report.steps_weak} | ${report.steps_missing} | ${report.verdict} |`);
  });
  console.log('');
}

function printBaselineComparison(comparison) {
  console.log('COMPARISON TO BASELINE');
  if (comparison.baselineUnavailable) {
    console.log(`baseline_unavailable: ${comparison.baselinePath}`);
    console.log('');
    return;
  }

  console.log('| Metric | Feb 2026 | Current | Change |');
  console.log('|--------|----------|---------|--------|');
  console.log(`| Avg combined score | ${comparison.avgCombined.baseline} | ${comparison.avgCombined.current} | ${comparison.avgCombined.change >= 0 ? '+' : ''}${comparison.avgCombined.change} |`);
  console.log(`| Pages with purpose set | ${comparison.pagesWithPurpose.baseline} | ${comparison.pagesWithPurpose.current} | ${comparison.pagesWithPurpose.change >= 0 ? '+' : ''}${comparison.pagesWithPurpose.change} |`);
  if (comparison.journeyStepsCompletable.change === null) {
    console.log(`| Journey steps completable | - | ${comparison.journeyStepsCompletable.current} | - |`);
  } else {
    console.log(`| Journey steps completable | ${comparison.journeyStepsCompletable.baseline} | ${comparison.journeyStepsCompletable.current} | ${comparison.journeyStepsCompletable.change >= 0 ? '+' : ''}${comparison.journeyStepsCompletable.change} |`);
  }
  console.log('');
}

function buildSummaryMarkdown({ rows, sectionSummary, journeyReports, baselineComparison, metadata }) {
  const lines = [];
  lines.push(`# Usefulness Audit Summary — ${metadata.generated_at.slice(0, 10)}`);
  lines.push('');
  lines.push(`- Mode: \`${metadata.mode}\``);
  lines.push(`- Pages processed: **${rows.length}**`);
  lines.push(`- Tier 2 LLM: **${metadata.llm.enabled ? `enabled (${metadata.llm.tier})` : 'disabled'}**`);
  lines.push('');

  lines.push('## Section Summary');
  lines.push('');
  lines.push('| Section | Pages | Avg Combined | Avg Agent | Quality Pass % | Purpose Coverage % |');
  lines.push('|---------|------:|-------------:|----------:|---------------:|-------------------:|');
  sectionSummary.forEach((entry) => {
    lines.push(`| ${entry.section} | ${entry.pages} | ${entry.avgCombined} | ${entry.avgAgent} | ${entry.qualityPassPct}% | ${entry.purposeCoveragePct}% |`);
  });
  lines.push('');

  if (journeyReports && journeyReports.length > 0) {
    lines.push('## Journey Summary');
    lines.push('');
    lines.push('| Persona | Criterion | Complete | Weak | Missing | Verdict |');
    lines.push('|---------|-----------|----------|------|---------|---------|');
    journeyReports.forEach((report) => {
      lines.push(`| ${report.label} | ${report.maps_to || '-'} | ${report.steps_complete}/${report.steps_total} | ${report.steps_weak} | ${report.steps_missing} | ${report.verdict} |`);
    });
    lines.push('');
  }

  lines.push('## Baseline Comparison');
  lines.push('');
  if (baselineComparison.baselineUnavailable) {
    lines.push(`- baseline_unavailable: \`${baselineComparison.baselinePath}\``);
  } else {
    lines.push('| Metric | Feb 2026 | Current | Change |');
    lines.push('|--------|----------|---------|--------|');
    lines.push(`| Avg combined score | ${baselineComparison.avgCombined.baseline} | ${baselineComparison.avgCombined.current} | ${baselineComparison.avgCombined.change >= 0 ? '+' : ''}${baselineComparison.avgCombined.change} |`);
    lines.push(`| Pages with purpose set | ${baselineComparison.pagesWithPurpose.baseline} | ${baselineComparison.pagesWithPurpose.current} | ${baselineComparison.pagesWithPurpose.change >= 0 ? '+' : ''}${baselineComparison.pagesWithPurpose.change} |`);
    if (baselineComparison.journeyStepsCompletable.change === null) {
      lines.push(`| Journey steps completable | - | ${baselineComparison.journeyStepsCompletable.current} | - |`);
    } else {
      lines.push(`| Journey steps completable | ${baselineComparison.journeyStepsCompletable.baseline} | ${baselineComparison.journeyStepsCompletable.current} | ${baselineComparison.journeyStepsCompletable.change >= 0 ? '+' : ''}${baselineComparison.journeyStepsCompletable.change} |`);
    }
  }

  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function main() {
  const repoRoot = getRepoRoot();
  const args = parseArgs(process.argv.slice(2), repoRoot);

  const { rubric, audience, llmTiers } = loadAndValidateUsefulnessConfig(prompts);
  const allRoutes = loadEnV2Routes(repoRoot);

  let selectedRoutes = [];
  if (args.mode === 'files') {
    selectedRoutes = collectRequestedRouteKeys(args.files, allRoutes);
  } else if (args.mode === 'changed') {
    const changed = collectChangedRouteKeys(repoRoot, allRoutes);
    selectedRoutes = changed.length > 0 ? changed : allRoutes;
  } else {
    selectedRoutes = allRoutes;
  }

  if (Number.isFinite(args.maxPages) && args.maxPages > 0) {
    selectedRoutes = selectedRoutes.slice(0, args.maxPages);
  }

  const missingRoutes = [];
  const records = [];

  for (const route of selectedRoutes) {
    const relFile = resolveRouteToFile(route, repoRoot);
    if (!relFile) {
      missingRoutes.push(route);
      continue;
    }

    const absPath = path.join(repoRoot, relFile);
    const content = fs.readFileSync(absPath, 'utf8');
    if (isGeneratedDocsPageContent(content)) {
      continue;
    }
    const page = analyzeMdxPage({
      content,
      filePath: relFile,
      routePath: `/${route}`,
      repoRoot
    });

    const score = scorePage(page, {
      rubric: args.legacyRubric ? {} : rubric,
      audience
    });

    const rules = getRulesForPage(rubric, page, audience);

    records.push({
      route,
      page,
      rules,
      score,
      path: relFile
    });
  }

  if (args.llm) {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error('--llm requires OPENROUTER_API_KEY');
    }

    const tierName = args.llmTier || llmTiers.default_tier || 'free';
    const tierInfo = llmTiers.tiers?.[tierName];
    if (!tierInfo) throw new Error(`Unknown llm tier: ${tierName}`);

    const evaluator = new LlmEvaluator(process.env.OPENROUTER_API_KEY, {
      tier: tierName,
      budget: args.llmBudget
    });

    const eligible = records.filter((record) => record.rules?.tier2 && Object.keys(record.rules.tier2).length > 0);
    const sample = args.llmSample < 100 ? sampleRows(eligible, args.llmSample) : eligible;

    const capacity = evaluator._remainingCapacity ? evaluator._remainingCapacity() : null;
    if (capacity !== null) {
      const needed = sample.reduce((sum, record) => sum + Object.keys(record.rules.tier2 || {}).length, 0);
      console.error(`Free tier: ${capacity} calls available today, ~${needed} needed.`);
      if (needed > capacity) {
        console.error('Daily free limit may be reached; rerun tomorrow with --llm-resume.');
      }
    }

    for (const record of sample) {
      const tier2 = await evaluator.evaluateAll(record.page, record.rules.tier2, prompts, {
        audience: record.score.audience,
        purpose: record.score.purpose,
        resume: args.llmResume
      });

      const exhausted = Object.values(tier2.details || {}).some((detail) => detail.status === 'daily_limit_exhausted');
      if (exhausted) {
        console.error('Daily free limit reached. Run again tomorrow to continue.');
        break;
      }

      record.score.tier2_score = tier2.score;
      record.score.tier2_details = tier2.details;
      record.score.combined_score = tier2.score === null
        ? record.score.tier1_score
        : Math.round((record.score.tier1_score * 0.5) + (tier2.score * 0.5));
      record.score.band = computeBand(record.score.combined_score, record.score.flags);
    }

    evaluator.printUsageSummary();
  }

  const rows = records.map((record) => ({
    schema_version: 'docs-usefulness-matrix.v2',
    path: record.path,
    route_path: `/${record.route}`,
    section: record.page.section,
    purpose: record.score.purpose,
    purpose_source: record.score.purpose_source,
    audience: record.score.audience,
    audience_source: record.score.audience_source,
    tier1_score: record.score.tier1_score,
    tier2_score: record.score.tier2_score,
    combined_score: record.score.combined_score,
    quality_gate_status: record.score.quality_gate_status,
    quality_gate_errors: record.score.quality_gate_errors,
    quality_gate_details: record.score.quality_gate_details,
    agent_score: record.score.agent_score,
    band: record.score.band,
    flags: record.score.flags,
    internalLinks: record.page.internalLinks
  }));

  const journeyReports = args.journey && args.mode === 'full'
    ? checkJourneys(rows.map((row) => ({
        path: row.path,
        purpose: row.purpose,
        combined_score: row.combined_score,
        internalLinks: row.internalLinks
      })))
    : [];

  const sectionSummary = computeSectionSummary(rows);
  const baselineComparison = computeBaselineComparison(repoRoot, rows, journeyReports);

  const metadata = {
    generated_at: new Date().toISOString(),
    mode: args.mode,
    llm: {
      enabled: args.llm,
      tier: args.llmTier,
      sample: args.llmSample,
      resume: args.llmResume
    },
    purpose_aware: args.purposeAware,
    legacy_rubric: args.legacyRubric,
    files_processed: rows.length,
    processed_pages: rows.length,
    counts: {
      processed_pages: rows.length,
      missing_routes: missingRoutes.length
    },
    missing_routes: missingRoutes,
    known_missing_routes: [
      'v2/resources/redirect',
      'v2/gateways/guides-and-tools/gateway-job-pipelines/overview'
    ],
    baseline: baselineComparison
  };

  ensureDir(args.outDir);
  const formats = new Set(args.format);
  if (formats.has('jsonl')) writeJsonl(path.join(args.outDir, 'page-matrix.jsonl'), rows);
  if (formats.has('csv')) writeCsv(path.join(args.outDir, 'page-matrix.csv'), rows);
  if (formats.has('json')) fs.writeFileSync(path.join(args.outDir, 'run-metadata.json'), JSON.stringify(metadata, null, 2));
  if (formats.has('md')) {
    fs.writeFileSync(
      path.join(args.outDir, 'summary.md'),
      buildSummaryMarkdown({
        rows,
        sectionSummary,
        journeyReports,
        baselineComparison,
        metadata
      })
    );
  }

  console.log(`USEFULNESS AUDIT — ${new Date().toISOString().slice(0, 10)}`);
  console.log(`Mode: ${args.mode} | Tier 2: ${args.llm ? `enabled (${args.llmTier})` : 'disabled'} | Pages: ${rows.length}`);
  if (missingRoutes.length > 0) {
    console.log(`Missing routes (non-fatal): ${missingRoutes.length}`);
    missingRoutes.slice(0, 10).forEach((route) => console.log(`  - ${route}`));
    if (missingRoutes.length > 10) console.log('  - ...');
  }
  console.log('');

  printSectionSummary(rows);
  if (journeyReports.length > 0) {
    printJourneyReport(journeyReports);
  }
  printBaselineComparison(baselineComparison);

  console.log(`Outputs written to ${args.outDir}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`audit-v2-usefulness error: ${error.message || error}`);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
  normalizeRouteKey,
  routeToCandidates,
  resolveRouteToFile,
  computeSectionSummary,
  computeBaselineComparison
};
