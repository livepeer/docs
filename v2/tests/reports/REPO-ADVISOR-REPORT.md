# REPO ADVISOR REPORT: Livepeer Docs V2

**Generated:** 2026-01-11  
**Scope:** V2 documentation structure, layout, and organization  
**Status:** 📋 REPORT ONLY - NO FIXES APPLIED

---

## Executive Summary

This Mintlify documentation project demonstrates a well-structured approach with clear information architecture and thoughtful organization. The v2 documentation shows significant improvements over v1, with better separation of concerns, comprehensive automation, and a strong focus on user journeys.

### Key Metrics

| Metric                | Count | Status |
| --------------------- | ----- | ------ |
| Total MDX Pages (v2)  | 293   | ✅     |
| Custom Components     | 20    | ✅     |
| Active Parsing Errors | 13    | 🔴     |
| Missing Imports       | 3     | 🔴     |
| Navigation Tabs       | 7     | ✅     |
| Automation Scripts    | 10+   | ✅     |

---

## 1. STRUCTURE ANALYSIS

### 1.1 Current Structure (V2)

```
v2/
├── pages/                    # Content organized by domain
│   ├── 00_home/             # Landing & showcase
│   ├── 01_about/            # Protocol & ecosystem
│   ├── 02_community/        # Community resources
│   ├── 03_developers/       # Developer guides
│   ├── 04_gateways/         # Gateway operators
│   ├── 05_orchestrators/    # Orchestrator guides
│   ├── 06_delegators/       # Delegator information
│   ├── 07_resources/        # Reference materials
│   ├── 08_help/             # Support & troubleshooting
│   └── 09_internal/         # Internal documentation
├── tests/                   # Validation & reports
│   ├── reports/            # Generated reports
│   └── scripts/            # Test automation
├── ai-tools/               # AI integration guides
└── style.css               # Custom styling

snippets/                    # Shared resources (root level)
├── components/             # Reusable React components
│   ├── primitives/        # Basic UI elements
│   ├── layout/            # Layout components
│   ├── display/           # Media & embeds
│   ├── content/           # Content components
│   ├── integrations/      # Third-party integrations
│   └── domain/            # Domain-specific components
├── assets/                # Static assets
├── data/                  # Data sources & APIs
├── automationData/        # Fetched external data
├── scripts/               # Automation scripts
└── snippetsWiki/          # Component documentation
```

### 1.2 Configuration Structure

**Root Configuration:** `docs.json` (Mintlify standard)

- ✅ Uses modern `docs.json` format (not deprecated `mint.json`)
- ✅ Implements versioning (v1 and v2)
- ✅ Multi-language support structure (currently English only)
- ✅ Tab-based navigation with anchors
- ⚠️ Some duplicate groups in navigation (lines 60-91 in docs.json)

---

## 2. STRENGTHS

### 2.1 Information Architecture

- **Clear User Journeys:** Numbered folder prefixes (00-09) enforce logical ordering
- **Domain-Driven Design:** Content organized by user persona (developers, gateways, orchestrators, delegators)
- **Separation of Concerns:** Clean split between content (v2/pages) and reusable components (snippets)
- **Comprehensive Documentation:** Internal docs folder (09_internal) for maintainers

### 2.2 Component Organization

- **Well-Structured:** Components follow functional categorization (primitives, layout, display, content)
- **Domain-Specific Components:** Separate folder for domain logic
- **Documentation:** snippetsWiki provides component usage examples
- **Automation:** Scripts for component library updates

### 2.3 Automation & Data Fetching

- **External Data Integration:** Automated fetching from GitHub, forums, blogs
- **API Documentation Generation:** Automated from OpenAPI specs
- **Version Management:** Scripts fetch latest versions for code examples
- **Validation:** Automated link checking and import validation

### 2.4 Best Practices Followed

- ✅ Docs-as-code approach
- ✅ Version control with Git
- ✅ Automated testing and validation
- ✅ Component-based architecture
- ✅ Clear README documentation
- ✅ Separation of v1 and v2 content

