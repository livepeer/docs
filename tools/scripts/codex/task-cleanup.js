#!/usr/bin/env node
/**
 * @script            codex/task-cleanup
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/codex, .codex/locks-local, .codex/task-contract.yaml
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex task cleanup utility — reports and prunes merged clean worktrees plus stale local codex branches after merge
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/codex/task-cleanup.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('../../lib/load-js-yaml');

const DEFAULT_BASE_REF = 'docs-v2-dev';
const DEFAULT_CONTRACT = '.codex/task-contract.yaml';
const LOCK_DIR_REL = '.codex/locks-local';
const CODEX_BRANCH_RE = /^codex\/[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)*$/i;
const GENERATED_EXACT = new Set([
  'docs-index.json',
  'llms-full.txt',
  'llms.txt',
  'sitemap-ai.xml',
  'docs-guide/catalog/pages-catalog.mdx',
  'docs-guide/catalog/scripts-catalog.mdx',
  'docs-guide/catalog/templates-catalog.mdx',
  'docs-guide/catalog/workflows-catalog.mdx',
  'tools/script-index.md'
]);
const OPERATIONAL_PATTERNS = [
  /^\.codex\/task-contract\.yaml$/,
  /^\.codex\/pr-body\.generated\.md$/,
  /^\.codex\/locks-local\//,
  /^tasks\/reports\//,
  /^v2\/internal\/reports\//
];
const TEMP_WORKTREE_PATTERNS = [/^\/tmp\//, /^\/private\/tmp\//];

const REPO_ROOT = getRepoRoot();
const REPO_ROOT_REAL = realpathSafe(REPO_ROOT);

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function realpathSafe(value) {
  try {
    if (fs.realpathSync.native) {
      return fs.realpathSync.native(value);
    }
    return fs.realpathSync(value);
  } catch (_error) {
    return path.resolve(value);
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function runGit(args, cwd = REPO_ROOT) {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(stderr || stdout || `git ${args.join(' ')} failed`);
  }
  return String(result.stdout || '').trim();
}

function tryRunGit(args, cwd = REPO_ROOT) {
  try {
    return runGit(args, cwd);
  } catch (_error) {
    return '';
  }
}

function parseArgs(argv) {
  const args = {
    branch: '',
    contractPath: DEFAULT_CONTRACT,
    baseRef: DEFAULT_BASE_REF,
    apply: false,
    noSweep: false,
    keepBranch: false,
    json: false
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
    if (token === '--contract') {
      args.contractPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--contract=')) {
      args.contractPath = token.slice('--contract='.length).trim();
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }
    if (token === '--apply') {
      args.apply = true;
      continue;
    }
    if (token === '--no-sweep') {
      args.noSweep = true;
      continue;
    }
    if (token === '--keep-branch') {
      args.keepBranch = true;
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
  console.log(
    'Usage: node tools/scripts/codex/task-cleanup.js [--branch <name>] [--contract <path>] [--base-ref <branch>] [--apply] [--no-sweep] [--keep-branch] [--json]'
  );
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
      // ignore and fall back to git branch detection
    }
  }

  return tryRunGit(['rev-parse', '--abbrev-ref', 'HEAD']);
}

function resolveBaseTarget(baseRef) {
  if (tryRunGit(['rev-parse', '--verify', `refs/remotes/origin/${baseRef}`])) {
    return `origin/${baseRef}`;
  }
  if (tryRunGit(['rev-parse', '--verify', `refs/heads/${baseRef}`])) {
    return baseRef;
  }
  throw new Error(`Unable to resolve base ref ${baseRef}`);
}

function loadLocks() {
  const lockDirAbs = path.join(REPO_ROOT, LOCK_DIR_REL);
  if (!fs.existsSync(lockDirAbs)) {
    return [];
  }

  return fs.readdirSync(lockDirAbs, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => {
      const abs = path.join(lockDirAbs, entry.name);
      try {
        const parsed = JSON.parse(fs.readFileSync(abs, 'utf8'));
        return {
          ...parsed,
          __file: abs
        };
      } catch (_error) {
        return null;
      }
    })
    .filter(Boolean);
}

function getLatestLockForBranch(locks, branch) {
  return locks
    .filter((lock) => String(lock.branch || '') === branch)
    .sort((a, b) => {
      const aTime = Date.parse(String(a.created_at || '')) || 0;
      const bTime = Date.parse(String(b.created_at || '')) || 0;
      return bTime - aTime;
    })[0] || null;
}

function isTempWorktree(worktreePath) {
  const normalized = toPosix(realpathSafe(worktreePath));
  return TEMP_WORKTREE_PATTERNS.some((pattern) => pattern.test(normalized));
}

function parseStatusEntries(output) {
  return output
    .split('\n')
    .filter(Boolean)
    .map((line) => ({
      raw: line,
      status: line.slice(0, 2),
      path: line.length > 3 ? line.slice(3).trim() : ''
    }));
}

function isOperationalEntry(filePath) {
  if (!filePath) return true;
  if (GENERATED_EXACT.has(filePath)) return true;
  return OPERATIONAL_PATTERNS.some((pattern) => pattern.test(filePath));
}

function summarizeDirtyEntries(entries) {
  const roots = {};
  let operationalCount = 0;
  let substantiveCount = 0;

  entries.forEach((entry) => {
    const root = entry.path ? String(entry.path).split('/')[0] || 'other' : 'other';
    roots[root] = (roots[root] || 0) + 1;
    if (isOperationalEntry(entry.path)) {
      operationalCount += 1;
    } else {
      substantiveCount += 1;
    }
  });

  return {
    roots,
    operationalCount,
    substantiveCount,
    operationalOnly: substantiveCount === 0
  };
}

function listWorktrees(baseTarget) {
  const raw = runGit(['worktree', 'list', '--porcelain']);
  const blocks = raw.split(/\n\n+/).filter(Boolean);

  return blocks.map((block) => {
    const row = {
      path: '',
      pathReal: '',
      head: '',
      branch: 'detached',
      dirty: false,
      statusEntries: [],
      merged: false,
      isCodexBranch: false,
      isCurrentWorktree: false,
      isDetachedTemp: false,
      dirtySummary: {
        roots: {},
        operationalCount: 0,
        substantiveCount: 0,
        operationalOnly: true
      }
    };

    block.split('\n').forEach((line) => {
      if (line.startsWith('worktree ')) {
        row.path = line.slice('worktree '.length);
      } else if (line.startsWith('HEAD ')) {
        row.head = line.slice('HEAD '.length);
      } else if (line.startsWith('branch ')) {
        row.branch = line.slice('branch '.length).replace(/^refs\/heads\//, '');
      } else if (line === 'detached') {
        row.branch = 'detached';
      }
    });

    row.pathReal = realpathSafe(row.path);
    row.isCurrentWorktree = row.pathReal === REPO_ROOT_REAL;
    row.isCodexBranch = row.branch !== 'detached' && CODEX_BRANCH_RE.test(row.branch);
    row.isDetachedTemp = row.branch === 'detached' && isTempWorktree(row.path);

    const statusOutput = tryRunGit(['status', '--porcelain', '--untracked-files=all'], row.path);
    row.statusEntries = parseStatusEntries(statusOutput);
    row.dirty = row.statusEntries.length > 0;
    row.dirtySummary = summarizeDirtyEntries(row.statusEntries);

    if (row.branch !== 'detached' && row.head) {
      row.merged = spawnSync('git', ['merge-base', '--is-ancestor', row.head, baseTarget], {
        cwd: REPO_ROOT,
        encoding: 'utf8'
      }).status === 0;
    }

    return row;
  });
}

function listCodexBranches(baseTarget) {
  const output = tryRunGit(['for-each-ref', '--format=%(refname:short)|%(objectname)', 'refs/heads/codex']);
  if (!output) return [];

  return output.split('\n').filter(Boolean).map((line) => {
    const [branch, head] = line.split('|');
    return {
      branch,
      head,
      merged: spawnSync('git', ['merge-base', '--is-ancestor', head, baseTarget], {
        cwd: REPO_ROOT,
        encoding: 'utf8'
      }).status === 0
    };
  });
}

function buildReport(args) {
  const branch = detectBranch(args);
  if (!CODEX_BRANCH_RE.test(branch)) {
    throw new Error(`Branch "${branch}" is not a codex/* branch; pass --branch explicitly`);
  }

  const baseTarget = resolveBaseTarget(args.baseRef || DEFAULT_BASE_REF);
  const locks = loadLocks();
  const targetLock = getLatestLockForBranch(locks, branch);
  const worktrees = listWorktrees(baseTarget);
  const targetWorktree = worktrees.find((row) => row.branch === branch) || null;
  const branchRefs = listCodexBranches(baseTarget);

  const targetMerged = targetWorktree
    ? targetWorktree.merged
    : (() => {
        const branchRef = branchRefs.find((entry) => entry.branch === branch);
        return Boolean(branchRef && branchRef.merged);
      })();

  if (!targetMerged) {
    throw new Error(`Branch ${branch} is not merged into ${baseTarget}`);
  }

  const removableAttached = worktrees.filter((row) =>
    row.branch !== 'detached' &&
    row.isCodexBranch &&
    row.merged &&
    !row.dirty &&
    !row.isCurrentWorktree &&
    row.branch !== args.baseRef &&
    (!args.noSweep || row.branch === branch)
  );

  const removableDetachedTemp = worktrees.filter((row) =>
    !args.noSweep &&
    row.isDetachedTemp &&
    !row.dirty &&
    !row.isCurrentWorktree
  );

  const attachedBranchesAfterRemovals = new Set(
    worktrees
      .filter((row) => row.branch !== 'detached')
      .filter((row) => !removableAttached.some((candidate) => candidate.pathReal === row.pathReal))
      .map((row) => row.branch)
  );

  const prunableBranches = args.keepBranch
    ? []
    : branchRefs.filter((entry) => {
        if (!entry.merged) return false;
        if (attachedBranchesAfterRemovals.has(entry.branch)) return false;
        if (args.noSweep && entry.branch !== branch) return false;
        return true;
      });

  const dirtyMergedOperationalOnly = worktrees.filter((row) =>
    row.branch !== 'detached' && row.merged && row.dirty && row.dirtySummary.operationalOnly
  );
  const dirtyMergedNeedsReview = worktrees.filter((row) =>
    row.branch !== 'detached' && row.merged && row.dirty && !row.dirtySummary.operationalOnly
  );
  const dirtyUnmergedOperationalOnly = worktrees.filter((row) =>
    row.branch !== 'detached' && !row.merged && row.dirty && row.dirtySummary.operationalOnly
  );
  const dirtyUnmergedNeedsReview = worktrees.filter((row) =>
    row.branch !== 'detached' && !row.merged && row.dirty && !row.dirtySummary.operationalOnly
  );

  return {
    branch,
    baseTarget,
    baseRef: args.baseRef || DEFAULT_BASE_REF,
    targetLock: targetLock ? {
      lock_id: String(targetLock.lock_id || ''),
      status: String(targetLock.status || ''),
      worktree_path: String(targetLock.worktree_path || ''),
      created_at: String(targetLock.created_at || ''),
      released_at: String(targetLock.released_at || '')
    } : null,
    summary: {
      totalWorktrees: worktrees.length,
      removableAttached: removableAttached.length,
      removableDetachedTemp: removableDetachedTemp.length,
      prunableBranches: prunableBranches.length,
      dirtyMergedOperationalOnly: dirtyMergedOperationalOnly.length,
      dirtyMergedNeedsReview: dirtyMergedNeedsReview.length,
      dirtyUnmergedOperationalOnly: dirtyUnmergedOperationalOnly.length,
      dirtyUnmergedNeedsReview: dirtyUnmergedNeedsReview.length
    },
    removableAttached,
    removableDetachedTemp,
    prunableBranches,
    dirtyMergedOperationalOnly,
    dirtyMergedNeedsReview,
    dirtyUnmergedOperationalOnly,
    dirtyUnmergedNeedsReview
  };
}

function pruneReleasedLocks(branches) {
  if (!branches.length) return [];

  const branchSet = new Set(branches);
  const removed = [];
  loadLocks().forEach((lock) => {
    if (!branchSet.has(String(lock.branch || ''))) return;
    if (String(lock.status || '') !== 'released') return;
    try {
      fs.unlinkSync(lock.__file);
      removed.push(toPosix(path.relative(REPO_ROOT, lock.__file)));
    } catch (_error) {
      // best-effort cleanup
    }
  });
  return removed;
}

function formatWorktreeEntry(row) {
  const detail = row.dirty
    ? `dirty=${row.statusEntries.length}, substantive=${row.dirtySummary.substantiveCount}`
    : 'clean';
  return `${row.branch} -> ${toPosix(row.path)} (${detail})`;
}

function printHumanReport(report, applyResult = null) {
  console.log('🧹 Codex task cleanup report');
  console.log(`Target branch: ${report.branch}`);
  console.log(`Base ref: ${report.baseTarget}`);
  console.log('');
  console.log(`Safe attached worktrees to remove: ${report.summary.removableAttached}`);
  report.removableAttached.forEach((row) => console.log(`  - ${formatWorktreeEntry(row)}`));
  console.log(`Safe detached temp worktrees to remove: ${report.summary.removableDetachedTemp}`);
  report.removableDetachedTemp.forEach((row) =>
    console.log(`  - ${toPosix(row.path)} (detached temp clean worktree)`)
  );
  console.log(`Merged local codex branches to prune: ${report.summary.prunableBranches}`);
  report.prunableBranches.forEach((row) => console.log(`  - ${row.branch}`));
  console.log('');
  console.log(`Dirty merged operational-only worktrees: ${report.summary.dirtyMergedOperationalOnly}`);
  report.dirtyMergedOperationalOnly.forEach((row) => console.log(`  - ${formatWorktreeEntry(row)}`));
  console.log(`Dirty merged worktrees needing review: ${report.summary.dirtyMergedNeedsReview}`);
  report.dirtyMergedNeedsReview.forEach((row) => console.log(`  - ${formatWorktreeEntry(row)}`));
  console.log(`Dirty unmerged operational-only worktrees: ${report.summary.dirtyUnmergedOperationalOnly}`);
  report.dirtyUnmergedOperationalOnly.forEach((row) => console.log(`  - ${formatWorktreeEntry(row)}`));
  console.log(`Dirty unmerged worktrees needing review: ${report.summary.dirtyUnmergedNeedsReview}`);
  report.dirtyUnmergedNeedsReview.forEach((row) => console.log(`  - ${formatWorktreeEntry(row)}`));

  if (!applyResult) {
    console.log('');
    console.log('ℹ️  Report only. Re-run with --apply to prune safe candidates.');
    return;
  }

  console.log('');
  console.log(`Removed attached worktrees: ${applyResult.removedWorktrees.length}`);
  applyResult.removedWorktrees.forEach((entry) => console.log(`  - ${entry}`));
  console.log(`Removed detached temp worktrees: ${applyResult.removedDetachedTemp.length}`);
  applyResult.removedDetachedTemp.forEach((entry) => console.log(`  - ${entry}`));
  console.log(`Pruned local branches: ${applyResult.deletedBranches.length}`);
  applyResult.deletedBranches.forEach((entry) => console.log(`  - ${entry}`));
  console.log(`Pruned released locks: ${applyResult.removedLocks.length}`);
  applyResult.removedLocks.forEach((entry) => console.log(`  - ${entry}`));
}

function runCleanup(args = {}) {
  const report = buildReport(args);
  if (!args.apply) {
    return {
      report,
      applyResult: null
    };
  }

  const applyResult = {
    removedWorktrees: [],
    removedDetachedTemp: [],
    deletedBranches: [],
    removedLocks: []
  };

  const cleanedBranches = new Set();

  report.removableAttached.forEach((row) => {
    runGit(['worktree', 'remove', row.path]);
    applyResult.removedWorktrees.push(toPosix(row.path));
    cleanedBranches.add(row.branch);
  });

  report.removableDetachedTemp.forEach((row) => {
    runGit(['worktree', 'remove', row.path]);
    applyResult.removedDetachedTemp.push(toPosix(row.path));
  });

  if (!args.keepBranch) {
    report.prunableBranches.forEach((row) => {
      runGit(['branch', '-d', row.branch]);
      applyResult.deletedBranches.push(row.branch);
      cleanedBranches.add(row.branch);
    });
  }

  applyResult.removedLocks = pruneReleasedLocks([...cleanedBranches]);
  tryRunGit(['worktree', 'prune']);

  return {
    report,
    applyResult
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const result = runCleanup(args);
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  printHumanReport(result.report, result.applyResult);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  buildReport,
  parseArgs,
  runCleanup
};
