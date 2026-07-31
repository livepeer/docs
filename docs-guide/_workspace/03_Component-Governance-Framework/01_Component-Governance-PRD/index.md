# **PRD**

**Document type:** Product Requirements Document **Project:** Livepeer Docs v2 — `docs-v2` branch **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** DRAFT — for review

## **1. Summary**

The Livepeer docs-v2 component library (`snippets/components/`) lacks a governing framework. 37 JSX files export 83 components with no classification model, no ownership, no lifecycle management, and no documented relationship between components and the content types they serve. A third of exported components are non-functional. Three independent documentation surfaces describe the library and none agree with each other. Contributors cannot reliably find, choose, or correctly use components.

This PRD defines the requirements for a **Component Governance Framework** — a canonical, first-principles system that classifies every component, maps components to the page purpose taxonomy (SOT-00), establishes technical standards, and provides lifecycle governance. The framework makes each component easy to find, easy to use, and easy to maintain.

## **2. Contacts**

| **Name** | **Role** | **Responsibility** |
| --- | --- | --- |
| Alison Haire (Wonderland) | Documentation Lead / Framework Author | Framework design, audit, migration plan |
| Rich | Executive Director, Livepeer Foundation | Strategic approval, scope decisions |
| Rick (rickstaa) | Technical Director | Technical review, component ownership, gateway/AI section authority |
| Mehrdad | Stakeholder | Review |
| Joseph | Brand | Brand compliance review |

## **3. Background**

### **3.1 Context**

The Livepeer docs-v2 repository is a Mintlify-based documentation site serving developers, orchestrators, gateway operators, and the broader Livepeer community. The site uses a component-driven architecture: reusable React/JSX components in `snippets/components/` are imported into MDX pages to provide consistent, maintainable UI patterns across the documentation.

The component library was built organically during the v2 documentation restructure. Components were created as needed for specific pages and sections, then loosely grouped into six folders (primitives, layout, display, content, integrations, domain). No formal classification model, governance schema, or lifecycle management was established.

The repository already has a governance precedent: the scripts infrastructure went through a formal classification and governance process (INFRA-01, SOT-02) that classified 58+ scripts by category, usage, health, and disposition. The component library needs the same treatment, adapted for its distinct nature — components are consumed by content authors, not CI pipelines, and their quality directly affects the reader experience.

### **3.2 Why now?**

Three conditions have converged:

**The library is unreliable.** ~27 of 83 exported components (33%) are non-functional — broken by runtime bugs, deprecated dependency patterns (ThemeData), or placeholder implementations that were never completed. The published component library documentation pages have large sections commented out. A contributor referencing the library encounters broken examples and dead components alongside working ones, with no way to distinguish which is which.

**The classification is breaking down.** The six-folder structure has significant boundary leakage: components for the same concern exist in multiple folders (text×2, tables×2, containers×2), the largest file (data.jsx, 676 lines, 10 exports) spans three distinct concerns, and the "display" category is so broad it contains everything from video embeds to page headers to social media links. Three documentation surfaces (per-folder READMEs, published MDX pages, auto-generated overview) describe the library differently and none are accurate.

**The page purpose taxonomy now exists.** SOT-00 established a 10-type page purpose taxonomy (landing, overview, tutorial, how_to, concept, reference, faq, troubleshooting, changelog, glossary) with structural patterns and Mintlify component guidance per type. This creates the demand signal the component library must answer: "I'm writing a tutorial page — which components do I need?" The component library currently cannot answer this question.

### **3.3 What has changed?**

The `domain/` folder concept has been retired. Section-specific components now live co-located with their section content via the mdx-in-mdx pattern (e.g. gateway components at `/v2/gateways/quickstart/components/`). The component library boundary is now explicitly `snippets/components/` — only reusable, cross-section components belong inside it.

### **3.4 Best practices research**

Design system classification was evaluated across multiple established methodologies:

**Atomic Design (Brad Frost, 2013)** proposes a five-level chemistry metaphor (atoms → molecules → organisms → templates → pages). The hierarchy principle — smaller components compose into larger ones — is sound. The specific labels are widely acknowledged as unhelpful; teams consistently replace them with domain-appropriate terms. The key insight to retain: compositional hierarchy matters, but as a property of each component, not as a folder structure.

**Semantic / Purpose-Driven Classification (Nathan Curtis, EightShapes; QT; Trent Walton)** represents the modern consensus. Components are grouped by what they do, not by their position in an abstract hierarchy. The key distinction is between "components" (prescriptive coded objects) and "patterns" (principled guidance to interpret). Purpose-driven names reduce cognitive overhead for the people who actually use the system daily.

