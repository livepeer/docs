# Agent Instructions for Git Hooks

This document provides specific instructions for AI agents working on this repository.

Canonical policy sources — read these before this file:

- `AGENTS.md` — repo-wide baseline (safety, source-of-truth order, structure, validation)
- `docs-guide/policies/agent-governance-framework.mdx` — agent adapter governance
- `docs-guide/policies/root-allowlist-governance.mdx` — root allowlist governance

## MANDATORY: Install Git Hooks

Before making any changes, agents MUST ensure git hooks are installed:

```bash
./.githooks/install.sh
```

## MANDATORY: Local Preview Port Rule

Agents must not use port `3000` for local Mintlify, preview, or browser-validation sessions in this repository. Choose a non-3000 port explicitly.

## Codex Task Isolation Standard (Implementation Tasks)

For implementation work on agent branches, use:

1. Branch name: `codex/<issue-id>-<slug>`
2. Contract file: `.codex/task-contract.yaml`
3. PR sections: `Scope`, `Validation`, `Follow-up Tasks`

Enforcement behavior:

- `pre-commit` validates contract presence/schema on `codex/*`.
- `pre-commit` and `pre-push` validate local execution lock state on `codex/*`.
- `pre-push` validates contract scope and blocks non-fast-forward pushes by default on `codex/*`.
- CI (`tests/run-pr-checks.js`) validates contract and required PR body sections on `codex/*`.

Recommended lifecycle:

```bash
# Start task scaffold (branch + contract + local lock)
node tools/scripts/automations/ai/codex/task-preflight.js --task <issue-id> --slug <slug> --scope <a,b,c>

# Validate local lock + scope before commit
node tools/scripts/validators/ai/codex/validate-locks.js --staged

# Finalize before PR, then release lock when done
node tools/scripts/dispatch/ai/codex/task-finalise.js
node tools/scripts/automations/ai/codex/lock-release.js
```

PR autofill command:

```bash
node tools/scripts/dispatch/ai/codex/create-codex-pr.js --create
```

The command generates `.codex/pr-body.generated.md` from task-contract fields and uses it as `gh pr create --body-file`.
For `codex/*` PRs, CI requires the generated marker in the PR body; this command is the supported path to satisfy that gate.

Minimal contract example:

```yaml
task_id: 1234
base_branch: docs-v2-dev
branch: codex/1234-fix-scope
scope_in:
  - tests/
  - .githooks/
acceptance_checks:
  - node tests/run-pr-checks.js --base-ref docs-v2-dev
```

## Agent Workflow

### Tracked File Moves and Renames

- Use `git mv` for every tracked file rename or relocation so Git records the move instead of presenting it as a delete plus add.
- Do not emulate a move by creating a new file and deleting the old tracked path manually.
- If you intentionally keep both old and new paths during a compatibility window, document that the old path is an alias and keep both files staged intentionally.
- Do not delete the old tracked path until references/imports have been validated and the deletion is covered by the existing `allow-deletions=true` trailer flow.

## Bypassing Hooks

**Default:** agents must not bypass hooks.

**Human override path:** if a human explicitly authorizes `--no-verify` in chat,
follow the canonical policy in
`ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`.

If a human explicitly needs to edit `.allowlist`, they must commit with:

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

For root-entry decisions, parser behavior, and the current keep/move criteria,
use the canonical policy in `docs-guide/policies/root-allowlist-governance.mdx`
instead of encoding decisions directly in `.allowlist`.

If a human explicitly needs to allow file deletions, they must commit with:

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

## Related Documentation

- [Full Git Hooks Documentation](./GIT-HOOKS.md)
- [Style Guide](../../v2/resources/documentation-guide/style-guide.mdx)
- [Agent Governance Framework](../../docs-guide/policies/agent-governance-framework.mdx)
- [Root Allowlist Governance](../../docs-guide/policies/root-allowlist-governance.mdx)
