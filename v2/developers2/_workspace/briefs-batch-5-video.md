# Content briefs — Batch 5: Build / Video

Seven pages. Mix of NEW (5) and Retained-rename (2). Tiered template applied.

Build / Video serves Persona 3 (Video Developer) primarily — streaming engineers,
ffmpeg-comfortable developers, video platform builders. Pages cover ingest and
playback transport, GPU transcoding, codec support, live events, VOD workflows,
storage and archival, and lpms integration.

After verification: `catalyst-link.mdx` was dropped (Catalyst is a Solutions
concern; one paragraph in `lpms-integration.mdx` covers the developer-facing
acknowledgement). lpms and catalyst confirmed as siblings in `go-livepeer/go.mod`
(go-livepeer imports lpms; not catalyst).

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md`,
existing v2 video content.

---

## 38. `/v2/developers/build/video/ingest-and-playback.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a Video Developer a working transport-layer mental model — how RTMP and WebRTC ingest land at a gateway, how HLS, LL-HLS, and WebRTC playback come back out — so they wire up live or VOD streams against any Livepeer gateway with confidence.

**Q2 — Featured reader.** A streaming engineer who knows ffmpeg, knows HLS segments, and has shipped live ingest before. They are now wiring up their first Livepeer-backed stream and want the transport layer documented end-to-end before they read the higher-level player and broadcast pages.

**Q3 — Real alternative.** They keep using Mux's documented ingest endpoints, or they wire their own RTMP server in front of an ffmpeg cluster and skip the gateway abstraction entirely.

**Q4 — Required belief.** Livepeer's transport layer is gateway-agnostic at the protocol level — the same RTMP and WebRTC ingest patterns work against Studio, Cloud Community, GWID, and self-hosted, with documented endpoint shapes and codec support.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer with OBS / ffmpeg pushing RTMP | "What's the RTMP endpoint shape?" | Endpoint URL pattern + auth shape | Served here |
| Engineer wanting WebRTC ingest from server | "WHIP support?" | WHIP pattern + supported gateways | Served here |
| Engineer doing HLS playback | "What's the HLS URL shape?" | URL pattern + segment cadence | Served here |
| Engineer wanting LL-HLS or WebRTC playback | "Sub-second latency support?" | LL-HLS and WHEP patterns | Served here |
| Frontend dev embedding playback | "Player component?" | Link to `frontend-react-player.mdx` | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Three ingest paths in (RTMP, RTMPS, WHIP). Three playback paths out (HLS, LL-HLS, WHEP). Endpoint shapes, codec expectations, and failure modes documented per gateway."
2. **Ingest paths.** RTMP at the standard 1935 port. RTMPS for TLS. WHIP for WebRTC server-to-server. Stream-key-based authentication.
3. **Playback paths.** HLS for broad compatibility. LL-HLS for sub-2-second latency. WHEP for WebRTC sub-second latency.
4. **Stream ID to URL mapping.** How a stream ID becomes the ingest URL (RTMP path) and the playback URL (HLS manifest path) per gateway.
5. **Codec expectations.** H.264 default for ingest. AAC for audio. Opus for WebRTC audio. Cross-link to `codec-support.mdx` for the full output codec matrix.
6. **Common failure modes.** Segment drops on slow uploaders, codec mismatches at ingest, TLS issues on RTMPS, NAT issues on WebRTC.
7. **Cross-links.** `frontend-react-player.mdx` for the player primitive. `frontend-react-broadcast.mdx` for browser ingest. `gpu-transcoding.mdx` for the orchestrator-side processing.

### Frontmatter

```yaml
---
title: "Ingest and playback"
sidebarTitle: "Ingest & playback"
description: "RTMP, RTMPS, WHIP ingest. HLS, LL-HLS, WHEP playback. Endpoint shapes and codec expectations across every Livepeer gateway."
pageType: "concept"
---
```

### Information to convey

- Three ingest paths: RTMP, RTMPS, WHIP.
- Three playback paths: HLS, LL-HLS, WHEP.
- Stream-key authentication pattern (gateway-agnostic shape).
- Codec expectations at ingest layer; cross-link to codec-support for the output matrix.
- Common failure modes and diagnosis hints.

### Information to exclude

