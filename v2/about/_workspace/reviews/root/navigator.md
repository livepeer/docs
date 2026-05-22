# Review: navigator.mdx

**Page**: `v2/about/navigator.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Pre-flight Notes

This is a **hand-authored navigation page**. No `generated-file-banner`. Registered in docs.json at line 2114 as `v2/about/navigator`. Position in nav: second page in "About Livepeer" group, after `v2/about/portal`. Next page in docs.json sequence: `v2/about/concepts/livepeer-overview` (first in "Core Concepts" group, line 2120). `pageType: navigation`, `audience: community`, `purpose: orient`.

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | `Find Your Path` | PASS | |
| sidebarTitle | Yes | `Navigator` | PASS | |
| description | Yes | `Choose the right About reading path based on what you need to understand about Livepeer.` | PASS | Subject-first, 89 chars, no self-reference |
| pageType | Yes | `navigation` | PASS | Valid 7-type |
| audience | Yes | `community` | PASS | Valid 7-token |
| purpose | Yes | `orient` | PASS | Valid 15-value |
| complexity | Yes | `beginner` | PASS | Valid value (present in frontmatter line 6) |
| lifecycleStage | Yes | `discover` | PASS | Valid value (present in frontmatter line 5) |
| keywords | Yes | Array of 7 items | PASS | Present, lowercase `keywords` field name is correct |
| og:image | Yes | `/snippets/assets/media/og-images/en/about.png` | PASS | Tab-specific image, not fallback |
| og:image:alt | Yes | `Livepeer Docs social preview image for About` | PASS | |
| og:image:type | Yes | `image/png` | PASS | |
| og:image:width | Yes | `1200` | PASS | |
| og:image:height | Yes | `630` | PASS | |
| veracityStatus | No | -- | FAIL | Missing. Required by check 1.8 |
| status | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` per check 1.8. veracityStatus is absent |
| lastVerified | Yes | `2026-04-05` | PASS | |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. All other 9 required fields present (title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG image block) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `navigation` is valid 7-type |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | No pageVariant present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `orient` is valid |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `community` is valid 7-token |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present and honest | FAIL | Missing. Additionally, `status: current` is present, which requires `veracityStatus: verified`. Current state is inconsistent |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Choose the right About reading path based on what you need to understand about Livepeer." — subject-first, 89 chars, no self-reference, UK English |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with correct values |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords are generic: `livepeer`, `about`, `navigator`, `reading path`, `protocol`, `network`, `faq`. None are searcher-intent-aligned. Better: `livepeer documentation guide`, `livepeer protocol overview reading path`, `understand livepeer network`. However, as a navigation page, keywords are less critical for SEO |
| 2. Voice | 2.1 | UK English | PASS | No US spellings found. Scanned all visible text |
| 2. Voice | 2.2 | Zero banned words | PASS | No instances of: effectively, essentially, basically, meaningful, significant, real (as intensifier), various, several, obviously, clearly |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No instances of banned phrases. Scanned all prose, card descriptions, accordion titles, step descriptions |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No `not [X]` value statements, no unresolved `if [condition]`, no `This page [verb]`, no `can/may [verb]` in value claims. See banned construction scan below for full analysis |
| 2. Voice | 2.5 | Opening order | PASS | Page opens with `## Journey Map` followed by StyledSteps — value/outcome first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Each step description is one paragraph, one job. Descriptions are concise and fact-led |
| 2. Voice | 2.7 | Audience register | PASS | Community register: accessible language, no technical jargon, orientation focus. Appropriate for `audience: community` |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | No community prohibited phrases found (no "thriving community", "passionate contributors") |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims that need quantification. Descriptions are routing instructions, not value propositions |
| 2. Voice | 2.10 | No hedging openers | PASS | Page opens directly with Journey Map heading and StyledSteps |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses standard terms: protocol, network, staking, rewards, governance, treasury |
| 2. Voice | 2.12 | No em-dashes | PASS | Zero em-dashes found |
| 2. Voice | 2.13 | Entity-led voice | PASS | All descriptions start with system facts or reader outcomes: "Build a mental model...", "Understand the on-chain rules...", "See who does the work..." |
| 2. Voice | 2.14 | No hedging verbs in value claims | PASS | No hedging verbs found. See banned construction scan |
| 2. Voice | 2.15 | Description not self-referential | PASS | "Choose the right About reading path..." — not self-referential |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No deprecated terms (Broadcaster, Pool worker, Combined mode, Hybrid, Transcoder-as-Orchestrator) |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Terms used match canonical definitions |
| 2. Voice | 2.18 | Spell check | PASS | No spelling errors found |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | NOT-TESTED | TERMINOLOGY-COLLATE files not read during this review |
| 2. Voice | 2.20 | Per-tab terminology | NOT-TESTED | Per-tab glossary file not read |
| 2. Voice | 2.21 | First use of specialised term | PASS | Terms like "protocol", "staking", "governance" are used in routing context where readers will follow links to definitions. Navigation page functions as a wayfinder, not a definition page |
| 2. Voice | 2.22 | Terminology lock respected | NOT-TESTED | Terminology lock file not read |
| 3. Headings | 3.1 | Heading scores >= 20/25 | PASS | See heading score table below. Both headings score >= 20 |
| 3. Headings | 3.2 | No banned heading terms | PASS | "Journey Map" and "Topic Guides" — neither is banned or in the Avoid tier |
| 3. Headings | 3.3 | No literal contrast labels | PASS | No "X vs Y" headings |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Headings are interpretable in isolation for a navigation page |
| 3. Headings | 3.5 | Names concept not examples | PASS | "Journey Map" names the concept; "Topic Guides" names the concept |
| 3. Headings | 3.6 | Title well-formed | PASS | "Find Your Path" — 3 words, concept-derived |
| 3. Headings | 3.7 | Expert editorial choice | PASS | "Journey Map" and "Topic Guides" are strong editorial choices for a navigator page |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Navigation page uses map language: "Journey Map", "Topic Guides" — correct per section-naming.md |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible language used in headings |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Headings interpretable without page context |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: route readers to the right About section. One audience: community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the [community reader] [choose the right reading path through the About tab]." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Prev: portal (docs.json line 2114). Portal orients, navigator routes — logical sequence. Next: concepts/livepeer-overview (line 2120). Navigator routes to concepts — logical handoff |
| 4. Structure | 4.4 | No dead ends | PASS | Every card and step links to a real page. Page does not dead-end — it routes to 12+ pages |
| 4. Structure | 4.5 | Prerequisites stated | PASS | No prerequisites needed; this is the second page in the tab, accessible to all |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Scope is clear: routing only, no content delivery |
| 4. Structure | 4.7 | Information type per section | PASS | Navigation page with `purpose: orient` — structural/routing information type is correct |
| 4. Structure | 4.8 | No content duplication | PASS | No duplication from portal.mdx — portal provides hero + 6 cards; navigator provides journey map + topic guides with deeper routing |
| 4. Structure | 4.9 | Section orientation page | N/A | This IS an orientation page |
| 4. Structure | 4.10 | Cross-tab links | N/A | Navigation page routes within tab; cross-tab links not expected here |
| 4. Structure | 4.11 | Discord test | PASS | If someone asks "where do I start with Livepeer docs?", this page gives a complete answer with clear reading paths |
| 4. Structure | 4.12 | Page size appropriate | PASS | 6,203 bytes — strong for a navigation page |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO or REVIEW comments found |
| 4. Structure | 4.14 | Flat layout | N/A | Navigation page; layout question not applicable |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not a concept/economics/architecture page |
| 4. Structure | 4.16 | Content pass context block | PASS | All fields can be filled: TAB=About, SECTION=root, PAGE_PATH=v2/about/navigator, PAGE_TYPE=navigation, AUDIENCE=community, PURPOSE=orient, LIFECYCLE_STAGE=discover, COMPLEXITY=beginner, PREV_PAGE=portal, NEXT_PAGE=concepts/livepeer-overview |
| 5. Layout | 5.1 | Correct template for pageType | PASS | Navigation page using StyledSteps for journey map + AccordionGroup with Cards for topic routing — correct template |
| 5. Layout | 5.2 | Required sections present | PASS | Navigation page required: portal/routing content. Present via StyledSteps and AccordionGroup |
| 5. Layout | 5.3 | Only approved components | PASS | Components used: CustomDivider, LinkArrow, StyledSteps, StyledStep, AccordionGroup, Accordion, CardGroup, Card. All approved for navigation pages |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Structural/routing info uses Cards and Steps — correct mapping |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | No render verification performed |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All values use canonical 7-type schema |
| 5. Layout | 5.8 | CSS custom properties only | PASS | Line 35: `iconColor="var(--lp-color-accent)" titleColor="var(--accent)"` — uses CSS custom properties |
| 5. Layout | 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5. Layout | 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths from `/snippets/components/...` |
| 5. Layout | 5.11 | Gold-standard template | PASS | Follows navigation page template pattern: routing content with cards and steps |
| 5. Layout | 5.12 | Section blocks from library | PASS | Uses step-sequence and accordion-group patterns from gold-standard library |
| 5. Layout | 5.13 | Section ordering | PASS | Navigation: Hero/Steps + Cards — correct ordering |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view layout |
| 5. Layout | 5.15 | Data imports used | N/A | No data that should be imported from snippets/data/ |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | No Related Pages footer or Next Step CTA at page end. Page ends with the AccordionGroup at line 151. Navigation pages typically are the routing mechanism themselves, but check 5.16 states "every non-navigation page" — this IS a navigation page, so technically exempt. Marking as borderline FAIL because adding a light CTA to the first content page could help |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section |
| 5. Layout | 5.18 | Tab icon prop | N/A | No `<Tab>` components used |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Every Accordion has an `icon` prop: `compass`, `cube`, `circle-nodes`, `scale-balanced`, `code-branch`, `circle-question` (lines 74, 87, 100, 113, 126, 139) |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | PASS | Uses `<StyledSteps>` with accent styling props: `iconColor="var(--lp-color-accent)" titleColor="var(--accent)"` (line 35) |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Cards within AccordionGroup use plain `<Card>` with `title` prop, not `<CustomCardTitle>`. Example line 78: `<Card title="Livepeer Overview" icon="sparkles" href="..." arrow>`. Per check 5.22, navigation cards should use CustomCardTitle with icon and title props |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One StyledSteps as the major layout element. AccordionGroup is secondary |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider after imports at line 31. Second divider between Journey Map and Topic Guides sections at line 69. Placement follows rules |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid diagrams |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports in correct order (lines 27-29): elements/spacing, elements/links, wrappers/steps |
| 5. Layout | 5.29 | Media placeholders | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags | N/A | No factual claims to flag |
| 5. Layout | 5.31 | Decision-critical info visible | N/A | No decision-critical info; routing page |
| 5. Layout | 5.32 | Reference tables at end | N/A | No reference tables |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Published page at correct path |
| 5. Layout | 5.34 | No inline styles or hardcoded hex | PASS | No inline styles or hardcoded hex values found. CSS custom properties used throughout |
| 6. Veracity | 6.1 | Every factual claim citable | PASS | Claims are structural/routing descriptions: "Three pages cover the system overview..." — verifiable by counting pages in the concepts section |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code/commands |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | PASS | "Three pages" (line 39) — verifiable: livepeer-overview, mental-model, core-concepts = 3 pages. Correct |
| 6. Veracity | 6.5 | REVIEW flags for unverified | N/A | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | veracityStatus missing. `status: current` present, which requires veracityStatus: verified |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness | N/A | No time-sensitive data |
| 6. Veracity | 6.9 | No open-ended research | N/A | No research items |
| 6. Veracity | 6.10 | Source authority tiers | N/A | Routing descriptions, not sourced claims |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No glossary content |
| 6. Veracity | 6.12 | Glossary verified against primary | N/A | No glossary content |
| 7. Navigation | 7.1 | Page in docs.json | PASS | `v2/about/navigator` at docs.json line 2114 |
| 7. Navigation | 7.2 | Nav matches file system | PASS | File exists at `v2/about/navigator.mdx`, nav entry at `v2/about/navigator` |
| 7. Navigation | 7.3 | Tab entry portal routes to all sections | N/A | This is not the tab entry portal; that is portal.mdx |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable via docs.json nav |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Navigator provides entry to all 4 major sections (concepts, protocol, network, resources) plus 6 topic guides covering evaluation, contribution, quick answers |
| 7. Navigation | 7.6 | Cross-tab graduation paths | N/A | Navigation page routes within About tab. Cross-tab graduation is a tab-level concern |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content at `v2/about/navigator.mdx` — correct lane |
| 7. Navigation | 7.8 | File naming conventions | PASS | `navigator.mdx` — no prefix needed for root section page |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 6,203 bytes of substantive content; well above 2KB minimum |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section page |
| 8. Links | 8.1 | All internal links resolve | PASS | All links use root-absolute paths: `/v2/about/concepts/livepeer-overview`, `/v2/about/protocol/overview`, `/v2/about/network/overview`, `/v2/about/resources/faq`, etc. All target pages confirmed in docs.json |
| 8. Links | 8.2 | All external links | N/A | No external links |
| 8. Links | 8.3 | All snippet imports resolve | NOT-TESTED | 3 imports: CustomDivider, LinkArrow, StyledSteps/StyledStep. File paths use root-absolute `/snippets/...` format. Not verified on disk |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | NOT-TESTED | No render verification performed |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None found |
| 9. Process | 9.1 | Human sign-off | FAIL | No explicit human sign-off marker. `lastVerified: 2026-04-05` suggests review but no formal approval recorded |
| 9. Process | 9.2 | Consuming decisions in registry | NOT-TESTED | Decision registry not read |
| 9. Process | 9.3 | Gate prerequisites | NOT-TESTED | Gate status not checked |
| 9. Process | 9.4 | Phase ordering | NOT-TESTED | Phase records not checked |
| 9. Process | 9.5 | Findings before fixes | N/A | New page, not a fix |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route |
| 10. Completeness | 10.1 | Every question has a page | PASS | Navigator routes to all major sections. Not a content page — it is the routing mechanism |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Reader can trace from navigator to any depth in the About tab via the 6 topic guides |
| 10. Completeness | 10.3 | Primary persona paths unblocked | PASS | All 6 persona paths are linked: new reader, protocol researcher, network explorer, evaluator, contributor, quick-answer seeker |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Page clearly scopes to "About reading path" — no ambiguity |
| 10. Completeness | 10.5 | Self-containment | PASS | Tab-internal routing; no external dependencies |

