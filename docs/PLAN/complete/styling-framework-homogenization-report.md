# Styling Framework Homogenization - Progress Report

**Branch**: `docs-plan/styling-framework-homogenization`  
**Date**: 2024  
**Status**: Framework Definition Complete - Ready for Migration Phase

## Executive Summary

Established a comprehensive three-layer styling framework for the Livepeer documentation that addresses Mintlify's constraints while maintaining consistency and maintainability. Created component primitives library and updated documentation.

## Completed Work

### 1. Framework Documentation ✅

**File**: `v2/pages/07_resources/documentation-guide/style-guide.mdx`

Added comprehensive "Styling Framework Architecture" section covering:

- **Three-layer architecture**:
  - Layer 1: Global CSS (`style.css`) - Theme variables and framework overrides only
  - Layer 2: JSX Components - Self-contained components with internal styling
  - Layer 3: MDX Files - Zero inline styles, use component primitives only

- **Decision tree** for determining where styles belong
- **Component primitives library** reference
- **Mintlify overrides** section explaining how our framework differs from Mintlify defaults

### 2. Component Primitives Library ✅

Created three new primitive component files:

#### Layout Primitives (`snippets/components/primitives/layout.jsx`)
- `FlexContainer` - Flexbox container with direction, gap, align, justify, wrap props
- `GridContainer` - CSS Grid container with columns and gap props
- `Spacer` - Vertical/horizontal spacing component

#### Table Primitives (`snippets/components/primitives/tables.jsx`)
- `StyledTable` - Theme-aware table with variant support (default, bordered, minimal)
- `TableRow` - Table row with header and hover options
- `TableCell` - Table cell with alignment options

#### Container Primitives (`snippets/components/primitives/containers.jsx`)
- `BorderedBox` - Bordered container with variant support (default, accent, muted)
- `CenteredContainer` - Centered content container with max-width
- `FullWidthContainer` - Full-width breakout container for hero sections

**All components:**
- ✅ Use CSS Custom Properties for theme awareness
- ✅ Include comprehensive JSDoc documentation
- ✅ Follow established component patterns
- ✅ No external dependencies

### 3. Component Library Documentation ✅

**File**: `v2/pages/07_resources/documentation-guide/component-library/primitives.mdx`

Added complete documentation sections for:
- Layout Primitives (FlexContainer, GridContainer, Spacer)
- Table Primitives (StyledTable, TableRow, TableCell)
- Container Primitives (BorderedBox, CenteredContainer, FullWidthContainer)

Each section includes:
- Import statements
- Complete props tables
- Live examples with Tabs
- Code examples

## Framework Rules Established

### MDX Files
- ❌ **ZERO inline styles** - Use component primitives only
- ❌ **NO hardcoded colors** - Use CSS Custom Properties via components
- ❌ **NO custom className** - Use component primitives

### JSX Components
- ✅ Styles must be within component file
- ✅ Use CSS Custom Properties (`var(--accent)`, etc.)
- ✅ Use inline style objects for simple styling
- ✅ Use `<style>` tags for complex styling (pseudo-classes, media queries)
- ❌ No external CSS imports
- ❌ No hardcoded theme colors

### Global CSS (`style.css`)
- ✅ Theme variables (CSS Custom Properties)
- ✅ Mintlify component overrides (nav, footer)
- ✅ Frame mode container classes
- ✅ Utility classes for patterns used 5+ times globally
- ❌ Page-specific styles
- ❌ Component-specific styles

## Mintlify Overrides Documented

1. **Tailwind classes** → Use component primitives instead
2. **Inline styles in MDX** → Zero tolerance, use primitives
3. **Global CSS for everything** → Only framework-level styles
4. **External CSS for components** → Styles within JSX files

## Files Created

1. `snippets/components/primitives/layout.jsx` - Layout primitives
2. `snippets/components/primitives/tables.jsx` - Table primitives
3. `snippets/components/primitives/containers.jsx` - Container primitives

## Files Modified

1. `v2/pages/07_resources/documentation-guide/style-guide.mdx`
   - Added "Styling Framework Architecture" section
   - Added "Mintlify Overrides & Best Practices" section

2. `v2/pages/07_resources/documentation-guide/component-library/primitives.mdx`
   - Added Layout Primitives section
   - Added Table Primitives section
   - Added Container Primitives section

## Next Steps (Pending)

### Phase 2: MDX Migration
1. **Audit all MDX files** for inline styles
   - Create comprehensive list of files with inline styles
   - Categorize by type (layout, tables, containers, etc.)
   - Prioritize by frequency of use

2. **Create additional primitives** (if needed)
   - Review audit results
   - Identify missing primitive patterns
   - Create new primitives for common patterns

3. **Migrate MDX files**
   - Replace inline styles with component primitives
   - Remove hardcoded colors
   - Test in both light and dark modes

### Phase 3: JSX Standardization
1. **Audit JSX components** for consistency
   - Check all components use CSS Custom Properties
   - Identify hardcoded colors
   - Standardize styling patterns

2. **Update components**
   - Replace hardcoded colors with CSS variables
   - Standardize on consistent patterns
   - Document component styling approach

### Phase 4: Global CSS Cleanup
1. **Review `style.css`**
   - Remove page-specific styles
   - Extract repeated patterns to utility classes
   - Organize into clear sections
   - Document framework overrides

## Success Metrics

- [x] Framework documentation complete
- [x] Component primitives library created
- [x] Component library documentation updated
- [ ] Zero inline styles in MDX files
- [ ] All JSX components use CSS Custom Properties
- [ ] `style.css` organized and cleaned up
- [ ] All hardcoded theme colors replaced

## Testing

All new components:
- ✅ Pass linting checks
- ✅ Use CSS Custom Properties
- ✅ Include comprehensive documentation
- ✅ Follow established patterns

## Notes

- Framework is designed to work within Mintlify's single global CSS file limitation
- Component primitives provide semantic alternatives to inline styles
- All styling is theme-aware through CSS Custom Properties
- Framework overrides Mintlify defaults where they conflict with maintainability

## References

- Style Guide: `v2/pages/07_resources/documentation-guide/style-guide.mdx`
- Component Library: `v2/pages/07_resources/documentation-guide/component-library/primitives.mdx`
- Global CSS: `style.css`
