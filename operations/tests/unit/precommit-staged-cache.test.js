#!/usr/bin/env node
/**
 * @script            precommit-staged-cache.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/lib/precommit-staged-cache.js
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Tests precommit-staged-cache.js — validates staged-tree cache hits, invalidation, and pruning
 * @pipeline          P1, manual
 * @usage             node tests/unit/precommit-staged-cache.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const {
  getCacheDir,
  readCache,
  writeCache
} = require('../../../tools/lib/precommit-staged-cache');

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absolutePath, content) {
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, content, 'utf8');
}

function buildGitEnv() {
  const env = { ...process.env };
  Object.keys(env).forEach((key) => {
    if (key.startsWith('GIT_')) {
      delete env[key];
    }
  });
  return env;
}

function runGit(repoRoot, args) {
  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    env: buildGitEnv()
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `git ${args.join(' ')}`).trim());
  }

  return String(result.stdout || '').trim();
}

function initRepo() {
  const repoRoot = mkTmpDir('precommit-staged-cache-');
  const hooksDir = path.join(repoRoot, '.git-hooks-disabled');

  runGit(repoRoot, ['init']);
  runGit(repoRoot, ['config', 'user.name', 'Codex Test']);
  runGit(repoRoot, ['config', 'user.email', 'codex@example.com']);
  fs.mkdirSync(hooksDir, { recursive: true });
  runGit(repoRoot, ['config', 'core.hooksPath', hooksDir]);

  writeFile(path.join(repoRoot, '.githooks/pre-commit'), '#!/bin/bash\necho precommit\n');
  writeFile(path.join(repoRoot, 'tests/run-all.js'), 'module.exports = {};\n');
  writeFile(path.join(repoRoot, 'tests/unit/precommit-staged-cache.test.js'), '// fixture\n');
  writeFile(path.join(repoRoot, 'tools/lib/precommit-staged-cache.js'), 'module.exports = {};\n');
  writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n');

  runGit(repoRoot, ['add', '.']);
  runGit(repoRoot, ['commit', '-m', 'test fixture']);

  return repoRoot;
}

async function runTests() {
  const errors = [];
  const watchedFiles = [
    '.githooks/pre-commit',
    'tests/run-all.js',
    'tools/lib/precommit-staged-cache.js'
  ];

  try {
    const repoRoot = initRepo();
    writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n\nUpdated.\n');
    runGit(repoRoot, ['add', 'docs/example.mdx']);

    const gitEnv = buildGitEnv();
    const initial = readCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });
    assert.strictEqual(initial.hit, false, 'cache should miss before first write');

    const written = writeCache({
      repoRoot,
      watchedFiles,
      namespace: 'test-precommit-cache',
      metadata: { branch: 'docs-v2-dev' },
      gitEnv
    });
    assert.ok(fs.existsSync(written.cacheFilePath), 'cache file should be written');

    const reread = readCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });
    assert.strictEqual(reread.hit, true, 'cache should hit after write for unchanged staged tree');
    assert.strictEqual(reread.entry.metadata.branch, 'docs-v2-dev');
    console.log('   ✓ cache hits after recording an unchanged staged tree');
  } catch (error) {
    errors.push({ message: `cache hit after write: ${error.message}` });
  }

  try {
    const repoRoot = initRepo();
    const gitEnv = buildGitEnv();
    writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n\nUpdated.\n');
    runGit(repoRoot, ['add', 'docs/example.mdx']);
    writeCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });

    writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n\nUpdated twice.\n');
    runGit(repoRoot, ['add', 'docs/example.mdx']);

    const changedTree = readCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });
    assert.strictEqual(changedTree.hit, false, 'cache should miss when staged content changes');
    console.log('   ✓ cache invalidates when the staged tree changes');
  } catch (error) {
    errors.push({ message: `staged tree invalidation: ${error.message}` });
  }

  try {
    const repoRoot = initRepo();
    const gitEnv = buildGitEnv();
    writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n\nUpdated.\n');
    runGit(repoRoot, ['add', 'docs/example.mdx']);
    writeCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });

    writeFile(path.join(repoRoot, 'tests/run-all.js'), 'module.exports = { changed: true };\n');

    const changedWatcher = readCache({ repoRoot, watchedFiles, namespace: 'test-precommit-cache', gitEnv });
    assert.strictEqual(changedWatcher.hit, false, 'cache should miss when a watched hook file changes');
    console.log('   ✓ cache invalidates when watched hook files change');
  } catch (error) {
    errors.push({ message: `watched file invalidation: ${error.message}` });
  }

  try {
    const repoRoot = initRepo();
    const gitEnv = buildGitEnv();
    writeFile(path.join(repoRoot, 'docs/example.mdx'), '# Example\n\nUpdated.\n');
    runGit(repoRoot, ['add', 'docs/example.mdx']);

    writeCache({
      repoRoot,
      watchedFiles,
      namespace: 'test-precommit-cache',
      metadata: { id: 1 },
      maxEntries: 1,
      gitEnv
    });

    writeFile(path.join(repoRoot, 'docs/example-2.mdx'), '# Another\n');
    runGit(repoRoot, ['add', 'docs/example-2.mdx']);
    writeCache({
      repoRoot,
      watchedFiles,
      namespace: 'test-precommit-cache',
      metadata: { id: 2 },
      maxEntries: 1,
      gitEnv
    });

    const cacheDir = getCacheDir({ repoRoot, namespace: 'test-precommit-cache', gitEnv });
    const entries = fs.readdirSync(cacheDir).filter((entry) => entry.endsWith('.json'));
    assert.strictEqual(entries.length, 1, 'cache pruning should keep only the requested number of entries');
    console.log('   ✓ cache pruning removes stale entries');
  } catch (error) {
    errors.push({ message: `cache pruning: ${error.message}` });
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings: [],
    total: 4
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ precommit-staged-cache tests passed (${result.total} cases)`);
        process.exit(0);
      }

      console.error(`\n❌ ${result.errors.length} precommit-staged-cache test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ precommit-staged-cache tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
