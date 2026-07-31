# Orchestrators — Collated Status: IA vs Existing Content

> Generated: 2026-03-23
> Source: Full read of all 83 live MDX files in `v2/orchestrators/` mapped against the 12-section canonical IA

---

## Summary

- **83 live MDX pages** exist (excluding _workspace, x-archived, x-deprecated)
- **Every IA section has existing content** — no section starts from zero
- **Key problems**: duplicates, scattered placement, inconsistent frontmatter, unverified content quality
- **3 stubs** (tutorial composable pages)
- **~12 placeholder/draft pages** (x- prefix or status: draft)

---

## IA Section → Existing Content Map

### S1 — Which path is mine? (disambiguation / navigation)

| File | Title | Status | Notes |
|---|---|---|---|
| quickstart/dep-x-setup-paths.mdx | How to Get Started | current | **Already does S1's job** — has path table (Pool Worker / Solo / Pool Operator / Enterprise), card navigation. Has REVIEW markers for LPT stake floor and VRAM threshold |
| navigator.mdx | Find Your Path | — | Landing page, pageType: landing |
| portal.mdx | Orchestrator Portal | current | Landing page |
| index.mdx | Orchestrators Index | — | Tab entry point |

**Verdict**: S1 content exists. `dep-x-setup-paths.mdx` is the closest match. Needs: verify the 4-path model matches IA's 3-path model (IA has solo/AI/pool; existing page has solo/pool worker/pool operator/enterprise). **Decision needed**: reconcile path count.

---

### S2 — Is this viable for my hardware and situation? (evaluation)

| File | Title | Status | Notes |
|---|---|---|---|
| guides/operator-considerations/business-case.mdx | Business Case | — | |
| guides/operator-considerations/operator-rationale.mdx | Operating Rationale | — | |
| guides/operator-considerations/requirements.mdx | Requirements | — | |
| guides/operator-considerations/operator-impact.mdx | Operator Impact | — | |

**Verdict**: S2 has 4 pages of content across operator-considerations/. Need to verify: do these collectively answer "will my GPU and capital qualify?" or are they conceptual overviews?

---

### S3 — How does work reach me and how do I get paid? (payment mechanics)

| File | Title | Status | Notes |
|---|---|---|---|
| guides/payments-and-pricing/payments.mdx | Payments | — | |
| guides/payments-and-pricing/payment-receipts.mdx | Payment Receipts | — | |
| guides/staking-and-rewards/earning-model.mdx | Earning Model | — | |
| guides/staking-and-rewards/reward-mechanics.mdx | Reward Mechanics | — | |
| guides/staking-and-rewards/network-participation.mdx | Network Participation | — | |
| concepts/incentive-model.mdx | Orchestrator Incentive Model | — | |

**Verdict**: S3 has 6 pages of content. Likely over-split — IA wants one concept page covering routing + payments + rewards. Need to verify content quality and whether these can consolidate.

---

### S4 — Prerequisites (hardware, tokens, wallet, network)

| File | Title | Status | Notes |
|---|---|---|---|
| setup/rcs-requirements.mdx | Setup Checklist | — | purpose: how_to |
| resources/gpu-support.mdx | GPU Support Matrix | — | |
| resources/arbitrum-exchanges.mdx | Arbitrum Exchanges | — | pageType: reference |
| resources/arbitrum-rpc.mdx | Arbitrum RPCs | — | pageType: reference |

**Verdict**: S4 has prerequisite content but scattered across setup/ and resources/. The checklist page is the anchor. GPU support and Arbitrum resources support it.

---

### S5 — Get your node running (install, configure, register, verify)

| File | Title | Status | Notes |
|---|---|---|---|
| setup/guide.mdx | Run an Orchestrator | current | Overview with checklist — links to sub-pages |
| setup/s-guide.mdx | Setting up an Orchestrator | — | **DUPLICATE** of guide.mdx? Also has setup checklist |
| setup/rs-install.mdx | Install go-livepeer | — | purpose: how_to |
| setup/configure.mdx | Configure Your Orchestrator | — | pageType: how_to |
| setup/connect-and-activate.mdx | Connect to Arbitrum | — | pageType: how_to |
| setup/test.mdx | Verify Your Setup | — | pageType: how_to |
| setup/r-monitor.mdx | Set Up Monitoring | — | purpose: how_to |
| quickstart/guide.mdx | Orchestrator Quickstart | current | Overview |
| quickstart/tutorial.mdx | Quickstart Tutorial | current | Ordered walkthrough |
| quickstart/video-transcoding.mdx | Verify Your Hardware | — | Smoke test |

