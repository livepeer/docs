# Review: gateways-vs-orchestrators.mdx

**Page**: `v2/about/guides/gateways-vs-orchestrators.mdx`
**URL**: `/v2/about/guides/gateways-vs-orchestrators`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

---

## CRITICAL CROSS-PAGE FINDING (read first)

This file is **near-identical** (differs only in 3 blank lines) to `v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx`. Both paths are registered in `docs.json` (lines 2240 and 2253). Two URLs serve the same content:
- `/v2/about/guides/gateways-vs-orchestrators`
- `/v2/about/resources/knowledge-hub/gateways-vs-orchestrators`

CRITICAL violation. See blocking decision section.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | yes | "Gateways Vs. Orchestrators: What's the Difference?" | FAIL | Title is a question — violates check 3.6 "no question in heading" (CLAUDE.md voice). Uses literal contrast label "X Vs Y" — violates 3.3. Smart-quote apostrophe. |
| sidebarTitle | yes | Gateways Vs. Orchestrators | FAIL | Literal contrast label (3.3). |
| description | yes | "Livepeer uses two core node types-**Gateways** and **Orchestrators**-that work together to provide real-time AI video compute at scale. Although closely connected, they serve entirely different purposes. This page breaks down how they differ and why both roles matter for a decentralized compute marketplace." | FAIL | Self-referential ("This page breaks down…") — violates 1.11/2.15. Uses US "decentralized" — violates 2.1. ~330 chars, exceeds 160 limit. Bold markdown inside frontmatter is fragile. Hyphens around bold tokens read as em-dash substitutes. |
| pageType | NO | – | FAIL | Required by 1.1; missing. |
| pageVariant | N/A | – | – | |
| audience | yes | community | PASS | |
| purpose | NO | – | FAIL | Required. |
| complexity | yes | intermediate | PASS | |
| lifecycleStage | yes | discover | PASS | |
| keywords | yes | [livepeer, about, livepeer network, gateways vs orchestrators, gateways, orchestrators, what, difference, types] | FAIL | "what", "difference", "types" are noise tokens not searcher-intent terms. Generic stems. |
| og:image block | yes | fallback.png | FAIL | Uses generic fallback rather than `/snippets/assets/media/og-images/en/about.png` per other About pages. og:image:alt also generic. |
| veracityStatus | NO | – | FAIL | Missing. |
| status | NO | – | FAIL | Missing. |
| lastVerified | NO | – | FAIL | Missing. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`, `veracityStatus`. |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field missing. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing. |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | |
| 1. Frontmatter | 1.6 | complexity | PASS | |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | |
| 1. Frontmatter | 1.10 | niche valid | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Self-reference, US English, >160 chars, bold inside frontmatter. |
| 1. Frontmatter | 1.12 | OG image complete | FAIL | Uses fallback rather than en/about.png. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Noise tokens ("what", "difference"). |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | |
| 2. Voice | 2.1 | UK English | FAIL | "decentralized" (frontmatter line 7), "decentralized" (description). |
| 2. Voice | 2.2 | Zero banned words | PASS | None of the banned-word list appear. |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | "This page breaks down" — variant of "This page covers/explains/walks you through" (banned per 2.3). |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | `This page [verb]` self-reference (description). |
| 2. Voice | 2.5 | Opening order correct | INFO | Body opens with "In brief: Gateways coordinate / Orchestrators compute" — outcome-first, that part is good. But description is self-referential. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Short paragraphs, fact-led. |
| 2. Voice | 2.7 | Audience register | PASS | Community register: concrete and accessible. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | None. |
| 2. Voice | 2.9 | No passive value statements | FAIL | "Performance guarantees", "Deterministic and verifiable output" are unquantified value claims under "They provide". |
| 2. Voice | 2.10 | No hedging openers | PASS | Body opens with the outcome. |
| 2. Voice | 2.11 | Terminology locked | PASS | Gateway/Orchestrator used correctly. |
| 2. Voice | 2.12 | No em-dashes | FAIL | Description uses hyphens around bold tokens that read as em-dash substitutes ("two core node types-**Gateways** and **Orchestrators**-that"). Body line 92: "expose external APIs directly-Gateways handle that". These are bare hyphens used where punctuation requires comma/colon. Repo policy is no em-dashes AND no broken-hyphen substitutes. |
| 2. Voice | 2.13 | Entity-led voice | INFO | Description leads with "Livepeer uses…" (good). Body opens with the table/callout. |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "This page breaks down…". |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No Broadcaster/Pool worker/Combined mode. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | INFO | "decentralized" is US — caught under 2.1. |
| 2. Voice | 2.19 | TERMINOLOGY-COLLATE | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "BYOC", "ComfyStream", "Daydream", "transcoding", "inference" used without inline definition or link to glossary. About-tab first-use discipline is strict. |
| 2. Voice | 2.22 | Terminology lock | N/A | |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Overview" 6/25 (banned-tier when standalone). "Gateway Responsibilities" 19/25. "Orchestrator Responsibilities" 19/25. |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Overview" appears as H2 (avoid-tier per check 3.2). |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | Title and sidebarTitle use "X Vs Y". Check 3.3 says "name the governing concept instead" — should be "Network roles" or "Gateway and orchestrator roles". |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Overview" lacks domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title is a question ("What's the Difference?"). CLAUDE.md voice rule: "No questions in headings." |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Overview" + question title — generic editorial. |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | pageType missing; cannot evaluate against type. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community register OK on H2s. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single comparison concept. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community member understand the difference between Gateway and Orchestrator." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Knowledge-hub journey position unclear given duplicate routes. |
| 4. Structure | 4.4 | No dead ends | FAIL | No closing handoff. No "next: see Orchestrators tab / Gateways tab". |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | No statement of what is not covered (e.g. payment mechanics, BYOC details). |
| 4. Structure | 4.7 | Info type per section | PASS | Conceptual/structural fits `orient` purpose. |
| 4. Structure | 4.8 | No content duplication | FAIL | **CRITICAL**: near-identical to `resources/knowledge-hub/gateways-vs-orchestrators.mdx` (3 blank lines difference). Also overlaps significantly with `v2/about/network/marketplace.mdx`-style role explanations elsewhere in About. |
| 4. Structure | 4.9 | Section orientation | N/A | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links to Orchestrators tab or Gateways tab. |
| 4. Structure | 4.11 | Discord test | INFO | Closer to passing than the other 4 stubs — provides a real comparison. But missing handoff and trade-offs. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~2.6KB; below the 5KB minimum for concept/resource. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-off, limitation, or failure condition named. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | pageType + purpose missing. |
| 4. Structure | 4.17 | Multi-audience handoff | N/A | |
| 5. Layout | 5.1 | Correct template | FAIL | Cannot evaluate — pageType missing. |
| 5. Layout | 5.2 | Required sections | FAIL | No Related Pages, no Next Step CTA, no introduction prose section ahead of components. |
| 5. Layout | 5.3 | Only approved components | FAIL | `<Callout>` is not in `docs-guide/catalog/components-catalog.mdx`. Catalog has `CustomCallout`, `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout` — bare `<Callout>` is unapproved. `<FlexContainer>` IS in catalog (wrappers). `<Icon>` is Mintlify built-in (acceptable). |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component mapping | INFO | Comparison table matches `factual` info type. Mermaid sequence diagram matches `conceptual`. Reasonable. |
| 5. Layout | 5.6 | MDX renders clean | INFO | NOT-TESTED via render verifier. `<Callout>` (unapproved) may produce a runtime error if no global Callout export is registered. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties | PASS | No hardcoded colours in MDX. |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | Component naming | PASS | PascalCase. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | No Header CTA, no introduction prose, no related pages. |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages / Next CTA | FAIL | Neither present. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block metadata | FAIL | The mermaid block lacks `icon` and `title` attributes. |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables StyledTable | FAIL | Uses raw markdown table at lines 59–62; should use `<StyledTable>` per check 5.23. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table. |
| 5. Layout | 5.25 | Max 1 major layout | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider used. Stray `---` markdown HR at line 31 and 77 instead. |
| 5. Layout | 5.27 | Mermaid governed colours | INFO | No explicit colour overrides; uses default theme. Acceptable. |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | FAIL | "Real-time AI inference", "Performance guarantees", "Deterministic and verifiable output" not flagged. BYOC/Daydream/ComfyStream as named pipelines not cited. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Comparison table is visible above the fold. |
| 5. Layout | 5.32 | Reference tables at end | FAIL | Comparison table appears before the responsibility prose; if treated as decision-support that is OK, but check 5.32 prefers reference tables at end. |
| 5. Layout | 5.33 | Drafts in workspace | INFO | No `status: draft`; assumed published. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Citable | FAIL | No citations for AI inference claims, BYOC, ComfyStream, Daydream pipeline claims. |
| 6. Veracity | 6.2 | Code tested | N/A | Mermaid is illustrative. |
| 6. Veracity | 6.3 | Deprecated API | N/A | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | Unverified claims absent of REVIEW flags. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing field. |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | First-use terms (BYOC, Daydream, ComfyStream) not linked to glossary. |
| 6. Veracity | 6.8 | Source staleness | INFO | Daydream/ComfyStream are evolving product names; staleness risk. |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No T1 sources cited. |
| 6. Veracity | 6.11 | Glossary match | NOT-TESTED | |
| 6. Veracity | 6.12 | Glossary verified | NOT-TESTED | |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2240. |
| 7. Navigation | 7.2 | Nav matches FS | FAIL | Same content at two routes. |
| 7. Navigation | 7.3 | Tab portal routes | N/A | |
| 7. Navigation | 7.4 | No orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | No exit. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No links to Gateways or Orchestrators tabs despite explicit role comparison. |
| 7. Navigation | 7.7 | File correct lane | FAIL | Two lanes simultaneously. |
| 7. Navigation | 7.8 | File naming | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in nav | PASS | ~2.6KB, above stub threshold but below 5KB concept minimum. |
| 7. Navigation | 7.11 | Resources sub-structure | FAIL | Duplicate placement violates 4-bucket layout. |
| 8. Links | 8.1 | Internal links resolve | PASS | No internal links to test. |
| 8. Links | 8.2 | External live | N/A | |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Bare `<Callout>` may fail to render if no global registration; Mintlify-built `Callout` is not a documented component. |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1 | Human sign-off | NOT-TESTED | No status field. |
| 9. Process | 9.2 | Decisions in registry | FAIL | |
| 9. Process | 9.3 | Gate prerequisites | FAIL | |
| 9. Process | 9.4 | Phase ordering | FAIL | |
| 9. Process | 9.5 | Findings before fixes | N/A | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Question has page | PASS | "What's the difference between Gateways and Orchestrators?" is answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | No graduation handoff. |
| 10. Completeness | 10.3 | Persona paths | FAIL | GPU Operator Candidate and Founder/Product Evaluator personas reach a wall. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |
| 10. Completeness | 10.5 | Self-containment | PASS | Single-page comparison stands alone. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 5–7 (description) | "two core node types-**Gateways** and **Orchestrators**-that work" | hyphen-as-em-dash | banned em-dash substitute (CLAUDE.md) | YES (2.12) |
| 5–7 | "This page breaks down how they differ" | `This page [verb]` | self-reference | YES (2.4) |
| 7 | "decentralized compute marketplace" | `decentralized` | US spelling | YES (2.1) |
| 92 | "expose external APIs directly-Gateways handle that" | hyphen-as-em-dash | banned (2.12) | YES |
| 1 (title) | "Gateways Vs. Orchestrators: What's the Difference?" | question in heading | banned (CLAUDE.md voice) | YES (3.6) |
| 1 + 3 | "Vs." in title and sidebarTitle | literal contrast label | banned (3.3) | YES |
| 90–93 | "Performance guarantees", "Deterministic and verifiable output" | unquantified value claim | flag (2.9) | YES |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Overview | 1 | 1 | 2 | 2 | 4 | 10/25 |
| Gateway Responsibilities | 4 | 4 | 4 | 4 | 3 | 19/25 |
| Orchestrator Responsibilities | 4 | 4 | 4 | 4 | 3 | 19/25 |

## Spelling/Typo Check

- "decentralized" — US spelling, should be "decentralised" (line 7).
- Smart-quote apostrophe in `What's` — acceptable but inconsistent with straight-quote convention elsewhere.

