#!/usr/bin/env node
/**
 * @script      dispatch-wcag
 * @type        dispatch
 * @concern     health
 * @niche       wcag
 * @purpose     Pipeline dispatcher for WCAG accessibility (full lifecycle)
 * @description Mode-driven pipeline orchestrator. --mode pr runs check-wcag (validator) and posts advisory. --mode scheduled runs audit-wcag (engine full scan) + repair-wcag (--write --verify) + rolling issue for residual. --mode manual runs repair-wcag with --verify against staged or specified files. Independently runnable locally.
 * @mode        dispatch
 * @pipeline    P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual)
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/health/dispatch-wcag.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (detect-repair-escalate-verify); D-GOV-07 (local CLI equivalence); D-GOV-08 (prevention chain layers 3-5)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp, passThroughFlags } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  check: path.join(REPO_ROOT, 'operations/scripts/validators/content/health/check-wcag.js'),
  audit: path.join(REPO_ROOT, 'operations/scripts/audits/content/health/audit-wcag.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/remediators/content/health/repair-wcag.js'),
};

function modePr(args) {
  const flags = ["--no-fix"];
  if (args.files) flags.push("--files", args.files);
  else if (args.staged) flags.push("--staged");
  return runAtomic(ATOMICS.check, flags).exitCode;
}

function modeScheduled(args) {
  // Detect via scheduled audit (full scan + rolling issue)
  const auditFlags = args.json ? ['--json'] : [];
  const auditResult = runAtomic(ATOMICS.audit, auditFlags);
  if (auditResult.exitCode !== 0) return auditResult.exitCode;
  // Repair if --write specified (otherwise audit-only run)
  if (args.write) {
    const repairFlags = ['--write'];
    if (args.verify) repairFlags.push('--verify');
    if (args.files) repairFlags.push('--files', args.files);
    if (args.full) repairFlags.push('--full');
    const repairResult = runAtomic(ATOMICS.repair, repairFlags);
    return repairResult.exitCode;
  }
  return 0;
}

function modeManual(args) {
  const flags = passThroughFlags(args);
  return runAtomic(ATOMICS.repair, flags).exitCode;
}

function main() {
  let args;
  try { args = parsePipelineArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-wcag.js', 'WCAG accessibility'); process.exit(0); }
  for (const [name, p] of Object.entries(ATOMICS)) {
    if (!fs.existsSync(p)) { console.error(`dispatch-wcag: missing atomic ${name} at ${p}`); process.exit(2); }
  }
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
