/**
 * @script playwright-contract-addresses
 * @type automation
 * @concern testing
 * @niche render/page
 * @description CP-6: Verifies the canonical contract-addresses page and legacy redirects render
 *              fully against a local Mint preview. Validates the active table, widget controls,
 *              and redirect contract.
 * @usage node operations/tests/playwright-contract-addresses.js
 */

const puppeteer = require('puppeteer');

const BASE_URL = process.env.CONTRACTS_TEST_BASE_URL || 'http://localhost:3334';
const CANONICAL_URL = `${BASE_URL}/v2/about/resources/livepeer-contract-addresses`;
const CONTROL_URL = `${BASE_URL}/v1/developers/introduction`;
const EXPECTED_LOOKUP_ADDRESSES = {
  arbitrumOne: '0x289ba1701c2f088cf0faf8b3705246331cb8a839',
  ethereumMainnet: '0x58b6a8a3302369daec383334672404ee733ab239',
};

const PAGES = [
  {
    name: 'contract-addresses (canonical)',
    url: CANONICAL_URL,
    expectRedirect: false,
  },
  {
    name: 'contract-addresses (legacy redirect)',
    url: `${BASE_URL}/references/contract-addresses`,
    expectRedirect: true,
  },
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

async function clickButtonByText(page, text) {
  const buttons = await page.$$('button');
  for (const button of buttons) {
    const buttonText = await page.evaluate(
      (element) => element.textContent.trim(),
      button
    );
    if (buttonText === text) {
      await button.click();
      return true;
    }
  }

  return false;
}

async function getWidgetText(page) {
  return page.evaluate(() => {
    const lookupButton = Array.from(document.querySelectorAll('button')).find(
      (button) => button.textContent.trim() === 'Look up'
    );

    if (!lookupButton) return '';

    let node = lookupButton;
    while (node && node !== document.body) {
      if (
        node.innerText.includes('Look up contract') &&
        node.innerText.includes('Verify address')
      ) {
        return node.innerText;
      }
      node = node.parentElement;
    }

    return '';
  });
}

async function waitForContractsPage(page) {
  await page.waitForFunction(
    () => document.body?.innerText.includes('Canonical Contract Addresses'),
    { timeout: 60000 }
  );
  await page.waitForFunction(
    () => document.querySelectorAll('table').length >= 3,
    { timeout: 60000 }
  );
  await page.waitForFunction(
    () =>
      Array.from(document.querySelectorAll('button')).some(
        (button) => button.textContent.trim() === 'Look up'
      ),
    { timeout: 60000 }
  );
  await page.waitForSelector('select[aria-label="Contract name"]', {
    timeout: 60000,
  });
}

async function captureBaselineErrors(browser) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  try {
    await page.goto(CONTROL_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(5000);
    return new Set(filterNoise(errors));
  } finally {
    await page.close();
  }
}

async function testWidgetFlows(page) {
  const initialLookupDisabled = await page.evaluate(() => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (element) => element.textContent.trim() === 'Look up'
    );
    return button ? button.disabled : null;
  });

  await page.select('select[aria-label="Contract name"]', 'LivepeerToken');
  await page.waitForFunction(() => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (element) => element.textContent.trim() === 'Look up'
    );
    return Boolean(button) && button.disabled === false;
  });

  await clickButtonByText(page, 'Look up');
  await page.waitForFunction(
    ({ arbitrumOne, ethereumMainnet }) => {
      const lookupButton = Array.from(document.querySelectorAll('button')).find(
        (button) => button.textContent.trim() === 'Look up'
      );
      if (!lookupButton) return false;

      let node = lookupButton;
      while (node && node !== document.body) {
        if (
          node.innerText.includes('Look up contract') &&
          node.innerText.includes('Verify address')
        ) {
          return (
            node.innerText.includes(arbitrumOne) &&
            node.innerText.includes(ethereumMainnet) &&
            node.innerText.includes('Arbitrum One') &&
            node.innerText.includes('Ethereum Mainnet')
          );
        }
        node = node.parentElement;
      }

      return false;
    },
    { timeout: 30000 },
    EXPECTED_LOOKUP_ADDRESSES
  );

  const lookupWidgetText = await getWidgetText(page);
  const lookupDualChain =
    lookupWidgetText.includes(EXPECTED_LOOKUP_ADDRESSES.arbitrumOne) &&
    lookupWidgetText.includes(EXPECTED_LOOKUP_ADDRESSES.ethereumMainnet) &&
    lookupWidgetText.includes('Arbitrum One') &&
    lookupWidgetText.includes('Ethereum Mainnet');

  await clickButtonByText(page, 'Verify address');
  await page.waitForSelector('input[aria-label="Contract address"]', {
    timeout: 10000,
  });
  await page.type(
    'input[aria-label="Contract address"]',
    EXPECTED_LOOKUP_ADDRESSES.ethereumMainnet
  );
  await clickButtonByText(page, 'Verify');
  await page.waitForFunction(
    (expectedAddress) => {
      const lookupButton = Array.from(document.querySelectorAll('button')).find(
        (button) => button.textContent.trim() === 'Look up'
      );
      if (!lookupButton) return false;

      let node = lookupButton;
      while (node && node !== document.body) {
        if (
          node.innerText.includes('Look up contract') &&
          node.innerText.includes('Verify address')
        ) {
          return (
            node.innerText.includes(expectedAddress) &&
            node.innerText.includes('LivepeerToken') &&
            node.innerText.includes('Ethereum Mainnet')
          );
        }
        node = node.parentElement;
      }

      return false;
    },
    { timeout: 30000 },
    EXPECTED_LOOKUP_ADDRESSES.ethereumMainnet
  );

  const verifyWidgetText = await getWidgetText(page);
  const verifyCrossReference =
    verifyWidgetText.includes(EXPECTED_LOOKUP_ADDRESSES.ethereumMainnet) &&
    verifyWidgetText.includes('LivepeerToken') &&
    verifyWidgetText.includes('Ethereum Mainnet');

  return {
    initialLookupDisabled,
    lookupDualChain,
    verifyCrossReference,
  };
}

