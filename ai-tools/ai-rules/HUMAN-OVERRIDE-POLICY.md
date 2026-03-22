# Human Override Policy (Codex Agent Workflows)

## Default Rule

Agents must not bypass hooks or policy checks by default.

## Allowed Override

`--no-verify` may be used only when a human explicitly instructs it in chat for the current task.

## Required Audit Controls

When `--no-verify` is used, all of the following are required:

1. Env token: `ALLOW_HUMAN_NO_VERIFY=1`
2. Commit trailer: `human-override=no-verify`
3. Commit trailer: `override-note=<short user instruction summary>`

Use helper:

```bash
ALLOW_HUMAN_NO_VERIFY=1 \
node operations/scripts/codex-commit.js \
  --message "<commit message>" \
  --no-verify \
  --human-override true \
  --override-note "explicit user instruction in chat"
```

## Scope Limits

1. This policy applies to commit bypass only.
2. It does not authorize force-push or scope-contract bypass.
3. Required CI checks still gate merge eligibility.

## Merge Authority

Even when local commit bypass is allowed, branch protection and required PR checks remain authoritative for merge.
