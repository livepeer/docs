# Content briefs — Batch 3: Build / Application

Fourteen pages. Mix of NEW (5), Rewrite (3), and Retained-rename (6). Tiered
template: full L0/L1/L2 for NEW and significant rewrites; lighter format for
retained pages where v2 content exists.

Build / Application serves Persona 5 (Application Developer) primarily, with
graduation paths from Persona 5 to Persona 1 (Solutions Integrator at scale) and
to Gateways tab. The track is the highest-volume Developers track by reader count.

Source authority: `developers-ia-locked.md`, `persona-routing-and-infra-map.md`.

---

## 12. `/v2/developers/build/application/ai-quickstart.mdx` — RETAINED rename (from `get-started/`)

### Lighter format

**Audience.** Persona 5 — App Dev who has finished `get-started/application-developer.mdx` and wants the deeper SDK flow.

**Journey position.** From `get-started/application-developer.mdx`; out to `ai-pipelines.mdx`, `choose-a-gateway.mdx`, `production-checklist.mdx`.

**Activation moment.** Reader has all three SDK shapes (TypeScript, Python, Go) understood, has called at least three different endpoints, and has error handling and retry wired in.

**Frontmatter.**

```yaml
---
title: "AI Gateway SDK quickstart"
sidebarTitle: "AI quickstart"
description: "Install the AI Gateway SDK in TypeScript, Python, or Go. Authenticate against any gateway. Run text-to-image, image-to-video, and audio-to-text calls with retry and error handling."
pageType: "tutorial"
---
```

**Information to convey.**

- All three SDK languages: `@livepeer/ai`, `livepeer-ai-python`, `livepeer-ai-go`. All Speakeasy-generated from the AI Runner OpenAPI spec.
- Constructor pattern: `new Livepeer({ httpBearer, baseURL })` with `baseURL` selecting the gateway.
- Three example endpoints: `text-to-image`, `image-to-video`, `audio-to-text`.
- Error handling: retry on 429 and 5xx, surface model errors distinctly.
- README stability caveat: alpha-pinned versions.
- Out-link to model catalogue (`ai-pipelines.mdx`).

**Information to exclude.**

- BYOC and ComfyStream (lives in AI Developer track).
- Studio API SDK (different SDK; Solutions/Studio).
- Realtime LV2V (lives in `build/ai/python-gateway-client.mdx`).
- Gateway operations (lives in Gateways tab).

**Sources to consult.**

- Existing `get-started/ai-quickstart.mdx`.
- `livepeer/livepeer-ai-js`, `livepeer-ai-python`, `livepeer-ai-go` READMEs.
- `persona-routing-and-infra-map.md` Part 2.2 (SDK inventory).

---

## 13. `/v2/developers/build/application/transcoding-quickstart.mdx` — RETAINED rename (from `get-started/`)

### Lighter format

**Audience.** Persona 5 — App Dev who chose the video track from `get-started/video-developer.mdx`.

**Journey position.** From `video-developer.mdx`; out to `frontend-react-player.mdx`, `build/video/ingest-and-playback.mdx`, `build/video/codec-support.mdx`.

**Activation moment.** Reader has submitted a transcoding job to a gateway and has the resulting HLS manifest URL playing back in a browser.

**Frontmatter.**

```yaml
---
title: "Transcoding quickstart"
sidebarTitle: "Transcoding quickstart"
description: "Submit a transcoding job to the Livepeer network in 10 minutes against a self-hosted or community gateway."
pageType: "tutorial"
---
```

**Information to convey.**

- Minimal job submission via `livepeer-ai-go`, the AI Gateway HTTP API directly, or `@livepeer/ai`.
- Expected output: HLS manifest, segment URLs.
- Failure modes: orchestrator unavailability, codec mismatch.
- Cross-link to `frontend-react-player.mdx` for embedding playback.

**Information to exclude.**

- Codec selection deep-dive (lives in `build/video/codec-support.mdx`).
- Live ingest (lives in `build/video/ingest-and-playback.mdx`).
- VOD lifecycle (lives in `build/video/vod-workflows.mdx`).

**Sources to consult.**

- Existing `get-started/transcoding-quickstart.mdx`.
- `gateways/guides/tutorials/byoc-cpu-tutorial.mdx` for the off-chain test pattern.

---

## 14. `/v2/developers/build/application/choose-a-gateway.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an Application Developer a decision matrix across the five real gateway options (Studio, Daydream, Cloud Community Gateway, GWID, self-hosted go-livepeer) and routes them to the right setup page based on their answer.

**Q2 — Featured reader.** A developer who has shipped one or two AI Gateway calls against the Cloud Community Gateway (the default in the App Dev quickstart) and now needs to pick a production gateway. They have a project with monthly traffic estimates, a budget, and an SLA requirement.

**Q3 — Real alternative.** They keep using the free Cloud Community Gateway in production until it breaks under load, then panic-migrate to Studio.

**Q4 — Required belief.** Five real options exist, each with documented trade-offs, and the right one for my project is identifiable from one decision matrix.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Indie dev with low traffic | "Can I stay on the free Cloud Community Gateway?" | Yes for low traffic; criteria for graduation | Served here |
| Startup with growing AI bill | "Studio or self-hosted?" | Decision matrix with break-even cost analysis | Served here |
| Enterprise with SLA requirement | "Which gateway has SLAs?" | Studio (paid) and GWID (managed); link out for both | Served here + linked |
| Dev who wants control over orchestrator selection | "Self-hosted is the only path?" | Yes — link to `should-i-run-a-gateway.mdx` | Served here + linked |
| Dev with crypto-native architecture | "Can I run off-chain?" | Yes — Cloud Community Gateway and self-hosted off-chain | Served here |

