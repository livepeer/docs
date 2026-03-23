# Collation Prompt — Learnings
## Tab: LPT / Delegators

**Collation prompt version**: v2
**Evidence base**: 2 collation runs — Claude Web (run 1), ChatGPT (run 2)
**Audience design inputs**: 2 v4 runs (Claude Web + ChatGPT) — same inputs both collation runs
**Date**: 2026-03-23
**Files**: `claude-web-collation-notes-lpt-delegators.md`, `chat-gpt-collation-notes-delegators-lp-token.md`

---

## v2 Fixes Confirmed

All four v2 structural fixes held on a new tab:

- **Conditional opener for Terminology Conflicts** — 2/2 runs. Both opened with "No definition conflicts were found" — the correct opener when no `[DEFINITION CONFLICT]` flags exist. No run used a reassuring opener followed by a conflict.
- **BLOCKING / NON-BLOCKING labels on Open Items** — 2/2 runs. Both runs labelled every open item with explicit blocking status. Claude: 5 labelled items. ChatGPT: 2 labelled items. Format is working.
- **Structural disagreements have explicit rationale** — 2/2 runs. Both runs documented canonical decisions with a specific reasoning clause, not just a restatement of the decision.
- **Model pairing recommendation** — 2/2 runs. Both runs include a model pairing recommendation. Claude recommends itself as primary; ChatGPT recommends itself as primary (see Issues).

---

## Key Finding — Rewards Placement: Opposite Canonical Decisions

This is the most significant finding from the LPT collation. The same input files, the same prompt, two opposite structural outcomes on a load-bearing section:

| Run | Canonical decision | Rationale given |
|---|---|---|
| Claude Web | Post-bonding (S6: "How rewards accumulate") | Reader has a real position to apply the numbers to; pre-bonding placement front-loads abstract content onto an evaluation-state reader |
| ChatGPT | Pre-operator-selection (outcome drivers before S4) | Reader cannot compare operators intelligently without first understanding how reward cut, fee cut, and dilution affect outcomes |

Both rationales are coherent. Both are defensible. They reach opposite structural decisions because they model different reader states: Claude models the reader as operational (owns a position), ChatGPT models the reader as evaluative (choosing an orchestrator). These are sequential — evaluation precedes operation — so the disagreement traces to which state needs the content first.

**Collation implication**: Human resolution required. This is a genuine structural question: does reward mechanics education serve the evaluation state (before operator selection), the operational state (after bonding), or both (split)? Both positions are supported by the existing single-run design flag on that section.

---

## Key Finding — Token Participation Evaluator: Opposite Inclusion Decisions

The collation prompt's single-run persona inclusion rule was applied to the same persona by both collation runs, reaching opposite conclusions:

| Run | Decision | Reasoning |
|---|---|---|
| Claude Web | **Included** at rank 5 | Pre-commitment evaluation path is a real distinct entry state not covered by First Bond Seeker (who already holds LPT with intent); its J1 job is partially unserved without it |
| ChatGPT | **Excluded** | Single-run, Impact=2; fit-decision concern already covered by canonical Sections 2–3 |

Both correctly applied the rule. The rule ("exclude unless it is the only section covering a critical job for a primary or high-impact persona") is ambiguous at Impact=2 — the condition "already covered by adjacent sections" is a judgement call when coverage is partial.

**Collation implication**: Human resolution required. The rule is not sharp enough to produce consistent outcomes on borderline Impact=2 single-run personas. A tighter exclusion test may be needed for v3: require Impact ≥ 3 for single-run persona inclusion, OR document partial coverage explicitly.

---

## Key Finding — L1 Stranded Path: Same Persona, Different Structural Consequence

Both runs included the L1 Stranded persona (1/2 consensus from audience design runs). But they resolved the structural consequence differently:

| Run | Structural decision |
|---|---|
| Claude Web | Dedicated S3 "Getting LPT onto Arbitrum" — standalone instruction section; Impact=3 justification |
| ChatGPT | Bridging absorbed into S6 "What Must Be Ready Before I Act?" as a prerequisite block; no standalone section |

