#!/usr/bin/env node
/**
 * @script      dispatch-brand-check
 * @type        dispatch
 * @concern     brand
 * @niche       meta
 * @purpose     PR-time meta dispatcher: bundles all brand pipelines in --mode pr
 * @description Runs every brand pipeline with --mode pr. Aggregates exit codes.
 * @mode        dispatch
 * @pipeline    P3 (PR)
 * @scope       all brand pipelines
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-brand-check.js [--dry-run]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const PIPELINES = ['dispatch-em-dashes.js','dispatch-spelling.js','dispatch-proper-nouns.js','dispatch-voice-register.js','dispatch-banned-words.js','dispatch-grammar-en-gb.js']
  .map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/brand', f));
function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'pr', ...passThroughFlags(args).filter((f) => f !== '--write')];
  let exitCode = 0;
  for (const p of PIPELINES) { console.log(`\n=== ${path.basename(p)} ===`); exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode); }
  process.exit(exitCode);
}
main();
