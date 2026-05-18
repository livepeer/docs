# **Repo Structure & Documentation Architecture**

**Deliverable:** D2 — Component Governance Framework, Part 2
 **Repository:** `livepeer/docs`, `docs-v2` branch
 **Scope:** `snippets/components/` — physical structure, naming, documentation, registry, pipeline
 **Platform:** Mintlify (MDX-based)
 **Date:** 7 March 2026
 **Author:** Wonderland (Alison Haire) / Claude collaboration
 **Status:** COMPLETE
 **Depends on:** D1 (Classification & Purpose Model)

## **1. Purpose**

This document maps the D1 classification model to a physical repo structure. It defines where components live, how they're named, where documentation lives, how the registry is generated, and how MDX pages import components.

It is the bridge between the abstract classification model (D1) and the technical implementation standards (D3–D5).

## **2. Constraints from D1**

The following are locked by D1 and constrain all D2 decisions:

| **D1 Decision** | **D2 Constraint** |
| --- | --- |
| Five categories | Five top-level folders under snippets/components/ |
| Metadata only (no tier subfolders) | Flat file layout within each category folder |
| JSDoc blocks (14 fields, all required) | Metadata is co-located in source files, not a separate manifest |
| Decision tree (first match wins) | Folder placement must match the decision tree output |
| Library boundary is snippets/components/ | Nothing outside this path is governed |

## **3. Folder Structure**

### **3.1 Target Layout**

### **3.2 Folder Rules**

| **Folder** | **Purpose** | **Placement rule** |
| --- | --- | --- |
| primitives/ | Standalone visual atoms | Component passes D1 decision tree Q5 (default) |
| layout/ | Spatial arrangement | Component passes D1 decision tree Q3 (accepts children, arranges spatially) |
| content/ | Content formatting and media rendering | Component passes D1 decision tree Q4 (formats/renders content) |
| data/ | Pipeline/API-bound display | Component passes D1 decision tree Q1 (bound to data source) |
| page-structure/ | Frame-mode and portal scaffolding | Component passes D1 decision tree Q2 (only makes sense on frame-mode/portal pages) |
| {category}/examples/ | Usage examples for components in the parent category | Contains .mdx files showing component usage, imported by published docs |

### **3.3 Validation Rule**

The `@category` JSDoc tag on every export must match the folder the file lives in. A component in `primitives/divider.jsx` must carry `@category primitives`. The pre-commit validation script enforces this — a mismatch blocks the commit.

## **4. Naming Conventions**

### **4.1 File Naming**

**Convention:** camelCase with `.jsx` extension.

| **Rule** | **Example** | **Rationale** |
| --- | --- | --- |
| camelCase | frameMode.jsx, customCards.jsx, searchTable.jsx | Matches the majority of existing files, minimising migration churn |
| .jsx extension | Not .js, not .tsx | Mintlify resolves .jsx imports; consistency across the library |
| Descriptive, noun-based | tables.jsx not t.jsx | File name communicates content at a glance |

**Exceptions:** None. All new and migrated files follow camelCase.

### **4.2 Export Naming**

**Convention:** PascalCase, matching the component name.

| **Rule** | **Example** | **Rationale** |
| --- | --- | --- |
| PascalCase | CustomDivider, StyledTable, PageHeader | React convention; required for JSX usage in MDX |
| Named exports | export const X = ... | Mintlify imports use destructured named exports |
| Arrow function syntax | export const X = () => ... | Mintlify requires arrow function syntax for JSX snippets; function keyword is not supported in snippets |

### **4.3 Example File Naming**

**Convention:** kebab-case, suffixed with `-examples.mdx`.

| **Rule** | **Example** | **Rationale** |
| --- | --- | --- |
| kebab-case | divider-examples.mdx, frame-mode-examples.mdx | MDX content files use kebab-case throughout the repo |
| -examples suffix | Not -example (singular) | A file may contain multiple examples for multiple exports from the same source file |
| .mdx extension | Not .jsx | Examples are MDX content (prose + component usage), not pure JSX |

## **5. File Granularity**

### **5.1 Convention**

**Grouped files with per-export JSDoc.** Logically related components share a file. Each exported component gets its own 14-field JSDoc block within the file.

### **5.2 Grouping Rules**

| **Rule** | **Example** |
| --- | --- |
| Components that share internal helpers stay together | StyledTable, TableRow, TableCell share styling logic in tables.jsx |
| Components that form a coherent set stay together | H1–H6, P, Divider, PageHeader in frameMode.jsx |
| Components with no logical relationship get separate files | SearchTable is standalone → searchTable.jsx |

### **5.3 JSDoc Placement**

Every exported component gets a JSDoc block immediately above its export statement:

### **5.4 Shared Internal Helpers**

Non-exported helper functions (styling utilities, data formatters) live in the same file as the components that use them. They do not get JSDoc governance blocks — they are implementation details, not governed exports.

