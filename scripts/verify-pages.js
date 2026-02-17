const puppeteer = require('puppeteer');
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto('http://localhost:3333/v2/pages/07_resources/documentation-guide/component-library/domain', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 3000));
const content = await page.evaluate(() => (document.querySelector('main') || document.body).innerText.length);
console.log(`Domain page content: ${content} chars`);
await browser.close();
