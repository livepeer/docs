#!/usr/bin/env node
/**
 * @script      dispatch-maintenance-check
 * @type        dispatch
 * @concern     maintenance
 * @niche       meta
 * @purpose     check meta dispatcher: bundles maintenance pipelines in --mode pr
 * @description PR meta for maintenance concern.
 * @mode        dispatch
 * @pipeline    P3
 * @scope       all maintenance pipelines
 * @usage       node operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'pr';
const PIPELINES = ["dispatch-docs-index.js","dispatch-catalogs.js","dispatch-component-registry.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/maintenance', f));

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
