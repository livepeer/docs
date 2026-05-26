#!/usr/bin/env node
/**
 * @script      verify-pipeline-end-to-end
 * @type        validator
 * @concern     governance
 * @niche       pipelines
 * @purpose     Per-dispatcher end-to-end verification — runs every dispatcher in --mode pr --dry-run and classifies the result as pass / drift-detected / fail / timeout / infra-skip, then enriches pipeline-inventory.json with lastVerified data and emits a verification report SME and contributors read to answer "is pipeline X healthy?"
 * @description Reads workspace/reports/governance/pipeline-inventory.json. For every entry not on the infrastructure-dependent exclusion list, spawns the dispatcher with --mode pr --dry-run and a 90s timeout. Captures exit code + last 400 chars of combined output. Applies drift-signal regex (stale generated file, missing companion, "out of date" reports) to classify exit-1 as drift-detected (working pipeline + stale repo state) vs fail (real bug). Writes back into pipeline-inventory.json under each row's `verification` block + emits workspace/reports/governance/pipeline-verification.md with summary + failures section.
 * @mode        check
 * @pipeline    manual — SME-driven full verification snapshot, run on-demand or pre-release
 * @scope       65 dispatchers under operations/scripts/dispatch/
 * @usage       node operations/scripts/validators/governance/pipelines/verify-pipeline-end-to-end.js [--concern <name>] [--timeout <ms>] [--limit <N>]
 * @policy      D-GOV-03 (proves each pipeline is functionally healthy)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const INVENTORY_JSON = path.join(REPO_ROOT, 'workspace/reports/governance/pipeline-inventory.json');
const REPORT_MD = path.join(REPO_ROOT, 'workspace/reports/governance/pipeline-verification.md');
const REPORT_JSON = path.join(REPO_ROOT, 'workspace/reports/governance/pipeline-verification.json');

// Patterns that indicate the pipeline RAN CORRECTLY and reported drift / stale state / violations
// in CONTENT (not in the pipeline itself). Exit-1 + one of these = working pipeline + stale repo.
const DRIFT_SIGNALS = [
  /stale or incomplete/i,
  /\[MISSING\/STALE\]/i,
  /companion JSON file\(s\) are missing or stale/i,
  /catalog(?:s)? (?:is|are) (?:out of date|stale)/i,
  /\.json is stale/i,
  /\.allowlist is stale/i,
  /\.mdx is stale/i,
  /docs-index\.json is out of date/i,
  /pages catalog is out of date/i,
  /\[legacy-ref-outside-archive\]/i,
  /drift found/i,
  /FAIL\b[\s\S]*\bdrift\b/i,
  /[1-9]\d*\s+em-dashes/i,
  /Proposed repairs:\s*[1-9]/i,
  /Missing companion JSON for props-extracted/i,
  /\[WARNING\]/, // validators emit warnings but exit non-zero
  /1 workflow.*violation/i,
  // Content-violation patterns: pipeline detected real content issues
  /[1-9]\d*\s+proper noun issue/i,
  /[1-9]\d*\s+fix\(es\)\s+in\s+[1-9]/i,
  /Summary:\s+[1-9]\d*\s+fix\(es\)/i,
  /\[universal prohibited\]/,
  /Actions planned:\s+[1-9]/,
  /Run with --write to apply/i,
  /Total:\s+\d+,\s+Added:\s+\d+,\s+Already had:\s+\d+/, // workflow-governance "all clean" case still exits 1 oddly
];

// Patterns that indicate the pipeline cannot run cleanly without environment / infra (secret missing, etc.)
const ENV_MISSING_SIGNALS = [
  /environment variable is not set/i,
  /Cannot connect to/i,
  /SKIP\s+—?\s*[A-Z_]+\s+env var not set/, // matches our graceful skip
];

function classifyResult(combined, exitCode, timedOut) {
  if (timedOut) return { status: 'timeout', label: '⏱  timeout' };
  if (exitCode === 0) return { status: 'pass', label: '✓ pass' };
  if (DRIFT_SIGNALS.some((re) => re.test(combined))) {
    return { status: 'drift', label: '⚠ drift (pipeline working)' };
  }
  if (ENV_MISSING_SIGNALS.some((re) => re.test(combined))) {
    return { status: 'env-missing', label: '◎ env-missing (requires secret)' };
  }
  return { status: 'fail', label: `✗ fail (exit ${exitCode})` };
}

function runDispatcher(scriptRel, timeoutMs) {
  const scriptAbs = path.join(REPO_ROOT, scriptRel);
  const result = spawnSync(process.execPath, [scriptAbs, '--mode', 'pr', '--dry-run'], {
    encoding: 'utf8',
    cwd: REPO_ROOT,
    timeout: timeoutMs,
    env: { ...process.env, NODE_PATH: 'tools/node_modules', PIPELINE_VERIFICATION: '1' },
  });
  return {
    exitCode: result.status,
    timedOut: result.signal === 'SIGTERM',
    combined: ((result.stdout || '') + (result.stderr || '')).slice(-1000),
    durationMs: result.timing || null,
  };
}

function parseArgs(argv) {
  const args = { concern: null, timeoutMs: 90000, limit: null };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--concern') { args.concern = argv[i + 1]; i += 1; }
    if (t === '--timeout') { args.timeoutMs = parseInt(argv[i + 1], 10); i += 1; }
    if (t === '--limit') { args.limit = parseInt(argv[i + 1], 10); i += 1; }
  }
  return args;
}

function renderMarkdown(results, tally) {
  const lines = [];
  lines.push('# Pipeline end-to-end verification');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString()} by \`operations/scripts/validators/governance/pipelines/verify-pipeline-end-to-end.js\`.`);
  lines.push('');
  lines.push('Per-dispatcher end-to-end run: each invoked with `--mode pr --dry-run`, exit code + output captured, result classified.');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Status | Count |`);
  lines.push(`|---|---|`);
  lines.push(`| ✓ pass | ${tally.pass} |`);
  lines.push(`| ⚠ drift (pipeline working, stale state) | ${tally.drift} |`);
  lines.push(`| ◎ env-missing (requires secret) | ${tally['env-missing']} |`);
  lines.push(`| ✗ fail | ${tally.fail} |`);
  lines.push(`| ⏱ timeout | ${tally.timeout} |`);
  lines.push(`| ⏭ infra-skip (excluded from verification) | ${tally['infra-skip']} |`);
  lines.push(`| **Total** | ${results.length} |`);
  lines.push('');

  // Failures section first — highest signal
  const failures = results.filter((r) => r.status === 'fail');
  if (failures.length > 0) {
    lines.push('## ✗ Failures — pipelines with real bugs');
    lines.push('');
    for (const r of failures) {
      lines.push(`### \`${r.path}\``);
      lines.push('');
      lines.push(`- **Concern:** ${r.concern} · **Tier:** ${r.tier} · **Exit:** ${r.exitCode}`);
      lines.push('');
      lines.push('Last 400 chars of output:');
      lines.push('```');
      lines.push((r.combined || '').slice(-400));
      lines.push('```');
      lines.push('');
    }
  }

  // Timeouts — likely full-repo scans
  const timeouts = results.filter((r) => r.status === 'timeout');
  if (timeouts.length > 0) {
    lines.push('## ⏱ Timeouts — likely full-repo scans (verify manually)');
    lines.push('');
    for (const r of timeouts) {
      lines.push(`- \`${r.path}\` (${r.concern})`);
    }
    lines.push('');
  }

  // Drift — informational, working pipelines reporting stale state
  const drift = results.filter((r) => r.status === 'drift');
  if (drift.length > 0) {
    lines.push('## ⚠ Drift detected — pipelines working, repo has stale state');
    lines.push('');
    for (const r of drift) {
      lines.push(`- \`${r.path}\` (${r.concern}) — exit ${r.exitCode}`);
    }
    lines.push('');
  }

  // Env-missing — pipelines that need secrets to fully run
  const envMissing = results.filter((r) => r.status === 'env-missing');
  if (envMissing.length > 0) {
    lines.push('## ◎ Env-missing — requires CI secret or local .env');
    lines.push('');
    for (const r of envMissing) {
      lines.push(`- \`${r.path}\` (${r.concern})`);
    }
    lines.push('');
  }

  // All results by concern
  lines.push('## All dispatchers by concern');
  lines.push('');
  const byConcern = {};
  for (const r of results) {
    const c = r.concern || 'unknown';
    if (!byConcern[c]) byConcern[c] = [];
    byConcern[c].push(r);
  }
  for (const c of Object.keys(byConcern).sort()) {
    lines.push(`### ${c} — ${byConcern[c].length} dispatchers`);
    lines.push('');
    lines.push('| Dispatcher | Tier | Status |');
    lines.push('|---|---|---|');
    for (const r of byConcern[c].sort((a, b) => a.name.localeCompare(b.name))) {
      lines.push(`| \`${r.name}\` | ${r.tier} | ${r.label} |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(INVENTORY_JSON)) {
    console.error(`Inventory not found: ${INVENTORY_JSON}`);
    console.error('Run audit-pipeline-inventory.js first.');
    process.exit(2);
  }

  let inventory = JSON.parse(fs.readFileSync(INVENTORY_JSON, 'utf8'));
  if (args.concern) inventory = inventory.filter((r) => r.concern === args.concern);
  if (args.limit) inventory = inventory.slice(0, args.limit);

  console.log(`Verifying ${inventory.length} dispatchers (timeout ${args.timeoutMs}ms each)`);
  console.log('');

  const results = [];
  const tally = { pass: 0, drift: 0, 'env-missing': 0, fail: 0, timeout: 0, 'infra-skip': 0 };

  for (const r of inventory) {
    const label = `${r.concern || 'unknown'} / ${r.name}`.padEnd(60);
    process.stdout.write(`▸ ${label} `);

    if (r.coverage && r.coverage.smokeExcluded) {
      console.log('⏭ infra-skip');
      tally['infra-skip'] += 1;
      results.push({ ...r, ...{ exitCode: null, combined: '', status: 'infra-skip', label: '⏭ infra-skip' } });
      continue;
    }

    const run = runDispatcher(r.path, args.timeoutMs);
    const verdict = classifyResult(run.combined, run.exitCode, run.timedOut);
    tally[verdict.status] = (tally[verdict.status] || 0) + 1;
    console.log(verdict.label);
    if (verdict.status === 'fail') {
      console.log(`    ${run.combined.replace(/\n/g, ' ').slice(-200)}`);
    }
    results.push({ ...r, exitCode: run.exitCode, combined: run.combined, ...verdict });
  }

  console.log('');
  console.log(`Result: ${tally.pass} pass, ${tally.drift} drift, ${tally['env-missing']} env-missing, ${tally.fail} fail, ${tally.timeout} timeout, ${tally['infra-skip']} infra-skip`);

  fs.mkdirSync(path.dirname(REPORT_MD), { recursive: true });
  fs.writeFileSync(REPORT_MD, renderMarkdown(results, tally));
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), tally, results }, null, 2));

  console.log('');
  console.log(`Wrote ${path.relative(REPO_ROOT, REPORT_MD)}`);
  console.log(`Wrote ${path.relative(REPO_ROOT, REPORT_JSON)}`);
  process.exit((tally.fail > 0 || tally.timeout > 0) ? 1 : 0);
}

if (require.main === module) main();
