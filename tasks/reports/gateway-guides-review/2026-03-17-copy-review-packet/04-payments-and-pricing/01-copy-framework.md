# Copy-Framework Review — Payments & Pricing

**Verdict:** blocked
**Files scanned:** 5
**Pressure:** 26 blocking / 82 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 25 hit(s) across 5 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 20 hit(s) across 5 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 8 hit(s) across 4 file(s) → ARCHITECTURE
- **RATHER_THAN**: 5 hit(s) across 3 file(s) → COPY
- **DEPENDS_ON**: 1 hit(s) across 1 file(s)
- **CONSISTENTLY_NO_NUMBER**: 1 hit(s) across 1 file(s)

## Page findings

### `payment-guide.mdx`
- Blocking: 2
- Warnings: 12
- Leading findings: NOT_CONSTRUCTION (6), WEAKENED_VALUE (4), BANNED_PHRASE (1), REVIEW_FLAG_RENDERED (1), DEPENDS_ON (1), RATHER_THAN (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `funding-guide.mdx`
- Blocking: 5
- Warnings: 15
- Leading findings: NOT_CONSTRUCTION (9), REVIEW_FLAG_RENDERED (5), WEAKENED_VALUE (3), CONDITIONAL_IF (1), DESCRIPTION_TOO_LONG (1), ACCORDION_ONLY_URL (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `pricing-strategy.mdx`
- Blocking: 9
- Warnings: 19
- Leading findings: WEAKENED_VALUE (8), CONDITIONAL_IF (6), REVIEW_FLAG_RENDERED (6), BANNED_PHRASE (3), NOT_CONSTRUCTION (3), CONSISTENTLY_NO_NUMBER (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements

### `remote-signers.mdx`
- Blocking: 7
- Warnings: 24
- Leading findings: NOT_CONSTRUCTION (10), WEAKENED_VALUE (10), REVIEW_FLAG_RENDERED (6), CONDITIONAL_IF (2), BANNED_PHRASE (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `clearinghouse-guide.mdx`
- Blocking: 3
- Warnings: 12
- Leading findings: NOT_CONSTRUCTION (8), REVIEW_FLAG_RENDERED (3), WEAKENED_VALUE (2), CONDITIONAL_IF (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
