#!/usr/bin/env node
/**
 * @script            check-codex-pr-overlap
 * @category          enforcer
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, .github/workflows, codex PR governance
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement PR enforcer — checks for conflicting codex PRs targeting the same files/branches
 * @pipeline          P3 (PR, Track B)
 * @usage             node tools/scripts/check-codex-pr-overlap.js [flags]
 */

const { spawnSync } = require('child_process');
const path = require('path');

const DEFAULT_BASE_REF = 'docs-v2';
const DEFAULT_HANDOFF_LABEL = 'codex-handoff-approved';
const DEFAULT_TOKEN_ENV = 'GITHUB_TOKEN';
const CODEX_BRANCH_RE = /^codex\//;

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

function parseArgs(argv) {
  const args = {
    baseRef: String(process.env.GITHUB_BASE_REF || '').trim() || DEFAULT_BASE_REF,
    repo: String(process.env.GITHUB_REPOSITORY || '').trim(),
    headBranch: String(process.env.GITHUB_HEAD_REF || '').trim(),
    handoffLabel: DEFAULT_HANDOFF_LABEL,
    tokenEnv: DEFAULT_TOKEN_ENV,
    json: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }
    if (token === '--repo') {
      args.repo = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--repo=')) {
      args.repo = token.slice('--repo='.length).trim();
      continue;
    }
    if (token === '--head-branch') {
      args.headBranch = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--head-branch=')) {
      args.headBranch = token.slice('--head-branch='.length).trim();
      continue;
    }
    if (token === '--handoff-label') {
      args.handoffLabel = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--handoff-label=')) {
      args.handoffLabel = token.slice('--handoff-label='.length).trim();
      continue;
    }
    if (token === '--token-env') {
      args.tokenEnv = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--token-env=')) {
      args.tokenEnv = token.slice('--token-env='.length).trim();
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

  return args;
}

function usage() {
  console.log('Usage: node tools/scripts/check-codex-pr-overlap.js [--base-ref docs-v2] [--repo owner/repo] [--head-branch codex/... ] [--handoff-label codex-handoff-approved]');
}

function resolveHeadBranch(args) {
  if (args.headBranch) return args.headBranch;
  return tryRunGit(['rev-parse', '--abbrev-ref', 'HEAD']);
}

function resolveRepo(args) {
  if (args.repo) return args.repo;
  const originUrl = tryRunGit(['config', '--get', 'remote.origin.url']);
  const normalized = String(originUrl || '')
    .replace(/^https?:\/\/github\.com\//i, '')
    .replace(/^git@github\.com:/i, '')
    .replace(/\.git$/i, '')
    .trim();
  if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(normalized)) return normalized;
  throw new Error('Unable to resolve repo. Use --repo or set GITHUB_REPOSITORY');
}

function getCurrentChangedFiles(baseRef) {
  const mergeBase = runGit(['merge-base', `origin/${baseRef}`, 'HEAD']);
  const output = runGit(['diff', '--name-only', '--diff-filter=ACMR', `${mergeBase}..HEAD`]);
  if (!output) return [];
  return [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))];
}

function getCurrentPrNumberFromEvent() {
  const eventPath = String(process.env.GITHUB_EVENT_PATH || '').trim();
  if (!eventPath) return null;

  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const event = require(eventPath);
    const number = Number(event && event.pull_request && event.pull_request.number);
    return Number.isInteger(number) && number > 0 ? number : null;
  } catch (_error) {
    return null;
  }
}

function apiGetJson(url, token) {
  const result = spawnSync(
    'curl',
    [
      '-sSfL',
      '-H',
      'Accept: application/vnd.github+json',
      '-H',
      `Authorization: Bearer ${token}`,
      '-H',
      'X-GitHub-Api-Version: 2022-11-28',
      '-H',
      'User-Agent: livepeer-docs-codex-overlap-check',
      url
    ],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );

  if (result.status !== 0) {
    const details = String(result.stderr || '').trim() || String(result.stdout || '').trim() || url;
    throw new Error(`GitHub API request failed: ${details}`);
  }

  try {
    return JSON.parse(String(result.stdout || ''));
  } catch (error) {
    throw new Error(`Invalid JSON response from GitHub API: ${error.message}`);
  }
}

function collectPrFiles(repo, prNumber, token) {
  const files = [];
  let page = 1;

  while (true) {
    const payload = apiGetJson(`https://api.github.com/repos/${repo}/pulls/${prNumber}/files?per_page=100&page=${page}`, token);
    if (!Array.isArray(payload) || payload.length === 0) {
      break;
    }

    payload.forEach((entry) => {
      const filePath = toPosix(String(entry && entry.filename ? entry.filename : '').trim());
      if (filePath) files.push(filePath);
    });

    if (payload.length < 100) break;
    page += 1;
  }

  return [...new Set(files)];
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const headBranch = resolveHeadBranch(args);
  if (!CODEX_BRANCH_RE.test(headBranch)) {
    const result = {
      passed: true,
      skipped: true,
      message: `Branch ${headBranch || 'unknown'} is not codex/*; overlap check skipped.`
    };
    if (args.json) {
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    } else {
      console.log(`⏭️ ${result.message}`);
    }
    process.exit(0);
  }

  const token = String(process.env[args.tokenEnv] || '').trim();
  if (!token) {
    throw new Error(`Missing token env: ${args.tokenEnv}`);
  }

  const repo = resolveRepo(args);
  const currentPrNumber = getCurrentPrNumberFromEvent();
  const currentFiles = getCurrentChangedFiles(args.baseRef);

  const pulls = apiGetJson(`https://api.github.com/repos/${repo}/pulls?state=open&base=${encodeURIComponent(args.baseRef)}&per_page=100`, token);
  if (!Array.isArray(pulls)) {
    throw new Error('Unexpected pull list payload from GitHub API');
  }

  const overlaps = [];

  pulls.forEach((pull) => {
    const prNumber = Number(pull && pull.number);
    const prHead = String(pull && pull.head && pull.head.ref ? pull.head.ref : '').trim();
    if (!Number.isInteger(prNumber)) return;
    if (currentPrNumber && prNumber === currentPrNumber) return;
    if (!CODEX_BRANCH_RE.test(prHead)) return;

    const labels = Array.isArray(pull.labels)
      ? pull.labels.map((entry) => String(entry && entry.name ? entry.name : '').trim()).filter(Boolean)
      : [];
    if (labels.includes(args.handoffLabel)) return;

    const prFiles = collectPrFiles(repo, prNumber, token);
    const overlapFiles = currentFiles.filter((filePath) => prFiles.includes(filePath));
    if (overlapFiles.length > 0) {
      overlaps.push({
        prNumber,
        prHead,
        overlapFiles
      });
    }
  });

  if (overlaps.length > 0) {
    const messages = overlaps.map((entry) => `PR #${entry.prNumber} (${entry.prHead}) overlaps: ${entry.overlapFiles.join(', ')}`);
    const result = {
      passed: false,
      skipped: false,
      message: 'Codex PR overlap check failed.',
      errors: messages
    };
    if (args.json) {
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    } else {
      console.error(`❌ ${result.message}`);
      messages.forEach((line) => console.error(`  - ${line}`));
      console.error(`  Add label "${args.handoffLabel}" on overlapping PR to acknowledge explicit handoff.`);
    }
    process.exit(1);
  }

  const result = {
    passed: true,
    skipped: false,
    message: 'Codex PR overlap check passed.',
    errors: []
  };
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } else {
    console.log(`✅ ${result.message}`);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
