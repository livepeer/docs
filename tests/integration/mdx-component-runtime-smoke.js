#!/usr/bin/env node
/**
 * @script            mdx-component-runtime-smoke
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/integration, .githooks/server-manager.js, tests/run-pr-checks.js
 * @owner             docs
 * @needs             E-R1, R-R29
 * @purpose-statement Smoke-tests sentinel MDX routes for runtime component failures, focused on page-killing render errors from MDX-imported JSX modules.
 * @pipeline          manual
 * @usage             node tests/integration/mdx-component-runtime-smoke.js [--routes route[,route...]] [--base-url http://localhost:3000]
 */

const path = require('path');

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_error) {
  puppeteer = require(path.join(process.cwd(), 'tools', 'node_modules', 'puppeteer'));
}
const {
  ensureServerRunning,
  stopServer,
  getServerUrl
} = require('../../.githooks/server-manager');

const DEFAULT_TIMEOUT_MS = 30000;
const SENTINEL_ROUTES = [
  '/v2/home/mission-control',
  '/v2/about/portal',
  '/v2/developers/portal',
  '/v2/gateways/gateways-portal',
  '/v2/resources/documentation-guide/component-library/primitives'
];
const SENTINEL_ROUTE_FILES = new Set([
  'v2/home/mission-control.mdx',
  'v2/about/portal.mdx',
  'v2/developers/portal.mdx',
  'v2/gateways/gateways-portal.mdx',
  'v2/resources/documentation-guide/component-library/primitives.mdx'
]);
const BLOCKING_CONSOLE_PATTERNS = [
  /ReferenceError/i,
  /Cannot access/i,
  /is not defined/i,
  /BlinkingIcon/i,
  /normalizeIconName/i,
  /normalizeIconSize/i
];
const BLOCKING_BODY_PATTERNS = [
  /Failed to render/i,
  /ReferenceError/i,
  /normalizeIconName/i,
  /normalizeIconSize/i
];
const COMPONENT_CHANGE_RE = /^snippets\/components\/.+\.jsx$/;

function toPosix(value) {
  return String(value || '').replace(/\\/g, '/');
}

