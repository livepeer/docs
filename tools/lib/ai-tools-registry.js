/**
 * @script            ai-tools-registry
 * @category          utility
 * @purpose           governance:agent-governance
 * @scope             tools/lib, ai-tools/registry, tools/scripts/validate-ai-tools-registry.js, tests/unit/ai-tools-registry.test.js, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/source-of-truth-policy.mdx, tools/config/ownerless-governance-surfaces.json
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Shared loader, validator, coverage checker, and report renderer for the AI-tools registry contract and generated inventory report.
 * @pipeline          indirect -- library module used by validator and test surfaces
 * @usage             const registry = require('../lib/ai-tools-registry');
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DEFAULT_SCHEMA_PATH = 'ai-tools/registry/ai-tools-registry.schema.json';
const DEFAULT_REGISTRY_PATH = 'ai-tools/registry/ai-tools-registry.json';
const DEFAULT_REPORT_PATH = 'ai-tools/registry/ai-tools-inventory.md';
const REPAIR_COMMAND_RE = /^(node |bash lpd |lpd )/;
const ARTIFACT_ID_RE = /^[a-z0-9][a-z0-9-]*$/;
const RELEVANT_PATHS = new Set([
  'docs-guide/catalog/ai-tools.mdx',
  'docs-guide/policies/audit-system-overview.mdx',
  'docs-guide/policies/ownerless-governance.mdx',
  'docs-guide/policies/skill-pipeline-map.mdx',
  'docs-guide/policies/source-of-truth-policy.mdx',
  'tests/unit/ai-tools-registry.test.js',
  'tools/config/ownerless-governance-surfaces.json',
  'tools/lib/ai-tools-registry.js',
  'tools/scripts/validate-ai-tools-registry.js'
]);

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '').trim()).replace(/^\.\//, '');
}

function readUtf8(repoRoot, repoPath) {
  return fs.readFileSync(path.join(repoRoot, repoPath), 'utf8');
}

function writeUtf8(repoRoot, repoPath, content) {
  const fullPath = path.join(repoRoot, repoPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

function readJson(repoRoot, repoPath) {
  return JSON.parse(readUtf8(repoRoot, repoPath));
}

function exists(repoRoot, repoPath) {
  return fs.existsSync(path.join(repoRoot, repoPath));
}

function escapeRegExp(value) {
  return String(value || '').replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

function globToRegExp(pattern) {
  const normalized = normalizeRepoPath(pattern);
  let output = '^';
  for (let index = 0; index < normalized.length; index += 1) {
    const char = normalized[index];
    const next = normalized[index + 1];
    if (char === '*' && next === '*') {
      output += '.*';
      index += 1;
      continue;
    }
    if (char === '*') {
      output += '[^/]*';
      continue;
    }
    if (char === '?') {
      output += '.';
      continue;
    }
    output += escapeRegExp(char);
  }
  output += '$';
  return new RegExp(output);
}

function matchesAnyPattern(repoPath, patterns) {
  const normalized = normalizeRepoPath(repoPath);
  return patterns.some((pattern) => globToRegExp(pattern).test(normalized));
}

function collectTrackedFiles(repoRoot) {
  const output = execSync('git ls-files --cached --others --exclude-standard', {
    cwd: repoRoot,
    encoding: 'utf8'
  });
  return output
    .split('\n')
    .map((line) => normalizeRepoPath(line))
    .filter(Boolean);
}

function collectTrackedAiToolsFiles(repoRoot, discoveryRoots, exclusions) {
  return collectTrackedFiles(repoRoot)
    .filter((repoPath) => discoveryRoots.some((root) => repoPath === root || repoPath.startsWith(`${root}/`)))
    .filter((repoPath) => !matchesAnyPattern(repoPath, exclusions));
}

function isLikelyRepoPath(value) {
  const normalized = normalizeRepoPath(value);
  if (!normalized) return false;
  if (normalized.startsWith('~') || normalized.includes('://')) return false;
  if (/[<>{}]/.test(normalized)) return false;
  const repoPrefixes = [
    'ai-tools/',
    'docs-guide/',
    'tools/',
    'tests/',
    'v2/',
    'snippets/',
    '.github/',
    '.claude/',
    '.cursor/',
    '.windsurf/',
    '.codex/',
    'contribute/'
  ];
  return (
    repoPrefixes.some((prefix) => normalized.startsWith(prefix)) ||
    ['README.md', 'AGENTS.md', '.allowlist', 'llms.txt', 'docs.json', 'docs-index.json'].includes(normalized)
  );
}

function hasGlob(value) {
  return /[*?]/.test(String(value || ''));
}

function addIssue(target, file, rule, message) {
  target.push({ file, rule, message, line: 1 });
}

function buildEnumSet(values) {
  return new Set(Array.isArray(values) ? values.map((value) => String(value || '').trim()).filter(Boolean) : []);
}

function buildCountMap(items, key) {
  const counts = new Map();
  items.forEach((item) => {
    const value = String(item[key] || '').trim() || '(unset)';
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return [...counts.entries()].sort((left, right) => left[0].localeCompare(right[0]));
}

function loadSchema(repoRoot, schemaPath = DEFAULT_SCHEMA_PATH) {
  return readJson(repoRoot, schemaPath);
}

function loadRegistry(repoRoot, registryPath = DEFAULT_REGISTRY_PATH) {
  return readJson(repoRoot, registryPath);
}

function validateRegistry(options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const schemaPath = options.schemaPath || DEFAULT_SCHEMA_PATH;
  const registryPath = options.registryPath || DEFAULT_REGISTRY_PATH;
  const checkCoverage = Boolean(options.checkCoverage);
  const checkLanes = Boolean(options.checkLanes);

  const errors = [];
  const warnings = [];

  if (!exists(repoRoot, schemaPath)) {
    addIssue(errors, schemaPath, 'AI-tools registry schema', 'Missing AI-tools registry schema file.');
    return { passed: false, errors, warnings, summary: { totalArtifacts: 0 } };
  }

  if (!exists(repoRoot, registryPath)) {
    addIssue(errors, registryPath, 'AI-tools registry', 'Missing AI-tools registry file.');
    return { passed: false, errors, warnings, summary: { totalArtifacts: 0 } };
  }

  let schema;
  let registry;
  try {
    schema = loadSchema(repoRoot, schemaPath);
  } catch (error) {
    addIssue(errors, schemaPath, 'AI-tools registry schema', `Invalid JSON schema file: ${error.message}`);
    return { passed: false, errors, warnings, summary: { totalArtifacts: 0 } };
  }

  try {
    registry = loadRegistry(repoRoot, registryPath);
  } catch (error) {
    addIssue(errors, registryPath, 'AI-tools registry', `Invalid JSON registry file: ${error.message}`);
    return { passed: false, errors, warnings, summary: { totalArtifacts: 0 } };
  }

  const topLevelRequired = Array.isArray(schema.required) ? schema.required : [];
  topLevelRequired.forEach((key) => {
    if (!(key in registry)) {
      addIssue(errors, registryPath, 'AI-tools registry shape', `Missing required top-level key "${key}".`);
    }
  });

  if (!Number.isInteger(registry.version) || registry.version < 1) {
    addIssue(errors, registryPath, 'AI-tools registry shape', '"version" must be a positive integer.');
  }

  const discoveryRoots = Array.isArray(registry.discovery_roots) ? registry.discovery_roots.map(normalizeRepoPath) : [];
  if (discoveryRoots.length === 0) {
    addIssue(errors, registryPath, 'AI-tools registry shape', '"discovery_roots" must be a non-empty array.');
  }

  const exclusions = Array.isArray(registry.exclusions) ? registry.exclusions.map(normalizeRepoPath) : [];
  if (!Array.isArray(registry.exclusions)) {
    addIssue(errors, registryPath, 'AI-tools registry shape', '"exclusions" must be an array.');
  }

  const schemaLaneIds = buildEnumSet(schema?.$defs?.lane?.properties?.id?.enum);
  const schemaLifecycleIds = buildEnumSet(schema?.$defs?.lifecycleState?.properties?.id?.enum);
  const requiredArtifactKeys = Array.isArray(schema?.$defs?.artifact?.required)
    ? schema.$defs.artifact.required
    : [];

  const lanes = Array.isArray(registry.lanes) ? registry.lanes : [];
  if (!Array.isArray(registry.lanes) || lanes.length === 0) {
    addIssue(errors, registryPath, 'AI-tools registry lanes', '"lanes" must be a non-empty array.');
  }

  const lifecycleStates = Array.isArray(registry.lifecycle_states) ? registry.lifecycle_states : [];
  if (!Array.isArray(registry.lifecycle_states) || lifecycleStates.length === 0) {
    addIssue(errors, registryPath, 'AI-tools registry lifecycle', '"lifecycle_states" must be a non-empty array.');
  }

  const laneMap = new Map();
  lanes.forEach((lane, index) => {
    const label = `${registryPath}.lanes[${index}]`;
    if (!lane || typeof lane !== 'object' || Array.isArray(lane)) {
      addIssue(errors, registryPath, 'AI-tools registry lanes', `${label} must be an object.`);
      return;
    }

    ['id', 'description', 'path_patterns'].forEach((key) => {
      if (!(key in lane)) {
        addIssue(errors, registryPath, 'AI-tools registry lanes', `${label} is missing "${key}".`);
      }
    });

    const laneId = String(lane.id || '').trim();
    if (!schemaLaneIds.has(laneId)) {
      addIssue(errors, registryPath, 'AI-tools registry lanes', `${label}.id "${laneId}" is not allowed by the schema.`);
    } else if (laneMap.has(laneId)) {
      addIssue(errors, registryPath, 'AI-tools registry lanes', `Duplicate lane id "${laneId}".`);
    } else {
      laneMap.set(laneId, lane);
    }

    if (!Array.isArray(lane.path_patterns) || lane.path_patterns.length === 0) {
      addIssue(errors, registryPath, 'AI-tools registry lanes', `${label}.path_patterns must be a non-empty array.`);
    }
  });

  schemaLaneIds.forEach((laneId) => {
    if (!laneMap.has(laneId)) {
      addIssue(errors, registryPath, 'AI-tools registry lanes', `Registry is missing lane "${laneId}".`);
    }
  });

  const lifecycleMap = new Map();
  lifecycleStates.forEach((state, index) => {
    const label = `${registryPath}.lifecycle_states[${index}]`;
    if (!state || typeof state !== 'object' || Array.isArray(state)) {
      addIssue(errors, registryPath, 'AI-tools registry lifecycle', `${label} must be an object.`);
      return;
    }

    ['id', 'description'].forEach((key) => {
      if (!(key in state)) {
        addIssue(errors, registryPath, 'AI-tools registry lifecycle', `${label} is missing "${key}".`);
      }
    });

    const stateId = String(state.id || '').trim();
    if (!schemaLifecycleIds.has(stateId)) {
      addIssue(errors, registryPath, 'AI-tools registry lifecycle', `${label}.id "${stateId}" is not allowed by the schema.`);
    } else if (lifecycleMap.has(stateId)) {
      addIssue(errors, registryPath, 'AI-tools registry lifecycle', `Duplicate lifecycle id "${stateId}".`);
    } else {
      lifecycleMap.set(stateId, state);
    }
  });

  schemaLifecycleIds.forEach((stateId) => {
    if (!lifecycleMap.has(stateId)) {
      addIssue(errors, registryPath, 'AI-tools registry lifecycle', `Registry is missing lifecycle state "${stateId}".`);
    }
  });

  const artifacts = Array.isArray(registry.artifacts) ? registry.artifacts : [];
  if (!Array.isArray(registry.artifacts) || artifacts.length === 0) {
    addIssue(errors, registryPath, 'AI-tools registry artifacts', '"artifacts" must be a non-empty array.');
  }

  const seenIds = new Set();
  const seenPaths = new Set();

  artifacts.forEach((artifact, index) => {
    const label = `${registryPath}.artifacts[${index}]`;
    if (!artifact || typeof artifact !== 'object' || Array.isArray(artifact)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `${label} must be an object.`);
      return;
    }

    requiredArtifactKeys.forEach((key) => {
      if (!(key in artifact)) {
        addIssue(errors, registryPath, 'AI-tools registry artifact', `${label} is missing "${key}".`);
      }
    });

    const id = String(artifact.id || '').trim();
    if (!ARTIFACT_ID_RE.test(id)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.id must be kebab-case.`);
    } else if (seenIds.has(id)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `Duplicate artifact id "${id}".`);
    } else {
      seenIds.add(id);
    }

    const repoPath = normalizeRepoPath(artifact.path);
    if (!repoPath.startsWith('ai-tools/')) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.path must stay within ai-tools/.`);
    } else if (seenPaths.has(repoPath)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `Duplicate artifact path "${repoPath}".`);
    } else {
      seenPaths.add(repoPath);
    }

    if (!exists(repoRoot, repoPath)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.path does not exist in the repo: ${repoPath}`);
    }

    ['artifact_type', 'category', 'catalog_group', 'status', 'migration_wave', 'notes'].forEach((key) => {
      if (typeof artifact[key] !== 'string' || !String(artifact[key] || '').trim()) {
        addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.${key} must be a non-empty string.`);
      }
    });

    const lifecycleState = String(artifact.lifecycle_state || '').trim();
    if (!lifecycleMap.has(lifecycleState)) {
      addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.lifecycle_state "${lifecycleState}" is invalid.`);
    }

    ['current_lane', 'target_lane'].forEach((key) => {
      const laneId = String(artifact[key] || '').trim();
      if (!laneMap.has(laneId)) {
        addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.${key} "${laneId}" is invalid.`);
      }
    });

    ['canonical_source', 'derived_outputs', 'runtime_targets', 'validators', 'repair_commands'].forEach((key) => {
      if (!Array.isArray(artifact[key])) {
        addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.${key} must be an array.`);
      }
    });

    const repoPathArrays = ['canonical_source', 'validators'];
    repoPathArrays.forEach((key) => {
      if (!Array.isArray(artifact[key])) return;
      artifact[key].forEach((value, itemIndex) => {
        const normalized = normalizeRepoPath(value);
        if (!normalized) {
          addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.${key}[${itemIndex}] must not be empty.`);
          return;
        }
        if (isLikelyRepoPath(normalized) && !hasGlob(normalized) && !exists(repoRoot, normalized)) {
          addIssue(errors, registryPath, 'AI-tools registry artifact', `${label}.${key}[${itemIndex}] does not exist: ${normalized}`);
        }
      });
    });

    if (Array.isArray(artifact.repair_commands)) {
      artifact.repair_commands.forEach((command, commandIndex) => {
        const value = String(command || '').trim();
        if (!value) {
          addIssue(errors, registryPath, 'AI-tools registry repair command', `${label}.repair_commands[${commandIndex}] must not be empty.`);
        } else if (!REPAIR_COMMAND_RE.test(value)) {
          addIssue(errors, registryPath, 'AI-tools registry repair command', `${label}.repair_commands[${commandIndex}] must be a repo-backed command.`);
        }
      });
    }

    if (checkLanes) {
      const currentLane = laneMap.get(String(artifact.current_lane || '').trim());
      if (currentLane && Array.isArray(currentLane.path_patterns) && currentLane.path_patterns.length > 0) {
        if (!matchesAnyPattern(repoPath, currentLane.path_patterns)) {
          addIssue(
            warnings,
            repoPath,
            'AI-tools lane alignment',
            `Path does not match current lane "${artifact.current_lane}". Update the lane assignment or expand the declared path patterns.`
          );
        }
      }

      if (
        artifact.current_lane !== artifact.target_lane &&
        !['legacy-active', 'workspace-draft', 'retired'].includes(lifecycleState)
      ) {
        addIssue(
          warnings,
          repoPath,
          'AI-tools lane migration',
          'Artifacts that change lanes during migration should declare a migration lifecycle such as legacy-active, workspace-draft, or retired.'
        );
      }
    }
  });

  let trackedAiToolsFiles = [];
  if (checkCoverage && discoveryRoots.length > 0) {
    trackedAiToolsFiles = collectTrackedAiToolsFiles(repoRoot, discoveryRoots, exclusions);
    trackedAiToolsFiles.forEach((repoPath) => {
      if (!seenPaths.has(repoPath)) {
        addIssue(errors, registryPath, 'AI-tools coverage', `Tracked AI-tools file is missing from the registry: ${repoPath}`);
      }
    });

    artifacts.forEach((artifact) => {
      const repoPath = normalizeRepoPath(artifact.path);
      if (!trackedAiToolsFiles.includes(repoPath)) {
        addIssue(errors, registryPath, 'AI-tools coverage', `Registry path is not a tracked AI-tools file: ${repoPath}`);
      }
    });
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
    schema,
    registry,
    summary: {
      totalArtifacts: artifacts.length,
      trackedFiles: trackedAiToolsFiles.length,
      laneCounts: buildCountMap(artifacts, 'current_lane'),
      targetLaneCounts: buildCountMap(artifacts, 'target_lane'),
      lifecycleCounts: buildCountMap(artifacts, 'lifecycle_state'),
      statusCounts: buildCountMap(artifacts, 'status')
    }
  };
}

function renderCountTable(label, rows, descriptions = new Map()) {
  const lines = [`### ${label}`, '', '| Value | Count | Notes |', '| --- | ---: | --- |'];
  rows.forEach(([value, count]) => {
    lines.push(`| \`${value}\` | ${count} | ${String(descriptions.get(value) || '').replace(/\|/g, '\\|')} |`);
  });
  lines.push('');
  return lines;
}

function renderInventoryReport(registry, validation = {}) {
  const laneDescriptions = new Map(
    (Array.isArray(registry.lanes) ? registry.lanes : []).map((lane) => [lane.id, lane.description])
  );
  const lifecycleDescriptions = new Map(
    (Array.isArray(registry.lifecycle_states) ? registry.lifecycle_states : []).map((state) => [state.id, state.description])
  );
  const lines = [
    '{/* Generated by node tools/scripts/validate-ai-tools-registry.js --write-report. Do not edit directly. */}',
    '',
    '# AI-Tools Inventory',
    '',
    'This file is generated from `ai-tools/registry/ai-tools-registry.json`.',
    '',
    '## Summary',
    '',
    `- Version: ${registry.version}`,
    `- Discovery roots: ${registry.discovery_roots.map((value) => `\`${value}\``).join(', ')}`,
    `- Exclusions: ${registry.exclusions.length > 0 ? registry.exclusions.map((value) => `\`${value}\``).join(', ') : '_none_'}`,
    `- Total artifacts: ${validation.summary && validation.summary.totalArtifacts ? validation.summary.totalArtifacts : (registry.artifacts || []).length}`,
    validation.summary && validation.summary.trackedFiles
      ? `- Tracked AI-tools files covered: ${validation.summary.trackedFiles}`
      : '- Tracked AI-tools files covered: run `node tools/scripts/validate-ai-tools-registry.js --check --coverage` to confirm',
    ''
  ];

  const laneRows = validation.summary && validation.summary.laneCounts
    ? validation.summary.laneCounts
    : buildCountMap(registry.artifacts || [], 'current_lane');
  const lifecycleRows = validation.summary && validation.summary.lifecycleCounts
    ? validation.summary.lifecycleCounts
    : buildCountMap(registry.artifacts || [], 'lifecycle_state');
  const statusRows = validation.summary && validation.summary.statusCounts
    ? validation.summary.statusCounts
    : buildCountMap(registry.artifacts || [], 'status');

  lines.push(...renderCountTable('Current Lanes', laneRows, laneDescriptions));
  lines.push(...renderCountTable('Lifecycle States', lifecycleRows, lifecycleDescriptions));
  lines.push(...renderCountTable('Statuses', statusRows));
  lines.push('## Artifacts By Current Lane', '');

  const artifacts = [...(registry.artifacts || [])].sort((left, right) =>
    String(left.path || '').localeCompare(String(right.path || ''))
  );

  Array.from(laneDescriptions.keys()).forEach((laneId) => {
    const laneArtifacts = artifacts.filter((artifact) => artifact.current_lane === laneId);
    if (laneArtifacts.length === 0) return;
    lines.push(`### ${laneId}`, '', '| Path | Type | Lifecycle | Target lane | Status |', '| --- | --- | --- | --- | --- |');
    laneArtifacts.forEach((artifact) => {
      lines.push(
        `| \`${artifact.path}\` | \`${artifact.artifact_type}\` | \`${artifact.lifecycle_state}\` | \`${artifact.target_lane}\` | \`${artifact.status}\` |`
      );
    });
    lines.push('');
  });

  return lines.join('\n');
}

function writeInventoryReport(repoRoot, registry, validation, reportPath = DEFAULT_REPORT_PATH) {
  const content = renderInventoryReport(registry, validation);
  const existing = exists(repoRoot, reportPath) ? readUtf8(repoRoot, reportPath) : '';
  if (existing !== content) {
    writeUtf8(repoRoot, reportPath, content);
    return true;
  }
  return false;
}

function isAiToolsRegistryRelevantPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return normalized.startsWith('ai-tools/') || RELEVANT_PATHS.has(normalized);
}

module.exports = {
  DEFAULT_REGISTRY_PATH,
  DEFAULT_REPORT_PATH,
  DEFAULT_SCHEMA_PATH,
  collectTrackedAiToolsFiles,
  getRepoRoot,
  isAiToolsRegistryRelevantPath,
  loadRegistry,
  loadSchema,
  normalizeRepoPath,
  renderInventoryReport,
  toPosix,
  validateRegistry,
  writeInventoryReport
};
