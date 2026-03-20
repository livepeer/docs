# Copy-Framework Review — Advanced Operations

**Verdict:** blocked
**Files scanned:** 4
**Pressure:** 23 blocking / 64 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 16 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 16 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 10 hit(s) across 3 file(s) → ARCHITECTURE
- **RATHER_THAN**: 5 hit(s) across 3 file(s) → COPY
- **CONSISTENTLY_NO_NUMBER**: 1 hit(s) across 1 file(s)
- **DEPENDS_ON**: 1 hit(s) across 1 file(s)
- **THIS_PAGE_VERB**: 1 hit(s) across 1 file(s)

## Page findings

### `orchestrator-selection.mdx`
- Blocking: 8
- Warnings: 17
- Leading findings: NOT_CONSTRUCTION (6), CONDITIONAL_IF (5), REVIEW_FLAG_RENDERED (5), WEAKENED_VALUE (4), BANNED_WORD (2), BANNED_PHRASE (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `scaling.mdx`
- Blocking: 5
- Warnings: 14
- Leading findings: WEAKENED_VALUE (6), CONDITIONAL_IF (4), REVIEW_FLAG_RENDERED (3), BANNED_PHRASE (1), BANNED_WORD (1), NOT_CONSTRUCTION (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `gateway-middleware.mdx`
- Blocking: 1
- Warnings: 9
- Leading findings: NOT_CONSTRUCTION (5), WEAKENED_VALUE (3), REVIEW_FLAG_RENDERED (1), ACCORDION_ONLY_URL (1)
- Recommended changes:
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `gateway-discoverability.mdx`
- Blocking: 9
- Warnings: 24
- Leading findings: NOT_CONSTRUCTION (10), WEAKENED_VALUE (8), REVIEW_FLAG_RENDERED (5), BANNED_PHRASE (3), CONDITIONAL_IF (3), THIS_PAGE_VERB (2)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
