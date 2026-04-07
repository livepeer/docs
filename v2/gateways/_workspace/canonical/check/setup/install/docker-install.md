# Per-Page Quality Check - `v2/gateways/setup/install/docker-install.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 3 | 13 |
| 2. Voice | 9 | 1 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 10 | 1 | 11 |
| 5. Layout | 10 | 0 | 11 |
| 6. Veracity | 7 | 2 | 9 |
| 7. Navigation | 9 | 0 | 10 |
| 8. Links | 5 | 0 | 6 |
| 9. Process | 0 | 1 | 6 |

**Top 3 issues:**
1. **MEDIUM (line 48-50):** Negative value construction "do not require NVIDIA GPU drivers" violates check 2.4. Reframe as positive.
2. **BLOCKING:** Missing frontmatter: complexity, lifecycleStage, veracityStatus.
3. **MEDIUM (lines 96, 105-106):** Hardcoded transcodingOptions profiles. Check if canonical data source exists.

**Strongest page in the install section.** All headings >=20/25. Good procedural flow with Prerequisites, Steps, Next Steps.
