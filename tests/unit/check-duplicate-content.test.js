#!/usr/bin/env node
/**
 * @script            check-duplicate-content.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit
 * @owner             docs
 * @needs             SE-3-02
 * @purpose-statement Unit tests for check-duplicate-content.js — validates exact-duplicate, near-duplicate, and duplicate-block detection logic.
 * @pipeline          manual — run on-demand only
 * @usage             node tests/unit/check-duplicate-content.test.js
 */

'use strict';

const assert = require('assert');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const detector = require(path.join(
  REPO_ROOT,
  'tools/scripts/validators/content/check-duplicate-content.js'
));

const {
  extractBody,
  normalizeBody,
  extractParagraphs,
  buildShingles,
  jaccardSimilarity,
  hashString,
  detectExactDuplicates,
  detectNearDuplicates,
  detectDuplicateBlocks
} = detector;

let errors = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({ name, message: error.message });
    console.error(`   ✗ ${name}: ${error.message}`);
  }
}

// ── extractBody ──────────────────────────────────────────────────────────────

function testExtractBody() {
  console.log('\n📦 extractBody');

  runCase('strips YAML frontmatter and returns body', () => {
    const raw = '---\ntitle: Hello\ndescription: World\n---\n\nBody content here.';
    const body = extractBody(raw);
    assert.ok(!body.includes('title:'), 'Should not include frontmatter key');
    assert.ok(body.includes('Body content here.'), 'Should include body text');
  });

  runCase('returns full content when no frontmatter present', () => {
    const raw = 'Just body content without frontmatter.';
    const body = extractBody(raw);
    assert.ok(body.includes('Just body content'), 'Should return raw content unchanged');
  });

  runCase('handles empty string', () => {
    const body = extractBody('');
    assert.strictEqual(typeof body, 'string');
  });
}

// ── normalizeBody ────────────────────────────────────────────────────────────

function testNormalizeBody() {
  console.log('\n🔧 normalizeBody');

  runCase('strips JSX/HTML tags', () => {
    const body = '<Card>Some text</Card>';
    const normalized = normalizeBody(body);
    assert.ok(!normalized.includes('<Card>'), 'Should remove JSX tags');
    assert.ok(normalized.includes('some text'), 'Should keep text content');
  });

  runCase('strips MDX import/export lines', () => {
    const body = 'import Foo from "./foo"\nexport const bar = 1\nActual prose here.';
    const normalized = normalizeBody(body);
    assert.ok(!normalized.includes('import'), 'Should strip import lines');
    assert.ok(!normalized.includes('export'), 'Should strip export lines');
    assert.ok(normalized.includes('actual prose here'), 'Should keep prose');
  });

  runCase('collapses whitespace and lowercases', () => {
    const body = 'Hello   World\n\nTest   Content';
    const normalized = normalizeBody(body);
    assert.ok(!normalized.includes('  '), 'Should collapse multiple spaces');
    assert.strictEqual(normalized, normalized.toLowerCase(), 'Should be lowercase');
  });

  runCase('handles empty string', () => {
    const normalized = normalizeBody('');
    assert.strictEqual(normalized, '');
  });
}

// ── extractParagraphs ────────────────────────────────────────────────────────

function testExtractParagraphs() {
  console.log('\n📝 extractParagraphs');

  runCase('splits body into paragraph chunks', () => {
    // Build a body with two paragraphs each exceeding the 30-word minimum
    const para1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo.';
    const para2 = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est.';
    const body = `${para1}\n\n${para2}`;
    const paragraphs = extractParagraphs(body);
    assert.ok(paragraphs.length >= 2, `Expected at least 2 paragraphs, got ${paragraphs.length}`);
  });

  runCase('skips code fence blocks', () => {
    const body = '```javascript\nconst x = 1;\n```';
    const paragraphs = extractParagraphs(body);
    assert.strictEqual(paragraphs.length, 0, 'Code fences should be excluded');
  });

  runCase('skips paragraphs below minimum word count', () => {
    const body = 'Short text.\n\nAnother short one.';
    const paragraphs = extractParagraphs(body);
    assert.strictEqual(paragraphs.length, 0, 'Short paragraphs should be excluded');
  });

  runCase('includes hash on each paragraph', () => {
    const longPara = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.';
    const paragraphs = extractParagraphs(longPara);
    if (paragraphs.length > 0) {
      assert.ok(typeof paragraphs[0].hash === 'string', 'Paragraph should have a hash');
      assert.ok(paragraphs[0].hash.length > 0, 'Hash should be non-empty');
    }
  });
}

// ── buildShingles ────────────────────────────────────────────────────────────

