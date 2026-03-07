/**
 * @script            frontmatter
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Frontmatter parser/writer — reads and writes MDX frontmatter for translation
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/scripts/i18n/lib/frontmatter.js [flags]
 */
const matter = require('gray-matter');
const { protectText, restoreProtectedText } = require('./mdx-translate');

function parseMdxFileWithFrontmatter(rawContent) {
  const parsed = matter(String(rawContent || ''));
  const hasFrontmatter = String(rawContent || '').startsWith('---');
  return {
    data: parsed.data || {},
    body: parsed.content || '',
    hasFrontmatter,
    stringify(nextBody, nextData) {
      const body = String(nextBody || '');
      const data = nextData || {};
      if (!hasFrontmatter && Object.keys(data).length === 0) {
        return body;
      }
      return matter.stringify(body, data);
    }
  };
}

async function translateFrontmatterFields({ data, language, translator, rules, translateKeywords = false }) {
  const next = { ...data };
  const keys = Array.isArray(rules?.translateFrontmatterKeys) ? rules.translateFrontmatterKeys : [];
  const stringTargets = [];
  const placements = [];

  for (const key of keys) {
    if (typeof next[key] !== 'string' || !next[key].trim()) continue;
    const protectedValue = protectText(next[key], rules);
    if (protectedValue.skip) continue;
    stringTargets.push(protectedValue.text);
    placements.push({ key, placeholders: protectedValue.placeholders });
  }

  if (translateKeywords && Array.isArray(next.keywords)) {
    for (let i = 0; i < next.keywords.length; i += 1) {
      if (typeof next.keywords[i] !== 'string' || !next.keywords[i].trim()) continue;
      const protectedValue = protectText(next.keywords[i], rules);
      if (protectedValue.skip) continue;
      stringTargets.push(protectedValue.text);
      placements.push({ key: 'keywords', index: i, placeholders: protectedValue.placeholders });
    }
  }

  if (stringTargets.length === 0) {
    return { data: next, translatedCount: 0, modelUsed: '' };
  }

  const result = await translator.translateStrings({
    language,
    strings: stringTargets,
    kind: 'frontmatter'
  });

  placements.forEach((placement, idx) => {
    const restored = restoreProtectedText(result.strings[idx], placement.placeholders);
    if (placement.key === 'keywords') {
      next.keywords[placement.index] = restored;
    } else {
      next[placement.key] = restored;
    }
  });

  return {
    data: next,
    translatedCount: stringTargets.length,
    modelUsed: result.modelUsed || ''
  };
}

module.exports = {
  parseMdxFileWithFrontmatter,
  translateFrontmatterFields
};
