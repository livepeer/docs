#!/usr/bin/env node
/**
 * @script            server-manager
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             .githooks
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Manages Mintlify dev server lifecycle for browser tests (start/stop/health-check)
 * @pipeline          manual — developer tool
 * @usage             node .githooks/server-manager.js [flags]
 */
/**
 * Server management utility for browser tests
 * Automatically starts mint dev if not running and manages the process lifecycle
 */

const { spawn, execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Use a dedicated port for browser validation tests (unlikely to be in use)
const TEST_PORT = 3145;
const BASE_URL = process.env.MINT_BASE_URL || `http://localhost:${TEST_PORT}`;
const PORT = new URL(BASE_URL).port || TEST_PORT;
const PID_FILE = path.join(os.tmpdir(), 'mint-dev-test.pid');
const LOG_FILE = path.join(os.tmpdir(), 'mint-dev-test.log');

let serverProcess = null;
let serverStartedByUs = false;
let actualServerUrl = BASE_URL; // Will be updated if port is detected from log
let detectedServerPort = null; // Port where server was actually found

/**
 * Check if server is already running (on expected port, detected port, or common ports)
 */
async function isServerRunning(options = {}) {
  const { probePath, allowCommonPorts = true } = options;
  // Check expected port first (3145)
  if (await isServerRunningOnPort(PORT, probePath)) {
    return true;
  }
  
  // Check common mint dev ports (3000, 3001, 3002, etc.)
  // Mint dev often uses these ports if 3000 is in use
  if (allowCommonPorts) {
    for (let commonPort = 3000; commonPort <= 3010; commonPort++) {
      if (await isServerRunningOnPort(commonPort, probePath)) {
        // Found server on common port - store it for getServerUrl()
        detectedServerPort = commonPort;
        console.log(`   Found existing server on port ${commonPort}, using it`);
        return true;
      }
    }
  }
  
  // Check if log shows server on different port
  if (allowCommonPorts) {
    const detectedPort = detectPortFromLog();
    if (detectedPort && detectedPort !== PORT) {
      return await isServerRunningOnPort(detectedPort, probePath);
    }
  }
  
  return false;
}

/**
 * Parse log file to detect actual port mint dev is using
 * Looks for patterns like "local → http://localhost:3001" or "port 3000 is already in use. trying 3001 instead"
 */
function detectPortFromLog() {
  if (!fs.existsSync(LOG_FILE)) {
    return null;
  }
  
  try {
    const logContent = fs.readFileSync(LOG_FILE, 'utf8');
    
    const lastMatch = (regex) => {
      const matches = [...logContent.matchAll(regex)];
      if (!matches.length) return null;
      const last = matches[matches.length - 1];
      return last && last[1] ? parseInt(last[1], 10) : null;
    };
    
    // Pattern 1: "local → http://localhost:XXXX"
    const localPort = lastMatch(/local\s*→\s*http:\/\/localhost:(\d+)/gi);
    if (localPort) {
      return localPort;
    }
    
    // Pattern 2: "port XXXX is already in use. trying YYYY instead"
    const portPort = lastMatch(/port\s+\d+\s+is\s+already\s+in\s+use\.\s+trying\s+(\d+)\s+instead/gi);
    if (portPort) {
      return portPort;
    }
    
    // Pattern 3: "preview ready" followed by port info
    const previewPort = lastMatch(/preview\s+ready[^\n]*localhost:(\d+)/gi);
    if (previewPort) {
      return previewPort;
    }
  } catch (e) {
    // Ignore errors reading log
  }
  
  return null;
}

/**
 * Check if server is running on a specific port
 */
function normalizeProbePath(probePath) {
  if (!probePath) {
    return '';
  }
  return probePath.startsWith('/') ? probePath : `/${probePath}`;
}

async function isServerRunningOnPort(port, probePath) {
  const pathSuffix = normalizeProbePath(probePath);
  const url = `http://localhost:${port}${pathSuffix}`;
  return new Promise((resolve) => {
    const req = http.get(url, { timeout: 2000 }, (res) => {
      if (!Number.isInteger(res.statusCode)) {
        resolve(false);
        return;
      }
      if (pathSuffix) {
        // Treat 404 on probe paths as a mismatch (not the expected server).
        resolve(res.statusCode !== 404);
        return;
      }
      // Any HTTP response means the server is up (Mint may return redirects during startup).
      resolve(res.statusCode > 0);
    });
    
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

/**
 * Wait for server to be ready, checking expected port, common ports, and detected port from log
 */
async function waitForServer(maxAttempts = 60, interval = 2000, options = {}) {
  const { probePath, allowCommonPorts = true } = options;
  for (let i = 0; i < maxAttempts; i++) {
    // First check expected port (3145)
    if (await isServerRunningOnPort(PORT, probePath)) {
      return true;
    }
    
    // Check common ports (3000-3010) - mint dev often uses these if 3145 is unavailable
    if (allowCommonPorts) {
      for (let commonPort = 3000; commonPort <= 3010; commonPort++) {
        if (await isServerRunningOnPort(commonPort, probePath)) {
          detectedServerPort = commonPort;
          console.log(`   Server started on port ${commonPort} (expected ${PORT})`);
          return true;
        }
      }
    }
    
    // If not on expected or common ports, try to detect from log (after a few attempts to let log populate)
    if (allowCommonPorts && i >= 3) {
      const detectedPort = detectPortFromLog();
      if (detectedPort && detectedPort !== PORT) {
        // Check detected port
        if (await isServerRunningOnPort(detectedPort, probePath)) {
          detectedServerPort = detectedPort;
          console.log(`   Server detected on port ${detectedPort} from log (expected ${PORT})`);
          return true;
        }
      }
    }
    
    if (i < maxAttempts - 1) {
      await new Promise(resolve => setTimeout(resolve, interval));
    }
  }
  return false;
}

/**
 * Start mint dev server
 */
function startServer() {
  // Check if already running from a previous test
  if (fs.existsSync(PID_FILE)) {
    try {
      const existingPid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim());
      // Check if process is still running
      try {
        process.kill(existingPid, 0); // Signal 0 just checks if process exists
        console.log(`⚠️  Found existing mint dev process (PID: ${existingPid}), reusing...`);
        serverStartedByUs = false;
        return existingPid;
      } catch (e) {
        // Process doesn't exist, remove stale PID file
        fs.unlinkSync(PID_FILE);
      }
    } catch (e) {
      // Ignore errors reading PID file
    }
  }

  console.log(`🚀 Starting mint dev server on port ${PORT}...`);
  
  // Start mint dev in background with specific port via environment variable
  // Use 'pipe' instead of WriteStream directly to avoid stdio issues
  serverProcess = spawn('mint', ['dev', '--port', PORT.toString(), '--no-open'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true,
    shell: true,
    env: {
      ...process.env,
      PORT: PORT.toString()
    }
  });
  
  // Redirect output to log file
  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
  if (serverProcess.stdout) {
    serverProcess.stdout.pipe(logStream);
  }
  if (serverProcess.stderr) {
    serverProcess.stderr.pipe(logStream);
  }
  
  serverProcess.unref(); // Allow parent process to exit independently
  
  // Save PID
  fs.writeFileSync(PID_FILE, serverProcess.pid.toString());
  serverStartedByUs = true;
  
  console.log(`   Started with PID: ${serverProcess.pid}`);
  console.log(`   Logs: ${LOG_FILE}`);
  
  return serverProcess.pid;
}

/**
 * Stop mint dev server (if we started it)
 */
function stopServer() {
  if (!serverStartedByUs) {
    return; // Don't kill server we didn't start
  }
  
  if (fs.existsSync(PID_FILE)) {
    try {
      const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim());
      console.log(`🛑 Stopping mint dev server (PID: ${pid})...`);
      
      // Try graceful shutdown first
      try {
        if (process.platform === 'win32') {
          execSync(`taskkill /PID ${pid} /T /F`, { stdio: 'ignore' });
        } else {
          process.kill(pid, 'SIGTERM');
          // Wait a bit, then force kill if still running
          setTimeout(() => {
            try {
              process.kill(pid, 'SIGKILL');
            } catch (e) {
              // Process already dead
            }
          }, 2000);
        }
      } catch (e) {
        // Process might already be dead
      }
      
      fs.unlinkSync(PID_FILE);
    } catch (e) {
      // Ignore errors
    }
  }
  
  if (serverProcess) {
    try {
      serverProcess.kill();
    } catch (e) {
      // Ignore
    }
  }
}

/**
 * Ensure server is running (start if needed)
 */
async function ensureServerRunning(options = {}) {
  const { probePath, allowCommonPorts = true } = options;
  // Reset detected port so each run uses fresh discovery.
  detectedServerPort = null;
  // Check if already running
  if (await isServerRunning({ probePath, allowCommonPorts })) {
    console.log(`✅ Server already running at ${getServerUrl()}`);
    return false; // Didn't start it
  }
  
  // Start it
  startServer();
  
  // Wait for it to be ready (checks common ports 3000-3010, not just 3145)
  console.log(`⏳ Waiting for server to be ready (max 2 minutes)...`);
  const ready = await waitForServer(60, 2000, { probePath, allowCommonPorts });
  
  if (!ready) {
    console.error(`❌ Server failed to start within 2 minutes`);
    console.error(`   Check logs: ${LOG_FILE}`);
    stopServer();
    throw new Error('Server failed to start');
  }
  
  // Get the actual port where server is running (waitForServer already set detectedServerPort)
  const actualUrl = getServerUrl();
  console.log(`✅ Server is ready at ${actualUrl}`);
  return true; // We started it
}

// Cleanup on process exit
process.on('exit', stopServer);
process.on('SIGINT', () => {
  stopServer();
  process.exit(0);
});
process.on('SIGTERM', () => {
  stopServer();
  process.exit(0);
});

/**
 * Get the actual server URL (may differ from BASE_URL if port was auto-selected)
 */
function getServerUrl() {
  // Use detected server port if we found one from isServerRunning()
  if (detectedServerPort) {
    return `http://localhost:${detectedServerPort}`;
  }
  
  // Check if we detected a different port from log
  const detectedPort = detectPortFromLog();
  if (detectedPort && detectedPort !== PORT) {
    return `http://localhost:${detectedPort}`;
  }
  
  // Default to expected port
  return BASE_URL;
}

module.exports = {
  ensureServerRunning,
  isServerRunning,
  waitForServer,
  startServer,
  stopServer,
  getServerUrl
};
