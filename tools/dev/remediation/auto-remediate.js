#!/usr/bin/env node
/**
 * @script      auto-remediate
 * @type        dispatch
 * @concern     governance
 * @niche       dev-tools
 * @purpose     infrastructure:pipeline-orchestration
 * @description Central remediation dispatcher for lpd dev. Chains safe remediators in sequence: frontmatter keys, MDX safety, spelling, UK/US spelling, em-dashes, term capitalisation, page links, page imports. Each remediator runs independently — failures are logged but do not halt the chain. Always exits 0.
 * @mode        execute
 * @pipeline    lpd dev — runs automatically on startup unless --no-fix
 * @scope       v2/ (staged files by default, full repo with --full)
 * @usage       node tools/dev/remediation/auto-remediate.js --mode startup [--staged|--full] [--language en-gb|en-us] [--dry-run] [--json]
 */

'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = {
    mode: 'startup',
    scope: 'staged',
    language: 'en-gb',
    dryRun: false,
    json: false,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--mode' && i + 1 < argv.length) { args.mode = argv[++i]; continue; }
    if (token === '--staged') { args.scope = 'staged'; continue; }
    if (token === '--full') { args.scope = 'full'; continue; }
    if (token === '--language' && i + 1 < argv.length) { args.language = argv[++i]; continue; }
    if (token.startsWith('--language=')) { args.language = token.slice('--language='.length); continue; }
    if (token === '--dry-run') { args.dryRun = true; continue; }
    if (token === '--json') { args.json = true; continue; }
    if (token === '--help' || token === '-h') { args.help = true; continue; }
  }
  return args;
}

// ── Remediator chain ────────────────────
// Order matters: frontmatter first, capitalisation last (after spelling)
const REMEDIATOR_CHAIN = [
  {
    name: 'normalise-frontmatter-keys',
    path: 'operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js',
    strategy: 'require',
    supportsLanguage: false,
  },
  {
    name: 'repair-mdx-safe-markdown',
    path: 'operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js',
    strategy: 'require',
    supportsLanguage: false,
  },
  {
    name: 'repair-spelling',
    path: 'operations/scripts/remediators/content/repair/repair-spelling.js',
    strategy: 'spawn',  // async internals
    supportsLanguage: true,
  },
  {
    name: 'remediate-us-spelling',
    path: 'operations/scripts/remediators/content/style/remediate-us-spelling.js',
    strategy: 'require',
    supportsLanguage: true,
  },
  {
    name: 'remediate-em-dashes',
    path: 'operations/scripts/remediators/content/style/remediate-em-dashes.js',
    strategy: 'require',
    supportsLanguage: false,
  },
  {
    name: 'repair-term-capitalisation',
    path: 'operations/scripts/remediators/content/style/repair-term-capitalisation.js',
    strategy: 'require',
    supportsLanguage: false,
  },
  {
    name: 'repair-page-links',
    path: 'operations/scripts/remediators/content/repair/repair-page-links.js',
    strategy: 'spawn',
    supportsLanguage: false,
  },
  {
    name: 'repair-page-imports',
    path: 'operations/scripts/remediators/content/repair/repair-page-imports.js',
    strategy: 'spawn',
    supportsLanguage: false,
  },
];

// ── Run a single remediator via require ─
function runViaRequire(entry, args) {
  const scriptPath = path.join(REPO_ROOT, entry.path);
  try {
    const mod = require(scriptPath);
    if (typeof mod.run !== 'function') {
      return { name: entry.name, status: 'skip', reason: 'no run() export', fixes: 0, files: 0 };
    }

    const runArgs = {
      mode: args.dryRun ? 'dry-run' : 'write',
      stagedOnly: args.scope === 'staged',
      files: [],
      verify: false,
    };

    // normalise-frontmatter-keys uses 'write' boolean not 'mode' string
    if (entry.name === 'normalise-frontmatter-keys') {
      runArgs.write = !args.dryRun;
    }

    if (entry.supportsLanguage) {
      runArgs.language = args.language;
    }

    const result = mod.run({ args: runArgs, quiet: true });
    return {
      name: entry.name,
      status: 'ok',
      fixes: result.totalFixes || 0,
      files: result.filesFixed || 0,
      reverted: result.reverted || 0,
    };
  } catch (err) {
    return { name: entry.name, status: 'error', error: err.message, fixes: 0, files: 0 };
  }
}

