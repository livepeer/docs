#!/usr/bin/env node
/**
 * @script      audit-wcag
 * @type        audit
 * @concern     health
 * @niche       wcag
 * @purpose     Scheduled WCAG accessibility scan across all v2 pages
 * @description Pattern D scan-report-act. Runs the WCAG audit engine in --no-fix --full mode, writes report to workspace/reports/health/wcag/, and emits a structured JSON summary on stdout so the workflow can route findings (rolling issue create/update/close).
 * @mode        scan
 * @pipeline    P5 (scheduled, advisory)
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/audits/content/health/audit-wcag.js [--fail-impact minor|moderate|serious|critical] [--max-pages <n>] [--json]
 * @policy      D-GOV-03 (no headless scans), D-GOV-07 (local CLI equivalence)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const ENGINE = path.join(REPO_ROOT, 'operations', 'tests', 'integration', 'v2-wcag-audit.js');
const REPORT_DIR = path.join(REPO_ROOT, 'workspace', 'reports', 'health', 'wcag');
const REPORT_MD = path.join(REPORT_DIR, 'wcag-audit.md');
const REPORT_JSON = path.join(REPORT_DIR, 'wcag-audit.json');

function parseArgs(argv) {
  const args = { passThrough: ['--no-fix', '--full'], json: false, help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--json') { args.json = true; continue; }
    if (token === '--fail-impact') {
      args.passThrough.push(token);
      if (i + 1 < argv.length) { args.passThrough.push(argv[i + 1]); i += 1; }
      continue;
    }
    if (token === '--max-pages') {
      args.passThrough.push(token);
      if (i + 1 < argv.length) { args.passThrough.push(argv[i + 1]); i += 1; }
      continue;
    }
    args.passThrough.push(token);
  }
  return args;
}

function printHelp() {
  console.log('Usage: node operations/scripts/audits/content/health/audit-wcag.js [flags]');
  console.log('');
  console.log('Scheduled WCAG accessibility scan. Writes report to workspace/reports/health/wcag/.');
  console.log('');
  console.log('Flags:');
  console.log('  --fail-impact <level>   Track findings at this impact level or higher (default: serious)');
  console.log('  --max-pages <n>         Cap pages audited (0 = unlimited)');
  console.log('  --json                  Emit JSON summary on stdout (for workflow consumption)');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  if (!args.passThrough.some((t) => t === '--report')) {
    args.passThrough.push('--report', REPORT_MD);
  }
  if (!args.passThrough.some((t) => t === '--report-json')) {
    args.passThrough.push('--report-json', REPORT_JSON);
  }

  process.chdir(REPO_ROOT);
  const engine = require(ENGINE);
  const result = await engine.runAudit({ argv: args.passThrough });
  const totals = result?.summary?.totals || {};
  const blocking = totals.blockingTotal || 0;

  if (args.json) {
    const out = {
      passed: blocking === 0,
      blocking,
      wcag_violations: totals.wcagViolations || 0,
      best_practice: totals.bestPracticeViolations || 0,
      static_open: totals.staticOpen || 0,
      static_fixed: totals.staticFixed || 0,
      autofixes: totals.autofixes || 0,
      report_md: path.relative(REPO_ROOT, REPORT_MD),
      report_json: path.relative(REPO_ROOT, REPORT_JSON),
    };
    console.log(JSON.stringify(out, null, 2));
  } else {
    if (blocking > 0) {
      console.log(`audit-wcag: ${blocking} blocking finding(s). Report: ${path.relative(REPO_ROOT, REPORT_MD)}`);
    } else {
      console.log(`audit-wcag: clean. Report: ${path.relative(REPO_ROOT, REPORT_MD)}`);
    }
  }
  // Exit 0 for scheduled scans even with findings (rolling issue carries the state).
  process.exit(0);
}

main().catch((error) => {
  console.error(`audit-wcag failed: ${error.message}`);
  process.exit(2);
});
