# 06 — Gaps, Conflicts & Decisions

**Source agents**: All five

---

## Source Conflicts

| # | Conflict | Source A | Source B | Resolution |
|---|---|---|---|---|
| X1 | PageType enum size | Design Spec: 10 types | CONTENT-WRITING/Frameworks: 7 types | **Resolved** — use 7 canonical. Design Spec is reference, not canonical |
| X2 | PageType names | Design Spec: `landing`, `how_to` | Frameworks: `navigation`, `instruction` | **Resolved** — code uses 7 + deprecated aliases. Templates use canonical names |
| X3 | Template location | `v2/templates/pages/` | `snippets/templates/pages/` | **Resolved** — `snippets/templates/` is canonical (D1) |
| X4 | Glossary authority | AI-generated `resources/compendium/glossary.mdx` | Human-authored `v2/[tab]/resources/glossary.mdx` | **Resolved** — human-authored is authoritative per plan-canonical.md |
| X5 | component-layout-profile.json enum | Uses deprecated names (`landing`, `how_to`) | Canonical uses `navigation`, `instruction` | **UNRESOLVED** — JSON needs updating to canonical names |
| X6 | Phase 7/8 ordering | Design doc: Phase 7 → Phase 8 | plan-canonical.md: Phase 6 → 8 → 7 → 10 | **Resolved** — naming before veracity (plan-canonical is correct) |
| X7 | Information-type → component mapping | Content Taxonomy (13 types, documented) | component-layout-profile.json (no mapping) | **GAP** — JSON has no information-type field. Needs adding |

---

## Gaps — What Doesn't Exist Yet

### Critical (blocks template work)

| # | Gap | What's needed | Blocks |
|---|---|---|---|
| G1 | No single page construction manual | Assemble from 35+ scattered sources into one operational doc | Everything — AI agents, human authors can't follow scattered rules |
| G2 | No composable section blocks | `snippets/templates/pages/blocks/` is conceptual only | Section reuse, consistent structure across pages |
| G3 | No per-pageType dos/don'ts | Rules exist but scattered across checks, references, framework | Authors making avoidable mistakes per pageType |
| G4 | component-layout-profile.json uses deprecated enum | Needs migration to 7 canonical types | Validator enforcement against actual pageTypes |

### Important (quality gap)

| # | Gap | What's needed | Blocks |
|---|---|---|---|
| G5 | 5 gold standard pages cover 3 types | Need annotated examples for tutorial, reference, compendium, portal, resource, changelog | Phase 10 layout pass has no exemplars for 6+ types |
| G6 | No Tabs vs Views vs Columns decision guide | When to use which — documented nowhere | Multi-dimensional pages built inconsistently |
| G7 | No agent prompt template | Structured prompt for AI to lay out pages | AI-assisted page authoring |
| G8 | Information-type → component mapping not in JSON | Exists in prose (Design Spec) but not machine-readable | Automated layout validation |

### Nice-to-have (future)

| # | Gap | What's needed | Blocks |
|---|---|---|---|
| G9 | VS Code snippets empty | `tools/vscode/page-templates/` and `tools/vscode/components/` are empty directories | Author productivity tooling |
| G10 | Sub-section patterns not defined | code+explanation pair, warning+workaround pair | Phase 2 of composable scope |
| G11 | Google Doc research not ingested | Prior design governance research | Historical context |

---

## Decisions Made This Session

| # | Decision | Answer | Rationale |
|---|---|---|---|
| D1 | Template canonical location | `snippets/templates/pages/` (pages), `snippets/templates/pages/blocks/` (blocks), `snippets/templates/` root (guidelines/frameworks), `snippets/templates/supporting/` (prompts/skills/tooling) | Already where composition framework lives; in snippets import path; not publishable |
| D2 | Composable section scope | Section-level first, sub-section patterns Phase 2 | Pragmatic — get the main building blocks working before going granular |
| D3 | PageType enum | 7 canonical from CONTENT-WRITING/Frameworks/pageType.md | CONTENT-WRITING holds the truth |
| D4 | Framework home | `snippets/templates/` initially, promote to `docs-guide/` later | Start where templates live; formalise into governance docs when stable |

---

## Recommendations

### Immediate (build the framework)

1. **Page Classification Guide** — `snippets/templates/page-classification.md`
   - Decision tree: "What kind of page is this?" → pageType
   - Per-type card: purpose, time, word range, required sections, forbidden patterns, dos/don'ts
   - Assembled from: pageType.md, checks.mdx, layout-profile.json, 01-page-anatomy.md

2. **Section Pattern Library** — `snippets/templates/section-patterns.md` + `snippets/templates/pages/blocks/`
   - 13 section archetypes defined in 03-section-patterns.md
   - Composable MDX blocks for the most common patterns
   - Each with: structure, component slots, content guidance, when to use / when not

3. **Per-pageType Dos/Don'ts** — integrated into page classification guide
   - One card per type
   - Concrete examples from gold standard pages and anti-patterns

4. **Golden Examples** — extend `.claude/references/` or `snippets/templates/pages/examples/`
   - Annotated real pages for all 7 primary types
   - 5 exist; need tutorial, reference, compendium, portal, resource, changelog

### Near-term (operationalise)

5. **Agent Prompt Template** — `snippets/templates/supporting/page-layout-prompt.md`
   - Inputs: pageType, audience, content inventory
   - Process: classify → select template → compose sections → apply components → validate
   - Output: MDX page draft

6. **Update component-layout-profile.json** — migrate to canonical 7-type enum, add information-type mapping

### Future (tooling)

7. **VS Code tooling** — `tools/vscode/page-templates/` and `tools/vscode/components/`
   - Snippets for section blocks
   - Template scaffolding commands
   - Completions from component registry

---

## Dependencies on In-Flight Work

| Work stream | What it affects | Action needed |
|---|---|---|
| COMPONENT-GOVERNANCE | Component folder paths in templates | Wait for structure.md to stabilise; update import paths after |
| SCRIPT-GOVERNANCE | Validation scripts | Validators may need updating when section-level rules added |
| CONTENT-WRITING/Frameworks | pageType definitions | Already using as source of truth (D3). Monitor for changes |
| CONTENT-WRITING Phase 10 | Layout pass | This framework IS what Phase 10 needs. Ensure alignment |
