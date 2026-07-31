# Review: Setting up an Orchestrator (s-guide)
**File:** v2/orchestrators/setup/s-guide.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Setting up an Orchestrator | Pass |
| sidebarTitle | Yes | Guide | **Fail** - conflicts with guide.mdx which also uses sidebarTitle "Guide" |
| description | Yes | "What it means to run an orchestrator..." (58 chars) | Pass |
| pageType | Yes | `overview` | **Fail** - not in allowed set |
| audience | Yes | orchestrator | Pass |
| purpose | Yes | `overview` | **Fail** - not in allowed purpose set |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - case-sensitive YAML |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | **Fail** - uses fallback OG image |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Setup checklist | 4 | 4 | 5 | 5 | 5 | 23 |
| See also | 2 | 2 | 5 | 5 | 5 | 19 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: complexity, lifecycleStage. `Keywords` capitalised. pageType and purpose both `overview` - not in allowed sets. Uses fallback OG image. Duplicate sidebarTitle with guide.mdx |
| 2. VOICE | 2.1-2.22 | PASS | Clean. No banned words |
| 3. HEADINGS | 3.1-3.10 | **FAIL** | "See also" scores 19/25, below 20 minimum |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Under 2KB. Extremely thin. Just a numbered list and card links. Duplicates guide.mdx purpose entirely |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | Uses `<Columns>` not `<CardGroup>`. All links use relative paths with old slugs (`./hardware-requirements`, `./install-go-livepeer`, etc.). "See also" uses inline markdown links (not cards). No Related Pages section |
| 6. VERACITY | 6.1-6.12 | **FAIL** | All 6 card links use old relative slugs that will not resolve |
| 7. NAV | 7.1-7.11 | **FAIL** | NOT registered in docs.json. Orphaned page |
| 8. LINKS | 8.1-8.6 | **FAIL** | Every single link on this page uses old relative slugs: `./hardware-requirements`, `./install-go-livepeer`, `./connect-to-arbitrum`, `./orch-config`, `./publish-offerings`, `./orchestrator-stats`. "See also" links also broken: `../concepts/overview`, `../get-started/join-a-pool`, `../advanced/staking-LPT`, `../advanced/rewards-and-fees` |
| 9. PROCESS | 9.1-9.6 | **FAIL** | No sign-off. No status field. Appears to be superseded by guide.mdx |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Entirely superseded by guide.mdx. No unique content |

## Verdict: REWRITE REQUIRED
**Recommendation:** Delete this file. It is an orphaned legacy duplicate of guide.mdx with every link broken.
