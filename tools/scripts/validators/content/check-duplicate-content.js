#!/usr/bin/env node
/**
 * @script            check-duplicate-content
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2, docs.json
 * @owner             docs
 * @needs             SE-3-02
 * @purpose-statement Detects duplicate content across v2 MDX pages: exact-duplicate pages, near-duplicate pages, and shared duplicate paragraph blocks.
 * @pipeline          manual — validator, run on-demand only
 * @usage             node tools/scripts/validators/content/check-duplicate-content.js [--path <repo-path>] [--strict] [--min-block-pages <n>] [--json]
 */

'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('gray-matter');
const { getMdxFiles } = require('../../../../tests/utils/file-walker');

// ── Constants ────────────────────────────────────────────────────────────────

const RULE_EXACT_DUPLICATE = 'exact-duplicate-page';
const RULE_NEAR_DUPLICATE = 'near-duplicate-page';
const RULE_DUPLICATE_BLOCK = 'duplicate-block';

/** Jaccard similarity threshold (0–1) above which pages are near-duplicates. */
const NEAR_DUPLICATE_THRESHOLD = 0.8;

/** Minimum word count for a paragraph to be eligible for block-duplicate detection. */
const MIN_BLOCK_WORDS = 30;

/** Default: flag blocks shared by this many or more pages. */
const DEFAULT_MIN_BLOCK_PAGES = 3;

/** Maximum characters shown in evidence snippet for duplicate blocks. */
const MAX_EVIDENCE_SNIPPET_LENGTH = 120;

// ── Repo root ────────────────────────────────────────────────────────────────

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

// ── CLI ──────────────────────────────────────────────────────────────────────

function printHelp() {
  process.stdout.write(
    [
      'Usage:',
      '  node tools/scripts/validators/content/check-duplicate-content.js [options]',
      '',
      'Options:',
      '  --path <repo-path>        Restrict scan to a specific directory or file (repeatable).',
      '  --file <path>             Scan a single file. Accepts absolute or repo-relative paths.',
      '  --files <a,b>             Comma-separated list of files to scan.',
      '  --strict                  Exit 1 even when only near-duplicate or block findings exist.',
      '  --min-block-pages <n>     Minimum pages sharing a paragraph to flag it (default: 3).',
      '  --json                    Output a JSON report to stdout instead of human-readable text.',
      '  --help                    Show this help message.',
      '',
      'Default behaviour:',
      '  Scans all routable v2 MDX pages from docs.json navigation.'
    ].join('\n')
  );
  process.stdout.write('\n');
}

