# Phase 3 — Content Pass: Resource List

**Prompt**: To be built — read `Prompts/deprecated/level-2-pass-a-content.md` and `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` before designing.
**What this phase does**: Reviews or rewrites the content layer of a single page — audience fit, purpose delivery, information types, voice, veracity, section structure. Does not touch MDX formatting or component selection (that is Phase 4).

---

## HOW TO USE THIS FILE

**These resources are not canonical. They are not a checklist. Do not load them by default.**

The right approach for this phase is:

1. **First-principles thinking first.** Start from the problem. What does good content for this page actually require? What makes copy serve a reader well, independent of any rules document? Design your content approach from first principles and design thinking before opening any file in this list.

2. **Then ask: which resources would genuinely elevate this?** After you have a first-principles approach, review the resource list below. For each file, ask: would loading this produce a meaningfully better output, or would it just add noise? Only load resources that answer yes.

3. **Test and iterate.** Run the phase with your selected resources. Evaluate the output. Record results in this phase's `testing/` folder. Update test status in this file. Promote resources that improve output quality; drop resources that don't.

The resource list below is a library of candidates — not a prescription. A first-principles approach that uses two well-chosen resources will outperform a prompt bloated with everything on this list.

---

**Testing rule**: No source is trusted until tested. See `COLLATION-PLAN.md`. Test status below reflects current state — update as tests run.

---

## ⚠️ Before Building This Phase Pack

`content-pipeline-pass-a/SKILL.md` defines a 7-phase content workflow that already covers this phase. Its reference files are deprecated/missing. The build task is:
1. Read `Prompts/deprecated/level-2-pass-a-content.md` — assess what's still correct
2. Build the updated Phase 3 prompt from it (don't start from scratch)
3. Fix the skill references to point at the new Phase 3 pack files

---

## Guides & Guards — Rules Constraining Output Quality

| File | Why needed | Test status |
|---|---|---|
| `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md` | **Workflow definition.** 7-phase content review/write process, deliverable formats, validation checklist, failure modes. The Phase 3 prompt must align with this. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/05_Brand,-Copy,-Style/01_09-Brand-&-Copy-Guide/index.md` | **Primary voice authority.** "Knowledgeable colleague" voice, 4 values (transparent/candid/performant/inclusive), second person for instructions, never first person plural, British English. This is the universal base that per-audience voice rules layer on top of. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | Per-audience voice rules. Load ON TOP OF the Brand & Copy Guide — not instead of it. ⚠️ Current rules cover operator audiences only; developer/delegator/community audiences need extension. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` | Veracity status framework. Defines which claim types require source verification and what verification looks like. Pass A requires this for Phase 6 (veracity check). | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/copy-governance.md` | Copy governance with explanations and reasons behind each rule. Pair with copy-rules.md for full enforcement context. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/banned-copy.md` | Points at banned-phrases.txt and banned-words.txt. Blocking rules — zero tolerance violations. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md` | Deprecated v1 terms to never use in content. | ⬜ not tested |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/02_07-Content-Taxonomy-Semantic-UI/index.md` | Content taxonomy: procedural/conceptual/referential mapped to UI patterns. Phase 3 must classify every section — this classification feeds Phase 4 component selection. | ⬜ not tested |
| `workspace/plan/active/COMPONENT-GOVERNANCE/Research/composables-research.md` | 9 information types with purpose→type mapping. More granular than procedural/conceptual/referential. Use for information type audit (Pass A Phase 6). | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | Master framework. Confirms audience, persona, and purpose definitions used in Phase 3 checks. | ⬜ not tested |

---

## Reference Sources — Authoritative Sources for Terminology & Facts

| File | Why needed | Test status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/reference-sources-quality-scored/universal-terms.md` | Canonical term list. Every content pass must use correct terminology. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/deprecated-terms.md` | Deprecated terms — must not appear in rewritten content. | ⬜ not tested |
| Per-tab glossary (relevant tab) | Tab-specific canonical terms. Load the glossary for the tab being written. | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/reference-sources-quality-scored/veracity-sources.md` | Source hierarchy for claim verification. Which sources to trust and in what order. | ⬜ not tested |
| `tools/config/accuracy-source-registry.json` | Source accuracy weights. Used in Pass A Phase 6 veracity check. | ⬜ not tested |
| **Gateways only**: `v2/gateways/resources/research-sources.md` | Tier 1/2/3 source hierarchy specific to gateways. Load when running Phase 3 on any gateways-tab page. | ⬜ not tested |
| **Developers only**: `v2/developers/_workspace/context-data/Developers_new/brief-01-research-report.md` | Developer landscape, layer model, pain points sourced from research. Load when running Phase 3 on developer-tab pages. | ⬜ not tested |

---

## Repo Context — Existing Content Grounding the Prompt

| File | Why needed | Test status |
|---|---|---|
| Phase 1 output for this tab | Audience, personas, jobs — the standard against which content is evaluated. | n/a (runtime dependency) |
| Phase 2 output for this page | Audit findings that Phase 3 must address. | n/a (runtime dependency) |
| `v2/[tab]/_workspace/tab-map.md` | **Required by Pass A before running.** Journey context — where this page sits, what comes before and after. If missing, run `content-pipeline-tab-map` skill first. | n/a (runtime dependency) |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/personas.md` | Points at sourced persona files. Check that rewritten content speaks to the right persona, not a generic "reader." | ⬜ not tested |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/current-repo-resources/prior-outputs.md` | Points at prior content review outputs (orchestrator review series). Quality benchmark for what a content pass output looks like. | ⬜ not tested |
| `AGENTS.md` | Source-of-truth priority chain. If a content claim conflicts with a higher-priority source, the higher-priority source wins. | ⬜ not tested |

---

## Pre-flight Requirements

Before running Phase 3 on a page:

- [ ] Phase 1 output exists for this tab
- [ ] Phase 2 audit output exists for this page (or section)
- [ ] Tab map exists at `v2/[tab]/_workspace/tab-map.md` — if not, run `content-pipeline-tab-map` skill first
- [ ] Per-tab glossary loaded
- [ ] If non-operator tab (developer, delegator, community): note that voice-rules.md covers operator audiences only — flag per-audience voice gaps in the output

---

## Known Risks (from master-resource-review.md)

- **Voice rules are operator-only**: `voice-rules.md` was built for gateway/orchestrator audiences. Running Phase 3 on developer, delegator, or community pages without extending voice rules will produce voice mismatches.
- **Brand & Copy Guide is the base, not voice-rules.md**: Don't load voice-rules.md alone — the Brand & Copy Guide defines the universal layer it builds on top of. Both are required.
- **Tab maps may not exist**: Pass A degrades without journey context. Check before running.
- **Content taxonomy classification is Phase 4's input**: Every section must get a content type tag (procedural/conceptual/referential) in Phase 3. If Phase 3 doesn't produce this, Phase 4 has no basis for component selection.
