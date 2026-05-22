#!/usr/bin/env node
/**
 * @script      dispatch-style-tokens
 * @type        dispatch
 * @concern     brand
 * @niche       style-tokens
 * @purpose     Pipeline dispatcher for component style-token consistency (no hardcoded colours/spacing)
 * @description Detects style tokens not from the brand system. Scheduled: audit + repair (Phase 3.X wire). Manual: repair-only.
 * @mode        dispatch
 * @pipeline    P5/P6 (scheduled), manual
 * @scope       snippets/components/**
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-style-tokens.js [--mode scheduled|manual]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const AUDIT = path.join(REPO_ROOT, 'operations/scripts/audits/components/library/audit-component-styles.js');
const REPAIR = path.join(REPO_ROOT, 'operations/scripts/remediators/components/library/repair-component-styles.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-style-tokens.js', 'style tokens'); process.exit(0); }
  let code = 0;
  if (fs.existsSync(AUDIT)) code = Math.max(code, runAtomic(AUDIT, []).exitCode);
  if (args.write && fs.existsSync(REPAIR)) code = Math.max(code, runAtomic(REPAIR, ['--write', '--verify']).exitCode);
  else if (fs.existsSync(REPAIR)) runAtomic(REPAIR, ['--dry-run']);
  process.exit(code);
}
main();
