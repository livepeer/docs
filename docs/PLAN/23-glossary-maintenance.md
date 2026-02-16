# Task 23: Glossary maintenance

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/23-glossary-maintenance` |
| **First step** | Create the branch: `git checkout -b docs-plan/23-glossary-maintenance` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/23-glossary-maintenance-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

**MANDATORY: Before starting:** Read style-guide.mdx and component-library.mdx. Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Ensure the docs glossary stays up to date: new terms are added, deprecated terms are marked or removed, and cross-links are maintained.

## Scope

- Identify where the glossary lives (e.g. single MDX or fragment in the repo).
- Define a maintenance process: who adds/updates terms, review cadence, and how changes are proposed (e.g. PR, issue template).
- Optionally: a script that extracts candidate terms from docs and flags missing glossary entries (or orphan glossary terms).

## Deliverables

- Process document (in resources or CONTRIBUTING) describing glossary maintenance.
- Optional script or checklist for keeping the glossary in sync with content.
- A "Glossary maintenance" subsection or reference in the contribution guide.
- Report at docs/PLAN/reports/23-glossary-maintenance-report.md.

## References

- AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md (section 4.4)
- 12-contribution-guide-full-and-stretch.md
- Glossary page(s) in v2/pages/ (locate via docs.json or nav)