function parseArgs(argv) {
  const args = {
    help: false,
    strict: false,
    json: false,
    minBlockPages: DEFAULT_MIN_BLOCK_PAGES,
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--strict') {
      args.strict = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--min-block-pages') {
      const value = parseInt(String(argv[i + 1] || ''), 10);
      if (!Number.isFinite(value) || value < 2) throw new Error('--min-block-pages must be an integer >= 2.');
      args.minBlockPages = value;
      i += 1;
      continue;
    }
    if (token.startsWith('--min-block-pages=')) {
      const value = parseInt(token.slice('--min-block-pages='.length), 10);
      if (!Number.isFinite(value) || value < 2) throw new Error('--min-block-pages must be an integer >= 2.');
      args.minBlockPages = value;
      continue;
    }
    if (token === '--file' || token === '--path') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) throw new Error(`Missing value for ${token}.`);
      args.files.push(value);
      i += 1;
      continue;
    }
    if (token.startsWith('--file=') || token.startsWith('--path=')) {
      const eqIdx = token.indexOf('=');
      const value = token.slice(eqIdx + 1).trim();
      if (!value) throw new Error(`Missing value for ${token.slice(0, eqIdx)}.`);
      args.files.push(value);
      continue;
    }
    if (token === '--files') {
      const value = String(argv[i + 1] || '').trim();
      if (!value) throw new Error('Missing value for --files.');
      parseCsvFiles(value).forEach((f) => args.files.push(f));
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      const value = token.slice('--files='.length).trim();
      if (!value) throw new Error('Missing value for --files.');
      parseCsvFiles(value).forEach((f) => args.files.push(f));
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

// ── Path helpers ─────────────────────────────────────────────────────────────

function resolveInputPath(filePath) {
  if (!filePath) return '';
  return path.isAbsolute(filePath) ? path.normalize(filePath) : path.resolve(REPO_ROOT, filePath);
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function formatDisplayPath(absPath) {
  const relative = path.relative(REPO_ROOT, absPath);
  if (!relative.startsWith('..') && !path.isAbsolute(relative)) {
    return relative.split(path.sep).join('/');
  }
  return absPath;
}

// ── Content extraction ───────────────────────────────────────────────────────

/**
 * Strip frontmatter and return a normalised body string suitable for hashing
 * and similarity comparison.
 */
function extractBody(rawContent) {
  const parsed = matter(String(rawContent || ''));
  return parsed.content || '';
}

/**
 * Collapse runs of whitespace, strip MDX import/export lines, JSX tags, and
 * HTML comments so similarity is measured on prose content only.
 */
function normalizeBody(body) {
  return String(body || '')
    .replace(/^(import|export)\s+.*$/gm, '')   // MDX import/export
    .replace(/<[^>]+>/g, ' ')                  // JSX/HTML tags
    .replace(/\{[^}]*\}/g, ' ')               // JSX expressions
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * SHA-256 hash of a string (hex).
 */
function hashString(value) {
  return crypto.createHash('sha256').update(String(value || '')).digest('hex');
}

// ── Paragraph extraction ─────────────────────────────────────────────────────

/**
 * Split body content into paragraph-like chunks (blank-line separated blocks
 * that are not frontmatter, code fences, JSX tags, or import lines).
 *
 * Returns an array of { text, normalizedText, hash } objects.
 */
function extractParagraphs(body) {
  const chunks = String(body || '').split(/\n{2,}/);
  const paragraphs = [];

  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;

    // Skip code fences
    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) continue;

    // Skip lines that are entirely JSX/HTML tags or MDX expressions
    if (/^<[A-Z]/.test(trimmed) || /^\{/.test(trimmed)) continue;

    // Skip import/export statements
    if (/^(import|export)\s/.test(trimmed)) continue;

    // Skip headings (single-line headings starting with #)
    if (/^#{1,6}\s/.test(trimmed) && !trimmed.includes('\n')) continue;

    const normalized = normalizeBody(trimmed);
    if (!normalized) continue;

    const wordCount = normalized.split(/\s+/).filter(Boolean).length;
    if (wordCount < MIN_BLOCK_WORDS) continue;

    paragraphs.push({
      text: trimmed,
      normalizedText: normalized,
      hash: hashString(normalized)
    });
  }

  return paragraphs;
}

// ── Jaccard similarity ───────────────────────────────────────────────────────

/**
 * Build a set of overlapping word n-grams (shingles) from a string.
 */
function buildShingles(text, shingleSize = 5) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const shingles = new Set();

  for (let i = 0; i <= words.length - shingleSize; i += 1) {
    shingles.add(words.slice(i, i + shingleSize).join(' '));
  }

  return shingles;
}

/**
 * Jaccard similarity between two sets. Iterates over the smaller set for
 * better average-case performance.
 */
function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1;
  if (setA.size === 0 || setB.size === 0) return 0;

  const [smaller, larger] = setA.size <= setB.size ? [setA, setB] : [setB, setA];

  let intersectionSize = 0;
  for (const item of smaller) {
    if (larger.has(item)) intersectionSize += 1;
  }

  return intersectionSize / (setA.size + setB.size - intersectionSize);
}

// ── Finding builder ──────────────────────────────────────────────────────────

function makeFinding({ rule, files, message, evidence }) {
  return { rule, files, message, evidence: evidence || '' };
}

// ── Core detection ───────────────────────────────────────────────────────────

/**
 * Load all target files, extract body content, and compute metadata.
 */
