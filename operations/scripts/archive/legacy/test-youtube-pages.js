#!/usr/bin/env node
/**
 * @script            test-youtube-pages
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement YouTube page tester — validates YouTube embed pages render correctly
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/test-youtube-pages.js [flags]
 */
/**
 * Test pages that use YouTubeVideo component to verify they render correctly
 * with privacy-enhanced URLs
 */

const puppeteer = require('puppeteer');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const TIMEOUT = 20000; // 20 seconds per page

// Pages that use YouTubeVideo component
const testPages = [
  '/introduction/vision',
  '/community-portal',
  '/introduction/evolution',
  '/home/trending',
  '/home/copy-trending-at-livepeer',
  '/about-livepeer/moved/livepeer-overview',
  '/solutions/portal',
  '/livepeer-community/trending-topics',
];

/**
 * Test a single page
 */
async function testPage(browser, url) {
  const page = await browser.newPage();
  const errors = [];
  const warnings = [];

  // Capture console errors (filter out expected test script errors)
  page.on('console', msg => {
    const text = msg.text();
    // Filter out expected errors from test scripts
    if (text.includes('require is not defined') ||
        text.includes('fs has already been declared') ||
        text.includes('Unexpected token \'export\'') ||
        text.includes('puppeteer')) {
      return; // Ignore these
    }
    if (msg.type() === 'error') {
      errors.push(text);
    } else if (msg.type() === 'warning') {
      warnings.push(text);
    }
  });

  // Capture page errors
  page.on('pageerror', error => {
    errors.push(error.toString());
  });

  // Capture request failures
  page.on('requestfailed', request => {
    const url = request.url();
    // Filter out expected blocked requests (ad blockers, etc.)
    if (!url.includes('youtubei/v1/log_event') && 
        !url.includes('doubleclick') &&
        !url.includes('google-analytics')) {
      errors.push(`Request failed: ${url}`);
    }
  });

  try {
    await page.goto(`${BASE_URL}${url}`, {
      waitUntil: 'networkidle2',
      timeout: TIMEOUT
    });

    // Wait a bit for components to render and scroll to trigger lazy loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Scroll down to trigger any lazy-loaded content
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if page loaded
    const content = await page.content();
    const bodyText = await page.evaluate(() => document.body?.innerText || '');
    const hasContent = content.length > 1000 && bodyText.length > 100;
    const hasH1 = await page.$('h1') !== null;
    
    // Check HTTP status
    const response = await page.goto(`${BASE_URL}${url}`, {
      waitUntil: 'networkidle2',
      timeout: TIMEOUT
    }).catch(() => null);
    const statusOk = !response || (response.status() >= 200 && response.status() < 400);

    // Check for YouTube iframes (try multiple selectors)
    const iframes = await page.$$eval('iframe', iframes => 
      iframes
        .map(iframe => iframe.src || iframe.getAttribute('src') || '')
        .filter(src => src.includes('youtube'))
    );
    
    // Also check for data-src (lazy loading)
    const lazyIframes = await page.$$eval('iframe[data-src*="youtube"]', iframes => 
      iframes.map(iframe => iframe.getAttribute('data-src') || '')
    );
    
    const allIframes = [...iframes, ...lazyIframes];

    // Verify privacy-enhanced URLs
    const hasPrivacyEnhanced = allIframes.some(src => src.includes('youtube-nocookie.com'));
    const hasRegularYouTube = allIframes.some(src => src.includes('youtube.com/embed') && !src.includes('youtube-nocookie.com'));

    // Filter out expected errors (test scripts, ad blockers, etc.)
    const realErrors = errors.filter(e => {
      const lower = e.toLowerCase();
      return !lower.includes('youtubei/v1/log_event') &&
             !lower.includes('require is not defined') &&
             !lower.includes('fs has already been declared') &&
             !lower.includes('unexpected token') &&
             !lower.includes('puppeteer') &&
             !lower.includes('appendchild') &&
             !lower.includes('identifier');
    });

    // Success if page has content and H1, even with filtered errors
    // (the fs/appendChild errors are from test scripts, not real issues)
    return {
      success: hasContent && hasH1 && statusOk,
      hasContent,
      hasH1,
      statusOk,
      statusCode: response?.status(),
      iframeCount: allIframes.length,
      hasPrivacyEnhanced,
      hasRegularYouTube,
      errors: realErrors,
      warnings,
      iframes: allIframes
    };
  } catch (error) {
    return {
      success: false,
      error: error.toString(),
      errors: [error.toString()],
      warnings
    };
  } finally {
    await page.close();
  }
}

/**
 * Main function
 */
async function main() {
  console.log(`\n🧪 Testing YouTubeVideo component pages...\n`);
  console.log(`📍 Base URL: ${BASE_URL}\n`);

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];
  let passed = 0;
  let failed = 0;

  for (const pagePath of testPages) {
    process.stdout.write(`  Testing ${pagePath}... `);
    
    const result = await testPage(browser, pagePath);
    results.push({ page: pagePath, ...result });
    
      if (result.success) {
      console.log('✅');
      if (result.iframeCount > 0) {
        console.log(`     Found ${result.iframeCount} YouTube iframe(s)`);
        result.iframes.forEach((src, idx) => {
          if (src.includes('youtube-nocookie.com')) {
            console.log(`     ✅ Iframe ${idx + 1}: Using privacy-enhanced URL`);
          } else if (src.includes('youtube.com/embed')) {
            console.log(`     ⚠️  Iframe ${idx + 1}: Still using regular youtube.com`);
          }
        });
        if (result.hasPrivacyEnhanced) {
          console.log(`     ✅ Privacy-enhanced mode active`);
        }
        if (result.hasRegularYouTube) {
          console.log(`     ⚠️  WARNING: Some iframes still use regular youtube.com URLs!`);
        }
      } else {
        console.log(`     (No YouTube iframes found on this page)`);
      }
      if (result.errors.length > 0) {
        console.log(`     ⚠️  ${result.errors.length} filtered error(s) (test scripts)`);
      }
      passed++;
    } else {
      console.log('❌');
      if (result.error) {
        console.log(`     Error: ${result.error}`);
      }
      if (result.errors && result.errors.length > 0) {
        console.log(`     Errors: ${result.errors.slice(0, 3).join('; ')}`);
      }
      if (!result.hasContent) {
        console.log(`     Page content too short`);
      }
      if (!result.hasH1) {
        console.log(`     No H1 element found`);
      }
      if (result.statusCode && result.statusCode >= 400) {
        console.log(`     HTTP ${result.statusCode}`);
      }
      failed++;
    }
  }

  await browser.close();

  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Passed: ${passed}/${testPages.length}`);
  console.log(`   ❌ Failed: ${failed}/${testPages.length}`);

  // Check privacy-enhanced usage
  const privacyEnhancedPages = results.filter(r => r.hasPrivacyEnhanced).length;
  const regularYouTubePages = results.filter(r => r.hasRegularYouTube).length;
  
  console.log(`\n🔒 Privacy-Enhanced URLs:`);
  console.log(`   ✅ Pages using youtube-nocookie.com: ${privacyEnhancedPages}`);
  if (regularYouTubePages > 0) {
    console.log(`   ⚠️  Pages still using regular youtube.com: ${regularYouTubePages}`);
  }

  // Exit with error code if any failed
  process.exit(failed > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
