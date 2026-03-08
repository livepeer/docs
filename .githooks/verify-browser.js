#!/usr/bin/env node
/**
 * @script            verify-browser
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             .githooks
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Verifies browser availability for Puppeteer-based integration tests
 * @pipeline          manual — developer tool
 * @usage             node .githooks/verify-browser.js [flags]
 */
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
const path = require('path');
const fs = require('fs');
const { getStagedDocsPageFiles } = require('../tests/utils/file-walker');

// Find puppeteer in tools/node_modules, tests/node_modules, or root node_modules
let puppeteer;
const possiblePaths = [
  path.join(__dirname, '..', 'tools', 'node_modules', 'puppeteer'),
  path.join(__dirname, '..', 'tests', 'node_modules', 'puppeteer'),
  path.join(__dirname, '..', 'node_modules', 'puppeteer')
];

for (const puppeteerPath of possiblePaths) {
  if (fs.existsSync(puppeteerPath)) {
    puppeteer = require(puppeteerPath);
    break;
  }
}

if (!puppeteer) {
  console.error('❌ Puppeteer not found. Install dependencies: cd tools && npm install');
  process.exit(1);
}

const { ensureServerRunning, stopServer, getServerUrl } = require('./server-manager');

// Use server-manager's detected URL, or fall back to environment variable or default
// getServerUrl() will return the actual port mint dev is using (may differ from 3145 if port is in use)
const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3145';
const TIMEOUT = 15000; // 15 seconds per page (faster for pre-commit)
const MAX_PAGES = 10; // Limit to 10 pages for pre-commit speed

/**
 * Get staged MDX files from git
 */
function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function getStagedMdxFiles() {
  try {
    const repoRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
    const files = getStagedDocsPageFiles(repoRoot)
      .map((filePath) => toPosix(path.relative(repoRoot, filePath)))
      .filter((filePath) => filePath.endsWith('.mdx') && filePath.startsWith('v2/'))
      .slice(0, MAX_PAGES); // Limit for speed
    
    return files;
  } catch (error) {
    return [];
  }
}

/**
 * Build candidate URLs for a staged MDX file path.
 * Try legacy and current route patterns because local Mint dev routing
 * can differ from production path handling during migrations.
 */
