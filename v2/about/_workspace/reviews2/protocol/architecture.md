# Review: protocol/architecture.mdx

**Page**: `v2/about/protocol/architecture.mdx`
**Review date**: 2026-05-03
**Cross-flag**: Equivalent file `protocol2/technical-architecture.mdx`. Architecture content overlaps `concepts/livepeer-stack.mdx`. Mermaid contract diagram duplicates `blockchain-contracts.mdx` and `design.mdx`.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Has title/sidebarTitle/description/lifecycleStage/complexity/pageType/keywords/OG/audience/lastVerified/purpose. Missing `veracityStatus`. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` is deprecated alias - should be `explain`. |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `general` is deprecated - should be `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "A technical overview of the Livepeer protocol." Subject-first, ≤160. BORDERLINE - thin. |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `technical`, `overview`. No high-intent terms. |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | `general` deprecated. |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "organised". |
| 2. Voice | 2.2 | Banned words | PASS | None. |
| 2. Voice | 2.3 | Banned phrases | PASS | None. |
| 2. Voice | 2.4 | Banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with empty `<Quote></Quote>`, then bullet "Notes" list - structurally weak. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Several H2s have no body content (Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury). |
| 2. Voice | 2.7 | Audience register | FAIL | `general` deprecated. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | No valid audience. |
| 2. Voice | 2.9 | No passive value statements | PASS | "reducing gas costs by approximately 100x" quantified. |
| 2. Voice | 2.10 | No hedging openers | FAIL | Opens with empty Quote then a Notes list. |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcaster" used in System Diagram Mermaid. "Worker Nodes (Transcoder & AI Worker)" non-canonical. |
| 2. Voice | 2.12 | No em-dashes | PASS | None. |
| 2. Voice | 2.13 | Entity-led | PASS | Body opens with "Blockchain layer". |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | "A technical overview of..." - structural but acceptable. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster" surfaces in Mermaid System Diagram. |
| 2. Voice | 2.17 | Universal terms | FAIL | Broadcaster/Gateway inconsistency. |
| 2. Voice | 2.18 | Spell check | PASS | No errors. |
| 2. Voice | 2.19 | TERMINOLOGY-COLLATE | FAIL | Broadcaster, Worker Nodes non-canonical. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Code-level terms (`TicketBroker.redeemWinningTicket()`) without About-tab framing. |
| 2. Voice | 2.21 | First use defined | FAIL | "Confluence", "TicketBroker", "BondingManager", "ServiceRegistry", "Streamflow" not defined. |
| 2. Voice | 2.22 | Terminology lock | N/A | No tab lock. |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Architecture Overview" 16/25 weak (Overview tier), "Protocol Architecture" 16/25 (vague), "System Overview" 14/25 (Overview tier), "System Diagram" 18/25, "Actor & Incentive Model" 18/25, "Trust & Verification Model" 22/25 OK, "Job Lifecycle" 22/25 OK, "Governance & Treasury" 22/25 OK, "Protocol References" 18/25. |
| 3. Headings | 3.2 | Banned/weak terms | FAIL | "Architecture Overview", "System Overview" use AVOID-tier "Overview". |
| 3. Headings | 3.3 | No contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor | FAIL | "System Diagram" generic. |
| 3. Headings | 3.5 | Names concept | PASS | All concept-named. |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title is "Technical Overview" (uses Overview - AVOID-tier and inconsistent with sidebarTitle "Technical Architecture"). |
| 3. Headings | 3.7 | Expert editorial | FAIL | "Architecture Overview" / "System Overview" / "Protocol Architecture" are repetitive labels. |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | concept page should have governing-concept naming, not "Architecture Overview"/"System Overview". |
| 3. Headings | 3.9 | Per-audience register | FAIL | `general` audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | "System Diagram" lacks domain. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Tries to be: layered architecture overview + contract diagram + system overview + (incomplete) actor/trust/governance models. Multiple jobs. |
| 4. Structure | 4.2 | Purpose statement | FAIL | "Lets the community understand the layered protocol architecture" - exceeded by extra subsystem H2s. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Sits before blockchain-contracts in nav (line 2145). Architecture diagrams overlap with the next page; reader sees same Mermaid twice. |
| 4. Structure | 4.4 | No dead ends | FAIL | Empty H2 sections (Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury) are dead ends. |
| 4. Structure | 4.5 | Prerequisites | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope | FAIL | Unclear what this page covers vs blockchain-contracts.mdx. |
| 4. Structure | 4.7 | Info type per section | FAIL | Mix of structural (tables) and conceptual; empty H2s have no type. |
| 4. Structure | 4.8 | No content duplication | FAIL | Mermaid diagrams duplicate `blockchain-contracts.mdx` and `design.mdx`. Layered concept duplicates `concepts/livepeer-stack.mdx`. |
| 4. Structure | 4.9 | Section orientation | FAIL | Empty section H2s do not orient. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. |
| 4. Structure | 4.11 | Discord test | FAIL | Reader gets layered tables + diagrams but empty H2s + commented-out diagrams + Notion links in commented section signal unfinished. |
| 4. Structure | 4.12 | Page size | PASS | ~317 lines, ~12KB. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | Lines 24-33 author-instruction comment ("How in depth though?"). Lines 252-317 large commented A/B/C TEST LAYOUTS section. Internal Notion links in commented block. |
| 4. Structure | 4.14 | Flat layout | PASS | Flat. |
| 4. Structure | 4.15 | Trade-offs | FAIL | No trade-offs named. |
| 4. Structure | 4.16 | Content pass context | FAIL | Audience deprecated; status unclear. |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | None. |
| 5. Layout | 5.1 | Correct template | FAIL | Mixed shape, no clear template. |
| 5. Layout | 5.2 | Required sections | FAIL | Missing introduction H2 (opens with empty Quote then "Notes" bullets). |
| 5. Layout | 5.3 | Only approved components | PASS | DynamicTable, DynamicTableV2, ScrollableDiagram, CustomDivider, Quote, Tip - approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type → component | FAIL | Conceptual content as bare bullets ("Notes") rather than prose. |
| 5. Layout | 5.6 | MDX renders | NOT-TESTED | Empty `<Quote></Quote>` may render oddly. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` deprecated. |
| 5. Layout | 5.8 | CSS custom properties | PASS | Mermaid uses fixed hex per governed palette. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming | PASS | OK. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | No template. |
| 5. Layout | 5.12 | Section blocks | FAIL | None. |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept page should be intro → explanation → comparison → related; this is intro-less. |
| 5. Layout | 5.14 | Multi-view | N/A | None. |
| 5. Layout | 5.15 | Data imports | N/A | No data file required. |
| 5. Layout | 5.16 | Related Pages or CTA | FAIL | None. |
| 5. Layout | 5.17 | Related Pages format | FAIL | None. |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions in live (commented Steps/Accordion in dead block). |
| 5. Layout | 5.20 | Code block metadata | PASS | Mermaid blocks - no fenced code without metadata in live content. |
| 5. Layout | 5.21 | StyledSteps | N/A | None. |
| 5. Layout | 5.22 | Nav cards | N/A | None. |
| 5. Layout | 5.23 | Tables StyledTable | FAIL | Uses DynamicTable / DynamicTableV2 instead of StyledTable. |
| 5. Layout | 5.24 | ≤2 tables | PASS | 2 tables. |
| 5. Layout | 5.25 | ≤1 major layout | FAIL | 2 tables + 2 Mermaid diagrams. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | One CustomDivider after Tip - placement not aligned to 5-rule pattern. No closing divider before Related (no Related). |
| 5. Layout | 5.27 | Mermaid colours | PASS | Uses governed palette. |
| 5. Layout | 5.28 | Import order | PASS | Components only. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | "100x gas reduction" is approximate but not REVIEW-flagged; lots of architecture claims uncited. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Architecture description visible. |
| 5. Layout | 5.32 | Reference tables at end | FAIL | Tables interleaved with prose mid-page. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | A/B/C TEST LAYOUTS commented block + Notion link block belong in workspace. |
| 5. Layout | 5.34 | No inline styles | PASS | Inline style only on FlexContainer (acceptable). |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "100x" gas claim, contract function lists not cited. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | Function names cited but not executed. |
| 6. Veracity | 6.3 | Deprecated APIs | FAIL | "BondingManager.slashTranscoder()" listed as Verification mechanism but slashing is currently inoperative (per blockchain-contracts.mdx Info note). |
| 6. Veracity | 6.4 | Numbers real | FAIL | "100x" approximate without source. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | None. |
| 6. Veracity | 6.8 | Source staleness | FAIL | Last verified 2026-03-17; page contains stale slashing claim. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | "How in depth though?" comment is open research. Empty H2s are open scope. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources. |
| 6. Veracity | 6.11 | Glossary defs match | N/A | No glossary. |
| 6. Veracity | 6.12 | Glossary verified | N/A | N/A. |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2145. |
| 7. Navigation | 7.2 | Nav matches FS | PASS | File exists. |
| 7. Navigation | 7.3 | Tab portal | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey | FAIL | Sidebar says "Technical Architecture" but title says "Technical Overview" - confusing journey signal. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Zero cross-tab links. |
| 7. Navigation | 7.7 | File correct lane | PASS | Published v2/. |
| 7. Navigation | 7.8 | File naming | PASS | architecture.mdx. |
| 7. Navigation | 7.9 | Workspace TTL | N/A | N/A. |
| 7. Navigation | 7.10 | No stubs in nav | PASS | Above 2KB. |
| 7. Navigation | 7.11 | Resources sub | N/A | N/A. |
| 8. Links | 8.1 | Internal resolve | NOT-TESTED | None present in live content (commented links to Notion + reference page). |
| 8. Links | 8.2 | External live | NOT-TESTED | github.com/livepeer/protocol link valid pattern. |
| 8. Links | 8.3 | Snippet imports | NOT-TESTED | Look valid. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not run. |
| 8. Links | 8.6 | No TODO/TBD | FAIL | Empty H2s, Notion links in commented block. |
| 9. Process | 9.1 | Human sign-off | FAIL | None. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None. |
| 9. Process | 9.3 | Gate prerequisites | FAIL | None. |
| 9. Process | 9.4 | Phase ordering | FAIL | Page is mid-draft. |
| 9. Process | 9.5 | Findings before fixes | FAIL | None. |
| 9. Process | 9.6 | Feedback routed | N/A | N/A. |
| 10. Completeness | 10.1 | Question has page | PASS | Layered architecture answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Empty H2s break journey. |
| 10. Completeness | 10.3 | Persona paths | FAIL | No graduation links. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | Unclear vs blockchain-contracts.mdx. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Empty H2s + commented research notes. |

## Summary

| Category | Pass | Fail | N/A |
|---|---|---|---|
| 1. Frontmatter | 4 | 7 | 3 |
| 2. Voice | 8 | 11 | 3 |
| 3. Headings | 2 | 8 | 0 |
| 4. Structure | 1 | 16 | 0 |
| 5. Layout | 8 | 17 | 9 |
| 6. Veracity | 0 | 10 | 2 |
| 7. Navigation | 5 | 3 | 3 |
| 8. Links | 0 | 1 | 5 |
| 9. Process | 0 | 5 | 1 |
| 10. Completeness | 1 | 4 | 0 |

**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Title/sidebarTitle mismatch ("Technical Overview" vs "Technical Architecture")
2. 4 empty H2 sections (Actor & Incentive Model, Trust & Verification Model, Job Lifecycle, Governance & Treasury) - dead ends
3. Empty `<Quote></Quote>` opener and "Notes" bullet list as introduction
4. Deprecated frontmatter (`general`, `concept`); missing veracityStatus
5. Stale claim - lists `slashTranscoder()` as Verification mechanism (slashing is inoperative)
6. Same Mermaid contract diagram as `blockchain-contracts.mdx` and `design.mdx`
7. Author-instruction comment "How in depth though?" left in published file
8. Massive commented-out A/B/C TEST LAYOUTS block + internal Notion links
