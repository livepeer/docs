# Orchestrators Guides Research Master Packet

- Worktree: `Docs-v2-dev`
- Branch: `docs-v2-dev`
- Source nav file: `tools/config/scoped-navigation/docs-gate-work.json`
- Scope: live `Orchestrators -> Guides` pages only from `docs-gate-work.json`; deprecated and non-live pages are excluded.
- Output root: `tasks/reports/orchestrator-guides-review/research-guides-review`

## Tranche Execution Order

1. Operator Considerations (4 page(s)) -> `01-operator-considerations`
2. Deployment Details (6 page(s)) -> `02-deployment-details`
3. Workloads and AI (9 page(s)) -> `03-workloads-and-ai`
4. Staking and Earning (6 page(s)) -> `04-staking-and-earning`
5. Config and Optimisation (4 page(s)) -> `05-config-and-optimisation`
6. Monitoring and Tools (4 page(s)) -> `06-monitoring-and-tools`
7. Advanced Operations (4 page(s)) -> `07-advanced-operations`
8. Roadmap and Funding (2 page(s)) -> `08-roadmap-and-funding`
9. Tutorials (6 page(s)) -> `09-tutorials`

## Aggregate Totals

- Verified claims: 15
- Conflicted claims: 50
- Time-sensitive claims: 36
- Unverified / historical claims: 0
- Contradiction groups: 50
- Propagation queue items: 527
- Evidence sources checked: 176

## Per-Tranche Scoreboard

### 1. Operator Considerations

- Folder: `01-operator-considerations`
- Pages: 4
- Run status: pass
- Verified claims: 2
- Conflicted claims: 7
- Time-sensitive claims: 6
- Contradiction groups: 7
- Propagation queue items: 71
- Evidence sources checked: 27

### 2. Deployment Details

- Folder: `02-deployment-details`
- Pages: 6
- Run status: pass
- Verified claims: 3
- Conflicted claims: 7
- Time-sensitive claims: 5
- Contradiction groups: 7
- Propagation queue items: 75
- Evidence sources checked: 27

### 3. Workloads and AI

- Folder: `03-workloads-and-ai`
- Pages: 9
- Run status: pass
- Verified claims: 3
- Conflicted claims: 6
- Time-sensitive claims: 5
- Contradiction groups: 6
- Propagation queue items: 73
- Evidence sources checked: 25

### 4. Staking and Earning

- Folder: `04-staking-and-earning`
- Pages: 6
- Run status: pass
- Verified claims: 1
- Conflicted claims: 5
- Time-sensitive claims: 4
- Contradiction groups: 5
- Propagation queue items: 55
- Evidence sources checked: 17

### 5. Config and Optimisation

- Folder: `05-config-and-optimisation`
- Pages: 4
- Run status: pass
- Verified claims: 1
- Conflicted claims: 5
- Time-sensitive claims: 4
- Contradiction groups: 5
- Propagation queue items: 55
- Evidence sources checked: 17

### 6. Monitoring and Tools

- Folder: `06-monitoring-and-tools`
- Pages: 4
- Run status: pass
- Verified claims: 1
- Conflicted claims: 7
- Time-sensitive claims: 4
- Contradiction groups: 7
- Propagation queue items: 65
- Evidence sources checked: 20

### 7. Advanced Operations

- Folder: `07-advanced-operations`
- Pages: 4
- Run status: pass
- Verified claims: 3
- Conflicted claims: 7
- Time-sensitive claims: 4
- Contradiction groups: 7
- Propagation queue items: 74
- Evidence sources checked: 24

### 8. Roadmap and Funding

- Folder: `08-roadmap-and-funding`
- Pages: 2
- Run status: pass
- Verified claims: 0
- Conflicted claims: 0
- Time-sensitive claims: 0
- Contradiction groups: 0
- Propagation queue items: 0
- Evidence sources checked: 0

### 9. Tutorials

- Folder: `09-tutorials`
- Pages: 6
- Run status: pass
- Verified claims: 1
- Conflicted claims: 6
- Time-sensitive claims: 4
- Contradiction groups: 6
- Propagation queue items: 59
- Evidence sources checked: 19

## Cross-Tranche Findings Rollup

### Repeated Conflicted Claim Families

- ai-routing-mechanics :: orch-ai-routing-capability-based (8)
- hardware-vram-minimums :: orch-batch-ai-vram-threshold (8)
- split-setup-reward-safety :: orch-siphon-reward-isolation (8)
- stake-threshold :: orch-active-set-threshold (8)
- operator-revenue-model :: orch-dual-revenue-model (7)
- setup-prerequisites :: orch-pool-vs-solo-prerequisites (6)
- community-tooling-status :: orch-siphon-github-current (5)

### Repeated Time-Sensitive Claim Families

