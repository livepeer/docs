# Per-Page Quality Check - `v2/gateways/setup/configure/dual-configuration.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** REWRITE REQUIRED

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 13 | 0 | 13 |
| 2. Voice | 7 | 4 | 11 |
| 3. Headings | 5 | 2 | 7 |
| 4. Structure | 6 | 5 | 11 |
| 5. Layout | 8 | 3 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 8 | 2 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 4 | 6 |

**Top 3 issues:**
1. **CRITICAL (lines 43-50):** `<Danger>` block with editorial commentary "This is way too long" and nested `<Expandable>` with TODO checklist in published content. Remove immediately.
2. **CRITICAL: Scope collapse.** Page serves 5 purposes: architecture explanation, configuration flags, deployment examples, troubleshooting, orchestrator setup. Violates one-purpose rule. Split or refocus.
3. **HIGH (lines 314-330):** "Combined Gateway/Orchestrator" section teaches orchestrator configuration, which is out of scope for gateway docs.

**Additional failures:**
- "Overview" heading below 20/25 (banned weak term)
- "Combined Gateway/Orchestrator..." heading 19/25 (too long)
- Line 303: incomplete review comment "# verfiy these" (typo)
- Code blocks untested
- No REVIEW flags on volatile content

**This is the second REWRITE REQUIRED verdict in the Setup section.**