### Content sequence (L2)

1. **Outcome paragraph.** "Five gateway options. Pick one based on your traffic, budget, SLA needs, and how much control you want."
2. **Decision matrix table.** Five rows, six columns. Rows: Studio, Daydream, Cloud Community Gateway, GWID, self-hosted. Columns: pricing model, supported workloads (AI / video / both), SLA, control over routing, ETH custody required, link to setup.
3. **Featured path: Cloud Community Gateway.** Free, public, off-chain, no API key for basic models. Production-grade for low to medium traffic. Falls down at high traffic or when SLA is required.
4. **Studio.** Per-minute paid pricing, full SLA, includes recording and VOD lifecycle. Documented in Solutions/Studio.
5. **Daydream.** Real-time AI video product. Embedded gateway. Useful when the project shape matches Daydream's primitives. Documented in Solutions/Daydream.
6. **GWID.** SPE-funded managed gateway with one-click deployment. SLA-backed. Trade-off: less config control. Status notes: SPE Phase 1 approved (verified from `gateways/guides/deployment-details/setup-options.mdx`).
7. **Self-hosted go-livepeer.** Full control. Required for custom routing, custom pricing, embedded gateway architecture. Decision page: `should-i-run-a-gateway.mdx`.
8. **Decision flow.** A small decision tree: traffic > X / month → Studio or self-hosted; SLA required → Studio or GWID; need orchestrator control → self-hosted; everything else → stay on Cloud Community Gateway.
9. **Next page link.** Link to the chosen gateway's setup page.

### Frontmatter

```yaml
---
title: "Choose a gateway"
sidebarTitle: "Choose a gateway"
description: "Studio, Daydream, Cloud Community Gateway, GWID, or self-hosted go-livepeer. A decision matrix for picking your production gateway."
pageType: "concept"
---
```

### Information to convey

- Five real gateway options with verified status:
  - Studio (livepeer.studio): per-minute pricing, full SLA, includes Studio's productised features.
  - Daydream: real-time AI video product with embedded gateway.
  - Cloud Community Gateway (gateway.livepeer.cloud): free, public, off-chain, SPE-funded.
  - GWID: SPE-funded managed platform, single-click deployment, Phase 1 approved.
  - Self-hosted go-livepeer: full control, requires Linux for AI workloads.
- Traffic and SLA-driven decision matrix.
- Off-chain vs on-chain operational mode (verified detail from existing v2 gateways docs).
- "You do not need a GPU to run a gateway" — common misconception correction (verified from `gateways/guides/deployment-details/setup-options.mdx`).

### Information to exclude

- Detailed gateway operations (lives in Gateways tab).
- Studio Asset API and Studio webhooks (Solutions/Studio).
- BYOC submission detail (lives in `build/ai/`).
- Cost-per-orchestrator economics (lives in Orchestrators tab).

### Components

- One large Mintlify table for the decision matrix.
- One Mermaid flowchart for the decision tree.
- `<Note>` for the "you don't need a GPU" misconception.
- `<Card>` for each gateway link-out at the end.

### Sources to consult

- `/v2/gateways/guides/deployment-details/setup-options.mdx` (verified gateway list and decision criteria — already in docs filesystem).
- `/v2/gateways/guides/operator-considerations/production-gateways.mdx` (verified GWID and Cloud Community Gateway status).
- `persona-routing-and-infra-map.md` Part 2.3 (gateway layer).

---

## 15. `/v2/developers/build/application/should-i-run-a-gateway.mdx` — NEW (decision page, supersedes `concepts/running-a-gateway.mdx`)

### Gate L0

**Q1 — Outcome.** This page gives an App Dev a decision answer to "should I run my own gateway?" based on traffic, control needs, and team capacity, and routes them either to `local-gateway.mdx` (light embedded) or to the Gateways tab (production-scale ops).

**Q2 — Featured reader.** An App Dev with a working app on the Cloud Community Gateway or Studio. They are hitting one of three triggers: monthly cost, need for orchestrator selection control, or need for self-managed identity. They have not yet committed to running infrastructure.

**Q3 — Real alternative.** They double their hosted-gateway spend and stay on the productised path because the operational lift looks too high.

**Q4 — Required belief.** Three concrete graduation triggers exist, and if my project hits one of them, running a gateway pays back the operational cost.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Indie dev under traffic threshold | "Should I run a gateway yet?" | No — stay on Cloud Community Gateway, criteria for next | Served here |
| Startup at the cost-graduation threshold | "Will self-hosting save us money?" | Break-even calculation framework | Served here |
| Dev needing orchestrator control | "Can a hosted gateway give me this?" | No — self-hosted required | Served here |
| Dev needing to embed gateway logic in their app | "Light embedded or full operator?" | Light → `local-gateway.mdx`; full → Gateways tab | Served here + linked |
| Production team at scale | "How do I run a gateway in prod?" | Link to Gateways tab | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Three signals say it's time to run your own gateway: cost, control, or custody. If you hit one, this page tells you which path to take."
2. **The three signals.**
   - **Cost.** Monthly hosted-gateway spend exceeds the operational cost of a self-hosted gateway (compute + on-call + ETH deposits). Concrete threshold: roughly $X / month is the typical break-even on a single Linux VM.
   - **Control.** You need to pick orchestrators by region, tier, or capability. Hosted gateways do not expose this. The `-orchAddr` and `-maxPricePerCapability` flags do.
   - **Custody.** You have to keep ETH signing in your own infrastructure for compliance, multi-tenant billing, or a remote-signer architecture.
