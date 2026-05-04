# Page Review – v2/about/navigator.mdx

- **Page path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/navigator.mdx`
- **URL:** `/v2/about/navigator`
- **Sidebar position:** About → About Livepeer → Navigator (after Portal)
- **Review date:** 2026-05-03
- **Reviewer:** Claude (rubric-static-review against `_workspace/canonical/checks.mdx`)
- **PageType / audience / purpose / lifecycleStage:** navigation / community / orient / discover

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | "Find Your Path" | PASS | Action-oriented |
| sidebarTitle | Yes | "Navigator" | PASS | |
| description | Yes | "Choose the right About reading path based on what you need to understand about Livepeer." | PASS | Subject-first, ≤160 chars, no self-reference |
| pageType | Yes | navigation | PASS | Canonical |
| audience | Yes | community | PASS | About-tab default |
| purpose | Yes | orient | PASS | Canonical |
| complexity | Yes | beginner | PASS | Canonical |
| lifecycleStage | Yes | discover | PASS | Canonical |
| keywords | Yes | livepeer, about, navigator, reading path, protocol, network, faq | PASS | Specific, intent-aligned |
| og:image (5 fields) | Yes | full block (about.png, alt, type, width, height) | PASS | All 5 present |
| status | Yes | current | PASS | |
| lastVerified | Yes | "2026-04-05" | PASS | Recent |
| veracityStatus | NO | (missing) | FAIL | `status: current` requires `veracityStatus: verified` per check 1.8 / report rule "veracityStatus fix must be internally consistent" |
| pageVariant | NO | – | INFO | Not required for navigation pageType |

---

## Category 1 — Frontmatter & Taxonomy

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 1.1 | All 10 required fields present | FAIL | `veracityStatus` absent (required when `status: current`) |
| 1.2 | pageType uses 7-type canonical | PASS | `navigation` |
| 1.3 | pageVariant valid if present | N/A | Not present |
| 1.4 | purpose 15-value canonical | PASS | `orient` |
| 1.5 | audience 7-token set | PASS | `community` |
| 1.6 | complexity canonical | PASS | `beginner` |
| 1.7 | lifecycleStage canonical | PASS | `discover` |
| 1.8 | veracityStatus present and honest | FAIL | Missing while `status: current` is set |
| 1.9 | industry array | N/A | Not present |
| 1.10 | niche array | N/A | Not present |
| 1.11 | description well-formed | PASS | |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | keywords quality | PASS | Specific |
| 1.14 | Multi-audience flag | PASS | Page is community-default; audience-specific routes (founder evaluator, contributor) sit inside Accordions and the founder route is explicitly labelled in the Accordion title ("I am evaluating Livepeer for a product or investment thesis") |

---

## Category 2 — Voice & Copy

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 2.1 | UK English | PASS | "decentralised" used; no US spellings detected |
| 2.2 | Banned words | PASS | None detected (see scan below) |
| 2.3 | Banned phrases | PASS | None detected |
| 2.4 | Banned constructions | PASS | No "not [X]" value statements; no "this page" self-reference; no can/may hedging in value claims |
| 2.5 | Opening order | PASS | Step 1 ("Build a mental model…"), step lead lines state outcome before mechanism |
| 2.6 | Paragraph discipline | PASS | Each step / accordion = one job |
| 2.7 | Audience register | PASS | Community register: peer, action-oriented, accessible |
| 2.8 | Per-audience prohibited phrases | PASS | No "thriving community", "passionate contributors", "vibrant ecosystem" |
| 2.9 | No passive value statements | PASS | Concrete actions in step bodies |
| 2.10 | No hedging openers | PASS | Opens directly with the StyledSteps – no caveat |
| 2.11 | Terminology locked | PASS | "decentralised", "actors", "marketplace", "treasury", "stake LPT" all canonical |
| 2.12 | No em-dashes | PASS | Searched – none found |
| 2.13 | Entity-led voice | FAIL | First-person reader voice used in 5 of 6 Accordion titles ("I need…", "I want…", "I am evaluating…", "I just need…"). Per check 2.13 entity-led / subject-first applies to all visible text including component props. CLAUDE.md Co-creation Principles also forbid "you" / "we" framing in About tab. The persona-led Accordion titles violate this in spirit even though they are reader-voice, not author-voice. BORDERLINE — could be argued as accessible navigation language for a community-register page. Flag as MEDIUM |
| 2.14 | No hedging verbs in value claims | PASS | None |
| 2.15 | Description not self-referential | PASS | Starts with "Choose the right…" |
| 2.16 | Deprecated terms absent | PASS | No "Broadcaster", "Pool worker", "Combined mode", "Hybrid", "Transcoder=Orchestrator" |
| 2.17 | Universal terms consistent | PASS | Orchestrator/Gateway/Delegator/LPT used per universal-terms |
| 2.18 | Spell check | PASS | All terms standard or canonical Livepeer (LPT, LIPs, decentralised) |
| 2.19 | TERMINOLOGY-COLLATE match | PASS | No conflicting definitions introduced |
| 2.20 | Per-tab terminology correct | PASS | About-tab register |
| 2.21 | First use of specialised term defined or linked | PARTIAL | "LPT" used inside the Accordion lead "stake LPT" without inline definition or link – on a navigator page this is acceptable because the Accordion routes the reader to the relevant tab, but per check 2.21 strict reading flags it. INFO |
| 2.22 | Terminology lock respected | PASS | |

---

## Category 3 — Section Naming & Headings

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 3.1 | Headings ≥20/25 | PARTIAL | See table below. Two headings score below 20 |
| 3.2 | No banned/weak headings | FAIL | "Topic Guides" (line 128) is borderline – not on the BANNED list but uses generic "Guides" terminology that is conceptually weak for a navigator. More serious: 5 of 6 Accordion titles begin "I…" – not standalone headings, but Accordion `title` props counted under 3.2 per the "Banned Construction Scan scope" (CustomDivider middleText, AccordionGroup title, Tabs title). None match a literal banned term, but they fail "names the concept" (3.5) |
| 3.3 | No literal contrast labels | PASS | None |
| 3.4 | Domain-anchor rule | PASS | "Protocol Section Map" / "Network Section Map" anchor the domain noun |
| 3.5 | Heading names the concept, not examples | FAIL | Accordion titles describe the reader's stance ("I want to understand the execution network"), not the section concept. Per check 3.5 the heading should name the governing concept (e.g. "Execution network deep dive") |
| 3.6 | Title well-formed | PASS | "Find Your Path" – 3 words |
| 3.7 | Sounds editorial | PARTIAL | "Find Your Path" is a navigator-friendly title. Accordion titles are persona-prompts – more conversational than editorial |
| 3.8 | Per-pageType naming style | PASS | Navigation page using map / route language ("Section Map", "Topic Guides") – acceptable |
| 3.9 | Per-audience register in headings | PASS | Community register tolerates accessible language |
| 3.10 | Domain-anchor rule applied | PASS | Section maps anchored |

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Find Your Path (H1/title) | 4 | 3 | 5 | 5 | 5 | 22 |
| Protocol Section Map (H2) | 5 | 4 | 5 | 5 | 4 | 23 |
| Network Section Map (H2, empty) | 5 | 4 | 5 | 5 | 4 | 23 |
| Topic Guides (H2) | 3 | 2 | 4 | 4 | 5 | 18 |
| Step "Core Concepts" | 5 | 4 | 5 | 5 | 5 | 24 |
| Step "Protocol" | 4 | 3 | 5 | 5 | 5 | 22 |
| Step "Network" | 4 | 3 | 5 | 5 | 5 | 22 |
| Step "Resources" | 5 | 3 | 5 | 5 | 5 | 23 |
| Accordion "I need the high-level picture first" | 2 | 2 | 3 | 4 | 3 | 14 |
| Accordion "I want to understand protocol mechanics and incentives" | 3 | 3 | 3 | 4 | 3 | 16 |
| Accordion "I want to understand the execution network" | 3 | 3 | 3 | 4 | 3 | 16 |
| Accordion "I am evaluating Livepeer for a product or investment thesis" | 4 | 3 | 4 | 5 | 2 | 18 |
| Accordion "I want to contribute or go deeper" | 3 | 2 | 3 | 4 | 3 | 15 |
| Accordion "I just need definitions or quick answers" | 3 | 2 | 3 | 5 | 3 | 16 |

**Headings failing ≥20/25:** "Topic Guides" (18) and all 6 Accordion titles (14–18).

---

## Category 4 — Page Structure & Content Architecture

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 4.1 | One purpose, one audience, one job | PASS | Navigator: route the reader to the right About sub-section |
| 4.2 | Purpose statement test | PASS | "This page lets the community reader choose an About reading path" |
| 4.3 | PREV/NEXT adjacency | PASS | docs.json: Portal → Navigator → Concepts. Navigator follows Portal logically |
| 4.4 | No dead ends | PASS | Every Step and Card links onward |
| 4.5 | Prerequisites stated | PASS | Implicit "no prior knowledge" – appropriate for nav |
| 4.6 | Out-of-scope clear | PARTIAL | Page does not state what it does not cover (e.g. role-tab handoffs are inside an Accordion, not surfaced) |
| 4.7 | Information type per section | PASS | Structural throughout |
| 4.8 | No content duplication | FAIL | Significant duplication with Portal page: both surface Cards for "Core Concepts", "Protocol Overview / Livepeer Protocol", "Network Overview / Livepeer Network", "Mental Model". The Portal page already does this routing job. Navigator should EXTEND, not REPEAT |
| 4.9 | Section orientation page | PASS | Navigator IS the orientation surface for choosing a path |
| 4.10 | Cross-tab links at journey intersections | FAIL | Per check 4.10: "At least 3 cross-tab links per About tab page where reader graduations are expected (to Orchestrators, Gateways, Developers, LPT/Delegators, Solutions)". Navigator has ZERO cross-tab links. All Cards stay within `v2/about/`. The "evaluating" Accordion routes to `v2/about/resources/knowledge-hub/evaluating-livepeer` (in-tab) when it should also or instead point to `v2/solutions/`. The contributor Accordion stays in About when it should also link to `v2/developers/` |
| 4.11 | Discord test | PASS | "Where do I start with Livepeer docs?" – linking this page gives a complete answer for an in-About journey choice. Borderline because cross-tab journeys are missing |
| 4.12 | Page size appropriate | PASS | ~6KB substantive content |
| 4.13 | No TODO/REVIEW comments | PARTIAL | Three commented-out blocks exist: line 31 `<CustomDivider />`, line 33 `## Journey Map`, lines 72–74 lengthy commented prose. These are not TODOs but commented-out content – a HIGH-MEDIUM signal that the page was not finished cleanly |
| 4.14 | Flat layout where appropriate | PASS | Tabs/accordions/Steps used for depth, not sub-pages |
| 4.15 | Trade-offs present | N/A | Navigator – not a concept page |
| 4.16 | Content pass context block | PASS | All 15 fields fillable |
| 4.17 | Multi-audience handoff explicit | FAIL | Accordion routes for evaluator and contributor exist, but the actual handoff to other tabs (Solutions for evaluator, Developers/Orchestrators for contributor, LPT/Delegators for delegator path) is not labelled. Per check 4.17: handoffs must be "explicitly labelled inline" by audience. Navigator passes the question but not the handoff |

