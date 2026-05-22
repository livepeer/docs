# Check Run Decision Log

Tracks decisions and adjustments made during the per-page quality check run.

## Run Info
- **Date:** 2026-03-24
- **Checks source:** `v2/orchestrators/_workspace/canonical/checks.mdx`
- **Pages:** 70 orchestrator pages from docs.json nav

## Decisions

| # | Decision | Reason | Date |
|---|----------|--------|------|
| 1 | Run checks in batches of 3 agents | User instruction — stay available in chat | 2026-03-24 |
| 2 | Report per page in matching folder structure | User instruction | 2026-03-24 |
| 3 | Pause after first 3 for user feedback | User instruction — calibrate before scaling | 2026-03-24 |

## Adjustments After Batch 1 Critical Review

| # | Adjustment | Source |
|---|-----------|--------|
| 4 | `industry`/`niche` are optional — do not flag as missing required fields | All 3 reviews: FP on checks 1.9/1.10 |
| 5 | Heading scores must show 5-dimension breakdown or don't score | Navigator + portal reviews |
| 6 | All fixes must specify concrete values | All 3 reviews: vague fixes |
| 7 | All 9×N checks must appear in report — N/A with reason if skipped | Navigator review: silent omission |
| 8 | Add spelling/typo pass, dead import check, component matrix cross-ref | Portal + index reviews: missed findings |
| 9 | For generated pages, read the generation script before reporting | Index review |
| 10 | Connect related findings across categories | Portal review: status/veracity/TODO fragmentation |

## Decisions from User Feedback (Batch 1)

| # | Decision | Detail | Date |
|---|----------|--------|------|
| 11 | Navigation pages allow second-person voice | "Find Your Path", "Choose Your Starting Point" — allowed | 2026-03-24 |
| 12 | index.mdx — leave in place | But checker must detect auto-generated pages FIRST and adjust expectations | 2026-03-24 |
| 13 | Components not in preferred column → flag | Accordion/Note/StyledTable on navigation pages = flag, don't approve | 2026-03-24 |
| 14 | `industry`/`niche` are NOT optional | Critical reviews were wrong — these are required fields. Keep as findings. | 2026-03-24 |
| 15 | Vague fixes are unacceptable | Every fix must be executable by another agent with zero additional context | 2026-03-24 |
| 16 | 5-dimension heading score breakdown required | Yes for every heading — no invented aggregates | 2026-03-24 |
| 17 | Cross-category connections section required | Link related findings to single root cause | 2026-03-24 |
| 18 | All numbered checks must appear in report | PASS or N/A with reason — nothing silently skipped | 2026-03-24 |
| 19 | Banned construction scan protocol required | List every can/may/could/might sentence, classify each | 2026-03-24 |
| 20 | Link verification via existing script | Don't manually ls — use the project's link check script | 2026-03-24 |
| 21 | Component matrix — just flag obvious issues | No full cross-reference table needed | 2026-03-24 |
| 22 | Dead import detection — skip | Not a content quality issue for this run | 2026-03-24 |
| 23 | Spelling/typo pass required | Systematic scan on all visible text | 2026-03-24 |
| 24 | Generated pages — read generation script first | Root cause over symptoms | 2026-03-24 |
| 25 | TESTED/NOT-TESTED labels on veracity findings | Every claim explicitly labelled | 2026-03-24 |
| 26 | Re-run Batch 1 with improved prompt | Validate before scaling to 67 pages | 2026-03-24 |
