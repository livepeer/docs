#!/usr/bin/env node
/**
 * @script openapi-reference-audit.test
 * @summary Unit tests for OpenAPI reference audit parsing, mapping, validation findings, and conservative autofix behavior.
 * @owner docs
 * @scope tests/unit, tests/integration, v2, api
 *
 * @usage
 *   node tests/unit/openapi-reference-audit.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console test summary.
 *
 * @exit-codes
 *   0 = all unit cases passed
 *   1 = one or more unit cases failed
 *
 * @examples
 *   node tests/unit/openapi-reference-audit.test.js
 *
 * @notes
 *   Uses temporary fixture files under v2/** and removes them after each case.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const audit = require('../integration/openapi-reference-audit');

let errors = [];
let warnings = [];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function mkFixture(relDir, filename, content) {
  const absDir = path.join(REPO_ROOT, relDir);
  fs.mkdirSync(absDir, { recursive: true });
  const absFile = path.join(absDir, filename);
  fs.writeFileSync(absFile, content, 'utf8');
  return {
    absFile,
    relFile: toPosix(path.relative(REPO_ROOT, absFile)),
    absDir
  };
}

function cleanupFixture(fixture) {
  if (!fixture) return;
  if (fs.existsSync(fixture.absFile)) {
    fs.unlinkSync(fixture.absFile);
  }
  try {
    fs.rmdirSync(fixture.absDir);
  } catch (_error) {
    // Ignore if directory has other files.
  }
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   [32m✓[0m ${name}`);
  } catch (error) {
    errors.push({
      rule: 'openapi-reference-audit unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/openapi-reference-audit.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 OpenAPI Reference Audit Unit Tests');

  await runCase('Parses frontmatter METHOD /path references', async () => {
    const parsed = audit.parseMethodPathValue('post /stream');
    assert.ok(parsed);
    assert.strictEqual(parsed.key, 'POST /stream');
  });

  await runCase('Parses <OpenAPI path="METHOD /path" />', async () => {
    const parsed = audit.parseOpenApiTagReference('<OpenAPI path="post /task/{id}" />');
    assert.ok(parsed.valid);
    assert.strictEqual(parsed.endpoint.key, 'POST /task/{id}');
  });

  await runCase('Parses <OpenAPI path="/path" method="post" />', async () => {
    const parsed = audit.parseOpenApiTagReference('<OpenAPI path="task/{id}" method="post" />');
    assert.ok(parsed.valid);
    assert.strictEqual(parsed.endpoint.key, 'POST /task/{id}');
  });

  await runCase('Ignores non-endpoint frontmatter openapi values', async () => {
    assert.strictEqual(audit.isIgnoredFrontmatterOpenapiValue('3.0.3'), true);
    assert.strictEqual(audit.isIgnoredFrontmatterOpenapiValue('api/openapi.yaml'), true);
    assert.strictEqual(audit.isIgnoredFrontmatterOpenapiValue('GET /stream'), false);
  });

  await runCase('Resolves locale Studio API files to api/studio.yaml', async () => {
    const spec = audit.resolveSpecForFile('v2/es/platforms/livepeer-studio/api-reference/streams/create.mdx');
    assert.strictEqual(spec, 'api/studio.yaml');
  });

  await runCase('Flags unknown endpoint not found in resolved spec', async () => {
    const fixture = mkFixture(
      'v2/es/platforms/livepeer-studio/api-reference/__openapi-audit-unit__',
      `unknown-${Date.now()}.mdx`,
      [
        '---',
        "title: 'Unknown endpoint fixture'",
        "openapi: 'GET /definitely-not-real-endpoint'",
        '---',
        '',
        '# Unknown',
        '',
        '<OpenAPI path="GET /definitely-not-real-endpoint" />',
        ''
      ].join('\n')
    );

    try {
      const result = await audit.runAudit({
        argv: [
          '--files', fixture.relFile,
          '--strict',
          '--report', '/tmp/openapi-audit-unit-unknown.md',
          '--report-json', '/tmp/openapi-audit-unit-unknown.json'
        ]
      });

      assert.strictEqual(result.exitCode, 1);
      assert.ok(
        result.findings.some((finding) => finding.type === audit.FINDING_TYPES.ENDPOINT_NOT_FOUND)
      );
    } finally {
      cleanupFixture(fixture);
    }
  });

  await runCase('Flags frontmatter/component endpoint mismatch within same file', async () => {
    const fixture = mkFixture(
      'v2/platforms/livepeer-studio/api-reference/__openapi-audit-unit__',
      `mismatch-${Date.now()}.mdx`,
      [
        '---',
        "title: 'Mismatch fixture'",
        "openapi: 'GET /stream/{id}'",
        '---',
        '',
        '# Mismatch',
        '',
        '<OpenAPI path="POST /stream/{id}" />',
        ''
      ].join('\n')
    );

    try {
      const result = await audit.runAudit({
        argv: [
          '--files', fixture.relFile,
          '--strict',
          '--report', '/tmp/openapi-audit-unit-mismatch.md',
          '--report-json', '/tmp/openapi-audit-unit-mismatch.json'
        ]
      });

      assert.strictEqual(result.exitCode, 1);
      assert.ok(
        result.findings.some((finding) => finding.type === audit.FINDING_TYPES.INTRA_FILE_MISMATCH)
      );
    } finally {
      cleanupFixture(fixture);
    }
  });

  await runCase('Applies conservative autofix normalization with --fix --write', async () => {
    const fixture = mkFixture(
      'v2/platforms/livepeer-studio/api-reference/__openapi-audit-unit__',
      `fix-${Date.now()}.mdx`,
      [
        '---',
        "title: 'Fix fixture'",
        "openapi: 'post stream'",
        '---',
        '',
        '# Fix',
        '',
        '<OpenAPI path="stream" method="post" />',
        '<OpenAPI path="post stream" />',
        ''
      ].join('\n')
    );

    try {
      const result = await audit.runAudit({
        argv: [
          '--files', fixture.relFile,
          '--fix',
          '--write',
          '--strict',
          '--report', '/tmp/openapi-audit-unit-fix.md',
          '--report-json', '/tmp/openapi-audit-unit-fix.json'
        ]
      });

      assert.strictEqual(result.exitCode, 0);
      const nextContent = fs.readFileSync(fixture.absFile, 'utf8');
      assert.ok(nextContent.includes("openapi: 'POST /stream'"));
      assert.ok(nextContent.includes('<OpenAPI path="/stream" method="POST" />'));
      assert.ok(nextContent.includes('<OpenAPI path="POST /stream" />'));
    } finally {
      cleanupFixture(fixture);
    }
  });

  await runCase('Produces required JSON summary contract keys', async () => {
    const fixture = mkFixture(
      'v2/platforms/livepeer-studio/api-reference/__openapi-audit-unit__',
      `contract-${Date.now()}.mdx`,
      [
        '---',
        "title: 'Contract fixture'",
        "openapi: 'GET /stream'",
        '---',
        '',
        '# Contract',
        '',
        '<OpenAPI path="GET /stream" />',
        ''
      ].join('\n')
    );

    try {
      const result = await audit.runAudit({
        argv: [
          '--files', fixture.relFile,
          '--report', '/tmp/openapi-audit-unit-contract.md',
          '--report-json', '/tmp/openapi-audit-unit-contract.json'
        ]
      });

      assert.ok(Object.prototype.hasOwnProperty.call(result.summary, 'totalFiles'));
      assert.ok(Object.prototype.hasOwnProperty.call(result.summary, 'totalReferences'));
      assert.ok(Object.prototype.hasOwnProperty.call(result.summary, 'totalFailures'));
      assert.ok(Object.prototype.hasOwnProperty.call(result.summary, 'failuresByType'));
      assert.ok(Array.isArray(result.findings));
    } finally {
      cleanupFixture(fixture);
    }
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 10
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ OpenAPI reference audit unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} OpenAPI reference audit unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ OpenAPI reference audit unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
