# Review: views/setup/install/linux-install-content-copy.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/setup/install/linux-install-content-copy.mdx` |
| **Type** | View (install guide copy/draft, no frontmatter) |
| **Size** | 10,150 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 0/10 | No frontmatter at all. |
| 2 | VOICE | 4/10 | "Gtihub API" typo appears twice (lines 130, 146). "bre upgrade" typo (lines 84, 110). "{latestVersion}" template literal exposed. `>_` used as expandable titles -- non-standard. |
| 3 | HEADINGS | 2/10 | No markdown headings in the main flow. h2 headings appear only inside the "OLD DOCS ITEMS" Expandable at the bottom. |
| 4 | STRUCTURE | 4/10 | 3 active steps (Prerequisites, Download & Install, Run Gateway) plus output example. But `wget` prerequisite section is excessively long (brew, curl, package manager for 5+ distros). "OLD DOCS ITEMS" Expandable at bottom is dead weight. File name says "copy" suggesting it is a draft/duplicate. |
| 5 | LAYOUT | 4/10 | Uses StyledSteps, Tabs, Expandable, CustomCodeBlock. But overly nested expandables and tabs for prerequisites. |
| 6 | VERACITY | 5/10 | Download URLs look correct. Dynamic version fetch is good. `brew update && bre upgrade` has typo that would fail. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 5/10 | Release page link looks valid. Configuration link at bottom looks valid. |
| 9 | PROCESS | 1/10 | Filename ends in `-copy` -- this is a draft/duplicate. No sign-off. Typos. Dead "OLD DOCS ITEMS" at bottom. |
| 10 | COMPLETENESS | 5/10 | Covers prerequisites, download (Linux + macOS Intel + Apple Silicon), and run (off-chain + on-chain). But the clean version (`linux-install-content.mdx`) exists -- this is likely the older, superseded version. |

---

## Critical Issues

1. **Filename ends in `-copy`** -- suggests this is a duplicate/draft. The clean version exists at `linux-install-content.mdx`
2. **"Gtihub API" typo** (lines 130, 146)
3. **"bre upgrade" typo** (lines 84, 110) -- would cause command failure
4. **Template literal `{latestVersion}` exposed** at line 7
5. **"OLD DOCS ITEMS" Expandable** at bottom with systemd service setup content
6. **Excessive prerequisite section** -- wget install instructions for 5+ distros and 3 methods

## Verdict

**LIKELY SUPERSEDED -- CANDIDATE FOR DELETION** -- This appears to be an older draft version. `linux-install-content.mdx` (3,406 bytes, composable-based) is the clean replacement. Verify that nothing unique exists here that is missing from the clean version, then delete this file.
