# Review: GPU Support Matrix
**File:** v2/orchestrators/resources/reference/gpu-support.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| Frontmatter | 1.1-1.13 | FAIL | Missing `complexity`, `lifecycleStage`. |
| Voice | 2.1-2.22 | PASS | UK English. Entity-led. No banned words. No em-dashes. No self-referential language. |
| Headings | 3.1-3.10 | PASS | All headings concise and technical. |
| Structure | 4.1-4.16 | PASS | Single purpose (GPU compatibility reference). Well-structured: families, session limits, CUDA/driver, VRAM, selection guidance. Exceeds 2KB. |
| Layout | 5.1-5.16 | PASS | StyledTable throughout. Tabs for GPU selection guidance. CustomDivider. Warning component for driver patching. CardGroup "See Also" at bottom. |
| Veracity | 6.1-6.12 | WARN | NVENC session limits and driver version minimums (525+, CUDA 12.0+) should be verified against current go-livepeer release notes. Table cells with `\` \`` (empty backtick) in Notes column (lines 218-220) are presentational artifacts. |
| Nav | 7.1-7.11 | PASS | In docs.json under Technical Reference group. Redirects configured. |
| Links | 8.1-8.6 | PASS | Internal links resolve. External link to nvidia-patch repo is standard. CardGroup links to valid paths. |
| Process | 9.1-9.6 | FAIL | `status: review`. TODO block present (lines 28-50). No human sign-off. |
| Completeness | 10.1-10.5 | PASS | Covers GPU families, session limits, patching, CUDA/driver requirements, VRAM requirements by workload, and selection guidance for three operator profiles. |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | GPU Support Matrix | PASS |
| sidebarTitle | Yes | GPU Support | PASS |
| description | Yes | 119 chars | PASS |
| pageType | Yes | reference | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | reference | PASS |
| complexity | No | -- | FAIL |
| lifecycleStage | No | -- | FAIL |
| keywords | Yes | 11 terms | PASS |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | PASS |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Supported GPU Families | 5 | 5 | 5 | 5 | 5 | 25 |
| NVENC Session Limits | 5 | 5 | 5 | 5 | 5 | 25 |
| Removing the Session Limit | 5 | 5 | 5 | 5 | 5 | 25 |
| CUDA and Driver Requirements | 5 | 5 | 5 | 5 | 5 | 25 |
| Checking Your Versions | 5 | 5 | 5 | 5 | 5 | 25 |
| VRAM Requirements by Workload | 5 | 5 | 5 | 5 | 5 | 25 |
| GPU Selection Guidance | 5 | 5 | 5 | 5 | 5 | 25 |
| See Also | EXEMPT | -- | -- | -- | -- | EXEMPT |

## Verdict: NEEDS WORK
Key issues: Missing `complexity` and `lifecycleStage`, `status: review`, empty backtick cells in driver requirements table, NVENC/CUDA version claims should be verified against latest release.
