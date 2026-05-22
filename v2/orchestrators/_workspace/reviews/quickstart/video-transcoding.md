# Review: Video Transcoding Quickstart
**File:** v2/orchestrators/quickstart/video-transcoding.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Video Transcoding Quickstart | Pass |
| sidebarTitle | Yes | Video Transcoding | Pass |
| description | Yes | "Run go-livepeer as a transcoding orchestrator..." (105 chars) | Pass |
| pageType | Yes | `quickstart` | **Fail** - not in allowed set {concept,tutorial,guide,instruction,navigation,reference,resource} |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | Yes | 6 keywords | Pass |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Step 2: Prerequisites | 5 | 4 | 5 | 5 | 4 | 23 |
| Step 3: Configure and run | 5 | 5 | 5 | 5 | 4 | 24 |
| Step 4: Register | 5 | 4 | 5 | 5 | 5 | 24 |
| Step 5: Verify your node | 5 | 4 | 5 | 5 | 4 | 23 |
| Testing end-to-end with a Gateway | 5 | 5 | 5 | 5 | 3 | 23 |
| Related pages | 4 | 3 | 5 | 5 | 5 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. pageType `quickstart` not in allowed set |
| 2. VOICE | 2.1-2.22 | PASS | Clean voice. No banned words. UK English consistent |
| 3. HEADINGS | 3.1-3.10 | PASS | All score >= 22/25. "Related pages" is exempt |
| 4. STRUCTURE | 4.1-4.16 | PASS | Clear single purpose. Prerequisites present. Step-by-step flow. CTA cards at end |
| 5. LAYOUT | 5.1-5.16 | PASS | Has Related Pages section with cards. Uses approved components (StyledSteps, StyledTable, CustomCodeBlock) |
| 6. VERACITY | 6.1-6.12 | PASS | Commands are standard go-livepeer CLI. Explorer link valid |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2821 |
| 8. LINKS | 8.1-8.6 | **FAIL** | `../concepts/job-types` is a relative link (should be root-absolute). `../resources/cli-flags` is relative. `/v2/orchestrators/setup/install-go-livepeer` uses old slug (redirect exists to `/v2/orchestrators/setup/install`). Card for "Connect to Arbitrum" wrongly points to install-go-livepeer |
| 9. PROCESS | 9.1-9.6 | **FAIL** | No sign-off evidence |
| 10. COMPLETENESS | 10.1-10.5 | PASS | Covers full quickstart journey from wallet to verification |

## Verdict: NEEDS WORK
