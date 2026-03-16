'use strict';
/**
 * @script            frontmatter-taxonomy
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared frontmatter taxonomy utilities for routable docs pages.
 * @pipeline          indirect -- library module
 * @usage             const taxonomy = require('../lib/frontmatter-taxonomy');
 */

const CANONICAL_PAGE_TYPES = Object.freeze([
  'landing',
  'overview',
  'tutorial',
  'quickstart',
  'how_to',
  'concept',
  'reference',
  'faq',
  'troubleshooting',
  'changelog',
  'glossary',
  'guide'
]);

const CANONICAL_PURPOSES = Object.freeze([
  'landing',
  'overview',
  'orientation',
  'concept',
  'evaluation',
  'tutorial',
  'setup',
  'how_to',
  'operations',
  'decision',
  'reference',
  'faq',
  'glossary',
  'changelog',
  'troubleshooting'
]);

const CANONICAL_PAGE_STATUSES = Object.freeze([
  'draft',
  'review',
  'current',
  'published',
  'deprecated',
  'coming-soon',
  'production',
  'provisional',
  'verified_2026'
]);

const LAST_VERIFIED_REQUIRED_STATUSES = Object.freeze([
  'current',
  'published',
  'production',
  'verified_2026'
]);

const DEPRECATED_PAGE_TYPE_ALIASES = Object.freeze({
  portal: 'landing',
  api: 'reference',
  index: 'overview',
  conceptual: 'concept'
});

const DEPRECATED_PURPOSE_ALIASES = Object.freeze({
  guide: 'operations',
  guides: 'operations',
  operational: 'operations',
  concepts: 'concept',
  verification: 'operations',
  task: 'operations',
  navigation: 'landing',
  configuration: 'reference',
  'concept-and-operational': 'concept'
});

const PAGE_TYPE_TO_PURPOSE = Object.freeze({
  landing: 'landing',
  overview: 'overview',
  tutorial: 'tutorial',
  quickstart: 'tutorial',
  how_to: 'how_to',
  concept: 'concept',
  reference: 'reference',
  faq: 'faq',
  troubleshooting: 'troubleshooting',
  changelog: 'changelog',
  glossary: 'glossary',
  guide: 'operations'
});

const PAGE_TYPE_ALLOWED_PURPOSES = Object.freeze({
  landing: Object.freeze(['landing', 'overview', 'orientation']),
  overview: Object.freeze(['overview', 'orientation', 'concept', 'evaluation', 'landing']),
  tutorial: Object.freeze(['tutorial', 'setup']),
  quickstart: Object.freeze(['tutorial', 'setup']),
  how_to: Object.freeze(['how_to', 'setup', 'operations', 'decision', 'tutorial', 'reference']),
  concept: Object.freeze(['concept', 'overview', 'orientation', 'evaluation', 'decision']),
  reference: Object.freeze(['reference']),
  faq: Object.freeze(['faq']),
  troubleshooting: Object.freeze(['troubleshooting', 'operations']),
  changelog: Object.freeze(['changelog']),
  glossary: Object.freeze(['glossary']),
  guide: Object.freeze([
    'overview',
    'orientation',
    'evaluation',
    'tutorial',
    'setup',
    'how_to',
    'operations',
    'decision',
    'reference',
    'troubleshooting'
  ])
});

function normalizeRawToken(value) {
  return String(value == null ? '' : value).trim();
}

function normalizeLookupToken(value) {
  return normalizeRawToken(value).toLowerCase();
}

function normalizePageType(value) {
  const raw = normalizeRawToken(value);
  const lookup = normalizeLookupToken(value);
  if (!raw) {
    return {
      raw,
      lookup,
      canonical: '',
      valid: false,
      deprecatedAlias: false
    };
  }

  if (CANONICAL_PAGE_TYPES.includes(lookup)) {
    return {
      raw,
      lookup,
      canonical: lookup,
      valid: true,
      deprecatedAlias: false
    };
  }

  const canonical = DEPRECATED_PAGE_TYPE_ALIASES[lookup] || '';
  if (canonical) {
    return {
      raw,
      lookup,
      canonical,
      valid: true,
      deprecatedAlias: true
    };
  }

  return {
    raw,
    lookup,
    canonical: '',
    valid: false,
    deprecatedAlias: false
  };
}

function normalizePurpose(value) {
  const raw = normalizeRawToken(value);
  const lookup = normalizeLookupToken(value);
  if (!raw) {
    return {
      raw,
      lookup,
      canonical: '',
      valid: false,
      deprecatedAlias: false
    };
  }

  if (CANONICAL_PURPOSES.includes(lookup)) {
    return {
      raw,
      lookup,
      canonical: lookup,
      valid: true,
      deprecatedAlias: false
    };
  }

  const canonical = DEPRECATED_PURPOSE_ALIASES[lookup] || '';
  if (canonical) {
    return {
      raw,
      lookup,
      canonical,
      valid: true,
      deprecatedAlias: true
    };
  }

  return {
    raw,
    lookup,
    canonical: '',
    valid: false,
    deprecatedAlias: false
  };
}

