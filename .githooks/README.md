# Git Hooks - Operator Quick Reference

Canonical policy and ownership:

- `docs-guide/policies/infrastructure-principles.mdx`
- `docs-guide/policies/quality-gates.mdx`

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

### `pre-commit`

**Hard gates only** — blocks commits that would break syntax, security, or safety.
Target runtime: **< 5 seconds**.

Owned concerns (5 hard gates):

1. **Codex branch isolation** — prevents AI sessions from committing to docs-v2
2. **File deletion guard** — blocks deletions without human `--trailer "allow-deletions=true"`
3. **.allowlist protection** — blocks AI from editing .allowlist
4. **docs.json redirect integrity + root structure** — prevents orphaned redirects and unauthorized root files
5. **v1/ freeze** — blocks any changes to frozen v1/ directory

Everything else runs in GitHub Actions PR workflows (`test-suite.yml`):

- Style guide compliance, copy linting, structure linting
- Component governance, anchor validation, description quality
- MDX-safe markdown validation, grammar checks
- Generated artifact freshness, index/catalog regeneration (post-commit only)

Install behavior:

- configures worktree-local `core.hooksPath=.githooks`
- runs hooks directly from tracked repo files instead of copying stale hook files into `.git/hooks`

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
