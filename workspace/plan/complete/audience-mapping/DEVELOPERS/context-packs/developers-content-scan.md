# Developers — Content Scan

**Tab**: Developers
**Scan date**: 2026-03-23
**Docs.json source**: v2 navigation block
**v2/developers/ folder scanned**: yes
**Status**: DRAFT — awaiting human review

---

## Summary

**Total pages in docs.json navigation**: 28
**Files found on disk**: 28 (all 28 nav paths exist on disk)
**Empty (in nav, no file)**: 0
**Stubs (<100 words)**: 10
**Draft (draft: true)**: 12
**Current**: 6
**Pages with deprecated pageType values**: 11
**Pages with incomplete frontmatter**: 24
**Workspace artefacts listed**: 72 (approximate — see section below)

---

## Page Inventory

---

### Developer Portal · `v2/developers/portal`

**Status**: current
**Section/group**: Hub
**File size**: ~5.5 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Developer Portal | yes |
| description | Welcome To The Developer Portal: Explore, Build, Create | yes |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated — canonical replacement is `navigation`. `purpose: landing` is deprecated — canonical replacement is `orient`. `lifecycleStage` field missing entirely.

**Heading structure**:
- No H1 heading found in body (page uses custom MDX components `PortalHeroContent` for title rendering — title is component-rendered, not a markdown heading)
- No H2 or H3 headings in body (navigation links only via `Card` components)

**Content summary**:
This is the tab entry point / portal page for the Developers tab. It serves first-time visitors arriving at the Developers section by providing a hero introduction and routing cards to the four main entry paths: Stream Video, Run AI Pipelines, Discover Developer Platforms, and Build on Livepeer. It sits at the beginning of the reader journey and its primary job is orientation and routing, not instruction.

---

### Developer Journey · `v2/developers/developer-journey`

**Status**: current
**Section/group**: Hub
**File size**: ~10.5 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Developer Journey | yes |
| description | Find your path on Livepeer — whether you want to build video apps, run AI pipelines, operate a gateway, or contribute to the protocol. Start here. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is a deprecated alias — canonical replacement is `explain`. However, this page's actual job is closer to `orient` or `choose` (it routes readers by builder type). `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: Start here in 5 minutes
- H2: What do you want to build? (contains tabs: "I want to add video to my app", "I want to run AI on video", "I want to run a gateway", "I want to contribute GPU compute", "I want to extend the protocol")
- H2: Three ways to go deeper
- H3: Workload Provider
- H3: Workload Consumer
- H3: Core Contributor
- H2: Zero-to-Hero Progression
- H2: Not sure yet? Browse by use case

**Content summary**:
This is the primary reader-routing page for the Developers tab. It answers the arriving question "which Livepeer path fits what I want to build?" by presenting five build tracks in tabbed form (video, AI on video, gateway, GPU compute, protocol extension) each with a clear first action and CTAs. It also maps three long-term developer archetypes (Workload Provider, Workload Consumer, Core Contributor) with a mermaid diagram. It sits at the discover/evaluate transition and is the canonical entry point after the portal.

---

### The Livepeer Developer Landscape · `v2/developers/concepts/developer-stack`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Concepts
**File size**: ~7.2 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | The Livepeer Developer Landscape | yes |
| description | Explains the relationship between Studio, Daydream, the AI gateway API, ComfyStream, and the raw Livepeer protocol — so you can choose the right layer to build at. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated — canonical replacement is `explain`. `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: The Developer Ecosystem at a Glance
- H2: Studio
- H2: Daydream
- H2: AI Gateway API
- H2: ComfyStream
- H2: Protocol Layer
- H2: Choosing Your Layer
- H2: Next Steps

**Content summary**:
This concept page explains the five integration layers available to developers — Studio API, Daydream API, AI Gateway API, ComfyStream, and the Protocol Layer — with a comparison table showing best-fit use cases and starting points for each. It serves a reader in the evaluate stage who has chosen a build track but does not yet understand the boundary between Livepeer products and the underlying network. It is a prerequisite to any integration work but is marked draft pending stakeholder review.

---

### AI on Livepeer · `v2/developers/concepts/ai-on-livepeer`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Concepts
**File size**: ~6.3 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI on Livepeer | yes |
| description | Explains the three AI pipeline categories on the Livepeer network — batch inference, real-time AI (live-video-to-video), and LLM — so you can choose the right path for your workload. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated — canonical replacement is `explain`. `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: Pipeline Categories at a Glance
- H2: Batch AI Pipelines
- H2: Real-Time AI
- H2: LLM Pipeline
- H2: Choose Your Path
- H2: Next Steps

**Content summary**:
This concept page explains the three AI pipeline categories — Batch AI (request/response inference), Real-Time AI (persistent live-video-to-video stream), and LLM (OpenAI-compatible text inference) — with a comparison table and decision aid. It serves a developer in the evaluate stage who has decided to work with AI on Livepeer but does not yet know which pipeline category fits their workload. It contains multiple `[REVIEW]` flags indicating technical details (billing model, production stability of live-video-to-video, LLM status) are pending stakeholder verification.

---

### Video on Livepeer · `v2/developers/concepts/video-on-livepeer`

**Status**: stub (file exists, `status: draft`, body content is a single MDX comment placeholder — 0 words of body content)
**Section/group**: Concepts
**File size**: ~600 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Video on Livepeer | yes |
| description | Explains video streaming and transcoding on the Livepeer network for developers. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated — canonical replacement is `explain`. `lifecycleStage` field missing entirely. Body is a placeholder comment only (`{/* Content to be written. Phase 2 content task. */}`).

**Heading structure**:
No headings found — page body is a single placeholder comment.

**Content summary**:
Placeholder page only. The frontmatter establishes it as a concept page for video streaming and transcoding on the Livepeer network, but no content has been written. The comment indicates this is a Phase 2 content task. As the only video-concepts page in the tab, its absence is a gap for any reader on the video build track.

---

### When to Run Your Own Gateway · `v2/developers/concepts/running-a-gateway`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Concepts
**File size**: ~3.8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | When to Run Your Own Gateway | yes |
| description | A decision guide for developers considering self-hosting a Livepeer gateway — covering the trade-offs between hosted APIs and self-hosted infrastructure, and what self-hosting requires. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated. The actual purpose of this page is closer to `choose` (decision guide between hosted and self-hosted). `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: When to run your own gateway
- H2: What self-hosting requires
- H2: The two gateway types
- H2: Next steps

**Content summary**:
This concept/decision guide helps developers decide whether to self-host a Livepeer gateway. It presents a comparison table of hosted vs self-hosted trade-offs across eight dimensions, a prerequisites checklist for self-hosting, and a table distinguishing AI gateway (off-chain) from video gateway (on-chain). It serves a reader in the evaluate stage who has done their first integration and is considering graduating to self-hosted infrastructure. Cross-links clearly to the Gateways tab for setup details.

---

### The Livepeer Open Source Stack · `v2/developers/concepts/oss-stack`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Concepts
**File size**: ~4.5 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | The Livepeer Open Source Stack | yes |
| description | Maps the main Livepeer open-source repositories — go-livepeer, livepeer-protocol, ai-worker, comfystream, and livepeer.js — and explains how they connect, for developers wanting to contribute. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated — canonical replacement is `explain`. `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: Repo map
- H2: How the repos connect
- H2: Where to start contributing
- H2: Contributing pathways
- H2: Next steps

**Content summary**:
This concept page maps the seven main Livepeer open-source repositories (go-livepeer, livepeer-protocol, ai-worker, comfystream, pytrickle, livepeer.js/ui-kit, docs) with a table showing language, role, and relationship to each other. It serves a Protocol integrator or Core Contributor arriving at the evaluate/optimise stage who needs a source map before deciding where to contribute. Contains a `[REVIEW]` flag on livepeer.js vs ui-kit repo status.

---

### How to Get Started · `v2/developers/get-started/setup-paths`

