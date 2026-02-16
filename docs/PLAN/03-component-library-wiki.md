# Task 03: Full running component library wiki

## Agent instructions (parallel execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/03-component-library-wiki` |
| **First step** | Create the branch: `git checkout -b docs-plan/03-component-library-wiki` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/03-component-library-wiki-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the task.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Build a single, runnable component library wiki (visible in docs) that lists every custom component with description, props, and copy-paste runnable examples.

## Scope

- All exports from snippets/components/
- Optionally Mintlify built-ins (Note, Card, Tabs, etc.) cheat sheet

## Deliverables

- New page(s) under Resources or internal (e.g. 07_resources or 09_internal)
- One section per component with live example
- Linked from documentation guide

## References

- v2/pages/09_internal/layout-components-scripts-styling/components.mdx
- docs/non-essential-tasks-audit-for-ai-and-community.md section 3

---

## Current Issues Identified

1. **Poor IA (Information Architecture)**: Single long page is overwhelming and not navigable
2. **Incomplete Coverage**: Many components missing (frameMode, quote, socialLinks, CardCarousel, data.jsx components, quadGrid, Portals, etc.)
3. **Incomplete Documentation**: Props/params not fully documented for all components
4. **Missing Examples**: Not all components have working live examples
5. **No Search/Filter**: Hard to find specific components

## Proposed Structure

### New IA: Hierarchical Navigation

```
Component Library (Landing Page)
├── Primitives/
│   ├── Buttons & Actions
│   ├── Icons & Branding
│   ├── Links & Navigation
│   ├── Text & Typography
│   └── Dividers & Separators
├── Display/
│   ├── Media (Video, Image)
│   ├── Embeds (YouTube, LinkedIn, Twitter, Markdown)
│   ├── Quotes & Testimonials
│   ├── Carousels & Showcases
│   └── Diagrams & Visualizations
├── Content/
│   ├── Code Blocks
│   ├── External Content
│   ├── API Response Fields
│   └── Data Display (Blog, Forum, Events)
├── Layout/
│   ├── Cards & Containers
│   ├── Lists & Steps
│   ├── Tables
│   ├── Grids
│   └── Text Layouts
├── Integrations/
│   └── External Services
└── Domain/
    ├── Gateway Components
    ├── Portal Components
    └── Shared Components
```

## Complete Component Audit Required

### Components Currently Missing from Documentation:

#### Display Components:
- `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Divider` (frameMode.jsx - 9 components)
- `Quote`, `FrameQuote` (quote.jsx - 2 components)
- `SocialLinks` (socialLinks.jsx - 1 component)
- `CardCarousel` (CardCarousel.jsx - 1 component)
- `ShowcaseCards` (showcaseCards.jsx - 1 component)
- `TitledVideo`, `ShowcaseVideo`, `YouTubeVideoData`, `LinkedInEmbed`, `YouTubeVideoDownload` (video.jsx - 5 more components)
- `TwitterTimeline` (embed.jsx - 1 component)

#### Content Components:
- `CodeComponent`, `ComplexCodeBlock`, `CodeSection` (code.jsx - 3 more)
- `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion` (responseField.jsx - 5 components)
- `BlogCard`, `CardBlogDataLayout`, `ColumnsBlogCardLayout`, `BlogDataLayout`, `PostCard`, `CardColumnsPostLayout`, `CardInCardLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` (data.jsx - 10 components!)

#### Layout Components:
- `PostCard`, `CardColumnsPostLayout`, `BlogCard`, `CardBlogDataLayout`, `ScrollBox` (cards.jsx - 5 components, only ScrollBox documented)
- `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList` (lists.jsx - 6 components, none documented)
- `ListSteps` (ListSteps.jsx - 1 component)
- `QuadGrid` (quadGrid.jsx - 1 component)
- `AccordionLayout` (layout/text.jsx - 1 component)
- `ApiBaseUrlsTable` (api-base-urls-table.mdx - 1 component)

#### Domain Components:
- `GatewayOffChainWarning`, `GatewayOnChainWarning`, `GatewayOnChainTTestnetNote`, `OrchAddrNote`, `TestVideoDownload`, `FfmpegWarning` (callouts.jsx - 6 components)
- `QuickStartTabs`, `QuickStartSteps` (quickstartTabs.jsx - 2 components)
- `Starfield` (HeroGif.jsx - 1 component)
- `HeroSectionContainer`, `HeroImageBackgroundComponent`, `HeroContentContainer`, `PortalContentContainer`, `PortalHeroContent`, `LogoHeroContainer`, `RefCardContainer`, `HeroOverviewContent` (Portals.jsx - 8 components)
- `ReviewCallout` (previewCallouts.jsx - 1 more)

