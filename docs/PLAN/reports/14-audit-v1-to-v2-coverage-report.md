# Task 14: V1 to V2 Documentation Coverage Audit Report

## Summary

| Metric | Count |
|--------|-------|
| **V1 total MDX files** | 279 |
| **V2 total MDX files** | 339 |
| **V1 sections covered in V2** | 7/9 (partial) |
| **Major gaps identified** | API Reference, SDKs, Self-hosting |

---

## Executive Summary

The V2 documentation has significantly restructured content from V1, with a shift in focus:

- **V1 focus**: Livepeer Studio-centric (APIs, SDKs, React components, developer guides)
- **V2 focus**: Livepeer Network-centric (Gateways, Orchestrators, AI inference, protocol)

Key findings:
1. **API Reference (75 files)**: Largely missing—V2 relies on external livepeer.studio/docs
2. **SDKs (63 files)**: Missing—V2 has placeholder pages only
3. **Orchestrators (19 files)**: Partial coverage—see detailed mapping in reference document
4. **Gateways (11 files)**: Well covered and expanded in V2
5. **AI content (44 files)**: Restructured into network-focused AI documentation
6. **Developers (44 files)**: Partially covered—Studio-specific content mostly excluded
7. **Delegators (6 files)**: Covered under 06_lptoken section
8. **References (13 files)**: Partially covered across V2 sections
9. **Self-hosting (4 files)**: Missing from V2

---

## Section-by-Section Analysis

### 1. V1 API Reference → V2 Coverage

