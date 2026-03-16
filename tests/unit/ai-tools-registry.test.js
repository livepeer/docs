#!/usr/bin/env node
/**
 * @script            ai-tools-registry.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, ai-tools/registry, tools/lib/ai-tools-registry.js, tools/scripts/validate-ai-tools-registry.js, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/source-of-truth-policy.mdx, docs-guide/policies/audit-system-overview.mdx, docs-guide/policies/skill-pipeline-map.mdx, tools/config/ownerless-governance-surfaces.json
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Validates the AI-tools registry contract, full tracked ai-tools coverage, and the Wave 1 inventory source-of-truth boundary.
 * @pipeline          P1, P3
 * @usage             node tests/unit/ai-tools-registry.test.js [--staged|--files path[,path]]
 */

const { execSync } = require('child_process');
const {
  getRepoRoot,
  isAiToolsRegistryRelevantPath,
  normalizeRepoPath,
  validateRegistry
} = require('../../tools/lib/ai-tools-registry');

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

function printIssues(label, issues) {
  if (!Array.isArray(issues) || issues.length === 0) return;
  console.log(`\n${label}:`);
  issues.forEach((issue) => {
    console.log(`- ${issue.file}:${issue.line || 1} [${issue.rule}] ${issue.message}`);
  });
}

function runTests(options = {}) {
  const repoRoot = getRepoRoot();
  const stagedOnly = Boolean(options.stagedOnly);
  const explicitFiles = Array.isArray(options.files) ? options.files.map(normalizeRepoPath) : [];
  const relevantExplicitFiles = explicitFiles.filter(isAiToolsRegistryRelevantPath);

  if (explicitFiles.length > 0 && relevantExplicitFiles.length === 0) {
    return { passed: true, skipped: true, errors: [], warnings: [], total: 0 };
  }

  if (stagedOnly) {
    const stagedRelevantFiles = getStagedRepoFiles(repoRoot).filter(isAiToolsRegistryRelevantPath);
    if (stagedRelevantFiles.length === 0) {
      return { passed: true, skipped: true, errors: [], warnings: [], total: 0 };
    }
  }

  const result = validateRegistry({ repoRoot, checkCoverage: true });
  printIssues('Warnings', result.warnings);
  printIssues('Errors', result.errors);

  return {
    passed: result.errors.length === 0,
    skipped: false,
    errors: result.errors,
    warnings: result.warnings,
    total: result.summary.totalArtifacts || 0
  };
}

function main() {
  const argv = process.argv.slice(2);
  const stagedOnly = argv.includes('--staged');
  const result = runTests({ stagedOnly, files: parseFilesArg(argv) });

  if (result.skipped) {
    console.log('⏭️ AI-tools registry test skipped (no relevant files)');
    return;
  }

  if (!result.passed) {
    console.error(`❌ AI-tools registry test failed with ${result.errors.length} error(s)`);
    process.exit(1);
  }

  console.log(`✅ AI-tools registry test passed (${result.total} artifacts)`);
}

if (require.main === module) {
  main();
}

module.exports = {
  runTests
};
