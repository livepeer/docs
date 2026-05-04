# Review: network-metrics.mdx

**Page**: `v2/about/guides/network-metrics.mdx`
**URL**: `/v2/about/guides/network-metrics`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

---

## CRITICAL CROSS-PAGE FINDING (read first)

This file is a **byte-identical duplicate** of `v2/about/resources/reference/network-metrics.mdx` (`diff` returns no output). Both paths are registered in `docs.json` (line 2237 and line 2267). Two URLs serve the same content:
- `/v2/about/guides/network-metrics`
- `/v2/about/resources/reference/network-metrics`

This is a CRITICAL Cat 4.8 (no content duplication), 7.1/7.2 (nav vs filesystem), and 7.7 (file in correct lane) violation. Per `_design/ia-design.md` `reference` content belongs under `resources/reference/`. The `guides/` placement appears to be an exploratory IA position. Resolve before any content work.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | yes | Network Metrics | PASS | |
| sidebarTitle | yes | Network Metrics | PASS | |
| description | yes | "Reference links for understanding Livepeer's current network activity, participation, and public analytics surfaces." | PASS | Subject-first, ~120 chars, UK English. |
| pageType | yes | reference | PASS | Canonical 7-type. |
| pageVariant | NO | – | INFO | Optional; not required for reference. |
| audience | yes | community | PASS | About-tab default. |
| purpose | yes | reference | PASS | Canonical 15-value. |
| complexity | yes | intermediate | PASS | |
| lifecycleStage | yes | discover | PASS | |
| keywords | yes | [livepeer, network metrics, analytics, explorer, dune, roadmap] | FAIL | Generic stems (`livepeer`); `dune` listed but no Dune dashboards in body — keyword/content drift. `roadmap` belongs on the roadmap page, not here. |
| og:image block | yes | en/about.png | PASS | All 5 fields present. |
| veracityStatus | NO | – | FAIL | Required by 1.8. |
| status | yes | draft | INFO | Honest reflection. |
| lastVerified | yes | "2026-04-05" | PASS | |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `reference`. |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | |
| 1. Frontmatter | 1.10 | niche valid | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | |
| 1. Frontmatter | 1.12 | OG image complete | PASS | |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | `dune` claimed but no Dune source linked; `roadmap` off-topic. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | "This page is being developed" + functional `Coming Soon` heading "What this page will eventually add". |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | `This page [verb]` self-reference at line 28. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with caveat about its own incompleteness, not the subject. |
| 2. Voice | 2.6 | Paragraph discipline | N/A | One paragraph + lists. |
| 2. Voice | 2.7 | Audience register | FAIL | Stub gives no community-register exemplar content. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims. |
| 2. Voice | 2.10 | No hedging openers | FAIL | First line is meta-disclaimer about being unfinished. |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opens "This page is being developed". |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | TERMINOLOGY-COLLATE | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | N/A | No specialised terms in body. |
| 2. Voice | 2.22 | Terminology lock | N/A | |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Primary sources to use now" 16/25; "What this page will eventually add" 9/25. |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "What this page will eventually add" embeds Coming-Soon semantics in heading form. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | INFO | "Primary sources" lacks `metric` anchor; "to use now" hints at it. |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Network Metrics" is concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "What this page will eventually add" is bureaucratic stub-speak. |
| 3. Headings | 3.8 | Per-pageType naming | INFO | reference pages prefer literal/findability naming; "Primary sources" passes that bar; the second heading does not. |
| 3. Headings | 3.9 | Per-audience register | PASS | Accessible. |
| 3. Headings | 3.10 | Domain-anchor applied | INFO | See 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community member find authoritative sources for current network metrics." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Position ambiguous due to duplicate routing. |
| 4. Structure | 4.4 | No dead ends | PASS | External + internal links provide next steps. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Not stated; the "what this will eventually add" section announces the missing scope rather than bounding it. |
| 4. Structure | 4.7 | Info type per section | PASS | factual/structural list matches `reference` purpose. |
| 4. Structure | 4.8 | No content duplication | FAIL | **CRITICAL**: byte-identical to `resources/reference/network-metrics.mdx`. |
| 4. Structure | 4.9 | Section orientation | N/A | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. Should graduate to Orchestrators (orchestrator-facing metrics) and Delegators (Explorer staking views). |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page returns 4 link bullets and a TODO list. Not a complete answer to "what are the current network metrics?" |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~1.7KB; under 2KB stub threshold. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | "What this page will eventually add" is an in-page TODO list. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. The honest "what each source can and cannot tell you" framing is precisely what the page promises but does not deliver. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Outcome not definable for a stub. |
| 4. Structure | 4.17 | Multi-audience handoff | N/A | |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard reference template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | reference pageType requires Reference section with substantive content; only 4-bullet stub. |
| 5. Layout | 5.3 | Only approved components | PASS | Only `CustomDivider`. |
| 5. Layout | 5.4 | Avoided components absent | FAIL | "What this page will eventually add" is functional `Coming Soon`. |
| 5. Layout | 5.5 | Info type → component mapping | FAIL | A reference link table/index should use `<StyledTable>` or `<Card>` with one-line per-source description, not flat bullets. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties | N/A | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | Component naming | PASS | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages / Next CTA | FAIL | Neither present. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables StyledTable | FAIL | A "Sources, what they measure, freshness" `<StyledTable>` is the natural form for this page; not present. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | One opening divider. |
| 5. Layout | 5.27 | Mermaid colours | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | `status: draft` content lives in published `v2/`. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Citable | N/A | No claims. |
| 6. Veracity | 6.2 | Code tested | N/A | |
| 6. Veracity | 6.3 | Deprecated API | N/A | |
| 6. Veracity | 6.4 | Numbers real | N/A | Page deliberately defers numbers to live sources — correct stance, but no numbers to check. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | INFO | Page is structurally designed to dodge staleness by linking live sources. Good intent. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Entire "What this page will eventually add" section is open-ended. |
| 6. Veracity | 6.10 | Source authority | INFO | Cites Explorer (T1) and protocol repo (T1). Positive, but no metric definitions. |
| 6. Veracity | 6.11 | Glossary match | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2237. |
| 7. Navigation | 7.2 | Nav matches FS | FAIL | Same content registered at two paths (line 2237 and 2267). |
| 7. Navigation | 7.3 | Tab portal routes | N/A | |
| 7. Navigation | 7.4 | No orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Stub blocks the journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No links to Orchestrators / Delegators / Explorer-aware tabs. |
| 7. Navigation | 7.7 | File correct lane | FAIL | Same file in two lanes (`guides/` and `resources/reference/`). |
| 7. Navigation | 7.8 | File naming | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | ~1.7KB, below 2KB minimum. |
| 7. Navigation | 7.11 | Resources sub-structure | FAIL | Duplicate placement violates 4-bucket layout (reference content should live in `reference/` only). |
| 8. Links | 8.1 | Internal links resolve | NOT-TESTED | 2 internal links: `/v2/about/resources/reference/technical-roadmap`, `/v2/about/resources/reference/livepeer-contract-addresses`. Both point to the `resources/reference/` lane (not the `guides/` mirror) — inconsistent with this page's own location. |
| 8. Links | 8.2 | External live | NOT-TESTED | 2 external: `explorer.livepeer.org`, `github.com/livepeer/protocol`. Both authoritative, expected live. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | `/snippets/components/elements/spacing/Divider.jsx` exists. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | PASS | Trivial JSX. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | "What this page will eventually add" is functional Coming Soon. |
| 9. Process | 9.1 | Human sign-off | FAIL | `status: draft`. |
| 9. Process | 9.2 | Decisions in registry | FAIL | Duplicate-routing decision not registered. |
| 9. Process | 9.3 | Gate prerequisites | FAIL | Stub shipped. |
| 9. Process | 9.4 | Phase ordering | FAIL | |
| 9. Process | 9.5 | Findings before fixes | N/A | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Question has page | FAIL | "What are the current network metrics?" — page does not answer; it points elsewhere. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Reader cannot orient on metrics from this page. |
| 10. Completeness | 10.3 | Persona paths | FAIL | Diligence Analyst persona blocked. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader must leave the tab to get any metric. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 28 | "This page is being developed as the reference surface for public metrics and analytics sources." | `This page [verb]` | self-reference | YES (2.4) |
| 28 | "It will link to live sources rather than hardcode volatile numbers" | `rather than` | banned phrase | YES (2.3) |
| 39 | "What this page will eventually add" | functional `Coming Soon` | conditional caveat as heading | YES (5.4, 8.6) |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Primary sources to use now | 4 | 3 | 3 | 4 | 2 | 16/25 |
| What this page will eventually add | 1 | 1 | 2 | 3 | 2 | 9/25 |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `reference`? | Notes |
|-----------|-------|------------------------------|-------|
| CustomDivider | Yes | Yes | Opening divider correctly placed. |
| StyledTable | No | Yes (recommended) | "Source, what it measures, freshness" table is the natural form. |
| Card / CardGroup | No | Optional | Card grid acceptable for navigational reference. |

