# Master Resource Review — Pipeline Recommendations & Risks

**Written**: March 2026
**Purpose**: Surface everything the deep scan found that bears on the four prompt phases. Recommendations to add, risks to avoid, and gaps to close — per phase.

---

## Critical Finding: Phases 3 and 4 Already Exist as Skills

**Before designing Phase 3 and Phase 4 prompt packs, read this.**

`ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` and `content-pipeline-pass-b/SKILL.md` are fully built skills for the content pass (Phase 3) and layout pass (Phase 4) respectively. They define phases, deliverables, validation checklists, and failure modes.

**But they are broken.** Both skills load reference files that no longer exist at the expected paths:

| Skill | Loads | Status |
|---|---|---|
| Pass A | `workspace/plan/active/CONTENT-WRITING/Prompts/level-2-pass-a-content.md` | **DEPRECATED** — file is in `/deprecated/` subfolder |
| Pass A | `workspace/plan/active/CONTENT-WRITING/framework.md` | **MISSING** — no file at this path |
| Pass A | `workspace/plan/active/CONTENT-WRITING/veracity.md` | **WRONG PATH** — exists at `Frameworks/veracity.md` |
| Pass B | `workspace/plan/active/CONTENT-WRITING/Prompts/level-2-pass-b-layout.md` | **DEPRECATED** — file is in `/deprecated/` subfolder |

**The risk**: If we build Phase 3 and Phase 4 from scratch without checking the deprecated files, we duplicate work we've already done. Read `Prompts/deprecated/level-2-pass-a-content.md` and `level-2-pass-b-layout.md` before building the Phase 3 and 4 packs.

**Recommendation**: Phase 3 and 4 work is: (1) read the deprecated prompts, (2) update paths in Pass A and Pass B skills, (3) repoint to the new Phase 3/4 prompt files once built. Don't start from zero.

---

## Phase 1 — Audience Design (`audience-design.md`)

### P0 — The Design Spec audience file supersedes what's in current personas

