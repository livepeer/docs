#!/usr/bin/env node
'use strict';
/**
 * @script            generate-script-registry.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/generators/governance/catalogs/generate-script-registry.js
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Unit tests for generate-script-registry.js — confirms the concern/type validator runs in report-only mode by default and gates on --strict / REGISTRY_STRICT=1 (the validator added in Sprint 1).
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/generators/generate-script-registry.test.js
 */

const { runScript, assertExit, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const assert = require('assert');

const SCRIPT = 'operations/scripts/generators/governance/catalogs/generate-script-registry.js';
const s = suite('generate-script-registry');

s.test('--dry-run exits 0 (report-only default)', () => {
  const r = runScript(SCRIPT, ['--dry-run']);
  assertExit(r, 0, 'default must be report-only');
});

s.test('--dry-run --strict exits non-zero if pollution exists', () => {
  // After Sprint 1 sweep, 72 polluted entries remain (45 indirect libraries +
  // 27 legacy-utility-typed dev tools). --strict must surface them as a failure
  // until the backfill thread closes.
  const r = runScript(SCRIPT, ['--dry-run', '--strict']);
  assert.notStrictEqual(r.exitCode, 0, 'strict mode must fail while pollution exists');
});

s.test('REGISTRY_STRICT=1 env behaves identically to --strict', () => {
  const a = runScript(SCRIPT, ['--dry-run', '--strict']);
  const b = runScript(SCRIPT, ['--dry-run'], { env: { REGISTRY_STRICT: '1' } });
  assert.strictEqual(a.exitCode, b.exitCode, 'env and flag must match');
});

s.test('pollution warning lists canonical taxonomy in stderr', () => {
  const r = runScript(SCRIPT, ['--dry-run']);
  assert.ok(r.stderr.includes('Canonical types'), 'must list canonical types in pollution warning');
  assert.ok(r.stderr.includes('Canonical concerns'), 'must list canonical concerns in pollution warning');
});

s.done();
