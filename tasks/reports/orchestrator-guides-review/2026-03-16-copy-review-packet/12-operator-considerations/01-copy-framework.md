# Operator Considerations — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 45
- Warning findings: 155
- copy-lint summary: 45 errors, 155 warnings

## Scope

- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`
- `v2/orchestrators/guides/operator-considerations/requirements.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 14
- ACCORDION_ONLY_URL: 1
- HEDGE_NOTE: 1

### Copy-rules
- Banned word / phrase hits: 31
- Weakened / contrast constructions: 149
- NOT_CONSTRUCTION: 63
- WEAKENED_VALUE: 42
- CONDITIONAL_IF: 28
- BANNED_WORD: 20
- REVIEW_FLAG_RENDERED: 14
- BANNED_PHRASE: 11
- CONSISTENTLY_NO_NUMBER: 7
- NOT_JUST: 5
- CURRENCY_NON_USD: 2
- RATHER_THAN: 2

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: WEAKENED_VALUE (20) -> PRODUCT_CLARITY; NOT_CONSTRUCTION (28) -> PRODUCT_CLARITY; NOT_JUST (5) -> PRODUCT_CLARITY; CONDITIONAL_IF (13) -> ARCHITECTURE; CONSISTENTLY_NO_NUMBER (4) -> COPY
- Top recurring framework findings: NOT_CONSTRUCTION (63), WEAKENED_VALUE (42), CONDITIONAL_IF (28), BANNED_WORD (20), REVIEW_FLAG_RENDERED (14).

## Page-by-Page Findings

### `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- Priority: **high**
- Copy findings: 39
- Structure findings: 5
- Pattern findings: 23
- [L48] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L62] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L63] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L96] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L111] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L124] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L125] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L127] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Replace vague standards or dangling claims with explicit thresholds, examples, or linked proof.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- Priority: **high**
- Copy findings: 34
- Structure findings: 5
- Pattern findings: 23
- [L42] BANNED_PHRASE: "not just" — see banned phrases list
- [L42] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L48] BANNED_PHRASE: "rather than" — see banned phrases list
- [L54] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L54] NOT_JUST: "not just" — contrast-by-diminishment
- [L58] BANNED_WORD: "real" — delete or restate directly
- [L58] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L60] RATHER_THAN: "rather than" — contrast-by-diminishment
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Replace vague standards or dangling claims with explicit thresholds, examples, or linked proof.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`
- Priority: **high**
- Copy findings: 22
- Structure findings: 2
- Pattern findings: 13
- [L42] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L42] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L47] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L54] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L54] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L57] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L59] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L65] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Replace vague standards or dangling claims with explicit thresholds, examples, or linked proof.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/operator-considerations/requirements.mdx`
- Priority: **high**
- Copy findings: 29
- Structure findings: 4
- Pattern findings: 17
- [L42] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — weakened assertion
- [L45] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- [L52] BANNED_PHRASE: "not just" — see banned phrases list
- [L52] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L53] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L58] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L58] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L62] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- HIGH: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- HIGH: `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`
- HIGH: `v2/orchestrators/guides/operator-considerations/requirements.mdx`

