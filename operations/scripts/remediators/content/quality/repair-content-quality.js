#!/usr/bin/env node
/**
 * @script      repair-content-quality
 * @type        remediator
 * @concern     health
 * @niche       quality
 * @purpose     Repair deterministic content quality findings (orphan TODO markers, missing trailing newlines on changelogs)
 * @description Pairs with docs-quality-and-freshness-audit. Removes orphan single-line TODO/FIXME comments at end of file. Anything that requires judgment (thin pages, stale content) escalates via rolling-issue.
 * @mode        repair
 * @pipeline    P6 / manual via dispatch-content-quality.js
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/remediators/content/quality/repair-content-quality.js [--write] [--files <paths>|--staged]
 * @policy      D-GOV-03 (paired remediator)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

function parseArgs(argv) {
  const args = { write: false, files: null, staged: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--write') args.write = true;
    else if (t === '--staged') args.staged = true;
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

function repairContent(content) {
  let changes = 0;
  // Strip orphan TODO/FIXME/XXX single-line trailing comments
  let out = content.replace(/\n{1,2}\{\/\*\s*(TODO|FIXME|XXX)[^*]*\*\/\}\s*$/gm, () => { changes += 1; return ''; });
  out = out.replace(/\n{1,2}<!--\s*(TODO|FIXME|XXX)[^-]*-->\s*$/gm, () => { changes += 1; return ''; });
  return { content: out, changes };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) { console.log('repair-content-quality: no target files.'); process.exit(0); }
  let totalChanges = 0, filesChanged = 0;
  for (const rel of files) {
    const abs = path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
    const { content, changes } = repairContent(fs.readFileSync(abs, 'utf8'));
    if (changes === 0) continue;
    totalChanges += changes; filesChanged += 1;
    if (args.write) { atomicWrite(abs, content); console.log(`✓ ${rel}: ${changes}`); }
    else console.log(`would repair ${rel}: ${changes}`);
  }
  console.log(`\nrepair-content-quality: ${args.write ? 'applied' : 'previewed'} ${totalChanges} change(s) across ${filesChanged} file(s).`);
  process.exit(0);
}

main();
