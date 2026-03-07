#!/usr/bin/env node
/**
 * @script            test-mintlify-version-language-toggle
 * @category          enforcer
 * @purpose           feature:translation
 * @scope             tools/scripts/i18n, docs.json, v2
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Mintlify language toggle checker — validates Mintlify version supports language toggle feature
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/i18n/test-mintlify-version-language-toggle.js [flags]
 */

const puppeteer = require('puppeteer');

function parseArgs(argv) {
  const args = {
    baseUrl: 'http://localhost:3000',
    timeoutMs: 120000,
    strictMenus: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];
    if (token === '--base-url') {
      args.baseUrl = String(next || args.baseUrl).trim();
      i += 1;
    } else if (token === '--timeout-ms') {
      const parsed = Number(next);
      if (Number.isFinite(parsed) && parsed > 0) args.timeoutMs = parsed;
      i += 1;
    } else if (token === '--strict-menus') {
      args.strictMenus = true;
    } else if (token === '--help' || token === '-h') {
      console.log(
        [
          'Usage: node tools/scripts/i18n/test-mintlify-version-language-toggle.js [options]',
          '',
          'Options:',
          '  --base-url <url>      Mint preview base URL (default http://localhost:3000)',
          '  --timeout-ms <n>      Navigation timeout (default 120000)',
          '  --strict-menus        Fail if menu contents cannot be confirmed in headless mode',
          '  --help, -h            Show help'
        ].join('\n')
      );
      process.exit(0);
    }
  }
  return args;
}

function buildTextMatchers(values) {
  return values.map((value) => String(value || '').trim()).filter(Boolean);
}

function textListContains(texts, expected) {
  const needle = String(expected || '').trim();
  if (!needle) return false;
  return texts.some((text) => {
    const value = String(text || '').trim();
    if (!value) return false;
    return value === needle || value.includes(needle) || value.startsWith(`${needle}\n`) || value.endsWith(`\n${needle}`);
  });
}

async function collectTexts(page, { visibleOnly = false } = {}) {
  return page.evaluate((opts) => {
    const els = Array.from(document.querySelectorAll('button,a,[role="menuitem"]'));
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && styles.display !== 'none' && styles.visibility !== 'hidden';
    };
    return els
      .filter((el) => (opts.visibleOnly ? isVisible(el) : true))
      .map((el) => (el.innerText || el.textContent || '').trim())
      .filter(Boolean);
  }, { visibleOnly });
}

async function findVersionTriggerText(page) {
  return page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && styles.display !== 'none' && styles.visibility !== 'hidden';
    };
    const trigger =
      btns.find((b) => isVisible(b) && /^(v1|v2)$/i.test((b.innerText || b.textContent || '').trim())) ||
      btns.find((b) => /^(v1|v2)$/i.test((b.innerText || b.textContent || '').trim()));
    return trigger ? (trigger.innerText || trigger.textContent || '').trim() : '';
  });
}

async function clickTrigger(page, patternSource) {
  return page.evaluate((source) => {
    const pattern = new RegExp(source, 'i');
    const btns = Array.from(document.querySelectorAll('button'));
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && styles.display !== 'none' && styles.visibility !== 'hidden';
    };
    const btn =
      btns.find((b) => isVisible(b) && pattern.test((b.innerText || b.textContent || '').trim())) ||
      btns.find((b) => pattern.test((b.innerText || b.textContent || '').trim()));
    if (!btn) return { ok: false, text: '' };
    btn.click();
    return { ok: true, text: (btn.innerText || btn.textContent || '').trim() };
  }, patternSource);
}

async function clickVersionTrigger(page) {
  return clickTrigger(page, '^(v1|v2)$');
}

async function clickLanguageTrigger(page) {
  return clickTrigger(page, '(English|Espa\u00f1ol|Fran\u00e7ais|\u4e2d\u6587|Chinese|Spanish|French)');
}

function assertCondition(condition, message, failures) {
  if (!condition) failures.push(message);
}

function normalizeUrl(url) {
  return String(url || '').replace(/\/+$/, '');
}

function expectedTargetVersion(currentVersion) {
  return currentVersion === 'v2' ? 'v1' : 'v2';
}

async function maybeAssertMenuItems({ scenario, page, failures, warnings, strictMenus }) {
  const versionClick = await clickVersionTrigger(page);
  if (!versionClick.ok) {
    if (strictMenus) failures.push(`${scenario.name}: version trigger not found for menu check`);
    else warnings.push(`${scenario.name}: version trigger menu could not be opened in headless preview`);
    return;
  }
  await new Promise((r) => setTimeout(r, 500));
  const menuTexts = await collectTexts(page);
  const expectedItems = buildTextMatchers(scenario.requiredVersionMenuItems || []);
  for (const item of expectedItems) {
    if (!textListContains(menuTexts, item)) {
      if (strictMenus) failures.push(`${scenario.name}: version menu missing "${item}"`);
      else warnings.push(`${scenario.name}: could not confirm version menu item "${item}" in headless preview`);
    }
  }
}

async function maybeAssertLanguageItems({ scenario, page, failures, warnings, strictMenus }) {
  const languageClick = await clickLanguageTrigger(page);
  if (!languageClick.ok) {
    if (strictMenus) failures.push(`${scenario.name}: language trigger not found`);
    else warnings.push(`${scenario.name}: language trigger could not be opened in headless preview`);
    return;
  }
  await new Promise((r) => setTimeout(r, 500));
  const menuTexts = await collectTexts(page);
  const expectedItems = buildTextMatchers(scenario.requiredLanguageMenuItems || []);
  for (const item of expectedItems) {
    if (!textListContains(menuTexts, item)) {
      if (strictMenus) failures.push(`${scenario.name}: language menu missing "${item}"`);
      else warnings.push(`${scenario.name}: could not confirm language menu item "${item}" in headless preview`);
    }
  }
}

