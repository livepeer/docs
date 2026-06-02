#!/usr/bin/env node
'use strict';
/**
 * @script            remediate-us-spelling.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/remediators/content/style/remediate-us-spelling.js
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Guards the dry-run data-safety contract flagged by the Principal Engineer audit (M7): a default (dry-run) remediator invocation must never mutate files on disk. Snapshots a real v2 file's bytes before/after and asserts identity.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/remediators/remediate-us-spelling.test.js
 */

const fs = require('fs');
const crypto = require('crypto');
const { runScript, assertExit, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');

const SCRIPT = 'operations/scripts/remediators/content/style/remediate-us-spelling.js';
const SAMPLE = 'v2/index.mdx';
const s = suite('remediate-us-spelling');

function hash(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

s.test('--help exits 0', () => {
  assertExit(runScript(SCRIPT, ['--help']), 0);
});

s.test('dry-run is the default mode (no --write required)', () => {
  // The script prints its mode banner; default must be a non-writing run.
  const r = runScript(SCRIPT, ['--files', SAMPLE]);
  assert_okExit(r);
});

s.test('default (dry-run) run does not mutate the targeted file on disk', () => {
  const before = hash(SAMPLE);
  const r = runScript(SCRIPT, ['--files', SAMPLE]);
  assert_okExit(r);
  const after = hash(SAMPLE);
  if (before !== after) {
    throw new Error(`dry-run mutated ${SAMPLE} — data-safety contract (M7) violated`);
  }
});

// Local helper: remediators may exit 0 (clean) or 2 (would-change findings) in
// dry-run; both are non-error. Only a crash/!=0/2 is a failure here.
function assert_okExit(result) {
  if (result.exitCode !== 0 && result.exitCode !== 2) {
    throw new Error(`unexpected exit ${result.exitCode}\n${result.stderr}`);
  }
}

s.done();
