# Review: actors.mdx

**Page**: `v2/about/network/actors.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Has title, sidebarTitle, description, pageType, audience, purpose, keywords, OG image, lifecycleStage, complexity. Missing `veracityStatus`. `audience` uses deprecated `general`. `purpose` uses deprecated `concept`. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `concept` is valid. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | Uses `concept` which is a deprecated alias. Should be `explain`. |
| 1. Frontmatter | 1.5 | audience 7-token set | FAIL | Uses `general` which is deprecated. Should be `community` or another canonical token. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `intermediate` is valid. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover` is valid. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing entirely. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Who participates in Livepeer, what each role does, and how roles interact." is subject-first, under 160 chars. |
| 1. Frontmatter | 1.12 | OG image block complete | FAIL | Only `og:image` present. Missing `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `actors`. Some reasonable: `gateway`, `orchestrator`, `delegator`. Missing intent-aligned keywords like "livepeer network participants", "livepeer actor roles". |
| 2. Voice | 2.1 | UK English | PASS | No US spellings detected. |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with orphaned fragment: "and performs actions defined by the system." This is a broken sentence with no subject. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | "Core Actors" section is a wall of text with no paragraph breaks. Multiple concepts crammed into single blocks. |
| 2. Voice | 2.7 | Audience register | FAIL | Mix of technical detail (TicketBroker contract, NVENC/NVDEC, Confluence migration) and general-audience framing. Register inconsistent. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | Audience uses deprecated `general`. |
| 2. Voice | 2.9 | No passive value statements | PASS | No unquantified value claims. |
| 2. Voice | 2.10 | No hedging openers | FAIL | Page opens with an orphaned fragment, not a hedge but equally problematic. |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "Broadcasters" as synonym for Gateways (line 40: "these were called Broadcasters pre-Confluence"). While contextually explaining history, the deprecated term appears prominently. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. Uses en-dashes appropriately. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opens with "and performs actions" which has no entity subject. |
| 2. Voice | 2.14 | No hedging verbs | PASS | No hedging verbs in value claims. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Description does not self-reference. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" used multiple times. "Transcoders now refer simply to the GPU instances" uses deprecated framing. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "Broadcasters/Clients" used alongside "Gateways". Should use Gateway consistently. |
| 2. Voice | 2.18 | Spell check | PASS | No spelling errors found. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "Broadcaster" is not canonical. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Uses code-level terms (TicketBroker, BondingManager) without About-tab register. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | Terms like "NVENC/NVDEC", "Confluence", "TicketBroker", "feeShare", "rewardShare" used without definition or link. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No lock for About tab. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "Core Actors" (16/25, generic), "Role Summary" (14/25, generic), "Interaction Pattern" (18/25, reasonable), "Actor Pages" (14/25, generic), "Why Role Separation Matters" (22/25, strong), "Developers And Applications" (16/25, mixed case). |
| 3. Headings | 3.2 | No banned/weak standalone terms | FAIL | "Overview" appears in title. "Summary" in "Role Summary" is an avoid-tier term. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Core Actors", "Role Summary", "Interaction Pattern" lack domain anchoring. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name concepts. |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Actors Overview" contains "Overview" which is a weak/avoid-tier term. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Core Actors", "Role Summary", "Actor Pages" are bureaucratic labels. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | `concept` pages use governing-concept naming. Headings mostly name concepts. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated. Register cannot be assessed. |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | Multiple headings lack domain anchor. |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Tries to be both an overview of all actors AND a detailed description of each role. Two jobs. The "Core Actors" wall of text duplicates the individual actor profile pages. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | "This page lets the [community] understand which actors participate in Livepeer" -- partially works but the Core Actors wall of text exceeds this scope. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Previous is overview (a stub). Next is actor profiles. The detailed Core Actors content duplicates the profile pages rather than setting up the transition. |
| 4. Structure | 4.4 | No dead ends | PASS | Has Related Pages section with links to demand-side, supply-side, job-lifecycle. Actor Pages section links to profiles. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. Reader arrives from a stub overview page. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Not clear where actor overview ends and detailed actor profiles begin. |
| 4. Structure | 4.7 | Info type per section correct | FAIL | Core Actors mixes conceptual overview with technical reference (contract names, CLI operations). |
| 4. Structure | 4.8 | No content duplication | FAIL | Core Actors section extensively duplicates content from the individual actor profile pages (delegators.mdx, gateways.mdx, orchestrators.mdx). |
| 4. Structure | 4.9 | Section orientation page | PASS | Functions as orientation for the actor profiles sub-section. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only one cross-tab link: `/v2/orchestrators/portal`. Should have more (delegators tab, gateways tab). |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page gives an incomplete answer. The Core Actors wall of text is research notes, not polished docs. Orphaned opening fragment. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~3.5KB. Above 2KB minimum. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None found. |
| 4. Structure | 4.14 | Flat layout | PASS | Uses sub-folder for actor profiles which is appropriate. |
| 4. Structure | 4.15 | Trade-offs present | PASS | "Why Role Separation Matters" section implies trade-offs (specialisation vs integration). |
| 4. Structure | 4.16 | Content pass context completable | FAIL | AUDIENCE and PURPOSE use deprecated values. |
| 5. Layout | 5.1 | Correct template | FAIL | No template applied. Mix of wall-of-text and bullet lists. |
| 5. Layout | 5.2 | Required sections | FAIL | Missing structured concept page sections. No clear introduction section. |
| 5. Layout | 5.3 | Only approved components | PASS | No unapproved components (none used). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None present. |
| 5. Layout | 5.5 | Info type -> component mapping | FAIL | No components used. Wall of text for what should use Accordions or Cards for actor summaries. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders without error. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general` (deprecated), `purpose: concept` (deprecated alias). |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept template. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No section blocks used. |
| 5. Layout | 5.13 | Section ordering | FAIL | No recognisable concept page ordering. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view content. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data to import. |
| 5. Layout | 5.16 | Related Pages footer | PASS | "Related Pages" section present with links. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses plain markdown links, not Card/Columns format. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables. |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | None. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider present. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Multiple unverified technical claims (Confluence migration, TicketBroker behaviour, NVENC/NVDEC) not flagged. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Wall-of-text research notes in the Core Actors section belong in _workspace/drafts/, not live page. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | Claims about NVENC/NVDEC, TicketBroker, feeShare/rewardShare, Confluence migration need citations. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers cited. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | Multiple claims not flagged. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing entirely. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references. |
| 6. Veracity | 6.8 | Source staleness | FAIL | References to Confluence migration, specific contract behaviour may be stale. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Wall-of-text Core Actors section reads as unfinished research. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources cited. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No definitions. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at `v2/about/network/actors`. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes to sections | PASS | Links to actor profile pages and related network pages. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from nav. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Core Actors wall of text disrupts the journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Only one cross-tab link (/v2/orchestrators/portal). |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content in v2/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `actors.mdx` is acceptable. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Above 2KB. |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section. |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to `./livepeer-actors/gateways`, `./livepeer-actors/delegators`, `/v2/orchestrators/portal`, `./demand-side`, `./supply-side`, `./job-lifecycle` appear valid. |
| 8. Links | 8.2 | External links live | N/A | No external links. |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | No images. |
| 8. Links | 8.5 | Page renders | PASS | Renders without error. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | No consuming decisions documented. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate completion. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of phase ordering. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured review evidence. |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route. |
| 10. Completeness | 10.1 | Every question has a page | PASS | Actor overview question answered. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Core Actors wall of text is not a polished journey step. |
| 10. Completeness | 10.3 | All persona paths unblocked | PASS | Links to all actor profiles and related pages. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Unclear where this overview ends and detail pages begin. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Duplicates detail pages instead of orienting and directing. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 4 | 6 | 4/10 |
| 2. Voice | 19 | 8 | 11 | 8/19 |
| 3. Headings | 10 | 4 | 6 | 4/10 |
| 4. Structure | 16 | 6 | 10 | 6/16 |
| 5. Layout | 14 | 4 | 10 | 4/14 |
| 6. Veracity | 7 | 0 | 7 | 0/7 |
| 7. Navigation | 9 | 6 | 3 | 6/9 |
| 8. Links | 3 | 3 | 0 | 3/3 |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 5 | 2 | 3 | 2/5 |

**Overall**: 37/98 checks passed
**Verdict**: NEEDS WORK
**Critical issues**:
1. Orphaned opening fragment ("and performs actions defined by the system") with no subject
2. "Core Actors" wall-of-text research notes duplicate individual actor profile pages
3. Deprecated frontmatter values (audience: general, purpose: concept), missing veracityStatus and full OG block
