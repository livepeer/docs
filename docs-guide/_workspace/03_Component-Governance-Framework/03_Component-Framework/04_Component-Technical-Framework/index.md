# **Component Development Standards**

**Deliverable:** D4 — Component Governance Framework, Part 3 (Technical Design) **Repository:** `livepeer/docs`, `docs-v2` branch **Scope:** How components are built — props, composition, accessibility, error handling, testing **Platform:** Mintlify (MDX-based) **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** COMPLETE **Depends on:** D1 (Classification), D2 (Repo Structure), D3 (Styling)

## **1. Purpose**

This document defines what a well-built component looks like. It covers props conventions, composition patterns, accessibility requirements, error handling, and testing standards.

It works alongside D3 (Styling) to complete the technical design. Together, D3 and D4 answer: "How do I build a component that meets all the framework's standards?"

## **2. Upstream Constraints**

| **Source** | **Constraint** |
| --- | --- |
| D2 | PascalCase exports, arrow function syntax, camelCase files |
| D2 | No cross-file imports between component .jsx files (Mintlify platform constraint) |
| D2 | Full explicit import paths in MDX |
| D3 | Colours via var(--lp-color-*) tokens only |
| D3 | No ThemeData, no hardcoded hex, no !important |
| D3 | Dark/light mode via CSS tokens + Tailwind dark: utility |
| Mintlify | Nested imports not supported — MDX page must import all components directly |
| Mintlify | Arrow function syntax required for snippet exports (function keyword not supported) |
| Mintlify | No platform-level error boundary — a component crash takes down the entire page |

## **3. Props Conventions**

Seven rules govern how props are named, typed, and defaulted.

### **3.1 The Seven Rules**

| **#** | **Rule** | **Convention** | **Example** |
| --- | --- | --- | --- |
| 1 | camelCase prop names | All props use camelCase | iconSize, showTitle, contentType |
| 2 | Boolean props use is/has prefix | Positive naming only — never noX or hideX | isCompact, hasIcon, isExpanded — not compact, noIcon, hidden |
| 3 | Handler props use on prefix | Event callbacks follow React convention | onClick, onToggle, onSearch |
| 4 | Defaults in destructuring | Default values declared in the parameter destructuring | ({ variant = 'default', size = 'md' }) => ... |
| 5 | children for slot content, explicit props for data | If a component wraps arbitrary JSX, use children. If it takes structured data, use named props. | <BorderedBox>{children}</BorderedBox> vs <BlogCard title="..." date="..." /> |
| 6 | Spread last | If passing through props, spread goes last to avoid overwriting explicit props | `<div className={styles} {...rest}>` — never `<div {...rest} className={styles}>` |
| 7 | Required props have no default; optional props always have defaults | The destructuring signature is self-documenting | ({ href, title, icon = null, isCompact = false }) => ... — href and title are required (no default), icon and isCompact are optional |

### **3.2 Props Template**

### **3.3 No TypeScript / No PropTypes**

The library uses `.jsx` (not `.tsx`). Mintlify does not support TypeScript in snippet files. PropTypes are not used — the destructuring signature with defaults is the type documentation. Formal type information is captured in JSDoc `@param` tags (defined in D5).

## **4. Composition Patterns**

### **4.1 Core Rule**

**No inter-component composition.** Components are fully standalone. No `.jsx` component file imports from another `.jsx` component file. All composition happens at the MDX page level.

This is a Mintlify platform constraint, not a design choice.

### **4.2 How Composition Works**

The MDX page is the composer. Content authors combine components by nesting them in markup:

### **4.3 Same-File References**

Components co-located in the same file may reference each other — they share scope, no import needed:

In MDX, the author imports and composes both:

### **4.4 Composition with Mintlify Globals**

Mintlify globals (`Card`, `Tabs`, `Accordion`, `Steps`, `Frame`, `Note`, etc.) are available in MDX without import. Custom components can be nested inside Mintlify globals and vice versa — at the MDX page level:

Custom components must not assume they will be wrapped in a specific Mintlify global. They must render correctly whether standalone or inside a Card, Frame, Accordion, etc.

### **4.5 Tier Reframing**

The `@tier` metadata tag (primitive / composite / pattern) describes the component's **role in MDX-level composition**, not internal dependencies:

| **Tier** | **Meaning (reframed)** |
| --- | --- |
| primitive | Standalone — used independently, typically solves one visual need |
| composite | Designed to work alongside other components — a content author typically uses it with 1–2 other components |
| pattern | Orchestrates a page section — a content author uses this as the backbone of a major page area (e.g. portal hero, frame-mode header) |

## **5. Accessibility Requirements**

### **5.1 Approach**

Semantic HTML baseline for all components. ARIA attributes for the ~8 interactive components. Mintlify handles accessibility for its own built-in globals (WCAG 2.1 AA).

### **5.2 All Components (Presentational Baseline)**

