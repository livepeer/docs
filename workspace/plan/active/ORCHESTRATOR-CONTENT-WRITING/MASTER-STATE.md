# Orchestrators Tab — Master State Document

> **Generated**: 2026-03-23
> **Source**: Full read of every file in CONTENT-WRITING/ directory (248 files) by 8 parallel agents
> **Purpose**: Single canonical reference for executing the Orchestrators tab content writing pipeline

---

## Part 1 — Decisions Already Made

These are LOCKED. They do not need re-deciding. Any agent or session that asks for these again has not read this file.

### D-NAV-01 — Navigation Disambiguation Page (LOCKED 2026-03-23)

`pageType: navigation` disambiguation page is a locked cross-tab pattern. S1 on the Orchestrators tab ("Which path is mine?") is a single shared file — not per-persona. All setup paths reference this as their entry point. Reversal condition: holds as long as `pageType: navigation` remains a canonical page type.

### Terminology — Already Verified (LOCKED 2026-03-23)

| Term | Canonical Form | Status | Authority |
|---|---|---|---|
| BYOC | Bring Your Own Container | LOCKED | Human |
| NaaP | Network-as-a-Product | LOCKED (provisional — style guide pending) | Human |
| LIP-92 | Treasury Contribution Percentage | LOCKED — NOT AI capability registry | Human |

### Terminology — Open Items

| Term | Issue | Priority | Owner |
|---|---|---|---|
| NaaP style guide form | May be "Network as a Platform" | LOW | Human |
| Unbonding period | 21 rounds vs "21 hours" disputed | BLOCKING (Delegators, not Orchestrators) | Human/SME |
| Fee cut direction convention | v1→v2 possible percentage inversion | HIGH (Orchestrators) | SME verification |

### Tab Priority Order (LOCKED 2026-03-23)

Orchestrators (1) → Gateways (2) → Developers (3) → About (4) → Delegators (5)

### v2/ is Canonical Path

All work targets `v2/orchestrators/`. v1 is legacy reference only.

### Pipeline Scope

Gateways + Orchestrators first — only tabs structurally close to standard section vocabulary.

### Phase Ordering Correction (LOCKED)

Phase 6 (Content) → Phase 8 (Naming) → Phase 7 (Veracity) → Phase 10 (Layout). Phase 8 BEFORE Phase 7.

### Glossary Authority (LOCKED)

- `resources/glossary.mdx` = human-made, reviewed, AUTHORITATIVE
- `resources/compendium/glossary.mdx` = AI-generated, UNVERIFIED — review against human version before trusting

---

## Part 2 — Orchestrators IA (Check B APPROVED, Ready for Human Lock)

### Status

- Canonical audience design: EXISTS at `CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md`
- Synthesised from 4 v4 runs (Agent, Claude Web, ChatGPT, Perplexity)
- Check B validation: APPROVED FOR PHASE 2
- v5 learnings: Created
- Collation notes: EXISTS with 5 open items documented

### 12-Section Structure (S1-S12)

| # | Section | pageType | purpose | lifecycleStage | Reader Question |
|---|---------|----------|---------|----------------|-----------------|
| S1 | Which path is mine? | `navigation` | `orient` | `discover` | I have GPU hardware — am I solo, AI-focused, or pool? |
| S2 | Is this viable for my hardware? | `concept` | `evaluate` | `evaluate` | Will my GPU and capital qualify for meaningful income? |
| S3 | How does work reach me / how do I get paid? | `concept` | `explain` | `evaluate` | What determines whether gateways send me jobs? |
| S4 | Prerequisites | `concept` | `learn` | `setup` | What hardware, tokens, wallet, network access do I need? |
| S5 | Get your node running | `instruction` | `start` | `setup` | How do I install, configure, register, and go live? |
| S6 | Join as a pool node | `guide` | `orient` | `evaluate` | I don't have enough stake — how does pool work? |
| S7 | Set pricing and cuts | `guide` | `configure` | `setup` | What should I charge and what cuts should I set? |
| S8 | Set up AI pipelines | `instruction` | `build` | `build` | How do I configure AI inference and advertise capabilities? |
| S9 | Verify node end to end | `instruction` | `verify` | `setup` | How do I confirm I'm discoverable and receiving work? |
| S10 | Monitor and operate | `guide` | `operate` | `operate` | What should I watch and what routine tasks must I do? |
| S11 | Optimise earnings | `guide` | `optimise` | `optimise` | I want more work or better margins — what levers? |
| S12 | Diagnose and fix | `guide` | `troubleshoot` | `troubleshoot` | My node stopped receiving work — what do I do? |

