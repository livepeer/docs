# Review: core-mechanisms.mdx (protocol2)

**Page**: `v2/about/protocol2/core-mechanisms.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: No `core-mechanisms.mdx` in `protocol/`. Replaced there by `protocol/mechanisms.mdx` (which was reviewed). Significant overlap with that page; protocol2 version retains older draft sections (Tabs structure, large commented-out blocks).

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has `lastVerified`. Description over 160 chars (multi-line `>-` block). |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` deprecated alias. Use `explain`. |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` deprecated. Use `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Multi-paragraph descriptive block, well over 160 chars. Uses em-dash ("Arbitrum. This page details..."). Self-references via "This page details". |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 fields with fallback image. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | All four are generic (`livepeer`, `about`, `livepeer protocol`, `protocol`). |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "incentivise". |
| 2. Voice | 2.2 | Zero banned words | PASS | None. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None obvious. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with a `FlexContainer` GitHub link card and divider, no narrative entry. First narrative is "Mechanism Objectives" – jumps to system mechanism without orienting. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Clear bullet-led structure. |
| 2. Voice | 2.7 | Audience register | FAIL | Mixes deep technical (function names like `initializeRound()`, contract names) with high-level concept – community register would not include unexplained Solidity-level names. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | Audience deprecated. |
| 2. Voice | 2.9 | No passive value statements | PASS | Concrete claims. |
| 2. Voice | 2.10 | No hedging openers | PASS | None. |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "Broadcasters" alongside "Gateways" (line 58, 68, 237). Uses "transcoderPool" without explanation. |
| 2. Voice | 2.12 | No em-dashes | FAIL | Multiple em-dashes in description and body (e.g. "actors - all executed", "infrastructure costs", "operators and their delegators"). |
| 2. Voice | 2.13 | Entity-led voice | PASS | Most paragraphs start with system fact. |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | FAIL | Description contains "This page details each core mechanism". |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" used multiple times. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "Gateways/Broadcasters" both used. |
| 2. Voice | 2.18 | Spell check | PASS | None obvious. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Broadcaster not canonical. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Code-level terms unexplained for About-tab register. |
| 2. Voice | 2.21 | First use defined | FAIL | TicketBroker, RoundsManager, transcoderPool, NVENC etc. not defined inline. |
| 2. Voice | 2.22 | Terminology lock | N/A | None. |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "Mechanism Objectives" (16, generic), "Protocol Mechanisms" (18), "Mechanism Details" (16, generic), "Rounds and Timing" inside Tab (decent). Tab labels (Rounds, Staking, Rewards, Payments, Upgrades, Other) are weak/avoid-tier ("Other" especially). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Other" is an avoid-tier label. "Reward System", "Micropayment System" are generic. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Mechanism Objectives", "Mechanism Details" lack domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Mostly names concepts. |
| 3. Headings | 3.6 | Title well-formed | PARTIAL | "Core Mechanisms and Functions" – includes "and Functions" tail, redundant with "Mechanisms". |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Other" tab is bureaucratic. |
| 3. Headings | 3.8 | Per-pageType naming | PARTIAL | Concept naming partially. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | Multiple headings lack anchor. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Page tries to be: (a) overview of all mechanisms, (b) Solidity-level reference, (c) AI vs Video comparison. Three jobs. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot reduce to a single sentence – serves multiple readers. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | UNKNOWN | protocol2/ alternative tree; nav unclear. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages footer; ends mid-tab content. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with Economics page, Token page unclear. |
| 4. Structure | 4.7 | Info type per section | FAIL | Mixes conceptual with technical reference inside Tabs. |
| 4. Structure | 4.8 | No content duplication | FAIL | Heavy duplication with protocol/economics, livepeer-token, and the live mechanisms page. |
| 4. Structure | 4.9 | Section orientation | N/A | Not a section orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | No cross-tab links. |
| 4. Structure | 4.11 | Discord test | FAIL | Mixes orientation and reference; reader gets fragmented answer. |
| 4. Structure | 4.12 | Page size | PASS | 400 lines. |
| 4. Structure | 4.13 | No TODO/REVIEW | PARTIAL | Multiple `{/* */}` commented-out research notes embedded (lines 38-47, 91-100, 282-400). Should be in workspace, not live MDX. |
| 4. Structure | 4.14 | Flat layout | PASS | Single page with Tabs. |
| 4. Structure | 4.15 | Trade-offs present | PARTIAL | AI vs Video trade-off mentioned. |
| 4. Structure | 4.16 | Content pass context | FAIL | Audience/purpose deprecated. |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | No labelled handoffs. |
| 5. Layout | 5.1 | Correct template | PARTIAL | Tabs-in-BorderedBox approach; some sections (Payments, Upgrades, Other) have empty `**Mechanisms** / **Functions** / **Implementation Mechanics**` headers with no content. |
| 5. Layout | 5.2 | Required sections | FAIL | Some Tabs missing core content (Payments tab has empty subheaders). |
| 5. Layout | 5.3 | Approved components | PASS | Approved (Tabs, Accordion, BorderedBox, FlexContainer, DynamicTableV2). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type → component | PARTIAL | Tabs used to hide decision-critical conceptual content – violates 5.31. |
| 5. Layout | 5.6 | MDX renders clean | UNKNOWN | Has unescaped backticks inside JSX context; would need verification. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | Deprecated values. |
| 5. Layout | 5.8 | CSS custom properties | PASS | Inline styles use rem/px only. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming | PASS | PascalCase. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept template; idiosyncratic Tabs-in-Box. |
| 5. Layout | 5.12 | Section blocks | FAIL | No related-pages-footer or next-step CTA. |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept ordering not followed (no clear intro→explanation→comparison→accordion→related). |
| 5. Layout | 5.14 | Multi-view rules | PARTIAL | Tabs used for one-dimension content. Decision-critical hidden behind Tabs. |
| 5. Layout | 5.15 | Data imports | N/A | No data to import. |
| 5. Layout | 5.16 | Related Pages or CTA | FAIL | None. |
| 5. Layout | 5.17 | Related Pages format | FAIL | None. |
| 5. Layout | 5.18 | Tab icon prop | PASS | All Tabs have icon props. |
| 5. Layout | 5.19 | Accordion icon prop | PARTIAL | One Accordion missing icon ("Round Length Configuration"). |
| 5. Layout | 5.20 | Code block metadata | N/A | No fenced blocks. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | None. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses `DynamicTableV2`, not `StyledTable`. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table. |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | DynamicTableV2 + Tabs + AccordionGroup combined. |
| 5. Layout | 5.26 | CustomDivider placement | PARTIAL | One opening divider. |
| 5. Layout | 5.27 | Mermaid colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports first. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Several unverified claims (44% staked, 25.6% APR, 10% treasury allocation) appear without REVIEW flags. |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | Mechanism details hidden behind Tabs. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No reference tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Multiple commented-out research notes embedded in live page. |
| 5. Layout | 5.34 | No inline styles | PARTIAL | Uses inline `style={{...}}` repeatedly. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "5760 blocks (~24 hours)", "50% bonding threshold", "default 50 blocks for testing" – cited indirectly, not flagged. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No CLI. |
| 6. Veracity | 6.3 | No deprecated API | PASS | Function names current. |
| 6. Veracity | 6.4 | Numbers are real | PARTIAL | Numbers plausible but unsourced inline. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None for unverified claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | "Broadcaster" non-canonical. |
| 6. Veracity | 6.8 | Source staleness | PARTIAL | `lastVerified` 2026-03-17. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Commented-out research notes still present. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No T1 sources cited inline. |
| 6. Veracity | 6.11 | Glossary definitions match | FAIL | Broadcaster mismatch. |
| 6. Veracity | 6.12 | Glossary verified | FAIL | Not verified. |
| 7. Navigation | 7.1 | Page in docs.json | UNKNOWN | protocol2/ alternative tree. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | protocol2/ should be `_workspace/drafts/`. |
| 7. Navigation | 7.10 | No stubs in nav | PASS | Not a stub. |
| 8. Links | 8.1 | Internal links resolve | UNKNOWN | No internal MDX links present. |
| 8. Links | 8.2 | External links live | PASS | go-livepeer link live. |
| 8. Links | 8.5 | Page renders | UNKNOWN | Some risk from unescaped JSX-in-Tab content. |
| 8. Links | 8.6 | No TODO/TBD | PARTIAL | Comments include scaffolding text. |
| 9. Process | All | All process | FAIL | No provenance. |
| 10. Completeness | 10.1 | Every Q has page | PARTIAL | Mechanisms answered partially. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Tabs hide content, no journey conclusion. |
| 10. Completeness | 10.3 | Persona paths | FAIL | No graduation. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | Unclear vs Economics. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Empty subheaders in Payments/Upgrades/Other tabs. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 4 | 6 | 4/10 |
| 2. Voice | 17 | 9 | 7 | 9/16 |
| 3. Headings | 10 | 1 | 7 | 1/8 |
| 4. Structure | 16 | 1 | 12 | 1/13 |
| 5. Layout | 30 | 9 | 12 | 9/21 |
| 6. Veracity | 12 | 1 | 9 | 1/10 |
| 7. Navigation | 3 | 1 | 1 | 1/2 |
| 8. Links | 4 | 1 | 0 | 1/1 |
| 9. Process | 6 | 0 | 6 | 0/6 |
| 10. Completeness | 5 | 0 | 5 | 0/5 |

**Overall**: ~27/102 applicable checks passed (~26%)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Multiple Tabs (Payments, Upgrades, Other) contain empty subheaders – page is incomplete and shipped scaffolding to a published path.
2. Description block exceeds 160 chars and contains em-dash plus self-reference.
3. Deprecated `audience: general` + `purpose: concept` + missing `veracityStatus`.
4. Heavy "Broadcaster" usage alongside "Gateway" – terminology not locked.
5. Decision-critical content hidden inside Tabs (violates 5.31). Empty subheaders in some Tabs make the page misleading.
6. Heavy commented-out research notes belong in `_workspace/drafts/`.