- consumer-nvenc-session-cap :: orch-consumer-nvenc-session-cap (8)
- reward-profitability :: orch-reward-profitability-threshold (8)
- transcoding-bandwidth-planning :: orch-bandwidth-per-stream-planning (8)
- transcoding-session-cap :: orch-session-limit-default (8)
- commercial-model-warmth :: orch-commercial-model-warmth (3)

### Pages With Highest Propagation Burden

- `v2/orchestrators/guides/deployment-details/setup-options.mdx` (58)
- `v2/orchestrators/guides/operator-considerations/business-case.mdx` (49)
- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` (46)
- `v2/orchestrators/setup/rcs-requirements.mdx` (34)
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` (32)
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` (32)
- `v2/orchestrators/setup/configure.mdx` (32)
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` (25)
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` (21)
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` (17)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` (16)
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` (16)
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` (16)
- `v2/orchestrators/guides/operator-considerations/requirements.mdx` (16)
- `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` (15)

### Repeated Registry/path Drift

- ai-routing-mechanics :: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx (16)
- consumer-nvenc-session-cap :: v2/orchestrators/guides/deployment-details/requirements.mdx (16)
- hardware-vram-minimums :: v2/orchestrators/guides/deployment-details/requirements.mdx (16)
- reward-profitability :: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx (16)
- ai-routing-mechanics :: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx (8)
- consumer-nvenc-session-cap :: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx (8)
- transcoding-bandwidth-planning :: v2/orchestrators/guides/deployment-details/requirements.mdx (8)
- commercial-model-warmth :: v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx (3)
- commercial-model-warmth :: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx (3)

### Follow-up Buckets

#### Content rewrite now

- orch-active-set-threshold :: Advanced Operations (1)
- orch-active-set-threshold :: Config and Optimisation (1)
- orch-active-set-threshold :: Deployment Details (1)
- orch-active-set-threshold :: Monitoring and Tools (1)
- orch-active-set-threshold :: Operator Considerations (1)
- orch-active-set-threshold :: Staking and Earning (1)
- orch-active-set-threshold :: Tutorials (1)
- orch-active-set-threshold :: Workloads and AI (1)
- orch-ai-routing-capability-based :: Advanced Operations (1)
- orch-ai-routing-capability-based :: Config and Optimisation (1)

#### Wording needs downgrading

- orch-bandwidth-per-stream-planning :: Advanced Operations (1)
- orch-bandwidth-per-stream-planning :: Config and Optimisation (1)
- orch-bandwidth-per-stream-planning :: Deployment Details (1)
- orch-bandwidth-per-stream-planning :: Monitoring and Tools (1)
- orch-bandwidth-per-stream-planning :: Operator Considerations (1)
- orch-bandwidth-per-stream-planning :: Staking and Earning (1)
- orch-bandwidth-per-stream-planning :: Tutorials (1)
- orch-bandwidth-per-stream-planning :: Workloads and AI (1)
- orch-business-case-cost-viability :: Operator Considerations (1)
- orch-commercial-model-warmth :: Deployment Details (1)

#### Source verification needed

- orch-ai-routing-capability-based :: Advanced Operations (9)
- orch-ai-routing-capability-based :: Config and Optimisation (9)
- orch-ai-routing-capability-based :: Deployment Details (9)
- orch-ai-routing-capability-based :: Monitoring and Tools (9)
- orch-ai-routing-capability-based :: Operator Considerations (9)
- orch-ai-routing-capability-based :: Staking and Earning (9)
- orch-ai-routing-capability-based :: Tutorials (9)
- orch-ai-routing-capability-based :: Workloads and AI (9)
- orch-consumer-nvenc-session-cap :: Advanced Operations (8)
- orch-consumer-nvenc-session-cap :: Config and Optimisation (8)

#### Registry coverage gap

- v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx :: Advanced Operations (1)
- v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx :: Advanced Operations (1)
- v2/orchestrators/guides/advanced-operations/pool-operators.mdx :: Advanced Operations (1)
- v2/orchestrators/guides/advanced-operations/scale-operations.mdx :: Advanced Operations (1)
- v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx :: Workloads and AI (1)
- v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx :: Config and Optimisation (1)
- v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx :: Config and Optimisation (1)

#### Path/IA mismatch in the research registry

- ai-routing-mechanics :: v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx (16)
- consumer-nvenc-session-cap :: v2/orchestrators/guides/deployment-details/requirements.mdx (16)
- hardware-vram-minimums :: v2/orchestrators/guides/deployment-details/requirements.mdx (16)
- reward-profitability :: v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx (16)
- ai-routing-mechanics :: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx (8)
- consumer-nvenc-session-cap :: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx (8)
- transcoding-bandwidth-planning :: v2/orchestrators/guides/deployment-details/requirements.mdx (8)
- commercial-model-warmth :: v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx (3)
- commercial-model-warmth :: v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx (3)
