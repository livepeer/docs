/**
 * @script            repo-governance
 * @category          utility
 * @purpose           governance:index-management
 * @scope             operations/governance/config, operations/scripts, operations/tests, docs-guide, workspace/reports/repo-ops
 * @domain            docs
 * @needs             R-R14, R-R16, R-R17, R-R29
 * @purpose-statement Repo governance helpers — load the canonical registry, validate its schema, and expose derived state for generators and validators.
 * @pipeline          indirect — library module
 * @usage             const { readManifest, getProductionApprovalLabels } = require('../../tools/lib/governance/repo-governance');
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const MANIFEST_PATH = 'operations/governance/config/repo-governance-surfaces.json';
const VALID_GATE_LAYERS = new Set(['pre-commit', 'pr-changed', 'scheduled', 'manual']);
const VALID_ROLLOUT_STATES = new Set(['advisory', 'autofix', 'blocking', 'migrating']);
const VALID_SURFACE_TYPES = new Set([
  'governance-registry',
  'root-governance',
  'generated-artifact-governance',
  'ownerless-governance',
  'github-workspace-governance'
]);
const VALID_GITHUB_WORKSPACE_CLASSIFICATIONS = new Set([
  'transitional-runtime',
  'generated-support',
  'design-only',
  'historical-audit'
]);
const VALID_GITHUB_WORKSPACE_FUTURE_STATES = new Set([
  'promote-or-replace',
  'retain-generated-support',
  'archive-reference'
]);
const VALID_AGENT_COMMIT_POLICIES = new Set(['tracked', 'task_dependent', 'untracked', 'forbidden']);
const VALID_PUBLIC_CONTRACTS = new Set(['internal', 'public_root_contract']);
const VALID_ESCALATION_MODES = new Set(['auto-fix-pr', 'human-review-required', 'rolling-issue']);
const VALID_WRITE_POLICIES = new Set([
  'declared_paths_only',
  'manifest_declared_outputs',
  'policy_and_registry_controlled'
]);
const VALID_AGENT_WRITE_POLICIES = new Set([
  'registry_defaults_only',
  'root_forbidden_workspace_default',
  'generated_only_when_declared'
]);
const VALID_APPROVAL_ENFORCEMENT_MODES = new Set(['ci-blocking']);

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

function sortStrings(values) {
  return [...new Set((values || []).map((value) => toPosix(value).trim()).filter(Boolean))].sort((left, right) =>
    left.localeCompare(right)
  );
}

function ensureArray(value, label) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`${label} must be a non-empty array.`);
  }
}

function validateTopLevelEntries(entries, label) {
  ensureArray(entries, label);
  const seen = new Set();
  entries.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`${label}[${index}] must be an object.`);
    }
    if (!String(entry.id || '').trim()) {
      throw new Error(`${label}[${index}].id is required.`);
    }
    if (seen.has(entry.id)) {
      throw new Error(`Duplicate ${label} id "${entry.id}".`);
    }
    seen.add(entry.id);
    if (!String(entry.notes || '').trim()) {
      throw new Error(`${label}[${index}].notes is required.`);
    }
  });
}

function validateGithubWorkspaceEntries(entries) {
  ensureArray(entries, 'github_workspace_surfaces');
  const seen = new Set();
  entries.forEach((entry, index) => {
    const label = `github_workspace_surfaces[${index}]`;
    ['id', 'path', 'classification', 'runtime_role', 'future_state', 'notes'].forEach((field) => {
      if (!String(entry[field] || '').trim()) {
        throw new Error(`${label}.${field} is required.`);
      }
    });
    if (seen.has(entry.id)) {
      throw new Error(`Duplicate github_workspace_surfaces id "${entry.id}".`);
    }
    seen.add(entry.id);
    if (!VALID_GITHUB_WORKSPACE_CLASSIFICATIONS.has(String(entry.classification || '').trim())) {
      throw new Error(`${label}.classification has invalid value "${entry.classification}".`);
    }
    if (!VALID_GITHUB_WORKSPACE_FUTURE_STATES.has(String(entry.future_state || '').trim())) {
      throw new Error(`${label}.future_state has invalid value "${entry.future_state}".`);
    }
    if (entry.classification === 'transitional-runtime') {
      if (!Number.isInteger(entry.review_cadence_days) || entry.review_cadence_days <= 0) {
        throw new Error(`${label}.review_cadence_days must be a positive integer for transitional-runtime entries.`);
      }
    } else if (entry.review_cadence_days != null && (!Number.isInteger(entry.review_cadence_days) || entry.review_cadence_days <= 0)) {
      throw new Error(`${label}.review_cadence_days must be a positive integer when provided.`);
    }
  });
}

function validateLegacyBridgeInventory(entries) {
  if (entries == null) {
    return;
  }
  if (!Array.isArray(entries)) {
    throw new Error('legacy_bridge_inventory must be an array when provided.');
  }
  const seen = new Set();
  entries.forEach((entry, index) => {
    const label = `legacy_bridge_inventory[${index}]`;
    ['id', 'legacy_path', 'canonical_path', 'notes'].forEach((field) => {
      if (!String(entry[field] || '').trim()) {
        throw new Error(`${label}.${field} is required.`);
      }
    });
    if (seen.has(entry.id)) {
      throw new Error(`Duplicate legacy_bridge_inventory id "${entry.id}".`);
    }
    seen.add(entry.id);
    ensureArray(entry.consumer_paths, `${label}.consumer_paths`);
    ensureArray(entry.retirement_requirements, `${label}.retirement_requirements`);
  });
}

function validateApprovalCheckpoint(entry, index) {
  const label = `approval_checkpoints[${index}]`;
  ['id', 'label', 'phase', 'trigger'].forEach((field) => {
    if (!String(entry[field] || '').trim()) {
      throw new Error(`${label}.${field} is required.`);
    }
  });
  if (typeof entry.requires_human_approval !== 'boolean') {
    throw new Error(`${label}.requires_human_approval must be boolean.`);
  }
  ensureArray(entry.required_evidence, `${label}.required_evidence`);
}

function validateProductionApprovalPolicy(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    throw new Error('production_approval_policy must be an object.');
  }
  ['manifest', 'pr_template', 'validator', 'notes'].forEach((field) => {
    if (!String(entry[field] || '').trim()) {
      throw new Error(`production_approval_policy.${field} is required.`);
    }
  });
  ensureArray(entry.required_labels, 'production_approval_policy.required_labels');
}

function validateSurface(surface, index) {
  const label = `surfaces[${index}]`;
  [
    'id',
    'name',
    'surface_type',
    'gate_layer',
    'rollout_state',
    'write_policy',
    'agent_write_policy',
    'public_contract',
    'escalation_mode',
    'notes'
  ].forEach((field) => {
    if (!String(surface[field] || '').trim()) {
      throw new Error(`${label}.${field} is required.`);
    }
  });

  ['paths', 'canonical_sources', 'validators', 'repair_commands', 'doc_refs', 'success_signals'].forEach((field) => {
    ensureArray(surface[field], `${label}.${field}`);
  });

  if (!Array.isArray(surface.derived_outputs)) {
    throw new Error(`${label}.derived_outputs must be an array.`);
  }
  if (typeof surface.ownerless_ready !== 'boolean') {
    throw new Error(`${label}.ownerless_ready must be boolean.`);
  }
  if (typeof surface.network_dependent !== 'boolean') {
    throw new Error(`${label}.network_dependent must be boolean.`);
  }
  if (!VALID_SURFACE_TYPES.has(surface.surface_type)) {
    throw new Error(`${label}.surface_type has invalid value "${surface.surface_type}".`);
  }
  if (!VALID_GATE_LAYERS.has(surface.gate_layer)) {
    throw new Error(`${label}.gate_layer has invalid value "${surface.gate_layer}".`);
  }
  if (!VALID_ROLLOUT_STATES.has(surface.rollout_state)) {
    throw new Error(`${label}.rollout_state has invalid value "${surface.rollout_state}".`);
  }
  if (!VALID_WRITE_POLICIES.has(surface.write_policy)) {
    throw new Error(`${label}.write_policy has invalid value "${surface.write_policy}".`);
  }
  if (!VALID_AGENT_WRITE_POLICIES.has(surface.agent_write_policy)) {
    throw new Error(`${label}.agent_write_policy has invalid value "${surface.agent_write_policy}".`);
  }
  if (!VALID_PUBLIC_CONTRACTS.has(surface.public_contract)) {
    throw new Error(`${label}.public_contract has invalid value "${surface.public_contract}".`);
  }
  if (!VALID_ESCALATION_MODES.has(surface.escalation_mode)) {
    throw new Error(`${label}.escalation_mode has invalid value "${surface.escalation_mode}".`);
  }
  if (surface.ownerless_ready && !['autofix', 'blocking'].includes(surface.rollout_state)) {
    throw new Error(`${label}.ownerless_ready=true requires rollout_state "autofix" or "blocking".`);
  }
}

function validateManifest(manifest) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new Error('Repo governance manifest must be an object.');
  }
  if (!String(manifest.version || '').trim()) {
    throw new Error('Repo governance manifest must define version.');
  }
  if (!String(manifest.canonical_home || '').trim()) {
    throw new Error('Repo governance manifest must define canonical_home.');
  }
  if (!String(manifest.bridge_mode || '').trim()) {
    throw new Error('Repo governance manifest must define bridge_mode.');
  }
  ensureArray(manifest.canonical_manifests, 'canonical_manifests');
  ensureArray(manifest.approval_checkpoints, 'approval_checkpoints');
  if (!manifest.generated_outputs || typeof manifest.generated_outputs !== 'object') {
    throw new Error('Repo governance manifest must define generated_outputs.');
  }
  ['map_doc', 'status_report_json', 'status_report_md', 'handover_report_md'].forEach((field) => {
    if (!String(manifest.generated_outputs[field] || '').trim()) {
      throw new Error(`generated_outputs.${field} is required.`);
    }
  });
  validateProductionApprovalPolicy(manifest.production_approval_policy);
  ensureArray(manifest.active_governance_reports, 'active_governance_reports');

  validateGithubWorkspaceEntries(manifest.github_workspace_surfaces);
  validateLegacyBridgeInventory(manifest.legacy_bridge_inventory);
  validateTopLevelEntries(manifest.path_classes, 'path_classes');
  manifest.path_classes.forEach((entry, index) => {
    ensureArray(entry.allowed_paths, `path_classes[${index}].allowed_paths`);
  });

  validateTopLevelEntries(manifest.agent_output_classes, 'agent_output_classes');
  manifest.agent_output_classes.forEach((entry, index) => {
    if (!String(entry.default_destination || '').trim()) {
      throw new Error(`agent_output_classes[${index}].default_destination is required.`);
    }
    if (!VALID_AGENT_COMMIT_POLICIES.has(String(entry.commit_policy || '').trim())) {
      throw new Error(`agent_output_classes[${index}].commit_policy has invalid value "${entry.commit_policy}".`);
    }
  });

  ensureArray(manifest.surfaces, 'surfaces');
  manifest.approval_checkpoints.forEach((entry, index) => validateApprovalCheckpoint(entry, index));
  const seenSurfaceIds = new Set();
  manifest.surfaces.forEach((surface, index) => {
    validateSurface(surface, index);
    if (seenSurfaceIds.has(surface.id)) {
      throw new Error(`Duplicate surfaces id "${surface.id}".`);
    }
    seenSurfaceIds.add(surface.id);
  });
}

function readManifest(repoRoot = getRepoRoot()) {
  const absPath = path.join(repoRoot, MANIFEST_PATH);
  const manifest = JSON.parse(fs.readFileSync(absPath, 'utf8'));
  validateManifest(manifest);
  return manifest;
}

function getSurfaceIds(manifest = readManifest()) {
  return sortStrings(manifest.surfaces.map((surface) => surface.id));
}

function getSurfaceById(surfaceId, manifest = readManifest()) {
  return manifest.surfaces.find((surface) => surface.id === surfaceId) || null;
}

function getRolloutStateCounts(manifest = readManifest()) {
  return manifest.surfaces.reduce((acc, surface) => {
    acc[surface.rollout_state] = (acc[surface.rollout_state] || 0) + 1;
    return acc;
  }, {});
}

function getOwnerlessReadyCount(manifest = readManifest()) {
  return manifest.surfaces.filter((surface) => surface.ownerless_ready).length;
}

function getApprovalCheckpointIds(manifest = readManifest()) {
  return sortStrings(manifest.approval_checkpoints.map((entry) => entry.id));
}

function getProductionApprovalLabels(manifest = readManifest()) {
  return sortStrings(manifest.production_approval_policy.required_labels || []);
}

function getGithubWorkspaceClassificationCounts(manifest = readManifest()) {
  return manifest.github_workspace_surfaces.reduce((acc, entry) => {
    acc[entry.classification] = (acc[entry.classification] || 0) + 1;
    return acc;
  }, {});
}

function getLegacyBridgeIds(manifest = readManifest()) {
  return sortStrings((manifest.legacy_bridge_inventory || []).map((entry) => entry.id));
}

function getActiveGovernanceReports(manifest = readManifest()) {
  return sortStrings(manifest.active_governance_reports || []);
}

module.exports = {
  MANIFEST_PATH,
  VALID_GATE_LAYERS,
  VALID_ROLLOUT_STATES,
  VALID_SURFACE_TYPES,
  VALID_GITHUB_WORKSPACE_CLASSIFICATIONS,
  VALID_GITHUB_WORKSPACE_FUTURE_STATES,
  VALID_AGENT_COMMIT_POLICIES,
  VALID_PUBLIC_CONTRACTS,
  VALID_ESCALATION_MODES,
  VALID_WRITE_POLICIES,
  VALID_AGENT_WRITE_POLICIES,
  getRepoRoot,
  toPosix,
  sortStrings,
  validateManifest,
  readManifest,
  getSurfaceIds,
  getApprovalCheckpointIds,
  getProductionApprovalLabels,
  getGithubWorkspaceClassificationCounts,
  getActiveGovernanceReports,
  getLegacyBridgeIds,
  getSurfaceById,
  getRolloutStateCounts,
  getOwnerlessReadyCount
};