**Status**: stub (body content is a single placeholder comment — 0 words)
**Section/group**: Get Started
**File size**: ~700 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | How to Get Started | yes |
| description | Choose your developer path and get to your first successful Livepeer integration. | yes |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated — canonical replacement is `navigation`. `purpose: landing` is deprecated — canonical replacement is `orient`. `lifecycleStage` field missing entirely. Body is a placeholder comment only.

**Heading structure**:
No headings found — page body is a placeholder comment.

**Content summary**:
Placeholder page only. Intended as a section landing/overview for the Get Started group, routing readers to the appropriate quickstart path. No content written yet — placeholder comment references "content brief 03". This is a stub in a linear position that creates a dead-end for readers entering the Get Started section.

---

### Quickstart: Video Streaming · `v2/developers/get-started/video-quickstart`

**Status**: stub (body content is a single placeholder comment — 0 words; `status: draft` in frontmatter)
**Section/group**: Get Started
**File size**: ~640 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Quickstart: Video Streaming | yes |
| description | Stream and transcode video using the Livepeer Studio API. | yes |
| pageType | tutorial | yes |
| audience | developer | yes |
| purpose | tutorial | DEPRECATED: maps to `learn` (though `start` would be more appropriate for a quickstart) |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: tutorial` is deprecated — canonical replacement is `learn`, though `start` is closer to the intent of a quickstart. `lifecycleStage` field missing entirely. Body is a placeholder comment.

**Heading structure**:
No headings found — placeholder only.

**Content summary**:
Placeholder page only. Intended as the video streaming quickstart for developers wanting to build live streaming or VOD. A comment notes source material exists in `_archive/quickstart-video-hub.mdx`. As a stub in a linear quickstart position serving the primary persona (API integrator / Fast Feature Shipper on the video track), this is a P0 gap.

---

### Transcoding Jobs Quickstart · `v2/developers/get-started/transcoding-quickstart`

**Status**: current (has substantial body content, no `draft: true` flag, is in docs.json)
**Section/group**: Get Started
**File size**: ~7.1 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Transcoding Jobs Quickstart | yes |
| description | Submit a Livepeer Studio Transcode job, poll the task status, and verify completion. Built from the GitHub-validated Studio OpenAPI spec and pending TD accuracy review. | yes |
| pageType | quickstart | DEPRECATED: maps to `instruction` with `pageVariant: quickstart` |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` — purpose is misset; this is an instruction page, not a concept page |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` is deprecated — canonical replacement is `instruction` with `pageVariant: quickstart`. `purpose: concept` is incorrect and deprecated — this page's purpose is `start` (getting a first working result). `lifecycleStage` field missing. Page contains a "Rick (TD) review checklist" blocking final publication.

**Heading structure**:
- H2: AI-ready summary (for humans and assistants)
- H2: Review status
- H2: 1. Prerequisites
- H2: 2. Base URL and authentication
- H2: 3. Submit a transcode job
- H3: Example request body
- H3: Example curl request
- H2: 4. Capture the task ID
- H2: 5. Poll the task status
- H2: 6. Verify completion and outputs
- H2: 7. Common failure modes
- H3: `401 Unauthorized`
- H3: `422 Validation Error`
- H3: Task enters `failed`
- H2: 8. Rick (TD) review checklist (blocking before final publish)
- H2: 9. Next steps
- H2: Canonical references (source-of-truth first)

**Content summary**:
This is a complete, step-by-step quickstart for submitting a transcoding job through the Livepeer Studio Transcode API, polling the task status, and verifying completion. It covers authentication, the required request body fields, a curl example, response shape, and common failure modes. It is structurally complete but explicitly blocked from final publication by a TD (Rick) accuracy review checklist embedded in the page itself. A reader can follow the steps as written but the page should be treated as a working draft pending that review.

---

### AI Jobs Quickstart · `v2/developers/get-started/ai-quickstart`

**Status**: current (has substantial body content, no `draft: true` flag, is in docs.json)
**Section/group**: Get Started
**File size**: ~5.8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Jobs Quickstart | yes |
| description | Send your first AI job to a Livepeer gateway using the AI API, with GitHub-validated endpoint references and a stakeholder signoff checklist. | yes |
| pageType | quickstart | DEPRECATED: maps to `instruction` with `pageVariant: quickstart` |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain` — purpose is misset; this is an instruction page |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: quickstart` is deprecated — canonical replacement is `instruction` with `pageVariant: quickstart`. `purpose: concept` is incorrect and deprecated — purpose should be `start`. `lifecycleStage` field missing. Page contains a "stakeholder signoff" checklist blocking final publication (default model_id is a placeholder).

**Heading structure**:
- H2: AI-ready summary (for humans and assistants)
- H2: Review status
- H2: 1. Prerequisites
- H2: 2. Base URL and authentication
- H2: 3. Submit an AI job (text-to-image starter flow)
- H3: Example request body
- H3: Example curl request
- H2: 4. Read the response
- H2: 5. Troubleshooting
- H3: `401 Unauthorized`
- H3: `422 Validation Error`
- H3: `500 Internal Server Error`
- H2: 6. What counts as an "AI job" (scope note)
- H2: 7. Required stakeholder signoff before marking final
- H2: 8. Next steps
- H2: Canonical references (source-of-truth first)

**Content summary**:
This is a step-by-step quickstart for sending a first AI inference job through the Livepeer gateway, using `text-to-image` as the starter pipeline. It covers the base URL, Bearer auth, a curl example, and the `ImageResponse` schema. The `model_id` field is a placeholder pending stakeholder approval of the canonical default. The page is structurally complete and source-backed (GitHub-validated OpenAPI spec) but explicitly blocked from final publication by a stakeholder signoff checklist. Serves the AI integrator persona at the `setup` lifecycleStage.

---

### Quickstart: ComfyStream on Livepeer · `v2/developers/get-started/comfystream-quickstart`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Get Started
**File size**: ~9.8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Quickstart: ComfyStream on Livepeer | yes |
| description | Get a ComfyStream instance running and connected to the Livepeer network in a single session — covering Docker, RunPod, and local install paths. | yes |
| pageType | tutorial | yes |
| audience | developer | yes |
| purpose | tutorial | DEPRECATED: maps to `learn`; closer intent is `start` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: tutorial` is deprecated — canonical replacement is `learn`, though the page's intent is `start`. `lifecycleStage` field missing. Multiple `[REVIEW]` flags on VRAM requirements, exact Docker flags, port numbers, and Livepeer network connection framing (OQ-D1: unresolved open question).

**Heading structure**:
- H2: Before You Start
- H2: Set Up ComfyStream (tabs: RunPod, Docker, Local install)
- H2: Load a Workflow
- H2: Verify the Pipeline is Running
- H2: Connect to the Livepeer Network
- H2: What You Can Build
- H2: Next Steps

**Content summary**:
This tutorial gets a developer from zero to a running ComfyStream instance with a real-time AI effect on a live video feed. It covers three deployment paths (RunPod, Docker, local install) with step-by-step instructions for each, then shows how to load a workflow and connect to the Livepeer network (via Daydream API or BYOC/PyTrickle). Multiple `[REVIEW]` flags indicate technical details are pending verification. An open question (OQ-D1) about whether the Livepeer network connection should be mandatory is unresolved. Serves the Interactive Media Builder persona at the `setup` lifecycleStage.

---

