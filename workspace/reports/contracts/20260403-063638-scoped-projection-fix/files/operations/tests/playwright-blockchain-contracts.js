#!/usr/bin/env node
/**
 * @script playwright-blockchain-contracts
 * @type automation
 * @concern testing
 * @niche render/page
 * @description CP-7: Verifies the blockchain-contracts page renders from generated pipeline data,
 *              separates L2Migrator proxy and target addresses, and avoids stale hardcoded status claims.
 * @usage node operations/tests/playwright-blockchain-contracts.js
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const {
  ensureFreshBundleBaseUrl
} = require('./contracts-validator-contract');

const PAGE_DATA = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', '..', 'snippets', 'data', 'contract-addresses', 'blockchainContractsPageData.json'),
    'utf8'
  )
);
const L2_MIGRATOR = PAGE_DATA.contracts['l2-migrator'];
const MERKLE_SNAPSHOT = PAGE_DATA.contracts['merkle-snapshot'];
const FAUCET = PAGE_DATA.contracts['livepeer-token-faucet'];
const STALE_TEXT = [
  'Last active Feb 2026',
  'No activity since deployment',
  '~600 transactions',
  'undefined',
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeError(message) {
  return String(message || '').replace(/\s+/g, ' ').trim();
}

function filterNoise(errors) {
  return errors
    .map(normalizeError)
    .filter(Boolean)
    .filter(
      (message) =>
        !message.includes('favicon') &&
        !message.includes('rss.xml') &&
        !message.includes('apple-touch-icon') &&
        !message.includes('Failed to load resource: the server responded with a status of 404')
    );
}

async function waitForPage(page) {
  await page.waitForFunction(
    () => {
      const text = document.body?.innerText || '';
      return text.includes('Blockchain contracts') && text.includes('Core Protocol Contracts') && text.includes('L2Migrator');
    },
    { timeout: 60000 }
  );
}

async function getAccordionHtmlMap(page) {
  return page.evaluate(() => {
    const entries = {};
    Array.from(document.querySelectorAll('details')).forEach((element) => {
      const titleNode = element.querySelector('[data-component-part="accordion-title"]');
      const title = titleNode?.textContent?.trim();
      if (title) {
        entries[title] = element.innerHTML;
      }
    });
    return entries;
  });
}

async function main() {
  const baseUrl = await ensureFreshBundleBaseUrl({
    probePath: '/v2/about/livepeer-protocol/blockchain-contracts'
  });
  const pageUrl = `${baseUrl}/v2/about/livepeer-protocol/blockchain-contracts`;
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  try {
    await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitForPage(page);
    await page.evaluate(() => {
      document.querySelectorAll('details').forEach((element) => {
        element.open = true;
      });
    });
    await sleep(1500);

    const bodyText = await page.$eval('body', (el) => el.textContent || '');
    const bodyHtml = await page.content();
    const accordions = await getAccordionHtmlMap(page);
    const l2MigratorHtml = accordions.L2Migrator || '';
    const merkleSnapshotHtml = accordions.MerkleSnapshot || '';
    const faucetHtml = accordions.LivepeerTokenFaucet || '';
    const livepeerGovernorHtml = accordions.LivepeerGovernor || '';
    const hasL2MigratorProxyLabel =
      l2MigratorHtml.includes('Proxy Address (Arbitrum One)') &&
      l2MigratorHtml.includes(L2_MIGRATOR.proxyAddress);
    const hasL2MigratorTargetLabel =
      l2MigratorHtml.includes('Current Target (Arbitrum One)') &&
      l2MigratorHtml.includes(L2_MIGRATOR.targetAddress);
    const hasMerkleSnapshot =
      merkleSnapshotHtml.includes('MerkleSnapshot') &&
      merkleSnapshotHtml.includes(MERKLE_SNAPSHOT.currentAddress);
    const hasUnsupportedFaucetNote = faucetHtml.includes(FAUCET.unsupportedNote);
    const hasGeneratedFunctions =
      livepeerGovernorHtml.includes('Governor.stage') &&
      livepeerGovernorHtml.includes('Governor.execute') &&
      l2MigratorHtml.includes('claimStake');
    const hasSourceLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]')).some((link) =>
        link.href.includes('github.com/livepeer/') || link.href.includes('raw.githubusercontent.com/livepeer/')
      )
    );
    const hasNoStaleText = STALE_TEXT.every((text) => !bodyText.includes(text) && !bodyHtml.includes(text));
    const unexpectedErrors = filterNoise(errors);

    console.log('\n── CP-7 Results ──────────────────────────────────');
    console.log(`Page URL:              ${pageUrl}`);
    console.log(`L2Migrator proxy OK:   ${hasL2MigratorProxyLabel}`);
    console.log(`L2Migrator target OK:  ${hasL2MigratorTargetLabel}`);
    console.log(`MerkleSnapshot OK:     ${hasMerkleSnapshot}`);
    console.log(`Faucet unsupported:    ${hasUnsupportedFaucetNote}`);
    console.log(`Functions generated:   ${hasGeneratedFunctions}`);
    console.log(`Source links present:  ${hasSourceLinks}`);
    console.log(`No stale text:         ${hasNoStaleText}`);
    if (unexpectedErrors.length > 0) {
      console.log('Unexpected errors:');
      unexpectedErrors.forEach((error) => console.log(`  - ${error}`));
    }
    console.log('──────────────────────────────────────────────────');

    const passed =
      hasL2MigratorProxyLabel &&
      hasL2MigratorTargetLabel &&
      hasMerkleSnapshot &&
      hasUnsupportedFaucetNote &&
      hasGeneratedFunctions &&
      hasSourceLinks &&
      hasNoStaleText &&
      unexpectedErrors.length === 0;

    console.log(passed ? 'CP-7 PASS — blockchain-contracts renders from generated pipeline data.' : 'CP-7 FAIL — see above.');
    process.exit(passed ? 0 : 1);
  } finally {
    await page.close();
    await browser.close();
  }
}

main();
