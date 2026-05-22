# Section Summary: orchestrators/guides
**Pages reviewed:** 47
**Pass:** 0 | **Needs Work:** 43 | **Rewrite Required:** 4

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| advanced-operations/dep-guide | REWRITE REQUIRED | 1, 7, 8 | Orphan (not in nav), all card links broken, missing FM fields |
| advanced-operations/gateway-orchestrator-interface | NEEDS WORK | 1 | 4 missing FM fields (pageType enum, purpose, complexity, lifecycleStage), 2 FACT CHECKs |
| advanced-operations/gateway-relationships | NEEDS WORK | 1 | 2 missing FM fields, 1 FACT CHECK |
| advanced-operations/pool-operators | NEEDS WORK | 1 | 2 missing FM fields |
| advanced-operations/scale-operations | NEEDS WORK | 1, 5 | 2 missing FM fields, duplicate Related Pages card |
| ai-and-job-workloads/ai-inference-operations | NEEDS WORK | 1, 5 | 2 missing FM fields, duplicate "Batch AI Setup" card |
| ai-and-job-workloads/audio-and-vision-pipelines | NEEDS WORK | 1 | 4 missing FM fields, 4 REVIEW flags |
| ai-and-job-workloads/diffusion-pipeline-setup | NEEDS WORK | 1 | 2 missing FM fields |
| ai-and-job-workloads/llm-pipeline-setup | NEEDS WORK | 1 | 4 missing FM fields |
| ai-and-job-workloads/model-demand-reference | NEEDS WORK | 1 | 2 missing FM fields |
| ai-and-job-workloads/model-hosting | NEEDS WORK | 1 | 4 missing FM fields |
| ai-and-job-workloads/realtime-ai-setup | NEEDS WORK | 1 | 2 missing FM fields |
| ai-and-job-workloads/video-transcoding-operations | NEEDS WORK | 1 | 2 missing FM fields |
| ai-and-job-workloads/workload-options | NEEDS WORK | 1 | 2 missing FM fields |
| config-and-optimisation/ai-model-management | NEEDS WORK | 1 | 4 missing FM fields, 1 FACT CHECK |
| config-and-optimisation/capacity-planning | NEEDS WORK | 1 | 4 missing FM fields |
| config-and-optimisation/pricing-strategy | NEEDS WORK | 1 | 4 missing FM fields, 2 FACT CHECKs |
| config-and-optimisation/reward-call-tuning | NEEDS WORK | 1 | 4 missing FM fields, 1 FACT CHECK |
| deployment-details/dual-mode-configuration | NEEDS WORK | 1, 6 | 3 invalid/missing FM fields, 4 REVIEW items |
| deployment-details/join-a-pool | REWRITE REQUIRED | 1, 4 | 6+ FM violations, duplicate of new-join-a-pool, non-standard components |
| deployment-details/new-join-a-pool | NEEDS WORK | 1, 3 | 2 missing FM fields, heading case, duplicate of join-a-pool |
| deployment-details/orchestrator-transcoder-setup | NEEDS WORK | 1, 8 | 2 missing FM fields, broken link to run-a-pool |
| deployment-details/setup-options | NEEDS WORK | 1 | 4 invalid/missing FM fields |
| deployment-details/siphon-setup | NEEDS WORK | 1 | 2 missing FM fields |
| monitoring-and-tooling/explorer-operations | NEEDS WORK | 1 | 2 missing FM fields, 1 FACT CHECK |
| monitoring-and-tooling/metrics-and-alerting | NEEDS WORK | 1 | 2 missing FM fields |
| monitoring-and-tooling/operator-toolbox | NEEDS WORK | 1 | 2 missing FM fields, 1 FACT CHECK |
| monitoring-and-tooling/troubleshooting | NEEDS WORK | 1 | 2 missing FM fields |
| operator-considerations/business-case | NEEDS WORK | 1, 8 | 2 missing FM fields, broken pricing-strategy link |
| operator-considerations/operator-impact | NEEDS WORK | 1, 3 | 2 missing FM fields, heading case |
| operator-considerations/operator-rationale | NEEDS WORK | 1 | 2 missing FM fields |
| operator-considerations/requirements | NEEDS WORK | 1, 3 | 2 missing FM fields, heading case |
| payments-and-pricing/payment-receipts | NEEDS WORK | 1 | 3 missing FM fields |
| payments-and-pricing/payments | NEEDS WORK | 1 | 2 missing FM fields |
| roadmap-and-funding/funding-and-support | REWRITE REQUIRED | 4, 10 | Empty stub in nav, no content |
| roadmap-and-funding/orchestrator-profiles | REWRITE REQUIRED | 4, 10 | Empty stub in nav, no content |
| staking-and-rewards/delegate-operations | NEEDS WORK | 1 | 2 missing FM fields |
| staking-and-rewards/earning-model | NEEDS WORK | 1 | 2 missing FM fields |
| staking-and-rewards/network-participation | NEEDS WORK | 1 | 2 missing FM fields |
| staking-and-rewards/reward-mechanics | NEEDS WORK | 1 | 2 missing FM fields |
| tutorials/add-ai-to-video-node | NEEDS WORK | 1 | 3 missing FM fields |
| tutorials/ai-earning-quickstart | NEEDS WORK | 1 | 3 missing FM fields |
| tutorials/byoc-cpu-smoke-test | NEEDS WORK | 1 | 3 missing FM fields |
| tutorials/byoc-cpu-tutorial | REWRITE REQUIRED | 1, 7 | 9 FM failures, not in orchestrators nav, over-limit description, self-referential voice |
| tutorials/full-ai-pipeline-tutorial | NEEDS WORK | 1 | 3 missing FM fields |
| tutorials/realtime-ai-tutorial | NEEDS WORK | 1 | 3 missing FM fields |
| tutorials/zero-to-first-reward | NEEDS WORK | 1 | 3 missing FM fields |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| 1: Frontmatter | 47/47 (100%) | `complexity` and `lifecycleStage` missing on every page. 14 pages also missing `purpose`. 11 pages use `how_to` or `overview` or `quickstart` as pageType (not in allowed enum). |
| 2: Voice | 2/47 (4%) | Minor hedging in gateway-relationships; mixed UK/US in byoc-cpu-tutorial |
| 3: Headings | 5/47 (11%) | Title case inconsistency (operator-considerations pages, deployment-details) |
| 4: Structure | 4/47 (9%) | 2 empty stubs in nav, 1 orphan, 1 duplicate pair (join-a-pool) |
| 5: Layout | 2/47 (4%) | Duplicate CTA cards (scale-operations, ai-inference-operations) |
| 6: Veracity | 10/47 (21%) | FACT CHECK / REVIEW comments unresolved across 10 pages |
| 7: Nav | 2/47 (4%) | dep-guide orphan, byoc-cpu-tutorial not in v2 orchestrators nav |
| 8: Links | 3/47 (6%) | dep-guide broken links, O-T setup broken run-a-pool link, business-case pricing-strategy path |
| 9: Process | 0/47 (0%) | No issues detected |
| 10: Completeness | 2/47 (4%) | 2 empty stubs (funding-and-support, orchestrator-profiles) |

