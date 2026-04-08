# Review: v2/home/mission-control.mdx

| Field | Value |
|---|---|
| Page | `v2/home/mission-control.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS WITH ISSUES** |

## Summary

Landing page for the Home tab. Heavy component usage (Starfield hero, Portal cards, Frame mode). Serves as the primary entry point for the entire docs site. Well-structured card grid with 9 navigation cards covering all major docs sections.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | frame | OK |
| title | Yes | Welcome to Livepeer Mission Control | OK |
| description | Yes | Long description | OK |
| PageType | Yes | landing | CASE: should be `pageType` |
| audience | Yes | everyone | OK |
| purpose | Yes | landing | OK |
| sidebarTitle | Yes | Mission Control | OK |
| tag | Yes | Start Here | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| keywords | Yes | Array(6) | OK |
| og:image | Yes | GitHub raw URL | OK |

**Issues:** `PageType` has wrong casing (should be lowercase `pageType`).

## Voice (Cat 2)

| Check | Result |
|---|---|
| UK English | PASS (optimised used) |
| No em-dashes | PASS |
| No banned words | PASS |
| No self-reference | PASS |
| No hedging | PASS |
| Entity-led | PASS |
| No deprecated terms | PASS |

## Heading Score (Cat 3)

No traditional headings -- this is a frame-mode landing page using component-rendered titles. N/A for heading audit.

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS -- landing/navigation hub |
| No dead ends | PASS -- all cards link out |
| Discord test | PASS -- community card links to Discord |
| Min 2KB | PASS |
| No TODO | PASS |
| No commented-out active content | WARN -- significant commented-out HTML (lines 63-83, 154-161) |

## Layout (Cat 5)

| Check | Result |
|---|---|
| Correct template | PASS -- portal landing |
| Required sections | PASS -- hero + card grid |
| Data imports | PASS -- component imports |
| Related Pages/CTA | PASS -- 9 navigation cards |

## Veracity (Cat 6)

| Check | Result |
|---|---|
| Claims citable | PASS |
| REVIEW flags | NONE |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES -- `v2/home/mission-control` |
| Orphan | NO |

## Links (Cat 8)

| Link | Resolves |
|---|---|
| ../about/portal | WARN -- relative, needs verification |
| ../developers/get-started/video-quickstart | WARN -- relative |
| /v2/orchestrators/portal | OK |
| /v2/home/solutions/showcase | OK |
| /v2/gateways/portal | OK |
| /v2/community/community-portal | OK |
| /v2/delegators/portal | OK |
| /v2/developers/guides/opportunities/overview | WARN -- verify path |

## Process (Cat 9)

| Check | Result |
|---|---|
| Sign-off | No formal sign-off |
| Gates | lastVerified present |

## Completeness (Cat 10)

| Check | Result |
|---|---|
| Journey complete | PASS -- covers all entry points |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P2 | `PageType` wrong casing -- should be `pageType` |
| 2 | Structure | P3 | Significant commented-out HTML blocks |
| 3 | Links | P2 | Relative links (`../about/portal`, etc.) need verification |
