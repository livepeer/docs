# AI Coauthoring Research

**Source**: `v2/_workspace/research/ai-coauthoring.md`
**What it is**: Research document on how to use AI effectively for documentation coauthoring. Covers information classification, domain-anchor reasoning, conditional precision, and prompt architecture.
**Use in**: Phase 3 content pass — informs how the content prompt should be structured and what it should govern.

---

## Key sections (with approximate line ranges)

- **Lines 53–61**: Information type classification — concept / fact / data / academic. Each type has different sourcing requirements and structural needs.
- **Lines 95–100**: Domain-anchor rationale — why declaring `industry` explicitly produces better output than letting AI infer from context.
- **Information flow model**: Input (frontmatter) → agent reads page purpose + audience → selects appropriate register and vocabulary → checks against domain terminology.
- **Prompt constraints vs prompt guidance**: The difference between hard rules (constraints) and calibration signals (guidance). Applies directly to how the content-pass prompt should be structured.

---

## Note on use

This is research, not a locked governance file. Use it to understand the reasoning behind the framework decisions, and to calibrate Phase 3 prompt design. Do not treat as canonical — `Frameworks/` files are canonical.