## **6. Canonical Documentation Home**

### **6.1 Model**

**Hybrid:** JSDoc is the source of truth for metadata. Published MDX pages are the source of truth for editorial content.

### **6.2 Three Surfaces**

| **Surface** | **Role** | **SOT for** | **Maintained by** |
| --- | --- | --- | --- |
| JSDoc blocks (in source files) | Governance metadata | Category, tier, status, affinity, dependencies, risk, owner, etc. | Contributors (at component creation/modification) |
| Published MDX pages (Resource Hub) | Consumer-facing documentation | Usage guidance, when to use, examples, gotchas, best practices | Human authors (editorial) |
| Generated registry (docs-guide/component-registry.json) | Machine-readable index | All 14 fields per component, assembled from JSDoc | Pre-commit generation script (automated) |

### **6.3 Data Flow**

### **6.4 Deprecated Surface**

**Per-folder READMEs** — deprecated. Any existing READMEs in `snippets/components/` subdirectories are removed during migration (D9). They are replaced by the generated registry and published MDX pages.

### **6.5 Published MDX Page Structure**

The published component library documentation lives in the Resource Hub. One page per category, plus an overview:

| **Page** | **Content** |
| --- | --- |
| component-library.mdx | Overview: what the library is, how to use it, link to decision tree, link to each category page |
| component-library-primitives.mdx | All primitives: generated metadata + editorial usage guidance |
| component-library-layout.mdx | All layout components: generated metadata + editorial |
| component-library-content.mdx | All content components: generated metadata + editorial |
| component-library-data.mdx | All data components: generated metadata + editorial |
| component-library-page-structure.mdx | All page structure components: generated metadata + editorial |

Each category page follows a consistent structure:

1. Category purpose statement (from D1)
1. Decision tree excerpt (when does a component land here?)
1. Component table (generated from registry: name, tier, status, content affinity)
1. Per-component sections (generated metadata + editorial prose + imported examples)

## **7. Registry Format**

### **7.1 Location**

`docs-guide/component-registry.json`

Mirrors the existing pattern where `docs-guide/` holds generated indexes:

- `docs-guide/scripts-index.md` (generated from script headers)
- `docs-guide/workflows-index.md` (generated from workflow files)
- `docs-guide/templates-index.md` (generated from template files)
- `docs-guide/component-registry.json` (generated from JSDoc blocks)

### **7.2 Schema**

### **7.3 Additional Generated Fields**

The registry adds two fields beyond the 14 JSDoc fields:

| **Field** | **Source** | **Purpose** |
| --- | --- | --- |
| file | Parsed from file system path | Physical file location for maintainers |
| importPath | Derived from file (prepend /) | Exact import path for MDX pages — copy-paste ready |

### **7.4 JSON Schema Validation**

A JSON Schema file (`docs-guide/component-registry-schema.json`) validates the registry structure. The generation script validates its own output before writing. CI can optionally validate the committed registry against the schema.

## **8. Generation Pipeline**

### **8.1 Script**

**File:** `operations/scripts/generators/components/library/generate-component-registry.js`

Follows the existing script governance model (INFRA-01): structured header, documented in `docs-guide/scripts-index.md`, scaffolded via `new-script.js`.

### **8.2 Trigger**

**Pre-commit hook.** When files in `snippets/components/` are staged, the hook:

1. Runs the generation script.
1. Parses every JSDoc block in `snippets/components/**/*.jsx`.
1. Validates all 14 fields per export (presence, type, enum values).
1. Validates `@category` matches the component's folder.
1. Writes `docs-guide/component-registry.json`.
1. Auto-stages the updated registry file.

If validation fails (missing fields, invalid enums, category mismatch), the commit is blocked with an actionable error message identifying the file, export, and failing field.

### **8.3 Input → Process → Output**

### **8.4 Relationship to Existing Scripts**

| **Existing script** | **Relationship** |
| --- | --- |
| generate-docs-guide-components-index.js | Superseded. The new registry script replaces this with governance-aware output. The old script can be deprecated or refactored to read from the registry. |
| update-component-library.sh | Downstream consumer. Reads the registry to update published MDX pages. May be extended to inject generated metadata into editorial pages. |
| audit-scripts.js | Parallel pattern. The component registry script follows the same self-documenting pattern established for scripts. |

## **9. Examples Convention**

### **9.1 Location**

Co-located `examples/` subdirectory within each category folder:

### **9.2 File Format**

Example files are MDX. They contain:

1. Import statement(s) for the component(s) being demonstrated.
1. One or more usage examples with surrounding prose.
1. Props variations showing key configuration options.
### **9.3 Requirements**

| **Requirement** | **Rule** |
| --- | --- |
| Minimum | Every component with @status stable must have at least one example |
| Coverage | Examples must demonstrate the primary use case and at least one props variation |
| Import paths | Must use full explicit paths per Decision 7 |
| Naming | {sourceFileName}-examples.mdx in kebab-case |

