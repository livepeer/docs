#!/usr/bin/env node
/**
 * @script            update-livepeer-release.test
 * @category          validator
 * @purpose           qa:data-refresh
 * @scope             .github/scripts, snippets/data/globals
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Verifies the go-livepeer release updater writes the canonical release data module shape.
 * @pipeline          P2
 * @usage             node operations/tests/unit/update-livepeer-release.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  buildLatestReleaseModule,
  main,
  parseArgs,
  RELEASE_PAGE_BASE_URL,
} = require('../../../.github/scripts/update-livepeer-release.js');

function createTempOutputPath() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'latest-release-'));
  return path.join(tempDir, 'latestRelease.jsx');
}

async function runTests() {
  const fetchedOutputPath = createTempOutputPath();
  let fetchCalls = 0;

  await main({
    argv: [],
    outputPath: fetchedOutputPath,
    fetcher: async () => {
      fetchCalls += 1;
      return {
        ok: true,
        status: 200,
        statusText: 'OK',
        json: async () => ({ tag_name: 'v9.9.9' }),
      };
    },
  });

  const fetchedContent = fs.readFileSync(fetchedOutputPath, 'utf8');
  assert.strictEqual(fetchCalls, 1, 'Expected the updater to fetch the latest release when no override is provided.');
  assert.strictEqual(
    fetchedContent,
    buildLatestReleaseModule('v9.9.9'),
    'Fetched release output should match the canonical module template.'
  );
  assert.match(
    fetchedContent,
    new RegExp(`${RELEASE_PAGE_BASE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/v9\\.9\\.9`),
    'Fetched output should include the release page URL.'
  );
  assert.ok(
    !fetchedContent.includes('latestVersionUrl'),
    'Canonical output must not include the deprecated latestVersionUrl export.'
  );

  const overrideOutputPath = createTempOutputPath();
  let overrideFetcherCalled = false;

  await main({
    argv: ['--version', 'v1.2.3'],
    outputPath: overrideOutputPath,
    fetcher: async () => {
      overrideFetcherCalled = true;
      throw new Error('fetch should not be called when --version is provided');
    },
  });

  const overrideContent = fs.readFileSync(overrideOutputPath, 'utf8');
  assert.strictEqual(overrideFetcherCalled, false, 'Override mode should not hit the network.');
  assert.strictEqual(
    overrideContent,
    buildLatestReleaseModule('v1.2.3'),
    'Override mode should write the requested version using the canonical module template.'
  );
  assert.deepStrictEqual(parseArgs(['--version', 'v1.2.3']), { version: 'v1.2.3' });
  assert.throws(() => parseArgs(['--version']), /Missing value for --version/);
}

if (require.main === module) {
  runTests()
    .then(() => {
      console.log('✅ update-livepeer-release tests passed');
    })
    .catch((error) => {
      console.error(error.stack || error.message);
      process.exit(1);
    });
}

module.exports = { runTests };
