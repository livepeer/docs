# Master Documentation Audit

**Date:** 2026-03-23
**Scope:** Cross-cutting synthesis of all 9 concern audits: components, scripts, tooling, workflows, templates, ui-templates, ui, pages, ai, repo-structure.

This file synthesises patterns, scores each concern, and provides a prioritised remediation plan. Read the individual audit files for concern-level detail.

---

## Concern health summary

| Concern | CI generation | CI check (PR gate) | Catalog / registry | Source of truth | Overall |
|---|---|---|---|---|---|
| **Components** | ✅ `generate-component-registry.yml` | ✅ `check-docs-guide-catalogs.yml` | ✅ `component-registry.json` | ✅ JSDoc in .jsx | 🟡 Good — gaps in catalog + usage-map CI |
| **Scripts** | ❌ none | ❌ none | ⚠️ registry exists, 50% `type:unknown` | ⚠️ JSDoc (138/277 missing) | 🔴 Critical — zero CI coverage |
| **Tooling** | ❌ none | ❌ none | ❌ no catalog | ❌ no policy | 🔴 Critical — fully manual, stale content |
| **Workflows** | ✅ `generate-docs-guide-catalogs.yml` | ✅ `check-docs-guide-catalogs.yml` | ⚠️ catalog only (shallow) | ✅ .yml files | 🟡 Good — shallow catalog, race condition |
| **Templates** | ❌ (GitHub only via workflows) | ✅ (GitHub only) | ❌ no page template catalog | ❌ no metadata standard | 🔴 Critical — page templates have no CI |
| **UI Templates** | ❌ none | ❌ none | ❌ no registry JSON | ❌ `@pipeline manual` contradicts governance config | 🔴 Critical — declared governance not implemented |
| **UI (published)** | ✅ cascade from registry | ✅ component health checks | ✅ via components | ✅ via JSDoc | 🟡 Good — stale banner paths, no contributor guide |
| **Pages** | ✅ `generate-docs-guide-catalogs.yml` | ✅ `check-docs-guide-catalogs.yml` | ⚠️ tree-only catalog | ⚠️ v2/index.mdx is manual | 🟡 Good — frontmatter advisory only |
| **AI** | ✅ companion generation | ✅ companion check | ⚠️ registry migrating | ✅ AGENTS.md | 🟡 Good — ai-features stub, no llms.txt |
| **Repo structure** | ❌ none | ❌ none | ⚠️ ownerless-surfaces.json | ⚠️ split across 3 files, stale paths | 🔴 Critical — governance model undocumented |

---

## Cross-cutting patterns

### Pattern 1 — The "no CI trigger" gap

**Affects:** Scripts (all docs artifacts), tooling (all), ui-templates (catalog + snippets), components-catalog, templates (page templates).

The most widespread failure mode in the documentation system. A concern has a documented generation pipeline, often with a script that correctly produces the output — but nothing in CI runs that script. The catalog drifts indefinitely without detection.

**Root cause:** Scripts were built before CI wiring was complete. The JSDoc `@pipeline` annotations on scripts describe intended state, not implemented state. `ownerless-governance-surfaces.json` records aspirational rollout_states (`autofix`, `pr-changed`) that have not been wired.

