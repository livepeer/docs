#!/usr/bin/env node
/**
 * @script            orchestrator-guides-research-review.test
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, tools/scripts/orchestrator-guides-research-review.js, tools/config/scoped-navigation/docs-gate-work.json
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests orchestrator-guides-research-review.js — validates live Orchestrators Guides tranche extraction, report summary helpers, and registry-drift detection for the research packet generator.
 * @pipeline          manual — packet generator validation
 * @usage             node tests/unit/orchestrator-guides-research-review.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const NAV_PATH = path.join(REPO_ROOT, 'tools/config/scoped-navigation/docs-gate-work.json');
const helpers = require('../../tools/scripts/orchestrator-guides-research-review.js');
const genericHelpers = require('../../tools/scripts/docs-research-packet.js');

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const nav = JSON.parse(fs.readFileSync(NAV_PATH, 'utf8'));
    const tranches = helpers.findOrchestratorGuidesGroups(nav);
    const genericTranches = genericHelpers.buildNavTranches(nav, {
      version: 'v2',
      language: 'en',
      tab: 'Orchestrators',
      group: 'Guides'
    });
    const totalPages = tranches.reduce((count, tranche) => count + tranche.pages.length, 0);

    assert.strictEqual(tranches.length, 9, 'expected 9 live guide tranches');
    assert.strictEqual(totalPages, 45, 'expected 45 live guide pages');
    assert.strictEqual(tranches[0].slug, '01-operator-considerations');
    assert.strictEqual(tranches[8].slug, '09-tutorials');
    assert.ok(tranches.every((tranche) => tranche.pages.every((page) => page.endsWith('.mdx'))), 'all live pages should resolve to mdx paths');
    assert.deepStrictEqual(tranches, genericTranches, 'wrapper should delegate to the same nav tranche resolution as the generic packet engine');
  });

  cases.push(async () => {
    const pageReport = {
      verified_claims: [],
      conflicted_claims: [
        {
          claim_id: 'orch-missing-path',
          claim_family: 'path-drift-family',
          summary: 'synthetic conflicting claim',
          canonical_owner: 'v2/orchestrators/guides/missing-page.mdx',
          evidence: [
            {
              type: 'repo-file',
              ref: 'v2/orchestrators/guides/missing-dependent.mdx'
            }
          ]
        }
      ],
      time_sensitive_claims: [],
      unverified_or_historical_claims: [],
      propagation_queue: [
        {
          claim_id: 'orch-missing-path',
          file: 'v2/orchestrators/guides/missing-target.mdx',
          action: 'verify-only'
        }
      ],
      claims_reviewed: [
        {
          file: 'v2/orchestrators/guides/operator-considerations/operator-rationale.mdx',
          matched_claim_families: []
        }
      ],
      evidence_sources: [],
      cross_page_contradictions: [],
      trust_summary: {
        explicit_page_targets: 1,
        inferred_page_targets: 2
      }
    };

    const drift = helpers.collectRegistryDrift(pageReport);
    const gaps = helpers.collectCoverageGaps(pageReport);
    const markdown = helpers.buildTrancheResearchMarkdown(
      {
        registryValidate: { status: 0 },
        adjudicationValidate: { status: 0 },
        pageRun: { status: 0 },
        prRun: { status: 0 },
        pageReport,
        prReport: {
          summary: {
            conflicted_claims: 1,
            time_sensitive_claims: 0,
            contradiction_groups: 0,
            propagation_queue_items: 1,
            evidence_sources: 0
          }
        }
      },
      {
        title: 'Synthetic Tranche',
        index: 1,
        slug: '01-synthetic',
        pages: ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx']
      }
    );

    assert.strictEqual(drift.length, 3, 'expected canonical, evidence, and dependent path drift entries');
    assert.deepStrictEqual(gaps, ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx']);
    assert.match(markdown, /## Registry\/path Drift/m);
    assert.match(markdown, /## Registry Coverage Gaps/m);
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
        console.log(`\n✅ orchestrator-guides-research-review tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} orchestrator-guides-research-review test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ orchestrator-guides-research-review tests crashed: ${error.message}`);
      process.exit(1);
    });
}
