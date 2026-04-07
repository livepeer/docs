---
title: Documentation Governance — Recommendations
status: active
owner: DOCUMENTATION
created: 2026-03-21
---

# Documentation Governance Recommendations

> **How to use this file**: Recommendations are grouped by concern. Each recommendation includes: what to do, why, and what type/concern it addresses. Recommendations are ordered by impact (critical → low).

---

## Quick Summary for Inline Review

**The core problem**: Documentation in this repo exists across 13+ locations with no unified ownership model, no per-item audience tagging (human vs. agent), no clear pipeline between internal canonical docs and their public/agent surfaces, and no validators for hand-maintained governance files.

**The fix**: Adopt a `<type>/<concern>/<audience>` model for all documentation. Every documentation item needs: a canonical source, a declared audience (human | agent | both), a maintenance mode (generated | hand-maintained), a validator or freshness gate, and an ownerless repair path.

**Three structural moves that fix the most**:
1. Consolidate all contributor documentation into `docs-guide/contributing/` (complete Phase 1.3)
2. Add `audience` + `maintenance` frontmatter to all `docs-guide/` pages
3. Add `.env.example` + AI adapter files to the ownerless governance surface manifest

---

## Section 1: Structural / Location Recommendations

### R1 — Complete `contribute/` → `docs-guide/contributing/` migration [CRITICAL]
**What**: Execute REPO-STRUCTURE-GOV Phase 1.3. Move all `contribute/CONTRIBUTING/` content into `docs-guide/contributing/`. Update all inbound links in docs.json, AGENTS.md, v2/ pages.
**Why**: Two active contributor guide locations (`contribute/` and `docs-guide/contributing/`) create confusion for new contributors and AI agents. Every contributor-onboarding pipeline should resolve to one entry point.
**Type/Concern**: `governance/contributing`

### R2 — Establish a clear docs-guide ↔ v2/resources/documentation-guide relationship [HIGH]
**What**: Define and document which concerns belong in each:
- `docs-guide/` = operational reference for contributors and agents (canonical, may be technical)
- `v2/resources/documentation-guide/` = public human-readable guide to using the docs site

Where a page exists in both, add explicit cross-references and a note about which is canonical for what. Consider removing true duplicates (like `ai-features.mdx` in both places) and replacing one with a redirect or summary+link.
**Why**: Currently no rule governs when to create a page in one vs. the other, causing drift and duplication.
**Type/Concern**: `governance/content`

### R3 — Resolve `v2/internal/` governance page overlap [MEDIUM]
**What**: Decide whether `v2/internal/overview/governance.mdx` and `governance-pipeline.mdx` are authoritative or whether `docs-guide/policies/` is. Collapse or redirect — don't maintain both.
**Why**: Internal governance pages in `v2/internal/` duplicate operational content in `docs-guide/policies/`.
**Type/Concern**: `governance/content`

### R4 — Resolve `docs-guide/features/ai-features.mdx` stub [HIGH]
**What**: Either populate the `ai-features.mdx` stub with real content (it is listed as a "required" file in source-of-truth-policy) or remove the requirement and consolidate AI documentation into `docs-guide/tooling/ai-tools.mdx` as the single canonical AI documentation page.
**Why**: An empty file listed as "required" creates a validator failure risk and misleads agents looking for AI feature documentation.
**Type/Concern**: `governance/ai`

### R5 — Fix `docs-guide/policies/source-of-truth-policy.mdx` wrong filename reference [HIGH]
**What**: The policy lists `docs-guide/overview.mdx` as a required canonical file. That file doesn't exist. The actual file is `docs-guide/source-of-truth-guide.mdx`. Fix the reference.
**Why**: Source-of-truth policy with a wrong path is self-undermining.
**Type/Concern**: `validators/governance`

---

## Section 2: Human vs. Agent Documentation Model

