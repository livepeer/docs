# Review: interfaces.mdx

**Page**: `v2/about/network/interfaces.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Has title, sidebarTitle, description, pageType, audience, purpose, keywords, OG block, lifecycleStage, complexity, lastVerified. Missing `veracityStatus`. `audience` uses deprecated `general`. `purpose` uses deprecated `concept`. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `concept` is valid. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | Uses `concept` which is a deprecated alias. Should be `explain` or `reference`. |
| 1. Frontmatter | 1.5 | audience 7-token set | FAIL | Uses `general` which is deprecated. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `intermediate` is valid. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover` is valid. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "How to interact with the Livepeer Network and protocol: REST and gRPC APIs, GraphQL, JS SDK, CLI, and smart contract interfaces." is subject-first, specific, under 160 chars. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with fallback. |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Specific and relevant: `API`, `SDK`, `CLI`, `GraphQL`, `REST`, `gRPC`. Searcher-intent-aligned. |
| 2. Voice | 2.1 | UK English | PASS | No US spellings. "decentralised" used correctly. |
| 2. Voice | 2.2 | Zero banned words | PASS | None found. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None found. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None found. |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with "Livepeer exposes multiple access interfaces..." -- factual, entity-led. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Clear, single-purpose paragraphs. |
| 2. Voice | 2.7 | Audience register | FAIL | Mix of developer-level detail (API endpoints, code examples) and general framing. Page reads more as `developer` audience than `general`. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | Audience deprecated. |
| 2. Voice | 2.9 | No passive value statements | PASS | No unquantified value claims. |
| 2. Voice | 2.10 | No hedging openers | PASS | Direct opener. |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses consistent terminology. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Every section opens with entity. |
| 2. Voice | 2.14 | No hedging verbs | PASS | No hedging verbs in claims. |
| 2. Voice | 2.15 | Description not self-referential | PASS | "How to interact with..." is task-oriented, not self-referential. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No deprecated terms. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Terms used consistently. |
| 2. Voice | 2.18 | Spell check | PASS | No errors. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Terms appear canonical. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | Uses About-tab appropriate terminology. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "gRPC", "GraphQL" used without definition for general audience. SDK abbreviation not expanded. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No lock for About tab. |
| 3. Headings | 3.1 | Heading score >= 20/25 | PASS | "Interface categories" (20/25), "REST API (Livepeer Studio)" (22/25), "gRPC API (Gateway nodes)" (22/25), "GraphQL Explorer API" (22/25), "JS SDK" (20/25), "CLI" (18/25, slightly generic), "Smart contract interfaces" (22/25), "Workflow examples" (18/25). Average ~21. |
| 3. Headings | 3.2 | No banned/weak standalone terms | FAIL | "See also" is an avoid-tier term (line 166). |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Headings include domain context (Livepeer Studio, Gateway nodes, etc.). |
| 3. Headings | 3.5 | Names concept not examples | PASS | Names interfaces, not specific tools. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Network Interfaces" is 2 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Strong, specific headings throughout. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | `concept` page with governing-concept naming. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Headings use developer register (API, SDK, CLI) for a `general` audience page. |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Applied throughout. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: reference all Livepeer interfaces. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the [developer] find and understand all Livepeer network interfaces." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Previous is job-lifecycle. Interfaces logically follows. |
| 4. Structure | 4.4 | No dead ends | PASS | "See also" and "References" sections provide exit paths. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No prerequisites. Assumes knowledge of REST, gRPC, GraphQL. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Scope is clear from structure: interfaces only, not deep usage. |
| 4. Structure | 4.7 | Info type per section correct | PASS | Reference-style content throughout, appropriate for interfaces catalogue. |
| 4. Structure | 4.8 | No content duplication | PASS | No duplication with adjacent pages. |
| 4. Structure | 4.9 | Section orientation page | N/A | Not an orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only links within About tab. Should link to developer/gateway tab resources. |
| 4. Structure | 4.11 | Discord test | PASS | Linking this page answers "what interfaces does Livepeer have?" completely. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~5.8KB. Good size for concept/reference hybrid. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs between interface choices. Missing: when to use REST vs gRPC, SDK vs direct API. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | AUDIENCE and PURPOSE use deprecated values. |
| 5. Layout | 5.1 | Correct template | FAIL | No formal template applied, but structure is close to concept/reference. |
| 5. Layout | 5.2 | Required sections | PASS | Has overview, structured content, see also. |
| 5. Layout | 5.3 | Only approved components | PASS | Uses DynamicTable, GotoLink -- both approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type -> component mapping | PASS | DynamicTable for reference data is correct. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders without error. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general` (deprecated), `purpose: concept` (deprecated alias). |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase imports, correct paths. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not formally follow gold-standard concept template. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Not using section blocks. |
| 5. Layout | 5.13 | Section ordering | PASS | Logical ordering: overview table, then each interface, then examples, then see also. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view. |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | API endpoint URLs hardcoded in prose. Contract names hardcoded. Should import from data files. |
| 5. Layout | 5.16 | Related Pages footer | PASS | "See also" section present with links. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses plain markdown links, not Card/Columns format. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | FAIL | Code blocks have `icon="terminal"` but some lack `title` attribute. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No navigation cards. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses DynamicTable, not StyledTable. |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 3 DynamicTable instances on the page. Exceeds limit of 1-2. |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | 3 DynamicTables (major layout elements). |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider present. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | PASS | Components imported first, correct order. |
| 5. Layout | 5.29 | Media placeholders | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | External links (gateway.proto, JS SDK repo) and API endpoints not flagged for freshness. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content. |
| 5. Layout | 5.32 | Reference tables at end | FAIL | Tables appear throughout, not at end. First table is at beginning. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Published content. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | API endpoint `https://livepeer.studio/api`, GraphQL endpoint, and gateway.proto path need verification. |
| 6. Veracity | 6.2 | Code/commands tested | FAIL | Code examples (npm install, createStream, curl) not verified against current SDK/API. |
| 6. Veracity | 6.3 | No deprecated API usage | FAIL | `require('@livepeer/sdk')` may be deprecated; current SDK may use different import. JS SDK repo path needs check. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | No REVIEW flags despite multiple unverified claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. Should be `unverified`. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references. |
| 6. Veracity | 6.8 | Source staleness | FAIL | SDK versions, API endpoints, proto file paths all have staleness risk. |
| 6. Veracity | 6.9 | No open-ended research | PASS | No open-ended items. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | API endpoints and code examples not cited against T1 sources. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No definitions. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at `v2/about/network/interfaces`. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes to sections | N/A | Not an entry page. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Good standalone reference. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No cross-tab links to developer or gateway tabs. |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `interfaces.mdx` acceptable. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 5.8KB, not a stub. |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides. |
| 8. Links | 8.1 | Internal links resolve | PASS | Internal links to `../protocol/blockchain-contracts`, `./technical-architecture`, etc. appear valid. |
| 8. Links | 8.2 | External links live | FAIL | External links need verification: `gateway.proto` path, `livepeer.studio/docs`, JS SDK repo, Explorer GraphQL. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | DynamicTable and GotoLink imports resolve. |
| 8. Links | 8.4 | Images load | N/A | No images. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None documented. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured review. |
| 9. Process | 9.6 | Feedback routed | N/A | Nothing to route. |
| 10. Completeness | 10.1 | Every question has a page | PASS | Interfaces question well answered. |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Comprehensive interface catalogue. |
| 10. Completeness | 10.3 | All persona paths unblocked | PASS | Good exit links to related pages. |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Clear scope: interfaces only. |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained reference. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 5 | 5 | 5/10 |
| 2. Voice | 19 | 16 | 3 | 16/19 |
| 3. Headings | 10 | 7 | 3 | 7/10 |
| 4. Structure | 14 | 10 | 4 | 10/14 |
| 5. Layout | 22 | 9 | 13 | 9/22 |
| 6. Veracity | 9 | 1 | 8 | 1/9 |
| 7. Navigation | 8 | 6 | 2 | 6/8 |
| 8. Links | 5 | 4 | 1 | 4/5 |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 5 | 5 | 0 | 5/5 |

**Overall**: 63/107 checks passed (applicable checks only)
**Verdict**: NEEDS WORK
**Critical issues**:
1. Veracity failures: API endpoints, code examples, and external links all unverified. Missing veracityStatus and REVIEW flags
2. Layout: 3 DynamicTables exceeds limit; missing CustomDivider; Related Pages not in Card format
3. Deprecated frontmatter values (audience: general, purpose: concept); missing veracityStatus
