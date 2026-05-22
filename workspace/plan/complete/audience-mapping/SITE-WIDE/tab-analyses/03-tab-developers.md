# Developers tab: audience analysis and gap report

Tab path: `v2/developers/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The AI Application Builder

**Who they are:** A software developer who wants to use Livepeer's GPU compute network to power AI inference in their application. They may be building a real-time AI video product (most likely in 2025-2026), a batch inference pipeline, or integrating AI into an existing streaming workflow. They have Python, TypeScript, or Go experience. They are comfortable with REST APIs and SDKs.

Their arrival context is almost always AI-first: they found Livepeer through ComfyUI, Daydream, an AI hackathon (Encode Club, ChatandBuild), or a search for "decentralised AI inference" / "GPU API open source."

**What they need from this tab:**
1. Immediate credibility: can I actually use this right now?
2. A clear first call: one request that works, showing the system is real
3. Understanding of what they can build: the full surface of available pipelines and APIs
4. A decision tree: Studio API vs self-hosted gateway vs BYOC vs ComfyStream — which path fits their use case?
5. Production path: how do I go from a working demo to a deployed application?

**Their top frustration points (from forum/Discord evidence):**
- AI models sometimes don't respond; unclear if it's the network or their integration
- No clear "here is the difference between Studio API and direct gateway access"
- ComfyStream setup is not linear — requires ComfyUI knowledge assumed but not explained
- BYOC documentation existed in go-livepeer repo but no central explainer of the full model

---

## 2. Secondary visitor personas

**The video transcoding developer:** Has an existing video/streaming application and wants to offload transcoding to Livepeer. Uses the Studio SDK. This was the original developer persona but is no longer the growth segment. Still needs serving — the transcoding quickstart and Studio SDK docs are critical for them.

**The OSS protocol contributor:** Wants to contribute to go-livepeer, ai-worker, or the AI pipeline stack. Needs: contribution guide, testnet setup, local deployment guide, understanding of repo structure. This persona is small in number but high in value.

**The hackathon participant:** Has 24-48 hours. Needs to get something working fast. Will not read deeply — needs quickstart + one working example. Will give up if the first call doesn't work.

**The developer evaluating infrastructure:** Comparing Livepeer AI to Replicate, Runpod, Modal, or AWS SageMaker. Needs: what pipelines are supported, what latency looks like, how pricing compares, what happens when the network is under load. This evaluation often happens without writing code.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (3.5KB) — tab index
- `portal.mdx` (5.3KB) — exists but confirm portal functionality
- `developer-journey.mdx` (13.6KB) — unique page, not in canonical template
- `developer-tools/` — directory (contents not confirmed separately)

### concepts/
- `ai-on-livepeer.mdx` (8.7KB) — ✅ strong conceptual anchor
- `developer-stack.mdx` (10.6KB) — ✅ explains all access layers
- `oss-stack.mdx` (8.1KB) — ✅ open source repos and relationships
- `running-a-gateway.mdx` (5.7KB) — developer perspective on gateway access
- `video-on-livepeer.mdx` (570 bytes) — 🔴 STUB

### get-started/ (maps to canonical quickstart/)
- `ai-quickstart.mdx` (5.6KB) — ✅ AI jobs quickstart
- `transcoding-quickstart.mdx` (6.3KB) — ✅ transcoding quickstart
- `comfystream-quickstart.mdx` (10.8KB) — ✅ ComfyStream quickstart
- `contributor-quickstart.mdx` (2.6KB) — ✅ OSS contributor path
- `setup-paths.mdx` (557 bytes) — 🔴 STUB — the routing page between quickstarts
- `video-quickstart.mdx` (580 bytes) — 🔴 STUB

### build/
- `byoc.mdx` (12.8KB) — ✅ BYOC integration guide
- `comfystream.mdx` (12.5KB) — ✅ ComfyStream setup guide
- `model-support.mdx` (10.2KB) — ✅ what models/pipelines are supported
- `sdk-gateway.mdx` (1.8KB) — ⚠️ very short for a critical concept
- `workload-fit.mdx` (8.9KB) — ✅ decision guide: which path for my use case

### guides/
- `developer-guides.mdx` (13.4KB) — overview/hub page for guides
- `developer-help.mdx` (11.9KB) — Discord, forum, support channels
- `contribution-guide.mdx` (11.3KB) — contributing to OSS
- `local-testnet-deployment.mdx` (10.5KB) — local dev environment
- `testnet-contract-deployment.mdx` (19.1KB) — advanced: deploying contracts to testnet
- `resources.mdx` (14.1KB) — curated resources

### opportunities/
- `overview.mdx` (6.5KB) — overview of economic opportunities for builders
- `grants-and-programmes.mdx` (12.1KB) — Foundation grants, Encode Club, ChatandBuild
- `bug-bounties.mdx` (8.7KB) — bug bounty programme
- `oss-contributions.mdx` (13.9KB) — contributing to protocol codebases
- `rfps-and-proposals.mdx` (10.7KB) — open RFPs and proposal process

### technical-references/ (appears to be legacy — content migrated to resources/)
- `apis.mdx`, `awesome-livepeer.mdx`, `deepwiki.mdx`, `sdks.mdx`, `wiki.mdx` — all ~700-800 bytes

### resources/
- `apis.mdx` (1.8KB) — API reference index
- `sdks.mdx` (1.7KB) — SDK index
- `awesome-livepeer.mdx` (987 bytes) — community resource list
- `deepwiki.mdx` (1.4KB) — DeepWiki link
- `example-applications.mdx` (1.7KB) — example apps index
- `wiki.mdx` (841 bytes) — wiki link
- `compendium/` — directory (confirm contents)

---

## 4. Gap analysis

### 4.1 Critical gaps — what blocks a developer from succeeding

**`setup-paths.mdx` is a stub (557 bytes) — it is the routing page**
This page is likely linked from the portal as "choose your path." If it is empty, developers arriving at the get-started section have no orientation. The four quickstarts exist but the reader has no way to choose between them without this page.
- Action: Full content needed. Should answer: "I want to call an AI pipeline → AI Quickstart; I want to transcode video → Transcoding Quickstart; I want to build with ComfyUI → ComfyStream Quickstart; I want to contribute code → Contributor Quickstart"

**`video-quickstart.mdx` is a stub (580 bytes)**
The transcoding/video developer persona has a quickstart (`transcoding-quickstart.mdx`) but the `video-quickstart.mdx` stub is orphaned and confusing. Either it should be fully written (if it covers a different path than transcoding) or removed and the transcoding quickstart promoted.

**`video-on-livepeer.mdx` is a stub (570 bytes)**
This is the conceptual anchor for the video/transcoding developer. Without it, there is no conceptual introduction to the video pathway — only the quickstart. The AI path has `ai-on-livepeer.mdx` (8.7KB); the video path has nothing equivalent.
- Action: Full content needed, paralleling `ai-on-livepeer.mdx`

**`sdk-gateway.mdx` is critically short (1.8KB) for its importance**
This page explains the relationship between the gateway SDK and direct gateway access — arguably the most important architectural decision a developer makes. At 1.8KB it cannot be doing its job. The reader needs: what the SDK provides, how it differs from the REST API, when to use each, a code example.
- Action: Expand significantly. Should be comparable to `workload-fit.mdx` in depth.

**No page explaining PyTrickle or the @muxionlabs/byoc-sdk**
Phase 4 (H2 2025) shipped two new developer-facing packages: `@muxionlabs/byoc-sdk` (TypeScript, browser-to-gateway BYOC with React hooks) and PyTrickle (Python package to participate as an AI worker). These are documented in the AI SPE Phase 4 retrospective but are absent from the Developers tab.
- Canonical location: Content in `build/byoc.mdx` (expand existing BYOC page) plus SDK entries in `resources/sdks.mdx`

**No "how do I know if the network is up / what to do when jobs fail?" page**
Forum and Discord evidence shows developers hit reliability issues — AI models not responding, needing manual orchestrator reboots. There is no troubleshooting page for developers. `developer-help.mdx` points to Discord channels but there is no self-service troubleshooting guide.
- Canonical location: `v2/developers/guides/troubleshooting.mdx` or a section in `developer-help.mdx`

**NaaP (Node as a Platform) is completely undocumented**
NaaP (`pipelines.livepeer.org`) is a new plugin-based platform launched February 2026. It uses a micro-frontend architecture with 12 plugins for orchestrator-node extensibility. This is a developer-facing surface with no documentation in the Developers tab.
- Note: May be too early-stage for production docs. Flag with Rick/Peter for guidance on whether to document or hold.

### 4.2 Structural issues

**`technical-references/` and `resources/` have overlapping content**
`technical-references/` contains `apis.mdx`, `sdks.mdx`, `deepwiki.mdx`, `wiki.mdx`, `awesome-livepeer.mdx` — all short stubs. `resources/` contains the same content types with more substance. These are duplicates at different development stages. The `technical-references/` files appear to be the old location; `resources/` is the new canonical location.
- Action: Confirm which is live in docs.json nav. Remove or redirect the stale set. Do NOT do this without checking docs.json routing.

**`opportunities/` is a non-canonical section**
The canonical IA does not include an `opportunities/` section. Currently this section houses grants, bug bounties, OSS contributions, and RFPs. This content is valuable but does not fit any canonical position.
- Decision needed: Does `opportunities/` stay as a custom section (acceptable exception) or does it collapse into `guides/` or `resources/`? Current recommendation: keep as a custom section, clearly positioned after the core build journey, not before it.

**`guides/` is mixed content type**
Currently contains: a guides hub page, a developer help/support page, a contribution guide (OSS persona), a local testnet guide (advanced OSS/contributor), a testnet contract deployment guide (very advanced), and a resources page. These serve different personas at different stages. The guides section needs reorganisation:
- Operational guides (for AI application builders): separate from
- OSS/protocol contributor guides (for contributors): separate from
- Support/help resources

### 4.3 Journey step analysis — the AI Application Builder path

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | Can I actually use this now? | `portal.mdx` | ⚠️ confirm portal content quality |
| 2 | What can I build with Livepeer AI? | `concepts/ai-on-livepeer.mdx` | ✅ good |
| 3 | What path is right for me? | `build/workload-fit.mdx` | ✅ good |
| 4 | Make my first API call | `get-started/ai-quickstart.mdx` | ✅ good |
| 5 | Understand the full stack | `concepts/developer-stack.mdx` | ✅ good |
| 6 | Use the SDK | `resources/sdks.mdx` (1.7KB) | ⚠️ too thin |
| 7 | Deploy with BYOC | `build/byoc.mdx` | ✅ good |
| 8 | Use ComfyStream | `build/comfystream.mdx` | ✅ good |
| 9 | What models are available? | `build/model-support.mdx` | ✅ good |
| 10 | My job isn't responding, what now? | Nothing | 🔴 MISSING |
| 11 | How do I go to production? | Nothing | 🔴 MISSING |

Steps 10 and 11 are completely absent. The "hello world" to production path has no guidance after the build phase.

### 4.4 Journey step analysis — the video transcoding developer

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | What can I do with Livepeer for video? | `concepts/video-on-livepeer.mdx` | 🔴 STUB |
| 2 | Make my first transcoding call | `get-started/transcoding-quickstart.mdx` | ✅ good |
| 3 | What's the Studio API? | Likely `resources/apis.mdx` | ⚠️ thin |
| 4 | SDK integration | `resources/sdks.mdx` | ⚠️ thin |

The video path is significantly underserved compared to the AI path. Step 1 is a stub.

---

## 5. Recommended IA for Developers tab

The Developers tab requires a hybrid IA — standard positions 1-3 apply (portal, concepts, quickstart), but positions 4-6 need custom treatment to handle the AI vs video split and the opportunities section.

```
v2/developers/
├── portal.mdx                          ⚠️  confirm content quality
├── index.mdx                           ✅ (routing)
├── developer-journey.mdx               ✅ (keep as unique page — valuable)
│
├── concepts/
│   ├── ai-on-livepeer.mdx              ✅ strong
│   ├── video-on-livepeer.mdx           🔴 STUB — must write
│   ├── developer-stack.mdx             ✅ strong
│   ├── oss-stack.mdx                   ✅ good
│   └── running-a-gateway.mdx           ✅ good
│
├── get-started/                        (maps to quickstart/ in canonical)
│   ├── setup-paths.mdx                 🔴 STUB — routing page, must write
│   ├── ai-quickstart.mdx               ✅ strong
│   ├── transcoding-quickstart.mdx      ✅ good
│   ├── comfystream-quickstart.mdx      ✅ good
│   ├── contributor-quickstart.mdx      ✅ good
│   └── video-quickstart.mdx            ⚠️  either write or remove (resolve with transcoding-qs)
│
├── build/                              (maps to setup/ + guides/ in canonical)
│   ├── workload-fit.mdx                ✅ strong
│   ├── byoc.mdx                        ✅ good — expand with byoc-sdk + PyTrickle
│   ├── comfystream.mdx                 ✅ good
│   ├── model-support.mdx               ✅ good
│   └── sdk-gateway.mdx                 ⚠️  critically thin — must expand
│
├── guides/
│   ├── developer-guides.mdx            ✅ hub page
│   ├── developer-help.mdx              ✅ good
│   ├── troubleshooting.mdx             🔴 MISSING — must create
│   ├── production-checklist.mdx        🔴 MISSING — must create
│   ├── contribution-guide.mdx          ✅ good (OSS persona)
│   ├── local-testnet-deployment.mdx    ✅ good (OSS persona)
│   └── testnet-contract-deployment.mdx ✅ good (advanced)
│
├── opportunities/                      (custom section — keep, do not collapse)
│   ├── overview.mdx                    ✅ good
│   ├── grants-and-programmes.mdx       ✅ good
│   ├── bug-bounties.mdx                ✅ good
│   ├── oss-contributions.mdx           ✅ good
│   └── rfps-and-proposals.mdx          ✅ good
│
└── resources/
    ├── apis.mdx                        ⚠️  thin but functional
    ├── sdks.mdx                        ⚠️  thin — needs expansion
    ├── example-applications.mdx        ⚠️  thin
    ├── awesome-livepeer.mdx            ✅ functional
    ├── deepwiki.mdx                    ✅ functional
    ├── wiki.mdx                        ✅ functional
    └── compendium/                     ⚠️  confirm contents

REMOVE (after docs.json audit):
└── technical-references/               ⚠️  duplicate of resources/ — schedule removal
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
