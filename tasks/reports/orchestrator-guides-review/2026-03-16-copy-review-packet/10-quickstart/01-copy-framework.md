# Quickstart — Copy Framework Report

- Verdict: **not ready**
- Files reviewed: 4
- Blocking findings: 16
- Warning findings: 31
- copy-lint summary: 16 errors, 31 warnings

## Scope

- `v2/orchestrators/quickstart/guide.mdx`
- `v2/orchestrators/quickstart/video-transcoding.mdx`
- `v2/orchestrators/quickstart/tutorial.mdx`
- `v2/orchestrators/quickstart/AI-prompt-start.mdx`

## Framework Layer Findings

### Value-prop check
- Openings still announce the page instead of stating the value directly.
- Value claims are frequently hedged instead of stated plainly.

### Persona-routing
- Conditional phrasing suggests pages are trying to serve multiple reader states without clearly routing them.

### Structure-rules
- REVIEW_FLAG_RENDERED: 9
- MISSING_FRONTMATTER: 4
- ACCORDION_ONLY_URL: 1

### Copy-rules
- Banned word / phrase hits: 3
- Weakened / contrast constructions: 28
- CONDITIONAL_IF: 15
- REVIEW_FLAG_RENDERED: 9
- NOT_CONSTRUCTION: 7
- WEAKENED_VALUE: 5
- MISSING_FRONTMATTER: 4
- BANNED_WORD: 3
- THIS_PAGE_VERB: 2
- ACCORDION_ONLY_URL: 1
- DEPENDS_ON: 1

### Review-gate
- Blocking issues are present. The section is not ready for copy approval.

### Iteration-diagnostic
- Pattern escalation triggered: CONDITIONAL_IF (7) -> ARCHITECTURE
- Top recurring framework findings: CONDITIONAL_IF (15), REVIEW_FLAG_RENDERED (9), NOT_CONSTRUCTION (7), WEAKENED_VALUE (5), MISSING_FRONTMATTER (4).

## Page-by-Page Findings

### `v2/orchestrators/quickstart/guide.mdx`
- Priority: **low**
- Copy findings: 1
- Structure findings: 0
- Pattern findings: 1
- [L26] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- Recommended changes:
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.

### `v2/orchestrators/quickstart/video-transcoding.mdx`
- Priority: **high**
- Copy findings: 6
- Structure findings: 2
- Pattern findings: 1
- [L37] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- [L68] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L128] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L134] BANNED_WORD: "real" — delete or restate directly
- [L203] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L212] NOT_CONSTRUCTION: "not [noun/verb]" — restate as positive claim
- [L352] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L410] ACCORDION_ONLY_URL: URL only inside Accordion — may be a primary action gated behind interaction
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Finish incomplete decision aids and pull any primary action out of gated UI copy.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

### `v2/orchestrators/quickstart/tutorial.mdx`
- Priority: **high**
- Copy findings: 0
- Structure findings: 4
- Pattern findings: 0
- [L1] MISSING_FRONTMATTER: Missing required frontmatter field: "title"
- [L1] MISSING_FRONTMATTER: Missing required frontmatter field: "pageType"
- [L1] MISSING_FRONTMATTER: Missing required frontmatter field: "audience"
- [L1] MISSING_FRONTMATTER: Missing required frontmatter field: "lastVerified"
- Recommended changes:
  - Resolve missing frontmatter fields before the page can be treated as complete.
  - Keep the page under manual copy-framework observation once the structural blockers are cleared.

### `v2/orchestrators/quickstart/AI-prompt-start.mdx`
- Priority: **high**
- Copy findings: 21
- Structure findings: 8
- Pattern findings: 13
- [L33] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L40] CONDITIONAL_IF: "if" in body prose — check for conditional gatekeeping
- [L40] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L48] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L50] WEAKENED_VALUE: "can/may [verb]" in apparent value claim — assert directly or delete
- [L52] REVIEW_FLAG_RENDERED: Unresolved REVIEW flag in rendered content — BLOCKS MERGE
- [L55] CONDITIONAL_IF: "if" in body prose — conditional gatekeeping
- [L55] THIS_PAGE_VERB: "This page/section [verb]" — page announcement
- Recommended changes:
  - Rewrite the opening and section leads so the reader value is stated directly, not announced or softened.
  - Untangle conditional reader routing and replace hedge logic with explicit decision criteria.
  - Rewrite banned-word and banned-phrase constructions with direct claims.
  - Replace contrast-by-diminishment and weakened phrasing with direct claims.
  - Resolve rendered REVIEW items before any rewrite is treated as complete.

## Rewrite Priority

- LOW: `v2/orchestrators/quickstart/guide.mdx`
- HIGH: `v2/orchestrators/quickstart/video-transcoding.mdx`
- HIGH: `v2/orchestrators/quickstart/tutorial.mdx`
- HIGH: `v2/orchestrators/quickstart/AI-prompt-start.mdx`

