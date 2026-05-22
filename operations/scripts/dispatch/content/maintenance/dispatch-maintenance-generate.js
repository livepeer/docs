#!/usr/bin/env node
/**
 * @script      dispatch-maintenance-generate
 * @type        dispatch
 * @concern     maintenance
 * @niche       meta
 * @purpose     generate meta dispatcher: bundles maintenance pipelines in --mode post-merge
 * @description Post-merge meta for maintenance generators.
 * @mode        dispatch
 * @pipeline    P4
 * @scope       all maintenance pipelines
 * @usage       node operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'post-merge';
const PIPELINES = ["dispatch-docs-index.js","dispatch-catalogs.js","dispatch-component-registry.js","dispatch-sdk-clients.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/maintenance', f));

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
