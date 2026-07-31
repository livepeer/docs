# `snippets/templates` Audit

Audit date: 2026-04-05

Scope:
- Every on-disk file under `snippets/templates`
- Current repo references to those files
- Current generator, snippet, test, CLI, and CI consumers
- Fit against current canonical framework standards in:
  - `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
  - `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
  - `.claude/references/**`

Method:
- Inventory from `find snippets/templates -type f`
- Exact-path and prefix tracing with `rg`
- Metadata extraction from frontmatter and body structure
- Duplicate detection by content hash
- Validation of current generator/test contracts

Totals:
- Total files: `39`
- Page templates: `27`
- Block templates: `4`
- `docs-guide` templates: `6`
- Root files: `2`
- Exact duplicate groups: `4`
- Files with non-canonical taxonomy values: `10`
- Files with inline styles in MDX: `6`
- Files missing frontmatter: `2`
- `.md` files in the template tree: `1`

Usefulness legend:
- `High`: strong current value for contributors or developers
- `Medium`: useful, but partially stale, duplicated, or narrowly scoped
- `Low`: limited current value; better as historical/internal reference than as a live template
- `Retire`: orphan, empty, duplicate, or misleading enough that it should not remain a current template surface

## Executive Summary

- `snippets/templates` is not a runtime dependency surface. I found no direct `import`/`from` consumers of any `snippets/templates/**` file from routed `v2/**` pages or live `snippets/**` page composition code. The folder is an authoring and governance surface, not a page-render surface.
- The root structural problem is mixed concerns in one tree: copy-ready page/block scaffolds, internal `docs-guide` generator templates, and framework/reference notes all live together, but only `pages/**/*.mdx` and `blocks/**/*.mdx` are actually governed by the UI-template generator.
- Current contributor discoverability is inconsistent. `docs-guide/catalog/ui-templates.mdx` is the best current inventory, but `snippets/templates/README.mdx`, `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx`, `v2/resources/documentation-guide/tooling/snippets-inventory.mdx`, and `.vscode/mdx.code-snippets` still expose an older, partial, and partly flattened model.
- Four duplicate page-template pairs are byte-for-byte identical:
  - `pages/repo-documentation/source-of-truth-template.mdx` and `pages/repo-documentation/source-of-truth.mdx`
  - `pages/resources/compendium/glossary-consolidated-template.mdx` and `pages/resources/compendium/glossary-consolidated.mdx`
  - `pages/resources/compendium/glossary-tab-template.mdx` and `pages/resources/compendium/glossary-tab.mdx`
  - `pages/resources/openapi-endpoint-page.mdx` and `pages/resources/technical-reference/openapi-endpoint-page.mdx`
- Those duplicate pairs are not harmless. The generator produces `30` page/block templates on disk, but only `26` entries in `.vscode/templates.code-snippets`, because duplicate titles collapse into one snippet key.
- Canonical taxonomy drift is real, not hypothetical. Several templates still use deprecated or invalid values such as `pageType: overview`, `purpose: overview`, `pageType: changelog`, `purpose: tutorial`, `audience: internal`, `audience: platform-builder`, and `audience: [object Object]`.
- The current enforcement surface catches generated-snippet drift, but not the broader information-architecture mess. `node operations/scripts/generators/components/library/generate-ui-templates.js --check` fails because `.vscode/templates.code-snippets` is stale, and `node operations/tests/unit/ui-template-generator.test.js` fails on the same artifact drift.

## What Currently Uses This Folder

### No live page-runtime consumers found

I found no direct imports of `snippets/templates/**` from routed `v2/**` pages or live snippet composition files.

That means this folder currently serves:
- authoring scaffolds for humans and agents
- generator input for catalog and snippet outputs
- governance and validation scope
- documentation/reference inventory

### Active tool and governance consumers

