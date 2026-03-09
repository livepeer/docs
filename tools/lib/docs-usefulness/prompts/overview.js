'use strict';
/**
 * @script            prompts/overview
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for overview page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/overview');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  overview_benefit: {
    system: `${SYSTEM_BASE} Evaluate whether overview pages explain reader benefit.`,
    user: `Evaluate this overview page.

Criteria:
- Why this topic matters is clear early.
- Reader benefit is concrete.

PAGE CONTENT:
{content}`
  },
  overview_next_context: {
    system: `${SYSTEM_BASE} Evaluate whether overview pages provide context for next steps.`,
    user: `Evaluate this overview page.

Criteria:
- Mentions what to read/do next.
- Links to next resources are contextualized.

PAGE CONTENT:
{content}`
  },
  overview_no_detail: {
    system: `${SYSTEM_BASE} Evaluate that overview pages avoid exhaustive implementation detail.`,
    user: `Evaluate this overview page.

Criteria:
- Stays high-level.
- Avoids deep exhaustive procedures/reference dumps.

PAGE CONTENT:
{content}`
  }
};
