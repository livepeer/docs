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

const VALIDATORS = [
  'check-anchor-usage.js',
  'check-description-quality.js',
  'check-docs-path-sync.js',
  'check-double-headers.js',
  'check-mdx-safe-markdown.js',
  'check-page-endings.js',
  'enforce-generated-file-banners.js',
  'lint-structure.js',
].map((f) => path.join(REPO_ROOT, 'operations/scripts/validators/content/structure', f));

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

function modePr(args) {
  const scope = scopeFlags(args);
  let exitCode = 0;
  for (const v of VALIDATORS) {
    if (!fs.existsSync(v)) continue;
    const r = runAtomic(v, scope);
    exitCode = Math.max(exitCode, r.exitCode);
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
