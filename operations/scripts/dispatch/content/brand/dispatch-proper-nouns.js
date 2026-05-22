#!/usr/bin/env node
/**
 * @script      dispatch-proper-nouns
 * @type        dispatch
 * @concern     brand
 * @niche       proper-nouns
 * @purpose     Pipeline dispatcher for proper-noun capitalisation (Livepeer, AI, Gateway, Orchestrator, etc.)
 * @description Detects lowercase/wrong-case proper nouns and corrects. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const CHECK = path.join(REPO_ROOT, 'operations/scripts/validators/content/grammar/check-proper-nouns.js');
const REPAIR = path.join(REPO_ROOT, 'operations/scripts/remediators/content/style/repair-term-capitalisation.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-proper-nouns.js', 'proper nouns'); process.exit(0); }
  let code = 0;
  if (args.mode === 'pr') {
    if (fs.existsSync(CHECK)) code = runAtomic(CHECK, []).exitCode;
  } else if (args.mode === 'manual' || (args.mode === 'scheduled' && args.write)) {
    if (fs.existsSync(REPAIR)) {
      const flags = args.write ? ['--write', '--verify'] : ['--dry-run'];
      code = runAtomic(REPAIR, flags).exitCode;
    }
  } else if (fs.existsSync(CHECK)) {
    code = runAtomic(CHECK, []).exitCode;
  }
  process.exit(code);
}
main();