function usage() {
  console.log(
    [
      'Usage: node tests/integration/mdx-component-runtime-smoke.js [options]',
      '',
      'Options:',
      `  --routes <route[,route]>  Override sentinel routes (default: ${SENTINEL_ROUTES.join(', ')})`,
      '  --base-url <url>          Use an existing Mintlify base URL instead of server-manager discovery',
      '  --help, -h                Show this message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    routes: [],
    baseUrl: String(process.env.MINT_BASE_URL || '').trim(),
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--routes') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((route) => args.routes.push(route));
      }
      index += 1;
      continue;
    }

    if (token.startsWith('--routes=')) {
      token
        .slice('--routes='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((route) => args.routes.push(route));
      continue;
    }

    if (token === '--base-url') {
      args.baseUrl = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    if (token.startsWith('--base-url=')) {
      args.baseUrl = token.slice('--base-url='.length).trim();
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  args.routes = [...new Set(args.routes)];
  return args;
}

function normalizeRoute(route) {
  const raw = String(route || '').trim();
  if (!raw) return '';
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function getRoutes(args = {}) {
  const routes = Array.isArray(args.routes) && args.routes.length > 0 ? args.routes : SENTINEL_ROUTES;
  return [...new Set(routes.map(normalizeRoute).filter(Boolean))];
}

function isBlockingConsoleMessage(type, text) {
  if (String(type || '').toLowerCase() !== 'error') return false;
  return BLOCKING_CONSOLE_PATTERNS.some((pattern) => pattern.test(String(text || '')));
}

function isBlockingPageError(message) {
  return BLOCKING_CONSOLE_PATTERNS.some((pattern) => pattern.test(String(message || '')));
}

function classifyDomFailure(snapshot) {
  const status = Number(snapshot?.status || 0);
  const bodyText = String(snapshot?.bodyText || '');
  const bodyLength = Number(snapshot?.bodyLength || 0);

  if (status === 404) {
    return `Route returned HTTP 404`;
  }

  if (snapshot?.is404) {
    return 'Page rendered a 404 state';
  }

  if (snapshot?.hasErrorBoundary) {
    return 'Page rendered an error boundary';
  }

  if (bodyLength < 500) {
    return `Page appears empty or failed to render (${bodyLength} chars)`;
  }

  const blockingBodyPattern = BLOCKING_BODY_PATTERNS.find((pattern) => pattern.test(bodyText));
  if (blockingBodyPattern) {
    return `Page body includes blocking runtime error text (${blockingBodyPattern})`;
  }

  return '';
}

function shouldRunForChangedFiles(changedFiles) {
  return changedFiles.some((filePath) => {
    const relPath = toPosix(filePath);
    return (
      COMPONENT_CHANGE_RE.test(relPath) ||
      relPath === 'tools/scripts/validators/components/check-mdx-component-scope.js' ||
      relPath === 'tests/integration/mdx-component-runtime-smoke.js' ||
      SENTINEL_ROUTE_FILES.has(relPath)
    );
  });
}

async function testRoute(browser, route, baseUrl) {
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (isBlockingConsoleMessage(type, text)) {
      consoleErrors.push(`Console ${type}: ${text}`);
    }
  });

  page.on('pageerror', (error) => {
    if (isBlockingPageError(error.message)) {
      pageErrors.push(`Page error: ${error.message}`);
    }
  });

  let response;
  try {
    response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle2',
      timeout: DEFAULT_TIMEOUT_MS
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const snapshot = await page.evaluate(() => {
      const bodyText = document.body?.innerText || '';
      return {
        bodyText,
        bodyLength: bodyText.trim().length,
        h1Text: document.querySelector('h1')?.innerText || '',
        hasErrorBoundary: Boolean(document.querySelector('[data-error-boundary]')),
        is404: /doesn't exist|page not found|404|ruh oh/i.test(bodyText)
      };
    });
    snapshot.status = response?.status?.() || 0;

    const domFailure = classifyDomFailure(snapshot);
    const failures = [...pageErrors, ...consoleErrors];
    if (domFailure) {
      failures.push(domFailure);
    }

    return {
      route,
      success: failures.length === 0,
      failures
    };
  } catch (error) {
    return {
      route,
      success: false,
      failures: [`Navigation error: ${error.message}`]
    };
  } finally {
    await page.close();
  }
}

async function runSmoke(options = {}) {
  const routes = getRoutes(options);
  const startedServer = options.baseUrl ? false : await ensureServerRunning({ probePath: routes[0] });
  const baseUrl = String(options.baseUrl || '').trim() || getServerUrl();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const results = [];
    for (const route of routes) {
      results.push(await testRoute(browser, route, baseUrl));
    }

    const failed = results.filter((entry) => !entry.success);
    return {
      baseUrl,
      routes,
      results,
      failed
    };
  } finally {
    await browser.close();
    if (startedServer) {
      stopServer();
    }
  }
}

async function main(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    if (args.help) {
      usage();
      return 0;
    }

    const result = await runSmoke(args);
    if (result.failed.length === 0) {
      console.log(`✅ MDX runtime smoke passed (${result.routes.length} routes)`);
      return 0;
    }

    result.failed.forEach((entry) => {
      console.error(`❌ ${entry.route}`);
      entry.failures.forEach((failure) => console.error(`   - ${failure}`));
    });
    console.error(`\n❌ ${result.failed.length} MDX runtime smoke route(s) failed`);
    return 1;
  } catch (error) {
    console.error(`❌ Failed to run MDX runtime smoke: ${error.message}`);
    return 1;
  }
}

if (require.main === module) {
  main().then((exitCode) => process.exit(exitCode));
}

module.exports = {
  BLOCKING_BODY_PATTERNS,
  BLOCKING_CONSOLE_PATTERNS,
  SENTINEL_ROUTES,
  SENTINEL_ROUTE_FILES,
  classifyDomFailure,
  getRoutes,
  isBlockingConsoleMessage,
  isBlockingPageError,
  parseArgs,
  runSmoke,
  shouldRunForChangedFiles
};
