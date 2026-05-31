#!/usr/bin/env node
/**
 * @script      check-write-safety
 * @type        validator
 * @concern     governance
 * @niche       repo
 * @purpose     Flag scripts that write files directly instead of going through tools/lib/bootstrap/safe-io::atomicWrite, and headless-browser launchers that do not register signal cleanup. Mitigates the SIGTERM-mid-write corruption and orphan-Chromium classes that the May 2026 Zombie Prevention thread surfaced.
 * @description Report-only by default — prints offenders and exits 0 so it can be wired into CI without breaking the build during the 222-call-site migration. Promote to blocking by passing --strict or setting WRITE_SAFETY_STRICT=1.
 * @mode        check
 * @pipeline    P3 (PR), P5 (scheduled) — wire under dispatch-governance.yml
 * @scope       operations/scripts/, excluding x-archive/ and archive/
 * @usage       node operations/scripts/validators/governance/repo/check-write-safety.js [--strict] [--json]
 * @policy      D-GOV-08; Principal Engineer audit 2026-05-26 (Script Quality W1, W2)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const SCAN_ROOT = path.join(REPO_ROOT, 'operations/scripts');
const EXCLUDE_DIR_SEGMENTS = new Set(['x-archive', 'archive', 'node_modules']);

function parseArgs(argv) {
  const args = { strict: false, json: false, help: false };
  for (const token of argv) {
    if (token === '--strict') args.strict = true;
    else if (token === '--json') args.json = true;
    else if (token === '--help' || token === '-h') args.help = true;
  }
  if (process.env.WRITE_SAFETY_STRICT === '1') args.strict = true;
  return args;
}

function walkScripts(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIR_SEGMENTS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkScripts(full, out);
    else if (entry.isFile() && entry.name.endsWith('.js')) out.push(full);
  }
  return out;
}

function classify(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const usesSafeIo = /require\(['"][^'"]*tools\/lib\/bootstrap\/safe-io['"]\)/.test(src);
  const directWrite = /\bfs\.writeFileSync\s*\(/.test(src) && !usesSafeIo;
  const spawnsBrowser = /\b(puppeteer|playwright|chromium)\s*\.\s*launch\s*\(/.test(src);
  const hasCleanup =
    /registerCleanup\s*\(/.test(src) ||
    /process\.on\s*\(\s*['"]SIGTERM['"]/.test(src) ||
    /installSignalHandlers\s*\(/.test(src);

  const violations = [];
  if (directWrite) violations.push('non-atomic-write');
  if (spawnsBrowser && !hasCleanup) violations.push('no-signal-cleanup');
  return violations;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/repo/check-write-safety.js [--strict] [--json]');
    console.log('  Default: report-only (exit 0). Use --strict (or WRITE_SAFETY_STRICT=1) to make blocking.');
    process.exit(0);
  }

  const scripts = walkScripts(SCAN_ROOT);
  const findings = [];
  for (const file of scripts) {
    const v = classify(file);
    if (v.length > 0) {
      findings.push({ file: path.relative(REPO_ROOT, file), violations: v });
    }
  }

  if (args.json) {
    process.stdout.write(JSON.stringify({
      scanned: scripts.length,
      findings,
      strict: args.strict,
      exit: args.strict && findings.length > 0 ? 1 : 0,
    }, null, 2) + '\n');
  } else {
    const nonAtomic = findings.filter((f) => f.violations.includes('non-atomic-write')).length;
    const noCleanup = findings.filter((f) => f.violations.includes('no-signal-cleanup')).length;
    process.stderr.write(`\nwrite-safety scan: ${scripts.length} script(s) scanned\n`);
    process.stderr.write(`  ${nonAtomic} non-atomic fs.writeFileSync call(s)\n`);
    process.stderr.write(`  ${noCleanup} headless-browser launch(es) without signal cleanup\n`);
    if (findings.length > 0) {
      process.stderr.write(`\nFirst 10:\n`);
      findings.slice(0, 10).forEach((f) => {
        process.stderr.write(`  [${f.violations.join(',')}]  ${f.file}\n`);
      });
      process.stderr.write(`\nRemediation: replace fs.writeFileSync with atomicWrite from tools/lib/bootstrap/safe-io; register cleanup hooks for browsers.\n`);
    }
  }

  if (args.strict && findings.length > 0) process.exit(1);
  process.exit(0);
}

main();
