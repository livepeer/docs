#!/usr/bin/env node
/**
 * @script            add-callouts
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Callout inserter — adds Note/Tip/Warning callout components to MDX files based on content patterns
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/dev/add-callouts.js [flags]
 */

/**
 * Script to add callouts to MDX pages
 * 
 * This script processes all MDX files in v2 docs folders and adds appropriate callouts:
 * - ComingSoonCallout for pages with no content (only metadata/title)
 * - PreviewCallout for pages with content
 * 
 * Usage: node add-callouts.js [--dry-run] [--remove]
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');

const COMING_SOON_IMPORT = "import {ComingSoonCallout} from '/snippets/components/primitives/previewCallouts.jsx'";
const COMING_SOON_COMPONENT = '<ComingSoonCallout />';
const PREVIEW_IMPORT = "import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'";
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
    .replace(/<ComingSoonCallout\b[^>]*\/>/g, '')
    .replace(/<PreviewCallout\b[^>]*\/>/g, '')
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
 * Collect v2 English nav page paths from docs.json.
 * @returns {string[]} - Array of page paths like "v2/..."
 */
function getV2EnglishNavPages() {
  if (!fs.existsSync(DOCS_JSON_PATH)) {
    throw new Error(`docs.json not found at ${DOCS_JSON_PATH}`);
  }

  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  const versions = (docsJson.navigation && docsJson.navigation.versions) || [];
  const v2 = versions.find((version) => version.version === 'v2');
  if (!v2) return [];

  const languages = v2.languages || [];
  const en = languages.find((lang) => lang.language === 'en');
  if (!en) return [];

  const pages = new Set();

  function collect(node) {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(collect);
      return;
    }
    if (typeof node === 'string') {
      const value = node.trim();
      if (value && value.startsWith('v2/')) {
        pages.add(value);
      }
      return;
    }
    if (typeof node === 'object') {
      collect(node.pages);
      collect(node.groups);
      collect(node.anchors);
      collect(node.tabs);
    }
  }

  collect(en.tabs);

  return Array.from(pages);
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
 * Remove preview callout imports if unused.
 * @param {string} content - The file content
 * @param {object} usage - Usage flags for callouts
 * @returns {string} - Updated content
 */
