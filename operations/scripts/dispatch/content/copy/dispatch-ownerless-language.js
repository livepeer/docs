#!/usr/bin/env node
/**
 * @script      dispatch-ownerless-language
 * @type        dispatch
 * @concern     copy
 * @niche       ownerless-language
 * @purpose     Pipeline for ownerless-repo language enforcement (no "we", "our", owner-dependent phrasing)
 * @description Detects owner-dependent phrasing in v2 MDX; repairs via repair-ownerless-language with --verify.
 * @mode        dispatch
 * @pipeline    P3 (PR), P5/P6 (scheduled), manual
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify]
 * @policy      D-GOV-03
 */
'use strict';
const fs = require('fs');
const path = require('path');
const REPO_ROOT = process.cwd();
const { parsePipelineArgs, runAtomic, printPipelineHelp } = require(path.join(REPO_ROOT, 'tools/lib/governance/pipeline-mode'));
const REPAIR = path.join(REPO_ROOT, 'operations/scripts/remediators/content/style/repair-ownerless-language.js');

function main() {
  let args; try { args = parsePipelineArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(2); }
  if (args.help) { printPipelineHelp('dispatch-ownerless-language.js', 'ownerless language'); process.exit(0); }
  if (!fs.existsSync(REPAIR)) { console.log('dispatch-ownerless-language: atomic missing'); process.exit(0); }
  // repair-ownerless-language uses --check / --write and --files only (no --staged / --full)
  const flags = args.write && args.mode !== 'pr' ? ['--write'] : ['--check'];
  if (args.files) {
    flags.push('--files', args.files);
  } else if (args.staged) {
    // Translate --staged to list of staged v2 MDX files
    try {
      const { execSync } = require('child_process');
      const staged = execSync('git diff --cached --name-only --diff-filter=ACMRT', { encoding: 'utf8' })
        .split('\n').filter((f) => f.startsWith('v2/') && f.endsWith('.mdx')).join(',');
      if (staged) flags.push('--files', staged);
      else { console.log('dispatch-ownerless-language: no staged v2 MDX files.'); process.exit(0); }
    } catch { /* no staged */ }
  }
  // No --full equivalent — atomic scans all by default when no --files passed
  process.exit(runAtomic(REPAIR, flags).exitCode);
}
main();
