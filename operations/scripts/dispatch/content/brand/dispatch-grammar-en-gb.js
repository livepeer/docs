#!/usr/bin/env node
/**
 * @script      dispatch-grammar-en-gb
 * @type        dispatch
 * @concern     brand
 * @niche       grammar-en-gb
 * @purpose     Pipeline dispatcher for UK English grammar enforcement on v2 docs (full lifecycle)
 * @description Detects UK English grammar issues (subject-verb agreement, article use, comma placement) and applies safe deterministic fixes via the EN-GB homogeniser. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03; D-GOV-07
 */

'use strict';

const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  check: path.join(REPO_ROOT, 'operations/scripts/validators/content/grammar/check-grammar-en-gb.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js'),
};

// check-grammar-en-gb uses --scope changed / --scope full ; --files path,path
// style-and-language-homogenizer-en-gb uses --scope changed; --file path
function scopeFlags(args, atomic = 'check') {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--scope', 'changed'];
  if (args.full) return ['--scope', 'full'];
  return [];
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-grammar-en-gb.js', 'UK English grammar'); process.exit(0); }
  let code = 0;
  if (args.mode === 'pr' || args.mode === 'scheduled') {
    if (fs.existsSync(ATOMICS.check)) code = Math.max(code, runAtomic(ATOMICS.check, scopeFlags(args)).exitCode);
  }
  if ((args.mode === 'manual' || args.mode === 'scheduled') && fs.existsSync(ATOMICS.repair)) {
    const flags = args.write ? ['--write', ...scopeFlags(args)] : ['--dry-run', ...scopeFlags(args)];
    code = Math.max(code, runAtomic(ATOMICS.repair, flags).exitCode);
  }
  process.exit(code);
}

main();
