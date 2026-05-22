# Page Review – v2/about/portal.mdx

- **Page path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/portal.mdx`
- **URL:** `/v2/about/portal`
- **Sidebar position:** About → About Livepeer → Portal (first entry, line 2114 of docs.json)
- **Review date:** 2026-05-03
- **Reviewer:** Claude (rubric-static-review against `_workspace/canonical/checks.mdx`)
- **PageType / audience / purpose / lifecycleStage:** navigation / community / orient / discover
- **Mode:** `frame` (full-bleed hero portal layout)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | "About Livepeer: Protocol & Network" | PASS | |
| sidebarTitle | Yes | "About Portal" | PASS | |
| description | Yes | "Welcome To The About Portal: Explore, Connect, Contribute" | FAIL | Title-Case marketing copy, not subject-first informational; uses colon + tricolon |
| pageType | Yes | navigation | PASS | Canonical 7-type |
| audience | Yes | community | PASS | About-tab default |
| purpose | Yes | orient | PASS | Canonical |
| complexity | Yes | beginner | PASS | Canonical |
| lifecycleStage | Yes | discover | PASS | Canonical |
| keywords | Yes | 14 entries (3 duplicates: "about livepeer network", "about livepeer protocol" each repeated) | PARTIAL | Duplicates present; some generic ("livepeer", "about") |
| OG image (5 fields) | Yes | fallback.png + alt/type/width/height | PASS | All 5 present; uses fallback rather than tab-specific OG |
| lastVerified | Yes | 2026-03-17T00:00:00.000Z | PASS | ~7 weeks old |
| veracityStatus | NO | (missing) | FAIL | Required field absent (check 1.8) |
| mode | Yes | frame | INFO | Custom Mintlify mode for portal pages |
| tag | Yes | "Start Here" | INFO | Sidebar tag |

---

## Per-Check Results

| Cat | # | Name | Result | Evidence |
|---|---|---|---|---|
| 1 | 1.1 | Required fields present | FAIL | `veracityStatus` missing |
| 1 | 1.2 | pageType 7-type | PASS | `navigation` |
| 1 | 1.3 | pageVariant valid | N/A | Not present |
| 1 | 1.4 | purpose 15-value | PASS | `orient` |
| 1 | 1.5 | audience 7-token | PASS | `community` |
| 1 | 1.6 | complexity canonical | PASS | `beginner` |
| 1 | 1.7 | lifecycleStage canonical | PASS | `discover` |
| 1 | 1.8 | veracityStatus honest | FAIL | Field absent |
| 1 | 1.9 | industry array | N/A | Not present |
| 1 | 1.10 | niche array | N/A | Not present |
| 1 | 1.11 | description well-formed | FAIL | "Welcome To The About Portal: Explore, Connect, Contribute" — Title-Case, marketing tone, three-word tricolon, not informational subject-first |
| 1 | 1.12 | OG image block | PASS | All 5 fields present (uses fallback.png) |
| 1 | 1.13 | keywords quality | PARTIAL | 14 entries with 2 duplicates ("about livepeer network", "about livepeer protocol" each twice); generics "livepeer", "about" |
| 1 | 1.14 | Multi-audience flag | PASS | Single audience (community); subtitle "Discover. Understand. Navigate." routes by intent not audience |
| 2 | 2.1 | UK English | PASS | "decentralised" used; no US spellings |
| 2 | 2.2 | Banned words | PASS | None detected |
| 2 | 2.3 | Banned phrases | PASS | None detected |
| 2 | 2.4 | Banned constructions | PASS | No `not [X]`, no "this page" self-ref, no can/may hedging |
| 2 | 2.5 | Opening order | PASS | Hero overview opens with subject ("Livepeer coordinates a decentralised network…") |
| 2 | 2.6 | Paragraph discipline | PASS | Two short hero paragraphs, each one job |
| 2 | 2.7 | Audience register | PASS | Community register, peer/orienting |
| 2 | 2.8 | Per-audience prohibited phrases | PASS | No "thriving community", "passionate contributors", "vibrant ecosystem" |
| 2 | 2.9 | No passive value statements | PASS | Concrete claims (real-time video and AI compute) |
| 2 | 2.10 | No hedging openers | PASS | Opens with subject |
| 2 | 2.11 | Terminology locked | PASS | decentralised, protocol, network, actors all canonical |
| 2 | 2.12 | No em-dashes | PASS | None |
| 2 | 2.13 | Entity-led voice | PASS | "Livepeer coordinates…", "The About tab is the reader's map…" — subject-first |
| 2 | 2.14 | No hedging verbs | PASS | None in value claims |
| 2 | 2.15 | Description not self-referential | FAIL | "Welcome To The About Portal" describes the page itself, not the subject; violates description rule (lead with subject) |
| 2 | 2.16 | Deprecated terms absent | PASS | No Broadcaster/Pool worker/Combined/Hybrid/Transcoder=Orch |
| 2 | 2.17 | Universal terms consistent | PASS | None drift |
| 2 | 2.18 | Spell check | PASS | All terms standard or canonical |
| 2 | 2.19 | TERMINOLOGY-COLLATE match | PASS | No conflicting definitions |
| 2 | 2.20 | Per-tab terminology | PASS | About-tab register |
| 2 | 2.21 | First use defined or linked | PASS | "decentralised network for real-time video and AI compute" — sufficient orientation gloss for a portal |
| 2 | 2.22 | Terminology lock | PASS | |
| 3 | 3.1 | Headings ≥20/25 | PARTIAL | See Heading Score Table |
| 3 | 3.2 | No banned/weak headings | PARTIAL | "Core Concepts" (Avoid-tier "concepts" generic but acceptable), Card titles include "Mental Model", "Livepeer Protocol", "Livepeer Network", "Livepeer Glossary", "Livepeer Whitepaper" — all concrete |
| 3 | 3.3 | No literal contrast labels | PASS | None |
| 3 | 3.4 | Domain-anchor rule | PASS | "About Livepeer Portal", Card titles all anchored with "Livepeer" prefix where ambiguous |
| 3 | 3.5 | Names concept not examples | PASS | Cards name concepts |
| 3 | 3.6 | Title well-formed | PARTIAL | Hero title "Protocol and Network" (3 words, concept-derived). Frontmatter title "About Livepeer: Protocol & Network" uses ampersand inconsistent with hero "and" |
| 3 | 3.7 | Sounds editorial | PASS | "Protocol and Network" is the right framing for the About entry surface |
| 3 | 3.8 | Per-pageType naming style | PASS | Navigation page: map language ("Portal", "Section") |
| 3 | 3.9 | Per-audience register in headings | PASS | Community register, accessible |
| 3 | 3.10 | Domain-anchor rule applied | PASS | Cards anchored |
| 4 | 4.1 | One purpose, one audience, one job | PASS | Portal = orient + route into 6 entry surfaces |
| 4 | 4.2 | Purpose statement test | PASS | "This page lets the community reader enter the About tab and choose a starting surface" |
| 4 | 4.3 | PREV/NEXT adjacency | PARTIAL | Portal is the first entry, so no PREV. NEXT is Navigator; portal does not signal that Navigator exists as a deeper choosing surface |
| 4 | 4.4 | No dead ends | PASS | All 6 Cards link onward |
| 4 | 4.5 | Prerequisites stated | PASS | Implicit zero-knowledge, appropriate for portal |
| 4 | 4.6 | Out-of-scope clear | FAIL | Portal does not state "this is the About tab; for role tabs see…" – role tabs invisible |
| 4 | 4.7 | Information type per section | PASS | Structural throughout |
| 4 | 4.8 | No content duplication | PARTIAL | Significant overlap with Navigator (`navigator.mdx` duplicates the Concepts/Protocol/Network routing). Acceptable as portal/navigator pair but the line is blurry |
| 4 | 4.9 | Section orientation page | PASS | Portal IS the section orientation surface |
| 4 | 4.10 | Cross-tab links at journey intersections | FAIL | Per check 4.10: "At least 3 cross-tab links per About tab page". Portal has ZERO cross-tab links. Single external link to `github.com/livepeer/protocol` is repo, not role-tab graduation. No links to LPT/Delegators, Orchestrators, Gateways, Developers, Solutions |
| 4 | 4.11 | Discord test | PARTIAL | "What is Livepeer?" — portal answers "decentralised video+AI network" and offers 6 routes. Complete enough for a portal but does not graduate the reader to a role |
| 4 | 4.12 | Page size appropriate | PARTIAL | ~3.5KB substantive — light for a concept page but appropriate for navigation pageType (cards-only) |
| 4 | 4.13 | No TODO/REVIEW comments | PARTIAL | Three commented-out blocks: lines 86–90 (Definition/Quick Intro placeholder), lines 116–117 (alt Card descriptions). Not visible to readers but signals iteration in progress |
| 4 | 4.14 | Flat layout | PASS | Single Columns layout, no sub-folders pulled in |
| 4 | 4.15 | Trade-offs present | N/A | Portal — not a concept page |
| 4 | 4.16 | Content pass context block | PASS | All 15 fields fillable |
| 4 | 4.17 | Multi-audience handoff explicit | FAIL | Portal serves all five primary About personas but does not label any persona handoff. No "If you are a developer/operator/delegator/founder…" routing |
| 5 | 5.1 | Correct template for pageType | PASS | Navigation pageType — uses Hero (HeroSectionContainer + PortalHeroContent) + Cards layout, matching the navigation matrix (5.13) |
| 5 | 5.2 | Required sections present | PASS | Portal/routing structure present (Hero + Cards) |
| 5 | 5.3 | Only approved components | PARTIAL | Uses portal-specific scaffolding (PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, Starfield, BlinkingIcon, CustomDivider, FrameMode H1/H2/H5/P) — not in the standard About-tab matrix but appropriate for `mode: frame` portal pages. NOT-TESTED against `docs-guide/catalog/components-catalog.mdx` |
| 5 | 5.4 | Avoided components absent | PASS | No TODO/Coming Soon visible |
| 5 | 5.5 | InfoType→component mapping | PASS | Structural → Cards inside Columns |
| 5 | 5.6 | MDX renders clean | NOT-TESTED | Did not run smoke test. JSX appears well-formed |
| 5 | 5.7 | No old-schema frontmatter | PASS | All canonical |
| 5 | 5.8 | CSS uses custom properties | NOT-TESTED | Styling lives inside imported scaffolding components (Portals.jsx, FrameMode.jsx) — not visible in MDX |
| 5 | 5.9 | Generated banners | N/A | Not generated |
| 5 | 5.10 | Component naming/imports | PASS | PascalCase, root-absolute imports with `.jsx` extension, semantic subdirectories |
| 5 | 5.11 | Gold-standard template | PARTIAL | Uses portal-specific template (`mode: frame` + PortalHeroContent + PortalContentContainer). Not the generic navigation-template.mdx. Acceptable as the dedicated portal pattern but not formally documented as gold-standard |
| 5 | 5.12 | Section blocks from gold-standard library | PARTIAL | Hero block present. No related-pages-footer or next-step-cta — appropriate for a portal landing where every Card is the next step |
| 5 | 5.13 | Section ordering matches pageType | PASS | Hero → Cards |
| 5 | 5.14 | Multi-view layout rules | N/A | Single dimension |
| 5 | 5.15 | Data imports used | N/A | None needed |
| 5 | 5.16 | Related Pages footer / Next Step CTA | INFO | Neither present. The 6-Card grid IS the routing — portal pages are exempt by convention but the rule does not name the exemption |
| 5 | 5.17 | Related Pages format | N/A | Not present |
| 5 | 5.18 | Tab icon prop | N/A | No Tabs |
| 5 | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5 | 5.20 | Code block metadata | N/A | No code blocks |
| 5 | 5.21 | StyledSteps not raw Steps | N/A | No Steps |
| 5 | 5.22 | Nav cards use CustomCardTitle | FAIL | All 6 Cards in the Columns grid use raw `title=` prop. Per check 5.22 every Card used for navigation must use `<CustomCardTitle>` with icon and title props. The single hero Card (refCardLink to GitHub) also uses raw title |
| 5 | 5.23 | Tables use StyledTable | N/A | No tables |
| 5 | 5.24 | Max 1-2 tables | N/A | No tables |
| 5 | 5.25 | Max 1 major layout element | PASS | Columns is the only major layout element (Hero is structural framing) |
| 5 | 5.26 | CustomDivider placement | INFO | CustomDivider imported but not used; only an `<br/>` (line 145) inside PortalContentContainer. Per the 5 rules, an opening divider after imports is expected |
| 5 | 5.27 | Mermaid colours | N/A | No Mermaid |
| 5 | 5.28 | Import section ordering | PASS | Component imports only, single block |
| 5 | 5.29 | Media placeholders in TODO comments | PASS | Commented-out alt Card description placeholders at lines 116–117 are JSX comments, not visible content |
| 5 | 5.30 | Fact-check flags in JSX comments | N/A | Portal — no factual claims requiring REVIEW |
| 5 | 5.31 | Decision-critical info visible | PASS | All 6 routes visible without interaction |
| 5 | 5.32 | Reference tables at end | N/A | No tables |
| 5 | 5.33 | Drafts in workspace | PASS | Live page |
| 5 | 5.34 | No inline styles | PASS | No inline `style=` props in MDX |
| 6 | 6.1 | Factual claim citable | PASS | Single factual claim ("Livepeer coordinates a decentralised network for real-time video and AI compute") matches whitepaper framing |
| 6 | 6.2 | Code/commands tested | N/A | No code |
| 6 | 6.3 | No deprecated API | N/A | None |
| 6 | 6.4 | Numbers real | N/A | No numbers |
| 6 | 6.5 | REVIEW flags | PASS | None needed |
| 6 | 6.6 | veracityStatus honest | FAIL | Field absent (cf. 1.8) |
| 6 | 6.7 | Authoritative vs AI glossary | N/A | No glossary use |
| 6 | 6.8 | Source staleness | INFO | `lastVerified` 2026-03-17 — within reasonable window but post-IA-refactor stale targets exist (see 8.1) |
| 6 | 6.9 | No open-ended research | PASS | None |
| 6 | 6.10 | Source authority tiers | N/A | No factual claims requiring tier |
| 6 | 6.11 | Glossary defs match universal | N/A | Not glossary |
| 6 | 6.12 | Glossary defs verified | N/A | Not glossary |
| 7 | 7.1 | Page exists in docs.json | PASS | `v2/about/portal` listed at docs.json line 2114 (first entry of "About Livepeer" group) |
| 7 | 7.2 | Nav matches filesystem | PASS | File exists, path matches |
| 7 | 7.3 | Tab portal routes to all sections | PARTIAL | Routes to Concepts (via livepeer-overview — STALE), Mental Model (STALE), Protocol (overview — STALE), Network (overview — STALE), Glossary, Whitepaper. Per check 7.3 portal must route to every section AND to every primary role tab handoff — role tabs absent |
| 7 | 7.4 | No structural orphans | PASS | Reachable as the tab-entry surface |
| 7 | 7.5 | Audience journey complete | FAIL | Persona graduations not present at portal level |
| 7 | 7.6 | Cross-tab graduation paths | FAIL | Zero links to LPT/Delegators, Orchestrators, Gateways, Developers, Solutions |
| 7 | 7.7 | File in correct lane | PASS | In `v2/about/`, publishable |
| 7 | 7.8 | File naming conventions | PASS | `portal.mdx` |
| 7 | 7.9 | _workspace TTL | N/A | Live page |
| 7 | 7.10 | No stubs in published nav | PASS | Substantive enough for a navigation portal |
| 7 | 7.11 | Resources sub-structure | INFO | Card to `resources/glossary` (root-level) — correct. Card to `resources/knowledge-hub/livepeer-whitepaper` — correct knowledge-hub bucket |
| 8 | 8.1 | Internal links resolve | FAIL | 4 of 6 Card targets are STALE: (1) `/v2/about/concepts/livepeer-overview` — no such file (concepts/ contains about-livepeer, livepeer-stack, actors-and-participants, governance-and-economics, core-principles); (2) `/v2/about/concepts/mental-model` — no such file; (3) `/v2/about/protocol/overview` — no such file (protocol/ has no overview.mdx); (4) `/v2/about/network/overview` — no such file. Resolving links: `/v2/about/resources/glossary` PASS, `/v2/about/resources/knowledge-hub/livepeer-whitepaper` PASS |
| 8 | 8.2 | External links live | NOT-TESTED | One external link: `https://github.com/livepeer/protocol` — likely live |
| 8 | 8.3 | Snippet imports resolve | NOT-TESTED | 5 imports from `/snippets/components/scaffolding/portals/Portals.jsx`, `/snippets/components/scaffolding/frame-mode/FrameMode.jsx`, `/snippets/components/elements/spacing/Divider.jsx`, `/snippets/components/elements/icons/Icons.jsx`, `/snippets/components/scaffolding/heroes/StarfieldCanvas.jsx`. Root-absolute with extensions per Mintlify constraints |
| 8 | 8.4 | Images load | N/A | OG fallback only |
| 8 | 8.5 | Page renders | NOT-TESTED | Did not run smoke test |
| 8 | 8.6 | No TODO/TBD/Coming Soon | PARTIAL | Three commented-out blocks (lines 86–90, 116–117) — not visible but signal incomplete iteration |
| 9 | 9.1 | Human sign-off | PARTIAL | `lastVerified: 2026-03-17` predates IA refactor that created stale targets |
| 9 | 9.2 | Decisions in registry | NOT-TESTED | Did not check registry for portal decisions |
| 9 | 9.3 | Gate prerequisites | NOT-TESTED | – |
| 9 | 9.4 | Phase ordering | NOT-TESTED | – |
| 9 | 9.5 | Findings before fixes | NOT-TESTED | – |
| 9 | 9.6 | Feedback routed | NOT-TESTED | – |
| 10 | 10.1 | Question coverage | PARTIAL | "What is Livepeer?" answered. "What is About for?" answered. "Where do I go for X role?" NOT answered |
| 10 | 10.2 | Zero-to-hero journey | PARTIAL | Provides starting surface but stops at Concepts level — does not graduate readers |
| 10 | 10.3 | All persona paths unblocked | FAIL | Five persona paths (Protocol Understander, Diligence Analyst, OSS Contributor, GPU Operator Candidate, Founder/Product Evaluator) not surfaced as first-class options at the portal |
| 10 | 10.4 | Scope boundaries explicit | FAIL | No statement of what About does not cover; role tabs invisible |
| 10 | 10.5 | Self-containment | PASS | About-tab journey readable from portal |
| 10 | 10.6 | Multi-audience pathway | FAIL | Same as 10.3; portal lacks per-persona entry |

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Protocol and Network (Hero title) | 5 | 4 | 5 | 5 | 5 | 24 |
| Discover. Understand. Navigate. (Hero subtitle) | 3 | 2 | 4 | 4 | 4 | 17 |
| About Livepeer Portal (PortalCardsHeader) | 4 | 3 | 5 | 5 | 4 | 21 |
| Card "Core Concepts" | 4 | 3 | 4 | 5 | 5 | 21 |
| Card "Mental Model" | 5 | 4 | 4 | 5 | 5 | 23 |
| Card "Livepeer Protocol" | 5 | 4 | 5 | 5 | 5 | 24 |
| Card "Livepeer Network" | 5 | 4 | 5 | 5 | 5 | 24 |
| Card "Livepeer Glossary" | 5 | 3 | 5 | 5 | 5 | 23 |
| Card "Livepeer Whitepaper" | 5 | 4 | 5 | 5 | 5 | 24 |

