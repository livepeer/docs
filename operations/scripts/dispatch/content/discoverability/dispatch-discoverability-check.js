#!/usr/bin/env node
/**
 * @script      dispatch-discoverability-check
 * @type        dispatch
 * @concern     discoverability
 * @niche       meta
 * @purpose     check meta dispatcher: bundles discoverability pipelines in --mode pr
 * @description PR meta for discoverability concern.
 * @mode        dispatch
 * @pipeline    P3
 * @scope       all discoverability pipelines
 * @usage       node operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'pr';
const PIPELINES = ["dispatch-ai-sitemap.js","dispatch-companions.js","dispatch-llms-files.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/discoverability', f));

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', MODE, ...passThroughFlags(args).filter((f) => f !== '--write')];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(`\n=== ${path.basename(p)} ===`);
    exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode);
  }
  process.exit(exitCode);
}
main();
