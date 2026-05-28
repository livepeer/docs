#!/usr/bin/env node
'use strict';
/**
 * @script            run-all-script-tests
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/tests/unit/script-tests
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Walks operations/tests/unit/script-tests/**\/*.test.js and runs each as a child process. Aggregates pass/fail across the whole script-logic unit-test suite — the Sprint 4+ deliverable from the Principal Engineer audit 2026-05-26 (DX W1: zero unit tests for 254 production scripts).
 * @pipeline          P1 (pre-commit subset), P3 (PR — full suite)
 * @usage             node operations/tests/unit/script-tests/run-all.js [--type <name>]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SUITE_ROOT = path.join(REPO_ROOT, 'operations/tests/unit/script-tests');
const FILTER_TYPE = (() => {
  const i = process.argv.indexOf('--type');
  return i >= 0 ? process.argv[i + 1] : null;
})();

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_fixtures') continue;
      walk(full, out);
    } else if (entry.isFile() && entry.name.endsWith('.test.js')) {
      out.push(full);
    }
  }
  return out;
}

function main() {
  const tests = walk(SUITE_ROOT)
    .filter((p) => !FILTER_TYPE || p.includes(`/script-tests/${FILTER_TYPE}/`))
    .sort();

  if (tests.length === 0) {
    console.log('No script-tests found.');
    process.exit(0);
  }

  console.log(`Running ${tests.length} script-test file(s)...\n`);
  let pass = 0;
  let fail = 0;
  const failures = [];
  const started = Date.now();

  for (const t of tests) {
    const rel = path.relative(REPO_ROOT, t);
    process.stdout.write(`▶ ${rel}\n`);
    const r = spawnSync('node', [t], {
      cwd: REPO_ROOT,
      env: { ...process.env, NODE_PATH: path.join(REPO_ROOT, 'tools/node_modules') },
      stdio: 'inherit',
      timeout: 60000,
    });
    if (r.status === 0) pass++;
    else {
      fail++;
      failures.push(rel);
    }
  }

  const dur = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`\n──────────────────────────`);
  console.log(`${pass} passed, ${fail} failed in ${dur}s`);
  if (fail > 0) {
    console.log(`\nFailed files:`);
    failures.forEach((f) => console.log(`  ✗ ${f}`));
    process.exit(1);
  }
  process.exit(0);
}

main();
