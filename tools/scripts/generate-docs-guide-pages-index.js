#!/usr/bin/env node
/**
 * @script            generate-docs-guide-pages-index
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, docs-guide/indexes/pages-index.mdx, v2/index.mdx, docs.json
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Generates the docs-guide pages index
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/generate-docs-guide-pages-index.js [flags]
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = process.cwd();
const SOURCE_INDEX_PATH = 'v2/index.mdx';
const DOCS_JSON_PATH = 'docs.json';
const OUTPUT_PATH = 'docs-guide/indexes/pages-index.mdx';

const FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Pages Index',
  sidebarTitle: 'Pages Index',
  description: 'Tree inventory of docs pages included in docs.json navigation, generated from v2 index data.',
  keywords: ['livepeer', 'pages index', 'tree', 'docs.json', 'v2']
});

const GENERATED_DETAILS = {
  script: 'tools/scripts/generate-docs-guide-pages-index.js',
  purpose: 'Tree inventory of docs pages included in docs.json navigation, generated from v2 index data.',
  runWhen: '`v2/index.mdx` links or docs.json navigation entries change.',
  runCommand: 'node tools/scripts/generate-docs-guide-pages-index.js --write'
};

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/').replace(/^\.?\//, '');
}

function normalizeRouteKey(routePath) {
  let normalized = normalizeRepoPath(routePath).replace(/^\/+/, '');
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function sortAlpha(values) {
  return [...values].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function fileExists(repoPath) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
}

function collectDocsPageEntries(node, out = []) {
  if (typeof node === 'string') {
    const value = node.trim();
    if (value.startsWith('v1/') || value.startsWith('v2/')) {
      out.push(value);
    }
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectDocsPageEntries(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') return out;

  Object.values(node).forEach((value) => collectDocsPageEntries(value, out));
  return out;
}

function getDocsJsonRouteKeys() {
  const raw = readFileSafe(DOCS_JSON_PATH);
  if (!raw.trim()) {
    throw new Error(`Missing or empty ${DOCS_JSON_PATH}`);
  }

  const docsJson = JSON.parse(raw);
  const entries = collectDocsPageEntries(docsJson, []);
  const keys = new Set();
  entries.forEach((entry) => {
    const key = normalizeRouteKey(entry);
    if (key) keys.add(key);
  });
  return keys;
}

function isExternalHref(href) {
  return /^(https?:\/\/|mailto:|#|\/)/i.test(String(href || '').trim());
}

function cleanHref(href) {
  return String(href || '').split('#')[0].split('?')[0].trim();
}

function parseV2IndexLinks() {
  const content = readFileSafe(SOURCE_INDEX_PATH);
  if (!content.trim()) {
    throw new Error(`Missing or empty ${SOURCE_INDEX_PATH}`);
  }

  const links = [];
  const lines = content.split('\n');
  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    const match = line.match(/^- \[(.+?)\]\((.+?)\)$/);
    if (!match) return;
    const title = String(match[1] || '').trim();
    const href = cleanHref(match[2]);
    if (!href) return;
    if (title.includes('⚠️')) return;
    if (isExternalHref(href)) return;
    links.push(href);
  });

  return [...new Set(links)];
}

function resolveRepoPathFromHref(href) {
  const sourceDir = path.posix.dirname(SOURCE_INDEX_PATH);
  const cleanedHref = cleanHref(href);
  if (!cleanedHref) return '';

  const joined = normalizeRepoPath(path.posix.normalize(path.posix.join(sourceDir, cleanedHref)));
  if (!joined || joined.startsWith('..') || joined.includes('/../')) return '';

  const hasExtension = /\.(md|mdx)$/i.test(joined);
  const candidates = hasExtension
    ? [joined]
    : [`${joined}.mdx`, `${joined}.md`, path.posix.join(joined, 'index.mdx'), path.posix.join(joined, 'index.md')];

  for (const candidate of candidates) {
    const normalizedCandidate = normalizeRepoPath(candidate);
    if (!normalizedCandidate.startsWith('v2/')) continue;
    if (fileExists(normalizedCandidate)) return normalizedCandidate;
  }

  return '';
}

function buildTree(paths) {
  const root = { name: 'v2', folders: new Map(), files: new Set() };

  sortAlpha(paths).forEach((repoPath) => {
    const segments = normalizeRepoPath(repoPath).split('/').filter(Boolean);
    if (segments.length < 2 || segments[0] !== 'v2') return;

    let current = root;
    for (let i = 1; i < segments.length - 1; i += 1) {
      const folderName = segments[i];
      if (!current.folders.has(folderName)) {
        current.folders.set(folderName, { name: folderName, folders: new Map(), files: new Set() });
      }
      current = current.folders.get(folderName);
    }

    current.files.add(segments[segments.length - 1]);
  });

  return root;
}

function escapeJsxAttribute(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function renderTreeFolder(node, indent, defaultOpen = false) {
  const attrs = [`name="${escapeJsxAttribute(node.name)}"`];
  if (defaultOpen) attrs.push('defaultOpen');

  const lines = [`${indent}<Tree.Folder ${attrs.join(' ')}>`];
  const folderNames = sortAlpha([...node.folders.keys()]);
  const fileNames = sortAlpha([...node.files]);

  folderNames.forEach((folderName) => {
    lines.push(...renderTreeFolder(node.folders.get(folderName), `${indent}  `, false));
  });

  fileNames.forEach((fileName) => {
    lines.push(`${indent}  <Tree.File name="${escapeJsxAttribute(fileName)}" />`);
  });

  lines.push(`${indent}</Tree.Folder>`);
  return lines;
}

function renderTree(paths) {
  const tree = buildTree(paths);
  const lines = ['<Tree>'];

  const hasChildren = tree.folders.size > 0 || tree.files.size > 0;
  if (!hasChildren) {
    lines.push('  <Tree.Folder name="v2" defaultOpen />');
  } else {
    lines.push(...renderTreeFolder(tree, '  ', true));
  }

  lines.push('</Tree>');
  return lines;
}

function buildContent() {
  const docsRouteKeys = getDocsJsonRouteKeys();
  const sourceLinks = parseV2IndexLinks();
  const includedFiles = [];

  sourceLinks.forEach((href) => {
    const repoPath = resolveRepoPathFromHref(href);
    if (!repoPath) return;
    const routeKey = normalizeRouteKey(repoPath);
    if (!routeKey || !docsRouteKeys.has(routeKey)) return;
    includedFiles.push(repoPath);
  });

  const uniqueIncluded = [...new Set(includedFiles)];
  const lines = [
    ...FRONTMATTER_LINES,
    '',
    ...buildGeneratedHiddenBannerLines(GENERATED_DETAILS),
    '',
    ...buildGeneratedNoteLines(GENERATED_DETAILS),
    '',
    ...renderTree(uniqueIncluded)
  ];
  return `${lines.join('\n').trimEnd()}\n`;
}

function writeIfChanged(repoPath, nextContent, shouldWrite) {
  const current = readFileSafe(repoPath);
  const changed = current !== nextContent;
  if (changed && shouldWrite) {
    fs.mkdirSync(path.dirname(path.join(REPO_ROOT, repoPath)), { recursive: true });
    fs.writeFileSync(path.join(REPO_ROOT, repoPath), nextContent, 'utf8');
  }
  return { changed, path: repoPath };
}

function parseArgs(argv) {
  const check = argv.includes('--check');
  const write = argv.includes('--write') || !check;
  return { check, write };
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  let content = '';
  try {
    content = buildContent();
  } catch (error) {
    console.error(`Failed to generate ${OUTPUT_PATH}: ${error.message}`);
    process.exit(1);
  }

  const result = writeIfChanged(OUTPUT_PATH, content, args.write);

  if (args.check) {
    if (result.changed) {
      console.error(`Docs-guide pages index is out of date: ${result.path}`);
      console.error('Run: node tools/scripts/generate-docs-guide-pages-index.js --write');
      process.exit(1);
    }
    console.log('Docs-guide pages index is up to date.');
    return;
  }

  if (result.changed) {
    console.log(`Updated ${result.path}`);
  } else {
    console.log('No changes. Docs-guide pages index already current.');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildContent
};
