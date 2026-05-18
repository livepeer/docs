# UI System — Product Audit (2026-05-18)

## What this repo's UI/UX layer actually delivers

The Livepeer docs UI/UX system gives contributors a governed, opinionated authoring surface on top of Mintlify. Instead of every page reinventing layout, contributors get a JSX component library of 132 named exports, 30+ MDX page and block templates, 8 portable composables, a CSS-token design system, VS Code snippet expansion for every component and template, and a pre-commit pipeline that enforces voice, style and JSDoc compliance. The net effect is fast authoring with consistent rendering, dark/light theme fidelity, WCAG-compliant focus behaviour and zero hardcoded colour drift.

The system is held together by four governance spines. The component framework classifies every JSX file into one of six categories (elements, wrappers, displays, scaffolding, integrators, config) and enforces a 7-tag JSDoc header. The styles pipeline enforces `--lp-*` design tokens, blocks `outline: none` and inline-style drift, and ran a fleet-wide remediation that cut violations from 3,986 to 74. The content writing pipeline locks page taxonomy (7 pageTypes, 15 purposes, 7 audiences) and voice rules (UK English, banned words, no em dashes, no questions in headings). The catalog layer auto-generates `components-catalog.mdx`, `ui-templates.mdx`, `templates-catalog.mdx`, the public `component-library/` tab and the VS Code snippet bundles from the registry.

Where this audit lands: the rendering and enforcement machinery is production-quality, but the user-facing narrative is fragmented. The feature page `docs-guide/features/ui-system.mdx` exists but counts components by JSX file rather than by export, the canonical component framework's count table is stale by 14 components, two voice documents publish the same banned-word lists with different metadata, and the page-composition framework is a draft scaffold rather than a doc. Contributors and AI agents currently have to read five governance files to get one coherent picture.

## Features

### Feature: JSX Component Library

**What it is:** A governed React component library at `snippets/components/` consumed by every MDX page. Provides primitives (buttons, callouts, dividers), wrappers (cards, tables, containers), displays (code blocks, video, diagrams, response fields), scaffolding (heroes, frame-mode headings, portals), integrators (blog feeds, CoinGecko, GitHub releases), and a config layer (MermaidColours).
**Current state:** Production.
**Last touched:** Registry regenerated 2026-05-06; framework spec updated 2026-05-17.
**Lives at:** `snippets/components/` + `docs-guide/config/component-registry.json` + `v2/resources/documentation-guide/component-library/`
**Validated against source:** Yes. Filesystem scan returns 35 live JSX files + 24 archived; registry exports 132 named components.
**What's complete:**
- Six-category folder taxonomy with decision-tree classification.
- 7-tag JSDoc header standard (`@component`, `@type`, `@subniche`, `@status`, `@description`, `@accepts`, `@dataSource`/`@aiDiscoverability` conditional).
- Pre-commit JSDoc validator + auto-regenerated registry JSON.
- Defensive-rendering rules (component crash kills page, hence mandatory null-guards).
- Public component-library tab with per-category landing pages.
- VS Code snippet expansion for every export.
**What's incomplete / community-help opportunity:**
- 24 components sit in `x-archive/` with no documented removal schedule.
- `@contentAffinity` field is designed but not yet enforced.
- Several wrapper components are filed under `displays/` (AccordionGroupList, BasicList, CardCarousel, DisplayCard, DynamicTable) — registry shows `category: wrappers` but `file: snippets/components/displays/…`, indicating an in-flight migration.
- Per-category MDX landing pages still publish category counts that don't match the live filesystem (see Cross-feature observations).
**Recommended canonical home:** Promote to `docs-guide/features/ui-system.mdx` as the lead section; keep framework spec in `docs-guide/frameworks/component-framework-canonical.mdx`.

### Feature: Component categories breakdown

