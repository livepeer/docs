#!/usr/bin/env node
'use strict';
/**
 * @script            pipeline-mode.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/lib/governance/pipeline-mode.js
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Unit tests for parsePipelineArgs/passThroughFlags — the arg contract every one of the 65 dispatch scripts shares. Guards default-mode, dry-run-default, invalid-mode rejection, and flag pass-through.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/libraries/pipeline-mode.test.js
 */

const assert = require('assert');
const { suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const { parsePipelineArgs, passThroughFlags } = require('../../../../../tools/lib/governance/pipeline-mode');

const s = suite('pipeline-mode');

s.test('defaults to mode=pr and dryRun=true when nothing passed', () => {
  const a = parsePipelineArgs([]);
  assert.strictEqual(a.mode, 'pr');
  assert.strictEqual(a.dryRun, true, 'must default to dry-run for safety');
  assert.strictEqual(a.write, false);
});

s.test('--write disables the implicit dry-run default', () => {
  const a = parsePipelineArgs(['--write']);
  assert.strictEqual(a.write, true);
  assert.strictEqual(a.dryRun, false);
});

s.test('parses --mode with its value', () => {
  const a = parsePipelineArgs(['--mode', 'scheduled']);
  assert.strictEqual(a.mode, 'scheduled');
});

s.test('parses --files with its value', () => {
  const a = parsePipelineArgs(['--files', 'v2/foo.mdx']);
  assert.strictEqual(a.files, 'v2/foo.mdx');
});

s.test('throws on an invalid --mode', () => {
  assert.throws(() => parsePipelineArgs(['--mode', 'bogus']), /Invalid --mode/);
});

s.test('accepts all four valid modes', () => {
  for (const m of ['pr', 'scheduled', 'manual', 'post-merge']) {
    assert.strictEqual(parsePipelineArgs(['--mode', m]).mode, m);
  }
});

s.test('--help and --json flags are captured', () => {
  const a = parsePipelineArgs(['--help', '--json']);
  assert.strictEqual(a.help, true);
  assert.strictEqual(a.json, true);
});

s.test('passThroughFlags round-trips the flags it understands', () => {
  const a = parsePipelineArgs(['--write', '--verify', '--full', '--json', '--files', 'x.mdx']);
  const out = passThroughFlags(a);
  assert.ok(out.includes('--write'));
  assert.ok(out.includes('--verify'));
  assert.ok(out.includes('--full'));
  assert.ok(out.includes('--json'));
  assert.ok(out.includes('--files') && out.includes('x.mdx'));
});

s.test('passThroughFlags emits --dry-run for a default (no-arg) parse', () => {
  const out = passThroughFlags(parsePipelineArgs([]));
  assert.ok(out.includes('--dry-run'));
  assert.ok(!out.includes('--write'));
});

s.done();
