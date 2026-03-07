#!/usr/bin/env node
/**
 * @script            v2-link-audit.test
 * @category          validator
 * @purpose           qa:link-integrity
 * @scope             tests/unit, tests/integration
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Unit tests for v2-link-audit.js — tests individual link checking rules
 * @pipeline          manual — not yet in pipeline
 * @dualmode          --full (validator) | --write-links (remediator)
 * @usage             node tests/unit/v2-link-audit.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const audit = require('../integration/v2-link-audit');

let errors = [];
let warnings = [];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'v2-link-audit unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/v2-link-audit.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 v2 Link Audit Unit Tests');

  await runCase('Parses default args with classify policy', async () => {
    const parsed = audit.parseArgs([]);
    assert.strictEqual(parsed.mode, 'full');
    assert.strictEqual(parsed.respectMintIgnore, true);
    assert.strictEqual(parsed.externalPolicy, 'classify');
    assert.strictEqual(parsed.externalLinkTypes, 'navigational');
    assert.strictEqual(parsed.externalTimeoutMs, 10000);
    assert.strictEqual(parsed.externalConcurrency, 12);
    assert.strictEqual(parsed.externalPerHostConcurrency, 2);
    assert.strictEqual(parsed.externalRetries, 1);
    assert.strictEqual(parsed.writeLinks, true);
  });

  await runCase('Parses external validate overrides and no-write-links', async () => {
    const parsed = audit.parseArgs([
      '--staged',
      '--external-policy', 'validate',
      '--external-link-types', 'all',
      '--external-timeout-ms', '2000',
      '--external-concurrency', '7',
      '--external-per-host-concurrency', '3',
      '--external-retries', '4',
      '--no-mintignore',
      '--no-write-links',
      '--report-json', '/tmp/v2-link-audit-unit.json'
    ]);

    assert.strictEqual(parsed.mode, 'staged');
    assert.strictEqual(parsed.externalPolicy, 'validate');
    assert.strictEqual(parsed.externalLinkTypes, 'all');
    assert.strictEqual(parsed.externalTimeoutMs, 2000);
    assert.strictEqual(parsed.externalConcurrency, 7);
    assert.strictEqual(parsed.externalPerHostConcurrency, 3);
    assert.strictEqual(parsed.externalRetries, 4);
    assert.strictEqual(parsed.respectMintIgnore, false);
    assert.strictEqual(parsed.writeLinks, false);
    assert.ok(parsed.reportJson.endsWith('/tmp/v2-link-audit-unit.json'));
  });

  await runCase('Normalizes external URLs by removing hash and preserving query', async () => {
    const out = audit.normalizeExternalUrl('https://example.com/docs?tab=one#section-2');
    assert.strictEqual(out, 'https://example.com/docs?tab=one');
  });

  await runCase('External eligibility filter handles navigational/media/all', async () => {
    const markdownLink = { sourceType: 'markdown-link' };
    const markdownImage = { sourceType: 'markdown-image' };
    const hrefAttr = { sourceType: 'jsx-attr', attr: 'href' };
    const srcAttr = { sourceType: 'jsx-attr', attr: 'src' };

    assert.strictEqual(audit.shouldValidateExternalRef(markdownLink, 'navigational'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(hrefAttr, 'navigational'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(markdownImage, 'navigational'), false);
    assert.strictEqual(audit.shouldValidateExternalRef(srcAttr, 'navigational'), false);

    assert.strictEqual(audit.shouldValidateExternalRef(markdownImage, 'media'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(srcAttr, 'media'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(markdownLink, 'media'), false);

    assert.strictEqual(audit.shouldValidateExternalRef(markdownLink, 'all'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(markdownImage, 'all'), true);
    assert.strictEqual(audit.shouldValidateExternalRef(srcAttr, 'all'), true);
  });

  await runCase('HTTP status classification maps to expected external classes', async () => {
    assert.strictEqual(audit.classifyExternalStatus(200), audit.EXTERNAL_OK);
    assert.strictEqual(audit.classifyExternalStatus(301), audit.EXTERNAL_OK);
    assert.strictEqual(audit.classifyExternalStatus(404), audit.EXTERNAL_HARD_FAIL);
    assert.strictEqual(audit.classifyExternalStatus(401), audit.EXTERNAL_SOFT_FAIL);
    assert.strictEqual(audit.classifyExternalStatus(403), audit.EXTERNAL_SOFT_FAIL);
    assert.strictEqual(audit.classifyExternalStatus(429), audit.EXTERNAL_SOFT_FAIL);
    assert.strictEqual(audit.classifyExternalStatus(503), audit.EXTERNAL_SOFT_FAIL);
  });

  await runCase('Excludes x-* paths from explicit --files scope', async () => {
    const root = getRepoRoot();
    const tmpDir = path.join(root, 'v2', 'x-experimental', 'link-audit-unit-fixture');
    const tmpFile = path.join(tmpDir, `fixture-${Date.now()}.mdx`);

    fs.mkdirSync(tmpDir, { recursive: true });
    fs.writeFileSync(tmpFile, '# x path fixture\n\n[link](https://example.com)\n', 'utf8');

    try {
      const rel = path.relative(root, tmpFile).split(path.sep).join('/');
      const result = await audit.runAudit({
        argv: [
          '--files', rel,
          '--no-write-links',
          '--report', '/tmp/v2-link-audit-unit-x.md',
          '--report-json', '/tmp/v2-link-audit-unit-x.json'
        ]
      });

      assert.strictEqual(result.fileCount, 0);
      assert.strictEqual(result.exitCode, 0);
    } finally {
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
      try {
        fs.rmdirSync(tmpDir);
      } catch (_error) {
        // Ignore if directory is not empty.
      }
    }
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 6
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ v2 link audit unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} v2 link audit unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ v2 link audit unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