function loadPages(filePaths) {
  const pages = [];

  for (const absPath of filePaths) {
    if (!fs.existsSync(absPath)) {
      pages.push({ absPath, displayPath: formatDisplayPath(absPath), error: 'File does not exist.' });
      continue;
    }

    let rawContent = '';
    try {
      rawContent = fs.readFileSync(absPath, 'utf8');
    } catch (err) {
      pages.push({ absPath, displayPath: formatDisplayPath(absPath), error: `Unable to read file: ${err.message}` });
      continue;
    }

    const body = extractBody(rawContent);
    const normalized = normalizeBody(body);
    const contentHash = hashString(normalized);
    const paragraphs = extractParagraphs(body);
    const shingles = buildShingles(normalized);

    pages.push({
      absPath,
      displayPath: formatDisplayPath(absPath),
      error: '',
      body,
      normalized,
      contentHash,
      paragraphs,
      shingles
    });
  }

  return pages;
}

/**
 * Detect pages whose full normalised body content is identical.
 */
function detectExactDuplicates(pages) {
  const findings = [];
  const byHash = new Map();

  for (const page of pages) {
    if (page.error || !page.contentHash) continue;
    if (!byHash.has(page.contentHash)) byHash.set(page.contentHash, []);
    byHash.get(page.contentHash).push(page);
  }

  for (const [, group] of byHash) {
    if (group.length < 2) continue;

    const displayPaths = group.map((p) => p.displayPath).sort();
    findings.push(
      makeFinding({
        rule: RULE_EXACT_DUPLICATE,
        files: displayPaths,
        message: `${group.length} pages have identical normalised body content.`,
        evidence: displayPaths.join(', ')
      })
    );
  }

  return findings;
}

/**
 * Detect page pairs with high content overlap (Jaccard ≥ NEAR_DUPLICATE_THRESHOLD)
 * that are not already flagged as exact duplicates.
 */
function detectNearDuplicates(pages, exactDuplicateGroups) {
  const findings = [];

  // Build a set of files already grouped as exact duplicates to avoid double-reporting
  const exactFiles = new Set(exactDuplicateGroups.flatMap((f) => f.files));

  const validPages = pages.filter((p) => !p.error && p.shingles && p.shingles.size > 0);

  for (let i = 0; i < validPages.length; i += 1) {
    for (let j = i + 1; j < validPages.length; j += 1) {
      const a = validPages[i];
      const b = validPages[j];

      // Skip pairs already in an exact-duplicate group
      if (exactFiles.has(a.displayPath) && exactFiles.has(b.displayPath)) continue;

      const similarity = jaccardSimilarity(a.shingles, b.shingles);
      if (similarity >= NEAR_DUPLICATE_THRESHOLD) {
        findings.push(
          makeFinding({
            rule: RULE_NEAR_DUPLICATE,
            files: [a.displayPath, b.displayPath].sort(),
            message: `Pages share ${Math.round(similarity * 100)}% content similarity (Jaccard shingle threshold: ${Math.round(NEAR_DUPLICATE_THRESHOLD * 100)}%).`,
            evidence: `Similarity score: ${similarity.toFixed(3)}`
          })
        );
      }
    }
  }

  return findings;
}

/**
 * Detect individual paragraphs that appear verbatim (after normalisation) in
 * minBlockPages or more distinct pages.
 */
function detectDuplicateBlocks(pages, minBlockPages) {
  const findings = [];
  const blockIndex = new Map(); // hash -> { text, pages: Set }

  for (const page of pages) {
    if (page.error || !page.paragraphs) continue;

    for (const para of page.paragraphs) {
      if (!blockIndex.has(para.hash)) {
        blockIndex.set(para.hash, { text: para.text, pages: new Set() });
      }
      blockIndex.get(para.hash).pages.add(page.displayPath);
    }
  }

  for (const [, entry] of blockIndex) {
    if (entry.pages.size < minBlockPages) continue;

    const sortedPaths = [...entry.pages].sort();
    const snippet = entry.text.slice(0, MAX_EVIDENCE_SNIPPET_LENGTH).replace(/\s+/g, ' ');
    const ellipsis = entry.text.length > MAX_EVIDENCE_SNIPPET_LENGTH ? '…' : '';

    findings.push(
      makeFinding({
        rule: RULE_DUPLICATE_BLOCK,
        files: sortedPaths,
        message: `A paragraph block appears verbatim in ${entry.pages.size} pages.`,
        evidence: `"${snippet}${ellipsis}"`
      })
    );
  }

  return findings;
}

