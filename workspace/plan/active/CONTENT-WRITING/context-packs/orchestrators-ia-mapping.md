# Orchestrators IA Mapping — Nav Pages Against Confirmed IA

**Generated:** 2026-03-23
**Source IA:** `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md` (12 sections, S1-S12)
**Source nav:** `workspace/plan/active/CONTENT-WRITING/context-packs/orchestrators-tree-nav.md` (72 nav pages, 13 orphans)
**Verdict key:** YES = page substantially fulfils the section's reader question, purpose, pageType, entry/exit states; PARTIALLY = page covers part of the section but not all, or is positioned/framed differently; NO = page is in nav but does not serve this section

---

## S1 — Which path is mine?

**Reader question:** "I have GPU hardware — am I a solo operator, an AI-focused operator, or a pool node? Do I need to buy LPT?"
**purpose:** `orient` | **pageType:** `navigation` | **lifecycleStage:** `discover`
**Entry state:** Arrived at the tab; has GPU hardware; does not know which setup path applies or whether LPT is required
**Exit state:** Has identified which of three paths applies (solo video/dual, AI-focused, pool node) and has navigated to the correct starting section

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/navigator` | Find Your Path | PARTIALLY | Explicit disambiguation page with path matrix and 7 accordion entry points. Purpose and title align with S1. pageType is `landing`, not `navigation` as required. Does not surface the LPT-required vs. not-required distinction as the primary decision gate. |
| `v2/orchestrators/portal` | Orchestrator Portal | PARTIALLY | Primary tab entry point with hero section and section links. Serves as orientation frame but is mode: frame, not a path-selection tool. Does not answer "which path is mine?" directly — it links onward. |
| `v2/orchestrators/guides/deployment-details/setup-options` | Setup Options | PARTIALLY | Covers the deployment taxonomy (setup type, software path, operational mode, workload mode) with comparison tables. Good supplementary path-choice reference but is positioned mid-flow in Guides > Deployment Details, not at tab entry. Would not be found by a new operator arriving at S1. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- No page uses pageType: `navigation` as required by the IA spec. The IA locks S1 as pageType: navigation per design decision D-NAV-01. navigator.mdx uses `landing`.
- The LPT-required vs. not-required distinction across paths is not the stated focus of any existing page. An AI-only operator who reads the disambiguation entry could proceed without understanding they do not need LPT.
- S1 requires a single shared navigation file that all paths reference as their entry point. Currently portal.mdx and navigator.mdx share the entry function with no clear canonical anchor.
- setup-options.mdx would not be read at the S1 stage by a first-time visitor — it requires navigation into Guides > Deployment Details.

---

## S2 — Is this viable for my hardware and situation?

**Reader question:** "Will my GPU and capital actually qualify for meaningful income on this network — and what would I need to invest?"
**purpose:** `evaluate` | **pageType:** `concept` | **lifecycleStage:** `evaluate`
**Entry state:** Has identified their candidate path from S1; has not yet assessed hardware requirements or economic fit
**Exit state:** Has made a go/no-go decision: hardware meets path requirements, income model is understood, participation cost is assessed

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/operator-considerations/operator-rationale` | Operating Rationale | PARTIALLY | Addresses the go/no-go question with a quick-path summary, cost categories, viability questions, and a decision matrix. Covers video vs. AI comparison. pageType is `guide`, not `concept`. Does not synthesise hardware fit + income mechanics + participation cost in one page. |
| `v2/orchestrators/guides/operator-considerations/business-case` | Business Case | PARTIALLY | Commercial vs. hobbyist operator comparison, service fee economics, operational standards, gateway relationships. Covers the commercial viability framing well. Does not serve the capital-constrained or AI-specialist personas arriving at S2 — focuses on commercial operators. |
| `v2/orchestrators/guides/operator-considerations/operator-impact` | Operator Impact | NO | Covers governance mechanics (LIP process, stake-weighted voting), scope of governance, sovereign compute case. This is outward-looking (network impact, governance participation) — it does not serve the "is this viable for me?" reader question of S2. |
| `v2/orchestrators/guides/operator-considerations/requirements` | Requirements | PARTIALLY | Hardware tiers, NVENC session limits by card, VRAM requirements by pipeline, livepeer_bench capacity testing, pre-launch checklist. Serves the "will my hardware qualify" portion of S2 only. pageType is `reference`, not `concept`. |
| `v2/orchestrators/resources/gpu-support` | GPU Support Matrix | PARTIALLY | NVIDIA GPU compatibility, NVENC/NVDEC session limits, driver requirements. Supports the hardware-qualification portion of S2 as a reference resource. Does not address income or participation cost. |
| `v2/orchestrators/guides/staking-and-rewards/earning-model` | Earning Model | PARTIALLY | Two revenue streams (ETH fees + LPT inflation), gateway selection factors, commission parameters, video vs. AI comparison. Covers the "what would I earn" portion of S2. Filed under Staking and Earning — a reader arriving at S2 via Operator Considerations would not naturally find it. |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | Workload Options | PARTIALLY | 4 job types at a glance, routing mechanics for each, per-VRAM tier recommendations. Serves the "what work is available for my hardware" question but does not address economics or participation cost. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- No single page synthesises hardware fit + income mechanics + participation cost (LPT stake requirement or pool arrangement) into one unified go/no-go evaluation concept page. S2 requires a single `concept` pageType page that answers the full viability question.
- The relevant content is split across three nav groups: Operator Considerations (rationale, requirements), Staking and Earning (earning-model), and Workloads (workload-options). A reader at the S2 stage cannot reasonably find all of this.
- operator-impact.mdx does not belong in S2 at all. Its governance/network-impact content is orthogonal to a first-time operator's viability assessment.
- The "delegator-turned-operator" persona requires S2 to surface the cost-of-operation framing explicitly comparing solo operator earnings vs. continued delegation. No existing page does this comparison directly.
- Gap note from canonical IA: S2 must surface participation cost in terms the capital-constrained operator can act on — not just define LPT but explain what amount is currently required to be competitive.

---

## S3 — How does work reach me and how do I get paid?

**Reader question:** "What determines whether gateways send me jobs, and how do fees and inflation rewards actually arrive?"
**purpose:** `explain` | **pageType:** `concept` | **lifecycleStage:** `evaluate`
**Entry state:** Has decided to proceed; does not understand routing mechanics, probabilistic micropayments, or how reward calls work
**Exit state:** Can describe two income streams, how video routing (stake weight) differs from AI routing (capability advertisement), what reward/fee cut affect — sufficient for configuration decisions later

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/concepts/incentive-model` | Orchestrator Incentive Model | YES | Two revenue streams (ETH fees + LPT inflation), PM mechanics, active set, fee cut/reward cut, operator models. pageType: `concept`. Primary S3 match — covers the core of how work reaches an operator and how they get paid. |
| `v2/orchestrators/guides/staking-and-rewards/earning-model` | Earning Model | PARTIALLY | Covers both income streams and gateway selection factors but is a `concept` page filed under Staking and Earning. Duplicates significant ground with incentive-model.mdx from S3's perspective. |
| `v2/orchestrators/guides/payments-and-pricing/payments` | Payments | YES | PM ticket flow, ticket structure, Redeemer, video vs. AI payment differences, clearinghouses, funding your node. pageType: `concept`. Directly covers the payment mechanics portion of S3. |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | Reward Mechanics | PARTIALLY | LPT reward flow, automatic vs. manual calling, gas costs, commission strategy, ETH fee flow. Covers the inflation reward portion of S3 in depth. pageType: `guide`, not `concept`. Positioned in Staking and Earning — may not be read at the S3 stage. |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Payment Receipts | PARTIALLY | PM ticket receipt mechanics, win condition, Redeemer, ETH balance requirement. Sub-detail of S3's payment mechanics section. Status: draft. pageType: `concept`. |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships` | Gateway Relationships | PARTIALLY | Gateway discovery (4 mechanisms), multi-factor selection algorithm, how to receive more work, Loki API for routing introspection. Directly addresses "what determines whether gateways send me jobs." Positioned in Advanced Operations — unlikely to be read at the S3 evaluate stage. |
| `v2/orchestrators/concepts/role` | The Orchestrator Role in the Livepeer Network | PARTIALLY | Describes routing and role at overview level. Partial overlap with S3 but is more general context than S3's specific payment/routing mechanics. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- The critical S3 gap (flagged in canonical IA gap note 1): no page explicitly and prominently states that active set membership is NOT required for AI inference routing. An AI-only operator reading incentive-model.mdx could proceed without understanding this. The statement must be prominent and explicit, not buried.
- The "reward call is an active requirement, not a passive payout" framing required by S3 is present in reward-mechanics.mdx but may not be the leading statement. S3 must exit with this understood.
- S3 content is fragmented across 4+ pages: incentive-model (gateway selection + reward structure), payments (PM mechanics), reward-mechanics (LPT distribution), gateway-relationships (routing factors). No single `concept` page synthesises all of this. The reader at the S3 evaluate stage needs one page.
- gateway-relationships.mdx is in Advanced Operations — it addresses the S3 question directly but a reader at the evaluate stage will not find it there.