async function testPage(browser, { name, url, expectRedirect }, baselineErrors) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await waitForContractsPage(page);

    const finalUrl = page.url();
    const redirectOk = expectRedirect ? finalUrl === CANONICAL_URL : true;
    const bodyText = await page.$eval('body', (el) => el.textContent);
    const hasContent = bodyText.length > 200;
    const tableCount = await page.evaluate(
      () => document.querySelectorAll('table').length
    );
    const hasProxyHeaderContract = await page.evaluate(() => {
      const tables = Array.from(document.querySelectorAll('table'));
      return tables.some((table) => {
        const headers = Array.from(table.querySelectorAll('thead th')).map((cell) =>
          cell.textContent.trim()
        );
        return JSON.stringify(headers) === JSON.stringify([
          'Name',
          'Proxy',
          'Proxy Address',
          'Chain',
          'Target',
          'Target Address',
        ]);
      });
    });
    const hasHistoricalContent = bodyText.includes('Historical Contract Addresses')
      && (bodyText.includes('JobsManager') || bodyText.includes('LivepeerVerifier') || bodyText.includes('MerkleProof'));
    const hasAddress = await page.evaluate(() => {
      const cells = document.querySelectorAll('td, tr');
      return Array.from(cells).some((el) =>
        /0x[0-9a-fA-F]{10,}/.test(el.textContent)
      );
    });

    const widget = await testWidgetFlows(page);
    const unexpectedErrors = filterNoise(errors).filter(
      (message) => !baselineErrors.has(message)
    );

    return {
      name,
      url,
      passed:
        hasContent &&
        tableCount >= 3 &&
        hasAddress &&
        hasProxyHeaderContract &&
        hasHistoricalContent &&
        redirectOk &&
        widget.initialLookupDisabled === true &&
        widget.lookupDualChain === true &&
        widget.verifyCrossReference === true &&
        unexpectedErrors.length === 0,
      hasContent,
      tableCount,
      hasAddress,
      hasProxyHeaderContract,
      hasHistoricalContent,
      bodyLength: bodyText.length,
      finalUrl,
      redirectOk,
      widget,
      baselineErrors: Array.from(baselineErrors),
      unexpectedErrors,
      rawErrors: filterNoise(errors),
    };
  } catch (e) {
    return {
      name,
      url,
      passed: false,
      hasContent: false,
      tableCount: 0,
      hasAddress: false,
      bodyLength: 0,
      finalUrl: null,
      redirectOk: false,
      widget: {
        initialLookupDisabled: null,
        lookupDualChain: false,
        verifyCrossReference: false,
      },
      hasProxyHeaderContract: false,
      hasHistoricalContent: false,
      baselineErrors: Array.from(baselineErrors),
      unexpectedErrors: [normalizeError(e.message)],
      rawErrors: filterNoise(errors),
    };
  } finally {
    await page.close();
  }
}

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const results = [];
  const baselineErrors = await captureBaselineErrors(browser);

  for (const p of PAGES) {
    console.log(`Testing: ${p.name} ...`);
    const result = await testPage(browser, p, baselineErrors);
    results.push(result);
  }

  await browser.close();

  console.log('\n── CP-6 Results ──────────────────────────────────');
  let allPassed = true;
  for (const r of results) {
    const status = r.passed ? 'PASS' : 'FAIL';
    console.log(`\n[${status}] ${r.name}`);
    console.log(`  URL:          ${r.url}`);
    console.log(`  Final URL:    ${r.finalUrl}`);
    console.log(`  Body length:  ${r.bodyLength}`);
    console.log(`  Tables:       ${r.tableCount}`);
    console.log(`  Has address:  ${r.hasAddress}`);
    console.log(`  Proxy header: ${r.hasProxyHeaderContract}`);
    console.log(`  Historical:   ${r.hasHistoricalContent}`);
    console.log(`  Redirect OK:  ${r.redirectOk}`);
    console.log(`  Lookup init disabled: ${r.widget.initialLookupDisabled}`);
    console.log(`  Lookup dual-chain:    ${r.widget.lookupDualChain}`);
    console.log(`  Verify cross-ref:     ${r.widget.verifyCrossReference}`);
    if (r.unexpectedErrors.length > 0) {
      console.log(`  Unexpected errors:`);
      r.unexpectedErrors.forEach((e) => console.log(`    - ${e}`));
    }
    if (r.rawErrors.length > 0) {
      console.log(`  Raw errors seen:`);
      r.rawErrors.forEach((e) => console.log(`    - ${e}`));
    }
    if (!r.passed) allPassed = false;
  }

  console.log('\n──────────────────────────────────────────────────');
  console.log(allPassed ? 'CP-6 PASS — all contract-addresses pages render correctly.' : 'CP-6 FAIL — see above.');
  process.exit(allPassed ? 0 : 1);
}

main();
