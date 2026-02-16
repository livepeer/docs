# Task 22: Page imports check script

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/22-page-imports-check-script` |
| **First step** | Create the branch: `git checkout -b docs-plan/22-page-imports-check-script` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/22-page-imports-check-script-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

**MANDATORY: Before starting:** Read [style-guide.mdx](/v2/pages/07_resources/documentation-guide/style-guide.mdx) and [component-library.mdx](/v2/pages/07_resources/documentation-guide/component-library.mdx). Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Ensure that for every MDX page, if it uses a component that depends on a Mintlify (or other) component, that dependency is imported in the MDX — because **the MDX controls imports** in this stack.

## Scope

- Define rules: which custom components require which Mintlify (or other) imports when used in MDX.
- Implement a script (e.g. in `v2/scripts/` or `snippets/scripts/`) that parses MDX files and component usage and verifies required imports are present.
- Optionally integrate into CI or pre-commit.

## Deliverables

- Script that checks MDX pages for required imports based on component usage.
- Short documentation (in style guide or component library, or a dedicated doc) describing the rule and how to run the script.
- Report at `docs/PLAN/reports/22-page-imports-check-script-report.md` with implementation details, limitations, and follow-ups.

## References

- [AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md](AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md) §4.1
- [style-guide.mdx](/v2/pages/07_resources/documentation-guide/style-guide.mdx) (Mintlify gotchas, import paths)
- [component-library.mdx](/v2/pages/07_resources/documentation-guide/component-library.mdx)
- `snippets/components/` — custom components that may depend on Mintlify components
