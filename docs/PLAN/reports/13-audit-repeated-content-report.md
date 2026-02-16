# Task 13: Audit — Repeated Content Report

## Summary

| Metric | Count |
|--------|-------|
| **Files with PreviewCallout/ComingSoonCallout** | 100+ |
| **Portal pages with repeated imports** | 9 |
| **Duplicate glossary files** | 2 |
| **Files with "Broadcaster" note** | 30+ |
| **API endpoint references** | 8+ |
| **Technical architecture pages** | 5+ |

---

## Executive Summary

This audit identified significant content duplication across v2 MDX files, snippets, and callouts. The main categories of repetition are:

1. **Component/Code Repetition**: Callout imports, portal imports, repeated component usage
2. **Content Repetition**: Glossary definitions, API endpoints, technical architecture descriptions, installation notes, terminology explanations
3. **Copy Repetition**: Warning messages, notes about deprecated terms, setup instructions

**Key Finding**: Many duplications are already documented in `docs/DRY-and-cleaner-recommendations.md`. This audit adds content-specific duplications and provides concrete locations and consolidation strategies.

---

## 1. Code/Component Repetition

### 1.1 Callout Import + Usage (100+ files)

**Problem:** Almost every page repeats:
```mdx
import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'
<PreviewCallout />
```

**Locations:**
- `v2/pages/07_resources/documentation-guide/*.mdx` (5 files)
- `v2/pages/04_gateways/**/*.mdx` (30+ files)
- `v2/pages/05_orchestrators/**/*.mdx` (10+ files)
- `v2/pages/03_developers/**/*.mdx` (20+ files)
- `v2/pages/010_products/**/*.mdx` (50+ files)
- And many more...

**Recommendation:** 
- **Single-source via frontmatter**: Use `status: preview` in frontmatter, inject callout via layout/wrapper
- **OR wrapper component**: `<DocPage status="preview">...</DocPage>` that handles callout rendering
- **Reference**: See `docs/DRY-and-cleaner-recommendations.md` §1.1

---

### 1.2 Portal Pages — Repeated Imports (9 files)

**Problem:** Each portal page repeats 5-7 import lines:
```mdx
import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, ... } from '/snippets/components/domain/SHARED/Portals.jsx'
import { ThemeData } from '/snippets/styles/themeStyles.jsx'
import { H1, H2, H5, P } from '/snippets/components/display/frameMode.jsx'
import { CustomDivider } from '/snippets/components/primitives/divider.jsx'
import { BlinkingIcon } from '/snippets/components/primitives/links.jsx'
```

**Locations:**
- `v2/pages/00_home/mission-control.mdx`
- `v2/pages/01_about/about-portal.mdx`
- `v2/pages/02_community/community-portal.mdx`
- `v2/pages/03_developers/developer-portal.mdx`
- `v2/pages/04_gateways/gateways-portal.mdx`
- `v2/pages/05_orchestrators/orchestrators-portal.mdx`
- `v2/pages/06_lptoken/token-portal.mdx`
- `v2/pages/07_resources/documentation-guide/component-library.mdx`
- `v2/pages/010_products/products-portal.mdx`

**Recommendation:**
- **Barrel export**: Create `snippets/components/domain/SHARED/portalLayout.jsx` that re-exports all portal dependencies
- **OR single component**: `<PortalLayout title="..." subtitle="...">...</PortalLayout>` that accepts props
- **Reference**: See `docs/DRY-and-cleaner-recommendations.md` §1.2

---

## 2. Content Repetition

### 2.1 Duplicate Glossary Files

**Problem:** Two nearly identical glossary files with slight variations:

**Location A:** `v2/pages/01_about/resources/livepeer-glossary.mdx`
- Contains: Protocol/Network definitions, Actors, Web3 terms, Video terms, AI terms
- Missing: "On-chain treasury" in Network definition, some Business & Investment terms

**Location B:** `v2/pages/07_resources/livepeer-glossary.mdx`
- Contains: Same content as Location A
- Additional: "On-chain treasury" in Network definition, Business & Investment Terminology section

