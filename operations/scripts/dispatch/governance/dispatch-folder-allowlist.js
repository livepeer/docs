#!/usr/bin/env node
/**
 * @script      dispatch-folder-allowlist
 * @type        dispatch
 * @concern     governance
 * @niche       folder-allowlist
 * @purpose     Pipeline dispatcher for D-GOV-08 folder-allowlist enforcement (full lifecycle)
 * @description Pipeline orchestrator. Mode-driven entry point: --mode pr (detect + advisory comment), --mode scheduled (audit + repair + verify + rolling issue), --mode manual (repair-only with --verify). Wraps the three atomic scripts (check / audit / repair) into one composable lifecycle. Independently runnable locally via `node dispatch-folder-allowlist.js --dry-run`.
 * @mode        dispatch
 * @pipeline    P2/P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual)
 * @scope       all governed folders (any folder declaring .allowlist)
 * @usage       node operations/scripts/dispatch/governance/dispatch-folder-allowlist.js [--mode pr|scheduled|manual] [--dry-run|--write] [--verify] [--folder <path>]
 * @policy      D-GOV-08 (every folder is governed); D-GOV-03 (detect-repair-escalate-verify)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPTS = {
  check: path.join(REPO_ROOT, 'operations/scripts/validators/governance/repo/check-folder-allowlist.js'),
  audit: path.join(REPO_ROOT, 'operations/scripts/audits/governance/repo/audit-folder-allowlist.js'),
  repair: path.join(REPO_ROOT, 'operations/scripts/remediators/governance/repo/repair-folder-allowlist.js'),
};

function parseArgs(argv) {
  const args = { mode: 'pr', dryRun: false, write: false, verify: false, folder: null, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--help' || t === '-h') { args.help = true; continue; }
    if (t === '--dry-run') { args.dryRun = true; continue; }
    if (t === '--write') { args.write = true; continue; }
    if (t === '--verify') { args.verify = true; continue; }
    if (t === '--mode') { args.mode = argv[i + 1]; i += 1; continue; }
    if (t === '--folder') { args.folder = argv[i + 1]; i += 1; continue; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function runNode(scriptPath, scriptArgs) {
  const result = spawnSync(process.execPath, [scriptPath, ...scriptArgs], { stdio: 'inherit', cwd: REPO_ROOT });
  return result.status || 0;
}

function printHelp() {
  console.log('Usage: node operations/scripts/dispatch/governance/dispatch-folder-allowlist.js [flags]');
  console.log('');
  console.log('Modes:');
  console.log('  --mode pr           PR-time check + advisory (default)');
  console.log('  --mode scheduled    Scheduled audit + repair + verify + rolling issue');
  console.log('  --mode manual       Manual repair-only with --verify');
  console.log('');
  console.log('Common flags:');
  console.log('  --dry-run           Preview without writes (default)');
  console.log('  --write             Apply repairs');
  console.log('  --verify            Post-repair re-check, fail if residual drift');
  console.log('  --folder <path>     Scope to one governed folder');
}

function modePr(args) {
  const checkArgs = [];
  if (args.folder) checkArgs.push('--folder', args.folder);
  return runNode(SCRIPTS.check, checkArgs);
}

function modeScheduled(args) {
  // 1. Audit — produces report and rolling-issue payload
  const auditCode = runNode(SCRIPTS.audit, []);
  if (auditCode !== 0) return auditCode;
  // 2. Repair (if --write) — archive drift
  if (args.write) {
    const repairArgs = ['--write'];
    if (args.verify) repairArgs.push('--verify');
    if (args.folder) repairArgs.push('--folder', args.folder);
    const repairCode = runNode(SCRIPTS.repair, repairArgs);
    if (repairCode !== 0) return repairCode;
  } else {
    const repairArgs = ['--dry-run'];
    if (args.folder) repairArgs.push('--folder', args.folder);
    runNode(SCRIPTS.repair, repairArgs);
  }
  return 0;
}

function modeManual(args) {
  const repairArgs = [];
  repairArgs.push(args.write ? '--write' : '--dry-run');
  if (args.verify || args.write) repairArgs.push('--verify');
  if (args.folder) repairArgs.push('--folder', args.folder);
  return runNode(SCRIPTS.repair, repairArgs);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  // Verify atomics exist before dispatching.
  for (const [name, script] of Object.entries(SCRIPTS)) {
    if (!fs.existsSync(script)) {
      console.error(`dispatch-folder-allowlist: missing atomic ${name} at ${script}`);
      process.exit(2);
    }
  }

  let code;
  switch (args.mode) {
    case 'pr': code = modePr(args); break;
    case 'scheduled': code = modeScheduled(args); break;
    case 'manual': code = modeManual(args); break;
    default:
      console.error(`Unknown --mode ${args.mode}. Use pr | scheduled | manual.`);
      process.exit(2);
  }
  process.exit(code);
}

main();
