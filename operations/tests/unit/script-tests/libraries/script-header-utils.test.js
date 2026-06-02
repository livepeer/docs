#!/usr/bin/env node
'use strict';
/**
 * @script            script-header-utils.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/lib/governance/script-header-utils.js
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Unit tests for script-header-utils — the JSDoc-header parser every classifier and the catalog generator depend on. A regression here silently mis-classifies scripts across the whole governance pipeline.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/libraries/script-header-utils.test.js
 */

const assert = require('assert');
const { suite } = require('../../../../../tools/lib/bootstrap/test-helpers');
const {
  extractLeadingScriptHeader,
  getTagValue,
  getSectionLines,
  hasFrameworkHeaderTags,
} = require('../../../../../tools/lib/governance/script-header-utils');

const s = suite('script-header-utils');

const STAR_HEADER = `#!/usr/bin/env node
/**
 * @script      demo
 * @type        validator
 * @concern     governance
 * @description One line.
 */
'use strict';
const x = 1;`;

const HASH_HEADER = `#!/bin/bash
# @script   demo-sh
# @type     dispatch
# @concern  governance
echo hi`;

s.test('extractLeadingScriptHeader returns the /** */ block, skipping shebang', () => {
  const h = extractLeadingScriptHeader(STAR_HEADER);
  assert.ok(h.includes('@script'), 'header should contain @script');
  assert.ok(h.includes('*/'), 'header should be the full block comment');
  assert.ok(!h.includes('const x = 1'), 'header must not leak into source');
});

s.test('extractLeadingScriptHeader handles hash-style headers', () => {
  const h = extractLeadingScriptHeader(HASH_HEADER);
  assert.ok(h.includes('@script'), 'hash header should contain @script');
  assert.ok(!h.includes('echo hi'), 'header must not leak into source');
});

s.test('extractLeadingScriptHeader returns empty string when no header present', () => {
  assert.strictEqual(extractLeadingScriptHeader('const x = 1;\n'), '');
});

s.test('extractLeadingScriptHeader skips a leading use-strict before the block', () => {
  const src = `'use strict';\n/**\n * @script s\n */\n`;
  assert.ok(extractLeadingScriptHeader(src).includes('@script'));
});

s.test('getTagValue extracts a tag value and trims it', () => {
  const h = extractLeadingScriptHeader(STAR_HEADER);
  assert.strictEqual(getTagValue(h, '@type'), 'validator');
  assert.strictEqual(getTagValue(h, '@concern'), 'governance');
});

s.test('getTagValue applies @type↔@category alias fallback', () => {
  const legacy = `/**\n * @script s\n * @category remediator\n */`;
  // Asking for @type should fall back to @category.
  assert.strictEqual(getTagValue(legacy, '@type'), 'remediator');
});

s.test('getTagValue returns empty string for a missing tag', () => {
  const h = extractLeadingScriptHeader(STAR_HEADER);
  assert.strictEqual(getTagValue(h, '@nonexistent'), '');
});

s.test('getTagValue works on hash-style headers', () => {
  const h = extractLeadingScriptHeader(HASH_HEADER);
  assert.strictEqual(getTagValue(h, '@type'), 'dispatch');
});

s.test('hasFrameworkHeaderTags detects framework headers', () => {
  assert.strictEqual(hasFrameworkHeaderTags(STAR_HEADER), true);
  assert.strictEqual(hasFrameworkHeaderTags('/**\n * just a comment\n */'), false);
});

s.test('getSectionLines returns continuation lines under a tag', () => {
  const multi = `/**\n * @description first line\n *   continued indented\n * @usage foo\n */`;
  const lines = getSectionLines(multi, '@description');
  assert.ok(lines.some((l) => l.includes('continued indented')), `expected continuation, got ${JSON.stringify(lines)}`);
});

s.done();
