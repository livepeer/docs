#!/usr/bin/env node
/**
 * @script      dispatch-copy-update
 * @type        dispatch
 * @concern     copy
 * @niche       meta
 * @purpose     update meta dispatcher: bundles copy pipelines in --mode scheduled
 * @description Scheduled meta for copy integrators.
 * @mode        dispatch
 * @pipeline    P5-auto
 * @scope       all copy pipelines
 * @usage       node operations/scripts/dispatch/content/copy/dispatch-copy-update.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const MODE = 'scheduled';
const PIPELINES = ["dispatch-social-feeds.js","dispatch-changelogs.js","dispatch-translations.js","dispatch-showcase.js"].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/copy', f));

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
  if (/environment variable/.test(e.message)) {
    console.log("degraded: required secret missing locally — pipeline skipped (D-GOV-07 graceful degradation):", e.message);
    process.exit(0);
  }
  throw e;
}