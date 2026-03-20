%%TOC_START%%

**Outline: Component Governance Framework**

# **Component Governance PRD**

1. **Component PRD**
  1. 𝅴        1. Summary
  1.         2. Contacts
  1.         3. Background
    1.    *         3.1 Context*
    1. *            3.2 Why now?*
    1. *            3.3 What has changed?*
    1. *            3.4 Best practices research*
  1.         4. Objective
    1. *            4.1 Purpose statement*
    1. *            4.2 Why it matters*
    1. *            4.3 Alignment*
    1. *            4.4 Key results*
  1.         5. Users
    1. *            5.1 Content Authors*
    1. *            5.2 Component Maintainers*
  1. *            5.3 AI Agents*

        6. Value Proposition

*            6.1 What problems does this solve?*

*            6.2 What do users gain?*

        7. Solution

*            7.1 Framework components*

*            7.2 Classification model (from first-principles analysis)*

*            7.3 Content-type affinity mapping*

*            7.4 Compositional tier tags*

*            7.5 Governance fields*

*            7.6 Assumptions*

        8. Release

*            8.1 Phased delivery*

*            8.2 What goes in v1 vs future*

*            8.3 Dependencies*

        9. Open Questions

        Appendix: Source Material

**Component Plan**

    Component Governance Framework

        Purpose

        Upstream Dependencies

        Framework Structure

        Deliverables Overview

        Part 1: Classification & Purpose Model

*            D1: Classification & Purpose Model*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        Part 2: Repo Structure

*            D2: Repo Structure & Documentation Architecture*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        Part 3: Technical Design

*            D3: Styling Architecture & Standards*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

*            D4: Component Development Standards*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

*            D5: Documentation & Example Standards*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        Lifecycle & Governance

*            D6: Lifecycle & Governance Model*

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        Compiled Framework & Execution

*            D7: Component Governance Framework (Compiled)*

*            Success Criteria*

*            D8: Component Audit*

*            Success Criteria*

*            D9: Migration & Final State Plan*

*            Success Criteria*

        Exit Criteria

    ARCHIVED OLDComponent Governance Framework

        Purpose

        Upstream Dependencies

        Deliverables Overview

        D1: Classification Model

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        D2: Component Development Standards

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        D3: Documentation & Example Standards

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        D4: Lifecycle & Governance Model

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        D5: Target Structure & Architecture

*            Research & Evaluate*

*            Decide (collaborative)*

*            Success Criteria*

        D6: Component Governance Framework (Compiled)

*            Success Criteria*

        D7: Component Audit

*            Success Criteria*

        D8: Migration & Final State Plan

*            Success Criteria*

        Exit Criteria

**Component Framework**

        Contents

    Component Classification

        Classification & Purpose Model

*            1. Purpose*

*            2. Upstream Dependencies*

*            3. Decisions Already Made (Upstream)*

*            4. Category Taxonomy*

*                4.1 Primitives*

*                4.2 Layout*

*                4.3 Content*

*                4.4 Data*

*                4.5 Page Structure*

*            5. Compositional Model*

*            6. Per-Component Metadata Schema*

*                6.1 Schema Definition*

*                6.2 JSDoc Template*

*                6.3 Validation Rules*

*            7. Decision Tree*

*                7.1 Question Order Rationale*

*                7.2 Edge Cases*

*            8. Library Boundary*

*                8.1 Inside the Governed Library*

*                8.2 Outside the Governed Library*

*                8.3 Mintlify Platform Constraint*

*            9. Content-Type Mapping*

*                9.1 Category-Level Affinities (Defaults)*

*                9.2 Per-Component Assignment*

*            10. Decision Register*

*            11. Success Criteria*

*            12. Open Items for Downstream Deliverables*

    Component Repo Structure

        Repo Structure & Documentation Architecture

*            1. Purpose*

*            2. Constraints from D1*

*            3. Folder Structure*

*                3.1 Target Layout*

*                3.2 Folder Rules*

*                3.3 Validation Rule*

*            4. Naming Conventions*

*                4.1 File Naming*

*                4.2 Export Naming*

*                4.3 Example File Naming*

*            5. File Granularity*

*                5.1 Convention*

*                5.2 Grouping Rules*

*                5.3 JSDoc Placement*

*                5.4 Shared Internal Helpers*