**Documentation-specific constraints** differentiate this library from product UI design systems. Content authors are the primary consumers, not product engineers. Component choice is driven by content type (what page am I writing?), not user flows. Discovery matters more than composition — finding the right component matters more than understanding its internal architecture. The Mintlify platform adds further constraints: globally available components (Card, Icon, Frame, Tabs, etc.) don't need import, and the mdx-in-mdx snippet pattern creates an unusual import graph.

**The scripts governance precedent (INFRA-01, SOT-02)** established per-item classification with governance fields (category, status, used-in, has-tests, decision, duplicates). The flat categorical taxonomy (CORE / GENERATION / AUDIT / PIPELINE / DEV-ONLY / PLACEHOLDER / DUPLICATE / DEPRECATED) works for scripts because scripts have clear operational contexts. Components need a similar per-item approach but with different dimensions: functional category, compositional tier, content-type affinity, and health status.

**Decision:** The framework uses purpose-driven functional categories derived from first-principles analysis of the actual components. Compositional hierarchy (primitive → composite → pattern) is captured as metadata tags, not as folder structure. Content-type affinity is mapped to the SOT-00 page purpose taxonomy. Governance fields mirror the scripts precedent, adapted for component lifecycle.

## **4. Objective**

### **4.1 Purpose statement**

Create a holistic, canonical source-of-truth global framework and technical architecture guide for the component library. Ensure each component is classified, meets modular standards, and is easy to find, use, and understand.

### **4.2 Why it matters**

Without a governing framework, the component library degrades over time — contributors create duplicates because they can't find existing components, bugs go untracked because there's no health registry, and the gap between the library and the page purpose taxonomy widens because there's no mapping between "what components exist" and "what content types need them."

For the company, this framework protects the investment already made in the component-driven architecture. For contributors, it reduces the friction of writing documentation. For readers, it ensures visual and structural consistency across pages.

### **4.3 Alignment**

This framework is the component-layer counterpart to three existing governance artefacts:

- **SOT-00 (Page Purpose Taxonomy)** defines what each page type is and what it needs → the component framework answers "which components serve each page type"
- **INFRA-01 / SOT-02 (Script Governance)** establishes the classification and lifecycle model → the component framework mirrors this model adapted for components
- **Style Guide (style-guide.mdx)** defines visual standards → the component framework enforces these standards per-component

### **4.4 Key results**

| **Key Result** | **Metric** | **Target** |
| --- | --- | --- |
| Every component classified | % of exports with assigned category, tier, content-type tags | 100% |
| Component discoverability | A contributor can identify the correct component for a page type in < 2 minutes | Pass/fail per page type |
| Documentation accuracy | Published component library pages match actual component state | 0 discrepancies |
| Health transparency | Every component has a known health status (working / buggy / placeholder / deprecated) | 100% |
| Single source of truth | One canonical documentation surface, with all others derived or pointing to it | 1 canonical, 0 competing |
| Boundary enforcement | Pre-commit hook validates component standards on commit | Active |

## **5. Users**

The component library serves three distinct user groups. Each interacts with components differently and needs different things from the framework.

### **5.1 Content Authors**

**Who:** Contributors writing documentation pages — core team, community contributors, AI agents (Copilot, Codex).

**Job:** "I'm writing a [page type] page. Which components should I use, and how?"

**Needs from the framework:**

- Discovery by content type: "show me components for tutorial pages"
- Clear import paths and copy-paste examples
- Confidence that documented components actually work
- Guidance on which component to choose when multiple seem similar

**Constraints:** May not know React. Interact with components via MDX import/usage, not via source code. Rely entirely on documentation and examples.

### **5.2 Component Maintainers**

**Who:** Repository maintainers (Rick, core team) and contributors modifying or creating components.

**Job:** "I need to fix/modify/create a component. Where does it go, what standards must it meet, and what will break?"

**Needs from the framework:**

- Clear classification rules: which category, what file standards
- Dependency graph: what breaks if I change this component
- Governance metadata: ownership, status, breaking-change risk
- Health registry: known bugs and their root causes

**Constraints:** Need to understand the compositional relationships between components. Need to know immutability rules and override procedures.

### **5.3 AI Agents**

**Who:** Copilot coding agent, Codex, Cursor, Claude — operating on the repository.

**Job:** "I've been assigned an issue that involves components. What are the rules?"

**Needs from the framework:**

- Machine-readable component registry (manifest file or structured frontmatter)
- Classification rules expressible as decision trees
- Enforcement rules encoded in pre-commit hooks and AGENTS.md
- Import path conventions that can be validated programmatically

