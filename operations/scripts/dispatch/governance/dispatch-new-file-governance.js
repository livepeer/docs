#!/usr/bin/env node
/**
 * @script      dispatch-new-file-governance
 * @type        dispatch
 * @concern     governance
 * @niche       new-file-governance
 * @purpose     Pipeline dispatcher for new-file-governance (full lifecycle: detect → repair → verify → escalate)
 * @description New file metadata enforcement pipeline.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       newly staged files
 * @usage       node operations/scripts/dispatch/governance/dispatch-new-file-governance.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
    detect: [
      'operations/scripts/validators/governance/compliance/check-new-file-governance.js'
    ],
    repair: [
      'operations/scripts/remediators/content/classification/assign-purpose-metadata.js',
      'operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js',
      'operations/scripts/remediators/content/classification/add-pagetype-mechanical.js'
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
  if (args.help) { printPipelineHelp('dispatch-new-file-governance.js', 'new-file-governance'); process.exit(0); }
  const scope = scopeFlags(args);
  let code = 0;
  // Detect
  for (const p of (ATOMICS.detect || [])) {
    code = Math.max(code, runIfExists(p, scope));
  }
  // Repair (only in scheduled+write or manual)
  if ((args.mode === 'scheduled' && args.write) || args.mode === 'manual') {
    const repairFlags = args.write ? ['--write', '--verify', ...scope] : ['--dry-run', ...scope];
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
