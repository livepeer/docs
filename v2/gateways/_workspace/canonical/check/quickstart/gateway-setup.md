# Per-Page Quality Check - `v2/gateways/quickstart/gateway-setup.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: instruction` | `audience: gateway` | `purpose: build`
- **Position in journey:** Primary quickstart. First in Quickstart group.

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 5 | 13 |
| 2. Voice | 7 | 2 | 11 |
| 3. Headings | 5 | 2 | 7 |
| 4. Structure | 8 | 1 | 11 |
| 5. Layout | 9 | 1 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 8 | 0 | 10 |
| 8. Links | 5 | 0 | 6 |
| 9. Process | 0 | 1 | 6 |

**Top 3 issues:**
1. **HIGH (checks 1.6-1.10):** Missing 5 extended frontmatter fields (complexity, lifecycleStage, veracityStatus, industry, niche). `status: current` without `veracityStatus: verified` is invalid.
2. **HIGH (line 74, check 2.3):** Banned self-reference "This page will get you up & running..." Rewrite as imperative: "Get a Livepeer dual AI/video Gateway node up and running..."
3. **MEDIUM (line 273, check 3.2):** "Troubleshooting" heading is on the AVOID list. Rename to specific content: "Common Gateway Setup Issues" or "Debugging Gateway Startup".
