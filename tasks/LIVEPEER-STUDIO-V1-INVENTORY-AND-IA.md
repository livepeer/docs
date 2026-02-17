# Livepeer Studio: V1 Content Inventory & Proposed IA for v2 Platforms Section

This document (1) inventories **all** v1 documentation that relates to **using Livepeer Studio** as a product, and (2) proposes an **optimal Information Architecture (IA)** for the **v2 Platforms → Livepeer Studio** section. Once the IA is approved, pages can be filled from the v1 content.

---

## Part 1: V1 Content Inventory (Using Livepeer Studio)

**Scope:** Content that teaches users how to use the **Livepeer Studio** hosted platform (APIs, dashboard, SDKs, livestream/VOD, access control, etc.). Excluded: v1 content about **running your own Livepeer Gateway** (e.g. `gateways/guides/docker-install`, `fund-gateway`, `transcoding-options`, `publish-content` to a self-hosted node) — that stays in the Gateways section.

### 1.1 Introduction & Quickstart

| V1 Source | Content Summary |
|-----------|-----------------|
| `v1/gateways/introduction.mdx` | Same as developers intro: what Studio does (live/VOD, API keys, billing); cards to Quickstart, Guides, API Reference, SDKs; server SDKs (TS, Go, Python); React Player & Broadcast. Tip: Daydream link. |
| `v1/orchestrators/introduction.mdx` | **Duplicate** of gateways/introduction.mdx (Studio intro + SDKs). |
| `v1/developers/introduction.mdx` | Same as above. |
| `v1/gateways/quick-start.mdx` | Create account at livepeer.studio → Create API Key (warning: avoid CORS keys, use backend); env vars; install `livepeer` + `@livepeer/react`; set up SDK client; retrieve playback info; play asset with Player component; links to SDKs, API, Guides (create-livestream, listen-to-asset-events). |
| `v1/developers/quick-start.mdx` | Same as gateways/quick-start.mdx. |
| `v1/gateways/livepeer-studio-cli.mdx` | CLI: `npx @livepeer/create`; create API key at livepeer.studio/dashboard/developers/api-keys; enter API key + Stream ID; `npm run dev`. |
| `v1/developers/livepeer-studio-cli.mdx` | Same as gateways/livepeer-studio-cli.mdx. |

### 1.2 Developer Guides (by topic)

**Guides overview:** `v1/developers/guides/overview.mdx` — Card grid linking to all guides (VOD, Livestream, Access control, Webhooks).

**Video on demand (VOD):**

| V1 Source | Content Summary |
|-----------|-----------------|
| `upload-video-asset.mdx` | Upload via Create Asset API; TUS resumable (recommended) vs PUT; SDK examples (Node, Python, Go); TUS on frontend. |
| `playback-an-asset.mdx` | Play asset with Player; playbackId; embeddable player (lvpr.tv), query params. |
| `encrypted-asset.mdx` | Encrypted assets (AES-CBC, Livepeer public key); create/upload/decrypt flow; access control; Lit compatibility. |
| `listen-to-asset-events.mdx` | Webhooks for asset events (e.g. asset.ready, asset.failed). |
| `transcode-video-storj.mdx` | Transcode API with Storj. |
| `transcode-video-w3s.mdx` | Transcode with W3S. |
| `get-engagement-analytics-via-api.mdx` | Viewership/engagement via Livepeer API. |
| `get-engagement-analytics-via-grafana.mdx` | Analytics via Grafana. |
| `get-engagement-analytics-via-timeplus.mdx` | Analytics via Timeplus. |
| `thumbnails-vod.mdx` | Get asset thumbnail. |

**Livestream:**

