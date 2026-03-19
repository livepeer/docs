# **Mintlify Platform Reference**

What Mintlify IS, how it works, and what it constrains. Platform facts only. This document is the canonical source for "can Mintlify do X?" and "how does Mintlify handle Y?"

Every architectural decision in this project must work within these constraints. If a design conflicts with this document, the design is wrong.

**Canonical upstream:**[ mintlify.com/docs](https://mintlify.com/docs) — always check upstream for changes. This document captures tested behaviour, discovered edge cases, and constraints not obvious from the official docs.

## **Build Model**

Mintlify is a **hosted MDX documentation platform**. Content lives in a Git repo. Mintlify's build system compiles MDX/MD files into a static site and deploys on push.

- **MDX compilation is per-file.** Each page MDX is compiled independently, not as a unified application.
- **Custom components render client-side.** No server-side rendering for custom JSX. Search engines may not fully index dynamic content.
- **No Node.js APIs** in components. No `fs`, `path`, `process`, or server-side operations.
- **No external npm packages.** You cannot install dependencies into the Mintlify build. Only React (globally available) and Mintlify's bundled utilities are accessible.
- **Build triggers:** Push to the connected Git branch. Mintlify pulls the repo, builds, and deploys.

## **The Snippets System**

Mintlify defines "snippets" as reusable content:

- **Any **`.mdx`**, **`.md`**, or **`.jsx`** file imported into another file is a snippet.** Location doesn't matter.
- **Any file inside **`/snippets/`** is ALWAYS a snippet** — it will never render as a standalone page, even if it has frontmatter and is not imported anywhere.
- **Files outside **`/snippets/` are pages unless imported by another file. Mintlify supports **implicit snippets** — any MDX file can serve as a reusable snippet without being in `/snippets/`.
- `.mintignore` excludes files from the build entirely (`.gitignore` syntax).

## **Import System**

This is the single most important thing to understand about Mintlify.

### **What Works**

| **Pattern** | **Example** |
| --- | --- |
| MDX imports MDX (absolute) | import Setup from '/snippets/shared/setup.mdx' |
| MDX imports MDX (relative) | import View from './views/docker/tab.mdx' |
| MDX imports JSX data (absolute) | import { FLAGS } from '/snippets/data/flags.jsx' |
| MDX imports JSX data (relative) | import { CODE } from './data/code.jsx' |
| MDX imports JSX component (absolute) | import { MyCard } from '/snippets/components/cards.jsx' |
| MDX exports variables | export const version = "v1.0" importable elsewhere |
| MDX exports arrow-function components | export const Counter = () => <div>...</div> |

Relative imports are officially supported (added early 2025). Both absolute (from repo root) and relative patterns work.

### **What Does NOT Work**

| **Pattern** | **Why** | **Workaround** |
| --- | --- | --- |
| JSX imports JSX | Mintlify doesn't resolve imports inside component files during compilation | Import everything in the parent MDX file; components access data from MDX scope |
| JSX references own exports | Can't reference another export from the same .jsx file at build time | Split into separate files, or connect via MDX scope |
| import React from 'react' | React is globally available; importing it causes errors | Don't import; use hooks directly |
| function keyword exports in snippets | Mintlify requires arrow function syntax for snippet exports | Use export const X = () => {} not export function X() {} |
| {variable} in fenced code blocks | Variables render literally inside ``` blocks | Use a custom code component with placeholder substitution props |
| Global components stored in JS variables | const C = Card; <C /> → ReferenceError | Use conditional rendering with direct JSX |
| JSX comments preventing MDX parsing | {/* <Component /> */} — MDX still parses the component | Remove code entirely; don't "comment it out" |
| External CSS imports in components | No CSS file imports in .jsx | Use inline styles or <style> tags within the component |

### **The Golden Rule**

**The MDX page file is the orchestration point.** It imports everything — components, data, content blocks — and assembles them. Components and content blocks don't import each other. They're composed at the page level.

## **MDX-in-MDX Scope Inheritance**

When an MDX file imports another MDX file, the child inherits the parent's scope — with limitations.

### **What Inherits**

**Variables used as component PROPS** inherit from parent scope:

### **What Doesn't Reliably Inherit**

**Direct **`{variable}`** text interpolation** may not inherit:

### **Duplicate Import Error**

If parent already imports a binding and child tries to import the same binding from the same source, Mintlify errors. Children should only import dependencies NOT already in parent scope.

### **The Rule**

- **Props from parent scope:** reliable ✅
- **Direct **`{variable}`** interpolation from parent scope:** unreliable ⚠️ — re-import in child if needed
- **Child-specific imports (not in parent):** always safe ✅

## **React in Mintlify**

### **Hooks Are Global**

All React hooks are available without import: `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, and all standard hooks.

### **Arrow Functions Only for Snippet Exports**

### **MDX Does Not Compile Inside Arrow Function Bodies**

MDX markdown syntax won't render inside JSX arrow functions. Use HTML syntax or default exports:

### **Client-Side Data Fetching**

Components can `fetch()` at runtime. This is client-side only — no SSR, SEO won't index dynamic content, users see loading states. Always handle errors.

## **Global Built-In Components**

Available in every MDX file without import. **Do NOT import them.**

**Layout:** `Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Frame`, `View`

**Callouts:** `Note`, `Warning`, `Info`, `Tip`, `Danger`, `Check`

**Content:** `CodeBlock`, `CodeGroup`, `Expandable`, `Badge`, `Tooltip`, `Icon`

**API:** `ParamField`, `ResponseField`, `Snippet`

**Changelog:** `Update`

**Critical constraint:** Global components CANNOT be stored in JavaScript variables or passed dynamically:

**Canonical component reference:**[ mintlify.com/docs/components](https://mintlify.com/docs/components)

## **Import Paths**

### **Absolute (from repo root)**

### **Relative (from current file)**

Both work. **File extensions are required** — `.jsx`, `.mdx`, `.md`. Extensionless imports may not resolve.

## **Page Rendering Modes**

Controlled by `mode` in frontmatter.

### **Default (no **`mode`**)**

Full Mintlify styling: headings, prose, spacing, lists, table of contents sidebar, breadcrumbs, prev/next navigation. Standard page width with sidebar.

**Use for:** All standard documentation pages.

### `mode: wide`

Hides the table of contents sidebar. Content stretches wider. Default Mintlify styling still applies (headings, prose, etc.). Breadcrumbs and prev/next still present.

**Use for:** Pages with wide tables, media galleries, or visual content where the TOC wastes space.

### `mode: frame`

Strips ALL default Mintlify styling. Blank canvas. No heading styles, no prose formatting, no TOC sidebar. Full-width. Mintlify global components still work but lose their default styles. All design must be explicit.

**Use for:** Portal/landing pages with custom hero sections and branding. Should not be used for standard content pages.

## **Themes**

Set in `docs.json`:

Available themes: `mint` (classic default), `maple`, `palm`, `willow`, `linden`, `almond`, `sage`, `oak`, `chestnut`, `kernel`.

Each theme provides layout structure, navigation patterns, typography, spacing, and component default styles. Changing theme is a significant visual overhaul — it changes layout behaviour, not just colours.

### **Theme Limitations**

- **One theme per site.** Cannot mix themes across sections.
- **Theme bugs exist.** The only fix is CSS overrides in `style.css`.
- **Theme updates are Mintlify-controlled.** No version pinning. A Mintlify theme update may change how your docs render.
- **Limited override surface.** Some theme behaviours are structural (JS-rendered), not purely CSS, and can't be overridden.

## **Styling Constraints**

### **Single Global CSS File**

**Mintlify allows exactly one CSS file: **`style.css`** at the repository root.** No per-component CSS files, no CSS modules, no CSS-in-JS libraries, no `@import` in components.

### **Three Style Delivery Mechanisms**

| **Mechanism** | **Where** | **For** |
| --- | --- | --- |
| CSS Custom Properties (via style.css) | Root style.css | Theme-aware values (colours, spacing) — :root {} and .dark {} |
| Inline style objects | In JSX components | Simple layout (flex, padding, margin) |
| <style> tags in components | In JSX components | Pseudo-classes, animations, media queries |

Mintlify automatically adds `.dark` class to `<html>` in dark mode. CSS variables switch automatically.

### `<style>`** Tag Scoping Risk**

`<style>` tags in components inject **global CSS** at render time. If two components use the same class name, they conflict. Mitigate with unique prefixes or dynamically generated IDs.

### **No Inline Styles in MDX Content Files**

Mintlify's design intent is that MDX content files use component primitives for layout, not `style={{}}` attributes. Inline styles in MDX work but undermine theme consistency and maintainability.

## `docs.json`** Configuration**

### **What It Controls**

Site-wide settings: theme, colours, fonts, navigation structure, API playground config, redirects, footer, social links, integrations (analytics, etc.), appearance (dark/light default), banner, search prompt, icons, metadata.

### **Navigation Structure**

Navigation is **manually maintained** in `docs.json`. Pages must be listed to be discoverable. No auto-discovery from folder structure. Structure is deeply nested:

Up to 6 levels of nesting. Each version × each language × each tab requires its own navigation tree.

### **Scale Limitations**

| **Constraint** | **Impact** |
| --- | --- |
| No auto-discovery | Every page must be manually listed. Adding a page = editing docs.json. |
| Per-language navigation | Each locale needs its own full navigation tree. 4 languages = 4× the nav entries. |
| No URL override | Page URL must match file path. Can't have different URL structure from folder structure. |
| Static JSON | No variables, no includes, no conditionals, no environment flags, no comments. |
| Versions multiply everything | Each version contains a complete navigation tree. |
| Redirect limitations | Source → destination pairs only. No wildcards, no regex, no expiry, no chaining. |
| JSON fragility | One misplaced comma breaks the entire site. No comments for annotation. |

For large documentation projects (hundreds of pages, multiple languages, multiple versions), `docs.json` becomes a major maintenance burden. Mintlify is architecturally optimised for smaller documentation sites.

### **What Would Help**

Features not currently available that would reduce scale friction:

1. Navigation auto-discovery from folder structure
1. JSON5 or JSONC support (comments)
1. Config file splitting/includes
1. Wildcard redirects
1. URL path overrides independent of file location

## **Asset Handling & Build Limits**

### **Build Size Constraints**

Mintlify's build system has practical limits on total deployable size. Very large repos slow down the Git clone step. Oversized assets increase page load times.

### **What Mintlify Won't Render Well**

- **Very large images/GIFs (tens of MB)** — will fail to load in browsers, cause memory issues, or time out
- **Binary files that bloat the repo** — even if `.mintignore`'d, they exist in the Git checkout and slow builds

### **Recommended Asset Limits**

| **Asset Type** | **Guideline** |
| --- | --- |
| PNG/JPG images | Compress to under 500 KB |
| SVG | Optimise to under 100 KB |
| GIFs | Under 5 MB — prefer MP4/WebM video for anything larger |
| Videos | Host externally (YouTube, CDN), embed with component — never store in repo |

### **External Asset Pattern**

For assets too large for the repo, host externally and reference by URL:

## **AI Assistant**

### **Architecture**

Embedded conversational interface on the docs site. Uses **agentic RAG with tool calling powered by Claude Sonnet 4** (fixed model — not configurable by the site owner).

The assistant:

- Searches and retrieves content from your documentation via Mintlify-managed index
- Cites sources with navigable page links
- Generates copyable code examples
- Asks clarifying questions
- Maintains conversational context within a session

### **Configuration**

Minimal. Enabled by default on Pro and Custom plans. Configurable via Mintlify dashboard:

- Enable/disable
- Spending limits (messages count toward plan allowance; overage charges apply)
- Conversation analytics (topic clustering, feedback patterns)

Only repo-level config is the search prompt:

### **Closed System — No Outbound Integration**

The assistant is a **closed loop.** There is no programmatic interface between the assistant and external systems.

| **Not Available** | **Detail** |
| --- | --- |
| Webhooks for assistant events | No callback when a question is asked, answered, or thumbs-down'd |
| Conversation export API | Analytics are dashboard-only; no programmatic access |
| Custom actions in responses | Cannot inject buttons, tools, or UI into assistant output |
| Custom tools in the agentic loop | The assistant's tool set (doc search) is fixed |
| Model selection | Fixed at Claude Sonnet 4; cannot change model, temperature, or system prompt |
| Custom context injection | Assistant only searches your docs; cannot add external knowledge |

**Implication:** You cannot build automated workflows triggered by assistant interactions (e.g., auto-submitting GitHub issues when the assistant can't answer a question). Conversation insights are only available through manual dashboard review.

### **MCP Server (Separate)**

Mintlify generates an **MCP (Model Context Protocol) server** from your documentation. This is separate from the assistant:

- External AI tools (Claude Desktop, Cursor, ChatGPT) connect and query your docs
- Read-only — no write path back to your repo or systems
- Useful for developer experience but doesn't solve feedback/routing problems

### **LLM Discoverability**

- `llms.txt` / `llms-full.txt` — structured page listings for AI indexing (generated)
- Every page available as Markdown by appending `.md` to its URL
- Passive discovery — no feedback loop

## **Data Handling Constraints**

### **The Core Data Constraint**

**JSX component files cannot import other JSX files.** Data must flow through the MDX page:

The MDX page is always the orchestration point. Components receive data exclusively through props from MDX scope, MDX scope inheritance (for child MDX), or runtime `fetch()`.

### **Variable Interpolation: **`.mdx`** vs **`.jsx`** Exports**

Variables exported from `.mdx` files can be used in direct `{variable}` interpolation in prose. Variables from `.jsx` files work reliably only as component props.

| **Need** | **Export From** |
| --- | --- |
| Variable used in prose text: Version: {version} | .mdx |
| Data passed as props: <Component data={obj} /> | Either .mdx or .jsx |
| Complex data objects (arrays, nested) | .jsx (cleaner syntax) |

### **Code Block Variable Limitation**

Standard fenced code blocks (`'''`) cannot interpolate variables — `{variable}` renders literally. Workaround: use a custom code component that accepts a placeholder substitution prop.

## **File Type Behaviour**

| **Extension** | **Mintlify Behaviour** |
| --- | --- |
| .mdx | MDX content — rendered as page unless in /snippets/ or .mintignore'd |
| .md | Plain Markdown — rendered as page (officially supported alongside MDX) |
| .jsx | React component or data export — always a snippet, never a page |
| .json | Data file — not rendered |
| .css | Only style.css at root is loaded — all other CSS files ignored |

## **Known Platform Quirks**

| **Quirk** | **Detail** |
| --- | --- |
| Icon renders as <img> | Mintlify's <Icon> renders custom icon paths as <img> elements, not inline SVG. CSS color has no effect. SVG must contain its own fill colours. |
| LaTeX delimiters | Use $...$ (inline) and $$...$$ (block). Backslash delimiters \\( and \\[ break MDX parsing. |
| No api as top-level folder | Mintlify uses Next.js internally, which reserves /api for server routes. Nest it inside another folder. |
| Frame mode + global components | Global components work in frame mode but lose all default styling. |
| Build-time vs runtime | MDX compilation (imports, frontmatter, markdown) is build-time. React hooks and fetch() are runtime (client-side). |

## **Summary: The Five Things That Matter Most**

1. **The MDX file is the orchestration point.** Components and data are composed there, not in each other.
1. **JSX can't import JSX.** Everything flows through MDX scope.
1. **Arrow functions only** for component exports in snippets.
1. **No React imports.** Hooks are global.
1. `/snippets/`** = never a page.** Everything in that folder is a snippet, always.

## **Build & Deploy Pipeline (How This Repo Uses The Platform)**

### **The Build Chain**

### **Branch Strategy**

| **Branch** | **Purpose** | **Deploys To** |
| --- | --- | --- |
| docs-v2 | Active development | Mintlify preview (PRs) |
| main | Production | docs.livepeer.org |
| docs-v2-assets | Large asset storage | Not deployed — referenced by URL |

### **What Fails at Build vs Runtime**

| **Failure Type** | **Build Time (blocks deploy)** | **Runtime (breaks for readers)** |
| --- | --- | --- |
| MDX syntax error | ✅ |  |
| Missing import target | ✅ |  |
| Invalid docs.json | ✅ |  |
| Invalid frontmatter | ✅ |  |
| Component logic error |  | ✅ (renders client-side) |
| Broken external link |  | ✅ |
| Missing image |  | ✅ (broken <img>) |
| CSS issue |  | ✅ (wrong styling) |

### **Data Pipeline Builds**

11 GitHub Actions workflows write data back into the repo on schedules. These create "robot commits" that push directly to the development branch, bypassing PR CI checks — pipeline data is trusted.

| **Category** | **Workflows** | **Trigger** |
| --- | --- | --- |
| External data fetch | blog, forum, youtube, showcase, release | Scheduled cron |
| Generated files | docs-index, ai-sitemap | On push |
| Translation | translate-docs | On push |
| Asset management | sync-large-assets | On push |
| Validation | openapi-reference | On push |