- Player component embedding (lives in `frontend-react-player.mdx`).
- Browser broadcast component (lives in `frontend-react-broadcast.mdx`).
- Orchestrator-side transcoding (lives in `gpu-transcoding.mdx`).
- Studio Asset API uploads (Solutions/Studio).
- VOD recording lifecycle (lives in `vod-workflows.mdx`).

### Components

- One Mermaid diagram showing the three-in / three-out shape.
- Endpoint URL pattern table (per gateway).
- `<Note>` callouts for TLS and NAT failure modes.

### Sources to consult

- Existing v2 ingest documentation in Solutions/Studio (verify URL shapes).
- `/v2/gateways/guides/deployment-details/setup-options.mdx` for the AI gateway vs video gateway distinction.
- `persona-routing-and-infra-map.md` Part 2.4 (transport layer).

---

## 39. `/v2/developers/build/video/gpu-transcoding.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a Video Developer an authoritative view of which GPUs the Livepeer network transcodes on, what each GPU family supports for codecs, and how go-livepeer selects a transcoder for a given profile — so the developer can predict cost and capability for their workload.

**Q2 — Featured reader.** A Video Developer evaluating Livepeer for transcoding cost or capability. They have ffmpeg comfort, know what NVENC and VAAPI mean, and want to know what the network actually supports today before they commit. They are also potentially considering running their own orchestrator (linked out to Orchestrators tab).

**Q3 — Real alternative.** They run their own ffmpeg cluster on hyperscaler GPU instances or stay on AWS Elemental MediaLive at higher per-minute cost.

**Q4 — Required belief.** The Livepeer network supports my codec stack on a documented set of GPUs, and I can predict transcoding capacity and cost without operating any orchestrators myself.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer wanting H.264 + H.265 | "Both supported across the network?" | Yes — NVENC standard | Served here |
| Engineer wanting AV1 | "AV1 status?" | Prototype via ad-astra-video fork; not yet upstream | Served here |
| Engineer wanting GPU procurement detail | "Which GPUs perform best?" | Link to Orchestrators tab for procurement | Linked |
| Engineer wanting throughput numbers | "Real-world FPS?" | Cross-link to NaaP Analytics + AI Performance Leaderboard | Linked |
| Engineer running their own orchestrator | "How do I configure my GPU?" | Link to Orchestrators tab | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Which GPUs the Livepeer network transcodes on, which codecs they support, and how a gateway picks a transcoder for your profile."
2. **GPU families on the network.** Nvidia (NVENC) — most common, full codec coverage. AMD (VAAPI) — supported but rare. Netint MA35D — AV1 and H.265 hardware. Apple silicon — not on the network.
3. **Codec support per family.** Table: Nvidia / AMD / Netint by H.264 / H.265 / AV1 / VP9. Cross-link to `codec-support.mdx` for licensing notes.
4. **Selection by gateway.** Gateway picks orchestrator based on capability advertisement plus selection weighting (cross-link to `ai-orchestration.mdx` for the flag detail).
5. **Throughput numbers.** Cross-link to NaaP Analytics (`gateway.livepeer.cloud`-derived) and AI Performance Leaderboard (Cloud SPE).
6. **Procurement and operation.** Out of scope — Video Developer track ends at "what does the network support". Orchestrator-side procurement, hardware ROI, and operation live in the Orchestrators tab.
7. **Cross-links.** `codec-support.mdx`, `ai-orchestration.mdx`, Orchestrators tab landing.

### Frontmatter

```yaml
---
title: "GPU transcoding"
sidebarTitle: "GPU transcoding"
description: "GPU families on the Livepeer network, codec support per family, and how a gateway picks a transcoder. For developers who want to predict cost and capability."
pageType: "concept"
---
```

### Information to convey

- Nvidia NVENC is the dominant GPU family on the network.
- Netint MA35D supports AV1 and H.265 as ASIC-accelerated hardware.
- AMD VAAPI is supported but rare on the network.
- AV1 is a prototype via the ad-astra-video fork (verified; not yet upstream).
- Selection happens at the gateway via capability advertisement + selection weighting.
- Real-world throughput data lives in NaaP Analytics and the AI Performance Leaderboard.
- Orchestrator-side detail (procurement, ROI, operation) lives in the Orchestrators tab.

