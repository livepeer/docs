# Task 13: Audit — Repeated Content Report

## Summary

| Metric | Count |
|--------|-------|
| **Duplicate Protocol/Network definitions** | 5+ locations (exact text) |
| **Duplicate glossary files** | 2 (nearly identical, 400+ lines) |
| **Duplicate actor definitions** | 10+ locations |
| **Files with "Broadcaster" note** | 30+ (exact same text) |
| **API endpoint descriptions** | 8+ (duplicated text) |
| **Installation method descriptions** | Multiple (repeated text) |

---

## Executive Summary

This audit identified significant **content duplication** (actual text/paragraphs) across v2 MDX files. The main categories are:

1. **Exact Text Duplication**: Same paragraphs appearing verbatim in multiple files
2. **Near-Identical Content**: Slightly varied versions of the same explanations
3. **Repeated Definitions**: Terms and concepts defined multiple times with same/similar wording
4. **Duplicate Explanations**: Same setup instructions, API descriptions, architecture overviews

**Key Finding**: Core concepts (Protocol, Network, Actors) are defined in 5+ different locations with identical or near-identical text. This creates maintenance burden and inconsistency risk.

---

## 1. Exact Text Duplication

### 1.1 Protocol Definition — Exact Duplication (5 locations)

**Exact Text:**
```
The protocol is the ruleset + on-chain logic governing:

- staking
- delegation
- inflation & rewards
- orchestrator selection
- slashing
- probabilistic payments
- verification rules

The economic and coordination layer that enforces correct behavior.
```

**Locations:**
- `v2/pages/01_about/core-concepts/livepeer-core-concepts.mdx` (lines 72-82)
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (lines 64-76)
- `v2/pages/07_resources/livepeer-glossary.mdx` (lines 64-76)
- `v2/pages/01_about/core-concepts/livepeer-overview.mdx` (similar, lines 64-73)
- `v2/pages/01_about/faq-about.mdx` (similar structure)

**Recommendation:**
- **Single source**: Keep definition in glossary (`v2/pages/07_resources/livepeer-glossary.mdx`)
- **Link pattern**: Other pages should say "The **Livepeer Protocol** (see [Glossary](/resources/livepeer-glossary#livepeer-protocol)) is..." or use a component
- **Action**: Remove duplicate definitions, replace with links to glossary

---

### 1.2 Network Definition — Exact Duplication (5 locations)

**Exact Text:**
```
The network is the actual running system of machines performing work:

- Orchestrators (GPU nodes)
- Transcoders / Workers
- Gateways
- Broadcasters
- Verification processes
- Job routing
- Real-time AI & video compute

It is the live, operational decentralized GPU mesh running video + AI jobs.
```

**Locations:**
- `v2/pages/01_about/core-concepts/livepeer-core-concepts.mdx` (lines 86-96)
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (lines 78-90)
- `v2/pages/07_resources/livepeer-glossary.mdx` (lines 78-91) - *slight variation: includes "On-chain treasury"*
- `v2/pages/01_about/core-concepts/livepeer-overview.mdx` (lines 77-85, similar)
- `v2/pages/01_about/faq-about.mdx` (similar structure)

**Recommendation:**
- **Single source**: Keep in glossary, use most complete version (07_resources)
- **Link pattern**: Other pages link to glossary definition
- **Action**: Remove duplicates, standardize on one definition

---

### 1.3 "Broadcaster" Deprecation Note — Exact Duplication (30+ files)