**Found in**: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01.../index.md`

The Design Spec defines 7 network functions and 7 Livepeer-specific personas, each with: activation moment, primary function, self-identification label, pain point, docs home tab, and what other tabs they need. This is more comprehensive and more authoritative than the gateway personas file currently in `personas.md`.

**Key rule in the Design Spec**: "Route by goal, not by label." Someone who self-identifies as "developer" could be any of 4 different personas. The docs don't ask what you are — they ask what you want to do.

**The problem**: `audience-design.md` has no self-identification routing logic. It asks AI to derive personas but doesn't account for the fact that the same label ("developer", "operator") maps to radically different use cases.

**Recommendation**: Add the Design Spec persona matrix as a required reference for Phase 1. Add a self-identification → goal routing check: "What label will this audience use to self-identify? Does that label map cleanly to one persona or could it route to 2–3 different ones? If ambiguous, design a disambiguation page."

---

### P0 — Developer disambiguation routing table is missing entirely

**Found in**: `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02.../index.md`

The Design Spec includes a full routing table for developer subtypes — because "developer" is the single most ambiguous self-identification label in the site. The routing table maps intent signals to persona types, and from persona types to the correct tab.

**The problem**: Neither `audience-design.md` nor any current Phase 1 reference handles the developer disambiguation case.

**Risk**: Any tab that could attract developer-labelled visitors (Developers, Solutions, Gateways) will design for a monolithic "developer" persona rather than routing them correctly.

**Recommendation**: Load the developer disambiguation routing table as a Phase 1 reference specifically for tabs that touch developer-labelled audiences.

---

### P1 — Strategic goals and problem statements provide grounding context

**Found in**: `v2/internal/overview/strategic-alignment.mdx` (6 goals) and `v2/internal/rfp/problem-statements.mdx` (4 core problems)

The 6 strategic goals (G1–G6) define what the docs are trying to achieve at the system level. The 4 problem statements define what was wrong with v1 and what v2 fixes. Together they prevent Phase 1 from designing for a tab in isolation, disconnected from the site's purpose.

**Recommendation**: Include as Phase 1 background context (not a primary input — context only). Prevents audience design that contradicts the site's strategic direction.

---

### P1 — Network function overlap reality needs to be visible

**Found in**: `02_Audience-&-Personas/01.../index.md`

The Design Spec includes a "Real-World Actor" table showing that platform builders (like Daydream) perform Consume + Route + Provide workloads simultaneously — touching Solutions, Gateways, and Developers. The more engaged someone is, the more tabs they need.

**The problem**: Audience design currently treats personas as single-tab inhabitants. Multi-tab actors exist and designing without them produces incomplete content.

**Recommendation**: Phase 1 should ask: "Does any persona for this tab also need content from other tabs? If yes, which tabs do they cross into, and where does this tab's responsibility end?"

---

### P2 — Community research shows 20 JTBDs possible per tab

**Found in**: `v2/community/_workspace/community-tab-02-audience-and-purpose.md`

The community audience analysis produced 20 jobs-to-be-done. If audience-design.md doesn't scope JTBD discovery, AI can produce arbitrarily long lists that aren't useful.

**Recommendation**: Add a JTBD count guidance rule — "aim for 5–12 jobs per audience type; if you reach 15+, challenge whether some are duplicates or sub-tasks."

---

## Phase 2 — Structure Audit (`structure-audit.md`)

### P0 — Page Taxonomy doc provides word count targets and time-on-page targets not in current references

**Found in**: `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md`

The Page Taxonomy defines 10 page types with: job, target time-on-page, word range, and required components. Example: `overview` = 2–4 min, 300–800 words, required: Prose + Cards (routing). `tutorial` = 10–30 min, 500–1500 words, required: Steps + CodeBlock + Tabs.

This is more actionable than the 7-type enum in `Frameworks/pageType.md` because it includes scope boundaries (word counts) and layout requirements (required components).

**The problem**: The Design Spec uses 10 types; `Frameworks/pageType.md` uses 7 canonical types. These are not aligned. Before using either in structure-audit.md, the discrepancy needs resolving — which set is authoritative?

**Risk**: Running structure-audit.md against pages using one taxonomy while the validator (`frontmatter-taxonomy.js`) uses another will produce inconsistent classifications.

**Recommendation**: Reconcile the two page type sets before the structure audit runs in production. The 7-type canonical set is the intended direction; check whether the Design Spec's 10-type set was written before or after the canonical consolidation.

---

### P0 — IA Framework defines 6 page purposes with position logic not captured in current prompts

**Found in**: `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md`

The IA Framework defines 6 page purposes with a key structural rule: positions 1–3 in a section are **obligatory** (orientation, activation, first task), and positions 4–6 are **on-demand** (reference, troubleshooting, advanced). Users who don't need positions 4–6 should never be routed through them.

**The problem**: `structure-audit.md` audits page inventory and section shape but doesn't apply this linear vs on-demand position rule. An audit could pass a section that buries the activation page at position 5.

**Recommendation**: Add to Phase 2 structure audit — mandatory check: "Map the section's pages to positions 1–6. Are positions 1–3 obligatory (orient, activate, first task)? Are 4–6 optional (reference, advanced, troubleshooting)? Flag if obligatory content is in optional positions."

---

### P1 — CONTENT-STRUCTURE-TEMPLATES/resources.md flags a live structural risk

**Found in**: `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/resources.md`

This file flags two risks directly relevant to Phase 2:
1. Two template locations exist (`snippets/templates/pages/` and another location) with **unverified alignment** — the same pageType may have different template specs in two places
2. Voice rules in the copy skills are **operator-only** — they weren't designed for developer, delegator, or community audiences

**Recommendation for Phase 2**: Add a pre-flight check — "Before auditing page structure, confirm which template location is authoritative for this pageType." Add a note to Phase 3 that voice rules from `copy-skills.md` only cover operator audiences; other audiences need extended rules.

---

### P1 — Journey-derived IA blueprint flags "Choose Your Integration Path" as most critical page

**Found in**: `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04-IA-Journey-Derived-IA/index.md`

The Design Spec explicitly calls out the choice/routing page as the single most important page in the developer journey — because without it, users pick the wrong path and fail. This is currently not surfaced in structure-audit.md.

**Recommendation**: Add to Phase 2 structure audit — "Does this section have a routing/choice page? For tabs with multiple sub-audiences or multiple entry paths, this is mandatory, not optional."

---

### P1 — Composables research defines 9 information types with purpose mapping

**Found in**: `workspace/plan/active/COMPONENT-GOVERNANCE/Research/composables-research.md`

9 information types are defined with purpose→type mapping and 14 composable component candidates. This is a more granular information type taxonomy than is currently in the structure or content passes.

**Recommendation**: Load as a Phase 2 and Phase 3 reference for information type classification. Reconcile with the procedural/conceptual/referential taxonomy in the Design Spec's Content Taxonomy file before use.

---

### P2 — docs-quality-and-freshness-audit skill covers overlap with structure audit

**Found in**: `ai-tools/ai-skills/docs-quality-and-freshness-audit/SKILL.md`

This skill audits quality and freshness. It likely overlaps with `structure-audit.md` in scope. Check before building the Phase 2 pack to understand what it already does and what it doesn't.

**Recommendation**: Read the skill before finalising Phase 2 pack contents. May be reusable or may need to be flagged as superseded.

---

## Phase 3 — Content Pass (not yet built)

### P0 — Pass A is built; use it as the base, don't rebuild from scratch

**Found in**: `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md`

Pass A defines a 7-phase content review/write workflow:
1. Context block collection (MODE, PAGE_TYPE, AUDIENCE, PURPOSE)
2. Pre-flight (purpose statable, adjacency coherent, scope single)
3. Brief read/confirm
4. Audience fit (knowledge level, persona fit, register)
5. Purpose check (does the page deliver its stated PURPOSE?)
6. Information type audit (tag every section, check permitted types for pageType)
7. Voice check (universal blocking rules + audience-specific from voice-rules.md)
8. Veracity check (flag very-high and high standard claims)
9. Structure check (sequence, handoffs, orphans)

Pass A requires a **tab map** (`v2/[tab]/_workspace/tab-map.md`) before running. If it doesn't exist, Pass A cannot determine journey context.

**Action**: Read `Prompts/deprecated/level-2-pass-a-content.md` (the full prompt Pass A loads). Assess whether it's still correct or needs updating. Then rebuild Phase 3 pack around it rather than from scratch.

---

### P0 — Brand & Copy Guide is the canonical voice authority

**Found in**: `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md`

The Brand & Copy Guide defines:
- **Voice identity**: "knowledgeable colleague" — not professor, not marketer, not chatbot
- **4 values**: transparent (state what works and doesn't), candid (honest about tradeoffs), performant (dense with useful information, no filler), inclusive (accessible to non-insiders)
- **Point of view**: second person for instructions, third person for system descriptions, never first person plural
- **British English**: en-GB required, enforced by cspell.json and style-and-language-homogenizer
- **Canonical terminology table**: orchestrator (not "node operator"), gateway (not "broadcaster"), delegation (not "staking" for delegators), LPT, go-livepeer, Explorer, pipeline, BYOC

**The problem**: `voice-rules.md` in the current Prompts folder covers per-audience voice rules. But the Brand & Copy Guide is the foundational layer that `voice-rules.md` should build on top of. If Phase 3 loads `voice-rules.md` without the Brand & Copy Guide, it gets audience-specific rules without the universal base.

**Recommendation**: Load the Brand & Copy Guide as the base voice reference in Phase 3, with `voice-rules.md` layered on top for audience-specific rules. Don't use voice-rules.md alone.

---

### P1 — Gateways has a Tier 1/2/3 source hierarchy — other tabs don't

**Found in**: `v2/gateways/resources/research-sources.md`

The gateways tab has a documented source hierarchy for verifying claims. Most other tabs do not have a tab-specific equivalent.

**Risk**: Phase 3 veracity checking will be inconsistent across tabs — gateways will have source grounding, others won't.

**Recommendation**: When running Phase 3 on gateways, load this file. For other tabs, note in the Phase 3 pack that tab-specific source hierarchies are missing and flag claims for human verification.

---

### P1 — Pass A requires tab maps that may not exist for all tabs

**Found in**: `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` (constraint line)

Pass A requires `v2/[tab]/_workspace/tab-map.md` before running. The `content-pipeline-tab-map` skill generates these.

**Risk**: Tab maps may not exist for all tabs. Pass A will run without journey context and produce lower-quality output.

**Recommendation**: Before running Phase 3 on any tab, check whether `v2/[tab]/_workspace/tab-map.md` exists. If not, run the `content-pipeline-tab-map` skill first.

---

### P1 — Content taxonomy: procedural/conceptual/referential needs to be in Phase 3 rules

**Found in**: `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md`

The Content Taxonomy maps the three content types (procedural/conceptual/referential) to specific UI patterns. This is the bridge between Phase 3 (what the content is) and Phase 4 (which component to use). Phase 3 should classify every section using this taxonomy so Phase 4 has the information it needs.

**Recommendation**: Add content type classification (procedural/conceptual/referential) as a Phase 3 output requirement. This is currently in Pass A's information type audit (Phase 6) but not explicitly linked to the content taxonomy.

---

### P2 — Developer research briefs contain real audience pain points not in current persona files

**Found in**: `v2/developers/_workspace/context-data/Developers_new/brief-01-research-report.md`

Developer research briefs cover the developer landscape, the SDK→API→protocol layer model, and real pain points sourced from research. This supplements the gateway personas (sourced from Discord/GitHub) with developer-specific grounding.

**Recommendation**: Load brief-01 for developer-tab Phase 3 work. Don't use the Design Spec developer persona alone — it provides the classification; the briefs provide the pain points.

---

## Phase 4 — Layout Pass (not yet built)

### P0 — Pass B is built; use it as the base, don't rebuild from scratch

**Found in**: `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md`

Pass B defines a 6-phase layout workflow:
1. Template selection (match pageType + pageVariant to template from `snippets/templates/pages/`)
2. Section structure mapping (map every content section to a template slot)
3. Component selection (apply component decision rules)
4. Frontmatter completion (produce complete frontmatter with canonical enum values)
5. Section naming check (check every `##` and `###` against naming rubric, flag generic structure words)
6. Render validation (MDX syntax, component validity, link paths, UK English)

