#!/usr/bin/env node
/**
 * @script      docs-path-sync
 * @type        
 * @concern     
 * @niche       
 * @purpose     qa:repo-health
 * @description Shared docs path sync library — detects staged page moves, plans deterministic route rewrites, and applies governed docs.json/path reference updates.
 * @mode        read-only
 * @pipeline    manual -- library module
 * @scope       full-repo
 * @usage       const sync = require('./docs-path-sync');
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const DOCS_JSON_REL = 'docs.json';
const DOC_TEXT_SCOPES = ['v2', 'tests', 'tools', 'snippets', 'docs-guide'];
const DOC_TEXT_EXTENSIONS = new Set(['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx', '.json']);
const ALWAYS_CHECK_FILES = ['llms.txt', 'sitemap-ai.xml'];
const DOCS_SITE_URL = 'https://docs.livepeer.org';
const DEFAULT_REMAP_THRESHOLD = 0.85;

function getCleanGitEnv() {
  const env = { ...process.env };
  delete env.GIT_DIR;
  delete env.GIT_WORK_TREE;
  delete env.GIT_INDEX_FILE;
  delete env.GIT_OBJECT_DIRECTORY;
  delete env.GIT_ALTERNATE_OBJECT_DIRECTORIES;
  delete env.GIT_COMMON_DIR;
  delete env.GIT_PREFIX;
  delete env.GIT_AUTHOR_NAME;
  delete env.GIT_AUTHOR_EMAIL;
  delete env.GIT_COMMITTER_NAME;
  delete env.GIT_COMMITTER_EMAIL;
  return env;
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '').trim()).replace(/^\/+/, '');
}

function normalizeRoute(rawValue) {
  let value = String(rawValue || '').trim();
  value = value.replace(/^\/+/, '');
  value = value.replace(/\.(md|mdx)$/i, '');
  value = value.replace(/\/+$/, '');
  return value;
}

function normalizeOrphanRouteKey(rawValue) {
  let value = normalizeRepoPath(rawValue);
  value = value.replace(/\.(md|mdx)$/i, '');
  value = value.replace(/\/index$/i, '');
  value = value.replace(/\/README$/i, '');
  value = value.replace(/\/+$/, '');
  return value;
}

function splitUrlSuffix(rawValue) {
  const value = String(rawValue || '').trim();
  const match = value.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match ? match[1] : value,
    suffix: match && match[2] ? match[2] : ''
  };
}

function decodeRoutePath(rawValue) {
  const value = String(rawValue || '').trim();
  if (!value) return '';
  try {
    return decodeURI(value);
  } catch (_error) {
    return value
      .split('/')
      .map((segment) => {
        try {
          return decodeURIComponent(segment);
        } catch (_innerError) {
          return segment;
        }
      })
      .join('/');
  }
}

function stripSameBasenameLeaf(rawValue) {
  const normalized = normalizeOrphanRouteKey(rawValue);
  const segments = normalized.split('/').filter(Boolean);
  if (
    segments.length >= 2 &&
    segments[segments.length - 1].toLowerCase() === segments[segments.length - 2].toLowerCase()
  ) {
    return segments.slice(0, -1).join('/');
  }
  return normalized;
}

function canonicalRouteFromFile(repoPath) {
  return stripSameBasenameLeaf(repoPath);
}

function encodeRouteForHref(rawRoute, suffix = '') {
  const canonicalRoute = canonicalRouteFromFile(decodeRoutePath(rawRoute));
  if (!canonicalRoute) return String(suffix || '');
  const encodedRoute = canonicalRoute
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `/${encodedRoute}${String(suffix || '')}`;
}

function resolveRelativeRoute(fromRoute, rawTarget, options = {}) {
  const { pathname, suffix } = splitUrlSuffix(rawTarget);
  if (!pathname) return { route: '', suffix };
  const normalizedFrom = options.useRawBase
    ? normalizeRepoPath(decodeRoutePath(fromRoute)).replace(/\.(md|mdx)$/i, '').replace(/\/+$/, '')
    : canonicalRouteFromFile(fromRoute);
  const baseDir = path.posix.dirname(normalizedFrom || '');
  const resolved = pathname.startsWith('/')
    ? pathname.replace(/^\/+/, '')
    : path.posix.normalize(path.posix.join('/', baseDir, pathname)).replace(/^\/+/, '');
  return {
    route: normalizeRepoPath(decodeRoutePath(resolved)),
    suffix
  };
}

function collectPageEntries(node, pointer, out = []) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => collectPageEntries(item, `${pointer}[${index}]`, out));
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node.pages)) {
    node.pages.forEach((entry, index) => {
      const entryPointer = `${pointer}.pages[${index}]`;
      if (typeof entry === 'string') out.push({ value: entry, pointer: entryPointer });
      else collectPageEntries(entry, entryPointer, out);
    });
  }
  Object.entries(node).forEach(([key, value]) => {
    if (key === 'pages') return;
    collectPageEntries(value, `${pointer}.${key}`, out);
  });
  return out;
}

function walkDocsFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkDocsFiles(fullPath, out);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function collectExistingRoutes(repoRoot) {
  const roots = [path.join(repoRoot, 'v1'), path.join(repoRoot, 'v2', 'pages'), path.join(repoRoot, 'v2')];
  const routeSet = new Set();
  roots.forEach((rootPath) => {
    walkDocsFiles(rootPath).forEach((filePath) => {
      const relPath = toPosix(path.relative(repoRoot, filePath));
      const withoutExt = relPath.replace(/\.(md|mdx)$/i, '');
      routeSet.add(withoutExt);
      if (withoutExt.endsWith('/index')) routeSet.add(withoutExt.replace(/\/index$/i, ''));
      if (withoutExt.endsWith('/README')) routeSet.add(withoutExt.replace(/\/README$/i, ''));
    });
  });
  return [...routeSet];
}

function getRouteFileCandidatesDetailed(route) {
  const variants = [];
  const seenVariants = new Set();

  function addVariant(rawValue, source) {
    const normalized = normalizeOrphanRouteKey(rawValue);
    if (!normalized) return;
    const key = `${source}:${normalized}`;
    if (seenVariants.has(key)) return;
    seenVariants.add(key);
    variants.push({ route: normalized, source });
  }

  addVariant(route, 'direct');
  addVariant(decodeRoutePath(route), 'decoded');

  const candidates = [];
  const seenCandidates = new Set();

  function addCandidate(filePath, kind, sourceRoute) {
    const normalized = normalizeRepoPath(filePath);
    if (!normalized || seenCandidates.has(normalized)) return;
    seenCandidates.add(normalized);
    candidates.push({ filePath: normalized, kind, sourceRoute });
  }

  variants.forEach(({ route: variantRoute, source }) => {
    const base = normalizeRepoPath(variantRoute);
    const leaf = path.posix.basename(base);
    const lowerLeaf = leaf.toLowerCase();

    addCandidate(`${base}.mdx`, `${source}:file-mdx`, variantRoute);
    addCandidate(`${base}.md`, `${source}:file-md`, variantRoute);
    addCandidate(`${base}/index.mdx`, `${source}:index-mdx`, variantRoute);
    addCandidate(`${base}/index.md`, `${source}:index-md`, variantRoute);
    addCandidate(`${base}/README.mdx`, `${source}:readme-mdx`, variantRoute);
    addCandidate(`${base}/README.md`, `${source}:readme-md`, variantRoute);

    if (leaf && lowerLeaf !== 'index' && lowerLeaf !== 'readme') {
      addCandidate(`${base}/${leaf}.mdx`, `${source}:same-basename-mdx`, variantRoute);
      addCandidate(`${base}/${leaf}.md`, `${source}:same-basename-md`, variantRoute);
    }
  });

  return candidates;
}

function routeToFileCandidates(route) {
  return getRouteFileCandidatesDetailed(route).map((candidate) => candidate.filePath);
}

function resolveRouteToFileDetailed(repoRoot, route) {
  const candidates = getRouteFileCandidatesDetailed(route);
  for (const candidate of candidates) {
    if (fs.existsSync(path.join(repoRoot, candidate.filePath))) return candidate;
  }
  return null;
}

function resolveRouteToFile(repoRoot, route) {
  const detailed = resolveRouteToFileDetailed(repoRoot, route);
  return detailed ? detailed.filePath : null;
}

function filePathToRoute(repoPath) {
  return normalizeOrphanRouteKey(repoPath);
}

function isDocsPagePath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return /^v[12]\//.test(normalized) && /\.(md|mdx)$/i.test(normalized);
}

function countSharedPrefix(aSegments, bSegments) {
  const max = Math.min(aSegments.length, bSegments.length);
  let count = 0;
  for (let index = 0; index < max; index += 1) {
    if (aSegments[index] !== bSegments[index]) break;
    count += 1;
  }
  return count;
}

function scoreRouteSimilarity(sourceRoute, candidateRoute) {
  const a = normalizeRoute(sourceRoute).split('/').filter(Boolean);
  const b = normalizeRoute(candidateRoute).split('/').filter(Boolean);
  if (a.length === 0 || b.length === 0) return 0;
  const prefix = countSharedPrefix(a, b);
  const maxLen = Math.max(a.length, b.length);
  const aSet = new Set(a);
  const overlap = b.filter((segment) => aSet.has(segment)).length;
  return Number((0.7 * (prefix / maxLen) + 0.3 * (overlap / maxLen)).toFixed(4));
}

function getCanonicalMap(normalizedRoute) {
  const route = normalizeRoute(normalizedRoute);
  const map = {
    'v2/pages/03_developers/building-on-livepeer/index': ['v2/pages/03_developers/developer-portal'],
    'v2/resources/redirect': ['v2/resources/portal'],
    'v2/pages/08_help/redirect': ['v2/pages/08_help/README', 'v2/resources/portal'],
    'v2/pages/08_help/README': ['v2/resources/portal'],
    'v2/resources/changelog/migration-guides': ['v2/resources/changelog/migration-guide'],
    'v2/pages/04_gateways/run-a-gateway/quickstart-a-gateway': ['v2/pages/04_gateways/quickstart/gateway-setup'],
    'v2/pages/04_gateways/run-a-gateway/get-AI-to-setup-the-gateway': ['v2/pages/04_gateways/quickstart/AI-prompt'],
    'v2/pages/04_gateways/references/video-flags': ['v2/pages/04_gateways/references/configuration-flags'],
    'v2/pages/02_community/livepeer-community/media-kit': ['v2/resources/media-kit'],
    'v2/pages/01_about/livepeer-network/actors': ['v2/about/network/actors'],
    'v2/resources/concepts/livepeer-core-concepts': ['v2/about/concepts/core-concepts'],
    'v2/resources/concepts/livepeer-actors': ['v2/about/network/actors'],
    'v2/pages/00_home/changelog/changelog': ['v2/resources/changelog/changelog'],
    'v2/pages/00_home/changelog/migration-guide': ['v2/resources/changelog/migration-guide']
  };
  return map[route] || [];
}

function suggestRemaps(missingRoute, knownRoutes) {
  const normalized = normalizeRoute(missingRoute);
  const knownSet = new Set(knownRoutes.map((route) => normalizeRoute(route)));
  const suggestions = [];
  const seen = new Set();
  function addSuggestion(route, reason, score = null) {
    const normalizedRoute = normalizeRoute(route);
    if (!normalizedRoute || seen.has(normalizedRoute) || !knownSet.has(normalizedRoute)) return;
    seen.add(normalizedRoute);
    suggestions.push({ route: normalizedRoute, reason, score });
  }
  getCanonicalMap(normalized).forEach((candidate) => addSuggestion(candidate, 'canonical remap rule', 1));
  const deDuplicatedSegment = normalized.replace('/setting-up-an-orchestrator/setting-up-an-orchestrator/', '/setting-up-an-orchestrator/');
  if (deDuplicatedSegment !== normalized) addSuggestion(deDuplicatedSegment, 'removed duplicated path segment', 0.92);
  const quickstartRewrite = normalized
    .replace('/run-a-gateway/quickstart-a-gateway', '/quickstart/gateway-setup')
    .replace('/run-a-gateway/get-AI-to-setup-the-gateway', '/quickstart/AI-prompt')
    .replace('/run-a-gateway/quickstart/quickstart-a-gateway', '/quickstart/gateway-setup')
    .replace('/run-a-gateway/quickstart/get-AI-to-setup-the-gateway', '/quickstart/AI-prompt')
    .replace('/changelog/migration-guides', '/changelog/migration-guide')
    .replace('/streamplace-funding', '/streamplace-funding-model')
    .replace('/references/video-flags', '/references/configuration-flags');
  if (quickstartRewrite !== normalized) addSuggestion(quickstartRewrite, 'normalized known route naming pattern', 0.88);
  const leaf = normalized.split('/').filter(Boolean).pop() || '';
  const genericLeafs = new Set(['index', 'README', 'redirect']);
  if (leaf && !genericLeafs.has(leaf)) {
    knownRoutes.filter((route) => normalizeRoute(route).endsWith(`/${leaf}`)).slice(0, 5).forEach((route) => addSuggestion(route, 'same leaf segment match', 0.65));
  }
  knownRoutes
    .map((route) => ({ route: normalizeRoute(route), score: scoreRouteSimilarity(normalized, route) }))
    .filter((item) => item.score >= 0.45)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .forEach((item) => addSuggestion(item.route, 'high path similarity', item.score));
  return suggestions.slice(0, 5);
}

function getHighConfidenceSuggestion(suggestions, threshold = DEFAULT_REMAP_THRESHOLD) {
  if (!Array.isArray(suggestions) || suggestions.length === 0) return null;
  const canonical = suggestions.find((item) => item.reason === 'canonical remap rule');
  if (canonical) return canonical;
  return suggestions.find((item) => typeof item.score === 'number' && item.score >= threshold) || null;
}

function getUniqueHighConfidenceSuggestion(suggestions, options = {}) {
  const threshold = Number.isFinite(options.threshold) ? options.threshold : DEFAULT_REMAP_THRESHOLD;
  const includePrefixes = Array.isArray(options.includePrefixes) ? options.includePrefixes.map((value) => normalizeRoute(value)) : [];
  const excludePrefixes = Array.isArray(options.excludePrefixes) ? options.excludePrefixes.map((value) => normalizeRoute(value)) : [];

  const filtered = (Array.isArray(suggestions) ? suggestions : [])
    .map((item) => ({
      ...item,
      route: normalizeRoute(item.route)
    }))
    .filter((item) => item.route)
    .filter((item) => {
      if (includePrefixes.length > 0 && !includePrefixes.some((prefix) => item.route.startsWith(prefix))) return false;
      if (excludePrefixes.some((prefix) => item.route.startsWith(prefix))) return false;
      return item.reason === 'canonical remap rule' || (typeof item.score === 'number' && item.score >= threshold);
    });

  const unique = [...new Map(filtered.map((item) => [item.route, item])).values()];
  if (unique.length !== 1) return null;
  return unique[0];
}

function classifyResolvedRouteMethod(kind) {
  const normalized = String(kind || '').toLowerCase();
  if (normalized.startsWith('decoded:')) {
    if (normalized.includes('index') || normalized.includes('readme') || normalized.includes('same-basename')) {
      return 'decoded-alias';
    }
    return 'decoded';
  }
  if (normalized.includes('index') || normalized.includes('readme') || normalized.includes('same-basename')) {
    return 'directory-alias';
  }
  return 'direct';
}

function resolveRouteViaRedirects(repoRoot, docsJson, rawRoute) {
  const normalized = normalizeRoute(rawRoute);
  if (!normalized) return null;
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];
  for (const redirect of redirects) {
    if (!redirect || typeof redirect !== 'object') continue;
    if (normalizeRoute(redirect.source) !== normalized) continue;
    const resolved = resolveRouteToFile(repoRoot, redirect.destination);
    if (resolved) return resolved;
  }
  return null;
}

function resolveRouteViaCanonicalMap(repoRoot, rawRoute) {
  const normalized = normalizeRoute(rawRoute);
  if (!normalized) return null;
  for (const candidate of getCanonicalMap(normalized)) {
    const resolved = resolveRouteToFile(repoRoot, candidate);
    if (resolved) return resolved;
  }
  return null;
}

function resolveRouteWithAliases(repoRoot, docsJson, rawRoute) {
  const direct = resolveRouteToFile(repoRoot, rawRoute);
  if (direct) return direct;
  const redirected = resolveRouteViaRedirects(repoRoot, docsJson, rawRoute);
  if (redirected) return redirected;
  return resolveRouteViaCanonicalMap(repoRoot, rawRoute);
}

function resolveCanonicalDocRoute(repoRoot, docsJson, rawRoute) {
  const normalized = normalizeOrphanRouteKey(rawRoute);
  if (!normalized) return null;

  const direct = resolveRouteToFileDetailed(repoRoot, normalized);
  if (direct) {
    return {
      inputRoute: normalized,
      filePath: direct.filePath,
      route: canonicalRouteFromFile(direct.filePath),
      source: 'file',
      kind: direct.kind,
      method: classifyResolvedRouteMethod(direct.kind)
    };
  }

  const redirected = resolveRouteViaRedirects(repoRoot, docsJson, normalized);
  if (redirected) {
    return {
      inputRoute: normalized,
      filePath: redirected,
      route: canonicalRouteFromFile(redirected),
      source: 'redirect',
      kind: 'redirect',
      method: 'redirect'
    };
  }

  const canonical = resolveRouteViaCanonicalMap(repoRoot, normalized);
  if (canonical) {
    return {
      inputRoute: normalized,
      filePath: canonical,
      route: canonicalRouteFromFile(canonical),
      source: 'canonical-map',
      kind: 'canonical-map',
      method: 'canonical-map'
    };
  }

  return null;
}

function pointerToTokens(pointer) {
  const tokens = [];
  const regex = /([^[.\]]+)|\[(\d+)\]/g;
  let match;
  while ((match = regex.exec(pointer)) !== null) {
    if (match[1] !== undefined) tokens.push(match[1]);
    else tokens.push(Number(match[2]));
  }
  return tokens;
}

function setByPointer(root, pointer, value) {
  const tokens = pointerToTokens(pointer);
  if (tokens.length === 0) throw new Error(`Invalid pointer "${pointer}"`);
  let node = root;
  for (let index = 0; index < tokens.length - 1; index += 1) {
    const key = tokens[index];
    if (node == null || !(key in node)) throw new Error(`Pointer segment "${key}" not found for "${pointer}"`);
    node = node[key];
  }
  const finalKey = tokens[tokens.length - 1];
  if (node == null || !(finalKey in node)) throw new Error(`Pointer target "${finalKey}" not found for "${pointer}"`);
  node[finalKey] = value;
}

function parseNameStatusOutput(output) {
  return String(output || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => line.split('\t'));
}

function getGitNameStatus(repoRoot) {
  try {
    return execSync('git diff --cached --name-status -M', {
      cwd: repoRoot,
      encoding: 'utf8',
      env: getCleanGitEnv()
    });
  } catch (_error) {
    return '';
  }
}

function collectStagedDocsMovePairs(repoRoot) {
  const rows = parseNameStatusOutput(getGitNameStatus(repoRoot));
  const directMoves = [];
  const additions = [];
  const deletions = [];
  rows.forEach((parts) => {
    const [status, first, second] = parts;
    if (!status) return;
    if (/^R\d*$/.test(status) && isDocsPagePath(first) && isDocsPagePath(second)) {
      directMoves.push({ type: 'rename', sourcePath: normalizeRepoPath(first), targetPath: normalizeRepoPath(second) });
      return;
    }
    if (status === 'A' && isDocsPagePath(first)) additions.push(normalizeRepoPath(first));
    if (status === 'D' && isDocsPagePath(first)) deletions.push(normalizeRepoPath(first));
  });
  const inferredMoves = [];
  const ambiguous = [];
  const unmatchedAdds = new Set(additions);
  deletions.forEach((deletedPath) => {
    const deletedStem = path.basename(deletedPath, path.extname(deletedPath));
    const matches = additions.filter((addedPath) => path.extname(addedPath).toLowerCase() === path.extname(deletedPath).toLowerCase() && path.basename(addedPath, path.extname(addedPath)) === deletedStem);
    if (matches.length === 1) {
      const targetPath = matches[0];
      unmatchedAdds.delete(targetPath);
      inferredMoves.push({ type: 'inferred', sourcePath: deletedPath, targetPath });
    } else if (matches.length > 1) ambiguous.push({ sourcePath: deletedPath, candidates: matches });
  });
  return {
    pairs: [...directMoves, ...inferredMoves].map((pair) => ({ ...pair, sourceRoute: filePathToRoute(pair.sourcePath), targetRoute: filePathToRoute(pair.targetPath) })),
    ambiguous,
    unmatchedAdds: [...unmatchedAdds]
  };
}

function buildExplicitMovePair(sourcePath, targetPath) {
  const normalizedSource = normalizeRepoPath(sourcePath);
  const normalizedTarget = normalizeRepoPath(targetPath);
  return { type: 'explicit', sourcePath: normalizedSource, targetPath: normalizedTarget, sourceRoute: filePathToRoute(normalizedSource), targetRoute: filePathToRoute(normalizedTarget) };
}

function collectMovePairs(repoRoot, options = {}) {
  const explicitMoves = Array.isArray(options.explicitMoves) ? options.explicitMoves : [];
  if (explicitMoves.length > 0) {
    return { pairs: explicitMoves.map((pair) => buildExplicitMovePair(pair.sourcePath, pair.targetPath)), ambiguous: [], unmatchedAdds: [] };
  }
  return collectStagedDocsMovePairs(repoRoot);
}

function readJson(repoRoot, repoPath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, normalizeRepoPath(repoPath)), 'utf8'));
}

function writeJson(repoRoot, repoPath, value) {
  fs.writeFileSync(path.join(repoRoot, normalizeRepoPath(repoPath)), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function collectScopedTextFiles(repoRoot) {
  const results = [];
  const seen = new Set();
  function walk(absRoot) {
    if (!fs.existsSync(absRoot)) return;
    const entries = fs.readdirSync(absRoot, { withFileTypes: true });
    entries.forEach((entry) => {
      const absPath = path.join(absRoot, entry.name);
      const relPath = normalizeRepoPath(path.relative(repoRoot, absPath));
      if (!relPath || relPath.startsWith('.git/') || relPath.includes('/node_modules/')) return;
      if (entry.isDirectory()) return walk(absPath);
      if (!DOC_TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) || seen.has(relPath)) return;
      seen.add(relPath);
      results.push(relPath);
    });
  }
  DOC_TEXT_SCOPES.forEach((scope) => walk(path.join(repoRoot, scope)));
  if (!seen.has(DOCS_JSON_REL) && fs.existsSync(path.join(repoRoot, DOCS_JSON_REL))) results.push(DOCS_JSON_REL);
  ALWAYS_CHECK_FILES.forEach((specialFile) => {
    if (!seen.has(specialFile) && fs.existsSync(path.join(repoRoot, specialFile))) {
      seen.add(specialFile);
      results.push(specialFile);
    }
  });
  return results.sort((a, b) => a.localeCompare(b));
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildRelativeToken(fromFile, targetPath, { stripExtension = false } = {}) {
  const fromDir = path.posix.dirname(normalizeRepoPath(fromFile));
  let rel = path.posix.relative(fromDir, normalizeRepoPath(targetPath));
  if (!rel) rel = path.posix.basename(normalizeRepoPath(targetPath));
  if (stripExtension) rel = rel.replace(/\.(md|mdx)$/i, '');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

function rewriteQuotedToken(content, oldToken, newToken) {
  const regex = new RegExp(`([\"'\`])${escapeRegExp(oldToken)}((?:[#?][^\"'\`\\\\]*)?)\\1`, 'g');
  return content.replace(regex, (_match, quote, suffix) => `${quote}${newToken}${suffix}${quote}`);
}

function rewriteMarkdownToken(content, oldToken, newToken) {
  const regex = new RegExp(`(\\]\\()${escapeRegExp(oldToken)}((?:[#?][^)\\\\]*)?)(\\))`, 'g');
  return content.replace(regex, (_match, prefix, suffix, close) => `${prefix}${newToken}${suffix}${close}`);
}

function rewriteAngleToken(content, oldToken, newToken) {
  const regex = new RegExp(`(<)${escapeRegExp(oldToken)}((?:[#?][^>\\\\]*)?)(>)`, 'g');
  return content.replace(regex, (_match, open, suffix, close) => `${open}${newToken}${suffix}${close}`);
}

function rewriteXmlValueToken(content, oldToken, newToken) {
  const regex = new RegExp(`(>)${escapeRegExp(oldToken)}((?:[#?][^<]*)?)(<)`, 'g');
  return content.replace(regex, (_match, open, suffix, close) => `${open}${newToken}${suffix}${close}`);
}

function rewriteContentToken(content, oldToken, newToken) {
  if (!oldToken || oldToken === newToken) return content;
  let next = content;
  next = rewriteQuotedToken(next, oldToken, newToken);
  next = rewriteMarkdownToken(next, oldToken, newToken);
  next = rewriteAngleToken(next, oldToken, newToken);
  next = rewriteXmlValueToken(next, oldToken, newToken);
  return next;
}

function buildReplacementTokens(filePath, pair) {
  const oldFile = normalizeRepoPath(pair.sourcePath);
  const newFile = normalizeRepoPath(pair.targetPath);
  const oldRoute = normalizeRoute(pair.sourceRoute);
  const newRoute = normalizeRoute(pair.targetRoute);
  return [
    { oldToken: oldFile, newToken: newFile, reason: 'file-path' },
    { oldToken: oldRoute, newToken: newRoute, reason: 'route' },
    { oldToken: `/${oldRoute}`, newToken: `/${newRoute}`, reason: 'rooted-route' },
    { oldToken: `${DOCS_SITE_URL}/${oldRoute}`, newToken: `${DOCS_SITE_URL}/${newRoute}`, reason: 'full-url' },
    { oldToken: buildRelativeToken(filePath, oldFile), newToken: buildRelativeToken(filePath, newFile), reason: 'relative-file' },
    { oldToken: buildRelativeToken(filePath, oldFile, { stripExtension: true }), newToken: buildRelativeToken(filePath, newFile, { stripExtension: true }), reason: 'relative-route' }
  ].filter((item) => item.oldToken && item.newToken && item.oldToken !== item.newToken);
}

function applyMovePairsToDocsJson(docsJson, pairs) {
  const nextDocsJson = JSON.parse(JSON.stringify(docsJson));
  const changes = [];
  const entries = collectPageEntries(nextDocsJson.navigation || nextDocsJson, 'navigation');
  entries.forEach(({ value, pointer }) => {
    pairs.forEach((pair) => {
      if (normalizeRoute(value) !== normalizeRoute(pair.sourceRoute)) return;
      setByPointer(nextDocsJson, pointer, normalizeRoute(pair.targetRoute));
      changes.push({ file: DOCS_JSON_REL, pointer, from: value, to: normalizeRoute(pair.targetRoute), reason: 'navigation-route' });
    });
  });
  const redirects = Array.isArray(nextDocsJson.redirects) ? nextDocsJson.redirects : [];
  redirects.forEach((redirect, index) => {
    if (!redirect || typeof redirect !== 'object') return;
    pairs.forEach((pair) => {
      if (normalizeRoute(redirect.destination) !== normalizeRoute(pair.sourceRoute)) return;
      const previousDestination = redirect.destination;
      redirect.destination = `/${normalizeRoute(pair.targetRoute)}`;
      changes.push({ file: DOCS_JSON_REL, pointer: `redirects[${index}].destination`, from: previousDestination, to: `/${normalizeRoute(pair.targetRoute)}`, reason: 'redirect-destination' });
    });
  });
  pairs.forEach((pair) => {
    const oldSource = `/${normalizeRoute(pair.sourceRoute)}`;
    const alreadyExists = redirects.some((r) => r && typeof r === 'object' && normalizeRoute(r.source) === normalizeRoute(pair.sourceRoute));
    if (!alreadyExists) {
      const newRedirect = { source: oldSource, destination: `/${normalizeRoute(pair.targetRoute)}` };
      redirects.push(newRedirect);
      changes.push({ file: DOCS_JSON_REL, pointer: `redirects[${redirects.length - 1}]`, from: null, to: JSON.stringify(newRedirect), reason: 'redirect-creation' });
    }
  });
  if (!nextDocsJson.redirects) nextDocsJson.redirects = redirects;
  return { docsJson: nextDocsJson, changes };
}

function applyMovePairsToTextFile(repoRoot, filePath, pairs) {
  const absPath = path.join(repoRoot, filePath);
  if (!fs.existsSync(absPath)) return null;
  const original = fs.readFileSync(absPath, 'utf8');
  let next = original;
  const changes = [];
  pairs.forEach((pair) => {
    buildReplacementTokens(filePath, pair).forEach((token) => {
      const rewritten = rewriteContentToken(next, token.oldToken, token.newToken);
      if (rewritten === next) return;
      next = rewritten;
      changes.push({ file: filePath, from: token.oldToken, to: token.newToken, reason: token.reason, move: `${pair.sourcePath} -> ${pair.targetPath}` });
    });
  });
  if (next === original) return null;
  return { file: filePath, next, changes };
}

function stageRepoFiles(repoRoot, repoPaths) {
  const uniquePaths = [...new Set(repoPaths.map((item) => normalizeRepoPath(item)).filter(Boolean))];
  if (uniquePaths.length === 0) return;
  const result = spawnSync('git', ['add', '--', ...uniquePaths], { cwd: repoRoot, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || 'Failed to stage docs path sync files');
}

function runDocsPathSync(options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const moveResult = collectMovePairs(repoRoot, options);
  const pairs = moveResult.pairs.filter((pair) => pair.sourceRoute && pair.targetRoute && pair.sourceRoute !== pair.targetRoute);
  const result = { repoRoot, mode: options.mode || 'check', pairs, ambiguous: moveResult.ambiguous, unmatchedAdds: moveResult.unmatchedAdds, docsJsonChanges: [], fileChanges: [], changedFiles: [], applied: false };
  if (pairs.length === 0) return result;
  if (fs.existsSync(path.join(repoRoot, DOCS_JSON_REL))) {
    const docsJsonPlan = applyMovePairsToDocsJson(readJson(repoRoot, DOCS_JSON_REL), pairs);
    result.docsJsonChanges = docsJsonPlan.changes;
    if (options.mode === 'write' && docsJsonPlan.changes.length > 0) {
      writeJson(repoRoot, DOCS_JSON_REL, docsJsonPlan.docsJson);
      result.changedFiles.push(DOCS_JSON_REL);
    }
  }
  collectScopedTextFiles(repoRoot).filter((filePath) => filePath !== DOCS_JSON_REL).forEach((filePath) => {
    const filePlan = applyMovePairsToTextFile(repoRoot, filePath, pairs);
    if (!filePlan) return;
    result.fileChanges.push(...filePlan.changes);
    if (options.mode === 'write') {
      fs.writeFileSync(path.join(repoRoot, filePlan.file), filePlan.next, 'utf8');
      result.changedFiles.push(filePlan.file);
    }
  });
  if (options.mode === 'write' && options.stage) stageRepoFiles(repoRoot, result.changedFiles);
  result.applied = options.mode === 'write' && result.changedFiles.length > 0;
  return result;
}

module.exports = {
  DEFAULT_REMAP_THRESHOLD,
  applyMovePairsToDocsJson,
  buildExplicitMovePair,
  canonicalRouteFromFile,
  collectExistingRoutes,
  collectMovePairs,
  collectPageEntries,
  decodeRoutePath,
  encodeRouteForHref,
  filePathToRoute,
  getCanonicalMap,
  getHighConfidenceSuggestion,
  getUniqueHighConfidenceSuggestion,
  getRepoRoot,
  normalizeOrphanRouteKey,
  normalizeRepoPath,
  normalizeRoute,
  resolveCanonicalDocRoute,
  resolveRelativeRoute,
  resolveRouteToFile,
  resolveRouteToFileDetailed,
  resolveRouteWithAliases,
  runDocsPathSync,
  setByPointer,
  splitUrlSuffix,
  suggestRemaps,
  toPosix
};
