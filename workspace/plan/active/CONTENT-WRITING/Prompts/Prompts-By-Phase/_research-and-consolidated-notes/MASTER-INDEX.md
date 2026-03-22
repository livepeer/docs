# Master Index — Content Writing Collation

**Purpose**: Single table of every content-writing-adjacent file in the repo, sorted by type and folder. Status assessed in Task 2 — items marked `useful` or `partial` are candidates for loading into prompt reference folders.
**Last updated**: 2026-03-22 (Task 2 assessment complete)
**Pointer files location**: `_research-and-consolidated-notes/{type-folder}/`

---

## Status key

| Status | Meaning |
|---|---|
| `useful` | Load into prompt references — directly governs or grounds output |
| `partial` | Specific sections useful — see pointer file for what to extract |
| `superseded` | Replaced by a newer file — do not load |
| `deprecated` | Explicitly retired |
| `n/a` | Not relevant to the content writing pipeline |

---

## Phase 1 priority (load before running `audience-design.md`)

These are the files a prompt needs to produce a reliable Phase 1 output. Pull from the pointer files in this folder.

| What | File | Why |
|---|---|---|
| Audience + persona definitions | `Frameworks/content-pipeline-framework.md` | Agreed audience tokens, persona format, lifecycle stages |
| Tab ownership map | `Previous Prompts Used/site-map/site-map.md` | Cross-tab ownership gate — prevents overclaiming |
| Locked section vocabulary | `Previous Prompts Used/derive-ia/08a-ia-per-tab.md` | What sections are canonical (portal, quickstart, guides, etc.) |
| IA map quality example | `Previous Prompts Used/derive-ia/orchestrators-ia-map.md` | Shows what a finished Phase 1 output looks like |
| IA map output template | `Previous Prompts Used/derive-ia/TEMPLATE-tab-ia-map.md` | Format AI should produce |
| Gateway personas (sourced) | `Previous Prompts Used/personas-and-journeys/personas.md` | Only fully-sourced persona file in repo |
| Deprecated terms to avoid | `prompt-guides-guards-resources/deprecated-terms.md` | Prevents using Broadcaster, Combined mode, old audience tokens |
| Universal terms | `reference-sources-quality-scored/universal-terms.md` | ~25 terms that must be defined consistently everywhere |
| Relevant per-tab glossary | `TERMINOLOGY-COLLATE/per-tab/glossary-{tab}.md` | Correct terminology for the specific tab being designed |
| Journey definitions | `tools/config/usefulness-journeys.json` | Validated audience journey stages |

---

## Prompt Guides and Guards

Files that govern how prompts write — rules, constraints, frameworks, quality standards.

