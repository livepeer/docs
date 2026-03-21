---
title: Documentation Governance — Audit
status: active
owner: DOCUMENTATION
created: 2026-03-21
---

# Documentation Audit

> **Summary table first, then full detail.**
> Tasks 2, 3, 4, and 5 are all captured here.

---

## Summary

### Documentation Audit — Findings Summary

#### The Core Problem

Documentation for this repo lives across 13+ locations with no unified ownership model, no per-page audience tagging (human vs. agent), no sync pipeline between internal canonical docs and their public/agent surfaces, and no validators for hand-maintained governance files.

### Critical Issues Found

🔴 Structural fragmentation

- contribute/CONTRIBUTING/ and docs-guide/contributing/ are both live simultaneously — two active contributor guide locations
- 13 documentation locations with no index connecting them
- docs-guide/ serves both humans and agents but has no per-page audience tags

🔴 Duplicate/conflicting content

- v2/internal/docs-philosophy.mdx is an exact duplicate of v2/internal/overview/docs-philosophy.mdx
- Three glossary files (docs-guide/docs-glossary.md, v2/resources/livepeer-glossary.mdx, v2/resources/resources/compendium/glossary.mdx) with overlapping scope and no declared boundaries
- AI features documented in 3 separate files (ai-features.mdx stub, ai-tools.mdx, v2/resources/.../ai-features.mdx) with no designated canonical
- source-of-truth-policy.mdx references docs-guide/overview.mdx as a required file — that file doesn't exist (it's source-of-truth-guide.mdx)

🔴 Generator staleness

- components-catalog.mdx has stale generator banner path and shows undefined categories — not re-run since component restructure merged
- After SCRIPT-GOVERNANCE Task 14 (operations/ move), ALL catalog generator banners will need simultaneous updates

🔴 Secrets/env docs gap

- .env.example is well-maintained but completely invisible — no link from docs-guide
- AGENTS.md
- or any contributing guide. Not in the ownerless governance manifest.

🟠 No validators for hand-maintained docs

- All docs-guide/policies/, frameworks/, features/ pages are hand-maintained with zero freshness enforcement. Only catalog files have CI validators.
- 5 AI adapter files (Claude, Cursor, Windsurf, Augment, Copilot) can diverge from AGENTS.md silently — no sync validator.

### Recommendations Summary

Do immediately (5-20 min each):

- Fix the wrong filename in source-of-truth-policy.mdx
- Fix stale tasks/ path in docs-guide/docs-glossary.md
- Re-run the components-catalog generator
- Delete the duplicate v2/internal/docs-philosophy.mdx
- Add scope notes + cross-links to all three glossary files

Key structural fixes:

- Complete contribute/ → docs-guide/contributing/ migration (REPO Phase 1.3)
- Add audience + maintenance frontmatter to all docs-guide pages
- Add .env.example + AI adapter parity to the ownerless governance surface manifest
- Populate (or remove the requirement for) the empty ai-features.mdx stub
- Model to adopt: Every documentation item needs — canonical source · declared audience (human/agent/both) · maintenance mode (generated/hand-maintained) · validator or freshness gate · ownerless repair path.

Files written to workspace/plan/active/DOCUMENTATION/: context.md, research.md, audit.md, recommendations.md.

---

## QUICK REFERENCE — Top Issues

