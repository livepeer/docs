const fs = require('fs');
const path = require('path');

const DEFAULT_NAVIGATION_EXCLUSIONS = Object.freeze({
  exempt_page_values: [],
  exempt_anchor_values: [],
  exempt_pages: [],
  exempt_from_validators: []
});

const navigationExclusionsCache = new Map();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeDocsRouteKey(routePath) {
  let normalized = toPosix(String(routePath || '').trim());
  normalized = normalized.replace(/^\/+/, '');
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/README$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function getNavigationExclusionsPath(repoRoot) {
  return path.join(repoRoot, 'tools', 'config', 'navigation-exclusions.json');
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((entry) => String(entry || ''))
    .filter((entry, index, list) => list.indexOf(entry) === index);
}

function normalizeValidatorNames(value) {
  return normalizeStringArray(value)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function normalizeNavigationExclusions(rawConfig) {
  const config = rawConfig && typeof rawConfig === 'object' ? rawConfig : {};
  const exemptPages = normalizeStringArray(config.exempt_pages)
    .map((entry) => normalizeDocsRouteKey(entry))
    .filter(Boolean);

  return {
    _comment: typeof config._comment === 'string' ? config._comment : '',
    exempt_page_values: normalizeStringArray(config.exempt_page_values),
    exempt_anchor_values: normalizeStringArray(config.exempt_anchor_values),
    exempt_pages: [...new Set(exemptPages)],
    exempt_from_validators: normalizeValidatorNames(config.exempt_from_validators)
  };
}

function clearNavigationExclusionsCache(repoRoot = null) {
  if (!repoRoot) {
    navigationExclusionsCache.clear();
    return;
  }
  navigationExclusionsCache.delete(path.resolve(repoRoot));
}

function loadNavigationExclusions(repoRoot) {
  const cacheKey = path.resolve(repoRoot);
  if (navigationExclusionsCache.has(cacheKey)) {
    return navigationExclusionsCache.get(cacheKey);
  }

  const exclusionsPath = getNavigationExclusionsPath(cacheKey);
  let exclusions = normalizeNavigationExclusions(DEFAULT_NAVIGATION_EXCLUSIONS);

  try {
    if (fs.existsSync(exclusionsPath)) {
      exclusions = normalizeNavigationExclusions(JSON.parse(fs.readFileSync(exclusionsPath, 'utf8')));
    }
  } catch (_error) {
    exclusions = normalizeNavigationExclusions(DEFAULT_NAVIGATION_EXCLUSIONS);
  }

  navigationExclusionsCache.set(cacheKey, exclusions);
  return exclusions;
}

function shouldApplyNavigationExclusions(validatorName, exclusions = DEFAULT_NAVIGATION_EXCLUSIONS) {
  const name = String(validatorName || '').trim();
  if (!name) return false;
  return normalizeValidatorNames(exclusions.exempt_from_validators).includes(name);
}

function isExemptPageValue(value, options = {}) {
  const exclusions = options.exclusions || loadNavigationExclusions(options.repoRoot || process.cwd());
  if (!shouldApplyNavigationExclusions(options.validatorName, exclusions)) return false;
  return exclusions.exempt_page_values.includes(String(value || ''));
}

function isExemptAnchorValue(value, options = {}) {
  const exclusions = options.exclusions || loadNavigationExclusions(options.repoRoot || process.cwd());
  if (!shouldApplyNavigationExclusions(options.validatorName, exclusions)) return false;
  return exclusions.exempt_anchor_values.includes(String(value || ''));
}

function isExemptRoute(value, options = {}) {
  const exclusions = options.exclusions || loadNavigationExclusions(options.repoRoot || process.cwd());
  if (!shouldApplyNavigationExclusions(options.validatorName, exclusions)) return false;
  const normalized = normalizeDocsRouteKey(value);
  return Boolean(normalized) && exclusions.exempt_pages.includes(normalized);
}

function isExemptNavigationNode(node, options = {}) {
  const exclusions = options.exclusions || loadNavigationExclusions(options.repoRoot || process.cwd());
  if (!shouldApplyNavigationExclusions(options.validatorName, exclusions)) return false;
  if (!node || typeof node !== 'object') return false;

  if (isExemptAnchorValue(node.anchor, { ...options, exclusions })) {
    return true;
  }

  const pages = Array.isArray(node.pages) ? node.pages : [];
  if (pages.length === 0) return false;
  if (!pages.every((entry) => typeof entry === 'string')) return false;

  if (pages.every((entry) => isExemptPageValue(entry, { ...options, exclusions }))) {
    return true;
  }

  return pages.every((entry) => isExemptRoute(entry, { ...options, exclusions }));
}

function isExemptNavigationEntry(value, node, options = {}) {
  const exclusions = options.exclusions || loadNavigationExclusions(options.repoRoot || process.cwd());
  if (!shouldApplyNavigationExclusions(options.validatorName, exclusions)) return false;
  if (isExemptNavigationNode(node, { ...options, exclusions })) return true;
  if (typeof value !== 'string') return false;
  return (
    isExemptPageValue(value, { ...options, exclusions }) ||
    isExemptRoute(value, { ...options, exclusions })
  );
}

function collectNavigationPageEntries(node, options = {}, out = []) {
  const pointer = options.pointer || 'navigation';

  if (Array.isArray(node)) {
    node.forEach((item, index) => collectNavigationPageEntries(item, { ...options, pointer: `${pointer}[${index}]` }, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((entry, index) => {
      const entryPointer = `${pointer}.pages[${index}]`;
      if (typeof entry === 'string') {
        out.push({ value: entry, pointer: entryPointer, node });
        return;
      }
      collectNavigationPageEntries(entry, { ...options, pointer: entryPointer }, out);
    });
  }

  Object.entries(node).forEach(([key, value]) => {
    if (key === 'pages') return;
    collectNavigationPageEntries(value, { ...options, pointer: `${pointer}.${key}` }, out);
  });

  return out;
}

function collectDocsJsonRouteKeysFromObject(docsJson, options = {}) {
  const {
    version = '',
    language = '',
    repoRoot = process.cwd(),
    validatorName = ''
  } = options;
  const exclusions = options.exclusions || loadNavigationExclusions(repoRoot);
  const entries = [];
  const versions = Array.isArray(docsJson?.navigation?.versions) ? docsJson.navigation.versions : [];

  if (versions.length === 0) {
    collectNavigationPageEntries(docsJson?.navigation || docsJson, { pointer: 'navigation' }, entries);
  } else {
    versions.forEach((versionNode, versionIndex) => {
      const versionValue = String(versionNode?.version || '').trim();
      if (version && versionValue !== version) return;

      if (Array.isArray(versionNode?.languages)) {
        versionNode.languages.forEach((languageNode, languageIndex) => {
          const languageValue = String(languageNode?.language || '').trim();
          if (language && languageValue !== language) return;
          collectNavigationPageEntries(
            languageNode,
            { pointer: `navigation.versions[${versionIndex}].languages[${languageIndex}]` },
            entries
          );
        });
        return;
      }

      if (versionNode?.languages && typeof versionNode.languages === 'object') {
        Object.entries(versionNode.languages).forEach(([languageKey, languageNode]) => {
          const languageValue = String(languageNode?.language || languageKey || '').trim();
          if (language && languageValue !== language && languageKey !== language) return;
          collectNavigationPageEntries(
            languageNode,
            { pointer: `navigation.versions[${versionIndex}].languages.${languageKey}` },
            entries
          );
        });
        return;
      }

      collectNavigationPageEntries(versionNode, { pointer: `navigation.versions[${versionIndex}]` }, entries);
    });
  }

  const routeKeys = new Set();
  entries.forEach(({ value, node }) => {
    const normalized = normalizeDocsRouteKey(value);
    if (!normalized) return;
    if (!(normalized.startsWith('v1/') || normalized.startsWith('v2/'))) return;
    if (isExemptNavigationEntry(value, node, { repoRoot, validatorName, exclusions })) return;
    routeKeys.add(normalized);
  });

  return routeKeys;
}

function collectDocsJsonRouteKeys(repoRoot, options = {}) {
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  if (!fs.existsSync(docsJsonPath)) {
    return new Set();
  }

  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  return collectDocsJsonRouteKeysFromObject(docsJson, { ...options, repoRoot });
}

module.exports = {
  clearNavigationExclusionsCache,
  collectDocsJsonRouteKeys,
  collectDocsJsonRouteKeysFromObject,
  collectNavigationPageEntries,
  getNavigationExclusionsPath,
  isExemptAnchorValue,
  isExemptNavigationEntry,
  isExemptNavigationNode,
  isExemptPageValue,
  isExemptRoute,
  loadNavigationExclusions,
  normalizeDocsRouteKey,
  shouldApplyNavigationExclusions
};