| File | Pointer | Phase | Status | Notes |
|---|---|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | `frameworks-content-pipeline.md` | all | **useful** | Master decisions log — agreed schema, field statuses |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md` | `frameworks-content-pipeline.md` | all | **useful** | 7-type enum with variants — locked canonical |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md` | `frameworks-content-pipeline.md` | all | **useful** | 15-value purpose enum — locked canonical |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/complexity.md` | `frameworks-content-pipeline.md` | all | **useful** | complexity + lifecycleStage calibration — agreed |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/information-type.md` | `frameworks-content-pipeline.md` | 3 | **partial** | Draft — section-level taxonomy useful for Phase 3 content pass |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/industry.md` | `frameworks-content-pipeline.md` | all | **useful** | industry + niche — locked. Makes domain-anchor rule enforceable |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` | `frameworks-content-pipeline.md` | 3 | **partial** | Draft — veracityStatus standards useful for Phase 3 review |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` | `frameworks-content-pipeline.md` | 3 | **useful** | 45-source library mapping sources to info type + veracity standard |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/prompt-input-spec.md` | `frameworks-content-pipeline.md` | all | **partial** | Draft — interface contracts still useful; pipeline structure partially superseded by Prompts-By-Phase |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md` | `current-repo-resources/frontmatter-current-state.md` | all | **useful** | Critical: exact changes needed before Phase 2 audit can run correctly |
| `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | `active-prompts.md` | 3 | **useful** | Per-audience voice rules — locked. Load for Phase 3 content pass |
| `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` | `active-prompts.md` | 3,4 | **useful** | Naming rubric — locked. Step 16 enrichment pending but usable now |
| `workspace/plan/active/CONTENT-WRITING/Prompts/docs-review-prompt-tiers.md` | `active-prompts.md` | 2 | **useful** | Tier selection + 20% context rule for Phase 2 review |
| `v2/_workspace/research/content-naming.md` | `naming-research.md` | 3,4 | **partial** | Large (687 lines) — load `section-naming.md` instead; use this for edge-case reasoning |
| `v2/_workspace/research/ai-coauthoring.md` | `ai-coauthoring-research.md` | 3 | **partial** | Lines 53–61 (info type classification) and 95–100 (domain-anchor rationale) are the useful parts |
| `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` | `copy-skills.md` | 3 | **useful** | Has 3-tier enforcement (blocking/warning/sign-off) + master test sentence. Complements `copy-governance.md` — load both |
| `ai-tools/ai-skills/docs-copy/skills/structure-rules.md` | `copy-skills.md` | 3 | **partial** | 7-step page sequence is operator-specific (not general). Useful for orchestrator/gateway content only |
| `ai-tools/ai-skills/docs-copy/skills/persona-routing.md` | `copy-skills.md` | 3 | **useful** | Routing logic for applying audience-specific rules — load for Phase 3 |
| `ai-tools/ai-skills/docs-copy/skills/value-prop-check.md` | `copy-skills.md` | 3 | **partial** | Checklist relevant for `founder` and `solutions` audiences; too narrow for general use |
| `ai-tools/ai-skills/docs-copy/reference/phrase-mapping.md` | `copy-skills.md` | 3 | **useful** | Banned/acceptable phrase pairs — distinct from copy-governance.md's explanations |
| `tools/config/usefulness-rubric.json` | `usefulness-tools.md` | 2,3 | **useful** | Scoring rubric — dimensions, weights, pass/fail thresholds for content quality |
| `tools/config/usefulness-journeys.json` | `usefulness-tools.md` | 1,2 | **useful** | Validated journey definitions per audience — load for Phase 1 |
| `tools/config/usefulness-llm-tiers.json` | `usefulness-tools.md` | 2,3 | **partial** | LLM tier definitions — useful for calibrating review depth, not for content rules |
| `tools/lib/docs-usefulness/prompts/` (10 files) | `usefulness-tools.md` | 2,3 | **partial** | Old pageType naming (how_to, landing). Map to new 7-type system before using |
| `tools/config/style-language-profile-en-gb.json` | `style-language.md` | 3,4 | **useful** | GB English profile — machine-enforceable complement to copy-governance.md voice rules |
| `tools/config/cspell.json` | `style-language.md` | 4 | **useful** | Spell check with Livepeer-specific dictionary — Phase 4 automated gate |
| `snippets/templates/pages/page-composition-framework.mdx` | `page-structure-rules.md` | 4 | **useful** | Valid layout patterns and component placement rules — Phase 4 structure check |
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | `page-structure-rules.md` | all | **partial** | Published framework — foundational but uses old 12-type schema. Cross-reference with `Frameworks/pageType.md` |
| `docs-guide/policies/component-layout-decisions.mdx` | `page-structure-rules.md` | 4 | **useful** | Which components are appropriate in which layouts — Phase 4 layout check |
| `docs-guide/policies/quality-gates.mdx` | `page-structure-rules.md` | all | **n/a** | CI/pre-commit gates (git hooks, build checks) — not a content quality tool |
| `v2/internal/docs-philosophy.mdx` | `docs-philosophy-authoring.md` | 1 | **partial** | RFP framing — "documentation is infrastructure" thesis. Background context for Phase 1, not a loadable rule |
| `v2/resources/documentation-guide/authoring-standard.mdx` | `docs-philosophy-authoring.md` | 3 | **useful** | Practical writing standards for this site — load for Phase 3 before content pass |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/docs-section-planning-playbook.md` | `prior-prompt-architecture.md` | 1 | **partial** | Superseded as a running prompt. P0 lessons (glossary-first, quickstart/setup/ops separation) still apply — flag in Phase 1 prompt context |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/10-prompt-input-spec.md` | `prior-prompt-architecture.md` | all | **superseded** | Replaced by `Frameworks/prompt-input-spec.md` and Prompts-By-Phase structure |
| `tools/lib/copy-governance/banned-words.txt` | `banned-copy.md` | 3 | **useful** | Machine-readable — used by automated gate. Load for Phase 3 |
| `tools/lib/copy-governance/banned-phrases.txt` | `banned-copy.md` | 3 | **useful** | Machine-readable — used by automated gate. Load for Phase 3 |
| `…/prompt-guides-guards-resources/copy-governance.md` | (full file in folder) | 3 | **useful** | Human-readable with reasons — load alongside copy-rules.md; they are complementary |
| `…/prompt-guides-guards-resources/deprecated-terms.md` | (full file in folder) | all | **useful** | Load for ALL phases — prevents using deprecated role terms and conflicted enum values |

