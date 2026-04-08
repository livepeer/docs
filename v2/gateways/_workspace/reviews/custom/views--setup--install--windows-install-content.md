# Review: views/setup/install/windows-install-content.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/setup/install/windows-install-content.mdx` |
| **Type** | View (install guide, no frontmatter) |
| **Size** | 3,896 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 0/10 | No frontmatter. |
| 2 | VOICE | 4/10 | Contains visible `<Warning>` with TODO markers: "TODO - [ ] UNVERIFIED INSTALL DOCS - VERIFY CONTENT - [ ] MOVE ETH WALLET SETUP CONTENT". References "current docs" URL which may be v1. |
| 3 | HEADINGS | 3/10 | h2 headings inside steps ("Download and unzip the Livepeer binary", "Create a bat file to launch Livepeer", "Start the Livepeer Gateway"). h2 inside StyledStep is non-standard. |
| 4 | STRUCTURE | 5/10 | 5-step flow: Prerequisites (WSL2), Download, Create .bat, Start, Tip. Reasonable structure. WSL2 approach is valid for Windows. |
| 5 | LAYOUT | 5/10 | Uses StyledSteps, Tabs (Off-Chain/On-Chain), CustomCodeBlock, Expandable, Card CTA. `{' '}` and `<br />` used for spacing -- non-standard. |
| 6 | VERACITY | 4/10 | Visible TODO says "UNVERIFIED INSTALL DOCS". Download URL is just a bare URL string, not a wget/curl command. The bat file approach is valid but outdated. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 5/10 | References "current docs windows install guide" which is v1. Card CTA to configure page. |
| 9 | PROCESS | 1/10 | Visible TODO markers. "UNVERIFIED" warning. No sign-off. |
| 10 | COMPLETENESS | 5/10 | Covers WSL2 setup, download, bat file (off-chain + on-chain), start, Windows service tip. But marked UNVERIFIED. |

---

## Critical Issues

1. **Visible TODO markers** in Warning: "TODO - [ ] UNVERIFIED INSTALL DOCS - VERIFY CONTENT - [ ] MOVE ETH WALLET SETUP CONTENT"
2. **Marked "Video Only"** via Badge but some on-chain content included
3. **Download step** shows bare URL, not a download command
4. **Card CTA text** says "Open the Livepeer CLI, then Jump to Configuration Options" -- redundant with the Card itself
5. **v1 reference** -- links to `docs.livepeer.org/gateways/guides/windows-install`

## Verdict

**NEEDS WORK -- UNVERIFIED** -- The page explicitly marks itself as unverified with TODO markers. Download step needs a proper command. v1 references should be removed. Content is reasonable but needs verification and cleanup.
