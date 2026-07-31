# Per-Page Quality Check - `v2/gateways/setup/requirements/setup.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page read:** Complete (202 lines)
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** First in Setup Checklist subgroup. Before on-chain and fund-gateway.
- **Key issue:** Purpose mismatch. Content is pre-setup checklist (`start`), not day-to-day management (`operate`).

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Node Requirements" | PASS | |
| sidebarTitle | Yes | "Requirements" | PASS | |
| description | Yes | "Learn about the hardware, network, and software requirements..." | PASS | Subject-first, <=160 chars |
| pageType | Yes | `guide` | PASS | |
| audience | Yes | `gateway` | PASS | |
| purpose | Yes | `operate` | **FAIL** | Should be `start` or `configure`. Content is prerequisites, not operations |
| complexity | No | | **FAIL** | MISSING. Suggest: `beginner` |
| lifecycleStage | No | | **FAIL** | MISSING. Suggest: `setup` |
| keywords | Yes | Present | PASS | Specific, intent-aligned |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING |
| status | Yes | draft | PASS | Appropriate for current state |

**Frontmatter verdict: FAIL - 4 issues (purpose wrong + 3 missing fields)**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 7 | 4 | 13 |
| 2. Voice | 7 | 4 | 11 |
| 3. Headings | 5 | 2 | 7 |
| 4. Structure | 5 | 5 | 11 |
| 5. Layout | 8 | 2 | 11 |
| 6. Veracity | 2 | 5 | 9 |
| 7. Navigation | 9 | 0 | 10 |
| 8. Links | 5 | 0 | 6 |
| 9. Process | 3 | 0 | 6 |
| **Total** | **51** | **22** | **84** |

---

**Top 3 issues:**

1. **CRITICAL: Purpose mismatch.** Frontmatter `purpose: operate` but content is a pre-setup checklist. All downstream systems (voice rules, component templates, info type mapping) derive from purpose. Fix: change to `purpose: start`.

2. **CRITICAL: Unverified hardware/network specs.** All numeric claims (2 cores min, 4 GB RAM, 50 Mbps, etc. at lines 100-103) lack sources or REVIEW flags. No `veracityStatus` field. Fix: add REVIEW flags to all specs, set `veracityStatus: unverified`, source against go-livepeer docs or test deployments.

3. **HIGH: Voice violations.** Line 45: "Gateway nodes do **not require** NVIDIA GPU drivers" is negative value statement (state positive instead). Lines 60, 153: "You **can run** a gateway" is passive value claim. Line 87: hedging close "Or know how to ask AI for help :)". Fix: reframe to positive assertions, remove hedging.

**Additional issues:**
- 2 headings below 20/25: "Setup Requirements" (16/25, generic), "Additional Requirements" (14/25, vague). Rename to concept-derived headings
- Content duplication: Deployment Modes explained twice (lines 58-61 vs 155-156)
- Missing Overview section (required for `guide` pageType)
- Only 2 cross-tab links (need >=3)
- Hardware/network specs potentially hardcoded instead of imported from data file (check 4.11)
