# Performance Baseline

- Generated: 2026-03-08T08:13:21.720Z
- Requested domain: all
- Output directory: tasks/reports/performance
- Comparison source: tasks/reports/performance/performance-baseline-latest.json
- Score policy: exclude-unmeasured

## Summary

| Domain | Measured | Score | Notes |
| --- | --- | --- | --- |
| Build | yes | 76.88 | 431.2 MB repo |
| Page Load | yes | 20 | 2348.48 KB avg transfer |
| DX | yes | 40 | 120 orphan pages |
| Freshness | yes | 30 | 7 stale pipelines |
| Overall | weighted | 38.38 | exclude-unmeasured |

## Top Issues

- build: Repo size = 431.2 MB
- build: Assets % of repo = 77.9%
- build: docs.json lines = 3746
- pageload: Transfer size (v2/home/primer) = 3344.7 KB
- pageload: Transfer size (v2/developers/portal) = 2216.3 KB
- pageload: Transfer size (v2/solutions/portal) = 2205.8 KB
- pageload: Transfer size (v2/gateways/gateways-portal) = 3610.3 KB
- pageload: Transfer size (v2/orchestrators/orchestrators-portal) = 2205.9 KB
- pageload: Transfer size (v2/lpt/token-portal) = 1831.7 KB
- pageload: Transfer size (v2/community/community-portal) = 1860.5 KB
- pageload: Transfer size (v2/about/portal) = 1934.2 KB
- pageload: Transfer size (v2/resources/resources-portal) = 2225.8 KB
- pageload: Transfer size (v2/home/mission-control) = 2049.6 KB
- dx: Import max = 120
- dx: Orphan pages = 120
- freshness: Pipeline staleness (snippets/automations/blog/ghostBlogData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/discord/discordAnnouncementsData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/forum/forumData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/luma/lumaEventsData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/showcase/showcaseData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/youtube/youtubeData.jsx) = 119h
- freshness: Pipeline staleness (snippets/automations/globals/globals.mdx) = 119h

## Build

| Metric | Value | Status |
| --- | --- | --- |
| Repo size | 431.2 MB | red |
| Assets size | 335.8 MB | info |
| Assets % of repo | 77.9% | red |
| docs.json bytes | 174525 | info |
| docs.json lines | 3746 | red |
| style.css lines | 445 | info |
| Total MDX files | 1935 | info |
| EN v2 MDX files | 319 | info |
| Pre-commit hook time | 2727 ms | info |
| Pre-commit exit | 1 | info |
| Test startup time | 203 ms | info |

Asset breakdown:
- media: 199.2 MB
- domain: 125.7 MB
- data: 8.8 MB
- site: 1.9 MB
- logos: 0.1 MB
- favicon.png: 0 MB
- scripts: 0 MB
- logo: 0 MB
- README.mdx: 0 MB

## Page Load

| Path | Transfer | Status | Requests | DOMContentLoaded | Load | Largest image | HTTP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| v2/home/primer | 3344.7 KB | red | 107 | 5351 | 6903 | 1387.7 KB | 200 |
| v2/developers/portal | 2216.3 KB | red | 112 | 1540 | 2358 | 2.9 KB | 200 |
| v2/solutions/portal | 2205.8 KB | red | 110 | 236 | - | 2.7 KB | 200 |
| v2/gateways/gateways-portal | 3610.3 KB | red | 138 | 274 | 939 | 2.7 KB | 200 |
| v2/orchestrators/orchestrators-portal | 2205.9 KB | red | 114 | 232 | 999 | 2.7 KB | 200 |
| v2/lpt/token-portal | 1831.7 KB | red | 95 | 214 | 843 | 2.9 KB | 200 |
| v2/community/community-portal | 1860.5 KB | red | 112 | 215 | 1648 | 2.8 KB | 200 |
| v2/about/portal | 1934.2 KB | red | 108 | 258 | 1046 | 2.8 KB | 200 |
| v2/resources/resources-portal | 2225.8 KB | red | 97 | 277 | 792 | 0 KB | 200 |
| v2/home/mission-control | 2049.6 KB | red | 113 | 203 | - | 17.4 KB | 200 |

- Average transfer size: 2348.48 KB
- Maximum transfer size: 3610.3 KB
- Average request count: 110.6
- Average DOMContentLoaded: 880 ms
- Average load event: 1552.8 ms

## DX

| Metric | Value | Status |
| --- | --- | --- |
| Import max | 120 | red |
| Import avg | 2.11 | green |
| Import p95 | 7 | info |
| Max import file | v2/resources/documentation-guide/component-library/overview.mdx | info |
| Orphan pages | 120 | red |
| Script health | 100% | green |
| Pre-commit checks | 15 | info |

- File counts: MDX 1935, JSX 80, JS scripts 158, JSON config 24, CSS 2
- Most-used component: CustomDivider (36)
- Least-used component: InteractiveCard (0)

## Freshness

| Pipeline | Staleness | Status | Last commit | Workflow |
| --- | --- | --- | --- | --- |
| snippets/automations/blog/ghostBlogData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | completed/failure |
| snippets/automations/discord/discordAnnouncementsData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | unavailable |
| snippets/automations/forum/forumData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | completed/failure |
| snippets/automations/luma/lumaEventsData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | unavailable |
| snippets/automations/showcase/showcaseData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | completed/failure |
| snippets/automations/youtube/youtubeData.jsx | 119h | red | 2026-03-03T19:21:03+11:00 | completed/success |
| snippets/automations/globals/globals.mdx | 119h | red | 2026-03-03T19:21:03+11:00 | completed/failure |

- globals.mdx version: v0.7.7
- Latest go-livepeer release: v0.8.9
- Version match: no

## Comparison

- No previous baseline comparison available.

