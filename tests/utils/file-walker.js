#!/usr/bin/env node
/**
 * @script            file-walker
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tests
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators.
 * @pipeline          indirect — library module
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/utils/file-walker.js [flags]
 */
/**
 * File traversal utilities for testing
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { filterPathsByMintIgnore } = require('./mintignore');
const { isExcludedV2ExperimentalPath } = require('../../tools/lib/docs-publishability');
const { filterAuthoredDocsPageFiles } = require('../../tools/lib/docs-page-scope');

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function getRepoRoot(rootDir = process.cwd()) {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      cwd: rootDir
    }).trim();
  } catch (_error) {
    return rootDir;
  }
}

function resolveRepoRoot(rootDir = null) {
  return getRepoRoot(rootDir || process.cwd());
}

function normalizeDocsRouteKey(routePath) {
  let normalized = toPosix(routePath).trim();
  normalized = normalized.replace(/^\/+/, '');
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function collectDocsPageEntries(node, out = []) {
  if (typeof node === 'string') {
    const value = node.trim();
    const normalizedValue = value.replace(/^\/+/, '');
    if (normalizedValue.startsWith('v1/')) {
      out.push(normalizedValue);
    } else if (
      normalizedValue.startsWith('v2/') &&
      !isExcludedV2ExperimentalPath(normalizedValue)
    ) {
      out.push(normalizedValue);
    }
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectDocsPageEntries(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectDocsPageEntries(item, out));
  }

  Object.values(node).forEach((value) => collectDocsPageEntries(value, out));
  return out;
}

function getDocsJsonRouteKeys(rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  if (!fs.existsSync(docsJsonPath)) {
    return new Set();
  }

  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  const versions = docsJson?.navigation?.versions || [];
  const entries = [];

  versions.forEach((versionNode) => {
    if (versionNode?.languages) {
      collectDocsPageEntries(versionNode.languages, entries);
    }
  });

  const keys = new Set();
  entries.forEach((entry) => {
    const key = normalizeDocsRouteKey(entry);
    if (key) {
      keys.add(key);
    }
  });
  return keys;
}

function loadDocsJson(rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  if (!fs.existsSync(docsJsonPath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
}

function getDocsJsonVersionNode(docsJson, version = 'v2') {
  const versions = Array.isArray(docsJson?.navigation?.versions) ? docsJson.navigation.versions : [];
  return versions.find((node) => String(node?.version || '').trim() === String(version || '').trim()) || null;
}

function getDocsJsonLanguageNode(rootDir = null, options = {}) {
  const { version = 'v2', language = 'en' } = options;
  const docsJson = loadDocsJson(rootDir);
  const versionNode = getDocsJsonVersionNode(docsJson, version);
  const languages = Array.isArray(versionNode?.languages) ? versionNode.languages : [];
  const normalizedLanguage = String(language || 'en').trim().toLowerCase();
  return (
    languages.find((node) => String(node?.language || '').trim().toLowerCase() === normalizedLanguage) ||
    languages[0] ||
    null
  );
}

function dedupeNormalizedRoutes(entries) {
  const seen = new Set();
  const routes = [];
  entries.forEach((entry) => {
    const key = normalizeDocsRouteKey(entry);
    if (!key || seen.has(key)) return;
    seen.add(key);
    routes.push(key);
  });
  return routes;
}

function getDocsJsonTabNode(tabName, rootDir = null, options = {}) {
  const languageNode = getDocsJsonLanguageNode(rootDir, options);
  const tabs = Array.isArray(languageNode?.tabs) ? languageNode.tabs : [];
  const normalizedTab = String(tabName || '').trim();
  return tabs.find((node) => String(node?.tab || '').trim() === normalizedTab) || null;
}

function getDocsJsonTabRouteKeys(tabName, rootDir = null, options = {}) {
  const tabNode = getDocsJsonTabNode(tabName, rootDir, options);
  if (!tabNode) return [];
  return dedupeNormalizedRoutes(collectDocsPageEntries(tabNode, []));
}

function getDocsJsonGroupNode(config = {}) {
  const { tab, anchor = '', group = '', rootDir = null } = config;
  const tabNode = getDocsJsonTabNode(tab, rootDir, config);
  if (!tabNode) return null;

  const anchors = Array.isArray(tabNode.anchors) ? tabNode.anchors : [];
  const normalizedAnchor = String(anchor || '').trim();
  const anchorNodes = normalizedAnchor
    ? anchors.filter((node) => String(node?.anchor || '').trim() === normalizedAnchor)
    : anchors;

  for (const anchorNode of anchorNodes) {
    const groups = Array.isArray(anchorNode?.groups) ? anchorNode.groups : [];
    const match = groups.find((node) => String(node?.group || '').trim() === String(group || '').trim());
    if (match) return match;
  }

  return null;
}

function getDocsJsonGroupRouteKeys(config = {}) {
  const groupNode = getDocsJsonGroupNode(config);
  if (!groupNode) return [];
  return dedupeNormalizedRoutes(collectDocsPageEntries(groupNode, []));
}

function resolveDocsRouteToFile(routeKey, rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const route = normalizeDocsRouteKey(routeKey);
  const candidates = [
    `${route}.mdx`,
    `${route}.md`,
    `${route}/index.mdx`,
    `${route}/index.md`,
    `${route}/README.mdx`,
    `${route}/README.md`
  ];

  for (const relPath of candidates) {
    const absPath = path.join(repoRoot, relPath);
    if (fs.existsSync(absPath)) {
      return absPath;
    }
  }

  return null;
}

function getDocsJsonTabFiles(tabName, rootDir = null, options = {}) {
  return getDocsJsonTabRouteKeys(tabName, rootDir, options)
    .map((routeKey) => resolveDocsRouteToFile(routeKey, rootDir))
    .filter(Boolean);
}

function getAuthoredDocsJsonTabFiles(tabName, rootDir = null, options = {}) {
  return filterAuthoredDocsPageFiles(getDocsJsonTabFiles(tabName, rootDir, options));
}

function getDocsJsonGroupFiles(config = {}) {
  return getDocsJsonGroupRouteKeys(config)
    .map((routeKey) => resolveDocsRouteToFile(routeKey, config.rootDir))
    .filter(Boolean);
}

function getAuthoredDocsJsonGroupFiles(config = {}) {
  return filterAuthoredDocsPageFiles(getDocsJsonGroupFiles(config));
}

function toDocsRouteKeyFromFile(filePath, rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(repoRoot, filePath);
  const relPath = toPosix(path.relative(repoRoot, absPath));
  if (!(relPath.startsWith('v1/') || relPath.startsWith('v2/'))) {
    return '';
  }
  if (relPath.startsWith('v2/') && isExcludedV2ExperimentalPath(relPath)) {
    return '';
  }
  return normalizeDocsRouteKey(relPath);
}

function toDocsRouteKeyFromFileV2Aware(filePath, rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(repoRoot, filePath);
  const relPath = toPosix(path.relative(repoRoot, absPath));
  if (!(relPath.startsWith('v1/') || relPath.startsWith('v2/'))) {
    return '';
  }
  if (relPath.startsWith('v2/') && isExcludedV2ExperimentalPath(relPath)) {
    return '';
  }
  return normalizeDocsRouteKey(relPath);
}

function collectFiles(dir, pattern, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (!file.startsWith('.') && file !== 'node_modules') {
        collectFiles(filePath, pattern, fileList);
      }
    } else if (pattern.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function getTrackedFiles(repoRelDir, rootDir = null) {
  const repoRoot = resolveRepoRoot(rootDir);
  const scope = toPosix(path.relative(repoRoot, path.resolve(repoRoot, repoRelDir)));

  try {
    const output = execSync(`git ls-files -- "${scope}"`, {
      encoding: 'utf8',
      cwd: repoRoot
    });

    return output
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => path.resolve(repoRoot, line))
      .filter((filePath) => fs.existsSync(filePath));
  } catch (_error) {
    return [];
  }
}

/**
 * Recursively get all files matching a pattern
 */