---

## S4 — Prerequisites: what must be in place before setup

**Reader question:** "What hardware, tokens, wallet, and network access do I need to have ready before I install anything?"
**purpose:** `learn` | **pageType:** `concept` | **lifecycleStage:** `setup`
**Entry state:** Has decided which path to take; has not yet acquired LPT, ETH, or confirmed hardware/network prerequisites
**Exit state:** Hardware confirmed, ETH wallet funded for gas, LPT acquired and staked (solo video path) or pool arrangement confirmed (pool node path), service URI is publicly reachable

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/setup/rcs-requirements` | Setup Checklist | YES | Pre-flight checklist for orchestrator setup — tabbed by node mode (Video/AI/Dual). Covers hardware, software, network, wallet/tokens, quick verification commands. pageType: `how_to`. The closest existing match to S4's function — serves the "what must be in place" purpose even if pageType is how_to rather than concept. |
| `v2/orchestrators/guides/operator-considerations/requirements` | Requirements | PARTIALLY | GPU support policy, NVENC session limits by card tier, VRAM requirements by AI pipeline, system stack minimums, capacity testing with livepeer_bench, pre-launch readiness checklist. Detailed hardware reference; serves S4's hardware prerequisite portion as a reference. |
| `v2/orchestrators/resources/arbitrum-exchanges` | Arbitrum Exchanges | PARTIALLY | Where to acquire ETH and LPT on Arbitrum One — exchanges, bridges, DEXs. Required reference for S4's token acquisition step. pageType: `reference`. Serves as a resource linked from S4, not as the prerequisite concept page itself. |
| `v2/orchestrators/resources/arbitrum-rpc` | Arbitrum RPCs | PARTIALLY | Arbitrum One RPC endpoint options, provider comparison, rate limits. Required for S4's `-ethUrl` setup. pageType: `reference`. Same role as arbitrum-exchanges — a reference resource supporting S4. |
| `v2/orchestrators/setup/connect-and-activate` | Connect to Arbitrum | PARTIALLY | Wallet and Arbitrum connection, ETH funding, LPT staking (8 steps). Covers the on-chain prerequisite steps but is positioned as a Setup how-to step (S5 territory), not as a prerequisites gate. pageType: `how_to`. |
| `v2/orchestrators/resources/gpu-support` | GPU Support Matrix | PARTIALLY | NVIDIA GPU compatibility, NVENC/NVDEC session limits, driver requirements. Hardware prerequisite reference supporting S4. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- Gap note from canonical IA (gap note 2 and 3): S4 must explicitly separate LPT acquisition as "solo video path only" and make explicit that pool node operators and AI-only operators do NOT need LPT. No existing page structures prerequisites this way — rcs-requirements.mdx has mode-tabbed hardware but the LPT section does not clearly gate by path.
- The LPT acquisition path (how to get LPT procedurally — not just a list of exchanges) is not covered by any existing page. arbitrum-exchanges.mdx is a reference list; it does not walk the operator through the acquisition and bridging process with clear steps.
- connect-and-activate.mdx belongs in S4 prerequisite territory more than S5 installation territory — the structural placement conflicts with the IA's prerequisite-before-setup ordering.
- The IA requires S4's pageType to be `concept` — explaining prerequisites as a concept gate before setup. rcs-requirements.mdx is `how_to` (a checklist), which is close but not the same reader orientation.

---

## S5 — Get your node running

**Reader question:** "How do I install go-livepeer, configure my flags, register on-chain, and confirm my node is live?"
**purpose:** `start` | **pageType:** `instruction` | **lifecycleStage:** `setup`
**Entry state:** Prerequisites from S4 confirmed; go-livepeer not yet installed
**Exit state:** Running, registered go-livepeer node; service URI is reachable; reward calling configured or automated; node confirmed reachable from the network

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/setup/guide` | Run an Orchestrator | YES | 4-step setup flow overview; top-level S5 entry. pageType: `overview`. Serves as the S5 entry/orientation page. |
| `v2/orchestrators/setup/rs-install` | Install go-livepeer | YES | Docker (recommended), Linux, Windows, macOS paths; NVIDIA Container Toolkit setup; verification commands. pageType: `how_to`. Core S5 install step — direct match. |
| `v2/orchestrators/setup/configure` | Configure Your Orchestrator | YES | Docker-compose templates by mode (video/AI/dual), complete flag reference tables, per-mode configuration. pageType: `how_to`. Core S5 configure step. |
| `v2/orchestrators/setup/connect-and-activate` | Connect to Arbitrum | YES | 8 steps: RPC, wallet, ETH, LPT staking, activation, AI capabilities, Explorer check, reward calling. pageType: `how_to`. Core S5 activation step. Also covers some S4 prerequisite territory. |
| `v2/orchestrators/setup/rcs-requirements` | Setup Checklist | PARTIALLY | Pre-setup checklist — serves as S4 gate within the setup section. Is the prerequisite verification step before S5 begins. Partially S4, partially S5 entry gate. |
| `v2/orchestrators/quickstart/guide` | Orchestrator Quickstart | PARTIALLY | Quickstart overview page; "Verify Your Hardware" entry point, links to video and AI tests. pageType: `overview`. Fast-path through S5 for operators who want minimal friction. Partially duplicates setup/guide.mdx framing. |
| `v2/orchestrators/quickstart/video-transcoding` | Quickstart: Verify Your Hardware | PARTIALLY | Complete off-chain smoke test: video transcoding + AI inference test using `-network offchain`. pageType: `quickstart`. Serves S5 hardware verification before on-chain setup. Also partially S8 (AI inference test). |
| `v2/orchestrators/quickstart/tutorial` | Quickstart Tutorial | PARTIALLY | Thin redirector/linker page (3 items). Navigational utility only — links to guide, video-transcoding, and AI-prompt-start. Does not add instructional content. |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | Dual Mode Configuration | PARTIALLY | Status: draft. Dual mode setup, prerequisites, two paths (fresh vs. adding AI to existing node), verification, VRAM resource management. Extends S5 for dual-mode operators. |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` | Orchestrator-Transcoder Split Setup | PARTIALLY | O-T split architecture: orchestrator (no GPU, handles protocol) + separate transcoder machines (GPU compute). Flags `-orchSecret`, `-orchAddr`. Extends S5 for advanced split deployments. |
| `v2/orchestrators/guides/deployment-details/siphon-setup` | Siphon Split Setup | PARTIALLY | OrchestratorSiphon setup: secure machine (Python keystore + reward calling) + GPU machine (go-livepeer transcoder mode). Extends S5 for key-isolation deployments. |
| `v2/orchestrators/resources/technical/cli-flags` | CLI Flags Reference | PARTIALLY | CLI flags and gRPC field mapping for go-livepeer orchestrators. pageType: `reference`. Supports configure.mdx and S5 setup steps as a reference resource — not an instruction page itself. |

### Coverage verdict: YES — best-covered section

### GAP notes

- S5 is the best-covered section in the tab. The core setup sequence (install → configure → connect-activate) is complete and sequenced.
- IA design flag (S5 split flag): S5 is written for solo operators but pool node candidates must be routed out to S6 before reaching S5. No existing page within the setup section explicitly gates pool node candidates away with a redirect. This is a structural gap.
- Reward call automation as a setup-phase step: connect-and-activate.mdx covers reward calling as a step, but reward-call-tuning.mdx (positioned in Config and Optimisation) may be where detailed automation configuration lives — this creates a split across S5 and S10 territory for the same task.
- quickstart/tutorial.mdx is a thin redirector with no instructional value — it adds noise rather than clarity in the quickstart section.
- quickstart/guide.mdx and setup/guide.mdx partially duplicate the "overview before setup" function without clear audience differentiation.

---

## S6 — Join as a pool node

**Reader question:** "I don't have enough stake to go solo — how does pool participation work and how do I connect?"
**purpose:** `orient` | **pageType:** `guide` | **lifecycleStage:** `evaluate`
**Entry state:** Identified via S1 as pool node candidate; no setup started
**Exit state:** Has decided whether pool participation suits their situation; if proceeding: understands connection architecture, fee split, and has information needed to engage with a pool operator

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/deployment-details/join-a-pool` | Join a Pool | PARTIALLY | pageType: `quickstart`. Pool architecture, pool vs. solo comparison, 4 steps to connect. This is the original "Join a Pool" page. Both join-a-pool.mdx and new-join-a-pool.mdx appear in nav with the same display title "Join a Pool" — creating reader confusion. |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool` | Join a Pool | YES | pageType: `guide`. Pool architecture, pool vs. solo comparison, 4-step connection process. The revised version. Should be the canonical S6 page if the duplicate is resolved. |
| `v2/orchestrators/resources/community-pools` | Community Orchestrator Pools | PARTIALLY | pageType: `reference`. Community pool comparison and pool listing. Required reference for S6's "find a pool to join" step. Supports S6 but does not explain how to connect. |
| `v2/orchestrators/guides/advanced-operations/pool-operators` | Pool Operators | PARTIALLY | pageType: `guide`. Operating a pool (accepting external workers), pool architecture, orchSecret, job routing, off-chain fee distribution. Addresses the operator (not pool node) perspective. Relevant context for understanding the arrangement but is addressed to the wrong persona for S6. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- Critical structural problem: two pages in nav with the identical display title "Join a Pool" (join-a-pool.mdx, pageType: quickstart, and new-join-a-pool.mdx, pageType: guide). A reader cannot distinguish them. This must be resolved — join-a-pool.mdx should be archived or its sidebarTitle changed before the section can be cleanly executed.
- The IA requires S6 to include the three-way decision gate: pool vs. solo vs. AI-first (no stake required for AI). No existing page surfaces this three-way choice explicitly.
- The arrangement process — how to contact a pool operator, what to agree on, what the off-chain fee split means in practice — is likely not covered procedurally. community-pools.mdx is a list; it does not explain the arrangement steps.
- S6 must be explicitly scoped to the capital-constrained-operator persona with explicit "you don't need LPT for this path" and "you don't need LPT for AI-only path either" statements.

---

## S7 — Set your pricing and cuts

**Reader question:** "What should I charge for transcoding and AI inference, and what reward cut and fee cut should I set?"
**purpose:** `configure` | **pageType:** `guide` | **lifecycleStage:** `setup`
**Entry state:** Node installed and running (S5 complete); no deliberate pricing or cut strategy set yet
**Exit state:** Has set pricePerUnit (and AI pricing) to a value they can justify against network benchmarks; has set reward cut and fee cut with clear understanding of the earnings-vs-delegation-attractiveness trade-off

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Pricing Strategy | YES | Video pricing in wei/USD, AI pricing in aiModels.json, per-gateway pricing (`-pricePerGateway`), competitive benchmarking, MaxPrice threshold context, autoAdjustPrice. pageType: `how_to`. Strong S7 match for the pricing half. Does not cover reward cut/fee cut setting. |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | Video Transcoding Operations | PARTIALLY | Video pricing (wei vs. USD options, autoAdjustPrice), session limits methodology, NVENC session caps by GPU tier, ABR ladder. Covers the video pricing side in depth. pageType: `guide`. More detailed than S7 requires — serves S7 and S11 both. |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | Reward Mechanics | PARTIALLY | LPT reward flow, automatic vs. manual calling, gas costs, commission strategy (reward cut and fee cut from a delegation angle). Contains cut-setting information but framed from the delegation and reward mechanics perspective, not the operator's own-earnings-first framing S7 requires. |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | Delegate Operations | PARTIALLY | Attracting delegators, Explorer ROI calculation, what delegators evaluate (including fee share/reward share), commission strategies. Covers cut settings from the delegator-attraction angle. The IA explicitly flags (gap note 4) that S7 must address cuts from the operator's own-earnings perspective first — this page does not do that. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- Gap note from canonical IA (gap note 4): S7 must address cut settings from the operator's perspective (what to set and why for own earnings) — not from the delegator's perspective (what the cut means to delegators). No existing page does this in the S7 framing. delegate-operations.mdx addresses cuts from the delegator-attraction angle, which is the wrong starting point for S7.
- The reward cut and fee cut setting workflow — where to set them via livepeer_cli or connect-and-activate, what values are competitive, how to change them on-chain, when changes take effect — is not consolidated in any single S7-appropriate page.
- pricing-strategy.mdx covers the pricing half of S7 well but does not address cuts at all.
- Reward cut/fee cut guidance is currently split between reward-mechanics.mdx (mechanics framing), delegate-operations.mdx (delegation framing), and connect-and-activate.mdx (activation step where they are first set) — none owns the S7 configuration-guide framing.

---

## S8 — Set up AI pipelines

**Reader question:** "How do I configure AI inference, choose which pipelines to support, and advertise my capabilities to gateways?"
**purpose:** `build` | **pageType:** `instruction` | **lifecycleStage:** `build`
**Entry state:** go-livepeer installed and running (S5 complete); AI configuration not yet started; VRAM capacity confirmed for target pipelines
**Exit state:** aiModels.json configured with at least one pipeline; warm model behaviour understood; capabilities advertised; at least one AI inference request successfully processed

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/quickstart/AI-prompt-start` | Add AI to Your Node | YES | For existing video nodes adding AI. Hardware VRAM check, pull ai-runner image, configure aiModels.json, update startup command with `-aiWorker`, `-aiModels`, `-aiModelsDir`, Docker socket mount, verify AI active. pageType: `guide`. Strong S8 entry point for the "adding AI to video node" path. |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | AI Inference Operations | YES | AI job routing, gateway selection fields, batch vs. live AI comparison, 10 pipeline types with VRAM, capability advertisement mechanism. pageType: `concept`. Core S8 conceptual grounding — explains capability advertisement which is the S8 exit requirement. |
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | Workload Options | PARTIALLY | 4 job types (video, batch AI, Cascade, LLM), routing mechanics for each, per-VRAM tier recommendations, setup guide links. pageType: `concept`. Serves S8 pipeline selection decisions. Also partially S2. |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | Diffusion Pipeline Setup | YES | Batch AI setup: prerequisites, how AI worker runs pipelines (aiModels.json → Docker containers → capabilities advertised), minimal working example, complete field reference. pageType: `guide`. Primary pipeline setup instruction for diffusion models. S8 core content. |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | LLM Pipeline Setup | YES | LLM pipeline setup using Ollama-based runner; Docker Compose configuration, model selection for 8 GB VRAM GPUs, model ID mapping, aiModels.json entries, USD pricing. pageType: `how_to`. Status: draft. S8 pipeline-specific instruction. |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | Cascade Setup | YES | Cascade/ComfyStream live-video-to-video pipeline. Architecture (WebRTC → gateway → go-livepeer AI Worker → ai-runner:live-base → frame loop), ComfyStream, StreamDiffusion, performance tuning. pageType: `guide`. S8 real-time AI pipeline instruction. |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | Audio and Vision Pipelines | YES | Audio-to-text (Whisper), text-to-speech, image-to-text, segment-anything-2 pipelines. VRAM requirements, aiModels.json entries, pricing units, testing commands. pageType: `how_to`. Status: draft. S8 pipeline-specific instruction. |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | Model Hosting | YES | HuggingFace model IDs, automatic vs. manual download, storage layout, gated model access, Livepeer verified model list, BYOC. pageType: `how_to`. Status: draft. Required S8 step before pipeline setup can complete. |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Model and Demand Reference | PARTIALLY | Demand signals (tools.livepeer.cloud), VRAM by pipeline table, GPU reference by persona, warm vs. cold criticality, Beta warm model constraint, multi-GPU configuration, complete aiModels.json schema, model selection heuristics, BYOC. pageType: `reference`. Supports S8 pipeline selection — detailed reference, not instruction. Also S11 (VRAM strategy). |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | AI Model Management | YES | Warm vs. cold strategy, Beta constraint (1 warm model/GPU), VRAM allocation, model rotation, SFAST/DEEPCACHE optimisation. pageType: `how_to`. Core S8 aiModels.json configuration and warm/cold model management. |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | Dual Mode Configuration | PARTIALLY | Status: draft. Dual mode: what changes (video only vs. AI only vs. dual comparison table), two setup paths (fresh vs. adding AI to existing node), VRAM resource management. pageType: `how_to`. S8 overlap for dual-mode operators — also S5 territory. |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | AI Earning Quickstart | YES | End-to-end tutorial: one GPU, one warm model, no active set membership required, start earning from AI inference in under 2 hours. pageType: `tutorial`. Serves S8 instructional path as a complete walkthrough. |
| `v2/orchestrators/guides/tutorials/add-ai-to-video-node` | Add AI to a Video Node | YES | Add AI inference to existing video orchestrator — exact configuration delta, VRAM headroom check, dual earnings verification. pageType: `tutorial`. Serves S8 for dual-mode operators. |
| `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` | Full AI Pipeline Tutorial | YES | End-to-end: gateway routes inference to orchestrator, AI runner processes it, result returns through full pipeline. Off-chain local setup with HuggingFace model. pageType: `tutorial`. Serves S8 as a complete instructional walkthrough. |
| `v2/orchestrators/guides/tutorials/realtime-ai-tutorial` | Realtime AI Tutorial | YES | Cascade/ComfyStream live video-to-video AI. A video stream enters, a transformed stream exits in under 100ms per frame. pageType: `tutorial`. Serves S8 Cascade pipeline path. |
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | BYOC CPU Smoke Test | PARTIALLY | Verify Livepeer orchestrator framework works on machine in under 20 minutes — no GPU, no wallet, no on-chain registration. pageType: `tutorial`. Serves S8 BYOC path (IA design flag: BYOC path not covered). Smoke-test scope only. |
| `v2/orchestrators/concepts/capabilities` | Orchestrator Capabilities | PARTIALLY | Workload types (video, AI pipeline types), capability advertisement, gateway selection factors. pageType: `concept`. Provides conceptual grounding for capability advertisement — partially S2, partially S8. |

