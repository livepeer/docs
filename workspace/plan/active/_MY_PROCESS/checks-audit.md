# checks.mdx Audit — Gaps Found From Session Research

> What checks.mdx DOES cover well, and what it's MISSING based on everything we discovered this session.

---

## WHAT checks.mdx ALREADY COVERS WELL

The 9 categories are solid and comprehensive for their scope:
1. Frontmatter & Taxonomy (13 checks) — thorough
2. Voice & Copy (11 checks) — thorough, includes per-audience rules
3. Section Naming & Headings (7 checks + rubric) — thorough
4. Page Structure & Content Architecture (10 checks) — good
5. Layout, Components & Template (10 checks + matrix) — good
6. Veracity & Factual Accuracy (9 checks + standards table) — thorough
7. Navigation & IA (9 checks) — good
8. Links & Rendering (6 checks) — solid
9. Process & Governance (6 checks) — good

---

## WHAT'S MISSING — NEW CHECKS NEEDED

### Category 2 addendum: VOICE & COPY (from session findings)

| # | New check | Pass criteria | Source |
|---|---|---|---|
| 2.12 | **No em-dashes** | Zero em-dashes (--) in MDX content. Use comma, semicolon, colon, or rewrite. | Hook enforcement already exists in repo — add to checks spec |
| 2.13 | **Entity-led voice throughout** | Every paragraph starts with a system fact or reader outcome, never with "we", "our", "you will learn" | Discovered in exemplar analysis — gold pages all do this |
| 2.14 | **No "can help", "allows you to", "enables you to" hedging** | Value claims asserted directly, not through hedging verbs | quality-gate.sh check 9 catches this but not in checks.mdx |
| 2.15 | **Description field not self-referential** | frontmatter `description` does not start with "This page/section/document describes/explains/outlines/covers/walks" | quality-gate.sh check 5 catches this but not in checks.mdx |

### Category 4 addendum: PAGE STRUCTURE (from session findings)

| # | New check | Pass criteria | Source |
|---|---|---|---|
| 4.11 | **Page answers its question COMPLETELY** | The "Discord test": can you link this ONE page to someone on Discord and know they get a complete answer without needing another page? If no, the page is incomplete. | Core finding of this session — the defining quality bar |
| 4.12 | **Page size is appropriate for scope** | Concept/guide pages: minimum 5KB of substantive content. Pages under 2KB are stubs that should not be in nav. Gold standard: 10-60KB. | Discovered from size analysis — good pages are 10-60KB, stubs are under 2KB |
| 4.13 | **No TODO/REVIEW comments without tracking** | Zero `{/* TODO` comments in published content. Zero `{/* REVIEW` comments without a linked tracking issue. | quality-gate.sh checks 3+4 catch this but not in checks.mdx |
| 4.14 | **Flat layout where appropriate** | Actor/role pages use tabs/accordions for depth, not sub-folders. Rich flat pages preserve reading flow. Sub-pages only for genuinely separate journeys. | User directive: "actors should be flat" — gateways/setup is the gold standard pattern |
| 4.15 | **Trade-offs present** | Every concept/economics/architecture page names at least one trade-off, limitation, or failure condition. No page presents only the positive case. | From TAB-COMPLETION-FRAMEWORK.md universal gate U6 |

### Category 5 addendum: LAYOUT & COMPONENTS (from session templates)

| # | New check | Pass criteria | Source |
|---|---|---|---|
| 5.11 | **Page follows gold-standard template** | Page structure matches the template in `snippets/templates/pages/gold-standard-templates/{pageType}-template.mdx` | New templates exist — not referenced in checks.mdx |
| 5.12 | **Section blocks from gold-standard library** | Sections composed from blocks in `snippets/templates/pages/gold-standard/` (introduction, prerequisites, step-sequence, decision-matrix, concept-explanation, config-reference, comparison-table, verification-checklist, accordion-group, multi-view-layout, related-pages-footer, next-step-cta) | New section patterns exist — not referenced in checks.mdx |
| 5.13 | **Section ordering matches pageType** | Section order follows `snippets/templates/section-patterns.md` ordering rules per pageType | Section ordering spec exists — not referenced in checks.mdx |
| 5.14 | **Multi-view layout rules respected** | 1 dimension = Tabs. 2 dimensions = Views -> Tabs. 3 dimensions = Views -> Tabs -> Tabs-in-steps. 4+ dimensions = split into separate pages. Steps never inside Accordions. Tabs never inside Steps. | From page-classification.md instruction section |
| 5.15 | **Data imports used, not hardcoded** | Contract addresses, CLI flags, port numbers, protocol parameters imported from `snippets/data/` — never hardcoded in MDX prose | From instruction-template and gold-standard pages |
| 5.16 | **Related Pages footer or Next Step CTA present** | Every non-navigation page ends with either CardGroup (Related Pages) or single Card (Next Step CTA). Never both. 2-3 cards max. One-sentence descriptions. | From section-patterns.md blocks 12 + 13 |

