#!/usr/bin/env node
/**
 * @script mintignore
 * @summary Helpers to evaluate .mintignore using gitignore semantics for test scanners.
 * @owner docs
 * @scope tests
 *
 * @usage
 *   node tests/utils/mintignore.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   Exports utility helpers consumed by test scanners.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime failure
 *
 * @examples
 *   node tests/utils/mintignore.js
 *
 * @notes
 *   Uses `git check-ignore` in an isolated temporary git repo so results depend only on .mintignore.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const tempRepoCache = new Map();
const trackedTempRepos = new Set();
const GIT_ENV_STRIP_KEYS = ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_PREFIX'];

function getSanitizedGitEnv(overrides = {}) {
  const env = { ...process.env, ...overrides };
  GIT_ENV_STRIP_KEYS.forEach((key) => {
    delete env[key];
  });
  return env;
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function getRepoRoot(rootDir = process.cwd()) {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], {
      cwd: rootDir,
      encoding: 'utf8',
      env: getSanitizedGitEnv()
    }).trim();
  } catch (_error) {
    return rootDir;
  }
}

function normalizeRepoRelativePath(filePath, repoRoot) {
  if (!filePath) return '';
  const raw = String(filePath).trim();
  if (!raw) return '';

  const absolutePath = path.isAbsolute(raw)
    ? path.resolve(raw)
    : path.resolve(repoRoot, raw);

  let rel = toPosix(path.relative(repoRoot, absolutePath));
  if (!rel) return '';
  rel = rel.replace(/^\.\//, '');
  rel = rel.replace(/^\/+/, '');
  return rel;
}

function getMintIgnorePath(rootDir = null) {
  const repoRoot = getRepoRoot(rootDir || process.cwd());
  const mintIgnorePath = path.join(repoRoot, '.mintignore');
  return fs.existsSync(mintIgnorePath) ? mintIgnorePath : '';
}

function ensureTempGitRepo(repoRoot) {
  const cached = tempRepoCache.get(repoRoot);
  if (cached && fs.existsSync(cached)) {
    return cached;
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mintignore-check-'));
  execFileSync('git', ['init', '-q'], { cwd: tempDir, env: getSanitizedGitEnv() });
  tempRepoCache.set(repoRoot, tempDir);
  trackedTempRepos.add(tempDir);
  return tempDir;
}

function parseCheckIgnoreOutput(output, mintIgnorePath) {
  const ignored = new Set();
  if (!output) return ignored;

  const mintIgnoreAbs = path.resolve(mintIgnorePath);
  const lines = output.split('\n').filter(Boolean);

  lines.forEach((line) => {
    const tabIndex = line.indexOf('\t');
    if (tabIndex < 0) return;

    const meta = line.slice(0, tabIndex);
    const relPath = toPosix(line.slice(tabIndex + 1).trim())
      .replace(/^\.\//, '')
      .replace(/^\/+/, '');

    if (!relPath || meta === '::') return;

    const sourceMatch = meta.match(/^(.*):(\d+):([^\t]*)$/);
    if (!sourceMatch) return;

    const sourceFile = path.resolve(sourceMatch[1]);
    const pattern = String(sourceMatch[3] || '').trim();

    if (sourceFile === mintIgnoreAbs && !pattern.startsWith('!')) {
      ignored.add(relPath);
    } else {
      ignored.delete(relPath);
    }
  });

  return ignored;
}

function listMintIgnoredRepoPaths(paths, options = {}) {
  const { rootDir = null } = options;
  const repoRoot = getRepoRoot(rootDir || process.cwd());
  const mintIgnorePath = getMintIgnorePath(repoRoot);
  if (!mintIgnorePath) return new Set();

  const uniqueRelPaths = [...new Set(
    (paths || [])
      .map((entry) => normalizeRepoRelativePath(entry, repoRoot))
      .filter(Boolean)
  )];

  if (!uniqueRelPaths.length) {
    return new Set();
  }

  try {
    const checkerRepo = ensureTempGitRepo(repoRoot);
    const output = execFileSync(
      'git',
      [
        '-c',
        `core.excludesfile=${mintIgnorePath}`,
        'check-ignore',
        '--verbose',
        '--non-matching',
        '--no-index',
        '--stdin'
      ],
      {
        cwd: checkerRepo,
        encoding: 'utf8',
        input: `${uniqueRelPaths.join('\n')}\n`,
        maxBuffer: 64 * 1024 * 1024,
        env: getSanitizedGitEnv()
      }
    );

    return parseCheckIgnoreOutput(output, mintIgnorePath);
  } catch (_error) {
    return new Set();
  }
}

function filterPathsByMintIgnore(paths, options = {}) {
  const { rootDir = null, respectMintIgnore = true } = options;
  if (!respectMintIgnore) {
    return [...(paths || [])];
  }

  const repoRoot = getRepoRoot(rootDir || process.cwd());
  const rows = (paths || []).map((entry) => ({
    original: entry,
    rel: normalizeRepoRelativePath(entry, repoRoot)
  }));

  const ignored = listMintIgnoredRepoPaths(rows.map((row) => row.rel), {
    rootDir: repoRoot
  });

  return rows
    .filter((row) => !row.rel || !ignored.has(row.rel))
    .map((row) => row.original);
}

process.on('exit', () => {
  trackedTempRepos.forEach((tempDir) => {
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (_error) {
      // Best-effort cleanup only.
    }
  });
});

module.exports = {
  toPosix,
  getRepoRoot,
  normalizeRepoRelativePath,
  getMintIgnorePath,
  listMintIgnoredRepoPaths,
  filterPathsByMintIgnore
};
