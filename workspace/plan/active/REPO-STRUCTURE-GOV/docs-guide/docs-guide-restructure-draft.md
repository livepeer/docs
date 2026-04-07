---
title: docs-guide/ Restructure Draft
status: draft — pending review
owner: REPO-STRUCTURE-GOV
created: 2026-03-21
---

# docs-guide/ Restructure Draft

> This is a research + recommendation document.
> No execution until this draft is approved and the subplan in plan.md is activated.

---

## 1. Canonical Folder Structure (Going Forward)

The prescribed structure is already partially defined in `source-of-truth-guide.mdx`.
The following is the **approved + extended canonical shape** this folder should converge to:

```
docs-guide/
│
├── catalog/                    ← ALL auto-generated catalogs (read-only outputs)
│   ├── ai-tools.mdx            ← manual exception (curated, not generated)
│   ├── components-catalog.mdx  ← generated: generate-docs-guide-components-index.js
│   ├── pages-catalog.mdx       ← generated: generate-docs-guide-pages-index.js
│   ├── scripts-catalog.mdx     ← generated: tests/unit/script-docs.test.js
│   ├── templates-catalog.mdx   ← generated: generate-docs-guide-indexes.js
│   ├── ui-templates.mdx        ← generated: generate-ui-templates.js
│   └── workflows-catalog.mdx   ← generated: generate-docs-guide-indexes.js
│
├── contributing/               ← how to contribute safely + consistently
│   ├── contributing.mdx        ← main contributor guide
│   └── mintlify.mdx            ← Mintlify-specific development guide
│
├── features/                   ← major systems, functional maps, automation surfaces
│   ├── ai-features.mdx
│   ├── architecture-map.mdx
│   ├── automations.mdx
│   ├── data-integrations.mdx
│   ├── feature-map.mdx
│   ├── ui-system.mdx
│   └── visual-explainer-workflows.mdx
│
├── frameworks/                 ← structural models, guides, improvement workflows
│   ├── component-governance.mdx     ← CANONICAL (replaces component-framework.mdx)
│   ├── content-system.mdx
│   ├── page-taxonomy-framework.mdx
│   └── research-skill-workflow.mdx
│
├── policies/                   ← enforced rules, prohibited actions, gate constraints
│   ├── agent-governance-framework.mdx
│   ├── audit-system-overview.mdx
│   ├── cleanup-quarantine-policy.mdx
│   ├── component-layout-decisions.mdx
│   ├── generated-artifact-and-hook-governance.mdx
│   ├── infrastructure-principles.mdx
│   ├── ownerless-governance.mdx
│   ├── quality-gates.mdx
│   ├── root-allowlist-governance.mdx
│   ├── skill-pipeline-map.mdx
│   ├── source-of-truth-policy.mdx
│   └── v2-folder-governance.mdx
│
├── tooling/                    ← CLI, dev tools, authoring references
│   ├── reference-maps/
│   │   └── icon-map.mdx
│   ├── content-brief-template.md
│   ├── dev-tools.mdx
│   ├── lpd-cli.mdx
│   ├── lpd-mdx-preview.mdx
│   ├── research-review-packet-plan-template.md
│   ├── research-to-implementation-plan-template.md
│   └── review-packet-plan-template.md
│
├── _workspace/                 ← internal design specs, scratch (NOT in Mintlify nav)
│   ├── 02_Design-Specification/   ← active design work
│   └── archive/                   ← retired docs-guide content
│
├── component-registry.json     ← auto-generated (generate-component-registry.js)
├── component-registry-schema.json  ← auto-generated
├── component-usage-map.json    ← auto-generated
├── docs-glossary.md            ← hand-maintained internal terminology
└── source-of-truth-guide.mdx  ← main landing + navigation page
```

### What does NOT belong in this folder
- Scratch planning files (→ `_workspace/`)
- Archive / deprecated versions (→ `_workspace/archive/`)
- `source-of-truth.md` 0-byte stubs in every subdir (→ delete; not the pattern)
- `scripts-catalog-archive.mdx` and `visual-explainer-workflows-archive.mdx` (→ `_workspace/archive/`)
- `component-framework.mdx` (→ delete; it is only a redirect to `component-governance.mdx`)

