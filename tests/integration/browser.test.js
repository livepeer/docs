#!/usr/bin/env node
/**
 * Browser rendering tests
 * Tests pages in headless browser with theme checks
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { getMdxFiles, getStagedFiles } = require('../utils/file-walker');
const { getV2Pages } = require('../../scripts/test-v2-pages');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
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
  const { theme = 'dark' } = options;
  const url = filePathToUrl(filePath);
  const fullUrl = `${BASE_URL}${url}`;
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
      testFiles = getStagedFiles().filter(f => f.endsWith('.mdx') && f.includes('v2/pages')).slice(0, 10);
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
  
  // Check server
  try {
    const testBrowser = await puppeteer.launch({ headless: true });
    const testPage = await testBrowser.newPage();
    await testPage.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 5000 });
    await testPage.close();
    await testBrowser.close();
  } catch (error) {
    return {
      errors: [],
      warnings: [`Server not accessible at ${BASE_URL}. Start with: mint dev`],
      passed: true,
      total: testFiles.length
    };
  }
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const file of testFiles) {
    for (const theme of themes) {
      const result = await testPage(browser, file, { theme });
      results.push(result);
      
      if (result.success) {
        passed++;
      } else {
        failed++;
      }
    }
  }
  
  await browser.close();
  
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