| V1 Source | Content Summary |
|-----------|-----------------|
| `create-livestream.mdx` | Create stream via API/SDK (Node, Python, Go); stream key, playbackId. |
| `playback-a-livestream.mdx` | Play livestream with Player; WebRTC low latency; playbackId/URL. |
| `stream-via-obs.mdx` | Broadcast using OBS (RTMP); settings; b-frames note for WebRTC. |
| `livestream-from-browser.mdx` | In-browser broadcast (WebRTC/WHIP); React Broadcast component. |
| `monitor-stream-health.mdx` | Stream health (dashboard + API); conditions, metrics. |
| `listen-to-stream-events.mdx` | Webhooks for stream events (stream.started, stream.idle, recording.*). |
| `multistream.mdx` | Multistream to multiple RTMP destinations (e.g. Twitch, YouTube). |
| `clip-a-livestream.mdx` | Clip a livestream. |
| `optimize-latency-of-a-livestream.mdx` | Optimize latency. |
| `thumbnails-live.mdx` | Get livestream thumbnail. |

**Access control:**

| V1 Source | Content Summary |
|-----------|-----------------|
| `access-control-webhooks.mdx` | Gated playback; `playback.accessControl` webhook; 2XX = allow. |
| `access-control-jwt.mdx` | JWT playback policy; signing keys; pass JWT in player or URL. |

**Webhooks & projects:**

| V1 Source | Content Summary |
|-----------|-----------------|
| `setup-and-listen-to-webhooks.mdx` | Set up and listen for webhooks. |
| `managing-projects.mdx` | Managing projects in Studio. |

### 1.3 Core concepts (Studio & API)

| V1 Source | Content Summary |
|-----------|-----------------|
| `developers/core-concepts/studio/webhooks.mdx` | What webhooks are; create in Developer/Webhooks; table of event types (stream.*, recording.*, multistream.*, asset.*, task.*, playback.accessControl). |
| `developers/core-concepts/studio/stream-health.mdx` | Global health (Healthy/Unhealthy/Idle); health checks (Transcoding, Real-time, Multistreaming); Logs; Session Ingest Rate; monitoring (Studio, REST/SDK); conditions & metrics from API. |
| `developers/core-concepts/studio/in-browser-broadcast.mdx` | In-browser broadcast flow: create stream → WebRTC/WHIP → capture → playback iframe; STUN/TURN required. |
| `developers/core-concepts/core-api/stream.mdx` | Stream object; create; sessions; recording (stored as asset); multistream; ingest (RTMP, WebRTC, SRT); stream health; viewership; playback (playbackId, Playback Info API); Player; b-frames warning. |
| `developers/core-concepts/core-api/asset.mdx` | Asset CRUD; playback; recording & clip; encrypted asset (AES-CBC, Livepeer public key, access control). |
| `developers/core-concepts/core-api/multistream.mdx` | Multistream to RTMP/RTMPS; Dashboard/API/SDK; target params; active/inactive; webhooks (multistream.connected, .error, .disconnected). |
| `developers/core-concepts/core-api/access-control.mdx` | Webhook-based and JWT-based access control; gated streams/assets; signing keys; Token Gating, Lit. |
| `developers/core-concepts/player/overview.mdx` | Livepeer Player: React component; WebRTC low latency; MP4/HLS fallback; embed (lvpr.tv); viewership metrics. |

### 1.4 API reference (Livepeer Studio API)

**Overview:** `v1/api-reference/overview/introduction.mdx`, `authentication.mdx` (API keys, Bearer, CORS-enabled keys warning).

**Resource groups (v1 paths):**

- **Stream:** create, get, get-all, update, delete, terminate; create-clip, get-clip; add/delete-multistream-target.
- **Session:** overview, get, get-all, get-recording, get-clip.
- **Asset:** overview, upload, upload-via-url, get, get-all, update, delete.
- **Playback:** overview, get.
- **Multistream:** overview, create, get, get-all, update, delete.
- **Webhook:** create, get, get-all, update, delete.
- **Signing key:** overview, create, get, get-all, update, delete.
- **Room:** create, get, delete, create-user, get-user, update-user, remove-user, start-egress, stop-egress.
- **Task:** overview, get, get-all.
- **Viewership:** get-viewership-metrics, get-usage-metrics, get-realtime-viewership, get-public-total-views, get-creators-metrics.
- **Transcode:** overview, create.
- **Generate (AI):** overview; text-to-image, image-to-image, image-to-video, image-to-text, audio-to-text, text-to-speech, llm, segment-anything-2, upscale. (Implements Livepeer AI Gateway API; prefix `/api/beta/generate`.)