**Exact Text:**
```
<Note>
  The Livepeer Gateway was previously called the Livepeer Broadcaster so you
  will see some commands and labels still use the Broadcaster name that haven't
  been updated in the code.
</Note>
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (lines 21-25)
- `v2/pages/04_gateways/references/configuration-flags.mdx`
- `v2/pages/04_gateways/references/configuration-flags-old.mdx`
- `v2/pages/04_gateways/gateways-portal.mdx`
- `v2/pages/01_about/livepeer-protocol/technical-architecture.mdx`
- `v2/pages/01_about/about-portal.mdx`
- `v1/gateways/guides/gateway-overview.mdx` (lines 11-15)
- And 20+ more files

**Recommendation:**
- **Single source**: Add to glossary entry for "Gateway" with note about deprecated term
- **OR component**: Create `<GatewayTerminologyNote />` component (already exists pattern in `snippets/components/domain/04_GATEWAYS/callouts.jsx`)
- **Action**: Replace all 30+ instances with component or remove if redundant (reference glossary instead)

---

### 1.4 Actor Definitions — Near-Exact Duplication (10+ locations)

**Gateway Definition (appears in 3+ places):**
```
A _gateway_ is a Livepeer node operated by a user or organization to interact **directly with the Livepeer protocol**.  
Gateways submit jobs, route work to orchestrators, manage payment flows, and provide a direct interface to the network.  
**Not** the same as hosted services like Studio or Daydream.
```

**Locations:**
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (lines 120-124)
- `v2/pages/07_resources/livepeer-glossary.mdx` (lines 120-124)
- `v2/pages/07_resources/concepts/livepeer-101.mdx` (similar)

**Orchestrator Definition (appears in 5+ places):**
```
A supply-side operator that contributes **GPU resources** to the network.  
Orchestrators receive jobs, perform transcoding or AI inference, and get paid via LPT rewards + ETH fees.
```

**Locations:**
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (lines 126-129)
- `v2/pages/07_resources/livepeer-glossary.mdx` (lines 126-129)
- `v2/pages/01_about/livepeer-network/actors.mdx` (similar, lines 25-33)
- `v2/pages/01_about/core-concepts/concepts/actors.mdx` (similar, lines 15-18)
- `v2/pages/01_about/livepeer-network/livepeer-actors/orchestrators.mdx` (similar)

**Delegator Definition (appears in 4+ places):**
```
A token holder who stakes their LPT to an orchestrator to help secure the network and earn a share of rewards.
```

**Locations:**
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (lines 135-137)
- `v2/pages/07_resources/livepeer-glossary.mdx` (lines 135-137)
- `v2/pages/01_about/livepeer-network/actors.mdx` (similar)
- `v2/pages/01_about/core-concepts/concepts/actors.mdx` (similar)

**Recommendation:**
- **Single source**: Glossary is canonical for all actor definitions
- **Link pattern**: Other pages should say "An **Orchestrator** (see [Glossary](/resources/livepeer-glossary#orchestrator)) is..." or use component
- **Component option**: `<TermDefinition term="orchestrator" />` that links to glossary
- **Action**: Review all actor definitions, ensure consistency, link to glossary instead of redefining

---

## 2. Near-Identical Content

### 2.1 Duplicate Glossary Files (2 files, 400+ lines)

**Problem:** Two nearly identical glossary files with only minor differences:

**Location A:** `v2/pages/01_about/resources/livepeer-glossary.mdx`
- 400+ lines
- Contains: Protocol/Network definitions, Actors, Web3 terms, Video terms, AI terms
- Missing: "On-chain treasury" in Network definition (line 89)
- Missing: Business & Investment Terminology section

**Location B:** `v2/pages/07_resources/livepeer-glossary.mdx`
- 456 lines
- Contains: Same 400+ lines as Location A
- Additional: "On-chain treasury" in Network definition (line 89)
- Additional: "# Business & Investment Terminology" section (lines 445-456)

**Exact Duplications:**
- Lines 1-100: Identical frontmatter and initial content
- Lines 64-76: Identical Protocol definition
- Lines 78-90: Network definition (Location B has one extra bullet)
- Lines 98-156: Identical actor definitions
- Lines 164-440: Identical core concepts, web3 terms, video terms, AI terms

**Recommendation:**
- **Consolidate**: Keep `v2/pages/07_resources/livepeer-glossary.mdx` as canonical (more complete)
- **Redirect**: Convert `v2/pages/01_about/resources/livepeer-glossary.mdx` to redirect or link to canonical version
- **Action**: Delete duplicate file or convert to redirect page

---

### 2.2 Protocol vs Network Table — Duplication (3+ locations)

**Exact Table:**
```
| Layer                 | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| **Livepeer Protocol** | On-chain crypto-economic incentives & coordination; staking; payments.        |
| **Livepeer Network**  | Off-chain nodes performing real-time work (transcoding, inference, routing).  |
| **Relationship**      | The network _runs_ the compute; the protocol _governs, secures, and pays_ it. |
```

**Locations:**
- `v2/pages/01_about/core-concepts/livepeer-core-concepts.mdx` (lines 100-104)
- `v2/pages/01_about/core-concepts/livepeer-overview.mdx` (lines 100-104)
- Similar variations in other files

**Recommendation:**
- **Single source**: Keep in one canonical location (e.g., `livepeer-core-concepts.mdx`)
- **Link**: Other pages link to canonical location
- **Component option**: `<ProtocolVsNetworkTable />` component

---

### 2.3 API Endpoint Descriptions — Duplication (8+ files)

**Studio API Base URL:**
```
Available at: `https://livepeer.studio/api`

