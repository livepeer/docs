#!/usr/bin/env node
/**
 * @script            copy-lint.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/unit, tests/copy-lint-fixtures, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Copy lint unit suite — validates fixture-driven copy-governance checks and runs changed-file scoped lint aggregation for authored docs pages.
 * @pipeline          P1, P3
 * @usage             node tests/unit/copy-lint.test.js [--staged] [--files <a,b,c>]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { getAuthoredMdxFiles, getStagedAuthoredDocsPageFiles } = require('../utils/file-walker');
const { filterAuthoredDocsPageFiles } = require('../../tools/lib/docs-page-scope');
const lintCopy = require('../../tools/scripts/lint-copy');
const lintStructure = require('../../tools/scripts/lint-structure');
const lintPatterns = require('../../tools/scripts/lint-patterns');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const FIXTURE_ROOT = path.join(REPO_ROOT, 'tests', 'copy-lint-fixtures');
const PASS_FIXTURE_DIR = path.join(FIXTURE_ROOT, 'fixtures', 'pass');
const FAIL_FIXTURE_DIR = path.join(FIXTURE_ROOT, 'fixtures', 'fail');
const EXPECTED_DIR = path.join(FIXTURE_ROOT, 'expected');

function parseArgs(argv) {
  const parsed = { stagedOnly: false, files: [] };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--staged') {
      parsed.stagedOnly = true;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
          .forEach((entry) => {
            parsed.files.push(path.isAbsolute(entry) ? entry : path.resolve(REPO_ROOT, entry));
          });
      }
      i += 1;
    }
  }

  parsed.files = [...new Set(parsed.files)];
  return parsed;
}

function selectTestFiles(options = {}) {
  const { files = null, stagedOnly = false } = options;
  if (Array.isArray(files) && files.length > 0) {
    return filterAuthoredDocsPageFiles(files).filter((filePath) => filePath.endsWith('.mdx'));
  }
  if (stagedOnly) {
    return getStagedAuthoredDocsPageFiles().filter((filePath) => filePath.endsWith('.mdx'));
  }
  return getAuthoredMdxFiles();
}

function analyzeStructure(content, filePath) {
  const frontmatter = lintStructure.parseFrontmatter(content);
  const depth = lintStructure.getEnforcementDepth(frontmatter.pageType);

  return [
    ...lintStructure.checkFrontmatter(content, filePath),
    ...lintStructure.checkReviewFlags(content, filePath),
    ...(depth !== 'tier1-only' ? lintStructure.checkEmptyTableCells(content, filePath) : []),
    ...(depth === 'full' ? lintStructure.checkAccordionUrls(content, filePath) : []),
    ...(depth === 'full' ? lintStructure.checkHedgeNotes(content, filePath) : [])
  ];
}

function buildCopyFindings(content, filePath) {
  const phraseFindings = lintCopy.checkBannedPhrases(content, filePath);
  const phraseHitLines = new Set(phraseFindings.map((finding) => finding.line));

  return [
    ...phraseFindings,
    ...lintCopy.checkBannedWords(content, filePath, { suppressedLines: phraseHitLines }),
    ...lintCopy.checkAdvisoryHeuristics(content, filePath)
  ];
}

function mergeFindings(...groups) {
  const merged = [];
  const seen = new Set();

  groups.flat().forEach((finding) => {
    const key = [
      finding.file || '',
      finding.line || 0,
      finding.tier || 0,
      finding.id || '',
      finding.match || ''
    ].join('::');

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    merged.push(finding);
  });

  return merged;
}

function analyzeFile(filePath, options = {}) {
  const { includePatternChecks = true } = options;
  const content = fs.readFileSync(filePath, 'utf8');
  const findings = mergeFindings(
    buildCopyFindings(content, filePath),
    analyzeStructure(content, filePath),
    includePatternChecks ? lintPatterns.checkFile(filePath) : []
  );

  const errors = findings.filter((finding) => finding.tier === 1);
  const warnings = findings.filter((finding) => finding.tier !== 1);
  return { findings, errors, warnings };
}

function matchesExpectedFinding(finding, expected) {
  if (finding.id !== expected.id) return false;
  if (Object.prototype.hasOwnProperty.call(expected, 'line') && Number(expected.line) !== Number(finding.line)) {
    return false;
  }
  if (expected.match) {
    const haystack = `${finding.match || ''} ${finding.label || ''} ${finding.text || ''}`.toLowerCase();
    if (!haystack.includes(String(expected.match).toLowerCase())) {
      return false;
    }
  }
  return true;
}

function collectFixtureFiles(dirPath) {
  return fs
    .readdirSync(dirPath)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .sort()
    .map((fileName) => path.join(dirPath, fileName));
}

function toRelative(filePath) {
  return path.relative(REPO_ROOT, filePath).split(path.sep).join('/');
}

function runFixtureMode() {
  const errors = [];
  const warnings = [];

  collectFixtureFiles(PASS_FIXTURE_DIR).forEach((filePath) => {
    const result = analyzeFile(filePath);
    if (result.errors.length > 0 || result.warnings.length > 0) {
      errors.push(
        `${path.basename(filePath)} should have zero findings; got ${result.findings
          .map((finding) => `${finding.id}@L${finding.line}`)
          .join(', ')}`
      );
    }
  });

  collectFixtureFiles(FAIL_FIXTURE_DIR).forEach((filePath) => {
    const expectedPath = path.join(EXPECTED_DIR, `${path.basename(filePath, '.mdx')}.json`);
    if (!fs.existsSync(expectedPath)) {
      errors.push(`Missing expected output file for fixture: ${path.basename(filePath)}`);
      return;
    }

    const expected = JSON.parse(fs.readFileSync(expectedPath, 'utf8'));
    const result = analyzeFile(filePath, { includePatternChecks: true });
    const allExpectedFindings = Array.isArray(expected.errors) ? expected.errors : [];
    const requiredFindings = allExpectedFindings.filter((entry) => entry.required !== false);

    requiredFindings.forEach((entry) => {
      const matched = result.findings.find((finding) => matchesExpectedFinding(finding, entry));
      if (!matched) {
        errors.push(
          `${path.basename(filePath)} missing ${entry.id}${entry.line ? `@L${entry.line}` : ''}${
            entry.match ? ` (${entry.match})` : ''
          }`
        );
      }
    });

    const expectedIds = new Set(allExpectedFindings.map((entry) => entry.id));
    const unexpected = result.findings.filter((finding) => !expectedIds.has(finding.id));
    if (unexpected.length > 0) {
      errors.push(
        `${path.basename(filePath)} produced unexpected findings: ${unexpected
          .map((finding) => `${finding.id}@L${finding.line}`)
          .join(', ')}`
      );
    }
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: collectFixtureFiles(PASS_FIXTURE_DIR).length + collectFixtureFiles(FAIL_FIXTURE_DIR).length
  };
}

function runFileMode(options = {}) {
  const testFiles = selectTestFiles(options);
  const errors = [];
  const warnings = [];

  testFiles.forEach((filePath) => {
    const result = analyzeFile(filePath);
    result.errors.forEach((finding) => {
      errors.push({ ...finding, file: toRelative(filePath) });
    });
    result.warnings.forEach((finding) => {
      warnings.push({ ...finding, file: toRelative(filePath) });
    });
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: testFiles.length
  };
}

function runTests(options = {}) {
  const { files = null, stagedOnly = false } = options;
  if ((Array.isArray(files) && files.length > 0) || stagedOnly) {
    return runFileMode({ files, stagedOnly });
  }
  return runFixtureMode();
}

function printFinding(prefix, finding) {
  if (typeof finding === 'string') {
    console.error(`${prefix} ${finding}`);
    return;
  }
  console.error(`${prefix} ${finding.file}:${finding.line || 1} ${finding.id} ${finding.label || finding.message || ''}`.trim());
}

if (require.main === module) {
  const args = parseArgs(process.argv.slice(2));
  const result = runTests({
    stagedOnly: args.stagedOnly,
    files: args.files.length > 0 ? args.files : null
  });

  if (result.errors.length > 0) {
    console.error('\n❌ Copy Lint Errors:\n');
    result.errors.forEach((finding) => printFinding('  ', finding));
  }

  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Copy Lint Warnings:\n');
    result.warnings.forEach((finding) => {
      if (typeof finding === 'string') {
        console.warn(`  ${finding}`);
      } else {
        console.warn(`  ${finding.file}:${finding.line || 1} ${finding.id} ${finding.label || finding.message || ''}`.trim());
      }
    });
  }

  if (result.passed) {
    console.log(`\n✅ Copy lint tests passed (${result.total} file(s) checked)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} copy lint issue(s) found`);
  process.exit(1);
}

module.exports = { runTests };
