/**
 * @script            script-governance-config
 * @category          utility
 * @purpose           governance:repo-health
 * @scope             full-repo
 * @domain            docs
 * @needs             R-R14, R-R18, R-C6
 * @purpose-statement Shared governance constants for script discovery, indexing, classification, and pipeline normalisation across the repo.
 * @pipeline          indirect -- library module
 * @usage             const config = require('../../tools/lib/governance/script-governance-config');
 */

const fs = require('fs');
const path = require('path');
const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');

const DISCOVERY_ROOTS = [
  '.githooks',
  '.github/scripts',
  'workspace/scripts',
  'operations/tests/unit',
  'operations/tests/integration',
  'operations/tests/utils',
  'operations/tests',
  'operations/scripts',
  'tools/lib',
  'tools/dev',
  'tools/config'
];

const GOVERNED_ROOTS = [
  '.githooks',
  '.github/scripts',
  'operations/tests',
  'operations/scripts',
  'tools/lib',
  'tools/dev',
  'tools/config',
  'workspace/scripts'
];

const INDEXED_ROOTS = [
  '.githooks',
  '.github/scripts',
  'operations/tests',
  'operations/scripts',
  'tools/lib',
  'tools/dev',
  'tools/config',
  'workspace/scripts'
];

const GROUP_INDEX_MAP = [
  { root: '.githooks', index: '.githooks/script-index.md' },
  { root: '.github/scripts', index: '.github/script-index.md' },
  { root: 'operations/tests', index: 'operations/tests/script-index.md' },
  { root: 'operations/scripts', index: 'operations/scripts/script-index.md' },
  { root: 'tools/lib', index: 'tools/lib/script-index.md' },
  { root: 'tools/dev', index: 'tools/dev/script-index.md' },
  { root: 'tools/config', index: 'tools/config/registry/script-index.md' },
  { root: 'workspace/scripts', index: 'workspace/scripts/script-index.md' }
];
const GROUP_INDEX_PATHS = GROUP_INDEX_MAP.map((entry) => entry.index);

const AGGREGATE_INDEX_PATH = 'docs-guide/catalog/scripts-catalog.mdx';
const LEGACY_AGGREGATE_INDEX_PATH = AGGREGATE_INDEX_PATH
  .replace('/catalog/', '/indexes/')
  .replace(/-catalog\.mdx$/i, () => ['-', 'index', '.mdx'].join(''));
const CLASSIFICATION_DATA_PATH = 'tools/config/registry/script-registry.json';

const SCRIPT_EXTENSIONS = ['.js', '.sh', '.py'];
const SCRIPT_EXTENSIONS_SET = new Set(SCRIPT_EXTENSIONS);

const EXCLUDED_PREFIXES = ['node_modules/', '.git/', 'operations/scripts/archive/'];
const EXCLUDED_SEGMENTS = ['node_modules', '.git'];

const FRAMEWORK_FIELDS = [
  { key: 'script', tag: '@script' },
  { key: 'category', tag: '@category' },
  { key: 'purpose', tag: '@purpose' },
  { key: 'scope', tag: '@scope' },
  { key: 'domain', tag: '@domain' },
  { key: 'needs', tag: '@needs' },
  { key: 'purpose_statement', tag: '@purpose-statement' },
  { key: 'pipeline', tag: '@pipeline' },
  { key: 'usage', tag: '@usage' }
];

const REQUIRED_FRAMEWORK_KEYS = ['script', 'category', 'purpose', 'scope', 'domain', 'usage'];

const CATEGORY_ENUM = [
  'validator',
  'enforcer',
  'remediator',
  'generator',
  'automation',
  'utility',
  'orchestrator'
];

// New 3-tier taxonomy type values (replaces CATEGORY_ENUM for scripts using @type)
// Aligned to actions framework: D-ACT-07 (automation -> integrator), D-ACT-01 (interface added)
const VALID_TYPES = ['audit', 'generator', 'validator', 'remediator', 'dispatch', 'integrator', 'interface'];

// Concern values aligned to actions framework D-ACT-05 (expanded from 4 to 7)
const VALID_CONCERNS = ['copy', 'health', 'maintenance', 'discoverability', 'governance', 'brand', 'integrations'];

// Legacy concern values (accepted during transition, mapped to new values)
const LEGACY_CONCERN_MAP = {
  content: null,       // must be manually mapped to copy/health/maintenance/discoverability/integrations
  components: 'maintenance',
  ai: 'discoverability',
  governance: 'governance'
};

// Legacy type values (accepted during transition, mapped to new values)
const LEGACY_TYPE_MAP = {
  automation: 'integrator',
  orchestrator: 'dispatch',
  enforcer: 'validator',
  utility: null          // must be manually classified
};

