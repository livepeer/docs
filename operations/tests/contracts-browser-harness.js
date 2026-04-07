#!/usr/bin/env node
/**
 * @script contracts-browser-harness
 * @type automation
 * @concern testing
 * @niche render/page
 * @description Unified scoped-browser harness for the contracts recovery browser gates.
 *              Starts one lpd scoped preview for the contracts route prefixes,
 *              then runs both contracts route browser validators against that exact bundle.
 * @usage node operations/tests/contracts-browser-harness.js
 */

const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
const { CONTRACTS_SCOPE_PREFIXES } = require('./contracts-validator-contract');

const CONTRACTS_ROUTE = '/v2/about/resources/reference/livepeer-contract-addresses';
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const LPD_PATH = path.join(REPO_ROOT, 'tools', 'lpd');
const HARNESS_PORT = Number.parseInt(process.env.CONTRACTS_HARNESS_PORT || '3145', 10);
const HARNESS_BASE_URL = `http://localhost:${HARNESS_PORT}`;
const HARNESS_SCOPE_PREFIXES =
  process.env.CONTRACTS_HARNESS_SCOPE_PREFIXES || CONTRACTS_SCOPE_PREFIXES;
const LOG_FILE = path.join(os.tmpdir(), `contracts-browser-harness-${process.pid}.log`);
const PREVIEW_TIMEOUT_MS = Number.parseInt(process.env.CONTRACTS_HARNESS_TIMEOUT_MS || '240000', 10);
const PROBE_TIMEOUT_MS = Number.parseInt(process.env.CONTRACTS_HARNESS_PROBE_TIMEOUT_MS || '30000', 10);
const PROBE_INTERVAL_MS = Number.parseInt(process.env.CONTRACTS_HARNESS_PROBE_INTERVAL_MS || '2000', 10);

let previewProcess = null;
let logStream = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function tailLog(lines = 80) {
  if (!fs.existsSync(LOG_FILE)) {
    return '';
  }

  return fs
    .readFileSync(LOG_FILE, 'utf8')
    .trim()
    .split('\n')
    .slice(-lines)
    .join('\n');
}

function appendLog(chunk) {
  if (!logStream) {
    return;
  }

  logStream.write(chunk);
}

function startScopedPreview() {
  fs.writeFileSync(LOG_FILE, '');
  logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });

  const env = {
    ...process.env,
  };
  delete env.CONTRACTS_TEST_BASE_URL;
  delete env.MINT_BASE_URL;

  previewProcess = spawn(
    'bash',
    [
      LPD_PATH,
      'dev',
      '--scoped',
      '--scope-prefix',
      HARNESS_SCOPE_PREFIXES,
      '--skip-external-fetch',
      '--disable-openapi',
      '--',
      '--port',
      String(HARNESS_PORT),
      '--no-open',
    ],
    {
      cwd: REPO_ROOT,
      detached: true,
      stdio: ['ignore', 'pipe', 'pipe'],
      env,
    }
  );

  previewProcess.stdout.on('data', appendLog);
  previewProcess.stderr.on('data', appendLog);
  previewProcess.unref();

  return previewProcess;
}

function isUrlReachable(baseUrl, probePath) {
  return new Promise((resolve) => {
    const req = http.get(`${baseUrl}${probePath}`, { timeout: PROBE_TIMEOUT_MS }, (res) => {
      if (!Number.isInteger(res.statusCode)) {
        resolve(false);
        return;
      }

      resolve(res.statusCode > 0 && res.statusCode !== 404);
    });

    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForRoute(baseUrl, probePath) {
  const deadline = Date.now() + PREVIEW_TIMEOUT_MS;

  while (Date.now() < deadline) {
    if (previewProcess?.exitCode != null) {
      throw new Error(
        `Scoped preview exited early with code ${previewProcess.exitCode}.\n${tailLog()}`
      );
    }

    if (await isUrlReachable(baseUrl, probePath)) {
      return;
    }

    await sleep(PROBE_INTERVAL_MS);
  }

  throw new Error(`Timed out waiting for ${probePath} on ${baseUrl}.\n${tailLog()}`);
}

function stopScopedPreview() {
  if (logStream) {
    logStream.end();
    logStream = null;
  }

  if (!previewProcess?.pid) {
    return;
  }

  try {
    process.kill(-previewProcess.pid, 'SIGTERM');
  } catch (_error) {
    // Ignore if the process group is already gone.
  }

  previewProcess = null;
}

function runNodeScript(relativeScriptPath, args = [], env = {}) {
  const scriptPath = path.join(REPO_ROOT, relativeScriptPath);
  const result = spawnSync(process.execPath, [scriptPath, ...args], {
    cwd: REPO_ROOT,
    env: {
      ...process.env,
      ...env,
    },
    stdio: 'inherit',
  });

  return {
    script: relativeScriptPath,
    status: result.status == null ? 1 : result.status,
    error: result.error ? String(result.error.message || result.error) : '',
  };
}

async function main() {
  console.log(`🚀 Starting scoped lpd dev server on port ${HARNESS_PORT}...`);
  console.log(`   Scope prefixes: ${HARNESS_SCOPE_PREFIXES}`);
  const child = startScopedPreview();
  console.log(`   Started with PID: ${child.pid}`);
  console.log(`   Logs: ${LOG_FILE}`);
  console.log(`⏳ Waiting for server to be ready (max ${Math.round(PREVIEW_TIMEOUT_MS / 1000)} seconds)...`);

  try {
    await waitForRoute(HARNESS_BASE_URL, '/');
    console.log(`✅ Server is ready at ${HARNESS_BASE_URL}`);

    const sharedEnv = {
      CONTRACTS_TEST_BASE_URL: HARNESS_BASE_URL,
      CONTRACTS_TEST_SCOPED: '1',
      MINT_BASE_URL: HARNESS_BASE_URL,
      MINT_SCOPE_PREFIXES: HARNESS_SCOPE_PREFIXES,
    };

    console.log('\n── Contracts Browser Harness ─────────────────────');
    console.log(`Base URL: ${HARNESS_BASE_URL}`);
    console.log('Validators: contracts reference/verifier -> blockchain page');
    console.log('──────────────────────────────────────────────────');

    const runs = [
      runNodeScript('operations/tests/playwright-contract-addresses.js', [], sharedEnv),
      runNodeScript('operations/tests/playwright-blockchain-contracts.js', [], sharedEnv),
    ];

    const failed = runs.find((run) => run.status !== 0);
    if (failed) {
      if (failed.error) {
        console.error(`Harness error in ${failed.script}: ${failed.error}`);
      }
      process.exit(failed.status || 1);
    }

    console.log('\nContracts browser harness PASS.');
  } finally {
    stopScopedPreview();
  }
}

main().catch((error) => {
  console.error(`Contracts browser harness failed: ${error.message}`);
  process.exit(1);
});
