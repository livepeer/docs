#!/usr/bin/env node
/**
 * @script            agent-write-admission.test
 * @category          validator
 * @type              validator
 * @purpose           governance:agent-governance
 * @scope             operations/tests/unit, operations/governance/config/agent-write-governance.json, operations/governance/config/root-governance.json, tools/lib/governance/agent-write-governance.js, tools/lib/governance/root-governance.js, operations/tests/run-pr-checks.js
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Enforces narrow agent-write admission rules for staged or explicit files: no tracked local-only outputs and no undeclared root writes.
 * @pipeline          manual, pr-changed
 * @usage             node operations/tests/unit/agent-write-admission.test.js [--staged|--files a,b]
 */

const { execSync } = require('child_process');
const {
  getRepoRoot,
  normalizeRepoPath,
  pathMatches,
  readManifest: readAgentWriteManifest,
  getForbiddenTrackedPatterns
} = require('../../../tools/lib/governance/agent-write-governance');
const {
  readManifest: readRootManifest,
  getAllowlistEntries,
  getLocalCompatibilityEntries
} = require('../../../tools/lib/governance/root-governance');

function parseFilesArg(argv) {
  const files = [];
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => normalizeRepoPath(part))
          .filter(Boolean)
          .forEach((part) => files.push(part));
      }
      index += 1;
    }
  }
  return [...new Set(files)];
}

function getStagedRepoFiles(repoRoot) {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      cwd: repoRoot,
      encoding: 'utf8'
    });
    return output
      .split('\n')
      .map((line) => normalizeRepoPath(line))
      .filter(Boolean);
  } catch (_error) {
    return [];
  }
}

function addIssue(target, file, rule, message) {
  target.push({ file, rule, message, line: 1 });
}

function getRootSegment(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return normalized.split('/')[0] || normalized;
}

function isRootLevel(repoPath) {
  return !normalizeRepoPath(repoPath).includes('/');
}

function runTests(options = {}) {
  const repoRoot = getRepoRoot();
  const stagedOnly = Boolean(options.stagedOnly);
  const explicitFiles = Array.isArray(options.files) ? options.files.map(normalizeRepoPath).filter(Boolean) : [];
  const files = explicitFiles.length > 0 ? explicitFiles : stagedOnly ? getStagedRepoFiles(repoRoot) : [];

  if (files.length === 0) {
    return { passed: true, skipped: true, errors: [], warnings: [], total: 0 };
  }

  const errors = [];
  const warnings = [];
  const agentManifest = readAgentWriteManifest(repoRoot);
  const rootManifest = readRootManifest(repoRoot);
  const allowedRoots = new Set(getAllowlistEntries(rootManifest));
  const localCompatibilityRoots = new Set(getLocalCompatibilityEntries(rootManifest));
  const forbiddenPatterns = getForbiddenTrackedPatterns(agentManifest);

  files.forEach((repoPath) => {
    const normalized = normalizeRepoPath(repoPath);
    const rootSegment = getRootSegment(normalized);

    forbiddenPatterns.forEach((entry) => {
      if (pathMatches(entry.pattern, normalized)) {
        addIssue(
          errors,
          normalized,
          'Agent write admission',
          `Tracked file is in a local-only forbidden path (${entry.pattern}) for output classes ${entry.output_classes.join(', ')}.`
        );
      }
    });

    if (isRootLevel(normalized)) {
      if (!allowedRoots.has(normalized) && !localCompatibilityRoots.has(normalized)) {
        addIssue(
          errors,
          normalized,
          'Agent write admission',
          `Root-level write is not governed by operations/governance/config/root-governance.json: ${normalized}`
        );
      }
      return;
    }

    if (!allowedRoots.has(rootSegment) && !localCompatibilityRoots.has(rootSegment)) {
      addIssue(
        errors,
        normalized,
        'Agent write admission',
        `Write targets undeclared root directory "${rootSegment}". Root directories must be admitted by operations/governance/config/root-governance.json.`
      );
      return;
    }

    const matchedPathClasses = (agentManifest.path_classes || []).filter((entry) =>
      (entry.allowed_paths || []).some((pattern) => pathMatches(pattern, normalized))
    );

    if (matchedPathClasses.length === 0) {
      addIssue(
        warnings,
        normalized,
        'Agent write placement',
        `Tracked path is under a governed root but does not match any agent path class in operations/governance/config/agent-write-governance.json.`
      );
      return;
    }

    if (matchedPathClasses.length > 1) {
      addIssue(
        warnings,
        normalized,
        'Agent write placement',
        `Tracked path matches multiple agent path classes: ${matchedPathClasses.map((entry) => entry.id).join(', ')}.`
      );
    }
  });

  return {
    passed: errors.length === 0,
    skipped: false,
    errors,
    warnings,
    total: files.length
  };
}

function printIssues(label, issues) {
  if (!Array.isArray(issues) || issues.length === 0) return;
  console.log(`\n${label}:`);
  issues.forEach((issue) => {
    console.log(`- ${issue.file}:${issue.line || 1} [${issue.rule}] ${issue.message}`);
  });
}

function main() {
  const argv = process.argv.slice(2);
  const stagedOnly = argv.includes('--staged');
  const result = runTests({ stagedOnly, files: parseFilesArg(argv) });

  if (result.skipped) {
    console.log('⏭️ Agent write admission test skipped (no relevant files)');
    return;
  }

  printIssues('Warnings', result.warnings);
  printIssues('Errors', result.errors);

  if (!result.passed) {
    console.error(`❌ Agent write admission test failed with ${result.errors.length} error(s)`);
    process.exit(1);
  }

  console.log(`✅ Agent write admission test passed (${result.total} files)`);
}

if (require.main === module) {
  main();
}

module.exports = {
  runTests
};