3. **The decision matrix.** Two columns (yes / no for each signal) routing to four outcomes:
   - All no → stay on hosted (Cloud Community Gateway, Studio, or GWID).
   - One yes (control or custody) → light embedded gateway → `local-gateway.mdx`.
   - Cost yes alone → hosted gateway with cost optimisation first; consider Studio business tiers; revisit as scale grows.
   - Multiple yeses → full production gateway operation → Gateways tab.
4. **Cost break-even framework.** A small calculator-style table: hosted cost per million calls vs self-hosted compute + RPC + ETH deposit cost.
5. **Light vs full ops distinction.** Light embedded means one gateway alongside one app, single-machine, off-chain or on-chain with minimal monitoring. Full ops means HA, multi-region, custody, observability, on-call. The Developers tab covers light. Gateways tab covers full.
6. **Next page link.** Light path → `local-gateway.mdx`. Full path → Gateways tab landing page.

### Frontmatter

```yaml
---
title: "Should I run a gateway?"
sidebarTitle: "Run a gateway?"
description: "A decision page. Three signals tell you whether to graduate from a hosted gateway: cost, control, or custody. Pick the right path."
pageType: "concept"
---
```

### Information to convey

- Three graduation signals: cost, control, custody.
- Break-even framework for cost-driven graduation.
- Light embedded gateway vs full ops distinction.
- Hosted gateways do not expose `-orchAddr` or `-maxPricePerCapability`.
- Off-chain mode means no ETH custody required (community remote signer at `signer.eliteencoder.net` is the verified free service).
- Routing: one signal → light embedded; multiple signals → full ops on Gateways tab.

### Information to exclude

- Gateway installation steps (lives in `local-gateway.mdx` or Gateways tab).
- Production-grade ops detail: Kubernetes, multi-region, HA (Gateways tab).
- ETH deposit mechanics (lives in Gateways tab + Reference).
- Specific orchestrator selection patterns (lives in Gateways tab).

### Components

- Decision matrix table.
- One Mermaid flowchart.
- `<Note>` for the community remote signer mention.
- `<Card>` for the two next-step links (light, full).

### Sources to consult

- Existing `concepts/running-a-gateway.mdx` — verified to be working as a decision page; preserve the structure that works, update the routing destinations.
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified break-even framing, "embed gateway functionality in your product" pattern).

---

## 16. `/v2/developers/build/application/local-gateway.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives an App Dev a working light-embedded go-livepeer gateway alongside their app in Docker Compose, off-chain, in under 30 minutes.

**Q2 — Featured reader.** An App Dev who arrived from `should-i-run-a-gateway.mdx` having identified one graduation signal (control or custody, typically). They are not running production-grade gateway ops; they are running one gateway alongside one app on one machine. They are comfortable with Docker Compose.

**Q3 — Real alternative.** They commit to full Gateways-tab production ops too early and burn weeks on Kubernetes plumbing they do not need.

**Q4 — Required belief.** A single docker-compose file, one go-livepeer image, one orchestrator address, and one community remote signer URL gets me a working off-chain gateway in 30 minutes.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev with Docker Compose familiarity | "Give me the compose file" | Working compose with all flags | Served here |
| Dev who wants on-chain mode | "Can I do on-chain here, light?" | Off-chain is the recommended light path; on-chain → Gateways | Served here + linked |
| Dev wanting to embed gateway in app process | "Same container as my app?" | Sidecar pattern with go-livepeer + app in one compose | Served here |
| Dev wanting production HA | "How do I scale this?" | Out of scope — link to Gateways tab | Linked |
| Dev integrating Python or browser gateway client | "Where's that?" | Link to Gateways tab SDK / Custom path | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "One docker-compose file, off-chain, free community signer, one orchestrator. 30 minutes from clone to first call."
2. **Featured path: off-chain with community remote signer.** Why off-chain: no ETH required, no Arbitrum RPC, fastest setup, fully suitable for AI workloads.
3. **The compose file.** Single `docker-compose.yml`. go-livepeer image, gateway mode, off-chain network, `-remoteSignerAddr signer.eliteencoder.net`, `-orchAddr` pointing at a known orchestrator (or list), the gateway HTTP port, and the CLI port.
4. **Verify it works.** Two curl commands: one to confirm gateway HTTP responds, one to confirm orchestrator reachability.
5. **First call from your app.** Code example: SDK pointing at `http://localhost:8937` with a test request.
6. **Common pitfalls.** TOFU first-connection trust, orchestrator selection, port binding inside Docker network, gateway log lines that confirm tickets are flowing.
7. **Next steps.** On-chain graduation, monitoring (`prometheus-scrape.mdx`), settlement reconciliation (`settlement-observability.mdx`), production ops (Gateways tab).

### Frontmatter

```yaml
---
title: "Light embedded gateway"
sidebarTitle: "Local gateway"
description: "Run a single go-livepeer gateway alongside your app in Docker Compose. Off-chain, free community signer, 30 minutes from clone to first call."
pageType: "tutorial"
---
```

### Information to convey

