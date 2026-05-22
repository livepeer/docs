# Plan: `frontmatter-taxonomy.js` Update — Phase 1 Canonical Values

**Status**: Ready to implement
**Date**: 2026-03-21
**Source of truth**: `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`
**File to update**: `tools/lib/frontmatter-taxonomy.js`
**Test file to update**: `operations/tests/unit/frontmatter-taxonomy.test.js`
**Related callers**: `add-pagetype-mechanical.js`, `rubric-loader.js`

---

## Problem

`frontmatter-taxonomy.js` still enforces the **old 12-type `pageType` schema** and **old 15 purpose names** from before Phase 1. Any page using the new canonical values (`navigation`, `instruction`, `resource`, `orient`, `build`, `configure`, etc.) will fail validation until this is updated.

---

## Scope

What changes in this task:

| Section | What changes |
|---|---|
| `CANONICAL_PAGE_TYPES` | 12 → 7 new values |
| `CANONICAL_PURPOSES` | 15 old names → 15 new intent-based names |
| `DEPRECATED_PAGE_TYPE_ALIASES` | Old 12 types alias to new 7; existing informal aliases updated |
| `DEPRECATED_PURPOSE_ALIASES` | Old 15 purposes alias to new 15; existing informal aliases updated |
| `PAGE_TYPE_TO_PURPOSE` | Rewrite for new type→purpose mapping |
| `PAGE_TYPE_ALLOWED_PURPOSES` | Rewrite for new types and purposes |
| `purposeToRubricPurpose()` | New cases for new canonical purpose values |
| `operations/tests/unit/frontmatter-taxonomy.test.js` | Full update for new values + deprecated alias coverage |

