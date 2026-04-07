# Copy-Framework Review — Monitoring & Tooling

**Verdict:** blocked
**Files scanned:** 5
**Pressure:** 19 blocking / 135 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 40 hit(s) across 5 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 32 hit(s) across 5 file(s) → ARCHITECTURE
- **WEAKENED_VALUE**: 17 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **THIS_PAGE_VERB**: 2 hit(s) across 2 file(s)
- **CONSISTENTLY_NO_NUMBER**: 1 hit(s) across 1 file(s)
- **DEPENDS_ON**: 1 hit(s) across 1 file(s)

## Page findings

### `health-checks.mdx`
- Blocking: 4
- Warnings: 16
- Leading findings: CONDITIONAL_IF (6), NOT_CONSTRUCTION (6), REVIEW_FLAG_RENDERED (4), WEAKENED_VALUE (3), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `tools-and-dashboards.mdx`
- Blocking: 4
- Warnings: 5
- Leading findings: REVIEW_FLAG_RENDERED (4), NOT_CONSTRUCTION (3), WEAKENED_VALUE (1), ACCORDION_ONLY_URL (1)
- Recommended changes:
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `monitoring-setup.mdx`
- Blocking: 4
- Warnings: 9
- Leading findings: NOT_CONSTRUCTION (6), REVIEW_FLAG_RENDERED (4), CONDITIONAL_IF (1), DESCRIPTION_TOO_LONG (1), THIS_PAGE_VERB (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `on-chain-metrics.mdx`
- Blocking: 3
- Warnings: 27
- Leading findings: WEAKENED_VALUE (16), CONDITIONAL_IF (5), NOT_CONSTRUCTION (4), REVIEW_FLAG_RENDERED (3), DESCRIPTION_TOO_LONG (1), THIS_PAGE_VERB (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `troubleshooting.mdx`
- Blocking: 4
- Warnings: 78
- Leading findings: NOT_CONSTRUCTION (30), CONDITIONAL_IF (22), ACCORDION_ONLY_URL (17), WEAKENED_VALUE (6), REVIEW_FLAG_RENDERED (4), CONSISTENTLY_NO_NUMBER (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
  - replace vague standards and dangling claims with explicit thresholds or concrete statements