| Consumer | How it uses `snippets/templates` | Notes |
|---|---|---|
| `operations/scripts/generators/components/library/generate-ui-templates.js` | Canonical generator for page/block template inventory and snippet outputs | Scans `snippets/templates/pages/**/*.mdx` and `snippets/templates/blocks/**/*.mdx` only |
| `.vscode/templates.code-snippets` | Generated authoring snippets for page/block templates | Currently stale against generator output |
| `docs-guide/catalog/ui-templates.mdx` | Generated catalog of page/block templates | Best current inventory for page/block templates |
| `docs-guide/features/ui-system.mdx` | Generated/internal UI-system reference | Still describes the older preview-route model |
| `operations/tests/unit/ui-template-generator.test.js` | Validates template MDX safety and generated artifacts | Catches current `.vscode/templates.code-snippets` drift |
| `operations/tests/unit/docs-guide-sot.test.js` | Treats UI-template artifacts as a generated-source-of-truth surface | Uses generator freshness as part of docs-guide SoT validation |
| `operations/tests/run-all.js` | Staged/local quality gate includes template changes in UI-template lane | Indirect local enforcement |
| `operations/tests/run-pr-checks.js` | Changed-file PR validation includes template changes in UI-template lane | Indirect CI enforcement |
| `.github/workflows/test-suite.yml` | Runs `npm --prefix tests run test:pr` and docs-guide SoT check | No direct `snippets/templates/**` path filter; enforcement is indirect through test runners |
| `tools/lpd` | Exposes `ui-templates` repair surface | Still stages `v2/templates`, which no longer exists |
| `tools/config/ownerless-governance-surfaces.json` | Declares `ui-templates` as a governed ownerless surface | Canonical generated outputs: `.vscode/*.code-snippets`, `docs-guide/catalog/ui-templates.mdx` |
| `operations/scripts/dispatch/governance/pre-tool-guard.js` | Treats `snippets/templates/**` as template-only governance surface | Warns editors not to confuse template edits with page edits |
| `operations/scripts/dispatch/governance/blast-radius-scanner.js` | Treats template edits as shared-file blast radius | Evidence that the repo considers this a broad-consumer surface |
| `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md` | Loads target templates from `snippets/templates/pages/` during Pass B | Agent-facing template dependency |

### GitHub Actions

Direct workflow path filters on `snippets/templates/**`:
- None found

Indirect workflow enforcement:
- `.github/workflows/test-suite.yml` runs PR changed-file checks via `operations/tests/run-pr-checks.js`
- `.github/workflows/test-suite.yml` runs docs-guide SoT validation via `operations/tests/unit/docs-guide-sot.test.js`

This means template changes are enforced through changed-file classification, not through a dedicated template workflow.

## Root-Cause Findings

### 1. The folder mixes three different product surfaces

Current tree contents combine:
- contributor-facing page/block scaffolds
- developer-facing `docs-guide` catalog/framework/policy templates
- framework/reference notes that are not safe copy-ready scaffolds

Those surfaces have different consumers and quality bars, but the folder does not distinguish them clearly enough for contributors or automation.

### 2. The generator only governs a subset of the tree

`generate-ui-templates.js` scans:
- `snippets/templates/pages/**/*.mdx`
- `snippets/templates/blocks/**/*.mdx`

It does not govern:
- `snippets/templates/docs-guide/**`
- `snippets/templates/README.mdx`
- `snippets/templates/templates-catalog.mdx`
- `snippets/templates/pages/tutorial-and-guides/tutorial-template.md`

So several files inside the same folder are effectively outside the active authoring pipeline.

### 3. Duplicate files silently collapse in generated snippets

The generator builds snippet keys from template title, not repo path. Four duplicate-title pairs collapse into single snippet entries, so the folder currently advertises more templates than the snippet surface actually exposes.

Duplicate groups:

| Duplicate group | Effect |
|---|---|
| `source-of-truth-template.mdx` / `source-of-truth.mdx` | Same title and same snippet prefix; one entry survives |
| `glossary-consolidated-template.mdx` / `glossary-consolidated.mdx` | Same title; one entry survives |
| `glossary-tab-template.mdx` / `glossary-tab.mdx` | Same title; one entry survives |
| `openapi-endpoint-page.mdx` / `technical-reference/openapi-endpoint-page.mdx` | Same title; one entry survives |