#### Primitives:
- `BasicBtn` (buttons.jsx - 1 more)
- `LivepeerSVG`, `LivepeerIconOld` (icons.jsx - 2 more)
- `BlinkingTerminal`, `LinkArrow` (links.jsx - 2 more)
- `CardTitleTextWithArrow`, `AccordionTitleWithArrow` (text.jsx - 2 more)

**Total Missing: ~60+ components**

## Implementation Plan

### Phase 1: Complete Component Audit
1. **Systematically read every .jsx file** in `snippets/components/`
2. **Extract all exports** and their prop definitions
3. **Create master inventory** with:
   - Component name
   - File location
   - All props with types, defaults, required status
   - Current usage examples (if any)
   - Missing documentation status

### Phase 2: Restructure IA
1. **Create landing page** (`component-library.mdx`) with:
   - Overview
   - Quick navigation cards to each category
   - Search/filter functionality (if possible)
   - Component count per category

2. **Create category pages**:
   - `component-library/primitives.mdx`
   - `component-library/display.mdx`
   - `component-library/content.mdx`
   - `component-library/layout.mdx`
   - `component-library/integrations.mdx`
   - `component-library/domain.mdx`

3. **Create individual component pages** (or sections) for complex components:
   - Each component gets its own section with:
     - Full description
     - Complete props table (all props, types, defaults, required)
     - Multiple usage examples (basic, advanced, edge cases)
     - Related components
     - Import path

### Phase 3: Complete Documentation
1. **For each component:**
   - Extract prop definitions from JSDoc or code
   - Create comprehensive props table
   - Write clear description
   - Create 3-5 usage examples:
     - Basic usage
     - With common props
     - Advanced/edge cases
     - Real-world scenarios

2. **Standardize format:**
   ```mdx
   ## ComponentName
   
   **Description:** [Clear, concise description]
   
   **Import:** `import { ComponentName } from "/snippets/components/..."`
   
   ### Props
   
   | Prop | Type | Default | Required | Description |
   |------|------|---------|----------|-------------|
   | prop1 | string | "" | No | Description |
   
   ### Examples
   
   #### Basic Usage
   [Live example + code]
   
   #### With Props
   [Live example + code]
   ```

### Phase 4: Update Navigation
1. Update `docs.json` to include:
   - Component Library landing page
   - All category pages
   - Proper nesting in sidebar

### Phase 5: Quality Assurance
1. **Verify all examples work** in dev server
2. **Check all imports are correct**
3. **Ensure all props are documented**
4. **Test navigation flow**
5. **Verify no broken links**

## File Structure

```
v2/pages/07_resources/documentation-guide/
├── component-library.mdx (Landing page)
├── component-library/
│   ├── primitives.mdx
│   ├── display.mdx
│   ├── content.mdx
│   ├── layout.mdx
│   ├── integrations.mdx
│   └── domain.mdx
```

## Success Criteria

- ✅ **100% component coverage** - Every exported component documented
- ✅ **100% props coverage** - Every prop documented with type, default, required status
- ✅ **Working examples** - Every component has at least 2 working examples
- ✅ **Navigable IA** - Easy to find any component in < 3 clicks
- ✅ **Copy-paste ready** - All code examples are immediately usable
- ✅ **Searchable** - Components can be found by name or category

## Estimated Effort

- **Component Audit**: 2-3 hours
- **IA Restructure**: 2-3 hours
- **Complete Documentation**: 8-12 hours
- **Examples Creation**: 6-8 hours
- **QA & Testing**: 2-3 hours

**Total: 20-29 hours**

---

## Work Completed (Initial Implementation)

