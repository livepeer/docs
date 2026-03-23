---
title: Documentation Governance — Context
status: active
owner: DOCUMENTATION
created: 2026-03-21
updated: 2026-03-23
---

# Documentation Governance Plan — Context

## Working Folder

`workspace/plan/active/DOCUMENTATION/`

## Aim

Create a holistic governance plan and framework for repo documentation: pages, components, scripts, tool catalogs, and all other repo artifacts — all self-documenting in a predictable way with a clear source-of-truth available for each `<type>/<concern>` combination.

---

## Scope

This plan covers documentation *about the repo itself* — how it is built, governed, and operated. It is distinct from `v2/` public user-facing docs content, which is governed by CONTENT-WRITING.

---

## Current State (as of 2026-03-23)

### Phase 1 complete — model locked

The documentation governance model is defined and approved. The `Frameworks/doc-item-model.md` is the frozen contract. All design decisions (D1, D-CONCERN, D9) are resolved.

### Phase 2 complete — immediate fixes done

All five immediate fixes were executed: wrong filename reference fixed in `source-of-truth-policy.mdx`, stale `tasks/` path fixed in `docs-guide/docs-glossary.md`, `components-catalog.mdx` regenerated, duplicate `v2/internal/docs-philosophy.mdx` deleted, glossary cross-links added.

### Phase 3 onward — execution pending human review

Parts ②–⑤ of the `design-canonical.mdx` system are all blocked by human review approval. The next action is in `plan.md`.

### 10-concern audit complete

All 10 concern audits are written in `audits/`. The `audits/master-audit.md` synthesises cross-cutting patterns and provides the prioritised remediation plan. `recommendations-pipeline.md` covers CI/pipeline/automation concerns and maps to best practices from `research-best-practices.md`.

---

## Key Facts

### Documentation home: `docs-guide/`

- `docs-guide/` is the primary internal documentation folder for this repo.
- Serves both human contributors and AI agents — dual role is not yet marked per-page (this plan will add that).
- Content is a mix of:
  - **Auto-generated** catalogs (`catalog/*.mdx`) — do not edit directly
  - **Hand-maintained** governance docs (policies, frameworks, features, tooling)
- Presented publicly in:
  - `v2/resources/documentation-guide/` — public human-facing pages
  - `v2/internal/` — internal human-facing pages (looser governance)

### Documentation is spread across 13+ locations

| Location | Primary audience | Content type |
|---|---|---|
| `docs-guide/` | Internal contributors + AI agents | Canonical governance, catalogs, frameworks, policies |
| `v2/resources/documentation-guide/` | Public / human contributors | Human-facing guides to the docs system |
| `v2/internal/` | Internal team | Internal ops, philosophy, personas, governance narratives |
| `contribute/CONTRIBUTING/` | Human contributors | Git workflow, hooks, agent instructions (pending move) |
| `ai-tools/ai-rules/` | AI agents | Agent-specific protocols, safety, override policy |
| `AGENTS.md` / adapter files | AI agents | Repo baseline for each AI system |
| `workspace/plan/active/` | Planning | Active execution plans (NOT canonical docs — scratch) |

### The governance model (locked)

Every documentation item is classified as `<docType> / <concern> / <format>`.

**docType values:** `policy | framework | catalog | feature-map | tooling-ref | contributor-guide | ai-adapter | ai-rule | registry | secrets-ref | template | component | script`

**concern values (4, locked):** `content | components | governance | ai`

**format values:** `mdx | md | mdc | json | yaml | env | jsx | js`

Required frontmatter fields for all `.mdx` / `.md` documentation items:
```yaml
consumer: [human | agent | automation]
maintenance: generated | hand-maintained | mixed
status: active | draft | deprecated
```

See `Frameworks/doc-item-model.md` for the full frozen spec.

---

## Related Plans

| Plan | Status | Owns |
|---|---|---|
| REPO-STRUCTURE-GOV | Active | Root folder layout, v2/ cleanup, docs-guide/ restructure |
| SCRIPT-GOVERNANCE | Active | tools/scripts/ → operations/ migration, three-tier taxonomy |
| COMPONENT-GOVERNANCE | ~Complete | Component library taxonomy, registry, catalog |
| CONTENT-WRITING | Active | v2/ public page content framework |
| AI-TOOLS-GOVERNANCE | Active | ai-tools/ placement, AI adapter files, discoverability |
| CANONICAL-TRUTH-GUIDES | Stub | Update all docs with combined frameworks — absorbed into this plan |
| CONTENT-STRUCTURE-TEMPLATES | Early research | Page templates, page-type framework |
| TOOLING | Active | lpd CLI audit, stale path fixes |
| DOCUMENTATION (this plan) | Active — execution phase | Holistic documentation governance framework |

---

## Files in This Folder

For the full navigation map, see `_index.md`.

### Root — canonical working files

| File | Purpose | Status |
|---|---|---|
| `context.md` | This file — aim, scope, current state, key facts | Current |
| `prd.md` | Product requirements: aims, outcomes, process, project management | Current |
| `plan.md` | Phased execution plan with progress tracking | Current |
| `research-best-practices.md` | Engineering best practices research (2026-03-23) | Current — do not edit |
| `recommendations.md` | Governance recommendations R1–R23, structural/location concerns | Current — do not edit |
| `recommendations-pipeline.md` | CI/pipeline/automation recommendations (2026-03-23) | Current — do not edit |
| `design-canonical.mdx` | System architecture, per-part ideal state, quality bars, outputs | Current — execution reference |

### Subfolders

| Folder | Contents | Status |
|---|---|---|
| `audits/` | 10 concern audits + `master-audit.md` synthesis | Authoritative — do not edit |
| `system-canonical-design/` | 11 system design files (one per concern + master) | Authoritative — do not edit |
| `Frameworks/` | `doc-item-model.md` — frozen classification contract | Locked — do not modify without HUMAN REVIEW |
| `designing/` | Design iteration files from Phase 1 co-creation | Historical — mostly archived; `design-plan-v2.md` + `structure.md` + `consumer-assignments.md` are active |
| `_archive/` | Superseded files | Historical reference only |
