# Task 24: Audit repo files — what to remove

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/24-audit-repo-files-removal` |
| **First step** | Create the branch: `git checkout -b docs-plan/24-audit-repo-files-removal` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/24-audit-repo-files-removal-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

**MANDATORY: Before starting:** Read style-guide.mdx and component-library.mdx. Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Perform a repo-wide file audit to identify dead code, duplicate assets, obsolete scripts, old v1 leftovers, and other candidates for removal or consolidation.

## Scope

- Whole repository (excluding standard tooling folders such as node_modules/ as agreed).
- Output: structured list of files/directories with a recommendation for each (keep / remove / merge / archive).
- Do not remove files in this task without approval; deliver the report and optional follow-up PRs for removals.

## Deliverables

- Report at docs/PLAN/reports/24-audit-repo-files-removal-report.md with: summary of findings; tables or lists (path, type, recommendation, rationale); suggested follow-up PRs.
- Optional: small PRs that perform agreed removals, linked from the report.

## References

- AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md (section 4.5)
- complete/02-components-audit-unused-report.md
- complete/14-audit-v1-to-v2-coverage-report.md
