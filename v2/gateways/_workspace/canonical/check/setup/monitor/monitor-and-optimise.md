# Per-Page Quality Check - `v2/gateways/setup/monitor/monitor-and-optimise.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** REWRITE REQUIRED

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** Only page in Monitor & Optimise subgroup

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 5 | 4 | 13 |
| 2. Voice | 4 | 5 | 11 |
| 3. Headings | 3 | 4 | 7 |
| 4. Structure | 3 | 7 | 11 |
| 5. Layout | 3 | 6 | 11 |
| 6. Veracity | 2 | 7 | 9 |
| 7. Navigation | 5 | 1 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 3 | 6 |

**Top 3 issues:**
1. **CRITICAL: Page scope is broken.** Covers four unrelated jobs: request routing, payment models, resource allocation, and monitoring. Per check 4.1, one page = one purpose. Split into 2-3 focused pages or completely refactor.
2. **CRITICAL: Page flagged as brainstorming/draft.** Line 39: "Currently operating as a brainstorming page" with `<Danger>` component. Line 83: "(fixme) OpenAPI Spec" placeholder. Page should not be published until reorganised.
3. **HIGH: Description inadequate.** "Monitor & Optimise Gateway Services" is title-copy. Rewrite to describe reader outcome.

**Additional failures:**
- 4 headings below 20/25: "Request Processing Flow (both)" (15/25), "AI Requests" (15/25), "AI Payments" (15/25), "Monitoring" (18/25)
- ResponseField component used in guide context (semantic mismatch, 5.3/5.11)
- Multiple unverified claims with zero REVIEW flags (6.5)
- Payment model claims unsourced (lines 106-120)
- "Scaling Strategies" section reads like brainstorming, not verified content
- Missing `veracityStatus`, `complexity`, `lifecycleStage`

**This is the only REWRITE REQUIRED verdict in the Setup section so far.**
