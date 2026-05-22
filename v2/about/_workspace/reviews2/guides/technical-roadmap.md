# Review: technical-roadmap.mdx

**Page**: `v2/about/guides/technical-roadmap.mdx`
**URL**: `/v2/about/guides/technical-roadmap`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

---

## CRITICAL CROSS-PAGE FINDING (read first)

This file is a **byte-identical duplicate** of `v2/about/resources/reference/technical-roadmap.mdx` (`diff` returns no output). Both paths are registered in `docs.json` (line 2236 and line 2265). Two URLs serve the same content:
- `/v2/about/guides/technical-roadmap`
- `/v2/about/resources/reference/technical-roadmap`

CRITICAL Cat 4.8, 7.1/7.2, 7.7 violation. Per `_design/ia-design.md` `reference` content belongs under `resources/reference/`.

Note: this is the smallest published page in the About-tab `guides/` set (~860 bytes) and the lowest-fidelity. It is also the only `guides/` duplicate that uses `audience: general` (a deprecated value) instead of `community`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | yes | Technical Roadmap | PASS | |
| sidebarTitle | NO | – | FAIL | Required by 1.1; missing entirely. |
| description | yes | "Review the current Livepeer roadmap posts covering network and product direction." | FAIL | Opens with imperative `Review the…` — addresses reader directly, then returns nothing about WHAT the roadmap is. Subject-light. ~85 chars (within budget) but does not describe what the page contains, only an instruction. |
| pageType | yes | reference | INFO | Canonical 7-type, but a roadmap is closer to `resource` than `reference` — `reference` implies stable schema/spec, a roadmap is a curated link list of evolving comms. Re-classify as `resource` with `pageVariant: knowledge-hub` if reading-path framing, or keep `reference` and accept the schema mismatch. |
| pageVariant | NO | – | INFO | Optional. |
| audience | yes | **general** | FAIL | Deprecated value per check 1.5. Canonical 7-token set is `founder, builder, developer, gateway, orchestrator, delegator, community`. `general` is explicitly listed as an old value not to use. |
| purpose | yes | reference | PASS | Canonical 15-value. |
| complexity | yes | intermediate | PASS | |
| lifecycleStage | yes | discover | PASS | |
| keywords | yes | [livepeer, about, resources, technical roadmap, roadmap, **https**, **introducing**] | FAIL | `https` and `introducing` are noise tokens scraped from the URLs in the body — they are not searcher-intent terms. Generic stems (`livepeer`, `about`, `resources`). |
| og:image block | yes | **fallback.png** | FAIL | Uses generic `/snippets/assets/media/og-images/fallback.png` instead of the About-tab convention `/snippets/assets/media/og-images/en/about.png`. og:image:alt also generic ("Livepeer Docs social preview image"). |
| veracityStatus | NO | – | FAIL | Required by 1.8. |
| status | NO | – | FAIL | No `status` field at all. |
| lastVerified | yes | 2026-03-17T00:00:00.000Z | INFO | Date format diverges from the `"YYYY-MM-DD"` quoted-string convention used elsewhere in About (e.g. `"2026-04-05"`). ISO datetime acceptable but inconsistent with sibling pages. Roadmap content drifts faster than 1.5 months — flag for staleness. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `sidebarTitle`, `veracityStatus`, `status`. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` is canonical (though semantically debatable for a roadmap — see Frontmatter Table note). |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | **`general` is deprecated**; not in the 7-token set. Should be `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry valid | N/A | |
| 1. Frontmatter | 1.10 | niche valid | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Imperative `Review…` is reader-directed not subject-first. Does not describe page contents. |
| 1. Frontmatter | 1.12 | OG image complete | FAIL | Uses generic fallback rather than About OG. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Includes URL-fragment noise (`https`, `introducing`) and generic stems. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | INFO | Body opens "Use these roadmap posts to review…" — instruction-first, not subject-first. The page never tells the reader WHAT the roadmap is, only links. |
| 2. Voice | 2.6 | Paragraph discipline | N/A | One sentence + 2 bare URLs. |
| 2. Voice | 2.7 | Audience register | FAIL | Cannot judge register on what is effectively a 2-link list. The community register requires substantive content; this page provides none. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | |
| 2. Voice | 2.9 | No passive value statements | PASS | No value claims. |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | INFO | "Use these roadmap posts" is reader-directed, not entity-led; would prefer "The Livepeer roadmap currently covers two themes: …" |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | (Imperative, but not self-referential per the strict 2.15 definition.) |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | TERMINOLOGY-COLLATE | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | N/A | No specialised terms introduced. |
| 2. Voice | 2.22 | Terminology lock | N/A | |
| 3. Headings | 3.1 | Score ≥20/25 | N/A | **No H2/H3 headings exist**. Title is the only heading. Page is a flat link list. |
| 3. Headings | 3.2 | No banned/weak terms | N/A | No body headings. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | N/A | |
| 3. Headings | 3.5 | Names concept not examples | N/A | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Technical Roadmap" is concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | INFO | The title is fine; the *absence* of any sub-headings is the editorial failure. |
| 3. Headings | 3.8 | Per-pageType naming | N/A | |
| 3. Headings | 3.9 | Per-audience register | N/A | |
| 3. Headings | 3.10 | Domain-anchor applied | N/A | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single purpose (point at roadmap posts). |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community member find current roadmap blog posts." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Position ambiguous due to duplicate routing. |
| 4. Structure | 4.4 | No dead ends | PASS | External links present. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Page does not bound itself; reader cannot tell whether this is "the roadmap" or "two posts about a roadmap". |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | FAIL | **CRITICAL**: byte-identical to `resources/reference/technical-roadmap.mdx`. |
| 4. Structure | 4.9 | Section orientation | N/A | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero internal links — no cross-tab graduation, no link to network-metrics, no link to protocol overview. |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page returns one sentence and 2 bare URLs. Reader gets no roadmap framing, no themes, no timeline, no scope. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~860 bytes; far below 2KB stub threshold. **Smallest page in the guides/ set.** |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None present (the absence of content is the problem here, not TODOs). |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. A roadmap page should call out "what is on the roadmap but not yet shipped" vs "what is shipped" — entirely absent. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | |
| 4. Structure | 4.17 | Multi-audience handoff | N/A | |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | reference pageType requires Reference section with substantive content; this page has neither H2 nor substantive content. |
| 5. Layout | 5.3 | Only approved components | PASS | No components used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component mapping | FAIL | A roadmap reading list should use `<Card>` per post (with title, date, theme summary) or `<StyledTable>` (theme, post, date, status). Bare URL bullets are the worst form. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general` is old-schema (deprecated value). |
| 5. Layout | 5.8 | CSS custom properties | N/A | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | Component naming | N/A | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | No introduction prose, no Header CTA, no Related Pages, no Next Step. |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | N/A | |
| 5. Layout | 5.16 | Related Pages / Next CTA | FAIL | Neither present. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables StyledTable | FAIL | A roadmap is a natural `<StyledTable>` (theme / post / date / status). Not used. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout | N/A | |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No divider used. No imports either. |
| 5. Layout | 5.27 | Mermaid colours | N/A | |
| 5. Layout | 5.28 | Import ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | INFO | No `status: draft` declared, but content quality is below stub threshold. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Citable | PASS | Two roadmap blog URLs cited. |
| 6. Veracity | 6.2 | Code tested | N/A | |
| 6. Veracity | 6.3 | Deprecated API | N/A | |
| 6. Veracity | 6.4 | Numbers real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `lastVerified: 2026-03-17` is ~1.5 months old, and roadmaps drift fastest of any content type. No staleness flag, no "as of" date in the body, no indication of when the linked posts were published. |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | INFO | `blog.livepeer.org` is T1 for foundation comms but T2 for technical roadmap claims. |
| 6. Veracity | 6.11 | Glossary match | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2236. |
| 7. Navigation | 7.2 | Nav matches FS | FAIL | Same content registered at two paths (line 2236 and 2265). |
| 7. Navigation | 7.3 | Tab portal routes | N/A | |
| 7. Navigation | 7.4 | No orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Stub blocks the journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None. |
| 7. Navigation | 7.7 | File correct lane | FAIL | Two lanes. |
| 7. Navigation | 7.8 | File naming | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | ~860 bytes, far below 2KB minimum. |
| 7. Navigation | 7.11 | Resources sub-structure | FAIL | Duplicate placement violates 4-bucket layout. |
| 8. Links | 8.1 | Internal links resolve | PASS | No internal links to test. |
| 8. Links | 8.2 | External live | NOT-TESTED | 2 external URLs to `blog.livepeer.org`. Both rendered as **bare URLs** (no markdown link syntax `[text](url)`), so they will display as plaintext rather than clickable links unless Mintlify's MDX bundler auto-links bare URLs (not guaranteed). |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | PASS | Trivial. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process | 9.1 | Human sign-off | FAIL | No `status` field. |
| 9. Process | 9.2 | Decisions in registry | FAIL | |
| 9. Process | 9.3 | Gate prerequisites | FAIL | |
| 9. Process | 9.4 | Phase ordering | FAIL | |
| 9. Process | 9.5 | Findings before fixes | N/A | |
| 9. Process | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Question has page | FAIL | "What is on the Livepeer technical roadmap?" — page does not answer; it points elsewhere with two bare URLs. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | |
| 10. Completeness | 10.3 | Persona paths | FAIL | Diligence Analyst and Founder/Product Evaluator personas blocked. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |
| 10. Completeness | 10.5 | Self-containment | FAIL | Reader must leave the tab to learn anything. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 24 | "Use these roadmap posts to review the current Livepeer network vision and product direction" | imperative reader-direction | Not strictly banned; flagged as voice misalignment vs entity-led standard (2.13) | borderline |
| 21 | `audience: general` | deprecated value | banned per check 1.5 (frontmatter) | YES (1.5, 5.7) |
| 26–27 | bare URLs | no markdown link syntax | rendering risk and accessibility issue | flag |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Technical Roadmap (title only) | 4 | 3 | 4 | 5 | 5 | 21/25 |

(Page has no body headings.)

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `reference`? | Notes |
|-----------|-------|------------------------------|-------|
| (none used) | – | – | Page is plain markdown without imports or components. |
| CustomDivider | No | Yes | Should be used after imports per 5.26. |
| StyledTable | No | Yes (recommended) | Theme / post / date / status table is the natural form. |
| Card / CardGroup | No | Optional | Card per roadmap post is acceptable. |

## Cross-Category Connections

```
Root Cause 1: Byte-identical duplicate of v2/about/resources/reference/technical-roadmap.mdx
Affects: Cat 4.8 + Cat 7.1 + Cat 7.2 + Cat 7.7 + Cat 7.11
Fix: Pick canonical route (recommend resources/reference/), delete other, add redirect, remove from docs.json line 2236
```

```
Root Cause 2: Frontmatter has the most violations of any page in the guides/ set
Affects: Cat 1.1 + Cat 1.5 + Cat 1.8 + Cat 1.11 + Cat 1.12 + Cat 1.13 + Cat 5.7
Fix: Add sidebarTitle, veracityStatus: unverified, status: draft. Change audience: general → community.
     Replace fallback OG image with /snippets/assets/media/og-images/en/about.png.
     Rewrite description to be subject-first ("The Livepeer technical roadmap covers …").
     Remove `https` and `introducing` from keywords (URL-fragment noise).
