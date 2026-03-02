#!/usr/bin/env node
/**
 * @script create-codex-pr
 * @summary Generate a codex PR body from task contract metadata and optionally open a prefilled GitHub pull request.
 * @owner docs
 * @scope tools/scripts, .codex/task-contract.yaml
 *
 * @usage
 *   node tools/scripts/create-codex-pr.js --create
 *
 * @inputs
 *   --contract <path> (default: .codex/task-contract.yaml)
 *   --output <path> (default: .codex/pr-body.generated.md)
 *   --title <text> (optional custom PR title)
 *   --base <branch> (default: contract base_branch)
 *   --head <branch> (default: contract branch)
 *   --changed-files <a,b,c> (optional explicit changed file list)
 *   --create (run gh pr create with generated body file)
 *   --draft (create PR as draft; only with --create)
 *   --dry-run (print gh command without creating PR)
 *   --json (emit machine-readable output)
 *
 * @outputs
 *   - Generated PR body markdown at --output path
 *   - Optional `gh pr create` invocation with `--body-file`
 *
 * @exit-codes
 *   0 = generation/create succeeded
 *   1 = validation or command failure
 *
 * @examples
 *   node tools/scripts/create-codex-pr.js
 *   node tools/scripts/create-codex-pr.js --create --draft
 *   node tools/scripts/create-codex-pr.js --dry-run --create
 *
 * @notes
 *   Designed for codex/* branches to keep PR sections aligned with task-contract scope and checks, including CI marker requirements.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const yaml = require('js-yaml');

const DEFAULT_CONTRACT_PATH = '.codex/task-contract.yaml';
const DEFAULT_OUTPUT_PATH = '.codex/pr-body.generated.md';
const DEFAULT_BASE_BRANCH = 'docs-v2';
const CODEX_BRANCH_RE = /^codex\/(\d+)-([a-z0-9][a-z0-9-]*)$/;
const PR_GENERATOR_MARKER_PREFIX = 'codex-pr-body-generated';

const REPO_ROOT = getRepoRoot();

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

function parseCsv(raw) {
  if (!raw) return [];
  return [...new Set(String(raw).split(',').map((entry) => toPosix(entry.trim())).filter(Boolean))];
}

function usage() {
  const lines = [
    'Usage: node tools/scripts/create-codex-pr.js [options]',
    '',
    'Options:',
    '  --contract <path>        Task contract path (default: .codex/task-contract.yaml)',
    '  --output <path>          PR body output path (default: .codex/pr-body.generated.md)',
    '  --title <text>           Optional PR title override',
    '  --base <branch>          Optional base branch override',
    '  --head <branch>          Optional head branch override',
    '  --changed-files <a,b,c>  Optional explicit changed file list',
    '  --create                 Run gh pr create with generated body',
    '  --draft                  Create PR as draft (requires --create)',
    '  --dry-run                Print gh command instead of executing',
    '  --json                   Emit JSON output',
    '  --help                   Show this help message'
  ];
  console.log(lines.join('\n'));
}

function parseArgs(argv) {
  const args = {
    contractPath: DEFAULT_CONTRACT_PATH,
    outputPath: DEFAULT_OUTPUT_PATH,
    title: '',
    base: '',
    head: '',
    changedFiles: null,
    create: false,
    draft: false,
    dryRun: false,
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

    if (token === '--output') {
      args.outputPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--output=')) {
      args.outputPath = token.slice('--output='.length).trim();
      continue;
    }

    if (token === '--title') {
      args.title = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--title=')) {
      args.title = token.slice('--title='.length).trim();
      continue;
    }

    if (token === '--base') {
      args.base = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base=')) {
      args.base = token.slice('--base='.length).trim();
      continue;
    }

    if (token === '--head') {
      args.head = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--head=')) {
      args.head = token.slice('--head='.length).trim();
      continue;
    }

    if (token === '--changed-files') {
      args.changedFiles = parseCsv(argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token.startsWith('--changed-files=')) {
      args.changedFiles = parseCsv(token.slice('--changed-files='.length));
      continue;
    }

    if (token === '--create') {
      args.create = true;
      continue;
    }
    if (token === '--draft') {
      args.draft = true;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.draft && !args.create) {
    throw new Error('--draft requires --create');
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

function normalizeStringArray(value, fieldName, required = false) {
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

function readContract(contractPathAbs) {
  if (!fs.existsSync(contractPathAbs)) {
    throw new Error(`Task contract not found: ${toPosix(path.relative(REPO_ROOT, contractPathAbs))}`);
  }
  const raw = fs.readFileSync(contractPathAbs, 'utf8');
  let parsed;
  try {
    parsed = yaml.load(raw);
  } catch (error) {
    throw new Error(`Invalid YAML in task contract: ${error.message}`);
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Task contract must be a YAML object');
  }

  const taskId = Number(parsed.task_id);
  if (!Number.isInteger(taskId) || taskId <= 0) {
    throw new Error('"task_id" must be a positive integer');
  }

  const branch = String(parsed.branch || '').trim();
  if (!branch) throw new Error('"branch" is required');
  if (!CODEX_BRANCH_RE.test(branch)) {
    throw new Error('"branch" must match codex/<issue-id>-<slug>');
  }

  const baseBranch = String(parsed.base_branch || DEFAULT_BASE_BRANCH).trim();
  if (!baseBranch) throw new Error('"base_branch" must be non-empty');

  return {
    taskId,
    branch,
    baseBranch,
    scopeIn: normalizeStringArray(parsed.scope_in, 'scope_in', true),
    scopeOut: normalizeStringArray(parsed.scope_out, 'scope_out', false),
    allowedGenerated: normalizeStringArray(parsed.allowed_generated, 'allowed_generated', false),
    acceptanceChecks: normalizeStringArray(parsed.acceptance_checks, 'acceptance_checks', true),
    followUpIssues: normalizeIntegerArray(parsed.follow_up_issues, 'follow_up_issues')
  };
}

function resolveBaseRef(baseRef) {
  const remoteRef = `origin/${baseRef}`;
  if (tryRunGit(['rev-parse', '--verify', remoteRef])) return remoteRef;
  if (tryRunGit(['rev-parse', '--verify', baseRef])) return baseRef;
  return '';
}

function getChangedFiles(baseBranch, headBranch, explicit) {
  if (Array.isArray(explicit)) return explicit;

  const baseRef = resolveBaseRef(baseBranch);
  if (!baseRef) return [];

  const mergeBase = tryRunGit(['merge-base', baseRef, headBranch || 'HEAD']);
  if (!mergeBase) return [];

  const output = tryRunGit(['diff', '--name-only', '--diff-filter=ACMR', `${mergeBase}..${headBranch || 'HEAD'}`]);
  if (!output) return [];
  return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
}

function branchSlugToTitle(branch) {
  const match = branch.match(CODEX_BRANCH_RE);
  if (!match) return branch;
  const rawSlug = match[2];
  return rawSlug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function withCodeList(values, fallback = 'none') {
  if (!values || values.length === 0) return [`- ${fallback}`];
  return values.map((value) => `- \`${value}\``);
}

function withIssueList(values, fallback = 'none') {
  if (!values || values.length === 0) return [`- ${fallback}`];
  return values.map((value) => `- #${value}`);
}

function buildBody(contract, context) {
  const lines = [];
  lines.push(
    `<!-- ${PR_GENERATOR_MARKER_PREFIX}: task_id=${contract.taskId}; branch=${context.headBranch}; contract=${context.contractPathRel} -->`
  );
  lines.push('');
  lines.push('## Scope');
  lines.push('');
  lines.push(`- Task: #${contract.taskId}`);
  lines.push(`- Branch: \`${context.headBranch}\``);
  lines.push(`- Base: \`${context.baseBranch}\``);
  lines.push('');
  lines.push('In scope:');
  lines.push(...withCodeList(contract.scopeIn));
  lines.push('');
  lines.push('Out of scope:');
  lines.push(...withCodeList(contract.scopeOut));
  lines.push('');
  lines.push('Allowed generated files:');
  lines.push(...withCodeList(contract.allowedGenerated));
  lines.push('');
  lines.push('Changed files in this branch:');
  lines.push(...withCodeList(context.changedFiles, 'none detected'));
  lines.push('');

  lines.push('## Validation');
  lines.push('');
  lines.push('Acceptance checks from `.codex/task-contract.yaml`:');
  contract.acceptanceChecks.forEach((check) => lines.push(`- [ ] \`${check}\``));
  lines.push('');
  lines.push('Validation results:');
  lines.push('- [ ] _(fill in outcomes before requesting final review)_');
  lines.push('');

  lines.push('## Follow-up Tasks');
  lines.push('');
  lines.push(...withIssueList(contract.followUpIssues));
  lines.push('');

  return lines.join('\n');
}

function ensureDirForFile(filePathAbs) {
  const parent = path.dirname(filePathAbs);
  fs.mkdirSync(parent, { recursive: true });
}

function createPullRequest({ baseBranch, headBranch, title, bodyPathAbs, draft, dryRun }) {
  const args = ['pr', 'create', '--base', baseBranch, '--head', headBranch, '--title', title, '--body-file', bodyPathAbs];
  if (draft) args.push('--draft');

  if (dryRun) {
    console.log(`DRY RUN: gh ${args.join(' ')}`);
    return { ok: true, dryRun: true };
  }

  const cmd = spawnSync('gh', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);

  if (cmd.status !== 0) {
    return { ok: false, error: 'gh pr create failed' };
  }

  return { ok: true, dryRun: false };
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const contractPathAbs = path.resolve(REPO_ROOT, args.contractPath);
    const contract = readContract(contractPathAbs);

    const headBranch =
      String(args.head || '').trim() || contract.branch || tryRunGit(['rev-parse', '--abbrev-ref', 'HEAD']) || '';
    const baseBranch = String(args.base || '').trim() || contract.baseBranch || DEFAULT_BASE_BRANCH;
    if (!headBranch) throw new Error('Unable to determine head branch; pass --head explicitly.');

    const changedFiles = getChangedFiles(baseBranch, headBranch, args.changedFiles);
    const body = buildBody(contract, {
      headBranch,
      baseBranch,
      changedFiles,
      contractPathRel: toPosix(path.relative(REPO_ROOT, contractPathAbs))
    });

    const outputPathAbs = path.resolve(REPO_ROOT, args.outputPath);
    ensureDirForFile(outputPathAbs);
    fs.writeFileSync(outputPathAbs, `${body}\n`, 'utf8');

    const title =
      String(args.title || '').trim() ||
      `[#${contract.taskId}] ${branchSlugToTitle(headBranch) || 'Codex Task'}`.trim();

    const output = {
      contract: toPosix(path.relative(REPO_ROOT, contractPathAbs)),
      bodyFile: toPosix(path.relative(REPO_ROOT, outputPathAbs)),
      title,
      baseBranch,
      headBranch,
      changedFiles
    };

    if (args.create) {
      const result = createPullRequest({
        baseBranch,
        headBranch,
        title,
        bodyPathAbs: outputPathAbs,
        draft: args.draft,
        dryRun: args.dryRun
      });
      if (!result.ok) throw new Error(result.error || 'Failed to create pull request');
      output.created = !result.dryRun;
      output.dryRun = Boolean(result.dryRun);
    } else {
      console.log(`Generated PR body: ${output.bodyFile}`);
      console.log(`Suggested create command: gh pr create --base ${baseBranch} --head ${headBranch} --title "${title}" --body-file ${output.bodyFile}`);
    }

    if (args.json) {
      process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
    }
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
