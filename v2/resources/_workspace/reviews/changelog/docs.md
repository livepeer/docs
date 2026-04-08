# Review: v2/resources/changelog/docs.mdx

## Summary

| Field | Value |
|---|---|
| Page | v2/resources/changelog/docs.mdx |
| Type | Changelog |
| Size | 1,224 bytes |
| In Nav | Yes |
| Verdict | **FAIL -- under 2KB, placeholder content** |

## Frontmatter

| Field | Present | Value | Issue |
|---|---|---|---|
| title | Yes | Livepeer Docs Changelog | OK |
| sidebarTitle | Yes | Changelog | WARN: same sidebarTitle as changelog.mdx |
| description | Yes | This changelog tracks... | OK (duplicate of changelog.mdx) |
| PageType | Yes | changelog | WARN: Capital P |
| keywords | Yes | -- | OK |
| og:image | Yes | fallback.png | OK |
| purpose | Yes | changelog | OK |
| audience | Yes | everyone | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| status | **No** | -- | MISSING |

## Heading Score: 15/25

## Category Findings

| Cat | Score | Notes |
|---|---|---|
| 1-FRONTMATTER | 7/10 | PageType casing; status missing; duplicate sidebarTitle with changelog.mdx |
| 2-VOICE | PASS | Minimal content |
| 3-HEADINGS | WARN | Only accordion placeholders |
| 4-STRUCTURE | FAIL | Under 2KB, placeholder accordion with "Title 1" / "Content" |
| 5-LAYOUT | WARN | Uses Card + AccordionGroup but content is placeholder |
| 6-VERACITY | N/A | -- |
| 7-NAV | PASS | In docs.json |
| 8-LINKS | PASS | GitHub link |
| 9-PROCESS | FAIL | Placeholder published in nav |
| 10-COMPLETENESS | FAIL | Placeholder content |

## Verdict

Placeholder changelog with dummy accordion content ("Title 1", "Content"). Under 2KB. Either populate or remove from nav.
