# Concepts — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 16
- Warning findings: 67
- copy-lint summary: 16 errors, 67 warnings

## Scope

- `v2/orchestrators/concepts/role.mdx`
- `v2/orchestrators/concepts/capabilities.mdx`
- `v2/orchestrators/concepts/architecture.mdx`
- `v2/orchestrators/concepts/incentive-model.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 7

### Copy-rules
- Banned word / phrase hits: 9
- Weakened / contrast constructions: 66
- WEAKENED_VALUE: 32
- NOT_CONSTRUCTION: 25
- CONDITIONAL_IF: 8
- REVIEW_FLAG_RENDERED: 7
- BANNED_WORD: 5
- BANNED_PHRASE: 4
- DEPENDS_ON: 1
- THIS_PAGE_VERB: 1

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: WEAKENED_VALUE (13) -> PRODUCT_CLARITY; NOT_CONSTRUCTION (11) -> PRODUCT_CLARITY
- Top recurring framework findings: WEAKENED_VALUE (32), NOT_CONSTRUCTION (25), CONDITIONAL_IF (8), REVIEW_FLAG_RENDERED (7), BANNED_WORD (5).

## Page-by-Page Findings

### `v2/orchestrators/concepts/role.mdx`
- Priority: **high**
- Copy findings: 15
- Structure findings: 1
- Pattern findings: 6
- [L45] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L55] BANNED_PHRASE: "rather than" — see banned phrases list
- [L59] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L70] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L105] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L119] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L134] BANNED_WORD: "several" — delete or restate directly
- [L134] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/concepts/capabilities.mdx`
- Priority: **high**
- Copy findings: 17
- Structure findings: 1
- Pattern findings: 11
- [L43] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L43] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L50] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L57] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L57] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L64] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L76] BANNED_WORD: "real" — delete or restate directly
- [L77] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/concepts/architecture.mdx`
- Priority: **high**
- Copy findings: 10
- Structure findings: 2
- Pattern findings: 5
- [L58] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L113] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L115] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L123] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L155] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L156] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L158] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L166] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/concepts/incentive-model.mdx`
- Priority: **high**
- Copy findings: 14
- Structure findings: 3
- Pattern findings: 6
- [L118] BANNED_WORD: "real" — delete or restate directly
- [L125] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L152] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L154] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L155] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L171] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L184] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L186] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/concepts/role.mdx`
- HIGH: `v2/orchestrators/concepts/capabilities.mdx`
- HIGH: `v2/orchestrators/concepts/architecture.mdx`
- HIGH: `v2/orchestrators/concepts/incentive-model.mdx`

