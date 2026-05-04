# Review: governance-and-economics.mdx

**Page**: `v2/about/concepts/governance-and-economics.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | PASS | "How decisions are made and how value flows through Livepeer." 60 chars, subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 fields present. |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Specific: governance, economics, treasury, lpt, voting, rewards, fees. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | N/A | No body prose to evaluate (page is scaffold comments). |
| 2. Voice | 2.2 | Zero banned words | PASS | None in scaffold. |
| 2. Voice | 2.3-2.22 | Voice and copy | N/A | No published prose to score. SCOPE/OPENING comments are draft notes. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with H2 "How decisions are made" then immediately a JSX comment placeholder. No prose. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | No paragraphs exist. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-led. |
| 3. Headings | 3.1 | Heading score >= 20/25 | PARTIAL | "How decisions are made" (16/25 — process-style, weak), "How value flows" (16/25 — same), "The token (LPT)" (20/25 — concept anchor present), "The treasury" (18/25), "Where to go deeper" (12/25 — bureaucratic/colloquial). |
| 3. Headings | 3.2 | No banned/weak standalone terms | PASS | None of the banned set used. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "How decisions are made", "How value flows", "Where to go deeper" lack domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concept-named. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Governance and Economics" — 3 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Where to go deeper" reads as casual. |
| 3. Headings | 3.8 | Per-pageType naming style | PARTIAL | Concept-style governing-noun mostly applied. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible. |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | Same as 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Scope comment is clear: governance + economics conceptual frame. |
| 4. Structure | 4.2 | Purpose statement test | PASS | Scaffold articulates: "the reader leaves with a working model of decisions and value." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | No content; cannot evaluate handoff. |
| 4. Structure | 4.4 | No dead ends | FAIL | No content. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Scope comment notes "The Protocol section then carries the deep technical pages on Token, Treasury, Governance specifically." |
| 4. Structure | 4.7 | Info type per section correct | N/A | No content. |
| 4. Structure | 4.8 | No content duplication | N/A (scaffold) | The page is empty — but scoped to overlap deliberately with `protocol/livepeer-token.mdx`, `protocol/governance-and-treasury.mdx`. Once written, must be checked again. |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Comments mention links but none implemented. |
| 4. Structure | 4.11 | Discord test | FAIL | Empty page. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~1.5KB, almost all scaffold comments. Below 5KB minimum. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | Lines 31, 33, 37, 41, 45, 49, 53 are scaffold JSX comments. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context completable | PARTIAL | Scope comment fillable, but execution missing. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | None implemented. |
| 5. Layout | 5.1 | Correct template | FAIL | Empty scaffold. |
| 5. Layout | 5.2 | Required sections | FAIL | No Overview/Intro section exists. |
| 5. Layout | 5.3 | Only approved components | PASS | Imports approved (CustomDivider, LinkArrow, Image, BorderedBox), none used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type -> component mapping | N/A | No components. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | Canonical. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | PASS | Imports valid. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not applied. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None used. |
| 5. Layout | 5.13 | Section ordering | FAIL | Empty scaffold. |
| 5. Layout | 5.14-5.32 | Component specifics | N/A | No components. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Scaffold belongs in `_workspace/drafts/`. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1-6.12 | Veracity | N/A | No claims to evaluate. veracityStatus missing (also flagged 1.8). |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at docs.json:2123. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Empty page breaks journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None implemented. |
| 7. Navigation | 7.7 | File in correct lane | PASS | In v2/about/concepts/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `governance-and-economics.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | ~1.5KB and zero rendered content. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources. |
| 8. Links | 8.1 | Internal links resolve | N/A | No links. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | Imports valid (unused). |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD | FAIL | Body is JSX scaffold comments. |
| 9. Process | 9.1-9.6 | Process | FAIL | No sign-off, no registry entries. |
| 10. Completeness | 10.1 | Question coverage | FAIL | "How does Livepeer make decisions?" not answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Empty. |
| 10. Completeness | 10.3 | Persona paths | FAIL | None. |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Scope comment is clear. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Empty. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | None. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 9 | 1 | 9/10 (1 N/A) |
| 2. Voice | 21 | 2 | 2 | 2/4 (17 N/A — empty body) |
| 3. Headings | 10 | 4 | 4 | 4/8 (2 PARTIAL counted as fail) |
| 4. Structure | 16 | 4 | 10 | 4/14 (2 N/A) |
| 5. Layout | 25 | 5 | 7 | 5/12 (13 N/A) |
| 6. Veracity | 8 | 0 | 0 | 0/0 (8 N/A) |
| 7. Navigation | 8 | 4 | 3 | 4/7 (1 N/A) |
| 8. Links | 6 | 2 | 1 | 2/3 (3 N/A) |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 1 | 5 | 1/6 |

**Overall**: 31/82 applicable checks passed (~38%)
**Verdict**: REWRITE REQUIRED (page is empty scaffold)
**Critical issues**:
1. Entire page body is JSX scaffold comments — zero published prose
2. Page is in docs.json published nav but is effectively a stub
3. Headings "How decisions are made" / "How value flows" / "Where to go deeper" lack domain anchor and editorial polish
4. Missing veracityStatus field
5. Topic deliberately overlaps with `protocol/livepeer-token.mdx` and `protocol/governance-and-treasury.mdx` — content boundaries must be enforced once written