---

## Reference Sources

Authoritative sources for verifying terminology and factual claims.

| File | Pointer | Phase | Status | Notes |
|---|---|---|---|---|
| `workspace/plan/active/TERMINOLOGY-COLLATE/consolidated/glossary-index.md` | `terminology-consolidated.md` | all | **useful** | 480-term master. Section 4 (draft/unverified terms) is a guard: do not use those terms |
| `workspace/plan/active/TERMINOLOGY-COLLATE/consolidated/glossary-a-m.md` | `terminology-consolidated.md` | all | **useful** | Full consolidated glossary A–M |
| `workspace/plan/active/TERMINOLOGY-COLLATE/consolidated/glossary-n-z.md` | `terminology-consolidated.md` | all | **useful** | Full consolidated glossary N–Z |
| `workspace/plan/active/TERMINOLOGY-COLLATE/classified-by-tab.md` | `terminology-consolidated.md` | 1,2,3 | **useful** | Cross-tab ownership table — load for Phase 1 cross-tab gate |
| `workspace/plan/active/TERMINOLOGY-COLLATE/research.md` | `terminology-consolidated.md` | all | **useful** | Known conflicts and deprecated terms — load before using any flagged term |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-home.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Home tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-about.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for About tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-solutions.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Solutions tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-developers.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Developers tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-gateways.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Gateways tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-orchestrators.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Orchestrators tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-lpt.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for LP Token tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-community.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Community tab |
| `workspace/plan/active/TERMINOLOGY-COLLATE/per-tab/glossary-resources.md` | `terminology-per-tab.md` | 1,3 | **useful** | Load when writing for Resources tab |
| `v2/gateways/resources/glossary.mdx` | `in-repo-glossaries.md` | 3 | **partial** | Only ~15 terms — supplement with per-tab glossary |
| `v2/orchestrators/resources/glossary.mdx` | `in-repo-glossaries.md` | 3 | **useful** | ~35 terms — current and verified |
| `v2/resources/livepeer-glossary.mdx` | `in-repo-glossaries.md` | 3 | **partial** | Stub (~80 terms) — **unverified**. Do not use as primary source |
| `tools/config/accuracy-source-registry.json` | `accuracy-sources.md` | 3 | **useful** | Source authority registry — load for Phase 3 veracity check |
| `tools/config/accuracy-source-weights.json` | `accuracy-sources.md` | 3 | **partial** | Weighting useful for LLM evaluator; not needed for manual review |
| `…/reference-sources-quality-scored/veracity-sources.md` | (full file in folder) | 3 | **useful** | Load for Phase 3 — tells AI where to verify each claim type |
| `…/reference-sources-quality-scored/universal-terms.md` | (full file in folder) | all | **useful** | Load for ALL phases — ~25 terms that must be consistent everywhere |

---

## Current Repo Resources

Existing repo content that grounds prompts in real context.