### Build with ComfyStream · `v2/developers/build/comfystream`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Build
**File size**: ~11.2 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Build with ComfyStream | yes |
| description | Reference for ComfyStream pipeline modes, custom nodes, workflow format, data-channel output, and performance tuning for developers building real-time AI video applications on Livepeer. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: operations` is deprecated — canonical replacement is `operate`. `lifecycleStage` field missing. Multiple `[REVIEW]` flags throughout.

**Heading structure**:
- H2: Pipeline Modes
- H2: Node Ecosystem
- H3: Core I/O nodes
- H3: Real-time control nodes
- H3: StreamDiffusion nodes (Phase 4)
- H3: SuperResolution node (Phase 4)
- H3: AudioTranscription nodes (Phase 4)
- H2: Custom Workflows
- H3: Workflow format
- H3: Loading a workflow
- H3: Custom node dependencies
- H2: Data-Channel Output
- H2: Performance Tuning
- H3: First-run compilation
- H3: Frame rate and throughput
- H3: Dynamic warm-up (Phase 4)
- H3: Configuration parameters
- H2: Next Steps

**Content summary**:
This guide is for developers who have completed the ComfyStream quickstart and are deepening their usage. It covers all four pipeline modes (image-to-image, video-to-video, audio processing, data-channel output), the node ecosystem (I/O nodes, real-time control nodes, StreamDiffusion nodes, SuperResolution, AudioTranscription), custom workflow format and loading, data-channel output for structured text, and performance tuning including TensorRT compilation, frame rates, and configuration parameters. It contains multiple `[REVIEW]` flags on node canonical repo locations and performance figures.

---

### Bring Your Own Container (BYOC) · `v2/developers/build/byoc`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Build
**File size**: ~11.8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Bring Your Own Container (BYOC) | yes |
| description | Step-by-step guide to building a custom AI container using the PyTrickle integration layer and deploying it as a worker on the Livepeer network. | yes |
| pageType | how_to | DEPRECATED: maps to `instruction` |
| audience | developer | yes |
| purpose | how_to | DEPRECATED: maps to `build` or `configure` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: how_to` is deprecated — canonical replacement is `instruction`. `purpose: how_to` is deprecated — canonical replacement for this page is `build`. `lifecycleStage` field missing. A critical `[REVIEW]` flag marks the go-livepeer orchestrator flags for BYOC deployment as unconfirmed placeholders.

**Heading structure**:
- H2: When to Use BYOC
- H2: Prerequisites
- H2: How BYOC Works
- H2: Step 1 — Implement Your Processor
- H2: Step 2 — Define the REST API Contract
- H2: Step 3 — Build Your Docker Container
- H2: Step 4 — Test Locally
- H2: Step 5 — Push to a Container Registry
- H2: Step 6 — Deploy to the Livepeer Network
- H2: Building a Client Application on Top of BYOC
- H2: Variants
- H3: ComfyStream as a BYOC container
- H3: Python-native processing (no Docker)
- H2: Related

**Content summary**:
This is a step-by-step instruction page for implementing a custom AI container using PyTrickle's `FrameProcessor` interface and deploying it as a Livepeer AI worker. It covers when to use BYOC vs ComfyStream, prerequisites, the BYOC architecture (gateway → PyTrickle StreamServer → FrameProcessor), all six deployment steps with code examples, client SDK usage (`@muxionlabs/byoc-sdk`), and two variants. A critical `[REVIEW]` flag marks the go-livepeer deployment flags as placeholder only. Serves the Custom Model Porter persona at the `build` lifecycleStage.

---

### Build a Gateway Client with the SDK · `v2/developers/build/sdk-gateway`

**Status**: stub (body content is an MDX comment placeholder with research notes — 0 words of user-facing content; `status: draft`)
**Section/group**: Build
**File size**: ~1.9 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Build a Gateway Client with the SDK | yes |
| description | Build a lightweight Livepeer gateway client in Python, JavaScript, or mobile using the SDK and remote signer — no Go required. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: operations` is deprecated — canonical replacement is `operate`. The page's intent is more accurately `build` or `integrate`. `lifecycleStage` field missing entirely. Body is an MDX comment containing research notes and open questions only — no user-facing content written.

**Heading structure**:
No headings found — placeholder only.

**Content summary**:
Placeholder page only. Intended to cover the SDK gateway path (non-Go implementation using remote signer, NaaP/API key auth model, `livepeer-python-gateway` reference implementation). Research notes in the comment block identify four source documents and open questions for SME j0sh about production readiness of the off-chain AI mode. A meaningful gap for the Protocol integrator persona who needs this path to build a custom gateway client.

---

### Is My AI Workload a Good Fit for Livepeer? · `v2/developers/build/workload-fit`

**Status**: current (has substantial body content, no `draft: true` flag, is in docs.json)
**Section/group**: Build
**File size**: ~7.6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Is My AI Workload a Good Fit for Livepeer? | yes |
| description | Decision framework for evaluating whether your AI workload belongs on Livepeer. Includes decision tree, capability matrix, gateway vs orchestrator responsibilities, and anti-patterns. | yes |
| pageType | concept | yes |
| audience | developer | yes |
| purpose | concept | DEPRECATED: maps to `explain`; actual intent is `choose` or `evaluate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: concept` is deprecated — canonical replacement closer to intent is `evaluate` or `choose`. `lifecycleStage` field missing entirely.

**Heading structure**:
- H2: Decision tree
- H2: Capability matrix
- H2: Gateway vs orchestrator responsibilities by workload
- H3: Audio workloads (ASR, translation, intent)
- H3: Vision workloads (depth, pose, segmentation)
- H3: Video workloads (generation, effects, diffusion)
- H3: Text workloads (real-time only)
- H2: ASR pipeline examples
- H3: Live captions for video streams
- H3: Multilingual live translation
- H3: Voice-driven avatars or agents
- H3: Live moderation and safety
- H2: What about batch and file-based workloads?
- H2: Next steps

**Content summary**:
This concept/decision page helps a developer evaluate whether their AI workload is a good fit for the Livepeer network. It provides a text-based decision tree (streaming → GPU inference → latency → incremental output), a capability matrix across audio/vision/video/text workloads, a gateway vs orchestrator responsibility breakdown per workload type, ASR pipeline examples, and a detailed accordion on batch vs streaming execution shapes. It serves the AI builder persona in the evaluate stage who needs to confirm their use case before investing in integration.

---

### AI Model Support · `v2/developers/build/model-support`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Build
**File size**: ~8.3 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | AI Model Support | yes |
| description | Reference tables for all AI pipeline types supported on the Livepeer network, with supported model architectures, minimum GPU VRAM requirements, and current status. | yes |
| pageType | reference | yes |
| audience | developer | yes |
| purpose | reference | yes |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `lifecycleStage` field missing. All other required fields are present with canonical values. `veracityStatus` not set.

**Heading structure**:
- H2: Batch AI Pipelines
- H3: Notes per pipeline
- H2: Real-Time AI Pipelines
- H2: BYOC
- H2: Model Warm-Up and Cold Start
- H2: Requesting a Specific Model
- H2: Related

**Content summary**:
This reference page lists all AI pipeline types on the Livepeer network with supported model architectures, warm models, minimum GPU VRAM requirements, and status. It covers batch AI (9 pipelines), real-time AI (live-video-to-video via ComfyStream), BYOC, and model warm-up/cold-start mechanics. Multiple `[REVIEW]` flags on VRAM minimums and warm model names. Serves an AI builder at the `build` stage who needs to confirm model compatibility before writing code.

---

### Developer Guides · `v2/developers/guides/developer-guides`

**Status**: current (has substantial body content, no `draft: true`, is in docs.json)
**Section/group**: Guides
**File size**: ~11.4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Developer Guides | yes |
| description | A curated library of how-to guides, tutorials, and walkthroughs for building with Livepeer — from first API call to production AI pipelines. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: operations` is deprecated — canonical replacement is `operate`. Actual intent of this page is `reference` or `orient`. `lifecycleStage` field missing.

**Heading structure**:
- H2: Getting Started
- H2: Video Streaming: Livestreams and VOD
- H2: Full-Stack Application Guides
- H2: AI Inference and Real-Time AI Video
- H2: SDK and API Reference Guides
- H2: Node Operations: Orchestrators and Gateways
- H2: Community-Curated Resources

**Content summary**:
This is a curated link library of guides, tutorials, and resources from official docs, community contributors, and third-party builders. Organised by topic (getting started, video streaming, full-stack apps, AI inference, SDKs, node operations, community resources). Links are primarily external or to old v1 docs. This page serves a developer in the build/operate phase returning for a specific guide rather than reading linearly. Note: most linked content points to external URLs or v1 docs — a significant portion of the internal link targets appear to be legacy.

---

### Resources · `v2/developers/guides/resources`

