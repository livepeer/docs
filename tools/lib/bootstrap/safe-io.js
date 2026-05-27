'use strict';
/**
 * @script            safe-io
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             full-repo
 * @owner             docs
 * @needs             D-GOV-08
 * @purpose-statement Atomic file-write helper plus signal-handler bootstrap. Use in any script that writes files or owns long-lived child processes (Puppeteer, dev server, MCP browser).
 * @pipeline          indirect — library module
 * @usage             const { atomicWrite, registerCleanup } = require('../../tools/lib/bootstrap/safe-io');
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const cleanupHooks = [];
let signalsInstalled = false;

/**
 * Atomically write content to filePath using a sibling .tmp + rename.
 * The temp file lives in the same directory as the target so the rename
 * stays on the same filesystem (POSIX rename(2) is atomic in that case).
 * On any failure, the temp file is best-effort removed.
 */
function atomicWrite(filePath, content, { mode = 0o644, encoding = 'utf8' } = {}) {
  const dir = path.dirname(filePath);
  const tmpName = `.${path.basename(filePath)}.${process.pid}.${crypto.randomBytes(4).toString('hex')}.tmp`;
  const tmpPath = path.join(dir, tmpName);
  try {
    fs.writeFileSync(tmpPath, content, { mode, encoding });
    fs.renameSync(tmpPath, filePath);
  } catch (err) {
    try { fs.unlinkSync(tmpPath); } catch (_) { /* tmp may not exist */ }
    throw err;
  }
}

/**
 * Register a cleanup hook to run on SIGTERM/SIGINT/SIGHUP.
 * Hooks run in registration order. May return a Promise; awaited.
 * Installing the first hook also installs the signal handlers.
 */
function registerCleanup(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('registerCleanup expects a function');
  }
  cleanupHooks.push(fn);
  installSignalHandlers();
}

/**
 * Idempotently install SIGTERM/SIGINT/SIGHUP handlers that drain
 * registered cleanup hooks before exiting. Exit codes follow
 * convention: SIGTERM → 0 (graceful), SIGINT → 130, SIGHUP → 129.
 */
function installSignalHandlers() {
  if (signalsInstalled) return;
  signalsInstalled = true;

  const runCleanup = (signal, exitCode) => {
    return async () => {
      process.stderr.write(`\n[safe-io] ${signal} received — draining ${cleanupHooks.length} cleanup hook(s)\n`);
      for (const fn of cleanupHooks) {
        try {
          await fn();
        } catch (e) {
          process.stderr.write(`[safe-io] cleanup hook failed: ${e && e.message ? e.message : e}\n`);
        }
      }
      process.exit(exitCode);
    };
  };

  process.on('SIGTERM', runCleanup('SIGTERM', 0));
  process.on('SIGINT', runCleanup('SIGINT', 130));
  process.on('SIGHUP', runCleanup('SIGHUP', 129));
}

module.exports = { atomicWrite, registerCleanup, installSignalHandlers };
