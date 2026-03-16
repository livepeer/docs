#!/usr/bin/env node
/**
 * @script            docs-path-sync.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/scripts/lib, tools/scripts/validators/content, tools/scripts/remediators/content, lpd
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Unit tests for docs path sync — validates staged move detection, deterministic docs.json/reference rewrites, validator behavior, and remediator write mode.
 * @pipeline          P1, P3
 * @dualmode          --check (validator) | fixture-driven script execution
 * @usage             node tests/unit/docs-path-sync.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const syncLib = require('../../tools/scripts/lib/docs-path-sync');
const remediator = require('../../tools/scripts/remediators/content/sync-docs-paths');
const validator = require('../../tools/scripts/validators/content/check-docs-path-sync');

const REMEDIATOR_PATH = path.join(__dirname, '..', '..', 'tools', 'scripts', 'remediators', 'content', 'sync-docs-paths.js');
const VALIDATOR_PATH = path.join(__dirname, '..', '..', 'tools', 'scripts', 'validators', 'content', 'check-docs-path-sync.js');
const REPO_ROOT = path.join(__dirname, '..', '..');
const STATIC_GIT_ENV_VARS = [
  'GIT_ALTERNATE_OBJECT_DIRECTORIES',
  'GIT_AUTHOR_DATE',
  'GIT_AUTHOR_EMAIL',
  'GIT_AUTHOR_NAME',
  'GIT_COMMON_DIR',
  'GIT_COMMITTER_DATE',
  'GIT_COMMITTER_EMAIL',
  'GIT_COMMITTER_NAME',
  'GIT_CONFIG',
  'GIT_CONFIG_COUNT',
  'GIT_CONFIG_PARAMETERS',
  'GIT_CONFIG_KEY_0',
  'GIT_CONFIG_VALUE_0',
  'GIT_DIR',
  'GIT_GRAFT_FILE',
  'GIT_INDEX_FILE',
  'GIT_INDEX_VERSION',
  'GIT_LITERAL_PATHSPECS',
  'GIT_OBJECT_DIRECTORY',
  'GIT_PREFIX',
  'GIT_QUARANTINE_PATH',
  'GIT_WORK_TREE',
];
const LOCAL_GIT_ENV_VARS = (() => {
  const envProbe = spawnSync('git', ['rev-parse', '--local-env-vars'], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: process.env,
  });
  const discovered = String(envProbe.stdout || '')
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);
  return [...new Set([...STATIC_GIT_ENV_VARS, ...discovered])];
})();

let errors = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({ file: 'tests/unit/docs-path-sync.test.js', rule: 'docs-path-sync unit', message: `${name}: ${error.message}`, line: 1 });
  }
}

function runCommand(command, args, options = {}) {
  const env = { ...process.env };
  for (const name of LOCAL_GIT_ENV_VARS) delete env[name];

  const result = spawnSync(command, args, { cwd: options.cwd, encoding: 'utf8', env });
  if (result.status !== 0 && !options.allowFailure) throw new Error(String(result.stderr || result.stdout || `exit ${result.status}`).trim());
  return result;
}

function writeFile(repoRoot, repoPath, value) {
  const absPath = path.join(repoRoot, repoPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, value, 'utf8');
}

function readFile(repoRoot, repoPath) {
  return fs.readFileSync(path.join(repoRoot, repoPath), 'utf8');
}

function createFixtureRepo() {
  const repoDir = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-path-sync-'));
  runCommand('git', ['init', '-b', 'docs-v2'], { cwd: repoDir });
  runCommand('git', ['config', 'user.name', 'Codex Test'], { cwd: repoDir });
  runCommand('git', ['config', 'user.email', 'codex@example.com'], { cwd: repoDir });
  writeFile(repoDir, 'docs.json', `${JSON.stringify({ navigation: { versions: [{ version: 'v2', languages: [{ language: 'en', tab: 'Orchestrators', pages: ['v2/orchestrators/concepts/role', 'v2/orchestrators/overview'] }] }] }, redirects: [{ source: '/v2/orchestrators/concepts/legacy-role', destination: '/v2/orchestrators/concepts/role' }] }, null, 2)}\n`);
  writeFile(repoDir, 'v2/orchestrators/concepts/role.mdx', '# Role\n');
  writeFile(repoDir, 'v2/orchestrators/overview.mdx', 'import RolePage from "./concepts/role.mdx"\n\n[Role](./concepts/role)\n');
  runCommand('git', ['add', '.'], { cwd: repoDir });
  runCommand('git', ['commit', '-m', 'initial fixture'], { cwd: repoDir });
  return repoDir;
}

function cleanupFixtureRepo(repoDir) {
  if (repoDir) fs.rmSync(repoDir, { recursive: true, force: true });
}

function runTests() {
  errors = [];
  console.log('🧪 Docs Path Sync Unit Tests');

  runCase('Parses remediator and validator args', () => {
    const parsedRemediator = remediator.parseArgs(['--write', '--stage', '--from', 'a.mdx', '--to', 'b.mdx']);
    assert.strictEqual(parsedRemediator.mode, 'write');
    assert.strictEqual(parsedRemediator.stage, true);
    const parsedValidator = validator.parseArgs(['--json', '--from', 'a.mdx', '--to', 'b.mdx']);
    assert.strictEqual(parsedValidator.json, true);
  });

  runCase('Collects staged git mv page pairs', () => {
    const repoDir = createFixtureRepo();
    try {
      runCommand('git', ['mv', 'v2/orchestrators/concepts/role.mdx', 'v2/orchestrators/concepts/r-role.mdx'], { cwd: repoDir });
      const result = syncLib.collectMovePairs(repoDir);
      assert.strictEqual(result.pairs.length, 1);
      assert.strictEqual(result.pairs[0].targetRoute, 'v2/orchestrators/concepts/r-role');
    } finally {
      cleanupFixtureRepo(repoDir);
    }
  });

  runCase('Infers delete-add moves with matching basename stem', () => {
    const repoDir = createFixtureRepo();
    try {
      runCommand('git', ['rm', 'v2/orchestrators/concepts/role.mdx'], { cwd: repoDir });
      writeFile(repoDir, 'v2/orchestrators/renamed/role.mdx', '# Role moved\n');
      runCommand('git', ['add', 'v2/orchestrators/renamed/role.mdx'], { cwd: repoDir });
      const result = syncLib.collectMovePairs(repoDir);
      assert.strictEqual(result.pairs.length, 1);
      assert.strictEqual(result.pairs[0].type, 'inferred');
    } finally {
      cleanupFixtureRepo(repoDir);
    }
  });

  runCase('Validator reports pending sync work before rewrite', () => {
    const repoDir = createFixtureRepo();
    try {
      runCommand('git', ['mv', 'v2/orchestrators/concepts/role.mdx', 'v2/orchestrators/concepts/r-role.mdx'], { cwd: repoDir });
      const result = runCommand('node', [VALIDATOR_PATH, '--json'], { cwd: repoDir, allowFailure: true });
      assert.strictEqual(result.status, 1);
      const parsed = JSON.parse(result.stdout);
      assert.ok(parsed.docsJsonChanges > 0);
      assert.ok(parsed.fileChanges > 0);
    } finally {
      cleanupFixtureRepo(repoDir);
    }
  });

  runCase('Remediator rewrites docs.json and governed path references', () => {
    const repoDir = createFixtureRepo();
    try {
      runCommand('git', ['mv', 'v2/orchestrators/concepts/role.mdx', 'v2/orchestrators/concepts/r-role.mdx'], { cwd: repoDir });
      runCommand('node', [REMEDIATOR_PATH, '--write', '--stage'], { cwd: repoDir });
      const docsJson = JSON.parse(readFile(repoDir, 'docs.json'));
      assert.ok(docsJson.navigation.versions[0].languages[0].pages.includes('v2/orchestrators/concepts/r-role'));
      assert.strictEqual(docsJson.redirects[0].destination, '/v2/orchestrators/concepts/r-role');
      const overview = readFile(repoDir, 'v2/orchestrators/overview.mdx');
      assert.ok(overview.includes('./concepts/r-role.mdx'));
      assert.ok(overview.includes('./concepts/r-role)'));
    } finally {
      cleanupFixtureRepo(repoDir);
    }
  });

  return { errors, passed: errors.length === 0, total: 5 };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\n✅ docs path sync unit tests passed (${result.total} cases)`);
    process.exit(0);
  }
  console.error(`\n❌ ${result.errors.length} docs path sync unit test failure(s)`);
  result.errors.forEach((error) => console.error(`  - ${error.message}`));
  process.exit(1);
}

module.exports = { runTests };