## Banned Construction Scan

Scanned all visible text: body prose, StyledStep descriptions, Accordion descriptions, Card descriptions.

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 39 | "Start here if you are new." | `if [condition]` | procedural (routing instruction) | No |
| 47 | "Staking, rewards, governance, treasury, token economics, contract architecture, and the design rationale behind each mechanism." | (none) | -- | No |
| 75 | "Start with the concepts pages, then move into the network and protocol sections once the system boundaries are clear." | `once [condition]` | procedural (routing instruction) | No |
| 113 | "I am evaluating Livepeer for a product or investment thesis" | (none — accordion title) | -- | No |

No banned words, phrases, or constructions found. No hedging verbs. No passive value statements. No em-dashes.

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Journey Map | 5 | 4 | 5 | 5 | 5 | 24 |
| Topic Guides | 4 | 3 | 5 | 5 | 5 | 22 |

Both headings pass the >= 20/25 threshold. "Journey Map" is precise and signals the structured reading path. "Topic Guides" accurately names the accordion-based routing section.

## Spelling/Typo Check

No typos found. All text reviewed: frontmatter, headings, step titles, step descriptions, accordion titles, card titles, card descriptions, LinkArrow labels.

## Component Matrix

| Component | Used? | Appropriate for `navigation`? | Notes |
|-----------|-------|-------------------------------|-------|
| CustomDivider | Yes | Yes | Used correctly at opening and between sections |
| LinkArrow | Yes | Yes | Links within StyledSteps |
| StyledSteps/StyledStep | Yes | Yes | Journey map steps with accent styling |
| AccordionGroup | Yes | Yes | Topic guide routing |
| Accordion | Yes | Yes | 6 accordions with icon props |
| CardGroup | Yes | Yes | Navigation cards within accordions |
| Card | Yes | Yes | 12 routing cards. Missing CustomCardTitle per 5.22 |

