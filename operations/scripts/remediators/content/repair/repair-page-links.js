#!/usr/bin/env node
/**
 * @script      repair-page-links
 * @type        remediator
 * @concern     health
 * @niche       repair
 * @purpose     
 * @description Repair deterministic page-link path issues from canonical operations scripts while leaving ambiguous targets unchanged for review.
 * @mode        repair
 * @pipeline    manual
 * @scope       v2 publishable docs pages, operations/reports/health/page-links
 * @usage       node operations/scripts/remediators/content/repair/repair-page-links.js --dry-run --files v2/about --report-dir operations/reports/health/page-links
 * @policy      E-R12, E-R14
 */

const fs = require('fs');
const path = require('path');
const {
  DEFAULT_REMAP_THRESHOLD,
  canonicalRouteFromFile,
  encodeRouteForHref,
  getRepoRoot,
  getUniqueHighConfidenceSuggestion,
  normalizeRepoPath,
  normalizeRoute,
  resolveCanonicalDocRoute,
  resolveRelativeRoute,
  splitUrlSuffix,
  suggestRemaps,
  toPosix
} = require('../../../config/docs-path-sync');
const { isPublishedDocsPath } = require('../../../../../tools/lib/docs/docs-publishability');
const { isGeneratedDocsPageFile } = require('../../../../../tools/lib/docs/docs-page-scope');

