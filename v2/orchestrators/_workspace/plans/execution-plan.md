# Orchestrator Tab Execution Plan

Priority: Finalise orchestrator tab - locked IA and content added.

---

## Current Status (as of 2026-03-16)

### Phase 1: IA Finalisation and Handoff - ✅ COMPLETE

| Step | Status | Output |
|------|--------|--------|
| 1. Finalise IA | ✅ | Locked in this file (9 guide sections + quickstart + setup) |
| 2. Write plan with exact paths | ✅ | `handoff-restructure.md` |
| 3. Restructuring handoff | ✅ | Executed by agent. Files renamed, stubs created, nav updated. |
| 4. Gap page identification | ✅ | `handoff-content-writing.md` |
| 5. Writing handoff prompts | ✅ | `content-reference-pack/`, `tutorial-writing-pack/`, `quickstart-setup-writing-pack/` |

### Phase 2: Content Integration - 🔄 IN PROGRESS

| Step | Status | Detail |
|------|--------|--------|
| 7-8. Section-by-section review | 🔄 | Section 1 initial sweep done. Sections 2-9 not started. Paused for content deliveries. |
| 9. Navigator.mdx | ✅ | Rewritten as job-story router. Committed. |
| 10. Integrate new pages | ✅ | 9 guide pages + 6 tutorials + 7 quickstart/setup pages wired in. |

### Content Delivery Status

| Deliverable | Pages | Status |
|------------|-------|--------|
| P0-P2 guide pages (from completed-pages-pack) | 9 | ✅ Integrated |
| Tutorials (from tutorial-files.zip) | 6 | ✅ Integrated |
| Quickstart pages (from quickstart-setup-completed-pages.zip) | 2 | ✅ Integrated |
| Setup pages (from quickstart-setup-completed-pages.zip) | 5 | ✅ Integrated |
| Setup prerequisites (rcs-requirements.mdx) | 1 | ✅ Written directly, committed |
| Roadmap stubs (funding-and-support, orchestrator-profiles) | 2 | ❌ Content deferred (write when source material available) |

### Additional Work Done (beyond original plan)

| Item | Status |
|------|--------|
| Quickstart section designed and written | ✅ |
| Setup section designed and written | ✅ |
| Portal cards updated and committed | ✅ |
| Concepts section reviewed (4 pages, no critical issues) | ✅ |
| Navigator.mdx rewritten and committed | ✅ |
| Gateway plan.md written | ✅ |
| Product-thinking skill expanded (9 steps) | ✅ |
| Docs-section-planning-playbook written | ✅ |
| Glossary operational mode asymmetry added | ✅ |
| Section names standardised ("and" not "&") | ✅ |

### Remaining Work

| Item | Priority | Detail |
|------|----------|--------|
| Section-by-section human review (Sections 1-9) | P1 | Initial sweeps needed, then page-by-page human review |
| 5 page updates (U1-U5) | P1 | operator-rationale (summary), setup-options (terminology), ai-inference-operations (bridge+J6), model-demand-reference (demand data), troubleshooting (quick-nav) |
| Nav Dep/New cleanup | P1 | Remove all Dep/New migration subgroups from docs-gate-work.json |
| Concepts PURPOSE comments | P2 | 4 concept pages missing PURPOSE |
| 2 roadmap stubs | P3 | Write when SPE/operator profile data available |
| Phase 3: Standards testing | P3 | Page-authoring compliance, copy lint, REVIEW flag resolution |
| Phase 3: Gateway re-review | P3 | Delta check using orchestrator process as template |
| Phase 3: Cleanup | P3 | Move x-deprecated files, clean empty dirs (LAST) |

---

## Task Allocation

### Handoff Tasks (delegated to agents/worktrees)
- **a)** Restructuring folders, file names, and docs-gate-work.json nav
- **b)** Writing new pages (from templates/briefs)
- **c)** Anything not high-level finalising

### This Thread - Phase 1 (IA Finalisation & Handoff Preparation)
1. Review and finalise Orchestrators Guides IA ✅ DONE
2. Write full plan with exact file paths and nav JSON
3. Write prompt handoff for task (a) - restructuring
4. Identify gap pages needing writing, associate content knowledge for handoff
5. Write prompt template for task (b) - new page writing