### Coverage verdict: YES — most content in the tab; capability advertisement instruction gap

### GAP notes

- IA design flag: S8 may need to split — the AI configuration section is substantially longer than the video configuration surface. The current nav has 10+ S8-relevant pages without a master S8 orchestration/sequencing page.
- IA design flag: BYOC path not fully covered — byoc-cpu-smoke-test.mdx is a smoke test only; full BYOC setup (custom Docker containers for non-standard AI models) may lack a dedicated instruction page.
- Capability advertisement — the mechanism by which an orchestrator registers AI capabilities with gateways (on-chain registry or discovery webhook) — is explained conceptually in ai-inference-operations.mdx but the explicit "here is how to complete the capability advertisement configuration step" instruction may not exist as a standalone actionable step in any page. The S8 exit state requires "capabilities advertised" — this must be explicitly instructed, not just described.
- The large number of pipeline-specific pages (diffusion, LLM, realtime, audio-vision) and tutorials creates navigation fragmentation. A reader trying to execute S8 faces 10+ pages without a clear master instruction page that sequences them. S8 needs an orchestration/index page that routes operators to the correct pipeline sub-page.

---

## S9 — Verify your node is working end to end

**Reader question:** "How do I confirm my node is discoverable, correctly priced, and actually receiving the work it should get?"
**purpose:** `verify` | **pageType:** `instruction` | **lifecycleStage:** `setup`
**Entry state:** Node set up and configured; not yet confirmed receiving work through the full routing path
**Exit state:** Node is discoverable, priced within gateway MaxPrice thresholds, performance score is tracking, reward calls are succeeding, first job has been received

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/setup/test` | Verify Your Setup | YES | 7 verification steps covering: node status, Explorer check, port 8935 reachability, video transcoding test (ffmpeg), AI inference test, reward calling confirmation, Prometheus metrics. Quick-reference checklist table and common issues accordion. pageType: `how_to`. Direct S9 match by title, purpose, and content. |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | Explorer Operations | PARTIALLY | Explorer walkthrough: active set status, total stake, reward cut/fee share, reward call history, fees earned, delegator list, service URI. Scope note: on-chain only, not live health/pool workers/AI warm status. pageType: `guide`. Covers the Explorer-based verification step of S9 in depth — also S10 ongoing monitoring. |
| `v2/orchestrators/setup/r-monitor` | Set Up Monitoring | PARTIALLY | Enable `-monitor`, Prometheus metrics table, Explorer check, GPU monitoring, quick symptom guide, minimal Prometheus setup. pageType: `how_to`. Positioned at end of setup sequence. Partially S9 verification (first metrics check) and partially S10 (ongoing monitoring). |
| `v2/orchestrators/resources/faq` | FAQ and Troubleshooting | PARTIALLY | Self-contained entries for common errors (install, networking, job routing, AI pipelines, earnings). pageType: `reference`. Contains verification-related troubleshooting — overlaps S9 verification questions and S12 troubleshooting questions. |
| `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` | Operator Toolbox | PARTIALLY | Tool reference: Explorer, Prometheus metrics, tools.livepeer.cloud, Dune Analytics, capability testing tools (stream-tester, livepeer-ai-job-tester). pageType: `reference`. Supports S9 verification with tooling reference but is not an instruction page. |

### Coverage verdict: YES — setup/test.mdx is a strong match; AI capabilities verification gap

### GAP notes

- The S9 exit state requires all five criteria confirmed: (1) node discoverable, (2) priced within MaxPrice thresholds, (3) performance score tracking, (4) reward calls succeeding, (5) first job received. setup/test.mdx likely covers (1), (4), and (5). Performance score confirmation and first-job receipt confirmation may not be explicitly instructed with expected outputs.
- There is no explicit "confirm your AI capabilities are advertised and gateways can see them" verification step for AI operators. setup/test.mdx checks AI inference via a test curl request, but verifying capability advertisement on tools.livepeer.cloud as the gateway-visible confirmation is required for AI operators.
- faq.mdx serving dual S9/S12 purposes splits its utility — it serves neither verification nor troubleshooting as well as it could if it had a single primary function.

---

## S10 — Monitor and operate day-to-day

**Reader question:** "What should I watch, what alerts matter, and what routine tasks must I do to keep earning?"
**purpose:** `operate` | **pageType:** `guide` | **lifecycleStage:** `operate`
**Entry state:** Node live and receiving work; no monitoring or operations workflow yet in place
**Exit state:** Has a monitoring routine in place; knows the routine operational tasks and their cadence

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | Metrics and Alerting | YES | Enable `-monitor`, Docker monitoring stack (Prometheus + Grafana + livepeer/monitoring image), Prometheus config, Grafana dashboards, alerting (reward call failure, high transcode error, VRAM pressure), DCGM exporter, AI inference metrics. pageType: `guide`. Core S10 content — metrics to watch and alerts to configure. |
| `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` | Operator Toolbox | YES | Explorer, Prometheus metrics, tools.livepeer.cloud (AI capabilities, payout reports), Dune Analytics, stream-tester, livepeer-ai-job-tester, tool selection guide. pageType: `reference`. The "what tools do I use" answer for S10 operations. |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | Explorer Operations | YES | Explorer scope (on-chain only), active set status, stake, reward call history, fees earned, delegator list, service URI, rounds active, common patterns action table. pageType: `guide`. Core S10 routine monitoring via Explorer. Also S9 (verification). |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | Reward Call Tuning | YES | Gas cost calculation, LPT value per round formula (90% post-LIP-89), break-even stake, automatic vs. manual calling, timing strategies (when to skip), monitoring (Prometheus alert, Explorer history). pageType: `how_to`. Core S10 routine operational task — reward call management. Also S11 (profitability tuning). |
| `v2/orchestrators/setup/r-monitor` | Set Up Monitoring | PARTIALLY | Enable `-monitor`, key Prometheus metrics table, Explorer check, GPU monitoring (nvidia-smi), quick symptom guide, minimal Prometheus setup. pageType: `how_to`. Positioned in Setup section but is also S10 content once the node is live. Structural placement conflict. |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | Delegate Operations | PARTIALLY | Attracting delegators, Explorer ROI calculation, 4 things delegators evaluate, building reputation, delegation mechanics, common pitfalls. pageType: `guide`. Covers managing delegation as an ongoing operational task. |
| `v2/orchestrators/guides/staking-and-rewards/network-participation` | Network Participation | PARTIALLY | Governance voting: how Livepeer governance works (LIP process), recent LIPs, where to follow governance, how to vote via livepeer_cli, delegator override mechanics, gas costs. pageType: `guide`. S10 operational context — governance as a routine operational participation. Lower priority. |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Payment Receipts | PARTIALLY | PM ticket receipt mechanics, win condition, Redeemer, ETH balance requirement (0.01 ETH minimum), monitoring payment receipts, zero earnings diagnosis. Status: draft. pageType: `concept`. Covers ETH balance management as an operational requirement — relevant to S10. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- No single page defines the day-to-day operational workflow as a sequenced routine — what to check daily/weekly, in what order, with what cadence. The existing pages are individually good reference/guide pages but none synthesises them into an operational workflow page.
- Ticket redemption monitoring (checking and triggering winning ticket redemptions as a routine task) is covered in payment-receipts.mdx but that page is status: draft. Monitoring ETH balance to ensure it covers ticket redemptions is a critical routine task that may not be prominently surfaced.
- Software update procedures as a routine operational task (when/how to update go-livepeer, AI runner, check changelogs) may not be addressed in any S10 page.
- setup/r-monitor.mdx is positioned in the Setup section (S5 territory) but its content serves S10 ongoing operations — structural placement conflict.

---

## S11 — Optimise earnings and performance

**Reader question:** "I'm running but I want more work, better margins, or better AI throughput — what levers do I have?"
**purpose:** `optimise` | **pageType:** `guide` | **lifecycleStage:** `optimise`
**Entry state:** Node operating in production with monitoring in place; wants to increase earnings or efficiency
**Exit state:** Has identified the variable most affecting earnings or job volume and made a targeted adjustment with a framework for future decisions

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Pricing Strategy | YES | Video pricing (wei/USD), AI pricing, per-gateway pricing, competitive benchmarking, autoAdjustPrice. pageType: `how_to`. Covers the pricing optimisation lever. Also S7 (initial pricing setting). |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | Capacity Planning | YES | `-maxSessions` calculation, livepeer_bench, hardware limit, NVENC session caps by card tier, bandwidth limit, AI VRAM budget. pageType: `how_to`. Core S11 capacity and throughput optimisation. |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | AI Model Management | YES | Warm vs. cold strategy, Beta constraint (1 warm model/GPU), VRAM allocation, model rotation, SFAST/DEEPCACHE optimisation. pageType: `how_to`. Core S11 AI throughput lever. Also S8. |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | Reward Call Tuning | PARTIALLY | Gas cost calculation, break-even stake, timing strategies (when to skip low-stake reward calls), monitoring. pageType: `how_to`. S11 margin-optimisation lever for low-stake operators. Also S10. |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | Delegate Operations | PARTIALLY | Attracting delegation, ROI calculations, 4 delegator evaluation criteria, commission stability, reputation building. pageType: `guide`. Covers the stake growth lever for active set competition. Also S10. |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | Scale Operations | PARTIALLY | Multi-orchestrator fleet patterns, data-centre scale, when to move to fleet operations, rolling updates, enterprise handoff. pageType: `concept`. S11 for operators who want more throughput via infrastructure scaling. |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships` | Gateway Relationships | PARTIALLY | Gateway discovery (4 mechanisms), multi-factor selection algorithm, performance score, Loki API. pageType: `concept`. S11 lever for improving gateway selection probability — performance score improvement and direct gateway relationships. |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Model and Demand Reference | PARTIALLY | Demand signals, VRAM by pipeline table, warm vs. cold criticality, multi-GPU configuration, model selection heuristics, reference pricing. pageType: `reference`. Supports S11 AI model selection and VRAM allocation decisions. |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | Video Transcoding Operations | PARTIALLY | Pricing, session limits methodology, NVENC session caps, ABR ladder, optimisation tips. pageType: `guide`. S11 video transcoding optimisation content. Also S7. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- S11 requires a triage entry framing: "you have low earnings or few jobs — is it pricing, stake, performance score, or AI capability advertisement?" No existing page serves this diagnostic-entry function. The reader currently faces a menu of optimisation pages without knowing which lever is their bottleneck.
- Performance score improvement — how to improve latency score and success rate — may not be addressed in any optimisation-framed page. metrics-and-alerting.mdx covers monitoring performance score; gateway-relationships.mdx covers the selection algorithm; but a concrete "how to improve your performance score" page may not exist.
- pricing-strategy.mdx serves both S7 (initial setting) and S11 (re-evaluation with benchmarks) — the page should address both angles without conflating them. This is a design requirement for that page, not a missing page.