---

## 2. Scripts Generating Outputs Here — and What's Wrong

### Active generation pipeline

| Script | Writes to | Input | Pipeline stage | Status |
|--------|-----------|-------|----------------|--------|
| `generate-component-registry.js` | `component-registry.json`, `component-registry-schema.json` | JSDoc in `snippets/components/**/*.jsx` | Pre-commit (component files staged) | ✅ Correct path |
| `generate-docs-guide-components-index.js` | `catalog/components-catalog.mdx` | `component-registry.json` + `component-usage-map.json` | Auto on commit | ✅ Correct path |
| `generate-docs-guide-pages-index.js` | `catalog/pages-catalog.mdx` | `v2/index.mdx` + `docs.json` | Manual | ✅ Correct path |
| `generate-docs-guide-indexes.js` | `catalog/workflows-catalog.mdx`, `catalog/templates-catalog.mdx` | `.github/workflows/`, `.github/ISSUE_TEMPLATE/` | Manual (not yet in pipeline) | ✅ Correct path |
| `generate-ui-templates.js` | `catalog/ui-templates.mdx` | `snippets/templates/pages/**`, `snippets/templates/blocks/**` | Triggered by component generation | ✅ Correct path |
| `script-docs.test.js` | `catalog/scripts-catalog.mdx` | Script header JSDoc in `tools/scripts/**/*.js` | Test pipeline (`--write --rebuild-indexes`) | ✅ Correct path |

### ⚠️ Problems identified

**Problem 1 — Legacy path stubs in `.codex/` lock files**
`.codex/locks-local/` still references old paths:
- `docs-guide/indexes/scripts-index.mdx` (old)
- `docs-guide/indexes/pages-index.mdx` (old)
- `docs-guide/indexes/components-index.mdx` (old)

All scripts have legacy cleanup built in — they will remove these files if they exist. But the lock files referencing them will cause false locks/conflicts if a Codex session touches them.
**Action needed:** Update `.codex/` lock definitions to reference `/catalog/` paths, not `/indexes/` paths.

**Problem 2 — `generate-docs-guide-indexes.js` is NOT in the automated pipeline**
`workflows-catalog.mdx` and `templates-catalog.mdx` are currently only regenerated manually.
If `.github/workflows/*.yml` changes, these catalogs go stale silently.
**Action needed:** Add this script to the pre-commit or post-commit hook for `.github/` path changes.

**Problem 3 — `generate-docs-guide-pages-index.js` is NOT in the automated pipeline**
`pages-catalog.mdx` only updates manually. If `v2/index.mdx` or `docs.json` changes, the catalog silently goes stale.
**Action needed:** Add this to the pipeline triggered by `docs.json` or `v2/index.mdx` changes.

**Problem 4 — `ai-tools.mdx` is manually maintained but lives in `catalog/`**
The `catalog/` folder is conceptually "generated outputs only." `ai-tools.mdx` is a hand-maintained catalog that doesn't follow the generated-file-banner convention.
**Options:**
- A) Move it to `features/ai-tools.mdx` (it's a feature/capability map, not a generated catalog)
- B) Keep in `catalog/` but add a manual-exception note to the catalog governance
- **Recommendation: Option A** — move to `features/` where it belongs semantically

**Problem 5 — `component-usage-map.json` generation script is unverified**
The file exists and is updated (57K, Mar 20 23:17) but the exact script that writes it is unclear from the headers. Needs tracing.
**Action needed:** Identify and document the generator in `generated-artifact-and-hook-governance.mdx`.

**Problem 6 — `source-of-truth.md` 0-byte stubs in every subdir**
These were created as policy markers but are empty and add noise. They are not the governance pattern — the governance pattern is the subdir-level content files themselves.
**Action needed:** Delete all 5 (catalog, contributing, features, frameworks, policies). The `tooling/source-of-truth.md` is partially filled — migrate its content into `tooling/dev-tools.mdx` or similar, then delete.

---

