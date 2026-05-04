# Review: contributor-orientation.mdx

**Page**: `v2/about/guides/contributor-orientation.mdx`
**URL**: `/v2/about/guides/contributor-orientation`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

---

## CRITICAL CROSS-PAGE FINDING (read first)

This file is a **byte-identical duplicate** of `v2/about/resources/knowledge-hub/contributor-orientation.mdx`. Both paths are registered in `docs.json` (lines 2239 and 2255). Two URLs serve the same content:
- `/v2/about/guides/contributor-orientation`
- `/v2/about/resources/knowledge-hub/contributor-orientation`

This is a CRITICAL Category 4.8 (no content duplication), 7.1/7.2 (nav vs filesystem), and 7.7 (file in correct lane) violation. One copy must be canonical, the other deleted (or made a redirect). The canonical IA per `_design/ia-design.md` puts knowledge-hub reading paths under `resources/knowledge-hub/`. The `guides/` location appears to be the newer About-tab IA position. Resolve before any content work.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | yes | Contributor Orientation | PASS | |
| sidebarTitle | yes | Contributor Orientation | PASS | |
| description | yes | "A curated About reading path for technical contributors, researchers, and protocol-adjacent builders." | PASS | Subject-first, ≤160 chars, UK English. |
| pageType | yes | resource | PASS | Canonical 7-type. |
| pageVariant | yes | knowledge-hub | PASS | Canonical variant. |
| audience | yes | community | PASS | About-tab default. |
| purpose | yes | orient | PASS | Canonical 15-value. |
| complexity | yes | intermediate | PASS | |
| lifecycleStage | yes | discover | PASS | |
| keywords | yes | [livepeer, contributor, orientation, protocol, network, oss] | FAIL | Generic terms (`livepeer`, `protocol`, `network`); not searcher-intent-aligned per check 1.13. |
| og:image block | yes | en/about.png | PASS | All 5 OG fields present. |
| veracityStatus | NO | – | FAIL | Required by 1.8; missing entirely. |
| status | yes | draft | INFO | Honest reflection of state. |
| lastVerified | yes | 2026-04-05 | PASS | |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `resource`. |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `knowledge-hub`. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `orient`. |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `community`. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic stems. Should include "livepeer protocol contributor", "go-livepeer development". |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | "This page is being developed" is a self-referential opener variant; "What this guide will eventually add" is functionally equivalent to TODO/coming-soon language. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | Opens with `This page [verb]` self-reference at line 29. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with caveat about its own incompleteness, not the subject. |
| 2. Voice | 2.6 | Paragraph discipline | N/A | Only one paragraph of body prose; mostly list. |
| 2. Voice | 2.7 | Audience register | FAIL | Cannot judge register on a stub. The community-register exemplar requires substantive content. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | None. |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims at all. |
| 2. Voice | 2.10 | No hedging openers | FAIL | First line is a meta-disclaimer about being unfinished. |
| 2. Voice | 2.11 | Terminology locked | PASS | No terminology to check. |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opens "This page is being developed". |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | N/A | No specialised terms used in body. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Recommended reading order" 18/25; "What this guide will eventually add" 9/25 (announces incompleteness). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "What this guide will eventually add" embeds "Next Steps" semantics in worse form. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Recommended reading order" lacks domain anchor (reading order for what?). |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Contributor Orientation" is concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "What this guide will eventually add" is bureaucratic stub-speak. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | resource pages use orientation-friendly naming. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Headings give no community-register signal. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | See 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Scope is single. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community member orient as a contributor by sequencing the right About pages." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Cannot validate; the duplicate-route problem makes the journey position ambiguous. |
| 4. Structure | 4.4 | No dead ends | PASS | Reading list provides next steps. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Not stated; the "what this guide will eventually add" section announces the missing scope. |
| 4. Structure | 4.7 | Info type per section correct | PASS | structural list matches `orient` purpose. |
| 4. Structure | 4.8 | No content duplication | FAIL | **CRITICAL**: byte-identical to `resources/knowledge-hub/contributor-orientation.mdx`. |
| 4. Structure | 4.9 | Section orientation page | N/A | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. Should graduate readers to Developers / Orchestrators. |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page gives a stub with TODO list. Not a complete answer. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~1.1KB; under 2KB stub threshold. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | "What this guide will eventually add" is an in-page TODO list. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Outcome not definable for a stub. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | N/A | |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard resource template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | resource pageType requires Overview or H2 substantive content; only stub list present. |
| 5. Layout | 5.3 | Only approved components | PASS | Only `CustomDivider`. |
| 5. Layout | 5.4 | Avoided components absent | FAIL | "What this guide will eventually add" is functional equivalent of `Coming Soon`. |
| 5. Layout | 5.5 | Info type → component mapping | FAIL | A reading-path resource should use `<Card>` / `<Steps>` for the curated path, not a flat ordered list. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | N/A | |
| 5. Layout | 5.9 | Generated file banners | N/A | |
| 5. Layout | 5.10 | Component naming/import | PASS | Root-absolute import path. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks from library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | |
| 5. Layout | 5.16 | Related Pages footer / Next Step CTA | FAIL | Neither Related Pages footer nor Next Step CTA present. |
| 5. Layout | 5.17 | Related Pages format | N/A | None present. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps; if rebuilt should use StyledSteps. |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | One opening divider after import. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Stub `status: draft` content lives in published `v2/`; should be in `_workspace/drafts/`. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | N/A | No claims. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | |
| 6. Veracity | 6.4 | Numbers are real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags for unverified | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing; `status: draft` is honest but the field is required. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | N/A | |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Entire "What this guide will eventually add" section is open-ended. |
| 6. Veracity | 6.10 | Source authority tiers | N/A | |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Line 2239. |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | Same content registered at two paths (line 2239 and 2255). |
| 7. Navigation | 7.3 | Tab portal routes to sections | N/A | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Stub blocks the journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No links to Developers/Orchestrators/Solutions. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Either `guides/` or `knowledge-hub/` must lose this file; both currently published. |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | Page is ~1.1KB, well under 2KB minimum. |
| 7. Navigation | 7.11 | Resources sub-structure | FAIL | The duplicate placement violates the canonical 4-bucket layout. |
| 8. Links | 8.1 | Internal links resolve | NOT-TESTED | 6 internal links: `/v2/about/concepts/mental-model`, `/v2/about/network/technical-architecture`, `/v2/about/network/job-lifecycle`, `/v2/about/protocol/overview`, `/v2/about/protocol/blockchain-contracts`, `/v2/about/protocol/design-philosophy`. Several appear suspect against current concepts/protocol IA reorganisation (e.g. `mental-model`, `technical-architecture`, `design-philosophy`). |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | `/snippets/components/elements/spacing/Divider.jsx` exists. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | PASS | Trivial JSX. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | "What this guide will eventually add" is functionally Coming Soon. |
| 9. Process | 9.1 | Human sign-off | FAIL | `status: draft`. |
| 9. Process | 9.2 | Decisions in registry | FAIL | The duplicate-routing decision is not registered. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | Stub shipped. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | |
| 9. Process | 9.5 | Findings before fixes | N/A | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Every question has a page | FAIL | "How do I contribute?" — page does not answer it; list of links only. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Reading list with no annotations is not a journey. |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | OSS Contributor persona blocked by stub. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | |
| 10. Completeness | 10.5 | Self-containment | FAIL | |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | No graduation to Developers tab. |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 29 | "This page is being developed as the contributor-focused reading path through the About section." | `This page [verb]` | self-reference | YES (check 2.4) |
| 42 | "What this guide will eventually add" | functional `Coming Soon` | conditional caveat made into a heading | YES (check 5.4, 8.6) |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Recommended reading order | 4 | 3 | 4 | 4 | 3 | 18/25 |
| What this guide will eventually add | 1 | 1 | 2 | 3 | 2 | 9/25 |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `resource`? | Notes |
|-----------|-------|----------------------------|-------|
| CustomDivider | Yes | Yes | Opening divider correctly placed. |
| Card / CardGroup | No | Yes (recommended) | Reading-path resource should render as Cards or StyledSteps. |
| StyledSteps | No | Yes (recommended) | Better fit for a curated 6-step reading path. |

