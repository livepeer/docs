/**
 * @script            inspect-video-page
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Video page inspector — displays video-specific metadata and embed configuration for a page
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/inspect-video-page.js [flags]
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Test a page that should have YouTube video
  const testUrl = 'http://localhost:3000/introduction/vision';
  console.log(`Testing: ${testUrl}\n`);
  
  await page.goto(testUrl, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 5000)); // Wait longer for React to render
  
  // Check for iframes with various selectors
  const iframeInfo = await page.evaluate(() => {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    return iframes.map(iframe => ({
      src: iframe.src || '',
      dataSrc: iframe.getAttribute('data-src') || '',
      id: iframe.id || '',
      className: iframe.className || '',
      parent: iframe.parentElement?.tagName || ''
    }));
  });
  
  console.log('Iframes found:', iframeInfo.length);
  iframeInfo.forEach((info, i) => {
    console.log(`\nIframe ${i+1}:`, JSON.stringify(info, null, 2));
  });
  
  // Check for YouTubeVideo component in React
  const componentInfo = await page.evaluate(() => {
    // Look for elements that might contain YouTube embeds
    const possibleContainers = Array.from(document.querySelectorAll('[class*="video"], [class*="youtube"], [class*="embed"]'));
    return possibleContainers.map(el => ({
      tag: el.tagName,
      className: el.className,
      innerHTML: el.innerHTML.substring(0, 200)
    }));
  });
  
  console.log('\nPossible video containers:', componentInfo.length);
  componentInfo.slice(0, 3).forEach((info, i) => {
    console.log(`\nContainer ${i+1}:`, JSON.stringify(info, null, 2));
  });
  
  // Check page source for embed URLs
  const pageSource = await page.content();
  const embedUrlMatches = pageSource.match(/youtube[^"'\s<>]*embed[^"'\s<>]*/gi) || [];
  console.log('\nEmbed URL patterns found:', embedUrlMatches.slice(0, 5));
  
  await browser.close();
})();
