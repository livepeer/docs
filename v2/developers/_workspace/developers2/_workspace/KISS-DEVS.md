Walking through this from the developer's actual mental state on arrival, not from the tab structure.

A developer hearing "Livepeer has AI and video" arrives carrying one of roughly five mental models, each pulling them toward different infrastructure expectations. They don't know which model is right yet. That's the whole problem the tab has to resolve.

## The five arrival mental models and the infra each one expects

**"It's like OpenAI or Replicate, but for video AI."** This developer is looking for an inference API. They expect: an endpoint URL, an API key flow, a list of models or pipelines (text-to-image, image-to-video, audio-to-text, real-time effects), request and response schemas, per-request pricing, an SDK in their language, rate limits, streaming patterns. They want to write `curl` against a documented endpoint within ten minutes.

**"It's like Mux, but with AI bolted on."** This developer wants a video platform. They expect: an RTMP or WebRTC ingest endpoint, transcoding presets, an embeddable player, VOD storage, webhooks for stream events, recording, plus AI features layered on top of that pipeline. They're looking for `livepeer.studio` shaped infra and assume AI is a feature flag on top.

**"It's like Modal or RunPod, but cheaper because decentralised."** This developer is hunting for compute primitives. They expect: a container runtime, declared GPU types and VRAM, a way to bring their own model (BYOC), per-GPU-second pricing, real-time vs batch options, queue or pipeline orchestration. They want to know what they can run, not what's pre-baked.

**"It's a streaming backend for the apps I'm building."** This is the live-video-first developer who barely cares about AI on arrival. They expect: ingest, ABR transcoding, HLS or DASH playback, low-latency options, DVR or recording, a player SDK, multi-region delivery. They will route around AI content unless it's framed as additive to their existing video stack.

**"It's a crypto network, so I need to understand the protocol."** This developer expects: a network architecture diagram, the role of LPT, the contract addresses, how payments flow, how they'd participate as a node operator or a delegator. They're prepared to read a whitepaper before they touch an SDK.

## What infra they're looking for, in concrete terms

Across those five mental models, the union set of what a developer expects to find on the tab is:

- **Access surfaces.** Studio, Daydream, the AI Jobs API, ComfyStream, BYOC, a self-hosted gateway. Plus the disambiguation that tells them which one they want.
- **SDKs and libraries.** `livepeer-js`, `livepeer-python`, `livepeer-go`, `@livepeer/ai`, `livepeer/ui-kit`, the Daydream SDK, and the protocol-level `livepeer/sdk` for on-chain reads.
- **Reference catalogues.** Supported AI pipelines, supported models, supported codecs and transcoding profiles, supported real-time effects.
- **Routing and economics.** Gateway options (hosted, community-run, self-hosted), pricing per pipeline or per GPU-second, payment flow (probabilistic micropayments, winning tickets, ETH on Arbitrum).
- **Compute layer.** Orchestrators, `ai-runner`, `ai-worker`, GPU classes, BYOC contracts.
- **Protocol layer.** Network architecture, contracts on Arbitrum, LPT role, staking, the Cascade direction.
- **Examples and migration paths.** Drop-in code samples, a "coming from OpenAI / Replicate / Modal" page, a "coming from Mux / Cloudflare Stream" page.
- **Observability and trust signals.** Status, uptime, what's hosted vs decentralised, what's production-ready vs experimental.

## The crucial point

The persona research already documents the layer-disambiguation problem as the single largest content gap. The above is what makes that concrete: a developer arriving cold isn't looking for one thing, they're carrying one of five competing expectations, and the tab has to put them in the right layer before any specific infra reference is useful. Listing the SDKs, the gateway options, or the model catalogue without first answering "which layer are you actually at" lands them in the wrong place and they bounce.
