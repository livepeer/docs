#!/usr/bin/env node
/**
 * @script            imports-cli.test
 * @category          validator
 * @type              validator
 * @purpose           qa:import-integrity
 * @scope             tests/unit
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Unit tests for imports.test.js — validates CLI arg parsing, import resolution, and markdown exclusion.
 * @pipeline          manual
 * @dualmode          fixture-driven script execution
 * @usage             node operations/tests/unit/imports-cli.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const subject = require('./imports.test');

let failures = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
  }
}

function createFixtureDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'imports-test-'));
}

function writeFixture(dir, relativePath, content) {
  const absPath = path.join(dir, relativePath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
  return absPath;
}

function cleanupFixtureDir(dir) {
  if (dir) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function runTests() {
  failures = [];
  console.log('🧪 imports CLI unit tests');

  runCase('Parses --dry-run and --scope repo', () => {
    const parsed = subject.parseArgs(['--dry-run', '--scope', 'repo']);
    assert.strictEqual(parsed.dryRun, true);
    assert.strictEqual(parsed.scope, 'repo');
  });

  runCase('Detects broken relative MDX imports', () => {
    const fixtureDir = createFixtureDir();
    try {
      const importedPath = writeFixture(fixtureDir, 'docs/partial.mdx', '# Partial\n');
      const pagePath = writeFixture(
        fixtureDir,
        'docs/page.mdx',
        'import Partial from "./partial"\n\n# Page\n'
      );

      const okResult = subject.runTests({ files: [pagePath], dryRun: true });
      assert.strictEqual(okResult.passed, true);
      assert.strictEqual(okResult.errors.length, 0);

      fs.rmSync(importedPath, { force: true });
      const brokenResult = subject.runTests({ files: [pagePath], dryRun: true });
      assert.strictEqual(brokenResult.passed, false);
      assert.strictEqual(brokenResult.errors.length, 1);
      assert.ok(brokenResult.errors[0].message.includes('Import from "./partial"'));
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  runCase('Skips plain markdown files', () => {
    const fixtureDir = createFixtureDir();
    try {
      const markdownPath = writeFixture(
        fixtureDir,
        'notes/example.md',
        [
          '# Example',
          '',
          '```js',
          'import MissingThing from "./missing-component";',
          '```',
          ''
        ].join('\n')
      );

      const result = subject.runTests({ files: [markdownPath], scope: 'repo', dryRun: true });
      assert.strictEqual(result.passed, true);
      assert.strictEqual(result.errors.length, 0);
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  if (failures.length > 0) {
    console.error('\n❌ imports CLI unit tests failed\n');
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  }

  console.log('\n✅ imports CLI unit tests passed');
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