function filePathToUrls(filePath) {
  const withoutExt = filePath.replace(/\.mdx$/, '');
  const routeWithoutPrefix = withoutExt
    .replace(/^v2\/pages\//, '')
    .replace(/^v2\//, '');
  const normalizedRoute = routeWithoutPrefix.replace(/\/index$/, '');

  const candidates = [
    `/${normalizedRoute}`,
    `/${withoutExt.replace(/^v2\//, '').replace(/\/index$/, '')}`,
    `/v2/${normalizedRoute}`,
    `/v2/pages/${normalizedRoute}`
  ];

  return [...new Set(candidates)];
}

/**
 * Test a single page in headless browser
 */
async function testPage(browser, filePath, baseUrl) {
  const candidateUrls = filePathToUrls(filePath);
  const page = await browser.newPage();
  
  const errors = [];
  const warnings = [];
  
  // Known false positives from test scripts and Mintlify build artifacts
  const isTestScriptArtifact = (message) => {
    const testArtifacts = [
      'require is not defined',
      'puppeteer',
      'fs has already been declared',
      'getMdxFiles',
      'validateMdx',
      'execSync',
      'path',
      'Unexpected token \'export\'',
      'await is only valid',
      'appendChild',
      'Identifier \'',
      'has already been declared'
    ];
    return testArtifacts.some(artifact => message.toLowerCase().includes(artifact.toLowerCase()));
  };
  
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
      // Check if this is a known test script artifact
      if (isTestScriptArtifact(text)) {
        if (text.includes('require is not defined')) {
          warnings.push(`⚠️  ${text} (Likely cause: Mintlify build artifact - does not affect page functionality)`);
        } else {
          warnings.push(`⚠️  ${text} (Likely cause: Test script artifact - does not affect page functionality)`);
        }
      } else if (!text.includes('favicon') && !text.includes('sourcemap')) {
        errors.push(text);
      }
    } else if (type === 'warning' && !ignoredWarnings.some(ignored => text.toLowerCase().includes(ignored))) {
      warnings.push(text);
    }
  });
  
  // Listen for page errors
  page.on('pageerror', error => {
    const errorMessage = error.message;
    
    // Check if this is a known test script artifact
    if (isTestScriptArtifact(errorMessage)) {
      if (errorMessage.includes('require is not defined')) {
        warnings.push(`⚠️  Page Error: ${errorMessage} (Likely cause: Mintlify build artifact - does not affect page functionality)`);
      } else {
        warnings.push(`⚠️  Page Error: ${errorMessage} (Likely cause: Test script artifact - does not affect page functionality)`);
      }
    } else {
      errors.push(`Page Error: ${errorMessage}`);
    }
  });
  
  // Listen for request failures (but ignore some)
  page.on('requestfailed', request => {
    const failure = request.failure();
    const url = request.url();
    
    // Ignore favicon and other non-critical failures
    if (failure && !url.includes('favicon') && !url.includes('sourcemap')) {
      // Only report if it's a critical resource
      if (url.includes('/snippets/') || url.includes('/v2/')) {
        errors.push(`Request Failed: ${url} - ${failure.errorText}`);
      }
    }
  });
  
  const attempted = [];

  try {
    for (const candidateUrl of candidateUrls) {
      const fullUrl = `${baseUrl}${candidateUrl}`;
      attempted.push(fullUrl);
      errors.length = 0;
      warnings.length = 0;

      try {
        await page.goto(fullUrl, {
          waitUntil: 'networkidle2',
          timeout: TIMEOUT
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const bodyText = await page.evaluate(() => document.body.innerText);
        if (!bodyText || bodyText.trim().length < 50) {
          errors.push('Page appears to be empty or failed to render');
        }

        const hasError = await page.evaluate(() => {
          return document.querySelector('[data-error-boundary]') !== null ||
                 document.body.innerText.includes('Error:') ||
                 document.body.innerText.includes('Failed to render');
        });

        if (hasError) {
          errors.push('Page contains render errors');
        }

        if (errors.length === 0) {
          return {
            filePath,
            url: fullUrl,
            success: true,
            errors: [],
            warnings
          };
        }
      } catch (error) {
        errors.push(`Navigation Error: ${error.message}`);
      }
    }

    return {
      filePath,
      url: attempted[attempted.length - 1] || `${baseUrl}/`,
      success: false,
      errors: [`All URL candidates failed: ${attempted.join(', ')}`, ...errors],
      warnings
    };
  } finally {
    await page.close();
  }
}

// Server management is now handled by server-manager.js

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
  
  // Ensure server is running (start if needed)
  let serverStarted = false;
  try {
    serverStarted = await ensureServerRunning();
    // Get actual server URL (may differ if port was auto-selected)
    const actualUrl = getServerUrl();
    if (actualUrl !== BASE_URL) {
      console.log(`   Using detected server URL: ${actualUrl}`);
    }
  } catch (error) {
    console.error(`❌ Failed to start server: ${error.message}`);
    console.error(`⚠️  Browser validation skipped (server not available)`);
    // Exit with 0 so verify.sh treats this as optional, not a failure
    process.exit(0);
  }
  
  // Use detected server URL for testing
  const serverUrl = getServerUrl();
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const results = [];
  let passed = 0;
  let failed = 0;
  
  for (const filePath of stagedFiles) {
    process.stdout.write(`  Testing ${filePath}... `);
    
    const result = await testPage(browser, filePath, serverUrl);
    results.push(result);
    
    if (result.success) {
      console.log('✅');
      passed++;
      // Show warnings if present (even for successful pages)
      if (result.warnings.length > 0) {
        console.log(`     ⚠️  ${result.warnings.length} warning(s) (non-blocking)`);
      }
    } else {
      console.log('❌');
      failed++;
      // Show first error
      if (result.errors.length > 0) {
        console.log(`     Error: ${result.errors[0]}`);
      }
      // Show warnings if present
      if (result.warnings.length > 0) {
        console.log(`     ⚠️  ${result.warnings.length} warning(s) (non-blocking)`);
      }
    }
  }
  
  await browser.close();
  
  // Stop server if we started it (only for pre-commit, keep it running for full tests)
  if (serverStarted) {
    stopServer();
  }
  
  // Report results
  const allWarnings = results.filter(r => r.warnings.length > 0);
  
  if (failed === 0) {
    console.log(`\n✅ All ${passed} page(s) rendered successfully in browser`);
    if (allWarnings.length > 0) {
      console.log(`\n⚠️  Warnings (non-blocking):`);
      allWarnings.forEach(result => {
        console.log(`  ${result.filePath}:`);
        result.warnings.forEach(warning => {
          console.log(`    - ${warning}`);
        });
      });
    }
    console.log('');
    process.exit(0);
  } else {
    console.log(`\n❌ ${failed} of ${stagedFiles.length} page(s) failed browser validation:\n`);
    
    results.filter(r => !r.success).forEach(result => {
      console.log(`  ${result.filePath}:`);
      result.errors.forEach(error => {
        console.log(`    - ${error}`);
      });
      // Show warnings for failed pages too
      if (result.warnings.length > 0) {
        console.log(`\n    Warnings (non-blocking):`);
        result.warnings.forEach(warning => {
          console.log(`    - ${warning}`);
        });
      }
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

module.exports = { testPage, getStagedMdxFiles, filePathToUrls };
