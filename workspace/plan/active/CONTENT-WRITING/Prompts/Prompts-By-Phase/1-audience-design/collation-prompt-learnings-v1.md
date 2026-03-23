# Collation Prompt — Learnings v1
## Prompt: `audience-design-collation.md`

**Evidence base**: 3 collation runs on Orchestrators (Agent, ChatGPT, Claude Web) + 1 collation run on Gateways (Agent)
**Date**: 2026-03-23

---

## What Was Run

| Tab | Collation runs | Files |
|---|---|---|
| Orchestrators | 3 — Agent, ChatGPT, Claude Web | `collation-notes-orchestrators.md`, `chatgpt-collation-notes-orchestrators.md`, `claude-collation-notes-orchestrators.md` |
| Gateways | 1 — Agent | `collation-notes-gateways.md` |

All four runs took the same inputs (same 4 v4 audience design runs per tab) and the same collation prompt. Differences in output are attributable to the collation model, not input variance.

---

## What the Prompt Does Well

These are working — do not break them in v2.

**Terminology synthesis rules applied consistently**: All four collation runs correctly applied the 3+ / 2 / 1 inclusion rule for terms. Verification flags (`[verify-against]`, `[verify-live]`) were correctly carried from any run regardless of how many flagged it. The LIP-92 conflict was documented consistently across all three Orchestrators collation runs.

**Section structure synthesis rules applied correctly**: All runs correctly applied the 3+ / 2 / 1 inclusion rule for sections. Design flags (`[⚠ may need to split]`) were carried through in every run. Canonical enum overrides (e.g. S1 must be `purpose: orient` + `pageType: navigation`) were applied.

**Persona synthesis is strong**: All runs grouped personas by arriving state rather than name. Consensus scoring was consistent. The union-of-entry-blockers rule was applied correctly in every run.

**Excluded sections are clearly documented**: Every run documented why a section was excluded and which existing section serves its function. This format is clean and ready to use as Phase 2 input.

**Run quality notes are useful**: All four runs produced per-run quality notes with enough specificity to calibrate model selection for future tabs.

---

## Issues Found

### HIGH — Terminology Conflicts section: contradictory opener

**Issue**: The Agent run on Orchestrators opened the Terminology Conflicts section with: *"No unresolvable definition conflicts requiring human decision were found."* — then documented the LIP-92 DEFINITION CONFLICT immediately below.

This is self-contradictory and will confuse any human reading the collation notes: the opener says no conflicts, but the body documents one.

**Root cause**: The prompt template for the Terminology Conflicts section says "List any `[DEFINITION CONFLICT]` flags" but gives no instruction for the opener sentence when conflicts exist vs when none exist. The model supplied a reassuring opener and then ran the template — the opener was never invalidated.

**Fix for v2**: Replace the template instruction with:
- If DEFINITION CONFLICT flags exist: open with *"The following conflicts require human resolution before any canonical content cites these terms."* Then list each conflict.
- If no conflicts exist: open with *"No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:"* followed by any term-selection decisions worth documenting.

Do not allow a "no conflicts" opener when conflicts are listed below it.

---

### HIGH — Single-run inclusion rule applied inconsistently across models

**Issue**: The operator reference section (ChatGPT only, Orchestrators) was:
- **Included** in the ChatGPT collation output (canonical doc has 13 sections)
- **Excluded** in the Agent and Claude Web collation outputs (canonical doc has 12 sections)

The collation prompt's rule for single-run sections is: *"exclude unless it is the only section covering a critical job for a primary or high-impact persona."* The operator reference is not the only surface covering return-visit lookup needs — the on-demand journey categories cover this — so it should be excluded. Agent and Claude correctly excluded it. ChatGPT's collation reasoned around the rule, justifying inclusion because *"return-visit parameter lookup is a critical job surfaced in that run's Job 7 and is strongly corroborated by the on-demand/reference needs in the other runs."* This is a false positive: corroboration in on-demand categories is evidence that the need IS covered elsewhere, not evidence for inclusion.

