# Copy-Framework Review — Node Pipelines

**Verdict:** blocked
**Files scanned:** 5
**Pressure:** 40 blocking / 125 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 24 hit(s) across 5 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 16 hit(s) across 5 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 13 hit(s) across 3 file(s) → ARCHITECTURE
- **RATHER_THAN**: 7 hit(s) across 3 file(s) → COPY
- **DEPENDS_ON**: 5 hit(s) across 4 file(s) → ARCHITECTURE
- **THIS_PAGE_VERB**: 1 hit(s) across 1 file(s)

## Page findings

### `guide.mdx`
- Blocking: 15
- Warnings: 25
- Leading findings: NOT_CONSTRUCTION (11), BANNED_WORD (9), WEAKENED_VALUE (9), BANNED_PHRASE (4), RATHER_THAN (3), REVIEW_FLAG_RENDERED (2)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `video-pipelines.mdx`
- Blocking: 4
- Warnings: 31
- Leading findings: NOT_CONSTRUCTION (12), CONDITIONAL_IF (10), WEAKENED_VALUE (4), REVIEW_FLAG_RENDERED (3), DEPENDS_ON (2), BANNED_WORD (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `ai-pipelines.mdx`
- Blocking: 14
- Warnings: 30
- Leading findings: NOT_CONSTRUCTION (14), BANNED_WORD (6), CONDITIONAL_IF (6), REVIEW_FLAG_RENDERED (6), WEAKENED_VALUE (4), BANNED_PHRASE (2)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `byoc-pipelines.mdx`
- Blocking: 5
- Warnings: 33
- Leading findings: WEAKENED_VALUE (13), NOT_CONSTRUCTION (10), CONDITIONAL_IF (5), BANNED_WORD (3), BANNED_PHRASE (2), RATHER_THAN (2)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `pipeline-configuration.mdx`
- Blocking: 2
- Warnings: 6
- Leading findings: NOT_CONSTRUCTION (3), BANNED_PHRASE (1), WEAKENED_VALUE (1), REVIEW_FLAG_RENDERED (1), DESCRIPTION_TOO_LONG (1), ACCORDION_ONLY_URL (1)
- Recommended changes:
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
