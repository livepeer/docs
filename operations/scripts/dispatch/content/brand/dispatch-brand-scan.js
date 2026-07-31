#!/usr/bin/env node
/**
 * @script      dispatch-brand-scan
 * @type        dispatch
 * @concern     brand
 * @niche       meta
 * @purpose     Scheduled meta dispatcher: brand pipelines in --mode scheduled
 * @description Full audit + repair (--write) + verify + rolling-issue.
 * @mode        dispatch
 * @pipeline    P5/P6
 * @scope       brand pipelines
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-brand-scan.js [--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const PIPELINES = ['dispatch-style-tokens.js','dispatch-grammar-en-gb.js','dispatch-em-dashes.js','dispatch-spelling.js','dispatch-proper-nouns.js','dispatch-voice-register.js','dispatch-banned-words.js','dispatch-grammar-en-gb.js']
  .map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/brand', f));
function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'scheduled', ...passThroughFlags(args)];
  let exitCode = 0;
  for (const p of PIPELINES) { console.log(`\n=== ${path.basename(p)} ===`); exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode); }
  process.exit(exitCode);
}
main();