## Top 5 remediation priorities

1. **Add `complexity` and `lifecycleStage` to all 47 pages.** This is a bulk operation — every page fails on these two fields. Can be scripted.

2. **Add `purpose` to 14 pages missing it.** All tutorial pages (7) plus how_to pages (audio-and-vision-pipelines, llm-pipeline-setup, model-hosting, ai-model-management, capacity-planning, pricing-strategy, reward-call-tuning) are missing purpose.

3. **Fix `pageType` enum violations on 11 pages.** Pages using `how_to` should use `guide` or `instruction`. Pages using `overview` should use `navigation`. Pages using `quickstart` should use `tutorial`.

4. **Resolve the join-a-pool duplicate.** Two versions exist (join-a-pool.mdx and new-join-a-pool.mdx), both in nav. Decide which to keep, remove the other.

5. **Remove or populate the 2 empty stubs** (funding-and-support, orchestrator-profiles) from docs.json nav, or write content before shipping.

## Secondary priorities

6. Resolve 10+ FACT CHECK / REVIEW comments across pages before publishing.
7. Fix 3 broken internal links (dep-guide, O-T setup, business-case).
8. Standardise heading case (sentence case throughout).
9. Remove duplicate CTA cards (scale-operations, ai-inference-operations).
10. Delete dep-guide.mdx (orphan, broken, superseded by section structure).