Hero subtitle "Discover. Understand. Navigate." is below 20/25 — three-verb tricolon is marketing copy, not orienting heading.

---

## Banned Construction Scan

**Scope:** All visible text (frontmatter description, Hero title/subtitle/overview, PortalCardsHeader title, Card titles and descriptions, external link text).

| Line | Text | Word/Pattern | Classification | Flag? |
|------|------|--------------|----------------|-------|
| 5 (description) | "Welcome To The About Portal: Explore, Connect, Contribute" | Welcome / Title-Case / tricolon | self-referential + marketing | FLAG (per 2.15) |
| 53 | "Discover. Understand. Navigate." (Hero subtitle) | Three-verb tricolon | marketing | INFO — borderline; not banned but generic |
| 65 | "Livepeer coordinates a decentralised network for real-time video and AI compute." | – | – | OK |
| 66 | "The About tab is the reader's map to how the protocol, network, actors, and reference material fit together." | "the reader's" | meta self-reference (mild) | INFO — describes the tab's purpose; acceptable for portal |
| 72 | "Start with the overview and concepts pages if you are new." | "if you are new" — conditional | conditional | OK — orientation register acceptable |
| 72 | "Route into Protocol for on-chain mechanics, Network for execution and marketplace behaviour, and Resources for reference material." | – | – | OK |
| 99 | "A high-level introduction to the concepts, layers, and system boundaries that define Livepeer." | – | – | OK |
| 107 | "A layered model of Livepeer's protocol, network, and product surfaces." | – | – | OK |
| 115 | "A deep dive into the on-chain governance and incentive layer that secures and coordinates Livepeer." | – | – | OK |
| 125 | "The models, nodes and actors that contribute to the Livepeer Real-time Video AI Network." | – | – | OK |
| 133 | "A comprehensive glossary of terms used in the Livepeer Real-time Video AI Network." | "comprehensive" | adjective without quantification | INFO — borderline |
| 141 | "The original Livepeer Whitepaper (2017) that outlines the vision and design of the Livepeer protocol." | – | – | OK |

