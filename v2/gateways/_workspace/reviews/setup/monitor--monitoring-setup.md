# Review: Monitoring Setup

**File:** `v2/gateways/setup/monitor/monitoring-setup.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Monitoring Setup" |
| 1. FRONTMATTER | 1.3 description | PASS | Comprehensive |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 9 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | Technical, fact-led |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | Prometheus + Grafana setup |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 29-52: large TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | Very substantial |
| 5. LAYOUT | 5.3 Related Pages | PASS | 3-card CardGroup |
| 6. VERACITY | 6.3 REVIEW flags | FAIL | 4 REVIEW flags: line 153 (livepeer-monitoring repo), line 218 (livepeer_success_rate), line 312 (inference latency), line 380 (AI dashboards) |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 8. LINKS | 8.1 Links resolve | WARN | Link to `/v2/gateways/resources/reference/go-livepeer/prometheus-metrics` needs verification |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Full Prometheus, Grafana, alerts, all workload types |

## Issues

1. **Not in docs.json** - orphan page, but heavily referenced
2. **4 unresolved REVIEW flags** using `[//]: # (REVIEW: ...)` markdown comment syntax
3. **Large TODO block** at top (lines 29-52)
4. **Frontmatter casing:** `PageType` should be `pageType`
5. **Missing frontmatter:** complexity, lifecycleStage
6. **Duplicate content:** This page's metrics, alerts, and Grafana content is now largely duplicated in the parent `setup/monitor.mdx` page
7. **Recommendation:** Content has been promoted to parent monitor.mdx - this sub-page should be consolidated or archived