function normalizeStatus(value) {
  const raw = normalizeRawToken(value);
  const lookup = normalizeLookupToken(value);

  return {
    raw,
    lookup,
    canonical: CANONICAL_PAGE_STATUSES.includes(lookup) ? lookup : '',
    valid: CANONICAL_PAGE_STATUSES.includes(lookup)
  };
}

function isValidPageType(value, options = {}) {
  const { allowDeprecatedAliases = true } = options;
  const result = normalizePageType(value);
  if (!result.valid) return false;
  return allowDeprecatedAliases || !result.deprecatedAlias;
}

function isValidPurpose(value, options = {}) {
  const { allowDeprecatedAliases = true } = options;
  const result = normalizePurpose(value);
  if (!result.valid) return false;
  return allowDeprecatedAliases || !result.deprecatedAlias;
}

function isValidStatus(value) {
  return normalizeStatus(value).valid;
}

function getPageTypeAdvisory(value) {
  const result = normalizePageType(value);
  if (!result.valid || !result.deprecatedAlias) return '';
  return `Deprecated pageType alias "${result.raw}". Use "${result.canonical}".`;
}

function getPurposeAdvisory(value) {
  const result = normalizePurpose(value);
  if (!result.valid || !result.deprecatedAlias) return '';
  return `Deprecated purpose alias "${result.raw}". Use "${result.canonical}".`;
}

function pageTypeToPurpose(value) {
  const result = normalizePageType(value);
  if (!result.valid) return '';
  return PAGE_TYPE_TO_PURPOSE[result.canonical] || '';
}

function purposeToRubricPurpose(purpose, pageType = '') {
  const purposeResult = normalizePurpose(purpose);
  if (!purposeResult.valid) return '';

  const pageTypeResult = normalizePageType(pageType);
  const pageTypeCanonical = pageTypeResult.valid ? pageTypeResult.canonical : '';

  switch (purposeResult.canonical) {
    case 'orientation':
      return 'overview';
    case 'evaluation':
      return 'concept';
    case 'setup':
      return pageTypeCanonical === 'tutorial' || pageTypeCanonical === 'quickstart' ? 'tutorial' : 'how_to';
    case 'operations':
      return pageTypeCanonical === 'troubleshooting' ? 'troubleshooting' : 'how_to';
    case 'decision':
      return 'concept';
    default:
      return purposeResult.canonical;
  }
}

function isAllowedPageTypePurpose(pageType, purpose, options = {}) {
  const { allowDeprecatedAliases = true, allowBlankPurpose = true } = options;
  const rawPurpose = normalizeRawToken(purpose);
  if (!rawPurpose) {
    return allowBlankPurpose;
  }

  const pageTypeResult = normalizePageType(pageType);
  const purposeResult = normalizePurpose(purpose);
  if (!pageTypeResult.valid || !purposeResult.valid) {
    return false;
  }
  if (!allowDeprecatedAliases && (pageTypeResult.deprecatedAlias || purposeResult.deprecatedAlias)) {
    return false;
  }

  const allowed = PAGE_TYPE_ALLOWED_PURPOSES[pageTypeResult.canonical] || [];
  return allowed.includes(purposeResult.canonical);
}

function statusRequiresLastVerified(value) {
  const result = normalizeStatus(value);
  if (!result.valid) return false;
  return LAST_VERIFIED_REQUIRED_STATUSES.includes(result.canonical);
}

function describeCanonicalPageTypes() {
  return CANONICAL_PAGE_TYPES.join(', ');
}

function describeCanonicalPurposes() {
  return CANONICAL_PURPOSES.join(', ');
}

function describeAllowedPurposesForPageType(value) {
  const result = normalizePageType(value);
  if (!result.valid) return '';
  return (PAGE_TYPE_ALLOWED_PURPOSES[result.canonical] || []).join(', ');
}

function describeCanonicalPageStatuses() {
  return CANONICAL_PAGE_STATUSES.join(', ');
}

function describeLastVerifiedRequiredStatuses() {
  return LAST_VERIFIED_REQUIRED_STATUSES.join(', ');
}

module.exports = {
  CANONICAL_PAGE_TYPES,
  CANONICAL_PURPOSES,
  CANONICAL_PAGE_STATUSES,
  LAST_VERIFIED_REQUIRED_STATUSES,
  DEPRECATED_PAGE_TYPE_ALIASES,
  DEPRECATED_PURPOSE_ALIASES,
  PAGE_TYPE_TO_PURPOSE,
  PAGE_TYPE_ALLOWED_PURPOSES,
  normalizePageType,
  normalizePurpose,
  normalizeStatus,
  isValidPageType,
  isValidPurpose,
  isValidStatus,
  getPageTypeAdvisory,
  getPurposeAdvisory,
  pageTypeToPurpose,
  purposeToRubricPurpose,
  isAllowedPageTypePurpose,
  statusRequiresLastVerified,
  describeCanonicalPageTypes,
  describeCanonicalPurposes,
  describeAllowedPurposesForPageType,
  describeCanonicalPageStatuses,
  describeLastVerifiedRequiredStatuses
};
