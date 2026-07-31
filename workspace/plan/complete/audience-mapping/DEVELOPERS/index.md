AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| canonical-developers-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/developers/collated/` | Audience, Persona, Journey, IA |
| collation-notes-developers.md | `...developers/collated/` | Prompt/Skill |
| agent-v5, chatgpt-v4, claude-webv4 | `...developers/zero-context-ai-results/` | Audience, Persona, Journey, IA |
| glossary-developers.md | `...developers/input-pack/` | Content |
| v4.md (learnings) | `...developers/learnings/` | Prompt/Skill |
| developers-content-scan.md | `CONTENT-WRITING/context-packs/` | Content, IA |
| developers-research-pack.md | `CONTENT-WRITING/context-packs/` | Content |
| developers-v1-content.md | `CONTENT-WRITING/context-packs/` | Content |
| developers-full-content.md | `CONTENT-WRITING/context-packs/` | Content |
| developers-ia-prereq.md | `CONTENT-WRITING/context-packs/` | IA |
| collated/developers/ (7 files) | `CONTENT-WRITING/collated/developers/` | Audience, IA |
| developer-journey.mdx | `v2/developers/` | Journey, Content |
| portal.mdx | `v2/developers/` | Content |
| journey-mapping.mdx (archive) | `v2/developers/_workspace/archive/` | Journey |
| developer-journey-3path.mdx (archive) | `v2/developers/_workspace/archive/` | Journey |
| personas.mdx | `v2/internal/overview/` | Persona |
| 03-tab-developers.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `developer`

| Arriving type | Entry vector | Arriving state | Routing need |
|---|---|---|---|
| **AI application builder** | ComfyUI, Daydream, AI hackathon, search "decentralised AI inference" / "GPU API open source" | Python/TS/Go experience, REST API comfort; AI-first arrival context | Stays — primary persona |
| **Video transcoding developer** | Search "Livepeer video API" / "transcoding SDK"; Studio migration | Has existing video/streaming app, wants to offload transcoding | Stays — secondary persona |
| **OSS protocol contributor** | GitHub, forum, "contribute to Livepeer" | Wants to contribute to go-livepeer, ai-worker, AI pipeline stack | Stays — needs contribution guide, testnet, repo structure |
| **Hackathon participant** | Encode Club, ChatandBuild, hackathon brief | Has 24-48 hours. Will not read deeply. Needs quickstart + one working example | Stays briefly — gives up if first call doesn't work |
| **Developer evaluating infrastructure** | Comparing Livepeer AI to Replicate, Runpod, Modal, AWS SageMaker | Wants pipeline list, latency, pricing comparison, load behaviour | May not write code — evaluation-only visit |
| **Gateway operator graduating** | From Developers `concepts/running-a-gateway.mdx` | Decided to run own gateway | Routes to Gateways tab |

### Arriving question

> "Can I use this right now, and what does my first API call look like?"

---

# PERSONAS — Who this tab actually serves

### Source: 03-tab-developers.md (process analysis)

**Primary persona: The AI Application Builder**

A software developer who wants to use Livepeer's GPU compute network to power AI inference in their application. May be building real-time AI video (most likely 2025-2026), batch inference, or integrating AI into existing streaming workflow. Has Python, TypeScript, or Go experience. Comfortable with REST APIs and SDKs.

Arrival context almost always AI-first: ComfyUI, Daydream, AI hackathon, or search for "decentralised AI inference."

**What they need from this tab:**
1. Immediate credibility: can I actually use this right now?
2. A clear first call: one request that works, showing the system is real
3. Understanding of what they can build: full surface of available pipelines and APIs
4. A decision tree: Studio API vs self-hosted gateway vs BYOC vs ComfyStream — which path fits?
5. Production path: how to go from working demo to deployed application

**Top frustration points (forum/Discord evidence):**
- AI models sometimes don't respond; unclear if network or integration issue
- No clear "here is the difference between Studio API and direct gateway access"
- ComfyStream setup is not linear — requires ComfyUI knowledge assumed but not explained
- BYOC documentation existed in go-livepeer repo but no central explainer

**Secondary personas:**

| Persona | Who | What they need from this tab |
|---|---|---|
| **The Video Transcoding Developer** | Has existing video/streaming app, wants to offload transcoding to Livepeer. Uses Studio SDK. Original developer persona but no longer growth segment | Video concept page (currently 570-byte STUB), transcoding quickstart, Studio SDK docs |
| **The OSS Protocol Contributor** | Wants to contribute to go-livepeer, ai-worker, or AI pipeline stack. Small number, high value | Contribution guide, testnet setup, local deployment guide, repo structure understanding |
| **The Hackathon Participant** | Has 24-48 hours. Needs to get something working fast | Quickstart + one working example. Will give up if first call doesn't work |
| **The Infrastructure Evaluator** | Comparing Livepeer to Replicate, Runpod, Modal, SageMaker. Evaluation may happen without writing code | Pipeline list, latency data, pricing comparison, load behaviour |

### Source: canonical (2-run synthesis)

| Rank | Persona | Score | Consensus |
|---|---|---|---|
| 1 | API integrator / Fast Feature Shipper | **9** | 2/2 |
| 2 | Interactive Media Builder (real-time, latency-sensitive) | **8** | 2/2 |
| 3 | Custom Model Porter (has model/container, needs packaging) | **8** | 2/2 |
| 4 | Protocol integrator / toolmaker | **5-6** | 2/2 |

Critical: "developer" does NOT route to one path — requires S1 disambiguation. 4 materially different arriving states with different SDKs and success criteria.

### Source: v2/internal/overview/personas.mdx

Developer = "any builder writing software/infra/contracts consuming/extending Livepeer." Maps developer modes to concrete roles:
- Via hosted gateways → Application Developer
- Via self-hosted → Gateway Operator
- Via protocol contracts → Protocol Developer

5-stage builder journey: Awareness → Orientation → Activation → Progression → Hero (stewardship). May be aspirational — requires sourcing before Phase 1 execution.

---

# JOURNEYS — What each persona needs to accomplish through this tab

## The AI Application Builder's journey

**Source**: 03-tab-developers.md

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | Can I actually use this now? | `portal.mdx` | ⚠️ confirm portal content quality |
| 2 | What can I build with Livepeer AI? | `concepts/ai-on-livepeer.mdx` (8.7KB) | ✅ good |
| 3 | What path is right for me? | `build/workload-fit.mdx` (8.9KB) | ✅ good |
| 4 | Make my first API call | `get-started/ai-quickstart.mdx` (5.6KB) | ✅ good |
| 5 | Understand the full stack | `concepts/developer-stack.mdx` (10.6KB) | ✅ good |
| 6 | Use the SDK | `resources/sdks.mdx` (1.7KB) | ⚠️ too thin |
| 7 | Deploy with BYOC | `build/byoc.mdx` (12.8KB) | ✅ good |
| 8 | Use ComfyStream | `build/comfystream.mdx` (12.5KB) | ✅ good |
| 9 | What models are available? | `build/model-support.mdx` (10.2KB) | ✅ good |
| 10 | My job isn't responding, what now? | Nothing | 🔴 **MISSING** |
| 11 | How do I go to production? | Nothing | 🔴 **MISSING** |

**Steps 10 and 11 completely absent.** The "hello world" to production path has no guidance after the build phase.

## The Video Transcoding Developer's journey

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | What can I do with Livepeer for video? | `concepts/video-on-livepeer.mdx` (570 bytes) | 🔴 **STUB** |
| 2 | Make my first transcoding call | `get-started/transcoding-quickstart.mdx` (6.3KB) | ✅ good |
| 3 | What's the Studio API? | `resources/apis.mdx` (1.8KB) | ⚠️ thin |
| 4 | SDK integration | `resources/sdks.mdx` (1.7KB) | ⚠️ thin |

**Video path significantly underserved compared to AI path.** Step 1 is a stub.

## Canonical ideal journey (8 stages)

| Position | Stage | lifecycleStage |
|---|---|---|
| 1 | Discover — find the right build track | `discover` |
| 2 | Evaluate — map the surface they're building against | `evaluate` |
| 3 | Setup — get first working request | `setup` |
| 4 | Build (video) — implement live/VOD pipeline | `build` |
| 5 | Build (AI) — implement AI pipeline | `build` |
| 6 | Build (advanced) — real-time or custom (PyTrickle/BYOC) | `build` |
| 7 | Operate — verify, troubleshoot, optimize | `operate` |
| 8 | Optimize — understand protocol | `optimise` |

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I found Livepeer and want to build | know immediately if this works and what my first call looks like | decide in one session whether to integrate |
| J2 | I need to choose between Studio/self-hosted/BYOC/ComfyStream | understand each path's trade-offs, requirements, and limits | choose correctly before writing code |
| J3 | I'm building and need the SDK/API | find the right package, see a working example, understand the interface | integrate without guessing at the API surface |
| J4 | My integration isn't working | diagnose whether it's my code, the network, or a model issue | fix the problem or know who to ask |
| J5 | I want to go to production | know what production readiness looks like | ship without discovering problems in production |

---

# IA — All section structures found

## Canonical 9-section structure (2-run synthesis)

| # | Section | purpose | pageType |
|---|---|---|---|
| S1 | Choose your build track | `orient` | `navigation` |
| S2 | Map the surface | `explain` | `concept` |
| S3 | Get first working result | `start` | `tutorial` |
| S4 | Build application video flows | `build` | `tutorial` |
| S5 | Build application AI flows | `build` | `tutorial` |
| S6 | Extend into real-time/custom | `build` | `guide` |
| S7 | Monitor, troubleshoot, verify | `troubleshoot` | `guide` |
| S8 | Understand the protocol | `explain` | `concept` |
| S9 | SDK, API, protocol reference | `reference` | `reference` |

**Design flags**: S6 may split (real-time vs custom — ChatGPT confirmed by splitting into 2). S7 may split (verify/diagnose/tune). Auth/events section placement undecided.

## ChatGPT v4 run — 12 sections

Splits S6 into "Build live interactive media loop" (S6) + "Bring your own model" (S7). Splits post-build into verify/diagnose/tune (S10-S12). Adds auth/events section (S9).

## Current live v2/developers/ structure

```
v2/developers/
├── portal.mdx                          ⚠️ confirm content quality
├── developer-journey.mdx (13.6KB)      ✅ unique page — 5 tabs (video, AI, gateway, GPU, protocol)
├── concepts/
│   ├── ai-on-livepeer.mdx (8.7KB)      ✅ strong
│   ├── video-on-livepeer.mdx (570B)    🔴 STUB
│   ├── developer-stack.mdx (10.6KB)    ✅ strong
│   ├── oss-stack.mdx (8.1KB)           ✅ good
│   └── running-a-gateway.mdx (5.7KB)   ✅ good (handoff to Gateways tab)
├── get-started/
│   ├── setup-paths.mdx (557B)          🔴 STUB — routing page, must write
│   ├── ai-quickstart.mdx (5.6KB)       ✅ strong
│   ├── transcoding-quickstart.mdx (6.3KB) ✅ good
│   ├── comfystream-quickstart.mdx (10.8KB) ✅ good
│   ├── contributor-quickstart.mdx (2.6KB) ✅ good
│   └── video-quickstart.mdx (580B)     🔴 STUB — resolve with transcoding-qs
├── build/
│   ├── workload-fit.mdx (8.9KB)        ✅ strong
│   ├── byoc.mdx (12.8KB)              ✅ good — needs byoc-sdk + PyTrickle
│   ├── comfystream.mdx (12.5KB)        ✅ good
│   ├── model-support.mdx (10.2KB)      ✅ good
│   └── sdk-gateway.mdx (1.8KB)         ⚠️ critically thin — must expand
├── guides/
│   ├── developer-guides.mdx (13.4KB)   ✅ hub
│   ├── developer-help.mdx (11.9KB)     ✅ good
│   ├── troubleshooting.mdx             🔴 MISSING — must create
│   ├── production-checklist.mdx        🔴 MISSING — must create
│   ├── contribution-guide.mdx (11.3KB) ✅ good (OSS)
│   ├── local-testnet-deployment.mdx (10.5KB) ✅ good (OSS)
│   └── testnet-contract-deployment.mdx (19.1KB) ✅ good (advanced)
├── opportunities/ (custom section — keep)
│   ├── overview, grants-and-programmes, bug-bounties, oss-contributions, rfps-and-proposals
└── resources/
    ├── apis.mdx, sdks.mdx              ⚠️ thin
    ├── example-applications, awesome-livepeer, deepwiki, wiki ✅ functional
    └── technical-references/            ⚠️ duplicate of resources/ — schedule removal
