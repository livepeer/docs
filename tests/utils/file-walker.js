#!/usr/bin/env node
/**
 * File traversal utilities for testing
 */

const fs = require('fs');
const path = require('path');

/**
 * Recursively get all files matching a pattern
 */
function getFiles(dir, pattern, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (!file.startsWith('.') && file !== 'node_modules') {
        getFiles(filePath, pattern, fileList);
      }
    } else if (pattern.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Get all MDX files in v2/pages
 */
function getMdxFiles(rootDir = process.cwd()) {
  const pagesDir = path.join(rootDir, 'v2', 'pages');
  if (!fs.existsSync(pagesDir)) {
    return [];
  }
  return getFiles(pagesDir, /\.mdx$/);
}

/**
 * Get all JSX files in snippets/components
 */
function getJsxFiles(rootDir = process.cwd()) {
  const componentsDir = path.join(rootDir, 'snippets', 'components');
  if (!fs.existsSync(componentsDir)) {
    return [];
  }
  return getFiles(componentsDir, /\.jsx$/);
}

/**
 * Get staged files from git
 * Returns absolute paths relative to repo root (not cwd)
 */
function getStagedFiles() {
  const { execSync } = require('child_process');
  try {
    // Get repo root directory (where .git is)
    const repoRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
    
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => path.resolve(repoRoot, line));
  } catch (error) {
    return [];
  }
}

/**
 * Read file content
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

module.exports = {
  getFiles,
  getMdxFiles,
  getJsxFiles,
  getStagedFiles,
  readFile
};
