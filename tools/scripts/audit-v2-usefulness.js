#!/usr/bin/env node
/**
 * @script audit-v2-usefulness
 * @summary Audit v2 MDX pages (excluding x-* directories) and emit page-level usefulness matrix rows with source-weighted 2026 accuracy verification fields.
 * @owner docs
 * @scope tools/scripts, v2, tasks/reports, tools/config
 * @pipeline manual — diagnostic/investigation tool, run on-demand only
 *
 * @usage
 *   node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered
 *   node tools/scripts/audit-v2-usefulness.js --files v2/about/livepeer-network/actors.mdx --verification-fixture tasks/reports/quality-accessibility/docs-usefulness/fixtures.json
 *
 * @inputs
 *   --mode <full|changed|files> (default: full)
 *   --files <path[,path...]> Explicit MDX file list (repeatable; forces files mode)
 *   --as-of <YYYY-MM-DD> Accuracy verification date (default: 2026-02-23)
 *   --accuracy-mode <tiered|local-only|live> (default: tiered)
 *   --verify-sources <csv> Source families to use (default: github,deepwiki,official)
 *   --github-repos <csv> GitHub repos considered canonical for claim verification context
 *   --deepwiki-enabled <true|false> Enable DeepWiki corroboration (default: true in tiered/live)
 *   --deepwiki-base-url <url> DeepWiki base URL for fetch/query strategy (default: https://deepwiki.com)
 *   --official-docs-base-url <url> Official docs base URL for verification fetches (default: https://docs.livepeer.org)
 *   --github-results-per-repo <n> Max GitHub code search hits per repo/claim (default: 2)
 *   --verification-cache-dir <path> Cache directory for Tier 2 verification results
 *   --verification-max-requests <n> Max Tier 2 source queries per run (default: 200)
 *   --verification-timeout-ms <n> Source query timeout hint (default: 10000)
 *   --scoring-engine <rules-only|hybrid|llm-only> (default: rules-only)
 *   --out-dir <path> Output directory (default: tasks/reports/quality-accessibility/docs-usefulness/latest)
 *   --format <jsonl,csv,json,md> Output formats (default: jsonl,csv,json,md)
 *   --max-pages <n> Limit processed pages (debug)
 *   --verification-fixture <path> Optional fixture JSON for deterministic Tier 2 evidence in offline runs
 *
 * @outputs
 *   - page-matrix.jsonl (canonical rows with accuracy verification fields)
 *   - page-matrix.csv (flattened matrix with human/agent usefulness scores and flags)
 *   - run-metadata.json (run config, counts, and source policy)
 *   - summary.md (human-readable audit summary)
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = invalid args, read/write failure, or unexpected runtime error
 *
 * @examples
 *   node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered
 *   node tools/scripts/audit-v2-usefulness.js --files v2/about/livepeer-network/actors.mdx --verify-sources github,deepwiki,official
 *
 * @notes
 *   Emits a deterministic usefulness matrix now (rules-only scoring) and supports live Tier 2 verification via GitHub + DeepWiki/official fetch strategies.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const {
  DEFAULT_AS_OF_DATE,
  createLiveTier2Provider,
  createTier2Provider,
  createVerificationCache,
  extractTier1Claims,
  loadAccuracySourceRegistry,
  loadAccuracySourceWeights,
  parseBoolean,
  parseCsvList,
  parseVerifySourcesOption,
  toPosix,
  verifyPageAccuracy
} = require('../lib/docs-usefulness/accuracy-verifier');
const {
  analyzeMdxPage,
  buildUsefulnessMatrixFields
} = require('../lib/docs-usefulness/scoring');

const DEFAULT_VERIFY_TIMEOUT_MS = 10000;
const DEFAULT_VERIFY_MAX_REQUESTS = 200;

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
  const registry = loadAccuracySourceRegistry();
  const args = {
    mode: 'full',
    files: [],
    asOf: DEFAULT_AS_OF_DATE,
    accuracyMode: 'tiered',
    verifySources: registry.default_verify_sources || ['github', 'deepwiki', 'official'],
    githubRepos: [
      'livepeer/go-livepeer',
      'livepeer/livepeerjs',
      'livepeer/docs',
      'livepeer/livepeer-protocol'
    ],
    deepwikiEnabled: true,
    deepwikiBaseUrl: 'https://deepwiki.com',
    officialDocsBaseUrl: 'https://docs.livepeer.org',
    githubResultsPerRepo: 2,
    verificationCacheDir: null,
    verificationMaxRequests: DEFAULT_VERIFY_MAX_REQUESTS,
    verificationTimeoutMs: DEFAULT_VERIFY_TIMEOUT_MS,
    scoringEngine: 'rules-only',
    outDir: null,
    format: ['jsonl', 'csv', 'json', 'md'],
    maxPages: null,
    verificationFixture: null
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--mode') {
      args.mode = String(argv[i + 1] || args.mode);
      i += 1;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const parts = parseCsvList(argv[i + 1], []);
      args.files.push(...parts);
      i += 1;
      continue;
    }
    if (token === '--as-of') {
      args.asOf = String(argv[i + 1] || args.asOf);
      i += 1;
      continue;
    }
    if (token === '--accuracy-mode') {
      args.accuracyMode = String(argv[i + 1] || args.accuracyMode);
      i += 1;
      continue;
    }
    if (token === '--verify-sources') {
      args.verifySources = parseVerifySourcesOption(argv[i + 1], registry);
      i += 1;
      continue;
    }
    if (token === '--github-repos') {
      args.githubRepos = parseCsvList(argv[i + 1], args.githubRepos);
      i += 1;
      continue;
    }
    if (token === '--deepwiki-enabled') {
      args.deepwikiEnabled = parseBoolean(argv[i + 1], args.deepwikiEnabled);
      i += 1;
      continue;
    }
    if (token === '--deepwiki-base-url') {
      args.deepwikiBaseUrl = String(argv[i + 1] || args.deepwikiBaseUrl).trim() || args.deepwikiBaseUrl;
      i += 1;
      continue;
    }
    if (token === '--official-docs-base-url') {
      args.officialDocsBaseUrl = String(argv[i + 1] || args.officialDocsBaseUrl).trim() || args.officialDocsBaseUrl;
      i += 1;
      continue;
    }
    if (token === '--github-results-per-repo') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed > 0) args.githubResultsPerRepo = parsed;
      i += 1;
      continue;
    }
    if (token === '--verification-cache-dir') {
      args.verificationCacheDir = String(argv[i + 1] || '').trim() || null;
      i += 1;
      continue;
    }
    if (token === '--verification-max-requests') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed > 0) args.verificationMaxRequests = parsed;
      i += 1;
      continue;
    }
    if (token === '--verification-timeout-ms') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed > 0) args.verificationTimeoutMs = parsed;
      i += 1;
      continue;
    }
    if (token === '--scoring-engine') {
      args.scoringEngine = String(argv[i + 1] || args.scoringEngine).trim() || args.scoringEngine;
      i += 1;
      continue;
    }
    if (token === '--out-dir') {
      args.outDir = String(argv[i + 1] || '').trim() || null;
      i += 1;
      continue;
    }
    if (token === '--format') {
      args.format = parseCsvList(argv[i + 1], args.format);
      i += 1;
      continue;
    }
    if (token === '--max-pages') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed > 0) args.maxPages = parsed;
      i += 1;
      continue;
    }
    if (token === '--verification-fixture') {
      args.verificationFixture = String(argv[i + 1] || '').trim() || null;
      i += 1;
      continue;
    }
  }

  args.files = [...new Set(args.files.map((file) => String(file).trim()).filter(Boolean))];
  if (args.files.length > 0) args.mode = 'files';
  if (args.accuracyMode === 'local-only') {
    args.deepwikiEnabled = false;
  }
  if (args.outDir === null) {
    args.outDir = path.join(getRepoRoot(), 'tasks', 'reports', 'quality-accessibility', 'docs-usefulness', 'latest');
  } else {
    args.outDir = path.resolve(getRepoRoot(), args.outDir);
  }
  if (!args.verificationCacheDir) {
    args.verificationCacheDir = path.join(args.outDir, 'verification-cache');
  } else {
    args.verificationCacheDir = path.resolve(getRepoRoot(), args.verificationCacheDir);
  }

  return args;
}

function walkMdxFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('x-') && entry.isDirectory()) continue;
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkMdxFiles(fullPath, out);
      continue;
    }
    if (entry.name.endsWith('.mdx')) {
      out.push(fullPath);
    }
  }
  return out;
}

function collectChangedV2MdxFiles(repoRoot) {
  try {
    const output = execSync('git diff --name-only --diff-filter=ACMR HEAD', {
      cwd: repoRoot,
      encoding: 'utf8'
    });
    return output
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((rel) => rel.startsWith('v2/') && rel.endsWith('.mdx'))
      .filter((rel) => !rel.split('/').some((segment) => segment.startsWith('x-')))
      .map((rel) => path.join(repoRoot, rel));
  } catch (_error) {
    return [];
  }
}

function discoverTargetFiles(repoRoot, args) {
  if (args.mode === 'files') {
    return args.files
      .map((file) => path.resolve(repoRoot, file))
      .filter((file) => fs.existsSync(file))
      .filter((file) => file.endsWith('.mdx'))
      .filter((file) => {
        const rel = toPosix(path.relative(repoRoot, file));
        return rel.startsWith('v2/') && !rel.split('/').some((segment) => segment.startsWith('x-'));
      })
      .sort();
  }

  if (args.mode === 'changed') {
    const changed = collectChangedV2MdxFiles(repoRoot).sort();
    if (changed.length > 0) return changed;
  }

  return walkMdxFiles(path.join(repoRoot, 'v2')).sort();
}

function fileToRoutePath(repoRoot, absPath) {
  const rel = toPosix(path.relative(repoRoot, absPath));
  let route = rel.replace(/^v2\//, '/v2/').replace(/\.mdx$/i, '');
  route = route.replace(/\/index$/i, '');
  return route;
}

function loadFixtureMap(fixturePath, repoRoot) {
  if (!fixturePath) return {};
  const abs = path.resolve(repoRoot, fixturePath);
  if (!fs.existsSync(abs)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(abs, 'utf8'));
    return data.claims || data.fixturesByClaimId || {};
  } catch (_error) {
    return {};
  }
}

function escapeCsv(value) {
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  if (text === undefined) return '';
  if (/[",\n]/.test(text)) {
    return `"${String(text).replace(/"/g, '""')}"`;
  }
  return String(text);
}

function writeJsonl(filePath, rows) {
  const content = rows.map((row) => JSON.stringify(row)).join('\n') + (rows.length ? '\n' : '');
  fs.writeFileSync(filePath, content);
}

function writeCsv(filePath, rows) {
  if (!rows.length) {
    fs.writeFileSync(filePath, '');
    return;
  }
  const columns = [
    'as_of_date',
    'file_path',
    'route_path',
    'cohort',
    'page_kind',
    'doc_type_primary',
    'accuracy_2026_status',
    'accuracy_2026_confidence',
    'accuracy_2026_score',
    'clarity_score',
    'verifiability_score',
    'docs_framework_fit_score',
    'rfp_page_compliance_score',
    'completeness_score',
    'actionability_score',
    'audience_fit_score',
    'machine_readability_score',
    'maintenance_quality_score',
    'human_usefulness_score',
    'agent_usefulness_score',
    'human_band',
    'agent_band',
    'claims_extracted_count',
    'verification_sources_count',
    'source_types_used',
    'source_freshness_oldest_date',
    'source_freshness_latest_date',
    'flags_human',
    'verification_notes'
  ];
  const lines = [columns.join(',')];
  for (const row of rows) {
    const flat = {
      ...row,
      source_types_used: (row.source_types_used || []).join('|'),
      flags_human: (row.flags_human || []).join('; '),
      verification_sources_count: Array.isArray(row.verification_sources) ? row.verification_sources.length : 0
    };
    lines.push(columns.map((column) => escapeCsv(flat[column] ?? '')).join(','));
  }
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] ?? 'unknown';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function topCounts(items, limit = 10) {
  return Object.entries(items || {})
    .sort((a, b) => (b[1] - a[1]) || String(a[0]).localeCompare(String(b[0])))
    .slice(0, limit);
}

function writeSummaryMarkdown(filePath, rows, context = {}) {
  const total = rows.length;
  const statusCounts = countBy(rows, 'accuracy_2026_status');
  const humanBandCounts = countBy(rows, 'human_band');
  const agentBandCounts = countBy(rows, 'agent_band');
  const flagCounts = {};
  const sourceTypeCounts = {};
  let providerErrorPages = 0;

  rows.forEach((row) => {
    (row.flags || []).forEach((flag) => {
      flagCounts[flag] = (flagCounts[flag] || 0) + 1;
    });
    (row.source_types_used || []).forEach((type) => {
      sourceTypeCounts[type] = (sourceTypeCounts[type] || 0) + 1;
    });
    if (Array.isArray(row.provider_errors) && row.provider_errors.length > 0) {
      providerErrorPages += 1;
    }
  });

  const avgHuman = total ? (rows.reduce((sum, row) => sum + (row.human_usefulness_score || 0), 0) / total) : 0;
  const avgAgent = total ? (rows.reduce((sum, row) => sum + (row.agent_usefulness_score || 0), 0) / total) : 0;
  const lowestHuman = [...rows]
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10);
  const highestHuman = [...rows]
    .sort((a, b) => ((b.human_usefulness_score || 0) - (a.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10);
  const lowestAgent = [...rows]
    .sort((a, b) => ((a.agent_usefulness_score || 0) - (b.agent_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10);

  function pct(count) {
    if (!total) return '0.0%';
    return `${((count / total) * 100).toFixed(1)}%`;
  }

  function sectionFromPath(filePath) {
    const parts = String(filePath || '').split('/');
    return parts[1] || 'unknown';
  }

  function summarizeProviderError(message) {
    const text = String(message || '').replace(/\s+/g, ' ').trim();
    if (!text) return 'unknown';
    if (text === 'verification request limit reached') return 'verification request limit reached';
    if (/API rate limit exceeded/i.test(text)) return 'github api rate limit exceeded';
    if (/spawnSync gh ETIMEDOUT/i.test(text)) return 'gh api timeout';
    if (/This operation was aborted/i.test(text)) return 'http fetch aborted/timeout';
    if (/HTTP 4\d\d/i.test(text)) return text.replace(/https?:\/\/\S+/g, '<url>').slice(0, 120);
    return text.slice(0, 140);
  }

  const cohortCounts = countBy(rows, 'cohort');
  const verificationPriorityCounts = countBy(rows.filter((row) => row.verification_priority), 'verification_priority');
  const contradictedRows = rows.filter((row) => row.accuracy_2026_status === 'contradicted');
  const staleRows = rows.filter((row) => row.accuracy_2026_status === 'stale_risk');
  const emptyRows = rows.filter((row) => (row.flags || []).includes('empty'));
  const legacyLinkRows = rows.filter((row) => (row.flags || []).includes('legacy_v2_pages_link'));
  const incompleteRows = rows.filter((row) => (row.flags || []).includes('incomplete'));
  const missingFrontmatterRows = rows.filter((row) => (row.flags || []).includes('missing_frontmatter'));
  const missingDescriptionRows = rows.filter((row) => (row.flags || []).includes('missing_description'));
  const thinContentRows = rows.filter((row) => (row.flags || []).includes('thin_content'));
  const highPriorityRows = rows
    .filter((row) => row.verification_priority === 'high')
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 25);
  const providerErrorCounts = {};
  rows.forEach((row) => {
    (row.provider_errors || []).forEach((error) => {
      const key = summarizeProviderError(error);
      providerErrorCounts[key] = (providerErrorCounts[key] || 0) + 1;
    });
  });

  const sectionStats = {};
  rows.forEach((row) => {
    const section = sectionFromPath(row.file_path);
    if (!sectionStats[section]) {
      sectionStats[section] = {
        count: 0,
        human: 0,
        agent: 0,
        provisional: 0,
        verified: 0,
        stale: 0,
        contradicted: 0,
        needsReview: 0,
        empty: 0
      };
    }
    const s = sectionStats[section];
    s.count += 1;
    s.human += Number(row.human_usefulness_score || 0);
    s.agent += Number(row.agent_usefulness_score || 0);
    if (row.accuracy_2026_status === 'provisional') s.provisional += 1;
    if (row.accuracy_2026_status === 'verified_2026') s.verified += 1;
    if (row.accuracy_2026_status === 'stale_risk') s.stale += 1;
    if (row.accuracy_2026_status === 'contradicted') s.contradicted += 1;
    if ((row.flags || []).includes('accuracy_needs_review')) s.needsReview += 1;
    if ((row.flags || []).includes('empty')) s.empty += 1;
  });
  const sectionRows = Object.entries(sectionStats)
    .map(([section, s]) => ({
      section,
      count: s.count,
      avgHuman: s.count ? s.human / s.count : 0,
      avgAgent: s.count ? s.agent / s.count : 0,
      verified: s.verified,
      provisional: s.provisional,
      stale: s.stale,
      contradicted: s.contradicted,
      needsReview: s.needsReview,
      empty: s.empty
    }))
    .sort((a, b) => b.count - a.count || a.section.localeCompare(b.section));
  const weakSections = [...sectionRows]
    .sort((a, b) => (a.avgHuman - b.avgHuman) || (b.count - a.count) || a.section.localeCompare(b.section))
    .slice(0, 5);
  const topMediumPriorityRows = rows
    .filter((row) => row.verification_priority === 'medium')
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 15);

  const lines = [];
  lines.push('# Docs Usefulness Audit Summary');
  lines.push('');
  lines.push(`- Run date (as-of): \`${context.asOfDate || ''}\``);
  if (context.generatedAt) lines.push(`- Generated at: \`${context.generatedAt}\``);
  if (context.mode) lines.push(`- Mode: \`${context.mode}\``);
  if (context.accuracyMode) lines.push(`- Accuracy mode: \`${context.accuracyMode}\``);
  if (context.scoringEngine) lines.push(`- Scoring engine: \`${context.scoringEngine}\``);
  lines.push(`- Pages audited: **${total}**`);
  lines.push(`- Avg human usefulness: **${avgHuman.toFixed(1)}**`);
  lines.push(`- Avg agent usefulness: **${avgAgent.toFixed(1)}**`);
  lines.push(`- Pages with provider errors: **${providerErrorPages}**`);
  lines.push('');

  lines.push('## Key Takeaways');
  lines.push('');
  lines.push(`- **${statusCounts.verified_2026 || 0}** pages are \`verified_2026\` (${pct(statusCounts.verified_2026 || 0)}).`);
  lines.push(`- **${statusCounts.provisional || 0}** pages remain \`provisional\` (${pct(statusCounts.provisional || 0)}), largely due to verification coverage/rate limits.`);
  lines.push(`- **${staleRows.length}** pages are \`stale_risk\`; **${contradictedRows.length}** page is \`contradicted\`.`);
  lines.push(`- **${emptyRows.length}** pages are flagged \`empty\`; **${legacyLinkRows.length}** pages still contain legacy \`/v2/pages\` links.`);
  lines.push(`- Verification queue: high=${verificationPriorityCounts.high || 0}, medium=${verificationPriorityCounts.medium || 0}, low=${verificationPriorityCounts.low || 0}.`);
  lines.push('');

  lines.push('## Cohorts');
  lines.push('');
  Object.entries(cohortCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cohort, count]) => lines.push(`- \`${cohort}\`: ${count} (${pct(count)})`));
  lines.push('');

  lines.push('## Accuracy Status');
  lines.push('');
  Object.entries(statusCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => lines.push(`- \`${k}\`: ${v}`));
  lines.push('');

  lines.push('## Human Bands');
  lines.push('');
  Object.entries(humanBandCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => lines.push(`- \`${k}\`: ${v}`));
  lines.push('');

  lines.push('## Agent Bands');
  lines.push('');
  Object.entries(agentBandCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => lines.push(`- \`${k}\`: ${v}`));
  lines.push('');

  lines.push('## Top Flags');
  lines.push('');
  topCounts(flagCounts, 15).forEach(([flag, count]) => {
    lines.push(`- \`${flag}\`: ${count}`);
  });
  lines.push('');

  lines.push('## Source Types Used (Pages)');
  lines.push('');
  topCounts(sourceTypeCounts, 15).forEach(([type, count]) => {
    lines.push(`- \`${type}\`: ${count}`);
  });
  lines.push('');

  lines.push('## Section Breakdown');
  lines.push('');
  lines.push('| Section | Pages | Avg Human | Avg Agent | Verified | Provisional | Stale | Contradicted | Empty | Needs Review |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|');
  sectionRows.forEach((s) => {
    lines.push(`| \`${s.section}\` | ${s.count} | ${s.avgHuman.toFixed(1)} | ${s.avgAgent.toFixed(1)} | ${s.verified} | ${s.provisional} | ${s.stale} | ${s.contradicted} | ${s.empty} | ${s.needsReview} |`);
  });
  lines.push('');

  lines.push('## Verification Queue (High Priority)');
  lines.push('');
  if (highPriorityRows.length === 0) {
    lines.push('- None');
  } else {
    highPriorityRows.slice(0, 15).forEach((row) => {
      lines.push(`- \`${row.file_path}\` (human=${row.human_usefulness_score}, agent=${row.agent_usefulness_score}, status=${row.accuracy_2026_status})`);
    });
  }
  lines.push('');

  lines.push('## Contradicted / Source Conflict Pages');
  lines.push('');
  const conflictRows = rows.filter((row) => (row.flags || []).includes('source_conflict'));
  if (conflictRows.length === 0) {
    lines.push('- None');
  } else {
    conflictRows.slice(0, 20).forEach((row) => {
      lines.push(`- \`${row.file_path}\` (status=${row.accuracy_2026_status}, conflicts=${(row.source_conflicts || []).length})`);
    });
  }
  lines.push('');

  lines.push('## Stale Risk Pages');
  lines.push('');
  if (staleRows.length === 0) {
    lines.push('- None');
  } else {
    staleRows
      .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
      .slice(0, 20)
      .forEach((row) => {
        lines.push(`- \`${row.file_path}\` (human=${row.human_usefulness_score}, agent=${row.agent_usefulness_score})`);
      });
  }
  lines.push('');

  lines.push('## Lowest Human Usefulness (Top 10)');
  lines.push('');
  lowestHuman.forEach((row) => {
    const flagsPreview = (row.flags || []).slice(0, 4).join(', ');
    lines.push(`- \`${row.human_usefulness_score}\` \`${row.file_path}\` (${row.accuracy_2026_status})${flagsPreview ? ` — ${flagsPreview}` : ''}`);
  });
  lines.push('');

  lines.push('## Lowest Agent Usefulness (Top 10)');
  lines.push('');
  lowestAgent.forEach((row) => {
    const flagsPreview = (row.flags || []).slice(0, 4).join(', ');
    lines.push(`- \`${row.agent_usefulness_score}\` \`${row.file_path}\` (${row.accuracy_2026_status})${flagsPreview ? ` — ${flagsPreview}` : ''}`);
  });
  lines.push('');

  lines.push('## Highest Human Usefulness (Top 10)');
  lines.push('');
  highestHuman.forEach((row) => {
    const flagsPreview = (row.flags || []).slice(0, 3).join(', ');
    lines.push(`- \`${row.human_usefulness_score}\` \`${row.file_path}\` (${row.accuracy_2026_status})${flagsPreview ? ` — ${flagsPreview}` : ''}`);
  });
  lines.push('');

  lines.push('## Provider Error Breakdown (Top Patterns)');
  lines.push('');
  if (providerErrorPages === 0) {
    lines.push('- None');
  } else {
    topCounts(providerErrorCounts, 12).forEach(([msg, count]) => {
      lines.push(`- \`${count}\` ${msg}`);
    });
  }
  lines.push('');
  lines.push('## Recommended Actions (Prioritized)');
  lines.push('');
  lines.push('### P0: Fix broken/empty placeholders first (high impact, low effort)');
  lines.push('');
  lines.push(`- Empty pages: **${emptyRows.length}**. Replace with content, redirect, or remove from navigation.`);
  emptyRows.slice(0, 8).forEach((row) => {
    lines.push(`- \`${row.file_path}\` (human=${row.human_usefulness_score}, agent=${row.agent_usefulness_score})`);
  });
  lines.push('');
  lines.push(`- Incomplete/placeholder pages: **${incompleteRows.length}**. Prioritize public "Coming Soon"/TODO pages with low scores.`);
  incompleteRows
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10)
    .forEach((row) => {
      lines.push(`- \`${row.file_path}\` (human=${row.human_usefulness_score}, status=${row.accuracy_2026_status})`);
    });
  lines.push('');

  lines.push('### P1: Resolve high-priority verification issues');
  lines.push('');
  if (highPriorityRows.length === 0) {
    lines.push('- No high-priority verification rows.');
  } else {
    lines.push(`- High-priority verification queue: **${highPriorityRows.length}** page(s) currently flagged.`);
    highPriorityRows.slice(0, 15).forEach((row) => {
      lines.push(`- \`${row.file_path}\` (status=${row.accuracy_2026_status}, human=${row.human_usefulness_score}, flags=${(row.flags || []).slice(0, 5).join(', ')})`);
    });
  }
  if (contradictedRows.length > 0) {
    lines.push(`- Contradicted page(s): **${contradictedRows.length}**. Start with \`${contradictedRows[0].file_path}\` and inspect \`source_conflicts\` in JSONL.`);
  }
  lines.push('');

  lines.push('### P1: Remove legacy path leakage and metadata gaps');
  lines.push('');
  lines.push(`- Legacy \`/v2/pages\` links: **${legacyLinkRows.length}** page(s). Replace with current \`/v2/<section>/...\` routes.`);
  legacyLinkRows
    .sort((a, b) => a.file_path.localeCompare(b.file_path))
    .slice(0, 10)
    .forEach((row) => lines.push(`- \`${row.file_path}\``));
  lines.push(`- Missing frontmatter: **${missingFrontmatterRows.length}** page(s). Add at minimum \`title\` + \`description\`.`);
  missingFrontmatterRows
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10)
    .forEach((row) => lines.push(`- \`${row.file_path}\``));
  lines.push(`- Missing description: **${missingDescriptionRows.length}** page(s). Fill descriptions for SEO/AEO + machine readability.`);
  missingDescriptionRows
    .sort((a, b) => ((a.human_usefulness_score || 0) - (b.human_usefulness_score || 0)) || a.file_path.localeCompare(b.file_path))
    .slice(0, 10)
    .forEach((row) => lines.push(`- \`${row.file_path}\``));
  lines.push('');

  lines.push('### P2: Lift thin-content pages by section (rewrite batches)');
  lines.push('');
  lines.push(`- Thin-content pages: **${thinContentRows.length}**. Batch by section to reduce context switching.`);
  weakSections.forEach((section) => {
    lines.push(`- \`${section.section}\`: avgHuman=${section.avgHuman.toFixed(1)} across ${section.count} page(s), empty=${section.empty}, stale=${section.stale}, verified=${section.verified}`);
  });
  lines.push('- Suggested batch order: `home/get-started` placeholders -> `community` empties/FAQs -> `gateways` metadata cleanup -> `about` stale-risk pages.');
  lines.push('');

  lines.push('### P2: Improve verification coverage on medium-priority pages');
  lines.push('');
  lines.push(`- Medium-priority verification queue: **${verificationPriorityCounts.medium || 0}** page(s).`);
  topMediumPriorityRows.forEach((row) => {
    lines.push(`- \`${row.file_path}\` (human=${row.human_usefulness_score}, status=${row.accuracy_2026_status})`);
  });
  lines.push('');

  lines.push('### Operator Notes (for reruns)');
  lines.push('');
  lines.push('- GitHub search/code was rate-limited in this run. Re-run after rate limit reset (or with higher quota) to increase `verified_2026` coverage.');
  lines.push('- Consider increasing `--verification-max-requests` above the default if you want deeper source coverage.');
  lines.push('- Keep `page-matrix.jsonl` open for exact `source_conflicts`, `provider_errors`, and per-claim evidence when fixing pages.');
  lines.push('');

  lines.push('## Notes');
  lines.push('');
  lines.push('- `accuracy_needs_review` may be high when GitHub search/code is rate-limited or the verification request budget is exhausted.');
  lines.push('- Use `page-matrix.csv` for sorting/filtering and `page-matrix.jsonl` for full row details and evidence payloads.');
  lines.push('');

  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function buildFlagsHuman(flags) {
  return [...new Set((flags || []).map((flag) => String(flag).replace(/_/g, ' ')))];
}

function maybeAddEmptyFlag(content, flags) {
  if (String(content || '').trim().length === 0) flags.push('empty');
}

async function main() {
  const repoRoot = getRepoRoot();
  const args = parseArgs(process.argv.slice(2));
  const registry = loadAccuracySourceRegistry();
  const weights = loadAccuracySourceWeights();

  ensureDir(args.outDir);
  ensureDir(args.verificationCacheDir);

  const fixtureMap = loadFixtureMap(args.verificationFixture, repoRoot);
  const cache = createVerificationCache(args.verificationCacheDir);
  const useLiveTier2 = !args.verificationFixture && (args.accuracyMode === 'tiered' || args.accuracyMode === 'live');
  const tier2Provider = useLiveTier2
    ? createLiveTier2Provider({
        cache,
        maxRequests: args.verificationMaxRequests,
        githubResultsPerRepo: args.githubResultsPerRepo,
        deepwikiBaseUrl: args.deepwikiBaseUrl,
        officialDocsBaseUrl: args.officialDocsBaseUrl
      })
    : createTier2Provider({
        cache,
        fixturesByClaimId: fixtureMap,
        maxRequests: args.verificationMaxRequests
      });

  let files = discoverTargetFiles(repoRoot, args);
  if (Number.isFinite(args.maxPages)) {
    files = files.slice(0, args.maxPages);
  }

  const rows = [];
  for (const absPath of files) {
    const content = fs.readFileSync(absPath, 'utf8');
    const relPath = toPosix(path.relative(repoRoot, absPath));
    const routePath = fileToRoutePath(repoRoot, absPath);
    const claims = extractTier1Claims({ content, pagePath: relPath });

    const accuracy = await verifyPageAccuracy({
      content,
      claims,
      pagePath: relPath,
      routePath,
      asOfDate: args.asOf,
      accuracyMode: args.accuracyMode,
      verifySources: args.verifySources,
      githubRepos: args.githubRepos,
      deepwikiEnabled: args.deepwikiEnabled,
      verificationMaxRequests: args.verificationMaxRequests,
      verificationTimeoutMs: args.verificationTimeoutMs,
      tier2Provider,
      cache,
      registry,
      weights
    });

    const analysis = analyzeMdxPage({
      content,
      filePath: relPath,
      routePath,
      accuracy
    });
    const matrix = buildUsefulnessMatrixFields({ analysis, accuracy });

    const flags = [...new Set([...(accuracy.flags || []), ...(analysis.flags || [])])];
    maybeAddEmptyFlag(content, flags);
    if (matrix.manual_review_required) flags.push('manual_review_required');
    if (matrix.verification_required) flags.push('verification_required');
    if ((args.scoringEngine === 'hybrid' || args.scoringEngine === 'llm-only')) flags.push('llm_unavailable');
    const row = {
      schema_version: 'docs-usefulness-matrix.v1',
      as_of_date: args.asOf,
      file_path: relPath,
      route_path: routePath,
      accuracy_2026_status: accuracy.accuracy_2026_status,
      accuracy_2026_confidence: accuracy.accuracy_2026_confidence,
      verification_sources: accuracy.verification_sources,
      source_conflicts: accuracy.source_conflicts,
      source_types_used: accuracy.source_types_used,
      source_freshness_latest_date: accuracy.source_freshness_latest_date,
      source_freshness_oldest_date: accuracy.source_freshness_oldest_date,
      verification_notes: accuracy.verification_notes,
      claims_extracted_count: Array.isArray(accuracy.claims) ? accuracy.claims.length : claims.length,
      claims: accuracy.claims || claims,
      claim_results: accuracy.claim_results || [],
      provider_errors: accuracy.provider_errors || [],
      ...matrix,
      flags: [...new Set(flags)],
      flags_human: buildFlagsHuman(flags)
    };
    rows.push(row);
  }

  const formats = new Set(args.format);
  if (formats.has('jsonl')) {
    writeJsonl(path.join(args.outDir, 'page-matrix.jsonl'), rows);
  }
  if (formats.has('csv')) {
    writeCsv(path.join(args.outDir, 'page-matrix.csv'), rows);
  }
  const metadata = {
    run_started_at: new Date().toISOString(),
    as_of_date: args.asOf,
    repo_root: repoRoot,
    files_processed: rows.length,
    mode: args.mode,
    accuracy_mode: args.accuracyMode,
    scoring_engine: args.scoringEngine,
    verify_sources: args.verifySources,
    github_repos: args.githubRepos,
    deepwiki_enabled: args.deepwikiEnabled,
    deepwiki_base_url: args.deepwikiBaseUrl,
    official_docs_base_url: args.officialDocsBaseUrl,
    github_results_per_repo: args.githubResultsPerRepo,
    verification_cache_dir: toPosix(path.relative(repoRoot, args.verificationCacheDir)),
    verification_max_requests: args.verificationMaxRequests,
    verification_timeout_ms: args.verificationTimeoutMs,
    source_policy: {
      registry_schema_version: registry.schema_version,
      weights_schema_version: weights.schema_version,
      decision_defaults: registry.decision_defaults
    }
  };
  if (formats.has('json')) {
    fs.writeFileSync(path.join(args.outDir, 'run-metadata.json'), JSON.stringify(metadata, null, 2));
  }

  const summary = {
    total: rows.length,
    status_counts: rows.reduce((acc, row) => {
      acc[row.accuracy_2026_status] = (acc[row.accuracy_2026_status] || 0) + 1;
      return acc;
    }, {}),
    avg_human_usefulness: rows.length ? Number((rows.reduce((sum, row) => sum + (row.human_usefulness_score || 0), 0) / rows.length).toFixed(1)) : 0,
    avg_agent_usefulness: rows.length ? Number((rows.reduce((sum, row) => sum + (row.agent_usefulness_score || 0), 0) / rows.length).toFixed(1)) : 0,
    flagged_source_conflict: rows.filter((row) => row.flags.includes('source_conflict')).length,
    flagged_accuracy_needs_review: rows.filter((row) => row.flags.includes('accuracy_needs_review')).length
  };

  if (formats.has('md')) {
    writeSummaryMarkdown(path.join(args.outDir, 'summary.md'), rows, {
      asOfDate: args.asOf,
      generatedAt: metadata.run_started_at,
      mode: args.mode,
      accuracyMode: args.accuracyMode,
      scoringEngine: args.scoringEngine
    });
  }

  console.log(`Audited ${summary.total} page(s) into ${args.outDir}`);
  console.log(`Status counts: ${JSON.stringify(summary.status_counts)}`);
  console.log(`avg_human=${summary.avg_human_usefulness} avg_agent=${summary.avg_agent_usefulness}`);
  console.log(`source_conflict=${summary.flagged_source_conflict} accuracy_needs_review=${summary.flagged_accuracy_needs_review}`);
}

module.exports = {
  writeSummaryMarkdown
};

if (require.main === module) {
  main().catch((error) => {
    console.error('audit-v2-usefulness error:', error);
    process.exit(1);
  });
}