async function tryVersionSwitch(page, scenario, failures, warnings, timeoutMs, strictMenus) {
  const currentVersion = scenario.expectedVersionTrigger;
  const targetVersion = expectedTargetVersion(currentVersion);
  const versionClick = await clickVersionTrigger(page);
  if (!versionClick.ok) {
    if (strictMenus) failures.push(`${scenario.name}: version trigger not found for switch attempt`);
    else warnings.push(`${scenario.name}: version switch not attempted (trigger not found in headless preview)`);
    return null;
  }
  await new Promise((r) => setTimeout(r, 500));
  const targetClicked = await page.evaluate((target) => {
    const nodes = Array.from(document.querySelectorAll('button,a,[role="menuitem"]'));
    const isVisible = (el) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && styles.display !== 'none' && styles.visibility !== 'hidden';
    };
    const pick =
      nodes.find((node) => isVisible(node) && new RegExp(`^${target}$`, 'i').test((node.innerText || node.textContent || '').trim())) ||
      nodes.find((node) => new RegExp(`^${target}$`, 'i').test((node.innerText || node.textContent || '').trim()));
    if (!pick) return false;
    pick.click();
    return true;
  }, targetVersion);

  if (!targetClicked) {
    if (strictMenus) failures.push(`${scenario.name}: could not click version menu item ${targetVersion}`);
    else warnings.push(`${scenario.name}: could not click version menu item ${targetVersion} in headless preview`);
    return null;
  }

  try {
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: timeoutMs });
  } catch {
    await new Promise((r) => setTimeout(r, 1200));
  }

  const switchedUrl = page.url();
  if (!String(switchedUrl).includes(`/${targetVersion}/`)) {
    failures.push(`${scenario.name}: version switch did not navigate to /${targetVersion}/ (got ${switchedUrl})`);
  }
  return switchedUrl;
}

async function runScenario(page, scenario, failures, warnings, timeoutMs, strictMenus) {
  const pageErrors = [];
  page.removeAllListeners('pageerror');
  page.on('pageerror', (err) => pageErrors.push(err.message));

  await page.goto(scenario.url, { waitUntil: 'networkidle2', timeout: timeoutMs });
  await new Promise((r) => setTimeout(r, 800));
  const currentUrl = page.url();
  assertCondition(
    normalizeUrl(currentUrl) === normalizeUrl(scenario.url),
    `${scenario.name}: expected URL ${scenario.url}, got ${currentUrl}`,
    failures
  );

  const versionTrigger = await findVersionTriggerText(page);
  assertCondition(
    versionTrigger === scenario.expectedVersionTrigger,
    `${scenario.name}: expected version trigger ${scenario.expectedVersionTrigger}, got ${versionTrigger || '(missing)'}`,
    failures
  );

  const visibleTexts = await collectTexts(page, { visibleOnly: true });

  if (scenario.expectLanguageMenu) {
    await maybeAssertLanguageItems({ scenario, page, failures, warnings, strictMenus });
  }
  await maybeAssertMenuItems({ scenario, page, failures, warnings, strictMenus });
  const switchedUrl = await tryVersionSwitch(page, scenario, failures, warnings, timeoutMs, strictMenus);

  return {
    name: scenario.name,
    url: currentUrl,
    versionTrigger,
    switchedUrl,
    pageErrorCount: pageErrors.length,
    pageErrorSample: pageErrors.slice(0, 5),
    visibleTextSample: visibleTexts.slice(0, 20)
  };
}

async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const baseUrl = args.baseUrl.replace(/\/+$/, '');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const failures = [];
  const warnings = [];
  const results = [];

  try {
    const scenarios = [
      {
        name: 'v2 es localized route',
        url: `${baseUrl}/v2/es/home/mission-control`,
        expectedVersionTrigger: 'v2',
        requiredVersionMenuItems: ['v1', 'v2'],
        expectLanguageMenu: true,
        requiredLanguageMenuItems: ['English', 'Español', 'Français', '中文']
      },
      {
        name: 'v2 fr localized route',
        url: `${baseUrl}/v2/fr/home/mission-control`,
        expectedVersionTrigger: 'v2',
        requiredVersionMenuItems: ['v1', 'v2'],
        expectLanguageMenu: true,
        requiredLanguageMenuItems: ['English', 'Español', 'Français', '中文']
      },
      {
        name: 'v2 cn localized route',
        url: `${baseUrl}/v2/cn/home/mission-control`,
        expectedVersionTrigger: 'v2',
        requiredVersionMenuItems: ['v1', 'v2'],
        expectLanguageMenu: true,
        requiredLanguageMenuItems: ['English', 'Español', 'Français', '中文']
      },
      {
        name: 'v1 english route',
        url: `${baseUrl}/v1/developers/introduction`,
        expectedVersionTrigger: 'v1',
        requiredVersionMenuItems: ['v1', 'v2'],
        expectLanguageMenu: true,
        requiredLanguageMenuItems: ['English']
      }
    ];

    for (const scenario of scenarios) {
      results.push(await runScenario(page, scenario, failures, warnings, args.timeoutMs, args.strictMenus));
    }
  } finally {
    await browser.close();
  }

  console.log(
    JSON.stringify(
      {
        ok: failures.length === 0,
        baseUrl,
        strictMenus: args.strictMenus,
        failures,
        warnings,
        results
      },
      null,
      2
    )
  );

  if (failures.length > 0) process.exit(1);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  });
}