- Docker Compose-based light-ops pattern.
- Off-chain mode is recommended for light embedded gateways.
- Community remote signer at `signer.eliteencoder.net` (free, verified in `gateways/guides/tutorials/byoc-cpu-tutorial.mdx`).
- Required flags: `-gateway`, `-network offchain`, `-remoteSignerAddr`, `-orchAddr`, `-cliAddr`, `-httpAddr`, `-datadir`.
- Note on log lines confirming successful start.
- TOFU (trust-on-first-use) caveat for the community signer.
- Common port: 8937 for gateway HTTP, distinct CLI port required.

### Information to exclude

- HA, multi-region, Kubernetes, ingress controllers (Gateways tab).
- Multi-tenant API key management (lives in NaaP / Gateways tab).
- Orchestrator selection at scale (Gateways tab).
- ETH on-chain deposits (linked to Gateways tab).

### Components

- Code block for the docker-compose.yml.
- `<Steps>` for the verify-it-works flow.
- `<Note>` for the TOFU community-signer caveat.
- `<Card>` for the four next-step links.

### Sources to consult

- `/v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx` (verified docker-compose + off-chain + community signer pattern).
- `persona-routing-and-infra-map.md` Part 2.4 (protocol and node runtime).

---

## 17. `/v2/developers/build/application/workload-fit.mdx` — RETAINED rename (from `build/`)

### Lighter format

**Audience.** Persona 5 — App Dev evaluating which Livepeer workloads suit their use case.

**Journey position.** From `choose-a-gateway.mdx` or directly from Get Started; out to specific workload pages.

**Activation moment.** Reader knows which Livepeer workloads (batch AI, realtime LV2V, video transcoding, BYOC) match their use case and can rule out the ones that do not.

**Frontmatter.**

```yaml
---
title: "Workload fit"
sidebarTitle: "Workload fit"
description: "Decide which Livepeer workloads suit your use case: batch AI, realtime LV2V, video transcoding, or BYOC."
pageType: "concept"
---
```

**Information to convey.**

- Four workload classes: batch AI (text-to-image, audio-to-text, etc.), realtime LV2V (live-video-to-video), video transcoding (RTMP-to-HLS), BYOC (custom container).
- Latency, throughput, cost shape per workload.
- Common application patterns: chat with image gen → batch AI; streaming AR effects → realtime LV2V; live event production → transcoding; custom model serving → BYOC.

**Information to exclude.**

- Pipeline catalogue (lives in `build/ai/ai-pipelines.mdx`).
- Codec specifics (lives in `build/video/codec-support.mdx`).
- BYOC engineering spec (lives in `build/ai/byoc.mdx`).

**Sources to consult.**

- Existing `build/workload-fit.mdx` — keep structure; update references.
- `persona-routing-and-infra-map.md` Part 2.5 (AI runtime pipelines).

---

## 18. `/v2/developers/build/application/sdk-gateway.mdx` — RETAINED rename (from `build/`)

### Lighter format

**Audience.** Persona 5 — App Dev configuring an SDK against a chosen gateway.

**Journey position.** From `choose-a-gateway.mdx`; out to `ai-quickstart.mdx`, `frontend-react-player.mdx`, `local-gateway.mdx`.

**Activation moment.** Reader has the right SDK installed, the right `baseURL` set, the right auth header, and a passing first request against their chosen gateway.

**Frontmatter.**

```yaml
---
title: "SDK + gateway configuration"
sidebarTitle: "SDK + gateway"
description: "Configure @livepeer/ai, livepeer-ai-python, or livepeer-ai-go against any Livepeer gateway. Auth, base URL, retry."
pageType: "how-to"
---
```

**Information to convey.**

- All three AI Gateway SDKs are gateway-agnostic.
- Common configuration: `httpBearer` token, `baseURL` per gateway.
- Cloud Community Gateway: no auth required for free tier.
- Studio: auth via Studio API key.
- GWID: auth per the GWID provisioning.
- Self-hosted: auth depends on the gateway's middleware (often none in light embedded mode).
- Java, Ruby, PHP SDKs exist for the Studio API (Speakeasy-generated) — not the AI Gateway specifically.

**Information to exclude.**

- Gateway operations (lives in Gateways tab).
- Studio Asset API patterns (Solutions/Studio).
- Multi-tenant API key management (NaaP / Gateways tab).

**Sources to consult.**

- Existing `build/sdk-gateway.mdx`.
- `persona-routing-and-infra-map.md` Verification log Item 2 (`livepeer.js` and `ui-kit` are the same repo).
- `persona-routing-and-infra-map.md` Verification log Item 6 (`room` namespace deprecated).

---

## 19. `/v2/developers/build/application/frontend-react-player.mdx` — REWRITE

### Gate L0

**Q1 — Outcome.** This page gives a frontend developer a working `@livepeer/react` Player rendering an HLS or WebRTC stream from any Livepeer gateway in 10 minutes.

**Q2 — Featured reader.** A React or Next.js developer building a video viewing surface in their app. They have shipped React UI before. They want a player primitive that handles HLS, WebRTC fallback, and metrics, without locking them into Studio.

**Q3 — Real alternative.** They drop in `hls.js` or `video.js` directly and write their own WebRTC fallback layer.

