---
title: Canonical Repo Folder Structure
status: active
owner: REPO-STRUCTURE-GOV
created: 2026-03-21
supersedes: draft.md
---

# Canonical Repo Folder Structure

> **DEPRECATED as canonical location.** The published version lives at `docs-guide/frameworks/repo-structure.mdx`. This file remains as the working draft. Edits here must be synced to the published version.

> Source of truth for locked decisions on repo root folder layout and per-folder structure.
> Process for making these decisions: see [process.md](process.md)

## Related Plans

Other active plans that own or affect specific folders — coordinate with these before making structural changes.

| Plan | Folder(s) owned | Plan file |
|------|----------------|-----------|
| SCRIPT-GOVERNANCE | `tools/scripts/` → `operations/`, `tests/` → `operations/` | [../SCRIPT-GOVERNANCE/audit-report.md](../SCRIPT-GOVERNANCE/audit-report.md) |
| AI-TOOLS-GOVERNANCE | `ai-tools/` placement and rules | [../AI-TOOLS-GOVERNANCE/client-side-component-audit.md](../AI-TOOLS-GOVERNANCE/client-side-component-audit.md) |
| COMPONENT-GOVERNANCE | `snippets/components/` and component registry | [../COMPONENT-GOVERNANCE/audit-report.md](../COMPONENT-GOVERNANCE/audit-report.md) |
| SNIPPETS | `snippets/` template structure and audit | [../SNIPPETS/template-audit.md](../SNIPPETS/template-audit.md) |
| CONTENT-WRITING | `v2/` page content | [../CONTENT-WRITING/collation.md](../CONTENT-WRITING/collation.md) |
| CANONICAL-TRUTH-GUIDES | `docs-guide/` content accuracy | [../CANONICAL-TRUTH-GUIDES/](../CANONICAL-TRUTH-GUIDES/) |
| SOLUTIONS-SOCIAL-DATA | `snippets/automations/`, social data pipeline | [../SOLUTIONS-SOCIAL-DATA/plan.md](../SOLUTIONS-SOCIAL-DATA/plan.md) |
| AI-DISCOVERABILITY | Client-side component counterparts | [../AI-DISCOVERABILITY/plan.md](../AI-DISCOVERABILITY/plan.md) |
| TOOLING | `tools/` CLI and dev tooling | [../TOOLING/lpd-audit.md](../TOOLING/lpd-audit.md) |
| OSS-OWNERLESS-REPO-GOVERNANCE | Ownerless folder governance | [../OSS-OWNERLESS-REPO-GOVERNANCE/Ownerless Repo Plan.md](<../OSS-OWNERLESS-REPO-GOVERNANCE/Ownerless Repo Plan.md>) |

---

## Target Root Structure

```
/
├── .claude/                 ← AI adapter: Claude
├── .codex/                  ← AI adapter: Codex
├── .cursor/                 ← AI adapter: Cursor
├── .windsurf/               ← AI adapter: Windsurf
├── .github/                 ← CI/CD workflows
├── .githooks/               ← local git hooks
├── .vscode/                 ← editor settings
│
├── ai-tools/                ← AI rules, skills, agent packs
├── api/                     ← OpenAPI specs only
├── docs-guide/              ← contributor + authoring guide
├── operations/              ← scripts + tests [PENDING: SCRIPT-GOVERNANCE Task 14]
├── snippets/                ← shared MDX components, assets, data
├── tools/                   ← dev tooling (cli, lib, vscode, config)
├── v1/                      ← v1 content pages (frozen)
├── v2/                      ← v2 content pages
├── workspace/               ← planning workspace
│
├── docs.json                ← Mintlify nav config
├── style.css                ← Mintlify global styles
├── .mintignore
├── .allowlist
├── .editorconfig
├── .gitignore
├── .gitattributes
├── .prettierrc
├── LICENSE
├── README.md
├── AGENTS.md
├── lpd                      ← CLI helper script
│
└── [generated at build]
    ├── llms.txt
    ├── sitemap-ai.xml
    └── docs-index.json
```

---

## Root Folder Status

| Folder | Current state | Clean action | Subplan |
|--------|--------------|--------------|---------|
| `ai-tools/` | In place | Review only — governed by AI-TOOLS-GOVERNANCE | — |
| `api/` | Clean (2026-03-21) | Done | — |
| `contribute/` | Exists at root | **MOVE** → `docs-guide/contributing/` (decision locked, not executed) | — |
| `docs-guide/` | 7 sections, some bloat | **ACTION** | [subplan-docs-guide.md](subplan-docs-guide.md) |
| `_dep-docs/` | Deprecated docs at root | **DELETE** (decision locked, not executed) | — |
| `snippets/` | 9 sections + _workspace | **ACTION** | [subplan-snippets.md](subplan-snippets.md) (TBD) |
| `tests/` | Exists at root | **MOVE** → `operations/` (blocked on SCRIPT-GOVERNANCE Task 14) | — |
| `tools/` | Complex subtree | Review after SCRIPT-GOVERNANCE Task 14 | — |
| `v1/` | Frozen | None — immutable | — |
| `v2/` | 10 sections + i18n | **ACTION** | [subplan-v2-folders.md](subplan-v2-folders.md) |
| `workspace/` | Planning workspace | None | — |