### This Thread - Phase 2 (Content Integration)
7. Review merge/restructure page decisions and finalise (section by section, nav order)
8. Execute on 7 - page by page with human review of layout/style
9. Write navigator.mdx (root orchestrator navigation page) after guides review complete
10. Integrate new content pages from handoff agents and review

### Phase 3 (Later - saved to `v2/orchestrators/phase-3-plan.md`)
11. Standards testing and copywriting framework
12. Gateway re-review
13. Cleanup: move deprecated files to x-deprecated (LAST task, after all content finalised)

---

## Critical Rules

- **NO DELETIONS.** Only `git mv` to x-deprecated folders. Cleanup is Phase 3 Step 13.
- **Stub pages** must include: (a) PURPOSE comment, (b) page structure outline as JSX comment, (c) complete frontmatter.
- **Phase 2 order**: follow navigation order (Section 1 first, Section 9 last).
- **navigator.mdx**: write AFTER all guides sections reviewed (Step 9).
- **Quickstart and Setup sections**: OUT OF SCOPE for this plan. Flagged for separate review.

---

## Resolved Items

- **configure.mdx**: Fixed. Nav references `setup/configure`. Committed.
- **join-a-pool**: Keep. Do NOT delete `new-join-a-pool` - flag for Phase 2 merge review.
- **reward-call-tuning**: Standalone for now. Flag for Phase 2 review (possible fold into delegate-operations).
- **dual-mode + O-T setup**: Both stay in Deployment Details. Flag for Phase 2 merge review.
- **batch-ai-setup split**: Create empty stubs in restructuring. Fill content in Phase 2.
- **requirements**: Moved to Operator Considerations (Section 1). Cross-ref from setup-options.
- **Quickstart + Setup**: Out of scope. Content and naming need separate review.

---

## Locked IA: Guides (9 Sections)

### Section 1: Operator Considerations

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `operator-considerations/operator-rationale.mdx` | `operator-considerations/operator-rationale.mdx` | none | Operator Rationale | Update: add scannable summary at top |
| `operator-considerations/business-case.mdx` | `operator-considerations/business-case.mdx` | none | Business Case | |
| `operator-considerations/protocol-influence.mdx` | `operator-considerations/operator-impact.mdx` | **rename** | Operator Impact | |
| `deployment-details/requirements.mdx` | `operator-considerations/requirements.mdx` | **move** | Requirements | Must categorise by path/setup option. Cross-ref from setup-options in Section 2. |

### Section 2: Deployment Details

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `deployment-details/setup-options.mdx` | `deployment-details/setup-options.mdx` | none | Setup Options | Update: "combined mode" → "dual mode". Must link to requirements in Section 1. |
| `deployment-details/siphon-setup.mdx` | `deployment-details/siphon-setup.mdx` | none | Siphon Setup | |
| `deployment-details/dual-workload-setup.mdx` | `deployment-details/dual-mode-configuration.mdx` | **rename** | Dual Mode | ⚠️ REVIEW Phase 2: possible merge with O-T setup |
| `deployment-details/orchestrator-transcoder-setup.mdx` | `deployment-details/orchestrator-transcoder-setup.mdx` | none | O-T Split | ⚠️ REVIEW Phase 2: possible merge with dual-mode |
| `deployment-details/join-a-pool.mdx` | `deployment-details/join-a-pool.mdx` | none | Join a Pool | |
| `deployment-details/new-join-a-pool.mdx` | `deployment-details/new-join-a-pool.mdx` | none | - | ⚠️ REVIEW Phase 2: merge into join-a-pool? |

