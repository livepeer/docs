# Review: Orchestrator Quickstart
**File:** v2/orchestrators/quickstart/guide.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Quickstart | Pass |
| sidebarTitle | Yes | Overview | Pass |
| description | Yes | "Choose your quickstart path..." (96 chars) | Pass |
| pageType | Yes | `overview` | **Fail** - not in allowed set {concept,tutorial,guide,instruction,navigation,reference,resource} |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - YAML is case-sensitive; Mintlify may not read this |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Choose your path | 4 | 4 | 5 | 5 | 5 | 23 |
| What you will need | 4 | 4 | 5 | 5 | 5 | 23 |
| Quickstart vs Setup guide | 5 | 5 | 5 | 4 | 4 | 23 |
| After the quickstart | 4 | 4 | 5 | 5 | 4 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: purpose, complexity, lifecycleStage. `Keywords` capitalised (should be `keywords`). pageType `overview` not in allowed set |
| 2. VOICE | 2.1-2.22 | **FAIL** | REVIEW comment published in source (line 26). "MacOS" should be "macOS". No banned words found otherwise |
| 3. HEADINGS | 3.1-3.10 | PASS | All headings score >= 20/25. No banned headings |
| 4. STRUCTURE | 4.1-4.16 | PASS | Clear single purpose (path selection). No dead ends. Prerequisites listed. CTA cards present |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | No Related Pages section. Uses custom components correctly. REVIEW comment visible in source |
| 6. VERACITY | 6.1-6.12 | PASS | Claims are navigational, not factual assertions needing sourcing |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2820 |
| 8. LINKS | 8.1-8.6 | **FAIL** | Card href `/v2/orchestrators/setup/r-monitor` uses old slug (redirect exists to `/v2/orchestrators/setup/monitor`). Should use canonical path |
| 9. PROCESS | 9.1-9.6 | **FAIL** | REVIEW flag published in source. No sign-off evidence |
| 10. COMPLETENESS | 10.1-10.5 | PASS | Covers all quickstart paths with clear routing |

## Verdict: NEEDS WORK
