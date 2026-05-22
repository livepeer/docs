# Review: Monitoring Your Orchestrator Setup
**File:** v2/orchestrators/setup/monitor.mdx
**Reviewed:** 2026-04-08

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Monitoring Your Orchestrator Setup | Pass |
| sidebarTitle | Yes | Monitor | Pass |
| description | Yes | "Monitor node health, GPU performance..." (82 chars) | Pass |
| pageType | No | -- | **Fail** - missing |
| audience | Yes | orchestrator | Pass |
| purpose | No | -- | **Fail** - missing |
| complexity | No | -- | **Fail** - missing |
| lifecycleStage | No | -- | **Fail** - missing |
| keywords | **Fail** | Key is `Keywords` (capital K) | **Fail** - case-sensitive YAML |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | **Fail** - uses fallback OG image |

## Heading Score Table
| Heading | P | D | S | C | Co | Total |
|---|---|---|---|---|---|---|
| Built-in metrics | 4 | 4 | 5 | 5 | 5 | 23 |
| What to track | 4 | 4 | 5 | 5 | 5 | 23 |
| Explorer | 3 | 3 | 5 | 5 | 5 | 21 |
| Prometheus and Grafana | 4 | 4 | 5 | 5 | 4 | 22 |
| See also | 2 | 2 | 5 | 5 | 5 | 19 |

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1-1.13 | **FAIL** | Missing: pageType, purpose, complexity, lifecycleStage. `Keywords` capitalised. Uses fallback OG image |
| 2. VOICE | 2.1-2.22 | PASS | UK English ("utilisation"). No banned words. Direct tone |
| 3. HEADINGS | 3.1-3.10 | **FAIL** | "See also" scores 19/25, below 20 minimum. Should be "Related Pages" |
| 4. STRUCTURE | 4.1-4.16 | **FAIL** | Under 2KB. Very thin for a monitoring page. Missing: actual Prometheus scrape config, Grafana dashboard setup, alerting rules, DCGM exporter setup. REVIEW comment in source (line 21) |
| 5. LAYOUT | 5.1-5.16 | **FAIL** | Uses `<Columns>` not `<CardGroup>`. "See also" links use relative paths with old slugs (`./install-go-livepeer`, `../advanced/rewards-and-fees`, `../resources/faq`). No Related Pages section. REVIEW comment published |
| 6. VERACITY | 6.1-6.12 | **FAIL** | Metric names listed (`livepeer_segment_processed_total` etc.) need verification against current go-livepeer. "High error rates reduce selection probability" needs sourcing |
| 7. NAV | 7.1-7.11 | PASS | Registered in docs.json at line 2836 |
| 8. LINKS | 8.1-8.6 | **FAIL** | All 3 "See also" links use relative paths with old slugs. None will resolve |
| 9. PROCESS | 9.1-9.6 | **FAIL** | REVIEW comment in source. No sign-off. No status field |
| 10. COMPLETENESS | 10.1-10.5 | **FAIL** | Critically thin. Missing: Prometheus scrape config example, Grafana dashboard guidance, alerting setup, DCGM exporter setup, node exporter setup. Community tooling gap noted in REVIEW comment |

## Verdict: REWRITE REQUIRED
