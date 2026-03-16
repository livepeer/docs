#!/usr/bin/env node
/**
 * @script            docs-research-packet
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts, tasks/reports, tools/config/scoped-navigation, tasks/research, tests/unit/docs-research-packet.test.js, tests/unit/orchestrator-guides-research-review.test.js
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs research packet generator — derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.
 * @pipeline          manual — packet generator for research review tranches
 * @usage             node tools/scripts/docs-research-packet.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_NAV = 'tools/config/scoped-navigation/docs-gate-work.json';
const DEFAULT_VERSION = 'v2';
const DEFAULT_LANGUAGE = 'en';
const DEFAULT_REGISTRY = 'tasks/research/claims';
const DEFAULT_LEDGER = 'tasks/research/adjudication/page-content-research-outcomes.json';
const DEFAULT_EXCLUDE_PATTERNS = ['dep-*.mdx', '**/x-deprecated/**', '**/.DS_Store'];
const DEFAULT_EXCLUDED_BASENAMES = new Set([
  'review.md',
  'verify-notes.md',
  'to-include.md',
  'tutorial-sources.md',
  'tutorials-resources.mdx',
  '.ds_store'
]);
const REPO_ROOT = repoRoot();

function repoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function resolveRepoPath(repoOrAbsPath) {
  const raw = String(repoOrAbsPath || '').trim();
  if (!raw) return path.resolve(REPO_ROOT);
  if (path.isAbsolute(raw)) return path.resolve(raw);
  return path.resolve(REPO_ROOT, raw);
}

function toRepoDisplayPath(repoOrAbsPath) {
  const absPath = resolveRepoPath(repoOrAbsPath);
  const relative = toPosix(path.relative(REPO_ROOT, absPath));
  if (!relative || relative.startsWith('..')) return toPosix(absPath);
  return relative;
}

function repoScopedPath(repoOrAbsPath) {
  const absPath = resolveRepoPath(repoOrAbsPath);
  const relative = toPosix(path.relative(REPO_ROOT, absPath));
  if (!relative || relative.startsWith('..')) {
    throw new Error(`Path must resolve inside the repo root: ${toPosix(repoOrAbsPath)}`);
  }
  return relative;
}

function fileExists(repoOrAbsPath) {
  return fs.existsSync(resolveRepoPath(repoOrAbsPath));
}

function ensureDir(repoOrAbsPath) {
  fs.mkdirSync(resolveRepoPath(repoOrAbsPath), { recursive: true });
}

function readJsonFile(repoOrAbsPath) {
  return JSON.parse(fs.readFileSync(resolveRepoPath(repoOrAbsPath), 'utf8'));
}

