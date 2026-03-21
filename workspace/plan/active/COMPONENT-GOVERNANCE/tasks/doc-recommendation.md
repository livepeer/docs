# Component Documentation — Architecture Recommendation

> **Type**: Decision document — recommendations for approval before Task 10 execution
> **Date**: 2026-03-20
> **Full audit**: See `component-docs.md` in the component branch plan folder
> **Cross-reference**: See `SCRIPT-GOVERNANCE/doc-recommendation.md` — same pattern applies

---

## From Script Governance — 4 Principles That Apply Here

**"spec ≠ catalog"** — The governance doc's job is to explain the rules; the catalog's job is to list what exists. Don't conflate them. Task 10 must keep `component-governance.mdx` as spec-only and `components-catalog.mdx` as inventory-only.

**"Fix type mismatches before regenerating"** — Scripts doc step 1 is "fix 27 mistyped `@type` values". Component analogue: audit whether `@type` in JSDoc files already uses new taxonomy (`elements`/`wrappers`/etc.) or still has old planning names. Regenerating with wrong values produces a wrong registry. This must be step 1.

**"Canonical spec is hidden"** — Script framework was buried in plan folder. Same problem here: the actual 7-field contract is only visible in the generator code. The governance spec doc must be updated to surface what's actually enforced so contributors don't chase the aspirational 14-field schema.

**"Generated files carry pre-commit enforced banners"** — Task 10 must not manually edit any generated file. Update the generator scripts to emit correct paths, then run them. Self-healing.

---

## TL;DR

There are currently **12 surfaces** documenting components in this repo. Most of the duplication, drift, and confusion traces back to one root cause: **two taxonomy systems are active simultaneously**, and the JSON registry has not been regenerated since the folder restructure.

The fix follows the same principle established in `SCRIPT-GOVERNANCE/doc-recommendation.md`:
**one JSON registry → everything generated from it, plus one spec page + one catalog page on nav, plus one dev quick-ref in the source tree.**

---

## The Taxonomy Split (the core problem)

Two classification systems exist in this repo right now:

| System | Taxonomy | Where used |
|--------|----------|-----------|
| **Folder taxonomy** (actual, implemented in Task 3) | `elements/ wrappers/ displays/ scaffolding/ integrators/ config/` | JSDoc `@type` field, folder paths, README.md |
| **Governance taxonomy** (planning-era, pre-Task 3) | `primitives/ layout/ content/ data/ page-structure/` | `component-registry.json`, `components-catalog.mdx`, all public library pages, `component-governance.mdx` |

The registry was last generated before the taxonomy migration. Everything downstream of the registry uses the wrong names. This is the only blocking issue for Task 10 — resolving it unlocks all other work.

---

## What We Have Now (all 12 surfaces)

| Surface | Type | State | Notes |
|---------|------|-------|-------|
| JSDoc in `.jsx` files | SOT (enforced) | ✅ Complete (Task 8) | 7 fields, new taxonomy via `@type` |
| `docs-guide/component-registry.json` | Generated index | ❌ Stale (pre-Task 8, old taxonomy) | Last generated 2026-03-16 |
| `docs-guide/component-usage-map.json` | Generated import map | ✅ Clean | Correct, has clear generator |
| `snippets/components/README.md` | Manual dev reference | ⚠️ Minor stale paths | Good content, just needs path fixes |
| `snippets/components/CATALOG.md` | Manual+partial-gen | ❌ Stale counts | Archive target (Task 17) |
| `docs-guide/frameworks/component-governance.mdx` | Spec document (668 lines) | ❌ Old taxonomy, aspirational 14-field schema, old script paths | The canonical spec but wrong on key facts |
| `docs-guide/frameworks/component-framework.mdx` | Redirect stub | ✅ Fine as-is | Link preservation only |
| `docs-guide/catalog/components-catalog.mdx` | Generated catalog (internal) | ❌ Stale — reads from stale registry | Auto-heals after registry regeneration |
| `v2/resources/.../component-library/*.mdx` | Generated public pages | ❌ Wrong taxonomy page names | 7 files × 4 locales = 28 files |
| `docs-guide/policies/component-layout-decisions.mdx` | Policy matrix | ✅ Fine as-is | Uses Mintlify globals, not custom taxonomy |
| `docs-guide/source-of-truth-guide.mdx` | Internal nav index | ❌ TODO banner + old flat script paths in update commands | Needs path fixes |
| `v2/internal/.../components.mdx` | Internal pointer page | ✅ Thin shell, fine as-is | Points to public library |

