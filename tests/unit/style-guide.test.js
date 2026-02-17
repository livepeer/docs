#!/usr/bin/env node
/**
 * Style guide rule validation tests
 */

const fs = require('fs');
const path = require('path');
const { getMdxFiles, getJsxFiles, getStagedFiles, readFile } = require('../utils/file-walker');

const REPO_ROOT = process.cwd();
let errors = [];
let warnings = [];

/**
 * Check for ThemeData usage (deprecated)
 */
function checkThemeData(files) {
  files.forEach(file => {
    if (file.includes('style-guide.mdx')) return; // Skip style guide itself
    
    const content = readFile(file);
    if (!content) return;
    
    if (content.includes('ThemeData') || content.includes('themeStyles.jsx')) {
      errors.push({
        file,
        rule: 'ThemeData usage',
        message: 'Uses deprecated ThemeData - use CSS Custom Properties instead',
        line: findLineNumber(content, 'ThemeData')
      });
    }
  });
}

/**
 * Check for hardcoded colors
 */
function checkHardcodedColors(files) {
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
        livepeerColors.forEach(color => {
          if (line.includes(color) && !line.includes('var(--') && !line.includes('CSS Custom Properties')) {
            errors.push({
              file,
              rule: 'Hardcoded colors',
              message: `Contains hardcoded theme color ${color} - use CSS Custom Properties (var(--accent), etc.)`,
              line: index + 1
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
function checkInlineStylesInMdx(files) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    if (file.includes('style-guide.mdx') || file.includes('component-library')) return;
    
    const content = readFile(file);
    if (!content) return;
    
    // Check for style={{}} in MDX (should use components instead)
    const styleRegex = /style\s*=\s*\{\{/g;
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (styleRegex.test(line) && !line.includes('//') && !line.includes('{/*')) {
        errors.push({
          file,
          rule: 'No inline styles in MDX',
          message: 'Inline styles in MDX files - use component primitives instead',
          line: index + 1
        });
      }
    });
  });
}

/**
 * Check for Tailwind classes
 */
function checkTailwindClasses(files) {
  files.filter(f => f.endsWith('.mdx')).forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    // Common Tailwind patterns
    const tailwindPatterns = [
      /\b(flex|grid|gap-\d+|items-center|justify-center|p-\d+|m-\d+|w-\d+|h-\d+)\b/
    ];
    
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (line.includes('className=')) {
        tailwindPatterns.forEach(pattern => {
          if (pattern.test(line)) {
            warnings.push({
              file,
              rule: 'No Tailwind classes',
              message: 'Tailwind classes detected - use component primitives instead',
              line: index + 1
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
function checkImportPaths(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    const importRegex = /from\s+['"]([^'"]+)['"]/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      
      // Check for relative imports to snippets
      if (importPath.includes('snippets') && !importPath.startsWith('/snippets')) {
        errors.push({
          file,
          rule: 'Absolute import paths',
          message: `Relative import path for snippets: ${importPath}. Use absolute path: /snippets/...`,
          line: findLineNumber(content, match[0])
        });
      }
      
      // Check for @mintlify/components imports
      if (importPath === '@mintlify/components') {
        warnings.push({
          file,
          rule: 'Unnecessary imports',
          message: 'Imports from @mintlify/components - these are global, no import needed',
          line: findLineNumber(content, match[0])
        });
      }
      
      // Check for React hook imports
      if (importPath === 'react' && content.includes('useState') || content.includes('useEffect')) {
        warnings.push({
          file,
          rule: 'Unnecessary React imports',
          message: 'Imports React hooks - hooks are global in Mintlify, no import needed',
          line: findLineNumber(content, match[0])
        });
      }
    }
  });
}

/**
 * Check file naming conventions
 */
function checkFileNaming(files) {
  files.filter(f => f.endsWith('.mdx') || f.endsWith('.jsx')).forEach(file => {
    const fileName = path.basename(file);
    
    // Check kebab-case for files
    if (!/^[a-z0-9]+(-[a-z0-9]+)*\.(mdx|jsx)$/.test(fileName) && !fileName.includes('index')) {
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
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedFiles().filter(f => f.endsWith('.mdx') || f.endsWith('.jsx'));
    } else {
      testFiles = [...getMdxFiles(), ...getJsxFiles()];
    }
  }
  
  checkThemeData(testFiles);
  checkHardcodedColors(testFiles);
  checkInlineStylesInMdx(testFiles);
  checkTailwindClasses(testFiles);
  checkImportPaths(testFiles);
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
