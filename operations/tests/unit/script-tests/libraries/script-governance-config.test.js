#!/usr/bin/env node
'use strict';
/**
 * @script            script-governance-config.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/lib/governance/script-governance-config.js
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Unit tests for the path predicates that decide what counts as a governed script, what is excluded, and what is a hook. These gate discovery for the registry, catalog, and every governance validator.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/libraries/script-governance-config.test.js
 */

const assert = require('assert');
const { suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const {
  normalizeRepoPath,
  shouldExcludeScriptPath,
  isWithinRoots,
  isHookScriptPath,
} = require('../../../../../tools/lib/governance/script-governance-config');

const s = suite('script-governance-config');

s.test('normalizeRepoPath normalises the platform separator to forward slash', () => {
  const path = require('path');
  // Splits on path.sep then joins with '/'. On POSIX (sep='/') forward-slash
  // paths pass through unchanged; the native separator is always normalised.
  assert.strictEqual(normalizeRepoPath(`a${path.sep}b${path.sep}c`), 'a/b/c');
  assert.strictEqual(normalizeRepoPath('a/b/c'), 'a/b/c');
  assert.strictEqual(normalizeRepoPath(''), '', 'empty input coerces to empty string');
});

s.test('shouldExcludeScriptPath excludes node_modules and .git', () => {
  assert.strictEqual(shouldExcludeScriptPath('node_modules/foo/bar.js'), true);
  assert.strictEqual(shouldExcludeScriptPath('tools/node_modules/x.js'), true);
  assert.strictEqual(shouldExcludeScriptPath('.git/hooks/pre-commit'), true);
});

s.test('shouldExcludeScriptPath excludes the operations/scripts/archive prefix', () => {
  assert.strictEqual(shouldExcludeScriptPath('operations/scripts/archive/legacy/old.js'), true);
});

s.test('shouldExcludeScriptPath excludes .bak and .disabled files', () => {
  assert.strictEqual(shouldExcludeScriptPath('operations/scripts/foo.js.bak'), true);
  assert.strictEqual(shouldExcludeScriptPath('operations/scripts/foo.js.disabled'), true);
});

s.test('shouldExcludeScriptPath allows a normal governed script', () => {
  assert.strictEqual(shouldExcludeScriptPath('operations/scripts/validators/governance/repo/check-write-safety.js'), false);
});

s.test('shouldExcludeScriptPath excludes empty paths', () => {
  assert.strictEqual(shouldExcludeScriptPath(''), true);
});

s.test('isWithinRoots matches exact root and nested paths only', () => {
  const roots = ['operations/scripts', 'tools/lib'];
  assert.strictEqual(isWithinRoots('operations/scripts', roots), true);
  assert.strictEqual(isWithinRoots('operations/scripts/foo/bar.js', roots), true);
  assert.strictEqual(isWithinRoots('operations/scriptsfoo.js', roots), false, 'must not prefix-match without /');
  assert.strictEqual(isWithinRoots('docs-guide/index.mdx', roots), false);
});

s.test('isHookScriptPath matches extensionless .githooks entries only', () => {
  assert.strictEqual(isHookScriptPath('.githooks/pre-commit'), true);
  assert.strictEqual(isHookScriptPath('.githooks/install.sh'), false, '.sh has an extension');
  assert.strictEqual(isHookScriptPath('operations/scripts/foo'), false);
});

s.done();
