# Gitignore Review for Production-Ready Branches

Date: 2026-03-31
Branches reviewed:

- `docs-v2-dev` at `3b97a99b2`
- `docs-v2` at `9cdf999f3`
- reference baseline: `origin/main` at `de6026f63`

## Summary

This review separates:

1. directories that should stay ignored because they are local/runtime/build outputs
2. tracked branch content that should **not** be hidden behind `.gitignore`
3. branch-structure mismatches that must be resolved before consolidation if the goal is a production-ready branch

The main conclusion is:

- A production-ready branch should **not** solve internal-tree sprawl by adding more `.gitignore` entries for tracked directories.
- The highest-risk candidates (`workspace/`, `tasks/`, `_dep-docs/`, `docs/`, `contribute/`) are branch-content and governance problems, not ignore-rule problems.
- The one strong `.gitignore` normalization candidate found in this review is `.mintlify/`, which is treated inconsistently across the two branches.

## Findings

### P0: `workspace/` and `tasks/` are tracked branch content, not ignore candidates

Evidence:

- `docs-v2-dev` tracks `workspace/` with `1418` files.
- `docs-v2` tracks `tasks/` with `588` files.
- Policy explicitly treats `workspace/` as the governed AI working directory, not local junk.

Relevant policy:

- [AGENTS.md](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/AGENTS.md#L51)
- [AGENTS.md](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/AGENTS.md#L60)
- [root-allowlist-governance.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/root-allowlist-governance.mdx#L206)
- [workspace-lifecycle-policy.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/workspace-lifecycle-policy.mdx#L22)

Why this matters:

- Adding `workspace/` or `tasks/` to `.gitignore` would not clean a production branch because those trees are already tracked.
- If production should not carry them, they must be pruned, migrated, or split by branch policy.

### P0: `docs-v2-dev` still carries `_dep-docs/`, which is legacy migration baggage, not a safe ignore target

Evidence:

- `docs-v2-dev` tracks `_dep-docs/` with `525` files.
- The tree contains obvious migration/holding patterns:
  - `_move_me/`
  - `_contextData_/`
  - `x-deprecated/`
  - `todo.txt`

Example paths from `docs-v2-dev`:

- `_dep-docs/about/todo.txt`
- `_dep-docs/community/_move_me/livepeer-hubs/livepeer-builder-hub.mdx`
- `_dep-docs/community/_contextData_/faq-livepeer-forum.pdf`
- `_dep-docs/about/x-deprecated/livepeer-governance.mdx`

Why this matters:

- `_dep-docs/` is exactly the kind of tree that should be migrated or deleted before consolidation, not masked with `.gitignore`.
- Ignoring it would hide a structural root cause while leaving hundreds of tracked files in the production branch history and tree.

### P1: `.mintlify/` is inconsistent across branches and is the clearest pre-consolidation ignore-policy fix

Evidence:

- `docs-v2` ignores `.mintlify/` entirely in `.gitignore`.
- `docs-v2-dev` ignores `.mintlify/*` but explicitly un-ignores `.mintlify/Assistant.md`.
- Current policy says `.mintlify` is not implemented in this repo.

Relevant policy:

- [root-allowlist-governance.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/root-allowlist-governance.mdx#L137)

Tracked example in `docs-v2-dev`:

- `.mintlify/Assistant.md`

Why this matters:

- A production-ready branch should pick one answer:
  - `.mintlify/` is local/runtime state and should be ignored entirely, or
  - it is governed repo content and should be explicitly justified.
- Current branch behavior is contradictory.

Recommendation:

- Prefer the stricter production answer: ignore `.mintlify/` entirely and remove tracked `.mintlify` content if it is not truly canonical.

### P1: `docs-v2` and `docs-v2-dev` disagree on which internal top-level trees are canonical

Evidence:

- `docs-v2` top-level internals: `docs/`, `contribute/`, `tasks/`, `tests/`
- `docs-v2-dev` top-level internals: `_dep-docs/`, `workspace/`, `operations/`, `.augment/`, `.mintlify/`

Relevant policy:

- [root-allowlist-governance.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/root-allowlist-governance.mdx#L190)
- [root-allowlist-governance.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/root-allowlist-governance.mdx#L217)

Why this matters:

- Before consolidation, you need one canonical answer for:
  - `tasks/` vs `workspace/`
  - `docs/` / `_dep-docs/` / `v2/`
  - `contribute/` vs `docs-guide/contributing/`
- `.gitignore` should not be used to hide whichever side loses that decision.

### P2: Adapter roots are intentional governed paths and should not be ignored casually

Evidence:

- `docs-v2-dev` tracks `.claude`, `.cursor`, `.windsurf`, and `.augment`
- `docs-v2` tracks `.claude`, `.cursor`, and `.windsurf`
- Root guidance explicitly names these adapter locations as canonical

Relevant policy:

- [AGENTS.md](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/AGENTS.md#L5)
- [root-allowlist-governance.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs-guide/policies/root-allowlist-governance.mdx#L166)

Why this matters:

- If the repo still intends to support these agent adapters, they belong in source control.
- If the support model changes, that is a governance decision first, not an ignore-rule tweak.

### P2: Both branches still contain tracked junk inside governed trees

Examples:

- `docs-v2` tracks `tasks/plan/active/.DS_Store`
- `docs-v2` tracks multiple zip archives under `tasks/plan/active/`
- Both branches carry many `todo.txt`, `x-deprecated/`, `x-archived/`, `_move_me/`, and `_contextData_` paths in legacy/internal trees

Why this matters:

- These are cleanup or migration candidates.
- They do **not** justify gitignoring the parent governed directories.

## Production-Ready Ignore Recommendations

### Keep ignored

These are appropriate `.gitignore` targets for a production-ready branch:

- all `node_modules/` directories
- package-manager debug logs
- local `.env` files
- OAuth/client secret JSON files
- logs and debug logs
- `.mintlify-cache/`
- `.out/`
- `dist/`
- `build/`
- temporary editor files
- `*.tsbuildinfo`
- `snippets/external/`
- `tools/notion/node_modules/`
- `tools/notion/data/`
- `tools/notion/backups/`
- `tools/notion/reports/`
- `.cache/llm-usefulness/`
- `.codex/locks-local/`
- `.codex/pr-body.generated.md`
- local chat-reconstruction scratch
- local-only report scratch paths

### Add or normalize before consolidation

- normalize `.mintlify/` handling across branches
  - recommendation: ignore the whole directory for production branches unless a file under it is formally promoted to canonical governance

### Do not solve with `.gitignore`

These require migration, deletion, branch cleanup, or canonical-path decisions instead:

- `workspace/`
- `tasks/`
- `_dep-docs/`
- `docs/`
- `contribute/`
- `.claude/`
- `.cursor/`
- `.windsurf/`
- `.augment/`
- `.github/`
- `.githooks/`
- `docs-guide/`
- `tools/`
- `api/`
- `snippets/`
- `v1/`
- `v2/`

## Recommended Pre-Consolidation Order

1. Normalize `.gitignore` only for true local/runtime outputs.
2. Make one canonical branch decision for:
   - `tasks/` vs `workspace/`
   - `docs/` / `_dep-docs/` vs `v2/`
   - `contribute/` vs `docs-guide/contributing/`
3. Remove or migrate tracked junk inside governed trees:
   - `.DS_Store`
   - zip archives
   - obvious move-me / context-data / deprecated holding paths that are no longer part of the production branch contract
4. Then merge `docs-v2` into `docs-v2-dev`.

## Bottom Line

If the goal is a production-ready consolidated branch, the review does **not** support “gitignore more folders” as the main cleanup strategy.

The safe ignore work is narrow:

- keep ignoring local/build/runtime outputs
- normalize `.mintlify/`

The larger mess is structural and tracked:

- internal planning trees
- deprecated docs holding trees
- legacy root trees
- adapter/governance roots

Those need branch-content decisions, not `.gitignore`.
