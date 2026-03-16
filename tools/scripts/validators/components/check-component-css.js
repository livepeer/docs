#!/usr/bin/env node
/**
 * @script            check-component-css
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Validates component files against component governance styling rules.
 * @pipeline          P1, P2, P3
 * @usage             node tools/scripts/validators/components/check-component-css.js [--path snippets/components] [--staged] [--fix] [--help]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  getComponentFiles,
  scanStylingViolations,
  isArchivePath
} = require('../../../lib/component-governance-utils');

const DEFAULT_TARGET = 'snippets/components';
const FIX_REPLACEMENTS = [
  [/ !important/g, ''],
  [/#fff\b/gi, 'var(--lp-color-on-accent)'],
  [/#3b82f6\b/gi, 'var(--lp-color-link)'],
  [/#5965f3\b/gi, 'var(--lp-color-brand-discord)'],
  [/#5865f2\b/gi, 'var(--lp-color-brand-discord)'],
  [/#00aeef\b/gi, 'var(--lp-color-brand-forum)'],
  [/#ef1a73\b/gi, 'var(--lp-color-brand-coming-soon)'],
  [/#b636dd\b/gi, 'var(--lp-color-brand-preview)'],
  [/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.5\s*\)/gi, 'var(--lp-color-bg-overlay)'],
  [/rgba?\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.5\s*\)/gi, 'var(--lp-color-border-inverse)'],
  [/rgba?\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.4\s*\)/gi, 'var(--lp-color-text-muted)'],
  [/rgba?\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.1\s*\)/gi, 'var(--lp-color-bg-subtle)']
];

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/components/check-component-css.js [options]',
      '',
      'Options:',
      `  --path <dir>        Component root to scan (default: ${DEFAULT_TARGET})`,
      '  --staged            Scan only staged component .jsx files',
      '  --fix               Apply safe token and !important rewrites before scanning',
      '  --help, -h          Show this help message'
    ].join('\n')
  );
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    targetPath: DEFAULT_TARGET,
    staged: false,
    fix: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--staged') {
      args.staged = true;
      continue;
    }
    if (token === '--fix') {
      args.fix = true;
      continue;
    }
    if (token === '--path') {
      args.targetPath = String(argv[index + 1] || '').trim() || DEFAULT_TARGET;
      index += 1;
      continue;
    }
    if (token.startsWith('--path=')) {
      args.targetPath = token.slice('--path='.length).trim() || DEFAULT_TARGET;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

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

function runGit(args) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(stderr || stdout || `git ${args.join(' ')} failed`);
  }
  return String(result.stdout || '').trim();
}

function getStagedFiles(targetPath) {
  const output = runGit(['diff', '--cached', '--name-only', '--diff-filter=ACM', '--', targetPath]);
  if (!output) return [];

  return output
    .split('\n')
    .map((line) => toPosix(line.trim()))
    .filter(Boolean)
    .filter((repoPath) => repoPath.endsWith('.jsx'))
    .filter((repoPath) => !isArchivePath(repoPath))
    .filter((repoPath) => fs.existsSync(path.join(REPO_ROOT, repoPath)))
    .map((repoPath) => ({
      absolutePath: path.join(REPO_ROOT, repoPath),
      displayPath: repoPath
    }));
}

function collectTargetFiles(targetPath, options = {}) {
  if (options.staged) {
    return getStagedFiles(targetPath);
  }

  const normalized = path.isAbsolute(targetPath) ? targetPath : path.join(REPO_ROOT, targetPath);
  if (!fs.existsSync(normalized)) {
    throw new Error(`Target path does not exist: ${targetPath}`);
  }

  if (fs.statSync(normalized).isFile()) {
    const displayPath = toPosix(path.relative(REPO_ROOT, normalized));
    return displayPath.endsWith('.jsx') && !isArchivePath(displayPath)
      ? [{ absolutePath: normalized, displayPath }]
      : [];
  }

  return getComponentFiles(targetPath);
}

function applyKnownFixes(content) {
  let next = String(content || '');
  FIX_REPLACEMENTS.forEach(([pattern, replacement]) => {
    next = next.replace(pattern, replacement);
  });
  return next;
}

function analyzeFile(file) {
  return scanStylingViolations(file.absolutePath);
}

function run(options = {}) {
  const files = collectTargetFiles(options.targetPath || DEFAULT_TARGET, {
    staged: Boolean(options.staged)
  });
  const banned = [];
  const advisory = [];
  const changedFiles = [];

  if (options.fix) {
    files.forEach((file) => {
      const original = fs.readFileSync(file.absolutePath, 'utf8');
      const next = applyKnownFixes(original);
      if (next !== original) {
        fs.writeFileSync(file.absolutePath, next, 'utf8');
        changedFiles.push(file.displayPath);
      }
    });
  }

  files.forEach((file) => {
    const result = analyzeFile(file);
    result.banned.forEach((finding) => banned.push({ ...finding, file: result.filePath }));
    result.advisory.forEach((finding) => advisory.push({ ...finding, file: result.filePath }));
  });

  banned.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
  advisory.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

  return {
    filesScanned: files.length,
    banned,
    advisory,
    changedFiles,
    exitCode: banned.length > 0 ? 1 : 0
  };
}

function printFinding(prefix, finding) {
  console.log(`${finding.file}:${finding.line}: ${prefix} ${finding.pattern} ${finding.value}`);
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  let result;
  try {
    result = run(args);
  } catch (error) {
    fail(error.message);
  }

  result.banned.forEach((finding) => printFinding('[BANNED]', finding));
  result.advisory.forEach((finding) => printFinding('[ADVISORY]', finding));

  if (result.changedFiles.length > 0) {
    console.log(`Applied safe fixes to ${result.changedFiles.length} file(s).`);
  }

  if (result.banned.length === 0) {
    console.log('No blocked component styling violations found.');
  }

  console.log(
    `Summary: ${result.filesScanned} file(s), ${result.banned.length} blocked violation(s), ${result.advisory.length} advisory finding(s).`
  );

  process.exit(result.exitCode);
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeFile,
  collectTargetFiles,
  parseArgs,
  run
};
