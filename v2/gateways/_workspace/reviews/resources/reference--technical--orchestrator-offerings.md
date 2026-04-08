# Review: reference/technical/orchestrator-offerings.mdx

**Path:** `v2/gateways/resources/reference/technical/orchestrator-offerings.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Technical reference for orchestrator offering data structures (protobuf schema, registration process). ORPHAN - not in docs.json navigation. Missing `lastVerified` field. Missing `sidebarTitle`. Contains protobuf code examples.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 6/10 | Missing `lastVerified`. Missing `sidebarTitle`. |
| 2 | VOICE | 8/10 | Technical reference prose is clean. |
| 3 | HEADINGS | 7/10 | H3 headings (Registration Process). |
| 4 | STRUCTURE | 7/10 | Protobuf schema + registration example. |
| 5 | LAYOUT | 6/10 | Code blocks only. No data imports. No Related Pages. |
| 6 | VERACITY | 7/10 | Protobuf schema may drift from source. |
| 7 | NAV | 3/10 | ORPHAN - not in docs.json navigation. |
| 8 | LINKS | 8/10 | No external links to verify. |
| 9 | PROCESS | 5/10 | Missing `lastVerified`. Not in nav. |
| 10 | COMPLETENESS | 6/10 | Partial coverage - shows schema but lacks full explanation. |

## Findings

1. **NAV-F1**: ORPHAN - file exists but not registered in docs.json navigation
2. **FM-F1**: Missing `lastVerified` field
3. **FM-F2**: Missing `sidebarTitle` field
4. **VERACITY-F1**: Protobuf schema manually maintained - may drift from go-livepeer source

## Verdict

**FAIL** - Orphaned page not in navigation. Missing required frontmatter fields. Decide: register in nav or archive.