### Information to exclude

- Orchestrator procurement (Orchestrators tab).
- Hardware ROI calculations (Orchestrators tab).
- ai-runner internals (Orchestrators tab + `concepts/stack-layers.mdx`).
- Per-GPU FPS benchmarks beyond a link out (lives in NaaP Analytics + Leaderboard).

### Components

- One codec-by-GPU-family table.
- `<Note>` for AV1 fork status.
- `<Card>` row at end linking to NaaP Analytics, Leaderboard, Orchestrators tab.

### Sources to consult

- `persona-routing-and-infra-map.md` Part 2.4 (orchestrator capability layer).
- Existing v2 orchestrator content for verified GPU family list.

---

## 40. `/v2/developers/build/video/codec-support.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a Video Developer the authoritative codec support matrix for the Livepeer network — H.264, H.265, AV1, VP9 — with hardware accelerators per codec, fork status for AV1, and licensing notes.

**Q2 — Featured reader.** A Video Developer picking a codec for their pipeline. They know the licensing landscape (H.264 royalty-free for internet video at certain thresholds, H.265 MPEG-LA, AV1 royalty-free) and want to know which codecs the network can deliver before they commit.

**Q3 — Real alternative.** They stay on H.264-only for safety and lose 30-50% bandwidth efficiency they would have got with H.265 or AV1.

**Q4 — Required belief.** The Livepeer network supports H.264 universally, H.265 via NVENC and Netint, AV1 via prototype fork, and the licensing landscape is documented so I can pick with eyes open.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer picking output codec | "Which codecs are supported?" | Codec matrix with hardware availability | Served here |
| Engineer worried about H.265 licensing | "MPEG-LA pool?" | Yes — note in licensing section | Served here |
| Engineer wanting AV1 | "Production-ready?" | Prototype via ad-astra-video fork; not upstream | Served here |
| Engineer wanting VP9 | "VP9 status?" | Decode for ingest; encode rare | Served here |
| Engineer wanting hardware encoder detail | "Which GPU encodes which codec?" | Cross-reference table | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "The Livepeer codec matrix: H.264, H.265, AV1, VP9. Hardware accelerators, fork status, and licensing notes."
2. **H.264.** Universal support across all NVENC, AMD VAAPI, and Netint hardware. Royalty-free for internet video up to certain thresholds.
3. **H.265 (HEVC).** Hardware-accelerated on Nvidia NVENC (Turing and newer) and Netint MA35D. MPEG-LA patent pool obligations apply at scale.
4. **AV1.** Prototype via the ad-astra-video fork of go-livepeer. Not yet upstream. Hardware encode paths: Nvidia Ada (RTX 40xx) NVENC, Netint MA35D. Royalty-free.
5. **VP9.** Decode supported for ingest; encode rare on the network. No active fork.
6. **Audio codecs.** AAC for HLS; Opus for WebRTC.
7. **Licensing summary table.** Codec / licensing model / production caveat.
8. **Cross-links.** `gpu-transcoding.mdx` for hardware family detail. `ad-astra-video` ecosystem entry in Reference for the AV1 fork.

### Frontmatter

```yaml
---
title: "Codec support"
sidebarTitle: "Codec support"
description: "H.264, H.265, AV1, VP9 across the Livepeer network. Hardware accelerators, fork status, licensing notes."
pageType: "reference"
---
```

### Information to convey

- H.264: universal support, broadly royalty-free for internet video.
- H.265: NVENC + Netint MA35D; MPEG-LA at scale.
- AV1: ad-astra-video prototype fork; not upstream; hardware: Nvidia Ada + Netint MA35D.
- VP9: decode at ingest; encode rare.
- Audio: AAC + Opus.

### Information to exclude

- GPU procurement (Orchestrators tab).
- Per-bitrate quality benchmarks.
- ffmpeg flag specifics.

### Components

- One codec matrix table.
- One licensing summary table.
- `<Note>` for AV1 fork status.

### Sources to consult

- `persona-routing-and-infra-map.md` for verified ad-astra-video fork status.
- Existing v2 transcoding content.

---

