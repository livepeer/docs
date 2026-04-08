# Review: Linux/MacOS Off-Chain Gateway Quickstart TAB VIEW

**File:** `v2/gateways/quickstart/views/linux/linuxOffChainTab.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (embedded view - mostly empty)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | WARN | "Linu/MacOS" - truncated typo |
| 1. FRONTMATTER | 1.3 description | WARN | Dynamic placeholder in description |
| 1. FRONTMATTER | 1.4 pageType | PASS | "instruction" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | FAIL | Missing |
| 1. FRONTMATTER | 1.10 og:image | FAIL | Missing |
| 4. STRUCTURE | 4.5 No TODO | PASS | |
| 4. STRUCTURE | 4.8 Min 2KB | FAIL | Most steps are empty shells |
| 7. NAV | 7.1 In docs.json | N/A | Embedded tab view |
| 10. COMPLETENESS | 10.1 Coverage | FAIL | Steps 2-6 (Configure, Run, Test, Monitor, Tips) are completely empty |

## Issues

1. **Title typo:** "Linu/MacOS" should be "Linux/MacOS"
2. **Empty steps:** Configure, Run, Test, Monitor, and Tips steps have zero content
3. **Missing frontmatter:** keywords, og:image, complexity, lifecycleStage
4. **Dead commented-out code** (lines 45-87) should be removed
5. Only Install step has content (download + extract binary)
6. Users who select the Linux binary tab see an incomplete guide