**Common endpoints:**
- `POST /stream` — Create video stream ingest session
- `POST /transcode` — On-demand file transcode
- `POST /ai/infer` — Submit AI job (e.g. image enhancement)
- `GET /session/:id` — Fetch session status

**Docs:** [livepeer.studio/docs](https://livepeer.studio/docs)
```

**Locations:**
- `v2/pages/01_about/livepeer-network/interfaces.mdx` (lines 31-42)
- `v2/pages/01_about/livepeer-network/technical-architecture.mdx` (lines 90-104)
- `v2/pages/010_products/products/livepeer-studio/api-reference/overview.mdx` (similar)
- `v2/pages/03_developers/technical-references/apis.mdx` (similar)

**Explorer API:**
```
**Endpoint:** `https://explorer.livepeer.org/graphql`

**Example query:**
```graphql
query GetOrchestrators {
  orchestrators {
    id
    totalStake
    rewardCut
    serviceURI
  }
}
```
```

**Locations:**
- `v2/pages/01_about/livepeer-network/interfaces.mdx` (lines 54-73)
- `v2/pages/01_about/livepeer-network/technical-architecture.mdx` (lines 104-105)
- Similar in other files

**Recommendation:**
- **Single source**: Create `v2/pages/03_developers/technical-references/api-endpoints.mdx` as canonical reference
- **Data file**: Create `snippets/data/api-endpoints.json` with endpoint definitions
- **Link pattern**: Other pages link to reference page instead of duplicating
- **Action**: Consolidate all API endpoint descriptions into single reference page

---

### 2.4 Installation Method Descriptions — Repetition

**Text Pattern:**
```
Installing a Gateway means installing the go-livepeer Gateway code.

You can either install using

1. Docker (recommended)
2. Building from source (binary)
3. Using community developed tooling like GWID for one-click installation & deployment.
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (lines 27-35)
- `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` (similar, lines 66-68)
- Similar in other installation pages

**Gateway Modes Description:**
```
You can run a gateway

- Off-chain -> dev or local mode
- On-chain -> production mode connected to the blockchain-based Livepeer network.
```

**Locations:**
- `v2/pages/04_gateways/run-a-gateway/install/install-overview.mdx` (lines 39-43)
- `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` (similar, line 67)

**Recommendation:**
- **Single source**: Create `v2/pages/04_gateways/run-a-gateway/about-gateway-modes.mdx` for modes explanation
- **Link pattern**: Installation pages link to modes explainer instead of duplicating
- **Action**: Consolidate installation method descriptions

---

## 3. Repeated Explanations

### 3.1 go-livepeer References — Inconsistent Descriptions (50+ files)

**Variations found:**
- "Installing a Gateway means installing the go-livepeer Gateway code"
- "Running an orchestrator means operating a **go-livepeer** node"
- "The [go-livepeer](https://github.com/livepeer/go-livepeer) architecture"
- "Gateways install the Go-Livepeer Gateway Software"

**Locations:** 50+ files across gateways, orchestrators, about sections

**Recommendation:**
- **Standardize**: Use consistent description: "go-livepeer is the open-source Livepeer node software"
- **Glossary entry**: Add "go-livepeer" to glossary with canonical definition
- **Link format**: Use consistent link component: `<DoubleIconLink label="go-livepeer" href="https://github.com/livepeer/go-livepeer" iconLeft="github" />`
- **Action**: Standardize all 50+ references

---

### 3.2 Livepeer Actor Definition — Multiple Variations

**Variation 1:**
```
A Livepeer actor is a participant in the protocol or network—human or machine—that performs a defined role such as submitting jobs, providing compute, verifying work, or securing the system.
```

**Variation 2:**
```
A Livepeer actor is any role or entity that participates in the Livepeer protocol or network and performs actions defined by the system.
```

**Locations:**
- `v2/pages/01_about/resources/livepeer-glossary.mdx` (Variation 1, line 99)
- `v2/pages/07_resources/livepeer-glossary.mdx` (Variation 1, line 100)
- `v2/pages/01_about/core-concepts/livepeer-core-concepts.mdx` (Variation 2, line 59)

**Recommendation:**
- **Single definition**: Pick one canonical version (recommend Variation 1 - more specific)
- **Update all**: Ensure all locations use same definition
- **Glossary as source**: Glossary should be single source of truth

---

## 4. Recommendations Summary

### High Priority (Exact Duplications)

1. **Consolidate Glossary** (§2.1)
   - Keep `v2/pages/07_resources/livepeer-glossary.mdx` as canonical
   - Delete or redirect `v2/pages/01_about/resources/livepeer-glossary.mdx`
   - **Impact**: Removes 400+ lines of duplicate content

2. **Remove Protocol/Network Duplicate Definitions** (§1.1, §1.2)
   - Keep definitions in glossary only
   - Replace all other instances with links to glossary
   - **Impact**: Removes 5+ duplicate definitions

3. **Consolidate "Broadcaster" Note** (§1.3)
   - Add to glossary entry for "Gateway"
   - Replace 30+ instances with component or remove
   - **Impact**: Removes 30+ duplicate notes

### Medium Priority (Near-Duplicates)

4. **Consolidate Actor Definitions** (§1.4)
   - Glossary is canonical source
   - Replace other definitions with links to glossary
   - **Impact**: Removes 10+ duplicate definitions

5. **Create API Endpoints Reference** (§2.3)
   - Create single reference page
   - Link from other pages instead of duplicating
   - **Impact**: Removes 8+ duplicate API descriptions

6. **Standardize go-livepeer References** (§3.1)
   - Add to glossary
   - Use consistent description and link format
   - **Impact**: Standardizes 50+ references

### Low Priority (Nice to Have)

7. **Protocol vs Network Table Component** (§2.2)
   - Create reusable component
   - Use in multiple locations

8. **Installation Methods Consolidation** (§2.4)
   - Create dedicated explainer pages
   - Link from installation pages

---

## 5. Testing & Validation

After implementing recommendations:

1. **Search for duplicates**: Use grep to verify removed duplications
   ```bash
   grep -r "The protocol is the ruleset" v2/pages
   grep -r "The network is the actual running system" v2/pages
   grep -r "The Livepeer Gateway was previously called" v2/pages
   ```

2. **Check links**: Ensure all redirects and cross-links work

3. **Content review**: Ensure consolidated content is complete and accurate

4. **Glossary completeness**: Verify glossary has all definitions that were removed from other pages

---

## 6. Follow-up Tasks

1. **Consolidate glossary files** (delete duplicate, add redirect)
2. **Remove Protocol/Network duplicate definitions** (replace with glossary links)
3. **Consolidate "Broadcaster" note** (add to glossary, remove 30+ instances)
4. **Create API endpoints reference page** (consolidate 8+ duplicate descriptions)
5. **Standardize go-livepeer references** (add to glossary, update 50+ files)
6. **Consolidate actor definitions** (link to glossary from 10+ locations)
7. **Review and update** all pages that reference consolidated content

---

## 7. Notes

- Some duplications may be intentional for context (e.g., quick reference in installation guide)
- Focus on **exact duplicates** and **near-duplicates that should be single-sourced**
- Consider user journey: some repetition may be helpful for discoverability
- Balance DRY principles with usability and context-appropriate information
- Glossary should be the single source of truth for all term definitions

---

**Report Generated**: 2025-01-XX  
**Branch**: `docs-plan/13-audit-repeated-content`  
**Files Audited**: ~441 v2 MDX files, snippets, callouts  
**Focus**: Actual text/content duplication, not component patterns
