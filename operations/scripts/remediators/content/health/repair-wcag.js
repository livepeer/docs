#!/usr/bin/env node
/**
 * @script      repair-wcag
 * @type        remediator
 * @concern     health
 * @niche       wcag
 * @purpose     Apply deterministic WCAG accessibility fixes to v2 MDX pages
 * @description Pattern E remediator. Wraps the WCAG audit engine's --fix mode to apply safe accessibility autofixes (heading hierarchy, alt text, contrast tokens). Supports --dry-run preview, --verify per-file revert on regression, and --files scoping. Paired with check-wcag in remediation-verify-registry.
 * @mode        repair
 * @pipeline    P6 (scheduled self-heal)
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/remediators/content/health/repair-wcag.js [--dry-run|--write] [--verify] [--files <path[,path...]>] [--staged] [--full] [--fail-impact <level>]
 * @policy      D-GOV-03 (detect-repair-escalate-verify), D-GOV-07 (local CLI equivalence)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const ENGINE = path.join(REPO_ROOT, 'operations', 'tests', 'integration', 'v2-wcag-audit.js');
const REPORT_DIR = path.join(REPO_ROOT, 'workspace', 'reports', 'health', 'wcag');
const REPORT_MD = path.join(REPORT_DIR, 'wcag-repair.md');
const REPORT_JSON = path.join(REPORT_DIR, 'wcag-repair.json');

function parseArgs(argv) {
  const args = { passThrough: [], dryRun: false, verify: false, write: false, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--dry-run') { args.dryRun = true; continue; }
    if (token === '--write') { args.write = true; continue; }
    if (token === '--verify') { args.verify = true; continue; }
    if (token === '--files' || token === '--file') {
      args.passThrough.push(token);
      if (i + 1 < argv.length) { args.passThrough.push(argv[i + 1]); i += 1; }
      continue;
    }
    if (token === '--staged' || token === '--full') { args.passThrough.push(token); continue; }
    if (token === '--fail-impact') {
      args.passThrough.push(token);
      if (i + 1 < argv.length) { args.passThrough.push(argv[i + 1]); i += 1; }
      continue;
    }
    args.passThrough.push(token);
  }

  // Default mode = dry-run (safe). --write must be explicit.
  if (!args.dryRun && !args.write) args.dryRun = true;

  // Scope default: --staged (PR-aligned). Caller can override with --full or --files.
  const hasScope = args.passThrough.some((t) => t === '--staged' || t === '--full' || t === '--files' || t === '--file');
  if (!hasScope) args.passThrough.push('--staged');

  // Disable browser (this is the source-fix wrapper).
  if (!args.passThrough.includes('--max-pages')) {
    args.passThrough.push('--max-pages', '0');
  }

  // Apply fixes in --write; preview only in --dry-run.
  args.passThrough.push(args.write ? '--fix' : '--no-fix');

  return args;
}

function printHelp() {
  console.log('Usage: node operations/scripts/remediators/content/health/repair-wcag.js [flags]');
  console.log('');
  console.log('Apply deterministic WCAG fixes to v2 MDX pages.');
  console.log('');
  console.log('Modes:');
  console.log('  --dry-run               Preview fixes without writing (default)');
  console.log('  --write                 Apply fixes to files');
  console.log('  --verify                After --write, re-validate affected files and revert regressions');
  console.log('');
  console.log('Scope:');
  console.log('  --files <path,path>     Apply to explicit files');
  console.log('  --staged                Apply to staged files (default)');
  console.log('  --full                  Apply to all v2 pages');
  console.log('');
  console.log('Tuning:');
  console.log('  --fail-impact <level>   Fix at this impact level or higher (default: serious)');
}

async function snapshotFiles(filesArg) {
  if (!filesArg) return new Map();
  const list = filesArg.split(',').map((s) => s.trim()).filter(Boolean);
  const snap = new Map();
  for (const rel of list) {
    const abs = path.join(REPO_ROOT, rel);
    if (fs.existsSync(abs)) snap.set(rel, fs.readFileSync(abs));
  }
  return snap;
}

function restoreFiles(snapshot, regressed) {
  let reverted = 0;
  for (const rel of regressed) {
    if (!snapshot.has(rel)) continue;
    const abs = path.join(REPO_ROOT, rel);
    fs.writeFileSync(abs, snapshot.get(rel));
    reverted += 1;
  }
  return reverted;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  if (!args.passThrough.includes('--report')) args.passThrough.push('--report', REPORT_MD);
  if (!args.passThrough.includes('--report-json')) args.passThrough.push('--report-json', REPORT_JSON);

  // Capture pre-repair snapshot only if verifying writes.
  let snapshot = new Map();
  if (args.write && args.verify) {
    const fIdx = args.passThrough.indexOf('--files');
    const fileIdx = fIdx >= 0 ? fIdx : args.passThrough.indexOf('--file');
    if (fileIdx >= 0) snapshot = await snapshotFiles(args.passThrough[fileIdx + 1]);
  }

  process.chdir(REPO_ROOT);
  const engine = require(ENGINE);
  const result = await engine.runAudit({ argv: args.passThrough });
  const totals = result?.summary?.totals || {};
  const applied = totals.autofixes || 0;
  const blocking = totals.blockingTotal || 0;

  if (args.dryRun) {
    console.log(`repair-wcag (dry-run): would apply ${applied} fix(es). Blocking remaining: ${blocking}. Report: ${path.relative(REPO_ROOT, REPORT_MD)}`);
    process.exit(0);
  }

  // Write mode
  if (!args.verify) {
    console.log(`repair-wcag (write): applied ${applied} fix(es). Blocking remaining: ${blocking}.`);
    process.exit(0);
  }

  // Verify mode: re-run validator and revert regressed files
  const checkWcag = path.join(REPO_ROOT, 'operations', 'scripts', 'validators', 'content', 'health', 'check-wcag.js');
  const { spawnSync } = require('child_process');
  // We re-run check on the same scope as the repair
  const checkArgs = ['--no-fix', '--max-pages', '0'];
  const fIdx = args.passThrough.indexOf('--files');
  const fileIdx = fIdx >= 0 ? fIdx : args.passThrough.indexOf('--file');
  if (fileIdx >= 0) checkArgs.push('--files', args.passThrough[fileIdx + 1]);
  else if (args.passThrough.includes('--staged')) checkArgs.push('--staged');
  else checkArgs.push('--full');
  const checkResult = spawnSync(process.execPath, [checkWcag, ...checkArgs], { encoding: 'utf8', cwd: REPO_ROOT });
  const regressed = (checkResult.stdout.match(/v2\/[\S]+\.mdx/g) || []).filter((p, i, a) => a.indexOf(p) === i);
  const reverted = regressed.length > 0 ? restoreFiles(snapshot, regressed) : 0;

  console.log(`repair-wcag (verify): applied ${applied} fix(es); reverted ${reverted} regressed file(s).`);
  process.exit(0);
}

main().catch((error) => {
  console.error(`repair-wcag failed: ${error.message}`);
  process.exit(2);
});
