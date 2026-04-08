#!/usr/bin/env node
/**
 * @script            test-v2-pages
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             operations/scripts/validators/content/structure, docs.json, v2
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement V2 page tester — validates v2 pages via Puppeteer browser rendering
 * @pipeline          P2, P3
 * @usage             node operations/scripts/validators/content/structure/test-v2-pages.js [flags]
 * @type        validator
 * @description test v2 pages
 * @mode        read-only
 */

/**
 * Script to test all v2 pages in docs.json for console errors
 * Uses Puppeteer to visit each page in a headless browser
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const REPO_ROOT = process.cwd();
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const BASELINE_PATH = path.join(REPO_ROOT, 'operations/tests/baselines/console-baseline.json');
const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 30000; // 30 seconds per page
const BASE_ORIGIN = new URL(BASE_URL).origin;
const BROWSER_LAUNCH_OPTIONS = {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
};
const USE_BASELINE = process.argv.includes('--baseline');

// Load baseline for diffing (only fail on NEW errors not in baseline)
let BASELINE = {};
if (USE_BASELINE) {
  try {
    const raw = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
    if (raw.routes) {
      raw.routes.forEach(r => {
        BASELINE[r.route] = new Set((r.consoleErrors || []).map(e => normaliseError(e)));
      });
    }
  } catch (e) {
    console.warn('Warning: --baseline specified but could not load baseline:', e.message);
  }
}

function normaliseError(msg) {
  // Strip dynamic parts (line numbers, timestamps, hashes) for comparison
  return msg
    .replace(/:\d+:\d+/g, ':LINE:COL')
    .replace(/\b[0-9a-f]{8,}\b/gi, 'HASH')
    .replace(/localhost:\d+/g, 'localhost:PORT')
    .trim();
}

function isBaselined(pagePath, error) {
  const baselineErrors = BASELINE[pagePath];
  if (!baselineErrors) return false;
  return baselineErrors.has(normaliseError(error));
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
 * Convert page path to URL
 */
function pageToUrl(pagePath) {
  // Preserve docs.json route paths exactly; only normalize legacy `v2/pages/...` to `v2/...`.
  let url = pagePath
    .replace(/^v2\/pages\//, 'v2/')
    .replace(/\.mdx?$/, '');
  
  // Handle index pages (ending with /)
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  
  return `${BASE_URL}/${url}`;
}

/**
 * Test a single page for console errors
 */
async function testPage(browser, pagePath) {
  const url = pageToUrl(pagePath);
  const page = await browser.newPage();
  
  const errors = [];
  const warnings = [];
  const logs = [];
  
  // Listen for console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    
    if (type === 'error') {
      errors.push(text);
    } else if (type === 'warning') {
      warnings.push(text);
    }
    
    logs.push({ type, text });
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}`);
  });
  
  // Listen for request failures
  page.on('requestfailed', request => {
    const failure = request.failure();
    const requestUrl = request.url();
    const isSameOrigin = requestUrl.startsWith(BASE_ORIGIN);
    if (failure && isSameOrigin) {
      errors.push(`Request Failed: ${request.url()} - ${failure.errorText}`);
    }
  });
  
  try {
    // Navigate to page with timeout
    await page.goto(url, { 
      waitUntil: 'networkidle2', 
      timeout: TIMEOUT 
    });
    
    // Wait a bit for any async rendering
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In baseline mode, only count errors NOT in the baseline as failures
    const newErrors = USE_BASELINE
      ? errors.filter(e => !isBaselined(pagePath, e))
      : errors;

    return {
      pagePath,
      url,
      success: newErrors.length === 0,
      errors,
      newErrors,
      baselinedErrors: errors.length - newErrors.length,
      warnings,
      logs
    };
  } catch (error) {
    return {
      pagePath,
      url,
      success: false,
      errors: [`Navigation Error: ${error.message}`],
      warnings,
      logs
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
  console.log(`📄 Found ${pages.length} pages to test\n`);
  
  console.log(`🌐 Testing against: ${BASE_URL}`);
  console.log(`⏱️  Timeout per page: ${TIMEOUT}ms\n`);
  
  // Check if server is running
  try {
    const testPage = await puppeteer.launch(BROWSER_LAUNCH_OPTIONS);
    const testBrowserPage = await testPage.newPage();
    await testBrowserPage.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 5000 });
    await testBrowserPage.close();
    await testPage.close();
    console.log('✅ Server is accessible\n');
  } catch (error) {
    console.error(`❌ Cannot connect to ${BASE_URL}`);
    console.error('   Make sure mint dev is running!');
    console.error(`   Start it with: mint dev`);
    process.exit(1);
  }
  
  console.log('🚀 Starting browser tests...\n');
  
  const browser = await puppeteer.launch(BROWSER_LAUNCH_OPTIONS);
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (let i = 0; i < pages.length; i++) {
    const pagePath = pages[i];
    const progress = `[${i + 1}/${pages.length}]`;
    
    process.stdout.write(`${progress} Testing ${pagePath}... `);
    
    const result = await testPage(browser, pagePath);
    results.push(result);
    
    if (result.success) {
      console.log('✅');
      passed++;
    } else {
      console.log('❌');
      failed++;
    }
  }
  
  await browser.close();
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY' + (USE_BASELINE ? ' (baseline diff mode)' : ''));
  console.log('='.repeat(60));
  console.log(`Total pages tested: ${pages.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  if (USE_BASELINE) {
    const totalBaselined = results.reduce((s, r) => s + (r.baselinedErrors || 0), 0);
    console.log(`Baselined errors (ignored): ${totalBaselined}`);
    const totalNew = results.reduce((s, r) => s + (r.newErrors ? r.newErrors.length : 0), 0);
    console.log(`NEW errors (cause failure): ${totalNew}`);
  }
  console.log('');
  
  // Print failed pages
  if (failed > 0) {
    console.log('❌ FAILED PAGES:');
    console.log('='.repeat(60));
    results
      .filter(r => !r.success)
      .forEach(result => {
        console.log(`\n📄 ${result.pagePath}`);
        console.log(`   URL: ${result.url}`);
        console.log(`   Errors (${result.errors.length}):`);
        result.errors.forEach(error => {
          console.log(`     - ${error}`);
        });
        if (result.warnings.length > 0) {
          console.log(`   Warnings (${result.warnings.length}):`);
          result.warnings.forEach(warning => {
            console.log(`     - ${warning}`);
          });
        }
      });
  }
  
  // Save detailed report
  const reportPath = path.join(REPO_ROOT, 'workspace/reports/page-audits/v2-page-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalPages: pages.length,
    passed,
    failed,
    results
  }, null, 2));
  
  console.log(`\n📝 Detailed report saved to: ${reportPath}`);
  
  // Exit with error code if any failures
  process.exit(failed > 0 ? 1 : 0);
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { getV2Pages, testPage };
