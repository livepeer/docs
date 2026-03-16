#!/usr/bin/env node
/**
 * @script            docs-research-adjudication.test
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tests/unit, tools/scripts/docs-research-adjudication.js, tasks/research/adjudication, tools/scripts/docs-page-research.js, tools/scripts/docs-page-research-pr-report.js
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests docs-research-adjudication.js — validates adjudication-ledger schema, report-aware outcome recording, and trust-tier summary rules for measured research-skill review outcomes.
 * @pipeline          manual — experimental research system
 * @usage             node tests/unit/docs-research-adjudication.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();
const SCRIPT = path.join(REPO_ROOT, 'tools/scripts/docs-research-adjudication.js');

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeJson(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function runNode(args) {
  return spawnSync('node', [SCRIPT, ...args], { cwd: REPO_ROOT, encoding: 'utf8' });
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const tmp = mkTmpDir('docs-research-adjudication-validate-');
    const ledger = path.join(tmp, 'ledger.json');
    writeJson(ledger, { version: 1, updated_at: '', entries: [] });
    const result = runNode(['--validate', '--ledger', ledger]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
    assert.ok(result.stdout.includes('valid'));
  });

  cases.push(async () => {
    const tmp = mkTmpDir('docs-research-adjudication-record-');
    const ledger = path.join(tmp, 'ledger.json');
    const report = path.join(tmp, 'report.json');
    writeJson(ledger, { version: 1, updated_at: '', entries: [] });
    writeJson(report, {
      report_id: 'page-content-research-2026-03-16-test1234',
      report_kind: 'page-research',
      generated_at: '2026-03-16T08:00:00.000Z',
      scope: {
        target_files: ['v2/gateways/guides/roadmap-and-funding/operator-support.mdx']
      },
      verified_claims: [],
      conflicted_claims: [],
      time_sensitive_claims: [
        {
          claim_id: 'gw-startup-program-current',
          claim_family: 'programme-availability',
          status: 'time-sensitive',
          canonical_owner: 'v2/gateways/guides/roadmap-and-funding/operator-support.mdx',
          primary_evidence: {
            type: 'official-page'
          }
        }
      ],
      unverified_or_historical_claims: [],
      trust_summary: {
        unresolved_claims: 0,
        contradiction_groups: 1,
        evidence_sources: 4,
        explicit_page_targets: 2,
        inferred_page_targets: 0
      }
    });

    const result = runNode([
      '--record',
      '--ledger',
      ledger,
      '--report-json',
      report,
      '--reviewer',
      'codex',
      '--claim-id',
      'gw-startup-program-current',
      '--human-verdict',
      'time-sensitive',
      '--outcome-class',
      'true_positive',
      '--cause-tag',
      'wording_only_conflict',
      '--action',
      'keep advisory and continue current verification',
      '--family-status',
      'advisory-only',
      '--trust-tier',
      'advisory'
    ]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
    const parsed = JSON.parse(fs.readFileSync(ledger, 'utf8'));
    assert.strictEqual(parsed.entries.length, 1);
    assert.strictEqual(parsed.entries[0].claim_family, 'programme-availability');
    assert.strictEqual(parsed.entries[0].primary_evidence_type, 'official-page');
  });

  cases.push(async () => {
    const tmp = mkTmpDir('docs-research-adjudication-summary-');
    const ledger = path.join(tmp, 'ledger.json');
    writeJson(ledger, {
      version: 1,
      updated_at: '2026-03-16T08:00:00.000Z',
      entries: [
        {
          entry_id: 'a',
          report_id: 'r1',
          report_kind: 'page-research',
          reviewed_at: '2026-03-16T08:00:00.000Z',
          reviewer: 'codex',
          claim_family: 'remote-signer-current-scope',
          claim_id: 'gw-remote-signer-current-scope',
          page_scope: ['v2/gateways/guides/payments-and-pricing/remote-signers.mdx'],
          system_verdict: 'conflicted',
          human_verdict: 'conflicted',
          outcome_class: 'true_positive',
          cause_tag: 'wording_only_conflict',
          action: 'keep as tracked current-state slice',
          family_status_after_review: 'stable',
          report_trust_summary: {
            unresolved_claims: 0,
            contradiction_groups: 1,
            evidence_sources: 5,
            explicit_page_targets: 3,
            inferred_page_targets: 0
          },
          primary_evidence_type: 'github-pr'
        },
        {
          entry_id: 'b',
          report_id: 'r2',
          report_kind: 'pr-advisory',
          reviewed_at: '2026-03-16T09:00:00.000Z',
          reviewer: 'codex',
          claim_family: 'remote-signer-current-scope',
          claim_id: 'gw-remote-signer-current-scope',
          page_scope: ['v2/gateways/guides/payments-and-pricing/remote-signers.mdx'],
          system_verdict: 'conflicted',
          human_verdict: 'conflicted',
          outcome_class: 'true_positive',
          cause_tag: 'wording_only_conflict',
          action: 'keep as tracked current-state slice',
          family_status_after_review: 'stable',
          report_trust_summary: {
            unresolved_claims: 0,
            contradiction_groups: 1,
            evidence_sources: 5,
            explicit_page_targets: 2,
            inferred_page_targets: 0
          },
          primary_evidence_type: 'github-release'
        },
        {
          entry_id: 'c',
          report_id: 'r3',
          report_kind: 'page-research',
          reviewed_at: '2026-03-16T09:30:00.000Z',
          reviewer: 'codex',
          claim_family: 'gateway-support-contact-channel',
          claim_id: '',
          page_scope: ['v2/gateways/guides/roadmap-and-funding/operator-support.mdx'],
          system_verdict: 'not-detected',
          human_verdict: 'time-sensitive',
          outcome_class: 'false_negative',
          cause_tag: 'missing_coverage',
          action: 'expand claim-family coverage for support contact channel',
          family_status_after_review: 'needs-more-sources',
          report_trust_summary: {
            unresolved_claims: 0,
            contradiction_groups: 1,
            evidence_sources: 3,
            explicit_page_targets: 1,
            inferred_page_targets: 0
          }
        }
      ]
    });

    const result = runNode([
      '--summary',
      '--ledger',
      ledger,
      '--report-out-json',
      path.join(tmp, 'summary.json')
    ]);
    assert.strictEqual(result.status, 0, result.stderr || result.stdout);
    const summary = JSON.parse(fs.readFileSync(path.join(tmp, 'summary.json'), 'utf8'));
    const remoteSigner = summary.family_summaries.find((entry) => entry.claim_family === 'remote-signer-current-scope');
    const supportChannel = summary.family_summaries.find((entry) => entry.claim_family === 'gateway-support-contact-channel');
    assert.strictEqual(remoteSigner.trust_tier, 'advisory-high-confidence');
    assert.strictEqual(supportChannel.family_status, 'needs-more-sources');
    assert.strictEqual(summary.slice_summary.recommendation, 'advisory-only');
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
        console.log(`\n✅ docs-research-adjudication tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} docs-research-adjudication test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ docs-research-adjudication tests crashed: ${error.message}`);
      process.exit(1);
    });
}
