#!/usr/bin/env node
/**
 * @script      dispatch-voice-register
 * @type        dispatch
 * @concern     brand
 * @niche       voice-register
 * @purpose     Pipeline dispatcher for voice register: assertive voice, no hedging, per-audience phrasing
 * @description Detects voice violations (hedging, conditionals, weakened value, per-audience prohibited phrases) and applies safe deterministic fixes. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only with --verify.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/brand/dispatch-voice-register.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const ATOMICS = {
  checkRegister: path.join(REPO_ROOT, 'operations/scripts/validators/content/copy/check-voice-register.js'),
  lintPatterns: path.join(REPO_ROOT, 'operations/scripts/validators/content/copy/lint-patterns.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/remediators/content/style/remediate-voice-violations.js'),
};

function scopeFlags(args) {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--staged'];
  if (args.full) return ['--full'];
  return [];
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-voice-register.js', 'voice register'); process.exit(0); }
  let code = 0;
  // Detect (PR or scheduled): both validators
  if (args.mode === 'pr' || args.mode === 'scheduled') {
    if (fs.existsSync(ATOMICS.checkRegister)) code = Math.max(code, runAtomic(ATOMICS.checkRegister, []).exitCode);
    if (fs.existsSync(ATOMICS.lintPatterns)) code = Math.max(code, runAtomic(ATOMICS.lintPatterns, scopeFlags(args)).exitCode);
  }
  // Repair (manual or scheduled+write)
  if (args.mode === 'manual' || (args.mode === 'scheduled' && args.write)) {
    if (fs.existsSync(ATOMICS.repair)) {
      const flags = args.write ? ['--write', '--verify', ...scopeFlags(args)] : ['--dry-run', ...scopeFlags(args)];
      code = Math.max(code, runAtomic(ATOMICS.repair, flags).exitCode);
    }
  }
  process.exit(code);
}
main();
