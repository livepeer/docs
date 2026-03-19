#!/usr/bin/env node
/**
 * @script            debug-mint-dev
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Mintlify dev debugger — diagnostic tool for troubleshooting mint dev server issues
 * @pipeline          manual — developer tool
 * @usage             node tools/scripts/debug-mint-dev.js [flags]
 */
/**
 * Debug script: gather evidence for why "mint dev" hangs at "preparing local preview".
 * Writes NDJSON to .cursor/debug.log. Run from repo root: node scripts/debug-mint-dev.js
 */
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

const LOG_PATH = path.join(__dirname, '..', '.cursor', 'debug.log');
const TIMEOUT_MS = 25000;

function log(obj) {
  const line = JSON.stringify({ ...obj, timestamp: Date.now() }) + '\n';
  const dir = path.dirname(LOG_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.appendFileSync(LOG_PATH, line);
}

function safe(fn, fallback) {
  try { return fn(); } catch (e) { return fallback !== undefined ? fallback : (e.message || String(e)); }
}

// H1: what is "mint"?
const whichMint = safe(() => execSync('which mint', { encoding: 'utf8' }).trim());
const typeMint = safe(() => execSync('type mint 2>/dev/null || true', { encoding: 'utf8', shell: '/bin/bash' }).trim());
log({ hypothesisId: 'H1', message: 'which mint', data: { whichMint, typeMint } });

// H2: cache dirs
const home = os.homedir();
const mintlifyDir = path.join(home, '.mintlify');
const mintlifyLast = path.join(home, '.mintlify-last');
const statMintlify = safe(() => fs.existsSync(mintlifyDir) ? (fs.statSync(mintlifyDir).isDirectory() ? 'dir' : 'other') : 'missing');
const statLast = safe(() => fs.existsSync(mintlifyLast) ? (fs.statSync(mintlifyLast).isDirectory() ? 'dir' : 'other') : 'missing');
let lastDirContents = 'N/A';
if (fs.existsSync(mintlifyLast) && fs.statSync(mintlifyLast).isDirectory()) {
  lastDirContents = safe(() => fs.readdirSync(mintlifyLast).join(','), '');
}
log({ hypothesisId: 'H2', message: 'cache dirs', data: { mintlifyDir: statMintlify, mintlifyLast: statLast, lastDirContents } });

// H4: package.json scripts
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkgScripts = safe(() => {
  const p = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  return p.scripts ? Object.keys(p.scripts) : [];
}, []);
log({ hypothesisId: 'H4', message: 'package.json scripts', data: { scripts: pkgScripts } });

// Run mint dev with timeout; capture first chunk of output (H3/H5: parse or network)
log({ hypothesisId: 'H3_H5', message: 'mint dev start' });
const cwd = path.join(__dirname, '..');
const child = spawn('mint', ['dev'], { cwd, stdio: ['ignore', 'pipe', 'pipe'], shell: false });
let out = '';
let err = '';
child.stdout.on('data', (chunk) => { out += chunk.toString(); });
child.stderr.on('data', (chunk) => { err += chunk.toString(); });
const timeout = setTimeout(() => {
  child.kill('SIGKILL');
  log({ hypothesisId: 'H3_H5', message: 'mint dev timeout', data: { stdout: out.slice(-2000), stderr: err.slice(-2000), killed: true } });
  setTimeout(() => process.exit(0), 500);
}, TIMEOUT_MS);
child.on('close', (code, signal) => {
  clearTimeout(timeout);
  log({ hypothesisId: 'H3_H5', message: 'mint dev exit', data: { code, signal, stdoutTail: out.slice(-1500), stderrTail: err.slice(-1500) } });
});
child.on('error', (e) => {
  clearTimeout(timeout);
  log({ hypothesisId: 'H1', message: 'mint dev spawn error', data: { error: e.message, code: e.code } });
  process.exit(1);
});
child.on('exit', () => { process.exit(0); });
