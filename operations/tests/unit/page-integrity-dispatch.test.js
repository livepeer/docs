#!/usr/bin/env node
/**
 * @script            page-integrity-dispatch.test
 * @category          validator
 * @type              validator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             tests/unit, operations/scripts/dispatch/content/health
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Tests page-integrity-dispatch.js — validates repair sequencing across page links and page imports on a temporary v2 fixture.
 * @pipeline          manual
 * @usage             node operations/tests/unit/page-integrity-dispatch.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const subject = require('../../scripts/dispatch/content/health/page-integrity-dispatch');

let failures = [];

function runCase(name, fn) {
  Promise.resolve()
    .then(fn)
    .then(() => console.log(`   ✓ ${name}`))
    .catch((error) => {
      failures.push(`${name}: ${error.message}`);
    });
}

function writeFixture(relativePath, content) {
  const absPath = path.resolve(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
  return absPath;
}

async function runTests() {
  failures = [];
  console.log('🧪 page-integrity-dispatch unit tests');

  const fixtureRoot = `v2/internal/page-integrity-dispatch-fixture-${Date.now()}`;
  const pagePath = `${fixtureRoot}/page.mdx`;
  const targetPath = `${fixtureRoot}/target.mdx`;
  const componentPath = `${fixtureRoot}/Component.jsx`;
  const reportDir = path.resolve(process.cwd(), 'operations', 'reports', 'health', 'page-integrity-test');

  writeFixture(
    pagePath,
    [
      'import Component from "./Component"',
      '',
      '# Fixture Page',
      '',
      '<Card title="Target" href="./target" />',
      '<Component />',
      ''
    ].join('\n')
  );
  writeFixture(targetPath, '# Target\n');
  writeFixture(
    componentPath,
    [
      'import React from "react";',
      '',
      'export default function Component() {',
      '  return <div>ok</div>;',
      '}',
      ''
    ].join('\n')
  );

  try {
    const result = await subject.run({
      parsedArgs: subject.parseArgs([
        '--files', pagePath,
        '--repair',
        '--output-dir', reportDir
      ])
    });

    const pageContent = fs.readFileSync(path.resolve(process.cwd(), pagePath), 'utf8');
    const componentContent = fs.readFileSync(path.resolve(process.cwd(), componentPath), 'utf8');

    assert.strictEqual(result.summary.linkRepair.rewriteCount, 1);
    assert.strictEqual(result.summary.importRepair.appliedCount, 1);
    assert.strictEqual(result.summary.unresolvedFindings.length, 0);
    assert(pageContent.includes(`href="/${fixtureRoot}/target"`));
    assert(!componentContent.includes('import React from "react";'));
  } finally {
    fs.rmSync(path.resolve(process.cwd(), fixtureRoot), { recursive: true, force: true });
    fs.rmSync(reportDir, { recursive: true, force: true });
  }

  if (failures.length > 0) {
    console.error('\n❌ page-integrity-dispatch unit tests failed\n');
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  }

  console.log('\n✅ page-integrity-dispatch unit tests passed');
}

if (require.main === module) {
  runTests().catch((error) => {
    console.error(`\n❌ page-integrity-dispatch unit tests crashed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { runTests };
