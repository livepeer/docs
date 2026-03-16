# Tutorial Writing Prompt: Orchestrator Tutorials

## Context

- **Branch**: `docs-v2-dev`
- **Repo**: Livepeer docs v2
- **Tab**: Orchestrators
- **Section**: Guides > Tutorials

Write 6 orchestrator-specific tutorials. Each is a complete end-to-end walkthrough - one specific outcome from start to finish. Not reference, not concepts - "do this, then this, then verify."

## Input Files

### Stubs (in `stubs/`)
Each stub has frontmatter, a PAGE STRUCTURE outline, and a PURPOSE comment. Use these as your skeleton - the H2 structure is your outline.

### Source Pages (in `source-pages/`)
These are the existing guide and setup pages. **Read these for technical accuracy** - extract the exact commands, flags, docker-compose patterns, and verification steps. Do NOT invent commands. If a command appears in a source page, use it verbatim. If you need a command that doesn't appear in any source, flag it with a REVIEW comment.

### Reference (in `reference/`)
- `glossary.mdx` - use canonical terminology (dual mode, not hybrid; operational mode, not payment mode)
- `page-authoring-SKILL.md` - follow all authoring rules
- `plan.md` - understand the job stories each tutorial serves
- `execution-plan.md` - understand the section context

## Standards (apply to ALL tutorials)

### Frontmatter
Keep the existing frontmatter from stubs. Update `status: draft` to `status: current` and add `lastVerified: '2026-03-16'` when content is complete.

### Components
- `StyledSteps` / `StyledStep` for sequential steps (primary tutorial component)
- `CustomCodeBlock` with `icon="terminal"` and short `filename` for all bash commands
- `StyledTable` for any comparison or reference tables (no markdown tables)
- `Note`, `Warning`, `Tip` for callouts
- `CustomDivider` between major sections
- `CardGroup` / `Card` for Related Pages at end
- `BorderedBox variant="accent"` around any tab groups

### Imports needed
```jsx
import { CustomDivider } from "/snippets/components/primitives/divider.jsx"
import { LinkArrow } from '/snippets/components/primitives/links.jsx'
import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'
```

Note: `Steps`, `Step`, `Note`, `Warning`, `Tip`, `Card`, `CardGroup`, `Accordion`, `AccordionGroup`, `Tabs`, `Tab` are Mintlify globals - do NOT import them.

### Style Rules
- UK spelling throughout
- No em dashes (use hyphens)
- Entity-led voice ("the orchestrator" not "your orchestrator")
- Headers concise and technical
- Every code block has `icon="terminal"` for bash or `icon="code"` for config files, plus a short `filename`

### Tutorial Structure Pattern
Every tutorial follows this pattern:
1. **Intro** (2-3 sentences: what you'll build, how long, what you'll verify)
2. **Prerequisites** (checklist with verification commands)
3. **Steps** (using StyledSteps - each step has a clear action and verification)
4. **What Just Happened** (brief explanation mapping steps to concepts)
5. **Related Pages** (CardGroup linking to relevant guide pages)

<CustomDivider />

## Tutorial Briefs

### 1. byoc-cpu-smoke-test.mdx

**What it proves**: The Livepeer orchestrator framework works on this machine. No GPU needed.
**Time**: ~20 minutes
**Job story**: J1 (verify before committing)
**Key source**: `source-pages/byoc-cpu-tutorial.mdx` (612 lines - this is a COMPLETE existing tutorial to ADAPT for orchestrator perspective. It currently has gateway framing - rewrite to lead with the orchestrator side.)

**Steps outline**:
1. Pull go-livepeer Docker image
2. Start a local orchestrator (off-chain, CPU-only): `-orchestrator -transcoder -network offchain`
3. Start a local gateway pointing at it: `-gateway -network offchain -orchAddr`
4. Build or pull a simple CPU BYOC container (PyTrickle green-tint example from the source)
5. Register the BYOC pipeline with the orchestrator
6. Send a test request through the gateway
7. Verify transformed output returned

**What NOT to include**: GPU setup, staking, on-chain anything, pricing config. This is pure "does the framework work?"

**Cross-refs**: Setup Guide (for full production setup), Workload Options (for what to run next)

<CustomDivider />

### 2. zero-to-first-reward.mdx

**What it proves**: The operator can install, configure, stake, activate, and claim a first LPT reward.
**Time**: 4-8 hours (honest - includes LPT acquisition time)
**Job story**: J1 (zero to earning)
**Key sources**: `source-pages/setup-guide.mdx`, `setup-install.mdx`, `setup-configure.mdx`, `setup-connect-activate.mdx`, `setup-test.mdx`

