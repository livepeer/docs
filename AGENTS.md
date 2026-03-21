# Livepeer Docs Agent Baseline

Read this file first before using any repo-specific adapter.

Native adapters:

- GitHub Copilot: `.github/copilot-instructions.md`
- Claude Code: `.claude/CLAUDE.md`
- Cursor: `.cursor/rules/repo-governance.mdc` + `.cursor/rules/no-deletions.mdc`
- Windsurf: `.windsurf/rules/repo-governance.md`
- Augment Code: `.augment/rules/` (repo-governance.md, git-safety.md, no-deletions.md)

Codex layer extension (task isolation rules — HitL, checkpoints, locks):

- `.github/AGENTS.md` — Codex reads this in addition to root AGENTS.md via directory-walk

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
- Never use port `3000` for local Mintlify, preview, or browser-validation sessions in this repository; choose a non-3000 port explicitly.
- Do not use `git reset --hard`, `git stash`, or `git push --force` unless a human explicitly directs it.
- Do not delete tracked files casually. File deletions require a human-owned commit with `--trailer "allow-deletions=true"`.
- Do not make the final `.allowlist` commit yourself. A human must commit `.allowlist` edits with `--trailer "allowlist-edit=true"`.
- On `codex/*` branches, follow `.codex/task-contract.yaml` plus the lock/task validators under `operations/scripts/dispatch/ai/codex/`.
- Check `git status` before staging. Never use `git add -A` or `git add .` without reviewing what would be staged — unrelated work from earlier in the session may be picked up.
- Do not mix unrelated changes in one commit. Stage and commit by concern.
- If a pre-commit hook fails, fix the root cause. Do not retry with `--no-verify`.
- Commit message convention: use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`) with a scope in parentheses, e.g. `fix(ai-tools): update paths`.

## Root and Structure Governance

- `.allowlist` is machine-readable input for the root-structure gate.
- `.allowlist` may contain only root entries and `#` comments.
- Never place nested paths, HTML comments, or report prose in `.allowlist`.
- Root directory entries must be slashless: use `.claude`, not `.claude/`.
- Prefer existing governed directories over adding new repo-root files or directories.
- If a path migration is required, update all routing, generator, validator, and documentation dependencies in the same change.
- `docs.json` controls all public routing and navigation. Edits to `docs.json` must be confirmed with the user before committing — a wrong path removes a page from the nav.
- `workspace/` is the AI working directory. Reports go to `workspace/reports/<category>/`, plans to `workspace/plan/active/<PROJECT>/`. Never write to `workspace/` without a clear output path established by the task or user.
- Read a file before editing it. Do not assume content — verify the current state, then make the minimum change needed.

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

| Change type | Validator to run |
|---|---|
| Any staged change | `lpd test --staged` |
| Routing or nav edits (`docs.json`) | `node tools/scripts/validators/governance/compliance/validate-frontmatter.js --check` |
| Generated file changed | Run the generator with `--check` first, then without, then `--check` again to confirm |
| Governance or agent doc edits | `node tools/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json` |
| Catalog or index regeneration | `node tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --check` |

If a validator fails: read the output, fix the root cause, rerun. Do not skip.

## Response and Review Contract

- Cite repo file paths when making factual claims about repository behavior.
- Separate current guidance from legacy notes when both matter.
- Ask one concise clarifying question if the user intent is ambiguous across domains or versions.
- Flag missing evidence instead of inventing behavior, commands, or paths.
- When the scope of a request is unclear, do the minimum that satisfies it — do not add adjacent improvements, cleanup, or refactoring unless asked.
- Surface a decision to the user rather than silently choosing. If two approaches are valid, name them and ask.
- On long multi-step tasks, checkpoint with the user after each meaningful unit of work rather than running to completion.
