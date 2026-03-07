#!/usr/bin/env node
/**
 * @script generate-content-gap-reconciliation
 * @summary Generate IA reconciliation CSV and summary from blueprint and v2 MDX coverage.
 * @owner docs
 * @scope tools/scripts, tools/config, tools/lib, v2, tasks/reports/content-gap
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/generate-content-gap-reconciliation.js
 *   node tools/scripts/generate-content-gap-reconciliation.js --out-dir tasks/reports/content-gap
 *
 * @inputs
 *   --blueprint-pages <path> (default: tools/config/blueprint-pages.json)
 *   --blueprint-mapping <path> (default: tools/config/blueprint-mapping.json)
 *   --v2-root <path> (default: v2)
 *   --out-dir <path> (default: tasks/reports/content-gap)
 *
 * @outputs
 *   - tasks/reports/content-gap/reconciliation.csv
 *   - tasks/reports/content-gap/reconciliation-summary.md
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/generate-content-gap-reconciliation.js
 *   node tools/scripts/generate-content-gap-reconciliation.js --out-dir tasks/reports/content-gap
 *
 * @notes
 *   Includes v2/internal pages in REPO_ONLY analysis and excludes cn/es/fr/x-deprecated/x-experimental/x-notes/views/groups.
 */

const fs = require('fs');
const path = require('path');
const {
  extractFrontmatter,
  stripForWordCount,
  countWords,
  normalizeRel
} = require('../lib/docs-index-utils');

const REPO_ROOT = process.cwd();

const DEFAULTS = {
  blueprintPagesPath: 'tools/config/blueprint-pages.json',
  blueprintMappingPath: 'tools/config/blueprint-mapping.json',
  v2Root: 'v2',
  outDir: 'tasks/reports/content-gap'
};

const CSV_COLUMNS = [
  'source',
  'tab',
  'position',
  'blueprint_name',
  'blueprint_type',
  'blueprint_phase',
  'repo_file',
  'status',
  'word_count',
  'has_title',
  'has_description',
  'brand_violations',
  'decision',
  'notes'
];

const DECISION_OPTIONS_COMMENT = '# decision options: KEEP, CREATE, EXPAND, MERGE, RENAME, DELETE, ADD_TO_BLUEPRINT';

const EXCLUDED_REPO_ONLY_SEGMENTS = new Set([
  'cn',
  'es',
  'fr',
  'x-deprecated',
  'x-experimental',
  'x-notes',
  'views',
  'groups'
]);

const TEMPLATE_EXPANSIONS = {
  '[Platform]': ['Studio', 'Daydream'],
  '[Provider]': ['Cloud SPE', 'Daydream', 'Studio']
};

const REPO_TAB_MAP = {
  home: 'HOME',
  developers: 'DEVELOPERS',
  solutions: 'SOLUTIONS',
  gateways: 'GATEWAYS',
  orchestrators: 'GPU NODES',
  lpt: 'LP TOKEN',
  community: 'COMMUNITY',
  about: 'ABOUT',
  resources: 'RESOURCE HUB',
  internal: 'INTERNAL'
};

const BANNED_WORD_PATTERNS = [
  { label: 'simply', regex: /\bsimply\b/i },
  { label: 'just', regex: /\bjust\b/i },
  { label: 'easily', regex: /\beasily\b/i },
  { label: 'utilize', regex: /\butilize\b/i },
  { label: 'leverage', regex: /\bleverage\b/i },
  { label: 'seamless', regex: /\bseamless\b/i },
  { label: 'best-in-class', regex: /\bbest[\s-]in[\s-]class\b/i }
];

const DEPRECATED_WORD_PATTERNS = [
  { label: 'broadcaster->gateway', regex: /\bbroadcasters?\b/i },
  { label: 'miner->orchestrator', regex: /\bminers?\b/i }
];