## 41. `/v2/developers/build/video/live-events.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a Video Developer the canonical pattern for running a live event on Livepeer — multi-bitrate profiles, DVR window, recording trigger, fallback strategy — so they ship a live event with confidence end-to-end.

**Q2 — Featured reader.** A Video Developer planning a real live event (concert, sports, conference, gaming stream) on Livepeer. They have run live events on other infrastructure before. They want the Livepeer-specific patterns — profile design, recording triggers, fallback gateways — documented in one place.

**Q3 — Real alternative.** They stay on Mux for live events and pay 4x the per-minute cost, or they DIY ffmpeg with their own ingest tier.

**Q4 — Required belief.** Livepeer supports a complete live event lifecycle — multi-bitrate adaptive playback, DVR, recording, fallback — and the patterns are documented enough that I can plan and run one.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer planning a multi-bitrate stream | "Which profiles to encode?" | Recommended profile sets per use case | Served here |
| Engineer wanting DVR | "DVR window support?" | DVR pattern via segment retention | Served here |
| Engineer wanting recording | "Trigger recording on a stream?" | Recording trigger pattern (gateway-dependent) | Served here |
| Engineer worried about reliability | "What if a gateway fails mid-event?" | Fallback gateway pattern | Served here |
| Engineer wanting full Studio path | "Should I use Studio?" | Yes for productised live event ops | Linked → Solutions/Studio |

### Content sequence (L2)

1. **Outcome paragraph.** "Run a live event on Livepeer end-to-end: profile set, DVR window, recording trigger, fallback. Productised path also available via Studio."
2. **Profile design.** Multi-bitrate ABR ladder. Recommended ladders for general streaming (480p/720p/1080p) and high-fidelity (1080p/1440p/4K).
3. **DVR window.** Pattern: segment retention on the gateway. Window length implications for storage cost.
4. **Recording.** Trigger recording via gateway capability; output lands in storage backend (cross-link to `storage-and-archival.mdx`).
5. **Fallback gateway.** Two-gateway hot-standby pattern. Detection and switchover.
6. **Productised alternative.** Studio offers managed live event tooling (recording, multistream, replay) — link to Solutions/Studio for that path.
7. **Cross-links.** `ingest-and-playback.mdx` for the transport layer, `storage-and-archival.mdx` for recording outputs, `vod-workflows.mdx` for post-event lifecycle.

### Frontmatter

```yaml
---
title: "Live events"
sidebarTitle: "Live events"
description: "Run a live event on Livepeer: profile sets, DVR window, recording triggers, fallback gateways. Patterns for end-to-end production."
pageType: "how-to"
---
```

### Information to convey

- Live event lifecycle: ABR ladder design, DVR, recording, fallback.
- Recommended profile ladders.
- DVR via segment retention; storage cost implications.
- Recording trigger via gateway capability.
- Two-gateway fallback pattern.
- Studio is the productised alternative for managed live events.

### Information to exclude

- Studio dashboard walkthroughs (Solutions/Studio).
- Multistream specifics (Solutions/Studio).
- Player UI for live events (lives in `frontend-react-player.mdx`).
- Recording playback (lives in `vod-workflows.mdx`).

### Components

- ABR ladder table.
- One Mermaid diagram showing live event flow.
- `<Card>` link to Solutions/Studio for productised path.

### Sources to consult

- Existing v2 video content (Studio-bound live event pages — extract gateway-agnostic patterns).
- `persona-routing-and-infra-map.md` Part 2.4.

---

## 42. `/v2/developers/build/video/vod-workflows.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a Video Developer the canonical VOD lifecycle on Livepeer — upload, transcode, generate playback URL — using gateway-agnostic tooling so they are not locked into Studio's Asset API.

**Q2 — Featured reader.** A Video Developer building a VOD product (course platform, content library, archive). They have shipped VOD before and want to know whether Livepeer's gateway-agnostic surface gives them what they need without committing to Studio.

**Q3 — Real alternative.** They use Studio's Asset API directly (productised path), or they roll their own VOD pipeline on hyperscaler infrastructure.

