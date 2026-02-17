# MDX Inline Styles Audit - v2 Pages

**Date**: 2024  
**Scope**: All MDX files in `v2/pages/`

## Summary

Found **50+ instances** of inline styles across v2 MDX files. Categorized by type and priority.

## Categories

### 1. Layout/Flexbox Styles (High Priority)
**Pattern**: `style={{ display: "flex", ... }}`

**Files:**
- `04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` - 3 instances
- `04_gateways/run-a-gateway/run-a-gateway.mdx` - 2 instances
- `05_orchestrators/orchestrators-portal.mdx` - 2 instances
- `06_lptoken/token-portal.mdx` - 2 instances
- `07_resources/documentation-guide/component-library.mdx` - 3 instances
- `07_resources/documentation-guide/style-guide.mdx` - 2 instances (examples)

**Migration**: Use `FlexContainer` component

### 2. Table Styles (High Priority)
**Pattern**: `style={{ border: '1px solid ...', padding: ... }}`

**Files:**
- `04_gateways/run-a-gateway/requirements/setup.mdx` - 20+ instances (entire table)
- `04_gateways/run-a-gateway/install/docker-install.mdx` - 10+ instances (table)

**Migration**: Use `StyledTable`, `TableRow`, `TableCell` components

### 3. Bordered Boxes (High Priority)
**Pattern**: `style={{ border: '1px solid #2b9a66', borderRadius: '8px', padding: '16px' }}`

**Files:**
- `04_gateways/run-a-gateway/requirements/setup.mdx` - 3 instances
- `04_gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx` - 5 instances

**Migration**: Use `BorderedBox` component with `variant="accent"`

### 4. Text Styling (Medium Priority)
**Pattern**: `style={{ fontSize: '1.0rem' }}` or similar

**Files:**
- `04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` - 3 instances

**Migration**: Create text primitive or use existing text components

### 5. Hardcoded Colors (High Priority)
**Pattern**: Colors like `#2b9a66`, `#3CB540`, `#18794E`

**Files:**
- Multiple files with hardcoded green colors
- Should use CSS Custom Properties via components

**Migration**: Replace with CSS variables via component props

### 6. className Usage (Low Priority - Some Acceptable)
**Pattern**: `className="w-full h-96 rounded-xl"` (video players)

**Files:**
- Video player components - May be acceptable for third-party components
- Dark mode toggles - May be acceptable for theme switching

**Note**: Review case-by-case. Video player classes may be required by library.

## Priority Order

1. **High Priority** - Content pages with extensive inline styles
   - `04_gateways/run-a-gateway/requirements/setup.mdx`
   - `04_gateways/run-a-gateway/install/docker-install.mdx`
   - `04_gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx`

2. **Medium Priority** - Content pages with moderate inline styles
   - `04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx`
   - `05_orchestrators/orchestrators-portal.mdx`
   - `06_lptoken/token-portal.mdx`

3. **Low Priority** - Documentation/example files
   - `07_resources/documentation-guide/component-library.mdx` (examples)
   - `07_resources/documentation-guide/style-guide.mdx` (examples)

## Migration Status

- [ ] `04_gateways/run-a-gateway/requirements/setup.mdx`
- [ ] `04_gateways/run-a-gateway/install/docker-install.mdx`
- [ ] `04_gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx`
- [ ] `04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx`
- [ ] `04_gateways/run-a-gateway/run-a-gateway.mdx`
- [ ] `04_gateways/run-a-gateway/publish/connect-with-offerings.mdx`
- [ ] `05_orchestrators/orchestrators-portal.mdx`
- [ ] `06_lptoken/token-portal.mdx`
- [ ] `07_resources/documentation-guide/component-library.mdx`
- [ ] `07_resources/documentation-guide/style-guide.mdx`
