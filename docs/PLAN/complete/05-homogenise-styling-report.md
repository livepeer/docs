# Task 05: Homogenise Styling - Completion Report

## Summary

**Status**: ✅ Complete  
**Branch**: `docs-plan/05-homogenise-styling`  
**Date**: 2026-02-16

The styling system is already well-structured. This task involved auditing, documenting, and making minor fixes to ensure full consistency.

---

## Related Work: Styling Framework Homogenization

**Note:** Additional work was done on a related branch (`docs-plan/styling-framework-homogenization`) that established a comprehensive three-layer styling framework. This work complements the homogenization task by:

- Creating component primitives library (Layout, Table, Container primitives)
- Establishing framework rules for MDX files (zero inline styles)
- Documenting Mintlify overrides and best practices
- Creating comprehensive component library documentation

See `docs/PLAN/reports/styling-framework-homogenization-report.md` for full details of the framework work.

---

## Audit Findings

### Current Architecture (Already Excellent)

The codebase has a robust, consistent theming approach:

1. **`style.css`** - Global CSS variables for light/dark themes
2. **`snippets/styles/themeStyles.jsx`** - ThemeData object with all color values
3. **Components** - Most already use ThemeData or global CSS variables

### Color System

| Variable | Light Mode | Dark Mode | Usage |
|----------|-----------|-----------|-------|
| `--accent` | `#3CB540` (Jade Green) | `#2b9a66` (Dark Jade) | Highlights, icons, links |
| `--accent-dark` | `#18794E` | `#18794E` | Step icons, emphasis |
| `--hero-text` | `#181C18` | `#E0E4E0` | Headings, titles |
| `--text` | `#717571` | `#A0A4A0` | Body text |
| `--muted-text` | `#9ca3af` | `#6b7280` | Secondary text |
| `--background` | `#ffffff` | `#0d0d0d` | Page background |
| `--card-background` | `#f9fafb` | `#1a1a1a` | Cards, containers |
| `--border` | `#e5e7eb` | `#333333` | Borders, dividers |
| `--button-text` | `#ffffff` | `#ffffff` | Button text |

### Components Already Using ThemeData ✅

| Component | File | Status |
|-----------|------|--------|
| ExternalContent | `content/external-content.jsx` | ✅ Theme-aware |
| CustomCodeBlock | `content/code.jsx` | ✅ Theme-aware |
| CustomCallout, BlinkingIcon, TipWithArrow | `primitives/links.jsx` | ✅ Theme-aware |
| StyledSteps | `layout/steps.jsx` | ✅ Theme-aware |
| GatewayOnChainWarning | `domain/04_GATEWAYS/callouts.jsx` | ✅ Theme-aware |
| CoinGeckoExchanges | `integrations/coingecko.jsx` | ✅ Theme-aware |
| PageHeader, H1-H6, P, Divider | `display/frameMode.jsx` | ✅ Theme-aware |
| PortalHeroContent | `domain/SHARED/Portals.jsx` | ✅ Theme-aware |

### Components Using Global CSS Variables ✅

| Component | File | Variables Used |
|-----------|------|----------------|
| DynamicTable | `layout/table.jsx` | `--accent`, `--border` |
| CustomDivider | `primitives/divider.jsx` | `--border` |
| ScrollableDiagram | `display/zoomable-diagram.jsx` | `--accent`, `--border`, `--card-background`, `--text`, `--muted-text` |
| CardCarousel | `display/CardCarousel.jsx` | `--accent`, `--border`, `--card-background`, `--text` |

### Colors Intentionally Fixed (Not Theme-Dependent)

| Component | Colors | Reason |
|-----------|--------|--------|
| `previewCallouts.jsx` | `#ef1a73` (pink), `#b636dd` (purple) | Semantic callout types |
| `coingecko.jsx` | `#fbbf24`, `#22c55e`, `#ef4444` | Trust score indicators |
| `responseField.jsx` | `#3b82f6` | Syntax highlighting |
| `HeroGif.jsx` | Green palette | Decorative animation |
| Table/CoinGecko headers | `#fff` on green | Intentional contrast |

---

## Changes Made

### 1. Fixed CardCarousel.jsx

**Before**: Used hardcoded fallbacks (`#fff`, `#eaeaea`, `#333`)  
**After**: Uses global CSS variables (`--card-background`, `--accent`, `--border`, `--text`)

```jsx
// Before
background: "var(--card-bg, #fff)",
border: "1px solid var(--accent, #eaeaea)",

// After
background: "var(--card-background)",
border: "1px solid var(--accent)",
color: "var(--text)",
```

### 2. Fixed frameMode.jsx P Component Bug

**Issue**: The `P` component referenced `defaultIconColor` but declared it as a different variable name.  
**Fix**: Renamed to `resolvedIconColor` for consistency and correct usage.

### 3. Updated theme-colors.mdx Wiki

- Updated color palette documentation to match actual `ThemeData` values
- Added documentation for global CSS variables in `style.css`
- Updated best practices section
- Fixed incorrect file reference (`colours.jsx` → `themeStyles.jsx`)

---

## Style Guide / Checklist

### For New Components

1. **Import ThemeData** if you need theme values in JavaScript:
   ```jsx
   import { ThemeData } from "/snippets/styles/themeStyles.jsx";
   ```

2. **Use global CSS variables** for inline styles:
   ```jsx
   style={{ color: "var(--accent)", border: "1px solid var(--border)" }}
   ```

3. **Define component-specific CSS variables** with ThemeData:
   ```jsx
   <style>{`
     :root { --my-color: ${ThemeData.light.accent}; }
     .dark { --my-color: ${ThemeData.dark.accent}; }
   `}</style>
   ```

4. **Test both light and dark modes** before committing

### Color Rules

| Use Case | Approach |
|----------|----------|
| Brand colors (green) | Use `--accent` or `--accent-dark` |
| Headings | Use `--hero-text` |
| Body text | Use `--text` |
| Secondary text | Use `--muted-text` |
| Backgrounds | Use `--background` or `--card-background` |
| Borders | Use `--border` |
| Semantic colors (error, warning, success) | Keep fixed (don't theme) |
| White text on green headers | Keep fixed as `#fff` |

### What NOT to Do

- ❌ Don't hardcode hex colors that should adapt to theme
- ❌ Don't use generic grays without checking theme compatibility
- ❌ Don't make semantic colors (trust scores, error states) theme-dependent
- ❌ Don't override white text on intentionally colored backgrounds

---

## Testing

### Manual Testing Checklist

- [x] Components render correctly in dark mode (default)
- [x] Components render correctly in light mode
- [x] No lint errors in modified files
- [x] CardCarousel buttons visible in both themes
- [x] P component icons render with correct theme color

---

## Follow-up Items

### Nice to Have (Future Tasks)

1. **Light mode polish** - The README notes "light mode needs some style tweaks". Consider:
   - Review contrast ratios in light mode
   - Test all pages in light mode for visibility issues

2. **Consolidate Report.md** - The existing `snippets/components/Report.md` contains useful audit info that could be merged into this documentation or the wiki.

3. **Add color utilities** - Consider creating helper functions for common patterns like `hexToRgba` that's duplicated in multiple components.

---

## Files Modified

| File | Change Type |
|------|-------------|
| `snippets/components/display/CardCarousel.jsx` | Fixed theme variables |
| `snippets/components/display/frameMode.jsx` | Fixed variable naming bug |
| `snippets/snippetsWiki/theme-colors.mdx` | Updated documentation |

---

## Author

AI Agent (Task 05)
