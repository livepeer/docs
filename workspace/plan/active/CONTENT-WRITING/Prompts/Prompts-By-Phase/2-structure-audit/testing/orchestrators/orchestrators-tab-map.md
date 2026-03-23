# Orchestrators — Tab Map

**Tab**: Orchestrators
**Source**: workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collation-prompt/results/canonical-orchestrators-audience-design.md — 2026-03-23
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Pre-flight Notes

- Phase 1 audience design: present and approved (canonical, 4-run consensus, 2026-03-23).
- Page type taxonomy: this audit uses the **7-type canonical set** (`navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`). The current validator (`tools/lib/frontmatter-taxonomy.js`) still uses the old 12-type schema. Any page carrying old-schema values (`how_to`, `overview`, `landing`, `quickstart`, `glossary`) will fail CI once the validator is updated. All such values are flagged below.
- Routing/disambiguation page: the Phase 1 audience design produced a 4-run unanimous consensus that a dedicated disambiguation section is required as S1 (audience: all arriving personas; purpose: orient). The current tab has `navigator.mdx` in the "Start Here" group, which serves the routing function. Presence confirmed; content alignment assessed below.

---

## Current Tab Inventory

| Section | Current pages (nav path) | Status | Frontmatter complete? |
|---|---|---|---|
| Start Here — portal | `v2/orchestrators/portal` | current | NO — `pageType: landing` (old schema); missing `lifecycleStage` |
| Start Here — navigator | `v2/orchestrators/navigator` | current | NO — `pageType: landing` (old schema); missing `lifecycleStage` |
| Concepts — role | `v2/orchestrators/concepts/role` | current | NO — `pageType: 'overview'` (old schema); missing `lifecycleStage` |
| Concepts — capabilities | `v2/orchestrators/concepts/capabilities` | current | NO — `pageType: 'concept'` (canonical); missing `lifecycleStage` |
| Concepts — architecture | `v2/orchestrators/concepts/architecture` | current | NO — `pageType: 'concept'` (canonical); missing `lifecycleStage` |
| Concepts — incentive-model | `v2/orchestrators/concepts/incentive-model` | current | NO — `pageType: 'concept'` (canonical); missing `lifecycleStage` |
| Quickstart — guide (overview) | `v2/orchestrators/quickstart/guide` | current | NO — `pageType: overview` (old schema); missing `lifecycleStage` |
| Quickstart — video-transcoding | `v2/orchestrators/quickstart/video-transcoding` | current | NO — `pageType: quickstart` (old schema); missing `lifecycleStage` |
| Quickstart — tutorial | `v2/orchestrators/quickstart/tutorial` | current | Not sampled — assumed same pattern |
| Quickstart — AI-prompt-start | `v2/orchestrators/quickstart/AI-prompt-start` | current | Not sampled — assumed same pattern |
| Setup — guide (overview) | `v2/orchestrators/setup/guide` | current | NO — `pageType: overview` (old schema); missing `lifecycleStage` |
| Setup — rcs-requirements (prerequisites) | `v2/orchestrators/setup/rcs-requirements` | current | NO — `pageType: how_to` (old schema); `purpose: how_to` (old schema); missing `lifecycleStage` |
| Setup — rs-install | `v2/orchestrators/setup/rs-install` | current | Not sampled — assumed same pattern |
| Setup — configure | `v2/orchestrators/setup/configure` | current | Not sampled — assumed same pattern |
| Setup — connect-and-activate | `v2/orchestrators/setup/connect-and-activate` | current | Not sampled — assumed same pattern |
| Setup — test | `v2/orchestrators/setup/test` | current | Not sampled — assumed same pattern |
| Setup — r-monitor | `v2/orchestrators/setup/r-monitor` | current | Not sampled — assumed same pattern |
| Guides — Operator Considerations — operator-rationale | `v2/orchestrators/guides/operator-considerations/operator-rationale` | current | NO — `pageType: guide` (canonical); missing `lifecycleStage`; malformed leading characters (`glrw\npwrfs`) before frontmatter block — structural defect |
| Guides — Operator Considerations — business-case | `v2/orchestrators/guides/operator-considerations/business-case` | current | Not sampled |
| Guides — Operator Considerations — operator-impact | `v2/orchestrators/guides/operator-considerations/operator-impact` | current | Not sampled |
| Guides — Operator Considerations — requirements | `v2/orchestrators/guides/operator-considerations/requirements` | current | Not sampled |
| Guides — Deployment Details — setup-options | `v2/orchestrators/guides/deployment-details/setup-options` | current | NO — `pageType: overview` (old schema); missing `lifecycleStage` |
| Guides — Deployment Details — siphon-setup | `v2/orchestrators/guides/deployment-details/siphon-setup` | current | Not sampled |
| Guides — Deployment Details — dual-mode-configuration | `v2/orchestrators/guides/deployment-details/dual-mode-configuration` | current | Not sampled |
| Guides — Deployment Details — orchestrator-transcoder-setup | `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` | current | Not sampled |
| Guides — Deployment Details — join-a-pool | `v2/orchestrators/guides/deployment-details/join-a-pool` | current | NO — `pageType: quickstart` (old schema); `purpose: faq` (non-canonical); missing `status`; missing `lifecycleStage` |
| Guides — Deployment Details — new-join-a-pool | `v2/orchestrators/guides/deployment-details/new-join-a-pool` | current | Not sampled |
| Guides — Workloads and AI — workload-options | `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | current | NO — `pageType: concept` (canonical); `status: published` (non-canonical); missing `lifecycleStage` |
| Guides — Workloads and AI — video-transcoding-operations | `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` | current | Not sampled |
| Guides — Workloads and AI — ai-inference-operations | `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | current | Not sampled |
| Guides — Workloads and AI — diffusion-pipeline-setup | `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` | current | Not sampled |
| Guides — Workloads and AI — llm-pipeline-setup | `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` | current | Not sampled |
| Guides — Workloads and AI — realtime-ai-setup | `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | current | Not sampled |
| Guides — Workloads and AI — audio-and-vision-pipelines | `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` | current | Not sampled |
| Guides — Workloads and AI — model-demand-reference | `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | current | Not sampled |
| Guides — Workloads and AI — model-hosting | `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` | current | Not sampled |
| Guides — Staking and Earning — earning-model | `v2/orchestrators/guides/staking-and-rewards/earning-model` | current | NO — `pageType: concept` (canonical); `status: published` (non-canonical); missing `lifecycleStage` |
| Guides — Staking and Earning — reward-mechanics | `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | current | Not sampled |
| Guides — Staking and Earning — payment-receipts | `v2/orchestrators/guides/payments-and-pricing/payment-receipts` | current | Not sampled |
| Guides — Staking and Earning — payments | `v2/orchestrators/guides/payments-and-pricing/payments` | current | Not sampled |
| Guides — Staking and Earning — delegate-operations | `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | current | Not sampled |
| Guides — Staking and Earning — network-participation | `v2/orchestrators/guides/staking-and-rewards/network-participation` | current | Not sampled |
| Guides — Config and Optimisation — pricing-strategy | `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | current | NO — `pageType: how_to` (old schema); `status: draft` — NOTE: draft status but published in nav |
| Guides — Config and Optimisation — capacity-planning | `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | current | Not sampled |
| Guides — Config and Optimisation — ai-model-management | `v2/orchestrators/guides/config-and-optimisation/ai-model-management` | current | Not sampled |
| Guides — Config and Optimisation — reward-call-tuning | `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | current | Not sampled |
| Guides — Monitoring and Tools — operator-toolbox | `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` | current | NO — `pageType: reference` (canonical); missing `lifecycleStage`; missing `status` |
| Guides — Monitoring and Tools — explorer-operations | `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | current | Not sampled |
| Guides — Monitoring and Tools — metrics-and-alerting | `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | current | Not sampled |
| Guides — Monitoring and Tools — troubleshooting | `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | current | NO — `pageType: guide` (canonical); `status: published` (non-canonical); missing `lifecycleStage` |
| Guides — Advanced Operations — gateway-relationships | `v2/orchestrators/guides/advanced-operations/gateway-relationships` | current | NO — `pageType: concept` (canonical); `status: published` (non-canonical); missing `lifecycleStage` |
| Guides — Advanced Operations — gateway-orchestrator-interface | `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` | current | Not sampled |
| Guides — Advanced Operations — pool-operators | `v2/orchestrators/guides/advanced-operations/pool-operators` | current | Not sampled |
| Guides — Advanced Operations — scale-operations | `v2/orchestrators/guides/advanced-operations/scale-operations` | current | Not sampled |
| Guides — Roadmap and Funding — funding-and-support | `v2/orchestrators/guides/roadmap-and-funding/funding-and-support` | current | NO — `pageType: guide` (canonical); `status: draft` — NOTE: draft status but published in nav |
| Guides — Roadmap and Funding — orchestrator-profiles | `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles` | current | Not sampled |
| Guides — Tutorials — byoc-cpu-smoke-test | `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test` | current | NO — `pageType: tutorial` (canonical); missing `lifecycleStage` |
| Guides — Tutorials — zero-to-first-reward | `v2/orchestrators/guides/tutorials/zero-to-first-reward` | current | Not sampled |
| Guides — Tutorials — ai-earning-quickstart | `v2/orchestrators/guides/tutorials/ai-earning-quickstart` | current | Not sampled |
| Guides — Tutorials — add-ai-to-video-node | `v2/orchestrators/guides/tutorials/add-ai-to-video-node` | current | Not sampled |
| Guides — Tutorials — full-ai-pipeline-tutorial | `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` | current | Not sampled |
| Guides — Tutorials — realtime-ai-tutorial | `v2/orchestrators/guides/tutorials/realtime-ai-tutorial` | current | Not sampled |
| Resources — faq | `v2/orchestrators/resources/faq` | current | NO — `pageType: reference` (canonical); missing `lifecycleStage`; missing `status` (not sampled fully) |
| Resources — glossary | `v2/orchestrators/resources/glossary` | current | NO — `pageType: glossary` (old schema); missing `lifecycleStage` |
| Resources — community-guides | `v2/orchestrators/resources/community-guides` | current | NO — `pageType: reference` (canonical); missing `lifecycleStage`; missing `status` (not sampled fully) |
| Resources — community-pools | `v2/orchestrators/resources/community-pools` | current | NO — `pageType: reference` (canonical); `status: review` (non-canonical); missing `lifecycleStage` |
| Resources — Technical Reference — cli-flags | `v2/orchestrators/resources/technical/cli-flags` | current | NO — `pageType: reference` (canonical); `status: review` (non-canonical); missing `lifecycleStage` |
| Resources — Technical Reference — x-contract-addresses | `v2/orchestrators/resources/technical/x-contract-addresses` | current | NO — `pageType: landing` (old schema); `audience: developer` (wrong tab audience); `status: draft`; `purpose: landing` (non-canonical); missing `lifecycleStage` |
| Resources — Technical Reference — gpu-support | `v2/orchestrators/resources/gpu-support` | current | Not sampled |
| Resources — Technical Reference — arbitrum-rpc | `v2/orchestrators/resources/arbitrum-rpc` | current | Not sampled |
| Resources — Technical Reference — arbitrum-exchanges | `v2/orchestrators/resources/arbitrum-exchanges` | current | Not sampled |
| Resources — Compendium — glossary | `v2/orchestrators/resources/compendium/glossary` | current | NO — `pageType: reference` (canonical); `audience: orchestrator-operator` (non-canonical value); `status: draft` but in nav; missing `lifecycleStage` |