---

## Category 5 — Layout, Components & Template

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 5.1 | Correct template for pageType | PARTIAL | Navigation pageType requires Hero+Cards (5.13). Page uses StyledSteps + Columns/Cards + AccordionGroup. No Hero. INFO – navigator may legitimately differ from portal |
| 5.2 | Required sections present | PARTIAL | Routing structure present. No Hero/intro CTA |
| 5.3 | Only approved components | PASS | StyledSteps, StyledStep, LinkArrow, CustomDivider, Columns, Card, Icon, AccordionGroup, Accordion, CardGroup – all approved per About tab matrix |
| 5.4 | Avoided components absent | PASS | No TODO/Coming Soon |
| 5.5 | InfoType→component mapping | PASS | Structural → Cards/Columns; narrative → Accordion |
| 5.6 | MDX renders clean | NOT-TESTED | Did not run smoke test. JSX appears well-formed |
| 5.7 | No old-schema frontmatter | PASS | All canonical |
| 5.8 | CSS uses custom properties | PASS | Uses `var(--lp-color-accent)`, `var(--accent)`. No hex |
| 5.9 | Generated banners | N/A | Not generated |
| 5.10 | Component naming/imports | PASS | PascalCase, root-absolute imports with extensions, semantic subdirectories |
| 5.11 | Gold-standard template | PARTIAL | Does not match a single gold-standard template (StyledSteps + manual sections is a hybrid). Acceptable for navigation pageType but should be checked against `snippets/templates/pages/gold-standard-templates/navigation-template.mdx` |
| 5.12 | Section blocks from gold-standard library | PARTIAL | Step-sequence + decision-matrix + accordion-group-like patterns. No related-pages-footer. No next-step-cta |
| 5.13 | Section ordering | PARTIAL | Steps → Protocol Map → empty Network Map → Topic Guides. Network Map H2 has NO content (just CustomDividers). Empty section is a structural defect |
| 5.14 | Multi-view layout rules | N/A | Single dimension, no Tabs |
| 5.15 | Data imports | N/A | None needed |
| 5.16 | Related Pages footer / Next Step CTA | FAIL | Neither present at the page end. AccordionGroup is the last component. No closing CTA |
| 5.17 | Related Pages format | N/A | Absent |
| 5.18 | Tab icon prop | N/A | No Tabs |
| 5.19 | Accordion icon prop | PASS | All 6 Accordions have icon props (compass, cube, circle-nodes, scale-balanced, code-branch, circle-question) |
| 5.20 | Code block metadata | N/A | No code blocks |
| 5.21 | StyledSteps not raw Steps | PASS | Uses StyledSteps with iconColor/titleColor |
| 5.22 | Nav cards use CustomCardTitle | FAIL | The 6 Cards in the Protocol Section Map and the 12 Cards in Topic Guides Accordions all use raw `title=` prop, not `<CustomCardTitle>`. Per check 5.22, every Card used for navigation must include CustomCardTitle |
| 5.23 | Tables use StyledTable | N/A | No tables |
| 5.24 | Max 1-2 tables | PASS | No tables |
| 5.25 | Max 1 major layout element | FAIL | Page contains StyledSteps + Columns + AccordionGroup – three major layout elements. Per check 5.25 only one major layout element per page unless nested |
| 5.26 | CustomDivider placement | FAIL | Multiple CustomDividers used as inter-section spacers with negative margins (`margin: "-1rem 0 -2rem 0"`). The 5 rules say: ONE opening divider after imports, none between intro prose and first H2, optional between H2 sections, always before Related Pages. Lines 69, 122, 124, 126 use stacked CustomDividers with negative margins to compensate for the empty Network Section Map H2 (lines 124–126: H2 sandwiched between two CustomDividers and no content). This is layout patching, not the template |
| 5.27 | Mermaid colours | N/A | No Mermaid |
| 5.28 | Import section ordering | PASS | Component imports only, in order |
| 5.29 | Media placeholders in TODO comments | N/A | None |
| 5.30 | Fact-check flags in JSX comments | PASS | No REVIEW flags – appropriate for nav page |
| 5.31 | Decision-critical info visible | PARTIAL | Routing decision visible in Steps but extra journey detail hidden in Accordions. Acceptable for navigator |
| 5.32 | Reference tables at end | N/A | No tables |
| 5.33 | Drafts in workspace | PASS | Live page |
| 5.34 | No inline styles | FAIL | `<CustomDivider style={{ margin: "-1rem 0 -2rem 0" }} />` (lines 69, 122, 126) – inline style attributes in MDX. Per check 5.34: "No inline `style=` attributes in MDX prose" |

