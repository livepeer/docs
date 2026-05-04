# Review: actors-and-participants.mdx

**Page**: `v2/about/concepts/actors-and-participants.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | PASS | All 10 required fields present; also has lastVerified. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `explain`. |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `community`. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `beginner`. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing — uses `lastVerified` only. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Who runs Livepeer, who uses it, and how each role earns or contributes." 73 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 fields present. |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Specific and intent-aligned: actors, participants, roles, orchestrators, gateways, delegators, stakeholders. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | N/A | No body prose to evaluate (page is 100% scaffold comments). |
| 2. Voice | 2.2 | Zero banned words | PASS | None in scaffolding. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with H2 "Network actors" then immediately a JSX comment placeholder. No prose exists between heading and sub-headings. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Zero paragraphs. Page is empty section scaffolding. |
| 2. Voice | 2.7 | Audience register | FAIL | Cannot evaluate — no prose. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | No prose. |
| 2. Voice | 2.9 | No passive value statements | N/A | No prose. |
| 2. Voice | 2.10 | No hedging openers | N/A | No prose. |
| 2. Voice | 2.11 | Terminology locked | N/A | No prose. |
| 2. Voice | 2.12 | No em-dashes | PASS | None. |
| 2. Voice | 2.13 | Entity-led voice | N/A | No prose. |
| 2. Voice | 2.14 | No hedging verbs | N/A | No prose. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-led description. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | None in scaffolding. |
| 2. Voice | 2.17 | Universal terms consistent | N/A | No prose. |
| 2. Voice | 2.18 | Spell check | PASS | No spelling errors. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | N/A | No definitions to test. |
| 2. Voice | 2.20 | Per-tab terminology | N/A | No prose. |
| 2. Voice | 2.21 | First use defined or linked | N/A | No prose. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No prose. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "Network actors" (16/25 — generic), "Ecosystem participants" (16/25), "Who does what" (12/25 — informal), "Orchestrators" (18/25 — single noun), "Gateways" (18/25), "Delegators" (18/25), "End-users" (16/25), "Application developers" (18/25), "Governance participants" (20/25). Mix of sentence case and inconsistent style. |
| 3. Headings | 3.2 | No banned/weak standalone terms | PASS | None of the banned/avoid terms used. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Who does what" lacks domain anchor. "End-users" lacks Livepeer anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name role concepts. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Actors and Participants" — 3 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Who does what" reads as casual/informal, not editorial. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Concept-style governing-noun headings. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible. |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | Same as 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Scope comment defines a single job clearly: "every actor and stakeholder, named, with incentive and where to learn more." |
| 4. Structure | 4.2 | Purpose statement test | PASS | Scaffold articulates the test. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Page is empty scaffold; cannot evaluate handoff. |
| 4. Structure | 4.4 | No dead ends | FAIL | No content, no Related Pages. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Comment states "Not how-to. Just who and why." |
| 4. Structure | 4.7 | Info type per section correct | N/A | No content to classify. |
| 4. Structure | 4.8 | No content duplication | FAIL | Duplicates `composables/actors.mdx` (already populated with the same role list) and overlaps with `network/actors.mdx`. Three pages cover the same ground. |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Comments reference cross-tab links but no live links in content. |
| 4. Structure | 4.11 | Discord test | FAIL | Empty page; cannot answer any question. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~2KB total, almost all scaffold comments. Below 5KB minimum. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | The entire page is JSX scaffold comments (lines 31, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69). Should be in `_workspace/drafts/`. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No content, no trade-offs. |
| 4. Structure | 4.16 | Content pass context completable | PASS | Context block fillable from scaffold. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | Comments mention links to multiple tabs but none implemented. |
| 5. Layout | 5.1 | Correct template | FAIL | Empty scaffold; no template applied. |
| 5. Layout | 5.2 | Required sections | FAIL | Missing concept page Overview/Intro section. |
| 5. Layout | 5.3 | Only approved components | PASS | Imports are approved (QuadGrid, DynamicTableV2, LinkArrow, CustomDivider). None used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TBD/Coming Soon. |
| 5. Layout | 5.5 | Info type -> component mapping | N/A | No components used. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders (just headings + comments). |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | Canonical. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | Imports unused but well-formed. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | None applied. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None used. |
| 5. Layout | 5.13 | Section ordering | FAIL | Empty scaffold. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No views. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | Missing. |
| 5. Layout | 5.17 | Related Pages format | N/A | Missing. |
| 5. Layout | 5.18-5.25 | Component specifics | N/A | No components rendered. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Imported but not used. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | FAIL | No comment headers; one block of imports without grouping. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims to flag. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No content. |
| 5. Layout | 5.32 | Reference tables at end | N/A | None. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Entire page is scaffolded draft prose hidden in JSX comments. Belongs in `_workspace/drafts/`. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1-6.12 | All veracity checks | N/A | No claims to evaluate. veracityStatus missing (also flagged 1.8). |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at docs.json:2122. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Empty page breaks journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None implemented. |
| 7. Navigation | 7.7 | File in correct lane | PASS | In v2/about/concepts/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `actors-and-participants.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | ~2KB and no real content. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources. |
| 8. Links | 8.1 | Internal links resolve | N/A | No links. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | Imports valid (unused). |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD | FAIL | Entire body is `{/* */}` scaffold comments (treat as TODO equivalents per check 5.33). |
| 9. Process | 9.1-9.6 | Process | FAIL | No sign-off, registry entries, or evidence of phase ordering. |
| 10. Completeness | 10.1 | Question coverage | FAIL | "Who runs Livepeer?" not answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Empty page. |
| 10. Completeness | 10.3 | Persona paths | FAIL | No content. |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Comment is explicit. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Page is a stub. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | No content. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 9 | 1 | 9/10 (1 N/A) |
| 2. Voice | 21 | 4 | 3 | 4/7 (14 N/A — empty body) |
| 3. Headings | 10 | 5 | 5 | 5/10 |
| 4. Structure | 16 | 4 | 11 | 4/15 (1 N/A) |
| 5. Layout | 25 | 5 | 9 | 5/14 (11 N/A) |
| 6. Veracity | 8 | 0 | 0 | 0/0 (8 N/A) |
| 7. Navigation | 8 | 4 | 3 | 4/7 (1 N/A) |
| 8. Links | 6 | 2 | 1 | 2/3 (3 N/A) |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 1 | 5 | 1/6 |

**Overall**: 34/87 applicable checks passed (~39%)
**Verdict**: REWRITE REQUIRED (page is empty scaffold)
**Critical issues**:
1. Entire page body is JSX scaffold comments — zero published prose. Belongs in `_workspace/drafts/`, not in published nav
2. Page is in docs.json but is effectively a stub (~2KB, no rendered content under any heading)
3. Topic is already covered in `composables/actors.mdx` (full content) and `network/actors.mdx` — three pages competing for the same job
4. Missing veracityStatus field; deprecated reliance on `lastVerified` alone
