# Review: views/quickstart/linux/linuxOffChainTab.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/quickstart/linux/linuxOffChainTab.mdx` |
| **Type** | View (tab content, JSX export component) |
| **Size** | 2,758 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 3/10 | Title has typo "Linu/MacOS" (missing x). Missing: keywords, og:image, sidebarTitle, lastVerified. Description contains template literal `{latestVersion}`. |
| 2 | VOICE | 5/10 | Minimal text. No hedging, no self-ref. "MacOS" should be "macOS". |
| 3 | HEADINGS | 0/10 | No headings. JSX export pattern -- content is entirely in a React component. |
| 4 | STRUCTURE | 3/10 | Only Install step has content. Configure, Run, Test, Monitor, Tips steps are all empty. Large commented-out block (lines 45-87). Under 2KB of actual content. |
| 5 | LAYOUT | 3/10 | Uses Steps, CustomCodeBlock. 5 of 6 steps are empty shells. Has commented-out "TO DELETE" block. |
| 6 | VERACITY | 5/10 | Dynamic version fetch is good. Binary download URLs look correct. |
| 7 | NAV | N/A | View file. |
| 8 | LINKS | 6/10 | Release page link looks correct. |
| 9 | PROCESS | 1/10 | No sign-off. Mostly empty steps. Large commented-out dead code. |
| 10 | COMPLETENESS | 1/10 | Only 1 of 6 steps has content. Effectively a stub with scaffolding. |

---

## Frontmatter Table

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Y | Linu/MacOS Off-Chain Gateway Quickstart TAB VIEW | Typo: "Linu/MacOS" -- missing "x", wrong case on "MacOS" |
| description | Y | `Latest go-livepeer version: {latestVersion}` | Template literal, not a description |
| pageType | Y | instruction | OK |
| audience | Y | gateway | OK |
| purpose | Y | build | OK |
| status | Y | current | Should be `draft` |
| keywords | N | -- | Missing |
| sidebarTitle | N | -- | Missing |
| lastVerified | N | -- | Missing |
| og:image | N | -- | Missing |

## Heading Score Table

No headings present.

**Heading Score: 0/10**

---

## Verdict

**STUB -- INCOMPLETE** -- Only 1 of 6 steps has content. 5 empty Step shells. Large commented-out dead code block. Title has typo. Description is a template literal. This page is not ready for any use.