---

## S12 — Diagnose and fix problems

**Reader question:** "My node stopped receiving work / a reward call failed / performance score dropped — what do I do?"
**purpose:** `troubleshoot` | **pageType:** `guide` | **lifecycleStage:** `troubleshoot`
**Entry state:** Node in production but experiencing a specific problem (no jobs, failed reward call, AI inference errors, performance drop)
**Exit state:** Has diagnosed the root cause from a structured checklist and applied or queued the appropriate fix

### Pages assessed

| Nav path | Title | Verdict | Notes |
|---|---|---|---|
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | Troubleshooting | YES | Symptom quick-nav, 7 diagnostic categories. pageType: `guide`. Direct S12 match by title and stated purpose. Primary troubleshooting resource. |
| `v2/orchestrators/resources/faq` | FAQ and Troubleshooting | PARTIALLY | Self-contained FAQ entries for common errors (installation, networking, job routing, AI pipelines, earnings). pageType: `reference`. Status: review. Serves S12 return-visit use case as FAQ companion. Also partially S9 (verification questions). |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | Explorer Operations | PARTIALLY | Diagnosing active set status, reward call history, stake confirmation, service URI check. pageType: `guide`. Used as diagnostic tool for S12 on-chain issues — also S9 and S10. |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | Gateway and Orchestrator Interface | PARTIALLY | Status: draft. Combined gateway+orchestrator deployment, port allocation, self-routing behaviour, off-chain gateway with on-chain orchestrator pattern. pageType: `how_to`. Provides gateway-side diagnostic context for "why am I not getting jobs." Narrow scope. |

