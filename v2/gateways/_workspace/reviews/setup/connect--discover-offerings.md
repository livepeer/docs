# Review: Discover Marketplace Offerings

**File:** `v2/gateways/setup/connect/discover-offerings.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Discover Compute Offerings" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | Discovery process |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 29-33: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 8. LINKS | 8.1 Links resolve | PASS | GitHub links present |
| 10. COMPLETENESS | 10.1 Coverage | WARN | "Gateway" section (line 99) is vague |

## Issues

1. **TODO block** at lines 29-33
2. **Frontmatter casing:** `PageType` should be `pageType`
3. **Not in docs.json** - orphan page
4. **Near-duplicate** of connect-with-offerings.mdx in same directory
5. **Missing frontmatter:** complexity, lifecycleStage
6. **No Related Pages** section
7. **Recommendation:** Consolidate with connect-with-offerings.mdx or redirect to connect.mdx