**Q4 — Required belief.** `@livepeer/react` is gateway-agnostic; I can paste the source URL from any gateway and it will play without Studio-specific code.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Next.js dev wanting basic playback | "What's the install + first render?" | npm install + `<Player>` example | Served here |
| Dev wanting WebRTC low-latency playback | "How do I get sub-second latency?" | WebRTC source pattern | Served here |
| Dev with Studio playback URL | "Can I keep using my Studio URL?" | Yes — `getSrc()` helper or direct URL | Served here |
| Dev wanting custom controls | "How do I customise the controls?" | Composition with `Player.Controls`, `Player.Video`, etc. | Served here |
| Dev wanting React Native | "Is there a Player for React Native?" | `@livepeer/react-native` is deprecated; use `react-native-video` + WebRTC | Served here — note |

### Content sequence (L2)

1. **Outcome paragraph.** "Install `@livepeer/react`, paste an HLS or WebRTC URL, get a working player with low-latency fallback, captions, and metrics in 10 minutes."
2. **Install.** `npm install @livepeer/react`. The package is gateway-agnostic.
3. **Minimal example.** `<Player.Root src={[{src: hlsUrl, mime: "application/vnd.apple.mpegurl"}]}>`. Five-line component.
4. **WebRTC pattern.** Same `Player.Root` with a WebRTC source for low-latency. Mintlify Tabs across HLS and WebRTC.
5. **Studio convenience.** `getSrc(...)` from `@livepeer/react/external` for Studio playback responses. Optional.
6. **Composition for custom controls.** `Player.Container`, `Player.Video`, `Player.Controls`, `Player.PlayPauseTrigger`, etc. One example with custom controls.
7. **React Native note.** `@livepeer/react-native` is deprecated. Use `react-native-video` + `react-native-webrtc`.
8. **Next page link.** `frontend-react-broadcast.mdx` if they also need ingest, or `frontend-core-web.mdx` for non-React frameworks.

### Frontmatter

```yaml
---
title: "React Player"
sidebarTitle: "React Player"
description: "Embed @livepeer/react Player against any HLS or WebRTC source. Low-latency fallback, captions, metrics, and full composition for custom controls."
pageType: "how-to"
---
```

### Information to convey

- `@livepeer/react` v4.3.6, last published ~5 months ago (verified in `persona-routing-and-infra-map.md`).
- Gateway-agnostic: `Player.Root` accepts a `src` array of `{src, mime}` objects.
- HLS via `application/vnd.apple.mpegurl`; WebRTC via the WHEP source mime.
- Studio's `getSrc(playbackInfo)` helper for convenience, not a requirement.
- Composition via `Player.*` subcomponents.
- `@livepeer/react-native` (separate package) is deprecated.
- `livepeer.js` and `livepeer/ui-kit` are the same repo.

### Information to exclude

- Broadcast / ingest (lives in `frontend-react-broadcast.mdx`).
- Non-React framework wiring (lives in `frontend-core-web.mdx`).
- Studio Asset API (Solutions/Studio).
- Player metrics aggregation (lives in `prometheus-scrape.mdx` or Gateways tab).

### Components

- `<Tabs>` for HLS vs WebRTC source examples.
- Code blocks for install + minimal + composition.
- `<Note>` for React Native deprecation.

### Sources to consult

- Existing player documentation in v2 (location varies).
- `livepeer/ui-kit` README and changelog.
- `persona-routing-and-infra-map.md` Verification log Item 2.

---

## 20. `/v2/developers/build/application/frontend-react-broadcast.mdx` — REWRITE

### Gate L0

**Q1 — Outcome.** This page gives a frontend developer a working `@livepeer/react` Broadcast component capturing camera and microphone, sending to any RTMP or WebRTC ingest URL, in 10 minutes.

**Q2 — Featured reader.** A React or Next.js developer building a streaming surface (camera capture, screen share, multi-source production). They are pointing at Studio, Cloud Community Gateway, or a self-hosted ingest endpoint. They want WebRTC ingest support without writing the SDP layer themselves.

**Q3 — Real alternative.** They wire up `getUserMedia` and `RTCPeerConnection` manually, or pull in a paid SDK like Daily or LiveKit.

**Q4 — Required belief.** `@livepeer/react` Broadcast accepts any RTMP or WebRTC ingest URL and handles SDP negotiation, error recovery, and the basic UI controls.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Next.js dev wanting browser ingest | "How do I capture and send?" | `<Broadcast.Root>` with WebRTC ingest URL | Served here |
| Dev with RTMP ingest URL | "Can I ingest RTMP from browser?" | Browser ingest is WebRTC; RTMP requires server-side encoder | Served here — note |
| Dev wanting screen share | "Screen share path?" | `getDisplayMedia` integration with Broadcast.Root | Served here |
| Dev with Studio ingest URL | "Can I keep using my Studio URL?" | Yes — `getIngest()` helper or direct URL | Served here |
| Dev wanting React Native broadcast | "RN path?" | `@livepeer/react-native` deprecated; use `react-native-webrtc` | Served here — note |

### Content sequence (L2)

1. **Outcome paragraph.** "Install `@livepeer/react`, paste a WebRTC ingest URL, get a working camera + mic broadcast with SDP negotiation, error recovery, and basic controls in 10 minutes."
2. **Install.** Same as Player; one package covers both.
3. **Minimal example.** `<Broadcast.Root ingestUrl={whipUrl}>` with composition.
4. **Composition.** `Broadcast.Container`, `Broadcast.Video`, `Broadcast.Controls`, `Broadcast.EnabledIndicator`, `Broadcast.StatusIndicator`.
5. **Screen share.** Pattern using `getDisplayMedia` with the Broadcast component.
6. **Studio convenience.** `getIngest(streamKey)` helper.
7. **RTMP-from-browser caveat.** Browser ingest is WebRTC, not RTMP. Server-side encoders (OBS, ffmpeg) handle RTMP.
8. **React Native note.** Deprecated; alternative path documented.
9. **Next page link.** `frontend-react-player.mdx` for playback or `build/video/ingest-and-playback.mdx` for the deeper ingest layer.