**Status**: current (has substantial body content, no `draft: true`, is in docs.json)
**Section/group**: Guides
**File size**: ~12.8 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Resources | yes |
| description | A curated library of tools, dashboards, reading, videos, and reference material from across the Livepeer ecosystem. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: operations` is deprecated — canonical replacement is `operate`. The actual intent is `reference` or `orient`. `lifecycleStage` field missing. Note: `pageType: guide` is arguably incorrect — this is closer to a `resource` page (curated external content).

**Heading structure**:
- H2: Official Tools and Platforms
- H2: SDKs and Developer Libraries
- H2: Network Dashboards and Analytics
- H2: Node Operator Tools
- H2: Community Platforms and Aggregators
- H2: Blogs, Reading, and Key Articles
- H2: Security and Bug Bounties
- H2: Grants and Funding

**Content summary**:
A comprehensive curated resource library covering official tools (Studio, Explorer, Daydream, Catalyst), all official and community SDKs, network dashboards (Dune, Messari, livepeer.tools), node operator tools, community aggregators (Awesome Livepeer, The Graph subgraph), essential reading (blog, Cascade vision, Daydream launch), and security/grant resources. Serves a developer at any stage returning to find a specific tool or resource. This page overlaps in scope with the Resources section and potentially with resources/awesome-livepeer.

---

### Contribution Guide · `v2/developers/guides/contribution-guide`

**Status**: current (has substantial body content, no `draft: true`, is in docs.json)
**Section/group**: Guides
**File size**: ~11.6 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Contribution Guide | yes |
| description | How to contribute to Livepeer — code, documentation, governance, community support, and bug reports across all repositories. | yes |
| pageType | guide | yes |
| audience | developer | yes |
| purpose | operations | DEPRECATED: maps to `operate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `purpose: operations` is deprecated — canonical replacement is `operate`. The page's actual purpose is `build` or `integrate` (it instructs how to do something). `lifecycleStage` field missing.

**Heading structure**:
- H2: Contributors Spotlight
- H2: Ways to Contribute
- H2: Contributing to the Code
- H3: Before You Start
- H3: Key Repositories
- H3: General Pull Request Principles
- H2: Contributing to the Docs
- H3: Quick Path: Feedback Without Code
- H3: Pull Request Workflow
- H3: Review Assignments
- H2: Contributing to Governance
- H2: Grants and Bounties
- H2: Community Contribution Principles

**Content summary**:
This guide covers all contribution pathways for Livepeer — code (with key repo links and PR principles), documentation (with full PR workflow and review assignments), governance (voting, commenting, drafting LIPs), grants and bounties, and community contribution principles. It contains an embedded iframe showing a live Contributors Spotlight. It serves a Core Contributor persona at the `build` or `optimise` stage who wants to contribute to Livepeer's open-source ecosystem.

---

### Developer Help · `v2/developers/guides/developer-help`

**Status**: current (has substantial body content, no `draft: true`, is in docs.json)
**Section/group**: Guides
**File size**: ~10.2 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Developer Help | yes |
| description | Every way to get help as a Livepeer developer — Discord channels, forum, office hours, GitHub issues, and more. | yes |
| pageType | faq | DEPRECATED: maps to `reference` with `pageVariant: compendium` |
| audience | developer | yes |
| purpose | faq | DEPRECATED: maps to `reference` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: faq` is deprecated — canonical replacement is `reference` with `pageVariant: compendium`. `purpose: faq` is deprecated — canonical replacement is `reference`. `lifecycleStage` field missing.

**Heading structure**:
- H2: Quick Reference
- H2: Discord
- H3: Channels
- H2: Livepeer Forum
- H3: Forum Categories
- H2: Developer Office Hours
- H2: GitHub Issues
- H3: Writing a Good Issue
- H2: Livepeer Studio Support
- H2: Security Vulnerabilities and Bug Bounties
- H2: Community and Social
- H2: Grants and Funding Help

**Content summary**:
This reference/FAQ page maps every available developer help channel to the type of question it best serves. It covers Discord channels (`#lounge`, `#ai-research`, `#delegating`, `#governance`), the Livepeer Forum (categories, when to use vs Discord), Developer Office Hours (bi-weekly, use cases), GitHub Issues (per-repo, writing good issues), Livepeer Studio Support, security/bug bounty channels, and community/social channels. Serves a developer in the `troubleshoot` or `operate` stage encountering a problem and needing to know where to turn.

---

### Builder Opportunities · `v2/developers/opportunities/overview`

**Status**: current (has substantial body content, `status: current` in frontmatter, is in docs.json)
**Section/group**: Opportunities
**File size**: ~4.2 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Builder Opportunities | yes |
| description | Find grants, programmes, RFPs, treasury proposals, open source contribution pathways, and bug bounties for every type of Livepeer builder. | yes |
| pageType | overview | DEPRECATED: maps to `navigation` or `concept` depending on context; here `navigation` |
| audience | developers, app-builders, gateway-operators, orchestrators, protocol-contributors (array, non-canonical tokens) | no — `audience` field contains non-canonical values (array used where single token expected; values like `app-builders` not in the canonical 7-token set) |
| purpose | overview | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: overview` is deprecated — canonical replacement is `navigation` (routing page) or `concept` with `pageVariant: overview`. `audience` field uses an array of non-canonical tokens — canonical audience values are single tokens from the 7-token set; this page serves `developer`. `purpose: overview` is deprecated — canonical replacement is `orient`. `lifecycleStage` field missing.

**Heading structure**:
- H2: Who Are You?
- H2: All Opportunities

**Content summary**:
This is the section landing page for Builder Opportunities, routing visitors by developer profile (App Builder, AI Workflow Creator, Team/Organisation, Protocol Contributor, Orchestrator/GPU Provider, Security Researcher) to the appropriate sub-page. It also provides a summary cards view of all four opportunity types. Serves a developer at any journey stage who wants to find funded or rewarded pathways for their work.

---

### Grants & Programmes · `v2/developers/opportunities/grants-and-programmes`

**Status**: current (`status: current` in frontmatter, has substantial body content)
**Section/group**: Opportunities
**File size**: ~8.4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Grants & Programmes | yes |
| description | Livepeer funding opportunities for app builders, AI workflow creators, orchestrators, and research teams — from microgrants to multi-month accelerator programmes. | yes |
| pageType | guide | yes |
| audience | developers, app-builders, ai-workflow-creators, orchestrators, researchers (array, non-canonical tokens) | no — same issue as opportunities/overview |
| purpose | how_to | DEPRECATED: maps to `build` or `configure` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience` field uses non-canonical token array. `purpose: how_to` is deprecated — for this page `orient` or `evaluate` would be more accurate (reader is assessing options, not executing a task). `lifecycleStage` field missing.

**Heading structure**:
- H2: Grant Types
- H2: AI Video Startup Programme
- H2: ComfyUI Live Video Hacker Programme
- H2: Real-Time Video AI Bootcamp
- H2: Hackathons
- H3: Livepeer Summit Hackathon
- H3: Encode Club Hackathons
- H2: How to Apply

**Content summary**:
This guide covers all funding and programme opportunities for builders on Livepeer — four grant types (Research/Video Innovation, Supply Side/Network Health, Quick Start/Microgrants, AI Workflow/ComfyUI Hacker), the AI Video Startup Programme accelerator (up to $20k, 3 months, Encode Club partnership), the ComfyUI Live Video Hacker Programme (cohort-based, open-source workflow grants), the Real-Time Video AI Bootcamp, and hackathons. Serves developers in the discover or evaluate stage wanting to get funded or accelerated. All applications route through the Dev Hub at livepeer.org/dev-hub.

---

### RFPs & Treasury Proposals · `v2/developers/opportunities/rfps-and-proposals`

