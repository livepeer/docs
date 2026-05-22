'use strict';

/**
 * @module      tools/lib/governance/pipeline-test-harness
 * @purpose     Shared synthetic-violation test harness for pipeline dispatchers (D-GOV-03 detect-repair-verify)
 * @description Reusable test driver: drops a synthetic-violation fixture, runs the detect step, asserts violation found, runs the repair step, asserts violation fixed, re-runs detect to verify clean, restores baseline.
 * @policy      D-GOV-03 (every pipeline must prove its detect-repair-verify cycle on synthetic violations before shipping)
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const os = require('os');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const FIXTURE_DIR = path.join(REPO_ROOT, 'operations/tests/fixtures/pipelines');

function ensureDir(abs) {
  fs.mkdirSync(abs, { recursive: true });
}

function writeFixture(name, content, ext = '.mdx', dir = FIXTURE_DIR) {
  ensureDir(dir);
  const abs = path.join(dir, `${name}${ext}`);
  fs.writeFileSync(abs, content);
  return abs;
}

function removeFixture(absPath) {
  if (fs.existsSync(absPath)) fs.unlinkSync(absPath);
}

function removeDirIfEmpty(absDir) {
  try {
    const entries = fs.readdirSync(absDir);
    if (entries.length === 0) fs.rmdirSync(absDir);
  } catch { /* ignore */ }
}

function runDispatcher(dispatcherPath, args = [], options = {}) {
  const result = spawnSync(process.execPath, [dispatcherPath, ...args], {
    encoding: 'utf8',
    cwd: REPO_ROOT,
    timeout: options.timeout || 60000,
    env: { ...process.env, NODE_PATH: 'tools/node_modules' },
  });
  return {
    exitCode: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    combined: (result.stdout || '') + (result.stderr || ''),
  };
}

/**
 * Run a synthetic-violation test cycle.
 * @param {Object} cfg
 * @param {string} cfg.name — test name (used for fixture file naming)
 * @param {string} cfg.dispatcherPath — absolute path to the pipeline dispatcher
 * @param {string} cfg.fixtureContent — content with the known-bad violation
 * @param {string} [cfg.fixtureExt='.mdx'] — file extension
 * @param {string|RegExp} cfg.detectAssertion — string or regex expected in detect output
 * @param {string|RegExp} [cfg.repairAssertion] — string or regex expected in repair output (if testing repair)
 * @param {function} [cfg.fixtureClean] — optional function(content) => boolean to check fixture is clean after repair
 * @param {Object} [cfg.detectArgs] — args for detect run (defaults: ['--mode', 'pr', '--dry-run', '--files', fixturePath])
 * @param {Object} [cfg.repairArgs] — args for repair run (defaults: ['--mode', 'manual', '--write', '--files', fixturePath])
 * @returns {Object} { passed, stages: { detect, repair, verify }, errors: [] }
 */