function cleanupPreviewCalloutImports(content, usage) {
  const importRegex = /^\s*import\s+\{([^}]*)\}\s+from\s+(['"])\/snippets\/components\/primitives\/previewCallouts\.jsx\2;?\s*$/;

  return content
    .split('\n')
    .map((line) => {
      const match = line.match(importRegex);
      if (!match) return line;

      const quote = match[2];
      const hasSemicolon = line.trim().endsWith(';');
      const items = match[1]
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

      const filtered = items.filter((item) => {
        if (item === 'PreviewCallout') return usage.keepPreview;
        if (item === 'ComingSoonCallout') return usage.keepComing;
        return true;
      });

      if (filtered.length === 0) return null;

      return `import { ${filtered.join(', ')} } from ${quote}/snippets/components/primitives/previewCallouts.jsx${quote}${hasSemicolon ? ';' : ''}`;
    })
    .filter((line) => line !== null)
    .join('\n');
}

/**
 * Remove top-level Preview/ComingSoon callout block (import + first callout tag).
 * @param {string} content - The file content
 * @returns {{ content: string, removed: boolean }}
 */
function removeTopLevelCallout(content) {
  const parts = content.split('---');
  if (parts.length < 3) return { content, removed: false };

  const beforeMetadata = parts[0];
  const metadata = parts[1];
  const afterMetadata = parts.slice(2).join('---');

  const lines = afterMetadata.split('\n');
  const importRegex = /^\s*import\s+\{[^}]*\}\s+from\s+['"]\/snippets\/components\/primitives\/previewCallouts\.jsx['"];?\s*$/;
  const calloutRegex = /^\s*<\s*(PreviewCallout|ComingSoonCallout)\b[^>]*\/>\s*$/;

  let firstNonImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;
    if (/^\s*import\s+/.test(lines[i])) continue;
    firstNonImportIndex = i;
    break;
  }

  let calloutIndex = -1;
  if (firstNonImportIndex !== -1 && calloutRegex.test(lines[firstNonImportIndex])) {
    calloutIndex = firstNonImportIndex;
  }

  let importIndex = -1;
  if (calloutIndex !== -1) {
    for (let i = 0; i < calloutIndex; i++) {
      if (importRegex.test(lines[i]) && /(PreviewCallout|ComingSoonCallout)/.test(lines[i])) {
        importIndex = i;
        break;
      }
    }
  }

  if (calloutIndex === -1 && importIndex === -1) {
    return { content, removed: false };
  }

  const filteredLines = lines.filter((_, index) => index !== calloutIndex && index !== importIndex);
  let newAfter = filteredLines.join('\n');

  const usage = {
    keepPreview: /<PreviewCallout\b/.test(newAfter),
    keepComing: /<ComingSoonCallout\b/.test(newAfter),
  };

  newAfter = cleanupPreviewCalloutImports(newAfter, usage);

  if (!newAfter.startsWith('\n')) {
    newAfter = `\n${newAfter}`;
  }

  const newContent = `${beforeMetadata}---${metadata}---${newAfter}`;
  return { content: newContent, removed: newContent !== content };
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
 * Remove callout from MDX file if top-level and page has content
 * @param {string} filePath - Path to the MDX file
 * @param {boolean} dryRun - If true, don't write changes
 */
function removeCalloutFromFile(filePath, dryRun = false) {
  const content = fs.readFileSync(filePath, 'utf8');

  if (!hasContent(content)) {
    console.log(`⏭️  Skipping ${filePath} - no content`);
    return;
  }

  const result = removeTopLevelCallout(content);
  if (!result.removed) {
    console.log(`⏭️  Skipping ${filePath} - no top-level callout`);
    return;
  }

  if (dryRun) {
    console.log(`🔍 [DRY RUN] Would remove top-level callout from ${filePath}`);
  } else {
    fs.writeFileSync(filePath, result.content, 'utf8');
    console.log(`✅ Removed top-level callout from ${filePath}`);
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
const removeMode = process.argv.includes('--remove');
const pagesDirs = [
  path.join(__dirname, '../../../v2/pages'),
  path.join(__dirname, '../../../v2/home'),
  path.join(__dirname, '../../../v2/solutions'),
  path.join(__dirname, '../../../v2/about'),
  path.join(__dirname, '../../../v2/community'),
  path.join(__dirname, '../../../v2/developers'),
  path.join(__dirname, '../../../v2/gateways'),
  path.join(__dirname, '../../../v2/orchestrators'),
  path.join(__dirname, '../../../v2/lpt'),
  path.join(__dirname, '../../../v2/resources'),
  path.join(__dirname, '../../../v2/internal'),
  path.join(__dirname, '../../../v2/deprecated'),
  path.join(__dirname, '../../../v2/experimental'),
  path.join(__dirname, '../../../v2/notes'),
].filter((dirPath) => fs.existsSync(dirPath));

if (removeMode) {
  console.log(`🚀 Starting callout removal ${dryRun ? '(DRY RUN)' : ''}...\n`);

  const pagePaths = getV2EnglishNavPages();
  const mdxFiles = pagePaths
    .map((pagePath) => path.join(REPO_ROOT, `${pagePath}.mdx`))
    .filter((filePath) => {
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Skipping ${filePath} - file not found`);
        return false;
      }
      return true;
    });

  console.log(`📄 Found ${mdxFiles.length} MDX files in v2 English navigation\n`);

  for (const file of mdxFiles) {
    removeCalloutFromFile(file, dryRun);
  }

  console.log(`\n✨ Done!`);
  process.exit(0);
}

console.log(`🚀 Starting callout addition ${dryRun ? '(DRY RUN)' : ''}...\n`);

const mdxFiles = pagesDirs.flatMap((dirPath) => findMdxFiles(dirPath));
console.log(`📄 Found ${mdxFiles.length} MDX files\n`);

for (const file of mdxFiles) {
  addCalloutToFile(file, dryRun);
}

console.log(`\n✨ Done!`);
