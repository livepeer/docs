#!/usr/bin/env node
/**
 * Broken links and imports validation
 * Checks that all internal links and imports resolve to existing files
 */

const fs = require('fs');
const path = require('path');
const { getMdxFiles, getStagedFiles, readFile } = require('../utils/file-walker');
const { extractImports } = require('../utils/mdx-parser');

let errors = [];
let warnings = [];

/**
 * Resolve a file path relative to the repository root
 */
function resolveFilePath(filePath, rootDir = process.cwd()) {
  if (path.isAbsolute(filePath)) {
    return path.join(rootDir, filePath);
  }
  return path.resolve(rootDir, filePath);
}

/**
 * Check if a file exists (tries multiple extensions/variations)
 */
function fileExists(filePath) {
  // Try exact path
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }
  
  // Try with .mdx extension
  const withMdx = filePath.endsWith('.mdx') ? filePath : `${filePath}.mdx`;
  if (fs.existsSync(withMdx)) {
    return { exists: true, path: withMdx };
  }
  
  // Try as directory with index.mdx
  const dirIndex = path.join(filePath, 'index.mdx');
  if (fs.existsSync(dirIndex)) {
    return { exists: true, path: dirIndex };
  }
  
  // Try as directory with README.mdx
  const dirReadme = path.join(filePath, 'README.mdx');
  if (fs.existsSync(dirReadme)) {
    return { exists: true, path: dirReadme };
  }
  
  return { exists: false, path: null };
}

/**
 * Convert link path to file path
 */
function linkToFilePath(linkPath, currentFile) {
  const rootDir = process.cwd();
  
  // Skip external links
  if (linkPath.startsWith('http://') || 
      linkPath.startsWith('https://') || 
      linkPath.startsWith('mailto:') ||
      linkPath.startsWith('#')) {
    return null;
  }
  
  // Get repo root directory (where .git is) - same fix as getStagedFiles
  const { execSync } = require('child_process');
  let repoRoot;
  try {
    repoRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (e) {
    repoRoot = rootDir; // Fallback to rootDir if not in git repo
  }
  
  // Absolute path from root (starts with /)
  if (linkPath.startsWith('/')) {
    // Remove leading slash and convert to file path
    let filePath = linkPath.replace(/^\//, '').replace(/\/$/, '');
    
    // If it looks like a v2/pages path, use it directly
    if (filePath.startsWith('v2/pages/')) {
      return path.join(repoRoot, filePath);
    }
    
    // Otherwise, assume it's a v2/pages path
    if (!filePath.startsWith('v2/')) {
      filePath = `v2/pages/${filePath}`;
    }
    
    return path.join(repoRoot, filePath);
  }
  
  // Relative path
  const currentDir = path.dirname(currentFile);
  const resolved = path.resolve(currentDir, linkPath);
  
  // Normalize to relative from root
  const relativePath = path.relative(rootDir, resolved);
  return path.join(rootDir, relativePath);
}

/**
 * Check for broken internal links
 */
function checkBrokenLinks(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    // Check markdown links [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      const linkPath = match[2];
      const filePath = linkToFilePath(linkPath, file);
      
      if (!filePath) continue; // External link, skip
      
      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    }
    
    // Check HTML anchor tags <a href="...">
    const anchorRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    while ((match = anchorRegex.exec(content)) !== null) {
      const linkPath = match[1];
      const filePath = linkToFilePath(linkPath, file);
      
      if (!filePath) continue; // External link, skip
      
      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Anchor link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    }
  });
}

/**
 * Check for broken imports
 */
function checkBrokenImports(files) {
  files.forEach(file => {
    const content = readFile(file);
    if (!content) return;
    
    const imports = extractImports(content);
    
    imports.forEach(imp => {
      const importPath = imp.path;
      
      // Skip external packages (node_modules, npm packages)
      if (!importPath.startsWith('/') && !importPath.startsWith('./') && !importPath.startsWith('../')) {
        return; // Assume it's an npm package or global
      }
      
      // Resolve import path
      // Get repo root directory (where .git is) - same fix as getStagedFiles
      const { execSync } = require('child_process');
      let rootDir;
      try {
        rootDir = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
      } catch (e) {
        rootDir = process.cwd(); // Fallback to cwd if not in git repo
      }
      
      let filePath;
      if (importPath.startsWith('/')) {
        // Absolute path from root
        filePath = path.join(rootDir, importPath);
      } else {
        // Relative path
        const currentDir = path.dirname(file);
        filePath = path.resolve(currentDir, importPath);
        // Normalize to relative from root
        const relativePath = path.relative(rootDir, filePath);
        filePath = path.join(rootDir, relativePath);
      }
      
      // Try with .jsx extension if not present
      if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.mdx')) {
        const withJsx = `${filePath}.jsx`;
        const withJs = `${filePath}.js`;
        const withMdx = `${filePath}.mdx`;
        
        if (fs.existsSync(withJsx)) {
          filePath = withJsx;
        } else if (fs.existsSync(withJs)) {
          filePath = withJs;
        } else if (fs.existsSync(withMdx)) {
          filePath = withMdx;
        }
      }
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        errors.push({
          file,
          rule: 'Broken import',
          message: `Import from "${importPath}" points to non-existent file`,
          import: importPath,
          expected: filePath.replace(process.cwd() + '/', '')
        });
      }
    });
  });
}

/**
 * Run all link and import tests
 */
function runTests(options = {}) {
  errors = [];
  warnings = [];
  
  const { files = null, stagedOnly = false } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = getStagedFiles().filter(f => f.endsWith('.mdx'));
    } else {
      testFiles = getMdxFiles();
    }
  }
  
  checkBrokenLinks(testFiles);
  checkBrokenImports(testFiles);
  
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
    console.error('\n❌ Broken Links/Imports Errors:\n');
    result.errors.forEach(err => {
      console.error(`  ${err.file}`);
      console.error(`    ${err.rule}: ${err.message}`);
      if (err.expected) {
        console.error(`    Expected: ${err.expected}`);
      }
      console.error('');
    });
  }
  
  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Link/Import Warnings:\n');
    result.warnings.forEach(warn => {
      console.warn(`  ${warn.file} - ${warn.message}`);
    });
  }
  
  if (result.passed) {
    console.log(`\n✅ All links and imports valid (${result.total} files checked)`);
    process.exit(0);
  } else {
    console.error(`\n❌ ${result.errors.length} broken link(s) or import(s) found`);
    process.exit(1);
  }
}

module.exports = { runTests };
