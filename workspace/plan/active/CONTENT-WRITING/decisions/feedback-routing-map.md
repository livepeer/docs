# Feedback Routing Map

## Purpose

When a correction is made to a page during review, route it back to the right standards file so the next tab starts better than the first.

This implements the minimum viable version of **Layer 6 (Feedback System)** from `design-canonical.mdx`. Without this map, corrections are applied per-page but never propagate to improve the standards that generated the problem. The second tab would start at the same quality level as page 1 of the first tab.

This map is a **flag system, not an automation**. Routing a correction to a standards file is a recommendation for human action — the human decides whether the correction is isolated (fix the page only) or systemic (update the standard). The map records that the correction was reviewed and a routing decision was made.

---

## Routing Table

| Correction Type | Standards File to Update | When to Update | Who Updates |
|---|---|---|---|
| Voice/register error | `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | After Phase 6 section review | Human + docs author |
| Terminology inconsistency | `v2/[tab]/resources/glossary.mdx` + `decisions/terminology-decisions.md` | Immediately when found | Human |
| Wrong audience classification | `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` | After Phase 6 review | Human |
| Section structure error | `v2/[tab]/_workspace/tab-map.md` | Flag for Phase 3 re-audit if systematic | Human |
| Factual/veracity error | `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` | After Phase 7 | Human |
| Prompt output quality issue | Learnings file for that prompt version | After any prompt run | Documenting agent |
| Naming rubric violation | `workspace/plan/active/CONTENT-WRITING/Frameworks/section-naming.md` | After Phase 8 | Human |
| Missing information type | `workspace/plan/active/CONTENT-WRITING/Frameworks/information-type.md` | Flag for framework review | Human |

---

## Process Note

At the end of each section review (Phase 6), the reviewing agent reads all corrections made in that section and routes each one to this map. The routed update is not automatic — it is flagged for human action. The human decides whether the correction is isolated (fix the page only) or systemic (update the standard).

If the correction is systemic, the human updates the relevant standards file and records the update in `decision-registry.md`. If the correction is isolated, no standards file is updated — only the page.

A correction that is not routed through this map is invisible to future tabs. It fixes one page and teaches the system nothing.

---

## Correction Log

Empty. Populated after Phase 6 section reviews.

| Date | Tab | Correction | Systemic? | Routed To | Status |
|---|---|---|---|---|---|
