# Copy-Framework Review — Deployment Details

**Verdict:** blocked
**Files scanned:** 2
**Pressure:** 8 blocking / 33 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 19 hit(s) across 2 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 4 hit(s) across 2 file(s)
- **CONDITIONAL_IF**: 3 hit(s) across 2 file(s)
- **DEPENDS_ON**: 1 hit(s) across 1 file(s)

## Page findings

### `setup-options.mdx`
- Blocking: 4
- Warnings: 10
- Leading findings: NOT_CONSTRUCTION (8), REVIEW_FLAG_RENDERED (3), BANNED_WORD (1), CONDITIONAL_IF (1), WEAKENED_VALUE (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `setup-requirements.mdx`
- Blocking: 4
- Warnings: 23
- Leading findings: NOT_CONSTRUCTION (17), WEAKENED_VALUE (4), BANNED_WORD (2), CONDITIONAL_IF (2), REVIEW_FLAG_RENDERED (2)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