### R6 — Add `audience` frontmatter to all docs-guide pages [HIGH]
**What**: Add an `audience` field to every page in `docs-guide/`. Values: `human`, `agent`, `both`.
Example:
```yaml
audience: both           # contributors + AI agents
# or
audience: agent          # primarily for AI systems reading this file
# or
audience: human          # contributor-facing only
```
**Why**: `docs-guide/` currently serves dual audiences with no distinction. Agents parsing the folder for operational instructions and humans browsing for contributor guidance both get the same unlabelled list of 40+ files.
**Type/Concern**: `governance/content`

### R7 — Add `maintenance` frontmatter to all docs-guide pages [HIGH]
**What**: Add a `maintenance` field: `generated | hand-maintained | mixed`.
This supplements the `generated-file-banner` (which only exists in generated files) by making hand-maintained status equally visible.
**Why**: Contributors and scripts currently have to infer maintenance mode from banners or absence of banners. A frontmatter field makes this machine-readable.
**Type/Concern**: `governance/content`

### R8 — Define the agent documentation contract [MEDIUM]
**What**: Write a policy doc (`docs-guide/policies/agent-documentation-contract.mdx`) specifying:
- What agents should find in `docs-guide/` (canonical operational rules, source-of-truth boundaries, repair paths)
- What agents should NOT find in `docs-guide/` (ephemeral plans, scratch files, non-operational narrative)
- What agents should find in AI adapter files (system-specific overrides)
- What agents should find in `ai-tools/ai-rules/` (protocol, safety, override)
- How agents should handle conflicts between these sources
**Why**: Currently agents must infer priority from AGENTS.md + experience. An explicit contract reduces misinterpretation.
**Type/Concern**: `governance/ai`

---

## Section 3: Generated vs Hand-Maintained Documentation

### R9 — Re-run `components-catalog.mdx` generator and fix banner path [HIGH]
**What**: Run `node tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write` to regenerate with the post-restructure component taxonomy. Update the file's banner to show the correct path.
**Why**: The catalog shows `undefined` categories and has a stale generator path — it's wrong for both humans and agents reading it.
**Type/Concern**: `generators/components`

### R10 — Add freshness gate for `lpd-cli.mdx` [MEDIUM]
**What**: Add a validator that checks `docs-guide/tooling/lpd-cli.mdx` is updated whenever `lpd` CLI command surface changes. This can be a simple hash-check or a test that parses documented commands against `lpd --help` output.
**Why**: The CLI docs can silently diverge from actual behaviour. Currently noted as "not auto-updated" in the TOOLING audit.
**Type/Concern**: `validators/governance`

### R11 — Create a generator for the public component library pages [MEDIUM]
**What**: Create a generator that produces `v2/resources/documentation-guide/component-library/*.mdx` from `docs-guide/component-registry.json`. This replaces the 7 hand-maintained pages with generated ones.
**Why**: Currently the public component library pages can diverge from the actual component registry with no check. This is the same duplication problem that the catalog system solves internally.
**Type/Concern**: `generators/components`

### R12 — Establish a regeneration schedule / CI trigger list [MEDIUM]
**What**: Create a reference table (in `docs-guide/source-of-truth-guide.mdx` or a new catalog page) mapping each generated file → its generator → its CI trigger → its repair command. This already exists partially in source-of-truth-guide.mdx Update Rules but is incomplete.
**Why**: After Task 14 (operations/ migration), multiple generator paths will change simultaneously. A complete table makes this update tractable.
**Type/Concern**: `governance/governance`

---

## Section 4: Naming and Page Template Governance

### R13 — Resolve `docs-guide/docs-glossary.md` format and stale paths [MEDIUM]
**What**:
1. Fix the stale `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` reference (→ `workspace/plan/active/...`)
2. Rename from `.md` to `.mdx` if it should be Mintlify-served, OR explicitly mark it as agent/contributor-only and keep as `.md`
3. Add a note at the top cross-linking the three glossary files and their distinct scopes

**Why**: A `.md` file in a folder of `.mdx` files is invisible to Mintlify nav and confusing to contributors.
**Type/Concern**: `governance/content`

### R14 — Establish a glossary SoT model [MEDIUM]
**What**: Define exactly three glossary scopes and their canonical files:
1. **Internal contributor / agent terms** (component taxonomy, script taxonomy, page types, governance terms): `docs-guide/docs-glossary.mdx`
2. **Protocol / product terms** (Livepeer protocol, video, AI, web3): `v2/resources/livepeer-glossary.mdx`
3. **Per-section terms**: Inline in section pages, not a separate file