function writeJsonFile(repoOrAbsPath, value) {
  ensureDir(path.dirname(resolveRepoPath(repoOrAbsPath)));
  fs.writeFileSync(resolveRepoPath(repoOrAbsPath), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeTextFile(repoOrAbsPath, value) {
  ensureDir(path.dirname(resolveRepoPath(repoOrAbsPath)));
  fs.writeFileSync(resolveRepoPath(repoOrAbsPath), value, 'utf8');
}

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeRoute(route) {
  const normalized = toPosix(String(route || '').trim()).replace(/^\.\//, '');
  if (!normalized) return '';
  if (normalized.endsWith('.md') || normalized.endsWith('.mdx')) return normalized;
  return `${normalized}.mdx`;
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/docs-research-packet.js [options]',
      '',
      'Scope modes:',
      '  nav mode:      --tab <name> --group <name> [--nav <path>] [--version <v>] [--language <lang>] [--section <a,b>]',
      '  manifest mode: --manifest <path>',
      '  paths mode:    --files <a,b> [--folders <a,b>] [--split-by dir]',
      '',
      'Options:',
      `  --nav <path>            Navigation JSON path (default: ${DEFAULT_NAV})`,
      `  --version <id>          Nav version selector (default: ${DEFAULT_VERSION})`,
      `  --language <id>         Nav language selector (default: ${DEFAULT_LANGUAGE})`,
      '  --tab <name>            Nav tab title for nav mode',
      '  --group <name>          Nav group title for nav mode',
      '  --section <a,b>         Optional nav subsection filter by title or slug',
      '  --manifest <path>       Manifest JSON path for repeatable arbitrary route groups',
      '  --files <a,b>           Explicit repo file list for ad hoc packet runs',
      '  --folders <a,b>         Folder list for ad hoc packet runs',
      '  --split-by <mode>       Optional path-mode tranche rule: dir',
      '  --out <path>            Output packet root (required unless manifest supplies outputRoot)',
      `  --registry <path>       Fact registry path (default: ${DEFAULT_REGISTRY})`,
      `  --ledger <path>         Adjudication ledger path (default: ${DEFAULT_LEDGER})`,
      '  --tranche <a,b>         Optional tranche filter by title or slug',
      '  --quiet                 Suppress success logs',
      '  --help                  Show help'
    ].join('\n')
  );
}

function parseCsv(raw) {
  if (!raw) return [];
  const values = [];
  String(raw)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .forEach((entry) => {
      if (!values.includes(entry)) values.push(entry);
    });
  return values;
}

function parseArgs(argv) {
  const args = {
    nav: DEFAULT_NAV,
    version: DEFAULT_VERSION,
    language: DEFAULT_LANGUAGE,
    tab: '',
    group: '',
    section: [],
    manifest: '',
    files: [],
    folders: [],
    splitBy: '',
    out: '',
    registry: DEFAULT_REGISTRY,
    ledger: DEFAULT_LEDGER,
    tranche: [],
    quiet: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--nav') {
      args.nav = String(argv[index + 1] || '').trim() || args.nav;
      index += 1;
      continue;
    }
    if (token.startsWith('--nav=')) {
      args.nav = token.slice('--nav='.length).trim() || args.nav;
      continue;
    }
    if (token === '--version') {
      args.version = String(argv[index + 1] || '').trim() || args.version;
      index += 1;
      continue;
    }
    if (token.startsWith('--version=')) {
      args.version = token.slice('--version='.length).trim() || args.version;
      continue;
    }
    if (token === '--language') {
      args.language = String(argv[index + 1] || '').trim() || args.language;
      index += 1;
      continue;
    }
    if (token.startsWith('--language=')) {
      args.language = token.slice('--language='.length).trim() || args.language;
      continue;
    }
    if (token === '--tab') {
      args.tab = String(argv[index + 1] || '').trim() || args.tab;
      index += 1;
      continue;
    }
    if (token.startsWith('--tab=')) {
      args.tab = token.slice('--tab='.length).trim() || args.tab;
      continue;
    }
    if (token === '--group') {
      args.group = String(argv[index + 1] || '').trim() || args.group;
      index += 1;
      continue;
    }
    if (token.startsWith('--group=')) {
      args.group = token.slice('--group='.length).trim() || args.group;
      continue;
    }
    if (token === '--section') {
      args.section = parseCsv(argv[index + 1] || '');
      index += 1;
      continue;
    }
    if (token.startsWith('--section=')) {
      args.section = parseCsv(token.slice('--section='.length));
      continue;
    }
    if (token === '--manifest') {
      args.manifest = String(argv[index + 1] || '').trim() || args.manifest;
      index += 1;
      continue;
    }
    if (token.startsWith('--manifest=')) {
      args.manifest = token.slice('--manifest='.length).trim() || args.manifest;
      continue;
    }
    if (token === '--files') {
      args.files = parseCsv(argv[index + 1] || '');
      index += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      args.files = parseCsv(token.slice('--files='.length));
      continue;
    }
    if (token === '--folders') {
      args.folders = parseCsv(argv[index + 1] || '');
      index += 1;
      continue;
    }
    if (token.startsWith('--folders=')) {
      args.folders = parseCsv(token.slice('--folders='.length));
      continue;
    }
    if (token === '--split-by') {
      args.splitBy = String(argv[index + 1] || '').trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token.startsWith('--split-by=')) {
      args.splitBy = token.slice('--split-by='.length).trim().toLowerCase();
      continue;
    }
    if (token === '--out') {
      args.out = String(argv[index + 1] || '').trim() || args.out;
      index += 1;
      continue;
    }
    if (token.startsWith('--out=')) {
      args.out = token.slice('--out='.length).trim() || args.out;
      continue;
    }
    if (token === '--registry') {
      args.registry = String(argv[index + 1] || '').trim() || args.registry;
      index += 1;
      continue;
    }
    if (token.startsWith('--registry=')) {
      args.registry = token.slice('--registry='.length).trim() || args.registry;
      continue;
    }
    if (token === '--ledger') {
      args.ledger = String(argv[index + 1] || '').trim() || args.ledger;
      index += 1;
      continue;
    }
    if (token.startsWith('--ledger=')) {
      args.ledger = token.slice('--ledger='.length).trim() || args.ledger;
      continue;
    }
    if (token === '--tranche') {
      args.tranche = parseCsv(argv[index + 1] || '');
      index += 1;
      continue;
    }
    if (token.startsWith('--tranche=')) {
      args.tranche = parseCsv(token.slice('--tranche='.length));
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.splitBy && args.splitBy !== 'dir') {
    throw new Error(`Unsupported --split-by value "${args.splitBy}". Supported values: dir`);
  }

  return args;
}

function normalizeSelector(value) {
  return slugify(value);
}

function resolveNamedEntry(entries, value, label) {
  const normalized = normalizeSelector(value);
  const match = entries.find(
    (entry) => normalizeSelector(entry?.title || entry?.name || entry?.group || entry?.tab || entry?.version || entry?.language) === normalized
  );
  if (match) return match;

  const options = entries
    .map((entry) => String(entry?.title || entry?.name || entry?.group || entry?.tab || entry?.version || entry?.language || '').trim())
    .filter(Boolean)
    .sort();
  throw new Error(`Unable to resolve ${label} "${value}". Available ${label}s: ${options.join(', ')}`);
}

function topGroupsForTab(tab) {
  if (Array.isArray(tab?.groups)) return tab.groups;
  if (Array.isArray(tab?.anchors)) {
    return tab.anchors.flatMap((anchor) => (Array.isArray(anchor?.groups) ? anchor.groups : []));
  }
  return [];
}

function navTitleForSection(entry, fallback) {
  const title = String(entry?.group || entry?.title || entry?.name || '').trim();
  return title || fallback;
}

function uniqueOrdered(values) {
  const out = [];
  values.forEach((value) => {
    if (!out.includes(value)) out.push(value);
  });
  return out;
}

function normalizeTranchePages(rawPages, title) {
  const pages = rawPages.flatMap((page, pageIndex) => {
    if (typeof page !== 'string' || !page.trim()) {
      throw new Error(`${title} page entry at index ${pageIndex} must be a non-empty string route.`);
    }
    const normalized = normalizeRoute(page);
    return isExcludedRepoPath(normalized) ? [] : [normalized];
  });
  return uniqueOrdered(pages);
}

function buildNavTranches(nav, options) {
  const versions = Array.isArray(nav?.navigation?.versions) ? nav.navigation.versions : [];
  const version = resolveNamedEntry(versions, options.version || DEFAULT_VERSION, 'version');
  const languages = Array.isArray(version?.languages) ? version.languages : [];
  const language = resolveNamedEntry(languages, options.language || DEFAULT_LANGUAGE, 'language');
  const tabs = Array.isArray(language?.tabs) ? language.tabs : [];
  const tab = resolveNamedEntry(tabs, options.tab, 'tab');
  const groups = topGroupsForTab(tab);
  const group = resolveNamedEntry(groups, options.group, 'group');

  if (!Array.isArray(group?.pages) || group.pages.length === 0) {
    throw new Error(`Selected group "${options.group}" does not expose any pages.`);
  }

  const directPages = group.pages.filter((entry) => typeof entry === 'string');
  const subgroupEntries = group.pages.filter((entry) => entry && typeof entry === 'object' && Array.isArray(entry.pages));
  if (directPages.length > 0 && subgroupEntries.length > 0) {
    throw new Error(`Selected group "${options.group}" mixes direct pages and subgroup pages; packet trancheing would be ambiguous.`);
  }

  const rawTranches =
    subgroupEntries.length > 0
      ? subgroupEntries.map((entry, index) => ({
          index: index + 1,
          title: navTitleForSection(entry, `${options.group} ${index + 1}`),
          slug: `${String(index + 1).padStart(2, '0')}-${slugify(navTitleForSection(entry, `${options.group} ${index + 1}`))}`,
          pages: normalizeTranchePages(entry.pages, navTitleForSection(entry, `${options.group} ${index + 1}`))
        })).filter((tranche) => tranche.pages.length > 0)
      : [
          {
            index: 1,
            title: String(options.group || 'Research Scope').trim(),
            slug: `01-${slugify(options.group || 'research-scope')}`,
            pages: normalizeTranchePages(group.pages, String(options.group || 'Research Scope').trim())
          }
        ];

  const sectionFilters = uniqueOrdered([...(options.section || []), ...(options.tranche || [])]).map(normalizeSelector);
  const tranches =
    sectionFilters.length === 0
      ? rawTranches
      : rawTranches.filter((tranche) => sectionFilters.includes(normalizeSelector(tranche.slug)) || sectionFilters.includes(normalizeSelector(tranche.title)));

  if (tranches.length === 0) {
    throw new Error(`No nav tranches matched the requested filter for ${options.tab} -> ${options.group}.`);
  }

  return tranches.map((tranche, index) => ({
    ...tranche,
    index: index + 1,
    slug: `${String(index + 1).padStart(2, '0')}-${slugify(tranche.title)}`
  }));
}

function globToRegExp(pattern) {
  const normalized = toPosix(String(pattern || '').trim()).replace(/^\.\//, '');
  const withMarkers = normalized.replace(/\*\*/g, '::DOUBLE_STAR::').replace(/\*/g, '::SINGLE_STAR::');
  const escaped = withMarkers.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const withGlobStars = escaped.replace(/::DOUBLE_STAR::/g, '.*').replace(/::SINGLE_STAR::/g, '[^/]*');
  return new RegExp(`^${withGlobStars}$`, 'i');
}

function compileExcludeMatchers(patterns) {
  return uniqueOrdered([...(patterns || []), ...DEFAULT_EXCLUDE_PATTERNS])
    .map((pattern) => String(pattern || '').trim())
    .filter(Boolean)
    .map((pattern) => ({ pattern, re: globToRegExp(pattern) }));
}

function isDefaultExcludedRepoPath(repoPath) {
  const normalized = toPosix(repoPath).replace(/^\.\//, '');
  const base = path.posix.basename(normalized).toLowerCase();
  if (!(base.endsWith('.md') || base.endsWith('.mdx'))) return true;
  if (normalized.includes('/x-deprecated/')) return true;
  if (base.startsWith('dep-')) return true;
  if (/^draft\d*-/.test(base)) return true;
  return DEFAULT_EXCLUDED_BASENAMES.has(base);
}

function isExcludedRepoPath(repoPath, extraMatchers = []) {
  if (isDefaultExcludedRepoPath(repoPath)) return true;
  return extraMatchers.some((matcher) => matcher.re.test(toPosix(repoPath)));
}

function filterScopeFiles(files, extraMatchers = []) {
  return uniqueOrdered(files.map((entry) => repoScopedPath(entry)).filter((entry) => !isExcludedRepoPath(entry, extraMatchers)));
}

function buildManifestTranches(manifest, options = {}) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new Error('Manifest must be a JSON object.');
  }
  if (!Array.isArray(manifest.tranches) || manifest.tranches.length === 0) {
    throw new Error('Manifest must include a non-empty "tranches" array.');
  }

  const extraMatchers = compileExcludeMatchers(manifest.excludePatterns || []);
  const rawTranches = manifest.tranches.map((entry, index) => {
    const title = String(entry?.title || '').trim();
    if (!title) {
      throw new Error(`Manifest tranche at index ${index} is missing a non-empty title.`);
    }
    if (!Array.isArray(entry?.files) || entry.files.length === 0) {
      throw new Error(`Manifest tranche "${title}" must include a non-empty files array.`);
    }
    const pages = filterScopeFiles(entry.files, extraMatchers);
    if (pages.length === 0) {
      throw new Error(`Manifest tranche "${title}" has no in-scope files after exclusions.`);
    }
    const explicitSlug = String(entry?.slug || '').trim();
    const slugSeed = explicitSlug ? slugify(explicitSlug).replace(/^\d{2}-/, '') : slugify(title);
    return {
      index: index + 1,
      title,
      slug: slugSeed,
      pages
    };
  });

  const filtered = filterTranches(rawTranches, options.tranche || []);
  if (filtered.length === 0) {
    throw new Error('No manifest tranches matched the requested filter.');
  }

  return filtered.map((tranche, index) => ({
    ...tranche,
    index: index + 1,
    slug: `${String(index + 1).padStart(2, '0')}-${slugify(tranche.slug || tranche.title).replace(/^\d{2}-/, '')}`
  }));
}

function walkFilesRecursive(absDir) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  const files = [];
  entries.forEach((entry) => {
    const entryAbs = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFilesRecursive(entryAbs));
      return;
    }
    if (entry.isFile()) {
      files.push(entryAbs);
    }
  });
  return files;
}

