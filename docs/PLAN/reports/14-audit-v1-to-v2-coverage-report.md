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

**Key Finding**: V2 is network-focused. All Studio content should live in `v2/pages/010_products/products/livepeer-studio/` or `v2/pages/03_developers/developer-platforms/livepeer-studio/`.

---

## Livepeer Studio Section Recommendations

### Current State

**Existing Livepeer Studio pages in V2:**
- `v2/pages/010_products/products/livepeer-studio/livepeer-studio.mdx` (empty placeholder)
- `v2/pages/010_products/products/livepeer-studio/client-use-cases.mdx` (has content)
- `v2/pages/03_developers/developer-platforms/livepeer-studio/livepeer-studio.mdx` (empty placeholder)

### Recommended Structure for Livepeer Studio Section

Based on v1 content analysis, the following should be added to the Livepeer Studio section:

```
v2/pages/010_products/products/livepeer-studio/
├── livepeer-studio.mdx (overview - needs content)
├── client-use-cases.mdx (✅ exists)
├── getting-started/
│   ├── overview.mdx
│   ├── quick-start.mdx
│   └── authentication.mdx
├── api-reference/
│   ├── overview.mdx
│   ├── authentication.mdx
│   ├── streams/
│   │   ├── overview.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── update.mdx
│   │   ├── delete.mdx
│   │   ├── terminate.mdx
│   │   ├── create-clip.mdx
│   │   ├── get-clip.mdx
│   │   ├── add-multistream-target.mdx
│   │   └── delete-multistream-target.mdx
│   ├── assets/
│   │   ├── overview.mdx
│   │   ├── upload.mdx
│   │   ├── upload-via-url.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── update.mdx
│   │   └── delete.mdx
│   ├── playback/
│   │   ├── overview.mdx
│   │   └── get.mdx
│   ├── sessions/
│   │   ├── overview.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── get-clip.mdx
│   │   └── get-recording.mdx
│   ├── multistream/
│   │   ├── overview.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── update.mdx
│   │   └── delete.mdx
│   ├── transcode/
│   │   ├── overview.mdx
│   │   └── create.mdx
│   ├── webhooks/
│   │   ├── overview.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── update.mdx
│   │   └── delete.mdx
│   ├── signing-keys/
│   │   ├── overview.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── get-all.mdx
│   │   ├── update.mdx
│   │   └── delete.mdx
│   ├── rooms/
│   │   ├── overview.mdx
│   │   ├── create.mdx
│   │   ├── get.mdx
│   │   ├── update.mdx
│   │   ├── delete.mdx
│   │   ├── create-user.mdx
│   │   ├── get-user.mdx
│   │   ├── update-user.mdx
│   │   ├── remove-user.mdx
│   │   ├── start-egress.mdx
│   │   └── stop-egress.mdx
│   ├── tasks/
│   │   ├── overview.mdx
│   │   ├── get.mdx
│   │   └── get-all.mdx
│   └── viewership/
│       ├── get-viewership-metrics.mdx
│       ├── get-realtime-viewership.mdx
│       ├── get-usage-metrics.mdx
│       ├── get-creators-metrics.mdx
│       └── get-public-total-views.mdx
├── sdks/
│   ├── overview.mdx
│   ├── javascript.mdx
│   ├── python.mdx
│   ├── go.mdx
│   └── react/
│       ├── getting-started.mdx
│       ├── player/
│       │   ├── overview.mdx
│       │   ├── Player.mdx
│       │   ├── Root.mdx
│       │   ├── Video.mdx
│       │   ├── Container.mdx
│       │   ├── Controls.mdx
│       │   ├── Play.mdx
│       │   ├── Loading.mdx
│       │   ├── Error.mdx
│       │   ├── Live.mdx
│       │   ├── Poster.mdx
│       │   ├── Fullscreen.mdx
│       │   ├── PictureInPicture.mdx
│       │   ├── Seek.mdx
│       │   ├── Time.mdx
│       │   ├── Volume.mdx
│       │   ├── VideoQualitySelect.mdx
│       │   ├── RateSelect.mdx
│       │   ├── Clip.mdx
│       │   ├── Portal.mdx
│       │   ├── get-src.mdx
│       │   └── useMediaContext.mdx
│       ├── broadcast/
│       │   ├── overview.mdx
│       │   ├── Broadcast.mdx
│       │   ├── Root.mdx
│       │   ├── Container.mdx
│       │   ├── Video.mdx
│       │   ├── Audio.mdx
│       │   ├── Camera.mdx
│       │   ├── Screenshare.mdx
│       │   ├── Source.mdx
│       │   ├── Controls.mdx
│       │   ├── Status.mdx
│       │   ├── Loading.mdx
│       │   ├── Error.mdx
│       │   ├── Enabled.mdx
│       │   ├── Fullscreen.mdx
│       │   ├── PictureInPicture.mdx
│       │   ├── Portal.mdx
│       │   ├── get-ingest.mdx
│       │   └── useBroadcastContext.mdx
│       └── migration/
│           ├── migration-4.x.mdx
│           └── 3.x/
│               ├── getting-started.mdx
│               ├── LivepeerConfig.mdx
│               ├── client.mdx
│               ├── Player.mdx
│               ├── Broadcast.mdx
│               ├── providers/
│               │   └── studio.mdx
│               ├── stream/
│               │   ├── useCreateStream.mdx
│               │   ├── useStream.mdx
│               │   ├── useStreamSessions.mdx
│               │   ├── useStreamSession.mdx
│               │   └── useUpdateStream.mdx
│               ├── asset/
│               │   ├── useCreateAsset.mdx
│               │   ├── useAsset.mdx
│               │   ├── useUpdateAsset.mdx
│               │   └── useAssetMetrics.mdx
│               ├── playback/
│               │   └── usePlaybackInfo.mdx
│               └── constants/
│                   ├── contract-addresses.mdx
│                   └── abis.mdx
├── guides/
│   ├── overview.mdx
│   ├── create-livestream.mdx
│   ├── upload-video-asset.mdx
│   ├── playback-a-livestream.mdx
│   ├── playback-an-asset.mdx
│   ├── livestream-from-browser.mdx
│   ├── stream-via-obs.mdx
│   ├── multistream.mdx
│   ├── clip-a-livestream.mdx
│   ├── access-control/
│   │   ├── jwt.mdx
│   │   └── webhooks.mdx
│   ├── webhooks/
│   │   └── setup-and-listen.mdx
│   ├── events/
│   │   ├── listen-to-stream-events.mdx
│   │   └── listen-to-asset-events.mdx
│   ├── analytics/
│   │   ├── get-engagement-analytics-via-api.mdx
│   │   ├── get-engagement-analytics-via-grafana.mdx
│   │   └── get-engagement-analytics-via-timeplus.mdx
│   ├── optimization/
│   │   ├── optimize-latency.mdx
│   │   └── monitor-stream-health.mdx
│   ├── thumbnails/
│   │   ├── thumbnails-live.mdx
│   │   └── thumbnails-vod.mdx
│   ├── encryption/
│   │   └── encrypted-asset.mdx
│   ├── storage/
│   │   ├── transcode-video-storj.mdx
│   │   └── transcode-video-w3s.mdx
│   └── projects/
│       └── managing-projects.mdx
├── tutorials/
│   ├── decentralized-app-with-fvm.mdx
│   ├── token-gate-videos-with-lit.mdx
│   ├── upload-playback-videos-on-ipfs.mdx
│   ├── upload-playback-videos-on-arweave.mdx
│   └── upload-playback-videos-4everland.mdx
├── core-concepts/
│   ├── overview.mdx
│   ├── streams.mdx
│   ├── assets.mdx
│   ├── multistream.mdx
│   ├── access-control.mdx
│   ├── player.mdx
│   └── studio/
│       ├── in-browser-broadcast.mdx
│       ├── stream-health.mdx
│       └── webhooks.mdx
└── self-hosting/
    ├── overview.mdx
    ├── deploying.mdx
    ├── self-hosting-with-docker.mdx
    └── how-to-contribute.mdx
```