## Cross-Category Connections

```
Root Cause 1: Byte-identical duplicate of v2/about/resources/reference/network-metrics.mdx
Affects: Cat 4.8 + Cat 7.1 + Cat 7.2 + Cat 7.7 + Cat 7.11
Fix: Pick canonical route (recommend resources/reference/ per 4-bucket IA), delete other, add redirect, remove from docs.json line 2237
```

```
Root Cause 2: Published stub (~1.7KB) with explicit TODO list embedded as a heading
Affects: Cat 2.3 + Cat 2.4 + Cat 2.5 + Cat 2.10 + Cat 2.13 + Cat 4.11 + Cat 4.12 + Cat 4.13 + Cat 5.4 + Cat 5.33 + Cat 7.10 + Cat 8.6 + Cat 10.1–10.6
Fix: Either (a) build the StyledTable of sources with metric definitions, freshness, and what each source cannot tell you, or (b) move to _workspace/drafts/ and remove from nav until ready
```

```
Root Cause 3: Missing veracityStatus
Affects: Cat 1.1 + Cat 1.8 + Cat 6.6
Fix: Add `veracityStatus: unverified`
```

```
Root Cause 4: Internal links point to resources/reference/ lane while the page itself sits in guides/
Affects: Cat 7.7 + Cat 8.1
Fix: Resolve via Root Cause 1 — once one canonical route survives, the link lane and the page lane match
```