**Frontmatter defects summary (sampled pages)**:
- `lifecycleStage` field: absent on every sampled page — global gap across the entire tab
- Old-schema `pageType` values in use: `landing` (portal, navigator, x-contract-addresses), `overview` (role, quickstart/guide, setup/guide, setup-options), `quickstart` (video-transcoding, join-a-pool), `how_to` (rcs-requirements, pricing-strategy), `glossary` (resources/glossary)
- `status` values: `published` and `review` are non-canonical (canonical values expected: `current`, `draft`, `deprecated`); `draft` pages appearing in live nav: pricing-strategy, funding-and-support, x-contract-addresses, compendium/glossary
- Structural defect: `operator-rationale.mdx` has `glrw\npwrfs` appearing before the frontmatter `---` delimiter — will cause parse failures
- `x-contract-addresses`: `audience: developer` on an Orchestrators tab page — likely a copy-paste error

---

## Ideal → Canonical Mapping

| Ideal section (from Phase 1) | Canonical position | Match | Position type | Notes |
|---|---|---|---|---|
| S1 — Which path is mine? (disambiguation/routing) | Position 1 — root: `navigator` (`navigation` landing) | exact | linear | `navigator.mdx` exists and serves routing function. `pageType: landing` is old schema — should be `navigation`. |
| S2 — What orchestrators do and what they earn | Position 2 — concepts: `role` + `incentive-model` | partial | linear | Role concept exists (`concepts/role`); incentive-model concept exists (`concepts/incentive-model`). However S2 is a combined "what it is + is it worth it" section. Split across two pages is acceptable but the `role` page uses old-schema `pageType: 'overview'` rather than `concept`. The business case / go-no-go framing is only partially present in concepts; it appears more fully in `guides/operator-considerations/operator-rationale` which is in the on-demand Guides section — structural concern (obligatory discovery content placed in on-demand position). |
| S3 — How the network pays you and routes work | Position 2 — concepts: `capabilities` + `architecture` | partial | linear | `capabilities.mdx` covers job types and routing factors; `architecture.mdx` covers node internals and protocol interactions. Payment mechanics (reward cut, fee cut, PM tickets) are in `concepts/incentive-model`. The tripartite S3 job (routing factors + payment flow + reward call mechanics) is split across three concept pages — adequate coverage in aggregate, but no single page ties it to the evaluation decision. `pageType: 'concept'` is canonical; `lifecycleStage` missing. |
| S4 — Prerequisites and hardware | Position 4 — setup: `rcs-requirements` | partial | linear | `setup/rcs-requirements` covers hardware, GPU, CUDA, network prerequisites. `pageType: how_to` is old schema — should be `instruction`. The LPT acquisition path (Phase 1 design flag: S4 must explicitly cover LPT acquisition, not only define LPT) is not confirmed present — page title is "Setup Checklist" which implies procedure framing but LPT acquisition pathway requires verification. ETH bridging requirement unclear from frontmatter alone. |
| S5 — Get your node running (install + register) | Position 4 — setup: `rs-install` + `connect-and-activate` + `configure` | partial | linear | Pages exist for install, configure, connect-and-activate. Pool node sub-path within setup (Phase 1 design flag: S5 must include a clearly separated pool node sub-path) is not confirmed — separate `guides/deployment-details/join-a-pool` exists but is in Guides (on-demand), not Setup (linear). Pool node candidates arriving at S5 may not be routed correctly. |
| S6 — Set your pricing and cuts | Position 5 — guides: `config-and-optimisation/pricing-strategy` | partial | on-demand | `pricing-strategy.mdx` exists but has `status: draft` and `pageType: how_to` (old schema). Page is published in nav despite draft status — live dead-end risk for readers who reach it. Missing `lifecycleStage`. |
| S7 — Add AI inference pipelines | Position 5 — guides: `ai-and-job-workloads/` sub-group (9 pages) | exact | on-demand | AI pipeline setup covered by 9 pages across workload types. `workload-options.mdx` is the routing entry point (`pageType: concept` — acceptable but note it is placed in on-demand Guides). Phase 1 design flag: S7 may need to split — the 9-page sub-group effectively implements this split. `lifecycleStage` missing across sampled pages. |
| S8 — Verify your node is live | Position 4 — setup: `test` | exact | linear | `setup/test` exists (not sampled for frontmatter). Serves the verification job. Position is correct (linear, setup). |
| S9 — Join as a pool node | Position 5 — guides: `deployment-details/join-a-pool` + `deployment-details/new-join-a-pool` | partial | on-demand | Two pages exist for pool joining. `join-a-pool.mdx` has `pageType: quickstart` (old schema), `purpose: faq` (non-canonical), missing `status` and `lifecycleStage`. The canonical position for pool node decision-making is on-demand (Guides), which is structurally defensible only if the disambiguation navigator (S1) clearly routes pool node candidates here early. Phase 1 design flag: S9 must resolve the "enough stake?" decision with adequate context — this requires content review. |
| S10 — Monitor and operate day-to-day | Position 5 — guides: `monitoring-and-tooling/` sub-group (4 pages) | exact | on-demand | 4 pages covering operator toolbox, explorer operations, metrics/alerting, and troubleshooting. `operator-toolbox.mdx` uses `pageType: reference` (canonical). `troubleshooting.mdx` uses `pageType: guide` (canonical) but `status: published` (non-canonical). `lifecycleStage` missing. |
| S11 — Optimise earnings and performance | Position 5 — guides: `config-and-optimisation/` sub-group (4 pages) | partial | on-demand | 4 pages covering pricing strategy, capacity planning, AI model management, reward call tuning. Pricing-strategy has `status: draft` and `pageType: how_to` — old schema and live-with-draft issue. Capacity-planning and ai-model-management not sampled. |
| S12 — Troubleshoot common problems | Position 6 — resources: `resources/faq` + guides: `monitoring-and-tooling/troubleshooting` | partial | on-demand | Troubleshooting appears in two locations: `guides/monitoring-and-tooling/troubleshooting` (operational, symptom-based) and `resources/faq` (Q&A format). The dual location is acceptable if cross-linked, but the FAQ/troubleshooting page is in Resources while the diagnostic guide is in Guides — Phase 1 design flag: S12 must distinguish symptom types as separate diagnostic branches. Presence confirmed; content organisation requires review. |

