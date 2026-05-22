#!/usr/bin/env node
/**
 * @script      dispatch-brand-repair
 * @type        dispatch
 * @concern     brand
 * @niche       meta
 * @purpose     Manual meta dispatcher: brand pipelines in --mode manual (repair only)
 * @description Repair-only mode with --verify, opens PR with fixes.
 * @mode        dispatch
 * @pipeline    manual
 * @scope       brand pipelines with remediators
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-brand-repair.js [--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const PIPELINES = ['dispatch-em-dashes.js','dispatch-spelling.js','dispatch-proper-nouns.js','dispatch-style-tokens.js','dispatch-grammar-en-gb.js','dispatch-grammar-en-gb.js']
  .map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/brand', f));
function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'manual', ...passThroughFlags(args)];
  let exitCode = 0;
  for (const p of PIPELINES) { console.log(`\n=== ${path.basename(p)} ===`); exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode); }
  process.exit(exitCode);
}
main();