---

## Content Migration Priority

### Priority 1: Critical (User-facing)

1. **Getting Started** (3 files)
   - Quick start guide
   - Authentication setup
   - Overview/introduction

2. **API Reference - Core Endpoints** (20 files)
   - Streams (create, get, update, delete)
   - Assets (upload, get, update, delete)
   - Playback (get playback info)
   - Authentication overview

3. **SDKs - Getting Started** (5 files)
   - SDK overview
   - JavaScript SDK
   - Python SDK
   - Go SDK
   - React SDK getting started

### Priority 2: Important (Common Use Cases)

4. **Developer Guides - Core Workflows** (8 files)
   - Create livestream
   - Upload video asset
   - Playback livestream
   - Playback asset
   - Livestream from browser
   - Stream via OBS
   - Multistream
   - Webhooks setup

5. **API Reference - Extended** (30 files)
   - Sessions
   - Multistream targets
   - Webhooks
   - Signing keys
   - Rooms/WebRTC
   - Tasks
   - Viewership analytics

6. **React SDK Components** (40 files)
   - Player components
   - Broadcast components
   - Migration guides

### Priority 3: Advanced Features

7. **Advanced Guides** (10 files)
   - Access control (JWT, webhooks)
   - Encryption
   - Analytics (Grafana, Timeplus, API)
   - Latency optimization
   - Stream health monitoring
   - Thumbnails
   - Decentralized storage (Storj, W3S)

