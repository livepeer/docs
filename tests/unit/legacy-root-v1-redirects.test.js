#!/usr/bin/env node
/**
 * @script            legacy-root-v1-redirects.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/scripts/redirects, tools/data/redirects, docs.json
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates legacy root-to-v1 redirect integrity, docs.json sync, root catch-all fallbacks, and legacy fallback-page cleanup behavior.
 * @pipeline          manual — targeted redirect migration coverage
 * @usage             node tests/unit/legacy-root-v1-redirects.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const syncTool = require('../../tools/scripts/redirects/sync-legacy-root-v1');
const { resolveDocPath } = require('../../tools/lib/docs-index-utils');

const REPO_ROOT = path.join(__dirname, '..', '..');
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools', 'scripts', 'redirects', 'sync-legacy-root-v1.js');
const MANIFEST_REL = syncTool.DEFAULT_MANIFEST_REL;
const FIXTURE_SOURCES = [
  '/ai/api-reference/overview',
  '/developers/developer-guide',
  '/gateways/references/go-livepeer/cli-reference',
  '/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum'
];

let errors = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'tests/unit/legacy-root-v1-redirects.test.js',
      rule: 'legacy-root-v1 redirect test',
      message: `${name}: ${error.message}`,
      line: 1
    });
  }
}

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd,
    encoding: 'utf8',
    env: process.env
  });
  if (result.status !== 0 && !options.allowFailure) {
    throw new Error(String(result.stderr || result.stdout || `exit ${result.status}`).trim());
  }
  return result;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(repoRoot, repoPath, value) {
  const absPath = path.join(repoRoot, repoPath);
  ensureDir(path.dirname(absPath));
  fs.writeFileSync(absPath, value, 'utf8');
}

function readFile(repoRoot, repoPath) {
  return fs.readFileSync(path.join(repoRoot, repoPath), 'utf8');
}

function readJson(repoRoot, repoPath) {
  return JSON.parse(readFile(repoRoot, repoPath));
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, out);
      continue;
    }
    out.push(fullPath);
  }
  return out;
}

function snapshotRepoFiles(repoRoot) {
  return new Map(
    walkFiles(repoRoot)
      .map((absPath) => [path.relative(repoRoot, absPath).split(path.sep).join('/'), fs.readFileSync(absPath, 'utf8')])
      .sort((left, right) => left[0].localeCompare(right[0]))
  );
}

function createFixtureRepo() {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'legacy-root-v1-'));
  writeFile(
    repoRoot,
    'docs.json',
    `${JSON.stringify(
      {
        navigation: {},
        redirects: [
          { source: '/developers/developer-guide', destination: '/v2/developers/portal' },
          { source: '/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum', destination: '/v2/orchestrators/setup' },
          { source: '/ai/api-reference/overview', destination: '/v2/ai/reference' },
          { source: '/gateways/references/go-livepeer/cli-reference', destination: '/v2/gateways/references/cli' },
          { source: '/v2/resources/redirect', destination: '/v2/resources/resources-portal' }
        ]
      },
      null,
      2
    )}\n`
  );
  writeFile(
    repoRoot,
    'v1/ai/api-reference/overview.mdx',
    ['---', "title: 'AI API Overview'", '---', '', '# AI API Overview', ''].join('\n')
  );
  writeFile(
    repoRoot,
    'v1/developers/guides/overview.mdx',
    ['---', "title: 'Developer Guide Overview'", '---', '', '# Developer Guide Overview', ''].join('\n')
  );
  writeFile(
    repoRoot,
    'v1/references/go-livepeer/cli-reference.mdx',
    ['---', "title: 'CLI Reference'", '---', '', '# CLI Reference', ''].join('\n')
  );
  writeFile(
    repoRoot,
    'v1/orchestrators/guides/connect-to-arbitrum.mdx',
    ['---', "title: 'Connect To Arbitrum'", '---', '', '# Connect To Arbitrum', ''].join('\n')
  );
  return repoRoot;
}

function cleanupFixtureRepo(repoRoot) {
  if (repoRoot) {
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }
}

function getFixtureCommandArgs(repoRoot, extraArgs = []) {
  return [
    SCRIPT_PATH,
    '--repo-root',
    repoRoot,
    '--docs-json',
    'docs.json',
    '--manifest',
    MANIFEST_REL,
    ...extraArgs
  ];
}

function getManagedRedirects(docsJson) {
  return (Array.isArray(docsJson?.redirects) ? docsJson.redirects : [])
    .filter((entry) => syncTool.isManagedRootSource(entry && entry.source))
    .map((entry) => ({
      source: syncTool.normalizeRoute(entry.source),
      destination: syncTool.normalizeRoute(entry.destination)
    }))
    .sort((left, right) => left.source.localeCompare(right.source));
}

function getCatchAllRedirects(docsJson) {
  return (Array.isArray(docsJson?.redirects) ? docsJson.redirects : [])
    .filter((entry) => syncTool.isManagedRootCatchAllSource(entry && entry.source))
    .map((entry) => ({
      source: syncTool.normalizeRoute(entry.source),
      destination: syncTool.normalizeRoute(entry.destination)
    }))
    .sort((left, right) => left.source.localeCompare(right.source));
}

function assertCatchAllRedirects(docsJson) {
  const expected = syncTool.ROOT_FALLBACK_REDIRECTS
    .map((entry) => ({
      source: syncTool.normalizeRoute(entry.source),
      destination: syncTool.normalizeRoute(entry.destination)
    }))
    .sort((left, right) => left.source.localeCompare(right.source));

  assert.deepStrictEqual(getCatchAllRedirects(docsJson), expected);
}

function assertNoManagedLoops(manifest) {
  const bySource = new Map(manifest.map((entry) => [syncTool.normalizeRoute(entry.source), syncTool.normalizeRoute(entry.destination)]));
  manifest.forEach((entry) => {
    const source = syncTool.normalizeRoute(entry.source);
    const destination = syncTool.normalizeRoute(entry.destination);
    assert.notStrictEqual(source, destination, `${source} must not self-redirect`);
    assert.ok(!bySource.has(destination), `${source} unexpectedly redirects into another managed source: ${destination}`);
  });
}

function writeLegacyFallbackPage(repoRoot, source) {
  writeFile(
    repoRoot,
    syncTool.getCompatibilityPageRel(source),
    [
      '---',
      "title: 'Legacy fallback'",
      '---',
      '',
      '{/*',
      `generated-file-banner: ${syncTool.GENERATED_MARKER}`,
      'Generation Script: tools/scripts/redirects/sync-legacy-root-v1.js',
      'Purpose: Legacy generated fallback page',
      'Run when: Never',
      'Run command: node tools/scripts/redirects/sync-legacy-root-v1.js --write',
      '*/}',
      '',
      '# Legacy fallback',
      ''
    ].join('\n')
  );
}

