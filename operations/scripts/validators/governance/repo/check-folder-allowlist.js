#!/usr/bin/env node
/**
 * @script      check-folder-allowlist
 * @type        validator
 * @concern     governance
 * @niche       repo
 * @purpose     Validate every governed folder against its declared .allowlist (D-GOV-08 layer 3)
 * @description PR-time validator. For each folder containing a .allowlist file, lists actual entries and fails if any entry is not on the allowlist. Used as the layer-3 gate in the folder-allowlist prevention chain.
 * @mode        check
 * @pipeline    P3 (PR validator) called by dispatch-folder-allowlist.js
 * @scope       repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)
 * @usage       node operations/scripts/validators/governance/repo/check-folder-allowlist.js [--folder <path>] [--json]
 * @policy      D-GOV-08 (every folder is governed; prevention at earliest layer)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const { computeDrift, findGovernedFolders } = require(path.join(REPO_ROOT, 'tools/lib/governance/folder-allowlist'));

function parseArgs(argv) {
  const args = { folder: null, json: false, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--json') { args.json = true; continue; }
    if (token === '--folder') {
      args.folder = argv[i + 1];
      i += 1;
      continue;
    }
  }
  return args;
}

function printHelp() {
  console.log('Usage: node operations/scripts/validators/governance/repo/check-folder-allowlist.js [flags]');
  console.log('');
  console.log('Flags:');
  console.log('  --folder <path>    Check a specific folder (default: all governed folders)');
  console.log('  --json             Emit machine-readable JSON');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  const folders = args.folder
    ? [{ rel: args.folder, abs: path.join(REPO_ROOT, args.folder) }]
    : findGovernedFolders(REPO_ROOT);

  const results = folders.map(({ rel, abs }) => {
    const result = computeDrift(abs);
    return { folder: rel, ...result };
  });

  const totalDrift = results.reduce((sum, r) => sum + r.drift.length, 0);
  const ungoverned = results.filter((r) => r.ungoverned);

  if (args.json) {
    console.log(JSON.stringify({ ok: totalDrift === 0, totalDrift, results }, null, 2));
  } else {
    for (const r of results) {
      if (r.ungoverned) {
        console.log(`SKIP ${r.folder}: no .allowlist file declared (folder is ungoverned)`);
        continue;
      }
      if (r.drift.length === 0) {
        console.log(`OK   ${r.folder}: ${r.permitted.length} permitted entries, no drift`);
      } else {
        console.log(`FAIL ${r.folder}: ${r.drift.length} drift entries`);
        for (const entry of r.drift) console.log(`     - ${entry}`);
      }
    }
    if (totalDrift > 0) {
      console.log('');
      console.log(`Total drift: ${totalDrift}. Run dispatch-folder-allowlist.js --mode manual to archive drift.`);
    }
  }

  process.exit(totalDrift > 0 ? 1 : 0);
}

main();