---

## 3. AREAS FOR IMPROVEMENT

### 3.1 Critical Issues (Must Fix)

#### Parsing Errors (13 files)

**Impact:** Pages fail to render correctly
**Files Affected:**

- `v2/pages/04_gateways/about-gateways/gateway-explainer.mdx` - Typo: `</Accordian>` should be `</Accordion>`
- `snippets/api-base-urls-table.mdx` - Bad comment syntax `{/_` should be `{/*`
- 10+ files with acorn expression parse errors (curly braces in text not escaped)

**Recommendation:**

1. Fix typo in gateway-explainer.mdx
2. Escape curly braces in text content: `\{` and `\}`
3. Replace HTML comments `<!-- -->` with MDX comments `{/* */}`

#### Missing Imports (3 files)

**Impact:** Pages cannot load required content

**Files Affected:**

- `/snippets/variables.mdx` - imported by `v2/pages/00_home/home/livepeer-tl-dr.mdx`
- `/snippets/variables/home.mdx` - imported by `v2/pages/00_home/home/livepeer-tl-dr.mdx`
- `/snippets/components` - imported by `v2/pages/05_orchestrators/orchestrators-home.mdx`

**Recommendation:**

1. Create missing files or update import paths
2. Verify actual location: `snippets/data/variables.mdx` exists, update import path
3. Fix component import to point to specific component file

### 3.2 Navigation Issues

#### Duplicate Groups

**Location:** `docs.json` lines 60-91
**Issue:** "Home", "Livepeer Showcase", and "Get Started" groups appear twice in the same anchor

**Recommendation:** Remove duplicate group definitions to clean up navigation

#### Navigation Complexity

**Issue:** Deep nesting in some sections (4-5 levels)
**Impact:** User experience - difficult to navigate deeply nested content

**Recommendation:**

- Flatten navigation where possible
- Consider using tabs within pages instead of nested navigation
- Maximum 3 levels of nesting recommended by Mintlify

### 3.3 File Organization

#### Numbered Prefixes

**Current:** `00_home`, `01_about`, etc.
**Pros:** Enforces ordering, clear hierarchy
**Cons:** Harder to reference in code, less semantic

**Alternative Approach:**

```
v2/pages/
├── home/
├── about/
├── community/
├── developers/
├── gateways/
├── orchestrators/
├── delegators/
├── resources/
├── help/
└── internal/
```

**Recommendation:** Consider removing number prefixes if navigation order can be controlled via `docs.json` alone. This would make paths more semantic and easier to reference.

#### Snippets Location

**Current:** Snippets at root level (outside v2/)
**Pros:** Shared across v1 and v2
**Cons:** Not clear from v2 folder structure

**Recommendation:**

- Keep current structure if sharing between versions
- Add clear documentation in v2/README.mdx about snippets location
- Consider symlinking or documenting the relationship

---

## 4. UNUSED FILES & COMPONENTS

### 4.1 Potentially Unused Files

**Method:** Cross-reference navigation in `docs.json` with actual files

#### Files Not in Navigation

Based on the navigation structure, the following files may not be linked:

- `v2/pages/09_internal/*` - Hidden tab (intentional)
- Test files in `v2/tests/` (intentional)
- README files (documentation, not content)

**Recommendation:** Run automated audit to identify orphaned pages:

```bash
# Script to find MDX files not referenced in docs.json
find v2/pages -name "*.mdx" | while read file; do
  if ! grep -q "$file" docs.json; then
    echo "Not in navigation: $file"
  fi
done
```

### 4.2 Component Usage Analysis

**Total Components:** 20 JSX/TSX files in `snippets/components/`

**High-Value Components:**

- Layout components (cards, lists, steps, tables)
- Display components (video, image, embed)
- Domain-specific components (gateways callouts, quickstart tabs)