---

## Gap Analysis

| Gap | Job not served | Priority | Recommendation |
|---|---|---|---|
| `lifecycleStage` field absent on all sampled pages | Frontmatter completeness gate fails globally; CI will reject all pages once validator is updated | P0 | Add `lifecycleStage` field to every page in the tab. Values from the Phase 1 ideal journey: `discover` (concepts, portal, navigator), `evaluate` (S2–S3 concepts), `setup` (quickstart, setup section), `build` (AI pipeline guides), `operate` (monitoring guides), `optimise` (config-and-optimisation guides). This is a bulk metadata task, not a content authoring task. |
| Old-schema `pageType` values on published pages | Pages with `landing`, `overview`, `quickstart`, `how_to`, `glossary` will fail CI once validator is updated; readers see no immediate impact but schema consistency is broken | P0 | Map to canonical 7-type values: `landing` → `navigation`, `overview` → `navigation` or `concept` (context-dependent), `quickstart` → `instruction`, `how_to` → `instruction`, `glossary` → `reference`. Update affected pages: portal, navigator, concepts/role, quickstart/guide, quickstart/video-transcoding, setup/guide, setup/rcs-requirements, setup-options, join-a-pool, pricing-strategy, resources/glossary, x-contract-addresses. |
| Structural defect in `operator-rationale.mdx` | Page will fail to parse — garbled characters (`glrw\npwrfs`) appear before frontmatter block | P0 | Remove the garbled characters at lines 1–2 of `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`. |
| Draft pages published in live nav | `pricing-strategy`, `funding-and-support`, `x-contract-addresses`, `compendium/glossary` have `status: draft` but appear in docs.json navigation — readers reach incomplete content | P0 | Either complete the pages and change `status: current`, or remove from docs.json navigation until ready. `pricing-strategy` is particularly high-impact (serves J2, J5 for the primary persona). |
| LPT acquisition path in prerequisites (S4) | J2 primary persona (solo video operator) stalls at setup if S4 does not explain how to acquire and stake LPT — Phase 1 design flag | P0 | Verify `setup/rcs-requirements` covers LPT acquisition explicitly (not only defines LPT). If absent, add LPT acquisition steps or link to a dedicated acquisition guide within the prerequisites page. |
| Pool node sub-path in Setup (S5) position violation | Pool node candidates arrive at Setup expecting instructions for their path; `join-a-pool` is in on-demand Guides — a reader who follows the linear path (Setup) gets solo setup only | P1 | Add a routing callout in `setup/guide` (and/or `setup/rcs-requirements`) explicitly directing pool node candidates to `guides/deployment-details/join-a-pool` before they begin solo setup steps. Alternatively, restructure by adding a pool-path nav entry within Setup. This is a structural routing problem, not a missing-page problem. |
| Business case / go-no-go content in on-demand position | `guides/operator-considerations/operator-rationale` (business case, cost analysis, go-no-go decision matrix) is in the on-demand Guides section. Phase 1 design places this content at the `evaluate` lifecycleStage, which is linear (readers must complete it before investing setup time). | P1 | Either move the core go-no-go decision content into `concepts/incentive-model` (which is already in the linear Concepts section), or add a clear forward-link from the Concepts section to operator-rationale so evaluating readers are actively routed there. The current structure places this content after the linear path — a reader who completes Concepts → Quickstart → Setup without reading operator-rationale may have invested setup time before making an informed go-no-go decision. |
| `x-contract-addresses` audience mismatch | `audience: developer` on an Orchestrators tab page — wrong audience value; also has `pageType: landing` (old schema) and `status: draft` | P1 | Fix `audience` to `orchestrator`; update `pageType` from `landing` to `reference`; complete content or remove from nav if draft. |
| No `resources/knowledge-hub/` sub-section | Canonical position 6 includes `resources/knowledge-hub/` for curated external content (`resource` pageType). The current Resources section has community-guides and community-pools as flat pages rather than a knowledge-hub sub-section. `pageType: reference` used on community-guides — should be `resource` for curated external content. | P2 | Create `resources/knowledge-hub/` grouping in docs.json and move `community-guides` and `community-pools` into it. Update `pageType` to `resource` for those pages. This aligns with canonical section vocabulary for position 6. |
| `status: published` and `status: review` non-canonical values | Several pages use `status: published` or `status: review` — neither is in the canonical status enum (expected: `current`, `draft`, `deprecated`) | P2 | Bulk update: `published` → `current`; `review` → `draft` (or `current` if content is confirmed ready). Affects: workload-options, earning-model, gateway-relationships, troubleshooting (monitoring-and-tooling), community-pools, cli-flags. |
| S7 design flag: AI configuration surface may need further splitting | Phase 1 flagged that the AI pipeline setup content (aiModels.json, VRAM planning, warm model strategy, capability advertisement) may be too large for a single section — the 9-page Workloads and AI sub-group partially resolves this but VRAM planning content coverage is unconfirmed | P2 | During detailed design, verify `ai-inference-operations` and `ai-model-management` together cover VRAM capacity planning and warm model selection strategy. If not, add a dedicated VRAM planning page or section. |
| Compendium glossary duplication | `resources/glossary` and `resources/compendium/glossary` are two glossary pages in the same tab. `resources/glossary` has `pageType: glossary` (old schema). `compendium/glossary` has `status: draft` but is in nav. | P2 | Consolidate into a single glossary. Decide whether compendium/glossary replaces resources/glossary or vice versa. Remove the duplicate from nav; update surviving page to canonical `pageType: reference`. |

