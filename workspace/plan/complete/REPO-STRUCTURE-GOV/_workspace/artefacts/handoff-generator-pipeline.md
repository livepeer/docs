---
title: Handoff — Generator Pipeline Integration (2A-II.2/3)
status: complete
created: 2026-03-21
---

# Handoff: Generator Pipeline Integration (2A-II.2/3)

## What was done

Two `docs-guide/catalog/` generators that were silently manual-only have been wired into CI:

| Generator | Output | Workflow |
|---|---|---|
| `tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` | `docs-guide/catalog/workflows-catalog.mdx`, `docs-guide/catalog/templates-catalog.mdx` | `generate-docs-guide-catalogs.yml`, `check-docs-guide-catalogs.yml` |
| `tools/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js` | `docs-guide/catalog/pages-catalog.mdx` | `generate-docs-guide-catalogs.yml`, `check-docs-guide-catalogs.yml` |

## Critical architectural constraint

The `.githooks/pre-commit` hook is explicitly **hard-gates-only**:

```
# HARD GATES ONLY — this hook blocks commits that would:
#   1. Break MDX syntax
#   2. Break docs.json redirect integrity
#   3. Delete files without human override
#   4. Modify .allowlist or v1/ (frozen/protected)
#   5. Violate Codex branch isolation
#
# Everything else (style, copy, components, governance, indexes, catalogs)
# runs in GitHub Actions workflows on pull_request events.
```

**The generators must NOT go in pre-commit or post-commit hooks.** The plan's original wording for 2A-II.2 said "post-commit hook" — this was incorrect. The correct placement is GitHub Actions CI workflows.

## Workflows created

### `generate-docs-guide-catalogs.yml`

- **Trigger:** push to `main`, when any source path changes:
  - `.github/workflows/**`
  - `.github/ISSUE_TEMPLATE/**`
  - `.github/pull-request-template-v2.md`
  - `.github/pull_request_template.md`
  - `docs.json`
  - `v2/index.mdx`
- **Action:** runs both generators with `--write`, commits any changes to main
- **Pattern follows:** `generate-docs-index.yml`

### `check-docs-guide-catalogs.yml`

- **Trigger:** `pull_request` + `push` to `docs-v2` and `main`; `workflow_dispatch`
- **Action:** runs both generators with `--check`, fails if any output is stale
- **Pattern follows:** `check-docs-index.yml`

## What triggers regeneration

| Catalog | Stale when |
|---|---|
| `workflows-catalog.mdx` | `.github/workflows/*.yml` added/changed/removed |
| `templates-catalog.mdx` | `.github/ISSUE_TEMPLATE/*` or PR template files changed |
| `pages-catalog.mdx` | `docs.json` nav entries or `v2/index.mdx` links change |

## Script header updates

Both generator scripts had `@pipeline manual — not yet in pipeline` updated to reflect the new CI integration.

## Remaining for this plan owner

This handoff is informational — the work is done. The following remain open in 2A:

- **2A-IV.6** — Refresh `docs-guide/source-of-truth-guide.mdx` (remove TODO comment, verify generator run commands)
- **2A-V.3** — Expand `contributing/contributing.mdx` (deferred until Phase 1.3 `contribute/` merge)
- **2A-V.4** — AI-TOOLS-GOVERNANCE adapter file updates (see separate handoff)
