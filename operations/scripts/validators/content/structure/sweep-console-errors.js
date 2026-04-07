#!/usr/bin/env node
/**
 * @script sweep-console-errors
 * @type validator
 * @concern content
 * @niche structure
 * @purpose Generates console error baseline for all v2 routes via Puppeteer
 * @description Visits every v2 route registered in docs.json, captures HTTP status,
 *   console errors, body metrics, and error boundary state. Writes a baseline JSON
 *   file that downstream hooks use to distinguish pre-existing errors from new
 *   regressions introduced by agents.
 * @mode read-only
 * @pipeline manual — run once to generate baseline, re-run to update after verified fixes
 * @scope operations/tests/baselines/console-baseline.json
 * @usage node operations/scripts/validators/content/structure/sweep-console-errors.js [--update-baseline] [--routes /v2/a,/v2/b] [--base-url http://localhost:3000]
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_) {
  puppeteer = require(path.join(process.cwd(), 'tools', 'node_modules', 'puppeteer'));
}

const REPO_ROOT = (() => {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8', cwd: process.cwd() }).trim();
  } catch (_) {
    return process.cwd();
  }
})();

const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const BASELINE_PATH = path.join(REPO_ROOT, 'operations', 'tests', 'baselines', 'console-baseline.json');
const SERVER_MANAGER_PATH = path.join(REPO_ROOT, '.githooks', 'server-manager.js');
const PAGE_TIMEOUT_MS = 30000;
const RENDER_SETTLE_MS = 1500;

// Console error noise filter — errors that are Mintlify platform artefacts, not page regressions
const NOISE_PATTERNS = [
  /require is not defined/i,
  /puppeteer/i,
  /fs has already been declared/i,
  /unexpected token 'export'/i,
  /identifier '[^']*' has already been declared/i,
  /appendchild/i,
  /failed to execute/i,
  /\b403\b/,
  /\b500\b/,
  /favicon/i
];

// ---------------------------------------------------------------------------
// Route extraction from docs.json (adapted from test-v2-pages.js)
// ---------------------------------------------------------------------------

function extractPages(nav, pages = []) {
  if (Array.isArray(nav)) {
    nav.forEach((item) => extractPages(item, pages));
  } else if (typeof nav === 'object' && nav !== null) {
    if (Array.isArray(nav.pages)) {
      nav.pages.forEach((page) => {
        if (typeof page === 'string' && page.trim() && page !== ' ') {
          pages.push(page);
        } else if (typeof page === 'object' && page.pages) {
          extractPages(page.pages, pages);
        }
      });
    }
    Object.values(nav).forEach((value) => {
      if (typeof value === 'object' && value !== null) {
        extractPages(value, pages);
      }
    });
  }
  return pages;
}

function getV2Routes() {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  const v2Version = docsJson.navigation?.versions?.find((v) => v.version === 'v2');
  if (!v2Version) {
    throw new Error('v2 version not found in docs.json');
  }
  const allPages = extractPages(v2Version);
  return [...new Set(allPages)]
    .filter((page) => page && page.trim() && page !== ' ')
    .map((page) => {
      const clean = page.replace(/\.mdx?$/, '');
      return clean.startsWith('/') ? clean : `/${clean}`;
    });
}

// ---------------------------------------------------------------------------
// Console error filtering
// ---------------------------------------------------------------------------

function isNoise(text) {
  return NOISE_PATTERNS.some((pattern) => pattern.test(text));
}

function filterConsoleErrors(errors) {
  return errors.filter((err) => !isNoise(err));
}

// ---------------------------------------------------------------------------
// Single-page Puppeteer check
// ---------------------------------------------------------------------------

async function checkRoute(browser, route, baseUrl) {
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', (msg) => {
    if (String(msg.type()).toLowerCase() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err.message);
  });

  let status = 0;
  let bodyLength = 0;
  let hasH1 = false;
  let hasErrorBoundary = false;
  let is404 = false;

  try {
    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle2',
      timeout: PAGE_TIMEOUT_MS
    });

    await new Promise((resolve) => setTimeout(resolve, RENDER_SETTLE_MS));

    status = response?.status?.() || 0;

    const snapshot = await page.evaluate(() => {
      const bodyText = document.body?.innerText || '';
      return {
        bodyLength: bodyText.trim().length,
        hasH1: Boolean(document.querySelector('h1')),
        hasErrorBoundary: Boolean(document.querySelector('[data-error-boundary]')),
        is404: /doesn't exist|page not found|404|ruh oh/i.test(bodyText)
      };
    });

    bodyLength = snapshot.bodyLength;
    hasH1 = snapshot.hasH1;
    hasErrorBoundary = snapshot.hasErrorBoundary;
    is404 = snapshot.is404;
  } catch (err) {
    consoleErrors.push(`Navigation error: ${err.message}`);
  } finally {
    try { await page.close(); } catch (_) { /* browser may have disconnected */ }
  }

  const allErrors = [...consoleErrors, ...pageErrors];
  const realErrors = filterConsoleErrors(allErrors);

  return {
    status,
    consoleErrors: realErrors,
    bodyLength,
    hasH1,
    hasErrorBoundary,
    is404,
    clean: realErrors.length === 0 && !hasErrorBoundary && !is404 && status === 200
  };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = { routes: [], baseUrl: '', updateBaseline: false, help: false };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--update-baseline') { args.updateBaseline = true; continue; }
    if (token === '--routes') { args.routes = String(argv[++i] || '').split(',').map((s) => s.trim()).filter(Boolean); continue; }
    if (token.startsWith('--routes=')) { args.routes = token.slice(9).split(',').map((s) => s.trim()).filter(Boolean); continue; }
    if (token === '--base-url') { args.baseUrl = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--base-url=')) { args.baseUrl = token.slice(11).trim(); continue; }
  }

  // Normalise routes
  args.routes = args.routes.map((r) => (r.startsWith('/') ? r : `/${r}`));
  return args;
}

