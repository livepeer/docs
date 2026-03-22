---
title: Documentation Item — Structure Spec
status: draft — Phase 1 co-creation
created: 2026-03-22
---

# Documentation Item — Structure Specification

> Defines the full taxonomy, directory map, and metadata spec per file format for all documentation items in this repo.
> This is the source of truth for the documentation governance model being built in Phase 1.

---

## Part 1: Documentation Item Taxonomy

Documentation items follow a three-field classification model — analogous to the script `<type>/<concern>/<niche>` taxonomy.

```
<docType> / <concern> / <format>
```

### docType (what the item IS)

| docType | What it is | Examples |
|---|---|---|
| `policy` | Enforced rule or contract — gate-owned | `quality-gates.mdx`, `v2-folder-governance.mdx` |
| `framework` | Decision model or taxonomy — guidance-level | `component-governance.mdx`, `page-taxonomy-framework.mdx` |
| `catalog` | Generated inventory of a repo surface | `scripts-catalog.mdx`, `components-catalog.mdx` |
| `feature-map` | Narrative overview of a repo capability | `feature-map.mdx`, `automations.mdx` |
| `tooling-ref` | Reference for a tool, CLI, or workflow | `lpd-cli.mdx`, `ai-tools.mdx` |
| `contributor-guide` | Procedural guide for human contributors | `contributing.mdx`, `mintlify.mdx` |
| `ai-adapter` | Per-system AI instruction file | `AGENTS.md`, `.claude/CLAUDE.md`, `.cursor/rules/*.mdc` |
| `ai-rule` | Standalone AI protocol or safety rule | `UNIVERSAL-AI-PROTOCOL.md`, `HUMAN-OVERRIDE-POLICY.md` |
| `registry` | Machine-readable data file (consumed by automation) | `component-registry.json`, `ownerless-governance-surfaces.json` |
| `secrets-ref` | Environment variable and secrets documentation | `.env.example` |
| `template` | Reusable authoring template | `snippets/templates/docs-guide/*.mdx`, `snippets/templates/pages/*.mdx` |
| `component` | UI component (governed by component JSDoc spec — separate) | `snippets/components/**/*.jsx` |
| `script` | Operational script (governed by script JSDoc spec — separate) | `tools/scripts/**/*.js` |

> **Note**: `component` and `script` have their own pre-existing governance specs (component JSDoc, script JSDoc). The docs governance model does not override those — it supplements by describing them in the catalog.

### concern (what domain it covers)

Inherits from the script taxonomy — homogeneous across all types:

| Concern | What it covers |
|---|---|
| `content` | Docs pages, copy, authoring standards, page taxonomy, veracity |
| `components` | Component library, registry, naming, documentation |
| `governance` | Repo structure, scripts, agent docs, manifests, catalogs |
| `ai` | AI tooling, agent rules, adapter files, skills, discoverability |

### format (the file format)

| Format | Extension(s) | Metadata approach |
|---|---|---|
| `mdx` | `.mdx` | YAML frontmatter |
| `md` | `.md` | YAML frontmatter |
| `mdc` | `.mdc` (Cursor rules) | YAML frontmatter |
| `json` | `.json` | Registry-only (no inline metadata) |
| `yaml` | `.yml`, `.yaml` | Registry-only |
| `env` | `.env.example` | Registry-only |
| `jsx` | `.jsx` | Component JSDoc spec (pre-existing) |
| `js` | `.js` | Script JSDoc spec (pre-existing) |

---

## Part 2: Full Documentation Location Map

All locations in the repo that contain documentation items. Ordered by primary documentation role.

