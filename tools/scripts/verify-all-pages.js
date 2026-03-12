/**
 * @script            verify-all-pages
 * @category          enforcer
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Loads component-library routes in a headless browser and fails on render, console, or 404 issues.
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/verify-all-pages.js
 */
const puppeteer = require('puppeteer');

const BASE_URL = 'http://localhost:3333';
const PAGES = [
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/component-library',
      '/v2/resources/documentation-guide/component-library/overview'
    ],
    name: 'Component Library'
  },
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/primitives',
      '/v2/resources/documentation-guide/component-library/primitives'
    ],
    name: 'Primitives'
  },
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/content',
      '/v2/resources/documentation-guide/component-library/content'
    ],
    name: 'Content'
  },
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/layout',
      '/v2/resources/documentation-guide/component-library/layout'
    ],
    name: 'Layout'
  },
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/data',
      '/v2/resources/documentation-guide/component-library/data'
    ],
    name: 'Data'
  },
  {
    paths: [
      '/v2/resources/documentation-guide/component-library/page-structure',
      '/v2/resources/documentation-guide/component-library/page-structure'
    ],
    name: 'Page Structure'
  },
];

async function verifyPage(paths, name) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  const errors = [];
  const warnings = [];
  
  page.on('console', msg => {
    const text = msg.text();
    if (msg.type() === 'error') {
      errors.push(text);
    } else if (msg.type() === 'warning') {
      warnings.push(text);
    }
  });
  
  page.on('pageerror', error => {
    errors.push(error.toString());
  });
  
  try {
    console.log(`\n🔍 Verifying: ${name}`);
    const pathCandidates = Array.isArray(paths) ? paths : [paths];
    let lastErrors = [];

    for (const pathCandidate of pathCandidates) {
      const url = `${BASE_URL}${pathCandidate}`;
      console.log(`   URL: ${url}`);

      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(resolve => setTimeout(resolve, 5000));

      const title = await page.title().catch(() => '');
      const bodyText = await page.evaluate(() => {
        const body = document.body;
        if (!body) return '';
        return body.innerText || '';
      }).catch(() => '');

      const hasH1 = await page.$('h1') !== null;
      const hasContent = bodyText.length > 500;
      const is404 = title.includes('Page Not Found') || bodyText.includes('Page Not Found');
      const httpStatus = response.status();

      const realErrors = errors.filter(err => {
        const lower = err.toLowerCase();
        return !lower.includes('require is not defined') &&
               !lower.includes('puppeteer') &&
               !lower.includes('fs has already been declared') &&
               !lower.includes('unexpected token \'export\'') &&
               !lower.includes('identifier \'') &&
               !lower.includes('appendchild') &&
               !lower.includes('failed to execute') &&
               !lower.includes('403') &&
               !lower.includes('500') &&
               !lower.includes('favicon');
      });

      console.log(`   HTTP Status: ${httpStatus}`);
      console.log(`   Title: ${title.substring(0, 60)}`);
      console.log(`   Body Text Length: ${bodyText.length} chars`);
      console.log(`   Has H1: ${hasH1}`);
      console.log(`   Has Content: ${hasContent}`);
      console.log(`   Is 404: ${is404}`);
      console.log(`   Real Errors: ${realErrors.length}`);

      if (is404 || !hasContent || !hasH1 || httpStatus >= 400) {
        lastErrors = realErrors;
        continue;
      }

      if (realErrors.length > 0) {
        console.log(`   ⚠️  PAGE RENDERS BUT HAS ERRORS`);
        return { success: false, errors: realErrors, path: pathCandidate };
      }

      console.log(`   ✅ PAGE RENDERS CORRECTLY`);
      return { success: true, errors: [], path: pathCandidate };
    }

    console.log(`   ❌ PAGE NOT RENDERING`);
    return { success: false, errors: lastErrors };
    
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return { success: false, errors: [error.message] };
  } finally {
    await page.close();
    await browser.close();
  }
}

async function main() {
  console.log('🔍 Verifying ALL component library pages in browser...\n');
  
  const results = [];
  for (const pageSpec of PAGES) {
    const result = await verifyPage(pageSpec.paths, pageSpec.name);
    results.push({ ...pageSpec, ...result });
  }
  
  console.log('\n📊 Summary:');
  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  console.log(`   ✅ Passed: ${passed}/${PAGES.length}`);
  console.log(`   ❌ Failed: ${failed}/${PAGES.length}`);
  
  if (failed > 0) {
    console.log('\n❌ Failed Pages:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.name}: ${r.path || r.paths.join(' | ')}`);
      if (r.errors.length > 0) {
        console.log(`     Errors: ${r.errors.length}`);
        r.errors.slice(0, 2).forEach(err => {
          console.log(`       - ${err.substring(0, 150)}`);
        });
      }
    });
    process.exit(1);
  } else {
    console.log('\n✅ ALL PAGES RENDER CORRECTLY!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
