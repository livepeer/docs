#!/usr/bin/env node
/**
 * @script            mdx.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components
 * @pipeline          P1, P3
 * @usage             node tests/unit/mdx.test.js [flags]
 */
/**
 * MDX validation tests
 */

const path = require('path');
const { execFileSync } = require('child_process');
const { getMdxFiles, getStagedDocsPageFiles, readFile } = require('../utils/file-walker');
const { extractFrontmatter, validateMdx } = require('../utils/mdx-parser');

let errors = [];
let warnings = [];

function getFrontmatterEndLine(filePath) {
  const content = readFile(filePath);
  if (!content) return 0;
  const frontmatter = extractFrontmatter(content);
  if (!frontmatter.exists || !frontmatter.raw) return 0;
  return frontmatter.raw.split(/\r?\n/).length + 2;
}

function getCachedDiffHunks(filePath) {
  const repoRoot = process.cwd();
  const relPath = path.relative(repoRoot, filePath);
  try {
    const output = execFileSync('git', ['diff', '--cached', '-U0', '--', relPath], {
      cwd: repoRoot,
      encoding: 'utf8'
    });

    return [...output.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)].map((match) => ({
      start: Number(match[1] || 0),
      count: Number(match[2] || 1)
    }));
  } catch (_error) {
    return [];
  }
}

function hasStagedBodyChanges(filePath) {
  const frontmatterEndLine = getFrontmatterEndLine(filePath);
  if (frontmatterEndLine === 0) return true;

  const hunks = getCachedDiffHunks(filePath);
  if (hunks.length === 0) return true;

  return hunks.some(({ start, count }) => {
    const effectiveEnd = count === 0 ? start : (start + count - 1);
    return effectiveEnd > frontmatterEndLine;
  });
}

/**
 * Run MDX validation tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedDocsPageFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getMdxFiles();
    }
  }
  
  testFiles.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    if (stagedOnly && !hasStagedBodyChanges(file)) {
      const frontmatter = extractFrontmatter(content);
      if (frontmatter.exists && frontmatter.error) {
        errors.push({
          file,
          message: `Invalid frontmatter YAML: ${frontmatter.error}`
        });
      }
      return;
    }

    const result = validateMdx(content, file);
    errors.push(...result.errors.map(err => ({
      file,
      ...(typeof err === 'string' ? { message: err } : err)
    })));
    warnings.push(...result.warnings.map(warn => ({
      file,
      message: warn
    })));
  });
  
  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: testFiles.length
  };
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const stagedOnly = args.includes('--staged');
  
  const result = runTests({ stagedOnly });
  
  if (result.errors.length > 0) {
    console.error('\n❌ MDX Validation Errors:\n');
    result.errors.forEach(err => {
      const line = err.line ? `:${err.line}` : '';
      console.error(`  ${err.file}${line} - ${err.message || err}`);
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('\n⚠️  MDX Warnings:\n');
    result.warnings.forEach(warn => {
      console.warn(`  ${warn.file} - ${warn.message}`);
    });
  }
  
  if (result.passed) {
    console.log(`\n✅ MDX validation passed (${result.total} files checked)`);
    process.exit(0);
  } else {
    console.error(`\n❌ ${result.errors.length} error(s) found`);
    process.exit(1);
  }
}

module.exports = { runTests };
