#!/usr/bin/env node
/**
 * @script      dispatch-page-integrity
 * @type        dispatch
 * @concern     health
 * @niche       page-integrity
 * @purpose     Pipeline dispatcher for page-integrity (links + imports + MDX safety) — full lifecycle
 * @description Mode-driven orchestrator wrapping the existing page-integrity-dispatch.js chain. --mode pr runs audits on staged + previews repairs. --mode scheduled runs full audit + repair --verify + rolling issue for residual. --mode manual runs repairs only. Replaces direct workflow calls to page-integrity-dispatch.js with the canonical pipeline contract.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/health/dispatch-page-integrity.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (detect-repair-escalate-verify); D-GOV-07 (local CLI equivalence)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));

const ATOMICS = {
  linksAudit: path.join(REPO_ROOT, 'operations/scripts/audits/content/health/page-links-audit.js'),
  importsAudit: path.join(REPO_ROOT, 'operations/scripts/audits/content/health/page-imports-audit.js'),
  repairLinks: path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-page-links.js'),
  repairImports: path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-page-imports.js'),
  repairMdx: path.join(REPO_ROOT, 'operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js'),
  existingChain: path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health/page-integrity-dispatch.js'),
};

function scopeFlags(args) {
  const out = [];
  if (args.files) out.push('--files', args.files);
  else if (args.staged) out.push('--staged');
  else if (args.full) out.push('--full');
  return out;
}

function modePr(args) {
  // Detect: run audits in staged scope (default to --staged if no scope specified)
  const scope = scopeFlags(args).length === 0 ? ['--staged'] : scopeFlags(args);
  let exitCode = 0;
  const linksResult = runAtomic(ATOMICS.linksAudit, [...scope]);
  exitCode = Math.max(exitCode, linksResult.exitCode);
  const importsResult = runAtomic(ATOMICS.importsAudit, [...scope]);
  exitCode = Math.max(exitCode, importsResult.exitCode);
  // Repair preview (advisory; do not write on PR by default)
  if (args.write) {
    const linksRepair = runAtomic(ATOMICS.repairLinks, ['--write', '--verify', ...scope]);
    exitCode = Math.max(exitCode, linksRepair.exitCode);
    const importsRepair = runAtomic(ATOMICS.repairImports, ['--write', '--verify', ...scope]);
    exitCode = Math.max(exitCode, importsRepair.exitCode);
  } else {
    runAtomic(ATOMICS.repairLinks, ['--dry-run', ...scope]);
    runAtomic(ATOMICS.repairImports, ['--dry-run', ...scope]);
  }
  return exitCode;
}

function modeScheduled(args) {
  // Delegate to the existing orchestrator which already implements the full Pattern D chain.
  const scope = scopeFlags(args).length === 0 ? ['--full'] : scopeFlags(args);
  const flags = args.write ? ['--strict', ...scope] : ['--no-repair', ...scope];
  return runAtomic(ATOMICS.existingChain, flags).exitCode;
}

function modeManual(args) {
  const writeFlag = args.write ? '--write' : '--dry-run';
  const verifyFlag = args.verify || args.write ? ['--verify'] : [];

  // repair-page-links and repair-page-imports ONLY accept --files (no --staged, no --full).
  // repair-mdx-safe-markdown accepts --staged|--files. When --staged is requested, resolve it
  // to the actual list of staged v2 .mdx files and pass --files to all three.
  let filesScope;
  if (args.files) {
    filesScope = ['--files', args.files];
  } else if (args.staged) {
    try {
      const { execSync } = require('child_process');
      const staged = execSync('git diff --cached --name-only --diff-filter=ACMRT', { encoding: 'utf8' })
        .split('\n')
        .filter((f) => f && /\.mdx$/i.test(f) && f.startsWith('v2/'))
        .join(',');
      filesScope = staged ? ['--files', staged] : null;
    } catch { filesScope = null; }
  } else if (args.full) {
    filesScope = ['--files', 'v2'];
  } else {
    filesScope = null; // no scope — let each atomic decide (or skip)
  }

  // If no scope resolved (e.g. --staged with no staged files), skip remediators cleanly.
  if (!filesScope) {
    console.log('dispatch-page-integrity: no target files in scope (use --files, --staged with staged files, or --full).');
    return 0;
  }

  let exitCode = 0;
  exitCode = Math.max(exitCode, runAtomic(ATOMICS.repairLinks, [writeFlag, ...verifyFlag, ...filesScope]).exitCode);
  exitCode = Math.max(exitCode, runAtomic(ATOMICS.repairImports, [writeFlag, ...verifyFlag, ...filesScope]).exitCode);
  exitCode = Math.max(exitCode, runAtomic(ATOMICS.repairMdx, [writeFlag, ...verifyFlag, ...filesScope]).exitCode);
  return exitCode;
}

function main() {
  let args;
  try { args = parsePipelineArgs(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-page-integrity.js', 'page integrity (links + imports + MDX)'); process.exit(0); }
  for (const [name, p] of Object.entries(ATOMICS)) {
    if (!fs.existsSync(p)) { console.error(`dispatch-page-integrity: missing atomic ${name} at ${p}`); process.exit(2); }
  }
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