### Category 7 addendum: NAVIGATION & IA (from session findings)

| # | New check | Pass criteria | Source |
|---|---|---|---|
| 7.10 | **No stubs in published nav** | Every page in docs.json nav has >2KB of substantive content. Pages under 2KB are either expanded or removed from nav. | From TAB-COMPLETION-FRAMEWORK.md universal gate U1 |
| 7.11 | **Guides section serves secondary personas** | For tabs with guides/ section: content covers edge cases, secondary journeys, evaluation frameworks, and depth that doesn't fit the main content sections | User directive: "guides gives EVERYTHING ELSE" |

### NEW Category 10: CONTENT COMPLETENESS (entirely new)

This category is what the existing checks.mdx fundamentally lacks. The existing 9 categories check QUALITY of what exists. This category checks whether what SHOULD exist actually does.

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 10.1 | **Every question in the tab's question list has a page** | Cross-reference against `_workspace/canonical/review/03-jobs.md` — every job maps to at least one page. No unanswered questions. | From first-principles sitemap — the foundational requirement |
| 10.2 | **Zero-to-hero journey complete** | A reader with zero prior knowledge can complete the full journey from "what is this?" to operational/participating without leaving the tab (except deliberate handoffs) | From FIRST-PRINCIPLES-SITEMAP success criteria |
| 10.3 | **All primary persona paths unblocked** | Cross-reference against `_workspace/canonical/review/07-path-validation.md` — no persona hits a dead end or missing page | From path validation files we just built |
| 10.4 | **Scope boundaries explicit** | What this tab does NOT cover is stated and replaced with links to the tab that does cover it. Out-of-scope content is not just absent — it's explicitly directed elsewhere. | From TAB-COMPLETION-FRAMEWORK.md universal gate U7 |
| 10.5 | **Self-containment holds** | Tab can be read without visiting another tab (except deliberate cross-tab handoffs). If a gateway operator needs to understand orchestrator selection, that content exists in Gateways — not just linked to Orchestrators. | From site-map ownership principle |

---

## FRAMEWORKS & TOOLS NOT REFERENCED IN checks.mdx

These exist in the repo but are not mentioned in the checks spec:

| Resource | Location | Should be referenced in |
|---|---|---|
| `snippets/templates/page-classification.md` | Decision tree for pageTypes with component palettes | Category 5 (Layout) |
| `snippets/templates/section-patterns.md` | 13 section archetypes with ordering per pageType | Category 5 (Layout) |
| `snippets/templates/pages/gold-standard-templates/` | 7 templates (one per pageType) | Category 5 (Layout) |
| `snippets/templates/pages/gold-standard/` | 13 composable section blocks | Category 5 (Layout) |
| `_MY_PROCESS/tools/page-quality-gate.sh` | 10-check PASS/FAIL enforcement | Category 2, 4, 8 (quick pre-check) |
| `_MY_PROCESS/EXEMPLARS/` | 4 annotated gold-standard pages | Category 2, 4 (quality reference) |
| `v2/{tab}/_workspace/canonical/review/01-07` | Per-tab audience/persona/journey/structure | Category 4, 10 (content design source) |
| `FIRST-PRINCIPLES-SITEMAP.md` | Zero-to-hero journeys per audience | Category 10 (completeness source) |
| `TAB-COMPLETION-FRAMEWORK.md` | Universal + tab-specific gates | Category 10 (ship-readiness) |

---

## PROCESS CHECKS THAT NEED UPDATING (Category 9)

| # | Issue | Recommendation |
|---|---|---|
| 9.3 | Gate prerequisites list is from the old pipeline (IA Approved -> Terminology Locked -> ...) | Update to reflect actual review files (01-07) as the gate prerequisites |
| 9.4 | Phase ordering references old phase numbers | Update to reference RUNBOOKs in `_MY_PROCESS/` |
| 9.6 | Feedback routing references `decisions/feedback-routing-map.md` | Also reference `_MY_PROCESS/FEEDBACK/RUNBOOK.md` |

---

## SUMMARY: What to add to checks.mdx