**What it is:** The classification model and decision tree that routes every component to one of six folders.
**Current state:** Production for the routing rule; stale for the counts.
**Last touched:** 2026-05-17 (component-framework-canonical.mdx).
**Lives at:** `docs-guide/frameworks/component-framework-canonical.mdx`, mirrored in `docs-guide/frameworks/component-governance.mdx`.
**Validated against source:** Yes. Live-file vs registry-export vs published-page counts all disagree (see drift section).
**What's complete:**
- Six categories with first-match-wins decision tree.
- Subniche folders matched by `@subniche` JSDoc value.
- Lifecycle states (`stable`, `experimental`, `deprecated`, `broken`, `placeholder`).
**What's incomplete / community-help opportunity:**
- The hand-written "Component Counts" table claims `elements:30, wrappers:30, displays:17, scaffolding:20, integrators:20, config:1, Total:118`. Registry totals 132. Public overview claims 117. Feature page claims 59 (counting files). None of these match.
- Subniche enumeration in `@subniche` JSDoc references folders that don't exist as standalone (`response-fields` vs nested `displays/response-fields`).
**Recommended canonical home:** Counts must come from the registry generator only — no hand-authored count tables. Add a `categories.counts` block to the registry JSON and have the feature page transclude it.

### Feature: Templates (page + block)

**What it is:** Copy-ready MDX scaffolds for the standard page types (overview, how-to, tutorial, reference, FAQ, troubleshooting, portal, landing frame, OpenAPI endpoint, multi-view setup) and reusable blocks (comparison matrix/table, related pages cards/CTA).
**Current state:** Production. 25 page templates and 4 block templates registered.
**Last touched:** 2026-04-03 (catalog last regeneration).
**Lives at:** `snippets/templates/` + `docs-guide/catalog/ui-templates.mdx` + `.vscode/templates.code-snippets`.
**Validated against source:** Yes. `snippets/templates/pages/` contains 10 sub-folders; block folder contains 4 files matching catalog.
**What's complete:**
- Generator (`operations/scripts/generators/components/library/generate-ui-templates.js`) emits catalog, VS Code snippets, and tree of source files.
- Snippet prefix convention (`lp-overview`, `lp-howto`, `lp-tutorial`, `template-faq-page` …).
- Page-type → template mapping documented in catalog.
**What's incomplete / community-help opportunity:**
- Duplicates in catalog: two glossary-consolidated templates, two glossary-tab templates, two source-of-truth templates, two openapi-endpoint templates (one at `resources/`, one at `resources/technical-reference/`). Catalog generator does not de-duplicate.
- `snippets/templates/pages/page-composition-framework.mdx` listed as a "template" (`template-page-composition-framework`) but is the framework scaffold itself, not a copy-ready page template.
- Last regenerated 2026-04-03 — six weeks before this audit. Worth confirming templates haven't drifted.
**Recommended canonical home:** Section under `docs-guide/features/ui-system.mdx`; deep reference stays in `docs-guide/catalog/ui-templates.mdx`.

### Feature: Snippets composables

**What it is:** Portable MDX section blocks (`related-resources-section`, `steps-section`, `prerequisites-section`, `accordion-faq`, `accordion-glossary`, `accordion-troubleshooting`, `overview-intro`, `validation-section`) plus an extensive `snippets/composables/pages/` tree of authored MDX fragments organised by tab.
**Current state:** Production for the 8 Tier-1 composables; mixed for `composables/pages/` (per-tab content fragments).
**Last touched:** Composables-catalog generator referenced in framework; not run in scope of this audit.
**Lives at:** `snippets/composables/` (8 governed section blocks at root + per-tab `pages/` subtree).
**Validated against source:** Partial. Root composables match the framework table; `pages/` subtree (about, gateways, gpu, home, internal, shared, unclassified, plus standalone files like `ecosystem.mdx`, `media-kit.mdx`, `roadmap.mdx`, `showcase.mdx`, `trending-topics.mdx`) is not catalogued in any framework page.
**What's complete:**
- 8 Tier-1 composables with `@composable` governance header.
- Lifecycle rule: promote local content to composables only when a second consumer appears.
- Page-type mapping (which composables apply to which pageType).
**What's incomplete / community-help opportunity:**
- `snippets/composables/pages/unclassified/` exists. By definition this is governance debt.
- `snippets/composables/showcase-data.json` lives in the composables tree but is structured data, not MDX — taxonomy violation.
- No catalog page surfaces the `pages/` subtree.
**Recommended canonical home:** Promote Tier-1 composables list to UI System feature page. Build a generator that catalogues `pages/` per tab.