**Occurrences:**
- `script-docs.test.js` — not referenced in any workflow file (scripts audit gap #1)
- `generate-ui-templates.js` — `@pipeline manual` despite ownerless config declaring `autofix` (ui-templates audit gap #1)
- `generate-docs-guide-components-index.js` — `@pipeline commit` but pre-commit does not run it (components audit gap #3)
- `scan-component-imports.js` — no CI trigger; usage-map goes stale (components audit gap #1)
- Tooling docs — no CI trigger of any kind (tooling audit gap #4)

**Immediate fix pattern:** For each missing CI hook, add one of:
- `--check` step to `check-docs-guide-catalogs.yml` (PR gate, no side effects)
- `--write` step to `generate-docs-guide-catalogs.yml` with path filter (push→main, auto-commit)

---

### Pattern 2 — Stale generator paths baked into outputs

**Affects:** UI (32 published v2 pages), `tools/config/generated-artifacts.json` (4+ entries), `docs-guide/tooling/dev-tools.mdx` (Tip callout).

When scripts are reorganised into subdirectories, generated file banners and config entries are not updated. The old path is committed in the output and persists until the generator is re-run (for generated files) or manually corrected (for config).

**Root cause:** No CI validates that paths referenced in generated banners or config files are resolvable. The script reorganisation into `operations/scripts/generators/` and `operations/scripts/validators/` subdirectories created a widespread path drift that has not been systematically corrected.

**Specific instances:**
- All 32 v2 component library pages: banner says `operations/scripts/generate-component-docs.js` (doesn't exist)
- `generated-artifacts.json`: component-governance entry, docs-guide-generated entry, ai-tools-registry entry all have old paths
- `dev-tools.mdx`: Tip says `python3 operations/scripts/generate-component-snippets.py` (doesn't exist)

**Fix approach:** Correct the source (generator template or config file), then trigger regeneration for generated files. Do not edit generated files directly.

---

### Pattern 3 — Declared governance ≠ implemented governance

**Affects:** UI templates, AI tools registry, frontmatter contract, script governance.

`ownerless-governance-surfaces.json` records intended gate layers and rollout states. For several surfaces, the declared state has not been implemented in actual CI or hooks.

| Surface | Declared | Actual |
|---|---|---|
| `ui-templates` | `gate_layer: pr-changed`, `rollout_state: autofix` | No CI trigger, no PR check |
| `ai-tools-registry` | `gate_layer: pr-changed`, `rollout_state: migrating` | Validator runs manually only |
| `frontmatter-contract` | `gate_layer: pr-changed`, `rollout_state: advisory` | Advisory only — no PR check |
| `script-governance` | `gate_layer: pre-commit`, `rollout_state: migrating` | Pre-commit has governance pipeline but JSDoc check not included |

**Root cause:** `ownerless-governance-surfaces.json` is maintained as a planning document but there is no CI validator that checks the declared state matches the actual workflow/hook state. Gaps are invisible until manually audited (which is what this audit does).

**Fix:** Write `validate-governance-surfaces.js` (recommended in repo-structure audit). One script, wired to CI, that validates the entire governance model. Turns this meta-gap into a detectable, self-correcting condition.

---

### Pattern 4 — Mixed concern in shared generators

**Affects:** Workflows + templates (share `generate-docs-guide-indexes.js`), UI templates + components snippets (share `generate-ui-templates.js`).

Two structurally different concerns are co-generated by a single script. A change to either concern's format or trigger requires modifying the shared generator and risks unintended effects on the other concern's output.

**Instances:**
- `generate-docs-guide-indexes.js` → produces `workflows-catalog.mdx` AND `templates-catalog.mdx`. Both are in the same path filter in `generate-docs-guide-catalogs.yml`. A `.github/ISSUE_TEMPLATE/**` change triggers workflow catalog regeneration unnecessarily.
- `generate-ui-templates.js` → produces `ui-templates.mdx`, `.vscode/templates.code-snippets`, AND `.vscode/components.code-snippets`. Templates and components have different update triggers.

**Fix:** Split generators along concern lines. Each concern gets its own generator and its own path filter. This is a refactoring task, not a policy change — existing functionality is preserved, just separated.

---

### Pattern 5 — Advisory taxonomy without enforcement

**Affects:** Pages (frontmatter), scripts (JSDoc completeness), AI (adapter parity).

Taxonomy and metadata standards exist but are not enforced at any gate. `pageType`, `audience`, `status` values for 703 pages are advisory. JSDoc completeness for 277 scripts has no PR gate. Adapter files drifting from `AGENTS.md` baseline has no detection.

**Why this matters for documentation pipelines:** Generators, catalogs, and agents that query these metadata fields are consuming unreliable data. A catalog query for `pageType: quickstart` may return wrong results if contributors have used non-canonical values.

**Fix approach:** Enforce on changed files only (not all files at once — that would create a mass remediation burden). For pages: add `frontmatter-taxonomy.test.js --check-changed` to `check-docs-guide-catalogs.yml`. For scripts: add a soft JSDoc completeness warning to `check-docs-guide-catalogs.yml` for any script touched in the PR.

---

### Pattern 6 — No contributor-facing usage guides

**Affects:** UI (components), templates, ui-templates.

Three independent audits converge on the same gap: there is no v2 user-facing page explaining how to use the thing. Contributors must read internal `docs-guide/` pages (not in public nav) or draft/stub files.

| Thing | What exists | What is missing |
|---|---|---|
| Custom components | 32 generated reference pages | No page explaining *how to use them when authoring* |
| Page templates | `snippets/templates/README.mdx` (stub) | No guide on when to use which template |
| UI templates | `docs-guide/catalog/ui-templates.mdx` (internal) | No v2 page; no v2/templates/ path |
| Mintlify components | `docs-guide/contributing/mintlify.mdx` (draft) | Incomplete; not in v2 public nav |

**Fix:** A single `v2/resources/documentation-guide/authoring-guide.mdx` (or a section within an existing guide) that covers: custom components (how to find, import, use), native Mintlify components, page templates (how to pick one), and VS Code snippets. This addresses all three audits with one page.

---

### Pattern 7 — Source of truth fragmentation

**Affects:** AI (10 adapter files), repo-structure (3 governance config files), scripts (JSDoc + registry + catalog in different maintenance cycles).

Canonical information is split across multiple files with no automated consistency check. Adapters can diverge from the baseline. Config files can have contradictory declarations. Registry and catalog can disagree.

**Most critical fragmentation:** `ownerless-governance-surfaces.json` (gate layers) + `generated-artifacts.json` (artifacts + generators) + `enforcement-map.mdx` (human-readable gate map) = 3 files that should agree but have no cross-validation.

**Fix:** A validator that reads all three and reports inconsistencies. Long-term: consolidate into a single `tools/config/governance-registry.json` that is the sole source of truth for both surfaces and their generated artifacts.

---

### Pattern 8 — Auto-generation only on main, not PR branches

**Affects:** AI companion files, component registry cascade, all push→main generators.

Generated artifacts are only created on push→main. PR reviewers see the last-merged state of generated files, not a preview of what the post-merge state will be. For AI agents reviewing PRs, this means companion context, catalog content, and registry data may lag by one merge cycle.

**Fix:** The PR gate (`--check` mode) already validates that the generated state would be current. This is acceptable for catalog freshness. For AI companion context specifically, consider generating companions for changed pages within the PR workflow (without auto-committing) to give reviewers accurate context.

---

## Prioritised remediation plan

### P0 — Data correctness (fix before anything else)

These are factual errors in production artifacts that cause incorrect outputs.

| Action | Where | Impact |
|---|---|---|
| Fix stale banner path in `generate-component-docs.js` template | generator file | 32 v2 pages show wrong script path to all users |
| Fix stale paths in `generated-artifacts.json` | config file | 4+ repair commands will fail with path-not-found |
| Fix `ai-tools.mdx` missing frontmatter delimiter | docs file | Mintlify cannot parse the page metadata |
| Fix `dev-tools.mdx` stale Tip callout | docs file | Contributors run a non-existent Python script |

---

### P1 — CI wiring for ungoverned surfaces (Pattern 1 + 3)

These add one step to existing workflows — lowest effort, highest governance return.

| Action | Workflow to update | What it gates |
|---|---|---|
| Add `generate-docs-guide-indexes.js --check` for templates | `check-docs-guide-catalogs.yml` | Existing; already wired |
| Add `generate-ui-templates.js --check` to PR gate | `check-docs-guide-catalogs.yml` | UI templates catalog freshness |
| Add `generate-ui-templates.js --write` on push→main | `generate-docs-guide-catalogs.yml` | Auto-regenerate template catalog + snippets |
| Add `scan-component-imports.js` to `generate-component-registry.yml` | `generate-component-registry.yml` | Usage-map stays current with registry |
| Add `validate-ai-tools-registry.js --check` to PR gate | `check-ai-companions.yml` | AI registry completeness |
| Add `script-docs.test.js --check` to PR gate | `check-docs-guide-catalogs.yml` | Script registry freshness (at minimum) |

---

### P2 — Resolve race condition and mixed-concern generators

| Action | Files affected |
|---|---|
| Consolidate `generate-component-registry.yml` + downstream generation into one workflow | Both generate-*.yml files |
| Split `generate-docs-guide-indexes.js` into workflows + github-templates generators | One generator → two |
| Split `generate-ui-templates.js` into template snippets + component snippets generators | One generator → two |

---

### P3 — Fix advisory taxonomy (make enforcement real)

| Action | Gate |
|---|---|
| Add `frontmatter-taxonomy.test.js --check-changed` to `check-docs-guide-catalogs.yml` | PR: changed files only |
| Add soft JSDoc completeness warning to PR gate for touched scripts | PR: warning, not failure |
| Write adapter parity validator; add to `check-ai-companions.yml` | PR: AI adapter consistency |

---

### P4 — Write the missing contributor guides

| Action | Target file |
|---|---|
| Write `v2/resources/documentation-guide/authoring-guide.mdx` (components + templates + snippets) | v2 public nav |
| Complete `docs-guide/contributing/mintlify.mdx` (set to current) | docs-guide |
| Write `docs-guide/policies/tooling-documentation-policy.mdx` | docs-guide |
| Complete `docs-guide/features/ai-features.mdx` (remove TODOs) | docs-guide |

---

### P5 — Governance meta-layer (Pattern 3, 6, 7)

| Action | Files affected |
|---|---|
| Write `validate-generated-artifacts.js` — check all paths in config exist | CI |
| Write `validate-governance-surfaces.js` — check declared rollout_state matches actual workflows | CI |
| Add schemas for `ownerless-governance-surfaces.json` and `generated-artifacts.json` | `tools/config/` |
| Create `docs-guide/features/repo-structure-map.mdx` (visual directory map) | docs-guide |
| Add `lastVerified` to `enforcement-map.mdx`; wire to freshness check | docs-guide |

---

### P6 — JSDoc completeness remediation (scripts)

| Action | Scope |
|---|---|
| Write JSDoc headers for `.githooks/` scripts | High-traffic: every commit |
| Write JSDoc headers for `.github/scripts/` scripts | High-traffic: every CI run |
| Write JSDoc headers for `tools/lib/` scripts | High-traffic: every generator |
| Add `_meta.generated` timestamp to `script-registry.json` | Registry freshness |
| Add archive flag to `operations/scripts/archive/` entries | Catalog clarity |

---

## Summary: what would "fully governed" look like?

The repo documentation system is **architecturally sound but incompletely implemented.** The governance framework, policy files, CI workflows, and generation scripts all exist. The gaps are not missing design but missing wiring.

"Fully governed" state across all 10 concerns:

```
1. Every concern has a machine-readable registry (JSON with schema)
2. Every registry is regenerated by CI on relevant file changes (push→main)
3. Every regenerated output has a PR check (--check mode in check-docs-guide-catalogs.yml)
4. generated-artifacts.json and ownerless-governance-surfaces.json reflect actual CI state
5. All declared rollout_states are implemented and validated by validate-governance-surfaces.js
6. Contributors have one authoritative authoring guide covering components + templates + snippets
7. All generated banners contain correct script paths
8. Stale content (dev-tools draft, ai-features stub, mintlify.mdx draft) is current
```

The P0 → P1 → P2 sequence of the remediation plan above gets the system to approximately 80% of this target. P3 → P6 complete it.

---

## Individual audit file index

| Concern | File | Key findings |
|---|---|---|
| Components | `audit-components.md` | 117 components, 15 orphaned, 25 JSDoc drift, race condition, stale banners (32 files) |
| Scripts | `audit-scripts.md` | 277 scripts, 138 type:unknown, 160 incomplete JSDoc, zero CI coverage |
| Tooling | `audit-tooling.md` | 5 docs (2 draft/stub), stale script tip, missing frontmatter, no policy |
| Workflows | `audit-workflows.md` | 43 workflows, well-wired catalog, race condition, shallow metadata |
| Templates | `audit-templates.md` | 33 page templates with no catalog, 6 duplicate names, templates-catalog mislabeled |
| UI Templates | `audit-ui-templates.md` | Declared autofix but nothing wired; no registry JSON; co-generated with components |
| UI (published) | `audit-ui.md` | 32 pages with stale banner path, no contributor guide, status enum conflict |
| Pages | `audit-pages.md` | 703 pages, frontmatter advisory only, catalog is tree-only, v2/index.mdx manual |
| AI | `audit-ai.md` | ai-features stub, no llms.txt, no adapter parity check, registry migrating |
| Repo structure | `audit-repo-structure.md` | 3-file governance fragmentation, stale generated-artifacts.json, no validation |
