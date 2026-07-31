#!/usr/bin/env node
/**
 * @script      dispatch-spelling
 * @type        dispatch
 * @concern     brand
 * @niche       spelling
 * @purpose     Pipeline dispatcher for UK spelling enforcement on v2 docs
 * @description Detects US spellings and corrects to UK forms. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only with --verify.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-spelling.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const REMEDIATOR_UK = path.join(REPO_ROOT, 'operations/scripts/remediators/content/style/remediate-us-spelling.js');
const REMEDIATOR_CSPELL = path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-spelling.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-spelling.js', 'spelling (UK + cspell)'); process.exit(0); }
  const flags = args.write && args.mode !== 'pr' ? ['--write', '--verify'] : ['--dry-run'];
  if (args.files) flags.push('--files', args.files);
  else if (args.staged) flags.push('--staged');
  else if (args.full) flags.push('--full');
  let code = 0;
  if (fs.existsSync(REMEDIATOR_UK)) code = Math.max(code, runAtomic(REMEDIATOR_UK, flags).exitCode);
  if (fs.existsSync(REMEDIATOR_CSPELL)) code = Math.max(code, runAtomic(REMEDIATOR_CSPELL, flags).exitCode);
  process.exit(code);
}
main();
