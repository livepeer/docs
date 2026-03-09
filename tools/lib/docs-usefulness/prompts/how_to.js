'use strict';
/**
 * @script            prompts/how_to
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for how_to page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/how_to');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  howto_action_result: {
    system: `${SYSTEM_BASE} Evaluate action/result pairing for how-to pages.`,
    user: `Evaluate this how-to page.

Criteria:
- Steps specify concrete actions.
- Steps include expected outputs/results.
- User can verify success after each stage.

PAGE CONTENT:
{content}`
  },
  audience_knowledge: {
    system: `${SYSTEM_BASE} Evaluate audience knowledge fit.`,
    user: `Evaluate whether this page matches declared audience knowledge.

Declared audience: {audience}
Declared purpose: {purpose}

PAGE CONTENT:
{content}`
  },
  howto_troubleshooting: {
    system: `${SYSTEM_BASE} Evaluate troubleshooting coverage for how-to pages.`,
    user: `Evaluate this how-to page.

Criteria:
- Mentions common failures.
- Provides recovery guidance or links.

PAGE CONTENT:
{content}`
  }
};
