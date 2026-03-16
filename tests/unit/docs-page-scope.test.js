#!/usr/bin/env node
/**
 * @script            docs-page-scope.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests, tools/lib
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Verifies generated authored-page scope helpers so warning-only validators skip generated docs pages while keeping authored pages in scope.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/docs-page-scope.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  isGeneratedDocsPageContent,
  isGeneratedDocsPageFile,
  filterAuthoredDocsPageFiles
} = require('../../tools/lib/docs-page-scope');

function runTests() {
  const errors = [];
  const warnings = [];
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-page-scope-'));

  try {
    const generatedFile = path.join(tempDir, 'generated.mdx');
    const authoredFile = path.join(tempDir, 'authored.mdx');
    fs.writeFileSync(
      generatedFile,
      [
        '---',
        "title: 'Generated'",
        '---',
        '',
        '{/*',
        'generated-file-banner: generated-file-banner:v1',
        'Generation Script: tools/scripts/generate-pages-index.js',
        'Purpose: Generated index',
        'Run when: docs.json changes',
        'Run command: node tools/scripts/generate-pages-index.js --write',
        '*/}',
        '',
        '<Note>Generated</Note>'
      ].join('\n'),
      'utf8'
    );
    fs.writeFileSync(authoredFile, "---\ntitle: 'Authored'\n---\n\nAuthor prose.\n", 'utf8');

    assert.strictEqual(isGeneratedDocsPageContent(fs.readFileSync(generatedFile, 'utf8')), true);
    assert.strictEqual(isGeneratedDocsPageFile(generatedFile), true);
    assert.strictEqual(isGeneratedDocsPageFile(authoredFile), false);

    const filtered = filterAuthoredDocsPageFiles([generatedFile, authoredFile]);
    assert.deepStrictEqual(filtered, [path.resolve(authoredFile)]);
  } catch (error) {
    errors.push(`docs-page-scope validation failed: ${error.message}`);
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  return { errors, warnings };
}

if (require.main === module) {
  const result = runTests();
  result.errors.forEach((error) => console.error(error));
  result.warnings.forEach((warning) => console.warn(warning));
  process.exit(result.errors.length > 0 ? 1 : 0);
}

module.exports = { runTests };
