# Review: evaluating-livepeer.mdx

**Page**: `v2/about/guides/evaluating-livepeer.mdx`
**URL**: `/v2/about/guides/evaluating-livepeer`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

---

## CRITICAL CROSS-PAGE FINDING (read first)

This file is a **byte-identical duplicate** of `v2/about/resources/knowledge-hub/evaluating-livepeer.mdx`. Both paths are registered in `docs.json` (lines 2238 and 2254). Two URLs serve the same content:
- `/v2/about/guides/evaluating-livepeer`
- `/v2/about/resources/knowledge-hub/evaluating-livepeer`

CRITICAL violation of Cat 4.8, 7.1, 7.2, 7.7. Decide which route is canonical and remove the other.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | yes | Evaluating Livepeer | PASS | |
| sidebarTitle | yes | Evaluating Livepeer | PASS | |
| description | yes | "A curated reading path for founders, researchers, and analysts evaluating Livepeer's scope, design, and current network posture." | PASS | Subject-first, ~145 chars, UK English. |
| pageType | yes | resource | PASS | |
| pageVariant | yes | knowledge-hub | PASS | |
| audience | yes | founder | PASS | Founder-evaluator page. |
| purpose | yes | evaluate | PASS | |
| complexity | yes | intermediate | PASS | |
| lifecycleStage | yes | evaluate | PASS | |
| keywords | yes | [livepeer, evaluation, due diligence, founder, protocol, network] | FAIL | Generic stems mixed with category labels; missing intent terms ("livepeer for founders", "decentralised AI compute evaluation"). |
| og:image block | yes | en/about.png | PASS | All 5 fields. |
| veracityStatus | NO | – | FAIL | Required by 1.8. |
| status | yes | draft | INFO | Honest. |
| lastVerified | yes | 2026-04-05 | PASS | |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | `founder` correctly flagged for evaluator pages per check 1.5. |
| 1. Frontmatter | 1.6 | complexity | PASS | |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | |
| 1. Frontmatter | 1.10 | niche valid | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | |
| 1. Frontmatter | 1.12 | OG image complete | PASS | |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic. |
| 1. Frontmatter | 1.14 | Multi-audience flag | INFO | Description names "founders, researchers, and analysts"; only `founder` declared. Researchers/analysts ride along without inline flags — borderline. |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | "This page is being developed" + functional `Coming Soon` heading. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | `This page [verb]` self-reference at line 31. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with meta-disclaimer, not subject. Founder register requires outcome/economics first. |
| 2. Voice | 2.6 | Paragraph discipline | N/A | |
| 2. Voice | 2.7 | Audience register | FAIL | Founder register requires "outcome and economics before mechanism" — page delivers neither, only meta + reading list. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | No founder hype language. |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims. |
| 2. Voice | 2.10 | No hedging openers | FAIL | Opens with disclaimer about its own focus. |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page is being developed". |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | N/A | |
| 2. Voice | 2.22 | Terminology lock | N/A | |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Recommended reading order" 18/25; "What this guide will eventually add" 9/25. |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "What this guide will eventually add" is sub-tier even by avoid standard. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Recommended reading order" lacks domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | Stub-speak heading. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | |
| 3. Headings | 3.9 | Per-audience register | FAIL | Founder register absent from headings. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | |
| 4. Structure | 4.1 | One purpose, one audience, one job | INFO | Single audience declared; description hints at 3. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the founder evaluate Livepeer by sequencing decision-relevant pages." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Position ambiguous due to duplicate routing. |
| 4. Structure | 4.4 | No dead ends | PASS | Reading list. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | INFO | "Stay focused on how to assess Livepeer, not how to operate it" is one-line scope statement — minor positive but vague. |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | FAIL | **CRITICAL**: byte-identical to `resources/knowledge-hub/evaluating-livepeer.mdx`. |
| 4. Structure | 4.9 | Section orientation | N/A | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. Founder evaluator should graduate to Solutions and Developers. |
| 4. Structure | 4.11 | Discord test | FAIL | Stub. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~1.4KB; under 2KB stub threshold. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | "What this guide will eventually add" is in-page TODO. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | Founder pages REQUIRE the "when not to use Livepeer" framing per check 4.15. Absent. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | Researchers + analysts not flagged inline. |
| 5. Layout | 5.1 | Correct template | FAIL | |
| 5. Layout | 5.2 | Required sections | FAIL | |
| 5. Layout | 5.3 | Only approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | FAIL | "What this guide will eventually add" = Coming Soon. |
| 5. Layout | 5.5 | Info type → component mapping | FAIL | Reading-path resource should use Cards/StyledSteps. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties | N/A | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | Component naming | PASS | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages / Next CTA | FAIL | Neither present. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | |
| 5. Layout | 5.27 | Mermaid colours | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | Founder needs decision-relevant info upfront; page has none. |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Citable | N/A | |
| 6. Veracity | 6.2 | Code tested | N/A | |
| 6. Veracity | 6.3 | No deprecated API | N/A | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing field. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | N/A | |
| 6. Veracity | 6.9 | No open-ended research | FAIL | "What this guide will eventually add" is open-ended. |
| 6. Veracity | 6.10 | Source authority | N/A | |
| 6. Veracity | 6.11 | Glossary match | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2238. |
| 7. Navigation | 7.2 | Nav matches FS | FAIL | Same content at two paths. |
| 7. Navigation | 7.3 | Tab portal routes | N/A | |
| 7. Navigation | 7.4 | No orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No links to Solutions/Developers despite founder audience. |
| 7. Navigation | 7.7 | File correct lane | FAIL | Two lanes simultaneously. |
| 7. Navigation | 7.8 | File naming | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | ~1.4KB stub. |
| 7. Navigation | 7.11 | Resources sub-structure | FAIL | Duplicate placement violates 4-bucket layout. |
| 8. Links | 8.1 | Internal links resolve | NOT-TESTED | 7 internal links: `/v2/about/concepts/livepeer-overview`, `/v2/about/concepts/mental-model`, `/v2/about/network/overview`, `/v2/about/network/marketplace`, `/v2/about/protocol/overview`, `/v2/about/protocol/economics`, `/v2/about/resources/reference/network-metrics`. The first 6 likely broken given current concepts/protocol IA reorganisation (see git status: livepeer-architecture.mdx → livepeer-stack.mdx, token-economics.mdx → livepeer-token.mdx). |
| 8. Links | 8.2 | External live | N/A | |
| 8. Links | 8.3 | Snippet imports resolve | PASS | |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | PASS | |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | |
| 9. Process | 9.1 | Human sign-off | FAIL | `status: draft`. |
| 9. Process | 9.2 | Decisions in registry | FAIL | |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | |
| 9. Process | 9.4 | Phase ordering | FAIL | |
| 9. Process | 9.5 | Findings before fixes | N/A | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Every question has page | FAIL | "Should I evaluate Livepeer for my product?" — page does not answer. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | |
| 10. Completeness | 10.3 | Persona paths | FAIL | Founder/Product Evaluator persona blocked. |
| 10. Completeness | 10.4 | Scope boundaries | INFO | One-line attempt. |
| 10. Completeness | 10.5 | Self-containment | FAIL | |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | No graduation to Solutions/Developers. |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 31 | "This page is being developed as the evaluation reading path for the About tab." | `This page [verb]` | self-reference | YES (2.4) |
| 31 | "It will stay focused on how to assess Livepeer, not how to operate it." | `not [X]` in framing | conditional caveat | borderline (2.4) |
| 45 | "What this guide will eventually add" | functional `Coming Soon` | conditional caveat as heading | YES (5.4, 8.6) |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Recommended reading order | 4 | 3 | 4 | 4 | 3 | 18/25 |
| What this guide will eventually add | 1 | 1 | 2 | 3 | 2 | 9/25 |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `resource`? | Notes |
|-----------|-------|----------------------------|-------|
| CustomDivider | Yes | Yes | Correct placement. |
| Card / StyledSteps | No | Recommended | Founder evaluator path should be a Cards grid with brief why-this-matters per page. |