function runSyntheticViolationTest(cfg) {
  const errors = [];
  const stages = { detect: null, repair: null, verify: null };
  let fixturePath = null;
  const fixtureDir = cfg.fixtureDir
    ? (path.isAbsolute(cfg.fixtureDir) ? cfg.fixtureDir : path.join(REPO_ROOT, cfg.fixtureDir))
    : FIXTURE_DIR;
  try {
    if (cfg.setup) cfg.setup({ REPO_ROOT, fixtureDir });
    fixturePath = writeFixture(cfg.name, cfg.fixtureContent, cfg.fixtureExt || '.mdx', fixtureDir);
    const fixtureRel = path.relative(REPO_ROOT, fixturePath);
    // Auto-append --files <fixture> to any args that don't already declare a scope (--files / --folder / --staged / --full)
    const addScope = (args) => {
      if (args.some((a) => a === '--files' || a === '--file' || a === '--folder' || a === '--staged' || a === '--full')) return args;
      return [...args, '--files', fixtureRel];
    };
    // STAGE 1: Detect
    const detectArgs = addScope(cfg.detectArgs || ['--mode', 'pr', '--dry-run']);
    stages.detect = runDispatcher(cfg.dispatcherPath, detectArgs, { timeout: cfg.timeout });
    const detectMatch = cfg.detectAssertion instanceof RegExp
      ? cfg.detectAssertion.test(stages.detect.combined)
      : stages.detect.combined.includes(cfg.detectAssertion);
    if (!detectMatch) {
      errors.push(`DETECT failed: expected "${cfg.detectAssertion}" in output, got: ${stages.detect.combined.slice(0, 300)}`);
    }
    // STAGE 2: Repair (only if asserter provided)
    if (cfg.repairAssertion || cfg.fixtureClean) {
      const repairArgs = addScope(cfg.repairArgs || ['--mode', 'manual', '--write']);
      stages.repair = runDispatcher(cfg.dispatcherPath, repairArgs, { timeout: cfg.timeout });
      if (cfg.repairAssertion) {
        const repairMatch = cfg.repairAssertion instanceof RegExp
          ? cfg.repairAssertion.test(stages.repair.combined)
          : stages.repair.combined.includes(cfg.repairAssertion);
        if (!repairMatch) {
          errors.push(`REPAIR failed: expected "${cfg.repairAssertion}" in output, got: ${stages.repair.combined.slice(0, 300)}`);
        }
      }
      if (cfg.fixtureClean) {
        if (!fs.existsSync(fixturePath)) {
          // Fixture was moved/deleted by repair (e.g. archived). Pass empty content so callers can opt in via `() => true`.
          if (!cfg.fixtureClean('')) {
            errors.push(`REPAIR moved/removed fixture; fixtureClean('') returned false. Path: ${fixturePath}`);
          }
        } else {
          const repairedContent = fs.readFileSync(fixturePath, 'utf8');
          if (!cfg.fixtureClean(repairedContent)) {
            errors.push(`REPAIR did not clean fixture. Post-repair content: ${repairedContent.slice(0, 300)}`);
          }
        }
      }
      // STAGE 3: Verify — re-run detect, should now be clean
      const verifyArgs = addScope(cfg.detectArgs || ['--mode', 'pr', '--dry-run']);
      stages.verify = runDispatcher(cfg.dispatcherPath, verifyArgs, { timeout: cfg.timeout });
      if (cfg.verifyClean === false) {
        // Some tests don't expect detect to clear (e.g. atomic that doesn't auto-fix)
      } else if (cfg.detectAssertion instanceof RegExp) {
        if (cfg.detectAssertion.test(stages.verify.combined)) {
          errors.push(`VERIFY failed: detect still matches "${cfg.detectAssertion}" after repair`);
        }
      }
    }
  } finally {
    if (fixturePath) removeFixture(fixturePath);
    if (cfg.teardown) try { cfg.teardown({ REPO_ROOT, fixtureDir, fixturePath }); } catch (e) { /* tolerate */ }
    if (cfg.cleanupDir && fixtureDir !== FIXTURE_DIR) removeDirIfEmpty(fixtureDir);
  }
  return { passed: errors.length === 0, stages, errors, fixture: fixturePath };
}

/**
 * Run a batch of synthetic-violation tests, print a summary, return aggregate result.
 */
function runBatch(testConfigs, options = {}) {
  const results = [];
  let passed = 0, failed = 0;
  for (const cfg of testConfigs) {
    process.stdout.write(`▸ ${cfg.name}... `);
    const result = runSyntheticViolationTest(cfg);
    results.push({ name: cfg.name, ...result });
    if (result.passed) {
      passed += 1;
      console.log('✓');
    } else {
      failed += 1;
      console.log('✗');
      for (const err of result.errors) console.log(`    ${err}`);
    }
  }
  console.log('');
  console.log(`Result: ${passed} passed, ${failed} failed (${testConfigs.length} total)`);
  return { passed, failed, total: testConfigs.length, results };
}

module.exports = {
  REPO_ROOT,
  FIXTURE_DIR,
  writeFixture,
  removeFixture,
  runDispatcher,
  runSyntheticViolationTest,
  runBatch,
};
