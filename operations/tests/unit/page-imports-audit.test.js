#!/usr/bin/env node
/**
 * @script            page-imports-audit.test
 * @category          validator
 * @type              validator
 * @purpose           qa:import-integrity
 * @scope             tests/unit, operations/scripts/audits/content/health
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Tests page-imports-audit.js — validates forbidden React imports, missing JSON imports, and output-dir parsing.
 * @pipeline          manual
 * @usage             node operations/tests/unit/page-imports-audit.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const subject = require('../../scripts/audits/content/health/page-imports-audit');

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
  return fs.mkdtempSync(path.join(os.tmpdir(), 'page-imports-audit-'));
}

function writeFixture(rootDir, relativePath, content) {
  const absPath = path.join(rootDir, relativePath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
  return absPath;
}

function cleanupFixtureDir(rootDir) {
  fs.rmSync(rootDir, { recursive: true, force: true });
}

function runTests() {
  failures = [];
  console.log('🧪 page-imports-audit unit tests');

  runCase('parseArgs maps output-dir to report paths', () => {
    const parsed = subject.parseArgs(['--output-dir', '/tmp/page-imports-audit-test']);
    assert.strictEqual(parsed.outputDir, '/tmp/page-imports-audit-test');
    assert.strictEqual(parsed.report, '/tmp/page-imports-audit-test/page-imports-audit.md');
    assert.strictEqual(parsed.reportJson, '/tmp/page-imports-audit-test/page-imports-audit.json');
  });

  runCase('flags page-reachable React imports as forbidden', () => {
    const fixtureDir = createFixtureDir();
    try {
      const page = writeFixture(
        fixtureDir,
        'docs/page.mdx',
        ['import Component from "./Component"', '', '# Page', '', '<Component />', ''].join('\n')
      );
      writeFixture(
        fixtureDir,
        'docs/Component.jsx',
        ['import React from "react";', '', 'export default function Component() {', '  return <div />;', '}', ''].join('\n')
      );

      const result = subject.runAudit({
        parsedArgs: subject.parseArgs(['--files', page]),
        skipWriteReports: true
      });

      assert.strictEqual(result.findings.length, 1);
      assert.strictEqual(result.findings[0].findingType, 'forbidden-import');
      assert.strictEqual(result.findings[0].autoFixable, true);
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  runCase('flags missing JSON imports in page-reachable graph', () => {
    const fixtureDir = createFixtureDir();
    try {
      const page = writeFixture(
        fixtureDir,
        'docs/page.mdx',
        ['import data from "./missing.json"', '', '# Page', '', '<div>{String(data)}</div>', ''].join('\n')
      );

      const result = subject.runAudit({
        parsedArgs: subject.parseArgs(['--files', page]),
        skipWriteReports: true
      });

      assert.strictEqual(result.findings.length, 1);
      assert.strictEqual(result.findings[0].findingType, 'missing-import');
      assert(result.findings[0].resolvedTarget.endsWith('docs/missing.json'));
    } finally {
      cleanupFixtureDir(fixtureDir);
    }
  });

  if (failures.length > 0) {
    console.error('\n❌ page-imports-audit unit tests failed\n');
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  }

  console.log('\n✅ page-imports-audit unit tests passed');
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