**Banned-word/phrase tally:** Zero hard banned terms in body. One frontmatter description failure (Title-Case + welcome + tricolon, self-referential).

---

## Spelling/Typo Check

No typos found. UK spelling consistent ("decentralised", "behaviour", "Real-time"). Inconsistency: title uses "&" while hero uses "and".

---

## Component Matrix

| Component | Used? | Appropriate for `navigation`? | Notes |
|-----------|-------|------------------------------|-------|
| HeroSectionContainer / HeroContentContainer / HeroImageBackgroundComponent | Yes | Yes (portal-specific) | Portal scaffolding, NOT-TESTED against canonical catalog |
| PortalHeroContent | Yes | Yes | Portal-specific |
| PortalCardsHeader / PortalContentContainer | Yes | Yes | Portal-specific |
| LogoHeroContainer | Yes | Yes | Portal branding |
| Starfield | Yes | Yes | Background canvas |
| BlinkingIcon | Yes | Yes | Used in PortalCardsHeader |
| Columns + Card | Yes | Yes (with CustomCardTitle required by 5.22) | All 6 Cards lack CustomCardTitle |
| FrameMode H1/H2/H5/P | Yes (imported) | Yes for `mode: frame` | Imported but not visibly used in MDX |
| CustomDivider | Imported, not used | Yes | Per 5.26 should have opening divider |

