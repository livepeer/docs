'use strict';
/**
 * @script            prompts/tutorial
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for tutorial page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');
 */
/**
 * @script            prompts/tutorial
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for tutorial page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');
 */
/**
 * @script            prompts/tutorial
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for tutorial page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');
 */
/**
 * @script            prompts/tutorial
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for tutorial page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');
 */
/**
 * @script            prompts/tutorial
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for tutorial page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  tutorial_steps_complete: {
    system: `${SYSTEM_BASE} Evaluate tutorial step completeness.`,
    user: `Evaluate if this tutorial can be completed end-to-end by following only this page.

PAGE CONTENT:
{content}`
  },
  tutorial_newcomer: {
    system: `${SYSTEM_BASE} Evaluate newcomer accessibility.`,
    user: `Evaluate if this tutorial is accessible to newcomers to the domain.

PAGE CONTENT:
{content}`
  },
  tutorial_error_recovery: {
    system: `${SYSTEM_BASE} Evaluate error recovery guidance in tutorials.`,
    user: `Evaluate whether this tutorial includes recovery paths when steps fail.

PAGE CONTENT:
{content}`
  },
  tutorial_context: {
    system: `${SYSTEM_BASE} Evaluate contextual explanations for why actions are performed.`,
    user: `Evaluate whether this tutorial explains why each major step matters.

PAGE CONTENT:
{content}`
  }
};
