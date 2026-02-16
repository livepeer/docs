# Task 27: Pre-commit full browser verification

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/27-pre-commit-full-browser-verification` |
| **First step** | Create the branch: `git checkout -b docs-plan/27-pre-commit-full-browser-verification` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/27-pre-commit-full-browser-verification-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

**MANDATORY: Before starting:** Read [style-guide.mdx](/v2/pages/07_resources/documentation-guide/style-guide.mdx) and [component-library.mdx](/v2/pages/07_resources/documentation-guide/component-library.mdx). Run the first step (create branch), then perform the task.

On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Ensure the pre-commit hook verifies that **all** docs pages (or a defined critical subset) still run in the browser, and that this check **cannot be skipped** — so broken pages cannot be committed.

## Scope

- Current behaviour: pre-commit runs the test suite with `--skip-browser` (see `.githooks/pre-commit` and the test runner).
- Change: run browser verification on every commit; remove or bypass the "skip browser" option for the pre-commit context.
- If the full suite is too slow, define a **smoke set** of pages that must load (e.g. key landing pages, one per section) and document the choice.
- Update `docs/CONTRIBUTING/GIT-HOOKS.md` to describe the new behaviour and that the check must not be skipped.

## Deliverables

- Updated pre-commit hook (and test runner if needed) so browser verification runs and is not skippable for pre-commit.
- Documentation in `docs/CONTRIBUTING/GIT-HOOKS.md` (what runs, smoke set if used, and that the check must not be skipped).
- Report at `docs/PLAN/reports/27-pre-commit-full-browser-verification-report.md` with implementation details, trade-offs, and follow-ups.

## References

- [AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md](AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md) §4.8
- [.githooks/pre-commit](/.githooks/pre-commit) — current hook
- [docs/CONTRIBUTING/GIT-HOOKS.md](/docs/CONTRIBUTING/GIT-HOOKS.md)
- Test runner (e.g. `tests/run-all.js`) and browser test configuration
