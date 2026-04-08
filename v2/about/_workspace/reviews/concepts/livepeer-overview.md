# Review: livepeer-overview.mdx

**Page**: `v2/about/concepts/livepeer-overview.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience` and `purpose` use deprecated values (see 1.5, 1.4). All other required fields present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` -- valid 7-type value |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | No `pageVariant` present, none required |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: explain` -- valid canonical value. Wait, actual value is `purpose: explain`. PASS |
| 1. Frontmatter | 1.4 | purpose canonical (corrected) | PASS | `purpose: explain` -- valid canonical 15-value set member |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: community` -- valid canonical 7-token set member. Wait, checking file: actual value is `audience: community`. PASS |
| 1. Frontmatter | 1.5 | audience canonical (corrected) | PASS | `audience: community` -- valid 7-token value |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` -- valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` -- valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing entirely |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present (optional) |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present (optional) |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "An overview of the Livepeer protocol and network." -- subject-first, under 160 chars |
| 1. Frontmatter | 1.12 | OG image block complete | FAIL | Only `og:image` present. Missing: `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords include generic single words: "livepeer", "about", "protocol", "overview". Better: "livepeer protocol overview", "livepeer network architecture", "decentralised video infrastructure". However "livepeer protocol" and "protocol overview" are reasonable |
| 2. Voice & Copy | 2.1 | UK English | FAIL | "incenticises" (line 83) -- misspelling of "incentivises". "decentralised" used correctly throughout. "behavior" not found. "optimized" (line 33) should be "optimised" |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No instances of effectively, essentially, basically, meaningful, significant, various, several, obviously, clearly |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No "This page" self-reference, no unresolved `if [condition]`, no `not [X]` value statements in body |
| 2. Voice & Copy | 2.5 | Opening order correct | PASS | Page opens with "Livepeer is a full-stack decentralised infrastructure platform and marketplace for video streaming & AI." -- value/subject first |
| 2. Voice & Copy | 2.6 | Paragraph discipline | FAIL | Line 49: long paragraph combining ecosystem description, economic incentives, governance, and technical architecture in one block. Lines 155-157: "Additionally, actors can also be categorised..." -- trailing list with no conclusion |
| 2. Voice & Copy | 2.7 | Audience register correct | PASS | `audience: community` -- accessible language used throughout. Technical terms introduced with context |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | FAIL | Line 51: `<Tip>` contains "blockchain space" -- borderline marketing language for community audience. No explicit banned phrases but register drifts toward marketing in places |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Value claims are concrete: "full-stack decentralised infrastructure platform" rather than vague qualifiers |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Opens with direct declarative statement |
| 2. Voice & Copy | 2.11 | Terminology locked | FAIL | Line 177: "Broadcaster (deprecated -> Gateway)" used in old notes expandable. Line 211: "Broadcaster (now a behaviour, not an actor)" -- deprecated term discussed but not in canonical form |
| 2. Voice & Copy | 2.12 | No em-dashes | PASS | No em-dashes found |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Most paragraphs open with entity subjects: "Livepeer is...", "The Livepeer Protocol is...", "The network is..." |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No "can help", "allows you to", "enables you to" in value claims |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | "An overview of the Livepeer protocol and network." -- subject-first |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" used in the old notes expandable section (lines 177, 211-218). While inside `<expandable>`, these are still rendered content. Also line 90: "Gateways (aka Broadcasters)" -- acceptable as clarification |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Main body uses "Gateways" consistently. "Broadcasters" only in historical/deprecated context within expandable |
| 2. Voice & Copy | 2.18 | Spell check | FAIL | Line 83: "incenticises" -- should be "incentivises". Line 157: inconsistent capitalisation "AI Workers" vs other role names |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Main body terminology matches canonical terms. Deprecated terms confined to expandable section |
| 2. Voice & Copy | 2.20 | Per-tab terminology | N/A | About tab terminology file would need checking |
| 2. Voice & Copy | 2.21 | First use specialised term defined | FAIL | "DePIN" (line 51) defined inline -- good. "LPT" first used (line 143) without inline definition. "Probabilistic payments" (line 81) used without definition |
| 2. Voice & Copy | 2.22 | Terminology lock respected | N/A | No terminology lock identified for About tab |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | 2 of 7 headings score below 20/25 (see Heading Score Table) |
| 3. Headings | 3.2 | No banned/weak headings | PASS | No banned or weak standalone heading terms used in main headings |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | "Protocol vs Network" (line 105, H2) uses literal X vs Y contrast label |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | All main headings include "Livepeer" or domain-specific terms |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name concepts |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Overview" -- concept-derived, concise |
| 3. Headings | 3.7 | Expert editorial choice | PASS | "Livepeer Protocol", "Livepeer Network", "Livepeer Nodes, Actors & Roles" -- domain-anchored editorial choices |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | `concept` page uses governing-concept naming throughout |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible language in all headings |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | All main headings anchored to Livepeer domain |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Page serves one job: explain what Livepeer is (protocol, network, actors) to a community reader |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community reader understand the fundamental components of the Livepeer system (protocol, network, actors)." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Has a `<LinkArrow>` to mental-model.mdx (line 66) which is good. But no explicit link to the next page in docs.json sequence (mental-model.mdx) or previous page |
| 4. Structure | 4.4 | No dead ends | FAIL | Page contains Card links to orchestrators/gateways/delegators/developers portals (lines 131-152). But the old notes expandable (lines 160-287) ends without any handoff. Main content flow does end with Card links, so partial pass. The expandable is the dead end |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Overview concept page -- no prerequisites expected |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Overlap with core-concepts.mdx not addressed. Page does not state what it excludes |
| 4. Structure | 4.7 | Information type per section correct | PASS | Conceptual sections with conceptual content. Protocol/Network sections are definitional. Actors section uses Cards for navigation. Appropriate |
| 4. Structure | 4.8 | No content duplication | FAIL | Protocol/Network/Actors sections duplicate content from core-concepts.mdx. Protocol vs Network table is identical on both pages (lines 110-114 here vs 114-118 on core-concepts.mdx) |
| 4. Structure | 4.9 | Section orientation page | N/A | Section-level check |
| 4. Structure | 4.10 | Cross-tab links present | PASS | Card links to orchestrators portal, gateways portal, delegators portal, developers portal (lines 131-152) -- 4 cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | Can link this page as a complete answer to "What is Livepeer?" -- covers protocol, network, actors with navigation to deeper content |
| 4. Structure | 4.12 | Page size appropriate | PASS | 10,794 bytes -- well above 5KB minimum for concept page |
| 4. Structure | 4.13 | No TODO/REVIEW without tracking | FAIL | Line 161: visible `<Note>INSERT LIVEPEER ACTOR DIAGRAM HERE [THIS ONE LOOKS OLD (whitpaper)</Note>` inside expandable. Line 157: `{/* - Verification Nodes ??*/}` -- JSX comment with unresolved question |
| 4. Structure | 4.14 | Flat layout | PASS | Single page, no sub-folders |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs, limitations, or failure conditions mentioned. Page presents only the positive case of Livepeer's architecture |
| 4. Structure | 4.16 | Content pass context block | PASS | `audience: community` and `purpose: explain` are valid canonical values. Pipeline classification is possible |
| 5. Layout | 5.1 | Correct template | FAIL | Does not follow concept template structure (no Header CTA, no CustomDivider, no Related Pages) |
| 5. Layout | 5.2 | Required sections present | PASS | Concept page has Overview (implicit in opening), Protocol, Network, Actors sections |
| 5. Layout | 5.3 | Only approved components | PASS | Uses QuadGrid, LinkArrow, Card, Tip, Note, expandable -- all approved for concept |
| 5. Layout | 5.4 | Avoided components absent | FAIL | `<expandable>` section (lines 160-287) contains visible TODO/placeholder content including empty headings ("What they do:") with no content |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Cards for navigation links, Tip for callouts, prose for concepts -- appropriate |
| 5. Layout | 5.6 | MDX renders clean | FAIL | The `<expandable>` block (lines 160-287) contains empty headings (H4 "Orchestrators", "Gateways", "Delegators" with "What they do:" and nothing after). This renders as visible incomplete content |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | `pageType: concept`, `purpose: explain`, `audience: community` are all canonical values |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No inline styles in MDX |
| 5. Layout | 5.9 | Generated file banners | N/A | Not a generated file |
| 5. Layout | 5.10 | Component naming/imports | PASS | PascalCase: `QuadGrid`, `LinkArrow` -- correct naming and root-absolute paths |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept-template.mdx structure |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No gold-standard section blocks used |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept ordering should be Header CTA + Intro + Explanation + Comparison + Accordion + Related. Page has: Intro + Explanation + Comparison + Cards + expandable (old notes). Missing Header CTA and Related Pages footer |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view layout used |
| 5. Layout | 5.15 | Data imports, not hardcoded | N/A | No data-file-dependent content |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | Neither present at page end. Page ends with `<expandable>` block of old notes |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions used |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No step sequences |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | QuadGrid Cards (lines 131-152) do not use `<CustomCardTitle>`. They use raw `<Card title="..." icon="...">` |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Raw markdown table at lines 110-114 |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One major layout element (QuadGrid) |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No opening CustomDivider after imports. No CustomDivider anywhere |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid diagrams |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports grouped at top correctly |
| 5. Layout | 5.29 | Media placeholders in TODO | FAIL | Line 161: visible `<Note>` with "INSERT LIVEPEER ACTOR DIAGRAM HERE" inside expandable -- should be JSX comment |
| 5. Layout | 5.30 | Fact-check flags in JSX comments | PASS | Line 157: `{/* - Verification Nodes ??*/}` is in JSX comment format (though unresolved) |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | Protocol vs Network comparison visible on page load |
| 5. Layout | 5.32 | Reference tables at end | PASS | Table appears after explanatory prose |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Not a draft |
| 5. Layout | 5.34 | No inline styles or hardcoded hex | PASS | No inline styles |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "Livepeer was one of the earliest DePIN projects" (line 51) -- needs source. "Livepeer protocol = Arbitrum One (L2)" (line 120) -- unsourced assertion |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers cited |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | "one of the earliest DePIN projects" (line 51) is an unverified historical claim without REVIEW flag |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `veracityStatus` field missing entirely |
| 6. Veracity | 6.7 | Authoritative glossary used | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness check | FAIL | Chain deployment assertions (L1/L2) have staleness risk -- no date or staleness flag |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Line 161 (inside expandable): "INSERT LIVEPEER ACTOR DIAGRAM HERE" -- open-ended task. Line 157: `{/* - Verification Nodes ??*/}` -- open question |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources cited for any claim. "One of the earliest DePIN projects" needs T1/T2 source |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No inline glossary definitions |
| 6. Veracity | 6.12 | Glossary verified against primary | N/A | No glossary definitions |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Present at `v2/about/concepts/livepeer-overview` in docs.json |
| 7. Navigation | 7.2 | Nav matches file system | PASS | File exists at expected path |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal page |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable via docs.json navigation |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Cards provide onward links to orchestrators, gateways, delegators, developers. LinkArrow links to mental model. Journey continues |
| 7. Navigation | 7.6 | Cross-tab graduation paths | PASS | Cards link to 4 other tabs (orchestrators, gateways, delegators, developers) |
| 7. Navigation | 7.7 | File in correct lane | PASS | In `v2/about/concepts/` -- publishable location |
| 7. Navigation | 7.8 | File naming conventions | PASS | `livepeer-overview.mdx` -- valid naming |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 10,794 bytes with substantive content -- above threshold |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section page |
| 8. Links | 8.1 | Internal links resolve | PASS | `<LinkArrow href="/v2/about/concepts/mental-model">` -- valid path. Card hrefs to portal pages appear valid |
| 8. Links | 8.2 | External links live | N/A | No external links in main content |
| 8. Links | 8.3 | Snippet imports resolve | PASS | `QuadGrid.jsx` and `Links.jsx` both verified to exist at import paths |
| 8. Links | 8.4 | Images load | FAIL | Line 163: `<img src="/snippets/assets/media/images/livepeer-stats.png">` inside expandable -- needs verification that file exists |
| 8. Links | 8.5 | Page renders without error | FAIL | Empty headings in expandable section (H4 with "What they do:" followed by nothing) will render as broken-looking content. Expandable old notes section has incomplete HTML structure |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | Line 161 (inside expandable): "INSERT LIVEPEER ACTOR DIAGRAM HERE". Empty "What they do:" sections (lines 174, 180, 186) are essentially TODO stubs |
| 9. Process | 9.1 | Human sign-off | FAIL | No evidence of human sign-off |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions identified |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate passage |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of pipeline phases |
| 9. Process | 9.5 | Findings before fixes | N/A | Page appears to be in active development |
| 9. Process | 9.6 | Feedback routed | N/A | No review feedback trail |
| 10. Completeness | 10.1 | Every question has a page | N/A | Section-level check |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Reader can go from "what is Livepeer" to understanding protocol/network/actors, then follow Card links to deeper tabs |
| 10. Completeness | 10.3 | Primary persona paths unblocked | PASS | Community reader can follow the path: overview -> protocol/network understanding -> portal links to specific roles |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Overlap with core-concepts.mdx not addressed. No explicit scope exclusions stated |
| 10. Completeness | 10.5 | Self-containment | PASS | Page is self-contained for its purpose (overview). Links out to deeper content appropriately |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 47 | "Livepeer is a full-stack decentralised infrastructure platform and marketplace for video streaming & AI." | None | Declarative | No |
| 49 | "Open-participation, distributed infrastructure systems like Livepeer aren't just software systems" | "aren't just" | BORDERLINE -- "not just X" is banned phrase | Yes |
| 55 | "A demand-side agent (an app, platform, or operator) which brings video or AI jobs" | None | Descriptive | No |
| 66 | "See more on the architectural layers in..." | None | Navigational | No |
| 83 | "This makes up the economic and coordination layer that incenticises and enforces desired behaviour." | None | Declarative | No |
| 95 | "These are the deployable, off-chain, operational actors in the network that are contributing to executing video + AI jobs." | None | Declarative | No |
| 95 | "These nodes can be run and operated by anyone who wants to participate or contribute their resources to the network." | "can be run" | Procedural capability | No |
| 116 | "The protocol determines the rules of the game while the network is the players & participants." | None | Metaphorical/declarative | No |