---

## What We Need

### Principle (from SCRIPT-GOVERNANCE/doc-recommendation.md, applies here too)

> **spec ≠ catalog**

The **spec page** explains the governance model — taxonomy, standards, JSDoc rules, how to build a new component. Human-authored, stable, updated intentionally.

The **catalog page** lists what exists. Auto-generated, always current, never hand-edited.

They are separate pages. Other pages that need to reference either one link to it — they do not copy content inline.

> **JSDoc headers are authoritative. The registry is a derived index.**

Do not invert this. The JSON is regenerated from JSDoc headers whenever component files change. Nothing in the JSON is hand-edited.

---

### Target Architecture

```
LAYER 0 — Source of Truth
────────────────────────────────────────────────────
JSDoc in snippets/components/**/*.jsx
  Enforced fields: @component, @type, @subniche, @status,
                   @description, @accepts, @param
  @dataSource required for integrators
  Validated by: generate-component-registry.js --strict

LAYER 1 — Generated Indexes (never hand-edited)
────────────────────────────────────────────────────
docs-guide/component-registry.json
  ← generated from JSDoc
  ← contains ONLY reliably derived fields (not fabricated)
  ← uses NEW taxonomy: elements/wrappers/displays/scaffolding/integrators/config
  → feeds: catalog generator, public library generator, VS Code snippets

docs-guide/component-usage-map.json
  ← generated from scan-component-imports.js
  → feeds: audit scripts, usage-gated deprecation

LAYER 2 — Human MDX Documentation (two per domain, on nav)
────────────────────────────────────────────────────
SPEC:
  docs-guide/frameworks/component-governance.mdx   [INTERNAL]
  → Rewritten: new taxonomy, 7-field schema, correct script paths
  → Contains: decision tree, checklist, standards
  → Does NOT contain: component inventory (that's the catalog)

CATALOG (internal):
  docs-guide/catalog/components-catalog.mdx        [INTERNAL, GENERATED]
  → Generated from registry + usage-map
  → Audience: contributors, agents, maintainers

CATALOG (public):
  v2/resources/documentation-guide/component-library/   [PUBLIC, GENERATED]
  → Generated from registry
  → New page names matching new taxonomy:
      component-library.mdx   (landing — unchanged)
      overview.mdx             (unchanged)
      elements.mdx             (was primitives.mdx)
      wrappers.mdx             (was layout.mdx)
      displays.mdx             (was content.mdx)
      scaffolding.mdx          (was page-structure.mdx — NEW)
      integrators.mdx          (was data.mdx — RENAMED)
      config.mdx               (NEW — MermaidColours currently uncovered)

LAYER 3 — Dev Quick Reference (source tree adjacent)
────────────────────────────────────────────────────
snippets/components/README.md
  → Stays where it is — right place for contributors in the tree
  → Scope: folder structure + decision rules + import syntax + validation commands
  → Does NOT contain full inventory or policy text
```

---

## The 14-Field vs 7-Field Problem

`component-governance.mdx` says 14 fields are required and enforced. `--strict` enforces 7. The registry pretends to have 14 but fabricates 7 of them (`tier`, `contentAffinity`, `owner`, `dependencies`, `usedIn`, `breakingChangeRisk`, `decision` are defaults, not from JSDoc).

**Recommendation: Reduce to 7 for now.**

Update the governance spec to match what's actually enforced. If the fabricated fields appear in the registry, clearly label them `_inferred` (not presented as governed metadata). This resolves the false-confidence problem without requiring 118 components to get 7 new hand-filled fields.

---

## MDX-in-MDX Opportunity (from user brief)

The taxonomy decision tree, JSDoc template, and "build a new component" checklist currently live **only** in `component-governance.mdx` (internal). They should also appear in public-facing pages. Instead of duplicating:

**Option:** Move shared governance blocks to importable snippets:
```
snippets/components/docs-snippets/
  decision-tree.mdx         ← classification Q&A tree
  jsdoc-template.mdx        ← full JSDoc block example
  component-checklist.mdx   ← 6-section build checklist
```

Both `component-governance.mdx` (internal) and the public library landing page can `<Snippet>` these in. One place, two consumers. This is exactly the MDX-in-MDX pattern already used for content reuse across the rest of the docs.

