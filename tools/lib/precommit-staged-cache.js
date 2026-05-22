/**
 * @script            precommit-staged-cache
 * @category          orchestrator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             .githooks, tests, tools/lib, tools/scripts
 * @domain            docs
 * @needs             R-R29
 * @purpose-statement Shared pre-commit staged-cache helpers — fingerprint staged content plus hook inputs and persist reusable pass markers
 * @pipeline          indirect -- library module
 * @usage             const cache = require('./precommit-staged-cache');
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_NAMESPACE = 'pre-commit-expensive-suite';
const DEFAULT_MAX_ENTRIES = 25;
const DEFAULT_WATCHED_FILES = Object.freeze([
  '.githooks/pre-commit',
  'tests/run-all.js',
  'tests/integration/v2-link-audit.js',
  'tests/integration/v2-wcag-audit.js',
  'tests/unit/ai-tools-registry.test.js',
  'tests/unit/check-agent-docs-freshness.test.js',
  'tests/unit/component-governance-generators.test.js',
  'tests/unit/component-governance-utils.test.js',
  'tests/unit/copy-lint.test.js',
  'tests/unit/docs-authoring-rules.test.js',
  'tests/unit/docs-guide-sot.test.js',
  'tests/unit/docs-navigation.test.js',
  'tests/unit/docs-page-scope.test.js',
  'tests/unit/docs-path-sync.test.js',
  'tests/unit/export-portable-skills.test.js',
  'tests/unit/frontmatter-taxonomy.test.js',
  'tests/unit/links-imports.test.js',
  'tests/unit/mdx-guards.test.js',
  'tests/unit/mdx-safe-markdown.test.js',
  'tests/unit/mdx.test.js',
  'tests/unit/ownerless-governance.test.js',
  'tests/unit/precommit-staged-cache.test.js',
  'tests/unit/quality.test.js',
  'tests/unit/root-allowlist-format.test.js',
  'tests/unit/script-docs.test.js',
  'tests/unit/skill-docs.test.js',
  'tests/unit/spelling.test.js',
  'tests/unit/style-guide.test.js',
  'tests/unit/ui-template-generator.test.js',
  'tests/unit/usefulness-journey.test.js',
  'tests/unit/usefulness-rubric.test.js',
  'tools/lib/generated-artifacts.js',
  'tools/lib/precommit-staged-cache.js',
  'tools/lib/script-governance-config.js',
  'tools/scripts/enforce-generated-file-banners.js',
  'tools/scripts/generate-component-registry.js',
  'tools/scripts/generate-docs-guide-components-index.js',
  'tools/scripts/generate-docs-index.js',
  'tools/scripts/generate-pages-index.js',
  'tools/scripts/remediators/components/repair-component-metadata.js',
  'tools/scripts/remediators/content/repair-mdx-safe-markdown.js',
  'tools/scripts/remediators/content/sync-docs-paths.js',
  'tools/scripts/scan-component-imports.js',
  'tools/scripts/sync-codex-skills.js',
  'tools/scripts/validators/components/check-component-css.js',
  'tools/scripts/validators/components/check-component-docs.js',
  'tools/scripts/validators/components/check-naming-conventions.js',
  'tools/scripts/validators/content/check-mdx-safe-markdown.js',
  'tools/scripts/validators/governance/audit-script-inventory.js'
]);

function normalizeRepoPath(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function runGit(repoRoot, args, options = {}) {
  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    env: options.gitEnv || process.env
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `git ${args.join(' ')}`).trim());
  }

  return String(result.stdout || '').trim();
}

function resolveGitDir(repoRoot, options = {}) {
  return path.resolve(repoRoot, runGit(repoRoot, ['rev-parse', '--git-dir'], options));
}

function getIndexTree(repoRoot, options = {}) {
  return runGit(repoRoot, ['write-tree'], options);
}

function hashFileContent(repoRoot, relativePath) {
  const normalizedPath = normalizeRepoPath(relativePath);
  const absolutePath = path.join(repoRoot, normalizedPath);
  if (!fs.existsSync(absolutePath)) return `missing:${normalizedPath}`;

  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(absolutePath));
  return hash.digest('hex');
}

function normalizeWatchedFiles(watchedFiles = DEFAULT_WATCHED_FILES) {
  return [...new Set((watchedFiles || []).map(normalizeRepoPath).filter(Boolean))].sort();
}

function getCacheDir({ repoRoot, namespace = DEFAULT_NAMESPACE, gitEnv }) {
  return path.join(resolveGitDir(repoRoot, { gitEnv }), 'lpd-hook-cache', namespace);
}

function computeCacheKey({ repoRoot, namespace = DEFAULT_NAMESPACE, watchedFiles = DEFAULT_WATCHED_FILES, gitEnv }) {
  const normalizedFiles = normalizeWatchedFiles(watchedFiles);
  const indexTree = getIndexTree(repoRoot, { gitEnv });
  const digest = crypto.createHash('sha256');

  digest.update(`${namespace}\n${indexTree}\n`);
  normalizedFiles.forEach((relativePath) => {
    digest.update(`${relativePath}\0${hashFileContent(repoRoot, relativePath)}\n`);
  });

  return {
    namespace,
    indexTree,
    watchedFiles: normalizedFiles,
    key: digest.digest('hex')
  };
}

function getCacheFilePath({ repoRoot, namespace = DEFAULT_NAMESPACE, key, gitEnv }) {
  return path.join(getCacheDir({ repoRoot, namespace, gitEnv }), `${key}.json`);
}

function pruneCacheDir(cacheDir, maxEntries = DEFAULT_MAX_ENTRIES) {
  if (!fs.existsSync(cacheDir)) return;

  const entries = fs.readdirSync(cacheDir)
    .filter((entry) => entry.endsWith('.json'))
    .map((entry) => {
      const absolutePath = path.join(cacheDir, entry);
      const stats = fs.statSync(absolutePath);
      return {
        absolutePath,
        mtimeMs: stats.mtimeMs
      };
    })
    .sort((left, right) => right.mtimeMs - left.mtimeMs);

  entries.slice(Math.max(maxEntries, 0)).forEach((entry) => {
    fs.rmSync(entry.absolutePath, { force: true });
  });
}

function readCache(options) {
  const fingerprint = computeCacheKey(options);
  const cacheFilePath = getCacheFilePath({
    repoRoot: options.repoRoot,
    namespace: fingerprint.namespace,
    key: fingerprint.key,
    gitEnv: options.gitEnv
  });

  if (!fs.existsSync(cacheFilePath)) {
    return {
      ...fingerprint,
      cacheFilePath,
      hit: false,
      entry: null
    };
  }

  const entry = JSON.parse(fs.readFileSync(cacheFilePath, 'utf8'));
  const hit = entry.key === fingerprint.key && entry.indexTree === fingerprint.indexTree;

  return {
    ...fingerprint,
    cacheFilePath,
    hit,
    entry
  };
}

function writeCache({
  repoRoot,
  namespace = DEFAULT_NAMESPACE,
  watchedFiles = DEFAULT_WATCHED_FILES,
  metadata = {},
  maxEntries = DEFAULT_MAX_ENTRIES,
  gitEnv
}) {
  const fingerprint = computeCacheKey({ repoRoot, namespace, watchedFiles, gitEnv });
  const cacheDir = getCacheDir({ repoRoot, namespace, gitEnv });
  const cacheFilePath = getCacheFilePath({
    repoRoot,
    namespace,
    key: fingerprint.key,
    gitEnv
  });

  fs.mkdirSync(cacheDir, { recursive: true });

  const entry = {
    key: fingerprint.key,
    namespace,
    indexTree: fingerprint.indexTree,
    watchedFiles: fingerprint.watchedFiles,
    createdAt: new Date().toISOString(),
    metadata
  };

  fs.writeFileSync(cacheFilePath, `${JSON.stringify(entry, null, 2)}\n`, 'utf8');
  pruneCacheDir(cacheDir, maxEntries);

  return {
    ...fingerprint,
    cacheFilePath,
    entry
  };
}

module.exports = {
  DEFAULT_MAX_ENTRIES,
  DEFAULT_NAMESPACE,
  DEFAULT_WATCHED_FILES,
  computeCacheKey,
  getCacheDir,
  getCacheFilePath,
  normalizeWatchedFiles,
  readCache,
  writeCache
};
