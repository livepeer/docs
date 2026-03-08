#!/usr/bin/env node
/**
 * @script            check-github-labels
 * @category          validator
 * @purpose           qa:repo-structure
 * @scope             tools/scripts/validators/structure, GitHub labels
 * @owner             docs
 * @needs             SE-2-07, Standards 6.4
 * @purpose-statement Audits livepeer/docs GitHub labels against the SE-2-07 target catalog and optionally generates an admin-only gh remediation script
 * @pipeline          manual advisory only - never mutates GitHub state
 * @usage             node tools/scripts/validators/structure/check-github-labels.js [--json | --generate-script | --help]
 */

const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DEFAULT_REPO = 'livepeer/docs';
const EXPECTED_TARGET_COUNT = 58;
const COLOR_RE = /^[0-9a-f]{6}$/i;
const GROUP_ORDER = [
  'type',
  'status',
  'priority',
  'classification',
  'area',
  'kind',
  'lifecycle',
  'size',
  'community-standard',
  'automation',
  'release'
];

const TARGET_LABELS = [
  { name: 'type: bug', color: '7c3aed', group: 'type' },
  { name: 'type: enhancement', color: '7c3aed', group: 'type' },
  { name: 'type: documentation', color: '7c3aed', group: 'type' },
  { name: 'type: question', color: '7c3aed', group: 'type' },

  { name: 'status: needs-triage', color: '0e8a16', group: 'status' },
  { name: 'status: needs-info', color: '0e8a16', group: 'status' },
  { name: 'status: backlog', color: '0e8a16', group: 'status' },
  { name: 'status: in-progress', color: '0e8a16', group: 'status' },
  { name: 'status: blocked', color: '0e8a16', group: 'status' },

  { name: 'priority: critical', color: 'b60205', group: 'priority' },
  { name: 'priority: high', color: 'd93f0b', group: 'priority' },
  { name: 'priority: medium', color: 'fbca04', group: 'priority' },
  { name: 'priority: low', color: '0e8a16', group: 'priority' },

  { name: 'classification: breaking-change', color: 'e67e22', group: 'classification' },
  { name: 'classification: regression', color: 'e67e22', group: 'classification' },
  { name: 'classification: security', color: 'e67e22', group: 'classification' },

  { name: 'area: developers', color: '1d76db', group: 'area' },
  { name: 'area: orchestrators', color: '1d76db', group: 'area' },
  { name: 'area: gateways', color: '1d76db', group: 'area' },
  { name: 'area: delegators', color: '1d76db', group: 'area' },
  { name: 'area: lpt-governance', color: '1d76db', group: 'area' },
  { name: 'area: ai-inference', color: '1d76db', group: 'area' },
  { name: 'area: community', color: '1d76db', group: 'area' },

  { name: 'kind: content-gap', color: '0d7377', group: 'kind' },
  { name: 'kind: content-fix', color: '0d7377', group: 'kind' },
  { name: 'kind: accessibility', color: '0d7377', group: 'kind' },
  { name: 'kind: seo', color: '0d7377', group: 'kind' },
  { name: 'kind: i18n', color: '0d7377', group: 'kind' },
  { name: 'kind: api-reference', color: '0d7377', group: 'kind' },
  { name: 'kind: ux-improvement', color: '0d7377', group: 'kind' },

  { name: 'lifecycle: stale', color: '5a6271', group: 'lifecycle' },
  { name: 'lifecycle: frozen', color: '5a6271', group: 'lifecycle' },

  { name: 'size: XS', color: '0e8a16', group: 'size' },
  { name: 'size: S', color: '7bc67e', group: 'size' },
  { name: 'size: M', color: 'fbca04', group: 'size' },
  { name: 'size: L', color: 'd93f0b', group: 'size' },

  { name: 'good first issue', color: '7057ff', group: 'community-standard' },
  { name: 'help wanted', color: '008672', group: 'community-standard' },
  { name: 'duplicate', color: 'cfd3d7', group: 'community-standard' },
  { name: 'wontfix', color: 'ffffff', group: 'community-standard' },

  { name: 'ai-opened:codex', color: 'aaaaaa', group: 'automation' },
  { name: 'dependencies', color: '0366d6', group: 'automation' },
  { name: 'javascript', color: '168700', group: 'automation' },
  { name: 'python', color: '2b67c6', group: 'automation' },
  { name: 'Docs', color: 'bec2c8', group: 'automation' },
  { name: 'DevEx', color: '4cb782', group: 'automation' },
  { name: 'linear', color: '5e6ad2', group: 'automation' },
  { name: 'team: studio', color: '0b0356', group: 'automation' },
  { name: 'Epic', color: '3e4b9e', group: 'automation' },
  { name: 'Playback', color: 'fe7817', group: 'automation' },
  { name: 'docs-v2', color: '1d76db', group: 'automation' },
  { name: 'component-change-approved', color: 'ededed', group: 'automation' },

  { name: 'custom', color: 'ededed', group: 'release' },
  { name: 'graduate', color: 'ededed', group: 'release' },
  { name: 'major', color: 'ededed', group: 'release' },
  { name: 'minor', color: 'ededed', group: 'release' },
  { name: 'patch', color: 'ededed', group: 'release' },
  { name: 'prerelease', color: 'ededed', group: 'release' }
];

