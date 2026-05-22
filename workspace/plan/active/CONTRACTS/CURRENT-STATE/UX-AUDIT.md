# Contracts UX Audit

Verification date: 2026-04-03

This audit reviews the current contracts-page UX and MDX architecture against:

- official Mintlify guidance for React components, page layouts, styling, and developer docs
- repo governance and Mintlify constraint docs
- working repo patterns that already separate data from page layout

The goal is not to critique visual polish in isolation. The main question is whether the contracts surfaces are composed in a way that is maintainable, indexable, Mintlify-safe, and aligned with the repo's data and component boundaries.

## Sources verified

### Official Mintlify docs

- https://www.mintlify.com/docs/customize/react-components
- https://www.mintlify.com/docs/guides/custom-layouts
- https://www.mintlify.com/docs/customize/custom-scripts
- https://www.mintlify.com/docs/guides/style-and-tone
- https://www.mintlify.com/docs/guides/developer-documentation

### Repo governance and constraints

- `AGENTS.md`
- `.claude/CLAUDE.md`
- `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md`
- `docs-guide/canonical/collation-data/Mintlify/dep-files/snippets/snippetsWiki/mintlify-behaviour.mdx`
- `snippets/components/README.md`

### Repo evidence reviewed

- `v2/about/resources/livepeer-contract-addresses.mdx`
- `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`
- `v2/about/livepeer-protocol/blockchain-contracts.mdx`
- `snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx`
- `v2/gateways/resources/reference/technical/configuration-flags.mdx`
- `snippets/data/gateways/configuration-flags.jsx`
- `v2/gateways/quickstart/gateway-setup.mdx`
- `snippets/templates/pages/resources/compendium/glossary-tab.mdx`

## Scope

In scope:

- contracts reference-page UX and page architecture
- contracts concept-page UX and composition boundaries
- large data import patterns for Mintlify MDX pages
- appropriate separation between generator-owned data, view-model shaping, page copy, and reusable components

Out of scope:

- workflow and cron correctness
- chain-truth and provenance correctness
- docs.json IA changes
- final implementation plan

## Status snapshot

| Area | Current status | Why |
|---|---|---|
| Data source ownership | `partial` | Generator-owned data exists under `snippets/data/contract-addresses/*`, but page-owned shaping logic duplicates it downstream. |
| Reference-page composition | `fail` | The canonical contracts composable mixes copy, data normalization, row shaping, render helpers, interactive tooling, and layout decisions in one MDX file. |
| Concept/reference separation | `partial` | Routes are separated correctly in `docs.json`, but the concept page still duplicates reference lookup logic instead of consuming a shared helper layer. |
| Reusable component usage | `partial` | Generic table components exist, but the contracts surface still carries too much page-local rendering logic. |
| Mintlify constraint fit | `fail` | Current contracts composition relies too heavily on page-local exports, inline styling, and interactive/page-owned shaping rather than thin MDX composition. |
| Discoverability and static readability | `partial` | Primary contracts content is still readable HTML, but the architecture is drifting toward client-heavy tooling without a strong static-first boundary. |
| Working repo-pattern alignment | `partial` | A correct data-to-table pattern exists elsewhere in the repo, but contracts is not following it consistently. |

## Executive judgement

The contracts surface is currently a UX and architecture failure for Mintlify-scale reference content.

The problem is not that the page imports a lot of data. Mintlify can handle large data-driven pages. The problem is that the current contracts page does not respect the boundary between:

- generator-owned truth
- shared data shaping
- reusable presentation components
- authored page content

That boundary failure is the root cause behind most of the current mess.

## Findings

### 1. The canonical contracts reference page is overloaded

Current wrapper page:

- `v2/about/resources/livepeer-contract-addresses.mdx`

Current behavior:

- the route-level page is thin, but it delegates everything to `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`
- that composable then owns page copy, labels, sorting, normalization, table schema, render helpers, verification-widget framing, accordion content, and historical display rules

Evidence:

- imports and page-owned helper surface begin at `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:59`
- data normalization and sort logic live in the same MDX file at `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:124`
- row-shaping and table-building helpers continue through `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:318`
- page narrative, widget framing, and table rendering begin at `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:436`

Why this is wrong:

- a canonical reference page should assemble data and components, not behave like a mini application layer
- the same file currently acts as page, adapter, view-model, and component glue
- this makes every UX change a content edit plus a logic edit plus a layout edit

