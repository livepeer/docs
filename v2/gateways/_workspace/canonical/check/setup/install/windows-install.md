# Per-Page Quality Check - `v2/gateways/setup/install/windows-install.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 3 | 13 |
| 2. Voice | 8 | 3 | 11 |
| 3. Headings | 4 | 2 | 7 |
| 4. Structure | 7 | 2 | 11 |
| 5. Layout | 7 | 2 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 9 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 3 | 6 |

**Top 3 issues:**
1. **BLOCKING (lines 41-44, check 8.6):** `<Danger>` callout contains "UNVERIFIED INSTALL DOCS - VERIFY CONTENT" and TODO checklist in published content. Either verify and remove warning, or move page to `_workspace/` draft.
2. **BLOCKING:** Missing frontmatter: complexity, lifecycleStage, veracityStatus. Status field says `draft` but page is in published nav.
3. **MEDIUM:** Headings "Start Gateway" (17/25) and "Tip: Start with Windows" (16/25) below threshold. Rename to "Launch the Gateway" and "Enable Auto-Start on Windows Boot".
