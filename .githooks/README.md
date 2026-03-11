# Git Hooks - Operator Quick Reference

Canonical policy and ownership:

- `docs-guide/quality-testing/infrastructure-principles.mdx`
- `docs-guide/quality-testing/quality-gates.mdx`

This file is intentionally brief. Rule text should live in canonical policy docs above.

## Install

```bash
./.githooks/install.sh
```

Or via CLI:

```bash
lpd hooks install
```

## Hook Responsibilities

Protected workspace policy:

- The primary `Docs-v2-dev` checkout is protected for Codex sessions.
- Codex implementation work must start from a separate managed worktree based on
  `docs-v2-dev`, not from the main checkout path.
- Direct commits or pushes from the protected main workspace require explicit
  human override.

### `pre-commit`

Owned concerns:

- fast staged local/offline checks
- structure + style + staged static test validations
- staged generator sync for managed artifacts
- runtime budget enforcement (default: `<= 60s`)

Out-of-scope concerns:

- browser sweeps
- WCAG crawls
- broad/full link sweeps
- codex issue-readiness governance

### `pre-push` (`codex/*`)

Owned concerns:

- codex task contract validation
- codex issue-readiness policy
- codex lock overlap checks
- stash-policy checks
- non-fast-forward protection (override only with explicit human instruction)

## Human Override Policy

When explicit human override is requested, follow:

- `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`

## Additional References

- Contributor hook guide: `contribute/CONTRIBUTING/GIT-HOOKS.md`
- Test execution matrix: `tests/WHEN-TESTS-RUN.md`
- Codex lifecycle: `.codex/README.md` (`task-preflight` -> `validate-locks` -> `task-finalize` -> `lock-release` -> `task-cleanup`)
