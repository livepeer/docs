# Template Structure — Fix Plan

**Created**: 2026-03-21
**Updated**: 2026-03-21
**Status**: Ready to execute
**Depends on**: template-audit.md (findings)
**Scope**: generator script cleanup, v2/templates/ removal, snippets/templates/ source cleanup, catalog link fix

---

## Decision: Drop preview pages (Option B)

The preview pipeline (`v2/templates/` generated pages, `<Template />` wrappers) exists solely to power `[view]` links in the catalog table. Those links show a rendered stub with placeholder text — not meaningful content. The real consumption path for templates is the VS Code snippet prefix. No real workflow depends on the rendered preview pages.

**Drop the preview pages entirely.** The `[view]` column in catalog tables is replaced with a direct GitHub source link (more useful) or removed.

---

## Phase 1 — Strip the preview pipeline from the generator

**File**: `tools/scripts/generators/components/library/generate-ui-templates.js`

Remove all code that generates preview pages. The script continues to produce:
- `docs-guide/catalog/ui-templates.mdx` ✅
- `docs-guide/features/ui-system.mdx` ✅
- `.vscode/templates.code-snippets` ✅
- `.vscode/components.code-snippets` ✅

**Remove from the script:**

| What | Where |
|---|---|
| `BLOCK_PREVIEW_PATH` constant | Line 34 |
| `PREVIEW_DETAILS` constant | Lines 47–52 |
| `LEGACY_PAGE_PREVIEW_ALIASES` constant + all usage | Lines 54–65 |
| `previewRepoPath` field in `collectTemplates()` | Line 251–252 |
| `previewRoute` field in `collectTemplates()` | Line 268 |
| `previewTitle` field in `collectTemplates()` | Line 267 |
| `renderPagePreviewContent()` function | Lines 394–424 |
| `renderBlockPreviewContent()` function | Lines 426–473 |
| `removeStalePagePreviews()` function + its call in `run()` | Lines 662–678, 690 |
| Block preview write in `buildExpectedOutputs()` | Line 649 |
| Page preview writes loop in `buildExpectedOutputs()` | Lines 651–653 |
| Legacy alias writes loop in `buildExpectedOutputs()` | Lines 655–657 |
| `BLOCK_PREVIEW_PATH` from `module.exports` | Line 733 |
| `@scope` JSDoc: remove `v2/templates` | Line 11 |

**Also fix the `previewRoute` reference in `renderTemplateTable()`** (line 339) — this function currently renders `[view](${template.previewRoute})` in the catalog table. Replace with a GitHub source link or remove the preview column. See Phase 3.

**Also fix the `renderCatalogContent()` string references** (lines 368, 384–386) that document `v2/templates/` as a generated output.

**Also fix `renderUiSystemGeneratedSection()`** (line 547) which references preview routes in the overview bullet.

---

## Phase 2 — Delete v2/templates/

After Phase 1 is complete and the generator no longer writes to `v2/templates/`, delete the entire folder manually (21 files).

The `generate-pages-index.js` script auto-generates `v2/templates/index.mdx` as part of its scan of `v2/`. Once the folder is deleted, it will no longer create that index.

**Files to delete:**
```
v2/templates/                             (entire folder — 21 files)
```

---

## Phase 3 — Fix catalog table: replace [view] with source links

The catalog table in both generated pages currently has a Preview column with `[view](...)` links pointing to the now-removed preview routes.

**Replace the Preview column** with a direct link to the source file on GitHub:

```
[source](https://github.com/livepeer/docs/blob/main/{template.repoPath})
```

Or, if GitHub links are too brittle to maintain, remove the Preview column entirely — the source path (`snippets/templates/pages/faq-page.mdx`) is already shown in column 2 and is sufficient.

**Update `renderTemplateTable()` in the generator** to implement whichever approach is chosen. This affects:
- `docs-guide/catalog/ui-templates.mdx` (regenerated)
- `docs-guide/features/ui-system.mdx` (regenerated)

---

## Phase 4 — Fix snippets/templates/ source issues

These are independent source-side fixes. None depend on Phases 1–3 but should be done in the same batch for a clean state.

> **Note — block overview page**: The `block-examples` concept (a single page showing all block templates together as an overview) is worth keeping. However it should be a **static authored page** in `snippets/templates/blocks/` or `docs-guide/`, not a generated wrapper. When Phase 1 removes the generated `block-examples.mdx`, a static replacement should be created manually — with real annotated examples rather than raw template stubs. This is flagged as a follow-up authoring task, not part of this cleanup phase.