## Component Matrix

| Component | Used? | Approved? | Notes |
|-----------|-------|-----------|-------|
| Callout | Yes | NO | Not in `docs-guide/catalog/components-catalog.mdx`. Catalog has CustomCallout/ComingSoonCallout/PreviewCallout/ReviewCallout. Bare Callout may be Mintlify global; verify registration. |
| FlexContainer | Yes | YES | Listed in catalog (wrappers). |
| Icon | Yes | Mintlify built-in | Acceptable. |
| Mermaid sequenceDiagram | Yes | YES | Acceptable; lacks code block icon/title metadata (5.20). |
| Raw markdown table | Yes | NO | Should use `<StyledTable>` (5.23). |
| CustomDivider | No | – | Should be used; stray `---` HRs at line 31 and 77 instead (5.26). |

## Cross-Category Connections

```
Root Cause 1: Near-identical duplicate at two routes
Affects: Cat 4.8 + Cat 7.1 + Cat 7.2 + Cat 7.7 + Cat 7.11
Fix: Pick canonical route, delete other, redirect
```

```
Root Cause 2: Frontmatter incomplete and US-English/self-referential
Affects: Cat 1.1 + Cat 1.2 + Cat 1.4 + Cat 1.8 + Cat 1.11 + Cat 1.12 + Cat 2.1 + Cat 2.4 + Cat 2.15
Fix: Add pageType: concept, purpose: explain, veracityStatus: unverified, status: draft, lastVerified.
     Rewrite description: "Gateways coordinate jobs and Orchestrators perform the GPU work that powers Livepeer's decentralised AI video marketplace."
     Replace fallback OG image with /snippets/assets/media/og-images/en/about.png
```

