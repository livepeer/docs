'use strict';
/**
 * @script            prompts/changelog
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for changelog page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');
 */
/**
 * @script            prompts/changelog
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for changelog page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');
 */
/**
 * @script            prompts/changelog
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for changelog page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');
 */
/**
 * @script            prompts/changelog
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for changelog page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');
 */
/**
 * @script            prompts/changelog
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for changelog page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  changelog_clear: {
    system: `${SYSTEM_BASE} Evaluate changelog summary clarity.`,
    user: `Evaluate this changelog page.

Criteria:
- Entries clearly describe what changed.
- Time/version context is clear.

PAGE CONTENT:
{content}`
  },
  changelog_actionable: {
    system: `${SYSTEM_BASE} Evaluate changelog actionability for implementers.`,
    user: `Evaluate whether this changelog tells developers what action they should take.

PAGE CONTENT:
{content}`
  }
};
