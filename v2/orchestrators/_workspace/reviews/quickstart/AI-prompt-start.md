# Review: Add AI to Your Node
**File:** v2/orchestrators/quickstart/AI-prompt-start.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Add AI to Your Node | Pass |
| sidebarTitle | Yes | AI Prompt: Orchestrator Setup | Pass |
| description | Yes | "An Experimental AI Prompt for setting up..." (172 chars) | **Fail** - exceeds 160 char limit |
| pageType | Yes | guide | Pass |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | Yes | 10 keywords | Pass |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |
| status | Yes | `review` | Note: explicitly marked as in review |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Prerequisites | 5 | 4 | 5 | 5 | 5 | 24 |
| Check your hardware | 5 | 5 | 5 | 5 | 4 | 24 |
| Step 1 - Pull the AI runner image | 5 | 5 | 5 | 5 | 3 | 23 |
| Step 2 - Configure aiModels.json | 5 | 5 | 5 | 5 | 3 | 23 |
| Field reference | 4 | 4 | 5 | 5 | 5 | 23 |
| Step 3 - Update your startup command | 5 | 5 | 5 | 5 | 3 | 23 |
| Step 4 - Verify AI is active | 5 | 5 | 5 | 5 | 4 | 24 |
| Check the logs | 4 | 4 | 5 | 5 | 5 | 23 |
| Test the AI runner directly | 5 | 5 | 5 | 5 | 4 | 24 |
| Confirm pipelines are advertised | 5 | 5 | 5 | 5 | 4 | 24 |
| Choose your AI path | 4 | 4 | 5 | 5 | 4 | 22 |
| Related | 3 | 3 | 5 | 5 | 5 | 21 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. Description over 160 chars. status=review indicates not production-ready |
| 2. VOICE | 2.1-2.22 | **FAIL** | "Top 100" used in prerequisites - should be "active set". Self-referential REVIEW comments visible in rendered output via `{/* REVIEW */}` comments (these won't render but indicate unfinished content). "An Experimental AI Prompt" in description is self-referential |
| 3. HEADINGS | 3.1-3.10 | PASS | All headings score >= 21/25. "Related" heading is bare - should be "Related Pages" for consistency |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Multiple REVIEW flags indicate incomplete content: VRAM values for upscale and text-to-speech are empty. Links to `/v2/orchestrators/setup/rs-install` use old slug. Content mismatch flagged by inline REVIEW comment |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | Has Related section but uses bare "Related" not "Related Pages". Missing CTA for next step in setup journey. CardGroup at end is good |
| 6. VERACITY | 6.1-6.12 | **FAIL** | Multiple REVIEW flags on VRAM requirements (image-to-video: "16GB+ REVIEW", upscale: empty, text-to-speech: empty). Claims need SME verification. "Top 100 active set" - threshold is not always exactly 100 |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2823 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `/v2/orchestrators/setup/rs-install` used twice - old slug (should be `/v2/orchestrators/setup/install`). `/v2/orchestrators/setup/activate` path unconfirmed. `/v2/orchestrators/guides/advanced-operations/large-scale-operations` path unconfirmed. Multiple REVIEW-flagged link targets |
| 9. PROCESS | 9.1-9.6 | **FAIL** | Explicit `status: review` in frontmatter. Multiple REVIEW flags. No sign-off. Published in nav despite review status |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Missing VRAM data for 3 pipelines. Missing confirmation of pipeline advertisement method. Missing safe VRAM headroom guidance alongside transcoding |

## Verdict: NEEDS WORK
