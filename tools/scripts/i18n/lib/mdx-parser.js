/**
 * @script mdx-parser
 * @summary Utility script for tools/scripts/i18n/lib/mdx-parser.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/mdx-parser.js
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
 *   node tools/scripts/i18n/lib/mdx-parser.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
let parserPromise = null;

async function createParser() {
  const [{ unified }, { default: remarkParse }, { default: remarkMdx }, { default: remarkGfm }] =
    await Promise.all([import('unified'), import('remark-parse'), import('remark-mdx'), import('remark-gfm')]);
  return unified().use(remarkParse).use(remarkGfm).use(remarkMdx);
}

async function getParser() {
  if (!parserPromise) {
    parserPromise = createParser();
  }
  return parserPromise;
}

async function parseMdx(content) {
  const parser = await getParser();
  return parser.parse(String(content || ''));
}

module.exports = { parseMdx };