| #   | Issue                                                                                                                   | Severity    | Category             |
| --- | ----------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------- |
| A1  | Repo documentation is split across 6+ locations with no unified index                                                   | 🔴 Critical | Fragmentation        |
| A2  | `docs-guide/` serves both humans and agents but has no per-page audience tags                                           | 🔴 Critical | Human vs. Machine    |
| A3  | `contribute/` and `docs-guide/contributing/` are both live simultaneously                                               | 🔴 Critical | Duplicate / Legacy   |
| A4  | `docs-guide/features/ai-features.mdx` is an empty stub despite being a "required" file                                  | 🟠 High     | Gap                  |
| A5  | `v2/internal/docs-philosophy.mdx` is an exact duplicate of `v2/internal/overview/docs-philosophy.mdx`                   | 🟠 High     | Duplicate            |
| A6  | Three glossary files with overlapping scope and no clear boundary                                                       | 🟠 High     | Duplicate / SoT      |
| A7  | `components-catalog.mdx` has stale generator path and `undefined` category rows                                         | 🟠 High     | Generated / Stale    |
| A8  | `.env.example` / secrets documentation has no entry in docs-guide, ownerless manifest, or AI adapter files              | 🟠 High     | Gap / Undocumented   |
| A9  | `docs-guide/docs-glossary.md` has stale `tasks/` path reference (should be `workspace/`)                                | 🟡 Medium   | Stale                |
| A10 | AI features documented in 3 separate files with no designated canonical                                                 | 🟡 Medium   | Duplicate / SoT      |
| A11 | `v2/internal/overview/governance.mdx` + `v2/internal/overview/governance-pipeline.mdx` overlap with docs-guide policies | 🟡 Medium   | Duplicate / SoT      |
| A12 | `docs-guide/` hand-maintained files have no freshness validator                                                         | 🟡 Medium   | No validator         |
| A13 | AI adapter files (5 systems) have no cross-system sync validator                                                        | 🟡 Medium   | No validator         |
| A14 | `contribute/CONTRIBUTING/` docs not included in docs-guide nav index                                                    | 🟡 Medium   | Fragmentation        |
| A15 | `v2/resources/documentation-guide/` public pages diverge from `docs-guide/` without a sync mechanism                    | 🟡 Medium   | Divergence           |
| A16 | No documentation model for ownerless-governance requirement per documentation surface                                   | 🟡 Medium   | Ownerless gap        |
| A17 | `docs-guide/docs-glossary.md` is a `.md` not `.mdx` — not Mintlify-served                                               | 🟡 Medium   | Format inconsistency |
| A18 | CANONICAL-TRUTH-GUIDES plan is a 3-line stub — critical cross-cutting concern has no execution plan                     | 🟡 Medium   | Gap                  |
| A19 | `v2/internal/` has 21 folder violations (loose `.md`, non-standard archive folders) — governance pending                | 🟡 Medium   | Structural           |
| A20 | `lpd-cli.mdx` has no freshness gate — can drift from actual CLI behaviour                                               | 🟡 Medium   | No validator         |
| A21 | Two component-registry files may be out of sync (`docs-guide/` vs `tools/vscode/`)                                      | 🟡 Medium   | Sync                 |
| A22 | `snippets/composables/` 8 files undocumented, status unclear (integrate or archive)                                     | 🟡 Medium   | Orphaned             |
| A23 | `tools/config/.env.docsearch` undocumented — Algolia/docsearch config has no docs entry                                 | 🟡 Medium   | Gap                  |
| A24 | Script type/concern taxonomy (SCRIPT-GOVERNANCE) not yet reflected in scripts-catalog format                            | 🟡 Medium   | Inconsistency        |
| A25 | `docs-guide/_workspace/` has legacy Design-Specification and Component-Governance-Framework archive trees with no TTL   | 🟢 Low      | Legacy               |

---

## Section 1: Documentation Location Map

### 1.1 All current documentation locations

