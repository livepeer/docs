#!/usr/bin/env node
/**
 * @script            mdx-component-runtime-smoke.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tests/integration
 * @owner             docs
 * @needs             E-R1, R-R29
 * @purpose-statement Unit tests for the MDX runtime smoke helpers — covers arg parsing, sentinel route selection, trigger logic, and failure classification.
 * @pipeline          manual — targeted smoke helper coverage
 * @usage             node tests/unit/mdx-component-runtime-smoke.test.js
 */

const assert = require('assert');
const smoke = require('../integration/mdx-component-runtime-smoke');

let errors = [];
let warnings = [];

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'mdx-component-runtime-smoke unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/mdx-component-runtime-smoke.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 MDX Runtime Smoke Unit Tests');

  await runCase('Parses default args with sentinel routes', async () => {
    const parsed = smoke.parseArgs([]);
    assert.strictEqual(parsed.routes.length, 0);
    assert.ok(Array.isArray(smoke.getRoutes(parsed)));
    assert.strictEqual(smoke.getRoutes(parsed).length, smoke.SENTINEL_ROUTES.length);
  });

  await runCase('Parses explicit routes and base URL', async () => {
    const parsed = smoke.parseArgs([
      '--routes',
      '/v2/about/portal,/v2/developers/portal',
      '--base-url',
      'http://localhost:3001'
    ]);
    assert.deepStrictEqual(smoke.getRoutes(parsed), ['/v2/about/portal', '/v2/developers/portal']);
    assert.strictEqual(parsed.baseUrl, 'http://localhost:3001');
  });

  await runCase('Trigger logic includes component, validator, smoke script, and sentinel page changes', async () => {
    assert.strictEqual(smoke.shouldRunForChangedFiles(['snippets/components/primitives/links.jsx']), true);
    assert.strictEqual(
      smoke.shouldRunForChangedFiles(['tools/scripts/validators/components/check-mdx-component-scope.js']),
      true
    );
    assert.strictEqual(smoke.shouldRunForChangedFiles(['tests/integration/mdx-component-runtime-smoke.js']), true);
    assert.strictEqual(smoke.shouldRunForChangedFiles(['v2/home/mission-control.mdx']), true);
    assert.strictEqual(smoke.shouldRunForChangedFiles(['docs-guide/frameworks/component-governance.mdx']), false);
  });

  await runCase('Blocking console and page errors are classified correctly', async () => {
    assert.strictEqual(
      smoke.isBlockingConsoleMessage('error', 'ReferenceError: normalizeIconName is not defined'),
      true
    );
    assert.strictEqual(smoke.isBlockingConsoleMessage('warning', 'ReferenceError: test'), false);
    assert.strictEqual(smoke.isBlockingPageError("Cannot access 'BlinkingIcon' before initialization"), true);
    assert.strictEqual(smoke.isBlockingPageError('ResizeObserver loop limit exceeded'), false);
  });

  await runCase('DOM failure classification catches 404, error boundary, empty, and runtime body markers', async () => {
    assert.strictEqual(
      smoke.classifyDomFailure({
        status: 404,
        bodyText: 'Not found',
        bodyLength: 700,
        h1Text: '404'
      }),
      'Route returned HTTP 404'
    );

    assert.strictEqual(
      smoke.classifyDomFailure({
        status: 200,
        bodyText: 'content',
        bodyLength: 700,
        h1Text: 'Mission Control',
        hasErrorBoundary: true
      }),
      'Page rendered an error boundary'
    );

    assert.strictEqual(
      smoke.classifyDomFailure({
        status: 200,
        bodyText: 'tiny',
        bodyLength: 4,
        h1Text: ''
      }),
      'Page appears empty or failed to render (4 chars)'
    );

    assert.match(
      smoke.classifyDomFailure({
        status: 200,
        bodyText: 'ReferenceError: normalizeIconName is not defined',
        bodyLength: 900,
        h1Text: 'Mission Control'
      }),
      /blocking runtime error text/
    );
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 5
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ MDX runtime smoke unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} MDX runtime smoke unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ MDX runtime smoke unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
