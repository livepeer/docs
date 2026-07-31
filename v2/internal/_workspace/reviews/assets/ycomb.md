# Review: ycomb.mdx

| Field | Value |
|---|---|
| **File** | `v2/internal/assets/transcripts/ycomb.mdx` |
| **Reviewer** | Claude (automated audit) |
| **Date** | 2026-04-08 |
| **Verdict** | NEEDS WORK -- large transcript asset with frontmatter gaps |

## Summary

Y Combinator podcast RSS feed transcript. Very large file (323KB+). Contains podcast metadata and 296 episode transcripts. This is a research asset, not a user-facing documentation page.

## Frontmatter Table

| Field | Present | Value | Conformant |
|---|---|---|---|
| title | Yes | Y Combinator Startup Podcast | OK |
| sidebarTitle | Yes | RSS Feed | OK |
| description | Yes | Full podcast description | OK |
| Keywords | Yes | 4 items | WARN -- capitalised "Keywords" (should be lowercase) |
| og:image | Yes | fallback.png | OK |
| og:image:alt | Yes | Present | OK |
| pageType | No | -- | MISSING |
| purpose | No | -- | MISSING |
| audience | No | -- | MISSING |
| lastVerified | No | -- | MISSING |

## Heading Score Table

| Criterion | Score | Notes |
|---|---|---|
| H1 present | Yes | Y Combinator Startup Podcast |
| Heading hierarchy | OK | H1 > episode headings |

## Category Findings

| Cat | Status | Notes |
|---|---|---|
| 1 FRONTMATTER | PARTIAL | Missing pageType, purpose, audience, lastVerified; "Keywords" capitalised |
| 2 VOICE | EXEMPT | Research transcript asset |
| 3 HEADINGS | PASS | H1 present |
| 4 STRUCTURE | PASS | Single-purpose asset |
| 5 LAYOUT | EXEMPT | Transcript asset, not a docs page |
| 6 VERACITY | EXEMPT | Raw transcript |
| 7 NAV | WARN | Not in docs.json (linked from index.mdx) |
| 8 LINKS | PASS | RSS feed URL present |
| 9 PROCESS | EXEMPT | Research asset |
| 10 COMPLETENESS | PASS | Complete transcript collection |

## Verdict

**NEEDS WORK.** Fix capitalised "Keywords" to "keywords". Add missing frontmatter fields (pageType, purpose, audience, lastVerified). Consider whether this 323KB file belongs in the served docs or should be moved to a workspace/assets location.