**Status**: current (`status: current` in frontmatter, has substantial body content)
**Section/group**: Opportunities
**File size**: ~8.1 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | RFPs & Treasury Proposals | yes |
| description | Apply for Foundation-issued Requests for Proposals (RFPs) or submit a funded Special Purpose Entity (SPE) proposal to the Livepeer onchain treasury. | yes |
| pageType | guide | yes |
| audience | developers, teams, ecosystem-builders, organisations (array, non-canonical tokens) | no |
| purpose | how_to | DEPRECATED: maps to `build` or closer to `integrate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience` field uses non-canonical token array. `purpose: how_to` is deprecated — `integrate` or `build` would be closer. `lifecycleStage` field missing.

**Heading structure**:
- H2: Foundation RFPs
- H3: How RFPs Work
- H3: Past RFPs
- H2: SPE Treasury Proposals
- H3: The SPE Governance Process
- H3: Active SPEs (Examples)
- H2: What Kinds of SPEs Does the Ecosystem Need?

**Content summary**:
This guide covers two distinct funded mechanisms for teams proposing ecosystem work: Foundation RFPs (scoped competitive briefs with defined criteria) and SPE Treasury Proposals (open community-governed funding from the LPT reserve). It provides step-by-step processes for both paths, governance requirements for SPE proposals (100 staked LPT, 33% quorum, 50% majority), examples of active SPEs, and a discussion of what the ecosystem needs. Serves teams and protocol contributors in the `optimise` or `evaluate` stage considering sustained, funded work.

---

### Open Source Contributions · `v2/developers/opportunities/oss-contributions`