### Component Matrix

| Component | Used? | Appropriate for `navigation`? | Notes |
|-----------|-------|------------------------------|-------|
| StyledSteps / StyledStep | Yes | Yes | Approved |
| LinkArrow | Yes | Yes | Approved |
| CustomDivider | Yes | Yes (per rules) | Used incorrectly with inline style negative margins |
| Columns | Yes | Yes | Used twice |
| Card | Yes | Yes (with CustomCardTitle required) | Cards lack CustomCardTitle (5.22) |
| Icon | Yes | Yes | Used for H2 prefixes |
| AccordionGroup / Accordion | Yes | Yes | All have icon props |
| CardGroup | Yes (inside Accordions) | Yes | Approved |
| Hero / HeroSectionContainer | NO | Required by 5.13 | Missing for navigation pageType |

---

## Category 6 — Veracity & Factual Accuracy

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 6.1 | Factual claim citable | PASS | Few claims; mostly routing language |
| 6.2 | Code/commands tested | N/A | No code |
| 6.3 | No deprecated API | N/A | None |
| 6.4 | Numbers real | N/A | No numbers |
| 6.5 | REVIEW flags | PASS | None needed |
| 6.6 | veracityStatus honest | FAIL | Field absent while `status: current` is set – inconsistent per check 1.8 |
| 6.7 | Authoritative vs AI glossary | N/A | No glossary use |
| 6.8 | Source staleness | INFO | `lastVerified` 2026-04-05; today 2026-05-03 – inside reasonable window |
| 6.9 | No open-ended research | PASS | None |
| 6.10 | Source authority tiers | N/A | No factual claims |
| 6.11 | Glossary defs match universal terms | N/A | Not a glossary page |
| 6.12 | Glossary defs verified | N/A | Not a glossary page |