**Q4 — Required belief.** A gateway-agnostic VOD lifecycle exists on Livepeer — upload, transcode, playback — and I can ship without committing to Studio's productised Asset API.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer building a VOD library | "End-to-end lifecycle?" | Upload → transcode → playback flow | Served here |
| Engineer wanting Studio Asset API | "Is Studio the only path?" | No — gateway-agnostic patterns documented | Served here |
| Engineer with own storage backend | "Can I use S3 or my own?" | Yes — covered in `storage-and-archival.mdx` | Linked |
| Engineer wanting recordings as VOD | "From a live event?" | Yes — recording → VOD bridge | Served here |
| Engineer wanting Studio productised path | "Should I just use Studio?" | Decision criteria + link to Solutions/Studio | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "The VOD lifecycle on Livepeer: upload, transcode, playback. Gateway-agnostic patterns and the Studio productised alternative."
2. **Upload.** Direct upload to a gateway with a transcode job. Or upload to your storage and submit a transcode-by-URL job.
3. **Transcode.** Submit job to gateway. ABR ladder generation. HLS manifest output.
4. **Playback.** Playback URL pattern for VOD HLS. Cross-link to `frontend-react-player.mdx`.
5. **Recording-to-VOD bridge.** Live event recordings become VOD assets. Pattern.
6. **Studio productised path.** When to use Studio Asset API instead. Decision criteria.
7. **Cross-links.** `transcoding-quickstart.mdx`, `storage-and-archival.mdx`, `live-events.mdx`, Solutions/Studio.

### Frontmatter

```yaml
---
title: "VOD workflows"
sidebarTitle: "VOD workflows"
description: "Upload, transcode, generate playback. Gateway-agnostic VOD lifecycle on Livepeer, with the Studio productised alternative documented."
pageType: "how-to"
---
```

### Information to convey

- VOD lifecycle: upload → transcode → playback.
- Gateway-agnostic patterns (not Studio-bound).
- Recording-to-VOD bridge pattern from live events.
- Studio Asset API is the productised alternative; decision criteria included.

### Information to exclude

- Studio Asset API specifics (Solutions/Studio).
- Storage backend configuration (lives in `storage-and-archival.mdx`).
- Live event lifecycle (lives in `live-events.mdx`).
- Player embedding (lives in `frontend-react-player.mdx`).

### Components

- One Mermaid diagram showing VOD lifecycle.
- Decision matrix table for gateway-agnostic vs Studio Asset API.

### Sources to consult

- Existing Studio Asset API pages (extract gateway-agnostic patterns; route Studio-specific to Solutions).
- `persona-routing-and-infra-map.md` Part 2.4.

---

## 43. `/v2/developers/build/video/storage-and-archival.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page tells a Video Developer where transcoded segments and recordings can land — S3, GCS, local disk, IPFS — and the canonical archival patterns for production.

**Q2 — Featured reader.** A Video Developer who has a working transcode or recording flow and now needs to decide where outputs go for production. They have used S3 before. They want to know whether IPFS or Filecoin is realistic for their use case.

**Q3 — Real alternative.** They land everything in S3 with a 30-day lifecycle policy and never explore decentralised storage.

**Q4 — Required belief.** Livepeer outputs to standard cloud storage backends via catalyst-uploader, and IPFS pinning is an application-layer concern with multiple production-ready services.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Engineer wanting S3 / GCS | "Backend support?" | catalyst-uploader supports both | Served here |
| Engineer wanting IPFS | "Pinning service?" | Storacha, Lighthouse, Pinata — application-layer | Served here |
| Engineer wanting Filecoin | "Production status?" | Filecoin via app-layer pinning; Estuary shut down | Served here |
| Engineer wanting retention policy | "Lifecycle rules?" | Standard S3 lifecycle; document patterns | Served here |
| Engineer with own storage | "Custom backend?" | catalyst-uploader is extensible | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Where transcoded segments and recordings land: S3, GCS, local disk, IPFS. catalyst-uploader is the standard component; IPFS pinning is application-layer."
2. **catalyst-uploader.** The component that uploads segments to a backend. Supports S3, GCS, local disk. Extensible for custom backends.
3. **S3 / GCS patterns.** Configuration. Lifecycle rules. Cost shape.
4. **IPFS pinning.** Application-layer pattern: pin segments to IPFS via Storacha (successor to web3.storage), Lighthouse, Pinata. catalyst-uploader does not pin to IPFS directly.
5. **Filecoin archival.** Application-layer via IPFS pinning + Filecoin Plus deal-making. Estuary shut down in 2023; current path is via Storacha or Lighthouse with Filecoin backing.
6. **Retention strategy.** S3 lifecycle (Standard → Infrequent Access → Glacier). IPFS pinning service retention.
7. **Cross-links.** `vod-workflows.mdx`, `live-events.mdx`, Reference / SDKs.

