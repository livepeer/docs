# Styles Governance Gap Analysis

> Audited: 2026-03-30 | Source: repo scans + Mintlify platform research
> Plan: `.claude/plans/warm-giggling-whisper.md`

---

## Executive Summary

The repo has a comprehensive style guide (1,123 lines) that defines clear rules. The repo does not follow them. **1,802 inline style occurrences across 114 active MDX files** violate the "ZERO inline styles in MDX" rule. Mintlify explicitly warns that `style={{}}` causes layout shift on page load. Additionally, **107 mermaid init directives** hardcode hex colours that should come from MermaidColours.jsx. Components are desktop-only (2 media queries total), and multiple WCAG Level A violations exist.

Beyond compliance, the tooling ecosystem is underutilised. Mintlify provides 15+ CLI commands including `mint a11y` (accessibility), `mint broken-links` (link validation), `mint validate` (strict CI), and `mint rename` (file moves with reference updates). We use approximately 1 (`mint dev`).

---

## 1. Quantified Compliance Gap

### 1A. Style guide violations

| Rule | Count | Files | Severity | Source |
|---|---|---|---|---|
| Inline styles in MDX (`style={{`) | **1,802** occurrences | 114 active files | CRITICAL — causes layout shift per Mintlify | style-guide.mdx Layer 3: "ZERO inline styles" |
| Legacy aliases in JSX (`var(--accent)` etc.) | **84** occurrences | 31 files | MODERATE | style-guide.mdx: use `--lp-*` tokens |
| New tokens in JSX (`var(--lp-color-*)`) | **62** occurrences | 11 files | (reference count) | — |
| Spacing tokens (`--lp-spacing-*`) | **0** usages | 0 files | HIGH — tokens defined, never used | style.css defines 8 spacing tokens |
| Literal spacing in JSX (`"Xrem"`) | **302** occurrences | 33 component files | HIGH | Should use `--lp-spacing-*` tokens |
| Mermaid hardcoded init directives | **107** occurrences | 62 active files | MODERATE | MermaidColours.jsx exists but unused |
| Focus style removal (`outline: none`) | **4** occurrences | 2 files (ShowcaseCards) | CRITICAL — WCAG violation | |
| Empty alt text images (`![]()`) | **0** in active files | — | (Good — may have vague alt text though) | |

**Legacy vs new token ratio:** 84 legacy : 62 new = **58% of CSS variable usage is legacy aliases**. No documented migration path.

### 1B. Mintlify platform gap

