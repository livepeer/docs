# Master Inventory — Deep Scan First Pass

**Purpose**: Comprehensive first-pass listing of every file in the repo with potential pipeline relevance. Unfiltered — everything that might matter goes in here. Pruning and status marking happens in `master-list.md` (next step).

**Source**: Deep scan of all repo subdirectories including areas missed in initial collation.

**Already handled**: Files already covered by existing pointer files in this folder or in `prompt-guides-guards-resources/` and `reference-sources-quality-scored/` are noted as such. They don't need new pointer files — they're already in the index.

---

## 1. Design Specification (`docs-guide/_workspace/02_Design-Specification/`)

The most important find from the deep scan. A 7-section product/design spec with foundational definitions for audience, IA, page taxonomy, content taxonomy, brand voice, and implementation notes. This is the authoritative design brief behind v2.

| File | What it contains |
|---|---|
| `docs-guide/_workspace/02_Design-Specification/01_PRD-Docs/index.md` | Strategic context, 6 goals (G1–G6), scope definition |
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.-Audience-&-Persona-Mapping-&-Definitions/index.md` | 7 network functions, persona self-identification problem, 9 audiences mapped |
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md` | Developer disambiguation routing table, journey alignment |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` | 6 page purposes, linear positions (1–3 obligatory) vs on-demand positions (4–6) |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md` | Journey-derived IA blueprint, "Choose Your Integration Path" flagged as most critical page |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/03_05-IA-Blueprint/index.md` | IA blueprint per section |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md` | 10 page types with word count targets and time-on-page targets |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` | Content taxonomy: procedural/conceptual/referential mapped to UI patterns |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/03_08-Composable-Content-Guide/index.md` | Composable content rules: shared/external/derived |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md` | Brand voice: "knowledgeable colleague", values (transparent/candid/performant/inclusive), second person for instructions |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/02_10-Style-Guide/index.md` | CSS architecture, colour system (design-system level, less pipeline-relevant) |
| `docs-guide/_workspace/02_Design-Specification/06_Technical-Framework/01_11.-Infrastructure/index.md` | Technical infrastructure decisions |
| `docs-guide/_workspace/02_Design-Specification/06_Technical-Framework/02_12.-Performance-Framework/index.md` | Performance framework |
| `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/01_13.-Mintlify-Considerations/index.md` | Mintlify-specific implementation notes |
| `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/02_14.-Brand-&-Copy/index.md` | Enforcement scripts: style-and-language-homogenizer-en-gb.js, component-layout-governance.js, audit-v2-usefulness.js |

**Key callouts:**
- Sections 01–05 are high pipeline value (audience, IA, page taxonomy, brand voice)
- Sections 06–07 are lower pipeline value (technical/Mintlify) unless authoring standard questions arise
- The audience/persona section (02) may conflict with or extend `personas.md` — needs reconciliation

---

## 2. DOCUMENTATION Project (`workspace/plan/active/DOCUMENTATION/`)

Active project focused on docs-guide pages (not content pages). Defines how to classify and route documentation about the docs system itself.

| File | What it contains |
|---|---|
| `workspace/plan/active/DOCUMENTATION/designing/structure.md` | docType taxonomy: `<docType>/<concern>/<format>` pattern; types: policy, framework, catalog, feature-map, tooling-ref |
| `workspace/plan/active/DOCUMENTATION/designing/consumer-assignments.md` | `consumer` field: human \| agent \| automation — replaces "audience" for docs-guide pages; affects how pages are authored |
| `workspace/plan/active/DOCUMENTATION/context.md` | Project context and scope for DOCUMENTATION plan |
| `workspace/plan/active/DOCUMENTATION/prd.md` | PRD for docs-guide documentation |
| `workspace/plan/active/DOCUMENTATION/research.md` | Background research |
| `workspace/plan/active/DOCUMENTATION/recommendations.md` | Recommendations from the DOCUMENTATION audit |
| `workspace/plan/active/DOCUMENTATION/audit.md` | Audit results |
| `workspace/plan/active/DOCUMENTATION/plan.md` | Execution plan |

