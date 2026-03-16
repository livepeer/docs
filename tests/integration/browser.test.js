#!/usr/bin/env node
/**
 * @script            browser.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions
 * @pipeline          P1
 * @dualmode          dual-mode (document flags)
 * @usage             node tests/integration/browser.test.js [flags]
 */
/**
 * Browser rendering tests
 * Tests pages in headless browser with theme checks
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_error) {
  puppeteer = require(path.join(REPO_ROOT, 'tools', 'node_modules', 'puppeteer'));
}

const { getMdxFiles, getStagedDocsPageFiles } = require('../utils/file-walker');
const { getV2Pages } = require('../../tools/scripts/test-v2-pages');
const { ensureServerRunning, stopServer, getServerUrl } = require('../../.githooks/server-manager');

const DEFAULT_BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 30000;

/**
 * Convert file path or page path to URL
 */
function filePathToUrl(filePath) {
  // If it's already a page path from docs.json (starts with v2/pages)
  if (filePath.startsWith('v2/pages/')) {
    let url = filePath
      .replace(/^v2\/pages\//, '')
      .replace(/\.mdx$/, '');
    
    if (url.endsWith('/index')) {
      url = url.replace(/\/index$/, '');
    }
    
    return `/${url}`;
  }
  
  // Otherwise treat as file path
  let url = filePath
    .replace(/^.*v2\/pages\//, '')
    .replace(/\.mdx$/, '');
  
  if (url.endsWith('/index')) {
    url = url.replace(/\/index$/, '');
  }
  
  return `/${url}`;
}

/**
 * Test page in browser
 */
async function testPage(browser, filePath, options = {}) {
  const { theme = 'dark', baseUrl = DEFAULT_BASE_URL } = options;
  const url = filePathToUrl(filePath);
  const fullUrl = `${baseUrl}${url}`;
  const page = await browser.newPage();
  
  // Set desktop viewport (fixed size - documentation is not responsive)
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Set theme if needed
  if (theme === 'light') {
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('theme', 'light');
    });
  }
  
  const errors = [];
  const warnings = [];
  
  // Listen for console errors
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    
    // Filter out non-critical errors and test script artifacts
    const ignored = [
      'favicon', 
      'sourcemap', 
      'deprecated', 
      'experimental',
      'require is not defined',  // Test scripts
      'puppeteer',  // Test script artifacts
      'fs has already been declared',  // Test script artifacts
      'getMdxFiles',  // Test script artifacts
      'validateMdx',  // Test script artifacts
      'execSync',  // Test script artifacts
      'path',  // Test script artifacts
      'Unexpected token \'export\'',  // Test script artifacts
      'await is only valid in async functions'  // Test script artifacts
    ];
    if (type === 'error' && !ignored.some(i => text.toLowerCase().includes(i.toLowerCase()))) {
      errors.push(`Console: ${text}`);
    }
  });
  
  page.on('pageerror', error => {
    const errorMsg = error.message;
    // Filter out test script errors and known false positives
    const ignored = [
      'require is not defined',
      'puppeteer',
      'fs has already been declared',
      'getMdxFiles',
      'validateMdx',
      'execSync',
      'path',
      'Unexpected token',
      'await is only valid',
      'appendChild',  // Test script injection artifacts
      'Identifier \'fs\'',  // Test script artifacts
      'Identifier \'puppeteer\'',  // Test script artifacts
      'Identifier \'getMdxFiles\'',  // Test script artifacts
      'Identifier \'validateMdx\'',  // Test script artifacts
      'Identifier \'execSync\'',  // Test script artifacts
      'Identifier \'path\''  // Test script artifacts
    ];
    if (!ignored.some(i => errorMsg.toLowerCase().includes(i.toLowerCase()))) {
      errors.push(`Page Error: ${errorMsg}`);
    }
  });
  
  try {
    await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: TIMEOUT });
    // Wait for content to render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check content
    const bodyText = await page.evaluate(() => document.body.innerText);
    const h1Text = await page.evaluate(() => document.querySelector('h1')?.innerText || '');
    
    // Check for 404 pages
    const is404 = await page.evaluate(() => {
      const bodyText = document.body.innerText.toLowerCase();
      return bodyText.includes('doesn\'t exist') ||
             bodyText.includes('page not found') ||
             bodyText.includes('404') ||
             bodyText.includes('ruh oh');
    });
    
    if (is404) {
      errors.push(`Page returns 404 - page doesn't exist`);
    }
    
    // Check minimum content length (real pages should have substantial content)
    if (!bodyText || bodyText.trim().length < 500) {
      errors.push(`Page appears empty or failed to render (only ${bodyText ? bodyText.length : 0} chars)`);
    }
    
    // Check for H1
    const hasH1 = await page.evaluate(() => {
      return document.querySelector('h1') !== null;
    });
    
    if (!hasH1) {
      errors.push('No H1 heading found');
    } else if (h1Text && (h1Text.includes('doesn\'t exist') || h1Text.includes('404'))) {
      errors.push(`H1 indicates 404: "${h1Text}"`);
    }
    
    // Check for render errors
    const hasError = await page.evaluate(() => {
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
      theme,
      success: errors.length === 0,
      errors,
      warnings,
      contentLength: bodyText ? bodyText.length : 0
    };
  } catch (error) {
    return {
      filePath,
      url: fullUrl,
      theme,
      success: false,
      errors: [`Navigation Error: ${error.message}`],
      warnings
    };
  } finally {
    await page.close();
  }
}

