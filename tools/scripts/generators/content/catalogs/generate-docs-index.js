#!/usr/bin/env node
/**
 * @script            generate-docs-index
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, tools/lib, v2, docs.json, root
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.
 * @pipeline          P1, P2, P3, P6
 * @dualmode          --check (enforcer) | --write (generator)
 * @usage             node tools/scripts/generate-docs-index.js [flags]
 */

const fs = require('fs');
const path = require('path');

const {
  getRepoRoot,
  normalizeRel,
  normalizeDocPathForUrl,
  mapLegacyRepoPathToModern,
  resolveDocPath,
  extractFrontmatter,
  extractHeadings,
  extractCodeLanguages,
  stripForWordCount,
  countWords,
  buildGitLastModifiedMap,
  getLastVerified,
  deriveTags,
  deriveEntities,
  deriveDifficulty,
  extractOpenApiEndpoints,
  extractFirstParagraph,
  sentenceFromParagraph,
  formatInlineArray
} = require('../lib/docs-index-utils');
const {
  readManifest,
  getFirstArtifactByPath,
  matchesAnyPattern
} = require('../lib/generated-artifacts');

const BASE_URL = 'https://docs.livepeer.org';
const VERSION = 'docs-index.v1';

const REPO_ROOT = getRepoRoot();
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-index.json');
const REPORT_PATH = path.join(REPO_ROOT, 'tasks', 'reports', 'docs-index', 'missing-frontmatter.md');

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_err) {
    return '';
  }
}

function extractPages(node, pages = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => extractPages(item, pages));
    return pages;
  }
  if (node && typeof node === 'object') {
    if (Array.isArray(node.pages)) {
      node.pages.forEach((item) => extractPages(item, pages));
    }
    Object.values(node).forEach((value) => {
      if (typeof value === 'object' && value !== null) {
        extractPages(value, pages);
      }
    });
    return pages;
  }
  if (typeof node === 'string') {
    const value = node.trim();
    if (value) pages.push(value);
  }
  return pages;
}

function getV2NavPages() {
  const docsJson = JSON.parse(readFileSafe(DOCS_JSON_PATH));
  const v2Version = docsJson?.navigation?.versions?.find((version) => version.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found in docs.json');
  }

  const rawPages = extractPages(v2Version, []);
  const normalizedPages = [];
  const seen = new Set();

  rawPages.forEach((page) => {
    let normalized = String(page || '').trim();
    if (!normalized) return;
    normalized = normalized.replace(/\.mdx?$/i, '');
    if (normalized.startsWith('v2/pages/')) {
      normalized = mapLegacyRepoPathToModern(normalized);
    }
    normalized = normalizeRel(normalized);
    if (!seen.has(normalized)) {
      seen.add(normalized);
      normalizedPages.push({ navPath: page, normalizedPath: normalized });
    }
  });

  return normalizedPages;
}

function getStagedFiles() {
  try {
    const output = require('child_process').execSync('git diff --cached --name-only --diff-filter=ACMRD', {
      encoding: 'utf8',
      cwd: REPO_ROOT
    });

    return output
      .split('\n')
      .map((line) => normalizeRel(line.trim()))
      .filter(Boolean);
  } catch (_err) {
    return [];
  }
}

function getDocsIndexArtifact() {
  const manifest = readManifest(REPO_ROOT);
  return getFirstArtifactByPath('docs-index.json', manifest);
}

function getStagedDocPaths(docsIndexArtifact) {
  return getStagedFiles()
    .filter((filePath) => /\.(md|mdx)$/i.test(filePath))
    .filter((filePath) => {
      if (!docsIndexArtifact) return true;
      return matchesAnyPattern(filePath, docsIndexArtifact.sources);
    })
    .map((filePath) => normalizeRel(filePath.replace(/\.(md|mdx)$/i, '')));
}

function indexEntryPath(entry) {
  if (!entry || typeof entry.url !== 'string') return '';
  const normalized = entry.url.replace(`${BASE_URL}/`, '').replace(/^\/+/, '').trim();
  return normalizeRel(normalized);
}

function readExistingDocsIndex() {
  try {
    const parsed = JSON.parse(readFileSafe(OUTPUT_PATH));
    if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.pages)) return null;
    return parsed;
  } catch (_err) {
    return null;
  }
}

