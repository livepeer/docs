/**
 * @script            mdx-parser
 * @category          utility
 * @purpose           feature:translation
 * @scope             operations/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement MDX parser for i18n — extracts translatable content blocks from MDX
 * @pipeline          indirect — library module
 * @usage             node operations/scripts/i18n/lib/mdx-parser.js [flags]
 */
const { importRepoDependency } = require('../../../../../../tools/lib/bootstrap/repo-node-paths');

let parserPromise = null;

async function createParser() {
  const [{ unified }, { default: remarkParse }, { default: remarkMdx }, { default: remarkGfm }] =
    await Promise.all([
      importRepoDependency('unified', __dirname),
      importRepoDependency('remark-parse', __dirname),
      importRepoDependency('remark-mdx', __dirname),
      importRepoDependency('remark-gfm', __dirname)
    ]);
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