*            6. Canonical Documentation Home*

*                6.1 Model*

*                6.2 Three Surfaces*

*                6.3 Data Flow*

*                6.4 Deprecated Surface*

*                6.5 Published MDX Page Structure*

*            7. Registry Format*

*                7.1 Location*

*                7.2 Schema*

*                7.3 Additional Generated Fields*

*                7.4 JSON Schema Validation*

*            8. Generation Pipeline*

*                8.1 Script*

*                8.2 Trigger*

*                8.3 Input → Process → Output*

*                8.4 Relationship to Existing Scripts*

*            9. Examples Convention*

*                9.1 Location*

*                9.2 File Format*

*                9.3 Requirements*

*                9.4 Consumption*

*            10. Import Path Conventions*

*                10.1 Convention*

*                10.2 Platform Constraint*

*                10.3 Nested Import Restriction*

*                10.4 Import Path in Registry*

*            11. Decision Register*

*            12. Success Criteria*

*            13. Open Items for Downstream Deliverables*

    Component Style Architecture

        Styling Architecture & Standards

*            1. Purpose*

*            2. Style System Architecture*

*                2.1 Three-Layer Hierarchy*

*                2.2 Rules of Authority*

*            3. CSS Custom Properties Vocabulary*

*                3.1 Naming Convention*

*                3.2 Token Categories*

*                3.3 Light/Dark Pairs*

*                3.4 Rationalisation Mandate*

*            4. Forbidden Patterns*

*                4.1 Banned (Pre-commit Blocks)*

*                4.2 Advisory (Code Review Flags)*

*                4.3 Pre-commit Hook Specification*

*            5. Dark/Light Mode*

*                5.1 Approach*

*                5.2 Rules*

*                5.3 Testing Requirement*

*            6. Inline Style Rules*

*                6.1 Policy*

*                6.2 Common Acceptable Uses*

*                6.3 Common Flagged Uses*

*            7. Design Tokens*

*                7.1 Decision*

*                7.2 Rationalisation Process*

*                7.3 Token Reference Table Format*

*            8. Mintlify Override Registry*

*                8.1 Policy*

*                8.2 Registry Format*

*                8.3 Example Entries*

*                8.4 Review Cadence*

*            9. Responsive & Mobile*

*                9.1 Policy*

*                9.2 Breakpoints*

*            10. Decision Register*

*            11. Success Criteria*

*            12. Open Items for Downstream Deliverables*

    Component Technical Framework

        Component Development Standards

*            1. Purpose*

*            2. Upstream Constraints*

*            3. Props Conventions*

*                3.1 The Seven Rules*

*                3.2 Props Template*

*                3.3 No TypeScript / No PropTypes*

*            4. Composition Patterns*

*                4.1 Core Rule*

*                4.2 How Composition Works*

*                4.3 Same-File References*

*                4.4 Composition with Mintlify Globals*

*                4.5 Tier Reframing*

*            5. Accessibility Requirements*

*                5.1 Approach*

*                5.2 All Components (Presentational Baseline)*

*                5.3 Interactive Components (ARIA Requirements)*

*                5.4 Keyboard Requirements for Interactive Components*

*            6. Error Handling*

*                6.1 Critical Platform Constraint*

*                6.2 Defensive Rendering Rules*

*                6.3 Defensive Rendering Template*

*                6.4 Per-Category Error Patterns*

*            7. Testing Requirements*

*                7.1 Three Testing Tiers*

*                7.2 Tier 1: Visual Verification*

*                7.3 Tier 2: Browser Test Coverage*

*                7.4 Tier 3: Component Unit Tests*

*                7.5 Test Infrastructure*

*            8. Component Checklist*

*            9. Decision Register*

*            10. Success Criteria*

*            11. Open Items for Downstream Deliverables*

    Documentation Standard

        Documentation & Example Standards

*            1. Purpose*

*            2. Documentation Architecture (Recap from D2)*

*            3. JSDoc Standard*

*                3.1 Full Template*

*                3.2 Field Groups*

*                3.3 @param Format*

*                3.4 @example Format*

*                3.5 Validation Rules (Extension of D1)*

*            4. Props Table Format*

*                4.1 Standard 5-Column Table*

*                4.2 Generation Rules*

*                4.3 Complex Types*

*            5. Example Requirements*

