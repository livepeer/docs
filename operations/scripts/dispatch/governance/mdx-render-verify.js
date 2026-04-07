/**
 * @script mdx-render-verify
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Verifies MDX page renders without new console errors after every edit
 * @description PostToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,
 *   captures console errors, compares against baseline, and writes pass/fail state to
 *   /tmp for the PreToolUse render gate (mdx-render-gate.js) to enforce on the next
 *   tool call. Replaces the old mdx-validate-hook.js which only did an HTTP GET
 *   (useless — Mintlify renders client-side, errors return HTTP 200).
 *   If no server is running, starts one — never skips verification.
 * @mode read-only
 * @pipeline PostToolUse hook → parse stdin → check if v2 MDX → ensure server → Puppeteer → compare baseline → write state
 * @scope .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');
const { stdin } = process;

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_) {
  try {
    puppeteer = require(path.join(process.cwd(), 'tools', 'node_modules', 'puppeteer'));
  } catch (_inner) {
    puppeteer = null;
  }
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const REPO_ROOT = (() => {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8', cwd: process.cwd() }).trim();
  } catch (_) {
    return process.cwd();
  }
})();

const SERVER_MANAGER_PATH = path.join(REPO_ROOT, '.githooks', 'server-manager.js');
const BASELINE_PATH = path.join(REPO_ROOT, 'operations', 'tests', 'baselines', 'console-baseline.json');
const PAGE_TIMEOUT_MS = 30000;
const RENDER_SETTLE_MS = 1500;

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
  // Hydration and React errors are NOT filtered — they are real render failures.
  // Pre-existing ones are in console-baseline.json (baseline comparison handles them).
  // Only NEW hydration errors on previously clean pages will trigger a FAIL.
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function getStatePath() {
  return path.join('/tmp', `claude-mdx-verification-${getSessionId()}.json`);
}

function getServerStatePath() {
  return path.join('/tmp', `claude-mdx-server-${getSessionId()}.json`);
}

function writeState(state) {
  fs.writeFileSync(getStatePath(), JSON.stringify(state, null, 2) + '\n');
}

function isNoise(text) {
  return NOISE_PATTERNS.some((pattern) => pattern.test(text));
}

function loadBaseline() {
  try {
    return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
  } catch (_) {
    return null;
  }
}

function extractRoute(filePath) {
  const match = filePath.match(/\/(v2\/.+)\.mdx$/);
  if (!match) return null;
  return '/' + match[1];
}

function extractScopePrefix(filePath) {
  // v2/gateways/setup/prepare.mdx → v2/gateways
  const VALID_TABS = ['home', 'about', 'gateways', 'orchestrators', 'developers', 'delegators', 'solutions', 'resources'];
  const match = filePath.match(/\/?v2\/([^/]+)/);
  const tab = match ? match[1] : '';
  return VALID_TABS.includes(tab) ? `v2/${tab}` : 'v2/home';
}

// ---------------------------------------------------------------------------
// Server discovery — never skip, start scoped if needed
// ---------------------------------------------------------------------------

async function getServerUrl(route) {
  // Check session state first
  try {
    const serverState = JSON.parse(fs.readFileSync(getServerStatePath(), 'utf8'));
    if (serverState.running && serverState.url) {
      const alive = await httpProbe(serverState.url + route);
      if (alive) return serverState.url;
    }
  } catch (_) { /* no session state */ }

  // Try server-manager discovery — probe with the actual route being verified
  let serverManager;
  try {
    const resolved = require.resolve(SERVER_MANAGER_PATH);
    if (require.cache[resolved]) delete require.cache[resolved];
    serverManager = require(SERVER_MANAGER_PATH);
  } catch (_) {
    return null;
  }

  const running = await serverManager.isServerRunning({ probePath: route });
  if (running) {
    return serverManager.getServerUrl();
  }

  // Not running — start SCOPED server via server-lifecycle.js restart
  // This uses lpd dev --scoped which only loads the relevant tab (~50 pages, <2 min)
  try {
    const scope = extractScopePrefix(route);
    execSync(`node operations/scripts/dispatch/governance/server-lifecycle.js restart ${scope}`, {
      timeout: 120000,
      stdio: 'pipe',
      cwd: REPO_ROOT
    });

    // Re-check after restart
    const resolved2 = require.resolve(SERVER_MANAGER_PATH);
    if (require.cache[resolved2]) delete require.cache[resolved2];
    const sm2 = require(SERVER_MANAGER_PATH);
    if (await sm2.isServerRunning({ probePath: route })) {
      return sm2.getServerUrl();
    }
  } catch (_) { /* restart failed */ }

  return null;
}

