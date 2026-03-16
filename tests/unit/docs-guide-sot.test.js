#!/usr/bin/env node
/**
 * @script            docs-guide-sot.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests, docs-guide, README.md, tools/scripts/generate-docs-guide-indexes.js, tools/scripts/generate-docs-guide-pages-index.js, tools/scripts/generate-docs-guide-components-index.js
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness
 * @pipeline          P1, P2, P3, manual
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/docs-guide-sot.test.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const {
  hasFrontmatterKey,
  hasGeneratedNote,
  parseGeneratedHiddenBanner
} = require('../../tools/lib/generated-file-banners');
const { checkAggregateIndex } = require('./script-docs.test.js');
const uiTemplateGenerator = require('../../tools/scripts/generate-ui-templates');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

const REQUIRED_MANUAL_FILES = [
  'docs-guide/overview.mdx',
  'docs-guide/policies/source-of-truth-policy.mdx',
  'docs-guide/policies/generated-artifact-and-hook-governance.mdx',
  'docs-guide/policies/v2-folder-governance.mdx',
  'docs-guide/features/feature-map.mdx',
  'docs-guide/features/architecture-map.mdx',
  'docs-guide/tooling/lpd-cli.mdx',
  'docs-guide/policies/quality-gates.mdx',
  'docs-guide/policies/ownerless-governance.mdx',
  'docs-guide/policies/root-allowlist-governance.mdx',
  'docs-guide/policies/agent-governance-framework.mdx',
  'docs-guide/policies/audit-system-overview.mdx',
  'docs-guide/policies/skill-pipeline-map.mdx',
  'docs-guide/policies/cleanup-quarantine-policy.mdx',
  'docs-guide/policies/component-layout-decisions.mdx',
  'docs-guide/features/automations.mdx',
  'docs-guide/frameworks/content-system.mdx',
  'docs-guide/frameworks/component-governance.mdx',
  'docs-guide/features/data-integrations.mdx',
  'docs-guide/features/ui-system.mdx',
  'docs-guide/frameworks/component-framework.mdx',
  'docs-guide/catalog/ai-tools.mdx'
];

const REQUIRED_GENERATED_FILES = [
  'docs-guide/catalog/scripts-catalog.mdx',
  'docs-guide/catalog/workflows-catalog.mdx',
  'docs-guide/catalog/templates-catalog.mdx',
  'docs-guide/catalog/pages-catalog.mdx',
  'docs-guide/catalog/components-catalog.mdx',
  'docs-guide/catalog/ui-templates.mdx'
];

const REQUIRED_README_REFERENCES = [
  'docs-guide/overview.mdx',
  'docs-guide/features/feature-map.mdx',
  'docs-guide/policies/source-of-truth-policy.mdx',
  'docs-guide/policies/generated-artifact-and-hook-governance.mdx',
  'docs-guide/policies/v2-folder-governance.mdx',
  'docs-guide/tooling/lpd-cli.mdx',
  'docs-guide/policies/quality-gates.mdx',
  'docs-guide/policies/ownerless-governance.mdx',
  'docs-guide/policies/audit-system-overview.mdx',
  'docs-guide/policies/skill-pipeline-map.mdx',
  'docs-guide/policies/cleanup-quarantine-policy.mdx',
  'docs-guide/policies/component-layout-decisions.mdx',
  'docs-guide/features/automations.mdx',
  'docs-guide/features/ui-system.mdx',
  'docs-guide/catalog/ai-tools.mdx',
  'docs-guide/catalog/ui-templates.mdx',
  'docs-guide/catalog/pages-catalog.mdx',
  'docs-guide/catalog/components-catalog.mdx',
  'docs-guide/catalog/scripts-catalog.mdx',
  'docs-guide/catalog/workflows-catalog.mdx',
  'docs-guide/catalog/templates-catalog.mdx'
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
      file: 'docs-guide/catalog/workflows-catalog.mdx',
      message: 'Generated docs-guide template/workflow indexes are out of date. Run generator script.'
    },
    {
      args: ['tools/scripts/generate-docs-guide-pages-index.js', '--check'],
      file: 'docs-guide/catalog/pages-catalog.mdx',
      message: 'Generated docs-guide pages catalog is out of date. Run pages catalog generator script.'
    },
    {
      args: ['tools/scripts/generate-docs-guide-components-index.js', '--check'],
      file: 'docs-guide/catalog/components-catalog.mdx',
      message: 'Generated docs-guide components catalog is out of date. Run components catalog generator script.'
    },
    {
      args: ['tools/scripts/generate-ui-templates.js', '--check'],
      file: 'docs-guide/catalog/ui-templates.mdx',
      message: 'Generated UI template artifacts are out of date. Run the UI template generator script.'
    },
    {
      args: null,
      file: 'docs-guide/catalog/scripts-catalog.mdx',
      message: 'Generated docs-guide scripts catalog is out of date. Run script docs generator script.'
    }
  ];

  checks.forEach((check) => {
    if (!check.args) {
      const aggregateIndex = checkAggregateIndex();
      if (aggregateIndex.missing || aggregateIndex.changed) {
        errors.push({
          file: check.file,
          rule: 'Generated index freshness',
          message: check.message,
          line: 1
        });
      }
      return;
    }

    if (check.args[0] === 'tools/scripts/generate-ui-templates.js') {
      const uiTemplates = uiTemplateGenerator.run({ write: false });
      if (!uiTemplates.passed) {
        errors.push({
          file: check.file,
          rule: 'Generated index freshness',
          message: check.message,
          line: 1
        });
      }
      return;
    }

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

function checkGeneratedBannerPolicy(errors) {
  REQUIRED_GENERATED_FILES.forEach((repoPath) => {
    const raw = readFileSafe(repoPath);
    if (!raw.trim()) return;

    if (!hasFrontmatterKey(raw, 'title')) {
      errors.push({
        file: repoPath,
        rule: 'Generated banner policy',
        message: 'Generated MDX must include frontmatter `title`.',
        line: 1
      });
    }

    if (!hasFrontmatterKey(raw, 'description')) {
      errors.push({
        file: repoPath,
        rule: 'Generated banner policy',
        message: 'Generated MDX must include frontmatter `description`.',
        line: 1
      });
    }

    const hidden = parseGeneratedHiddenBanner(raw);
    if (!hidden.found) {
      errors.push({
        file: repoPath,
        rule: 'Generated banner policy',
        message: 'Generated MDX must include the standardized hidden generated banner.',
        line: 1
      });
    }

    if (!hasGeneratedNote(raw)) {
      errors.push({
        file: repoPath,
        rule: 'Generated banner policy',
        message: 'Generated MDX must include the visible generated <Note> block.',
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
  checkGeneratedBannerPolicy(errors);

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