### Feature: style.css + design tokens

**What it is:** Single global CSS file at repo root that defines `--lp-*` design tokens (colours, spacing, radius, shadow, z-index) with light/dark mode pairs, plus Mintlify component overrides and a documented utility-class layer.
**Current state:** Production.
**Last touched:** 2026-04-09.
**Lives at:** `style.css` + `docs-guide/frameworks/styles-engineering-guide.mdx` + `v2/resources/documentation-guide/copy-style/style-guide.mdx`.
**Validated against source:** Yes.
**What's complete:**
- `--lp-*` namespace fully populated (colour, spacing, brand-platform, status).
- Legacy aliases (`--accent`, `--text` etc.) mapped to canonical `--lp-*` tokens.
- Three-layer hierarchy (Mintlify theme → style.css → component styles).
- Six audit categories + remediator with 14 auto-fix capabilities, `--verify` regression check, peter-evans PR flow.
- WCAG focus-visible enforcement.
- Baseline metrics: 3,986 → 74 violations (98.1% reduction).
**What's incomplete / community-help opportunity:**
- 5 irreducible inline styles in composable files.
- 69 mermaid hardcoded colour schemes deferred for individual review.
- `--lp-color-text-muted` flagged borderline WCAG AA (4.2:1 on white) — needs darker default or documented exemption.
- User-facing style-guide.mdx still references deprecated `--accent` aliases as primary, despite engineering guide marking them deprecated.
**Recommended canonical home:** Keep engineering-grade detail in styles-engineering-guide.mdx. Promote the design-token table to UI System feature page.

### Feature: VS Code MDX snippets

**What it is:** Five `.vscode/*.code-snippets` files providing snippet expansion for: every component (`components.code-snippets`), legacy components (`lp-components.code-snippets`), MDX frontmatter and patterns (`mdx.code-snippets`), Mintlify globals (`mintlify.code-snippets`), and full page templates (`templates.code-snippets`).
**Current state:** Production.
**Last touched:** Generators run alongside template/component generators.
**Lives at:** `.vscode/*.code-snippets`.
**Validated against source:** Yes — all 5 files present.
**What's complete:**
- Bare-name and tag-prefix triggers (`ScrollableDiagram` and `<ScrollableDiagram` both expand).
- 17 MDX scaffold snippets covering frontmatter + page bodies.
- Templates carry consistent prefixes (`lp-*` for first-class, `template-*` for governance scaffolds).
**What's incomplete / community-help opportunity:**
- Tracked backup file `.vscode/livepeer-legacy.code-snippets.bak` flagged in feature page's gap table — not yet removed.
- Two component snippet files (`components.code-snippets` + `lp-components.code-snippets`) — unclear which is canonical.
**Recommended canonical home:** Section under UI System feature page; mention legacy backup as known cleanup.

### Feature: Voice and copy standards

**What it is:** UK English rules, banned words/phrases, banned constructions, paragraph discipline, per-audience voice rules for 7 audiences (gateway, orchestrator, developer, builder, delegator, community, founder), and a domain-term glossary.
**Current state:** Production but duplicated.
**Last touched:** voice-rules.mdx 2026-04-07; voice-and-copy.mdx 2026-04-07.
**Lives at:** `docs-guide/standards/voice-and-copy.mdx` (status: active) AND `docs-guide/standards/voice-rules.mdx` (status: locked) AND `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` (declared canonical source).
**Validated against source:** Yes.
**What's complete:**
- Banned words list (10) and banned phrases (~10) duplicated identically across both files.
- Per-audience register and tone table.
- UK English correction table.
- Universal rules: no em dashes, no questions in headings, opening order, paragraph discipline.
**What's incomplete / community-help opportunity:**
- Two near-identical published files create maintenance ambiguity. voice-rules.mdx is "locked" and points to the workspace source; voice-and-copy.mdx is "active" and points to the same workspace source.
- v2-side `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` re-implements the same rules a third time.
**Recommended canonical home:** Collapse to one: keep `docs-guide/standards/voice-and-copy.mdx` as the published standard, demote voice-rules.mdx to a redirect or fold into voice-and-copy. Public-facing copy-style/authoring-guide.mdx should transclude from the standard, not redefine.

