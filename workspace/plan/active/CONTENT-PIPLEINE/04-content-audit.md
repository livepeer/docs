# 04 - Content Audit: Orchestrators Tab

**Date**: 2026-03-23
**Decision key**: KEEP (no changes) / MOVE (relocate) / MERGE (combine with another file) / SPLIT (break into multiple) / REWRITE (significant content changes) / DROP (remove)

---

## Pre-S1: Landing and Entry

| File | Decision | Rationale |
|------|----------|-----------|
| portal.mdx | **KEEP** | Landing page with hero, card navigation. Serves tab entry. |
| index.mdx | **KEEP** | Auto-generated TOC. Utility file. |

---

## S1 - Which path is mine?

| File | Decision | Rationale |
|------|----------|-----------|
| navigator.mdx | **REWRITE** | Best candidate for the unified S1 disambiguation page. Needs to incorporate hardware + capital + goals decision framework, explicitly route AI-only operators (no LPT needed), and absorb the function of dep-x-setup-paths and setup-options. |
| dep-x-setup-paths.mdx | **MERGE -> navigator.mdx** | Overlaps navigator. Path table content should be absorbed into the rewritten navigator. Then drop this file. |
| setup-options.mdx | **MERGE -> navigator.mdx** | Third page serving same function. Deployment options content should be absorbed into navigator. Then drop this file. |

---

## S2 - Is this viable?

| File | Decision | Rationale |
|------|----------|-----------|
| operator-rationale.mdx | **REWRITE** | Primary S2 page. Fix frontmatter corruption. Add delegator-vs-operator comparison. Frame from hardware-first viability perspective. |
| business-case.mdx | **KEEP** | Serves commercial variant of S2. Links from operator-rationale for commercial operators. Also serves S11 optimisation. |
| operator-impact.mdx | **MOVE** | Governance/community content. Does not serve S2 viability assessment. Move to on-demand content or cross-tab to About. |

---

## S3 - How does work reach me?

| File | Decision | Rationale |
|------|----------|-----------|
| capabilities.mdx | **KEEP** | Core S3 content on capability advertisement and gateway selection. |
| architecture.mdx | **KEEP** | S3 supporting content on request flow. |
| incentive-model.mdx | **KEEP** | S3 supporting content on revenue streams. |
| earning-model.mdx | **MERGE -> incentive-model.mdx** | Overlaps with incentive-model.mdx. Both cover ETH fees + LPT rewards. Consolidate into one comprehensive economics page. |
| reward-mechanics.mdx | **KEEP** | S3 depth content on reward calling. Also serves S10. |
| payments.mdx | **KEEP** | S3 depth content on PM mechanics. |
| payment-receipts.mdx | **MERGE -> payments.mdx** | Narrow scope (ticket verification) can be a section within payments.mdx rather than standalone. |
| workload-options.mdx | **KEEP** | Four job types with routing differences. S3 reference. |
| gateway-relationships.mdx | **KEEP** | Gateway discovery and selection. S3 and S11. |
| gateway-orchestrator-interface.mdx | **KEEP** | Technical reference. On-demand content. |

---

## S4 - Prerequisites

| File | Decision | Rationale |
|------|----------|-----------|
| prepare.mdx | **REWRITE** | Add path-specific prerequisite sections (solo video needs LPT; AI-only and pool do not). Integrate ETH bridging. |
| requirements.mdx | **KEEP** | Hardware reference. Supports S4. |
| connect-and-activate.mdx | **SPLIT** | Currently mixes prerequisites (wallet, RPC, LPT) with setup steps (activation, service URI). Split prerequisite content into prepare; keep activation steps in S5 setup flow. |
| gpu-support.mdx | **KEEP** | Reference. Supports S4. |
| arbitrum-rpc.mdx | **KEEP** | Reference. Supports S4. |
| arbitrum-exchanges.mdx | **KEEP** | Reference. Supports S4. |
| capacity-planning.mdx | **KEEP** | Benchmarking content partially serves S4 (hardware assessment) and S11 (optimisation). |

---

## S5 - Get your node running

| File | Decision | Rationale |
|------|----------|-----------|
| guide.mdx (setup) | **REWRITE** | Update as S5 entry page. Ensure links match current page structure. |
| rs-install.mdx | **KEEP** | Docker and binary install. Core S5. |
| configure.mdx | **KEEP** | docker-compose templates. Core S5. |
| connect-and-activate.mdx | **SPLIT** (see S4 above) | Activation steps remain as S5 content. |
| orchestrator-transcoder-setup.mdx | **KEEP** | O-T split variant. S5 advanced. |
| dual-mode-configuration.mdx | **KEEP** | Dual mode variant. S5/S8 bridge. |
| siphon-setup.mdx | **KEEP** | Siphon variant. S5 variant. |
| video-transcoding-operations.mdx | **KEEP** | Video-specific operations. S5/S10 bridge. |
| s-guide.mdx | **DROP** | Deprecated setup overview. Broken internal links. Superseded by guide.mdx. |

---

## S6 - Join as a pool node

| File | Decision | Rationale |
|------|----------|-----------|
| join-a-pool.mdx | **MERGE -> new-join-a-pool.mdx** | Two versions of the same content. Consolidate into one definitive page. |
| new-join-a-pool.mdx | **REWRITE** | Absorb join-a-pool.mdx content. Add explicit "no LPT needed" statement. Add "enough stake?" decision framework. Rename to join-a-pool.mdx after merge. |
| community-pools.mdx | **KEEP** | Pool listing reference. Linked from pool guide. |
| pool-operators.mdx | **KEEP** | Pool operator side. Advanced content. |

