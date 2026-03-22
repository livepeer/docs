# Previous Prompts Used — Design Review

**Written**: March 2026
**Purpose**: Deep review of all files against the new audience-design.md and structure-audit.md prompts. Surfaces gaps, open questions, and patterns to incorporate.

---

## Folder Structure

```
Previous Prompts Used/
├── site-map/            — site-level ownership maps
├── personas-and-journeys/ — persona research, audience analysis
├── derive-ia/           — IA maps, section architecture, prior prompts
├── outputs/             — review outputs, page-level content work
└── other/               — framework defs, meta docs, playbooks, research
    └── research/        — source research files
```

---

## 1. What the New Prompts Are Missing

### P0 — No persona source documentation required

**Demonstrated by**: `personas-and-journeys/personas.md`

The gateway persona research was sourced from Discord `#local-gateways`, go-livepeer GitHub issues, Messari reports, community SPE proposals. Each pain point is traced to a specific source. Examples:
- Persona A (Graduate): "Off-chain mode — most new operators don't need on-chain setup for AI workloads, but docs lead with on-chain config" — confirmed via Discord
- Persona B (Provider): "Clearinghouse architecture is undocumented" — confirmed via Discord: *"Yeah that would basically be the clearinghouse..."*
- Persona C (Builder): "No documentation for remote signer protocol" — confirmed via GitHub issues

**The problem with our current prompt**: `audience-design.md` asks AI to derive personas without requiring any sourced evidence. AI will generate plausible-sounding personas that may not reflect real friction.

**Fix**: Add Phase 0 before Phase 1 — require the human to provide: where personas were sourced (Discord, GitHub, forums, etc.), 2–3 direct quotes confirming each persona's pain points, and any sources that contradict each other.

---

### P0 — No glossary-first terminology lock

**Demonstrated by**: `other/docs-section-planning-playbook.md`

The playbook documents a lesson learned the hard way:
> "Create the glossary FIRST (before Step 2). Terminology decisions affect every subsequent step. The orchestrator glossary was written mid-process and required retroactive terminology fixes across pages."

**The problem**: When personas, jobs, and sections are described with inconsistent terminology, downstream content work inherits those inconsistencies.

**Fix**: Add Phase 0.5 — define 5–10 core terms for this tab's audience before Phase 1 begins. One-sentence plain-language definitions, locked before persona work starts.

---

### P0 — No persona journey validation

**Demonstrated by**: `derive-ia/orchestrators-ia-map.md` and `outputs/orchestrator-tab-review.md`

The orchestrator review found Persona D (Enterprise) lacked a pricing strategy guide by tracing each persona through the proposed structure page by page. This gap was not visible from the section shape table alone.

**The problem**: `audience-design.md` produces a section shape table but doesn't ask the AI to walk each persona through that structure and verify they have a complete path.

**Fix**: Add Phase 3.5 (Persona Path Validation) — for each persona from Phase 1, trace their path through the selected structure, identify where they arrive, where they get stuck, what's missing.

---

### P0 — No cross-tab ownership check before design begins

**Demonstrated by**: `derive-ia/community-tab-04-context-and-recalibration.md`

The Community tab recalibration document explicitly shows 12 content areas that Community was overclaiming from other tabs. This analysis required having the full site context before designing. The recalibration reduced scope from 20 pages to 14.

**The problem**: The current prompt does include a site ownership map as a constraint, but it's a passive reference — not an active check before Phase 2 begins. There's no gate forcing the designer to run through "for each job, does another tab already own this?"

**Fix**: Add an explicit pre-Phase-2 gate: for each job-to-be-done, confirm which tab is the canonical owner. If another tab owns it, the section becomes a pointer, not a page.

---

### P1 — No verifiable exit state enforcement

**Demonstrated by**: `derive-ia/orchestrators-ia-map.md`

The IA map distinguishes between concrete exit states ("Has a running node OR joined a pool") and abstract ones ("Understands the role"). The abstract ones are useless for measuring whether the content succeeds.

**The problem**: `audience-design.md` Phase 2C asks for exit states but doesn't enforce concreteness. "Understands X" will appear constantly without this.

**Fix**: Add rule to Phase 2C — exit states may not use the word "understands." Reframe as: "can do X that requires this understanding," "has completed X," or "has decided X."

---

### P1 — `empty` is missing from section status vocabulary

**Demonstrated by**: `outputs/orchestrator-tab-review.md`

The review distinguishes between `missing` (folder never created, 0 files) and `empty` (folder skeleton exists, 0 pages). Both are P0 gaps, but the distinction matters because `empty` sections exist as nav items that produce dead ends for readers.

**Fix**: Add `empty` as a status value in `structure-audit.md` Phase 3.2 inventory.

---

### P1 — No bifurcated audience handling

**Demonstrated by**: `personas-and-journeys/personas.md`

The gateway audience is explicitly bifurcated: demand-side (gateways embedded in their own app) vs supply-side (public gateway services others connect to). The file flags this as "significant IA ambiguity" and notes it's poorly documented.

**The problem**: Neither prompt asks whether the audience contains sub-populations with fundamentally different use cases, or how to route them.

**Fix**: Add to Phase 1 — "Does your audience have sub-populations with different use cases? If yes: separate personas with separate journeys, or one persona with an explicit branch point?"

