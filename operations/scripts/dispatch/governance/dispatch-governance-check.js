#!/usr/bin/env node
/**
 * @script      dispatch-governance-check
 * @type        dispatch
 * @concern     governance
 * @niche       meta
 * @purpose     check meta dispatcher: bundles governance pipelines in --mode pr
 * @description PR meta for governance concern.
 * @mode        dispatch
 * @pipeline    P3
 * @scope       all governance pipelines
 * @usage       node operations/scripts/dispatch/governance/dispatch-governance-check.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'pr';
const PIPELINES = ["dispatch-folder-allowlist.js","dispatch-governance-map.js","dispatch-workflow-governance.js","dispatch-jsdoc-headers.js","dispatch-new-file-governance.js","dispatch-codex-compliance.js","dispatch-script-locations.js","dispatch-script-inventory.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/governance', f));

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
