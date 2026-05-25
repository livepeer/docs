/**
 * @script playwright-studio-docs-migration
 * @description Verifies all Livepeer Studio docs pages load (HTTP 200) and render
 *              content after the subfolder migration into /docs.
 * @usage       Start scoped dev server first:
 *                lpd dev --scoped --scope-version v2 --scope-language en --scope-tab Solutions
 *              Then run:
 *                node operations/tests/playwright-studio-docs-migration.js
 */

const puppeteer = require('/opt/homebrew/lib/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3333';
const SCOPED_NAV = path.resolve(__dirname, '../../tools/config/scoped-navigation/docs-solutions.json');

function extractStudioPaths(navObj, paths = []) {
  if (!navObj || typeof navObj !== 'object') return paths;

  if (Array.isArray(navObj)) {
    for (const item of navObj) {
      if (typeof item === 'string' && item.includes('livepeer-studio')) {
        paths.push(item);
      } else if (typeof item === 'object') {
        extractStudioPaths(item, paths);
      }
    }
  } else {
    for (const val of Object.values(navObj)) {
      extractStudioPaths(val, paths);
    }
  }
  return paths;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function testPage(browser, pagePath) {
  const url = `${BASE_URL}/${pagePath}`;
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  try {
    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(2000); // hydration settle

    const status = response ? response.status() : 0;
    const bodyText = await page.$eval('body', el => el.innerText);
    const hasContent = bodyText.length > 200;
    const has404Text = bodyText.toLowerCase().includes('page not found') ||
                       /\b404\b/.test(bodyText);

    return {
      path: pagePath,
      url,
      status,
      hasContent,
      has404Text,
      bodyLength: bodyText.length,
      errors: errors.filter(e => !e.includes('favicon')),
      pass: status === 200 && hasContent && !has404Text,
    };
  } catch (e) {
    return {
      path: pagePath,
      url,
      status: 0,
      hasContent: false,
      has404Text: false,
      bodyLength: 0,
      errors: [e.message],
      pass: false,
    };
  } finally {
    await page.close();
  }
}

async function run() {
  // Parse scoped navigation to get all livepeer-studio paths
  const navJson = JSON.parse(fs.readFileSync(SCOPED_NAV, 'utf8'));
  const allPaths = extractStudioPaths(navJson);
  const uniquePaths = [...new Set(allPaths)];

  console.log(`\n${'='.repeat(70)}`);
  console.log(`  Studio Docs Migration — Page Load Test`);
  console.log(`  Base URL: ${BASE_URL}`);
  console.log(`  Pages to test: ${uniquePaths.length}`);
  console.log(`${'='.repeat(70)}\n`);

  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  for (let i = 0; i < uniquePaths.length; i++) {
    const p = uniquePaths[i];
    process.stdout.write(`  [${i + 1}/${uniquePaths.length}] ${p} ... `);
    const result = await testPage(browser, p);
    results.push(result);
    console.log(result.pass ? 'PASS' : `FAIL (status=${result.status}, body=${result.bodyLength}, 404text=${result.has404Text})`);
  }

  await browser.close();

  // Summary
  const passed = results.filter(r => r.pass);
  const failed = results.filter(r => !r.pass);

  console.log(`\n${'='.repeat(70)}`);
  console.log(`  RESULTS: ${passed.length} passed, ${failed.length} failed out of ${results.length} pages`);
  console.log(`${'='.repeat(70)}`);

  if (failed.length > 0) {
    console.log('\n  FAILED PAGES:');
    for (const f of failed) {
      console.log(`    ${f.path}`);
      console.log(`      URL: ${f.url}`);
      console.log(`      Status: ${f.status}, Body: ${f.bodyLength} chars, 404 text: ${f.has404Text}`);
      if (f.errors.length) console.log(`      Errors: ${f.errors.join('; ')}`);
    }
    console.log('');
    process.exit(1);
  } else {
    console.log('\n  All pages loaded successfully with content.\n');
    process.exit(0);
  }
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
