# Content briefs — Batch 7: Build / Tutorials

Three pages. All retained-rename from `guides/tutorials/`. Light brief format —
existing v2 content already exists and works; the tier here is path migration plus
audience/journey/sources, not L0/L1/L2.

Build / Tutorials lives inside Build per spec. Tutorials are end-to-end recipes
that combine multiple concepts into a finished example. Each tutorial serves
multiple personas; the brief documents the primary one and the journey position.

After verification: comfystream-quickstart was moved to `build/ai/` (preserves AI
Dev journey continuity), so Tutorials is exactly the three pages below.

Source authority: `developers-ia-locked.md`, existing v2 tutorial content.

---

## 50. `/v2/developers/build/tutorials/build-an-ai-agent-on-livepeer.mdx` — RETAINED rename (from `guides/tutorials/`)

### Lighter format

**Audience.** Persona 4 — Agent Developer primarily. Secondary readers: Persona 5 — Application Developer evaluating whether to add agent capabilities.

**Journey position.** From `get-started/agent-developer.mdx` after the reader has chosen vendor-or-fork; out to `build/agents/agent-sdk.mdx` for SDK depth, `build/agents/creative-kit.mdx` for UI primitives, `build/agents/eliza-integration.mdx` for Eliza-specific path.

**Activation moment.** Reader has a working agent loop responding to prompts, tool-calling at least one Livepeer capability (image generation or transcription), and a deployed shell they can demo.

**Frontmatter.**

```yaml
---
title: "Build an AI agent on Livepeer"
sidebarTitle: "AI agent tutorial"
description: "End-to-end tutorial: configure providers, register tools, wire the AgentRunner loop, deploy. From zero to a working creative agent."
pageType: "tutorial"
---
```

**Information to convey.**

- End-to-end recipe combining `@livepeer/agent`, AI Gateway calls, and a minimal UI.
- Provider configuration with one of Gemini / Claude / OpenAI / Daydream.
- Tool registration: at least one Livepeer-specific tool (image generation, transcription, or video generation).
- AgentRunner loop wiring.
- Deployment to Vercel or Cloudflare Pages.
- Cross-link to `build/agents/agent-sdk.mdx` for the SDK reference.
- Cross-link to `build/agents/storyboard-as-template.mdx` if the reader wants to skip the from-scratch path.

**Information to exclude.**

- AgentRunner internals beyond the wiring example (lives in `agent-sdk.mdx`).
- Creative-kit UI primitive depth (lives in `creative-kit.mdx`).
- Eliza framework specifics (lives in `eliza-integration.mdx`).
- EIP-8004 paid agent pattern (lives in `reference-agents.mdx`).

**Sources to consult.**

- Existing `guides/tutorials/build-an-ai-agent-on-livepeer.mdx` (verify code samples against current `@livepeer/agent` workspace package).
- `livepeer/storyboard/packages/agent` README.

**Verified deltas from existing v2 page.**

- Update path from `guides/tutorials/` to `build/tutorials/`.
- Confirm provider env-var names against the verified four-provider list.
- Confirm `@livepeer/agent` install pattern reflects the workspace-package reality (not yet on npm).
- Drop any references to `livepeer/sdk` (verified dead per `persona-routing-and-infra-map.md` Verification log Item 1).
- Drop any references to deprecated `room` namespace (verified per Item 6).

---

## 51. `/v2/developers/build/tutorials/ipfs-video-integration.mdx` — RETAINED rename (from `guides/tutorials/`)

### Lighter format

**Audience.** Persona 5 — Application Developer building a Web3-native video product. Secondary readers: Persona 3 — Video Developer evaluating decentralised storage.

**Journey position.** From `build/video/storage-and-archival.mdx` for the architectural context; or directly from external links and Web3-native search traffic. Out to `build/video/storage-and-archival.mdx` for the broader storage matrix and `build/application/frontend-react-player.mdx` for playback.

**Activation moment.** Reader has uploaded a video, transcoded it, pinned the segments to IPFS via a pinning service, and embedded the resulting playback URL in a working `@livepeer/react` Player.

**Frontmatter.**

```yaml
---
title: "IPFS video integration"
sidebarTitle: "IPFS + video"
description: "End-to-end: upload, transcode, pin segments to IPFS, embed playback. The canonical Web3-native video pattern on Livepeer."
pageType: "tutorial"
---
```

**Information to convey.**

- End-to-end recipe: upload → transcode → IPFS pin → playback embed.
- IPFS pinning via Storacha (successor to web3.storage), Lighthouse, or Pinata.
- catalyst-uploader does not pin to IPFS directly; pinning is application-layer.
- Filecoin archival via the same IPFS pinning + Filecoin Plus deal-making pattern (Estuary is dead — verified).
- Playback URL pattern via `@livepeer/react` Player.
- Cross-link to `build/video/storage-and-archival.mdx` for the broader storage decision.

