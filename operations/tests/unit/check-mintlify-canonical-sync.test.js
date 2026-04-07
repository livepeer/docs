#!/usr/bin/env node
/**
 * @script            check-mintlify-canonical-sync.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, operations/scripts/config/mintlify-canonical-sync.js, operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js, operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js, docs-guide/canonical/collation-data/Mintlify
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Tests the Mintlify canonical-sync registry, validator, and remediator contract against the canonical cleanup surfaces.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/check-mintlify-canonical-sync.test.js [--staged]
 */

const assert = require('assert');

const sync = require('../../scripts/config/mintlify-canonical-sync');
const validator = require('../../scripts/validators/governance/compliance/check-mintlify-canonical-sync');
const remediator = require('../../scripts/remediators/content/repair/sync-mintlify-canonical-consumers');

let errors = [];
let warnings = [];

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'operations/tests/unit/check-mintlify-canonical-sync.test.js',
      rule: 'Mintlify canonical sync unit',
      message: `${name}: ${error.message}`,
      line: 1
    });
  }
}

async function runTests(options = {}) {
  errors = [];
  warnings = [];

  console.log('🧪 Mintlify Canonical Sync Unit Tests');

  await runCase('Registry exposes canonical source, wrapper, and moved sources', async () => {
    const registry = sync.loadRegistry();
    assert.strictEqual(
      registry.canonicalSource,
      'docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md'
    );
    assert.strictEqual(registry.publicWrapper.path, 'docs-guide/contributing/mintlify.mdx');
    assert.ok(registry.movedSources.includes('snippets/snippetsWiki/mintlify-behaviour.mdx'));
    assert.ok(registry.movedSources.includes('workspace/thread-outputs/research/mintlify-constraints-reference.md'));
  });

  await runCase('Remediator arg parsing keeps write and stage modes consistent', async () => {
    const parsed = remediator.parseArgs(['--write', '--stage', '--staged']);
    assert.strictEqual(parsed.mode, 'write');
    assert.strictEqual(parsed.stage, true);
    assert.strictEqual(parsed.stagedOnly, true);
  });

  await runCase('Replacement helper applies exact string pairs deterministically', async () => {
    const result = sync.applyReplacementPairs('old path and old route', [
      { from: 'old path', to: 'new path' },
      { from: 'old route', to: 'new route' }
    ]);
    assert.strictEqual(result.updated, 'new path and new route');
    assert.strictEqual(result.applied, 2);
  });

  await runCase('Repair scope stays limited to deterministic registered targets', async () => {
    const registry = sync.loadRegistry();
    const repairFiles = sync.collectRepairFiles(sync.getRepoRoot(), registry);
    assert.ok(repairFiles.includes('docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md'));
    assert.ok(repairFiles.includes('docs-guide/canonical/collation-data/Mintlify/index.md'));
    assert.ok(repairFiles.includes('docs-guide/contributing/mintlify.mdx'));
    assert.ok(!repairFiles.includes('workspace/plan/active/CONTRACTS/CURRENT-STATE/REQUIREMENTS.mdx'));
  });

  await runCase('Validator passes against the live repo state', async () => {
    const result = validator.run({ stagedOnly: Boolean(options.stagedOnly) });
    if (!result.skipped) {
      assert.ok(result.passed, `validator failed with ${result.findings.length} finding(s)`);
    }
  });

  return {
    passed: errors.length === 0,
    total: 5,
    errors,
    warnings
  };
}

if (require.main === module) {
  const stagedOnly = process.argv.includes('--staged');
  runTests({ stagedOnly })
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ Mintlify canonical sync unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} Mintlify canonical sync unit test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Mintlify canonical sync unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
