You're absolutely right. Let me revert all changes and do a proper comprehensive
review.

✅ All changes reverted. Now let me do a comprehensive count and review:

Now let me count the exported components in each file:

Now let me check for components that use `export` but aren't at the start of the
line:

Let me search for all component definitions in these files:

Perfect! Now let me analyze each file for hardcoded colors and determine what
SHOULD and SHOULD NOT be dynamic:

Now let me create a comprehensive report. Let me check what colors are actually
theme colors vs decorative:

Now I need to check what the full ThemeData object contains. Let me look at the
current state:

I see the ThemeData is very limited. Let me create a comprehensive analysis
report:

---

## 📊 COMPREHENSIVE COMPONENT AUDIT REPORT

### Total Files: 24 JSX files

### Total Components: 56 named components

---

## 📁 FILE-BY-FILE COMPONENT COUNT

### **Content Components** (4 files, 6 components)

1. **code.jsx** - 4 components
   - `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`
2. **external-content.jsx** - 1 component
   - `ExternalContent`
3. **release.jsx** - 1 component
   - `LatestVersion`
4. **responseField.jsx** - 0 exported components

### **Display Components** (5 files, 17 components)

5. **embed.jsx** - 2 components
   - `MarkdownEmbed`, `EmbedMarkdown`
6. **frameMode.jsx** - 9 components
   - `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Divider`
7. **image.jsx** - 2 components
   - `Image`, `LinkImage`
8. **video.jsx** - 3 components
   - `YouTubeVideo`, `YouTubeVideoDownload`, `CardVideo`
9. **zoomable-diagram.jsx** - 1 component
   - `ScrollableDiagram`

### **Domain Components** (4 files, 14 components)

10. **domain/04_GATEWAYS/callouts.jsx** - 6 components
    - `GatewayOffChainWarning`, `GatewayOnChainWarning`,
      `GatewayOnChainTTestnetNote`, `OrchAddrNote`, `TestVideoDownload`,
      `FfmpegWarning`
11. **domain/04_GATEWAYS/quickstartTabs.jsx** - 2 components
    - `QuickStartTabs`, `QuickStartSteps`
12. **domain/SHARED/HeroGif.jsx** - 1 component
    - `Starfield`
13. **domain/SHARED/Portals.jsx** - 8 components
    - `HeroSectionContainer`, `HeroImageBackgroundComponent`,
      `HeroContentContainer`, `PortalContentContainer`, `PortalHeroContent`,
      `LogoHeroContainer`, `RefCardContainer`, `HeroOverviewContent`
14. **domain/SHARED/previewCallouts.jsx** - 3 components
    - `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout`

### **Integration Components** (1 file, 1 component)

15. **integrations/coingecko.jsx** - 1 component
    - `CoinGeckoExchanges`

### **Layout Components** (5 files, 14 components)

16. **layout/ListSteps.jsx** - 1 component
    - `ListSteps`
17. **layout/cards.jsx** - 4 components
    - `PostCard`, `CardColumnsPostLayout`, `BlogCard`, `CardBlogDataLayout`
18. **layout/lists.jsx** - 6 components
    - `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`,
      `UpdateLinkList`
19. **layout/steps.jsx** - 2 components
    - `StyledSteps`, `StyledStep`
20. **layout/table.jsx** - 1 component
    - `DynamicTable`

### **Primitive Components** (4 files, 14 components)

21. **primitives/buttons.jsx** - 2 components
    - `BasicBtn`, `DownloadButton`
22. **primitives/divider.jsx** - 1 component
    - `CustomDivider`
23. **primitives/icons.jsx** - 4 components
    - `LivepeerSVG`, `LivepeerIconOld`, `LivepeerIconFlipped`, `LivepeerIcon`
24. **primitives/links.jsx** - 7 components
    - `CustomCallout`, `BlinkingIcon`, `BlinkingTerminal`, `DoubleIconLink`,
      `GotoLink`, `GotoCard`, `TipWithArrow`

---

## 🎨 COLOR ANALYSIS

### **Colors That SHOULD BE DYNAMIC** (Theme-dependent)

These use Livepeer brand green `#2d9a67`, `#3CB540`, `#18794e` or neutral grays
that should adapt to theme:

1. **external-content.jsx**
   - ✅ Border: `#2d9a67` → Should use theme accent
   - ✅ Background: `#0d0d0d` → Should use theme card background
   - ✅ Link color: `#2d9a67` → Should use theme accent

2. **zoomable-diagram.jsx**
   - ✅ Border: `#333` → Should use theme border
   - ✅ Background: `#0d0d0d` → Should use theme card background
   - ✅ Button background: `#2d9a67` → Should use theme accent
   - ✅ Text: `#fff`, `#666`, `#888` → Should use theme text colors

