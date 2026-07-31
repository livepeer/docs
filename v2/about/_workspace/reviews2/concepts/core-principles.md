# Review: core-principles.mdx

**Page**: `v2/about/concepts/core-principles.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | NO FRONTMATTER AT ALL. File starts with two blank lines then a plain markdown H1. Missing all 10 required fields. |
| 1. Frontmatter | 1.2-1.14 | All other frontmatter checks | FAIL | All fail by absence. No pageType, audience, purpose, complexity, lifecycleStage, keywords, OG image, description, sidebarTitle, title (in YAML form). |
| 2. Voice | 2.1 | UK English | PASS | No US spellings detected. |
| 2. Voice | 2.2 | Zero banned words | PASS | None. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with two blank lines then a heading. The first textual line is "Core Concepts of Livepeer" — used as a paragraph "title" not an H2 (no `#` markers parsed). The format is broken: line 3 is plain text, line 10 is plain text. The page is unstructured plain text dumped into MDX. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Lines 12-13 are 80+ word run-on paragraphs covering both on-chain and off-chain in single sentences. |
| 2. Voice | 2.7 | Audience register | FAIL | Cannot evaluate — audience field missing. Content is technical-mid-level, not community register. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | No audience defined. |
| 2. Voice | 2.9 | No passive value statements | PASS | None present. |
| 2. Voice | 2.10 | No hedging openers | PASS | No hedging — but opening is broken (see 2.5). |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "broadcasters" (line 12) — deprecated term. Should be "Gateway". |
| 2. Voice | 2.12 | No em-dashes | FAIL | Line 11: "modular video/AI network anchored by a minimal on‑chain protocol" uses non-breaking hyphens (U+2011); line 12: "off‑chain protocol", "off‑chain network", "off‑chain"; line 8: "trustless verification, composable governance" — uses non-breaking hyphens (visible in source). These are not em-dashes but the unicode characters violate plain-ASCII expectations. No actual em-dash found. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Line 11: "Livepeer is designed as a modular video/AI network…" — "is designed" is passive voice for an entity-subject claim. |
| 2. Voice | 2.14 | No hedging verbs | PASS | No "can help", "may provide" etc. |
| 2. Voice | 2.15 | Description not self-referential | N/A | No description field. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "broadcasters" line 12 is deprecated. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Same deprecated term issue. |
| 2. Voice | 2.18 | Spell check | PASS | No typos. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "broadcasters", "Livepeer Studio" used without canonical context. |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | "transcoding and AI processing" mixes Network-tab register; "smart contracts hold ETH deposits" is Protocol-tab register. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "Livepeer Studio" introduced without definition or link. "LPT staking tokens", "probabilistic payment tickets", "slashing", "rewards", "ETH deposits" not defined or linked. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No lock. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | NO actual H2/H3 headings. Lines 3 and 10 are plain text labels mistaken for headings. |
| 3. Headings | 3.2-3.10 | All heading checks | FAIL | No heading structure. |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Cannot determine purpose without frontmatter. Content tries to do five jobs at once: define core concepts, design goals, architecture layers, on-chain vs off-chain split, list services. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot fill the test sentence. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Page is not in docs.json nav (verified — concepts nav lists about-livepeer, livepeer-stack, actors-and-participants, governance-and-economics; this file `core-principles` is not present). Orphaned. |
| 4. Structure | 4.4 | No dead ends | FAIL | No links, no Related Pages. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Not stated. |
| 4. Structure | 4.7 | Info type per section correct | FAIL | Mixes bullet-list factual claims with prose narrative without consistent typing. |
| 4. Structure | 4.8 | No content duplication | FAIL | Bullet 4 ("Architecture layers: protocol, network, platforms, applications") duplicates `livepeer-stack.mdx`. The on-chain/off-chain prose duplicates `composables/overview.mdx` and `concepts0/livepeer-protocol-and-network.mdx`. |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero links. |
| 4. Structure | 4.11 | Discord test | FAIL | Page is broken plain-text dump; would not pass Discord-link test. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | 13 lines, ~1.5KB. Below 5KB minimum. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO comments. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | No frontmatter. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | None present. |
| 5. Layout | 5.1 | Correct template | FAIL | No template applied. Plain markdown text. |
| 5. Layout | 5.2 | Required sections | FAIL | No frontmatter, no Overview heading, no recognisable concept structure. |
| 5. Layout | 5.3 | Only approved components | PASS | No components used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type -> component mapping | FAIL | Conceptual content rendered as plain bullets and prose; should use Note/Mermaid/Cards. |
| 5. Layout | 5.6 | MDX renders clean | FAIL | Renders as a single paragraph block because lines lack proper markdown headings (no `#`). Renders, but the structure is invisible. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS (vacuously) | No frontmatter at all. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not followed. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None used. |
| 5. Layout | 5.13 | Section ordering | FAIL | No structure to order. |
| 5. Layout | 5.14-5.32 | Component specifics | N/A | No components. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | This file is research notes that belong in `_workspace/drafts/`, not as a published .mdx. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "smart contracts hold ETH deposits", "issue probabilistic payment tickets", "enforce staking, slashing and reward rules" — no citations. |
| 6. Veracity | 6.2-6.5 | Code, deprecated API, numbers, REVIEW flags | N/A or FAIL | No code; no numbers; no REVIEW flags despite unsourced claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7-6.12 | Other veracity | N/A | No definitions or numbers. |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | NOT in docs.json. Orphaned file in published filesystem. |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | File exists but no nav entry. |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Orphan. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Not in journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | In v2/about/concepts/ but unpublished/orphan. Should be in `_workspace/drafts/`. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `core-principles.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | N/A | Not in nav. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources. |
| 8. Links | 8.1 | Internal links resolve | N/A | No links. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | Renders (degraded — no headings parse). |
| 8. Links | 8.6 | No TODO/TBD | PASS | None. |
| 9. Process | 9.1-9.6 | Process | FAIL | No sign-off; not in nav; appears to be raw research dump. |
| 10. Completeness | 10.1 | Question coverage | FAIL | Not in nav, not part of journey. |
| 10. Completeness | 10.2-10.6 | Other completeness | FAIL | Orphan file. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 0 | 11 | 0/11 |
| 2. Voice | 21 | 6 | 11 | 6/17 (4 N/A) |
| 3. Headings | 10 | 0 | 10 | 0/10 |
| 4. Structure | 16 | 2 | 13 | 2/15 (1 N/A) |
| 5. Layout | 25 | 3 | 8 | 3/11 (14 N/A) |
| 6. Veracity | 8 | 0 | 2 | 0/2 (6 N/A) |
| 7. Navigation | 8 | 1 | 6 | 1/7 (1 N/A) |
| 8. Links | 6 | 2 | 0 | 2/2 (4 N/A) |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 0 | 6 | 0/6 |

**Overall**: 14/86 applicable checks passed (~16%)
**Verdict**: REWRITE REQUIRED (or DELETE — file should not exist as published .mdx)
**Critical issues**:
1. Zero frontmatter — file is plain markdown text masquerading as an MDX page
2. Not in docs.json nav — orphaned file in published filesystem
3. No actual heading structure — lines 3 and 10 are plain text without `##` markers, so MDX renders them as a paragraph
4. Uses deprecated term "broadcasters"
5. Content duplicates `livepeer-stack.mdx`, `composables/overview.mdx`, and `concepts0/livepeer-protocol-and-network.mdx`
6. File should be moved to `_workspace/drafts/` or deleted entirely