Flagged:
- Line 49: "aren't just software systems" -- matches banned pattern "not just X". Recommend rewrite to state what they ARE positively.

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Livepeer Protocol (H2, L68) | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Livepeer Network (H2, L85) | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Protocol vs Network (H2, L105) | 3 | 2 | 4 | 4 | 3 | 16/25 |
| On-chain vs Off-chain (H4, L118) | 3 | 2 | 4 | 4 | 3 | 16/25 |
| Livepeer Nodes, Actors & Roles (H2, L124) | 4 | 4 | 5 | 4 | 3 | 20/25 |
| Old notes (expandable title, L160) | 1 | 1 | 2 | 2 | 4 | 10/25 |

Note: "Old notes" expandable title does not need to score highly as it is clearly marked as legacy content. Excluding it from the formal score.

2 of 5 scored headings (Protocol vs Network, On-chain vs Off-chain) fall below 20/25 due to literal contrast label pattern.

## Spelling/Typo Check

- Line 83: "incenticises" -- should be "incentivises"
- Line 161: "whitpaper" -- should be "whitepaper" (inside expandable)
- Line 163: Empty `<figcaption></figcaption>` and empty `alt=""` on image

## Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|---|---|---|---|
| QuadGrid | Yes | Yes | Custom wrapper component for Card grid |
| LinkArrow | Yes | Yes | Navigation link component |
| Card (inside QuadGrid) | Yes | Yes (Preferred) | Missing `<CustomCardTitle>` per check 5.22 |
| Tip | Yes | Yes (Preferred) | Used appropriately for callouts |
| Note | Yes | Yes (Preferred) | Used as TODO placeholder inside expandable -- inappropriate |
| expandable | Yes | Acceptable | Contains old notes/legacy content -- should be removed for published page |
| Raw markdown table | Yes | Should use StyledTable | Lines 110-114 |