### 4. Taxonomy drift is still embedded in template source

Invalid or deprecated values found:
- `audience: internal`
- `audience: platform-builder`
- `audience: tab-audience`
- `audience: {AUDIENCE}` parsed as object
- `pageType: overview`
- `purpose: overview`
- `pageType: changelog`
- `purpose: changelog`
- `purpose: tutorial`

That conflicts with current locked enums in `v2/orchestrators/_workspace/canonical/Frameworks.mdx`.

### 5. Contributor docs and snippet docs are stale and fragmented

Current discoverability surfaces disagree with each other:

| Surface | Current problem |
|---|---|
| `snippets/templates/README.mdx` | Lists only 3 page templates and 2 block templates |
| `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` | Documents only 5 file templates and old snippet prefixes such as `faqPage` |
| `v2/resources/documentation-guide/tooling/snippets-inventory.mdx` | Same partial and stale subset |
| `.vscode/mdx.code-snippets` | Still exposes legacy scaffold prefixes (`faqPage`, `troubleshootingPage`, `openapiPage`, `relatedPages`, `comparisonMatrix`) |
| `.vscode/templates.code-snippets` | Newer generated template surface with `template-*` and `lp-*` prefixes |
| `docs-guide/features/ui-system.mdx` | Still tells the preview-route story and references old flattened file locations |

### 6. Some files are frameworks or notes, not safe “copy-ready templates”

The following files are valuable as internal standards but weak as direct contributor scaffolds:
- `snippets/templates/pages/page-composition-framework.mdx`
- `snippets/templates/docs-guide/component-catalog-template.mdx`
- `snippets/templates/docs-guide/script-catalog.mdx`
- `snippets/templates/templates-catalog.mdx`

Those should not share the same mental model as a clean page scaffold like `overview-page.mdx` or `how-to-page.mdx`.

## Overlap and Redundancy

### Exact duplicate groups

| Files | Status | Usefulness impact |
|---|---|---|
| `pages/repo-documentation/source-of-truth-template.mdx` + `pages/repo-documentation/source-of-truth.mdx` | Exact duplicate | Confuses contributors and collapses generated snippet output |
| `pages/resources/compendium/glossary-consolidated-template.mdx` + `pages/resources/compendium/glossary-consolidated.mdx` | Exact duplicate | Same |
| `pages/resources/compendium/glossary-tab-template.mdx` + `pages/resources/compendium/glossary-tab.mdx` | Exact duplicate | Same |
| `pages/resources/openapi-endpoint-page.mdx` + `pages/resources/technical-reference/openapi-endpoint-page.mdx` | Exact duplicate | Same |

### Near-overlap and conceptual overlap

| Files | Why they overlap |
|---|---|
| `pages/tutorial-and-guides/tutorial-page.mdx` + `pages/tutorial-and-guides/tutorial.mdx` + `pages/tutorial-and-guides/tutorial-template.md` | Three tutorial surfaces for one page type; one is valid scaffold, one is simplified scaffold with invalid purpose, one is empty/orphan |
| `pages/resources/changelog-template.mdx` + `pages/resources/changelog-automated-template.mdx` + `pages/resources/changelog-solutions-template.mdx` | One generic changelog template plus two automation-specific changelog templates with outdated taxonomy |
| `blocks/related-pages-cards.mdx` + `blocks/related-pages-cta.mdx` | Similar end-of-page navigation purpose, but one is cleaner reusable card group and the other is more copy-heavy |
| `.vscode/mdx.code-snippets` + `.vscode/templates.code-snippets` | Two parallel page-scaffold systems with overlapping prefixes and inconsistent docs |

### Prefix overlap

The following prefixes exist in both `.vscode/mdx.code-snippets` and `.vscode/templates.code-snippets`:
- `lp-overview`
- `lp-howto`
- `lp-tutorial`
- `lp-reference`
- `lp-landing-frame`

