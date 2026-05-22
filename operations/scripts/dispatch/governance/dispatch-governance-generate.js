#!/usr/bin/env node
/**
 * @script      dispatch-governance-generate
 * @type        dispatch
 * @concern     governance
 * @niche       meta
 * @purpose     generate meta dispatcher: bundles governance pipelines in --mode post-merge
 * @description Self-doc generate meta.
 * @mode        dispatch
 * @pipeline    P4
 * @scope       all governance pipelines
 * @usage       node operations/scripts/dispatch/governance/dispatch-governance-generate.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'post-merge';
const PIPELINES = ["dispatch-action-docs.js","dispatch-script-registry.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/governance', f));

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', MODE, ...passThroughFlags(args)];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(`\n=== ${path.basename(p)} ===`);
    exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode);
  }
  process.exit(exitCode);
}
main();
