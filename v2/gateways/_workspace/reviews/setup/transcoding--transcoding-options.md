# Review: Configure Transcoding Options

**File:** `v2/gateways/setup/transcoding/transcoding-options.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 7 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | WARN | "customising" not tested - US "customize" not present |
| 2. VOICE | 2.10 Entity-led | WARN | "Use the following as a template" is instruction-directed, acceptable for guide |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | Transcoding JSON config |
| 4. STRUCTURE | 4.5 No TODO | PASS | |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 8. LINKS | 8.1 Links resolve | PASS | |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Docker, Linux, Windows configs covered |

## Issues

1. **Not in docs.json** - orphan page
2. **Frontmatter casing:** `PageType` should be `pageType`
3. **Missing frontmatter:** complexity, lifecycleStage, sidebarTitle
4. **No Related Pages** section
5. Content may now be covered by configure.mdx video configuration view
6. **Recommendation:** Verify whether configure.mdx covers this, then archive or redirect
