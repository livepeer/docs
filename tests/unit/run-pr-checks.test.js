#!/usr/bin/env node
/**
 * @script            run-pr-checks.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tests/run-pr-checks.js
 * @domain            docs
 * @needs             R-R14, R-R29
 * @purpose-statement Tests run-pr-checks lane parsing, branch-health registry coverage, and incremental summary/progress behavior.
 * @pipeline          manual
 * @usage             node tests/unit/run-pr-checks.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const runner = require('../run-pr-checks');

function captureConsole(callback) {
  const originalLog = console.log;
  const originalError = console.error;
  const lines = [];

  console.log = (...args) => {
    lines.push(args.join(' '));
  };
  console.error = (...args) => {
    lines.push(args.join(' '));
  };

  return Promise.resolve()
    .then(() => callback(lines))
    .finally(() => {
      console.log = originalLog;
      console.error = originalError;
    });
}

function buildEmptyGroups() {
  return {
    docsMdx: [],
    componentJsx: [],
    repoMarkdownFiles: [],
    styleFiles: [],
    docsMdxAbs: [],
    repoMarkdownFilesAbs: [],
    governanceScriptFiles: [],
    scriptFiles: [],
    skillDocsFiles: [],
    aiToolsRegistryFiles: [],
    portableSkillFiles: [],
    docsGuideSotFiles: [],
    uiTemplateFiles: [],
    ownerlessGovernanceFiles: [],
    usefulnessFiles: []
  };
}

async function runTests() {
  const errors = [];
  const warnings = [];

  try {
    const parsed = runner.parseArgs([], { GITHUB_BASE_REF: 'docs-v2' });
    assert.strictEqual(parsed.baseRef, 'docs-v2');
    assert.strictEqual(parsed.lane, runner.DEFAULT_LANE);
    console.log('   ✓ parseArgs defaults lane to branch-health');
  } catch (error) {
    errors.push({ message: `parseArgs default lane: ${error.message}` });
  }

  try {
    const parsed = runner.parseArgs(['--base-ref', 'docs-v2', '--lane', 'branch-health'], {});
    assert.strictEqual(parsed.baseRef, 'docs-v2');
    assert.strictEqual(parsed.lane, 'branch-health');
    console.log('   ✓ parseArgs accepts --lane branch-health');
  } catch (error) {
    errors.push({ message: `parseArgs branch-health lane: ${error.message}` });
  }

  try {
    assert.throws(
      () => runner.parseArgs(['--lane', 'not-a-lane'], {}),
      /Unsupported lane/
    );
    console.log('   ✓ parseArgs rejects unsupported lanes');
  } catch (error) {
    errors.push({ message: `parseArgs unsupported lane: ${error.message}` });
  }

  try {
    const registry = runner.createCheckRegistry({
      args: { lane: 'branch-health', baseRef: 'docs-v2' },
      changedFiles: [],
      groups: buildEmptyGroups(),
      currentBranch: 'docs-v2-dev'
    });

    assert.deepStrictEqual(
      registry.map((check) => check.label),
      [
        'Component Naming',
        'Style Guide',
        'Copy Lint',
        'MDX Validation',
        'MDX-safe Markdown',
        'Spelling',
        'Quality',
        'Links & Imports',
        'MDX Guardrails',
        'Docs Navigation',
        'docs.json /redirect Guard',
        'Generated Banners',
        'Codex Task Contract',
        'Codex Skill Sync (--check)',
        'Script Governance',
        'Script Docs',
        'Skill Docs',
        'AI-tools Registry',
        'Ownerless Governance',
        'Agent Docs Freshness',
        'Root Allowlist Format',
        'Portable Skill Export',
        'Docs-guide SoT',
        'UI Template Generator',
        'Usefulness Unit Tests',
        'V2 Link Audit (Strict)'
      ]
    );
    console.log('   ✓ branch-health registry keeps the full changed-file suite order');
  } catch (error) {
    errors.push({ message: `branch-health registry order: ${error.message}` });
  }

  try {
    const summaryPath = path.join(os.tmpdir(), `run-pr-checks-summary-${process.pid}.md`);
    process.env.GITHUB_STEP_SUMMARY = summaryPath;
    runner.initializeSummary({
      lane: 'branch-health',
      baseRef: 'docs-v2',
      branch: 'codex/runner-smoke',
      changedFiles: 2
    });

    const checks = [
      {
        label: 'Fake Pass',
        files: 1,
        timeoutMs: 1000,
        async run() {
          return { label: 'Fake Pass', status: 'passed', files: 1, errors: 0, warnings: 0 };
        }
      },
      {
        label: 'Fake Skip',
        files: 0,
        timeoutMs: 1000,
        async run() {
          return { label: 'Fake Skip', status: 'skipped', files: 0, errors: 0, warnings: 0 };
        }
      }
    ];

    const output = [];
    await captureConsole(async (lines) => {
      const results = await runner.runCheckRegistry(checks);
      runner.finalizeSummary(results);
      output.push(...lines);
    });

    const summary = fs.readFileSync(summaryPath, 'utf8');
    assert.match(output.join('\n'), /START Fake Pass/);
    assert.match(output.join('\n'), /START Fake Skip/);
    assert.match(summary, /\| Fake Pass \| 1 \| ✅ Pass \| 0 \| 0 \|/);
    assert.match(summary, /\| Fake Skip \| 0 \| ⏭️ Skipped \| 0 \| 0 \|/);
    console.log('   ✓ runner records incremental progress and step-summary rows');
  } catch (error) {
    errors.push({ message: `runner smoke test: ${error.message}` });
  } finally {
    delete process.env.GITHUB_STEP_SUMMARY;
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
    total: 5
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ run-pr-checks unit tests passed (${result.total} cases)`);
        process.exit(0);
      }

      console.error(`\n❌ ${result.errors.length} run-pr-checks unit test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry.message}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ run-pr-checks unit tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