### Section 3: Workloads & AI

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `ai-and-job-workloads/job-types.mdx` | `ai-and-job-workloads/workload-options.mdx` | **rename** | Workload Options | Overview page. Must cover BYOC, video, AI, dual, realtime. |
| `ai-and-job-workloads/video-transcoding.mdx` | `ai-and-job-workloads/video-transcoding-operations.mdx` | **rename** | Video Transcoding | |
| `ai-and-job-workloads/ai-workloads-guide.mdx` | `ai-and-job-workloads/ai-inference-operations.mdx` | **rename** | AI Inference | Update: add "Already running video?" bridge, add J6 low-LPT callout |
| `ai-and-job-workloads/batch-ai-setup.mdx` | `ai-and-job-workloads/diffusion-pipeline-setup.mdx` | **rename** | Diffusion Setup | ⚠️ REVIEW Phase 2: possible tab-merge with LLM setup |
| - | `ai-and-job-workloads/llm-pipeline-setup.mdx` | **NEW stub** | LLM Setup | ⚠️ REVIEW Phase 2: possible tab-merge with diffusion setup |
| `ai-and-job-workloads/realtime-ai-setup.mdx` | `ai-and-job-workloads/realtime-ai-setup.mdx` | none | Realtime AI | ⚠️ REVIEW Phase 2: possible tab-merge with audio-and-vision |
| - | `ai-and-job-workloads/audio-and-vision-pipelines.mdx` | **NEW stub** | Audio & Vision | ⚠️ REVIEW Phase 2: possible tab-merge with realtime |
| `ai-and-job-workloads/model-vram-reference.mdx` | `ai-and-job-workloads/model-demand-reference.mdx` | **rename** | Model Reference | Update: add demand data |
| - | `ai-and-job-workloads/model-hosting.mdx` | **NEW stub** | Model Hosting | Where to find models, how to host. ⚠️ REVIEW Phase 2: possible merge into ai-inference-operations |

### Section 4: Staking & Earning (merged)

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `staking-and-rewards/earnings.mdx` | `staking-and-rewards/earning-model.mdx` | **rename** | Earning Model | ⚠️ REVIEW Phase 2: might belong in Section 1 |
| `staking-and-rewards/rewards-and-fees.mdx` | `staking-and-rewards/reward-mechanics.mdx` | **rename** | Reward Mechanics | LPT inflation rewards, round system, Reward() calling, gas, cuts |
| `payments-and-pricing/payment-flow.mdx` | `payments-and-pricing/payment-receipts.mdx` | **rename** | Payment Receipts | STUB. ETH service fees via PM tickets, redemption, gas batching |
| `payments-and-pricing/payments.mdx` | `payments-and-pricing/payments.mdx` | none | Payments | ⚠️ REVIEW Phase 2: scope overlap with payment-receipts |
| `staking-and-rewards/attracting-delegates.mdx` | `staking-and-rewards/delegate-operations.mdx` | **rename** | Delegate Operations | Grow delegation, manage cuts, delegator relationships |
| `staking-and-rewards/governance.mdx` | `staking-and-rewards/network-participation.mdx` | **rename** | Network Participation | |

### Section 5: Config & Optimisation

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `payments-and-pricing/pricing-strategy.mdx` | `config-and-optimisation/pricing-strategy.mdx` | **move** | Pricing Strategy | STUB - needs writing |
| - | `config-and-optimisation/capacity-planning.mdx` | **NEW stub** | Capacity Planning | Absorb deprecated benchmarking + session-limits |
| - | `config-and-optimisation/ai-model-management.mdx` | **NEW stub** | Model Management | Warm/cold, rotation, SFAST/DEEPCACHE, demand-driven |
| - | `config-and-optimisation/reward-call-tuning.mdx` | **NEW stub** | Reward Tuning | ⚠️ REVIEW Phase 2: possible fold into delegate-operations |

### Section 6: Monitoring & Tools

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `monitoring-and-tooling/tools.mdx` | `monitoring-and-tooling/operator-toolbox.mdx` | **rename** | Operator Toolbox | 📌 Flag: good rename for gateway equivalent too |
| `monitoring-and-tooling/explorer-guide.mdx` | `monitoring-and-tooling/explorer-operations.mdx` | **rename** | Explorer Guide | |
| `monitoring-and-tooling/metrics-monitoring.mdx` | `monitoring-and-tooling/metrics-and-alerting.mdx` | **rename** | Metrics & Alerting | |
| `monitoring-and-tooling/troubleshooting.mdx` | `monitoring-and-tooling/troubleshooting.mdx` | none | Troubleshooting | Update: add symptom quick-nav |

