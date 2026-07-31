# Review: Connect to Arbitrum
**File:** v2/orchestrators/setup/connect.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Connect to Arbitrum | Pass |
| sidebarTitle | Yes | Connect | Pass |
| description | Yes | "Connect the orchestrator to the Livepeer protocol..." (142 chars) | Pass |
| pageType | Yes | `how_to` | **Fail** - not in allowed set |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | Yes | 8 keywords | Pass |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |
| status | Yes | current | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Troubleshooting connection issues | 5 | 5 | 5 | 5 | 3 | 23 |
| Next step | 4 | 3 | 5 | 5 | 5 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. pageType `how_to` not in allowed set |
| 2. VOICE | 2.1-2.22 | PASS | Excellent technical voice. UK English. No banned words. Clear, direct instructions. Entity-led |
| 3. HEADINGS | 3.1-3.10 | PASS | Both headings >= 22/25. Steps are in StyledSteps (numbered, not headings) |
| 4. STRUCTURE | 4.1-4.16 | PASS | Well-structured 8-step connection process. Prerequisites implicit (ETH + LPT required). Troubleshooting section. CTA card for next step. Over 5KB |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | "Next step" card points to `/v2/orchestrators/setup/test` which is old slug (redirect to `/v2/orchestrators/setup/verify`). No Related Pages section |
| 6. VERACITY | 6.1-6.12 | **FAIL** | 3 TODO flags: livepeer_cli menu label (line 114), bonding menu label (line 155), activation flow text (line 193). 1 TODO on aiServiceRegistry flag (line 217). Recommended 0.05 ETH and gas costs ($0.01-$0.05) need current verification |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2834 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `/v2/orchestrators/setup/test` old slug. `/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` path unverified |
| 9. PROCESS | 9.1-9.6 | **FAIL** | 4 TODO flags outstanding. No sign-off |
| 10. COMPLETENESS | 10.1-10.5 | PASS | Covers full connection journey: RPC, wallet, funding, staking, activation, AI registration, Explorer verification, rewards |

## Verdict: NEEDS WORK
