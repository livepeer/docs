#!/usr/bin/env node
'use strict';
/**
 * @script            repair-divider-before-related.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/remediators/components/library/repair-divider-before-related.js
 * @owner             docs
 * @needs             D-GOV-03
 * @purpose-statement Locks the dry-run data-safety contract and the depth-2 lookback semantics so a regression cannot silently re-introduce the validator/remediator misalignment that produced 11 false positives on 2026-05-28.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/remediators/repair-divider-before-related.test.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { mkTmpDir, runScript, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');

const SCRIPT = 'operations/scripts/remediators/components/library/repair-divider-before-related.js';
const s = suite('repair-divider-before-related');

function hash(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function writeFixture(dir, name, body) {
  const p = path.join(dir, name);
  fs.writeFileSync(p, body, 'utf8');
  return p;
}

function assertOk(r) {
  if (r.exitCode !== 0) {
    throw new Error(`unexpected exit ${r.exitCode}\n--- stdout ---\n${r.stdout}\n--- stderr ---\n${r.stderr}`);
  }
}

s.test('no scope flag prints "no target files" and exits 0', () => {
  const r = runScript(SCRIPT, []);
  assertOk(r);
  if (!r.stdout.includes('no target files')) {
    throw new Error('expected "no target files" hint; got:\n' + r.stdout);
  }
});

s.test('dry-run on a missing-divider fixture leaves the file byte-identical', () => {
  const tmp = mkTmpDir('div-before-related');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\nIntro.\n\n## Section\n\nBody.\n\n## Related Pages\n\n<Card>link</Card>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--dry-run']);
    assertOk(r);
    const after = hash(f);
    if (before !== after) throw new Error('dry-run mutated the fixture file');
    if (!/would insert\s+\d+\s+divider/.test(r.stdout)) {
      throw new Error('expected dry-run preview of an insertion; got:\n' + r.stdout);
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('--write inserts a single divider, second pass is a no-op (idempotent)', () => {
  const tmp = mkTmpDir('div-before-related-write');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\nIntro.\n\n## Section\n\nBody.\n\n## Related Pages\n\n<Card/>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const r1 = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r1);
    const written = fs.readFileSync(f, 'utf8');
    // The new divider must sit on its own line immediately above the Related heading.
    if (!/<CustomDivider \/>\n\n## Related Pages/.test(written)) {
      throw new Error('expected <CustomDivider /> directly above ## Related Pages; got:\n' + written);
    }
    // Second pass should detect nothing to do.
    const h1 = hash(f);
    const r2 = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r2);
    const h2 = hash(f);
    if (h1 !== h2) throw new Error('remediator is not idempotent — second --write changed the file');
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('depth-2: divider then closing prose then ## Related is accepted (no insert)', () => {
  const tmp = mkTmpDir('div-before-related-depth2');
  try {
    // Real-world pattern (e.g. v2/developers/build/compute/byoc/overview.mdx): the divider
    // sits 2 non-empty lines back from the heading, separated by a closing paragraph.
    const body = '---\ntitle: T\n---\n\nBody.\n\n<CustomDivider />\n\nClosing CTA paragraph.\n\n## Related Pages\n\n<Card/>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    const after = hash(f);
    if (before !== after) throw new Error('remediator wrongly inserted a divider on a depth-2-valid page');
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('JSX-commented divider does not count — remediator inserts an active one', () => {
  const tmp = mkTmpDir('div-before-related-jsxcmt');
  try {
    // The only divider is inside a {/* ... */} JSX comment. Real fix-up case from
    // v2/gateways/guides/operator-considerations/production-gateways.mdx.
    const body = '---\ntitle: T\n---\n\nBody.\n\n{/* TODO\n<CustomDivider />\n*/}\n\n## Related Pages\n\n<Card/>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    const written = fs.readFileSync(f, 'utf8');
    // Active divider must appear outside the JSX comment, directly above the heading.
    if (!/\*\/\}[\s\S]*<CustomDivider \/>\n\n## Related Pages/.test(written)) {
      throw new Error('expected active <CustomDivider /> above the heading (commented one ignored); got:\n' + written);
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.done();
