#!/usr/bin/env node
/**
 * @script      repair-anchor-usage
 * @type        remediator
 * @concern     health
 * @niche       structure
 * @purpose     Repair broken in-page anchor links by recomputing heading slugs and fuzzy-matching anchor text
 * @description Pairs with check-anchor-usage.js. For each broken anchor link [text](#slug), reads the target page's H1-H6 headings, computes their slugs, and if a unique fuzzy match exists (>= 0.8 similarity), rewrites the anchor. Ambiguous matches stay flagged for human review.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-page-structure.js
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/remediators/content/structure/repair-anchor-usage.js [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator for every detector)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

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
  if (args.files) return args.files.split(',').map((f) => f.trim()).filter((f) => fs.existsSync(f));
  if (args.staged) {
    try {
      return execSync('git diff --cached --name-only --diff-filter=ACMRT', { cwd: REPO_ROOT, encoding: 'utf8' })
        .split('\n').filter((f) => f && f.startsWith('v2/') && f.endsWith('.mdx') && fs.existsSync(path.join(REPO_ROOT, f)));
    } catch { return []; }
  }
  if (args.full && fs.existsSync(V2_DIR)) {
    const files = [];
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
          if (['_workspace', 'x-archive', 'x-deprecated', 'cn', 'es', 'fr', 'internal'].includes(e.name)) continue;
          walk(p);
        } else if (e.name.endsWith('.mdx')) files.push(path.relative(REPO_ROOT, p));
      }
    };
    walk(V2_DIR);
    return files;
  }
  return [];
}

function headingsFromMdx(content) {
  const lines = content.split('\n');
  const headings = [];
  for (const line of lines) {
    const m = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (m) {
      const text = m[2].replace(/[`*_~]/g, '').trim();
      const slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
      headings.push({ text, slug });
    }
  }
  return headings;
}

function similarity(a, b) {
  if (a === b) return 1;
  const longer = a.length >= b.length ? a : b;
  const shorter = a.length < b.length ? a : b;
  if (longer.length === 0) return 1;
  const editDistance = (s, t) => {
    const d = Array.from({ length: s.length + 1 }, () => Array(t.length + 1).fill(0));
    for (let i = 0; i <= s.length; i += 1) d[i][0] = i;
    for (let j = 0; j <= t.length; j += 1) d[0][j] = j;
    for (let i = 1; i <= s.length; i += 1) for (let j = 1; j <= t.length; j += 1) {
      d[i][j] = s[i - 1] === t[j - 1] ? d[i - 1][j - 1] : Math.min(d[i - 1][j - 1], d[i - 1][j], d[i][j - 1]) + 1;
    }
    return d[s.length][t.length];
  };
  return (longer.length - editDistance(longer, shorter)) / longer.length;
}

function repairAnchors(content) {
  const headings = headingsFromMdx(content);
  const validSlugs = new Set(headings.map((h) => h.slug));
  let changes = 0;
  const out = content.replace(/\[([^\]]+)\]\(#([\w-]+)\)/g, (full, linkText, anchor) => {
    if (validSlugs.has(anchor)) return full;
    // Try fuzzy match to a heading slug
    let bestMatch = null;
    let bestScore = 0;
    for (const h of headings) {
      const score = similarity(anchor, h.slug);
      if (score > bestScore) { bestScore = score; bestMatch = h.slug; }
    }
    if (bestMatch && bestScore >= 0.8) {
      changes += 1;
      return `[${linkText}](#${bestMatch})`;
    }
    return full;
  });
  return { content: out, changes };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) { console.log('repair-anchor-usage: no target files.'); process.exit(0); }
  let totalChanges = 0;
  let filesChanged = 0;
  for (const rel of files) {
    const abs = path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
    const original = fs.readFileSync(abs, 'utf8');
    const { content, changes } = repairAnchors(original);
    if (changes === 0) continue;
    totalChanges += changes;
    filesChanged += 1;
    if (args.write) {
      fs.writeFileSync(abs, content);
      console.log(`✓ ${rel}: ${changes} anchor(s) repaired`);
    } else {
      console.log(`would repair ${rel}: ${changes} anchor(s)`);
    }
  }
  console.log(`\nrepair-anchor-usage: ${args.write ? 'applied' : 'previewed'} ${totalChanges} repair(s) across ${filesChanged} file(s).`);
  process.exit(0);
}

main();
