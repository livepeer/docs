# Per-Page Quality Check - `v2/gateways/setup/install/linux-install.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** REWRITE REQUIRED

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 3 | 13 |
| 2. Voice | 6 | 5 | 11 |
| 3. Headings | 4 | 2 | 7 |
| 4. Structure | 5 | 5 | 11 |
| 5. Layout | 7 | 3 | 11 |
| 6. Veracity | 4 | 5 | 9 |
| 7. Navigation | 8 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 3 | 6 |

**Top 3 issues:**
1. **CRITICAL: Scope violation (4.1).** Page conflates three separate tasks: installing prerequisites (110 lines for wget/tar), downloading binary, running gateway. Lines 302-364 contain "OLD DOCS ITEMS (move to config)" duplicating content from other pages. Split or refocus.
2. **BLOCKING (line 49, check 2.3):** Banned phrase "This guide covers" in opening.
3. **BLOCKING: 5 typos/errors** indicating insufficient QA:
   - Line 119: "bre upgrade" (should be "brew upgrade")
   - Line 145: "bre upgrade" (repeat)
   - Line 166: "Gtihub API" (should be "GitHub API")
   - Line 182: "Gtihub API" (repeat)
   - Line 324: uses `jsx` code block for bash script

**Additional:** Missing frontmatter fields. Package manager commands untested. Lines 302-364 deprecated section in published content.
