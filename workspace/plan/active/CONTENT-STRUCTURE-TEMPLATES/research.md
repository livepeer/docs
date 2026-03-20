# Content Structure & Templates — Research

**Created**: 2026-03-19
**Purpose**: Ranked inventory of every repo source relevant to page templates and composable sections.

---

## Group 1: Page Templates

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 1.1 | `snippets/templates/pages/page-composition-framework.mdx` | **2026-03-19** | Master composition rules — header/intro/body/footer structure, section naming examples, CTA options | **HIGH** — good and recent, but unfinished |
| 1.2 | `snippets/templates/pages/overview-page.mdx` | 2026-03-18 | Overview page template | REVIEW — not author's work |
| 1.3 | `snippets/templates/pages/how-to-page.mdx` | 2026-03-18 | How-to page template | REVIEW — not author's work |
| 1.4 | `snippets/templates/pages/tutorial-page.mdx` | 2026-03-18 | Tutorial page template | REVIEW — not author's work |
| 1.5 | `snippets/templates/pages/reference-page.mdx` | 2026-03-18 | Reference page template | REVIEW — not author's work |
| 1.6 | `snippets/templates/pages/faq-page.mdx` | 2026-03-18 | FAQ page template | REVIEW — not author's work |
| 1.7 | `snippets/templates/pages/troubleshooting-page.mdx` | 2026-03-18 | Troubleshooting page template | REVIEW — not author's work |
| 1.8 | `snippets/templates/pages/landing-frame-page.mdx` | 2026-03-18 | Landing (frame mode) template | REVIEW — not author's work |
| 1.9 | `v2/templates/pages/` (full set: 10+ templates) | 2026-03-18 | Parallel template set — includes same types plus portal, navigation, openapi, setup variants | REVIEW — not author's work |

**Note**: Two parallel template locations exist (`snippets/templates/pages/` and `v2/templates/pages/`). Alignment unverified.

---

## Group 2: Taxonomy & Frameworks

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 2.1 | `docs-guide/frameworks/page-taxonomy-framework.mdx` | 2026-03-18 | 12 pageTypes, 9 audiences, 15 purposes, complexity, lifecycleStage — the frontmatter schema | **GOOD GUIDE** — may be out of date on details |
| 2.2 | `docs-guide/frameworks/content-system.mdx` | 2026-03-18 | 3-layer content model (product/operational/reference), IA model, publishable vs workspace | **GOOD GUIDE** — may be out of date on details |
| 2.3 | `docs-guide/frameworks/component-governance.mdx` | 2026-03-18 | 113 components classified into 5 categories, decision tree, compositional tiers | **GOOD GUIDE** — may be out of date on details |

---

## Group 3: Layout & Component Contracts

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 3.1 | `docs-guide/policies/component-layout-decisions.mdx` | 2026-03-18 | Required sections + approved/forbidden components per pageType | REVIEW — probably good |
| 3.2 | `tools/config/component-layout-profile.json` | **2026-03-19** | Machine-readable version of 3.1 | REVIEW — probably good |
| 3.3 | `docs-guide/component-registry.json` | **2026-03-19** | Full component inventory (246KB), 14 governance fields per component | REVIEW — probably good |
| 3.4 | `docs-guide/component-usage-map.json` | 2026-03-18 | Which components are used on which pages | REVIEW — probably good |
| 3.5 | `tasks/plan/active/COMPONENT-GOVERNANCE/structure.md` | **2026-03-19** | Target component folder layout — includes `snippets/composables/` directory marked "Future: MDX-defined composable snippets (TBD)" | **KEY DEPENDENCY** — defines where composables will live |
| 3.6 | `tasks/plan/active/COMPONENT-GOVERNANCE/catalog.md` | **2026-03-19** | Component catalog from in-flight governance work | **KEY DEPENDENCY** — most current component inventory |

---

## Group 4: Naming & Copy Rules

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 4.1 | `v2/_workspace/research/content-naming.md` | **2026-03-19** | Section naming rubric — 6-step, 12 candidates, 5-dimension scoring, governing-concept rules | **GOOD REF** |
| 4.2 | `tasks/plan/active/COPYWRITING FRAMEWORK/copy-rules-SKILL.md` | 2026-03-18 | Voice rules, 42 banned phrases, section opening order — operator-focused only | **BECOMING** — good resource but not fully defined yet |
| 4.3 | `tools/lib/copy-governance/banned-phrases.txt` | 2026-03-18 | Machine-readable banned phrases | **GOOD GUIDE** — needs review |
| 4.4 | `tools/lib/copy-governance/banned-words.txt` | 2026-03-18 | Machine-readable banned words | **GOOD GUIDE** — needs review |

---

