---
name: codex-task-isolation-standard
description: Enforce isolated Codex task execution with branch-scoped contracts, scoped validation, and clean PR evidence.
tier: 3
triggers:
  - "start codex implementation task"
  - "set up isolated codex worktree and branch"
  - "validate codex scope and pr contract"
primary_paths:
  - ".codex/task-contract.yaml"
  - ".codex/pr-body.generated.md"
  - ".githooks/pre-push"
  - "tools/scripts/create-codex-pr.js"
  - "tools/scripts/validate-codex-task-contract.js"
  - "tests/run-pr-checks.js"
  - ".github/pull_request_template.md"
  - ".github/pull-request-template-v2.md"
primary_commands:
  - "git worktree add ../livepeer-docs-codex-<issue> -b codex/<issue>-<slug> docs-v2"
  - "node tools/scripts/validate-codex-task-contract.js --branch codex/<issue>-<slug> --require-pr-body"
  - "node tools/scripts/create-codex-pr.js --create"
---

SKILL: Codex Task Isolation Standard

Goal
Execute implementation tasks in isolation with an explicit task contract, branch binding, and validation evidence that blocks scope drift.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Use dedicated `codex/<issue-id>-<slug>` branches for agent implementation tasks.
- Keep `scope_in` minimal and explicit; do not include unrelated paths.
- Do not force push codex branches unless explicit human approval is provided.

Workflow
1. Create a dedicated worktree and codex branch from `docs-v2`.
2. Create `.codex/task-contract.yaml` first and bind `task_id`, `branch`, `scope_in`, and acceptance checks.
3. Implement only scoped changes, then run targeted checks listed in `acceptance_checks`.
4. Run `node tools/scripts/validate-codex-task-contract.js` before push/PR.
5. Generate and open PR using `node tools/scripts/create-codex-pr.js --create` so required sections are prefilled from contract metadata.

Deliverable Format
- Contract file updated with explicit scope and risk flags.
- Focused commit/PR that only changes in-scope files (+ allowed generated files).
- Validation evidence mapped to contract acceptance checks.

Failure Modes / Fallback
- If branch naming/task id mismatch appears, fix contract + branch before continuing.
- If changed-file scope violations occur, split unrelated changes into separate branches.
- If PR body is missing required sections, update template-compliant headings before requesting review.
- If PR body marker is missing, regenerate via `create-codex-pr.js` before requesting review.

Validation Checklist
- [ ] Branch matches `codex/<issue-id>-<slug>`.
- [ ] `.codex/task-contract.yaml` is present and valid.
- [ ] Changed files are constrained to `scope_in` plus `allowed_generated`.
- [ ] PR body includes `Scope`, `Validation`, and `Follow-up Tasks`.