### Frontmatter

```yaml
---
title: "Storage and archival"
sidebarTitle: "Storage & archival"
description: "Where Livepeer outputs land: S3, GCS, local disk via catalyst-uploader. IPFS and Filecoin via application-layer pinning."
pageType: "how-to"
---
```

### Information to convey

- catalyst-uploader is the standard upload component.
- Supports S3, GCS, local disk.
- IPFS pinning is application-layer, not built into catalyst-uploader.
- Production-ready IPFS services: Storacha, Lighthouse, Pinata.
- Filecoin archival via app-layer (Estuary is dead; verified).
- Retention strategies depend on backend.

### Information to exclude

- Studio Asset API archival (Solutions/Studio).
- Catalyst stack architecture (one paragraph in `lpms-integration.mdx`).
- Per-region storage cost analysis.

### Components

- One backend matrix table.
- `<Note>` for the Estuary shutdown.

### Sources to consult

- `livepeer/catalyst-uploader` README.
- `persona-routing-and-infra-map.md` Verification log (Catalyst as Solutions concern).

---

## 44. `/v2/developers/build/video/lpms-integration.mdx` — RETAINED rename, lightly rewritten

### Lighter format

**Audience.** Persona 3 — Video Developer or Persona 6 — Protocol Extender wanting to build on or extend the Livepeer Media Server (lpms) library.

**Journey position.** From `gpu-transcoding.mdx` or `concepts/stack-layers.mdx`; out to lpms repo and Reference / Protocol.

**Activation moment.** Reader knows what lpms is, how it relates to go-livepeer, that it is a sibling to Catalyst (not a parent), and where to go for the integration source.

**Frontmatter.**

```yaml
---
title: "lpms integration"
sidebarTitle: "lpms"
description: "Livepeer Media Server (lpms) is the Go library imported by go-livepeer for ingest and transcoding. Sibling to Catalyst; not the parent."
pageType: "reference"
---
```

**Information to convey.**

- lpms is the Livepeer Media Server, a Go library (`livepeer/lpms`).
- go-livepeer imports lpms (verified from `go-livepeer/go.mod`, pinned to March 2026 commit).
- lpms is a sibling to Catalyst, not a parent or child.
- Catalyst is a separate product that powers Studio and is consumed by Streamplace; verified that go-livepeer does not import catalyst.
- lpms responsibilities: ingest, transcoding, segmenting.
- Catalyst responsibilities: clustered media server for productised live streaming.
- Cross-link to `livepeer/lpms` repo for source.
- Cross-link to Solutions/Studio for Catalyst-bound patterns.
- One paragraph acknowledging Catalyst exists, what it is, and where to read more (Solutions/Studio).

**Information to exclude.**

- Catalyst architecture depth (Solutions/Studio).
- ai-runner internals (Orchestrators tab + `concepts/stack-layers.mdx`).
- Specific transcoding profile design (`transcoding-quickstart.mdx`).
- go-livepeer build instructions (Protocol Extenders / About).

**Sources to consult.**

- `livepeer/lpms` README.
- `go-livepeer/go.mod` (verified import pattern).
- `persona-routing-and-infra-map.md` Verification log Item 7 (lpms vs Catalyst sibling relationship).
- Existing v2 lpms reference content if any.

---

## End of Batch 5

Seven pages briefed. Build / Video is fully scoped:
- **NEW (5)**: ingest-and-playback, gpu-transcoding, codec-support, live-events, vod-workflows, storage-and-archival
- **Retained-rename (1)**: lpms-integration

(Note: I had said NEW 5 + Retained 2 in the prior summary but live-events, vod-workflows, and storage-and-archival are all NEW in v3 even though some content concepts existed in v2 in different form. The accurate count is NEW 6 + Retained 1.)

Pages remaining: 25.

Next batch (6): Build / Agents — 5 pages. All NEW. Full template.
