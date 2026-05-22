# Review: Audio and Vision Pipelines
**File:** v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.4 | FAIL | pageType: "how_to" — not in enum |
| Frontmatter | 1.6 | FAIL | Missing purpose field |
| Frontmatter | 1.7 | FAIL | Missing complexity |
| Frontmatter | 1.8 | FAIL | Missing lifecycleStage |
| Voice | 2.1 | PASS | UK English |
| Voice | 2.12 | PASS | No banned words |
| Structure | 4.1 | PASS | Single purpose: configure 4 non-diffusion AI pipelines |
| Structure | 4.4 | PASS | Related Pages cards present |
| Layout | 5.15 | PASS | Related Pages CTA |
| Veracity | 6.1 | WARN | 4 REVIEW items (pricing unit, model IDs, warm constraint) |
| Nav | 7.1 | PASS | In docs.json |
| Links | 8.6 | PASS | Links resolve |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Audio and Vision Pipelines | PASS |
| sidebarTitle | Yes | Audio & Vision | PASS |
| description | Yes | 157 chars | PASS |
| pageType | Yes | how_to | FAIL |
| audience | Yes | orchestrator | PASS |
| purpose | No | — | FAIL |
| complexity | No | — | FAIL |
| lifecycleStage | No | — | FAIL |
| keywords | Yes | 11 items | PASS |
| og:image | Yes | orchestrators.png | PASS |
| status | Yes | draft | INFO |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Pipeline overview | 4 | 4 | 5 | 5 | 4 | 22 |
| audio-to-text (Whisper) | 5 | 5 | 5 | 5 | 4 | 24 |
| text-to-speech | 5 | 5 | 5 | 5 | 4 | 24 |
| image-to-text | 5 | 5 | 5 | 5 | 4 | 24 |
| segment-anything-2 | 5 | 5 | 5 | 5 | 4 | 24 |
| Running multiple pipelines | 5 | 5 | 5 | 5 | 4 | 24 |
| Related pages | — | — | — | — | — | EXEMPT |

## Verdict: NEEDS WORK
Good how-to content. Fix: 4 missing frontmatter fields (pageType should be "instruction" or "guide", plus purpose, complexity, lifecycleStage). Resolve 4 REVIEW flags.
