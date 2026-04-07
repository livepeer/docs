#!/usr/bin/env node
/**
 * @script            root-governance-sync.test
 * @category          validator
 * @type              validator
 * @purpose           qa:repo-health
 * @scope             operations/tests/unit, operations/scripts/generators/governance/root, operations/scripts/validators/governance/compliance, tools/config/runtime, tools/lib/governance, docs-guide/repo-ops/config, .allowlist
 * @owner             docs
 * @needs             R-R14, R-R16, R-R17
 * @purpose-statement Tests the canonical root-governance manifest, generated projections, and sync validator.
 * @pipeline          manual, P3
 * @usage             node operations/tests/unit/root-governance-sync.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  readManifest,
  getAllowlistEntries,
  getForbiddenEntries
} = require('../../../tools/lib/governance/root-governance');
const {
  SCRIPT_PATH,
  buildAllowlistContent,
  buildRootGovernanceMapContent
} = require('../../scripts/generators/governance/root/generate-root-governance-artifacts');
const validator = require('../../scripts/validators/governance/compliance/check-root-governance-sync');

const REPO_ROOT = path.resolve(__dirname, '../../..');

function readRepoFile(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    assert.ok(Array.isArray(manifest.entries));
    assert.ok(manifest.entries.some((entry) => entry.path === 'ai-tools'));
    const aiTools = manifest.entries.find((entry) => entry.path === 'ai-tools');
    assert.strictEqual(aiTools.class, 'subsystem_root');
    assert.strictEqual(aiTools.root_basis, 'approved_subsystem');
    assert.strictEqual(aiTools.lifecycle, 'active');
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const allowlist = buildAllowlistContent(manifest);
    getAllowlistEntries(manifest).forEach((entry) => {
      assert.ok(allowlist.includes(`\n${entry}\n`) || allowlist.endsWith(`\n${entry}\n`), `missing allowlist entry ${entry}`);
    });
    getForbiddenEntries(manifest).forEach((entry) => {
      assert.ok(!allowlist.includes(`\n${entry}\n`), `forbidden entry leaked into allowlist: ${entry}`);
    });
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const map = buildRootGovernanceMapContent(manifest);
    assert.ok(map.includes('# Root Governance Map'));
    assert.ok(map.includes('## Governed Root Inventory'));
    assert.ok(map.includes('## Placement Matrix'));
    assert.ok(map.includes('## AI-First Public Root Artifacts'));
    assert.ok(map.includes('## Forbidden Root Artifacts'));
    assert.ok(map.includes('## Temporary Exceptions'));
  });

  cases.push(async () => {
    execFileSync('node', [SCRIPT_PATH, '--check'], {
      cwd: REPO_ROOT,
      stdio: 'pipe',
      encoding: 'utf8'
    });
  });

  cases.push(async () => {
    const result = validator.run();
    assert.ok(result.passed, result.issues.map((issue) => issue.message).join('\n'));
  });

  cases.push(async () => {
    const manifest = readManifest(REPO_ROOT);
    const currentAllowlist = `${readRepoFile(manifest.generated_outputs.allowlist).trim()}\n`;
    const currentMap = `${readRepoFile(manifest.generated_outputs.map_doc).trim()}\n`;
    assert.strictEqual(currentAllowlist, buildAllowlistContent(manifest));
    assert.strictEqual(currentMap, buildRootGovernanceMapContent(manifest));
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
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
        console.log(`\n✅ root-governance-sync tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} root-governance-sync test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ root-governance-sync tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