// ── Run a single remediator via spawn ───
function runViaSpawn(entry, args) {
  const scriptPath = path.join(REPO_ROOT, entry.path);
  const spawnArgs = [scriptPath];

  if (args.dryRun) {
    spawnArgs.push('--dry-run');
  } else {
    spawnArgs.push('--write');
  }

  if (args.scope === 'staged') {
    spawnArgs.push('--staged');
  }

  if (entry.supportsLanguage) {
    spawnArgs.push('--language', args.language);
  }

  try {
    const result = spawnSync('node', spawnArgs, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      timeout: 60000,
    });

    // Parse fix count from output if possible
    const fixMatch = (result.stdout || '').match(/Total:\s+(\d+)\s+(?:fix|replacement|spelling)/i);
    const fixes = fixMatch ? parseInt(fixMatch[1], 10) : 0;
    const fileMatch = (result.stdout || '').match(/in\s+(\d+)\s+file/i);
    const files = fileMatch ? parseInt(fileMatch[1], 10) : 0;

    return {
      name: entry.name,
      status: result.status === 0 ? 'ok' : 'warning',
      fixes,
      files,
      reverted: 0,
    };
  } catch (err) {
    return { name: entry.name, status: 'error', error: err.message, fixes: 0, files: 0 };
  }
}

// ── Main dispatcher ─────────────────────
function dispatch(args) {
  const results = [];
  let totalFixes = 0;
  let totalFiles = 0;
  let totalErrors = 0;

  for (const entry of REMEDIATOR_CHAIN) {
    let result;
    if (entry.strategy === 'spawn') {
      result = runViaSpawn(entry, args);
    } else {
      result = runViaRequire(entry, args);
    }
    results.push(result);
    totalFixes += result.fixes || 0;
    totalFiles += result.files || 0;
    if (result.status === 'error') totalErrors++;
  }

  return { results, totalFixes, totalFiles, totalErrors };
}

// ── Output ──────────────────────────────
function printSummary(args, outcome) {
  const scopeLabel = args.scope === 'staged' ? 'staged' : 'full';
  const modeLabel = args.dryRun ? 'dry-run' : 'write';

  console.log('\nAuto-remediation summary (' + args.mode + ', ' + scopeLabel + ', ' + args.language + ', ' + modeLabel + ')');
  console.log('\u2500'.repeat(60));

  for (const r of outcome.results) {
    const status = r.status === 'ok' ? '' : r.status === 'skip' ? ' [skipped]' : ' [' + r.status + ']';
    const fixLabel = r.fixes > 0
      ? r.fixes + ' fix' + (r.fixes > 1 ? 'es' : '') + ' in ' + r.files + ' file' + (r.files > 1 ? 's' : '')
      : '0 fixes';
    console.log('  ' + r.name.padEnd(35) + fixLabel + status);
  }

  console.log('\u2500'.repeat(60));
  console.log('  Total: ' + outcome.totalFixes + ' fixes in ' + outcome.totalFiles + ' files (' + outcome.totalErrors + ' errors)');
}

function printJson(outcome) {
  console.log(JSON.stringify(outcome, null, 2));
}

// ── Main ────────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log([
      'Usage: node tools/dev/remediation/auto-remediate.js [flags]',
      '',
      'Flags:',
      '  --mode startup   Remediation mode (default: startup)',
      '  --staged         Process only staged files (default)',
      '  --full           Process all v2 MDX files',
      '  --language X     en-gb (default) or en-us',
      '  --dry-run        Report only, do not write',
      '  --json           Structured JSON output',
      '',
      'Chains 8 safe remediators in sequence. Always exits 0.',
    ].join('\n'));
    process.exit(0);
  }

  const outcome = dispatch(args);

  if (args.json) {
    printJson(outcome);
  } else {
    printSummary(args, outcome);
  }

  // Always exit 0 — remediation is advisory, never blocks dev server
  process.exit(0);
}

main();