const DOCS_JSON_PATH = 'docs.json';
const DEFAULT_REPORT_DIR = 'operations/reports/health/page-links';
const DOC_EXTENSIONS = new Set(['.md', '.mdx']);
const PAGE_HREF_PATTERNS = [
  {
    kind: 'jsx-attr',
    regex: /(?<![\w-])href\b(\s*=\s*)(["'])((?:\.\.\/|\.\/)[^"'{}]*)\2/g
  },
  {
    kind: 'jsx-attr-braced',
    regex: /(?<![\w-])href\b(\s*=\s*\{\s*)(["'])((?:\.\.\/|\.\/)[^"'{}]*)\2(\s*\})/g
  },
  {
    kind: 'object-prop',
    regex: /(?<![\w-])href\b(\s*:\s*)(["'])((?:\.\.\/|\.\/)[^"'`}]*)\2/g
  }
];
const FENCED_CODE_REGEXES = [/```[\s\S]*?```/g, /~~~[\s\S]*?~~~/g];
const TEMPLATE_LITERAL_REGEX = /`(?:\\[\s\S]|[^`])*`/g;
const JSX_COMMENT_REGEX = /\{\/\*[\s\S]*?\*\/\}/g;
const HTML_COMMENT_REGEX = /<!--[\s\S]*?-->/g;

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node operations/scripts/remediators/content/repair/repair-page-links.js [--dry-run|--write] [--files <path[,path...]>] [--report-dir <dir>] [--json]',
      '',
      'Modes:',
      '  --dry-run     Preview canonical root-level href rewrites without modifying files (default).',
      '  --write       Apply safe href rewrites to authored publishable v2 page files.',
      '',
      'Scope:',
      '  --files       Limit processing to explicit repo-relative files or directories (comma-separated, repeatable).',
      '  --report-dir  Optional output directory for markdown and JSON audit reports.',
      '',
      'Output:',
      '  --json        Print the JSON summary to stdout in addition to any report files.',
      '',
      'Safety:',
      '  - Only rewrites string literals on `href=` and `href:` that begin with `./` or `../`.',
      '  - Skips code fences, template literals, comments, generated docs pages, and non-page targets.',
      '  - Auto-fixes only direct page matches, decoded/alias matches, or unique high-confidence published v2 remaps.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    files: [],
    reportDir: '',
    json: false,
    verify: false,
    help: false
  };

  let explicitModeCount = 0;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--files') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) throw new Error('Missing value for --files');
      raw
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => args.files.push(item));
      index += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => args.files.push(item));
      continue;
    }

    if (token === '--report-dir') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) throw new Error('Missing value for --report-dir');
      args.reportDir = raw;
      index += 1;
      continue;
    }

    if (token.startsWith('--report-dir=')) {
      args.reportDir = token.slice('--report-dir='.length).trim();
      continue;
    }

    if (token === '--verify') { args.verify = true; continue; }

        throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --write');
  }

  args.files = [...new Set(args.files)];
  return args;
}

function loadDocsJson(repoRoot) {
  const filePath = path.join(repoRoot, DOCS_JSON_PATH);
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// ── Git rename map ──────────────────────
// Builds a map of old route → current route from git rename history.
// Only includes renames where the destination still exists as a published page.
function buildGitRenameMap(repoRoot, knownRoutesSet) {
  const map = new Map(); // oldRoute → newRoute
  try {
    const raw = execSync(
      'git log --diff-filter=R --name-status --find-renames --pretty=format:"" -- "v2/"',
      { cwd: repoRoot, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
    );
    for (const line of raw.split('\n')) {
      const match = line.match(/^R\d+\t(.+)\t(.+)$/);
      if (!match) continue;
      const oldPath = normalizeRepoPath(match[1]).replace(/\.(md|mdx)$/i, '');
      const newPath = normalizeRepoPath(match[2]).replace(/\.(md|mdx)$/i, '');
      const oldRoute = normalizeRoute(oldPath);
      const newRoute = normalizeRoute(newPath);
      if (oldRoute && newRoute && knownRoutesSet.has(newRoute)) {
        map.set(oldRoute, newRoute);
      }
    }
  } catch (_) {
    // git not available or failed — degrade gracefully
  }
  return map;
}

// ── Folder-link resolution ──────────────
// When an href points to a folder (e.g. ./concepts/), find the first page
// in that folder from docs.json navigation order.
function resolvefolderToFirstNavPage(folderRoute, docsJson, knownRoutesSet) {
  const normalized = normalizeRoute(folderRoute).replace(/\/+$/, '');
  if (!normalized) return null;

  // Recursively collect all page strings from docs.json nav
  // Traverses: navigation.versions[].languages[].tabs[].groups[].pages[]
  function collectPages(node) {
    const pages = [];
    if (typeof node === 'string') {
      if (node.startsWith('v2/')) pages.push(node);
    } else if (Array.isArray(node)) {
      for (const item of node) pages.push(...collectPages(item));
    } else if (node && typeof node === 'object') {
      for (const val of Object.values(node)) {
        if (val && (typeof val === 'object' || typeof val === 'string')) {
          pages.push(...collectPages(val));
        }
      }
    }
    return pages;
  }

  // docs.json structure: navigation.versions[].languages[].tabs[].groups[].pages[]
  const allNavPages = collectPages(docsJson.navigation || docsJson.tabs || docsJson);

  // Find first page whose route starts with the folder path
  for (const page of allNavPages) {
    const pageRoute = normalizeRoute(page);
    if (pageRoute.startsWith(normalized + '/') && knownRoutesSet.has(pageRoute)) {
      return pageRoute;
    }
  }
  return null;
}

function isPageFilePath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return normalized.startsWith('v2/') && DOC_EXTENSIONS.has(path.extname(normalized).toLowerCase());
}

function isPublishablePagePath(repoPath) {
  return isPageFilePath(repoPath) && isPublishedDocsPath(repoPath);
}

function walkPageFiles(absPath, repoRoot, out = []) {
  if (!fs.existsSync(absPath)) return out;
  const stat = fs.statSync(absPath);
  if (stat.isFile()) {
    const repoPath = normalizeRepoPath(path.relative(repoRoot, absPath));
    if (isPublishablePagePath(repoPath)) out.push(path.resolve(absPath));
    return out;
  }

  const entries = fs.readdirSync(absPath, { withFileTypes: true });
  for (const entry of entries) {
    const child = path.join(absPath, entry.name);
    const repoPath = normalizeRepoPath(path.relative(repoRoot, child));
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      if (repoPath.startsWith('v2/') && !isPublishedDocsPath(`${repoPath}/placeholder.mdx`)) continue;
      walkPageFiles(child, repoRoot, out);
      continue;
    }
    if (isPublishablePagePath(repoPath)) out.push(path.resolve(child));
  }
  return out;
}

function collectTargetFiles(repoRoot, fileArgs = []) {
  const targets = [];
  const seen = new Set();
  const rawInputs = fileArgs.length > 0 ? fileArgs : ['v2'];

  rawInputs.forEach((entry) => {
    const absPath = path.isAbsolute(entry)
      ? path.resolve(entry)
      : path.resolve(repoRoot, entry);
    walkPageFiles(absPath, repoRoot, targets);
  });

  return targets
    .map((filePath) => path.resolve(filePath))
    .filter((filePath) => {
      const key = toPosix(filePath);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((left, right) =>
      normalizeRepoPath(path.relative(repoRoot, left)).localeCompare(normalizeRepoPath(path.relative(repoRoot, right)))
    );
}

function collectKnownPublishedRoutes(repoRoot) {
  const files = collectTargetFiles(repoRoot, ['v2']);
  return [...new Set(files.map((filePath) => canonicalRouteFromFile(normalizeRepoPath(path.relative(repoRoot, filePath)))))].sort();
}

function collectProtectedRanges(content) {
  const ranges = [];
  const text = String(content || '');
  const frontmatterMatch = text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);

  if (frontmatterMatch) {
    ranges.push({
      start: 0,
      end: frontmatterMatch[0].length
    });
  }

  for (const regex of FENCED_CODE_REGEXES) {
    let match;
    while ((match = regex.exec(text)) !== null) {
      ranges.push({ start: match.index, end: match.index + match[0].length });
    }
  }

  [TEMPLATE_LITERAL_REGEX, JSX_COMMENT_REGEX, HTML_COMMENT_REGEX].forEach((regex) => {
    let match;
    while ((match = regex.exec(text)) !== null) {
      ranges.push({ start: match.index, end: match.index + match[0].length });
    }
  });

  return ranges
    .filter((range) => Number.isFinite(range.start) && Number.isFinite(range.end) && range.end > range.start)
    .sort((left, right) => left.start - right.start || left.end - right.end);
}

function isProtectedIndex(index, protectedRanges) {
  return protectedRanges.some((range) => index >= range.start && index < range.end);
}

function positionForIndex(content, index) {
  const slice = String(content || '').slice(0, index);
  const lines = slice.split('\n');
  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1
  };
}

function collectHrefLiteralMatches(content) {
  const matches = [];
  const protectedRanges = collectProtectedRanges(content);

  PAGE_HREF_PATTERNS.forEach(({ kind, regex }) => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isProtectedIndex(match.index, protectedRanges)) continue;
      const rawValue = match[3];
      const localIndex = match[0].indexOf(rawValue);
      if (localIndex < 0) continue;
      const start = match.index + localIndex;
      const end = start + rawValue.length;
      const position = positionForIndex(content, start);
      matches.push({
        kind,
        rawValue,
        start,
        end,
        line: position.line,
        column: position.column
      });
    }
  });

  return matches.sort((left, right) => left.start - right.start || left.end - right.end);
}

function isCandidatePageHref(rawValue) {
  const { pathname } = splitUrlSuffix(rawValue);
  const ext = path.posix.extname(pathname || '').toLowerCase();
  return !ext || DOC_EXTENSIONS.has(ext);
}

function buildRedirectSuggestion(rawRoute, docsJson, knownRoutesSet) {
  const normalized = normalizeRoute(rawRoute);
  if (!normalized) return null;
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];

  for (const redirect of redirects) {
    if (!redirect || typeof redirect !== 'object') continue;
    if (normalizeRoute(redirect.source) !== normalized) continue;
    const destination = normalizeRoute(redirect.destination);
    if (!destination || destination.startsWith('v1/')) return null;
    if (!knownRoutesSet.has(destination)) return null;
    return {
      route: destination,
      reason: 'docs redirect',
      score: 1
    };
  }

  return null;
}

function buildSuggestions(rawRoute, docsJson, knownRoutes, options = {}) {
  const knownRoutesSet = new Set(knownRoutes.map((route) => normalizeRoute(route)));
  const suggestions = [];
  const seen = new Set();

  function addSuggestion(item) {
    const normalizedRoute = normalizeRoute(item?.route);
    if (!normalizedRoute || normalizedRoute.startsWith('v1/') || !knownRoutesSet.has(normalizedRoute) || seen.has(normalizedRoute)) {
      return;
    }
    seen.add(normalizedRoute);
    suggestions.push({
      route: normalizedRoute,
      reason: item.reason,
      score: item.score
    });
  }

  const redirectSuggestion = buildRedirectSuggestion(rawRoute, docsJson, knownRoutesSet);
  if (redirectSuggestion) addSuggestion(redirectSuggestion);

  // Git rename lookup — highest confidence after redirects
  if (options.gitRenameMap) {
    const normalizedRaw = normalizeRoute(rawRoute);
    const gitTarget = options.gitRenameMap.get(normalizedRaw);
    if (gitTarget) {
      addSuggestion({ route: gitTarget, reason: 'git rename history', score: 0.95 });
    }
  }

  suggestRemaps(rawRoute, knownRoutes).forEach((item) => addSuggestion(item));
  return suggestions;
}

function classifySkippedTarget(rawValue) {
  const { pathname } = splitUrlSuffix(rawValue);
  const ext = path.posix.extname(pathname || '').toLowerCase();
  if (ext && !DOC_EXTENSIONS.has(ext)) return 'non-page-target';
  return 'non-v2-target';
}

function fileRouteFromRepoPath(repoPath) {
  return normalizeRepoPath(repoPath).replace(/\.(md|mdx)$/i, '');
}

function analyzeHrefMatch({
  repoRoot,
  repoPath,
  content,
  docsJson,
  knownRoutes,
  generated,
  match,
  options
}) {
  const currentRoute = canonicalRouteFromFile(repoPath);
  const fileRoute = fileRouteFromRepoPath(repoPath);
  const target = resolveRelativeRoute(currentRoute, match.rawValue);
  const fallbackTarget = fileRoute !== currentRoute
    ? resolveRelativeRoute(fileRoute, match.rawValue, { useRawBase: true })
    : null;
  const routeForDisplay = target.route ? `/${normalizeRoute(target.route)}` : '';

  const base = {
    file: repoPath,
    line: match.line,
    column: match.column,
    rawHref: match.rawValue,
    kind: match.kind,
    resolvedRoute: routeForDisplay,
    start: match.start,
    end: match.end,
    generated
  };

  if (!isCandidatePageHref(match.rawValue)) {
    return {
      ...base,
      action: 'skip',
      status: classifySkippedTarget(match.rawValue),
      suggestions: []
    };
  }

  const exact = target.route && target.route.startsWith('v2/')
    ? resolveCanonicalDocRoute(repoRoot, docsJson, target.route)
    : null;
  if (exact && exact.route.startsWith('v2/') && isPublishedDocsPath(exact.filePath)) {
    return {
      ...base,
      action: generated ? 'generator-owned' : 'rewrite',
      status: exact.method,
      replacement: encodeRouteForHref(exact.route, target.suffix),
      suggestions: []
    };
  }

  const fallbackExact = fallbackTarget?.route && fallbackTarget.route.startsWith('v2/')
    ? resolveCanonicalDocRoute(repoRoot, docsJson, fallbackTarget.route)
    : null;
  if (fallbackExact && fallbackExact.route.startsWith('v2/') && isPublishedDocsPath(fallbackExact.filePath)) {
    return {
      ...base,
      action: generated ? 'generator-owned' : 'rewrite',
      status: 'file-route-recovery',
      replacement: encodeRouteForHref(fallbackExact.route, fallbackTarget.suffix),
      suggestions: []
    };
  }

  const suggestionRoute = (target.route && target.route.startsWith('v2/'))
    ? target.route
    : (fallbackTarget?.route || target.route);
  if (!suggestionRoute) {
    return {
      ...base,
      action: 'skip',
      status: classifySkippedTarget(match.rawValue),
      suggestions: []
    };
  }

  // Folder-link resolution: ./concepts/ or ./setup → first page in docs.json nav
  const knownRoutesSet = new Set(knownRoutes.map((r) => normalizeRoute(r)));
  const normalizedSuggestionRoute = normalizeRoute(suggestionRoute).replace(/\/+$/, '');
  if (match.rawValue.endsWith('/') || !path.posix.extname(normalizedSuggestionRoute)) {
    const folderPage = resolvefolderToFirstNavPage(normalizedSuggestionRoute, docsJson, knownRoutesSet);
    if (folderPage) {
      return {
        ...base,
        action: generated ? 'generator-owned' : 'rewrite',
        status: 'folder-to-first-nav-page',
        replacement: encodeRouteForHref(folderPage, target.suffix),
        suggestions: [{ href: encodeRouteForHref(folderPage), reason: 'first page in docs.json nav group', score: 0.92 }]
      };
    }
  }

  const gitRenameMap = options?.gitRenameMap || null;
  const suggestions = buildSuggestions(suggestionRoute, docsJson, knownRoutes, { gitRenameMap });
  const uniqueSuggestion = getUniqueHighConfidenceSuggestion(suggestions, {
    threshold: DEFAULT_REMAP_THRESHOLD,
    includePrefixes: ['v2/'],
    excludePrefixes: ['v1/']
  });

  if (uniqueSuggestion) {
    return {
      ...base,
      action: generated ? 'generator-owned' : 'rewrite',
      status: 'high-confidence-remap',
      replacement: encodeRouteForHref(uniqueSuggestion.route, target.suffix),
      suggestions: suggestions.map((item) => ({
        href: encodeRouteForHref(item.route),
        reason: item.reason,
        score: item.score
      })),
      confidence: uniqueSuggestion.score,
      reason: uniqueSuggestion.reason
    };
  }

  return {
    ...base,
    action: 'unresolved',
    status: suggestionRoute.startsWith('v2/') ? 'unresolved' : 'outside-publishable-v2',
    suggestions: suggestions.map((item) => ({
      href: encodeRouteForHref(item.route),
      reason: item.reason,
      score: item.score
    }))
  };
}

function applyReplacements(content, repairs) {
  const ordered = [...repairs].sort((left, right) => right.start - left.start || right.end - left.end);
  let next = content;
  ordered.forEach((repair) => {
    next = `${next.slice(0, repair.start)}${repair.replacement}${next.slice(repair.end)}`;
  });
  return next;
}

function analyzeFile({ repoRoot, filePath, docsJson, knownRoutes, mode, options }) {
  const repoPath = normalizeRepoPath(path.relative(repoRoot, filePath));
  const content = fs.readFileSync(filePath, 'utf8');
  const generated = isGeneratedDocsPageFile(filePath, content);
  const matches = collectHrefLiteralMatches(content);
  const records = matches.map((match) =>
    analyzeHrefMatch({
      repoRoot,
      repoPath,
      content,
      docsJson,
      knownRoutes,
      generated,
      match,
      options
    })
  );

  const rewrites = records.filter((record) => record.action === 'rewrite');
  const unresolved = records.filter((record) => record.action === 'unresolved');
  const skipped = records.filter((record) => record.action === 'skip');
  const generatorOwned = records.filter((record) => record.action === 'generator-owned');

  let written = false;
  let nextContent = content;
  if (mode === 'write' && rewrites.length > 0) {
    nextContent = applyReplacements(content, rewrites);
    if (nextContent !== content) {
      fs.writeFileSync(filePath, nextContent, 'utf8');
      written = true;
    }
  }

  return {
    file: repoPath,
    generated,
    scannedMatches: matches.length,
    rewrites,
    unresolved,
    skipped,
    generatorOwned,
    written
  };
}

function buildScopeLabel(files) {
  if (!Array.isArray(files) || files.length === 0) return 'full';
  if (files.length !== 1) return 'custom';
  const raw = normalizeRepoPath(files[0]).replace(/\/+$/, '');
  const base = path.posix.basename(raw) || 'custom';
  const stem = base.replace(/\.(md|mdx)$/i, '');
  const value = stem === 'index' ? path.posix.basename(path.posix.dirname(raw)) || 'index' : stem;
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'custom';
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function deriveReportPaths(repoRoot, args) {
  if (!args.reportDir) return null;
  const reportDir = path.resolve(repoRoot, args.reportDir);
  const baseName = `${buildScopeLabel(args.files)}-${args.mode === 'write' ? 'write' : 'dry-run'}`;
  return {
    dir: reportDir,
    markdown: path.join(reportDir, `${baseName}.md`),
    json: path.join(reportDir, `${baseName}.json`)
  };
}

function summariseByStatus(filePlans) {
  return filePlans.reduce((accumulator, plan) => {
    [...plan.rewrites, ...plan.unresolved, ...plan.skipped, ...plan.generatorOwned].forEach((entry) => {
      accumulator[entry.status] = (accumulator[entry.status] || 0) + 1;
    });
    return accumulator;
  }, {});
}

function buildMarkdownReport(result) {
  const lines = [];
  lines.push('# Page Links Repair');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Mode: ${result.mode}`);
  lines.push(`- Files scanned: ${result.scannedFiles}`);
  lines.push(`- Generated pages scanned: ${result.generatedFiles}`);
  lines.push(`- Relative href literals scanned: ${result.scannedMatches}`);
  lines.push(`- Planned rewrites: ${result.rewriteCount}`);
  lines.push(`- Unresolved links: ${result.unresolvedCount}`);
  lines.push(`- Generator-owned findings: ${result.generatorOwnedCount}`);
  lines.push(`- Skipped non-page/non-v2 hrefs: ${result.skippedCount}`);
  lines.push('');

  lines.push('## Status Counts');
  lines.push('| status | count |');
  lines.push('| --- | ---: |');
  Object.entries(result.statusCounts)
    .sort((left, right) => left[0].localeCompare(right[0]))
    .forEach(([status, count]) => {
      lines.push(`| ${status} | ${count} |`);
    });
  lines.push('');

  const changedFiles = result.files.filter((plan) => plan.rewrites.length > 0);
  lines.push('## Planned Rewrites');
  if (changedFiles.length === 0) {
    lines.push('- None');
  } else {
    changedFiles.forEach((plan) => {
      lines.push(`- ${plan.file}`);
      plan.rewrites.forEach((rewrite) => {
        const reason = rewrite.reason ? ` (${rewrite.reason}${typeof rewrite.confidence === 'number' ? `, score ${rewrite.confidence}` : ''})` : '';
        lines.push(`  - L${rewrite.line}: ${rewrite.rawHref} -> ${rewrite.replacement} [${rewrite.status}]${reason}`);
      });
    });
  }
  lines.push('');

  const unresolvedFiles = result.files.filter((plan) => plan.unresolved.length > 0);
  lines.push('## Unresolved');
  if (unresolvedFiles.length === 0) {
    lines.push('- None');
  } else {
    unresolvedFiles.forEach((plan) => {
      lines.push(`- ${plan.file}`);
      plan.unresolved.forEach((entry) => {
        lines.push(`  - L${entry.line}: ${entry.rawHref}`);
        if (entry.suggestions.length > 0) {
          entry.suggestions.forEach((suggestion) => {
            const score = typeof suggestion.score === 'number' ? `, score ${suggestion.score}` : '';
            lines.push(`    - suggestion: ${suggestion.href} (${suggestion.reason}${score})`);
          });
        } else {
          lines.push('    - suggestion: unknown');
        }
      });
    });
  }
  lines.push('');

  const generatorFiles = result.files.filter((plan) => plan.generatorOwned.length > 0);
  lines.push('## Generator-Owned Findings');
  if (generatorFiles.length === 0) {
    lines.push('- None');
  } else {
    generatorFiles.forEach((plan) => {
      lines.push(`- ${plan.file}`);
      plan.generatorOwned.forEach((entry) => {
        lines.push(`  - L${entry.line}: ${entry.rawHref} -> ${entry.replacement} [${entry.status}]`);
      });
    });
  }
  lines.push('');

  return `${lines.join('\n')}\n`;
}

function buildJsonReport(result) {
  return {
    generatedAt: new Date().toISOString(),
    mode: result.mode,
    filesArg: result.filesArg,
    scannedFiles: result.scannedFiles,
    generatedFiles: result.generatedFiles,
    scannedMatches: result.scannedMatches,
    rewriteCount: result.rewriteCount,
    unresolvedCount: result.unresolvedCount,
    generatorOwnedCount: result.generatorOwnedCount,
    skippedCount: result.skippedCount,
    statusCounts: result.statusCounts,
    files: result.files.map((plan) => ({
      file: plan.file,
      generated: plan.generated,
      scannedMatches: plan.scannedMatches,
      written: plan.written,
      rewrites: plan.rewrites.map((entry) => ({
        line: entry.line,
        column: entry.column,
        rawHref: entry.rawHref,
        replacement: entry.replacement,
        status: entry.status,
        reason: entry.reason || '',
        confidence: typeof entry.confidence === 'number' ? entry.confidence : null
      })),
      unresolved: plan.unresolved.map((entry) => ({
        line: entry.line,
        column: entry.column,
        rawHref: entry.rawHref,
        resolvedRoute: entry.resolvedRoute,
        status: entry.status,
        suggestions: entry.suggestions
      })),
      skipped: plan.skipped.map((entry) => ({
        line: entry.line,
        column: entry.column,
        rawHref: entry.rawHref,
        status: entry.status
      })),
      generatorOwned: plan.generatorOwned.map((entry) => ({
        line: entry.line,
        column: entry.column,
        rawHref: entry.rawHref,
        replacement: entry.replacement,
        status: entry.status
      }))
    }))
  };
}

function writeReports(paths, markdown, jsonReport) {
  if (!paths) return;
  ensureDir(paths.dir);
  fs.writeFileSync(paths.markdown, markdown, 'utf8');
  fs.writeFileSync(paths.json, `${JSON.stringify(jsonReport, null, 2)}\n`, 'utf8');
}

function run(options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));
  const quiet = options.quiet === true;
  const docsJson = options.docsJson || loadDocsJson(repoRoot);
  const knownRoutes = options.knownRoutes || collectKnownPublishedRoutes(repoRoot);
  const targetFiles = options.targetFiles || collectTargetFiles(repoRoot, args.files);
  const knownRoutesSet = new Set(knownRoutes.map((r) => normalizeRoute(r)));
  const gitRenameMap = buildGitRenameMap(repoRoot, knownRoutesSet);
  const analyzeOptions = { gitRenameMap };
  const filePlans = targetFiles.map((filePath) =>
    analyzeFile({
      repoRoot,
      filePath,
      docsJson,
      knownRoutes,
      mode: args.mode,
      options: analyzeOptions
    })
  );

  const summary = {
    mode: args.mode,
    filesArg: [...args.files],
    scannedFiles: filePlans.length,
    generatedFiles: filePlans.filter((plan) => plan.generated).length,
    scannedMatches: filePlans.reduce((total, plan) => total + plan.scannedMatches, 0),
    rewriteCount: filePlans.reduce((total, plan) => total + plan.rewrites.length, 0),
    unresolvedCount: filePlans.reduce((total, plan) => total + plan.unresolved.length, 0),
    generatorOwnedCount: filePlans.reduce((total, plan) => total + plan.generatorOwned.length, 0),
    skippedCount: filePlans.reduce((total, plan) => total + plan.skipped.length, 0),
    statusCounts: summariseByStatus(filePlans),
    files: filePlans
  };

  const markdownReport = buildMarkdownReport(summary);
  const jsonReport = buildJsonReport(summary);
  const reportPaths = deriveReportPaths(repoRoot, {
    ...args,
    reportDir: args.reportDir || DEFAULT_REPORT_DIR
  });

  if (args.reportDir) {
    writeReports(reportPaths, markdownReport, jsonReport);
  }

  if (!quiet) {
    const verb = args.mode === 'write' ? 'Applied' : 'Planned';
    console.log(`${verb} ${summary.rewriteCount} href rewrite(s) across ${summary.scannedFiles} publishable v2 page file(s).`);
    console.log(`  - unresolved links: ${summary.unresolvedCount}`);
    console.log(`  - generator-owned findings: ${summary.generatorOwnedCount}`);
    console.log(`  - skipped non-page/non-v2 hrefs: ${summary.skippedCount}`);
    if (args.reportDir) {
      console.log(`  - markdown report: ${normalizeRepoPath(path.relative(repoRoot, reportPaths.markdown))}`);
      console.log(`  - json report: ${normalizeRepoPath(path.relative(repoRoot, reportPaths.json))}`);
    }
  }

  return {
    ...summary,
    markdownReport,
    jsonReport,
    reportPaths
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const result = run({ parsedArgs: args });
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result.jsonReport, null, 2)}\n`);
  }
  process.exit(0);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  DEFAULT_REPORT_DIR,
  analyzeFile,
  analyzeHrefMatch,
  buildScopeLabel,
  collectHrefLiteralMatches,
  collectKnownPublishedRoutes,
  collectTargetFiles,
  isCandidatePageHref,
  parseArgs,
  printHelp,
  run
};
