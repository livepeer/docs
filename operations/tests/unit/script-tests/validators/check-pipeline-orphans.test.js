#!/usr/bin/env node
'use strict';
/**
 * @script            check-pipeline-orphans.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/validators/governance/pipelines/check-pipeline-orphans.js
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Unit tests for check-pipeline-orphans.js — confirms it recognises filesystem-discovery metas (no false positives on health/check), emits JSON, and gates on --strict.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/validators/check-pipeline-orphans.test.js
 */

const { runScript, assertExit, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const assert = require('assert');

const SCRIPT = 'operations/scripts/validators/governance/pipelines/check-pipeline-orphans.js';
const s = suite('check-pipeline-orphans');

s.test('--help exits 0', () => {
  assertExit(runScript(SCRIPT, ['--help']), 0);
});

s.test('default mode exits 0 (currently zero orphans repo-wide)', () => {
  assertExit(runScript(SCRIPT), 0);
});

s.test('--strict mode also exits 0 (no orphans)', () => {
  assertExit(runScript(SCRIPT, ['--strict']), 0);
});

s.test('--json emits parseable JSON with orphans array', () => {
  const r = runScript(SCRIPT, ['--json']);
  assertExit(r, 0);
  const parsed = JSON.parse(r.stdout);
  assert.ok(Array.isArray(parsed.orphans), 'orphans is an array');
  assert.ok(typeof parsed.count === 'number', 'count is a number');
});

s.test('discovery-pattern meta (health/check) does not produce false orphans', () => {
  // dispatch-health-check.js uses filesystem discovery; the validator must
  // recognise this and exempt all atomic siblings in that folder from the
  // "referenced by string literal" check.
  const r = runScript(SCRIPT, ['--json']);
  const parsed = JSON.parse(r.stdout);
  const healthOrphans = parsed.orphans.filter((o) => o.folder.includes('content/health'));
  assert.strictEqual(healthOrphans.length, 0, `discovery-aware exemption failed: ${JSON.stringify(healthOrphans)}`);
});

s.done();
