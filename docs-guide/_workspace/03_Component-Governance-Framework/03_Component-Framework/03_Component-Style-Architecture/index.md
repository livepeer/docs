# **Styling Architecture & Standards**

**Deliverable:** D3 — Component Governance Framework, Part 3 (Technical Design) **Repository:** `livepeer/docs`, `docs-v2` branch **Scope:** How components use CSS — the style system, tokens, dark/light mode, forbidden patterns, overrides **Platform:** Mintlify (MDX-based) **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** COMPLETE **Depends on:** D1 (Classification), D2 (Repo Structure)

## **1. Purpose**

This document defines the style system that components operate within, how components consume it, what styling patterns are allowed vs forbidden, and how Mintlify platform overrides are managed.

Many components in the library exist specifically to provide visual capabilities beyond what Mintlify offers natively. This document governs that practice — distinguishing legitimate overrides from undisciplined styling.

## **2. Style System Architecture**

### **2.1 Three-Layer Hierarchy**

Styling flows through three layers. Each layer has a defined role and authority.

### **2.2 Rules of Authority**

| **Rule** | **Description** |
| --- | --- |
| Components consume, rarely define | Components use var(--lp-*) tokens from style.css. They do not define new global tokens. |
| Scoped vars are permitted | A component may define a scoped CSS variable for internal state (e.g. a computed dimension). Must be documented in JSDoc with rationale. |
| Mintlify theme is not touched directly | Colours and theme settings in docs.json are configured once. Components never depend on specific docs.json values — they go through style.css tokens. |
| style.css is the central design authority | All shared visual decisions (colour palette, spacing scale, typography, shadows, z-index) live here. |

## **3. CSS Custom Properties Vocabulary**

### **3.1 Naming Convention**

All Livepeer design tokens use the `--lp-` prefix to namespace them and prevent collision with Mintlify's internal CSS variables.

**Pattern:** `--lp-{category}-{name}`

### **3.2 Token Categories**

| **Namespace** | **Purpose** | **Examples** |
| --- | --- | --- |
| --lp-color-* | Colour tokens (all with light/dark pairs) | --lp-color-primary, --lp-color-text, --lp-color-text-muted, --lp-color-border, --lp-color-bg, --lp-color-bg-subtle, --lp-color-bg-elevated, --lp-color-accent, --lp-color-success, --lp-color-warning, --lp-color-error |
| --lp-spacing-* | Spacing scale (margins, padding, gaps) | --lp-spacing-xs (4px), --lp-spacing-sm (8px), --lp-spacing-md (16px), --lp-spacing-lg (24px), --lp-spacing-xl (32px), --lp-spacing-2xl (48px) |
| --lp-font-* | Typography (sizes, weights, families) | --lp-font-size-xs, --lp-font-size-sm, --lp-font-size-body, --lp-font-size-lg, --lp-font-size-heading, --lp-font-size-display, --lp-font-weight-normal, --lp-font-weight-medium, --lp-font-weight-bold, --lp-font-family-body, --lp-font-family-mono |
| --lp-radius-* | Border radius | --lp-radius-sm (4px), --lp-radius-md (8px), --lp-radius-lg (12px), --lp-radius-full (9999px) |
| --lp-shadow-* | Box shadows | --lp-shadow-sm, --lp-shadow-card, --lp-shadow-elevated |
| --lp-z-* | Z-index layers | --lp-z-base (0), --lp-z-dropdown (10), --lp-z-sticky (20), --lp-z-overlay (30), --lp-z-modal (40) |

### **3.3 Light/Dark Pairs**

Every `--lp-color-*` token defines both light and dark values in `style.css`:

Components consume `var(--lp-color-text)` and receive the correct value for the current mode automatically.

### **3.4 Rationalisation Mandate**

The current `style.css` token vocabulary grew organically. As part of this framework:

1. **Audit** every existing `var(--)` token in `style.css`.
1. **Map** each to the `--lp-` namespace (rename, merge redundant, add missing).
1. **Document** the full vocabulary in a reference table (token name, purpose, light value, dark value).
1. **Migrate** all component references to the new namespaced tokens.