### 1.5 SDKs

| V1 Source | Content Summary |
|-----------|-----------------|
| `v1/sdks/introduction.mdx` | Server SDKs (Typescript, Go, Python); React Player & Broadcast; “interacting with the Livepeer Studio API”. |
| `v1/sdks/javascript.mdx` | JS/TS SDK. |
| `v1/sdks/go.mdx` | Go SDK. |
| `v1/sdks/python.mdx` | Python SDK. |
| `v1/sdks/react/*` | Player (Root, Video, Controls, etc.) and Broadcast components; migration (3.x → 4.x); providers/studio. |

### 1.6 Existing v2 Livepeer Studio product content

| V2 Source | Content Summary |
|-----------|-----------------|
| `v2/pages/010_products/products/livepeer-studio/livepeer-studio.mdx` | Title only: “# Livepeer Studio”. |
| `v2/pages/010_products/products/livepeer-studio/client-use-cases.mdx` | Livepeer Studio clients: SankoTV, Fishtank LIVE, Switchboard Live, Minds, The Lot Radio, MyPrize; cost savings, quotes. |

**Note:** The **Gateways** section already has a provider page for the Studio *gateway* (`v2/pages/04_gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx`), which is currently empty and is the right place for “using Livepeer Studio as a gateway” from a gateway-user perspective. The **Platforms → Livepeer Studio** section is the right place for “Livepeer Studio as a product” (getting started, dashboard, APIs, SDKs, guides).

---

## Part 2: Proposed Optimal IA for Platforms → Livepeer Studio

**Location in nav:** **Platforms** tab → **Products** → **Livepeer Studio** (group in `docs.json`).

**Principles:**

- **One place for “what is Studio” and “get started”** so product and developer flows are clear.
- **Task-based grouping** (Get started → Livestream → VOD → Access & security → Events & analytics → API/SDK reference) with optional **Reference** sub-group for API/SDK deep dives.
- **Reuse v2 cross-links** where relevant (e.g. Gateways → “Using the Livepeer Studio Gateway”, Developers → Quick starts, SDKs, API reference) to avoid duplication.
- **Keep the section scoped to “using the product”**; deep API reference can live here or stay in a shared Developers/API section with links from Studio.

### Proposed structure (pages under `v2/pages/010_products/products/livepeer-studio/`)

```
Livepeer Studio (group)
├── overview.mdx                    [NEW – replace/expand livepeer-studio.mdx]
├── client-use-cases.mdx            [EXISTS]
├── Get started
│   ├── quickstart.mdx              [NEW – account, API key, first stream/asset]
│   └── studio-cli.mdx              [NEW – npx @livepeer/create]
├── Livestream
│   ├── livestream-overview.mdx      [NEW – core concepts: stream, sessions, ingest, playback]
│   ├── create-livestream.mdx       [NEW – from v1 guide]
│   ├── playback-livestream.mdx     [NEW – from v1 guide]
│   ├── stream-via-obs.mdx          [NEW – from v1 guide]
│   ├── livestream-from-browser.mdx [NEW – from v1 guide + in-browser broadcast concept]
│   ├── multistream.mdx              [NEW – from v1 guide + core-api multistream]
│   ├── clip-livestream.mdx         [NEW – from v1 guide]
│   ├── stream-health.mdx           [NEW – from v1 core-concepts/studio/stream-health]
│   └── optimize-latency.mdx        [NEW – from v1 guide]
├── Video on demand (VOD)
│   ├── vod-overview.mdx            [NEW – core concepts: asset, playback, recording, clip]
│   ├── upload-asset.mdx            [NEW – from v1 guide]
│   ├── playback-asset.mdx          [NEW – from v1 guide]
│   ├── encrypted-assets.mdx        [NEW – from v1 guide]
│   ├── thumbnails-vod.mdx          [NEW – from v1 guide]
│   └── transcode-video.mdx         [NEW – from v1 transcode guides / API]
├── Access control & security
│   ├── access-control-overview.mdx [NEW – from v1 core-api/access-control]
│   ├── access-control-webhooks.mdx [NEW – from v1 guide]
│   └── access-control-jwt.mdx      [NEW – from v1 guide]
├── Events & analytics
│   ├── webhooks.mdx                [NEW – from v1 core-concepts/studio/webhooks + setup guide]
│   ├── listen-to-events.mdx        [NEW – asset + stream events guides combined/split as needed]
│   └── analytics.mdx               [NEW – engagement via API, Grafana, Timeplus; viewership API]
├── Player & embed
│   └── player-and-embed.mdx        [NEW – from v1 player overview + embed + thumbnails-live]
├── Reference (optional sub-group)
│   ├── api-overview.mdx            [NEW – intro + auth; link to full API ref if elsewhere]
│   ├── sdks-overview.mdx           [NEW – from v1 sdks/introduction; links to TS, Go, Python, React]
│   └── managing-projects.mdx       [NEW – from v1 guide]
└── (Optional) AI / Generate        [Only if Studio AI is in scope for this section]
    └── ai-generate-overview.mdx    [NEW – from v1 api-reference/generate/overview + link to AI docs]
```

