# Per-Page Quality Check - `v2/gateways/setup/install/community-projects.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** REWRITE REQUIRED

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 6 | 5 | 13 |
| 2. Voice | 6 | 5 | 11 |
| 3. Headings | 2 | 4 | 7 |
| 4. Structure | 2 | 7 | 11 |
| 5. Layout | 4 | 5 | 11 |
| 6. Veracity | 3 | 6 | 9 |
| 7. Navigation | 6 | 2 | 10 |
| 8. Links | 4 | 2 | 6 |
| 9. Process | 0 | 4 | 6 |

**Top 3 issues:**
1. **CRITICAL: Scope and pageType violation (4.1, 5.1).** Page conflates two jobs: orienting readers to community projects AND explaining GWID specifically. Marked `pageType: guide, purpose: operate` but is neither. Should be `pageType: navigation, purpose: orient` or split into separate pages.
2. **BLOCKING (lines 40-52, check 8.6):** Draft markers ("Page Not Finalised", TODO checklist, "Coming Soon" card) in published content. Page is `status: draft` but in public nav. Either finish or move to `_workspace/`.
3. **BLOCKING (lines 59, 91, check 2.8):** Banned words "easy" (twice) and "simple" violate gateway audience rules. Rewrite: "GWID automates gateway deployment in one click".

**Additional:** All headings below 20/25. Title too long (6 words with parenthetical). Description vague. YouTubeVideo component may not be in approved matrix.
