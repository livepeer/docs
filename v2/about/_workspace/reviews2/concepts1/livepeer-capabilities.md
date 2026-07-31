# Review: livepeer-capabilities.mdx (concepts1)

**Page**: `v2/about/concepts1/livepeer-capabilities.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` is a valid 15-value canonical purpose |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: community` is valid |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, under 160 chars |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Mix of generic + specific: "AI inference", "real-time compute", "video streaming" — searcher-aligned |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | Page mixes founder-evaluator content (cost benchmarks, ROI framing) with community register (audience: community). No inline `<Note>For founders:</Note>` flagging |
| 2. Voice | 2.1 | UK English | FAIL | "centralised" used correctly; but "specializing", "tokenization", "characterizes" patterns appear elsewhere in repo. Spot check this page: "decentralised" used. Check passes for body but Accordion summary uses "tokenisation" — actually consistent. PASS on review |
| 2. Voice | 2.1 | UK English (reverify) | PASS | All -ise/-isation/-our/-re forms used. No US spellings on visible text |
| 2. Voice | 2.2 | Zero banned words | FAIL | "essentially" not found; check StyledStep titles: "Real Promises of DePIN" has "essential" framing? No. "really" not found. CLEAR. PASS |
| 2. Voice | 2.2 | Zero banned words (reverify) | PASS | None of the 10 banned words found |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | Line 105: "Livepeer offers a unique set of value propositions that make it an attractive choice for developers..." — generic value-statement opener (close to banned construction) |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No `not [X]` value statements; no `This page` self-reference |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with a YouTube video + 12-bullet Accordion summary of an external video before stating Livepeer's own capabilities. Mechanism (panel discussion) before fact |
| 2. Voice | 2.6 | Paragraph discipline | PASS | StyledStep blocks each lead with the value, end on a fact |
| 2. Voice | 2.7 | Audience register correct | FAIL | Mix of founder-targeted ("Cut video transcoding costs by around 10x versus AWS") and community-targeted ("Stake LPT to earn passive returns"). Audience says `community` but content reads founder-evaluator |
| 2. Voice | 2.8 | Per-audience prohibited | FAIL | Founder register prohibits "Powered by blockchain", "The future of decentralised" — none used. Community register prohibits "thriving community" — none used. But founder content under community register is itself a violation of 1.14 |
| 2. Voice | 2.9 | No passive value statements | PASS | Quantified: "10x", "sub-second latency", "70 percent of recent network fees", "49 percent QoQ" |
| 2. Voice | 2.10 | No hedging openers | PASS | Direct openers in StyledSteps |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses Orchestrator/Gateway/Delegator consistently |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses `--` (double hyphen) only |
| 2. Voice | 2.13 | Entity-led voice | PASS | StyledSteps lead with system fact |
| 2. Voice | 2.14 | No hedging verbs | PASS | "Run", "Pay", "Cut", "Tap", "Stake" — direct verbs |
| 2. Voice | 2.15 | Description not self-referential | FAIL | Description starts "An introduction to the capabilities of..." — "An introduction" is borderline self-referential / not subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No "Broadcaster", no "Pool worker", no "Combined mode" |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Consistent role names |
| 2. Voice | 2.18 | Spell check | PASS | No typos found in visible body |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Roles match |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Heavy product/repo references (Storyboard, NaaP, BYOC, ComfyStream, ComfyUI, Daydream, pytrickle) — borrows developer-tab register |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "DePIN", "BYOC", "LoRA", "LIPs", "SPE", "LV2V", "NaaP", "LPT inflation rewards" — many undefined on first use (some link out, but to GitHub not glossary) |
| 2. Voice | 2.22 | Terminology lock | N/A | None |
| 3. Headings | 3.1 | Heading score >= 20/25 | PASS | "Livepeer Capabilities" (22/25), "Livepeer Runtime Functionality" (20/25), "Livepeer Integration Capabilities" (22/25), "Livepeer Capability Frontier" (24/25 — strong editorial), "Current Integrations" (18/25 — generic) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No banned terms in headings |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | All H2s start with "Livepeer" |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concept-named |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Functions & Capabilities" — 4 words, concept-derived. Mismatch with sidebarTitle "Capabilities" though |
| 3. Headings | 3.7 | Expert editorial choice | PASS | "Livepeer Capability Frontier" shows editorial intent |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Governing-concept naming |
| 3. Headings | 3.9 | Per-audience register | FAIL | Mixes founder + community register |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Same as 3.4 |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Tries to do (a) capability inventory, (b) functionality inventory, (c) integration inventory, (d) roadmap. Four jobs |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community understand what Livepeer can do today and what's on the horizon" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Not in docs.json — orphan |
| 4. Structure | 4.4 | No dead ends | PASS | Related pages section present |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | Assumes familiarity with DePIN, GPU markets, transcoding |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with /v2/about/protocol/mechanisms not stated |
| 4. Structure | 4.7 | Info type per section correct | PASS | Mostly conceptual + structural |
| 4. Structure | 4.8 | No content duplication | FAIL | Capability bullets overlap with `concepts0/livepeer-capabilities.mdx`. Roadmap accordion overlaps with `v2/about/guides/technical-roadmap.mdx` (referenced) |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation |
| 4. Structure | 4.10 | Cross-tab links | PASS | Multiple links to /v2/orchestrators/portal, /v2/developers, /v2/solutions, /v2/about/protocol |
| 4. Structure | 4.11 | Discord test | FAIL | Page is too long (~30KB+ visible content) for "what can Livepeer do?" — would deluge a Discord asker |
| 4. Structure | 4.12 | Page size appropriate | PASS | Within concept range |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | Multiple commented-out scratch blocks (lines 27–51, 100, 124–134, 211, 217–238) |
| 4. Structure | 4.14 | Flat layout | PASS | Flat |
| 4. Structure | 4.15 | Trade-offs present | FAIL | All-positive framing. No "when not to use Livepeer" — required by 4.15 for founder-evaluator content |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Multi-audience scope unresolved |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | Founder + community + delegator + builder content mixed without inline flagging |
| 5. Layout | 5.1 | Correct template | PASS | concept template |
| 5. Layout | 5.2 | Required sections | PASS | Has overview Tip + body + Related pages |
| 5. Layout | 5.3 | Only approved components | PASS | All approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | None |
| 5. Layout | 5.5 | Info type → component | PASS | StyledSteps for value-prop list, AccordionGroup for roadmap, Tabs for integration categories, Cards for runtime functionality |
| 5. Layout | 5.6 | MDX renders clean | PASS | Should render |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | Frontmatter uses new schema |
| 5. Layout | 5.8 | CSS custom properties only | PASS | `var(--accent)` |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Custom composition |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom |
| 5. Layout | 5.13 | Section ordering | PASS | Intro → Capabilities → Functionality → Integrations → Frontier → Related |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | No Steps-in-Accordion violations |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | Hardcoded "70 percent of recent network fees", "49 percent QoQ usage growth in 2025", "around 10x" — these are network metrics that should be data-imported or REVIEW-flagged |
| 5. Layout | 5.16 | Related Pages footer | PASS | CardGroup present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `CardGroup` not `<Columns cols={2}>`; descriptions exceed 10 words |
| 5. Layout | 5.18 | Tab icon prop | PASS | All Tab elements have `icon` prop (shield-check, database, money-bill-transfer) |
| 5. Layout | 5.19 | Accordion icon prop | PASS | All Accordions have `icon` prop |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | PASS | StyledSteps with iconColor/titleColor |
| 5. Layout | 5.22 | Navigation cards | FAIL | Related Cards lack `<CustomCardTitle>` wrapper (use `title` attribute on Card directly) |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Has StyledSteps (20+ steps!) + AccordionGroup + Tabs (in BorderedBox) + CardGroup. Multiple major layout elements |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | 6+ CustomDividers all using `style={{ margin: '-1rem 0 -2rem 0' }}` — inline style violation (5.34) and over-use |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | None |
| 5. Layout | 5.28 | Import section ordering | PASS | Components — correct |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | FAIL | "10x cheaper", "70 percent fees", "49 percent QoQ", "8 years of go-livepeer", "$250B market" — no REVIEW flags |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Capabilities in StyledSteps visible without interaction |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Page in concepts1/ orphan folder; commented scratch present |
| 5. Layout | 5.34 | No inline styles | FAIL | `style={{ margin: '-1rem 0 -2rem 0' }}` on 6+ CustomDividers; `style={{ marginBottom: '2rem' }}` on BorderedBox (line 247) |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "10x cheaper than AWS", "around 10x", "70 percent of recent network fees are AI-driven", "49 percent QoQ usage growth in 2025", "$250 billion market", "3 million+ video minutes weekly" (in summary), "40% annual returns" — none have inline citation |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | No API |
| 6. Veracity | 6.4 | Numbers are real | FAIL | Numbers cited but unsourced. "Around 10x" with no range or year |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | No cross-reference |
| 6. Veracity | 6.8 | Source staleness | FAIL | "2025" QoQ figures will date quickly — no staleness flag |
| 6. Veracity | 6.9 | No open-ended research | PASS | No open research notes |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | YouTube panel discussion is T3; no T1/T2 cross-check for the numerical claims |
| 6. Veracity | 6.11 | Glossary definitions match | FAIL | Capability names not glossary-aligned |
| 6. Veracity | 6.12 | Glossary verified | FAIL | Same |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | Not registered |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | Orphan |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal |
| 7. Navigation | 7.4 | No structural orphans | FAIL | This file is one |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Multi-audience scope unresolved |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | Routes to orchestrators, developers, delegators (via /v2/about/network/actors), solutions, protocol |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Should be `_workspace/drafts/` or canonical concept path |
| 7. Navigation | 7.8 | File naming conventions | PASS | Acceptable |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Not in nav |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources |
| 8. Links | 8.1 | Internal links resolve | PASS | Most resolve. `/v2/about/protocol/token-economics` may be stale (renamed to livepeer-token per git status) |
| 8. Links | 8.2 | External links live | PASS | GitHub repos, Daydream, Studio links live |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All imports valid |
| 8. Links | 8.4 | Images load | N/A | None |
| 8. Links | 8.5 | Page renders | PASS | Should render |
| 8. Links | 8.6 | No TODO/TBD | PASS | No published TODOs |
| 9. Process | 9.1–9.6 | All process checks | FAIL | No sign-off, no decisions in registry |
| 10. Completeness | 10.1 | Every question has a page | PASS | "What can Livepeer do?" answered |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Too dense for orientation reader |
| 10. Completeness | 10.3 | Persona paths unblocked | PASS | Cross-tab links present |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Boundary with mechanisms/architecture not stated |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | Audience-specific paths blended |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 8 | 3 | 3 | 8/11 |
| 2. Voice | 22 | 13 | 6 | 3 | 13/19 |
| 3. Headings | 10 | 9 | 1 | 0 | 9/10 |
| 4. Structure | 17 | 6 | 10 | 1 | 6/16 |
| 5. Layout | 34 | 16 | 11 | 7 | 16/27 |
| 6. Veracity | 12 | 1 | 10 | 1 | 1/11 |
| 7. Navigation | 11 | 4 | 4 | 3 | 4/8 |
| 8. Links | 6 | 6 | 0 | 0 | 6/6 |
| 9. Process | 6 | 0 | 6 | 0 | 0/6 |
| 10. Completeness | 6 | 3 | 3 | 0 | 3/6 |

**Overall**: 66/120 applicable checks passed (~55%)
**Verdict**: NEEDS WORK — strongest content of the concepts1 set, but multi-audience scope and unverified numbers are blockers

## Critical Issues

1. **CRITICAL** — Multiple unverified quantitative claims ("10x", "70 percent", "49 percent QoQ", "$250B market", "40% returns") with no REVIEW flags or citations. Per check 6.4 / 6.5 / 5.30.
2. **HIGH** — Multi-audience blending: page is `audience: community` but content reads founder-evaluator (cost benchmarks, ROI). Either split or add inline `<Note>For founders:</Note>` flagging per checks 1.14 / 4.17.
3. **HIGH** — Page is an orphan: not in docs.json, sits in non-canonical `concepts1/`.
4. **HIGH** — All-positive framing; no trade-offs or "when not to use Livepeer" per check 4.15.
5. **MEDIUM** — Missing `veracityStatus`. Multiple specialised terms (BYOC, NaaP, LoRA, SPE, LV2V) undefined on first use.
6. **MEDIUM** — Inline styles on 6+ CustomDividers violate check 5.34.

## Cross-Page Duplication Notes

- The 20+ StyledStep capability list duplicates content in `concepts0/livepeer-capabilities.mdx` (renamed from concepts/).
- The DePIN Tip and YouTube video reappear in `concepts1/core-concepts.mdx` and `concepts1/livepeer-protocol-and-network.mdx`.
- The runtime functionality CardGroup overlaps with `concepts2/livepeer-overview.mdx` and `concepts/livepeer-stack.mdx`.
- The roadmap AccordionGroup overlaps with `v2/about/guides/technical-roadmap.mdx` (referenced in Related cards).

## Recommendation

Move to `_workspace/drafts/` or merge into the canonical concept page. Source-cite or REVIEW-flag every numerical claim. Decide audience (community OR founder, not both); flag any cross-audience callouts inline. Replace inline-style CustomDividers with proper margin props. Define BYOC/NaaP/LoRA/SPE/LV2V on first use.
