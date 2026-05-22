# Review: MacOS Support

**File:** `v2/gateways/quickstart/groups/linux/macSupport.mdx`
**Reviewed:** 2026-04-08
**Verdict:** REWRITE

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | "MacOS Support" |
| 1. FRONTMATTER | 1.2 sidebarTitle | FAIL | Missing |
| 1. FRONTMATTER | 1.3 description | FAIL | "This section is a work in progress." - not a real description |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "build" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 8 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | N/A | Insufficient content |
| 4. STRUCTURE | 4.1 Purpose | FAIL | No actual content |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Entire page is a WIP placeholder |
| 4. STRUCTURE | 4.8 Min 2KB | FAIL | ~0.5KB - far below minimum |
| 5. LAYOUT | 5.1 Template | FAIL | No structure at all |
| 7. NAV | 7.1 In docs.json | N/A | Embedded component |
| 10. COMPLETENESS | 10.1 Coverage | FAIL | Zero content |

## Issues

1. **Empty stub page** - only contains a WIP warning banner
2. **Description** is a placeholder, not descriptive
3. **Below 2KB minimum** - needs actual macOS support content (limitations, what works, what does not)
4. **Frontmatter casing:** `PageType` should be `pageType`
5. Should document: macOS is dev/local only, video-only, Docker unreliable, build from source required
