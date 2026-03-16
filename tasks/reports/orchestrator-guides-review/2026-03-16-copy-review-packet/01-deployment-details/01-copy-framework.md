# Deployment Details — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 6
- Blocking findings: 32
- Warning findings: 183
- copy-lint summary: 21 errors, 182 warnings

## Scope

- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 11
- ACCORDION_ONLY_URL: 2

### Copy-rules
- Banned word / phrase hits: 10
- Weakened / contrast constructions: 181
- NOT_CONSTRUCTION: 79
- CONDITIONAL_IF: 50
- WEAKENED_VALUE: 48
- REVIEW_FLAG_RENDERED: 22
- BANNED_PHRASE: 6
- BANNED_WORD: 4
- RATHER_THAN: 3
- ACCORDION_ONLY_URL: 2

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: NOT_CONSTRUCTION (114) -> PRODUCT_CLARITY; CONDITIONAL_IF (107) -> ARCHITECTURE; WEAKENED_VALUE (80) -> PRODUCT_CLARITY; RATHER_THAN (18) -> COPY; THIS_PAGE_VERB (7) -> ARCHITECTURE; DEPENDS_ON (8) -> ARCHITECTURE; SELF_UNDERMINING_VALUE (2) -> PRODUCT_CLARITY
- Top recurring framework findings: NOT_CONSTRUCTION (79), CONDITIONAL_IF (50), WEAKENED_VALUE (48), REVIEW_FLAG_RENDERED (22), BANNED_PHRASE (6).

## Page-by-Page Findings

### `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- Priority: **high**
- Copy findings: 11
- Structure findings: 0
- Pattern findings: 10
- [L126] BANNED_PHRASE: "rather than" — see banned phrases list
- [L148] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L85] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L90] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L98] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L154] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L180] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L184] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.

### `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- Priority: **high**
- Copy findings: 26
- Structure findings: 1
- Pattern findings: 11
- [L252] BANNED_PHRASE: "rather than" — see banned phrases list
- [L305] BANNED_PHRASE: "rather than" — see banned phrases list
- [L42] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L185] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L211] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L213] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L221] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L229] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- Priority: **high**
- Copy findings: 20
- Structure findings: 5
- Pattern findings: 7
- [L205] BANNED_WORD: "several" — delete or restate directly
- [L293] BANNED_WORD: "real" — delete or restate directly
- [L167] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L189] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L219] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L249] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L43] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L89] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- Priority: **high**
- Copy findings: 21
- Structure findings: 2
- Pattern findings: 7
- [L261] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L266] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L284] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L285] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L293] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L298] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L88] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L95] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.

### `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- Priority: **high**
- Copy findings: 26
- Structure findings: 1
- Pattern findings: 24
- [L187] BANNED_PHRASE: "rather than" — see banned phrases list
- [L256] BANNED_PHRASE: "rather than" — see banned phrases list
- [L162] BANNED_WORD: "meaningful" — delete or restate directly
- [L154] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L158] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L187] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L199] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L205] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- Priority: **high**
- Copy findings: 26
- Structure findings: 4
- Pattern findings: 13
- [L317] BANNED_PHRASE: "rather than" — see banned phrases list
- [L190] BANNED_WORD: "meaningful" — delete or restate directly
- [L174] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L183] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L240] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L247] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L47] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L150] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- HIGH: `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- HIGH: `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- HIGH: `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- HIGH: `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- HIGH: `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`

