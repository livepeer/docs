/**
 * @script playwright-contract-addresses
 * @type automation
 * @concern testing
 * @niche render/page
 * @description CP-6: Verifies the canonical contract-addresses reference page, its composable-import wrappers,
 *              the embedded verifier widget, and the legacy redirect against a local Mint preview.
 * @usage node operations/tests/playwright-contract-addresses.js
 */

const puppeteer = require('puppeteer');
const {
  ensureFreshBundleBaseUrl
} = require('./contracts-validator-contract');

const CANONICAL_ROUTE = '/v2/about/resources/livepeer-contract-addresses';
const VERIFIER_FRAGMENT = '#verifier-widget-verify-contract-address';
const RESOURCE_HUB_ROUTE = '/v2/resources/references/contract-addresses';
const GATEWAYS_ROUTE = '/v2/gateways/resources/reference/technical/contract-addresses';
const ORCHESTRATORS_ROUTE = '/v2/orchestrators/resources/reference/technical/contract-addresses';
const LEGACY_REDIRECT_ROUTE = '/references/contract-addresses';
const EXPECTED_LOOKUP_ADDRESSES = {
  arbitrumOne: '0x289ba1701c2f088cf0faf8b3705246331cb8a839',
  ethereumMainnet: '0x58b6a8a3302369daec383334672404ee733ab239',
};

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

function isScopedRecoveryValidation() {
  return [
    process.env.CONTRACTS_TEST_SCOPED,
    process.env.MINT_SCOPE_PREFIXES,
    process.env.MINT_SCOPE_TABS,
    process.env.LPD_MINT_SCOPE_PREFIXES,
  ].some((value) => Boolean(String(value || '').trim()));
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

async function waitForReferencePage(page) {
  await page.waitForFunction(
    () => {
      const bodyText = document.body?.innerText || '';
      const h1Text = document.querySelector('h1')?.textContent?.trim() || '';
      return (
        h1Text.includes('Contract Addresses') &&
        bodyText.includes('Active Contract Addresses') &&
        bodyText.includes('Historical Contract Addresses')
      );
    },
    { timeout: 60000 }
  );
  await page.waitForFunction(
    () => document.querySelectorAll('table').length >= 2,
    { timeout: 60000 }
  );
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
      const text = document.body?.innerText || '';
      return (
        text.includes('MATCH') &&
        text.includes(arbitrumOne) &&
        text.includes(ethereumMainnet) &&
        text.includes('Arbitrum One') &&
        text.includes('Ethereum Mainnet')
      );
    },
    { timeout: 45000 },
    EXPECTED_LOOKUP_ADDRESSES
  );

  const lookupWidgetText = await page.$eval('body', (element) => element.innerText || '');
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
      const text = document.body?.innerText || '';
      return (
        text.includes('MATCH') &&
        text.includes(expectedAddress) &&
        text.includes('LivepeerToken') &&
        text.includes('Ethereum Mainnet')
      );
    },
    { timeout: 45000 },
    EXPECTED_LOOKUP_ADDRESSES.ethereumMainnet
  );

  const verifyWidgetText = await page.$eval('body', (element) => element.innerText || '');
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

async function openPage(browser, url) {
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
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  return { page, errors };
}

async function testReferencePage(browser, { name, url, expectRedirect, canonicalUrl }) {
  let lastResult = null;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const { page, errors } = await openPage(browser, url);

    try {
      await waitForReferencePage(page);

      const finalUrl = page.url();
      const redirectOk = expectRedirect ? finalUrl === canonicalUrl : true;
      const bodyText = await page.$eval('body', (el) => el.textContent || '');
      const hasContent = bodyText.length > 200;
      const tableCount = await page.evaluate(() => document.querySelectorAll('table').length);
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
      const hasHistoricalSection = bodyText.includes('Historical Contract Addresses');
      const hasManualVerificationSection = bodyText.includes('No-Trust On-chain Address Verification');
      const hasAddress = /0x[0-9a-fA-F]{10,}/.test(bodyText);
      const hasVerifierLink = await page.evaluate((verifierFragment) =>
        Array.from(document.querySelectorAll('a[href]')).some((link) =>
          link.getAttribute('href') === verifierFragment || link.href.endsWith(verifierFragment)
        ),
        VERIFIER_FRAGMENT
      );
      const hasWidgetControls = await page.evaluate(() => Boolean(document.querySelector('select[aria-label="Contract name"]')));
      const hasLookUpButton = await page.evaluate(() =>
        Array.from(document.querySelectorAll('button')).some(
          (button) => button.textContent.trim() === 'Look up'
        )
      );
      const widget = url === canonicalUrl ? await testWidgetFlows(page) : null;
      const unexpectedErrors = filterNoise(errors);

      lastResult = {
        kind: 'reference',
        name,
        url,
        finalUrl,
        passed:
          hasContent &&
          tableCount >= 2 &&
          hasAddress &&
          hasProxyHeaderContract &&
          hasHistoricalSection &&
          hasManualVerificationSection &&
          hasVerifierLink &&
          hasWidgetControls === true &&
          hasLookUpButton === true &&
          (widget
            ? widget.initialLookupDisabled === true &&
              widget.lookupDualChain === true &&
              widget.verifyCrossReference === true
            : true) &&
          redirectOk &&
          unexpectedErrors.length === 0,
        hasContent,
        tableCount,
        hasAddress,
        hasProxyHeaderContract,
        hasHistoricalSection,
        hasManualVerificationSection,
        hasVerifierLink,
        hasWidgetControls,
        hasLookUpButton,
        widget,
        redirectOk,
        bodyLength: bodyText.length,
        unexpectedErrors,
        rawErrors: filterNoise(errors),
      };
    } catch (error) {
      lastResult = {
        kind: 'reference',
        name,
        url,
        finalUrl: null,
        passed: false,
        hasContent: false,
        tableCount: 0,
        hasAddress: false,
        hasProxyHeaderContract: false,
        hasHistoricalSection: false,
        hasManualVerificationSection: false,
        hasVerifierLink: false,
        hasWidgetControls: null,
        hasLookUpButton: null,
        widget: null,
        redirectOk: false,
        bodyLength: 0,
        unexpectedErrors: [normalizeError(error.message)],
        rawErrors: filterNoise(errors),
      };
    } finally {
      await closePageQuietly(page);
    }

    const timedOut = lastResult.unexpectedErrors.some((message) => message.includes('Waiting failed'));
    if (lastResult.passed || !timedOut || attempt === 2) {
      return lastResult;
    }
  }

  return lastResult;
}