### Feature: Authoring standard

**What it is:** Quality bar (6 requirements), publication gate (5 requirements), pointer to full 2026 production standard.
**Current state:** Production but bifurcated.
**Last touched:** 2026-04-07.
**Lives at:** `docs-guide/standards/authoring-standard.mdx` (gateway page, 67 lines) + `v2/resources/documentation-guide/copy-style/authoring-standard.mdx` (full 432-line specification).
**Validated against source:** Yes.
**What's complete:**
- Quality bar: factual accuracy, voice compliance, structural compliance, UK English, no self-reference, no questions in headings.
- Publication gate: veracity, voice pass, render verification, link integrity, frontmatter completeness.
- Full standard (Part I-III): framework stack (Diátaxis + RFC + Ethereum + Stripe/Vercel + Kubernetes/Rust + Livepeer hybrid), mandatory 9-section page structure, math/economic standards, smart contract requirements, metrics policy, diagram standards, OG metadata mandate.
**What's incomplete / community-help opportunity:**
- The gateway page in docs-guide/standards/ points to a different "full standard" path (`docs-guide/_workspace/livepeer_production_authoring_standard_2026.md`) than the published v2 page. Two different "full standards" implied.
- v2 page uses US spelling ("speculative roadmap claims presented as fact", "labelled" → "labeled") despite the rule it enforces being UK English.
**Recommended canonical home:** Keep one published authoring standard in v2/resources/documentation-guide/copy-style/. Replace docs-guide/standards/authoring-standard.mdx gateway with a one-line redirect.

### Feature: Frontmatter standard

**What it is:** Required and optional YAML frontmatter fields for v2 pages, governance docs, JSDoc, and script JSDoc. YAML safety rules (quote hex, quote booleans, use `>-` for folded scalars).
**Current state:** Production.
**Last touched:** 2026-04-07.
**Lives at:** `docs-guide/standards/frontmatter.mdx`.
**Validated against source:** Yes.
**What's complete:**
- Required v2 fields: title, sidebarTitle, description, keywords.
- Optional content-pipeline fields: pageType, pageVariant, audience, purpose, veracityStatus, complexity, lifecycleStage with enums.
- OG image fields documented.
- Cross-references to component and script frameworks.
**What's incomplete / community-help opportunity:**
- Enum lists drift from page-taxonomy-framework. Frontmatter doc lists 7 pageTypes; the draft `page-composition-framework.mdx` template has 12 (landing, overview, tutorial, quickstart, how_to, concept, reference, faq, troubleshooting, changelog, glossary, guide). The v2 authoring guide lists 7 again but with different members. Decide one canonical set.
- No enforcement script referenced; pre-commit frontmatter validation lives elsewhere.
**Recommended canonical home:** Stay in `docs-guide/standards/frontmatter.mdx`; cross-link from UI System feature page.

### Feature: Naming conventions

**What it is:** File and folder naming standards across MDX, JSX, JS, JSON, YAML workflows, policy docs and framework docs. Domain term table (LPT, orchestrator, gateway, active set, reward cut). Reserved prefixes (`_workspace/`, `_archive/`, `x-archive/`, `_dep-`).
**Current state:** Production.
**Last touched:** 2026-04-07.
**Lives at:** `docs-guide/standards/naming-conventions.mdx`.
**Validated against source:** Yes.
**What's complete:**
- File-type → convention → example mapping.
- Folder convention by location.
- Workflow naming pattern `type-concern-verb-name.yml`.
- Domain term enforcement table (mirrored in voice-and-copy.mdx).
**What's incomplete / community-help opportunity:**
- The domain term table duplicates voice-and-copy.mdx and CLAUDE.md verbatim. Single source needed.
**Recommended canonical home:** Stay; cross-link from UI System feature page.

### Feature: Page taxonomy framework

