# Workloads & AI — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 9
- Blocking findings: 148
- Warning findings: 274
- copy-lint summary: 121 errors, 268 warnings

## Scope

- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.
- Some sentences undercut their own value claim in the same breath.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.
- "Depends on" language indicates unresolved persona or decision-branch routing.

### Structure-rules
- REVIEW_FLAG_RENDERED: 27
- ACCORDION_ONLY_URL: 4

### Copy-rules
- Banned word / phrase hits: 91
- Weakened / contrast constructions: 258
- NOT_CONSTRUCTION: 95
- WEAKENED_VALUE: 90
- BANNED_WORD: 81
- CONDITIONAL_IF: 64
- REVIEW_FLAG_RENDERED: 54
- BANNED_PHRASE: 10
- CONSISTENTLY_NO_NUMBER: 6
- SELF_UNDERMINING_VALUE: 6

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: THIS_PAGE_VERB (4) -> ARCHITECTURE; RATHER_THAN (5) -> COPY; WEAKENED_VALUE (47) -> PRODUCT_CLARITY; CONDITIONAL_IF (34) -> ARCHITECTURE; NOT_CONSTRUCTION (49) -> PRODUCT_CLARITY; SELF_UNDERMINING_VALUE (3) -> PRODUCT_CLARITY
- Top recurring framework findings: NOT_CONSTRUCTION (95), WEAKENED_VALUE (90), BANNED_WORD (81), CONDITIONAL_IF (64), REVIEW_FLAG_RENDERED (54).

## Page-by-Page Findings

### `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`
- Priority: **high**
- Copy findings: 33
- Structure findings: 4
- Pattern findings: 17
- [L106] BANNED_PHRASE: "rather than" — see banned phrases list
- [L109] BANNED_PHRASE: "can generate" — see banned phrases list
- [L228] BANNED_PHRASE: "rather than" — see banned phrases list
- [L67] BANNED_WORD: "real" — delete or restate directly
- [L100] BANNED_WORD: "real" — delete or restate directly
- [L102] BANNED_WORD: "meaningful" — delete or restate directly
- [L198] BANNED_WORD: "real" — delete or restate directly
- [L200] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- Priority: **high**
- Copy findings: 39
- Structure findings: 4
- Pattern findings: 31
- [L163] BANNED_PHRASE: "among other factors" — see banned phrases list
- [L78] BANNED_WORD: "real" — delete or restate directly
- [L185] BANNED_WORD: "real" — delete or restate directly
- [L235] BANNED_WORD: "real" — delete or restate directly
- [L343] BANNED_WORD: "real" — delete or restate directly
- [L344] BANNED_WORD: "real" — delete or restate directly
- [L235] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L238] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- Priority: **high**
- Copy findings: 23
- Structure findings: 0
- Pattern findings: 6
- [L43] BANNED_PHRASE: "rather than" — see banned phrases list
- [L36] BANNED_WORD: "real" — delete or restate directly
- [L38] BANNED_WORD: "real" — delete or restate directly
- [L113] BANNED_WORD: "real" — delete or restate directly
- [L119] BANNED_WORD: "real" — delete or restate directly
- [L130] BANNED_WORD: "real" — delete or restate directly
- [L265] BANNED_WORD: "real" — delete or restate directly
- [L266] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.

### `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- Priority: **high**
- Copy findings: 38
- Structure findings: 6
- Pattern findings: 31
- [L669] BANNED_PHRASE: "rather than" — see banned phrases list
- [L360] BANNED_WORD: "significant" — delete or restate directly
- [L441] BANNED_WORD: "meaningful" — delete or restate directly
- [L536] BANNED_WORD: "real" — delete or restate directly
- [L692] BANNED_WORD: "real" — delete or restate directly
- [L693] BANNED_WORD: "real" — delete or restate directly
- [L696] BANNED_WORD: "real" — delete or restate directly
- [L42] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- Priority: **high**
- Copy findings: 7
- Structure findings: 4
- Pattern findings: 4
- [L47] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L169] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L169] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L128] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L221] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L251] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L271] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L49] NOT_CONSTRUCTION: "not [word]" — contrast-by-diminishment
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.
  - Replace vague standards and dangling claims with explicit thresholds or concrete statements.

### `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- Priority: **high**
- Copy findings: 49
- Structure findings: 3
- Pattern findings: 10
- [L37] BANNED_WORD: "real" — delete or restate directly
- [L39] BANNED_WORD: "real" — delete or restate directly
- [L45] BANNED_WORD: "real" — delete or restate directly
- [L47] BANNED_WORD: "real" — delete or restate directly
- [L49] BANNED_WORD: "real" — delete or restate directly
- [L50] BANNED_WORD: "real" — delete or restate directly
- [L64] BANNED_WORD: "real" — delete or restate directly
- [L114] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- Priority: **high**
- Copy findings: 10
- Structure findings: 4
- Pattern findings: 5
- [L198] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L95] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L147] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L175] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L191] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L198] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L111] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L140] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- Priority: **high**
- Copy findings: 35
- Structure findings: 2
- Pattern findings: 24
- [L58] BANNED_PHRASE: "not just" — see banned phrases list
- [L63] BANNED_PHRASE: "rather than" — see banned phrases list
- [L526] BANNED_PHRASE: "can generate" — see banned phrases list
- [L534] BANNED_PHRASE: "not just" — see banned phrases list
- [L220] BANNED_WORD: "real" — delete or restate directly
- [L228] BANNED_WORD: "essentially" — delete or restate directly
- [L229] BANNED_WORD: "real" — delete or restate directly
- [L236] BANNED_WORD: "real" — delete or restate directly
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
- Priority: **high**
- Copy findings: 17
- Structure findings: 4
- Pattern findings: 12
- [L83] BANNED_WORD: "several" — delete or restate directly
- [L70] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L163] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L211] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L68] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L150] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L177] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L186] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- HIGH: `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`