**V1 Count**: 75 files  
**V2 Status**: ❌ Mostly missing (Studio API not migrated)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/api-reference/overview/introduction.mdx | — | Missing | V2 points to external livepeer.studio/docs |
| v1/api-reference/overview/authentication.mdx | — | Missing | Authentication docs not in V2 |
| v1/api-reference/stream/*.mdx (11 files) | — | Missing | Stream API endpoints |
| v1/api-reference/asset/*.mdx (7 files) | — | Missing | Asset upload/management APIs |
| v1/api-reference/playback/*.mdx (2 files) | — | Missing | Playback info APIs |
| v1/api-reference/session/*.mdx (5 files) | — | Missing | Session management APIs |
| v1/api-reference/multistream/*.mdx (6 files) | — | Missing | Multistream target APIs |
| v1/api-reference/transcode/*.mdx (2 files) | — | Missing | Transcoding job APIs |
| v1/api-reference/webhook/*.mdx (6 files) | — | Missing | Webhook management APIs |
| v1/api-reference/signing-key/*.mdx (6 files) | — | Missing | Signing key APIs |
| v1/api-reference/room/*.mdx (10 files) | — | Missing | Room/WebRTC APIs |
| v1/api-reference/task/*.mdx (3 files) | — | Missing | Task status APIs |
| v1/api-reference/viewership/*.mdx (5 files) | — | Missing | Analytics/viewership APIs |
| v1/api-reference/generate/*.mdx (10 files) | v2/pages/04_gateways/references/api-reference/AI-API/ | Covered | AI generate endpoints moved to Gateway references |

**Recommendation**: V2 intentionally excludes Studio API reference, pointing to external docs.

---

### 2. V1 SDKs → V2 Coverage

**V1 Count**: 63 files  
**V2 Status**: ❌ Missing (placeholder pages only)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/sdks/introduction.mdx | v2/pages/03_developers/technical-references/sdks.mdx | Partial | V2 file is empty placeholder |
| v1/sdks/javascript.mdx | — | Missing | Server-side JS SDK docs |
| v1/sdks/python.mdx | — | Missing | Python SDK docs |
| v1/sdks/go.mdx | — | Missing | Go SDK docs |
| v1/sdks/react/getting-started.mdx | — | Missing | React SDK setup |
| v1/sdks/react/Player.mdx | — | Missing | Player component reference |
| v1/sdks/react/Broadcast.mdx | — | Missing | Broadcast component reference |
| v1/sdks/react/player/*.mdx (20 files) | — | Missing | Player subcomponents |
| v1/sdks/react/broadcast/*.mdx (17 files) | — | Missing | Broadcast subcomponents |
| v1/sdks/react/migration/*.mdx (17 files) | — | Missing | SDK migration guides |

**Recommendation**: Create SDK documentation or establish clear linking to external SDK docs.

---

### 3. V1 Developers → V2 Coverage

**V1 Count**: 44 files  
**V2 Status**: ⚠️ Partial (restructured)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/developers/introduction.mdx | v2/pages/03_developers/developer-portal.mdx | Rewritten | V2 has new structure |
| v1/developers/quick-start.mdx | v2/pages/03_developers/building-on-livepeer/quick-starts/ | Rewritten | Multiple quickstart paths |
| v1/developers/core-concepts/livepeer-network/*.mdx | v2/pages/01_about/livepeer-network/livepeer-actors/ | Covered | Moved to About section |
| v1/developers/core-concepts/core-api/*.mdx | — | Missing | Studio-specific concepts |
| v1/developers/guides/*.mdx | — | Missing | Most are Studio-specific |
| v1/developers/tutorials/*.mdx | — | Missing | FVM, Lit, decentralized storage tutorials |

**Recommendation**: Clarify Studio vs Network developer documentation strategy.

---

### 4. V1 AI → V2 Coverage

**V1 Count**: 44 files  
**V2 Status**: ⚠️ Partial (restructured for network focus)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/ai/api-reference/*.mdx (10 files) | v2/pages/04_gateways/references/api-reference/AI-API/ | Covered | Moved to Gateway refs |
| v1/ai/pipelines/*.mdx (10 files) | v2/pages/04_gateways/references/api-reference/AI-API/ | Merged | Into API reference |
| v1/ai/orchestrators/*.mdx (7 files) | v2/pages/05_orchestrators/advanced-setup/ai-pipelines.mdx | Partial | Needs expansion |
| v1/ai/gateways/*.mdx (3 files) | v2/pages/04_gateways/run-a-gateway/ | Covered | Merged into Gateway |
| v1/ai/builders/*.mdx | Mixed | Partial | Restructured |
| v1/ai/contributors/guides/*.mdx | — | Missing | Add model/pipeline guides |

---

### 5. V1 Orchestrators → V2 Coverage

**V1 Count**: 19 files  
**V2 Status**: ⚠️ Partial (detailed mapping available)

*See: docs/ORCHESTRATORS/00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md*

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/orchestrators/guides/install-go-livepeer.mdx | v2/pages/05_orchestrators/setting-up-an-orchestrator/install-go-livepeer.mdx | Covered | |
| v1/orchestrators/guides/connect-to-arbitrum.mdx | v2/pages/05_orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx | Covered | |
| v1/orchestrators/guides/benchmark-transcoding.mdx | — | Missing | Benchmarking guide needed |
| v1/orchestrators/guides/monitor-metrics.mdx | — | Missing | Monitoring guide needed |
| v1/orchestrators/guides/troubleshoot.mdx | v2/pages/05_orchestrators/references/faq.mdx | Partial | In FAQ |

---

### 6. V1 Gateways → V2 Coverage

**V1 Count**: 11 files  
**V2 Status**: ✅ Well covered (expanded)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/gateways/introduction.mdx | v2/pages/04_gateways/about-gateways/overview.mdx | Covered | Expanded |
| v1/gateways/quick-start.mdx | v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx | Covered | Comprehensive |
| v1/gateways/guides/*.mdx | v2/pages/04_gateways/run-a-gateway/ | Covered | All installation guides present |

---

### 7. V1 Delegators → V2 Coverage

**V1 Count**: 6 files  
**V2 Status**: ✅ Covered (restructured)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/delegators/introduction.mdx | v2/pages/06_lptoken/delegation/overview.mdx | Covered | Moved to LPToken section |
| v1/delegators/quick-start.mdx | v2/pages/06_lptoken/delegation/delegation-guide.mdx | Covered | |
| v1/delegators/guides/bridge-lpt-to-arbitrum.mdx | v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/bridge-lpt-to-arbitrum.mdx | Covered | |

---

### 8. V1 References → V2 Coverage

**V1 Count**: 13 files  
**V2 Status**: ⚠️ Partial (distributed across sections)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/references/awesome-livepeer.mdx | v2/pages/02_community/resources/awesome-livepeer.mdx | Covered | Community |
| v1/references/contract-addresses.mdx | v2/pages/07_resources/references/contract-addresses.mdx | Covered | |
| v1/references/go-livepeer/*.mdx | v2/pages/04_gateways/references/go-livepeer/ | Covered | |
| v1/references/knowledge-base/*.mdx | — | Missing | Knowledge base articles |
| v1/references/subgraph.mdx | — | Missing | Subgraph documentation |

---

### 9. V1 Self-hosting → V2 Coverage

**V1 Count**: 4 files  
**V2 Status**: ❌ Missing

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| v1/self-hosting/*.mdx | — | Missing | Studio self-hosting (alpha feature) |

**Note**: V2 focuses on running gateways/orchestrators directly on the network.

---

## Coverage Summary by Status

| Status | Count | Percentage | Notes |
|--------|-------|------------|-------|
| **Covered** | ~65 | 23% | Direct equivalent or well-mapped content |
| **Partial** | ~55 | 20% | Content exists but needs expansion |
| **Missing** | ~130 | 47% | No v2 equivalent (mostly Studio-specific) |
| **Excluded/Deprecated** | ~29 | 10% | Intentionally not migrated |

---

## Criteria for Exclusion

1. **Studio-specific content**: APIs, SDKs, guides for Livepeer Studio platform (livepeer.studio/docs)
2. **livepeer-studio-cli.mdx pages**: Misplaced content in v1 sections
3. **Deprecated/stale content**: "What's new", "coming soon" pages
4. **Migration guides**: One-time L1→Arbitrum migrations (historical)

---

## Key Gaps Requiring Attention

### Critical
1. **SDK Documentation** (63 files) - Create or link externally
2. **API Reference** (60+ files) - Confirm external docs strategy
3. **Developer Guides** (20+ files) - Studio guides location decision

### Important
4. **Orchestrator operational guides** (5 files) - Benchmarking, monitoring, troubleshooting
5. **AI Orchestrator setup** (3 files) - Model download, benchmarking, on-chain

### Nice to have
6. Knowledge base articles (3 files)
7. Subgraph documentation (1 file)

---

## Recommendations

### Immediate Actions
1. **Establish documentation strategy** - v2 network-focused with Studio docs external?
2. **Fill Orchestrator gaps** - Per mapping in 00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md
3. **Expand AI Orchestrator content** - Consolidate into ai-pipelines.mdx

### Future Considerations
4. **SDK Documentation Decision** - External-only vs embed in v2
5. **Developer Guide Restructuring** - Studio guides location

---

## Work Summary

| Activity | Output |
|----------|--------|
| V1 files inventoried | 279 MDX files across 9 sections |
| V2 files inventoried | 339 MDX files across 11 sections |
| Mapping tables created | 9 section-level tables |
| Status categories | Covered, Partial, Missing, Excluded |
| Reference documents used | 00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md, file system analysis |

---

## Follow-up Tasks

1. [ ] Review and approve documentation strategy (Studio vs Network scope)
2. [ ] Create missing Orchestrator pages per mapping recommendations
3. [ ] Expand AI Orchestrator content in ai-pipelines.mdx
4. [ ] Add cross-links to external Studio docs if applicable
5. [ ] Update docs.json navigation for any structural changes

---

*Report generated: 2026-02-16*  
*Branch: docs-plan/14-audit-v1-to-v2-coverage*