We verified these findings against [Mintlify's documentation](https://www.mintlify.com/docs/customize/custom-scripts):

| Finding | Impact | Status |
|---|---|---|
| `style={{}}` causes layout shift on page load | 1,802 occurrences are UX problems, not just code quality | VERIFIED — Mintlify docs warn explicitly |
| Tailwind v3 ships with Mintlify | Our guide says "don't use Tailwind" — Mintlify says use it instead of style prop | VERIFIED — contradicts our style guide |
| `mint a11y` exists | Free WCAG checking we're not using | VERIFIED — checks contrast + alt text |
| `mint broken-links` exists | Automated link validation | VERIFIED — has `--check-anchors`, `--check-external`, `--check-snippets` |
| `mint validate` exists | Strict CI validation mode | VERIFIED — designed for CI/CD pipelines |
| `mint rename` exists | File moves with auto reference updates | VERIFIED — overlaps with our `/propagate` skill |
| CSS multi-file loading | Mintlify docs say "files" (plural) | UNVERIFIED — needs worktree test |
| Mermaid `theme` prop | Exists but undocumented | UNVERIFIED — needs worktree test |
| `mint export` exists | Full docs export as offline zip | VERIFIED — for offline archiving |

### 1C. Tooling gap

| Tool | Available | We use it | Gap |
|---|---|---|---|
| `mint dev` | Yes | Yes | Only tool we use |
| `mint a11y` | Yes | **No** | Free WCAG checks not running |
| `mint broken-links` | Yes | **No** | Link validation not automated |
| `mint validate` | Yes | **No** | CI validation not integrated |
| `mint rename` | Yes | **No** | Manual file moves instead |
| `mint openapi-check` | Yes | N/A | No OpenAPI specs currently |
| `mint upgrade` | Yes | Done | Already migrated to docs.json |
| `mint export` | Yes | **No** | No offline archive capability |
| `mint scrape` | Yes | N/A | Not needed currently |
| Tailwind v3 | Ships with Mintlify | **Banned by style guide** | Mintlify recommends it over inline styles |
| Vale linting | Available via Mintlify CI | **Unknown** | Style guide linting not confirmed in our CI |

---

## 2. Mermaid Styling Gap

### Current state

- **MermaidColours.jsx** exists with centralised colour definitions for light/dark mode
- **107 init directives** across **62 files** hardcode hex colours inline
- Each hardcoded init has ~12 colour values (primaryColor, primaryTextColor, primaryBorderColor, lineColor, mainBkg, nodeBorder, clusterBkg, clusterBorder, titleColor, edgeLabelBackground, textColor, nodeTextColor)
- **No wrapper component** — authors must copy-paste init directives
- Mintlify's built-in mermaid has zoom/pan + undocumented `theme` prop
- **ZoomableDiagram.jsx** exists in repo — may overlap with built-in zoom

### Worst offender

`v2/about/livepeer-protocol/blockchain-contracts.mdx` — **4 separate mermaid blocks**, each with the same 12-colour init directive copy-pasted. That's 48 hardcoded hex values in one file.

### Questions for feasibility testing

1. Does the undocumented `theme` prop accept mermaid themeVariables?
2. Can a wrapper component inject init directives into child mermaid blocks?
3. Does Mintlify process mermaid before or after JSX rendering?
4. Is ZoomableDiagram.jsx redundant with Mintlify's built-in zoom?

---

## 3. Responsiveness Gap

### Current state

| Asset | Count | Responsive? |
|---|---|---|
| Media queries in style.css | 2 | Only 1024px breakpoint |
| Components with responsive patterns | ~0 | Desktop-first, no breakpoint handling |
| Tailwind responsive classes used | 0 | Banned by style guide |

### Critical issues

| Component | File | Issue |
|---|---|---|
| FullWidthContainer | Containers.jsx:156-181 | `width: 100vw` + negative margins = horizontal scroll on mobile |
| ShowcaseCards | ShowcaseCards.jsx:211-702 | Fixed `height: 300px`, absolute positioning breaks mobile |
| CardCarousel | CardCarousel.jsx | `repeat(3, 1fr)` = 3 columns on 375px screen |
| QuadGrid | QuadGrid.jsx | Hard-coded `<Columns cols={2}>` |
| CenteredContainer | Containers.jsx | `maxWidth: "800px"` with no mobile override |
| Frame-mode | style.css:484-545 | `calc(100% + 96px + 20px)` assumes desktop |

### Root cause

Inline styles cannot be responsive (no media queries in `style={{}}`). The style guide bans Tailwind responsive classes (`md:`, `lg:`). Components don't use `<style>` blocks with media queries. There is no responsive design system.

**The Tailwind decision directly blocks responsiveness.** If we allow Tailwind for layout (Option B from Phase 0), responsive classes like `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` become available. Without it, every responsive pattern requires a CSS class in style.css or a `<style>` block in the component.

---

## 4. WCAG Gap

### Critical (Level A violations)

| Issue | Count/Location | WCAG Criterion |
|---|---|---|
| No visible focus indicators | Multiple button/link components | 2.4.7 Focus Visible (AA) |
| `outline: "none"` on inputs | ShowcaseCards.jsx:595 (2 files, 4 occurrences) | 2.4.7 Focus Visible (AA) |
| Form inputs without visible labels | SearchTable:173, ShowcaseCards:628-660 | 1.3.1 Info and Relationships (A) |
| Carousel dots not keyboard accessible | CardCarousel (spans, not buttons) | 2.1.1 Keyboard (A) |

### Moderate (Level AA concerns)

| Issue | Detail | WCAG Criterion |
|---|---|---|
| Muted text contrast | `--lp-color-text-muted` (#9ca3af) on white = ~4.2:1 (needs 4.5:1) | 1.4.3 Contrast Minimum (AA) |

### Working well

| Pattern | Status |
|---|---|
| `prefers-reduced-motion` | Respected in QuadGrid, BlinkingIcon, HeroGif, video components |
| ARIA roles on scroll regions | DynamicTable, ShowcaseCards correctly annotated |
| Social links | Proper `aria-label` + `aria-hidden` on decorative icons |
| Semantic tables | `<table>`, `<thead>`, `<th>` used correctly |

---

## 5. Undocumented Patterns

Patterns that exist in the repo but aren't in the style guide:

| Pattern | Where used | Should document? |
|---|---|---|
| Style prop merging (`{...default, ...style}`) | All 34 component files | Yes — it's the universal convention |
| Variant/preset objects | BorderedBox, CenteredContainer | Yes — reusable pattern |
| Scoped `<style>` injection | StyledSteps, BlinkingIcon, SolutionCard, DynamicTable | Yes — undocumented but necessary |
| `data-docs-*` CSS hooks | 4 attributes in style.css | Yes — bridges component ↔ global CSS |
| CSS variable auto-loading | All .css files loaded | UNVERIFIED — test before documenting |
| JS file auto-loading | All .js files loaded | Yes — security concern |
| `mint a11y`, `mint broken-links`, `mint validate` | Not used | Yes — immediate value |
| Tailwind availability | Ships with Mintlify | Yes — contradicts current guide |
| Layout shift from `style={{}}` | All MDX inline styles | Yes — Mintlify explicitly warns |
| Mermaid undocumented `theme` prop | Built-in mermaid blocks | UNVERIFIED |

---

## 6. Token System Gap

### Defined vs used

| Token category | Defined in style.css | Used in components | Used in MDX |
|---|---|---|---|
| `--lp-color-*` | 27 tokens | 62 usages (11 files) | Via components |
| Legacy aliases (`--accent`, `--text`, etc.) | 13 aliases | 84 usages (31 files) | Via components |
| `--lp-spacing-*` | 8 tokens (1-8) | **0 usages** | **0** |
| `--lp-font-*` | 2 tokens (sans, mono) | **0 usages** | **0** |
| `--lp-radius-*` | 3 tokens (sm, md, lg) | **0 usages** | **0** |
| `--lp-shadow-*` | 1 token (card) | **0 usages** | **0** |
| `--lp-z-*` | 3 tokens (base, overlay, modal) | **0 usages** | **0** |

**17 design tokens exist that are never used.** Components use literal values instead (`"1rem"`, `"0.875rem"`, `"0.5rem"`). The token system is defined but not adopted.

---

## 7. Icon Usage Gap

### Current state

- **Icon-map exists:** `docs-guide/tooling/reference-maps/icon-map.mdx` backed by `snippets/data/reference-maps/icon-map.jsx`
- **78 of 365 unique icons mapped** — all with 10+ occurrences covered
- **Audit script exists:** `operations/scripts/audits/content/reference/audit-icon-usage.js`
- **docs.json icon library:** `"icons.library": "fontawesome"` (also supports `"lucide"` and `"tabler"`)

### Top icon usage (active v2 MDX)

| Icon | Count | Context |
|---|---|---|
| `terminal` | 1,850 | Code block icon (not semantic) |
| `book-open` | 1,297 | Code block icon (not semantic) |
| `github` | 432 | GitHub links |
| `code` | 321 | Code-related content |
| `file-code` | 257 | File references |
| `docker` | 221 | Docker content |
| `coins` | 204 | Economics/staking |
| `link` | 201 | On-chain mode / connections |
| `microchip` | 195 | Orchestrator/compute |
| `server` | 148 | Gateway/infra |

### What's missing from icon governance

| Gap | Detail | Impact |
|---|---|---|
| **When to use icons** | No guidance on which components take icons, when an icon is semantic vs decorative | Authors guess — inconsistent usage |
| **How icons render** | Lucide names = inline SVG (styleable). Custom paths = `<img>` (not styleable). Not in style guide | Authors use `color` prop on custom icons — doesn't work |
| **Where icons come from** | FontAwesome is configured in docs.json. No documentation of which icon set is active | Authors search the wrong icon library |
| **What component for icons** | `<Icon>` is global Mintlify. Custom components: `ArbitrumIcon`, `LivepeerIcon`, `EthereumIcon`. Not catalogued together | No single reference for all icon options |
| **Icon colour styling** | `<Icon icon="name" color="var(--accent)" />` works for Lucide. `style={{ color }}` works inline. Custom SVGs need internal `<style>`. Not in style guide | Authors apply colour styling that has no effect |
| **Icon sizing** | `size` prop on `<Icon>`. Default varies. No documented standard sizes | Inconsistent sizing across pages |
| **Brand/product icons** | Custom SVG icons for Arbitrum, Livepeer, Ethereum exist as JSX components. No inventory | Authors don't know what brand icons are available |
| **Icon in cards/tabs/accordions** | Different components pass icons differently. Card: `icon="name"`. Accordion: `title={<CustomCardTitle icon={<Component/>} />}`. No pattern guide | Complex icon composition patterns undocumented |
| **287 unmapped icons** | 365 unique - 78 mapped = 287 icons with no semantic guidance | 79% of icon vocabulary ungoverned |

### Icon styling constraints (from mintlify-constraints-reference.md)

1. **Lucide icon names** ("arrow-right") render as inline SVG — can be styled with `color` prop
2. **Custom icon paths** ("/snippets/assets/icon.svg") render as `<img>` — CSS `color` has NO effect
3. **Theme-aware custom icons** need SVG files with internal `<style>` containing `@media (prefers-color-scheme: dark)`
4. **Brand icon components** (ArbitrumIcon, LivepeerIcon) are JSX components that accept `color` and `size` props directly

### Custom icon technique (documented here, not in style guide)

The repo uses a **mask-image technique** for brand icons that need colour styling:

```jsx
// ArbitrumIcon and LivepeerIcon use this pattern:
<svg
  className="icon inline bg-gray-800 dark:bg-gray-100"
  style={{
    maskImage: 'url("/snippets/assets/logos/Arbitrum/Arbitrum-Logo.svg")',
    WebkitMaskImage: 'url("/snippets/assets/logos/Arbitrum/Arbitrum-Logo.svg")',
    maskRepeat: 'no-repeat',
    maskPosition: 'center center',
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
    verticalAlign: 'middle',
    ...(color && { backgroundColor: color }),
  }}
/>
```

**How it works:** SVG used as a CSS mask. `backgroundColor` sets the visible colour. Dark mode handled via Tailwind classes (`bg-gray-800 dark:bg-gray-100`). This makes custom SVGs just as colour-styleable as FontAwesome icons.

**Available custom icon components** (Icons.jsx):
- `ArbitrumIcon` — mask-image technique, accepts `size`, `color`, `style`, `className`
- `LivepeerIcon` — same technique
- `ArbitrumSVG` — raw inline SVG with `currentColor` fill (alternative approach)
- `LivepeerSVG` — same

**Note:** `<Icon icon="ethereum" />` is a standard FontAwesome icon — no custom component needed.

**How to make a new custom icon:**
1. Create an SVG with a single filled path (the mask shape)
2. Place in `snippets/assets/logos/` or appropriate subfolder
3. Create a component in `Icons.jsx` using the mask-image pattern
4. Accept `size`, `color`, `style`, `className` props (standard signature)
5. Use Tailwind `bg-gray-800 dark:bg-gray-100` for default dark mode handling
6. The `color` prop overrides with `backgroundColor`

**31 SVG files** exist in `snippets/assets/` — product logos, site assets, domain-specific icons. Not all have corresponding JSX components.

### Recommendation

The icon-map is a strong foundation. What's needed:
1. **Add icon + badge guidance to the style guide** — when, how, what component, sizing, colour styling, custom icon creation
2. **Complete the map** — prioritise the next tier (5-9 occurrences) to get to ~80% coverage
3. **Document the mask-image custom icon technique** — it's powerful but only discoverable by reading Icons.jsx
4. **Catalogue all 31 SVG assets** — which have JSX components, which are standalone, which are unused
5. **Add icon patterns to component composition guide** — how icons work in Card vs Accordion vs Tab vs standalone

---

## 8. Badge & Visual Marker Gap

### Current state

- **Badge** is a Mintlify global component — no import needed
- **BadgeWrapper** and **IconBadgeWrapper** exist in `snippets/components/wrappers/badges/Badges.jsx`
- **Central badge data** for solutions: `v2/solutions/data/badges.jsx`
- **Infrastructure tags** data: `v2/solutions/data/infra.jsx`
- **No canonical badge reference** — no single page documenting badge colours, meanings, and usage rules

### Badge colour vocabulary

| Colour | Count | Semantic meaning |
|---|---|---|
| green | 273 | Product status (Livepeer Product), workload mode (Dual), confirmation, currency (ETH) |
| blue | 145 | Video content/services, OS (Windows stroke), public status |
| purple | 101 | AI content/services, commercial products |
| gray | 59 | Configuration values, neutral references |
| surface | 28 | Metadata, neutral states, compound icon badges |
| yellow | 25 | Draft status, conditional, SPE-funded, OS (Linux stroke) |
| orange | 13 | Warnings, caution |
| red | 4 | Critical/destructive, agent capabilities |
| surface-destructive | 8 | Destructive operations |

### Established badge patterns

**Workload type triad** (used across gateways + solutions):
- `<Badge color="blue">Video</Badge>`
- `<Badge color="purple">AI</Badge>`
- `<Badge color="green">Dual</Badge>` or `<Badge color="green">Realtime AI</Badge>`

**On-chain / off-chain markers** (icon pairs):
- `<Icon icon="link" />` = on-chain (blockchain connection)
- `<Icon icon="floppy-disk" />` = off-chain (local/dev)
- Often combined in badges: `<Badge color="surface"><Icon icon="floppy-disk" /> <Icon icon="link" /></Badge>`

**OS badges** (stroke variant):
- `<Badge stroke color="yellow" icon="linux" size="sm">Linux</Badge>`
- `<Badge stroke color="green" icon="apple" size="sm">macOS</Badge>`
- `<Badge stroke color="blue" icon="windows" size="sm">Windows</Badge>`

**Product ownership**:
- `<Badge color="green">Livepeer Product</Badge>`
- `<Badge color="yellow">SPE-funded</Badge>`
- `<Badge color="purple">Commercial Product</Badge>`

**Infrastructure tags** (IconBadgeWrapper):
- `{ icon: 'torii-gate', label: 'gateway' }`
- `{ icon: 'server', label: 'self-hosted' }`
- `{ icon: 'toolbox', label: 'sdk' }`
- `{ icon: 'plug', label: 'api' }`
- `{ icon: 'cloud', label: 'saas' }`

### What's missing

| Gap | Detail |
|---|---|
| **No canonical badge reference page** | Badge colours and meanings are tribal knowledge — not documented anywhere |
| **Badge colour meanings inconsistent** | Green means "Livepeer Product" AND "Dual workload" AND "confirmation" AND "ETH currency" — overloaded |
| **No badge decision tree** | When to use a badge vs an icon vs text emphasis — no guidance |
| **On-chain/off-chain visual system undocumented** | The `link` / `floppy-disk` icon pair is consistent but not in any guide |
| **Badge + icon composition undocumented** | `<Badge color="surface"><Icon icon="..." /></Badge>` pattern exists but isn't documented |
| **Infrastructure tag system isolated** | IconBadgeWrapper + infra.jsx only used in solutions — could apply to gateways, orchestrators |
| **No badge variant guide** | `stroke`, `size="sm"`, icon prop — badge API surface undocumented |

### Recommendation

1. **Create a canonical badge reference** — either a section in the style guide or a standalone reference page like icon-map
2. **Define badge colour semantics** — one meaning per colour, or explicit context rules (green in solutions = product, green in gateways = dual)
3. **Document the on-chain/off-chain visual vocabulary** — icon pair, badge patterns, text conventions
4. **Document badge composition patterns** — basic, with icon, stroke variant, compound icon badges
5. **Extend infrastructure tags** beyond solutions to gateways and orchestrators where applicable

---

## 9. Decisions Needed

These block the design phase:

| # | Decision | Options | Recommendation | Blocks |
|---|---|---|---|---|
| D1 | Tailwind policy | A) Keep ban, B) Allow for layout, C) Allow broadly | **B — layout utilities only** | Responsiveness, remediation paths, style guide |
| D2 | Legacy alias deprecation | A) Deprecate, B) Maintain both | **A — deprecate with timeline** | Token reference, remediator |
| D3 | Inline style exception policy | A) Zero tolerance, B) Single-prop CSS vars OK | **B — `var(--lp-*)` inline OK** | Remediation categories |
| D4 | CSS file organisation | A) Keep single, B) Split partials | **A — single file** (after verification) | Platform constraints section |
| D5 | Mermaid approach | A) Wrapper component, B) Standard snippet, C) Build-time | **Test A first** in worktree | Mermaid guide, migration plan |
| D6 | Responsive strategy | A) Tailwind breakpoints, B) CSS media queries, C) Both | **Depends on D1** | Component fixes |
| D7 | Tooling integration | Which `mint` CLI tools to adopt | **All: a11y, broken-links, validate** | CI pipeline, testing |
| D8 | Icon guide scope | A) Finish icon-map only, B) Add icon section to style guide, C) Full icon governance | **C — icon section in style guide + complete map + custom icon technique docs** | Style guide, authoring guidance |
| D9 | Badge reference | A) Section in style guide, B) Standalone reference page like icon-map, C) Both | **B — data-backed reference page** (same pattern as icon-map) | Badge consistency, authoring guidance |
| D10 | Badge colour overload | A) Accept context-dependent meanings, B) One meaning per colour | **A — document context rules** (green in solutions ≠ green in gateways) | Badge reference content |

---

## 10. Recommended Next Steps

### Immediate (this plan, design phase)

1. **Human decisions on D1-D7** — these gate the style guide design
2. **Worktree tests** — CSS multi-file, mermaid theme prop, Tailwind in JSX
3. **Style guide framework design** — new sections based on verified findings
4. **Remediator script spec** — intelligent pattern-to-component mapping

### Future (implementation plan)

1. **Integrate `mint a11y` + `mint broken-links` + `mint validate`** into pre-commit and CI
2. **Mermaid wrapper or snippet** — eliminate 107 hardcoded init directives
3. **Responsive fixes** — FullWidthContainer, CardCarousel, breakpoint strategy
4. **WCAG fixes** — focus indicators, muted text contrast, form labels
5. **Inline style remediation** — 1,802 occurrences across 114 files (batched, tested)
6. **Token adoption** — activate the 17 unused design tokens
7. **Legacy alias migration** — 84 usages → `--lp-*` equivalents