Every component, regardless of category or interactivity, must meet these requirements:

| **Requirement** | **Rule** |
| --- | --- |
| Semantic HTML | Use correct elements: `<button>` not `<div onClick>`, `<table>` not `<div>` grids, `<nav>` for navigation, `<section>` for sections |
| Heading hierarchy | Frame-mode heading components (H1–H6) render the correct `<h1>`–`<h6>` element. Never skip levels. |
| Image alt text | Image and LinkImage components require an alt prop. Default to empty string (alt="") for decorative images, descriptive text for informational. |
| Link purpose | GotoLink, GotoCard, DoubleIconLink, LinkArrow must have descriptive link text — not "click here". |
| Colour not sole indicator | Information must not be conveyed by colour alone (enforced by D3 token system, but components must also use icons, text, or patterns alongside colour). |

### **5.3 Interactive Components (ARIA Requirements)**

Components with interactive behaviour must additionally meet:

| **Component** | **ARIA requirements** |
| --- | --- |
| SearchTable | role="search" on search container, aria-label on input, aria-live="polite" on results region |
| CardCarousel | role="region", aria-label, aria-roledescription="carousel", pagination controls keyboard-operable (arrow keys), aria-current on active page |
| ScrollBox | tabIndex="0" for keyboard scrolling (already handled by FocusableScrollRegions utility), aria-label describing content |
| DownloadButton | Render as `<button>` or `<a>` with download attribute, aria-label describing what is downloaded |
| CopyText | `<button>` for the copy action, aria-label="Copy to clipboard", aria-live="polite" for success feedback |
| ShowcaseCards | Filter controls have aria-label, results region has aria-live="polite" |
| FocusableScrollRegions | Already an a11y utility — maintain and extend as needed |

### **5.4 Keyboard Requirements for Interactive Components**

