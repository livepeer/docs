# Components — Patterns

> Extracted rules linked to repo context. Apply these when writing any component.

---

## Pattern 1: JSDoc header (6 required tags + conditionals)

Every exported component requires this block in order:

```jsx
/**
 * @component   ComponentName          // PascalCase, matches export
 * @category    elements               // Layer 1 folder
 * @subcategory buttons                // Layer 2 folder (must match folder name)
 * @status      stable                 // stable | experimental | deprecated
 * @description One-line description   // What the component renders
 * @dataSource  prop (dataFile.jsx)    // Required for integrators only
 * @aiDiscoverability props-extracted  // Optional: signals AI tool discovery
 * @param {type} name - description    // Every prop documented
 */
```

**Linked to:** `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

---

## Pattern 2: Prop signature standard

Every component signature ends with: `className="", style={}, ...rest`

```jsx
export const MyComponent = ({ data, title = "", className = "", style = {}, ...rest }) => {
  // ...
  return <div className={className} style={{ ...internalStyle, ...style }} {...rest}>
```

- Spread `...rest` onto outermost element for id, data-*, aria-* passthrough
- Spread user `style` AFTER internal defaults
- Provide defaults for all optional props

**Linked to:** `snippets/components/component-composition-template.mdx` → Prop Signatures

---

## Pattern 3: Export-used constants inside function body

In MDX-facing JSX, avoid file-scope constants that exported components depend on.

```jsx
// ❌ WRONG — throws ReferenceError at runtime
const styles = { wrapper: { display: 'flex' } }
export const MyComponent = () => <div style={styles.wrapper} />

// ✅ RIGHT — define inside the function
export const MyComponent = () => {
  const styles = { wrapper: { display: 'flex' } }
  return <div style={styles.wrapper} />
}
```

**Linked to:** `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

---

## Pattern 4: CSS variables only

Never hardcode hex, rgb, hsl, or named colours.

```jsx
// ❌ WRONG
color: "#1a1a2e"
border: "1px solid #2d9a67"

// ✅ RIGHT
color: "var(--foreground)"
border: "1px solid var(--border)"
```

**Linked to:** `snippets/components/component-composition-template.mdx` → Styles

---

## Pattern 5: Named exports only

```jsx
// ❌ WRONG
export default function MyComponent

// ✅ RIGHT
export const MyComponent = () => {}
```

Multiple exports per file are allowed when they share a strong domain boundary.

**Linked to:** `snippets/components/component-composition-template.mdx` → Exports

---

## Pattern 6: No React imports

Mintlify provides React and hooks globally. Never import them.

```jsx
// ❌ WRONG
import React from 'react'
import { useState, useEffect } from 'react'

// ✅ RIGHT — just use them
const [value, setValue] = useState(false)
```

**Linked to:** `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

---

## Pattern 7: Category placement decision tree

Ask these questions in order (first match wins):
1. Fetches/embeds external data? → `integrators/`
2. Part of page skeleton, used once? → `scaffolding/`
3. Renders content in visual format? → `displays/`
4. Holds/groups/arranges other things? → `wrappers/`
5. Non-component config/theme? → `config/`
6. Default → `elements/`

**Linked to:** `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

---

## Quick checklist

- [ ] 6-tag JSDoc header in correct order
- [ ] Arrow function with named export
- [ ] className, style, ...rest as final props
- [ ] Export-used constants stay inside the body or live in a safe non-component helper
- [ ] CSS variables only (no hardcoded colours)
- [ ] No React/hook imports
- [ ] Correct category placement (decision tree)
- [ ] @subcategory matches folder name