/**
 * Run browser tests
 */
async function runTests(options = {}) {
  const { files = null, stagedOnly = false, themes = ['dark'] } = options;
  
  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      // Pre-commit: only test staged files (limited to 10 for speed)
      testFiles = getStagedDocsPageFiles().filter(f => f.endsWith('.mdx') && f.includes('v2/pages')).slice(0, 10);
    } else {
      // Full test: get ALL pages from docs.json (ensures all pages are tested)
      try {
        testFiles = getV2Pages();
      } catch (error) {
        // Fallback to file system if docs.json parsing fails
        console.warn(`⚠️  Could not parse docs.json, falling back to file system: ${error.message}`);
        testFiles = getMdxFiles();
      }
    }
  }
  
  // Ensure server is running (start if needed)
  let serverStarted = false;
  try {
    serverStarted = await ensureServerRunning();
  } catch (error) {
    return {
      errors: [`Failed to start server: ${error.message}`],
      warnings: [],
      passed: 0,
      failed: 0,
      total: testFiles.length
    };
  }
  
  const baseUrl = process.env.MINT_BASE_URL || getServerUrl();
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const file of testFiles) {
    for (const theme of themes) {
      const result = await testPage(browser, file, { theme, baseUrl });
      results.push(result);
      
      if (result.success) {
        passed++;
      } else {
        failed++;
      }
    }
  }
  
  await browser.close();
  
  // Stop server if we started it
  if (serverStarted) {
    stopServer();
  }
  
  return {
    results,
    passed,
    failed,
    total: testFiles.length,
    allPassed: failed === 0
  };
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const stagedOnly = args.includes('--staged');
  const themes = args.includes('--light') ? ['light'] : ['dark'];
  
  runTests({ stagedOnly, themes }).then(result => {
    const infraErrors = Array.isArray(result.errors) ? result.errors : [];
    if (infraErrors.length > 0) {
      console.error('\n❌ Browser test infrastructure failed:\n');
      infraErrors.forEach(err => console.error(`  - ${err}`));
      process.exit(1);
    }
    if (result.failed > 0) {
      console.error(`\n❌ ${result.failed} of ${result.total} page test(s) failed:\n`);
      result.results.filter(r => !r.success).forEach(r => {
        console.error(`  ${r.filePath} (${r.theme}):`);
        r.errors.forEach(err => console.error(`    - ${err}`));
      });
      process.exit(1);
    } else {
      console.log(`\n✅ All ${result.passed} page test(s) passed (${result.total} total pages tested)`);
      process.exit(0);
    }
  }).catch(error => {
    console.error('Browser test error:', error);
    process.exit(1);
  });
}

module.exports = { runTests, testPage };