**Verdict**: S5 is the most complete section — 10 pages covering the full install → configure → connect → verify flow. Has a duplicate guide (setup/guide.mdx vs setup/s-guide.mdx). Quickstart provides a fast-track. **This section likely needs consolidation, not new writing.**

---

### S6 — Join as a pool node

| File | Title | Status | Notes |
|---|---|---|---|
| guides/deployment-details/join-a-pool.mdx | Join a Pool | — | pageType: quickstart (wrong type?) |
| guides/deployment-details/new-join-a-pool.mdx | Join a Pool | — | **DUPLICATE** — same title, different file |
| resources/community-pools.mdx | Community Orchestrator Pools | review | Reference list |
| guides/advanced-operations/pool-operators.mdx | Pool Operators | — | For pool operators, not pool node joiners |

**Verdict**: S6 has content but has a duplicate (two "Join a Pool" pages). Need to verify which is current.

---

### S7 — Set pricing and cuts

| File | Title | Status | Notes |
|---|---|---|---|
| guides/config-and-optimisation/pricing-strategy.mdx | Pricing Strategy | — | |
| guides/config-and-optimisation/reward-call-tuning.mdx | Reward Call Tuning | — | |
| guides/staking-and-rewards/delegate-operations.mdx | Delegate Operations | — | Cut settings from operator perspective |

**Verdict**: S7 has content across two folders. Need to verify these cover the IA's requirement: "set pricePerUnit to a justified value; set reward cut and fee cut with trade-off understanding."

---

### S8 — Set up AI pipelines

| File | Title | Status | Notes |
|---|---|---|---|
| quickstart/AI-prompt-start.mdx | Add AI to Your Node | review | Quick add-AI guide |
| guides/ai-and-job-workloads/ai-inference-operations.mdx | AI Inference Operations | — | |
| guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | Diffusion Pipeline Setup | — | |
| guides/ai-and-job-workloads/llm-pipeline-setup.mdx | LLM Pipeline Setup | — | |
| guides/ai-and-job-workloads/realtime-ai-setup.mdx | Cascade Setup | — | |
| guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | Audio and Vision Pipelines | — | |
| guides/ai-and-job-workloads/model-hosting.mdx | Model Hosting | — | |
| guides/ai-and-job-workloads/model-demand-reference.mdx | Model and Demand Reference | — | |
| guides/ai-and-job-workloads/workload-options.mdx | Workload Options | — | |
| guides/ai-and-job-workloads/video-transcoding-operations.mdx | Video Transcoding Operations | — | |
| guides/config-and-optimisation/ai-model-management.mdx | AI Model Management | — | |

**Verdict**: S8 is the **largest section** — 11 pages. Heavy coverage of AI pipelines, model types, and operations. IA flagged this may need to split. It already IS split across many pages. Need quality/accuracy check.

---

### S9 — Verify node working end to end

| File | Title | Status | Notes |
|---|---|---|---|
| setup/test.mdx | Verify Your Setup | — | Also serves S5 |
| quickstart/video-transcoding.mdx | Verify Your Hardware | — | Smoke test |

**Verdict**: S9 has partial coverage. Overlaps with S5 verification steps. May not need a standalone section — could be final step in S5.

---

### S10 — Monitor and operate day-to-day

| File | Title | Status | Notes |
|---|---|---|---|
| guides/monitoring-and-tooling/metrics-and-alerting.mdx | Metrics and Alerting | — | |
| guides/monitoring-and-tooling/explorer-operations.mdx | Explorer Operations | — | |
| guides/monitoring-and-tooling/operator-toolbox.mdx | Operator Toolbox | — | |
| setup/r-monitor.mdx | Set Up Monitoring | — | Also in setup/ |

**Verdict**: S10 has 4 pages. Good coverage area. Need quality check.

---

### S11 — Optimise earnings and performance

| File | Title | Status | Notes |
|---|---|---|---|
| guides/config-and-optimisation/capacity-planning.mdx | Capacity Planning | — | |
| guides/config-and-optimisation/pricing-strategy.mdx | Pricing Strategy | — | Also serves S7 |

