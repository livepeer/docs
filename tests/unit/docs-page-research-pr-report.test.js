#!/usr/bin/env node
/**
 * @script            docs-page-research-pr-report.test
 * @category          orchestrator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/docs-page-research-pr-report.js, tools/scripts/docs-page-research.js, tasks/research/claims
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests docs-page-research-pr-report.js — validates changed-file advisory reporting for the fact-check research runner.
 * @pipeline          manual — experimental advisory PR integration, non-blocking
 * @usage             node tests/unit/docs-page-research-pr-report.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/docs-page-research-pr-report.js');

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function runScript(args) {
  return spawnSync('node', [SCRIPT_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      DOCS_RESEARCH_DISABLE_DISCOVERY: '1',
      DOCS_RESEARCH_DISABLE_REMOTE_DISCOVERY: '1'
    }
  });
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const tmp = mkTmpDir('docs-page-research-pr-');
    const reportMd = path.join(tmp, 'research.md');
    const reportJson = path.join(tmp, 'research.json');

    const run = runScript([
      '--files',
      'v2/orchestrators/guides/deployment-details/setup-options.mdx,v2/orchestrators/setup/rcs-requirements.mdx,v2/orchestrators/guides/operator-considerations/business-case.mdx',
      '--report-md',
      reportMd,
      '--report-json',
      reportJson
    ]);

    assert.strictEqual(run.status, 0, `advisory script failed: ${run.stderr || run.stdout}`);
    const md = fs.readFileSync(reportMd, 'utf8');
    const json = JSON.parse(fs.readFileSync(reportJson, 'utf8'));
    assert.match(md, /^# Advisory Research PR Report/m, 'report markdown should include title');
    assert.ok(json.report_id, 'summary should include report id');
    assert.strictEqual(json.report_kind, 'pr-advisory');
    assert.ok(json.summary.matched_claim_families > 0, 'summary should contain matched claim families');
    assert.ok(Array.isArray(json.target_files) && json.target_files.length === 3, 'target files should match docs pages');
    assert.ok(Array.isArray(json.unresolved_items), 'summary should include unresolved items');
    assert.ok(json.trust_summary, 'summary should include trust summary');
  });

  cases.push(async () => {
    const tmp = mkTmpDir('docs-page-research-pr-empty-');
    const reportMd = path.join(tmp, 'research.md');
    const reportJson = path.join(tmp, 'research.json');

    const run = runScript([
      '--files',
      'tools/scripts/create-codex-pr.js,docs.json',
      '--report-md',
      reportMd,
      '--report-json',
      reportJson
    ]);

    assert.strictEqual(run.status, 0, `empty advisory script failed: ${run.stderr || run.stdout}`);
    const json = JSON.parse(fs.readFileSync(reportJson, 'utf8'));
    assert.ok(json.report_id);
    assert.strictEqual(json.summary.matched_claim_families, 0);
    assert.strictEqual(json.target_files.length, 0);
    assert.ok(Array.isArray(json.notes) && json.notes[0].includes('No tracked docs pages'));
    assert.strictEqual(json.trust_summary.unresolved_claims, 0);
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${name}`);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ docs-page-research-pr-report tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} docs-page-research-pr-report test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ docs-page-research-pr-report tests crashed: ${error.message}`);
      process.exit(1);
    });
}
