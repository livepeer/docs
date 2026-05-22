# Review: help.mdx

**Page**: `v2/developers/guides/help.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: `orient`
**Bytes**: 5,860
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Missing `veracityStatus`. Legacy `status: current` (line 25). |
| 1. Frontmatter | 1.2 | pageType canonical | MIXED | `pageType: reference` (line 7) — canonical. Page is closer to `resource` (knowledge-hub style — list of external links + Discord/Forum/GitHub) per the matrix. Reference acceptable as "channel reference". |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. Could be `compendium`. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: orient` (line 9). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 8). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` (line 10). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` (line 11). |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` until Discord channel/responder claims are sourced. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Every way to get help as a Livepeer developer: Discord channels, forum categories, office hours, GitHub issues, and bug bounty reporting." 145 chars. Subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | Uses developer-tab OG. |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific. |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | "behaviour" line 110 (in table cell) UK. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | MIXED | Line 31: "Whether you are stuck on an API call, troubleshooting a node, reporting a security vulnerability, or looking for a collaborator, this page maps every available help channel to the type of question it handles best." — long conditional-prefix opener that lists 4 conditions before the subject. Borderline 2.4 conditional gatekeeping; technically a parallel-conditional setup not a single-condition gate. INFO. |
| 2. Voice & Copy | 2.5 | Opening order subject-first | MIXED | Line 31 opens with "Whether you are…" — second-person conditional opener before the main fact. Subject-first would be "The Livepeer developer community offers help across Discord, the forum, GitHub issues, office hours, and the Immunefi bug bounty programme — each channel handles a different question type." MEDIUM. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | MIXED | See 2.5. |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | LIP, Immunefi, ComfyStream, PyTrickle canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | |
| 2. Voice & Copy | 2.13 | Entity-led voice | MIXED | Body paragraphs system-led: "The Livepeer Discord is the primary…", "The Livepeer Forum is the permanent record…", "File bugs against the specific repository…", "Report smart contract vulnerabilities through…". PASS for body. Intro fails (see 2.5). |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | MIXED | Line 110: "broadcaster/orchestrator behaviour" — `broadcaster` referenced as go-livepeer CLI mode. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `LIPs` (line 78) — "Livepeer Improvement Proposals" expanded inline ✓. `SPE` (line 92) — "Special Purpose Entity" not expanded. `RFC 8693 token exchange` etc. — N/A here, not present. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening | N/A | Help/resource page. |
| 2.D | 2.D2 | Every function/API named has code/link | N/A | |
| 2.D | 2.D3 | Versions stated explicitly | N/A | |
| 2.D | 2.D4 | Error states in main content | N/A | |
| 2.D | 2.D5 | No prose explanations of self-evident code | N/A | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | MIXED | Line 84-86 `<Note>`: "Discord is best for real-time, conversational questions. For questions that deserve a permanent, searchable answer, the Forum is a better home." — this is a load-bearing editorial guidance about channel choice. Should be either prose paragraph or `<Tip>`. INFO/MEDIUM. |
| 3. Headings | 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | MIXED | "Discord", "Forum", "GitHub issues", "Security vulnerabilities" — domain-anchored. "Channel reference" is the top H2; clear. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | `title: "Help"` (line 2) — single word. Lower bound of well-formed (1-3 words). Could be stronger: "Developer Help & Support" or "Help Channels". |
| 3. Headings | 3.7 | Editorial choice | MIXED | "Help" alone is generic; "Channel reference" as first H2 is better. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | reference/resource style — H2s are findability-led. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | MIXED | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: route developer to right help channel. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer find the right channel for their question type." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | No prereq link. Closing pointer (line 129) routes to job-debugging — acceptable but limited. |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing pointer (line 129) is the only on-tab handoff. No Related Pages footer. |
| 4. Structure | 4.5 | Prerequisites stated or linked | N/A | Help page. |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Page doesn't explicitly bound out the Solutions tab / managed-platform support channels. |
| 4. Structure | 4.7 | Information type correct | PASS | Reference / routing. |
| 4. Structure | 4.8 | No content duplication | MIXED | Channel reference table (lines 37-48) repeats content from each H2 body section. Acceptable for findability. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | MIXED | No formal cross-tab cards. The page is about help channels, not on-tab content; could link to `/v2/community/...` (community tab if it exists), `/v2/about/...` (governance), `/v2/orchestrators/...` (orchestrator-specific channels). |
| 4. Structure | 4.11 | Discord test | PASS | Answers "where do I ask?" with a concrete matrix. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 5.9KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | MIXED | `<Note>` (line 84) names Discord-vs-Forum trade-off. No "what NOT to use channel X for" framing. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No fenced code blocks. |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | Every function/API named has code/link | N/A | |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | MIXED | If `resource` template: header CTA + intro + `<Card>` outbound links — page has channels table not cards. If `reference` template: intro + structured data + Related Pages — close but no Related Pages. |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | Related Pages MISSING. |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | FAIL | 2 raw markdown tables instead of `<StyledTable>`. AccordionGroup used for Discord sections — PASS. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter values | MIXED | `status: current` (line 25) legacy. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | No `<CenteredContainer>` wrapper around intro or header (other developer pages use this for header callouts). No header CTA — page jumps from frontmatter directly to body prose. No opening `<CustomDivider />` immediately before intro (line 31). |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Channel reference table (37-48) and GitHub issues table (108-115) hardcoded. Could be `snippets/data/community/help-channels.json` imported. The channels list is canonical reference data. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Closing pointer (line 129) is the only handoff. Acceptable but underweight. |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | 3 `<Accordion>` elements (lines 60, 68, 76) — ALL missing `icon` prop. Check 5.19 explicitly requires every Accordion to include `icon`. |
| 5. Layout | 5.20 | Code block icon + title | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | 2 raw markdown tables: lines 37-48 (Channel reference — 10 rows), 108-115 (GitHub issues — 6 rows). Both should be `<StyledTable>`. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables. |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 2 tables + 1 AccordionGroup = 3 medium elements. Acceptable. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | No opening `<CustomDivider />` before intro (line 31). Internal dividers at 33, 50, 88, 102, 119, 127 — PASS pattern. No divider before final closing paragraph line 129 (no Related Pages). |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | PASS | Single element import (CustomDivider, line 29). |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | MIXED | Channel reference table at top — flat, scannable. But Accordions (60, 68, 76) HIDE the Discord channel descriptions — decision-relevant info is one click deep. Per 5.31: "Decision-critical info visible without interaction". The reader looking for "which Discord channel handles X?" already has the table at the top, so hiding the per-channel detail in Accordion is acceptable. PASS in spirit; INFO for the rubric strict-read. |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Channel reference is at top (lines 37-48) — appropriate for a help/orient page where the table IS the canonical reference. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | MIXED | "Bi-weekly" Office Hours cadence (line 44) — no source. "Days" response time for forum / GitHub issues — generic SLA without source. Channel "Best for" assignments are editorial and not citable to a single source; acceptable. |
| 6. Veracity | 6.2 | Code tested | N/A | |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | MIXED | "Hours" / "Days" / "Bi-weekly" — qualitative SLA without quantitative numbers. Acceptable for help page. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | MIXED | Channel names (`#lounge`, `#ai-research`, `#delegating`, `#governance`, `#orchestrating`) — Discord server structures change; need re-verification cadence. `lastVerified: 2026-05-14` (line 26) recent. |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2651. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | No cross-tab cards. Help page is naturally cross-cutting; missing graduations to community-tab if it exists. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | MIXED | `/v2/developers/guides/observability-and-debugging/job-debugging` (line 129) — verified. **Line 123: "See [bug bounties](/v2/developers/resources/reference/apis) for programme scope and reward tiers."** — link target `apis` does NOT match anchor text "bug bounties". The bug-bounties page exists in `_workspace/new files/files7/` but is NOT published in v2/. The link is BROKEN in semantic sense — it routes to APIs reference, which has no bug bounty content. HIGH FINDING. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | 10 external links (Discord invites, forum URL, Office Hours URL, 6 GitHub issues URLs, Immunefi URL) — assumed live; not verified live in this review. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | PASS | |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | MIXED | |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | |
| 10. Content Completeness | 10.7 | Persona-specific guides present | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Help" | MIXED | Single word — lower bound of well-formed. |
| sidebarTitle | Yes | "Help" | PASS | |
| description | Yes | 145 chars | PASS | |
| pageType | Yes | reference | MIXED | `resource` might fit better. |
| audience | Yes | developer | PASS | |
| purpose | Yes | orient | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | 7 keywords | PASS | |
| og:image fields | Yes (5) | developers.png | PASS | |
| veracityStatus | No | — | FAIL | Add `unverified`. |
| lastVerified | Yes | 2026-05-14 | PASS | |
| status | Yes | current | FAIL | Legacy; remove. |
| pageVariant | No | — | INFO | Could be `compendium`. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | No opening divider before intro line 31. PASS internal placement. |
| `<Tabs>` | No | — | — | |
| `<StyledSteps>` | No | — | — | |
| `<Card>` / `<Columns>` Related Pages | NO | Required | — | Missing — FAIL 5.16/5.17. |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code | No | — | — | |
| `<Note>` / `<Tip>` / `<Warning>` | `<Note>` line 84 (FAIL 2.D7 — carries primary editorial guidance) | — | — | |
| `<Accordion>` / `<AccordionGroup>` | Yes (3 Accordions, 1 group lines 58-82) | — | OK | All 3 Accordions MISSING `icon` prop — FAIL 5.19. |
| `<StyledTable>` | NO | Required for tabular reference | — | 2 raw markdown tables. FAIL 5.23. |
| `<LinkArrow>` | No | — | Recommended | Could use for the 10 external links. |
| `<CenteredContainer>` | No | — | Recommended | Header context could be wrapped. |

