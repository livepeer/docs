#!/usr/bin/env node
/**
 * @script           check-page-local-mdx
 * @category         validator
 * @purpose          qa:repo-health
 * @scope            v2-content
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Detects MDX fragment files in views/ and groups/ subdirectories that are not imported by any parent page.
 * @pipeline         manual, ci
 * @usage            node tools/scripts/validators/structure/check-page-local-mdx.js [--fix] [--json]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = getRepoRoot();
const MINTIGNORE_PATH = path.join(REPO_ROOT, '.mintignore');
const BLOCK_START = '# BEGIN page-local-mdx-safety-check';
const BLOCK_END = '# END page-local-mdx-safety-check';

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
      'Usage: node tools/scripts/validators/structure/check-page-local-mdx.js [options]',
      '',
      'Options:',
      '  --fix       Add unreferenced fragment paths to a managed .mintignore block',
      '  --json      Emit machine-readable JSON',
      '  --help, -h  Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = { fix: false, json: false, help: false };
  argv.forEach((token) => {
    if (token === '--fix') {
      args.fix = true;
      return;
    }
    if (token === '--json') {
      args.json = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });
  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('todo.txt') || relPath.endsWith('todo.mdx') || relPath.endsWith('NOTES_V2.md')) return true;
  return relPath.split('/').some((segment) => segment.toLowerCase().startsWith('x-'));
}

function walkFiles(dirPath, out = []) {
  const absoluteDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absoluteDir)) return out;

  fs.readdirSync(absoluteDir, { withFileTypes: true }).forEach((entry) => {
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

function collectFragments() {
  return walkFiles('v2')
    .filter((repoPath) => /\/(?:views|groups)\//.test(repoPath))
    .sort();
}

function splitParentRoot(fragmentPath) {
  return fragmentPath.split(/\/(?:views|groups)\//)[0];
}

function collectCandidateParents(parentRoot, fragmentPath) {
  return walkFiles(parentRoot)
    .filter((repoPath) => repoPath !== fragmentPath)
    .filter((repoPath) => !/\/(?:views|groups)\//.test(repoPath))
    .sort();
}

function resolveImportCandidates(fromFile, specifier) {
  const clean = String(specifier || '').trim();
  if (!clean) return [];

  let basePath = clean;
  if (clean.startsWith('/')) {
    basePath = clean.replace(/^\/+/, '');
  } else {
    basePath = toPosix(path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), clean)));
  }

  const hasExtension = /\.[A-Za-z0-9]+$/.test(basePath);
  const candidates = hasExtension
    ? [basePath]
    : [basePath, `${basePath}.mdx`, `${basePath}.md`, path.posix.join(basePath, 'index.mdx')];

  return [...new Set(candidates.map((candidate) => candidate.replace(/^\.\//, '')))];
}

function collectImports(content) {
  const imports = [];
  const regex = /^import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"];?/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    imports.push(match[1]);
  }

  return imports;
}

function findImportingParents(fragmentPath) {
  const parentRoot = splitParentRoot(fragmentPath);
  const parents = [];

  collectCandidateParents(parentRoot, fragmentPath).forEach((parentFile) => {
    const content = fs.readFileSync(path.join(REPO_ROOT, parentFile), 'utf8');
    const imports = collectImports(content);
    const matches = imports.some((specifier) => resolveImportCandidates(parentFile, specifier).includes(fragmentPath));
    if (matches) {
      parents.push(parentFile);
    }
  });

  return parents;
}

function analyzeFragment(fragmentPath) {
  const parents = findImportingParents(fragmentPath);
  if (parents.length === 0) {
    return {
      file: fragmentPath,
      level: 'error',
      rule: 'orphan-fragment',
      message: 'Fragment is not imported by any parent page.',
      parents
    };
  }

  if (parents.length > 1) {
    return {
      file: fragmentPath,
      level: 'warning',
      rule: 'shared-fragment',
      message: `Fragment is imported by ${parents.length} parent pages.`,
      parents
    };
  }

  return {
    file: fragmentPath,
    level: 'info',
    rule: 'ok',
    message: 'Fragment is imported by exactly one parent page.',
    parents
  };
}

function updateMintIgnore(unreferencedPaths) {
  const entries = unreferencedPaths.map((repoPath) => `/${repoPath}`);
  const existing = fs.existsSync(MINTIGNORE_PATH) ? fs.readFileSync(MINTIGNORE_PATH, 'utf8') : '';
  const blockPattern = new RegExp(`${BLOCK_START}[\\s\\S]*?${BLOCK_END}`, 'm');
  const currentBlockMatch = existing.match(blockPattern);

  if (entries.length === 0 && !currentBlockMatch) {
    return { written: false, entries: [] };
  }

  const existingEntries = currentBlockMatch
    ? currentBlockMatch[0]
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
    : [];

  const mergedEntries = [...new Set([...existingEntries, ...entries])].sort();
  const blockLines = [BLOCK_START, ...mergedEntries, BLOCK_END].join('\n');

  const updated = currentBlockMatch
    ? existing.replace(blockPattern, blockLines)
    : `${existing.trimEnd()}\n\n${blockLines}\n`;

  if (updated !== existing) {
    fs.writeFileSync(MINTIGNORE_PATH, updated.replace(/^\n/, ''));
    return { written: true, entries: mergedEntries };
  }

  return { written: false, entries: mergedEntries };
}

function buildSummary(results, fixResult) {
  return results.reduce(
    (summary, result) => {
      summary.scanned += 1;
      summary[result.level] += 1;
      summary.fixWritten = fixResult ? fixResult.written : false;
      return summary;
    },
    { scanned: 0, error: 0, warning: 0, info: 0, fixWritten: false }
  );
}

function renderText(report) {
  const lines = [
    'Page-local MDX safety report',
    `Scanned: ${report.summary.scanned} | Errors: ${report.summary.error} | Warnings: ${report.summary.warning} | Info: ${report.summary.info}`,
    report.fixResult ? `Fix mode: ${report.fixResult.written ? 'updated .mintignore' : 'no .mintignore changes'}` : '',
    ''
  ].filter(Boolean);

  if (report.results.length === 0) {
    lines.push('No page-local fragments found.');
    return lines.join('\n');
  }

  report.results.forEach((result) => {
    lines.push(`${result.level.toUpperCase().padEnd(7)} ${result.file} | ${result.message}`);
    if (result.parents.length > 0) {
      lines.push(`         parents: ${result.parents.join(', ')}`);
    }
  });

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    generatedAt: report.generatedAt,
    summary: report.summary,
    results: report.results,
    fixResult: report.fixResult || { written: false, entries: [] }
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const results = collectFragments().map(analyzeFragment);
  const unreferenced = results.filter((result) => result.level === 'error').map((result) => result.file);
  const fixResult = args.fix ? updateMintIgnore(unreferenced) : null;
  const summary = buildSummary(results, fixResult);

  return {
    generatedAt: new Date().toISOString(),
    summary,
    results,
    fixResult,
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
      process.stdout.write(`${renderText(report)}\n`);
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
  collectFragments,
  collectImports,
  resolveImportCandidates,
  updateMintIgnore,
  buildJsonReport,
  renderText
};
