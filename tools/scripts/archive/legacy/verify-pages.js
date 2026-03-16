/**
 * @script            verify-pages
 * @category          enforcer
 * @purpose           qa:repo-health
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Page verifier — checks a subset of pages resolve to valid files
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/verify-pages.js [flags]
 */
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const pathCandidates = [
    'http://localhost:3333/v2/resources/documentation-guide/component-library/domain',
    'http://localhost:3333/v2/resources/documentation-guide/component-library/domain'
  ];

  try {
    let content = 0;
    for (const url of pathCandidates) {
      const response = await page.goto(url, { waitUntil: 'networkidle0' });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const status = response ? response.status() : 0;
      content = await page.evaluate(() => (document.querySelector('main') || document.body).innerText.length);
      if (status < 400 && content > 100) {
        console.log(`Domain page content: ${content} chars (${url})`);
        return;
      }
    }
    console.log(`Domain page content: ${content} chars (no valid route found)`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
