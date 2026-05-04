# Review: design-philosophy.mdx (protocol2)

**Page**: `v2/about/protocol2/design-philosophy.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: IDENTICAL to `v2/about/protocol/x-design-philosophy.mdx` (archived). Already a stub: declares itself a placeholder ("This page is being developed").

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has `status: draft` non-canonical field. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `explain`. |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `community`. |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` (page is draft). |
| 1. Frontmatter | 1.9 | industry | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Why the Livepeer protocol uses staking, inflation, probabilistic payments, and a strict boundary between protocol and execution network." Subject-first, ~155 chars. |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 fields with About-specific image. |
| 1. Frontmatter | 1.13 | keywords quality | PARTIAL | Reasonable: `probabilistic payments`, `inflation`, `staking`. Some generic: `livepeer`, `protocol`. |
| 2. Voice | 2.1 | UK English | PASS | No US spellings. |
| 2. Voice | 2.2 | Zero banned words | PASS | None. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | Opens with "This page is being developed." – banned `This page [verb]` self-reference. |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with placeholder disclosure, not subject. |
| 2. Voice | 2.6 | Paragraph discipline | N/A | Insufficient prose to assess. |
| 2. Voice | 2.7 | Audience register | N/A | Stub content. |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | None. |
| 2. Voice | 2.9 | Passive value statements | N/A | No value claims. |
| 2. Voice | 2.10 | No hedging openers | FAIL | Opens with caveat about page being incomplete. |
| 2. Voice | 2.11 | Terminology locked | PASS | Terms used correctly. |
| 2. Voice | 2.12 | No em-dashes | PASS | None. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opens with "This page". |
| 2. Voice | 2.14 | No hedging verbs | PASS | None. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Description fine. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | None. |
| 2. Voice | 2.17 | Universal terms consistent | N/A | Limited prose. |
| 2. Voice | 2.18 | Spell check | PASS | None obvious. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | N/A | Limited prose. |
| 2. Voice | 2.20 | Per-tab terminology | N/A | Limited prose. |
| 2. Voice | 2.21 | First use defined | N/A | No specialised terms used substantively. |
| 2. Voice | 2.22 | Terminology lock | N/A | None. |
| 3. Headings | 3.1 | Heading score | FAIL | "What this page will cover" (12, banned-tier "this page"), "Best pages to read now" (14, vague). |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "What this page will cover" implies "Overview"; "Best pages" is weak. |
| 3. Headings | 3.3 | No literal contrast | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor | FAIL | Headings lack domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | FAIL | "Best pages to read now" names example pages indirectly. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Protocol Design Philosophy" – domain-anchored, concise. |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "What this page will cover" is bureaucratic. |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | Concept page should use governing-concept naming. |
| 3. Headings | 3.9 | Per-audience register | PARTIAL | Community register is conversational but headings are weak. |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | None. |
| 4. Structure | 4.1 | One purpose, one job | PARTIAL | Stub – cannot evaluate fully. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | "This page lets the [community] explain X" not satisfied – no content. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | N/A | Stub. |
| 4. Structure | 4.4 | No dead ends | PASS | CardGroup links to four protocol pages. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Whole page is meta. |
| 4. Structure | 4.7 | Info type per section | FAIL | Stub. |
| 4. Structure | 4.8 | No content duplication | PASS | Stub – no content. |
| 4. Structure | 4.9 | Section orientation | N/A | Not a section orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | No cross-tab links. |
| 4. Structure | 4.11 | Discord test | FAIL | Linking page returns "this is being developed". |
| 4. Structure | 4.12 | Page size | FAIL | 57 lines, ~1.6KB – under 2KB stub threshold. |
| 4. Structure | 4.13 | No TODO/REVIEW | PASS | No TODO syntax. |
| 4. Structure | 4.14 | Flat layout | PASS | Single page. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context | FAIL | Cannot fill (no content). |
| 4. Structure | 4.17 | Multi-audience handoff | N/A | Stub. |
| 5. Layout | 5.1 | Correct template | FAIL | No template; ad-hoc stub layout. |
| 5. Layout | 5.2 | Required sections | FAIL | Concept page requires Overview – present but stub. |
| 5. Layout | 5.3 | Approved components | PASS | Card, CardGroup, CustomDivider. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type → component | PARTIAL | CardGroup acceptable. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | Frontmatter uses canonical values (audience: community, purpose: explain). |
| 5. Layout | 5.8 | CSS custom properties | PASS | None. |
| 5. Layout | 5.9 | Generated banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming | PASS | PascalCase. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Stub. |
| 5. Layout | 5.12 | Section blocks | FAIL | None. |
| 5. Layout | 5.13 | Section ordering | FAIL | Stub. |
| 5. Layout | 5.14 | Multi-view rules | N/A | None. |
| 5. Layout | 5.15 | Data imports | N/A | None. |
| 5. Layout | 5.16 | Related Pages or CTA | PARTIAL | CardGroup labelled "Best pages to read now" functions as Related Pages. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses CardGroup not Columns; Card titles missing CustomCardTitle. |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | None. |
| 5. Layout | 5.21 | StyledSteps | N/A | None. |
| 5. Layout | 5.22 | Navigation cards | FAIL | Cards lack CustomCardTitle. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | None. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | None. |
| 5. Layout | 5.25 | Max 1 major layout | PASS | Only CardGroup. |
| 5. Layout | 5.26 | CustomDivider | PARTIAL | One divider. |
| 5. Layout | 5.27 | Mermaid colours | N/A | None. |
| 5. Layout | 5.28 | Import order | PASS | Single component import. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims to flag. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decisions. |
| 5. Layout | 5.32 | Reference tables at end | N/A | None. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | This is a draft in the published tree. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | All | All veracity | N/A | No factual claims. |
| 7. Navigation | 7.1 | Page in docs.json | UNKNOWN | Alternative tree. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Stub belongs in `_workspace/drafts/`. |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | 1.6KB stub. |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to /v2/about/protocol/* resolve in protocol/. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | Says "This page is being developed". |
| 9. Process | All | All process | FAIL | Not assessed; clearly draft. |
| 10. Completeness | All | All completeness | FAIL | Stub. |

## Summary

**Overall**: ~14/applicable checks passed
**Verdict**: REWRITE REQUIRED (or move to `_workspace/drafts/`)
**Critical issues**:
1. **Stub page in published tree**: 57 lines explicitly labelled "This page is being developed".
2. Identical to archived `protocol/x-design-philosophy.mdx`.
3. Self-referential opener and weak headings ("What this page will cover", "Best pages to read now").
4. Missing `veracityStatus`; uses non-canonical `status: draft`.
