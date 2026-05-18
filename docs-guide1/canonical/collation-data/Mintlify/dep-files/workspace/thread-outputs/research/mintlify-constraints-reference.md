# Mintlify Constraints Reference — Canonical

> Source of truth for all Mintlify platform constraints in this repo.
> Claude MUST read this before writing any MDX page or JSX component.
>
> Verified: 2026-03-29 against repo state + [Mintlify official docs](https://mintlify.com/docs)
> Sources: `snippets/snippetsWiki/mintlify-behaviour.mdx` (458 lines), `ai-tools/ai-skills/page-authoring/SKILL.md`, `snippets/components/README.md`, Mintlify docs

---

## Top mistakes Claude makes

### 1. Importing React or hooks

```jsx
// WRONG — causes build errors
import React from 'react'
import { useState, useEffect } from 'react'

// RIGHT — hooks are globally available, no import needed
const [value, setValue] = useState(false)
```

**Source:** Mintlify docs confirm hooks available without import. Repo evidence: 14 JSX files, 47 hook usages, zero React imports.

### 2. Importing Mintlify platform globals

```jsx
// WRONG — these are built-in, importing breaks things
import { Card, Tabs, Accordion, Note, Steps, Columns, Icon } from 'mintlify'

// RIGHT — just use them directly in MDX
<Card title="Example">Content</Card>
```

See the complete globals list below.

### 3. Using relative import paths

```jsx
// WORKS but NOT preferred — harder to validate, grep, and propagate
import MyComponent from './components/MyComponent.jsx'
import data from '../data/mydata.jsx'

// PREFERRED — root-absolute paths, easier to validate and search
import MyComponent from '/snippets/components/wrappers/cards/MyComponent.jsx'
import data from '/snippets/data/mydata.jsx'
```

**Nuance:** Relative imports (`./`, `../`) DO resolve in Mintlify (confirmed by Mintlify docs and 20+ working examples in `v2/solutions/`). We prefer root-absolute paths because they are:
- Greppable across the whole repo
- Validatable by automated scripts
- Unambiguous when files move
- Consistent with the `/snippets/` convention

**Source:** Mintlify docs: "Relative imports enable IDE navigation." Repo: `v2/solutions/portal.mdx` lines 49-51 use relative paths successfully.

### 4. Missing file extensions

```jsx
// WRONG — may not resolve
import Foo from '/snippets/components/elements/text/Foo'

// RIGHT — always include .jsx or .js
import Foo from '/snippets/components/elements/text/Foo.jsx'
```

**Source:** Mintlify docs confirm extensions required. Repo: all production imports include extensions.

### 5. Cross-file imports — what works and what doesn't

```jsx
// ✅ WORKS — JSX importing another JSX COMPONENT
// In Lists.jsx:
import { GotoLink } from '/snippets/components/elements/links/Links.jsx'

// ❌ DOES NOT WORK — JSX importing DATA/VARIABLES from another file
// In MyComponent.jsx:
import { helperData } from '/snippets/data/helpers.js'

// ✅ RIGHT — import data in the MDX, pass to component via props or scope
// In page.mdx:
import helperData from '/snippets/data/helpers.js'
import MyComponent from '/snippets/components/.../MyComponent.jsx'
<MyComponent data={helperData} />
```

**Critical nuance:** Mintlify officially says "Nested imports are not supported." However, the repo has 4 proven working JSX-to-JSX component imports: `Lists.jsx→Links.jsx`, `VideoData.jsx→Video.jsx`, `DataEmbed.jsx→LazyLoad.jsx`, `Links.jsx→Text.jsx`. These import COMPONENTS, not data.

**The rule:** JSX can import other JSX components (proven by repo evidence). JSX CANNOT import data/variables and reference them (confirmed by `mintlify-behaviour.mdx`). When in doubt, import everything in the parent MDX.

### 6. Top-level constants in JSX files

```jsx
// ❌ CRASHES — ReferenceError at runtime
const myStyles = { wrapper: { display: 'flex', border: '1px solid var(--border)' } }
export const MyComponent = () => <div style={myStyles.wrapper} />

// ✅ WORKS — define inside the function body
export const MyComponent = () => {
  const myStyles = { wrapper: { display: 'flex', border: '1px solid var(--border)' } }
  return <div style={myStyles.wrapper} />
}
```

**Root cause:** Mintlify evaluates each `export` in its own scope. File-level declarations are NOT carried into that scope. Top-level component function definitions work because they ARE the exports. Top-level data/style objects referenced inside exports do NOT.

**Source:** `mintlify-behaviour.mdx` lines 356-374 (discovered 2026-03-28).

### 7. Using the `function` keyword in snippets

```jsx
// ❌ NOT SUPPORTED — Mintlify snippets require arrow function syntax
export function MyComponent({ children }) {
  return <div>{children}</div>
}

// ✅ CORRECT — arrow function syntax
export const MyComponent = ({ children }) => {
  return <div>{children}</div>
}
```

**Source:** Mintlify docs: "The `function` keyword is not supported in snippets." Repo evidence: zero `export function` declarations in `snippets/components/`.

### 8. Inline styles and hardcoded colours

```jsx
// WRONG
<div style={{ color: '#ff0000', marginTop: '20px' }}>

// RIGHT — use CSS variables
<div style={{ color: 'var(--accent)', marginTop: 'var(--spacing-4)' }}>
```

### 9. Icon colour styling with CSS

```jsx
// WRONG — custom icons render as <img>, not inline SVG
// CSS color property has no effect
<Icon icon="custom-icon" style={{ color: 'red' }} />

// RIGHT — use theme-aware SVG files with internal CSS
// Or use Lucide icon names (rendered as inline SVG, can be styled)
<Icon icon="arrow-right" color="var(--accent)" />
```

**Detail:** Mintlify's `<Icon>` component renders custom icons (file paths) as `<img>` elements. CSS `color` has no effect on `<img>`. For theme-aware custom icons, the SVG file itself must contain `<style>` with `@media (prefers-color-scheme: dark)`. Lucide icon names (strings like "arrow-right") render as inline SVG and can be styled.

**Source:** `mintlify-behaviour.mdx` lines 378-438.

### 10. Server-side patterns

```jsx
// WRONG — no SSR, no Node APIs
import fs from 'fs'
import path from 'path'
export async function getStaticProps() { ... }

// RIGHT — Mintlify is client-only
// All data must be pre-compiled or fetched client-side
// Dynamic content is NOT indexed for SEO or AI crawlers
```

### 11. External package imports

```jsx
// WRONG — arbitrary npm packages not available
import lodash from 'lodash'
import axios from 'axios'

// RIGHT — only React hooks and Mintlify globals are available
// For anything else, use native browser APIs (fetch, etc.)
```

### 12. ThemeData imports (deprecated)

```jsx
// WRONG — deprecated, causes bugs
import { ThemeData } from '/snippets/styles/themeStyles.jsx'

// RIGHT — use CSS variables for theme-aware values
// var(--accent), var(--hero-text), var(--border), etc.
```

**Status:** ThemeData is banned. Pre-commit hook blocks it. Use CSS custom properties exclusively.

### 13. Unquoted hex values in YAML frontmatter

```yaml
# WRONG — YAML parses 0x-prefixed values as hexadecimal integers
# The parser converts to a JavaScript number, losing precision for large values
# String() then produces scientific notation: 2.318303095658485e+47
keywords:
  - 0x289ba1701C2F088cf0faf8B3705246331cB8A839

# RIGHT — quote hex values to preserve them as strings
keywords:
  - "0x289ba1701C2F088cf0faf8B3705246331cB8A839"
```

**Impact:** Silently corrupts contract addresses in `sitemap-ai.xml`, `llms.txt`, SEO metadata, and any script using `extractFrontmatter` from `tools/lib/docs-index-utils.js`. The 9 scripts consuming frontmatter keywords all pass through `coerceStringArray` which calls `String()` on the already-corrupted number.

**Also watch for:** YAML auto-converts `yes`/`no`/`on`/`off` to booleans, and bare decimal numbers to floats. Quote any frontmatter value that looks like a number, boolean, or null but should be a string.

**Source:** Discovered 2026-03-31. Root cause: YAML 1.1 spec section 10.3.2 (integer formats). Fix applied to 5 contract address pages. Defensive warning added to `coerceStringArray` in `tools/lib/docs-index-utils.js`.

---

## Import system

### Mintlify platform globals — COMPLETE list (no import needed)

**Parent components:**

| Component | Purpose | Mintlify docs page |
|---|---|---|
| `Accordion` | Expandable sections | `/components/accordions` |
| `AccordionGroup` | Groups Accordions | `/components/accordions` |
| `Badge` | Inline labels and status indicators | `/components/badge` |
| `Banner` | Page-top announcements | `/components/banner` |
| `Callout` | Generic styled alerts (custom icon/colour) | `/components/callouts` |
| `Card` | Content containers with icon/link | `/components/cards` |
| `CardGroup` | Groups Cards in grid (legacy — `Columns` preferred) | Not in current docs |
| `CodeGroup` | Multi-language code blocks | `/components/code-groups` |
| `Color` | Colour swatches | `/components/color` |
| `Columns` | Side-by-side layout | `/components/columns` |
| `Example` | Request/response side-by-side | `/components/examples` |
| `Expandable` | Show/hide content | `/components/expandables` |
| `Frame` | Borders and styling for images/content | `/components/frames` |
| `Icon` | Lucide icons and custom SVGs | `/components/icons` |
| `Mermaid` | Flowcharts, sequence diagrams, Gantt charts, state diagrams | `/components/mermaid-diagrams` |
| `Panel` | Sidebar supplementary content | `/components/panel` |
| `ParamField` | API parameter definitions | `/components/fields` |
| `Prompt` | Copyable AI prompts | `/components/prompt` |
| `ResponseField` | API response field definitions | `/components/responses` |
| `Steps` | Numbered sequential instructions | `/components/steps` |
| `Tabs` | Switchable tabbed views | `/components/tabs` |
| `Tile` | Clickable grid tiles | `/components/tiles` |
| `Tooltip` | Hover info | `/components/tooltips` |
| `Tree` | File/folder hierarchy display | `/components/tree` |
| `Update` | Changelog entries | `/components/update` |
| `View` | Conditional content display | `/components/view` |

**Mermaid diagram constraints:**

- Use standard fenced code blocks with `mermaid` language identifier — no component import needed
- Supported types: flowcharts (`graph LR/TD`), sequence diagrams, Gantt charts, state diagrams, all standard Mermaid types
- **ELK layout engine** available for large/complex diagrams — add `%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%` as the first line inside the code block. ELK optimises node arrangement to reduce overlapping and improve readability
- Interactive zoom/pan controls appear automatically when diagram height exceeds 120px
- Diagram colours should use the `--lp-*` CSS custom properties defined in `snippets/components/config/MermaidColours.jsx`

**Child/variant components (used inside their parent):**

| Component | Parent | Purpose |
|---|---|---|
| `Column` | `Columns` | Individual column |
| `Step` | `Steps` | Individual step |
| `Tab` | `Tabs` | Individual tab |
| `Note` | (standalone) | Callout preset — blue info |
| `Warning` | (standalone) | Callout preset — yellow warning |
| `Info` | (standalone) | Callout preset — blue info |
| `Tip` | (standalone) | Callout preset — green tip |
| `Check` | (standalone) | Callout preset — green check |
| `Danger` | (standalone) | Callout preset — red danger |

**React hooks (no import needed):**

`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`

### How to find the right import path

```bash
# Find a component by export name
grep -r "export.*MyComponent" snippets/components/

# Find available exports from a specific file
grep "^export" snippets/components/elements/links/Links.jsx

# Verify a path exists before using it
ls snippets/components/wrappers/cards/CustomCards.jsx

# Find all files that export a given name
grep -rl "export.*GotoLink" snippets/
```

**Pattern:** All custom components live in `/snippets/components/{category}/{sub-niche}/{File}.jsx`. Categories: `elements`, `wrappers`, `displays`, `scaffolding`, `integrators`, `config`. See `snippets/components/README.md` for the full catalog.

### Import path rules

1. **Root-absolute preferred:** `/snippets/components/...` — greppable, validatable, unambiguous
2. **Relative works:** `./data/badges.jsx` — resolves correctly but harder to find with scripts
3. **File extension required:** Always `.jsx` or `.js`
4. **Files must be in `/snippets/`:** Mintlify only resolves imports from the snippets directory

### Cross-file import rules

| Import type | Works? | Evidence |
|---|---|---|
| MDX → JSX component | Yes | Standard pattern, hundreds of examples |
| MDX → JS data file | Yes | Standard pattern, used throughout |
| MDX → MDX (snippet) | Yes | Used for reusable content blocks |
| JSX → JSX component | Yes (unsupported) | 4 working examples in repo; Mintlify docs say "not supported" |
| JSX → JS data | No | Data not available in JSX scope |
| JSX → JSX data/variables | No | Variables not carried between scopes |

**Risk note on JSX→JSX component imports:** These work in practice but Mintlify officially does not support them. They could break in a future Mintlify update. The safe alternative is to import all components in the parent MDX.

---

## MDX-in-MDX imports

### Critical constraint: navigation registration

**An MDX file that is imported by another page MUST NOT be registered in docs.json navigation.** If both the importing page and the imported file are in docs.json, the imported file 404s.

File location does not matter — the imported MDX can live in `v2/`, `snippets/`, or anywhere else. The constraint is solely about docs.json navigation registration.

**Verified 2026-03-30:** Created test file `v2/about/resources/iamsorandom.mdx` imported by `v2/about/livepeer-protocol/iimportsorandom.mdx`. Both served correctly when only the importer was in docs.json. When the imported file was also added to docs.json navigation, it immediately 404'd.

**Repo convention:** Imported MDX lives in `snippets/composables/` because files there are never in docs.json. This is a convention for safety, not a platform requirement.

### Import resolution

Mintlify resolves MDX imports from any path in the repo. Both root-absolute (`/v2/about/...`, `/snippets/...`) and relative (`./views/docker/...`) paths work.

**Evidence:** `docs-guide/contributing/contributing.mdx` imports from `../../contribute/CONTRIBUTING.mdx`. Gateway tabs use `./views/docker/dockerOffChainTab.mdx`. Both work.

### Self-contained child (has own imports)

A child MDX with its own `import` and `export const` statements is fully self-contained. Its imports, exports, and `{variable}` interpolation work within its own scope. The parent is just a thin wrapper with frontmatter.

```mdx
{/* Parent: v2/about/resources/livepeer-contract-addresses.mdx — in docs.json */}
import ContractAddressesCanonical from "/snippets/composables/pages/reference/livepeer-contract-addresses.mdx"
<ContractAddressesCanonical />

{/* Child: snippets/composables/.../livepeer-contract-addresses.mdx — NOT in docs.json */}
import { contractAddresses } from '/snippets/data/contract-addresses/contractAddressesData.jsx'
import { SearchTable } from '/snippets/components/wrappers/tables/SearchTable.jsx'
export const lastVerifiedDate = contractAddresses.meta.lastVerified || "Pending"
{/* All imports, exports, and {variable} interpolation work — child's own scope */}
```

**Repo evidence:**
- `snippets/composables/pages/reference/livepeer-contract-addresses.mdx` — self-contained canonical page, imported by two parent pages. Verified working 2026-03-30 (10 tables, 44 historical addresses, search input, no errors).
- `contribute/CONTRIBUTING.mdx` — has own `import { DynamicTable }`, imported by `docs-guide/contributing/contributing.mdx`.
- `v2/gateways/quickstart/views/linux/linuxOffChainTab.mdx` — has own imports, uses `{latestVersion}` in direct interpolation.

### Dependent child (relies on parent scope)

When a child MDX has NO imports and relies on the parent's scope:

```mdx
{/* Parent: gateway-setup.mdx — imports everything */}
import { DOCKER_CODE } from '/snippets/data/gateways/code.jsx'
import { CustomCodeBlock } from '/snippets/components/displays/code/Code.jsx'
import DockerTab from './views/docker/dockerOffChainTab.mdx'
<DockerTab />

{/* Child: dockerOffChainTab.mdx — NO imports, uses parent scope */}
<CustomCodeBlock {...DOCKER_CODE.install} />
```

**Scope rules for dependent children:**
- Variables used as **component props** → inherited from parent scope
- Variables used in **direct JSX text interpolation** `{variable}` → must be re-imported in child
- **Never duplicate imports** — if parent already imports X, child must NOT also import X (causes MDX errors)

**Source:** `mintlify-behaviour.mdx` lines 88-192. Navigation constraint verified via controlled test 2026-03-30. Scope rules: hypothesis from `mintlify-behaviour.mdx`, consistent with observed behaviour.

---

## JSX file constraints

### Top-level constants

Constants defined at file scope (`const styles = {...}`) throw `ReferenceError` at runtime. Always define data inside the function body.

This affects: style objects, config maps, lookup tables, static arrays. It does NOT affect: top-level component function definitions (arrow functions that are themselves exported).

**Pattern used in repo:**

```jsx
// ✅ Correct — data defined INSIDE the component
export const BorderedBox = ({ variant = "default", ...rest }) => {
  const variants = {
    default: { border: "1px solid var(--border)", backgroundColor: "var(--card-background)" },
    accent: { border: "1px solid var(--accent)", backgroundColor: "var(--card-background)" },
  }
  return <div style={{ ...variants[variant] }} {...rest} />
}
```

### Export patterns

- Use **arrow function syntax**: `export const Foo = () => { ... }` or `const Foo = () => { ... }` with batch `export { Foo }` at bottom
- The `function` keyword is NOT supported in Mintlify snippets
- Named exports required — `export const` or `export { ... }`
- Batch export at bottom (`export { A, B, C }`) works correctly

### Children prop handling

When creating wrapper components, handle children as potentially single or array:

```jsx
export const Wrapper = ({ children }) => {
  const childArray = Array.isArray(children) ? children : [children]
  return childArray.map((child, i) => <div key={i}>{child}</div>)
}
```

---

## Styling

### CSS variables — categorised list

**Mintlify theme variables (always available):**

| Variable | Purpose | Used in |
|---|---|---|
| `var(--background)` | Page background | General |
| `var(--text)` | Default text colour | Text, Links |
| `var(--text-primary)` | Primary text colour | Portals |
| `var(--text-secondary)` | Secondary/muted text | SolutionItem |
| `var(--primary)` | Primary brand colour | General |
| `var(--accent)` | Accent colour (Livepeer green) | Cards, Grids, Steps, Icons |
| `var(--accent-dark)` | Dark variant of accent | Steps (with fallback) |
| `var(--hero-text)` | Hero/heading text colour | Portals, FrameMode, Callouts |
| `var(--border)` | Border colour | Containers, Cards |
| `var(--card-background)` | Card/container background | Containers, Grids |
| `var(--page-header-description-color)` | Page header description | Portals |
| `var(--green-9)` | Semantic green | Containers (positive) |
| `var(--p-icon-color)` | Portal icon colour | FrameMode |

**Livepeer custom tokens (`--lp-*`):**

| Variable | Purpose | Used in |
|---|---|---|
| `var(--lp-color-text-muted)` | Muted text | ScrollBox |
| `var(--lp-color-callout-coming-soon)` | Coming soon callout colour | PreviewCallouts |
| `var(--lp-color-callout-review)` | Review callout colour | PreviewCallouts |

**Rule:** Use CSS variables for all colours. No hardcoded hex. No `ThemeData`. The `--lp-*` tokens are defined in `snippets/components/config/MermaidColours.jsx` and the Mintlify theme config.

### No ThemeData

`ThemeData` is deprecated and banned. Pre-commit hook blocks it. Use CSS custom properties.

### Icon rendering

- Lucide icon names ("arrow-right") → rendered as inline SVG → can be styled with `color` prop
- Custom icon paths ("/snippets/assets/icon.svg") → rendered as `<img>` → CSS `color` has NO effect
- For theme-aware custom icons: use SVG files with internal `<style>` containing `@media (prefers-color-scheme: dark)`

---

## Runtime model

### Client-side only

Mintlify renders custom components **client-side only**. No SSR. No Node.js APIs (`fs`, `path`, `process`). No `getStaticProps` or server-side patterns.

### Data fetching

`useEffect` + `fetch` works for client-side API calls:

```jsx
export const LivePrice = () => {
  const [price, setPrice] = useState(null)
  useEffect(() => {
    fetch('https://api.coingecko.com/...')
      .then(res => res.json())
      .then(data => setPrice(data.livepeer.usd))
  }, [])
  return <span>${price ?? '...'}</span>
}
```

**Caveats:**
- Users see loading states briefly
- Always handle fetch failures gracefully
- Content is NOT indexed (see AEO section below)

### No external npm packages

Only React hooks and Mintlify platform globals are available. No lodash, axios, or other npm packages. Use native browser APIs (`fetch`, `URL`, etc.).

---

## AEO / AI discoverability

### The hard rule

**Client-rendered content is invisible to AI engines and search crawlers.**

Any content produced by `useEffect`, `useState`, `fetch`, or dynamic JSX is rendered only in the browser. It does NOT appear in:
- Google's crawled HTML
- LLM training data / AI search results
- `llms.txt` or `sitemap-ai.xml` content
- Mintlify's static build output

### Which patterns produce AI-invisible content

| Pattern | AI-visible? | Example |
|---|---|---|
| `useEffect` + `fetch` | No | Live price data, API responses |
| `useState` with dynamic updates | No | Interactive widgets, toggles |
| Conditional rendering based on client state | No | Theme-dependent content |
| Any data not present in the initial HTML | No | |

### Which patterns produce AI-visible content

| Pattern | AI-visible? | Example |
|---|---|---|
| Static MDX text | Yes | Paragraphs, headings, lists |
| Pre-compiled data imported as JSX constants | Yes | Static lookup tables |
| Mintlify built-in components with static content | Yes | Cards, Steps, Accordions |
| Component props with static string values | Yes | `<Card title="Setup">` |

### Decision framework

Use a data component (client-side) ONLY when:
- The data changes frequently (prices, versions, live stats)
- Staleness is worse than invisibility
- The static equivalent is maintained separately for AI/SEO

Use static MDX when:
- The content must be discoverable by AI engines
- The content is the canonical source of truth (contract addresses, API endpoints)
- AEO is a priority for the page
- The data changes rarely (addresses, protocol parameters)

### Impact on this repo

Contract addresses, protocol parameters, and configuration data MUST have a static representation in MDX for AEO. Client-side data components can supplement but never replace the static canonical content.

---

## Quick decision tree: "Should I import X?"

```
Is it React or a React hook?
  → NO import. Globally available.

Is it a Mintlify component (Card, Tabs, Note, Steps, Icon, Badge, etc.)?
  → NO import. Platform global. See complete list above.

Is it a custom component from snippets/components/?
  → YES import. Root-absolute path. Include .jsx extension.
  → Pattern: import { Foo } from '/snippets/components/{category}/{sub-niche}/File.jsx'

Is it a data file from snippets/data/?
  → YES import in the MDX file. Pass to components via props or scope.
  → Do NOT import in JSX component files (data won't resolve in JSX scope).

Is it an MDX snippet?
  → YES import in the parent MDX.
  → Child MDX inherits parent scope for props. Re-import for interpolation.
  → Never duplicate an import that the parent already has.

Is it an npm package?
  → NO. Not available. Use native browser APIs.

Is it a Node.js API (fs, path, process)?
  → NO. Not available. Client-only.
```

---

## Compilation model

Mintlify compiles at the **MDX file level**. Each MDX file is a compilation unit.

This means:
- MDX files can import JSX components, data files, and other MDX files
- JSX component files can import other JSX components (unsupported but works)
- JSX component files CANNOT import data/variables from other files
- Each `export` in a JSX file is evaluated in its own scope
- File-level declarations are NOT shared between exports
- Child MDX files inherit parent scope with specific rules (see MDX-in-MDX section)

---

## Headless verification status

Tested 2026-03-29 with Mintlify CLI v4.2.459, Puppeteer headless browser, dev server on localhost:3334.

| Claim | Verified by | Headless result | Status |
|---|---|---|---|
| React hooks globally available | Repo evidence (47 usages, 0 imports) | — | **Confirmed** |
| Mintlify globals need no import | Repo evidence + Mintlify docs | Production page PASS | **Confirmed** |
| Relative paths resolve | Repo evidence (20+ files) + Mintlify docs | Production page PASS | **Confirmed** |
| File extensions required | Repo evidence + Mintlify docs | — | **Confirmed** |
| Cross-JSX component imports | 4 working production imports | New file FAIL, production PASS | **Fragile — works for existing files, fails for new ones. Officially unsupported.** |
| Cross-JSX data imports fail | `mintlify-behaviour.mdx` | FAIL | **Confirmed** |
| Top-level constants crash | `mintlify-behaviour.mdx` (2026-03-28) | FAIL (SIMPLE component from same directory PASS — proves it's not a compilation issue) | **Confirmed** |
| Arrow functions only (function keyword fails) | Mintlify docs | FAIL | **Confirmed** |
| Client-side only | Mintlify docs: "render on the client-side" | — | **Confirmed** |
| ThemeData deprecated | Governance docs, pre-commit hook | — | **Confirmed** |
| MDX-in-MDX scope rules | `mintlify-behaviour.mdx` hypothesis | FAIL | **Confirmed — child MDX does not inherit parent scope reliably** |
| React error #31: Objects as children | Production (contract-addresses composable, 2026-03-30) | FAIL | **Confirmed — `{object.key}` where value is an object (not string/number) crashes with "Objects are not valid as a React child (found: object with keys {value})". Inline expressions in composable MDX that resolve to objects instead of primitives trigger this. Fix: ensure expressions resolve to strings/numbers, not objects.** |

**Test methodology:** Created isolated test pages in `v2/test-*.mdx` with components in `snippets/test-constraints/` and `snippets/components/config/ConstraintTests.jsx`. Control test (SIMPLE component with no imports, no top-level const, arrow function) PASSED from the same directory, confirming failures are constraint violations not compilation issues. Production pages tested as cross-reference.

**Test files:** Clean up `v2/test-*.mdx`, `snippets/test-constraints/`, `snippets/components/config/ConstraintTests.jsx` after review.

---

## Canonical sources

| Source | Path | Lines | What it covers |
|---|---|---|---|
| Mintlify behaviour guide | `snippets/snippetsWiki/mintlify-behaviour.mdx` | 458 | Discovered constraints, patterns, scope rules |
| Page authoring skill | `ai-tools/ai-skills/page-authoring/SKILL.md` | Hard rules at lines 31-44 | Import rules, styling constraints, frontmatter |
| Components README | `snippets/components/README.md` | Line 133-134 | Global availability note, component catalog |
| Component governance | `docs-guide/frameworks/component-governance.mdx` | Full doc | JSDoc standard, CSS variable rules, ThemeData ban |
| Mintlify official docs | `https://mintlify.com/docs/customize/react-components.md` | — | Custom component rules, nested import prohibition |
| Mintlify official docs | `https://mintlify.com/docs/create/reusable-snippets.md` | — | Import paths, snippet system, arrow function requirement |
| Mintlify official docs | `https://mintlify.com/docs/components/index.md` | — | Complete built-in component list |
