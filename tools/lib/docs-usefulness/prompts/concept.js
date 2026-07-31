'use strict';
/**
 * @script            prompts/concept
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for concept page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');
 */
/**
 * @script            prompts/concept
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for concept page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');
 */
/**
 * @script            prompts/concept
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for concept page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');
 */
/**
 * @script            prompts/concept
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for concept page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');
 */
/**
 * @script            prompts/concept
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for concept page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  concept_focus: {
    system: `${SYSTEM_BASE} Evaluate concept-page focus.`,
    user: `Evaluate if this page stays focused on one primary concept.

PAGE CONTENT:
{content}`
  },
  concept_jargon: {
    system: `${SYSTEM_BASE} Evaluate jargon definition quality.`,
    user: `Evaluate if jargon is defined on first use or clearly linked.

Declared audience: {audience}

PAGE CONTENT:
{content}`
  },
  concept_practical: {
    system: `${SYSTEM_BASE} Evaluate practical relevance of conceptual explanation.`,
    user: `Evaluate if this concept page connects ideas to practical usage.

PAGE CONTENT:
{content}`
  },
  concept_clarity: {
    system: `${SYSTEM_BASE} Evaluate conceptual clarity.`,
    user: `Evaluate explanation quality, coherence, and readability.

PAGE CONTENT:
{content}`
  }
};
