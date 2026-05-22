# Phase Gate Checklist

> Before starting any phase, verify these conditions are met.
> If ANY required input is missing → STOP. Do not proceed.

---

| Phase | Required inputs | How to verify |
|---|---|---|
| **00 — Audience** | Discord/GitHub/Forum signals for the tab | Human has collected 10-20 real user questions |
| **01 — Research** | Approved Phase 00 output | `_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/{TAB}/index.md` exists AND has "Check B validation passed" |
| **02 — Content Gathering** | Approved tab map from Phase 01 | Tab map exists with page dispositions (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP) |
| **03 — IA Mapping** | Tab map + gap analysis from Phase 01 | Tab map exists AND gaps are classified P0/P1/P2 |
| **04 — Page Briefs** | IA mapping from Phase 03 + research packs from Phase 02 | Every page has a frontmatter contract AND every WRITE page has a research pack |
| **05 — Journey Validation** | Page briefs from Phase 04 | Briefs exist with entry/exit states for all WRITE/REWRITE pages |
| **06 — Content Writing** | Page briefs + research packs + exemplar | Brief exists, research pack exists, relevant exemplar identified |
| **07 — Veracity** | Draft page from Phase 06 (quality gate PASSED) | `page-quality-gate.sh` returns PASS on the page |
| **08 — Layout & Sign-off** | Verified page from Phase 07 (veracityStatus set) | veracityStatus field present in frontmatter |
| **FEEDBACK** | All tab pages passed Phase 08 | Human signed off on all pages for the tab |

---

## Quick command to verify gate

```bash
# Check if Phase 06 gate is met for a specific page:
./workspace/plan/active/_MY_PROCESS/tools/page-quality-gate.sh v2/{tab}/{section}/{page}.mdx

# If PASS → proceed to Phase 07
# If FAIL → fix violations, re-run Phase 06
```