function getFiles(dir, pattern, options = {}) {
  const { rootDir = null, respectMintIgnore = true } = options;
  const repoRoot = resolveRepoRoot(rootDir || dir);
  const files = collectFiles(dir, pattern, []);
  return filterPathsByMintIgnore(files, { rootDir: repoRoot, respectMintIgnore });
}

/**
 * Get all routable MDX files in v2
 */
function getMdxFiles(rootDir = null, options = {}) {
  const { respectMintIgnore = true } = options;
  const repoRoot = resolveRepoRoot(rootDir);
  const docsRouteKeys = getDocsJsonRouteKeys(repoRoot);
  const v2DocsFiles = getV2DocsFiles({ rootDir: repoRoot, respectMintIgnore });
  const mdxFiles = v2DocsFiles.filter((filePath) => filePath.endsWith('.mdx'));

  if (docsRouteKeys.size === 0) {
    return mdxFiles;
  }

  return mdxFiles.filter((filePath) => {
    const key = toDocsRouteKeyFromFileV2Aware(filePath, repoRoot);
    return key && docsRouteKeys.has(key);
  });
}

function getAuthoredMdxFiles(rootDir = null, options = {}) {
  return filterAuthoredDocsPageFiles(getMdxFiles(rootDir, options));
}

/**
 * Get all JSX files in snippets/components
 */
