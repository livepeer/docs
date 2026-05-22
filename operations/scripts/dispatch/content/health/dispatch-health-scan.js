#!/usr/bin/env node
/**
 * @script      dispatch-health-scan
 * @type        dispatch
 * @concern     health
 * @niche       meta
 * @purpose     Scheduled meta dispatcher: bundles all health pipelines in --mode scheduled
 * @description Runs every health pipeline with --mode scheduled. Full audit + repair (if --write) + verify + rolling issue routing.
 * @mode        dispatch
 * @pipeline    P5/P6 (scheduled)
 * @scope       all health pipelines
 * @usage       node operations/scripts/dispatch/content/health/dispatch-health-scan.js [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const PIPELINES = ['dispatch-page-integrity.js','dispatch-wcag.js','dispatch-content-quality.js','dispatch-openapi-reference.js']
  .map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health', f));
function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'scheduled', ...passThroughFlags(args)];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(`\n=== ${path.basename(p)} (--mode scheduled) ===`);
    exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode);
  }
  process.exit(exitCode);
}
main();