**What it is:** Locked enumeration of pageTypes, pageVariants, purposes, audiences, complexity levels, lifecycle stages, information types and veracityStatus values.
**Current state:** Draft. The file is a raw notes scratch, not a governance doc.
**Last touched:** 2026-04-03.
**Lives at:** `docs-guide/frameworks/page-taxonomy-framework.mdx`.
**Validated against source:** Yes. File has no frontmatter, mixes `Decription:` typos, lists `pageType` enums that differ from frontmatter.mdx and from content-writing.mdx.
**What's complete:**
- Captures the locked enumeration intent.
- Mentions purpose enum (15 values) matching content-writing.mdx.
**What's incomplete / community-help opportunity:**
- No frontmatter, status, lastVerified.
- Three different pageType enumerations across the repo (`docs-guide/standards/frontmatter.mdx`, `docs-guide/frameworks/content-writing.mdx`, `docs-guide/frameworks/page-taxonomy-framework.mdx` raw notes, `v2/resources/documentation-guide/copy-style/authoring-guide.mdx`). They overlap but don't agree.
- File reads as a scratchpad ("TBD:", "Categories:", embedded Accordion JSX experiment at line 129).
**Recommended canonical home:** Rewrite as canonical reference once a single pageType enum is locked. Until then, the file should not be published.

### Feature: Page composition framework

**What it is:** Section-by-section template for what every page must include (header, introduction, body, footer) with element guidance.
**Current state:** Draft. The file is a literal MDX template with comment blocks, not a governance specification.
**Last touched:** 2026-04-07.
**Lives at:** `docs-guide/frameworks/page-composition-framework.mdx`.
**Validated against source:** Yes — file is 151 lines, mostly JSX comments describing each section.
**What's complete:**
- Conveys the four-section page model (header, intro, body, footer).
- Notes heading-construction rules (no questions, technical descriptors, no number-led headings).
**What's incomplete / community-help opportunity:**
- Title is "Page-structure-template" with description "Describe page-structure-template" — placeholder.
- File doubles as a snippet template (`snippets/templates/pages/page-composition-framework.mdx` is the same file).
- Status: `draft`.
**Recommended canonical home:** Either promote the comment content to a proper framework page or accept this is purely a template and move it out of `frameworks/`.

### Feature: Component framework canonical

**What it is:** Full folder taxonomy listing, decision rules, JSDoc tag reference, component count summary, example headers per category.
**Current state:** Production reference; counts stale.
**Last touched:** 2026-05-17.
**Lives at:** `docs-guide/frameworks/component-framework-canonical.mdx`.
**Validated against source:** Yes. Folder tree matches filesystem; count table does not match registry.
**What's complete:**
- 6-category folder tree with every component file listed.
- 7-tag JSDoc standard with required-vs-conditional logic.
- 10 removed tags documented with reasons.
- Example headers per category type (element, wrapper, integrator-snapshot, hook-using-wrapper, scaffolding).
- Companion-file rules for `@aiDiscoverability` snapshot/props-extracted/none.
**What's incomplete / community-help opportunity:**
- "Component Counts" table is hand-authored and stale (118 claimed, 132 in registry).
- The subniche enum mixes folder names from different categories — e.g. `tables` appears under both `wrappers/` and `displays/`.
- Counts table needs to be regenerated from registry, not hand-typed.
**Recommended canonical home:** Stay; replace count table with generator-emitted block.

### Feature: Component governance

**What it is:** Full governance doc covering classification, repo structure, styling architecture, development standards, documentation standards, lifecycle, enforcement, generation pipeline, decision register (33 decisions), upstream dependencies, completed work, composable content layer.
**Current state:** Production.
**Last touched:** 2026-04-09.
**Lives at:** `docs-guide/frameworks/component-governance.mdx`.
**Validated against source:** Yes.
**What's complete:**
- 60-second quick-start for new contributors.
- Full component checklist (JSDoc, props, composition, styling, error handling, accessibility, testing).
- 33-decision register with rationale.
- Enforcement summary table mapping rule → enforcer → blocks-commit-or-not.
- Three-layer composable architecture (data, components, composables).
**What's incomplete / community-help opportunity:**
- D1 says "6 enforced JSDoc fields"; component-framework-canonical says "7 core tags + 1 conditional". Two different field-count claims.
- D6.5: "deprecated component removed only when @usedIn is empty" — but @usedIn was officially removed from the JSDoc schema. Decision references a tag that no longer exists.
- Section 1.5 talks about "Section 5.2 for the full 6-field schema" while Section 5.2 itself lists "6 Fields + 1 Conditional, Enforced". Cross-references are slightly off-by-one.
**Recommended canonical home:** Stay; reconcile with component-framework-canonical on the 6-vs-7 field count.

