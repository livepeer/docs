const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const p = await browser.newPage();
  const errors = [];
  p.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      if (!text.includes('require') && !text.includes('puppeteer') && !text.includes('fs') && !text.includes('test')) {
        errors.push(text);
      }
    }
  });
  await p.goto('http://localhost:3333/v2/pages/07_resources/documentation-guide/component-library/domain', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 5000));
  const result = await p.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    return { 
      length: main.innerText.length, 
      h1: document.querySelector('h1')?.innerText || '',
      hasFfmpeg: main.innerText.includes('FfmpegWarning'),
      hasPortal: main.innerText.includes('Portal Components'),
      hasShared: main.innerText.includes('Shared Components'),
    };
  });
  console.log(`Domain page:`);
  console.log(`  Content: ${result.length} chars`);
  console.log(`  H1: ${result.h1}`);
  console.log(`  Has FfmpegWarning: ${result.hasFfmpeg}`);
  console.log(`  Has Portal Components: ${result.hasPortal}`);
  console.log(`  Has Shared Components: ${result.hasShared}`);
  console.log(`  Errors: ${errors.length}`);
  if (errors.length > 0) {
    errors.forEach(e => console.log(`    - ${e.substring(0, 150)}`));
  }
  console.log(`  Status: ${result.length > 1000 && errors.length === 0 ? '✅ OK' : '❌ ERRORS'}`);
  await browser.close();
})();
