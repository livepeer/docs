#!/usr/bin/env node
/**
 * @script            docs-guide-sot.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests, docs-guide, README.md, tools/scripts/generate-docs-guide-indexes.js, tools/scripts/generate-docs-guide-pages-index.js, tools/scripts/generate-docs-guide-components-index.js
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/docs-guide-sot.test.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();

const REQUIRED_MANUAL_FILES = [
  'docs-guide/README.mdx',
  'docs-guide/source-of-truth-policy.mdx',
  'docs-guide/feature-guides/feature-map.mdx',
  'docs-guide/feature-guides/architecture-map.mdx',
  'docs-guide/lpd.mdx',
  'docs-guide/quality-testing/quality-gates.mdx',
  'docs-guide/quality-testing/audit-system-overview.mdx',
  'docs-guide/quality-testing/skill-pipeline-map.mdx',
  'docs-guide/quality-testing/cleanup-quarantine-policy.mdx',
  'docs-guide/quality-testing/component-layout-decision-matrix.mdx',
  'docs-guide/feature-guides/automation-pipelines.mdx',
  'docs-guide/feature-guides/content-system.mdx',
  'docs-guide/feature-guides/data-integrations.mdx'
];

const REQUIRED_GENERATED_FILES = [
  'docs-guide/indexes/scripts-index.mdx',
  'docs-guide/indexes/workflows-index.mdx',
  'docs-guide/indexes/templates-index.mdx',
  'docs-guide/indexes/pages-index.mdx',
  'docs-guide/indexes/components-index.mdx'
];

const REQUIRED_README_REFERENCES = [
  'docs-guide/README.mdx',
  'docs-guide/feature-guides/feature-map.mdx',
  'docs-guide/source-of-truth-policy.mdx',
  'docs-guide/lpd.mdx',
  'docs-guide/quality-testing/quality-gates.mdx',
  'docs-guide/quality-testing/audit-system-overview.mdx',
  'docs-guide/quality-testing/skill-pipeline-map.mdx',
  'docs-guide/quality-testing/cleanup-quarantine-policy.mdx',
  'docs-guide/quality-testing/component-layout-decision-matrix.mdx',
  'docs-guide/feature-guides/automation-pipelines.mdx',
  'docs-guide/indexes/ai-tools.mdx',
  'docs-guide/indexes/pages-index.mdx',
  'docs-guide/indexes/components-index.mdx',
  'docs-guide/indexes/scripts-index.mdx',
  'docs-guide/indexes/workflows-index.mdx',
  'docs-guide/indexes/templates-index.mdx'
];

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function isNonEmptyDoc(repoPath) {
  const content = readFileSafe(repoPath);
  return content.trim().length > 0;
}

function checkRequiredFiles(errors) {
  REQUIRED_MANUAL_FILES.forEach((repoPath) => {
    if (!isNonEmptyDoc(repoPath)) {
      errors.push({
        file: repoPath,
        rule: 'Required docs-guide manual file',
        message: 'Missing or empty canonical docs-guide file.',
        line: 1
      });
    }
  });

  REQUIRED_GENERATED_FILES.forEach((repoPath) => {
    if (!isNonEmptyDoc(repoPath)) {
      errors.push({
        file: repoPath,
        rule: 'Required docs-guide generated file',
        message: 'Missing or empty generated docs-guide index file.',
        line: 1
      });
    }
  });
}

function checkReadmeReferences(errors, warnings) {
  const readmePath = 'README.md';
  const content = readFileSafe(readmePath);
  if (!content.trim()) {
    errors.push({
      file: readmePath,
      rule: 'README required',
      message: 'README.md is missing or empty.',
      line: 1
    });
    return;
  }

  REQUIRED_README_REFERENCES.forEach((ref) => {
    if (!content.includes(ref)) {
      warnings.push({
        file: readmePath,
        rule: 'README docs-guide pointers',
        message: `README.md should reference ${ref}.`,
        line: 1
      });
    }
  });
}

function checkGeneratedIndexFreshness(errors) {
  const checks = [
    {
      args: ['tools/scripts/generate-docs-guide-indexes.js', '--check'],
      file: 'docs-guide/indexes/workflows-index.mdx',
      message: 'Generated docs-guide template/workflow indexes are out of date. Run generator script.'
    },
    {
      args: ['tools/scripts/generate-docs-guide-pages-index.js', '--check'],
      file: 'docs-guide/indexes/pages-index.mdx',
      message: 'Generated docs-guide pages index is out of date. Run pages index generator script.'
    },
    {
      args: ['tools/scripts/generate-docs-guide-components-index.js', '--check'],
      file: 'docs-guide/indexes/components-index.mdx',
      message: 'Generated docs-guide components index is out of date. Run components index generator script.'
    },
    {
      args: ['tests/unit/script-docs.test.js', '--check-indexes'],
      file: 'docs-guide/indexes/scripts-index.mdx',
      message: 'Generated docs-guide scripts index is out of date. Run script docs generator script.'
    },
    {
      args: ['tools/scripts/enforce-generated-file-banners.js', '--check'],
      file: 'tools/scripts/enforce-generated-file-banners.js',
      message: 'Generated banner enforcement failed. Run generated banner enforcer or relevant generators.'
    }
  ];

  checks.forEach((check) => {
    const cmd = spawnSync('node', check.args, { cwd: REPO_ROOT, encoding: 'utf8' });

    if (cmd.stdout) process.stdout.write(cmd.stdout);
    if (cmd.stderr) process.stderr.write(cmd.stderr);

    if (cmd.status !== 0) {
      errors.push({
        file: check.file,
        rule: 'Generated index freshness',
        message: check.message,
        line: 1
      });
    }
  });
}

function runTests(options = {}) {
  const errors = [];
  const warnings = [];

  checkRequiredFiles(errors);
  checkReadmeReferences(errors, warnings);
  checkGeneratedIndexFreshness(errors);

  const strict = Boolean(options.strict);
  const passed = strict ? errors.length === 0 && warnings.length === 0 : errors.length === 0;

  return {
    passed,
    errors,
    warnings,
    total: REQUIRED_MANUAL_FILES.length + REQUIRED_GENERATED_FILES.length
  };
}

function printResults(result, strict) {
  if (result.passed) {
    console.log(strict ? '✅ Docs-guide SoT checks passed in strict mode' : '✅ Docs-guide SoT checks passed');
    return;
  }

  if (result.errors.length > 0) {
    console.error(`❌ Docs-guide SoT errors: ${result.errors.length}`);
    result.errors.forEach((issue) => {
      console.error(`  - [${issue.rule}] ${issue.file}: ${issue.message}`);
    });
  }

  if (result.warnings.length > 0) {
    const prefix = strict ? '❌' : '⚠️';
    const label = strict ? 'strict warnings' : 'advisory warnings';
    console.error(`${prefix} Docs-guide SoT ${label}: ${result.warnings.length}`);
    result.warnings.forEach((issue) => {
      console.error(`  - [${issue.rule}] ${issue.file}: ${issue.message}`);
    });
  }
}

if (require.main === module) {
  const strict = process.argv.includes('--strict');
  const result = runTests({ strict });
  printResults(result, strict);
  process.exit(result.passed ? 0 : 1);
}

module.exports = {
  runTests
};