The inconsistent application means there is no single canonical output — three collation runs on the same input produced different section counts.

**Fix for v2**: Tighten the single-run section inclusion rule with an explicit negative example:

> *"Exclude if: the job the section serves is already covered by any on-demand category, another section, or a cross-tab route. Corroboration of the need across runs does not override this — if the need is covered elsewhere in the canonical structure, the section is redundant. Only include if there is no other structural element that covers the job."*

Also add an explicit gate in the Quality Gates checklist:
> *"[ ] No single-run section included where the job is already served by an on-demand category or another section"*

---

### MEDIUM — Structural disagreement documentation is inconsistent in depth

**Issue**: Claude Web's collation notes are significantly more thorough than the other two Orchestrators runs. Every structural disagreement in the Claude notes has the format:

> *"[Run X said X, Run Y said Y, Run Z said Z]. Canonical decision: X. Rationale: Y."*

The Agent and ChatGPT collation notes state canonical decisions but often omit explicit rationale. This matters for Phase 2 designers who need to understand *why* a decision was made, not just what it was.

**Comparison**:
- Claude Web notes: 126 lines, explicit rationale for every structural disagreement, includes "Overall calibration note" at the end of Run Quality Notes
- Agent notes: 130 lines, explicit OPEN-1 through OPEN-5 labels, but rationale for structural decisions is inconsistent
- ChatGPT notes: 68 lines — less than half the depth of the other two; several structural disagreements are summarised without full reasoning

**Fix for v2**: Update the Structural Disagreements section template:

```
For each disagreement:
- State what each run said (one line per run)
- State the canonical decision
- State the reasoning for the canonical decision — this must be a specific rationale,
  not a restatement of what the chosen option does. Example: "Rationale: placing payment
  config before the quickstart resolves the ETH-on-Arbitrum blocker silently created by
  post-quickstart placement."
```

Add this to Quality Gates: *"[ ] Every structural disagreement has explicit reasoning for the canonical decision, not just a statement of what it is"*

---

### MEDIUM — Open items: blocking vs non-blocking status is inconsistently labelled

**Issue**: The Gateways collation notes (Agent) used explicit **BLOCKING** and **NON-BLOCKING** labels on every open item. This is the most useful format because it tells the reader whether a Phase 2 content brief can start before the item is resolved.

The three Orchestrators collation runs handled this differently:
- Agent notes: used OPEN-1 through OPEN-5 labels but no explicit blocking/non-blocking status
- Claude notes: clear O1–O5 structure with action-required framing but no blocking labels
- ChatGPT notes: compact, no explicit blocking status, items not numbered consistently

The Gateways format is the best of the four. It was produced by the same model (Agent) that omitted the labels on Orchestrators — suggesting this is a prompt instruction gap, not a model capability gap.

**Fix for v2**: Update the Open Items section template to require blocking status on every item:

```
## Open Items (require human resolution before Phase 2)

### [N]. [Item name] — [BLOCKING / NON-BLOCKING]

[Description of the conflict or gap]

**Resolution path**: [Specific action — who verifies what, against which source]
```

The `BLOCKING` label means Phase 2 content work for any section that references this item cannot begin until resolved. `NON-BLOCKING` means Phase 2 can proceed but the item must be resolved before publication.

---

### LOW — Collation notes depth varies significantly across models

**Issue**: ChatGPT's Orchestrators collation notes are 68 lines — less than half the depth of Agent (130) and Claude (126). Key sections are compressed:

- Structural Disagreements: ChatGPT documents 4 disagreements; Claude documents 5, with fuller reasoning
- Run Quality Notes: ChatGPT notes are ~2 sentences per run; Claude notes are 3–4 sentences with a cross-run "Overall calibration note"

The ChatGPT notes would be inadequate as a standalone Phase 2 input — critical reasoning is missing.

**Fix for v2**: Add minimum content requirements per section, written into the template:

