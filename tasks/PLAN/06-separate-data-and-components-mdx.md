# Task 06: Separate data and components in MDX pages

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/06-separate-data-and-components-mdx` |
| **First step** | Create the branch: `git checkout -b docs-plan/06-separate-data-and-components-mdx` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/06-separate-data-and-components-mdx-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Where MDX pages mix inline data and UI, extract data into separate files (JSON, JS, or MDX data) and keep pages as composition of components + data imports.

## Scope

- Portal pages, long pages with repeated structures
- Align with DRY (portal barrel, PortalLayout)

## Deliverables

- Pattern doc (where data lives, how MDX imports it)
- Refactor of selected pages (e.g. portals) as proof of concept
- List of remaining candidates

## References

- [docs/DRY-and-cleaner-recommendations.md](../DRY-and-cleaner-recommendations.md) §1.2 (PortalLayout, data-driven)
