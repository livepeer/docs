# Review: Discover & Connect Marketplace Compute Services

**File:** `v2/gateways/setup/connect/connect-with-offerings.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Discover & Connect Services" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 3. HEADINGS | 3.1 Score | WARN | "How to Discover & Connect..." is wordy |
| 4. STRUCTURE | 4.1 Purpose | PASS | Discovery and connection |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 29-33: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 10. COMPLETENESS | 10.1 Coverage | WARN | Content largely duplicates discover-offerings.mdx |

## Issues

1. **TODO block** at lines 29-33
2. **Frontmatter casing:** `PageType` should be `pageType`
3. **Not in docs.json** - orphan
4. **Near-duplicate** of discover-offerings.mdx - same Go structs, same sections
5. **Missing frontmatter:** complexity, lifecycleStage
6. **Recommendation:** Consolidate - one of these two pages should be deleted
