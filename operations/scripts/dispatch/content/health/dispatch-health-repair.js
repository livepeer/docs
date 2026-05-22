#!/usr/bin/env node
/**
 * @script      dispatch-health-repair
 * @type        dispatch
 * @concern     health
 * @niche       meta
 * @purpose     Manual meta dispatcher: bundles health pipelines in --mode manual (repair only)
 * @description Runs repair-only mode across health pipelines that support remediation. Opens PR with verified fixes.
 * @mode        dispatch
 * @pipeline    manual
 * @scope       all health pipelines with remediators
 * @usage       node operations/scripts/dispatch/content/health/dispatch-health-repair.js [--dry-run|--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const PIPELINES = ['dispatch-page-structure.js','dispatch-page-integrity.js','dispatch-wcag.js','dispatch-content-quality.js']
  .map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health', f));
function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { console.log(`Meta dispatcher: ${path.basename(__filename)}. Use --mode + flags. See pipeline-mode lib for full options.`); process.exit(0); }
  const flags = ['--mode', 'manual', ...passThroughFlags(args)];
  let exitCode = 0;
  for (const p of PIPELINES) {
    console.log(`\n=== ${path.basename(p)} (--mode manual) ===`);
    exitCode = Math.max(exitCode, runAtomic(p, flags).exitCode);
  }
  process.exit(exitCode);
}
main();