**Constraints:** Cannot exercise judgement on ambiguous classifications. Need explicit rules, not guidelines.

## **6. Value Proposition**

### **6.1 What problems does this solve?**

| **Problem** | **Who feels it** | **How the framework solves it** |
| --- | --- | --- |
| "I can't find the right component" | Content author | Content-type affinity tags link page purposes to component sets |
| "I don't know if this component works" | Content author | Health status field on every component; published docs only show working components |
| "Three docs say different things" | Everyone | Single canonical documentation surface; others are derived or deprecated |
| "I don't know where to put a new component" | Maintainer | Decision tree assigns exactly one category per component |
| "I changed a component and broke 50 pages" | Maintainer | Dependency and usage data in governance metadata; breaking-change risk field |
| "The agent created a duplicate component" | Maintainer | Registry makes existing components discoverable; pre-commit hook flags conflicts |
| "display/ has everything in it" | Everyone | display/ is dissolved; components reclassified by actual function |

### **6.2 What do users gain?**

**Content authors** gain a component palette organised by what they're writing, not by internal architecture. "I'm writing a tutorial → here are the components tutorials use" becomes a one-step lookup.

**Maintainers** gain lifecycle visibility — which components are healthy, which are deprecated, who owns what, and what the impact radius of a change is.

**AI agents** gain a machine-readable contract they can follow without human judgement calls on classification ambiguity.

## **7. Solution**

### **7.1 Framework components**

The Component Governance Framework consists of four interlocking parts:

**Part A: Classification Model** — The category taxonomy, decision tree, and tag system that assigns every component to exactly one category with metadata tags for compositional tier, content-type affinity, and governance fields.

**Part B: Technical Standards** — The file-level requirements every component must meet: JSDoc, CSS variable usage, prop documentation, export conventions, naming conventions. Plus the enforcement mechanism (pre-commit hook scope).

**Part C: Documentation Architecture** — Which documentation surface is canonical, how it's generated, how the others relate to it, and how the component library pages are structured.

**Part D: Lifecycle Governance** — Status transitions (active → deprecated → removed), ownership assignment, breaking-change process, and the component registry that tracks all of the above.

### **7.2 Classification model (from first-principles analysis)**

Analysis of all 83 exported components by actual function produced six natural groupings:

| **Category** | **Purpose** | **Count** | **Decision rule** |
| --- | --- | --- | --- |
| Primitives | Standalone visual atoms — icons, text styling, callouts, links, images, math, dividers, a11y utilities | 29 | "Can this work in any context without importing other custom components? Is it a single visual element, not a container?" |
| Layout | Spatial arrangement — containers, grids, steps, lists, tables, carousels | 23 | "Does this accept children or structured data and arrange them spatially? Is its job where things go, not what they are?" |
| Media | Rich media embedding — video, platform embeds, diagrams, animations | 12 | "Does this embed or display non-text rich media content?" |
| Content | Documentation content formatting — code blocks, quotes, API fields, external content | 13 | "Does this format a specific kind of documentation content (code, quotes, API responses, external repos)?" |
| Data | Data-bound display — blog, forum, Discord, Luma, CoinGecko, showcase, YouTube data | 13 | "Is this bound to an external data source or the automation pipeline? Does changing the data schema break it?" |
| Page Structure | Page-level scaffolding — frame-mode elements, portal components, enhanced cards | 23 | "Does this define page structure/chrome for frame-mode or portal pages? Would a contributor writing standard documentation prose never use it?" |

The current "display/" category dissolves — its contents split across Media, Page Structure, Content, and Primitives based on actual function. The current "integrations/" category dissolves into Data. The current "domain/" category is retired (decision: section-specific components are co-located with their section content).

### **7.3 Content-type affinity mapping**

Every component is tagged with which SOT-00 page purpose types it serves. The 10 page purpose types are: `landing`, `overview`, `tutorial`, `how_to`, `concept`, `reference`, `faq`, `troubleshooting`, `changelog`, `glossary`.