```
/                                    ← repo root
│
├── AGENTS.md                        ← [ai-adapter / governance / md]  — repo-wide AI baseline
├── README.md                        ← [contributor-guide / governance / md]  — orientation
├── .env.example                     ← [secrets-ref / governance / env]  — canonical secrets reference
│
├── .claude/
│   └── CLAUDE.md                    ← [ai-adapter / ai / md]
│
├── .cursor/
│   └── rules/
│       ├── repo-governance.mdc      ← [ai-adapter / ai / mdc]
│       └── no-deletions.mdc         ← [ai-adapter / ai / mdc]
│
├── .windsurf/
│   └── rules/
│       └── repo-governance.md       ← [ai-adapter / ai / md]
│
├── .augment/
│   └── rules/                       ← [ai-adapter / ai / md] (3 files)
│
├── .github/
│   ├── copilot-instructions.md      ← [ai-adapter / ai / md]
│   └── workflows/*.yml              ← [registry / governance / yaml]  — registry-only; not doc items themselves
│
├── ai-tools/
│   ├── ai-rules/
│   │   ├── UNIVERSAL-AI-PROTOCOL.md ← [ai-rule / ai / md]
│   │   ├── AI_GUIDELINES.md         ← [ai-rule / ai / md]
│   │   ├── HUMAN-OVERRIDE-POLICY.md ← [ai-rule / ai / md]
│   │   └── ROLLBACK-GUIDE.md        ← [ai-rule / ai / md]
│   └── registry/
│       ├── ai-tools-registry.json   ← [registry / ai / json]  — canonical AI tools inventory
│       └── ai-tools-inventory.md    ← [catalog / ai / md]    — generated; do not edit
│
├── contribute/                      ← [contributor-guide / governance / md]  — MOVING to docs-guide/contributing/
│   └── CONTRIBUTING/
│       ├── README.md
│       ├── GIT-HOOKS.md
│       └── AGENT-INSTRUCTIONS.md
│
├── docs-guide/                      ← PRIMARY INTERNAL DOCUMENTATION HOME
│   ├── source-of-truth-guide.mdx    ← [feature-map / governance / mdx]  — root landing
│   ├── docs-glossary.md             ← [framework / content / md]  — internal terms; format TBD (see Q6)
│   ├── component-registry.json      ← [registry / components / json]  — generated; registry-only
│   ├── component-usage-map.json     ← [registry / components / json]  — generated; registry-only
│   ├── component-registry-schema.json  ← [registry / components / json]  — schema; registry-only
│   │
│   ├── catalog/                     ← GENERATED — do not edit manually
│   │   ├── scripts-catalog.mdx      ← [catalog / governance / mdx]
│   │   ├── components-catalog.mdx   ← [catalog / components / mdx]
│   │   ├── workflows-catalog.mdx    ← [catalog / governance / mdx]
│   │   ├── templates-catalog.mdx    ← [catalog / content / mdx]
│   │   ├── pages-catalog.mdx        ← [catalog / content / mdx]
│   │   └── ui-templates.mdx         ← [tooling-ref / content / mdx]  — mixed: partially generated
│   │
│   ├── contributing/                ← HAND-MAINTAINED
│   │   ├── contributing.mdx         ← [contributor-guide / governance / mdx]
│   │   └── mintlify.mdx             ← [contributor-guide / governance / mdx]
│   │
│   ├── features/                    ← HAND-MAINTAINED
│   │   ├── feature-map.mdx          ← [feature-map / governance / mdx]
│   │   ├── architecture-map.mdx     ← [feature-map / governance / mdx]
│   │   ├── automations.mdx          ← [feature-map / governance / mdx]
│   │   ├── data-integrations.mdx    ← [feature-map / governance / mdx]
│   │   ├── ui-system.mdx            ← [feature-map / content / mdx]
│   │   ├── visual-explainer-workflows.mdx  ← [tooling-ref / content / mdx]
│   │   └── ai-features.mdx          ← [feature-map / ai / mdx]  — stub; needs populating
│   │
│   ├── frameworks/                  ← HAND-MAINTAINED
│   │   ├── component-governance.mdx ← [framework / components / mdx]
│   │   ├── content-system.mdx       ← [framework / content / mdx]
│   │   ├── page-taxonomy-framework.mdx ← [framework / content / mdx]
│   │   └── research-skill-workflow.mdx ← [framework / ai / mdx]
│   │
│   ├── policies/                    ← HAND-MAINTAINED
│   │   ├── source-of-truth-policy.mdx         ← [policy / governance / mdx]
│   │   ├── agent-governance-framework.mdx     ← [policy / ai / mdx]
│   │   ├── skill-pipeline-map.mdx             ← [policy / ai / mdx]
│   │   ├── generated-artifact-and-hook-governance.mdx ← [policy / governance / mdx]
│   │   ├── quality-gates.mdx                  ← [policy / governance / mdx]
│   │   ├── v2-folder-governance.mdx           ← [policy / content / mdx]
│   │   ├── root-allowlist-governance.mdx      ← [policy / governance / mdx]
│   │   ├── ownerless-governance.mdx           ← [policy / governance / mdx]
│   │   ├── script-governance.mdx              ← [policy / governance / mdx]
│   │   ├── component-layout-decisions.mdx     ← [framework / components / mdx]
│   │   ├── audit-system-overview.mdx          ← [policy / governance / mdx]
│   │   ├── cleanup-quarantine-policy.mdx      ← [policy / governance / mdx]
│   │   ├── workspace-lifecycle-policy.mdx     ← [policy / governance / mdx]
│   │   ├── docs-guide-structure-policy.mdx    ← [policy / governance / mdx]
│   │   ├── infrastructure-principles.mdx      ← [policy / governance / mdx]
│   │   └── snippets-assets-policy.mdx         ← [policy / components / mdx]
│   │
│   └── tooling/                     ← HAND-MAINTAINED
│       ├── lpd-cli.mdx              ← [tooling-ref / governance / mdx]
│       ├── dev-tools.mdx            ← [tooling-ref / governance / mdx]
│       ├── ai-tools.mdx             ← [tooling-ref / ai / mdx]
│       ├── lpd-mdx-preview.mdx      ← [tooling-ref / content / mdx]
│       └── reference-maps/
│           └── icon-map.mdx         ← [tooling-ref / content / mdx]
│
├── snippets/
│   ├── components/**/*.jsx          ← [component / components / jsx]  — component JSDoc spec applies
│   └── templates/
│       ├── docs-guide/*.mdx         ← [template / governance / mdx]
│       └── pages/*.mdx              ← [template / content / mdx]
│
├── tools/
│   ├── scripts/**/*.js              ← [script / <concern> / js]  — script JSDoc spec applies
│   └── config/
│       ├── ownerless-governance-surfaces.json ← [registry / governance / json]
│       └── generated-artifacts.json           ← [registry / governance / json]
│
└── v2/
    ├── resources/documentation-guide/ ← [contributor-guide / governance / mdx]  — PUBLIC surface
    │   └── (18 pages — parallel to docs-guide but human-facing; governed separately)
    └── internal/                       ← [feature-map / governance / mdx]  — INTERNAL surface
        └── (22 pages — internal team; mixed concerns)
```

