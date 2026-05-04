# Review: network2/actors.mdx

**Page**: `v2/about/network2/actors.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: Near-identical to `v2/about/network/actors.mdx` (same orphaned opening fragment, same Core Actors wall-of-text, same Role Summary scaffold). Treat as a duplicate draft of the network/ counterpart.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. OG block is `og:image` only (no alt/type/width/height). `audience: general` and `purpose: concept` are deprecated aliases. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not set. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | `concept` is a deprecated alias; should be `explain`. |
| 1. Frontmatter | 1.5 | audience 7-token set | FAIL | `general` deprecated; About-tab default is `community`. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not set. |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not set. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, ≤160 chars. |
| 1. Frontmatter | 1.12 | OG image block complete | FAIL | Only `og:image` present. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `actors`. |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | Page mixes orientation and technical detail without inline audience flagging. |
| 2. Voice | 2.1 | UK English | PASS | `Optimise`/`specialization` mixed; `specialization` is US in two bullets — borderline. Treat as MEDIUM, not banned-word fail. |
| 2. Voice | 2.2 | Zero banned words | PASS | None of the banned-word list found. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | Opening fragment `and performs actions defined by the system.` has no subject. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with orphan `and performs…`. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Core Actors section is a single wall of text with mid-sentence line breaks and orphan citation marks (`\n.`). |
| 2. Voice | 2.7 | Audience register correct | FAIL | `audience: general` deprecated; register inconsistent (TicketBroker / NVENC alongside orientation prose). |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | Audience deprecated. |
| 2. Voice | 2.9 | No passive value statements | PASS | No unquantified value claims. |
| 2. Voice | 2.10 | No hedging openers | FAIL | Opens with broken fragment instead of subject. |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcasters" used as live synonym for Gateways. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | First sentence has no subject. |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-led description. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters/Clients", "Transcoders now refer simply to the GPU instances". |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Gateway and Broadcaster used interchangeably. |
| 2. Voice | 2.18 | Spell check | PASS | No typos visible. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Broadcaster non-canonical. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Code-level identifiers (TicketBroker, BondingManager, NVENC, NVDEC, feeShare, rewardShare) without About-tab register. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | TicketBroker, NVENC/NVDEC, Confluence, feeShare, rewardShare introduced without definition or link. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No active lock for About. |
| 3. Headings | 3.1 | Heading score ≥ 20/25 | FAIL | "Core Actors" 16/25; "Role Summary" 14/25; "Interaction Pattern" 18/25; "Actor Pages" 14/25; "Why Role Separation Matters" 22/25; "Developers And Applications" 16/25 (sentence case mismatch). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | Title contains "Overview"; "Summary" inside `Role Summary` is avoid-tier. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Core Actors", "Role Summary", "Interaction Pattern", "Actor Pages" lack domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concepts not examples. |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Actors Overview" uses avoid-tier "Overview". |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | Bureaucratic labels dominate. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Concept-style mostly. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | See 3.4. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Tries to (a) overview all actors and (b) deeply describe each role; duplicates child profile pages. |
| 4. Structure | 4.2 | Purpose statement | FAIL | "Lets the [community] understand actors" partially holds, but Core Actors detail exceeds scope. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Detailed Core Actors content overlaps child profile pages instead of teeing them up. |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages + Actor Pages route out. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with profile pages not stated. |
| 4. Structure | 4.7 | Info type per section | FAIL | Mixes conceptual overview with technical reference. |
| 4. Structure | 4.8 | No content duplication | FAIL | Duplicates `livepeer-actors/{gateways,delegators,orchestrators,end-users}.mdx` and overlaps `network2/livepeer-actors/orchestrators.mdx`. |
| 4. Structure | 4.9 | Section orientation page | PASS | Functions as actor section orientation. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only one cross-tab link (`/v2/orchestrators/portal`). Missing Delegators/Gateways/Developers/Solutions tabs. |
| 4. Structure | 4.11 | Discord test | FAIL | Orphaned opening + research-notes prose in Core Actors fail the polished-answer test. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~5 KB. |
| 4. Structure | 4.13 | No TODO/REVIEW | PASS | None present. |
| 4. Structure | 4.14 | Flat layout | PASS | Sub-folder for actor profiles is appropriate. |
| 4. Structure | 4.15 | Trade-offs present | PASS | "Why Role Separation Matters" implies trade-offs. |
| 4. Structure | 4.16 | Context block completable | FAIL | Audience/purpose deprecated. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | No inline audience flags despite mixed orientation/technical content. |
| 5. Layout | 5.1 | Correct template | FAIL | No concept template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | No clean Introduction/Overview/Explanation block. |
| 5. Layout | 5.3 | Only approved components | PASS | None used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None present. |
| 5. Layout | 5.5 | Info-type → component mapping | FAIL | Wall-of-text for content that should use Accordions or Cards. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept`. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept template. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No section blocks used. |
| 5. Layout | 5.13 | Section ordering | FAIL | No recognisable ordering. |
| 5. Layout | 5.14 | Multi-view rules | N/A | None. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data values. |
| 5. Layout | 5.16 | Related Pages footer present | PASS | Related Pages section present. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown bullets, not Card/Columns. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | None. |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | None. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | None. Page uses bare `--`/`---` separator (line 45). |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Confluence/TicketBroker/NVENC/NVDEC/feeShare/rewardShare claims unflagged. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Wall-of-text Core Actors section is research-note quality, belongs in `_workspace/drafts/`. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | NVENC/NVDEC, TicketBroker behaviour, feeShare/rewardShare, Confluence migration unsourced. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags present | FAIL | None present despite multiple unverified claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing field. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary refs. |
| 6. Veracity | 6.8 | Source staleness | FAIL | Confluence-era references not flagged. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Core Actors reads as unfinished research. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources cited. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No definitions. |
| 7. Navigation | 7.1 | Page in docs.json | INFO | Likely listed under network2 cluster — confirm before publishing. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists at expected path. |
| 7. Navigation | 7.3 | Tab portal routes correctly | PASS | Routes to actor profiles + related pages. |
| 7. Navigation | 7.4 | No structural orphans | INFO | Reachable via Actor Pages and Related Pages. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Wall-of-text breaks the journey into duplicate territory. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | One cross-tab link only. |
| 7. Navigation | 7.7 | File in correct lane | PASS | In v2/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `actors.mdx` is OK. |
| 7. Navigation | 7.9 | _workspace TTL | N/A | Not in workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Above 2 KB. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not in resources. |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to `./livepeer-actors/*`, `./demand-side`, `./supply-side`, `./job-lifecycle`, `/v2/orchestrators/portal` resolve in tree. |
| 8. Links | 8.2 | External links live | N/A | No externals. |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | No images. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | None recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None recorded. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence. |
| 9. Process | 9.5 | Findings before fixes | FAIL | None evident. |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route yet. |
| 10. Completeness | 10.1 | Question coverage | PASS | Actor overview answered. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Core Actors wall-of-text breaks the journey. |
| 10. Completeness | 10.3 | Persona paths unblocked | PASS | Paths exist via Actor Pages. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Boundary with child profile pages absent. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Duplicates child pages. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | Only Orchestrators tab cross-link present. |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 4 | 7 | 3 | 4/11 |
| 2. Voice | 22 | 8 | 12 | 2 | 8/20 |
| 3. Headings | 10 | 2 | 8 | 0 | 2/10 |
| 4. Structure | 17 | 4 | 11 | 2 | 4/15 |
| 5. Layout | 34 | 4 | 12 | 18 | 4/16 |
| 6. Veracity | 12 | 0 | 7 | 5 | 0/7 |
| 7. Navigation | 11 | 4 | 2 | 5 | 4/6 (2 INFO) |
| 8. Links | 6 | 2 | 0 | 4 | 2/2 |
| 9. Process | 6 | 0 | 5 | 1 | 0/5 |
| 10. Completeness | 6 | 2 | 4 | 0 | 2/6 |

**Overall verdict**: REWRITE REQUIRED

**Critical issues**:
1. **Orphaned opening fragment** ("and performs actions defined by the system.") — same defect as `network/actors.mdx`. CRITICAL.
2. **Duplicate of network/actors.mdx** — content, defects, and structure are functionally identical. Decide which folder is canonical and delete the other.
3. **Core Actors wall-of-text duplicates child profile pages** under `livepeer-actors/`. Either orient or detail; not both.
4. **Deprecated frontmatter values** (`audience: general`, `purpose: concept`) and missing `veracityStatus` + incomplete OG block.
5. **Deprecated terminology in body** (Broadcaster/Broadcasters, Transcoder = GPU instance) violates universal-terms lock.
