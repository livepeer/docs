#!/usr/bin/env node
/**
 * @script      check-governance-approvals
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:repo-health
 * @description Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.
 * @mode        read-only
 * @pipeline    ci, pr-changed -> governance approval policy -> exit-code, stdout:violations
 * @scope       operations/governance/config, operations/scripts/validators/governance/pr, operations/tests/run-pr-checks.js, .github/pull_request_template.md, .github/workflows, .github/workspace
 * @usage       node operations/scripts/validators/governance/pr/check-governance-approvals.js [--base-ref <branch>] [--files <path[,path...]>] [--json]
 * @policy      R-R14, R-R29
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_BASE_REF = 'docs-v2';
const POLICY_PATH = 'operations/governance/config/governance-approval-policy.json';
const REPO_GOVERNANCE_PATH = 'operations/governance/config/repo-governance-surfaces.json';

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '').trim()).replace(/^\.\//, '');
}

function parseArgs(argv) {
  const args = {
    baseRef: DEFAULT_BASE_REF,
    files: [],
    json: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--base-ref') {
      args.baseRef = String(argv[index + 1] || '').trim() || DEFAULT_BASE_REF;
      index += 1;
      continue;
    }

    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim() || DEFAULT_BASE_REF;
      continue;
    }

    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) {
        throw new Error('--files requires a comma-separated value.');
      }
      args.files.push(
        ...raw
          .split(',')
          .map((entry) => normalizeRepoPath(entry))
          .filter(Boolean)
      );
      index += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      const raw = String(token.slice('--files='.length) || '').trim();
      if (!raw) {
        throw new Error('--files requires a comma-separated value.');
      }
      args.files.push(
        ...raw
          .split(',')
          .map((entry) => normalizeRepoPath(entry))
          .filter(Boolean)
      );
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = [...new Set(args.files)];
  return args;
}

function usage() {
  process.stdout.write(
    [
      'Usage: node operations/scripts/validators/governance/pr/check-governance-approvals.js [--base-ref <branch>] [--files <path[,path...]>] [--json]'
    ].join('\n') + '\n'
  );
}

function runGit(args) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(stderr || stdout || `git ${args.join(' ')} failed`);
  }
  return String(result.stdout || '').trim();
}

function tryRunGit(args) {
  try {
    return runGit(args);
  } catch (_error) {
    return '';
  }
}

function resolveBaseRef(baseRef) {
  const remoteRef = `origin/${baseRef}`;
  if (tryRunGit(['rev-parse', '--verify', remoteRef])) return remoteRef;
  if (tryRunGit(['rev-parse', '--verify', baseRef])) return baseRef;
  throw new Error(
    `Unable to resolve base ref "${baseRef}" or "${remoteRef}". Fetch the base branch before running this check.`
  );
}

function parseDiffEntry(line) {
  const parts = String(line || '')
    .split('\t')
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) return null;

  const status = parts[0];
  if (status.startsWith('R')) {
    return {
      status,
      fromPath: normalizeRepoPath(parts[1]),
      path: normalizeRepoPath(parts[2]),
      display: `${normalizeRepoPath(parts[1])} -> ${normalizeRepoPath(parts[2])}`
    };
  }

  return {
    status,
    fromPath: '',
    path: normalizeRepoPath(parts[1]),
    display: normalizeRepoPath(parts[1])
  };
}

function getChangedEntries(baseRef, fileFilter = []) {
  const normalizedFilter = new Set((fileFilter || []).map((entry) => normalizeRepoPath(entry)).filter(Boolean));
  if (!baseRef) {
    return [...normalizedFilter].map((repoPath) => ({
      status: 'M',
      fromPath: '',
      path: repoPath,
      display: repoPath
    }));
  }

  const resolvedBaseRef = resolveBaseRef(baseRef);
  const mergeBase = runGit(['merge-base', resolvedBaseRef, 'HEAD']);
  const output = runGit(['diff', '--name-status', '--find-renames', '--diff-filter=ACMRD', `${mergeBase}..HEAD`]);
  const entries = output
    .split('\n')
    .map((line) => parseDiffEntry(line))
    .filter(Boolean);

  if (normalizedFilter.size === 0) {
    return entries;
  }

  return entries.filter((entry) => normalizedFilter.has(entry.path) || normalizedFilter.has(entry.fromPath));
}

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function loadPolicy() {
  const policy = readJson(POLICY_PATH);
  if (!policy || typeof policy !== 'object' || Array.isArray(policy)) {
    throw new Error(`${POLICY_PATH} must be a JSON object.`);
  }
  if (!Array.isArray(policy.rules) || policy.rules.length === 0) {
    throw new Error(`${POLICY_PATH} must declare at least one rule.`);
  }
  if (!Array.isArray(policy.required_fields) || policy.required_fields.length === 0) {
    throw new Error(`${POLICY_PATH} must declare required_fields.`);
  }
  return policy;
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
  return (patterns || []).some((pattern) => globToRegExp(pattern).test(normalized));
}

function normalizeApprovalToken(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/^approval:/, '')
    .replace(/\s+/g, '-');
}

function parseListField(value) {
  return String(value || '')
    .split(/[,\n]/)
    .map((entry) => normalizeApprovalToken(entry))
    .filter(Boolean);
}

function readPrContext() {
  const labelsFromEnv = String(process.env.GOVERNANCE_APPROVAL_LABELS || '').trim();
  const bodyFromEnv = String(process.env.PR_BODY || process.env.PULL_REQUEST_BODY || '').trim();
  if (labelsFromEnv || bodyFromEnv) {
    return {
      available: true,
      labels: labelsFromEnv
        ? labelsFromEnv
            .split(',')
            .map((entry) => String(entry || '').trim())
            .filter(Boolean)
        : [],
      body: bodyFromEnv
    };
  }

  const eventPath = String(process.env.GITHUB_EVENT_PATH || '').trim();
  if (!eventPath) {
    return {
      available: false,
      labels: [],
      body: '',
      reason: 'PR context unavailable: GITHUB_EVENT_PATH is not set.'
    };
  }

  try {
    const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    const pullRequest = event && event.pull_request ? event.pull_request : null;
    if (!pullRequest) {
      return {
        available: false,
        labels: [],
        body: '',
        reason: 'PR context unavailable: event payload has no pull_request object.'
      };
    }
    return {
      available: true,
      labels: Array.isArray(pullRequest.labels)
        ? pullRequest.labels
            .map((entry) => String(entry && entry.name ? entry.name : '').trim())
            .filter(Boolean)
        : [],
      body: String(pullRequest.body || '')
    };
  } catch (error) {
    return {
      available: false,
      labels: [],
      body: '',
      reason: `PR context unavailable: failed to parse GITHUB_EVENT_PATH (${error.message}).`
    };
  }
}

function extractSection(body, heading) {
  const lines = String(body || '').split('\n');
  const normalizedHeading = String(heading || '').trim().toLowerCase();
  let startIndex = -1;
  let currentLevel = 0;

  lines.forEach((line, index) => {
    if (startIndex !== -1) return;
    const match = line.match(/^\s{0,3}(#{2,6})\s+(.+?)\s*#*\s*$/);
    if (!match) return;
    if (String(match[2] || '').trim().toLowerCase() === normalizedHeading) {
      startIndex = index + 1;
      currentLevel = match[1].length;
    }
  });

  if (startIndex === -1) return '';

  const collected = [];
  for (let index = startIndex; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^\s{0,3}(#{2,6})\s+(.+?)\s*#*\s*$/);
    if (match && match[1].length <= currentLevel) {
      break;
    }
    collected.push(line);
  }

  return collected.join('\n').trim();
}

function extractFieldValue(section, label) {
  const patterns = [
    new RegExp(`^\\s*[-*]?\\s*\\*{0,2}${escapeRegExp(label)}\\*{0,2}\\s*:\\s*(.+)$`, 'im'),
    new RegExp(`^\\s*[-*]?\\s*${escapeRegExp(label)}\\s*:\\s*(.+)$`, 'im')
  ];
  for (const pattern of patterns) {
    const match = section.match(pattern);
    if (match) {
      return String(match[1] || '').trim();
    }
  }
  return '';
}

function parseApprovalSection(section, policy) {
  const values = {};
  (policy.required_fields || []).forEach((field) => {
    values[field.id] = extractFieldValue(section, field.label);
  });
  return values;
}

function normalizeGithubWorkspaceSurfaces(payload) {
  return JSON.stringify((payload && payload.github_workspace_surfaces) || []);
}

function readBaseFile(repoPath, baseRef) {
  if (!baseRef) return null;
  const resolvedBaseRef = resolveBaseRef(baseRef);
  const mergeBase = runGit(['merge-base', resolvedBaseRef, 'HEAD']);
  const output = tryRunGit(['show', `${mergeBase}:${repoPath}`]);
  if (!output) return null;
  return output;
}

function hasWorkflowRegistryChange(entries, rule, baseRef) {
  if (!entries.some((entry) => entry.path === rule.watched_registry_path || entry.fromPath === rule.watched_registry_path)) {
    return false;
  }

  const currentPayload = readJson(rule.watched_registry_path);
  const baseContent = readBaseFile(rule.watched_registry_path, baseRef);
  if (!baseContent) return true;

  const basePayload = JSON.parse(baseContent);
  if (rule.watched_registry_key === 'github_workspace_surfaces') {
    return normalizeGithubWorkspaceSurfaces(currentPayload) !== normalizeGithubWorkspaceSurfaces(basePayload);
  }

  return JSON.stringify(currentPayload[rule.watched_registry_key]) !== JSON.stringify(basePayload[rule.watched_registry_key]);
}

function pickGateFields(payload) {
  return JSON.stringify(
    (payload.surfaces || []).map((surface) => ({
      id: surface.id,
      gate_layer: surface.gate_layer,
      rollout_state: surface.rollout_state,
      escalation_mode: surface.escalation_mode
    }))
  );
}

function hasGateModelChange(entries, baseRef) {
  if (!entries.some((entry) => entry.path === REPO_GOVERNANCE_PATH || entry.fromPath === REPO_GOVERNANCE_PATH)) {
    return false;
  }
  const currentPayload = readJson(REPO_GOVERNANCE_PATH);
  const baseContent = readBaseFile(REPO_GOVERNANCE_PATH, baseRef);
  if (!baseContent) return true;
  const basePayload = JSON.parse(baseContent);
  return pickGateFields(currentPayload) !== pickGateFields(basePayload);
}

function deriveRequiredRules(policy, entries, baseRef) {
  const required = [];
  const allPaths = entries.flatMap((entry) => [entry.path, entry.fromPath]).filter(Boolean);

  policy.rules.forEach((rule) => {
    const hasPathMatch = allPaths.some((repoPath) => matchesAnyPattern(repoPath, rule.path_globs || []));
    if (rule.id === 'governance-retirement') {
      const hasRetirement = entries.some(
        (entry) =>
          (entry.status === 'D' || entry.status.startsWith('R')) &&
          matchesAnyPattern(entry.fromPath || entry.path, rule.path_globs || [])
      );
      if (hasRetirement) {
        required.push(rule);
      }
      return;
    }

    if (rule.id === 'workflow-governance') {
      if (hasPathMatch || hasWorkflowRegistryChange(entries, rule, baseRef)) {
        required.push(rule);
      }
      return;
    }

    if (rule.id === 'governance-gate') {
      if (hasPathMatch || hasGateModelChange(entries, baseRef)) {
        required.push(rule);
      }
      return;
    }

    if (hasPathMatch) {
      required.push(rule);
    }
  });

  return required;
}

function buildResult({ requiredRules, context, policy, issues, warnings }) {
  return {
    passed: issues.length === 0,
    skipped: requiredRules.length === 0 || (!context.available && issues.length === 0),
    required_rule_ids: requiredRules.map((rule) => rule.id),
    required_labels: requiredRules.map((rule) => rule.required_label),
    template_section: policy.section_heading,
    issues,
    warnings
  };
}

function run(options = {}) {
  const policy = loadPolicy();
  const effectiveBaseRef =
    Object.prototype.hasOwnProperty.call(options, 'baseRef')
      ? options.baseRef
      : Array.isArray(options.files) && options.files.length > 0
        ? ''
        : DEFAULT_BASE_REF;
  const entries = Array.isArray(options.changedEntries)
    ? options.changedEntries
    : getChangedEntries(effectiveBaseRef, options.files || []);
  const requiredRules = deriveRequiredRules(policy, entries, effectiveBaseRef);
  const issues = [];
  const warnings = [];

  if (requiredRules.length === 0) {
    return buildResult({
      requiredRules,
      context: { available: false },
      policy,
      issues,
      warnings
    });
  }

  const context = {
    ...readPrContext(),
    ...(Array.isArray(options.labels) ? { available: true, labels: options.labels, body: String(options.prBody || '') } : {}),
    ...(typeof options.prBody === 'string' && !Array.isArray(options.labels)
      ? { available: true, labels: readPrContext().labels, body: options.prBody }
      : {})
  };

  if (!context.available) {
    warnings.push(context.reason || 'Governance approval check skipped because PR context is unavailable.');
    return buildResult({ requiredRules, context, policy, issues, warnings });
  }

  const section = extractSection(context.body, policy.section_heading);
  const fieldValues = parseApprovalSection(section, policy);
  const normalizedLabels = new Set((context.labels || []).map((entry) => String(entry || '').trim()));

  requiredRules.forEach((rule) => {
    if (!normalizedLabels.has(rule.required_label)) {
      issues.push(`Missing required governance approval label "${rule.required_label}".`);
    }
  });

  if (!section) {
    issues.push(`Missing required PR section "## ${policy.section_heading}".`);
    return buildResult({ requiredRules, context, policy, issues, warnings });
  }

  (policy.required_fields || []).forEach((field) => {
    const value = String(fieldValues[field.id] || '').trim();
    if (!value || /^n\/?a$/i.test(value) || /^none$/i.test(value) || /^not required/i.test(value)) {
      issues.push(`Governance approval field "${field.label}" must be populated for governance-sensitive PRs.`);
    }
  });

  const declaredClasses = new Set(parseListField(fieldValues.approval_class));
  requiredRules.forEach((rule) => {
    const token = normalizeApprovalToken(rule.id);
    const labelToken = normalizeApprovalToken(rule.required_label);
    if (!declaredClasses.has(token) && !declaredClasses.has(labelToken)) {
      issues.push(
        `Governance approval field "Approval class" must include "${rule.id}" (or "${rule.required_label}").`
      );
    }
  });

  return buildResult({ requiredRules, context, policy, issues, warnings });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const result = run({ baseRef: args.baseRef, files: args.files });
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.skipped) {
    if (result.required_rule_ids.length === 0) {
      console.log('✅ No governance approvals required for this PR.');
    } else {
      result.warnings.forEach((warning) => console.warn(`⚠️ ${warning}`));
      console.log(`⏭️ Governance approvals could not be enforced locally; required classes: ${result.required_rule_ids.join(', ')}`);
    }
  } else if (result.passed) {
    console.log(`✅ Governance approvals satisfied (${result.required_rule_ids.join(', ')})`);
  } else {
    result.issues.forEach((issue) => console.error(`❌ ${issue}`));
  }

  process.exit(result.passed ? 0 : 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`check-governance-approvals failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  POLICY_PATH,
  parseArgs,
  deriveRequiredRules,
  extractSection,
  parseApprovalSection,
  run
};
