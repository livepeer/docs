#!/usr/bin/env node
/**
 * Shared validator contract for contracts recovery tests.
 *
 * This module keeps smoke and browser validators on the same fresh bundle by:
 * - persisting the resolved base URL for the current validation session
 * - starting Mintlify on a fresh, non-common port when no live session exists
 * - refusing to fall back to ambient common-port reuse
 */

const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const net = require('net');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      cwd: process.cwd()
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();
const REPO_KEY = crypto.createHash('sha1').update(REPO_ROOT).digest('hex').slice(0, 12);
const HTTP_PROBE_TIMEOUT_MS = Number.parseInt(process.env.CONTRACTS_PROBE_TIMEOUT_MS || '30000', 10);
const HTTP_PROBE_MAX_ATTEMPTS = Number.parseInt(process.env.CONTRACTS_PROBE_MAX_ATTEMPTS || '10', 10);
const HTTP_PROBE_RETRY_INTERVAL_MS = Number.parseInt(process.env.CONTRACTS_PROBE_RETRY_INTERVAL_MS || '2000', 10);
const CONTRACTS_SCOPE_PREFIXES = [
  'v2/about/resources/reference/livepeer-contract-addresses',
  'v2/about/resources/verify-contract-addresses',
  'v2/about/protocol/blockchain-contracts',
  'v2/resources/references/contract-addresses',
  'snippets/composables/pages/canonical',
  'snippets/data/contract-addresses',
  'v2/about/protocol/data',
].join(',');
const CONTRACTS_SCOPE_TABS = '';
const SESSION_FILE = path.join(os.tmpdir(), `contracts-validation-session-${REPO_KEY}.json`);
const PID_FILE = path.join(os.tmpdir(), `mint-dev-test-${REPO_KEY}.pid`);
const SERVER_MANAGER_PATH = path.join(REPO_ROOT, '.githooks', 'server-manager.js');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeBaseUrl(value) {
  const raw = String(value || '').trim();
  return raw ? raw.replace(/\/$/, '') : '';
}

function normalizeProbePath(probePath) {
  const raw = String(probePath || '').trim();
  if (!raw) {
    return '/';
  }
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function readSession() {
  if (!fs.existsSync(SESSION_FILE)) {
    return null;
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(SESSION_FILE, 'utf8'));
    const baseUrl = normalizeBaseUrl(parsed?.baseUrl);
    if (!baseUrl) {
      return null;
    }

    return {
      baseUrl,
      pid: Number.isInteger(parsed?.pid) ? parsed.pid : null,
      startedAt: String(parsed?.startedAt || ''),
      source: String(parsed?.source || '')
    };
  } catch (_error) {
    return null;
  }
}

function writeSession(session) {
  const payload = {
    baseUrl: normalizeBaseUrl(session?.baseUrl),
    pid: Number.isInteger(session?.pid) ? session.pid : null,
    startedAt: String(session?.startedAt || new Date().toISOString()),
    source: String(session?.source || 'fresh')
  };

  fs.writeFileSync(SESSION_FILE, `${JSON.stringify(payload, null, 2)}\n`);
}

function readPidFile() {
  if (!fs.existsSync(PID_FILE)) {
    return null;
  }

  try {
    const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
    return Number.isInteger(pid) ? pid : null;
  } catch (_error) {
    return null;
  }
}

function deletePidFile() {
  if (fs.existsSync(PID_FILE)) {
    try {
      fs.unlinkSync(PID_FILE);
    } catch (_error) {
      // Ignore stale PID cleanup failures.
    }
  }
}

function loadServerManager() {
  const resolved = require.resolve(SERVER_MANAGER_PATH);
  if (require.cache[resolved]) {
    delete require.cache[resolved];
  }
  return require(SERVER_MANAGER_PATH);
}

function getConfiguredBaseUrl() {
  return (
    normalizeBaseUrl(process.env.CONTRACTS_TEST_BASE_URL) ||
    normalizeBaseUrl(process.env.MINT_BASE_URL)
  );
}

function pickFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      const port = address && typeof address === 'object' ? address.port : 0;
      server.close(() => resolve(port));
    });
  });
}

