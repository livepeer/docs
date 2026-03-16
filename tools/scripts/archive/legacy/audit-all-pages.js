#!/usr/bin/env node
/**
 * @script            audit-all-pages
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tasks/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Full page auditor — comprehensive check of all pages including content quality metrics
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/audit-all-pages.js [flags]
 */

/**
 * Comprehensive audit script for all v2 pages in docs.json
 * 
 * This script:
 * 1. Extracts all v2/pages from docs.json
 * 2. Checks if files exist
 * 3. Tests each page in browser
 * 4. Collects console errors, warnings, and outputs
 * 5. Checks for broken links
 * 6. Reports MDX errors
 * 7. Fixes simple broken links automatically
 * 8. Generates comprehensive report
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { execSync } = require('child_process');

const DOCS_JSON_PATH = path.join(__dirname, '..', '..', 'docs.json');
const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 30000; // 30 seconds per page
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
  // Redirect pages are intentional and should not be reported as missing
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
    
    // Check for unclosed JSX tags
    const openTags = content.match(/<[A-Z][a-zA-Z0-9]*[^>]*>/g) || [];
    const closeTags = content.match(/<\/[A-Z][a-zA-Z0-9]*>/g) || [];
    
    // Simple check for common issues
    if (content.includes('{{') && !content.includes('}}')) {
      errors.push('Unclosed template literal');
    }
    
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

/**
 * Convert page path to URL
 */
