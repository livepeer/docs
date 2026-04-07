/**
 * @script server-lifecycle
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Ensures Mintlify dev server is running for render verification
 * @description SessionStart hook + CLI tool. Auto-starts the Mintlify dev server via
 *   server-manager so that all subsequent render verification hooks have a live server.
 *   CLI usage: health (check status), restart [scope] (restart with optional scope).
 *   Scoped restarts use lpd dev --scoped for fast cold starts (<2 min).
 * @mode execute
 * @pipeline SessionStart hook → ensure server → write state | CLI → health|restart
 * @scope .claude/settings.json SessionStart hook + direct CLI invocation
 * @usage node server-lifecycle.js [health|restart [scope-prefix]]
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      cwd: process.cwd()
    }).trim();
  } catch (_) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();
const SERVER_MANAGER_PATH = path.join(REPO_ROOT, '.githooks', 'server-manager.js');
const PROBE_PATH = '/v2/home/mission-control';

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function writeServerState(state) {
  const statePath = path.join('/tmp', `claude-mdx-server-${getSessionId()}.json`);
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
}

/**
 * Load server-manager without exit handler side effects.
 * server-manager.js registers process.on('exit', stopServer) at load time,
 * which kills the running server when the calling process exits.
 * We strip those handlers so health checks and restarts are safe.
 */
function loadServerManagerReadOnly() {
  const resolved = require.resolve(SERVER_MANAGER_PATH);
  if (require.cache[resolved]) delete require.cache[resolved];

  const exitBefore = process.listeners('exit').slice();
  const sigintBefore = process.listeners('SIGINT').slice();
  const sigtermBefore = process.listeners('SIGTERM').slice();

  const sm = require(SERVER_MANAGER_PATH);

  for (const fn of process.listeners('exit')) {
    if (!exitBefore.includes(fn)) process.removeListener('exit', fn);
  }
  for (const fn of process.listeners('SIGINT')) {
    if (!sigintBefore.includes(fn)) process.removeListener('SIGINT', fn);
  }
  for (const fn of process.listeners('SIGTERM')) {
    if (!sigtermBefore.includes(fn)) process.removeListener('SIGTERM', fn);
  }

  return sm;
}

// ---------------------------------------------------------------------------
// SessionStart mode (no args) — existing behaviour
// ---------------------------------------------------------------------------

async function main() {
  // SessionStart: detect-only. No cold start — too slow for 796 pages.
  // The verify hook starts a scoped server lazily on first MDX edit.
  let serverManager;
  try {
    serverManager = loadServerManagerReadOnly();
  } catch (err) {
    writeServerState({ running: false, error: 'server-manager not found', timestamp: new Date().toISOString() });
    return;
  }

  try {
    const alreadyRunning = await serverManager.isServerRunning({ probePath: PROBE_PATH });

    if (alreadyRunning) {
      const url = serverManager.getServerUrl();
      writeServerState({
        running: true,
        url,
        startedByUs: false,
        timestamp: new Date().toISOString()
      });
      console.log(`Render verification server detected at ${url}`);
    } else {
      writeServerState({
        running: false,
        error: 'No server running. Will start scoped server on first MDX edit.',
        timestamp: new Date().toISOString()
      });
      console.log('No render verification server running. Will start scoped on first MDX edit.');
    }
  } catch (err) {
    writeServerState({
      running: false,
      error: err.message,
      timestamp: new Date().toISOString()
    });
  }
}

// ---------------------------------------------------------------------------
// CLI: health
// ---------------------------------------------------------------------------

async function healthCheck() {
  const os = require('os');
  const crypto = require('crypto');
  const REPO_KEY = crypto.createHash('sha1').update(REPO_ROOT).digest('hex').slice(0, 12);
  const PID_FILE = path.join(os.tmpdir(), `mint-dev-test-${REPO_KEY}.pid`);
  const LOG_FILE = path.join(os.tmpdir(), `mint-dev-test-${REPO_KEY}.log`);
  const statePath = path.join('/tmp', `claude-mdx-server-${getSessionId()}.json`);

  let pid = null;
  try {
    pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
    process.kill(pid, 0);
  } catch (_) {
    pid = null;
  }

  let serverManager;
  try {
    serverManager = loadServerManagerReadOnly();
  } catch (_) {
    serverManager = null;
  }

  let running = false;
  let url = null;
  if (serverManager) {
    running = await serverManager.isServerRunning({ probePath: PROBE_PATH });
    if (running) url = serverManager.getServerUrl();
  }

  const report = {
    running,
    url,
    pid,
    pidFile: PID_FILE,
    logFile: LOG_FILE,
    stateFile: statePath,
    timestamp: new Date().toISOString()
  };

  console.log(JSON.stringify(report, null, 2));

  if (!running) {
    console.error('Server is NOT running. Restart with: node operations/scripts/dispatch/governance/server-lifecycle.js restart v2/home');
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// CLI: restart [scope-prefix]
// Uses scoped mode for fast cold starts. Without scope, falls back to full.
// ---------------------------------------------------------------------------

async function restartServer() {
  // Derive scope from argv: restart [scope-prefix]
  // e.g. "restart v2/home" scopes to just the home tab (~20 pages, <2 min cold start)
  const scopeArg = process.argv[3] || '';
  if (scopeArg) {
    process.env.MINT_SCOPE_PREFIXES = scopeArg;
    console.log(`Scoped restart: ${scopeArg}`);
  } else {
    console.log('WARNING: No scope provided. Full cold start will be very slow (10+ min).');
    console.log('Usage: server-lifecycle.js restart v2/home');
  }

  // Set timeout BEFORE loading server-manager (reads env at module load)
  // Scoped: 2 min. Unscoped: 20 min.
  if (!process.env.MINT_SERVER_MAX_ATTEMPTS) {
    process.env.MINT_SERVER_MAX_ATTEMPTS = scopeArg ? '60' : '600';
  }

  let serverManager;
  try {
    serverManager = loadServerManagerReadOnly();
  } catch (err) {
    console.error(`Server-manager not found at ${SERVER_MANAGER_PATH}: ${err.message}`);
    process.exitCode = 1;
    return;
  }

  // Stop existing server
  console.log('Stopping existing server...');
  serverManager.stopServer();

  // Clear stale PID file
  const os = require('os');
  const crypto = require('crypto');
  const REPO_KEY = crypto.createHash('sha1').update(REPO_ROOT).digest('hex').slice(0, 12);
  const PID_FILE = path.join(os.tmpdir(), `mint-dev-test-${REPO_KEY}.pid`);
  try { fs.unlinkSync(PID_FILE); } catch (_) { /* already gone */ }

  // Start fresh — only use port 3145
  const label = scopeArg ? `scoped (${scopeArg})` : 'full (slow)';
  console.log(`Starting ${label} server on port 3145...`);
  try {
    await serverManager.ensureServerRunning({ probePath: PROBE_PATH, allowCommonPorts: false });
    const url = serverManager.getServerUrl();
    writeServerState({
      running: true,
      url,
      startedByUs: true,
      timestamp: new Date().toISOString()
    });
    console.log(`Server restarted at ${url}`);
  } catch (err) {
    console.error(`Failed to restart server: ${err.message}`);
    writeServerState({
      running: false,
      error: err.message,
      timestamp: new Date().toISOString()
    });
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// CLI dispatch
// ---------------------------------------------------------------------------

const cmd = process.argv[2];
if (cmd === 'health') {
  healthCheck();
} else if (cmd === 'restart') {
  restartServer();
} else {
  main();
}
