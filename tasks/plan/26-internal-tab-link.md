# Task 26: Internal tab link

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/26-internal-tab-link` |
| **First step** | Create the branch: `git checkout -b docs-plan/26-internal-tab-link` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/26-internal-tab-link-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

**MANDATORY: Before starting:** Read [style-guide.mdx](/v2/pages/07_resources/documentation-guide/style-guide.mdx) and [component-library.mdx](/v2/pages/07_resources/documentation-guide/component-library.mdx). Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Add a link (e.g. on a reference page or another agreed location) that allows users to show or access the **internal** tab/section — so internal docs are discoverable where appropriate.

## Scope

- Decide placement: which page(s) and what label (e.g. "Internal documentation", "Show internal tab").
- Implement the link (URL or in-app toggle if supported by Mintlify).
- Document in internal overview or references so maintainers know where the link lives.

## Deliverables

- Link added to the chosen page(s) with clear label.
- Short note in internal overview or references (or report) describing where and how the internal tab is exposed.
- Report at `docs/PLAN/reports/26-internal-tab-link-report.md`.

## References

- [AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md](AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md) §4.7
- [v2/pages/09_internal/references.mdx](/v2/pages/09_internal/references.mdx) — possible placement
- [v2/pages/09_internal/internal-overview.mdx](/v2/pages/09_internal/internal-overview.mdx)
- Mintlify docs (tabs, navigation) if link behaviour depends on framework