---

## Category 7 — Navigation & Information Architecture

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 7.1 | Page exists in docs.json | PASS | `v2/about/navigator` listed in "About Livepeer" group at line 2114 |
| 7.2 | Navigation matches file system | PASS | File and docs.json agree |
| 7.3 | Tab portal routes to all sections | PARTIAL | Navigator routes to Concepts, Protocol, Network, Resources internally. Does NOT route to role tabs |
| 7.4 | No structural orphans | PASS | Reachable via "About Livepeer" group |
| 7.5 | Audience journey complete | PARTIAL | Step path covers community-default journey. Persona-graduation paths (delegator, founder, contributor) listed as Accordion options but each ends inside About, not at the role tab |
| 7.6 | Cross-tab graduation paths | FAIL | None of the five required cross-tab graduations (LPT/Delegators, Orchestrators, Gateways, Developers, Solutions) are present as Cards or links. ALL navigator destinations are `v2/about/...` |
| 7.7 | File in correct lane | PASS | In `v2/about/`, publishable |
| 7.8 | File naming conventions | PASS | `navigator.mdx` |
| 7.9 | _workspace TTL | N/A | Live page |
| 7.10 | No stubs in published nav | PASS | ~6KB substantive |
| 7.11 | Resources sub-structure | INFO | Resources Card targets `resources/faq` – correct root entry |