8. **Tutorials** (5 files)
   - FVM integration
   - Lit Protocol token gating
   - IPFS/Arweave/4everland storage

9. **Core Concepts** (7 files)
   - Stream concepts
   - Asset concepts
   - Multistream concepts
   - Access control concepts
   - Player concepts
   - Studio-specific concepts

### Priority 4: Self-hosting (Alpha Feature)

10. **Self-hosting** (4 files)
    - Overview
    - Deployment
    - Docker setup
    - Contribution guide

---

## Estimated File Counts

| Category | Files to Add | Source |
|----------|--------------|--------|
| **API Reference** | 60 | v1/api-reference/ |
| **SDKs** | 63 | v1/sdks/ |
| **Developer Guides** | 24 | v1/developers/guides/ |
| **Tutorials** | 5 | v1/developers/tutorials/ |
| **Core Concepts** | 7 | v1/developers/core-concepts/ |
| **Self-hosting** | 4 | v1/self-hosting/ |
| **Getting Started** | 3 | v1/developers/ |
| **Total** | **166 files** | |

---

## Recommendations

### 1. Structure Decision

**Option A: Single Location (Recommended)**
- Place all Studio content in `v2/pages/010_products/products/livepeer-studio/`
- Keep `v2/pages/03_developers/developer-platforms/livepeer-studio/` as a redirect or summary page pointing to products section

**Option B: Split by Audience**
- Products section: Overview, use cases, marketing content
- Developer platforms section: Technical docs (API, SDKs, guides)

**Recommendation**: Option A - Keep all Studio content in products section for consistency.

### 2. Content Strategy

- **Migrate v1 content** rather than recreating from scratch
- **Update for v2 styling** using v2 components and patterns
- **Add cross-references** to network documentation where relevant
- **Mark self-hosting as alpha** with appropriate warnings

### 3. Navigation Structure

Update `docs.json` to include:
```json
{
  "group": "Livepeer Studio",
  "pages": [
    "products/livepeer-studio/livepeer-studio",
    "products/livepeer-studio/getting-started/overview",
    "products/livepeer-studio/api-reference/overview",
    "products/livepeer-studio/sdks/overview",
    "products/livepeer-studio/guides/overview"
  ]
}
```

### 4. Quick Wins

Start with these high-impact pages:
1. `livepeer-studio.mdx` - Overview page (currently empty)
2. `getting-started/quick-start.mdx` - 5-minute quickstart
3. `api-reference/overview.mdx` - API reference landing
4. `api-reference/streams/create.mdx` - Most common API call
5. `sdks/react/getting-started.mdx` - React SDK quickstart

---

## Section-by-Section Analysis

### 1. V1 API Reference → V2 Livepeer Studio Section

**V1 Count**: 75 files  
**V2 Status**: ❌ Missing (should be in Livepeer Studio section)

| V1 Path | Recommended V2 Location | Priority |
|---------|------------------------|----------|
| `v1/api-reference/overview/introduction.mdx` | `products/livepeer-studio/api-reference/overview.mdx` | P1 |
| `v1/api-reference/overview/authentication.mdx` | `products/livepeer-studio/getting-started/authentication.mdx` | P1 |
| `v1/api-reference/stream/*.mdx` (11 files) | `products/livepeer-studio/api-reference/streams/` | P1 |
| `v1/api-reference/asset/*.mdx` (7 files) | `products/livepeer-studio/api-reference/assets/` | P1 |
| `v1/api-reference/playback/*.mdx` (2 files) | `products/livepeer-studio/api-reference/playback/` | P1 |
| `v1/api-reference/session/*.mdx` (5 files) | `products/livepeer-studio/api-reference/sessions/` | P2 |
| `v1/api-reference/multistream/*.mdx` (6 files) | `products/livepeer-studio/api-reference/multistream/` | P2 |
| `v1/api-reference/transcode/*.mdx` (2 files) | `products/livepeer-studio/api-reference/transcode/` | P2 |
| `v1/api-reference/webhook/*.mdx` (6 files) | `products/livepeer-studio/api-reference/webhooks/` | P2 |
| `v1/api-reference/signing-key/*.mdx` (6 files) | `products/livepeer-studio/api-reference/signing-keys/` | P2 |
| `v1/api-reference/room/*.mdx` (10 files) | `products/livepeer-studio/api-reference/rooms/` | P2 |
| `v1/api-reference/task/*.mdx` (3 files) | `products/livepeer-studio/api-reference/tasks/` | P2 |
| `v1/api-reference/viewership/*.mdx` (5 files) | `products/livepeer-studio/api-reference/viewership/` | P2 |
| `v1/api-reference/generate/*.mdx` (10 files) | ✅ Already in Gateway section | N/A |

---

