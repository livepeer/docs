# Repo Structure Documentation Audit

**Date:** 2026-03-23
**Scope:** All documentation surfaces that describe, govern, or enforce the repository's structure — `docs-guide/source-of-truth-guide.mdx`, `tools/config/ownerless-governance-surfaces.json`, `tools/config/generated-artifacts.json`, `.allowlist`, `docs-guide/policies/` (16 policy files), and the enforcement maps and config schemas.

This audit looks at the documentation of the documentation system itself — the meta-layer. It is informed by patterns observed across all 9 prior audits.

---

## Documentation needs

| Need | Purpose | Audience |
|---|---|---|
| Source of truth map | Where is the canonical source for each concern? | Contributors, agents |
| Enforcement map | What enforces what, at which gate? | Governance, CI |
| Generated artifacts registry | What files are auto-generated, by what, at what CI stage? | Governance, contributors |
| Governance surfaces registry | Which surfaces are governed, with what gate and rollout state? | Governance, CI |
| Root structure diagram | Visual map of top-level repo directories and their purpose | Contributors, agents |
| Config schema coverage | Are all `tools/config/*.json` files validated by a schema? | Governance |
| Policy completeness check | Is every governance concern covered by a policy or framework file? | Governance |

---

## What exists

### Machine-readable config

| File | Manual/Generated | Freshness | Notes |
|---|---|---|---|
| `tools/config/ownerless-governance-surfaces.json` | ✋ manual | ✅ current (8 surfaces) | Canonical governed-surface registry |
| `tools/config/generated-artifacts.json` | ✋ manual | ⚠️ stale paths | 8 artifacts; several reference old script paths |
| `.allowlist` | ✋ manual + pre-commit gate | ✅ enforced | Machine-readable root-structure allowlist |
| `tools/config/component-layout-profile.json` | ✋ manual | unknown | Component layout profile |
| `tools/config/blueprint-pages.json` | ✋ manual | unknown | Page blueprints config |
| `tools/config/cspell.json` | ✋ manual | ✅ active | Spell-check dictionary |
| `docs-guide/config/component-registry.json` | 🔧 generated | ✅ CI-regenerated | Not a structure config; component data |

### Documentation landing pages

| File | Manual/Generated | Status | Notes |
|---|---|---|---|
| `docs-guide/source-of-truth-guide.mdx` | ✋ manual | ✅ active | Canonical landing page for all docs-guide sections |
| `docs-guide/policies/source-of-truth-policy.mdx` | ✋ manual | assumed active | Defines SOT model boundaries |
| `docs-guide/features/architecture-map.mdx` | ✋ manual | unknown freshness | Repo architecture map |

### Enforcement / policy

| File | Manual/Generated | Freshness | Notes |
|---|---|---|---|
| `docs-guide/repo-ops/maps/enforcement-map.mdx` | ✋ manual | ⚠️ no lastVerified | Maps gates to surfaces |
| `docs-guide/policies/` (16 files) | ✋ manual | mixed | Enforced rules per concern |
| `docs-guide/frameworks/` (5+ files) | ✋ manual | mixed | Advisory guidance per concern |

---

## Source of truth

**Canonical:** Structure governance truth is dispersed across three machine-readable files that must be read together:
1. `tools/config/ownerless-governance-surfaces.json` — what is governed and how
2. `tools/config/generated-artifacts.json` — what is generated and by what
3. `.allowlist` — what root-level paths are permitted

No single file is the complete answer. This fragmentation is the defining issue of this audit.

**Governance authority:**
- `docs-guide/policies/source-of-truth-policy.mdx` — defines which file is SOT for which concern
- `docs-guide/policies/root-allowlist-governance.mdx` — allowlist rules
- `docs-guide/policies/infrastructure-principles.mdx` — repo infrastructure principles

**Missing:**
- No single visual or structured map of the full repo structure
- No validated cross-reference between `ownerless-governance-surfaces.json` and `generated-artifacts.json` (surfaces declared in one may conflict with or duplicate entries in the other)
- No automated check that the 8 artifacts in `generated-artifacts.json` actually exist at the declared paths

---

## Gaps and issues

