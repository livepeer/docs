# Component Usage Audit Report

**Generated:** 2026-02-16  
**Branch:** `docs-plan/component-library-backup-20260216-230605`

## Summary

- **Total Components Exported:** 114
- **In Component Library (active):** 92
- **Commented Out in Component Library:** 69
- **Used in v2 Pages:** 88
- **Used in Snippets:** 80
- **NOT in Component Library BUT Used in v2 Pages:** 9
- **NOT Used Anywhere:** 5

---

## Components NOT in Component Library BUT Used in v2 Pages

These components are actively used in production pages but are NOT documented (or commented out) in the component library:

### Portal Components (8 components) - Used in 8 portal pages

1. **HeroContentContainer** (domain)
   - Used in: `mission-control.mdx`, `about-portal.mdx`, `developer-portal.mdx`, `community-portal.mdx`, `products-portal.mdx`, `gateways-portal.mdx`, `orchestrators-portal.mdx`, `token-portal.mdx`
   - **Status:** NOT in component library
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

2. **HeroImageBackgroundComponent** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

3. **HeroSectionContainer** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library (commented out in domain.mdx)
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

4. **LogoHeroContainer** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

5. **PortalCardsHeader** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

6. **PortalContentContainer** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library (commented out in domain.mdx)
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

7. **PortalHeroContent** (domain)
   - Used in: All 8 portal pages
   - **Status:** NOT in component library (commented out in domain.mdx)
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

8. **PortalSectionHeader** (domain)
   - Used in: `community-portal.mdx`
   - **Status:** NOT in component library
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`

### False Positives

9. **MyComponent** (unknown)
   - Used in: `style-guide.mdx` (3 times - just examples in documentation)
   - **Status:** This is a documentation example, not a real component
   - **Action:** Ignore

---

## Components NOT Used Anywhere

These components are exported but never imported or used in any MDX files:

1. **ApiBaseUrlsTable** (layout)
   - **File:** `snippets/components/layout/api-base-urls-table.mdx`
   - **Status:** Commented out in component library due to bug (`url is not defined`)
   - **Recommendation:** Fix bug or remove component

2. **BlinkingTerminal** (primitives)
   - **File:** `snippets/components/primitives/links.jsx`
   - **Status:** Commented out in component library (deprecated alias for BlinkingIcon)
   - **Recommendation:** Remove if truly deprecated, or document if still needed

3. **CardInCardLayout** (content)
   - **File:** `snippets/components/content/data.jsx`
   - **Status:** Not documented in component library
   - **Recommendation:** Document or remove if unused

4. **ListSteps** (layout)
   - **File:** `snippets/components/layout/ListSteps.jsx`
   - **Status:** Commented out in component library due to bug (`Cannot read properties of undefined (reading 'map')`)
   - **Recommendation:** Fix bug or remove component

5. **RefCardContainer** (domain)
   - **File:** `snippets/components/domain/SHARED/Portals.jsx`
   - **Status:** Exported but never used
   - **Recommendation:** Remove if unused, or document if needed

---

## Components Commented Out in Component Library

These components are commented out in the component library documentation but may be used elsewhere:

### Verified as Working (but commented out):
- `BlinkingIcon` - Commented out but works in production
- `DoubleIconLink` - Commented out but works in production
- `ResponseFieldGroup` - Commented out due to bug (`Expandable is not defined`)
- `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Divider` - Commented out (require ThemeData)
- `YouTubeVideo`, `CardVideo` - Commented out due to bug (`convertToPrivacyEnhancedUrl is not defined`)
- `StyledSteps` (live example) - Commented out due to React error #418

### Status Unknown:
- `BlinkingTerminal` - Deprecated alias
- `ListSteps` - Has bug
- `ApiBaseUrlsTable` - Has bug
- `AccordionLayout` - React error #418
- Gateway components (commented out due to dependency issues)
- Portal components (commented out but actively used in 8 pages!)

---

## Critical Findings

### 1. Portal Components Are Actively Used But Not Documented

**8 Portal components** are used in **8 production portal pages** but are:
- NOT in component library (or commented out)
- Critical for portal page functionality
- Should be documented immediately

**Components:**
- `HeroSectionContainer`
- `HeroImageBackgroundComponent`
- `HeroContentContainer`
- `LogoHeroContainer`
- `PortalCardsHeader`
- `PortalContentContainer`
- `PortalHeroContent`
- `PortalSectionHeader`

### 2. Components With Bugs That Need Fixing

1. **ResponseFieldGroup** - `Expandable is not defined` (used in component library)
2. **YouTubeVideo/CardVideo** - `convertToPrivacyEnhancedUrl is not defined` (used in production)
3. **ListSteps** - `Cannot read properties of undefined (reading 'map')` (not used)
4. **ApiBaseUrlsTable** - `url is not defined` (not used)
5. **StyledSteps** - React error #418 (used in component library)

### 3. Unused Components

5 components are exported but never used:
- `ApiBaseUrlsTable` (has bug)
- `BlinkingTerminal` (deprecated)
- `CardInCardLayout` (unused)
- `ListSteps` (has bug)
- `RefCardContainer` (unused)

---

## Recommendations

### Priority 1: Document Portal Components
- Add all 8 Portal components to `component-library/domain.mdx`
- These are critical for portal pages and actively used

### Priority 2: Fix Component Bugs
- Fix `ResponseFieldGroup` bug (Expandable issue)
- Fix `YouTubeVideo/CardVideo` bug (convertToPrivacyEnhancedUrl)
- Fix `ListSteps` bug (if needed)
- Fix `ApiBaseUrlsTable` bug (if needed)

### Priority 3: Clean Up Unused Components
- Remove `RefCardContainer` if truly unused
- Remove `CardInCardLayout` if truly unused
- Remove `BlinkingTerminal` if deprecated (or document as alias)

### Priority 4: Uncomment Working Components
- Uncomment `BlinkingIcon` (works in production)
- Uncomment `DoubleIconLink` (works in production)
- Document `frameMode` components (PageHeader, H1-H6, P, Divider) - they work but use ThemeData

---

## Detailed Component List

### All Exported Components (114 total)

See `component-usage-audit.json` for complete list with file locations and categories.
