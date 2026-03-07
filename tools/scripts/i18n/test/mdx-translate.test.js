/**
 * @script            mdx-translate.test
 * @category          validator
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Tests MDX translation — validates content block translation logic
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/i18n/test/mdx-translate.test.js [flags]
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  extractTranslatableTextSegments,
  protectText,
  restoreProtectedText,
  translateMdxBody
} = require('../lib/mdx-translate');

test('extractTranslatableTextSegments skips code and MDX JSX text', async () => {
  const mdx = [
    '# Heading',
    '',
    'Paragraph with `inline` code and [link](./target).',
    '',
    '```js',
    'const value = "do not translate";',
    '```',
    '',
    '<Callout>Do not translate JSX children in v1</Callout>'
  ].join('\n');

  const segments = await extractTranslatableTextSegments(mdx);
  const combined = segments.map((s) => s.text).join(' | ');

  assert.match(combined, /Heading/);
  assert.match(combined, /Paragraph with /);
  assert.match(combined, /link/);
  assert.doesNotMatch(combined, /do not translate/);
  assert.doesNotMatch(combined, /JSX children/);
});

test('protectText preserves URLs/routes/brand terms and restores placeholders', () => {
  const rules = {
    preserveBrandTerms: ['Livepeer'],
    preserveRegexes: []
  };
  const input = 'Use Livepeer at https://example.com and route v2/about/livepeer-network/actors';
  const protectedValue = protectText(input, rules);
  assert.equal(protectedValue.skip, false);
  assert.match(protectedValue.text, /__I18N_PH_/);
  const restored = restoreProtectedText(protectedValue.text, protectedValue.placeholders);
  assert.equal(restored, input);
});

test('translateMdxBody rewrites internal markdown links when localized targets exist', async () => {
  const translator = {
    name: 'mock',
    async translateStrings({ language, strings }) {
      return { strings: strings.map((s) => `${language.toUpperCase()}: ${s}`), modelUsed: 'mock' };
    }
  };

  const routeMap = new Map([
    ['v2/about/livepeer-network/actors', new Map([['es', 'v2/es/about/livepeer-network/actors']])],
    ['v2/about/livepeer-network/job-lifecycle', new Map([['es', 'v2/es/about/livepeer-network/job-lifecycle']])]
  ]);

  const body = 'See [Job Lifecycle](./job-lifecycle) and [External](https://example.com).';
  const result = await translateMdxBody({
    body,
    language: 'es',
    translator,
    rules: { preserveBrandTerms: [], preserveRegexes: [] },
    routeContext: {
      sourceRoute: 'v2/about/livepeer-network/actors',
      language: 'es',
      sourceLocalizedRoute: 'v2/es/about/livepeer-network/actors',
      routeMapBySourceRoute: routeMap
    }
  });

  assert.match(result.body, /\[[^\]]*Job Lifecycle[^\]]*\]\(\.\/job-lifecycle\)/);
  assert.match(result.body, /\[[^\]]*External[^\]]*\]\(https:\/\/example\.com\)/);
  assert.equal(result.linkRewrite.rewrittenCount, 1);
});
