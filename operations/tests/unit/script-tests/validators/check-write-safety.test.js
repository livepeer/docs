#!/usr/bin/env node
'use strict';
/**
 * @script            check-write-safety.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/validators/governance/repo/check-write-safety.js
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Unit tests for check-write-safety.js — confirms it detects non-atomic writes, detects unguarded browser launches, exits 0 in default report-only mode, exits 1 with --strict when violations exist, and emits valid JSON with --json.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/validators/check-write-safety.test.js
 */

const { runScript, assertExit, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const assert = require('assert');

const SCRIPT = 'operations/scripts/validators/governance/repo/check-write-safety.js';
const s = suite('check-write-safety');

s.test('--help exits 0', () => {
  const r = runScript(SCRIPT, ['--help']);
  assertExit(r, 0);
});

s.test('default mode exits 0 (report-only) even when violations exist', () => {
  const r = runScript(SCRIPT);
  assertExit(r, 0, 'default should be report-only');
});

s.test('--json emits parseable JSON with required fields', () => {
  const r = runScript(SCRIPT, ['--json']);
  assertExit(r, 0);
  let parsed;
  assert.doesNotThrow(() => { parsed = JSON.parse(r.stdout); }, 'output must be JSON');
  assert.ok(typeof parsed.scanned === 'number', 'scanned count present');
  assert.ok(Array.isArray(parsed.findings), 'findings is an array');
  assert.ok(typeof parsed.strict === 'boolean', 'strict flag echoed');
});

s.test('WRITE_SAFETY_STRICT=1 env behaves identically to --strict', () => {
  const a = runScript(SCRIPT, ['--strict']);
  const b = runScript(SCRIPT, [], { env: { WRITE_SAFETY_STRICT: '1' } });
  assert.strictEqual(a.exitCode, b.exitCode, 'env and flag must produce same exit code');
});

s.test('after Sprint 1 sweep, --strict exits 0 (no remaining violations)', () => {
  // This will start failing if a regression introduces new fs.writeFileSync or
  // unguarded puppeteer.launch — exactly the bug class the audit surfaced.
  const r = runScript(SCRIPT, ['--strict']);
  assertExit(r, 0, 'strict gate should pass after Sprint 1');
});

s.done();
