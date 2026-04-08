# Review: Bridge LPT to Arbitrum

**File:** `v2/gateways/setup/requirements/on-chain-setup/bridge-lpt-to-arbitrum.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "orient" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 8 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.3 Banned phrases | WARN | "please note" (line 35) |
| 2. VOICE | 2.10 Entity-led | WARN | "This guide will walk tokenholders through..." is user-directed not entity-led |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | LPT bridging instructions |
| 4. STRUCTURE | 4.5 No TODO | PASS | |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 6. VERACITY | 6.1 Claims citable | WARN | Rinkeby testnet references are outdated (Rinkeby deprecated) |
| 6. VERACITY | 6.2 Numbers sourced | WARN | Contract addresses should be verified as current |
| 7. NAV | 7.1 In docs.json | FAIL | Not in nav; old requirements/ path redirected to prepare |
| 8. LINKS | 8.1 Links resolve | WARN | Image links to user-images.githubusercontent.com may break |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true |
| 10. COMPLETENESS | 10.1 Coverage | PASS | L1->L2 and L2->L1 bridging, failure handling |

## Issues

1. **Outdated testnet references:** Rinkeby is deprecated; should reference Arbitrum Sepolia
2. **Not in docs.json** - orphaned by redirect
3. **Missing frontmatter:** complexity, lifecycleStage
4. **Frontmatter casing:** `PageType` should be `pageType`
5. **Voice:** "please note" and "This guide will walk you through" are not entity-led
6. **External images** hosted on user-images.githubusercontent.com - should be migrated to repo assets
7. **No Related Pages** section
8. **Recommendation:** Update testnet references, verify contract addresses, or archive if bridging docs live elsewhere
