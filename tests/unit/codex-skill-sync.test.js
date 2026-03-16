#!/usr/bin/env node
/**
 * @script            codex-skill-sync.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/sync-codex-skills.js, ai-tools/ai-skills/templates
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests sync-codex-skills.js — validates skill file and companion bundle synchronisation between sources
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/codex-skill-sync.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SYNC_SCRIPT = path.join(REPO_ROOT, 'tools/scripts/sync-codex-skills.js');

let errors = [];

function runNode(args, options = {}) {
  return spawnSync('node', [SYNC_SCRIPT, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      ...(options.env || {})
    }
  });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content);
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
  return {
    absPath,
    content,
    stem: path.basename(absPath, '.template.md')
  };
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
  console.log('🧪 Codex Skill Sync Unit Tests');

  await runCase('Sync installs templates, resources, and generates openai.yaml', async () => {
    const root = mkTmpDir('codex-skill-sync-install-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');

    const t1 = createTemplate(sourceDir, 1, 'alpha-skill', 'Alpha skill synchronization workflow.');
    createTemplate(sourceDir, 2, 'beta-skill', 'Beta skill synchronization workflow.');
    createBundle(sourceDir, t1.stem, 'references', {
      'workflow.md': '# Workflow\n',
      'sources.md': '# Sources\n'
    });
    createBundle(sourceDir, t1.stem, 'scripts', {
      'report.sh': '#!/bin/sh\necho report\n'
    });
    createBundle(sourceDir, t1.stem, 'assets', {
      'notes/example.txt': 'asset example\n'
    });

    const result = runNode(['--source-dir', sourceDir, '--dest', destDir]);
    assert.strictEqual(result.status, 0, `sync exited non-zero: ${result.stderr || result.stdout}`);

    const skillPath = path.join(destDir, 'alpha-skill', 'SKILL.md');
    const openaiPath = path.join(destDir, 'alpha-skill', 'agents', 'openai.yaml');
    const referencePath = path.join(destDir, 'alpha-skill', 'references', 'workflow.md');
    const scriptPath = path.join(destDir, 'alpha-skill', 'scripts', 'report.sh');
    const assetPath = path.join(destDir, 'alpha-skill', 'assets', 'notes', 'example.txt');
    const manifestPath = path.join(destDir, 'alpha-skill', '.codex-sync-manifest.json');

    assert.ok(fs.existsSync(skillPath), 'alpha SKILL.md should exist');
    assert.ok(fs.existsSync(openaiPath), 'alpha openai.yaml should exist');
    assert.ok(fs.existsSync(referencePath), 'reference bundle should sync');
    assert.ok(fs.existsSync(scriptPath), 'script bundle should sync');
    assert.ok(fs.existsSync(assetPath), 'asset bundle should sync');
    assert.ok(fs.existsSync(manifestPath), 'managed manifest should exist');
    assert.strictEqual(readUtf8(skillPath), t1.content, 'SKILL.md should match canonical template exactly');
    assert.strictEqual(readUtf8(referencePath), '# Workflow\n', 'reference content should match source');

    const openai = readUtf8(openaiPath);
    assert.ok(openai.includes('display_name: "Alpha Skill"'), 'openai.yaml should include deterministic display_name');
    assert.ok(openai.includes('short_description: "'), 'openai.yaml should include short_description');
    assert.ok(openai.includes('$alpha-skill'), 'openai.yaml default_prompt should include explicit $skill reference');
  });

  await runCase('Check mode fails on drift in managed bundle files', async () => {
    const root = mkTmpDir('codex-skill-sync-check-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');

    const template = createTemplate(sourceDir, 1, 'drift-skill', 'Detect drift in check mode.');
    createBundle(sourceDir, template.stem, 'references', {
      'claims.md': '# Claims\n'
    });

    const syncResult = runNode(['--source-dir', sourceDir, '--dest', destDir]);
    assert.strictEqual(syncResult.status, 0, `initial sync failed: ${syncResult.stderr || syncResult.stdout}`);

    writeFile(path.join(destDir, 'drift-skill', 'references', 'claims.md'), '# Tampered\n');
    const checkResult = runNode(['--source-dir', sourceDir, '--dest', destDir, '--check']);
    assert.strictEqual(checkResult.status, 1, 'check mode should fail on drift');
    assert.ok((checkResult.stdout + checkResult.stderr).includes('drift'), 'check output should include drift signal');
  });

  await runCase('Safe upsert preserves unmanaged skills', async () => {
    const root = mkTmpDir('codex-skill-sync-upsert-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');
    createTemplate(sourceDir, 1, 'managed-skill', 'Managed skill from templates.');

    const unmanagedPath = path.join(destDir, 'custom-local-skill', 'SKILL.md');
    writeFile(unmanagedPath, '---\nname: custom-local-skill\ndescription: local\n---\n\nSKILL: Custom\n');

    const result = runNode(['--source-dir', sourceDir, '--dest', destDir]);
    assert.strictEqual(result.status, 0, `sync failed: ${result.stderr || result.stdout}`);
    assert.ok(fs.existsSync(unmanagedPath), 'unmanaged skill should remain');
    assert.strictEqual(readUtf8(unmanagedPath).includes('custom-local-skill'), true, 'unmanaged content should remain intact');
  });

  await runCase('Subset install writes only selected skills', async () => {
    const root = mkTmpDir('codex-skill-sync-subset-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');
    createTemplate(sourceDir, 1, 'subset-one', 'Subset one.');
    createTemplate(sourceDir, 2, 'subset-two', 'Subset two.');

    const result = runNode(['--source-dir', sourceDir, '--dest', destDir, '--skills', 'subset-two']);
    assert.strictEqual(result.status, 0, `subset sync failed: ${result.stderr || result.stdout}`);
    assert.ok(!fs.existsSync(path.join(destDir, 'subset-one')), 'subset-one should not be installed');
    assert.ok(fs.existsSync(path.join(destDir, 'subset-two', 'SKILL.md')), 'subset-two should be installed');
  });

  await runCase('Dry-run does not mutate destination', async () => {
    const root = mkTmpDir('codex-skill-sync-dryrun-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');
    const template = createTemplate(sourceDir, 1, 'dry-run-skill', 'Dry-run should not write files.');
    createBundle(sourceDir, template.stem, 'references', {
      'notes.md': '# Notes\n'
    });

    const result = runNode(['--source-dir', sourceDir, '--dest', destDir, '--dry-run']);
    assert.strictEqual(result.status, 0, `dry-run failed: ${result.stderr || result.stdout}`);
    assert.ok(!fs.existsSync(path.join(destDir, 'dry-run-skill')), 'dry-run should not create skill files');
  });

  await runCase('Sync prunes stale managed bundle files but keeps unmanaged files', async () => {
    const root = mkTmpDir('codex-skill-sync-prune-');
    const sourceDir = path.join(root, 'source');
    const destDir = path.join(root, 'dest');
    const template = createTemplate(sourceDir, 1, 'prune-skill', 'Prune stale managed files.');
    const referencesRoot = createBundle(sourceDir, template.stem, 'references', {
      'old.md': '# Old\n'
    });
    createBundle(sourceDir, template.stem, 'scripts', {
      'helper.sh': '#!/bin/sh\necho helper\n'
    });

    let result = runNode(['--source-dir', sourceDir, '--dest', destDir]);
    assert.strictEqual(result.status, 0, `initial sync failed: ${result.stderr || result.stdout}`);

    writeFile(path.join(destDir, 'prune-skill', 'notes-local.txt'), 'keep me\n');
    fs.rmSync(referencesRoot, { recursive: true, force: true });
    createBundle(sourceDir, template.stem, 'references', {
      'new.md': '# New\n'
    });

    result = runNode(['--source-dir', sourceDir, '--dest', destDir]);
    assert.strictEqual(result.status, 0, `resync failed: ${result.stderr || result.stdout}`);
    assert.ok(!fs.existsSync(path.join(destDir, 'prune-skill', 'references', 'old.md')), 'stale managed reference should be removed');
    assert.ok(fs.existsSync(path.join(destDir, 'prune-skill', 'references', 'new.md')), 'new reference should exist');
    assert.ok(fs.existsSync(path.join(destDir, 'prune-skill', 'notes-local.txt')), 'unmanaged files should remain');
  });

  return {
    passed: errors.length === 0,
    total: 6,
    errors
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ Codex skill sync unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} codex skill sync unit test failure(s)`);
      result.errors.forEach((entry) => {
        console.error(`  - ${entry.name}: ${entry.message}`);
      });
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ Codex skill sync unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
