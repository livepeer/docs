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
const fs = require('fs');

const SCRIPT = 'operations/scripts/generators/governance/catalogs/generate-script-registry.js';
const s = suite('generate-script-registry');

s.test('--dry-run exits 0 (report-only default)', () => {
  const r = runScript(SCRIPT, ['--dry-run']);
  assertExit(r, 0, 'default must be report-only');
});

s.test('--dry-run --strict exits 0 (registry is clean — regression guard)', () => {
  // The deriveFromPath() path-pattern enhancement closed all 159 polluted
  // entries (159 → 0). This guard fails the moment anyone reintroduces an
  // off-taxonomy @type/@concern on an active script.
  const r = runScript(SCRIPT, ['--dry-run', '--strict']);
  assertExit(r, 0, 'strict mode must pass while the registry is clean');
});

s.test('REGISTRY_STRICT=1 env behaves identically to --strict', () => {
  const a = runScript(SCRIPT, ['--dry-run', '--strict']);
  const b = runScript(SCRIPT, ['--dry-run'], { env: { REGISTRY_STRICT: '1' } });
  assert.strictEqual(a.exitCode, b.exitCode, 'env and flag must match');
});

s.test('written registry has zero off-taxonomy active entries', () => {
  const { VALID_CONCERNS } = require('../../../../../tools/lib/governance/script-governance-config');
  const validTypes = new Set(['audit', 'generator', 'validator', 'remediator', 'dispatch', 'integrator', 'interface']);
  const validConcerns = new Set(VALID_CONCERNS);
  const reg = JSON.parse(fs.readFileSync('tools/config/registry/script-registry.json', 'utf8'));
  const polluted = reg.filter((e) => e.status === 'active' && (!validTypes.has(e.type) || !validConcerns.has(e.concern)));
  assert.strictEqual(polluted.length, 0, `expected 0 polluted active entries, found ${polluted.length}: ${polluted.slice(0, 5).map((e) => e.path).join(', ')}`);
});

s.done();
