#!/usr/bin/env node
/**
 * @script      dispatch-pipelines
 * @type        dispatch
 * @concern     governance
 * @niche       pipelines
 * @purpose     Pipeline dispatcher for pipelines (full lifecycle: detect → repair → verify → escalate)
 * @description Weekly governance repair orchestrator wrapper.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       cross-concern governance state
 * @usage       node operations/scripts/dispatch/governance/dispatch-pipelines.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
    detect: [
      'operations/scripts/dispatch/governance/pipelines/governance-pipeline.js'
    ]
  };

function scopeFlags(args) {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--staged'];
  if (args.full) return ['--full'];
  return [];
}

function runIfExists(p, flags) {
  if (!fs.existsSync(path.join(REPO_ROOT, p))) return 0;
  return runAtomic(path.join(REPO_ROOT, p), flags).exitCode;
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-pipelines.js', 'pipelines'); process.exit(0); }
  const scope = scopeFlags(args);
  let code = 0;
  // Detect — the underlying governance-pipeline.js requires either an explicit scope (--staged/--files/--full)
  // OR --report-only to allow full-repo audit (--dry-run requires bounded scope and is mutually
  // exclusive with --report-only). Detect step is read-only by definition, so --report-only fits.
  const detectFlags = scope.length === 0 ? ['--report-only'] : [...scope, '--dry-run'];
  for (const p of (ATOMICS.detect || [])) {
    code = Math.max(code, runIfExists(p, detectFlags));
  }
  // Repair (only in scheduled+write or manual)
  if ((args.mode === 'scheduled' && args.write) || args.mode === 'manual') {
    // Repair mode REQUIRES bounded scope (--staged or --files). If neither provided, default to --staged.
    const repairScope = scope.length === 0 ? ['--staged'] : scope;
    const repairFlags = args.write ? ['--write', '--verify', ...repairScope] : ['--dry-run', ...repairScope];
    for (const p of (ATOMICS.repair || [])) {
      code = Math.max(code, runIfExists(p, repairFlags));
    }
  } else if (args.mode === 'pr' && (ATOMICS.repair || []).length > 0) {
    // PR mode: dry-run preview of repairs (advisory)
    for (const p of (ATOMICS.repair || [])) {
      runIfExists(p, ['--dry-run', ...scope]);
    }
  }
  // Generate (for post-merge concerns)
  if (args.mode === 'post-merge' || (args.mode === 'scheduled' && (ATOMICS.generate || []).length > 0)) {
    for (const p of (ATOMICS.generate || [])) {
      code = Math.max(code, runIfExists(p, args.write ? ['--write'] : ['--check']));
    }
  }
  process.exit(code);
}
main();