Pass B explicitly does not rewrite content — if content changes are needed, it returns to Pass A.

**Action**: Read `Prompts/deprecated/level-2-pass-b-layout.md`. Assess, update, and rebuild Phase 4 pack around it.

---

### P0 — Frontmatter validator uses old schema; new-schema pages will fail CI

**Found in**: `current-repo-resources/frontmatter-current-state.md`

`tools/lib/frontmatter-taxonomy.js` still uses the old 12-type pageType schema. Pages using new canonical values (navigation, instruction, resource, orient, build) will fail automated validation. `Frameworks/frontmatter-taxonomy-update.md` has the exact spec for the update but it's marked "ready to implement" — not done.

**Risk**: Phase 4 will produce frontmatter with new canonical values. Those pages will fail the pre-commit validator.

**Recommendation**: Update `frontmatter-taxonomy.js` before running Phase 4 in production. This is a blocker, not a nice-to-have. The update spec is already written — it just needs executing.

---

### P1 — Page Taxonomy layout patterns section is partially incomplete

**Found in**: `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md`

The Page Taxonomy doc defines page types and their required components, but the layout patterns section has stubs for most page types after `overview`. The section headings exist but the content describing section order, required slots, and forbidden elements is missing for `concept`, `tutorial`, `how_to`, `guide`, `reference`, `faq`, `troubleshooting`, `glossary`.

