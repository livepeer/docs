/**
 * @script            cli-guardrails.test
 * @category          validator
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Tests i18n CLI guardrails — validates argument validation and safety checks
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tools/scripts/i18n/test/cli-guardrails.test.js [flags]
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { run: runTranslateDocs } = require('../translate-docs');
const { run: runGenerateDocsJson } = require('../generate-localized-docs-json');

test('translate-docs blocks mock provider non-dry runs without --allow-mock-write', async () => {
  await assert.rejects(
    () => runTranslateDocs(['--provider', 'mock']),
    /mock provider.*write mode|Refusing to run translate-docs with mock provider/i
  );
});

test('translate-docs allows mock provider non-dry runs with --allow-mock-write (guard path)', async () => {
  const tmpFile = path.join(os.tmpdir(), `i18n-empty-paths-${Date.now()}.txt`);
  fs.writeFileSync(tmpFile, 'v2/does-not-exist\n', 'utf8');

  const report = await runTranslateDocs([
    '--provider',
    'mock',
    '--allow-mock-write',
    '--languages',
    'es',
    '--scope-mode',
    'paths_file',
    '--paths-file',
    tmpFile,
    '--max-pages',
    '1'
  ]);

  assert.equal(report.counts.failed, 0);
  assert.equal(report.counts.successfulPageLanguagePairs, 0);
});

test('generate-localized-docs-json blocks mock provider write runs without --allow-mock-write', async () => {
  await assert.rejects(
    () => runGenerateDocsJson(['--provider', 'mock', '--write', '--languages', 'es']),
    /Refusing to write docs\.json with mock provider/i
  );
});
