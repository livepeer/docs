# Script Documentation Consolidation Analysis

> **Status**: Analysis only — no changes. See Task 13 in plan.md for execution tasks.
> **Date**: 2026-03-20

---

## 1. Current Documentation Surfaces Inventory

The following surfaces currently document scripts in some way:

### A. Machine-generated catalogs (auto-written by scripts)

| File | Generator | Content |
|------|-----------|---------|
| `docs-guide/catalog/scripts-catalog.mdx` | `tests/unit/script-docs.test.js --write --rebuild-indexes` | Aggregate index of all scripts grouped by type/concern/niche, with JSDoc fields rendered |
| `.githooks/script-index.md` | Same | Index of scripts scoped to `.githooks` |
| `tests/script-index.md` | Same | Index of scripts scoped to `tests/` |
| `tools/script-index.md` | Same | Index of scripts scoped to `tools/scripts/` |
| `tasks/scripts/script-index.md` | Same | Index of scripts scoped to `tasks/scripts/` |
| `tasks/reports/script-classifications.json` | Maintained manually + auto-path-fixed | Classification data: path, script name, category, purpose, scope, needs, purpose_statement, pipeline |

### B. Human-authored specification docs (in this folder)

| File | Content |
|------|---------|
| `tasks/plan/active/SCRIPT-GOVERNANCE/script-framework.md` | **Canonical spec** — 1,357 lines. Full taxonomy, JSDoc 11-tag standard, script structure standard, best practices, governance rules, pipeline integration, templates for all 6 types |
| `tasks/plan/active/SCRIPT-GOVERNANCE/structure.md` | Folder taxonomy tree + JSDoc tag spec (earlier version, partly superseded by script-framework.md) |
| `tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` | Human-readable script catalog (120 scripts, generated 2026-03-19, stale after reclassifications) |
| `tasks/plan/active/SCRIPT-GOVERNANCE/audit-report.md` | Deep audit findings from 4 parallel agents — implementation detail, violations, best practices scan |
| `tasks/plan/active/SCRIPT-GOVERNANCE/plan.md` | Task plan with completion tracking |
| `tasks/plan/active/SCRIPT-GOVERNANCE/reclassification-plan.md` | Reclassification waves plan (now complete) |

### C. Docs-guide human-readable pages (in docs navigation)

| File | Content |
|------|---------|
| `docs-guide/tooling/` (various) | Tooling documentation for contributors — some scripts referenced but not a catalog |
| `docs-guide/policies/agent-governance-framework.mdx` | References script governance rules and pipeline policy |
| `docs-guide/policies/root-allowlist-governance.mdx` | Allowlist policy — references enforcement scripts |
| `tools/scripts/README.md` | Markdown README with taxonomy overview and JSDoc standard link |

### D. Tool config / code-level references

