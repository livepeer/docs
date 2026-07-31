#!/usr/bin/env node
/**
 * @script      dispatch-component-registry
 * @type        dispatch
 * @concern     maintenance
 * @niche       component-registry
 * @purpose     Pipeline dispatcher for component-registry (full lifecycle: detect → repair → verify → escalate)
 * @description Component registry pipeline (PR drift check + post-merge regen + component validators).
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       snippets/components/, component-registry.json
 * @usage       node operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03; D-GOV-07
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

// Per-detector scope-flag interfaces — each detector accepts different scope flags.
// Keys `staged`, `files`, `full` map to detector-specific arg arrays. `null` means
// "invoke with no scope arg" (detector either has no concept of scope, or resolves
// it internally). When using `--files`, the dispatcher appends the resolved path list.
const DETECTORS = [
  // check-component-health: accepts only --check/--report; no scope concept.
  { script: 'operations/scripts/validators/components/library/check-component-health.js',
    staged: ['--check'], files: ['--check'], full: ['--check'] },
  // check-component-css: accepts --path, --staged.
  { script: 'operations/scripts/validators/components/library/check-component-css.js',
    staged: ['--staged'], files: null, full: [] },
  // check-component-props: accepts --scope=full|changed (custom semantics).
  { script: 'operations/scripts/validators/components/library/check-component-props.js',
    staged: ['--scope=changed'], files: ['--scope=changed'], full: ['--scope=full'] },
  // check-naming-conventions: accepts --path, --files. No --staged support —
  // dispatcher translates --staged to actual file list via git diff-cached.
  { script: 'operations/scripts/validators/components/library/check-naming-conventions.js',
    staged: 'TRANSLATE_STAGED', files: ['--files'], full: [] },
  // audit-ai-discoverability: accepts --staged.
  { script: 'operations/scripts/audits/components/library/audit-ai-discoverability.js',
    staged: ['--staged'], files: null, full: [] },
];

const GENERATORS = [
  'operations/scripts/generators/components/library/generate-component-registry.js'
];

function scopeKey(args) {
  if (args.files) return 'files';
  if (args.full) return 'full';
  return 'staged'; // default
}

function getStagedFiles() {
  try {
    const out = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf8' });
    return out.split('\n').map(s => s.trim()).filter(Boolean);
  } catch { return []; }
}

function resolveFlags(detector, key, args) {
  const flagSpec = detector[key];
  if (flagSpec === null) return null; // skip this detector for this scope
  if (flagSpec === 'TRANSLATE_STAGED') {
    const staged = getStagedFiles();
    if (staged.length === 0) return []; // nothing staged → full scan
    return ['--files', staged.join(',')];
  }
  if (key === 'files' && flagSpec.includes('--files') && args.files) {
    return [...flagSpec, args.files];
  }
  return flagSpec;
}

function runIfExists(p, flags) {
  if (!fs.existsSync(path.join(REPO_ROOT, p))) return 0;
  return runAtomic(path.join(REPO_ROOT, p), flags).exitCode;
}

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-component-registry.js', 'component-registry'); process.exit(0); }
  const key = scopeKey(args);
  let code = 0;
  // Detect
  for (const d of DETECTORS) {
    const flags = resolveFlags(d, key, args);
    if (flags === null) continue;
    code = Math.max(code, runIfExists(d.script, flags));
  }
  // Generate (post-merge or scheduled)
  if (args.mode === 'post-merge' || args.mode === 'scheduled') {
    for (const p of GENERATORS) {
      code = Math.max(code, runIfExists(p, args.write ? ['--write'] : ['--check']));
    }
  }
  process.exit(code);
}
main();
