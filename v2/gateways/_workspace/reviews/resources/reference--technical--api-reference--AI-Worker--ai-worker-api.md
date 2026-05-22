# Review: reference/technical/api-reference/AI-Worker/ai-worker-api.mdx

**Path:** `v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

AI Worker API reference page. ORPHAN - not in docs.json navigation. Contains base URL table, deployment comparison, and endpoint listing. Overlaps with AI-API/ai.mdx portal page. Missing `lastVerified`.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 6/10 | Missing `lastVerified`. Missing `sidebarTitle`. |
| 2 | VOICE | 8/10 | Clean technical prose. |
| 3 | HEADINGS | 7/10 | H1 in body + H2 sections. |
| 4 | STRUCTURE | 6/10 | Overlaps with AI-API/ai.mdx portal. Purpose unclear - is this a separate API? |
| 5 | LAYOUT | 6/10 | Markdown tables. Info callout. No data imports. |
| 6 | VERACITY | 7/10 | Base URLs may change. |
| 7 | NAV | 3/10 | ORPHAN - not in docs.json. |
| 8 | LINKS | 7/10 | No links verified. |
| 9 | PROCESS | 4/10 | Missing `lastVerified`. Orphaned. |
| 10 | COMPLETENESS | 6/10 | Partial API coverage. |

## Findings

1. **NAV-F1**: ORPHAN - not registered in docs.json
2. **FM-F1**: Missing `lastVerified`
3. **FM-F2**: Missing `sidebarTitle`
4. **STRUCTURE-F1**: Overlaps with AI-API/ai.mdx - potential duplicate
5. **HEADINGS-F1**: H1 in body

## Verdict

**FAIL** - Orphaned, incomplete, potentially duplicate of AI-API/ai.mdx. Decide: merge into ai.mdx, register in nav, or archive.
