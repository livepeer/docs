#!/usr/bin/env node
/**
 * @script      dispatch-health-check
 * @type        dispatch
 * @concern     health
 * @niche       meta
 * @purpose     PR-time meta dispatcher: bundles all health pipelines in --mode pr
 * @description Runs every health pipeline dispatcher with --mode pr in sequence. Aggregates exit codes. Used by dispatch-health.yml on pull_request events.
 * @mode        dispatch
 * @pipeline    P3 (PR)
 * @scope       all health pipelines
 * @usage       node operations/scripts/dispatch/content/health/dispatch-health-check.js [--dry-run|--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03; D-GOV-07
 */

'use strict';

const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const PIPELINES = [
  'dispatch-page-structure.js',
  'dispatch-page-rendering.js',
  'dispatch-page-integrity.js',
  'dispatch-wcag.js',
  'dispatch-content-quality.js',
  'dispatch-openapi-reference.js',
].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health', f));

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'pr', ...passThroughFlags(args).filter((f) => f !== '--write')];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(`\n=== ${path.basename(p)} (--mode pr) ===`);
    const r = runAtomic(p, flags);
    exitCode = Math.max(exitCode, r.exitCode);
  }
  process.exit(exitCode);
}
main();
