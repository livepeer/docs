# Per-Page Quality Check - `v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** Second in Setup Checklist subgroup (after requirements/setup, before fund-gateway)

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "On-Chain Setup Requirements" | PASS | |
| sidebarTitle | Yes | "On-Chain Setup" | PASS | |
| description | Yes | "This page will take you through..." (~170 chars) | **FAIL** | Self-referential "This page"; exceeds 160 char soft limit |
| pageType | Yes | `guide` | PASS | |
| audience | Yes | `gateway` | PASS | |
| purpose | Yes | `operate` | PASS | |
| complexity | No | | **FAIL** | MISSING. Suggest: `intermediate` |
| lifecycleStage | No | | **FAIL** | MISSING. Suggest: `setup` |
| keywords | Yes | 10 entries | **FAIL** | Poor quality: "livepeer", "chain", "setup", "through", "setting" are noise |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING. status=current but has TODO block (lines 31-36) |
| status | Yes | current | **FLAG** | Claims current but has unresolved TODO block |

**Frontmatter verdict: FAIL - 4 required fields missing/wrong + self-referential description + weak keywords**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter | 6 | 5 | 13 |
| 2. Voice | 9 | 2 | 11 |
| 3. Headings | 5 | 2 | 7 |
| 4. Structure | 8 | 2 | 11 |
| 5. Layout | 9 | 1 | 11 |
| 6. Veracity | 5 | 4 | 9 |
| 7. Navigation | 9 | 0 | 10 |
| 8. Links | 5 | 1 | 6 |
| 9. Process | 0 | 0 | 6 |
| **Total** | **56** | **17** | **84** |

---

**Top 3 issues:**

1. **CRITICAL: status=current with unresolved TODO and missing veracityStatus (checks 1.8, 6.5, 6.6).** Lines 31-36 contain TODO comment. status=current requires veracityStatus=verified AND zero REVIEW flags. Fix: add `veracityStatus: unverified`, replace generic TODO with specific REVIEW flags for CLI flags, RPC providers, and tool commands.

2. **HIGH: Prohibited phrase "simply" for gateway audience (check 2.8, line 351).** "Simply leave the -ethAcctAddr flag empty..." violates gateway audience rules. Fix: "Leave the -ethAcctAddr flag empty and Livepeer will create a new wallet..."

3. **HIGH: 2 headings below 20/25 + H1 hierarchy error.**
   - "Easy Setup with Livepeer Tooling" (line 134, score 17/25): marketing language inappropriate for gateway operators. Rename to "Automated Setup with Livepeer Tooling"
   - "Comprehensive On-Chain Setup Guide" (line 222, score 16/25): vague superlative, positioned as H1 inside page body (structural error). Rename and convert to H2

**Additional issues:**
- Missing frontmatter: complexity, lifecycleStage
- Hardcoded Arbitrum RPC URL `arb1.arbitrum.io/rpc` repeated 3 times (lines 162, 173, 254). Should import from single source (check 4.11)
- Description self-referential + exceeds 160 chars (check 1.11)
- Keywords include noise terms (check 1.13)
- Line 643: bracket syntax error in Vanity-ETH link

**Strengths:** Good procedural flow with StyledSteps. All components approved. Cross-tab links present. Security warnings well-placed. UK English throughout.