function getJsxFiles(rootDir = null, options = {}) {
  const { respectMintIgnore = true } = options;
  const repoRoot = resolveRepoRoot(rootDir);
  const componentsDir = path.join(repoRoot, 'snippets', 'components');
  if (!fs.existsSync(componentsDir)) {
    return [];
  }
  const trackedFiles = getTrackedFiles('snippets/components', repoRoot);
  const files = trackedFiles.length
    ? trackedFiles.filter((filePath) => /\.jsx$/i.test(filePath))
    : getFiles(componentsDir, /\.jsx$/, { rootDir: repoRoot, respectMintIgnore });
  return filterPathsByMintIgnore(files, { rootDir: repoRoot, respectMintIgnore });
}

/**
 * Get staged files from git
 * Returns absolute paths relative to repo root (not cwd)
 */
function getStagedFiles(rootDir = null) {
  try {
    // Get repo root directory (where .git is)
    const repoRoot = resolveRepoRoot(rootDir);
    
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      encoding: 'utf8',
      cwd: repoRoot
    });
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => path.resolve(repoRoot, line));
  } catch (error) {
    return [];
  }
}

function getStagedDocsPageFiles(rootDir = null, options = {}) {
  const { respectMintIgnore = true } = options;
  const repoRoot = resolveRepoRoot(rootDir);
  const docsRouteKeys = getDocsJsonRouteKeys(repoRoot);
  if (docsRouteKeys.size === 0) {
    return [];
  }

  const stagedFiles = filterPathsByMintIgnore(getStagedFiles(repoRoot), {
    rootDir: repoRoot,
    respectMintIgnore
  });
  return stagedFiles.filter((filePath) => {
    const key = toDocsRouteKeyFromFile(filePath, repoRoot);
    return key && docsRouteKeys.has(key);
  });
}

function getStagedAuthoredDocsPageFiles(rootDir = null, options = {}) {
  return filterAuthoredDocsPageFiles(getStagedDocsPageFiles(rootDir, options));
}

function walkDocsContentFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkDocsContentFiles(fullPath, out);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function getV2DocsFiles(options = {}) {
  const { rootDir = null, stagedOnly = false, respectMintIgnore = true } = options;
  const repoRoot = resolveRepoRoot(rootDir);

  const files = stagedOnly
    ? getStagedFiles(repoRoot)
    : (() => {
        const trackedFiles = getTrackedFiles('v2', repoRoot);
        if (trackedFiles.length > 0) {
          return trackedFiles;
        }
        return walkDocsContentFiles(path.join(repoRoot, 'v2'));
      })();

  return filterPathsByMintIgnore(files, { rootDir: repoRoot, respectMintIgnore })
    .filter((filePath) => /\.(md|mdx)$/i.test(filePath))
    .filter((filePath) => {
      const rel = toPosix(path.relative(repoRoot, filePath));
      return rel.startsWith('v2/') && !isExcludedV2ExperimentalPath(rel);
    })
    .sort((a, b) => toPosix(a).localeCompare(toPosix(b)));
}

/**
 * Read file content
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

module.exports = {
  getFiles,
  getMdxFiles,
  getJsxFiles,
  getStagedFiles,
  getStagedDocsPageFiles,
  getV2DocsFiles,
  getDocsJsonRouteKeys,
  getDocsJsonTabRouteKeys,
  getDocsJsonGroupRouteKeys,
  getDocsJsonTabFiles,
  getAuthoredDocsJsonTabFiles,
  getDocsJsonGroupFiles,
  getAuthoredDocsJsonGroupFiles,
  resolveDocsRouteToFile,
  toDocsRouteKeyFromFile,
  toDocsRouteKeyFromFileV2Aware,
  isExcludedV2ExperimentalPath,
  filterPathsByMintIgnore,
  getAuthoredMdxFiles,
  getStagedAuthoredDocsPageFiles,
  readFile
};
