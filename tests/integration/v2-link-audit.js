#!/usr/bin/env node
/**
 * @script v2-link-audit
 * @summary Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation.
 * @owner docs
 * @scope tests
 *
 * @usage
 *   node tests/integration/v2-link-audit.js --full --write-links --strict
 *
 * @inputs
 *   --full (default)
 *   --staged
 *   --files <path[,path...]> (repeatable; explicit files mode)
 *   --no-mintignore (include files ignored by .mintignore)
 *   --report <path> (default: tasks/reports/navigation-links/LINK_TEST_REPORT.md)
 *   --report-json <path> (default: tasks/reports/navigation-links/LINK_TEST_REPORT.json)
 *   --write-links | --no-write-links (default true for --full, false for --staged/--files)
 *   --strict (exit 1 if missing internal/import targets are found)
 *   --external-policy classify|validate (default: classify)
 *   --external-link-types navigational|media|all (default: navigational)
 *   --external-timeout-ms <int> (default: 10000)
 *   --external-concurrency <int> (default: 12)
 *   --external-per-host-concurrency <int> (default: 2)
 *   --external-retries <int> (default: 1)
 *
 * @outputs
 *   - Markdown report at tasks/reports/navigation-links/LINK_TEST_REPORT.md (or custom path)
 *   - JSON report at tasks/reports/navigation-links/LINK_TEST_REPORT.json (or custom path)
 *   - snippets/data/<domain>/hrefs.jsx files when write-links enabled
 *
 * @exit-codes
 *   0 = success
 *   1 = validation failure in strict mode (internal only) or runtime error
 *
 * @examples
 *   node tests/integration/v2-link-audit.js --full --write-links --strict
 *   node tests/integration/v2-link-audit.js --files v2/pages/04_gateways/index.mdx --strict
 *   node tests/integration/v2-link-audit.js --full --external-policy validate --external-link-types navigational --no-write-links
 *
 * @notes
 *   External URL validation is advisory-only: --strict still applies only to missing internal/import references.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { extractImports } = require('../utils/mdx-parser');
const {
  getStagedFiles,
  isExcludedV2ExperimentalPath,
  filterPathsByMintIgnore
} = require('../utils/file-walker');

const REPO_ROOT = getRepoRoot();
const LEGACY_V2_PAGES_DIR = path.join(REPO_ROOT, 'v2', 'pages');
const MODERN_V2_PAGES_DIR = path.join(REPO_ROOT, 'v2');
const V2_PAGES_DIR = fs.existsSync(LEGACY_V2_PAGES_DIR) ? LEGACY_V2_PAGES_DIR : MODERN_V2_PAGES_DIR;
const INDEX_PATH = path.join(V2_PAGES_DIR, 'index.mdx');
const DOCS_CONFIG_PATH = path.join(REPO_ROOT, 'docs.json');
const DEFAULT_REPORT = path.join(REPO_ROOT, 'tasks', 'reports', 'navigation-links', 'LINK_TEST_REPORT.md');
const DEFAULT_REPORT_JSON = path.join(REPO_ROOT, 'tasks', 'reports', 'navigation-links', 'LINK_TEST_REPORT.json');
const LINKABLE_ATTRS = ['href', 'src', 'srcset', 'poster', 'action', 'data', 'to', 'image', 'url'];
const EXCLUDED_ATTRS = new Set(['icon']);
const FILE_EXT_CANDIDATES = ['.mdx', '.md', '.jsx', '.js', '.tsx', '.ts', '.json'];
const INDEX_CANDIDATES = ['index.mdx', 'index.md', 'README.mdx', 'README.md'];
const EXTERNAL_UNTESTED = '🟡 untested-external';
const EXTERNAL_PENDING = 'external-pending';
const EXTERNAL_OK = 'external-ok';
const EXTERNAL_SOFT_FAIL = 'external-soft-fail';
const EXTERNAL_HARD_FAIL = 'external-hard-fail';
const EXTERNAL_POLICY_VALUES = new Set(['classify', 'validate']);
const EXTERNAL_LINK_TYPES_VALUES = new Set(['navigational', 'media', 'all']);
const HEAD_FALLBACK_STATUSES = new Set([401, 403, 405, 501]);
const TRANSIENT_STATUSES = new Set([429, 500, 502, 503, 504]);
const MEDIA_ATTRS = new Set(['src', 'srcset', 'poster', 'image']);
const NAV_ATTRS = new Set(['href', 'to']);
const MIGRATED_V2_DOMAIN_DIRS = new Set([
  'home',
  'about',
  'platforms',
  'community',
  'developers',
  'gateways',
  'orchestrators',
  'lpt',
  'resources',
  'internal',
  'deprecated',
  'experimental',
  'notes'
]);
const MISSING_LINK_ALLOWLIST = new Set([
  '/gateways/run-a-gateway/test/test-gateway',
  './protocol-economics'
]);
const EXTRA_V2_DIRS = (() => {
  if (!fs.existsSync(LEGACY_V2_PAGES_DIR)) return [];
  const dirs = [];
  for (const domain of MIGRATED_V2_DOMAIN_DIRS) {
    const candidate = path.join(MODERN_V2_PAGES_DIR, domain);
    if (fs.existsSync(candidate)) dirs.push(candidate);
  }
  return dirs;
})();

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(p) {
  return String(p || '').split(path.sep).join('/');
}

function relFromRoot(absPath) {
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function relNoExt(absPath) {
  const rel = relFromRoot(absPath);
  return toPosix(rel.replace(/\.(mdx|md)$/i, ''));
}

function isExcludedV2AbsPath(absPath) {
  const rel = relFromRoot(absPath);
  return isExcludedV2ExperimentalPath(rel);
}

function isActiveV2DocRel(relPath) {
  const rel = toPosix(String(relPath || ''));
  if (rel.startsWith('v2/pages/')) return true;
  if (!rel.startsWith('v2/')) return false;
  if (isExcludedV2ExperimentalPath(rel)) return false;
  const first = rel.slice('v2/'.length).split('/')[0];
  return MIGRATED_V2_DOMAIN_DIRS.has(first);
}

function stripV2DocsRoot(relPath) {
  const rel = toPosix(String(relPath || ''));
  if (rel.startsWith('v2/pages/')) return rel.slice('v2/pages/'.length);
  if (rel.startsWith('v2/')) return rel.slice('v2/'.length);
  return rel;
}

function parseIntegerFlag(raw, fallback, { min = 0 } = {}) {
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return fallback;
  const floored = Math.floor(parsed);
  if (floored < min) return fallback;
  return floored;
}

function parseArgs(argv) {
  const args = {
    mode: 'full',
    report: DEFAULT_REPORT,
    reportJson: DEFAULT_REPORT_JSON,
    respectMintIgnore: true,
    strict: false,
    writeLinks: undefined,
    externalPolicy: 'classify',
    externalLinkTypes: 'navigational',
    externalTimeoutMs: 10000,
    externalConcurrency: 12,
    externalPerHostConcurrency: 2,
    externalRetries: 1,
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--full') args.mode = 'full';
    else if (token === '--staged') args.mode = 'staged';
    else if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => args.files.push(part));
      }
      i += 1;
    }
    else if (token === '--strict') args.strict = true;
    else if (token === '--no-mintignore') args.respectMintIgnore = false;
    else if (token === '--write-links') args.writeLinks = true;
    else if (token === '--no-write-links') args.writeLinks = false;
    else if (token === '--report') {
      args.report = path.resolve(REPO_ROOT, argv[i + 1] || '');
      i += 1;
    } else if (token === '--report-json') {
      args.reportJson = path.resolve(REPO_ROOT, argv[i + 1] || '');
      i += 1;
    } else if (token === '--external-policy') {
      args.externalPolicy = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
    } else if (token === '--external-link-types') {
      args.externalLinkTypes = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
    } else if (token === '--external-timeout-ms') {
      args.externalTimeoutMs = parseIntegerFlag(argv[i + 1], args.externalTimeoutMs, { min: 1 });
      i += 1;
    } else if (token === '--external-concurrency') {
      args.externalConcurrency = parseIntegerFlag(argv[i + 1], args.externalConcurrency, { min: 1 });
      i += 1;
    } else if (token === '--external-per-host-concurrency') {
      args.externalPerHostConcurrency = parseIntegerFlag(argv[i + 1], args.externalPerHostConcurrency, { min: 1 });
      i += 1;
    } else if (token === '--external-retries') {
      args.externalRetries = parseIntegerFlag(argv[i + 1], args.externalRetries, { min: 0 });
      i += 1;
    } else {
      throw new Error(`Unknown option: ${token}`);
    }
  }

  if (!EXTERNAL_POLICY_VALUES.has(args.externalPolicy)) {
    throw new Error('Invalid --external-policy value. Use classify|validate.');
  }

  if (!EXTERNAL_LINK_TYPES_VALUES.has(args.externalLinkTypes)) {
    throw new Error('Invalid --external-link-types value. Use navigational|media|all.');
  }

  args.files = [...new Set(args.files)];
  if (args.files.length > 0) {
    args.mode = 'files';
  }

  if (typeof args.writeLinks === 'undefined') {
    args.writeLinks = args.mode === 'full';
  }

  return args;
}

function walkFiles(dir, matcher, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    const rel = relFromRoot(abs);

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      if (rel.startsWith('v2/') && isExcludedV2ExperimentalPath(rel)) continue;
      walkFiles(abs, matcher, out);
    } else if (matcher(abs)) {
      out.push(abs);
    }
  }
  return out;
}

function loadFile(absPath) {
  try {
    return fs.readFileSync(absPath, 'utf8');
  } catch (_error) {
    return '';
  }
}

function parseIndexStructure(indexContent) {
  const lines = indexContent.split('\n');
  const topLevels = [];
  const byPath = new Map();
  let currentTop = null;
  const stack = [];

  for (const lineRaw of lines) {
    const line = lineRaw.trimEnd();
    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2].trim();
      while (stack.length && stack[stack.length - 1].level >= level) stack.pop();

      if (level === 2) {
        currentTop = {
          type: 'top',
          level,
          title,
          slug: slugify(title),
          groups: [],
          pages: [],
          pathSet: new Set()
        };
        topLevels.push(currentTop);
        stack.length = 0;
        stack.push({ level, node: currentTop });
      } else if (currentTop) {
        const parent = stack.length ? stack[stack.length - 1].node : currentTop;
        const node = {
          type: 'group',
          level,
          title,
          groups: [],
          pages: []
        };
        parent.groups.push(node);
        stack.push({ level, node });
      }
      continue;
    }

    const link = line.match(/^\s*-\s*\[([^\]]+)\]\(([^)]+)\)\s*$/);
    if (link && currentTop) {
      const title = link[1].trim();
      const href = decodeURI(link[2].trim());
      const warning = title.includes('⚠️');
      const pageNode = { type: 'page', title, href, warning, imported: [] };

      const parent = stack.length ? stack[stack.length - 1].node : currentTop;
      parent.pages.push(pageNode);

      const abs = path.join(V2_PAGES_DIR, href);
      const key = relFromRoot(abs);
      currentTop.pathSet.add(key);
      byPath.set(key, { top: currentTop, pageNode });
    }
  }

  return { topLevels, byPath };
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function readableFromFolder(folder) {
  return String(folder || '')
    .toLowerCase()
    .replace(/^\d+_?/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildDomainMaps(structure) {
  const folderToDomain = new Map();
  const domainToTopTitle = new Map();

  for (const top of structure.topLevels) {
    const domain = top.slug || 'unknown';
    domainToTopTitle.set(domain, top.title);
    for (const p of top.pathSet) {
      const rel = stripV2DocsRoot(p);
      const seg = rel.split('/')[0];
      if (seg) folderToDomain.set(seg, domain);
    }
  }

  return { folderToDomain, domainToTopTitle };
}

function normalizeInputFilePath(filePath) {
  const normalized = toPosix(String(filePath || '').trim());
  if (!normalized) return '';
  return normalized.replace(/^\.\//, '');
}

function isWithinV2Roots(absPath) {
  if (isExcludedV2AbsPath(absPath)) return false;
  if (absPath.startsWith(V2_PAGES_DIR)) return true;
  return EXTRA_V2_DIRS.some((dir) => absPath.startsWith(dir));
}

function getExplicitTargets(files, options = {}) {
  const { respectMintIgnore = true } = options;
  const isIndexMdx = (abs) => path.basename(abs).toLowerCase() === 'index.mdx';
  const out = [];
  const seen = new Set();

  for (const file of files) {
    const normalized = normalizeInputFilePath(file);
    if (!normalized) continue;

    const candidate = path.isAbsolute(normalized)
      ? normalized
      : path.join(REPO_ROOT, normalized);

    if (!fs.existsSync(candidate)) continue;
    if (!candidate.endsWith('.mdx')) continue;
    if (!isWithinV2Roots(candidate)) continue;
    if (isIndexMdx(candidate)) continue;

    const rel = relFromRoot(candidate);
    if (seen.has(rel)) continue;
    seen.add(rel);
    out.push(candidate);
  }

  return filterPathsByMintIgnore(out, {
    rootDir: REPO_ROOT,
    respectMintIgnore
  });
}

function getInitialTargets(mode, explicitFiles = [], options = {}) {
  const { respectMintIgnore = true } = options;
  const isIndexMdx = (abs) => path.basename(abs).toLowerCase() === 'index.mdx';
  if (mode === 'files') {
    return getExplicitTargets(explicitFiles, { respectMintIgnore });
  }

  if (mode === 'staged') {
    const stagedTargets = getStagedFiles()
      .filter((abs) => isWithinV2Roots(abs) && abs.endsWith('.mdx') && fs.existsSync(abs) && !isIndexMdx(abs));
    return filterPathsByMintIgnore(stagedTargets, {
      rootDir: REPO_ROOT,
      respectMintIgnore
    });
  }

  const results = [];
  const roots = [V2_PAGES_DIR, ...EXTRA_V2_DIRS];
  roots.forEach((root) => walkFiles(root, (abs) => abs.endsWith('.mdx') && !isIndexMdx(abs), results));
  return filterPathsByMintIgnore([...new Set(results)], {
    rootDir: REPO_ROOT,
    respectMintIgnore
  });
}

function stripQueryHash(p) {
  const q = p.indexOf('?');
  const h = p.indexOf('#');
  const cut = [q, h].filter((n) => n >= 0).sort((a, b) => a - b)[0];
  return cut >= 0 ? p.slice(0, cut) : p;
}

function trimRawPath(raw) {
  let value = String(raw || '').trim();
  value = value.replace(/\s+"[^"]*"$/, '').replace(/\s+'[^']*'$/, '').trim();
  if (value.startsWith('(') && value.endsWith(')')) {
    value = value.slice(1, -1).trim();
  }
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1).trim();
  }
  try {
    return decodeURI(value);
  } catch (_error) {
    return value;
  }
}

function normalizeRawPath(raw) {
  return stripQueryHash(trimRawPath(raw));
}

function normalizeExternalUrl(raw) {
  const trimmed = trimRawPath(raw);
  if (!trimmed) return '';
  const lower = trimmed.toLowerCase();
  if (!(lower.startsWith('http://') || lower.startsWith('https://'))) return '';
  try {
    const parsed = new URL(trimmed);
    parsed.hash = '';
    return parsed.toString();
  } catch (_error) {
    return '';
  }
}

function classifyPath(raw) {
  const p = String(raw || '').trim();
  const lower = p.toLowerCase();
  if (!p) return 'empty';
  if (lower.startsWith('http://')) return 'external-http';
  if (lower.startsWith('https://')) return 'external-https';
  if (lower.startsWith('mailto:')) return 'mailto';
  if (lower.startsWith('tel:')) return 'tel';
  if (lower.startsWith('javascript:')) return 'javascript';
  if (lower.startsWith('data:')) return 'data';
  if (p.startsWith('#')) return 'anchor';
  if (p.startsWith('/')) return 'internal-rooted';
  return 'internal-relative';
}

function resolveInternalPath(raw, currentFileAbs) {
  const normalized = normalizeRawPath(raw);
  if (!normalized) return null;

  if (normalized.startsWith('/')) {
    const rooted = normalized.replace(/^\/+/, '');
    if (rooted.startsWith('v2/') || rooted.startsWith('v1/') || rooted.startsWith('snippets/') || rooted.startsWith('tests/') || rooted.startsWith('tasks/')) {
      return path.join(REPO_ROOT, rooted);
    }
    const first = rooted.split('/')[0];
    if (MIGRATED_V2_DOMAIN_DIRS.has(first)) {
      return path.join(REPO_ROOT, 'v2', rooted);
    }
    const asV2Page = path.join(REPO_ROOT, 'v2', 'pages', rooted);
    const asRoot = path.join(REPO_ROOT, rooted);
    if (fs.existsSync(asRoot) || fs.existsSync(`${asRoot}.mdx`) || fs.existsSync(`${asRoot}.md`)) return asRoot;
    return asV2Page;
  }

  const resolved = path.resolve(path.dirname(currentFileAbs), normalized);
  const relFromPagesRoot = toPosix(path.relative(V2_PAGES_DIR, resolved));
  if (relFromPagesRoot && !relFromPagesRoot.startsWith('../')) {
    const first = relFromPagesRoot.split('/')[0];
    if (MIGRATED_V2_DOMAIN_DIRS.has(first)) {
      return path.join(REPO_ROOT, 'v2', relFromPagesRoot);
    }
  }
  return resolved;
}

function resolveExistingPath(baseAbsPath) {
  const seen = new Set();
  const candidates = [];

  function add(p) {
    const norm = path.normalize(p);
    if (!seen.has(norm)) {
      seen.add(norm);
      candidates.push(norm);
    }
  }

  add(baseAbsPath);
  for (const ext of FILE_EXT_CANDIDATES) {
    if (!baseAbsPath.endsWith(ext)) add(`${baseAbsPath}${ext}`);
  }

  for (const idx of INDEX_CANDIDATES) {
    add(path.join(baseAbsPath, idx));
  }

  function toBackupXPagedPath(candidatePath) {
    const rel = toPosix(path.relative(REPO_ROOT, candidatePath));
    if (rel.startsWith('v2/pages/')) {
      return path.join(REPO_ROOT, 'v2', 'x-pages', rel.slice('v2/pages/'.length));
    }
    const numericDomainMatch = rel.match(/^v2\/(\d+_[^/]+\/.*)$/);
    if (numericDomainMatch) {
      return path.join(REPO_ROOT, 'v2', 'x-pages', numericDomainMatch[1]);
    }
    return null;
  }

  for (const candidate of [...candidates]) {
    const backupCandidate = toBackupXPagedPath(candidate);
    if (backupCandidate) add(backupCandidate);
  }

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    try {
      if (fs.statSync(candidate).isFile()) return candidate;
    } catch (_error) {
      // Ignore and continue checking candidates.
    }
  }

  return null;
}

function normalizeRoute(routePath) {
  const raw = String(routePath || '').trim();
  if (!raw || raw === '/') return raw || '';
  return `/${raw.replace(/^\/+/, '').replace(/\/+$/, '')}`;
}

function collectPagesRoutes(node, out) {
  if (!node) return;
  if (Array.isArray(node)) {
    for (const item of node) collectPagesRoutes(item, out);
    return;
  }
  if (typeof node === 'string') {
    const normalized = normalizeRoute(node);
    if (normalized && normalized !== '/ ') out.add(normalized);
    return;
  }
  if (typeof node !== 'object') return;
  if (Array.isArray(node.pages)) collectPagesRoutes(node.pages, out);
  for (const value of Object.values(node)) {
    if (value && typeof value === 'object') collectPagesRoutes(value, out);
  }
}

function loadRouteSet() {
  const routes = new Set();
  if (!fs.existsSync(DOCS_CONFIG_PATH)) return routes;

  let parsed = null;
  try {
    parsed = JSON.parse(fs.readFileSync(DOCS_CONFIG_PATH, 'utf8'));
  } catch (_error) {
    return routes;
  }

  collectPagesRoutes(parsed.navigation || parsed, routes);

  if (Array.isArray(parsed.redirects)) {
    for (const redirect of parsed.redirects) {
      const source = normalizeRoute(redirect && redirect.source);
      const destination = normalizeRoute(redirect && redirect.destination);
      if (source) routes.add(source);
      if (destination) routes.add(destination);
    }
  }

  return routes;
}

function isRoutableLinkRef(ref) {
  if (ref.sourceType === 'markdown-link') return true;
  if (ref.sourceType === 'jsx-attr') {
    const attr = String(ref.attr || '').toLowerCase();
    return attr === 'href' || attr === 'to';
  }
  return false;
}

function asPageRouteForBrowser(rawPath, currentFileAbs) {
  const normalizedRaw = normalizeRawPath(rawPath);
  if (!normalizedRaw || normalizedRaw.startsWith('#')) return null;

  const currentRelNoExt = relNoExt(currentFileAbs);
  if (!isActiveV2DocRel(currentRelNoExt)) return null;

  if (normalizedRaw.startsWith('/')) {
    return normalizeRoute(normalizedRaw);
  }

  const currentRoute = `/${currentRelNoExt}`;
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(currentRoute), normalizedRaw));
  return normalizeRoute(resolved);
}

function hasDocFileExtension(routePath) {
  return /\.(mdx|md)$/i.test(String(routePath || ''));
}

function isKnownDocsFolderRoute(routePath, routeSet) {
  const route = normalizeRoute(routePath);
  if (!route || hasDocFileExtension(route)) return false;
  const prefix = `${route}/`;
  for (const known of routeSet) {
    const normalizedKnown = normalizeRoute(known);
    if (!normalizedKnown) continue;
    if (normalizedKnown.startsWith(prefix)) return true;
  }
  return false;
}

function listRepoFilesForMoveHints() {
  return walkFiles(REPO_ROOT, (abs) => {
    const rel = relFromRoot(abs);
    if (rel.startsWith('.git/')) return false;
    if (rel.includes('/node_modules/')) return false;
    return true;
  });
}

function suffixScore(fromAbs, toAbs) {
  const a = relFromRoot(fromAbs).split('/');
  const b = relFromRoot(toAbs).split('/');
  let i = 1;
  while (i <= a.length && i <= b.length && a[a.length - i] === b[b.length - i]) i += 1;
  return i - 1;
}

function findMovedCandidates(missingAbs, repoFiles) {
  const base = path.basename(missingAbs);
  if (!base) return [];
  const baseNoExt = base.replace(/\.[^.]+$/, '');
  const ext = path.extname(missingAbs).toLowerCase();

  const direct = repoFiles.filter((f) => {
    const name = path.basename(f);
    const nameNoExt = name.replace(/\.[^.]+$/, '');
    if (name === base) return true;
    if (!ext && nameNoExt === baseNoExt) return true;
    return false;
  });

  const ranked = direct
    .map((f) => ({
      file: f,
      score: suffixScore(missingAbs, f)
        + (path.extname(f).toLowerCase() === ext ? 1 : 0)
        + (isActiveV2DocRel(relFromRoot(f)) ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .map((x) => relFromRoot(x.file));

  if (ranked.length >= 3) return ranked.slice(0, 3);

  const fallback = repoFiles
    .filter((f) => {
      const rel = relFromRoot(f);
      const nameNoExt = path.basename(f).replace(/\.[^.]+$/, '');
      return nameNoExt.includes(baseNoExt) || rel.includes(baseNoExt);
    })
    .map((f) => ({
      file: f,
      score: suffixScore(missingAbs, f)
        + (path.extname(f).toLowerCase() === ext ? 1 : 0)
        + (isActiveV2DocRel(relFromRoot(f)) ? 1 : 0)
    }))
    .sort((a, b) => b.score - a.score)
    .map((x) => relFromRoot(x.file));

  return Array.from(new Set([...ranked, ...fallback])).slice(0, 3);
}

function findDirectoryCandidates(missingAbs) {
  if (!fs.existsSync(missingAbs)) return [];
  let st = null;
  try {
    st = fs.statSync(missingAbs);
  } catch (_error) {
    return [];
  }
  if (!st.isDirectory()) return [];

  const preferredNames = new Set(['index.mdx', 'index.md', 'README.mdx', 'README.md', 'page-1.mdx', 'overview.mdx']);
  const candidates = [];

  const files = walkFiles(missingAbs, (abs) => {
    const rel = relFromRoot(abs);
    if (rel.includes('/node_modules/')) return false;
    const lower = abs.toLowerCase();
    return lower.endsWith('.mdx') || lower.endsWith('.md');
  });

  files.sort((a, b) => {
    const aName = path.basename(a);
    const bName = path.basename(b);
    const aPref = preferredNames.has(aName) ? 1 : 0;
    const bPref = preferredNames.has(bName) ? 1 : 0;
    if (aPref !== bPref) return bPref - aPref;
    return suffixScore(missingAbs, b) - suffixScore(missingAbs, a);
  });

  for (const f of files) {
    candidates.push(relFromRoot(f));
    if (candidates.length >= 3) break;
  }

  return candidates;
}

function findMissingPathCandidates(missingAbs, repoFiles) {
  const dirCandidates = findDirectoryCandidates(missingAbs);
  const moved = findMovedCandidates(missingAbs, repoFiles);
  return Array.from(new Set([...dirCandidates, ...moved])).slice(0, 3);
}

function extractRefs(content) {
  const refs = [];
  const contentForExtraction = String(content || '').replace(/```[\s\S]*?```/g, '');

  const markdownRegex = /!?\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = markdownRegex.exec(contentForExtraction)) !== null) {
    const bang = m[0].startsWith('!');
    refs.push({
      sourceType: bang ? 'markdown-image' : 'markdown-link',
      rawPath: m[2].trim()
    });
  }

  const attrRegex = new RegExp(`\\b(${LINKABLE_ATTRS.join('|')})\\s*=\\s*(?:"([^"]+)"|'([^']+)'|\\{\\s*"([^"]+)"\\s*\\}|\\{\\s*'([^']+)'\\s*\\})`, 'gi');
  while ((m = attrRegex.exec(contentForExtraction)) !== null) {
    const attrName = (m[1] || '').toLowerCase();
    if (EXCLUDED_ATTRS.has(attrName)) continue;
    const rawPath = m[2] || m[3] || m[4] || m[5] || '';
    refs.push({
      sourceType: 'jsx-attr',
      attr: attrName,
      rawPath: rawPath.trim()
    });
  }

  const imports = extractImports(contentForExtraction);
  for (const imp of imports) {
    refs.push({
      sourceType: 'import-path',
      rawPath: String(imp.path || '').trim(),
      line: imp.line
    });
  }

  return refs;
}

function shouldValidateExternalRef(ref, externalLinkTypes) {
  const linkTypes = externalLinkTypes || 'navigational';
  if (linkTypes === 'all') return true;

  if (linkTypes === 'navigational') {
    if (ref.sourceType === 'markdown-link') return true;
    if (ref.sourceType === 'jsx-attr' && NAV_ATTRS.has(String(ref.attr || '').toLowerCase())) return true;
    return false;
  }

  if (linkTypes === 'media') {
    if (ref.sourceType === 'markdown-image') return true;
    if (ref.sourceType === 'jsx-attr' && MEDIA_ATTRS.has(String(ref.attr || '').toLowerCase())) return true;
    return false;
  }

  return false;
}

function analyzeRef(ref, currentFileAbs, repoFiles, routeSet, args) {
  if (ref.sourceType === 'import-path') {
    const importPath = String(ref.rawPath || '').trim();
    const isPackageImport = importPath && !importPath.startsWith('/') && !importPath.startsWith('./') && !importPath.startsWith('../');
    if (isPackageImport) {
      return {
        ...ref,
        linkType: 'import-path',
        resolvedPath: null,
        exists: null,
        status: 'skipped-package-import',
        movedCandidates: []
      };
    }

    if (toPosix(currentFileAbs).endsWith('/style-guide.mdx')) {
      return {
        ...ref,
        linkType: 'import-path',
        resolvedPath: null,
        exists: null,
        status: 'skipped-style-guide-example',
        movedCandidates: []
      };
    }
  }

  const normalizedRaw = normalizeRawPath(ref.rawPath);
  const linkType = ref.sourceType === 'import-path' ? 'import-path' : classifyPath(normalizedRaw);

  if (linkType === 'external-http' || linkType === 'external-https') {
    const normalizedExternalUrl = normalizeExternalUrl(ref.rawPath);
    const eligible = args.externalPolicy === 'validate' && shouldValidateExternalRef(ref, args.externalLinkTypes);

    if (!eligible) {
      return {
        ...ref,
        linkType,
        resolvedPath: null,
        exists: null,
        status: EXTERNAL_UNTESTED,
        movedCandidates: [],
        normalizedExternalUrl,
        externalEligible: false
      };
    }

    if (!normalizedExternalUrl) {
      return {
        ...ref,
        linkType,
        resolvedPath: null,
        exists: null,
        status: EXTERNAL_HARD_FAIL,
        movedCandidates: [],
        normalizedExternalUrl: '',
        externalEligible: true,
        externalError: 'invalid-url'
      };
    }

    return {
      ...ref,
      linkType,
      resolvedPath: normalizedExternalUrl,
      exists: null,
      status: EXTERNAL_PENDING,
      movedCandidates: [],
      normalizedExternalUrl,
      externalEligible: true
    };
  }

  if (['mailto', 'tel', 'javascript', 'data', 'anchor', 'empty'].includes(linkType)) {
    return {
      ...ref,
      linkType,
      resolvedPath: null,
      exists: null,
      status: 'skipped',
      movedCandidates: []
    };
  }

  const targetAbs = resolveInternalPath(normalizedRaw, currentFileAbs);

  if (!targetAbs) {
    return {
      ...ref,
      linkType,
      resolvedPath: null,
      exists: null,
      status: 'skipped',
      movedCandidates: []
    };
  }

  const existing = resolveExistingPath(targetAbs);
  if (existing) {
    if (isRoutableLinkRef(ref)) {
      const existingRelNoExt = relNoExt(existing);
      const isV2DocTarget = isActiveV2DocRel(existingRelNoExt);
      if (isV2DocTarget) {
        const browserRoute = asPageRouteForBrowser(normalizedRaw, currentFileAbs);
        if (hasDocFileExtension(browserRoute)) {
          return {
            ...ref,
            linkType,
            resolvedPath: relFromRoot(existing),
            exists: true,
            status: 'route-missing',
            movedCandidates: []
          };
        }
      }
    }

    return {
      ...ref,
      linkType,
      resolvedPath: relFromRoot(existing),
      exists: true,
      status: 'ok',
      movedCandidates: []
    };
  }

  if (MISSING_LINK_ALLOWLIST.has(normalizedRaw)) {
    return {
      ...ref,
      linkType,
      resolvedPath: relFromRoot(targetAbs),
      exists: false,
      status: 'skipped-allowlisted',
      movedCandidates: []
    };
  }

  if (isRoutableLinkRef(ref)) {
    const browserRoute = asPageRouteForBrowser(normalizedRaw, currentFileAbs);
    if (isKnownDocsFolderRoute(browserRoute, routeSet)) {
      return {
        ...ref,
        linkType,
        resolvedPath: browserRoute,
        exists: true,
        status: 'ok-folder-route',
        movedCandidates: []
      };
    }
  }

  return {
    ...ref,
    linkType,
    resolvedPath: relFromRoot(targetAbs),
    exists: false,
    status: 'missing',
    movedCandidates: findMissingPathCandidates(targetAbs, repoFiles)
  };
}

function discoverMdxImports(startTargets) {
  const visited = new Set();
  const queue = [...startTargets];
  const importGraph = new Map();
  const importedByRoot = new Map();
  const rootFor = new Map();

  for (const root of startTargets) rootFor.set(root, new Set([root]));

  while (queue.length) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    const roots = rootFor.get(current) || new Set([current]);
    const content = loadFile(current);
    const imports = extractImports(content);
    const mdxImports = [];

    for (const imp of imports) {
      const pth = String(imp.path || '').trim();
      if (!pth) continue;
      if (!pth.startsWith('/') && !pth.startsWith('./') && !pth.startsWith('../')) continue;

      const base = resolveInternalPath(pth, current);
      if (!base) continue;

      const resolved = resolveExistingPath(base);
      if (!resolved || !resolved.endsWith('.mdx')) continue;

      const resolvedRel = relFromRoot(resolved);
      if (resolvedRel.startsWith('v2/') && isExcludedV2ExperimentalPath(resolvedRel)) continue;

      mdxImports.push(resolved);
      if (!rootFor.has(resolved)) rootFor.set(resolved, new Set());
      const childRoots = rootFor.get(resolved);
      for (const r of roots) childRoots.add(r);

      if (!visited.has(resolved)) queue.push(resolved);
    }

    importGraph.set(current, mdxImports);
  }

  for (const [file, roots] of rootFor.entries()) {
    for (const root of roots) {
      if (file === root) continue;
      if (!importedByRoot.has(root)) importedByRoot.set(root, new Set());
      importedByRoot.get(root).add(file);
    }
  }

  return { allMdxFiles: Array.from(visited), importGraph, importedByRoot };
}

function domainFromPath(relPath, folderToDomain) {
  if (!isActiveV2DocRel(relPath)) return null;
  const rest = stripV2DocsRoot(relPath);
  const folder = rest.split('/')[0];
  return folderToDomain.get(folder) || readableFromFolder(folder) || 'unknown';
}

function analyzeFiles({ allFiles, rootTargets, importGraph, importedByRoot, structure, folderToDomain, repoFiles, routeSet, args }) {
  const fileResults = new Map();
  const domainLinks = new Map();
  const pageToDomain = new Map();

  for (const f of allFiles) {
    if (path.basename(f).toLowerCase() === 'index.mdx') continue;
    const rel = relFromRoot(f);
    if (rel.startsWith('v2/') && isExcludedV2ExperimentalPath(rel)) continue;
    const isRootPage = isActiveV2DocRel(rel);

    let domains = new Set();
    if (isRootPage) {
      const d = domainFromPath(rel, folderToDomain);
      if (d) domains.add(d);
      pageToDomain.set(rel, d || 'unknown');
    } else {
      for (const root of rootTargets) {
        const imported = importedByRoot.get(root);
        if (imported && imported.has(f)) {
          const d = pageToDomain.get(relFromRoot(root)) || domainFromPath(relFromRoot(root), folderToDomain) || 'unknown';
          domains.add(d);
        }
      }
      if (domains.size === 0) domains.add('unknown');
    }

    const content = loadFile(f);
    const refs = extractRefs(content);
    const analyzed = refs.map((r) => analyzeRef(r, f, repoFiles, routeSet, args));

    const result = {
      file: rel,
      isRootPage,
      domains: Array.from(domains),
      refs: analyzed,
      importedMdx: (importGraph.get(f) || []).map((x) => relFromRoot(x))
    };

    fileResults.set(rel, result);

    for (const d of domains) {
      if (!domainLinks.has(d)) domainLinks.set(d, {});
      domainLinks.get(d)[rel] = analyzed.map((ref) => ({
        sourceType: ref.sourceType,
        linkType: ref.linkType,
        rawPath: ref.rawPath,
        resolvedPath: ref.resolvedPath,
        exists: ref.exists,
        status: ref.status,
        movedCandidates: ref.movedCandidates
      }));
    }
  }

  const topPathSet = new Set();
  for (const top of structure.topLevels) {
    for (const p of top.pathSet) topPathSet.add(p);
  }

  const unindexedByDomain = new Map();
  for (const rel of fileResults.keys()) {
    if (!isActiveV2DocRel(rel)) continue;
    if (topPathSet.has(rel)) continue;
    const domain = domainFromPath(rel, folderToDomain) || 'unknown';
    if (!unindexedByDomain.has(domain)) unindexedByDomain.set(domain, []);
    unindexedByDomain.get(domain).push(rel);
  }

  return { fileResults, domainLinks, unindexedByDomain };
}

function normalizeExternalHost(url) {
  try {
    return new URL(url).host.toLowerCase();
  } catch (_error) {
    return '';
  }
}

function classifyExternalStatus(statusCode) {
  if (!Number.isFinite(statusCode)) return EXTERNAL_HARD_FAIL;
  if (statusCode >= 200 && statusCode < 400) return EXTERNAL_OK;
  if (statusCode === 401 || statusCode === 403 || statusCode === 429 || statusCode >= 500) return EXTERNAL_SOFT_FAIL;
  if (statusCode >= 400) return EXTERNAL_HARD_FAIL;
  return EXTERNAL_HARD_FAIL;
}

function isRetryableExternalError(error) {
  if (!error) return false;
  const code = String(error.code || '').toUpperCase();
  if (code && ['ECONNRESET', 'ECONNREFUSED', 'EHOSTUNREACH', 'ENOTFOUND', 'ETIMEDOUT', 'UND_ERR_CONNECT_TIMEOUT', 'UND_ERR_HEADERS_TIMEOUT', 'UND_ERR_BODY_TIMEOUT'].includes(code)) {
    return true;
  }
  const name = String(error.name || '').toLowerCase();
  if (name === 'aborterror') return true;
  const message = String(error.message || '').toLowerCase();
  return message.includes('timed out') || message.includes('timeout') || message.includes('network');
}

function isRetryableExternalStatus(statusCode) {
  return TRANSIENT_STATUSES.has(statusCode);
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      redirect: 'follow',
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
}

async function requestExternalUrlOnce(url, args) {
  let headResponse = null;
  let getResponse = null;

  try {
    headResponse = await fetchWithTimeout(url, {
      method: 'HEAD',
      headers: {
        'user-agent': 'livepeer-docs-link-audit/1.0'
      }
    }, args.externalTimeoutMs);
  } catch (error) {
    return {
      url,
      finalUrl: '',
      statusCode: null,
      class: EXTERNAL_HARD_FAIL,
      error: error.message || String(error),
      method: 'HEAD',
      retryable: isRetryableExternalError(error)
    };
  }

  if (HEAD_FALLBACK_STATUSES.has(headResponse.status)) {
    try {
      getResponse = await fetchWithTimeout(url, {
        method: 'GET',
        headers: {
          'user-agent': 'livepeer-docs-link-audit/1.0'
        }
      }, args.externalTimeoutMs);
    } catch (error) {
      return {
        url,
        finalUrl: headResponse.url || '',
        statusCode: headResponse.status,
        class: classifyExternalStatus(headResponse.status),
        error: error.message || String(error),
        method: 'GET',
        retryable: isRetryableExternalError(error) || isRetryableExternalStatus(headResponse.status)
      };
    }
  }

  const response = getResponse || headResponse;
  return {
    url,
    finalUrl: response.url || '',
    statusCode: response.status,
    class: classifyExternalStatus(response.status),
    error: '',
    method: getResponse ? 'GET' : 'HEAD',
    retryable: isRetryableExternalStatus(response.status)
  };
}

async function requestExternalUrlWithRetries(url, args) {
  const maxAttempts = Math.max(1, Number(args.externalRetries || 0) + 1);
  let last = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const current = await requestExternalUrlOnce(url, args);
    last = current;
    const shouldRetry = attempt < maxAttempts && current.retryable;
    if (!shouldRetry) {
      return {
        ...current,
        attempts: attempt
      };
    }
  }

  return {
    ...(last || {
      url,
      finalUrl: '',
      statusCode: null,
      class: EXTERNAL_HARD_FAIL,
      error: 'unknown-external-validation-error',
      method: 'HEAD'
    }),
    attempts: maxAttempts
  };
}

async function validateExternalUrls(urls, args) {
  const sorted = [...new Set(urls.filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const queuesByHost = new Map();
  const hostActive = new Map();
  const hosts = [];

  for (const url of sorted) {
    const host = normalizeExternalHost(url) || '(invalid-host)';
    if (!queuesByHost.has(host)) {
      queuesByHost.set(host, []);
      hostActive.set(host, 0);
      hosts.push(host);
    }
    queuesByHost.get(host).push(url);
  }

  const results = new Map();
  if (sorted.length === 0) return results;

  let inFlight = 0;
  let cursor = 0;

  function allQueuesEmpty() {
    for (const host of hosts) {
      if ((queuesByHost.get(host) || []).length > 0) return false;
    }
    return true;
  }

  function nextTask() {
    if (hosts.length === 0) return null;
    for (let offset = 0; offset < hosts.length; offset += 1) {
      const host = hosts[(cursor + offset) % hosts.length];
      const active = hostActive.get(host) || 0;
      if (active >= args.externalPerHostConcurrency) continue;
      const queue = queuesByHost.get(host) || [];
      if (queue.length === 0) continue;
      cursor = (cursor + offset + 1) % hosts.length;
      const url = queue.shift();
      hostActive.set(host, active + 1);
      return { host, url };
    }
    return null;
  }

  return new Promise((resolve) => {
    function schedule() {
      if (allQueuesEmpty() && inFlight === 0) {
        resolve(results);
        return;
      }

      while (inFlight < args.externalConcurrency) {
        const task = nextTask();
        if (!task) break;

        inFlight += 1;
        requestExternalUrlWithRetries(task.url, args)
          .then((result) => {
            results.set(task.url, result);
          })
          .catch((error) => {
            results.set(task.url, {
              url: task.url,
              finalUrl: '',
              statusCode: null,
              class: EXTERNAL_HARD_FAIL,
              error: error.message || String(error),
              method: 'HEAD',
              attempts: Math.max(1, Number(args.externalRetries || 0) + 1)
            });
          })
          .finally(() => {
            inFlight -= 1;
            hostActive.set(task.host, Math.max(0, (hostActive.get(task.host) || 0) - 1));
            schedule();
          });
      }

      if (allQueuesEmpty() && inFlight === 0) {
        resolve(results);
      }
    }

    schedule();
  });
}

function countByStatus(items, selector) {
  const counts = {};
  for (const item of items) {
    const key = selector(item);
    if (!key) continue;
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

async function applyExternalValidation(fileResults, args) {
  const refsByUrl = new Map();
  const invalidUrlRows = new Map();

  let eligibleRefCount = 0;

  for (const file of Array.from(fileResults.keys()).sort()) {
    const result = fileResults.get(file);
    for (const ref of result.refs) {
      if (!(ref.linkType === 'external-http' || ref.linkType === 'external-https')) continue;
      if (!ref.externalEligible) continue;
      eligibleRefCount += 1;

      if (!ref.normalizedExternalUrl) {
        ref.status = EXTERNAL_HARD_FAIL;
        ref.externalError = ref.externalError || 'invalid-url';
        ref.resolvedPath = '';
        const invalidUrlKey = trimRawPath(ref.rawPath) || '(invalid-url)';
        if (!invalidUrlRows.has(invalidUrlKey)) {
          invalidUrlRows.set(invalidUrlKey, {
            url: invalidUrlKey,
            finalUrl: '',
            statusCode: null,
            class: EXTERNAL_HARD_FAIL,
            attempts: 0,
            error: ref.externalError,
            method: 'HEAD',
            host: ''
          });
        }
        continue;
      }

      if (!refsByUrl.has(ref.normalizedExternalUrl)) refsByUrl.set(ref.normalizedExternalUrl, []);
      refsByUrl.get(ref.normalizedExternalUrl).push(ref);
    }
  }

  const validatedMap = await validateExternalUrls(Array.from(refsByUrl.keys()), args);

  for (const [url, refs] of refsByUrl.entries()) {
    const row = validatedMap.get(url) || {
      url,
      finalUrl: '',
      statusCode: null,
      class: EXTERNAL_HARD_FAIL,
      attempts: 0,
      error: 'missing-validation-result',
      method: 'HEAD'
    };

    for (const ref of refs) {
      ref.status = row.class;
      ref.resolvedPath = row.finalUrl || url;
      ref.externalStatusCode = Number.isFinite(row.statusCode) ? row.statusCode : null;
      ref.externalAttempts = row.attempts;
      ref.externalError = row.error || '';
    }
  }

  const urlRows = [];
  for (const [url, row] of validatedMap.entries()) {
    urlRows.push({
      url,
      finalUrl: row.finalUrl || '',
      statusCode: Number.isFinite(row.statusCode) ? row.statusCode : null,
      class: row.class,
      attempts: row.attempts,
      error: row.error || '',
      method: row.method || '',
      host: normalizeExternalHost(row.finalUrl || url)
    });
  }
  urlRows.push(...Array.from(invalidUrlRows.values()).map((row) => ({
    ...row,
    host: row.host || normalizeExternalHost(row.url)
  })));

  urlRows.sort((a, b) => {
    const hostCmp = String(a.host || '').localeCompare(String(b.host || ''));
    if (hostCmp !== 0) return hostCmp;
    return String(a.url || '').localeCompare(String(b.url || ''));
  });

  const refsByFile = [];
  const refRows = [];
  for (const file of Array.from(fileResults.keys()).sort()) {
    const result = fileResults.get(file);
    const externalRefs = result.refs
      .filter((ref) => ref.linkType === 'external-http' || ref.linkType === 'external-https')
      .map((ref) => ({
        sourceType: ref.sourceType,
        attr: ref.attr || '',
        rawPath: ref.rawPath,
        normalizedUrl: ref.normalizedExternalUrl || '',
        status: ref.status,
        statusCode: Number.isFinite(ref.externalStatusCode) ? ref.externalStatusCode : null,
        attempts: Number.isFinite(ref.externalAttempts) ? ref.externalAttempts : null,
        error: ref.externalError || ''
      }));

    if (externalRefs.length > 0) {
      refsByFile.push({ file, refs: externalRefs });
      refRows.push(...externalRefs);
    }
  }

  const failingHosts = new Map();
  for (const row of urlRows) {
    if (row.class === EXTERNAL_OK) continue;
    const host = row.host || '(unknown)';
    const current = failingHosts.get(host) || { host, failures: 0 };
    current.failures += 1;
    failingHosts.set(host, current);
  }

  const topFailingHosts = Array.from(failingHosts.values())
    .sort((a, b) => b.failures - a.failures || a.host.localeCompare(b.host))
    .slice(0, 10);

  const sampleFailures = urlRows
    .filter((row) => row.class !== EXTERNAL_OK)
    .slice(0, 20)
    .map((row) => ({
      url: row.url,
      host: row.host,
      statusCode: row.statusCode,
      class: row.class,
      error: row.error
    }));

  const uniqueHosts = new Set(urlRows.map((row) => row.host).filter(Boolean));

  return {
    policy: args.externalPolicy,
    linkTypes: args.externalLinkTypes,
    timeoutMs: args.externalTimeoutMs,
    concurrency: args.externalConcurrency,
    perHostConcurrency: args.externalPerHostConcurrency,
    retries: args.externalRetries,
    eligibleRefCount,
    uniqueUrlCount: urlRows.length,
    uniqueHostCount: uniqueHosts.size,
    urlClassCounts: countByStatus(urlRows, (row) => row.class),
    refClassCounts: countByStatus(refRows, (row) => row.status),
    urlResults: urlRows,
    refsByFile,
    topFailingHosts,
    sampleFailures
  };
}

function buildClassifyExternalSummary(fileResults, args) {
  const refs = [];
  for (const result of fileResults.values()) {
    for (const ref of result.refs) {
      if (ref.linkType === 'external-http' || ref.linkType === 'external-https') {
        refs.push(ref);
      }
    }
  }

  return {
    policy: args.externalPolicy,
    linkTypes: args.externalLinkTypes,
    timeoutMs: args.externalTimeoutMs,
    concurrency: args.externalConcurrency,
    perHostConcurrency: args.externalPerHostConcurrency,
    retries: args.externalRetries,
    eligibleRefCount: 0,
    uniqueUrlCount: 0,
    uniqueHostCount: 0,
    urlClassCounts: {},
    refClassCounts: countByStatus(refs, (ref) => ref.status),
    urlResults: [],
    refsByFile: [],
    topFailingHosts: [],
    sampleFailures: []
  };
}

function countSummary(fileResults) {
  const linkTypeCounts = {};
  const statusCounts = {};
  let totalRefs = 0;
  let missingCount = 0;

  for (const result of fileResults.values()) {
    for (const ref of result.refs) {
      totalRefs += 1;
      linkTypeCounts[ref.linkType] = (linkTypeCounts[ref.linkType] || 0) + 1;
      statusCounts[ref.status] = (statusCounts[ref.status] || 0) + 1;
      if (ref.status === 'missing' || ref.status === 'route-missing') missingCount += 1;
    }
  }

  return { totalRefs, linkTypeCounts, statusCounts, missingCount };
}

function mdEscape(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function renderGroup(group, lines, indent = '') {
  for (const page of group.pages || []) {
    lines.push(`${indent}- ${page.title} (${page.href})`);
    if (Array.isArray(page.imported) && page.imported.length) {
      for (const imp of page.imported) {
        lines.push(`${indent}  - Imported MDX: ${imp}`);
      }
    }
  }
  for (const sub of group.groups || []) {
    lines.push(`${indent}- ${'#'.repeat(Math.max(2, sub.level))} ${sub.title}`);
    renderGroup(sub, lines, `${indent}  `);
  }
}

function attachImportedToStructure(structure, fileResults) {
  for (const [relPath, meta] of structure.byPath.entries()) {
    const result = fileResults.get(relPath);
    if (!result) continue;
    const imported = result.importedMdx || [];
    meta.pageNode.imported = imported;
  }
}

function renderReport({ args, structure, fileResults, unindexedByDomain, summary, externalValidation }) {
  const lines = [];
  lines.push('# LINK_TEST_REPORT');
  lines.push('');

  if (args.externalPolicy === 'validate') {
    lines.push('Operator note: external HTTP/HTTPS links are validated in advisory mode and classified as `external-ok`, `external-soft-fail`, or `external-hard-fail`.');
  } else {
    lines.push('Operator note: external HTTP/HTTPS links are classified only and marked as `🟡 untested-external` in this phase.');
  }
  lines.push('');

  lines.push('## Run Metadata');
  lines.push(`- Timestamp: ${new Date().toISOString()}`);
  lines.push(`- Mode: ${args.mode}`);
  lines.push(`- Strict: ${args.strict ? 'true' : 'false'} (internal refs only)`);
  lines.push(`- Files analyzed: ${fileResults.size}`);
  lines.push(`- Total extracted references: ${summary.totalRefs}`);
  lines.push(`- Report JSON: ${relFromRoot(args.reportJson)}`);
  lines.push('');

  lines.push('## Summary Counts');
  lines.push('');
  lines.push('### By Link Type');
  lines.push('| linkType | count |');
  lines.push('|---|---:|');
  for (const [k, v] of Object.entries(summary.linkTypeCounts).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`| ${mdEscape(k)} | ${v} |`);
  }
  lines.push('');

  lines.push('### By Status');
  lines.push('| status | count |');
  lines.push('|---|---:|');
  for (const [k, v] of Object.entries(summary.statusCounts).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`| ${mdEscape(k)} | ${v} |`);
  }
  lines.push('');

  lines.push('## External Validation');
  lines.push('');
  lines.push(`- Policy: ${externalValidation.policy}`);
  lines.push(`- Link types: ${externalValidation.linkTypes}`);
  lines.push(`- Timeout (ms): ${externalValidation.timeoutMs}`);
  lines.push(`- Concurrency: ${externalValidation.concurrency}`);
  lines.push(`- Per-host concurrency: ${externalValidation.perHostConcurrency}`);
  lines.push(`- Retries: ${externalValidation.retries}`);
  lines.push(`- Eligible refs: ${externalValidation.eligibleRefCount}`);
  lines.push(`- Unique URLs: ${externalValidation.uniqueUrlCount}`);
  lines.push(`- Unique hosts: ${externalValidation.uniqueHostCount}`);
  lines.push('');

  lines.push('### External URL Classes (Unique URLs)');
  lines.push('| class | count |');
  lines.push('|---|---:|');
  const urlClassEntries = Object.entries(externalValidation.urlClassCounts || {}).sort((a, b) => a[0].localeCompare(b[0]));
  if (!urlClassEntries.length) {
    lines.push('| (none) | 0 |');
  } else {
    for (const [k, v] of urlClassEntries) {
      lines.push(`| ${mdEscape(k)} | ${v} |`);
    }
  }
  lines.push('');

  if (externalValidation.topFailingHosts.length > 0) {
    lines.push('### Top Failing Hosts');
    lines.push('| host | failures |');
    lines.push('|---|---:|');
    externalValidation.topFailingHosts.forEach((item) => {
      lines.push(`| ${mdEscape(item.host)} | ${item.failures} |`);
    });
    lines.push('');
  }

  if (externalValidation.sampleFailures.length > 0) {
    lines.push('### Sample External Failures');
    lines.push('| host | url | statusCode | class | error |');
    lines.push('|---|---|---:|---|---|');
    externalValidation.sampleFailures.forEach((item) => {
      lines.push(`| ${mdEscape(item.host)} | ${mdEscape(item.url)} | ${item.statusCode == null ? '' : item.statusCode} | ${mdEscape(item.class)} | ${mdEscape(item.error || '')} |`);
    });
    lines.push('');
  }

  lines.push('## Hierarchical Inventory');
  for (const top of structure.topLevels) {
    lines.push('');
    lines.push(`### ${top.title}`);

    for (const page of top.pages || []) {
      lines.push(`- ${page.title} (${page.href})`);
      if (Array.isArray(page.imported) && page.imported.length) {
        for (const imp of page.imported) {
          lines.push(`  - Imported MDX: ${imp}`);
        }
      }
    }

    for (const g of top.groups || []) {
      lines.push(`- ${'#'.repeat(Math.max(2, g.level))} ${g.title}`);
      renderGroup(g, lines, '  ');
    }

    const unindexed = unindexedByDomain.get(top.slug) || [];
    lines.push('- Unindexed Pages');
    if (!unindexed.length) {
      lines.push('  - (none)');
    } else {
      for (const p of unindexed.sort()) lines.push(`  - ${p}`);
    }
  }
  lines.push('');

  lines.push('## Per-Page Full Link Lists');
  const sortedFiles = Array.from(fileResults.keys()).sort();
  for (const file of sortedFiles) {
    const result = fileResults.get(file);
    lines.push('');
    lines.push(`### ${file}`);
    lines.push('| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |');
    lines.push('|---|---|---|---|---|---|---|---|');
    for (const ref of result.refs) {
      const c = ref.movedCandidates || [];
      lines.push(`| ${mdEscape(ref.linkType)} | ${mdEscape(ref.rawPath)} | ${mdEscape(ref.resolvedPath || '')} | ${String(ref.exists)} | ${mdEscape(ref.status)} | ${mdEscape(c[0] || '')} | ${mdEscape(c[1] || '')} | ${mdEscape(c[2] || '')} |`);
    }
    if (!result.refs.length) {
      lines.push('| (none) |  |  |  |  |  |  |  |');
    }
  }

  return `${lines.join('\n')}\n`;
}

function buildJsonReport({ args, summary, fileResults, externalValidation }) {
  const perFile = [];
  for (const file of Array.from(fileResults.keys()).sort()) {
    const result = fileResults.get(file);
    perFile.push({
      file: result.file,
      isRootPage: result.isRootPage,
      domains: [...result.domains].sort(),
      importedMdx: [...result.importedMdx].sort(),
      refs: result.refs.map((ref) => ({
        sourceType: ref.sourceType,
        attr: ref.attr || '',
        linkType: ref.linkType,
        rawPath: ref.rawPath,
        resolvedPath: ref.resolvedPath || '',
        exists: ref.exists,
        status: ref.status,
        movedCandidates: Array.isArray(ref.movedCandidates) ? ref.movedCandidates : []
      }))
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    args: {
      mode: args.mode,
      strict: args.strict,
      report: relFromRoot(args.report),
      reportJson: relFromRoot(args.reportJson),
      respectMintIgnore: args.respectMintIgnore,
      writeLinks: args.writeLinks,
      externalPolicy: args.externalPolicy,
      externalLinkTypes: args.externalLinkTypes,
      externalTimeoutMs: args.externalTimeoutMs,
      externalConcurrency: args.externalConcurrency,
      externalPerHostConcurrency: args.externalPerHostConcurrency,
      externalRetries: args.externalRetries,
      files: [...args.files].sort()
    },
    aggregate: {
      filesAnalyzed: fileResults.size,
      totalRefs: summary.totalRefs,
      internalMissingRefs: summary.missingCount,
      linkTypeCounts: Object.fromEntries(Object.entries(summary.linkTypeCounts).sort((a, b) => a[0].localeCompare(b[0]))),
      statusCounts: Object.fromEntries(Object.entries(summary.statusCounts).sort((a, b) => a[0].localeCompare(b[0]))),
      external: {
        policy: externalValidation.policy,
        linkTypes: externalValidation.linkTypes,
        timeoutMs: externalValidation.timeoutMs,
        concurrency: externalValidation.concurrency,
        perHostConcurrency: externalValidation.perHostConcurrency,
        retries: externalValidation.retries,
        eligibleRefCount: externalValidation.eligibleRefCount,
        uniqueUrlCount: externalValidation.uniqueUrlCount,
        uniqueHostCount: externalValidation.uniqueHostCount,
        urlClassCounts: Object.fromEntries(Object.entries(externalValidation.urlClassCounts || {}).sort((a, b) => a[0].localeCompare(b[0]))),
        refClassCounts: Object.fromEntries(Object.entries(externalValidation.refClassCounts || {}).sort((a, b) => a[0].localeCompare(b[0])))
      }
    },
    external: {
      urlResults: externalValidation.urlResults.map((row) => ({
        url: row.url,
        finalUrl: row.finalUrl,
        statusCode: row.statusCode,
        class: row.class,
        attempts: row.attempts,
        error: row.error
      })),
      refsByFile: externalValidation.refsByFile
    },
    files: perFile
  };
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeDomainLinks(domainLinks) {
  const outPaths = [];
  for (const [domain, map] of domainLinks.entries()) {
    const dir = path.join(REPO_ROOT, 'snippets', 'data', domain);
    ensureDir(dir);
    const out = path.join(dir, 'hrefs.jsx');
    const body = `export const LINK_MAP = ${JSON.stringify(map, null, 2)};\n\nexport default LINK_MAP;\n`;
    fs.writeFileSync(out, body, 'utf8');
    outPaths.push(out);
  }
  return outPaths;
}

async function runAudit(options = {}) {
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));

  if (!fs.existsSync(INDEX_PATH)) {
    throw new Error(`Missing required index file: ${relFromRoot(INDEX_PATH)}`);
  }

  const indexContent = loadFile(INDEX_PATH);
  const structure = parseIndexStructure(indexContent);
  const { folderToDomain } = buildDomainMaps(structure);

  const rootTargets = getInitialTargets(args.mode, args.files, {
    respectMintIgnore: args.respectMintIgnore
  });
  if (!rootTargets.length) {
    console.log('No target MDX files found for selected mode.');
    return {
      exitCode: 0,
      args,
      summary: {
        totalRefs: 0,
        linkTypeCounts: {},
        statusCounts: {},
        missingCount: 0
      },
      externalValidation: buildClassifyExternalSummary(new Map(), args),
      reportPath: args.report,
      reportJsonPath: args.reportJson,
      fileCount: 0
    };
  }

  const { allMdxFiles, importGraph, importedByRoot } = discoverMdxImports(rootTargets);
  const repoFiles = listRepoFilesForMoveHints();
  const routeSet = loadRouteSet();

  const { fileResults, domainLinks, unindexedByDomain } = analyzeFiles({
    allFiles: allMdxFiles,
    rootTargets,
    importGraph,
    importedByRoot,
    structure,
    folderToDomain,
    repoFiles,
    routeSet,
    args
  });

  attachImportedToStructure(structure, fileResults);

  const externalValidation = args.externalPolicy === 'validate'
    ? await applyExternalValidation(fileResults, args)
    : buildClassifyExternalSummary(fileResults, args);

  const summary = countSummary(fileResults);
  const report = renderReport({ args, structure, fileResults, unindexedByDomain, summary, externalValidation });
  const jsonReport = buildJsonReport({ args, summary, fileResults, externalValidation });

  ensureDir(path.dirname(args.report));
  fs.writeFileSync(args.report, report, 'utf8');

  ensureDir(path.dirname(args.reportJson));
  fs.writeFileSync(args.reportJson, `${JSON.stringify(jsonReport, null, 2)}\n`, 'utf8');

  let writtenLinks = [];
  if (args.writeLinks) {
    writtenLinks = writeDomainLinks(domainLinks);
  }

  console.log(`📝 Report written: ${relFromRoot(args.report)}`);
  console.log(`🧾 JSON report written: ${relFromRoot(args.reportJson)}`);
  if (writtenLinks.length) {
    console.log(`🔗 Domain link maps written: ${writtenLinks.length}`);
  } else {
    console.log('🔗 Domain link maps not written in this mode.');
  }
  console.log(`📄 Files analyzed: ${fileResults.size}`);
  console.log(`🔍 Total refs: ${summary.totalRefs}`);
  console.log(`❌ Missing refs: ${summary.missingCount}`);
  if (args.externalPolicy === 'validate') {
    console.log(`🌐 External eligible refs: ${externalValidation.eligibleRefCount}`);
    console.log(`🌐 External unique URLs: ${externalValidation.uniqueUrlCount}`);
    console.log(`🌐 External URL classes: ${JSON.stringify(externalValidation.urlClassCounts)}`);
  }

  const exitCode = args.strict && summary.missingCount > 0 ? 1 : 0;

  return {
    exitCode,
    args,
    summary,
    externalValidation,
    reportPath: args.report,
    reportJsonPath: args.reportJson,
    fileCount: fileResults.size,
    writtenLinks
  };
}

if (require.main === module) {
  runAudit({ argv: process.argv.slice(2) })
    .then((out) => process.exit(out.exitCode || 0))
    .catch((error) => {
      console.error(`v2-link-audit failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = {
  DEFAULT_REPORT,
  DEFAULT_REPORT_JSON,
  EXTERNAL_UNTESTED,
  EXTERNAL_OK,
  EXTERNAL_SOFT_FAIL,
  EXTERNAL_HARD_FAIL,
  parseArgs,
  normalizeExternalUrl,
  shouldValidateExternalRef,
  classifyExternalStatus,
  requestExternalUrlWithRetries,
  validateExternalUrls,
  runAudit
};
