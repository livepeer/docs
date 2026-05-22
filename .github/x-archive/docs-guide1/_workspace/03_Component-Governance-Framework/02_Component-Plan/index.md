# **Component Governance Framework**

**Workstream:** Standalone **Status:** To Do **Depends on:** Page Taxonomy (SOT-00), Content Taxonomy, Composable Content Structure (UX Framework), Mintlify Considerations (Implementation Considerations) **Output:** A first-principles Component Governance Framework — the canonical reference for how components are classified, built, documented, and maintained in `snippets/components/`.

## **Purpose**

The component library has no governing framework. No classification model. No development standards. No lifecycle management. No canonical documentation. Components were created organically with no shared rules for what they are, where they go, how they're built, or how they're maintained.

This plan creates a Component Governance Framework from first principles. Each deliverable researches best practices, evaluates options against the project's context and constraints, and produces a design decision — collaboratively, not unilaterally. The framework is designed as if greenfield. Current repo state informs but does not constrain.

## **Upstream Dependencies**

These documents are already defined (or in progress) under the Master Report and feed into this framework. The component framework consumes them; it does not redefine them.

| **Document** | **Section** | **What it provides to this framework** |
| --- | --- | --- |
| Page Taxonomy | UX Framework & Taxonomy | The page purpose types (landing, overview, tutorial, how_to, concept, reference, faq, troubleshooting, changelog, glossary). Components map to these. |
| Content Taxonomy | UX Framework & Taxonomy | Content types and structural patterns per page type. Defines what content each page carries — components are the rendering layer for that content. |
| Composable Content Structure | UX Framework & Taxonomy | The broader reuse architecture. Defines the relationship between UI components (this framework), content snippets (MDX-in-MDX), data snippets, and generated content. This framework governs the UI component pattern only. |
| Mintlify Considerations | Implementation Considerations | Platform constraints, globally available components, MDX behaviour, import rules, styling limitations. The component framework must work within these constraints. |

## **Framework Structure**

The Component Governance Framework has three parts plus lifecycle governance that spans all three:

## **Deliverables Overview**

| **#** | **Framework Part** | **Deliverable** | **What it produces** |
| --- | --- | --- | --- |
| D1 | Part 1: Classification & Purpose | Classification & Purpose Model | Category taxonomy, decision rules, compositional model, content-type mapping, per-component metadata schema |
| D2 | Part 2: Repo Structure | Repo Structure & Documentation Architecture | Folder structure, naming conventions, documentation canonical home, registry format, generation pipeline |
| D3 | Part 3: Technical Design | Styling Architecture & Standards | Style system, CSS custom properties vocabulary, component styling rules, theme integration, Mintlify override patterns |
| D4 | Part 3: Technical Design | Component Development Standards | Props conventions, composition patterns, accessibility, error handling, testing |
| D5 | Part 3: Technical Design | Documentation & Example Standards | JSDoc conventions, props documentation format, example requirements, published docs structure |
| D6 | Spans all parts | Lifecycle & Governance Model | Status values, transitions, ownership, immutability, deprecation |
| D7 | — | Component Governance Framework (compiled) | Single canonical document from D1–D6 |
| D8 | — | Component Audit | Every component classified and assessed against the framework |
| D9 | — | Migration & Final State Plan | Ordered steps from current state to framework target |

## **Part 1: Classification & Purpose Model**

*What components are, how they're categorised, and what content they serve.*

### **D1: Classification & Purpose Model**

**Goal:** Define how components are categorised, how a contributor determines which category a component belongs to, what metadata every component carries, and how components connect to the page and content taxonomies.

**Problem:** There is no shared vocabulary for what kinds of components exist, no rules for where a component belongs, and no structured metadata for tracking component properties. Contributors place components by instinct. There is no connection between "what page am I writing?" and "which components should I use?"

