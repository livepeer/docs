#!/usr/bin/env node
/**
 * @script            repair-spelling
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             v2-content
 * @owner             docs
 * @needs             R-R2
 * @purpose-statement Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.
 * @pipeline          manual
 * @dualmode          --dry-run (validator: show corrections) | --write (remediator: apply corrections)
 * @usage             node tools/scripts/remediators/content/repair-spelling.js --dry-run
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const { getMdxFiles, getStagedDocsPageFiles } = require('../../../../tests/utils/file-walker');
const { resolveCspellConfig } = require('../../../../tests/utils/spell-checker');
const { parseMdx } = require('../../i18n/lib/mdx-parser');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const URL_REGEX = /\b(?:https?:\/\/|mailto:)[^\s<`)"']+/gi;

let cspellApiPromise = null;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/remediators/content/repair-spelling.js [--dry-run|--write] [--staged|--files <path[,path...]>]',
      '',
      'Modes:',
      '  --dry-run   Show deterministic spelling repairs without modifying files (default).',
      '  --write     Apply deterministic spelling repairs and print per-file diffs.',
      '',
      'Scope:',
      '  --staged    Limit to staged routable v2 MDX files.',
      '  --files     Limit to explicit MDX files (comma-separated, repeatable).',
      '',
      'Safety:',
      '  - Repairs only prose ranges parsed from MDX text nodes.',
      '  - Never edits frontmatter, inline code, fenced code, or URL substrings.',
      '  - Applies a correction only when cspell gives a deterministic, dictionary-backed choice.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    stagedOnly: false,
    files: [],
    help: false
  };

  let explicitModeCount = 0;

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

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
    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }
    if (token === '--files') {
      const raw = String(argv[i + 1] || '').trim();
      if (!raw) throw new Error('Missing value for --files');
      raw
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => args.files.push(item));
      i += 1;
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

    throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --write');
  }

  if (args.stagedOnly && args.files.length > 0) {
    throw new Error('Use either --staged or --files, not both');
  }

  args.files = [...new Set(args.files)];
  return args;
}

function splitLeadingFrontmatter(content) {
  const text = String(content || '');
  const match = text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return {
      frontmatter: '',
      body: text,
      bodyOffset: 0
    };
  }

  return {
    frontmatter: match[0],
    body: text.slice(match[0].length),
    bodyOffset: match[0].length
  };
}

function mergeRanges(ranges) {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];
  const ordered = ranges
    .filter((range) => Number.isFinite(range.start) && Number.isFinite(range.end) && range.end > range.start)
    .sort((a, b) => a.start - b.start || a.end - b.end);

  const out = [ordered[0]];
  for (let i = 1; i < ordered.length; i += 1) {
    const current = ordered[i];
    const previous = out[out.length - 1];
    if (current.start <= previous.end) {
      previous.end = Math.max(previous.end, current.end);
      continue;
    }
    out.push({ start: current.start, end: current.end });
  }
  return out;
}

function splitTextRangeByUrls(baseStart, value) {
  const text = String(value || '');
  const ranges = [];
  let cursor = 0;
  let match;
  let foundUrl = false;

  URL_REGEX.lastIndex = 0;
  while ((match = URL_REGEX.exec(text)) !== null) {
    foundUrl = true;
    if (match.index > cursor) {
      ranges.push({
        start: baseStart + cursor,
        end: baseStart + match.index
      });
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    ranges.push({
      start: baseStart + cursor,
      end: baseStart + text.length
    });
  }

  if (!foundUrl && ranges.length === 0 && text.length > 0) {
    ranges.push({
      start: baseStart,
      end: baseStart + text.length
    });
  }

  return ranges;
}

function walkTextNodes(node, visitor) {
  if (!node || typeof node !== 'object') return;

  if (node.type === 'text') {
    visitor(node);
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => walkTextNodes(child, visitor));
  }
}

async function collectEligibleRanges(content) {
  const { body, bodyOffset } = splitLeadingFrontmatter(content);
  if (!body.trim()) return [];

  const tree = await parseMdx(body);
  const ranges = [];

  walkTextNodes(tree, (node) => {
    const startOffset = node?.position?.start?.offset;
    const endOffset = node?.position?.end?.offset;
    if (!Number.isFinite(startOffset) || !Number.isFinite(endOffset) || endOffset <= startOffset) {
      return;
    }

    const absoluteStart = bodyOffset + startOffset;
    const value = String(node.value || '');
    splitTextRangeByUrls(absoluteStart, value).forEach((range) => ranges.push(range));
  });

  return mergeRanges(ranges);
}

function isRangeEligible(ranges, start, end) {
  return ranges.some((range) => start >= range.start && end <= range.end);
}

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase();
}

function dedupeSuggestions(items) {
  const out = [];
  const seen = new Set();
  items.forEach((item) => {
    const key = normalizeWord(item.wordAdjustedToMatchCase || item.word);
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(item);
  });
  return out;
}

function matchCaseLike(source, target) {
  const original = String(source || '');
  const next = String(target || '');
  if (!original) return next;
  if (original === original.toUpperCase()) return next.toUpperCase();
  if (original === original.toLowerCase()) return next.toLowerCase();
  if (original[0] === original[0].toUpperCase() && original.slice(1) === original.slice(1).toLowerCase()) {
    return next.charAt(0).toUpperCase() + next.slice(1).toLowerCase();
  }
  return next;
}

function chooseCandidateWord(issueText, candidate) {
  const adjusted = candidate.wordAdjustedToMatchCase || candidate.word || '';
  return adjusted ? matchCaseLike(issueText, adjusted) : '';
}

function isSafeReplacementForm(original, replacement) {
  const source = String(original || '');
  const target = String(replacement || '');
  if (!target) return false;

  const hasPossessiveSource = /(?:'s|s'|’s|s’)$/i.test(source);
  const hasApostropheTarget = /['’]/.test(target);
  if (hasPossessiveSource && !hasApostropheTarget) {
    return false;
  }

  return true;
}

function resolveSafeReplacement({ issue, suggestions = null, customWords = new Set() }) {
  const issueText = String(issue?.text || '');
  const normalizedIssue = normalizeWord(issueText);

  const preferredIssueSuggestions = dedupeSuggestions(
    (issue?.suggestionsEx || []).filter((item) => item && item.isPreferred && normalizeWord(item.word) !== normalizedIssue)
  );
  if (preferredIssueSuggestions.length === 1) {
    const replacement = chooseCandidateWord(issueText, preferredIssueSuggestions[0]);
    if (!isSafeReplacementForm(issueText, replacement)) {
      return { replacement: null, reason: 'inflected-form-mismatch' };
    }
    return {
      replacement,
      source: 'preferred-issue-suggestion'
    };
  }

  const allowedSuggestions = dedupeSuggestions(
    (suggestions?.suggestions || []).filter((item) => {
      if (!item || item.forbidden || item.noSuggest) return false;
      return normalizeWord(item.word) !== normalizedIssue;
    })
  );

  if (allowedSuggestions.length === 0) {
    return { replacement: null, reason: 'no-safe-suggestion' };
  }

  const dictionaryMatches = issue?.isFlagged
    ? allowedSuggestions.filter((item) => customWords.has(normalizeWord(item.word)))
    : [];
  if (dictionaryMatches.length > 0) {
    const minCost = Math.min(...dictionaryMatches.map((item) => Number(item.cost) || 0));
    const topMatches = dictionaryMatches.filter((item) => (Number(item.cost) || 0) === minCost);
    if (topMatches.length === 1) {
      const replacement = chooseCandidateWord(issueText, topMatches[0]);
      if (!isSafeReplacementForm(issueText, replacement)) {
        return { replacement: null, reason: 'inflected-form-mismatch' };
      }
      return {
        replacement,
        source: 'custom-dictionary-suggestion'
      };
    }
    return { replacement: null, reason: 'ambiguous-custom-dictionary-suggestions' };
  }

  const preferredSuggestions = allowedSuggestions.filter((item) => item.isPreferred);
  if (preferredSuggestions.length === 1) {
    const replacement = chooseCandidateWord(issueText, preferredSuggestions[0]);
    if (!isSafeReplacementForm(issueText, replacement)) {
      return { replacement: null, reason: 'inflected-form-mismatch' };
    }
    return {
      replacement,
      source: 'preferred-suggestion'
    };
  }

  return { replacement: null, reason: 'ambiguous-suggestions' };
}

function getRelativePath(filePath) {
  return toPosix(path.relative(REPO_ROOT, filePath));
}

function resolveExplicitFiles(files) {
  return [...new Set(files.map((filePath) => {
    const absolutePath = path.isAbsolute(filePath)
      ? filePath
      : path.resolve(REPO_ROOT, filePath);
    return absolutePath;
  }))].filter((absolutePath) => {
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`File not found: ${absolutePath}`);
    }
    if (!absolutePath.endsWith('.mdx')) {
      throw new Error(`Only MDX files are supported: ${absolutePath}`);
    }
    return true;
  }).sort((a, b) => getRelativePath(a).localeCompare(getRelativePath(b)));
}

function resolveTargetFiles(args) {
  if (args.files.length > 0) {
    return resolveExplicitFiles(args.files);
  }

  if (args.stagedOnly) {
    return getStagedDocsPageFiles(REPO_ROOT).filter((filePath) => filePath.endsWith('.mdx'));
  }

  return getMdxFiles(REPO_ROOT);
}

async function loadCspellApi() {
  if (!cspellApiPromise) {
    cspellApiPromise = import('cspell-lib');
  }
  return cspellApiPromise;
}

function resolveRepoScopedPath(configPath, candidatePath) {
  if (!candidatePath) return '';
  if (path.isAbsolute(candidatePath)) return candidatePath;

  const candidates = [
    path.resolve(REPO_ROOT, candidatePath),
    path.resolve(path.dirname(configPath), candidatePath)
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return path.resolve(REPO_ROOT, candidatePath);
}

function loadCustomDictionaryWordsFromConfig(configPath, visitedConfigs = new Set(), wordSet = new Set()) {
  const normalizedConfigPath = path.resolve(configPath);
  if (visitedConfigs.has(normalizedConfigPath) || !fs.existsSync(normalizedConfigPath)) {
    return wordSet;
  }
  visitedConfigs.add(normalizedConfigPath);

  let config;
  try {
    config = JSON.parse(fs.readFileSync(normalizedConfigPath, 'utf8'));
  } catch (_error) {
    return wordSet;
  }

  const imports = Array.isArray(config.import) ? config.import : config.import ? [config.import] : [];
  imports.forEach((importPath) => {
    const resolvedImportPath = resolveRepoScopedPath(normalizedConfigPath, importPath);
    if (fs.existsSync(resolvedImportPath)) {
      loadCustomDictionaryWordsFromConfig(resolvedImportPath, visitedConfigs, wordSet);
    }
  });

  const dictionaryDefinitions = Array.isArray(config.dictionaryDefinitions) ? config.dictionaryDefinitions : [];
  dictionaryDefinitions
    .filter((definition) => definition && definition.path)
    .forEach((definition) => {
      const dictionaryPath = resolveRepoScopedPath(normalizedConfigPath, definition.path);
      if (!fs.existsSync(dictionaryPath)) return;

      try {
        const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
        const words = Array.isArray(dictionary.words) ? dictionary.words : [];
        words.forEach((word) => wordSet.add(normalizeWord(word)));
      } catch (_error) {
        // Skip unreadable custom dictionaries; spell-checking still runs via cspell config.
      }
    });

  return wordSet;
}

async function buildRuntimeContext() {
  const cspell = await loadCspellApi();
  const configPath = resolveCspellConfig();
  const config = await cspell.loadConfig(configPath);
  const customWords = loadCustomDictionaryWordsFromConfig(configPath);

  return {
    configPath,
    config,
    customWords,
    spellCheckFile: cspell.spellCheckFile,
    suggestionsForWord: cspell.suggestionsForWord
  };
}

function toLineColumn(issue) {
  const line = Number(issue?.line?.position?.line);
  const column = Number(issue?.line?.position?.character);
  return {
    line: Number.isFinite(line) ? line + 1 : 1,
    column: Number.isFinite(column) ? column + 1 : 1
  };
}

async function collectFileRepairs(filePath, runtime) {
  const content = fs.readFileSync(filePath, 'utf8');
  let eligibleRanges = [];

  try {
    eligibleRanges = await collectEligibleRanges(content);
  } catch (error) {
    return {
      filePath,
      relativePath: getRelativePath(filePath),
      content,
      repairs: [],
      skipped: [],
      warning: `MDX parse failed: ${error.message}`
    };
  }

  const spellResult = await runtime.spellCheckFile(filePath, { configFile: runtime.configPath }, {});
  const repairs = [];
  const skipped = [];

  for (const issue of spellResult.issues || []) {
    const start = Number(issue.offset);
    const end = start + Number(issue.length || 0);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) continue;

    if (!isRangeEligible(eligibleRanges, start, end)) {
      skipped.push({
        issue,
        reason: 'excluded-context'
      });
      continue;
    }

    let suggestions = null;
    if (issue.isFlagged || !Array.isArray(issue.suggestionsEx) || issue.suggestionsEx.length === 0) {
      suggestions = await runtime.suggestionsForWord(issue.text, {
        languageId: 'markdown',
        locale: 'en-GB'
      }, runtime.config);
    }

    const resolved = resolveSafeReplacement({
      issue,
      suggestions,
      customWords: runtime.customWords
    });

    if (!resolved.replacement || resolved.replacement === content.slice(start, end)) {
      skipped.push({
        issue,
        reason: resolved.reason || 'no-change'
      });
      continue;
    }

    const position = toLineColumn(issue);
    repairs.push({
      start,
      end,
      original: content.slice(start, end),
      replacement: resolved.replacement,
      line: position.line,
      column: position.column,
      source: resolved.source,
      flagged: Boolean(issue.isFlagged)
    });
  }

  const uniqueRepairs = [...new Map(repairs.map((repair) => [`${repair.start}:${repair.end}`, repair])).values()]
    .sort((a, b) => a.start - b.start);

  return {
    filePath,
    relativePath: getRelativePath(filePath),
    content,
    repairs: uniqueRepairs,
    skipped,
    warning: null
  };
}

function applyRepairs(content, repairs) {
  let nextContent = String(content || '');
  [...repairs]
    .sort((a, b) => b.start - a.start)
    .forEach((repair) => {
      nextContent = `${nextContent.slice(0, repair.start)}${repair.replacement}${nextContent.slice(repair.end)}`;
    });
  return nextContent;
}

function renderDiff(relativePath, before, after) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'repair-spelling-'));
  const beforePath = path.join(tempDir, 'before.mdx');
  const afterPath = path.join(tempDir, 'after.mdx');

  fs.writeFileSync(beforePath, before, 'utf8');
  fs.writeFileSync(afterPath, after, 'utf8');

  const diff = spawnSync(
    'git',
    [
      '--no-pager',
      'diff',
      '--no-index',
      '--no-color',
      '--label',
      `a/${relativePath}`,
      '--label',
      `b/${relativePath}`,
      '--',
      beforePath,
      afterPath
    ],
    {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    }
  );

  fs.rmSync(tempDir, { recursive: true, force: true });

  if (diff.stdout) return diff.stdout.trimEnd();
  if (diff.stderr) return diff.stderr.trimEnd();
  return '';
}

function defaultLogger(message) {
  console.log(message);
}

async function run(options = {}) {
  const args = options.args || parseArgs(process.argv.slice(2));
  const log = options.log || (options.quiet ? () => {} : defaultLogger);
  const targetFiles = Array.isArray(options.files)
    ? [...options.files]
    : resolveTargetFiles(args);
  const runtime = options.runtime || await buildRuntimeContext();

  const summary = {
    mode: args.mode,
    totalFiles: targetFiles.length,
    filesWithRepairs: 0,
    proposedRepairs: 0,
    skippedIssues: 0,
    warnings: [],
    files: []
  };

  if (targetFiles.length === 0) {
    log('No matching MDX files found.');
    return summary;
  }

  for (const filePath of targetFiles) {
    const fileResult = await collectFileRepairs(filePath, runtime);
    summary.files.push(fileResult);
    summary.proposedRepairs += fileResult.repairs.length;
    summary.skippedIssues += fileResult.skipped.length;

    if (fileResult.warning) {
      summary.warnings.push(`${fileResult.relativePath}: ${fileResult.warning}`);
      log(`WARN ${fileResult.relativePath}: ${fileResult.warning}`);
    }

    if (fileResult.repairs.length === 0 && !fileResult.warning) {
      continue;
    }

    if (fileResult.repairs.length > 0) {
      summary.filesWithRepairs += 1;
      log(fileResult.relativePath);
      fileResult.repairs.forEach((repair) => {
        log(`  ${repair.line}:${repair.column} ${repair.original} -> ${repair.replacement} [${repair.source}]`);
      });
    }

    if (fileResult.skipped.length > 0) {
      const counts = fileResult.skipped.reduce((accumulator, entry) => {
        const key = entry.reason || 'unknown';
        accumulator[key] = (accumulator[key] || 0) + 1;
        return accumulator;
      }, {});
      const parts = Object.keys(counts)
        .sort()
        .map((reason) => `${counts[reason]} ${reason}`)
        .join(', ');
      log(`  skipped: ${parts}`);
    }

    if (args.mode === 'write' && fileResult.repairs.length > 0) {
      const nextContent = applyRepairs(fileResult.content, fileResult.repairs);
      fs.writeFileSync(fileResult.filePath, nextContent, 'utf8');
      const diffText = renderDiff(fileResult.relativePath, fileResult.content, nextContent);
      if (diffText) {
        log(diffText);
      }
    }
  }

  log(
    [
      '',
      `Mode: ${args.mode}`,
      `Files scanned: ${summary.totalFiles}`,
      `Files with repairs: ${summary.filesWithRepairs}`,
      `Proposed repairs: ${summary.proposedRepairs}`,
      `Skipped issues: ${summary.skippedIssues}`
    ].join('\n')
  );

  return summary;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  await run({ args });
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`repair-spelling failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  applyRepairs,
  collectEligibleRanges,
  parseArgs,
  resolveSafeReplacement,
  run,
  splitLeadingFrontmatter
};
