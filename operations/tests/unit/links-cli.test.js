#!/usr/bin/env node
/**
 * @script            links-cli.test
 * @category          validator
 * @type              validator
 * @purpose           qa:link-integrity
 * @scope             tests/unit
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Unit tests for links.test.js — validates CLI arg parsing, JSX href detection, and repo-scope markdown handling.
 * @pipeline          manual
 * @dualmode          fixture-driven script execution
 * @usage             node operations/tests/unit/links-cli.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const subject = require('./links.test');

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
  return fs.mkdtempSync(path.join(os.tmpdir(), 'links-cli-'));
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
  console.log('🧪 links CLI unit tests');

  runCase('Parses --dry-run and --scope repo', () => {
    const parsed = subject.parseArgs(['--dry-run', '--scope', 'repo']);
    assert.strictEqual(parsed.dryRun, true);
    assert.strictEqual(parsed.scope, 'repo');
  });

  runCase('Detects JSX href links in MDX files', () => {
    const fixtureDir = createFixtureDir();
    try {
      const targetPath = writeFixture(fixtureDir, 'guide/target.mdx', '# Target\n');
      const pagePath = writeFixture(
        fixtureDir,
        'guide/page.mdx',
        '<Card title="Target" href="./target" />\n'
      );

      const okResult = subject.runTests({ files: [pagePath], dryRun: true });
      assert.strictEqual(okResult.passed, true);
      assert.strictEqual(okResult.errors.length, 0);

      fs.rmSync(targetPath, { force: true });
      const brokenResult = subject.runTests({ files: [pagePath], dryRun: true });
      assert.strictEqual(brokenResult.passed, false);
      assert.strictEqual(brokenResult.errors.length, 1);
      assert.ok(brokenResult.errors[0].message.includes('href="./target"'));
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  runCase('Skips import validation for plain markdown files', () => {
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

  runCase('Skips non-markdown files passed via explicit --files', () => {
    const fixtureDir = createFixtureDir();
    try {
      const jsPath = writeFixture(
        fixtureDir,
        'scripts/example.js',
        'const matcher = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g;\n'
      );

      const result = subject.runTests({ files: [jsPath], scope: 'repo', dryRun: true });
      assert.strictEqual(result.passed, true);
      assert.strictEqual(result.total, 0);
      assert.strictEqual(result.errors.length, 0);
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  if (failures.length > 0) {
    console.error('\n❌ links CLI unit tests failed\n');
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  }

  console.log('\n✅ links CLI unit tests passed');
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