```

28 pages in nav. 12 draft, 6 current, 11 deprecated pageType, 24 incomplete frontmatter. 13 orphan files.

---

# OPEN ITEMS & BLOCKING DECISIONS

1. **BLOCKING — S6 split decision**: Real-time vs custom compute — 1 section or 2? ChatGPT confirmed split. Affects section count (9 vs 10+).
2. **NON-BLOCKING — Auth/events section**: Dedicated section or within build sections?
3. **NON-BLOCKING — Studio vs self-hosted disambiguation**: Decision framework in S1 not yet specified.
4. **CRITICAL CONTENT GAPS**: troubleshooting.mdx (🔴 missing), production-checklist.mdx (🔴 missing), video-on-livepeer.mdx (🔴 stub), setup-paths.mdx (🔴 stub), video-quickstart.mdx (🔴 stub), sdk-gateway.mdx (critically thin), PyTrickle/byoc-sdk undocumented, NaaP undocumented.

# RESEARCH GAP — Missing Personas

- **The Hackathon Participant** — identified in process notes but not given a journey or section structure. Their needs (24-48 hour constraint, one working example) may need a dedicated "speed run" quickstart or a curated hackathon landing page.
- **The Infrastructure Evaluator** — comparing Livepeer to centralised alternatives without writing code. No evaluation/comparison content exists. This persona may need a decision matrix page.