---

## Cross-Category Connections

```
Root Cause 1: Stale internal links — 4 of 6 Card targets do not exist after IA refactor.
Affects: Cat 7.3, 8.1, 9.1, 10.2
Fix: Update Card hrefs:
     "Core Concepts" /v2/about/concepts/livepeer-overview → /v2/about/concepts/about-livepeer
     "Mental Model" /v2/about/concepts/mental-model → /v2/about/concepts/livepeer-stack (closest analogue) OR remove Card if mental-model page is being deprecated
     "Livepeer Protocol" /v2/about/protocol/overview → /v2/about/protocol/design (closest published page) OR /v2/about/protocol/architecture OR create protocol/overview.mdx
     "Livepeer Network" /v2/about/network/overview → pick a current network page (network/architecture, network/marketplace-model, or create network/overview.mdx)

Root Cause 2: Portal does not route to role tabs.
Affects: Cat 4.10, 4.17, 7.3, 7.6, 10.3, 10.4, 10.6
Fix: Add a second Columns block titled "Continue in your role" with 5 Cards linking to:
     /v2/delegators/portal, /v2/orchestrators/portal, /v2/gateways/portal,
     /v2/developers/portal, /v2/solutions/portal — one per primary persona.

Root Cause 3: Frontmatter `description` is marketing copy, not informational.
Affects: Cat 1.11, 2.15
Fix: Replace "Welcome To The About Portal: Explore, Connect, Contribute" with
     subject-first informational copy, e.g.
     "Livepeer's About tab maps the protocol, network, actors, and reference material for new readers."

Root Cause 4: All 6 navigation Cards lack `<CustomCardTitle>` wrapper.
Affects: Cat 5.22
Fix: Wrap each Card title in `<CustomCardTitle icon="..." title="..." />`. Apply to the
     Hero refCardLink as well.

Root Cause 5: `veracityStatus` field absent.
Affects: Cat 1.1, 1.8, 6.6
Fix: After fixing stale links, add `veracityStatus: verified` to frontmatter.
     Re-stamp `lastVerified` to today's date.

Root Cause 6: Three commented-out content blocks remain (lines 86–90, 116–117).
Affects: Cat 4.13, 8.6
Fix: Either commit the alternate Card descriptions or remove the comments.

Root Cause 7: Frontmatter `keywords` contains 2 duplicate entries.
Affects: Cat 1.13
Fix: De-duplicate "about livepeer network" and "about livepeer protocol".

Root Cause 8: Title/Hero ampersand mismatch.
Affects: Cat 3.6
Fix: Change frontmatter title "About Livepeer: Protocol & Network" → "About Livepeer: Protocol and Network"
     OR change hero title to "Protocol & Network" — pick one.
```