## Cross-page duplication and link gaps

- **OVERLAP**: Channel reference table (lines 37-48) and Discord/Forum/GitHub-issues body sections (lines 52-118) cover the same channels at different levels of detail. Acceptable as overview + drill-down.
- **LINK GAPS**: **Line 123: `[bug bounties](/v2/developers/resources/reference/apis)`** — link target is the APIs reference, which has no bug bounty content. The bug-bounties content lives only in `_workspace/new files/files7/bug-bounties.mdx` (not published). The link is semantically broken. Either point to the Immunefi URL directly (already named on line 123), drop the link, or move the bug-bounties.mdx out of workspace into a published path. HIGH.
- **LINK GAPS**: `Livepeer-Signature` not mentioned (not relevant here, but cross-ref for `production-hardening-checklist.mdx` Layer 3).
- **LINK GAPS**: `tools.livepeer.cloud` not referenced — the canonical orchestrator status / pricing surface that many "help" questions hit.
- **LINK GAPS**: No link to the `livepeer/docs/issues` repo for "I want to report a docs problem" — the table doesn't include the docs repo (lines 37-48), though body section §"GitHub issues" includes it (line 115). The header table is missing this entry.
- **LINK GAPS**: No link to community-tab (if exists) or to Foundation contact addresses beyond `security@livepeer.org`.
- **LINK GAPS**: No Foundation Discord roles / SPE leads explicitly named. "Treasury" forum category (line 96) mentioned but no contact for SPE submission help.
- **STRANDED**: Closing pointer (line 129) routes to job-debugging — narrow. No broader Related Pages.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 1 | line 31: long "Whether you are…" conditional opener — see 2.5. MEDIUM (borderline). |
| Conditional gatekeeping | 0 | (line 31 is parallel conditional, not single-condition gate — INFO) |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 1 | line 31 starts with "Whether you are stuck…" — MEDIUM. |
| Self-reference | 1 | line 31: "this page maps every available help channel" — INFO. |
| Deprecated terms (Broadcaster) | 1 | line 110: "broadcaster/orchestrator behaviour" in GitHub issues table — go-livepeer CLI mode reference. INFO. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Channel reference | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Discord | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Forum | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| GitHub issues | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Security vulnerabilities | 5 | 4 | 5 | 5 | 4 | 23 PASS |

