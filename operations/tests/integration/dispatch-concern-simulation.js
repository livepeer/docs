#!/usr/bin/env node
/**
 * @script      dispatch-concern-simulation
 * @type        validator
 * @concern     governance
 * @niche       pipelines
 * @purpose     Local simulation of every dispatch-{concern}.yml workflow — proves each concern dispatcher runs every mode (pr, scheduled, manual, post-merge) without error before pushing to CI
 * @description Iterates the 6 concern meta dispatchers (dispatch-{brand,copy,discoverability,governance,health,maintenance}-{check,scan,repair,update,generate}) and runs each in dry-run for every supported mode. Captures exit code + first 200 chars of output. Reports a 6×4 matrix of mode coverage. This is the local equivalent of pushing each Action workflow to GitHub and watching it run — no remote needed.
 * @mode        check
 * @pipeline    P3 (PR-time confidence check), manual (before merge to docs-v2)
 * @scope       6 concern dispatchers × 4 modes
 * @usage       node operations/tests/integration/dispatch-concern-simulation.js [--concern <name>] [--mode <mode>]
 * @policy      D-GOV-07 (local CLI equivalence)
 */

'use strict';

const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();

// One representative meta dispatcher per concern. These are what dispatch-{concern}.yml calls.
const CONCERN_DISPATCHERS = [
  { concern: 'brand', script: 'operations/scripts/dispatch/content/brand/dispatch-brand-check.js', modes: ['pr'] },
  { concern: 'brand', script: 'operations/scripts/dispatch/content/brand/dispatch-brand-scan.js', modes: ['scheduled'] },
  { concern: 'brand', script: 'operations/scripts/dispatch/content/brand/dispatch-brand-repair.js', modes: ['manual'] },
  { concern: 'copy', script: 'operations/scripts/dispatch/content/copy/dispatch-copy-check.js', modes: ['pr'] },
  { concern: 'copy', script: 'operations/scripts/dispatch/content/copy/dispatch-copy-update.js', modes: ['scheduled'] },
  { concern: 'copy', script: 'operations/scripts/dispatch/content/copy/dispatch-copy-repair.js', modes: ['manual'] },
  { concern: 'discoverability', script: 'operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js', modes: ['pr'] },
  { concern: 'discoverability', script: 'operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js', modes: ['post-merge'] },
  { concern: 'governance', script: 'operations/scripts/dispatch/governance/dispatch-governance-check.js', modes: ['pr'] },
  { concern: 'governance', script: 'operations/scripts/dispatch/governance/dispatch-governance-scan.js', modes: ['scheduled'] },
  { concern: 'governance', script: 'operations/scripts/dispatch/governance/dispatch-governance-sync.js', modes: ['post-merge'] },
  { concern: 'health', script: 'operations/scripts/dispatch/content/health/dispatch-health-check.js', modes: ['pr'] },
  { concern: 'health', script: 'operations/scripts/dispatch/content/health/dispatch-health-repair.js', modes: ['manual'] },
  { concern: 'maintenance', script: 'operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js', modes: ['pr'] },
  { concern: 'maintenance', script: 'operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js', modes: ['post-merge'] },
];

function runSimulation(scriptRel, modeFlag, options = {}) {
  // Use only universal flags: --mode + --dry-run. Scope is left to dispatcher defaults
  // (each dispatcher knows its own appropriate scope per mode).
  const args = ['--mode', modeFlag, '--dry-run'];
  const result = spawnSync(process.execPath, [path.join(REPO_ROOT, scriptRel), ...args], {
    encoding: 'utf8',
    cwd: REPO_ROOT,
    timeout: options.timeout || 90000,
    env: { ...process.env, NODE_PATH: 'tools/node_modules', PIPELINE_SIMULATION: '1' },
  });
  return {
    exitCode: result.status,
    stdout: (result.stdout || '').slice(-400),
    stderr: (result.stderr || '').slice(-400),
    timedOut: result.signal === 'SIGTERM',
  };
}

function parseArgs(argv) {
  const args = { concern: null, mode: null };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--concern') { args.concern = argv[i + 1]; i += 1; }
    if (t === '--mode') { args.mode = argv[i + 1]; i += 1; }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  let tests = CONCERN_DISPATCHERS;
  if (args.concern) tests = tests.filter((t) => t.concern === args.concern);
  if (args.mode) tests = tests.filter((t) => t.modes.includes(args.mode));

  console.log(`Running ${tests.length} concern-dispatcher simulations\n`);
  let passed = 0;
  let failed = 0;
  for (const t of tests) {
    for (const mode of t.modes) {
      const label = `${path.basename(t.script)} --mode ${mode}`;
      process.stdout.write(`▸ ${label.padEnd(60)} `);
      const r = runSimulation(t.script, mode);
      if (r.timedOut) {
        console.log('⏱  TIMED OUT');
        failed += 1;
      } else if (r.exitCode === 0) {
        console.log('✓');
        passed += 1;
      } else {
        console.log(`✗ (exit ${r.exitCode})`);
        if (r.stderr) console.log(`    stderr: ${r.stderr.replace(/\n/g, ' ')}`);
        failed += 1;
      }
    }
  }
  console.log('');
  console.log(`Result: ${passed} passed, ${failed} failed (${tests.length} simulations)`);
  process.exit(failed > 0 ? 1 : 0);
}

if (require.main === module) main();