| Location                            | Audience                          | Maintenance                        | Serves                                               |
| ----------------------------------- | --------------------------------- | ---------------------------------- | ---------------------------------------------------- |
| `docs-guide/`                       | Internal contributors + AI agents | Mixed: generated + hand-maintained | Canonical governance, catalogs, frameworks, policies |
| `v2/resources/documentation-guide/` | Public / human contributors       | Hand-maintained                    | Human-readable guides to the docs system             |
| `v2/internal/`                      | Internal team                     | Hand-maintained                    | Internal ops, philosophy, personas                   |
| `contribute/CONTRIBUTING/`          | Human contributors                | Hand-maintained                    | Git workflow, hooks, contributing procedures         |
| `ai-tools/ai-rules/`                | AI agents only                    | Hand-maintained                    | Agent protocols, safety rules, human override        |
| `AGENTS.md` (root)                  | AI agents                         | Hand-maintained                    | Repo-wide AI baseline (all systems)                  |
| `.claude/CLAUDE.md`                 | Claude Code only                  | Hand-maintained                    | Claude adapter notes                                 |
| `.cursor/rules/`                    | Cursor only                       | Hand-maintained                    | Cursor adapter rules (2 files)                       |
| `.windsurf/rules/`                  | Windsurf only                     | Hand-maintained                    | Windsurf adapter rules                               |
| `.augment/rules/`                   | Augment Code only                 | Hand-maintained                    | Augment adapter rules (3 files)                      |
| `.github/copilot-instructions.md`   | GitHub Copilot                    | Hand-maintained                    | Copilot adapter                                      |
| `README.md`                         | Humans + agents (orientation)     | Hand-maintained                    | Repo introduction + quick start                      |
| `workspace/plan/active/`            | Planning only                     | Scratch                            | Active execution plans (NOT canonical — ephemeral)   |

**Problem**: 13 distinct documentation locations. No unified index tells contributors or agents where to go for what.

---

### 1.2 What should be in docs-guide vs where it currently lives

| Concern                           | Should be in docs-guide                                | Actually lives in                                                                                      | Gap?                                              |
| --------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Script taxonomy + governance      | `docs-guide/policies/script-governance.mdx` ✓          | Also: workspace plan files, stale references                                                           | Minor duplication                                 |
| Component taxonomy + governance   | `docs-guide/frameworks/component-governance.mdx` ✓     | Also: v2/resources/documentation-guide/component-library/                                              | Audience split acceptable but not marked          |
| Page taxonomy + content framework | `docs-guide/frameworks/page-taxonomy-framework.mdx` ✓  | Under revision in CONTENT-WRITING plan                                                                 | Possibly outdated                                 |
| AI tools inventory                | `docs-guide/tooling/ai-tools.mdx` ✓                    | Also: ai-tools/registry/ (machine), v2/resources/.../ai-features.mdx                                   | Three layers, unclear which is canonical for what |
| AI agent governance rules         | `docs-guide/policies/agent-governance-framework.mdx` ✓ | Also: v2/internal/overview/governance.mdx                                                              | Overlap, different depth                          |
| Contributing workflow             | `docs-guide/contributing/` (partial)                   | Also: `contribute/CONTRIBUTING/` (full), `v2/resources/documentation-guide/contribute-to-the-docs.mdx` | Three locations, not merged                       |
| Secrets / env variables           | MISSING from docs-guide                                | Only in `.env.example` (well-maintained but isolated)                                                  | **Gap**                                           |
| Ownerless governance              | `docs-guide/policies/ownerless-governance.mdx` ✓       | Also: workspace OSS plan                                                                               | Plan more current than policy doc                 |

---

## Section 2: Generated vs Hand-Maintained Audit

### 2.1 Generated files

| File                                        | Generator script                                                                       | Last-run status                          | Issues                                                                         |
| ------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| `docs-guide/catalog/scripts-catalog.mdx`    | `tests/unit/script-docs.test.js`                                                       | Unknown                                  | Will need re-run after Task 14 (operations/ move)                              |
| `docs-guide/catalog/components-catalog.mdx` | `tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js` | **STALE** — banner shows wrong flat path | Category = "undefined" rows; not re-run since component restructure merged     |
| `docs-guide/catalog/workflows-catalog.mdx`  | `generate-docs-guide-indexes.js`                                                       | Unknown                                  | —                                                                              |
| `docs-guide/catalog/templates-catalog.mdx`  | `generate-docs-guide-indexes.js`                                                       | Unknown                                  | `ui-templates.mdx` regeneration deferred per plan                              |
| `docs-guide/catalog/pages-catalog.mdx`      | `generate-docs-guide-pages-index.js`                                                   | Unknown                                  | —                                                                              |
| `docs-guide/catalog/ui-templates.mdx`       | `generate-ui-templates.js`                                                             | Deferred (REPO plan 2A-III.6)            | Stale until deferred item runs                                                 |
| `ai-tools/registry/ai-tools-inventory.md`   | `validate-ai-tools-registry.js --write-report`                                         | Unknown                                  | Not linked from docs-guide catalog                                             |
| `docs-guide/component-registry.json`        | `generate-component-registry.js`                                                       | Recent (post-component merge)            | Mirror at `tools/vscode/components/component-registry.json` may be out of sync |
| `docs-guide/component-usage-map.json`       | `scan-component-imports.js`                                                            | Recent                                   | —                                                                              |

