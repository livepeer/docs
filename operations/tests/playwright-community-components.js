/**
 * @script playwright-community-components
 * @description Verifies community page components render without errors across all solution pages
 * @usage node operations/tests/playwright-community-components.js
 */

const puppeteer = require('/opt/homebrew/lib/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3333';
const DAYDREAM_FILE = path.resolve(__dirname, '../../v2/solutions/daydream/community.mdx');
const WAIT_AFTER_EDIT = 6000;

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function testPage(browser, url, testName) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(3000); // hydration settle

    const bodyText = await page.$eval('body', el => el.textContent);
    const hasContent = bodyText.length > 200; // more than just metadata
    const crashed = !hasContent;

    return {
      testName,
      url,
      crashed,
      errors: errors.filter(e => !e.includes('favicon') && !e.includes('404')),
      bodyLength: bodyText.length
    };
  } catch (e) {
    return { testName, url, crashed: true, errors: [e.message], bodyLength: 0 };
  } finally {
    await page.close();
  }
}

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  // ===== PHASE 1: Test Daydream community page component by component =====
  console.log('\n===== PHASE 1: Daydream community — component-by-component =====\n');
  const original = fs.readFileSync(DAYDREAM_FILE, 'utf8');

  // Test 0: Baseline
  console.log('TEST 0: Baseline...');
  results.push(await testPage(browser, `${BASE_URL}/v2/solutions/daydream/community`, 'Daydream: Baseline'));

  // Test 1: Uncomment DiscordAnnouncements with Livepeer data
  console.log('TEST 1: DiscordAnnouncements (Livepeer data)...');
  let modified = original.replace(
    '{/* <DiscordAnnouncements items={discordAnnouncementsData} limit={2} /> */}',
    '<DiscordAnnouncements items={discordAnnouncementsData} limit={2} />'
  );
  fs.writeFileSync(DAYDREAM_FILE, modified);
  await sleep(WAIT_AFTER_EDIT);
  results.push(await testPage(browser, `${BASE_URL}/v2/solutions/daydream/community`, 'Daydream: DiscordAnnouncements (Livepeer data)'));
  fs.writeFileSync(DAYDREAM_FILE, original);
  await sleep(WAIT_AFTER_EDIT);

  // Test 2: Uncomment DiscordAnnouncements with Daydream data
  console.log('TEST 2: DiscordAnnouncements (Daydream data)...');
  modified = original.replace(
    '{/* <DiscordAnnouncements items={discordAnnouncementsData} limit={2} /> */}',
    '<DiscordAnnouncements items={daydreamDiscordData} limit={3} />'
  );
  fs.writeFileSync(DAYDREAM_FILE, modified);
  await sleep(WAIT_AFTER_EDIT);
  results.push(await testPage(browser, `${BASE_URL}/v2/solutions/daydream/community`, 'Daydream: DiscordAnnouncements (Daydream data)'));
  fs.writeFileSync(DAYDREAM_FILE, original);
  await sleep(WAIT_AFTER_EDIT);

  // Test 3: Uncomment ALL sections (MarkdownEmbed + static + CardGroup)
  console.log('TEST 3: ALL sections uncommented...');
  modified = original
    .replace(
      '{/* <DiscordAnnouncements items={discordAnnouncementsData} limit={2} /> */}',
      '<DiscordAnnouncements items={daydreamDiscordData} limit={3} />'
    )
    .replace('{/*\n', '\n')
    .replace('</CardGroup> */}', '</CardGroup>');
  fs.writeFileSync(DAYDREAM_FILE, modified);
  await sleep(WAIT_AFTER_EDIT);
  results.push(await testPage(browser, `${BASE_URL}/v2/solutions/daydream/community`, 'Daydream: ALL uncommented'));
  fs.writeFileSync(DAYDREAM_FILE, original);
  await sleep(WAIT_AFTER_EDIT);

  // ===== PHASE 2: Test ALL other pages using these components =====
  console.log('\n===== PHASE 2: Other pages using DiscordAnnouncements + MarkdownEmbed =====\n');

  const otherPages = [
    { path: '/v2/community/livepeer-community/trending-topics', name: 'trending-topics (Discord+Blog)' },
    { path: '/v2/home/trending', name: 'home/trending (Discord+Blog)' },
    { path: '/v2/solutions/livepeer-studio/community', name: 'livepeer-studio community (Discord+MarkdownEmbed)' },
    { path: '/v2/solutions/frameworks/community', name: 'frameworks community (MarkdownEmbed)' },
    { path: '/v2/solutions/streamplace/community', name: 'streamplace community (MarkdownEmbed)' },
    { path: '/v2/solutions/embody/community', name: 'embody community (MarkdownEmbed)' },
  ];

  for (const p of otherPages) {
    console.log(`Testing: ${p.name}...`);
    results.push(await testPage(browser, `${BASE_URL}${p.path}`, p.name));
  }

  await browser.close();

  // Print results
  console.log('\n\n========== RESULTS ==========\n');
  let passed = 0, failed = 0;
  for (const r of results) {
    const hasRealErrors = r.errors.length > 0;
    const status = r.crashed ? 'CRASHED' : (hasRealErrors ? 'ERRORS' : 'OK');
    if (status === 'OK') passed++; else failed++;
    const icon = status === 'OK' ? '✓' : '✗';
    console.log(`${icon} [${status}] ${r.testName}`);
    if (hasRealErrors) {
      r.errors.forEach(e => console.log(`    Error: ${e.substring(0, 120)}`));
    }
  }
  console.log(`\n  ${passed} passed, ${failed} failed\n`);

  // Ensure original is restored
  fs.writeFileSync(DAYDREAM_FILE, original);

  process.exit(failed > 0 ? 1 : 0);
}

run().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