### Coverage verdict: PARTIALLY COVERED

### GAP notes

- Gap note from canonical IA (gap note 5): S12 must be structured as three distinct diagnostic paths: (1) low work volume (pricing gate, active set rank, service URI reachability, capability advertisement), (2) operational errors (failed reward calls, ticket redemption failures), and (3) performance score degradation. No evidence that troubleshooting.mdx is structured as three discrete paths — it likely presents a general symptom list. If not restructured this way, the running-operator return-visit persona cannot navigate directly to the relevant root cause. This is a content structure gap, not a page existence gap.
- faq.mdx titled "FAQ and Troubleshooting" splits its function across S9 (verification) and S12 (troubleshooting), making it unclear which is the canonical troubleshooting destination. Renaming or splitting it would resolve this.

---

## Pages with no section home

Pages from the 72 nav entries that do not clearly belong to any single S1-S12 section:

| Nav path | Title | pageType | Problem |
|---|---|---|---|
| `v2/orchestrators/concepts/role` | The Orchestrator Role in the Livepeer Network | overview | Broadly contextual — "what is an orchestrator" background. Partially S2 (what does an orchestrator do) and partially S3 (how it participates) but doesn't serve either reader question directly. No single journey stage owns it. Belongs in a background/context layer. |
| `v2/orchestrators/concepts/architecture` | Orchestrator Architecture | concept | Technical architecture reference — layer diagram, system interactions, dual pipeline, software components. Informational context, not a journey step. Would be cross-referenced from S4/S5 but doesn't answer any section's primary reader question. |
| `v2/orchestrators/concepts/capabilities` | Orchestrator Capabilities | concept | Spans S2 (what can my hardware do for which workloads) and S8 (capability advertisement mechanism). Does not own either section. |
| `v2/orchestrators/guides/staking-and-rewards/network-participation` | Network Participation | guide | Governance voting mechanics and LIP process. Spans S4 (on-chain participation context), S3 (understanding round mechanics), and S10 (governance as routine operational participation). No single section owns it. |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | Gateway and Orchestrator Interface | how_to | Combined gateway+orchestrator deployment. Spans S3 (how routing works) and S12 (diagnostic information). Advanced topic that doesn't belong to a primary journey stage. |
| `v2/orchestrators/guides/advanced-operations/scale-operations` | Scale Operations | concept | Multi-orchestrator fleet patterns. Spans S5 (advanced deployment setup) and S11 (infrastructure scaling for throughput). Ambiguous section home. |
| `v2/orchestrators/guides/roadmap-and-funding/funding-and-support` | Funding and Support | guide | Stub/placeholder for SPE grants and support channels. Status: draft. Orthogonal to all S1-S12 journey stages — ecosystem funding, not operational guidance. No journey home. |
| `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles` | Orchestrator Profiles | guide | Stub/placeholder for operator case studies. Status: draft. Valuable for S2 viability evaluation but is reference/inspirational content, not a concept page. Doesn't fit S2 pageType. |
| `v2/orchestrators/resources/community-guides` | Community Guides & Tutorials | reference | External resource aggregator — curated external tutorials, video walkthroughs, community resources. Supplementary to multiple sections but belongs in Resources layer, not in the journey sequence. |
| `v2/orchestrators/resources/glossary` | Orchestrator Terminology Glossary | glossary | Terminology reference. Resources layer only — cross-referenced from all sections but is not a journey step. Note: also `resources/compendium/glossary` (see below). |
| `v2/orchestrators/resources/compendium/glossary` | Orchestrator Glossary | reference | Duplicate glossary function alongside `resources/glossary` — two glossaries in nav creates confusion. Both belong in the Resources layer only. |
| `v2/orchestrators/resources/technical/x-contract-addresses` | Livepeer Arbitrum Contract Addresses | landing | Reference resource — contract addresses for on-chain operations. Relevant to S4 (prerequisites) and S5 (activation) but is pure reference, not a concept or instruction page. |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward` | Zero to First Reward | tutorial | End-to-end tutorial spanning S5 (install/configure/activate) through S9 (first reward claimed). Cross-section journey tutorial — does not map to one section. Functions as an alternative complete path through S5-S9 for solo video operators. |
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | BYOC CPU Smoke Test | tutorial | Pre-setup smoke test for BYOC path. Partially S5 (pre-setup verification) and partially S8 (BYOC path). Does not cleanly own either section. |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | AI Earning Quickstart | tutorial | End-to-end AI setup tutorial spanning S4 (VRAM prerequisites) through S9 (first inference job). Cross-section tutorial for AI-focused path — alternative complete path through S4-S9 for AI specialists. |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward` | Zero to First Reward | tutorial | (See above — listed once.) |