Document this model in `docs-guide/policies/source-of-truth-policy.mdx` under Canonical Boundaries.
**Why**: Three overlapping glossaries with no declared boundaries cause terminology drift.
**Type/Concern**: `governance/content`

### R15 — Enforce docs-guide naming conventions via a validator [MEDIUM]
**What**: Add a validator (or extend `operations/tests/unit/docs-guide-sot.test.js`) that checks:
- All `catalog/` files use `-catalog.mdx` suffix
- All `policies/` files use `-policy.mdx` or `-governance.mdx` suffix
- All `frameworks/` files use `-framework.mdx` or `-workflow.mdx` suffix
- No file named `-index.mdx` exists
- No 0-byte files exist at nav paths
**Why**: Naming convention is defined in `docs-guide-structure-policy.mdx` but not enforced by any tool.
**Type/Concern**: `validators/governance`

### R16 — Standardise docs-guide page template usage [MEDIUM]
**What**: Ensure all 5 template types in `snippets/templates/docs-guide/` are actually used for all new docs-guide pages:
- `policy-page.mdx` — for `policies/`
- `framework-page.mdx` — for `frameworks/`
- `catalog-page.mdx` — for `catalog/`
- `feature-map-page.mdx` — for `features/`
- `tooling-reference-page.mdx` — for `tooling/`

Add `audience` + `maintenance` fields to each template (see R6, R7).
**Why**: Templates exist but aren't consistently applied to existing pages.
**Type/Concern**: `governance/content`

---

## Section 5: Ownerless Governance and Validator Coverage

### R17 — Add secrets/.env.example to ownerless governance surface manifest [HIGH]
**What**: Add an entry to `tools/config/ownerless-governance-surfaces.json`:
```json
{
  "id": "env-secrets-reference",
  "canonical": ".env.example",
  "validator": "tools/scripts/validators/governance/compliance/validate-env-example.js",
  "repair": "manual review — check .github/workflows/*.yml for new secrets",
  "gate": "pr-changed"
}
```
Also add a reference to `.env.example` in `docs-guide/contributing/contributing.mdx` and `AGENTS.md`.
**Why**: The secrets reference file is well-maintained but completely undiscoverable from any documentation entry point. No validator checks it's complete.
**Type/Concern**: `validators/governance`

### R18 — Add AI adapter file parity to ownerless governance surface manifest [HIGH]
**What**: Create a validator that checks critical rules from `AGENTS.md` are present in all adapter files (`.claude/`, `.cursor/`, `.windsurf/`, `.augment/`, `.github/copilot-instructions.md`). Critical rules to check: port restrictions, no-verify policy, deletion policy, path references.
**Why**: 5 adapter files can diverge from `AGENTS.md` silently. A rule update in AGENTS.md may not propagate to all adapters.
**Type/Concern**: `validators/ai`

### R19 — Add hand-maintained canonical docs to ownerless surface manifest [MEDIUM]
**What**: For each required file listed in `source-of-truth-policy.mdx`, add an ownerless surface entry with at minimum:
- A freshness check (file exists and is non-empty)
- A reference to what system should update it when the underlying concern changes
**Why**: Generated files have CI validators. Hand-maintained files have nothing. The "required" file list in source-of-truth-policy is not validated by any tool.
**Type/Concern**: `validators/governance`

### R20 — Resolve `docs-guide/features/ai-features.mdx` vs `ai-tools.mdx` canonical split [MEDIUM]
**What**: Decide:
- Option A: `ai-features.mdx` covers **what AI features exist** in the repo (overview); `ai-tools.mdx` covers **how to use the AI tooling** (operational reference)
- Option B: Merge both into `ai-tools.mdx` (single source); remove the `ai-features.mdx` required-file requirement
Document the decision in source-of-truth-policy.
**Why**: Two docs covering AI in the same folder with unclear division creates agent confusion.
**Type/Concern**: `governance/ai`

