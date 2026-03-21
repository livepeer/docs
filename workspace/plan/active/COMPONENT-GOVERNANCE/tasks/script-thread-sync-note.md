# Cross-thread sync: Component → Script governance

> Notify the script governance thread of these changes.

## What changed

### 1. `@category` renamed to `@type` in components
- All 120 component JSDoc blocks now use `@type` instead of `@category`
- Aligns with script governance where `@type` is Layer 1 taxonomy
- `component-governance-utils.js` updated: `GOVERNANCE_FIELDS` now validates `@type`, warns on `@category`

### 2. GOVERNANCE_FIELDS reduced from 15 → 7
Old: component, category, subniche, tier, status, description, contentAffinity, owner, dependencies, usedIn, breakingChangeRisk, decision, dataSource, duplicates, lastMeaningfulChange

New: component, type, subniche, status, description, accepts (+ optional: dataSource)

### 3. VALID_CATEGORIES updated
Was: `['primitives', 'layout', 'content', 'data', 'page-structure']`
Now: `['elements', 'wrappers', 'displays', 'scaffolding', 'integrators', 'config']`

### 4. Scripts that need awareness

| Script | Impact |
|---|---|
| `generate-component-registry.js` | Updated — uses new GOVERNANCE_FIELDS and CATEGORY_PURPOSES |
| `scan-component-imports.js` | No change needed — doesn't validate JSDoc |
| `audit-component-usage.js` | Updated — getCategory() uses new folder names |
| `component-governance-utils.js` | Updated — GOVERNANCE_FIELDS, validateGovernanceFields(), getCategoryFromPath() |
| `check-naming-conventions.js` | Updated — PascalCase default mode |
| `check-component-docs.js` | May need update — if it validates JSDoc fields |
| `component-layout-governance.js` | May need update — if it references old category names |

### 5. Any script that does `jsDoc.category` must change to `jsDoc.type`
