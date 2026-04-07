# Orchestrator Docs Copy + Style Execution Plan

## Summary

Use `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev` on branch `docs-v2-dev` as the only execution worktree.

This plan is the active process for remediating `v2/orchestrators` content with:
- `copy-framework` fixes first
- `authoring/style` fixes second
- no research work in this execution queue

The active source of truth is:
- execution tracker: `tasks/reports/orchestrator-guides-review/2026-03-16-copy-review-packet/00-master-packet.md`
- tranche/process carry-forward: `v2/orchestrators/_workspace/drafts/docs-section-planning-playbook.md`

Research reports stay on disk for later use, but they are excluded from this queue.

## Execution Model

### Source-of-truth rules
- Use the existing review packet as the basis for all work.
- For copy tasks, use each section’s `01-copy-framework.md`.
- For authoring/style tasks, use both:
  - `02-authoring-style.md`
  - raw `authoring-style-findings.json`
- Treat raw JSON as the source of truth whenever the markdown summary is incomplete.
- Deduplicate repeated warnings into page-level action families. Do not carry line-by-line lint output into the plan.

### Queue shape
Every page gets exactly two execution items:
- `[copy-framework]`
- `[authoring-style]`

`[copy-framework]` includes only:
- opening/value proposition rewrite
- persona/reader routing clarity
- journey/decision-flow repair
- banned word / banned phrase removal
- negative / weakened / conditional construction cleanup
- rendered `REVIEW` or similar copy blockers

`[authoring-style]` includes only:
- code block title / filename / icon metadata
- link / import / MDX issues
- style-guide issues
- glossary / terminology consistency
- frontmatter / quality-policy issues
- component or layout policy issues

### Completion rules
- Strike through a task only after that specific task is complete and the relevant targeted checks have been rerun.
- A page is complete only when both `[copy-framework]` and `[authoring-style]` are struck through.
- A section is complete only when every page task in that section is struck through.
- When a section is complete, strike through the section title and its status line.
- Leave source report references readable.
- Do not use checkboxes in the tracker. Use `~~strikethrough~~` only.

## Execution Order

Process sections strictly in this order:

1. Concepts
2. Quickstart
3. Setup
4. Operator Considerations
5. Deployment Details
6. Workloads & AI
7. Staking & Earning
8. Config & Optimisation
9. Monitoring & Tools
10. Advanced Operations
11. Roadmap & Funding
12. Tutorials

`Staking & Earning` remains one execution section even though its pages span `staking-and-rewards` and `payments-and-pricing`.

## Per-Section Execution Loop

For each section:

1. Read the section’s `01-copy-framework.md`.
2. Read the section’s `02-authoring-style.md`.
3. Read the raw authoring/style JSON for the section.
4. Convert findings into deduplicated page-level `[copy-framework]` and `[authoring-style]` actions in the tracker.
5. Execute all `[copy-framework]` fixes for the section.
6. Execute all `[authoring-style]` fixes for the same section.
7. Rerun targeted section checks.
8. Strike through only the tasks that are actually complete.
9. Run the repo git-hook or pre-commit validation as the final section-close step.
10. Only then move to the next section.

Nav order wins. Do not jump ahead by severity or convenience.

## Validation and Acceptance

### Required targeted checks per section
Run the section-scoped checks that originally produced the queue:
- `lint-copy`
- `lint-structure`
- `lint-patterns`
- targeted style checks
- targeted links/imports checks
- targeted MDX checks
- targeted quality checks
- supplemental docs-authoring-rules checks

### Final section-close gate
After the targeted checks are green:
- run the repo git-hook or pre-commit flow
- treat that as the last validation gate before handoff or commit

### Residual warning policy
A section can still close if residual warnings are:
- false positives from code fences
- false positives from component markup
- other clearly non-prose heuristic noise

If residuals are accepted:
- document them in the section completion note in the tracker
- do not silently ignore them

## Current Status Snapshot

Completed in the tracker:
- Deployment Details
- Workloads & AI
- Staking & Earning
- Config & Optimisation
- Monitoring & Tools
- Advanced Operations
- Roadmap & Funding
- Tutorials

Still queued in the tracker:
- Concepts
- Quickstart
- Setup
- Operator Considerations

## Assumptions

- Work happens only in `Docs-v2-dev`.
- The tracker file is the single active progress surface.
- Research is intentionally excluded from this queue.
- Future tranche planning must use raw authoring/style JSON as well as markdown summaries.
- The repo git-hook or pre-commit run is mandatory as the final validation step, not an optional extra.
