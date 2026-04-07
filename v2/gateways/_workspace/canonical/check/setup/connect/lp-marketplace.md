# Per-Page Quality Check - `v2/gateways/setup/connect/lp-marketplace.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** First in Network Connect subgroup

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 4 | 13 |
| 2. Voice | 9 | 2 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 8 | 2 | 11 |
| 5. Layout | 9 | 1 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 7 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 2 | 6 |

**Top 3 issues:**
1. **CRITICAL (line 262):** Unclosed code fence breaks rendering. Diagram block ends with incomplete fence.
2. **HIGH (1.8):** Missing `veracityStatus` field.
3. **HIGH (2.3, 1.11):** Description uses banned self-referential phrase "This page provides". Line 43-44 opens with mechanism before benefit.

**Additional:** Protobuf message (lines 179-191) hardcoded without source. Terminology validation TODO (lines 28-33) unresolved.
