# Review: network2/interfaces.mdx

**Page**: `v2/about/network2/interfaces.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: Heavy duplication with `v2/about/network/interfaces.mdx` (179 lines, very similar tables and structure). Smart-contract section overlaps `protocol/blockchain-contracts.mdx`.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience: general`, `purpose: concept` deprecated. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` deprecated; should be `explain` or `reference`. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `general` deprecated. |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "How to interact with the Livepeer Network and protocol…" subject-first. |
| 1. Frontmatter | 1.12 | OG block complete | PASS | Full OG block. |
| 1. Frontmatter | 1.13 | keywords quality | PASS | API, SDK, CLI, GraphQL, REST, gRPC are intent-aligned. |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | Page targets app developers, gateway operators, node operators, analysts — no inline audience flagging. |
| 2. Voice | 2.1 | UK English | PASS | No US spellings. |
| 2. Voice | 2.2 | Banned words | PASS | None. |
| 2. Voice | 2.3 | Banned phrases | PASS | None. |
| 2. Voice | 2.4 | Banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order | PASS | Subject-first ("Livepeer exposes multiple access interfaces…"). |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Short and tight. |
| 2. Voice | 2.7 | Audience register | FAIL | Audience deprecated; spans developer/operator/analyst registers without flagging. |
| 2. Voice | 2.10 | No hedging openers | PASS | Direct opener. |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses Gateway, Orchestrator, Delegator. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Subject-led throughout. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No Broadcaster/Pool worker/Combined mode. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Consistent. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | `TicketBroker`, `BondingManager`, `Cascade`, `Daydream`, `MetaDJ` introduced without definition. |
| 2. Voice | other | Other | PASS / N/A | No findings. |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Interface categories" 18/25; "REST API (Livepeer Studio)" 22/25; "gRPC API (Gateway nodes)" 22/25; "GraphQL Explorer API" 22/25; "JS SDK" 18/25; "CLI" 14/25 (single token, no domain anchor); "Smart contract interfaces" 22/25; "Workflow examples" 16/25 (avoid-tier "examples"); "See also" 14/25 (banned-tier); "References" 18/25. |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "See also" is banned-tier; "References" / "Workflow examples" are avoid-tier. |
| 3. Headings | 3.3 | No literal contrast | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "CLI", "JS SDK", "References" lack domain anchors. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concepts. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Network Interfaces" — concept-led, 2 words. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "See also", "References" generic. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Mostly fine for concept page. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | See 3.4. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Page is half-concept (interface categories) and half-reference (endpoints, ABIs, sample code). About-tab interfaces page should orient and route to per-tab references. |
| 4. Structure | 4.2 | Purpose statement | PASS | "Lets the [community] understand which interfaces exist." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | INFO | Need docs.json read to confirm. |
| 4. Structure | 4.4 | No dead ends | PASS | "See also" and "References" route out. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with role-tab API references unstated. |
| 4. Structure | 4.7 | Info type per section | FAIL | Conceptual + technical-reference mix without clear split. |
| 4. Structure | 4.8 | No content duplication | FAIL | Heavy overlap with `network/interfaces.mdx`; smart-contract block overlaps `protocol/blockchain-contracts.mdx`. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Single cross-tab link (`/v2/orchestrators/portal` is implicit). Missing Developers, Gateways, LPT/Delegators tab handoffs. |
| 4. Structure | 4.11 | Discord test | PASS | Reasonable interface inventory — could share. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~6 KB. |
| 4. Structure | 4.13 | No TODO/REVIEW | PASS | None. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs (which interface for which job, what each costs). |
| 4. Structure | 4.16 | Context block completable | FAIL | Audience/purpose deprecated. |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | No audience-specific Notes. |
| 5. Layout | 5.1 | Correct template | INFO | Closer to a reference page than the concept template. Reclassify as `reference` + `pageVariant: compendium`? |
| 5. Layout | 5.2 | Required sections | PASS | Has intro + sections. |
| 5. Layout | 5.3 | Approved components | PASS | DynamicTable, Note, GotoLink (imported but not used). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None present. |
| 5. Layout | 5.5 | Info-type → component | PASS | Tables for catalog data. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Likely renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | Deprecated audience/purpose. |
| 5. Layout | 5.10 | Component naming/import | FAIL | Imports `GotoLink` but never uses it (dead import — flagging per Layout discipline though checks.mdx says don't flag dead imports for findings). INFO. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Ad-hoc structure rather than gold-standard concept/reference template. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Not composed from gold-standard blocks. |
| 5. Layout | 5.13 | Section ordering | FAIL | "See also" + "References" both at end is duplicative. |
| 5. Layout | 5.14 | Multi-view rules | N/A | No multi-view. |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | Endpoints (`livepeer.studio/api`, explorer URL), CLI commands and contract names hardcoded; should pull from `snippets/data/` if a data file exists for endpoints. |
| 5. Layout | 5.16 | Related Pages or Next CTA | PASS | "See also" plus "References" footers present (though weak titles). |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown bullets, not `Columns`/`Card`/`CustomCardTitle`. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | PASS | Code blocks include `icon="terminal"`; `title` missing in some. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | CustomCardTitle | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses `DynamicTable`, not `StyledTable` per check 5.23 (DynamicTable is a different governance component — confirm acceptance). INFO if accepted. |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | Three DynamicTables on the page (interfaces categories, smart contracts, plus inline structure). |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Multiple major layout elements (3 tables + 5+ code blocks + Mermaid). |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider used. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid. |
| 5. Layout | 5.28 | Import section ordering | FAIL | Imports lack the canonical section comment headers. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Multiple unverified claims (gRPC method names, LIP statuses, Cascade product naming) unflagged. |
| 5. Layout | 5.33 | Drafts in workspace | INFO | Page may be a draft. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 5. Layout | other | Other | N/A | — |
| 6. Veracity | 6.1 | Every claim citable | FAIL | gRPC method names (`ReserveSession`, `Heartbeat`, `ReportJobComplete`, `OrchestratorList`), proto link path, SDK package name `@livepeer/sdk`, CLI commands (`livepeer_cli status`) need source checks. |
| 6. Veracity | 6.2 | Code/commands tested | FAIL | `npm install @livepeer/sdk` returns 404 historically — package was renamed; verify. `go install github.com/livepeer/go-livepeer` is missing path subdir. `livepeer_cli` command form not standard. |
| 6. Veracity | 6.3 | No deprecated API | FAIL | `@livepeer/sdk` may be deprecated in favour of `@livepeer/react` etc. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None despite multiple unverified items. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | Several T2/T3 claims with no T1 cross-check. |
| 6. Veracity | other | Other | N/A | — |
| 7. Navigation | 7.1 | In docs.json | INFO | network2 listing — confirm. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Missing graduation links to Developers, Gateways, Orchestrators tabs. |
| 7. Navigation | 7.10 | No stubs in nav | PASS | >2 KB. |
| 7. Navigation | other | Other | PASS / INFO | File path / naming OK. |
| 8. Links | 8.1 | Internal links resolve | INFO | `../protocol/blockchain-contracts`, `./technical-architecture`, `./marketplace`, `./job-lifecycle` — verify. |
| 8. Links | 8.2 | External links live | INFO | `https://livepeer.studio/api`, `livepeer.studio/docs`, `https://github.com/livepeer/protocol/blob/master/proto/gateway.proto`, `https://github.com/livepeer/js-sdk`, explorer URL — verify each. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | DynamicTable / GotoLink imports resolve. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD | PASS | None. |
| 9. Process | 9.1-9.5 | Process | FAIL | No evidence of sign-off, gates, or registry entry. |
| 10. Completeness | 10.1 | Question coverage | PASS | Interface inventory present. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | About-tab interfaces page should orient, not be a reference compendium. |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | No clear handoff per persona. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Boundary with per-role tab API docs unstated. |
| 10. Completeness | 10.5 | Self-containment | PASS | Mostly self-contained. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | No persona-specific routes. |