### 2. V1 SDKs → V2 Livepeer Studio Section

**V1 Count**: 63 files  
**V2 Status**: ❌ Missing (should be in Livepeer Studio section)

| V1 Path | Recommended V2 Location | Priority |
|---------|------------------------|----------|
| `v1/sdks/introduction.mdx` | `products/livepeer-studio/sdks/overview.mdx` | P1 |
| `v1/sdks/javascript.mdx` | `products/livepeer-studio/sdks/javascript.mdx` | P1 |
| `v1/sdks/python.mdx` | `products/livepeer-studio/sdks/python.mdx` | P1 |
| `v1/sdks/go.mdx` | `products/livepeer-studio/sdks/go.mdx` | P1 |
| `v1/sdks/react/getting-started.mdx` | `products/livepeer-studio/sdks/react/getting-started.mdx` | P1 |
| `v1/sdks/react/Player.mdx` | `products/livepeer-studio/sdks/react/player/Player.mdx` | P2 |
| `v1/sdks/react/Broadcast.mdx` | `products/livepeer-studio/sdks/react/broadcast/Broadcast.mdx` | P2 |
| `v1/sdks/react/player/*.mdx` (20 files) | `products/livepeer-studio/sdks/react/player/` | P2 |
| `v1/sdks/react/broadcast/*.mdx` (17 files) | `products/livepeer-studio/sdks/react/broadcast/` | P2 |
| `v1/sdks/react/migration/*.mdx` (17 files) | `products/livepeer-studio/sdks/react/migration/` | P2 |

---

### 3. V1 Developers → V2 Livepeer Studio Section

**V1 Count**: 44 files  
**V2 Status**: ⚠️ Partial (Studio-specific content should be in Studio section)

| V1 Path | Recommended V2 Location | Priority |
|---------|------------------------|----------|
| `v1/developers/introduction.mdx` | `products/livepeer-studio/livepeer-studio.mdx` | P1 |
| `v1/developers/quick-start.mdx` | `products/livepeer-studio/getting-started/quick-start.mdx` | P1 |
| `v1/developers/core-concepts/core-api/*.mdx` | `products/livepeer-studio/core-concepts/` | P3 |
| `v1/developers/core-concepts/studio/*.mdx` | `products/livepeer-studio/core-concepts/studio/` | P3 |
| `v1/developers/guides/*.mdx` (24 files) | `products/livepeer-studio/guides/` | P2 |
| `v1/developers/tutorials/*.mdx` (5 files) | `products/livepeer-studio/tutorials/` | P3 |

---

### 4. V1 Self-hosting → V2 Livepeer Studio Section

**V1 Count**: 4 files  
**V2 Status**: ❌ Missing (should be in Livepeer Studio section)

| V1 Path | Recommended V2 Location | Priority |
|---------|------------------------|----------|
| `v1/self-hosting/overview.mdx` | `products/livepeer-studio/self-hosting/overview.mdx` | P4 |
| `v1/self-hosting/deploying.mdx` | `products/livepeer-studio/self-hosting/deploying.mdx` | P4 |
| `v1/self-hosting/self-hosting-with-docker.mdx` | `products/livepeer-studio/self-hosting/self-hosting-with-docker.mdx` | P4 |
| `v1/self-hosting/how-to-contribute.mdx` | `products/livepeer-studio/self-hosting/how-to-contribute.mdx` | P4 |

**Note**: Mark as alpha feature with appropriate warnings.

---

## Coverage Summary by Status

| Status | Count | Percentage | Notes |
|--------|-------|------------|-------|
| **Covered** | ~65 | 23% | Network-focused content (Gateways, Orchestrators, etc.) |
| **Partial** | ~55 | 20% | Content exists but needs expansion |
| **Missing (Studio)** | ~166 | 60% | Should be in Livepeer Studio section |
| **Excluded/Deprecated** | ~29 | 10% | Intentionally not migrated |

---

## Follow-up Tasks

1. [ ] Create Livepeer Studio section structure in `v2/pages/010_products/products/livepeer-studio/`
2. [ ] Migrate Priority 1 content (Getting Started, Core API, Core SDKs)
3. [ ] Migrate Priority 2 content (Guides, Extended API, React SDK)
4. [ ] Migrate Priority 3 content (Advanced features, tutorials, concepts)
5. [ ] Migrate Priority 4 content (Self-hosting - mark as alpha)
6. [ ] Update `docs.json` navigation
7. [ ] Add cross-references between Studio and Network documentation
8. [ ] Update existing placeholder pages (`livepeer-studio.mdx`)

---

*Report generated: 2026-02-16*  
*Branch: `docs-plan/14-audit-v1-to-v2-coverage`*  
*Updated: Based on clarification that v2 is network-focused and Studio content belongs in products section*
