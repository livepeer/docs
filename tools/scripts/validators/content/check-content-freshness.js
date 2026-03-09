#!/usr/bin/env node
/**
 * @script           check-content-freshness
 * @category         validator
 * @purpose          qa:content-quality
 * @scope            v2-content
 * @owner            docs
 * @needs            R-R14, R-C6
 * @purpose-statement Flags v2 pages with lastVerified frontmatter older than 180 days or missing entirely.
 * @pipeline         manual, ci
 * @usage            node tools/scripts/validators/content/check-content-freshness.js [--scope full|changed] [--threshold <days>] [--json]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DEFAULT_THRESHOLD_DAYS = 180;
const DAY_MS = 24 * 60 * 60 * 1000;
const REPO_ROOT = getRepoRoot();

if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/validators/content/check-content-freshness.js [options]',
      '',
      'Options:',
      '  --scope <full|changed>  Limit scan scope (default: full)',
      '  --threshold <days>      Freshness threshold in days (default: 180)',
      '  --json                  Emit machine-readable JSON',
      '  --help, -h              Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    scope: 'full',
    threshold: DEFAULT_THRESHOLD_DAYS,
    json: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--scope') {
      args.scope = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    if (token.startsWith('--scope=')) {
      args.scope = token.slice('--scope='.length).trim();
      continue;
    }

    if (token === '--threshold') {
      args.threshold = Number(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--threshold=')) {
      args.threshold = Number(token.slice('--threshold='.length));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!['full', 'changed'].includes(args.scope)) {
    throw new Error(`Invalid --scope value: ${args.scope}`);
  }

  if (!Number.isInteger(args.threshold) || args.threshold <= 0) {
    throw new Error(`Invalid --threshold value: ${args.threshold}`);
  }

  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/views/') || relPath.includes('/groups/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('todo.txt') || relPath.endsWith('todo.mdx') || relPath.endsWith('NOTES_V2.md')) return true;

  return relPath.split('/').some((segment) => segment.toLowerCase().startsWith('x-'));
}

function walkFiles(dirPath, out = []) {
  const absoluteDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absoluteDir)) return out;

  const entries = fs.readdirSync(absoluteDir, { withFileTypes: true });
  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return;
    const relPath = toPosix(path.join(dirPath, entry.name));

    if (entry.isDirectory()) {
      walkFiles(relPath, out);
      return;
    }

    if (!shouldExclude(relPath)) {
      out.push(relPath);
    }
  });

  return out;
}

function tryGit(args) {
  try {
    return execSync(`git ${args.join(' ')}`, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return '';
  }
}

function getChangedFiles() {
  const changed = new Set();
  const baseRef = tryGit(['rev-parse', '--verify', 'origin/docs-v2']) ? 'origin/docs-v2' : 'docs-v2';
  const mergeBase = tryGit(['merge-base', baseRef, 'HEAD']);
  if (mergeBase) {
    const branchDiff = tryGit(['diff', '--name-only', '--diff-filter=ACMR', `${mergeBase}..HEAD`]);
    branchDiff
      .split('\n')
      .map((line) => toPosix(line.trim()))
      .filter(Boolean)
      .forEach((line) => changed.add(line));
  }

  ['diff --name-only --diff-filter=ACMR HEAD', 'diff --cached --name-only --diff-filter=ACMR'].forEach((command) => {
    const output = tryGit(command.split(' '));
    output
      .split('\n')
      .map((line) => toPosix(line.trim()))
      .filter(Boolean)
      .forEach((line) => changed.add(line));
  });

  return [...changed].filter((repoPath) => !shouldExclude(repoPath)).sort();
}

function collectTargetFiles(scope) {
  if (scope === 'changed') {
    return getChangedFiles();
  }
  return walkFiles('v2').sort();
}

function parseLastVerified(rawValue) {
  if (rawValue == null) {
    return { valid: false, reason: 'missing', raw: '' };
  }

  const value = String(rawValue).trim();
  if (!value) {
    return { valid: false, reason: 'missing', raw: value };
  }

  if (/^\d{4}-\d{2}$/.test(value)) {
    const parsed = new Date(`${value}-01T00:00:00Z`);
    if (!Number.isNaN(parsed.getTime())) {
      return { valid: true, reason: 'parsed', raw: value, date: parsed };
    }
  }

  const parsedMs = Date.parse(value);
  if (Number.isNaN(parsedMs)) {
    return { valid: false, reason: 'invalid', raw: value };
  }

  return { valid: true, reason: 'parsed', raw: value, date: new Date(parsedMs) };
}

function extractLastVerified(content) {
  const frontmatterMatch = String(content || '').match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
  if (!frontmatterMatch) return '';
  const fieldMatch = frontmatterMatch[1].match(/^lastVerified:\s*["']?([^"'#\n]+)["']?\s*$/m);
  return fieldMatch ? fieldMatch[1].trim() : '';
}

function buildResult(repoPath, thresholdDays, now) {
  const absolutePath = path.join(REPO_ROOT, repoPath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const parsed = parseLastVerified(extractLastVerified(content));

  if (parsed.reason === 'missing') {
    return {
      file: repoPath,
      level: 'warning',
      reason: 'missing-lastVerified',
      lastVerified: '',
      ageDays: null,
      sortAgeDays: -1
    };
  }

  if (!parsed.valid) {
    return {
      file: repoPath,
      level: 'warning',
      reason: 'invalid-lastVerified',
      lastVerified: parsed.raw,
      ageDays: null,
      sortAgeDays: -1
    };
  }

  const ageDays = Math.floor((now.getTime() - parsed.date.getTime()) / DAY_MS);
  if (ageDays > thresholdDays) {
    return {
      file: repoPath,
      level: 'error',
      reason: 'stale-lastVerified',
      lastVerified: parsed.raw,
      ageDays,
      sortAgeDays: ageDays
    };
  }

  return {
    file: repoPath,
    level: 'info',
    reason: 'fresh-lastVerified',
    lastVerified: parsed.raw,
    ageDays,
    sortAgeDays: ageDays
  };
}

function sortResults(results) {
  return [...results].sort((left, right) => {
    const leftAge = Number.isFinite(left.sortAgeDays) ? left.sortAgeDays : -1;
    const rightAge = Number.isFinite(right.sortAgeDays) ? right.sortAgeDays : -1;
    if (leftAge !== rightAge) return rightAge - leftAge;
    return left.file.localeCompare(right.file);
  });
}

function buildSummary(results) {
  return results.reduce(
    (summary, result) => {
      summary.scanned += 1;
      summary[result.level] += 1;
      return summary;
    },
    { scanned: 0, error: 0, warning: 0, info: 0 }
  );
}

function renderText(results, summary, thresholdDays, scope) {
  const lines = [
    'Content freshness report',
    `Scope: ${scope}`,
    `Threshold: ${thresholdDays} day(s)`,
    `Scanned: ${summary.scanned} | Errors: ${summary.error} | Warnings: ${summary.warning} | Info: ${summary.info}`,
    ''
  ];

  if (results.length === 0) {
    lines.push('No matching files found.');
    return lines.join('\n');
  }

  results.forEach((result) => {
    if (result.level === 'error') {
      lines.push(`ERROR   ${result.file} | ${result.lastVerified} | ${result.ageDays} day(s) old`);
      return;
    }
    if (result.reason === 'invalid-lastVerified') {
      lines.push(`WARNING ${result.file} | invalid lastVerified: ${result.lastVerified}`);
      return;
    }
    if (result.level === 'warning') {
      lines.push(`WARNING ${result.file} | missing lastVerified`);
      return;
    }
    lines.push(`INFO    ${result.file} | ${result.lastVerified} | ${result.ageDays} day(s) old`);
  });

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    generatedAt: report.generatedAt,
    scope: report.scope,
    thresholdDays: report.thresholdDays,
    summary: report.summary,
    results: report.results
      .filter((result) => result.level !== 'info')
      .map((result) => ({
        file: result.file,
        level: result.level,
        reason: result.reason,
        lastVerified: result.lastVerified,
        ageDays: result.ageDays
      }))
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const now = new Date();
  const files = collectTargetFiles(args.scope);
  const results = sortResults(files.map((repoPath) => buildResult(repoPath, args.threshold, now)));
  const summary = buildSummary(results);

  return {
    generatedAt: now.toISOString(),
    scope: args.scope,
    thresholdDays: args.threshold,
    summary,
    results,
    exitCode: summary.error > 0 ? 1 : 0
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const report = run(args);
    if (args.json) {
      process.stdout.write(`${JSON.stringify(buildJsonReport(report))}\n`);
    } else {
      process.stdout.write(`${renderText(report.results, report.summary, report.thresholdDays, report.scope)}\n`);
    }
    process.exit(report.exitCode);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run,
  shouldExclude,
  parseLastVerified,
  collectTargetFiles,
  extractLastVerified,
  buildJsonReport,
  renderText
};
