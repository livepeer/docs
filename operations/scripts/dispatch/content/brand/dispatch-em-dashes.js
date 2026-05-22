#!/usr/bin/env node
/**
 * @script      dispatch-em-dashes
 * @type        dispatch
 * @concern     brand
 * @niche       em-dashes
 * @purpose     Pipeline dispatcher for em-dash detection and removal in v2 docs
 * @description Detects em-dashes in v2 MDX and replaces with sentence-appropriate punctuation. PR: detect + advisory. Scheduled: scan + repair + verify + rolling-issue. Manual: repair-only with --verify.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-em-dashes.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const REMEDIATOR = path.join(REPO_ROOT, 'operations/scripts/remediators/content/style/remediate-em-dashes.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-em-dashes.js', 'em-dashes'); process.exit(0); }
  if (!fs.existsSync(REMEDIATOR)) { console.error(`Missing atomic: ${REMEDIATOR}`); process.exit(2); }
  const flags = args.write && args.mode !== 'pr' ? ['--write', '--verify'] : ['--dry-run'];
  if (args.files) flags.push('--files', args.files);
  else if (args.staged) flags.push('--staged');
  else if (args.full) flags.push('--full');
  process.exit(runAtomic(REMEDIATOR, flags).exitCode);
}
main();