## 3. Dependents — What Breaks If We Restructure This Folder

### Critical (breaks immediately if paths change)

| Dependent | What it references | Risk |
|-----------|--------------------|------|
| `docs.json` | 38 nav entries pointing to `docs-guide/**` pages | Any page move requires docs.json update + Mintlify redirect |
| `AGENTS.md` | `docs-guide/policies/agent-governance-framework.mdx`, `docs-guide/policies/root-allowlist-governance.mdx` | All AI agents read AGENTS.md — stale paths break governance |
| `.cursor/rules/repo-governance.mdc` | Same 2 policy paths | Same risk |
| `.claude/CLAUDE.md` | Directs to AGENTS.md → same policy chain | Indirect but real |
| All `.githooks/` scripts | `generate-docs-guide-components-index.js` path (called from hook) | Hook fails silently or errors on commit |
| `generate-component-docs.js` | `docs-guide/component-registry.json`, `docs-guide/.editorial-cache.json` | Script errors if registry path changes |
| `generate-component-registry.js` | Writes `docs-guide/component-registry.json` | Write failure if path changes |
| `.codex/task-contract.yaml` | `docs-guide/` as a protected path | Codex tasks touching docs-guide fail contract validation |

### Moderate (stale but not immediately broken)

| Dependent | What it references | Risk |
|-----------|--------------------|------|
| `check-agent-docs-freshness.js` | Validates docs-guide content freshness | Reports false staleness if paths change |
| `enforce-generated-file-banners.js` | Checks generated file banners in docs-guide | Reports missing banners |
| 20+ other scripts | `docs-guide/` paths (various) | Stale references, silent errors |
| `.codex/locks-local/` | Legacy `/indexes/` paths (already wrong) | Lock conflicts on Codex sessions |
| `v2/cn/` i18n pages | `docs-guide` references | i18n pages may have stale links |

### Safe to change without downstream effect

- `_workspace/` contents (not in nav, not referenced by scripts)
- `docs-glossary.md` (referenced only by contributor convention, not by scripts)
- Empty `source-of-truth.md` stubs (nothing depends on 0-byte files)

---

## 4. Naming Framework (Going Forward)

### Files

| Rule | Pattern | Example |
|------|---------|---------|
| All docs-guide pages | `kebab-case.mdx` | `agent-governance-framework.mdx` |
| Generated catalogs | `<subject>-catalog.mdx` | `components-catalog.mdx` |
| Templates in tooling/ | `<purpose>-template.md` | `content-brief-template.md` |
| JSON data files | `<subject>-<type>.json` | `component-registry.json` |
| Archive files | Move to `_workspace/archive/`, no rename needed | — |

### No mixing
- No `-index.mdx` suffix (legacy; all now `-catalog.mdx`)
- No `source-of-truth.md` 0-byte stubs
- No `.md` files in nav sections (only `tooling/` templates as `.md` is acceptable; they are excluded from Mintlify via .mintignore)
- No `x-archived`, `x-deprecated`, `dep-` prefixed files (→ `_workspace/archive/`)

### Subdirectories
Only these 6 named sections + `_workspace/` are allowed:

| Dir | Purpose |
|-----|---------|
| `catalog/` | Auto-generated catalogs + `ai-tools.mdx` exception (or move ai-tools to features/) |
| `contributing/` | How to contribute |
| `features/` | System + capability maps |
| `frameworks/` | Guides, models, improvement workflows |
| `policies/` | Enforced rules |
| `tooling/` | CLI + dev tools + authoring references |
| `_workspace/` | Internal design work, scratch, archive |

### Frontmatter standard (all hand-maintained pages)
```yaml
---
title: "Human-readable title"
sidebarTitle: "Short nav label"     # optional, only if title is long
description: "One-sentence purpose"
---
```

Governance/policy pages additionally use:
```yaml
owner: '@livepeer/docs-team'
status: active | draft | deprecated
version: '1.0'
created: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
```

Generated pages: must include `generated-file-banner:v1` comment block (enforced by `enforce-generated-file-banners.js`).

---

## 5. Templates Missing from snippets/templates/

