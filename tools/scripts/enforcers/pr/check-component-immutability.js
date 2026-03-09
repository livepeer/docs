#!/usr/bin/env node
/**
 * @script    check-component-immutability
 * @category  enforcer
 * @purpose   governance:repo-health
 * @scope     changed
 * @owner     docs
 * @needs     R-R10
 * @purpose-statement  Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.
 * @pipeline  P2, P3
 * @usage     node tools/scripts/enforcers/pr/check-component-immutability.js --base-ref main
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_BASE_REF = 'docs-v2';
const APPROVAL_LABEL = 'component-change-approved';
const COMPONENT_ROOT = 'snippets/components/';
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
    baseRef: DEFAULT_BASE_REF
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim() || DEFAULT_BASE_REF;
      i += 1;
      continue;
    }

    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim() || DEFAULT_BASE_REF;
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
  console.log(
    'Usage: node tools/scripts/enforcers/pr/check-component-immutability.js [--base-ref docs-v2]'
  );
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
    const fromPath = toPosix(parts[1]);
    const toPath = toPosix(parts[2]);
    if (!fromPath || !toPath) return null;
    return {
      status,
      path: toPath,
      fromPath,
      display: `${fromPath} -> ${toPath}`
    };
  }

  return {
    status,
    path: toPosix(parts[1]),
    fromPath: '',
    display: toPosix(parts[1])
  };
}

function getChangedComponentEntries(baseRef) {
  const resolvedBaseRef = resolveBaseRef(baseRef);
  const mergeBase = runGit(['merge-base', resolvedBaseRef, 'HEAD']);
  const output = runGit([
    'diff',
    '--name-status',
    '--find-renames',
    '--diff-filter=AMDRT',
    `${mergeBase}..HEAD`,
    '--',
    COMPONENT_ROOT
  ]);

  if (!output) return [];

  return output
    .split('\n')
    .map((line) => parseDiffEntry(line))
    .filter((entry) => Boolean(entry));
}

function classifyEntries(entries) {
  const newFiles = [];
  const existingChanges = [];

  entries.forEach((entry) => {
    if (entry.status === 'A') {
      newFiles.push(entry);
      return;
    }
    existingChanges.push(entry);
  });

  return { newFiles, existingChanges };
}

function loadPrLabels() {
  const eventPath = String(process.env.GITHUB_EVENT_PATH || '').trim();
  if (!eventPath) {
    return {
      available: false,
      labels: [],
      reason: 'PR context unavailable: GITHUB_EVENT_PATH is not set.'
    };
  }

  try {
    const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    const rawLabels =
      event && event.pull_request && Array.isArray(event.pull_request.labels)
        ? event.pull_request.labels
        : null;

    if (!rawLabels) {
      return {
        available: false,
        labels: [],
        reason: 'PR context unavailable: GITHUB_EVENT_PATH does not contain pull_request.labels.'
      };
    }

    return {
      available: true,
      labels: rawLabels
        .map((entry) => String(entry && entry.name ? entry.name : '').trim())
        .filter(Boolean),
      reason: ''
    };
  } catch (error) {
    return {
      available: false,
      labels: [],
      reason: `PR context unavailable: failed to parse GITHUB_EVENT_PATH (${error.message}).`
    };
  }
}

function formatEntry(entry) {
  if (entry.status.startsWith('R')) return `RENAMED: ${entry.display}`;
  if (entry.status === 'M') return `MODIFIED: ${entry.display}`;
  if (entry.status === 'D') return `DELETED: ${entry.display}`;
  if (entry.status === 'T') return `TYPE-CHANGED: ${entry.display}`;
  if (entry.status === 'A') return `NEW: ${entry.display}`;
  return `${entry.status}: ${entry.display}`;
}

function printSection(stream, title, entries) {
  if (!entries.length) return;
  stream.write(`\n${title}\n`);
  entries.forEach((entry) => {
    stream.write(`  ${formatEntry(entry)}\n`);
  });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  const entries = getChangedComponentEntries(args.baseRef);
  const { newFiles, existingChanges } = classifyEntries(entries);

  if (entries.length === 0) {
    console.log('✅ No component changes detected.');
    process.exit(0);
  }

  printSection(process.stdout, 'Allowed new component files', newFiles);

  if (existingChanges.length === 0) {
    console.log('\n✅ Only new component files detected; no immutability violations.');
    process.exit(0);
  }

  const prContext = loadPrLabels();
  const approved = prContext.available && prContext.labels.includes(APPROVAL_LABEL);

  if (approved) {
    printSection(process.stdout, 'Approved existing component changes', existingChanges);
    console.log(
      `\n✅ Existing component changes are approved by PR label "${APPROVAL_LABEL}".`
    );
    process.exit(0);
  }

  process.stderr.write(
    `\nComponent immutability violation: ${existingChanges.length} existing component change(s) require approval\n`
  );
  printSection(process.stderr, 'Blocked existing component changes', existingChanges);
  process.stderr.write(`\n${prContext.reason || `Missing required PR label "${APPROVAL_LABEL}".`}\n`);
  process.stderr.write(`To approve: add "${APPROVAL_LABEL}" label to the PR\n`);
  process.exit(1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}
