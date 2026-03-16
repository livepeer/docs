#!/usr/bin/env node
/**
 * @script            mdx-component-scope.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/scripts/validators/components
 * @owner             docs
 * @needs             R-R10, R-R29
 * @purpose-statement Unit tests for the MDX-facing component scope validator — covers unsafe private helpers, safe inline logic, and imported helper patterns.
 * @pipeline          manual — targeted validator unit coverage
 * @usage             node tests/unit/mdx-component-scope.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const scopeValidator = require('../../tools/scripts/validators/components/check-mdx-component-scope');

const REPO_ROOT = path.resolve(__dirname, '../..');
const FIXTURE_ROOT = path.join(
  REPO_ROOT,
  'snippets',
  'components',
  '_codex-mdx-component-scope-fixtures'
);

let errors = [];
let warnings = [];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function writeFixtureFile(name, content) {
  fs.mkdirSync(FIXTURE_ROOT, { recursive: true });
  const fullPath = path.join(FIXTURE_ROOT, name);
  fs.writeFileSync(fullPath, `${content.trim()}\n`, 'utf8');
  return toPosix(path.relative(REPO_ROOT, fullPath));
}

function removeFixtureRoot() {
  fs.rmSync(FIXTURE_ROOT, { recursive: true, force: true });
}

function buildIndex(relPath) {
  return new Map([
    [
      relPath,
      {
        componentPath: relPath,
        importers: new Set(['v2/home/mission-control.mdx'])
      }
    ]
  ]);
}

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'mdx-component-scope unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/mdx-component-scope.test.js'
    });
  }
}

async function runTests() {
  errors = [];
  warnings = [];
  removeFixtureRoot();

  console.log('🧪 MDX Component Scope Unit Tests');

  await runCase('Unsafe private helper used by exported component fails', async () => {
    const relPath = writeFixtureFile(
      'unsafe-helper.jsx',
      `
      const normalizeIconName = (value) => value || 'terminal';
      export const BlinkingIcon = ({ icon }) => {
        return <span>{normalizeIconName(icon)}</span>;
      };
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, buildIndex(relPath));
    assert.strictEqual(findings.length, 1);
    assert.strictEqual(findings[0].component, 'BlinkingIcon');
    assert.strictEqual(findings[0].helper, 'normalizeIconName');
  });

  await runCase('Inline guard logic passes', async () => {
    const relPath = writeFixtureFile(
      'inline-safe.jsx',
      `
      export const BlinkingIcon = ({ icon }) => {
        const resolvedIcon = typeof icon === 'string' && icon.trim() ? icon : 'terminal';
        return <span>{resolvedIcon}</span>;
      };
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, buildIndex(relPath));
    assert.strictEqual(findings.length, 0);
  });

  await runCase('Imported .js helper passes', async () => {
    writeFixtureFile(
      'scope-helper.js',
      `
      export const normalizeIconName = (value) => value || 'terminal';
      `
    );
    const relPath = writeFixtureFile(
      'imported-helper.jsx',
      `
      import { normalizeIconName } from './scope-helper.js';
      export const BlinkingIcon = ({ icon }) => {
        return <span>{normalizeIconName(icon)}</span>;
      };
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, buildIndex(relPath));
    assert.strictEqual(findings.length, 0);
  });

  await runCase('Trailing export pattern fails correctly', async () => {
    const relPath = writeFixtureFile(
      'trailing-export.jsx',
      `
      const normalizeIconName = (value) => value || 'terminal';
      const BlinkingIcon = ({ icon }) => <span>{normalizeIconName(icon)}</span>;
      export { BlinkingIcon };
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, buildIndex(relPath));
    assert.strictEqual(findings.length, 1);
    assert.strictEqual(findings[0].component, 'BlinkingIcon');
    assert.strictEqual(findings[0].helper, 'normalizeIconName');
  });

  await runCase('Non-MDX-facing component file is ignored', async () => {
    const relPath = writeFixtureFile(
      'not-imported.jsx',
      `
      const normalizeIconName = (value) => value || 'terminal';
      export const BlinkingIcon = ({ icon }) => <span>{normalizeIconName(icon)}</span>;
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, new Map());
    assert.strictEqual(findings.length, 0);
  });

  await runCase('Explicit empty MDX scope does not expand to all routable pages', async () => {
    const importedFiles = scopeValidator.getComponentFilesImportedByMdxFiles([]);
    assert.deepStrictEqual(importedFiles, []);
  });

  await runCase('Component-local variables are not false-flagged', async () => {
    const relPath = writeFixtureFile(
      'component-local.jsx',
      `
      export const BlinkingIcon = ({ icon }) => {
        const normalizeIconName = (value) => value || 'terminal';
        return <span>{normalizeIconName(icon)}</span>;
      };
      `
    );
    const findings = scopeValidator.analyseComponentFile(relPath, buildIndex(relPath));
    assert.strictEqual(findings.length, 0);
  });

  removeFixtureRoot();

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 7
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ MDX component scope unit tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} MDX component scope unit test failure(s)`);
      result.errors.forEach((err) => console.error(`  - ${err.message}`));
      process.exit(1);
    })
    .catch((error) => {
      removeFixtureRoot();
      console.error(`\n❌ MDX component scope unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