function runTests() {
  errors = [];
  console.log('🧪 Legacy Root v1 Redirect Tests');

  runCase('Repo manifest matches exact docs.json redirects and root catch-all fallbacks', () => {
    const manifest = readJson(REPO_ROOT, MANIFEST_REL);
    const docsJson = readJson(REPO_ROOT, 'docs.json');

    syncTool.validateManifest(REPO_ROOT, manifest);
    assertNoManagedLoops(manifest);

    const manifestSources = manifest.map((entry) => syncTool.normalizeRoute(entry.source));
    const docsSources = syncTool.collectManagedRootRedirectSources(docsJson);
    assert.deepStrictEqual(docsSources, manifestSources);

    const manifestBySource = new Map(
      manifest.map((entry) => [syncTool.normalizeRoute(entry.source), syncTool.normalizeRoute(entry.destination)])
    );
    const managedRedirects = getManagedRedirects(docsJson);
    assert.strictEqual(managedRedirects.length, manifest.length);

    managedRedirects.forEach((entry) => {
      const expectedDestination = manifestBySource.get(entry.source);
      assert.strictEqual(entry.destination, expectedDestination, `${entry.source} destination drifted from manifest`);
      assert.ok(resolveDocPath(entry.destination, REPO_ROOT), `${entry.destination} must resolve to a v1 file`);
    });

    assertCatchAllRedirects(docsJson);
    assert.deepStrictEqual(syncTool.collectManagedGeneratedPages(REPO_ROOT), []);

    const versionedRedirect = docsJson.redirects.find((entry) => entry && entry.source === '/v2/resources/redirect');
    assert.ok(versionedRedirect, 'Expected existing versioned redirect to remain present');
    assert.strictEqual(versionedRedirect.destination, '/v2/resources/resources-portal');
  });

  runCase('Sync script bootstraps outputs, installs catch-alls, and is idempotent', () => {
    const repoRoot = createFixtureRepo();
    try {
      runCommand('node', getFixtureCommandArgs(repoRoot, ['--bootstrap-manifest', '--write']), { cwd: REPO_ROOT });

      const manifest = readJson(repoRoot, MANIFEST_REL);
      assert.strictEqual(manifest.length, FIXTURE_SOURCES.length);
      syncTool.validateManifest(repoRoot, manifest);

      const docsJson = readJson(repoRoot, 'docs.json');
      const managedRedirects = getManagedRedirects(docsJson);
      assert.deepStrictEqual(
        managedRedirects,
        manifest.map((entry) => ({
          source: syncTool.normalizeRoute(entry.source),
          destination: syncTool.normalizeRoute(entry.destination)
        }))
      );
      assertCatchAllRedirects(docsJson);
      assert.deepStrictEqual(syncTool.collectManagedGeneratedPages(repoRoot), []);

      syncTool.MANAGED_ROOT_SEGMENTS.forEach((segment) => {
        assert.ok(!fs.existsSync(path.join(repoRoot, segment)), `${segment}/ should not be created by redirect sync`);
      });

      const beforeSecondRun = snapshotRepoFiles(repoRoot);
      runCommand('node', getFixtureCommandArgs(repoRoot, ['--bootstrap-manifest', '--write']), { cwd: REPO_ROOT });
      const afterSecondRun = snapshotRepoFiles(repoRoot);

      assert.deepStrictEqual([...afterSecondRun.keys()], [...beforeSecondRun.keys()], 'Second run changed the fixture file set');
      beforeSecondRun.forEach((content, relPath) => {
        assert.strictEqual(afterSecondRun.get(relPath), content, `${relPath} changed on idempotent rerun`);
      });
    } finally {
      cleanupFixtureRepo(repoRoot);
    }
  });

  runCase('Sync script removes previously generated fallback pages', () => {
    const repoRoot = createFixtureRepo();
    try {
      writeLegacyFallbackPage(repoRoot, '/ai/api-reference/overview');
      writeLegacyFallbackPage(repoRoot, '/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum');

      assert.deepStrictEqual(syncTool.collectManagedGeneratedPages(repoRoot), [
        'ai/api-reference/overview.mdx',
        'orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx'
      ]);

      runCommand('node', getFixtureCommandArgs(repoRoot, ['--bootstrap-manifest', '--write']), { cwd: REPO_ROOT });

      assert.deepStrictEqual(syncTool.collectManagedGeneratedPages(repoRoot), []);
      assert.ok(!fs.existsSync(path.join(repoRoot, 'ai')), 'ai/ should be removed after legacy fallback cleanup');
      assert.ok(!fs.existsSync(path.join(repoRoot, 'orchestrators')), 'orchestrators/ should be removed after legacy fallback cleanup');

      const docsJson = readJson(repoRoot, 'docs.json');
      assertCatchAllRedirects(docsJson);
    } finally {
      cleanupFixtureRepo(repoRoot);
    }
  });

  return { errors, passed: errors.length === 0, total: 3 };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\n✅ legacy root v1 redirect tests passed (${result.total} cases)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} legacy root v1 redirect test failure(s)`);
  result.errors.forEach((error) => console.error(`  - ${error.message}`));
  process.exit(1);
}

module.exports = { runTests };