const PLACEHOLDER_PATTERN = /Coming Soon|\bTODO\b|\bTBD\b|PreviewCallout/i;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function parseArgs(argv) {
  const out = { ...DEFAULTS };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      printUsage();
      process.exit(0);
    }

    if (token === '--blueprint-pages') {
      out.blueprintPagesPath = String(argv[i + 1] || out.blueprintPagesPath).trim() || out.blueprintPagesPath;
      i += 1;
      continue;
    }
    if (token.startsWith('--blueprint-pages=')) {
      out.blueprintPagesPath = token.slice('--blueprint-pages='.length).trim() || out.blueprintPagesPath;
      continue;
    }

    if (token === '--blueprint-mapping') {
      out.blueprintMappingPath = String(argv[i + 1] || out.blueprintMappingPath).trim() || out.blueprintMappingPath;
      i += 1;
      continue;
    }
    if (token.startsWith('--blueprint-mapping=')) {
      out.blueprintMappingPath = token.slice('--blueprint-mapping='.length).trim() || out.blueprintMappingPath;
      continue;
    }

    if (token === '--v2-root') {
      out.v2Root = String(argv[i + 1] || out.v2Root).trim() || out.v2Root;
      i += 1;
      continue;
    }
    if (token.startsWith('--v2-root=')) {
      out.v2Root = token.slice('--v2-root='.length).trim() || out.v2Root;
      continue;
    }

    if (token === '--out-dir') {
      out.outDir = String(argv[i + 1] || out.outDir).trim() || out.outDir;
      i += 1;
      continue;
    }
    if (token.startsWith('--out-dir=')) {
      out.outDir = token.slice('--out-dir='.length).trim() || out.outDir;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return out;
}

function printUsage() {
  console.log('Usage: node tools/scripts/generate-content-gap-reconciliation.js [options]');
  console.log('');
  console.log('Options:');
  console.log(`  --blueprint-pages <path>    Default: ${DEFAULTS.blueprintPagesPath}`);
  console.log(`  --blueprint-mapping <path>  Default: ${DEFAULTS.blueprintMappingPath}`);
  console.log(`  --v2-root <path>            Default: ${DEFAULTS.v2Root}`);
  console.log(`  --out-dir <path>            Default: ${DEFAULTS.outDir}`);
}

