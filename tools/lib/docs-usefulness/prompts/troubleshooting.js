'use strict';
/**
 * @script            prompts/troubleshooting
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for troubleshooting page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');
 */
/**
 * @script            prompts/troubleshooting
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for troubleshooting page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');
 */
/**
 * @script            prompts/troubleshooting
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for troubleshooting page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');
 */
/**
 * @script            prompts/troubleshooting
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for troubleshooting page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');
 */
/**
 * @script            prompts/troubleshooting
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for troubleshooting page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');
 */

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  troubleshooting_symptom_first: {
    system: `${SYSTEM_BASE} Evaluate symptom-first troubleshooting structure.`,
    user: `Evaluate this troubleshooting page.

Criteria:
- Entries are structured by symptom/error users observe.
- Cause-only structure without symptom entrypoints scores low.

PAGE CONTENT:
{content}`
  },
  troubleshooting_actionable: {
    system: `${SYSTEM_BASE} Evaluate actionability of troubleshooting fixes.`,
    user: `Evaluate this troubleshooting page.

Criteria:
- Fixes are explicit and executable.
- Steps are concrete enough to attempt immediately.

PAGE CONTENT:
{content}`
  },
  troubleshooting_searchable: {
    system: `${SYSTEM_BASE} Evaluate searchability of errors and symptoms.`,
    user: `Evaluate if errors/symptoms are represented in searchable phrasing.

PAGE CONTENT:
{content}`
  }
};