**Information to exclude.**

- Catalyst stack architecture (lives in `lpms-integration.mdx` paragraph + Solutions/Studio).
- Studio Asset API archival (Solutions/Studio).
- IPFS protocol depth (link to IPFS docs).
- Filecoin specification depth (link to Filecoin docs).

**Sources to consult.**

- Existing `guides/tutorials/ipfs-video-integration.mdx` (verify pinning service references — Storacha is the current canonical successor to web3.storage).
- `livepeer/catalyst-uploader` README (verify backend support).
- `persona-routing-and-infra-map.md` Verification log (Storacha as web3.storage successor; Estuary shutdown).

**Verified deltas from existing v2 page.**

- Update path from `guides/tutorials/` to `build/tutorials/`.
- Replace any web3.storage references with Storacha.
- Drop any references to Estuary (shut down 2023).
- Confirm the Player URL embedding pattern matches the gateway-agnostic shape from `frontend-react-player.mdx`.

---

## 52. `/v2/developers/build/tutorials/token-gated-video.mdx` — RETAINED rename (from `guides/tutorials/`)

### Lighter format

**Audience.** Persona 5 — Application Developer building a Web3-native video product with token-based access control. Secondary readers: Persona 1 — Solutions Integrator building a token-gated content platform.

**Journey position.** From external Web3-native search traffic, or from `build/video/vod-workflows.mdx` for the recording flow that produces the gated content. Out to `build/application/ai-authentication.mdx` for broader auth patterns and `build/application/frontend-react-player.mdx` for playback.

**Activation moment.** Reader has a working playback URL that is gated by an on-chain token check, with the gate enforced at the application layer (not the gateway), and a working frontend that signs in with a wallet and verifies the token.

**Frontmatter.**

```yaml
---
title: "Token-gated video"
sidebarTitle: "Token-gated video"
description: "End-to-end: wallet sign-in, token verification, gated playback URL. Application-layer access control on top of any Livepeer playback."
pageType: "tutorial"
---
```

**Information to convey.**

- End-to-end recipe: wallet sign-in → token verification → gated playback.
- Application-layer enforcement (gateway is not aware of the token check).
- Wallet integration via wagmi or RainbowKit (TypeScript stack).
- Token verification: ERC-721 ownership check, ERC-1155 balance check, or custom contract.
- Gated playback URL: server-side check before issuing the URL or before serving segments.
- SIWE (Sign-In with Ethereum) integration as the canonical wallet sign-in pattern; cross-link to `build/application/ai-authentication.mdx` and `build/application/naap-plugins.mdx` (NaaP issues JWTs via SIWE — verified pattern).
- Playback embedding via `@livepeer/react` Player.

**Information to exclude.**

- Smart contract authoring (link to OpenZeppelin or Wagmi docs).
- Wallet provider setup beyond a one-paragraph reference.
- Studio access control patterns (Solutions/Studio).
- Gateway-side auth (lives in Gateways tab).

**Sources to consult.**

- Existing `guides/tutorials/token-gated-video.mdx` (verify wallet + token-check libraries against current versions).
- `persona-routing-and-infra-map.md` Verification log (NaaP + SIWE pattern verified).
- `/v2/gateways/guides/operator-considerations/business-case.mdx` (verified NaaP SIWE pattern).

**Verified deltas from existing v2 page.**

- Update path from `guides/tutorials/` to `build/tutorials/`.
- Confirm wallet integration libraries are current (wagmi v2, RainbowKit v2 as of late 2025).
- Confirm any references to `livepeer.js` use the v4.x ui-kit family (verified per Verification log Item 2 — `livepeer.js` and `livepeer/ui-kit` are the same repo).
- Drop any references to deprecated `room` namespace methods if the original page mentions multi-participant streaming (verified deprecated per Item 6).

---

## End of Batch 7

Three pages briefed. Build / Tutorials fully scoped:

- All three are retained-rename from `guides/tutorials/`.
- comfystream-quickstart is **not** in this section (moved to `build/ai/` per the locked IA decision to preserve the AI Dev journey continuity).
- Each brief documents path migration, audience, journey, activation, information
  to convey/exclude, and verified deltas against the existing v2 page.

Pages remaining: 17.

Next batch (8): Reference — 12 pages. Mix of retained-rename (4) and NEW (8).
This is the largest remaining batch. Tiered template applied: NEW pages get full
L0/L1/L2; retained pages get the lighter format.
