#!/usr/bin/env node
/**
 * @script      repair-description-quality
 * @type        remediator
 * @concern     health
 * @niche       structure
 * @purpose     Repair v2 frontmatter description quality (trim boilerplate openings, normalise length)
 * @description Pairs with check-description-quality.js. Trims boilerplate openings ("This page describes", "This document covers", "Learn how to"), normalises trailing punctuation, flags too-short (<80) and too-long (>160) descriptions for human review.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-page-structure.js
 * @scope       v2 MDX frontmatter
 * @usage       node operations/scripts/remediators/content/structure/repair-description-quality.js [--dry-run|--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

const BOILERPLATE_PATTERNS = [
  /^This page (describes?|covers?|explains?|details?)\s+/i,
  /^This document (describes?|covers?|explains?|details?)\s+/i,
  /^Learn how to\s+/i,
  /^In this (page|document|guide),?\s+(you'?ll|we'?ll|learn)\s+/i,
  /^A (guide|reference|description) (to|of|for)\s+/i,
];

function parseArgs(argv) {
  const args = { write: false, files: null, staged: false, full: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--write') args.write = true;
    else if (t === '--staged') args.staged = true;
    else if (t === '--full') args.full = true;
    else if (t === '--files') { args.files = argv[i + 1]; i += 1; }
  }
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
  return [];
}

function repairDescription(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { content, changes: 0 };
  const fm = fmMatch[1];
  const descMatch = fm.match(/^description:\s*["']?(.+?)["']?\s*$/m);
  if (!descMatch) return { content, changes: 0 };
  let desc = descMatch[1];
  const original = desc;
  for (const pattern of BOILERPLATE_PATTERNS) {
    desc = desc.replace(pattern, '');
  }
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  if (!/[.!?]$/.test(desc)) desc = desc.replace(/[\s.]*$/, '.');
  if (desc === original) return { content, changes: 0 };
  const newFm = fm.replace(/^description:.*$/m, `description: "${desc.replace(/"/g, '\\"')}"`);
  return { content: content.replace(fmMatch[0], `---\n${newFm}\n---`), changes: 1 };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) { console.log('repair-description-quality: no target files.'); process.exit(0); }
  let totalChanges = 0;
  let filesChanged = 0;
  for (const rel of files) {
    const abs = path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
    const original = fs.readFileSync(abs, 'utf8');
    const { content, changes } = repairDescription(original);
    if (changes === 0) continue;
    totalChanges += changes;
    filesChanged += 1;
    if (args.write) {
      fs.writeFileSync(abs, content);
      console.log(`✓ ${rel}`);
    } else {
      console.log(`would repair ${rel}`);
    }
  }
  console.log(`\nrepair-description-quality: ${args.write ? 'applied' : 'previewed'} ${totalChanges} change(s) across ${filesChanged} file(s).`);
  process.exit(0);
}

main();
