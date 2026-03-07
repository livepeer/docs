/**
 * @script verify-pages
 * @summary Utility script for tools/scripts/verify-pages.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/verify-pages.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/verify-pages.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
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