**Steps outline**:
1. Install go-livepeer (Docker pull)
2. Configure for video transcoding: docker-compose with `-orchestrator -transcoder -network arbitrum-one-mainnet -ethUrl <RPC> -serviceAddr <PUBLIC:8935> -nvidia <IDs> -pricePerUnit <WEI>`
3. Fund wallet with arbETH (link to Arbitrum exchanges)
4. Acquire and stake LPT via livepeer_cli
5. Activate on-chain (register service URI)
6. Verify on Explorer (active set position, service URI, pricing)
7. Send test stream via ffmpeg, verify transcoded output
8. Wait for next round (~22 hours max)
9. Call Reward() (or verify auto-call with `-reward` flag)
10. See reward on Explorer

**Critical**: Be honest that step 3-4 (acquiring LPT) may take hours to days depending on exchange availability and bridging. The tutorial should note this as a waiting step, not gloss over it.

**What NOT to include**: AI setup, dual mode, pool joining, pricing strategy. This is video transcoding to first reward, nothing more.

**Cross-refs**: AI Earning Quickstart (for adding AI next), Dual Mode Configuration (for adding AI to this setup), Earning Model (for understanding what you just earned)

<CustomDivider />

### 3. ai-earning-quickstart.mdx

**What it proves**: AI inference works, the operator can earn from AI with minimal LPT.
**Time**: ~2 hours (including model download)
**Job story**: J6 (AI-first, low LPT entry)
**Key sources**: `source-pages/ai-inference-operations.mdx`, `diffusion-pipeline-setup.mdx`, `model-hosting.mdx`, `model-demand-reference.mdx`

**Steps outline**:
1. Install go-livepeer + pull AI runner container (`livepeer/ai-runner`)
2. Write `aiModels.json` with ONE warm diffusion model (recommend `ByteDance/SDXL-Lightning` or `SG161222/RealVisXL_V4.0_Lightning` - check source pages for current recommended model)
3. Write docker-compose: orchestrator with `-orchestrator -transcoder -aiWorker -aiModels -network arbitrum-one-mainnet -ethUrl <RPC> -nvidia <IDs>` + AI runner service
4. Start containers, wait for model download from HuggingFace
5. Test locally: `curl -X POST http://localhost:8935/text-to-image` with the model
6. Fund wallet with minimal arbETH
7. Register on AIServiceRegistry
8. Verify at tools.livepeer.cloud/ai/network-capabilities

**Key message**: "No active set membership needed. AI routing is capability-based. A 24GB GPU with a warm model can start receiving jobs immediately after registration."

**What NOT to include**: Video transcoding, staking for active set, reward calling (may not be relevant at minimal stake). This is AI-only, fast.

**Cross-refs**: Add AI to Video (for existing video operators), Model Demand Reference (for choosing models), Pricing Strategy (for setting AI prices)

<CustomDivider />

### 4. add-ai-to-video-node.mdx

**What it proves**: An existing video orchestrator can add AI without breaking anything.
**Time**: ~1 hour (plus model download)
**Job story**: J2 (hybrid bridge - the most important tutorial for the majority use case)
**Key sources**: `source-pages/dual-mode-configuration.mdx` (PRIMARY), `ai-inference-operations.mdx`, `diffusion-pipeline-setup.mdx`

**Steps outline**:
1. **What changes and what does NOT change** (the most important section - existing video config, ports, staking, reward calling ALL stay the same)
2. Check VRAM headroom: `nvidia-smi` to see available VRAM after video sessions
3. Pull AI runner container
4. Write `aiModels.json` with one warm model that fits remaining VRAM
5. Add flags to existing docker-compose: `-aiWorker -aiModels /path/to/aiModels.json` + AI runner service
6. Restart (NOT a fresh start - updating existing deployment)
7. Verify video still works: send test stream
8. Verify AI works: `curl` test inference
9. Verify both on Explorer / tools.livepeer.cloud
10. Register AI capabilities on AIServiceRegistry (if on-chain)

**Critical framing**: "This is an additive change. Nothing about your video setup changes. The orchestrator process gains AI capability alongside video. NVENC/NVDEC use dedicated silicon that does not compete with CUDA for AI inference."