## Cross-Category Connections

```
Root Cause 1: Missing veracityStatus field
Affects: Cat 1.1 + Cat 1.8 + Cat 6.6
Fix: Add `veracityStatus: verified` to frontmatter (content is factual routing; all links verified)

Root Cause 2: Cards use plain Card instead of CustomCardTitle
Affects: Cat 5.22
Fix: Replace `<Card title="..." icon="..." href="..." arrow>` with `<Card href="..."><CustomCardTitle icon="..." title="..." /></Card>` pattern for all 12 cards. Note: this is a widespread pattern across the repo and may be a deliberate simplification for navigation cards — verify with component governance before changing
```

## Summary

| Category | Checks | Pass | Fail | N/A | NOT-TESTED | Score |
|---|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 9 | 3 | 1 | 0 | 9/12 |
| 2. Voice | 22 | 16 | 0 | 3 | 3 | 16/16 |
| 3. Headings | 10 | 10 | 0 | 0 | 0 | 10/10 |
| 4. Structure | 16 | 12 | 0 | 4 | 0 | 12/12 |
| 5. Layout | 34 | 16 | 2 | 16 | 0 | 16/18 |
| 6. Veracity | 12 | 2 | 1 | 9 | 0 | 2/3 |
| 7. Navigation | 11 | 6 | 0 | 5 | 0 | 6/6 |
| 8. Links | 6 | 2 | 0 | 2 | 2 | 2/2 |
| 9. Process | 6 | 0 | 1 | 2 | 3 | 0/1 |
| 10. Completeness | 5 | 5 | 0 | 0 | 0 | 5/5 |

**Overall**: 78/85 applicable checks passed (42 N/A, 8 NOT-TESTED)
**Verdict**: NEEDS WORK
**Critical issues**:
1. Missing `veracityStatus` field — inconsistent with `status: current` (Cat 1.1, 1.8, 6.6)
2. Navigation cards use plain `<Card>` instead of `<CustomCardTitle>` pattern (Cat 5.22) — may be deliberate repo convention; verify before fixing
3. Keywords are generic and not searcher-intent-aligned (Cat 1.13) — low priority for navigation page
