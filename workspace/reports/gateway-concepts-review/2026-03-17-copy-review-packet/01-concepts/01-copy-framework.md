# Copy-Framework Review - Concepts

**Verdict:** blocked
**Files scanned:** 4
**Pressure:** 6 blocking / 59 warnings

## Section-wide patterns
- **NOT_CONSTRUCTION**: 16 hit(s) across 4 file(s) -> PRODUCT_CLARITY
- **WEAKENED_VALUE**: 9 hit(s) across 2 file(s) -> PRODUCT_CLARITY
- **CONDITIONAL_IF**: 7 hit(s) across 3 file(s) -> ARCHITECTURE
- **DEPENDS_ON**: 2 hit(s) across 1 file(s)
- **THIS_PAGE_VERB**: 1 hit(s) across 1 file(s)
- **RATHER_THAN**: 1 hit(s) across 1 file(s)

## Page findings

### `role.mdx`
- Blocking: 1
- Warnings: 13
- Leading findings: NOT_CONSTRUCTION (6), WEAKENED_VALUE (6), BANNED_WORD (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `capabilities.mdx`
- Blocking: 4
- Warnings: 24
- Leading findings: CONDITIONAL_IF (8), WEAKENED_VALUE (8), NOT_CONSTRUCTION (5), BANNED_WORD (3), DEPENDS_ON (2), BANNED_PHRASE (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `architecture.mdx`
- Blocking: 0
- Warnings: 11
- Leading findings: NOT_CONSTRUCTION (6), CONDITIONAL_IF (4), THIS_PAGE_VERB (1)
- Recommended changes:
  - rewrite the opening and section leads around a direct value proposition
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `business-model.mdx`
- Blocking: 1
- Warnings: 11
- Leading findings: NOT_CONSTRUCTION (10), BANNED_WORD (1), CONDITIONAL_IF (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