*                5.1 Location and Format*

*                5.2 What an Example Must Contain*

*                5.3 Rules*

*                5.4 Relationship to JSDoc @example*

*            6. Published Docs Structure*

*                6.1 Page Layout*

*                6.2 Category Page Internal Structure*

*                6.3 Generation Pipeline*

*                6.4 OpenRouter Integration*

*                6.5 Template Fallback Format*

*            7. Deprecation Documentation*

*                7.1 JSDoc Format*

*                7.2 Published Docs Rendering*

*                7.3 Registry Representation*

*                7.4 Validation*

*            8. Decision Register*

*            9. Success Criteria*

*            10. Open Items for Downstream Deliverables*

    Component Lifecycle

        Lifecycle & Governance Model

*            1. Purpose*

*            2. Context*

*                2.1 Current State*

*                2.2 Precedent*

*            3. Lifecycle States*

*                3.1 State Definitions*

*                3.2 Entry and Exit Criteria*

*                3.3 State Distribution (Current Estimate)*

*            4. State Transitions*

*                4.1 Model*

*                4.2 Common Transition Paths*

*                4.3 Transition Tracking*

*            5. Ownership Model*

*                5.1 Category-Level Ownership*

*                5.2 Ownership Responsibilities*

*                5.3 Ownership Transfer*

*                5.4 Community Ownership Context*

*            6. Modification Rules*

*                6.1 Policy*

*                6.2 Copilot Instructions Update*

*                6.3 What Triggers Review Attention*

*            7. Deprecation Process*

*                7.1 Trigger*

*                7.2 Steps*

*                7.3 Usage-Gated Removal*

*                7.4 Removal Execution*

*            8. Lifecycle and Generation Integration*

*                8.1 Registry Fields*

*                8.2 Published Docs Rendering by Status*

*                8.3 Audit Integration*

*            9. Decision Register*

*            10. Success Criteria*

*            11. Open Items for Downstream Deliverables*

**References**

    Governance Document

        Component Governance Framework

*            Quick Start*

*                Find a component*

*                Use a component*

*                Decide which category*

*                Build a new component*

*                Component checklist (full)*

*            1. Classification & Purpose Model*

*                1.1 Category Taxonomy*

*                1.2 Decision Tree*

*                1.3 Compositional Tiers*

*                1.4 Library Boundary*

*                1.5 Content Affinity*

*            2. Repo Structure & Documentation Architecture*

*                2.1 Folder Layout*

*                2.2 Naming Conventions*

*                2.3 File Granularity*

*                2.4 Import Paths*

*                2.5 Documentation Architecture*

*                2.6 Registry*

*            3. Styling Architecture & Standards*

*                3.1 Three-Layer Hierarchy*

*                3.2 Token Namespace*

*                3.3 Banned Patterns (Pre-commit Blocks)*

*                3.4 Advisory Patterns (Code Review Flags)*

*                3.5 Dark/Light Mode*

*                3.6 Mintlify Override Registry*

*            4. Component Development Standards*

*                4.1 Props Conventions (7 Rules)*

*                4.2 Composition*

*                4.3 Accessibility*

*                4.4 Error Handling (Mandatory)*

*                4.5 Testing (Three Tiers)*

*            5. Documentation & Example Standards*

*                5.1 JSDoc Template*

*                5.2 Metadata Schema (14 Fields, All Required)*

*                5.3 Props Table Format (Published Docs)*

*                5.4 Examples*

*                5.5 Published Docs Generation*

*                5.6 Deprecation*

*            6. Lifecycle & Governance*

*                6.1 Lifecycle States*

*                6.2 Transitions*

*                6.3 Ownership*

*                6.4 Modification Rules*

*                6.5 Deprecation & Removal*

*            7. Enforcement Summary*

*            8. Generation Pipeline*

*                8.1 Registry Generation*

*                8.2 Published Docs Generation*

*            9. Decision Register (All 33 Decisions)*

*                D1: Classification & Purpose Model*

*                D2: Repo Structure & Documentation Architecture*

*                D3: Styling Architecture & Standards*

*                D4: Component Development Standards*

*                D5: Documentation & Example Standards*

*                D6: Lifecycle & Governance Model*

*            10. Upstream Dependencies*

*            11. Open Items (D8 Audit + D9 Migration)*

%%TOC_END%%