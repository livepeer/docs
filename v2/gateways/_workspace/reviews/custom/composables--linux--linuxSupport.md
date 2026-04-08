# Review: composables/linux/linuxSupport.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/composables/linux/linuxSupport.mdx` |
| **Type** | Composable (included by parent page) |
| **Size** | 3,122 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 6/10 | Has title, description, PageType, audience, purpose, status, keywords, og:image fields. Missing: `sidebarTitle`, `lastVerified`. `PageType` key uses wrong case (`PageType` vs `pageType` inconsistency across repo). |
| 2 | VOICE | 5/10 | US English spelling ("customize" not used but no UK-specific terms either). Commented-out code block with `eliteproxy` reference is messy. Bare list items lack full sentences. No hedging, no self-ref, no em-dashes -- passes those checks. |
| 3 | HEADINGS | 4/10 | Only 2 headings (`### Supported Distributions`, `### System Requirements & Packages`). Both h3 with no h2 parent. Ampersand in heading (`&`) is non-standard. No h1 or h2. |
| 4 | STRUCTURE | 4/10 | No clear purpose statement. No intro paragraph. Commented-out code blocks (lines 56-71) are dead weight. No Discord link for community test. As a composable, it is included elsewhere, so some structural rules are relaxed. |
| 5 | LAYOUT | 4/10 | No Related Pages section. No CTA. Composable file so template rules are partially N/A. Uses `<Warning>` correctly. Has commented-out dangerous code block. |
| 6 | VERACITY | 6/10 | Go 1.21+ claim should be verified against current go.mod. Ubuntu 20.04+ CI claim is plausible. LLVM-14 instructions may be outdated (14 is old). |
| 7 | NAV | N/A | Composable -- not expected in docs.json. |
| 8 | LINKS | 7/10 | No broken link syntax. No TODO/TBD links. |
| 9 | PROCESS | 2/10 | No human sign-off. No lastVerified. Commented-out code suggests incomplete review. |
| 10 | COMPLETENESS | 4/10 | Missing ARM64 install instructions despite listing ARM64 as supported. Arch Linux install not covered. No build-from-source walkthrough despite title implying it. |

---

## Frontmatter Table

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Y | Linux Supported Distributions & Information | Ampersand in title |
| description | Y | (truncated) | OK |
| PageType | Y | instruction | Key casing inconsistent (`PageType` vs `pageType`) |
| audience | Y | gateway | OK |
| purpose | Y | build | OK |
| status | Y | current | OK |
| keywords | Y | 20 items | OK |
| sidebarTitle | N | -- | Missing |
| lastVerified | N | -- | Missing |
| og:image | Y | fallback.png | OK |

## Heading Score Table

| Heading | Level | Issue |
|---------|-------|-------|
| Supported Distributions | h3 | No parent h2 |
| System Requirements & Packages | h3 | Ampersand; no parent h2 |

**Heading Score: 4/10** (2 headings, no hierarchy, non-standard characters)

---

## Verdict

**NEEDS WORK** -- This composable has commented-out code, incomplete coverage for listed platforms, possible stale toolchain versions (LLVM-14), and no review sign-off. Priority fixes: remove commented-out code, verify LLVM and Go version claims, add ARM64/Arch instructions or remove those from the supported list.