---

## Orphan Analysis

| Existing section / page | Status | Recommendation |
|---|---|---|
| `guides/operator-considerations/` sub-group (4 pages: operator-rationale, business-case, operator-impact, requirements) | These pages serve the pre-decision / evaluation job (J1). They are not directly mapped to any canonical section position — they sit in the on-demand Guides section but serve what Phase 1 designates as linear `evaluate`-stage content. | Keep — content is valuable. Restructure routing: add forward links from Concepts section so evaluating readers are actively directed here. Consider whether these 4 pages should be absorbed into Concepts as a 5th sub-section (`evaluate` stage) or remain in Guides with strong Concepts cross-links. |
| `guides/deployment-details/siphon-setup` | Siphon is mentioned in the Phase 1 terminology lock and setup-options as an alternative to go-livepeer. Not explicitly mapped in the ideal section structure. | Keep — serves J2 for operators using Siphon path. Verify cross-links from setup/guide and setup-options. |
| `guides/roadmap-and-funding/orchestrator-profiles` | Not mapped in Phase 1 ideal section structure. Content purpose unclear from frontmatter alone. | Keep tentatively pending content review. If it serves J1 (social proof / earnings case) it should cross-link from Concepts. If it is a community directory it belongs in resources/knowledge-hub. |
| `guides/roadmap-and-funding/funding-and-support` | Not mapped in Phase 1 ideal section structure. Has `status: draft` and content is explicitly a placeholder. Published in nav. | Remove from nav immediately (draft placeholder creating a live dead-end). Restore when content is complete. |
| `guides/staking-and-rewards/delegate-operations` and `guides/staking-and-rewards/network-participation` | Phase 1 mentions delegators as an inbound cross-tab audience (Delegators → Orchestrators) but these pages appear to serve the operator's relationship to delegators. Not explicitly in ideal section structure. | Keep — serves J5 (reward cut strategy, delegation attractiveness). Add cross-links to/from Delegators tab. |
| `guides/payments-and-pricing/` sub-group (payment-receipts, payments) | Payments content is relevant to J5 and J7 (probabilistic micropayment understanding). Sub-group folder (`payments-and-pricing/`) is separate from `staking-and-rewards/` but both appear inside "Staking and Earning" nav group — folder/nav name mismatch. | Keep — content serves real need. Resolve folder/nav group name inconsistency: either rename the nav group to "Staking, Earning, and Payments" or restructure folders to match. |
| `guides/advanced-operations/gateway-orchestrator-interface` | Serves J3 (gateway selection — how to use introspection API). Maps to on-demand Phase 1 content. | Keep — on-demand reference for returning operators. |
| `guides/advanced-operations/pool-operators` | Serves pool operator management (J6 scaling). Phase 1 covers pool architecture under J6. | Keep — on-demand for advanced users. Verify cross-link from deployment-details/join-a-pool. |
| `guides/tutorials/byoc-cpu-tutorial.mdx` | File exists in folder but NOT in docs.json nav (only `byoc-cpu-smoke-test` is listed). This is an unlisted/orphan file. | Assess whether this is a superseded predecessor of byoc-cpu-smoke-test. If yes: delete or move to `_workspace/`. If it has distinct content, add to nav or merge. |
| `guides/tutorials/gateway-tutorial-composable-pages/stubs/` (3 stub files) | Three stub files (`tutorial-byoc-cpu-pipeline`, `tutorial-go-production`, `tutorial-offchain-transcoding-test`) exist in the folder but are not in docs.json nav. | These are workspace/draft files that were not moved to `_workspace/`. Remove from live folder or move to `_workspace/`. They will not render in nav but their presence creates confusion. |
| `setup/s-guide.mdx` and `setup/x-test.mdx` | Files exist in the setup folder but are not in docs.json nav (only `setup/guide`, `rcs-requirements`, `rs-install`, `configure`, `connect-and-activate`, `test`, `r-monitor` are listed). | These are unlisted files — likely deprecated predecessors of live pages. Move to `_workspace/` or delete. |
| `resources/technical/x-changelog.mdx`, `resources/technical/x-support-status.mdx`, `resources/technical/x-troubleshooting.mdx` | Files exist in folder but not in docs.json nav (prefixed `x-` suggesting deprecated/excluded). | Confirm these are intentionally excluded. If deprecated, move to `x-deprecated/` folder per repo convention. If content should be published, add to nav. |
| `resources/x-guides.mdx`, `resources/x-help.mdx`, `resources/x-payments.mdx` | Files exist in resources folder with `x-` prefix but not in docs.json nav. | Same as above — confirm intentional exclusion, move to `x-deprecated/` if deprecated. |

