#!/usr/bin/env node
'use strict';
/**
 * @script            repair-hardcoded-hex.test
 * @type              validator
 * @concern           governance
 * @niche             unit
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/scripts/remediators/components/library/repair-hardcoded-hex.js
 * @owner             docs
 * @needs             D-GOV-03
 * @purpose-statement Locks the hex→CSS-var mapping contract — typo replacement (#2d9a67 → var(--accent)) lands inside JSX attributes only, mermaid contexts and prose stay untouched, ambiguous and unmapped hexes are skipped. Catches a regression to the wrong CSS-var family (var(--theme-accent), an undefined global) that shipped briefly on 2026-05-27.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/script-tests/remediators/repair-hardcoded-hex.test.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { mkTmpDir, runScript, suite } = require('../../../../../tools/lib/bootstrap/test-helpers');

const SCRIPT = 'operations/scripts/remediators/components/library/repair-hardcoded-hex.js';
const s = suite('repair-hardcoded-hex');

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

s.test('dry-run on a JSX-prop typo (#2d9a67) leaves the file byte-identical', () => {
  const tmp = mkTmpDir('hex-jsx-prop');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\n<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">\n  text\n</StyledSteps>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--dry-run']);
    assertOk(r);
    if (before !== hash(f)) throw new Error('dry-run mutated the fixture');
    if (!/would replace\s+\d+\s+hex/.test(r.stdout)) {
      throw new Error('expected dry-run preview of a replacement; got:\n' + r.stdout);
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('--write replaces #2d9a67 with var(--accent) — NOT var(--theme-accent)', () => {
  const tmp = mkTmpDir('hex-typo-write');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\n<StyledSteps iconColor="#2d9a67">x</StyledSteps>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    const out = fs.readFileSync(f, 'utf8');
    if (!out.includes('iconColor="var(--accent)"')) {
      throw new Error('expected iconColor="var(--accent)"; got:\n' + out);
    }
    // Regression guard for the brief 2026-05-27 wrong-token mapping.
    if (out.includes('var(--theme-accent)')) {
      throw new Error('emitted var(--theme-accent) — an undefined global. Use legacy --accent alias.');
    }
    if (out.includes('#2d9a67')) {
      throw new Error('hex literal still present after --write');
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('hex inside ```mermaid fence is NOT touched (governed under mermaid rule)', () => {
  const tmp = mkTmpDir('hex-mermaid-fence');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\n```mermaid\nclassDef stage fill:#0d0d0d,stroke:#2d9a67,stroke-width:1px;\n```\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    if (before !== hash(f)) {
      throw new Error('remediator touched a hex inside a mermaid fence — mermaid is governed by a separate rule');
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('hex inside <Mermaid chart={`...`}> JSX wrapper is NOT touched either', () => {
  const tmp = mkTmpDir('hex-mermaid-jsx');
  try {
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\n<Mermaid chart={`%%{init: {primaryColor: "#2d9a67"}}%%\nflowchart TD\nA --> B`} />\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    if (before !== hash(f)) {
      throw new Error('remediator touched a hex inside a <Mermaid chart={`...`}> wrapper');
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.test('ambiguous and unmapped hexes are skipped (no rewrite)', () => {
  const tmp = mkTmpDir('hex-ambiguous-unmapped');
  try {
    // #ffffff is ambiguous (lp-color-bg-page AND lp-color-on-accent) — must be skipped.
    // #3EA6F8 (a brand-arbitrum colour) is unambiguous → mapped, so we use an off-palette hex instead.
    const body = '---\ntitle: T\n---\n\n<CustomDivider />\n\n<Box bg="#ffffff" accent="#ababab">x</Box>\n';
    const f = writeFixture(tmp, 'page.mdx', body);
    const before = hash(f);
    const r = runScript(SCRIPT, ['--files', f, '--write']);
    assertOk(r);
    if (before !== hash(f)) {
      throw new Error('remediator touched an ambiguous (#ffffff) or unmapped (#ababab) hex');
    }
  } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
});

s.done();