```

```
Root Cause 3: Page is the smallest published stub in the About-tab guides/ set (~860 bytes)
Affects: Cat 4.11 + Cat 4.12 + Cat 4.15 + Cat 5.2 + Cat 5.5 + Cat 5.13 + Cat 5.16 + Cat 5.23 + Cat 5.26 + Cat 7.10 + Cat 10.1–10.6
Fix: Build a real roadmap page — StyledTable of themes/posts/dates/status, prose introduction summarising what is on the roadmap, scope statement, Related Pages footer linking network-metrics and protocol overview. Or move to _workspace/drafts/ and remove from nav.
```

```
Root Cause 4: Bare URLs without markdown link syntax
Affects: Cat 8.2 + accessibility
Fix: Wrap in `[text](url)` with descriptive link text — "Livepeer Cascade vision (April 2025)" rather than the raw URL.
```

```
Root Cause 5: Stale roadmap content with no staleness signal
Affects: Cat 6.8 + Cat 6.6
Fix: Add `lastVerified` review cadence (roadmap should be checked monthly), add "as of" date to body, REVIEW-flag any claims that may have shifted since the last verified date.
```

## Blocking Decision

```
Blocking Decision: Same as the other guides/ duplicates — guides/ vs resources/reference/?
Recommendation: resources/reference/ is the correct lane for `pageType: reference` per IA design.
Note: this is also the page in the guides/ set most in need of a complete rewrite, regardless of which route survives.
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score (Pass / Pass+Fail) |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 7 | 7 | 2 | 7/14 |
| 2. Voice | 22 | 16 | 1 | 5 | 16/17 |
| 3. Headings | 10 | 2 | 0 | 8 | 2/2 |
| 4. Structure | 17 | 4 | 11 | 2 | 4/15 |
| 5. Layout | 34 | 3 | 11 | 20 | 3/14 |
| 6. Veracity | 12 | 1 | 2 | 9 | 1/3 |
| 7. Navigation | 11 | 3 | 7 | 1 | 3/10 |
| 8. Links | 6 | 2 | 0 | 3 (+1 NOT-TESTED) | 2/2 |
| 9. Process | 6 | 0 | 4 | 2 | 0/4 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Overall**: ~38/87 applicable checks passed (~44%)
**Verdict**: REWRITE REQUIRED

**Critical issues**:
1. Byte-identical duplicate at two routes in docs.json (line 2236 + 2265)
2. **`audience: general`** — deprecated frontmatter value (only page in the guides/ set with this issue)
3. Smallest page in the guides/ set at ~860 bytes; far below 2KB stub threshold
4. Missing `sidebarTitle`, `veracityStatus`, `status` — frontmatter has more failures than any other guides/ page
5. Bare URLs without markdown link syntax — rendering and accessibility risk
6. Description is reader-imperative ("Review…") not subject-first; gives no preview of contents
7. OG image is generic fallback rather than About-tab `en/about.png`
8. Roadmap content with no staleness signal in body, despite roadmaps being the fastest-drifting content type