---

## Part 3: Metadata Specification Per File Format

### Format 1: `.mdx` and `.md` — YAML Frontmatter

**Applies to**: All files in `docs-guide/`, `ai-tools/registry/ai-tools-inventory.md`, `contribute/CONTRIBUTING/`, AI adapter `.md` files, `AGENTS.md`, `README.md`

**Rule**: If a file is a documentation item and uses `.mdx` or `.md` format, it MUST carry the governance fields in YAML frontmatter.

#### Required fields (docs-guide/ MDX)

```yaml
---
title: string                          # REQUIRED — display title
description: string                    # REQUIRED — one-sentence purpose
consumer: [human | agent | automation] # REQUIRED — array; who reads/acts on this file
maintenance: generated | hand-maintained | mixed  # REQUIRED
status: active | draft | deprecated    # REQUIRED
---
```

#### Conditional fields

```yaml
generator: path/to/script.js    # REQUIRED if maintenance = generated or mixed
                                 # must be a valid repo-root-relative path
validator: path/to/script.js    # REQUIRED if maintenance = hand-maintained or mixed
                                 # path to the script or CI workflow that checks this file
lastVerified: YYYY-MM-DD        # REQUIRED if maintenance = hand-maintained
                                 # date this file was last checked against its source
```

#### Optional fields

```yaml
sidebarTitle: string            # Mintlify sidebar label (if different from title)
keywords: [array]               # SEO/search keywords
```