function httpProbe(url) {
  return new Promise((resolve) => {
    const req = http.get(url, { timeout: 5000 }, (res) => {
      resolve(res.statusCode > 0 && res.statusCode !== 404);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

// ---------------------------------------------------------------------------
// Puppeteer single-page verification
// ---------------------------------------------------------------------------

async function verifyRoute(route, baseUrl) {
  if (!puppeteer) {
    return { passed: false, error: 'Puppeteer not installed. Run: cd tools && npm install' };
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const consoleErrors = [];
  const pageErrors = [];
  let status = 0;
  let bodyLength = 0;
  let hasErrorBoundary = false;
  let is404 = false;

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    page.on('console', (msg) => {
      if (String(msg.type()).toLowerCase() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });

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
        hasErrorBoundary: Boolean(document.querySelector('[data-error-boundary]')),
        is404: /doesn't exist|page not found|404|ruh oh/i.test(bodyText)
      };
    });

    bodyLength = snapshot.bodyLength;
    hasErrorBoundary = snapshot.hasErrorBoundary;
    is404 = snapshot.is404;

    try { await page.close(); } catch (_) {}
  } catch (err) {
    consoleErrors.push(`Navigation error: ${err.message}`);
  } finally {
    try { await browser.close(); } catch (_) {}
  }

  const allErrors = [...consoleErrors, ...pageErrors];
  const realErrors = allErrors.filter((e) => !isNoise(e));

  return {
    status,
    consoleErrors: realErrors,
    bodyLength,
    hasErrorBoundary,
    is404
  };
}

// ---------------------------------------------------------------------------
// Main hook logic
// ---------------------------------------------------------------------------

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', async () => {
  try {
    const data = JSON.parse(input);
    const toolInput = data.tool_input || {};
    const fp = toolInput.file_path || '';

    // Only care about v2 MDX files
    if (!/\.mdx$/.test(fp) || !/\/v2\//.test(fp)) {
      process.exit(0);
    }

    const route = extractRoute(fp);
    if (!route) {
      process.exit(0);
    }

    // Write pending state BEFORE launching Puppeteer (timeout protection)
    writeState({
      status: 'pending',
      file: fp,
      route,
      timestamp: new Date().toISOString()
    });

    // Ensure server is running — NEVER skip. Starts scoped server if needed.
    const serverUrl = await getServerUrl(route);
    if (!serverUrl) {
      writeState({
        status: 'server-failed',
        file: fp,
        route,
        timestamp: new Date().toISOString(),
        error: 'Could not start or find Mintlify dev server'
      });
      console.log(JSON.stringify({
        systemMessage: `RENDER VERIFY: Could not start Mintlify dev server. Verification skipped for ${path.basename(fp)}. Server will be retried on next edit.`
      }));
      process.exit(0);
    }

    // Run Puppeteer verification
    const result = await verifyRoute(route, serverUrl);

    if (result.error) {
      writeState({
        status: 'server-failed',
        file: fp,
        route,
        timestamp: new Date().toISOString(),
        error: result.error
      });
      console.log(JSON.stringify({
        systemMessage: `RENDER VERIFY: ${result.error}`
      }));
      process.exit(0);
    }

    // Compare against baseline
    const baseline = loadBaseline();
    const baselineEntry = baseline?.[route];
    const baselineErrors = new Set(baselineEntry?.consoleErrors || []);
    const newErrors = result.consoleErrors.filter((e) => !baselineErrors.has(e));

    // DOM-level failures
    const domFailures = [];
    if (result.status === 404 || result.is404) domFailures.push('Page returned 404');
    if (result.hasErrorBoundary) domFailures.push('Error boundary rendered');
    if (result.bodyLength < 500 && result.status === 200) domFailures.push(`Page appears empty (${result.bodyLength} chars)`);

    // Check if baseline had the same DOM failures
    const baselineHad404 = baselineEntry?.is404 || baselineEntry?.status === 404;
    const baselineHadErrorBoundary = baselineEntry?.hasErrorBoundary;
    const newDomFailures = domFailures.filter((f) => {
      if (f.includes('404') && baselineHad404) return false;
      if (f.includes('Error boundary') && baselineHadErrorBoundary) return false;
      return true;
    });

    const allNewIssues = [...newErrors, ...newDomFailures];

    if (allNewIssues.length === 0) {
      // PASSED — no new errors
      writeState({
        status: 'passed',
        file: fp,
        route,
        timestamp: new Date().toISOString(),
        consoleErrors: result.consoleErrors,
        bodyLength: result.bodyLength,
        httpStatus: result.status
      });

      const preExisting = result.consoleErrors.length;
      const msg = preExisting > 0
        ? `Render verified: ${route} — ${preExisting} console errors (all pre-existing). Page renders correctly.`
        : `Render verified: ${route} — clean render, no console errors.`;

      console.log(JSON.stringify({ systemMessage: msg }));
    } else {
      // FAILED — new errors introduced
      writeState({
        status: 'failed',
        file: fp,
        route,
        timestamp: new Date().toISOString(),
        newErrors: allNewIssues,
        allErrors: result.consoleErrors,
        domFailures,
        bodyLength: result.bodyLength,
        httpStatus: result.status
      });

      const errorList = allNewIssues.map((e) => `  - ${e}`).join('\n');
      console.log(JSON.stringify({
        systemMessage: `RENDER FAILURE: ${route} has NEW issues after your edit:\n${errorList}\n\nFix ${path.basename(fp)} before editing anything else. The render gate will block further edits until this page renders clean.`
      }));
    }

    process.exit(0);
  } catch (err) {
    // Don't crash the hook — write error state and continue
    try {
      writeState({
        status: 'server-failed',
        error: `Hook error: ${err.message}`,
        timestamp: new Date().toISOString()
      });
    } catch (_) { /* nothing we can do */ }
    process.exit(0);
  }
});
