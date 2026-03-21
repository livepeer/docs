#!/usr/bin/env node
/**
 * @script            test-all-pages-comprehensive
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Manual comprehensive test — runs all page validators including slow/network checks
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/test-all-pages-comprehensive.js [flags]
 */

/**
 * Comprehensive script to test all v2 pages
 * Collects:
 * - MDX compilation errors (from page response)
 * - Browser console errors, warnings, and logs
 * - Broken links (404s, failed requests)
 * - Network request failures
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DOCS_JSON_PATH = path.join(__dirname, '..', '..', 'docs.json');
const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 30000; // 30 seconds per page
const REPORT_DIR = path.join(__dirname, '..', '..', 'tasks', 'reports', 'page-audits');

/**
 * Recursively extract all page paths from navigation structure
 */
function extractPages(nav, pages = []) {
  if (Array.isArray(nav)) {
    nav.forEach(item => extractPages(item, pages));
  } else if (typeof nav === 'object' && nav !== null) {
    if (Array.isArray(nav.pages)) {
      nav.pages.forEach(page => {
        if (typeof page === 'string' && page.trim() && page !== ' ') {
          pages.push(page);
        } else if (typeof page === 'object' && page.pages) {
          extractPages(page.pages, pages);
        }
      });
    }
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
  const v2Version = docsJson.navigation?.versions?.find(v => v.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found in docs.json');
  }
  
  const allPages = extractPages(v2Version);
  const uniquePages = [...new Set(allPages)]
    .filter(page => page && page.trim() && page !== ' ')
    .map(page => page.replace(/\.mdx?$/, ''));
  
  return uniquePages;
}

/**
 * Convert page path to URL
 */
function pageToUrl(pagePath) {
  let url = pagePath
    .replace(/^v2\/pages\//, '')
    .replace(/^v2\//, '')
    .replace(/\.mdx?$/, '');
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  return `${BASE_URL}/${url}`;
}

/**
 * Extract links from page content
 */
async function extractLinks(page) {
  try {
    return await page.evaluate(() => {
      const links = [];
      const anchors = document.querySelectorAll('a[href]');
      anchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('javascript:')) {
          links.push({
            href,
            text: anchor.textContent?.trim() || '',
            isExternal: href.startsWith('http') || href.startsWith('//')
          });
        }
      });
      return links;
    });
  } catch (error) {
    return [];
  }
}

/**
 * Check if a link is broken
 */
async function checkLink(browser, baseUrl, link) {
  if (link.isExternal) {
    // Skip external link checking for now (can be slow)
    return { broken: false, reason: 'external' };
  }
  
  try {
    let fullUrl = link.href;
    if (link.href.startsWith('/')) {
      fullUrl = `${BASE_URL}${link.href}`;
    } else if (!link.href.startsWith('http')) {
      // Relative link - resolve against baseUrl
      const base = new URL(baseUrl);
      fullUrl = new URL(link.href, base).href;
    }
    
    const testPage = await browser.newPage();
    const response = await testPage.goto(fullUrl, { 
      waitUntil: 'domcontentloaded', 
      timeout: 10000 
    });
    await testPage.close();
    
    const status = response.status();
    return {
      broken: status >= 400,
      status,
      reason: status >= 400 ? `HTTP ${status}` : 'ok'
    };
  } catch (error) {
    return {
      broken: true,
      reason: error.message
    };
  }
}

/**
 * Test a single page comprehensively
 */
