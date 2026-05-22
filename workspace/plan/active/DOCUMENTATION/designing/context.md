> This file is archived. It is a duplicate of the root-level `context.md`. See `workspace/plan/active/DOCUMENTATION/context.md` for the current version.

---
title: Documentation Governance — Context
status: active
owner: DOCUMENTATION
created: 2026-03-21
---

# Documentation Governance Plan — Context

## Working Folder

`workspace/plan/active/DOCUMENTATION/`

## Aim

Create a holistic governance plan and framework for repo documentation: pages, component, script, tool catalogs, and all other repo artifacts — all self-documenting in a predictable way with a clear source-of-truth available for each `<type>/<concern>` combination.

---

## Scope

This plan covers documentation *about the repo itself* — how it is built, governed, and operated. It is distinct from `v2/` public user-facing docs content, which is governed by CONTENT-WRITING.

---

## Key Facts

### Current documentation home: `docs-guide/`

- `docs-guide/` is the primary internal documentation folder for this repo.
- It serves **both** human contributors and AI agents (though that dual role is not clearly marked).
- Content is a mix of:
  - **Auto-generated** catalogs (`catalog/*.mdx`) — do not edit directly
  - **Hand-maintained** governance docs (policies, frameworks, features, tooling)
- Presented publicly in:
  - `v2/resources/documentation-guide/` — public human-facing pages
  - `v2/internal/` — internal human-facing pages (looser governance)
- Some docs exist in **both** places with different depth or focus

### Documentation is NOT consolidated

| Location | Primary audience | Content type |
|---|---|---|
| `docs-guide/` | Internal contributors + AI agents | Canonical governance, catalogs, frameworks, policies |
| `v2/resources/documentation-guide/` | Public / human contributors | Human-facing guides to using the docs system |
| `v2/internal/` | Internal team | Internal ops, philosophy, personas, governance narratives |
| `contribute/CONTRIBUTING/` | Human contributors | Git workflow, hooks, agent instructions |
| `ai-tools/ai-rules/` | AI agents | Agent-specific protocols, safety, override policy |
| `AGENTS.md` / adapter files | AI agents | Repo baseline for each AI system |
| `workspace/plan/active/` | Planning | Active execution plans (NOT canonical docs — scratch) |

### Auto-generated vs hand-maintained distinction

**Generated (do not edit):**
- `docs-guide/catalog/scripts-catalog.mdx`
- `docs-guide/catalog/workflows-catalog.mdx`
- `docs-guide/catalog/templates-catalog.mdx`
- `docs-guide/catalog/pages-catalog.mdx`
- `docs-guide/catalog/components-catalog.mdx`
- `ai-tools/registry/ai-tools-inventory.md`

**Hand-maintained (canonical):**
- All `docs-guide/policies/*.mdx`
- All `docs-guide/frameworks/*.mdx`
- All `docs-guide/features/*.mdx` (some are stubs)
- `docs-guide/tooling/*.mdx`
- `docs-guide/source-of-truth-guide.mdx`

### Script taxonomy

SCRIPT-GOVERNANCE defined a three-tier model for all scripts:
- **Layer 1 (type):** `audits/`, `generators/`, `validators/`, `remediators/`, `dispatch/`, `automations/`
- **Layer 2 (concern):** `content/`, `components/`, `governance/`, `ai/`
- **Layer 3 (niche):** per type×concern combination

This same `<type>/<concern>` model is the right foundation for documentation governance.

---

## Related Plans

| Plan | Status | Owns |
|---|---|---|
| REPO-STRUCTURE-GOV | Active | Root folder layout, v2/ cleanup, docs-guide/ restructure |
| SCRIPT-GOVERNANCE | Active | tools/scripts/ → operations/ migration, three-tier taxonomy |
| COMPONENT-GOVERNANCE | ~Complete | Component library taxonomy, registry, catalog |
| CONTENT-WRITING | Active | v2/ public page content framework |
| AI-TOOLS-GOVERNANCE | Active | ai-tools/ placement, AI adapter files, discoverability |
| CANONICAL-TRUTH-GUIDES | Stub | Update all docs with combined frameworks — needs planning |
| CONTENT-STRUCTURE-TEMPLATES | Early research | Page templates, page-type framework |
| TOOLING | Active | lpd CLI audit, stale path fixes |
| DOCUMENTATION (this plan) | New | Holistic documentation governance framework |

---

## Files in This Folder

| File | Purpose |
|---|---|
| `context.md` | This file — working context, aim, key facts |
| `research.md` | Summary of all active plan reviews + docs-guide scan |
| `audit.md` | Full audit: what is documented, where, how, for whom; conflicts, gaps, issues |
| `recommendations.md` | Governance recommendations for homogenised documentation |