function testBuildShingles() {
  console.log('\n🔢 buildShingles');

  runCase('returns a Set', () => {
    const shingles = buildShingles('one two three four five six', 3);
    assert.ok(shingles instanceof Set, 'Should return a Set');
  });

  runCase('produces correct shingle count for short string', () => {
    const words = 'a b c d e';
    const shingles = buildShingles(words, 3);
    // words = [a, b, c, d, e], shingles of size 3 = [a b c, b c d, c d e] = 3
    assert.strictEqual(shingles.size, 3, `Expected 3 shingles, got ${shingles.size}`);
  });

  runCase('returns empty set for string shorter than shingle size', () => {
    const shingles = buildShingles('one two', 5);
    assert.strictEqual(shingles.size, 0, 'Should return empty set for insufficient words');
  });
}

// ── jaccardSimilarity ────────────────────────────────────────────────────────

function testJaccardSimilarity() {
  console.log('\n📐 jaccardSimilarity');

  runCase('identical sets return 1.0', () => {
    const setA = new Set(['a b c', 'b c d', 'c d e']);
    const setB = new Set(['a b c', 'b c d', 'c d e']);
    const similarity = jaccardSimilarity(setA, setB);
    assert.strictEqual(similarity, 1.0, 'Identical sets should have similarity 1.0');
  });

  runCase('completely disjoint sets return 0.0', () => {
    const setA = new Set(['a b c', 'b c d']);
    const setB = new Set(['x y z', 'y z w']);
    const similarity = jaccardSimilarity(setA, setB);
    assert.strictEqual(similarity, 0.0, 'Disjoint sets should have similarity 0.0');
  });

  runCase('partially overlapping sets return value between 0 and 1', () => {
    const setA = new Set(['a b c', 'b c d', 'c d e']);
    const setB = new Set(['a b c', 'x y z', 'y z w']);
    const similarity = jaccardSimilarity(setA, setB);
    assert.ok(similarity > 0 && similarity < 1, `Expected value between 0 and 1, got ${similarity}`);
  });

  runCase('two empty sets return 1.0', () => {
    const similarity = jaccardSimilarity(new Set(), new Set());
    assert.strictEqual(similarity, 1.0);
  });
}

// ── hashString ───────────────────────────────────────────────────────────────

function testHashString() {
  console.log('\n#️⃣  hashString');

  runCase('returns a hex string', () => {
    const hash = hashString('hello world');
    assert.match(hash, /^[0-9a-f]+$/, 'Should be a hex string');
  });

  runCase('same input produces same hash', () => {
    const a = hashString('consistent input');
    const b = hashString('consistent input');
    assert.strictEqual(a, b, 'Same input should produce same hash');
  });

  runCase('different inputs produce different hashes', () => {
    const a = hashString('input one');
    const b = hashString('input two');
    assert.notStrictEqual(a, b, 'Different inputs should produce different hashes');
  });
}

// ── detectExactDuplicates ────────────────────────────────────────────────────

function testDetectExactDuplicates() {
  console.log('\n🔍 detectExactDuplicates');

  runCase('detects two pages with identical content hash', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', contentHash: 'abc123', paragraphs: [], shingles: new Set() },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'abc123', paragraphs: [], shingles: new Set() },
      { absPath: '/repo/c.mdx', displayPath: 'c.mdx', error: '', contentHash: 'def456', paragraphs: [], shingles: new Set() }
    ];
    const findings = detectExactDuplicates(pages);
    assert.strictEqual(findings.length, 1, `Expected 1 finding, got ${findings.length}`);
    assert.strictEqual(findings[0].rule, 'exact-duplicate-page');
    assert.ok(findings[0].files.includes('a.mdx'), 'Findings should include a.mdx');
    assert.ok(findings[0].files.includes('b.mdx'), 'Findings should include b.mdx');
  });

  runCase('returns no findings when all pages are unique', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', contentHash: 'aaa', paragraphs: [], shingles: new Set() },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'bbb', paragraphs: [], shingles: new Set() }
    ];
    const findings = detectExactDuplicates(pages);
    assert.strictEqual(findings.length, 0, 'No findings expected for unique pages');
  });

  runCase('skips pages with errors', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: 'File not found', contentHash: 'abc123' },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'abc123', paragraphs: [], shingles: new Set() }
    ];
    const findings = detectExactDuplicates(pages);
    assert.strictEqual(findings.length, 0, 'Pages with errors should not be compared');
  });
}

// ── detectNearDuplicates ─────────────────────────────────────────────────────

