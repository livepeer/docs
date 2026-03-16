# Copy-Framework Review — Operator Considerations

**Verdict:** blocked
**Files scanned:** 2
**Pressure:** 25 blocking / 42 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 12 hit(s) across 2 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 11 hit(s) across 2 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 4 hit(s) across 1 file(s)
- **DEPENDS_ON**: 1 hit(s) across 1 file(s)
- **RATHER_THAN**: 1 hit(s) across 1 file(s)
- **THIS_PAGE_VERB**: 1 hit(s) across 1 file(s)

## Page findings

### `business-case.mdx`
- Blocking: 9
- Warnings: 26
- Leading findings: NOT_CONSTRUCTION (11), WEAKENED_VALUE (9), CONDITIONAL_IF (6), BANNED_WORD (5), REVIEW_FLAG_RENDERED (3), BANNED_PHRASE (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `production-gateways.mdx`
- Blocking: 16
- Warnings: 16
- Leading findings: REVIEW_FLAG_RENDERED (12), WEAKENED_VALUE (8), NOT_CONSTRUCTION (6), BANNED_WORD (4), THIS_PAGE_VERB (1), CONDITIONAL_IF (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
