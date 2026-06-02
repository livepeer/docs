#!/usr/bin/env node
/**
 * @script      repair-hardcoded-hex
 * @type        remediator
 * @concern     maintenance
 * @niche       library
 * @purpose     Replace hardcoded hex colours in JSX props / inline styles with CSS custom-property tokens — pairs with check-component-props.js rule prop-hardcoded-hex
 * @description Reads style.css (the component-governance colour source of truth) to build a deterministic hex→CSS-var map, then replaces matched hexes only inside JSX attribute values or inline-style objects (never in prose, never inside mermaid contexts). Prefers legacy aliases (--accent, --text) that match existing usage. Skips ambiguous hexes (those defined for 2+ different tokens) and hexes with no governed mapping. Per D-GOV-03 supports --dry-run / --write / --verify.
 * @mode        repair
 * @pipeline    P3 (PR preview), P5/P6 (scheduled write), manual
 * @scope       v2 MDX pages with JSX-embedded hex colour literals
 * @usage       node operations/scripts/remediators/components/library/repair-hardcoded-hex.js [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator for prop-hardcoded-hex)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');
const SKIP_V2_DIRS = new Set(['_workspace', 'x-archive', 'x-deprecated', 'cn', 'es', 'fr']);
const STYLE_CSS_PATH = path.join(REPO_ROOT, 'style.css');

// Files where hex literals are intentional documentation (the brand palette itself).
const HEX_LITERAL_ALLOWLIST = [
  /\/copy-style\/style-guide\.mdx$/,
  /\/canonical\/brand/i,
];

// Map lp-color token names → the legacy alias that existing pages use (var(--accent) etc.).
// When an lp-color token has a legacy alias, we emit the alias; otherwise we emit the lp-color var.
const LP_TO_LEGACY_ALIAS = {
  'lp-color-accent': 'accent',
  'lp-color-accent-strong': 'accent-dark',
  'lp-color-text-primary': 'hero-text',
  'lp-color-text-secondary': 'text',
  'lp-color-text-muted': 'muted-text',
  'lp-color-bg-page': 'background',
  'lp-color-bg-card': 'card-background',
  'lp-color-border-default': 'border',
  'lp-color-arbitrum': 'arbitrum',
};

// Recognised typo: #2d9a67 is a near-miss of the dark accent #2b9a66.
const HEX_TYPO_ALIAS = {
  '#2d9a67': '#2b9a66',
};

function parseArgs(argv) {
  const args = { dryRun: false, write: false, verify: false, files: null, staged: false, full: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--dry-run') args.dryRun = true;
    else if (t === '--write') args.write = true;
    else if (t === '--verify') args.verify = true;
    else if (t === '--staged') args.staged = true;
    else if (t === '--full') args.full = true;
    else if (t === '--files') { args.files = argv[i + 1]; i += 1; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function collectFiles(args) {
  if (args.files) {
    return args.files.split(',').map((f) => f.trim()).filter(Boolean).map((f) => path.isAbsolute(f) ? f : path.join(REPO_ROOT, f)).filter((f) => fs.existsSync(f));
  }
  if (args.staged) {
    try {
      const out = execSync('git diff --cached --name-only --diff-filter=ACMRT', { cwd: REPO_ROOT, encoding: 'utf8' });
      return out.split('\n').map((f) => f.trim()).filter((f) => f && f.startsWith('v2/') && f.endsWith('.mdx')).map((f) => path.join(REPO_ROOT, f)).filter((f) => fs.existsSync(f));
    } catch { return []; }
  }
  if (args.full) {
    const files = [];
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory()) {
          if (SKIP_V2_DIRS.has(e.name)) continue;
          walk(path.join(dir, e.name));
        } else if (e.name.endsWith('.mdx')) {
          files.push(path.join(dir, e.name));
        }
      }
    };
    if (fs.existsSync(V2_DIR)) walk(V2_DIR);
    return files;
  }
  return [];
}

// Parse style.css for `--lp-color-<name>: #hex;` definitions across :root and .dark.
// A hex may be defined for multiple token names (e.g. #ffffff = bg-page AND on-accent);
// such ambiguous hexes are dropped so we never guess the author's intent.
function loadHexToTokenMap() {
  const map = {};
  if (!fs.existsSync(STYLE_CSS_PATH)) return map;
  const content = fs.readFileSync(STYLE_CSS_PATH, 'utf8');
  // hex → Set of token names it's assigned to
  const hexToTokens = {};
  const defRe = /--(lp-color-[a-z-]+):\s*(#[0-9A-Fa-f]{6})\b/g;
  let m;
  while ((m = defRe.exec(content)) !== null) {
    const token = m[1];
    const hex = m[2].toLowerCase();
    (hexToTokens[hex] = hexToTokens[hex] || new Set()).add(token);
  }
  for (const [hex, tokens] of Object.entries(hexToTokens)) {
    if (tokens.size !== 1) continue; // ambiguous — skip
    const token = [...tokens][0];
    const alias = LP_TO_LEGACY_ALIAS[token];
    map[hex] = alias ? `var(--${alias})` : `var(--${token})`;
  }
  // Layer typo aliases on top.
  for (const [typo, canonical] of Object.entries(HEX_TYPO_ALIAS)) {
    const token = map[canonical.toLowerCase()];
    if (token) map[typo.toLowerCase()] = token;
  }
  return map;
}

function isAllowlisted(relPath) {
  return HEX_LITERAL_ALLOWLIST.some((re) => re.test(relPath));
}

function stripContextsForOffsetMap(content) {
  // For deciding "is this hex inside a code/mermaid context?" — we want to know offsets,
  // not zero them out. Build a boolean mask: true = protected.
  const mask = new Uint8Array(content.length);
  const fenceRe = /```[\s\S]*?```/g;
  let m;
  while ((m = fenceRe.exec(content)) !== null) {
    for (let i = m.index; i < m.index + m[0].length; i += 1) mask[i] = 1;
  }
  const jsxMermaidRe = /<Mermaid\b[^>]*?chart=\{`[\s\S]*?`\}\s*\/?\s*>/g;
  while ((m = jsxMermaidRe.exec(content)) !== null) {
    for (let i = m.index; i < m.index + m[0].length; i += 1) mask[i] = 1;
  }
  const jsxCommentRe = /\{\/\*[\s\S]*?\*\/\}/g;
  while ((m = jsxCommentRe.exec(content)) !== null) {
    for (let i = m.index; i < m.index + m[0].length; i += 1) mask[i] = 1;
  }
  // Frontmatter
  const fmRe = /^\s*---\r?\n[\s\S]*?\r?\n---\r?\n?/;
  const fm = content.match(fmRe);
  if (fm) {
    for (let i = 0; i < fm[0].length; i += 1) mask[i] = 1;
  }
  return mask;
}

// JSX-attribute-or-style hex: matches hex preceded by either:
//   ="#hex"  '#hex'  : '#hex'  :"#hex"  : #hex (style key)
// Captures group 1 = the hex literal (including '#').
const HEX_IN_JSX_RE = /([=:])\s*(['"`])(#[0-9A-Fa-f]{6})\b\2/g;

function findReplacements(content, hexMap) {
  const protectedMask = stripContextsForOffsetMap(content);
  const replacements = []; // { startHex, endHex, original, replacement }
  let m;
  // Reset regex
  HEX_IN_JSX_RE.lastIndex = 0;
  while ((m = HEX_IN_JSX_RE.exec(content)) !== null) {
    const hex = m[3];
    const hexLower = hex.toLowerCase();
    const token = hexMap[hexLower];
    if (!token) continue;
    // Compute offset of the hex (after the assignment + quote)
    const hexStart = m.index + m[0].indexOf(hex);
    if (protectedMask[hexStart]) continue;
    // Replace just the hex, preserving the surrounding `="` and `"`.
    replacements.push({
      hexStart,
      hexEnd: hexStart + hex.length,
      original: hex,
      replacement: token,
    });
  }
  // Deduplicate by start offset.
  replacements.sort((a, b) => a.hexStart - b.hexStart);
  return replacements;
}

function applyReplacements(content, replacements) {
  if (replacements.length === 0) return content;
  // Apply in reverse so earlier offsets stay valid.
  let out = content;
  for (let i = replacements.length - 1; i >= 0; i -= 1) {
    const r = replacements[i];
    out = out.slice(0, r.hexStart) + r.replacement + out.slice(r.hexEnd);
  }
  return out;
}

function getLineNumber(content, offset) {
  let line = 1;
  for (let i = 0; i < offset && i < content.length; i += 1) {
    if (content.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const hexMap = loadHexToTokenMap();
  if (Object.keys(hexMap).length === 0) {
    console.error('repair-hardcoded-hex: could not load hex→token map from MermaidColours.jsx');
    process.exit(2);
  }

  const files = collectFiles(args);
  if (files.length === 0) {
    console.log('repair-hardcoded-hex: no target files (use --files, --staged, or --full).');
    process.exit(0);
  }

  let touchedCount = 0;
  let totalReplacements = 0;
  const touched = [];

  for (const abs of files) {
    const rel = path.relative(REPO_ROOT, abs);
    if (isAllowlisted(rel)) continue;
    const original = fs.readFileSync(abs, 'utf8');
    const replacements = findReplacements(original, hexMap);
    if (replacements.length === 0) continue;
    touchedCount += 1;
    totalReplacements += replacements.length;
    const updated = applyReplacements(original, replacements);
    if (args.write) {
      atomicWrite(abs, updated);
      touched.push({ rel, abs, original });
      console.log(`✓ ${rel}: ${replacements.length} hex(es) → CSS var`);
      replacements.slice(0, 5).forEach((r) => {
        const line = getLineNumber(original, r.hexStart);
        console.log(`    L${line}: ${r.original} → ${r.replacement}`);
      });
      if (replacements.length > 5) console.log(`    ... and ${replacements.length - 5} more`);
    } else {
      console.log(`would replace ${replacements.length} hex(es) in ${rel}`);
      replacements.slice(0, 3).forEach((r) => {
        const line = getLineNumber(original, r.hexStart);
        console.log(`    L${line}: ${r.original} → ${r.replacement}`);
      });
    }
  }

  console.log('');
  console.log(`repair-hardcoded-hex: ${args.write ? 'applied' : 'previewed'} ${totalReplacements} replacement(s) across ${touchedCount} file(s) (${Object.keys(hexMap).length} hexes governed).`);

  if (args.write && args.verify && touched.length > 0) {
    let reverted = 0;
    for (const t of touched) {
      const current = fs.readFileSync(t.abs, 'utf8');
      const remaining = findReplacements(current, hexMap);
      if (remaining.length > 0) {
        atomicWrite(t.abs, t.original);
        reverted += 1;
        console.log(`reverted: ${t.rel} (still has governed hexes after repair)`);
      }
    }
    console.log(`verify: reverted ${reverted} regressed file(s).`);
  }

  process.exit(0);
}

main();
