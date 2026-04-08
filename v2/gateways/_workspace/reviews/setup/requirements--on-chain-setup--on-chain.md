# Review: On-Chain Setup Requirements

**File:** `v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (redirected page)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Comprehensive |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | WARN | "This page will take you through..." is user-directed |
| 4. STRUCTURE | 4.1 Purpose | PASS | On-chain setup guide |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 30-35: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | Substantial |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 7. NAV | 7.1 In docs.json | FAIL | Redirected to /v2/gateways/setup/prepare |
| 8. LINKS | 8.1 Links resolve | PASS | |
| 10. COMPLETENESS | 10.1 Coverage | PASS | RPC, wallet, keystore, funding, security |

## Issues

1. **Redirected** in docs.json to `/v2/gateways/setup/prepare` - this page should not be independently maintained
2. **TODO block** at lines 30-35
3. **Frontmatter casing:** `PageType` should be `pageType`
4. **Missing frontmatter:** complexity, lifecycleStage
5. **Content superseded** by `prepare.mdx` On-chain tab
6. **Recommendation:** Content has been promoted to prepare.mdx - archive this page or ensure redirect works