1. **`generated-artifacts.json` contains stale script paths.** Several entries reference old script paths that no longer exist. Examples:
   - `component-governance` entry references `operations/scripts/generate-component-docs.js` (old path; actual: `operations/scripts/generators/components/documentation/generate-component-docs.js`)
   - `docs-guide-generated` entry references `operations/scripts/generate-docs-guide-indexes.js` (old path; actual: `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`)
   - `docs-guide-generated` repair commands reference `operations/scripts/generate-docs-guide-components-index.js` (old path)
   - `ai-tools-registry` entry references `operations/scripts/validate-ai-tools-registry.js` (old path; actual: `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`)
   This is the same stale-path pattern observed across the entire repo: scripts were reorganised into subdirectories but the config referencing them was not updated. No CI validates that paths in `generated-artifacts.json` are resolvable.

2. **`ownerless-governance-surfaces.json` declares `rollout_state` values that do not match actual CI wiring.** Cross-referencing with findings across all audits:
   - `ui-templates`: declared `rollout_state: autofix`, `gate_layer: pr-changed` → NOT wired (audit-ui-templates gap #1)
   - `frontmatter-contract`: declared `rollout_state: advisory` → correctly advisory (audit-pages)
   - `script-governance`: declared `gate_layer: pre-commit`, `rollout_state: migrating` → pre-commit runs the governance pipeline, but JSDoc completeness is not blocked (audit-scripts)
   - `ai-tools-registry`: declared `gate_layer: pr-changed`, `rollout_state: migrating` → not yet wired (audit-ai)
   There is no CI that validates the declared state against actual workflow files. The governance config describes an aspirational state, not current reality.

3. **Governance truth lives in 3 places and is not cross-referenced.** A contributor or agent trying to understand "what is governed, how, and at what stage?" must read:
   - `ownerless-governance-surfaces.json` (surfaces + gate_layer + rollout_state)
   - `generated-artifacts.json` (artifacts + generators + commit policy)
   - `docs-guide/repo-ops/maps/enforcement-map.mdx` (human-readable enforcement map)
   These three files are maintained independently. An entry in `ownerless-governance-surfaces.json` may not appear in `enforcement-map.mdx`, or may cite a different gate. No validator checks consistency across these files.

4. **`enforcement-map.mdx` has no `lastVerified` and no CI freshness gate.** It is hand-maintained and can drift from actual CI behavior as workflows are added, changed, or deprecated. Given that it is the primary human reference for "what blocks what," stale data here has high blast radius.

5. **No root visual architecture diagram.** `docs-guide/features/architecture-map.mdx` exists but its freshness is unknown. There is no canonical visual map showing the top-level repo structure, which directories are governed, which are generated, and which are manual. Agents navigating the repo must read multiple files to reconstruct this picture. Contrast with: the component system has a category/folder diagram in `component-framework-canonical.mdx`; the script system has a registry; the repo as a whole has no equivalent.

6. **Config schema coverage is incomplete.** `tools/config/` contains 18 JSON files. Only some have corresponding `.schema.json` files (e.g., `component-layout-profile.schema.json`, `cleanup-manifest.schema.json`). Files like `generated-artifacts.json`, `ownerless-governance-surfaces.json`, `blueprint-pages.json`, and `usefulness-rubric.json` have no schema. Unvalidated JSON config can silently accept invalid structure.

7. **`docs-guide/policies/` has 16 policy files with no policy index.** There is no generated or maintained catalog of what policies exist, what concern they govern, and whether they are enforced at pre-commit, PR, or CI level. `docs-guide/source-of-truth-guide.mdx` lists them in a table, but the table is manually maintained and the policies themselves have varying freshness status (some have `lastVerified`, others do not). No CI checks whether all 16 policies are internally consistent.

8. **`generated-artifacts.json` `commit_policy` field diverges from actual behavior.** For example, `components-catalog.mdx` is listed with `commit_policy: "manual"` — meaning it requires a manual commit. But `docs-guide-generated` surface in `ownerless-governance-surfaces.json` has `rollout_state: autofix`, implying auto-fix. The gap between these two config files is unresolved and there is no master policy that settles it.

---

## Pipeline diagram

```mermaid
flowchart TD
    OWN[\"tools/config/ownerless-governance-surfaces.json\\n8 surfaces — gate + rollout state\"]
    GEN[\"tools/config/generated-artifacts.json\\n8 artifacts — generators + commit policy\"]
    ALLOW[\".allowlist\\nroot structure allowlist\"]
    ENF[\"docs-guide/repo-ops/maps/enforcement-map.mdx\\n✋ manual — no lastVerified\"]

    OWN -. \"⚠️ no cross-validation\" .-> GEN
    OWN -. \"⚠️ no cross-validation\" .-> ENF
    GEN -. \"⚠️ stale script paths\" .-> ENF

    ALLOW -->|pre-commit| GATE[\"root-structure gate\\n✅ enforced\"]

    NOCHECK[\"❌ No CI validates generated-artifacts.json paths exist\\n❌ No CI validates ownerless rollout_state vs actual workflows\\n❌ No schema for ownerless-governance-surfaces.json\\n❌ No schema for generated-artifacts.json\\n❌ No root visual architecture diagram\\n❌ Governance truth split across 3 files — not cross-referenced\"]
```

---

## Recommendations

1. **Fix stale paths in `generated-artifacts.json`.** Update all script path references to match the current directory structure. This is a direct data correctness fix — the file is the authoritative registry of generators and stale paths make it misleading. Cross-check every `generator` and `repair_commands` entry against actual file existence.

2. **Write a `validate-generated-artifacts.js` validator.** Check that every path listed in `generated-artifacts.json` under `generator`, `sources`, `derived_outputs`, and `validators` exists in the repo (for source files) or is gitignored/expected-generated (for outputs). Add to `check-docs-guide-catalogs.yml`.

3. **Write a `validate-governance-surfaces.js` validator.** Cross-reference `ownerless-governance-surfaces.json` entries against `.github/workflows/*.yml` files. For each entry, verify:
   - `gate_layer: pre-commit` → the pre-commit hook references a relevant script for this surface
   - `gate_layer: pr-changed` → a PR workflow runs a check relevant to this surface
   - `rollout_state: autofix` → a generation workflow auto-commits outputs for this surface
   Add to `check-docs-guide-catalogs.yml`.

4. **Add schemas for `ownerless-governance-surfaces.json` and `generated-artifacts.json`.** These are the highest-value config files and currently have no validation. Create `ownerless-governance-surfaces.schema.json` and `generated-artifacts.schema.json` and add schema validation to the test suite.

5. **Create `docs-guide/features/repo-structure-map.mdx`.** A generated or hand-maintained visual diagram showing all top-level repo directories, their governance status (governed/manual/generated), and their primary entry point file. Make it the canonical "what is where" reference, updated on any new root directory addition.

6. **Consolidate governance truth.** Long-term, `ownerless-governance-surfaces.json` and `generated-artifacts.json` overlap significantly. Consider merging them into a single `tools/config/governance-registry.json` with a schema that covers both concern surfaces and their generated artifacts. This reduces the cross-file consistency burden to one file.

7. **Add `lastVerified` to `enforcement-map.mdx` and wire to `check-docs-guide-catalogs.yml`.** Even a soft freshness check (warn if `lastVerified` is more than 30 days old relative to a workflow change) reduces silent drift of the most important human-readable governance reference.

---

## Upstream / downstream effects

**Changes upstream (affecting this concern):**
- Adding a new workflow → `enforcement-map.mdx` should be updated (no automated prompt)
- Reorganising scripts into subdirectories → `generated-artifacts.json` paths become stale (already happened)
- Adding a new governed surface → must update both `ownerless-governance-surfaces.json` AND `enforcement-map.mdx` manually

**Changes downstream (this concern affecting others):**
- `generated-artifacts.json` stale paths cascade: any tool reading this file for repair commands will fail with path-not-found
- `ownerless-governance-surfaces.json` rollout_state mismatch means declared governance is not enforced — ALL 9 other concerns inherit this gap when they rely on it for their gate layer declarations
- Fixing stale paths in `generated-artifacts.json` has immediate effects on the scripts, components, AI, and docs-guide-generated surfaces
- Creating the governance registry validator (recommendation 3) would provide a single CI gate that validates the entire governance model, turning aspirational declarations into verified reality
