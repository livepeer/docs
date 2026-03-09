#!/usr/bin/env node
/**
 * @script            style-guide.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Style guide compliance — checks en-GB conventions, heading case, formatting rules
 * @pipeline          P1, P3
 * @usage             node tests/unit/style-guide.test.js [flags]
 */
/**
 * Style guide rule validation tests
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { getMdxFiles, getJsxFiles, getStagedDocsPageFiles, readFile } = require('../utils/file-walker');

const REPO_ROOT = process.cwd();
let errors = [];
let warnings = [];
let changedLineMap = null;

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function getChangedLineSetFromDiff(filePath, diffArgs) {
  const relPath = toPosix(path.relative(REPO_ROOT, filePath));
  if (!relPath) {
    return null;
  }

  try {
    const diff = execSync(`git ${diffArgs.join(' ')} -- "${relPath}"`, {
      encoding: 'utf8',
      cwd: REPO_ROOT
    });
    const changedLines = new Set();
    const hunkRegex = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/;

    diff.split('\n').forEach((line) => {
      const match = line.match(hunkRegex);
      if (!match) return;

      const start = Number(match[1]);
      const count = match[2] ? Number(match[2]) : 1;
      if (!Number.isFinite(start) || !Number.isFinite(count) || count <= 0) return;

      for (let i = 0; i < count; i++) {
        changedLines.add(start + i);
      }
    });

    return changedLines;
  } catch (_error) {
    return null;
  }
}

function getStagedChangedLineSet(filePath) {
  return getChangedLineSetFromDiff(filePath, ['diff', '--cached', '--unified=0']);
}

function getBaseRefChangedLineSet(filePath, baseRef) {
  if (!baseRef) {
    return null;
  }

  return getChangedLineSetFromDiff(filePath, ['diff', '--unified=0', `origin/${baseRef}...HEAD`]);
}

function shouldCheckLine(file, line, changedOnly) {
  if (!changedOnly || !changedLineMap) {
    return true;
  }

  const changedLines = changedLineMap.get(file);
  if (!changedLines || changedLines.size === 0) {
    return false;
  }

  return changedLines.has(line);
}

/**
 * Check for ThemeData usage (deprecated)
 */
function checkThemeData(files, stagedOnly = false) {
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return; // Skip style guide itself
    
    const content = readFile(file);
    if (!content) return;

    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (!line.includes('ThemeData') && !line.includes('themeStyles.jsx')) {
        return;
      }
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      errors.push({
        file,
        rule: 'ThemeData usage',
        message: 'Uses deprecated ThemeData - use CSS Custom Properties instead',
        line: lineNumber
      });
    });
  });
}

/**
 * Check for hardcoded colors
 */
function checkHardcodedColors(files, stagedOnly = false) {
  const livepeerColors = ['#3CB540', '#2b9a66', '#18794E', '#181C18', '#E0E4E0', '#717571', '#A0A4A0'];
  
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return;
    
    const content = readFile(file);
    if (!content) return;
    
    // Skip code blocks and markdown tables
    const lines = content.split('\n');
    let inCodeBlock = false;
    let inTable = false;
    
    lines.forEach((line, index) => {
      if (line.trim().startsWith('```')) inCodeBlock = !inCodeBlock;
      if (line.includes('|') && line.includes('---')) inTable = true;
      if (line.trim() === '') inTable = false;
      
      if (!inCodeBlock && !inTable) {
        const lineNumber = index + 1;
        if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
          return;
        }
        livepeerColors.forEach(color => {
          if (line.includes(color) && !line.includes('var(--') && !line.includes('CSS Custom Properties')) {
            errors.push({
              file,
              rule: 'Hardcoded colors',
              message: `Contains hardcoded theme color ${color} - use CSS Custom Properties (var(--accent), etc.)`,
              line: lineNumber
            });
          }
        });
      }
    });
  });
}

/**
 * Check for inline styles in MDX
 */
function checkInlineStylesInMdx(files, stagedOnly = false) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    if (file.includes('style-guide.mdx') || file.includes('component-library')) return;
    
    const content = readFile(file);
    if (!content) return;
    
    // Check for style={{}} in MDX (should use components instead)
    const styleRegex = /style\s*=\s*\{\{/g;
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      if (styleRegex.test(line) && !line.includes('//') && !line.includes('{/*')) {
        errors.push({
          file,
          rule: 'No inline styles in MDX',
          message: 'Inline styles in MDX files - use component primitives instead',
          line: lineNumber
        });
      }
    });
  });
}

