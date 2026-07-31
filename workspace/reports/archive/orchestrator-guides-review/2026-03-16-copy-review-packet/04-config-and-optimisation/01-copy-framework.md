# Config & Optimisation — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 51
- Warning findings: 71
- copy-lint summary: 33 errors, 66 warnings

## Scope

- `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`
- `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
- `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
- `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.
- "Depends on" language indicates unresolved persona or decision-branch routing.

### Structure-rules
- REVIEW_FLAG_RENDERED: 18

### Copy-rules
- Banned word / phrase hits: 15
- Weakened / contrast constructions: 67
- REVIEW_FLAG_RENDERED: 36
- NOT_CONSTRUCTION: 27
- WEAKENED_VALUE: 17
- CONDITIONAL_IF: 16
- BANNED_WORD: 10
- BANNED_PHRASE: 5
- RATHER_THAN: 5
- CONSISTENTLY_NO_NUMBER: 4

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: NOT_CONSTRUCTION (14) -> PRODUCT_CLARITY; CONDITIONAL_IF (8) -> ARCHITECTURE; WEAKENED_VALUE (9) -> PRODUCT_CLARITY; RATHER_THAN (5) -> COPY
- Top recurring framework findings: REVIEW_FLAG_RENDERED (36), NOT_CONSTRUCTION (27), WEAKENED_VALUE (17), CONDITIONAL_IF (16), BANNED_WORD (10).

## Page-by-Page Findings

### `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`
- Priority: **high**
- Copy findings: 6
- Structure findings: 4
- Pattern findings: 2
- [L50] BANNED_PHRASE: "rather than" — see banned phrases list
- [L62] BANNED_PHRASE: "rather than" — see banned phrases list
- [L52] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L78] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L104] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L173] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L50] RATHER_THAN: "rather than" — contrast-by-diminishment
- [L69] RATHER_THAN: "rather than" — contrast-by-diminishment
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
- Priority: **high**
- Copy findings: 31
- Structure findings: 9
- Pattern findings: 14
- [L154] BANNED_PHRASE: "rather than" — see banned phrases list
- [L37] BANNED_WORD: "real" — delete or restate directly
- [L46] BANNED_WORD: "real" — delete or restate directly
- [L57] BANNED_WORD: "real" — delete or restate directly
- [L121] BANNED_WORD: "real" — delete or restate directly
- [L125] BANNED_WORD: "real" — delete or restate directly
- [L242] BANNED_WORD: "several" — delete or restate directly
- [L301] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
- Priority: **high**
- Copy findings: 16
- Structure findings: 2
- Pattern findings: 12
- [L187] BANNED_WORD: "meaningful" — delete or restate directly
- [L125] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L202] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L51] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L125] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L131] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L147] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L175] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`
- Priority: **high**
- Copy findings: 13
- Structure findings: 3
- Pattern findings: 10
- [L38] BANNED_PHRASE: "rather than" — see banned phrases list
- [L64] BANNED_PHRASE: "rather than" — see banned phrases list
- [L60] BANNED_WORD: "several" — delete or restate directly
- [L82] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L106] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L110] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L116] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L124] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`
- HIGH: `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
- HIGH: `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
- HIGH: `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`

