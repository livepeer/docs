/**
 * @script final-verification
 * @summary Utility script for tools/scripts/test/final-verification.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/test/final-verification.js
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
 *   node tools/scripts/test/final-verification.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const testPages = [
    { path: '/introduction/vision', name: 'Vision' },
    { path: '/community-portal', name: 'Community Portal' },
    { path: '/introduction/evolution', name: 'Evolution' },
  ];
  
  console.log('🧪 Final Verification of YouTubeVideo Component\n');
  
  for (const { path, name } of testPages) {
    console.log(`\n📄 Testing: ${name} (${path})`);
    
    try {
      await page.goto(`http://localhost:3000${path}`, { 
        waitUntil: 'networkidle2', 
        timeout: 15000 
      });
      
      // Wait for React to render
      await new Promise(r => setTimeout(r, 4000));
      
      // Scroll to trigger lazy loading
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 2000));
      
      // Check page content
      const bodyText = await page.evaluate(() => document.body.innerText || '');
      const hasContent = bodyText.length > 500;
      
      // Check for YouTube iframes (all iframes, then filter)
      const allIframes = await page.$$eval('iframe', iframes => 
        iframes.map(iframe => ({
          src: iframe.src || '',
          hasYoutube: (iframe.src || '').includes('youtube'),
          isPrivacyEnhanced: (iframe.src || '').includes('youtube-nocookie.com')
        }))
      );
      
      const youtubeIframes = allIframes.filter(iframe => iframe.hasYoutube);
      
      console.log(`  ✅ Page loaded: ${hasContent ? 'Yes' : 'No'} (${bodyText.length} chars)`);
      console.log(`  📺 Total iframes: ${allIframes.length}`);
      console.log(`  🎥 YouTube iframes: ${youtubeIframes.length}`);
      
      if (youtubeIframes.length > 0) {
        youtubeIframes.forEach((iframe, i) => {
          const status = iframe.isPrivacyEnhanced ? '✅' : '❌';
          const url = iframe.src.substring(0, 70);
          console.log(`    ${status} Iframe ${i+1}: ${url}...`);
        });
      } else {
        // Check HTML source for YouTube references
        const html = await page.content();
        const hasNocookieInSource = html.includes('youtube-nocookie.com');
        const hasRegularInSource = html.includes('youtube.com/embed') && !html.includes('youtube-nocookie.com');
        
        if (hasNocookieInSource) {
          console.log(`  ✅ Privacy-enhanced URLs found in page source`);
        }
        if (hasRegularInSource) {
          console.log(`  ⚠️  Regular YouTube URLs still in source`);
        }
        if (!hasNocookieInSource && !hasRegularInSource) {
          console.log(`  ℹ️  No YouTube URLs found (page may not have videos)`);
        }
      }
      
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
    }
  }
  
  await browser.close();
  console.log('\n✅ Verification complete!\n');
})();
