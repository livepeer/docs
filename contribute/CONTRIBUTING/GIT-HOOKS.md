# Git Hooks

Canonical policy source:

- `docs-guide/policies/infrastructure-principles.mdx`
- `docs-guide/policies/quality-gates.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/policies/agent-governance-framework.mdx`

This contributor page describes how to run hooks, not policy ownership details.

## Install / Verify

```bash
./.githooks/install.sh
lpd hooks status
```

## Enforcement Boundaries

### Pre-commit (`.githooks/pre-commit`)

- fast staged local/offline checks only
- structure/style/static checks + staged generator sync
- enforces pre-commit runtime budget (default `<= 60s`)

### Pre-push (`.githooks/pre-push`)

- codex governance checks on `codex/*`
- contract + issue readiness + lock/stash policy
- non-fast-forward guard on codex branches

### CI

- owns heavy and broad checks (browser/page/link/openapi sweeps)

## Overrides

If a human explicitly approves an override, follow:

- `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`

Do not use bypass flags as a default workflow.