A component can serve multiple page types (tagged `universal` if it's useful everywhere, or with specific types if it has affinity). This mapping is the primary discovery mechanism for content authors.

### **7.4 Compositional tier tags**

Each component is tagged with its position in the compositional hierarchy:

| **Tier** | **Definition** | **Example** |
| --- | --- | --- |
| primitive | Standalone. No custom component dependencies. Maximum reuse. | CustomDivider, LivepeerIcon, GotoLink |
| composite | Combines primitives or Mintlify globals into a task-specific structure. | DynamicTable, StyledSteps, CustomCodeBlock |
| pattern | Page-level composition. Defines a recognisable page region. | PortalHeroContent, PageHeader, ShowcaseCards |

### **7.5 Governance fields**

Each component carries governance metadata (mirroring INFRA-01/SOT-02 adapted for components):

| **Field** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| category | enum | Yes | One of: primitives, layout, media, content, data, page-structure |
| tier | enum | Yes | One of: primitive, composite, pattern |
| content_types | enum[] | Yes | SOT-00 page types this component serves |
| status | enum | Yes | active / buggy / placeholder / deprecated / review |
| owner | string | Yes | GitHub handle or team |
| health_detail | string | No | Bug description if status is buggy |
| dependencies | string[] | No | Custom components this imports |
| breaking_risk | enum | Yes | low / medium / high (based on import count and complexity) |
| import_count | number | Auto | Number of files importing this component |

### **7.6 Assumptions**

1. The SOT-00 page purpose taxonomy is stable and will not change significantly during framework implementation.
1. The Mintlify platform will continue to support the current component import pattern (absolute paths from `/snippets/`).
1. The pre-commit hook infrastructure can be extended to validate component governance metadata.
1. The `generate-docs-guide-components-index.js` script can be extended to produce governance-aware output.
1. Content authors will adopt content-type-based discovery if the tooling supports it.

## **8. Release**

### **8.1 Phased delivery**

| **Phase** | **Deliverable** | **Scope** | **Relative timeline** |
| --- | --- | --- | --- |
| 1 | Design Framework | Classification model, decision tree, tag vocabularies, governance schema | Now (in progress) |
| 2 | PRD + Technical Framework | This document (reframed), repo structure mapping, file standards, enforcement rules, documentation architecture | Follows Phase 1 |
| 3 | Audit A: Discovery & Gap Report | Every component classified, tagged, health-assessed against the framework | Follows Phase 2 |
| 4 | Migration & Final State Plan | Ordered steps, batch plan, breaking-change assessment, agent/human split | Follows Phase 3 |
| 5 | Audit B: Final Classification & Component Library | Post-migration verification, canonical component library documentation | Follows Phase 4 |

### **8.2 What goes in v1 vs future**

**v1 (this engagement):** Classification model, governance schema, Audit A (discovery), migration plan, documentation architecture decision.

**Future:** Full migration execution (file moves, import rewrites), bug cascade resolution (ThemeData migration, video.jsx fix), pre-commit enforcement for governance metadata, machine-readable component registry for AI agents.

### **8.3 Dependencies**

| **Dependency** | **Owner** | **Impact if missing** |
| --- | --- | --- |
| SOT-00 page purpose taxonomy confirmed stable | Alison / Rich | Content-type affinity tags can't be finalised |
| Style guide CSS variable standard confirmed | Rick | Component technical standards can't reference definitive list |
| Mintlify component import behaviour confirmed | Rick | Import path conventions may need adjustment |
| Gateway component ownership clarified | Rick | Page Structure category boundary may need adjustment |

## **9. Open Questions**

| **#** | **Question** | **Impact** | **Owner** |
| --- | --- | --- | --- |
| 1 | Should "Page Structure" exist as its own category, or should its components be distributed into Primitives (H1-H6, P), Layout (Portal containers), and Primitives (DisplayCard variants)? | Category count: 5 vs 6 | Alison — design decision |
| 2 | Where should governance metadata live — JSDoc headers, a separate manifest file, or frontmatter in a co-located MDX? | Technical framework implementation | Alison / Rick |
| 3 | Should the immutability rule be status-dependent (only active components are immutable) or blanket (all components are immutable regardless of status)? | Enforcement rules | Rick |
| 4 | Is the auto-generated overview (generate-docs-guide-components-index.js) the right base to extend, or should a new generation script be built? | Technical framework implementation | Alison |

## **Appendix: Source Material**

| **Source** | **What it provides** |
| --- | --- |
| Component Library Audit Report (this project) | Current state analysis, file inventory, import frequency, health status, overlap analysis |
| SOT-00: Purpose Document | Page purpose taxonomy (10 types), structural patterns, assessment criteria, Mintlify component guidance per type |
| 03: Page Purpose and Structure | Per-type structural patterns, component guidance per page type, per-tab purpose skeletons |
| INFRA-01 / SOT-02 | Script governance precedent — classification fields, decision model, lifecycle management |
| Homogenise Styles / Content Sections | Content layout guidelines, component usage rules, editorial standards |
| Published component library MDX (8 files) | Per-component props, health status, deprecation notes, usage guidance |
| Design system research (Atomic Design, EightShapes, QT, Trent Walton) | Classification methodology best practices |
| phuryn/pm-skills create-prd template | PRD structure (8-section template) |