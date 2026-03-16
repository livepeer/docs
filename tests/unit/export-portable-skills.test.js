#!/usr/bin/env node
/**
 * @script            export-portable-skills.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/export-portable-skills.js, tools/lib/codex-skill-templates.js, ai-tools/agent-packs/skills
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests export-portable-skills.js — validates portable skill export packs from canonical templates.
 * @pipeline          P1, P3
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/export-portable-skills.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const EXPORT_SCRIPT = path.join(REPO_ROOT, 'tools/scripts/export-portable-skills.js');

let errors = [];

function runNode(args) {
  return spawnSync('node', [EXPORT_SCRIPT, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: process.env
  });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function createTemplate(sourceDir, number, name, description) {
  const fileName = `${String(number).padStart(2, '0')}-${name}.template.md`;
  const absPath = path.join(sourceDir, fileName);
  const content = [
    '---',
    `name: ${name}`,
    'version: "1.0"',
    `description: ${description} Use when trigger one, trigger two, or trigger three apply to the requested workflow.`,
    'tier: 1',
    'invoke_when:',
    '  - "trigger one"',
    '  - "trigger two"',
    '  - "trigger three"',
    'primary_paths:',
    '  - "README.md"',
    '  - "tools/scripts"',
    'primary_commands:',
    '  - "bash lpd setup --yes"',
    '  - "bash lpd doctor --strict"',
    '---',
    '',
    `SKILL: ${name}`,
    '',
    'Goal',
    'Execute the workflow safely.',
    '',
    'Constraints',
    '- Keep v1 immutable.',
    '',
    'Workflow',
    '1. Run command one.',
    '2. Run command two.',
    '',
    'Deliverable Format',
    '- Provide concise status and next actions.',
    '',
    'Failure Modes / Fallback',
    '- If command fails, report exact remediation.',
    '',
    'Validation Checklist',
    '- [ ] Required checks were run.',
    ''
  ].join('\n');
  writeFile(absPath, content);
  return { absPath, content };
}

function createBundle(sourceDir, templateStem, bundleName, files) {
  const bundleRoot = path.join(sourceDir, `${templateStem}.${bundleName}`);
  Object.entries(files).forEach(([relativePath, content]) => {
    writeFile(path.join(bundleRoot, relativePath), content);
  });
  return bundleRoot;
}

function readUtf8(absPath) {
  return fs.readFileSync(absPath, 'utf8');
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      name,
      message: error.message
    });
  }
}

async function runTests() {
  errors = [];
  console.log('🧪 Portable Skill Export Unit Tests');

  await runCase('Export writes skill folders and manifest', async () => {
    const root = mkTmpDir('portable-skill-export-');
    const sourceDir = path.join(root, 'source');
    const outputDir = path.join(root, 'packs');

    const t1 = createTemplate(sourceDir, 1, 'alpha-skill', 'Alpha skill export workflow.');
    createBundle(sourceDir, '01-alpha-skill', 'references', {
      'workflow.md': '# Workflow\n'
    });
    createBundle(sourceDir, '01-alpha-skill', 'scripts', {
      'report.sh': '#!/bin/sh\necho report\n'
    });
    createBundle(sourceDir, '01-alpha-skill', 'assets', {
      'notes/example.txt': 'asset example\n'
    });
    createTemplate(sourceDir, 2, 'beta-skill', 'Beta skill export workflow.');

    const result = runNode(['--source-dir', sourceDir, '--output-dir', outputDir, '--write']);
    assert.strictEqual(result.status, 0, `export exited non-zero: ${result.stderr || result.stdout}`);

    const skillPath = path.join(outputDir, 'alpha-skill', 'SKILL.md');
    const referencePath = path.join(outputDir, 'alpha-skill', 'references', 'workflow.md');
    const scriptPath = path.join(outputDir, 'alpha-skill', 'scripts', 'report.sh');
    const assetPath = path.join(outputDir, 'alpha-skill', 'assets', 'notes', 'example.txt');
    const manifestPath = path.join(outputDir, 'manifest.json');
    assert.ok(fs.existsSync(skillPath), 'alpha SKILL.md should exist');
    assert.ok(fs.existsSync(referencePath), 'reference bundle should exist');
    assert.ok(fs.existsSync(scriptPath), 'script bundle should exist');
    assert.ok(fs.existsSync(assetPath), 'asset bundle should exist');
    assert.ok(fs.existsSync(manifestPath), 'manifest.json should exist');
    assert.strictEqual(readUtf8(skillPath), t1.content, 'exported SKILL.md should match template exactly');
    assert.strictEqual(readUtf8(referencePath), '# Workflow\n', 'reference content should match source');

    const manifest = JSON.parse(readUtf8(manifestPath));
    assert.ok(manifest.generated_at, 'manifest should include generated_at');
    assert.strictEqual(manifest.skills.length, 2, 'manifest should list exported skills');
    assert.deepStrictEqual(
      manifest.skills[0].supported_agents,
      ['codex', 'cursor', 'claude', 'windsurf'],
      'manifest should list supported agents'
    );
    assert.ok(
      manifest.skills.some((entry) => entry.pack_path.endsWith('/alpha-skill/SKILL.md')),
      'manifest should include pack path for alpha skill'
    );
  });

  await runCase('Check mode fails on managed bundle drift', async () => {
    const root = mkTmpDir('portable-skill-export-check-');
    const sourceDir = path.join(root, 'source');
    const outputDir = path.join(root, 'packs');

    createTemplate(sourceDir, 1, 'drift-skill', 'Detect drift in export check mode.');
    createBundle(sourceDir, '01-drift-skill', 'references', {
      'claims.md': '# Claims\n'
    });
    const exportResult = runNode(['--source-dir', sourceDir, '--output-dir', outputDir, '--write']);
    assert.strictEqual(exportResult.status, 0, `initial export failed: ${exportResult.stderr || exportResult.stdout}`);

    writeFile(path.join(outputDir, 'drift-skill', 'references', 'claims.md'), '# Tampered\n');
    const checkResult = runNode(['--source-dir', sourceDir, '--output-dir', outputDir, '--check']);
    assert.strictEqual(checkResult.status, 1, 'check mode should fail on drift');
    assert.ok((checkResult.stdout + checkResult.stderr).includes('drift'), 'check output should include drift signal');
  });

  await runCase('Subset export writes only selected skills', async () => {
    const root = mkTmpDir('portable-skill-export-subset-');
    const sourceDir = path.join(root, 'source');
    const outputDir = path.join(root, 'packs');

    createTemplate(sourceDir, 1, 'subset-one', 'Subset one.');
    createTemplate(sourceDir, 2, 'subset-two', 'Subset two.');

    const result = runNode([
      '--source-dir',
      sourceDir,
      '--output-dir',
      outputDir,
      '--write',
      '--skills',
      'subset-two'
    ]);
    assert.strictEqual(result.status, 0, `subset export failed: ${result.stderr || result.stdout}`);
    assert.ok(!fs.existsSync(path.join(outputDir, 'subset-one')), 'subset-one should not be exported');
    assert.ok(fs.existsSync(path.join(outputDir, 'subset-two', 'SKILL.md')), 'subset-two should be exported');

    const manifest = JSON.parse(readUtf8(path.join(outputDir, 'manifest.json')));
    assert.deepStrictEqual(
      manifest.skills.map((entry) => entry.name),
      ['subset-two'],
      'subset manifest should include only selected skill'
    );
  });

  await runCase('Export prunes stale managed bundle files', async () => {
    const root = mkTmpDir('portable-skill-export-prune-');
    const sourceDir = path.join(root, 'source');
    const outputDir = path.join(root, 'packs');

    createTemplate(sourceDir, 1, 'prune-skill', 'Prune stale managed bundle files.');
    const referencesRoot = createBundle(sourceDir, '01-prune-skill', 'references', {
      'old.md': '# Old\n'
    });

    let result = runNode(['--source-dir', sourceDir, '--output-dir', outputDir, '--write']);
    assert.strictEqual(result.status, 0, `initial export failed: ${result.stderr || result.stdout}`);

    fs.rmSync(referencesRoot, { recursive: true, force: true });
    createBundle(sourceDir, '01-prune-skill', 'references', {
      'new.md': '# New\n'
    });

    result = runNode(['--source-dir', sourceDir, '--output-dir', outputDir, '--write']);
    assert.strictEqual(result.status, 0, `resync failed: ${result.stderr || result.stdout}`);
    assert.ok(
      !fs.existsSync(path.join(outputDir, 'prune-skill', 'references', 'old.md')),
      'stale managed reference should be removed'
    );
    assert.ok(
      fs.existsSync(path.join(outputDir, 'prune-skill', 'references', 'new.md')),
      'new reference should exist'
    );
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
        console.log(`\n✅ Portable skill export unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} portable skill export unit test failure(s)`);
      result.errors.forEach((entry) => {
        console.error(`  - ${entry.name}: ${entry.message}`);
      });
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Portable skill export unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