That means contributors currently have two sources for the same scaffold prefix.

## Validation Results

Commands run:

```bash
node operations/scripts/generators/components/library/generate-ui-templates.js --check
node operations/tests/unit/ui-template-generator.test.js
```

Results:
- `generate-ui-templates.js --check` failed:
  - `.vscode/templates.code-snippets` is out of date
- `ui-template-generator.test.js` failed:
  - generated template snippet output drifted from expected output
  - differences include outdated OG-image path values in `.vscode/templates.code-snippets`
  - test output also surfaces bad placeholder serialization such as `[object Object]` in generated snippets

Interpretation:
- the active generated snippet artifact is already drifting
- current enforcement does not prove template quality is healthy; it proves only that one generated artifact is stale

## File-by-File Assessment

### Root files

| File | Current repo usage | Standards fit | Usefulness |
|---|---|---|---|
| `snippets/templates/README.mdx` | Contributor docs point here as the folder entry point | Outdated coverage and non-canonical `audience: internal` | `Medium` for contributors, because it is the obvious entry point but no longer represents the tree accurately |
| `snippets/templates/templates-catalog.mdx` | No current active consumer found | Missing frontmatter; legacy tree snapshot; not generator-owned | `Retire` |

### Block templates

| File | Current repo usage | Standards fit | Usefulness |
|---|---|---|---|
| `snippets/templates/blocks/comparison-matrix.mdx` | Catalogued; contributor docs mention it; canonical script-pipeline index mentions it; generated snippet surface includes it | Content pattern is still useful, but `audience: internal` is non-canonical | `High` |
| `snippets/templates/blocks/comparison-table.mdx` | Catalogued and generated snippet surface includes it | Clean and focused; weaker discoverability because contributor docs omit it | `Medium` |
| `snippets/templates/blocks/related-pages-cards.mdx` | Catalogued; canonical script-pipeline index mentions it; generated snippet surface includes it | Clean reusable block | `High` for developers and page authors |
| `snippets/templates/blocks/related-pages-cta.mdx` | Catalogued; contributor docs mention it; generated snippet surface includes it | Similar purpose to `related-pages-cards`; non-canonical `audience: internal` | `Medium` |

### `docs-guide` templates

| File | Current repo usage | Standards fit | Usefulness |
|---|---|---|---|
| `snippets/templates/docs-guide/component-catalog-template.mdx` | Historical planning/recovered-chat references only; not in active catalog | Not generator-owned; contains inline styles; generator still expects old `catalog-page.mdx` path in marker lookup | `Low` for contributors, `Medium` for internal framework work |
| `snippets/templates/docs-guide/feature-map-page.mdx` | Only historical planning reference found | Structurally reasonable, but uncatalogued and unenforced | `Medium` for docs-system developers |
| `snippets/templates/docs-guide/framework-page.mdx` | Only historical planning reference found | Structurally reasonable, but uncatalogued and unenforced | `Medium` for docs-system developers |
| `snippets/templates/docs-guide/policy-page.mdx` | Only historical planning reference found | Structurally reasonable, but uncatalogued and unenforced | `Medium` for docs-system developers |
| `snippets/templates/docs-guide/script-catalog.mdx` | Explicitly referenced by `operations/tests/unit/script-docs.test.js` as the layout-change source | Active internal value for script-catalog governance authoring | `High` for developers, low relevance for contributors |
| `snippets/templates/docs-guide/tooling-reference-page.mdx` | Only historical planning reference found | Reasonable internal page scaffold, but uncatalogued and unenforced | `Medium` for docs-system developers |

### Page templates and frameworks

