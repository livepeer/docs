'use strict';
/**
 * @script            prompts/reference
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for reference page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');
 */
/**
 * @script            prompts/reference
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for reference page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');
 */
/**
 * @script            prompts/reference
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for reference page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');
 */
/**
 * @script            prompts/reference
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for reference page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');
 */
/**
 * @script            prompts/reference
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for reference page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  reference_params: {
    system: `${SYSTEM_BASE} Evaluate parameter completeness for reference pages.`,
    user: `Evaluate this reference page.

Criteria:
- Parameters/fields are complete and clearly named.
- Required/optional/default/type details are present where expected.

PAGE CONTENT:
{content}`
  },
  reference_examples: {
    system: `${SYSTEM_BASE} Evaluate example quality for reference pages.`,
    user: `Evaluate this reference page.

Criteria:
- Includes realistic examples.
- Examples align with documented parameters/fields.

PAGE CONTENT:
{content}`
  },
  reference_no_prose: {
    system: `${SYSTEM_BASE} Evaluate whether the page remains lookup-oriented and avoids narrative drift.`,
    user: `Evaluate this reference page for lookup orientation.

PAGE CONTENT:
{content}`
  }
};
