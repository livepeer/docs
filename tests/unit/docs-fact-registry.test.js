#!/usr/bin/env node
/**
 * @script            docs-fact-registry.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/docs-fact-registry.js, tasks/research/claims
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests docs-fact-registry.js — validates claim-family registry schema checks and normalized loading by domain.
 * @pipeline          manual — experimental research system
 * @usage             node tests/unit/docs-fact-registry.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT = path.join(REPO_ROOT, 'tools/scripts/docs-fact-registry.js');

let errors = [];

function runNode(args) {
  return spawnSync('node', [SCRIPT, ...args], { cwd: REPO_ROOT, encoding: 'utf8' });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeJson(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function sampleRegistry(domain = 'orchestrators') {
  return {
    version: 1,
    domain,
    claim_families: [
      {
        claim_id: `${domain}-claim-a`,
        claim_family: 'sample-family',
        entity: domain.slice(0, -1),
        claim_summary: 'Sample claim summary',
        canonical_owner: `v2/${domain}/page-a.mdx`,
        source_type: 'repo-doc-reference',
        source_ref: `v2/${domain}/page-a.mdx`,
        evidence_date: '2026-03-16',
        status: 'verified',
        freshness_class: 'review-on-change',
        dependent_pages: [`v2/${domain}/page-b.mdx`],
        related_claims: [],
        last_reviewed_by: 'codex',
        notes: 'sample notes',
        match_terms: ['sample'],
        comparison_patterns: ['sample'],
        evidence_refs: [
          {
            type: 'repo-file',
            ref: `v2/${domain}/page-a.mdx`,
            match_any: ['sample']
          }
        ]
      }
    ]
  };
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({ name, message: error.message });
  }
}

async function runTests() {
  errors = [];
  console.log('🧪 Docs Fact Registry Unit Tests');

  await runCase('Validate accepts a well-formed registry directory', async () => {
    const root = mkTmpDir('docs-fact-registry-valid-');
    writeJson(path.join(root, 'orchestrators.json'), sampleRegistry('orchestrators'));
    writeJson(path.join(root, 'gateways.json'), sampleRegistry('gateways'));

    const result = runNode(['--validate', '--registry', root]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
    assert.ok(result.stdout.includes('valid'), 'expected success output');
  });

  await runCase('Validate rejects invalid statuses', async () => {
    const root = mkTmpDir('docs-fact-registry-invalid-');
    const invalid = sampleRegistry('orchestrators');
    invalid.claim_families[0].status = 'needs-review';
    writeJson(path.join(root, 'orchestrators.json'), invalid);

    const result = runNode(['--validate', '--registry', root]);
    assert.strictEqual(result.status, 1, 'invalid registry should fail');
    assert.ok((result.stderr + result.stdout).includes('status'), 'should mention invalid status');
  });

  await runCase('Domain report returns normalized claim families', async () => {
    const root = mkTmpDir('docs-fact-registry-domain-');
    const reportJson = path.join(root, 'report.json');
    writeJson(path.join(root, 'orchestrators.json'), sampleRegistry('orchestrators'));
    writeJson(path.join(root, 'gateways.json'), sampleRegistry('gateways'));

    const result = runNode([
      '--registry',
      root,
      '--domain',
      'gateways',
      '--report-json',
      reportJson
    ]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
    const parsed = JSON.parse(fs.readFileSync(reportJson, 'utf8'));
    assert.deepStrictEqual(parsed.domains, [{ domain: 'gateways', claim_count: 1 }]);
    assert.strictEqual(parsed.claim_families[0].domain, 'gateways');
  });

  await runCase('Validate accepts repo-discord-signal evidence refs', async () => {
    const root = mkTmpDir('docs-fact-registry-discord-');
    const registry = sampleRegistry('gateways');
    registry.claim_families[0].evidence_refs = [
      {
        type: 'repo-discord-signal',
        ref: '.github/workflows/discord-issue-intake.yml',
        match_any: ['discord']
      }
    ];
    writeJson(path.join(root, 'gateways.json'), registry);

    const result = runNode(['--validate', '--registry', root]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  });

  return {
    passed: errors.length === 0,
    total: 4,
    errors
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ Docs fact registry unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} docs fact registry unit test failure(s)`);
      result.errors.forEach((entry) => {
        console.error(`  - ${entry.name}: ${entry.message}`);
      });
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Docs fact registry unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}
