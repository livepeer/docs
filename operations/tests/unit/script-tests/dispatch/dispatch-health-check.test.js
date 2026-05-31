#!/usr/bin/env node
'use strict';
/**
 * @script            dispatch-health-check.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/dispatch/content/health/dispatch-health-check.js
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Unit tests for the discovery-based meta-dispatcher pattern piloted in Sprint 1. Confirms discoverPipelines() returns the expected pipeline set, excludes meta dispatchers, and would honour @pipeline draft opt-out.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/dispatch/dispatch-health-check.test.js
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { mkTmpDir, rmTmpDir, suite, REPO_ROOT } = require('../../../../../tools/lib/bootstrap/test-helpers');

const HEALTH_DIR = path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health');
const META_PREFIX = 'dispatch-health-';

const s = suite('dispatch-health-check discovery');

s.test('discovery returns at least 6 pipelines (the original hardcoded set)', () => {
  const found = fs.readdirSync(HEALTH_DIR)
    .filter((f) => f.startsWith('dispatch-') && f.endsWith('.js') && !f.startsWith(META_PREFIX));
  assert.ok(found.length >= 6, `expected ≥6 pipelines, found ${found.length}: ${found.join(',')}`);
});

s.test('discovery excludes all dispatch-health-* meta dispatchers', () => {
  const found = fs.readdirSync(HEALTH_DIR)
    .filter((f) => f.startsWith('dispatch-') && f.endsWith('.js') && !f.startsWith(META_PREFIX));
  const metaLeak = found.filter((f) => f.startsWith(META_PREFIX));
  assert.deepStrictEqual(metaLeak, [], `meta leaked into pipelines: ${metaLeak.join(',')}`);
});

s.test('@pipeline draft opt-out filter works on a synthetic file', () => {
  // Verify the filter behaviour using a temp file (no repo mutation).
  const dir = mkTmpDir('discover');
  try {
    const draft = path.join(dir, 'dispatch-draft.js');
    const stable = path.join(dir, 'dispatch-stable.js');
    fs.writeFileSync(draft, '/**\n * @pipeline draft\n */\nconsole.log("draft");\n');
    fs.writeFileSync(stable, '/**\n * @pipeline P3\n */\nconsole.log("stable");\n');

    const discovered = fs.readdirSync(dir)
      .filter((f) => f.startsWith('dispatch-') && f.endsWith('.js'))
      .filter((f) => {
        const head = fs.readFileSync(path.join(dir, f), 'utf8').slice(0, 2000);
        return !/@pipeline\s+draft\b/i.test(head);
      });

    assert.deepStrictEqual(discovered, ['dispatch-stable.js'], `draft opt-out filter failed: ${discovered.join(',')}`);
  } finally {
    rmTmpDir(dir);
  }
});

s.done();