3. **table.jsx**
   - ⚠️ **SPECIAL CASE**: Header background `#2d9a67` with text `#fff`
     - **DO NOT make text dynamic** - white text on green background is
       intentional
     - Only the border colors should be dynamic: `#2d9a67` → theme accent,
       `#333` → theme border

4. **code.jsx**
   - ✅ Note text: `#9ca3af` → Should use theme muted text

5. **divider.jsx**
   - ✅ Divider color: `#e5e7eb` → Should use theme border

6. **links.jsx**
   - ✅ Default color parameter: `#2d9a67` → Should use theme accent (but allow
     override)
   - ✅ Hardcoded icon: `#2d9a67` → Should use theme accent

7. **callouts.jsx** (04_GATEWAYS)
   - ✅ Icon color: `#2d9a67` → Should use theme accent

8. **coingecko.jsx**
   - ⚠️ **SPECIAL CASE**: Header background `#2d9a67` with text `#fff`
     - **DO NOT make text dynamic** - white text on green background is
       intentional
     - Border colors: `#2d9a67` → theme accent, `#333` → theme border
     - Link color: `#2d9a67` → theme accent
     - ❌ **Trust score colors MUST STAY FIXED**: `#fbbf24` (yellow), `#22c55e`
       (green), `#ef4444` (red) - these are semantic

9. **steps.jsx**
   - ✅ Icon color: `#18794e` → Should use theme accent (darker variant)
   - ✅ Title color: `#2b9a66` → Should use theme accent
   - ✅ Line color: `#2b9a66` → Should use theme accent

### **Colors That SHOULD NOT BE DYNAMIC** (Semantic/Decorative)

1. **previewCallouts.jsx**
   - ❌ `#368add` (blue) - Semantic color for "Coming Soon"
   - ❌ `#b636dd` (purple) - Semantic color for "Preview/Review"
   - **Reason**: These are intentionally different colors to distinguish callout
     types

2. **responseField.jsx**
   - ❌ `#3b82f6` (blue) - Syntax highlighting color
   - **Reason**: Code syntax highlighting should remain consistent

3. **coingecko.jsx** - Trust scores
   - ❌ `#fbbf24` (yellow), `#22c55e` (green), `#ef4444` (red)
   - **Reason**: Semantic colors representing trust levels (universal meaning)

4. **HeroGif.jsx** - Starfield
   - ❌ `#3CB540`, `#2b9a66`, `#18794E`, `#6BBF59`
   - **Reason**: Decorative animation with specific brand color palette

5. **frameMode.jsx**
   - ❌ Default icon colors in examples/docs
   - ✅ BUT fallback `#fff` in var() should use theme
   - **Reason**: Icon colors are user-customizable parameters

6. **icons.jsx**
   - ❌ SVG fill `#fff` in LivepeerSVG
   - ✅ BUT CSS variable fallbacks should use theme
   - **Reason**: SVG internal colors are structural

---

## 🔧 COMPONENTS NEEDING UPDATES

### **HIGH PRIORITY** - Must Update (7 files)

1. **external-content.jsx** ✅
   - Update border, background, link colors to use ThemeData

2. **zoomable-diagram.jsx** ✅
   - Update all colors to use ThemeData

3. **table.jsx** ⚠️
   - Update border colors ONLY
   - **KEEP** white text on green header

4. **code.jsx** ✅
   - Update muted text colors

5. **divider.jsx** ✅
   - Update divider color

6. **links.jsx** ✅
   - Update default color parameters to use ThemeData

7. **coingecko.jsx** ⚠️
   - Update border and link colors
   - **KEEP** white text on green header
   - **KEEP** trust score colors fixed

### **MEDIUM PRIORITY** - Should Update (2 files)

8. **callouts.jsx** (04_GATEWAYS) ✅
   - Update icon color

9. **steps.jsx** ✅
   - Update default color parameters

### **LOW PRIORITY / NO CHANGE** (3 files)

10. **previewCallouts.jsx** ❌ NO CHANGE
11. **responseField.jsx** ❌ NO CHANGE
12. **HeroGif.jsx** ❌ NO CHANGE

---

## ⚠️ CRITICAL NOTES

### **ThemeData Limitations**

Current ThemeData only has:

- `accent`, `heroText`, `text`

**MISSING** theme properties needed:

- `background`
- `cardBackground`
- `border`
- `mutedText`

**ACTION REQUIRED**: Expand ThemeData before making component updates!

### **Table/Header Rule**

When background is a **fixed brand color** (green), text should be **fixed
contrasting color** (white). Only borders should be dynamic.

---

**RECOMMENDATION**:

1. First expand `ThemeData` with missing properties
2. Then update only the 9 files marked for update
3. Leave semantic/decorative colors unchanged
