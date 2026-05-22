# Copy-Framework Review — Tutorials

**Verdict:** blocked
**Files scanned:** 4
**Pressure:** 17 blocking / 97 warnings

**Scope notes:**
- `byoc-cpu-tutorial.mdx` is cross-listed under Quickstart in `docs-gate-work.json` and is included here because it is a live guides page.

## Section-wide patterns
- **CONDITIONAL_IF**: 26 hit(s) across 4 file(s) → ARCHITECTURE
- **NOT_CONSTRUCTION**: 22 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **WEAKENED_VALUE**: 14 hit(s) across 4 file(s) → PRODUCT_CLARITY
- **RATHER_THAN**: 1 hit(s) across 1 file(s)

## Page findings

### `byoc-cpu-tutorial.mdx`
- Blocking: 4
- Warnings: 20
- Leading findings: NOT_CONSTRUCTION (8), CONDITIONAL_IF (6), WEAKENED_VALUE (5), MISSING_FRONTMATTER (3), BANNED_WORD (1), DESCRIPTION_TOO_LONG (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `tutorial-1-offchain-transcoding-test.mdx`
- Blocking: 3
- Warnings: 8
- Leading findings: CONDITIONAL_IF (4), BANNED_WORD (3), NOT_CONSTRUCTION (2), WEAKENED_VALUE (2)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `tutorial-2-byoc-cpu-pipeline.mdx`
- Blocking: 5
- Warnings: 19
- Leading findings: NOT_CONSTRUCTION (11), WEAKENED_VALUE (5), BANNED_WORD (3), CONDITIONAL_IF (3), REVIEW_FLAG_RENDERED (2)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims

### `tutorial-3-go-production.mdx`
- Blocking: 5
- Warnings: 50
- Leading findings: CONDITIONAL_IF (23), NOT_CONSTRUCTION (14), WEAKENED_VALUE (11), BANNED_WORD (3), BANNED_PHRASE (1), REVIEW_FLAG_RENDERED (1)
- Recommended changes:
  - tighten persona routing and replace hedge logic with explicit decision criteria
  - repair incomplete decision aids and pull primary actions out of gated UI copy
  - remove banned word and banned phrase constructions
  - replace negative, weakened, and contrast-by-diminishment phrasing with direct claims
