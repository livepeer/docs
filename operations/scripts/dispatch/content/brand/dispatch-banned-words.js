#!/usr/bin/env node
/**
 * @script      dispatch-banned-words
 * @type        dispatch
 * @concern     brand
 * @niche       banned-words
 * @purpose     Pipeline dispatcher for banned-word and banned-phrase detection
 * @description Reads canonical lists from tools/lib/copy-governance/banned-{words,phrases}.txt via lint-copy.js. PR: detect + advisory. Scheduled: rolling-issue. Banned terms require manual rewrite (no auto-repair) — the rolling-issue model is the response.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5 (scheduled)
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-banned-words.js [--mode pr|scheduled]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const LINT_COPY = path.join(REPO_ROOT, 'operations/scripts/validators/content/copy/lint-copy.js');

function scopeFlags(args) {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--staged'];
  if (args.full) return ['--full'];
  return [];
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-banned-words.js', 'banned words and phrases'); process.exit(0); }
  if (!fs.existsSync(LINT_COPY)) { console.log('dispatch-banned-words: lint-copy.js missing'); process.exit(0); }
  process.exit(runAtomic(LINT_COPY, scopeFlags(args)).exitCode);
}
main();
