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
        !message.includes('Minified React error #418') &&
        !message.includes('Failed to load resource: the server responded with a status of 404')
    );
}

async function closePageQuietly(page) {
  if (!page) {
    return;
  }

  try {
    if (!page.isClosed()) {
      await page.close();
    }
  } catch (error) {
    const message = normalizeError(error.message);
    if (
      !message.includes('Target.closeTarget') &&
      !message.includes('Session closed') &&
      !message.includes('Connection closed')
    ) {
      throw error;
    }
  }
}

async function closeBrowserQuietly(browser) {
  if (!browser) {
    return;
  }

  try {
    await browser.close();
  } catch (error) {
    const message = normalizeError(error.message);
    if (
      !message.includes('Target.closeTarget') &&
      !message.includes('Session closed') &&
      !message.includes('Connection closed')
    ) {
      throw error;
    }
  }
}

async function waitForPage(page) {
  await page.waitForFunction(
    () => {
      const bodyText = document.body?.innerText || '';
      const h1Text = document.querySelector('h1')?.textContent?.trim() || '';
      return (
        h1Text.includes('Blockchain Contracts') &&
        bodyText.includes('Core Protocol Contracts') &&
        bodyText.includes('L2Migrator')
      );
    },
    { timeout: 60000 }
  );
}

async function main() {
  const baseUrl = await ensureFreshBundleBaseUrl({
    probePath: '/v2/about/livepeer-protocol/blockchain-contracts'
  });
  const pageUrl = `${baseUrl}/v2/about/livepeer-protocol/blockchain-contracts`;
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(`${err.message}${err.stack ? ` | ${normalizeError(err.stack)}` : ''}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const location = typeof msg.location === 'function' ? msg.location() : null;
      const locationSuffix =
        location?.url ? ` @ ${location.url}:${location.lineNumber || 0}:${location.columnNumber || 0}` : '';
      errors.push(`${msg.text()}${locationSuffix}`);
    }
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
    const hasConceptSections =
      bodyText.includes('Core Protocol Contracts') &&
      bodyText.includes('Governance Contracts') &&
      bodyText.includes('Migration Contracts');
    const hasL2MigratorAddress = bodyText.includes(L2_MIGRATOR.proxyAddress);
    const hasMerkleSnapshotAddress = bodyText.includes(MERKLE_SNAPSHOT.currentAddress);
    const hasUnsupportedFaucetNote = bodyText.includes(FAUCET.unsupportedNote);
    const hasGeneratedFunctions =
      bodyText.includes('claimStake') &&
      bodyText.includes('verify') &&
      bodyText.includes('stage') &&
      bodyText.includes('execute');
    const hasSourceLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]')).some((link) =>
        link.href.includes('github.com/livepeer/') || link.href.includes('raw.githubusercontent.com/livepeer/')
      )
    );
    const hasNoStaleText = STALE_TEXT.every((text) => !bodyText.includes(text));
    const unexpectedErrors = filterNoise(errors);

    console.log('\n── CP-7 Results ──────────────────────────────────');
    console.log(`Page URL:              ${pageUrl}`);
    console.log(`Concept sections OK:   ${hasConceptSections}`);
    console.log(`L2Migrator address OK: ${hasL2MigratorAddress}`);
    console.log(`MerkleSnapshot OK:     ${hasMerkleSnapshotAddress}`);
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
      hasConceptSections &&
      hasL2MigratorAddress &&
      hasMerkleSnapshotAddress &&
      hasUnsupportedFaucetNote &&
      hasGeneratedFunctions &&
      hasSourceLinks &&
      hasNoStaleText &&
      unexpectedErrors.length === 0;

    console.log(passed ? 'CP-7 PASS — blockchain-contracts renders from generated pipeline data.' : 'CP-7 FAIL — see above.');
    process.exit(passed ? 0 : 1);
  } finally {
    await closePageQuietly(page);
    await closeBrowserQuietly(browser);
  }
}

main();
