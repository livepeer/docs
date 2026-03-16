/**
 * @script            find-correct-url
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Diagnostic — given a broken URL, attempts to find the correct v2 equivalent
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/find-correct-url.js [flags]
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Try different URL patterns based on docs.json structure
  const urls = [
    '/home/introduction/vision',
    '/introduction/vision', 
    '/home/introduction/vision',
  ];
  
  for (const url of urls) {
    try {
      console.log(`\nTrying: ${url}`);
      await page.goto('http://localhost:3000' + url, { waitUntil: 'networkidle2', timeout: 5000 });
      const title = await page.title();
      const hasH1 = await page.$('h1') !== null;
      console.log(`  Title: ${title}`);
      console.log(`  Has H1: ${hasH1}`);
      
      if (title !== 'Page Not Found' && hasH1) {
        console.log(`  ✅ Found correct page!`);
        // Wait for components to render
        await new Promise(r => setTimeout(r, 3000));
        
        // Check for iframes
        const iframes = await page.$$eval('iframe', iframes => 
          iframes.map(iframe => iframe.src).filter(src => src.includes('youtube'))
        );
        console.log(`  YouTube iframes found: ${iframes.length}`);
        iframes.forEach((src, i) => {
          const isPrivacyEnhanced = src.includes('youtube-nocookie.com');
          console.log(`    ${i+1}: ${isPrivacyEnhanced ? '✅' : '❌'} ${src.substring(0, 80)}...`);
        });
        break;
      }
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
  
  await browser.close();
})();
