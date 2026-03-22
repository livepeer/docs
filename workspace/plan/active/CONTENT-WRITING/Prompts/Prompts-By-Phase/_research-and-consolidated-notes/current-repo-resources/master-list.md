# Master List — Deep Scan Assessed

**Source**: `master-inventory.md` — all items from the deep scan, now pruned and classified.
**Status key**: `useful` load into prompt pack | `partial` specific sections only | `n/a` not pipeline-relevant
**Phase key**: `1` audience design | `2` structure audit | `3` content pass | `4` layout pass | `all` all phases

Items already covered by existing pointer files in the typed folders are listed at the end as **already handled**.

---

## Useful — load into prompt pack

| File | Phase | Notes |
|---|---|---|
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.-Audience-&-Persona-Mapping-&-Definitions/index.md` | 1 | 7 network functions, 9 audience types, persona self-identification problem — foundational for audience-design.md |
| `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.-Personas-Journey-Alignment/index.md` | 1 | Developer disambiguation routing table — critical for telling developer subtypes apart |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` | 1, 2 | 6 page purposes, linear positions 1–3 (obligatory) vs on-demand 4–6 — informs both audience design and structure audit |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md` | 1 | Journey-derived IA blueprint; flags "Choose Your Integration Path" as most critical page |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md` | 2 | 10 page types with word count targets and time-on-page targets — use in structure audit |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` | 2, 3 | Content taxonomy: procedural/conceptual/referential mapped to UI patterns — bridges structure audit and content pass |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md` | 3 | "Knowledgeable colleague" voice, 4 values (transparent/candid/performant/inclusive), second person for instructions — primary voice authority |
| `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` | 3 | **READ BEFORE BUILDING PHASE 3** — may already implement the content pass. Avoids duplication |
| `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md` | 4 | **READ BEFORE BUILDING PHASE 4** — may already implement the layout pass |
| `ai-tools/ai-skills/page-authoring/SKILL.md` | 3 | Page authoring skill — directly relevant to Phase 3; check for reuse or supersession |
| `ai-tools/ai-skills/content-pipeline-tab-map/SKILL.md` | 1 | Tab map generation — check for overlap with audience-design.md Phase 1 IA derivation |
| `ai-tools/ai-skills/docs-quality-and-freshness-audit/SKILL.md` | 2 | Quality and freshness audit — likely overlaps with structure-audit.md; check rubric |
| `ai-tools/ai-skills/rubric-static-review/SKILL.md` | 2 | Static review rubric — Phase 2 input; may define scoring that structure-audit.md should use |
| `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md` | 4 | EN-GB style enforcement — Phase 4 gate |
| `ai-tools/ai-skills/docs-review-packet-generation/SKILL.md` | 2, 3 | Review packet generation — how a review is packaged; informs Phase 2 output format |
| `ai-tools/ai-skills/docs-review-fix-execution/SKILL.md` | 3 | Review + fix execution — informs Phase 3 rewrite workflow |
| `AGENTS.md` | all | Source-of-truth priority chain: docs.json → v2/** → README → docs-guide → v1. Every phase should know this hierarchy |
| `v2/gateways/resources/research-sources.md` | 3 | Tier 1/2/3 source hierarchy for gateway content — Phase 3 veracity grounding |
| `v2/developers/_workspace/context-data/Developers_new/brief-01-research-report.md` | 1 | Developer landscape, layer model (SDK→API→protocol), pain points — developer audience groundwork |
| `v2/developers/_workspace/context-data/Developers_new/brief-02-research-report.md` | 1 | Developer research brief 02 |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/resources.md` | 2 | 12+ pageType definitions; flags two template location misalignments and notes voice rules are operator-only — useful structure audit guard |
| `workspace/plan/active/COMPONENT-GOVERNANCE/Research/composables-research.md` | 3, 4 | 9 information types with purpose→type mapping; 14 composable candidates — content classification and component selection |
| `v2/internal/overview/strategic-alignment.mdx` | 1 | 6 strategic goals (G1–G6) — sets context for what the docs are trying to achieve |
| `v2/internal/rfp/problem-statements.mdx` | 1 | 4 core v2 problems — audience-design.md needs to know what problems the tab is solving |
| `v2/orchestrators/_workspace/plans/content-writing-review.md` | 2, 3 | Orchestrator-specific content writing review — concrete example of what a structure+content review produces |
| `v2/orchestrators/_workspace/drafts/SKILL-page-review-rewrite.md` | 3 | Page review/rewrite skill draft for orchestrators — shows real rewrite execution, not just spec |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/03_05-IA-Blueprint/index.md` | 2 | IA blueprint per section — structural reference for structure audit |
| `docs-guide/_workspace/02_Design-Specification/01_PRD-Docs/index.md` | 1 | Strategic context, 6 goals — grounding context for Phase 1 audience design |

---

## Partial — specific sections only

| File | Phase | Use this part |
|---|---|---|
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/03_08-Composable-Content-Guide/index.md` | 4 | Shared/external/derived content rules only — rest is implementation detail |
| `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/02_14.-Brand-&-Copy/index.md` | 4 | Enforcement script names only (style-and-language-homogenizer-en-gb.js, component-layout-governance.js, audit-v2-usefulness.js) — not the full file |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/02_10-Style-Guide/index.md` | 4 | CSS/colour tokens relevant to layout pass only; ignore design system internals |
| `workspace/plan/active/DOCUMENTATION/designing/consumer-assignments.md` | 2 | Docs-guide pages only — `consumer: human|agent|automation` field applies when auditing docs-guide pages, not v2 content pages |
| `workspace/plan/active/DOCUMENTATION/designing/structure.md` | 2 | docType taxonomy (`policy/framework/catalog/feature-map/tooling-ref`) relevant when auditing docs-guide pages only |
| `workspace/plan/active/DOCUMENTATION/recommendations.md` | 2 | Recommendations section only — skip project management context |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/pre-research.md` | 2 | Source map showing where 35+ scattered sources live — useful as a navigation aid, not as content input |
| `ai-tools/ai-skills/product-thinking/SKILL.md` | 1 | Product angle on content framing — use as a check not a primary input |
| `ai-tools/ai-skills/component-layout-governance/SKILL.md` | 4 | Layout governance rules only; skip skill scaffolding |
| `ai-tools/ai-skills/docs-coverage-and-route-integrity-audit/SKILL.md` | 2 | Route integrity check relevant when structure audit flags orphan pages |
| `v2/developers/_workspace/context-data/Developers_new/brief-04-research-report.md` | 1 | Check for audience nuance beyond brief-01; don't load all 6 — start with 01 and 02 |
| `v2/developers/_workspace/context-data/Developers_new/brief-05-research-report.md` | 1 | As above |
| `v2/developers/_workspace/context-data/Developers_new/brief-06-research-report.md` | 1 | As above |
| `v2/developers/_workspace/context-data/Developers_new/brief-07-research-report.md` | 1 | As above |
| `v2/internal/rfp/aims.mdx` | 1 | Aims section only — 2–3 lines of useful framing |
| `v2/internal/rfp/outcomes.mdx` | 1 | Success outcomes — useful as a success check frame |
| `v2/internal/definitions.mdx` | 3 | Internal term definitions that may extend or conflict with TERMINOLOGY-COLLATE glossaries |
| `v2/_workspace/archive/reports/brief-guides-output.md` | 3 | Shows what a content brief output looks like in practice — example only, not authoritative |
| `v2/_workspace/archive/reports/faq-research-report.md` | 1, 3 | FAQ patterns and frequently-asked-question clusters — relevant when writing FAQ-type pages |
| `v2/_workspace/archive/reports/orch-config-research-report.md` | 3 | Configuration page research — useful if writing orch config pages specifically |
| `v2/orchestrators/_workspace/plans/concepts-restructure.md` | 2 | Concept section restructure — example of a structure decision with rationale |
| `v2/orchestrators/_workspace/plans/guides/RESTRUCTURE-PLAN.md` | 2 | Guides restructure — example of structure audit output |
| `v2/orchestrators/_workspace/handoff/product-thinking-handoff.md` | 1 | Product thinking applied to orchestrators — phase 1 framing example |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/PROMPT.md` | 3 | Tutorial writing pack for orchestrators — domain-specific but shows full prompt pack structure |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/page-authoring-SKILL.md` | 3 | Page authoring reference used in the tutorial pack |
| `v2/_workspace/references/content-pipeline/01-page-type-definitions.md` | 2 | Early pipeline page type definitions — cross-check against `Frameworks/pageType.md` before using; may be outdated |
| `v2/_workspace/references/content-pipeline/level-1-prompt-a.md` | 1, 3 | Early level-1 prompt — useful as prior art, not a primary input |
| `workspace/plan/active/CONTENT-WRITING/Workspace/collation.md` | all | Historical snapshot — useful only for understanding what was collated when, not as active content input |

---

## N/A — not pipeline-relevant

| File | Reason |
|---|---|
| `docs-guide/_workspace/02_Design-Specification/06_Technical-Framework/01_11.-Infrastructure/index.md` | Infrastructure decisions — not content writing |
| `docs-guide/_workspace/02_Design-Specification/06_Technical-Framework/02_12.-Performance-Framework/index.md` | Performance framework — not content writing |
| `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/01_13.-Mintlify-Considerations/index.md` | Mintlify config specifics — tooling, not pipeline |
| `workspace/plan/active/DOCUMENTATION/context.md` | Project management context only |
| `workspace/plan/active/DOCUMENTATION/prd.md` | PRD for the DOCUMENTATION project, not content pipeline |
| `workspace/plan/active/DOCUMENTATION/research.md` | Background research for DOCUMENTATION project |
| `workspace/plan/active/DOCUMENTATION/audit.md` | DOCUMENTATION audit results |
| `workspace/plan/active/DOCUMENTATION/plan.md` | DOCUMENTATION project plan |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/research.md` | Research notes, no actionable pipeline content |
| `v2/internal/ecosystem.mdx` | Content page, not a pipeline input |
| `v2/internal/overview/about.mdx` | About page — content, not pipeline |
| `v2/internal/overview/governance.mdx` | Governance docs — not content pipeline |
| `v2/internal/overview/governance-pipeline.mdx` | Governance pipeline — not content pipeline |
| `v2/internal/overview/docs-philosophy.mdx` | Duplicate of `v2/internal/docs-philosophy.mdx` which is already covered in `docs-philosophy-authoring.md` |
| `v2/internal/rfp/deliverables.mdx` | Project deliverables — not content guidance |
| `v2/internal/rfp/report.mdx` | RFP report — not content guidance |
| `v2/about/_workspace/todo.txt` | Tab tracking notes |
| `v2/lpt/_workspace/todo.txt` | Tab tracking notes |
| `v2/home/_workspace/todo.txt` | Tab tracking notes |
| `v2/about/_workspace/LivepeerContractAddresses.md` | Reference data only |
| `v2/about/_workspace/LivepeerContractAddressesResearch.md` | Reference data research |
| `v2/_workspace/archive/reports/brief-07-08-arbitrum-activate-output.md` | Arbitrum-specific, too narrow |
| `v2/_workspace/archive/reports/brief-09-run-a-pool-output.md` | Too domain-specific for pipeline use |
| `v2/_workspace/archive/reports/brief-10-ai-pipelines-output.md` | Too domain-specific |
| `v2/_workspace/archive/reports/brief-tooling-output.md` | Tooling-specific output |
| `v2/orchestrators/_workspace/plans/execution-plan.md` | Project management |
| `v2/orchestrators/_workspace/plans/plan.md` | Project management |
| `v2/orchestrators/_workspace/plans/dep-IA.mdx` | Deprecated |
| `v2/orchestrators/_workspace/plans/dep-guides-notes.md` | Deprecated |
| `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx` | Deprecated |
| `v2/orchestrators/_workspace/handoff/handoff-restructure.md` | Project handoff only |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/execution-plan.md` | Project management |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/plan.md` | Project management |
| `v2/developers/_workspace/archive/research-documents/` (all) | Superseded by `context-data/Developers_new/` versions |
| `ai-tools/ai-skills/cleanup-quarantine-manager/SKILL.md` | File management, not content pipeline |
| `ai-tools/ai-skills/cross-agent-packager/SKILL.md` | Orchestration scaffolding, not pipeline |
| `ai-tools/ai-skills/generated-mdx-banners-governance/SKILL.md` | Banner formatting only |
| `ai-tools/ai-skills/repo-audit-orchestrator/SKILL.md` | Repo audit, not content pipeline |
| `ai-tools/ai-skills/script-footprint-and-usage-audit/SKILL.md` | Tooling audit |
| `ai-tools/ai-skills/skill-docs/SKILL.md` | Meta — skill documentation |
| `v2/_workspace/references/content-pipeline/10-prompt-input-spec.md` | Already in `prior-prompt-architecture.md` pointer |
| `v2/_workspace/references/content-pipeline/08a-ia-per-tab.md` | Already in `ia-maps-and-templates.md` pointer |

---

## Already handled — existing pointer files cover these

| File | Covered by |
|---|---|
| All `workspace/plan/active/CONTENT-WRITING/Frameworks/` files | `prompt-guides-guards-resources/frameworks-content-pipeline.md` |
| `v2/_workspace/research/content-naming.md` | `prompt-guides-guards-resources/naming-research.md` |
| `v2/_workspace/research/ai-coauthoring.md` | `prompt-guides-guards-resources/ai-coauthoring-research.md` |
| Voice rules, section naming, docs-review tiers | `prompt-guides-guards-resources/active-prompts.md` |
| `ai-tools/ai-skills/docs-copy/skills/` (all) | `prompt-guides-guards-resources/copy-skills.md` |
| `tools/config/usefulness-rubric.json`, journeys, per-pageType prompts | `prompt-guides-guards-resources/usefulness-tools.md` |
| `snippets/templates/pages/`, `docs-guide/policies/` | `prompt-guides-guards-resources/page-structure-rules.md` |
| `v2/internal/docs-philosophy.mdx`, `authoring-standard.mdx` | `prompt-guides-guards-resources/docs-philosophy-authoring.md` |
| Banned phrases/words | `prompt-guides-guards-resources/banned-copy.md` |
| Playbook + 10-prompt-input-spec | `prompt-guides-guards-resources/prior-prompt-architecture.md` |
| GB English style profile | `prompt-guides-guards-resources/style-language.md` |
| `copy-governance.md`, `deprecated-terms.md` | `prompt-guides-guards-resources/` (direct files) |
| All TERMINOLOGY-COLLATE consolidated + per-tab | `reference-sources-quality-scored/terminology-consolidated.md`, `terminology-per-tab.md` |
| `tools/config/accuracy-source-registry.json` | `reference-sources-quality-scored/accuracy-sources.md` |
| In-repo glossaries | `reference-sources-quality-scored/in-repo-glossaries.md` |
| `veracity-sources.md`, `universal-terms.md` | `reference-sources-quality-scored/` (direct files) |
| Gateway personas, community audiences, developer personas | `current-repo-resources/personas.md` |
| IA maps, site-map, community IA, TEMPLATE | `current-repo-resources/ia-maps-and-templates.md` |
| Orchestrator review, tier questions | `current-repo-resources/prior-outputs.md` |
| Page templates folder | `current-repo-resources/page-templates.md` |
| `agent-packs/skills/` (all 8) | `current-repo-resources/existing-skills.md` |
| `frontmatter-taxonomy.js`, `frontmatter-taxonomy-update.md` | `current-repo-resources/frontmatter-current-state.md` |
| Testing outputs | `current-repo-resources/testing-outputs.md` |
| `ai-tools/ai-skills/docs-copy/SKILL.md` | `current-repo-resources/existing-skills.md` (note: `ai-skills/` version — check for divergence) |
