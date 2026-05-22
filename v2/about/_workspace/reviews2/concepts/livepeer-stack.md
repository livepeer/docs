# Review: livepeer-stack.mdx

**Page**: `v2/about/concepts/livepeer-stack.mdx`
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
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "The architecture of Livepeer in layers, from on-chain protocol to applications." 80 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 fields present. |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Specific: livepeer, stack, architecture, layers, protocol, network. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1-2.22 | All voice | N/A | No body prose; page is scaffold comments only. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with H2 "The stack at a glance" then immediately a JSX comment placeholder. No prose. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Zero paragraphs. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-led. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | Scaffold comment line 47 mentions "transcoder" as a current role: "go-livepeer binary running as orchestrator, transcoder, gateway." Transcoder is a deprecated synonym for the worker role per the universal-terms decision. The comment will leak into the published draft. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "The stack at a glance" (16/25 — fluffy), "Layer by layer" (12/25 — colloquial), "Protocol contracts" (20/25 — concrete), "Network nodes" (18/25), "Off-chain coordination" (20/25), "AI runtime" (20/25), "Applications and integrations" (18/25), "How the layers interact" (16/25 — process-y). |
| 3. Headings | 3.2 | No banned/weak standalone terms | PASS | None banned (avoid-tier "Background"/"Overview"/"Notes" not used). |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "The stack at a glance", "Layer by layer", "How the layers interact" do not anchor to Livepeer. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concept-named. |
| 3. Headings | 3.6 | Title well-formed | PASS | "The Livepeer Stack" — 3 words. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Layer by layer" is informal; "How the layers interact" is process-y. |
| 3. Headings | 3.8 | Per-pageType naming style | PARTIAL | Some H3s strong (Protocol contracts, AI runtime), some weak. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible. |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | Same as 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Scope: layered architecture as a single mental model. Clear single job. |
| 4. Structure | 4.2 | Purpose statement test | PASS | Articulable. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | No content; cannot evaluate. |
| 4. Structure | 4.4 | No dead ends | FAIL | No content. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Scaffold says "Each layer gets a short description and a link to its deep-dive home." |
| 4. Structure | 4.7 | Info type per section correct | N/A | No content. |
| 4. Structure | 4.8 | No content duplication | FAIL | Scoped to overlap with `protocol/architecture.mdx`, `network/architecture.mdx`, `concepts0/livepeer-architecture.mdx`, `concepts0/architecture-stack.mdx`, and `composables/overview.mdx` (which already uses the "five-layer stack" framing). At least 3 pages compete for the architecture/stack overview job. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Comments mention links but none implemented. |
| 4. Structure | 4.11 | Discord test | FAIL | Empty. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~1.8KB, mostly scaffold. Below 5KB. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | Scaffold comments throughout. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context completable | PARTIAL | Scaffold context fillable. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | None. |
| 5. Layout | 5.1 | Correct template | FAIL | Empty scaffold. |
| 5. Layout | 5.2 | Required sections | FAIL | No Overview/Intro section. |
| 5. Layout | 5.3 | Only approved components | PASS | Imports approved (CustomDivider, Image, BorderedBox), none used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type -> component mapping | N/A | No components. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | Canonical. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | Valid (unused). |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not applied. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None used. |
| 5. Layout | 5.13 | Section ordering | FAIL | Empty scaffold. |
| 5. Layout | 5.14-5.32 | Component specifics | N/A | None. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Scaffold belongs in `_workspace/drafts/`. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1-6.12 | Veracity | N/A | No claims. veracityStatus missing. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at docs.json:2121. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Empty page. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None. |
| 7. Navigation | 7.7 | File in correct lane | PASS | In v2/about/concepts/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `livepeer-stack.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | ~1.8KB and zero rendered content. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources. |
| 8. Links | 8.1 | Internal links resolve | N/A | No links. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | Valid. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD | FAIL | Body is scaffold comments. |
| 9. Process | 9.1-9.6 | Process | FAIL | No sign-off. |
| 10. Completeness | 10.1 | Question coverage | FAIL | "What is the Livepeer architecture?" not answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Empty. |
| 10. Completeness | 10.3 | Persona paths | FAIL | None. |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Scaffold notes link-out targets. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Empty. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | None. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 9 | 1 | 9/10 (1 N/A) |
| 2. Voice | 21 | 2 | 3 | 2/5 (16 N/A) |
| 3. Headings | 10 | 5 | 5 | 5/10 |
| 4. Structure | 16 | 4 | 10 | 4/14 (2 N/A) |
| 5. Layout | 25 | 5 | 7 | 5/12 (13 N/A) |
| 6. Veracity | 8 | 0 | 0 | 0/0 (8 N/A) |
| 7. Navigation | 8 | 4 | 3 | 4/7 (1 N/A) |
| 8. Links | 6 | 2 | 1 | 2/3 (3 N/A) |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 1 | 5 | 1/6 |

**Overall**: 32/82 applicable checks passed (~39%)
**Verdict**: REWRITE REQUIRED (page is empty scaffold)
**Critical issues**:
1. Entire body is scaffold JSX comments — zero published prose; in nav as a stub
2. Scaffold uses deprecated term "transcoder" as a current role label
3. Topic duplicates `protocol/architecture.mdx`, `network/architecture.mdx`, `concepts0/livepeer-architecture.mdx`, and `composables/overview.mdx` — at least 4 pages cover this same architecture/stack ground
4. Missing veracityStatus
5. Headings "Layer by layer" and "How the layers interact" lack domain anchor and editorial polish
