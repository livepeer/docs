# Review: Livepeer Marketplace Overview

**File:** `v2/gateways/setup/connect/lp-marketplace.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Livepeer Marketplace" |
| 1. FRONTMATTER | 1.3 description | PASS | Clear |
| 1. FRONTMATTER | 1.4 pageType | PASS | "guide" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 8 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.5 No self-ref | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | WARN | "What is the Marketplace?" is question-led |
| 4. STRUCTURE | 4.1 Purpose | PASS | Marketplace overview |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 28-33: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages section |
| 6. VERACITY | 6.1 Claims citable | PASS | Protobuf structure matches go-livepeer |
| 7. NAV | 7.1 In docs.json | WARN | Referenced in connect.mdx Related Pages but path unclear |
| 8. LINKS | 8.1 Links resolve | PASS | GitHub links present |
| 10. COMPLETENESS | 10.1 Coverage | WARN | "Gateway" section (line 99) is incomplete - heading with no clear narrative |

## Issues

1. **TODO block** at lines 28-33
2. **Question heading:** "What is the Marketplace?" should be entity-led
3. **Missing frontmatter:** complexity, lifecycleStage
4. **No Related Pages** section
5. **Incomplete "Gateway" section** at line 99 - just lists offerings with no narrative
6. **Duplicate content:** This page's marketplace flow overlaps with connect-with-offerings.mdx and publish/connect-with-offerings.mdx