#### Full example — policy page (hand-maintained)

```yaml
---
title: Quality Gates Map
sidebarTitle: Quality Gates
description: Layered quality gate model defining what runs where, owned by which tier, and what blocks vs. warns.
consumer: [human, agent]
maintenance: hand-maintained
status: active
lastVerified: 2026-03-21
validator: tests/unit/docs-guide-sot.test.js
keywords:
  - quality gates
  - governance
  - pre-commit
  - CI
---
```

#### Full example — generated catalog page

```yaml
---
title: Scripts Catalog
sidebarTitle: Scripts Catalog
description: Generated aggregate catalog inventory of all repository scripts from group script indexes.
consumer: [human, agent]
maintenance: generated
status: active
generator: tests/unit/script-docs.test.js
keywords:
  - scripts
  - catalog
  - inventory
---
```

#### Full example — mixed page (partly generated, partly hand-maintained)

```yaml
---
title: Source of Truth Guide
description: Internal source of truth for repository features, operating rules, and supporting catalogs.
consumer: [human, agent]
maintenance: mixed
status: active
generator: tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js
lastVerified: 2026-03-21
---
```

#### Full example — AI adapter file (AGENTS.md / adapter .md files)

```yaml
---
title: Repo Agent Baseline
description: Canonical governance baseline for all AI agents operating in this repository.
consumer: [agent]
maintenance: hand-maintained
status: active
lastVerified: 2026-03-21
---
```

> **Note on AGENTS.md**: This file currently has no frontmatter. Adding governance frontmatter here is a Phase 3 task. AI adapters in `.claude/`, `.cursor/`, `.windsurf/`, `.augment/` follow the same spec if they use `.md` format.

---

### Format 2: `.mdc` (Cursor rules format)

**Applies to**: `.cursor/rules/*.mdc`

Cursor's `.mdc` format supports a YAML frontmatter block at the top. Same fields apply.

#### Full example

```yaml
---
title: Repo Governance Rules — Cursor
description: Cursor adapter for repo governance — mirrors AGENTS.md with Cursor-specific formatting.
consumer: [agent]
maintenance: hand-maintained
status: active
lastVerified: 2026-03-21
---
```

---

### Format 3: `.json` — Registry-Only

**Applies to**: `docs-guide/component-registry.json`, `docs-guide/component-usage-map.json`, `docs-guide/component-registry-schema.json`, `tools/config/ownerless-governance-surfaces.json`, `tools/config/generated-artifacts.json`, `ai-tools/registry/ai-tools-registry.json`

**Rule**: JSON files CANNOT carry frontmatter. They MUST NOT have a `_meta` key added (breaks consumers). Instead, they are described entirely in the documentation catalog.

**Every JSON documentation item must have a corresponding entry in `documentation-catalog.mdx`** with the following fields captured there:

| Field | Where captured |
|---|---|
| `canonical` | File path — in catalog entry |
| `consumer` | In catalog row |
| `maintenance` | In catalog row — `generated` or `hand-maintained` |
| `generator` | In catalog row (if generated) |
| `validator` | In catalog row |
| `status` | In catalog row |

#### Full example (catalog entry for a JSON file)

In `docs-guide/catalog/documentation-catalog.mdx`:

```md
| `docs-guide/component-registry.json` | registry | components | `[automation]` | generated | `generate-component-registry.js` | `tests/unit/component-governance-generators.test.js` | active |
```

---

### Format 4: `.env.example` — Registry-Only (Special Case)

**Applies to**: `.env.example` (root), `tools/notion/.env.example`

**Rule**: `.env.example` is plain shell/text format — no frontmatter. Registry-only.

**Additional requirement**: `.env.example` must be registered as an ownerless governance surface in `tools/config/ownerless-governance-surfaces.json`.

The catalog entry for `.env.example` carries:
- `consumer: [human, agent]` — contributors need it for setup; agents need to know what secrets exist
- `maintenance: hand-maintained`
- `validator: tools/scripts/validators/governance/compliance/validate-env-example.js` (to be created — Phase 5)
- Relationship to `tools/notion/.env.example` noted: Notion-scoped, cross-referenced from root

