# Review: knowledge-hub/help.mdx

**Path:** `v2/gateways/resources/knowledge-hub/help.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Comprehensive help and support channel reference. Well-organised quick reference table routing users to the correct channel. Covers Discord, forum, GitHub Issues, office hours, hosted platform support, security reporting, grants, and social channels. Excellent structure and completeness.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 9/10 | All required fields. `PageType: navigation` with `purpose: orient`. OG image uses gateways-specific image. |
| 2 | VOICE | 9/10 | Clean, direct prose. Entity-led. No banned words. No em-dashes. Good use of imperative voice in tips. |
| 3 | HEADINGS | 10/10 | 9 H2 headings. Clear hierarchy. No questions in headings. |
| 4 | STRUCTURE | 9/10 | Single purpose (help routing). Quick reference table at top for fast navigation. TODO comment in MDX comment. Well above 2KB (14KB). |
| 5 | LAYOUT | 9/10 | Quick reference table + AccordionGroup for Discord + CardGroup for other channels. Warning callouts for security reporting. Good CTA at bottom. |
| 6 | VERACITY | 8/10 | Channel descriptions are accurate. Discord channel names and purposes are specific. Named individuals (j0sh, Qiang Han) may change roles. |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | External links to Discord, GitHub, Immunefi. Multiple Discord invite links (discord.gg/livepeer). Email link for Studio support. All appear valid. |
| 9 | PROCESS | 8/10 | `status: current`, `lastVerified: 2026-03-13`. TODO comment present. |
| 10 | COMPLETENESS | 10/10 | Covers every support channel. Routing table helps users find the right channel immediately. Security reporting prominently warned. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | Gateway help | OK |
| sidebarTitle | Yes | Get help | OK |
| description | Yes | Every channel available to get help... | OK |
| PageType | Yes | navigation | Capitalisation inconsistent |
| audience | Yes | gateway | OK |
| purpose | Yes | orient | OK |
| status | Yes | current | OK |
| lastVerified | Yes | 2026-03-13 | OK |
| keywords | Yes | 8 items | OK |
| og:image | Yes | gateways.png | OK |

## Findings

1. **FM-F1**: `PageType` capitalisation inconsistent with `pageType` used elsewhere
2. **STRUCTURE-F1**: TODO comment block (lines 23-28) present but not rendered
3. **VERACITY-F1**: Named individuals (j0sh, Peter, Qiang Han) - roles may change; consider role-based references

## Verdict

**PASS** - Excellent help routing page. One of the strongest pages in this section.
