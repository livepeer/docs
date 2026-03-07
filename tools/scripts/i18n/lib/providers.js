/**
 * @script            providers
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Provider registry — selects translation provider (OpenRouter or mock) based on configuration
 * @pipeline          indirect — library module
 * @usage             node tools/scripts/i18n/lib/providers.js [flags]
 */
const { createOpenRouterTranslator } = require('./provider-openrouter');
const { createMockTranslator } = require('./provider-mock');

function createTranslator({ config, providerNameOverride = '' }) {
  const providerConfig = { ...(config.provider || {}) };
  const name = String(providerNameOverride || providerConfig.name || '').trim().toLowerCase();

  if (name === 'mock') {
    return createMockTranslator();
  }
  if (name === 'openrouter' || !name) {
    return createOpenRouterTranslator(providerConfig, config.translationRules || {});
  }

  throw new Error(`Unsupported i18n provider: ${name}`);
}

module.exports = { createTranslator };
