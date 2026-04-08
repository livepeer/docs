# Review: Setup Overview
**File:** v2/orchestrators/setup/guide.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Setup Overview | Pass |
| sidebarTitle | Yes | Guide | Pass |
| description | Yes | "Default setup path for Livepeer orchestrators..." (118 chars) | Pass |
| pageType | Yes | `overview` | **Fail** - not in allowed set |
| audience | Yes | orchestrator | Pass |
| purpose | Yes | `guide` | **Fail** - `guide` is not in allowed purpose set |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - case-sensitive YAML |
| og:image | Yes | /snippets/assets/media/og-images/en/orchestrators.png | Pass |
| status | Yes | `draft` | Note: explicitly marked draft but published in nav |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| What this guide does | 4 | 4 | 5 | 5 | 4 | 22 |
| What this guide does not do | 4 | 4 | 5 | 4 | 3 | 20 |
| Redirects | 3 | 3 | 5 | 5 | 5 | 21 |
| Setup overview | 4 | 4 | 5 | 5 | 4 | 22 |
| Activation checks | 4 | 4 | 5 | 5 | 4 | 22 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: complexity, lifecycleStage. `Keywords` capitalised. pageType `overview` not in allowed set. purpose `guide` not in allowed set. status=draft but in nav |
| 2. VOICE | 2.1-2.22 | PASS | Clean. No banned words. No self-ref |
| 3. HEADINGS | 3.1-3.10 | PASS | All >= 20/25. No banned headings |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Under 2KB minimum. Thin navigational page. "What this guide does not do" section is unusual and defensive |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | No Related Pages section. Duplicate card groups (setup overview cards + activation checks cards cover overlapping links). Markdown table in "Activation checks" inconsistent with card-based pattern used elsewhere |
| 6. VERACITY | 6.1-6.12 | **FAIL** | Links to `/v2/orchestrators/setup/r-configure` - old slug. Links to `/v2/orchestrators/setup/sc-connect` - old slug. Links to `/v2/orchestrators/setup/x-test` - excluded/test file. Links to `/v2/orchestrators/unclassified/rcs-connect-activate-publish` - unverified path |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2830 |
| 8. LINKS | 8.1-8.6 | **FAIL** | Multiple stale slugs: `r-configure`, `sc-connect`, `x-test`. Link to `unclassified/rcs-connect-activate-publish` is suspect. `/v2/orchestrators/dep-rc-navigator` uses deprecated prefix |
| 9. PROCESS | 9.1-9.6 | **FAIL** | status=draft. No sign-off. Published in nav despite draft status |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Does not mention AI setup path. "Activation checks" section is incomplete - refers to pages that may not exist at listed paths |

## Verdict: NEEDS WORK