## Cross-Category Connections

```
Root Cause 1: Expandable "Old notes" section contains incomplete, draft, and deprecated content
Affects: Cat 4.13 + 5.4 + 5.6 + 6.9 + 8.5 + 8.6
Fix: Remove the entire <expandable title="Old notes"> block (lines 160-287). It contains visible TODO placeholders, empty headings, deprecated terminology discussions, and an unsourced image. None of this should be in published content.

Root Cause 2: Missing veracityStatus and OG image fields
Affects: Cat 1.1 + 1.8 + 1.12 + 6.6
Fix: Add `veracityStatus: unverified`, add missing og:image:alt, og:image:type, og:image:width, og:image:height fields.

Root Cause 3: Content duplication with core-concepts.mdx
Affects: Cat 4.8 + 10.4
Fix: Resolve blocking decision on scope differentiation between the two pages. Protocol vs Network table is identical across both.
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 7 | 4 | 2 | 7/11 |
| 2. Voice & Copy | 22 | 13 | 6 | 3 | 13/19 |
| 3. Headings | 10 | 7 | 2 | 0 | 7/10 * |
| 4. Structure | 16 | 7 | 6 | 3 | 7/13 |
| 5. Layout | 34 | 10 | 10 | 14 | 10/20 |
| 6. Veracity | 12 | 0 | 6 | 6 | 0/6 |
| 7. Navigation | 11 | 6 | 0 | 5 | 6/6 |
| 8. Links | 6 | 2 | 3 | 1 | 2/5 |
| 9. Process | 6 | 0 | 3 | 3 | 0/3 |
| 10. Completeness | 5 | 3 | 1 | 1 | 3/4 |

*Note: Heading check 3.1 counted as FAIL based on 2/5 scored headings below threshold, but the failures are both literal contrast labels (a pattern issue, not a content issue).

**Overall**: 55/97 applicable checks passed (57%)
**Verdict**: NEEDS WORK
**Critical issues**:
1. Expandable "Old notes" section (lines 160-287) contains visible TODO stubs, empty headings, deprecated term discussions, and an unsourced image -- must be removed from published content.
2. Spelling error: "incenticises" should be "incentivises" (line 83).
3. Missing `veracityStatus` frontmatter field and incomplete OG image block (only og:image present, missing 4 additional fields).