**Risk**: Phase 4 component selection and template mapping has incomplete design authority for 8 of 10 page types.

**Recommendation**: Before running Phase 4 on non-overview/non-landing pages, use `snippets/templates/pages/` as the authoritative template source (not the Design Spec), and flag that the Design Spec's layout patterns section is incomplete.

---

### P1 — Composable content rules define shared/external/derived content handling

**Found in**: `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/03_08-Composable-Content-Guide/index.md`

Defines rules for content that appears in multiple places (shared), content pulled from external sources (external), and content computed/derived at render time (derived). Phase 4 needs these rules when deciding whether a section should be a Mintlify snippet vs inline vs a link.

**Recommendation**: Load composable content rules as a Phase 4 reference for component selection decisions involving reused content.

---

## Cross-Cutting Issues

### Tab map dependency chain

`content-pipeline-tab-map` → Pass A → Pass B. The tab map is the foundation of the whole Phase 3+4 pipeline. If it doesn't exist, both downstream passes degrade. Create tab maps before running Phase 3 on any tab.

### Two template location problem

`CONTENT-STRUCTURE-TEMPLATES/resources.md` flags that templates exist in two locations with unverified alignment. Before Phase 4 runs, confirm which template location is authoritative per pageType. **Mixing up template sources will produce inconsistent layout output.**

