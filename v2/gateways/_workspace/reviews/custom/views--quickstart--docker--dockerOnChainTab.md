# Review: views/quickstart/docker/dockerOnChainTab.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/quickstart/docker/dockerOnChainTab.mdx` |
| **Type** | View (tab content included by parent quickstart page) |
| **Size** | 16,472 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 3/10 | Has title, description, pageType, audience, purpose, status. Missing: keywords, og:image, sidebarTitle, lastVerified. Description is literally `'{ / Needs to be further destructured /}'` -- a dev note, not a description. |
| 2 | VOICE | 4/10 | `<Danger> Needs edit, better explanation & format </Danger>` is a visible dev note. "Aribtum" typo (line 37). "is provides" grammar error (line 401). Ampersand in user-facing text. |
| 3 | HEADINGS | 3/10 | No markdown headings -- relies on Step titles. Step titles provide good structure. |
| 4 | STRUCTURE | 6/10 | Comprehensive 7-step flow (Install, Configure, Run, Connect, Test, Monitor, Tips). Large file. Multiple Accordion sections for test categories. |
| 5 | LAYOUT | 6/10 | Good use of Steps, Tabs, Accordion, Expandable, CustomCodeBlock. Has Card link to Explorer. Missing Related Pages. |
| 6 | VERACITY | 5/10 | "Test on a testnet first (e.g., arbitrum-one-goerli)" -- Goerli is deprecated. Prometheus metrics names should be verified. |
| 7 | NAV | N/A | View file -- included by parent, not directly in docs.json. |
| 8 | LINKS | 6/10 | Links to Discord, Forum, Explorer look valid. No broken link syntax. |
| 9 | PROCESS | 2/10 | 1 x `<Danger>` fix-me marker. Description is a dev note. No human sign-off. |
| 10 | COMPLETENESS | 7/10 | Most comprehensive quickstart view. Covers install, configure, run, connect, test (connectivity, on-chain, payments, video, AI), monitor, tips. |

---

## Frontmatter Table

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Y | Docker On-Chain Gateway Quickstart TAB VIEW | "TAB VIEW" is internal naming |
| description | Y | `{ / Needs to be further destructured /}` | Dev note, not a description |
| pageType | Y | instruction | OK (lowercase) |
| audience | Y | gateway | OK |
| purpose | Y | build | OK |
| status | Y | current | Should be `draft` |
| keywords | N | -- | Missing entirely |
| sidebarTitle | N | -- | Missing |
| lastVerified | N | -- | Missing |
| og:image | N | -- | Missing entirely |

## Heading Score Table

No markdown headings. Content structured via `<Step>` and `<Accordion>` components.

**Heading Score: 3/10**

---

## Critical Issues

1. **Description is a dev note** -- `'{ / Needs to be further destructured /}'`
2. **Missing keywords and og:image** -- frontmatter incomplete
3. **`<Danger> Needs edit, better explanation & format </Danger>`** -- visible to readers (line 70)
4. **Typo "Aribtum"** -- line 37, should be "Arbitrum"
5. **Grammar: "is provides"** -- line 401
6. **Stale testnet reference** -- "arbitrum-one-goerli" (Goerli is deprecated, Arbitrum Sepolia is current)

## Verdict

**NEEDS SIGNIFICANT WORK** -- Despite being the most complete quickstart view, the frontmatter is broken (description is a dev note, missing keywords/og:image), contains visible Danger markers, typos, and a stale testnet reference. Fix frontmatter, resolve the Danger marker, correct typos, update testnet reference.