| File | Current repo usage | Standards fit | Usefulness |
|---|---|---|---|
| `snippets/templates/pages/canonical/template-catalog.mdx` | Catalogued as a page template | Non-canonical `audience: internal`; otherwise coherent internal scaffold | `Medium` |
| `snippets/templates/pages/concepts-overviews/overview-page.mdx` | Catalogued; overlapping `lp-overview` prefix exists in both snippet systems | Good fit to current page taxonomy and structure | `High` |
| `snippets/templates/pages/data-imports/social-data-page.mdx` | Catalogued and generated into template snippets | Useful specialised template, but placeholder-heavy, includes inline styles, and even suggests a relative import in comments | `Medium` |
| `snippets/templates/pages/domain-pages/solutions-overview-template.mdx` | Catalogued only; heavy historical chat references | Uses deprecated taxonomy (`overview`, `platform-builder`), heavy inline styles, many placeholders | `Low` |
| `snippets/templates/pages/landing-and-navigation/landing-frame-page.mdx` | Catalogued; overlapping `lp-landing-frame` prefix exists in both snippet systems | Strong fit for navigation landing use cases | `High` |
| `snippets/templates/pages/landing-and-navigation/navigation-page.mdx` | Catalogued; `ui-system` and canonical pipeline index reference it | Good fit; one of the clearer navigation scaffolds | `High` |
| `snippets/templates/pages/landing-and-navigation/portal-page.mdx` | Catalogued; `ui-system` and canonical pipeline index reference it | Good fit; strong developer usefulness for portal/tab roots | `High` |
| `snippets/templates/pages/page-composition-framework.mdx` | Referenced by canonical frameworks, checks, and pipeline notes | Valuable as a rulebook, but not safe as a literal copy-ready scaffold; includes quoted fake imports and inline-style examples | `High` for developers and agents, `Low` as a contributor scaffold |
| `snippets/templates/pages/repo-documentation/source-of-truth-template.mdx` | Catalogued; shares duplicate title and prefix with sibling exact duplicate | Strong internal pattern, but duplication makes current surface misleading | `Medium` |
| `snippets/templates/pages/repo-documentation/source-of-truth.mdx` | Catalogued; exact duplicate of sibling | Same value, no distinct reason to exist separately | `Retire` as separate surface |
| `snippets/templates/pages/resources/changelog-automated-template.mdx` | Catalogued; architecture notes explicitly flag it for audit/consolidation | Automation-specific value, but invalid taxonomy, invalid audience placeholder serialization, and inline-style-heavy | `Low` for contributors, `Medium` for changelog pipeline developers |
| `snippets/templates/pages/resources/changelog-solutions-template.mdx` | Catalogued; historical workflow work references it | Similar to automated changelog template: useful pipeline intent, outdated taxonomy | `Medium` for changelog pipeline developers, `Low` for general contributors |
| `snippets/templates/pages/resources/changelog-template.mdx` | Catalogued | Best of the changelog group for general authoring; uses current `reference` + `update` semantics | `High` |
| `snippets/templates/pages/resources/compendium/faq-page.mdx` | Catalogued; contributor docs expose it via old prefix/path docs | Good simple scaffold; current problem is discoverability drift, not template quality | `High` |
| `snippets/templates/pages/resources/compendium/glossary-consolidated-template.mdx` | Catalogued; exact duplicate pair | Pattern still useful, but duplicate makes surface noisy | `Medium` |
| `snippets/templates/pages/resources/compendium/glossary-consolidated.mdx` | Catalogued; exact duplicate of sibling | No distinct value as separate file | `Retire` as separate surface |
| `snippets/templates/pages/resources/compendium/glossary-tab-template.mdx` | Catalogued; exact duplicate pair | Pattern useful, but invalid `audience: tab-audience` and duplicate | `Low` to `Medium` |
| `snippets/templates/pages/resources/compendium/glossary-tab.mdx` | Catalogued; exact duplicate; historical contracts audit cites it | No distinct value as separate file | `Retire` as separate surface |
| `snippets/templates/pages/resources/compendium/troubleshooting-page.mdx` | Catalogued; contributor docs expose it via old prefix/path docs | Clean simple scaffold; current issue is docs/snippet drift, not structure | `High` |
| `snippets/templates/pages/resources/openapi-endpoint-page.mdx` | Catalogued; contributor docs expose old flattened path | Useful and clean, but exact duplicate exists elsewhere | `Medium` |
| `snippets/templates/pages/resources/reference-page.mdx` | Catalogued; overlapping `lp-reference` prefix exists in both snippet systems | Strong reference scaffold | `High` |
| `snippets/templates/pages/resources/technical-reference/openapi-endpoint-page.mdx` | Catalogued; exact duplicate of sibling | No distinct value as separate file | `Retire` as separate surface |
| `snippets/templates/pages/setup-and-code-layouts/multi-view-page.mdx` | Catalogued; `ui-system` references it | Good specialised setup scaffold | `High` |
| `snippets/templates/pages/tutorial-and-guides/how-to-page.mdx` | Catalogued; overlapping `lp-howto` prefix exists in both snippet systems | Strong instruction scaffold | `High` |
| `snippets/templates/pages/tutorial-and-guides/tutorial-page.mdx` | Catalogued; overlapping `lp-tutorial` prefix exists in both snippet systems | Strong tutorial scaffold | `High` |
| `snippets/templates/pages/tutorial-and-guides/tutorial-template.md` | Historical notes say it was renamed; file is empty and non-MDX | Not a usable template | `Retire` |
| `snippets/templates/pages/tutorial-and-guides/tutorial.mdx` | Catalogued; canonical pipeline index references it | Useful simplified tutorial scaffold, but `purpose: tutorial` is invalid under current framework | `Medium` |