Claude's rationale: the bridge-first path has a hard-stop blocker (LPT on L1 cannot be bonded until bridged) that requires a sequenced instruction section, not just a prerequisite callout.

ChatGPT's rationale: bridging is a prerequisite, not a distinct enduring content domain; the prerequisite section covers the path without inflating section count.

**Collation implication**: The same hard-stop blocker analysis (from the v4 audience design learnings) is resolved differently here. Human resolution required — this is the same structural decision flagged in the audience design v4 learnings.

---

## Key Finding — Open Items Completeness Gap

Claude flagged 5 open items; ChatGPT flagged 2. The 3 items Claude caught that ChatGPT missed:

| Missed by ChatGPT | Type | Source |
|---|---|---|
| Active Set size (glossary cites 100) | `[verify-live]` — governance-controlled | Flagged by both audience design v4 runs |
| Treasury Reward Cut Rate (glossary cites 10%) | `[verify-live]` — governance-controlled | Flagged by both audience design v4 runs |
| Thawing Period current duration | `[verify-live]` — governance-controlled | Flagged by ChatGPT audience design run |

These were explicitly flagged by the audience design v4 runs as governance-controlled values. The collation model should carry verification flags forward from any audience design run, regardless of how many flagged them. ChatGPT failed to do this.

**Collation implication**: The collation prompt's instruction to carry `[verify-live]` flags from any run ("carry forward from any run that flagged it regardless of run count") was not applied by ChatGPT. The rule is there; the model did not follow it. Consider strengthening the instruction with an explicit example: "A `[verify-live]` flag from a single audience design run must appear in the collation output even if the other run omitted it."

---

## Key Finding — Terminology Label Divergence: Treasury vs Community Treasury

The two runs reached opposite canonical lock decisions on the same near-conflict:

| Run | Canonical decision |
|---|---|
| Claude Web | `Treasury` — "Community Treasury" noted as acceptable informal variant |
| ChatGPT | `Community Treasury` |

This is a minor but illustrative case: both runs documented the near-conflict, both applied the collation near-conflict rule, and both reached different canonical terms. This is a term that requires human confirmation against the wider docs style guide before either canonical output can be used.

---

## Issues Found

### HIGH — Opposite canonical decisions: rewards placement

Two collation runs on the same input produced opposite structural decisions on where reward mechanics education sits. The collation output is not usable as Phase 2 input until this is resolved by human judgement. See Key Finding above.

**Implication for collation prompt**: The current prompt does not address how to handle a structural decision that is genuinely ambiguous — one where both placements are defensible and the choice requires knowing which reader state is primary. Consider adding: "When two structural placements are both defensible with different reader-state rationales, flag the decision as a human resolution item in Open Items and present both rationales, rather than canonicalising one."

---

### MEDIUM — Single-run persona inclusion rule produces inconsistent outcomes at Impact=2

The rule is sound at Impact=3 (include) and for clear on-demand coverage cases (exclude). It is ambiguous at Impact=2 when coverage in adjacent sections is partial rather than complete. Two collation models reached opposite decisions on the same persona.

**Implication for collation prompt v3**: Add a threshold clarification — e.g. "For Impact=2 single-run personas, the default is exclude unless the partial-coverage argument explicitly names which job would be unserved in the canonical structure."

---

### MEDIUM — ChatGPT did not carry `[verify-live]` flags from audience design runs

Three governance-controlled values flagged in the v4 audience design runs were dropped from ChatGPT's collation output. The rule says carry verification flags from any run; the rule was not applied.

**Implication for collation prompt v3**: Strengthen the carry-forward rule with an explicit example and a quality gate: "[ ] Every `[verify-live]` and `[verify-against]` flag from any audience design input run appears in the Open Items section."

---

### LOW — Model pairing recommendations are self-referential

