/**
 * @script provenance.test
 * @summary Utility script for tools/scripts/i18n/test/provenance.test.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/test/provenance.test.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/test/provenance.test.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const { parseMdxFileWithFrontmatter } = require('../lib/frontmatter');
const {
  buildProvenanceComment,
  injectOrReplaceProvenanceComment,
  parseProvenanceComment
} = require('../lib/provenance');

test('provenance comment is MDX-safe, replaceable, and parseable after frontmatter', () => {
  const raw = [
    '---',
    'title: Example',
    'description: Example',
    '---',
    '',
    '# Heading',
    '',
    'Body'
  ].join('\n');

  const first = buildProvenanceComment({
    sourcePath: 'v2/example.mdx',
    sourceRoute: 'v2/example',
    sourceHash: 'abc',
    language: 'es',
    provider: 'openrouter',
    model: 'model-a',
    generatedAt: '2026-02-24T00:00:00.000Z'
  });
  const second = buildProvenanceComment({
    sourcePath: 'v2/example.mdx',
    sourceRoute: 'v2/example',
    sourceHash: 'def',
    language: 'es',
    provider: 'openrouter',
    model: 'model-b',
    generatedAt: '2026-02-24T01:00:00.000Z'
  });

  const withFirst = injectOrReplaceProvenanceComment(raw, first);
  const withSecond = injectOrReplaceProvenanceComment(withFirst, second);

  const parsedDoc = parseMdxFileWithFrontmatter(withSecond);
  assert.match(parsedDoc.body, /\{\/\* codex-i18n:/);
  const provenance = parseProvenanceComment(withSecond);
  assert.equal(provenance.sourceHash, 'def');
  assert.equal(provenance.model, 'model-b');
  assert.equal((withSecond.match(/codex-i18n:/g) || []).length, 1);
});