async function testPage(browser, pagePath) {
  const url = pageToUrl(pagePath);
  const page = await browser.newPage();
  
  const errors = [];
  const warnings = [];
  const logs = [];
  const networkFailures = [];
  const brokenLinks = [];
  
  // Listen for console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    
    if (type === 'error') {
      errors.push(text);
    } else if (type === 'warning') {
      warnings.push(text);
    }
    
    logs.push({ type, text, timestamp: new Date().toISOString() });
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}\nStack: ${error.stack}`);
  });
  
  // Listen for request failures
  const failedRequests = new Map();
  page.on('requestfailed', request => {
    const failure = request.failure();
    const url = request.url();
    if (failure && !url.includes('favicon') && !url.includes('analytics')) {
      networkFailures.push({
        url,
        error: failure.errorText,
        method: request.method()
      });
      failedRequests.set(url, failure.errorText);
    }
  });
  
  // Track responses to detect 404s
  page.on('response', response => {
    const status = response.status();
    const url = response.url();
    if (status >= 400 && !url.includes('favicon') && !url.includes('analytics')) {
      networkFailures.push({
        url,
        status,
        error: `HTTP ${status}`
      });
    }
  });
  
  let pageLoadSuccess = false;
  let mdxError = null;
  let pageContent = null;
  
  try {
    const response = await page.goto(url, { 
      waitUntil: 'networkidle2', 
      timeout: TIMEOUT 
    });
    
    pageLoadSuccess = response.status() < 400;
    
    // Check for MDX errors in page content
    pageContent = await page.content();
    
    // Look for error messages in the page
    const errorText = await page.evaluate(() => {
      // Check for common error indicators
      const errorElements = document.querySelectorAll('[class*="error"], [class*="Error"]');
      const errorTexts = Array.from(errorElements).map(el => el.textContent?.trim()).filter(Boolean);
      return errorTexts.join('\n');
    });
    
    if (errorText) {
      mdxError = errorText;
      errors.push(`MDX Error detected: ${errorText}`);
    }
    
    // Wait for any async rendering
    await page.waitForTimeout(2000);
    
    // Extract and check links
    const links = await extractLinks(page);
    const internalLinks = links.filter(l => !l.isExternal);
    
    // Check first 10 internal links (to avoid timeout)
    const linksToCheck = internalLinks.slice(0, 10);
    for (const link of linksToCheck) {
      const checkResult = await checkLink(browser, url, link);
      if (checkResult.broken) {
        brokenLinks.push({
          href: link.href,
          text: link.text,
          reason: checkResult.reason
        });
      }
    }
    
  } catch (error) {
    errors.push(`Navigation Error: ${error.message}`);
    if (error.message.includes('net::ERR')) {
      networkFailures.push({
        url,
        error: error.message
      });
    }
  } finally {
    await page.close();
  }
  
  // Success means page loaded successfully, even if there are warnings or some broken links
  // We'll report broken links separately
  const success = pageLoadSuccess && errors.filter(e => !e.includes('favicon') && !e.includes('analytics')).length === 0;
  
  return {
    pagePath,
    url,
    success,
    pageLoadSuccess,
    mdxError,
    errors,
    warnings,
    logs,
    networkFailures,
    brokenLinks,
    hasConsoleErrors: errors.length > 0,
    hasWarnings: warnings.length > 0,
    hasBrokenLinks: brokenLinks.length > 0
  };
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Extracting v2 pages from docs.json...');
  const pages = getV2Pages();
  console.log(`📄 Found ${pages.length} pages to test\n`);
  
  console.log(`🌐 Testing against: ${BASE_URL}`);
  console.log(`⏱️  Timeout per page: ${TIMEOUT}ms\n`);
  
  // Ensure report directory exists
  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }
  
  // Check if server is running
  try {
    const testBrowser = await puppeteer.launch({ headless: true });
    const testPage = await testBrowser.newPage();
    await testPage.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 5000 });
    await testPage.close();
    await testBrowser.close();
    console.log('✅ Server is accessible\n');
  } catch (error) {
    console.error(`❌ Cannot connect to ${BASE_URL}`);
    console.error('   Make sure mint dev is running!');
    console.error(`   Start it with: mint dev`);
    process.exit(1);
  }
  
  console.log('🚀 Starting comprehensive browser tests...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  let passed = 0;
  let failed = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalBrokenLinks = 0;
  
  for (let i = 0; i < pages.length; i++) {
    const pagePath = pages[i];
    const progress = `[${i + 1}/${pages.length}]`;
    
    process.stdout.write(`${progress} Testing ${pagePath}... `);
    
    const result = await testPage(browser, pagePath);
    results.push(result);
    
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
    totalBrokenLinks += result.brokenLinks.length;
    
    if (result.success) {
      console.log('✅');
      passed++;
    } else {
      console.log('❌');
      failed++;
    }
  }
  
  await browser.close();
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalPages: pages.length,
      passed,
      failed,
      totalErrors,
      totalWarnings,
      totalBrokenLinks
    },
    results: results.map(r => ({
      pagePath: r.pagePath,
      url: r.url,
      success: r.success,
      pageLoadSuccess: r.pageLoadSuccess,
      mdxError: r.mdxError,
      errorCount: r.errors.length,
      warningCount: r.warnings.length,
      brokenLinkCount: r.brokenLinks.length,
      errors: r.errors,
      warnings: r.warnings,
      networkFailures: r.networkFailures,
      brokenLinks: r.brokenLinks
    }))
  };
  
  // Save JSON report
  const jsonReportPath = path.join(REPORT_DIR, 'browser-test-report.json');
  fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2));
  
  // Generate markdown report
  const mdReport = generateMarkdownReport(report);
  const mdReportPath = path.join(REPORT_DIR, 'browser-test-report.md');
  fs.writeFileSync(mdReportPath, mdReport);
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total pages tested: ${pages.length}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`🔴 Total Errors: ${totalErrors}`);
  console.log(`⚠️  Total Warnings: ${totalWarnings}`);
  console.log(`🔗 Broken Links: ${totalBrokenLinks}`);
  console.log('');
  console.log(`📝 Reports saved to:`);
  console.log(`   - ${jsonReportPath}`);
  console.log(`   - ${mdReportPath}`);
  
  // Print failed pages summary
  if (failed > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('❌ FAILED PAGES SUMMARY');
    console.log('='.repeat(60));
    results
      .filter(r => !r.success)
      .forEach(result => {
        console.log(`\n📄 ${result.pagePath}`);
        console.log(`   URL: ${result.url}`);
        if (result.mdxError) {
          console.log(`   MDX Error: ${result.mdxError.substring(0, 100)}...`);
        }
        if (result.errors.length > 0) {
          console.log(`   Errors (${result.errors.length}):`);
          result.errors.slice(0, 3).forEach(error => {
            console.log(`     - ${error.substring(0, 150)}`);
          });
        }
        if (result.brokenLinks.length > 0) {
          console.log(`   Broken Links (${result.brokenLinks.length}):`);
          result.brokenLinks.slice(0, 3).forEach(link => {
            console.log(`     - ${link.href} (${link.reason})`);
          });
        }
      });
  }
  
  // Exit with error code if any failures
  process.exit(failed > 0 ? 1 : 0);
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(report) {
  const { summary, results } = report;
  
  let md = `# Browser Test Report - All V2 Pages\n\n`;
  md += `**Generated:** ${new Date(report.timestamp).toLocaleString()}\n`;
  md += `**Base URL:** ${report.baseUrl}\n\n`;
  
  md += `## Summary\n\n`;
  md += `- **Total Pages:** ${summary.totalPages}\n`;
  md += `- **✅ Passed:** ${summary.passed}\n`;
  md += `- **❌ Failed:** ${summary.failed}\n`;
  md += `- **🔴 Total Errors:** ${summary.totalErrors}\n`;
  md += `- **⚠️ Total Warnings:** ${summary.totalWarnings}\n`;
  md += `- **🔗 Broken Links:** ${summary.totalBrokenLinks}\n\n`;
  
  // Failed pages
  const failedPages = results.filter(r => !r.success);
  if (failedPages.length > 0) {
    md += `## Failed Pages (${failedPages.length})\n\n`;
    failedPages.forEach(page => {
      md += `### ${page.pagePath}\n\n`;
      md += `- **URL:** ${page.url}\n`;
      md += `- **Page Load:** ${page.pageLoadSuccess ? '✅' : '❌'}\n`;
      
      if (page.mdxError) {
        md += `\n**MDX Error:**\n\`\`\`\n${page.mdxError}\n\`\`\`\n`;
      }
      
      if (page.errors.length > 0) {
        md += `\n**Console Errors (${page.errors.length}):**\n`;
        page.errors.forEach(error => {
          md += `- ${error}\n`;
        });
      }
      
      if (page.warnings.length > 0) {
        md += `\n**Warnings (${page.warnings.length}):**\n`;
        page.warnings.forEach(warning => {
          md += `- ${warning}\n`;
        });
      }
      
      if (page.networkFailures.length > 0) {
        md += `\n**Network Failures (${page.networkFailures.length}):**\n`;
        page.networkFailures.forEach(failure => {
          md += `- ${failure.url}: ${failure.error}\n`;
        });
      }
      
      if (page.brokenLinks.length > 0) {
        md += `\n**Broken Links (${page.brokenLinks.length}):**\n`;
        page.brokenLinks.forEach(link => {
          md += `- \`${link.href}\` - ${link.reason}${link.text ? ` (text: "${link.text}")` : ''}\n`;
        });
      }
      
      md += `\n---\n\n`;
    });
  }
  
  // Pages with warnings only
  const warningPages = results.filter(r => r.success && r.warningCount > 0);
  if (warningPages.length > 0) {
    md += `## Pages with Warnings (${warningPages.length})\n\n`;
    warningPages.forEach(page => {
      md += `### ${page.pagePath}\n\n`;
      md += `- **URL:** ${page.url}\n`;
      md += `**Warnings (${page.warningCount}):**\n`;
      page.warnings.forEach(warning => {
        md += `- ${warning}\n`;
      });
      md += `\n---\n\n`;
    });
  }
  
  return md;
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { getV2Pages, testPage };
