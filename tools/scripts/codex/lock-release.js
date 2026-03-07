#!/usr/bin/env node
/**
 * @script            codex/lock-release
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/codex, .codex/locks-local, .codex/task-contract.yaml
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex lock release utility — releases stale codex lock files
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/codex/lock-release.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('js-yaml');

const LOCK_DIR_REL = '.codex/locks-local';
const DEFAULT_CONTRACT = '.codex/task-contract.yaml';

const REPO_ROOT = getRepoRoot();

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function runGit(args) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(stderr || stdout || `git ${args.join(' ')} failed`);
  }
  return String(result.stdout || '').trim();
}

function parseArgs(argv) {
  const args = {
    branch: '',
    lockId: '',
    contractPath: DEFAULT_CONTRACT
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--branch') {
      args.branch = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--branch=')) {
      args.branch = token.slice('--branch='.length).trim();
      continue;
    }
    if (token === '--lock-id') {
      args.lockId = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--lock-id=')) {
      args.lockId = token.slice('--lock-id='.length).trim();
      continue;
    }
    if (token === '--contract') {
      args.contractPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--contract=')) {
      args.contractPath = token.slice('--contract='.length).trim();
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function usage() {
  console.log('Usage: node tools/scripts/codex/lock-release.js [--branch <name>] [--lock-id <id>] [--contract <path>]');
}

function detectBranch(args) {
  if (args.branch) return args.branch;

  const contractAbs = path.resolve(REPO_ROOT, args.contractPath);
  if (fs.existsSync(contractAbs)) {
    try {
      const parsed = yaml.load(fs.readFileSync(contractAbs, 'utf8'));
      const contractBranch = String(parsed && parsed.branch ? parsed.branch : '').trim();
      if (contractBranch) return contractBranch;
    } catch (_error) {
      // ignore and fallback to git branch detection
    }
  }

  return runGit(['rev-parse', '--abbrev-ref', 'HEAD']);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const branch = detectBranch(args);
  const lockDirAbs = path.join(REPO_ROOT, LOCK_DIR_REL);
  if (!fs.existsSync(lockDirAbs)) {
    throw new Error(`Lock directory not found: ${LOCK_DIR_REL}`);
  }

  const entries = fs.readdirSync(lockDirAbs, { withFileTypes: true }).filter((entry) => entry.isFile() && entry.name.endsWith('.json'));
  let releasedCount = 0;

  entries.forEach((entry) => {
    const abs = path.join(lockDirAbs, entry.name);
    let lock;
    try {
      lock = JSON.parse(fs.readFileSync(abs, 'utf8'));
    } catch (_error) {
      return;
    }

    if (args.lockId && String(lock.lock_id || '') !== args.lockId) {
      return;
    }

    if (!args.lockId && String(lock.branch || '') !== branch) {
      return;
    }

    if (String(lock.status || '') === 'released') {
      releasedCount += 1;
      return;
    }

    lock.status = 'released';
    lock.released_at = new Date().toISOString();
    fs.writeFileSync(abs, `${JSON.stringify(lock, null, 2)}\n`, 'utf8');
    releasedCount += 1;
  });

  if (releasedCount === 0) {
    throw new Error(args.lockId ? `No lock found for lock_id=${args.lockId}` : `No active lock found for branch ${branch}`);
  }

  console.log(`✅ Released ${releasedCount} lock(s) for ${args.lockId ? `lock_id=${args.lockId}` : branch}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
