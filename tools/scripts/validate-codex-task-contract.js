#!/usr/bin/env node
/**
 * @script validate-codex-task-contract
 * @summary Validate codex branch task contract schema, branch binding, changed-file scope, and PR body sections.
 * @owner docs
 * @scope tools/scripts, .codex/task-contract.yaml, .github/pull_request_template.md, .github/pull-request-template-v2.md
 *
 * @usage
 *   node tools/scripts/validate-codex-task-contract.js
 *
 * @inputs
 *   --contract <path> (default: .codex/task-contract.yaml)
 *   --branch <name> (default: current git branch or GITHUB_HEAD_REF)
 *   --base-ref <branch> (default: contract base_branch)
 *   --files <comma-separated paths> (override changed-file discovery)
 *   --staged (use staged files instead of branch diff)
 *   --validate-contract-only (skip changed-file and PR body checks)
 *   --require-pr-body (enforce PR sections and generated marker from --pr-body-file or GITHUB_EVENT_PATH)
 *   --pr-body-file <path> (explicit PR body source)
 *   --quiet (suppress success/skip logs)
 *   --json (emit machine-readable result object)
 *
 * @outputs
 *   - Console validation summary and violations
 *
 * @exit-codes
 *   0 = validation passed or non-codex branch skipped
 *   1 = contract/schema/scope/PR-body validation failed
 *
 * @examples
 *   node tools/scripts/validate-codex-task-contract.js --branch codex/123-community-fixes --require-pr-body
 *   node tools/scripts/validate-codex-task-contract.js --staged --validate-contract-only
 *
 * @notes
 *   Intended for codex/* branch enforcement from pre-commit, pre-push, and PR CI.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('js-yaml');

const DEFAULT_CONTRACT_PATH = '.codex/task-contract.yaml';
const DEFAULT_BASE_BRANCH = 'docs-v2';
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
          message
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
      '  --require-pr-body            Enforce PR body sections',
      '  --pr-body-file <path>        Read PR body from file',
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
    requirePrBody: false,
    prBodyFile: '',
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
    const wildcard = escaped.replace(/\\\*\\\*/g, '.*').replace(/\\\*/g, '[^/]*');
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

    if (!args.validateContractOnly) {
      const baseRef = args.baseRef || contract.baseBranch || DEFAULT_BASE_BRANCH;
      const changedFiles = getChangedFiles({
        explicitFiles: args.files,
        staged: args.staged,
        baseRef
      });

      const scopeViolations = validateScope(contract, changedFiles, contractPathRel);
      errors.push(...scopeViolations);
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
      }
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
