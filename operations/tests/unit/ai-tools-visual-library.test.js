#!/usr/bin/env node
/**
 * @script            ai-tools-visual-library.test
 * @category          validator
 * @purpose           governance:ai-tools-visual-library
 * @scope             operations/tests/unit, operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js, .github/workflows, ai-tools/registry/workflows, ai-tools/registry/dispatchers, workspace/plan/active/AI-TOOLS-GOVERNANCE/AI-TOOLS
 * @owner             docs
 * @needs             R-R16, R-R29
 * @purpose-statement Validates that the canonical AI-tools visual library is current, complete, and synchronized with the repo workflow inventory.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/ai-tools-visual-library.test.js [--staged] [--files path[,path]]
 */

const { execSync } = require('child_process');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const GENERATOR_PATH = 'operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js';
const RELEVANT_PREFIXES = [
  '.github/workflows/',
  'ai-tools/registry/workflows/',
  'ai-tools/registry/dispatchers/',
  'workspace/plan/active/AI-TOOLS-GOVERNANCE/AI-TOOLS/',
  'workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md',
  GENERATOR_PATH
];

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/').replace(/^\.\//, '').trim();
}

function parseFilesArg(argv) {
  const files = [];
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token !== '--files' && token !== '--file') continue;
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
  return [...new Set(files)];
}

function isRelevantPath(repoPath) {
  const normalized = normalizeRepoPath(repoPath);
  return RELEVANT_PREFIXES.some((prefix) => normalized === prefix || normalized.startsWith(prefix));
}

function getStagedRepoFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      cwd: REPO_ROOT,
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

function runTests(options = {}) {
  const stagedOnly = Boolean(options.stagedOnly);
  const explicitFiles = Array.isArray(options.files) ? options.files : [];

  if (explicitFiles.length > 0 && explicitFiles.filter(isRelevantPath).length === 0) {
    return { passed: true, skipped: true };
  }

  if (stagedOnly && getStagedRepoFiles().filter(isRelevantPath).length === 0) {
    return { passed: true, skipped: true };
  }

  execSync(`node ${GENERATOR_PATH} --check`, {
    cwd: REPO_ROOT,
    stdio: 'inherit'
  });

  return { passed: true, skipped: false };
}

function main() {
  const argv = process.argv.slice(2);
  const result = runTests({
    stagedOnly: argv.includes('--staged'),
    files: parseFilesArg(argv)
  });

  if (result.skipped) {
    console.log('⏭️ AI-tools visual library test skipped (no relevant files)');
    return;
  }

  console.log('✅ AI-tools visual library test passed');
}

if (require.main === module) {
  main();
}

module.exports = {
  runTests
};