### 2.2 Hand-maintained files with no freshness mechanism

All `docs-guide/policies/*.mdx`, `docs-guide/frameworks/*.mdx`, `docs-guide/features/*.mdx`, and `docs-guide/tooling/*.mdx` are hand-maintained with no validator checking they remain accurate. The only enforced check is catalog files (via `check-docs-guide-catalogs.yml`).

Notable gaps:

- `docs-guide/tooling/lpd-cli.mdx` — CLI docs can diverge silently from actual `lpd` behaviour
- `docs-guide/features/ai-features.mdx` — near-empty stub despite required status
- `docs-guide/frameworks/page-taxonomy-framework.mdx` — under review, possibly outdated
- `docs-guide/frameworks/content-system.mdx` — may not reflect CONTENT-WRITING plan definitions

---

## Section 3: Duplicate and Conflicting Content

### 3.1 Confirmed duplicates

| Item               | Location 1                           | Location 2                                        | Notes                                                                                                                   |
| ------------------ | ------------------------------------ | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Docs philosophy    | `v2/internal/docs-philosophy.mdx`    | `v2/internal/overview/docs-philosophy.mdx`        | Exact same frontmatter. `documentation-overview.mdx` imports the `overview/` version. The root-level copy is an orphan. |
| Component-registry | `docs-guide/component-registry.json` | `tools/vscode/components/component-registry.json` | REPO plan flags these as possibly out of sync (2E.3 pending)                                                            |

### 3.2 Overlapping content (same topic, different depth or audience)

| Topic                | File A                                                      | File B                                                                         | File C                                                               | Problem                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Glossary/Terminology | `docs-guide/docs-glossary.md` (internal contributor terms)  | `v2/resources/livepeer-glossary.mdx` (protocol/video/AI/web3)                  | `v2/resources/resources/compendium/glossary.mdx` (resources section) | Three glossaries. Only `docs-glossary.md` states its scope; no cross-links. `TERMINOLOGY-COLLATE` plan is collating but not resolving the split.             |
| AI features/tools    | `docs-guide/features/ai-features.mdx` (STUB)                | `docs-guide/tooling/ai-tools.mdx` (detailed)                                   | `v2/resources/documentation-guide/ai-features.mdx` (public)          | No canonical — `ai-features.mdx` is a required file per SoT policy but is a stub. `ai-tools.mdx` has actual content but is under `tooling/` not `features/`. |
| Agent governance     | `docs-guide/policies/agent-governance-framework.mdx`        | `v2/internal/overview/governance.mdx`                                          | `ai-tools/ai-rules/UNIVERSAL-AI-PROTOCOL.md`                         | Three documents covering agent governance at different levels. No clear hierarchy or cross-referencing.                                                      |
| Governance pipeline  | `docs-guide/policies/` (multiple files)                     | `v2/internal/overview/governance-pipeline.mdx`                                 | —                                                                    | Governance pipeline described in internal v2/ page AND in docs-guide policies. Unclear which is the operational reference.                                   |
| Contributing         | `docs-guide/contributing/contributing.mdx` + `mintlify.mdx` | `contribute/CONTRIBUTING/README.md` + `GIT-HOOKS.md` + `AGENT-INSTRUCTIONS.md` | `v2/resources/documentation-guide/contribute-to-the-docs.mdx`        | Three-way split. `contribute/` is the most complete but scheduled to move.                                                                                   |

