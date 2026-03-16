/**
 * @script            inspect-page
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Page inspector — displays parsed metadata, frontmatter, components, and structure for a single page
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/inspect-page.js [flags]
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/introduction/vision', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));
  
  // Check all iframes
  const allIframes = await page.$$eval('iframe', iframes => 
    iframes.map(iframe => ({
      src: iframe.src || iframe.getAttribute('src') || '',
      dataSrc: iframe.getAttribute('data-src') || '',
      className: iframe.className || ''
    }))
  );
  
  console.log('All iframes found:', allIframes.length);
  allIframes.forEach((iframe, i) => {
    console.log(`Iframe ${i+1}:`, iframe);
  });
  
  // Check page HTML for youtube
  const html = await page.content();
  const youtubeMatches = html.match(/youtube[^"'\\s]*/gi) || [];
  console.log('\nYouTube references in HTML (first 10):', youtubeMatches.slice(0, 10));
  
  // Check for specific video component
  const hasVideoComponent = html.includes('youtube') || html.includes('YouTubeVideo');
  console.log('\nHas YouTube references:', hasVideoComponent);
  
  await browser.close();
})();
