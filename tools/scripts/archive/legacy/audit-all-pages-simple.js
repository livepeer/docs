#!/usr/bin/env node
/**
 * @script            audit-all-pages-simple
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tasks/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Lightweight page auditor — quick pass over all pages checking basic frontmatter and structure
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/audit-all-pages-simple.js [flags]
 */

/**
 * Simplified audit script - file checks only (no browser)
 * This will run faster and help identify issues
 */

const fs = require('fs');
const path = require('path');

const DOCS_JSON_PATH = path.join(__dirname, '..', '..', 'docs.json');
const REPORT_DIR = path.join(__dirname, '..', '..', 'tasks', 'reports', 'page-audits');

// Ensure report directory exists
if (!fs.existsSync(REPORT_DIR)) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

/**
 * Recursively extract all page paths from navigation structure
 */
function extractPages(nav, pages = []) {
  if (Array.isArray(nav)) {
    nav.forEach(item => extractPages(item, pages));
  } else if (typeof nav === 'object' && nav !== null) {
    // Check for pages array
    if (Array.isArray(nav.pages)) {
      nav.pages.forEach(page => {
        if (typeof page === 'string' && page.trim() && page !== ' ') {
          pages.push(page);
        } else if (typeof page === 'object' && page.pages) {
          extractPages(page.pages, pages);
        }
      });
    }
    
    // Recursively check all properties
    Object.values(nav).forEach(value => {
      if (typeof value === 'object' && value !== null) {
        extractPages(value, pages);
      }
    });
  }
  return pages;
}

/**
 * Get all v2 pages from docs.json
 */
function getV2Pages() {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  
  // Find v2 version
  const v2Version = docsJson.navigation?.versions?.find(v => v.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found in docs.json');
  }
  
  // Extract all pages
  const allPages = extractPages(v2Version);
  
  // Remove duplicates and filter out invalid pages
  const uniquePages = [...new Set(allPages)]
    .filter(page => page && page.trim() && page !== ' ')
    .map(page => page.replace(/\.mdx?$/, '')); // Remove .mdx extension if present
  
  return uniquePages;
}

/**
 * Check if a page path is an intentional redirect (not an error)
 */
function isIntentionalRedirect(pagePath) {
  return pagePath.includes('/redirect') || 
         pagePath.endsWith('/redirect');
}

/**
 * Check if file exists and return full path
 */
function checkFileExists(pagePath) {
  // Try with .mdx extension
  let filePath = path.join(__dirname, '..', '..', '..', `${pagePath}.mdx`);
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }
  
  // Try without extension (directory with index)
  filePath = path.join(__dirname, '..', '..', '..', pagePath, 'index.mdx');
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }
  
  // Try README.mdx
  filePath = path.join(__dirname, '..', '..', '..', pagePath, 'README.mdx');
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }
  
  return { exists: false, path: null };
}

/**
 * Check for MDX syntax errors
 */
function checkMdxErrors(filePath) {
  const errors = [];
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for broken imports
    const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g);
    for (const match of importMatches) {
      const importPath = match[2];
      if (importPath.startsWith('/snippets/')) {
        const fullPath = path.join(__dirname, '..', '..', '..', importPath);
        // Check if it's a component file
        if (importPath.includes('/components/')) {
          // Import path may already include .jsx extension, so check both
          let componentFile = fullPath;
          if (!componentFile.endsWith('.jsx') && !componentFile.endsWith('.js')) {
            componentFile = fullPath + '.jsx';
          }
          if (!fs.existsSync(componentFile)) {
            errors.push(`Missing import: ${importPath}`);
          }
        }
      }
    }
    
  } catch (error) {
    errors.push(`File read error: ${error.message}`);
  }
  
  return errors;
}

/**
 * Extract links from MDX file
 */