**Verdict**: S11 has content but thin. Capacity planning + pricing strategy. May need more on stake positioning and delegation attraction.

---

### S12 — Diagnose and fix problems

| File | Title | Status | Notes |
|---|---|---|---|
| guides/monitoring-and-tooling/troubleshooting.mdx | Troubleshooting | — | |
| resources/faq.mdx | FAQ and Troubleshooting | — | |
| resources/technical/x-troubleshooting.mdx | Troubleshooting | draft | Placeholder |

**Verdict**: S12 has 2 real pages + 1 placeholder. IA requires three diagnostic paths (low volume, operational errors, performance drop) — need to verify existing content covers these.

---

## Content that doesn't map to any IA section

| File | Title | Issue |
|---|---|---|
| concepts/architecture.mdx | Orchestrator Architecture | Conceptual — could support S2 or S3 |
| concepts/capabilities.mdx | Orchestrator Capabilities | Conceptual — could support S2 |
| concepts/role.mdx | The Orchestrator Role | Conceptual — could support S2 |
| concepts/composable/orchestratorRole.mdx | Orchestrator Role Diagram | Mermaid diagram — visual aid |
| guides/advanced-operations/gateway-orchestrator-interface.mdx | Gateway and Orchestrator Interface | Advanced — post-S10 |
| guides/advanced-operations/gateway-relationships.mdx | Gateway Relationships | Advanced — cross-tab |
| guides/advanced-operations/scale-operations.mdx | Scale Operations | Advanced — enterprise |
| guides/deployment-details/dual-mode-configuration.mdx | Dual Mode Configuration | Could map to S5 or S8 |
| guides/deployment-details/orchestrator-transcoder-setup.mdx | O-T Split Setup | Advanced deployment |
| guides/deployment-details/setup-options.mdx | Setup Options | Could support S1 |
| guides/deployment-details/siphon-setup.mdx | Siphon Split Setup | Advanced deployment |
| guides/roadmap-and-funding/funding-and-support.mdx | Funding and Support | draft — not in IA |
| guides/roadmap-and-funding/orchestrator-profiles.mdx | Orchestrator Profiles | draft — not in IA |
| guides/tutorials/* (8 files) | Various tutorials | May map to S5/S8 as practical guides |
| resources/cli-flags.mdx | CLI Flags Reference | Reference — on-demand content |
| resources/glossary.mdx | Orchestrator Terminology Glossary | Reference — supports all sections |
| resources/community-guides.mdx | Community Guides & Tutorials | Reference |
| ~8 x- prefix pages | Various placeholders | draft/placeholder — need decision: keep or drop |

---

## Duplicates Found

1. **setup/guide.mdx** vs **setup/s-guide.mdx** — both are setup overviews with checklists
2. **guides/deployment-details/join-a-pool.mdx** vs **guides/deployment-details/new-join-a-pool.mdx** — same title
3. **guides/monitoring-and-tooling/troubleshooting.mdx** vs **resources/technical/x-troubleshooting.mdx** — same topic

---

## Decisions Needed Before Proceeding

1. **Path model mismatch**: IA has 3 paths (solo/AI/pool). Existing page has 4 paths (solo/pool worker/pool operator/enterprise). Which is correct?
2. **Duplicate resolution**: Which of each duplicate pair is canonical?
3. **Concepts folder**: Keep as standalone conceptual section, or fold content into IA sections S2/S3?
4. **Tutorials**: Keep as separate section, or integrate into relevant IA sections (S5, S8)?
5. **Advanced operations**: Keep or defer? (gateway interface, scale ops, O-T split, siphon)
6. **~12 placeholder pages** (x- prefix, status: draft with no content): Drop or fill?

---

## What's Actually Needed to Finish

Based on this inventory, the work is NOT "write 12 sections from scratch." It's:

1. **Consolidate** — merge duplicates, fold scattered pages into IA sections
2. **Verify** — read each page's actual content for accuracy, voice, completeness
3. **Fill gaps** — write missing content within existing pages (S11 is thin, S12 needs diagnostic paths)
4. **Reorganise** — move files to match IA section structure (if folder restructure is approved)
5. **Clean up** — resolve placeholders, fix frontmatter, remove deprecated pages
6. **Cross-check** — terminology against locked glossary, verify flags against sources