---

## Section 6: Automation and Pipeline Recommendations

### R21 — Create a documentation coverage audit script [MEDIUM]
**What**: Create `tools/scripts/audits/governance/documentation/audit-docs-coverage.js` that:
1. Lists all items in the ownerless surface manifest
2. Checks each has: canonical file (exists, non-empty), validator (path resolves), repair path (documented)
3. Checks docs-guide required files from source-of-truth-policy all exist and are non-empty
4. Reports gaps and stale entries
**Why**: The ownerless model requires deterministic validation. Currently the surface manifest can drift.
**Type/Concern**: `audits/governance`

### R22 — Create a cross-location documentation index [MEDIUM]
**What**: Generate (or hand-maintain) a single index file (`docs-guide/catalog/documentation-catalog.mdx`) listing every documentation item in the repo with: location, audience, maintenance mode, canonical source, last verified date. This is the "map of maps".
**Why**: With 13+ documentation locations, there is no single place to understand what exists and where.
**Type/Concern**: `generators/governance`

### R23 — Create a workflow-to-secrets mapping validator [LOW]
**What**: Create a validator that scans all `.github/workflows/*.yml` for `secrets.XXX` and `vars.XXX` references, then checks each reference is documented in `.env.example`. Report undocumented secrets.
**Why**: `.env.example` can silently miss newly added workflow secrets.
**Type/Concern**: `validators/governance`

---

## Section 7: Complete Type/Concern/Audience Documentation Needs List

This is the authoritative inventory of documentation types required for this repo. Every item should eventually have a canonical source, maintenance mode, audience, and ownerless surface entry.

### Type: Policy / Governance

| Concern | Item | Current canonical | Audience | Status |
|---|---|---|---|---|
| Repo root structure | `root-allowlist-governance.mdx` | docs-guide/policies/ | both | ✓ exists |
| Folder governance (v2) | `v2-folder-governance.mdx` | docs-guide/policies/ | both | ✓ exists, Phase 2C pending |
| docs-guide structure | `docs-guide-structure-policy.mdx` | docs-guide/policies/ | both | ✓ exists (new) |
| Workspace lifecycle | `workspace-lifecycle-policy.mdx` | docs-guide/policies/ | both | ✓ exists (new) |
| Agent governance | `agent-governance-framework.mdx` | docs-guide/policies/ | agent | ✓ exists |
| Script governance | `script-governance.mdx` | docs-guide/policies/ | both | ✓ exists |
| Component governance | `component-governance.mdx` | docs-guide/frameworks/ | both | ✓ exists |
| Ownerless governance | `ownerless-governance.mdx` | docs-guide/policies/ | both | ✓ exists |
| Quality gates | `quality-gates.mdx` | docs-guide/policies/ | both | ✓ exists |
| Audit system | `audit-system-overview.mdx` | docs-guide/policies/ | both | ✓ exists |
| Source of truth | `source-of-truth-policy.mdx` | docs-guide/policies/ | agent | ✓ exists (has wrong filename ref — fix R5) |
| Cleanup / quarantine | `cleanup-quarantine-policy.mdx` | docs-guide/policies/ | both | ✓ exists |
| Generated artifact governance | `generated-artifact-and-hook-governance.mdx` | docs-guide/policies/ | both | ✓ exists |
| Infrastructure principles | `infrastructure-principles.mdx` | docs-guide/policies/ | both | ✓ exists |
| Snippets + assets | `snippets-assets-policy.mdx` | docs-guide/policies/ | both | ✓ exists (new) |
| Component layout decisions | `component-layout-decisions.mdx` | docs-guide/policies/ | both | ✓ exists |
| Skill pipeline | `skill-pipeline-map.mdx` | docs-guide/policies/ | agent | ✓ exists |
| **Secrets / env reference** | `.env.example` + doc entry | `.env.example` only | **both** | ⚠️ needs docs-guide entry (R17) |
| **Agent documentation contract** | `agent-documentation-contract.mdx` | MISSING | agent | ❌ needs creating (R8) |
| **Documentation coverage policy** | Needed for this plan | MISSING | both | ❌ needs creating |

