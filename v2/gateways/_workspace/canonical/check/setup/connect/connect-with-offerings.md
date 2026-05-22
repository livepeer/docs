# Per-Page Quality Check - `v2/gateways/setup/connect/connect-with-offerings.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** Third in Network Connect subgroup

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 3 | 13 |
| 2. Voice | 9 | 2 | 11 |
| 3. Headings | 5 | 1 | 7 |
| 4. Structure | 6 | 3 | 11 |
| 5. Layout | 9 | 1 | 11 |
| 6. Veracity | 4 | 5 | 9 |
| 7. Navigation | 7 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 2 | 6 |

**Top 3 issues:**
1. **CRITICAL (lines 48-87):** Content duplication from discover-offerings.mdx. Entire discovery process section is verbatim copy. Per check 4.8, consolidate into one page or differentiate content.
2. **HIGH (lines 50, 59, 72):** Stale GitHub commit refs (`5691cb48`). Update references.
3. **MEDIUM (line 89):** Heading "Gateway" too vague (15/25). Rename to "Gateway Offering Attributes".

**Additional:** Missing `veracityStatus`. Self-referential description. Terminology TODO unresolved. ResponseField component used in guide context (semantic mismatch).
