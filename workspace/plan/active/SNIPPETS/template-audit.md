# Template Structure Audit

**Created**: 2026-03-21
**Status**: Findings complete — see template-plan.md for the fix plan
**Trigger**: v2/templates/ discovered in the repository — templates should not live in v2/

---

## What v2/templates/ Is

`v2/templates/` is a **generated output folder**, not a canonical source folder. The script `tools/scripts/generators/components/library/generate-ui-templates.js` reads canonical templates from `snippets/templates/` and writes "preview route" copies into `v2/templates/` so that Mintlify can route to and render them as standalone pages.

The logic: `snippets/` files are importable but not directly page-routable in Mintlify. The script wraps each template in a generated MDX page (`import Template from '...' / <Template />`) and writes it to `v2/` so Mintlify has a URL to serve.

`v2/templates/` is **intentionally excluded from `docs.json` navigation**. It is not user-facing content. It exists solely for internal preview during authoring.

**This is the problem**: generated internal tooling output has no business living in `v2/`. `v2/` is user-facing published docs. All generated internal pages should live in `docs-guide/` or be dropped.

---

## Two Separate Issues

### Issue 1 — Wrong location for generated preview pages
`v2/templates/` should not exist. Generated preview pages belong in `docs-guide/templates/`.

### Issue 2 — Source-side issues in snippets/templates/ itself
Even if the generator destination is fixed, `snippets/templates/` has internal structural problems (duplicates, naming inconsistencies, mixed content types) that need addressing separately.

---

## Dependency Map

Everything that references `v2/templates/`:

| File | Type | What it does with v2/templates |
|---|---|---|
| `tools/scripts/generators/components/library/generate-ui-templates.js` | Generator | Writes all files to v2/templates/ — root cause |
| `docs-guide/catalog/ui-templates.mdx` | Generated catalog | Generated file that documents v2/templates/ as output — auto-updates when script changes |
| `docs-guide/features/ui-system.mdx` | Generated reference | References v2/templates/ preview routes in generated section |
| `tests/run-all.js` | Test runner | Line 131: excludes `v2/templates/` from link audit |
| `tests/unit/v2-link-audit.test.js` | Link audit test | Line 210: explicit exception for `v2/templates/overview-page-template` |
| `tools/config/script-registry.json` | Script config | Lists `v2/templates` in script scope field |
| `tools/config/ownerless-governance-surfaces.json` | Governance config | Lists `v2/templates/**` as a governed surface |
| `v2/templates/index.mdx` | Generated page | Auto-generated index for the folder itself |
| `docs.json` | Navigation | **Not referenced** — intentionally excluded |

---

## Generator Script Analysis

File: `tools/scripts/generators/components/library/generate-ui-templates.js`

The script produces two categories of output:

### Category A — Keep as-is (correct destinations)

| Output | Destination | Status |
|---|---|---|
| Template catalog | `docs-guide/catalog/ui-templates.mdx` | ✅ correct |
| UI system page section | `docs-guide/features/ui-system.mdx` | ✅ correct |
| Template VS Code snippets | `.vscode/templates.code-snippets` | ✅ correct |
| Component VS Code snippets | `.vscode/components.code-snippets` | ✅ correct |

### Category B — Wrong destination (must change)

| Output | Current destination | Problem |
|---|---|---|
| Per-template preview pages | `v2/templates/pages/**/*-template.mdx` | Should be in docs-guide/, not v2/ |
| Block template aggregate preview | `v2/templates/blocks/block-examples.mdx` | Should be in docs-guide/, not v2/ |

### Script internals that need changing

Three hardcoded values drive the v2/ output:

1. **Line 34** — `BLOCK_PREVIEW_PATH = 'v2/templates/blocks/block-examples.mdx'`
2. **Line 252** — `previewRepoPath` computed as `v2/templates/pages/{relativeDir}/{baseName}-template.mdx`
3. **Line 667** — `removeStalePagePreviews()` scans `v2/templates/pages` for orphaned files to delete

Additionally, a `LEGACY_PAGE_PREVIEW_ALIASES` entry (line 54–65) hardcodes a legacy preview path in `v2/templates/pages/landing-and-navigation/landing-page-template.mdx`.

---

## Full File Inventory

### v2/templates/ (21 files — all generated, all wrong location)

```
v2/templates/
├── index.mdx                          ← generated index, auto-created by generate-pages-index.js
├── blocks/
│   └── block-examples.mdx             ← generated aggregate block preview
└── pages/
    ├── faq-page-template.mdx
    ├── how-to-page-template.mdx
    ├── landing-frame-page-template.mdx
    ├── overview-page-template.mdx
    ├── page-composition-framework-template.mdx
    ├── reference-page-template.mdx
    ├── troubleshooting-page-template.mdx
    ├── tutorial-page-template.mdx
    ├── openapi-endpoint-page-template.mdx
    ├── glossary-tab-template-template.mdx         ← double suffix bug
    ├── glossary-consolidated-template-template.mdx ← double suffix bug
    ├── landing-and-navigation/
    │   ├── landing-page-template.mdx              ← orphan (no source in snippets)
    │   ├── navigation-page-template.mdx
    │   └── portal-page-template.mdx
    ├── reference-and-api/
    │   ├── openapi-endpoint-page-template.mdx
    │   ├── changelog-template-template.mdx        ← double suffix bug
    │   └── source-of-truth-template-template.mdx  ← double suffix bug
    ├── setup-and-code-layouts/
    │   └── multi-view-page-template.mdx
    └── data-imports/
        └── social-data-page-template.mdx
```

