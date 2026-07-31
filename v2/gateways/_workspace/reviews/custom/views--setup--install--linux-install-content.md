# Review: views/setup/install/linux-install-content.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/setup/install/linux-install-content.mdx` |
| **Type** | View (install guide, no frontmatter) |
| **Size** | 3,406 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 0/10 | No frontmatter. Starts with imports. |
| 2 | VOICE | 7/10 | Clear writing. Composable-based approach keeps it clean. |
| 3 | HEADINGS | 5/10 | Single h2 ("Linux & macOS Binary Guide"). Rest via StyledStep. |
| 4 | STRUCTURE | 6/10 | Clean 3-step flow: Prerequisites, Download & Install, Quick Test. Commented-out block (lines 35-103) with on-chain run + systemd service. |
| 5 | LAYOUT | 7/10 | Uses StyledSteps, composable imports (LinuxSupport, LinuxPrerequisites, LinuxInstallBinary, LinuxInstallCheck), Card CTA. Good modularity. |
| 6 | VERACITY | 7/10 | Delegates to composables. Card link looks valid. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 7/10 | Card link to configure page. |
| 9 | PROCESS | 3/10 | No sign-off. Commented-out content (on-chain run, systemd). |
| 10 | COMPLETENESS | 5/10 | Covers install only (3 steps). On-chain run and systemd service are in comments. |

---

## Verdict

**ACCEPTABLE** -- Clean modular structure. Commented-out content should be migrated to configure/connect views or deleted. Needs frontmatter.
