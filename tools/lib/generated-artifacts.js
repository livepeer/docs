/**
 * @script            generated-artifacts
 * @category          utility
 * @purpose           governance:index-management
 * @scope             tools/lib, tools/config, .githooks, tests/unit
 * @domain            docs
 * @needs             R-R16, R-R17
 * @purpose-statement Generated artifact governance helpers — load the manifest, validate enums, and match staged files to managed artifacts
 * @pipeline          indirect — library module
 * @usage             node tools/lib/generated-artifacts.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const MANIFEST_PATH = 'tools/config/generated-artifacts.json';
const VALID_CLASS = new Set(['committed_authoritative', 'committed_derived_scoped', 'ephemeral_local']);
const VALID_COMMIT_POLICY = new Set(['required', 'manual', 'forbidden']);
const VALID_HOOK_POLICY = new Set(['check_only', 'write_and_stage', 'ignore']);
const VALID_CI_POLICY = new Set(['enforce', 'advisory', 'ignore']);
const VALID_DELTA_STRATEGY = new Set(['full', 'staged', 'source_glob', 'none']);

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

function escapeRegExp(value) {
  return String(value || '').replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

function globToRegExp(glob) {
  const normalized = toPosix(glob);
  let pattern = '^';
  for (let i = 0; i < normalized.length; i += 1) {
    const char = normalized[i];
    if (char === '*') {
      const next = normalized[i + 1];
      if (next === '*') {
        pattern += '.*';
        i += 1;
      } else {
        pattern += '[^/]*';
      }
      continue;
    }
    pattern += escapeRegExp(char);
  }
  pattern += '$';
  return new RegExp(pattern);
}

function pathMatches(pattern, repoPath) {
  return globToRegExp(pattern).test(toPosix(repoPath));
}

function uniqueSorted(values) {
  return [...new Set((values || []).map((value) => toPosix(value).trim()).filter(Boolean))].sort();
}

function readManifest(repoRoot = getRepoRoot()) {
  const manifestAbs = path.join(repoRoot, MANIFEST_PATH);
  const raw = fs.readFileSync(manifestAbs, 'utf8');
  const parsed = JSON.parse(raw);
  validateManifest(parsed);
  return parsed;
}

function validateManifest(manifest) {
  if (!manifest || typeof manifest !== 'object') {
    throw new Error('Generated artifact manifest must be an object.');
  }
  if (!Array.isArray(manifest.artifacts)) {
    throw new Error('Generated artifact manifest must define an artifacts array.');
  }

  manifest.artifacts.forEach((artifact, index) => {
    const label = `artifacts[${index}]`;
    if (!artifact || typeof artifact !== 'object') {
      throw new Error(`${label} must be an object.`);
    }
    [
      'path',
      'owner',
      'generator',
      'class',
      'commit_policy',
      'hook_policy',
      'ci_policy',
      'delta_strategy',
      'notes'
    ].forEach((field) => {
      if (!String(artifact[field] || '').trim()) {
        throw new Error(`${label}.${field} is required.`);
      }
    });
    if (!Array.isArray(artifact.sources) || artifact.sources.length === 0) {
      throw new Error(`${label}.sources must be a non-empty array.`);
    }
    if (!VALID_CLASS.has(artifact.class)) {
      throw new Error(`${label}.class has invalid value "${artifact.class}".`);
    }
    if (!VALID_COMMIT_POLICY.has(artifact.commit_policy)) {
      throw new Error(`${label}.commit_policy has invalid value "${artifact.commit_policy}".`);
    }
    if (!VALID_HOOK_POLICY.has(artifact.hook_policy)) {
      throw new Error(`${label}.hook_policy has invalid value "${artifact.hook_policy}".`);
    }
    if (!VALID_CI_POLICY.has(artifact.ci_policy)) {
      throw new Error(`${label}.ci_policy has invalid value "${artifact.ci_policy}".`);
    }
    if (!VALID_DELTA_STRATEGY.has(artifact.delta_strategy)) {
      throw new Error(`${label}.delta_strategy has invalid value "${artifact.delta_strategy}".`);
    }
  });
}

function findArtifactsForPath(repoPath, manifest = readManifest()) {
  const normalizedPath = toPosix(repoPath);
  return manifest.artifacts.filter((artifact) => pathMatches(artifact.path, normalizedPath));
}

function matchesAnyPattern(repoPath, patterns) {
  return (patterns || []).some((pattern) => pathMatches(pattern, repoPath));
}

function isArtifactAffectedByFiles(artifact, files) {
  const stagedFiles = uniqueSorted(files);
  return stagedFiles.some((repoPath) => matchesAnyPattern(repoPath, artifact.sources) || pathMatches(artifact.path, repoPath));
}

function getAffectedArtifacts(files, manifest = readManifest()) {
  const stagedFiles = uniqueSorted(files);
  return manifest.artifacts.filter((artifact) => isArtifactAffectedByFiles(artifact, stagedFiles));
}

function getForbiddenEphemeralFiles(files, manifest = readManifest()) {
  const stagedFiles = uniqueSorted(files);
  return stagedFiles.filter((repoPath) =>
    manifest.artifacts.some((artifact) =>
      artifact.class === 'ephemeral_local' &&
      artifact.commit_policy === 'forbidden' &&
      pathMatches(artifact.path, repoPath)
    )
  );
}

function getFirstArtifactByPath(repoPath, manifest = readManifest()) {
  return findArtifactsForPath(repoPath, manifest)[0] || null;
}

module.exports = {
  MANIFEST_PATH,
  VALID_CLASS,
  VALID_COMMIT_POLICY,
  VALID_HOOK_POLICY,
  VALID_CI_POLICY,
  VALID_DELTA_STRATEGY,
  getRepoRoot,
  toPosix,
  pathMatches,
  readManifest,
  validateManifest,
  findArtifactsForPath,
  matchesAnyPattern,
  isArtifactAffectedByFiles,
  getAffectedArtifacts,
  getForbiddenEphemeralFiles,
  getFirstArtifactByPath
};
