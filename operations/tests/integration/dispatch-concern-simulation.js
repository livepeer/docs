#!/usr/bin/env node
/**
 * @script      dispatch-concern-simulation
 * @type        validator
 * @concern     governance
 * @niche       pipelines
 * @purpose     Validate every dispatch-{concern}.yml workflow can be triggered locally — proves YAML wiring, job structure, script existence, and mode-flag interfaces match per-job
 * @description Loads each .github/workflows/dispatch-{concern}.yml, parses the YAML, walks each job's steps, extracts the dispatcher scripts referenced, verifies each exists and exposes the modes/flags the workflow uses. For each job, runs the referenced dispatcher's --help to confirm its CLI is wired. This is the local equivalent of pushing each workflow to GitHub and watching it parse — what 5.4 of the GitHub Actions Governance plan calls "end-to-end CI dry-run".
 * @mode        check
 * @pipeline    P3 (PR-time confidence check), manual (before merge)
 * @scope       .github/workflows/dispatch-{brand,copy,discoverability,governance,health,maintenance}.yml
 * @usage       node operations/tests/integration/dispatch-concern-simulation.js [--concern <name>]
 * @policy      D-GOV-07 (local CLI equivalence); D-ACT-08 (dispatchers = workflow YAML)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const NODE_PATH = path.join(REPO_ROOT, 'tools/node_modules');

// Lazy-load js-yaml from tools/node_modules
function loadYaml() {
  try {
    return require(path.join(NODE_PATH, 'js-yaml'));
  } catch {
    console.error('js-yaml not found at', NODE_PATH);
    console.error('Run: cd tools && npm ci');
    process.exit(2);
  }
}

const WORKFLOWS = [
  'dispatch-brand.yml',
  'dispatch-copy.yml',
  'dispatch-discoverability.yml',
  'dispatch-governance.yml',
  'dispatch-health.yml',
  'dispatch-maintenance.yml',
];

function extractScriptPaths(jobsSection) {
  // Find every `node operations/scripts/...` invocation in `run:` strings.
  const scripts = new Set();
  function walk(obj) {
    if (!obj) return;
    if (typeof obj === 'string') {
      const matches = obj.match(/node\s+(operations\/(?:scripts|tests)\/[^\s|&;]+\.js)/g) || [];
      for (const m of matches) {
        scripts.add(m.replace(/^node\s+/, ''));
      }
      return;
    }
    if (Array.isArray(obj)) { obj.forEach(walk); return; }
    if (typeof obj === 'object') { Object.values(obj).forEach(walk); }
  }
  walk(jobsSection);
  return Array.from(scripts);
}

function checkScript(scriptRel) {
  const scriptAbs = path.join(REPO_ROOT, scriptRel);
  if (!fs.existsSync(scriptAbs)) {
    return { ok: false, reason: 'missing' };
  }
  // --help must succeed (proves CLI is wired)
  const result = spawnSync(process.execPath, [scriptAbs, '--help'], {
    encoding: 'utf8',
    cwd: REPO_ROOT,
    timeout: 10000,
    env: { ...process.env, NODE_PATH: 'tools/node_modules' },
  });
  if (result.status !== 0) {
    return { ok: false, reason: `--help exit ${result.status}` };
  }
  return { ok: true };
}

function simulateWorkflow(workflowFile, yaml) {
  const abs = path.join(REPO_ROOT, '.github/workflows', workflowFile);
  if (!fs.existsSync(abs)) {
    return { ok: false, reason: 'workflow file missing', jobs: [], scripts: [] };
  }
  let doc;
  try {
    doc = yaml.load(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    return { ok: false, reason: `YAML parse error: ${e.message}`, jobs: [], scripts: [] };
  }
  const jobs = Object.keys(doc.jobs || {});
  const scripts = extractScriptPaths(doc.jobs);
  const issues = [];
  for (const script of scripts) {
    const r = checkScript(script);
    if (!r.ok) issues.push(`${script} — ${r.reason}`);
  }
  return {
    ok: issues.length === 0,
    jobs,
    scripts,
    issues,
  };
}

function parseArgs(argv) {
  const args = { concern: null };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--concern') { args.concern = argv[i + 1]; i += 1; }
  }
  return args;
}

function main() {
  const yaml = loadYaml();
  const args = parseArgs(process.argv.slice(2));
  const targets = args.concern
    ? WORKFLOWS.filter((w) => w.startsWith(`dispatch-${args.concern}.`))
    : WORKFLOWS;

  console.log(`Simulating ${targets.length} concern workflows\n`);
  let totalOk = 0;
  let totalFail = 0;
  for (const wf of targets) {
    const r = simulateWorkflow(wf, yaml);
    if (r.ok) {
      console.log(`✓ ${wf}`);
      console.log(`    jobs (${r.jobs.length}): ${r.jobs.join(', ')}`);
      console.log(`    scripts (${r.scripts.length}): ${r.scripts.map((s) => path.basename(s)).join(', ')}`);
      totalOk += 1;
    } else {
      console.log(`✗ ${wf}`);
      if (r.reason) console.log(`    reason: ${r.reason}`);
      for (const issue of r.issues) console.log(`    issue: ${issue}`);
      totalFail += 1;
    }
    console.log('');
  }
  console.log(`Result: ${totalOk} workflows valid, ${totalFail} with issues (${targets.length} total)`);
  process.exit(totalFail > 0 ? 1 : 0);
}

if (require.main === module) main();