---

## Orphans assessment

For each of the 13 orphans from Table 3 of orchestrators-tree-nav.md:

| Orphan path | Title | Recommendation | Rationale |
|---|---|---|---|
| `concepts/composable/orchestratorRole.mdx` | Orchestrator Role Diagram | Keep — verify embedding | Composable partial/diagram likely embedded in role.mdx or portal.mdx. Not a standalone nav page. Verify it is transcluded by a nav page — if not referenced anywhere, archive to `_workspace/`. |
| `guides/advanced-operations/advanced-sources.md` | — | Archive to `_workspace/research/guides/advanced-operations/` | .md research file in a live nav directory. Has served its content development purpose. Move to `_workspace/` to keep nav directories clean. |
| `guides/ai-and-job-workloads/ai-sources.md` | — | Archive to `_workspace/research/guides/ai-and-job-workloads/` | Same as above. .md research file in a live nav directory. |
| `guides/deployment-details/reports-audits/notes.md` | — | Archive to `_workspace/reviews/guides/deployment-details/` | Review/audit note. Already has a counterpart directory in `_workspace/reviews/`. Move there. |
| `guides/deployment-details/reports-audits/review.md` | — | Archive to `_workspace/reviews/guides/deployment-details/` | Same as above. |
| `guides/deployment-details/reports-audits/setup-sources.md` | — | Archive to `_workspace/research/guides/deployment-details/` | Research sources file in live nav directory. Move to `_workspace/`. |
| `guides/monitoring-and-tooling/monitoring-sources.md` | — | Archive to `_workspace/research/guides/monitoring-and-tooling/` | .md research file in live nav directory. Move to `_workspace/`. |
| `guides/operator-considerations/feasibilits-sources.md` | — | Archive to `_workspace/research/guides/operator-considerations/` | .md research file (note: filename contains a typo — "feasibilits"). Move to `_workspace/`. |
| `guides/operator-considerations/review.md` | — | Archive to `_workspace/reviews/guides/operator-considerations/` | Review file. Move to `_workspace/reviews/`. |
| `guides/tutorials/byoc-cpu-tutorial.mdx` | BYOC smoke-test: CPU gateway and orchestrator | Keep — content review required | Live `.mdx` with content, no pageType, not in nav. Likely predecessor to `byoc-cpu-smoke-test.mdx` which is in nav. If content is materially different and covers the full BYOC setup path (not just smoke test), it maps to S8 (BYOC path, which has a design flag for insufficient coverage) and should be navved or merged into byoc-cpu-smoke-test.mdx. If content duplicates byoc-cpu-smoke-test.mdx, archive to `guides/tutorials/x-deprecated/`. Content comparison required before action. |
| `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx` | Add AI: BYOC CPU Pipeline | Keep — verify transclusion | Composable stub. If the tutorial system uses these for transclusion, they are intentional. Verify they are referenced by a nav page. If the gateway-tutorial-composable-pages/ system is not active, archive the whole directory to `_workspace/`. |
| `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx` | Go Production: On-chain, GPU, and Network Connect | Keep — verify transclusion | Same as above. |
| `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx` | Your First Gateway: Off-chain Transcoding Test | Keep — verify transclusion | Same as above. |

