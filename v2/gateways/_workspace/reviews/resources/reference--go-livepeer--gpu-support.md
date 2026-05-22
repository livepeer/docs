# Review: reference/go-livepeer/gpu-support.mdx

**Path:** `v2/gateways/resources/reference/go-livepeer/gpu-support.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

GPU compatibility reference with tested model table. Legacy format. Uses banned terms ("mining cryptocurrencies", implied "miners"). Crowdsourced data - may be stale. No components.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 4/10 | Missing: sidebarTitle, keywords, og:image fields. |
| 2 | VOICE | 4/10 | "mining cryptocurrencies" (line 11/29) - banned domain terms. "crowdsource" style language. |
| 3 | HEADINGS | 7/10 | Overview heading + markdown table. |
| 4 | STRUCTURE | 6/10 | Single purpose. Markdown table format. Forum benchmark links. |
| 5 | LAYOUT | 4/10 | Plain markdown table. No DynamicTable. No data imports. No components. |
| 6 | VERACITY | 5/10 | "Tested Concurrent Ethash Mining" column - Ethash mining is no longer relevant (Ethereum moved to PoS). Data may be significantly stale. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 6/10 | Forum benchmark links may be stale. NVIDIA support matrix link. |
| 9 | PROCESS | 7/10 | `status: current`, `lastVerified: 2026-03-17`. |
| 10 | COMPLETENESS | 5/10 | Only covers transcoding GPUs. No AI inference GPU requirements. Ethash mining column is obsolete. |

## Findings

1. **VOICE-F1**: "mining cryptocurrencies" - banned domain terms
2. **VERACITY-F1**: "Tested Concurrent Ethash Mining" column is obsolete (Ethereum PoS since 2022)
3. **FM-F1**: Missing sidebarTitle, keywords, og:image fields
4. **LAYOUT-F1**: Legacy plain markdown table
5. **COMPLETENESS-F1**: No AI inference GPU requirements (only transcoding)
6. **LINKS-F1**: Forum benchmark links may be stale

## Verdict

**FAIL** - Obsolete content (Ethash mining), banned domain terms, missing frontmatter. Needs full rewrite with AI GPU requirements added and obsolete mining references removed.
