# Developer sources and resources

All sources found across the web, GitHub, v1 docs, Notion, and community channels relevant to the Livepeer Developers tab. Organised by source type. Confidence and recency noted.

---

## 1. Official documentation (live site — v1)

### Developer section
| Page | URL | Content | Migrate to v2? |
|---|---|---|---|
| Quick Start | https://docs.livepeer.org/developers/quick-start | API key creation, first stream, first asset upload | ✅ Update and adapt |
| Introduction | https://docs.livepeer.org/developers/introduction | Overview of Studio API and SDK | ✅ Partial |
| Studio CLI | https://docs.livepeer.org/developers/livepeer-studio-cli | CLI tooling reference | ✅ Move to resources/reference |

### Developer Guides (v1) — all under `/v1/developers/guides/`
| Page | URL | v2 Status |
|---|---|---|
| Create Livestream | `.../guides/create-livestream` | No v2 equivalent — MIGRATE |
| Livestream from Browser | `.../guides/livestream-from-browser` | No v2 equivalent — MIGRATE (WebRTC guide) |
| Stream via OBS | `.../guides/stream-via-obs` | No v2 equivalent — MIGRATE |
| Playback a Livestream | `.../guides/playback-a-livestream` | No v2 equivalent — MIGRATE |
| Upload Video Asset | `.../guides/upload-video-asset` | No v2 equivalent — MIGRATE |
| Playback an Asset | `.../guides/playback-an-asset` | No v2 equivalent — MIGRATE |
| Monitor Stream Health | `.../guides/monitor-stream-health` | No v2 equivalent — MIGRATE |
| Setup and Listen to Webhooks | `.../guides/setup-and-listen-to-webhooks` | No v2 equivalent — HIGH PRIORITY MIGRATE |
| Listen to Asset Events | `.../guides/listen-to-asset-events` | No v2 equivalent — MIGRATE |
| Listen to Stream Events | `.../guides/listen-to-stream-events` | No v2 equivalent — MIGRATE |
| Multistream | `.../guides/multistream` | No v2 equivalent — MIGRATE |
| Clip a Livestream | `.../guides/clip-a-livestream` | No v2 equivalent — MIGRATE |
| Access Control (JWT) | `.../guides/access-control-jwt` | No v2 equivalent — HIGH PRIORITY MIGRATE |
| Access Control (Webhooks) | `.../guides/access-control-webhooks` | No v2 equivalent — HIGH PRIORITY MIGRATE |
| Encrypted Asset | `.../guides/encrypted-asset` | No v2 equivalent — MIGRATE |
| Thumbnails (Live) | `.../guides/thumbnails-live` | No v2 equivalent — MIGRATE |
| Thumbnails (VOD) | `.../guides/thumbnails-vod` | No v2 equivalent — MIGRATE |
| Optimize Latency | `.../guides/optimize-latency-of-a-livestream` | No v2 equivalent — MIGRATE |
| Transcode via Web3.Storage | `.../guides/transcode-video-w3s` | No v2 equivalent — optional |
| Transcode via Storj | `.../guides/transcode-video-storj` | No v2 equivalent — optional |
| Engagement Analytics (API) | `.../guides/get-engagement-analytics-via-api` | No v2 equivalent — MIGRATE |
| Engagement Analytics (Grafana) | `.../guides/get-engagement-analytics-via-grafana` | No v2 equivalent — MIGRATE |
| Engagement Analytics (Timeplus) | `.../guides/get-engagement-analytics-via-timeplus` | No v2 equivalent — optional |
| Managing Projects | `.../guides/managing-projects` | No v2 equivalent — MIGRATE |

### Developer Tutorials (v1) — all under `/v1/developers/tutorials/`
| Page | URL | Content | v2 Status |
|---|---|---|---|
| Upload & Playback on IPFS | `.../tutorials/upload-playback-videos-on-ipfs` | 12KB full tutorial — IPFS + Livepeer integration | ✅ MIGRATE — still relevant |
| Upload & Playback on Arweave | `.../tutorials/upload-playback-videos-on-arweave` | Arweave + Livepeer integration | ✅ MIGRATE — still relevant |
| Upload & Playback via 4everland | `.../tutorials/upload-playback-videos-4everland.mdx` | 4everland decentralised storage | Optional |
| Token Gate with Lit Protocol | `.../tutorials/token-gate-videos-with-lit` | 29KB full tutorial — web3 access control | ✅ MIGRATE — web3 audience |
| Decentralised App with FVM | `.../tutorials/decentralized-app-with-fvm` | 39KB full tutorial — Filecoin + Livepeer | Optional |

