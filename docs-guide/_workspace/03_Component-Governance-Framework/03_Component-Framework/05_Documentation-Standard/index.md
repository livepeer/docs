# **Documentation & Example Standards**

**Deliverable:** D5 — Component Governance Framework, Part 3 (Technical Design) **Repository:** `livepeer/docs`, `docs-v2` branch **Scope:** How components are documented — JSDoc format, props tables, examples, published docs, deprecation **Platform:** Mintlify (MDX-based) **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** COMPLETE **Depends on:** D1 (Classification), D2 (Repo Structure), D3 (Styling), D4 (Development Standards)

## 1. Purpose

This document defines how components are documented — what a content author sees when they want to find and use a component, what a maintainer sees when they need to understand and modify one, and how all documentation surfaces are generated and maintained.

It completes the technical design trilogy (D3 styling, D4 development, D5 documentation) and defines the contract between source code (JSDoc), the generated registry, and the published consumer-facing documentation.

## 2. Documentation Architecture (Recap from D2)

**JSDoc is SOT for metadata and props.** Published docs are generated — no human authoring or maintenance.

## 3. JSDoc Standard

### **3.1 Full Template**

Every exported component carries a JSDoc block with governance fields (D1), props documentation (`@param`), and a usage snippet (`@example`).

### **3.2 Field Groups**

| **Group** | **Fields** | **Purpose** |
| --- | --- | --- |
| Governance (D1) | @component, @category, @tier, @status, @description, @contentAffinity, @owner, @dependencies, @usedIn, @breakingChangeRisk, @decision, @dataSource, @duplicates, @lastMeaningfulChange | Classification, lifecycle, maintenance tracking |
| Props | @param (one per prop) | Developer and author-facing props documentation |
| Usage | @example | Quick-reference code snippet |
| Deprecation (when applicable) | @deprecated, @see | Migration pointer |

### **3.3 **`@param`** Format**

| **Element** | **Convention** |
| --- | --- |
| Type | JS type: string, number, boolean, Array, Object, Function, node (for React children). Use string for enums, list values in description. |
| Brackets | [name] = optional. name (no brackets) = required. |
| Default | [name=value] for optional props with defaults. |
| Description | One sentence. If enum, list valid values: "One of: 'default', 'compact', 'wide'." |

**Examples:**

### **3.4 **`@example`** Format**

One or two lines of JSX showing the primary use case. Not a full rendered example — that's in the `examples/` directory.

For components with required props:

### **3.5 Validation Rules (Extension of D1)**

The pre-commit validation script (D2) is extended to check:

| **Check** | **Rule** |
| --- | --- |
| @param coverage | Every prop in the destructuring signature has a corresponding @param tag |
| @param format | Matches {type} [name=default] - Description or {type} name - Description |
| @example present | At least one @example line for components with @status stable |
| @deprecated format | If @status deprecated, @deprecated tag must be present with reason and @see pointer |

## 4. Props Table Format

### **4.1 Standard 5-Column Table**

Published docs display props in a consistent table per component:

| **Prop** | **Type** | **Default** | **Required** | **Description** |
| --- | --- | --- | --- | --- |
| href | string | — | Yes | Destination URL |
| title | string | — | Yes | Card title text |
| icon | string | 'livepeer' | No | Brand icon. One of: 'livepeer', 'none' |
| isCompact | boolean | false | No | Compact rendering mode |
| children | node | null | No | Child content |

### **4.2 Generation Rules**

The props table is generated from `@param` JSDoc tags:

| **Column** | **Source** |
| --- | --- |
| Prop | @param name |
| Type | @param type (in braces) |
| Default | @param default value (in brackets), or — if required |
| Required | Yes if no brackets/default in @param, No if brackets present |
| Description | @param description text |

### **4.3 Complex Types**

| **Pattern** | **Notation in @param** | **Display in table** |
| --- | --- | --- |
| Enum string | {string} + "One of: ..." in description | string with values in description |
| Array of objects | {Array} + shape in description | Array with "Array of objects with {fields}" |
| Callback | {Function} + signature in description | Function with "Called with (event)" |
| React children | {node} | node |

## 5. Example Requirements

### **5.1 Location and Format**

| **Aspect** | **Convention** |
| --- | --- |
| Location | snippets/components/{category}/examples/{file}-examples.mdx |
| Format | MDX file with import statement + rendered component usage |
| Naming | {sourceFileName}-examples.mdx in kebab-case |

### **5.2 What an Example Must Contain**

One rendered example per exported component. Copy-paste ready.

For files with multiple exports:

### **5.3 Rules**

| **Rule** | **Description** |
| --- | --- |
| One example per export | Each exported component has at least one rendered usage |
| Copy-paste ready | The example works if pasted into any MDX page with the import |
| Import included | Full explicit import path shown |
| Stable only | Components with @status placeholder or @status broken do not require examples |
| Primary use case | Show the most common usage, not every prop variation |

### **5.4 Relationship to JSDoc **`@example`

| **Surface** | **Purpose** | **Content** |
| --- | --- | --- |
| JSDoc @example | Quick-reference code snippet in source file | 1–2 lines of JSX (not rendered, code only) |
| examples/ MDX file | Rendered example in published docs | Full MDX with import, renders in browser |