### Frontmatter

```yaml
---
title: "React Broadcast"
sidebarTitle: "React Broadcast"
description: "Capture camera and microphone in React, broadcast to any WebRTC ingest URL. SDP negotiation, error recovery, and composition for custom controls."
pageType: "how-to"
---
```

### Information to convey

- `<Broadcast.Root ingestUrl={url}>` accepts any WebRTC (WHIP) URL; gateway-agnostic.
- Composition pattern with `Broadcast.*` subcomponents.
- Mar 2025 release added mirrored broadcast and peer connection error callback (`@livepeer/core-web@5.1.0`).
- Studio's `getIngest()` helper is optional.
- Browser-side ingest is WebRTC, not RTMP (RTMP requires server-side encoder).
- `@livepeer/react-native` is deprecated.

### Information to exclude

- Server-side RTMP ingest (lives in `build/video/ingest-and-playback.mdx`).
- WHIP protocol detail (lives in Gateways tab or `build/video/`).
- Studio Multistream / Recording (Solutions/Studio).

### Components

- Code blocks for minimal + composition + screen share.
- `<Note>` for RTMP-from-browser caveat and React Native deprecation.

### Sources to consult

- Existing broadcast documentation in v2.
- `livepeer/ui-kit` README and changelog.

---

## 21. `/v2/developers/build/application/frontend-core-web.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a non-React frontend developer (Svelte, Vue, vanilla JS) the `@livepeer/core-web` API surface — controllers, metrics beacon — and a working playback example in their framework of choice.

**Q2 — Featured reader.** A Svelte or Vue developer (or a vanilla JS developer) who needs Livepeer playback without React. They have shipped non-React frontends before and prefer not to add React just to use a player primitive.

**Q3 — Real alternative.** They wire `hls.js` directly and skip Livepeer's controller layer entirely.

**Q4 — Required belief.** `@livepeer/core-web` exposes the same controllers `@livepeer/react` uses, so I can wire them into any framework with a small bindings layer.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| Svelte dev | "How do I wire `core-web` into a Svelte component?" | Pattern showing `createControllerStore` in Svelte | Served here |
| Vue dev | "Same for Vue?" | Pattern showing `createControllerStore` in Vue 3 composition API | Served here |
| Vanilla JS dev | "No framework — just an HTML5 video element?" | Direct controller usage with `<video>` element | Served here |
| Dev wanting metrics beacon | "Where do I send playback metrics?" | Default beacon endpoint; how to override | Served here |
| Dev considering switching to React | "Is React easier?" | Yes for this use case — link to Player | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "`@livepeer/core-web` is the framework-agnostic core that powers `@livepeer/react`. Wire it into Svelte, Vue, or vanilla JS in 30 minutes."
2. **Install.** `npm install @livepeer/core-web`. v5.1.0, March 2025.
3. **Three controller stores.** `createControllerStore({src, mediaElement})`. The store exposes a media controller, a session token store, and a metrics beacon.
4. **Svelte example.** `onMount`, store subscription, ref to `<video>` element.
5. **Vue example.** `composables/useLivepeer.ts` with `onMounted` and a template ref.
6. **Vanilla JS example.** Direct attach to a `<video>` element.
7. **Metrics beacon.** Default endpoint and override pattern. Note: gateway-agnostic.
8. **Cross-link to React.** If you do not need framework-agnostic depth, `@livepeer/react` is the same primitives wrapped.

### Frontmatter

```yaml
---
title: "core-web — non-React frameworks"
sidebarTitle: "core-web"
description: "Framework-agnostic browser bindings for HLS, WebRTC, and metrics. For Svelte, Vue, vanilla JS, or any non-React frontend."
pageType: "how-to"
---
```

### Information to convey

- `@livepeer/core-web` v5.1.0 is the underlying core for `@livepeer/react`.
- Three primary primitives: media controller (HLS + WebRTC), session token store, metrics beacon.
- `createControllerStore` factory.
- Patterns for Svelte, Vue, vanilla JS.
- Gateway-agnostic.
- Metrics beacon defaults to Livepeer endpoint; can be overridden.

### Information to exclude

- React-specific composition (lives in `frontend-react-player.mdx`).
- Native WebRTC SDP detail.
- Studio playback URL helpers.

### Components

- `<Tabs>` for Svelte / Vue / vanilla JS examples.
- Code blocks per framework.

### Sources to consult

- `@livepeer/core-web` README in `livepeer/ui-kit`.
- `persona-routing-and-infra-map.md` Verification log Item 2.

---

## 22. `/v2/developers/build/application/ai-authentication.mdx` — REWRITE (was `guides/ai/authentication.mdx`)

### Gate L0

**Q1 — Outcome.** This page tells an App Dev exactly how authentication works against each of the five gateways, so they pick the right auth pattern for their gateway choice and wire it correctly.

**Q2 — Featured reader.** An App Dev who has chosen their gateway and is now wiring auth in their backend service. They have used Bearer tokens before. They have not committed to a specific gateway in their code yet.

**Q3 — Real alternative.** They copy a Studio code sample and assume the auth pattern works for the Cloud Community Gateway, then debug 401s for an hour.

