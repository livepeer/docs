# Review: about-livepeer-all.mdx

**Page**: `v2/about/concepts0/about-livepeer-all.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | The Livepeer Open AI & Video Network | PASS | |
| sidebarTitle | Yes | About Livepeer | PASS | |
| description | Yes | "An overview of the Livepeer Protocol and Network - the substrate for real-time video and AI workloads." | PASS | Hyphen used as dash; near em-dash style. Within 160 chars. |
| pageType | Yes | concept | PASS | Canonical. |
| audience | Yes | community | PASS | Canonical. |
| purpose | Yes | explain | PASS | Canonical. |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | livepeer, about, livepeer protocol, protocol overview, protocol, overview | FAIL | Generic; duplicates of title; check 1.13 violation. |
| OG image block | Yes | Complete (5 fields) | PASS | |
| veracityStatus | No | -- | FAIL | Missing. |
| lastVerified | Yes | 2026-03-17 | INFO | Not on canonical 10-required list but commonly present. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | `veracityStatus` missing. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `explain`. |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | `beginner`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, under 160 chars. |
| 1. Frontmatter | 1.12 | OG image complete | PASS | 5 fields present. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `protocol`, `overview` — duplicates of title. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | FAIL | "decentralized" used (lines 89-90), "Livpeer" misspellings (multiple). |
| 2. Voice | 2.2 | Zero banned words | PASS | None of the banned-words list found. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None found. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | "This section should provide…" line 37 — `This [section] [verb]` self-reference. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Body opens with "# New IA" — heading not for readers; raw planning notes. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Entire body is a bulleted outline / planning skeleton with stub sentences ("Livepeer is …"). |
| 2. Voice | 2.7 | Audience register | FAIL | Not a register — page is unfinished outline content. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | Cannot assess on outline. |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims to assess. |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens directly. |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcasters" used as synonym for Gateways line 121. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found (uses hyphens). |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This section should provide..." (line 37). |
| 2. Voice | 2.14 | No hedging verbs | PASS | None in value claims. |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" appears (line 121); "Workers", "Verifiers" used as actor categories. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "Broadcasters" + "Gateways" both used. |
| 2. Voice | 2.18 | Spell check | FAIL | "Livpeer" (lines 39, 43, 64), "incentiv" (line 95, truncated), "Capablities" (line 115). |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Broadcaster non-canonical. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Outline contains both registers. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | DePIN, Active Set, LPT, Arbitrum, etc. mentioned without definition or link. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No tab lock. |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "New IA" (5/25 — internal label, fails Precision/Clarity); "Livepeer Definition" (12/25 generic); "Livepeer Whitepaper" (16/25); "Livepeer Evolution" (15/25); "Livepeer Capablities" (typo). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Livepeer Definition" uses weak "Definition"; uses `# Protocol` and `# Network` as bare structural labels. |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | "Protocol vs Network" appears in body and as heading concept. |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Most headings include "Livepeer". |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "New IA" is editorial scaffolding visible to readers. |
| 3. Headings | 3.8 | Per-pageType naming style | FAIL | Concept page should use governing-concept naming; this page is an outline. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Outline scaffolding, not community-register. |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Page contains an entire IA outline plus stub sections — many jobs. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot state a single concrete action. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Page is not in published nav (concepts0 is workspace). |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next CTA. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Outline blends scope of all sub-pages. |
| 4. Structure | 4.7 | Info type per section | FAIL | Mix of structural outlining and conceptual stubs. |
| 4. Structure | 4.8 | No content duplication | FAIL | Duplicates planned content of about-livepeer.mdx, livepeer-architecture.mdx, livepeer-capabilities.mdx, livepeer-principles.mdx. Also duplicates concepts/ canonical pages. |
| 4. Structure | 4.9 | Section orientation | FAIL | This is itself an unfinished orientation draft. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero links present. |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page would expose unfinished outline. |
| 4. Structure | 4.12 | Page size appropriate | INFO | ~6KB but content is outline scaffolding. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | "??" markers (lines 41, 73, 75) act as TODO. Commented-out blocks throughout. |
| 4. Structure | 4.14 | Flat layout | N/A | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Outline state. |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | None flagged. |
| 5. Layout | 5.1 | Correct template | FAIL | Does not follow concept template — is an outline. |
| 5. Layout | 5.2 | Required sections | FAIL | No structured Overview, Explanation, Comparison, Accordion, Related blocks. |
| 5. Layout | 5.3 | Only approved components | PASS | No components used (just markdown + imports unused). |
| 5. Layout | 5.4 | Avoided components absent | FAIL | "??" placeholders treated as TBD markers. |
| 5. Layout | 5.5 | Info type → component mapping | FAIL | Conceptual content is plain text. |
| 5. Layout | 5.6 | MDX renders clean | INFO | Imports declared but unused; should still render. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | N/A | |
| 5. Layout | 5.9 | Generated file banners | N/A | |
| 5. Layout | 5.10 | Component naming/import | FAIL | 9 imports, 0 used. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None used. |
| 5. Layout | 5.13 | Section ordering | FAIL | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | |
| 5. Layout | 5.16 | Related Pages footer | FAIL | Missing. |
| 5. Layout | 5.17 | Related Pages format | N/A | None present. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | None present. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | FAIL | Imports present but no section comments. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Stub claims unflagged. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | This IS a draft outline — should be in `_workspace/drafts/`, not `concepts0/`. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | FAIL | All assertions unsourced. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | None. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing field. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | N/A | |
| 6. Veracity | 6.9 | No open-ended research | FAIL | "??" markers, "Capabilities and use cases ??" — explicit open research. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | concepts0/ folder is alternative drafts; not in published nav. |
| 7. Navigation | 7.2 | Nav matches filesystem | N/A | |
| 7. Navigation | 7.3 | Tab entry routes to sections | N/A | |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Orphan from nav perspective. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Zero cross-tab links. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Outline draft in `v2/about/concepts0/` — should be in `_workspace/drafts/`. |
| 7. Navigation | 7.8 | File naming conventions | INFO | Uses `-all` suffix (non-canonical). |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | N/A | Not in nav. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | None present. |
| 8. Links | 8.2 | External links live | N/A | |
| 8. Links | 8.3 | Snippet imports resolve | INFO | Imports declared, none rendered. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | INFO | Should render despite outline. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | "??" markers throughout. |
| 9. Process | 9.1 | Human sign-off | FAIL | None recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | |
| 9. Process | 9.4 | Phase ordering respected | FAIL | |
| 9. Process | 9.5 | Findings before fixes | FAIL | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Every question has a page | FAIL | Outline lists all questions but answers none. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | |
| 10. Completeness | 10.5 | Self-containment | FAIL | |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 9 | 3 | 2 | 9/12 |
| 2. Voice | 22 | 4 | 14 | 4 | 4/18 |
| 3. Headings | 10 | 2 | 8 | 0 | 2/10 |
| 4. Structure | 17 | 0 | 16 | 1 | 0/16 |
| 5. Layout | 34 | 3 | 13 | 18 | 3/16 |
| 6. Veracity | 12 | 0 | 6 | 6 | 0/6 |
| 7. Navigation | 11 | 0 | 7 | 4 | 0/7 |
| 8. Links | 6 | 1 | 1 | 4 | 1/2 |
| 9. Process | 6 | 0 | 5 | 1 | 0/5 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Verdict**: REWRITE REQUIRED — this is unfinished outline content, not a publishable page.

**Critical issues**:
1. Page is an editorial outline (visible heading "# New IA"), not a reader-facing page. Belongs in `_workspace/drafts/` per check 5.33 / 7.7.
2. "Livpeer", "Capablities", "incentiv" — multiple typos and truncated sentences indicate draft state.
3. Uses deprecated "Broadcasters" term as synonym for Gateways.
4. "??" markers indicate open research questions; check 6.9 / 4.13 violation.
5. Massive duplication of content already in concepts/ canonical pages (about-livepeer, livepeer-stack, governance-and-economics, actors-and-participants).