| **Requirement** | **Rule** |
| --- | --- |
| Focusable | All interactive elements reachable via Tab key |
| Operable | All actions triggerable via Enter or Space |
| Dismissable | Any expanded/open state closeable via Escape |
| Visible focus | Focus indicators visible (use Mintlify/Tailwind defaults, don't suppress outline) |

## **6. Error Handling**

### **6.1 Critical Platform Constraint**

Mintlify has no built-in error boundary per custom component. A runtime error in any custom component crashes the entire page. **Defensive rendering is mandatory, not optional.**

### **6.2 Defensive Rendering Rules**

Every component must follow these rules. No exceptions.

| **#** | **Rule** | **Implementation** |
| --- | --- | --- |
| 1 | Null-safe prop access | All prop access uses optional chaining or default values. Never assume a prop is present. |
| 2 | Guard required props | If a required prop is missing, return null and log console.warn. Do not attempt to render. |
| 3 | Guard array operations | `(items ?? []).map(...)` or `{items && items.map(/* ... */)}`. Never call `.map()` on a potentially undefined value. |
| 4 | Guard data sources | Data category components check whether their data source exists and has the expected shape before rendering. |
| 5 | Try-catch for complex logic | Components with computed values, data transformation, or dynamic rendering wrap logic in try-catch. |
| 6 | Console.warn on degradation | When a component degrades (returns null or fallback), it logs console.warn('[ComponentName] reason'). |
| 7 | Never throw | Components never throw errors. They catch internally and degrade. The page must not break. |

### **6.3 Defensive Rendering Template**

### **6.4 Per-Category Error Patterns**

| **Category** | **Primary error risk** | **Defensive pattern** |
| --- | --- | --- |
| Primitives | Missing icon name, missing text | Default to empty/null render |
| Layout | Missing children | Render empty container or null |
| Content | Missing code string, invalid URL, missing embed source | Return null with console.warn |
| Data | Pipeline data missing, schema mismatch, API timeout | Check data existence and shape before render; return null on failure |
| Page Structure | Missing title, missing hero image | Render degraded version (text without image) or null |

## **7. Testing Requirements**

### **7.1 Three Testing Tiers**

Every component must pass all three tiers to be considered "tested."

| **Tier** | **What it covers** | **How it runs** | **Scope** |
| --- | --- | --- | --- |
| Tier 1: Visual verification | Renders correctly in light and dark mode | Manual in mintlify dev | All components |
| Tier 2: Browser test coverage | Pages using the component render without errors | CI — test-v2-pages.js, test-all-pages-browser.js | All components used on ≥1 page |
| Tier 3: Component unit tests | Props handling, defensive rendering, edge cases | CI — test runner, tests/unit/components/ | All components |

### **7.2 Tier 1: Visual Verification**

Manual check during development and during the D8 audit:

| **Check** | **Method** |
| --- | --- |
| Renders in light mode | Visual inspection in mintlify dev |
| Renders in dark mode | Toggle theme, visual inspection |
| Responsive behaviour | Resize browser to mobile/tablet/desktop widths |
| No visual regressions | Compare against expected appearance |

### **7.3 Tier 2: Browser Test Coverage**

Leverages existing CI infrastructure:

| **Check** | **Script** | **What it catches** |
| --- | --- | --- |
| Page renders without error | test-v2-pages.js | Component crashes that break the page (the critical Mintlify failure mode) |
| Page renders in headless browser | test-all-pages-browser.js | Render errors, missing imports, undefined references |

### **7.4 Tier 3: Component Unit Tests**

New test directory: `tests/unit/components/`. One test file per source file (e.g. `tests/unit/components/primitives/divider.test.js` for `snippets/components/primitives/divider.jsx`).

**Required test cases per component:**

| **Test case** | **What it verifies** |
| --- | --- |
| Renders with valid props | Happy path — component returns JSX, not null |
| Renders with no props | Default values work, nothing crashes |
| Renders with null/undefined data | Defensive rendering returns null, not a thrown error |
| Required props missing | Returns null and logs console.warn |
| Invalid prop types | Doesn't crash (e.g. string where array expected) |

**Additional test cases for interactive components:**

| **Test case** | **What it verifies** |
| --- | --- |
| Keyboard operability | Tab focuses, Enter/Space activates, Escape dismisses |
| ARIA attributes present | Required role, aria-label, aria-expanded etc. in rendered output |

**Additional test cases for Data components:**

| **Test case** | **What it verifies** |
| --- | --- |
| Data source missing | Returns null, logs console.warn |
| Data source malformed | Returns null, doesn't crash |
| Data source empty array | Renders empty state or null gracefully |

### **7.5 Test Infrastructure**

| **Aspect** | **Decision** |
| --- | --- |
| Test runner | Lightweight — Node.js test runner or a minimal framework compatible with JSX |
| Test location | tests/unit/components/{category}/{file}.test.js |
| Naming | Mirror the source file: divider.test.js tests divider.jsx |
| CI integration | Run as part of tests/run-all.js |
| Coverage target | Every exported component has at least the five core test cases |

## **8. Component Checklist**

A contributor can use this checklist to verify a component meets all D4 standards before committing.

## **9. Decision Register**

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | Props conventions | Standard — 7 rules | Minimal 4; standard 7; full design system 10+ | Covers naming, defaults, children vs data, spread, required/optional. Self-documenting. Not over-specified. |
| 2 | Composition patterns | No inter-component composition — MDX page composes | No composition; composition with import-both; same-file free / cross-file rules | Mintlify platform constraint: nested imports between .jsx files not supported. Components are standalone. MDX page is the composer. |
| 3 | Accessibility | Semantic HTML + ARIA for interactive components | Semantic HTML only; semantic + ARIA for interactive; full WCAG 2.1 AA | Mintlify handles a11y for its globals. ~75 components are presentational (semantic HTML suffices). ~8 interactive components need ARIA. Proportionate. |
| 4 | Error handling | Defensive rendering — every component protects the page | Silent degradation; console.warn; visible dev indicator | Mintlify has no error boundary per component. A crash in any component breaks the entire page. Defensive rendering is mandatory. Console.warn for diagnostics. |
| 5 | Testing | Visual + browser tests + component unit tests | Visual only; visual + browser; visual + browser + unit | Full regression protection. Visual catches appearance issues. Browser tests catch page crashes. Unit tests verify props handling, defensive rendering, and edge cases. |

## **10. Success Criteria**

Per the Component Governance Framework plan:

- [x] Props conventions specified — naming, defaults, required/optional, passthrough, children (7 rules)
- [x] Composition rules specified — no cross-file composition (Mintlify constraint), MDX page is composer, same-file references allowed
- [x] Accessibility requirements specified — semantic HTML baseline + ARIA for interactive components
- [x] Error handling patterns specified — defensive rendering mandatory, 7 rules, per-category patterns
- [x] Testing requirements specified — three tiers (visual, browser, unit), required test cases per component type
- [x] Every standard is enforceable or verifiable (pre-commit for styling, CI for tests, code review for props/a11y/error handling)
- [x] Standards compatible with Styling Architecture (D3) — checklist integrates D3 requirements

## **11. Open Items for Downstream Deliverables**

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| Unit test infrastructure setup | D9 (Migration Plan) | Create tests/unit/components/ directory structure, configure test runner |
| Unit test creation per component | D8 (Audit) / D9 (Migration) | Write tests during or after audit — five core cases per component minimum |
| Defensive rendering retrofit | D9 (Migration Plan) | Existing components audited for missing guards, refactored to comply |
| ARIA retrofit for interactive components | D9 (Migration Plan) | ~8 components need ARIA attributes added |
| Tier reframing documentation | D7 (Compiled Framework) | Update tier definitions to reflect MDX-level composition role |
| @dependencies field clarification | D7 (Compiled Framework) | Field documents same-file co-dependencies only (no cross-file) |
| Component checklist integration | D7 (Compiled Framework) | Include as appendix or contributor quick-reference |