function extractLinks(filePath) {
  const links = [];
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Markdown links: [text](url)
    const markdownLinks = content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g);
    for (const match of markdownLinks) {
      links.push({
        text: match[1],
        url: match[2],
        type: 'markdown'
      });
    }
    
    // JSX links: <Link href="...">
    const jsxLinks = content.matchAll(/<Link[^>]+href=['"]([^'"]+)['"]/g);
    for (const match of jsxLinks) {
      links.push({
        text: '',
        url: match[1],
        type: 'jsx'
      });
    }
    
    // Anchor tags: <a href="...">
    const anchorLinks = content.matchAll(/<a[^>]+href=['"]([^'"]+)['"]/g);
    for (const match of anchorLinks) {
      links.push({
        text: '',
        url: match[1],
        type: 'anchor'
      });
    }
    
  } catch (error) {
    // File read error
  }
  
  return links;
}

/**
 * Check if link is broken
 */
function checkLink(link, currentPagePath) {
  const url = link.url;
  
  // Skip external links
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('#')) {
    return { broken: false, reason: 'external_or_anchor' };
  }
  
  // Handle relative links
  if (url.startsWith('/')) {
    // Absolute path from root
    const targetPath = url.replace(/^\//, '').replace(/\/$/, '');
    const fileCheck = checkFileExists(`v2/pages/${targetPath}`);
    if (!fileCheck.exists) {
      return { broken: true, reason: 'file_not_found', expected: `v2/pages/${targetPath}` };
    }
  } else {
    // Relative path
    const currentDir = path.dirname(currentPagePath);
    const targetPath = path.resolve(currentDir, url).replace(/\.mdx?$/, '');
    const relativePath = path.relative(path.join(__dirname, '..', '..', '..'), targetPath);
    const fileCheck = checkFileExists(relativePath);
    if (!fileCheck.exists) {
      return { broken: true, reason: 'file_not_found', expected: relativePath };
    }
  }
  
  return { broken: false, reason: 'valid' };
}

// Main execution
// Write progress to file for debugging
const progressFile = path.join(REPORT_DIR, 'audit-progress.log');
let pages;

try {
  fs.writeFileSync(progressFile, `Audit started at: ${new Date().toISOString()}\n`);

  console.log('🔍 Extracting v2 pages from docs.json...');
  fs.appendFileSync(progressFile, 'Extracting v2 pages from docs.json...\n');
  pages = getV2Pages();
  fs.appendFileSync(progressFile, `Found ${pages.length} pages to audit\n`);
  console.log(`📄 Found ${pages.length} pages to audit\n`);
} catch (error) {
  console.error('FATAL ERROR:', error);
  fs.appendFileSync(progressFile, `FATAL ERROR: ${error.message}\n${error.stack}\n`);
  process.exit(1);
}

if (!pages || pages.length === 0) {
  console.error('ERROR: No pages extracted');
  fs.appendFileSync(progressFile, 'ERROR: No pages extracted\n');
  process.exit(1);
}

const auditResults = {
  timestamp: new Date().toISOString(),
  totalPages: pages.length,
  fileChecks: [],
  mdxErrors: [],
  brokenLinks: [],
  summary: {
    filesMissing: 0,
    intentionalRedirects: 0,
    mdxErrors: 0,
    brokenLinks: 0
  }
};

console.log('📋 Checking files and MDX errors...\n');
fs.appendFileSync(progressFile, 'Starting file checks...\n');

// Phase 1: Check files exist and MDX errors
for (let i = 0; i < pages.length; i++) {
  const pagePath = pages[i];
  const progress = `[${i + 1}/${pages.length}]`;
  
  process.stdout.write(`${progress} Checking ${pagePath}... `);
  
  const fileCheck = checkFileExists(pagePath);
  
  if (!fileCheck.exists) {
    // Check if this is an intentional redirect
    if (isIntentionalRedirect(pagePath)) {
      console.log('⚠️  INTENTIONAL REDIRECT');
      auditResults.fileChecks.push({
        pagePath,
        exists: false,
        error: 'File not found',
        intentional: true,
        note: 'This is an intentional redirect page, not an error'
      });
      auditResults.summary.intentionalRedirects++;
    } else {
      console.log('❌ FILE MISSING');
      auditResults.fileChecks.push({
        pagePath,
        exists: false,
        error: 'File not found'
      });
      auditResults.summary.filesMissing++;
    }
  } else {
    console.log('✅');
    const mdxErrors = checkMdxErrors(fileCheck.path);
    const links = extractLinks(fileCheck.path);
    const brokenLinks = [];
    
    // Check each link
    links.forEach(link => {
      const linkCheck = checkLink(link, fileCheck.path);
      if (linkCheck.broken) {
        brokenLinks.push({
          ...link,
          ...linkCheck
        });
      }
    });
    
    auditResults.fileChecks.push({
      pagePath,
      exists: true,
      filePath: fileCheck.path,
      mdxErrors,
      links: links.length,
      brokenLinks: brokenLinks.length
    });
    
    if (mdxErrors.length > 0) {
      auditResults.mdxErrors.push({
        pagePath,
        filePath: fileCheck.path,
        errors: mdxErrors
      });
      auditResults.summary.mdxErrors += mdxErrors.length;
    }
    
    if (brokenLinks.length > 0) {
      auditResults.brokenLinks.push({
        pagePath,
        filePath: fileCheck.path,
        links: brokenLinks
      });
      auditResults.summary.brokenLinks += brokenLinks.length;
    }
  }
}