### Navigation (docs.json) suggestion

Under the existing **Livepeer Studio** group, replace the single page with a structure like:

```json
{
  "group": "Livepeer Studio",
  "icon": "film-canister",
  "pages": [
    "v2/pages/010_products/products/livepeer-studio/overview",
    "v2/pages/010_products/products/livepeer-studio/client-use-cases",
    {
      "group": "Get started",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/quickstart",
        "v2/pages/010_products/products/livepeer-studio/studio-cli"
      ]
    },
    {
      "group": "Livestream",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/livestream-overview",
        "v2/pages/010_products/products/livepeer-studio/create-livestream",
        "v2/pages/010_products/products/livepeer-studio/playback-livestream",
        "v2/pages/010_products/products/livepeer-studio/stream-via-obs",
        "v2/pages/010_products/products/livepeer-studio/livestream-from-browser",
        "v2/pages/010_products/products/livepeer-studio/multistream",
        "v2/pages/010_products/products/livepeer-studio/clip-livestream",
        "v2/pages/010_products/products/livepeer-studio/stream-health",
        "v2/pages/010_products/products/livepeer-studio/optimize-latency"
      ]
    },
    {
      "group": "Video on demand",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/vod-overview",
        "v2/pages/010_products/products/livepeer-studio/upload-asset",
        "v2/pages/010_products/products/livepeer-studio/playback-asset",
        "v2/pages/010_products/products/livepeer-studio/encrypted-assets",
        "v2/pages/010_products/products/livepeer-studio/thumbnails-vod",
        "v2/pages/010_products/products/livepeer-studio/transcode-video"
      ]
    },
    {
      "group": "Access control & security",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/access-control-overview",
        "v2/pages/010_products/products/livepeer-studio/access-control-webhooks",
        "v2/pages/010_products/products/livepeer-studio/access-control-jwt"
      ]
    },
    {
      "group": "Events & analytics",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/webhooks",
        "v2/pages/010_products/products/livepeer-studio/listen-to-events",
        "v2/pages/010_products/products/livepeer-studio/analytics"
      ]
    },
    {
      "group": "Player & embed",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/player-and-embed"
      ]
    },
    {
      "group": "Reference",
      "pages": [
        "v2/pages/010_products/products/livepeer-studio/api-overview",
        "v2/pages/010_products/products/livepeer-studio/sdks-overview",
        "v2/pages/010_products/products/livepeer-studio/managing-projects"
      ]
    }
  ]
}
```

You can trim or collapse groups (e.g. merge “Player & embed” into “Livestream”/“VOD” or into Reference) depending on how much depth you want in the sidebar.

### Rationale

