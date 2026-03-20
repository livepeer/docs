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

// Phase 1 canonical values — source of truth: tasks/plan/active/CONTENT-WRITING/framework.md
// Decision 1 (2026-03-19): 12 types → 7
const CANONICAL_PAGE_TYPES = Object.freeze([
  'navigation',
  'concept',
  'tutorial',
  'guide',
  'instruction',
  'reference',
  'resource'
]);

// Decision 2 (2026-03-20): 15 intent-based purpose values
const CANONICAL_PURPOSES = Object.freeze([
  'orient',
  'explain',
  'choose',
  'start',
  'build',
  'configure',
  'operate',
  'troubleshoot',
  'optimise',
  'integrate',
  'verify',
  'evaluate',
  'reference',
  'learn',
  'update'
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

// Old primary types → new canonical types.
// 'overview' is intentionally NOT aliased — pages must be explicitly migrated
// to the correct new type (concept/guide/navigation/etc.) during page migration tasks.
const DEPRECATED_PAGE_TYPE_ALIASES = Object.freeze({
  // Old primary types demoted or renamed (Decision 1, 2026-03-19)
  landing:         'navigation',   // renamed to navigation
  quickstart:      'instruction',  // demoted to instruction variant
  how_to:          'instruction',  // renamed to instruction
  faq:             'reference',    // demoted to reference/compendium
  troubleshooting: 'reference',    // demoted to reference/compendium
  changelog:       'reference',    // demoted to reference variant
  glossary:        'reference',    // demoted to reference/compendium
  // Informal aliases (pre-existing, updated to new targets)
  portal:          'navigation',   // was portal→landing; landing→navigation
  api:             'reference',    // unchanged
  index:           'navigation',   // was index→overview; routing pages → navigation
  conceptual:      'concept'       // unchanged
});

// Old canonical purposes + informal aliases → new canonical purposes (Decision 2, 2026-03-20)
const DEPRECATED_PURPOSE_ALIASES_FINAL = Object.freeze({
  // Old canonical purposes (now deprecated)
  landing:         'orient',
  overview:        'orient',
  orientation:     'orient',
  concept:         'explain',
  evaluation:      'choose',
  tutorial:        'learn',
  setup:           'configure',
  how_to:          'build',
  operations:      'operate',
  decision:        'choose',
  // 'reference' stays canonical — no alias needed
  faq:             'reference',
  glossary:        'reference',
  changelog:       'update',
  troubleshooting: 'troubleshoot',
  // Informal aliases (pre-existing, updated to new targets)
  guide:           'operate',       // was guide→operations; operations→operate
  guides:          'operate',
  operational:     'operate',
  concepts:        'explain',       // was concepts→concept; concept→explain
  verification:    'verify',        // was verification→operations; now more accurate
  task:            'build',         // was task→operations; now more accurate
  navigation:      'orient',        // was navigation→landing; landing→orient
  configuration:   'configure',     // was configuration→reference; now more accurate
  'concept-and-operational': 'explain'
});

const PAGE_TYPE_TO_PURPOSE = Object.freeze({
  navigation:  'orient',
  concept:     'explain',
  tutorial:    'learn',
  guide:       'operate',
  instruction: 'build',
  reference:   'reference',
  resource:    'orient'
});

const PAGE_TYPE_ALLOWED_PURPOSES = Object.freeze({
  navigation:  Object.freeze(['orient']),
  concept:     Object.freeze(['explain', 'orient', 'choose', 'evaluate']),
  tutorial:    Object.freeze(['learn', 'build', 'configure', 'start']),
  guide:       Object.freeze(['operate', 'build', 'configure', 'integrate',
                               'troubleshoot', 'optimise', 'orient', 'explain']),
  instruction: Object.freeze(['build', 'configure', 'start', 'integrate', 'verify']),
  reference:   Object.freeze(['reference', 'learn']),
  resource:    Object.freeze(['orient', 'evaluate', 'choose'])
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

  const canonical = DEPRECATED_PURPOSE_ALIASES_FINAL[lookup] || '';
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

// Maps canonical purpose values to rubric scoring labels.
// Rubric labels (overview, concept, tutorial, how_to, troubleshooting, reference,
// changelog) are internal to the scoring system and intentionally kept stable.
// Deprecated purpose aliases resolve to new canonicals before reaching this function.
function purposeToRubricPurpose(purpose, pageType = '') {
  const purposeResult = normalizePurpose(purpose);
  if (!purposeResult.valid) return '';

  const pageTypeResult = normalizePageType(pageType);
  const pageTypeCanonical = pageTypeResult.valid ? pageTypeResult.canonical : '';

  switch (purposeResult.canonical) {
    case 'orient':      return 'overview';
    case 'explain':     return 'concept';
    case 'choose':      return 'concept';
    case 'evaluate':    return 'concept';
    case 'learn':       return 'tutorial';
    case 'start':       return 'tutorial';
    case 'build':       return 'how_to';
    case 'configure':
      return pageTypeCanonical === 'tutorial' ? 'tutorial' : 'how_to';
    case 'operate':
      return pageTypeCanonical === 'reference' ? 'reference' : 'how_to';
    case 'troubleshoot': return 'troubleshooting';
    case 'optimise':    return 'how_to';
    case 'integrate':   return 'how_to';
    case 'verify':
      return pageTypeCanonical === 'tutorial' ? 'tutorial' : 'how_to';
    case 'reference':   return 'reference';
    case 'update':      return 'changelog';
    default:            return purposeResult.canonical;
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
  DEPRECATED_PURPOSE_ALIASES: DEPRECATED_PURPOSE_ALIASES_FINAL,
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