### 5 Personas

| Rank | Persona | Consensus |
|---|---|---|
| 1 | Independent GPU operator — choosing a path | 4/4 (PRIMARY) |
| 2 | AI inference specialist | 4/4 |
| 3 | Capital-constrained operator (pool candidate) | 4/4 |
| 4 | Running operator (return visit) | 3/4 |
| 5 | Delegator-turned-operator | 2/4 |

### 7 Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---------|-------------|-------------|
| J1 | I have GPU hardware and just heard about this | assess viability and path requirements | make a go/no-go decision |
| J2 | I've decided but don't know which path | identify solo video, AI-only, dual, or pool | start the correct path |
| J3 | Ready to set up, no on-chain prereqs done | complete wallet, LPT, ETH bridging | unblock node software |
| J4 | Prerequisites done, want working node | follow complete setup sequence | reach live, discoverable, processing state |
| J5 | Running but not getting enough work | diagnose pricing, active set, perf score, capabilities | fix the correct variable |
| J6 | Want to configure AI inference | set up aiModels.json, warm models, advertise | earn from AI jobs |
| J7 | Operating and need a specific value | look up flag, threshold, cut setting | make confident config change |

### Entry Blockers

- LPT stake (solo video path — hard stop)
- ETH for gas (all on-chain paths)
- Publicly reachable service URI (all paths)
- VRAM capacity (AI path)
- Pool membership arrangement (pool path)
- Capability advertisement (AI path)

### Design Flags (Carry to Phase 3)

- S5 may need to split (solo vs pool instruction pages)
- S8 may need to split (AI config surface too large)
- S8 BYOC path not covered

### Validation Outstanding Items

- ~~LIP-92 (was BLOCKING)~~ → RESOLVED: LIP-92 = Treasury Contribution Percentage (D-TERM decisions above)
- BYOC path coverage (HIGH for S8 design)
- Active set size (NON-BLOCKING — governance-controlled, never hard-code)
- Pool node term (NON-BLOCKING — glossary needs "Pool Worker" → "Pool node" update)

---

## Part 3 — Current State of v2/orchestrators/ (84 files)

### Statistics

| Metric | Count |
|--------|-------|
| Total active .mdx files | 84 |
| Files in docs.json nav | 72 |
| Files on disk but NOT in nav | 12 (mostly x-* placeholders, dep-* deprecated) |
| Nav paths without files | 0 |
| Status: current/published | ~52 |
| Status: draft | ~14 |
| Status: review | ~9 |
| Status: stub/empty | ~9 |
| Pages missing `purpose` in frontmatter | ~30 |
| Pages with wrong `audience: developer` | 5 (all x-* stubs) |

### Content by Section (mapped to IA)

**S1 Landing/Navigation** (2 nav pages):
- `portal.mdx` — Hero landing, card navigation (pageType: landing → should be navigation)
- `navigator.mdx` — Accordion path selector (pageType: landing → should be navigation)

**S2 Concepts** (4 nav pages):
- `concepts/role.mdx` — Orchestrator role, network position, evolution (309 lines)
- `concepts/capabilities.mdx` — Workload types, capability advertisement (322 lines)
- `concepts/architecture.mdx` — Layer position, components, request flow (480 lines)
- `concepts/incentive-model.mdx` — Revenue streams, pricing, cost structure (447 lines)

