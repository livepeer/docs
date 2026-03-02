#!/usr/bin/env node
/**
 * @script repo-audit-pipeline.test
 * @summary Validate audit skill discovery, orchestrator dry-run output, cleanup manifest safety, and cross-agent packaging outputs.
 * @owner docs
 * @scope tests/unit, tools/scripts, ai-tools/ai-skills/catalog, ai-tools/agent-packs
 *
 * @usage
 *   node tests/unit/repo-audit-pipeline.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console test summary.
 *
 * @exit-codes
 *   0 = all unit cases passed
 *   1 = one or more cases failed
 *
 * @examples
 *   node tests/unit/repo-audit-pipeline.test.js
 *
 * @notes
 *   Uses temporary output directories under tests/reports and does not mutate tracked source files.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();

let errors = [];
let warnings = [];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function runNode(args) {
  return spawnSync('node', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'repo-audit-pipeline unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/repo-audit-pipeline.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 Repo Audit Pipeline Unit Tests');

  const tmpRoot = path.join(REPO_ROOT, 'tests/reports/repo-audit-pipeline-unit', String(Date.now()));
  const tmpAuditOutputRel = toPosix(path.relative(REPO_ROOT, path.join(tmpRoot, 'audit')));
  const tmpPacksOutputRel = toPosix(path.relative(REPO_ROOT, path.join(tmpRoot, 'packs')));

  fs.mkdirSync(path.join(tmpRoot, 'audit'), { recursive: true });
  fs.mkdirSync(path.join(tmpRoot, 'packs'), { recursive: true });

  await runCase('Skill catalogue includes required audit stages', async () => {
    const catalog = readJson('ai-tools/ai-skills/catalog/skill-catalog.json');
    const ids = new Set((catalog.skills || []).map((skill) => skill.id));

    [
      'repo-audit-orchestrator',
      'script-footprint-and-usage-audit',
      'docs-coverage-and-route-integrity-audit',
      'docs-quality-and-freshness-audit',
      'style-and-language-homogenizer-en-gb',
      'component-layout-governance',
      'cleanup-quarantine-manager',
      'cross-agent-packager'
    ].forEach((id) => assert.ok(ids.has(id), `Missing skill id: ${id}`));
  });

  await runCase('Execution manifest stage IDs map to skill catalogue IDs', async () => {
    const catalog = readJson('ai-tools/ai-skills/catalog/skill-catalog.json');
    const manifest = readJson('ai-tools/ai-skills/catalog/execution-manifest.json');
    const ids = new Set((catalog.skills || []).map((skill) => skill.id));

    (manifest.pipeline || []).forEach((entry) => {
      assert.ok(ids.has(entry.id), `Manifest stage missing from catalogue: ${entry.id}`);
    });
  });

  await runCase('Orchestrator static dry-run writes unified scorecard output', async () => {
    const result = runNode([
      'tools/scripts/repo-audit-orchestrator.js',
      '--mode',
      'static',
      '--scope',
      'changed',
      '--output-dir',
      tmpAuditOutputRel
    ]);

    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);

    assert.strictEqual(result.status, 0, 'Orchestrator exited non-zero in static dry-run mode.');

    const summaryJson = path.join(tmpRoot, 'audit', 'repo-audit-summary.json');
    const summaryMd = path.join(tmpRoot, 'audit', 'repo-audit-summary.md');

    assert.ok(fs.existsSync(summaryJson), 'Missing repo-audit-summary.json output.');
    assert.ok(fs.existsSync(summaryMd), 'Missing repo-audit-summary.md output.');

    const payload = JSON.parse(fs.readFileSync(summaryJson, 'utf8'));
    assert.strictEqual(payload.mode, 'static');
    assert.strictEqual(payload.scope, 'changed');
    assert.ok(typeof payload.score?.score === 'number', 'Missing scorecard numeric score.');
    assert.ok(Array.isArray(payload.stages) && payload.stages.length >= 1, 'Missing stage results.');
  });

  await runCase('Cleanup manager classify mode writes non-mutating manifest', async () => {
    const result = runNode([
      'tools/scripts/cleanup-quarantine-manager.js',
      '--output-dir',
      tmpAuditOutputRel
    ]);

    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);

    assert.strictEqual(result.status, 0, 'Cleanup classify exited non-zero.');

    const manifestJson = path.join(tmpRoot, 'audit', 'cleanup-quarantine-manifest.json');
    assert.ok(fs.existsSync(manifestJson), 'Missing cleanup quarantine manifest output.');

    const manifest = JSON.parse(fs.readFileSync(manifestJson, 'utf8'));
    assert.strictEqual(manifest.mode, 'classify');
    assert.ok(Array.isArray(manifest.entries), 'Manifest entries must be an array.');
  });

  await runCase('Cross-agent packager emits all pack targets from one catalogue', async () => {
    const result = runNode([
      'tools/scripts/cross-agent-packager.js',
      '--agent-pack',
      'all',
      '--output-dir',
      tmpPacksOutputRel
    ]);

    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);

    assert.strictEqual(result.status, 0, 'Cross-agent packager exited non-zero.');

    const expected = [
      path.join(tmpRoot, 'packs', 'codex', 'skills-manifest.json'),
      path.join(tmpRoot, 'packs', 'cursor', 'rules.md'),
      path.join(tmpRoot, 'packs', 'claude', 'CLAUDE.md'),
      path.join(tmpRoot, 'packs', 'windsurf', 'rules.md'),
      path.join(tmpRoot, 'packs', 'README.md')
    ];

    expected.forEach((outputPath) => {
      assert.ok(fs.existsSync(outputPath), `Missing output: ${toPosix(path.relative(REPO_ROOT, outputPath))}`);
    });
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
        console.log(`\n✅ Repo audit pipeline unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} repo audit pipeline unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Repo audit pipeline unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
