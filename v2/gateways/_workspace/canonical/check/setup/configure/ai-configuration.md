# Per-Page Quality Check - `v2/gateways/setup/configure/ai-configuration.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 12 | 1 | 13 |
| 2. Voice | 9 | 2 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 9 | 2 | 11 |
| 5. Layout | 11 | 0 | 11 |
| 6. Veracity | 6 | 3 | 9 |
| 7. Navigation | 10 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 2 | 6 |

**Top 3 issues:**
1. **HIGH (line 36):** Banned phrase "This page will walk you through" in description/opening. Replace with direct imperative.
2. **HIGH (line 49):** "There is currently no Livepeer testnet" is volatile claim. Add REVIEW flag: `{/* REVIEW: Verify current testnet availability */}`
3. **MEDIUM (lines 92, 141):** Placeholder `<orchestrator list>` in code examples. Replace with concrete example or note discovery method.

**Additional:** Missing `veracityStatus`. Line 51-53 discusses testnet in community register, not gateway-operator register. Docker pull command untested. Missing GPU/CPU prerequisite info.
