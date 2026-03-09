'use strict';
/**
 * @script            prompts/index
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement LLM prompt template for index page-type usefulness evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { getPrompt } = require('../lib/docs-usefulness/prompts/index');
 */

const landing = require('./landing');
const overview = require('./overview');
const concept = require('./concept');
const howTo = require('./how_to');
const tutorial = require('./tutorial');
const reference = require('./reference');
const faq = require('./faq');
const troubleshooting = require('./troubleshooting');
const glossary = require('./glossary');
const changelog = require('./changelog');

module.exports = {
  ...landing,
  ...overview,
  ...concept,
  ...howTo,
  ...tutorial,
  ...reference,
  ...faq,
  ...troubleshooting,
  ...glossary,
  ...changelog
};