function collectResearchFilesFromFolders(folders, extraMatchers = []) {
  const files = [];
  folders.forEach((folder) => {
    const scopedFolder = repoScopedPath(folder);
    const absFolder = resolveRepoPath(scopedFolder);
    if (!fs.existsSync(absFolder) || !fs.statSync(absFolder).isDirectory()) {
      throw new Error(`Folder does not exist or is not a directory: ${scopedFolder}`);
    }
    walkFilesRecursive(absFolder)
      .map((entry) => repoScopedPath(entry))
      .filter((entry) => !isExcludedRepoPath(entry, extraMatchers))
      .forEach((entry) => files.push(entry));
  });
  return uniqueOrdered(files);
}

function buildPathTranches(options) {
  const extraMatchers = compileExcludeMatchers([]);
  const explicitFiles = filterScopeFiles(options.files || [], extraMatchers);
  const folderFiles = collectResearchFilesFromFolders(options.folders || [], extraMatchers);
  const allFiles = uniqueOrdered([...explicitFiles, ...folderFiles]);

  if (allFiles.length === 0) {
    throw new Error('Path mode did not resolve any in-scope research files.');
  }

  if (options.splitBy === 'dir') {
    const grouped = new Map();
    allFiles.forEach((file) => {
      const dir = toPosix(path.posix.dirname(file));
      if (!grouped.has(dir)) grouped.set(dir, []);
      grouped.get(dir).push(file);
    });
    return [...grouped.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([dir, pages], index) => ({
        index: index + 1,
        title: dir,
        slug: `${String(index + 1).padStart(2, '0')}-${slugify(dir)}`,
        pages
      }));
  }

  return [
    {
      index: 1,
      title: options.folders?.length && !options.files?.length ? 'Folder Scope' : 'Explicit Scope',
      slug: '01-explicit-scope',
      pages: allFiles
    }
  ];
}