### 2. The concept page duplicates contract lookup logic that already has a shared home

Current concept page:

- `v2/about/livepeer-protocol/blockchain-contracts.mdx`

Existing shared helper:

- `snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx`

Evidence:

- the concept page imports `blockchainContractsPageData` and redefines `getContract`, contract selectors, resolved addresses, explorer helpers, and code-link helpers starting at `v2/about/livepeer-protocol/blockchain-contracts.mdx:81`
- the helper file already defines the same contract selectors and link helpers at `snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx:1`

Why this is wrong:

- concept pages should explain the system, not rebuild the data-access layer
- duplicated selectors guarantee drift between the concept page and the reference page
- one contracts view-model change should not require hand-editing multiple page-owned resolver blocks

### 3. The repo already has a better large-data reference pattern

Best in-repo comparison:

- `v2/gateways/resources/reference/technical/configuration-flags.mdx`
- `snippets/data/gateways/configuration-flags.jsx`

Evidence:

- the page imports one generic table and one data file at `v2/gateways/resources/reference/technical/configuration-flags.mdx:24`
- the page then renders the table directly with minimal page-owned logic at `v2/gateways/resources/reference/technical/configuration-flags.mdx:40`
- the rows and section data live in the data file at `snippets/data/gateways/configuration-flags.jsx:1`

Why this works:

- page copy is separate from the data rows
- generic rendering stays generic
- the page is easy to scan and easy to maintain
- data can be regenerated or revised without rewriting the page layout

This is the correct architectural direction for the contracts reference surface.

### 4. Gateway quickstart proves Mintlify MDX composition can work, but it is not the target pattern

Evidence:

- `v2/gateways/quickstart/gateway-setup.mdx` explicitly acknowledges import-placement debt at `v2/gateways/quickstart/gateway-setup.mdx:28`
- repo behavior notes document the parent-MDX-scope pattern at `docs-guide/canonical/collation-data/Mintlify/dep-files/snippets/snippetsWiki/mintlify-behaviour.mdx:90`

What this means:

- MDX-in-MDX composition is valid in Mintlify when handled carefully
- it is useful as evidence for parent-child import constraints
- it is not the clean reference pattern for a canonical lookup page with a large structured dataset

Use it as a constraint reference, not as the contracts-page architectural template.

### 5. Mintlify best practice for this case is static-first, component-second, interactive-last

Official Mintlify guidance confirms:

- components must live under `/snippets/`
- nested imports are officially unsupported and should be treated conservatively
- client-rendered React components have SEO and initial-load implications
- heavy use of the `style` prop can cause layout shift, especially on custom layouts

Repo constraint docs align with this:

- `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md:70` says to import data in the MDX and pass it into components via props
- `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/mintlify-constraints-reference.md:90` states the practical rule: JSX-to-JSX component imports can work, but JSX should not own cross-file data-variable logic
- `snippets/components/README.md:30` defines the expected split between wrappers, displays, integrators, and config

What this means for contracts:

- the page should import data and maybe one shared view-model helper
- table components should receive already-normalized rows
- the verifier widget should be an enhancement, not the page's structural centre
- the primary current-address lookup surface should remain visible, static, and easy to scan without client-side interaction

### 6. Searchable or client-heavy reference surfaces need discoverability protection

The glossary template already documents the repo rule:

- `snippets/templates/pages/resources/compendium/glossary-tab.mdx:30` states that `SearchTable` renders client-side only and requires a machine-readable companion file

Implication for contracts:

- if the contracts page moves toward client-heavy search or widget-first interaction, it must preserve static discoverability
- canonical contract addresses should never be available only through search controls, accordions, or a widget lookup flow

### 7. Inline style density is too high for a canonical reference surface

Examples:

- address-cell and chain render helpers use page-local inline style objects in `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:169`
- verification and widget framing sections continue the pattern throughout the page, including `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx:443`

Why this matters:

- it makes visual behavior harder to reuse and harder to audit
- it pushes visual policy into page-owned logic instead of components or shared CSS
- Mintlify explicitly recommends using classes or custom CSS over style-heavy layout composition for stable rendering

### 8. Current worktree state includes a likely broken component import

Current file:

- `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`

Evidence:

