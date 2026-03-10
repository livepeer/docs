#!/usr/bin/env node
/**
 * @script            mdx-safe-markdown.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tests/fixtures/mdx-safe-markdown, tools/lib, tools/scripts/remediators/content, tools/scripts/validators/content
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Fixture-driven unit tests for repo-wide MDX-safe markdown repair and validation helpers.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/mdx-safe-markdown.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const { repairMarkdownContent, validateMarkdownContent } = require('../../tools/lib/mdx-safe-markdown');

const REPO_ROOT = path.resolve(__dirname, '../..');
const FIXTURE_DIR = path.join(REPO_ROOT, 'tests', 'fixtures', 'mdx-safe-markdown');

let errors = [];
let warnings = [];

function loadJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(FIXTURE_DIR, fileName), 'utf8'));
}

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'tests/unit/mdx-safe-markdown.test.js',
      line: 1,
      rule: 'mdx-safe-markdown unit',
      message: `${name}: ${error.message}`
    });
  }
}

function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 MDX-safe Markdown Unit Tests');

  loadJson('repair-cases.json').forEach((testCase) => {
    runCase(testCase.name, () => {
      const input = testCase.inputLines.join('\n');
      const expected = testCase.expectedLines.join('\n');
      const result = repairMarkdownContent(input, testCase.filePath);

      assert.strictEqual(result.content, expected);
      assert.deepStrictEqual(
        result.changes.map((change) => change.rule),
        testCase.expectedRules
      );
    });
  });

  loadJson('validator-cases.json').forEach((testCase) => {
    runCase(testCase.name, () => {
      const input = testCase.contentLines.join('\n');
      const result = validateMarkdownContent(input, testCase.filePath);

      assert.deepStrictEqual(
        result.findings.map((finding) => finding.rule),
        testCase.expectedRules
      );
    });
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: loadJson('repair-cases.json').length + loadJson('validator-cases.json').length
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.errors.length > 0) {
    console.error('\n❌ MDX-safe markdown unit test failures:\n');
    result.errors.forEach((error) => {
      console.error(`  ${error.file}:${error.line} - ${error.rule}: ${error.message}`);
    });
  } else {
    console.log(`\n✅ MDX-safe markdown unit tests passed (${result.total} cases checked)`);
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { runTests };