const LEGACY_RENAMES = [
  { from: 'Docs:v2', to: 'docs-v2' },
  { from: 'type: content', to: 'type: documentation' },
  { from: 'type: feature', to: 'type: enhancement' },
  { from: 'area: broadcasters', to: 'area: gateways' },
  { from: 'area: protocol', to: 'area: developers' },
  { from: 'area: tokenholders', to: 'area: lpt-governance' }
];

function usage() {
  process.stdout.write(
    [
      'Usage: node tools/scripts/validators/structure/check-github-labels.js [options]',
      '',
      'Options:',
      '  --json             Emit machine-readable JSON audit results',
      '  --generate-script  Emit an admin-run gh remediation script',
      '  --help, -h         Show this help message'
    ].join('\n')
  );
  process.stdout.write('\n');
}

function fail(message) {
  process.stderr.write(`❌ ${message}\n`);
  process.exit(1);
}

function parseArgs(argv) {
  const options = {
    json: false,
    generateScript: false,
    help: false
  };

  argv.forEach((token) => {
    if (token === '--json') {
      options.json = true;
      return;
    }
    if (token === '--generate-script') {
      options.generateScript = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      options.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (options.json && options.generateScript) {
    throw new Error('--json and --generate-script cannot be used together');
  }

  return options;
}

function runCmd(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    ...options
  });

  return {
    status: result.status,
    stdout: String(result.stdout || ''),
    stderr: String(result.stderr || ''),
    error: result.error || null
  };
}

function normalizeColor(value) {
  return String(value || '')
    .trim()
    .replace(/^#/, '')
    .toLowerCase();
}

function normalizeName(value) {
  return String(value || '').trim();
}

function toComparableName(value) {
  return normalizeName(value).toLowerCase();
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\"'\"'`)}'`;
}

function sortByGroupThenName(left, right) {
  const leftGroupIndex = GROUP_ORDER.indexOf(left.group);
  const rightGroupIndex = GROUP_ORDER.indexOf(right.group);
  if (leftGroupIndex !== rightGroupIndex) {
    return leftGroupIndex - rightGroupIndex;
  }
  const leftName = String(left.name || left.to || left.from || '');
  const rightName = String(right.name || right.to || right.from || '');
  return leftName.localeCompare(rightName);
}

function sortByName(left, right) {
  return left.name.localeCompare(right.name);
}

function extractJsonPayload(text) {
  const trimmed = String(text || '').trim();
  if (!trimmed) {
    throw new Error('Command returned no JSON payload');
  }

  try {
    return JSON.parse(trimmed);
  } catch (_error) {
    const arrayStart = trimmed.indexOf('[');
    const arrayEnd = trimmed.lastIndexOf(']');
    if (arrayStart !== -1 && arrayEnd > arrayStart) {
      return JSON.parse(trimmed.slice(arrayStart, arrayEnd + 1));
    }

    const objectStart = trimmed.indexOf('{');
    const objectEnd = trimmed.lastIndexOf('}');
    if (objectStart !== -1 && objectEnd > objectStart) {
      return JSON.parse(trimmed.slice(objectStart, objectEnd + 1));
    }
  }

  throw new Error('Unable to parse JSON payload from command output');
}

function parseGitHubRepo(remoteUrl) {
  const raw = String(remoteUrl || '').trim();
  if (!raw) return '';

  const normalized = raw.replace(/\.git$/i, '');
  const match = normalized.match(/github\.com[:/]([^/]+\/[^/]+)$/i);
  return match ? match[1] : '';
}

function resolveRepo() {
  const envRepo = normalizeName(process.env.GITHUB_REPOSITORY);
  if (envRepo) return envRepo;

  const remote = runCmd('git', ['remote', 'get-url', 'origin']);
  if (remote.status === 0) {
    const parsed = parseGitHubRepo(remote.stdout);
    if (parsed) return parsed;
  }

  return DEFAULT_REPO;
}

function validateTargetCatalog() {
  if (TARGET_LABELS.length !== EXPECTED_TARGET_COUNT) {
    throw new Error(`Expected ${EXPECTED_TARGET_COUNT} target labels but found ${TARGET_LABELS.length}`);
  }

  const seenNames = new Set();
  const targetNames = new Set();

  TARGET_LABELS.forEach((label) => {
    const comparableName = toComparableName(label.name);
    const color = normalizeColor(label.color);

    if (!label.name || !label.group) {
      throw new Error(`Target label is missing required fields: ${JSON.stringify(label)}`);
    }
    if (seenNames.has(comparableName)) {
      throw new Error(`Duplicate target label name detected: ${label.name}`);
    }
    if (!COLOR_RE.test(color)) {
      throw new Error(`Invalid target color for ${label.name}: ${label.color}`);
    }
    if (!GROUP_ORDER.includes(label.group)) {
      throw new Error(`Unknown target group for ${label.name}: ${label.group}`);
    }

    seenNames.add(comparableName);
    targetNames.add(label.name);
  });

  const renameSources = new Set();
  LEGACY_RENAMES.forEach((entry) => {
    if (!entry.from || !entry.to) {
      throw new Error(`Invalid legacy rename entry: ${JSON.stringify(entry)}`);
    }
    if (renameSources.has(toComparableName(entry.from))) {
      throw new Error(`Duplicate legacy rename source detected: ${entry.from}`);
    }
    if (!targetNames.has(entry.to)) {
      throw new Error(`Legacy rename target is not in the target catalog: ${entry.to}`);
    }
    if (targetNames.has(entry.from)) {
      throw new Error(`Legacy rename source overlaps a target label: ${entry.from}`);
    }
    renameSources.add(toComparableName(entry.from));
  });
}

function normalizeCurrentLabel(rawLabel) {
  return {
    name: normalizeName(rawLabel && rawLabel.name),
    color: normalizeColor(rawLabel && rawLabel.color),
    description: normalizeName(rawLabel && rawLabel.description)
  };
}

function fetchLabelsWithGh(repo) {
  const result = runCmd('gh', ['label', 'list', '--repo', repo, '--json', 'name,color,description', '--limit', '200']);

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    const details = normalizeName(result.stderr) || normalizeName(result.stdout) || 'gh label list failed';
    throw new Error(details);
  }

  const payload = extractJsonPayload(result.stdout);
  if (!Array.isArray(payload)) {
    throw new Error('Unexpected gh label list payload');
  }

  return payload.map(normalizeCurrentLabel);
}

async function fetchLabelsWithApi(repo) {
  if (typeof fetch !== 'function') {
    throw new Error('Built-in fetch is unavailable in this Node runtime');
  }

  const token = normalizeName(process.env.GITHUB_TOKEN) || normalizeName(process.env.GH_TOKEN);
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'check-github-labels'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const labels = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/repos/${repo}/labels?per_page=100&page=${page}`;
    const response = await fetch(url, { headers });
    if (!response.ok) {
      const body = await response.text();
      const message = normalizeName(body) || `GitHub API request failed with HTTP ${response.status}`;
      throw new Error(message);
    }

    const payload = await response.json();
    if (!Array.isArray(payload)) {
      throw new Error('Unexpected GitHub API labels payload');
    }

    labels.push(...payload.map(normalizeCurrentLabel));
    if (payload.length < 100) break;
    page += 1;
  }

  return labels;
}

async function fetchCurrentLabels(repo) {
  try {
    const labels = fetchLabelsWithGh(repo);
    return { source: 'gh', labels };
  } catch (ghError) {
    try {
      const labels = await fetchLabelsWithApi(repo);
      return { source: 'api', labels };
    } catch (apiError) {
      throw new Error(`Unable to fetch labels via gh (${ghError.message}) or GitHub API (${apiError.message})`);
    }
  }
}

function groupForTarget(name, targetByName) {
  const target = targetByName.get(name);
  return target ? target.group : 'obsolete';
}

function buildAudit(repo, source, currentLabels) {
  const targetLabels = TARGET_LABELS
    .map((label) => ({ ...label, color: normalizeColor(label.color) }))
    .sort(sortByGroupThenName);
  const targetByName = new Map(targetLabels.map((label) => [label.name, label]));
  const currentByName = new Map(currentLabels.map((label) => [label.name, label]));
  const renameSourceSet = new Set(LEGACY_RENAMES.map((entry) => entry.from));

  const safeRenames = [];
  const blockedMergeCandidates = [];

  LEGACY_RENAMES.forEach((entry) => {
    const sourceLabel = currentByName.get(entry.from);
    if (!sourceLabel) return;

    const targetLabel = targetByName.get(entry.to);
    const existingTarget = currentByName.get(entry.to);
    const payload = {
      from: entry.from,
      to: entry.to,
      currentColor: sourceLabel.color,
      targetColor: targetLabel.color,
      group: targetLabel.group
    };

    if (existingTarget) {
      blockedMergeCandidates.push({
        ...payload,
        targetCurrentColor: existingTarget.color
      });
      return;
    }

    safeRenames.push(payload);
  });

  const safeRenameTargetByName = new Map(safeRenames.map((entry) => [entry.to, entry.from]));

  const missing = targetLabels
    .filter((label) => !currentByName.has(label.name))
    .map((label) => ({
      ...label,
      renameFrom: safeRenameTargetByName.get(label.name) || ''
    }));

  const wrongColor = targetLabels
    .filter((label) => currentByName.has(label.name))
    .map((label) => {
      const current = currentByName.get(label.name);
      return {
        name: label.name,
        group: label.group,
        currentColor: current.color,
        targetColor: label.color
      };
    })
    .filter((entry) => entry.currentColor !== entry.targetColor)
    .sort(sortByGroupThenName);

  const extra = currentLabels
    .filter((label) => !targetByName.has(label.name) && !renameSourceSet.has(label.name))
    .map((label) => ({
      ...label,
      group: groupForTarget(label.name, targetByName)
    }))
    .sort(sortByName);

  safeRenames.sort(sortByGroupThenName);
  blockedMergeCandidates.sort(sortByGroupThenName);

  const presentCount = targetLabels.filter((label) => currentByName.has(label.name)).length;

  return {
    repo,
    source,
    totals: {
      target: targetLabels.length,
      current: currentLabels.length,
      present: presentCount,
      missing: missing.length,
      extra: extra.length,
      wrongColor: wrongColor.length,
      safeRenames: safeRenames.length,
      blockedMerges: blockedMergeCandidates.length
    },
    missing,
    extra,
    wrongColor,
    safeRenames,
    blockedMergeCandidates,
    targetLabels
  };
}

function formatSection(title, items, renderItem) {
  if (items.length === 0) {
    return [`${title}: none`];
  }

  return [`${title}:`, ...items.map((item) => `  - ${renderItem(item)}`)];
}

function formatHumanReport(audit) {
  const createCount = audit.missing.filter((entry) => !entry.renameFrom).length;
  const removeCount =
    audit.extra.length + audit.safeRenames.length + audit.blockedMergeCandidates.length;

  const lines = [
    `Repo: ${audit.repo}`,
    `Source: ${audit.source}`,
    `Current labels: ${audit.totals.current}`,
    `Target labels: ${audit.totals.target}`,
    `${audit.totals.present} of ${audit.totals.target} target labels present`,
    `${createCount} to create`,
    `${removeCount} to remove`,
    '',
    ...formatSection('Missing', audit.missing, (entry) => {
      const suffix = entry.renameFrom ? `; satisfied by rename from ${entry.renameFrom}` : '';
      return `${entry.name} [${entry.group}, #${entry.color}${suffix}]`;
    }),
    '',
    ...formatSection('Extra', audit.extra, (entry) => `${entry.name} [#${entry.color || 'n/a'}]`),
    '',
    ...formatSection(
      'Wrong colour',
      audit.wrongColor,
      (entry) => `${entry.name} [current #${entry.currentColor || 'n/a'} -> target #${entry.targetColor}]`
    ),
    '',
    ...formatSection(
      'Safe rename candidates',
      audit.safeRenames,
      (entry) => `${entry.from} -> ${entry.to} [target #${entry.targetColor}]`
    ),
    '',
    ...formatSection(
      'Blocked merge candidates',
      audit.blockedMergeCandidates,
      (entry) =>
        `${entry.from} -> ${entry.to} [target already exists; relabel manually, then delete ${entry.from}]`
    )
  ];

  return `${lines.join('\n')}\n`;
}

