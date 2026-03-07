/**
 * @script check-component-errors
 * @summary Utility script for tools/scripts/test/check-component-errors.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/test/check-component-errors.js
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
 *   node tools/scripts/test/check-component-errors.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
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
  
  await page.goto('http://localhost:3000/introduction/vision', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000));
  
  // Check if component rendered by looking for Frame component (YouTubeVideo uses Frame)
  const frameElements = await page.$$eval('[class*="frame"], [class*="Frame"]', els => els.length);
  console.log('Frame elements found:', frameElements);
  
  // Check page title to confirm it loaded
  const title = await page.title();
  console.log('Page title:', title);
  
  // Check for React hydration errors
  console.log('\nConsole errors (filtered):');
  const realErrors = errors.filter(e => 
    !e.includes('require is not defined') &&
    !e.includes('fs has already been declared') &&
    !e.includes('appendChild') &&
    !e.includes('puppeteer')
  );
  realErrors.forEach(err => console.log('  -', err));
  
  // Get the actual rendered HTML around where YouTubeVideo should be
  const videoSection = await page.evaluate(() => {
    const bodyText = document.body.innerText;
    const youtubeIndex = bodyText.indexOf('Core Mission');
    return {
      hasCoreMission: youtubeIndex > -1,
      bodyLength: bodyText.length,
      htmlLength: document.body.innerHTML.length
    };
  });
  
  console.log('\nPage content:', videoSection);
  
  // Check if privacy-enhanced URLs are in the source
  const source = await page.content();
  const hasNocookie = source.includes('youtube-nocookie.com');
  const hasRegularEmbed = source.includes('youtube.com/embed');
  
  console.log('\nURL check:');
  console.log('  Has youtube-nocookie.com:', hasNocookie);
  console.log('  Has youtube.com/embed:', hasRegularEmbed);
  
  await browser.close();
})();
