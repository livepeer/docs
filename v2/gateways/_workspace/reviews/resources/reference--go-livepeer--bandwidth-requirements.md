# Review: reference/go-livepeer/bandwidth-requirements.mdx

**Path:** `v2/gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Legacy-style reference page about bandwidth requirements for video transcoding. Uses banned domain term "video miners" throughout. No imports, no components. Plain prose with bullet list. Missing several frontmatter fields (sidebarTitle, keywords, og:image).

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 4/10 | Missing: sidebarTitle, keywords, og:image, og:image:alt, og:image:width, og:image:height. Minimal fields only. |
| 2 | VOICE | 4/10 | "video miners" used 3 times (banned domain term). "you will" / "you" addressing style. No UK English markers visible. |
| 3 | HEADINGS | 5/10 | No H2+ headings in body. Title-only. |
| 4 | STRUCTURE | 6/10 | Short, single-purpose page. Under 2KB estimated. No components. |
| 5 | LAYOUT | 3/10 | Plain prose only. No imports, no components, no tables, no cards. No Related Pages. |
| 6 | VERACITY | 6/10 | "1G upload/download bandwidth" recommendation - source is "past testing" with no citation. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | Links to speedtest and iperf3 tools. |
| 9 | PROCESS | 7/10 | `status: current`, `lastVerified: 2026-03-17`. |
| 10 | COMPLETENESS | 5/10 | Only covers video bandwidth. No AI bandwidth considerations. No Docker-specific advice. |

## Findings

1. **VOICE-F1**: "video miners" used 3 times - banned domain term, should be "orchestrators" or "node operators"
2. **FM-F1**: Missing sidebarTitle, keywords, og:image fields
3. **LAYOUT-F1**: No components, no imports - legacy plain-text format
4. **COMPLETENESS-F1**: No AI inference bandwidth considerations
5. **HEADINGS-F1**: No headings in body

## Verdict

**FAIL** - Legacy page needing full rewrite. Banned domain terms, missing frontmatter, no components, incomplete content.