function isUrlReachable(baseUrl, probePath) {
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const normalizedProbePath = normalizeProbePath(probePath);
  if (!normalizedBaseUrl) {
    return Promise.resolve(false);
  }

  const targetUrl = new URL(normalizedProbePath, `${normalizedBaseUrl}/`);

  return new Promise((resolve) => {
    const req = http.get(
      targetUrl,
      { timeout: HTTP_PROBE_TIMEOUT_MS },
      (res) => {
        if (!Number.isInteger(res.statusCode)) {
          resolve(false);
          return;
        }

        if (normalizedProbePath !== '/' && res.statusCode === 404) {
          resolve(false);
          return;
        }

        resolve(res.statusCode > 0);
      }
    );

    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForUrlReachable(baseUrl, probePath, options = {}) {
  const attempts = Number.isInteger(options.attempts) ? options.attempts : HTTP_PROBE_MAX_ATTEMPTS;
  const intervalMs = Number.isInteger(options.intervalMs) ? options.intervalMs : HTTP_PROBE_RETRY_INTERVAL_MS;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    if (await isUrlReachable(baseUrl, probePath)) {
      return true;
    }

    if (attempt < attempts - 1) {
      await sleep(intervalMs);
    }
  }

  return false;
}

async function ensureFreshBundleBaseUrl(options = {}) {
  const probePath = normalizeProbePath(options.probePath);
  const explicitBaseUrl = normalizeBaseUrl(options.baseUrl);
  const configuredBaseUrl = explicitBaseUrl || getConfiguredBaseUrl();

  if (configuredBaseUrl) {
    const configuredReachable = await waitForUrlReachable(configuredBaseUrl, probePath);
    if (!configuredReachable) {
      console.warn(
        `Configured contracts base URL did not answer the preflight probe at ${probePath}; continuing with browser validation: ${configuredBaseUrl}`
      );
    }

    process.env.CONTRACTS_TEST_SCOPED = '1';
    process.env.CONTRACTS_TEST_BASE_URL = configuredBaseUrl;
    process.env.MINT_BASE_URL = configuredBaseUrl;
    writeSession({
      baseUrl: configuredBaseUrl,
      pid: readPidFile(),
      startedAt: new Date().toISOString(),
      source: configuredReachable
        ? explicitBaseUrl
          ? 'explicit'
          : 'configured'
        : explicitBaseUrl
          ? 'explicit-unverified'
          : 'configured-unverified'
    });
    return configuredBaseUrl;
  }

  if (!options.fresh) {
    const session = readSession();
    if (session?.baseUrl && (await waitForUrlReachable(session.baseUrl, probePath))) {
      process.env.CONTRACTS_TEST_BASE_URL = session.baseUrl;
      process.env.MINT_BASE_URL = session.baseUrl;
      return session.baseUrl;
    }
  }

  const port = await pickFreePort();
  const freshBaseUrl = `http://localhost:${port}`;

  process.env.CONTRACTS_TEST_SCOPED = '1';
  process.env.CONTRACTS_TEST_BASE_URL = freshBaseUrl;
  process.env.MINT_BASE_URL = freshBaseUrl;
  process.env.MINT_SCOPE_TABS = process.env.MINT_SCOPE_TABS || CONTRACTS_SCOPE_TABS;
  if (!process.env.MINT_SCOPE_TABS) {
    process.env.MINT_SCOPE_PREFIXES = process.env.MINT_SCOPE_PREFIXES || CONTRACTS_SCOPE_PREFIXES;
  }
  deletePidFile();

  const serverManager = loadServerManager();
  await serverManager.ensureServerRunning({ probePath, allowCommonPorts: false });

  const actualBaseUrl = normalizeBaseUrl(serverManager.getServerUrl());
  writeSession({
    baseUrl: actualBaseUrl,
    pid: readPidFile(),
    startedAt: new Date().toISOString(),
    source: 'fresh'
  });

  return actualBaseUrl;
}

module.exports = {
  CONTRACTS_SCOPE_PREFIXES,
  ensureFreshBundleBaseUrl,
  normalizeBaseUrl,
  normalizeProbePath,
  readSession
};
