# Staking & Earning — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 6
- Blocking findings: 18
- Warning findings: 118
- copy-lint summary: 15 errors, 114 warnings

## Scope

- `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
- `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`
- `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`
- `v2/orchestrators/guides/payments-and-pricing/payments.mdx`
- `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
- `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 3

### Copy-rules
- Banned word / phrase hits: 12
- Weakened / contrast constructions: 115
- WEAKENED_VALUE: 38
- NOT_CONSTRUCTION: 37
- CONDITIONAL_IF: 32
- BANNED_WORD: 7
- REVIEW_FLAG_RENDERED: 6
- BANNED_PHRASE: 5
- THIS_PAGE_VERB: 4
- RATHER_THAN: 4

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: WEAKENED_VALUE (16) -> PRODUCT_CLARITY; NOT_CONSTRUCTION (15) -> PRODUCT_CLARITY; CONDITIONAL_IF (9) -> ARCHITECTURE; NOT_CONSTRUCTION (9) -> PRODUCT_CLARITY; CONDITIONAL_IF (10) -> ARCHITECTURE
- Top recurring framework findings: WEAKENED_VALUE (38), NOT_CONSTRUCTION (37), CONDITIONAL_IF (32), BANNED_WORD (7), REVIEW_FLAG_RENDERED (6).

## Page-by-Page Findings

### `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
- Priority: **high**
- Copy findings: 10
- Structure findings: 0
- Pattern findings: 6
- [L35] BANNED_PHRASE: "Understanding X is essential" — see banned phrases list
- [L89] BANNED_WORD: "several" — delete or restate directly
- [L112] BANNED_WORD: "meaningful" — delete or restate directly
- [L149] BANNED_WORD: "significant" — delete or restate directly
- [L222] BANNED_WORD: "real" — delete or restate directly
- [L75] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L112] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L112] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.

### `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`
- Priority: **high**
- Copy findings: 4
- Structure findings: 1
- Pattern findings: 2
- [L109] BANNED_WORD: "clearly" — delete or restate directly
- [L76] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L303] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L370] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L58] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L119] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`
- Priority: **high**
- Copy findings: 12
- Structure findings: 2
- Pattern findings: 9
- [L141] BANNED_PHRASE: "rather than" — see banned phrases list
- [L63] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L104] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L148] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L209] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L34] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L45] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L197] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/payments-and-pricing/payments.mdx`
- Priority: **high**
- Copy findings: 13
- Structure findings: 0
- Pattern findings: 14
- [L61] BANNED_PHRASE: "rather than" — see banned phrases list
- [L187] BANNED_PHRASE: "rather than" — see banned phrases list
- [L52] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L78] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L106] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L146] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L248] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L36] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.

### `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
- Priority: **high**
- Copy findings: 18
- Structure findings: 0
- Pattern findings: 16
- [L221] BANNED_PHRASE: "rather than" — see banned phrases list
- [L46] BANNED_WORD: "real" — delete or restate directly
- [L139] BANNED_WORD: "real" — delete or restate directly
- [L200] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L213] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L219] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L48] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L93] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.

### `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`
- Priority: **high**
- Copy findings: 14
- Structure findings: 0
- Pattern findings: 15
- [L133] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L176] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L237] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L247] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L49] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L100] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L180] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L194] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
- HIGH: `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`
- HIGH: `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`
- HIGH: `v2/orchestrators/guides/payments-and-pricing/payments.mdx`
- HIGH: `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
- HIGH: `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`