- it imports `SearchTableV2.jsx` at line 62
- in the current worktree, `snippets/components/wrappers/tables/` contains `SearchTable.jsx` and `Table.jsx`, but not `SearchTableV2.jsx`

This is a current-state defect in the checked-out worktree, not just a style issue. If that import remains unresolved, the page is carrying dead or incomplete architecture work on top of the broader UX problems.

## Root causes

### Root cause 1: No shared contracts view-model layer

There is a generator-owned data layer and there are page surfaces, but the middle layer is weak or duplicated.

Current result:

- normalization happens inside the canonical page MDX
- concept-page selectors are duplicated in page code
- page surfaces own category labeling and address-link shaping

### Root cause 2: Page composables are acting like application logic

The contracts composable is not a thin page composition layer. It is effectively a route-local adapter and rendering engine.

That is the wrong responsibility for authored MDX.

### Root cause 3: Interactive enhancements are crowding the core reference job

The contracts page needs to do one thing first:

- let a user find the current official contract address quickly and safely

The current architecture over-weights:

- verification walkthroughs
- widget framing
- historical rendering logic
- per-category UI logic

before the page has a clean, shared, minimal reference boundary.

### Root cause 4: The concept and reference surfaces are not consuming the same derived contract model

The concept page and the reference page both depend on the same underlying truth, but they do not consume it through the same shared derived layer. That creates drift risk and needless complexity.

## What good looks like

The target architecture should look like this:

| Layer | Responsibility | Allowed content |
|---|---|---|
| Generator-owned data | Truth recovered from pipeline outputs | Raw canonical contract data and metadata under `snippets/data/contract-addresses/*` |
| Shared view-model | Pure shaping for page consumption | Labels, row normalization, chain names, explorer links, category ordering, active/current/historical grouping |
| Presentational components | Reusable display primitives | Generic contract tables, badges, address cells, category headings, verifier wrapper |
| Reference page | Canonical lookup UX | Intro, provenance note, active tables, current implementations, historical sections, optional widget below primary content |
| Concept page | Explanation UX | Contract roles, interaction diagrams, selected addresses/links when needed, no duplicated data-access logic |

## UX rules for the contracts surfaces

### Reference page rules

- show current official addresses first
- make the default visible content static and scannable
- keep historical contracts secondary
- keep verification tooling below the primary lookup content
- separate "find an address" from "learn how verification works"
- use one shared source for status labels, category labels, and chain labels

### Concept page rules

- explain the system, do not behave like a registry page
- pull exact addresses and links only through a shared helper layer
- do not redefine selectors, explorer helpers, or code-link helpers inline in page MDX

### Component rules

- row shaping should happen before rendering
- address-cell rendering should live in a reusable display/wrapper component, not inside page MDX exports
- page-level inline style blocks should be reduced in favor of component props or shared CSS classes

## Recommended implementation direction

1. Extract all contracts row normalization, label mapping, explorer-link generation, category ordering, and grouping logic from `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx` into a shared contracts view-model module.
2. Make that shared module pure data shaping. No JSX render helpers in the view-model layer.
3. Reduce the canonical contracts reference page to a thin composition layer that imports:
   - generated data
   - shared contracts view-model helpers
   - reusable table and display components
4. Update `v2/about/livepeer-protocol/blockchain-contracts.mdx` to consume the same shared helper module instead of redefining contract selectors and link helpers inline.
5. Keep the verifier widget, but move it below the primary active-address lookup surfaces.
6. Keep active contracts, current implementations, and historical series as distinct UX sections. Do not merge them into one "smart" table by default.
7. If any contracts surface becomes client-heavy, add or preserve a machine-readable companion output so contract truth remains indexable for AI and search.

## Recommended implementation order

1. Define the shared contracts view-model boundary.
2. Move page-owned shaping logic out of MDX.
3. Rebuild the canonical reference page on top of that shared layer.
4. Repoint the concept page to the same shared layer.
5. Reduce inline styles and page-local render helpers.
6. Validate Mintlify render correctness and staged tests.

## Bottom line

The contracts page is not bad because it imports a lot of data.

It is bad because it violates the correct Mintlify and repo pattern for large data imports:

- data should be owned by the data layer
- shaping should be owned by a shared helper layer
- rendering should be owned by reusable components
- pages should own page content and section composition only

The clean repo pattern already exists. The contracts surfaces need to be rebuilt onto it.