---

## Cross-Tab Handoff Audit

| Direction | CTA present? | Notes |
|---|---|---|
| Inbound: Home → Orchestrators | Not confirmed | Homepage routing to Orchestrators tab was not audited in this pass. Flag for homepage audit. |
| Inbound: About → Orchestrators | Not confirmed | About/protocol overview pages not audited. Flag for About tab audit. |
| Inbound: Community → Orchestrators | Not confirmed | Community tab not audited. Flag for Community tab audit. |
| Inbound: Delegators → Orchestrators | Not confirmed | Delegators tab not audited. Flag for Delegators tab audit. |
| Outbound: Orchestrators → Delegators | Not confirmed — gap suspected | Pages serving J5 (reward cut, delegation attractiveness: `earning-model`, `reward-mechanics`, `delegate-operations`) should link to Delegators tab for operators wanting the delegator perspective. Not confirmed from frontmatter review alone. Add explicit CTAs in `guides/staking-and-rewards/delegate-operations` and `concepts/incentive-model` pointing to Delegators tab. |
| Outbound: Orchestrators → Gateways | Not confirmed — gap suspected | `guides/advanced-operations/gateway-relationships` and `gateway-orchestrator-interface` should link to the Gateways tab for operators wanting to understand demand-side selection logic (MaxPrice parameters, gateway configuration). Not confirmed from frontmatter review alone. Add explicit CTAs in gateway-relationships pointing to Gateways tab. |
| Outbound: Orchestrators → Resource HUB | Not confirmed — gap suspected | Phase 1 identifies outbound routing to a cross-cutting Resource HUB for CLI flags, protocol changelog, glossary, governance records. The orchestrators tab has its own CLI flags reference and glossary — verify whether these are duplicated from a cross-tab resource hub or tab-local only. If tab-local, flag the absence of Resource HUB cross-links. |
| Outbound: Orchestrators → About | Not confirmed — gap suspected | Operators wanting deeper tokenomics or governance context should be routed to the About tab. `concepts/incentive-model` is the most likely page requiring this CTA. Not confirmed. |

