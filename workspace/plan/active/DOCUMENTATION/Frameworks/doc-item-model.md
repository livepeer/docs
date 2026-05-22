---
title: Documentation Item Model
status: locked — Phase 1 approved
created: 2026-03-22
locked-by: Human
---

# Documentation Item Model

> **DEPRECATED as canonical location.** The published version lives at `docs-guide/frameworks/doc-item-model.mdx`. This file remains as the working draft. Edits here must be synced to the published version.

> Frozen contract for all documentation governance execution. Do not modify without a new HUMAN REVIEW decision logged in `plan.md`.
>
> Source of truth for: classification taxonomy · naming convention · metadata spec · enforcement model.

---

## Classification Taxonomy

Every documentation item in this repo is classified with three fields:

```
<docType> / <concern> / <format>
```

### docType

| docType | What it is |
|---|---|
| `policy` | Enforced rule or contract — gate-owned |
| `framework` | Decision model or taxonomy — guidance-level |
| `catalog` | Generated inventory of a repo surface |
| `feature-map` | Narrative overview of a repo capability |
| `tooling-ref` | Reference for a tool, CLI, or workflow |
| `contributor-guide` | Procedural guide for human contributors |
| `ai-adapter` | Per-system AI instruction file |
| `ai-rule` | Standalone AI protocol or safety rule |
| `registry` | Machine-readable data file (consumed by automation) |
| `secrets-ref` | Environment variable and secrets documentation |
| `template` | Reusable authoring template |
| `component` | UI component — governed by component JSDoc spec (separate) |
| `script` | Operational script — governed by script JSDoc spec (separate) |

### concern

Inherits from the script taxonomy — homogeneous across all item types.

| Concern | What it covers |
|---|---|
| `content` | Docs pages, copy, authoring standards, page taxonomy, veracity |
| `components` | Component library, registry, naming, documentation |
| `governance` | Repo structure, scripts, agent docs, manifests, catalogs |
| `ai` | AI tooling, agent rules, adapter files, skills, discoverability |

**Locked by D-CONCERN (2026-03-22):** `governance` is a valid concern value. Four values total. Flagged for review if execution surfaces edge cases.

### format

| Format | Extension(s) | Metadata approach |
|---|---|---|
| `mdx` | `.mdx` | YAML frontmatter |
| `md` | `.md` | YAML frontmatter |
| `mdc` | `.mdc` | YAML frontmatter |
| `json` | `.json` | Registry-only (no inline metadata) |
| `yaml` | `.yml`, `.yaml` | Registry-only |
| `env` | `.env.example` | Registry-only |
| `jsx` | `.jsx` | Component JSDoc spec (pre-existing — not overridden) |
| `js` | `.js` | Script JSDoc spec (pre-existing — not overridden) |

---

## Directory Convention

**Locked by D1 (2026-03-22):** Concern is expressed as a **sub-folder within type folders** — not as a file prefix.

Applies to: `policies/`, `frameworks/`, `features/`, `tooling/`

Examples:
- `docs-guide/policies/governance/quality-gates.mdx`
- `docs-guide/policies/content/v2-folder-governance.mdx`
- `docs-guide/frameworks/components/component-governance.mdx`

**Exception — catalog files:** `docs-guide/catalog/` stays flat. Concern is expressed as a filename prefix (see D9 below). No sub-folders needed.

**Exception — `contributing/` and `config/`:** Single-concern, flat. No sub-folder splits at current stage.

---

## Catalog File Naming (D9)

**Locked by D9 (2026-03-22):** Catalog files in `docs-guide/catalog/` use concern-prefix naming. Derived from docType/concern classification in `designing/structure.md`.

| Current filename | concern | Renamed to |
|---|---|---|
| `scripts-catalog.mdx` | governance | `governance-scripts-catalog.mdx` |
| `components-catalog.mdx` | components | `components-catalog.mdx` *(no change — concern already unambiguous)* |
| `workflows-catalog.mdx` | governance | `governance-workflows-catalog.mdx` |
| `templates-catalog.mdx` | content | `content-templates-catalog.mdx` |
| `pages-catalog.mdx` | content | `content-pages-catalog.mdx` |
| `ui-templates.mdx` | content | `content-ui-templates.mdx` |
| *(new)* `documentation-catalog.mdx` | governance | `governance-documentation-catalog.mdx` |

> `ui` is a content sub-area per `designing/structure.md` — `ui-templates.mdx` carries concern `content`.

---

## Metadata Specification

### Applies to: `.mdx`, `.md`, `.mdc`

Required fields:

```yaml
consumer: [human | agent | automation]   # array — who reads or acts on this file
maintenance: generated | hand-maintained | mixed
status: active | draft | deprecated
```

Conditional fields:

```yaml
generator: path/to/script.js    # required if maintenance = generated or mixed
validator: path/to/script.js    # required if maintenance = hand-maintained or mixed
lastVerified: YYYY-MM-DD        # required if maintenance = hand-maintained
```

### Applies to: `.json`, `.env.example`, `.yml`

Registry-only. No inline metadata. Every file of these formats must have a corresponding entry in `governance-documentation-catalog.mdx` that captures: `canonical path`, `consumer`, `maintenance`, `generator` (if applicable), `validator`, `status`.

### Does not apply to: `.jsx`, `.js`

`component` and `script` item types have pre-existing governance specs. This model does not override them. Docs governance interacts with them only at catalog level.

---

## Enforcement Summary

| Format | Gate | Mechanism |
|---|---|---|
| `.mdx` in `docs-guide/` | `pr-changed` (soft gate) | `tests/unit/docs-guide-sot.test.js` — required fields check |
| `.md` adapter files | None currently | Manual until Phase 5 validator |
| `.mdc` Cursor rules | None currently | Manual until Phase 5 |
| `.json` registry files | None currently | Catalog entry validator (Phase 5) |
| `.env.example` | None currently | `validate-env-example.js` (Phase 5) |
| `.jsx` components | `pre-commit` (existing) | Component registry validator |
| `.js` scripts | `pre-commit` (existing) | `script-docs.test.js` |

---

## Full Specification Reference

Full examples, the complete location map, and open questions for Phase 2 are in:
- `designing/structure.md` — complete metadata spec with examples per format
- `design-canonical.mdx` — system architecture and part-level design
