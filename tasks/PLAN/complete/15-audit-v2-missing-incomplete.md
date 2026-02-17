# Task 15: Audit — v2 missing or incomplete pages

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/15-audit-v2-missing-incomplete` |
| **First step** | Create the branch: `git checkout -b docs-plan/15-audit-v2-missing-incomplete` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/15-audit-v2-missing-incomplete-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Full audit of v2 docs: list pages that are missing (planned in nav but no content), placeholder-only, or incomplete (e.g. Coming soon, empty sections).

## Scope

- Every entry in docs.json that points to v2 MDX
- Internal status if available (e.g. docs-status-table)

## Deliverables

- Report: page path, issue (missing / placeholder / incomplete), suggested action

## References

- snippets/generated/docs-status-table.mdx
- v2/pages/09_internal/docs-status.mdx
- docs.json
