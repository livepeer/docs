# 03 - Tab Map: Orchestrators Tab Structure Audit

**Date**: 2026-03-23

---

## IA Section to Content Mapping

### S1 - Which path is mine? (Disambiguation)

| File | Quality | Notes |
|------|---------|-------|
| navigator.mdx | Partial | Has decision tree but doesn't cover the three-variable decision (hardware + capital + goals) the IA requires. Routes by "situation" not by systematic path selection. |
| dep-x-setup-paths.mdx | Partial | Path table with LPT/hardware/difficulty columns. Overlaps navigator. |
| setup-options.mdx | Partial | Deployment config overview. Third page serving same function. |

**Missing**: A single unified disambiguation page with the complete hardware + capital + goals decision framework that explicitly routes AI-only operators (no LPT needed).

**Priority**: P0 -- this is the tab entry point; fragmentation here blocks all downstream paths.

---

### S2 - Is this viable for my hardware and situation?

| File | Quality | Notes |
|------|---------|-------|
| operator-rationale.mdx | Complete | Cost categories, revenue streams, viability thresholds, decision matrix. Best fit. Has frontmatter corruption. |
| business-case.mdx | Partial | Commercial variant only. |
| role.mdx | Partial | Role history and personas, not viability-focused. |
| incentive-model.mdx | Partial | Revenue mechanics, not viability framing. |

**Missing**: Delegator-vs-operator earnings comparison for Persona 5.

**Priority**: P1 -- operator-rationale.mdx mostly serves this section; needs cleanup and gap fill.

---

### S3 - How does work reach me and how do I get paid?

| File | Quality | Notes |
|------|---------|-------|
| capabilities.mdx | Partial | Capability advertisement, gateway selection. |
| architecture.mdx | Partial | Request flow, protocol interactions. |
| incentive-model.mdx | Partial | Revenue streams, payment flow. |
| earning-model.mdx | Partial | ETH fees + LPT rewards. |
| reward-mechanics.mdx | Partial | Reward calling, LIP-89. |
| payments.mdx | Partial | PM mechanics. |
| payment-receipts.mdx | Partial | Ticket verification. |
| workload-options.mdx | Partial | Four job types with routing. |
| gateway-relationships.mdx | Partial | Gateway discovery and selection. |
| gateway-orchestrator-interface.mdx | Partial | gRPC interface. |

**Missing**: Single cohesive explanation. Content is fragmented across 10+ pages. Explicit statement that active set is NOT required for AI routing.

**Priority**: P1 -- content exists but needs consolidation or clear navigation.

---

### S4 - Prerequisites

| File | Quality | Notes |
|------|---------|-------|
| prepare.mdx | Complete | Pre-flight checklist by mode. |
| requirements.mdx | Complete | GPU, NVENC, VRAM, system minimums. |
| connect-and-activate.mdx | Partial | Mixes prerequisites with setup steps. |
| gpu-support.mdx | Complete | GPU compatibility reference. |
| arbitrum-rpc.mdx | Complete | RPC providers reference. |
| arbitrum-exchanges.mdx | Complete | ETH/LPT acquisition reference. |
| capacity-planning.mdx | Partial | Benchmarking fits here partially. |

**Missing**: Path-specific prerequisite separation (solo video needs LPT; AI-only and pool do not). ETH bridging not integrated into prerequisite flow.

**Priority**: P1 -- content exists; needs path-specific framing.

---

### S5 - Get your node running

| File | Quality | Notes |
|------|---------|-------|
| rs-install.mdx | Complete | Docker and binary install. |
| configure.mdx | Complete | docker-compose templates, three modes. |
| connect-and-activate.mdx | Complete | On-chain activation. |
| guide.mdx | Complete | Setup flow overview. |
| orchestrator-transcoder-setup.mdx | Complete | O-T split variant. |
| dual-mode-configuration.mdx | Complete | Dual mode variant. |
| siphon-setup.mdx | Complete | Siphon variant. |
| video-transcoding-operations.mdx | Partial | Video-specific operations. |

**Missing**: Multi-platform binary details less prominent than v1.

**Priority**: P2 -- well covered; polish needed.

---

### S6 - Join as a pool node

| File | Quality | Notes |
|------|---------|-------|
| join-a-pool.mdx | Complete | Pool vs solo comparison, Titan Node. |
| new-join-a-pool.mdx | Complete | Revised version of same content. |
| community-pools.mdx | Partial | Pool listing reference. |
| pool-operators.mdx | Partial | Pool operator side (advanced). |

**Missing**: Consolidation of two join-a-pool pages. "Enough stake?" decision framework. Explicit "no LPT needed" statement.

**Priority**: P1 -- content exists but needs consolidation.

---

### S7 - Set your pricing and cuts

| File | Quality | Notes |
|------|---------|-------|
| pricing-strategy.mdx | Complete | Video + AI pricing. Draft status. |
| delegate-operations.mdx | Partial | Commission strategy from delegator-attraction angle. |
| incentive-model.mdx | Partial | Fee/reward cut mechanics. |

**Missing**: Operator-perspective framing (what to set and why). Benchmark starting ranges.

**Priority**: P1 -- pricing-strategy.mdx needs promotion from draft, operator framing.