```
Root Cause 3: Title is a question with literal contrast label
Affects: Cat 3.3 + Cat 3.6 + Cat 3.7
Fix: Rename to "Network role split" or "Gateway and orchestrator roles". Update both title and sidebarTitle. Also rename H2 "Overview" to "Role split" or remove and inline the prose.
```

```
Root Cause 4: Hyphen-as-em-dash misuse and US spelling
Affects: Cat 2.1 + Cat 2.12
Fix: Replace bare hyphens between words with comma/colon. "decentralized" → "decentralised".
```

```
Root Cause 5: Component approval and table styling
Affects: Cat 5.3 + Cat 5.20 + Cat 5.23 + Cat 5.26
Fix: Replace bare <Callout> with <CustomCallout>. Convert markdown table to <StyledTable>. Add icon+title to mermaid block. Replace stray --- with <CustomDivider />.
```

```
Root Cause 6: First-use terms undefined; unquantified value claims
Affects: Cat 2.9 + Cat 2.21 + Cat 6.1 + Cat 6.7
Fix: Link BYOC, Daydream, ComfyStream to glossary on first use. Replace "Performance guarantees" / "Deterministic and verifiable output" with concrete or sourced claims, or REVIEW-flag.
```

## Blocking Decision

```
Blocking Decision: Same as the other 4 — guides/ vs resources/knowledge-hub/
Note: this page is the strongest candidate of the 5 to actually live in published nav, but it still needs significant rework
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 4 | 8 | 2 | 4/12 |
| 2. Voice | 22 | 11 | 7 | 4 | 11/18 |
| 3. Headings | 10 | 2 | 8 | 0 | 2/10 |
| 4. Structure | 17 | 4 | 11 | 1 | 4/15 |
| 5. Layout | 34 | 7 | 11 | 16 | 7/18 |
| 6. Veracity | 12 | 1 | 5 | 6 | 1/6 |
| 7. Navigation | 11 | 3 | 7 | 1 | 3/10 |
| 8. Links | 6 | 2 | 0 | 4 | 2/2 (1 NOT-TESTED) |
| 9. Process | 6 | 0 | 3 | 2 | 0/3 (1 NOT-TESTED) |
| 10. Completeness | 6 | 2 | 4 | 0 | 2/6 |

**Overall**: ~36/110 applicable checks passed (~33%)
**Verdict**: REWRITE REQUIRED

**Critical issues**:
1. Near-identical duplicate at two docs.json routes
2. Frontmatter missing `pageType`, `purpose`, `veracityStatus`, `status`, `lastVerified`
3. Title is a question + literal contrast label ("X Vs Y") — violates 3.3 and CLAUDE.md voice rule
4. US English ("decentralized") and self-referential description ("This page breaks down…")
5. Hyphen-as-em-dash misuse (banned per repo policy)
6. Unapproved bare `<Callout>` component; raw markdown table should be `<StyledTable>`
7. Zero cross-tab graduation links despite literal premise being "which role am I?"
