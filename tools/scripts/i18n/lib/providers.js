/**
 * @script providers
 * @summary Utility script for tools/scripts/i18n/lib/providers.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/providers.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tools/scripts/i18n/lib/providers.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
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
