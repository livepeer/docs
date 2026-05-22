# Per-Page Quality Check - `v2/gateways/setup/configure/pricing-configuration.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 13 | 0 | 13 |
| 2. Voice | 10 | 1 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 10 | 1 | 11 |
| 5. Layout | 10 | 1 | 11 |
| 6. Veracity | 8 | 1 | 9 |
| 7. Navigation | 10 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 1 | 6 |

**Top 3 issues:**
1. **HIGH (lines 178-225):** "Orchestrator Configuration & Price Information" section teaches orchestrator pricing, not gateway pricing. Out of scope per check 4.6. Move to orchestrator docs or add clear justification for why gateway operators need this.
2. **MEDIUM (lines 143-155):** GitHub links use specific line numbers that can shift. Replace with stable references (tagged release or main branch).
3. **MEDIUM (lines 213-225):** Go code snippet from orchestrator.go lacks source attribution and has not been verified against current codebase.

**Additional:** Minor voice issue (line 51 passive framing). JSON pricing example (line 95-106) untested against go-livepeer parser. Overall strong page with good heading quality (all >=20/25).