---

## Blocking Decision

```
Blocking Decision: Should portal route to role tabs (cross-tab graduation)
                   or remain a within-About surface?
Options: [A] Add role-tab CardGroup block. [B] Defer to Navigator and add explicit
         "Continue in Navigator to choose your role" callout.
If A: implement Root Cause 2 directly. Resolves Cat 4.10, 4.17, 7.6, 10.3, 10.4, 10.6.
If B: smaller change but pushes graduation responsibility to Navigator (which currently
      also fails 7.6 — see navigator.md review).
Recommendation: A. Portal is the primary entry surface; role-tab visibility belongs here.
```

---

## Overall Verdict

**NEEDS WORK.**

Portal looks polished (strong hero scaffolding, clean voice, UK English, canonical pageType, OG block complete) but fails its core routing job. Four of six Card targets are STALE post-IA-refactor (`livepeer-overview`, `mental-model`, `protocol/overview`, `network/overview` do not exist). Zero cross-tab graduation links. Cards lack `<CustomCardTitle>` wrappers. Frontmatter `description` is Title-Case marketing copy, not informational. `veracityStatus` missing. After the link refresh + role-tab block + CustomCardTitle wrap + description rewrite, the portal ships.

### Critical Issues (top 5)
1. **CRITICAL** — 4 of 6 Card targets are stale links to pages that no longer exist after the recent IA refactor (Cat 7.3, 8.1).
2. **CRITICAL** — Zero cross-tab graduation links; portal does not surface LPT/Delegators, Orchestrators, Gateways, Developers, or Solutions (Cat 4.10, 7.6, 10.3, 10.6).
3. **HIGH** — All 6 navigation Cards (and the hero refCardLink) use raw `title=` instead of `<CustomCardTitle>` (Cat 5.22).
4. **HIGH** — Frontmatter `description` "Welcome To The About Portal: Explore, Connect, Contribute" is Title-Case marketing self-reference; `veracityStatus` field absent (Cat 1.11, 2.15, 1.8).
5. **MEDIUM** — Three commented-out content blocks (lines 86–90, 116–117), keyword duplicates, title/hero ampersand mismatch (Cat 4.13, 1.13, 3.6).
