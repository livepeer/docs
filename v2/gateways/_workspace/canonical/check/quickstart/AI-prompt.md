# Per-Page Quality Check - `v2/gateways/quickstart/AI-prompt.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: instruction` | `audience: gateway` | `purpose: build`
- **Position in journey:** Third in Quickstart group. AI-assisted setup prompt delivery page.

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 8 | 5 | 13 |
| 2. Voice | 8 | 1 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 6 | 3 | 11 |
| 5. Layout | 9 | 1 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 7 | 2 | 10 |
| 8. Links | 4 | 1 | 6 |
| 9. Process | 0 | 1 | 6 |

**Top 3 issues:**
1. **CRITICAL (check 1.8):** Missing `veracityStatus` field. `status: current` requires it. Prompt content depends on agent execution and user environment, so set `veracityStatus: unverified`.
2. **HIGH (lines 220, 228, check 6.4):** Unverified ETH amounts (0.065, 0.036, 0.5+) hardcoded in prompt without source citation. Volatile values need REVIEW flags and cross-reference to on-chain requirements page.
3. **MEDIUM (check 7.6):** Page is navigation-isolated. No "Related Pages" section. No links to gateway-setup.mdx or byoc-cpu-tutorial.mdx. Add next-steps section with alternative setup paths.

**Additional:** Dual-purpose page (meta-instruction + prompt delivery) creates slight scope ambiguity (check 4.1). Missing extended frontmatter fields.
