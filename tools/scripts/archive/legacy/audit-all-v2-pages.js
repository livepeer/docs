#!/usr/bin/env node
/**
 * @script            audit-all-v2-pages
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement V2-specific page auditor — checks v2/** pages for v2-specific requirements (frontmatter, components)
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/audit-all-v2-pages.js [flags]
 */
/**
 * Comprehensive Browser Audit of ALL v2 Pages
 * Tests every v2 page in browser and captures ALL console errors
 * NO FIXES - REPORT ONLY
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3333';
const TIMEOUT = 30000;
const CONCURRENT = 5; // Test 5 pages at a time
const REPORT_PATH = path.join(os.tmpdir(), 'livepeer-docs-v2', 'page-audits', 'comprehensive-v2-pages-browser-audit.json');

// Get all v2 pages from docs.json
function getAllV2Pages() {
  const docs = JSON.parse(fs.readFileSync('docs.json', 'utf8'));
  const pages = new Set();
  
  function extractPages(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        if (typeof item === 'string' && item.startsWith('v2/')) {
          pages.add(item);
        } else if (typeof item === 'object' && item !== null) {
          extractPages(item);
        }
      });
    } else if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach(val => extractPages(val));
    }
  }
  
  extractPages(docs.navigation);
  return Array.from(pages).sort();
}

// Convert page path to URL
function pagePathToUrl(pagePath) {
  let url = pagePath
    .replace(/^v2\/pages\//, '')
    .replace(/^v2\//, '')
    .replace(/\.mdx$/, '');
  
  if (url.endsWith('/index')) {
    url = url.replace(/\/index$/, '');
  }
  
  // Handle spaces in paths
  url = url.replace(/ /g, '%20');
  
  return `/${url}`;
}

// Test a single page
async function testPage(browser, pagePath) {
  const page = await browser.newPage();
  const url = BASE_URL + pagePathToUrl(pagePath);
  
  const errors = [];
  const warnings = [];
  const networkErrors = [];
  
  // Capture ALL console messages
  page.on('console', msg => {
    const text = msg.text();
    const type = msg.type();
    if (type === 'error') {
      errors.push({
        type: 'console',
        message: text,
        timestamp: Date.now()
      });
    } else if (type === 'warning') {
      warnings.push({
        type: 'console',
        message: text,
        timestamp: Date.now()
      });
    }
  });
  
  // Capture page errors
  page.on('pageerror', error => {
    errors.push({
      type: 'pageerror',
      message: error.toString(),
      stack: error.stack,
      timestamp: Date.now()
    });
  });
  
  // Capture request failures
  page.on('requestfailed', request => {
    const failure = request.failure();
    if (failure) {
      networkErrors.push({
        url: request.url(),
        error: failure.errorText,
        timestamp: Date.now()
      });
    }
  });
  
  let result = {
    page: pagePath,
    url: url,
    success: false,
    httpStatus: null,
    h1: null,
    contentLength: 0,
    hasParsingError: false,
    errors: [],
    warnings: [],
    networkErrors: [],
    renderTime: null
  };
  
  try {
    const startTime = Date.now();
    const response = await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: TIMEOUT
    });
    
    result.httpStatus = response ? response.status() : null;
    
    // Wait for content to render
    await new Promise(r => setTimeout(r, 3000));
    
    result.renderTime = Date.now() - startTime;
    
    // Check page content
    const pageInfo = await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.textContent || null;
      const bodyText = document.body?.innerText || '';
      const hasParsingError = bodyText.includes('parsing error') || 
                             bodyText.includes('🚧 A parsing error');
      const contentLength = bodyText.length;
      
      return { h1, contentLength, hasParsingError };
    });
    
    result.h1 = pageInfo.h1;
    result.contentLength = pageInfo.contentLength;
    result.hasParsingError = pageInfo.hasParsingError;
    
    // Collect all errors (NO FILTERING - capture everything)
    result.errors = errors;
    result.warnings = warnings;
    result.networkErrors = networkErrors;
    
    // Success = page loads, has content, no parsing errors
    result.success = result.httpStatus >= 200 && 
                    result.httpStatus < 400 && 
                    result.h1 && 
                    result.contentLength > 100 &&
                    !result.hasParsingError;
    
  } catch (error) {
    result.errors.push({
      type: 'navigation',
      message: error.message,
      stack: error.stack,
      timestamp: Date.now()
    });
  } finally {
    await page.close();
  }
  
  return result;
}

// Test pages in batches
async function testPagesInBatches(browser, pages, batchSize = CONCURRENT) {
  const results = [];
  
  for (let i = 0; i < pages.length; i += batchSize) {
    const batch = pages.slice(i, i + batchSize);
    console.log(`\nTesting batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(pages.length / batchSize)} (${batch.length} pages)...`);
    
    const batchResults = await Promise.all(
      batch.map(pagePath => testPage(browser, pagePath))
    );
    
    results.push(...batchResults);
    
    // Log progress
    const passed = batchResults.filter(r => r.success).length;
    const failed = batchResults.filter(r => !r.success).length;
    const withErrors = batchResults.filter(r => r.errors.length > 0).length;
    
    console.log(`  ✅ Passed: ${passed}, ❌ Failed: ${failed}, ⚠️  With Errors: ${withErrors}`);
    
    // Small delay between batches
    if (i + batchSize < pages.length) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  return results;
}

// Main function
async function main() {
  console.log('🔍 COMPREHENSIVE V2 PAGES BROWSER AUDIT');
  console.log('========================================\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Timeout: ${TIMEOUT}ms per page`);
  console.log(`Concurrent: ${CONCURRENT} pages\n`);
  
  // Get all v2 pages
  console.log('📄 Extracting v2 pages from docs.json...');
  const pages = getAllV2Pages();
  console.log(`Found ${pages.length} v2 pages to test\n`);
  
  // Check server
  console.log('🌐 Checking server accessibility...');
  try {
    const testBrowser = await puppeteer.launch({ headless: true });
    const testPage = await testBrowser.newPage();
    await testPage.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 5000 });
    await testPage.close();
    await testBrowser.close();
    console.log('✅ Server is accessible\n');
  } catch (error) {
    console.error(`❌ Server not accessible: ${error.message}`);
    console.error(`   Make sure 'mint dev' is running on ${BASE_URL}`);
    process.exit(1);
  }
  
  // Launch browser
  console.log('🚀 Starting browser tests...\n');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const startTime = Date.now();
  const results = await testPagesInBatches(browser, pages);
  const totalTime = Date.now() - startTime;
  
  await browser.close();
  
  // Generate report
  console.log('\n📊 GENERATING COMPREHENSIVE REPORT...\n');
  
  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  const withErrors = results.filter(r => r.errors.length > 0).length;
  const withWarnings = results.filter(r => r.warnings.length > 0).length;
  const withParsingErrors = results.filter(r => r.hasParsingError).length;
  
  // Group errors by type
  const errorTypes = {};
  results.forEach(r => {
    r.errors.forEach(err => {
      const key = err.type || 'unknown';
      if (!errorTypes[key]) errorTypes[key] = [];
      errorTypes[key].push({
        page: r.page,
        message: err.message
      });
    });
  });
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalPages: pages.length,
    summary: {
      passed,
      failed,
      withErrors,
      withWarnings,
      withParsingErrors,
      totalTestTime: totalTime
    },
    errorTypes,
    failedPages: results.filter(r => !r.success).map(r => ({
      page: r.page,
      url: r.url,
      httpStatus: r.httpStatus,
      h1: r.h1,
      contentLength: r.contentLength,
      hasParsingError: r.hasParsingError,
      errorCount: r.errors.length,
      warningCount: r.warnings.length,
      errors: r.errors,
      warnings: r.warnings
    })),
    pagesWithErrors: results.filter(r => r.errors.length > 0).map(r => ({
      page: r.page,
      url: r.url,
      errorCount: r.errors.length,
      errors: r.errors
    })),
    allResults: results
  };
  
  // Save report
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('========================================');
  console.log('📊 AUDIT SUMMARY');
  console.log('========================================');
  console.log(`Total Pages Tested: ${pages.length}`);
  console.log(`✅ Passed: ${passed} (${((passed/pages.length)*100).toFixed(1)}%)`);
  console.log(`❌ Failed: ${failed} (${((failed/pages.length)*100).toFixed(1)}%)`);
  console.log(`⚠️  Pages with Errors: ${withErrors} (${((withErrors/pages.length)*100).toFixed(1)}%)`);
  console.log(`⚠️  Pages with Warnings: ${withWarnings} (${((withWarnings/pages.length)*100).toFixed(1)}%)`);
  console.log(`🚧 Pages with Parsing Errors: ${withParsingErrors}`);
  console.log(`⏱️  Total Test Time: ${(totalTime/1000).toFixed(1)}s`);
  console.log('\nError Types:');
  Object.entries(errorTypes).forEach(([type, errors]) => {
    console.log(`  ${type}: ${errors.length} occurrences`);
  });
  console.log(`\n📄 Full report saved to: ${REPORT_PATH}`);
  console.log('========================================\n');
  
  // Exit with error code if any pages failed
  process.exit(failed > 0 || withErrors > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