Both are generated into the published docs: the JSDoc `@example` as a code block, the `examples/` MDX as a rendered preview.

## 6. Published Docs Structure

### **6.1 Page Layout**

One overview page + one page per category. All generated — zero human maintenance.

| **Page** | **Path** | **Content** |
| --- | --- | --- |
| Overview | component-library.mdx | Library intro, link to decision tree, category summary table, link to each category page |
| Primitives | component-library-primitives.mdx | All primitives with editorial + props + examples |
| Layout | component-library-layout.mdx | All layout components |
| Content | component-library-content.mdx | All content components |
| Data | component-library-data.mdx | All data components |
| Page Structure | component-library-page-structure.mdx | All page structure components |

### **6.2 Category Page Internal Structure**

Each category page follows this generated structure:

### **6.3 Generation Pipeline**

**Script:** `tools/scripts/generate-component-docs.js`

### **6.4 OpenRouter Integration**

| **Aspect** | **Decision** |
| --- | --- |
| Provider | OpenRouter (free/cheap models, flexible) |
| API key | Stored as repo secret (OPENROUTER_API_KEY), consumed by generation script |
| Model | Configurable in script config (default: free tier model) |
| Prompt | Structured: governance fields + props + category context → 2-3 sentence editorial |
| Caching | LLM output cached per component content hash in docs-guide/.editorial-cache.json |
| Fallback | On any LLM failure: template-generated prose from metadata |
| Cost | Free/cheap tier. ~83 components × ~100 tokens per response = minimal. Cached, so only regenerates on change. |

### **6.5 Template Fallback Format**

When the LLM is unavailable, the script produces deterministic prose:

Functional, accurate, zero external dependencies.

## 7. Deprecation Documentation

### **7.1 JSDoc Format**

When a component is deprecated (`@status deprecated`), two additional JSDoc tags are required:

### **7.2 Published Docs Rendering**

The generation script produces a deprecation banner in the published docs:

- The component section is moved to the bottom of its category page.
- The props table and example are retained (for migration reference).
- The editorial prose is replaced with the deprecation notice.

### **7.3 Registry Representation**

### **7.4 Validation**

Pre-commit enforces:

| **Check** | **Rule** |
| --- | --- |
| @status deprecated requires @deprecated tag | Cannot set status to deprecated without a deprecation reason |
| @deprecated requires @see | Must point to a replacement (or @see none if no replacement exists) |

## 8. Decision Register

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | JSDoc scope | Governance + @param + @example — maximally self-documenting | Governance only; + @param; + @param + @example | Source files fully self-describing. Generation script extracts props tables and code examples. examples/ directory carries rendered MDX examples. |
| 2 | Props table format | Standard 5-column: Prop, Type, Default, Required, Description | Minimal 4-col; standard 5-col; Mintlify ResponseField | Explicit required flag, generated from @param, scannable. |
| 3 | Example requirements | Minimal — one rendered example per component, copy-paste ready | Minimal; standard (+ variations); comprehensive (all props) | Content authors need a working example to grab and adapt. Low maintenance. |
| 4 | Published docs structure | LLM-generated editorial (OpenRouter) with template fallback, zero human maintenance | Generated-first; editorial-first with human authoring; LLM-generated with fallback | Fully automated. LLM produces editorial prose. Template fallback is deterministic. Cached. Regenerated when components change. No human authoring or maintenance. |
| 5 | Deprecation documentation | @deprecated tag + @see pointer to replacement | Minimal pointer; migration snippet; separate file | Standard JSDoc convention. Generation script auto-produces deprecation banner. Minimal overhead. |

## 9. Success Criteria

Per the Component Governance Framework plan:

- [x] JSDoc template defined — 14 governance fields + `@param` per prop + `@example` snippet
- [x] Props table format defined — 5 columns, generated from `@param`, type notation specified
- [x] Example requirements defined — one rendered MDX example per stable component, copy-paste ready
- [x] Published docs structure defined — 6 pages (overview + per-category), fully generated with LLM editorial and template fallback
- [x] Deprecation documentation format defined — `@deprecated` + `@see`, auto-generates banner
- [x] Relationship between JSDoc → registry → published docs explicit (Section 2 architecture)

## 10. Open Items for Downstream Deliverables

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| generate-component-docs.js implementation | D9 (Migration Plan) | New script following INFRA-01 pattern |
| OpenRouter API integration | D9 (Migration Plan) | API key setup, model configuration, caching layer |
| .editorial-cache.json creation | D9 (Migration Plan) | Cache file for LLM outputs, keyed by component hash |
| Pre-commit @param validation | D9 (Migration Plan) | Extend validation to check @param coverage and format |
| @param backfill for all components | D8 (Audit) | Every exported component gets @param tags during audit |
| @example backfill for stable components | D8 (Audit) | Every stable component gets an @example snippet |
| Example file creation | D8 (Audit) / D9 (Migration) | One MDX example file per source file with stable exports |
| Published docs page generation (first run) | D9 (Migration Plan) | Initial generation of all 6 published MDX pages |
| Registry schema extension | D9 (Migration Plan) | Add deprecated object to registry schema for deprecated components |