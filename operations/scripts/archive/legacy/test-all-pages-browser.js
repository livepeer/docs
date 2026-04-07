#!/usr/bin/env node
/**
 * @script            test-all-pages-browser
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Manual browser test runner — opens all pages in Puppeteer for visual inspection
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/test-all-pages-browser.js [flags]
 */
/**
 * Test ALL pages from docs.json in browser
 * Generates comprehensive report
 */

const { getV2Pages } = require('./test-v2-pages');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3333';
const TIMEOUT = 30000;
const CONCURRENT = 5; // Test 5 pages at a time
const BROWSER_LAUNCH_OPTIONS = {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
};

/**
 * Convert page path to URL
 */
function pageToUrl(pagePath) {
  let url = pagePath
    .replace(/^v2\/pages\//, 'v2/')
    .replace(/\.mdx?$/, '');
  if (url.endsWith('/index')) url = url.replace(/\/index$/, '');
  return `/${url}`;
}

/**
 * Test a single page
 */
async function testPage(browser, pagePath) {
  const url = pageToUrl(pagePath);
  const fullUrl = `${BASE_URL}${url}`;
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  const errors = [];
  const warnings = [];
  
  // Filter test script errors
  const ignoredErrors = [
    'require is not defined',
    'puppeteer',
    'fs has already been declared',
    'getMdxFiles',
    'validateMdx',
    'execSync',
    'path',
    'Unexpected token',
    'await is only valid',
    'appendChild',
    'Identifier'
  ];
  
  page.on('console', msg => {
    const text = msg.text();
    if (msg.type() === 'error' && !ignoredErrors.some(i => text.toLowerCase().includes(i.toLowerCase()))) {
      errors.push(`Console: ${text}`);
    }
  });
  
  page.on('pageerror', error => {
    const msg = error.message;
    if (!ignoredErrors.some(i => msg.toLowerCase().includes(i.toLowerCase()))) {
      errors.push(`Page Error: ${msg}`);
    }
  });
  
  try {
    await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: TIMEOUT });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const bodyText = await page.evaluate(() => document.body.innerText);
    const h1Text = await page.evaluate(() => document.querySelector('h1')?.innerText || '');
    
    // Check for 404
    const is404 = bodyText.toLowerCase().includes("doesn't exist") ||
                  bodyText.toLowerCase().includes('page not found') ||
                  bodyText.toLowerCase().includes('404') ||
                  bodyText.toLowerCase().includes('ruh oh');
    
    if (is404) errors.push('Page returns 404');
    if (!bodyText || bodyText.trim().length < 500) {
      errors.push(`Page appears empty (${bodyText ? bodyText.length : 0} chars)`);
    }
    if (!h1Text) {
      errors.push('No H1 heading found');
    } else if (h1Text.includes("doesn't exist") || h1Text.includes('404')) {
      errors.push(`H1 indicates 404: "${h1Text}"`);
    }
    
    return {
      pagePath,
      url: fullUrl,
      success: errors.length === 0,
      errors,
      warnings,
      contentLength: bodyText ? bodyText.length : 0,
      h1: h1Text
    };
  } catch (error) {
    return {
      pagePath,
      url: fullUrl,
      success: false,
      errors: [`Navigation Error: ${error.message}`],
      warnings
    };
  } finally {
    await page.close();
  }
}

/**
 * Test pages in batches
 */
async function testPagesInBatches(browser, pages, batchSize = CONCURRENT) {
  const results = [];
  
  for (let i = 0; i < pages.length; i += batchSize) {
    const batch = pages.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(page => testPage(browser, page))
    );
    results.push(...batchResults);
    
    const progress = `[${Math.min(i + batchSize, pages.length)}/${pages.length}]`;
    const passed = batchResults.filter(r => r.success).length;
    const failed = batchResults.filter(r => !r.success).length;
    console.log(`${progress} Batch: ${passed} passed, ${failed} failed`);
  }
  
  return results;
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Getting all pages from docs.json...');
  const pages = getV2Pages();
  console.log(`📄 Found ${pages.length} pages to test\n`);
  
  console.log(`🌐 Testing against: ${BASE_URL}`);
  console.log(`⏱️  Timeout per page: ${TIMEOUT}ms`);
  console.log(`🚀 Testing ${CONCURRENT} pages concurrently\n`);
  
  // Check server
  try {
    const testBrowser = await puppeteer.launch(BROWSER_LAUNCH_OPTIONS);
    const testPage = await testBrowser.newPage();
    await testPage.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 5000 });
    await testPage.close();
    await testBrowser.close();
    console.log('✅ Server is accessible\n');
  } catch (error) {
    console.error(`❌ Cannot connect to ${BASE_URL}`);
    console.error('   Make sure mint dev is running!');
    process.exit(1);
  }
  
  console.log('🚀 Starting browser tests...\n');
  
  const browser = await puppeteer.launch(BROWSER_LAUNCH_OPTIONS);
  
  const startTime = Date.now();
  const results = await testPagesInBatches(browser, pages);
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  
  await browser.close();
  
  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalPages: pages.length,
    passed,
    failed,
    duration: `${duration}s`,
    results: results.map(r => ({
      page: r.pagePath,
      url: r.url,
      success: r.success,
      errors: r.errors,
      contentLength: r.contentLength,
      h1: r.h1
    }))
  };
  
  // Save JSON report
  const reportPath = path.join(__dirname, '..', 'browser-test-all-pages-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total pages tested: ${pages.length}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⏱️  Duration: ${duration}s`);
  console.log(`📝 Report saved to: ${reportPath}\n`);
  
  if (failed > 0) {
    console.log('❌ FAILED PAGES:');
    console.log('='.repeat(60));
    results.filter(r => !r.success).forEach(r => {
      console.log(`\n📄 ${r.pagePath}`);
      console.log(`   URL: ${r.url}`);
      console.log(`   Content: ${r.contentLength} chars`);
      if (r.h1) console.log(`   H1: ${r.h1}`);
      console.log(`   Errors (${r.errors.length}):`);
      r.errors.forEach(err => console.log(`     - ${err}`));
    });
  }
  
  // Save text report
  const textReportPath = path.join(__dirname, '..', 'browser-test-all-pages-report.txt');
  let textReport = `Browser Test Report - All Pages\n`;
  textReport += `Generated: ${new Date().toISOString()}\n`;
  textReport += `Base URL: ${BASE_URL}\n`;
  textReport += `Total Pages: ${pages.length}\n`;
  textReport += `Passed: ${passed}\n`;
  textReport += `Failed: ${failed}\n`;
  textReport += `Duration: ${duration}s\n\n`;
  
  if (failed > 0) {
    textReport += `FAILED PAGES:\n${'='.repeat(60)}\n`;
    results.filter(r => !r.success).forEach(r => {
      textReport += `\n${r.pagePath}\n`;
      textReport += `URL: ${r.url}\n`;
      textReport += `Content: ${r.contentLength} chars\n`;
      if (r.h1) textReport += `H1: ${r.h1}\n`;
      textReport += `Errors:\n`;
      r.errors.forEach(err => textReport += `  - ${err}\n`);
    });
  }
  
  fs.writeFileSync(textReportPath, textReport);
  console.log(`📄 Text report saved to: ${textReportPath}\n`);
  
  process.exit(failed > 0 ? 1 : 0);
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { testPage, testPagesInBatches };