**S3 Quickstart** (4 nav pages):
- `quickstart/guide.mdx` — Overview routing to smoke tests (74 lines)
- `quickstart/video-transcoding.mdx` — Off-chain video + AI smoke tests (444 lines)
- `quickstart/tutorial.mdx` — Thin routing page (34 lines — stub-like)
- `quickstart/AI-prompt-start.mdx` — Add AI to existing node (253 lines)

**S4/S5 Setup** (7 nav pages):
- `setup/guide.mdx` — Setup flow overview (141 lines)
- `setup/prepare.mdx` — Pre-flight checklist by mode (336 lines)
- `setup/rs-install.mdx` — Docker and binary install (285 lines)
- `setup/configure.mdx` — Docker-compose templates (430 lines)
- `setup/connect-and-activate.mdx` — Fund, stake, register, activate (286 lines)
- `setup/test.mdx` — Post-setup verification (406 lines)
- `setup/r-monitor.mdx` — Minimum monitoring setup (232 lines)

**S6 Pool / Deployment Details** (6 nav pages):
- `guides/deployment-details/setup-options.mdx` — Deployment axes overview (244 lines)
- `guides/deployment-details/siphon-setup.mdx` — Two-machine key isolation (565 lines)
- `guides/deployment-details/dual-mode-configuration.mdx` — Video+AI config (442 lines, draft)
- `guides/deployment-details/orchestrator-transcoder-setup.mdx` — O-T split (398 lines)
- `guides/deployment-details/join-a-pool.mdx` — Older pool guide (324 lines)
- `guides/deployment-details/new-join-a-pool.mdx` — Rewritten pool guide (351 lines)

**S7 Pricing / Operator Considerations** (4+2 nav pages):
- `guides/operator-considerations/operator-rationale.mdx` — Cost/revenue analysis (488 lines)
- `guides/operator-considerations/business-case.mdx` — Commercial operation (401 lines)
- `guides/operator-considerations/operator-impact.mdx` — Governance weight (318 lines)
- `guides/operator-considerations/requirements.mdx` — GPU/VRAM/system requirements (501 lines)
- `guides/payments-and-pricing/payments.mdx` — Payment flow (367 lines)
- `guides/payments-and-pricing/payment-receipts.mdx` — PM tickets (259 lines, draft)

**S8 AI Workloads** (9 nav pages):
- `guides/ai-and-job-workloads/workload-options.mdx` — Four job types compared (314 lines)
- `guides/ai-and-job-workloads/video-transcoding-operations.mdx` — Video pricing/sessions (478 lines)
- `guides/ai-and-job-workloads/ai-inference-operations.mdx` — AI subnet overview (468 lines)
- `guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` — aiModels.json config (910 lines)
- `guides/ai-and-job-workloads/llm-pipeline-setup.mdx` — Ollama LLM runner (297 lines, draft)
- `guides/ai-and-job-workloads/realtime-ai-setup.mdx` — Cascade/ComfyStream (559 lines)
- `guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx` — Whisper, TTS, SAM2 (277 lines, draft)
- `guides/ai-and-job-workloads/model-demand-reference.mdx` — VRAM tables, pricing (663 lines)
- `guides/ai-and-job-workloads/model-hosting.mdx` — HuggingFace, BYOC (271 lines, draft)

**S9 Config/Optimisation** (4 nav pages):
- `guides/config-and-optimisation/pricing-strategy.mdx` — Wei/pixel, AI pricing (339 lines, draft)
- `guides/config-and-optimisation/capacity-planning.mdx` — maxSessions, bandwidth (397 lines, draft)
- `guides/config-and-optimisation/ai-model-management.mdx` — Warm/cold, VRAM (261 lines, draft)
- `guides/config-and-optimisation/reward-call-tuning.mdx` — Profitability calc (176 lines)

**S10 Monitoring/Operations** (4 nav pages):
- `guides/monitoring-and-tooling/operator-toolbox.mdx` — Tools overview (310 lines)
- `guides/monitoring-and-tooling/explorer-operations.mdx` — Explorer metrics (287 lines)
- `guides/monitoring-and-tooling/metrics-and-alerting.mdx` — Prometheus/Grafana (411 lines)
- `guides/monitoring-and-tooling/troubleshooting.mdx` — Symptom-first diagnostics (460 lines)

