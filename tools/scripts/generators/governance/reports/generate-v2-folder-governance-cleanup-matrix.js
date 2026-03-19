#!/usr/bin/env node
/**
 * @script            generate-v2-folder-governance-cleanup-matrix
 * @category          generator
 * @purpose           governance:repo-health
 * @scope             tools/scripts, tools/lib, tasks/reports/repo-ops, v2, docs.json, tests/unit/v2-folder-governance-cleanup-matrix.test.js
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement V2 folder governance cleanup matrix generator — inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.
 * @pipeline          manual
 * @usage             node tools/scripts/generate-v2-folder-governance-cleanup-matrix.js [--report-md <path>] [--report-json <path>] [--as-of <YYYY-MM-DD>]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { isExcludedV2ExperimentalPath } = require('../lib/docs-publishability');

const DEFAULT_REPORT_MD = 'tasks/reports/repo-ops/v2-folder-governance-cleanup-matrix.md';
const DEFAULT_REPORT_JSON = 'tasks/reports/repo-ops/v2-folder-governance-cleanup-matrix.json';
const LOCALE_CODES = new Set(['cn', 'es', 'fr']);
const LEGACY_BUCKET_SEGMENTS = new Set([
  '_contextdata',
  '_contextdata_',
  '_context_data_',
  '_plans-and-research',
  'x-resources',
  'to-add',
  '_archive',
  'x-deprecated',
  'x-archived'
]);
const SEARCH_ROOTS = ['README.md', 'docs.json', 'docs-guide', 'contribute', 'tests', 'tools/config', 'v2'];
const TEXT_EXTENSIONS = new Set(['.json', '.md', '.mdx', '.txt', '.yml', '.yaml', '.js', '.jsx', '.ts', '.tsx', '.sh']);
const MATRIX_SCHEMA_VERSION = 'v2-folder-governance-cleanup-matrix.v1';
const RECOMMENDATION_RULES = [
  'Section review notes move to `_workspace/reviews/`.',
  'Active restructuring and execution notes move to `_workspace/plans/`.',
  'Source bundles, evidence lists, and research notes move to `_workspace/research/` or `_workspace/research/sources/`.',
  'Product and stakeholder handoff notes move to `_workspace/handoff/`.',
  'Page-like prototypes that are not yet routable move to `_workspace/drafts/`.',
  'Previously publishable pages pending redirect or removal move to `x-deprecated/`.',
  'Frozen historical planning and research artifacts move to `v2/x-archived/<section>/`.',
  'Locale trees are inventoried now and tagged for later move-wave review unless a human explicitly promotes them.'
];
const FOLLOW_ON_WORKSTREAMS = [
  {
    name: 'Workstream A: enforcement and selection updates',
    tasks: [
      'Update `.mintignore` to exclude governed non-publishable lanes.',
      'Add transitional ignore coverage for current legacy names such as `_contextData`.',
      'Update shared file-selection helpers and generators that still treat workspace artifacts as normal `v2` docs content.',
      'Ensure docs navigation checks fail when a routed page resolves into an ignored or non-publishable lane.',
      'Ensure scoped Mint generation inherits the same ignore contract.'
    ]
  },
  {
    name: 'Workstream B: approved file moves',
    tasks: [
      'Execute only the file moves approved in this matrix.',
      'Normalize section trees to the `_workspace`, `x-deprecated`, and `v2/x-archived` contract.',
      'Retire legacy workspace folder names after their contents have been moved.',
      'Regenerate affected indexes or catalogs and rerun validators after each approved move wave.'
    ]
  }
];

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();
let referenceCorpus = null;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRel(relPath) {
  return toPosix(String(relPath || '').trim()).replace(/^\.?\//, '');
}

function normalizeCliPath(value, fallbackValue) {
  const raw = String(value || '').trim() || fallbackValue;
  if (path.isAbsolute(raw)) {
    return normalizeRel(path.relative(REPO_ROOT, raw));
  }
  return normalizeRel(raw);
}

function fileExists(repoPath) {
  return fs.existsSync(path.join(REPO_ROOT, repoPath));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(repoPath, fallbackValue) {
  try {
    return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
  } catch (_error) {
    return fallbackValue;
  }
}

function writeJson(repoPath, payload) {
  const absPath = path.join(REPO_ROOT, repoPath);
  ensureDir(path.dirname(absPath));
  fs.writeFileSync(absPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function writeText(repoPath, content) {
  const absPath = path.join(REPO_ROOT, repoPath);
  ensureDir(path.dirname(absPath));
  fs.writeFileSync(absPath, content, 'utf8');
}

function usage() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/generate-v2-folder-governance-cleanup-matrix.js [--report-md <path>] [--report-json <path>] [--as-of <YYYY-MM-DD>]'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    reportMd: DEFAULT_REPORT_MD,
    reportJson: DEFAULT_REPORT_JSON,
    asOf: ''
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--report-md') {
      args.reportMd = normalizeCliPath(argv[index + 1], DEFAULT_REPORT_MD);
      index += 1;
      continue;
    }

    if (token === '--report-json') {
      args.reportJson = normalizeCliPath(argv[index + 1], DEFAULT_REPORT_JSON);
      index += 1;
      continue;
    }

    if (token === '--as-of') {
      args.asOf = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.asOf && !/^\d{4}-\d{2}-\d{2}$/.test(args.asOf)) {
    throw new Error(`Invalid --as-of date: ${args.asOf}`);
  }

  return args;
}

function walkFiles(absDir, output = []) {
  if (!fs.existsSync(absDir)) return output;
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.DS_Store') {
      return;
    }
    const fullPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, output);
      return;
    }
    output.push(fullPath);
  });
  return output;
}

function getDocsJsonRouteKeys() {
  const docsJson = readJson('docs.json', {});
  const routes = new Set();

  function visit(node) {
    if (typeof node === 'string') {
      const normalized = normalizeRel(node).replace(/\.(md|mdx)$/i, '').replace(/\/index$/i, '').replace(/\/+$/, '');
      if (normalized.startsWith('v2/')) {
        routes.add(normalized);
      }
      return;
    }

    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }

    if (!node || typeof node !== 'object') {
      return;
    }

    Object.values(node).forEach(visit);
  }

  visit(docsJson);
  return routes;
}

function isCanonicalWorkspacePath(relPath) {
  return normalizeRel(relPath).split('/').some((segment) => segment.toLowerCase() === '_workspace');
}

function hasLegacyBucketSegment(relPath) {
  return normalizeRel(relPath)
    .split('/')
    .some((segment) => LEGACY_BUCKET_SEGMENTS.has(segment.toLowerCase()));
}

function isTargetInventoryPath(relPath) {
  const normalized = normalizeRel(relPath);
  if (!normalized.startsWith('v2/')) return false;
  if (isCanonicalWorkspacePath(normalized)) return false;
  if (hasLegacyBucketSegment(normalized)) return true;
  if (path.basename(normalized).toLowerCase() === 'review.md') return true;

  const ext = path.extname(normalized).toLowerCase();
  if (ext === '.md' && !normalized.includes('/contribute/CONTRIBUTING/')) {
    return true;
  }

  return false;
}

function classifyArtifactClass(relPath) {
  const normalized = normalizeRel(relPath).toLowerCase();
  const base = path.basename(normalized);
  const ext = path.extname(normalized);

  if (normalized.includes('/x-deprecated/')) return 'deprecated-page';
  if (normalized.startsWith('v2/x-archived/') || normalized.includes('/_archive/') || normalized.includes('/x-archived/')) {
    return 'archive';
  }
  if (base === 'review.md') return 'review';
  if (normalized.includes('handoff')) return 'handoff';
  if (ext === '.mdx' && (normalized.includes('draft') || normalized.includes('/drafts/'))) return 'draft-page';
  if (base === 'plan.md' || normalized.includes('execution-plan') || normalized.includes('restructure') || normalized.includes('/_plans-and-research/') || normalized.includes('/ia.') || normalized.includes('/ia/')) {
    return 'plan';
  }
  if (normalized.includes('sources') || normalized.includes('resource-list') || normalized.includes('research') || normalized.includes('faq-research-report')) {
    return 'research';
  }
  if (ext === '.mdx') return 'draft-page';
  return 'research';
}

function isSectionSegment(segment) {
  return Boolean(segment) && path.posix.extname(segment) === '';
}

function getScopeInfo(relPath) {
  const segments = normalizeRel(relPath).split('/').filter(Boolean);

  if (segments[1] === 'x-archived') {
    if (LOCALE_CODES.has(segments[2])) {
      const localeCode = segments[2];
      const sectionSegment = segments[3] || '';
      const hasSection = isSectionSegment(sectionSegment);
      return {
        localeScope: 'archive',
        localeCode,
        section: hasSection ? `${localeCode}/${sectionSegment}` : localeCode,
        sectionRoot: normalizeRel(path.posix.join('v2', 'x-archived', localeCode, ...(hasSection ? [sectionSegment] : []))),
        sectionIndex: hasSection ? 3 : 2
      };
    }

    const sectionSegment = segments[2] || '';
    const hasSection = isSectionSegment(sectionSegment);
    return {
      localeScope: 'archive',
      localeCode: '',
      section: hasSection ? sectionSegment : 'x-archived',
      sectionRoot: normalizeRel(path.posix.join('v2', 'x-archived', ...(hasSection ? [sectionSegment] : []))),
      sectionIndex: hasSection ? 2 : 1
    };
  }

  if (segments[1] === 'internal') {
    return {
      localeScope: 'internal',
      localeCode: '',
      section: 'internal',
      sectionRoot: 'v2/internal',
      sectionIndex: 1
    };
  }

  if (LOCALE_CODES.has(segments[1])) {
    const localeCode = segments[1];
    const sectionSegment = segments[2] || '';
    const hasSection = isSectionSegment(sectionSegment);
    return {
      localeScope: 'locale',
      localeCode,
      section: hasSection ? sectionSegment : localeCode,
      sectionRoot: normalizeRel(path.posix.join('v2', localeCode, ...(hasSection ? [sectionSegment] : []))),
      sectionIndex: hasSection ? 2 : 1
    };
  }

  const sectionSegment = segments[1] || '';
  const hasSection = isSectionSegment(sectionSegment);
  return {
    localeScope: 'core',
    localeCode: '',
    section: hasSection ? sectionSegment : 'v2',
    sectionRoot: normalizeRel(path.posix.join('v2', ...(hasSection ? [sectionSegment] : []))),
    sectionIndex: hasSection ? 1 : 0
  };
}

function determinePublishabilityRisk(relPath, docsRouteKeys) {
  const normalized = normalizeRel(relPath);
  const routeKey = normalized.replace(/\.(md|mdx)$/i, '').replace(/\/index$/i, '').replace(/\/+$/, '');
  if (docsRouteKeys.has(routeKey)) return 'routable';
  if (hasLegacyBucketSegment(normalized) || isCanonicalWorkspacePath(normalized) || path.basename(normalized).toLowerCase() === 'review.md' || isExcludedV2ExperimentalPath(normalized)) {
    return 'non-routable';
  }
  if (path.extname(normalized).toLowerCase() === '.md') return 'ambiguous';
  return 'ambiguous';
}

function computeRecommendedLane(artifactClass) {
  if (artifactClass === 'deprecated-page') return 'x-deprecated';
  if (artifactClass === 'archive') return 'v2/x-archived';
  return '_workspace';
}

function getWorkspaceBucket(artifactClass) {
  if (artifactClass === 'review') return 'reviews';
  if (artifactClass === 'handoff') return 'handoff';
  if (artifactClass === 'draft-page') return 'drafts';
  if (artifactClass === 'plan') return 'plans';
  return 'research';
}

function stripLegacyTail(relativeTail) {
  const parts = normalizeRel(relativeTail).split('/').filter(Boolean);
  while (parts.length > 0 && (LEGACY_BUCKET_SEGMENTS.has(parts[0].toLowerCase()) || parts[0].toLowerCase() === '_workspace')) {
    parts.shift();
  }
  return parts;
}

function getTailSegmentsForScope(relPath, scopeInfo) {
  const segments = normalizeRel(relPath).split('/').filter(Boolean);
  return segments.slice(scopeInfo.sectionIndex + 1);
}

function computeRecommendedTargetPath(relPath, scopeInfo, artifactClass, lane) {
  const normalized = normalizeRel(relPath);

  if (lane === 'v2/x-archived' && normalized.startsWith('v2/x-archived/')) {
    return normalized;
  }

  let tail = getTailSegmentsForScope(normalized, scopeInfo);
  if (tail.length === 0) {
    tail = [path.basename(normalized)];
  }

  if (lane === '_workspace') {
    const bucket = getWorkspaceBucket(artifactClass);
    const relativeTail = stripLegacyTail(tail.join('/'));
    return normalizeRel(path.posix.join(scopeInfo.sectionRoot, '_workspace', bucket, ...relativeTail));
  }

  if (lane === 'x-deprecated') {
    const relativeTail = tail.filter((segment) => segment.toLowerCase() !== 'x-deprecated');
    return normalizeRel(path.posix.join(scopeInfo.sectionRoot, 'x-deprecated', ...relativeTail));
  }

  const relativeTail = stripLegacyTail(tail.join('/')).filter((segment) => segment.toLowerCase() !== 'x-deprecated');
  const archiveSection = scopeInfo.localeScope === 'locale'
    ? normalizeRel(path.posix.join(scopeInfo.localeCode, scopeInfo.section))
    : scopeInfo.section;
  return normalizeRel(path.posix.join('v2', 'x-archived', archiveSection, ...relativeTail));
}

function buildRationale(artifactClass, lane, localeScope) {
  const localeNote = localeScope === 'locale' ? ' Locale trees stay review-first until a human approves a move wave.' : '';

  if (artifactClass === 'review') {
    return `Section review notes should not live beside publishable guide pages; move them into \`${lane === '_workspace' ? '_workspace/reviews/' : lane}\`.${localeNote}`;
  }
  if (artifactClass === 'handoff') {
    return `Handoff material is maintainer-only working context and belongs in \`_workspace/handoff/\`, not the publishable section tree.${localeNote}`;
  }
  if (artifactClass === 'draft-page') {
    return `Page-shaped prototypes that are not intentionally routed should live in \`_workspace/drafts/\` until they are promoted into the publishable tree.${localeNote}`;
  }
  if (artifactClass === 'deprecated-page') {
    return `Previously publishable material pending retirement should be normalized into the section-level \`x-deprecated/\` lane.${localeNote}`;
  }
  if (artifactClass === 'archive') {
    return `Frozen historical material belongs in \`v2/x-archived/<section>/\` rather than nested legacy archive buckets.${localeNote}`;
  }
  if (artifactClass === 'plan') {
    return `Planning and restructuring material belongs in the section workspace plan lane, not the publishable content tree.${localeNote}`;
  }
  return `Research notes, evidence bundles, and source snapshots should move into workspace research lanes so Mint and routine audits do not treat them as docs pages.${localeNote}`;
}

function getReferenceCorpus() {
  if (referenceCorpus) return referenceCorpus;
  referenceCorpus = [];

  SEARCH_ROOTS.forEach((repoPath) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) return;

    const stat = fs.statSync(absPath);
    const files = stat.isDirectory() ? walkFiles(absPath) : [absPath];
    files.forEach((absFile) => {
      const ext = path.extname(absFile).toLowerCase();
      if (!TEXT_EXTENSIONS.has(ext)) return;
      const rel = normalizeRel(path.relative(REPO_ROOT, absFile));
      const size = fs.statSync(absFile).size;
      if (size > 1024 * 1024) return;
      try {
        referenceCorpus.push({
          path: rel,
          content: fs.readFileSync(absFile, 'utf8')
        });
      } catch (_error) {
        // Ignore unreadable files.
      }
    });
  });

  return referenceCorpus;
}

function determineImportLinkDependencyRisk(relPath, artifactClass) {
  const normalized = normalizeRel(relPath);
  const needle = normalized.replace(/ /g, '%20');
  const refs = getReferenceCorpus().filter((entry) => entry.path !== normalized && (entry.content.includes(normalized) || entry.content.includes(needle)));
  if (refs.length > 0) return 'known';
  if (artifactClass === 'archive' || artifactClass === 'deprecated-page') return 'none';
  return 'possible';
}

function getLastTouchInfo(relPath, asOfDate) {
  const gitResult = spawnSync(
    'git',
    ['log', '-1', "--date=format:%Y-%m-%d %H:%M", '--format=%ad', '--', relPath],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );

  let stamp = String(gitResult.stdout || '').trim();
  let timestampSource = 'git';

  if (!stamp) {
    const stat = fs.statSync(path.join(REPO_ROOT, relPath));
    const year = stat.mtime.getFullYear();
    const month = `${stat.mtime.getMonth() + 1}`.padStart(2, '0');
    const day = `${stat.mtime.getDate()}`.padStart(2, '0');
    const hours = `${stat.mtime.getHours()}`.padStart(2, '0');
    const minutes = `${stat.mtime.getMinutes()}`.padStart(2, '0');
    stamp = `${year}-${month}-${day} ${hours}:${minutes}`;
    timestampSource = 'filesystem';
  }

  const asOf = asOfDate ? new Date(`${asOfDate}T23:59:59`) : new Date();
  const touched = new Date(stamp.replace(' ', 'T'));
  const ageDays = Math.max(0, Math.floor((asOf.getTime() - touched.getTime()) / (1000 * 60 * 60 * 24)));

  return {
    lastTouchedHuman: stamp,
    timestampSource,
    ageDays
  };
}

function classifyAgeBucket(ageDays) {
  if (ageDays <= 7) return '0-7d';
  if (ageDays <= 30) return '8-30d';
  if (ageDays <= 90) return '31-90d';
  return '90d+';
}

function buildRows(asOfDate) {
  const docsRouteKeys = getDocsJsonRouteKeys();
  const allFiles = walkFiles(path.join(REPO_ROOT, 'v2'))
    .map((absPath) => normalizeRel(path.relative(REPO_ROOT, absPath)))
    .filter(isTargetInventoryPath)
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  return allFiles.map((currentPath) => {
    const scopeInfo = getScopeInfo(currentPath);
    const artifactClass = classifyArtifactClass(currentPath);
    const recommendedLane = computeRecommendedLane(artifactClass);
    const recommendedTargetPath = computeRecommendedTargetPath(currentPath, scopeInfo, artifactClass, recommendedLane);
    const touch = getLastTouchInfo(currentPath, asOfDate);

    return {
      currentPath,
      section: scopeInfo.section,
      localeScope: scopeInfo.localeScope,
      artifactClass,
      currentPublishabilityRisk: determinePublishabilityRisk(currentPath, docsRouteKeys),
      recommendedTargetPath,
      recommendedLane,
      rationale: buildRationale(artifactClass, recommendedLane, scopeInfo.localeScope),
      importLinkDependencyRisk: determineImportLinkDependencyRisk(currentPath, artifactClass),
      lastTouchedHuman: touch.lastTouchedHuman,
      ageBucket: classifyAgeBucket(touch.ageDays),
      ageDays: touch.ageDays,
      timestampSource: touch.timestampSource,
      humanReviewStatus: ''
    };
  });
}

function summarizeRows(rows) {
  const byLane = {};
  const byScope = {};
  rows.forEach((row) => {
    byLane[row.recommendedLane] = (byLane[row.recommendedLane] || 0) + 1;
    byScope[row.localeScope] = (byScope[row.localeScope] || 0) + 1;
  });
  return {
    totalRows: rows.length,
    byLane,
    byScope
  };
}

function buildMarkdownReport(payload) {
  const lines = [
    '# V2 Folder Governance Cleanup Matrix',
    '',
    `Generated: ${payload.generatedAt}`,
    `As of: ${payload.asOf}`,
    '',
    '## Summary',
    '',
    `- Total rows: ${payload.summary.totalRows}`,
    `- \`_workspace\`: ${payload.summary.byLane._workspace || 0}`,
    `- \`x-deprecated\`: ${payload.summary.byLane['x-deprecated'] || 0}`,
    `- \`v2/x-archived\`: ${payload.summary.byLane['v2/x-archived'] || 0}`,
    '',
    '## Recommendation Rules',
    ''
  ];

  payload.recommendationRules.forEach((rule) => lines.push(`- ${rule}`));

  lines.push('', '## Follow-on Workstreams', '');
  payload.followOnWorkstreams.forEach((workstream) => {
    lines.push(`### ${workstream.name}`, '');
    workstream.tasks.forEach((task) => lines.push(`- ${task}`));
    lines.push('');
  });

  lines.push(
    '## Matrix',
    '',
    '| Current path | Section | Scope | Class | Risk | Recommended target | Lane | Dependency risk | Last touch | Age | Human review status |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |'
  );

  payload.rows.forEach((row) => {
    lines.push(
      `| \`${row.currentPath}\` | \`${row.section}\` | \`${row.localeScope}\` | \`${row.artifactClass}\` | \`${row.currentPublishabilityRisk}\` | \`${row.recommendedTargetPath}\` | \`${row.recommendedLane}\` | \`${row.importLinkDependencyRisk}\` | \`${row.lastTouchedHuman}\` | \`${row.ageBucket}\` |  |`
    );
  });

  lines.push('');
  return lines.join('\n');
}

function run(options = {}) {
  const rows = buildRows(options.asOf || '');
  const payload = {
    schemaVersion: MATRIX_SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    asOf: options.asOf || new Date().toISOString().slice(0, 10),
    summary: summarizeRows(rows),
    recommendationRules: RECOMMENDATION_RULES,
    followOnWorkstreams: FOLLOW_ON_WORKSTREAMS,
    rows
  };

  writeJson(options.reportJson || DEFAULT_REPORT_JSON, payload);
  writeText(options.reportMd || DEFAULT_REPORT_MD, buildMarkdownReport(payload));
  return payload;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }
    const payload = run(args);
    console.log(`Wrote ${args.reportMd}`);
    console.log(`Wrote ${args.reportJson}`);
    console.log(`Rows: ${payload.summary.totalRows}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  buildRows,
  classifyAgeBucket,
  classifyArtifactClass,
  computeRecommendedLane,
  computeRecommendedTargetPath,
  determinePublishabilityRisk,
  getScopeInfo,
  isTargetInventoryPath,
  run
};