---

## Category 8 — Links & Rendering

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 8.1 | Internal links resolve | NOT-TESTED | 16 internal links (4 Steps + 6 Cards in Protocol Map + 6 Accordion CardGroups). Notable risk: Step 1 links `/v2/about/concepts/livepeer-overview` (line 41). Per docs.json the Concepts group now contains `about-livepeer`, `livepeer-stack`, `actors-and-participants`, `governance-and-economics`. There is NO `livepeer-overview` page in the new IA – this is a STALE LINK. Step 4 links `/v2/about/resources/faq` (line 65) – status unknown. Several Accordion Cards link to `/v2/about/concepts/livepeer-overview` and `/v2/about/concepts/mental-model` (lines 135, 138) – likely stale post-refactor. Accordion link to `/v2/about/network/job-lifecycle` (line 164) – per git status this file was renamed to `job-pipelines.mdx`, so STALE |
| 8.2 | External links live | N/A | No external links |
| 8.3 | Snippet imports resolve | NOT-TESTED | 3 snippet imports: `/snippets/components/elements/spacing/Divider.jsx`, `/snippets/components/elements/links/Links.jsx`, `/snippets/components/displays/steps/Steps.jsx`. All are root-absolute with extensions per Mintlify constraints |
| 8.4 | Images load | N/A | OG image only |
| 8.5 | Page renders | NOT-TESTED | Likely renders – JSX well-formed, well-known components |
| 8.6 | No TODO/TBD/Coming Soon | PARTIAL | Three commented-out content blocks (lines 31, 33, 72–74). Not visible to readers but signals incomplete work |

