#!/usr/bin/env node
/**
 * @script            mdx-guards.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests, v2/pages, snippets/pages, snippets/snippetsWiki
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks
 * @pipeline          P1 (commit, via run-all)
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/unit/mdx-guards.test.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let errors = [];
let warnings = [];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function toRelative(filePath, rootDir) {
  return toPosix(path.relative(rootDir, filePath));
}

function getLineFromIndex(content, index) {
  return content.slice(0, index).split('\n').length;
}

function walkFiles(dirPath, predicate, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, predicate, out);
      continue;
    }
    if (predicate(fullPath)) out.push(fullPath);
  }

  return out;
}

function collectMdxFiles(rootDir, relDir) {
  return walkFiles(path.join(rootDir, relDir), (filePath) => filePath.endsWith('.mdx'));
}

function collectMarkdownFiles(rootDir, relDir) {
  return walkFiles(path.join(rootDir, relDir), (filePath) => /\.(md|mdx)$/i.test(filePath));
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_error) {
    return '';
  }
}

function stripFencedCode(content) {
  return content.replace(/```[\s\S]*?```/g, '');
}

function checkLatestVersionAliasing(rootDir) {
  const files = [
    ...collectMdxFiles(rootDir, 'v2/pages'),
    ...collectMdxFiles(rootDir, 'snippets/pages')
  ];
  const aliasPattern = /import\s*\{[^}]*\blatestVersion\s+as\s+[A-Za-z_$][\w$]*[^}]*\}\s*from\s*['"][^'"]+['"]/g;

  files.forEach((filePath) => {
    const content = stripFencedCode(readFileSafe(filePath));
    let match;
    while ((match = aliasPattern.exec(content)) !== null) {
      errors.push({
        file: toRelative(filePath, rootDir),
        rule: 'latestVersion aliasing',
        line: getLineFromIndex(content, match.index),
        message: 'Do not alias latestVersion (use latestVersion directly).'
      });
    }
  });

  return files.length;
}

function checkGlobalsImportPath(rootDir) {
  const files = [
    ...collectMdxFiles(rootDir, 'v2/pages'),
    ...collectMdxFiles(rootDir, 'snippets/pages'),
    ...collectMdxFiles(rootDir, 'snippets/snippetsWiki')
  ];
  const globalsJsxPattern = /from\s*['"]\/snippets\/automations\/globals\/globals\.jsx['"]/g;

  files.forEach((filePath) => {
    const content = stripFencedCode(readFileSafe(filePath));
    let match;
    while ((match = globalsJsxPattern.exec(content)) !== null) {
      errors.push({
        file: toRelative(filePath, rootDir),
        rule: 'globals import path',
        line: getLineFromIndex(content, match.index),
        message: 'Use /snippets/automations/globals/globals.mdx (not globals.jsx).'
      });
    }
  });

  return files.length;
}

function checkLptMathDelimiters(rootDir) {
  const files = collectMdxFiles(rootDir, 'v2/pages/06_lptoken');
  const pattern = /\\\(|\\\[/g;

  files.forEach((filePath) => {
    const content = readFileSafe(filePath);
    let match;
    while ((match = pattern.exec(content)) !== null) {
      errors.push({
        file: toRelative(filePath, rootDir),
        rule: 'LPT math delimiters',
        line: getLineFromIndex(content, match.index),
        message: 'Use $...$ and $$...$$ delimiters; do not use \\( or \\[ in v2/pages/06_lptoken.'
      });
    }
  });

  return files.length;
}

function checkRawBrInMarkdownTables(rootDir) {
  const files = collectMarkdownFiles(rootDir, 'tests');
  const rawBrPattern = /<br>(?!\s*\/>)/;

  files.forEach((filePath) => {
    const content = readFileSafe(filePath);
    if (!content) return;
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      if (!/^\s*\|/.test(line)) return;
      if (!rawBrPattern.test(line)) return;
      errors.push({
        file: toRelative(filePath, rootDir),
        rule: 'Raw <br> in markdown table',
        line: idx + 1,
        message: 'Use <br /> in markdown table cells.'
      });
    });
  });

  return files.length;
}

function runTests() {
  errors = [];
  warnings = [];
  const rootDir = getRepoRoot();

  const scannedCounts = [];
  scannedCounts.push(checkLatestVersionAliasing(rootDir));
  scannedCounts.push(checkGlobalsImportPath(rootDir));
  scannedCounts.push(checkLptMathDelimiters(rootDir));
  scannedCounts.push(checkRawBrInMarkdownTables(rootDir));

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: scannedCounts.reduce((acc, count) => acc + count, 0)
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.errors.length > 0) {
    console.error('\n❌ MDX Guardrail Errors:\n');
    result.errors.forEach((err) => {
      console.error(`  ${err.file}:${err.line} - ${err.rule}: ${err.message}`);
    });
  }

  if (result.warnings.length > 0) {
    console.warn('\n⚠️  MDX Guardrail Warnings:\n');
    result.warnings.forEach((warn) => {
      console.warn(`  ${warn.file}:${warn.line || 1} - ${warn.message}`);
    });
  }

  if (result.passed) {
    console.log(`\n✅ MDX guardrails passed (${result.total} file scans)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} guardrail error(s) found`);
  process.exit(1);
}

module.exports = { runTests };