This work is batched into D9 (Migration Plan). The naming convention and categories above are the target state.

## **4. Forbidden Patterns**

### **4.1 Banned (Pre-commit Blocks)**

These patterns are hard-blocked by the pre-commit hook. A commit containing any of them is rejected with an actionable error message.

| **#** | **Pattern** | **Why it's banned** | **Detection** |
| --- | --- | --- | --- |
| 1 | ThemeData usage | Deprecated pattern. Root cause of bugs in links.jsx and frameMode.jsx. Replaced by CSS custom properties. | Regex scan for ThemeData in staged .jsx files |
| 2 | Hardcoded hex/rgb colour values | All colours must use var(--lp-color-*) tokens. Hardcoded values break dark mode, prevent centralised updates, and cause visual inconsistency. | Regex scan for #[0-9a-fA-F]{3,8} and rgb( in staged .jsx files (excluding JSDoc comments and string literals used for non-styling purposes) |
| 3 | !important in component styles | If !important is needed, the token hierarchy is broken. Fix the hierarchy, don't override it. | Regex scan for !important in staged .jsx files |

### **4.2 Advisory (Code Review Flags)**

These patterns are flagged during code review (by Copilot code review and human reviewers) but do not block commits. They are documented in `components.instructions.md` for Copilot.

| **#** | **Pattern** | **Why it's flagged** | **Guidance** |
| --- | --- | --- | --- |
| 4 | Inline style={} with static values | Static values should be CSS tokens or classes. Inline styles are for dynamic/computed values. | Reviewer asks: "Could this be a var(--) token instead?" |
| 5 | Direct Mintlify class name overrides | Targeting .mintlify-* or Mintlify internal classes inside components creates fragile coupling. Mintlify updates can break these silently. | Override should go through style.css global selectors, not inside component JSX. |

### **4.3 Pre-commit Hook Specification**

The existing pre-commit infrastructure is extended with a component styling check:

An allowlist file (`tests/config/style-exceptions.json`) permits documented exceptions with owner, expiry date, and justification — following the same exception registry pattern used for semantic exceptions.

## **5. Dark/Light Mode**

### **5.1 Approach**

Two mechanisms with clearly separated concerns:

| **Concern** | **Mechanism** | **Owned by** |
| --- | --- | --- |
| Colour values | CSS custom properties (var(--lp-color-*)) | style.css — defines light/dark pairs |
| Visibility/layout toggles | Tailwind dark: utility classes | Component JSX — uses className |
| Mode toggle | Mintlify built-in toggle | Platform — not modified |

### **5.2 Rules**

| **Rule** | **Description** |
| --- | --- |
| No JS theme detection | Components never read document.documentElement.classList or data attributes to determine the current theme. |
| Colours always via tokens | A component never contains a hardcoded light or dark colour. It uses var(--lp-color-*) and the CSS layer handles the swap. |
| Tailwind dark: for structural changes | Showing/hiding elements per theme (dark:hidden, hidden dark:block), adjusting opacity (dark:bg-opacity-80), or swapping images are valid Tailwind dark: uses. |
| Every colour token has both values | No token may be defined for light only or dark only. The rationalised vocabulary (Section 3) ensures every --lp-color-* token has a light and dark definition. |

### **5.3 Testing Requirement**

Every component must be visually verified in both light and dark mode. This is a manual check during development (using `mintlify dev` with the mode toggle) and a requirement for the D8 audit pass.

## **6. Inline Style Rules**

### **6.1 Policy**

Inline `style={}` attributes on JSX elements are **advisory-flagged** in code review, not banned.

No further specification is imposed beyond the advisory flag. The three hard bans (ThemeData, hardcoded hex, `!important`) catch the worst offenders. Code reviewers exercise judgement on a case-by-case basis.

### **6.2 Common Acceptable Uses**

These inline style patterns are generally acceptable and should not be flagged:

- **Dynamic dimensions:** `style={{ width: `${percentage}%` }}`
- **Computed grid layouts:** `style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}`
- **Runtime-calculated positions:** `style={{ top: `${offset}px` }}`
- **Props-driven styling:** `style={{ backgroundColor: props.bgColor }}` (where `bgColor` is itself a token reference)

### **6.3 Common Flagged Uses**

These patterns should be questioned in review:

- **Static colour:** `style={{ color: 'green' }}` → should be a token
- **Static spacing:** `style={{ marginTop: '24px' }}` → should be a spacing token
- **Static font size:** `style={{ fontSize: '14px' }}` → should be a typography token

## **7. Design Tokens**

### **7.1 Decision**

Rationalise the existing `style.css` vocabulary and document it. No W3C Design Tokens format. `style.css` remains the single source for token definitions.

### **7.2 Rationalisation Process**

Executed during D8 (Audit) and D9 (Migration):

1. **Inventory:** Extract every `var(--)` declaration from current `style.css`.
1. **Map:** Assign each to a `--lp-{category}-{name}` token, or flag as redundant/unused.
1. **Fill gaps:** Identify colours, spacing values, or typography values used in components that have no corresponding token. Create tokens for them.
1. **Merge:** Collapse redundant tokens (e.g. three slightly different greys → one `--lp-color-text-muted`).
1. **Document:** Produce a reference table in the compiled framework (D7).
1. **Migrate:** Update all component references to the new namespaced tokens (D9 migration batch).

### **7.3 Token Reference Table Format**

The reference table (to be populated during audit) follows this structure:

| **Token** | **Purpose** | **Light value** | **Dark value** | **Used by** |
| --- | --- | --- | --- | --- |
| --lp-color-primary | Brand primary / emphasis | #00EB88 | #00EB88 | CustomDivider, GotoCard, ... |
| --lp-color-text | Body text | #1a1a1a | #f0f0f0 | Global, all text components |
| --lp-spacing-md | Default spacing | 16px | 16px | BorderedBox, FlexContainer, ... |

Values are illustrative — actual values determined during the audit.

## **8. Mintlify Override Registry**

### **8.1 Policy**

Mintlify overrides in `style.css` are treated as documented technical debt. Every override exists because Mintlify doesn't support something natively. Overrides are tracked, justified, and reviewed periodically.

### **8.2 Registry Format**

The override registry lives in `docs-guide/mintlify-override-registry.md` (or a section within the compiled D7 framework). Each entry:

| **Field** | **Description** |
| --- | --- |
| Override | What CSS rule or selector is overridden |
| Mintlify limitation | What Mintlify doesn't support that necessitates this override |
| Introduced | Date the override was added |
| Review date | Date to re-evaluate (check if Mintlify now supports this natively) |
| Owner | Who is responsible for reviewing |
| Status | active / under review / retired |

### **8.3 Example Entries**

| **Override** | **Mintlify limitation** | **Introduced** | **Review date** | **Owner** | **Status** |
| --- | --- | --- | --- | --- | --- |
| Custom heading styles in frame-mode pages | Mintlify's markdown headings don't support icons or custom typography in landing page contexts | 2025-xx-xx | 2026-06-01 | @livepeer/docs-team | active |
| Portal hero section full-bleed backgrounds | Mintlify doesn't support full-width background images outside the content column | 2025-xx-xx | 2026-06-01 | @livepeer/docs-team | active |

Actual entries populated during the D8 audit.

### **8.4 Review Cadence**

Quarterly. Aligned with Mintlify platform release notes. When Mintlify ships a feature that addresses a registered limitation, the override is retired:

1. Verify native Mintlify support covers the use case.
1. Remove the override from `style.css`.
1. Update any components that depended on the override.
1. Mark the registry entry as `retired` with the Mintlify version that resolved it.

## **9. Responsive & Mobile**

### **9.1 Policy**

Mintlify handles responsive layout for its built-in components and page structure. Custom components should:

