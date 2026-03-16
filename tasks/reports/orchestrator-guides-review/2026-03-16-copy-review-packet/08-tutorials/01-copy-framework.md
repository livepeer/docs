# Tutorials — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 6
- Blocking findings: 39
- Warning findings: 115
- copy-lint summary: 23 errors, 106 warnings

## Scope

- `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`
- `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
- `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`

## Framework Layer Findings

### Value-prop check
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.
- "Depends on" language indicates unresolved persona or decision-branch routing.

### Structure-rules
- REVIEW_FLAG_RENDERED: 16

### Copy-rules
- Banned word / phrase hits: 7
- Weakened / contrast constructions: 112
- NOT_CONSTRUCTION: 48
- REVIEW_FLAG_RENDERED: 32
- CONDITIONAL_IF: 31
- WEAKENED_VALUE: 30
- BANNED_PHRASE: 4
- BANNED_WORD: 3
- RATHER_THAN: 2
- CONSISTENTLY_NO_NUMBER: 2

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: CONDITIONAL_IF (33) -> ARCHITECTURE; NOT_CONSTRUCTION (38) -> PRODUCT_CLARITY; WEAKENED_VALUE (21) -> PRODUCT_CLARITY
- Top recurring framework findings: NOT_CONSTRUCTION (48), REVIEW_FLAG_RENDERED (32), CONDITIONAL_IF (31), WEAKENED_VALUE (30), BANNED_PHRASE (4).

## Page-by-Page Findings

### `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
- Priority: **high**
- Copy findings: 4
- Structure findings: 2
- Pattern findings: 2
- [L136] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L136] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L224] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L278] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L214] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L214] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`
- Priority: **high**
- Copy findings: 16
- Structure findings: 2
- Pattern findings: 12
- [L296] BANNED_PHRASE: "not just" — see banned phrases list
- [L244] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L277] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L74] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L88] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L244] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L277] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L296] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- Priority: **high**
- Copy findings: 22
- Structure findings: 3
- Pattern findings: 8
- [L119] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L209] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L223] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L225] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L249] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L33] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L197] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L209] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
- Priority: **high**
- Copy findings: 16
- Structure findings: 3
- Pattern findings: 8
- [L41] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L99] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L186] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L231] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L41] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L47] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L99] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L172] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- Priority: **high**
- Copy findings: 7
- Structure findings: 2
- Pattern findings: 4
- [L223] BANNED_PHRASE: "rather than" — see banned phrases list
- [L243] BANNED_PHRASE: "rather than" — see banned phrases list
- [L33] BANNED_WORD: "real" — delete or restate directly
- [L173] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L33] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L125] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L271] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L227] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
- Priority: **high**
- Copy findings: 23
- Structure findings: 4
- Pattern findings: 16
- [L318] BANNED_PHRASE: "rather than" — see banned phrases list
- [L39] BANNED_WORD: "real" — delete or restate directly
- [L133] BANNED_WORD: "real" — delete or restate directly
- [L115] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L148] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L206] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L267] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L281] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
- HIGH: `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`
- HIGH: `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- HIGH: `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
- HIGH: `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- HIGH: `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`