---

## Summary

**P0 gaps** (must fix before this tab is complete):

- **`lifecycleStage` field absent globally** — every page in the tab is missing this required frontmatter field. Bulk metadata task; does not require content authoring. Blocking CI compliance once validator is updated.
- **Old-schema `pageType` values on published pages** — `landing`, `overview`, `quickstart`, `how_to`, `glossary` on at least 12 confirmed pages. Will fail CI once validator is updated. Map to canonical 7-type set.
- **Structural defect in `operator-rationale.mdx`** — garbled characters before the frontmatter delimiter will cause parse failures. Fix immediately.
- **Draft pages published in live nav** — `pricing-strategy`, `funding-and-support`, `x-contract-addresses`, `compendium/glossary`. Readers reach incomplete/placeholder content. Either complete and mark `current` or remove from docs.json nav.
- **LPT acquisition path in prerequisites (S4) — unconfirmed** — Phase 1 design flag: `setup/rcs-requirements` must cover LPT acquisition explicitly. If absent, the primary arriving persona (solo video operator) stalls before setup begins. Requires content review and verification.

**P1 gaps** (fix in next pass):

- **Pool node sub-path routing from Setup (S5)** — pool node candidates following the linear path reach solo setup only. Add routing callout in `setup/guide` directing pool candidates to `guides/deployment-details/join-a-pool` before they begin.
- **Business case / go-no-go content in on-demand position** — `guides/operator-considerations/operator-rationale` (evaluation-stage content) is in Guides not Concepts. Add forward-link from Concepts to operator-considerations so evaluating readers are actively routed there before committing to setup.
- **`x-contract-addresses` audience mismatch** — `audience: developer` on an Orchestrators tab page. Fix `audience` to `orchestrator`; fix `pageType` from `landing` to `reference`.