**Q4 — Required belief.** Each gateway has a documented auth pattern, and once I see the table, my code can target any of them with a one-line config swap.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev with Studio API key | "How do I auth against Studio?" | `Authorization: Bearer {studio_api_key}` | Served here |
| App Dev pointing at Cloud Community | "What auth?" | None for free tier; rate-limited per IP | Served here |
| App Dev pointing at GWID | "How do I get a GWID key?" | Provisioning steps + Bearer token pattern | Served here |
| App Dev with self-hosted gateway | "What auth pattern?" | Whatever middleware they wrap; gateway has none built-in | Served here |
| App Dev wanting multi-tenant API keys | "How do I issue per-customer keys?" | NaaP pattern + Gateways tab link | Served here + linked |

### Content sequence (L2)

1. **Outcome paragraph.** "Five gateways, five auth patterns. One table tells you what to set per gateway."
2. **Auth-by-gateway table.** Five rows: Studio, Daydream, Cloud Community, GWID, self-hosted. Columns: auth header, where to get the key, rate limit shape, multi-tenant support.
3. **Studio.** API key from Studio dashboard. Bearer header. Per-key rate limits.
4. **Daydream.** Daydream API key. Bearer header. Documented in Solutions/Daydream.
5. **Cloud Community Gateway.** No auth for free tier. Per-IP rate limit.
6. **GWID.** Provisioning per the GWID admin console. Bearer header.
7. **Self-hosted.** No auth in go-livepeer base image. Wrap with auth middleware (NaaP / SIWE / OAuth proxy / API gateway). Verified pattern: NaaP issues JWTs via SIWE.
8. **Common pitfalls.** API key mixing across gateways. Token leakage in logs. CORS for browser-direct calls.
9. **Next page link.** `production-checklist.mdx`.

### Frontmatter

```yaml
---
title: "AI Gateway authentication"
sidebarTitle: "Authentication"
description: "Five gateways, five auth patterns. One table for Studio, Daydream, Cloud Community Gateway, GWID, and self-hosted go-livepeer."
pageType: "how-to"
---
```

### Information to convey

- Auth patterns differ across the five gateways.
- Bearer token is the universal SDK auth shape.
- Cloud Community Gateway has no auth for free tier (rate-limited per IP).
- Self-hosted go-livepeer has no auth built in by design (lives at the application layer).
- NaaP reference implementation issues JWTs via SIWE (Sign-In with Ethereum) — verified pattern from `gateways/guides/operator-considerations/business-case.mdx`.
- Per-tenant API key issuance lives in NaaP / Gateways tab.

### Information to exclude

- Gateway-side auth middleware authoring (lives in Gateways tab).
- SIWE protocol detail (Gateways tab + Reference).
- Studio dashboard walkthrough (Solutions/Studio).
- Custody and signing depth (lives in Gateways tab).

### Components

- One auth-by-gateway table.
- `<Note>` for the no-auth Cloud Community Gateway and the self-hosted-needs-middleware patterns.

### Sources to consult

- Existing `guides/ai/authentication.mdx` (currently Studio-conflated; rewrite gateway-agnostic).
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified NaaP + SIWE pattern).

---

## 23. `/v2/developers/build/application/production-checklist.mdx` — RETAINED rename (from `guides/ai/`)

### Lighter format

**Audience.** Persona 5 — App Dev shipping to production.

**Journey position.** From `ai-authentication.mdx` or `troubleshooting.mdx`; out to `prometheus-scrape.mdx` and `settlement-observability.mdx`.

**Activation moment.** Reader has a checklist they can mark off; their app is ready to ship.

**Frontmatter.**

```yaml
---
title: "Production checklist"
sidebarTitle: "Production checklist"
description: "Pre-flight checklist for shipping a Livepeer-backed app: auth, rate limits, retries, observability, fallback, ETH custody."
pageType: "how-to"
---
```

**Information to convey.**

- Pre-flight checklist: auth + retry config + rate limit handling + circuit breaker + alerting + fallback gateway.
- ETH custody check (if running a gateway with on-chain mode).
- Observability: at minimum, request count, error rate, p95 latency.
- Studio quotas, Cloud Community Gateway rate limits, GWID SLAs.
- Fallback strategy: secondary gateway provider for high-uptime apps.

**Information to exclude.**

- Gateway operations (Gateways tab).
- Specific Datadog/Grafana setup (Gateways tab).
- Orchestrator selection patterns (Gateways tab).

**Sources to consult.**

- Existing `guides/ai/production-checklist.mdx`.
- `persona-routing-and-infra-map.md` Part 2.8 (observability layer).

---

## 24. `/v2/developers/build/application/troubleshooting.mdx` — RETAINED rename (from `guides/ai/`)

### Lighter format

**Audience.** Persona 5 — App Dev debugging a broken integration.

**Journey position.** From any earlier App Dev page; out to `production-checklist.mdx` or relevant Reference page.

**Activation moment.** Reader has identified the issue from the symptoms list and has a fix or a clear next page to read.

**Frontmatter.**

```yaml
---
title: "Troubleshooting"
sidebarTitle: "Troubleshooting"
description: "Common Livepeer integration failures and how to diagnose them: 401, 429, 5xx, slow first call, model-not-found, gateway unreachable."
pageType: "how-to"
---
```

**Information to convey.**

