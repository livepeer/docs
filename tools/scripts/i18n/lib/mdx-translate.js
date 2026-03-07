/**
 * @script            mdx-translate
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement MDX translation engine — applies translations to MDX content blocks
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/scripts/i18n/lib/mdx-translate.js [flags]
 */
const path = require('path');
const { parseMdx } = require('./mdx-parser');
const { normalizeRouteKey } = require('./path-utils');

const BLOCKED_TYPES = new Set([
  'code',
  'inlineCode',
  'html',
  'yaml',
  'definition',
  'mdxjsEsm',
  'mdxFlowExpression',
  'mdxTextExpression',
  'mdxJsxFlowElement',
  'mdxJsxTextElement'
]);

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function walk(node, parents, visitor) {
  if (!node || typeof node !== 'object') return;
  visitor(node, parents);
  if (BLOCKED_TYPES.has(node.type)) return;

  if (Array.isArray(node.children)) {
    const nextParents = parents.concat(node);
    node.children.forEach((child) => walk(child, nextParents, visitor));
  }
}

function canTranslateTextNode(node, parents) {
  if (!node || node.type !== 'text') return false;
  if (!node.position || typeof node.position.start?.offset !== 'number' || typeof node.position.end?.offset !== 'number') {
    return false;
  }
  if (!String(node.value || '').trim()) return false;
  if (parents.some((p) => BLOCKED_TYPES.has(p.type))) return false;
  return true;
}

async function extractTranslatableTextSegments(body) {
  const tree = await parseMdx(body);
  const segments = [];
  let counter = 0;

  walk(tree, [], (node, parents) => {
    if (!canTranslateTextNode(node, parents)) return;
    const start = node.position.start.offset;
    const end = node.position.end.offset;
    if (typeof start !== 'number' || typeof end !== 'number' || end <= start) return;
    segments.push({
      id: `seg_${counter++}`,
      start,
      end,
      text: String(node.value || '')
    });
  });

  segments.sort((a, b) => a.start - b.start || a.end - b.end);
  return segments.filter((segment, index) => {
    if (index === 0) return true;
    return segment.start >= segments[index - 1].end;
  });
}

function applySegmentTranslations(body, translatedSegments) {
  let next = String(body || '');
  const ordered = [...translatedSegments].sort((a, b) => b.start - a.start);
  for (const segment of ordered) {
    next = `${next.slice(0, segment.start)}${segment.text}${next.slice(segment.end)}`;
  }
  return next;
}

