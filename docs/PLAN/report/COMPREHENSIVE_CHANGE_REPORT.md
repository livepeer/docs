# COMPREHENSIVE CHANGE REPORT

**Generated**: Comparing local fork against `upstream/docs-v2-preview` branch  
**Reference**: https://github.com/livepeer/docs/tree/docs-v2-preview

## EXECUTIVE SUMMARY

- **Total Changed Pages**: 174
- **Total Changed Components**: 21  
- **Total Changed Files**: 195

## CRITICAL FINDINGS

### Portal Pages That May Be Broken

The following portal pages have been changed and import components that have also changed:

1. **`v2/pages/010_products/products-portal.mdx`** - Products Portal
   - Imports: `Portals.jsx`, `frameMode.jsx`, `links.jsx` (all changed)
   
2. **`v2/pages/05_orchestrators/orchestrators-portal.mdx`** - Orchestrators Portal  
   - Imports: `Portals.jsx`, `frameMode.jsx`, `links.jsx`, `layout.jsx` (all changed)

3. **`v2/pages/06_lptoken/token-portal.mdx`** - Token Portal
   - Imports: `Portals.jsx`, `frameMode.jsx`, `links.jsx`, `layout.jsx` (all changed)

4. **`v2/pages/00_home/mission-control.mdx`** - Mission Control
   - Imports: `Portals.jsx`, `frameMode.jsx`, `links.jsx` (all changed)

5. **`v2/pages/04_gateways/gateways-portal.mdx`** - Gateways Portal
   - Imports: `Portals.jsx` (changed)

6. **`v2/pages/01_about/about-portal.mdx`** - About Portal
   - Imports: Various components

7. **`v2/pages/02_community/community-portal.mdx`** - Community Portal
   - Imports: Various components

8. **`v2/pages/03_developers/developer-portal.mdx`** - Developer Portal
   - Imports: Various components

9. **`v2/pages/07_resources/resources-portal.mdx`** - Resources Portal
   - Imports: Various components

## CHANGED COMPONENTS (21 files)

These components have been modified and may break pages that import them:

### 1. `snippets/components/domain/SHARED/Portals.jsx` ⚠️ CRITICAL
- **Status**: Modified
- **Impact**: Used by ALL portal pages
- **Changes**: 6 additions, 18 deletions

### 2. `snippets/components/display/frameMode.jsx` ⚠️ CRITICAL  
- **Status**: Modified
- **Impact**: Used by portal pages in frame mode
- **Changes**: 52 additions, 163 deletions (MAJOR REFACTOR)

### 3. `snippets/components/primitives/layout.jsx` ⚠️ NEW
- **Status**: New file
- **Impact**: Used by orchestrators-portal.mdx and token-portal.mdx
- **Changes**: 123 additions (new file)

### 4. `snippets/components/primitives/links.jsx` ⚠️ MODIFIED
- **Status**: Modified  
- **Impact**: Used by many pages
- **Changes**: 4 additions, 35 deletions

### 5. `snippets/components/layout/cards.jsx` ⚠️ MAJOR CHANGE
- **Status**: Modified
- **Impact**: Used by many pages
- **Changes**: 2 additions, 330 deletions (MAJOR REFACTOR)

### 6. `snippets/components/display/video.jsx`
- **Status**: Modified
- **Changes**: 71 additions, 6 deletions

### 7. `snippets/components/content/code.jsx`
- **Status**: Modified
- **Changes**: 4 additions, 21 deletions

### 8. `snippets/components/content/external-content.jsx`
- **Status**: Modified
- **Changes**: 6 additions, 22 deletions

### 9. `snippets/components/display/CardCarousel.jsx`
- **Status**: Modified
- **Changes**: 9 additions, 6 deletions

### 10. `snippets/components/display/zoomable-diagram.jsx`
- **Status**: Modified
- **Changes**: 39 additions, 79 deletions

### 11. `snippets/components/domain/04_GATEWAYS/callouts.jsx`
- **Status**: Modified
- **Changes**: 14 additions, 26 deletions

### 12. `snippets/components/gateways/callouts.jsx` ⚠️ DELETED
- **Status**: DELETED
- **Impact**: Any page importing this will break
- **Changes**: File deleted (79 deletions)

### 13. `snippets/components/gateways/warnings.jsx` ⚠️ DELETED
- **Status**: DELETED
- **Impact**: Any page importing this will break
- **Changes**: File deleted (44 deletions)

### 14. `snippets/components/integrations/coingecko.jsx`
- **Status**: Modified
- **Changes**: 9 additions, 26 deletions

### 15. `snippets/components/layout/steps.jsx`
- **Status**: Modified
- **Changes**: 3 additions, 3 deletions