### Type: Catalog / Inventory (Generated)

| Concern | Item | Generator | Audience | Status |
|---|---|---|---|---|
| Scripts | `scripts-catalog.mdx` | `script-docs.test.js` | both | ✓ exists, needs re-run post-Task 14 |
| Components | `components-catalog.mdx` | `generate-docs-guide-components-index.js` | both | ⚠️ stale — needs re-run (R9) |
| Workflows | `workflows-catalog.mdx` | `generate-docs-guide-indexes.js` | both | ✓ exists |
| Templates | `templates-catalog.mdx` | `generate-docs-guide-indexes.js` | both | ✓ exists |
| Pages | `pages-catalog.mdx` | `generate-docs-guide-pages-index.js` | both | ✓ exists |
| UI templates | `ui-templates.mdx` | `generate-ui-templates.js` | human | ⚠️ deferred regeneration |
| AI tools inventory | `ai-tools-inventory.md` | `validate-ai-tools-registry.js` | agent | ✓ exists (not in docs-guide catalog) |
| **Documentation catalog** | `documentation-catalog.mdx` | TBD | both | ❌ needs creating (R22) |
| **Env/secrets catalog** | Entry in contributing or doc-catalog | TBD | both | ❌ needs creating (R17) |

### Type: Framework / Reference (Hand-maintained)

| Concern | Item | Canonical | Audience | Status |
|---|---|---|---|---|
| Content system | `content-system.mdx` | docs-guide/frameworks/ | both | ✓ exists, under CONTENT-WRITING revision |
| Page taxonomy | `page-taxonomy-framework.mdx` | docs-guide/frameworks/ | both | ✓ exists, under revision |
| Component governance | `component-governance.mdx` | docs-guide/frameworks/ | both | ✓ exists, recently updated |
| Research skill workflow | `research-skill-workflow.mdx` | docs-guide/frameworks/ | both | ✓ exists |

### Type: Feature Map (Hand-maintained)

| Concern | Item | Canonical | Audience | Status |
|---|---|---|---|---|
| Repo feature map | `feature-map.mdx` | docs-guide/features/ | both | ✓ exists |
| Architecture map | `architecture-map.mdx` | docs-guide/features/ | both | ✓ exists |
| Automations | `automations.mdx` | docs-guide/features/ | both | ✓ exists |
| Data integrations | `data-integrations.mdx` | docs-guide/features/ | both | ✓ exists |
| UI system | `ui-system.mdx` | docs-guide/features/ | human | ✓ exists |
| Visual explainer workflows | `visual-explainer-workflows.mdx` | docs-guide/features/ | human | ✓ exists |
| **AI features** | `ai-features.mdx` | docs-guide/features/ | both | ⚠️ required but empty stub (R4) |

### Type: Tooling Reference (Hand-maintained)

| Concern | Item | Canonical | Audience | Status |
|---|---|---|---|---|
| lpd CLI | `lpd-cli.mdx` | docs-guide/tooling/ | both | ✓ exists, no freshness gate (R10) |
| Dev tools | `dev-tools.mdx` | docs-guide/tooling/ | human | ✓ exists |
| AI tools | `ai-tools.mdx` | docs-guide/tooling/ | both | ✓ exists |
| MDX preview | `lpd-mdx-preview.mdx` | docs-guide/tooling/ | human | ✓ exists |
| Icon map | `reference-maps/icon-map.mdx` | docs-guide/tooling/ | both | ✓ exists |

### Type: Contributor Guide (Hand-maintained)

