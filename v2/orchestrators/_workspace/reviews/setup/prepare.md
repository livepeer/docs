# Review: Operational and Hardware Requirements
**File:** v2/orchestrators/setup/prepare.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Operational and Hardware Requirements for Orchestrators | Pass |
| sidebarTitle | Yes | Prepare | Pass |
| description | Yes | "Minimum, recommended, and production hardware..." (76 chars) | Pass |
| pageType | No | -- | **Fail** - missing |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - case-sensitive YAML |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | **Fail** - uses fallback OG image, not orchestrators-specific |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Minimum (development / testing) | 5 | 5 | 5 | 5 | 3 | 23 |
| Recommended (video / production) | 5 | 5 | 5 | 5 | 3 | 23 |
| AI inference | 4 | 4 | 5 | 5 | 5 | 23 |
| Network and ops | 4 | 4 | 5 | 5 | 4 | 22 |
| Checklist before going live | 5 | 5 | 5 | 5 | 4 | 24 |
| See also | 2 | 2 | 5 | 5 | 5 | 19 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: pageType, purpose, complexity, lifecycleStage. `Keywords` capitalised. Uses fallback OG image |
| 2. VOICE | 2.1-2.22 | PASS | UK English present ("optimised"). No banned words. Clean factual tone |
| 3. HEADINGS | 3.1-3.10 | **FAIL** | "See also" heading scores 19/25, below 20 minimum. Should be "Related Pages" |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Under 5KB for a concept/guide page. Missing detail on specific CUDA versions, driver versions, Docker versions. No Discord test mentioned |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | Uses `<Columns>` component (non-standard - should be `<CardGroup>`). "See also" section uses old link patterns (`./install-go-livepeer`, `./orchestrator-stats`, `./data-centre-setup`) which are relative and use old slugs |
| 6. VERACITY | 6.1-6.12 | **FAIL** | "guidelines for 2026" is a bold temporal claim. GPU recommendations need sourcing. "99%+ target" uptime claim is unsourced. CUDA 12+ requirement needs version pinning |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2831 |
| 8. LINKS | 8.1-8.6 | **FAIL** | All 3 links use relative paths with old slugs: `./install-go-livepeer`, `./orchestrator-stats`, `./data-centre-setup`. None of these will resolve correctly |
| 9. PROCESS | 9.1-9.6 | **FAIL** | No sign-off evidence. No status field in frontmatter |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Missing: specific driver version requirements, Docker version requirements, port list, bandwidth calculations, cost estimates. Page is too thin for its topic |

## Verdict: NEEDS WORK