**Additional orphan-adjacent files noted in tree-nav Table 3 (not in the 13 but requiring action):**

| Path | Recommendation |
|---|---|
| `index.mdx` (root Orchestrators index, overview) | Keep as-is — likely serves as Mintlify auto-resolved section index. Does not need to be in nav if Mintlify handles it implicitly. |
| `quickstart/dep-x-setup-paths.mdx` | Archive — `dep-` prefix signals deprecated; outside `x-deprecated/` only by placement. Move to `quickstart/x-deprecated/`. |
| `setup/s-guide.mdx` | Archive — superseded by `setup/guide.mdx`. Overlapping/identical scope and no nav entry. |
| `setup/x-test.mdx` | Archive — `x-` prefix signals excluded/pending. Content likely duplicated by `setup/test.mdx`. |
| `resources/x-changelog.mdx` | Archive — `x-` prefix signals pending exclusion. Move to `resources/x-deprecated/` or delete if superseded. |
| `resources/x-support-status.mdx` | Archive — same as above. |
| `resources/x-troubleshooting.mdx` | Archive — same as above. |
| `resources/x-guides.mdx` | Archive — same as above. |
| `resources/x-help.mdx` | Archive — same as above. |
| `resources/x-payments.mdx` | Archive — same as above. |
| `resources/compendium/glossary-data.json` | Keep — JSON data file backing `resources/compendium/glossary.mdx`. Not a page; no action. |

---

## Summary table — all 72 nav pages × 12 sections

Verdict codes: Y = YES | P = PARTIALLY | — = no mapping