const PURPOSE_ENUM = [
  'qa:content-quality',
  'qa:link-integrity',
  'qa:repo-health',
  'governance:index-management',
  'governance:agent-governance',
  'governance:repo-health',
  'feature:translation',
  'feature:seo',
  'seo:og-image-assets',
  'seo:og-image-governance',
  'infrastructure:data-feeds',
  'infrastructure:pipeline-orchestration',
  'tooling:api-spec',
  'tooling:dev-tools'
];

const SCOPE_ENUM = [
  'staged',
  'changed',
  'full-repo',
  'v2-content',
  'single-domain',
  'single-file',
  'external',
  'generated-output'
];
const SCOPE_ENUM_SET = new Set(SCOPE_ENUM);
const ADDITIONAL_GOVERNANCE_SCOPE_TOKENS = new Set(['codex PR governance', 'git index', 'root']);

const GROUP_LABELS = {
  Unmanaged: 'Unmanaged',
  Orphaned: 'Orphaned',
  P1: 'P1 - Commit gate',
  P2: 'P2 - Push gate',
  P3: 'P3 - PR gate',
  P5: 'P5 - Scheduled',
  P6: 'P6 - On-demand',
  Indirect: 'Indirect - Library',
  Manual: 'Manual - CLI only'
};

const GROUP_ORDER = ['Unmanaged', 'Orphaned', 'P1', 'P2', 'P3', 'P5', 'P6', 'Indirect', 'Manual'];
const PIPELINE_ORDER = ['P1', 'P2', 'P3', 'P5', 'P6', 'indirect', 'manual'];

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function pathHasExcludedSegment(repoPath) {
  const parts = normalizeRepoPath(repoPath).split('/');
  return parts.some((part) => EXCLUDED_SEGMENTS.includes(part));
}

function shouldExcludeScriptPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  if (!normalized) return true;
  if (EXCLUDED_PREFIXES.some((prefix) => normalized.startsWith(prefix))) return true;
  if (pathHasExcludedSegment(normalized)) return true;
  return normalized.includes('.bak') || normalized.endsWith('.disabled');
}

function isWithinRoots(repoPath, roots) {
  const normalized = normalizeRepoPath(repoPath);
  return roots.some((root) => normalized === root || normalized.startsWith(`${root}/`));
}

function isHookScriptPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return normalized.startsWith('.githooks/') && path.extname(normalized) === '';
}

function isDiscoveredScriptPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  if (shouldExcludeScriptPath(normalized)) return false;
  if (!isWithinRoots(normalized, DISCOVERY_ROOTS)) return false;
  const ext = path.extname(normalized).toLowerCase();
  return SCRIPT_EXTENSIONS_SET.has(ext) || isHookScriptPath(normalized);
}

function parseDeclaredPipelines(rawValue) {
  const raw = String(rawValue || '').trim();
  const found = new Set();
  if (!raw) return found;
  for (const match of raw.match(/\bP[1-6]\b/g) || []) {
    found.add(match);
  }
  if (/manual/i.test(raw)) found.add('manual');
  if (/indirect/i.test(raw)) found.add('indirect');
  return found;
}

function splitGovernanceScopeTokens(scopeValue) {
  return String(scopeValue || '')
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean);
}

function isValidGovernanceScope(scopeValue) {
  const tokens = splitGovernanceScopeTokens(scopeValue);
  if (tokens.length === 0) return false;

  return tokens.every((token) => {
    if (SCOPE_ENUM_SET.has(token)) return true;
    if (ADDITIONAL_GOVERNANCE_SCOPE_TOKENS.has(token)) return true;
    if (fs.existsSync(path.join(REPO_ROOT, token))) return true;
    return /^[a-z0-9][a-z0-9.-]*\.[a-z0-9.-]+$/i.test(token);
  });
}

module.exports = {
  ADDITIONAL_GOVERNANCE_SCOPE_TOKENS,
  AGGREGATE_INDEX_PATH,
  CATEGORY_ENUM,
  CLASSIFICATION_DATA_PATH,
  VALID_TYPES,
  VALID_CONCERNS,
  LEGACY_CONCERN_MAP,
  LEGACY_TYPE_MAP,
  DISCOVERY_ROOTS,
  EXCLUDED_PREFIXES,
  FRAMEWORK_FIELDS,
  GOVERNED_ROOTS,
  GROUP_INDEX_MAP,
  GROUP_INDEX_PATHS,
  GROUP_LABELS,
  GROUP_ORDER,
  INDEXED_ROOTS,
  LEGACY_AGGREGATE_INDEX_PATH,
  PIPELINE_ORDER,
  PURPOSE_ENUM,
  REQUIRED_FRAMEWORK_KEYS,
  SCOPE_ENUM,
  SCRIPT_EXTENSIONS,
  isDiscoveredScriptPath,
  isValidGovernanceScope,
  isHookScriptPath,
  isWithinRoots,
  normalizeRepoPath,
  parseDeclaredPipelines,
  shouldExcludeScriptPath
};
