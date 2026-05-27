#!/usr/bin/env node
/**
 * @script      repair-lint-structure
 * @type        remediator
 * @concern     health
 * @niche       structure
 * @purpose     Repair structural lint findings (trailing whitespace, missing trailing newline, doubled blank lines)
 * @description Pairs with lint-structure.js. Applies deterministic whitespace + spacing fixes only. Anything requiring judgment (heading-level reorganisation) stays flagged for human review.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-page-structure.js
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/remediators/content/structure/repair-lint-structure.js [--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

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

function repairStructure(content) {
  let changes = 0;
  // Strip trailing whitespace per line (preserves trailing newline)
  let out = content.replace(/[ \t]+$/gm, () => { changes += 1; return ''; });
  // Collapse 3+ consecutive blank lines to 2
  out = out.replace(/\n{4,}/g, () => { changes += 1; return '\n\n\n'; });
  // Ensure single trailing newline
  if (!out.endsWith('\n')) { out += '\n'; changes += 1; }
  while (out.endsWith('\n\n')) { out = out.slice(0, -1); changes += 1; }
  return { content: out, changes };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) { console.log('repair-lint-structure: no target files.'); process.exit(0); }
  let totalChanges = 0;
  let filesChanged = 0;
  for (const rel of files) {
    const abs = path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
    const original = fs.readFileSync(abs, 'utf8');
    const { content, changes } = repairStructure(original);
    if (changes === 0 || content === original) continue;
    totalChanges += changes;
    filesChanged += 1;
    if (args.write) {
      atomicWrite(abs, content);
      console.log(`✓ ${rel}: ${changes} fix(es)`);
    } else {
      console.log(`would fix ${rel}: ${changes} fix(es)`);
    }
  }
  console.log(`\nrepair-lint-structure: ${args.write ? 'applied' : 'previewed'} ${totalChanges} change(s) across ${filesChanged} file(s).`);
  process.exit(0);
}

main();