## Cross-Category Connections

```
Root Cause 1: File is a byte-identical duplicate of v2/about/resources/knowledge-hub/contributor-orientation.mdx
Affects: Cat 4.8 + Cat 7.1 + Cat 7.2 + Cat 7.7 + Cat 7.11
Fix: Decide which route is canonical (recommend `guides/` per current About IA), delete the other, add a redirect
```

```
Root Cause 2: Page is a published stub (~1.1KB) with explicit "what this will eventually add" TODO list
Affects: Cat 2.3 + Cat 2.5 + Cat 2.10 + Cat 2.13 + Cat 4.11 + Cat 4.12 + Cat 4.13 + Cat 5.4 + Cat 5.33 + Cat 7.10 + Cat 8.6 + Cat 10.2
Fix: Either (a) write the full page, or (b) move to _workspace/drafts/ and remove from docs.json until ready
```

```
Root Cause 3: Missing veracityStatus frontmatter
Affects: Cat 1.1 + Cat 1.8 + Cat 6.6
Fix: Add `veracityStatus: unverified` (honest reflection of draft state)
```

## Blocking Decision

```
Blocking Decision: Which directory is canonical for these reading paths — guides/ or resources/knowledge-hub/?
Options: [A] guides/ (newer About IA position) / [B] resources/knowledge-hub/ (per ia-design.md 4-bucket layout)
If A: delete resources/knowledge-hub/contributor-orientation.mdx, add redirect, remove from docs.json line 2255
If B: delete guides/contributor-orientation.mdx, add redirect, remove from docs.json line 2239
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score (Pass / Pass+Fail) |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 11 | 2 | 2 | 11/13 |
| 2. Voice | 22 | 12 | 6 | 4 | 12/18 |
| 3. Headings | 10 | 3 | 7 | 0 | 3/10 |
| 4. Structure | 17 | 4 | 11 | 2 | 4/15 |
| 5. Layout | 34 | 5 | 7 | 22 | 5/12 |
| 6. Veracity | 12 | 0 | 2 | 10 | 0/2 |
| 7. Navigation | 11 | 3 | 7 | 1 | 3/10 |
| 8. Links | 6 | 2 | 1 | 2 | 2/3 (1 NOT-TESTED) |
| 9. Process | 6 | 0 | 4 | 2 | 0/4 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Overall**: 40/93 applicable checks passed (~43%)
**Verdict**: REWRITE REQUIRED

**Critical issues**:
1. Byte-identical duplicate at two routes in docs.json (CRITICAL — IA, navigation, content duplication)
2. Stub content (~1.1KB) shipped to published nav with "what this will eventually add" TODO list
3. Missing `veracityStatus`; opens with "This page is being developed" self-referential caveat
4. Zero cross-tab graduation links to Developers/Orchestrators despite being the OSS Contributor entry point
5. Internal links to concepts/protocol pages (`mental-model`, `technical-architecture`, `design-philosophy`) need verification against current IA reorganisation
