#!/usr/bin/env node
/**
 * @script            openapi-rolling-issue.test
 * @category          validator
 * @purpose           tooling:api-spec
 * @scope             tests/unit, tests/utils, .github/workflows/openapi-reference-validation.yml
 * @owner             docs
 * @needs             F-R17
 * @purpose-statement Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic
 * @pipeline          manual — not yet in pipeline
 * @usage             node tests/unit/openapi-rolling-issue.test.js [flags]
 */

const assert = require('assert');
const helpers = require('../utils/openapi-rolling-issue');

let errors = [];

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   \u001b[32m✓\u001b[0m ${name}`);
  } catch (error) {
    errors.push(`${name}: ${error.message}`);
  }
}

async function runTests() {
  errors = [];

  console.log('🧪 OpenAPI Rolling Issue Unit Tests');

  await runCase('findMarkerIssue dedupes by marker and prefers open issue', async () => {
    const items = [
      { number: 101, state: 'closed', body: 'x <!-- openapi-reference-audit --> x' },
      { number: 102, state: 'open', body: 'x <!-- openapi-reference-audit --> x' },
      { number: 103, state: 'open', body: 'unrelated' }
    ];

    const result = helpers.findMarkerIssue(items);
    assert.ok(result);
    assert.strictEqual(result.number, 102);
  });

  await runCase('getIssueAction returns create vs update for non-zero failures', async () => {
    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: null, totalFailures: 2 }),
      'create'
    );

    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: { number: 10, state: 'open' }, totalFailures: 2 }),
      'update'
    );
  });

  await runCase('getIssueAction returns close when failures become zero and issue is open', async () => {
    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: { number: 22, state: 'open' }, totalFailures: 0 }),
      'close'
    );

    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: null, totalFailures: 0 }),
      'noop'
    );
  });

  await runCase('buildIssueBody includes required headings', async () => {
    const body = helpers.buildIssueBody({
      runUrl: 'https://example.test/run/1',
      topFindings: '- endpoint-not-found-in-spec: v2/foo.mdx:3 (GET /foo)',
      totalFailures: 1,
      totalFiles: 10,
      totalReferences: 20
    });

    const headings = [
      '### Area',
      '### Failing command or workflow',
      '### Script or workflow path',
      '### Full error output',
      '### Reproduction conditions',
      '### Expected behavior',
      '### Action requested from maintainers',
      '### Classification',
      '### Priority'
    ];

    headings.forEach((heading) => assert.ok(body.includes(heading), `missing ${heading}`));
    assert.ok(body.includes(helpers.ROLLING_ISSUE_MARKER));
  });

  await runCase('buildTopFindings enforces deterministic ordering and limit', async () => {
    const findings = [
      { type: 't', file: 'b.mdx', line: 9, reference: 'GET /b', resolvedSpec: 'api/studio.yaml' },
      { type: 't', file: 'a.mdx', line: 10, reference: 'GET /a/2', resolvedSpec: 'api/studio.yaml' },
      { type: 't', file: 'a.mdx', line: 2, reference: 'GET /a/1', resolvedSpec: 'api/studio.yaml' },
      { type: 't', file: 'c.mdx', line: 1, reference: 'GET /c', resolvedSpec: 'api/studio.yaml' }
    ];

    const text = helpers.buildTopFindings(findings, 3);
    const lines = text.split('\n');
    assert.strictEqual(lines.length, 3);
    assert.ok(lines[0].includes('a.mdx:2'));
    assert.ok(lines[1].includes('a.mdx:10'));
    assert.ok(lines[2].includes('b.mdx:9'));
  });

  return {
    errors,
    passed: errors.length === 0,
    total: 5
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ OpenAPI rolling issue unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} OpenAPI rolling issue unit test failure(s)`);
      result.errors.forEach((msg) => console.error(`  - ${msg}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ OpenAPI rolling issue unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