| Category | New checks | Priority |
|---|---|---|
| 2 (Voice) | 4 new checks (em-dash, entity-led, hedging verbs, self-referential description) | HIGH — these are the most common failures |
| 4 (Structure) | 5 new checks (Discord test, minimum size, TODO/REVIEW, flat layout, trade-offs) | HIGH — the Discord test is the defining quality bar |
| 5 (Layout) | 6 new checks (gold-standard templates, section blocks, ordering, multi-view, data imports, related pages) | MEDIUM — templates exist but aren't enforced |
| 7 (Navigation) | 2 new checks (no stubs in nav, guides scope) | HIGH — stubs actively harm readers |
| 10 (Completeness) | 5 new checks (question coverage, zero-to-hero, persona paths, scope boundaries, self-containment) | CRITICAL — this is what the pipeline was missing |
| 9 (Process) | 3 updates to existing checks | LOW — process alignment |
| **Total** | **25 new checks + 3 updates** | |

This brings the total from 81 checks across 9 categories to **106 checks across 10 categories**.

---

## ADDITIONAL GAPS FOUND (from CONTENT-WRITING/ and research notes)

### Files in CONTENT-WRITING/ that checks.mdx should reference but doesn't

| File | What it contains | Should be referenced in |
|---|---|---|
| `Prompts/section-naming.md` | **LOCKED** section naming rubric: label classes (governing-concept vs literal vs generic), naming prompt, per-pageType naming style, per-purpose title job, per-audience terminology register. 687 lines of source research behind it. | Category 3 (Headings) — checks.mdx references "Frameworks.mdx section 4.1" but NOT this standalone locked rubric |
| `Prompts/.../naming-research.md` | Full 687-line source for naming rubric: domain-anchor rule, conditional-precision rule, anti-patterns with examples, per-pageType naming guidance | Category 3 — deep reference for edge cases |
| `Prompts/.../page-structure-rules.md` | Structural contracts per page type: required sections, ordering, allowed components. Points to `snippets/templates/pages/` | Category 5 (Layout) — this is the reference document that connects templates to checks |
| `Prompts/.../style-language.md` | Machine-readable GB English style profile. Points to `tools/config/style-language-profile-en-gb.json` and `tools/config/cspell.json` | Category 2 (Voice) — automated spelling/style enforcement |
| `Prompts/.../deprecated-terms.md` | Deprecated role terms (Broadcaster->Gateway, Pool worker->Pool node, Combined->Dual), conflicting enum definitions, high-staleness terms | Category 2 (Voice) check 2.11 + new terminology checks |
| `Prompts/.../docs-philosophy-authoring.md` | Docs philosophy + authoring standards. Points to `v2/internal/docs-philosophy.mdx` and `v2/resources/documentation-guide/authoring-standard.mdx` | Category 4 (Structure) — grounding intent for content decisions |
| `Prompts/.../copy-governance.md` | Human-readable aggregation of banned words + phrases + voice rules with rationale | Category 2 (Voice) — the "why" behind each ban |
| `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` | Full content pass prompt with context block, pre-flight checks, 7-phase review structure | Category 4 (Structure) + Category 2 (Voice) — this IS the content review methodology |
| `Prompts/docs-review-prompt-tiers.md` | Review methodology: Tier 1 (batch), Tier 2 (section), Tier 3 (page) — already partially referenced in checks.mdx review execution guide | Category 9 (Process) — full reference |
| `Frameworks/information-type.md` | 9 information types that determine structure, layout, style per section. Derived from purpose. | Category 4 check 4.7 references this concept but NOT the file |
| `Frameworks/industry.md` | `industry` field definition: anchors terminology to correct industry conventions. Max 2 entries. | Category 1 check 1.9 exists but doesn't reference this framework |
| `Frameworks/complexity.md` | `complexity` field: calibration for how much agent assumes reader knows. Not page structure, not outcome. | Category 1 check 1.6 exists but doesn't reference this framework |
| `decisions/terminology-tracking.md` | Cross-phase terminology tracking: splits, new terms, disambiguation candidates | Category 2 check 2.11 references this — good |
| `decisions/cross-tab-journeys.md` | Graduation paths, cross-tab shared terminology, AI discoverability | Category 7 check 7.6 covers this concept but doesn't reference the file |
| `.../reference-sources-quality-scored/universal-terms.md` | Canonical definitions for terms appearing across all 9 tabs (Orchestrator, Gateway, Delegator, LPT, Transcoding, Staking) with sources | Category 2 (Voice) — terminology consistency source |
| `.../reference-sources-quality-scored/accuracy-sources.md` | Source validation framework: T1/T2/T3 tiers, confidence levels, when to cross-check | Category 6 (Veracity) — complements veracity-library.md |
| `.../reference-sources-quality-scored/in-repo-glossaries.md` | Audit of existing glossaries with weak definitions identified | Category 6 (Veracity) — glossary quality source |

### Additional checks needed from these files