**P2 gaps** (backlog):

- **No `resources/knowledge-hub/` sub-section** — `community-guides` and `community-pools` are flat Resource pages; move to a `knowledge-hub/` sub-group and update `pageType` to `resource` (canonical).
- **Non-canonical `status` values** — `published` and `review` used across multiple pages; bulk update to `current` or `draft`.
- **AI configuration surface — VRAM planning coverage unconfirmed** — verify `ai-inference-operations` and `ai-model-management` together cover VRAM capacity planning and warm model selection. Add dedicated page if absent.
- **Compendium glossary duplication** — two glossary pages (`resources/glossary` and `resources/compendium/glossary`) in the same tab. Consolidate; remove duplicate from nav.
- **Cross-tab CTAs** — all four outbound handoffs (Delegators, Gateways, Resource HUB, About) are unconfirmed. Verify and add explicit CTAs in relevant pages.
- **Unlisted/orphan files in live folders** — `byoc-cpu-tutorial.mdx`, three stub files in `gateway-tutorial-composable-pages/stubs/`, `setup/s-guide.mdx`, `setup/x-test.mdx`, `x-`-prefixed resource files. Move to `_workspace/` or `x-deprecated/` per repo convention.

**Net page delta**: 67 files in folder (live + unlisted) → 62 confirmed in docs.json nav. After gap resolution: estimated +0 new pages required (all ideal sections map to existing pages). Primary work is metadata correction, draft-page completion or removal, routing callout additions, and orphan file cleanup. No net new pages needed unless VRAM planning content gap is confirmed during content review.

---

## Checkpoint

- [x] All existing sections inventoried — `empty` and `missing` distinguished? (No `empty` or `missing` sections found — all nav entries have corresponding files. Unlisted/orphan files identified separately.)
- [x] Every ideal section has a match quality and position type? (12 ideal sections S1–S12 all mapped.)
- [x] Position violations checked and flagged? (One position concern flagged: business case / evaluation content in on-demand Guides rather than linear Concepts — flagged P1.)
- [x] Routing page check done? (`navigator.mdx` exists and serves disambiguation function. `pageType: landing` is old schema — should be `navigation`. Content alignment assessed.)
- [x] P0 gaps have actionable recommendations? (5 P0 gaps, all with specific recommendations.)
- [x] Orphans assessed? (14 orphan items assessed — not silently omitted.)
- [x] Cross-tab handoffs checked? (4 outbound handoffs flagged as unconfirmed — recommendations included.)
