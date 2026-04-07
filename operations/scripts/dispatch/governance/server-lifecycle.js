/**
 * @script server-lifecycle
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Ensures Mintlify dev server is running at session start for render verification
 * @description SessionStart hook. Auto-starts the Mintlify dev server via server-manager
 *   so that all subsequent render verification hooks have a live server to check against.
 *   One-time cost per session (~2-5 min cold start). If the server is already running,
 *   completes in <1 second. Writes server state to /tmp for downstream hooks.
 * @mode execute
 * @pipeline SessionStart hook → ensure server → write state
 * @scope .claude/settings.json SessionStart hook
 * @usage Called automatically by Claude Code SessionStart hook. Not invoked directly.
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

async function main() {
  let serverManager;
  try {
    serverManager = loadServerManagerReadOnly();
  } catch (err) {
    console.error(`Server-manager not found at ${SERVER_MANAGER_PATH}: ${err.message}`);
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
      console.log(`Render verification server already running at ${url}`);
      return;
    }

    // Server not running — start it
    console.log('Starting Mintlify dev server for render verification...');
    await serverManager.ensureServerRunning({ probePath: PROBE_PATH });
    const url = serverManager.getServerUrl();

    writeServerState({
      running: true,
      url,
      startedByUs: true,
      timestamp: new Date().toISOString()
    });

    console.log(`Render verification server started at ${url}`);
  } catch (err) {
    console.error(`Failed to start render verification server: ${err.message}`);
    writeServerState({
      running: false,
      error: err.message,
      timestamp: new Date().toISOString()
    });
  }
}

// ---------------------------------------------------------------------------
// CLI commands — health and restart for mid-session use
// ---------------------------------------------------------------------------

/**
 * Load server-manager as a read-only probe (no exit handler side effects).
 * server-manager.js registers process.on('exit', stopServer) at load time,
 * which would kill the running server when a health-check process exits.
 * We strip those handlers after requiring so health/status checks are safe.
 */
function loadServerManagerReadOnly() {
  const resolved = require.resolve(SERVER_MANAGER_PATH);
  if (require.cache[resolved]) delete require.cache[resolved];

  const exitListenersBefore = process.listeners('exit').slice();
  const sigintBefore = process.listeners('SIGINT').slice();
  const sigtermBefore = process.listeners('SIGTERM').slice();

  const sm = require(SERVER_MANAGER_PATH);

  // Remove any NEW listeners added by server-manager
  for (const fn of process.listeners('exit')) {
    if (!exitListenersBefore.includes(fn)) process.removeListener('exit', fn);
  }
  for (const fn of process.listeners('SIGINT')) {
    if (!sigintBefore.includes(fn)) process.removeListener('SIGINT', fn);
  }
  for (const fn of process.listeners('SIGTERM')) {
    if (!sigtermBefore.includes(fn)) process.removeListener('SIGTERM', fn);
  }

  return sm;
}

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
    process.kill(pid, 0); // check if alive
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
    console.error('Server is NOT running. Restart with: node operations/scripts/dispatch/governance/server-lifecycle.js restart');
    process.exitCode = 1;
  }
}

async function restartServer() {
  // Set extended timeout BEFORE loading server-manager (reads env at module load)
  if (!process.env.MINT_SERVER_MAX_ATTEMPTS) {
    process.env.MINT_SERVER_MAX_ATTEMPTS = '300'; // 300 × 2s = 10 min for large docs.json
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

  // Clear PID file manually in case stopServer missed it
  const os = require('os');
  const crypto = require('crypto');
  const REPO_KEY = crypto.createHash('sha1').update(REPO_ROOT).digest('hex').slice(0, 12);
  const PID_FILE = path.join(os.tmpdir(), `mint-dev-test-${REPO_KEY}.pid`);
  try { fs.unlinkSync(PID_FILE); } catch (_) { /* already gone */ }

  // Start fresh — only use port 3145, don't hijack random servers on 3000-3010
  console.log('Starting server on port 3145 (up to 10 min for cold start)...');
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
