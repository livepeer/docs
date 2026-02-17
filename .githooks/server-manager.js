#!/usr/bin/env node
/**
 * Server management utility for browser tests
 * Automatically starts mint dev if not running and manages the process lifecycle
 */

const { spawn, execSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const BASE_URL = process.env.MINT_BASE_URL || 'http://localhost:3000';
const PORT = new URL(BASE_URL).port || 3000;
const PID_FILE = path.join(os.tmpdir(), 'mint-dev-test.pid');
const LOG_FILE = path.join(os.tmpdir(), 'mint-dev-test.log');

let serverProcess = null;
let serverStartedByUs = false;

/**
 * Check if server is already running
 */
async function isServerRunning() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, { timeout: 2000 }, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 404); // 404 means server is up but page doesn't exist
    });
    
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

/**
 * Wait for server to be ready
 */
async function waitForServer(maxAttempts = 60, interval = 2000) {
  for (let i = 0; i < maxAttempts; i++) {
    if (await isServerRunning()) {
      return true;
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

  console.log('🚀 Starting mint dev server...');
  
  // Start mint dev in background
  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
  
  serverProcess = spawn('mint', ['dev'], {
    stdio: ['ignore', logStream, logStream],
    detached: true,
    shell: true
  });
  
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
async function ensureServerRunning() {
  // Check if already running
  if (await isServerRunning()) {
    console.log(`✅ Server already running at ${BASE_URL}`);
    return false; // Didn't start it
  }
  
  // Start it
  startServer();
  
  // Wait for it to be ready
  console.log(`⏳ Waiting for server to be ready (max 2 minutes)...`);
  const ready = await waitForServer(60, 2000);
  
  if (!ready) {
    console.error(`❌ Server failed to start within 2 minutes`);
    console.error(`   Check logs: ${LOG_FILE}`);
    stopServer();
    throw new Error('Server failed to start');
  }
  
  console.log(`✅ Server is ready at ${BASE_URL}`);
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

module.exports = {
  ensureServerRunning,
  isServerRunning,
  waitForServer,
  startServer,
  stopServer
};
