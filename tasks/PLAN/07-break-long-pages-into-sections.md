# Task 07: Break long pages into logical sections

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/07-break-long-pages-into-sections` |
| **First step** | Create the branch: `git checkout -b docs-plan/07-break-long-pages-into-sections` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/07-break-long-pages-into-sections-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Identify v2 pages that are too long or dense; split into logical child pages or anchored sections with clear headings and nav.

## Scope

- All [v2/pages/](../../v2/pages/) MDX
- Use line count, heading depth, and readability heuristics

## Deliverables

- List of pages to split
- Suggested new page/section boundaries
- Update docs.json nav where new pages are added

## References

- docs.json navigation
- Existing SUMMARY/README patterns in sections