| File | Content |
|------|---------|
| `tools/lib/script-governance-config.js` | Runtime config: governed roots, group index map, classification data path, aggregate index path |
| `tools/config/generated-artifacts.json` | Catalog of all generated files and their generators |
| `AGENTS.md` | Agent instructions referencing key script paths and lifecycle commands |
| `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | Agent-facing script lifecycle instructions |

### E. Scripts-library MDX (recent addition)

| File | Content |
|------|---------|
| `docs-guide/catalog/scripts-library.mdx` | Full script inventory — manually written during this task, partially overlaps with scripts-catalog.mdx |

---

## 2. Problems Identified

### 2.1 No single source of truth

There are **three overlapping sources** for script metadata:

1. **JSDoc headers in each script** — the authoritative per-script record
2. **`tasks/reports/script-classifications.json`** — flat JSON with category/purpose/scope/pipeline per script
3. **`docs-guide/catalog/scripts-catalog.mdx`** — auto-generated from (1) + (2)

These are not fully in sync. `script-classifications.json` uses an older field schema (category, not type/concern/niche). The JSDoc headers use the new 11-tag schema. The catalog combines both but the combination is inconsistent.

### 2.2 Duplication between specification documents

`structure.md` and `script-framework.md` overlap significantly:
- Both define the taxonomy
- Both document the JSDoc tag standard
- `structure.md` predates `script-framework.md` and is partially superseded
- Neither references the other explicitly

`catalog.md` (tasks folder) and `scripts-catalog.mdx` (docs-guide) both attempt to list all scripts. One is stale, one is auto-generated but imperfect.

### 2.3 `scripts-library.mdx` vs `scripts-catalog.mdx`

Two MDX files in `docs-guide/catalog/` serve similar purposes:
- `scripts-catalog.mdx` — auto-generated, comprehensive, hard to read
- `scripts-library.mdx` — manually written during this task, human-readable, but will drift

### 2.4 `script-classifications.json` schema mismatch

The JSON uses `category` (old taxonomy: utility, orchestrator, validator, generator, remediator, enforcer) while scripts now use `type` (audit, generator, validator, remediator, dispatch, automation). The generator that builds the catalog handles both schemas via duck-typing, creating silent inconsistency.

### 2.5 Specification docs not on the docs nav

`script-framework.md` and `structure.md` live in `tasks/plan/active/SCRIPT-GOVERNANCE/` — accessible to developers who know where to look, but not discoverable via docs navigation. They should be surfaced in `docs-guide/tooling/` or `docs-guide/policies/`.

### 2.6 `catalog.md` is stale and redundant

`tasks/plan/active/SCRIPT-GOVERNANCE/catalog.md` was hand-generated in March 2026 from the pre-reclassification state. It is now stale. Since `scripts-catalog.mdx` is auto-generated, `catalog.md` has no ongoing value and should be either deprecated or used only as a snapshot artifact.

---

## 3. Proposed Architecture — One Source of Truth

### 3.1 JSON as canonical source

A single `tools/config/script-registry.json` should be the **one source of truth** for all script metadata. Structure per entry:

```json
{
  "path": "tools/scripts/audits/governance/scripts/audit-script-categories.js",
  "script": "audit-scripts",
  "type": "audit",
  "concern": "governance",
  "niche": "scripts",
  "purpose": "qa:repo-health",
  "description": "Script auditor — analyses all repo scripts...",
  "mode": "read-only",
  "pipeline": "manual",
  "scope": "tools/scripts, tasks/reports",
  "policy": "E-C1, R-R14",
  "status": "active"
}
```

This replaces `tasks/reports/script-classifications.json` (which has schema drift) and becomes the input for all generated outputs.

### 3.2 What gets generated FROM the JSON

| Output | Generator | Audience |
|--------|-----------|----------|
| `docs-guide/catalog/scripts-catalog.mdx` | `generate-docs-guide-components-index`-style generator | Docs contributors reading the docs guide nav |
| `tools/script-index.md` | Existing group index generators | Developers running scripts |
| `.githooks/script-index.md`, `tests/script-index.md`, `tasks/scripts/script-index.md` | Same | Scope-scoped quick refs |

### 3.3 What stays human-authored (MDX in docs nav)

One single MDX page in `docs-guide/tooling/scripts.mdx` (or `docs-guide/tooling/script-library.mdx`) that:
- Is **not** auto-generated
- Explains the taxonomy and how to use scripts
- Embeds or links the generated catalog for the full list
- References `script-framework.md` content (either inlined or linked)

This replaces both `scripts-library.mdx` and the current inline narrative in `scripts-catalog.mdx`.

### 3.4 Specification consolidation

| Keep | Deprecate/Archive |
|------|-------------------|
| `script-framework.md` — rename to `SPEC.md`, move to `docs-guide/tooling/` as MDX | `structure.md` — fold unique content into `script-framework.md` |
| One page in docs-guide nav for the spec | `catalog.md` in tasks/ — replace with link to generated catalog |

### 3.5 `scripts-library.mdx` fate

Merge useful narrative content into the single `docs-guide/tooling/scripts.mdx` page. Delete `scripts-library.mdx` (or archive). The auto-generated `scripts-catalog.mdx` handles the full listing.

---

## 4. What Needs to Happen (for Task 13 execution)

1. **Migrate `script-classifications.json` schema** — update all entries from `category` to `type/concern/niche`, rename file to `script-registry.json`, update `script-governance-config.js` path reference
2. **Update `generate-scripts-catalog` generator** — read from new JSON schema, produce clean MDX output
3. **Consolidate `structure.md` into `script-framework.md`** — one spec document
4. **Move `script-framework.md` to `docs-guide/tooling/`** as proper MDX with frontmatter, on the nav
5. **Delete or archive `catalog.md`** (tasks folder) — stale, replaced by generated catalog
6. **Merge `scripts-library.mdx` narrative into `docs-guide/tooling/scripts.mdx`** and delete the library file
7. **Add `docs-guide/tooling/scripts.mdx`** to `docs.json` nav

---

## 5. Decision Needed

> Should `script-registry.json` live in `tools/config/` (runtime config, alongside `paths.js`) or in `tasks/reports/` (data artifact)?
>
> Recommendation: `tools/config/script-registry.json` — it is config that drives generators, not a report output.

> Should the generated catalog MDX embed the full table inline, or render from a JSON data source at build time?
>
> Recommendation: Generate static MDX at commit time (current pattern) — Mintlify doesn't support dynamic data loading at build time without custom loaders.