---

### S8 - Set up AI pipelines

| File | Quality | Notes |
|------|---------|-------|
| diffusion-pipeline-setup.mdx | Complete | Diffusion pipeline setup. |
| llm-pipeline-setup.mdx | Complete | LLM pipeline setup. |
| realtime-ai-setup.mdx | Complete | Cascade/live AI setup. |
| audio-and-vision-pipelines.mdx | Complete | Audio, vision pipelines. |
| ai-inference-operations.mdx | Complete | AI operations. |
| model-hosting.mdx | Complete | Model hosting, VRAM. |
| model-demand-reference.mdx | Complete | Demand data. |
| ai-model-management.mdx | Complete | Warm/cold, VRAM allocation. |
| AI-prompt-start.mdx | Partial | Quick AI add guide. |
| 4 AI tutorials | Complete | Guided paths. |

**Missing**: BYOC sub-section. Capability advertisement verification. Entry page that ties all AI sub-pages together for the AI-focused operator.

**Priority**: P1 -- rich content exists; needs BYOC coverage and capability advertisement clarity.

---

### S9 - Verify node end to end

| File | Quality | Notes |
|------|---------|-------|
| test.mdx | Complete | Verification checklist. |

**Missing**: Performance score verification step. Pricing gate verification. AI capability advertisement verification.

**Priority**: P1 -- exists but needs three additional verification steps.

---

### S10 - Monitor and operate day-to-day

| File | Quality | Notes |
|------|---------|-------|
| metrics-and-alerting.mdx | Complete | Prometheus, Grafana, Docker stack. |
| explorer-operations.mdx | Complete | Explorer metrics walkthrough. |
| operator-toolbox.mdx | Complete | Tools index. |
| r-monitor.mdx | Partial | Post-activation monitoring. |
| reward-call-tuning.mdx | Complete | Gas optimisation. |

**Missing**: Consolidated day-to-day operations checklist with routine tasks and cadence.

**Priority**: P2 -- well covered; needs consolidation.

---

### S11 - Optimise earnings and performance

| File | Quality | Notes |
|------|---------|-------|
| pricing-strategy.mdx | Complete | Pricing optimisation. |
| capacity-planning.mdx | Complete | Session/bandwidth. |
| ai-model-management.mdx | Complete | Model warmth, VRAM. |
| delegate-operations.mdx | Complete | Delegator attractiveness. |
| gateway-relationships.mdx | Partial | Selection factors. |
| scale-operations.mdx | Partial | Fleet scaling. |
| business-case.mdx | Partial | Commercial positioning. |

**Missing**: Single "identify your most impactful lever" diagnostic page.

**Priority**: P2 -- content exists; needs framing.

---

### S12 - Diagnose and fix problems

| File | Quality | Notes |
|------|---------|-------|
| troubleshooting.mdx | Complete | Categorised errors. |
| faq.mdx | Complete | Common errors and FAQs. |

**Missing**: Three-path diagnostic structure (low work, operational errors, performance degradation). Consolidation of two overlapping pages.

**Priority**: P1 -- content exists but needs restructuring.

---

## Orphan Analysis

Pages that do not map to any IA section S1-S12:

| File | Reason | Recommendation |
|------|--------|----------------|
| index.mdx | Auto-generated TOC | KEEP as utility |
| portal.mdx | Landing page (pre-S1) | KEEP |
| concepts/composable/orchestratorRole.mdx | Composable diagram component | KEEP as component |
| operator-impact.mdx | Governance/community content | MOVE to About tab cross-ref or keep as on-demand content |
| network-participation.mdx | Governance voting | MOVE to About tab cross-ref or keep as on-demand content |
| dep-guide.mdx (advanced-operations) | Overview page for advanced ops | DROP (redundant) |
| orchestrator-profiles.mdx | Community showcase | KEEP as on-demand/community content |
| funding-and-support.mdx | Grants and programmes | KEEP as on-demand content |
| s-guide.mdx | Deprecated setup overview | DROP (broken links, superseded) |
| x-test.mdx | Stub, wrong audience | DROP |
| x-changelog.mdx | Stub | DROP or develop |
| x-help.mdx | Stub | DROP |
| x-troubleshooting.mdx | Stub, wrong audience | DROP |
| x-contract-addresses.mdx | Stub with title typo | DEVELOP or move to Resource HUB |
| x-support-status.mdx | Meta page | KEEP or move to docs-guide |
| x-guides.mdx | Redundant guide index | DROP (navigator serves this) |
| x-payments.mdx | Redundant payment content | MERGE into payments.mdx |
| 3 tutorial stubs | Gateway tutorial stubs | KEEP as stubs for future development |

---

## Priority Classification

| Priority | Count | Description |
|----------|-------|-------------|
| P0 | 1 | S1 disambiguation -- blocks content entry. Three overlapping pages need consolidation into one. |
| P1 | 7 | S2 viability gap, S3 fragmentation, S4 path-specific prereqs, S6 pool page duplication, S7 draft promotion, S8 BYOC/capability gaps, S9 verification gaps, S12 restructuring |
| P2 | 3 | S5 polish, S10 consolidation, S11 framing |
