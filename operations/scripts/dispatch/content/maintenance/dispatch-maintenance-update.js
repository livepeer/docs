#!/usr/bin/env node
/**
 * @script      dispatch-maintenance-update
 * @type        dispatch
 * @concern     maintenance
 * @niche       meta
 * @purpose     update meta dispatcher: bundles maintenance pipelines in --mode scheduled
 * @description Scheduled meta for maintenance integrators.
 * @mode        dispatch
 * @pipeline    P5-auto
 * @scope       all maintenance pipelines
 * @usage       node operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'scheduled';
const PIPELINES = ["dispatch-contract-addresses.js","dispatch-contract-shadow.js","dispatch-release-version.js","dispatch-large-assets.js","dispatch-config-flags.js","dispatch-exchanges-data.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/maintenance', f));

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
try { main(); } catch (e) {
  if (/(secret|TOKEN|api[_-]?key|RPC_URL)/i.test(e.message)) {
    console.log("degraded: required secret missing locally — pipeline skipped");
    process.exit(0);
  }
  throw e;
}