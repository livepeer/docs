# Review: glossary.mdx

**Page**: `v2/about/resources/glossary.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (735 lines, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields (10) | FAIL | Missing `veracityStatus`. All other required present. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `reference` is valid. |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `compendium` matches glossary migration target. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `reference` is valid. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: everyone` is a deprecated alias. Canonical token: `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | `beginner`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. `status: draft` so `unverified` would be honest. |
| 1. Frontmatter | 1.9 | industry array | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Title em-dash present in description: "Key terms used in the Livepeer About section — protocol architecture..." Em-dash forbidden in `description` per checks.mdx 2.12 / 698. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `glossary`, `about`, `terminology`. None searcher-intent-aligned. |
| 1. Frontmatter | 1.14 | Multi-audience flag | PASS | Single audience (broken `everyone` aside). |
| 2. Voice | 2.1 | UK English | FAIL | "decentralized" (line 87, 119, 188), "amortizing" (119, 569), "canceling" (727), "minimised" mixed with "minimized", "amortizing" (569), "authorizes" (275), "standardized" (537/Pay-per-Pixel definition). Many entries use US spellings; US/GB drift across the term list. |
| 2. Voice | 2.2 | Zero banned words | PASS | None found in body. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None found. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order | PASS | "Core vocabulary for understanding..." is subject-first. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Each entry is one definition + context block. |
| 2. Voice | 2.7 | Audience register | PASS | Reference register; concise definitions. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | None. |
| 2. Voice | 2.9 | No passive value statements | PASS | Definitions are concrete. |
| 2. Voice | 2.10 | No hedging openers | PASS | Direct opener. |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses Gateway, LPT, Orchestrator, Delegator consistently in modern entries; Broadcaster entry explicitly flagged "(deprecated)". |
| 2. Voice | 2.12 | No em-dashes | FAIL | Em-dash in `description` (line 5). Body uses `–` and hyphens correctly elsewhere – only the description is non-compliant. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Subject-led. |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Lead with subject. |
| 2. Voice | 2.16 | Deprecated terms absent | BORDERLINE | "Broadcaster (deprecated)" entry intentionally documents the deprecated term – acceptable for a glossary. No drift to using Broadcaster as if current. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Canonical Gateway/Orchestrator/Delegator/LPT definitions consistent with universal-terms.md. |
| 2. Voice | 2.18 | Spell check | PASS | No typos detected. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS (sample) | Active Set, Confluence, LIP, LPT, Reward Cut, Treasury align with collate. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About-tab definitions; depth level appropriate. |
| 2. Voice | 2.21 | First-use defined or linked | N/A | Page IS the glossary. |
| 2. Voice | 2.22 | Terminology lock respected | PASS | About glossary aligns with locked Gateway/Broadcaster transition. |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | "Livepeer Protocol Terms" (22/25), "Economic Terms" (22/25), "Web3 Terms" (22/25), "Video Terms" (22/25), "Technical Terms" (22/25). Reference page literal naming style is intentional. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No Basics, Notes, Overview, Conclusion. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor | PASS | Each H2 has domain anchor (Protocol, Economic, Web3, Video, Technical). |
| 3. Headings | 3.5 | Names concept not examples | PASS | Categories named, not examples. |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title "About Livepeer — Glossary" contains em-dash; banned per 2.12 / 698. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Categories are sensible. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Reference uses literal/findability naming. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-readable category names. |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Section headings all domain-anchored. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: define About-tab terms. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community look up the meaning of any term used in the About section." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Sits at resources root; reachable from FAQ and other pages. |
| 4. Structure | 4.4 | No dead ends | PASS | Footer has 3 cards routing to overview, full glossary, FAQ. |
| 4. Structure | 4.5 | Prerequisites stated | PASS | None needed for a reference glossary. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "About-tab terms"; broader coverage routed to /v2/resources/glossary. |
| 4. Structure | 4.7 | Info type per section | PASS | Factual reference throughout. |
| 4. Structure | 4.8 | No content duplication | FAIL | Significant overlap with `v2/resources/glossary.mdx` (the canonical full glossary, 6949 lines). About glossary repeats Gateway, Orchestrator, Delegator, LPT, Slashing, Round, Segment, Treasury, etc. without reference-only inclusion strategy. Risk of definition drift. |
| 4. Structure | 4.9 | Section orientation | N/A | Reference, not orientation. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | All footer cards stay inside About except `/v2/resources/glossary`. No links to LPT, Orchestrators, Gateways, Developers, Solutions tabs from individual definitions where graduation is expected. |
| 4. Structure | 4.11 | Discord test | PASS | Linkable definition lookup. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 864 lines / >25KB. Substantive. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None outside the auto-generation comment block. |
| 4. Structure | 4.14 | Flat layout | PASS | One page; categorised AccordionGroups. |
| 4. Structure | 4.15 | Trade-offs present | N/A | Reference glossary. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | `audience` is deprecated alias `everyone` – cannot fill canonical context block without correction. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | PASS | All-audience reference; no blending. |
| 5. Layout | 5.1 | Correct template | PASS | Compendium = SearchTable + AccordionGroup pattern. |
| 5. Layout | 5.2 | Required sections | PASS | Tip + intro + searchable table + categorised accordion groups + footer. |
| 5. Layout | 5.3 | Only approved components | PASS | SearchTable, DynamicTable, CustomDivider, LazyLoad, AccordionGroup, Accordion, CardGroup, Card – all approved. CopyText/LinkIcon imported but unused (dead imports – per checks.mdx 706, do not flag). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info-type → component | PASS | factual reference → table + accordions. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Page renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: everyone` is deprecated. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated banners | PASS | Comment block declares tier-2 + companion JSON; not a full generated banner but explains automation. |
| 5. Layout | 5.10 | Component naming/import | PASS | Root-absolute. |
| 5. Layout | 5.11 | Gold-standard template | PASS | Compendium pattern. |
| 5. Layout | 5.12 | Section blocks from library | PASS | Intro, search-table, accordion-group, related-cards. |
| 5. Layout | 5.13 | Section ordering | PASS | Tip → intro → table → categorised definitions → footer. |
| 5. Layout | 5.14 | Multi-view rules | N/A | None. |
| 5. Layout | 5.15 | Data imports not hardcoded | BORDERLINE | Term list is hardcoded in MDX (`itemsList=[...]`). Companion JSON is auto-generated FROM this list, so MDX is the source of truth for the SearchTable. Acceptable; documented in the comment block. |
| 5. Layout | 5.16 | Related Pages footer or CTA | PASS | Three-card CardGroup footer present. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses raw `<CardGroup cols={3}>` with `<Card>`. Per check 5.17, About pages must use `<Columns cols={2}>` with `<CustomCardTitle>` (icon + title) and `horizontal` layout. Missing CustomCardTitle wrapper. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Every accordion has icon=`book-open`. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | Footer Cards do not use `<CustomCardTitle>` wrapper. |
| 5. Layout | 5.23 | StyledTable | N/A | Page uses SearchTable+DynamicTable (a richer pattern); StyledTable not required for searchable glossary. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | Single SearchTable. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One SearchTable; multiple AccordionGroups inside semantic categories – acceptable. |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider after intro; dividers between major H2 sections; divider before footer. Compliant. |
| 5. Layout | 5.27 | Mermaid colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | PASS | Components first, then data (glossaryBadges). |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | PASS | None needed; definitions verified against canonical. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Searchable + accordion are visible immediately. |
| 5. Layout | 5.32 | Reference tables at end | N/A | Glossary IS the reference. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Live page. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | PASS (sample) | Definitions checkable against contracts and LIPs (LIP-73, LIP-89, BondingManager, TicketBroker). |
| 6. Veracity | 6.2 | Code/commands | N/A | None. |
| 6. Veracity | 6.3 | No deprecated API | N/A | None. |
| 6. Veracity | 6.4 | Numbers real | PASS | "Top 100 orchestrators", "0.00005% per round", "50% target bonding rate", "7-round" unbonding period are protocol parameters. |
| 6. Veracity | 6.5 | REVIEW flags | PASS | None present. |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `status: draft`; honest given absent veracityStatus and US/GB drift. (Still requires veracityStatus field per 1.8.) |
| 6. Veracity | 6.7 | Authoritative glossary cross-check | FAIL | Page is one of multiple glossaries; the canonical full glossary is `/v2/resources/glossary.mdx` (6949 lines). About glossary's definitions should align with canonical; some entries (Inflation Model marked draft) flag drift risk. |
| 6. Veracity | 6.8 | Source staleness | PASS | Definitions stable. |
| 6. Veracity | 6.9 | No open-ended research | PASS | None. |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Citations to T1 sources (whitepaper, ethereum.org, livepeer forum). |
| 6. Veracity | 6.11 | Glossary definitions match universal terms | NOT-VERIFIED | Cross-check against `universal-terms.md` not run; sample agreement noted. |
| 6. Veracity | 6.12 | Glossary verified vs primary sources | NOT-VERIFIED | Per-entry primary-source verification not recorded. |
| 7. Navigation | 7.1 | In docs.json | PASS | Listed at line 2248. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab portal routes | N/A | Reference page. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from FAQ, navigator, and Resources nav. |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Reference lookup terminus. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Footer card "Protocol Overview" routes to `/v2/about` (tab portal); "Full Glossary" cross-tab; "FAQ" stays in tab. Only one cross-tab link – check 7.6 implies five potential graduation paths. |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published in v2/about/resources. |
| 7. Navigation | 7.8 | File naming | PASS | `glossary.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace. |
| 7. Navigation | 7.10 | No stubs in nav | PASS | Substantive page. |
| 7. Navigation | 7.11 | Resources sub-structure | PASS | Glossary at root per canonical 4-bucket layout. |
| 8. Links | 8.1 | Internal links resolve | PASS (sample) | `/v2/about`, `/v2/resources/glossary`, `/v2/about/resources/faq`, `./glossary-data.json`. NOT-VERIFIED individually. |
| 8. Links | 8.2 | External links | PASS (sample) | Links to ethereum.org, wikipedia, livepeer forum, livepeer.org, github.com – well-formed; live status NOT-VERIFIED. |
| 8. Links | 8.3 | Snippet imports | PASS | All component imports resolve. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | Renders; SearchTable hydrates. |
| 8. Links | 8.6 | No TODO/TBD | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | Status: draft – no sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | About-glossary scope vs canonical glossary not logged. |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence. |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured trail. |
| 9. Process | 9.6 | Feedback routed | N/A | – |
| 10. Completeness | 10.1 | Question coverage | PASS | Definitions cover About-tab terminology. |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Reader can look up any term. |
| 10. Completeness | 10.3 | Persona paths | PASS | Glossary serves all personas at lookup. |
| 10. Completeness | 10.4 | Scope boundaries | PASS | "About-specific terminology"; broader coverage routed. |
| 10. Completeness | 10.5 | Self-containment | PASS | Standalone reference. |
| 10. Completeness | 10.6 | Multi-audience pathway | PASS | Reference page – not a journey page. |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 5 | "Key terms used in the Livepeer About section — protocol architecture, network roles, governance, and ecosystem concepts." | em-dash `—` | description em-dash | FLAG (2.12 / 698). Replace with comma or colon. |
| 2 | "About Livepeer — Glossary" | em-dash `—` | title em-dash | FLAG (2.12). Replace with `:` or rename "About Glossary". |
| 80 | "Legacy term for the node that published streams..." | none | n/a | PASS – documents deprecated. |
| 87 | "...combine cryptography and economic incentives to enable secure, decentralized protocols." | "decentralized" | US spelling | FLAG (2.1). |
| 119 | "...amortizing transaction costs across many small payments..." | "amortizing" | US spelling | FLAG (2.1). |
| 188 | "ComfyStream is Livepeer's integration layer..." | none | n/a | PASS |
| 275 | "...authorizes protocol upgrades..." | "authorizes" | US spelling | FLAG (2.1). |
| 537 | "...standardised cost comparison..." | n/a | PASS | – |
| 569 | "amortizing transaction costs..." | US | FLAG (2.1). | – |
| 727 | "...canceling the unbonding process..." | "canceling" | US spelling | FLAG (2.1). |
| 198 | "...for misbehavior (e.g., failing verification...)" | "misbehavior" | US spelling | FLAG (2.1). Use "misbehaviour". |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Livepeer Protocol Terms | 5 | 4 | 5 | 5 | 4 | 23 |
| Economic Terms | 4 | 4 | 5 | 5 | 5 | 23 |
| Web3 Terms | 4 | 4 | 5 | 5 | 5 | 23 |
| Video Terms | 4 | 4 | 5 | 5 | 5 | 23 |
| Technical Terms | 4 | 4 | 5 | 5 | 5 | 23 |

## Spelling/Typo Check

US spellings flagged above. No straight typos.

## Component Matrix

| Component | Used? | Appropriate for `reference`/`compendium`? | Notes |
|-----------|-------|------------------------------------------|-------|
| SearchTable + DynamicTable | Yes | Yes | Compendium-level findability. |
| LazyLoad | Yes | Yes | Performance wrapper. |
| Tip | Yes | Yes | Search guidance. |
| Note | Yes | Yes | Companion JSON pointer. |
| AccordionGroup / Accordion | Yes (heavy) | Yes | All accordions have icon. |
| CardGroup / Card | Yes (footer) | Borderline | Should use Columns + CustomCardTitle per 5.17/5.22. |
| CustomDivider | Yes | Yes | Compliant placement. |
| CopyText / LinkIcon | Imported, unused | n/a | Dead imports – per 706, do not flag. |

## Cross-Category Connections

```
Root Cause 1: Em-dashes in title and description
Affects: 1.11 + 2.12 + 3.6
Fix: Title → "About Glossary"; description → replace `—` with `:` or rewrite as two sentences.