**Differences:**
- Line 89: Location B has "- On-chain treasury" in Network definition
- Location B has additional section "# Business & Investment Terminology" (lines 445-456)

**Recommendation:**
- **Consolidate**: Keep one canonical glossary (recommend `v2/pages/07_resources/livepeer-glossary.mdx` as it's more complete)
- **Link from About**: Update `v2/pages/01_about/resources/livepeer-glossary.mdx` to redirect/link to the canonical version
- **Single source**: Use `snippets/scripts/generate-data/scripts/generate-glossary.js` to generate glossary from MDX scan
- **Action**: Delete duplicate or convert to redirect page

---

### 2.2 "Broadcaster" Deprecation Note (30+ files)

**Problem:** The same note about Gateway being formerly called "Broadcaster" appears in multiple files:

```mdx
<Note>
  The Livepeer Gateway was previously called the Livepeer Broadcaster so you
  will see some commands and labels still use the Broadcaster name that haven't
  been updated in the code.
</Note>
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (line 21-25)
- `v2/pages/04_gateways/references/configuration-flags.mdx`
- `v2/pages/04_gateways/references/configuration-flags-old.mdx`
- `v2/pages/04_gateways/gateways-portal.mdx`
- `v2/pages/01_about/livepeer-protocol/technical-architecture.mdx`
- `v2/pages/01_about/about-portal.mdx`
- `v2/pages/01_about/livepeer-protocol/overview.mdx`
- And 20+ more files (see grep results)

**Recommendation:**
- **Single component**: Create `<GatewayTerminologyNote />` in `snippets/components/domain/04_GATEWAYS/callouts.jsx` (already exists pattern)
- **OR**: Include in gateway explainer page and link from other pages
- **OR**: Add to glossary entry for "Gateway" and reference glossary
- **Action**: Replace all instances with component or remove if redundant

---

### 2.3 API Endpoint References (8+ files)

**Problem:** Base URL and endpoint descriptions repeated across multiple pages:

**Studio API Base URL:**
- `https://livepeer.studio/api` mentioned in:
  - `v2/pages/01_about/livepeer-network/technical-architecture.mdx` (line 103)
  - `v2/pages/01_about/livepeer-network/interfaces.mdx` (line 33)
  - `v2/pages/010_products/products/livepeer-studio/api-reference/overview.mdx`
  - `v2/pages/03_developers/technical-references/apis.mdx`
  - And more...

**Explorer API:**
- `https://explorer.livepeer.org/graphql` mentioned in:
  - `v2/pages/01_about/livepeer-network/technical-architecture.mdx` (line 104)
  - `v2/pages/01_about/livepeer-network/interfaces.mdx` (line 58)
  - And more...

**Recommendation:**
- **Single source**: Create `snippets/data/api-endpoints.json` with canonical endpoint definitions
- **Component**: `<ApiEndpoint name="studio" />` or `<ApiEndpoint name="explorer" />` that renders base URL + description
- **Reference page**: Create `v2/pages/03_developers/technical-references/api-endpoints.mdx` as single source
- **Link**: Other pages link to reference page instead of duplicating

---

### 2.4 Technical Architecture Descriptions (5+ files)

**Problem:** Similar technical architecture overviews appear in multiple locations:

**Locations:**
- `v2/pages/01_about/livepeer-protocol/technical-architecture.mdx`
  - Focus: Protocol layer (on-chain, smart contracts)
  - Content: go-livepeer architecture, node types (Gateway, Orchestrator, Worker)

- `v2/pages/01_about/livepeer-network/technical-architecture.mdx`
  - Focus: Network layer (off-chain execution)
  - Content: APIs, CLI, SDKs, monitoring

- `v2/pages/04_gateways/references/technical-architecture.mdx`
  - Focus: Gateway-specific architecture
  - Content: Network layers, routing paths, gateway components

- `v2/pages/04_gateways/about-gateways/gateway-architecture.mdx`
  - Focus: Gateway architecture explainer
  - Content: Gateway role, components, interactions

- `docs/ABOUT/CONTEXT DATA/Protocol/livepeer_technical_architecture.md`
  - Focus: Deep technical dive
  - Content: System overview, on-chain architecture, off-chain components

**Recommendation:**
- **Hierarchical structure**: 
  - Protocol technical architecture → on-chain focus
  - Network technical architecture → off-chain focus
  - Gateway technical architecture → gateway-specific (link to network architecture)
- **Cross-reference**: Each page should link to related architecture pages
- **Single deep dive**: Keep `docs/ABOUT/CONTEXT DATA/Protocol/livepeer_technical_architecture.md` as context data, reference from public pages
- **Action**: Review each page, ensure clear scope, add cross-links, remove redundant descriptions

---

### 2.5 Installation Instructions — Gateway Modes (Multiple files)

**Problem:** Description of Gateway modes (off-chain vs on-chain) repeated:

**Content:**
```mdx
You can run a gateway
- **Off-chain** -> dev or local mode
- **On-chain** -> production mode connected to the blockchain-based Livepeer network.
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (lines 39-43)
- `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` (similar content)
- And likely in other gateway setup pages

**Recommendation:**
- **Single source**: Create `v2/pages/04_gateways/run-a-gateway/about-gateway-modes.mdx` as explainer
- **Component**: `<GatewayModesExplanation />` component
- **Link**: Reference from installation/quickstart pages instead of duplicating

---

### 2.6 go-livepeer References (50+ files)

**Problem:** References to "go-livepeer" (the GitHub repo) appear throughout with varying formats:

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx`: "Installing a Gateway means installing the go-livepeer Gateway code"
- `v2/pages/05_orchestrators/orchestrators-portal.mdx`: "Running an orchestrator means operating a **go-livepeer** node"
- `v2/pages/01_about/livepeer-protocol/technical-architecture.mdx`: "The [go-livepeer](https://github.com/livepeer/go-livepeer) architecture"
- And 50+ more files

**Recommendation:**
- **Consistent link format**: Use `<DoubleIconLink label="go-livepeer" href="https://github.com/livepeer/go-livepeer" iconLeft="github" />` component
- **OR**: Define in glossary and reference
- **Action**: Standardize all references to use consistent component/link format

---

### 2.7 Orchestrator Definition (20+ files in 01_about)

**Problem:** "Orchestrator" is defined/explained in multiple About section pages:

**Locations:**
- `v2/pages/01_about/livepeer-network/livepeer-actors/orchestrators.mdx`
- `v2/pages/01_about/livepeer-network/actors.mdx`
- `v2/pages/01_about/core-concepts/concepts/actors.mdx`
- `v2/pages/01_about/core-concepts/livepeer-core-concepts.mdx`
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (Gateway, Orchestrator, Delegator definitions)
- And more...

**Recommendation:**
- **Single definition**: Glossary entry is canonical
- **Link pattern**: Other pages should say "An **Orchestrator** (see [Glossary](/resources/livepeer-glossary#orchestrator)) is..." or use a component
- **Component**: `<TermDefinition term="orchestrator" />` that links to glossary
- **Action**: Review all definitions, ensure consistency, link to glossary

---

### 2.8 SDK Usage Examples (Multiple files)

**Problem:** Similar SDK installation and usage examples appear in multiple places:

**Locations:**
- `v2/pages/01_about/livepeer-network/interfaces.mdx` (lines 75-94): JS SDK example
- `v2/pages/010_products/products/livepeer-studio/overview/sdks-overview.mdx`: SDK overview
- `v2/pages/03_developers/technical-references/sdks.mdx`: SDK reference (placeholder)

**Recommendation:**
- **Single SDK reference page**: Consolidate SDK documentation in `v2/pages/03_developers/technical-references/sdks.mdx`
- **Link**: Other pages link to reference instead of duplicating examples
- **Component**: `<SdkInstallationExample sdk="js" />` for reusable code blocks

---

## 3. Copy Repetition

### 3.1 Gateway Capabilities Badge Pattern (Multiple files)

**Problem:** Same badge pattern for Gateway capabilities (Video, AI, Dual) repeated:

```mdx
<Badge color="blue"> Video Only </Badge>
<Badge color="purple"> AI Only </Badge>
<Badge color="green"> Dual: AI & Video </Badge>
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (lines 61-64)
- Multiple installation and configuration pages

**Recommendation:**
- **Component**: `<GatewayCapabilityBadges capabilities={['video', 'ai', 'dual']} />`
- **OR**: Single reference table in gateway explainer, link from other pages

---

### 3.2 Installation Method Icons (Multiple files)

**Problem:** Same icon + description pattern for installation methods:

```mdx
1. <Icon icon="docker" size={20} /> **Docker** (recommended)
2. Building from <Icon icon="code" size={20} /> **source (binary)**
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx`
- `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx`
- And more...

**Recommendation:**
- **Component**: `<InstallationMethods />` that renders standardized list
- **OR**: Single reference section, link from overview pages

---

## 4. Recommendations Summary

### High Priority (High Impact, Medium Effort)

1. **Consolidate Glossary** (§2.1)
   - Keep `v2/pages/07_resources/livepeer-glossary.mdx` as canonical
   - Convert `v2/pages/01_about/resources/livepeer-glossary.mdx` to redirect/link

2. **Create API Endpoints Reference** (§2.3)
   - Create `snippets/data/api-endpoints.json`
   - Create `v2/pages/03_developers/technical-references/api-endpoints.mdx`
   - Replace duplicated endpoint references with links/component

3. **Standardize go-livepeer References** (§2.6)
   - Use consistent link component format
   - Update all 50+ references

### Medium Priority (Medium Impact, Low Effort)

4. **Create Gateway Terminology Component** (§2.2)
   - Add `<GatewayTerminologyNote />` to `snippets/components/domain/04_GATEWAYS/callouts.jsx`
   - Replace 30+ instances

5. **Create Gateway Modes Explainer** (§2.5)
   - Create dedicated page for gateway modes
   - Link from installation pages

6. **Cross-link Technical Architecture Pages** (§2.4)
   - Add clear cross-references between protocol/network/gateway architecture pages
   - Ensure each has distinct scope

### Low Priority (Nice to Have)

7. **Create Reusable Components** (§3.1, §3.2)
   - `<GatewayCapabilityBadges />`
   - `<InstallationMethods />`
   - `<SdkInstallationExample />`

8. **Term Definition Component** (§2.7)
   - `<TermDefinition term="orchestrator" />` that links to glossary

---

## 5. Links to DRY Recommendations

This audit complements the existing DRY recommendations:

- **Component/Code DRY**: See `docs/DRY-and-cleaner-recommendations.md` §1 (Callouts, Portals, Frontmatter)
- **Scripts DRY**: See `docs/DRY-and-cleaner-recommendations.md` §2 (Frontmatter parsing, SEO scripts)
- **Data DRY**: See `docs/DRY-and-cleaner-recommendations.md` §3 (Code blocks, tables)
- **Content DRY**: This report focuses on content duplication (glossary, API endpoints, architecture)

---

## 6. Testing & Validation

After implementing recommendations:

1. **Search for duplicates**: Use grep to verify removed duplications
   ```bash
   grep -r "The Livepeer Gateway was previously called" v2/pages
   grep -r "https://livepeer.studio/api" v2/pages
   ```

2. **Check links**: Ensure all redirects and cross-links work

3. **Verify components**: Test that new components render correctly

4. **Content review**: Ensure consolidated content is complete and accurate

---

## 7. Follow-up Tasks

1. **Create API endpoints data file** and reference page
2. **Consolidate glossary** (delete duplicate, add redirect)
3. **Create Gateway terminology component** and replace instances
4. **Standardize go-livepeer references** across all files
5. **Add cross-links** between technical architecture pages
6. **Create gateway modes explainer** page
7. **Review and consolidate** orchestrator definitions

---

## 8. Notes

- Some duplications are intentional (e.g., quick reference in multiple contexts)
- Focus on **exact duplicates** and **near-duplicates that should be single-sourced**
- Consider user journey: some repetition may be helpful for discoverability
- Balance DRY principles with usability and context-appropriate information

---

**Report Generated**: 2025-01-XX  
**Branch**: `docs-plan/13-audit-repeated-content`  
**Files Audited**: ~441 v2 MDX files, snippets, callouts
