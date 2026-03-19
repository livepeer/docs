#!/usr/bin/env node
/**
 * @script            check-component-docs
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata.
 * @pipeline          P1, P2, P3
 * @usage             node tools/scripts/validators/components/check-component-docs.js [--path snippets/components] [--base-ref docs-v2] [--staged] [--strict-governance] [--help]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  extractExports,
  getComponentFiles,
  isArchivePath,
  parseJSDocBlock,
  validateGovernanceFields
} = require('../../../lib/component-governance-utils');

const DEFAULT_COMPONENTS_PATH = 'snippets/components';
const COMPONENT_LIBRARY_DIR = 'v2/resources/documentation-guide/component-library';
const RULES = ['4.9', '4.10', '4.11', '4.12', '4.13', '4.14', '4.15'];

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/components/check-component-docs.js [options]',
      '',
      'Options:',
      `  --path <dir>           Component root to scan (default: ${DEFAULT_COMPONENTS_PATH})`,
      '  --base-ref <ref>       Base ref for added-component docs-entry checks',
      '  --staged               Scan only staged component .jsx files',
      '  --strict-governance    Fail on governance schema findings (4.12-4.15)',
      '  --help, -h             Show this help message'
    ].join('\n')
  );
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    targetPath: DEFAULT_COMPONENTS_PATH,
    baseRef: '',
    staged: false,
    strictGovernance: false,
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
    if (token === '--strict-governance') {
      args.strictGovernance = true;
      continue;
    }
    if (token === '--path') {
      args.targetPath = String(argv[index + 1] || '').trim() || DEFAULT_COMPONENTS_PATH;
      index += 1;
      continue;
    }
    if (token.startsWith('--path=')) {
      args.targetPath = token.slice('--path='.length).trim() || DEFAULT_COMPONENTS_PATH;
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
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

function resolveBaseRef(baseRef) {
  const candidates = [String(baseRef || '').trim(), `origin/${String(baseRef || '').trim()}`].filter(Boolean);
  for (const candidate of candidates) {
    try {
      runGit(['rev-parse', '--verify', candidate]);
      return candidate;
    } catch (_error) {
      continue;
    }
  }

  throw new Error(`Unable to resolve base ref: ${baseRef}`);
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
  if (options.staged) return getStagedFiles(targetPath);

  const absolute = path.isAbsolute(targetPath) ? targetPath : path.join(REPO_ROOT, targetPath);
  if (!fs.existsSync(absolute)) {
    throw new Error(`Target path does not exist: ${targetPath}`);
  }

  if (fs.statSync(absolute).isFile()) {
    const displayPath = toPosix(path.relative(REPO_ROOT, absolute));
    return displayPath.endsWith('.jsx') && !isArchivePath(displayPath)
      ? [{ absolutePath: absolute, displayPath }]
      : [];
  }

  return getComponentFiles(targetPath);
}

function addFinding(collection, finding) {
  collection.push({
    path: finding.path,
    line: Number.isInteger(finding.line) ? finding.line : 1,
    rule: finding.rule,
    severity: finding.severity || 'blocking',
    message: finding.message
  });
}

function analyzeComponentFile(file, findings) {
  extractExports(file.displayPath).forEach((entry) => {
    if (!entry.jsDocBlock) {
      addFinding(findings, {
        path: file.displayPath,
        line: entry.line,
        rule: '4.9',
        severity: 'blocking',
        message: `${entry.name}: missing an immediately preceding JSDoc block`
      });
      return;
    }

    const parsed = parseJSDocBlock(entry.jsDocBlock);
    const documentedProps = new Set(parsed.params.map((param) => param.name));
    const missingProps = entry.props.map((prop) => prop.name).filter((name) => !documentedProps.has(name));
    if (missingProps.length > 0) {
      addFinding(findings, {
        path: file.displayPath,
        line: entry.line,
        rule: '4.10',
        severity: 'blocking',
        message: `${entry.name}: undocumented props: ${missingProps.join(', ')}`
      });
    }

    const validation = validateGovernanceFields(parsed, {
      exportName: entry.name,
      filePath: entry.filePath,
      props: entry.props
    });

    validation.errors.forEach((message) => {
      let rule = '4.12';
      if (/@category/.test(message) && /folder/.test(message)) rule = '4.13';
      if (/deprecated components require/.test(message)) rule = '4.15';
      addFinding(findings, {
        path: file.displayPath,
        line: entry.line,
        rule,
        severity: 'advisory',
        message: `${entry.name}: ${message}`
      });
    });

    validation.warnings.forEach((message) => {
      addFinding(findings, {
        path: file.displayPath,
        line: entry.line,
        rule: '4.14',
        severity: 'advisory',
        message: `${entry.name}: ${message}`
      });
    });
  });
}

function loadComponentDocsIndex() {
  const docsRoot = path.join(REPO_ROOT, COMPONENT_LIBRARY_DIR);
  if (!fs.existsSync(docsRoot)) {
    throw new Error(`Component library docs directory not found: ${COMPONENT_LIBRARY_DIR}`);
  }

  return fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => ({
      path: toPosix(path.join(COMPONENT_LIBRARY_DIR, entry.name)),
      content: fs.readFileSync(path.join(docsRoot, entry.name), 'utf8')
    }));
}

function componentHasDocsEntry(componentName, docsEntries) {
  const headingPattern = new RegExp(`^#{1,6}\\s+.*\\b${componentName}\\b.*$`, 'm');
  const responseFieldPattern = new RegExp(`<ResponseField\\s+name=["']${componentName}["']`);
  return docsEntries.some((entry) => headingPattern.test(entry.content) || responseFieldPattern.test(entry.content));
}

function getAddedComponentFiles(targetPath, resolvedBaseRef) {
  const output = runGit(['diff', '--name-status', '--diff-filter=A', `${resolvedBaseRef}...HEAD`, '--', targetPath]);
  if (!output) return [];

  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => toPosix(line.split('\t').slice(-1)[0].trim()))
    .filter((repoPath) => repoPath.endsWith('.jsx'))
    .filter((repoPath) => !isArchivePath(repoPath));
}

function analyzeNewComponentDocs(targetPath, baseRef, findings) {
  const resolvedBaseRef = resolveBaseRef(baseRef);
  const docsEntries = loadComponentDocsIndex();
  const newFiles = getAddedComponentFiles(targetPath, resolvedBaseRef);

  newFiles.forEach((repoPath) => {
    extractExports(repoPath).forEach((entry) => {
      if (componentHasDocsEntry(entry.name, docsEntries)) return;
      addFinding(findings, {
        path: repoPath,
        line: entry.line,
        rule: '4.11',
        severity: 'blocking',
        message: `${entry.name}: new component is missing an English component-library docs entry`
      });
    });
  });

  return {
    executed: true,
    resolvedBaseRef,
    addedFiles: newFiles.length
  };
}

function printFindings(findings) {
  const sorted = [...findings].sort((a, b) => {
    if (a.path !== b.path) return a.path.localeCompare(b.path, 'en', { sensitivity: 'base' });
    if (a.line !== b.line) return a.line - b.line;
    if (a.rule !== b.rule) return a.rule.localeCompare(b.rule, 'en', { sensitivity: 'base' });
    return a.message.localeCompare(b.message, 'en', { sensitivity: 'base' });
  });

  sorted.forEach((finding) => {
    console.log(`${finding.path}:${finding.line}: [${finding.rule}] [${finding.severity}] ${finding.message}`);
  });

  return sorted;
}

function printSummary(findings, docsEntryStatus) {
  const counts = new Map(RULES.map((rule) => [rule, 0]));
  findings.forEach((finding) => counts.set(finding.rule, (counts.get(finding.rule) || 0) + 1));

  console.log('');
  console.log('Summary:');
  RULES.forEach((rule) => console.log(`  [${rule}] ${counts.get(rule) || 0} finding(s)`));
  console.log(`  Total ${findings.length} finding(s)`);

  if (docsEntryStatus.executed) {
    console.log(`Rule 4.11: executed against ${docsEntryStatus.resolvedBaseRef} (${docsEntryStatus.addedFiles} added file(s))`);
  } else {
    console.log('Rule 4.11: skipped (no --base-ref provided)');
  }
}

function run(options = {}) {
  const files = collectTargetFiles(options.targetPath || DEFAULT_COMPONENTS_PATH, {
    staged: Boolean(options.staged)
  });
  const findings = [];
  const docsEntryStatus = {
    executed: false,
    resolvedBaseRef: '',
    addedFiles: 0
  };

  files.forEach((file) => analyzeComponentFile(file, findings));

  if (options.baseRef) {
    const result = analyzeNewComponentDocs(options.targetPath || DEFAULT_COMPONENTS_PATH, options.baseRef, findings);
    docsEntryStatus.executed = result.executed;
    docsEntryStatus.resolvedBaseRef = result.resolvedBaseRef;
    docsEntryStatus.addedFiles = result.addedFiles;
  }

  const blocking = findings.filter((finding) => finding.severity === 'blocking');
  const governance = findings.filter((finding) => finding.severity === 'advisory');

  return {
    filesScanned: files.length,
    findings,
    blocking,
    governance,
    docsEntryStatus,
    exitCode: blocking.length > 0 || (options.strictGovernance && governance.length > 0) ? 1 : 0
  };
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    fail(error.message);
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

  const sortedFindings = printFindings(result.findings);
  if (sortedFindings.length === 0) {
    console.log('No findings.');
  }
  printSummary(sortedFindings, result.docsEntryStatus);
  process.exit(result.exitCode);
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeComponentFile,
  analyzeNewComponentDocs,
  collectTargetFiles,
  parseArgs,
  run
};