Both runs recommend themselves as primary collation model. Claude recommends "Claude (primary) + ChatGPT cross-check"; ChatGPT recommends "ChatGPT-first, Claude-second." This is predictable and makes the recommendation unreliable.

**Implication**: Model pairing recommendations from collation runs should be treated as signals to compare against learnings-level evidence, not taken at face value.

---

## Structural Quality Comparison

| Metric | Orchestrators (3 runs, v1 collation prompt) | LPT (2 runs, v2 collation prompt) |
|---|---|---|
| Terminology conflicts opener correct | Mixed (1 contradictory) | 2/2 ✅ |
| BLOCKING / NON-BLOCKING on open items | Mixed | 2/2 ✅ |
| Structural disagreements have explicit rationale | Mixed | 2/2 ✅ |
| Model pairing recommendation present | 1/3 | 2/2 ✅ |
| Single-run section rule applied consistently | No — 2 excludes vs 1 include | No — opposite persona decisions |
| Open items completeness | Mixed | Incomplete (ChatGPT missed 3 verify-live flags) |
| Opposite canonical decisions requiring human resolution | 0 | 1 (rewards placement) |
| Runs | 3 | 2 — no tiebreaker possible |

---

## Run Quality Notes

### Claude Web (collation run 1)

**Strengths**: Most complete open items documentation (5 items, all labelled); correctly carried governance-controlled `[verify-live]` flags from all audience design runs; Vote Detachment included in terminology lock with `[must explain]` flag — correctly identifies reader confusion risk; Reward Cut / Fee Cut directionality warning is precise author guidance; structural disagreement rationales are detailed.

**Weaknesses**: Rewards post-bonding placement is the weaker structural decision if reader needs criteria before choosing an orchestrator (ChatGPT's rationale is stronger here); section count 10 is tight — some sections may be carrying more jobs than the section load flag rule would allow.

---

### ChatGPT (collation run 2)

**Strengths**: Rewards pre-operator-selection placement has the stronger rationale (reader needs economic criteria to evaluate operators, not just after bonding); structural disagreement documentation is thorough (5 disagreements vs Claude's 2); the decision-layer / mechanics-layer split is a real improvement over merged evaluation/mechanics in S2.

**Weaknesses**: Dropped 3 governance-controlled `[verify-live]` flags (Active Set, Treasury Reward Cut Rate, Thawing Period); excluded Token Participation Evaluator on coverage grounds that are only partial; no explicit Vote Detachment term in lock — uses umbrella "Voting Power" instead.

---

### Model pairing recommendation

For LPT collation: **Claude Web as primary for open items completeness and terminology precision** — the governance-controlled parameter verification is blocking content production and Claude caught all instances. **Cross-check ChatGPT rationale on rewards placement before canonicalising** — ChatGPT's pre-operator argument is more reader-state-appropriate. The final canonical structure should adopt ChatGPT's reward mechanics placement (pre-operator) and Claude's open item set.

---

## Recommended Actions

| # | Action | Where | Priority |
|---|---|---|---|
| 1 | Human resolution: rewards placement — pre-operator-selection (ChatGPT) vs post-bonding (Claude); affects canonical section order | Collation output open items | BLOCKING |
| 2 | Human resolution: Token Participation Evaluator persona inclusion — impacts J1 coverage | Collation output open items | NON-BLOCKING |
| 3 | Human resolution: L1 bridging — dedicated section (Claude) vs absorbed into prerequisites (ChatGPT) | Collation output open items | NON-BLOCKING |
| 4 | Human resolution: Treasury vs Community Treasury label | Collation output open items | NON-BLOCKING |
| 5 | Add to collation prompt v3: carry-forward rule for verify-live flags with quality gate | Collation prompt, verification rules | MEDIUM |
| 6 | Add to collation prompt v3: sharper single-run persona exclusion test at Impact=2 | Collation prompt, persona inclusion rule | MEDIUM |
| 7 | Add to collation prompt v3: ambiguous structural placements should be flagged as human-resolution items, not canonicalised | Collation prompt, structural disagreements | MEDIUM |
