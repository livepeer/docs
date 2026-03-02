/**
 * @script docs-json-localizer
 * @summary Utility script for tools/scripts/i18n/lib/docs-json-localizer.js.
 * @owner docs
 * @scope tools/scripts
 *
 * @usage
 *   node tools/scripts/i18n/lib/docs-json-localizer.js
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
 *   node tools/scripts/i18n/lib/docs-json-localizer.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
const fs = require('fs');
const path = require('path');
const { chunkArray } = require('./common');
const { normalizeRouteKey } = require('./path-utils');
const { protectText, restoreProtectedText } = require('./mdx-translate');

const MOCK_LABEL_PREFIX_RE = /^\[[a-z]{2,5}(?:-[A-Z]{2})?\]\s+/;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeLanguageAlias(language, languageCodeMap = {}) {
  const raw = String(language || '').trim();
  if (!raw) return '';
  if (typeof languageCodeMap[raw] === 'string' && languageCodeMap[raw].trim()) return languageCodeMap[raw].trim();
  const lower = raw.toLowerCase();
  for (const [key, value] of Object.entries(languageCodeMap || {})) {
    if (String(key).toLowerCase() === lower && String(value || '').trim()) return String(value).trim();
  }
  return raw;
}

function collectLabelFields(node, labelKeys, out = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => collectLabelFields(item, labelKeys, out));
    return out;
  }
  if (!node || typeof node !== 'object') return out;

  for (const key of Object.keys(node)) {
    if (labelKeys.has(key) && typeof node[key] === 'string' && node[key].trim() && node[key].trim() !== ' ') {
      out.push({ target: node, key, value: node[key] });
    }
    collectLabelFields(node[key], labelKeys, out);
  }
  return out;
}

function detectMockPrefixedLabels(node, labelKeys) {
  const labels = collectLabelFields(node, labelKeys);
  const matches = [];
  for (const label of labels) {
    const value = String(label.target?.[label.key] || '');
    if (MOCK_LABEL_PREFIX_RE.test(value)) {
      matches.push({
        key: label.key,
        value
      });
    }
  }
  return matches;
}

function normalizeArtifactClass(entry) {
  const explicit = String(entry?.artifactClass || '').trim();
  if (explicit) return explicit;
  const provider = String(entry?.provider || '').trim().toLowerCase();
  if (provider === 'mock') return 'translated_mock';
  if (provider) return 'translated_real';
  return 'existing_unknown';
}

function buildRouteMapIndex(routeMapEntries) {
  const index = new Map();
  for (const rawEntry of routeMapEntries || []) {
    const status = String(rawEntry.status || '').trim();
    if (status && !['translated', 'unchanged_write', 'skipped_up_to_date', 'existing', 'translated_dry_run'].includes(status)) {
      continue;
    }
    const sourceRoute = normalizeRouteKey(rawEntry.sourceRoute);
    const language = String(rawEntry.effectiveLanguage || rawEntry.language || '').trim();
    const localizedRoute = normalizeRouteKey(rawEntry.localizedRoute);
    if (!sourceRoute || !language || !localizedRoute) continue;
    const entry = {
      ...rawEntry,
      sourceRoute,
      language,
      localizedRoute,
      effectiveLanguage: String(rawEntry.effectiveLanguage || rawEntry.language || '').trim(),
      requestedLanguage: String(rawEntry.requestedLanguage || ''),
      localizedRouteStyle: String(rawEntry.localizedRouteStyle || ''),
      provider: String(rawEntry.provider || '').trim().toLowerCase(),
      modelUsed: String(rawEntry.modelUsed || ''),
      provenanceKind: String(rawEntry.provenanceKind || ''),
      artifactClass: normalizeArtifactClass(rawEntry)
    };
    if (!index.has(sourceRoute)) index.set(sourceRoute, new Map());
    index.get(sourceRoute).set(language, entry);
  }
  return index;
}

function shouldPreservePageEntry(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed || trimmed === ' ') return true;
  if (/^(https?:\/\/|mailto:|#)/i.test(trimmed)) return true;
  return false;
}

function buildStats() {
  return {
    rewrittenRoutes: 0,
    fallbackRoutes: 0,
    fallbackRoutesWithinSelectedScope: 0,
    fallbackRoutesOutsideSelectedScope: 0,
    rewrittenRoutesFromMockArtifacts: 0,
    blockedMockArtifactRoutes: 0,
    fallbackByLocation: new Map()
  };
}

function trimLabel(value) {
  const text = String(value || '').trim();
  return text || '';
}

function locationKeyFromTrail(trail = {}) {
  const tab = trimLabel(trail.tab) || '(tab:unknown)';
  const anchor = trimLabel(trail.anchor) || '(anchor:unknown)';
  const group = trimLabel(trail.group) || '(group:ungrouped)';
  return `${tab} > ${anchor} > ${group}`;
}

function recordFallback(stats, context, trail, sourceRoute) {
  stats.fallbackRoutes += 1;
  const selectedSet = context.selectedScopeRoutes;
  if (selectedSet && selectedSet.size > 0) {
    if (selectedSet.has(sourceRoute)) stats.fallbackRoutesWithinSelectedScope += 1;
    else stats.fallbackRoutesOutsideSelectedScope += 1;
  } else {
    stats.fallbackRoutesOutsideSelectedScope += 1;
  }

  const key = locationKeyFromTrail(trail);
  const nextCount = (stats.fallbackByLocation.get(key) || 0) + 1;
  stats.fallbackByLocation.set(key, nextCount);
}

function maybeRewriteRoute(entry, sourceRoute, context, stats, trail) {
  if (!entry) {
    recordFallback(stats, context, trail, sourceRoute);
    return { rewritten: false, route: null };
  }

  if (context.rejectMockArtifactsForRouteRewrite && entry.artifactClass === 'translated_mock') {
    stats.blockedMockArtifactRoutes += 1;
    recordFallback(stats, context, trail, sourceRoute);
    return { rewritten: false, route: null };
  }

  const localizedRoute = normalizeRouteKey(entry.localizedRoute);
  if (!localizedRoute) {
    recordFallback(stats, context, trail, sourceRoute);
    return { rewritten: false, route: null };
  }

  if (context.requireLocalizedFileForRouteRewrite) {
    const abs = path.join(context.repoRoot, `${localizedRoute}.mdx`);
    const absAlt = path.join(context.repoRoot, `${localizedRoute}.md`);
    if (!fs.existsSync(abs) && !fs.existsSync(absAlt)) {
      recordFallback(stats, context, trail, sourceRoute);
      return { rewritten: false, route: null };
    }
  }

  stats.rewrittenRoutes += 1;
  if (entry.artifactClass === 'translated_mock') {
    stats.rewrittenRoutesFromMockArtifacts += 1;
  }
  return { rewritten: true, route: localizedRoute };
}

function localizePagesInNode(node, context, stats, trail = {}) {
  if (Array.isArray(node)) {
    node.forEach((item) => localizePagesInNode(item, context, stats, trail));
    return;
  }
  if (!node || typeof node !== 'object') return;

  const nextTrail = { ...trail };
  if (typeof node.tab === 'string' && node.tab.trim() && node.tab.trim() !== ' ') nextTrail.tab = node.tab;
  if (typeof node.anchor === 'string' && node.anchor.trim() && node.anchor.trim() !== ' ') nextTrail.anchor = node.anchor;
  if (typeof node.group === 'string' && node.group.trim() && node.group.trim() !== ' ') nextTrail.group = node.group;

  if (Array.isArray(node.pages)) {
    node.pages = node.pages.map((entry) => {
      if (typeof entry !== 'string') {
        localizePagesInNode(entry, context, stats, nextTrail);
        return entry;
      }
      if (shouldPreservePageEntry(entry)) return entry;

      const normalized = normalizeRouteKey(entry);
      if (!normalized.startsWith('v2/')) return entry;

      const mapped = context.routeMapIndex.get(normalized)?.get(context.language) || null;
      const rewrite = maybeRewriteRoute(mapped, normalized, context, stats, nextTrail);
      if (!rewrite.rewritten || !rewrite.route) return entry;

      if (String(entry).trim().startsWith('/')) {
        return `/${rewrite.route}`;
      }
      return rewrite.route;
    });
  }

  Object.keys(node).forEach((key) => {
    if (key === 'pages') return;
    localizePagesInNode(node[key], context, stats, nextTrail);
  });
}

async function translateLabelFields({ languageNode, language, translator, translationRules }) {
  const labelKeys = new Set(translationRules?.translateDocsJsonLabelKeys || ['tab', 'anchor', 'group']);
  const labels = collectLabelFields(languageNode, labelKeys);
  if (labels.length === 0) {
    return { translatedCount: 0, modelUsed: '', mockPrefixedLabels: [], labelKeys };
  }

  const protectedItems = labels.map((item) => ({
    item,
    protectedValue: protectText(item.value, translationRules)
  }));

  const toTranslate = protectedItems.filter((entry) => !entry.protectedValue.skip);
  if (toTranslate.length === 0) {
    return {
      translatedCount: 0,
      modelUsed: '',
      mockPrefixedLabels: detectMockPrefixedLabels(languageNode, labelKeys),
      labelKeys
    };
  }

  const strings = toTranslate.map((entry) => entry.protectedValue.text);
  const chunks = chunkArray(strings.map((text, idx) => ({ text, idx })), 50, 12000, (item) => item.text.length + 8);
  const translated = new Array(strings.length);
  let modelUsed = '';
  let translatedCount = 0;

  for (const chunk of chunks) {
    const result = await translator.translateStrings({
      language,
      strings: chunk.map((item) => item.text),
      kind: 'docs_json_labels'
    });
    modelUsed = modelUsed || result.modelUsed || '';
    if ((result.strings || []).length !== chunk.length) {
      throw new Error('docs.json label translation count mismatch');
    }
    chunk.forEach((item, offset) => {
      translated[item.idx] = result.strings[offset];
      translatedCount += 1;
    });
  }

  let cursor = 0;
  for (const entry of protectedItems) {
    if (entry.protectedValue.skip) continue;
    const translatedValue = translated[cursor++];
    entry.item.target[entry.item.key] = restoreProtectedText(translatedValue, entry.protectedValue.placeholders);
  }

  return {
    translatedCount,
    modelUsed,
    mockPrefixedLabels: detectMockPrefixedLabels(languageNode, labelKeys),
    labelKeys
  };
}

function percent(numerator, denominator) {
  if (!denominator) return 0;
  return Number(((numerator / denominator) * 100).toFixed(1));
}

function topFallbackDiagnostics(stats, limit = 10) {
  return [...stats.fallbackByLocation.entries()]
    .map(([location, fallbackRoutes]) => ({ location, fallbackRoutes }))
    .sort((a, b) => b.fallbackRoutes - a.fallbackRoutes || a.location.localeCompare(b.location))
    .slice(0, Math.max(1, Number(limit) || 10));
}

function routeCoverageScopeLabel(scopeMode) {
  if (scopeMode === 'full_v2_nav') return 'full_v2_nav';
  if (scopeMode) return 'partial_scope';
  return 'unknown';
}

function collectWarningsForLanguage({
  language,
  routeCoverageScope,
  routeCoverageOverallPct,
  routeStats,
  reporting,
  scopeMode
}) {
  const warnings = [];
  const threshold = Number(reporting?.warnRouteRewriteCoverageBelowPct);
  const warnOnMixed = reporting?.warnOnMixedLanguageLocaleUi !== false;

  if (warnOnMixed) {
    if (routeCoverageScope === 'partial_scope') {
      warnings.push(
        `Partial scope run (${scopeMode}) rewrote ${routeStats.rewrittenRoutes} routes and left ${routeStats.fallbackRoutes} English fallback routes. Mixed-language locale UI is expected until more pages are localized.`
      );
    } else if (
      routeCoverageScope === 'full_v2_nav' &&
      Number.isFinite(threshold) &&
      routeStats.rewrittenRoutes + routeStats.fallbackRoutes > 0 &&
      routeCoverageOverallPct < threshold
    ) {
      warnings.push(
        `Route rewrite coverage for ${language} is ${routeCoverageOverallPct}% (below ${threshold}%). Locale UI may remain mixed-language because page routes without localized files fall back to English.`
      );
    }
  }

  if (routeStats.blockedMockArtifactRoutes > 0) {
    warnings.push(
      `Blocked ${routeStats.blockedMockArtifactRoutes} mock-provenance localized route(s) from docs.json rewrites.`
    );
  }

  return warnings;
}

async function generateLocalizedDocsJson({
  docsJson,
  repoRoot,
  targetLanguages,
  translator,
  translationRules,
  routeMapEntries,
  routeMapMetadata,
  qualityGates,
  reporting,
  runtime,
  languageCodeMap,
  writeMode,
  allowMockWrite
}) {
  const nextDocsJson = deepClone(docsJson);
  const versions = nextDocsJson?.navigation?.versions || [];
  const v2Version = versions.find((versionNode) => versionNode?.version === 'v2');
  if (!v2Version) throw new Error('v2 version not found in docs.json');
  const englishNode = (v2Version.languages || []).find((langNode) => langNode?.language === 'en');
  if (!englishNode) throw new Error('v2 English language node not found in docs.json');

  const routeMapIndex = buildRouteMapIndex(routeMapEntries);
  const perLanguage = [];
  const existingLanguageLookup = new Map(
    (v2Version.languages || [])
      .filter((langNode) => langNode && typeof langNode === 'object')
      .map((langNode) => [String(langNode.language || '').trim(), langNode])
      .filter(([language]) => Boolean(language))
  );
  const targetLanguageSet = new Set(targetLanguages.map((lang) => normalizeLanguageAlias(lang, languageCodeMap)));
  const existingNonTargets = (v2Version.languages || []).filter((langNode) => {
    const language = String(langNode?.language || '').trim();
    if (!language || language === 'en') return false;
    return !targetLanguageSet.has(normalizeLanguageAlias(language, languageCodeMap));
  });
  const nextLanguages = [deepClone(englishNode), ...existingNonTargets.map((n) => deepClone(n))];

  const inferredScopeMode =
    String(routeMapMetadata?.runtime?.scopeMode || routeMapMetadata?.scope?.scopeMode || runtime?.scopeMode || '').trim();
  const selectedScopeRoutes = new Set(
    (routeMapMetadata?.scope?.selectedRoutes || []).map((route) => normalizeRouteKey(route)).filter(Boolean)
  );
  const routeCoverageScope = routeCoverageScopeLabel(inferredScopeMode);
  const resultWarnings = Array.isArray(routeMapMetadata?.warnings) ? [...routeMapMetadata.warnings] : [];
  const legacyRouteMapEntryCount = (routeMapEntries || []).filter((entry) =>
    /^v2\/i18n\//.test(normalizeRouteKey(entry?.localizedRoute))
  ).length;
  if (legacyRouteMapEntryCount > 0) {
    resultWarnings.push(
      `Detected ${legacyRouteMapEntryCount} legacy localized route-map entr${legacyRouteMapEntryCount === 1 ? 'y' : 'ies'} using v2/i18n/* routes. Mintlify version/language UI may break until routes use v2/<lang>/* style.`
    );
  }

  for (const language of targetLanguages) {
    const existingLanguageNode = existingLanguageLookup.get(language);
    const localizedNode = existingLanguageNode ? deepClone(existingLanguageNode) : deepClone(englishNode);
    localizedNode.language = language;

    // Reuse existing localized labels when present to avoid re-translating large nav trees every batch.
    const labelResult = existingLanguageNode
      ? {
          translatedCount: 0,
          modelUsed: 'cached_existing_labels',
          mockPrefixedLabels: detectMockPrefixedLabels(
            localizedNode,
            new Set(translationRules?.translateDocsJsonLabelKeys || ['tab', 'anchor', 'group'])
          ),
          labelKeys: new Set(translationRules?.translateDocsJsonLabelKeys || ['tab', 'anchor', 'group'])
        }
      : await translateLabelFields({
          languageNode: localizedNode,
          language,
          translator,
          translationRules
        });

    if (labelResult.mockPrefixedLabels.length > 0) {
      if (writeMode && translator?.name === 'mock' && !allowMockWrite) {
        throw new Error(
          `docs.json label translation produced mock-prefixed labels for ${language}; non-dry mock writes are blocked.`
        );
      }
      const warning = `Detected ${labelResult.mockPrefixedLabels.length} mock-prefixed docs.json labels for ${language}.`;
      resultWarnings.push(warning);
    }

    const routeStats = buildStats();
    localizePagesInNode(
      localizedNode,
      {
        language,
        repoRoot,
        routeMapIndex,
        selectedScopeRoutes,
        rejectMockArtifactsForRouteRewrite: qualityGates?.rejectMockArtifactsForRouteRewrite !== false,
        requireLocalizedFileForRouteRewrite: Boolean(qualityGates?.requireLocalizedFileForRouteRewrite)
      },
      routeStats
    );

    const consideredRoutes = routeStats.rewrittenRoutes + routeStats.fallbackRoutes;
    const routeCoverageOverallPct = percent(routeStats.rewrittenRoutes, consideredRoutes);
    const warnings = collectWarningsForLanguage({
      language,
      routeCoverageScope,
      routeCoverageOverallPct,
      routeStats,
      reporting,
      scopeMode: inferredScopeMode || 'unknown'
    });

    nextLanguages.push(localizedNode);
    perLanguage.push({
      language,
      translatedLabels: labelResult.translatedCount,
      labelModelUsed: labelResult.modelUsed,
      rewrittenRoutes: routeStats.rewrittenRoutes,
      fallbackRoutes: routeStats.fallbackRoutes,
      fallbackRoutesWithinSelectedScope: routeStats.fallbackRoutesWithinSelectedScope,
      fallbackRoutesOutsideSelectedScope: routeStats.fallbackRoutesOutsideSelectedScope,
      rewrittenRoutesFromMockArtifacts: routeStats.rewrittenRoutesFromMockArtifacts,
      routeCoverageOverallPct,
      routeCoverageScope,
      topFallbackGroups: topFallbackDiagnostics(routeStats, 10),
      warnings
    });
  }

  v2Version.languages = nextLanguages;
  return {
    docsJson: nextDocsJson,
    report: {
      warnings: resultWarnings,
      perLanguage
    }
  };
}

module.exports = {
  buildRouteMapIndex,
  collectLabelFields,
  detectMockPrefixedLabels,
  generateLocalizedDocsJson,
  topFallbackDiagnostics
};
