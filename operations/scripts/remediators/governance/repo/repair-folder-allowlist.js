#!/usr/bin/env node
/**
 * @script      repair-folder-allowlist
 * @type        remediator
 * @concern     governance
 * @niche       repo
 * @purpose     Auto-archive folder drift to x-archive/ (D-GOV-08 layer 4 + 5 repair step)
 * @description Reads each governed folder's .allowlist, identifies drift, archives drift via git mv to {folder}/x-archive/. Supports --dry-run preview and --verify (re-runs check after repair, asserts drift count = 0).
 * @mode        repair
 * @pipeline    P4 (post-merge auto-archive) or P6 (scheduled self-heal) called by dispatch-folder-allowlist.js
 * @scope       repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)
 * @usage       node operations/scripts/remediators/governance/repo/repair-folder-allowlist.js [--dry-run|--write] [--verify] [--folder <path>]
 * @policy      D-GOV-08 (every folder is governed); D2 (no deletions — archive only)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = process.cwd();
const { computeDrift, findGovernedFolders } = require(path.join(REPO_ROOT, 'tools/lib/governance/folder-allowlist'));

function parseArgs(argv) {
  const args = { dryRun: false, write: false, verify: false, folder: null, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--dry-run') { args.dryRun = true; continue; }
    if (token === '--write') { args.write = true; continue; }
    if (token === '--verify') { args.verify = true; continue; }
    if (token === '--folder') {
      args.folder = argv[i + 1];
      i += 1;
    }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function archiveEntry(folderAbs, entry, dryRun) {
  const source = path.join(folderAbs, entry.replace(/\/$/, ''));
  const archiveDir = path.join(folderAbs, 'x-archive');
  const target = path.join(archiveDir, entry.replace(/\/$/, ''));
  if (dryRun) {
    return { source, target, action: 'would-archive' };
  }
  fs.mkdirSync(archiveDir, { recursive: true });
  // Use git mv when the file is tracked so history follows; fallback to fs.renameSync for untracked.
  try {
    execSync(`git mv "${source}" "${target}"`, { cwd: REPO_ROOT, stdio: 'pipe' });
    return { source, target, action: 'git-mv' };
  } catch {
    fs.renameSync(source, target);
    return { source, target, action: 'fs-rename' };
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node operations/scripts/remediators/governance/repo/repair-folder-allowlist.js [flags]');
    console.log('Flags: --dry-run (default) | --write | --verify | --folder <path>');
    process.exit(0);
  }

  const folders = args.folder
    ? [{ rel: args.folder, abs: path.join(REPO_ROOT, args.folder) }]
    : findGovernedFolders(REPO_ROOT);

  let archived = 0;
  const actions = [];
  for (const { rel, abs } of folders) {
    const { drift } = computeDrift(abs);
    for (const entry of drift) {
      const action = archiveEntry(abs, entry, args.dryRun);
      actions.push({ folder: rel, entry, ...action });
      archived += 1;
    }
  }

  if (args.dryRun) {
    console.log(`repair-folder-allowlist (dry-run): would archive ${archived} entr${archived === 1 ? 'y' : 'ies'}.`);
    for (const a of actions) console.log(`  - ${a.folder}: ${a.entry} -> ${path.relative(REPO_ROOT, a.target)}`);
    process.exit(0);
  }

  console.log(`repair-folder-allowlist (write): archived ${archived} entr${archived === 1 ? 'y' : 'ies'}.`);
  for (const a of actions) console.log(`  - ${a.folder}: ${a.entry} -> ${path.relative(REPO_ROOT, a.target)} (${a.action})`);

  if (args.verify) {
    // Re-run the audit to assert drift is now 0.
    let residual = 0;
    for (const { abs } of folders) {
      const { drift } = computeDrift(abs);
      residual += drift.length;
    }
    if (residual > 0) {
      console.error(`repair-folder-allowlist VERIFY FAILED: ${residual} residual drift entries after repair.`);
      process.exit(1);
    }
    console.log(`repair-folder-allowlist verify: 0 residual drift entries.`);
  }

  process.exit(0);
}

main();
