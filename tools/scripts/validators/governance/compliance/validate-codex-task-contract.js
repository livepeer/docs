#!/usr/bin/env node
/**
 * @script            validate-codex-task-contract
 * @category          enforcer
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, .codex/task-contract.yaml, tests/config/codex-issue-policy.json, .github/pull_request_template.md, .github/pull-request-template-v2.md
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches
 * @pipeline          P1 (commit), P2 (push), P3 (PR, Track B)
 * @usage             node tools/scripts/validate-codex-task-contract.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('../lib/load-js-yaml');

const DEFAULT_CONTRACT_PATH = '.codex/task-contract.yaml';
const DEFAULT_ISSUE_POLICY_PATH = 'tests/config/codex-issue-policy.json';
const DEFAULT_BASE_BRANCH = 'docs-v2-dev';
const DEFAULT_ISSUE_SOURCE = 'auto';
const DEFAULT_ISSUE_TOKEN_ENV = 'GITHUB_TOKEN';
const CODEX_BRANCH_RE = /^codex\/(\d+)-[a-z0-9][a-z0-9-]*$/;
const REQUIRED_PR_SECTIONS = ['Scope', 'Validation', 'Follow-up Tasks'];
const PR_GENERATOR_MARKER_PREFIX = 'codex-pr-body-generated';

const REPO_ROOT = getRepoRoot();

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && result.stdout.trim()) {
    return result.stdout.trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function fail(message, jsonMode) {
  if (jsonMode) {
    process.stdout.write(
      JSON.stringify(
        {
          passed: false,
          message,
          errors: [message]
        },
        null,
        2
      )
    );
    process.stdout.write('\n');
    return;
  }
  console.error(`❌ ${message}`);
}

function usage() {
  process.stdout.write(
    [
      'Usage: node tools/scripts/validate-codex-task-contract.js [options]',
      '',
      'Options:',
      '  --contract <path>            Path to task contract file',
      '  --branch <name>              Branch to validate (default: current branch)',
      '  --base-ref <branch>          Base branch for changed-file diff',
      '  --files <a,b,c>              Explicit changed-file list (skip git diff)',
      '  --staged                     Validate staged files for scope checks',
      '  --validate-contract-only     Validate schema + branch binding only',
      '  --require-committed-work     Require at least one commit and non-empty diff ahead of base',
      '  --require-clean-tree         Require no staged/unstaged/untracked working tree changes',
      '  --require-pr-ready           Shortcut for --require-committed-work + --require-clean-tree',
      '  --require-pr-body            Enforce PR body sections',
      '  --pr-body-file <path>        Read PR body from file',
      '  --require-issue-state        Enforce linked issue state + labels policy',
      '  --issue-number <int>         Linked issue number override',
      '  --issue-repo <owner/repo>    Linked issue repo override',
      '  --issue-source <mode>        api | gh | auto (default: auto)',
      '  --issue-token-env <ENV>      Token env var for API mode (default: GITHUB_TOKEN)',
      '  --issue-policy <path>        Issue policy JSON path',
      '  --quiet                      Suppress success/skip logs',
      '  --json                       Emit JSON result',
      '  --help                       Show this help message'
    ].join('\n')
  );
}

function parseCsvList(raw) {
  if (!raw) return [];
  return [...new Set(String(raw).split(',').map((entry) => toPosix(entry.trim())).filter(Boolean))];
}

function parseArgs(argv) {
  const args = {
    contractPath: DEFAULT_CONTRACT_PATH,
    branch: '',
    baseRef: '',
    files: null,
    staged: false,
    validateContractOnly: false,
    requireCommittedWork: false,
    requireCleanTree: false,
    requirePrReady: false,
    requirePrBody: false,
    prBodyFile: '',
    requireIssueState: false,
    issueNumber: null,
    issueRepo: '',
    issueSource: DEFAULT_ISSUE_SOURCE,
    issueTokenEnv: DEFAULT_ISSUE_TOKEN_ENV,
    issuePolicyPath: DEFAULT_ISSUE_POLICY_PATH,
    quiet: false,
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--contract') {
      args.contractPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--contract=')) {
      args.contractPath = token.slice('--contract='.length).trim();
      continue;
    }
    if (token === '--branch') {
      args.branch = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--branch=')) {
      args.branch = token.slice('--branch='.length).trim();
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }
    if (token === '--files') {
      args.files = parseCsvList(argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      args.files = parseCsvList(token.slice('--files='.length));
      continue;
    }
    if (token === '--staged') {
      args.staged = true;
      continue;
    }
    if (token === '--validate-contract-only') {
      args.validateContractOnly = true;
      continue;
    }
    if (token === '--require-committed-work') {
      args.requireCommittedWork = true;
      continue;
    }
    if (token === '--require-clean-tree') {
      args.requireCleanTree = true;
      continue;
    }
    if (token === '--require-pr-ready') {
      args.requirePrReady = true;
      continue;
    }
    if (token === '--require-pr-body') {
      args.requirePrBody = true;
      continue;
    }
    if (token === '--pr-body-file') {
      args.prBodyFile = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--pr-body-file=')) {
      args.prBodyFile = token.slice('--pr-body-file='.length).trim();
      continue;
    }
    if (token === '--require-issue-state') {
      args.requireIssueState = true;
      continue;
    }
    if (token === '--issue-number') {
      const raw = String(argv[i + 1] || '').trim();
      args.issueNumber = raw ? Number(raw) : null;
      i += 1;
      continue;
    }
    if (token.startsWith('--issue-number=')) {
      const raw = token.slice('--issue-number='.length).trim();
      args.issueNumber = raw ? Number(raw) : null;
      continue;
    }
    if (token === '--issue-repo') {
      args.issueRepo = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--issue-repo=')) {
      args.issueRepo = token.slice('--issue-repo='.length).trim();
      continue;
    }
    if (token === '--issue-source') {
      args.issueSource = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
      continue;
    }
    if (token.startsWith('--issue-source=')) {
      args.issueSource = token.slice('--issue-source='.length).trim().toLowerCase();
      continue;
    }
    if (token === '--issue-token-env') {
      args.issueTokenEnv = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--issue-token-env=')) {
      args.issueTokenEnv = token.slice('--issue-token-env='.length).trim();
      continue;
    }
    if (token === '--issue-policy') {
      args.issuePolicyPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--issue-policy=')) {
      args.issuePolicyPath = token.slice('--issue-policy='.length).trim();
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!['api', 'gh', 'auto'].includes(args.issueSource)) {
    throw new Error(`--issue-source must be one of: api, gh, auto (received "${args.issueSource}")`);
  }

  if (args.issueNumber != null && (!Number.isInteger(args.issueNumber) || args.issueNumber <= 0)) {
    throw new Error('--issue-number must be a positive integer');
  }

  if (args.requirePrReady) {
    args.requireCommittedWork = true;
    args.requireCleanTree = true;
  }

  return args;
}

function runGit(args) {
  const result = spawnSync('git', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    const details = stderr || stdout || `git ${args.join(' ')} failed`;
    throw new Error(details);
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

function runCmd(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    ...options
  });

  return {
    status: result.status,
    stdout: String(result.stdout || ''),
    stderr: String(result.stderr || '')
  };
}

function detectBranch(argsBranch) {
  if (argsBranch) return argsBranch;
  const envHeadRef = String(process.env.GITHUB_HEAD_REF || '').trim();
  if (envHeadRef) return envHeadRef;
  const fromGit = tryRunGit(['rev-parse', '--abbrev-ref', 'HEAD']);
  return String(fromGit || '').trim();
}

function normalizeArray(value, fieldName, required) {
  if (value == null) {
    if (required) throw new Error(`"${fieldName}" is required and must be a non-empty array`);
    return [];
  }
  if (!Array.isArray(value)) {
    throw new Error(`"${fieldName}" must be an array`);
  }
  const normalized = value
    .map((entry) => String(entry == null ? '' : entry).trim())
    .filter(Boolean);
  if (required && normalized.length === 0) {
    throw new Error(`"${fieldName}" must include at least one entry`);
  }
  return normalized;
}

function normalizeIntegerArray(value, fieldName) {
  if (value == null) return [];
  if (!Array.isArray(value)) {
    throw new Error(`"${fieldName}" must be an array of integers`);
  }
  const normalized = [];
  value.forEach((entry) => {
    const n = Number(entry);
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error(`"${fieldName}" must contain only positive integers`);
    }
    normalized.push(n);
  });
  return normalized;
}

function normalizeTaskContract(rawContract, currentBranch) {
  if (!rawContract || typeof rawContract !== 'object' || Array.isArray(rawContract)) {
    throw new Error('Task contract must be a YAML object');
  }

  const taskId = Number(rawContract.task_id);
  if (!Number.isInteger(taskId) || taskId <= 0) {
    throw new Error('"task_id" is required and must be a positive integer');
  }

  const baseBranch = String(rawContract.base_branch == null ? '' : rawContract.base_branch).trim();
  if (!baseBranch) {
    throw new Error(`"base_branch" is required (default should be "${DEFAULT_BASE_BRANCH}")`);
  }

  const branch = String(rawContract.branch == null ? '' : rawContract.branch).trim();
  if (!branch) {
    throw new Error('"branch" is required and must match the current branch');
  }

  const scopeIn = normalizeArray(rawContract.scope_in, 'scope_in', true);
  const scopeOut = normalizeArray(rawContract.scope_out, 'scope_out', false);
  const allowedGenerated = normalizeArray(rawContract.allowed_generated, 'allowed_generated', false);
  const acceptanceChecks = normalizeArray(rawContract.acceptance_checks, 'acceptance_checks', true);
  const riskFlags = normalizeArray(rawContract.risk_flags, 'risk_flags', false);
  const followUpIssues = normalizeIntegerArray(rawContract.follow_up_issues, 'follow_up_issues');

  const branchMatch = branch.match(CODEX_BRANCH_RE);
  if (!branchMatch) {
    throw new Error(`"branch" must match codex/<issue-id>-<slug>; received "${branch}"`);
  }

  const branchIssueId = Number(branchMatch[1]);
  if (branchIssueId !== taskId) {
    throw new Error(`task_id (${taskId}) does not match branch issue id (${branchIssueId})`);
  }

  if (currentBranch && branch !== currentBranch) {
    throw new Error(`contract branch "${branch}" does not match current branch "${currentBranch}"`);
  }

  return {
    taskId,
    baseBranch,
    branch,
    scopeIn,
    scopeOut,
    allowedGenerated,
    acceptanceChecks,
    riskFlags,
    followUpIssues
  };
}

function toPatternRegex(pattern) {
  const normalized = toPosix(String(pattern || '').trim()).replace(/^\.?\//, '');
  if (!normalized) return null;

  if (normalized.includes('*')) {
    const escaped = normalized.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
    const wildcard = escaped.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*');
    return new RegExp(`^${wildcard}$`);
  }

  if (normalized.endsWith('/')) {
    const escapedPrefix = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escapedPrefix}`);
  }

  const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escaped}(?:$|/)`);
}

function matchesAnyPattern(filePath, patterns) {
  return patterns.some((pattern) => {
    const re = toPatternRegex(pattern);
    return re ? re.test(filePath) : false;
  });
}

function ensureBaseRefExists(baseRef) {
  const remoteRef = `origin/${baseRef}`;
  if (tryRunGit(['rev-parse', '--verify', remoteRef])) return remoteRef;
  if (tryRunGit(['rev-parse', '--verify', baseRef])) return baseRef;
  throw new Error(
    `Unable to resolve base ref "${baseRef}" or "${remoteRef}". Fetch the base branch before validating scope.`
  );
}

function getChangedFiles({ explicitFiles, staged, baseRef }) {
  if (Array.isArray(explicitFiles)) {
    return [...new Set(explicitFiles.map((entry) => toPosix(entry.trim())).filter(Boolean))];
  }

  if (staged) {
    const output = tryRunGit(['diff', '--cached', '--name-only', '--diff-filter=ACMRD']);
    if (!output) return [];
    return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
  }

  const resolvedBaseRef = ensureBaseRefExists(baseRef);
  const mergeBase = runGit(['merge-base', resolvedBaseRef, 'HEAD']);
  if (!mergeBase) return [];
  const output = runGit(['diff', '--name-only', '--diff-filter=ACMRD', `${mergeBase}..HEAD`]);
  if (!output) return [];
  return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
}

function getAheadCommitCount(baseRef) {
  if (Object.prototype.hasOwnProperty.call(process.env, 'CODEX_MOCK_AHEAD_COUNT')) {
    const mock = String(process.env.CODEX_MOCK_AHEAD_COUNT || '').trim();
    const count = Number(mock);
    if (!Number.isInteger(count) || count < 0) {
      throw new Error(`Invalid CODEX_MOCK_AHEAD_COUNT value "${mock}"`);
    }
    return count;
  }

  const resolvedBaseRef = ensureBaseRefExists(baseRef);
  const output = runGit(['rev-list', '--count', `${resolvedBaseRef}..HEAD`]);
  const count = Number(output);
  if (!Number.isInteger(count) || count < 0) {
    throw new Error(`Unable to determine ahead commit count for ${resolvedBaseRef}`);
  }
  return count;
}

function getWorkingTreeStatusLines() {
  if (Object.prototype.hasOwnProperty.call(process.env, 'CODEX_MOCK_WORKTREE_STATUS')) {
    const mock = String(process.env.CODEX_MOCK_WORKTREE_STATUS || '');
    return mock
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter(Boolean);
  }

  const output = runGit(['status', '--porcelain=v1', '--untracked-files=all']);
  if (!output) return [];
  return output
    .split('\n')
    .map((line) => line.trimEnd())
    .filter(Boolean);
}

function loadTaskContract(contractPathAbs) {
  if (!fs.existsSync(contractPathAbs)) {
    throw new Error(`Missing required task contract: ${toPosix(path.relative(REPO_ROOT, contractPathAbs))}`);
  }
  const raw = fs.readFileSync(contractPathAbs, 'utf8');
  let parsed;
  try {
    parsed = yaml.load(raw);
  } catch (error) {
    throw new Error(`Invalid YAML in task contract: ${error.message}`);
  }
  return parsed;
}

function loadJsonFile(absPath, label) {
  if (!fs.existsSync(absPath)) {
    throw new Error(`${label} not found: ${toPosix(path.relative(REPO_ROOT, absPath))}`);
  }

  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid JSON in ${label}: ${error.message}`);
  }
}

function normalizeIssuePolicy(policyRaw) {
  if (!policyRaw || typeof policyRaw !== 'object' || Array.isArray(policyRaw)) {
    throw new Error('Issue policy must be a JSON object');
  }

  const requiredLabels = normalizeArray(policyRaw.required_labels, 'required_labels', true);
  const requiredPrefixes = normalizeArray(policyRaw.required_label_prefixes, 'required_label_prefixes', true);
  const forbiddenLabels = normalizeArray(policyRaw.forbidden_labels, 'forbidden_labels', false);
  const requiredState = String(policyRaw.required_state == null ? '' : policyRaw.required_state).trim().toLowerCase();

  if (!requiredState) {
    throw new Error('"required_state" is required in issue policy');
  }

  return {
    requiredLabels,
    requiredPrefixes,
    forbiddenLabels,
    requiredState
  };
}

function loadPrBody(args) {
  if (args.prBodyFile) {
    const abs = path.resolve(REPO_ROOT, args.prBodyFile);
    if (!fs.existsSync(abs)) {
      throw new Error(`PR body file not found: ${toPosix(path.relative(REPO_ROOT, abs))}`);
    }
    return fs.readFileSync(abs, 'utf8');
  }

  const eventPath = String(process.env.GITHUB_EVENT_PATH || '').trim();
  if (eventPath && fs.existsSync(eventPath)) {
    try {
      const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
      const body = event && event.pull_request && typeof event.pull_request.body === 'string' ? event.pull_request.body : '';
      if (body.trim()) return body;
    } catch (error) {
      throw new Error(`Failed to parse GITHUB_EVENT_PATH: ${error.message}`);
    }
  }

  const envBody = String(process.env.PULL_REQUEST_BODY || '').trim();
  if (envBody) return envBody;
  return '';
}

function missingPrSections(prBody) {
  return REQUIRED_PR_SECTIONS.filter((section) => {
    const re = new RegExp(`^#{2,6}\\s*${section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'im');
    return !re.test(prBody);
  });
}

function parsePrGeneratorMarker(prBody) {
  const markerMatch = prBody.match(
    /<!--\s*codex-pr-body-generated:\s*task_id=(\d+);\s*branch=([^;]+);\s*contract=([^>]+)\s*-->/i
  );
  if (!markerMatch) return null;
  const taskId = Number(markerMatch[1]);
  const branch = String(markerMatch[2] || '').trim();
  const contract = String(markerMatch[3] || '').trim();
  return {
    taskId,
    branch,
    contract
  };
}

function parseClosingIssueRefs(prBody) {
  const refs = [];
  const re = /\b(?:fixes|closes|resolves)\s+(?:([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+))?#(\d+)\b/gi;

  let match;
  while ((match = re.exec(prBody)) !== null) {
    const issueNumber = Number(match[2]);
    if (!Number.isInteger(issueNumber) || issueNumber <= 0) continue;
    refs.push({
      repo: String(match[1] || '').trim(),
      issueNumber
    });
  }

  return refs;
}

function validateScope(contract, changedFiles, contractPathRel) {
  const violations = [];
  const implicitAllowed = [contractPathRel];
  const allowed = [...contract.scopeIn, ...contract.allowedGenerated, ...implicitAllowed];

  changedFiles.forEach((filePath) => {
    if (matchesAnyPattern(filePath, contract.scopeOut)) {
      violations.push(`Out-of-scope (scope_out): ${filePath}`);
      return;
    }
    if (!matchesAnyPattern(filePath, allowed)) {
      violations.push(`Out-of-scope (scope_in/allowed_generated): ${filePath}`);
    }
  });

  return violations;
}

function validateCommittedWork({ branch, baseRef, changedFiles }) {
  const violations = [];
  const aheadCount = getAheadCommitCount(baseRef);

  if (aheadCount <= 0) {
    violations.push(
      `Branch "${branch}" has no commits ahead of ${baseRef}. Codex task completion requires at least one committed change.`
    );
  }

  if (changedFiles.length === 0) {
    violations.push(
      `Branch "${branch}" has no file changes relative to ${baseRef}. Empty codex branches/PRs are not allowed.`
    );
  }

  return violations;
}

function validateCleanTree() {
  const statusLines = getWorkingTreeStatusLines();
  if (statusLines.length === 0) return [];

  const preview = statusLines.slice(0, 10).join(', ');
  const suffix = statusLines.length > 10 ? ` (+${statusLines.length - 10} more)` : '';
  return [`Working tree is not clean. Commit or discard changes before finalizing/opening a PR: ${preview}${suffix}`];
}

function normalizeIssueRepo(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const normalized = raw.replace(/^https?:\/\/github\.com\//i, '').replace(/^git@github\.com:/i, '').replace(/\.git$/i, '');
  const match = normalized.match(/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)$/);
  if (!match) {
    throw new Error(`Invalid issue repo "${value}"; expected owner/repo`);
  }
  return `${match[1]}/${match[2]}`;
}

function resolveIssueRepo(args) {
  if (args.issueRepo) {
    return normalizeIssueRepo(args.issueRepo);
  }

  const envRepo = String(process.env.GITHUB_REPOSITORY || '').trim();
  if (envRepo) {
    return normalizeIssueRepo(envRepo);
  }

  const originUrl = tryRunGit(['config', '--get', 'remote.origin.url']);
  if (!originUrl) {
    throw new Error('Could not resolve issue repo from --issue-repo, GITHUB_REPOSITORY, or origin remote');
  }

  return normalizeIssueRepo(originUrl);
}

function resolveIssueNumber(args, contract) {
  if (args.issueNumber != null) {
    return args.issueNumber;
  }
  return contract.taskId;
}

function extractLabels(issue) {
  const rawLabels = Array.isArray(issue && issue.labels) ? issue.labels : [];
  return rawLabels
    .map((label) => {
      if (typeof label === 'string') return label.trim();
      if (label && typeof label.name === 'string') return label.name.trim();
      return '';
    })
    .filter(Boolean);
}

function fetchIssueViaApi({ issueRepo, issueNumber, tokenEnv }) {
  const tokenName = String(tokenEnv || DEFAULT_ISSUE_TOKEN_ENV).trim() || DEFAULT_ISSUE_TOKEN_ENV;
  const token = String(process.env[tokenName] || '').trim();
  if (!token) {
    throw new Error(`Missing token in env ${tokenName} for API issue lookup`);
  }

  const url = `https://api.github.com/repos/${issueRepo}/issues/${issueNumber}`;
  const cmd = runCmd('curl', [
    '-sSfL',
    '-H',
    'Accept: application/vnd.github+json',
    '-H',
    `Authorization: Bearer ${token}`,
    '-H',
    'X-GitHub-Api-Version: 2022-11-28',
    '-H',
    'User-Agent: livepeer-docs-codex-validator',
    url
  ]);

  if (cmd.status !== 0) {
    const details = cmd.stderr.trim() || cmd.stdout.trim() || `curl failed for ${url}`;
    throw new Error(`GitHub API issue lookup failed: ${details}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(cmd.stdout);
  } catch (error) {
    throw new Error(`GitHub API issue lookup returned invalid JSON: ${error.message}`);
  }

  return {
    source: 'api',
    issue: {
      state: String(parsed.state || '').toLowerCase(),
      labels: extractLabels(parsed)
    }
  };
}

function fetchIssueViaGh({ issueRepo, issueNumber }) {
  const cmd = runCmd('gh', ['issue', 'view', String(issueNumber), '--repo', issueRepo, '--json', 'state,labels']);

  if (cmd.status !== 0) {
    const details = cmd.stderr.trim() || cmd.stdout.trim() || `gh issue view failed for ${issueRepo}#${issueNumber}`;
    throw new Error(`gh issue lookup failed: ${details}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(cmd.stdout);
  } catch (error) {
    throw new Error(`gh issue lookup returned invalid JSON: ${error.message}`);
  }

  return {
    source: 'gh',
    issue: {
      state: String(parsed.state || '').toLowerCase(),
      labels: extractLabels(parsed)
    }
  };
}

function fetchIssue({ issueRepo, issueNumber, issueSource, issueTokenEnv }) {
  const mockIssueError = String(process.env.CODEX_MOCK_ISSUE_ERROR || '').trim();
  if (mockIssueError) {
    throw new Error(mockIssueError);
  }

  const mockIssueJson = String(process.env.CODEX_MOCK_ISSUE_JSON || '').trim();
  if (mockIssueJson) {
    let parsed;
    try {
      parsed = JSON.parse(mockIssueJson);
    } catch (error) {
      throw new Error(`Invalid CODEX_MOCK_ISSUE_JSON payload: ${error.message}`);
    }

    return {
      source: 'mock',
      issue: {
        state: String(parsed.state || '').toLowerCase(),
        labels: extractLabels(parsed)
      }
    };
  }

  if (issueSource === 'api') {
    return fetchIssueViaApi({ issueRepo, issueNumber, tokenEnv: issueTokenEnv });
  }

  if (issueSource === 'gh') {
    return fetchIssueViaGh({ issueRepo, issueNumber });
  }

  const token = String(process.env[String(issueTokenEnv || DEFAULT_ISSUE_TOKEN_ENV).trim() || DEFAULT_ISSUE_TOKEN_ENV] || '').trim();
  if (token) {
    try {
      return fetchIssueViaApi({ issueRepo, issueNumber, tokenEnv: issueTokenEnv });
    } catch (_error) {
      return fetchIssueViaGh({ issueRepo, issueNumber });
    }
  }

  return fetchIssueViaGh({ issueRepo, issueNumber });
}

function validateIssuePolicy({ issueRepo, issueNumber, issueSource, issueTokenEnv, policy }) {
  const violations = [];

  let fetched;
  try {
    fetched = fetchIssue({
      issueRepo,
      issueNumber,
      issueSource,
      issueTokenEnv
    });
  } catch (error) {
    violations.push(`Issue readiness check failed for ${issueRepo}#${issueNumber}: ${error.message}`);
    return violations;
  }

  const labels = fetched.issue.labels;
  const state = fetched.issue.state;

  policy.requiredLabels.forEach((name) => {
    if (!labels.includes(name)) {
      violations.push(`Issue ${issueRepo}#${issueNumber} missing required label: ${name}`);
    }
  });

  policy.requiredPrefixes.forEach((prefix) => {
    if (!labels.some((label) => label.startsWith(prefix))) {
      violations.push(`Issue ${issueRepo}#${issueNumber} missing required label prefix class: ${prefix}`);
    }
  });

  policy.forbiddenLabels.forEach((forbidden) => {
    if (labels.includes(forbidden)) {
      violations.push(`Issue ${issueRepo}#${issueNumber} has forbidden label: ${forbidden}`);
    }
  });

  if (String(state || '').toLowerCase() !== policy.requiredState) {
    violations.push(
      `Issue ${issueRepo}#${issueNumber} must be in state "${policy.requiredState}" (received "${state || 'unknown'}")`
    );
  }

  return violations;
}

function writeResult(result, jsonMode) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  if (result.skipped) {
    process.stdout.write(`⏭️ ${result.message}\n`);
    return;
  }

  if (result.passed) {
    process.stdout.write(`✅ ${result.message}\n`);
    return;
  }

  console.error(`❌ ${result.message}`);
  result.errors.forEach((entry) => {
    console.error(`  - ${entry}`);
  });
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const branch = detectBranch(args.branch);
    if (!branch) {
      throw new Error('Unable to determine current branch. Pass --branch explicitly.');
    }

    if (!branch.startsWith('codex/')) {
      const result = {
        passed: true,
        skipped: true,
        branch,
        message: `Branch "${branch}" is not codex/*; task-contract checks skipped.`,
        errors: []
      };
      if (!args.quiet || args.json) writeResult(result, args.json);
      process.exit(0);
    }

    const codexPatternMatch = branch.match(CODEX_BRANCH_RE);
    if (!codexPatternMatch) {
      throw new Error(`Branch "${branch}" must match codex/<issue-id>-<slug>.`);
    }

    const contractPathAbs = path.resolve(REPO_ROOT, args.contractPath);
    const contractPathRel = toPosix(path.relative(REPO_ROOT, contractPathAbs));
    const rawContract = loadTaskContract(contractPathAbs);
    const contract = normalizeTaskContract(rawContract, branch);

    const errors = [];

    const needsBaseDiff =
      !args.validateContractOnly || args.requireCommittedWork || args.requirePrReady;
    let baseRef = '';
    let changedFiles = [];

    if (needsBaseDiff) {
      baseRef = args.baseRef || contract.baseBranch || DEFAULT_BASE_BRANCH;
      changedFiles = getChangedFiles({
        explicitFiles: args.files,
        staged: args.staged,
        baseRef
      });
    }

    if (!args.validateContractOnly) {
      const scopeViolations = validateScope(contract, changedFiles, contractPathRel);
      errors.push(...scopeViolations);
    }

    if (args.requireCommittedWork) {
      errors.push(
        ...validateCommittedWork({
          branch,
          baseRef,
          changedFiles
        })
      );
    }

    if (args.requireCleanTree) {
      errors.push(...validateCleanTree());
    }

    if (!args.validateContractOnly && args.requirePrBody) {
      const prBody = loadPrBody(args);
      if (!prBody.trim()) {
        errors.push(
          'PR body is required but was not found. Provide --pr-body-file or run in PR context with GITHUB_EVENT_PATH.'
        );
      } else {
        const missing = missingPrSections(prBody);
        missing.forEach((section) => {
          errors.push(`PR body missing required section heading: ${section}`);
        });

        const marker = parsePrGeneratorMarker(prBody);
        if (!marker) {
          errors.push(
            `PR body missing required generated marker: <!-- ${PR_GENERATOR_MARKER_PREFIX}: task_id=...; branch=...; contract=... -->`
          );
        } else {
          if (!Number.isInteger(marker.taskId) || marker.taskId !== contract.taskId) {
            errors.push(
              `PR body generated marker task_id mismatch: expected ${contract.taskId}, received ${marker.taskId}`
            );
          }
          if (marker.branch !== branch) {
            errors.push(`PR body generated marker branch mismatch: expected ${branch}, received ${marker.branch}`);
          }
        }

        const closingRefs = parseClosingIssueRefs(prBody);
        if (!closingRefs.some((ref) => ref.issueNumber === contract.taskId)) {
          errors.push(
            `PR body must include a closing keyword for task issue #${contract.taskId} (Fixes|Closes|Resolves #${contract.taskId})`
          );
        }
      }
    }

    if (args.requireIssueState) {
      const issuePolicyAbs = path.resolve(REPO_ROOT, args.issuePolicyPath);
      const issuePolicyRaw = loadJsonFile(issuePolicyAbs, 'Issue policy');
      const issuePolicy = normalizeIssuePolicy(issuePolicyRaw);
      const issueRepo = resolveIssueRepo(args);
      const issueNumber = resolveIssueNumber(args, contract);

      const issueViolations = validateIssuePolicy({
        issueRepo,
        issueNumber,
        issueSource: args.issueSource,
        issueTokenEnv: args.issueTokenEnv,
        policy: issuePolicy
      });
      errors.push(...issueViolations);
    }

    if (errors.length > 0) {
      const result = {
        passed: false,
        skipped: false,
        branch,
        contract: contractPathRel,
        errors,
        message: 'Codex task contract validation failed.'
      };
      writeResult(result, args.json);
      process.exit(1);
    }

    const result = {
      passed: true,
      skipped: false,
      branch,
      contract: contractPathRel,
      errors: [],
      message: 'Codex task contract validation passed.'
    };
    if (!args.quiet || args.json) writeResult(result, args.json);
    process.exit(0);
  } catch (error) {
    fail(error.message, false);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
