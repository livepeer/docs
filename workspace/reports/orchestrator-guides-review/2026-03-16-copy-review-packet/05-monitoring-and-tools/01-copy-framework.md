# Monitoring & Tools — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 37
- Warning findings: 220
- copy-lint summary: 28 errors, 216 warnings

## Scope

- `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`
- `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`

## Framework Layer Findings

### Value-prop check
- Value claims are frequently hedged instead of stated plainly.
- Some sentences undercut their own value claim in the same breath.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- ACCORDION_ONLY_URL: 12
- REVIEW_FLAG_RENDERED: 9

### Copy-rules
- Banned word / phrase hits: 14
- Weakened / contrast constructions: 198
- CONDITIONAL_IF: 83
- NOT_CONSTRUCTION: 79
- WEAKENED_VALUE: 35
- REVIEW_FLAG_RENDERED: 18
- ACCORDION_ONLY_URL: 12
- BANNED_WORD: 10
- SELF_UNDERMINING_VALUE: 10
- BANNED_PHRASE: 4

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: NOT_CONSTRUCTION (45) -> PRODUCT_CLARITY; CONDITIONAL_IF (44) -> ARCHITECTURE; WEAKENED_VALUE (19) -> PRODUCT_CLARITY; SELF_UNDERMINING_VALUE (5) -> PRODUCT_CLARITY
- Top recurring framework findings: CONDITIONAL_IF (83), NOT_CONSTRUCTION (79), WEAKENED_VALUE (35), REVIEW_FLAG_RENDERED (18), ACCORDION_ONLY_URL (12).

## Page-by-Page Findings

### `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`
- Priority: **high**
- Copy findings: 12
- Structure findings: 4
- Pattern findings: 6
- [L219] BANNED_PHRASE: "rather than" — see banned phrases list
- [L43] BANNED_WORD: "real" — delete or restate directly
- [L43] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L76] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L183] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L213] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L257] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L83] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`
- Priority: **high**
- Copy findings: 27
- Structure findings: 1
- Pattern findings: 21
- [L51] BANNED_WORD: "real" — delete or restate directly
- [L130] BANNED_WORD: "significant" — delete or restate directly
- [L264] BANNED_WORD: "real" — delete or restate directly
- [L69] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L127] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L130] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L153] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L154] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`
- Priority: **high**
- Copy findings: 10
- Structure findings: 2
- Pattern findings: 4
- [L62] BANNED_PHRASE: "rather than" — see banned phrases list
- [L78] BANNED_WORD: "several" — delete or restate directly
- [L71] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L171] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L286] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L93] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L147] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L244] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`
- Priority: **high**
- Copy findings: 79
- Structure findings: 14
- Pattern findings: 77
- [L70] BANNED_PHRASE: "not just" — see banned phrases list
- [L174] BANNED_PHRASE: "not just" — see banned phrases list
- [L237] BANNED_WORD: "real" — delete or restate directly
- [L252] BANNED_WORD: "several" — delete or restate directly
- [L267] BANNED_WORD: "real" — delete or restate directly
- [L271] BANNED_WORD: "real" — delete or restate directly
- [L274] BANNED_WORD: "real" — delete or restate directly
- [L68] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx`
- HIGH: `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`
- HIGH: `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`
- HIGH: `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`