**S11 Advanced Operations** (4 nav pages):
- `guides/advanced-operations/gateway-relationships.mdx` — Discovery, routing, Loki (284 lines)
- `guides/advanced-operations/gateway-orchestrator-interface.mdx` — Combined deployment (216 lines, draft)
- `guides/advanced-operations/pool-operators.mdx` — Running a GPU pool (303 lines)
- `guides/advanced-operations/scale-operations.mdx` — Multi-orchestrator fleet (247 lines)

**S12 Staking/Earning + Roadmap** (6+2+6 nav pages):
- Staking: earning-model, reward-mechanics, delegate-operations, network-participation, payment-receipts, payments
- Roadmap: funding-and-support (stub), orchestrator-profiles (stub)
- Tutorials: 6 tutorial pages (byoc-cpu-smoke-test, zero-to-first-reward, ai-earning-quickstart, add-ai-to-video-node, full-ai-pipeline-tutorial, realtime-ai-tutorial)

**Resources** (10+ nav pages):
- faq.mdx, glossary.mdx, community-guides.mdx, community-pools.mdx
- Technical: cli-flags.mdx, x-contract-addresses.mdx (stub), gpu-support.mdx, arbitrum-rpc.mdx, arbitrum-exchanges.mdx
- Compendium: glossary.mdx (AI-generated, 1496 lines)

---

## Part 4 — Infrastructure Already Built

### Prompts (all built, status noted)

| Prompt | Phase | Status | Tested on Orchestrators? |
|--------|-------|--------|--------------------------|
| audience-design-v5.md | 1 | BUILT, extensively tested | YES — v1 through v5, canonical produced |
| audience-design-collation-v2.md | 1 | BUILT, learnings applied | YES — canonical collation done |
| content-scan.md | 2 | BUILT v1.0 | NO — tested on Gateways only |
| structure-audit.md | 3 | BUILT | YES — draft tab-map produced |
| content-pass.md | 6 | BUILT (WRITE/REVIEW/REWRITE/AUDIT) | NOT TESTED |
| layout-pass.md | 10 | BUILT | NOT TESTED |
| veracity-pass.md | 7 | BUILT v1.0 DRAFT | NOT TESTED |
| section-naming.md | 8 | LOCKED | NOT TESTED in production |

### Frameworks (all relevant ones locked)

| Framework | Status |
|-----------|--------|
| pageType (7 types) | LOCKED |
| pagePurpose (15 values) | LOCKED |
| information-type (9 types) | DRAFT |
| veracity.md | LOCKED 2026-03-23 |
| veracity-library.md (45 sources) | COMPLETE |
| complexity.md | AGREED |
| industry.md | LOCKED |
| content-pipeline-framework.md | Active (10 frontmatter fields defined) |
| voice-rules.md | EXISTS — all 7 audiences covered |

### Context Packs (Orchestrators-specific)

| Pack | Status | Path |
|------|--------|------|
| IA prereq | COMPLETE | context-packs/orchestrators-ia-prereq.md |
| Research pack (raw inventory) | COMPLETE | context-packs/orchestrators-research-pack.md |
| v1 content (verbatim) | COMPLETE | context-packs/orchestrators-v1-content.md |
| Audience doc | DRAFT (awaiting checkpoint) | context-packs/orchestrators-audience-doc.md |
| Content scan | MISSING | — |
| IA-mapped research pack v2 | MISSING | — |
| Terminology draft | MISSING | — |

### PM Infrastructure

| File | Status |
|------|--------|
| decision-registry.md | EXISTS — 1 entry (D-NAV-01) |
| blocking-items.md | EXISTS — 0 entries (empty) |
| tab-status.md | EXISTS — all gates ⬜ |
| feedback-routing-map.md | EXISTS — routing rules defined, correction log empty |
| cross-tab-journeys.md | EXISTS — stub |
| terminology-tracking.md | EXISTS — 3 locked terms, 3 open items |

---

## Part 5 — What Is Actually Needed to Complete Orchestrators

