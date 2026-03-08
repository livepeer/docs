#!/usr/bin/env node
/**
 * @script            check-double-headers
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2, docs.json
 * @owner             docs
 * @needs             1.12, 1.13
 * @purpose-statement Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.
 * @pipeline          manual — validator, run on-demand only
 * @usage             node tools/scripts/validators/content/check-double-headers.js [--file <path>] [--files <a,b>] [--fix]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('gray-matter');
const { getMdxFiles } = require('../../../../tests/utils/file-walker');

const RULE_DUPLICATE_TITLE = 'duplicate-title';
const RULE_DUPLICATE_DESCRIPTION = 'duplicate-description';

let parserPromise = null;

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

async function getParser() {
  if (!parserPromise) {
    parserPromise = (async () => {
      const [{ unified }, { default: remarkParse }, { default: remarkGfm }, { default: remarkMdx }] =
        await Promise.all([import('unified'), import('remark-parse'), import('remark-gfm'), import('remark-mdx')]);
      return unified().use(remarkParse).use(remarkGfm).use(remarkMdx);
    })();
  }

  return parserPromise;
}

function printHelp() {
  process.stdout.write(
    [
      'Usage:',
      '  node tools/scripts/validators/content/check-double-headers.js [--file <path>] [--files <a,b>] [--fix]',
      '',
      'Options:',
      '  --file <path>   Scan a single file (repeatable). Accepts absolute or repo-relative paths.',
      '  --files <a,b>   Scan a comma-separated list of files.',
      '  --fix           Remove flagged duplicate H1 headings and exact duplicate opening paragraphs.',
      '  --help          Show this help message.',
      '',
      'Default behavior:',
      '  Scans routable v2 MDX pages from docs.json navigation.'
    ].join('\n')
  );
  process.stdout.write('\n');
}

function parseArgs(argv) {
  const args = {
    fix: false,
    help: false,
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--fix') {
      args.fix = true;
      continue;
    }
    if (token === '--file') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) throw new Error('Missing value for --file.');
      args.files.push(value);
      i += 1;
      continue;
    }
    if (token.startsWith('--file=')) {
      const value = token.slice('--file='.length).trim();
      if (!value) throw new Error('Missing value for --file.');
      args.files.push(value);
      continue;
    }
    if (token === '--files') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) throw new Error('Missing value for --files.');
      parseCsvFiles(value).forEach((filePath) => args.files.push(filePath));
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      const value = token.slice('--files='.length).trim();
      if (!value) throw new Error('Missing value for --files.');
      parseCsvFiles(value).forEach((filePath) => args.files.push(filePath));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = dedupe(args.files.map(resolveInputPath));
  return args;
}

function parseCsvFiles(value) {
  return String(value || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function resolveInputPath(filePath) {
  if (!filePath) return '';
  return path.isAbsolute(filePath) ? path.normalize(filePath) : path.resolve(REPO_ROOT, filePath);
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function normalizeComparable(value) {
  return normalizeWhitespace(value).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function levenshteinDistance(a, b) {
  const left = String(a || '');
  const right = String(b || '');

  if (!left) return right.length;
  if (!right) return left.length;

  const previous = new Array(right.length + 1);
  const current = new Array(right.length + 1);

  for (let j = 0; j <= right.length; j += 1) {
    previous[j] = j;
  }

  for (let i = 1; i <= left.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      current[j] = Math.min(current[j - 1] + 1, previous[j] + 1, previous[j - 1] + cost);
    }
    for (let j = 0; j <= right.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[right.length];
}

function isSimilar(a, b) {
  const na = normalizeComparable(a);
  const nb = normalizeComparable(b);

  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;

  return levenshteinDistance(na, nb) < Math.min(na.length, nb.length) * 0.2;
}

function getBodyStartOffset(rawContent) {
  const raw = String(rawContent || '');
  const bomOffset = raw.startsWith('\uFEFF') ? 1 : 0;
  const body = raw.slice(bomOffset);

  if (!body.startsWith('---')) {
    return bomOffset;
  }

  const match = body.match(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) {
    return bomOffset;
  }

  return bomOffset + match[0].length;
}

function getLineNumberAtOffset(rawContent, offset) {
  const raw = String(rawContent || '');
  const limited = raw.slice(0, Math.max(0, offset));
  let lines = 1;

  for (let i = 0; i < limited.length; i += 1) {
    if (limited[i] === '\n') lines += 1;
  }

  return lines;
}

function formatDisplayPath(absPath) {
  const relative = path.relative(REPO_ROOT, absPath);
  if (!relative.startsWith('..') && !path.isAbsolute(relative)) {
    return relative.split(path.sep).join('/');
  }
  return absPath;
}

function getFirstTopLevelNode(tree, predicate) {
  const children = Array.isArray(tree?.children) ? tree.children : [];
  for (const child of children) {
    if (predicate(child)) return child;
  }
  return null;
}

function extractNodeText(node) {
  const parts = [];
  collectNodeText(node, parts);
  return normalizeWhitespace(parts.join(' '));
}

function collectNodeText(node, parts) {
  if (!node || typeof node !== 'object') return;

  if ((node.type === 'text' || node.type === 'inlineCode') && typeof node.value === 'string') {
    parts.push(node.value);
    return;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => collectNodeText(child, parts));
  }
}

function getTitleMatchType(title, headingText) {
  const rawTitle = normalizeWhitespace(title);
  const rawHeading = normalizeWhitespace(headingText);

  if (!rawTitle || !rawHeading) return '';
  if (rawTitle === rawHeading) return 'exact';
  if (rawTitle.toLowerCase() === rawHeading.toLowerCase()) return 'case-insensitive';

  const normalizedTitle = normalizeComparable(rawTitle);
  const normalizedHeading = normalizeComparable(rawHeading);
  if (normalizedTitle && normalizedHeading && (normalizedTitle.includes(normalizedHeading) || normalizedHeading.includes(normalizedTitle))) {
    return 'substring';
  }

  return '';
}

function getDescriptionMatchType(description, paragraphText) {
  const normalizedDescription = normalizeComparable(description);
  const normalizedParagraph = normalizeComparable(paragraphText);

  if (!normalizedDescription || !normalizedParagraph) return '';
  if (normalizedDescription === normalizedParagraph) return 'exact';
  if (isSimilar(description, paragraphText)) return 'similar';
  return '';
}

function isExactNormalizedMatch(a, b) {
  const left = normalizeComparable(a);
  const right = normalizeComparable(b);
  return Boolean(left) && left === right;
}

function buildRemovalRange(rawContent, bodyStartOffset, node) {
  const startOffset = node?.position?.start?.offset;
  const endOffset = node?.position?.end?.offset;

  if (!Number.isInteger(startOffset) || !Number.isInteger(endOffset)) {
    return null;
  }

  const rawStart = bodyStartOffset + startOffset;
  const rawEnd = extendRemovalEnd(rawContent, bodyStartOffset + endOffset);

  if (rawEnd <= rawStart) {
    return null;
  }

  return { start: rawStart, end: rawEnd };
}

function extendRemovalEnd(rawContent, initialEnd) {
  const raw = String(rawContent || '');
  let cursor = Math.max(0, initialEnd);

  if (raw.startsWith('\r\n', cursor)) {
    cursor += 2;
  } else if (raw[cursor] === '\n' || raw[cursor] === '\r') {
    cursor += 1;
  } else {
    return cursor;
  }

  while (cursor < raw.length) {
    let lineEnd = cursor;
    while (lineEnd < raw.length && raw[lineEnd] !== '\n' && raw[lineEnd] !== '\r') {
      lineEnd += 1;
    }

    const line = raw.slice(cursor, lineEnd);
    if (line.trim() !== '') {
      break;
    }

    if (raw.startsWith('\r\n', lineEnd)) {
      cursor = lineEnd + 2;
      continue;
    }
    if (raw[lineEnd] === '\n' || raw[lineEnd] === '\r') {
      cursor = lineEnd + 1;
      continue;
    }

    cursor = lineEnd;
    break;
  }

  return cursor;
}

function applyFixes(rawContent, ranges) {
  const raw = String(rawContent || '');
  const ordered = [...ranges].sort((a, b) => b.start - a.start);
  let nextContent = raw;

  for (const range of ordered) {
    nextContent = nextContent.slice(0, range.start) + nextContent.slice(range.end);
  }

  return nextContent;
}

function makeFinding({
  rule,
  filePath,
  line,
  message,
  evidence,
  matchType,
  fixable,
  range
}) {
  return {
    rule,
    filePath,
    line,
    message,
    evidence,
    matchType,
    fixable: Boolean(fixable),
    fixed: false,
    range: range || null
  };
}

async function scanFile(filePath, options = {}) {
  const fix = Boolean(options.fix);
  const absPath = resolveInputPath(filePath);
  const displayPath = formatDisplayPath(absPath);
  const result = {
    filePath: absPath,
    displayPath,
    findings: [],
    fixedCount: 0,
    error: ''
  };

  if (!fs.existsSync(absPath)) {
    result.error = 'File does not exist.';
    return result;
  }

  let rawContent = '';
  try {
    rawContent = fs.readFileSync(absPath, 'utf8');
  } catch (error) {
    result.error = `Unable to read file: ${error.message}`;
    return result;
  }

  const parsed = matter(rawContent);
  const title = typeof parsed.data?.title === 'string' ? parsed.data.title : '';
  const description = typeof parsed.data?.description === 'string' ? parsed.data.description : '';
  const bodyStartOffset = getBodyStartOffset(rawContent);
  const bodyStartLine = getLineNumberAtOffset(rawContent, bodyStartOffset);
  const bodyContent = rawContent.slice(bodyStartOffset);

  let tree;
  try {
    const parser = await getParser();
    tree = parser.parse(bodyContent);
  } catch (error) {
    result.error = `Unable to parse MDX body: ${error.message}`;
    return result;
  }

  const firstH1 = getFirstTopLevelNode(tree, (node) => node?.type === 'heading' && node.depth === 1);
  const firstParagraph = getFirstTopLevelNode(tree, (node) => node?.type === 'paragraph');

  if (title && firstH1) {
    const headingText = extractNodeText(firstH1);
    const matchType = getTitleMatchType(title, headingText);
    if (matchType) {
      result.findings.push(
        makeFinding({
          rule: RULE_DUPLICATE_TITLE,
          filePath: absPath,
          line: bodyStartLine + (firstH1.position.start.line - 1),
          message: `Body H1 duplicates frontmatter title (${matchType} match).`,
          evidence: `"${headingText}"`,
          matchType,
          fixable: true,
          range: buildRemovalRange(rawContent, bodyStartOffset, firstH1)
        })
      );
    }
  }

  if (description && firstParagraph) {
    const paragraphText = extractNodeText(firstParagraph);
    const matchType = getDescriptionMatchType(description, paragraphText);
    if (matchType) {
      const exactNormalizedMatch = isExactNormalizedMatch(description, paragraphText);
      result.findings.push(
        makeFinding({
          rule: RULE_DUPLICATE_DESCRIPTION,
          filePath: absPath,
          line: bodyStartLine + (firstParagraph.position.start.line - 1),
          message: `Opening paragraph duplicates frontmatter description (${matchType} match).`,
          evidence: `"${paragraphText}"`,
          matchType,
          fixable: exactNormalizedMatch,
          range: exactNormalizedMatch ? buildRemovalRange(rawContent, bodyStartOffset, firstParagraph) : null
        })
      );
    }
  }

  if (!fix || result.findings.length === 0) {
    return result;
  }

  const fixableRanges = result.findings
    .filter((finding) => finding.fixable && finding.range)
    .map((finding) => finding.range);

  if (fixableRanges.length === 0) {
    return result;
  }

  const nextContent = applyFixes(rawContent, fixableRanges);
  if (nextContent === rawContent) {
    return result;
  }

  fs.writeFileSync(absPath, nextContent, 'utf8');

  result.findings.forEach((finding) => {
    if (finding.fixable && finding.range) {
      finding.fixed = true;
      result.fixedCount += 1;
    }
  });

  return result;
}

function getDefaultTargets() {
  return getMdxFiles(REPO_ROOT)
    .filter((filePath) => filePath.endsWith('.mdx'))
    .map((filePath) => path.resolve(filePath));
}

async function run(options = {}) {
  const explicitFiles = Array.isArray(options.files) ? options.files : [];
  const targets = explicitFiles.length > 0 ? dedupe(explicitFiles.map(resolveInputPath)) : getDefaultTargets();
  const results = [];

  for (const target of targets) {
    results.push(await scanFile(target, options));
  }

  const errors = results.filter((result) => result.error);
  const findings = results.flatMap((result) => result.findings);
  const fixed = findings.filter((finding) => finding.fixed).length;
  const remaining = findings.length - fixed;

  return {
    scanned: results.length,
    results,
    errors,
    findings,
    fixed,
    remaining,
    passed: errors.length === 0 && remaining === 0
  };
}

function printResults(summary) {
  summary.results.forEach((result) => {
    if (result.error) {
      console.error(`${result.displayPath}:1 [error] ${result.error}`);
      return;
    }

    result.findings.forEach((finding) => {
      const status = finding.fixed ? 'fixed' : 'found';
      console.error(
        `${result.displayPath}:${finding.line} [${finding.rule}] ${finding.message} ${status}. ${finding.evidence}`
      );
    });
  });

  const message = `Scanned ${summary.scanned} file(s); found ${summary.findings.length} finding(s); fixed ${summary.fixed}; remaining ${summary.remaining}.`;
  if (summary.passed) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

if (require.main === module) {
  (async () => {
    try {
      const args = parseArgs(process.argv.slice(2));
      if (args.help) {
        printHelp();
        process.exit(0);
      }

      const summary = await run(args);
      printResults(summary);
      process.exit(summary.passed ? 0 : 1);
    } catch (error) {
      console.error(`❌ ${error.message}`);
      process.exit(1);
    }
  })();
}

module.exports = {
  isSimilar,
  run,
  scanFile
};
