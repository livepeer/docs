# Exemplary Components

> Pointer + analysis. Do not copy files — emulate the patterns.
> Read the component authoring standard at `snippets/components/component-composition-template.mdx` before writing any component.

---

### ContractVerifier (Gold Standard)

**File:** `snippets/components/integrators/feeds/ContractVerifier.jsx`

**Why it's good:** Full JSDoc with all required tags (@component, @category, @subcategory, @status, @description, @dataSource). Config-driven chain switching — CHAINS object defines per-chain RPC URLs, explorer URLs, and capabilities. RPC failover with sequential retry across multiple public endpoints. Export-used config/constants stay inside the component body, which matches the repo's safe Mintlify pattern for MDX-facing JSX. No React imports. Arrow function export. Props include className="", style={}, ...rest.

**Key patterns:**
- JSDoc header: @component, @category, @subcategory, @status, @description, @dataSource, @aiDiscoverability
- @param with typedef reference: `@param {ContractAddresses} data` pointing to data file typedef
- Config object (CHAINS) inside function body because the exported component reads it directly
- RPC failover: array of endpoints, sequential retry on failure
- Pipeline data consumption: receives data as prop, does not fetch its own
- Arrow function: `export const ContractVerifier = ({ data, className = "", style = {}, ...rest }) => {`
- No React/hook imports — hooks used directly (useState, useEffect)

**Watch out:** This is a large, complex component. Most components should be much simpler. The pattern to emulate is the JSDoc, prop signature, and config-inside-body approach — not the size.

---

### SearchTable (Good — with @aiDiscoverability)

**File:** `snippets/components/wrappers/tables/SearchTable.jsx`

**Why it's good:** 20+ documented props with defaults — the most thoroughly documented component in the repo. Generic and reusable: accepts any TableComponent, any data shape. Cascading filter dropdowns scoped by selections above. @aiDiscoverability: props-extracted — this is the pattern for making components discoverable by AI tools.

**Key patterns:**
- @aiDiscoverability props-extracted — signals that this component's props have been extracted for AI tool discovery
- Comprehensive @param documentation: type, default value, plain-English description for every prop
- Generic wrapper pattern: accepts TableComponent as prop, works with any table renderer
- Cascading filters: each dropdown scopes options based on selections above it
- Safe defaults: Array.isArray() checks on all array props
- Badge colour map for variant rendering
- Separator rows for category grouping

**Watch out:** This component is at the upper limit of prop count. If a new component needs 20+ props, consider whether it should be split.

---

### SolutionItem (Good — @aiDiscoverability Pattern)

**File:** `snippets/components/wrappers/custom/SolutionItem.jsx`

**Why it's good:** Clean example of the @aiDiscoverability props-extracted tag with a compact, well-documented component. Named exports, arrow function, all props documented with @param. Includes an @example block showing real usage with actual component references (LinkArrow, IconBadgeWrapper). The example is copy-pasteable.

**Key patterns:**
- @aiDiscoverability props-extracted — the tag that triggers AI tool prop extraction
- @example block with real, working JSX — not pseudocode
- Compact component: one clear purpose (render a solution entry)
- Props: link, iconWrapper, description, divider, className, style — clean, minimal
- Style objects defined as named consts inside function body (containerStyle, spanStyle)
- className + style + ...rest as final props
- divider prop with boolean default for optional visual separation

**Watch out:** The @param types use React.ReactNode for slot props — this is correct for components that accept rendered elements rather than data.

---

## @aiDiscoverability Reference

The `@aiDiscoverability` tag controls how AI tools discover and interact with components.

**Values:**
- `props-extracted` — component props have been extracted into a structured format for AI tool consumption. Used on components that AI agents may need to compose programmatically.
- `none` — component is not intended for AI-driven composition. Default for most components.

**Files with `props-extracted`:**
- `snippets/components/wrappers/tables/SearchTable.jsx`
- `snippets/components/wrappers/custom/SolutionItem.jsx`
- `snippets/components/integrators/feeds/ShowcaseCards.jsx`
- `snippets/components/displays/tables/ContractAddressDisplay.jsx`
- `snippets/components/elements/callouts/PreviewCallouts.jsx`

**When to use `props-extracted`:** On components that are frequently composed by AI agents or that have complex prop interfaces where structured discovery is valuable. Not needed for simple elements or rarely-used components.
