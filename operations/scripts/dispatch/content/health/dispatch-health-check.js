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

const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

// Filesystem-discovered pipeline children. Adding a new dispatch-*.js to this
// folder auto-enrols it on the next run, so the three health metas (check,
// repair, scan) never drift apart. Opt-out: tag a draft pipeline with
// `@pipeline draft` in its JSDoc header and it is excluded until promoted.
const HEALTH_DIR = path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health');
const META_PREFIX = 'dispatch-health-'; // metas — never recurse into themselves

function discoverPipelines() {
  return fs.readdirSync(HEALTH_DIR)
    .filter((f) => f.startsWith('dispatch-') && f.endsWith('.js') && !f.startsWith(META_PREFIX))
    .filter((f) => {
      try {
        const head = fs.readFileSync(path.join(HEALTH_DIR, f), 'utf8').slice(0, 2000);
        return !/@pipeline\s+draft\b/i.test(head);
      } catch (_) {
        return true;
      }
    })
    .sort()
    .map((f) => path.join(HEALTH_DIR, f));
}

const PIPELINES = discoverPipelines();

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
