#!/usr/bin/env node
/**
 * @script      dispatch-canonical-sync
 * @type        dispatch
 * @concern     copy
 * @niche       canonical-sync
 * @purpose     Mintlify canonical-sync pipeline (PR check + scheduled drift + manual repair)
 * @description Detects drift between archived Mintlify sources and active consumers; repairs via sync-mintlify-canonical-consumers.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       Mintlify canonical archive + registered consumer files
 * @usage       node operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const CHECK = path.join(REPO_ROOT, 'operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js');
const REPAIR = path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-canonical-sync.js', 'Mintlify canonical sync'); process.exit(0); }
  let code = 0;
  if (args.mode === 'pr' || args.mode === 'scheduled') {
    if (fs.existsSync(CHECK)) code = Math.max(code, runAtomic(CHECK, args.staged ? ['--staged'] : []).exitCode);
  }
  if ((args.mode === 'manual' || args.mode === 'scheduled') && args.write && fs.existsSync(REPAIR)) {
    code = Math.max(code, runAtomic(REPAIR, ['--write']).exitCode);
  } else if (args.mode === 'manual' && fs.existsSync(REPAIR)) {
    runAtomic(REPAIR, ['--check']);
  }
  process.exit(code);
}
main();
