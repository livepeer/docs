#!/usr/bin/env node
/**
 * @script            migrate-assets-to-branch.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/scripts/remediators/assets, tools/scripts/audit-media-assets.js
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo
 * @pipeline          manual — not yet in pipeline
 * @dualmode          --dry-run (validator) | --write (remediator)
 * @usage             node tests/unit/migrate-assets-to-branch.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const migrateAssets = require('../../tools/scripts/remediators/assets/migrate-assets-to-branch');

const SCRIPT_PATH = path.join(
  __dirname,
  '..',
  '..',
  'tools',
  'scripts',
  'remediators',
  'assets',
  'migrate-assets-to-branch.js'
);

let errors = [];

function runCommand(command, args, options = {}) {
  const env = { ...process.env };
  delete env.GIT_DIR;
  delete env.GIT_WORK_TREE;
  delete env.GIT_INDEX_FILE;
  delete env.GIT_OBJECT_DIRECTORY;
  delete env.GIT_ALTERNATE_OBJECT_DIRECTORIES;
  delete env.GIT_COMMON_DIR;
  delete env.GIT_PREFIX;

  const result = spawnSync(command, args, {
    cwd: options.cwd,
    encoding: 'utf8',
    env
  });

  if (result.status !== 0 && !options.allowFailure) {
    const detail = String(result.stderr || result.stdout || `exit ${result.status}`).trim();
    throw new Error(`${command} ${args.join(' ')} failed: ${detail}`);
  }

  return result;
}

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'migrate-assets-to-branch unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/migrate-assets-to-branch.test.js'
    });
  }
}

function writeFile(repoRoot, repoPath, value) {
  const absPath = path.join(repoRoot, repoPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, value);
}

function createFixtureRepo() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'migrate-assets-repo-'));
  const remoteDir = path.join(tempRoot, 'remote.git');
  const repoDir = path.join(tempRoot, 'repo');

  fs.mkdirSync(repoDir, { recursive: true });
  runCommand('git', ['init', '--bare', remoteDir]);
  runCommand('git', ['init', '-b', 'docs-v2'], { cwd: repoDir });
  runCommand('git', ['config', 'user.name', 'Codex Test'], { cwd: repoDir });
  runCommand('git', ['config', 'user.email', 'codex@example.com'], { cwd: repoDir });
  runCommand('git', ['remote', 'add', 'origin', remoteDir], { cwd: repoDir });

  writeFile(
    repoDir,
    'snippets/assets/media/videos/HeroBackground.mp4',
    'fake-video-binary'
  );
  writeFile(
    repoDir,
    'v2/example.mdx',
    '<Video src="/snippets/assets/media/videos/HeroBackground.mp4" title="Demo" />\n'
  );
  writeFile(
    repoDir,
    'tasks/reports/media-audit/media-audit-manifest.json',
    `${JSON.stringify({
      assets: [
        {
          path: 'snippets/assets/media/videos/HeroBackground.mp4',
          migration_target: 'migrate_r2',
          mdx_references: ['v2/example.mdx']
        }
      ]
    }, null, 2)}\n`
  );
  writeFile(
    repoDir,
    'tests/package.json',
    `${JSON.stringify({
      name: 'fixture-tests',
      private: true,
      scripts: {
        test: 'node ok.js'
      }
    }, null, 2)}\n`
  );
  writeFile(repoDir, 'tests/ok.js', "console.log('ok');\n");

  runCommand('git', ['add', '.'], { cwd: repoDir });
  runCommand('git', ['commit', '-m', 'initial docs-v2 fixture'], { cwd: repoDir });
  runCommand('git', ['push', '-u', 'origin', 'docs-v2'], { cwd: repoDir });

  const existingAssetsBranch = runCommand(
    'git',
    ['show-ref', '--verify', '--quiet', 'refs/heads/docs-v2-assets'],
    {
      cwd: repoDir,
      allowFailure: true
    }
  );
  if (existingAssetsBranch.status === 0) {
    runCommand('git', ['branch', '-D', 'docs-v2-assets'], { cwd: repoDir });
  }
  runCommand('git', ['checkout', '--orphan', 'docs-v2-assets'], { cwd: repoDir });
  runCommand('git', ['rm', '-rf', '.'], { cwd: repoDir });
  writeFile(repoDir, '.nojekyll', '');
  runCommand('git', ['add', '.nojekyll'], { cwd: repoDir });
  runCommand('git', ['commit', '-m', 'init assets branch'], { cwd: repoDir });
  runCommand('git', ['push', '-u', 'origin', 'docs-v2-assets'], { cwd: repoDir });
  runCommand('git', ['checkout', 'docs-v2'], { cwd: repoDir });
  runCommand('git', ['fetch', 'origin', 'docs-v2-assets'], { cwd: repoDir });

  return { tempRoot, remoteDir, repoDir };
}

function cleanupFixtureRepo(fixture) {
  if (!fixture) return;
  fs.rmSync(fixture.tempRoot, { recursive: true, force: true });
}

function runTests() {
  errors = [];

  console.log('🧪 Migrate Assets To Branch Unit Tests');

  runCase('Parses default args as dry-run with default targets', () => {
    const parsed = migrateAssets.parseArgs([]);
    assert.strictEqual(parsed.mode, 'dry-run');
    assert.deepStrictEqual(parsed.targets, ['migrate_r2', 'migrate_cloudinary']);
    assert.strictEqual(parsed.skipCopy, false);
    assert.strictEqual(parsed.skipRefs, false);
  });

  runCase('Flags basename-only references as ambiguous', () => {
    const analysis = migrateAssets.analyzeSourceReference(
      'v2/example.mdx',
      'snippets/assets/media/videos/HeroBackground.mp4',
      '<Video src="HeroBackground.mp4" title="Demo" />'
    );

    assert.strictEqual(analysis.ambiguousBasenameOnly, true);
    assert.strictEqual(analysis.needsRewrite, false);
  });

  runCase('Rewrites rooted and relative references to canonical raw GitHub URLs', () => {
    const rooted = migrateAssets.rewriteSourceReference(
      'v2/example.mdx',
      'snippets/assets/media/videos/HeroBackground.mp4',
      '<Video src="/snippets/assets/media/videos/HeroBackground.mp4" />'
    );
    const relative = migrateAssets.rewriteSourceReference(
      'v2/example.mdx',
      'snippets/assets/media/videos/HeroBackground.mp4',
      '<Video src="../snippets/assets/media/videos/HeroBackground.mp4" />'
    );

    assert.ok(rooted.content.includes(migrateAssets.buildCanonicalAssetUrl('snippets/assets/media/videos/HeroBackground.mp4')));
    assert.ok(relative.content.includes(migrateAssets.buildCanonicalAssetUrl('snippets/assets/media/videos/HeroBackground.mp4')));
  });

  runCase('Write mode copies, rewrites, and deletes in a temp repo fixture', () => {
    const fixture = createFixtureRepo();

    try {
      const result = runCommand(
        'node',
        [
          SCRIPT_PATH,
          '--manifest',
          'tasks/reports/media-audit/media-audit-manifest.json',
          '--file',
          'snippets/assets/media/videos/HeroBackground.mp4',
          '--write'
        ],
        {
          cwd: fixture.repoDir
        }
      );

      assert.strictEqual(result.status, 0);

      const fetchResult = runCommand('git', ['fetch', 'origin', 'docs-v2-assets'], { cwd: fixture.repoDir });
      assert.strictEqual(fetchResult.status, 0);

      const remoteTree = runCommand(
        'git',
        ['--git-dir', fixture.remoteDir, 'ls-tree', '-r', '--name-only', 'docs-v2-assets'],
        { cwd: fixture.repoDir }
      );
      assert.ok(remoteTree.stdout.includes('snippets/assets/media/videos/HeroBackground.mp4'));

      const rewritten = fs.readFileSync(path.join(fixture.repoDir, 'v2/example.mdx'), 'utf8');
      assert.ok(rewritten.includes('https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/HeroBackground.mp4'));
      assert.strictEqual(fs.existsSync(path.join(fixture.repoDir, 'snippets/assets/media/videos/HeroBackground.mp4')), false);

      const sourceLog = runCommand('git', ['log', '--pretty=%s', '-2'], { cwd: fixture.repoDir });
      assert.ok(sourceLog.stdout.includes('chore(assets): rewrite MDX/JSX references to docs-v2-assets URLs [migrate-assets-to-branch]'));
      assert.ok(sourceLog.stdout.includes('chore(assets): remove migrated assets from docs-v2 working tree [migrate-assets-to-branch]'));
    } finally {
      cleanupFixtureRepo(fixture);
    }
  });

  return {
    errors,
    passed: errors.length === 0,
    total: 4
  };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\n✅ migrate-assets-to-branch unit tests passed (${result.total} cases)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} migrate-assets-to-branch unit test failure(s)`);
  result.errors.forEach((error) => console.error(`  - ${error.message}`));
  process.exit(1);
}

module.exports = { runTests };
