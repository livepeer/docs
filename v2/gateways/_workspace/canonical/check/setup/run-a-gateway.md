# Per-Page Quality Check - `v2/gateways/setup/guide.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page read:** Complete (366 lines)
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** Primary entry point for Setup section. First page under "Gateway Setup" group.
- **Key issue:** Page functions as a navigation/orientation portal but is declared as `guide` + `operate`. Blocking decision needed on pageType.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Operators Guide" | PASS | |
| sidebarTitle | Yes | "Setup Guide" | PASS | |
| description | Yes | "Connect Applications with Video & AI services..." | PASS | UK English, <160 chars |
| pageType | Yes | `guide` | **FLAG** | Structurally functions as `navigation`. Blocking decision needed |
| audience | Yes | `gateway` | PASS | |
| purpose | Yes | `operate` | **FLAG** | Content is orientation, not operations. Should be `orient` if reclassified |
| complexity | Yes | `beginner` | PASS | |
| lifecycleStage | Yes | `discover` | PASS | |
| keywords | Yes | 5 terms | **FAIL** | Too generic: "livepeer", "gateway", "applications", "video". Missing intent terms |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING. Page has `status: current` + `reviewed: true` but no veracityStatus |
| status | Yes | current | PASS | |
| reviewed | Yes | true | PASS | |

**Frontmatter verdict: FAIL - missing veracityStatus + weak keywords + pageType/purpose needs decision**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 9 | 2 | 13 |
| 2. Voice | 11 | 0 | 11 |
| 3. Headings | 7 | 0 | 7 |
| 4. Structure | 7 | 2 | 11 |
| 5. Layout | 8 | 2 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 8 | 1 | 10 |
| 8. Links | 6 | 0 | 6 |
| 9. Process | 0 | 5 | 6 |
| **Total** | **61** | **16** | **84** |

---

**Top 3 issues:**

1. **BLOCKING DECISION: pageType/purpose mismatch.** Page declared as `guide` + `operate` but structurally functions as orientation portal (Accordions with deployment options, Mermaid journey diagram, routes to sub-pages). Does not contain procedural operational content. **Decision required:** Change to `pageType: navigation` + `purpose: orient`, OR restructure as operational guide with actual steps.

2. **Missing `veracityStatus` + unverified evaluative claims.** Line 106: "Linux is recommended for production deployments due to better performance, stability, and compatibility" lacks benchmarks. Line 119: "More widely used in production environments" lacks data. Fix: add `veracityStatus: unverified`, add REVIEW flags to lines 106 and 119.

3. **Typos + hardcoded CSS.** Line 224: "Test **Gatway**" (should be "Gateway"). Line 231: "Connect **Gatway**" (same typo). Also lines 55, 197, 201, 250 have hardcoded margin values instead of CSS custom properties.

**Additional issues:**
- No cross-tab graduation paths (check 7.6). No links to developer/builder sections
- Process/governance: no explicit human sign-off (9.1), gates not met (9.3), phase ordering unclear (9.4)
- TODO comment (lines 27-32) for terminology validation unresolved
- Keywords too generic (check 1.13)

**Notable strengths:** Voice and copy pass all 11 checks. All headings >=20/25 with strong editorial choices ("Gateway Operator Journey" 25/25). Good use of Accordions and Mermaid diagrams. No banned words or phrases.
