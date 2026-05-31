#!/usr/bin/env node
/**
 * @script      dispatch-page-structure
 * @type        dispatch
 * @concern     health
 * @niche       page-structure
 * @purpose     Pipeline dispatcher for page structure (headers, anchors, descriptions, endings, MDX safety) — full lifecycle
 * @description Mode-driven orchestrator over the 8 structure validators and their paired remediators. PR mode runs validators in --staged and posts advisory. Scheduled mode runs validators repo-wide, applies safe repairs, escalates residual via rolling-issue. Manual mode runs only remediators with --verify.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/health/dispatch-page-structure.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (full detect-repair-escalate-verify); D-GOV-07 (local CLI)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

// Per-validator scope-flag interfaces — each validator accepts different scope-of-files flags.
// `staged`, `files`, `full` keys map to the validator-specific flag array (or null for "no flag,
// validator scans its default scope"). When `null`, the dispatcher invokes the validator with no
// scope arg and the validator handles scope internally (e.g. via git diff-cached).
const VALIDATORS = [
  { script: 'check-anchor-usage.js',           staged: ['--staged'], files: ['--files'], full: ['--scope', 'v2/**/*.mdx'] },
  { script: 'check-description-quality.js',    staged: ['--staged'], files: ['--files'], full: ['--path', 'v2'] },
  { script: 'check-docs-path-sync.js',         staged: ['--staged'], files: ['--staged'], full: [] },
  { script: 'check-double-headers.js',         staged: ['--staged'], files: ['--files'], full: [] },
  { script: 'check-mdx-safe-markdown.js',      staged: ['--staged'], files: ['--files'], full: [] },
  { script: 'check-page-endings.js',           staged: ['--staged'], files: ['--files'], full: null },
  { script: 'enforce-generated-file-banners.js', staged: ['--check', '--staged'], files: ['--check', '--staged'], full: ['--check'] },
  { script: 'lint-structure.js',               staged: null, files: null, full: ['--full'] }, // uses git internally for staged/changed
].map((v) => ({ ...v, abs: path.join(REPO_ROOT, 'operations/scripts/validators/content/structure', v.script) }));

const REMEDIATORS = {
  mdxSafe: path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js'),
  docsPathSync: path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/sync-docs-paths.js'),
  anchorUsage: path.join(REPO_ROOT, 'operations/scripts/remediators/content/structure/repair-anchor-usage.js'),
  descriptionQuality: path.join(REPO_ROOT, 'operations/scripts/remediators/content/structure/repair-description-quality.js'),
  lintStructure: path.join(REPO_ROOT, 'operations/scripts/remediators/content/structure/repair-lint-structure.js'),
};

function scopeFlags(args) {
  if (args.files) return ['--files', args.files];
  if (args.staged) return ['--staged'];
  if (args.full) return ['--full'];
  return ['--staged'];
}

function scopeKey(args) {
  if (args.files) return 'files';
  if (args.full) return 'full';
  return 'staged'; // default: staged
}

function modePr(args) {
  const key = scopeKey(args);
  let exitCode = 0;
  for (const v of VALIDATORS) {
    if (!fs.existsSync(v.abs)) continue;
    const flagArr = v[key];
    if (flagArr === null) {
      // Validator handles scope internally (e.g. via git diff-cached). Invoke with no scope arg.
      const r = runAtomic(v.abs, []);
      exitCode = Math.max(exitCode, r.exitCode);
    } else {
      // Pass the resolved scope flags. For `--files`, append the actual paths.
      const flags = (key === 'files' && flagArr.includes('--files') && args.files)
        ? [...flagArr, args.files]
        : flagArr;
      const r = runAtomic(v.abs, flags);
      exitCode = Math.max(exitCode, r.exitCode);
    }
  }
  return exitCode;
}

function modeScheduled(args) {
  let exitCode = modePr({ ...args, full: true, staged: false });
  if (args.write) {
    const writeFlags = ['--write', '--verify', ...scopeFlags(args)];
    for (const r of Object.values(REMEDIATORS)) {
      if (!fs.existsSync(r)) continue;
      runAtomic(r, writeFlags);
    }
  }
  return exitCode;
}

function modeManual(args) {
  const writeFlag = args.write ? '--write' : '--dry-run';
  const verifyFlag = args.verify || args.write ? ['--verify'] : [];
  const scope = scopeFlags(args);
  let exitCode = 0;
  for (const r of Object.values(REMEDIATORS)) {
    if (!fs.existsSync(r)) continue;
    const result = runAtomic(r, [writeFlag, ...verifyFlag, ...scope]);
    exitCode = Math.max(exitCode, result.exitCode);
  }
  return exitCode;
}

function main() {
  let args;
  try { args = parsePipelineArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-page-structure.js', 'page structure'); process.exit(0); }
  let code;
  switch (args.mode) {
    case 'pr': code = modePr(args); break;
    case 'scheduled': code = modeScheduled(args); break;
    case 'manual': code = modeManual(args); break;
    default: console.error(`Unknown --mode ${args.mode}`); process.exit(2);
  }
  process.exit(code);
}

main();
