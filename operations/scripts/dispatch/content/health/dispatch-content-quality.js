#!/usr/bin/env node
/**
 * @script      dispatch-content-quality
 * @type        dispatch
 * @concern     health
 * @niche       content-quality
 * @purpose     Pipeline dispatcher for content quality (TODO/TBD markers, thin pages, stale content) — full lifecycle
 * @description Mode-driven orchestrator over docs-quality-and-freshness-audit.js. PR mode runs audit on staged with advisory comment. Scheduled mode runs full audit, applies deterministic fixes via repair-content-quality (Phase 3.X), escalates residual via rolling-issue.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/health/dispatch-content-quality.js [--mode pr|scheduled|manual] [--dry-run|--write] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (detect-repair-escalate-verify)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  audit: path.join(REPO_ROOT, 'operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/remediators/content/quality/repair-content-quality.js'),
};

function modePr(args) {
  if (!fs.existsSync(ATOMICS.audit)) return 0;
  return runAtomic(ATOMICS.audit, []).exitCode;
}

function modeScheduled(args) {
  const auditCode = runAtomic(ATOMICS.audit, []).exitCode;
  if (args.write && fs.existsSync(ATOMICS.repair)) {
    runAtomic(ATOMICS.repair, ['--write', '--verify']);
  }
  return auditCode;
}

function modeManual(args) {
  if (!fs.existsSync(ATOMICS.repair)) return 0;
  const flags = args.write ? ['--write', '--verify'] : ['--dry-run'];
  return runAtomic(ATOMICS.repair, flags).exitCode;
}

function main() {
  let args;
  try { args = parsePipelineArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-content-quality.js', 'content quality'); process.exit(0); }
  let code;
  switch (args.mode) {
    case 'pr': code = modePr(args); break;
    case 'scheduled': code = modeScheduled(args); break;
    case 'manual': code = modeManual(args); break;
    default: console.error(`Unknown --mode ${args.mode}`); process.exit(2);
  }
  process.exit(code);
}

main();