## Cross-Category Connections

```
Root Cause 1: Byte-identical duplicate at two routes (guides/ and resources/knowledge-hub/)
Affects: Cat 4.8 + Cat 7.1 + Cat 7.2 + Cat 7.7 + Cat 7.11
Fix: Pick one canonical route, delete the other, add redirect
```

```
Root Cause 2: Stub shipped to published nav with TODO list embedded
Affects: Cat 2.3 + Cat 2.5 + Cat 2.10 + Cat 2.13 + Cat 4.11–4.13 + Cat 4.15 + Cat 5.4 + Cat 5.33 + Cat 7.10 + Cat 8.6 + Cat 10.2
Fix: Either complete the page (with "when not to use Livepeer" framing) or move to _workspace/drafts/
```

```
Root Cause 3: Founder register absent
Affects: Cat 2.5 + Cat 2.7 + Cat 4.15 + Cat 5.31
Fix: Open with outcome/economics; include trade-off section ("when not to use Livepeer"); decision-relevant info above the fold
```

```
Root Cause 4: Multi-audience leak (description names founders + researchers + analysts)
Affects: Cat 1.14 + Cat 4.17
Fix: Either restrict scope to founder, or add inline <Note>For researchers: …</Note> blocks
```

## Blocking Decision

```
Blocking Decision: Same as contributor-orientation — guides/ vs resources/knowledge-hub/
Resolve once, apply to all 4 knowledge-hub duplicates and the 2 reference duplicates
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 11 | 2 | 2 (incl. 1 INFO not in pass/fail count: 1.14) | 11/13 |
| 2. Voice | 22 | 12 | 6 | 4 | 12/18 |
| 3. Headings | 10 | 3 | 7 | 0 | 3/10 |
| 4. Structure | 17 | 3 | 11 | 1 (+ 2 INFO) | 3/14 |
| 5. Layout | 34 | 5 | 8 | 21 | 5/13 |
| 6. Veracity | 12 | 0 | 2 | 10 | 0/2 |
| 7. Navigation | 11 | 3 | 7 | 1 | 3/10 |
| 8. Links | 6 | 2 | 1 | 2 | 2/3 (1 NOT-TESTED) |
| 9. Process | 6 | 0 | 4 | 2 | 0/4 |
| 10. Completeness | 6 | 0 | 5 | 0 (+1 INFO) | 0/5 |

**Overall**: ~39/92 applicable checks passed (~42%)
**Verdict**: REWRITE REQUIRED

**Critical issues**:
1. Byte-identical duplicate at two docs.json routes
2. Stub (~1.4KB) shipped with embedded TODO list
3. Founder register failure — no outcome/economics opener, no "when not to use Livepeer" trade-off
4. Multi-audience leak (founders + researchers + analysts) without inline flagging
5. 6+ internal links suspect against current concepts/protocol IA reorganisation
6. Zero cross-tab graduation to Solutions or Developers despite founder audience
