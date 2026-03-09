'use strict';
/**
 * @script            prompts/glossary
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for glossary page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/glossary');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  glossary_no_marketing: {
    system: `${SYSTEM_BASE} Evaluate glossary neutrality.`,
    user: `Evaluate this glossary page.

Criteria:
- Definitions are neutral and non-marketing.
- Terms are concise and factual.

PAGE CONTENT:
{content}`
  },
  glossary_newcomer: {
    system: `${SYSTEM_BASE} Evaluate glossary coverage for newcomers.`,
    user: `Evaluate whether this glossary helps newcomers understand essential terms.

PAGE CONTENT:
{content}`
  }
};
