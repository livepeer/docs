#!/usr/bin/env node
/**
 * @script            publish-v2-internal-reports
 * @category          automation
 * @purpose           qa:repo-health
 * @scope             tools/scripts, tools/config, v2/internal, docs.json, tasks/reports, tests/reports
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Report publisher — publishes v2 internal audit reports to configured output locations
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/publish-v2-internal-reports.js [flags]
 */

const fs = require('fs');
const path = require('path');

const manifest = require('../config/v2-internal-report-pages');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const INTERNAL_REPORTS_ROOT = path.join(REPO_ROOT, 'v2', 'internal', 'reports');
const GENERATED_OG_IMAGE = '/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg';
const UTC_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function usage() {
  console.log(
    'Usage: node tools/scripts/publish-v2-internal-reports.js [--check] [--strict] [--category <slug[,slug]>]'
  );
}

function parseArgs(argv) {
  const out = {
    check: false,
    strict: false,
    categories: null,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--check') {
      out.check = true;
      continue;
    }
    if (token === '--strict') {
      out.strict = true;
      continue;
    }
    if (token === '--category') {
      const raw = String(argv[i + 1] || '').trim();
      if (!raw) {
        throw new Error('Missing --category value');
      }
      out.categories = new Set(
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
      );
      i += 1;
      continue;
    }
    if (token.startsWith('--category=')) {
      const raw = token.slice('--category='.length).trim();
      out.categories = new Set(
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
      );
      continue;
    }
    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    throw new Error(`Unknown arg: ${token}`);
  }

  return out;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function toRepoPath(absPath) {
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function stripExtension(repoPath) {
  return repoPath.replace(/\.(md|mdx)$/i, '');
}

function escapeSingleQuotedYaml(value) {
  return String(value).replace(/'/g, "''");
}

function stripFrontmatter(content) {
  if (!content.startsWith('---\n')) return content;
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return content;
  return content.slice(end + 5);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/\.(md|mdx)$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleFromBasename(baseName) {
  const withoutExt = baseName.replace(/\.(md|mdx)$/i, '');
  return withoutExt
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function titleFromScope(scopeValue) {
  const rawScope = String(scopeValue || '').replace(/`/g, '').trim();
  const scopePath = rawScope.split('(')[0].trim();
  let pathSegments = scopePath.split('/').map((segment) => segment.trim()).filter(Boolean);
  if (pathSegments[0] === 'tasks') pathSegments = pathSegments.slice(1);
  if (pathSegments[0] === 'reports') pathSegments = pathSegments.slice(1);

  const source = pathSegments.length ? pathSegments.join('/') : scopePath;
  const words = source
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1));
  if (!words.length) return '';
  const hasAuditWord = words.some((word) => /^audit(s)?$/i.test(word));
  if (!hasAuditWord) words.push('Audit');
  return words.join(' ');
}

function parseScopeFromReportBody(body) {
  const match = String(body || '').match(/^Scope:\s*`?([^`\n]+?)`?\s*$/m);
  return match ? match[1].trim() : '';
}

function normalizeScriptHeaderLine(rawLine) {
  let line = String(rawLine || '').trim();
  if (!line) return '';
  line = line.replace(/^\/\*\*?/, '').replace(/\*\/$/, '').trim();
  line = line.replace(/^\*\s?/, '').replace(/^#\s?/, '').trim();
  return line;
}

function parseScriptHeaderMetadata(scriptRepoPath) {
  if (!scriptRepoPath) {
    return { summary: '', scope: '', outputs: [] };
  }
  const scriptAbsPath = path.join(REPO_ROOT, ...scriptRepoPath.split('/'));
  if (!fs.existsSync(scriptAbsPath)) {
    return { summary: '', scope: '', outputs: [] };
  }

  const lines = fs.readFileSync(scriptAbsPath, 'utf8').split('\n');
  const metadata = { summary: '', scope: '', outputs: [] };
  let inOutputs = false;

  for (const rawLine of lines.slice(0, 280)) {
    const line = normalizeScriptHeaderLine(rawLine);
    if (!line) continue;

    if (line.startsWith('@summary')) {
      metadata.summary = line.replace(/^@summary\s*:?\s*/, '').trim();
      inOutputs = false;
      continue;
    }
    if (line.startsWith('@scope')) {
      metadata.scope = line.replace(/^@scope\s*:?\s*/, '').trim();
      inOutputs = false;
      continue;
    }
    if (line.startsWith('@outputs')) {
      inOutputs = true;
      continue;
    }
    if (line.startsWith('@')) {
      inOutputs = false;
      continue;
    }
    if (inOutputs && line.startsWith('- ')) {
      metadata.outputs.push(line.slice(2).trim());
    }
  }

  return metadata;
}

function isGenericSummary(summary) {
  return /^(utility script for\b|general task script\b)/i.test(String(summary || '').trim());
}

function buildScriptContextBlock(record, body, scriptMetadata) {
  const rawSummary = (scriptMetadata.summary || '').trim();
  const summary = rawSummary && !isGenericSummary(rawSummary) ? rawSummary : record.description;
  const reportScope = parseScopeFromReportBody(body);
  const scope = reportScope || (scriptMetadata.scope || '').trim();
  const outputs = scriptMetadata.outputs || [];

  const lines = [
    `Generator Script: \`${record.scriptRepoPath || 'unknown'}\``,
    `What It Does: ${summary}`,
  ];
  if (scope) {
    lines.push(`Audited Scope: \`${scope}\``);
  }
  lines.push('Outputs:');
  if (outputs.length) {
    for (const output of outputs) {
      lines.push(`- ${output}`);
    }
  } else {
    lines.push('- _Not documented in script header._');
  }
  lines.push('');
  return lines.join('\n');
}

function stripMarkdownTableBlocks(body) {
  const lines = String(body || '').split('\n');
  const output = [];
  let index = 0;

  while (index < lines.length) {
    const current = lines[index].trim();
    const next = index + 1 < lines.length ? lines[index + 1].trim() : '';
    const looksLikeTableHeader = current.startsWith('|') && next.startsWith('|');
    const looksLikeTableDivider = /^\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(next);

    if (looksLikeTableHeader && looksLikeTableDivider) {
      output.push('_Tabular data omitted in the published page. Use the repository report artifact for the full matrix._');
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        index += 1;
      }
      continue;
    }

    output.push(lines[index]);
    index += 1;
  }

  return output.join('\n');
}

function truncatePublishedBody(body, maxChars) {
  if (!maxChars || body.length <= maxChars) return body;
  const slice = body.slice(0, maxChars);
  const safeSlice = slice.includes('\n') ? slice.slice(0, slice.lastIndexOf('\n')) : slice;
  return `${safeSlice}\n\n_Published page truncated for site reliability. Use the repository report artifact for the full output._\n`;
}

function sanitizePublishedBody(record, body) {
  let nextBody = String(body || '');
  if (
    record.categorySlug === 'navigation-links'
    || record.categorySlug === 'page-audits'
    || record.categorySlug === 'repo-ops'
  ) {
    nextBody = stripMarkdownTableBlocks(nextBody);
  }
  if (record.categorySlug === 'page-audits') {
    nextBody = truncatePublishedBody(nextBody, 12000);
  } else if (record.scriptId === 'v2-link-audit') {
    nextBody = truncatePublishedBody(nextBody, 16000);
  }
  return nextBody;
}

function buildRetiredLegacyAliasContent(categorySlug, fileName) {
  const slug = stripExtension(fileName);
  const title = titleFromBasename(slug);
  const record = {
    title: `Legacy Alias: ${title}`,
    sidebarTitle: 'Legacy Alias',
    description: 'Retired internal report route preserved for link stability.',
    categorySlug,
    scriptId: 'publish-v2-internal-reports',
  };
  return `${buildFrontmatter(record)}# Legacy Internal Report Alias

This route is retained for link stability.

- Original legacy slug: \`${slug}\`
- Status: retired from active publication
- Current guidance: use the active generated report pages in this report category instead of this legacy alias.
`;
}

function getDocsGroups() {
  if (Array.isArray(manifest.docsGroups) && manifest.docsGroups.length) {
    return manifest.docsGroups;
  }
  return manifest.categories.map((category) => ({
    slug: category.slug,
    groupTitle: category.groupTitle,
  }));
}

function formatUtcHuman(date) {
  const month = UTC_MONTHS[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hour = String(date.getUTCHours()).padStart(2, '0');
  const minute = String(date.getUTCMinutes()).padStart(2, '0');
  return `${month} ${day}, ${year} ${hour}:${minute} UTC`;
}

function buildGenerationStamp(generation) {
  return [
    `Last Generated (UTC ISO): \`${generation.isoUtc}\``,
    `Last Generated (UTC Human): \`${generation.humanUtc}\``,
    '',
  ].join('\n');
}

function buildFrontmatter(record) {
  const keywords = [
    'livepeer',
    'internal',
    'reports',
    record.categorySlug,
    record.scriptId,
  ];
  const lines = [
    '---',
    `title: '${escapeSingleQuotedYaml(record.title)}'`,
    `sidebarTitle: '${escapeSingleQuotedYaml(record.sidebarTitle || record.title)}'`,
    `description: '${escapeSingleQuotedYaml(record.description)}'`,
    `keywords: ${JSON.stringify(keywords)}`,
    `og:image: "${GENERATED_OG_IMAGE}"`,
    '---',
    '',
  ];
  return lines.join('\n');
}

function listFilesRecursive(absDir) {
  const out = [];
  if (!fs.existsSync(absDir)) return out;
  const stack = [absDir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        out.push(fullPath);
      }
    }
  }
  return out;
}

function expandSimpleGlob(repoGlob) {
  const posixGlob = repoGlob.replace(/\\/g, '/');
  if (!posixGlob.includes('*')) {
    const abs = path.join(REPO_ROOT, ...posixGlob.split('/'));
    return fs.existsSync(abs) ? [abs] : [];
  }
  const starIndex = posixGlob.indexOf('*');
  const slashBeforeStar = posixGlob.lastIndexOf('/', starIndex);
  const baseRepoDir = slashBeforeStar >= 0 ? posixGlob.slice(0, slashBeforeStar) : '.';
  const baseAbsDir = path.join(REPO_ROOT, ...baseRepoDir.split('/'));
  const regex = new RegExp(
    '^' +
      posixGlob
        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\*/g, '[^/]*') +
      '$'
  );
  return listFilesRecursive(baseAbsDir)
    .filter((absPath) => regex.test(toRepoPath(absPath)))
    .sort((a, b) => toRepoPath(a).localeCompare(toRepoPath(b)));
}

function selectNewestAbsPath(absPaths) {
  return [...absPaths].sort((a, b) => {
    const aStat = fs.statSync(a);
    const bStat = fs.statSync(b);
    if (bStat.mtimeMs !== aStat.mtimeMs) return bStat.mtimeMs - aStat.mtimeMs;
    return toRepoPath(a).localeCompare(toRepoPath(b));
  })[0];
}

function resolveFileSourceAbsPath(entry) {
  const primaryAbs = path.join(REPO_ROOT, ...entry.sourcePath.split('/'));
  if (fs.existsSync(primaryAbs)) return primaryAbs;

  const fallbackPaths = Array.isArray(entry.sourcePathFallbacks)
    ? entry.sourcePathFallbacks
    : [];
  for (const fallback of fallbackPaths) {
    const fallbackAbs = path.join(REPO_ROOT, ...fallback.split('/'));
    if (fs.existsSync(fallbackAbs)) return fallbackAbs;
  }

  const fallbackGlobs = Array.isArray(entry.sourceFallbackGlobs)
    ? entry.sourceFallbackGlobs
    : [];
  let globMatches = [];
  for (const fallbackGlob of fallbackGlobs) {
    globMatches = globMatches.concat(expandSimpleGlob(fallbackGlob));
  }
  if (globMatches.length) {
    return selectNewestAbsPath(globMatches);
  }

  return null;
}

function buildDynamicTarget(entry, sourceAbsPath, sourceBody) {
  const sourceRepoPath = toRepoPath(sourceAbsPath);
  const baseName = path.basename(sourceRepoPath);
  const slugSuffix = slugify(baseName);
  const targetSlugPrefix = entry.targetSlugPrefix || '';
  const scopedTitle = entry.dynamicTitleFromScope
    ? titleFromScope(parseScopeFromReportBody(sourceBody))
    : '';
  const fallbackTitle = entry.dynamicTitleFromScope
    ? titleFromBasename(baseName)
    : (entry.titlePrefix
      ? `${entry.titlePrefix}: ${titleFromBasename(baseName)}`
      : entry.title || titleFromBasename(baseName));
  const title = scopedTitle || fallbackTitle;
  return {
    targetSlug: `${targetSlugPrefix}${slugSuffix}`,
    title,
    sidebarTitle: entry.dynamicTitleFromScope ? title : (entry.sidebarTitle || titleFromBasename(baseName)),
    description:
      entry.description ||
      `Generated report from ${entry.scriptId} (${sourceRepoPath}).`,
  };
}

function resolvePublishRecords(args) {
  const categoriesBySlug = new Map(manifest.categories.map((c) => [c.slug, c]));
  const docsGroupsBySlug = new Map(getDocsGroups().map((g) => [g.slug, g]));
  const records = [];
  const missing = [];
  const skippedOptional = [];

  for (const entry of manifest.entries) {
    if (entry.publish === false) continue;
    if (args.categories && !args.categories.has(entry.categorySlug)) continue;
    if (!categoriesBySlug.has(entry.categorySlug)) {
      throw new Error(`Manifest entry references unknown category: ${entry.categorySlug}`);
    }

    const docsGroupSlugs =
      Array.isArray(entry.docsGroupSlugs) && entry.docsGroupSlugs.length
        ? [...new Set(entry.docsGroupSlugs)]
        : [entry.categorySlug];
    for (const docsGroupSlug of docsGroupSlugs) {
      if (!docsGroupsBySlug.has(docsGroupSlug)) {
        throw new Error(
          `Manifest entry references unknown docs group: ${docsGroupSlug} (${entry.scriptId})`
        );
      }
    }

    if (entry.sourceType === 'file') {
      const sourceAbs = resolveFileSourceAbsPath(entry);
      if (!sourceAbs) {
        const bucket = entry.optionalWhenMissing ? skippedOptional : missing;
        bucket.push({ entry, sourcePath: entry.sourcePath });
        continue;
      }
      records.push(
        makeRecord({
          entry,
          docsGroupSlugs,
          sourceAbsPath: sourceAbs,
          targetSlug: entry.targetSlug,
          title: entry.title,
          sidebarTitle: entry.sidebarTitle,
          description: entry.description,
        })
      );
      continue;
    }

    if (entry.sourceType === 'glob') {
      const globMatches = expandSimpleGlob(entry.sourceGlob);
      let matches = globMatches;
      if (
        Array.isArray(entry.sourceBasenameAllowList)
        && entry.sourceBasenameAllowList.length
      ) {
        const byBaseName = new Map(
          globMatches.map((sourceAbsPath) => [path.basename(sourceAbsPath), sourceAbsPath])
        );
        matches = entry.sourceBasenameAllowList
          .map((baseName) => byBaseName.get(baseName))
          .filter(Boolean);
      }
      if (matches.length === 0) {
        const bucket = entry.optionalWhenMissing ? skippedOptional : missing;
        bucket.push({ entry, sourcePath: entry.sourceGlob });
        continue;
      }
      for (const sourceAbs of matches) {
        const sourceRaw = fs.readFileSync(sourceAbs, 'utf8');
        const sourceBody = stripFrontmatter(sourceRaw).replace(/^\uFEFF/, '');
        const dynamic = buildDynamicTarget(entry, sourceAbs, sourceBody);
        records.push(
          makeRecord({
            entry,
            docsGroupSlugs,
            sourceAbsPath: sourceAbs,
            targetSlug: dynamic.targetSlug,
            title: dynamic.title,
            sidebarTitle: dynamic.sidebarTitle,
            description: dynamic.description,
          })
        );
      }
      continue;
    }

    throw new Error(`Unsupported sourceType: ${entry.sourceType}`);
  }

  return { records, missing, skippedOptional };
}

function makeRecord({
  entry,
  docsGroupSlugs,
  sourceAbsPath,
  targetSlug,
  title,
  sidebarTitle,
  description,
}) {
  const targetAbsPath = path.join(
    INTERNAL_REPORTS_ROOT,
    entry.categorySlug,
    `${targetSlug}.md`
  );
  return {
    entry,
    categorySlug: entry.categorySlug,
    docsGroupSlugs,
    scriptId: entry.scriptId,
    scriptRepoPath: entry.scriptPath || '',
    sourceAbsPath,
    sourceRepoPath: toRepoPath(sourceAbsPath),
    targetAbsPath,
    targetRepoPath: toRepoPath(targetAbsPath),
    targetSlug,
    title,
    sidebarTitle: sidebarTitle || title,
    description:
      description ||
      `Generated report from ${entry.scriptId} (${toRepoPath(sourceAbsPath)}).`,
  };
}

function buildLegacyAliasAbsPaths(record) {
  const legacyTargets = [];
  const currentPrefix = record.entry.targetSlugPrefix || '';
  const baseSlug =
    currentPrefix && record.targetSlug.startsWith(currentPrefix)
      ? record.targetSlug.slice(currentPrefix.length)
      : record.targetSlug;
  const legacyPrefixes = Array.isArray(record.entry.legacyTargetSlugPrefixes)
    ? record.entry.legacyTargetSlugPrefixes
    : [];
  for (const legacyPrefix of legacyPrefixes) {
    legacyTargets.push(
      path.join(INTERNAL_REPORTS_ROOT, record.entry.categorySlug, `${legacyPrefix}${baseSlug}.md`)
    );
  }
  const legacySlugs = Array.isArray(record.entry.legacyTargetSlugs)
    ? record.entry.legacyTargetSlugs
    : [];
  for (const legacySlug of legacySlugs) {
    legacyTargets.push(path.join(INTERNAL_REPORTS_ROOT, record.entry.categorySlug, `${legacySlug}.md`));
  }
  return [...new Set(legacyTargets)];
}

function writeIfChanged(targetAbsPath, nextContent, args) {
  if (args.check) return true;
  ensureDir(path.dirname(targetAbsPath));
  const prev = fs.existsSync(targetAbsPath)
    ? fs.readFileSync(targetAbsPath, 'utf8')
    : null;
  if (prev === nextContent) return false;
  fs.writeFileSync(targetAbsPath, nextContent, 'utf8');
  return true;
}

function writeManagedPage(record, generation, args, scriptMetadataCache) {
  const sourceRaw = fs.readFileSync(record.sourceAbsPath, 'utf8');
  const body = sanitizePublishedBody(record, stripFrontmatter(sourceRaw).replace(/^\uFEFF/, ''));
  let scriptMetadata = scriptMetadataCache.get(record.scriptRepoPath);
  if (!scriptMetadata) {
    scriptMetadata = parseScriptHeaderMetadata(record.scriptRepoPath);
    scriptMetadataCache.set(record.scriptRepoPath, scriptMetadata);
  }
  const contextBlock = buildScriptContextBlock(record, body, scriptMetadata);
  const nextContent = `${buildFrontmatter(record)}${buildGenerationStamp(generation)}${contextBlock}${body.replace(
    /^\n+/,
    ''
  )}`;
  let changed = writeIfChanged(record.targetAbsPath, nextContent, args);
  for (const legacyAliasAbsPath of buildLegacyAliasAbsPaths(record)) {
    if (writeIfChanged(legacyAliasAbsPath, nextContent, args)) {
      changed = true;
    }
  }
  return { changed };
}

function buildManagedDynamicFileNames(entry) {
  const sourceBaseNames = new Set(
    expandSimpleGlob(entry.sourceGlob).map((sourceAbsPath) => path.basename(sourceAbsPath))
  );
  if (Array.isArray(entry.sourceBasenameAllowList)) {
    for (const baseName of entry.sourceBasenameAllowList) {
      sourceBaseNames.add(baseName);
    }
  }

  const currentPrefix = entry.targetSlugPrefix || '';
  const legacyPrefixes = Array.isArray(entry.legacyTargetSlugPrefixes)
    ? entry.legacyTargetSlugPrefixes
    : [];
  const managedFileNames = new Set();
  for (const baseName of sourceBaseNames) {
    const slug = slugify(baseName);
    managedFileNames.add(`${currentPrefix}${slug}.md`);
    for (const legacyPrefix of legacyPrefixes) {
      managedFileNames.add(`${legacyPrefix}${slug}.md`);
    }
  }
  return managedFileNames;
}

function cleanupDynamicPages(records, args) {
  const dynamicEntries = manifest.entries.filter(
    (entry) =>
      entry.publish !== false &&
      entry.sourceType === 'glob' &&
      (!args.categories || args.categories.has(entry.categorySlug))
  );
  let removed = 0;
  for (const entry of dynamicEntries) {
    const categoryDir = path.join(INTERNAL_REPORTS_ROOT, entry.categorySlug);
    if (!fs.existsSync(categoryDir)) continue;
    const keep = new Set(
      records
        .filter((record) => record.entry === entry)
        .flatMap((record) => [
          path.basename(record.targetAbsPath),
          ...buildLegacyAliasAbsPaths(record).map((legacyPath) => path.basename(legacyPath)),
        ])
    );
    const managedFileNames = buildManagedDynamicFileNames(entry);
    const legacyPrefixes = Array.isArray(entry.legacyTargetSlugPrefixes)
      ? entry.legacyTargetSlugPrefixes
      : [];
    for (const fileName of fs.readdirSync(categoryDir)) {
      const matchesLegacyPrefix = legacyPrefixes.some(
        (legacyPrefix) => legacyPrefix && fileName.startsWith(legacyPrefix)
      );
      if (!managedFileNames.has(fileName) && !matchesLegacyPrefix) continue;
      if (keep.has(fileName)) continue;
      const fullPath = path.join(categoryDir, fileName);
      if (matchesLegacyPrefix) {
        if (!args.check) {
          const placeholder = buildRetiredLegacyAliasContent(entry.categorySlug, fileName);
          if (fs.readFileSync(fullPath, 'utf8') !== placeholder) {
            fs.writeFileSync(fullPath, placeholder, 'utf8');
          }
        }
        continue;
      }
      if (!args.check) fs.unlinkSync(fullPath);
      removed += 1;
    }
  }
  return removed;
}

function cleanupLegacyTargetPages(args) {
  return 0;
}

function findInternalHubTab(node) {
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = findInternalHubTab(item);
      if (found) return found;
    }
    return null;
  }
  if (!node || typeof node !== 'object') return null;
  if (node.tab === 'Internal Hub' && Array.isArray(node.anchors)) return node;
  for (const value of Object.values(node)) {
    const found = findInternalHubTab(value);
    if (found) return found;
  }
  return null;
}

function getOrCreateGeneratedReportsGroup(internalAnchor) {
  const groups = Array.isArray(internalAnchor.groups) ? internalAnchor.groups : [];
  const existing = groups.find(
    (group) => group && group.group === 'Generated Reports' && Array.isArray(group.pages)
  );
  if (existing) return existing;
  const created = { group: 'Generated Reports', pages: [] };
  internalAnchor.groups = [...groups, created];
  return created;
}

function updateDocsJson(records, args) {
  const docsGroups = getDocsGroups();
  const managedTitles = new Set(docsGroups.map((group) => group.groupTitle));
  const targetDocsGroupSlugs = new Set();
  for (const entry of manifest.entries) {
    if (entry.publish === false) continue;
    if (args.categories && !args.categories.has(entry.categorySlug)) continue;
    const docsGroupSlugs =
      Array.isArray(entry.docsGroupSlugs) && entry.docsGroupSlugs.length
        ? entry.docsGroupSlugs
        : [entry.categorySlug];
    docsGroupSlugs.forEach((slug) => targetDocsGroupSlugs.add(slug));
  }
  const pagesByDocsGroup = new Map(
    [...targetDocsGroupSlugs].map((slug) => [slug, []])
  );
  for (const record of records) {
    const pagePath = stripExtension(record.targetRepoPath);
    for (const docsGroupSlug of record.docsGroupSlugs) {
      if (!targetDocsGroupSlugs.has(docsGroupSlug)) continue;
      if (!pagesByDocsGroup.has(docsGroupSlug)) {
        pagesByDocsGroup.set(docsGroupSlug, []);
      }
      pagesByDocsGroup.get(docsGroupSlug).push(pagePath);
    }
  }
  const docs = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  const internalTab = findInternalHubTab(docs);
  if (!internalTab) {
    throw new Error('Unable to find hidden "Internal Hub" tab in docs.json');
  }
  const internalAnchor = (internalTab.anchors || []).find(
    (anchor) => anchor && anchor.anchor === 'Internal Hub' && Array.isArray(anchor.groups)
  );
  if (!internalAnchor) {
    throw new Error('Unable to find "Internal Hub" anchor groups in docs.json');
  }
  const generatedReportsGroup = getOrCreateGeneratedReportsGroup(internalAnchor);
  const existingSubgroups = Array.isArray(generatedReportsGroup.pages)
    ? generatedReportsGroup.pages.filter(
        (group) =>
          group &&
          typeof group === 'object' &&
          typeof group.group === 'string' &&
          Array.isArray(group.pages)
      )
    : [];
  const existingByTitle = new Map(existingSubgroups.map((group) => [group.group, group]));
  const preservedUnknownGroups = existingSubgroups.filter(
    (group) => !managedTitles.has(group.group)
  );

  const nextManagedGroups = [];
  for (const docsGroup of docsGroups) {
    const shouldRebuildGroup = !args.categories || targetDocsGroupSlugs.has(docsGroup.slug);
    if (!shouldRebuildGroup) {
      const existing = existingByTitle.get(docsGroup.groupTitle);
      if (existing) nextManagedGroups.push(existing);
      continue;
    }
    const rawPages = pagesByDocsGroup.get(docsGroup.slug) || [];
    const dedupedPages = [...new Set(rawPages)];
    if (!dedupedPages.length) continue;
    nextManagedGroups.push({
      group: docsGroup.groupTitle,
      pages: dedupedPages,
    });
  }

  generatedReportsGroup.pages = [...nextManagedGroups, ...preservedUnknownGroups];

  const next = `${JSON.stringify(docs, null, 2)}\n`;
  const prev = fs.readFileSync(DOCS_JSON_PATH, 'utf8');
  if (args.check || prev === next) {
    return { changed: false, groupsWritten: nextManagedGroups.length };
  }
  fs.writeFileSync(DOCS_JSON_PATH, next, 'utf8');
  return { changed: true, groupsWritten: nextManagedGroups.length };
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  const { records, missing, skippedOptional } = resolvePublishRecords(args);
  if (missing.length) {
    for (const row of missing) {
      console.warn(`Missing source report: ${row.sourcePath}`);
    }
    if (args.strict) {
      console.error(`Strict mode failed: ${missing.length} source report(s) missing.`);
      process.exit(1);
    }
  }
  if (skippedOptional.length) {
    console.log(`Optional source reports missing (skipped): ${skippedOptional.length}`);
  }

  const generationDate = new Date();
  const generation = {
    isoUtc: generationDate.toISOString(),
    humanUtc: formatUtcHuman(generationDate),
  };

  let changedPages = 0;
  const scriptMetadataCache = new Map();
  for (const record of records) {
    const result = writeManagedPage(record, generation, args, scriptMetadataCache);
    if (result.changed) changedPages += 1;
  }
  const removedDynamic = cleanupDynamicPages(records, args);
  const removedLegacy = cleanupLegacyTargetPages(args);
  const docsResult = updateDocsJson(records, args);

  console.log(`${args.check ? 'Previewed' : 'Processed'} report pages: ${records.length}`);
  console.log(`Page writes ${args.check ? '(planned)' : ''}: ${changedPages}`);
  console.log(`Dynamic stale pages ${args.check ? '(planned removals)' : 'removed'}: ${removedDynamic}`);
  console.log(`Legacy alias pages ${args.check ? '(planned removals)' : 'removed'}: ${removedLegacy}`);
  console.log(`docs.json report groups ${args.check ? '(planned)' : ''}: ${docsResult.groupsWritten}`);
  if (records.length) {
    for (const record of records) {
      console.log(` - ${record.sourceRepoPath} -> ${record.targetRepoPath}`);
    }
  }
}

main();