| Concern | Item | Canonical | Audience | Status |
|---|---|---|---|---|
| Contributing overview | `contributing.mdx` | docs-guide/contributing/ | human | ✓ exists (partial) |
| Mintlify setup | `mintlify.mdx` | docs-guide/contributing/ | human | ✓ exists |
| Git hooks | From `contribute/CONTRIBUTING/GIT-HOOKS.md` | NOT YET MOVED | human | ⚠️ pending Phase 1.3 |
| Agent instructions (for contrib) | From `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | NOT YET MOVED | agent | ⚠️ pending Phase 1.3 |
| **Secrets / env setup** | `.env.example` + contributing entry | MISSING from contributing | human | ❌ needs creating (R17) |

### Type: Agent Adapter / Rules (Hand-maintained)

| Concern | Item | Canonical | Audience | Status |
|---|---|---|---|---|
| Repo baseline | `AGENTS.md` | repo root | agent | ✓ exists |
| Claude adapter | `.claude/CLAUDE.md` | `.claude/` | agent | ✓ exists |
| Cursor adapter | `.cursor/rules/` (2 files) | `.cursor/` | agent | ✓ exists |
| Windsurf adapter | `.windsurf/rules/` | `.windsurf/` | agent | ✓ exists |
| Augment adapter | `.augment/rules/` (3 files) | `.augment/` | agent | ✓ exists |
| Copilot adapter | `.github/copilot-instructions.md` | `.github/` | agent | ✓ exists |
| Universal AI protocol | `UNIVERSAL-AI-PROTOCOL.md` | ai-tools/ai-rules/ | agent | ✓ exists |
| AI guidelines | `AI_GUIDELINES.md` | ai-tools/ai-rules/ | agent | ✓ exists |
| Human override policy | `HUMAN-OVERRIDE-POLICY.md` | ai-tools/ai-rules/ | agent | ✓ exists |
| Rollback guide | `ROLLBACK-GUIDE.md` | ai-tools/ai-rules/ | agent | ✓ exists |
| **Adapter parity validator** | TBD | MISSING | both | ❌ needs creating (R18) |

---

## Section 8: Prioritised Action List

### Immediate (no coordination required)

| # | Action | Files | Effort |
|---|---|---|---|
| I1 | Fix wrong filename in source-of-truth-policy.mdx (`overview.mdx` → `source-of-truth-guide.mdx`) | 1 file | 5 min |
| I2 | Fix stale `tasks/` path in `docs-guide/docs-glossary.md` | 1 file | 5 min |
| I3 | Re-run `components-catalog.mdx` generator | 1 file | 10 min |
| I4 | Delete or merge `v2/internal/docs-philosophy.mdx` (duplicate) | 1 file | 10 min |
| I5 | Add scope note + cross-links to the top of each glossary file | 3 files | 20 min |

### Short-term (coordinate with active plans)

| # | Action | Depends on | Effort |
|---|---|---|---|
| S1 | Add `audience` + `maintenance` frontmatter to all docs-guide pages | Approved by human | ~40 files |
| S2 | Add `.env.example` reference to `docs-guide/contributing/contributing.mdx` and AGENTS.md | Phase 1.3 (contribute/ move) | Low |
| S3 | Populate `docs-guide/features/ai-features.mdx` with real content | AI-TOOLS-GOVERNANCE | Medium |
| S4 | Complete `contribute/` → `docs-guide/contributing/` migration (REPO Phase 1.3) | REPO plan approval | Medium |
| S5 | Update ownerless surface manifest with secrets/.env and adapter-parity entries | R17, R18 | Low |

### Medium-term (after active plans settle)

| # | Action | Depends on | Effort |
|---|---|---|---|
| M1 | Create `documentation-catalog.mdx` generator | After Task 14 + component merge stable | Medium |
| M2 | Write `agent-documentation-contract.mdx` | After R8 design decision | Medium |
| M3 | Add docs-guide naming convention validator | After S1 complete | Low |
| M4 | Create workflow-to-secrets mapping validator | Independent | Medium |
| M5 | Create component library public page generator (R11) | After component taxonomy stable | High |

### Long-term (post-restructure)

| # | Action | Depends on | Effort |
|---|---|---|---|
| L1 | Full CANONICAL-TRUTH-GUIDES execution (absorb stub plan) | All frameworks stable | High |
| L2 | lpd-cli.mdx freshness gate | Task 14 complete | Medium |
| L3 | Update all docs for operations/ migration (Task 14) | Task 14 merge | High |
| L4 | Unified second-level `_workspace/` pattern for docs-guide subfolders | REPO Phase 3B | Medium |
