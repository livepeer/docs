# Task 02: Full audit — unused components

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/02-components-audit-unused` |
| **First step** | Create the branch: `git checkout -b docs-plan/02-components-audit-unused` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/02-components-audit-unused-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Determine which components in `snippets/components/` are never imported or referenced in v2 MDX or docs.json/snippets.

## Scope

- Grep/search for imports and string references to every export from [snippets/components/](../../snippets/components/)
- Include snippets used in `snippets/pages/` and generated content

## Deliverables

- Report (table or list): component name, file, used (Y/N), where used; recommendation (keep / remove / consolidate)
- Save report in repo (e.g. in `docs/PLAN/reports/` or `docs/`) and link from PR

## References

- [snippets/components/README.md](../../snippets/components/README.md)
- [snippets/components/](../../snippets/components/) file list