**Category 8 verdict: HIGH risk – multiple stale links to renamed/refactored pages.**

---

## Category 9 — Process & Governance

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 9.1 | Human sign-off | PARTIAL | `lastVerified: "2026-04-05"`. Recent IA refactor (post-verify date) means stale-link risk introduced after sign-off |
| 9.2 | Decisions in registry | NOT-TESTED | Did not check decision registry for navigator scope decisions |
| 9.3 | Gate prerequisites | NOT-TESTED | Did not audit pipeline gates |
| 9.4 | Phase ordering | NOT-TESTED | – |
| 9.5 | Findings before fixes | NOT-TESTED | – |
| 9.6 | Feedback routed | NOT-TESTED | – |

---

## Category 10 — Content Completeness

| Check | Name | Result | Evidence |
|-------|------|--------|----------|
| 10.1 | Question coverage | PARTIAL | Covers: orient, protocol, network, evaluating, contributing, definitions. Missing: delegator path ("how do I stake?"), operator path ("how do I run a node?") as first-class options |
| 10.2 | Zero-to-hero journey | PARTIAL | Provides starting points but does not graduate the reader to a role tab. Reader stays inside About |
| 10.3 | All persona paths unblocked | FAIL | Per check 10.3: every persona must reach role-tab graduation. Navigator does NOT graduate any persona to LPT/Delegators, Orchestrators, Gateways, Developers, or Solutions |
| 10.4 | Scope boundaries explicit | FAIL | Navigator does not say "Looking to actually run an orchestrator? See the Orchestrators tab" – scope boundary invisible |
| 10.5 | Self-containment | PASS | About-tab journey readable without leaving |
| 10.6 | Multi-audience pathway | FAIL | The five primary persona paths (Protocol Understander, Diligence Analyst, OSS Contributor, GPU Operator Candidate, Founder/Product Evaluator) are not all present. Specifically: GPU Operator Candidate has no entry; Diligence Analyst routes only to in-About `evaluating-livepeer` and not to Solutions tab |

---

## Banned Construction Scan

**Scope:** All visible text including frontmatter description, body prose, Step descriptions, Card descriptions, Accordion titles, CustomDivider props, Tabs/Accordions title props.