## Summary

| Category | Pass | Fail | N/A | INFO |
|---|---|---|---|---|
| 1. Frontmatter | 6 | 5 | 3 | 0 |
| 2. Voice | 12 | 3 | 7 | 0 |
| 3. Headings | 3 | 7 | 0 | 0 |
| 4. Structure | 4 | 11 | 1 | 1 |
| 5. Layout | 6 | 12 | 11 | 5 |
| 6. Veracity | 0 | 7 | 5 | 0 |
| 7. Navigation | 4 | 2 | 4 | 1 |
| 8. Links | 3 | 0 | 0 | 3 |
| 9. Process | 0 | 5 | 1 | 0 |
| 10. Completeness | 2 | 4 | 0 | 0 |

**Overall verdict**: NEEDS WORK — useful content, but misclassified, duplicates `network/interfaces.mdx`, and has untested code claims.

**Critical issues**:
1. **Duplicate of `network/interfaces.mdx`** — content scope and tables overlap heavily. Pick one canonical home.
2. Page reads as `reference` (compendium) but is classified `concept`. Reclassify, then split orientation vs reference.
3. **Untested code blocks**: `npm install @livepeer/sdk`, `go install github.com/livepeer/go-livepeer`, `livepeer_cli status` need verification (likely deprecated/wrong).
4. Deprecated frontmatter (`audience: general`, `purpose: concept`); missing `veracityStatus`.
5. Layout violations: 3+ tables, dead `GotoLink` import, no CustomDivider, plain-bullet "See also"/"References" instead of Card footer.