- **overview** — Single entry: what Studio is, who it’s for, links to quickstart, livestream, VOD, and gateway doc.
- **client-use-cases** — Already exists; keep as social proof.
- **Get started** — Minimal path: account → API key → first stream or asset; CLI for scaffolding.
- **Livestream / VOD** — Mirrors v1 guides and concepts; stream-health and optimize-latency support production use.
- **Access control** — Important for gated content; overview + webhook + JWT covers both patterns.
- **Events & analytics** — Webhooks + “listen to events” + analytics (API, Grafana, Timeplus) in one place.
- **Player & embed** — Single page for Player component and lvpr.tv embed is enough for product section; deep SDK docs can stay under Developers.
- **Reference** — API overview + auth, SDKs overview, managing projects; full API reference can remain in Gateways/Developers and be linked from here.
- **AI/Generate** — Optional; only if you want Studio’s AI features (e.g. `/api/beta/generate`) documented under Platforms; otherwise link to existing AI docs.

### V1 → V2 page mapping (for fill-in phase)

| Proposed v2 page | Primary v1 sources |
|-----------------|--------------------|
| overview | gateways/introduction, developers/introduction; add product positioning |
| quickstart | gateways/quick-start, developers/quick-start |
| studio-cli | gateways/livepeer-studio-cli, developers/livepeer-studio-cli |
| livestream-overview | core-concepts/core-api/stream.mdx |
| create-livestream | guides/create-livestream.mdx |
| playback-livestream | guides/playback-a-livestream.mdx |
| stream-via-obs | guides/stream-via-obs.mdx |
| livestream-from-browser | guides/livestream-from-browser.mdx, core-concepts/studio/in-browser-broadcast.mdx |
| multistream | guides/multistream.mdx, core-concepts/core-api/multistream.mdx |
| clip-livestream | guides/clip-a-livestream.mdx |
| stream-health | core-concepts/studio/stream-health.mdx, guides/monitor-stream-health.mdx |
| optimize-latency | guides/optimize-latency-of-a-livestream.mdx |
| vod-overview | core-concepts/core-api/asset.mdx |
| upload-asset | guides/upload-video-asset.mdx |
| playback-asset | guides/playback-an-asset.mdx |
| encrypted-assets | guides/encrypted-asset.mdx |
| thumbnails-vod | guides/thumbnails-vod.mdx |
| transcode-video | guides/transcode-video-storj.mdx, transcode-video-w3s.mdx; api-reference/transcode |
| access-control-overview | core-concepts/core-api/access-control.mdx |
| access-control-webhooks | guides/access-control-webhooks.mdx |
| access-control-jwt | guides/access-control-jwt.mdx |
| webhooks | core-concepts/studio/webhooks.mdx, guides/setup-and-listen-to-webhooks.mdx |
| listen-to-events | guides/listen-to-asset-events.mdx, listen-to-stream-events.mdx |
| analytics | guides/get-engagement-analytics-via-api.mdx, via-grafana, via-timeplus; viewership API |
| player-and-embed | core-concepts/player/overview.mdx, playback-an-asset (embed); thumbnails-live.mdx |
| api-overview | api-reference/overview/introduction.mdx, authentication.mdx |
| sdks-overview | sdks/introduction.mdx; link to sdks/javascript, go, python, react |
| managing-projects | guides/managing-projects.mdx |

---

## Next steps

1. **Approve or adjust the IA** (e.g. collapse Reference, add/remove pages, rename groups).
2. **Create placeholder MDX files** for each proposed page under `v2/pages/010_products/products/livepeer-studio/`.
3. **Update `docs.json`** with the new Livepeer Studio group structure.
4. **Fill each page** using the V1 → V2 mapping and the inventory above; add v2 voice, frontmatter, and cross-links (e.g. to Gateways, Developers, SDKs).
5. **Decide** where the full **API reference** (stream, asset, playback, webhook, etc.) should live: under Studio Reference, or under Developers/Technical references with links from Studio.

Once the IA is approved, we can proceed to create the page stubs and then fill them from the v1 content.
