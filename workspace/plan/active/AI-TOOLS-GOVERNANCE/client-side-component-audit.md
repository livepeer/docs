---
title: Client-Side Component Audit
purpose: Identify components with AI discoverability gaps
generated: 2026-03-21
---

> **Placement note**: This audit covers component-level concerns (hook usage, companion file gaps, render behaviour). It may belong in `COMPONENT-GOVERNANCE/` rather than `AI-TOOLS-GOVERNANCE/`. Flagged for Alison to decide placement.

# Client-Side Component Audit

> Components using React hooks render client-side only — their content is NOT in the initial HTML served to crawlers or AI agents. This audit identifies which components carry discoverability risk and whether companion JSON files are needed.

## Summary

| Component | File | Risk | Companion needed | Status |
|---|---|---|---|---|
| MarkdownEmbed | snippets/components/integrators/embeds/DataEmbed.jsx | HIGH | yes | missing |
| CoinGeckoExchanges | snippets/components/integrators/feeds/Coingecko.jsx | HIGH | yes | missing |
| ShowcaseCards (integrators) | snippets/components/integrators/feeds/ShowcaseCards.jsx | HIGH | yes | missing |
| ShowcaseCards (wrappers) | snippets/components/wrappers/cards/ShowcaseCards.jsx | HIGH | yes | missing |
| SearchTable | snippets/components/wrappers/tables/SearchTable.jsx | HIGH | yes | missing (referenced but not present) |
| CardCarousel | snippets/components/wrappers/grids/CardCarousel.jsx | MEDIUM | no | N/A |
| ScrollableDiagram | snippets/components/displays/diagrams/ZoomableDiagram.jsx | LOW | no | N/A |
| DownloadButton | snippets/components/elements/buttons/Buttons.jsx | LOW | no | N/A |
| ScrollBox | snippets/components/wrappers/containers/ScrollBox.jsx | LOW | no | N/A |
| FocusableScrollRegions | snippets/components/elements/a11y/A11y.jsx | LOW | no | N/A |
| Starfield | snippets/components/scaffolding/heroes/HeroGif.jsx | LOW | no | N/A |

---

## Component Details

### MarkdownEmbed

- **File**: `snippets/components/integrators/embeds/DataEmbed.jsx`
- **Hooks**: `useState`, `useEffect`
- **Renders**: Remote markdown content fetched at runtime from an arbitrary URL. The full rendered body of the remote document is invisible to crawlers — only the empty wrapper `<div>` appears in initial HTML.
- **Data props**: `url` (string — source of the fetched markdown)
- **Risk**: HIGH
- **Companion needed**: yes
- **Companion status**: missing — no `[page-slug]-data.json` file found anywhere in the repo for pages embedding this component. The component has `@aiDiscoverability snapshot` in its JSDoc, indicating the intent exists but the companion artifact has not been created.
- **Notes**: Also exported under the deprecated alias `EmbedMarkdown`. Any page importing either name has the same discoverability gap. The remote content is completely absent from initial HTML; the fetch only fires in the browser.

---

### CoinGeckoExchanges

