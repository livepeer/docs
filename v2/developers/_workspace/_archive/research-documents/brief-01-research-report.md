# Brief 01 — Research Report
## The Livepeer Developer Landscape
**Target page:** `v2/developers/concepts/developer-stack.mdx`  
**Researcher:** Claude Sonnet 4.6  
**Date:** March 2026

---

## Research Log

| Q# | Source | Finding | Conflicts / Gaps |
|----|--------|---------|-----------------|
| 1 | livepeer.studio, docs.livepeer.org/api-reference, Livepeer LinkedIn | Studio is a managed, hosted video platform built ON the Livepeer network by Livepeer Inc. It abstracts network complexity and exposes: live streaming (RTMP, WebRTC, HLS), transcoding (up to 80–90% cost savings vs cloud), VOD, player SDKs (TS, Go, Python, etc.), webhooks, and analytics. Auth is via API key issued through the Studio dashboard, passed as `Authorization: Bearer <key>`. What you cannot do via Studio vs the raw network: you cannot deploy custom AI inference workflows, you cannot choose specific orchestrators, you cannot configure gateway-level settings, and you do not have access to the AI subnet directly. | Studio docs are at docs.livepeer.studio — a separate site from docs.livepeer.org. Scope of Studio AI features (if any) is unclear from public sources. REVIEW required. |
| 2 | docs.livepeer.org/v2/platforms/daydream, blog.livepeer.org/introducing-daydream, blog.livepeer.org/daydream-live | Daydream has two related but distinct forms: (a) a consumer app at daydream.live that transforms webcam video with text prompts in real time, and (b) an open-source toolkit and API for developers building on real-time AI video. The Daydream docs describe it as "an open-source toolkit for world models and real-time AI video" that "runs on the Livepeer network for decentralized, low-latency AI inference." The Daydream API is the API that developers use to access Daydream's capabilities — it sits on top of the Livepeer AI gateway layer. **Critically: Daydream is built using ComfyStream** (confirmed in the launch announcement: "Daydream is also built using ComfyStream, our open source plugin for real-time workflows in ComfyUI"). So Daydream = ComfyStream + Livepeer AI network + product layer. | The docs-v2 branch calls this a "platform" (v2/platforms/daydream). Not yet clear whether the Daydream API is identical to the AI Gateway API or is a separate abstraction layer. REVIEW required. |
| 3 | docs.livepeer.org/ai/gateways/start-gateway, docs.livepeer.org/ai/api-reference/overview, docs.livepeer.org/ai/builders/get-started | Yes, a developer can call the AI gateway API without using Daydream. The Livepeer AI API is a standard REST API exposed by gateway nodes. Multiple gateways exist: (a) Livepeer Studio Gateway — production-ready, API key auth through Studio dashboard; (b) Livepeer Cloud Community Gateway — free, for experimentation. A self-hosted gateway node (running `go-livepeer -gateway`) exposes the same API locally at e.g. `http://0.0.0.0:8937`. The API reference is at docs.livepeer.org/ai/api-reference. Auth for the Studio Gateway uses API keys. The API is organised around REST, accepts JSON, returns JSON. | Exact endpoint URL for the hosted Studio Gateway AI endpoint not confirmed in public docs — it is different from the Studio video API endpoint. REVIEW required. |
| 4 | docs.livepeer.org/ai/introduction | The docs describe "AI Gateway Nodes" as the demand-side routing layer that directs AI tasks to AI Orchestrator nodes. No separate "AI Jobs API" terminology found in current docs — the current terminology is "AI Gateway API" or "Livepeer AI API." The term "AI Jobs API" appears to be legacy language from earlier docs. The current API handles: text-to-image, image-to-image, image-to-video, upscale, audio-to-text, and other pipeline types. | The brief asks about "AI Jobs API vs AI gateway API" distinction — current evidence suggests they are the same thing with naming drift. REVIEW for confirmation against go-livepeer source. |
| 5 | blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision (Nov 13, 2025) | The graduation metaphor is explicit and directly quoted: "similarly to how startups start to build on platforms like Heroku, Netlify, or Vercel, and then as they scale and need more control and cost savings they build direct on AWS, and then ultimately move to their own datacenters" — the parallel is: start with Daydream (hosted) → run your own gateway → deeper protocol contribution. The blog names Daydream specifically as the entry layer and positions self-hosted gateways as the natural next step. | This is a Nov 2025 blog post, Tier 2 source. The exact graduation framing should be used in the page — it is the canonical public articulation. |
| 6 | livepeer.org/network, blog.livepeer.org Nov 2025 Network Vision | The Network Vision post contains a diagram ("Real-time AI Opportunities by Industry") but this is a market opportunity chart, not a developer architecture diagram. The livepeer.org/network page shows a layered stack diagram (application layer → gateway nodes → payment layer → orchestrator nodes), but it is a consumer-facing overview, not developer-facing. No official architecture diagram showing Studio/Daydream/AI gateway API relationship side by side found in public sources. | No embeddable diagram found for this page. Low likelihood as expected by brief. |
| 7 | github.com/livepeer/comfystream (search result), github.com/livepeer/go-livepeer (search result), blog.livepeer.org | Repo mapping confirmed: Studio → livepeer/studio (external, docs at docs.livepeer.studio); Daydream → livepeer/pipelines (docs at pipelines.livepeer.org, app at daydream.live); ComfyStream → livepeer/comfystream; AI runner → livepeer/ai-worker; Protocol/network → livepeer/go-livepeer (network software), livepeer/protocol (Solidity contracts). The Studio SDK (livepeer.js / @livepeer/sdk) is the JS/TS client for the Studio API. | Daydream SDK is confirmed via daydream API/pipelines repo. The brief references a "Daydream SDK" — this needs REVIEW against the pipelines repo for exact SDK name/package. |
| 8 | docs.livepeer.org/ai/gateways/start-gateway, docs.livepeer.org/ai/introduction | Building at the protocol layer means: running go-livepeer as an orchestrator or gateway node, contributing to on-chain Solidity contracts (livepeer/protocol), building or customising ai-worker containers (livepeer/ai-worker) for new pipeline types, contributing ComfyStream nodes or custom BYOC (Bring Your Own Container) pipelines. What you can do at protocol layer that you cannot at SDK/API layer: register on-chain as a node operator, earn LPT rewards, set your own pricing, choose which workflows to accept, and contribute new pipeline capabilities to the network. | go-livepeer README not directly fetched (domain restriction). Findings from docs are Tier 2. REVIEW against go-livepeer README for any developer-facing API surface description. |
| Pain points | blog.livepeer.org/daydream-live, community template context | Documented pain points confirmed by source research: (1) "Is Studio the same as Livepeer?" — the Daydream intro blog and Network Vision blog both state that Studio and Daydream are products/platforms *built on* the network, not the network itself — this is never stated plainly in developer docs. (2) "Is Daydream built on Livepeer?" — yes, explicitly confirmed by multiple blog sources. (3) "I want the AI API without Studio" — yes, this is possible via any gateway provider; it is the Livepeer AI API. (4) "Where does ComfyStream fit?" — ComfyStream is the open-source engine that Daydream itself is built on; developers can use it directly without Daydream. | Discord and GitHub issues not directly checked (no direct API access in this session). Community pain points above are inferred from blog and docs content, not direct Discord scrape. REVIEW recommended. |

