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

function isExcludedV2ExperimentalPath(relPath) {
  const rel = toPosix(relPath).replace(/^\/+/, '');
  if (!rel.startsWith('v2/')) return false;
  return rel
    .split('/')
    .some((segment) => segment.toLowerCase().startsWith('x-'));
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
  return getFiles(componentsDir, /\.jsx$/, { rootDir: repoRoot, respectMintIgnore });
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
    : walkDocsContentFiles(path.join(repoRoot, 'v2'));

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
  toDocsRouteKeyFromFile,
  toDocsRouteKeyFromFileV2Aware,
  isExcludedV2ExperimentalPath,
  filterPathsByMintIgnore,
  readFile
};
