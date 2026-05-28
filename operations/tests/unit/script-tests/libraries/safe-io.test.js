#!/usr/bin/env node
'use strict';
/**
 * @script            safe-io.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/lib/bootstrap/safe-io.js
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Unit tests for tools/lib/bootstrap/safe-io.js — atomicWrite roundtrip, atomic-failure cleanup, idempotent signal-handler registration.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/libraries/safe-io.test.js
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { mkTmpDir, rmTmpDir, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const { atomicWrite, registerCleanup, installSignalHandlers } = require('../../../../../tools/lib/bootstrap/safe-io');

const s = suite('safe-io');

s.test('atomicWrite writes content and roundtrips', () => {
  const dir = mkTmpDir('rt');
  try {
    const target = path.join(dir, 'roundtrip.txt');
    atomicWrite(target, 'hello world');
    assert.strictEqual(fs.readFileSync(target, 'utf8'), 'hello world');
  } finally {
    rmTmpDir(dir);
  }
});

s.test('atomicWrite leaves no .tmp file on success', () => {
  const dir = mkTmpDir('notmp');
  try {
    const target = path.join(dir, 'out.txt');
    atomicWrite(target, 'final');
    const leftovers = fs.readdirSync(dir).filter((f) => f.endsWith('.tmp'));
    assert.deepStrictEqual(leftovers, [], `unexpected tmp files: ${leftovers.join(',')}`);
  } finally {
    rmTmpDir(dir);
  }
});

s.test('atomicWrite cleans up its .tmp file on write failure', () => {
  const dir = mkTmpDir('fail');
  try {
    // Force failure: pass a directory as the content (Buffer.from rejects, throws on write).
    const target = path.join(dir, 'should-not-exist.txt');
    assert.throws(() => atomicWrite(target, { not: 'a buffer or string' }));
    // No partial file, no leftover .tmp
    const leftovers = fs.readdirSync(dir);
    assert.deepStrictEqual(leftovers, [], `unexpected files after failed write: ${leftovers.join(',')}`);
  } finally {
    rmTmpDir(dir);
  }
});

s.test('atomicWrite overwrites existing file', () => {
  const dir = mkTmpDir('over');
  try {
    const target = path.join(dir, 'over.txt');
    fs.writeFileSync(target, 'old');
    atomicWrite(target, 'new');
    assert.strictEqual(fs.readFileSync(target, 'utf8'), 'new');
  } finally {
    rmTmpDir(dir);
  }
});

s.test('registerCleanup type-checks its argument', () => {
  assert.throws(() => registerCleanup('not a function'), TypeError);
});

s.test('installSignalHandlers is idempotent', () => {
  // Two consecutive calls must not throw and must not duplicate handlers.
  const before = process.listenerCount('SIGTERM');
  installSignalHandlers();
  installSignalHandlers();
  const after = process.listenerCount('SIGTERM');
  // The first call may add a handler; the second must not.
  assert.ok(after - before <= 1, `SIGTERM listener count grew by ${after - before} on double-install`);
});

s.done();