### Section 7: Advanced Operations

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `advanced-operations/gateways-orchestrators.mdx` | `advanced-operations/gateway-relationships.mdx` | **rename** | Gateway Relationships | 1st position |
| - | `advanced-operations/gateway-orchestrator-interface.mdx` | **NEW stub** | Gateway Interface | 2nd position. 📌 Flag: gateway equiv = "Orchestrator Interface" |
| `advanced-operations/run-a-pool.mdx` | `advanced-operations/pool-operators.mdx` | **rename** | Pool Operators | 3rd. Guide to running a pool for other GPUs. |
| `advanced-operations/large-scale-operations.mdx` | `advanced-operations/scale-operations.mdx` | **rename** | Scale Operations | 4th. Data-centre / enterprise setups. |

### Section 8: Roadmap & Funding

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `roadmap-and-funding/operator-support.mdx` | `roadmap-and-funding/funding-and-support.mdx` | **rename** | Funding & Support | Community help, SPE funding guide |
| `roadmap-and-funding/orchestrator-showcase.mdx` | `roadmap-and-funding/orchestrator-profiles.mdx` | **rename** | Operator Profiles | Showcase operators (Titan etc.), case studies |

### Section 9: Tutorials

| Current path | Target path | Change | sidebarTitle | Flags |
|-------------|------------|--------|-------------|-------|
| `tutorials/imported-tutorial-1-*` | x-deprecated | **move** | - | Replace with: |
| - | `tutorials/byoc-cpu-smoke-test.mdx` | **NEW stub** | BYOC Smoke Test | |
| `tutorials/imported-tutorial-2-*` | x-deprecated | **move** | - | Replace with: |
| - | `tutorials/zero-to-first-reward.mdx` | **NEW stub** | Zero to Reward | |
| `tutorials/imported-tutorial-3-*` | x-deprecated | **move** | - | Replace with: |
| - | `tutorials/ai-earning-quickstart.mdx` | **NEW stub** | AI Quickstart | |
| - | `tutorials/add-ai-to-video-node.mdx` | **NEW stub** | Add AI to Video | |
| - | `tutorials/full-ai-pipeline-tutorial.mdx` | **NEW stub** | Full AI Pipeline | |
| - | `tutorials/realtime-ai-tutorial.mdx` | **NEW stub** | Realtime AI | |

---

## Out of Scope (flagged for later)

### Quickstart Section
- Current pages: guide, video-transcoding, tutorial (empty), ai-prompt-start
- Names and content need separate review. Do NOT restructure in this plan.
- Flag: current page content does not match the quickstart design in product-thinking-review.

### Setup Section
- Current pages: guide, rcs-requirements, rs-install, configure, connect-and-activate, test, r-monitor
- Locked as-is. Do NOT restructure in this plan.

---

## Summary Counts

| Action | Count |
|--------|-------|
| Renames | 19 |
| Moves | 3 (requirements, pricing-strategy, dual-mode to rename) |
| New stubs | 13 |
| Deprecated moves | 3 (imported tutorials) |
| Unchanged | 12 |
| ⚠️ Phase 2 review flags | 11 |
| 📌 Gateway cross-flags | 2 |
| **Total pages in guides** | **47** |

---

## Phase 2-3 Detail

### Step 7-8: Section-by-section human review (nav order)

1. Operator Considerations → 2. Deployment Details → 3. Workloads & AI → 4. Staking & Earning → 5. Config & Optimisation → 6. Monitoring & Tools → 7. Advanced Operations → 8. Roadmap & Funding → 9. Tutorials

Per page: review content against PURPOSE → human reviews layout/style → make approved changes → verify cross-refs.

### Step 9: Write navigator.mdx
After ALL guides sections reviewed. Job-story router.

### Step 10: Integrate new pages from handoff agents
Review against PURPOSE + acceptance criteria.

### Phase 3
11. Standards testing
12. Gateway re-review
13. Cleanup (LAST - after all content in)

---

## Key Files

| File | Role |
|------|------|
| `v2/orchestrators/_workspace/plans/plan.md` | Consolidated plan - source of truth |
| `v2/orchestrators/_workspace/plans/execution-plan.md` | This file - execution tracking |
| `tools/config/scoped-navigation/docs-gate-work.json` | Nav config |
| `ai-tools/ai-skills/page-authoring/SKILL.md` | Page authoring standards |
| `ai-tools/ai-skills/product-thinking/SKILL.md` | Product thinking framework |
| `v2/orchestrators/resources/glossary.mdx` | Terminology reference |
| `v2/orchestrators/_workspace/handoff/product-thinking-handoff.md` | Handoff brief |
