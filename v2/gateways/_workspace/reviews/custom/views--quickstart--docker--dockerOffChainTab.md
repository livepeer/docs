# Review: views/quickstart/docker/dockerOffChainTab.mdx

| Field | Value |
|-------|-------|
| **File** | `v2/gateways/custom/views/quickstart/docker/dockerOffChainTab.mdx` |
| **Type** | View (tab content included by parent quickstart page) |
| **Size** | 9,381 bytes |
| **Date** | 2026-04-08 |

---

## Summary

| Cat | Category | Score | Notes |
|-----|----------|-------|-------|
| 1 | FRONTMATTER | 6/10 | Has title, description, pageType, audience, purpose, status, keywords, og:image. Missing: `sidebarTitle`, `lastVerified`. `pageType` lowercase here vs `PageType` elsewhere. |
| 2 | VOICE | 4/10 | Multiple `<Danger>` tags with informal text: "fix me", "Fix me (onchain nicer)", "Fix code formatting", "Needs Review". These are TODO markers in published content. US English used ("customize"). |
| 3 | HEADINGS | 3/10 | No markdown headings at all -- relies entirely on `<Step>` titles. Step titles are fine but no heading hierarchy for SEO/accessibility. |
| 4 | STRUCTURE | 5/10 | Clear step-by-step flow (Install, Configure, Run, Test, Monitor, Tips). Multiple `<Danger>` fix-me markers indicate incomplete content. Nested commented-out steps. |
| 5 | LAYOUT | 6/10 | Uses Steps, Tabs, Accordion, CustomCodeBlock components correctly. Has Card link to AI API reference. Missing explicit Related Pages section. |
| 6 | VERACITY | 5/10 | Docker Hub link has incorrect quoting: `("https://hub.docker.com/...")` with inner quotes. Prometheus metrics names should be verified against codebase. |
| 7 | NAV | N/A | View file -- included by parent, not directly in docs.json. |
| 8 | LINKS | 5/10 | Docker Hub link has malformed href with inner quotes. CLI Commands link looks valid. No TODO/TBD links but multiple `<Danger> fix me` markers serve same purpose. |
| 9 | PROCESS | 2/10 | 4 separate `<Danger>` markers indicating unreviewed/incomplete content. No human sign-off. |
| 10 | COMPLETENESS | 5/10 | Install, Configure, Run, Test (video + AI), Monitor, Tips all present. But Configure section marked "fix me", Test section marked "Fix me (onchain nicer)" and "Fix code formatting". Monitor section marked "Needs Review". |

---

## Frontmatter Table

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Y | Docker Off-Chain Gateway Quickstart TAB VIEW | "TAB VIEW" in title is internal naming, not user-facing |
| description | Y | Pull the docker image from Livepeer Docker Hub | OK |
| pageType | Y | instruction | Lowercase `pageType` vs `PageType` elsewhere |
| audience | Y | gateway | OK |
| purpose | Y | build | OK |
| status | Y | current | Should be `draft` given 4 fix-me markers |
| keywords | Y | 10 items | OK |
| sidebarTitle | N | -- | Missing |
| lastVerified | N | -- | Missing |
| og:image | Y | fallback.png | OK |

## Heading Score Table

No markdown headings. Content is structured via `<Step>` components only.

**Heading Score: 3/10** (Step titles provide structure but no SEO headings)

---

## Critical Issues

1. **4 x `<Danger>` fix-me markers** -- "fix me", "Fix me (onchain nicer)", "Fix code formatting", "Needs Review" are visible to readers
2. **Malformed Docker Hub link** -- `[Livepeer Docker Hub]("https://...")` has inner quotes that may break
3. **Commented-out Troubleshooting step** -- lines 296-298
4. **Unclosed comment nesting** -- line 287 has `{/* ... {/* ...` without proper closure

## Verdict

**NEEDS SIGNIFICANT WORK** -- This view has 4 visible `<Danger>` fix-me markers in production content, a malformed link, and commented-out sections. The content structure is good but the execution is incomplete. Mark status as `draft` until all fix-me markers are resolved.