1. **Use relative units** where possible (`rem`, `em`, `%`, `vw`) via tokens — not hardcoded `px` for layout dimensions.
1. **Use **`style.css`** media queries** for breakpoint-dependent rules that affect multiple components.
1. **Use Tailwind responsive utilities** (`sm:`, `md:`, `lg:`) for component-specific responsive adjustments.
1. **Not fight Mintlify's responsive behaviour** — if Mintlify collapses a sidebar at a breakpoint, components should adapt, not force a different layout.

### **9.2 Breakpoints**

Use Mintlify's default breakpoints (inherited from Tailwind defaults) unless a documented reason requires a custom breakpoint:

| **Breakpoint** | **Width** | **Tailwind prefix** |
| --- | --- | --- |
| Mobile | < 640px | (default) |
| Small | ≥ 640px | sm: |
| Medium | ≥ 768px | md: |
| Large | ≥ 1024px | lg: |
| Extra large | ≥ 1280px | xl: |

## **10. Decision Register**

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | Style system authority | Layered — Mintlify → style.css → component-scoped vars if documented | Components consume only; layered with scoped vars; components autonomous | Central control with pragmatic escape hatch for computed values. |
| 2 | Forbidden patterns | Strict ban (3) + advisory (2) | Strict 3; extended 5; minimal 1 | ThemeData/hex/!important are hard blocks. Static inline styles and Mintlify class overrides are review flags. |
| 3 | Dark/light mode | CSS tokens for colours + Tailwind dark: for visibility/layout | CSS tokens only; tokens + Tailwind dark:; JS theme detection | Two mechanisms with separated concerns. No JS theme detection in components. |
| 4 | Inline style rules | Advisory flag is sufficient — no further specification | Dynamic-only rule; dynamic + escape hatch; advisory only | Hard bans catch worst offenders. Over-specifying inline rules adds process without proportional value. |
| 5 | Design tokens | Rationalise and document — clean up, namespace --lp-*, fill gaps | Document as-is; rationalise; W3C Design Tokens format | Consistent naming, discoverable vocabulary, no disproportionate infrastructure. Migration batched into D9. |
| 6 | Mintlify override policy | Override registry — documented, justified, review-dated | Registry; no tracking; no overrides permitted | Overrides are technical debt. Registry makes them visible, justifiable, and retirable when Mintlify evolves. |

## **11. Success Criteria**

Per the Component Governance Framework plan:

- [x] CSS custom properties vocabulary documented — namespaced `--lp-*` categories, naming convention, light/dark pairs
- [x] Mintlify native styling capabilities and gaps documented — three-layer hierarchy, override registry
- [x] Component styling rules defined — when to use tokens, when inline is acceptable, what's forbidden
- [x] Dark/light mode requirements defined — CSS tokens + Tailwind `dark:`, no JS detection
- [x] Override patterns documented — registry format, review cadence, retirement process
- [x] Deprecated pattern migration path specified — ThemeData banned, rationalisation process defined
- [x] Design token decision made — rationalise and document, `--lp-*` namespace, no W3C format
- [x] Every styling standard is enforceable or verifiable (pre-commit for bans, code review for advisories)

## **12. Open Items for Downstream Deliverables**

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| Token vocabulary audit (full inventory) | D8 (Audit) | Extract all current tokens, map to --lp-*, identify gaps |
| Token reference table (populated) | D7 (Compiled Framework) | Full table with actual values, light/dark pairs, component usage |
| Override registry (populated) | D8 (Audit) | Audit every Mintlify override in current style.css |
| Token rename migration | D9 (Migration Plan) | Batch rename all component references to --lp-* tokens |
| ThemeData removal | D9 (Migration Plan) | Remove ThemeData from links.jsx and frameMode.jsx, replace with tokens |
| Pre-commit styling checks | D9 (Migration Plan) | Extend .githooks/pre-commit with banned pattern detection |
| Style exception allowlist | D9 (Migration Plan) | Create tests/config/style-exceptions.json for documented edge cases |
| components.instructions.md update | D9 (Migration Plan) | Add advisory flags for Copilot code review |
| Visual dark/light mode verification | D8 (Audit) | Every component checked in both modes |