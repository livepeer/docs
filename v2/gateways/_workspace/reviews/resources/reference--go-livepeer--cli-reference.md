# Review: reference/go-livepeer/cli-reference.mdx

**Path:** `v2/gateways/resources/reference/go-livepeer/cli-reference.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Comprehensive CLI flag reference sourced from go-livepeer. Long plain-text reference with categorised flag descriptions. No components or data imports. Legacy format but comprehensive content.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 4/10 | Missing: sidebarTitle, keywords, og:image fields. Minimal. |
| 2 | VOICE | 7/10 | Clean technical prose. Some "you" addressing. |
| 3 | HEADINGS | 8/10 | Good H2/H3 hierarchy: Options > Configuration, Network, Transcoding, Orchestrator, etc. |
| 4 | STRUCTURE | 7/10 | Single purpose (flag reference). Long but well-categorised. Links to go-livepeer source. |
| 5 | LAYOUT | 4/10 | Plain bullet lists. No DynamicTable, no data imports, no components. Duplicates content that should be in configuration-flags.mdx. |
| 6 | VERACITY | 7/10 | States "sourced and regularly updated" from go-livepeer source. Manual maintenance risk. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | Links to go-livepeer source file and developer docs. |
| 9 | PROCESS | 7/10 | `status: current`, `lastVerified: 2026-03-17`. |
| 10 | COMPLETENESS | 8/10 | Comprehensive flag coverage. |

## Findings

1. **FM-F1**: Missing sidebarTitle, keywords, og:image fields
2. **LAYOUT-F1**: Legacy plain-text format - should use DynamicTable with data import
3. **STRUCTURE-F1**: Overlaps significantly with `reference/technical/configuration-flags.mdx` - potential duplication

## Verdict

**CONDITIONAL PASS** - Content is comprehensive but format is legacy. Consider consolidating with configuration-flags.mdx or converting to data-driven format.
