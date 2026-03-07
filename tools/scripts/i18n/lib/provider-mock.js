/**
 * @script            provider-mock
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Mock translation provider — returns placeholder translations for testing without API calls
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/scripts/i18n/lib/provider-mock.js [flags]
 */
function createMockTranslator() {
  return {
    name: 'mock',
    async translateStrings({ language, strings }) {
      return {
        strings: (strings || []).map((value) => `[${language}] ${String(value ?? '')}`),
        modelUsed: 'mock',
        attempts: 0
      };
    }
  };
}

module.exports = { createMockTranslator };