## Group 5: Related Plans

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 5.1 | `tasks/plan/active/CONTENT-WRITING/plan.md` | **2026-03-19** | Content writing pipeline — Steps 2-10 define taxonomy, this work sits after Step 10 | **NOTE** — overlapping scope, dependency |
| 5.2 | `tasks/plan/active/CONTENT-WRITING/collation.md` | **2026-03-19** | Dated inventory of all resources with gap analysis | **NOTE** — useful prior art for this research |
| 5.3 | `tasks/plan/active/COMPONENT-GOVERNANCE/` | **2026-03-19** | Component restructuring — defines target folder layout incl. composables | **KEY DEPENDENCY** — in-flight, affects where things land |
| 5.4 | `tasks/plan/active/SCRIPT-GOVERNANCE/` | **2026-03-19** | Script restructuring | **NOTE** — in-flight, may affect validation tooling |
| 5.5 | `tasks/plan/active/CONTENT-WRITING/pageType.md` | **2026-03-20** | pageType definitions — being defined now | **KEY DEPENDENCY** — actively in progress, extremely relevant |
| 5.6 | `tasks/plan/active/CONTENT-WRITING/framework.md` | **2026-03-20** | Framework definitions — being defined now | **KEY DEPENDENCY** — actively in progress, extremely relevant |

---

## Group 6: Tooling

| # | File | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 6.1 | `tools/lib/frontmatter-taxonomy.js` | 2026-03-18 | Canonical pageType/purpose enums in code | **PROBABLY UPDATING** — may change with taxonomy work |
| 6.2 | `tools/scripts/validators/components/library/component-layout-governance.js` | 2026-03-18 | Layout compliance checker | REVIEW — probably has good/recent items |
| 6.3 | `tools/vscode/authoring-tools/` | 2026-03-13 | MDX formatter + import completions extension | REVIEW — probably has good/recent items |
| 6.4 | `tools/vscode/page-templates/` | — | Empty placeholder directory — ready for this work | **NOTE** — end-product target |

---

## Group 7: Design Specification (`docs-guide/_workspace/02_Design-Specification/`)

> **Not canonical sources of truth** — high-value research and thinking that informed decisions. The actual source of truth is the repo's governance files.

| # | Section | Modified | What it contributes | Rank |
|---|---|---|---|---|
| 7.1 | `01_PRD-Docs/index.md` | 2026-03-19 | Strategic goals G1-G6, 8 docs objectives, persona priority (App Dev AI = primary), success criteria P1-P6 | **HIGH VALUE RESOURCE** |
| 7.2 | `02_Audience-&-Personas/01_01/index.md` | 2026-03-19 | 7 network functions, 8 personas with self-identification, technical depth, pain points, activation moments | **HIGH VALUE RESOURCE** |
| 7.3 | `02_Audience-&-Personas/02_02/index.md` | 2026-03-19 | 8 detailed journey maps per persona, stage-by-stage activation questions, gap identification | **HIGH VALUE RESOURCE** |
| 7.4 | `03_IA-Framework/01_03/index.md` | 2026-03-19 | 10 page types with target time, word range, layout patterns, assessment checklists per type | **HIGH VALUE RESOURCE** |
| 7.5 | `03_IA-Framework/02_04/index.md` | 2026-03-19 | Journey-derived IA — 96 pages (vs 177 repo bloat), per-tab page blueprints | **HIGH VALUE RESOURCE** |
| 7.6 | `04_UX-Framework/01_06/index.md` | 2026-03-19 | Page taxonomy quick reference — jobs, time, word range, required components per type | **HIGH VALUE RESOURCE** |
| 7.7 | `04_UX-Framework/02_07/index.md` | 2026-03-19 | 13 content data types, content type × page type matrix, component group mapping, 6 composition patterns | **HIGH VALUE RESOURCE** |
| 7.8 | `04_UX-Framework/03_08/index.md` | 2026-03-19 | Composable content guide — shared vs local rules, Mintlify constraints, MDX-as-orchestration, `snippets/composables/` concept | **HIGH VALUE RESOURCE** |
| 7.9 | `05_Brand-Copy-Style/01_09/index.md` | 2026-03-19 | Voice definition, UK English, canonical terminology, banned words, voice modulation per page type, page opening/closing patterns | **HIGH VALUE RESOURCE** |
| 7.10 | `05_Brand-Copy-Style/02_10/index.md` | 2026-03-19 | 3-layer CSS, heading conventions, frontmatter requirements, component organisation, Mintlify gotchas, testing checklist | **HIGH VALUE RESOURCE** |
| 7.11 | `06_Technical/01_11/index.md` | 2026-03-19 | 26 GitHub Actions, data pipelines, external service dependencies | **HIGH VALUE RESOURCE** |
| 7.12 | `06_Technical/02_12/index.md` | 2026-03-19 | Performance budgets per page type, build/load/DX metrics, bottleneck inventory | **HIGH VALUE RESOURCE** |
| 7.13 | `07_Implementation/01_13/index.md` | 2026-03-19 | Mintlify platform constraints — import system, scope inheritance, rendering modes, what works/doesn't | **HIGH VALUE RESOURCE** |
| 7.14 | `07_Implementation/02_14/index.md` | 2026-03-19 | Brand & copy gap analysis, phased enforcement plan, author workflow | **HIGH VALUE RESOURCE** |

---

## Gaps Identified

1. **Google Doc** — `https://docs.google.com/document/d/11y2aNj26E5WlVHCrlObbauaWy1jl0swAZDe9Zta3uCg/` — inaccessible, needs export
2. **No composable section concept exists yet** — sections are implicit in templates, not standalone
3. **`snippets/composables/` in COMPONENT-GOVERNANCE** — directory planned but empty and TBD
4. **Voice rules are operator-only** — no developer, delegator, community voice variants
5. **Two parallel template sets** — canonical location undecided
6. **Design Spec sections** — not yet ranked (next step)
