# Review: faq.mdx

**Page**: `v2/about/resources/faq.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (735 lines, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields (10) | PASS | All present: title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG image block. veracityStatus absent (only "status: current" + lastVerified used). |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `reference` is valid. |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `compendium` is canonical and matches deprecated-faq migration. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `reference` is valid. |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `community` is canonical. |
| 1. Frontmatter | 1.6 | complexity | PASS | `beginner`. |
| 1. Frontmatter | 1.7 | lifecycleStage | FAIL | `troubleshoot` is unusual for an FAQ orientation page on About tab; expected `discover` or `evaluate`. About tab skews discover/evaluate per checks.mdx 1.7. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing entirely. `status: current` requires `veracityStatus: verified` (per checks.mdx 1.8 / 702). |
| 1. Frontmatter | 1.9 | industry array | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("Common questions"), under 160 chars, no self-reference. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `faq`, `protocol`, `network`, `glossary`. None are intent-aligned search queries. |
| 1. Frontmatter | 1.14 | Multi-audience flag | PASS | Single audience (community). Founder/evaluator question routed via link, not blended. |
| 2. Voice | 2.1 | UK English | PASS | "behaviour" used. No US spellings. |
| 2. Voice | 2.2 | Zero banned words | PASS | None found. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None found. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None found. |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with self-reference: "This FAQ answers the most common About-tab questions and points to the deeper page when the short answer is not enough." Violates 2.13 entity-led + 2.15 self-reference. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Each accordion answer is one job, lead-with-fact. |
| 2. Voice | 2.7 | Audience register | PASS | Community register: substantive, peer-level, not effusive. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | None of "thriving community", "passionate", etc. |
| 2. Voice | 2.9 | No passive value statements | PASS | All statements concrete. |
| 2. Voice | 2.10 | No hedging openers | FAIL | The intro sentence is a self-reference, not a hedge but equally problematic per 2.5. |
| 2. Voice | 2.11 | Terminology locked | PASS | LPT, gateway, orchestrator, micropayments used per terminology lock. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opening sentence subject is "This FAQ" – page self-reference. |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Lead with subject "Common questions". |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No Broadcaster, Pool worker, Combined, Hybrid, Transcoder-as-orchestrator. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Gateway/orchestrator/LPT consistent. |
| 2. Voice | 2.18 | Spell check | PASS | No typos. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Definitions of protocol/network match canonical split. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About-tab register. |
| 2. Voice | 2.21 | First-use defined or linked | PASS | LPT, protocol, network linked on first use to deeper pages. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No formal lock declared on About tab. |
| 3. Headings | 3.1 | Heading score >=20/25 | N/A | Page has no H2 headings. Body is a single AccordionGroup. Accordion `title` props evaluated below. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | Accordion titles ask specific questions; no banned standalone terms. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor | PASS | Each accordion title contains domain anchor (Livepeer, LPT, contract, About). |
| 3. Headings | 3.5 | Names concept not examples | PASS | Questions name concepts. |
| 3. Headings | 3.6 | Title well-formed | PASS | "FAQ" is concise. Acceptable for compendium variant. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Question titles are reader-facing, well-judged. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Reference/compendium uses literal/findability naming – questions are explicitly literal. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community register: plain question phrasing. |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | All accordion titles interpretable in isolation. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: answer common questions and route. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community get a fast answer to common About-tab questions and route to the deeper page." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Sits in resources/ root. Each Q routes outward; valid for a compendium. |
| 4. Structure | 4.4 | No dead ends | PASS | Every accordion ends with a routing link. |
| 4. Structure | 4.5 | Prerequisites stated | PASS | None needed for an FAQ; question-led entry. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | FAQ explicitly redirects to deeper pages for full answers. |
| 4. Structure | 4.7 | Info type per section | PASS | Reference / Q&A. Matches `reference` purpose. |
| 4. Structure | 4.8 | No content duplication | PASS | Answers are short pointers, not duplicates. |
| 4. Structure | 4.9 | Section orientation | N/A | Not a section orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links (Orchestrators, Gateways, Developers, Delegators/LPT, Solutions). All links stay inside `/v2/about/`. Check 4.10 requires at least 3 cross-tab links per About-tab page. |
| 4. Structure | 4.11 | Discord test | PASS | Each Q answers in one accordion + link to depth. Self-contained for a fast-answer surface. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~2.4KB. Below the 5KB substantive minimum for `resource`/`reference` (checks.mdx 4.12). Stub-adjacent. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None. |
| 4. Structure | 4.14 | Flat layout | PASS | AccordionGroup at root – appropriate. |
| 4. Structure | 4.15 | Trade-offs present | N/A | Compendium FAQ does not require trade-offs. |
| 4. Structure | 4.16 | Content pass context completable | PASS | All 15 fields fillable. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | PASS | Founder evaluator Q explicitly labelled and routed. |
| 5. Layout | 5.1 | Correct template for pageType+pageVariant | PASS | Compendium = AccordionGroup-led reference. |
| 5. Layout | 5.2 | Required sections present | PASS | Has intro + reference body. |
| 5. Layout | 5.3 | Only approved components | PASS | CustomDivider, AccordionGroup, Accordion all approved for `reference`. |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/PreviewCallout. |
| 5. Layout | 5.5 | Info-type → component | PASS | factual reference → Accordion is acceptable. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Imports resolve; JSX closed. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All canonical values. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | Root-absolute import path. |
| 5. Layout | 5.11 | Gold-standard template | PASS | Compendium pattern. |
| 5. Layout | 5.12 | Section blocks from library | PASS | Intro + accordion-group blocks. |
| 5. Layout | 5.13 | Section ordering | PASS | Intro → AccordionGroup. Acceptable. |
| 5. Layout | 5.14 | Multi-view rules | N/A | No multi-view content. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data fields. |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | No Related Pages footer or Next Step CTA. Each accordion link is mid-content; the closing layout has no CardGroup/Card. |
| 5. Layout | 5.17 | Related Pages format | N/A | None present. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Every Accordion has icon prop. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks. |
| 5. Layout | 5.21 | StyledSteps | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No nav cards. |
| 5. Layout | 5.23 | StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | Zero tables. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | Single AccordionGroup. |
| 5. Layout | 5.26 | CustomDivider placement | PASS | One opening divider after import. No divider before related-section (which is missing entirely). |
| 5. Layout | 5.27 | Mermaid colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | PASS | One component import. |
| 5. Layout | 5.29 | Media placeholders | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags | PASS | No unverified claims requiring REVIEW. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Q&A all visible behind one click. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Live page is shippable. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | PASS | Claims are routing pointers. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API | N/A | No APIs. |
| 6. Veracity | 6.4 | Numbers real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags | PASS | None needed. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `status: current` declared without `veracityStatus: verified`. Per checks.mdx 1.8/702, the two must be consistent. |
| 6. Veracity | 6.7 | Authoritative glossary | PASS | Links to authoritative `/v2/about/resources/glossary` and `/v2/resources/glossary`. |
| 6. Veracity | 6.8 | Source staleness | PASS | No volatile data. |
| 6. Veracity | 6.9 | No open-ended research | PASS | None. |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Routes to T1 internal docs. |
| 6. Veracity | 6.11 | Glossary definitions match universal terms | PASS | Reuses canonical wording. |
| 6. Veracity | 6.12 | Glossary verified vs primary sources | N/A | Page is FAQ, not a glossary. |
| 7. Navigation | 7.1 | In docs.json | PASS | Listed at line 2247 of docs.json. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists at expected path. |
| 7. Navigation | 7.3 | Tab portal routes | N/A | Not the portal page. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from About > Resources. |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Question-led entry with valid exits. |
| 7. Navigation | 7.6 | Cross-tab graduation paths | FAIL | Zero links to LPT/Delegators, Orchestrators, Gateways, Developers, or Solutions. |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published in `v2/about/resources/`. |
| 7. Navigation | 7.8 | File naming | PASS | `faq.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace. |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | Page is 2.4KB – borderline stub for a nav-listed reference page (5KB+ standard). |
| 7. Navigation | 7.11 | Resources sub-structure correct | PASS | FAQ sits at resources root per the canonical 4-bucket layout (root, knowledge-hub, compendium, reference). |
| 8. Links | 8.1 | Internal links resolve | PASS (sample) | `/v2/about/concepts/livepeer-overview`, `/v2/about/protocol/overview`, `/v2/about/network/overview`, `/v2/about/protocol/livepeer-token`, `/v2/about/protocol/economics`, `/v2/about/resources/reference/livepeer-contract-addresses`, `/v2/about/protocol/blockchain-contracts`, `/v2/about/navigator`, `/v2/about/resources/knowledge-hub/evaluating-livepeer`, `/v2/about/resources/glossary`, `/v2/resources/glossary` – all align with current IA. NOT-VERIFIED individually. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports | PASS | CustomDivider import resolves. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | No syntax errors. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | FAQ-as-compendium pattern not logged. |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence. |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured review trail. |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections. |
| 10. Completeness | 10.1 | Question coverage | PASS | Hits the standard About-orientation questions. |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Each Q routes outward to depth. |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | Founder/evaluator Q is the only persona-targeted entry; OSS contributor, GPU operator candidate, diligence analyst not addressed. |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | "About-tab questions" framed up front. |
| 10. Completeness | 10.5 | Self-containment | PASS | Holds its job (fast answer + routing). |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | Five primary persona paths not all surfaced from FAQ. |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 29 | "This FAQ answers the most common About-tab questions and points to the deeper page when the short answer is not enough." | "This FAQ" / "is not enough" | self-reference + `not [X]` | self-reference: FLAG (2.5/2.13/2.15). `not enough`: borderline – conditional caveat at sentence end. |
| 43 | "...routing, compute, verification, and marketplace behaviour." | none | n/a | PASS |
| 49 | "It is not the token used to pay for ordinary video or AI jobs." | "It is not" | value statement, negated | FLAG: 2.4 forbids `not [X]` in value statements. State positive: "LPT is used for staking, delegation, and governance only; ordinary video and AI jobs are paid in ETH." |
| 67 | "...for About-specific terminology and Livepeer Glossary for broader term coverage." | n/a | PASS | – |

