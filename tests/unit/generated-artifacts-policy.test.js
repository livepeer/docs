#!/usr/bin/env node
/**
 * @script            generated-artifacts-policy.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/lib/generated-artifacts.js, tools/config/generated-artifacts.json
 * @domain            docs
 * @needs             R-R16, R-R17
 * @purpose-statement Tests generated artifact governance manifest — validates enums, path matching, and hook-policy expectations
 * @pipeline          manual — targeted governance test
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/generated-artifacts-policy.test.js
 */

const assert = require('assert');
const {
  readManifest,
  getFirstArtifactByPath,
  findArtifactsForPath,
  isArtifactAffectedByFiles,
  getForbiddenEphemeralFiles
} = require('../../tools/lib/generated-artifacts');

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const manifest = readManifest();
    assert.ok(Array.isArray(manifest.artifacts), 'manifest should expose an artifacts array');
    assert.ok(manifest.artifacts.length >= 5, 'manifest should define the initial governed artifact set');
  });

  cases.push(async () => {
    const artifact = getFirstArtifactByPath('docs-index.json');
    assert.ok(artifact, 'docs-index.json manifest entry should exist');
    assert.strictEqual(artifact.class, 'committed_authoritative');
    assert.strictEqual(artifact.commit_policy, 'required');
    assert.strictEqual(artifact.hook_policy, 'check_only');
    assert.strictEqual(artifact.ci_policy, 'enforce');
    assert.strictEqual(artifact.delta_strategy, 'staged');
  });

  cases.push(async () => {
    const artifact = getFirstArtifactByPath('docs-index.json');
    assert.ok(isArtifactAffectedByFiles(artifact, ['docs.json']), 'docs.json should trigger docs-index freshness');
    assert.ok(isArtifactAffectedByFiles(artifact, ['v2/orchestrators/index.mdx']), 'v2 docs should trigger docs-index freshness');
    assert.ok(!isArtifactAffectedByFiles(artifact, ['docs-guide/overview.mdx']), 'docs-guide docs should not trigger docs-index freshness');
  });

  cases.push(async () => {
    const matches = findArtifactsForPath('docs-guide/catalog/pages-catalog.mdx');
    assert.ok(matches.length >= 1, 'pages catalog should be governed by manifest');
    assert.strictEqual(matches[0].hook_policy, 'check_only');
  });

  cases.push(async () => {
    const forbidden = getForbiddenEphemeralFiles([
      'tasks/reports/_local/navigation-links/navigation-report.md',
      'docs.json'
    ]);
    assert.deepStrictEqual(forbidden, ['tasks/reports/_local/navigation-links/navigation-report.md']);
  });

  for (let i = 0; i < cases.length; i += 1) {
    const name = `case-${i + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[i]();
      console.log(`   ✓ ${name}`);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ generated-artifacts-policy tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} generated-artifacts-policy test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ generated-artifacts-policy tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
