# Copy-Framework Review — Roadmap & Funding

**Verdict:** blocked
**Files scanned:** 4
**Pressure:** 23 blocking / 59 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 17 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **CONDITIONAL_IF**: 7 hit(s) across 4 file(s) → ARCHITECTURE
- **WEAKENED_VALUE**: 6 hit(s) across 2 file(s) → PRODUCT_CLARITY
- **RATHER_THAN**: 1 hit(s) across 1 file(s)
- **NOT_JUST**: 1 hit(s) across 1 file(s)

## Page findings

### `operator-support.mdx`
- Blocking: 5
- Warnings: 7
- Leading findings: REVIEW_FLAG_RENDERED (3), ACCORDION_ONLY_URL (3), BANNED_WORD (2), CONDITIONAL_IF (2), NOT_CONSTRUCTION (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `spe-grant-model.mdx`
- Blocking: 5
- Warnings: 21
- Leading findings: NOT_CONSTRUCTION (14), CONDITIONAL_IF (4), BANNED_PHRASE (2), REVIEW_FLAG_RENDERED (2), BANNED_WORD (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `naap-multi-tenancy.mdx`
- Blocking: 1
- Warnings: 15
- Leading findings: NOT_CONSTRUCTION (8), WEAKENED_VALUE (4), CONDITIONAL_IF (2), REVIEW_FLAG_RENDERED (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `gateway-showcase.mdx`
- Blocking: 12
- Warnings: 16
- Leading findings: REVIEW_FLAG_RENDERED (9), WEAKENED_VALUE (8), CONDITIONAL_IF (4), NOT_CONSTRUCTION (4), BANNED_WORD (3)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