- **File**: `snippets/components/integrators/feeds/Coingecko.jsx`
- **Hooks**: `useState` (exchanges, loading, error, sortBy, sortOrder), `useEffect`
- **Renders**: A sortable table of cryptocurrency exchanges listing a given token — exchange names, CEX/DEX type badges, trading pairs, trust-score indicators, and trade links. All table rows are populated entirely from the CoinGecko API response fetched at runtime.
- **Data props**: `coinId` (string — controls which token's tickers are requested from the CoinGecko API)
- **Risk**: HIGH
- **Companion needed**: yes
- **Companion status**: missing — no companion JSON found. The component has `@aiDiscoverability snapshot` in its JSDoc, but no snapshot artifact exists. Pages using this component (e.g. `v2/cn/gateways/references/arbitrum-exchanges.mdx`, `v2/cn/gateways/references/livepeer-exchanges.mdx`) serve empty initial HTML for the exchange table.
- **Notes**: Renders significant reference data (exchange names, trade URLs, DEX/CEX classification, trading pairs). A pre-generated snapshot JSON seeded at build or deploy time would make this data crawler-accessible. The component is rate-limited by CoinGecko's public API — a snapshot also prevents flakiness.

---

### ShowcaseCards (integrators/feeds)

- **File**: `snippets/components/integrators/feeds/ShowcaseCards.jsx`
- **Hooks**: `useState` (search, categoryFilter, productFilter, page), `useEffect`
- **Renders**: A paginated, searchable, filterable card grid of ecosystem projects. Each card displays title, subtitle, description, category tags, product tags, media, and social/external links. All cards and filter dropdown options are derived from the `items` prop at runtime — none appear in initial HTML.
- **Data props**: `items` (array of project objects — the full card dataset), `limit` (optional cap), `pageSize`
- **Risk**: HIGH
- **Companion needed**: yes
- **Companion status**: missing — no companion JSON found. The component has `@aiDiscoverability props-extracted` in its JSDoc, indicating data should be extractable from the prop at build time, but no extraction artifact exists. The showcase page (`v2/home/solutions/showcase.mdx`) uses this component with a large dataset.
- **Notes**: This is the primary ecosystem project showcase. All project titles, descriptions, and links are invisible to crawlers. A build-time companion JSON containing the full `items` array would directly satisfy the tier-2 `props-extracted` mechanism noted in the component's own annotation.

---

### ShowcaseCards (wrappers/cards)

- **File**: `snippets/components/wrappers/cards/ShowcaseCards.jsx`
- **Hooks**: `useState` (search, categoryFilter, productFilter, page), `useEffect`
- **Renders**: Identical render logic to the integrators/feeds variant — paginated, searchable, filterable project card grid with title, subtitle, description, category/product tags, media, and links. This version lives in the wrappers category and appears to be a maintained parallel implementation.
- **Data props**: `items` (array of project objects), `limit`, `pageSize`
- **Risk**: HIGH
- **Companion needed**: yes
- **Companion status**: missing — same gap as the integrators variant. No companion JSON found anywhere in the repo.
- **Notes**: Two separate files implement the same component with the same name (`ShowcaseCards`). Both need companion JSON coverage. If a single source of truth is consolidated, only one companion would be required. The `InteractiveCard` and `InteractiveCards` components in the same file do not use hooks and are not hook-bearing themselves.

---

### SearchTable

- **File**: `snippets/components/wrappers/tables/SearchTable.jsx`
- **Hooks**: `useState` (query, selectedCategory)
- **Renders**: A filterable table with a search input and a category dropdown. The rendered table rows, column headers, and category filter options all derive from the `itemsList` and `headerList` props. The initial HTML contains only the empty input and select elements — no data rows.
- **Data props**: `itemsList` (array of row objects — primary dataset), `headerList` (column names), `searchColumns`, `categoryColumn`, `TableComponent`
- **Risk**: HIGH
- **Companion needed**: yes
- **Companion status**: missing (referenced but not present) — multiple glossary pages (`v2/home/resources/compendium/glossary.mdx`, `v2/about/resources/compendium/glossary.mdx`, `v2/resources/resources/compendium/glossary.mdx`, `v2/orchestrators/resources/compendium/glossary.mdx`, `v2/solutions/resources/compendium/glossary.mdx`, `v2/gateways/resources/compendium/glossary.mdx`, and others) use this component. The home glossary page explicitly documents the tier-2 mechanism in an MDX comment: `@aiDiscoverability tier-2`, `Companion: glossary-data.json`. However, no `glossary-data.json` file was found anywhere in the repo. A glossary terms source exists at `tools/scripts/generators/content/data/glossary-terms.json` but this is a generator input, not a companion artifact placed adjacent to the MDX file. Pre-commit hook is expected to fail if companion is missing.
- **Notes**: Carries the highest discoverability impact of all hook-bearing components — the glossary is a key reference resource for AI agents querying Livepeer terminology. All term definitions, categories, and relationships are hidden behind client-side filtering state. The `tools/scripts/audits/content/data/discovered-terms.json` file may be related but is not a companion JSON in the required format.

---

### CardCarousel

- **File**: `snippets/components/wrappers/grids/CardCarousel.jsx`
- **Hooks**: `useMemo`, `useState` (pageIndex)
- **Renders**: A subset of child card components (one page of cards at a time). The children themselves are passed as React nodes from the parent MDX — their content originates from static MDX, not from state. The carousel only controls *which page* of already-static children is visible.
- **Data props**: `children` (React nodes — content is authored statically in MDX), `visibleCount`, `gap`, `showDots`
- **Risk**: MEDIUM
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: The child cards are authored as static MDX, so their text content is present in the initial HTML via server-side rendering of the MDX. The hook-managed state (`pageIndex`) only hides cards beyond the first page. Cards on page 2+ are invisible to crawlers. If paginated content is significant (many off-screen cards), consider authoring all content statically outside the carousel or increasing `visibleCount`. The component itself annotates `@aiDiscoverability none`, which is the current status.

---

### ScrollableDiagram

- **File**: `snippets/components/displays/diagrams/ZoomableDiagram.jsx`
- **Hooks**: `useState` (zoom)
- **Renders**: A pannable, zoomable wrapper around diagram children (typically Mermaid charts or SVG). The diagram content itself is passed as `children` from static MDX. Hook state only controls the zoom level applied as a CSS `transform: scale()`.
- **Data props**: `children` (React nodes — diagram markup is static), `title`, `maxHeight`, `minWidth`, `showControls`
- **Risk**: LOW
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: UI chrome only. The actual diagram content comes from static MDX children and is present in initial HTML. The `zoom` state value affects visual presentation only. Component annotates `@aiDiscoverability none`.

---

### DownloadButton

- **File**: `snippets/components/elements/buttons/Buttons.jsx`
- **Hooks**: `React.useState` (isVisible), `React.useRef`, `React.useEffect`
- **Renders**: A download button that lazy-loads on viewport intersection. Before intersection, it renders a placeholder `<span>` with no visible content. After intersection, it renders an icon, labelled button, and optional right icon.
- **Data props**: `label` (button text), `downloadLink`, `icon`, `rightIcon`, `border`
- **Risk**: LOW
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: UI chrome only. The `label` text and `downloadLink` are static props from MDX, not data fetched from state. The `isVisible` state controls whether the button is rendered yet — the label value itself is static. Component annotates `@aiDiscoverability none`.

---

### ScrollBox

- **File**: `snippets/components/wrappers/containers/ScrollBox.jsx`
- **Hooks**: `useRef`, `useState` (isOverflowing), `useEffect`
- **Renders**: A scrollable container with a conditional "Scroll for more" hint. The hint text is hardcoded (`Scroll for more ↓`). The `isOverflowing` state controls whether the hint is shown, not any substantive content.
- **Data props**: `children` (static React nodes — content from MDX), `maxHeight`, `showHint`, `ariaLabel`
- **Risk**: LOW
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: UI chrome only. Content inside the scroll region comes from static MDX children. Only the overflow detection hint is state-dependent. Component annotates `@aiDiscoverability none`.

---

### FocusableScrollRegions

- **File**: `snippets/components/elements/a11y/A11y.jsx`
- **Hooks**: `useEffect`
- **Renders**: Returns `null` — renders no visible content at all. The `useEffect` adds `tabindex="0"` attributes to matching DOM elements for keyboard accessibility.
- **Data props**: `selectors` (array of CSS selectors — targets DOM elements, does not carry renderable content)
- **Risk**: LOW
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: Zero discoverability risk — this component renders nothing visible. It is a pure accessibility side-effect component. Component annotates `@aiDiscoverability none`.

---

### Starfield

- **File**: `snippets/components/scaffolding/heroes/HeroGif.jsx`
- **Hooks**: `useRef`, `useEffect`
- **Renders**: An animated canvas element (`aria-hidden="true"`) showing floating Livepeer logos on a starfield background. The canvas is explicitly hidden from assistive technology. No text content or data is rendered.
- **Data props**: `density` (float — controls star count density), `className`, `style`
- **Risk**: LOW
- **Companion needed**: no
- **Companion status**: N/A
- **Notes**: Zero discoverability risk — the canvas is decorative and marked `aria-hidden`. No text or reference data is produced. The animation runs entirely in the browser via `requestAnimationFrame`. Respects `prefers-reduced-motion`.
