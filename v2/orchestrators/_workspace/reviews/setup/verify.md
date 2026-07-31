# Review: Verify Your Setup
**File:** v2/orchestrators/setup/verify.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Verify Your Setup | Pass |
| sidebarTitle | Yes | Verify | Pass |
| description | Yes | "Verify the orchestrator is on-chain..." (145 chars) | Pass |
| pageType | Yes | `how_to` | **Fail** - not in allowed set |
| audience | Yes | orchestrator | Pass |
| purpose | Yes | `how_to` | **Fail** - not in allowed purpose set |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | Yes | 7 keywords | Pass |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |
| status | Yes | current | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Quick-reference checklist | 5 | 5 | 5 | 5 | 4 | 24 |
| Common issues | 4 | 3 | 5 | 5 | 5 | 22 |
| Setup complete | 4 | 3 | 5 | 5 | 5 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: complexity, lifecycleStage. pageType and purpose both `how_to` - not in allowed sets |
| 2. VOICE | 2.1-2.22 | PASS | Strong technical voice. UK English. No banned words. Entity-led. Clear verification instructions |
| 3. HEADINGS | 3.1-3.10 | PASS | All >= 22/25. Steps are in StyledSteps (numbered) |
| 4. STRUCTURE | 4.1-4.16 | PASS | Excellent structure. 7 verification steps. Quick-reference checklist. Common issues accordion. CTA cards. Well over 5KB |
| 5. LAYOUT | 5.1-5.16 | PASS | Uses approved components (StyledSteps, StyledTable, AccordionGroup, CardGroup). Has CTA section at end. Good template adherence |
| 6. VERACITY | 6.1-6.12 | **FAIL** | 2 TODO flags: line 175 (confirm orchestrator endpoint for text-to-image) and line 219 (confirm reward call log line). Metric names need verification against current go-livepeer |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2835 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` path unverified. `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` path unverified. `/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` path unverified. `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` unverified. `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` unverified |
| 9. PROCESS | 9.1-9.6 | **FAIL** | 2 TODO flags. No sign-off |
| 10. COMPLETENESS | 10.1-10.5 | PASS | Comprehensive verification across all modes (video, AI, dual). Monitoring confirmation. Reward calling verification. Common issues covered |

## Verdict: NEEDS WORK