---

## S7 - Set your pricing and cuts

| File | Decision | Rationale |
|------|----------|-----------|
| pricing-strategy.mdx | **REWRITE** | Promote from draft. Add operator-perspective framing. Add benchmark starting ranges. |
| delegate-operations.mdx | **KEEP** | Commission strategy and delegator attractiveness. Serves S7 and S11. |

---

## S8 - Set up AI pipelines

| File | Decision | Rationale |
|------|----------|-----------|
| diffusion-pipeline-setup.mdx | **KEEP** | Core S8. |
| llm-pipeline-setup.mdx | **KEEP** | Core S8. |
| realtime-ai-setup.mdx | **KEEP** | Core S8. |
| audio-and-vision-pipelines.mdx | **KEEP** | Core S8. |
| ai-inference-operations.mdx | **KEEP** | Core S8. |
| model-hosting.mdx | **KEEP** | Core S8. |
| model-demand-reference.mdx | **KEEP** | S8 reference, S11. |
| ai-model-management.mdx | **KEEP** | S8 depth, S11. |
| AI-prompt-start.mdx | **MOVE** | Currently in quickstart/. Move to ai-and-job-workloads/ or merge with relevant AI setup page. |

---

## S9 - Verify node end to end

| File | Decision | Rationale |
|------|----------|-----------|
| test.mdx | **REWRITE** | Add performance score verification, pricing gate verification, AI capability advertisement verification. |

---

## S10 - Monitor and operate

| File | Decision | Rationale |
|------|----------|-----------|
| metrics-and-alerting.mdx | **KEEP** | Core S10. |
| explorer-operations.mdx | **KEEP** | Core S10. |
| operator-toolbox.mdx | **KEEP** | Core S10. |
| r-monitor.mdx | **MERGE -> metrics-and-alerting.mdx or operator-toolbox.mdx** | Small page that could be absorbed into an existing monitoring page. |
| reward-call-tuning.mdx | **KEEP** | S10 operations content, also S11. |

---

## S11 - Optimise earnings

| File | Decision | Rationale |
|------|----------|-----------|
| pricing-strategy.mdx | Shared with S7 | S7 sets initial values; S11 optimises. |
| capacity-planning.mdx | **KEEP** | S11 optimisation. |
| ai-model-management.mdx | **KEEP** | S11 AI optimisation. |
| delegate-operations.mdx | **KEEP** | S11 stake attractiveness. |
| gateway-relationships.mdx | **KEEP** | S11 routing optimisation. |
| scale-operations.mdx | **KEEP** | S11 advanced scaling. |
| business-case.mdx | **KEEP** | S11 commercial positioning. |

---

## S12 - Diagnose and fix

| File | Decision | Rationale |
|------|----------|-----------|
| troubleshooting.mdx | **REWRITE** | Restructure into three diagnostic paths: (1) low work volume, (2) operational errors, (3) performance degradation. |
| faq.mdx | **MERGE -> troubleshooting.mdx** | FAQ content should be absorbed into restructured troubleshooting page. Symptom-indexed content fits the diagnostic path structure. |

---

## Unmapped / Orphan Pages

| File | Decision | Rationale |
|------|----------|-----------|
| concepts/composable/orchestratorRole.mdx | **KEEP** | Component file. |
| network-participation.mdx | **KEEP** | Governance voting. On-demand content. Cross-tab to About. |
| dep-guide.mdx (advanced-operations) | **DROP** | Redundant overview. Content covered by navigator and section entry pages. |
| orchestrator-profiles.mdx | **KEEP** | Community content. On-demand. |
| funding-and-support.mdx | **KEEP** | Community content. On-demand. |
| x-test.mdx | **DROP** | Stub. Wrong audience (developer). Superseded by test.mdx. |
| x-changelog.mdx | **DROP** | Stub with no content. |
| x-help.mdx | **DROP** | Stub with no content. |
| x-troubleshooting.mdx | **DROP** | Stub. Wrong audience. Superseded by troubleshooting.mdx. |
| x-contract-addresses.mdx | **REWRITE** | Develop into proper contract addresses reference using data from research pack. Fix title typo. |
| x-support-status.mdx | **KEEP** | Meta page. Useful for operators. |
| x-guides.mdx | **DROP** | Redundant guide index. Navigator and section structure serve this function. |
| x-payments.mdx | **MERGE -> payments.mdx** | Redundant payment content. |
| compendium/glossary.mdx | **MERGE -> glossary.mdx** | Two glossary files. Consolidate into one. |
| 3 tutorial stubs (gateway-tutorial-composable-pages) | **KEEP** | Stubs for future development. Not blocking. |

---

## Decision Summary

| Decision | Count |
|----------|-------|
| KEEP | 42 |
| REWRITE | 8 |
| MERGE (source) | 9 |
| MOVE | 2 |
| SPLIT | 1 (connect-and-activate.mdx) |
| DROP | 8 |
| **Total files affected** | 88 |

---

## Quickstart Section Note

The quickstart pages (guide.mdx, video-transcoding.mdx, tutorial.mdx) serve a pre-S4 "smoke test" function that sits outside the canonical IA journey. They are KEEP with no changes needed -- they allow operators to verify hardware before committing to the full setup flow.

The BYOC tutorials (byoc-cpu-smoke-test.mdx, byoc-cpu-tutorial.mdx) similarly serve a pre-S4 verification function for operators exploring the BYOC path. KEEP.