Title "Help": 3/3/5/5/5 = 21 PASS (lower-bound well-formed).

Accordion section titles (scored as scan text):
- "BUILDERS section" — 4/3/4/4/4 = 19 BORDERLINE FAIL (could be "Developer channels")
- "NETWORK section" — 4/3/4/4/4 = 19 BORDERLINE FAIL (could be "Operator channels")
- "PROTOCOL section" — 4/3/4/4/4 = 19 BORDERLINE FAIL (could be "Governance channels")

The Discord-style ALL-CAPS section labels are mimicking the Discord UI literal text. Faithful to Discord but weaker as headings.

## Code Block Audit

No fenced code blocks. N/A.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "I'm stuck — where do I ask?". The channel reference table (lines 37-48) delivers this for the 80% case. But the table's "Best for" column is editorial without depth. A new developer reading "Builder questions, general development" doesn't know if their question is a builder question vs a delegating question (the row above) vs a forum question (the row below). The page does not give the reader a decision rule. Compare to GitHub's help center which surfaces "Most popular topics" + a search bar.
- **Fix step:** Add a hero `<Tip>` or `<Card>` above the table titled "Not sure where to ask?" with a 4-bullet decision rule: (a) Real-time + simple → Discord `#lounge`. (b) Multi-step + searchable → Forum Builder. (c) Reproducible bug → GitHub issue on the right repo. (d) Security vulnerability → Immunefi. Each bullet links to its section. Use `<LinkArrow>` not bare links to surface the action verb.
- **Source/exemplar:** GitHub help center decision-rule pattern; `.claude/references/layout/best-practice.md` Header CTA pattern.