**What NOT to include**: Fresh setup from scratch (that's ai-earning-quickstart), detailed model selection strategy (that's ai-model-management), VRAM budgeting theory (that's capacity-planning). This is purely "add AI to what you have."

**Cross-refs**: Capacity Planning (for VRAM budgeting), AI Model Management (for ongoing model operations), Dual Mode Configuration (for the full reference)

<CustomDivider />

### 5. full-ai-pipeline-tutorial.mdx

**What it proves**: The complete gateway-to-orchestrator-to-AI-runner pipeline works end-to-end.
**Time**: ~2-3 hours
**Job story**: J2 + J4 (understand the full system, bridge gateway-orchestrator gap)
**Key sources**: `source-pages/gateway-setup.mdx`, `gateway-docker-code.jsx`, `ai-inference-operations.mdx`, `diffusion-pipeline-setup.mdx`, `gateway-orchestrator-interface.mdx`

**Steps outline**:
1. **Architecture overview**: mermaid diagram showing Client → Gateway → Orchestrator → AI Runner → Response
2. Set up orchestrator with AI runner (reuse steps from ai-earning-quickstart but off-chain for simplicity)
3. Set up gateway (off-chain, same machine): `-gateway -network offchain -orchAddr 127.0.0.1:8935 -httpIngest`
4. Download a HuggingFace model (walk through the model selection from model-demand-reference)
5. Configure `aiModels.json` with the chosen model
6. Start both services
7. Send inference request THROUGH THE GATEWAY (not directly to orchestrator): `curl -X POST http://localhost:<gateway-port>/text-to-image`
8. Trace the request through logs: gateway log shows routing, orchestrator log shows job receipt, AI runner log shows inference
9. Verify response returned through the full pipeline

**Key message**: "Many operators run both roles. This tutorial shows how both sides interact with a real AI model. The gateway handles routing and payment negotiation. The orchestrator handles compute. They are separate processes that communicate via the Livepeer protocol."

**What NOT to include**: On-chain setup, staking, production configuration. This is a local end-to-end verification.

**Cross-refs**: Gateway-Orchestrator Interface (for production combined setup), Gateway Relationships (for how gateways select orchestrators), AI Inference Operations (for the concepts behind what just happened)

<CustomDivider />

### 6. realtime-ai-tutorial.mdx

**What it proves**: Live video-to-video AI processing works - stream in, transformed stream out.
**Time**: ~3 hours (most complex tutorial)
**Job story**: J2 (realtime AI is the highest-value compute)
**Key sources**: `source-pages/realtime-ai-setup.mdx` (PRIMARY - 590 lines of detailed setup), `gateway-orchestrator-interface.mdx`

**Steps outline**:
1. **What realtime AI is**: not batch request/response but continuous frame-by-frame transformation
2. Prerequisites: 24GB+ GPU, Docker, ffmpeg or WebRTC client
3. Pull the live AI runner: `livepeer/ai-runner:live-base`
4. Configure a ComfyStream workflow (use the simplest available - check realtime-ai-setup.mdx for the recommended starter workflow)
5. Write `aiModels.json` for the live-video-to-video pipeline
6. Set up orchestrator with live runner
7. Set up gateway for live AI routing
8. Send a live stream (RTMP via ffmpeg or WebRTC)
9. View the transformed output stream
10. Monitor latency (target: &lt;100ms per frame)

**Critical**: This tutorial is the most technically demanding. The source page (realtime-ai-setup.mdx) has extensive content on ComfyStream, workflows, latency optimisation, and VRAM management. Extract the SETUP steps, not the tuning guidance.

**Key message**: "Realtime AI is Livepeer's highest-value compute offering. A continuous video stream enters and a transformed stream exits. This is fundamentally different from batch inference."

**What NOT to include**: Batch AI setup, model management, pricing. This is purely "get realtime AI working and see the output."

**Cross-refs**: Realtime AI Setup (for the full reference and tuning), Capacity Planning (for VRAM requirements), Full AI Pipeline Tutorial (for batch comparison)

<CustomDivider />

## General Notes

1. **Do NOT fabricate commands.** If a command is not in any source page, use a REVIEW flag: `{/* REVIEW: confirm exact command for [action] */}`
2. **Do NOT assume ports.** Check source pages for which ports are used. The standard is 8935 for HTTP, 7935 for CLI/metrics, 1935 for RTMP.
3. **Every step must have a verification.** "Run X" is incomplete. "Run X. Expected output: Y" is complete.
4. **Time estimates must be honest.** If a step requires waiting (model download, round completion, LPT acquisition), say so.
5. **Each tutorial is self-contained.** Do not say "see the Setup Guide for installation" - include the install command in the tutorial. Cross-refs at the end for deeper reading, not as prerequisites for completing the tutorial.
6. **The tutorials replace imported gateway content.** They must be orchestrator-focused. The orchestrator is the protagonist, not the gateway.