## Blocking Decision

```
Blocking Decision: Same as the knowledge-hub duplicates — guides/ vs resources/reference/?
Recommendation: resources/reference/ is the correct lane for `pageType: reference` per IA design.
If resources/reference/ wins: delete guides/network-metrics.mdx, remove docs.json line 2237, add redirect from /v2/about/guides/network-metrics
If guides/ wins: delete resources/reference/network-metrics.mdx, remove docs.json line 2267, add redirect, and update internal links across the About tab that point to resources/reference/
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score (Pass / Pass+Fail) |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 11 | 2 | 2 (+1 INFO) | 11/13 |
| 2. Voice | 22 | 12 | 6 | 4 | 12/18 |
| 3. Headings | 10 | 4 | 3 | 0 (+3 INFO) | 4/7 |
| 4. Structure | 17 | 4 | 11 | 2 | 4/15 |
| 5. Layout | 34 | 5 | 8 | 21 | 5/13 |
| 6. Veracity | 12 | 0 | 2 | 8 (+2 INFO) | 0/2 |
| 7. Navigation | 11 | 3 | 7 | 1 | 3/10 |
| 8. Links | 6 | 1 | 1 | 1 (+2 NOT-TESTED, +1 PASS) | 2/3 |
| 9. Process | 6 | 0 | 4 | 2 | 0/4 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Overall**: ~41/91 applicable checks passed (~45%)
**Verdict**: REWRITE REQUIRED

**Critical issues**:
1. Byte-identical duplicate at two routes in docs.json (line 2237 + 2267)
2. Stub (~1.7KB) shipped to published nav with embedded "what this will eventually add" TODO list
3. Missing `veracityStatus`; opens with "This page is being developed" self-referential caveat
4. Promises "metric definitions" and "guidance on which sources" but delivers a 4-bullet link list — Discord test fails
5. Internal links target the `resources/reference/` mirror, leaving the `guides/` page inconsistent with itself
6. Zero cross-tab graduation despite metrics being a clear hand-off to Orchestrators (operator-facing) and Delegators (Explorer/staking views)