**Recommendation:** Audit component usage across all MDX files to identify unused components

---

## 5. MINTLIFY BEST PRACTICES COMPARISON

### 5.1 What's Done Well ✅

1. **Modern Configuration**
   - Using `docs.json` (not deprecated `mint.json`)
   - Proper versioning structure
   - Tab-based navigation

2. **Content Organization**
   - Clear separation of concerns
   - Reusable snippets
   - Component library

3. **Automation**
   - CI/CD integration
   - Automated validation
   - Data fetching scripts

4. **SEO & Metadata**
   - Timestamp enabled
   - Custom metadata per page
   - Proper redirects configured

5. **Styling**
   - Custom theme (palm)
   - Brand colors configured
   - Custom CSS for additional styling

### 5.2 Mintlify Recommendations Not Implemented ⚠️

1. **Asset Organization**
   - **Current:** Assets in `snippets/assets/`
   - **Mintlify Recommendation:** Assets in root `/images/` or `/public/`
   - **Impact:** Longer import paths
   - **Recommendation:** Consider moving to root-level `/images/` folder

2. **Component Imports**
   - **Current:** Absolute paths `/snippets/components/...`
   - **Mintlify Recommendation:** Relative paths or configured aliases
   - **Impact:** Verbose import statements
   - **Recommendation:** Configure path aliases in Mintlify config

3. **API Documentation**
   - **Current:** OpenAPI spec at root level
   - **Status:** ✅ Correctly configured
   - **Recommendation:** None needed

4. **Search Configuration**
   - **Current:** Custom prompt "Need help? Ask our AI"
   - **Status:** ✅ Good UX
   - **Recommendation:** None needed

---

## 6. EASIER WAYS TO ORGANIZE

### 6.1 Alternative Structure: Flat Pages

**Current Challenge:** Numbered prefixes make paths verbose

**Alternative:**

```
v2/
├── content/              # All MDX content
│   ├── home/
│   ├── about/
│   ├── developers/
│   └── ...
├── components/           # Move from snippets
├── assets/              # Move from snippets
├── data/                # Move from snippets
└── docs.json           # Navigation defines order
```

**Pros:**

- Cleaner paths
- More semantic URLs
- Easier to reference

**Cons:**

- Loses visual ordering in file system
- Requires strict navigation management in docs.json

### 6.2 Alternative: Monorepo Structure

**For Large Teams:**

```
packages/
├── docs-v2/
│   ├── pages/
│   ├── components/
│   └── docs.json
├── docs-v1/
│   └── ...
└── shared/
    ├── components/
    └── assets/
```

**Pros:**

- Clear separation
- Independent versioning
- Shared resources explicit

**Cons:**

- More complex build
- Requires monorepo tooling

### 6.3 Recommended: Hybrid Approach

**Keep current structure but:**

1. Remove number prefixes from folders
2. Use `docs.json` for ordering
3. Move snippets into v2/ as `v2/shared/`
4. Keep automation scripts at root

```
v2/
├── pages/
│   ├── home/
│   ├── about/
│   └── ...
├── shared/              # Renamed from snippets
│   ├── components/
│   ├── assets/
│   └── data/
└── docs.json

scripts/                 # Root level automation
```

---

## 7. ERRORS & ISSUES SUMMARY

### 7.1 Critical (Blocking) 🔴

| Issue           | Count | Impact               | Priority |
| --------------- | ----- | -------------------- | -------- |
| Parsing Errors  | 13    | Pages fail to render | P0       |
| Missing Imports | 3     | Content cannot load  | P0       |
| Missing Exports | 1     | Component fails      | P1       |

### 7.2 High Priority 🟡

| Issue                | Count    | Impact               | Priority |
| -------------------- | -------- | -------------------- | -------- |
| Duplicate Navigation | 3 groups | Confusing UX         | P1       |
| Deep Nesting         | Multiple | Hard to navigate     | P2       |
| Verbose Paths        | All      | Developer experience | P2       |

