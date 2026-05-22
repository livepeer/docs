'use strict';

/**
 * @module      tools/lib/governance/pipeline-mode
 * @purpose     Shared mode contract for pipeline dispatchers. Parses --mode pr|scheduled|manual + common flags.
 * @policy      D-GOV-07 (local CLI equivalence); D-GOV-03 (detect-repair-escalate-verify)
 */

const path = require('path');
const { spawnSync } = require('child_process');

const VALID_MODES = ['pr', 'scheduled', 'manual', 'post-merge'];

function parsePipelineArgs(argv) {
  const args = {
    mode: 'pr',
    dryRun: false,
    write: false,
    verify: false,
    files: null,
    staged: false,
    full: false,
    json: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--help' || t === '-h') { args.help = true; continue; }
    if (t === '--dry-run') { args.dryRun = true; continue; }
    if (t === '--write') { args.write = true; continue; }
    if (t === '--verify') { args.verify = true; continue; }
    if (t === '--staged') { args.staged = true; continue; }
    if (t === '--full') { args.full = true; continue; }
    if (t === '--json') { args.json = true; continue; }
    if (t === '--mode') { args.mode = argv[i + 1]; i += 1; continue; }
    if (t === '--files' || t === '--file') { args.files = argv[i + 1]; i += 1; continue; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  if (!VALID_MODES.includes(args.mode)) {
    throw new Error(`Invalid --mode "${args.mode}". Use one of: ${VALID_MODES.join(', ')}`);
  }
  return args;
}

function runAtomic(scriptPath, scriptArgs, options = {}) {
  const repoRoot = options.cwd || process.cwd();
  const result = spawnSync(process.execPath, [scriptPath, ...scriptArgs], {
    stdio: options.stdio || 'inherit',
    cwd: repoRoot,
    encoding: 'utf8',
  });
  return {
    exitCode: result.status || 0,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  };
}

function passThroughFlags(args) {
  const out = [];
  if (args.dryRun) out.push('--dry-run');
  if (args.write) out.push('--write');
  if (args.verify) out.push('--verify');
  if (args.staged) out.push('--staged');
  if (args.full) out.push('--full');
  if (args.json) out.push('--json');
  if (args.files) out.push('--files', args.files);
  return out;
}

function printPipelineHelp(scriptName, niche) {
  console.log(`Usage: node ${scriptName} [flags]`);
  console.log('');
  console.log(`Pipeline dispatcher for ${niche}. Implements the full detect-repair-verify-escalate cycle.`);
  console.log('');
  console.log('Modes:');
  console.log('  --mode pr           PR-time check + advisory comment (default)');
  console.log('  --mode scheduled    Audit + repair + verify + rolling issue');
  console.log('  --mode manual       Manual repair-only with --verify');
  console.log('  --mode post-merge   Generate + verify after merge');
  console.log('');
  console.log('Common flags:');
  console.log('  --dry-run           Preview without writes (default)');
  console.log('  --write             Apply repairs / writes');
  console.log('  --verify            Post-repair re-check, revert regressions');
  console.log('  --files <paths>     Scope to specific files (comma-separated)');
  console.log('  --staged            Scope to staged files');
  console.log('  --full              Scope to full v2/ tree');
  console.log('  --json              Machine-readable output');
}

module.exports = {
  VALID_MODES,
  parsePipelineArgs,
  passThroughFlags,
  runAtomic,
  printPipelineHelp,
};