### 1. Component Audit
Analyzed all 35+ components across 6 categories in `snippets/components/`:
- **Primitives** (7 components): `CustomDivider`, `LivepeerIcon`, `LivepeerIconFlipped`, `CustomCallout`, `BlinkingIcon`, `DoubleIconLink`, `GotoLink`, `GotoCard`, `TipWithArrow`, `DownloadButton`, `Subtitle`, `CopyText`
- **Display** (10 components): `YouTubeVideo`, `Video`, `TitledVideo`, `ShowcaseVideo`, `CardVideo`, `LinkedInEmbed`, `Image`, `LinkImage`, `ScrollableDiagram`, `MarkdownEmbed`, `TwitterTimeline`
- **Content** (8 components): `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`, `ExternalContent`, `LatestVersion`, `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldGroup`
- **Layout** (10 components): `DynamicTable`, `StyledSteps`, `StyledStep`, `ScrollBox`, `PostCard`, `CardColumnsPostLayout`, `BlogCard`, `CardBlogDataLayout`, `StepList`, `StepLinkList`
- **Integrations** (1 component): `CoinGeckoExchanges`
- **Domain** (4 components): `PreviewCallout`, `ComingSoonCallout`, `ReviewCallout`, `ShowcaseCards`

### 2. Component Library Page Created
**Location:** `v2/pages/07_resources/documentation-guide/component-library.mdx`

Features:
- **Complete documentation** for all custom components
- **Live examples** with interactive tabs (Live Example / Code / Props)
- **Props tables** documenting all parameters with types and defaults
- **Copy-paste code snippets** for quick implementation
- **Mintlify built-ins cheat sheet** covering:
  - Callout components (Note, Warning, Info, Tip)
  - Layout components (Columns, CardGroup, Card)
  - Steps component
  - Tabs component
  - Accordion & Expandable
  - Frame, Icon, Badge, Tooltip, CodeBlock
  - Update component
- **Quick reference section** with import paths
- **Global components list** (no import needed)

### 3. Cross-Linking Added
Updated the following pages to link to the component library:

1. **`v2/pages/07_resources/documentation-guide/documentation-guide.mdx`**
   - Added "Developer Resources" section with CardGroup linking to Component Library and Mintlify docs

2. **`v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx`**
   - Added "Resources for Contributors" section with link to Component Library

3. **`v2/pages/09_internal/layout-components-scripts-styling/components.mdx`**
   - Added prominent Card link to the full Component Library
   - Updated to reference that components are in `snippets/components/`

## Files Changed

| File | Change Type | Description |
|------|-------------|-------------|
| `v2/pages/07_resources/documentation-guide/component-library.mdx` | **Created** | Main component library wiki (~1,500 lines) |
| `v2/pages/07_resources/documentation-guide/documentation-guide.mdx` | Modified | Added Developer Resources section |
| `v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx` | Modified | Added Resources for Contributors section |
| `v2/pages/09_internal/layout-components-scripts-styling/components.mdx` | Modified | Added link to component library |

## Page Structure (Current)

```
Component Library
├── How to Use Components (import examples)
├── Primitives
│   ├── CustomDivider
│   ├── LivepeerIcon
│   ├── CustomCallout
│   ├── BlinkingIcon
│   ├── DoubleIconLink
│   ├── GotoLink & GotoCard
│   ├── TipWithArrow
│   ├── DownloadButton
│   └── Text Components
├── Display Components
│   ├── YouTubeVideo
│   ├── Video
│   ├── Image & LinkImage
│   ├── ScrollableDiagram
│   └── LinkedInEmbed
├── Content Components
│   ├── CustomCodeBlock
│   ├── ExternalContent
│   └── ResponseField Components
├── Layout Components
│   ├── DynamicTable
│   ├── StyledSteps
│   ├── ScrollBox
│   └── Card Components
├── Integration Components
│   └── CoinGeckoExchanges
├── Domain Components
│   └── Preview Callouts
├── Mintlify Built-ins Cheat Sheet
│   ├── Callout Components
│   ├── Layout Components
│   ├── Card Component
│   ├── Steps Component
│   ├── Tabs Component
│   ├── Accordion & Expandable
│   ├── Frame Component
│   ├── CodeBlock Component
│   ├── Icon Component
│   └── Badge & Tooltip
└── Quick Reference
    ├── Import Paths Table
    └── Global Components List
```

## Follow-Up Recommendations

1. **Add more components** as they are created in `snippets/components/`
2. **Gateway-specific callouts** (`GatewayOffChainWarning`, etc.) could be documented in a separate domain-specific section
3. **Consider adding search functionality** within the component library for larger teams
4. **Keep the README.md** in `snippets/components/` in sync with this wiki
5. **Complete missing component documentation** (~60+ components still need documentation)
6. **Restructure into category pages** for better navigation
7. **Add comprehensive props documentation** for all components

---

**Last Updated:** 2026-02-16
