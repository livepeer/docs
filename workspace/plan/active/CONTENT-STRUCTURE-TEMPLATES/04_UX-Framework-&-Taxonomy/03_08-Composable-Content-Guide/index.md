# **Composable Content Structure**

How documentation content is composed, shared, and reused. Designed from first principles within Mintlify's constraints.

**Platform constraint source:** Mintlify Platform Reference (10)

## **First Principles**

### **Principle 1: Content lives with its page unless it has a reason to leave.**

If something is used by exactly one page and doesn't change independently of that page, it belongs WITH that page.

### **Principle 2: There are exactly three reasons for content to live outside its page.**

| **Reason** | **What it means** |
| --- | --- |
| Shared | Two or more pages in different sections need the same content |
| External | Content is produced by a pipeline, not authored by a contributor |
| Derived | Content is generated deterministically from repo state by a script |

### **Principle 3: One shared library, not many.**

All shared content goes to ONE location (`snippets/`) with a clear internal structure, subdivided by what the content IS.

### **Principle 4: "Where does this go?" requires exactly ONE decision.**

## **The Architecture**

Two places content can live.

### **Place 1: With the page (local content)**

Content that serves exactly one page. Co-located in the page's directory.

**Mintlify constraint — implicit snippets:** Files in `views/` and `groups/` are `.mdx` files that sit OUTSIDE `/snippets/`. Mintlify would normally treat them as standalone pages. They DON'T render as pages because they are **imported** by the parent page — Mintlify treats any imported file as an implicit snippet.

**Critical rule:** Every `.mdx` file in `views/` and `groups/` MUST be imported by the parent page's `.mdx` file. If the import is removed or broken, the file becomes an orphan page that Mintlify will attempt to render. There is currently no `.mintignore` safety net for these paths.

**Safety recommendation:** Add a glob pattern to `.mintignore` as a fallback:

