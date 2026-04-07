/**
 * @script            root-governance
 * @category          utility
 * @type              utility
 * @purpose           governance:root-management
 * @scope             tools/lib/governance, operations/governance/config, operations/scripts, operations/tests, docs-guide
 * @owner             docs
 * @needs             R-R14, R-R16, R-R17
 * @purpose-statement Root governance helpers — load the canonical manifest, validate the governed root contract, and project derived allowlist/report state.
 * @pipeline          indirect — library module
 * @usage             const { readManifest, getAllowlistEntries } = require('../../tools/lib/governance/root-governance');
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const MANIFEST_PATH = 'operations/governance/config/root-governance.json';
const VALID_ENTRY_TYPES = new Set(['file', 'directory']);
const VALID_CLASSES = new Set([
  'platform_contract',
  'docs_runtime',
  'public_artifact',
  'tool_adapter',
  'subsystem_root',
  'temporary_exception',
  'repo_entrypoint'
]);
const VALID_ROOT_BASIS = new Set([
  'fixed_path',
  'public_url',
  'repo_entrypoint',
  'tool_discovery',
  'approved_subsystem',
  'approved_exception'
]);
const VALID_LIFECYCLE = new Set(['active', 'legacy_exception', 'pending_removal']);
const RESERVED_UNTRACKED_ROOTS = new Set(['.git']);

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

function normalizeEntryPath(value) {
  return toPosix(value).trim().replace(/^\/+|\/+$/g, '');
}

function sortStrings(values) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

function readManifest(repoRoot = getRepoRoot()) {
  const absPath = path.join(repoRoot, MANIFEST_PATH);
  const parsed = JSON.parse(fs.readFileSync(absPath, 'utf8'));
  validateManifest(parsed);
  return parsed;
}

function validateManifest(manifest) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new Error('Root governance manifest must be an object.');
  }
  if (!manifest.generated_outputs || typeof manifest.generated_outputs !== 'object') {
    throw new Error('Root governance manifest must define generated_outputs.');
  }
  if (!Array.isArray(manifest.entries) || manifest.entries.length === 0) {
    throw new Error('Root governance manifest must define a non-empty entries array.');
  }
  if (!Array.isArray(manifest.forbidden_root_artifacts)) {
    throw new Error('Root governance manifest must define forbidden_root_artifacts.');
  }
  if (!Array.isArray(manifest.local_compatibility)) {
    throw new Error('Root governance manifest must define local_compatibility.');
  }
  if (!Array.isArray(manifest.placement_matrix)) {
    throw new Error('Root governance manifest must define placement_matrix.');
  }

  const seen = new Set();
  manifest.entries.forEach((entry, index) => {
    const label = `entries[${index}]`;
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`${label} must be an object.`);
    }

    ['path', 'entry_type', 'class', 'owner', 'root_basis', 'lifecycle', 'notes'].forEach((field) => {
      if (!String(entry[field] || '').trim()) {
        throw new Error(`${label}.${field} is required.`);
      }
    });

    const normalizedPath = normalizeEntryPath(entry.path);
    if (!normalizedPath) {
      throw new Error(`${label}.path must not be empty.`);
    }
    if (normalizedPath.includes('/')) {
      throw new Error(`${label}.path must be a root-only entry.`);
    }
    if (seen.has(normalizedPath)) {
      throw new Error(`Duplicate root governance entry: ${normalizedPath}`);
    }
    seen.add(normalizedPath);

    if (!VALID_ENTRY_TYPES.has(entry.entry_type)) {
      throw new Error(`${label}.entry_type has invalid value "${entry.entry_type}".`);
    }
    if (!VALID_CLASSES.has(entry.class)) {
      throw new Error(`${label}.class has invalid value "${entry.class}".`);
    }
    if (!VALID_ROOT_BASIS.has(entry.root_basis)) {
      throw new Error(`${label}.root_basis has invalid value "${entry.root_basis}".`);
    }
    if (!VALID_LIFECYCLE.has(entry.lifecycle)) {
      throw new Error(`${label}.lifecycle has invalid value "${entry.lifecycle}".`);
    }
    if (!Array.isArray(entry.doc_refs) || entry.doc_refs.length === 0) {
      throw new Error(`${label}.doc_refs must be a non-empty array.`);
    }
    entry.doc_refs.forEach((docRef) => {
      const normalizedDocRef = toPosix(docRef).trim();
      if (!normalizedDocRef || normalizedDocRef.startsWith('/')) {
        throw new Error(`${label}.doc_refs must contain repo-relative paths.`);
      }
    });

    if (entry.generator && !String(entry.generator).trim()) {
      throw new Error(`${label}.generator must be a non-empty string when provided.`);
    }
    if (entry.sources && (!Array.isArray(entry.sources) || entry.sources.length === 0)) {
      throw new Error(`${label}.sources must be a non-empty array when provided.`);
    }
    if (entry.public_contract) {
      if (!String(entry.public_contract.url_path || '').trim()) {
        throw new Error(`${label}.public_contract.url_path is required.`);
      }
      if (!String(entry.public_contract.purpose || '').trim()) {
        throw new Error(`${label}.public_contract.purpose is required.`);
      }
    }
  });

  const activePaths = new Set(getEntriesByLifecycle(manifest, 'active').map((entry) => normalizeEntryPath(entry.path)));
  manifest.forbidden_root_artifacts.forEach((entry, index) => {
    const label = `forbidden_root_artifacts[${index}]`;
    const normalizedPath = normalizeEntryPath(entry.path);
    if (!normalizedPath) {
      throw new Error(`${label}.path is required.`);
    }
    if (normalizedPath.includes('/')) {
      throw new Error(`${label}.path must be a root-only entry.`);
    }
    if (activePaths.has(normalizedPath)) {
      throw new Error(`${label}.path conflicts with an active governed root entry: ${normalizedPath}`);
    }
    if (!String(entry.reason || '').trim()) {
      throw new Error(`${label}.reason is required.`);
    }
  });

  manifest.local_compatibility.forEach((entry, index) => {
    const label = `local_compatibility[${index}]`;
    const normalizedPath = normalizeEntryPath(entry.path);
    if (!normalizedPath || normalizedPath.includes('/')) {
      throw new Error(`${label}.path must be a root-only entry.`);
    }
    if (!String(entry.class || '').trim()) {
      throw new Error(`${label}.class is required.`);
    }
    if (!String(entry.tracking_policy || '').trim()) {
      throw new Error(`${label}.tracking_policy is required.`);
    }
    if (!String(entry.notes || '').trim()) {
      throw new Error(`${label}.notes is required.`);
    }
  });
}

function getEntriesByLifecycle(manifest, lifecycle) {
  return manifest.entries.filter((entry) => entry.lifecycle === lifecycle);
}

function getActiveEntries(manifest = readManifest()) {
  return getEntriesByLifecycle(manifest, 'active');
}

function getTemporaryExceptionEntries(manifest = readManifest()) {
  return getActiveEntries(manifest).filter((entry) => entry.class === 'temporary_exception');
}

function getAllowlistEntries(manifest = readManifest()) {
  return sortStrings(getActiveEntries(manifest).map((entry) => normalizeEntryPath(entry.path)));
}

function getForbiddenEntries(manifest = readManifest()) {
  return sortStrings(manifest.forbidden_root_artifacts.map((entry) => normalizeEntryPath(entry.path)));
}

function getLocalCompatibilityEntries(manifest = readManifest()) {
  return sortStrings(manifest.local_compatibility.map((entry) => normalizeEntryPath(entry.path)));
}

function getRequiredPublicArtifacts(manifest = readManifest()) {
  return getActiveEntries(manifest).filter((entry) => entry.class === 'public_artifact');
}

function getRequiredGeneratedEntries(manifest = readManifest()) {
  return getActiveEntries(manifest).filter((entry) => String(entry.generator || '').trim());
}

function collectCurrentRootEntries(repoRoot = getRepoRoot()) {
  return sortStrings(
    fs
      .readdirSync(repoRoot, { withFileTypes: true })
      .map((entry) => entry.name)
      .filter((name) => !RESERVED_UNTRACKED_ROOTS.has(name))
      .map(normalizeEntryPath)
      .filter(Boolean)
  );
}

function getTrackedUnexpectedRootEntries(manifest = readManifest(), repoRoot = getRepoRoot()) {
  const currentEntries = new Set(collectCurrentRootEntries(repoRoot));
  const allowed = new Set(getAllowlistEntries(manifest));
  const localCompatibility = new Set(getLocalCompatibilityEntries(manifest));
  return sortStrings(
    [...currentEntries].filter((entry) => !allowed.has(entry) && !localCompatibility.has(entry))
  );
}

module.exports = {
  MANIFEST_PATH,
  VALID_ENTRY_TYPES,
  VALID_CLASSES,
  VALID_ROOT_BASIS,
  VALID_LIFECYCLE,
  getRepoRoot,
  toPosix,
  normalizeEntryPath,
  readManifest,
  validateManifest,
  getEntriesByLifecycle,
  getActiveEntries,
  getTemporaryExceptionEntries,
  getAllowlistEntries,
  getForbiddenEntries,
  getLocalCompatibilityEntries,
  getRequiredPublicArtifacts,
  getRequiredGeneratedEntries,
  collectCurrentRootEntries,
  getTrackedUnexpectedRootEntries
};