### Layer 2 — Composition
- **Gap:** 2 raw markdown tables (FAIL 5.23). 3 Accordions missing `icon` (FAIL 5.19). `<Note>` (line 84) carries primary editorial guidance (FAIL 2.D7). No Related Pages footer. No `<CenteredContainer>` wrap on any header element. Opening prose (line 31) is long conditional. ALL-CAPS Accordion titles mirror Discord UI but score 19/25 as headings. No imports beyond `CustomDivider`.
- **Fix step:** (a) Convert 2 raw markdown tables (lines 37-48, 108-115) to `<StyledTable>` with proper `<TableRow header>` rows. (b) Add `icon` prop to each Accordion: `<Accordion title="Developer channels" icon="laptop-code">`, `<Accordion title="Operator channels" icon="server">`, `<Accordion title="Governance channels" icon="scale-balanced">`. Also rewrite titles from ALL-CAPS to title-case. (c) Convert `<Note>` (line 84) to prose or `<Tip>`. (d) Add `## Related Pages` footer with `<Columns cols={2}>` + 4 cards. (e) Wrap intro prose in `<CenteredContainer preset="readable90">` to match sibling pages. (f) Rewrite line 31 opener subject-first.
- **Source/exemplar:** `_packet/component-matrix.md` resource/reference matrix; `repo-map.mdx` review for StyledTable refactor pattern.

### Layer 3 — Cross-page integration
- **Gap:** **Broken-in-spirit link on line 123**: `[bug bounties](/v2/developers/resources/reference/apis)` — link target wrong (APIs page has no bug bounty content). Real source content exists only in `_workspace/new files/files7/bug-bounties.mdx` (not published). Also missing: no link to `tools.livepeer.cloud` (where many help questions land). No link to the `livepeer/docs/issues` repo in the channel reference table (lines 37-48) even though it appears in the GitHub Issues body section. No cross-tab graduation.
- **Fix step:** (a) Fix line 123: either drop the parenthetical link (Immunefi URL already named at start of line) OR change href to a published bug-bounties page if one exists in another tab OR move `_workspace/new files/files7/bug-bounties.mdx` to `v2/developers/resources/bug-bounties.mdx` and link there. (b) Add a row to the Channel reference table for `livepeer/docs/issues` (currently only in body section). (c) Add `tools.livepeer.cloud` row or note. (d) Add Related Pages CardGroup with 4 cards including cross-tab graduations. (e) Add inline `<LinkArrow>` to the SPE forum category for Treasury (line 96).
- **Source/exemplar:** `_workspace/new files/files7/bug-bounties.mdx` (orphan source); `_packet/review-rubric.md` check 8.1.

### Layer 4 — Veracity and source authority
- **Gap:** Several qualitative SLAs ("Hours" / "Days" / "Bi-weekly") given without timestamp or source — the page asserts these are accurate but the Discord channel response time is a community-volunteer SLA, not a published one. `lastVerified: 2026-05-14` is recent but the page declares no methodology for verification (did the author actually check Discord channel members + last responder time?). Office Hours cadence (line 44, "Bi-weekly") — needs source (link to Office Hours sign-up).
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) Add a one-line "Verification" note in the intro: "Response time estimates are community-observed; actual times vary by channel volume and time-of-day." (c) Link `Bi-weekly Office Hours` to the canonical Office Hours sign-up page that names the next sessions. (d) For channel names, add a `{/* REVIEW: re-verify channel structure quarterly */}` placeholder.
- **Source/exemplar:** `livepeer.org/dev-hub` (already linked); `discord.gg/livepeer` Discord server.