### Gate Status (Current → Target)

| Gate | Current | What's needed to open |
|------|---------|----------------------|
| IA Approved | ⬜ | Human reviews S1-S12 + locks |
| Terminology Locked | ⬜ | Resolve fee cut direction (HIGH), update glossary Pool Worker → Pool node |
| Content Scan Done | ⬜ | Run content-scan.md on v2/orchestrators/ |
| Structure Approved | ⬜ | Run structure-audit.md → tab-map → persona smoke-test → human approves |
| Content Pass Open | ⬜ | All above + voice rules confirmed |
| Veracity Done | ⬜ | After content written + naming done |
| Layout Done | ⬜ | After veracity done |

### Critical Path (Sequential Dependencies)

```
HUMAN: Lock IA (review S1-S12, confirm or adjust)
  ↓
PARALLEL:
  Agent: Content scan (v2/orchestrators/ → orchestrators-content-scan.md)
  Agent: IA-mapped research pack (→ orchestrators-research-pack-v2.md)
  Agent: Phase 1b persona iteration check
  ↓
HUMAN: Review scan + research pack + persona flags
  ↓
Agent: Structure audit → tab-map
  ↓
HUMAN: Approve tab-map + persona journey smoke-test
  ↓
PARALLEL:
  Agent: Terminology lock (resolve fee cut, update glossary)
  Agent: Voice rules confirmation for orchestrator audience
  ↓
Agent: Content audit (AUDIT mode per section group)
  ↓
HUMAN: Approve reconsolidation plan
  ↓
Agent: Reconsolidation (file moves, docs.json, stubs)
  ↓
CONTENT WRITING (section by section, 12 sections):
  Per page: brief → HUMAN approves → WRITE → HUMAN reviews
  ↓
Agent: Naming audit (≥20/25 per heading)
  ↓
Agent: Veracity pass (REVIEW markers + veracityStatus)
  ↓
HUMAN: Clear veracity flags
  ↓
Agent: Layout pass (MDX, components, frontmatter)
  ↓
HUMAN: Approve layout
  ↓
Agent: Universal pages (glossary, portal, navigator, FAQ)
```

---

## Part 6 — Known Issues Specific to Orchestrators

1. **Fee cut direction convention** — HIGH. v1 says 95% = orchestrator keeps 95%. v2 says 5% = orchestrator keeps 5%. These may be describing the same thing differently OR there's an actual inversion. Needs SME verification against BondingManager contract. BLOCKS accurate content in S3 (payment mechanics), S7 (pricing/cuts), S12 (staking).

2. **BYOC path not covered** — S8 design flag. BYOC (Bring Your Own Container) is a distinct setup path for non-standard AI models. May warrant its own page within AI section. Human decision needed during Phase 3.

3. **S5 may need split** — Solo operator setup vs pool node setup are different enough that a single instruction page may be unworkable. Phase 3 audit will confirm.

4. **S8 may need split** — AI configuration surface (aiModels.json, warm models, capability advertisement, BYOC) may be too large for one page. Phase 3 audit will confirm.

5. **operator-rationale.mdx formatting error** — Stray characters `glrw\npwrfs` before YAML frontmatter. Fix before any content pass.

6. **Two pool guides** — `join-a-pool.mdx` (older) and `new-join-a-pool.mdx` (rewritten) both in nav. Phase 4 AUDIT must resolve (likely KEEP new, DROP old).

7. **Frontmatter validator** — `frontmatter-taxonomy.js` still uses old 12-type schema. Pages with canonical 7-type values will fail CI. Core migration is done (deprecated aliases work). New field validators (persona, industry, niche, lifecycleStage, veracityStatus) not yet added.

8. **30+ pages missing `purpose` field** — All setup, quickstart, tutorial, and newer how_to pages lack purpose in frontmatter. Will be set during Phase 6/Phase 10.

9. **Active set size** — Governance-controlled. Never hard-code. Always use `[verify-live]` annotation.

10. **Pool node term** — Glossary still says "Pool Worker" as primary. Must be updated to "Pool node" per terminology lock.