### AI section (v1)
| Page | URL | Content | Migrate? |
|---|---|---|---|
| AI Introduction | https://docs.livepeer.org/ai/introduction | What is Livepeer AI | ✅ Superseded by v2 |
| AI Builders Get Started | https://docs.livepeer.org/ai/builders/get-started | AI quickstart (older) | ✅ v2 ai-quickstart supersedes |
| Text to Image | https://docs.livepeer.org/ai/pipelines/text-to-image | Pipeline-specific page | ✅ Migrate pipeline content to model-support |
| Image to Image | https://docs.livepeer.org/ai/api-reference/image-to-image | API reference | ✅ Migrate to resources/reference/AI-API |
| Image to Video | https://docs.livepeer.org/ai/api-reference/image-to-video | API reference | ✅ Migrate to resources/reference/AI-API |
| Audio to Text | https://docs.livepeer.org/ai/api-reference/ | API reference | ✅ Migrate to resources/reference/AI-API |

### SDK docs (v1)
| Page | URL | Content |
|---|---|---|
| JavaScript SDK | https://docs.livepeer.org/sdks/javascript | `livepeer` npm package — streams, assets, AI |
| Python SDK | https://docs.livepeer.org/sdks/python | `livepeer` PyPI package |
| React SDK | https://docs.livepeer.org/sdks/react | `@livepeer/react` — Player, Broadcast, hooks |
| React Native | https://docs.livepeer.org/sdks/react-native | Deprecated — redirect to react-native-video |
| Go SDK | https://docs.livepeer.org/sdks/go | `livepeer-go` — streams, assets |

---

## 2. GitHub repositories

### Core protocol
| Repo | URL | Stars | Relevance |
|---|---|---|---|
| go-livepeer | https://github.com/livepeer/go-livepeer | 582 | Protocol node — AI + video + BYOC |
| protocol | https://github.com/livepeer/protocol | 153 | Solidity smart contracts |
| lpms | https://github.com/livepeer/lpms | 283 | Media server library |

### SDKs and client libraries
| Repo | URL | Stars | Notes |
|---|---|---|---|
| livepeer-js | https://github.com/livepeer/livepeer-js | — | Studio SDK (TypeScript) `livepeer` npm v3.5.0 |
| livepeer-python | https://github.com/livepeer/livepeer-python | — | Studio SDK (Python) |
| livepeer-go | https://github.com/livepeer/livepeer-go | — | Studio SDK (Go) |
| livepeer-ai-js | https://github.com/livepeer/livepeer-ai-js | — | AI-specific TypeScript SDK (`@livepeer/ai`) |
| livepeer-ai-sdks | https://github.com/livepeer/livepeer-ai-sdks | — | DEPRECATED — auto-generated AI SDKs (old) |
| ui-kit | https://github.com/livepeer/ui-kit | 71 | React component library (`@livepeer/react` v4.3.2) |
| webrtmp-sdk | https://github.com/livepeer/webrtmp-sdk | — | DEPRECATED — replaced by Broadcast component |

### AI / real-time
| Repo | URL | Stars | Notes |
|---|---|---|---|
| ai-runner | https://github.com/livepeer/ai-runner | 24 | AI inference runtime (Python, FastAPI) — v0.14.1 |
| comfystream | https://github.com/livepeer/comfystream | — | Real-time ComfyUI video processing (main) |
| ComfyUI-Stream-Pack | https://github.com/livepeer/ComfyUI-Stream-Pack | 20 | Custom ComfyUI nodes for streaming |
| pytrickle | https://github.com/livepeer/pytrickle | 3 | Python framework for trickle protocol (BYOC bridge) |
| naap | https://github.com/livepeer/naap | 4 | Node as a Platform — plugin-based UI (Feb 2026) |

### Original ComfyStream (yondonfu)
| Repo | URL | Notes |
|---|---|---|
| comfystream (yondonfu) | https://github.com/yondonfu/comfystream | Original ComfyStream implementation — 65 stars |

### Community and examples
| Repo | URL | Stars | Notes |
|---|---|---|---|
| awesome-livepeer | https://github.com/livepeer/awesome-livepeer | 52 | Curated list of demos, tutorials, projects |
| docs | https://github.com/livepeer/docs | 43 | This documentation repo |

### Deprecated/archived repos
| Repo | URL | Notes |
|---|---|---|
| livepeer-monorepo | https://github.com/livepeer/livepeer-monorepo | ARCHIVED — old livepeer.js |
| livepeer-ai-sdks | https://github.com/livepeer/livepeer-ai-sdks | DEPRECATED — replaced by `@livepeer/ai` |

---

## 3. npm packages

