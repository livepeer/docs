#!/usr/bin/env node
/**
 * @script      dispatch-page-rendering
 * @type        dispatch
 * @concern     health
 * @niche       page-rendering
 * @purpose     Pipeline dispatcher for page rendering (Puppeteer sweep + broken-link check) — full lifecycle
 * @description Mode-driven orchestrator over test-v2-pages.js and check-broken-links.js. Render errors typically need human review, so the cycle is: detect (Puppeteer + link check) → repair (broken-link replacements where deterministic) → escalate via rolling-issue.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/health/dispatch-page-rendering.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (detect-repair-escalate-verify)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  testPages: path.join(REPO_ROOT, 'operations/scripts/validators/content/structure/test-v2-pages.js'),
  checkLinks: path.join(REPO_ROOT, 'operations/scripts/validators/content/health/check-broken-links.js'),
  repairLinks: path.join(REPO_ROOT, 'operations/scripts/remediators/content/health/repair-broken-links.js'),
};

function modePr(args) {
  let exitCode = 0;
  if (fs.existsSync(ATOMICS.testPages)) {
    exitCode = Math.max(exitCode, runAtomic(ATOMICS.testPages, []).exitCode);
  }
  if (fs.existsSync(ATOMICS.checkLinks)) {
    exitCode = Math.max(exitCode, runAtomic(ATOMICS.checkLinks, []).exitCode);
  }
  return exitCode;
}

function modeScheduled(args) {
  return modePr(args);
}

function modeManual(args) {
  if (!fs.existsSync(ATOMICS.repairLinks)) {
    console.log('dispatch-page-rendering: no repair atomic available; rendering issues require human review.');
    return 0;
  }
  return runAtomic(ATOMICS.repairLinks, args.write ? ['--write', '--verify'] : ['--dry-run']).exitCode;
}

function main() {
  let args;
  try { args = parsePipelineArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-page-rendering.js', 'page rendering'); process.exit(0); }
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