function filterTranches(tranches, filters) {
  if (!Array.isArray(filters) || filters.length === 0) return tranches;
  const normalized = filters.map(normalizeSelector);
  return tranches.filter((tranche) => normalized.includes(normalizeSelector(tranche.slug)) || normalized.includes(normalizeSelector(tranche.title)));
}

function validateTrancheFiles(tranches, strictMode) {
  const missing = [];
  tranches.forEach((tranche) => {
    tranche.pages.forEach((page) => {
      if (!fileExists(page)) {
        missing.push({ tranche: tranche.title, file: page });
      }
    });
  });
  if (missing.length > 0 && strictMode) {
    throw new Error(`Missing in-scope file(s): ${missing.map((entry) => `${entry.file} [${entry.tranche}]`).join(', ')}`);
  }
  return missing;
}

function validateDuplicateCoverage(tranches) {
  const seen = new Map();
  const duplicates = [];
  tranches.forEach((tranche) => {
    tranche.pages.forEach((page) => {
      if (!seen.has(page)) {
        seen.set(page, tranche.title);
        return;
      }
      duplicates.push({ file: page, first: seen.get(page), second: tranche.title });
    });
  });

  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate file coverage across tranches: ${duplicates
        .map((entry) => `${entry.file} [${entry.first} vs ${entry.second}]`)
        .join(', ')}`
    );
  }
}

function runNodeScript(scriptPath, scriptArgs) {
  const result = spawnSync(process.execPath, [path.resolve(REPO_ROOT, scriptPath), ...scriptArgs], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  return {
    status: typeof result.status === 'number' ? result.status : 1,
    stdout: String(result.stdout || ''),
    stderr: String(result.stderr || '')
  };
}

function collectAllClaims(pageReport) {
  return [
    ...(Array.isArray(pageReport?.verified_claims) ? pageReport.verified_claims : []),
    ...(Array.isArray(pageReport?.conflicted_claims) ? pageReport.conflicted_claims : []),
    ...(Array.isArray(pageReport?.time_sensitive_claims) ? pageReport.time_sensitive_claims : []),
    ...(Array.isArray(pageReport?.unverified_or_historical_claims) ? pageReport.unverified_or_historical_claims : [])
  ];
}

function isRepoPath(ref) {
  return /^(?:v2|docs-guide|tasks|tools|tests|snippets|contribute|ai-tools)\//.test(String(ref || ''));
}

function collectRegistryDrift(pageReport) {
  const drift = [];
  const seen = new Set();
  const claims = collectAllClaims(pageReport);
  const claimById = new Map(claims.map((claim) => [claim.claim_id, claim]));

  function addEntry(entry) {
    const key = `${entry.kind}|${entry.ref}|${entry.claim_id}|${entry.reason}`;
    if (seen.has(key)) return;
    seen.add(key);
    drift.push(entry);
  }

  claims.forEach((claim) => {
    if (isRepoPath(claim.canonical_owner) && !fileExists(claim.canonical_owner)) {
      addEntry({
        kind: 'canonical-owner',
        ref: claim.canonical_owner,
        claim_id: claim.claim_id,
        claim_family: claim.claim_family,
        reason: 'canonical owner path does not resolve'
      });
    }

    (Array.isArray(claim.evidence) ? claim.evidence : []).forEach((evidence) => {
      if (evidence?.type === 'repo-file' && isRepoPath(evidence.ref) && !fileExists(evidence.ref)) {
        addEntry({
          kind: 'evidence-ref',
          ref: evidence.ref,
          claim_id: claim.claim_id,
          claim_family: claim.claim_family,
          reason: 'repo evidence path does not resolve'
        });
      }
    });
  });

  (Array.isArray(pageReport?.propagation_queue) ? pageReport.propagation_queue : []).forEach((entry) => {
    if (!isRepoPath(entry.file) || fileExists(entry.file)) return;
    const claim = claimById.get(entry.claim_id);
    addEntry({
      kind: 'dependent-page',
      ref: entry.file,
      claim_id: entry.claim_id,
      claim_family: claim?.claim_family || '',
      reason: 'propagation target path does not resolve'
    });
  });

  return drift.sort((a, b) => `${a.ref}|${a.claim_id}`.localeCompare(`${b.ref}|${b.claim_id}`));
}

function collectCoverageGaps(pageReport) {
  return (Array.isArray(pageReport?.claims_reviewed) ? pageReport.claims_reviewed : [])
    .filter((entry) => Array.isArray(entry?.matched_claim_families) && entry.matched_claim_families.length === 0)
    .map((entry) => String(entry.file || '').trim())
    .filter(Boolean)
    .sort();
}

function summarizeCounts(pageReport) {
  const trust = pageReport?.trust_summary || {};
  return {
    verified: Array.isArray(pageReport?.verified_claims) ? pageReport.verified_claims.length : 0,
    conflicted: Array.isArray(pageReport?.conflicted_claims) ? pageReport.conflicted_claims.length : 0,
    timeSensitive: Array.isArray(pageReport?.time_sensitive_claims) ? pageReport.time_sensitive_claims.length : 0,
    unverifiedHistorical: Array.isArray(pageReport?.unverified_or_historical_claims)
      ? pageReport.unverified_or_historical_claims.length
      : 0,
    contradictionGroups: Array.isArray(pageReport?.cross_page_contradictions) ? pageReport.cross_page_contradictions.length : 0,
    propagationQueue: Array.isArray(pageReport?.propagation_queue) ? pageReport.propagation_queue.length : 0,
    evidenceSources: Array.isArray(pageReport?.evidence_sources) ? pageReport.evidence_sources.length : 0,
    explicitTargets: Number.isFinite(trust.explicit_page_targets) ? trust.explicit_page_targets : 0,
    inferredTargets: Number.isFinite(trust.inferred_page_targets) ? trust.inferred_page_targets : 0
  };
}

function comparePageAndPr(pageReport, prReport) {
  const page = summarizeCounts(pageReport);
  const prSummary = prReport?.summary || {};
  const deltas = [];
  const comparisons = [
    ['conflicted claims', page.conflicted, Number(prSummary.conflicted_claims || 0)],
    ['time-sensitive claims', page.timeSensitive, Number(prSummary.time_sensitive_claims || 0)],
    ['contradiction groups', page.contradictionGroups, Number(prSummary.contradiction_groups || 0)],
    ['propagation queue items', page.propagationQueue, Number(prSummary.propagation_queue_items || 0)],
    ['evidence sources', page.evidenceSources, Number(prSummary.evidence_sources || 0)]
  ];

  comparisons.forEach(([label, pageValue, prValue]) => {
    if (pageValue !== prValue) {
      deltas.push(`${label}: page run ${pageValue}, PR run ${prValue}`);
    }
  });

  return deltas;
}

function formatClaimEntries(entries) {
  if (!Array.isArray(entries) || entries.length === 0) {
    return ['- none'];
  }
  return entries.map((entry) => `- \`${entry.claim_id}\` (${entry.claim_family}) — ${entry.summary}`);
}

function groupPropagationEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    const key = `${entry.file}|${entry.action}`;
    if (!groups.has(key)) {
      groups.set(key, { file: entry.file, action: entry.action, claimIds: [] });
    }
    groups.get(key).claimIds.push(entry.claim_id);
  });
  return [...groups.values()].sort((a, b) => `${a.file}|${a.action}`.localeCompare(`${b.file}|${b.action}`));
}

function buildRecommendedChanges(pageReport, driftEntries, gapPages) {
  const lines = [];
  const updateNow = groupPropagationEntries(
    (Array.isArray(pageReport?.propagation_queue) ? pageReport.propagation_queue : []).filter((entry) => entry.action === 'update-now')
  );

  if ((pageReport?.conflicted_claims || []).length > 0) {
    lines.push('- Downgrade or rewrite conflicted claims before this tranche is treated as copy-stable.');
  }
  if ((pageReport?.time_sensitive_claims || []).length > 0) {
    lines.push('- Rewrite current-truth language conservatively and attach explicit review cadence or source boundaries to volatile claims.');
  }
  if ((pageReport?.unverified_or_historical_claims || []).length > 0) {
    lines.push('- Verify unresolved or historical-only claims against stronger primary sources before they are repeated across dependent pages.');
  }
  if (updateNow.length > 0) {
    lines.push(
      `- Prioritise update-now propagation targets on ${updateNow
        .slice(0, 3)
        .map((entry) => `\`${entry.file}\``)
        .join(', ')} before tranche-wide wording cleanup.`
    );
  }
  if (driftEntries.length > 0) {
    lines.push('- Fix registry/path drift before the next research rerun so missing canonical or dependent references stop obscuring the findings.');
  }
  if (gapPages.length > 0) {
    lines.push(
      `- Expand claim-family coverage only where pages still fall through without matched families: ${gapPages
        .slice(0, 4)
        .map((file) => `\`${file}\``)
        .join(', ')}.`
    );
  }

  return lines.length > 0 ? lines : ['- none'];
}

function buildPropagationLines(pageReport) {
  const entries = Array.isArray(pageReport?.propagation_queue) ? pageReport.propagation_queue : [];
  if (entries.length === 0) return ['- none'];
  return entries.map((entry) => `- \`${entry.claim_id}\` -> \`${entry.file}\` [${entry.action}]`);
}

function buildDriftLines(driftEntries) {
  if (driftEntries.length === 0) return ['- none'];
  return driftEntries.map(
    (entry) => `- \`${entry.claim_id}\` (${entry.claim_family || 'unknown-family'}) -> \`${entry.ref}\` [${entry.kind}] — ${entry.reason}`
  );
}

function buildGapLines(gapPages) {
  if (gapPages.length === 0) return ['- none'];
  return gapPages.map((file) => `- \`${file}\``);
}