### 4-A — Remove `-template` suffix from source file names (naming consistency)

Source file names in `snippets/templates/` should be plain slugs. The generator adds the `-template` suffix when writing output — the source should not carry it. Also eliminates the double-suffix bug.

Files to rename:

| Current | Rename to |
|---|---|
| `pages/glossary-tab-template.mdx` | `pages/glossary-tab.mdx` |
| `pages/glossary-consolidated-template.mdx` | `pages/glossary-consolidated.mdx` |
| `pages/reference-and-api/changelog-template.mdx` | `pages/reference-and-api/changelog.mdx` |
| `pages/reference-and-api/source-of-truth-template.mdx` | `pages/reference-and-api/source-of-truth.mdx` |

**Before renaming**: check whether any existing files import these by their current path.

### 4-B — Resolve the openapi-endpoint-page duplicate

`openapi-endpoint-page.mdx` exists at both:
- `snippets/templates/pages/openapi-endpoint-page.mdx`
- `snippets/templates/pages/reference-and-api/openapi-endpoint-page.mdx`

Compare content. If identical or near-identical: keep `reference-and-api/` copy, delete root-level copy. If intentionally different: give the root-level copy a distinct name. Check for any imports of the root-level path before deleting.

### 4-C — Fix the .md extension

`snippets/templates/pages/tutorial-and-guides/tutorial-template.md` uses `.md`. The generator's `walkMdxFiles()` only picks up `.mdx` — this file is silently excluded from all generated outputs (catalog, snippets).

Rename to `tutorial.mdx` (consistent with other templates, aligned with 4-A naming convention). Confirm file content is valid MDX before renaming.

### 4-D — Update README.mdx to distinguish content categories

`snippets/templates/docs-guide/` (5 files) contains internal governance page templates. `snippets/templates/pages/` contains user-facing v2 page templates. The README.mdx does not distinguish these categories.

Update `snippets/templates/README.mdx` to clearly label:
- `pages/` — user-facing v2 page and block templates
- `docs-guide/` — internal docs-guide page templates (framework pages, policy pages, catalog pages)

No file moves needed — the folder separation already exists.

---

## Phase 5 — Update config and test references

After the generator no longer writes to `v2/templates/` and the folder is deleted, clean up all remaining references.

| File | Change |
|---|---|
| `tools/config/script-registry.json` | Remove `v2/templates` from scope field |
| `tools/config/ownerless-governance-surfaces.json` | Remove `v2/templates/**` entries |
| `tests/run-all.js` (line 131) | Remove `v2/templates/` exclusion |
| `tests/unit/v2-link-audit.test.js` (line 210) | Remove `v2/templates/overview-page-template` exception |

After updating: run `node operations/tests/run-all.js` and `node operations/scripts/generators/components/library/generate-ui-templates.js --check` to verify clean state.

---

## Execution Order

```
Phase 1 — Strip preview pipeline from generator
    │
    ▼
    Run: node operations/scripts/generators/components/library/generate-ui-templates.js --write
    (regenerates catalog + ui-system without preview links; does not touch v2/templates yet)
    │
    ▼
Phase 2 — Delete v2/templates/ (21 files)
    │
    ├── Phase 3 — Fix catalog [view] → source links (can run with generator rerun)
    ├── Phase 4-A — Rename -template slug files
    ├── Phase 4-B — Resolve openapi duplicate
    ├── Phase 4-C — Fix .md extension
    └── Phase 4-D — Update README.mdx
    │
    ▼
Phase 5 — Update config and test references
    │
    ▼
    Run: node operations/tests/run-all.js
    Run: node operations/scripts/generators/components/library/generate-ui-templates.js --check
```

Phases 4-A through 4-D and Phase 3 can run in parallel with each other. Phase 5 runs last.

---

## Phase Completion Checklist Format

Each phase should report back with:

```
## Phase N — [Name] COMPLETE

### What was done
[bullet list of changes made]

### Discrepancies or flags found
[anything unexpected encountered during execution]

### Checklist
- [x] Task completed
- [ ] Task pending

### Recommended next task
[Next phase or flag if blocked]
```

---

## Out of Scope

- **Template content quality** — whether individual template files have the right sections, frontmatter, or structure. That is covered by the CONTENT-STRUCTURE-TEMPLATES plan.
- **docs.json audit for any v2/templates references** — confirmed not referenced, but verify after deletion.
- **GitHub source link base URL** — if Phase 3 uses GitHub links, the base URL needs to match the actual repo remote. Verify before hardcoding.