async function ensureServer(baseUrl) {
  if (baseUrl) {
    return baseUrl.replace(/\/$/, '');
  }

  // Try server-manager
  let serverManager;
  try {
    const resolved = require.resolve(SERVER_MANAGER_PATH);
    if (require.cache[resolved]) delete require.cache[resolved];
    serverManager = require(SERVER_MANAGER_PATH);
  } catch (_) {
    throw new Error(`Cannot load server-manager from ${SERVER_MANAGER_PATH}. Install dependencies or pass --base-url.`);
  }

  const running = await serverManager.isServerRunning({ probePath: '/v2/home/mission-control' });
  if (running) {
    return serverManager.getServerUrl();
  }

  console.log('Starting Mintlify dev server...');
  await serverManager.ensureServerRunning({ probePath: '/v2/home/mission-control' });
  return serverManager.getServerUrl();
}

function getCommitSha() {
  try {
    return execSync('git rev-parse HEAD', { encoding: 'utf8', cwd: REPO_ROOT }).trim();
  } catch (_) {
    return 'unknown';
  }
}

async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);

  if (args.help) {
    console.log([
      'Usage: node sweep-console-errors.js [options]',
      '',
      'Options:',
      '  --routes <route[,route]>  Only sweep these routes (default: all v2 from docs.json)',
      '  --base-url <url>          Mintlify server URL (default: auto-detect/auto-start)',
      '  --update-baseline         Write results to console-baseline.json',
      '  --help, -h                Show this message'
    ].join('\n'));
    return 0;
  }

  const routes = args.routes.length > 0 ? args.routes : getV2Routes();
  console.log(`Sweeping ${routes.length} routes...`);

  let baseUrl = await ensureServer(args.baseUrl);
  console.log(`Server: ${baseUrl}`);

  const launchBrowser = () => puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let browser = await launchBrowser();

  const results = {};
  let clean = 0;
  let dirty = 0;
  let serverRestarts = 0;
  const INTER_ROUTE_DELAY_MS = 500; // Don't hammer the dev server

  for (let i = 0; i < routes.length; i++) {
    // Throttle to avoid killing the server
    if (i > 0) await new Promise((r) => setTimeout(r, INTER_ROUTE_DELAY_MS));
    const route = routes[i];
    const pct = ((i / routes.length) * 100).toFixed(0);
    process.stdout.write(`\r[${pct}%] ${i + 1}/${routes.length} — ${route}                    `);

    let result;
    try {
      result = await checkRoute(browser, route, baseUrl);
    } catch (err) {
      // Browser crashed — relaunch browser
      console.error(`\nBrowser crash at ${route}: ${err.message}. Relaunching browser...`);
      try { await browser.close(); } catch (_) {}
      browser = await launchBrowser();
      // Retry the route once after browser relaunch
      try {
        result = await checkRoute(browser, route, baseUrl);
      } catch (_) {
        result = {
          status: 0, consoleErrors: [`Browser crash: ${err.message}`],
          bodyLength: 0, hasH1: false, hasErrorBoundary: false, is404: false, clean: false
        };
      }
    }

    // Detect server death — connection refused means server crashed
    const hasConnectionRefused = result.consoleErrors.some((e) => /ERR_CONNECTION_REFUSED|ECONNREFUSED/i.test(e));
    if (hasConnectionRefused && serverRestarts < 10) {
      serverRestarts++;
      console.error(`\nServer died at route ${i + 1}/${routes.length}. Restarting (attempt ${serverRestarts}/10)...`);
      try { await browser.close(); } catch (_) {}

      // Restart server — wrap in try-catch so sweep continues even if restart fails
      try {
        baseUrl = await ensureServer(null);
        console.log(`Server restarted at ${baseUrl}`);
        browser = await launchBrowser();

        // Retry this route
        try {
          result = await checkRoute(browser, route, baseUrl);
        } catch (_) {
          result = {
            status: 0, consoleErrors: ['Server restart failed — route skipped'],
            bodyLength: 0, hasH1: false, hasErrorBoundary: false, is404: false, clean: false
          };
        }
      } catch (restartErr) {
        console.error(`Server restart failed: ${restartErr.message}. Skipping remaining routes.`);
        // Record all remaining routes as skipped
        for (let j = i; j < routes.length; j++) {
          results[routes[j]] = {
            status: 0, consoleErrors: ['Server unavailable — skipped'],
            bodyLength: 0, hasH1: false, hasErrorBoundary: false, is404: false, clean: false
          };
          dirty++;
        }
        break;
      }
    }

    results[route] = result;
    if (result.clean) {
      clean++;
    } else {
      dirty++;
    }
  }

  try { await browser.close(); } catch (_) {}

  console.log('\n');
  console.log(`Total: ${routes.length} | Clean: ${clean} | Dirty: ${dirty}`);

  // Show dirty routes
  const dirtyRoutes = Object.entries(results).filter(([, r]) => !r.clean);
  if (dirtyRoutes.length > 0) {
    console.log('\nRoutes with errors:');
    for (const [route, result] of dirtyRoutes) {
      const issues = [];
      if (result.consoleErrors.length > 0) issues.push(`${result.consoleErrors.length} console errors`);
      if (result.is404) issues.push('404');
      if (result.hasErrorBoundary) issues.push('error boundary');
      if (result.status !== 200) issues.push(`HTTP ${result.status}`);
      console.log(`  ${route}: ${issues.join(', ')}`);
      result.consoleErrors.slice(0, 3).forEach((err) => {
        console.log(`    - ${err.substring(0, 120)}`);
      });
    }
  }

  // Compare against existing baseline if present
  let existingBaseline = null;
  try {
    existingBaseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
  } catch (_) { /* no existing baseline */ }

  if (existingBaseline) {
    const newRegressions = [];
    const fixed = [];
    for (const [route, result] of Object.entries(results)) {
      const baseline = existingBaseline[route];
      if (!baseline) {
        if (!result.clean) newRegressions.push(route);
        continue;
      }
      const baselineErrors = new Set(baseline.consoleErrors || []);
      const newErrors = result.consoleErrors.filter((e) => !baselineErrors.has(e));
      if (newErrors.length > 0) newRegressions.push(route);
      const fixedErrors = (baseline.consoleErrors || []).filter((e) => !result.consoleErrors.includes(e));
      if (fixedErrors.length > 0) fixed.push(route);
    }
    if (newRegressions.length > 0) {
      console.log(`\nNEW REGRESSIONS vs baseline: ${newRegressions.length}`);
      newRegressions.forEach((r) => console.log(`  + ${r}`));
    }
    if (fixed.length > 0) {
      console.log(`\nFIXED vs baseline: ${fixed.length}`);
      fixed.forEach((r) => console.log(`  - ${r}`));
    }
    if (newRegressions.length === 0 && fixed.length === 0) {
      console.log('\nNo changes vs baseline.');
    }
  }

  // Write baseline
  if (args.updateBaseline || !existingBaseline) {
    const baseline = {
      _meta: {
        generated: new Date().toISOString(),
        commit: getCommitSha(),
        totalRoutes: routes.length,
        clean,
        dirty
      },
      ...results
    };
    fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2) + '\n');
    console.log(`\nBaseline written to ${BASELINE_PATH}`);
  }

  return dirty > 0 ? 1 : 0;
}

// Export for reuse by sweep-delta-report.js
module.exports = {
  checkRoute,
  filterConsoleErrors,
  getV2Routes,
  ensureServer,
  NOISE_PATTERNS,
  BASELINE_PATH
};

if (require.main === module) {
  main().then((code) => process.exit(code));
}