**Not in scope** (separate tasks):
- `add-pagetype-mechanical.js` remediation script update (follow-on)
- `rubric-loader.js` `AUDIENCE_ENUM` update (it's hardcoded, not imported)
- `docs-guide/frameworks/page-taxonomy-framework.mdx` content update
- Migration of existing pages from old → new values (bulk remediation pass)

---

## Backward Compatibility Strategy

**Deprecated aliases remain valid by default** (`allowDeprecatedAliases: true`). Existing pages using old values will:
- Still pass validation
- Receive advisory warnings (no hard failure)

Scripts enforcing Phase 1 strictness can pass `allowDeprecatedAliases: false`.

Deprecated aliases will be removed in a future task once all pages are migrated.

---

## Change 1: `CANONICAL_PAGE_TYPES` — Replace 12 with 7

**Remove**:
```
landing, overview, quickstart, how_to, faq, troubleshooting, changelog, glossary
```

**Keep**:
```
concept, tutorial, guide, reference
```

**Add**:
```
navigation, instruction, resource
```

**New array**:
```js
const CANONICAL_PAGE_TYPES = Object.freeze([
  'navigation',
  'concept',
  'tutorial',
  'guide',
  'instruction',
  'reference',
  'resource'
]);
```

---

## Change 2: `CANONICAL_PURPOSES` — Replace 15 old with 15 new

**Remove all**:
```
landing, overview, orientation, concept, evaluation, tutorial, setup, how_to,
operations, decision, reference, faq, glossary, changelog, troubleshooting
```

**New array** (Decision 2, framework.md):
```js
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
```

---

## Change 3: `DEPRECATED_PAGE_TYPE_ALIASES` — Rewrite

Maps all old/informal type names to new canonical types. Old types that have been demoted become aliases:

```js
const DEPRECATED_PAGE_TYPE_ALIASES = Object.freeze({
  // Old primary types → new canonical types
  landing:         'navigation',   // renamed to navigation
  // overview: NOT aliased — pages must be explicitly migrated to correct new type
  quickstart:      'instruction',  // demoted to instruction variant
  how_to:          'instruction',  // renamed to instruction
  faq:             'reference',    // demoted to reference/compendium
  troubleshooting: 'reference',    // demoted to reference/compendium
  changelog:       'reference',    // demoted to reference variant
  glossary:        'reference',    // demoted to reference/compendium
  // Informal aliases (existed before, updated targets)
  portal:          'navigation',   // was portal→landing; landing→navigation
  api:             'reference',    // unchanged
  index:           'navigation',   // was index→overview; routing pages → navigation
  conceptual:      'concept'       // unchanged
});
```

> **Decision (2026-03-21)**: `overview` is intentionally NOT a deprecated alias. It is immediately invalid. Existing `pageType: overview` pages must be explicitly updated to the correct new type during the page migration tasks — the correct type varies per page (could be `concept`, `guide`, `navigation`, etc.) and cannot be inferred automatically.

---

## Change 4: `DEPRECATED_PURPOSE_ALIASES` — Rewrite

Maps all old canonical purpose names + existing informal aliases to new canonical purposes:

```js
const DEPRECATED_PURPOSE_ALIASES = Object.freeze({
  // Old canonical purposes (now deprecated) → new canonical purposes
  landing:        'orient',
  overview:       'orient',
  orientation:    'orient',
  concept:        'explain',
  evaluation:     'choose',
  tutorial:       'learn',
  setup:          'configure',
  how_to:         'build',
  operations:     'operate',
  decision:       'choose',
  // 'reference' stays canonical — no alias needed
  faq:            'reference',
  glossary:       'reference',
  changelog:      'update',
  troubleshooting: 'troubleshoot',
  // Informal aliases (existed before, updated targets)
  guide:          'operate',      // was guide→operations; operations→operate
  guides:         'operate',
  operational:    'operate',
  concepts:       'explain',      // was concepts→concept; concept→explain
  verification:   'verify',       // was verification→operations; more accurate now
  task:           'build',        // was task→operations; more accurate now
  navigation:     'orient',       // was navigation→landing; landing→orient
  configuration:  'configure',    // was configuration→reference; more accurate now
  'concept-and-operational': 'explain'
});
```

---

## Change 5: `PAGE_TYPE_TO_PURPOSE` — Rewrite

Default purpose for each new type:

```js
const PAGE_TYPE_TO_PURPOSE = Object.freeze({
  navigation:  'orient',
  concept:     'explain',
  tutorial:    'learn',
  guide:       'operate',
  instruction: 'build',
  reference:   'reference',
  resource:    'orient'
});
```

---

## Change 6: `PAGE_TYPE_ALLOWED_PURPOSES` — Rewrite

Allowed purpose values per new type:

```js
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
```

---

## Change 7: `purposeToRubricPurpose()` — Add new canonical value cases

This function maps purpose canonical values to rubric scoring labels (`overview`, `concept`, `tutorial`, `how_to`, `troubleshooting`). The rubric labels are internal to the scoring system and stay as-is. New canonical purpose values need cases added:

```js
function purposeToRubricPurpose(purpose, pageType = '') {
  const purposeResult = normalizePurpose(purpose);
  if (!purposeResult.valid) return '';

  const pageTypeResult = normalizePageType(pageType);
  const pageTypeCanonical = pageTypeResult.valid ? pageTypeResult.canonical : '';

  switch (purposeResult.canonical) {
    // New canonical values
    case 'orient':      return 'overview';
    case 'explain':     return 'concept';
    case 'choose':      return 'concept';
    case 'evaluate':    return 'concept';
    case 'learn':       return 'tutorial';
    case 'start':       return 'tutorial';
    case 'build':       return 'how_to';
    case 'configure':   return pageTypeCanonical === 'tutorial' ? 'tutorial' : 'how_to';
    case 'operate':     return pageTypeCanonical === 'reference' ? 'reference' : 'how_to';
    case 'troubleshoot': return 'troubleshooting';
    case 'optimise':    return 'how_to';
    case 'integrate':   return 'how_to';
    case 'verify':      return pageTypeCanonical === 'tutorial' ? 'tutorial' : 'how_to';
    case 'reference':   return 'reference';
    case 'update':      return 'changelog';
    default:            return purposeResult.canonical;
  }
}
```

Note: The old switch cases (`orientation`, `evaluation`, `setup`, `operations`, `decision`) should be removed — those values are now deprecated aliases that resolve to the new canonicals above before hitting this function. The logic path is: deprecated alias → normalized to new canonical → matched in new switch.

---

## Change 8: `operations/tests/unit/frontmatter-taxonomy.test.js` — Full Update

The test file is tightly coupled to old values. Full replacement needed. Key test cases to cover:

### Test: new canonical acceptance
```js
isValidPageType('navigation')   → true
isValidPageType('instruction')  → true
isValidPageType('resource')     → true
isValidPurpose('orient')        → true
isValidPurpose('build')         → true
isValidPurpose('configure')     → true
isValidPurpose('troubleshoot')  → true
isValidPurpose('reference')     → true
```

### Test: old types as deprecated aliases
```js
normalizePageType('landing')        → { canonical: 'navigation', valid: true, deprecatedAlias: true }
normalizePageType('how_to')         → { canonical: 'instruction', valid: true, deprecatedAlias: true }
normalizePageType('quickstart')     → { canonical: 'instruction', valid: true, deprecatedAlias: true }
normalizePageType('faq')            → { canonical: 'reference',   valid: true, deprecatedAlias: true }
normalizePageType('troubleshooting')→ { canonical: 'reference',   valid: true, deprecatedAlias: true }
normalizePageType('changelog')      → { canonical: 'reference',   valid: true, deprecatedAlias: true }
normalizePageType('portal')         → { canonical: 'navigation',  valid: true, deprecatedAlias: true }
getPageTypeAdvisory('landing')      → matches /Deprecated pageType alias "landing"/
```

### Test: old purposes as deprecated aliases
```js
normalizePurpose('orientation') → { canonical: 'orient',    valid: true, deprecatedAlias: true }
normalizePurpose('evaluation')  → { canonical: 'choose',    valid: true, deprecatedAlias: true }
normalizePurpose('operations')  → { canonical: 'operate',   valid: true, deprecatedAlias: true }
normalizePurpose('setup')       → { canonical: 'configure', valid: true, deprecatedAlias: true }
normalizePurpose('how_to')      → { canonical: 'build',     valid: true, deprecatedAlias: true }
normalizePurpose('concept')     → { canonical: 'explain',   valid: true, deprecatedAlias: true }
normalizePurpose('guide')       → { canonical: 'operate',   valid: true, deprecatedAlias: true }
getPurposeAdvisory('orientation')→ matches /Deprecated purpose alias "orientation"/
```

### Test: invalid rejection
```js
isValidPageType('not-real')   → false
isValidPageType('overview')   → false   // no alias — must be explicitly migrated
isValidPurpose('not-real')    → false
isValidPageType('concept')    → true   (kept as canonical)
isValidPageType('tutorial')   → true   (kept as canonical)
isValidPageType('guide')      → true   (kept as canonical)
isValidPageType('reference')  → true   (kept as canonical)
```

### Test: pageTypeToPurpose
```js
pageTypeToPurpose('navigation')  → 'orient'
pageTypeToPurpose('instruction') → 'build'
pageTypeToPurpose('concept')     → 'explain'
pageTypeToPurpose('guide')       → 'operate'
pageTypeToPurpose('tutorial')    → 'learn'
pageTypeToPurpose('reference')   → 'reference'
pageTypeToPurpose('resource')    → 'orient'
// Via deprecated alias
pageTypeToPurpose('landing')     → 'orient'     // landing→navigation→orient
pageTypeToPurpose('how_to')      → 'build'      // how_to→instruction→build
pageTypeToPurpose('quickstart')  → 'build'      // quickstart→instruction→build
```

### Test: purposeToRubricPurpose
```js
purposeToRubricPurpose('orient', 'navigation')    → 'overview'
purposeToRubricPurpose('explain', 'concept')      → 'concept'
purposeToRubricPurpose('learn', 'tutorial')       → 'tutorial'
purposeToRubricPurpose('configure', 'tutorial')   → 'tutorial'
purposeToRubricPurpose('configure', 'instruction')→ 'how_to'
purposeToRubricPurpose('troubleshoot', 'reference')→ 'troubleshooting'
purposeToRubricPurpose('reference', 'reference')  → 'reference'
purposeToRubricPurpose('update', 'reference')     → 'changelog'
// Via deprecated aliases (resolve to canonical first, then rubric)
purposeToRubricPurpose('orientation', 'guide')    → 'overview'   // deprecated→orient→overview
purposeToRubricPurpose('operations', 'guide')     → 'how_to'     // deprecated→operate→how_to
```

### Test: isAllowedPageTypePurpose
```js
isAllowedPageTypePurpose('guide', 'operate')    → true
isAllowedPageTypePurpose('guide', 'build')      → true
isAllowedPageTypePurpose('instruction', 'build')→ true
isAllowedPageTypePurpose('reference', 'reference')→ true
isAllowedPageTypePurpose('reference', 'build')  → false
isAllowedPageTypePurpose('navigation', 'build') → false
// Via deprecated aliases
isAllowedPageTypePurpose('guide', 'operations') → true   // operations→operate, allowed for guide
isAllowedPageTypePurpose('guide', 'orientation')→ true   // orientation→orient, allowed for guide
```

---

## Caller Impact

### `add-pagetype-mechanical.js` (manual remediation script)
**Impact**: Line 26 has hardcoded old type names in `SUMMARY_TYPES`:
```js
const SUMMARY_TYPES = ['reference', 'landing', 'quickstart', 'glossary', 'overview', 'faq', 'troubleshooting'];
```
These are old type names — needs update to new types after this change. But since the script is `@pipeline: manual` and its own task, **defer to follow-on task**. The script still works after this change because old values remain valid as deprecated aliases in `normalizePageType`. Summary: no functional breakage, but `SUMMARY_TYPES` will trigger deprecated alias advisories.

### `rubric-loader.js`
**Impact**: Uses `taxonomy.CANONICAL_PURPOSES` to validate purpose values (line 62) and `taxonomy.normalizePurpose()` (line 212). After the update, `CANONICAL_PURPOSES` exports the new 15 values. Any page using old purposes like `orientation` or `setup` will still normalize successfully via deprecated aliases. No breakage. The `AUDIENCE_ENUM` on line 64 is hardcoded (not from taxonomy), so it's unaffected.

### `operations/tests/unit/quality.test.js`
**Impact**: Unknown. Need to check if it references specific pageType or purpose values. **Check before implementing** — search for any `how_to`, `landing`, `overview`, etc. enum literals in that test.

---

## Implementation Order

1. Update `tools/lib/frontmatter-taxonomy.js`:
   - `CANONICAL_PAGE_TYPES`
   - `CANONICAL_PURPOSES`
   - `DEPRECATED_PAGE_TYPE_ALIASES`
   - `DEPRECATED_PURPOSE_ALIASES`
   - `PAGE_TYPE_TO_PURPOSE`
   - `PAGE_TYPE_ALLOWED_PURPOSES`
   - `purposeToRubricPurpose()` switch cases

2. Pre-check `operations/tests/unit/quality.test.js` for hardcoded old enum values

3. Rewrite `operations/tests/unit/frontmatter-taxonomy.test.js` with new test cases

4. Run tests: `node operations/tests/unit/frontmatter-taxonomy.test.js` — expect pass
5. Run full suite: `node operations/tests/run-all.js` — expect pass

---

## Open Questions (not blocking implementation)

| # | Question | Default |
|---|---|---|
| ~~Q1~~ | ~~`overview` as deprecated alias → `concept` or `navigation`?~~ | ✅ Resolved 2026-03-21 — `overview` is NOT aliased. Invalid immediately. Explicit migration per page required. |
| Q2 | Should `purposeToRubricPurpose` rubric labels be updated to new vocabulary too, or stay as old names for scoring continuity? | Stay as old rubric labels (no rubric change needed now) |
| Q3 | Add `CANONICAL_AUDIENCES` and `CANONICAL_PAGE_VARIANTS` to this file now, or separate task? | Separate task (not blocking) |