### 3.3 Source-of-truth conflicts

| Topic                     | Claimed SoT (per source-of-truth-policy.mdx)   | Actual competing sources                                                                                                       |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| AI-tools inventory        | `ai-tools/registry/ai-tools-registry.json`     | Also: `ai-tools/ai-skills/catalog/*.json` (stated as "audit pipeline only") but this boundary may not be known to contributors |
| Repo feature navigation   | `docs-guide/*.mdx` (manual canonical files)    | Also: workspace plan files, `v2/internal/` pages                                                                               |
| Script metadata           | Script headers + generated indexes             | Also: `workspace/plan/active/SCRIPT-GOVERNANCE/script-docs.md` (planning artifact posing as reference)                         |
| `docs-guide/overview.mdx` | Listed as "Required" in source-of-truth-policy | **File does not exist.** Actual file is `docs-guide/source-of-truth-guide.mdx`. Policy has wrong filename.                     |

---

## Section 4: Messy Pipelines and Unknown Source-of-Truth

### 4.1 Generator path problems

Multiple generated files carry banners with stale paths:

- `components-catalog.mdx` banner: `tools/scripts/generate-docs-guide-components-index.js` ← FLAT STALE PATH
  - Actual: `tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
- `scripts-catalog.mdx` banner: `tests/unit/script-docs.test.js` ← correct, but test file path will change post-Task 14
- After SCRIPT-GOVERNANCE Task 14 (`tools/scripts/` → `operations/scripts/`), ALL generator banners will need updating simultaneously

### 4.2 Double-location generation pipeline

The component documentation pipeline has two disconnected outputs:

- `docs-guide/catalog/components-catalog.mdx` — generated catalog for internal/agent use
- `v2/resources/documentation-guide/component-library/*.mdx` — 7 hand-maintained public pages per component category

There is NO automated pipeline connecting the generated component registry to the public component library pages. The public pages can diverge silently from the actual component registry. No validator exists for this.

### 4.3 AI adapter file pipeline — no sync mechanism

Five AI adapter files exist for different AI systems:

- `.claude/CLAUDE.md` — Claude Code
- `.cursor/rules/repo-governance.mdc` + `no-deletions.mdc` — Cursor
- `.windsurf/rules/repo-governance.md` — Windsurf
- `.augment/rules/` — Augment Code (3 files)
- `.github/copilot-instructions.md` — GitHub Copilot

`AGENTS.md` is the canonical baseline, but there is no script that:

1. Checks all adapter files are consistent with each other on critical policies
2. Detects when `AGENTS.md` changes and flags which adapter files may need updating
3. Enforces that critical rules (e.g., "no port 3000", "no --no-verify") appear in all adapters

**Risk**: A rule added to `AGENTS.md` may not propagate to all adapters. Agents operating via different systems may get inconsistent instructions.

### 4.4 Docs-guide → v2/resources/ sync pipeline — undefined

`docs-guide/` is the internal canonical source. `v2/resources/documentation-guide/` is the public surface. There is no defined sync mechanism, no freshness check, no automation, and no explicit rule about what belongs in which location or when one should update when the other changes.

Current heuristic from the source-of-truth guide:

- `docs-guide/` = internal maintainer source-of-truth
- `v2/resources/documentation-guide/` = public user-facing docs

But pages like `v2/resources/documentation-guide/ai-features.mdx` duplicate `docs-guide/features/ai-features.mdx` with no clear relationship stated.

### 4.5 Ownerless surface manifest drift

`tools/config/ownerless-governance-surfaces.json` lists governed surfaces with their validators and repair paths. But:

- Not all surfaces that have been added since the manifest was first written are included
- The manifest is not auto-updated when new surfaces are created
- No CI check verifies that surfaces listed in the manifest still exist at the declared paths
- Documentation surfaces (hand-maintained canonical files) are not represented at all

### 4.6 Secrets/env documentation gap

`.env.example` is well-maintained but completely isolated. It is not:

- Referenced from `docs-guide/` (no link from features/data-integrations or contributing)
- Referenced from `v2/resources/documentation-guide/automations-workflows.mdx`
- Included in the ownerless governance surface manifest
- Validated for completeness against actual workflow secrets in `.github/workflows/`

Two separate `.env.example` files exist (`root`, `tools/notion/`) with different scopes and no cross-reference.

---

## Section 5: Type/Concern Documentation Inventory

This uses the SCRIPT-GOVERNANCE three-tier model (`<type>/<concern>`) as the structural framework. Each cell maps what documentation exists (and in what form) for each type×concern combination.

### Layer 1 Types × Layer 2 Concerns

| Type            | Content                                                            | Components                                                       | Governance                                                      | AI                                                |
| --------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| **Audits**      | `audit-system-overview.mdx` (policy), scripts in `audits/content/` | No audit docs for component audits                               | No governance self-audit docs                                   | `ai-features.mdx` (stub only)                     |
| **Generators**  | `automations-workflows.mdx` (partial), `data-integrations.mdx`     | `components-catalog.mdx` (generated), `component-governance.mdx` | `docs-guide-indexes` generator docs (in source-of-truth-policy) | AI inventory: `ai-tools-inventory.md` (generated) |
| **Validators**  | `quality-gates.mdx`, frontmatter docs (partial)                    | `component-governance.mdx` (validator section)                   | `ownerless-governance.mdx` + manifest                           | `agent-governance-framework.mdx`                  |
| **Remediators** | None documented                                                    | None documented                                                  | `ownerless-governance.mdx` (repair paths)                       | None documented                                   |
| **Dispatch**    | `skill-pipeline-map.mdx` (partial)                                 | None                                                             | None                                                            | `ai-tools.mdx` (partial), agent-packs README      |
| **Automations** | `automations.mdx`, `automations-workflows.mdx` (v2)                | None                                                             | None                                                            | `ai-tools.mdx` (partial)                          |

### Summary: documentation gaps by type

| Type        | Documented                                                                     | Gap                                                   |
| ----------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Audits      | Partially — overview policy exists, specific audit scripts mostly undocumented | No per-audit documentation                            |
| Generators  | Partially — catalog generators documented via banners; data generators partial | No unified generator reference                        |
| Validators  | Best documented — quality-gates, ownerless manifest                            | Remediator docs missing                               |
| Remediators | Almost none — only covered as "repair paths" in ownerless manifest             | Need remediator catalog                               |
| Dispatch    | Partial — skill-pipeline-map exists but dated                                  | No dispatch operation reference                       |
| Automations | Partial — automations.mdx and v2 page exist                                    | Translation, data fetch automations not fully indexed |

### Layer 2 Concerns — documentation quality

| Concern        | Documentation quality                                   | Notes                                                                             |
| -------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Content**    | Good — multiple policies, frameworks, taxonomy          | Under active revision (CONTENT-WRITING)                                           |
| **Components** | Good — governance.mdx, registry, catalog                | Catalog stale; public pages not auto-synced                                       |
| **Governance** | Good — many policies exist                              | Some duplication with v2/internal; hand-maintained without validators             |
| **AI**         | Poor — split across 3+ files, ai-features.mdx is a stub | Most recent AI work (discoverability, companion) not yet documented in docs-guide |

---

## Section 6: Human vs. Agent Documentation Needs

### 6.1 Current state — no explicit distinction

`docs-guide/` has no per-page metadata distinguishing:

- Pages intended primarily for **human contributors** (e.g., contributing.mdx, authoring-standard.mdx)
- Pages intended primarily for **AI agents** (e.g., agent-governance-framework.mdx, source-of-truth-policy.mdx)
- Pages intended for **both** (e.g., feature-map.mdx, frameworks)

### 6.2 Human-primary needs (not well met)

| Need                                              | Current state                                                                                                                                     | Gap                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| How to contribute to the docs                     | `docs-guide/contributing/` (partial), `contribute/CONTRIBUTING/` (full but moving), `v2/resources/documentation-guide/contribute-to-the-docs.mdx` | Three locations, fragmented           |
| What components are available and how to use them | `v2/resources/documentation-guide/component-library/` (7 pages, hand-maintained)                                                                  | Not auto-synced from registry         |
| What templates are available                      | `docs-guide/catalog/templates-catalog.mdx` (generated), `docs-guide/catalog/ui-templates.mdx` (manual)                                            | Two overlapping catalog files         |
| How to set up secrets/env                         | `.env.example` (good but isolated)                                                                                                                | Not linked from any contributor guide |
| What page types exist and when to use each        | `docs-guide/frameworks/page-taxonomy-framework.mdx`                                                                                               | Under revision, may be outdated       |
| Style and authoring standards                     | `v2/resources/documentation-guide/authoring-standard.mdx` + `style-guide.mdx`                                                                     | Not mirrored in docs-guide            |

### 6.3 Agent-primary needs (not well met)

| Need                                      | Current state                                                         | Gap                                                                      |
| ----------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Complete canonical source-of-truth index  | `docs-guide/source-of-truth-guide.mdx` + `source-of-truth-policy.mdx` | `docs-guide/overview.mdx` listed in policy as required but doesn't exist |
| Consistent rules across all AI adapters   | AGENTS.md + 5 adapter files                                           | No sync validator; adapter files can diverge                             |
| What scripts exist and how to invoke them | `docs-guide/catalog/scripts-catalog.mdx` (generated)                  | Stale after Task 14; no per-script doc standard enforced                 |
| AI tools inventory and lifecycle          | `ai-tools-registry.json` + `ai-tools-inventory.md`                    | Separate from docs-guide catalog                                         |
| Env/secrets requirements                  | Nothing in docs-guide or AGENTS.md                                    | Complete gap                                                             |
| Component API / JSDoc                     | Governed via JSDoc headers in component files                         | No generated API reference in docs-guide                                 |

---

## Section 7: Legacy and Orphaned Items

| Item                                                                  | Status                                                      | Issue                                                                         |
| --------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `v2/internal/docs-philosophy.mdx`                                     | Orphan — duplicate of `overview/docs-philosophy.mdx`        | Should be deleted or explicitly noted                                         |
| `docs-guide/_workspace/02_Design-Specification/`                      | Archive — legacy design spec tree                           | No TTL documented; 90-day clock unclear                                       |
| `docs-guide/_workspace/03_Component-Governance-Framework/` + zip file | Archive — legacy component governance                       | Same: no TTL                                                                  |
| `docs-guide/docs-glossary.md`                                         | Active but has stale `tasks/` paths and is `.md` not `.mdx` | Needs path fix + format decision                                              |
| `contribute/CONTRIBUTING/`                                            | Active but scheduled to move (Phase 1.3)                    | Stale as a location until move happens                                        |
| `workspace/plan/active/SCRIPT-GOVERNANCE/script-docs.md`              | Planning artifact in a plan folder                          | If documentation is canonical it should be in docs-guide, not workspace       |
| `workspace/plan/active/CANONICAL-TRUTH-GUIDES/`                       | Stub with no execution plan                                 | Either plan it or absorb into DOCUMENTATION plan                              |
| `ai-tools/ai-skills/catalog/*.json`                                   | Stated to be for "audit pipeline only" in SoT policy        | This boundary is not documented in the catalog files themselves               |
| `tools/vscode/components/component-registry.json`                     | Possible duplicate of `docs-guide/component-registry.json`  | Sync unverified (REPO plan 2E.3 pending)                                      |
| `snippets/composables/`                                               | 8 MDX composables with zero page refs                       | Undocumented — Layer 3 content architecture per README but not in any catalog |
| `v2/internal/layout-components-scripts-styling/`                      | Non-nav folder per REPO audit                               | Should move to `v2/internal/_workspace/`                                      |