function generateScript(audit) {
  const renameTargets = new Set(audit.safeRenames.map((entry) => entry.to));
  const missingCreates = audit.missing
    .filter((entry) => !renameTargets.has(entry.name))
    .sort(sortByGroupThenName);
  const wrongColorEdits = [...audit.wrongColor].sort(sortByGroupThenName);
  const safeRenames = [...audit.safeRenames].sort(sortByGroupThenName);
  const extras = [...audit.extra].sort(sortByName);
  const blocked = [...audit.blockedMergeCandidates].sort(sortByGroupThenName);

  const lines = [
    '#!/usr/bin/env bash',
    'set -euo pipefail',
    '',
    `REPO="${'${GITHUB_REPOSITORY:-livepeer/docs}'}"`,
    '',
    '# Generated by check-github-labels.js',
    '# Advisory-only validator output. Review before execution.',
    ''
  ];

  if (
    missingCreates.length === 0 &&
    wrongColorEdits.length === 0 &&
    safeRenames.length === 0 &&
    extras.length === 0 &&
    blocked.length === 0
  ) {
    lines.push('# No label changes required.');
    return `${lines.join('\n')}\n`;
  }

  if (missingCreates.length > 0) {
    lines.push('# Create missing labels');
    missingCreates.forEach((entry) => {
      lines.push(
        `gh label create ${shellQuote(entry.name)} --repo "$REPO" --color ${shellQuote(entry.color)}`
      );
    });
    lines.push('');
  }

  if (wrongColorEdits.length > 0) {
    lines.push('# Correct target label colours');
    wrongColorEdits.forEach((entry) => {
      lines.push(
        `gh label edit ${shellQuote(entry.name)} --repo "$REPO" --color ${shellQuote(entry.targetColor)}`
      );
    });
    lines.push('');
  }

  if (safeRenames.length > 0) {
    lines.push('# Safe renames where the destination label does not yet exist');
    safeRenames.forEach((entry) => {
      lines.push(
        `gh label edit ${shellQuote(entry.from)} --repo "$REPO" --name ${shellQuote(entry.to)} --color ${shellQuote(entry.targetColor)}`
      );
    });
    lines.push('');
  }

  if (extras.length > 0) {
    lines.push('# Delete obsolete labels that are not protected by rename mappings');
    extras.forEach((entry) => {
      lines.push(`gh label delete ${shellQuote(entry.name)} --repo "$REPO" --yes`);
    });
    lines.push('');
  }

  if (blocked.length > 0) {
    lines.push('# Manual merge follow-up required before deletion');
    blocked.forEach((entry) => {
      lines.push(
        `# ${entry.from} -> ${entry.to}: target already exists. Relabel matching issues/PRs from ${entry.from} to ${entry.to}, then delete ${entry.from}.`
      );
    });
  }

  return `${lines.join('\n')}\n`;
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    fail(error.message);
  }

  if (options.help) {
    usage();
    return;
  }

  validateTargetCatalog();

  const repo = resolveRepo();
  const fetched = await fetchCurrentLabels(repo);
  const audit = buildAudit(repo, fetched.source, fetched.labels);

  if (options.json) {
    process.stdout.write(`${JSON.stringify(audit, null, 2)}\n`);
    return;
  }

  if (options.generateScript) {
    process.stdout.write(generateScript(audit));
    return;
  }

  process.stdout.write(formatHumanReport(audit));
}

main().catch((error) => {
  fail(error.message);
});
