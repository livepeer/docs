# Task 01: Consolidate components and docs/examples (global styles)

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/01-components-consolidate` |
| **First step** | Create the branch: `git checkout -b docs-plan/01-components-consolidate` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/01-components-consolidate-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Reorganise `snippets/components/` into a more logical layout; add documentation and runnable examples for every component; ensure components use global/theme styles (e.g. ThemeData, colours from `snippets/styles/`) rather than ad-hoc imported styles.

## Scope

- All of `snippets/components/` (primitives, layout, display, content, integrations, domain)
- Align with [docs/DRY-and-cleaner-recommendations.md](../DRY-and-cleaner-recommendations.md) (barrel exports, shared callout styles)

## Deliverables

- Updated folder structure
- README or wiki per category
- One runnable example MDX per component (or per export group)
- Audit pass replacing any component-level style imports with global/theme usage

## References

- [snippets/components/README.md](../../snippets/components/README.md)
- [snippets/components/Report.md](../../snippets/components/Report.md)
- DRY recommendations §1.2 (portals), §1.3 (callouts)
