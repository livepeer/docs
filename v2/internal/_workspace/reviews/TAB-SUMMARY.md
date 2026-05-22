# TAB SUMMARY: v2/internal

**Audit date:** 2026-04-08
**Pages audited:** 18
**Reviewer:** Claude (automated audit)

## Verdicts Overview

| Verdict | Count | Pages |
|---|---|---|
| PASS | 7 | about, docs-philosophy, governance-pipeline, governance, aims, problem-statements, report |
| NEEDS WORK | 4 | internal-overview, ycomb, inferact-transcript, personas |
| FAIL | 7 | definitions, ecosystem, references, strategic-alignment, deliverables, outcomes, index (generated/exempt) |

## Section Breakdown

### Root (5 pages)
- 3 FAIL (empty stubs), 1 NEEDS WORK (duplicate), 1 PASS (generated index)
- **Action:** Archive or populate definitions, ecosystem, references. Delete internal-overview (duplicate).

### Assets (2 pages)
- 2 NEEDS WORK (transcript assets with frontmatter issues)
- **Action:** Fix capitalised "Keywords". Consider moving 323KB ycomb.mdx out of served docs.

### Overview (6 pages)
- 4 PASS, 1 NEEDS WORK, 1 FAIL
- **Action:** Populate remaining personas. Populate strategic-alignment or mark WIP.

### RFP (5 pages)
- 3 PASS, 2 FAIL (empty)
- **Action:** Populate or remove deliverables.mdx and outcomes.mdx from nav.

## Common Issues

1. **Empty pages in nav** (4 pages): deliverables, outcomes, definitions, ecosystem are registered or linked but contain no content
2. **Capitalised frontmatter keys** (4 pages): "Keywords" or "Purpose" instead of lowercase
3. **Missing frontmatter fields** (8 pages): pageType, purpose, audience, lastVerified missing on root and asset pages
4. **No H1** (14 pages): Most pages start at H2. Internal pages should still have H1 for accessibility and AI parsing
5. **Legacy path references**: Several pages reference `v2/pages/` structure that has been reorganised
6. **Typo**: "philopsophy" appears in about.mdx and internal-overview.mdx

## Recommendations

1. **P0:** Remove empty pages from docs.json nav or add content (deliverables, outcomes)
2. **P1:** Archive 3 empty root stubs (definitions, ecosystem, references) and the duplicate internal-overview
3. **P1:** Fix all capitalised frontmatter keys (Keywords, Purpose) across 4 pages
4. **P2:** Add missing frontmatter fields to root and asset pages
5. **P2:** Complete personas page (3+ personas missing)
6. **P3:** Populate strategic-alignment or convert to WIP with callout
7. **P3:** Review legacy path references in aims.mdx, governance.mdx, problem-statements.mdx
