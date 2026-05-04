# Review: protocol/actors.mdx

**Page**: `v2/about/protocol/actors.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: Sibling pages `concepts/actors-and-participants.mdx`, `network/actors.mdx`, and the "Protocol Actors" section in `design.mdx` all cover the same ground. Consolidation needed.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Only title/sidebarTitle/description/keywords/OG present. |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | Field absent. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field absent. |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | Field absent. About-default `community` should be applied. |
| 1. Frontmatter | 1.6 | complexity | FAIL | Field absent. |
| 1. Frontmatter | 1.7 | lifecycleStage | FAIL | Field absent. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Field absent. |
| 1. Frontmatter | 1.9 | industry array | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, ≤160 chars (just over via folded YAML scalar). UK English. No self-reference. |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 OG fields present with fallback path. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `protocol`. No high-intent terms. |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | No audience set, no inline audience flagging. |
| 2. Voice | 2.1 | UK English | PASS | "specialised" used. No US spellings. |
| 2. Voice | 2.2 | Banned words | PASS | None. |
| 2. Voice | 2.3 | Banned phrases | PASS | None. |
| 2. Voice | 2.4 | Banned constructions | PASS | None in body. |
| 2. Voice | 2.5 | Opening order | PASS | Quote leads with subject ("In protocol design..."), then body opens with system fact. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight paragraphs. |
| 2. Voice | 2.7 | Audience register | FAIL | No audience set; cannot test. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | No audience. |
| 2. Voice | 2.9 | No passive value statements | PASS | Concrete responsibilities listed. |
| 2. Voice | 2.10 | No hedging openers | PASS | Quote opens. |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Gateways - aka Broadcasters" surfaces deprecated alias prominently. Body comment introduces "Verifiers" as a core actor (not canonical). |
| 2. Voice | 2.12 | No em-dashes | PASS | None. |
| 2. Voice | 2.13 | Entity-led | PASS | Each card opens with subject. |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Starts with "An introduction to..." which is structural but not self-referencing. BORDERLINE - "An introduction to" is acceptable but close. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" used twice in body. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Gateway and Broadcaster used as synonyms in body and card text. |
| 2. Voice | 2.18 | Spell check | PASS | No errors. |
| 2. Voice | 2.19 | TERMINOLOGY-COLLATE | FAIL | Broadcaster surfacing. AI Worker as canonical actor needs cross-check. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About-tab register OK. |
| 2. Voice | 2.21 | First use defined | FAIL | "AI Worker" not defined. "Verifier" mentioned in comment as a "core actor" but no definition. |
| 2. Voice | 2.22 | Terminology lock | N/A | No tab lock active. |
| 3. Headings | 3.1 | Score ≥20/25 | N/A | Page has no H2 headings - only quote, divider, paragraphs, QuadGrid. Heading-less. |
| 3. Headings | 3.2 | Banned/weak terms | N/A | No headings. |
| 3. Headings | 3.3 | No contrast labels | N/A | No headings. |
| 3. Headings | 3.4 | Domain-anchor | N/A | No headings. |
| 3. Headings | 3.5 | Names concept | N/A | No headings. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Protocol Actors" - 2 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial | N/A | No headings. |
| 3. Headings | 3.8 | Per-pageType naming | N/A | No headings. |
| 3. Headings | 3.9 | Per-audience register | N/A | No headings. |
| 3. Headings | 3.10 | Domain-anchor applied | N/A | No headings. |
| 4. Structure | 4.1 | One purpose, one job | PASS | Single job: introduce protocol actors and route to portals. |
| 4. Structure | 4.2 | Purpose statement | PASS | "Lets the community orient on protocol actor roles and route to per-actor docs." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Page is registered nested deep at docs.json line 2203 inside an x-design subgroup - unclear adjacency. |
| 4. Structure | 4.4 | No dead ends | PASS | All four cards link to actor portal pages. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Doesn't say where actor pages live or why this is the protocol-tab version vs network-tab version. |
| 4. Structure | 4.7 | Info type per section | PASS | Conceptual + structural (cards). |
| 4. Structure | 4.8 | No content duplication | FAIL | Duplicates `concepts/actors-and-participants.mdx`, `network/actors.mdx`, and `design.mdx` Protocol Actors section. |
| 4. Structure | 4.9 | Section orientation | PASS | Functions as orientation. |
| 4. Structure | 4.10 | Cross-tab links | PASS | Links to /v2/orchestrators/portal, /v2/gateways/portal, /v2/delegators/portal, /v2/developers/portal - 4 cross-tab graduations. |
| 4. Structure | 4.11 | Discord test | FAIL | Reader gets card titles but no real definition of an "actor" beyond the quote. The body comment block reveals page is unfinished (lists Verifiers, asks for AI vs Video definition). |
| 4. Structure | 4.12 | Page size | FAIL | ~85 lines, 2.5KB raw. Below 5KB substantive content. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | Lines 23-38 contain a long body-comment with editorial notes, "(?)" markers, and "Define:" tasks left in the file. Lines 70 + 38 contain `{/* ... */}` comments with TODO-equivalent content. |
| 4. Structure | 4.14 | Flat layout | PASS | Flat. |
| 4. Structure | 4.15 | Trade-offs | FAIL | No trade-off, limitation, or failure mode discussed. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience/purpose/pageType absent. |
| 4. Structure | 4.17 | Multi-audience handoff | PASS | Each card explicitly graduates to a role tab. |
| 5. Layout | 5.1 | Correct template | FAIL | No clear gold-standard template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | Concept page should have an Overview/Introduction H2. None present. |
| 5. Layout | 5.3 | Only approved components | PASS | Quote, CustomDivider, QuadGrid, Card - approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type → component | PASS | Cards used for structural role list. |
| 5. Layout | 5.6 | MDX renders | NOT-TESTED | Not run. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | No deprecated values present (because field absent). |
| 5. Layout | 5.8 | CSS custom properties | PASS | Inline styles use rem only on margin. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase, root-absolute, .jsx extensions. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow template. |
| 5. Layout | 5.12 | Section blocks | FAIL | No standard section blocks (introduction, related-pages-footer). |
| 5. Layout | 5.13 | Section ordering | FAIL | Cannot evaluate - no sections. |
| 5. Layout | 5.14 | Multi-view | N/A | None. |
| 5. Layout | 5.15 | Data imports | N/A | No data needed. |
| 5. Layout | 5.16 | Related Pages or CTA | FAIL | QuadGrid functions as nav but no Related Pages footer. |
| 5. Layout | 5.17 | Related Pages format | FAIL | None. |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps | N/A | No steps. |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | QuadGrid Cards use plain `title=` string, not CustomCardTitle with icon prop. |
| 5. Layout | 5.23 | Tables StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | ≤2 tables | N/A | None. |
| 5. Layout | 5.25 | ≤1 major layout | PASS | Only QuadGrid. |
| 5. Layout | 5.26 | CustomDivider placement | PASS | One divider after quote, one closing. |
| 5. Layout | 5.27 | Mermaid colours | N/A | No Mermaid. |
| 5. Layout | 5.28 | Import order | PASS | Component imports only. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Page makes claims (3 vs 4 actors, AI Worker definition) without REVIEW flags. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Card grid visible on load. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Body-comment editorial notes (lines 23-38, line 70) belong in workspace, not live page. |
| 5. Layout | 5.34 | No inline styles | FAIL | `style={{ margin: "-1rem 0 -2rem 0" }}` used on dividers - acceptable per CustomDivider pattern but is inline CSS. BORDERLINE. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "Specialised nodes that execute AI inference tasks in Docker containers or as external endpoints" - not cited. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated APIs | N/A | None. |
| 6. Veracity | 6.4 | Numbers real | N/A | None. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | Author uncertainty signalled by "A fourth actor could be argued" but not flagged with REVIEW. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | No glossary link. |
| 6. Veracity | 6.8 | Source staleness | N/A | No dated facts. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Body comment "Define:" task list left in file is open-ended research. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources. |
| 6. Veracity | 6.11 | Glossary defs match | N/A | No defs. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No defs. |
| 7. Navigation | 7.1 | In docs.json | PASS | Listed at docs.json line 2203. |
| 7. Navigation | 7.2 | Nav matches FS | PASS | File exists. |
| 7. Navigation | 7.3 | Tab portal routing | N/A | Not a portal. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey | FAIL | Sits inside an x-design subgroup which is itself an alternate IA. |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | 4 cross-tab links. |
| 7. Navigation | 7.7 | File correct lane | PASS | Published v2/. |
| 7. Navigation | 7.8 | File naming | PASS | actors.mdx. |
| 7. Navigation | 7.9 | Workspace TTL | N/A | Not workspace. |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | 2.5KB - below 2KB threshold guidance. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources. |
| 8. Links | 8.1 | Internal resolve | NOT-TESTED | All four card hrefs are valid path patterns. Not run. |
| 8. Links | 8.2 | External live | N/A | None. |
| 8. Links | 8.3 | Snippet imports | NOT-TESTED | Imports look valid. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not run. |
| 8. Links | 8.6 | No TODO/TBD | FAIL | Body-comments contain editorial TODOs. |
| 9. Process | 9.1 | Human sign-off | FAIL | None recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None. |
| 9. Process | 9.3 | Gate prerequisites | FAIL | None evident. |
| 9. Process | 9.4 | Phase ordering | FAIL | Page in raw drafted state. |
| 9. Process | 9.5 | Findings before fixes | FAIL | None. |
| 9. Process | 9.6 | Feedback routed | N/A | N/A. |
| 10. Completeness | 10.1 | Every question has a page | PASS | Question "who participates?" answered at card-level. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Substantive content insufficient for orientation. |
| 10. Completeness | 10.3 | Persona paths unblocked | PASS | All 4 actor cards graduate. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | No statement of scope vs concepts/actors-and-participants. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader can route but cannot orient on what each role actually does without leaving. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 14 | 2 | 11 | 2/13 (1 N/A) |
| 2. Voice | 22 | 11 | 7 | 11/18 |
| 3. Headings | 10 | 1 | 0 | 1/1 (9 N/A - no headings) |
| 4. Structure | 17 | 7 | 10 | 7/17 |
| 5. Layout | 34 | 8 | 9 | 8/17 |
| 6. Veracity | 12 | 0 | 6 | 0/6 |
| 7. Navigation | 11 | 6 | 2 | 6/8 |
| 8. Links | 6 | 0 | 1 | 0/1 |
| 9. Process | 6 | 0 | 5 | 0/5 |
| 10. Completeness | 5 | 2 | 3 | 2/5 |

**Overall**: 37/91 evaluable
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Frontmatter shell - missing pageType, audience, purpose, complexity, lifecycleStage, veracityStatus
2. Editorial body-comment with TODOs/Verifiers question/Define list left in published file
3. Heavy duplication with `concepts/actors-and-participants.mdx`, `network/actors.mdx`, and `design.mdx` Protocol Actors section - which is canonical?
4. No introduction body H2; no Related Pages; no trade-offs; no prerequisites; deprecated "Broadcasters" surfaced
