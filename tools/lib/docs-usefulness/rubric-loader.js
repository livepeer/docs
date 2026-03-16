'use strict';
/**
 * @script            rubric-loader
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Loads and parses rubric YAML/JSON for page-type scoring rules.
 * @pipeline          indirect -- library module
 * @usage             const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');
 */
/**
 * @script            rubric-loader
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Loads and parses rubric YAML/JSON for page-type scoring rules.
 * @pipeline          indirect -- library module
 * @usage             const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');
 */
/**
 * @script            rubric-loader
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Loads and parses rubric YAML/JSON for page-type scoring rules.
 * @pipeline          indirect -- library module
 * @usage             const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');
 */
/**
 * @script            rubric-loader
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Loads and parses rubric YAML/JSON for page-type scoring rules.
 * @pipeline          indirect -- library module
 * @usage             const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');
 */
/**
 * @script            rubric-loader
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Loads and parses rubric YAML/JSON for page-type scoring rules.
 * @pipeline          indirect -- library module
 * @usage             const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');
 */

const fs = require('fs');
const path = require('path');
const taxonomy = require('../frontmatter-taxonomy');

const PURPOSE_ENUM = taxonomy.CANONICAL_PURPOSES;

const AUDIENCE_ENUM = [
  'developer',
  'gateway-operator',
  'orchestrator',
  'delegator',
  'platform-builder',
  'community',
  'internal',
  'general',
  'everyone'
];

const SECTION_DEFAULT_AUDIENCE = {
  home: 'everyone',
  about: 'general',
  developers: 'developer',
  gateways: 'gateway-operator',
  orchestrators: 'orchestrator',
  lpt: 'delegator',
  community: 'community',
  solutions: 'platform-builder',
  internal: 'internal',
  resources: 'everyone'
};

const cache = new Map();

function loadJson(filePath) {
  const abs = path.resolve(filePath);
  if (cache.has(abs)) return cache.get(abs);
  const parsed = JSON.parse(fs.readFileSync(abs, 'utf8'));
  cache.set(abs, parsed);
  return parsed;
}

function getFrontmatterValues(page) {
  if (!page) return {};
  if (page.frontmatter && page.frontmatter.data && typeof page.frontmatter.data === 'object') {
    return page.frontmatter.data;
  }
  if (page.frontmatter && typeof page.frontmatter === 'object') {
    return page.frontmatter;
  }
  if (page.frontmatterData && typeof page.frontmatterData === 'object') {
    return page.frontmatterData;
  }
  return {};
}

function configPath(relativePath) {
  return path.join(__dirname, '../../config', relativePath);
}

function loadRubric(filePath = configPath('usefulness-rubric.json')) {
  return loadJson(filePath);
}

function loadJourneys(filePath = configPath('usefulness-journeys.json')) {
  return loadJson(filePath);
}

function loadAudienceNormalization(filePath = configPath('usefulness-audience-normalization.json')) {
  return loadJson(filePath);
}

function loadLlmTiers(filePath = configPath('usefulness-llm-tiers.json')) {
  return loadJson(filePath);
}

function normalizeAudienceToken(token, normalization) {
  const value = String(token || '').trim().toLowerCase();
  if (!value) return null;
  if (AUDIENCE_ENUM.includes(value)) return value;
  if (normalization?.synonyms && normalization.synonyms[value]) {
    return normalization.synonyms[value];
  }
  return null;
}

function audienceTokensFromRaw(raw, normalization) {
  if (!raw && raw !== 0) return [];
  if (Array.isArray(raw)) {
    return raw
      .map((item) => normalizeAudienceToken(item, normalization))
      .filter(Boolean);
  }

  const text = String(raw).trim();
  if (!text) return [];

  const separators = normalization?.token_separators || [',', ';', '|'];
  let tokens = [text];
  separators.forEach((sep) => {
    tokens = tokens.flatMap((token) => token.split(sep));
  });

  return tokens
    .map((token) => normalizeAudienceToken(token, normalization))
    .filter(Boolean);
}

function selectAudience(tokens, page, normalization) {
  if (!tokens.length) return null;
  if (tokens.length === 1) return tokens[0];

  const sectionDefault =
    (normalization?.section_defaults && normalization.section_defaults[page.section]) ||
    SECTION_DEFAULT_AUDIENCE[page.section];
  if (sectionDefault && tokens.includes(sectionDefault)) return sectionDefault;

  const precedence = normalization?.deterministic_precedence || AUDIENCE_ENUM;
  for (const candidate of precedence) {
    if (tokens.includes(candidate)) return candidate;
  }
  return tokens[0] || null;
}

function resolveAudience(page, normalization = loadAudienceNormalization()) {
  const frontmatter = getFrontmatterValues(page);
  const rawAudience = frontmatter.audience;
  const tokens = audienceTokensFromRaw(rawAudience, normalization);
  const selected = selectAudience(tokens, page, normalization);

  if (selected && AUDIENCE_ENUM.includes(selected)) {
    return {
      audience: selected,
      source: 'frontmatter',
      audienceRaw: rawAudience,
      audienceCandidates: tokens
    };
  }

  const fallback =
    (normalization?.section_defaults && normalization.section_defaults[page.section]) ||
    SECTION_DEFAULT_AUDIENCE[page.section] ||
    'everyone';
  return {
    audience: fallback,
    source: 'inferred',
    audienceRaw: rawAudience,
    audienceCandidates: tokens
  };
}

