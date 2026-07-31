# Review: knowledge-hub/resources.mdx

**Path:** `v2/gateways/resources/knowledge-hub/resources.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Comprehensive resource index covering official software, SDKs, dashboards, monitoring tools, reference docs, community resources, blog posts, and security/funding. Parallel structure to guides.mdx. Heavy CardGroup usage. Strong coverage.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields. `PageType: navigation`. |
| 2 | VOICE | 9/10 | Clean, entity-led. "Updated March 2026" is good temporal marker. No banned words. |
| 3 | HEADINGS | 10/10 | 9 H2 headings. Well-organised topic groups. No questions. |
| 4 | STRUCTURE | 9/10 | Single purpose (resource index). TODO comment in MDX comment. Well above 2KB (15KB). |
| 5 | LAYOUT | 8/10 | CardGroup throughout. CTA at bottom to open GitHub issue. No Related Pages. |
| 6 | VERACITY | 7/10 | "72% of fees from AI" cited (Nov 2025) - time-sensitive claim. External tool links (awesome-livepeer, Messari, Web3 Index) may become stale. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 7/10 | docs.livepeer.org links may use old URL patterns. Some awesome-livepeer links point to repo root rather than specific tools. Contract addresses link points to `/v2/about/resources/reference/livepeer-contract-addresses` - verify path. |
| 9 | PROCESS | 8/10 | `status: current`, `lastVerified: 2026-03-17`. TODO comment. |
| 10 | COMPLETENESS | 9/10 | Covers all major resource categories. SDKs, monitoring, analytics, community, blog all present. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway resources | OK |
| sidebarTitle | Yes | Resources | OK |
| description | Yes | Tools, SDKs, dashboards... | OK |
| PageType | Yes | navigation | Capitalisation inconsistent |
| audience | Yes | gateway | OK |
| purpose | Yes | orient | OK |
| status | Yes | current | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| keywords | Yes | 9 items | OK |
| og:image | Yes | gateways.png | OK |

## Findings

1. **VERACITY-F1**: "72% of fees now from AI inference" (line 194) - time-sensitive stat from Nov 2025, may be outdated
2. **LINKS-F1**: Contract addresses link to `/v2/about/resources/reference/livepeer-contract-addresses` - verify this path exists
3. **LINKS-F2**: Several awesome-livepeer links point to generic repo URL, not specific tool pages
4. **FM-F1**: `PageType` capitalisation inconsistent
5. **STRUCTURE-F1**: TODO comment block (lines 25-30)
6. **LINKS-F3**: docs.livepeer.org URLs may use v1 paths - verify redirects work

## Verdict

**PASS** - Strong resource index. Verify external links and time-sensitive stats.
