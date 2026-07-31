---
name: create-component
description: >-
  Scaffold a new governed JSX component with 7-tag JSDoc header, correct folder
  placement, Mintlify-safe patterns, test stub, and trigger self-documenting
  pipelines (registry, VS Code snippets, catalog). Use when creating a new
  custom component for the Livepeer v2 docs.
metadata:
  version: "1.0"
  category: authoring
  status: "active"
---

# SKILL: Create Component — Governed JSX Scaffold

Scaffolds a new component that is governance-compliant from the first line. Validates inputs, writes the file, updates tooling, and runs validators — so the agent never has to read the 50KB framework docs.

---

## When to use

- Creating a new JSX component for the v2 docs
- Adding a visual element, wrapper, display, scaffold, integrator, or config object
- Wrapping an external API or embed as a governed component

## When NOT to use

- Editing an existing component (use the component file directly)
- Creating MDX composables (those live in `snippets/composables/`, different pattern)
- Creating a Mintlify built-in override (Card, Tabs, etc. are platform globals)

---

## Inputs

The agent must provide ALL inputs before scaffolding begins. Do not ask one at a time — collect them all, validate, then scaffold.

| Input | Required | Type | Validation |
|---|---|---|---|
| `componentName` | Yes | PascalCase string | Must match `^[A-Z][A-Za-z0-9]+$`. Must NOT already exist in `docs-guide/config/component-registry.json` |
| `category` | Yes | enum | One of: `elements`, `wrappers`, `displays`, `scaffolding`, `integrators`, `config` |
| `subcategory` | Yes | enum | Must be valid for the chosen category (see Category Reference below) |
| `status` | Yes | enum | One of: `stable`, `experimental` (new components are never `deprecated` or `broken`) |
| `description` | Yes | string | UK English, one sentence, describes what it renders and when to use it |
| `props` | Yes | array | Each: `{name, type, default, description}`. MUST include `style={}` and `className=""` |
| `dataSource` | If integrator | string | Required when `category === 'integrators'`. Source: `none`, `prop`, `CoinGecko API`, `fetch(url)`, etc. |
| `aiDiscoverability` | If uses hooks | enum | Required if component uses `useState`/`useEffect`. One of: `snapshot`, `props-extracted`, `none` |

---

## Category Reference

### Decision tree (first match wins)

1. Does it fetch, embed, or bind to external/third-party data? → **integrators**
2. Is it part of the page's outer structure, typically used once? → **scaffolding**
3. Does it take content and present it in a formatted visual format? → **displays**
4. Does it exist to hold, group, or arrange other things? → **wrappers**
5. Is it a non-component config/theme object? → **config**
6. Default → **elements**

### Subcategory values by category

| Category | Valid subcategories |
|---|---|
| `elements` | `a11y`, `badges`, `buttons`, `callouts`, `icons`, `images`, `links`, `math`, `spacing`, `text` |
| `wrappers` | `containers` |
| `displays` | `accordions`, `cards`, `code`, `diagrams`, `grids`, `quotes`, `response-fields`, `steps`, `tables`, `video` |
| `scaffolding` | `frame-mode`, `heroes`, `page-containers`, `portals` |
| `integrators` | `blog`, `embeds`, `feeds`, `video-data` |
| `config` | (none — top-level `config/` folder) |

---

## Step 0: Validate inputs

Before writing any file:

1. Check `componentName` is PascalCase: `/^[A-Z][A-Za-z0-9]+$/`
2. Check uniqueness: `grep` for the name in `docs-guide/config/component-registry.json`
3. Check `category` is one of: `elements`, `wrappers`, `displays`, `scaffolding`, `integrators`, `config`
4. Check `subcategory` is valid for the chosen category (table above)
5. Check `description` is UK English (no -ize, -ization, -or where -our applies)
6. Check props include `style` and `className`
7. If `category === 'integrators'`, require `dataSource`
8. If component will use `useState`/`useEffect`, require `aiDiscoverability`

**HALT with clear error if any check fails.** Do not scaffold a non-compliant component.

---

## Step 1: Scaffold the component file

**Path:** `snippets/components/{category}/{subcategory}/{componentName}.jsx`

If the subcategory folder does not exist, create it.

### File structure (MANDATORY — Mintlify constraints are non-negotiable)

```jsx
/**
 * @component       {componentName}
 * @category        {category}
 * @subcategory     {subcategory}
 * @status          {status}
 * @description     {description}
 * @dataSource      {dataSource}          ← ONLY if integrator
 * @aiDiscoverability {aiDiscoverability} ← ONLY if uses hooks
 *
 * @param {type} [propName=default] - Description
 * @param {type} [propName=default] - Description
 * @param {Object} [style={}]      - Override/merge styles on outermost element
 * @param {string} [className=""]  - CSS class on outermost element
 */
export const {componentName} = ({ prop1 = default1, prop2 = default2, style = {}, className = "" }) => {

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      color: "var(--lp-color-text-primary)",
      ...style,
    },
  };

  return (
    <div style={styles.wrapper} className={className}>
      {/* component content */}
    </div>
  );

};
```

### Hard constraints (violations break Mintlify runtime)