| Nav path (abbreviated) | Title | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `portal` | Orchestrator Portal | P | — | — | — | — | — | — | — | — | — | — | — |
| `navigator` | Find Your Path | P | — | — | — | — | — | — | — | — | — | — | — |
| `concepts/role` | Orchestrator Role | — | P | P | — | — | — | — | — | — | — | — | — |
| `concepts/capabilities` | Orchestrator Capabilities | — | P | — | — | — | — | — | P | — | — | — | — |
| `concepts/architecture` | Orchestrator Architecture | — | — | — | P | — | — | — | — | — | — | — | — |
| `concepts/incentive-model` | Orchestrator Incentive Model | — | — | Y | — | — | — | — | — | — | — | — | — |
| `quickstart/guide` | Orchestrator Quickstart | — | — | — | — | P | — | — | — | — | — | — | — |
| `quickstart/video-transcoding` | Quickstart: Verify Your Hardware | — | P | — | — | P | — | — | P | — | — | — | — |
| `quickstart/tutorial` | Quickstart Tutorial | — | — | — | — | P | — | — | — | — | — | — | — |
| `quickstart/AI-prompt-start` | Add AI to Your Node | — | — | — | — | — | — | — | Y | — | — | — | — |
| `setup/guide` | Run an Orchestrator | — | — | — | — | Y | — | — | — | — | — | — | — |
| `setup/rcs-requirements` | Setup Checklist | — | — | — | Y | P | — | — | — | — | — | — | — |
| `setup/rs-install` | Install go-livepeer | — | — | — | — | Y | — | — | — | — | — | — | — |
| `setup/configure` | Configure Your Orchestrator | — | — | — | — | Y | — | — | — | — | — | — | — |
| `setup/connect-and-activate` | Connect to Arbitrum | — | — | — | P | Y | — | — | — | — | — | — | — |
| `setup/test` | Verify Your Setup | — | — | — | — | — | — | — | — | Y | — | — | — |
| `setup/r-monitor` | Set Up Monitoring | — | — | — | — | — | — | — | — | P | P | — | — |
| `guides/operator-considerations/operator-rationale` | Operating Rationale | — | P | — | — | — | — | — | — | — | — | — | — |
| `guides/operator-considerations/business-case` | Business Case | — | P | — | — | — | — | — | — | — | — | P | — |
| `guides/operator-considerations/operator-impact` | Operator Impact | — | — | — | — | — | — | — | — | — | P | — | — |
| `guides/operator-considerations/requirements` | Requirements | — | P | — | Y | — | — | — | — | — | — | P | — |
| `guides/deployment-details/setup-options` | Setup Options | P | — | — | — | P | P | — | — | — | — | — | — |
| `guides/deployment-details/siphon-setup` | Siphon Split Setup | — | — | — | — | P | — | — | — | — | P | — | — |
| `guides/deployment-details/dual-mode-configuration` | Dual Mode Configuration | — | — | — | — | P | — | — | P | — | — | — | — |
| `guides/deployment-details/orchestrator-transcoder-setup` | O-T Split Setup | — | — | — | — | P | — | — | — | — | P | — | — |
| `guides/deployment-details/join-a-pool` | Join a Pool (old) | — | — | — | — | — | P | — | — | — | — | — | — |
| `guides/deployment-details/new-join-a-pool` | Join a Pool | — | — | — | — | — | Y | — | — | — | — | — | — |
| `guides/ai-and-job-workloads/workload-options` | Workload Options | — | P | — | — | — | — | — | P | — | — | — | — |
| `guides/ai-and-job-workloads/video-transcoding-operations` | Video Transcoding Operations | — | — | — | — | — | — | P | — | — | — | P | — |
| `guides/ai-and-job-workloads/ai-inference-operations` | AI Inference Operations | — | — | P | — | — | — | — | Y | — | — | — | — |
| `guides/ai-and-job-workloads/diffusion-pipeline-setup` | Diffusion Pipeline Setup | — | — | — | — | — | — | — | Y | — | — | — | — |
| `guides/ai-and-job-workloads/llm-pipeline-setup` | LLM Pipeline Setup | — | — | — | — | — | — | — | Y | — | — | — | — |
| `guides/ai-and-job-workloads/realtime-ai-setup` | Cascade Setup | — | — | — | — | — | — | — | Y | — | — | P | — |
| `guides/ai-and-job-workloads/audio-and-vision-pipelines` | Audio and Vision Pipelines | — | — | — | — | — | — | — | Y | — | — | — | — |
| `guides/ai-and-job-workloads/model-demand-reference` | Model and Demand Reference | — | — | — | — | — | — | — | P | — | — | P | — |
| `guides/ai-and-job-workloads/model-hosting` | Model Hosting | — | — | — | — | — | — | — | Y | — | — | — | — |
| `guides/staking-and-rewards/earning-model` | Earning Model | — | P | Y | — | — | — | — | — | — | — | — | — |
| `guides/staking-and-rewards/reward-mechanics` | Reward Mechanics | — | — | P | — | — | — | P | — | — | P | — | — |
| `guides/payments-and-pricing/payment-receipts` | Payment Receipts | — | — | P | — | — | — | — | — | — | P | — | — |
| `guides/payments-and-pricing/payments` | Payments | — | — | Y | — | — | — | — | — | — | — | — | — |
| `guides/staking-and-rewards/delegate-operations` | Delegate Operations | — | — | — | — | — | — | P | — | — | P | P | — |
| `guides/staking-and-rewards/network-participation` | Network Participation | — | — | P | P | — | — | — | — | — | P | — | — |
| `guides/config-and-optimisation/pricing-strategy` | Pricing Strategy | — | — | — | — | — | — | Y | — | — | — | Y | — |
| `guides/config-and-optimisation/capacity-planning` | Capacity Planning | — | — | — | P | — | — | — | — | — | — | Y | — |
| `guides/config-and-optimisation/ai-model-management` | AI Model Management | — | — | — | — | — | — | — | Y | — | — | Y | — |
| `guides/config-and-optimisation/reward-call-tuning` | Reward Call Tuning | — | — | — | — | — | — | P | — | — | Y | P | — |
| `guides/monitoring-and-tooling/operator-toolbox` | Operator Toolbox | — | — | — | — | — | — | — | — | P | Y | — | — |
| `guides/monitoring-and-tooling/explorer-operations` | Explorer Operations | — | — | — | — | — | — | — | — | P | Y | — | P |
| `guides/monitoring-and-tooling/metrics-and-alerting` | Metrics and Alerting | — | — | — | — | — | — | — | — | — | Y | — | — |
| `guides/monitoring-and-tooling/troubleshooting` | Troubleshooting | — | — | — | — | — | — | — | — | — | — | — | Y |
| `guides/advanced-operations/gateway-relationships` | Gateway Relationships | — | — | P | — | — | — | — | — | — | — | P | — |
| `guides/advanced-operations/gateway-orchestrator-interface` | Gateway Interface | — | — | P | — | — | — | — | — | — | — | — | P |
| `guides/advanced-operations/pool-operators` | Pool Operators | — | — | — | — | — | P | — | — | — | P | — | — |
| `guides/advanced-operations/scale-operations` | Scale Operations | — | — | — | — | P | — | — | — | — | — | P | — |
| `guides/roadmap-and-funding/funding-and-support` | Funding and Support | — | — | — | — | — | — | — | — | — | — | — | — |
| `guides/roadmap-and-funding/orchestrator-profiles` | Orchestrator Profiles | — | P | — | — | — | — | — | — | — | — | — | — |
| `guides/tutorials/byoc-cpu-smoke-test` | BYOC CPU Smoke Test | — | — | — | — | P | — | — | P | — | — | — | — |
| `guides/tutorials/zero-to-first-reward` | Zero to First Reward | — | — | — | P | P | — | — | — | P | — | — | — |
| `guides/tutorials/ai-earning-quickstart` | AI Earning Quickstart | — | — | — | P | — | — | — | Y | P | — | — | — |
| `guides/tutorials/add-ai-to-video-node` | Add AI to Video Node | — | — | — | — | — | — | — | Y | — | — | P | — |
| `guides/tutorials/full-ai-pipeline-tutorial` | Full AI Pipeline Tutorial | — | — | — | — | — | — | — | Y | — | — | — | — |
| `guides/tutorials/realtime-ai-tutorial` | Realtime AI Tutorial | — | — | — | — | — | — | — | Y | — | — | P | — |
| `resources/faq` | FAQ and Troubleshooting | — | — | — | — | — | — | — | — | P | — | — | P |
| `resources/glossary` | Orchestrator Terminology Glossary | — | — | — | — | — | — | — | — | — | — | — | — |
| `resources/community-guides` | Community Guides and Tutorials | — | — | — | — | — | — | — | — | — | — | — | — |
| `resources/community-pools` | Community Orchestrator Pools | — | — | — | — | — | P | — | — | — | — | — | — |
| `resources/technical/cli-flags` | CLI Flags Reference | — | — | — | — | P | — | — | — | — | — | — | — |
| `resources/technical/x-contract-addresses` | Livepeer Contract Addresses | — | — | — | P | — | — | — | — | — | — | — | — |
| `resources/gpu-support` | GPU Support Matrix | — | P | — | P | — | — | — | — | — | — | — | — |
| `resources/arbitrum-rpc` | Arbitrum RPCs | — | — | — | P | — | — | — | — | — | — | — | — |
| `resources/arbitrum-exchanges` | Arbitrum Exchanges | — | — | — | P | — | — | — | — | — | — | — | — |
| `resources/compendium/glossary` | Orchestrator Glossary | — | — | — | — | — | — | — | — | — | — | — | — |

---

## Section coverage summary

| Section | Coverage verdict | Pages: YES | Pages: PARTIALLY | Pages: NO mapping |
|---|---|---|---|---|
| S1 — Which path is mine? | PARTIALLY COVERED | 0 | 3 (navigator, portal, setup-options) | 69 |
| S2 — Is this viable? | PARTIALLY COVERED | 0 | 7 (rationale, business-case, requirements, gpu-support, earning-model, workload-options, profiles) | 65 |
| S3 — How do I get paid? | PARTIALLY COVERED | 2 (incentive-model, payments) | 5 (earning-model, reward-mechanics, payment-receipts, gateway-relationships, role) | 65 |
| S4 — Prerequisites | PARTIALLY COVERED | 1 (rcs-requirements) | 5 (requirements, arbitrum-exchanges, arbitrum-rpc, connect-activate, capacity-planning) | 66 |
| S5 — Get node running | YES — well covered | 4 (setup/guide, rs-install, configure, connect-activate) | 8 (rcs-requirements, quickstart/guide, video-transcoding, tutorial, dual-mode, o-t-split, siphon-setup, cli-flags) | 60 |
| S6 — Join as pool node | PARTIALLY COVERED | 1 (new-join-a-pool) | 3 (join-a-pool old, community-pools, pool-operators) | 68 |
| S7 — Pricing and cuts | PARTIALLY COVERED | 1 (pricing-strategy) | 3 (video-transcoding-ops, reward-mechanics, delegate-operations) | 68 |
| S8 — AI pipelines | YES — most content; capability advertisement gap | 11 (AI-prompt-start, ai-inference-ops, diffusion-setup, llm-setup, realtime-ai, audio-vision, model-hosting, ai-model-mgmt, ai-earning-quickstart, add-ai-to-video, full-ai-tutorial, realtime-ai-tutorial) | 5 (workload-options, model-demand-ref, dual-mode, byoc-smoke-test, capabilities) | 56 |
| S9 — Verify end to end | YES — setup/test.mdx is strong; AI capability verification gap | 1 (setup/test) | 4 (explorer-ops, r-monitor, faq, operator-toolbox) | 67 |
| S10 — Day-to-day ops | PARTIALLY COVERED | 4 (metrics-and-alerting, operator-toolbox, explorer-ops, reward-call-tuning) | 4 (r-monitor, delegate-ops, network-participation, payment-receipts) | 64 |
| S11 — Optimise | PARTIALLY COVERED | 3 (pricing-strategy, capacity-planning, ai-model-mgmt) | 6 (reward-call-tuning, delegate-ops, scale-ops, gateway-relationships, model-demand-ref, video-transcoding-ops) | 63 |
| S12 — Troubleshoot | PARTIALLY COVERED | 1 (troubleshooting) | 3 (faq, explorer-ops, gateway-orchestrator-interface) | 68 |