### Voice rules are operator-only

The copy skills (`ai-tools/ai-skills/docs-copy/skills/`) were built for operator audiences (gateways, orchestrators). They are not appropriate for developer, delegator, or community audiences without extension. Using them for non-operator tabs without modification is a P0 risk.

### British English enforcement chain

The Brand & Copy Guide mandates en-GB. `cspell.json`, `style-language-profile-en-gb.json`, and `style-and-language-homogenizer-en-gb.js` enforce it. The `style-and-language-homogenizer-en-gb` skill exists and should run as the Phase 4 final gate — not a manual check.

### Design Spec page type count vs Frameworks page type count

Design Spec: 10 types. `Frameworks/pageType.md`: 7 canonical types. `frontmatter-taxonomy.js`: 12 types (old). Three different numbers. This needs a single canonical decision before any of the phases can use page type classification reliably.

---

## Summary Decision Table

| Issue | Phase | Priority | Action |
|---|---|---|---|
| Read deprecated level-2 prompts before building Phase 3/4 | 3, 4 | P0 | Read `Prompts/deprecated/level-2-pass-a-content.md` and `level-2-pass-b-layout.md` |
| Fix broken skill references in Pass A and Pass B | 3, 4 | P0 | Update file paths in both skill files after Phase 3/4 packs are created |
| Load Design Spec audience matrix as Phase 1 reference | 1 | P0 | Add `02_Audience-&-Personas/01.../index.md` to Phase 1 resource list |
| Add developer disambiguation routing table | 1 | P0 | Add `02_Audience-&-Personas/02.../index.md` to Phase 1 resource list |
| Add linear vs on-demand position check to structure audit | 2 | P0 | Add `03_IA-Framework/01.../index.md` rule to Phase 2 prompt |
| Reconcile 3 page type taxonomies before production | 2, 4 | P0 | Design Spec (10) vs Frameworks (7) vs validator (12) — single canonical set needed |
| Update frontmatter-taxonomy.js before Phase 4 production run | 4 | P0 | The update spec exists (`Frameworks/frontmatter-taxonomy-update.md`) — just needs executing |
| Add Brand & Copy Guide as Phase 3 base voice layer | 3 | P0 | Load `05_Brand,-Copy,-Style/01.../index.md` in Phase 3 pack under voice-rules.md |
| Confirm which template location is authoritative | 2, 4 | P1 | Check `snippets/templates/pages/` vs second location — unresolved in `resources.md` |
| Check tab maps exist before Phase 3 runs | 3 | P1 | Pre-flight gate in Phase 3 pack |
| Extend voice rules beyond operator audiences | 3 | P1 | Before running Phase 3 on non-operator tabs, note that operator-only voice rules do not apply |
| Add routing/choice page check to structure audit | 2 | P1 | "Does this section have a disambiguation/routing page?" |
| Load composable content rules in Phase 4 | 4 | P1 | Load `04_UX/.../03.../index.md` for component decisions involving reused content |
| Note that Page Taxonomy layout patterns are incomplete | 4 | P1 | Use `snippets/templates/pages/` as authoritative source for page layout, not the Design Spec stubs |
| Load gateway source hierarchy for Phase 3 gateway work | 3 | P2 | `v2/gateways/resources/research-sources.md` — gateways only |
| Load developer research briefs for Phase 3 developer work | 3 | P2 | `brief-01-research-report.md` (Developers_new) |
