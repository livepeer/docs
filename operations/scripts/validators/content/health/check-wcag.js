#!/usr/bin/env node
/**
 * @script      check-wcag
 * @type        validator
 * @concern     health
 * @niche       wcag
 * @purpose     WCAG accessibility validation for changed v2 MDX pages
 * @description PR-time advisory validator. Wraps the WCAG audit engine in --no-fix mode and reports blocking findings (impact level configurable). Exits non-zero if blocking violations are found.
 * @mode        check
 * @pipeline    P3 (PR advisory)
 * @scope       v2 MDX pages
 * @usage       node operations/scripts/validators/content/health/check-wcag.js [--files <path[,path...]>] [--staged] [--full] [--fail-impact minor|moderate|serious|critical] [--json]
 * @policy      D-GOV-03 (detect-repair-escalate-verify), D-GOV-07 (local CLI equivalence)
 */

'use strict';

const path = require('path');

const REPO_ROOT = process.cwd();
const ENGINE = path.join(REPO_ROOT, 'operations', 'tests', 'integration', 'v2-wcag-audit.js');

function parseArgs(argv) {
  const args = { passThrough: ['--no-fix'], help: false, json: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--json') { args.json = true; args.passThrough.push('--report-json', '/dev/stdout'); continue; }
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
  // Default scope = staged (PR-friendly) unless caller chose
  const hasScope = args.passThrough.some((t) => t === '--staged' || t === '--full' || t === '--files' || t === '--file');
  if (!hasScope) args.passThrough.push('--staged');
  // Disable browser to keep validator fast on PR
  if (!args.passThrough.includes('--max-pages')) {
    args.passThrough.push('--max-pages', '0');
  }
  return args;
}

function printHelp() {
  console.log('Usage: node operations/scripts/validators/content/health/check-wcag.js [flags]');
  console.log('');
  console.log('PR-time WCAG validator. Exits non-zero if blocking findings detected.');
  console.log('');
  console.log('Flags:');
  console.log('  --files <path,path>     Validate explicit files');
  console.log('  --staged                Validate staged files only (default)');
  console.log('  --full                  Validate all v2 pages');
  console.log('  --fail-impact <level>   Block on this impact level or higher (default: serious)');
  console.log('  --json                  Emit machine-readable report to stdout');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }
  process.chdir(REPO_ROOT);
  const engine = require(ENGINE);
  const result = await engine.runAudit({ argv: args.passThrough });
  const blocking = result?.summary?.totals?.blockingTotal || 0;
  if (!args.json) {
    if (blocking > 0) {
      console.log(`check-wcag: FAIL — ${blocking} blocking WCAG finding(s)`);
    } else {
      console.log('check-wcag: PASS — no blocking WCAG findings');
    }
  }
  process.exit(result.exitCode || 0);
}

main().catch((error) => {
  console.error(`check-wcag failed: ${error.message}`);
  process.exit(2);
});