async function main() {
  const baseUrl = await ensureFreshBundleBaseUrl({
    probePath: CANONICAL_ROUTE
  });
  const canonicalUrl = `${baseUrl}${CANONICAL_ROUTE}`;
  const pages = [
    {
      kind: 'reference',
      name: 'contract-addresses (canonical)',
      url: canonicalUrl,
      canonicalUrl,
      expectRedirect: false,
    },
    {
      kind: 'reference',
      name: 'contract-addresses (resource hub)',
      url: `${baseUrl}${RESOURCE_HUB_ROUTE}`,
      canonicalUrl,
      expectRedirect: false,
    },
    {
      kind: 'reference',
      name: 'contract-addresses (gateways)',
      url: `${baseUrl}${GATEWAYS_ROUTE}`,
      canonicalUrl,
      expectRedirect: false,
    },
    {
      kind: 'reference',
      name: 'contract-addresses (orchestrators)',
      url: `${baseUrl}${ORCHESTRATORS_ROUTE}`,
      canonicalUrl,
      expectRedirect: false,
    },
  ];

  if (!isScopedRecoveryValidation()) {
    pages.push({
      kind: 'reference',
      name: 'contract-addresses (legacy redirect)',
      url: `${baseUrl}${LEGACY_REDIRECT_ROUTE}`,
      canonicalUrl,
      expectRedirect: true,
    });
  }

  const results = [];

  for (const pageSpec of pages) {
    console.log(`Testing: ${pageSpec.name} ...`);
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const result = await testReferencePage(browser, pageSpec);
      results.push(result);
    } finally {
      await closeBrowserQuietly(browser);
    }
  }

  console.log('\n── CP-6 Results ──────────────────────────────────');
  let allPassed = true;
  for (const result of results) {
    const status = result.passed ? 'PASS' : 'FAIL';
    console.log(`\n[${status}] ${result.name}`);
    console.log(`  URL:          ${result.url}`);
    console.log(`  Final URL:    ${result.finalUrl}`);
    console.log(`  Body length:  ${result.bodyLength}`);

    if (result.kind === 'reference') {
      console.log(`  Tables:       ${result.tableCount}`);
      console.log(`  Has address:  ${result.hasAddress}`);
      console.log(`  Proxy header: ${result.hasProxyHeaderContract}`);
      console.log(`  Historical:   ${result.hasHistoricalSection}`);
      console.log(`  Manual steps: ${result.hasManualVerificationSection}`);
      console.log(`  Verifier link:${result.hasVerifierLink}`);
      console.log(`  Widget select:${result.hasWidgetControls}`);
      console.log(`  Widget button:${result.hasLookUpButton}`);
      if (result.widget) {
        console.log(`  Lookup init disabled: ${result.widget.initialLookupDisabled}`);
        console.log(`  Lookup dual-chain:    ${result.widget.lookupDualChain}`);
        console.log(`  Verify cross-ref:     ${result.widget.verifyCrossReference}`);
      }
      console.log(`  Redirect OK:  ${result.redirectOk}`);
    }

    if (result.unexpectedErrors.length > 0) {
      console.log('  Unexpected errors:');
      result.unexpectedErrors.forEach((error) => console.log(`    - ${error}`));
    }
    if (result.rawErrors.length > 0) {
      console.log('  Raw errors seen:');
      result.rawErrors.forEach((error) => console.log(`    - ${error}`));
    }
    if (!result.passed) allPassed = false;
  }

  console.log('\n──────────────────────────────────────────────────');
  console.log(
    allPassed
      ? 'CP-6 PASS — contracts reference surfaces and embedded verifier render correctly.'
      : 'CP-6 FAIL — see above.'
  );
  process.exit(allPassed ? 0 : 1);
}

main();
