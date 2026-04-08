# Setup — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 7
- Blocking findings: 12
- Warning findings: 95
- copy-lint summary: 12 errors, 95 warnings

## Scope

- `v2/orchestrators/setup/guide.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`
- `v2/orchestrators/setup/rs-install.mdx`
- `v2/orchestrators/setup/configure.mdx`
- `v2/orchestrators/setup/connect-and-activate.mdx`
- `v2/orchestrators/setup/test.mdx`
- `v2/orchestrators/setup/r-monitor.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 9
- ACCORDION_ONLY_URL: 1

### Copy-rules
- Banned word / phrase hits: 3
- Weakened / contrast constructions: 92
- NOT_CONSTRUCTION: 48
- CONDITIONAL_IF: 29
- WEAKENED_VALUE: 15
- REVIEW_FLAG_RENDERED: 9
- BANNED_WORD: 2
- THIS_PAGE_VERB: 2
- ACCORDION_ONLY_URL: 1
- BANNED_PHRASE: 1

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: CONDITIONAL_IF (7) -> ARCHITECTURE; NOT_CONSTRUCTION (17) -> PRODUCT_CLARITY; WEAKENED_VALUE (5) -> PRODUCT_CLARITY
- Top recurring framework findings: NOT_CONSTRUCTION (48), CONDITIONAL_IF (29), WEAKENED_VALUE (15), REVIEW_FLAG_RENDERED (9), BANNED_WORD (2).

## Page-by-Page Findings

### `v2/orchestrators/setup/guide.mdx`
- Priority: **medium**
- Copy findings: 5
- Structure findings: 0
- Pattern findings: 3
- [L30] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L33] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L33] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L55] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L61] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L109] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.

### `v2/orchestrators/setup/rcs-requirements.mdx`
- Priority: **high**
- Copy findings: 7
- Structure findings: 1
- Pattern findings: 1
- [L85] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L128] BANNED_WORD: "real" — delete or restate directly
- [L128] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L171] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L171] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L279] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L282] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/setup/rs-install.mdx`
- Priority: **high**
- Copy findings: 10
- Structure findings: 1
- Pattern findings: 9
- [L29] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L42] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L42] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L55] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L55] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L73] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L76] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L76] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/setup/configure.mdx`
- Priority: **high**
- Copy findings: 11
- Structure findings: 1
- Pattern findings: 6
- [L31] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L76] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L91] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L116] BANNED_PHRASE: "once X is stable" — see banned phrases list
- [L165] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L168] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L178] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L231] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/setup/connect-and-activate.mdx`
- Priority: **high**
- Copy findings: 22
- Structure findings: 5
- Pattern findings: 5
- [L31] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L35] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L35] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L73] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L84] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L84] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L114] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L135] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/setup/test.mdx`
- Priority: **high**
- Copy findings: 24
- Structure findings: 2
- Pattern findings: 3
- [L47] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L47] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L68] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L74] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L75] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L75] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L85] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L85] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/setup/r-monitor.mdx`
- Priority: **high**
- Copy findings: 6
- Structure findings: 0
- Pattern findings: 4
- [L54] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L73] BANNED_WORD: "real" — delete or restate directly
- [L97] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L112] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L132] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L143] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L146] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L156] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.

## Rewrite Priority

- MEDIUM: `v2/orchestrators/setup/guide.mdx`
- HIGH: `v2/orchestrators/setup/rcs-requirements.mdx`
- HIGH: `v2/orchestrators/setup/rs-install.mdx`
- HIGH: `v2/orchestrators/setup/configure.mdx`
- HIGH: `v2/orchestrators/setup/connect-and-activate.mdx`
- HIGH: `v2/orchestrators/setup/test.mdx`
- HIGH: `v2/orchestrators/setup/r-monitor.mdx`

