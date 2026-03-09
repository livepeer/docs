#!/usr/bin/env node
/**
 * @script            usefulness-rubric.test
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             full-repo
 * @owner             docs
 * @needs             R-R14, R-C6
 * @purpose-statement Tests rubric-based scoring logic against fixture pages.
 * @pipeline          P3
 * @usage             node tests/unit/usefulness-rubric.test.js
 */

'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const prompts = require('../../tools/lib/docs-usefulness/prompts');
const { EVALUATORS } = require('../../tools/lib/docs-usefulness/rule-evaluators');
const { resolvePurpose, resolveAudience, loadRubric, loadAudienceNormalization } = require('../../tools/lib/docs-usefulness/rubric-loader');
const { validateUsefulnessConfig } = require('../../tools/lib/docs-usefulness/config-validator');
const { analyzeMdxPage, scorePage } = require('../../tools/lib/docs-usefulness/scoring');
const { parseArgs, resolveRouteToFile } = require('../../tools/scripts/audit-v2-usefulness');
const { LlmEvaluator } = require('../../tools/lib/docs-usefulness/llm-evaluator');
const { shouldRunGeneratedBannerCheck } = require('../run-pr-checks');

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

  results.push(await runCase('Rubric config validates against prompts and journey/audience/llm schemas', async () => {
    const rubric = loadRubric();
    const journeys = require('../../tools/config/usefulness-journeys.json');
    const audience = loadAudienceNormalization();
    const llm = require('../../tools/config/usefulness-llm-tiers.json');
    validateUsefulnessConfig({ rubric, journeys, audience, llmTiers: llm, prompts });
  }));

  results.push(await runCase('All rubric rule types map to implemented evaluators', async () => {
    const rubric = loadRubric();
    const ruleTypes = new Set();
    Object.values(rubric).forEach((purposeConfig) => {
      Object.values(purposeConfig.tier1_rules || {}).forEach((rule) => ruleTypes.add(rule.type));
    });
    ruleTypes.forEach((type) => {
      assert.ok(typeof EVALUATORS[type] === 'function', `Missing evaluator for type: ${type}`);
    });
  }));

  results.push(await runCase('Purpose resolution prioritizes valid frontmatter and marks invalid enum values', async () => {
    const withFrontmatter = resolvePurpose({
      path: 'v2/gateways/example.mdx',
      frontmatter: { purpose: 'how_to' },
      components: [],
      headings: [],
      wordCount: 10
    });
    assert.strictEqual(withFrontmatter.purpose, 'how_to');
    assert.strictEqual(withFrontmatter.source, 'frontmatter');

    const invalid = resolvePurpose({
      path: 'v2/gateways/example.mdx',
      frontmatter: { purpose: 'not_real' },
      components: [],
      headings: [],
      wordCount: 10
    });
    assert.strictEqual(invalid.purpose, null);
    assert.strictEqual(invalid.invalid, true);
  }));

  results.push(await runCase('Audience normalization handles CSV and synonyms with deterministic precedence', async () => {
    const normalization = loadAudienceNormalization();
    const resolved = resolveAudience({
      section: 'about',
      frontmatter: { audience: 'developers, token-holder' }
    }, normalization);

    assert.strictEqual(resolved.audience, 'developer');
    assert.strictEqual(resolved.source, 'frontmatter');

    const fallback = resolveAudience({
      section: 'solutions',
      frontmatter: {}
    }, normalization);
    assert.strictEqual(fallback.audience, 'platform-builder');
    assert.strictEqual(fallback.source, 'inferred');
  }));

  results.push(await runCase('Audit argument parser hard-fails removed flags', async () => {
    assert.throws(() => parseArgs(['--accuracy-mode', 'tiered'], process.cwd()), /Deprecated flag/);
    assert.throws(() => parseArgs(['--scoring-engine', 'hybrid'], process.cwd()), /Deprecated flag/);
  }));

  results.push(await runCase('Route resolution precedence chooses route.mdx over route/index.mdx', async () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'usefulness-route-'));
    try {
      fs.mkdirSync(path.join(tmp, 'v2', 'sample', 'demo'), { recursive: true });
      fs.writeFileSync(path.join(tmp, 'v2', 'sample', 'demo.mdx'), '# explicit');
      fs.writeFileSync(path.join(tmp, 'v2', 'sample', 'demo', 'index.mdx'), '# index');

      const resolved = resolveRouteToFile('v2/sample/demo', tmp);
      assert.strictEqual(resolved, 'v2/sample/demo.mdx');
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  }));

  results.push(await runCase('LLM evaluator parses JSON payloads and reports exhaustion when free-tier capacity is zero', async () => {
    const evaluator = new LlmEvaluator('test-key', { tier: 'free' });
    const parsed = evaluator._extractJson('```json\\n{\"score\":72,\"pass\":true,\"reasoning\":\"clear\"}\\n```');
    assert.strictEqual(parsed.score, 72);
    assert.strictEqual(parsed.pass, true);

    (evaluator.tier.models || []).forEach((model) => {
      evaluator.modelDailyCounts[model] = evaluator._dailyLimit();
    });
    const selected = evaluator._selectModel();
    assert.strictEqual(selected, null);
  }));

  results.push(await runCase('Human/agent divergence is preserved across page types', async () => {
    const landingContent = `---
title: Gateway Portal
description: Choose your next route
purpose: landing
audience: gateway-operator
---

# Gateway Portal

This page helps operators choose where to go next.

<CardGroup>
  <Card title="Setup" href="/v2/gateways/run-a-gateway/setup" />
  <Card title="Troubleshooting" href="/v2/gateways/faq" />
</CardGroup>
`;

    const referenceContent = `---
title: API Reference
description: Parameter and response details
purpose: reference
audience: developer
---

# API Reference

## Parameters
| Parameter | Type | Required | Default |
| --- | --- | --- | --- |
| model | string | yes | - |
| timeout | integer | no | 30 |

## Example
\n\n\`\`\`json
{"model":"foo","timeout":30}
\`\`\`
`;

    const landingPage = analyzeMdxPage({ content: landingContent, filePath: 'v2/gateways/gateways-portal.mdx', routePath: '/v2/gateways/gateways-portal' });
    const referencePage = analyzeMdxPage({ content: referenceContent, filePath: 'v2/developers/api-reference.mdx', routePath: '/v2/developers/api-reference' });

    const landingScore = scorePage(landingPage, { rubric: loadRubric() });
    const referenceScore = scorePage(referencePage, { rubric: loadRubric() });

    assert.ok(landingScore.combined_score > landingScore.agent_score, 'Landing should favor human routing usefulness');
    assert.ok(referenceScore.agent_score > landingScore.agent_score, 'Reference should be more extractable for agents than landing');
  }));

  results.push(await runCase('Tier1 usefulness score is independent of quality-gate parse failures', async () => {
    const howToContent = `---
title: Configure Gateway
description: Configure gateway in a few steps
purpose: how_to
audience: gateway-operator
---

# Configure Gateway

This guide shows how to configure your gateway.

## Prerequisites

- Access to your host

## Steps

<Steps>
  <Step title="Run command">
\`\`\`bash
echo ready
\`\`\`
You should see ready.
  </Step>
</Steps>

## Next Steps
See /v2/gateways/faq.
`;

    const page = analyzeMdxPage({
      content: howToContent,
      filePath: 'v2/gateways/run-a-gateway/configure.mdx',
      routePath: '/v2/gateways/run-a-gateway/configure'
    });

    const rubric = loadRubric();
    const base = scorePage(page, { rubric });
    const flagged = scorePage(
      { ...page, flags: [...new Set([...(page.flags || []), 'mdx_parse_error'])] },
      { rubric }
    );

    assert.strictEqual(flagged.tier1_score, base.tier1_score);
    assert.strictEqual(flagged.quality_gate_status, 'fail');
  }));

  results.push(await runCase('PR checks generated-banner matcher is delta-aware and codex issue-skip log marker exists', async () => {
    assert.strictEqual(shouldRunGeneratedBannerCheck(['tools/lib/docs-usefulness/scoring.js']), false);
    assert.strictEqual(shouldRunGeneratedBannerCheck(['tools/scripts/generate-pages-index.js']), true);
    assert.strictEqual(shouldRunGeneratedBannerCheck(['v2/fr/docs-guide/indexes/pages-index.mdx']), true);

    const prChecksSource = fs.readFileSync(path.join(__dirname, '..', 'run-pr-checks.js'), 'utf8');
    assert.match(prChecksSource, /issue-readiness enforcement is skipped/i);
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
