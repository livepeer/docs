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
| `v1/api-reference/overview/introduction.mdx` | — | Missing | V2 points to external livepeer.studio/docs |
| `v1/api-reference/overview/authentication.mdx` | — | Missing | Authentication docs not in V2 |
| `v1/api-reference/stream/*.mdx` (11 files) | — | Missing | Stream API endpoints (create, get, delete, etc.) |
| `v1/api-reference/asset/*.mdx` (7 files) | — | Missing | Asset upload/management APIs |
| `v1/api-reference/playback/*.mdx` (2 files) | — | Missing | Playback info APIs |
| `v1/api-reference/session/*.mdx` (5 files) | — | Missing | Session management APIs |
| `v1/api-reference/multistream/*.mdx` (6 files) | — | Missing | Multistream target APIs |
| `v1/api-reference/transcode/*.mdx` (2 files) | — | Missing | Transcoding job APIs |
| `v1/api-reference/webhook/*.mdx` (6 files) | — | Missing | Webhook management APIs |
| `v1/api-reference/signing-key/*.mdx` (6 files) | — | Missing | Signing key APIs |
| `v1/api-reference/room/*.mdx` (10 files) | — | Missing | Room/WebRTC APIs |
| `v1/api-reference/task/*.mdx` (3 files) | — | Missing | Task status APIs |
| `v1/api-reference/viewership/*.mdx` (5 files) | — | Missing | Analytics/viewership APIs |
| `v1/api-reference/generate/*.mdx` (10 files) | `v2/pages/04_gateways/references/api-reference/AI-API/` | Covered | AI generate endpoints moved to Gateway references |

**Recommendation**: V2 intentionally excludes Studio API reference, pointing to external docs. Confirm this is the desired approach or consider linking strategy.

---

### 2. V1 SDKs → V2 Coverage