---

## Folder Structures

---

### `docs-guide/`

> Status: 7 sections in place. Action: framework/policy audit, root clutter, section overlap.
> Subplan: [subplan-docs-guide.md](subplan-docs-guide.md)
> Work directory: [docs-guide/](docs-guide/)

```
docs-guide/
├── catalog/              ← auto-generated catalogs only; never edit manually
│   ├── pages-catalog.mdx
│   ├── components-catalog.mdx
│   ├── scripts-catalog.mdx
│   ├── workflows-catalog.mdx
│   ├── templates-catalog.mdx
│   └── ui-templates.mdx
├── contributing/         ← contributor guides and onboarding
├── features/             ← feature and system overviews
├── frameworks/           ← decision models and taxonomies (not enforcement rules)
├── policies/             ← enforceable governance rules with must/must not language
├── repoOps/              ← config files, enforcement maps, secrets
│   ├── config/
│   ├── maps/
│   └── secrets/
├── tooling/              ← tool references and AI tooling guides
├── source-of-truth-guide.mdx  ← section entry point (root exception; documented)
└── _workspace/           ← scratch, drafts, archive (not in nav)
```

Root-level files pending resolution: `docs-glossary.md` (→ `features/glossary.mdx`), `component-registry*.json` (→ `snippets/data/` or `catalog/`).

---

### `v2/`

> Status: _workspace/ normalized 2026-03-21. Action: loose files, special cases, pre-commit enforcement.
> Subplan: [subplan-v2-folders.md](subplan-v2-folders.md)
> Work directory: [v2/](v2/)

```
v2/
├── about/
├── community/
├── developers/
├── gateways/
├── home/
├── internal/             ← internal-only pages (policy addendum pending)
├── lpt/
├── orchestrators/
├── resources/
├── solutions/
├── templates/            ← shared MDX templates (placement decision pending)
├── cn/ es/ fr/           ← i18n mirror trees (governance addendum pending)
├── _workspace/           ← v2-root scratch and research
└── index.mdx
```

Per-section `_workspace/` approved subdirs: `notes/` `plans/` `research/` `reviews/` `drafts/` `handoff/` `archive/` `deprecated/` `context-data/` `staging/`

Forbidden at section root: any `.md`, `.txt`, or loose `.mdx` not registered in `docs.json`. Pre-commit gate pending (V2.1).

---

### `snippets/`

> Status: 9 sections exist. Action: component audit, composables decision, asset governance.
> Subplan: TBD — pending COMPONENT-GOVERNANCE.
> Work directory: [snippets/](snippets/)

```
snippets/
├── assets/               ← images, SVGs, brand assets, OG images
│   ├── logos/            ← brand SVG/PNG logos (canonical)
│   ├── site/             ← favicon, OG images
│   ├── domain/           ← section and persona images
│   ├── data/             ← non-image data assets
│   └── scripts/n8n/      ← n8n workflow JSON and docs
├── automations/          ← generated social data files
├── components/           ← JSX component library
├── composables/          ← Layer 3 MDX content architecture (decision pending)
├── data/                 ← structured JSON/JS data
├── external/             ← externally sourced content
├── pages/                ← page-level snippets
├── templates/            ← page templates
├── snippetsWiki/         ← component library documentation
└── _workspace/           ← scratch (created 2026-03-21)
```

Open decision: `composables/` — 8 MDX composables, zero page refs. Integrate into pages or archive.

---

### `api/`

> Status: Clean as of 2026-03-21. No action needed.

```
api/
├── gateway.openapi.yaml
├── openapi.yaml
├── openapi.json
├── ai-worker.yaml
├── cli-http.yaml
├── studio.yaml
└── _workspace/
```

Spec files only. No MDX, no backups, no duplicate subdirs. Policy: `docs-guide/policies/root-allowlist-governance.mdx`.

---

### `contribute/` → `docs-guide/contributing/`

> Decision locked. Not yet executed.

Contents move to `docs-guide/contributing/`. Execution requires: update `docs.json` nav paths first, verify no external links to old path, then `git mv`.

---

### `_dep-docs/`

> Decision: delete. Not yet executed.

Zero refs confirmed during audit. Pending explicit go-ahead with `--trailer "allow-deletions=true"`.

---

## Pending Decisions

| Item | Decision needed |
|------|----------------|
| `v2/templates/` | Stay or move to `snippets/templates/`? |
| `v2/cn/` `v2/es/` `v2/fr/` | Do i18n trees have `_workspace/` dirs or explicitly not? |
| `snippets/composables/` | Integrate into pages or archive? |
| `docs-guide/frameworks/` | Merge into `policies/` or keep as separate section? |
| `docs-guide/source-of-truth-guide.mdx` | Stay at root or move into a subsection? |
| Pre-commit gate for loose v2/ section-root files | Build now or defer? |