---

### P1 — No entry blocker analysis

**Demonstrated by**: `personas-and-journeys/personas.md` (Broadcaster persona)

The on-chain funding requirement is identified as a **hard stop** that blocks non-crypto users from activating — not just a pain point but a structural barrier that should change section ordering (quickstart should come before on-chain funding, not after).

**The problem**: The current prompt treats all arriving friction as "pain points." Entry blockers require a different response — they affect section order, not just content quality.

**Fix**: Add Phase 1.5 — "What are the hard-stop blockers (not pain points) that prevent a persona from activating? These determine section order."

---

### P1 — Quickstart / setup / operations separation not enforced

**Demonstrated by**: `other/docs-section-planning-playbook.md`

The playbook defines a constraint analysis that checks:
- **Quickstart**: "Can you test this without financial commitment or infrastructure decisions?"
- **Setup**: "What does production-ready actually require?"
- **Operations**: "What does day-to-day management look like?"

The Orchestrators tab mixed these, putting on-chain funding decisions inside the quickstart, which blocked the Graduate persona (who needs an off-chain path first).

**Fix**: Add to Phase 2B (Ideal Journey) — explicit checkpoint: "Is your quickstart testable without prerequisites? Or does it smuggle setup decisions in?"

---

### P2 — No entry vector documentation

**Demonstrated by**: `personas-and-journeys/community-tab-02-audience-and-purpose.md`

Each persona includes an **entry vector** — where they came from immediately before arriving at this tab (homepage, Discord invite, search result, another tab's CTA). This prevents designing a landing page that assumes the wrong referral source.

**Fix**: Add to Phase 1 Personas table — an "Entry vector" column alongside "Arriving with."

---

### P2 — No reader question per section

**Demonstrated by**: `outputs/orchestrator-tab-review.md` (Section 6, reordering recommendation)

The orchestrator review reordered guide sections by the reader's natural question sequence:
1. "Should I?" (Operator Considerations)
2. "Which path?" (Deployment Options)
3. "What do I run?" (Workloads)
4. "How do I earn?" (Staking & Rewards)

This ordering is invisible in a section shape table but immediately obvious when you assign a question to each section.

**Fix**: Add to Phase 2C — a "Reader question" column in the section shape table.

---

## 2. Open Questions the Previous Work Raised But Left Unresolved

### How do you handle content that serves unstated needs?

The orchestrator orphan analysis found pages that didn't map to any ideal section. Recommendation was "kept, merged, or removed" — but the mechanism for discovering unstated needs was human expertise, not AI analysis.

**Unresolved**: How do you distinguish "this page serves a need we haven't articulated" from "this page is noise"? The prompt currently says "flag whether it serves an unstated need" without giving the AI a method.

### How do you validate jobs-to-be-done against real user behaviour?

The playbook includes an absence detection method (Walk the Week, Interface Audit, Question Harvest) that finds jobs AI analysis misses. These require human input or observation of real users.

**Unresolved**: The current prompt generates jobs from first principles but has no validation loop against real behaviour. Jobs may be complete in the abstract but miss the most common real-world situation.

---

## 3. Patterns to Incorporate from Prior Work

| Pattern | Source | Severity | How to incorporate |
|---|---|---|---|
| Require sourced persona research | personas.md | P0 | Phase 0 — source documentation required |
| Glossary before personas | docs-section-planning-playbook.md | P0 | Phase 0.5 — lock terms before Phase 1 |
| Persona path validation | orchestrators-ia-map.md | P0 | Phase 3.5 — trace each persona through structure |
| Cross-tab gate before Phase 2 | community-tab-04 | P0 | Pre-Phase-2 gate — JTBD ownership check |
| No "understands" in exit states | orchestrators-ia-map.md | P1 | Rule in Phase 2C exit state column |
| `empty` section status | orchestrator-tab-review.md | P1 | Add to structure-audit.md Phase 3.2 |
| Bifurcated audience routing | personas.md | P1 | Phase 1 sub-population check |
| Entry blocker vs pain point | personas.md | P1 | Phase 1.5 — entry blockers affect section order |
| Quickstart / setup / ops separation | docs-section-planning-playbook.md | P1 | Phase 2B checkpoint |
| Entry vector per persona | community-tab-02 | P2 | Phase 1 Personas table — add entry vector column |
| Reader question per section | orchestrator-tab-review.md | P2 | Phase 2C section shape table — add reader question column |

---

## 4. What the New Prompts Get Right

- Persona-first order (not nav-first) — confirmed correct by all prior work
- JTBD format (when / want / so I can) — matches the playbook exactly
- Canonical lifecycle stage enum — consistent across all 13 files
- 15-value purpose enum — matches locked framework in 10-prompt-input-spec.md
- Introduce-and-link principle captured in boundary rules — About cross-tab handled correctly
- Prompt A (no repo) / Prompt B (with repo) separation — correct, matches 10-prompt-input-spec.md
- Cross-tab check in Phase 2C section shape — present, but needs to be a gate, not a note

---

## Action Decision Required

The table above has 11 suggested changes to the current prompts. Recommended next step: review the P0 items (first 4 rows) and decide which to incorporate before running the first tab test.

P0 items only require additions to existing phases — they don't restructure the prompt. P1 and P2 items can wait until after the first test run.
