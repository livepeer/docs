# Review: reference/go-livepeer/hardware-requirements.mdx

**Path:** `v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Hardware requirements reference. Uses banned term "video miners". Contains 4 TBD placeholders (RAM, Disk for both video and AI). Incomplete content. Legacy format with no components.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 4/10 | Missing: sidebarTitle, keywords, og:image fields. |
| 2 | VOICE | 4/10 | "video miners" in description and body. "you" addressing. |
| 3 | HEADINGS | 7/10 | GPU, CPU, RAM, Disk headings. |
| 4 | STRUCTURE | 5/10 | 4 TBD sections make this substantially incomplete. |
| 5 | LAYOUT | 3/10 | Plain prose. No components, no imports, no tables. |
| 6 | VERACITY | 5/10 | 4 TBD placeholders. Incomplete information published. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | Link to GPU support page. |
| 9 | PROCESS | 4/10 | `status: current` but contains TBD content. Inconsistent gate status. |
| 10 | COMPLETENESS | 3/10 | RAM: TBD. Disk: TBD. Only GPU and CPU sections have content. |

## Findings

1. **VERACITY-F1**: 4 TBD placeholders (RAM line 35, Disk line 39, and duplicates at lines 53/57)
2. **VOICE-F1**: "video miners" in description and body - banned domain term
3. **FM-F1**: Missing sidebarTitle, keywords, og:image fields
4. **PROCESS-F1**: `status: current` with TBD content - should be `draft` or `incomplete`
5. **LAYOUT-F1**: Legacy plain-text format
6. **COMPLETENESS-F1**: Missing RAM and Disk requirements entirely

## Verdict

**FAIL** - Substantially incomplete (4 TBD sections). Banned domain terms. Missing frontmatter. Should be marked as draft or completed with actual requirements.