/**
 * Check for Tailwind classes
 */
function checkTailwindClasses(files, stagedOnly = false) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    // Common Tailwind patterns
    const tailwindPatterns = [
      /\b(flex|grid|gap-\d+|items-center|justify-center|p-\d+|m-\d+|w-\d+|h-\d+)\b/
    ];
    
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        return;
      }
      if (line.includes('className=')) {
        tailwindPatterns.forEach(pattern => {
          if (pattern.test(line)) {
            warnings.push({
              file,
              rule: 'No Tailwind classes',
              message: 'Tailwind classes detected - use component primitives instead',
              line: lineNumber
            });
          }
        });
      }
    });
  });
}

/**
 * Check import paths
 */
function checkImportPaths(files, stagedOnly = false) {
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return; // Skip style guide (it documents relative imports as examples of what NOT to do)
    
    const content = readFile(file);
    if (!content) return;
    
    const importRegex = /from\s+['"]([^'"]+)['"]/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      const lineNumber = content.substring(0, match.index).split('\n').length;
      if (!shouldCheckLine(file, lineNumber, stagedOnly)) {
        continue;
      }
      
      // Check for relative imports to snippets
      if (importPath.includes('snippets') && !importPath.startsWith('/snippets')) {
        errors.push({
          file,
          rule: 'Absolute import paths',
          message: `Relative import path for snippets: ${importPath}. Use absolute path: /snippets/...`,
          line: lineNumber
        });
      }
      
      // Check for @mintlify/components imports
      if (importPath === '@mintlify/components') {
        warnings.push({
          file,
          rule: 'Unnecessary imports',
          message: 'Imports from @mintlify/components - these are global, no import needed',
          line: lineNumber
        });
      }
      
      // Check for React hook imports
      if (importPath === 'react' && content.includes('useState') || content.includes('useEffect')) {
        warnings.push({
          file,
          rule: 'Unnecessary React imports',
          message: 'Imports React hooks - hooks are global in Mintlify, no import needed',
          line: lineNumber
        });
      }
    }
  });
}

/**
 * Check MDX file naming conventions.
 * Component JSX naming is enforced by the dedicated component naming validator.
 */
function checkFileNaming(files) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    const fileName = path.basename(file);
    
    // Check kebab-case for files
    if (!/^[a-z0-9]+(-[a-z0-9]+)*\.mdx$/.test(fileName) && !fileName.includes('index')) {
      warnings.push({
        file,
        rule: 'File naming',
        message: `File name should be kebab-case: ${fileName}`,
        line: 1
      });
    }
  });
}

/**
 * Helper to find line number
 */
function findLineNumber(content, search) {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(search)) return i + 1;
  }
  return 1;
}

/**
 * Run all style guide tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  changedLineMap = null;
  
  const { files = null, stagedOnly = false, baseRef = '' } = options;
  const changedOnly = Boolean(stagedOnly || baseRef);
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedDocsPageFiles().filter(f => f.endsWith('.mdx') && !f.includes('style-guide.mdx'));
    } else {
      testFiles = [...getMdxFiles(), ...getJsxFiles()].filter(f => !f.includes('style-guide.mdx'));
    }
  } else {
    // Filter out style-guide.mdx even if files are explicitly provided
    testFiles = testFiles.filter(f => !f.includes('style-guide.mdx'));
  }

  if (changedOnly) {
    changedLineMap = new Map();
    testFiles.forEach((file) => {
      const lineSet = stagedOnly ? getStagedChangedLineSet(file) : getBaseRefChangedLineSet(file, baseRef);
      changedLineMap.set(file, lineSet);
    });
  }

  checkThemeData(testFiles, changedOnly);
  checkHardcodedColors(testFiles, changedOnly);
  checkInlineStylesInMdx(testFiles, changedOnly);
  checkTailwindClasses(testFiles, changedOnly);
  checkImportPaths(testFiles, changedOnly);
  checkFileNaming(testFiles);
  
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
    console.error('\n❌ Style Guide Violations:\n');
    result.errors.forEach(err => {
      console.error(`  ${err.file}:${err.line} - ${err.message}`);
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Warnings:\n');
    result.warnings.forEach(warn => {
      console.warn(`  ${warn.file}:${warn.line} - ${warn.message}`);
    });
  }
  
  if (result.passed) {
    console.log(`\n✅ Style guide checks passed (${result.total} files checked)`);
    process.exit(0);
  } else {
    console.error(`\n❌ ${result.errors.length} violation(s) found`);
    process.exit(1);
  }
}

module.exports = { runTests };