function buildTrancheResearchMarkdown(summary, tranche) {
  const counts = summarizeCounts(summary.pageReport);
  const driftEntries = collectRegistryDrift(summary.pageReport);
  const gapPages = collectCoverageGaps(summary.pageReport);
  const deltas = comparePageAndPr(summary.pageReport, summary.prReport);
  const lines = [];

  lines.push(`# ${tranche.title} — Research Report`);
  lines.push('');
  lines.push(`- Registry validate: ${summary.registryValidate.status === 0 ? 'pass' : 'fail'}`);
  lines.push(`- Adjudication ledger validate: ${summary.adjudicationValidate.status === 0 ? 'pass' : 'fail'}`);
  lines.push(`- docs-page-research run: ${summary.pageRun.status === 0 ? 'pass' : 'fail'}`);
  lines.push(`- docs-page-research-pr-report run: ${summary.prRun.status === 0 ? 'pass' : 'fail'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Verified claims: ${counts.verified}`);
  lines.push(`- Conflicted claims: ${counts.conflicted}`);
  lines.push(`- Time-sensitive claims: ${counts.timeSensitive}`);
  lines.push(`- Unverified / historical claims: ${counts.unverifiedHistorical}`);
  lines.push(`- Contradiction groups: ${counts.contradictionGroups}`);
  lines.push(`- Propagation queue items: ${counts.propagationQueue}`);
  lines.push(`- Evidence sources checked: ${counts.evidenceSources}`);
  lines.push(`- Explicit page targets: ${counts.explicitTargets}`);
  lines.push(`- Inferred page targets: ${counts.inferredTargets}`);
  lines.push('');
  lines.push('## Conflicted Claims');
  lines.push('');
  lines.push(...formatClaimEntries(summary.pageReport.conflicted_claims));
  lines.push('');
  lines.push('## Time-Sensitive Claims');
  lines.push('');
  lines.push(...formatClaimEntries(summary.pageReport.time_sensitive_claims));
  lines.push('');
  lines.push('## Unverified / Historical Claims');
  lines.push('');
  lines.push(...formatClaimEntries(summary.pageReport.unverified_or_historical_claims));
  lines.push('');
  lines.push('## Recommended Research-Driven Changes');
  lines.push('');
  lines.push(...buildRecommendedChanges(summary.pageReport, driftEntries, gapPages));
  lines.push('');
  lines.push('## Propagation / Adjudication Follow-up');
  lines.push('');
  lines.push(...buildPropagationLines(summary.pageReport));
  lines.push('');
  lines.push('## Registry/path Drift');
  lines.push('');
  lines.push(...buildDriftLines(driftEntries));
  lines.push('');
  lines.push('## Registry Coverage Gaps');
  lines.push('');
  lines.push(...buildGapLines(gapPages));

  if (deltas.length > 0) {
    lines.push('');
    lines.push('## Page vs PR Delta');
    lines.push('');
    deltas.forEach((entry) => lines.push(`- ${entry}`));
    lines.push('');
    lines.push('## Future Split Recommendation');
    lines.push('');
    lines.push('- Keep the current tranche intact for this pass, but review whether this scope should be split in a future packet because the page-run and PR-run signals are diverging.');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function aggregateCounts(trancheResults) {
  return trancheResults.reduce(
    (acc, result) => {
      const counts = summarizeCounts(result.pageReport);
      acc.verified += counts.verified;
      acc.conflicted += counts.conflicted;
      acc.timeSensitive += counts.timeSensitive;
      acc.unverifiedHistorical += counts.unverifiedHistorical;
      acc.contradictionGroups += counts.contradictionGroups;
      acc.propagationQueue += counts.propagationQueue;
      acc.evidenceSources += counts.evidenceSources;
      return acc;
    },
    {
      verified: 0,
      conflicted: 0,
      timeSensitive: 0,
      unverifiedHistorical: 0,
      contradictionGroups: 0,
      propagationQueue: 0,
      evidenceSources: 0
    }
  );
}

function countByLabel(entries, selector) {
  const counts = new Map();
  entries.forEach((entry) => {
    const label = selector(entry);
    if (!label) return;
    counts.set(label, (counts.get(label) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function collectMasterInsights(trancheResults) {
  const conflicted = [];
  const timeSensitive = [];
  const propagationFiles = [];
  const driftEntries = [];
  const gapPages = [];
  const rewriteNow = [];
  const sourceVerification = [];
  const wordingDowngrade = [];

  trancheResults.forEach((result) => {
    (result.pageReport.conflicted_claims || []).forEach((entry) => {
      conflicted.push({ label: `${entry.claim_family} :: ${entry.claim_id}`, tranche: result.tranche.title });
      rewriteNow.push({ claim: entry.claim_id, tranche: result.tranche.title });
    });
    (result.pageReport.time_sensitive_claims || []).forEach((entry) => {
      timeSensitive.push({ label: `${entry.claim_family} :: ${entry.claim_id}`, tranche: result.tranche.title });
      wordingDowngrade.push({ claim: entry.claim_id, tranche: result.tranche.title });
    });
    (result.pageReport.unverified_or_historical_claims || []).forEach((entry) => {
      sourceVerification.push({ claim: entry.claim_id, tranche: result.tranche.title });
    });
    (result.pageReport.propagation_queue || []).forEach((entry) => {
      propagationFiles.push({ file: entry.file, tranche: result.tranche.title });
      if (entry.action === 'verify-only') {
        sourceVerification.push({ claim: entry.claim_id, tranche: result.tranche.title });
      }
      if (entry.action === 'update-now') {
        rewriteNow.push({ claim: `${entry.claim_id} -> ${entry.file}`, tranche: result.tranche.title });
      }
    });
    collectRegistryDrift(result.pageReport).forEach((entry) => {
      driftEntries.push({ label: `${entry.claim_family || 'unknown-family'} :: ${entry.ref}`, tranche: result.tranche.title });
    });
    collectCoverageGaps(result.pageReport).forEach((file) => {
      gapPages.push({ file, tranche: result.tranche.title });
    });
  });

  return {
    repeatedConflicted: countByLabel(conflicted, (entry) => entry.label),
    repeatedTimeSensitive: countByLabel(timeSensitive, (entry) => entry.label),
    propagationBurden: countByLabel(propagationFiles, (entry) => entry.file),
    repeatedDrift: countByLabel(driftEntries, (entry) => entry.label),
    rewriteNow,
    sourceVerification,
    wordingDowngrade,
    gapPages
  };
}

function buildBucketLines(entries, selector) {
  if (!entries.length) return ['- none'];
  const counts = countByLabel(entries, selector);
  return counts.slice(0, 10).map(([label, count]) => `- ${label} (${count})`);
}

function formatCountLines(counts, formatter = (label, count) => `- ${label} (${count})`) {
  if (!counts.length) return ['- none'];
  return counts.slice(0, 15).map(([label, count]) => formatter(label, count));
}

function filterRepeatedCounts(counts) {
  return counts.filter((entry) => entry[1] > 1);
}

function getCurrentBranch() {
  const result = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status === 0) return String(result.stdout || '').trim();
  return '';
}

function buildMasterPacket(trancheResults, packet) {
  const totals = aggregateCounts(trancheResults);
  const insights = collectMasterInsights(trancheResults);
  const lines = [];

  lines.push(`# ${packet.title} Research Master Packet`);
  lines.push('');
  lines.push(`- Worktree: \`${toPosix(REPO_ROOT)}\``);
  lines.push(`- Branch: \`${getCurrentBranch()}\``);
  lines.push(`- Scope mode: \`${packet.mode}\``);
  if (packet.navSource) {
    lines.push(`- Source nav file: \`${packet.navSource}\``);
  }
  if (packet.manifestPath) {
    lines.push(`- Manifest: \`${packet.manifestPath}\``);
  }
  if (packet.explicitFiles.length > 0) {
    lines.push(`- Explicit files: ${packet.explicitFiles.map((entry) => `\`${entry}\``).join(', ')}`);
  }
  if (packet.explicitFolders.length > 0) {
    lines.push(`- Explicit folders: ${packet.explicitFolders.map((entry) => `\`${entry}\``).join(', ')}`);
  }
  lines.push(`- Scope: ${packet.scopeStatement}`);
  lines.push(`- Output root: \`${packet.outputRoot}\``);
  lines.push('');
  lines.push('## Tranche Execution Order');
  lines.push('');
  trancheResults.forEach((result) => {
    lines.push(`${result.tranche.index}. ${result.tranche.title} (${result.tranche.pages.length} page(s)) -> \`${result.tranche.slug}\``);
  });
  lines.push('');
  lines.push('## Aggregate Totals');
  lines.push('');
  lines.push(`- Verified claims: ${totals.verified}`);
  lines.push(`- Conflicted claims: ${totals.conflicted}`);
  lines.push(`- Time-sensitive claims: ${totals.timeSensitive}`);
  lines.push(`- Unverified / historical claims: ${totals.unverifiedHistorical}`);
  lines.push(`- Contradiction groups: ${totals.contradictionGroups}`);
  lines.push(`- Propagation queue items: ${totals.propagationQueue}`);
  lines.push(`- Evidence sources checked: ${totals.evidenceSources}`);
  lines.push('');
  lines.push('## Per-Tranche Scoreboard');
  lines.push('');

  trancheResults.forEach((result) => {
    const counts = summarizeCounts(result.pageReport);
    const runStatus =
      result.registryValidate.status === 0 &&
      result.adjudicationValidate.status === 0 &&
      result.pageRun.status === 0 &&
      result.prRun.status === 0
        ? 'pass'
        : 'fail';
    lines.push(`### ${result.tranche.index}. ${result.tranche.title}`);
    lines.push('');
    lines.push(`- Folder: \`${result.tranche.slug}\``);
    lines.push(`- Pages: ${result.tranche.pages.length}`);
    lines.push(`- Run status: ${runStatus}`);
    lines.push(`- Verified claims: ${counts.verified}`);
    lines.push(`- Conflicted claims: ${counts.conflicted}`);
    lines.push(`- Time-sensitive claims: ${counts.timeSensitive}`);
    lines.push(`- Contradiction groups: ${counts.contradictionGroups}`);
    lines.push(`- Propagation queue items: ${counts.propagationQueue}`);
    lines.push(`- Evidence sources checked: ${counts.evidenceSources}`);
    lines.push(`- Report: \`${result.artifacts.summaryMd}\``);
    lines.push(`- Packet summary: \`${result.artifacts.summaryJson}\``);
    lines.push('');
  });

  lines.push('## Cross-Tranche Findings Rollup');
  lines.push('');
  lines.push('### Repeated Conflicted Claim Families');
  lines.push('');
  lines.push(...formatCountLines(filterRepeatedCounts(insights.repeatedConflicted)));
  lines.push('');
  lines.push('### Repeated Time-Sensitive Claim Families');
  lines.push('');
  lines.push(...formatCountLines(filterRepeatedCounts(insights.repeatedTimeSensitive)));
  lines.push('');
  lines.push('### Pages With Highest Propagation Burden');
  lines.push('');
  lines.push(...formatCountLines(insights.propagationBurden, (file, count) => `- \`${file}\` (${count})`));
  lines.push('');
  lines.push('### Repeated Registry/path Drift');
  lines.push('');
  lines.push(...formatCountLines(filterRepeatedCounts(insights.repeatedDrift)));
  lines.push('');
  lines.push('### Follow-up Buckets');
  lines.push('');
  lines.push('#### Content rewrite now');
  lines.push('');
  lines.push(...buildBucketLines(insights.rewriteNow, (entry) => `${entry.claim} :: ${entry.tranche}`));
  lines.push('');
  lines.push('#### Wording needs downgrading');
  lines.push('');
  lines.push(...buildBucketLines(insights.wordingDowngrade, (entry) => `${entry.claim} :: ${entry.tranche}`));
  lines.push('');
  lines.push('#### Source verification needed');
  lines.push('');
  lines.push(...buildBucketLines(insights.sourceVerification, (entry) => `${entry.claim} :: ${entry.tranche}`));
  lines.push('');
  lines.push('#### Registry coverage gap');
  lines.push('');
  lines.push(...formatCountLines(countByLabel(insights.gapPages, (entry) => `${entry.file} :: ${entry.tranche}`)));
  lines.push('');
  lines.push('#### Path/IA mismatch in the research registry');
  lines.push('');
  lines.push(...formatCountLines(filterRepeatedCounts(insights.repeatedDrift)));

  return `${lines.join('\n').trimEnd()}\n`;
}

function buildPacketSummary(trancheResults, packet) {
  const totals = aggregateCounts(trancheResults);
  return {
    title: packet.title,
    mode: packet.mode,
    worktree: toPosix(REPO_ROOT),
    branch: getCurrentBranch(),
    output_root: packet.outputRoot,
    nav_source: packet.navSource,
    manifest: packet.manifestPath,
    scope_statement: packet.scopeStatement,
    explicit_files: packet.explicitFiles,
    explicit_folders: packet.explicitFolders,
    totals: {
      verified_claims: totals.verified,
      conflicted_claims: totals.conflicted,
      time_sensitive_claims: totals.timeSensitive,
      unverified_historical_claims: totals.unverifiedHistorical,
      contradiction_groups: totals.contradictionGroups,
      propagation_queue_items: totals.propagationQueue,
      evidence_sources: totals.evidenceSources
    },
    tranches: trancheResults.map((result) => {
      const counts = summarizeCounts(result.pageReport);
      return {
        index: result.tranche.index,
        title: result.tranche.title,
        slug: result.tranche.slug,
        pages: result.tranche.pages,
        run_status:
          result.registryValidate.status === 0 &&
          result.adjudicationValidate.status === 0 &&
          result.pageRun.status === 0 &&
          result.prRun.status === 0
            ? 'pass'
            : 'fail',
        counts: {
          verified_claims: counts.verified,
          conflicted_claims: counts.conflicted,
          time_sensitive_claims: counts.timeSensitive,
          unverified_historical_claims: counts.unverifiedHistorical,
          contradiction_groups: counts.contradictionGroups,
          propagation_queue_items: counts.propagationQueue,
          evidence_sources: counts.evidenceSources,
          explicit_page_targets: counts.explicitTargets,
          inferred_page_targets: counts.inferredTargets
        },
        artifacts: result.artifacts
      };
    })
  };
}

function runTranche(tranche, args, validation, outputRoot) {
  const trancheRoot = toPosix(path.join(outputRoot, tranche.slug));
  const pageMd = toPosix(path.join(trancheRoot, 'research-pages.md'));
  const pageJson = toPosix(path.join(trancheRoot, 'research-pages.json'));
  const prMd = toPosix(path.join(trancheRoot, 'research-pr.md'));
  const prJson = toPosix(path.join(trancheRoot, 'research-pr.json'));
  const summaryJson = toPosix(path.join(trancheRoot, 'research-summary.json'));
  const summaryMd = toPosix(path.join(trancheRoot, '03-research.md'));
  const filesArg = tranche.pages.join(',');

  const pageRun = runNodeScript('tools/scripts/docs-page-research.js', [
    '--registry',
    args.registry,
    '--files',
    filesArg,
    '--report-md',
    pageMd,
    '--report-json',
    pageJson,
    '--quiet'
  ]);
  if (pageRun.status !== 0) {
    throw new Error(`docs-page-research failed for ${tranche.title}: ${pageRun.stderr || pageRun.stdout}`);
  }

  const prRun = runNodeScript('tools/scripts/docs-page-research-pr-report.js', [
    '--registry',
    args.registry,
    '--files',
    filesArg,
    '--report-md',
    prMd,
    '--report-json',
    prJson,
    '--quiet'
  ]);
  if (prRun.status !== 0) {
    throw new Error(`docs-page-research-pr-report failed for ${tranche.title}: ${prRun.stderr || prRun.stdout}`);
  }

  const summary = {
    registryValidate: validation.registryValidate,
    adjudicationValidate: validation.adjudicationValidate,
    pageRun,
    prRun,
    pageReport: readJsonFile(pageJson),
    prReport: readJsonFile(prJson)
  };

  writeJsonFile(summaryJson, summary);
  writeTextFile(summaryMd, buildTrancheResearchMarkdown(summary, tranche));

  return {
    tranche,
    ...summary,
    artifacts: {
      pageMd: toRepoDisplayPath(pageMd),
      pageJson: toRepoDisplayPath(pageJson),
      prMd: toRepoDisplayPath(prMd),
      prJson: toRepoDisplayPath(prJson),
      summaryMd: toRepoDisplayPath(summaryMd),
      summaryJson: toRepoDisplayPath(summaryJson)
    }
  };
}

function resolveScopeMode(args) {
  const hasManifest = Boolean(args.manifest);
  const hasPaths = args.files.length > 0 || args.folders.length > 0;
  const hasNav = Boolean(args.tab || args.group);
  const modes = [hasManifest ? 'manifest' : null, hasPaths ? 'paths' : null, hasNav ? 'nav' : null].filter(Boolean);

  if (modes.length === 0) {
    throw new Error('Select exactly one scope mode: nav (--tab/--group), manifest (--manifest), or paths (--files/--folders).');
  }
  if (modes.length > 1) {
    throw new Error(`Scope mode is ambiguous. Use only one of nav, manifest, or paths (received: ${modes.join(', ')}).`);
  }
  return modes[0];
}

function resolveOutputRoot(args, manifest) {
  const outputRoot = String(args.out || manifest?.outputRoot || '').trim();
  if (!outputRoot) {
    throw new Error('Output root is required. Pass --out or set manifest.outputRoot.');
  }
  return toRepoDisplayPath(outputRoot);
}

function buildPacketContext(args) {
  const mode = resolveScopeMode(args);
  let title = 'Docs Research';
  let navSource = '';
  let manifestPath = '';
  let explicitFiles = [];
  let explicitFolders = [];
  let tranches = [];

  if (mode === 'nav') {
    if (!args.tab || !args.group) {
      throw new Error('Nav mode requires both --tab and --group.');
    }
    navSource = toRepoDisplayPath(args.nav);
    tranches = buildNavTranches(readJsonFile(args.nav), args);
    title = `${args.tab} ${args.group}`;
  } else if (mode === 'manifest') {
    manifestPath = toRepoDisplayPath(args.manifest);
    const manifest = readJsonFile(args.manifest);
    tranches = buildManifestTranches(manifest, args);
    title = String(manifest.name || 'Manifest Scope').trim() || 'Manifest Scope';
    navSource = manifest.navSource ? toRepoDisplayPath(manifest.navSource) : '';
  } else {
    tranches = buildPathTranches(args);
    explicitFiles = args.files.map((entry) => repoScopedPath(entry));
    explicitFolders = args.folders.map((entry) => repoScopedPath(entry));
    title = args.folders.length > 0 && args.files.length === 0 ? 'Folder Scope' : 'Explicit Scope';
  }

  validateTrancheFiles(tranches, true);
  validateDuplicateCoverage(tranches);

  const outputRoot = resolveOutputRoot(mode === 'manifest' ? { ...args, out: args.out || readJsonFile(args.manifest).outputRoot } : args, mode === 'manifest' ? readJsonFile(args.manifest) : null);
  const scopeStatement =
    mode === 'nav'
      ? `live \`${args.tab} -> ${args.group}\` pages only from \`${navSource}\`; deprecated and helper files are excluded.`
      : mode === 'manifest'
        ? `manifest-defined route groups from \`${manifestPath}\`; deprecated and helper files are excluded.`
        : `explicit files and folders only; deprecated and helper files are excluded by default.`;

  return {
    mode,
    title,
    navSource,
    manifestPath,
    explicitFiles,
    explicitFolders,
    tranches: filterTranches(tranches, args.tranche),
    outputRoot,
    scopeStatement
  };
}

function runPacket(args) {
  const packet = buildPacketContext(args);
  if (packet.tranches.length === 0) {
    throw new Error('No tranches matched the requested filter.');
  }

  const validation = {
    registryValidate: runNodeScript('tools/scripts/docs-fact-registry.js', ['--validate', '--registry', args.registry]),
    adjudicationValidate: runNodeScript('tools/scripts/docs-research-adjudication.js', ['--validate', '--ledger', args.ledger])
  };

  if (validation.registryValidate.status !== 0) {
    throw new Error(validation.registryValidate.stderr || validation.registryValidate.stdout || 'Registry validation failed');
  }
  if (validation.adjudicationValidate.status !== 0) {
    throw new Error(
      validation.adjudicationValidate.stderr || validation.adjudicationValidate.stdout || 'Adjudication validation failed'
    );
  }

  const results = packet.tranches.map((tranche) => runTranche(tranche, args, validation, packet.outputRoot));
  const masterPacketPath = toPosix(path.join(packet.outputRoot, '00-master-packet.md'));
  const packetSummaryPath = toPosix(path.join(packet.outputRoot, 'packet-summary.json'));
  writeTextFile(masterPacketPath, buildMasterPacket(results, packet));
  writeJsonFile(packetSummaryPath, buildPacketSummary(results, packet));

  if (!args.quiet) {
    const totalPages = results.reduce((count, result) => count + result.tranche.pages.length, 0);
    console.log(`✅ docs-research-packet: ${results.length} tranche(s), ${totalPages} page(s), output at ${packet.outputRoot}`);
  }

  return {
    packet,
    results,
    validation,
    artifacts: {
      masterPacket: toRepoDisplayPath(masterPacketPath),
      packetSummary: toRepoDisplayPath(packetSummaryPath)
    }
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }
  try {
    runPacket(args);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildManifestTranches,
  buildMasterPacket,
  buildNavTranches,
  buildPacketContext,
  buildPacketSummary,
  buildPathTranches,
  buildTrancheResearchMarkdown,
  collectCoverageGaps,
  collectRegistryDrift,
  collectResearchFilesFromFolders,
  comparePageAndPr,
  filterRepeatedCounts,
  filterTranches,
  formatCountLines,
  isDefaultExcludedRepoPath,
  parseArgs,
  repoScopedPath,
  resolveScopeMode,
  runPacket,
  summarizeCounts
};
