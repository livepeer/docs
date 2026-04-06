---
name: docs-review-fix-execution
version: "1.0"
description: >-
  Execute approved docs review packet fixes section by section so copy and
  style tasks close in tracker order, validations rerun, and completion state
  stays trustworthy.
tier: 2
invoke_when:
  - "execute fixes from this review packet"
  - "work through the tracker section by section"
  - "apply copy and style fixes from the packet"
  - "close out review packet tasks and update the tracker"
primary_paths:
  - "tasks/reports"
  - "ai-tools/ai-skills/docs-copy/SKILL.md"
  - "ai-tools/ai-skills/page-authoring/SKILL.md"
  - "docs-guide/tooling/review-packet-plan-template.md"
  - "tools/scripts/lint-copy.js"
  - "tools/scripts/lint-structure.js"
  - "tools/scripts/lint-patterns.js"
primary_commands:
  - "node tools/scripts/lint-copy.js [file-or-glob]"
  - "node tools/scripts/lint-structure.js [file]"
  - "node tools/scripts/lint-patterns.js [file-or-glob]"
  - "node tests/unit/copy-lint.test.js --files [csv]"
  - "bash .githooks/pre-commit"
  - "node tests/run-pr-checks.js --base-ref docs-v2-dev"
---

SKILL: Docs Review Fix Execution

Goal
Execute approved packet fixes section by section, update tracker state safely, and close sections only after scoped validation passes.

Constraints
- Start from an approved packet. Do not regenerate packet scope when the packet already exists.
- Use the packet as the only execution source-of-truth: `00-master-packet.md`, `01-copy-framework.md`, `02-authoring-style.md`, and raw `authoring-style-findings.json`.
- Run copy fixes before authoring-style fixes inside each approved section.
- Use `ai-tools/ai-skills/docs-copy/SKILL.md` for copy-framework work and `ai-tools/ai-skills/page-authoring/SKILL.md` for authoring-style fixes instead of re-inventing those standards here.
- Keep research-driven edits out of scope unless the user explicitly reopens research as part of the execution tranche.
- Strike through tracker tasks only after the relevant targeted checks and final hook gate pass.

When to load references
- Load `references/execution-loop.md` first so section order, source files, and fix sequencing stay aligned with the packet contract.
- Load `references/tracker-update-rules.md` before editing `00-master-packet.md` so strikethroughs and completion notes are applied consistently.
- Load `references/residual-warning-policy.md` before closing a section if any warnings remain after scoped reruns.
- Load `references/section-closeout.md` before moving to the next section so reruns, hook checks, and tracker updates happen in the right order.

Workflow
1. Confirm the approved packet root, target worktree, and the exact sections or tranches the user wants executed.
2. Read `00-master-packet.md`, then load the current section's `01-copy-framework.md`, `02-authoring-style.md`, and raw `authoring-style-findings.json`.
3. Execute all copy-framework tasks for the current section first, using the packet queue and raw findings to keep page order and scope aligned.
4. Execute the current section's authoring-style fixes second, deduplicating repeated raw warnings into the smallest safe edits instead of replaying every lint line literally.
5. Rerun the targeted copy-framework and authoring-style checks for that section only, and document any accepted residual warnings using `references/residual-warning-policy.md`.
6. Run the repo pre-commit or git-hook gate as the final section-close check.
7. Update `00-master-packet.md` using the tracker rules only after the checks pass, then move to the next approved section in tracker order.
8. When the approved tranche finishes, run any requested higher-level closeout checks and report what remains outside scope.

Deliverable Format
- One-line statement naming the packet, section, or tranche executed.
- Files changed in the current execution pass.
- Checks rerun and residual warnings accepted or unresolved.
- Tracker status update naming what was struck through and what remains open.

Failure Modes / Fallback
- If the packet is incomplete or stale, stop and identify the missing packet artifact instead of guessing the queue.
- If a section-level validation rerun fails, do not strike through the affected tasks.
- If a warning remains and is not clearly an accepted residual case, leave the task open and explain the blocker.
- If worktree changes outside the approved packet scope would be required, stop and ask for a broader execution decision.

Validation Checklist
- [ ] Execution started from an approved packet, not a rebuilt scope guess.
- [ ] Copy fixes were completed before authoring-style fixes in the section.
- [ ] Targeted reruns covered the section actually edited.
- [ ] Tracker strikethroughs were applied only after checks and hook validation passed.
- [ ] Research-driven edits stayed out of scope unless the user explicitly reopened them.
