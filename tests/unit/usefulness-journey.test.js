#!/usr/bin/env node
/**
 * @script usefulness-journey.test
 * @summary Validate journey completeness evaluation and journey-config guardrails for usefulness scoring.
 * @owner docs
 * @scope tests, tools/lib/docs-usefulness, tools/config
 *
 * @usage
 *   node tests/unit/usefulness-journey.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console pass/fail output for journey checks.
 *
 * @exit-codes
 *   0 = all assertions passed
 *   1 = one or more assertions failed
 *
 * @examples
 *   node tests/unit/usefulness-journey.test.js
 *
 * @notes
 *   Uses synthetic page-score fixtures and does not require external services.
 */

'use strict';

const assert = require('assert');
const { checkJourneys } = require('../../tools/lib/docs-usefulness/journey-check');
const { validateUsefulnessConfig } = require('../../tools/lib/docs-usefulness/config-validator');

async function runCase(name, fn) {
  try {
    await fn();
    console.log(`✓ ${name}`);
    return true;
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.stack || error.message || error}`);
    return false;
  }
}

async function main() {
  const results = [];

  results.push(await runCase('Journey checker reports complete/weak/missing states with blockers', async () => {
    const pages = [
      {
        path: 'v2/developers/portal.mdx',
        purpose: 'landing',
        combined_score: 78,
        internalLinks: ['/v2/developers/livepeer-overview']
      },
      {
        path: 'v2/developers/livepeer-overview.mdx',
        purpose: 'overview',
        combined_score: 52,
        internalLinks: ['/v2/developers/quickstart']
      },
      {
        path: 'v2/developers/quickstart.mdx',
        purpose: 'tutorial',
        combined_score: 45,
        internalLinks: []
      }
    ];

    const journeys = {
      'developer-ai': {
        label: 'Developer (AI Inference)',
        maps_to: 'P1',
        success_criteria: 'Reach first AI job',
        priority: 1,
        steps: [
          { position: 1, purpose: 'landing', path_patterns: ['v2/developers/portal*'] },
          { position: 2, purpose: 'overview', path_patterns: ['v2/developers/*overview*'] },
          { position: 3, purpose: 'tutorial', path_patterns: ['v2/developers/*quickstart*'] },
          { position: 4, purpose: 'reference', path_patterns: ['v2/developers/*reference*'] }
        ]
      }
    };

    const reports = checkJourneys(pages, journeys);
    assert.strictEqual(reports.length, 1);
    assert.strictEqual(reports[0].steps_complete, 2);
    assert.strictEqual(reports[0].steps_weak, 1);
    assert.strictEqual(reports[0].steps_missing, 1);
    assert.strictEqual(reports[0].verdict, 'BLOCKED');
    assert.ok(reports[0].blockers[0].includes('Step 4'));
  }));

  results.push(await runCase('Config validation blocks deprecated v2/platforms journey patterns', async () => {
    const rubric = require('../../tools/config/usefulness-rubric.json');
    const audience = require('../../tools/config/usefulness-audience-normalization.json');
    const llm = require('../../tools/config/usefulness-llm-tiers.json');
    const prompts = require('../../tools/lib/docs-usefulness/prompts');

    const badJourneys = {
      'platform-builder': {
        label: 'Platform Builder',
        maps_to: null,
        success_criteria: 'Validate',
        priority: 1,
        steps: [
          { position: 1, purpose: 'landing', path_patterns: ['v2/platforms/portal*'] }
        ]
      }
    };

    assert.throws(
      () => validateUsefulnessConfig({ rubric, journeys: badJourneys, audience, llmTiers: llm, prompts }),
      /forbidden pattern/
    );
  }));

  const passed = results.filter(Boolean).length;
  if (passed !== results.length) {
    process.exit(1);
  }
  console.log(`\n${passed} test case(s) passed`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
