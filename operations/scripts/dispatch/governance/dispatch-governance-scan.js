#!/usr/bin/env node
/**
 * @script      dispatch-governance-scan
 * @type        dispatch
 * @concern     governance
 * @niche       meta
 * @purpose     scan meta dispatcher: bundles governance pipelines in --mode scheduled
 * @description Scheduled meta for governance scans.
 * @mode        dispatch
 * @pipeline    P5/P6
 * @scope       all governance pipelines
 * @usage       node operations/scripts/dispatch/governance/dispatch-governance-scan.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'scheduled';
const PIPELINES = ["dispatch-folder-allowlist.js","dispatch-governance-map.js","dispatch-workspace-retention.js","dispatch-pipelines.js","dispatch-script-inventory.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/governance', f));

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