function resolvePurpose(page) {
  const frontmatter = getFrontmatterValues(page);
  const frontmatterPurpose = String(frontmatter.purpose || '').trim();
  if (frontmatterPurpose) {
    const normalized = taxonomy.normalizePurpose(frontmatterPurpose);
    if (normalized.valid) {
      return {
        purpose: normalized.canonical,
        source: 'frontmatter',
        invalid: false,
        deprecatedAlias: normalized.deprecatedAlias
      };
    }
    return { purpose: null, source: 'none', invalid: true, deprecatedAlias: false };
  }

  const base = path.basename(String(page.path || ''), path.extname(String(page.path || '')));
  const route = String(page.path || '').toLowerCase();

  if (/portal|mission-control/i.test(base) || base === 'index') {
    return { purpose: 'landing', source: 'inferred', invalid: false, deprecatedAlias: false };
  }
  if (/quickstart|get-started|primer|^first-/i.test(base)) {
    return { purpose: 'tutorial', source: 'inferred', invalid: false, deprecatedAlias: false };
  }
  if (/^faq/i.test(base)) return { purpose: 'faq', source: 'inferred', invalid: false, deprecatedAlias: false };
  if (/troubleshoot/i.test(base)) {
    return { purpose: 'troubleshooting', source: 'inferred', invalid: false, deprecatedAlias: false };
  }
  if (/glossary/i.test(base)) return { purpose: 'glossary', source: 'inferred', invalid: false, deprecatedAlias: false };
  if (/changelog|release-notes/i.test(base)) {
    return { purpose: 'changelog', source: 'inferred', invalid: false, deprecatedAlias: false };
  }
  if (/api-reference|config-flags/i.test(base)) {
    return { purpose: 'reference', source: 'inferred', invalid: false, deprecatedAlias: false };
  }
  if (/overview/i.test(base)) return { purpose: 'overview', source: 'inferred', invalid: false, deprecatedAlias: false };
  if (/\/references?\//i.test(route)) {
    return { purpose: 'reference', source: 'inferred', invalid: false, deprecatedAlias: false };
  }

  if ((page.components || []).includes('Steps')) {
    return { purpose: 'how_to', source: 'inferred', invalid: false, deprecatedAlias: false };
  }

  if ((page.wordCount || 0) < 150 && (page.components || []).some((component) => ['Card', 'CardGroup', 'GotoCard', 'DisplayCard'].includes(component))) {
    return { purpose: 'landing', source: 'inferred', invalid: false, deprecatedAlias: false };
  }

  const accordionCount = (String(page.content || '').match(/<Accordion(?:Group)?[\s>]/g) || []).length;
  if (accordionCount >= 5) return { purpose: 'faq', source: 'inferred', invalid: false, deprecatedAlias: false };

  if ((page.wordCount || 0) > 300 && (page.headings || []).length >= 3 && !(page.components || []).includes('Steps')) {
    return { purpose: 'concept', source: 'inferred', invalid: false, deprecatedAlias: false };
  }

  return { purpose: null, source: 'none', invalid: false, deprecatedAlias: false };
}

function getRulesForPage(rubric, page, normalization = loadAudienceNormalization()) {
  const purposeResolution = resolvePurpose(page);
  const audienceResolution = resolveAudience(page, normalization);
  const pageType = getFrontmatterValues(page).pageType || '';
  const rubricPurpose = taxonomy.purposeToRubricPurpose(purposeResolution.purpose, pageType);

  if (!rubricPurpose || !rubric[rubricPurpose]) {
    return {
      purpose: purposeResolution.purpose,
      rubricPurpose: rubricPurpose || null,
      purposeSource: purposeResolution.source,
      purposeInvalid: Boolean(purposeResolution.invalid),
      purposeDeprecatedAlias: Boolean(purposeResolution.deprecatedAlias),
      audience: audienceResolution.audience,
      audienceSource: audienceResolution.source,
      audienceRaw: audienceResolution.audienceRaw,
      audienceCandidates: audienceResolution.audienceCandidates,
      tier1: null,
      tier2: null
    };
  }

  return {
    purpose: purposeResolution.purpose,
    rubricPurpose,
    purposeSource: purposeResolution.source,
    purposeInvalid: Boolean(purposeResolution.invalid),
    purposeDeprecatedAlias: Boolean(purposeResolution.deprecatedAlias),
    audience: audienceResolution.audience,
    audienceSource: audienceResolution.source,
    audienceRaw: audienceResolution.audienceRaw,
    audienceCandidates: audienceResolution.audienceCandidates,
    tier1: rubric[rubricPurpose].tier1_rules,
    tier2: rubric[rubricPurpose].tier2_llm
  };
}

module.exports = {
  PURPOSE_ENUM,
  AUDIENCE_ENUM,
  SECTION_DEFAULT_AUDIENCE,
  loadRubric,
  loadJourneys,
  loadAudienceNormalization,
  loadLlmTiers,
  resolvePurpose,
  resolveAudience,
  audienceTokensFromRaw,
  getRulesForPage
};