// Generate report
const reportPath = path.join(REPORT_DIR, 'page-audit-simple-latest.json');
fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2));

// Generate markdown report
let md = `# Page Audit Report (File Checks Only)\n\n`;
md += `**Generated:** ${new Date(auditResults.timestamp).toLocaleString()}\n`;
md += `**Type:** File existence and link checks (no browser testing)\n\n`;

md += `## Summary\n\n`;
md += `- Total pages: ${auditResults.totalPages}\n`;
md += `- Files missing: ${auditResults.summary.filesMissing}\n`;
md += `- Intentional redirects: ${auditResults.summary.intentionalRedirects}\n`;
md += `- MDX errors: ${auditResults.summary.mdxErrors}\n`;
md += `- Broken links: ${auditResults.summary.brokenLinks}\n`;
md += `\n`;

const missingFiles = auditResults.fileChecks.filter(f => !f.exists && !f.intentional);
const intentionalRedirects = auditResults.fileChecks.filter(f => !f.exists && f.intentional);

if (missingFiles.length > 0) {
  md += `## Missing Files\n\n`;
  missingFiles.forEach(f => {
    md += `- \`${f.pagePath}\`\n`;
  });
  md += `\n`;
}

if (intentionalRedirects.length > 0) {
  md += `## Intentional Redirects (Not Errors)\n\n`;
  intentionalRedirects.forEach(f => {
    md += `- \`${f.pagePath}\` - ${f.note || 'Intentional redirect'}\n`;
  });
  md += `\n`;
}

if (auditResults.summary.mdxErrors > 0) {
  md += `## MDX Errors\n\n`;
  auditResults.mdxErrors.forEach(m => {
    md += `### ${m.pagePath}\n\n`;
    m.errors.forEach(e => {
      md += `- ${e}\n`;
    });
    md += `\n`;
  });
}

if (auditResults.summary.brokenLinks > 0) {
  md += `## Broken Links\n\n`;
  auditResults.brokenLinks.forEach(b => {
    md += `### ${b.pagePath}\n\n`;
    b.links.forEach(l => {
      md += `- \`${l.url}\` - ${l.reason}\n`;
      if (l.expected) {
        md += `  - Expected: \`${l.expected}\`\n`;
      }
    });
    md += `\n`;
  });
}

const markdownPath = path.join(REPORT_DIR, 'page-audit-simple-latest.md');
fs.writeFileSync(markdownPath, md);

// Print summary
const summary = `
${'='.repeat(80)}
📊 AUDIT SUMMARY
${'='.repeat(80)}
Total pages: ${auditResults.totalPages}
Files missing: ${auditResults.summary.filesMissing}
Intentional redirects: ${auditResults.summary.intentionalRedirects}
MDX errors: ${auditResults.summary.mdxErrors}
Broken links: ${auditResults.summary.brokenLinks}

📝 Reports saved:
   JSON: ${reportPath}
   Markdown: ${markdownPath}
${'='.repeat(80)}
`;

console.log(summary);
fs.appendFileSync(progressFile, summary);
fs.appendFileSync(progressFile, `\nAudit completed at: ${new Date().toISOString()}\n`);

process.exit(0);