### 16. `snippets/components/primitives/containers.jsx` ⚠️ NEW
- **Status**: New file
- **Changes**: 134 additions (new file)

### 17. `snippets/components/primitives/tables.jsx` ⚠️ NEW
- **Status**: New file
- **Changes**: 152 additions (new file)

### 18. `snippets/data/gateways/code.jsx`
- **Status**: Modified
- **Changes**: 0 additions, 69 deletions

### 19. `snippets/data/gateways/flags.jsx`
- **Status**: Modified
- **Changes**: 0 additions, 47 deletions

### 20. `snippets/data/gateways/index.jsx`
- **Status**: Modified
- **Changes**: 0 additions, 4 deletions

### 21. `snippets/data/gateways/quickstart.jsx`
- **Status**: Modified
- **Changes**: 0 additions, 16 deletions

## CHANGED PAGES (174 files)

### Portal Pages (9 files) - HIGH PRIORITY

1. `v2/pages/010_products/products-portal.mdx`
2. `v2/pages/05_orchestrators/orchestrators-portal.mdx` ⚠️
3. `v2/pages/06_lptoken/token-portal.mdx`
4. `v2/pages/00_home/mission-control.mdx`
5. `v2/pages/04_gateways/gateways-portal.mdx`
6. `v2/pages/01_about/about-portal.mdx`
7. `v2/pages/02_community/community-portal.mdx`
8. `v2/pages/03_developers/developer-portal.mdx`
9. `v2/pages/07_resources/resources-portal.mdx`

### Home Pages (4 files)

1. `v2/pages/00_home/home/primer.mdx`
2. `v2/pages/00_home/home/trending-layout-tests.mdx`
3. `v2/pages/00_home/introduction/vision.mdx`
4. `v2/pages/00_home/mission-control.mdx`

### Products Pages (100+ files)

All Livepeer Studio API reference pages and guides have been changed.

### About Pages (5 files)

1. `v2/pages/01_about/about-livepeer/moved/livepeer-overview.mdx`
2. `v2/pages/01_about/about-portal.mdx`
3. `v2/pages/01_about/livepeer-protocol/overview.mdx`
4. `v2/pages/01_about/livepeer-protocol/technical-architecture.mdx`
5. `v2/pages/01_about/livepeer-protocol/treasury.mdx`
6. `v2/pages/01_about/resources/livepeer-whitepaper.mdx`

### Community Pages (1 file)

1. `v2/pages/02_community/community-portal.mdx`

### Developer Pages (7 files)

1. `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/byoc.mdx`
2. `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/comfystream.mdx`
3. `v2/pages/03_developers/ai-inference-on-livepeer/ai-pipelines/overview.mdx`
4. `v2/pages/03_developers/builder-opportunities/dev-programs.mdx`
5. `v2/pages/03_developers/building-on-livepeer/developer-guide.mdx`
6. `v2/pages/03_developers/developer-platforms/builder-hub.mdx`
7. `v2/pages/03_developers/developer-portal.mdx`
8. `v2/pages/03_developers/technical-references/apis.mdx`
9. `v2/pages/03_developers/technical-references/awesome-livepeer.mdx`
10. `v2/pages/03_developers/technical-references/sdks.mdx`

### Gateway Pages (30+ files)

Multiple gateway pages changed, including:
- Portal, tools, references, configuration, installation, etc.

### Orchestrator Pages (1 file)

1. `v2/pages/05_orchestrators/orchestrators-portal.mdx` ⚠️

### LP Token Pages (1 file)

1. `v2/pages/06_lptoken/token-portal.mdx`

### Resources Pages (15+ files)

Multiple documentation guide pages changed.

## RECOMMENDATIONS

1. **IMMEDIATE**: Check all portal pages - they import `Portals.jsx` which has changed
2. **IMMEDIATE**: Check `frameMode.jsx` - major refactor (163 deletions, 52 additions)
3. **IMMEDIATE**: Check for any imports of deleted files:
   - `snippets/components/gateways/callouts.jsx` (DELETED)
   - `snippets/components/gateways/warnings.jsx` (DELETED)
4. **HIGH PRIORITY**: Review `cards.jsx` - major refactor (330 deletions)
5. **MEDIUM PRIORITY**: Review new components:
   - `snippets/components/primitives/layout.jsx` (NEW)
   - `snippets/components/primitives/containers.jsx` (NEW)
   - `snippets/components/primitives/tables.jsx` (NEW)

## NEXT STEPS

1. Run `git diff upstream/docs-v2-preview` on each portal page
2. Check for broken imports (especially deleted files)
3. Test rendering of all portal pages
4. Review component changes for breaking API changes
