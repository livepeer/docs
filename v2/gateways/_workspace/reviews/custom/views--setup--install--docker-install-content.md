# Review: views/setup/install/docker-install-content.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/setup/install/docker-install-content.mdx` |
| **Type** | View (install guide, no frontmatter) |
| **Size** | 11,695 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 0/10 | No frontmatter. Starts with imports. |
| 2 | VOICE | 7/10 | Clear writing in active content. Large commented-out block (lines 90-305) contains older draft content. |
| 3 | HEADINGS | 5/10 | Single h2 heading ("Docker Guide"). Rest via StyledStep titles. |
| 4 | STRUCTURE | 5/10 | Active content is just 3 steps (Prerequisites, Pull Image, Quick Test) which is clean. But ~70% of the file is commented-out content including full docker-compose setup, ETH account creation, streaming, and auth webhook -- all valuable content hidden in comments. |
| 5 | LAYOUT | 6/10 | Uses StyledSteps, composable imports (DockerSupport, DockerUpdate, DockerPull, DockerInstallCheck), Card CTA. Good modular approach. |
| 6 | VERACITY | 7/10 | Active content delegates to composables so claims are inherited. CTA links look valid. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 7/10 | Card link to configure page. |
| 9 | PROCESS | 3/10 | No sign-off. ~70% commented-out content is significant dead weight. |
| 10 | COMPLETENESS | 5/10 | Active content covers only install prerequisites, pull, and test. Commented-out content has configuration, ETH setup, streaming, authentication -- all needed for a complete guide but hidden. |

---

## Critical Issues

1. **No frontmatter**
2. **~70% of file is commented-out** -- lines 90-305 contain full docker-compose setup, ETH wallet creation, video streaming, and auth webhook documentation. This content needs to be either moved to the appropriate configure/connect views or deleted
3. **Composable-heavy** -- delegates to DockerSupport, DockerUpdate, DockerPull, DockerInstallCheck. Audit those composables separately

## Verdict

**NEEDS CLEANUP** -- Active content is clean and modular. The massive commented-out block is the main issue -- it contains valuable content that belongs in configure/connect views. Either migrate or delete it.