### Feature: Catalog generators

**What it is:** Auto-generated inventory pages: `components-catalog.mdx`, `templates-catalog.mdx`, `ui-templates.mdx`, `scripts-catalog.mdx`, `workflows-catalog.mdx`, `pages-catalog.mdx`.
**Current state:** Production; freshness varies.
**Last touched:** components-catalog 2026-04-09, templates-catalog 2026-04-03, ui-templates 2026-04-03, scripts-catalog 2026-04-08, workflows-catalog 2026-04-15, pages-catalog 2026-05-14.
**Lives at:** `docs-guide/catalog/`.
**Validated against source:** Yes.
**What's complete:**
- AUTO-GENERATED banners with regen command on every file.
- components-catalog renders a SearchTable for live filtering.
- ui-templates carries a `<Tree>` view of `snippets/templates/`.
- generators registered in operations/scripts/generators/.
**What's incomplete / community-help opportunity:**
- ui-templates and templates-catalog last regenerated 2026-04-03 — six weeks before this audit. Template files may have changed.
- components-catalog page embeds `componentTableData` as a raw export and carries the comment `{/* should not be here. */}` — author noted the data block doesn't belong inline.
- No CI workflow forces regeneration on PR touching snippets/templates/ or snippets/components/.
**Recommended canonical home:** Stay in `docs-guide/catalog/`. Add CI workflow.

### Feature: Public-facing component-library tab

**What it is:** The published v2 surface that contributors and external readers visit to discover components: a landing page with category cards plus 7 per-category reference pages (elements, wrappers, displays, scaffolding, integrators, config, overview) — fully generated from the registry.
**Current state:** Production.
**Last touched:** Generated by `generate-component-docs.js`; needs regeneration to fix count drift.
**Lives at:** `v2/resources/documentation-guide/component-library/`.
**Validated against source:** Yes.
**What's complete:**
- Card group on landing routes to each category page.
- Per-category page lists every export with status, import path, description.
- AUTO-GENERATED banner with regen command.
- LLM-generated editorial prose with template fallback.
**What's incomplete / community-help opportunity:**
- Landing claims `(27 exports)` for elements, `(31 exports)` for wrappers, `(20 exports)` for displays, `(20 exports)` for scaffolding, `(18 exports)` for integrators, `(1 exports)` for config. Sum = 117. Overview page also claims 117. Integrators page header claims 19. None match the registry's 132.
- Elements page shows two `BlinkingIcon` rows (real component + alias) — generator de-dup needed.
- Wrappers page lists 5 components as `planned` (BasicList, IconList, StepLinkList, UpdateLinkList, UpdateList) — published as governed components but unimplemented.
- File paths on wrappers landing point to `snippets/components/displays/...` for several "wrapper" components (AccordionGroupList, BasicList, CardCarousel, DisplayCard, DynamicTable). Either folder placement is wrong or category tagging is wrong.
**Recommended canonical home:** Stay. Re-run `generate-component-docs.js --fix` after registry validation.

## Cross-feature observations

### Drift evidence (specific)

**Component count drift across 4 surfaces:**
- Feature page `docs-guide/features/ui-system.mdx`: claims **59 JSX files** (counts files, not exports) — correct file count but misleading metric.
- Framework `docs-guide/frameworks/component-framework-canonical.mdx`: claims **118 total** in count table (hand-authored).
- Public overview `v2/resources/documentation-guide/component-library/overview.mdx`: claims **117 exports**.
- Registry `docs-guide/config/component-registry.json`: contains **132 components**.
- Live filesystem: **35 live JSX files** (10 elements, 3 wrappers, 10 displays, 3 scaffolding, 8 integrators, 1 config) + **24 archived**.