## Most Useful Files Today

For contributors:
- `snippets/templates/pages/concepts-overviews/overview-page.mdx`
- `snippets/templates/pages/tutorial-and-guides/how-to-page.mdx`
- `snippets/templates/pages/tutorial-and-guides/tutorial-page.mdx`
- `snippets/templates/pages/resources/reference-page.mdx`
- `snippets/templates/pages/resources/compendium/faq-page.mdx`
- `snippets/templates/pages/resources/compendium/troubleshooting-page.mdx`
- `snippets/templates/pages/setup-and-code-layouts/multi-view-page.mdx`
- `snippets/templates/blocks/comparison-matrix.mdx`
- `snippets/templates/blocks/related-pages-cards.mdx`

For developers and governance authors:
- `snippets/templates/pages/page-composition-framework.mdx`
- `snippets/templates/docs-guide/script-catalog.mdx`
- `snippets/templates/docs-guide/framework-page.mdx`
- `snippets/templates/docs-guide/policy-page.mdx`
- `snippets/templates/docs-guide/tooling-reference-page.mdx`

## Lowest-Value or Misleading Files

- `snippets/templates/templates-catalog.mdx`
- `snippets/templates/pages/tutorial-and-guides/tutorial-template.md`
- `snippets/templates/pages/repo-documentation/source-of-truth.mdx` as a second file
- `snippets/templates/pages/resources/compendium/glossary-consolidated.mdx` as a second file
- `snippets/templates/pages/resources/compendium/glossary-tab.mdx` as a second file
- `snippets/templates/pages/resources/technical-reference/openapi-endpoint-page.mdx` as a second file
- `snippets/templates/pages/domain-pages/solutions-overview-template.mdx` in its current taxonomy state

## Recommended Direction

If this surface is going to remain a governed authoring system, the root-cause fix is:

1. Split the tree conceptually, even if not yet physically:
   - contributor page/block scaffolds
   - developer/governance `docs-guide` templates
   - framework/reference notes
2. Remove exact duplicate files and keep one canonical path per template.
3. Normalize all frontmatter to the current `Frameworks.mdx` enums.
4. Decide on one snippet system:
   - generated `templates.code-snippets`
   - or legacy `mdx.code-snippets`
   but not both for the same scaffold prefixes.
5. Regenerate contributor docs so every surfaced template path and snippet prefix matches the current canonical file location.
6. Remove stale references to `v2/templates/` and preview-route language from docs and helper tooling.
7. Decide whether framework-style files like `page-composition-framework.mdx` should live under `snippets/templates/` at all, because they behave more like canonical reference docs than copy-ready templates.