| # | New check | Pass criteria | Source file |
|---|---|---|---|
| 2.16 | **Deprecated terms absent** | Zero deprecated role terms: no "Broadcaster" (use Gateway), no "Pool worker" (use Pool node), no "Combined mode" (use Dual mode), no "Hybrid" (use Dual mode), no "Transcoder" as synonym for Orchestrator | deprecated-terms.md |
| 2.17 | **Universal terms used consistently** | Orchestrator, Gateway, Delegator, LPT, Transcoding, Staking defined consistently across all pages per universal-terms.md definitions | universal-terms.md |
| 2.18 | **Spell check passes** | cspell check against `tools/config/cspell.json` dictionary. Zero unknown words (add to dictionary if legitimate). | style-language.md |
| 3.8 | **Per-pageType naming style applied** | reference pages use literal/findability naming. concept pages use governing-concept naming. instruction pages use task-oriented naming. navigation pages use map language. | section-naming.md Step 16 enrichment |
| 3.9 | **Per-audience terminology register in headings** | developer headings use specialised technical terms. delegator headings use finance/governance register. community headings use accessible/narrative language. | section-naming.md per-audience guidance |
| 4.16 | **Content pass context block completable** | All fields in the content-pass.md context block (TAB, SECTION, PAGE_PATH, MODE, PAGE_TYPE, AUDIENCE, PERSONA, PURPOSE, LIFECYCLE_STAGE, COMPLEXITY, PREV_PAGE, NEXT_PAGE, PHASE_1_OUTPUT, TAB_MAP, PRIMARY_SOURCES) can be filled for this page. If any field cannot be filled, the page's position in the pipeline is undefined. | content-pass.md |
| 6.10 | **Source authority tiers respected** | Factual claims cite T1 (primary) sources. Technical claims cite tagged releases. Procedural claims verified against live system. No claims sourced exclusively from T3 (lead/search) without T1/T2 cross-check. | accuracy-sources.md |
| 6.11 | **In-repo glossary definitions match universal terms** | Tab-level glossary definitions match universal-terms.md canonical definitions. No conflicting definitions across tabs. | in-repo-glossaries.md + universal-terms.md |

### Updated totals

Previous total: 106 checks across 10 categories.
With these additions: **114 checks across 10 categories** + 17 additional framework references.

---

## COMPLETE LIST OF FILES checks.mdx SHOULD REFERENCE

### Currently referenced (keep)
- Frameworks.mdx (voice, taxonomy, terminology)
- framework-index-canonical.md
- page-taxonomy-framework.mdx
- frontmatter-taxonomy-update.md
- frontmatter-taxonomy.js
- v2-folder-governance.mdx
- voice-rules.md
- banned-words.txt / banned-phrases.txt
- terminology-tracking.md
- veracity.md / veracity-library.md
- component-layout-decisions.mdx / component-layout-profile.json
- component-framework-canonical.mdx
- style-guide.mdx
- design-canonical.mdx
- content-pipeline-canonical.md / plan-canonical.md
- prompt-input-spec.md / docs-review-prompt-tiers.md
- decision-registry.md / tab-status.md / feedback-routing-map.md
- quality-gates.mdx / snippets-assets-policy.mdx
- workspace-lifecycle-policy.mdx
- PROJECT-MANAGEMENT-CANONICAL.md

### Should ADD (new references)
- `snippets/templates/page-classification.md` — decision tree for pageTypes
- `snippets/templates/section-patterns.md` — 13 section archetypes
- `snippets/templates/pages/gold-standard-templates/` — 7 templates
- `snippets/templates/pages/gold-standard/` — 13 section blocks
- `Prompts/section-naming.md` — locked naming rubric
- `Prompts/.../naming-research.md` — full naming methodology
- `Prompts/.../page-structure-rules.md` — structural contracts
- `Prompts/.../style-language.md` — machine-readable style profile
- `tools/config/style-language-profile-en-gb.json` — automated style enforcement
- `tools/config/cspell.json` — spell check dictionary
- `Prompts/.../deprecated-terms.md` — deprecated/conflicted terms
- `Prompts/.../docs-philosophy-authoring.md` — philosophy + authoring standards
- `Prompts/.../copy-governance.md` — rationale for bans
- `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` — content review methodology
- `.../universal-terms.md` — canonical cross-tab definitions
- `.../accuracy-sources.md` — source validation framework
- `.../in-repo-glossaries.md` — glossary quality audit
- `_MY_PROCESS/tools/page-quality-gate.sh` — quick pre-check
- `_MY_PROCESS/EXEMPLARS/` — quality reference
- `v2/{tab}/_workspace/canonical/review/01-07` — per-tab content design
- `FIRST-PRINCIPLES-SITEMAP.md` — zero-to-hero journeys
- `TAB-COMPLETION-FRAMEWORK.md` — ship-readiness gates
