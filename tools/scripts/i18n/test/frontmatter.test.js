/**
 * @script frontmatter.test
 * @summary Utility script for tools/scripts/i18n/test/frontmatter.test.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/test/frontmatter.test.js
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
 *   node tools/scripts/i18n/test/frontmatter.test.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const { parseMdxFileWithFrontmatter, translateFrontmatterFields } = require('../lib/frontmatter');

test('translateFrontmatterFields only translates allowlisted string keys', async () => {
  const translator = {
    name: 'mock',
    async translateStrings({ language, strings }) {
      return { strings: strings.map((s) => `[${language}] ${s}`), modelUsed: 'mock' };
    }
  };

  const raw = [
    '---',
    'title: Actors Overview',
    'sidebarTitle: Actors',
    'description: Who participates',
    'keywords:',
    '  - livepeer',
    'og:image: /snippets/assets/logo.svg',
    '---',
    '',
    'Body'
  ].join('\n');

  const parsed = parseMdxFileWithFrontmatter(raw);
  const result = await translateFrontmatterFields({
    data: parsed.data,
    language: 'fr',
    translator,
    rules: {
      translateFrontmatterKeys: ['title', 'sidebarTitle', 'description'],
      preserveBrandTerms: [],
      preserveRegexes: ['^/snippets/']
    },
    translateKeywords: false
  });

  assert.match(result.data.title, /^\[fr\]/);
  assert.match(result.data.sidebarTitle, /^\[fr\]/);
  assert.match(result.data.description, /^\[fr\]/);
  assert.deepEqual(result.data.keywords, ['livepeer']);
  assert.equal(result.data['og:image'], '/snippets/assets/logo.svg');
});
