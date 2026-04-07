# Advanced Operations — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 11
- Warning findings: 108
- copy-lint summary: 8 errors, 106 warnings

## Scope

- `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`
- `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx`
- `v2/orchestrators/guides/advanced-operations/pool-operators.mdx`
- `v2/orchestrators/guides/advanced-operations/scale-operations.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 3

### Copy-rules
- Banned word / phrase hits: 5
- Weakened / contrast constructions: 102
- CONDITIONAL_IF: 38
- NOT_CONSTRUCTION: 32
- WEAKENED_VALUE: 30
- CONSISTENTLY_NO_NUMBER: 6
- REVIEW_FLAG_RENDERED: 6
- BANNED_WORD: 3
- BANNED_PHRASE: 2
- THIS_PAGE_VERB: 1

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: CONDITIONAL_IF (21) -> ARCHITECTURE; WEAKENED_VALUE (18) -> PRODUCT_CLARITY; NOT_CONSTRUCTION (18) -> PRODUCT_CLARITY
- Top recurring framework findings: CONDITIONAL_IF (38), NOT_CONSTRUCTION (32), WEAKENED_VALUE (30), CONSISTENTLY_NO_NUMBER (6), REVIEW_FLAG_RENDERED (6).

## Page-by-Page Findings

### `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`
- Priority: **high**
- Copy findings: 22
- Structure findings: 1
- Pattern findings: 20
- [L37] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L120] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L131] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L143] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L150] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L162] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L37] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L116] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx`
- Priority: **high**
- Copy findings: 9
- Structure findings: 2
- Pattern findings: 4
- [L56] BANNED_PHRASE: "rather than" — see banned phrases list
- [L70] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L134] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L120] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L141] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L72] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L172] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L126] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/advanced-operations/pool-operators.mdx`
- Priority: **high**
- Copy findings: 22
- Structure findings: 0
- Pattern findings: 16
- [L83] BANNED_WORD: "significant" — delete or restate directly
- [L193] BANNED_WORD: "clearly" — delete or restate directly
- [L38] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L83] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L116] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L164] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L176] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L185] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.

### `v2/orchestrators/guides/advanced-operations/scale-operations.mdx`
- Priority: **high**
- Copy findings: 12
- Structure findings: 0
- Pattern findings: 11
- [L87] BANNED_PHRASE: "rather than" — see banned phrases list
- [L50] BANNED_WORD: "clearly" — delete or restate directly
- [L43] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L50] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L181] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L50] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L78] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L168] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`
- HIGH: `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx`
- HIGH: `v2/orchestrators/guides/advanced-operations/pool-operators.mdx`
- HIGH: `v2/orchestrators/guides/advanced-operations/scale-operations.mdx`

