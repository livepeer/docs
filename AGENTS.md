# Livepeer Docs Agent Baseline

Read this file first before using any repo-specific adapter.

Native adapters:

- GitHub Copilot: `.github/copilot-instructions.md`
- Claude Code: `.claude/CLAUDE.md`
- Cursor: `.cursor/rules/repo-governance.mdc`
- Windsurf: `.windsurf/rules/repo-governance.md`

Canonical governance docs:

- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`

## Required Context

Use these sources in this order when they apply:

1. `docs.json` for navigation, routing, groups, tabs, and page placement.
2. `v2/**` for current user-facing docs.
3. `README.md` and `contribute/**` for workflow, hooks, testing, and contributor process.
4. `docs-guide/**` for internal capability maps, governance policy, and generator ownership.
5. `v1/**` only for legacy reference or when the user explicitly asks for legacy behavior.

Call out conflicts explicitly instead of guessing.

## Safety and Git Rules

- Install hooks before substantial work: `./.githooks/install.sh`
- Do not use `--no-verify` by default.
- If a human explicitly authorizes a bypass, follow `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`.
- Do not use `git reset --hard`, `git stash`, or `git push --force` unless a human explicitly directs it.
- Do not delete tracked files casually. File deletions require a human-owned commit with `--trailer "allow-deletions=true"`.
- Do not make the final `.allowlist` commit yourself. A human must commit `.allowlist` edits with `--trailer "allowlist-edit=true"`.
- On `codex/*` branches, follow `.codex/task-contract.yaml` plus the lock/task validators under `tools/scripts/codex/`.

## Root and Structure Governance

- `.allowlist` is machine-readable input for the root-structure gate.
- `.allowlist` may contain only root entries and `#` comments.
- Never place nested paths, HTML comments, or report prose in `.allowlist`.
- Root directory entries must be slashless: use `.claude`, not `.claude/`.
- Prefer existing governed directories over adding new repo-root files or directories.
- If a path migration is required, update all routing, generator, validator, and documentation dependencies in the same change.

## Authoring and Implementation Rules

- Default to `v2/**`; treat `v1/**` as frozen unless a user explicitly requests legacy edits.
- Preserve information architecture unless the task is an intentional IA migration.
- Keep edits minimal, local, and consistent with nearby files.
- Use absolute snippet imports from root, for example `/snippets/components/...`.
- Use CSS custom properties instead of `ThemeData` or hardcoded theme colours.
- Check the component library before adding new UI patterns.
- Regenerate generated files instead of hand-editing them.

## Validation Expectations

Run the smallest relevant validation set before handing work back:

- `lpd test --staged`
- `node tools/scripts/validators/governance/check-agent-docs-freshness.js --json`
- `node tools/scripts/generate-docs-guide-indexes.js --check`
- task-specific generators or validators when routing, governance, or generated artifacts changed

## Response and Review Contract

- Cite repo file paths when making factual claims about repository behavior.
- Separate current guidance from legacy notes when both matter.
- Ask one concise clarifying question if the user intent is ambiguous across domains or versions.
- Flag missing evidence instead of inventing behavior, commands, or paths.