**Output:** Classification & Purpose Model document — category taxonomy, decision rules, compositional tiers, content-type mapping, metadata schema.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| How should components be categorised? | Functional grouping (by what it does), structural grouping (by complexity), domain grouping (by where it's used), flat tagging (no folders, tags only). What works specifically for documentation component libraries vs product UI? | Atomic Design (Brad Frost), EightShapes (Nathan Curtis), Carbon (IBM), Polaris (Shopify), Material Design, Lightning (Salesforce), Diátaxis framework, INFRA-01 script categories (internal precedent) |
| How should compositional hierarchy be expressed? | Flat (all components equal), tiered (primitive → composite → pattern), nested (components contain components with explicit depth). Folders vs metadata vs both? | Atomic Design tiers, Storybook organisation patterns, Design Tokens community group |
| How should components map to content types? | Direct mapping (component X is for page type Y), affinity tags (component X works well on types Y and Z), no formal mapping (discovery by browsing). How do the Page Taxonomy and Content Taxonomy connect to component selection? | Page Taxonomy (SOT-00), Content Taxonomy, 03-page-purpose-and-structure Mintlify component guidance per page type |
| What metadata should each component carry? | What fields are essential vs overhead? What do established component registries track? How does this align with INFRA-01's per-script fields? | INFRA-01 script fields, Storybook metadata, design system registries, npm package metadata conventions |
| How does a contributor decide where a component belongs? | Decision trees, flowcharts, heuristic questions, lookup tables. What minimises ambiguity? | Design system contribution guides, component governance examples |
| Where does the component library boundary sit? | What's inside the governed library vs outside it? How does this relate to the Composable Content Structure's definition of content snippets and section-local content? | Composable Content Structure (UX Framework), Mintlify snippet conventions |

### **Decide (collaborative)**

Evaluate options against:

- Intuitive for content authors (primary consumers), not just engineers?
- Scales to ~80+ components without bureaucracy?
- Contributor can self-serve classification without asking someone?
- Connects to Page Taxonomy and Content Taxonomy?
- Enforceable by tooling (scripts, hooks, generation)?
- Works within Mintlify Considerations constraints?

### **Success Criteria**

- [ ] Category taxonomy defined — each category has a name, purpose, boundary, and decision rule
- [ ] Compositional model defined — how hierarchy is expressed and assigned
- [ ] Content-type mapping defined — components connected to Page Taxonomy types
- [ ] Metadata schema defined — fields, types, required vs optional
- [ ] Decision mechanism defined — a contributor can classify any component unambiguously
- [ ] Library boundary defined — what's in vs out, aligned with Composable Content Structure
- [ ] Every decision has documented rationale

## **Part 2: Repo Structure**

*Where components live, how they're named, and how they're documented.*

### **D2: Repo Structure & Documentation Architecture**

**Goal:** Define the ideal folder structure, naming conventions, documentation canonical home, component registry format, and generation pipeline. Map the classification model from D1 to a physical repo structure.

**Problem:** The current folder structure grew organically and doesn't reflect any principled classification. Documentation is split across three surfaces that contradict each other. There's no machine-readable component registry. The generation script produces an inventory but not governance data.

**Output:** Repo Structure & Documentation Architecture document — folder layout, naming conventions, canonical docs home, registry format, generation pipeline.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| Should folders = categories? | One folder per category, or is classification metadata-only with a flat/different folder structure? Pros/cons of each. | Design system folder conventions, monorepo component organisation, Mintlify snippet conventions |
| What are the naming conventions? | File naming (kebab-case, camelCase, PascalCase). Export naming. One component per file or multiple? | React community conventions, existing repo patterns, Mintlify import requirements |
| Where is the canonical documentation home? | Published MDX pages? Auto-generated? Per-folder READMEs? Storybook-style? What's the single source of truth? | Current three documentation surfaces, Storybook, design system documentation approaches |
| What is the component registry? | JSON manifest? Generated from JSDoc? Manually maintained? What fields? How does it feed generation? | package.json metadata, Storybook manifest, design system registries |
| How does the generation pipeline work? | What is auto-generated vs manually authored? What's the input (registry? JSDoc? source code AST?)? What's the output? | Current generation script, Storybook autodocs, TypeDoc, JSDoc-to-docs pipelines |
| How does this connect to Mintlify? | Import path conventions. What Mintlify constrains about folder structure and file placement. | Mintlify Considerations, Mintlify snippet documentation, existing repo structure |
| How are examples organised? | Per-folder examples/ directory? Centralised? Inline in published docs? What's discoverable and maintainable? | Current examples/ convention, Storybook stories pattern, design system example approaches |

### **Decide (collaborative)**

Evaluate options against:

- Does the structure make components discoverable for content authors?
- Is the documentation architecture sustainable (won't drift)?
- Does the registry format support automation (generation, validation, enforcement)?
- Does it work within Mintlify platform constraints?
- Is the relationship between classification (D1) and folder structure explicit?

### **Success Criteria**

- [ ] Folder structure defined — every folder has a stated purpose and placement rule
- [ ] Naming conventions defined — files, exports, consistent and enforceable
- [ ] Canonical documentation home decided — one source of truth, all others derived or deprecated
- [ ] Registry format defined — fields, location, how it's maintained
- [ ] Generation pipeline defined — inputs, outputs, trigger conditions
- [ ] Examples convention defined — location, format, requirements
- [ ] All conventions work within Mintlify constraints
- [ ] Structure maps cleanly to D1 classification model

## **Part 3: Technical Design**

*How components are built — styling, props, composition, accessibility, documentation, testing.*

### **D3: Styling Architecture & Standards**

**Goal:** Define the style system that components operate within, how components use it, and what styling patterns are allowed vs forbidden. Many components exist specifically to override Mintlify's limited native styling — this deliverable governs that practice.

**Problem:** Styling across the component library is inconsistent. Some components use CSS custom properties correctly, others use deprecated patterns, others hardcode values. The relationship between the global style system, Mintlify's native styling, and per-component inline styles is undocumented. There's no shared vocabulary for "how do I style this?"

**Output:** Styling Architecture & Standards document — style system documentation, CSS custom properties vocabulary, component styling rules, Mintlify override patterns.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What does Mintlify provide natively? | Built-in styling, theme support, dark/light mode behaviour, what CSS Mintlify controls vs what's available to customise. What gaps exist that components need to fill? | Mintlify Considerations, Mintlify documentation, existing style.css overrides |
| What is the CSS custom properties vocabulary? | Full inventory of var(--) tokens in style.css. Colour, spacing, typography, border, shadow, z-index tokens. What's defined, what's used, what's missing? | style.css, existing component usage patterns |
| What styling approaches exist? | CSS custom properties, deprecated patterns (ThemeData), hardcoded hex, inline styles, mixed. What's the current distribution and why? | Existing component files, style guide, pre-commit hook rules |
| How should dark/light mode work? | What Mintlify provides. How components should respond. Testing requirements. | Mintlify theme documentation, CSS prefers-color-scheme, existing theme handling |
| When are inline styles acceptable? | Dynamic values (computed at runtime) vs static values (should be CSS vars). Responsive adjustments. Performance implications. | React styling best practices, CSS-in-JS considerations, Mintlify constraints |
| When should a component override Mintlify styling? | Legitimate cases (Mintlify doesn't support the pattern) vs illegitimate (preference override of something Mintlify handles). How to distinguish. | Mintlify Considerations, existing override patterns |
| Should the repo adopt formal design tokens? | Formal token system vs informal CSS var vocabulary. Benefits vs overhead at this scale. | Design Tokens W3C community group, Lightning Design System, existing style.css as informal tokens |
| Responsive and mobile? | What Mintlify handles. What components handle themselves. Breakpoint conventions. | Mintlify responsive behaviour, existing responsive patterns |

### **Decide (collaborative)**

Evaluate options against:

- Creates visual consistency across the docs site?
- Works within what Mintlify provides and constrains?
- Contributor can style a component without guessing?
- Enforceable (pre-commit, code review)?
- Reduces the number of styling approaches, not adds another?

### **Success Criteria**

- [ ] CSS custom properties vocabulary documented — every token, its purpose, light/dark values
- [ ] Mintlify native styling capabilities and gaps documented
- [ ] Component styling rules defined — when to use vars, when inline is acceptable, what's forbidden
- [ ] Dark/light mode requirements defined
- [ ] Override patterns documented — when and how to override Mintlify
- [ ] Deprecated pattern migration path specified
- [ ] Design token decision made
- [ ] Every styling standard is enforceable or verifiable

### **D4: Component Development Standards**

**Goal:** Define what a well-built component looks like — the standards for props, composition, accessibility, error handling, and testing.

**Problem:** No shared standards for how components are built. Props naming is inconsistent. Composition patterns vary. Accessibility is ad hoc. There's no definition of "tested" or "complete."

**Output:** Component Development Standards document — props conventions, composition patterns, accessibility requirements, error handling, testing.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What are the props conventions? | Naming (camelCase, boolean prefixes, handler naming, size/variant patterns). Required vs optional signalling. Default value conventions. Passthrough/spread patterns. Children vs explicit props. | React community conventions, Storybook best practices, Polaris/Carbon/Material prop APIs, existing repo patterns |
| How do components compose? | With Mintlify globals (Card, Icon, Frame, Tabs). With other custom components. Wrapping vs extending. Import conventions. What works in MDX specifically? | Mintlify Considerations, Mintlify documentation, existing composition patterns |
| What accessibility level is appropriate? | ARIA per component type. Keyboard. Focus management. Semantic HTML. What's proportionate for a docs component library? | WAI-ARIA Authoring Practices, MDN accessibility guides, a11y documentation site examples |
| How should errors be handled? | Loading states. API failures. Missing data. Graceful degradation. | React error boundary patterns, progressive enhancement principles |
| What does "tested" mean? | Visual verification. Browser/theme testing. Snapshot testing. Performance. What's proportionate? | Storybook testing, Mintlify dev server, existing test patterns |

### **Decide (collaborative)**

Evaluate options against:

- Achievable by the current team?
- Works within Mintlify platform constraints?
- Enforceable (pre-commit, code review, generation script)?
- Improves contributor experience, not just adds process?
- Compatible with Styling Architecture (D3)?

### **Success Criteria**

- [ ] Props conventions specified — naming, defaults, required/optional, passthrough, children
- [ ] Composition rules specified — Mintlify globals, custom composition, import conventions
- [ ] Accessibility requirements specified — minimum per component type
- [ ] Error handling patterns specified
- [ ] Testing requirements specified — what "tested" means
- [ ] Every standard is enforceable or verifiable
- [ ] Standards compatible with Styling Architecture (D3)

### **D5: Documentation & Example Standards**

**Goal:** Define how components are documented — what a content author needs to see to find and use a component correctly.

**Problem:** Component documentation is inconsistent, incomplete, and spread across contradicting surfaces. There's no agreed standard for what "documented" means for a component.

**Output:** Documentation & Example Standards document — JSDoc format, props table format, example requirements, published docs structure.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What JSDoc fields are required? | @description, @param, @example, @author, @since. What's useful vs boilerplate? How do fields feed into generation? | JSDoc spec, Storybook docgen, existing patterns, generation script capabilities |
| What does a props table look like? | Column structure. Complex types, union types, callback signatures. Required flag convention. | Storybook ArgTypes, Mintlify ResponseField pattern, existing published MDX format |
| What makes a useful example? | Live example, code example, both? Minimum per component. What do content authors actually need? | Storybook stories, Mintlify component docs, existing examples/ pattern |
| What is the published docs structure? | One page per category? Per component? Navigation and discovery? | Existing published MDX pages, Storybook sidebar, design system documentation sites |
| How is deprecation documented? | What docs a deprecated component must carry. Migration path format. | Semantic versioning, design system deprecation patterns |

### **Decide (collaborative)**

Evaluate options against:

- Useful for content authors (find and use)?
- Useful for maintainers (understand and modify)?
- Generatable (script can produce or validate)?
- Sustainable (will be maintained, won't drift)?

### **Success Criteria**

- [ ] JSDoc template defined — required fields, format
- [ ] Props table format defined — columns, type notation, complex types
- [ ] Example requirements defined — what a complete example includes
- [ ] Published docs structure defined — pages, navigation, discovery
- [ ] Deprecation documentation format defined
- [ ] Relationship between JSDoc → registry → published docs explicit

## **Lifecycle & Governance**

*Spans all three parts. Defines how components move through states and who controls them.*

### **D6: Lifecycle & Governance Model**

**Goal:** Define the states a component can be in, how it transitions between them, who owns it, and what rules govern modification.

**Problem:** No lifecycle management. Components are either "there" or "not there." No concept of health status, deprecation, ownership, or change control beyond a blanket immutability rule.

**Output:** Lifecycle & Governance Model document — status values, transition rules, ownership model, immutability rules, deprecation process.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What lifecycle states should exist? | Active, deprecated, experimental, broken, draft, archived. What's useful vs overcomplicated? | INFRA-01 script statuses, npm lifecycle, design system lifecycle patterns, CNCF lifecycle labels |
| How does ownership work? | Per-file? Per-category? How does it map to CODEOWNERS and SOT-03? | SOT-03 Ownership Map, CODEOWNERS, INFRA-01 ownership, GitHub code review conventions |
| How should immutability work? | Blanket? Status-dependent? What's the override process? | Current pre-commit rule, design system versioning, semver for components |
| What is the deprecation process? | Timeline, documentation, migration path, consumer notification. | npm deprecation, design system sunset patterns, Polaris/Carbon deprecation guides |
| How does lifecycle connect to generation? | Does health status feed into published docs? Does the registry drive generation? | Current generation script, Storybook autodocs, existing overview |

### **Decide (collaborative)**

Evaluate options against:

- Proportionate to team size?
- Actionable (every status has clear entry/exit criteria)?
- Enforceable (hooks, CI, generation)?
- Compatible with INFRA-01 script governance model?

### **Success Criteria**

- [ ] Lifecycle states defined — each with meaning, entry criteria, exit criteria
- [ ] Transitions defined — what triggers each
- [ ] Ownership model defined — who owns what, assignment and transfer
- [ ] Immutability rules defined — what can be modified per state, override process
- [ ] Deprecation process defined — timeline, docs, migration, notification
- [ ] Every governance rule is enforceable or verifiable

## **Compiled Framework & Execution**

### **D7: Component Governance Framework (Compiled)**

**Goal:** Produce the single canonical document that a contributor reads to understand how components work in this repo.

**Output:** The **Component Governance Framework** — compiled from:

- Part 1: Classification & Purpose Model (D1)
- Part 2: Repo Structure & Documentation Architecture (D2)
- Part 3: Technical Design — Styling (D3), Development (D4), Documentation (D5)
- Lifecycle & Governance (D6)

One document. Self-contained.

### **Success Criteria**

- [ ] Single document covering all three parts plus lifecycle
- [ ] Content author can find the right component for their page type
- [ ] Contributor can build a new component that meets all standards
- [ ] Maintainer can assess health and lifecycle status
- [ ] AI agent can parse classification rules programmatically
- [ ] Self-contained with links to upstream dependencies for context

### **D8: Component Audit**

**Goal:** Classify every existing component against the framework. Identify gaps, misplacements, and migration actions.

**Output:** Complete classification table + gap report + migration action per component.

### **Success Criteria**

- [ ] Every exported component has all required metadata fields
- [ ] No UNKNOWN or unclassified entries
- [ ] Every gap between current state and framework target documented
- [ ] Every component has a migration action (KEEP / MOVE / SPLIT / MERGE / REMOVE)
- [ ] Framework refinements fed back to D7 if audit surfaces ambiguities

### **D9: Migration & Final State Plan**

**Goal:** Produce an ordered, actionable plan to move from current state to framework target.

**Output:** Batched migration plan with ordering, breaking-change assessment, and agent/human split.

### **Success Criteria**

- [ ] Every change from D8 has a migration task
- [ ] Tasks grouped into independently deployable batches
- [ ] Batches ordered with dependencies
- [ ] Breaking-change assessment per batch
- [ ] Each task classified: agent-ready / agent-assisted / human-required
- [ ] SOT-02 Decision Register updated with all component decisions

## **Exit Criteria**

- [ ] Classification & Purpose Model designed and agreed (D1)
- [ ] Repo Structure & Documentation Architecture designed and agreed (D2)
- [ ] Styling Architecture & Standards designed and agreed (D3)
- [ ] Component Development Standards designed and agreed (D4)
- [ ] Documentation & Example Standards designed and agreed (D5)
- [ ] Lifecycle & Governance Model designed and agreed (D6)
- [ ] Component Governance Framework compiled as single canonical document (D7)
- [ ] Every component audited against the framework (D8)
- [ ] Migration plan created with batches (D9)

# **ARCHIVED OLDComponent Governance Framework**

**Workstream:** Standalone **Status:** To Do **Depends on:** Page Taxonomy (SOT-00), Content Taxonomy, Composable Content Structure (UX Framework), Mintlify Considerations (Implementation Considerations) **Output:** A first-principles Component Governance Framework — the canonical reference for how components are classified, built, documented, and maintained in `snippets/components/`.

## **Purpose**

The component library has no governing framework. No classification model. No development standards. No lifecycle management. No canonical documentation. Components were created organically with no shared rules for what they are, where they go, how they're built, or how they're maintained.

This plan creates a Component Governance Framework from first principles. Each deliverable researches best practices, evaluates options against the project's context and constraints, and produces a design decision — collaboratively, not unilaterally. The framework is designed as if greenfield. Current repo state informs but does not constrain.

## **Upstream Dependencies**

These documents are already defined (or in progress) under the Master Report and feed into this framework. The component framework consumes them; it does not redefine them.

| **Document** | **Section** | **What it provides to this framework** |
| --- | --- | --- |
| Page Taxonomy | UX Framework & Taxonomy | The page purpose types (landing, overview, tutorial, how_to, concept, reference, faq, troubleshooting, changelog, glossary). Components map to these. |
| Content Taxonomy | UX Framework & Taxonomy | Content types and structural patterns per page type. Defines what content each page carries — components are the rendering layer for that content. |
| Composable Content Structure | UX Framework & Taxonomy | The broader reuse architecture. Defines the relationship between UI components (this framework), content snippets (MDX-in-MDX), data snippets, and generated content. This framework governs the UI component pattern only. |
| Mintlify Considerations | Implementation Considerations | Platform constraints, globally available components, MDX behaviour, import rules, styling limitations. The component framework must work within these constraints. |

## **Deliverables Overview**

| **#** | **Deliverable** | **What it produces** |
| --- | --- | --- |
| D1 | Classification Model | Category taxonomy, decision rules, compositional model, content-type mapping, per-component metadata schema |
| D2 | Component Development Standards | Props conventions, styling standards, composition patterns, accessibility requirements, error handling, testing requirements |
| D3 | Documentation & Example Standards | JSDoc conventions, props documentation format, example requirements, published docs structure |
| D4 | Lifecycle & Governance Model | Status values, transitions, ownership model, immutability rules, deprecation process |
| D5 | Target Structure & Architecture | Folder structure, naming conventions, documentation canonical home, registry format, generation pipeline |
| D6 | Component Governance Framework | Compiled canonical document from D1–D5 |
| D7 | Component Audit | Every component classified and assessed against the framework |
| D8 | Migration & Final State Plan | Ordered steps from current state to framework target |

## **D1: Classification Model**

**Goal:** Define how components are categorised, how a contributor determines which category a component belongs to, and what metadata every component carries.

**Problem:** There is no shared vocabulary for what kinds of components exist, no rules for where a component belongs, and no structured metadata for tracking component properties. Contributors place components by instinct. The result is overlapping categories, misplaced files, and no discoverability.

**Output:** Classification Model document — category taxonomy, decision rules, compositional tiers, content-type mapping, metadata schema.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| How should components be categorised? | Functional grouping (by what it does), structural grouping (by complexity), domain grouping (by where it's used), flat tagging (no folders, tags only). What works specifically for documentation component libraries vs product UI? | Atomic Design (Brad Frost), EightShapes (Nathan Curtis), Carbon (IBM), Polaris (Shopify), Material Design, Lightning (Salesforce), Diátaxis framework, INFRA-01 script categories (internal precedent) |
| How should compositional hierarchy be expressed? | Flat (all components equal), tiered (primitive → composite → pattern), nested (components contain components with explicit depth). Folders vs metadata vs both? | Atomic Design tiers, Storybook organisation patterns, Design Tokens community group |
| How should components map to content types? | Direct mapping (component X is for page type Y), affinity tags (component X works well on types Y and Z), no formal mapping (discovery by browsing). How do the Page Taxonomy and Content Taxonomy connect to component selection? | Page Taxonomy (SOT-00), Content Taxonomy, 03-page-purpose-and-structure Mintlify component guidance per page type |
| What metadata should each component carry? | What fields are essential vs overhead? What do established component registries track? How does this align with INFRA-01's per-script fields? | INFRA-01 script fields, Storybook metadata, design system registries, npm package metadata conventions |
| How does a contributor decide where a component belongs? | Decision trees, flowcharts, heuristic questions, lookup tables. What minimises ambiguity? | Design system contribution guides, component governance examples |
| Where does the component library boundary sit? | What's inside the governed library vs outside it? How does this relate to the Composable Content Structure's definition of content snippets and section-local content? | Composable Content Structure (UX Framework), Mintlify snippet conventions |

### **Decide (collaborative)**

For each question above, evaluate options against:

- Intuitive for content authors (primary consumers), not just engineers?
- Scales to ~80+ components without bureaucracy?
- Contributor can self-serve classification without asking someone?
- Connects to Page Taxonomy and Content Taxonomy?
- Enforceable by tooling (scripts, hooks, generation)?
- Works within Mintlify Considerations constraints?

### **Success Criteria**

- [ ] Category taxonomy defined — each category has a name, purpose, boundary, and decision rule
- [ ] Compositional model defined — how hierarchy is expressed and assigned
- [ ] Content-type mapping defined — components connected to Page Taxonomy types
- [ ] Metadata schema defined — fields, types, required vs optional
- [ ] Decision mechanism defined — a contributor can classify any component unambiguously
- [ ] Library boundary defined — what's in vs out, aligned with Composable Content Structure
- [ ] Every decision has documented rationale

## **D2: Component Development Standards**

**Goal:** Define what a well-built component looks like. The standards a component must meet to be accepted into the library.

**Problem:** No shared standards for how components are built. Props naming is inconsistent. Styling approaches vary (CSS vars, ThemeData, hardcoded values). Accessibility is ad hoc. There's no definition of "tested" or "complete." Contributors have no reference for how to build a component correctly.

**Output:** Component Development Standards document — props conventions, styling approach, composition patterns, accessibility requirements, error handling, testing.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What are the props conventions? | Naming (camelCase, boolean prefixes, handler naming, size/variant patterns). Required vs optional signalling. Default value conventions. Passthrough/spread patterns. Children vs explicit props. | React community conventions, Storybook best practices, Polaris/Carbon/Material prop APIs, existing repo component patterns |
| What is the styling approach? | CSS custom properties vocabulary and usage. Dark/light mode requirements. When inline styles are acceptable. Responsive behaviour expectations. What does Mintlify support and constrain? | Mintlify Considerations, existing style.css, CSS custom properties spec, design token conventions |
| How do components compose? | With Mintlify globals (Card, Icon, Frame, Tabs). With other custom components. Wrapping vs extending. Import conventions. What works in MDX specifically? | Mintlify Considerations, Mintlify documentation, existing composition patterns in repo |
| What accessibility level is appropriate? | ARIA per component type. Keyboard. Focus management. Semantic HTML. What's proportionate for a docs component library vs a product UI? | WAI-ARIA Authoring Practices, MDN accessibility guides, a11y documentation site examples |
| How should errors be handled? | Loading states. API failures. Missing data. Graceful degradation. What should a user see when a data-dependent component fails? | React error boundary patterns, progressive enhancement principles |
| What does "tested" mean? | Visual verification. Browser/theme testing. Snapshot testing. Performance. What's proportionate? | Storybook testing, Mintlify dev server testing, existing test patterns in repo |

### **Decide (collaborative)**

For each question above, evaluate options against:

- Achievable by the current team (not aspirational)?
- Works within Mintlify platform constraints?
- Enforceable (pre-commit, code review, generation script)?
- Improves contributor experience, not just adds process?
- Consistent with existing style guide where applicable?

### **Success Criteria**

- [ ] Props conventions specified — naming, defaults, required/optional, passthrough, children
- [ ] Styling standards specified — CSS approach, theme integration, allowed/forbidden patterns
- [ ] Composition rules specified — Mintlify globals, custom component composition, import conventions
- [ ] Accessibility requirements specified — minimum per component type
- [ ] Error handling patterns specified
- [ ] Testing requirements specified — what "tested" means
- [ ] Every standard is enforceable or verifiable (not just aspirational)

## **D3: Documentation & Example Standards**

**Goal:** Define how components are documented. What a content author needs to see to find and use a component correctly.

**Problem:** Component documentation is inconsistent, incomplete, and spread across three surfaces that contradict each other. 8 of 37 files lack JSDoc. Published MDX pages have large sections commented out. Props tables vary in format. There's no agreed standard for what "documented" means for a component.

**Output:** Documentation & Example Standards document — JSDoc format, props table format, example requirements, published docs structure.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What JSDoc fields are required? | @description, @param, @example, @author, @since. What's useful vs boilerplate? How do fields feed into generation? | JSDoc spec, Storybook docgen, existing JSDoc patterns in repo, generation script capabilities |
| What does a props table look like? | Column structure. How to document complex types, union types, callback signatures. Required flag convention. | Storybook ArgTypes, Mintlify ResponseField pattern, existing published MDX page format |
| What makes a useful example? | Live example, code example, both? Minimum per component. How does the existing examples/ convention work? What do content authors actually need? | Storybook stories, Mintlify component docs, existing examples/ pattern |
| What is the published docs structure? | One page per category? One page per component? How do navigation, search, and discovery work? | Existing published MDX pages, Storybook sidebar patterns, design system documentation sites |
| How is deprecation documented? | What a deprecated component's docs must carry. Migration path format. Replacement guidance. | Semantic versioning, design system deprecation patterns |

### **Decide (collaborative)**

For each question above, evaluate options against:

- Useful for content authors (who need to find and use components)?
- Useful for maintainers (who need to understand and modify components)?
- Generatable (can a script produce or validate it)?
- Sustainable (will it be maintained, or will it drift like the current docs)?

### **Success Criteria**

- [ ] JSDoc template defined — required fields, format, example
- [ ] Props table format defined — columns, type notation, complex type handling
- [ ] Example requirements defined — what a complete example includes
- [ ] Published docs structure defined — page structure, navigation, discovery mechanism
- [ ] Deprecation documentation format defined
- [ ] Relationship between JSDoc → registry → published docs is explicit

## **D4: Lifecycle & Governance Model**

**Goal:** Define the states a component can be in, how it transitions between them, who owns it, and what rules govern modification.

**Problem:** No lifecycle management. Components are either "there" or "not there." No concept of health status, deprecation, ownership, or change control beyond a blanket immutability rule that treats all components the same regardless of state.

**Output:** Lifecycle & Governance Model document — status values, transition rules, ownership model, immutability rules, deprecation process.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| What lifecycle states should exist? | Active, deprecated, experimental, broken, draft, archived. What's useful vs overcomplicated? How does INFRA-01 handle script lifecycle? | INFRA-01 script statuses, npm package lifecycle, design system component lifecycle patterns, CNCF lifecycle labels |
| How does ownership work? | Per-file? Per-category? Per-section? How does it map to CODEOWNERS and SOT-03? Who can modify what? | SOT-03 Ownership Map, CODEOWNERS, INFRA-01 ownership patterns, GitHub code review conventions |
| How should immutability work? | Blanket (all components immutable)? Status-dependent (only active components)? What's the override process? | Current pre-commit immutability rule, design system versioning patterns, semver for components |
| What is the deprecation process? | Timeline, documentation requirements, migration path, consumer notification. How are imports rewritten? | npm deprecation, design system sunset patterns, Polaris/Carbon deprecation guides |
| How does this connect to the generation pipeline? | Does the registry drive documentation generation? Does health status feed into published docs? | Current generation script, Storybook autodocs, existing auto-generated overview |

### **Decide (collaborative)**

For each question above, evaluate options against:

- Proportionate to team size (not enterprise governance for a small team)?
- Actionable (every status has clear entry/exit criteria)?
- Enforceable (hooks, CI, generation script)?
- Compatible with INFRA-01 script governance model?

### **Success Criteria**

- [ ] Lifecycle states defined — each with meaning, entry criteria, exit criteria
- [ ] Transitions defined — what triggers each transition
- [ ] Ownership model defined — who owns what, how ownership is assigned and transferred
- [ ] Immutability rules defined — what can be modified in each state, override process
- [ ] Deprecation process defined — timeline, documentation, migration, notification
- [ ] Every governance rule is enforceable or verifiable

## **D5: Target Structure & Architecture**

**Goal:** Define the ideal folder structure, naming conventions, documentation architecture, and component registry format.

**Problem:** The current folder structure grew organically and doesn't reflect any principled classification. Documentation is split across three surfaces that contradict each other. There's no machine-readable component registry. The generation script produces an inventory but not governance data.

**Output:** Target Structure & Architecture document — folder layout, naming conventions, canonical documentation home, registry format, generation pipeline.

### **Research & Evaluate**

| **Question** | **What to research** | **Sources to evaluate** |
| --- | --- | --- |
| Should folders = categories? | One folder per category, or is classification metadata-only with a flat/different folder structure? Pros/cons of each. | Design system folder conventions, monorepo component organisation, Mintlify snippet conventions |
| What are the naming conventions? | File naming (kebab-case, camelCase, PascalCase). Export naming. One component per file or multiple? | React community conventions, existing repo patterns, Mintlify import requirements |
| Where is the canonical documentation home? | Published MDX pages? Auto-generated? Per-folder READMEs? Storybook-style? What's the single source of truth? | Current three documentation surfaces, Storybook, design system documentation approaches |
| What is the component registry? | JSON manifest? Generated from JSDoc? Manually maintained? What fields? How does it feed generation? | package.json metadata, Storybook manifest, design system registries |
| How does the generation pipeline work? | What is auto-generated vs manually authored? What's the input (registry? JSDoc? source code AST?)? What's the output? | Current generation script, Storybook autodocs, TypeDoc, JSDoc-to-docs pipelines |
| How does this connect to Mintlify? | Import path conventions. What Mintlify constrains about folder structure and file placement. | Mintlify Considerations, Mintlify snippet documentation, existing repo structure |

### **Decide (collaborative)**

For each question above, evaluate options against:

- Does the structure make components discoverable for content authors?
- Is the documentation architecture sustainable (won't drift)?
- Does the registry format support automation (generation, validation, enforcement)?
- Does it work within Mintlify platform constraints?

### **Success Criteria**

- [ ] Folder structure defined — every folder has a stated purpose and placement rule
- [ ] Naming conventions defined — files, exports, consistent and enforceable
- [ ] Canonical documentation home decided — one source of truth, all others derived or deprecated
- [ ] Registry format defined — fields, location, how it's maintained (manual vs generated)
- [ ] Generation pipeline defined — inputs, outputs, trigger conditions
- [ ] All conventions work within Mintlify constraints

## **D6: Component Governance Framework (Compiled)**

**Goal:** Produce the single canonical document that a contributor reads to understand how components work in this repo.

**Problem:** The framework doesn't exist. This deliverable creates it.

**Output:** The **Component Governance Framework** — compiled from D1 (classification), D2 (development standards), D3 (documentation standards), D4 (lifecycle), and D5 (structure). One document. Self-contained. A contributor can follow it to classify a component, build a new one, document one, or understand its lifecycle — without needing any other reference.

### **Success Criteria**

- [ ] Single document covering classification, development, documentation, lifecycle, and structure
- [ ] A content author can find the right component for their page type
- [ ] A contributor can build a new component that meets all standards
- [ ] A maintainer can assess a component's health and lifecycle status
- [ ] An AI agent can parse the classification rules programmatically
- [ ] No external document required to understand the framework (self-contained, with links to upstream dependencies for context)

## **D7: Component Audit**

**Goal:** Classify every existing component against the framework from D6. Identify gaps, misplacements, and migration actions.

**Problem:** Components have never been formally classified. Without an audit against the framework, the framework is theoretical — it needs to be applied to prove it works and to identify what needs to change.

**Output:** Complete classification table (every component with all metadata fields populated) + gap report + migration action per component.

### **Success Criteria**

- [ ] Every exported component has a row with all required metadata fields
- [ ] No UNKNOWN or unclassified entries
- [ ] Every gap between current state and framework target documented
- [ ] Every component has a migration action (KEEP / MOVE / SPLIT / MERGE / REMOVE)
- [ ] Framework refinements fed back to D6 if the audit surfaces ambiguities

## **D8: Migration & Final State Plan**

**Goal:** Produce an ordered, actionable plan to move from current state to the framework's target state.

**Problem:** The audit (D7) identifies what needs to change. This deliverable sequences the changes into deployable batches with breaking-change assessment.

**Output:** Batched migration plan with dependency ordering, breaking-change assessment per batch, and agent-ready vs human-required classification per task.

### **Success Criteria**

- [ ] Every change from D7 has a migration task
- [ ] Tasks grouped into independently deployable batches
- [ ] Batches ordered with dependencies
- [ ] Breaking-change assessment per batch (pages affected, import paths that change, rollback path)
- [ ] Each task classified: agent-ready / agent-assisted / human-required
- [ ] SOT-02 Decision Register updated with all component decisions

## **Exit Criteria**

- [ ] Classification model designed from first principles and agreed (D1)
- [ ] Development standards defined from best practices research and agreed (D2)
- [ ] Documentation and example standards defined and agreed (D3)
- [ ] Lifecycle and governance model defined and agreed (D4)
- [ ] Target structure and architecture defined and agreed (D5)
- [ ] Component Governance Framework compiled as single canonical document (D6)
- [ ] Every component audited against the framework (D7)
- [ ] Migration plan created with batches (D8)