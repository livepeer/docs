#!/usr/bin/env node
/**
 * @script            codex/validate-locks
 * @category          enforcer
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/codex, .codex/locks-local, .codex/task-contract.yaml
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex lock validator — checks for stale or conflicting lock files before push
 * @pipeline          P1 (commit), P2 (push)
 * @usage             node tools/scripts/codex/validate-locks.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('../../lib/load-js-yaml');

const CODEX_BRANCH_RE = /^codex\/(\d+)-[a-z0-9][a-z0-9-]*$/;
const DEFAULT_CONTRACT = '.codex/task-contract.yaml';
const LOCK_DIR_REL = '.codex/locks-local';

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

function tryRunGit(args) {
  try {
    return runGit(args);
  } catch (_error) {
    return '';
  }
}

function parseArgs(argv) {
  const args = {
    contractPath: DEFAULT_CONTRACT,
    branch: '',
    files: null,
    staged: false,
    quiet: false,
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--contract') {
      args.contractPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--contract=')) {
      args.contractPath = token.slice('--contract='.length).trim();
      continue;
    }
    if (token === '--branch') {
      args.branch = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--branch=')) {
      args.branch = token.slice('--branch='.length).trim();
      continue;
    }
    if (token === '--files') {
      const raw = String(argv[i + 1] || '').trim();
      args.files = raw
        ? [...new Set(raw.split(',').map((entry) => toPosix(entry.trim())).filter(Boolean))]
        : [];
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      const raw = token.slice('--files='.length).trim();
      args.files = raw
        ? [...new Set(raw.split(',').map((entry) => toPosix(entry.trim())).filter(Boolean))]
        : [];
      continue;
    }
    if (token === '--staged') {
      args.staged = true;
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
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
  console.log('Usage: node tools/scripts/codex/validate-locks.js [--contract <path>] [--branch <name>] [--files <a,b,c>] [--staged] [--quiet] [--json]');
}

function detectBranch(explicitBranch) {
  if (explicitBranch) return explicitBranch;
  const envHeadRef = String(process.env.GITHUB_HEAD_REF || '').trim();
  if (envHeadRef) return envHeadRef;
  return tryRunGit(['rev-parse', '--abbrev-ref', 'HEAD']);
}

function toPatternRegex(pattern) {
  const normalized = toPosix(String(pattern || '').trim()).replace(/^\.?\//, '');
  if (!normalized) return null;

  if (normalized.includes('*')) {
    const escaped = normalized.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
    const wildcard = escaped.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*');
    return new RegExp(`^${wildcard}$`);
  }

  if (normalized.endsWith('/')) {
    const escapedPrefix = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escapedPrefix}`);
  }

  const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escaped}(?:$|/)`);
}

function matchesAnyPattern(filePath, patterns) {
  return patterns.some((pattern) => {
    const re = toPatternRegex(pattern);
    return re ? re.test(filePath) : false;
  });
}

function getChangedFiles(args) {
  if (Array.isArray(args.files)) return args.files;
  if (args.staged) {
    const output = tryRunGit(['diff', '--cached', '--name-only', '--diff-filter=ACMRD']);
    if (!output) return [];
    return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
  }

  const output = tryRunGit(['diff', '--name-only', '--diff-filter=ACMRD', 'HEAD']);
  if (!output) return [];
  return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
}

function loadContract(contractAbs) {
  if (!fs.existsSync(contractAbs)) {
    throw new Error(`Task contract missing: ${toPosix(path.relative(REPO_ROOT, contractAbs))}`);
  }
  let parsed;
  try {
    parsed = yaml.load(fs.readFileSync(contractAbs, 'utf8'));
  } catch (error) {
    throw new Error(`Task contract YAML invalid: ${error.message}`);
  }

  const scopeIn = Array.isArray(parsed && parsed.scope_in)
    ? parsed.scope_in.map((entry) => String(entry || '').trim()).filter(Boolean)
    : [];
  const branch = String(parsed && parsed.branch ? parsed.branch : '').trim();

  return {
    branch,
    scopeIn
  };
}

function loadLocks(lockDirAbs) {
  if (!fs.existsSync(lockDirAbs)) {
    return [];
  }

  const out = [];
  fs.readdirSync(lockDirAbs, { withFileTypes: true }).forEach((entry) => {
    if (!entry.isFile() || !entry.name.endsWith('.json')) return;
    const abs = path.join(lockDirAbs, entry.name);
    try {
      const parsed = JSON.parse(fs.readFileSync(abs, 'utf8'));
      out.push({ ...parsed, __file: toPosix(path.relative(REPO_ROOT, abs)) });
    } catch (_error) {
      out.push({ __invalid: true, __file: toPosix(path.relative(REPO_ROOT, abs)) });
    }
  });

  return out;
}

function isActiveLock(lock) {
  if (!lock || lock.__invalid) return false;
  if (String(lock.status || '').trim() !== 'active') return false;
  const expires = String(lock.expires_at || '').trim();
  if (!expires) return true;
  const expiresAt = new Date(expires).getTime();
  if (!Number.isFinite(expiresAt)) return true;
  return expiresAt > Date.now();
}

function validateLockShape(lock) {
  const required = ['lock_id', 'task_id', 'branch', 'worktree_path', 'owner', 'scope_in', 'created_at', 'expires_at', 'status'];
  return required.filter((field) => !(field in lock));
}

function sortLocksNewestFirst(locks) {
  return [...locks].sort((a, b) => {
    const aTime = Date.parse(String(a.created_at || '')) || 0;
    const bTime = Date.parse(String(b.created_at || '')) || 0;
    return bTime - aTime;
  });
}

function writeResult(result, jsonMode) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  if (result.skipped) {
    console.log(`⏭️ ${result.message}`);
    return;
  }

  if (result.passed) {
    console.log(`✅ ${result.message}`);
    return;
  }

  console.error(`❌ ${result.message}`);
  result.errors.forEach((entry) => console.error(`  - ${entry}`));
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const branch = detectBranch(args.branch);
    if (!branch || !CODEX_BRANCH_RE.test(branch)) {
      const result = {
        passed: true,
        skipped: true,
        message: `Branch "${branch || 'unknown'}" is not codex/*; lock checks skipped.`,
        errors: []
      };
      if (!args.quiet || args.json) writeResult(result, args.json);
      process.exit(0);
    }

    const contractAbs = path.resolve(REPO_ROOT, args.contractPath);
    const contract = loadContract(contractAbs);
    if (contract.branch && contract.branch !== branch) {
      throw new Error(`Task contract branch mismatch: contract=${contract.branch}, current=${branch}`);
    }

    const lockDirAbs = path.join(REPO_ROOT, LOCK_DIR_REL);
    const allLocks = loadLocks(lockDirAbs);
    const errors = [];

    allLocks.filter((lock) => lock.__invalid).forEach((lock) => {
      errors.push(`Invalid lock JSON: ${lock.__file}`);
    });

    const activeLocks = allLocks.filter((lock) => isActiveLock(lock));
    activeLocks.forEach((lock) => {
      const missingFields = validateLockShape(lock);
      if (missingFields.length > 0) {
        errors.push(`Lock missing required fields (${missingFields.join(', ')}): ${lock.__file}`);
      }
    });

    const ownBranchLocks = sortLocksNewestFirst(
      activeLocks.filter((lock) => String(lock.branch || '') === branch)
    );
    const ownLock = ownBranchLocks[0];
    if (!ownLock) {
      errors.push(`No active local lock found for branch ${branch} in ${LOCK_DIR_REL}`);
    }

    const changedFiles = getChangedFiles(args);
    if (changedFiles.length > 0 && ownLock) {
      const others = activeLocks.filter((lock) =>
        lock.lock_id !== ownLock.lock_id && String(lock.branch || '') !== branch
      );
      others.forEach((lock) => {
        const scope = Array.isArray(lock.scope_in)
          ? lock.scope_in.map((entry) => String(entry || '').trim()).filter(Boolean)
          : [];
        if (scope.length === 0) return;

        const overlap = changedFiles.filter((filePath) => matchesAnyPattern(filePath, scope));
        if (overlap.length > 0) {
          errors.push(
            `Staged/changed files overlap active lock ${lock.lock_id} (${lock.branch}) -> ${overlap.join(', ')}`
          );
        }
      });

      const ownScope = Array.isArray(ownLock.scope_in)
        ? ownLock.scope_in.map((entry) => String(entry || '').trim()).filter(Boolean)
        : contract.scopeIn;
      const scopeToUse = ownScope.length > 0 ? ownScope : contract.scopeIn;
      const outOfScope = changedFiles.filter((filePath) => !matchesAnyPattern(filePath, scopeToUse));
      outOfScope.forEach((filePath) => {
        errors.push(`Changed file outside local lock scope: ${filePath}`);
      });
    }

    if (errors.length > 0) {
      const result = {
        passed: false,
        skipped: false,
        message: 'Codex lock validation failed.',
        errors
      };
      writeResult(result, args.json);
      process.exit(1);
    }

    const result = {
      passed: true,
      skipped: false,
      message: `Codex lock validation passed for ${branch}.`,
      errors: []
    };
    if (!args.quiet || args.json) writeResult(result, args.json);
    process.exit(0);
  } catch (error) {
    writeResult(
      {
        passed: false,
        skipped: false,
        message: 'Codex lock validation failed.',
        errors: [error.message]
      },
      false
    );
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