function testDetectNearDuplicates() {
  console.log('\n🔎 detectNearDuplicates');

  runCase('detects near-duplicate page pairs above threshold', () => {
    const sharedShingles = new Set(['a b c d e', 'b c d e f', 'c d e f g', 'd e f g h', 'e f g h i']);
    const aShingles = new Set([...sharedShingles, 'a b c d z']);
    const bShingles = new Set([...sharedShingles, 'a b c d z']);
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', contentHash: 'aaa', paragraphs: [], shingles: aShingles },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'bbb', paragraphs: [], shingles: bShingles }
    ];
    const findings = detectNearDuplicates(pages, []);
    assert.ok(findings.length >= 1, `Expected at least 1 near-duplicate finding, got ${findings.length}`);
    if (findings.length > 0) {
      assert.strictEqual(findings[0].rule, 'near-duplicate-page');
    }
  });

  runCase('does not flag pages already in exact-duplicate groups', () => {
    const shingles = new Set(['a b c', 'b c d', 'c d e', 'd e f', 'e f g']);
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', contentHash: 'same', paragraphs: [], shingles },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'same', paragraphs: [], shingles }
    ];
    const exactFindings = [{ rule: 'exact-duplicate-page', files: ['a.mdx', 'b.mdx'], message: '', evidence: '' }];
    const nearFindings = detectNearDuplicates(pages, exactFindings);
    assert.strictEqual(nearFindings.length, 0, 'Should not re-flag exact-duplicate pairs as near-duplicates');
  });

  runCase('ignores pages with errors', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: 'File not found', shingles: null },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', contentHash: 'bbb', paragraphs: [], shingles: new Set(['x y z']) }
    ];
    const findings = detectNearDuplicates(pages, []);
    assert.strictEqual(findings.length, 0, 'Pages with errors should be skipped');
  });
}

// ── detectDuplicateBlocks ────────────────────────────────────────────────────

function testDetectDuplicateBlocks() {
  console.log('\n🧱 detectDuplicateBlocks');

  const sharedPara = {
    text: 'This shared paragraph appears in multiple pages and is long enough to be flagged.',
    normalizedText: 'this shared paragraph appears in multiple pages and is long enough to be flagged.',
    hash: hashString('this shared paragraph appears in multiple pages and is long enough to be flagged.')
  };

  runCase('flags paragraph shared by >= minBlockPages pages', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', paragraphs: [sharedPara] },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', paragraphs: [sharedPara] },
      { absPath: '/repo/c.mdx', displayPath: 'c.mdx', error: '', paragraphs: [sharedPara] }
    ];
    const findings = detectDuplicateBlocks(pages, 3);
    assert.strictEqual(findings.length, 1, `Expected 1 block finding, got ${findings.length}`);
    assert.strictEqual(findings[0].rule, 'duplicate-block');
    assert.strictEqual(findings[0].files.length, 3, 'All three pages should be listed');
  });

  runCase('does not flag paragraph appearing in fewer pages than minBlockPages', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: '', paragraphs: [sharedPara] },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', paragraphs: [sharedPara] }
    ];
    const findings = detectDuplicateBlocks(pages, 3);
    assert.strictEqual(findings.length, 0, 'Should not flag blocks shared by fewer than minBlockPages pages');
  });

  runCase('skips pages with errors', () => {
    const pages = [
      { absPath: '/repo/a.mdx', displayPath: 'a.mdx', error: 'File not found' },
      { absPath: '/repo/b.mdx', displayPath: 'b.mdx', error: '', paragraphs: [sharedPara] },
      { absPath: '/repo/c.mdx', displayPath: 'c.mdx', error: '', paragraphs: [sharedPara] }
    ];
    const findings = detectDuplicateBlocks(pages, 3);
    assert.strictEqual(findings.length, 0, 'Pages with errors should be excluded');
  });
}

// ── Main ─────────────────────────────────────────────────────────────────────

function runTests() {
  errors = [];

  console.log('🧪 check-duplicate-content unit tests');

  testExtractBody();
  testNormalizeBody();
  testExtractParagraphs();
  testBuildShingles();
  testJaccardSimilarity();
  testHashString();
  testDetectExactDuplicates();
  testDetectNearDuplicates();
  testDetectDuplicateBlocks();

  const total =
    3 + // extractBody
    4 + // normalizeBody
    4 + // extractParagraphs
    3 + // buildShingles
    4 + // jaccardSimilarity
    3 + // hashString
    3 + // detectExactDuplicates
    3 + // detectNearDuplicates
    3;  // detectDuplicateBlocks

  return {
    errors,
    passed: errors.length === 0,
    total
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.passed) {
    console.log(`\n✅ check-duplicate-content unit tests passed (${result.total} cases)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} check-duplicate-content unit test failure(s):`);
  result.errors.forEach((err) => console.error(`  - ${err.name}: ${err.message}`));
  process.exit(1);
}

module.exports = { runTests };