### Layer 5 — Product-forward depth
- **Gap:** This is a Notion-style "links page" — table + body sections + closing pointer. Missing: visual signal of channel health (last post date / active members / responsiveness), priority order of channels for a NEW user (Discord first? Forum first? GitHub first?), worked examples ("Got a 401 error? Ask in `#lounge` with this template: …"). The page is a directory; it should be a triage tool. Compare to FAQ pages on major SaaS platforms which embed a search + recent topics + "people also asked".
- **Fix step:** (a) Add a `<Badge>Last verified 2026-05-14 — N active channels</Badge>` near title. (b) Add a "Get faster help" `<Tip>` with a "what to include in your question" template (error message + reproduction steps + your stack + what you've tried). (c) Add a "Recent activity" `<Tip>` driven by a snippet showing the 3 most-recently-active channels (this would require a data source; can stub with a `{/* REVIEW */}` placeholder for now). (d) Reframe `<Note>` (line 84) Discord-vs-Forum into a small comparison `<StyledTable>` with columns Channel / Latency / Searchability / Best for.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` triage-page pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 5 / MEDIUM 6 / INFO 5

**Critical findings (top 5)**:
1. **Line 123 link broken in spirit (8.1)** — `[bug bounties](/v2/developers/resources/reference/apis)` — APIs page has no bug bounty content; bug-bounties source only exists in `_workspace/new files/`. HIGH.
2. **3 Accordions missing `icon` (5.19)** — lines 60, 68, 76 — explicit rubric failure. HIGH.
3. **2 raw markdown tables not `<StyledTable>` (5.23)** — lines 37-48, 108-115. HIGH.
4. **No Related Pages footer (5.16)** — closing pointer line 129 only. HIGH.
5. **`<Note>` carries primary content (2.D7)** + **legacy `status: current` (5.7)** + **missing `veracityStatus` (1.8)**. MEDIUM/HIGH. |

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Fix line 123 broken-spirit link `[bug bounties](/v2/developers/resources/reference/apis)`. Either (a) drop the parenthetical link (Immunefi URL on same line already routes the reader); (b) point to a published bug-bounties page; or (c) move `_workspace/new files/files7/bug-bounties.mdx` to a published path under `v2/developers/resources/` and link there. | 123 | HIGH | S-M depending on choice | check 8.1, Layer 3 |
| 2 | Add `icon` prop to all 3 Accordions (lines 60, 68, 76). Suggested: `icon="laptop-code"`, `icon="server"`, `icon="scale-balanced"`. Also retitle from ALL-CAPS to title-case ("Developer channels" / "Operator channels" / "Governance channels"). | 60, 68, 76 | HIGH | S | check 5.19 |
| 3 | Convert 2 raw markdown tables to `<StyledTable>`: lines 37-48 (Channel reference — 10 rows), 108-115 (GitHub issues — 6 rows). Add `<TableRow header>` + `<TableCell header>`. | 37-48, 108-115 | HIGH | M | check 5.23, 5.24 |
| 4 | Add Related Pages footer before line 129: `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` with 4 `<Card>` + `<CustomCardTitle horizontal>`. Cards: Developer Guides Overview (sibling), Production checklist (sibling), Job debugging (current footer target → keep here), Solutions tab Help (cross-tab if exists). | After 127 | HIGH | M | check 5.16, 5.17, 4.10 |
| 5 | Convert `<Note>` (line 84-86) Discord-vs-Forum guidance to prose paragraph or `<Tip>`. Better: convert to a small comparison `<StyledTable>` near the Channel reference table. | 84-86 | HIGH | M | check 2.D7, Layer 5 |
| 6 | Add `veracityStatus: unverified` to frontmatter. Remove legacy `status: current` (line 25). | 25 | MEDIUM | S | check 1.8, 5.7 |
| 7 | Rewrite intro (line 31) subject-first: "The Livepeer developer community offers help across Discord, the forum, GitHub issues, office hours, and the Immunefi bug bounty programme. Each channel handles a different question type — start with the table below." | 31 | MEDIUM | S | check 2.5, 2.10 |
| 8 | Add a "Not sure where to ask?" `<Tip>` above the channel reference table with 4-bullet decision rule (Discord / Forum / GitHub / Immunefi). | After 33 | MEDIUM | M | Layer 1 |
| 9 | Add a row to the Channel reference table (37-48) for `livepeer/docs/issues` — currently only in body section. Also consider `tools.livepeer.cloud` row. | 37-48 | MEDIUM | S | 4.8, Layer 3 |
| 10 | Add opening `<CustomDivider />` before line 31 intro. Wrap intro in `<CenteredContainer preset="readable90">` to match sibling pages. | Before 31 | MEDIUM | S | check 5.26, 5.11 |
| 11 | Link Office Hours cadence (line 44) to canonical sign-up page that names next sessions. | 44 | MEDIUM | S | check 6.1, Layer 4 |
| 12 | Expand `SPE` acronym on first use (line 92) — "Special Purpose Entity (SPE)". | 92 | INFO | S | check 2.21 |
| 13 | Strengthen title: "Help" → "Developer Help" or "Help Channels" (1-3 words; current scores 21/25 at lower bound). | 2, 3 | INFO | S | check 3.6 |
| 14 | Add `pageVariant: compendium` to frontmatter. | After 7 | INFO | S | check 1.3 |
| 15 | Add `<Badge>Last verified 2026-05-14 — N active channels</Badge>` near title. | After title | MEDIUM | S | Layer 5 |
| 16 | Add a "Get faster help" `<Tip>` near the closing pointer with what-to-include template (error message + repro + stack + tried). | Near 127 | MEDIUM | M | Layer 5 |