---

### Format 5: `.yml` / `.yaml` (GitHub Workflows) — Registry-Only

**Applies to**: `.github/workflows/*.yml`

**Rule**: Workflow YAML files are not documentation items themselves — they ARE the canonical source for CI behaviour. They are referenced BY documentation (e.g. `generated-artifact-and-hook-governance.mdx` links to specific workflows). Registry-only.

The documentation catalog notes which docs-guide files reference which workflow files — this creates a traceable dependency. No governance frontmatter is added to workflow files.

---

### Format 6: `.jsx` — Component JSDoc Spec (pre-existing, not overridden)

**Applies to**: `snippets/components/**/*.jsx`

**Rule**: Component files are governed by the **component JSDoc specification** (enforced via `generate-component-registry.js` and component validators). The docs governance model does NOT add fields to component files.

The docs governance model interacts with components only at the **catalog level** — `components-catalog.mdx` is the documentation item; the `.jsx` files are its source data.

#### Current component JSDoc fields (for reference)

```jsx
/**
 * @component ComponentName
 * @type elements | wrappers | displays | scaffolding | integrators
 * @subniche buttons | cards | tables | etc.
 * @status stable | experimental | deprecated
 * @description One-sentence description.
 * @aiDiscoverability none | low | medium | high
 */
```

> The `@aiDiscoverability` field is a recent addition — relevant to the AI-TOOLS-GOVERNANCE plan.

---

### Format 7: `.js` — Script JSDoc Spec (pre-existing, not overridden)

**Applies to**: `tools/scripts/**/*.js`

**Rule**: Script files are governed by the **11-tag script JSDoc specification** (enforced via `script-docs.test.js`). The docs governance model does NOT add fields to script files.

The docs governance model interacts with scripts only at the **catalog level** — `scripts-catalog.mdx` is the documentation item.

#### Script JSDoc fields (for reference — from script-framework.md)

```js
/**
 * @summary One-line description
 * @type audit | generator | validator | remediator | dispatch | automation
 * @concern content | components | governance | ai
 * @niche specific-niche
 * @domain docs
 * @version 1.0.0
 * @lastModified YYYY-MM-DD
 * @mode read-only | generate | write | edit | execute
 * @outputs path/to/output.json
 * @dependencies dependency1, dependency2
 * @example node script.js --flag
 */
```

---

## Part 4: Enforcement Summary

| Format | Enforcement mechanism | Gate level |
|---|---|---|
| `.mdx` in `docs-guide/` | `tests/unit/docs-guide-sot.test.js` — checks required fields present | `pr-changed` (soft gate) |
| `.md` adapter files (AGENTS.md etc.) | Manual check initially; validator to be added (Phase 5) | None currently |
| `.mdc` Cursor rules | Manual check initially | None currently |
| `.json` registry files | Catalog entry validator (Phase 5) | None currently |
| `.env.example` | `validate-env-example.js` (Phase 5) | None currently |
| `.jsx` components | Component registry validator (existing) | `pr-changed` (existing) |
| `.js` scripts | `script-docs.test.js` (existing) | `pre-commit` (existing) |

---

## Part 5: Open Questions for Phase 1 Review

| # | Question | Blocks |
|---|---|---|
| OQ-1 | Should `docs-glossary.md` become `.mdx` (Mintlify-served, consumer: [human, agent]) or stay `.md` (contributor/agent-only, not on nav)? | Format assignment |
| OQ-2 | Should AI adapter files (AGENTS.md, .claude/CLAUDE.md etc.) carry governance frontmatter? They're not Mintlify-served and adding YAML front matter to AGENTS.md may confuse some agents parsing it as a plain governance file. | Spec scope |
| OQ-3 | What is the `docType` for `v2/resources/documentation-guide/` pages? They're public-facing human guides — do they carry the same `consumer` / `maintenance` frontmatter, or a different field set? | Public surface spec |
| OQ-4 | Should `status: active | draft | deprecated` be part of the governance frontmatter, or is this already covered by existing frontmatter in some files? | Field deduplication |