function protectText(text, rules = {}) {
  const source = String(text ?? '');
  const preserveRegexes = Array.isArray(rules.preserveRegexes) ? rules.preserveRegexes : [];
  for (const pattern of preserveRegexes) {
    try {
      const regex = new RegExp(pattern);
      if (regex.test(source)) {
        return { text: source, placeholders: [], skip: true };
      }
    } catch (_err) {
      // Ignore invalid regex in config.
    }
  }

  const placeholders = [];
  let next = source;
  let index = 0;

  const replaceWithPlaceholder = (regex) => {
    next = next.replace(regex, (match) => {
      const token = `__I18N_PH_${index++}__`;
      placeholders.push({ token, value: match });
      return token;
    });
  };

  replaceWithPlaceholder(/https?:\/\/[^\s)]+/g);
  replaceWithPlaceholder(/mailto:[^\s)]+/g);
  replaceWithPlaceholder(/\/snippets\/[^\s)]+/g);
  replaceWithPlaceholder(/\bv\d+\/[^\s)]+/g);
  replaceWithPlaceholder(/`[^`]+`/g);

  const brandTerms = Array.isArray(rules.preserveBrandTerms) ? rules.preserveBrandTerms : [];
  for (const term of brandTerms) {
    const escaped = escapeRegExp(term);
    next = next.replace(new RegExp(`\\b${escaped}\\b`, 'g'), (match) => {
      const token = `__I18N_PH_${index++}__`;
      placeholders.push({ token, value: match });
      return token;
    });
  }

  return { text: next, placeholders, skip: false };
}

function restoreProtectedText(text, placeholders = []) {
  let next = String(text ?? '');
  for (const placeholder of placeholders) {
    if (!next.includes(placeholder.token)) {
      throw new Error(`Missing placeholder in translation output: ${placeholder.token}`);
    }
    next = next.split(placeholder.token).join(placeholder.value);
  }
  return next;
}

function resolveLinkUrlToRoute(sourceRoute, url) {
  const raw = String(url || '').trim();
  if (!raw || raw === ' ' || raw.startsWith('#')) return '';
  if (/^(https?:\/\/|mailto:)/i.test(raw)) return '';
  if (raw.startsWith('/snippets/')) return '';

  let target = raw;
  if (target.startsWith('/')) {
    target = target.slice(1);
  } else if (!/^v\d+\//i.test(target)) {
    const baseDir = path.posix.dirname(normalizeRouteKey(sourceRoute));
    target = path.posix.join(baseDir, target);
  }
  return normalizeRouteKey(target);
}

function buildRelativeLink(fromRoute, toRoute) {
  const fromDir = path.posix.dirname(normalizeRouteKey(fromRoute));
  const rel = path.posix.relative(fromDir, normalizeRouteKey(toRoute));
  if (!rel) return './';
  if (rel.startsWith('.')) return rel;
  return `./${rel}`;
}

function rewriteUrlForLanguage({ sourceRoute, sourceLocalizedRoute, url, localizedTargetRoute }) {
  const raw = String(url || '');
  const trimmed = raw.trim();
  if (!trimmed) return raw;
  if (trimmed.startsWith('/')) {
    return `/${normalizeRouteKey(localizedTargetRoute)}`;
  }
  if (/^v\d+\//i.test(trimmed)) {
    return normalizeRouteKey(localizedTargetRoute);
  }
  const rel = buildRelativeLink(sourceLocalizedRoute || sourceRoute, localizedTargetRoute);
  if (trimmed.startsWith('./')) return rel;
  if (trimmed.startsWith('../')) return rel;
  return rel.replace(/^\.\//, '');
}

function rewriteMarkdownLinks(body, rewriter) {
  return String(body || '').replace(/\[([^\]]*)\]\(([^)]+)\)/g, (full, label, destination) => {
    const inner = String(destination);
    const trimmed = inner.trim();
    if (!trimmed) return full;

    let urlPart = trimmed;
    let remainder = '';
    const titleMatch = trimmed.match(/^(\S+)(\s+["'][\s\S]*["'])$/);
    if (titleMatch) {
      urlPart = titleMatch[1];
      remainder = titleMatch[2];
    }

    const rewritten = rewriter(urlPart);
    if (!rewritten || rewritten === urlPart) return full;
    return `[${label}](${rewritten}${remainder})`;
  });
}

function rewriteJsxHrefAttributes(body, rewriter) {
  return String(body || '').replace(/\bhref=(["'])([^"']+)\1/g, (full, quote, url) => {
    const trimmed = String(url || '').trim();
    if (!trimmed) return full;
    const rewritten = rewriter(trimmed);
    if (!rewritten || rewritten === trimmed) return full;
    return `href=${quote}${rewritten}${quote}`;
  });
}

function rewriteInternalLinksInBody(body, options) {
  const {
    sourceRoute,
    language,
    sourceLocalizedRoute,
    routeMapBySourceRoute
  } = options;

  if (!routeMapBySourceRoute || !(routeMapBySourceRoute instanceof Map)) {
    return { body, rewrittenCount: 0, fallbackCount: 0 };
  }

  let rewrittenCount = 0;
  let fallbackCount = 0;

  const next = rewriteMarkdownLinks(body, (urlPart) => {
    const targetSourceRoute = resolveLinkUrlToRoute(sourceRoute, urlPart);
    if (!targetSourceRoute) return urlPart;

    const localizedByLang = routeMapBySourceRoute.get(normalizeRouteKey(targetSourceRoute));
    const localizedTargetRoute = localizedByLang?.get?.(language) || '';
    if (!localizedTargetRoute) {
      fallbackCount += 1;
      return urlPart;
    }

    rewrittenCount += 1;
    return rewriteUrlForLanguage({
      sourceRoute,
      sourceLocalizedRoute,
      url: urlPart,
      localizedTargetRoute
    });
  });

  return { body: next, rewrittenCount, fallbackCount };
}

function rewriteInternalLinksInJsx(body, options) {
  const {
    sourceRoute,
    language,
    sourceLocalizedRoute,
    routeMapBySourceRoute
  } = options;

  if (!routeMapBySourceRoute || !(routeMapBySourceRoute instanceof Map)) {
    return { body, rewrittenCount: 0, fallbackCount: 0 };
  }

  let rewrittenCount = 0;
  let fallbackCount = 0;

  const next = rewriteJsxHrefAttributes(body, (urlPart) => {
    const targetSourceRoute = resolveLinkUrlToRoute(sourceRoute, urlPart);
    if (!targetSourceRoute) return urlPart;

    const localizedByLang = routeMapBySourceRoute.get(normalizeRouteKey(targetSourceRoute));
    const localizedTargetRoute = localizedByLang?.get?.(language) || '';
    if (!localizedTargetRoute) {
      fallbackCount += 1;
      return urlPart;
    }

    rewrittenCount += 1;
    return rewriteUrlForLanguage({
      sourceRoute,
      sourceLocalizedRoute,
      url: urlPart,
      localizedTargetRoute
    });
  });

  return { body: next, rewrittenCount, fallbackCount };
}

async function translateMdxBody({
  body,
  language,
  translator,
  rules,
  routeContext = null
}) {
  const segments = await extractTranslatableTextSegments(body);
  if (segments.length === 0) {
    const linkResult = routeContext
      ? rewriteInternalLinksInBody(body, routeContext)
      : { body, rewrittenCount: 0, fallbackCount: 0 };
    return {
      body: linkResult.body,
      translatedSegments: 0,
      modelUsed: '',
      linkRewrite: {
        rewrittenCount: linkResult.rewrittenCount,
        fallbackCount: linkResult.fallbackCount
      }
    };
  }

  const protectedSegments = [];
  const stringTargets = [];
  const translateIndexes = [];

  for (let i = 0; i < segments.length; i += 1) {
    const protectedValue = protectText(segments[i].text, rules);
    protectedSegments.push(protectedValue);
    if (protectedValue.skip) continue;
    translateIndexes.push(i);
    stringTargets.push(protectedValue.text);
  }

  let translatedStrings = [];
  let modelUsed = '';
  if (stringTargets.length > 0) {
    const result = await translator.translateStrings({
      language,
      strings: stringTargets,
      kind: 'mdx_text'
    });
    translatedStrings = result.strings || [];
    modelUsed = result.modelUsed || '';
    if (translatedStrings.length !== stringTargets.length) {
      throw new Error(`Translator returned ${translatedStrings.length} strings for ${stringTargets.length} inputs`);
    }
  }

  const applied = segments.map((segment) => ({ ...segment }));
  let translatedIdx = 0;

  for (let i = 0; i < applied.length; i += 1) {
    const protectedValue = protectedSegments[i];
    if (protectedValue.skip) {
      applied[i].text = segments[i].text;
      continue;
    }
    const translated = translatedStrings[translatedIdx++];
    applied[i].text = restoreProtectedText(translated, protectedValue.placeholders);
  }

  let nextBody = applySegmentTranslations(body, applied);
  let linkRewrite = { rewrittenCount: 0, fallbackCount: 0 };
  if (routeContext) {
    const result = rewriteInternalLinksInBody(nextBody, routeContext);
    nextBody = result.body;
    linkRewrite = {
      rewrittenCount: result.rewrittenCount,
      fallbackCount: result.fallbackCount
    };
  }

  return {
    body: nextBody,
    translatedSegments: stringTargets.length,
    modelUsed,
    linkRewrite
  };
}

module.exports = {
  applySegmentTranslations,
  buildRelativeLink,
  extractTranslatableTextSegments,
  normalizeRouteKey,
  protectText,
  restoreProtectedText,
  rewriteInternalLinksInBody,
  rewriteInternalLinksInJsx,
  rewriteJsxHrefAttributes,
  translateMdxBody
};