---

## Additional Findings

### Ecosystem Layer Model (verified)

The Livepeer developer ecosystem has a clear layer model:

```
Consumer App Layer:   Daydream (daydream.live) — uses the Daydream API
                      Studio dashboard — uses the Studio API
                      
Hosted API Layer:     Studio API (video: livestream, transcode, VOD, player)
                      Daydream API / Livepeer AI API (real-time AI inference)
                      
Gateway Layer:        Any gateway provider (Studio Gateway, Livepeer Cloud, custom)
                      Self-hosted: go-livepeer -gateway
                      
ComfyStream Layer:    Open-source ComfyUI plugin for building real-time AI pipelines
                      Used by Daydream internally; also usable standalone by devs
                      
Protocol Layer:       go-livepeer (node software)
                      livepeer/protocol (Solidity contracts)
                      livepeer/ai-worker (AI pipeline container)
```

### Key Relationship Clarifications

**Daydream vs AI Gateway API:** Daydream is a product/toolkit that uses the AI gateway API. A developer using the "Daydream API" is calling a hosted instance of the Livepeer AI API, but through Daydream's infrastructure and with Daydream's account model. A developer calling the AI gateway API directly (via the Studio Gateway or a self-hosted node) is using the same underlying protocol but without Daydream's product layer. The distinction: Daydream = API + community + workflows + open-source toolkit. AI Gateway API = bare protocol inference endpoint.

**ComfyStream vs Daydream:** ComfyStream is the open-source inference engine. Daydream is a product built on ComfyStream. A ComfyStream developer builds and runs their own ComfyUI workflows locally or on cloud infrastructure, using Livepeer's network for GPU compute if they choose. A Daydream API developer calls Daydream's hosted service without managing ComfyStream infrastructure.

**Studio vs AI Gateway API:** These are different APIs for different jobs. Studio API = video infrastructure (streams, transcoding, player). AI Gateway API = AI inference (image/video generation, style transfer, etc.). A developer can use both, neither, or one without the other. They happen to both be accessible via the Studio dashboard for API key management, which causes confusion.

### Graduation Path (canonical language, Nov 2025)

Blog metaphor: Heroku/Netlify/Vercel → AWS → own datacenters  
Livepeer equivalent: Daydream or hosted Studio → self-hosted gateway → protocol contribution  
This is a key framing to carry into the page content.

---

## Media Candidates

| Item | URL | Recommended use |
|------|-----|----------------|
| Livepeer network stack diagram | livepeer.org/network | Suitable as reference only — consumer-facing, not developer-specific. Do not embed in concept page. |
| Nov 2025 Network Vision blog | blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision | Link as further reading. Contains market opportunity diagram — not suitable for embedding on this page. |
| Daydream launch blog | blog.livepeer.org/introducing-daydream | Link from Daydream section as further reading. |

**No embeddable architecture diagram found.** Recommend creating a purpose-built diagram in a later sprint. For this draft, a text-based layer table is sufficient and more maintainable.

---

## Open Questions for SME Review

1. **Is the "Daydream API" a distinct API from the generic "Livepeer AI Gateway API"?** Or is Daydream simply one gateway provider with their own endpoint and auth? Current evidence suggests the latter, but the docs-v2 branch treats Daydream as a "platform" with its own section, implying differentiation. Needs clarification from Peter (AI SPE Lead) or Joseph.

2. **What is the exact AI Jobs API → AI Gateway API naming history?** The brief mentions "AI Jobs API" as a distinct thing. Current docs only reference "AI Gateway API" / "Livepeer AI API." Confirm with Rick or Mehrdad that "AI Jobs API" is deprecated terminology.

3. **Does the Daydream API require a separate account/key from the Studio Gateway?** If yes, the distinction matters for the "Where to start" column in the table.

4. **What is the canonical package name/link for the Daydream SDK?** The pipelines.livepeer.org docs likely have this; not confirmed in this research session.

5. **Studio AI features:** Does the Studio API expose any AI endpoints (e.g. clip generation, content moderation)? If so, the Studio row in the ecosystem table needs qualification.
