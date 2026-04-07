# Phase 2 — Structure Audit: Resource List

**Prompt**: `structure-audit.md`
**What this phase does**: Audits the current page inventory of a tab — classifies each page, identifies gaps and orphans, validates section shape against the ideal journey from Phase 1.

---

## HOW TO USE THIS FILE

**These resources are not canonical. They are not a checklist. Do not load them by default.**

The right approach for this phase is:

1. **First-principles thinking first.** Start from the problem. What does a good structure audit actually need to evaluate? What makes a section well-structured or poorly structured, independent of any framework? Design your audit approach from first principles and design thinking before opening any file in this list.

2. **Then ask: which resources would genuinely elevate this?** After you have a first-principles approach, review the resource list below. For each file, ask: would loading this produce a meaningfully better output, or would it just add noise? Only load resources that answer yes.

3. **Test and iterate.** Run the phase with your selected resources. Evaluate the output. Record results in this phase's `testing/` folder. Update test status in this file. Promote resources that improve output quality; drop resources that don't.

The resource list below is a library of candidates — not a prescription. A first-principles approach that uses two well-chosen resources will outperform a prompt bloated with everything on this list.

---

**Testing rule**: No source is trusted until tested. See `COLLATION-PLAN.md`. Test status below reflects current state — update as tests run.

---

## Guides & Guards — Rules Constraining Output Quality

Files that tell the prompt HOW to audit and what standards to apply.

| File | Why needed | Test status |
|---|---|---|
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/01_06-Page-Taxonomy/index.md` | **Page type authority with scope boundaries.** 10 page types with word count targets, time-on-page targets, and required components. More actionable than the 7-type enum alone. ⚠️ Note: 10 types here vs 7 in Frameworks/pageType.md — reconciliation needed before production use. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` | **Linear vs on-demand position rule.** Positions 1–3 obligatory (orient, activate, first task), 4–6 on-demand (reference, troubleshooting, advanced). Audit must check that obligatory content is not buried in optional positions. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/03_05-IA-Blueprint/index.md` | IA blueprint per section. Structural reference for what each section type should contain. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` | Content taxonomy: procedural/conceptual/referential mapped to UI patterns. Use when classifying existing page content types during audit. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md` | 7 canonical page type definitions. Used for classifying pages in the audit inventory. ⚠️ Reconcile with Design Spec's 10-type set before production. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md` | 15 canonical purpose values. Used when auditing whether existing pages have coherent purposes. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | Master framework. Confirms what the audit is trying to produce. | ⬜ not tested |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/resources.md` | 12+ pageType definitions with two live structural flags: (1) two template locations with unverified alignment, (2) voice rules are operator-only. Load as a guard to prevent the audit recommending broken templates. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/frontmatter-current-state.md` | Current validator schema (old 12-type) vs pending canonical schema (7-type). Prevents the audit classifying pages against a schema the validator will reject. | ⬜ not tested |

---

## Reference Sources — Authoritative Sources for Terminology & Facts

Files that tell the prompt WHAT IS TRUE.

| File | Why needed | Test status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/reference-sources-quality-scored/universal-terms.md` | Canonical term list. Prevents audit using deprecated terminology in classifications. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md` | Deprecated terms to flag in existing page titles and section names. | ⬜ not tested |
| Per-tab glossary (relevant tab) | Tab-specific terms. Used when interpreting page titles and content during inventory. | ⬜ not tested |

---

## Repo Context — Existing Content Grounding the Prompt

Files that tell the prompt WHAT ALREADY EXISTS.

| File | Why needed | Test status |
|---|---|---|
| Phase 1 output for this tab | **Primary input.** The ideal section shape from Phase 1 is the standard against which Phase 2 audits the current state. Cannot run Phase 2 without it. | n/a (runtime dependency) |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/ia-maps-and-templates.md` | Points at orchestrators IA map (completed quality standard) and TEMPLATE (output format). Use as the quality benchmark for what a good audit looks like. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/page-templates.md` | Points at `snippets/templates/pages/` — all available page templates. Use when verifying whether a recommended page type has a template available. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/prior-outputs.md` | Points at orchestrator review and tier-questions framework. Concrete examples of what a structure audit output looks like at quality. | ⬜ not tested |
| `AGENTS.md` | Source-of-truth priority chain. Needed when resolving conflicts between page content and the canonical source (e.g., docs.json overrides a page's own nav claim). | ⬜ not tested |

---

## Pre-flight Requirements

Before running `structure-audit.md` on a tab:

- [ ] Phase 1 output exists for this tab
- [ ] Confirm which template location is authoritative (see `resources.md` flag — two locations, unverified alignment)
- [ ] Page type taxonomy reconciliation decision made (Design Spec 10-type vs canonical 7-type vs old 12-type)
- [ ] If auditing docs-guide pages (not v2 content pages): also load `workspace/plan/active/DOCUMENTATION/designing/consumer-assignments.md` — the `consumer` field applies to docs-guide pages only

---

## Known Risks (from master-resource-review.md)

- **Three competing page type sets**: Design Spec (10), canonical Frameworks (7), old validator (12). The audit will classify pages — using the wrong set makes those classifications incompatible with downstream phases. Resolve before production.
- **Linear vs on-demand position rule not in current prompt**: Obligatory content (positions 1–3) buried in optional positions (4–6) is a structural failure. The current structure-audit.md doesn't check for this.
- **`empty` vs `missing` status**: An `empty` section (folder exists, 0 pages) is distinct from `missing` (never created). Both are P0 gaps but `empty` creates live dead-end nav items. Ensure both statuses are in the audit vocabulary.
- **Routing/choice page check missing**: Tabs with multiple sub-audiences need a disambiguation page. Current audit doesn't explicitly check for its presence.