### 7.3 Low Priority 🟢

| Issue             | Count       | Impact                | Priority |
| ----------------- | ----------- | --------------------- | -------- |
| Number Prefixes   | All folders | Aesthetic             | P3       |
| Snippets Location | 1           | Documentation clarity | P3       |

---

## 8. RECOMMENDATIONS SUMMARY

### 8.1 Immediate Actions (Week 1)

1. **Fix Parsing Errors**
   - Fix typo: `</Accordian>` → `</Accordion>`
   - Fix comment syntax: `{/_` → `{/*`
   - Escape curly braces in text content

2. **Fix Missing Imports**
   - Create or update paths for missing files
   - Verify component imports

3. **Remove Duplicate Navigation**
   - Clean up docs.json navigation structure

### 8.2 Short-term Improvements (Month 1)

1. **Flatten Navigation**
   - Reduce nesting to max 3 levels
   - Use tabs within pages for complex content

2. **Component Audit**
   - Identify unused components
   - Document component usage
   - Add JSDoc to all components

3. **Path Optimization**
   - Consider removing number prefixes
   - Configure path aliases

### 8.3 Long-term Enhancements (Quarter 1)

1. **Structure Refactor**
   - Move to hybrid structure (remove prefixes, use docs.json ordering)
   - Consolidate snippets into v2/shared/

2. **Asset Organization**
   - Move assets to root-level /images/
   - Optimize image sizes and formats

3. **Automation Enhancement**
   - Add orphaned page detection
   - Add component usage tracking
   - Automated broken link fixing

---

## 9. UNUSED FILES REPORT

### 9.1 Methodology

To identify unused files, cross-reference:

1. Files in `v2/pages/` directory
2. References in `docs.json` navigation
3. Import statements in other MDX files

### 9.2 Findings

**Internal Documentation (Intentionally Hidden):**

- `v2/pages/09_internal/*` - Hidden tab, used by maintainers ✅

**Test & Reports (Not Content):**

- `v2/tests/*` - Testing infrastructure ✅
- `v2/tests/reports/*` - Generated reports ✅

**README Files (Documentation):**

- `v2/README.mdx` - Project documentation ✅
- `v2/pages/README.mdx` - Pages documentation ✅

**Potentially Orphaned:**

- Requires automated scan to identify
- Recommendation: Run script to find MDX files not in navigation

### 9.3 Component Usage

**Components Verified in Use:**

- Layout components (cards, lists, steps)
- Display components (video, image, embed)
- Domain components (gateway callouts, quickstart tabs)

**Recommendation:** Run usage audit:

```bash
# Find component usage
for comp in snippets/components/**/*.jsx; do
  echo "Checking: $comp"
  grep -r "$(basename $comp .jsx)" v2/pages/ || echo "  ⚠️  Not found"
done
```

---

## 10. CONCLUSION

### Overall Assessment: **B+ (Very Good)**

**Strengths:**

- ✅ Well-organized structure with clear user journeys
- ✅ Comprehensive automation and data fetching
- ✅ Modern Mintlify configuration
- ✅ Strong component library
- ✅ Good documentation for maintainers

**Areas for Improvement:**

- 🔴 Fix critical parsing errors (13 files)
- 🔴 Resolve missing imports (3 files)
- 🟡 Simplify navigation structure
- 🟡 Consider removing number prefixes
- 🟢 Optimize asset organization

### Next Steps

1. **Immediate:** Fix parsing errors and missing imports
2. **Short-term:** Clean up navigation, audit components
3. **Long-term:** Consider structure refactor for better DX

### Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [Mintlify Best Practices](https://mintlify.com/docs/organize/settings)
- [Component Organization Guide](snippets/snippetsWiki/README.md)
- [Existing Reports](v2/tests/reports/)

---

**Report Generated By:** Augment Agent
**Date:** 2026-01-11
**Version:** 1.0
**Status:** REPORT ONLY - NO CHANGES MADE