The generated per-category pages (internal catalog vs public library) should stay as parallel generated outputs — they serve different audiences. The shared content is governance/process blocks, not inventory.

---

## What to Archive

| File | Reason | Method |
|------|--------|--------|
| `snippets/components/CATALOG.md` | Stale. Superseded by generated `components-catalog.mdx` | `git mv` to `snippets/components/x-archive/` |
| Old taxonomy public pages: `primitives.mdx`, `layout.mdx`, `content.mdx`, `data.mdx`, `page-structure.mdx` | Wrong names after migration | Delete after new-taxonomy pages are generated |
| `tasks/plan/.../jsdoc-reference.md` | Task artifact, will drift — SOT is the JSDoc | Archive with task on close |

---

## Additional Findings Requiring Attention in Task 10

1. **`docs-guide/source-of-truth-guide.mdx`** — has `# TODO: NEEDS UPDATING` banner and update commands still reference old flat script paths. Needs path fixes.

2. **Generated file banners are stale** — `components-catalog.mdx` and public library pages still show old script paths in their `<Note>` banners. These self-heal when regenerated — do NOT manually edit them.

3. **Locale mirrors** — `v2/cn/`, `v2/es/`, `v2/fr/` all have mirrors of the component-library and components-catalog pages. 28 files total need regeneration. Confirm whether locale mirrors should be regenerated as part of Task 10 or deferred.

4. **Test suite failures to fix in Task 10:**
   - `tests/unit/component-governance-generators.test.js` — expects new-taxonomy page names (`scaffolding.mdx`, `integrators.mdx`) that don't exist yet
   - `tests/unit/component-governance-utils.test.js` — references old path `snippets/components/content/responseField.jsx`

---

## Execution Order (Task 10)

1. **Fix `@type` values in JSDoc** — the `@type` field currently uses new-taxonomy names in some files but the registry's `category` field was generated with old names. Audit: are the JSDoc `@type` values already correct (elements/wrappers/etc.), or do they use old planning names? Run `--strict` on all files and check. *(Analogue: "fix 27 mistyped @type values" in script governance)*

2. **Regenerate `component-registry.json`** — run `generate-component-registry.js` on full component tree (not just `--strict` subset). Verify output taxonomy is new names. This unblocks steps 3–7.

3. **Rewrite `component-governance.mdx`** — new taxonomy, 7-field schema, correct script paths. The rest of the document content (props conventions, styling rules, lifecycle, error handling) is accurate and stays.

4. **Regenerate public library pages** — run `generate-component-docs.js` to produce new-taxonomy page names. Delete old-taxonomy pages once new ones exist.

5. **Regenerate `components-catalog.mdx`** — automatically correct after step 2.

6. **Fix `source-of-truth-guide.mdx`** — remove TODO banner, update script paths.

7. **Update `README.md`** — fix validation command paths (2 lines).

8. **Fix test fixtures** — update `component-governance-utils.test.js` old path, update `component-governance-generators.test.js` expected page names.

9. **Archive `CATALOG.md`** (Task 17).

10. **Decide on MDX snippets** — create `docs-snippets/` if approved.

11. **Locale mirrors** — regenerate or document as deferred.

---

## Decisions Needed

> **Q1: 7-field or 14-field schema?**
>
> **Recommendation: 7 (reduce to match what's enforced).** Update governance spec to match reality. Label fabricated registry fields as `_inferred` if retained.

---

> **Q2: MDX-in-MDX shared snippets — yes or no?**
>
> **Recommendation: Yes**, but defer to after core taxonomy fix. The decision tree, JSDoc template, and checklist are the right candidates. Creates the `snippets/components/docs-snippets/` subdirectory which is a new convention.

---

> **Q3: Locale mirrors — regenerate in Task 10 or defer?**
>
> **Recommendation: Defer EN-first**, then regenerate mirrors in a follow-up. 28 files is a large blast radius for a first pass; confirm correct output on EN pages before propagating.

---

> **Q4: Config page — add `config.mdx` to public library?**
>
> `MermaidColours` is currently governed (passes `--strict`) but has no public library page covering it. It would be the sole entry on a `config.mdx` page.
>
> **Recommendation: Include it** — if `--strict` governs it, the library should document it. One-entry pages are fine.