This prevents accidental rendering if imports break, without affecting the import mechanism (`.mintignore` excludes files from standalone rendering but doesn't prevent them from being imported).

**JSX files (**`data/`**, **`components/`**)** are safe regardless — Mintlify never renders `.jsx` files as pages.

### **Place 2: The shared library (**`snippets/`**)**

Content used across sections or produced by pipelines.

**Mintlify constraint — **`/snippets/`** = always snippets:** Every file inside `/snippets/` is guaranteed never to render as a standalone page, regardless of frontmatter or import status. This is why shared content lives here — it's safe by default.

**What does NOT live in **`snippets/`**:** Tooling, scripts, audit reports, pipeline configuration (n8n JSONs), PDFs. These belong in `tools/` or `tasks/`, which are excluded by `.mintignore`.

## **The Three Layers**

**Mintlify constraint — dependency direction:**

Components CANNOT import data files directly. Data CANNOT import components. The MDX page is always the orchestration point. This is a Mintlify platform limitation (JSX can't import JSX), not a design choice — but it produces a clean architecture.

## **Data: **`.mdx`** vs **`.jsx`** Exports**

**Mintlify constraint:** Variables from `.mdx` files work in direct `{variable}` text interpolation. Variables from `.jsx` files work reliably only as component props.

| **Need** | **Export From** | **Example** |
| --- | --- | --- |
| Variable in prose: Version: {version} | .mdx | snippets/data/globals/globals.mdx |
| Data as component props | .mdx or .jsx | Either works via MDX scope |
| Complex objects (arrays, nested) | .jsx | Cleaner syntax, better editor support |

The repo already uses this pattern in `snippets/data/variables/*.mdx` — per-section MDX files exporting constants for text interpolation. This is the canonical approach for any variable that needs to appear in prose.

**For new data files:** Use `.jsx` unless the data needs to appear in direct `{variable}` interpolation in prose text.

## **The Decision Flowchart**

## **Content Lifecycle**

### **Local to Shared Promotion**

Content starts local. It moves to shared only when a concrete second consumer appears.

**Process:**

1. Move the file from `v2/{section}/{page}/` to `snippets/content/{section}/`
1. Update the import path in the original page
1. Add the import in the new consuming page
1. Both pages reference the same canonical source

**Mintlify constraint — import path updates are manual.** There is no auto-resolution or alias system. Every file that imports the moved content must have its import path updated. The `v2-link-audit.js` script can detect broken imports after a move.

**Do not pre-emptively promote.** "This might be useful elsewhere" is not a reason. An actual second consumer is.

### **Pipeline Data Flow**

**Mintlify constraint:** Components never import their own data. The MDX page imports the data file AND the component, then passes data to the component via props or MDX scope.

### **Generated Content**

Scripts in `tools/scripts/generate-*.js` produce content that lives where readers expect it (e.g., `v2/**/index.mdx`). Generated files include a provenance comment. Never hand-edit — edit the script.

## **Scope Inheritance Rules for Composed Pages**

When a page imports child MDX content (views, groups), the Mintlify scope inheritance rules apply:

| **Pattern** | **Works?** | **Notes** |
| --- | --- | --- |
| Parent imports data, child uses as props | ✅ | <CodeBlock {...PARENT_DATA} /> |
| Parent imports component, child uses directly | ✅ | <GatewayWarning /> without child import |
| Parent imports variable, child interpolates {var} | ⚠️ Unreliable | Child should re-import for interpolation |
| Child imports something parent doesn't have | ✅ | Child-specific dependencies |
| Child re-imports same binding parent already has | ❌ Error | Don't duplicate |

**Best practice for composed pages:** Import ALL shared dependencies (components, data) in the parent page. Import child-specific dependencies in the child. If a child needs a variable for `{interpolation}`, import it in the child even if parent has it — but under a different binding name if the same source.

## **Naming Conventions**

Names describe WHAT the content IS, not where it's used or how it was made.

| **Location** | **Pattern** | **Example** |
| --- | --- | --- |
| snippets/content/shared/ | {what-it-is}.mdx | eth-account-setup.mdx |
| snippets/content/{section}/ | {what-it-is}.mdx | protocol-overview.mdx |
| snippets/data/pipelines/ | {source}.jsx | blog.jsx, forum.jsx |
| snippets/data/variables/ | {section}.mdx | home.mdx, gateways.mdx |
| snippets/data/{section}/ | {what-it-contains}.jsx | flags.jsx |
| Page-local views/ | {dim1Value}{Dim2Value}Tab.mdx | dockerOffChainTab.mdx |
| Page-local groups/ | {value}Support.mdx | dockerSupport.mdx |
| Page-local data/ | {what-it-contains}.jsx | flags.jsx |
| Page-local components/ | {what-it-does}.jsx | callouts.jsx |

## **Ownership**

| **Location** | **Owner** |
| --- | --- |
| snippets/components/ | Component governance owner |
| snippets/content/shared/ | Docs maintainer |
| snippets/content/{section}/ | Section owner (SOT-03) |
| snippets/data/pipelines/ | Pipeline maintainer |
| snippets/data/globals/ | Release automation / docs maintainer |
| snippets/data/variables/ | Section owners |
| snippets/data/{section}/ | Section owner |
| v2/{section}/{page}/* (all local) | Page owner |

## **Summary: The Mental Model**

**Two questions:**

1. **Does any other page need this?**
  - NO → it lives with your page (`v2/{section}/{page}/`)
  - YES → it lives in the shared library (`snippets/`)
1. **What is it?**
  - Rendering logic (JSX) → `components/`
  - Authored prose (MDX) → `content/`
  - Structured data → `data/`
  - Static files → `assets/`

Two questions, one location. The MDX page orchestrates everything — Mintlify enforces this architecture through its import system.

## **Component System (The Rendering Layer)**

**Governed by:** Master Report — Component Governance section **37 JSX components** in `snippets/components/`, organised into 6 groups.

### **Component Groups**

| **Group** | **Purpose** | **Example** |
| --- | --- | --- |
| Primitives | UI atoms | buttons, divider, icons, layout, links, tables |
| Content | Render data structures | CustomCodeBlock, ResponseFieldAccordion, MathInline, LatestVersion |
| Display | Visual presentation | Image, MarkdownEmbed, TwitterTimeline, WidthCard |
| Layout | Page structure | frameMode headings, quadGrid, themed Steps |
| Domain | Section-specific | Gateway callouts (hardcoded warning text — should be extracted to data) |
| Integrations | External data | CoinGecko live price (client-side fetch) |

### **Data Input Patterns**

| **Pattern** | **Example** | **When** |
| --- | --- | --- |
| Explicit props | <CodeBlock codeString={CODE.install} /> | Most common — clean contract |
| Spread props | <CodeBlock {...CODE.install} /> | Data object matches component prop shape |
| MDX scope | Child MDX uses parent's imported component | Composing MDX-in-MDX (views, groups) |

### **Key Constraint**

No component imports another component. The hierarchy is flat by necessity — Mintlify's JSX-can't-import-JSX rule means all composition happens at the MDX page level. Components are leaf nodes in the dependency graph.

### **Style Input Patterns**

| **Mechanism** | **Count** | **For** |
| --- | --- | --- |
| Inline style={{}} | 32 files | Simple layout |
| <style> tag | 7 files | Pseudo-classes, animations, media queries |
| CSS variables | All | Theme-aware values via var(--name) |