// ── Runner ───────────────────────────────────────────────────────────────────

function getDefaultTargets() {
  return getMdxFiles(REPO_ROOT)
    .filter((filePath) => filePath.endsWith('.mdx'))
    .map((filePath) => path.resolve(filePath));
}

function run(options = {}) {
  const explicitFiles = Array.isArray(options.files) ? options.files : [];
  const targets = explicitFiles.length > 0 ? dedupe(explicitFiles.map(resolveInputPath)) : getDefaultTargets();
  const minBlockPages = Number.isFinite(options.minBlockPages) ? options.minBlockPages : DEFAULT_MIN_BLOCK_PAGES;

  const pages = loadPages(targets);
  const errors = pages.filter((p) => p.error);

  const exactFindings = detectExactDuplicates(pages);
  const nearFindings = detectNearDuplicates(pages, exactFindings);
  const blockFindings = detectDuplicateBlocks(pages, minBlockPages);

  const findings = [...exactFindings, ...nearFindings, ...blockFindings];

  const passed = errors.length === 0 && exactFindings.length === 0 &&
    (options.strict ? findings.length === 0 : true);

  return {
    scanned: targets.length,
    pages,
    errors,
    findings,
    exactFindings,
    nearFindings,
    blockFindings,
    passed
  };
}

// ── Output ───────────────────────────────────────────────────────────────────

function printResults(summary, options = {}) {
  if (options.json) {
    process.stdout.write(
      JSON.stringify(
        {
          scanned: summary.scanned,
          errors: summary.errors.map((p) => ({ file: p.displayPath, error: p.error })),
          findings: summary.findings
        },
        null,
        2
      )
    );
    process.stdout.write('\n');
    return;
  }

  for (const page of summary.pages) {
    if (page.error) {
      console.error(`${page.displayPath}:1 [error] ${page.error}`);
    }
  }

  const grouped = {
    [RULE_EXACT_DUPLICATE]: summary.exactFindings,
    [RULE_NEAR_DUPLICATE]: summary.nearFindings,
    [RULE_DUPLICATE_BLOCK]: summary.blockFindings
  };

  for (const [rule, ruleFindings] of Object.entries(grouped)) {
    if (ruleFindings.length === 0) continue;

    for (const finding of ruleFindings) {
      const fileList = finding.files.join(', ');
      console.error(`[${rule}] ${finding.message}`);
      console.error(`  Files: ${fileList}`);
      if (finding.evidence) console.error(`  Evidence: ${finding.evidence}`);
    }
  }

  const exactCount = summary.exactFindings.length;
  const nearCount = summary.nearFindings.length;
  const blockCount = summary.blockFindings.length;
  const errorCount = summary.errors.length;

  const message =
    `Scanned ${summary.scanned} file(s); ` +
    `${errorCount} error(s); ` +
    `${exactCount} exact-duplicate page cluster(s); ` +
    `${nearCount} near-duplicate page pair(s); ` +
    `${blockCount} duplicate block(s).`;

  if (summary.passed) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

// ── Entry point ──────────────────────────────────────────────────────────────

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const summary = run(args);
    printResults(summary, args);
    process.exit(summary.passed ? 0 : 1);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  run,
  detectExactDuplicates,
  detectNearDuplicates,
  detectDuplicateBlocks,
  extractBody,
  normalizeBody,
  extractParagraphs,
  buildShingles,
  jaccardSimilarity,
  hashString
};
