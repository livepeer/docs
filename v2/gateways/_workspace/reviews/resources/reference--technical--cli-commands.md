# Review: reference/technical/cli-commands.mdx

**Path:** `v2/gateways/resources/reference/technical/cli-commands.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

CLI commands reference with quick reference table and detailed command list. Uses Card component for GitHub link. Manual content (not data-driven). Moderate depth.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields. |
| 2 | VOICE | 8/10 | Clean prose. Uses H1 in body (`# Livepeer CLI Commands`) which conflicts with title-based H1. |
| 3 | HEADINGS | 7/10 | H1 in body + H2/H3 headings. Quick Reference table. |
| 4 | STRUCTURE | 7/10 | Quick reference table is good. Detailed list uses bullet points rather than structured data. Card links to `livepeer/wiki` which may be outdated. |
| 5 | LAYOUT | 7/10 | Card + table + bullet list. Not using DynamicTable or data imports. No Related Pages. |
| 6 | VERACITY | 7/10 | Links to `github.com/livepeer/wiki` - verify this repo is still maintained. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 7/10 | `livepeer/wiki` GitHub link may be stale. |
| 9 | PROCESS | 9/10 | `status: current`, `lastVerified: 2026-03-17`. |
| 10 | COMPLETENESS | 7/10 | Command list covers categories but lacks detail (flags, examples, expected output). |

## Findings

1. **HEADINGS-F1**: H1 in body (`# Livepeer CLI Commands`) - should use H2 or rely on title
2. **LINKS-F1**: `github.com/livepeer/wiki` may not be the correct or current repo
3. **LAYOUT-F1**: Not using data imports - manually maintained bullet list
4. **COMPLETENESS-F1**: Commands listed without flags, examples, or expected output

## Verdict

**CONDITIONAL PASS** - Functional but could be significantly improved with data-driven content and actual command examples. Verify the wiki GitHub link.
