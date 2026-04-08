# Review: knowledge-hub/guides.mdx

**Path:** `v2/gateways/resources/knowledge-hub/guides.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Comprehensive curated index page of gateway guides, tutorials, and blog posts organised by topic. Uses CardGroup layout throughout. Strong content coverage across all gateway personas (AI, video, dual, GaaS). Heavy use of external links (docs.livepeer.org, GitHub, blog posts). TODO comment block present.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields. `PageType: navigation` (capitalisation inconsistent). Purpose `orient` is correct for index page. OG image uses gateways-specific image. |
| 2 | VOICE | 9/10 | Clean UK English. Entity-led descriptions. No banned words. No em-dashes. No hedging. |
| 3 | HEADINGS | 10/10 | 11 H2 headings covering all major topics. Clear, descriptive, no questions. Good hierarchy. |
| 4 | STRUCTURE | 9/10 | Single purpose (guide index), single audience (gateway operators). Note distinguishes developer API users. TODO comment in MDX comment block. Well above 2KB (19KB). |
| 5 | LAYOUT | 8/10 | CardGroup layout throughout. CustomDivider between sections. Bottom CTA to open GitHub issue. No Related Pages section (acceptable for index page). |
| 6 | VERACITY | 7/10 | Many external URLs (GitHub PRs, blog posts, docs.livepeer.org). Not all may be current. Blog post dates cited. Community tools referenced without verification status. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 7/10 | Heavy external link dependency. Some docs.livepeer.org links may use old URL patterns. YouTube search link (line 285) is a search query, not a direct video link. |
| 9 | PROCESS | 8/10 | `status: current`, `lastVerified: 2026-03-17`. TODO comment present. |
| 10 | COMPLETENESS | 9/10 | Covers all gateway personas and topics. Blog posts and video walkthroughs included. Community SDKs covered. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway guides | OK |
| sidebarTitle | Yes | Guides | OK |
| description | Yes | Curated how-to guides... | OK |
| PageType | Yes | navigation | Capitalisation inconsistent |
| audience | Yes | gateway | OK |
| purpose | Yes | orient | OK |
| status | Yes | current | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| keywords | Yes | 9 items | OK |
| og:image | Yes | gateways.png | OK - audience-specific |

## Findings

1. **LINKS-F1**: YouTube link (line 285) is a search query, not a direct video URL - may return different results over time
2. **LINKS-F2**: Many docs.livepeer.org links may use v1 URL patterns - verify they redirect correctly
3. **STRUCTURE-F1**: TODO comment block (lines 25-30) present but not rendered
4. **FM-F1**: `PageType` capitalisation inconsistent with `pageType` used elsewhere
5. **VERACITY-F1**: External community links (Elite Encoder, j0sh gists) may become stale

## Verdict

**PASS** - Strong index page. Verify external links resolve correctly, especially docs.livepeer.org paths and the YouTube search link.
