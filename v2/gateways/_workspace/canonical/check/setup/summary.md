# Setup Section - Quality Check Rollup

**Date:** 2026-04-06
**Pages checked:** 20
**Section verdict:** NEEDS WORK (4 pages REWRITE REQUIRED)

---

## Verdicts

| Page | Verdict | Top Issue |
|---|---|---|
| run-a-gateway | NEEDS WORK | pageType/purpose mismatch (guide vs navigation) |
| requirements/setup | NEEDS WORK | purpose wrong (operate vs start) + unverified specs |
| requirements/on-chain | NEEDS WORK | "simply" prohibited + missing veracityStatus + H1 error |
| requirements/fund-gateway | NEEDS WORK | Veracity crisis (hardcoded ETH amounts, mutable Docker tag) |
| install/install-overview | NEEDS WORK | purpose wrong (operate vs orient) + weak headings |
| install/docker-install | NEEDS WORK | Missing frontmatter + negative construction |
| install/linux-install | **REWRITE REQUIRED** | Scope violation (3 tasks) + 5 typos + banned phrase |
| install/windows-install | NEEDS WORK | Unverified content warning in published page |
| install/community-projects | **REWRITE REQUIRED** | Scope/pageType violation + draft markers in nav + banned "easy" |
| configure/configuration-overview | **PASS** | No issues |
| configure/video-configuration | NEEDS WORK | Editorial "Ugh I hate this page" Danger block + empty tabs |
| configure/ai-configuration | NEEDS WORK | Banned phrase + testnet claim needs REVIEW |
| configure/dual-configuration | **REWRITE REQUIRED** | Editorial Danger block + scope collapse (5 purposes) |
| configure/pricing-configuration | NEEDS WORK | Orchestrator section out of scope |
| connect/lp-marketplace | NEEDS WORK | Unclosed code fence + missing veracityStatus |
| connect/discover-offerings | NEEDS WORK | Stale GitHub commit refs |
| connect/connect-with-offerings | NEEDS WORK | Content duplication from discover-offerings |
| setup/monitor/monitor-and-optimise | **REWRITE REQUIRED** | Flagged as brainstorming + scope broken (4 jobs) |

---

## Cross-Section Patterns

### Universal issues (all or nearly all pages)
1. **Missing `veracityStatus` field** - 19/20 pages (only configuration-overview has clean frontmatter)
2. **Missing `complexity` and/or `lifecycleStage`** - 17/20 pages
3. **Unresolved TODO comments** (terminology validation) - present in nearly every page as comment block
4. **No REVIEW flags on volatile content** - code blocks, CLI flags, pricing values all unverified

### Structural issues
5. **2 pages have editorial Danger blocks** in published content (video-configuration line 37: "Ugh I hate this page"; dual-configuration line 43: "This is way too long" + TODO checklist)
6. **3 pages have wrong `purpose` value** - run-a-gateway, setup, install-overview all declare `operate` but function as `orient` or `start`
7. **Content duplication** - discover-offerings and connect-with-offerings share verbatim discovery process (lines 48-87)
8. **Scope violations** - linux-install (3 tasks), dual-configuration (5 purposes), monitor-and-optimise (4 jobs), community-projects (2 jobs)

### Voice issues
9. **Banned word "simply"** - on-chain line 351
10. **Banned word "easy"** - community-projects lines 59, 91
11. **Banned phrase "This guide covers"** - linux-install line 49
12. **Banned phrase "This page will walk you through"** - ai-configuration line 36
13. **Negative value constructions** ("do not require") - docker-install line 48, setup line 45

### Veracity
14. **Stale GitHub commit refs** (`5691cb48`) in discover-offerings and connect-with-offerings
15. **Hardcoded ETH amounts** (0.065/0.03/0.36) in fund-gateway without source
16. **Mutable Docker tag** (`livepeer/go-livepeer:master`) in fund-gateway line 191
17. **5 typos** in linux-install ("bre" x2, "Gtihub" x2, broken URL path)

---

## Priority Actions

### P0 - Remove before shipping
1. Remove editorial Danger blocks from video-configuration and dual-configuration
2. Fix 5 typos in linux-install
3. Remove draft markers from community-projects or move to _workspace

### P1 - Fix before next review
4. Add `veracityStatus: unverified` to all 19 pages missing it
5. Add `complexity` and `lifecycleStage` to 17 pages
6. Resolve purpose mismatches (run-a-gateway, setup, install-overview)
7. Consolidate discover-offerings + connect-with-offerings (remove duplication)
8. Add REVIEW flags to all unverified CLI commands and hardcoded data

### P2 - Fix during section IA co-design
9. Split or refocus scope-violated pages (linux-install, dual-config, monitor, community-projects)
10. Rename weak headings (15+ headings below 20/25 across section)
11. Replace banned words/phrases
12. Source or parameterise hardcoded ETH amounts and RPC URLs
