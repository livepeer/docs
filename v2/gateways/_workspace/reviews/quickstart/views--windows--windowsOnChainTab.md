# Review: Windows On-Chain Gateway Quickstart TAB VIEW

**File:** `v2/gateways/quickstart/views/windows/windowsOnChainTab.mdx`
**Reviewed:** 2026-04-08
**Verdict:** REWRITE (embedded view - completely empty)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 4. STRUCTURE | 4.8 Min 2KB | FAIL | All steps empty |
| 7. NAV | 7.1 In docs.json | N/A | Embedded tab view |
| 10. COMPLETENESS | 10.1 Coverage | FAIL | All 7 steps completely empty |

## Issues

1. **All steps empty:** Install, Configure, Run, Connect, Test, Monitor, Tips - zero content
2. **Frontmatter casing:** `PageType` should be `pageType`
3. **Missing frontmatter:** complexity, lifecycleStage
4. **Below 2KB minimum**
5. Users who select Windows on-chain see a blank guide