**Status**: current (`status: current` in frontmatter, has substantial body content)
**Section/group**: Opportunities
**File size**: ~10.4 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Open Source Contributions | yes |
| description | How to contribute to Livepeer's open source repositories — from documentation fixes to protocol engineering — including a guide to every core repo and its contributing process. | yes |
| pageType | guide | yes |
| audience | developers, protocol-contributors, documentation-contributors, security-researchers (array, non-canonical tokens) | no |
| purpose | how_to | DEPRECATED: maps to `build` or `integrate` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience` field uses non-canonical token array. `purpose: how_to` is deprecated — `build` would be canonical. `lifecycleStage` field missing.

**Heading structure**:
- H2: Ways to Contribute
- H2: Contribution Principles
- H2: Core Repositories
- H2: First Contribution Workflow
- H2: Code of Conduct

**Content summary**:
This guide covers OSS contribution pathways across all Livepeer repos — six contribution types (docs, bug reports, code, testing, code review, ideas), contribution principles (Conventional Commits, changelog rules, PR focus), detailed accordion entries for nine core repos (go-livepeer, Studio, ai-runner, ComfyStream, lpms, ui-kit, livepeer-ai-js, livepeer-ai-python, docs), and a seven-step first contribution workflow. Serves the Core Contributor persona at the `build` or `optimise` stage.

---

### Bug Bounties · `v2/developers/opportunities/bug-bounties`

**Status**: current (`status: current` in frontmatter, has substantial body content)
**Section/group**: Opportunities
**File size**: ~6.3 KB

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Bug Bounties | yes |
| description | Report smart contract vulnerabilities in the Livepeer protocol and earn USDC rewards through the official Livepeer bug bounty programme on Immunefi. | yes |
| pageType | reference | yes |
| audience | security-researchers, protocol-contributors, developers (array, non-canonical tokens) | no |
| purpose | how_to | DEPRECATED: maps to `build` or `verify` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `audience` field uses non-canonical token array. `purpose: how_to` is deprecated — `verify` or `reference` would be canonical. `lifecycleStage` field missing.

**Heading structure**:
- H2: Programme Overview
- H2: Severity Levels and Rewards
- H3: Focus Areas
- H2: Scope
- H3: Out of Scope
- H2: How to Submit a Report
- H2: Recent Programme Activity

**Content summary**:
This reference page covers Livepeer's Immunefi bug bounty programme — scope (smart contracts only, no websites or off-chain infra), reward structure (USDC on Ethereum, KYC required, PoC required), severity levels (Critical capped at 10% of economic damage, High based on frozen yield), four-step submission process, and recent programme activity (three historical examples from 2024–2025). Serves security researchers in the `verify` or `evaluate` stage who want to report smart contract vulnerabilities responsibly.

---

### SDKs · `v2/developers/resources/sdks`

**Status**: stub (body content is ~50 words, under threshold)
**Section/group**: Resources
**File size**: ~900 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | SDKs | yes |
| description | SDKs for Livepeer - Studio SDKs and Network SDKs | yes (minimal) |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated. `purpose: landing` is deprecated. `lifecycleStage` field missing.

**Heading structure**:
- H2: Livepeer Studio SDKs
- H2: Network-side SDKs

**Content summary**:
A minimal landing/routing page pointing to two SDK destinations: Studio SDKs (TypeScript, Go, Python, React components) via the Solutions tab, and a Gateway Client SDK path via the Developers build section. The description (`SDKs for Livepeer - Studio SDKs and Network SDKs`) is lowercase and not well-formed for production. The page is functionally a stub — it contains only routing links with brief text, under 100 words of actual content.

---

### APIs · `v2/developers/resources/apis`

**Status**: stub (body content is ~55 words, under threshold)
**Section/group**: Resources
**File size**: ~870 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | APIs | yes |
| description | APIs for Livepeer - Studio API and Network APIs | yes (minimal) |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated. `purpose: landing` is deprecated. `lifecycleStage` field missing.

**Heading structure**:
- H2: Livepeer Studio API
- H2: Network APIs

**Content summary**:
A minimal landing/routing page pointing to the Studio API (REST API for streams, assets, webhooks) and Network APIs (AI API portal, gateway client patterns). Similar to the SDKs page, this is functionally a stub — under 100 words of content. Description lowercase. Serves as a routing stop for developers looking for API references.

---

### Awesome Livepeer · `v2/developers/resources/awesome-livepeer`

**Status**: stub (body content is ~55 words, under threshold)
**Section/group**: Resources
**File size**: ~750 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Awesome Livepeer | yes |
| description | Browse the community-curated Awesome Livepeer collection of tools, libraries, examples, and ecosystem resources. | yes |
| pageType | landing | DEPRECATED: maps to `navigation` or `resource` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated. `purpose: landing` is deprecated. `lifecycleStage` field missing. The embedded README note explicitly says it is unavailable in this docs branch — the core content (the awesome-livepeer README) is not present.

**Heading structure**:
- H2: Awesome Livepeer

**Content summary**:
A minimal page pointing to the `github.com/livepeer/awesome-livepeer` community-curated resource list, with a note that the embedded README is unavailable in the current branch. Functions as a routing stub. The intended content (embedded README) would make this a `resource` type page, but as present it is a placeholder with a single external link.

---

### Livepeer Wiki · `v2/developers/resources/wiki`

**Status**: stub (body content is ~30 words, under threshold)
**Section/group**: Resources
**File size**: ~650 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Livepeer Wiki | yes |
| description | Access the Livepeer Wiki README and repository for older technical reference material and project documentation. | yes |
| pageType | landing | DEPRECATED: maps to `navigation` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated. `purpose: landing` is deprecated. `lifecycleStage` field missing. The embedded wiki README note says it is unavailable. Notable: the "View the Livepeer Wiki" card links to `deepwiki.com/livepeer` not the GitHub wiki — the `href` appears to be a copy-paste error from the DeepWiki page.

**Heading structure**:
No markdown H2/H3 headings — one card component only.

**Content summary**:
A minimal page intended to provide access to the Livepeer Wiki (GitHub wiki for older technical reference material). The embedded README is noted as unavailable. The primary link appears to point to DeepWiki instead of the GitHub wiki, which is a likely linking error. Functionally a stub.

---

### DeepWiki · `v2/developers/resources/deepwiki`

**Status**: current (has body content above threshold, no `draft: true`, in docs.json)
**Section/group**: Resources
**File size**: ~850 bytes

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | DeepWiki | yes |
| description | Use DeepWiki to explore Livepeer repositories, architecture, and workflows through AI-generated codebase documentation and search. | yes |
| pageType | landing | DEPRECATED: maps to `navigation` or `resource` |
| audience | developer | yes |
| purpose | landing | DEPRECATED: maps to `orient` |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `pageType: landing` is deprecated. `purpose: landing` is deprecated. `lifecycleStage` field missing.

**Heading structure**:
No markdown headings — page consists of intro text, a card, a tip, and an embedded iframe.

**Content summary**:
A brief page introducing DeepWiki (by Cognition AI / Devin creators) as an AI-powered tool for exploring Livepeer's codebase through interactive wiki-style documentation. Embeds the `deepwiki.com/livepeer` iframe. Includes a tip warning that AI-generated content may not always be accurate. Serves a developer at any stage wanting to understand Livepeer repos quickly through natural language Q&A.

---

### Developer Glossary · `v2/developers/resources/compendium/glossary`

**Status**: draft (frontmatter `status: draft`)
**Section/group**: Resources > Compendium
**File size**: >14 KB (truncated — large glossary table)

**Frontmatter**:
| Field | Value | Canonical? |
|---|---|---|
| title | Developer Glossary | yes |
| description | Key terms for Livepeer developers — SDKs, APIs, AI pipelines, streaming protocols, and integration concepts. | yes |
| pageType | reference | yes |
| audience | developer | yes |
| purpose | reference | yes |
| lifecycleStage | NOT SET | MISSING |
| veracityStatus | NOT SET | NOT SET |

**Frontmatter completeness**: incomplete
**Frontmatter issues**: `lifecycleStage` field missing. All other required fields are present with canonical values. `pageVariant: compendium` is set — correct per the canonical schema for a glossary-type reference page. `veracityStatus` not set.

**Heading structure**:
No markdown H2/H3 headings — page uses a `SearchTable` component with a heading tip block only.

**Content summary**:
A searchable glossary of key developer terms across Livepeer's SDKs, AI Gateway API, streaming protocols, and protocol integration layer. Uses a `SearchTable` component with category-filterable rows. The page has an `@aiDiscoverability tier-2` annotation indicating a pre-commit script generates a `glossary-data.json` companion file for crawler/AI agent indexing. Serves a developer at any stage looking up terminology, particularly important for the Terminology Lock flags from the audience design (Gateway, Orchestrator, Pipeline, BYOC, etc.).

---

## Duplicate Nav Entries

No pages appear in more than one nav group. All 28 paths are unique within the docs.json v2/developers navigation block.

| Path | Groups |
|---|---|
| — | — |

---

## Workspace Artefacts

Files under `v2/developers/_workspace/` — path listing only, not scanned as production pages.

| Path | Notes |
|---|---|
| v2/developers/_workspace/archive/guides-res-developer-guides.mdx | Archive |
| v2/developers/_workspace/archive/ai-pipelines-model-support-old.mdx | Archive — old model support page |
| v2/developers/_workspace/archive/journey-mapping.mdx | Archive |
| v2/developers/_workspace/archive/ai-inference-workload-fit-old.mdx | Archive — old workload fit page |
| v2/developers/_workspace/archive/index-generated.mdx | Archive |
| v2/developers/_workspace/archive/guides-res-developer-help.mdx | Archive |
| v2/developers/_workspace/archive/x-unstaged/partner-integrations.mdx | Archive / unstaged |
| v2/developers/_workspace/archive/x-unstaged/developer-tools/livepeer-cloud.mdx | Archive / unstaged |
| v2/developers/_workspace/archive/x-unstaged/developer-tools/tooling-hub.mdx | Archive / unstaged |
| v2/developers/_workspace/archive/x-unstaged/developer-tools/livepeer-explorer.mdx | Archive / unstaged |
| v2/developers/_workspace/archive/x-unstaged/developer-tools/external-tooling.mdx | Archive / unstaged |
| v2/developers/_workspace/archive/quickstart-ai-hub.mdx | Archive — old AI quickstart hub |
| v2/developers/_workspace/archive/ai-pipelines-byoc-old.mdx | Archive — old BYOC page |
| v2/developers/_workspace/archive/moved-to-about/livepeer-token-economics.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-protocol/livepeer-whitepaper.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-protocol/README.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-protocol/technical-overview.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-actors/README.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-actors/delegators.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-actors/end-users.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-actors/gateways.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-actors/orchestrators.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/livepeer-governance.mdx | Moved to About tab |
| v2/developers/_workspace/archive/moved-to-about/technical-roadmap.mdx | Moved to About tab |
| v2/developers/_workspace/archive/guides-res-resources.mdx | Archive |
| v2/developers/_workspace/archive/quickstart-video-101.mdx | Archive — old video quickstart |
| v2/developers/_workspace/archive/developer-guide.mdx | Archive |
| v2/developers/_workspace/archive/developer-journey-3path.mdx | Archive — old 3-path journey page |
| v2/developers/_workspace/archive/livepeer-real-time-video/page-1.mdx | Archive |
| v2/developers/_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/frameworks-spe.mdx | Archive |
| v2/developers/_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/streamdiffusion.mdx | Archive |
| v2/developers/_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx | Archive |
| v2/developers/_workspace/archive/livepeer-real-time-video/video-streaming-on-livepeer/README.mdx | Archive |
| v2/developers/_workspace/archive/ai-inference-overview-old.mdx | Archive — old AI inference overview |
| v2/developers/_workspace/archive/building-on-livepeer/quick-starts/README.mdx | Archive |
| v2/developers/_workspace/archive/builder-rfps-old.mdx | Archive — old RFPs page |
| v2/developers/_workspace/archive/ai-pipelines-comfystream-old.mdx | Archive — old ComfyStream page |
| v2/developers/_workspace/archive/partner-integrations.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/all-ecosystem/ecosystem-products.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/livepeer-studio/livepeer-studio.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace-provenance.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace-integration.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace-architecture.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace-funding-model.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/streamplace/streamplace-guide.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/builder-hub.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/daydream/daydream.mdx | Archive |
| v2/developers/_workspace/archive/developer-platforms/frameworks/frameworks.mdx | Archive |
| v2/developers/_workspace/archive/dev-tools-gateways-stub.mdx | Archive — old dev tools stub |
| v2/developers/_workspace/archive/ai-pipelines-overview-old.mdx | Archive — old AI pipelines overview |
| v2/developers/_workspace/archive/quickstart-video-hub.mdx | Archive — source material for video-quickstart (see stub) |
| v2/developers/_workspace/archive/x-deprecated/builder-opportunities/livepeer-rfps.mdx | Deprecated |
| v2/developers/_workspace/archive/x-deprecated/builder-opportunities/dev-programs.mdx | Deprecated |
| v2/developers/_workspace/archive/dev-tools-external-stub.mdx | Archive — old dev tools external stub |
| v2/developers/_workspace/archive/guides-res-contribution.mdx | Archive |
| v2/developers/_workspace/context-data/Developers_new/comfystream-quickstart-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/running-a-gateway-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/oss-stack-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/build-byoc-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/build-comfystream-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/ai-on-livepeer-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/build-model-support-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/Developers_new/developer-stack-draft.mdx | Context data — draft source |
| v2/developers/_workspace/context-data/new/developers-new/journey-mapping.mdx | Context data — working draft |
| v2/developers/_workspace/context-data/new/developers-new/portal.mdx | Context data — working draft |

**Also on disk but not in docs.json (unlisted production-path files)**:

These files exist at production paths but are not registered in docs.json. They are not workspace artefacts but are also not navigable production pages:

| Path | Notes |
|---|---|
| v2/developers/get-started/contributor-quickstart.mdx | Not in docs.json nav — unlisted staging file |
| v2/developers/developer-tools/gateways.mdx | Not in docs.json nav — unlisted, in deprecated developer-tools/ folder |
| v2/developers/developer-tools/livepeer-cloud.mdx | Not in docs.json nav — unlisted, in deprecated developer-tools/ folder |
| v2/developers/developer-tools/tooling-hub.mdx | Not in docs.json nav — unlisted |
| v2/developers/developer-tools/livepeer-explorer.mdx | Not in docs.json nav — unlisted |
| v2/developers/developer-tools/dashboards.mdx | Not in docs.json nav — unlisted |
| v2/developers/technical-references/deepwiki.mdx | Not in docs.json nav — duplicate of resources/deepwiki.mdx |
| v2/developers/technical-references/apis.mdx | Not in docs.json nav — duplicate of resources/apis.mdx |
| v2/developers/technical-references/wiki.mdx | Not in docs.json nav — duplicate of resources/wiki.mdx |
| v2/developers/technical-references/sdks.mdx | Not in docs.json nav — duplicate of resources/sdks.mdx |
| v2/developers/technical-references/awesome-livepeer.mdx | Not in docs.json nav — duplicate of resources/awesome-livepeer.mdx |
| v2/developers/resources/example-applications.mdx | Not in docs.json nav — unlisted |

---

## v1 Reference Paths

v1 paths from docs.json v1 navigation for the Developers equivalent section — not scanned.

| v1 path |
|---|
| v1/developers/introduction |
| v1/developers/quick-start |
| v1/developers/livepeer-studio-cli |
| v1/developers/guides/overview |
| v1/developers/guides/upload-video-asset |
| v1/developers/guides/playback-an-asset |
| v1/developers/guides/listen-to-asset-events |
| v1/developers/guides/encrypted-asset |
| v1/developers/guides/thumbnails-vod |
| v1/developers/guides/create-livestream |
| v1/developers/guides/playback-a-livestream |
| v1/developers/guides/stream-via-obs |
| v1/developers/guides/livestream-from-browser |
| v1/developers/guides/optimize-latency-of-a-livestream |
| v1/developers/guides/monitor-stream-health |
| v1/developers/guides/listen-to-stream-events |
| v1/developers/guides/multistream |
| v1/developers/guides/clip-a-livestream |
| v1/developers/guides/thumbnails-live |
| v1/developers/guides/access-control-webhooks |
| v1/developers/guides/access-control-jwt |
| v1/developers/guides/setup-and-listen-to-webhooks |
| v1/developers/guides/transcode-video-storj |
| v1/developers/guides/transcode-video-w3s |
| v1/developers/guides/get-engagement-analytics-via-api |
| v1/developers/guides/get-engagement-analytics-via-grafana |
| v1/developers/guides/get-engagement-analytics-via-timeplus |
| v1/developers/guides/managing-projects |
| v1/developers/tutorials/decentralized-app-with-fvm |
| v1/developers/tutorials/token-gate-videos-with-lit |
| v1/developers/tutorials/upload-playback-videos-4everland |
| v1/developers/tutorials/upload-playback-videos-on-arweave |
| v1/developers/tutorials/upload-playback-videos-on-ipfs |
| v1/references/api-support-matrix |
| v1/references/go-livepeer/bandwidth-requirements |
| v1/references/go-livepeer/cli-reference |
| v1/references/go-livepeer/gpu-support |
| v1/references/go-livepeer/hardware-requirements |
| v1/references/go-livepeer/prometheus-metrics |
| v1/references/contract-addresses |
| v1/references/example-applications |
| v1/references/awesome-livepeer |
| v1/references/knowledge-base/livestream |
| v1/references/knowledge-base/playback |
| v1/references/knowledge-base/vod |

---

## Frontmatter Issues Summary

| Page path | Issue type | Current value | Canonical replacement |
|---|---|---|---|
| v2/developers/portal | pageType deprecated | `landing` | `navigation` |
| v2/developers/portal | purpose deprecated | `landing` | `orient` |
| v2/developers/portal | lifecycleStage missing | — | `discover` |
| v2/developers/developer-journey | purpose deprecated | `concept` | `orient` or `choose` |
| v2/developers/developer-journey | lifecycleStage missing | — | `discover` |
| v2/developers/concepts/developer-stack | purpose deprecated | `concept` | `explain` |
| v2/developers/concepts/developer-stack | lifecycleStage missing | — | `evaluate` |
| v2/developers/concepts/ai-on-livepeer | purpose deprecated | `concept` | `explain` |
| v2/developers/concepts/ai-on-livepeer | lifecycleStage missing | — | `evaluate` |
| v2/developers/concepts/video-on-livepeer | purpose deprecated | `concept` | `explain` |
| v2/developers/concepts/video-on-livepeer | lifecycleStage missing | — | `evaluate` |
| v2/developers/concepts/running-a-gateway | purpose deprecated | `concept` | `choose` |
| v2/developers/concepts/running-a-gateway | lifecycleStage missing | — | `evaluate` |
| v2/developers/concepts/oss-stack | purpose deprecated | `concept` | `explain` |
| v2/developers/concepts/oss-stack | lifecycleStage missing | — | `optimise` |
| v2/developers/get-started/setup-paths | pageType deprecated | `landing` | `navigation` |
| v2/developers/get-started/setup-paths | purpose deprecated | `landing` | `orient` |
| v2/developers/get-started/setup-paths | lifecycleStage missing | — | `setup` |
| v2/developers/get-started/video-quickstart | purpose deprecated | `tutorial` | `start` |
| v2/developers/get-started/video-quickstart | lifecycleStage missing | — | `setup` |
| v2/developers/get-started/transcoding-quickstart | pageType deprecated | `quickstart` | `instruction` (with `pageVariant: quickstart`) |
| v2/developers/get-started/transcoding-quickstart | purpose incorrect + deprecated | `concept` | `start` |
| v2/developers/get-started/transcoding-quickstart | lifecycleStage missing | — | `setup` |
| v2/developers/get-started/ai-quickstart | pageType deprecated | `quickstart` | `instruction` (with `pageVariant: quickstart`) |
| v2/developers/get-started/ai-quickstart | purpose incorrect + deprecated | `concept` | `start` |
| v2/developers/get-started/ai-quickstart | lifecycleStage missing | — | `setup` |
| v2/developers/get-started/comfystream-quickstart | purpose deprecated | `tutorial` | `start` |
| v2/developers/get-started/comfystream-quickstart | lifecycleStage missing | — | `setup` |
| v2/developers/build/comfystream | purpose deprecated | `operations` | `operate` |
| v2/developers/build/comfystream | lifecycleStage missing | — | `build` |
| v2/developers/build/byoc | pageType deprecated | `how_to` | `instruction` |
| v2/developers/build/byoc | purpose deprecated | `how_to` | `build` |
| v2/developers/build/byoc | lifecycleStage missing | — | `build` |
| v2/developers/build/sdk-gateway | purpose deprecated | `operations` | `build` or `integrate` |
| v2/developers/build/sdk-gateway | lifecycleStage missing | — | `build` |
| v2/developers/build/workload-fit | purpose deprecated | `concept` | `evaluate` |
| v2/developers/build/workload-fit | lifecycleStage missing | — | `evaluate` |
| v2/developers/build/model-support | lifecycleStage missing | — | `build` |
| v2/developers/guides/developer-guides | purpose deprecated | `operations` | `reference` or `orient` |
| v2/developers/guides/developer-guides | lifecycleStage missing | — | `build` |
| v2/developers/guides/resources | purpose deprecated | `operations` | `reference` or `orient` |
| v2/developers/guides/resources | pageType questionable | `guide` | `resource` (closer to curated external content) |
| v2/developers/guides/resources | lifecycleStage missing | — | `build` |
| v2/developers/guides/contribution-guide | purpose deprecated | `operations` | `build` |
| v2/developers/guides/contribution-guide | lifecycleStage missing | — | `build` |
| v2/developers/guides/developer-help | pageType deprecated | `faq` | `reference` (with `pageVariant: compendium`) |
| v2/developers/guides/developer-help | purpose deprecated | `faq` | `reference` |
| v2/developers/guides/developer-help | lifecycleStage missing | — | `troubleshoot` |
| v2/developers/opportunities/overview | pageType deprecated | `overview` | `navigation` |
| v2/developers/opportunities/overview | audience non-canonical | array of non-canonical tokens | `developer` (single canonical token) |
| v2/developers/opportunities/overview | purpose deprecated | `overview` | `orient` |
| v2/developers/opportunities/overview | lifecycleStage missing | — | `discover` |
| v2/developers/opportunities/grants-and-programmes | audience non-canonical | array of non-canonical tokens | `developer` |
| v2/developers/opportunities/grants-and-programmes | purpose deprecated | `how_to` | `evaluate` |
| v2/developers/opportunities/grants-and-programmes | lifecycleStage missing | — | `discover` |
| v2/developers/opportunities/rfps-and-proposals | audience non-canonical | array of non-canonical tokens | `developer` |
| v2/developers/opportunities/rfps-and-proposals | purpose deprecated | `how_to` | `integrate` |
| v2/developers/opportunities/rfps-and-proposals | lifecycleStage missing | — | `optimise` |
| v2/developers/opportunities/oss-contributions | audience non-canonical | array of non-canonical tokens | `developer` |
| v2/developers/opportunities/oss-contributions | purpose deprecated | `how_to` | `build` |
| v2/developers/opportunities/oss-contributions | lifecycleStage missing | — | `build` |
| v2/developers/opportunities/bug-bounties | audience non-canonical | array of non-canonical tokens | `developer` |
| v2/developers/opportunities/bug-bounties | purpose deprecated | `how_to` | `verify` |
| v2/developers/opportunities/bug-bounties | lifecycleStage missing | — | `operate` |
| v2/developers/resources/sdks | pageType deprecated | `landing` | `navigation` |
| v2/developers/resources/sdks | purpose deprecated | `landing` | `orient` |
| v2/developers/resources/sdks | lifecycleStage missing | — | `build` |
| v2/developers/resources/apis | pageType deprecated | `landing` | `navigation` |
| v2/developers/resources/apis | purpose deprecated | `landing` | `orient` |
| v2/developers/resources/apis | lifecycleStage missing | — | `build` |
| v2/developers/resources/awesome-livepeer | pageType deprecated | `landing` | `resource` |
| v2/developers/resources/awesome-livepeer | purpose deprecated | `landing` | `orient` |
| v2/developers/resources/awesome-livepeer | lifecycleStage missing | — | `build` |
| v2/developers/resources/wiki | pageType deprecated | `landing` | `navigation` or `resource` |
| v2/developers/resources/wiki | purpose deprecated | `landing` | `orient` |
| v2/developers/resources/wiki | lifecycleStage missing | — | `build` |
| v2/developers/resources/deepwiki | pageType deprecated | `landing` | `resource` |
| v2/developers/resources/deepwiki | purpose deprecated | `landing` | `orient` |
| v2/developers/resources/deepwiki | lifecycleStage missing | — | `build` |
| v2/developers/resources/compendium/glossary | lifecycleStage missing | — | `build` |

---

## Status Summary Table

| Page path | Section | Status | pageType | Frontmatter complete? |
|---|---|---|---|---|
| v2/developers/portal | Hub | current | landing (DEPRECATED) | incomplete |
| v2/developers/developer-journey | Hub | current | guide | incomplete |
| v2/developers/concepts/developer-stack | Concepts | draft | concept | incomplete |
| v2/developers/concepts/ai-on-livepeer | Concepts | draft | concept | incomplete |
| v2/developers/concepts/video-on-livepeer | Concepts | stub | concept | incomplete |
| v2/developers/concepts/running-a-gateway | Concepts | draft | concept | incomplete |
| v2/developers/concepts/oss-stack | Concepts | draft | concept | incomplete |
| v2/developers/get-started/setup-paths | Get Started | stub | landing (DEPRECATED) | incomplete |
| v2/developers/get-started/video-quickstart | Get Started | stub | tutorial | incomplete |
| v2/developers/get-started/transcoding-quickstart | Get Started | current | quickstart (DEPRECATED) | incomplete |
| v2/developers/get-started/ai-quickstart | Get Started | current | quickstart (DEPRECATED) | incomplete |
| v2/developers/get-started/comfystream-quickstart | Get Started | draft | tutorial | incomplete |
| v2/developers/build/comfystream | Build | draft | guide | incomplete |
| v2/developers/build/byoc | Build | draft | how_to (DEPRECATED) | incomplete |
| v2/developers/build/sdk-gateway | Build | stub | guide | incomplete |
| v2/developers/build/workload-fit | Build | current | concept | incomplete |
| v2/developers/build/model-support | Build | draft | reference | incomplete |
| v2/developers/guides/developer-guides | Guides | current | guide | incomplete |
| v2/developers/guides/resources | Guides | current | guide | incomplete |
| v2/developers/guides/contribution-guide | Guides | current | guide | incomplete |
| v2/developers/guides/developer-help | Guides | current | faq (DEPRECATED) | incomplete |
| v2/developers/opportunities/overview | Opportunities | current | overview (DEPRECATED) | incomplete |
| v2/developers/opportunities/grants-and-programmes | Opportunities | current | guide | incomplete |
| v2/developers/opportunities/rfps-and-proposals | Opportunities | current | guide | incomplete |
| v2/developers/opportunities/oss-contributions | Opportunities | current | guide | incomplete |
| v2/developers/opportunities/bug-bounties | Opportunities | current | reference | incomplete |
| v2/developers/resources/sdks | Resources | stub | landing (DEPRECATED) | incomplete |
| v2/developers/resources/apis | Resources | stub | landing (DEPRECATED) | incomplete |
| v2/developers/resources/awesome-livepeer | Resources | stub | landing (DEPRECATED) | incomplete |
| v2/developers/resources/wiki | Resources | stub | landing (DEPRECATED) | incomplete |
| v2/developers/resources/deepwiki | Resources | current | landing (DEPRECATED) | incomplete |
| v2/developers/resources/compendium/glossary | Resources > Compendium | draft | reference | incomplete |

**Note on page count**: docs.json lists 28 production page paths. The table above lists 32 rows because the `resources` section nests one additional page (`compendium/glossary`) inside a sub-group in the nav. Total production pages scanned: 28 primary nav entries + 1 compendium entry = 28 distinct file paths (glossary is included within the 28 nav paths via nested group). The 32 rows above are because resources/compendium/glossary is the 28th entry — the count is correct at 28.

**Correction**: Re-counting from docs.json: Hub (2) + Concepts (5) + Get Started (5) + Build (5) + Guides (4) + Opportunities (5) + Resources (5 + 1 nested) = 32 total nav paths. The docs.json Resources group contains 5 top-level pages plus a nested Compendium group with 1 page = 6 Resources entries. Total: 2+5+5+5+4+5+6 = **32 pages** in docs.json navigation.

**Corrected Summary**:

**Total pages in docs.json navigation**: 32
**Files found on disk**: 32 (all 32 nav paths exist on disk)
**Empty (in nav, no file)**: 0
**Stubs (<100 words)**: 10 (video-on-livepeer, setup-paths, video-quickstart, sdk-gateway, sdks, apis, awesome-livepeer, wiki — 8 confirmed stubs; plus 2 borderline: deepwiki ~120 words and portal has no body headings but component-rendered content)
**Draft (draft: true in frontmatter or `status: draft`)**: 12 (developer-stack, ai-on-livepeer, video-on-livepeer, running-a-gateway, oss-stack, comfystream-quickstart, build/comfystream, build/byoc, build/model-support, glossary, and implicitly: setup-paths, video-quickstart — 2 have `status: draft` and no content)
**Current**: 14 (portal, developer-journey, transcoding-quickstart, ai-quickstart, workload-fit, developer-guides, resources, contribution-guide, developer-help, opportunities/overview, grants-and-programmes, rfps-and-proposals, oss-contributions, bug-bounties, deepwiki)
**Pages with deprecated pageType values**: 11 (portal, get-started/setup-paths, get-started/transcoding-quickstart, get-started/ai-quickstart, build/byoc, guides/developer-help, opportunities/overview, resources/sdks, resources/apis, resources/awesome-livepeer, resources/wiki, resources/deepwiki)
**Pages with incomplete frontmatter**: 32 of 32 — every page is missing at least `lifecycleStage`
**Workspace artefacts listed**: ~65 archive files + 12 unlisted production-path files
