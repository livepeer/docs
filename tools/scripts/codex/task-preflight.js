#!/usr/bin/env node
/**
 * @script            codex/task-preflight
 * @category          generator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/codex, .codex/task-contract.yaml, .codex/locks-local
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex task preflight — generates task setup files and validates preconditions
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/codex/task-preflight.js [flags]
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

const DEFAULT_BASE = 'docs-v2';
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

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

function runGit(args, options = {}) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', ...options });
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
    taskId: null,
    slug: '',
    base: DEFAULT_BASE,
    scope: [],
    scopeFile: '',
    owner: `${process.env.USER || 'unknown'}@${os.hostname()}`,
    worktree: '',
    expiresHours: 8,
    contractPath: DEFAULT_CONTRACT,
    dryRun: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--task') {
      args.taskId = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (token.startsWith('--task=')) {
      args.taskId = Number(token.slice('--task='.length));
      continue;
    }
    if (token === '--slug') {
      args.slug = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--slug=')) {
      args.slug = token.slice('--slug='.length).trim();
      continue;
    }
    if (token === '--base') {
      args.base = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base=')) {
      args.base = token.slice('--base='.length).trim();
      continue;
    }
    if (token === '--scope') {
      args.scope = String(argv[i + 1] || '')
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (token.startsWith('--scope=')) {
      args.scope = token
        .slice('--scope='.length)
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      continue;
    }
    if (token === '--scope-file') {
      args.scopeFile = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--scope-file=')) {
      args.scopeFile = token.slice('--scope-file='.length).trim();
      continue;
    }
    if (token === '--owner') {
      args.owner = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--owner=')) {
      args.owner = token.slice('--owner='.length).trim();
      continue;
    }
    if (token === '--worktree') {
      args.worktree = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--worktree=')) {
      args.worktree = token.slice('--worktree='.length).trim();
      continue;
    }
    if (token === '--expires-hours') {
      args.expiresHours = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (token.startsWith('--expires-hours=')) {
      args.expiresHours = Number(token.slice('--expires-hours='.length));
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
    if (token === '--dry-run') {
      args.dryRun = true;
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
  console.log('Usage: node tools/scripts/codex/task-preflight.js --task <id> --slug <slug> (--scope <a,b,c> | --scope-file <path>) [--base docs-v2] [--worktree <path>] [--dry-run]');
}

function readScopeFromFile(scopeFile) {
  if (!scopeFile) return [];
  const abs = path.resolve(REPO_ROOT, scopeFile);
  if (!fs.existsSync(abs)) {
    throw new Error(`Scope file not found: ${toPosix(path.relative(REPO_ROOT, abs))}`);
  }
  return fs
    .readFileSync(abs, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => toPosix(line));
}

function writeYamlContract(contractAbs, data) {
  const content = [
    `task_id: ${data.taskId}`,
    `branch: ${data.branch}`,
    `base_branch: ${data.base}`,
    'scope_in:',
    ...data.scope.map((entry) => `  - ${entry}`),
    'scope_out: []',
    'allowed_generated:',
    '  - .codex/pr-body.generated.md',
    'acceptance_checks:',
    `  - node tests/run-pr-checks.js --base-ref ${data.base}`,
    'risk_flags:',
    '  - workflow-governance',
    'follow_up_issues: []',
    ''
  ].join('\n');

  fs.mkdirSync(path.dirname(contractAbs), { recursive: true });
  fs.writeFileSync(contractAbs, content, 'utf8');
}

function writeLock(lockDirAbs, lock) {
  fs.mkdirSync(lockDirAbs, { recursive: true });
  const lockPath = path.join(lockDirAbs, `${lock.lock_id}.json`);
  fs.writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`, 'utf8');
  return lockPath;
}

function branchExists(branch) {
  return Boolean(tryRunGit(['rev-parse', '--verify', `refs/heads/${branch}`]));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  if (!Number.isInteger(args.taskId) || args.taskId <= 0) {
    throw new Error('--task must be a positive integer');
  }

  const slug = slugify(args.slug);
  if (!slug) {
    throw new Error('--slug is required and must contain alphanumeric characters');
  }

  if (!Number.isFinite(args.expiresHours) || args.expiresHours <= 0) {
    throw new Error('--expires-hours must be a positive number');
  }

  const scope = [...new Set([...args.scope, ...readScopeFromFile(args.scopeFile)])];
  if (scope.length === 0) {
    throw new Error('At least one scope entry is required via --scope or --scope-file');
  }

  const branch = `codex/${args.taskId}-${slug}`;
  const contractAbs = path.resolve(REPO_ROOT, args.contractPath);
  const lockDirAbs = path.join(REPO_ROOT, LOCK_DIR_REL);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + args.expiresHours * 60 * 60 * 1000);
  const lockId = `${args.taskId}-${slug}-${now.toISOString().replace(/[:.]/g, '-')}`;
  const worktreePath = args.worktree
    ? path.resolve(REPO_ROOT, args.worktree)
    : path.resolve(REPO_ROOT);

  const actions = [];

  if (args.worktree) {
    if (!fs.existsSync(worktreePath)) {
      if (branchExists(branch)) {
        actions.push({ type: 'git', cmd: ['worktree', 'add', worktreePath, branch] });
      } else {
        actions.push({ type: 'git', cmd: ['worktree', 'add', '-b', branch, worktreePath, args.base] });
      }
    }
  } else {
    if (branchExists(branch)) {
      actions.push({ type: 'git', cmd: ['switch', branch] });
    } else {
      actions.push({ type: 'git', cmd: ['switch', '-c', branch, args.base] });
    }
  }

  if (args.dryRun) {
    console.log('Preflight dry-run actions:');
    actions.forEach((action) => {
      console.log(`  git ${action.cmd.join(' ')}`);
    });
    console.log(`  write ${toPosix(path.relative(REPO_ROOT, contractAbs))}`);
    console.log(`  write ${toPosix(path.join(LOCK_DIR_REL, `${lockId}.json`))}`);
    process.exit(0);
  }

  actions.forEach((action) => {
    runGit(action.cmd);
  });

  writeYamlContract(contractAbs, {
    taskId: args.taskId,
    branch,
    base: args.base,
    scope
  });

  const lockPath = writeLock(lockDirAbs, {
    lock_id: lockId,
    task_id: String(args.taskId),
    branch,
    worktree_path: worktreePath,
    owner: args.owner,
    scope_in: scope,
    created_at: now.toISOString(),
    expires_at: expiresAt.toISOString(),
    status: 'active'
  });

  console.log('✅ Codex preflight completed');
  console.log(`Branch: ${branch}`);
  console.log(`Contract: ${toPosix(path.relative(REPO_ROOT, contractAbs))}`);
  console.log(`Lock: ${toPosix(path.relative(REPO_ROOT, lockPath))}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
