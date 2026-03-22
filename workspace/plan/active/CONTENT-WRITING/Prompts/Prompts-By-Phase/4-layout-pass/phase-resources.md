# Phase 4 — Layout Pass: Resource List

**Prompt**: To be built — read `Prompts/deprecated/level-2-pass-b-layout.md` and `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md` before designing.
**What this phase does**: Takes approved Phase 3 content (plain markdown) and produces a production-ready MDX file — template selection, component placement, frontmatter completion, section naming check, and render validation. Does not rewrite content.

---

## HOW TO USE THIS FILE

**These resources are not canonical. They are not a checklist. Do not load them by default.**

The right approach for this phase is:

1. **First-principles thinking first.** Start from the problem. What does a well-laid-out page actually need? What makes a component choice correct, independent of any framework? Design your layout approach from first principles and design thinking before opening any file in this list.

2. **Then ask: which resources would genuinely elevate this?** After you have a first-principles approach, review the resource list below. For each file, ask: would loading this produce a meaningfully better output, or would it just add noise? Only load resources that answer yes.

3. **Test and iterate.** Run the phase with your selected resources. Evaluate the output. Record results in this phase's `testing/` folder. Update test status in this file. Promote resources that improve output quality; drop resources that don't.

The resource list below is a library of candidates — not a prescription. A first-principles approach that uses two well-chosen resources will outperform a prompt bloated with everything on this list.

---

**Testing rule**: No source is trusted until tested. See `COLLATION-PLAN.md`. Test status below reflects current state — update as tests run.

---

## ⚠️ Before Building This Phase Pack

`content-pipeline-pass-b/SKILL.md` defines a 6-phase layout workflow. Its reference files are deprecated/missing. The build task is:
1. Read `Prompts/deprecated/level-2-pass-b-layout.md` — assess what's still correct
2. Build the updated Phase 4 prompt from it (don't start from scratch)
3. Fix the skill references to point at the new Phase 4 pack files

---

## Guides & Guards — Rules Constraining Output Quality

| File | Why needed | Test status |
|---|---|---|
| `ai-tools/ai-skills/content-pipeline-pass-b/SKILL.md` | **Workflow definition.** 6-phase layout process, validation checklist, failure modes, component decision constraints. The Phase 4 prompt must align with this. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md` | Required components per page type. `tutorial` requires Steps + CodeBlock + Tabs. `overview` requires Prose + Cards. Use for component selection decisions. ⚠️ Layout patterns section is partially incomplete (stubs only for 8 of 10 types) — use `snippets/templates/pages/` as authoritative source for page layout, not this doc. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/03_08-Composable-Content-Guide/index.md` | Shared/external/derived content rules. Required when a section could be a Mintlify snippet vs inline vs a link. Use the shared/external/derived rules section only — skip implementation details. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` | Section naming rubric. Pass B Phase 5 checks every `##` and `###` heading against this. Required. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/page-structure-rules.md` | Points at `snippets/templates/pages/` (all page templates), `page-composition-framework.mdx`, and layout decision policies. **Primary template authority** — use instead of the Design Spec layout patterns stubs. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/frontmatter-current-state.md` | Current validator schema vs pending canonical schema. **Critical**: Phase 4 must produce frontmatter that passes the validator. Until `frontmatter-taxonomy.js` is updated, use old schema values. Tag new-schema outputs clearly. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | Master framework. Confirms canonical enum values for frontmatter fields. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md` | British English enforcement and canonical terminology. Phase 4 render validation includes UK English check. | ⬜ not tested |

---

## Reference Sources — Authoritative Sources for Terminology & Facts

Phase 4 is primarily structural — it doesn't write content. Reference source dependency is lower than Phase 3, but frontmatter taxonomy values must be canonical.

| File | Why needed | Test status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/reference-sources-quality-scored/universal-terms.md` | Canonical terms must appear in page titles, descriptions, and section headings produced by Phase 4. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md` | Deprecated terms must not appear in titles, descriptions, or headings. | ⬜ not tested |

---

## Repo Context — Existing Content Grounding the Prompt

| File | Why needed | Test status |
|---|---|---|
| Phase 3 output for this page | **Primary input.** Phase 4 takes approved Phase 3 content. Will not run without it. | n/a (runtime dependency) |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/page-templates.md` | Points at `snippets/templates/pages/`. Template selection is Phase 4 Phase 1 — the correct template must be loaded for the page's pageType + pageVariant. | ⬜ not tested |
| `AGENTS.md` | Source-of-truth priority chain. If an MDX link target is ambiguous, the priority chain determines which source wins. | ⬜ not tested |

---

## Pre-flight Requirements

Before running Phase 4 on a page:

- [ ] Phase 3 output is approved (Pass B will not run on unapproved Pass A output)
- [ ] Phase 3 output includes content type classification (procedural/conceptual/referential) for every section — this is Phase 4's input for component selection
- [ ] `frontmatter-taxonomy.js` update status confirmed — if still on old schema, use old enum values and tag new-schema values with `{/* REVIEW: new schema — pending validator update */}`
- [ ] Correct template file loaded from `snippets/templates/pages/` for this pageType + pageVariant

---

## Known Risks (from master-resource-review.md)

- **Frontmatter validator is a CI blocker**: `frontmatter-taxonomy.js` uses old 12-type schema. Phase 4 output using new canonical values will fail pre-commit validation. The update spec is written (`Frameworks/frontmatter-taxonomy-update.md`) but not yet implemented. Do not run Phase 4 in production until this is resolved or tag all new-schema frontmatter as draft.
- **Page Taxonomy layout patterns section is incomplete**: For 8 of 10 page types, the Design Spec's layout patterns are stubs. Use `snippets/templates/pages/` as the authoritative template source — not the Design Spec.
- **Two template location problem**: `CONTENT-STRUCTURE-TEMPLATES/resources.md` flags two template locations with unverified alignment. Confirm which is authoritative before running Phase 4. Using the wrong template produces inconsistent layout output.
- **`{/* REVIEW: */}` flags must pass through**: Pass B must not remove Pass A's REVIEW flags. If any unresolved flags remain, the page ships as `status: draft`, not `status: current`.
