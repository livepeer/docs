#!/usr/bin/env node
/**
 * @script sweep-delta-report
 * @type validator
 * @concern content
 * @niche structure
 * @purpose Compares current console error state against baseline and produces a delta report
 * @description Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,
 *   and classifies every route as: new regression, fixed, unchanged, or new page.
 *   Optionally updates the baseline after human review.
 * @mode read-only
 * @pipeline manual — run on demand or on schedule to detect drift
 * @scope operations/tests/baselines/console-baseline.json
 * @usage node operations/scripts/validators/content/structure/sweep-delta-report.js [--update-baseline] [--routes /v2/a,/v2/b] [--base-url http://localhost:3000]
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (_) {
  puppeteer = require(path.join(process.cwd(), 'tools', 'node_modules', 'puppeteer'));
}

const {
  checkRoute,
  getV2Routes,
  ensureServer,
  BASELINE_PATH
} = require('./sweep-console-errors');

const { execSync } = require('child_process');

function getCommitSha() {
  try {
    return execSync('git rev-parse HEAD', { encoding: 'utf8', cwd: process.cwd() }).trim();
  } catch (_) {
    return 'unknown';
  }
}

function parseArgs(argv) {
  const args = { routes: [], baseUrl: '', updateBaseline: false, help: false };

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--update-baseline') { args.updateBaseline = true; continue; }
    if (token === '--routes') { args.routes = String(argv[++i] || '').split(',').map((s) => s.trim()).filter(Boolean); continue; }
    if (token.startsWith('--routes=')) { args.routes = token.slice(9).split(',').map((s) => s.trim()).filter(Boolean); continue; }
    if (token === '--base-url') { args.baseUrl = String(argv[++i] || '').trim(); continue; }
    if (token.startsWith('--base-url=')) { args.baseUrl = token.slice(11).trim(); continue; }
  }

  args.routes = args.routes.map((r) => (r.startsWith('/') ? r : `/${r}`));
  return args;
}

function loadBaseline() {
  try {
    return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8'));
  } catch (_) {
    return null;
  }
}

async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);

  if (args.help) {
    console.log([
      'Usage: node sweep-delta-report.js [options]',
      '',
      'Options:',
      '  --routes <route[,route]>  Only check these routes (default: all v2 from docs.json)',
      '  --base-url <url>          Mintlify server URL (default: auto-detect/auto-start)',
      '  --update-baseline         Overwrite baseline with current results',
      '  --help, -h                Show this message'
    ].join('\n'));
    return 0;
  }

  const baseline = loadBaseline();
  if (!baseline) {
    console.error('No baseline found. Generate one first:');
    console.error('  node operations/scripts/validators/content/structure/sweep-console-errors.js');
    return 1;
  }

  const routes = args.routes.length > 0 ? args.routes : getV2Routes();
  console.log(`Delta sweep: ${routes.length} routes against baseline from ${baseline._meta?.generated || 'unknown'}`);

  const baseUrl = await ensureServer(args.baseUrl);
  console.log(`Server: ${baseUrl}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const regressions = [];
  const fixed = [];
  const unchanged = [];
  const newPages = [];
  const currentResults = {};

  try {
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      const pct = ((i / routes.length) * 100).toFixed(0);
      process.stdout.write(`\r[${pct}%] ${i + 1}/${routes.length} — ${route}                    `);

      const result = await checkRoute(browser, route, baseUrl);
      currentResults[route] = result;

      const baselineEntry = baseline[route];

      if (!baselineEntry) {
        if (!result.clean) {
          newPages.push({ route, errors: result.consoleErrors });
        }
        continue;
      }

      const baselineErrors = new Set(baselineEntry.consoleErrors || []);
      const currentErrors = new Set(result.consoleErrors || []);

      const newErrors = result.consoleErrors.filter((e) => !baselineErrors.has(e));
      const fixedErrors = (baselineEntry.consoleErrors || []).filter((e) => !currentErrors.has(e));

      if (newErrors.length > 0) {
        regressions.push({ route, newErrors, allErrors: result.consoleErrors });
      } else if (fixedErrors.length > 0) {
        fixed.push({ route, fixedErrors });
      } else if (result.consoleErrors.length > 0) {
        unchanged.push({ route, errors: result.consoleErrors });
      }
    }
  } finally {
    await browser.close();
  }

  // Print report
  console.log('\n\n' + '='.repeat(60));

  if (regressions.length > 0) {
    console.log(`\n=== REGRESSIONS (${regressions.length}) — action required ===`);
    for (const r of regressions) {
      console.log(`  ${r.route}: +${r.newErrors.length} new error(s)`);
      r.newErrors.slice(0, 3).forEach((e) => console.log(`    NEW: ${e.substring(0, 120)}`));
    }
  }

  if (fixed.length > 0) {
    console.log(`\n=== FIXED (${fixed.length}) ===`);
    for (const r of fixed) {
      console.log(`  ${r.route}: -${r.fixedErrors.length} error(s) resolved`);
    }
  }

  if (newPages.length > 0) {
    console.log(`\n=== NEW PAGES WITH ERRORS (${newPages.length}) ===`);
    for (const r of newPages) {
      console.log(`  ${r.route}: ${r.errors.length} error(s)`);
      r.errors.slice(0, 2).forEach((e) => console.log(`    - ${e.substring(0, 120)}`));
    }
  }

  if (unchanged.length > 0) {
    console.log(`\n=== UNCHANGED (${unchanged.length}) — known errors, no change ===`);
    for (const r of unchanged) {
      console.log(`  ${r.route}: ${r.errors.length} known error(s)`);
    }
  }

  const cleanCount = routes.length - regressions.length - fixed.length - unchanged.length - newPages.length;
  console.log(`\n=== SUMMARY ===`);
  console.log(`  Total routes:    ${routes.length}`);
  console.log(`  Clean:           ${cleanCount}`);
  console.log(`  Regressions:     ${regressions.length}`);
  console.log(`  Fixed:           ${fixed.length}`);
  console.log(`  Unchanged dirty: ${unchanged.length}`);
  console.log(`  New pages dirty: ${newPages.length}`);

  // Update baseline if requested
  if (args.updateBaseline) {
    const newBaseline = {
      _meta: {
        generated: new Date().toISOString(),
        commit: getCommitSha(),
        totalRoutes: routes.length,
        clean: cleanCount,
        dirty: routes.length - cleanCount
      },
      ...currentResults
    };
    fs.writeFileSync(BASELINE_PATH, JSON.stringify(newBaseline, null, 2) + '\n');
    console.log(`\nBaseline updated at ${BASELINE_PATH}`);
  }

  return regressions.length > 0 ? 1 : 0;
}

if (require.main === module) {
  main().then((code) => process.exit(code));
}