**Per-category file vs claimed-export drift (feature page vs published-page):**
| Category | Live files | Feature page | Public landing | Public overview | Registry exports |
|---|---|---|---|---|---|
| elements | 10 | 10 | 27 | 27 | (counts conflate files/exports) |
| wrappers | 3 | 3 | 31 | 31 | |
| displays | 10 | 10 | 20 | 20 | |
| scaffolding | 3 | 3 | 20 | 20 | |
| integrators | 8 | 8 | 18 | 18 | |
| config | 1 | 1 | 1 | 1 | |

The feature page is counting FILES (35 total), the public pages are counting EXPORTS (117), and the registry contains 132 — neither file count nor export count of either page matches it.

### Duplicate governance documents

- **Voice rules:** `docs-guide/standards/voice-and-copy.mdx` AND `docs-guide/standards/voice-rules.mdx` publish the same banned words/phrases. Different statuses ("active" vs "locked"), same content.
- **Authoring standard:** `docs-guide/standards/authoring-standard.mdx` (gateway, points to `docs-guide/_workspace/livepeer_production_authoring_standard_2026.md`) AND `v2/resources/documentation-guide/copy-style/authoring-standard.mdx` (full 432-line spec). Two "full" standards.
- **Style guide:** `docs-guide/frameworks/styles-engineering-guide.mdx` (engineering reference) AND `v2/resources/documentation-guide/copy-style/style-guide.mdx` (user-facing). User-facing version still leads with deprecated `--accent` aliases.
- **Domain terms table** appears verbatim in CLAUDE.md, `voice-and-copy.mdx`, AND `naming-conventions.mdx`.

### Canonical-home question

`docs-guide/standards/` vs `v2/resources/documentation-guide/copy-style/`: docs-guide/ is governance/internal, v2/resources/documentation-guide/ is publishable contributor-facing. Today these duplicate. The cleanest fix is: docs-guide/standards/ is the single source of truth, v2/resources/documentation-guide/copy-style/ surfaces should transclude or summarise from it. Authoring-guide.mdx in v2 (the 339-line file with component import patterns, frontmatter examples, Mintlify component reference) is genuinely contributor-facing and should stay; the full authoring-standard.mdx duplicate should not.

### Stale catalogs

- `docs-guide/catalog/templates-catalog.mdx` and `docs-guide/catalog/ui-templates.mdx`: mtime 2026-04-03, six weeks stale.
- `docs-guide/catalog/components-catalog.mdx`: 2026-04-09, embeds raw data block author flagged as "should not be here".
- 19 `.DS_Store` files in `snippets/` — gap table flagged this; not yet cleaned.
- `.vscode/livepeer-legacy.code-snippets.bak` still tracked — gap table flagged.

### page-taxonomy-framework + page-composition-framework

Both files are titled "framework" but are in draft state. page-taxonomy-framework.mdx has no frontmatter and reads as a working notes document. page-composition-framework.mdx is a literal MDX template with placeholder description "Describe page-structure-template" and the same file is registered as a `snippets/templates/pages/` template. Either promote or relocate.

## Community-help opportunities

1. **Reconcile component counts across all surfaces.** File: `docs-guide/frameworks/component-framework-canonical.mdx` lines 254-263. Acceptance: replace hand-authored count table with a generator-emitted block sourced from `docs-guide/config/component-registry.json`. Same fix in `docs-guide/features/ui-system.mdx` lines 40-50 — pull from registry, distinguish file-count vs export-count.

