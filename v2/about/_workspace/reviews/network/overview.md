# Review: overview.mdx

**Page**: `v2/about/network/overview.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `purpose` (canonical), `pageType` (uses deprecated `overview`), `audience` (uses deprecated `general`). Has title, sidebarTitle, description, keywords, OG block. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | FAIL | Uses `overview` which is a deprecated 12-type value. Should be `concept` + `pageVariant: overview`. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. Should be `overview` after migration. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | Uses `overview` which is a deprecated alias. Should be `orient`. |
| 1. Frontmatter | 1.5 | audience 7-token set | FAIL | Uses `general` which is not in canonical set {founder, builder, developer, gateway, orchestrator, delegator, community}. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `beginner` is valid. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover` is valid. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing entirely. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "An overview of the Livepeer network and its components" is vague, not subject-first. Uses "An overview of" filler. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with fallback path. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `network`, `overview`. Not searcher-intent-aligned. |
| 2. Voice | 2.1 | UK English | PASS | No US spellings detected. |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words found. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases found. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with a factual statement but body is incomplete, making the page purposeless. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Bullet-list heavy. Incomplete items: "Broadcast Sessions Manager:" with no description. "Orchestrator", "Transcoder", "AI Gateway", "AI Workers" bare. |
| 2. Voice | 2.7 | Audience register | FAIL | Mixes high-level overview ("Livepeer's core protocol") with code-level detail (struct names like `SegmentChans`, `Recipient`). Audience is `general` (deprecated). |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | Audience not canonical. |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims made. |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens with direct statement. |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "Broadcaster Node" which is deprecated. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. Uses en-dashes correctly in some compound terms. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Paragraphs start with system facts. |
| 2. Voice | 2.14 | No hedging verbs | PASS | No value claims present. |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "An overview of..." is a self-referential structure pattern. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster Node" used explicitly in Node Types. "Broadcaster" used in parenthetical at page top. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Uses "Broadcaster" alongside "Gateway" inconsistently. |
| 2. Voice | 2.18 | Spell check | FAIL | `LivpeerServer` (line 44) is a typo for `LivepeerServer`. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "Broadcaster Node" not in canonical glossary. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | No About-tab terminology applied. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "RTMP", "HLS", "SegmentChans", "Recipient", "RemoteTranscoderManager" used without definition or link. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No terminology lock for About tab. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "Network Components" (~14/25, generic), "Node Types" (~12/25, generic), "Core Components" (~12/25, generic). |
| 3. Headings | 3.2 | No banned/weak standalone terms | FAIL | "Core Components" is weak/generic. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Node Types" and "Core Components" lack domain anchoring. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name concepts, not examples. |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Livepeer Network Overview" includes "Overview" which is a banned/weak standalone term. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | Generic labels a junior writer would use. |
| 3. Headings | 3.8 | Per-pageType naming style | FAIL | pageType is deprecated; cannot assess against canonical naming style. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience is `general` (deprecated). Cannot assess register. |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | Same as 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Tries to be high-level overview AND code-level component reference simultaneously. Two jobs. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot state "This page lets the [AUDIENCE] [concrete action]" because audience/purpose use deprecated values. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | First page in network section (per docs.json). Next is actors. No transition or handoff. |
| 4. Structure | 4.4 | No dead ends | FAIL | Page ends abruptly after incomplete bullet list. No next step, no Related Pages. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | No scope definition. |
| 4. Structure | 4.7 | Info type per section correct | FAIL | Mixes conceptual narrative with technical reference (struct names) in same sections. |
| 4. Structure | 4.8 | No content duplication | PASS | No obvious duplication with adjacent pages. |
| 4. Structure | 4.9 | Section orientation page | PASS | This IS the section orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this on Discord would give an incomplete, confusing answer. Trails off mid-content. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | Under 2KB substantive content. Stub. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None found. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders for this page. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs, limitations, or failure conditions. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Cannot fill AUDIENCE, PURPOSE, MODE with canonical values. |
| 5. Layout | 5.1 | Correct template | FAIL | No template applied. Raw bullet lists. |
| 5. Layout | 5.2 | Required sections | FAIL | Missing structured overview sections expected for a concept/overview page. |
| 5. Layout | 5.3 | Only approved components | PASS | No unapproved components (none used at all). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None present. |
| 5. Layout | 5.5 | Info type -> component mapping | FAIL | No components used. Bare bullet lists for what should be structured content. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Simple markdown, renders without error. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `pageType: overview` (deprecated 12-type), `purpose: overview` (deprecated alias), `audience: general` (deprecated). |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow any gold-standard template. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No section blocks used. |
| 5. Layout | 5.13 | Section ordering | FAIL | No recognisable section ordering pattern. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view content. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data to import. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | No Related Pages or Next Step CTA. |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages section. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables. |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | None used. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider present. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Unverified implementation details (struct names, internal components) not flagged with REVIEW. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Stub-quality content in live page path, not _workspace/drafts/. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | Claims about internal structs (SegmentChans, Recipient, RemoteTranscoderManager) need go-livepeer source. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | Implementation detail claims not flagged. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. Content is unverified. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references. |
| 6. Veracity | 6.8 | Source staleness | FAIL | Code-level component references (struct names) may be stale. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Incomplete bullet items ("Broadcast Sessions Manager:", "Orchestrator", "Transcoder") suggest unfinished research. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources cited. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No definitions. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at `v2/about/network/overview`. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists at expected path. |
| 7. Navigation | 7.3 | Tab entry routes to sections | FAIL | Does not link to any network sub-pages. Should link to all sibling pages. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from nav. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Incomplete page breaks the journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No cross-tab links. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Stub-quality content should be in _workspace/drafts/, not published. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `overview.mdx` is acceptable. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | Stub (<2KB) in published nav. |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section. |
| 8. Links | 8.1 | Internal links resolve | N/A | No internal links present. |
| 8. Links | 8.2 | External links live | N/A | No external links. |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | No images. |
| 8. Links | 8.5 | Page renders | PASS | Simple content renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | No consuming decisions documented. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate completion. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of phase ordering. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured review evidence. |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route. |
| 10. Completeness | 10.1 | Every question has a page | FAIL | This page itself cannot answer its own question. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Journey breaks here. |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | Dead end with no links. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | No scope defined. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Incomplete content cannot self-contain. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 3 | 7 | 3/10 |
| 2. Voice | 19 | 8 | 11 | 8/19 |
| 3. Headings | 10 | 2 | 8 | 2/10 |
| 4. Structure | 16 | 4 | 12 | 4/16 |
| 5. Layout | 14 | 4 | 10 | 4/14 |
| 6. Veracity | 7 | 0 | 7 | 0/7 |
| 7. Navigation | 8 | 4 | 4 | 4/8 |
| 8. Links | 2 | 2 | 0 | 2/2 |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 5 | 0 | 5 | 0/5 |

**Overall**: 27/96 checks passed (applicable checks only)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Stub page (<2KB) in published nav with incomplete bullet lists and trailing-off content
2. All frontmatter taxonomy values use deprecated schemas (pageType: overview, purpose: overview, audience: general)
3. Uses deprecated term "Broadcaster Node"; mixes code-level implementation detail with high-level overview; typo "LivpeerServer"