- Symptom-to-diagnosis table: 401 → auth (link to `ai-authentication.mdx`); 429 → rate limit (link to retry pattern); 503 → orchestrator unavailable (link to gateway choice); slow first call → cold model (Livepeer-native phenomenon, document it); model-not-found → check Daydream vs native vs BYOC (link to `build/ai/ai-pipelines.mdx`); gateway unreachable → DNS + port checks.
- Tools for diagnosis: `livepeer_cli`, gateway logs, Prometheus metrics.
- Common config mistakes: wrong SDK package (`livepeer` vs `@livepeer/ai`), wrong base URL, missing Bearer prefix.

**Information to exclude.**

- Gateway operator-side debugging (Gateways tab).
- Orchestrator-side debugging (Orchestrators tab).
- Studio dashboard usage (Solutions/Studio).

**Sources to consult.**

- Existing `guides/ai/troubleshooting.mdx`.
- `persona-routing-and-infra-map.md` Verification log Item 5 (the 9/11/40 pipeline reconciliation that often confuses model-not-found errors).

---

## 25. `/v2/developers/build/application/naap-plugins.mdx` — NEW

### Gate L0

**Q1 — Outcome.** This page gives a developer who wants to build a NaaP plugin a working starter, the plugin contract, and the publish path, against the Feb 2026 NaaP platform.

**Q2 — Featured reader.** A developer who has heard of NaaP (Network as a Platform), understands it is a multi-tenant gateway shell with JWT-based auth and Developer API Keys, and wants to either consume NaaP-issued keys or build a plugin that runs inside NaaP. Most readers are App Devs who are NaaP customers; some are plugin authors.

**Q3 — Real alternative.** They build their multi-tenant API key system from scratch, or they stay on Studio's productised path.

**Q4 — Required belief.** NaaP is a real, in-development reference implementation with a documented plugin contract, and I can either consume it as an App Dev or build a plugin that runs inside it.

### Gate L1 — persona table

| Operator profile | Primary question on arrival | What this page must give them | Served here or linked |
|---|---|---|---|
| App Dev consuming NaaP-issued keys | "How do I auth against NaaP?" | Bearer token pattern + setup link | Served here |
| Plugin author wanting to ship inside NaaP | "What's the plugin contract?" | Plugin shape, install path, lifecycle | Served here |
| Dev evaluating NaaP vs Studio | "Why NaaP?" | Multi-tenant, self-hostable, open-source vs Studio's productised path | Served here |
| Dev asking about NaaP status | "Is NaaP production-ready?" | "Active development, not yet stable API" — verified note | Served here |
| Dev wanting NaaP gateway operations | "How do I run NaaP?" | Gateways tab link | Linked |

### Content sequence (L2)

1. **Outcome paragraph.** "NaaP is the open-source, multi-tenant gateway shell with JWT auth, Developer API Keys, and per-user usage tracking on top of go-livepeer. This page covers consuming NaaP and building NaaP plugins."
2. **What NaaP is.** Reference implementation. Repo: `github.com/livepeer/naap`. Status: active development, API not yet stable (verified from `gateways/guides/operator-considerations/production-gateways.mdx`).
3. **NaaP for App Devs.** Bearer token from your NaaP admin console. Per-user usage tracking visible to the operator. Standard SDK config with `baseURL` pointing at the NaaP-fronted gateway.
4. **NaaP for plugin authors.** Plugin contract (depending on what's stabilised). Lifecycle hooks. Where plugins are loaded. Note that the plugin API surface is in flux.
5. **Twelve plugins as of Feb 2026.** Reference list — exact composition pending; cross-link to NaaP repo for the live list.
6. **NaaP vs Studio.** NaaP is multi-tenant gateway shell — open-source, self-hostable. Studio is productised hosted SaaS. Decision criteria.
7. **Next page link.** Gateways tab for operating NaaP. Stay on Developers tab for consuming it.

### Frontmatter

```yaml
---
title: "NaaP — Network as a Platform"
sidebarTitle: "NaaP plugins"
description: "Build a NaaP plugin or consume NaaP-issued API keys. The open-source multi-tenant gateway shell with JWT auth and Developer API Keys."
pageType: "concept"
---
```

### Information to convey

- NaaP repo: `github.com/livepeer/naap`.
- Status: active development, API not yet stable (verified).
- 12 plugins as of Feb 2026 (verified count from `persona-routing-and-infra-map.md`).
- NaaP issues JWTs via SIWE (Sign-In with Ethereum) — verified pattern.
- Cloud SPE / NaaP project funded the work.
- NaaP fits between Studio (productised) and self-hosted go-livepeer (no multi-tenant tooling).

### Information to exclude

- NaaP gateway ops at scale (Gateways tab).
- SIWE protocol detail (Reference / external EIP-4361 link).
- Specific plugin code (lives in the NaaP repo).
- Studio comparison depth (Solutions/Studio).

### Components

- `<Note>` for the API stability caveat.
- One table comparing NaaP / Studio / self-hosted go-livepeer.

### Sources to consult

- `/v2/gateways/guides/operator-considerations/production-gateways.mdx` (verified NaaP status and SIWE auth pattern).
- `persona-routing-and-infra-map.md` Verification log NaaP plugin count.

---

## End of Batch 3

Fourteen pages briefed. Build / Application is fully scoped: 5 NEW, 3 rewrites, 6 retained-with-rename.

Pages remaining: 44.

Next batch (4): Build / AI — 12 pages. Heaviest content track. Mix of NEW (5), rewrite (4), retained-rename (3).
