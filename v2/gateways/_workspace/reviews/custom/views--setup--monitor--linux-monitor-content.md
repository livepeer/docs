# Review: views/setup/monitor/linux-monitor-content.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/setup/monitor/linux-monitor-content.mdx` |
| **Type** | View (monitoring guide, no frontmatter) |
| **Size** | 7,291 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 0/10 | No frontmatter. |
| 2 | VOICE | 8/10 | Clear, professional. Good separation of systemd vs direct binary approaches. |
| 3 | HEADINGS | 6/10 | Single h2. Rest via StyledStep titles. |
| 4 | STRUCTURE | 8/10 | 5-step flow: Enable Metrics, Prometheus Setup, Grafana Setup, Log Monitoring, Health Notifications. More granular than Docker version (separates Prometheus and Grafana). |
| 5 | LAYOUT | 8/10 | StyledSteps, StyledTable, code blocks, Tip, Card CTA. Health check script is practical. Crontab setup included. |
| 6 | VERACITY | 7/10 | Prometheus/Grafana install commands are correct for Ubuntu/Debian. Grafana GPG key setup is current. Health check script is well-formed. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 7/10 | Card CTA to troubleshooting page. livepeer-monitoring repo referenced. |
| 9 | PROCESS | 4/10 | No sign-off. High quality content. |
| 10 | COMPLETENESS | 8/10 | Comprehensive: metrics flags, Prometheus install+config, Grafana install+config, journalctl/tee logging, cron health check. |

---

## Verdict

**GOOD** -- Thorough Linux monitoring guide. Separates Prometheus and Grafana into distinct steps. Includes health check script with crontab. Needs frontmatter.