| Package | URL | Version | Notes |
|---|---|---|---|
| `livepeer` | https://www.npmjs.com/package/livepeer | 3.5.0 | Studio SDK — streams, assets, AI |
| `@livepeer/react` | https://www.npmjs.com/package/@livepeer/react | 4.3.2 | React UI components — Player, Broadcast |
| `@livepeer/ai` | https://www.npmjs.com/package/@livepeer/ai | alpha | AI-specific SDK |
| `@livepeer/webrtmp-sdk` | https://www.npmjs.com/package/@livepeer/webrtmp-sdk | 0.2.5 | DEPRECATED |
| `@livepeer/react-native` | https://www.npmjs.com/package/@livepeer/react-native | 0.0.1 | DEPRECATED |
| `@livepeer/sdk` | https://www.npmjs.com/package/@livepeer/sdk | 1.0.1-alpha.5 | ARCHIVED — smart contract SDK |
| `@livepeer/video-nft` | https://www.npmjs.com/package/@livepeer/video-nft | — | Video NFT minting utility |

---

## 4. PyPI packages

| Package | URL | Notes |
|---|---|---|
| `livepeer` | https://pypi.org/project/livepeer/ | Studio Python SDK |
| `livepeer-ai` | https://pypi.org/project/livepeer-ai/ | AI-specific Python SDK (alpha) |

---

## 5. Official Livepeer platforms and APIs

| Resource | URL | Notes |
|---|---|---|
| Livepeer Studio | https://livepeer.studio | Hosted gateway / managed platform |
| Studio API Reference | https://livepeer.studio/docs or via docs | REST API for streams, assets, AI |
| Studio Pricing | https://livepeer.studio/pricing | Free / Growth ($100/mo) / Enterprise |
| AI Pipeline Landing | https://livepeer.studio/landing-page-ai | AI-focused signup page |
| Public AI Gateway | https://dream-gateway.livepeer.cloud | Free public AI gateway (not for production) |
| AI Pipeline Reference | https://www.livepeer.org/learn-about-pipelines | Pipeline overview (livepeer.org) |
| Status Page | https://status.livepeer.studio | Uptime and incident monitoring |
| ComfyStream dedicated docs | https://docs.comfystream.org | Separate docs site for ComfyStream |

---

## 6. Livepeer blog — developer-relevant posts

| Title | URL | Date | Relevance |
|---|---|---|---|
| ComfyUI and Real-Time Video AI Processing | https://blog.livepeer.org/comfyui-and-real-time-video-ai-processing/ | 2024 | ComfyStream architecture and pipelines |
| Building Real-Time AI Video Effects with ComfyStream | https://blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ | 2025 | Pipeline diagrams, worked examples |
| Introducing Daydream | https://blog.livepeer.org/introducing-daydream/ | 2025 | Consumer product built on ComfyStream |
| Daydream.live: A Glimpse into the Future | https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/ | 2025 | Real-time AI use case |
| A Real-time Update to the Livepeer Network Vision | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ | Nov 2025 | AI-first mission statement |
| Builder Story: dotsimulate x Daydream | https://blog.livepeer.org/builder-story-dotsimulate-x-daydream/ | 2025 | Developer success story |
| Streamplace: Building the Video Backbone of Decentralized Social | https://blog.livepeer.org/livepeer-onchain-builders-streamplace-building-the-video-backbone-of-decentralized-social/ | 2025 | Builder case study |
| Why Delegation Still Matters in a Low-Inflation Environment | https://blog.livepeer.org/why-delegation-still-matters-in-a-low-inflation-environment/ | Jul 2025 | Token/economics — not developer-specific |

---

## 7. Forum and community

### Key developer forum threads
| Thread | URL | Date | Content |
|---|---|---|---|
| AI SPE Phase 4 Retrospective | https://forum.livepeer.org/t/ai-spe-phase-4-retrospective/3208 | Feb 2026 | BYOC, ComfyStream, PyTrickle, MuxionLabs deliverables |
| ComfyStream SD1.5 Workflow Performance Tuning | https://forum.livepeer.org/t/comfystream-sd1-5-workflow-performance-tuning/2756 | 2024 | Performance optimisation — CPU bottleneck analysis |
| ComfyStream Input / Output | https://forum.livepeer.org/t/comfystream-input-output/2719 | 2024 | I/O architecture technical discussion |
| [Agent SPE] Agent-Net Incentives Release | https://forum.livepeer.org/t/agent-spe-agent-net-incentives-release/2958 | 2025 | AI agent integration — payment mechanics |
| Inflation Focused LIP Discussion Thread | https://forum.livepeer.org/t/inflation-focused-lip-discussion-thread/2753 | 2025 | Economic context (not developer-specific) |

### Community programmes
| Programme | URL | Notes |
|---|---|---|
| Encode Club Real-Time Video AI Bootcamp | https://www.encode.club/real-time-video-ai-bootcamp | Q1 2025 — multi-week structured curriculum. ComfyUI → SD1.5 → ControlNet → LoRA |
| ComfyUI Live Video Hacker Program | https://www.livepeer.org/comfyui-live-video-hacker-program | Jan-Feb 2025 — two cohorts, grants for open-sourcing workflows |
| Agent SPE — $100 per AI Agent | https://mirror.xyz/agent-spe.eth/oxs8VxEvKN88IeTwD-YQMucoDGqfNRz_mIlbUKkwOTg | 2025 — incentivised AI agent development |