Currently `snippets/templates/` covers user-facing docs pages well. Missing are templates for **internal docs-guide document types** — the outputs of governance scripts and the hand-authored policy/framework patterns.

### Recommended additions to snippets/templates/

| Template name | Type | Purpose |
|---------------|------|---------|
| `docs-guide/policy-page.mdx` | New | Standard layout for policy documents (owner, status, version frontmatter + Scope / Rules / Enforcement / Related sections) |
| `docs-guide/framework-page.mdx` | New | Standard layout for framework/guide documents (overview + decision model + examples sections) |
| `docs-guide/catalog-page.mdx` | New | Standard layout for generated catalog pages (generation banner + summary table + auto-populated section) |
| `docs-guide/feature-map-page.mdx` | New | Standard layout for feature/architecture maps (system diagram + component table + ownership sections) |
| `docs-guide/tooling-reference-page.mdx` | New | Standard layout for CLI/tool reference (install + usage + flags table + examples sections) |

These templates serve two purposes:
1. **Authors** creating new policy, framework, feature, or tooling pages get consistent structure
2. **Scripts** generating new docs-guide pages have a canonical layout to output into

---

## 6. Further Recommendations

### R1 — Establish a docs-guide page lifecycle
Currently there is no formal lifecycle. Recommendation:
- `draft` → `active` → `deprecated` → deleted (to `_workspace/archive/`)
- The `status` frontmatter field already exists on many pages but is not enforced
- Add `check-agent-docs-freshness.js` enforcement of stale `active` pages (>90 days without update triggers warning)

### R2 — `ai-tools.mdx` belongs in `features/` not `catalog/`
It is hand-maintained, not generated. Move to `features/ai-tools.mdx` and update docs.json nav entry. Catalog should be generated-only.

### R3 — Automate `generate-docs-guide-pages-index.js` and `generate-docs-guide-indexes.js`
Both are currently manual. Add to hook pipeline:
- `generate-docs-guide-pages-index.js` → trigger on `docs.json` or `v2/index.mdx` changes
- `generate-docs-guide-indexes.js` → trigger on `.github/workflows/` changes

### R4 — Resolve tooling/ template overlap
Three templates in `tooling/` are closely related and may overlap:
- `content-brief-template.md`
- `research-review-packet-plan-template.md`
- `research-to-implementation-plan-template.md`
- `review-packet-plan-template.md`
Audit and consolidate before this folder is cleaned — removing wrong ones is low-risk but removing the right one breaks contributor workflows.

### R5 — `docs-guide/` needs its own folder-level governance note
There is a meta-irony in the governance folder not having explicit governance for its own structure.
Add `docs-guide/policies/docs-guide-structure-policy.mdx` that defines:
- Allowed subdirs + their purposes
- Naming rules
- Generated vs hand-maintained boundary
- `_workspace/` TTL
- Who can add new sections (requires plan-level approval)

---

## ⚠️ NOTE: This Process Applies to Every Root Folder

The research and planning process used here for `docs-guide/` should be repeated for **every root-level folder** before any execution runs. Each folder needs:

1. **Structure audit** — what's in it, what's generated vs hand-maintained
2. **Script output map** — what writes here and whether paths are correct
3. **Dependents list** — what breaks if this folder moves or its contents change
4. **Naming framework** — what the canonical naming rules are for this folder
5. **Missing templates** — what snippets/templates/ entries would standardise outputs
6. **Subplan** — phased execution steps with approval gates

Folders still needing this treatment (in recommended order):
1. `snippets/` (components + assets — highest churn, most dependents)
2. `ai-tools/` (coordinate with AI-TOOLS-GOVERNANCE)
3. `tools/` (post SCRIPT-GOVERNANCE merge)
4. `api/` (small, low-risk)
5. `contribute/` (will merge into docs-guide/ — do after docs-guide/ is clean)
6. `operations/` (when it exists post SCRIPT-GOVERNANCE Task 14)
7. `workspace/` (after tasks/ rename — validate structure integrity)

> Do not execute any folder restructure until its draft + subplan exist and are approved.