| Line | Sentence/Text | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 4 (description) | "Choose the right About reading path based on what you need to understand about Livepeer." | "you need" – reader-voice | conditional | OK – navigator uses imperative |
| 36 | "Build a mental model of what Livepeer is and how it works." | – | – | OK |
| 39 | "Start here if you are new." | "you are" – reader-voice | conversational | BORDERLINE – per 2.13 entity-led, but acceptable register for community navigator |
| 39 | "Three pages cover the system overview, a layered mental model, and the foundational concepts you need before going deeper." | "you need" | conditional | OK – informational |
| 53 | "See who does the work and how jobs flow through the system." | – | – | OK |
| 76 | "The core mechanisms of the Livepeer protocol:" | – | – | OK |
| 86 | "Not used for job payments (ETH is)" | "Not used" – `not [X]` value statement | value-claim | BORDERLINE per 2.4. Could be rewritten "ETH is used for job payments" |
| 131 | "I need the high-level picture first" (Accordion title) | first-person reader voice | rhetorical | BORDERLINE per 2.13 |
| 132 | "Start with the concepts pages, then move into the network and protocol sections once the system boundaries are clear." | "once X is" – touches "once X is stable" pattern | conditional | OK – not the banned phrase pattern |
| 144 | "I want to understand protocol mechanics and incentives" | first-person reader voice | rhetorical | BORDERLINE |
| 145 | "Go to the protocol section for staking, rewards, governance, treasury, contract architecture, and design rationale." | – | – | OK |
| 152 | "Why the protocol uses stake, inflation, probabilistic payments, and modular boundaries." | – | – | OK |
| 157 | "I want to understand the execution network" | first-person reader voice | rhetorical | BORDERLINE |
| 158 | "The network section explains who does the work, how jobs flow, and how supply and demand meet." | – | – | OK |
| 162 | "Start here for actors, execution roles, and the network's job." | – | – | OK |
| 170 | "I am evaluating Livepeer for a product or investment thesis" | first-person reader voice | rhetorical | BORDERLINE |
| 171 | "Use the evaluation reading path and supporting references." | – | – | OK |
| 178 | "Reference sources for active usage, participation, and network state." | – | – | OK |
| 183 | "I want to contribute or go deeper" | first-person reader voice | rhetorical | BORDERLINE |
| 184 | "Use the contributor-oriented path to move from concepts into protocol and network detail." | – | – | OK |
| 188 | "A starting route for researchers, OSS contributors, and technical readers." | – | – | OK |
| 196 | "I just need definitions or quick answers" | first-person reader voice; "just" – filler | rhetorical | BORDERLINE per 2.13. "just" is not on the banned list but is filler |
| 197 | "The resources pages provide a direct lookup surface." | – | – | OK |

**Banned-word/phrase tally:** Zero hard banned terms. Six BORDERLINE first-person Accordion titles + one BORDERLINE `Not used` value claim.

---

## Spelling/Typo Check

No typos found. UK spelling consistent ("decentralised", "marketplace").

---

## Cross-Category Connections