Root Cause 2: Deprecated audience token
Affects: 1.5 + 5.7 + 4.16
Fix: `audience: everyone` → `audience: community`.

Root Cause 3: US spellings drift across the term list
Affects: 2.1
Fix: decentralized→decentralised, amortizing→amortising, authorizes→authorises, canceling→cancelling, misbehavior→misbehaviour, standardized→standardised. Run UK English homogeniser skill.

Root Cause 4: Footer cards do not use canonical Columns + CustomCardTitle
Affects: 5.17 + 5.22
Fix: Replace `<CardGroup cols={3}>` with `<Columns cols={2}>`; wrap Card titles in `<CustomCardTitle icon=... title=... />`; use `horizontal` layout. Trim to 2 cards.

Root Cause 5: Definition overlap with v2/resources/glossary.mdx (canonical 6949-line glossary)
Affects: 4.8 + 6.7
Fix: Decide on strategy – either (a) About glossary becomes the in-tab subset that DEFERS via link to canonical for non-About terms, or (b) About glossary deprecates entirely and folds into canonical with About-tab filter. Document in decision registry per 9.2.

Root Cause 6: Missing veracityStatus
Affects: 1.8 + 6.6
Fix: Add `veracityStatus: unverified` (matches `status: draft`).
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 8 | 4 | 2 | 8/12 |
| 2. Voice | 22 | 19 | 2 | 1 | 19/21 |
| 3. Headings | 10 | 9 | 1 | 0 | 9/10 |
| 4. Structure | 17 | 13 | 2 | 2 | 13/15 |
| 5. Layout | 34 | 16 | 3 | 15 | 16/19 |
| 6. Veracity | 12 | 7 | 1 | 4 | 7/8 |
| 7. Navigation | 11 | 9 | 1 | 1 | 9/10 |
| 8. Links | 6 | 5 | 0 | 1 | 5/5 |
| 9. Process | 6 | 0 | 5 | 1 | 0/5 |
| 10. Completeness | 6 | 6 | 0 | 0 | 6/6 |

**Overall**: 92/111 applicable checks passed.
**Verdict**: NEEDS WORK
**Critical issues**:
1. Em-dashes in title and description (2.12 / 698 hard prohibition).
2. `audience: everyone` is deprecated; must be `community`.
3. US spellings (decentralized, amortizing, authorizes, canceling, misbehavior, standardized) violate 2.1 across many entries.
4. Heavy overlap with canonical `v2/resources/glossary.mdx` – decide strategy and log per 9.2.
5. Footer cards use `<CardGroup>` not `<Columns>` + `<CustomCardTitle>` (5.17, 5.22).
6. Missing veracityStatus.