| File | Pointer | Phase | Status | Notes |
|---|---|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/personas-and-journeys/personas.md` | `personas.md` | 1 | **useful** | Only fully-sourced persona file in repo — 5 gateway personas. Load for any gateway-audience Phase 1 |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/personas-and-journeys/community-tab-02-audience-and-purpose.md` | `personas.md` | 1 | **useful** | Community audience analysis with 20 JTBDs and entry vectors |
| `v2/internal/overview/personas.mdx` | `personas.md` | 1 | **partial** | Developer journey stages — less sourced than gateway personas. Use as starting point only |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/site-map/site-map.md` | `ia-maps-and-templates.md` | 1,2 | **useful** | 9-tab ownership map — load for Phase 1 cross-tab gate |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/orchestrators-ia-map.md` | `ia-maps-and-templates.md` | 1,2 | **useful** | Quality reference standard — shows what a finished Phase 1 output looks like |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md` | `ia-maps-and-templates.md` | 2 | **useful** | Locked section vocabulary — required for Phase 2 structure audit |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/TEMPLATE-tab-ia-map.md` | `ia-maps-and-templates.md` | 1 | **useful** | Output template — Phase 1 should produce output in this format |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/community-tab-04-context-and-recalibration.md` | `ia-maps-and-templates.md` | 1 | **partial** | Good example of the cross-tab gate in action — show as example, don't load as rule |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/community-tab-05-final-ia-and-pages.md` | `ia-maps-and-templates.md` | 1,2 | **partial** | Final IA example — useful as comparison, not as constraint |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review.md` | `prior-outputs.md` | 2 | **partial** | v1 — superseded by v3 for most purposes |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review-v2.md` | `prior-outputs.md` | 2 | **partial** | v2 — superseded by v3 for most purposes |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review-v3.md` | `prior-outputs.md` | 2 | **useful** | Most current orchestrator review — load as Phase 2 quality example |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/tier-questions-all-pages.md` | `prior-outputs.md` | 2,3 | **useful** | 5-tier question framework — use in Phase 2 and Phase 3 review steps |
| `snippets/templates/pages/` (folder — 15+ files) | `page-templates.md` | 4 | **useful** | Structural starting points for rewrites — load relevant template per pageType in Phase 4 |
| `ai-tools/agent-packs/skills/docs-copy/SKILL.md` | `existing-skills.md` | 3 | **partial** | Existing copy skill — check overlap with Phase 3 pipeline before loading; likely partial supersession |
| `ai-tools/agent-packs/skills/page-content-research-review/SKILL.md` | `existing-skills.md` | 3 | **partial** | Research review — may inform Phase 3 review step design |
| `ai-tools/agent-packs/skills/docs-research-packet-generation/SKILL.md` | `existing-skills.md` | 3 | **partial** | Research packet gen — useful for Phase 3 pre-work on complex pages |
| `ai-tools/agent-packs/skills/docs-change-review/SKILL.md` | `existing-skills.md` | n/a | **partial** | Post-pipeline change review — not directly part of pipeline flow |
| `ai-tools/agent-packs/skills/docs-source-verification/SKILL.md` | `existing-skills.md` | 3 | **useful** | Source verification — load for Phase 3 veracity check |
| `ai-tools/agent-packs/skills/docs-ia-route-placement/SKILL.md` | `existing-skills.md` | 2 | **useful** | IA routing — useful for Phase 2 orphan resolution |
| `ai-tools/agent-packs/skills/mintlify-authoring-style-compliance/SKILL.md` | `existing-skills.md` | 4 | **useful** | Final gate — load for Phase 4 MDX compliance check |
| `ai-tools/agent-packs/skills/style-mdx-quality-fix-playbook/SKILL.md` | `existing-skills.md` | 4 | **useful** | MDX quality fixes — Phase 4 support |
| `tools/lib/frontmatter-taxonomy.js` | `frontmatter-current-state.md` | all | **useful** | Current valid values — load to know what the validator currently accepts (old schema pending migration) |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md` | `frontmatter-current-state.md` | all | **useful** | What changes when migration runs — load alongside taxonomy.js |
| `workspace/plan/active/CONTENT-WRITING/Testing/` (folder) | `testing-outputs.md` | all | **partial** | LP Token test insight (pre-filled arriving question problem) — note in Phase 1 context; full folder not routinely loaded |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/PROMPT.md` | `testing-outputs.md` | 3 | **partial** | Domain-specific — useful only when writing orchestrator tutorial pages |

---

## Research (background — do not load into prompts)

| File | Phase | Status | Notes |
|---|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Research/research.md` | n/a | **partial** | Primary research — read for context, not prompt input |
| `workspace/plan/active/CONTENT-WRITING/Research/prompt-research.md` | n/a | **partial** | Prompt research — background |
| `workspace/plan/active/CONTENT-WRITING/Research/page-templates-survey.md` | n/a | **partial** | Template survey — background |
| `workspace/plan/active/CONTENT-WRITING/Research/copy-skills-reference.md` | n/a | **partial** | Copy skills reference — background |
| `ai-tools/ai-skills/_workspace/research/copywriting-research.md` | n/a | **partial** | Background |
| `ai-tools/ai-skills/_workspace/research/product-writing.md` | n/a | **partial** | Background |
| `ai-tools/ai-skills/_workspace/research/product-writing-research-sources.md` | n/a | **partial** | Background |
| `ai-tools/ai-skills/_workspace/examples/claude-coauthoring.md` | n/a | **partial** | Background |

---

## Deprecated (do not load into prompts)

| File | Reason |
|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/level-1-tab-map.md` | Superseded by `audience-design.md` |
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/level-2-pass-a-content.md` | Superseded by Prompts-By-Phase structure |
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/level-2-pass-b-layout.md` | Superseded by Prompts-By-Phase structure |
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/docs-tab-context-ia-prompt-general.md` | Superseded |
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/community-tab-prompt-consolidated.md` | Superseded |
| `workspace/plan/active/CONTENT-WRITING/Prompts/deprecated/PHASE: PAGE CONTENT.md` | Superseded |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/10-prompt-input-spec.md` | Superseded by `Frameworks/prompt-input-spec.md` |

---

*Next: Populate phase-specific reference folders (`1-audience-design/`, `2-structure-audit/`, etc.) with the `useful` items for each phase.*
