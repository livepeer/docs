/**
 * @script path-utils
 * @summary Utility script for tools/scripts/i18n/lib/path-utils.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/path-utils.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/lib/path-utils.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const fs = require('fs');
const path = require('path');
const { normalizeRepoRel, toPosix, isExternalHref } = require('./common');

function normalizeRouteKey(value) {
  let normalized = String(value || '').trim();
  normalized = normalized.replace(/^\/+/, '');
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function routeToFileCandidates(routeValue) {
  const route = normalizeRouteKey(routeValue);
  if (!route) return [];
  return [
    `${route}.mdx`,
    `${route}.md`,
    `${route}/index.mdx`,
    `${route}/index.md`,
    `${route}/README.mdx`,
    `${route}/README.md`
  ];
}

function resolveRouteToFile(repoRoot, routeValue) {
  for (const candidate of routeToFileCandidates(routeValue)) {
    const abs = path.join(repoRoot, candidate);
    if (fs.existsSync(abs)) return normalizeRepoRel(candidate);
  }
  return '';
}

function fileToRouteKey(repoRoot, filePath) {
  const rel = normalizeRepoRel(path.relative(repoRoot, filePath));
  return normalizeRouteKey(rel);
}

function resolveLocalizedPathStyle(generatedRoot, generatedPathStyle) {
  const explicit = String(generatedPathStyle || '').trim();
  if (explicit) return explicit;
  return normalizeRepoRel(generatedRoot) === 'v2' ? 'v2_language_prefix' : 'v2_i18n_legacy';
}

function repoFileRelToLocalizedFileRel(sourceRepoFileRel, language, generatedRoot = 'v2/i18n', generatedPathStyle = '') {
  const normalized = normalizeRepoRel(sourceRepoFileRel);
  const suffix = normalized.startsWith('v2/') ? normalized.slice('v2/'.length) : normalized;
  const style = resolveLocalizedPathStyle(generatedRoot, generatedPathStyle);
  if (style === 'v2_language_prefix') {
    return normalizeRepoRel(path.posix.join('v2', language, suffix));
  }
  return normalizeRepoRel(path.posix.join(generatedRoot, language, suffix));
}

function repoRouteToLocalizedRoute(sourceRoute, language, generatedRoot = 'v2/i18n', generatedPathStyle = '') {
  const route = normalizeRouteKey(sourceRoute);
  if (!route.startsWith('v2/')) return route;
  const suffix = route.slice('v2/'.length);
  const style = resolveLocalizedPathStyle(generatedRoot, generatedPathStyle);
  if (style === 'v2_language_prefix') {
    return normalizeRepoRel(path.posix.join('v2', language, suffix));
  }
  return normalizeRepoRel(path.posix.join(generatedRoot, language, suffix));
}

function routeStringLooksInternalDocs(routeValue) {
  const trimmed = String(routeValue || '').trim();
  if (!trimmed) return false;
  if (trimmed === ' ') return false;
  if (isExternalHref(trimmed)) return false;
  return /^v\d+\//i.test(trimmed) || trimmed.startsWith('/');
}

module.exports = {
  fileToRouteKey,
  normalizeRouteKey,
  repoFileRelToLocalizedFileRel,
  repoRouteToLocalizedRoute,
  resolveLocalizedPathStyle,
  resolveRouteToFile,
  routeStringLooksInternalDocs
};