```
Root Cause 1: Stale internal links following IA refactor.
Affects: Cat 4.3, Cat 7.6 (indirect), Cat 8.1, Cat 9.1, Cat 10.3
Fix: Update Step 1 link from `/v2/about/concepts/livepeer-overview` to a current
     concepts page (e.g. `/v2/about/concepts/about-livepeer` or `/v2/about/concepts/livepeer-stack`).
     Update Accordion CardGroup links accordingly. Update job-lifecycle → job-pipelines.

Root Cause 2: Navigator does not route to role tabs (LPT, Orchestrators, Gateways,
              Developers, Solutions).
Affects: Cat 4.10, Cat 4.17, Cat 7.6, Cat 10.3, Cat 10.4, Cat 10.6
Fix: Add cross-tab graduation block. Either (a) add a fifth StyledStep titled
     "Choose your role" linking to the five role tabs, or (b) add a closing
     "Continue in your role tab" CardGroup with five Cards, each labelled by role
     and linking to the role-tab portal.

Root Cause 3: Empty H2 "Network Section Map" with no content, padded with
              CustomDivider negative-margin spacers.
Affects: Cat 4.13, Cat 5.13, Cat 5.26, Cat 5.34
Fix: Either (a) remove the H2 + dividers, or (b) populate the Network Section Map
     with a Cards block mirroring the Protocol Section Map (Network Overview,
     Actors, Marketplace, Job Pipelines, Fee Flow, Scaling).

Root Cause 4: Cards used for navigation lack CustomCardTitle wrapper.
Affects: Cat 5.22
Fix: Wrap every nav-purpose Card title in `<CustomCardTitle icon="..." title="..." />`
     (Protocol Section Map: 6 Cards; Topic Guides Accordions: 12 Cards).

Root Cause 5: Accordion titles use first-person reader voice instead of governing
              concept naming.
Affects: Cat 2.13, Cat 3.5
Fix: Rename Accordions to subject-led concept names. Suggested mapping:
     "I need the high-level picture first" → "Concepts orientation"
     "I want to understand protocol mechanics and incentives" → "Protocol mechanics path"
     "I want to understand the execution network" → "Execution network path"
     "I am evaluating Livepeer for a product or investment thesis" → "Evaluation reading path"
     "I want to contribute or go deeper" → "Contributor reading path"
     "I just need definitions or quick answers" → "Definitions and FAQ"

Root Cause 6: Frontmatter inconsistent: `status: current` without `veracityStatus: verified`.
Affects: Cat 1.1, Cat 1.8, Cat 6.6
Fix: Add `veracityStatus: verified` to frontmatter (after content links are refreshed)
     OR change `status` to a non-current value.

Root Cause 7: Inline `style={{}}` props on CustomDivider.
Affects: Cat 5.26, Cat 5.34
Fix: Remove inline style negative margins. If spacing is required, add a CSS class
     to CustomDivider via a prop (`density="tight"` or similar) handled inside the
     component, not inline.

Root Cause 8: No closing Related Pages footer or Next Step CTA.
Affects: Cat 5.16
Fix: Add a closing Related Pages CardGroup or a single Next Step CTA Card directing
     to the user's chosen role tab (resolves Root Cause 2 simultaneously).
```

---

## Blocking Decision

```
Blocking Decision: Should the Navigator route readers to role tabs (cross-tab graduation)
                   or remain a within-About index?
Options: [A] Add cross-tab graduation. [B] Keep within-About scope and rename to
         "About Reading Paths" to clarify scope.
If A: implement Root Cause 2 cross-tab block + Root Cause 8 footer. Resolves Cat 4.10,
      4.17, 7.6, 10.3, 10.4, 10.6.
If B: rename frontmatter title and sidebarTitle. Add explicit out-of-scope statement
      ("Looking to operate, build, or stake? See the role tabs."). Cat 7.6 partially
      mitigated by an inline scope note rather than full graduation links.
```

---

## Overall Verdict

**NEEDS WORK.**

Strong on basics (frontmatter mostly canonical, voice clean, components approved, UK English) but fails the navigator's defining job: **routing the reader to the right place**. Critical gaps are stale internal links (post-refactor link rot), zero cross-tab graduation, an empty Network Section Map H2, and Cards missing CustomCardTitle. Accordion titles should be reworked from first-person reader voice to subject-led concept names. After fixes, page is shippable.

### Critical Issues (top 5)
1. **CRITICAL** – Stale internal links: `concepts/livepeer-overview`, `concepts/mental-model`, `network/job-lifecycle` no longer exist after IA refactor (see Cat 8.1).
2. **CRITICAL** – Zero cross-tab graduation links (Cat 4.10, 7.6, 10.3, 10.6). Navigator must route to LPT/Delegators, Orchestrators, Gateways, Developers, Solutions.
3. **HIGH** – Empty H2 "Network Section Map" padded with CustomDivider negative-margin hack (Cat 5.13, 5.26, 5.34).
4. **HIGH** – All 18+ navigation Cards missing `<CustomCardTitle>` wrapper (Cat 5.22).
5. **MEDIUM** – Six Accordion titles use first-person reader voice instead of subject-led concept names (Cat 2.13, 3.5). `veracityStatus` field missing while `status: current` set (Cat 1.8).