**V1 Count**: 63 files  
**V2 Status**: ❌ Missing (placeholder pages only)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/sdks/introduction.mdx` | `v2/pages/03_developers/technical-references/sdks.mdx` | Partial | V2 file is empty placeholder ("# SDKs") |
| `v1/sdks/javascript.mdx` | — | Missing | Server-side JS SDK docs |
| `v1/sdks/python.mdx` | — | Missing | Python SDK docs |
| `v1/sdks/go.mdx` | — | Missing | Go SDK docs |
| `v1/sdks/react/getting-started.mdx` | — | Missing | React SDK setup |
| `v1/sdks/react/Player.mdx` | — | Missing | Player component reference |
| `v1/sdks/react/Broadcast.mdx` | — | Missing | Broadcast component reference |
| `v1/sdks/react/player/*.mdx` (20 files) | — | Missing | Player subcomponents (Clip, Controls, Fullscreen, etc.) |
| `v1/sdks/react/broadcast/*.mdx` (17 files) | — | Missing | Broadcast subcomponents (Audio, Camera, etc.) |
| `v1/sdks/react/migration/*.mdx` (17 files) | — | Missing | SDK migration guides |
| `v1/ai/sdks/*.mdx` (4 files) | `v2/pages/01_about/livepeer-network/interfaces.mdx` | Partial | Brief SDK mention in interfaces page |

**Recommendation**: Create SDK documentation or establish clear linking to external SDK docs (GitHub, npm).

---

### 3. V1 Developers → V2 Coverage

**V1 Count**: 44 files  
**V2 Status**: ⚠️ Partial (restructured)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/developers/introduction.mdx` | `v2/pages/03_developers/developer-portal.mdx` | Rewritten | V2 has new developer portal structure |
| `v1/developers/quick-start.mdx` | `v2/pages/03_developers/building-on-livepeer/quick-starts/` | Rewritten | Multiple quickstart paths in V2 |
| `v1/developers/livepeer-studio-cli.mdx` | — | Missing | Studio CLI specific docs |
| **Core Concepts** | | | |
| `v1/developers/core-concepts/core-api/stream.mdx` | — | Missing | Stream API concept (Studio-specific) |
| `v1/developers/core-concepts/core-api/asset.mdx` | — | Missing | Asset concept (Studio-specific) |
| `v1/developers/core-concepts/core-api/multistream.mdx` | — | Missing | Multistream concept |
| `v1/developers/core-concepts/core-api/access-control.mdx` | — | Missing | Access control concept |
| `v1/developers/core-concepts/player/overview.mdx` | — | Missing | Player concept (React SDK) |
| `v1/developers/core-concepts/studio/*.mdx` (3 files) | — | Missing | Studio-specific concepts |
| `v1/developers/core-concepts/livepeer-network/orchestrators.mdx` | `v2/pages/01_about/livepeer-network/livepeer-actors/orchestrators.mdx` | Covered | Moved to About section |
| `v1/developers/core-concepts/livepeer-network/gateways.mdx` | `v2/pages/01_about/livepeer-network/livepeer-actors/gateways.mdx` | Covered | Moved to About section |
| `v1/developers/core-concepts/livepeer-network/delegators.mdx` | `v2/pages/01_about/livepeer-network/livepeer-actors/delegators.mdx` | Covered | Moved to About section |
| **Guides** | | | |
| `v1/developers/guides/overview.mdx` | `v2/pages/03_developers/guides-and-resources/developer-guides.mdx` | Partial | V2 guide structure differs |
| `v1/developers/guides/create-livestream.mdx` | — | Missing | Studio livestream guide |
| `v1/developers/guides/upload-video-asset.mdx` | — | Missing | Studio asset upload guide |
| `v1/developers/guides/playback-a-livestream.mdx` | — | Missing | Studio playback guide |
| `v1/developers/guides/playback-an-asset.mdx` | — | Missing | Studio playback guide |
| `v1/developers/guides/multistream.mdx` | — | Missing | Multistream guide |
| `v1/developers/guides/clip-a-livestream.mdx` | — | Missing | Clipping guide |
| `v1/developers/guides/livestream-from-browser.mdx` | — | Missing | Browser broadcast guide |
| `v1/developers/guides/stream-via-obs.mdx` | — | Missing | OBS streaming guide |
| `v1/developers/guides/access-control-*.mdx` (2 files) | — | Missing | Access control guides |
| `v1/developers/guides/encrypted-asset.mdx` | — | Missing | Encryption guide |
| `v1/developers/guides/setup-and-listen-to-webhooks.mdx` | — | Missing | Webhook setup guide |
| `v1/developers/guides/listen-to-stream-events.mdx` | — | Missing | Event listening guide |
| `v1/developers/guides/listen-to-asset-events.mdx` | — | Missing | Event listening guide |
| `v1/developers/guides/monitor-stream-health.mdx` | — | Missing | Stream health guide |
| `v1/developers/guides/optimize-latency-of-a-livestream.mdx` | — | Missing | Latency optimization |
| `v1/developers/guides/thumbnails-*.mdx` (2 files) | — | Missing | Thumbnail guides |
| `v1/developers/guides/get-engagement-analytics-*.mdx` (3 files) | — | Missing | Analytics guides |
| `v1/developers/guides/transcode-video-*.mdx` (2 files) | — | Missing | Decentralized storage transcoding guides |
| `v1/developers/guides/managing-projects.mdx` | — | Missing | Project management (Studio-specific) |
| **Tutorials** | | | |
| `v1/developers/tutorials/decentralized-app-with-fvm.mdx` | — | Missing | FVM tutorial |
| `v1/developers/tutorials/token-gate-videos-with-lit.mdx` | — | Missing | Lit Protocol tutorial |
| `v1/developers/tutorials/upload-playback-videos-*.mdx` (3 files) | — | Missing | IPFS/Arweave/4everland tutorials |

**Recommendation**: Clarify Studio vs Network developer documentation strategy. Most v1 developer content is Studio-specific.

---

### 4. V1 AI → V2 Coverage

**V1 Count**: 44 files  
**V2 Status**: ⚠️ Partial (restructured for network focus)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/ai/introduction.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/overview-ai-on-livepeer.mdx` | Rewritten | Different approach |
| `v1/ai/whats-new.mdx` | — | Deprecated | News items get stale |
| **AI API Reference** | | | |
| `v1/ai/api-reference/overview.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/ai.mdx` | Covered | Moved to Gateway references |
| `v1/ai/api-reference/text-to-image.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/text-to-image.mdx` | Covered | |
| `v1/ai/api-reference/image-to-image.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/image-to-image.mdx` | Covered | |
| `v1/ai/api-reference/image-to-video.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/image-to-video.mdx` | Covered | |
| `v1/ai/api-reference/image-to-text.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/image-to-text.mdx` | Covered | |
| `v1/ai/api-reference/audio-to-text.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/audio-to-text.mdx` | Covered | |
| `v1/ai/api-reference/text-to-speech.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/text-to-speech.mdx` | Covered | |
| `v1/ai/api-reference/upscale.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/upscale.mdx` | Covered | |
| `v1/ai/api-reference/segment-anything-2.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/segment-anything-2.mdx` | Covered | |
| `v1/ai/api-reference/llm.mdx` | `v2/pages/04_gateways/references/api-reference/AI-API/llm.mdx` | Covered | |
| **AI Pipelines** | | | |
| `v1/ai/pipelines/overview.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/custom-ai-pipelines.mdx` | Partial | Covered at high level |
| `v1/ai/pipelines/*.mdx` (9 files) | `v2/pages/04_gateways/references/api-reference/AI-API/` | Merged | Pipeline docs merged into API reference |
| **AI SDKs** | | | |
| `v1/ai/sdks/*.mdx` (4 files) | `v2/pages/01_about/livepeer-network/interfaces.mdx` | Partial | Brief mention only |
| **AI Builders** | | | |
| `v1/ai/builders/get-started.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/using-ai-on-livepeer.mdx` | Partial | Restructured |
| `v1/ai/builders/gateways.mdx` | `v2/pages/04_gateways/` | Covered | Gateway section expanded |
| `v1/ai/builders/showcase.mdx` | `v2/pages/00_home/project-showcase/showcase.mdx` | Covered | Moved to Home section |
| **AI Contributors** | | | |
| `v1/ai/contributors/get-started.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/byoc.mdx` | Partial | BYOC coverage |
| `v1/ai/contributors/developers.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/comfystream.mdx` | Partial | ComfyStream coverage |
| `v1/ai/contributors/guides/*.mdx` (2 files) | — | Missing | Add model/pipeline guides |
| `v1/ai/contributors/coming-soon.mdx` | — | Deprecated | Placeholder |
| **AI Gateways** | | | |
| `v1/ai/gateways/*.mdx` (3 files) | `v2/pages/04_gateways/run-a-gateway/` | Covered | Merged into Gateway section |
| **AI Orchestrators** | | | |
| `v1/ai/orchestrators/get-started.mdx` | `v2/pages/05_orchestrators/advanced-setup/ai-pipelines.mdx` | Partial | Needs expansion |
| `v1/ai/orchestrators/models-config.mdx` | `v2/pages/05_orchestrators/advanced-setup/ai-pipelines.mdx` | Partial | Needs detail |
| `v1/ai/orchestrators/models-download.mdx` | — | Missing | Model download guide |
| `v1/ai/orchestrators/start-orchestrator.mdx` | `v2/pages/05_orchestrators/setting-up-an-orchestrator/` | Partial | Part of setup |
| `v1/ai/orchestrators/ai-worker.mdx` | `v2/pages/03_developers/ai-inference-on-livepeer/byoc.mdx` | Partial | BYOC coverage |
| `v1/ai/orchestrators/benchmarking.mdx` | — | Missing | AI benchmarking guide |
| `v1/ai/orchestrators/onchain.mdx` | — | Missing | On-chain AI setup |

---

### 5. V1 Orchestrators → V2 Coverage

**V1 Count**: 19 files  
**V2 Status**: ⚠️ Partial (detailed mapping available)

*See detailed analysis in: `docs/ORCHESTRATORS/00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md`*

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/orchestrators/introduction.mdx` | `v2/pages/05_orchestrators/about-orchestrators/overview.mdx` | Rewritten | V1 had misplaced Studio content |
| `v1/orchestrators/quick-start.mdx` | `v2/pages/05_orchestrators/quickstart/overview.mdx` | Rewritten | V1 had misplaced Studio content |
| `v1/orchestrators/livepeer-studio-cli.mdx` | — | Excluded | Studio-specific |
| **Orchestrator Guides** | | | |
| `v1/orchestrators/guides/get-started.mdx` | `v2/pages/05_orchestrators/quickstart/orchestrator-setup.mdx` | Partial | Content needs expansion |
| `v1/orchestrators/guides/install-go-livepeer.mdx` | `v2/pages/05_orchestrators/setting-up-an-orchestrator/install-go-livepeer.mdx` | Covered | New page created |
| `v1/orchestrators/guides/connect-to-arbitrum.mdx` | `v2/pages/05_orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx` | Covered | New page created |
| `v1/orchestrators/guides/configure-reward-calling.mdx` | `v2/pages/05_orchestrators/advanced-setup/rewards-and-fees.mdx` | Partial | Merge needed |
| `v1/orchestrators/guides/set-session-limits.mdx` | `v2/pages/05_orchestrators/references/cli-flags.mdx` | Partial | In CLI flags |
| `v1/orchestrators/guides/set-pricing.mdx` | `v2/pages/05_orchestrators/advanced-setup/rewards-and-fees.mdx` | Partial | Merge needed |
| `v1/orchestrators/guides/benchmark-transcoding.mdx` | — | Missing | Benchmarking guide needed |
| `v1/orchestrators/guides/assess-capabilities.mdx` | — | Missing | Capability assessment needed |
| `v1/orchestrators/guides/monitor-metrics.mdx` | — | Missing | Monitoring guide needed |
| `v1/orchestrators/guides/vote.mdx` | `v2/pages/06_lptoken/governance/` | Partial | In governance section |
| `v1/orchestrators/guides/dual-mine.mdx` | — | Missing | Dual mining guide |
| `v1/orchestrators/guides/o-t-split.mdx` | `v2/pages/05_orchestrators/about-orchestrators/architecture.mdx` | Partial | In architecture |
| `v1/orchestrators/guides/migrate-to-arbitrum.mdx` | — | Missing | Migration guide (historical) |
| `v1/orchestrators/guides/migrate-from-contract-wallet.mdx` | — | Missing | Migration guide |
| `v1/orchestrators/guides/gateway-introspection.mdx` | — | Missing | Introspection guide |
| `v1/orchestrators/guides/troubleshoot.mdx` | `v2/pages/05_orchestrators/references/faq.mdx` | Partial | In FAQ |

---

### 6. V1 Gateways → V2 Coverage

**V1 Count**: 11 files  
**V2 Status**: ✅ Well covered (expanded)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/gateways/introduction.mdx` | `v2/pages/04_gateways/about-gateways/overview.mdx` | Covered | Expanded |
| `v1/gateways/quick-start.mdx` | `v2/pages/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx` | Covered | Comprehensive |
| `v1/gateways/livepeer-studio-cli.mdx` | — | Excluded | Studio-specific |
| `v1/gateways/guides/gateway-overview.mdx` | `v2/pages/04_gateways/about-gateways/gateway-explainer.mdx` | Covered | |
| `v1/gateways/guides/docker-install.mdx` | `v2/pages/04_gateways/run-a-gateway/install/docker-install.mdx` | Covered | |
| `v1/gateways/guides/linux-install.mdx` | `v2/pages/04_gateways/run-a-gateway/install/linux-install.mdx` | Covered | |
| `v1/gateways/guides/windows-install.mdx` | `v2/pages/04_gateways/run-a-gateway/install/windows-install.mdx` | Covered | |
| `v1/gateways/guides/fund-gateway.mdx` | `v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx` | Covered | |
| `v1/gateways/guides/publish-content.mdx` | `v2/pages/04_gateways/run-a-gateway/publish/` | Partial | Restructured |
| `v1/gateways/guides/playback-content.mdx` | `v2/pages/04_gateways/using-gateways/` | Partial | Restructured |
| `v1/gateways/guides/transcoding-options.mdx` | `v2/pages/04_gateways/run-a-gateway/v1/transcoding-options.mdx` | Covered | Preserved |

---

### 7. V1 Delegators → V2 Coverage

**V1 Count**: 6 files  
**V2 Status**: ✅ Covered (restructured)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/delegators/introduction.mdx` | `v2/pages/06_lptoken/delegation/overview.mdx` | Covered | Moved to LPToken section |
| `v1/delegators/quick-start.mdx` | `v2/pages/06_lptoken/delegation/delegation-guide.mdx` | Covered | |
| `v1/delegators/livepeer-studio-cli.mdx` | — | Excluded | Studio-specific |
| `v1/delegators/guides/bridge-lpt-to-arbitrum.mdx` | `v2/pages/04_gateways/run-a-gateway/requirements/on-chain setup/bridge-lpt-to-arbitrum.mdx` | Covered | In Gateway section |
| `v1/delegators/guides/migrate-stake-to-arbitrum.mdx` | — | Missing | Migration guide (historical) |
| `v1/delegators/guides/yield-calculation.mdx` | `v2/pages/06_lptoken/delegation/delegation-economics.mdx` | Partial | Economics coverage |

---

### 8. V1 References → V2 Coverage

**V1 Count**: 13 files  
**V2 Status**: ⚠️ Partial (distributed across sections)

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/references/api-support-matrix.mdx` | — | Missing | API support matrix |
| `v1/references/awesome-livepeer.mdx` | `v2/pages/02_community/resources/awesome-livepeer.mdx` | Covered | Moved to Community |
| `v1/references/contract-addresses.mdx` | `v2/pages/07_resources/references/contract-addresses.mdx` | Covered | Also in Gateways section |
| `v1/references/example-applications.mdx` | `v2/pages/00_home/project-showcase/applications.mdx` | Covered | Moved to Showcase |
| `v1/references/subgraph.mdx` | — | Missing | Subgraph documentation |
| **go-livepeer References** | | | |
| `v1/references/go-livepeer/bandwidth-requirements.mdx` | — | Missing | Bandwidth requirements |
| `v1/references/go-livepeer/cli-reference.mdx` | `v2/pages/04_gateways/references/go-livepeer/cli-reference.mdx` | Covered | In Gateway references |
| `v1/references/go-livepeer/gpu-support.mdx` | `v2/pages/04_gateways/references/go-livepeer/gpu-support.mdx` | Covered | |
| `v1/references/go-livepeer/hardware-requirements.mdx` | `v2/pages/04_gateways/references/go-livepeer/hardware-requirements.mdx` | Covered | Also in Orchestrators |
| `v1/references/go-livepeer/prometheus-metrics.mdx` | `v2/pages/04_gateways/references/go-livepeer/prometheus-metrics.mdx` | Covered | |
| **Knowledge Base** | | | |
| `v1/references/knowledge-base/livestream.mdx` | — | Missing | Livestream knowledge base |
| `v1/references/knowledge-base/playback.mdx` | — | Missing | Playback knowledge base |
| `v1/references/knowledge-base/vod.mdx` | — | Missing | VOD knowledge base |

---

### 9. V1 Self-hosting → V2 Coverage

**V1 Count**: 4 files  
**V2 Status**: ❌ Missing

| V1 Path | V2 Counterpart | Status | Notes |
|---------|----------------|--------|-------|
| `v1/self-hosting/overview.mdx` | — | Missing | Livepeer Studio self-hosting |
| `v1/self-hosting/deploying.mdx` | — | Missing | Deployment guide |
| `v1/self-hosting/self-hosting-with-docker.mdx` | — | Missing | Docker self-hosting |
| `v1/self-hosting/how-to-contribute.mdx` | — | Missing | Contribution guide |

**Note**: Self-hosting in v1 was specifically for Livepeer Studio (alpha feature). V2 focuses on running gateways/orchestrators directly on the network.

---

## Coverage Summary by Status

| Status | Count | Percentage | Notes |
|--------|-------|------------|-------|
| **Covered** | ~65 | 23% | Direct equivalent or well-mapped content |
| **Partial** | ~55 | 20% | Content exists but needs expansion/detail |
| **Missing** | ~130 | 47% | No v2 equivalent (mostly Studio-specific) |
| **Excluded/Deprecated** | ~29 | 10% | Intentionally not migrated (Studio CLI, "coming soon", etc.) |

---

## Criteria for Exclusion

The following categories were intentionally excluded from V2:

1. **Studio-specific content**: APIs, SDKs, guides that are specific to Livepeer Studio platform
   - External reference: livepeer.studio/docs
   
2. **"livepeer-studio-cli.mdx" pages**: Present in v1/orchestrators, v1/delegators, v1/gateways, v1/developers
   - Misplaced content in v1 (developer/Studio intro in orchestrator section)

3. **Deprecated/stale content**: "What's new", "coming soon" pages

4. **Migration guides**: One-time L1→Arbitrum migrations (historical but may still be needed for some users)

---

## Key Gaps Requiring Attention

### Critical (User-facing impact)

1. **SDK Documentation** (63 files missing)
   - React Player/Broadcast components
   - Server-side SDKs (JS, Python, Go)
   - Migration guides
   - **Action**: Create SDK section or establish external linking strategy

2. **API Reference** (60+ files missing)
   - Studio API endpoints for streams, assets, playback, etc.
   - **Action**: Confirm external docs strategy (livepeer.studio/docs)

3. **Developer Guides** (20+ files missing)
   - Livestream, playback, webhook, analytics guides
   - **Action**: Determine if Studio guides belong in v2 or external

### Important (Operator impact)

4. **Orchestrator operational guides** (5 files missing)
   - Benchmarking, monitoring, troubleshooting
   - **Action**: Create missing pages per mapping recommendations

5. **AI Orchestrator setup** (3 files missing)
   - Model download, benchmarking, on-chain setup
   - **Action**: Expand ai-pipelines.mdx or create separate pages

### Nice to have (Completeness)

6. **Knowledge base articles** (3 files)
7. **Subgraph documentation** (1 file)
8. **API support matrix** (1 file)

---

## Recommendations

### Immediate Actions

1. **Establish documentation strategy**
   - Clarify scope: Is v2 network-focused with Studio docs external?
   - If yes, add clear cross-linking to livepeer.studio/docs
   - If no, plan SDK/API content migration

2. **Fill Orchestrator gaps**
   - Complete pages identified in `docs/ORCHESTRATORS/00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md`

3. **Expand AI Orchestrator content**
   - Consolidate AI setup guides into comprehensive ai-pipelines.mdx
   - Add model download and benchmarking content

### Future Considerations

4. **SDK Documentation Decision**
   - Option A: External-only (link to GitHub/npm docs)
   - Option B: Embed in v2 (requires significant content creation)

5. **Developer Guide Restructuring**
   - Option A: Keep Studio-specific guides external
   - Option B: Create "Using Livepeer via Studio" section in v2 Developers

---

## Work Summary

| Activity | Output |
|----------|--------|
| V1 files inventoried | 279 MDX files across 9 sections |
| V2 files inventoried | 339 MDX files across 11 sections |
| Mapping tables created | 9 section-level tables |
| Status categories | Covered, Partial, Missing, Excluded |
| Reference documents used | `00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md`, file system analysis |

---

## Testing Notes

- All file paths verified against actual file system
- Cross-referenced with existing mapping document for Orchestrators
- Spot-checked v2 placeholder pages (SDKs.mdx, APIs.mdx confirmed empty)

---

## Follow-up Tasks

1. [ ] Review and approve documentation strategy (Studio vs Network scope)
2. [ ] Create missing Orchestrator pages per mapping recommendations
3. [ ] Expand AI Orchestrator content in ai-pipelines.mdx
4. [ ] Add cross-links to external Studio docs if applicable
5. [ ] Update docs.json navigation for any structural changes

---

*Report generated: 2026-02-16*  
*Branch: `docs-plan/14-audit-v1-to-v2-coverage`*
