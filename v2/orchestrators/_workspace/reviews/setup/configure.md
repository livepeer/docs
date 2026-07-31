# Review: Configuring Your Orchestrator
**File:** v2/orchestrators/setup/configure.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Configuring Your Orchestrator | Pass |
| sidebarTitle | Yes | Configure | Pass |
| description | Yes | "Set the go-livepeer flags needed to run..." (109 chars) | Pass |
| pageType | Yes | `how_to` | **Fail** - not in allowed set (should be `instruction` or `guide`) |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - case-sensitive YAML |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |
| status | Yes | current | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Essential Flags | 4 | 4 | 5 | 5 | 5 | 23 |
| Full Startup Command | 5 | 5 | 5 | 5 | 4 | 24 |
| Adding AI Inference | 5 | 5 | 5 | 5 | 4 | 24 |
| Variants | 3 | 3 | 5 | 5 | 5 | 21 |
| Next Steps | 4 | 3 | 5 | 5 | 5 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. `Keywords` capitalised. pageType `how_to` not in allowed set |
| 2. VOICE | 2.1-2.22 | **FAIL** | Line 49: orphaned sentence fragment "the go-livepeer flags needed to run as an Orchestrator. By the end, a working startup command is ready and each flag is understood." appears to be a leftover from description text pasted into body. TODO/REVIEW comments at lines 31-41 are visible in source |
| 3. HEADINGS | 3.1-3.10 | PASS | All >= 21/25. "Next Steps" acceptable |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Orphaned text fragment at line 49-50. TODO block at lines 31-41 indicates unfinished review items. Multiple REVIEW flags for SME confirmation |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | No Related Pages section. "Next Steps" cards use old slugs. CustomDivider with negative margins throughout (cosmetic concern). Orphaned body text before first section |
| 6. VERACITY | 6.1-6.12 | **FAIL** | REVIEW flags: testnet network flag name unconfirmed, ethPassword flag unconfirmed, native config file flag unconfirmed. "typical starting price is 500-2,000 wei per pixel" needs current sourcing |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2833 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `/v2/orchestrators/setup/rs-install` old slug. `/v2/orchestrators/setup/sc-connect` old slug (used twice). `/v2/orchestrators/setup/activate` unverified. `/v2/orchestrators/resources/technical/cli-flags` unverified. `/v2/orchestrators/guides/deployment-details/requirements` unverified. `/v2/orchestrators/guides/deployment-details/setup-options` unverified |
| 9. PROCESS | 9.1-9.6 | **FAIL** | Multiple TODO and REVIEW flags. No sign-off. Needs SME review (Rick referenced in comments) |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Testnet configuration path incomplete. ethPassword/keystore passphrase handling incomplete. Config file approach uncertain |

## Verdict: NEEDS WORK