**Key callout**: `consumer-assignments.md` introduces a docs-guide–specific `consumer` field that works differently from the `audience` field used for content pages. Worth noting when Phase 2 audits docs-guide pages.

---

## 3. Content Structure Templates (`workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/`)

Research and resource collation specifically for page structure templates. Partially overlaps with `page-structure-rules.md` pointer but covers a wider source sweep.

| File | What it contains |
|---|---|
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/resources.md` | 12+ pageType definitions, flags two template locations with unverified alignment, notes voice rules are operator-only |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/pre-research.md` | 35+ scattered sources across the repo, sub-project notes between steps 10–11 of the pipeline |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/research.md` | Research notes for content structure |

---

## 4. Component Governance Research (`workspace/plan/active/COMPONENT-GOVERNANCE/Research/`)

| File | What it contains |
|---|---|
| `workspace/plan/active/COMPONENT-GOVERNANCE/Research/composables-research.md` | 9 information types with purpose→type mapping; 14 composable component candidates |

**Key callout**: Information type taxonomy here (9 types) may align with or extend the content taxonomy in `02_Design-Specification/04_UX/02_07`. Worth cross-checking.

---

## 5. v2 Internal Strategic Files (`v2/internal/`)

Foundational strategic and philosophical content — explains the "why" behind v2.

| File | What it contains |
|---|---|
| `v2/internal/overview/strategic-alignment.mdx` | 6 strategic goals (G1–G6) driving v2 |
| `v2/internal/rfp/problem-statements.mdx` | 4 core problems the v2 docs address |
| `v2/internal/rfp/aims.mdx` | Aims of v2 project |
| `v2/internal/rfp/deliverables.mdx` | v2 deliverables |
| `v2/internal/rfp/outcomes.mdx` | Success outcomes |
| `v2/internal/rfp/report.mdx` | RFP report |
| `v2/internal/definitions.mdx` | Internal term definitions |
| `v2/internal/ecosystem.mdx` | Ecosystem overview |
| `v2/internal/overview/about.mdx` | About the docs |
| `v2/internal/overview/governance.mdx` | Governance overview |
| `v2/internal/overview/governance-pipeline.mdx` | Governance pipeline detail |
| `v2/internal/overview/docs-philosophy.mdx` | Docs philosophy (duplicate of `v2/internal/docs-philosophy.mdx` — check which is canonical) |

**Already in pointer files**: `v2/internal/docs-philosophy.mdx` is in `docs-philosophy-authoring.md`. The above adds the RFP section and strategic-alignment.

---

## 6. Developer Tab Workspace (`v2/developers/_workspace/`)

Research reports on the developer audience — foundational for developer-targeted content.

| File | What it contains |
|---|---|
| `v2/developers/_workspace/context-data/Developers_new/brief-01-research-report.md` | Developer landscape research, layer model (SDK→API→protocol), pain points — most current |
| `v2/developers/_workspace/context-data/Developers_new/brief-02-research-report.md` | Developer research brief 02 |
| `v2/developers/_workspace/context-data/Developers_new/brief-04-research-report.md` | Developer research brief 04 |
| `v2/developers/_workspace/context-data/Developers_new/brief-05-research-report.md` | Developer research brief 05 |
| `v2/developers/_workspace/context-data/Developers_new/brief-06-research-report.md` | Developer research brief 06 |
| `v2/developers/_workspace/context-data/Developers_new/brief-07-research-report.md` | Developer research brief 07 |
| `v2/developers/_workspace/archive/research-documents/brief-01-research-report.md` | Archive copy — may be older version of same |

**Note**: `context-data/Developers_new/` is likely more current than `archive/research-documents/`. Compare before using.

---

## 7. Gateways Tab Resources (`v2/gateways/`)

| File | What it contains |
|---|---|
| `v2/gateways/resources/research-sources.md` | Tier 1/2/3 source hierarchy for gateway-specific docs — which sources to trust and in what order |

**Already in pointer files**: `v2/gateways/resources/glossary.mdx` is in `in-repo-glossaries.md`.

---

## 8. Community Tab Workspace (`v2/community/_workspace/`)

**Already in pointer files**: Both key files are already captured in `ia-maps-and-templates.md` (community-tab-02 and community-tab-05).

| File | What it contains |
|---|---|
| `v2/community/_workspace/community-tab-02-audience-and-purpose.md` | Community audience framework, 20 JTBDs — *already pointed at* |
| `v2/community/_workspace/community-tab-05-final-ia-and-pages.md` | Final community IA, 8 sections — *already pointed at* |

---

## 9. v2 Cross-Tab Archive Reports (`v2/_workspace/archive/reports/`)

Research/brief output reports from early v2 content work — orchestrator-focused but show methodology.

| File | What it contains |
|---|---|
| `v2/_workspace/archive/reports/brief-07-08-arbitrum-activate-output.md` | Arbitrum activation content brief output |
| `v2/_workspace/archive/reports/brief-09-run-a-pool-output.md` | Run a pool content brief output |
| `v2/_workspace/archive/reports/brief-10-ai-pipelines-output.md` | AI pipelines content brief output |
| `v2/_workspace/archive/reports/brief-guides-output.md` | Guides section content brief output |
| `v2/_workspace/archive/reports/brief-tooling-output.md` | Tooling section content brief output |
| `v2/_workspace/archive/reports/faq-research-report.md` | FAQ research report |
| `v2/_workspace/archive/reports/orch-config-research-report.md` | Orchestrator configuration research report |

**Value**: These show what a content brief output looks like in practice. Useful as examples for Phase 3 rewrite skill design.

---

## 10. Orchestrators Workspace Plans (`v2/orchestrators/_workspace/plans/`)

Deep prior work on orchestrator content — the most thoroughly worked-through tab to date.

| File | What it contains |
|---|---|
| `v2/orchestrators/_workspace/plans/content-writing-review.md` | Orchestrator content writing review |
| `v2/orchestrators/_workspace/plans/execution-plan.md` | Orchestrator execution plan |
| `v2/orchestrators/_workspace/plans/concepts-restructure.md` | Concepts section restructure plan |
| `v2/orchestrators/_workspace/plans/guides/RESTRUCTURE-PLAN.md` | Guides restructure plan |
| `v2/orchestrators/_workspace/plans/plan.md` | Orchestrators overall plan |
| `v2/orchestrators/_workspace/plans/dep-IA.mdx` | Deprecated IA (historical reference) |
| `v2/orchestrators/_workspace/plans/dep-guides-notes.md` | Deprecated guides notes |
| `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx` | Deprecated personas and pages |
| `v2/orchestrators/_workspace/handoff/product-thinking-handoff.md` | Product thinking handoff notes |
| `v2/orchestrators/_workspace/handoff/handoff-restructure.md` | Restructure handoff |
| `v2/orchestrators/_workspace/drafts/SKILL-page-review-rewrite.md` | Page review/rewrite skill draft for orchestrators |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/PROMPT.md` | Tutorial writing pack prompt — *already in existing-skills.md* |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/page-authoring-SKILL.md` | Page authoring skill reference used in the pack |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/execution-plan.md` | Execution plan for the tutorial writing pack |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/plan.md` | Pack plan |

---

## 11. About Tab Workspace (`v2/about/_workspace/`)

| File | What it contains |
|---|---|
| `v2/about/_workspace/todo.txt` | Tab-level upgrade/remove tracking notes |
| `v2/about/_workspace/LivepeerContractAddresses.md` | Contract addresses (reference data, not copy pipeline) |
| `v2/about/_workspace/LivepeerContractAddressesResearch.md` | Contract addresses research |

---

## 12. LPT Tab Workspace (`v2/lpt/_workspace/`)

| File | What it contains |
|---|---|
| `v2/lpt/_workspace/todo.txt` | LPT tab upgrade/remove tracking notes |

---

## 13. Home Tab Workspace (`v2/home/_workspace/`)

| File | What it contains |
|---|---|
| `v2/home/_workspace/todo.txt` | Home tab upgrade/remove tracking notes |

---

## 14. AI Skills — `ai-tools/ai-skills/` (Full Set)

The `existing-skills.md` pointer file covers `agent-packs/skills/` only. This is the full list from `ai-skills/` which appears to be an older/parallel set. Several are content pipeline–relevant and not covered in the existing pointer.

| File | What it contains | Pipeline relevance |
|---|---|---|
| `ai-tools/ai-skills/page-authoring/SKILL.md` | Page authoring skill — defines how to author a page | High — likely Phase 3 relevant |
| `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` | Content pipeline Pass A skill | High — possibly predecessor to Phase 3 |
| `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md` | Content pipeline Pass B skill | High — possibly predecessor to Phase 4 |
| `ai-tools/ai-skills/content-pipeline-tab-map/SKILL.md` | Tab map generation skill | Medium — Phase 1 IA context |
| `ai-tools/ai-skills/product-thinking/SKILL.md` | Product thinking skill — frames content from product angle | Medium — Phase 1/2 |
| `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md` | EN-GB style homogenizer | Medium — Phase 4 |
| `ai-tools/ai-skills/docs-quality-and-freshness-audit/SKILL.md` | Quality and freshness audit | Medium — Phase 2 |
| `ai-tools/ai-skills/rubric-static-review/SKILL.md` | Static review rubric | Medium — Phase 2/3 |
| `ai-tools/ai-skills/component-layout-governance/SKILL.md` | Component layout governance | Low-Medium — Phase 4 |
| `ai-tools/ai-skills/docs-copy/SKILL.md` | Docs copy skill — *already in existing-skills.md* | — |
| `ai-tools/ai-skills/docs-review-packet-generation/SKILL.md` | Review packet generation | Medium — Phase 2 |
| `ai-tools/ai-skills/docs-review-fix-execution/SKILL.md` | Review + fix execution | Medium — Phase 3 |
| `ai-tools/ai-skills/cleanup-quarantine-manager/SKILL.md` | Cleanup/quarantine management | Low — post-pipeline |
| `ai-tools/ai-skills/cross-agent-packager/SKILL.md` | Cross-agent packaging | Low — orchestration level |
| `ai-tools/ai-skills/docs-coverage-and-route-integrity-audit/SKILL.md` | Coverage and route integrity | Low — structural audit |
| `ai-tools/ai-skills/generated-mdx-banners-governance/SKILL.md` | MDX banner governance | Low — formatting |
| `ai-tools/ai-skills/repo-audit-orchestrator/SKILL.md` | Repo audit orchestrator | Low — broad audit |
| `ai-tools/ai-skills/script-footprint-and-usage-audit/SKILL.md` | Script usage audit | None — tooling |
| `ai-tools/ai-skills/skill-docs/SKILL.md` | Skill documentation skill | None — meta |

**Note**: The `ai-skills/` directory and `agent-packs/skills/` directory may overlap. `content-pipeline-pass-a` and `content-pipeline-pass-b` are especially worth reading — they may already implement what the pipeline is trying to design.

---

## 15. AGENTS.md (Root)

| File | What it contains |
|---|---|
| `AGENTS.md` | Source-of-truth priority chain: docs.json → v2/** → README/contribute → docs-guide → v1. Repo-wide rules for agents. |

**Key callout**: Priority chain is directly relevant to Phase 2 (structure audit) and Phase 3 (content pass) — defines which files take precedence when there's a conflict.

---

## 16. CONTENT-WRITING Workspace Collation (`workspace/plan/active/CONTENT-WRITING/Workspace/`)

| File | What it contains |
|---|---|
| `workspace/plan/active/CONTENT-WRITING/Workspace/collation.md` | Dated inventory with content writing themes — shows what was collated at an earlier point in the project |

---

## 17. v2 Cross-Tab Research (`v2/_workspace/references/content-pipeline/`)

These are pipeline reference files created in prior content pipeline work — possibly the Phase 1 outputs from the earlier plan.

| File | What it contains |
|---|---|
| `v2/_workspace/references/content-pipeline/01-page-type-definitions.md` | Page type definitions (early pipeline output) |
| `v2/_workspace/references/content-pipeline/08a-ia-per-tab.md` | IA per tab — *already in ia-maps-and-templates.md pointer* |
| `v2/_workspace/references/content-pipeline/10-prompt-input-spec.md` | Prompt input spec — *already in prior-prompt-architecture.md pointer* |
| `v2/_workspace/references/content-pipeline/level-1-prompt-a.md` | Level 1 prompt A (early pipeline prompt) |

---

## 18. Files in Typed Folders (Already Covered)

These are already captured in existing pointer files — listed here for completeness so nothing seems missing.

**In `prompt-guides-guards-resources/`**:
- All `workspace/plan/active/CONTENT-WRITING/Frameworks/` files → `frameworks-content-pipeline.md`
- `v2/_workspace/research/content-naming.md` → `naming-research.md`
- `v2/_workspace/research/ai-coauthoring.md` → `ai-coauthoring-research.md`
- Voice rules, section naming, docs-review tiers → `active-prompts.md`
- All `ai-tools/ai-skills/docs-copy/skills/` → `copy-skills.md`
- `tools/config/usefulness-rubric.json`, `usefulness-journeys.json`, prompts folder → `usefulness-tools.md`
- `snippets/templates/pages/`, `docs-guide/policies/`, `page-composition-framework.mdx` → `page-structure-rules.md`
- `v2/internal/docs-philosophy.mdx`, `v2/resources/documentation-guide/authoring-standard.mdx` → `docs-philosophy-authoring.md`
- Copy-rules, structure-rules, persona-routing, value-prop-check, phrase-mapping → `copy-skills.md`
- Banned phrases/words → `banned-copy.md`
- Playbook + 10-prompt-input-spec → `prior-prompt-architecture.md`
- GB English style profile → `style-language.md`
- `copy-governance.md`, `deprecated-terms.md` (moved from /sources/)

**In `reference-sources-quality-scored/`**:
- All TERMINOLOGY-COLLATE consolidated + per-tab glossaries → `terminology-consolidated.md`, `terminology-per-tab.md`
- `tools/config/accuracy-source-registry.json` → `accuracy-sources.md`
- In-repo glossaries (gateways, orchestrators) → `in-repo-glossaries.md`
- `veracity-sources.md`, `universal-terms.md` (moved from /sources/)

**In `current-repo-resources/`** (this folder):
- Personas (gateway + developer + community) → `personas.md`
- IA maps + templates → `ia-maps-and-templates.md`
- Prior outputs (orchestrator review, tier questions) → `prior-outputs.md`
- Page templates folder → `page-templates.md`
- Existing agent-packs skills → `existing-skills.md`
- Frontmatter taxonomy (current + pending) → `frontmatter-current-state.md`
- Testing outputs → `testing-outputs.md`

---

## Quick priority signal

Files most likely to have HIGH immediate pipeline value that aren't yet covered by pointer files:

1. `docs-guide/_workspace/02_Design-Specification/02.../01.../index.md` — Audience & Persona Mapping
2. `docs-guide/_workspace/02_Design-Specification/05.../01.../index.md` — Brand & Copy Guide ("knowledgeable colleague" voice)
3. `docs-guide/_workspace/02_Design-Specification/04.../01.../index.md` — Page Taxonomy (10 types with word counts)
4. `docs-guide/_workspace/02_Design-Specification/03.../01.../index.md` — IA Structure and Purpose (6 purposes)
5. `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` — may already implement Phase 3
6. `ai-tools/ai-skills/page-authoring/SKILL.md` — may already implement Phase 3 authoring
7. `v2/developers/_workspace/context-data/Developers_new/brief-01-research-report.md` — developer audience groundwork
8. `v2/gateways/resources/research-sources.md` — source hierarchy for gateway facts
9. `workspace/plan/active/DOCUMENTATION/designing/consumer-assignments.md` — consumer field, docs-guide–specific
10. `workspace/plan/active/COMPONENT-GOVERNANCE/Research/composables-research.md` — information types + composable mapping