```
## Structural Disagreements

[For each disagreement, document ALL of the following — do not compress:]
- What each run said (one line per run)
- Canonical decision + reasoning
- Whether any run had the strongest argument even if overridden (useful signal for Phase 2 designers)

[Minimum: one entry per disagreement. If fewer than 2 disagreements exist, note this explicitly:
"No structural disagreements found — all runs agreed on this decision."]
```

Similarly for Run Quality Notes, add: *"Each run must have its own section with at least: key strength, key weakness, and one specific example of each."*

---

### LOW — "Overall calibration note" present in one run only

**Issue**: Claude Web's collation notes end Run Quality Notes with an "Overall calibration note" recommending a model pair for future tabs: *"For future tabs, the Claude Web approach to structured lock tables... produces the most directly usable Phase 2 input. The ChatGPT structural reasoning on section organisation is the most useful complement. Consider running these two approaches together as the primary pair for tabs with complex multi-path audiences."*

This is the most immediately actionable content in the entire collation output — it directly feeds the decision about which models to use next. It appeared in one run (Claude Web) because the prompt doesn't ask for it.

**Fix for v2**: Add an explicit "Model pairing recommendation" prompt at the end of Run Quality Notes:

```
### Model pairing recommendation

Based on the comparative strengths identified above, state which model pair (or solo model)
would produce the highest-quality input for a follow-on tab of similar complexity.
Give a specific reason — not "model X is good" but "model X's [specific strength] is most
needed for tabs with [characteristic]."
```

---

## Canonical Prompt Fixes for v2

These are the specific changes recommended based on the above:

| Fix | Section in prompt | Priority |
|---|---|---|
| Add conditional opener for Terminology Conflicts (conflicts found vs none found) | Phase 2, Step 2.3 | HIGH |
| Add negative example to single-run section rule: on-demand coverage disqualifies | Phase 7, Step 7.2 | HIGH |
| Add gate: no single-run section if job served by on-demand category | Quality Gates | HIGH |
| Require explicit rationale for every structural disagreement canonical decision | Phase 7, Output template (Structural Disagreements) | MEDIUM |
| Add gate: every structural disagreement has explicit reasoning | Quality Gates | MEDIUM |
| Require BLOCKING / NON-BLOCKING label on every Open Item | Output template (Open Items) | MEDIUM |
| Add minimum content requirements to Structural Disagreements and Run Quality Notes | Output template | LOW |
| Add "Model pairing recommendation" to end of Run Quality Notes | Output template | LOW |

---

## Model Recommendation for Collation

Based on comparing all four collation runs:

**Best collation model: Claude Web**

- Produces the most thorough Structural Disagreements section, with explicit canonical decision reasoning for every point
- Terminology lock tables are the most usable format for Phase 2 input
- Persona path validation is the most granular
- "Overall calibration note" at the end of run quality notes is uniquely valuable

**Second: Agent**

- Best open item labelling (OPEN-1 through OPEN-5 format, seen in Gateways run)
- Most rigorous on verification discipline
- Weaker on canonical decision reasoning

**ChatGPT as collation model: not recommended**

- Produces 68-line notes that are too compressed for standalone Phase 2 use
- Bent the single-run inclusion rule (operator reference section)
- The ChatGPT collation of Orchestrators would need significant expansion before it could serve as Phase 2 input

**Recommended pairing for complex multi-path tabs**: Claude Web for collation (primary output) + use Agent notes as a cross-check for open items and verification flags. If only one run is viable, use Claude Web.

---

## What to Fix Before Next Collation Run

1. Update `audience-design-collation.md` with the HIGH and MEDIUM fixes above
2. Run updated collation prompt on Orchestrators (same 4 input files) and compare output against the three existing collation runs — confirms the fixes resolve the identified issues without breaking what works
3. If the re-run produces consistent single-run section decisions and explicit canonical decision reasoning, the collation prompt is ready for production use on remaining tabs