### **9.4 Consumption**

Published MDX pages import from the examples directory:

This keeps the published page clean (editorial prose + imported examples) while the example source stays co-located with the component.

## **10. Import Path Conventions**

### **10.1 Convention**

**Full explicit paths.** Every import in an MDX page must use the complete path including file extension.

### **10.2 Platform Constraint**

Mintlify requires explicit file paths. Directory imports and barrel files do not resolve. This is a platform limitation, not a convention choice — there is no alternative.

### **10.3 Nested Import Restriction**

Mintlify does not support nested imports between component files. If component A internally uses component B, the consuming MDX page must import both A and B directly:

This constraint has implications for D4 (Component Development Standards) — composition between custom components is managed at the MDX page level, not within component files.

### **10.4 Import Path in Registry**

The generated registry includes an `importPath` field for every component — the exact string a content author copies into their MDX import statement. This eliminates guesswork.

## **11. Decision Register**

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | Naming conventions | camelCase files, PascalCase exports | kebab-case files; camelCase files; PascalCase files matching export | Matches the majority of existing files, minimising migration churn. Exports follow React convention. |
| 2 | File granularity | Grouped files with per-export JSDoc | One component per file; grouped with per-export JSDoc; grouped with max 4 cap | Related components stay co-located. Keeps file count manageable (~37). Each export gets its own 14-field JSDoc block. |
| 3 | Canonical docs home | Hybrid — JSDoc SOT for metadata, published MDX SOT for editorial | JSDoc sole SOT; published MDX sole SOT; hybrid | Governance data generated from JSDoc (can't drift). Editorial content human-authored in published MDX. Per-folder READMEs deprecated. Two surfaces with separated concerns. |
| 4 | Registry format | Single JSON at docs-guide/component-registry.json | Single JSON in components dir; per-category JSONs; single JSON in docs-guide | Mirrors existing docs-guide/ pattern for generated indexes. Single file, trivially consumable, JSON Schema–validatable. |
| 5 | Generation pipeline | Pre-commit hook — auto-regenerate on staged component changes | Manual only; pre-commit; CI validation; CI auto-commit | Impossible to forget. Registry always matches source at commit time. Mirrors existing pre-commit auto-fix infrastructure. |
| 6 | Examples convention | Co-located examples/ subdirectory per category folder | Inline in published MDX only; co-located examples dir; centralised examples dir; JSDoc @example + MDX | Examples live near source. Maintainer updates both together. Published pages import rather than duplicate. |
| 7 | Import path convention | Full explicit paths (only viable option on Mintlify) | Full explicit; category barrel files; single root barrel | Mintlify requires explicit file paths with extensions. Barrel files don't resolve. Platform constraint, not convention choice. |

## **12. Success Criteria**

Per the Component Governance Framework plan:

- [x] Folder structure defined — five category folders, each with stated purpose and placement rule
- [x] Naming conventions defined — camelCase files, PascalCase exports, kebab-case examples, enforceable
- [x] Canonical documentation home decided — hybrid (JSDoc for metadata, published MDX for editorial), per-folder READMEs deprecated
- [x] Registry format defined — single JSON in `docs-guide/`, fields and schema specified, how it's maintained (pre-commit generation)
- [x] Generation pipeline defined — inputs (JSDoc blocks), outputs (registry JSON), trigger (pre-commit hook), error handling (commit blocked)
- [x] Examples convention defined — co-located `examples/` per category, `.mdx` format, minimum requirements
- [x] All conventions work within Mintlify constraints (explicit imports, arrow function exports, `/snippets/` path requirement)
- [x] Structure maps cleanly to D1 classification model (five folders = five categories, `@category` must match folder)

## **13. Open Items for Downstream Deliverables**

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| Composition rules under nested import restriction | D4 (Component Development Standards) | Mintlify's no-nested-imports constraint means composition is MDX-page-level. D4 must define how this works in practice. |
| Generation script implementation | D9 (Migration Plan) | operations/scripts/generators/components/library/generate-component-registry.js — new script, follows INFRA-01 pattern |
| Pre-commit hook extension | D9 (Migration Plan) | Extend existing .githooks/pre-commit to trigger registry generation |
| JSON Schema creation | D9 (Migration Plan) | docs-guide/component-registry-schema.json — validates registry structure |
| Published MDX page updates | D9 (Migration Plan) | Restructure Resource Hub component library pages to per-category format with generated + editorial content |
| generate-docs-guide-components-index.js deprecation | D9 (Migration Plan) | Superseded by the new registry script; deprecate or refactor to consume registry |
| Example file creation | D8 (Audit) / D9 (Migration) | Every stable component needs at least one example; created during or after audit |
| Import path migration | D9 (Migration Plan) | All existing imports across MDX pages must be updated to match new folder paths |