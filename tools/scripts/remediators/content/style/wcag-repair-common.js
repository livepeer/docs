#!/usr/bin/env node
/**
 * @script            wcag-repair-common
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             tools/scripts, tests/integration, tasks/reports, v2
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement WCAG repair shared logic — common repair functions used by WCAG audit fix mode
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/wcag-repair-common.js [flags]
 */

const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const DEFAULT_REPORT_MD = path.join(REPO_ROOT, 'tasks', 'reports', 'quality-accessibility', 'v2-wcag-repair-common-report.md');
const DEFAULT_REPORT_JSON = path.join(REPO_ROOT, 'tasks', 'reports', 'quality-accessibility', 'v2-wcag-repair-common-report.json');

function parseWrapperArgs(argv) {
  const passThrough = [];
  let reportProvided = false;
  let reportJsonProvided = false;
  let modeSet = false;

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      return { help: true, argv: [] };
    }
    if (token === '--full' || token === '--staged') {
      modeSet = true;
      passThrough.push(token);
      continue;
    }
    if (token === '--files' || token === '--file') {
      passThrough.push(token);
      if (i + 1 < argv.length) {
        passThrough.push(argv[i + 1]);
        i += 1;
      }
      continue;
    }
    if (token === '--report') {
      reportProvided = true;
      passThrough.push(token);
      if (i + 1 < argv.length) {
        passThrough.push(argv[i + 1]);
        i += 1;
      }
      continue;
    }
    if (token === '--report-json') {
      reportJsonProvided = true;
      passThrough.push(token);
      if (i + 1 < argv.length) {
        passThrough.push(argv[i + 1]);
        i += 1;
      }
      continue;
    }
    // Pass through supported/shared flags transparently.
    passThrough.push(token);
  }

  const out = [];
  if (!modeSet) out.push('--full');
  out.push(...passThrough);

  // Default to applying safe fixes unless the caller explicitly disabled them.
  if (!out.includes('--fix') && !out.includes('--no-fix')) {
    out.push('--fix');
  }

  // Disable browser auditing; this is the common-repair wrapper.
  if (!out.includes('--max-pages')) {
    out.push('--max-pages', '0');
  }

  if (!reportProvided) {
    out.push('--report', DEFAULT_REPORT_MD);
  }
  if (!reportJsonProvided) {
    out.push('--report-json', DEFAULT_REPORT_JSON);
  }

  return { help: false, argv: out };
}

function printHelp() {
  console.log(`Usage: node tools/scripts/wcag-repair-common.js [--full|--staged|--files <path[,path...]>] [--fix|--no-fix] [--stage] [--fail-impact <level>] [--report <path>] [--report-json <path>]`);
  console.log('');
  console.log('Applies conservative WCAG-related source autofixes only (no browser audit) using the shared tests/integration WCAG engine.');
  console.log('Usable via lpd script runner: lpd tools wcag-repair-common -- --staged --stage');
}

async function main() {
  const parsed = parseWrapperArgs(process.argv.slice(2));
  if (parsed.help) {
    printHelp();
    process.exit(0);
  }

  process.chdir(REPO_ROOT);
  const wcagAudit = require(path.join(REPO_ROOT, 'tests', 'integration', 'v2-wcag-audit.js'));
  const result = await wcagAudit.runAudit({ argv: parsed.argv });
  process.exit(result.exitCode || 0);
}

main().catch((error) => {
  console.error(`wcag-repair-common failed: ${error.message}`);
  process.exit(1);
});
