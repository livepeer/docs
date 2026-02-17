# Task 08: Automation and scripts (SEO, i18n, links, spelling, component library)

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/08-automation-and-scripts` |
| **First step** | Create the branch: `git checkout -b docs-plan/08-automation-and-scripts` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/08-automation-and-scripts-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Propose and document automation/scripts for: SEO (sitemap, canonical, meta); language translation pipeline; broken link checking; automated link updates; spelling (e.g. English UK); component library doc generation; and related CI jobs.

## Scope

- Scripts in [v2/scripts/](../../v2/scripts/), [snippets/scripts/](../../snippets/scripts/), [.github/workflows/](../../.github/workflows/)
- Consolidate per [docs/DRY-tasks-feasibility-report.md](../DRY-tasks-feasibility-report.md) §2

## Deliverables

- Written proposal (in this file or a separate design doc) with script list, CI integration, and tool suggestions (e.g. lychee, cspell, i18n plugin)
- Prioritised (must-have vs nice-to-have)

## References

- [.github/workflows/broken-links.yml](../../.github/workflows/broken-links.yml)
- seo-generator-safe.js; add-callouts
- [docs/docs-v2-rfp-task-list-and-plan.md](../docs-v2-rfp-task-list-and-plan.md) (SEO, i18n, zero broken links)