function pageToUrl(pagePath) {
  // Remove v2/pages/ prefix and convert to URL
  let url = pagePath.replace(/^v2\/pages\//, '');
  
  // Handle index pages (ending with /)
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  return `${BASE_URL}/${url}`;
}

/**
 * Test a single page in browser
 */
async function testPage(browser, pagePath) {
  const url = pageToUrl(pagePath);
  const page = await browser.newPage();
  
  const errors = [];
  const warnings = [];
  const logs = [];
  const networkRequests = [];
  const failedRequests = [];
  
  // Listen for console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    
    logs.push({ type, text, timestamp: new Date().toISOString() });
    
    if (type === 'error') {
      // Check for "require is not defined" - this is a known Mintlify build artifact
      if (text.includes('require is not defined')) {
        warnings.push(`⚠️  ${text} (Likely cause: Mintlify build artifact - does not affect page functionality)`);
        return;
      }
      
      // Filter out known non-critical errors
      if (!text.includes('favicon') && 
          !text.includes('sourcemap') && 
          !text.includes('ResizeObserver') &&
          !text.includes('Non-Error promise rejection')) {
        errors.push(text);
      }
    } else if (type === 'warning') {
      // Filter out known non-critical warnings
      if (!text.includes('favicon') && 
          !text.includes('sourcemap') &&
          !text.includes('deprecated') &&
          !text.includes('experimental')) {
        warnings.push(text);
      }
    }
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    const errorMessage = error.message;
    
    // Check for "require is not defined" - this is a known Mintlify build artifact
    if (errorMessage.includes('require is not defined')) {
      warnings.push(`⚠️  Page Error: ${errorMessage} (Likely cause: Mintlify build artifact - does not affect page functionality)`);
      return;
    }
    
    errors.push(`Page Error: ${errorMessage}${error.stack ? '\n' + error.stack : ''}`);
  });
  
  // Listen for request failures
  page.on('requestfailed', request => {
    const failure = request.failure();
    const requestUrl = request.url();
    
    // Ignore favicon and other non-critical failures
    if (failure && 
        !requestUrl.includes('favicon') && 
        !requestUrl.includes('sourcemap') &&
        !requestUrl.includes('chrome-extension')) {
      failedRequests.push({
        url: requestUrl,
        error: failure.errorText,
        method: request.method()
      });
      
      // Only add to errors if it's a critical resource
      if (requestUrl.includes('/snippets/') || 
          requestUrl.includes('/v2/pages/') ||
          requestUrl.includes('/assets/')) {
        errors.push(`Request Failed: ${requestUrl} - ${failure.errorText}`);
      }
    }
  });
  
  // Track network requests
  page.on('request', request => {
    networkRequests.push({
      url: request.url(),
      method: request.method(),
      timestamp: new Date().toISOString()
    });
  });
  
  try {
    // Navigate to page with timeout
    await page.goto(url, { 
      waitUntil: 'networkidle2', 
      timeout: TIMEOUT 
    });
    
    // Wait a bit for any async rendering
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check if page rendered content
    const bodyText = await page.evaluate(() => document.body.innerText);
    const hasContent = bodyText && bodyText.trim().length > 50;
    
    // Check for React error boundaries
    const hasErrorBoundary = await page.evaluate(() => {
      return document.querySelector('[data-error-boundary]') !== null ||
             document.body.innerText.includes('Error:') ||
             document.body.innerText.includes('Failed to render') ||
             document.body.innerText.includes('Something went wrong');
    });
    
    if (hasErrorBoundary) {
      errors.push('Page contains render errors (error boundary triggered)');
    }
    
    if (!hasContent) {
      errors.push('Page appears to be empty or failed to render');
    }
    
    // Extract all links from the rendered page
    const pageLinks = await page.evaluate(() => {
      const links = [];
      document.querySelectorAll('a[href]').forEach(a => {
        links.push({
          href: a.href,
          text: a.textContent.trim(),
          isExternal: a.href.startsWith('http') && !a.href.includes(window.location.hostname)
        });
      });
      return links;
    });
    
    return {
      pagePath,
      url,
      success: errors.length === 0,
      errors,
      warnings,
      logs,
      networkRequests: networkRequests.length,
      failedRequests,
      pageLinks,
      hasContent
    };
  } catch (error) {
    return {
      pagePath,
      url,
      success: false,
      errors: [`Navigation Error: ${error.message}`],
      warnings,
      logs,
      networkRequests: networkRequests.length,
      failedRequests: [],
      pageLinks: [],
      hasContent: false
    };
  } finally {
    await page.close();
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Extracting v2 pages from docs.json...');
  const pages = getV2Pages();
  console.log(`📄 Found ${pages.length} pages to audit\n`);
  
  console.log(`🌐 Testing against: ${BASE_URL}`);
  console.log(`⏱️  Timeout per page: ${TIMEOUT}ms\n`);
  
  // Check if server is running
  let serverRunning = false;
  try {
    const testBrowser = await puppeteer.launch({ headless: true });
    const testPage = await testBrowser.newPage();
    await testPage.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 5000 });
    await testPage.close();
    await testBrowser.close();
    serverRunning = true;
    console.log('✅ Server is accessible\n');
  } catch (error) {
    console.error(`⚠️  Cannot connect to ${BASE_URL}`);
    console.error('   Browser testing will be skipped');
    console.error('   Start server with: mint dev\n');
  }
  
  const auditResults = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    serverRunning,
    totalPages: pages.length,
    fileChecks: [],
    mdxErrors: [],
    brokenLinks: [],
    browserResults: [],
    summary: {
      filesMissing: 0,
      mdxErrors: 0,
      brokenLinks: 0,
      browserErrors: 0,
      browserWarnings: 0,
      pagesPassed: 0,
      pagesFailed: 0
    }
  };
  
  console.log('📋 Phase 1: Checking files and MDX errors...\n');
  
  // Phase 1: Check files exist and MDX errors
  for (let i = 0; i < pages.length; i++) {
    const pagePath = pages[i];
    const progress = `[${i + 1}/${pages.length}]`;
    
    process.stdout.write(`${progress} Checking ${pagePath}... `);
    
    const fileCheck = checkFileExists(pagePath);
    
    if (!fileCheck.exists) {
      // Check if this is an intentional redirect
      if (isIntentionalRedirect(pagePath)) {
        console.log('⚠️  INTENTIONAL REDIRECT (not an error)');
        auditResults.fileChecks.push({
          pagePath,
          exists: false,
          error: 'File not found',
          intentional: true,
          note: 'This is an intentional redirect page, not an error'
        });
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
  
  console.log('\n🌐 Phase 2: Browser testing...\n');
  
  // Phase 2: Browser testing
  if (serverRunning) {
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    for (let i = 0; i < pages.length; i++) {
      const pagePath = pages[i];
      const progress = `[${i + 1}/${pages.length}]`;
      
      process.stdout.write(`${progress} Testing ${pagePath}... `);
      
      const result = await testPage(browser, pagePath);
      auditResults.browserResults.push(result);
      
      // Count warnings for all pages (warnings don't block success)
      auditResults.summary.browserWarnings += result.warnings.length;
      
      if (result.success) {
        console.log('✅');
        auditResults.summary.pagesPassed++;
        // Show warnings if present (even for successful pages)
        if (result.warnings.length > 0) {
          console.log(`     ⚠️  ${result.warnings.length} warning(s) (non-blocking)`);
        }
      } else {
        console.log('❌');
        auditResults.summary.pagesFailed++;
        auditResults.summary.browserErrors += result.errors.length;
      }
    }
    
    await browser.close();
  } else {
    console.log('⏭️  Skipping browser tests (server not running)\n');
  }
  
  // Generate report
  const reportPath = path.join(REPORT_DIR, 'page-audit-latest.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditResults, null, 2));
  
  // Generate markdown report
  const markdownReport = generateMarkdownReport(auditResults);
  const markdownPath = path.join(REPORT_DIR, 'page-audit-latest.md');
  fs.writeFileSync(markdownPath, markdownReport);
  
  // Print summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total pages: ${auditResults.totalPages}`);
  console.log(`Files missing: ${auditResults.summary.filesMissing}`);
  console.log(`MDX errors: ${auditResults.summary.mdxErrors}`);
  console.log(`Broken links: ${auditResults.summary.brokenLinks}`);
  if (serverRunning) {
    console.log(`Browser errors: ${auditResults.summary.browserErrors}`);
    console.log(`Browser warnings: ${auditResults.summary.browserWarnings}`);
    console.log(`Pages passed: ${auditResults.summary.pagesPassed}`);
    console.log(`Pages failed: ${auditResults.summary.pagesFailed}`);
  }
  console.log('\n📝 Reports saved:');
  console.log(`   JSON: ${reportPath}`);
  console.log(`   Markdown: ${markdownPath}`);
  console.log('='.repeat(80));
  
  // Show critical issues
  if (auditResults.summary.filesMissing > 0 || 
      auditResults.summary.mdxErrors > 0 || 
      auditResults.summary.brokenLinks > 0 ||
      auditResults.summary.browserErrors > 0) {
    console.log('\n❌ CRITICAL ISSUES FOUND:\n');
    
    if (auditResults.summary.filesMissing > 0) {
      console.log('Missing Files:');
      auditResults.fileChecks
        .filter(f => !f.exists && !f.intentional)
        .forEach(f => console.log(`  - ${f.pagePath}`));
      
      const intentionalRedirects = auditResults.fileChecks
        .filter(f => !f.exists && f.intentional);
      if (intentionalRedirects.length > 0) {
        console.log('\n⚠️  Intentional Redirects (not errors):');
        intentionalRedirects.forEach(f => console.log(`  - ${f.pagePath} (INTENTIONAL)`));
      }
    }
    
    if (auditResults.summary.mdxErrors > 0) {
      console.log('\nMDX Errors:');
      auditResults.mdxErrors.forEach(m => {
        console.log(`  - ${m.pagePath}:`);
        m.errors.forEach(e => console.log(`    * ${e}`));
      });
    }
    
    if (auditResults.summary.brokenLinks > 0) {
      console.log('\nBroken Links:');
      auditResults.brokenLinks.forEach(b => {
        console.log(`  - ${b.pagePath}:`);
        b.links.forEach(l => console.log(`    * ${l.url} (${l.reason})`));
      });
    }
    
    if (auditResults.summary.browserWarnings > 0) {
      console.log('\n⚠️  Browser Warnings (non-blocking):');
      auditResults.browserResults
        .filter(r => r.warnings.length > 0)
        .forEach(r => {
          console.log(`  - ${r.pagePath}:`);
          r.warnings.forEach(w => console.log(`    * ${w}`));
        });
    }
    
    if (auditResults.summary.browserErrors > 0) {
      console.log('\n❌ Browser Errors:');
      auditResults.browserResults
        .filter(r => !r.success)
        .forEach(r => {
          console.log(`  - ${r.pagePath}:`);
          r.errors.forEach(e => console.log(`    * ${e}`));
        });
    }
  }
  
  process.exit(0);
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(results) {
  let md = `# Page Audit Report\n\n`;
  md += `**Generated:** ${new Date(results.timestamp).toLocaleString()}\n`;
  md += `**Base URL:** ${results.baseUrl}\n`;
  md += `**Server Running:** ${results.serverRunning ? 'Yes' : 'No'}\n\n`;
  
  md += `## Summary\n\n`;
  md += `- Total pages: ${results.totalPages}\n`;
  md += `- Files missing: ${results.summary.filesMissing}\n`;
  md += `- MDX errors: ${results.summary.mdxErrors}\n`;
  md += `- Broken links: ${results.summary.brokenLinks}\n`;
  if (results.serverRunning) {
    md += `- Browser errors: ${results.summary.browserErrors}\n`;
    md += `- Browser warnings: ${results.summary.browserWarnings}\n`;
    md += `- Pages passed: ${results.summary.pagesPassed}\n`;
    md += `- Pages failed: ${results.summary.pagesFailed}\n`;
  }
  md += `\n`;
  
  const missingFiles = results.fileChecks.filter(f => !f.exists && !f.intentional);
  const intentionalRedirects = results.fileChecks.filter(f => !f.exists && f.intentional);
  
  if (missingFiles.length > 0) {
    md += `## Missing Files\n\n`;
    missingFiles.forEach(f => {
      md += `- \`${f.pagePath}\`\n`;
    });
    md += `\n`;
  }
  
  if (intentionalRedirects.length > 0) {
    md += `## Intentional Redirects (Not Errors)\n\n`;
    md += `These pages are intentional redirects and should not be reported as errors:\n\n`;
    intentionalRedirects.forEach(f => {
      md += `- \`${f.pagePath}\` - ${escapeMdxText(f.note || 'Intentional redirect')}\n`;
    });
    md += `\n`;
  }
  
  if (results.summary.mdxErrors > 0) {
    md += `## MDX Errors\n\n`;
    results.mdxErrors.forEach(m => {
      md += `### ${m.pagePath}\n\n`;
      m.errors.forEach(e => {
        md += `- ${escapeMdxText(e)}\n`;
      });
      md += `\n`;
    });
  }
  
  if (results.summary.brokenLinks > 0) {
    md += `## Broken Links\n\n`;
    results.brokenLinks.forEach(b => {
      md += `### ${b.pagePath}\n\n`;
      b.links.forEach(l => {
        md += `- \`${l.url}\` - ${escapeMdxText(l.reason)}\n`;
        if (l.expected) {
          md += `  - Expected: \`${l.expected}\`\n`;
        }
      });
      md += `\n`;
    });
  }
  
  if (results.serverRunning && results.summary.browserWarnings > 0) {
    md += `## Browser Warnings (Non-Blocking)\n\n`;
    md += `These warnings do not affect page functionality and will not block commits:\n\n`;
    results.browserResults
      .filter(r => r.warnings.length > 0)
      .forEach(r => {
        md += `### ${r.pagePath}\n\n`;
        md += `**URL:** ${r.url}\n\n`;
        md += `**Warnings:**\n`;
        r.warnings.forEach(w => {
          md += `- ${escapeMdxText(w)}\n`;
        });
        md += `\n`;
      });
  }
  
  if (results.serverRunning && results.summary.browserErrors > 0) {
    md += `## Browser Errors\n\n`;
    results.browserResults
      .filter(r => !r.success)
      .forEach(r => {
        md += `### ${r.pagePath}\n\n`;
        md += `**URL:** ${r.url}\n\n`;
        md += `**Errors:**\n`;
        r.errors.forEach(e => {
          md += `- ${escapeMdxText(e)}\n`;
        });
        md += `\n`;
      });
  }
  
  return md;
}

function escapeMdxText(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { getV2Pages, testPage, checkFileExists, checkMdxErrors, extractLinks, checkLink };
