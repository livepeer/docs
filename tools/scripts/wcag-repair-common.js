#!/usr/bin/env node
/**
 * @script wcag-repair-common
 * @summary Apply conservative WCAG-related source autofixes across v2 docs (common raw-tag issues) and write deterministic repair reports.
 * @owner docs
 * @scope tools/scripts, tests/integration, tasks/reports, v2
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/wcag-repair-common.js --full
 *
 * @inputs
 *   --full (default)
 *   --staged
 *   --files <path[,path...]> (repeatable; explicit files mode)
 *   --fix | --no-fix (default: --fix)
 *   --stage (git add only content files changed by autofix)
 *   --fail-impact <critical|serious|moderate|minor|none> (default: serious)
 *   --report <path> (default: tasks/reports/quality-accessibility/v2-wcag-repair-common-report.md)
 *   --report-json <path> (default: tasks/reports/quality-accessibility/v2-wcag-repair-common-report.json)
 *
 * @outputs
 *   - tasks/reports/quality-accessibility/v2-wcag-repair-common-report.md (default)
 *   - tasks/reports/quality-accessibility/v2-wcag-repair-common-report.json (default)
 *   - v2/*.mdx or v2/*.md changes when --fix (default) applies conservative autofixes
 *
 * @exit-codes
 *   0 = repair pass completed with no blocking issues at configured threshold
 *   1 = runtime error or blocking issues remain at configured threshold
 *
 * @examples
 *   node tools/scripts/wcag-repair-common.js --full
 *   node tools/scripts/wcag-repair-common.js --staged --stage
 *   node tools/scripts/wcag-repair-common.js --files v2/home/primer.mdx --no-fix
 *
 * @notes
 *   This wrapper disables browser auditing (`--max-pages 0`) and runs the shared WCAG audit engine in static/autofix mode only.
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
