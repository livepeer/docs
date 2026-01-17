#!/usr/bin/env node

/**
 * Script to add callouts to MDX pages
 * 
 * This script processes all MDX files in v2/pages and adds appropriate callouts:
 * - ComingSoonCallout for pages with no content (only metadata/title)
 * - PreviewCallout for pages with content
 * 
 * Usage: node add-callouts.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const COMING_SOON_IMPORT = "import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'";
const COMING_SOON_COMPONENT = '<ComingSoonCallout />';
const PREVIEW_IMPORT = "import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'";
const PREVIEW_COMPONENT = '<PreviewCallout />';

/**
 * Check if a page has substantial content beyond metadata
 * @param {string} content - The file content
 * @returns {boolean} - True if page has content, false otherwise
 */
function hasContent(content) {
  // Split by metadata delimiter
  const parts = content.split('---');
  
  if (parts.length < 3) {
    return false; // No proper metadata structure
  }
  
  // Get content after metadata (parts[2] onwards)
  const afterMetadata = parts.slice(2).join('---').trim();
  
  // Remove imports
  const withoutImports = afterMetadata.replace(/^import\s+.*$/gm, '').trim();
  
  // Remove existing callouts
  const withoutCallouts = withoutImports
    .replace(/<ComingSoonCallout\s*\/>/g, '')
    .replace(/<PreviewCallout\s*\/>/g, '')
    .trim();
  
  // Check if there's meaningful content (more than just whitespace or a single heading)
  const lines = withoutCallouts.split('\n').filter(line => line.trim().length > 0);
  
  // If only one line and it's a heading, consider it as no content
  if (lines.length === 0 || (lines.length === 1 && lines[0].trim().startsWith('#'))) {
    return false;
  }
  
  return true;
}

/**
 * Check if file already has a callout
 * @param {string} content - The file content
 * @returns {boolean} - True if callout exists
 */
function hasCallout(content) {
  return content.includes('<ComingSoonCallout') || 
         content.includes('<PreviewCallout') ||
         content.includes('<ReviewCallout') ||
         content.includes('<CookingCallout');
}

/**
 * Add callout to MDX file
 * @param {string} filePath - Path to the MDX file
 * @param {boolean} dryRun - If true, don't write changes
 */
function addCalloutToFile(filePath, dryRun = false) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has a callout
  if (hasCallout(content)) {
    console.log(`⏭️  Skipping ${filePath} - already has callout`);
    return;
  }
  
  // Split by metadata delimiter
  const parts = content.split('---');
  
  if (parts.length < 3) {
    console.log(`⚠️  Skipping ${filePath} - no proper metadata structure`);
    return;
  }
  
  const beforeMetadata = parts[0];
  const metadata = parts[1];
  const afterMetadata = parts.slice(2).join('---');
  
  const pageHasContent = hasContent(content);
  const importStatement = pageHasContent ? PREVIEW_IMPORT : COMING_SOON_IMPORT;
  const componentStatement = pageHasContent ? PREVIEW_COMPONENT : COMING_SOON_COMPONENT;
  
  // Build new content
  const newContent = `${beforeMetadata}---${metadata}---\n\n${importStatement}\n\n${componentStatement}\n${afterMetadata}`;
  
  if (dryRun) {
    console.log(`🔍 [DRY RUN] Would add ${pageHasContent ? 'PreviewCallout' : 'ComingSoonCallout'} to ${filePath}`);
  } else {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Added ${pageHasContent ? 'PreviewCallout' : 'ComingSoonCallout'} to ${filePath}`);
  }
}

/**
 * Recursively find all MDX files in a directory
 * @param {string} dir - Directory to search
 * @returns {string[]} - Array of MDX file paths
 */
function findMdxFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(findMdxFiles(fullPath));
    } else if (item.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Main execution
const dryRun = process.argv.includes('--dry-run');
const pagesDir = path.join(__dirname, '../pages');

console.log(`🚀 Starting callout addition ${dryRun ? '(DRY RUN)' : ''}...\n`);

const mdxFiles = findMdxFiles(pagesDir);
console.log(`📄 Found ${mdxFiles.length} MDX files\n`);

for (const file of mdxFiles) {
  addCalloutToFile(file, dryRun);
}

console.log(`\n✨ Done!`);

