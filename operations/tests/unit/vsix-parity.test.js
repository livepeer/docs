#!/usr/bin/env node
/**
 * @script            vsix-parity.test
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, tools/editor-extensions
 * @owner             docs
 * @needs             E-C6, R-R29
 * @purpose-statement Unit tests for repo-owned VS Code extension packaging parity — verifies the checked-in VSIX matches governed source files and stale artifacts are detected deterministically.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/vsix-parity.test.js
 */

'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const {
  compareExtensionVsix,
  toVsixEntryPath
} = require('../../../tools/editor-extensions/lib/vsix-parity');

let errors = [];
let warnings = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'operations/tests/unit/vsix-parity.test.js',
      line: 1,
      rule: 'vsix-parity',
      message: `${name}: ${error.message}`
    });
  }
}

function writeFile(targetPath, value) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, value);
}

function createFixtureExtension() {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'vsix-parity-'));
  const extensionDir = path.join(fixtureRoot, 'fixture-extension');
  fs.mkdirSync(extensionDir, { recursive: true });

  writeFile(
    path.join(extensionDir, 'package.json'),
    JSON.stringify(
      {
        name: 'fixture-extension',
        publisher: 'livepeer',
        version: '0.0.1',
        files: ['extension.js', 'lib/**', 'README.md', 'LICENSE']
      },
      null,
      2
    ) + '\n'
  );
  writeFile(path.join(extensionDir, 'extension.js'), "'use strict';\nmodule.exports = {};\n");
  writeFile(path.join(extensionDir, 'lib', 'helper.js'), "module.exports = 'fixture';\n");
  writeFile(path.join(extensionDir, 'README.md'), '# Fixture Extension\n');
  writeFile(path.join(extensionDir, 'LICENSE'), 'MIT\n');

  return { fixtureRoot, extensionDir };
}

function buildFixtureVsix(extensionDir) {
  const packageJson = JSON.parse(fs.readFileSync(path.join(extensionDir, 'package.json'), 'utf8'));
  const stageDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vsix-stage-'));
  const extensionStageDir = path.join(stageDir, 'extension');
  fs.mkdirSync(extensionStageDir, { recursive: true });

  for (const relPath of packageJson.files) {
    const sourcePath = path.join(extensionDir, relPath);
    if (relPath.endsWith('/**')) {
      const rootDir = relPath.slice(0, -3);
      const absRootDir = path.join(extensionDir, rootDir);
      const entries = fs.readdirSync(absRootDir, { withFileTypes: true });
      for (const entry of entries) {
        const sourceEntryPath = path.join(absRootDir, entry.name);
        const relativeEntryPath = path.join(rootDir, entry.name);
        const targetEntryPath = path.join(stageDir, toVsixEntryPath(relativeEntryPath));
        writeFile(targetEntryPath, fs.readFileSync(sourceEntryPath));
      }
      continue;
    }

    const targetPath = path.join(stageDir, toVsixEntryPath(relPath));
    writeFile(targetPath, fs.readFileSync(sourcePath));
  }

  const vsixPath = path.join(extensionDir, 'fixture-extension-0.0.1.vsix');
  const zipResult = spawnSync('zip', ['-qr', vsixPath, '.'], {
    cwd: stageDir,
    encoding: 'utf8'
  });

  if (zipResult.status !== 0) {
    throw new Error(`Failed to build fixture VSIX: ${String(zipResult.stderr || zipResult.stdout).trim()}`);
  }

  fs.rmSync(stageDir, { recursive: true, force: true });
  return vsixPath;
}

function cleanupFixtureRoot(fixtureRoot) {
  fs.rmSync(fixtureRoot, { recursive: true, force: true });
}

function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 VSIX Parity Unit Tests');

  runCase('Live lpd-mdx-preview VSIX matches governed source files', () => {
    const result = compareExtensionVsix(
      path.join(__dirname, '..', '..', '..', 'tools', 'editor-extensions', 'lpd-mdx-preview')
    );
    assert.strictEqual(result.passed, true, 'expected checked-in lpd-mdx-preview VSIX to match source');
  });

  runCase('Fixture VSIX passes parity when packaged entries match source', () => {
    const { fixtureRoot, extensionDir } = createFixtureExtension();
    try {
      buildFixtureVsix(extensionDir);
      const result = compareExtensionVsix(extensionDir);
      assert.strictEqual(result.passed, true);
      assert.deepStrictEqual(result.mismatches, []);
      assert.deepStrictEqual(result.missingEntries, []);
      assert.deepStrictEqual(result.extraEntries, []);
    } finally {
      cleanupFixtureRoot(fixtureRoot);
    }
  });

  runCase('Parity check detects stale packaged content deterministically', () => {
    const { fixtureRoot, extensionDir } = createFixtureExtension();
    try {
      buildFixtureVsix(extensionDir);
      fs.writeFileSync(path.join(extensionDir, 'lib', 'helper.js'), "module.exports = 'changed';\n");
      const result = compareExtensionVsix(extensionDir);
      assert.strictEqual(result.passed, false);
      assert.strictEqual(result.mismatches.length, 1);
      assert.strictEqual(result.mismatches[0].sourceFile, 'lib/helper.js');
    } finally {
      cleanupFixtureRoot(fixtureRoot);
    }
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 3
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.errors.length > 0) {
    console.error('\n❌ VSIX parity unit test failures:\n');
    result.errors.forEach((error) => {
      console.error(`  ${error.file}:${error.line} - ${error.rule}: ${error.message}`);
    });
  } else {
    console.log(`\n✅ VSIX parity unit tests passed (${result.total} cases checked)`);
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { runTests };