## Heading Score Table

Page has no markdown H2 headings. AccordionGroup titles function as headings; rubric scoring not applied per check 3.1's intent (questions, not section headings).

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `reference`/`compendium`? | Notes |
|-----------|-------|------------------------------------------|-------|
| CustomDivider | Yes | Yes | One opening divider after intro. |
| AccordionGroup | Yes | Yes | Compendium pattern. |
| Accordion | Yes (6) | Yes | Each has icon prop. |
| CardGroup / Card | No | Required (5.16) | Missing Related Pages footer. |

## Cross-Category Connections

```
Root Cause 1: Self-referential intro sentence
Affects: Cat 2.5 + 2.13 + 2.15
Fix: Replace "This FAQ answers..." with "Common Livepeer questions answered with one-paragraph pointers to the deeper page."

Root Cause 2: status/veracityStatus inconsistency
Affects: Cat 1.8 + 6.6
Fix: Add `veracityStatus: verified` (since all linked pages are canonical) OR downgrade `status: current` to `status: draft`.

Root Cause 3: No cross-tab graduation
Affects: Cat 4.10 + 7.6 + 10.6
Fix: Add a closing CardGroup with 3 cards: "Continue in Orchestrators / Gateways / Delegators tab" tied to founder/contributor/operator personas.

Root Cause 4: Page size below substantive minimum (2.4KB)
Affects: Cat 4.12 + 7.10
Fix: Add 4-5 more high-frequency questions (governance, payments, AI jobs, ETH vs LPT, where to delegate) – each with same pointer pattern. Should reach 5KB+.

Root Cause 5: Negated value statement on LPT use
Affects: Cat 2.4
Fix: Rewrite line 49 positive: "LPT is used only for staking, delegation, and governance. Video and AI jobs are paid in ETH."
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 9 | 3 | 2 | 9/12 |
| 2. Voice | 22 | 18 | 3 | 1 | 18/21 |
| 3. Headings | 10 | 9 | 0 | 1 | 9/9 |
| 4. Structure | 17 | 13 | 2 | 2 | 13/15 |
| 5. Layout | 34 | 17 | 1 | 16 | 17/18 |
| 6. Veracity | 12 | 9 | 1 | 2 | 9/10 |
| 7. Navigation | 11 | 8 | 2 | 1 | 8/10 |
| 8. Links | 6 | 5 | 0 | 1 | 5/5 |
| 9. Process | 6 | 0 | 5 | 1 | 0/5 |
| 10. Completeness | 6 | 4 | 2 | 0 | 4/6 |

**Overall**: 92/111 applicable checks passed.
**Verdict**: NEEDS WORK
**Critical issues**:
1. Self-referential intro ("This FAQ answers...") violates entity-led + 2.15.
2. `status: current` without `veracityStatus: verified` (1.8 inconsistency).
3. Zero cross-tab graduation links (4.10/7.6) – fails About-tab rule.
4. Page is 2.4KB – under the 5KB substantive-content threshold (4.12/7.10).
5. Missing Related Pages footer / Next Step CTA (5.16) – every non-navigation About page must have one.
6. Negated value statement on LPT use (line 49) violates 2.4.
