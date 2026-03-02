/**
 * @script provider-mock
 * @summary Utility script for tools/scripts/i18n/lib/provider-mock.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/provider-mock.js
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
 *   node tools/scripts/i18n/lib/provider-mock.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
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