---

## 8. Community tutorials (Mirror.xyz, third-party)

| Title | URL | Date | Quality | Notes |
|---|---|---|---|---|
| Earn $100 Building an AI Agent with Livepeer (Eliza) | https://mirror.xyz/agent-spe.eth/oxs8VxEvKN88IeTwD-YQMucoDGqfNRz_mIlbUKkwOTg | 2025 | ✅ Current | Full working Eliza AI agent tutorial — character JSON, env setup, pnpm commands |
| How to Use Livepeer.js | https://mirror.xyz/longtake.eth/ptluM5nQZLmXPFwZlSo6h9VfWk8SKHZZErtQlukASJ4 | 2022 | ⚠️ Outdated | Old livepeer.js — API patterns deprecated |
| The Developer's Guide to Getting Started with Livepeer | https://mirror.xyz/camiinthisthang.eth/4PAZ-UUc_yJCpwU2pc_17DzxdoI-eJBScj3dcaoEgxk | 2022 | ⚠️ Outdated | Pre-AI pivot, old architecture |

---

## 9. Third-party integrations with tutorials

| Platform | URL | Content | Quality |
|---|---|---|---|
| SwarmZero — YouTube Video Generator Swarm | https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm | Full Python tutorial — AI agent swarm using text-to-image and image-to-video APIs | ✅ Current |
| Eliza (ai16z) — Livepeer Plugin | https://github.com/elizaos/eliza | AI agent framework with Livepeer plugin | ✅ Current |

---

## 10. Notion — internal planning documents

| Document | URL / ID | Notes |
|---|---|---|
| Developers Tab IA Proposal | https://www.notion.so/31d660222d0881bab618fca47dd5f50c | Locked decisions, section structure, gap list |
| Discussion on personas | https://www.notion.so/2cc660222d088191b242f1d510b97e1f | Ecosystem persona mapping |
| Persona Tabs | https://www.notion.so/2cc660222d0881339107d9208686aeab | Old tabs design analysis |
| Developer IA Prerequisite pack | Referenced in index.md — `developers-ia-prereq.md` | Internal context pack |
| Agreed IA (canonical) | Notion page ID: 31e660222d0881aeb656d8c27a9753d5 | Referenced in project memory |

---

## 11. Workflow tooling and OpenAPI

| Resource | URL / Path | Notes |
|---|---|---|
| AI API OpenAPI spec | `gen_openapi.py` in ai-runner repo → `openapi_gateway.json` | Auto-generated from FastAPI routes |
| Go client codegen | `make ai_worker_codegen` in go-livepeer | Generates Go bindings from OpenAPI |
| AI API Reference (v2 docs) | `v2/gateways/resources/technical/api-reference/AI-API/ai` | Mounted as OpenAPI reference |
| Speakeasy (SDK generator) | https://speakeasyapi.dev | Tool used to auto-generate all SDKs |
| DeepWiki | https://deepwiki.com/livepeer | AI-generated code knowledge base for go-livepeer |

---

## 12. Confidence and currency assessment

| Source type | Currency | Confidence |
|---|---|---|
| v2 docs (docs-v2-dev branch) | March 2026 | ✅ High — primary source |
| ai-runner GitHub | December 2025 (v0.14.1) | ✅ High |
| go-livepeer GitHub | March 2026 (v0.8.10) | ✅ High |
| Studio SDK npm (`livepeer` 3.5.0) | 2025 | ✅ High |
| AI SDK npm (`@livepeer/ai`) | Alpha / October 2025 | ✅ High |
| Livepeer blog | 2025 | ✅ High |
| Forum posts (Phase 4 retrospective) | February 2026 | ✅ High |
| Encode Club bootcamp | Q1 2025 | ✅ High — well documented |
| SwarmZero tutorial | 2025 | ✅ High |
| Eliza AI agent tutorial | 2025 | ✅ High |
| v1 developer guides | 2022-2024 | ⚠️ Medium — API patterns current, SDK examples outdated |
| v1 tutorials | 2022-2023 | ⚠️ Medium — content valid, SDK calls need updating |
| Mirror.xyz community tutorials | 2022-2023 | 🔴 Low — pre-AI-pivot, old livepeer.js |
| @muxionlabs/byoc-sdk | Referenced in docs, not in public npm | ⚠️ Uncertain — may be private |
| pytrickle | July 2025, 3 stars, 20 open issues | ✅ Exists / ⚠️ Early stage |
| NaaP (naap repo) | February 2026, 4 stars | ⚠️ Very early — not yet documented |