function readJsonFile(repoPath) {
  const absPath = path.resolve(REPO_ROOT, repoPath);
  const raw = fs.readFileSync(absPath, 'utf8');
  return JSON.parse(raw);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function expandBlueprintName(name) {
  let expanded = [String(name || '')];
  for (const [token, replacements] of Object.entries(TEMPLATE_EXPANSIONS)) {
    const next = [];
    for (const value of expanded) {
      if (!value.includes(token)) {
        next.push(value);
        continue;
      }
      replacements.forEach((replacement) => {
        next.push(value.replaceAll(token, replacement));
      });
    }
    expanded = next;
  }
  return expanded;
}

function buildMappedFileSet(blueprintMapping) {
  const mapped = new Set();
  Object.values(blueprintMapping).forEach((tabMap) => {
    if (!tabMap || typeof tabMap !== 'object') return;
    Object.values(tabMap).forEach((repoFile) => {
      if (!repoFile) return;
      mapped.add(normalizeRel(repoFile));
    });
  });
  return mapped;
}

function cleanTextForWordCount(body) {
  return String(stripForWordCount(body))
    .replace(/^export\s.+$/gm, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function findBrandViolations(rawContent) {
  const violations = [];
  for (const entry of BANNED_WORD_PATTERNS) {
    if (entry.regex.test(rawContent)) violations.push(`banned:${entry.label}`);
  }
  for (const entry of DEPRECATED_WORD_PATTERNS) {
    if (entry.regex.test(rawContent)) violations.push(`deprecated:${entry.label}`);
  }
  return violations.join('; ');
}

function analyzeExistingMdxFile(absPath) {
  const raw = fs.readFileSync(absPath, 'utf8');
  const frontmatter = extractFrontmatter(raw);
  const body = frontmatter.body || raw;
  const wordCount = countWords(cleanTextForWordCount(body));
  const hasTitle = Boolean(frontmatter.data && String(frontmatter.data.title || '').trim());
  const hasDescription = Boolean(frontmatter.data && String(frontmatter.data.description || '').trim());
  const isPlaceholder = PLACEHOLDER_PATTERN.test(raw);
  const status = wordCount < 50 ? 'STUB' : (isPlaceholder ? 'PLACEHOLDER' : 'EXISTS');
  const brandViolations = findBrandViolations(raw);

  return {
    status,
    word_count: wordCount,
    has_title: hasTitle,
    has_description: hasDescription,
    brand_violations: brandViolations
  };
}

function makeMissingRow(base) {
  return {
    ...base,
    status: 'MISSING',
    word_count: 0,
    has_title: false,
    has_description: false,
    brand_violations: '',
    decision: '',
    notes: ''
  };
}

function makeBaseRow() {
  return {
    source: '',
    tab: '',
    position: '',
    blueprint_name: '',
    blueprint_type: '',
    blueprint_phase: '',
    repo_file: '',
    status: '',
    word_count: '',
    has_title: '',
    has_description: '',
    brand_violations: '',
    decision: '',
    notes: ''
  };
}

function buildBlueprintRows(blueprintPages, blueprintMapping) {
  const rows = [];

  blueprintPages.forEach((entry) => {
    const expandedNames = expandBlueprintName(entry.name);
    expandedNames.forEach((expandedName) => {
      const mappedPathRaw = blueprintMapping?.[entry.tab]?.[expandedName] ?? null;
      const mappedPath = mappedPathRaw ? normalizeRel(mappedPathRaw) : '';

      const base = makeBaseRow();
      base.source = 'BLUEPRINT';
      base.tab = String(entry.tab || '');
      base.position = Number.isFinite(Number(entry.position)) ? Number(entry.position) : '';
      base.blueprint_name = expandedName;
      base.blueprint_type = String(entry.content_type || '');
      base.blueprint_phase = String(entry.phase || '');
      base.repo_file = mappedPath;

      if (!mappedPath) {
        rows.push(makeMissingRow(base));
        return;
      }

      const absPath = path.join(REPO_ROOT, mappedPath);
      if (!fs.existsSync(absPath) || !fs.statSync(absPath).isFile()) {
        rows.push(makeMissingRow(base));
        return;
      }

      rows.push({
        ...base,
        ...analyzeExistingMdxFile(absPath),
        decision: '',
        notes: ''
      });
    });
  });

  return rows;
}

function shouldExcludeRepoOnlyPath(relPath) {
  if (!relPath.startsWith('v2/')) return true;
  if (!relPath.toLowerCase().endsWith('.mdx')) return true;
  const segments = relPath.split('/');
  return segments.some((segment) => EXCLUDED_REPO_ONLY_SEGMENTS.has(segment));
}

function walkFilesRecursive(absDir, out = []) {
  if (!fs.existsSync(absDir)) return out;
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  entries.forEach((entry) => {
    const absPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      walkFilesRecursive(absPath, out);
      return;
    }
    out.push(absPath);
  });
  return out;
}

function deriveRepoOnlyTab(repoFile) {
  const segments = repoFile.split('/');
  if (segments[0] !== 'v2') return 'UNASSIGNED';
  const topLevel = segments[1] || '';
  return REPO_TAB_MAP[topLevel] || 'UNASSIGNED';
}

function buildRepoOnlyRows(v2Root, mappedFileSet) {
  const rows = [];
  const v2RootAbs = path.resolve(REPO_ROOT, v2Root);
  const files = walkFilesRecursive(v2RootAbs)
    .map((absPath) => normalizeRel(path.relative(REPO_ROOT, absPath)))
    .filter((relPath) => !shouldExcludeRepoOnlyPath(relPath))
    .filter((relPath) => !mappedFileSet.has(relPath))
    .sort((a, b) => a.localeCompare(b));

  files.forEach((repoFile) => {
    const absPath = path.join(REPO_ROOT, repoFile);
    const base = makeBaseRow();
    base.source = 'REPO_ONLY';
    base.tab = deriveRepoOnlyTab(repoFile);
    base.repo_file = repoFile;

    rows.push({
      ...base,
      ...analyzeExistingMdxFile(absPath),
      decision: '',
      notes: ''
    });
  });

  return rows;
}

function csvEscape(value) {
  const stringValue = String(value ?? '');
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function writeCsv(filePath, rows) {
  const lines = [];
  lines.push(DECISION_OPTIONS_COMMENT);
  lines.push(CSV_COLUMNS.join(','));
  rows.forEach((row) => {
    const values = CSV_COLUMNS.map((column) => csvEscape(row[column]));
    lines.push(values.join(','));
  });
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
}

function countBy(rows, keySelector) {
  const counts = new Map();
  rows.forEach((row) => {
    const key = keySelector(row);
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function mapToMarkdownTable(counts, columnName, sortOrder = []) {
  const entries = [...counts.entries()];
  entries.sort((a, b) => {
    const aPriority = sortOrder.indexOf(a[0]);
    const bPriority = sortOrder.indexOf(b[0]);
    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }
    return b[1] - a[1] || String(a[0]).localeCompare(String(b[0]));
  });

  const lines = [
    `| ${columnName} | count |`,
    '|---|---:|'
  ];
  entries.forEach(([key, count]) => {
    lines.push(`| ${String(key)} | ${count} |`);
  });
  return lines;
}

function buildSummaryMarkdown(rows, csvRepoPath) {
  const generatedAt = new Date().toISOString();
  const sourceCounts = countBy(rows, (row) => row.source || 'UNKNOWN');
  const tabCounts = countBy(rows, (row) => row.tab || 'UNASSIGNED');
  const statusCounts = countBy(rows, (row) => row.status || 'UNKNOWN');

  const lines = [];
  lines.push('# Content Gap Reconciliation Summary');
  lines.push('');
  lines.push(`- Generated: ${generatedAt}`);
  lines.push(`- CSV: ${csvRepoPath}`);
  lines.push(`- Total rows: ${rows.length}`);
  lines.push(`- Total decision workload: ${rows.length}`);
  lines.push('');
  lines.push('## Counts by source');
  lines.push('');
  lines.push(...mapToMarkdownTable(sourceCounts, 'source', ['BLUEPRINT', 'REPO_ONLY']));
  lines.push('');
  lines.push('## Counts by tab');
  lines.push('');
  lines.push(...mapToMarkdownTable(tabCounts, 'tab', [
    'HOME',
    'DEVELOPERS',
    'SOLUTIONS',
    'GATEWAYS',
    'GPU NODES',
    'LP TOKEN',
    'COMMUNITY',
    'ABOUT',
    'RESOURCE HUB',
    'INTERNAL',
    'UNASSIGNED'
  ]));
  lines.push('');
  lines.push('## Counts by status');
  lines.push('');
  lines.push(...mapToMarkdownTable(statusCounts, 'status', ['MISSING', 'STUB', 'PLACEHOLDER', 'EXISTS']));
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const blueprintPages = readJsonFile(args.blueprintPagesPath);
  const blueprintMapping = readJsonFile(args.blueprintMappingPath);

  if (!Array.isArray(blueprintPages)) {
    throw new Error('Invalid blueprint pages: expected top-level array.');
  }
  if (!blueprintMapping || typeof blueprintMapping !== 'object' || Array.isArray(blueprintMapping)) {
    throw new Error('Invalid blueprint mapping: expected top-level object.');
  }

  const mappedFileSet = buildMappedFileSet(blueprintMapping);
  const blueprintRows = buildBlueprintRows(blueprintPages, blueprintMapping);
  const repoOnlyRows = buildRepoOnlyRows(args.v2Root, mappedFileSet);
  const rows = [...blueprintRows, ...repoOnlyRows];

  const outDirAbs = path.resolve(REPO_ROOT, args.outDir);
  ensureDir(outDirAbs);

  const csvPathAbs = path.join(outDirAbs, 'reconciliation.csv');
  const summaryPathAbs = path.join(outDirAbs, 'reconciliation-summary.md');
  const csvRepoPath = toPosix(path.relative(REPO_ROOT, csvPathAbs));
  const summaryRepoPath = toPosix(path.relative(REPO_ROOT, summaryPathAbs));

  writeCsv(csvPathAbs, rows);
  fs.writeFileSync(summaryPathAbs, buildSummaryMarkdown(rows, csvRepoPath), 'utf8');

  console.log('✅ IA reconciliation artifacts generated:');
  console.log(`- ${csvRepoPath}`);
  console.log(`- ${summaryRepoPath}`);
  console.log(`- rows: ${rows.length} (BLUEPRINT ${blueprintRows.length}, REPO_ONLY ${repoOnlyRows.length})`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ generate-content-gap-reconciliation failed: ${error.message}`);
    process.exit(1);
  }
}
