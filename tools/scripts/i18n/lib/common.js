/**
 * @script common
 * @summary Utility script for tools/scripts/i18n/lib/common.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/common.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/lib/common.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoRel(repoRelPath) {
  return toPosix(String(repoRelPath || '').replace(/^\.\//, '').replace(/^\/+/, ''));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function ensureDirForFile(filePath) {
  ensureDir(path.dirname(filePath));
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  ensureDirForFile(filePath);
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeTextIfChanged(filePath, nextContent) {
  let prev = null;
  try {
    prev = fs.readFileSync(filePath, 'utf8');
  } catch (_err) {
    prev = null;
  }
  if (prev === nextContent) return false;
  ensureDirForFile(filePath);
  fs.writeFileSync(filePath, nextContent, 'utf8');
  return true;
}

function getRepoRoot(cwd = process.cwd()) {
  try {
    return execSync('git rev-parse --show-toplevel', { cwd, encoding: 'utf8' }).trim();
  } catch (_err) {
    return cwd;
  }
}

function chunkArray(items, maxItems, maxChars = Infinity, getSize = (item) => String(item || '').length) {
  const chunks = [];
  let current = [];
  let currentChars = 0;

  for (const item of items) {
    const size = getSize(item);
    const wouldOverflowItems = current.length >= maxItems;
    const wouldOverflowChars = current.length > 0 && currentChars + size > maxChars;
    if (wouldOverflowItems || wouldOverflowChars) {
      chunks.push(current);
      current = [];
      currentChars = 0;
    }
    current.push(item);
    currentChars += size;
  }
  if (current.length > 0) chunks.push(current);
  return chunks;
}

function parseCsv(value) {
  return String(value || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function isExternalHref(href) {
  return /^(https?:\/\/|mailto:|#)/i.test(String(href || '').trim());
}

module.exports = {
  chunkArray,
  ensureDir,
  ensureDirForFile,
  getRepoRoot,
  isExternalHref,
  normalizeRepoRel,
  parseCsv,
  readJson,
  toPosix,
  writeJson,
  writeTextIfChanged
};