function inferTitle(headings, fallbackPath) {
  const h1 = headings.find((heading) => heading.level === 1);
  if (h1 && h1.text) return h1.text;
  const fileName = path.basename(fallbackPath || '').replace(/\.(md|mdx)$/i, '');
  return fileName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .trim();
}

function inferDescription(body) {
  const paragraph = extractFirstParagraph(body);
  return sentenceFromParagraph(paragraph);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function isTopLevelKey(line) {
  if (!line) return false;
  if (/^\s/.test(line)) return false;
  return /^([A-Za-z0-9_-]+|"?og:image"?)\s*:/.test(line);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateFrontmatterLines(lines, key, valueLine) {
  const keyRegex = new RegExp(`^${escapeRegExp(key)}\\s*:`);
  const index = lines.findIndex((line) => keyRegex.test(line));
  if (index === -1) {
    lines.push(valueLine);
    return;
  }
  let end = index + 1;
  while (end < lines.length && !isTopLevelKey(lines[end])) {
    end += 1;
  }
  lines.splice(index, end - index, valueLine);
}

function updateFrontmatterBlock(frontmatterRaw, updates) {
  const lines = String(frontmatterRaw || '').split('\n');
  Object.entries(updates).forEach(([key, valueLine]) => {
    if (!valueLine) return;
    updateFrontmatterLines(lines, key, valueLine);
  });
  return lines.join('\n').trimEnd();
}

function buildDocsIndexEntry({ normalizedPath, gitMap }) {
  const resolvedPath = resolveDocPath(normalizedPath, REPO_ROOT);
  if (!resolvedPath) {
    return { entry: null, missing: { normalizedPath } };
  }

  const content = readFileSafe(path.join(REPO_ROOT, resolvedPath));
  const frontmatter = extractFrontmatter(content);
  const body = frontmatter.body || content;
  const headings = extractHeadings(body);
  const codeLanguages = extractCodeLanguages(content);
  const apiEndpoints = extractOpenApiEndpoints(frontmatter.data || {});
  const apiEndpointPaths = apiEndpoints.map((endpoint) => endpoint.split(/\s+/)[1]).filter(Boolean);

  const title = frontmatter.data?.title || inferTitle(headings, resolvedPath);
  const description = frontmatter.data?.description || '';
  const normalizedUrlPath = normalizeDocPathForUrl(normalizedPath);
  const section = normalizedUrlPath.replace(/^v2\//, '').split('/')[0] || 'v2';
  const tags = deriveTags(frontmatter.data || {}, normalizedPath);
  const entities = deriveEntities(frontmatter.data || {}, normalizedPath, apiEndpointPaths);
  const difficulty = deriveDifficulty(normalizedPath);
  const wordCount = countWords(stripForWordCount(body));
  const lastVerified = getLastVerified(resolvedPath, frontmatter.data || {}, gitMap, REPO_ROOT);

  return {
    entry: {
      url: `${BASE_URL}/${normalizedUrlPath}`,
      title,
      description,
      section,
      tags,
      entities,
      apiEndpoints,
      difficulty,
      wordCount,
      lastVerified,
      headings,
      codeLanguages
    },
    missing: null
  };
}

function buildDocsIndex({ pages, gitMap, generated }) {
  const missingPages = [];
  const missingFrontmatter = [];
  const invalidFrontmatter = [];
  const entries = [];

  pages.forEach(({ navPath, normalizedPath }) => {
    const { entry, missing } = buildDocsIndexEntry({ normalizedPath, gitMap });
    if (!entry) {
      missingPages.push({ navPath, normalizedPath });
      return;
    }

    const resolvedPath = resolveDocPath(normalizedPath, REPO_ROOT);

    const content = readFileSafe(path.join(REPO_ROOT, resolvedPath));
    const frontmatter = extractFrontmatter(content);
    const body = frontmatter.body || content;
    const headings = extractHeadings(body);
    const codeLanguages = extractCodeLanguages(content);
    const apiEndpoints = extractOpenApiEndpoints(frontmatter.data || {});
    const apiEndpointPaths = apiEndpoints.map((endpoint) => endpoint.split(/\s+/)[1]).filter(Boolean);

    if (!frontmatter.exists) {
      missingFrontmatter.push({ resolvedPath, normalizedPath, body, headings, apiEndpoints, apiEndpointPaths });
    } else if (!frontmatter.data) {
      invalidFrontmatter.push({ resolvedPath, normalizedPath, body, headings, apiEndpoints, apiEndpointPaths, error: frontmatter.error });
    }

    entries.push(entry);
  });

  return {
    index: {
      version: VERSION,
      generated,
      pages: entries
    },
    missingPages,
    missingFrontmatter,
    invalidFrontmatter
  };
}

function writeDocsIndex(output) {
  ensureDir(path.dirname(OUTPUT_PATH));
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8');
}

function writeMissingFrontmatterReport({ missingFrontmatter, invalidFrontmatter, missingPages, gitMap }) {
  ensureDir(path.dirname(REPORT_PATH));
  const lines = [];
  lines.push('# Docs Index Missing Frontmatter Report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Missing frontmatter pages: ${missingFrontmatter.length}`);
  lines.push(`- Invalid frontmatter pages: ${invalidFrontmatter.length}`);
  lines.push(`- Unresolved navigation entries: ${missingPages.length}`);
  lines.push('');

  if (missingFrontmatter.length) {
    lines.push('## Missing Frontmatter Pages');
    lines.push('');
    missingFrontmatter.forEach((item) => {
      const title = inferTitle(item.headings, item.resolvedPath);
      const description = inferDescription(item.body);
      const tags = deriveTags({}, item.normalizedPath);
      const entities = deriveEntities({}, item.normalizedPath, item.apiEndpointPaths);
      const difficulty = deriveDifficulty(item.normalizedPath);
      const lastVerified = getLastVerified(item.resolvedPath, {}, gitMap, REPO_ROOT);

      lines.push(`### ${item.resolvedPath}`);
      lines.push('');
      lines.push(`- Suggested title: ${title || '(none)'}`);
      lines.push(`- Suggested description: ${description || '(none)'}`);
      lines.push(`- Tags: ${tags.length ? tags.join(', ') : '(none)'}`);
      lines.push(`- Entities: ${entities.length ? entities.join(', ') : '(none)'}`);
      lines.push(`- Difficulty: ${difficulty}`);
      lines.push(`- Last verified: ${lastVerified}`);
      lines.push('');
    });
  }

  if (invalidFrontmatter.length) {
    lines.push('## Invalid Frontmatter Pages');
    lines.push('');
    invalidFrontmatter.forEach((item) => {
      lines.push(`- ${item.resolvedPath}: ${item.error || 'Frontmatter parse error'}`);
    });
    lines.push('');
  }

  if (missingPages.length) {
    lines.push('## Unresolved Navigation Entries');
    lines.push('');
    missingPages.forEach((item) => {
      lines.push(`- ${item.navPath} (normalized: ${item.normalizedPath})`);
    });
    lines.push('');
  }

  fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');
}

function backfillFrontmatter({ pages, gitMap }) {
  const updates = [];

  pages.forEach(({ normalizedPath }) => {
    const resolvedPath = resolveDocPath(normalizedPath, REPO_ROOT);
    if (!resolvedPath) return;

    const absPath = path.join(REPO_ROOT, resolvedPath);
    const content = readFileSafe(absPath);
    const frontmatter = extractFrontmatter(content);
    if (!frontmatter.exists) return;
    if (!frontmatter.data) return;

    const apiEndpoints = extractOpenApiEndpoints(frontmatter.data || {});
    const apiEndpointPaths = apiEndpoints.map((endpoint) => endpoint.split(/\s+/)[1]).filter(Boolean);

    const tags = deriveTags(frontmatter.data || {}, normalizedPath);
    const entities = deriveEntities(frontmatter.data || {}, normalizedPath, apiEndpointPaths);
    const difficulty = frontmatter.data?.difficulty || deriveDifficulty(normalizedPath);
    const lastVerified = frontmatter.data?.lastVerified || frontmatter.data?.last_verified || getLastVerified(resolvedPath, frontmatter.data || {}, gitMap, REPO_ROOT);

    const updateLines = {};
    if (tags.length) updateLines.tags = `tags: ${formatInlineArray(tags)}`;
    updateLines.entities = `entities: ${formatInlineArray(entities)}`;
    if (!frontmatter.data?.difficulty) updateLines.difficulty = `difficulty: '${difficulty}'`;
    if (!frontmatter.data?.lastVerified && !frontmatter.data?.last_verified) {
      updateLines.lastVerified = `lastVerified: '${lastVerified}'`;
    }

    if (Object.keys(updateLines).length === 0) return;

    const updatedFrontmatter = updateFrontmatterBlock(frontmatter.raw, updateLines);
    if (updatedFrontmatter.trim() === String(frontmatter.raw || '').trim()) return;

    const updatedContent = `---\n${updatedFrontmatter}\n---\n${frontmatter.body || ''}`;
    fs.writeFileSync(absPath, updatedContent, 'utf8');
    updates.push(resolvedPath);
  });

  return updates;
}

function main() {
  const args = new Set(process.argv.slice(2));
  const shouldWrite = args.has('--write');
  const shouldCheck = args.has('--check') || !shouldWrite;
  const shouldBackfill = args.has('--backfill');
  const shouldReport = args.has('--report') || shouldBackfill;
  const stagedOnly = args.has('--staged');

  const gitMap = buildGitLastModifiedMap(REPO_ROOT);

  let generated = new Date().toISOString();
  if (shouldCheck && !shouldWrite && fs.existsSync(OUTPUT_PATH)) {
    try {
      const existing = JSON.parse(readFileSafe(OUTPUT_PATH));
      if (existing && existing.generated) generated = existing.generated;
    } catch (_err) {
      // ignore
    }
  }

  const pages = getV2NavPages();
  const stagedFiles = stagedOnly ? getStagedFiles() : [];
  const docsIndexArtifact = stagedOnly ? getDocsIndexArtifact() : null;
  const docsJsonStaged = stagedFiles.includes('docs.json');
  const stagedDocPaths = stagedOnly ? getStagedDocPaths(docsIndexArtifact) : [];

  if (shouldBackfill) {
    backfillFrontmatter({
      pages,
      gitMap
    });
  }

  const usePartialStagedMode = stagedOnly && !docsJsonStaged;
  let result = buildDocsIndex({ pages, gitMap, generated });

  if (usePartialStagedMode) {
    const existingIndex = readExistingDocsIndex();
    if (existingIndex) {
      const existingPages = Array.isArray(existingIndex.pages) ? existingIndex.pages : [];
      const existingByPath = new Map(existingPages.map((entry) => [indexEntryPath(entry), entry]));
      const navPaths = new Set(pages.map((page) => normalizeRel(page.normalizedPath)));
      const updatedPages = [];
      const seenPaths = new Set();
      const changedPaths = new Set(
        stagedDocPaths.filter((normalizedPath) => navPaths.has(normalizedPath) || existingByPath.has(normalizedPath))
      );

      existingPages.forEach((entry) => {
        const normalizedPath = indexEntryPath(entry);
        if (!changedPaths.has(normalizedPath)) {
          updatedPages.push(entry);
          seenPaths.add(normalizedPath);
          return;
        }

        const { entry: nextEntry } = buildDocsIndexEntry({ normalizedPath, gitMap });
        if (nextEntry) {
          updatedPages.push(nextEntry);
          seenPaths.add(normalizedPath);
        }
      });

      [...changedPaths]
        .filter((normalizedPath) => !seenPaths.has(normalizedPath))
        .forEach((normalizedPath) => {
          const { entry: nextEntry } = buildDocsIndexEntry({ normalizedPath, gitMap });
          if (nextEntry) updatedPages.push(nextEntry);
        });

      result = {
        ...result,
        index: {
          version: VERSION,
          generated,
          pages: updatedPages
        }
      };
    }
  }

  if (shouldWrite) {
    writeDocsIndex(result.index);
  }

  if (shouldReport) {
    writeMissingFrontmatterReport({
      missingFrontmatter: result.missingFrontmatter,
      invalidFrontmatter: result.invalidFrontmatter,
      missingPages: result.missingPages,
      gitMap
    });
  }

  if (shouldCheck) {
    const existing = readFileSafe(OUTPUT_PATH);
    const next = JSON.stringify(result.index, null, 2) + '\n';
    if (existing !== next) {
      console.error('✗ docs-index.json is out of date. Run with --write.');
      process.exit(1);
    }
    console.log('✓ docs-index.json is up to date.');
  }
}

try {
  main();
} catch (error) {
  console.error(`✗ ${error.message}`);
  process.exit(1);
}
