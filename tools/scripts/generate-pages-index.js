#!/usr/bin/env node
/**
 * @script            generate-pages-index
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, v2
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index
 * @pipeline          P1
 * @dualmode          --check (enforcer) | --write (generator)
 * @usage             node tools/scripts/generate-pages-index.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const LEGACY_PAGES_ROOT = 'v2/pages';
const MODERN_PAGES_ROOT = 'v2';
const INDEX_FILENAME = 'index.mdx';
const LEGACY_INDEX_FILENAME = 'index.md';
const DOCS_JSON_FILENAME = 'docs.json';

const DOMAIN_RENAME_MAP = {
  '00_home': 'home',
  '010_products': 'solutions',
  '01_about': 'about',
  '02_community': 'community',
  '03_developers': 'developers',
  '04_gateways': 'gateways',
  '05_orchestrators': 'orchestrators',
  '06_lptoken': 'lpt',
  '07_resources': 'resources',
  '09_internal': 'internal',
  deprecated: 'deprecated',
  experimental: 'experimental',
  notes: 'notes'
};

const DOMAIN_REVERSE_MAP = Object.fromEntries(
  Object.entries(DOMAIN_RENAME_MAP).map(([legacy, modern]) => [modern, legacy])
);

const GENERATED_DETAILS = {
  script: 'tools/scripts/generate-pages-index.js',
  purpose: 'Table-of-contents index for v2 docs folders.',
  runWhen: 'v2 docs pages are added, removed, or renamed.',
  runCommand: 'node tools/scripts/generate-pages-index.js --write'
};

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_err) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();
const PAGES_ROOT = fileExists(path.join(REPO_ROOT, LEGACY_PAGES_ROOT))
  ? LEGACY_PAGES_ROOT
  : MODERN_PAGES_ROOT;
const PAGES_ROOT_ABS = path.join(REPO_ROOT, PAGES_ROOT);

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function normalizeRel(relPath) {
  return toPosix(relPath).replace(/^\.\//, '').replace(/^\//, '');
}

function normalizeHref(relPath) {
  return normalizeRel(path.posix.normalize(String(relPath || '')));
}

function mapLegacyRepoPathToModern(repoRelPath) {
  const normalized = normalizeRel(repoRelPath);
  if (!normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/pages/'.length);
  const [legacyDomain, ...tail] = rest.split('/').filter(Boolean);
  const modernDomain = DOMAIN_RENAME_MAP[legacyDomain] || legacyDomain;
  return normalizeRel(path.posix.join('v2', modernDomain, ...tail));
}

function mapModernRepoPathToLegacy(repoRelPath) {
  const normalized = normalizeRel(repoRelPath);
  if (!normalized.startsWith('v2/') || normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/'.length);
  const [modernDomain, ...tail] = rest.split('/').filter(Boolean);
  const legacyDomain = DOMAIN_REVERSE_MAP[modernDomain];
  if (!legacyDomain) return normalized;
  return normalizeRel(path.posix.join('v2/pages', legacyDomain, ...tail));
}

function resolvePreferredRepoPath(repoRelPath) {
  const normalized = normalizeRel(repoRelPath);
  const modernCandidate = mapLegacyRepoPathToModern(normalized);
  const legacyCandidate = mapModernRepoPathToLegacy(normalized);
  const candidates = [modernCandidate, normalized, legacyCandidate]
    .map((candidate) => normalizeRel(candidate))
    .filter(Boolean)
    .filter((candidate, idx, arr) => arr.indexOf(candidate) === idx);

  for (const candidate of candidates) {
    const absPath = path.join(REPO_ROOT, candidate);
    if (fileExists(absPath)) {
      return candidate;
    }
  }

  return normalized;
}

function resolveSourceDirRel(outputDirRel) {
  const normalized = normalizeRel(outputDirRel);
  if (!normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/pages/'.length);
  const [legacyDomain] = rest.split('/').filter(Boolean);
  const modernDomain = DOMAIN_RENAME_MAP[legacyDomain];
  if (!modernDomain) return normalized;
  const modernDirRel = normalizeRel(path.posix.join('v2', modernDomain));
  if (!fileExists(path.join(REPO_ROOT, modernDirRel))) return normalized;
  return modernDirRel;
}

function isMarkdownFile(fileName) {
  return /\.(md|mdx)$/i.test(fileName);
}

function isIndexFile(fileName) {
  const lower = fileName.toLowerCase();
  return lower === INDEX_FILENAME || lower === LEGACY_INDEX_FILENAME;
}

function sortAlpha(values) {
  return [...values].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

function getDirectSubdirs(absDir) {
  if (!fs.existsSync(absDir)) return [];
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  return sortAlpha(entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name));
}

function getDirectMarkdownFiles(absDir) {
  if (!fs.existsSync(absDir)) return [];
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  return sortAlpha(
    entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => isMarkdownFile(name) && !isIndexFile(name))
  );
}

function normalizeDocsRouteKey(routePath) {
  let normalized = normalizeRel(String(routePath || '').trim());
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
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

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectDocsPageEntries(item, out));
  }

  Object.values(node).forEach((value) => collectDocsPageEntries(value, out));
  return out;
}

function getDocsJsonRouteKeys() {
  const docsJsonAbs = path.join(REPO_ROOT, DOCS_JSON_FILENAME);
  if (!fileExists(docsJsonAbs)) {
    throw new Error(`Missing ${DOCS_JSON_FILENAME} at repo root`);
  }

  const docsJson = JSON.parse(fs.readFileSync(docsJsonAbs, 'utf8'));
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
    if (key) keys.add(key);
  });

  return keys;
}

function sanitizeTitle(raw) {
  if (!raw) return '';
  let value = String(raw).trim();
  value = value.replace(/^['"]/, '').replace(/['"]$/, '').trim();
  return value;
}

function extractFrontmatterTitle(absFilePath) {
  try {
    const content = fs.readFileSync(absFilePath, 'utf8');
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
    if (!frontmatterMatch) return '';

    const lines = frontmatterMatch[1].split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*title\s*:\s*(.+)\s*$/i);
      if (match) {
        return sanitizeTitle(match[1]);
      }
    }
  } catch (_err) {
    return '';
  }
  return '';
}

function formatToken(token) {
  if (!token) return '';
  if (/^[A-Z0-9]+$/.test(token)) return token;
  return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
}

function prettifyName(rawName) {
  const noExt = rawName.replace(/\.(md|mdx)$/i, '');
  const noPrefix = noExt.replace(/^\d+[_-]?/, '');
  const normalized = noPrefix.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!normalized) return rawName;
  return normalized
    .split(' ')
    .map((token) => formatToken(token))
    .join(' ');
}

function buildLinkHref(relPath) {
  const normalized = normalizeHref(relPath);
  const segments = normalized.split('/').filter(Boolean);
  return segments.map((segment) => encodeURIComponent(segment)).join('/');
}

function isExternalHref(href) {
  return /^(https?:\/\/|mailto:|#|\/)/i.test(href);
}

function prefixHref(prefixSegment, href) {
  if (!href || isExternalHref(href)) return href;
  const cleaned = href.replace(/^\.\//, '');
  const prefixed = normalizeHref(path.posix.join(prefixSegment, cleaned));
  return prefixed.replace(/^(\.\.\/)+/, '');
}

function escapeLinkText(text) {
  return text.replace(/\[/g, '\\[').replace(/\]/g, '\\]').trim();
}

const titleCache = new Map();

function getFileTitle(fileAbsPath, fallbackName) {
  const cacheKey = fileAbsPath;
  if (titleCache.has(cacheKey)) return titleCache.get(cacheKey);
  const frontmatterTitle = extractFrontmatterTitle(fileAbsPath);
  const resolved = frontmatterTitle || prettifyName(fallbackName);
  titleCache.set(cacheKey, resolved);
  return resolved;
}

function isMissingFromDocsJson(repoFileRel, docsRouteKeys) {
  if (!docsRouteKeys || docsRouteKeys.size === 0) return false;
  const routeKey = normalizeDocsRouteKey(repoFileRel);
  return !docsRouteKeys.has(routeKey);
}

function buildFolderIndexData(outputDirRel, sourceDirRel, docsRouteKeys) {
  const outputDirAbs = path.join(REPO_ROOT, outputDirRel);
  const sourceDirAbs = path.join(REPO_ROOT, sourceDirRel);
  const rootFiles = getDirectMarkdownFiles(sourceDirAbs).map((fileName) => {
    const legacyRepoFileRel = normalizeRel(path.join(sourceDirRel, fileName));
    const repoFileRel = resolvePreferredRepoPath(legacyRepoFileRel);
    const repoFileAbs = path.join(REPO_ROOT, repoFileRel);
    const relFromCurrent = normalizeRel(path.relative(outputDirAbs, repoFileAbs));
    return {
      title: getFileTitle(repoFileAbs, fileName),
      href: buildLinkHref(relFromCurrent),
      missingFromDocsJson: isMissingFromDocsJson(repoFileRel, docsRouteKeys)
    };
  });

  const sections = [];

  function walk(localRel, depth) {
    const localAbs = path.join(REPO_ROOT, localRel);
    const subdirs = getDirectSubdirs(localAbs);

    for (const subdirName of subdirs) {
      const childRel = normalizeRel(path.join(localRel, subdirName));
      const childAbs = path.join(REPO_ROOT, childRel);
      const files = getDirectMarkdownFiles(childAbs).map((fileName) => {
        const legacyRepoFileRel = normalizeRel(path.join(childRel, fileName));
        const repoFileRel = resolvePreferredRepoPath(legacyRepoFileRel);
        const repoFileAbs = path.join(REPO_ROOT, repoFileRel);
        const relFromCurrent = normalizeRel(path.relative(outputDirAbs, repoFileAbs));
        return {
          title: getFileTitle(repoFileAbs, fileName),
          href: buildLinkHref(relFromCurrent),
          missingFromDocsJson: isMissingFromDocsJson(repoFileRel, docsRouteKeys)
        };
      });

      const beforeNestedCount = sections.length;
      walk(childRel, depth + 1);
      const hasNestedSections = sections.length > beforeNestedCount;

      if (files.length === 0 && !hasNestedSections) {
        continue;
      }

      sections.splice(beforeNestedCount, 0, {
        level: Math.min(depth + 1, 6),
        title: prettifyName(subdirName),
        links: files
      });
    }
  }

  walk(sourceDirRel, 1);

  return {
    rootLinks: rootFiles,
    sections
  };
}

function renderLinkTitle(link) {
  const safeTitle = escapeLinkText(link.title || '');
  return link.missingFromDocsJson ? `⚠️ ${safeTitle}` : safeTitle;
}

function buildIndexMeta(outputDirRel) {
  const normalized = normalizeRel(outputDirRel);
  const sectionName = prettifyName(path.basename(normalized));
  const isLptIndex = normalized === 'v2/lpt';
  const displayName = isLptIndex ? 'LPT' : `${sectionName} Index`;
  return {
    title: displayName,
    sidebarTitle: displayName,
    description: `Generated table of contents for docs pages under ${normalized}.`,
    pageType: 'overview',
    keywords: ['livepeer', 'generated index', 'table of contents', normalized]
  };
}

function buildRootMeta() {
  return {
    title: 'Pages Index',
    sidebarTitle: 'Pages Index',
    description: 'Generated table of contents for v2 docs folders.',
    pageType: 'overview',
    keywords: ['livepeer', 'generated index', 'table of contents', 'v2']
  };
}

function renderIndexContent(data, meta) {
  const lines = [
    ...buildGeneratedFrontmatterLines(meta),
    '',
    ...buildGeneratedHiddenBannerLines(GENERATED_DETAILS),
    '',
    ...buildGeneratedNoteLines(GENERATED_DETAILS),
    '',
    '# Table of contents',
    ''
  ];

  if (data.rootLinks.length > 0) {
    for (const link of data.rootLinks) {
      lines.push(`- [${renderLinkTitle(link)}](${link.href})`);
    }
    if (data.sections.length > 0) {
      lines.push('');
    }
  }

  for (const section of data.sections) {
    lines.push(`${'#'.repeat(section.level)} ${section.title}`);
    if (section.links.length > 0) {
      for (const link of section.links) {
        lines.push(`- [${renderLinkTitle(link)}](${link.href})`);
      }
    }
    lines.push('');
  }

  if (data.rootLinks.length === 0 && data.sections.length === 0) {
    lines.push('_No markdown files found in this folder._');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function parseIndexContent(content) {
  const lines = String(content || '').split('\n');
  const rootLinks = [];
  const sections = [];
  let currentSection = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      currentSection = {
        level: heading[1].length,
        title: heading[2].trim(),
        links: []
      };
      sections.push(currentSection);
      continue;
    }

    const link = line.match(/^- \[(.+?)\]\((.+?)\)$/);
    if (link) {
      const linkObj = {
        title: link[1].trim(),
        href: link[2].trim()
      };
      if (currentSection) {
        currentSection.links.push(linkObj);
      } else {
        rootLinks.push(linkObj);
      }
    }
  }

  return { rootLinks, sections };
}

function resolveAggregateHref(rootIndexAbs, topLevelDirRel, href) {
  if (!href || isExternalHref(href)) return href;
  const topLevelAbs = path.join(REPO_ROOT, topLevelDirRel);
  const targetAbs = path.resolve(topLevelAbs, href);
  const rootDirAbs = path.dirname(rootIndexAbs);
  const relFromRoot = normalizeRel(path.relative(rootDirAbs, targetAbs));
  return buildLinkHref(relFromRoot);
}

function buildAggregateData(topLevelDirs, sourceByDirRel, rootIndexAbs) {
  const groups = [];

  for (const dirRel of topLevelDirs) {
    const folderName = path.basename(dirRel);
    const source = sourceByDirRel.get(dirRel) || '';
    const parsed = parseIndexContent(source);
    const rootLinks = parsed.rootLinks.map((link) => ({
      ...link,
      href: resolveAggregateHref(rootIndexAbs, dirRel, link.href)
    }));
    const sections = parsed.sections.map((section) => ({
      ...section,
      links: section.links.map((link) => ({
        ...link,
        href: resolveAggregateHref(rootIndexAbs, dirRel, link.href)
      }))
    }));

    groups.push({
      title: prettifyName(folderName),
      rootLinks,
      sections
    });
  }

  return groups;
}

function renderAggregateContent(groups, meta) {
  const lines = [
    ...buildGeneratedFrontmatterLines(meta),
    '',
    ...buildGeneratedHiddenBannerLines(GENERATED_DETAILS),
    '',
    ...buildGeneratedNoteLines(GENERATED_DETAILS),
    '',
    '# Table of contents',
    ''
  ];

  for (const group of groups) {
    lines.push(`## ${group.title}`);

    if (group.rootLinks.length > 0) {
      for (const link of group.rootLinks) {
        lines.push(`- [${escapeLinkText(link.title)}](${link.href})`);
      }
      if (group.sections.length > 0) {
        lines.push('');
      }
    }

    for (const section of group.sections) {
      const level = Math.min(section.level + 1, 6);
      lines.push(`${'#'.repeat(level)} ${section.title}`);
      for (const link of section.links) {
        lines.push(`- [${escapeLinkText(link.title)}](${link.href})`);
      }
      lines.push('');
    }

    if (group.rootLinks.length === 0 && group.sections.length === 0) {
      lines.push('_No markdown files found in this section._');
      lines.push('');
    }
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function readTextSafe(absPath) {
  try {
    return fs.readFileSync(absPath, 'utf8');
  } catch (_err) {
    return '';
  }
}

function writeIfChanged(absPath, nextContent) {
  const current = readTextSafe(absPath);
  if (current === nextContent) {
    return false;
  }
  fs.writeFileSync(absPath, nextContent);
  return true;
}

function fileExists(absPath) {
  try {
    return fs.existsSync(absPath);
  } catch (_err) {
    return false;
  }
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMRD', {
      encoding: 'utf8',
      cwd: REPO_ROOT
    });

    return output
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => normalizeRel(line));
  } catch (_err) {
    return [];
  }
}

function stagePaths(repoRelativePaths) {
  if (repoRelativePaths.length === 0) return null;
  const unique = [...new Set(repoRelativePaths.map((p) => normalizeRel(p)))];
  const result = spawnSync('git', ['add', '--', ...unique], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    return result.stderr || result.stdout || 'Unknown git add failure';
  }
  return null;
}

function findNestedIndexFiles(topLevelDirRel, docsRouteKeys = new Set()) {
  const topLevelAbs = path.join(REPO_ROOT, topLevelDirRel);
  if (!fileExists(topLevelAbs)) return [];

  const allowedTopLevelIndexes = new Set([
    normalizeRel(path.join(topLevelDirRel, INDEX_FILENAME)),
    normalizeRel(path.join(topLevelDirRel, LEGACY_INDEX_FILENAME))
  ]);

  const nested = [];

  function walk(currentAbs) {
    const entries = fs.readdirSync(currentAbs, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentAbs, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (!entry.isFile() || !isIndexFile(entry.name)) {
        continue;
      }
      const relPath = normalizeRel(path.relative(REPO_ROOT, fullPath));
      const routeKey = normalizeDocsRouteKey(relPath);
      const isRoutableIndex = routeKey && docsRouteKeys.has(routeKey);
      if (!allowedTopLevelIndexes.has(relPath)) {
        if (isRoutableIndex) continue;
        nested.push(relPath);
      }
    }
  }

  walk(topLevelAbs);
  return sortAlpha(nested);
}

function run(options = {}) {
  const stagedOnly = Boolean(options.stagedOnly);
  const write = Boolean(options.write);
  const stage = Boolean(options.stage);
  const rebuildIndexes = Boolean(options.rebuildIndexes);

  const errors = [];
  const warnings = [];
  const changed = [];
  const removedLegacy = [];
  const removedNested = [];

  if (!fileExists(PAGES_ROOT_ABS)) {
    errors.push(`Missing pages root: ${PAGES_ROOT}`);
    return { passed: false, skipped: false, errors, warnings, changed, removedLegacy, removedNested };
  }

  const stagedFiles = getStagedFiles();
  const hasStagedPagesChange = stagedFiles.some((file) => file === 'v2' || file.startsWith('v2/'));

  if (stagedOnly && !rebuildIndexes && !hasStagedPagesChange) {
    return { passed: true, skipped: true, errors, warnings, changed, removedLegacy, removedNested };
  }

  const topLevelDirs = getDirectSubdirs(PAGES_ROOT_ABS).map((name) => normalizeRel(path.join(PAGES_ROOT, name)));
  const expectedByTopDir = new Map();

  let docsRouteKeys = new Set();
  try {
    docsRouteKeys = getDocsJsonRouteKeys();
  } catch (error) {
    errors.push(`Failed to load ${DOCS_JSON_FILENAME}: ${error.message}`);
    return { passed: false, skipped: false, errors, warnings, changed, removedLegacy, removedNested };
  }

  for (const dirRel of topLevelDirs) {
    const sourceDirRel = resolveSourceDirRel(dirRel);
    const data = buildFolderIndexData(dirRel, sourceDirRel, docsRouteKeys);
    const content = renderIndexContent(data, buildIndexMeta(dirRel));
    expectedByTopDir.set(dirRel, content);

    const indexAbs = path.join(REPO_ROOT, dirRel, INDEX_FILENAME);
    const legacyAbs = path.join(REPO_ROOT, dirRel, LEGACY_INDEX_FILENAME);
    const nestedIndexFiles = findNestedIndexFiles(dirRel, docsRouteKeys);

    if (write) {
      const didWrite = writeIfChanged(indexAbs, content);
      if (didWrite) changed.push(normalizeRel(path.join(dirRel, INDEX_FILENAME)));

      if (fileExists(legacyAbs)) {
        fs.unlinkSync(legacyAbs);
        const legacyRel = normalizeRel(path.join(dirRel, LEGACY_INDEX_FILENAME));
        removedLegacy.push(legacyRel);
      }

      for (const nestedRel of nestedIndexFiles) {
        const nestedAbs = path.join(REPO_ROOT, nestedRel);
        if (fileExists(nestedAbs)) {
          fs.unlinkSync(nestedAbs);
          removedNested.push(nestedRel);
        }
      }
    } else {
      if (!fileExists(indexAbs)) {
        errors.push(`Missing ${INDEX_FILENAME}: ${normalizeRel(path.join(dirRel, INDEX_FILENAME))}`);
      } else {
        const current = readTextSafe(indexAbs);
        if (current !== content) {
          errors.push(`Outdated ${INDEX_FILENAME}: ${normalizeRel(path.join(dirRel, INDEX_FILENAME))}`);
        }
      }

      if (fileExists(legacyAbs)) {
        errors.push(`Legacy ${LEGACY_INDEX_FILENAME} must be migrated: ${normalizeRel(path.join(dirRel, LEGACY_INDEX_FILENAME))}`);
      }

      for (const nestedRel of nestedIndexFiles) {
        errors.push(`Nested index file must be removed: ${nestedRel}`);
      }
    }
  }

  const contentByTopDir = new Map();
  topLevelDirs.forEach((dirRel) => contentByTopDir.set(dirRel, expectedByTopDir.get(dirRel) || ''));

  const rootIndexAbs = path.join(PAGES_ROOT_ABS, INDEX_FILENAME);
  const aggregate = renderAggregateContent(buildAggregateData(topLevelDirs, contentByTopDir, rootIndexAbs), buildRootMeta());
  const rootLegacyAbs = path.join(PAGES_ROOT_ABS, LEGACY_INDEX_FILENAME);

  if (write) {
    const didWriteAggregate = writeIfChanged(rootIndexAbs, aggregate);
    if (didWriteAggregate) changed.push(normalizeRel(path.join(PAGES_ROOT, INDEX_FILENAME)));

    if (fileExists(rootLegacyAbs)) {
      fs.unlinkSync(rootLegacyAbs);
      const legacyRel = normalizeRel(path.join(PAGES_ROOT, LEGACY_INDEX_FILENAME));
      removedLegacy.push(legacyRel);
    }
  } else {
    if (!fileExists(rootIndexAbs)) {
      errors.push(`Missing root ${INDEX_FILENAME}: ${normalizeRel(path.join(PAGES_ROOT, INDEX_FILENAME))}`);
    } else {
      const current = readTextSafe(rootIndexAbs);
      if (current !== aggregate) {
        errors.push(`Outdated root ${INDEX_FILENAME}: ${normalizeRel(path.join(PAGES_ROOT, INDEX_FILENAME))}`);
      }
    }

    if (fileExists(rootLegacyAbs)) {
      errors.push(`Legacy root ${LEGACY_INDEX_FILENAME} must be migrated: ${normalizeRel(path.join(PAGES_ROOT, LEGACY_INDEX_FILENAME))}`);
    }
  }

  if (stage && write) {
    const stageTargets = [...new Set([...changed, ...removedLegacy, ...removedNested])];
    const stageError = stagePaths(stageTargets);
    if (stageError) {
      warnings.push(`Failed to stage generated index files: ${stageError}`);
    }
  }

  return {
    passed: errors.length === 0,
    skipped: false,
    errors,
    warnings,
    changed: [...new Set(changed)],
    removedLegacy: [...new Set(removedLegacy)],
    removedNested: [...new Set(removedNested)]
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const stagedOnly = args.includes('--staged');
  const write = args.includes('--write');
  const stage = args.includes('--stage');
  const rebuildIndexes = args.includes('--rebuild-indexes');

  const result = run({ stagedOnly, write, stage, rebuildIndexes });

  if (result.skipped) {
    console.log('ℹ️  No staged v2 docs changes detected; pages index generation skipped.');
    process.exit(0);
  }

  if (result.changed.length > 0) {
    console.log('\n📝 Updated page index files:');
    for (const file of result.changed) {
      console.log(`  - ${file}`);
    }
  }

  if (result.removedLegacy.length > 0) {
    console.log('\n🧹 Removed legacy index.md files:');
    for (const file of result.removedLegacy) {
      console.log(`  - ${file}`);
    }
  }

  if (result.removedNested.length > 0) {
    console.log('\n🧹 Removed nested index files:');
    for (const file of result.removedNested) {
      console.log(`  - ${file}`);
    }
  }

  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Warnings:');
    for (const warning of result.warnings) {
      console.warn(`  - ${warning}`);
    }
  }

  if (!result.passed) {
    console.error('\n❌ Pages index generation/verification failed:');
    for (const error of result.errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }

  console.log('\n✅ Pages index checks passed');
  process.exit(0);
}

module.exports = { run };
