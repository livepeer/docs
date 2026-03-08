#!/usr/bin/env node
/**
 * @script            repair-spelling.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tools/scripts/remediators/content
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges
 * @pipeline          manual — not yet in pipeline
 * @dualmode          --dry-run (validator) | --write (remediator)
 * @usage             node tests/unit/repair-spelling.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const repairSpelling = require('../../tools/scripts/remediators/content/repair-spelling');

let errors = [];
let warnings = [];

function rangeContains(ranges, start, end) {
  return ranges.some((range) => start >= range.start && end <= range.end);
}

function createFixture(content) {
  const dirPath = fs.mkdtempSync(path.join(os.tmpdir(), 'repair-spelling-test-'));
  const filePath = path.join(dirPath, 'fixture.mdx');
  fs.writeFileSync(filePath, content, 'utf8');
  return { dirPath, filePath };
}

function cleanupFixture(fixture) {
  if (!fixture) return;
  fs.rmSync(fixture.dirPath, { recursive: true, force: true });
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'repair-spelling unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/repair-spelling.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 Repair Spelling Unit Tests');

  await runCase('Parses default args as dry-run full-scope mode', async () => {
    const parsed = repairSpelling.parseArgs([]);
    assert.strictEqual(parsed.mode, 'dry-run');
    assert.strictEqual(parsed.stagedOnly, false);
    assert.deepStrictEqual(parsed.files, []);
  });

  await runCase('Collects eligible prose ranges while excluding frontmatter, code, and URLs', async () => {
    const content = [
      '---',
      'title: Recieve',
      '---',
      '',
      'This recieve sentence is prose.',
      '',
      '`recieve`',
      '',
      'https://example.com/recieve',
      '',
      '```js',
      'const recieve = true;',
      '```'
    ].join('\n');

    const ranges = await repairSpelling.collectEligibleRanges(content);
    const proseStart = content.indexOf('recieve sentence');
    const inlineCodeStart = content.indexOf('`recieve`') + 1;
    const urlStart = content.indexOf('https://example.com/recieve');
    const frontmatterStart = content.indexOf('Recieve');
    const codeStart = content.indexOf('recieve = true');

    assert.strictEqual(rangeContains(ranges, proseStart, proseStart + 'recieve'.length), true);
    assert.strictEqual(rangeContains(ranges, inlineCodeStart, inlineCodeStart + 'recieve'.length), false);
    assert.strictEqual(rangeContains(ranges, urlStart, urlStart + 'https'.length), false);
    assert.strictEqual(rangeContains(ranges, frontmatterStart, frontmatterStart + 'Recieve'.length), false);
    assert.strictEqual(rangeContains(ranges, codeStart, codeStart + 'recieve'.length), false);
  });

  await runCase('Uses preferred issue suggestions for plain typos', async () => {
    const resolved = repairSpelling.resolveSafeReplacement({
      issue: {
        text: 'recieve',
        suggestionsEx: [
          { word: 'receive', isPreferred: true }
        ]
      }
    });

    assert.strictEqual(resolved.replacement, 'receive');
    assert.strictEqual(resolved.source, 'preferred-issue-suggestion');
  });

  await runCase('Prefers shared-dictionary candidate for flagged en-GB terms', async () => {
    const resolved = repairSpelling.resolveSafeReplacement({
      issue: {
        text: 'color',
        isFlagged: true
      },
      suggestions: {
        suggestions: [
          { word: 'colon', cost: 100, forbidden: false, noSuggest: false },
          { word: 'colour', cost: 100, forbidden: false, noSuggest: false },
          { word: 'conor', cost: 100, forbidden: false, noSuggest: false }
        ]
      },
      customWords: new Set(['colour'])
    });

    assert.strictEqual(resolved.replacement, 'colour');
    assert.strictEqual(resolved.source, 'custom-dictionary-suggestion');
  });

  await runCase('Leaves ambiguous suggestions unchanged', async () => {
    const resolved = repairSpelling.resolveSafeReplacement({
      issue: {
        text: 'thingg',
        isFlagged: false
      },
      suggestions: {
        suggestions: [
          { word: 'things', cost: 100, forbidden: false, noSuggest: false },
          { word: 'thins', cost: 100, forbidden: false, noSuggest: false }
        ]
      },
      customWords: new Set()
    });

    assert.strictEqual(resolved.replacement, null);
    assert.strictEqual(resolved.reason, 'ambiguous-suggestions');
  });

  await runCase('Skips replacements that drop possessive suffixes', async () => {
    const resolved = repairSpelling.resolveSafeReplacement({
      issue: {
        text: "Arbitrium's",
        isFlagged: true
      },
      suggestions: {
        suggestions: [
          { word: 'Arbitrum', cost: 100, forbidden: false, noSuggest: false }
        ]
      },
      customWords: new Set(['arbitrum'])
    });

    assert.strictEqual(resolved.replacement, null);
    assert.strictEqual(resolved.reason, 'inflected-form-mismatch');
  });

  await runCase('Does not use custom-dictionary fallback for unflagged words', async () => {
    const resolved = repairSpelling.resolveSafeReplacement({
      issue: {
        text: 'Bithumb',
        isFlagged: false
      },
      suggestions: {
        suggestions: [
          { word: 'Github', cost: 100, forbidden: false, noSuggest: false }
        ]
      },
      customWords: new Set(['github'])
    });

    assert.strictEqual(resolved.replacement, null);
    assert.strictEqual(resolved.reason, 'ambiguous-suggestions');
  });

  await runCase('Dry-run reports repairs without mutating the file', async () => {
    const fixture = createFixture(
      [
        '---',
        'title: Recieve',
        '---',
        '',
        'This recieve paragraph uses color.',
        '',
        '`recieve color`',
        '',
        'https://example.com/recieve/color',
        '',
        '```js',
        "const recieve = 'color';",
        '```'
      ].join('\n')
    );

    try {
      const before = fs.readFileSync(fixture.filePath, 'utf8');
      const summary = await repairSpelling.run({
        args: repairSpelling.parseArgs(['--dry-run']),
        files: [fixture.filePath],
        quiet: true
      });

      assert.strictEqual(summary.proposedRepairs, 2);
      assert.strictEqual(fs.readFileSync(fixture.filePath, 'utf8'), before);
    } finally {
      cleanupFixture(fixture);
    }
  });

  await runCase('Write mode applies prose repairs and preserves excluded contexts', async () => {
    const fixture = createFixture(
      [
        '---',
        'title: Recieve',
        '---',
        '',
        'This recieve paragraph uses color.',
        '',
        '`recieve color`',
        '',
        'https://example.com/recieve/color',
        '',
        '```js',
        "const recieve = 'color';",
        '```'
      ].join('\n')
    );

    try {
      const summary = await repairSpelling.run({
        args: repairSpelling.parseArgs(['--write']),
        files: [fixture.filePath],
        quiet: true
      });
      const nextContent = fs.readFileSync(fixture.filePath, 'utf8');

      assert.strictEqual(summary.proposedRepairs, 2);
      assert.ok(nextContent.includes('This receive paragraph uses colour.'));
      assert.ok(nextContent.includes('title: Recieve'));
      assert.ok(nextContent.includes('`recieve color`'));
      assert.ok(nextContent.includes('https://example.com/recieve/color'));
      assert.ok(nextContent.includes("const recieve = 'color';"));
    } finally {
      cleanupFixture(fixture);
    }
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 9
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ repair-spelling unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} repair-spelling unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ repair-spelling unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