### snippets/templates/ (30 files — canonical source, correct location)

```
snippets/templates/
├── README.mdx
├── blocks/
│   ├── comparison-matrix.mdx
│   ├── comparison-table.mdx
│   ├── related-pages-cards.mdx
│   └── related-pages-cta.mdx
├── pages/
│   ├── faq-page.mdx
│   ├── how-to-page.mdx
│   ├── landing-frame-page.mdx
│   ├── openapi-endpoint-page.mdx          ← ROOT-LEVEL DUPLICATE (see issue below)
│   ├── overview-page.mdx
│   ├── page-composition-framework.mdx
│   ├── reference-page.mdx
│   ├── troubleshooting-page.mdx
│   ├── tutorial-page.mdx
│   ├── glossary-tab-template.mdx          ← naming carries "-template" suffix (causes double suffix in output)
│   ├── glossary-consolidated-template.mdx ← same
│   ├── data-imports/
│   │   └── social-data-page.mdx
│   ├── landing-and-navigation/
│   │   ├── navigation-page.mdx
│   │   └── portal-page.mdx               ← NOTE: no landing-page.mdx here
│   ├── reference-and-api/
│   │   ├── changelog-template.mdx         ← carries "-template" suffix
│   │   ├── openapi-endpoint-page.mdx      ← DUPLICATE of root-level copy
│   │   └── source-of-truth-template.mdx   ← carries "-template" suffix
│   ├── setup-and-code-layouts/
│   │   └── multi-view-page.mdx
│   └── tutorial-and-guides/
│       └── tutorial-template.md           ← .md extension (all others are .mdx)
└── docs-guide/
    ├── catalog-page.mdx                   ← DIFFERENT CATEGORY: internal governance templates
    ├── feature-map-page.mdx
    ├── framework-page.mdx
    ├── policy-page.mdx
    └── tooling-reference-page.mdx
```

---

## Issue Summary

### Issue A — Generator writes to v2/ (root cause)
The `generate-ui-templates.js` script writes preview pages to `v2/templates/`. This is the primary problem. `v2/` is user-facing published docs and should not contain internal tooling output.

### Issue B — Double `-template` suffix in generated output (generator bug)
The generator naively appends `-template` to every filename. Four source files in `snippets/templates/` already end in `-template`, producing double-suffixed output.

Affected source files → generated output names:
- `glossary-tab-template.mdx` → `glossary-tab-template-template.mdx`
- `glossary-consolidated-template.mdx` → `glossary-consolidated-template-template.mdx`
- `reference-and-api/changelog-template.mdx` → `reference-and-api/changelog-template-template.mdx`
- `reference-and-api/source-of-truth-template.mdx` → `reference-and-api/source-of-truth-template-template.mdx`

Root fix: source file names in `snippets/templates/` should not carry `-template` in the slug. The generator adds the suffix — the source should be the plain slug.

### Issue C — Duplicate in snippets/templates/pages/ (source-side)
`openapi-endpoint-page.mdx` exists at two paths:
- `snippets/templates/pages/openapi-endpoint-page.mdx`
- `snippets/templates/pages/reference-and-api/openapi-endpoint-page.mdx`

Only the root-level copy has a corresponding preview route in `v2/templates/`. The `reference-and-api/` copy has no preview route — it may be more current or categorised better, but the duplication means one copy drifts without being noticed.

### Issue D — Orphaned file in v2/templates/ (stale generated output)
`v2/templates/pages/landing-and-navigation/landing-page-template.mdx` has no corresponding source in `snippets/templates/pages/landing-and-navigation/`. The script records it as a `LEGACY_PAGE_PREVIEW_ALIASES` entry — it is a manually kept alias for a source (`portal-page.mdx`) that was renamed. The alias has outlived its usefulness.

### Issue E — Mixed file extension in snippets/templates/
`snippets/templates/pages/tutorial-and-guides/tutorial-template.md` uses `.md` instead of `.mdx`. The generator's `walkMdxFiles()` function only picks up `.mdx` files, so this template is silently excluded from all generated outputs (catalog, snippets, preview routes).

### Issue F — Mixed content types in snippets/templates/
`snippets/templates/docs-guide/` (5 files) contains internal governance page templates (framework pages, policy pages, catalog pages). These are a different category from user-facing v2 page templates and sit in the same tree without clear separation. No preview routes exist for them (correct), but the README.mdx does not distinguish them.

### Issue G — Naming inconsistency in source files
Some source files carry `-template` in their slug (`glossary-tab-template.mdx`, `changelog-template.mdx`, `source-of-truth-template.mdx`). Others are plain slugs (`faq-page.mdx`, `how-to-page.mdx`). The convention should be consistent: source files use plain slugs (no `-template` suffix); the generator adds the suffix when writing preview routes.

---

## Relationship to CONTENT-STRUCTURE-TEMPLATES Plan

The `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/research.md` already flags the two-location problem (note on line 1.9: "Two parallel template locations exist. Alignment unverified."). The current audit confirms the alignment is intentional by design but the design is wrong. This plan supersedes that open question for the template-location aspect. The CONTENT-STRUCTURE-TEMPLATES plan covers the content quality of individual templates — that remains separate work.
