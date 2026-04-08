---
name: component-create
description: >-
  Guided component creation skill. Enforces the 7-tag JSDoc standard, validates
  placement by category/subcategory, generates VS Code snippet entry, registers
  in the component registry, and blocks creation if a similar component exists.
  Use when creating a new JSX component under snippets/components/.
metadata:
  version: "1.0"
  category: governance
  status: "active"
---

# SKILL: Component Create

Creates new JSX components that comply with governance from the start. Prevents duplicate components, enforces naming and taxonomy, and wires up VS Code snippets and registry entries.

---

## When to use

- Creating a new reusable component under `snippets/components/`
- An agent needs to add a component that does not exist yet

## When NOT to use

- Editing an existing component (just edit the file directly)
- Creating page-scoped inline components in MDX files (those stay in the MDX)
- Creating data files or utilities (use the script framework instead)

---

## Step 1: Duplicate check

Before creating anything, check if a similar component already exists.

1. Read `docs-guide/config/component-registry.json`
2. Search for components with:
   - Same or similar name (case-insensitive substring match)
   - Same description keywords in the same category
   - Same subcategory with overlapping purpose
3. If a match is found: **STOP**. Present the existing component to the user. Ask whether to reuse, extend, or confirm the new component is distinct.

---

## Step 2: Determine placement

Use the classification tree to place the component:

| Question | Category |
|---|---|
| Single visual piece that does not wrap, arrange, or fetch? | `elements/` |
| Holds, groups, or arranges other things? | `wrappers/` |
| Takes content and presents it in a formatted way? | `displays/` |
| Part of the page's outer structure, used once per page? | `scaffolding/` |
| Content comes from outside the repo? | `integrators/` |
| Non-component config/theme object? | `config/` |

Then determine the subcategory (folder name) from existing subcategories in that category. Check `snippets/components/{category}/` for existing folders. If no existing folder fits, propose a new one.

**File path:** `snippets/components/{category}/{subcategory}/{ComponentName}.jsx`

**Naming rules:**
- Component name: PascalCase (e.g., `StatusCallout`, `IconHeaderCard`)
- File name: matches component name exactly (e.g., `StatusCallout.jsx`)
- Folder: kebab-case (e.g., `elements/callouts/`)

---

## Step 3: Write the component file

Every component must include the 7-tag JSDoc header before each export:

```javascript
/**
 * @component        {ComponentName}
 * @category         {category}
 * @subcategory      {subcategory}
 * @status           stable
 * @description      {One-line description of what it renders and when to use it.}
 * @aiDiscoverability none
 *
 * @param {Object} [style={}] - Override/merge styles on outermost element
 * @param {string} [className=""] - CSS class on outermost element
 */
```

**Required tags:**

| Tag | Required | How to fill |
|---|---|---|
| `@component` | Always | Export name (PascalCase) |
| `@category` | Always | From folder path |
| `@subcategory` | Always | From folder path |
| `@status` | Always | `stable` for new components |
| `@description` | Always | One sentence: what it renders + when to use |
| `@dataSource` | If integrator | Where external data comes from |
| `@aiDiscoverability` | Always | `none` unless it uses hooks that hide content from crawlers |

**Self-remediation:** If any tag is missing, infer it:
- `@component` -> set to export name
- `@category` -> infer from folder
- `@subcategory` -> infer from folder
- `@status` -> default to `stable`
- `@aiDiscoverability` -> default to `none`

Only `@description` cannot be auto-filled. It must be written by the author.

**Component code rules:**
- Arrow function syntax only
- No React/hook imports (Mintlify constraint)
- `style` and `className` props on outermost element
- Root-absolute imports for shared resources (e.g., `/snippets/components/...`)
- Include file extensions in imports

---

## Step 4: Generate VS Code snippet

Add an entry to `.vscode/lp-components.code-snippets`:

```json
"lp-add-{ComponentName}": {
  "scope": "mdx,markdown",
  "prefix": "lp-add-{ComponentName}",
  "body": [
    "import { {ComponentName} } from \"/snippets/components/{category}/{subcategory}/{ComponentName}.jsx\";",
    "",
    "<{ComponentName} $0 />"
  ],
  "description": "[add] {category}/{subcategory} -- {ComponentName}"
}
```

Insert alphabetically within the file.

---

## Step 5: Verify

Run these commands to verify the component is governance-compliant:

```bash
# Validate JSDoc and naming
node operations/scripts/validators/components/library/validate-component-creation.js \
  --files snippets/components/{category}/{subcategory}/{ComponentName}.jsx

# Check what auto-repair would fix (should be nothing for a well-authored component)
node operations/scripts/remediators/components/library/repair-component-metadata.js --dry-run

# Regenerate registry (verify new component appears)
node operations/scripts/generators/components/library/generate-component-registry.js --validate-only
```

All must exit 0. If the validator reports issues, fix them before declaring the component complete.

**If `@description` is missing**, the CI pipeline will auto-create a GitHub issue assigned to Copilot. Don't leave it blank — write one sentence explaining what the component renders and when to use it.

---

## Step 6: Regenerate indexes

After the component is verified:

```bash
# Regenerate category index
node operations/scripts/generators/components/library/generate-component-index.js --category {category}

# Regenerate category library
node operations/scripts/generators/components/library/generate-component-library.js --category {category}
```

---

## Principles

1. **No orphan components.** Every component must be in the registry, have a VS Code snippet, and appear in its category's INDEX.md and LIBRARY.md.
2. **Names must describe purpose.** If someone searches for "divider" they should find `CustomDivider`. If they search for "callout" they should find `StatusCallout`. No generic names like `DataWrap` or `Data.jsx`.
3. **One export per concern.** Do not add a divider component to a links file. Each file should contain components of one concern.
4. **Governance first.** The JSDoc header is not optional decoration. It is the data source for the component registry, the catalog, the library, and all CI validation.
