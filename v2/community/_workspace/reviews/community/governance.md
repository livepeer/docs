# Review: v2/community/ecosystem/governance.mdx

| Field | Value |
|---|---|
| Page | `v2/community/ecosystem/governance.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Governance and Foundation reference page. Covers Foundation, Advisory Boards, Workstreams (9 tabs), SPEs with step-by-step proposal guide, GovWorks, voting mechanics, LIPs, and gateway operator governance. Very thorough. Overlaps with home/about/ecosystem.mdx but more focused on governance mechanics.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Governance & the Livepeer Foundation | OK |
| sidebarTitle | Yes | Governance & Foundation | OK |
| description | Yes | Good | OK |
| Keywords | Yes | Array(10) | CASE: should be `keywords` |
| og:image | Yes | fallback.png | OK |
| purpose | Yes | how_to | OK |
| pageType | Yes | guide | OK |
| audience | Yes | Array(5) | OK |
| status | Yes | provisional | OK |
| lastVerified | Yes | 2026-03-02 | OK |
| sourceOfTruth | Yes | Forum URL | OK |

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS |
| No em-dashes | PASS |
| Entity-led | PASS |
| Draft warning | Present -- appropriate |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- governance reference |
| No dead ends | PASS -- multiple CTAs |
| Min 2KB | PASS -- substantial |
| Overlap | WARN -- significant overlap with home ecosystem page |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `Keywords` wrong casing |
| 2 | Structure | P2 | Content overlap with home/about/ecosystem.mdx |