1. **NO top-level constants outside the export.** All `const`/`let`/`var` MUST be inside the arrow function body. Mintlify's MDX processor throws `ReferenceError` for top-level declarations outside exports. (Discovered 2026-03-28.)
2. **Arrow function export only.** Never `export default function`. Mintlify does not support the `function` keyword in snippets (confirmed by Mintlify docs).
3. **NO React imports.** Mintlify provides React globally. Do not `import React from 'react'`.
4. **NO Mintlify platform global imports.** `Card`, `Tabs`, `Accordion`, `Steps`, `Badge`, `Icon` are globally available — use them directly without importing.
5. **CSS custom properties only.** Never hardcode hex (`#1a1a2e`), `rgb()`, `hsl()`, or named colours. Use `var(--lp-color-border-default)`, `var(--lp-color-text-primary)`, `var(--lp-color-bg-page)`, `var(--lp-color-accent)`, `var(--lp-color-bg-card)`, etc. Never use legacy tokens (`var(--border)`, `var(--accent)`, `var(--text)`, `var(--background)`).
6. **Styles as named const before return.** Never inline style objects in JSX: `<div style={{ ... }}>`. Always: `const styles = { wrapper: { ... } }` then `<div style={styles.wrapper}>`.
7. **Spread `...style` at end of styles object** for consumer overrides.
8. **No hardcoded data.** All variable content must be a prop.

---

## Step 2: Scaffold test stub

**Path:** `operations/tests/unit/components/{componentName}.test.js`

```javascript
#!/usr/bin/env node
/**
 * @script      {componentName}-test
 * @type        validator
 * @concern     components
 * @niche       library
 * @purpose     qa:component-testing
 * @description Unit test for {componentName} component.
 * @mode        read-only
 * @pipeline    manual
 * @scope       snippets/components/{category}/{subcategory}/{componentName}.jsx
 * @usage       node operations/tests/unit/components/{componentName}.test.js
 * @policy      —
 */

'use strict';

function runTests() {
  const errors = [];
  const warnings = [];

  try {
    // Verify the component can be required without error
    const mod = require('../../../../snippets/components/{category}/{subcategory}/{componentName}.jsx');
    if (!mod.{componentName}) {
      errors.push('{componentName} export not found');
    }
  } catch (err) {
    errors.push(`Failed to require {componentName}: ${err.message}`);
  }

  return { errors, warnings };
}

if (require.main === module) {
  const { errors, warnings } = runTests();
  if (errors.length) {
    console.error('FAIL:', errors.join('; '));
    process.exit(1);
  }
  if (warnings.length) {
    console.warn('WARN:', warnings.join('; '));
  }
  console.log('PASS: {componentName}');
  process.exit(0);
}

module.exports = { runTests };
```

---

## Step 3: Scaffold companion data (conditional)

- If `aiDiscoverability === 'snapshot'`: create placeholder at `snippets/data/snapshots/{source-id}.json` with `{}` — the CI pipeline will populate it
- If `aiDiscoverability === 'props-extracted'`: log a note that the consuming MDX page author must create `v2/[section]/[page-slug]-data.json` adjacent to the MDX page

---

## Step 4: Run validators

```bash
node operations/scripts/validators/components/library/validate-component-creation.js --files snippets/components/{category}/{subcategory}/{componentName}.jsx
node operations/scripts/validators/components/library/check-component-health.js
node operations/scripts/validators/components/library/check-naming-conventions.js
node operations/scripts/remediators/components/library/repair-component-metadata.js --dry-run
```

All must exit 0. `validate-component-creation.js` checks JSDoc 7-tag compliance, PascalCase naming, and folder placement. `repair-component-metadata.js --dry-run` should show zero repairs needed for a well-authored component. If any fail, read the error output and fix the component before proceeding.

---

## Step 5: Run self-documenting pipelines

```bash
# Update component registry (source of truth for all downstream generators)
node operations/scripts/generators/components/library/generate-component-registry.js

# Regenerate VS Code snippets from updated registry
node operations/scripts/generators/components/library/generate-component-snippets.js --write

# Regenerate per-grouping documentation
node operations/scripts/generators/components/library/generate-component-library.js --category {category}
node operations/scripts/generators/components/library/generate-component-index.js --category {category}
```

---

## Step 6: Verify outputs

1. Confirm the new component appears in `docs-guide/config/component-registry.json`
2. Confirm the new snippet appears in `.vscode/components.code-snippets`
3. Confirm all validators from Step 4 pass
4. Confirm `snippets/components/{category}/LIBRARY.md` includes the new component
5. Confirm `snippets/components/{category}/INDEX.md` includes the new component

**Report to the user:**

```
Created: snippets/components/{category}/{subcategory}/{componentName}.jsx
Test:    operations/tests/unit/components/{componentName}.test.js
Registry: Updated (N+1 components)
Snippets: Updated
Library:  Updated ({category}/LIBRARY.md)
Index:    Updated ({category}/INDEX.md)
Validators: Pass
```

**If `@description` is missing**, the CI pipeline will auto-create a GitHub issue assigned to Copilot.
---

## Forbidden JSDoc tags

These tags were removed from the standard and MUST NOT appear:

`@owner`, `@tier`, `@accepts`, `@contentAffinity`, `@decision`, `@duplicates`,
`@lastMeaningfulChange`, `@breakingChangeRisk`, `@dependencies`, `@usedIn`

---


## Default tags

Every component MUST include `@aiDiscoverability none` unless it uses hooks that hide content from crawlers. This is not optional — the CI pipeline validates it.
## Reference files

| File | Purpose |
|---|---|
| `snippets/components/component-composition-template.mdx` | Canonical template with full JSDoc reference and scaffold |
| `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` | Full framework spec |
| `tools/lib/governance/component-governance-utils.js` | Shared validation constants and parsing helpers |
| `docs-guide/config/component-registry.json` | Component registry (auto-generated) |
| `.vscode/components.code-snippets` | VS Code snippets (auto-generated by snippet generator) |
| `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` | Mintlify platform constraints |