2. **Collapse voice rule duplicates.** Files: `docs-guide/standards/voice-and-copy.mdx` and `docs-guide/standards/voice-rules.mdx`. Acceptance: pick one (recommend voice-and-copy.mdx as it's broader); convert the other to a one-line redirect; remove the duplicate per-audience tables in `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` and replace with a link.

3. **Fix the wrapper-vs-display folder/category mismatch.** Files: registry entries for AccordionGroupList, AccordionLayout, BasicList, CardCarousel, DisplayCard, DynamicTable, and any other component where `category: wrappers` but `file: snippets/components/displays/...`. Acceptance: either move the files to `snippets/components/wrappers/` (taxonomy says wrappers) or update `@type` in their JSDoc to `displays`. Then rerun pre-commit registry generation.

4. **Empty `x-archive/`.** 24 archived JSX files with no removal schedule. Acceptance: triage each as DELETE or KEEP-AS-ALIAS; for KEEPs add a `@status deprecated` + `@deprecated` JSDoc note and a removal date; for DELETEs run governed deletion.

5. **Regenerate stale catalogs.** Files: `docs-guide/catalog/templates-catalog.mdx`, `docs-guide/catalog/ui-templates.mdx`. Acceptance: run `node operations/scripts/generators/components/library/generate-ui-templates.js --write` and `node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --write`; add a CI workflow that regenerates on any change to `snippets/templates/**` or `.github/ISSUE_TEMPLATE/**`.

6. **Fix the embedded data block in components-catalog.** File: `docs-guide/catalog/components-catalog.mdx` line 25-26 (`{/* should not be here. */}` comment and inlined `componentTableData` export). Acceptance: move the data to a JSON companion file, update the SearchTable import to fetch from it.

7. **Lock one canonical pageType enum.** Files: `docs-guide/frameworks/page-taxonomy-framework.mdx`, `docs-guide/standards/frontmatter.mdx`, `docs-guide/frameworks/content-writing.mdx`, `v2/resources/documentation-guide/copy-style/authoring-guide.mdx`. Acceptance: pick 7 pageTypes (content-writing.mdx's set seems most current), publish in frontmatter.mdx, delete the other enumerations.

8. **Promote page-taxonomy-framework or relocate.** File: `docs-guide/frameworks/page-taxonomy-framework.mdx`. Acceptance: either rewrite as a proper governance doc with frontmatter, status, lastVerified, and a single locked enum, or move the file into a `_workspace/` lane and remove it from frameworks/.

9. **Resolve the 6-vs-7 JSDoc field count.** Files: `docs-guide/frameworks/component-framework-canonical.mdx` (says 7+conditional) and `docs-guide/frameworks/component-governance.mdx` D1 (says 6 enforced). Acceptance: align both to the actual pre-commit validator's enforced set.

10. **Clean .DS_Store + .bak.** Acceptance: delete `.DS_Store` files in `snippets/`, delete `.vscode/livepeer-legacy.code-snippets.bak`, update `.gitignore` if not already covered.

## Recommended single-page rewrite outline

Consolidated `docs-guide/features/ui-system.mdx`:

1. **What the UI/UX system delivers** — 3-paragraph product-forward intro: governed component library, page templates, design tokens, voice rules, auto-generated catalogs. Frame the value (fast authoring, theme fidelity, zero drift). Keep it under 250 words.
2. **The four spines** — short table mapping spine to governance doc: component framework → component-framework-canonical.mdx; styles → styles-engineering-guide.mdx; content/voice → voice-and-copy.mdx + content-writing.mdx; page composition → frontmatter.mdx + page-composition.
3. **Component library at a glance** — generator-emitted count block (live files + total exports + per-category). Decision-tree excerpt (5 questions). Link to public component-library tab.
4. **Templates and composables** — generator-emitted list of page templates with snippet prefix. List the 8 Tier-1 composables. Link to ui-templates.mdx.
5. **Design tokens and styles** — `--lp-*` table abridged (top 10 most-used). One-paragraph note on pre-commit enforcement + baseline metrics (3,986 → 74).
6. **Authoring workflow** — 5-step path: pick template → fill frontmatter → import components → write to voice rules → run smoke test.
7. **Governance surfaces** — table linking the per-feature deep docs (canonical names, lastVerified dates).
8. **Known gaps** — auto-pulled from `workspace/reports/governance/gap-report.mdx` or its equivalent; today's gap table lives in ui-system.mdx lines 100-105 — surface it but link to the live report.
9. **Related** — link list (frameworks, standards, catalogs, public component-library tab).

The page should be 350-500 lines total. Every count, every list of components or templates, must be generator-emitted, not hand-authored.
