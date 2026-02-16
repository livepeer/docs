#!/usr/bin/env node
/**
 * Headless browser validation for staged MDX files
 * Tests that MDX files actually render in the browser without errors
 * 
 * This script:
 * 1. Extracts staged MDX files
 * 2. Converts file paths to URLs
 * 3. Tests each page in headless browser
 * 4. Reports console errors, page errors, and render failures
 */

const { execSync } = require('child_process');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 15000; // 15 seconds per page (faster for pre-commit)
const MAX_PAGES = 10; // Limit to 10 pages for pre-commit speed

/**
 * Get staged MDX files from git
 */
function getStagedMdxFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
    const files = output
      .split('\n')
      .filter(line => line.trim() && line.endsWith('.mdx'))
      .filter(line => line.startsWith('v2/pages/'))
      .slice(0, MAX_PAGES); // Limit for speed
    
    return files;
  } catch (error) {
    return [];
  }
}

/**
 * Convert file path to URL
 * Example: v2/pages/07_resources/documentation-guide/style-guide.mdx
 *          -> /v2/pages/07_resources/documentation-guide/style-guide
 */
function filePathToUrl(filePath) {
  // Remove v2/pages prefix and .mdx extension
  let url = filePath
    .replace(/^v2\/pages\//, '')
    .replace(/\.mdx$/, '');
  
  // Handle index files
  if (url.endsWith('/index')) {
    url = url.replace(/\/index$/, '');
  }
  
  return `/${url}`;
}

/**
 * Test a single page in headless browser
 */
async function testPage(browser, filePath) {
  const url = filePathToUrl(filePath);
  const fullUrl = `${BASE_URL}${url}`;
  const page = await browser.newPage();
  
  const errors = [];
  const warnings = [];
  
  // Listen for console errors
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    
    // Filter out common non-critical warnings
    const ignoredWarnings = [
      'favicon',
      'sourcemap',
      'deprecated',
      'experimental'
    ];
    
    if (type === 'error') {
      // Filter out known non-critical errors
      if (!text.includes('favicon') && !text.includes('sourcemap')) {
        errors.push(text);
      }
    } else if (type === 'warning' && !ignoredWarnings.some(ignored => text.toLowerCase().includes(ignored))) {
      warnings.push(text);
    }
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}`);
  });
  
  // Listen for request failures (but ignore some)
  page.on('requestfailed', request => {
    const failure = request.failure();
    const url = request.url();
    
    // Ignore favicon and other non-critical failures
    if (failure && !url.includes('favicon') && !url.includes('sourcemap')) {
      // Only report if it's a critical resource
      if (url.includes('/snippets/') || url.includes('/v2/pages/')) {
        errors.push(`Request Failed: ${url} - ${failure.errorText}`);
      }
    }
  });
  
  try {
    // Navigate to page
    await page.goto(fullUrl, { 
      waitUntil: 'networkidle2', 
      timeout: TIMEOUT 
    });
    
    // Wait for content to render
    await page.waitForTimeout(1000);
    
    // Check if page actually rendered content
    const bodyText = await page.evaluate(() => document.body.innerText);
    if (!bodyText || bodyText.trim().length < 50) {
      errors.push('Page appears to be empty or failed to render');
    }
    
    // Check for common render errors
    const hasError = await page.evaluate(() => {
      // Check for React error boundaries
      return document.querySelector('[data-error-boundary]') !== null ||
             document.body.innerText.includes('Error:') ||
             document.body.innerText.includes('Failed to render');
    });
    
    if (hasError) {
      errors.push('Page contains render errors');
    }
    
    return {
      filePath,
      url: fullUrl,
      success: errors.length === 0,
      errors,
      warnings
    };
  } catch (error) {
    return {
      filePath,
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
 * Check if Mintlify server is running
 */
async function checkServer() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 5000 });
    await page.close();
    await browser.close();
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  const stagedFiles = getStagedMdxFiles();
  
  if (stagedFiles.length === 0) {
    // No MDX files staged, skip browser validation
    process.exit(0);
  }
  
  console.log(`\n🌐 Browser validation: Testing ${stagedFiles.length} staged MDX file(s)...`);
  
  // Check if server is running
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.log(`⚠️  Mintlify server not running at ${BASE_URL}`);
    console.log('   Browser validation skipped. Start with: mint dev');
    console.log('   Or set MINT_BASE_URL environment variable');
    // Don't fail pre-commit if server isn't running (optional check)
    process.exit(0);
  }
  
  console.log(`✅ Server accessible at ${BASE_URL}\n`);
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const filePath of stagedFiles) {
    process.stdout.write(`  Testing ${filePath}... `);
    
    const result = await testPage(browser, filePath);
    results.push(result);
    
    if (result.success) {
      console.log('✅');
      passed++;
    } else {
      console.log('❌');
      failed++;
      // Show first error
      if (result.errors.length > 0) {
        console.log(`     Error: ${result.errors[0]}`);
      }
    }
  }
  
  await browser.close();
  
  // Report results
  if (failed === 0) {
    console.log(`\n✅ All ${passed} page(s) rendered successfully in browser\n`);
    process.exit(0);
  } else {
    console.log(`\n❌ ${failed} of ${stagedFiles.length} page(s) failed browser validation:\n`);
    
    results.filter(r => !r.success).forEach(result => {
      console.log(`  ${result.filePath}:`);
      result.errors.forEach(error => {
        console.log(`    - ${error}`);
      });
    });
    
    console.log('\n💡 Fix errors and try committing again.');
    console.log('   See: v2/pages/07_resources/documentation-guide/style-guide.mdx\n');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Browser validation error:', error);
    process.exit(1);
  });
}

module.exports = { testPage, getStagedMdxFiles, filePathToUrl };
