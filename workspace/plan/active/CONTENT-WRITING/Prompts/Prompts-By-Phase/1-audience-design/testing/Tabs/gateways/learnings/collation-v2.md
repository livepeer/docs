# Collation Prompt — Learnings
## Tab: Gateways

**Collation prompt version**: v2 (applied retroactively — v2 fixes were incorporated into this Agent run)
**Evidence base**: 1 collation run — Agent
**Audience design inputs**: 3 v4 runs (ChatGPT, Claude Web, Perplexity)
**Date**: 2026-03-23
**Files**: `collation-notes-gateways.md`, `canonical-gateways-audience-design.md`
**Note**: Only 1 collation run. All assessments are single-model. No consensus comparison possible. Treat as a quality reference for a high-run-count tab (3 input runs), not a cross-model collation quality test.

---

## v2 Fixes Status

With only 1 collation run, fix confirmation is limited:

- **Conditional opener for Terminology Conflicts** — The run opened with documented conflicts (NaaP, BYOC), not a "no conflicts" opener. The DEFINITION CONFLICT header format is correctly used. ✅ working
- **BLOCKING / NON-BLOCKING labels on Open Items** — 6 open items, all labelled BLOCKING or NON-BLOCKING. ✅ working
- **Structural disagreements with explicit rationale** — Every structural disagreement has explicit reasoning. ✅ working
- **Model pairing recommendation** — Not present. This is expected: the Agent run had 3 input runs to synthesise, not multiple collation models to compare. No recommendation possible with 1 collation model.

---

## Key Finding — Definition Conflict Handling: Both NaaP and BYOC Caught and Resolved

The gateways glossary has two definition conflicts: NaaP (heading vs body expansion) and BYOC (container vs compute). Both were handled correctly:

**NaaP**: All three audience design runs flagged it (Claude Web, Perplexity caught it; ChatGPT used it without flagging). Collation correctly documented the conflict and required human resolution. Canonical lock carries `[verify-against: github.com/livepeer/naap]`. ✅

**BYOC**: Two of three runs flagged it (Claude Web, Perplexity excluded it from lock; ChatGPT didn't mention it). Collation excluded BYOC from the canonical lock entirely, correctly identifying that the conflict cannot be resolved from provided sources. ✅

Both conflicts are in Open Items with BLOCKING or NON-BLOCKING status, with specific resolution paths.

---

## Key Finding — 3 Input Runs Produce Clean Collation Consensus

With 3 input runs, the single-run persona and section exclusion rules have a genuine majority to apply. This is the cleanest collation case tested so far:

- Parallel quickstarts: 3/3 unanimous — no structural disagreement
- Disambiguation first: 3/3 unanimous — no structural disagreement
- Payment placement: 2/3 (ChatGPT + Perplexity over Claude Web) — collation overrode Claude Web correctly
- Troubleshooting standalone: 2/3 (Claude Web + Perplexity over ChatGPT) — collation included correctly
- Dual mode standalone: 2/3 (Claude Web + Perplexity over ChatGPT) — collation included correctly

All 5 structural decisions have a clear 2/3 or 3/3 majority. No forced single-run inclusions on structural decisions.

---

## Key Finding — Section Count Above Target (13) Correctly Justified

The canonical output has 13 sections — one above the 8–12 target range. The collation notes explicitly justify this:

- Parallel quickstarts require 2 sections (unanimous, cannot be merged)
- Dual mode (S9) requires standalone status (2/3 consensus, distinct OS constraint)
- Troubleshooting (S12) requires standalone status (return operator distinct path, 2/3 consensus)
- NaaP / multi-tenant platform (S13) carries a split design flag (2/3 flagged) — may become 14 sections in Phase 2

The justification is present and follows the count override rule from the prompt. The design flags on S11 and S13 correctly preserve the potential for further splitting.

---

## Key Finding — Open Items Completeness: All 4 v4 Categories Covered

The collation correctly carries forward all major open items from the v4 audience design runs:

| Open Item | Status | What it blocks |
|---|---|---|
| NaaP expansion | BLOCKING | Any content page using NaaP full expansion |
| BYOC scope | NON-BLOCKING | Gateway content using BYOC term |
| S13 split decision | NON-BLOCKING | Affects section count |
| Dual mode merge candidate | NON-BLOCKING | Affects section count |
| Community signer endpoint | BLOCKING (S5 authoring) | Off-chain quickstart cannot be authored until verified |
| Weight factor CLI flag names | VERIFY (S7) | S7 content cannot use flag names from glossary |

6 open items with explicit resolution paths and BLOCKING/NON-BLOCKING status. This is the most complete open items section seen across all tabs.

---

## Issues Found

### LOWER — Model pairing recommendation absent

No model pairing recommendation was produced. Expected with a single collation run (nothing to compare). Not a prompt issue.

---

### LOWER — Canonical section count 13 (one above target)

Justified in the notes, but the justification for including S9 (dual mode) as standalone vs folded into S6/S7 rests on a 2/3 consensus that includes Perplexity's 13-section run. If dual mode configuration is simpler than expected in practice, S9 could be collapsed. The collation correctly flagged this as NON-BLOCKING in Open Item 4.

---

## Structural Quality Comparison

| Metric | Orchestrators v2 collation | LPT v2 collation | Gateways v2 collation |
|---|---|---|---|
| Collation runs | 3 (Agent, ChatGPT, Claude Web) | 2 (Claude Web, ChatGPT) | 1 (Agent) |
| Terminology conflicts opener correct | Mixed (1 wrong) | 2/2 ✅ | ✅ |
| BLOCKING / NON-BLOCKING labels | Mixed | 2/2 ✅ | 6/6 ✅ |
| Structural disagreements have rationale | Mixed | 2/2 ✅ | ✅ |
| Single-run persona rule consistent | No | No (opposite decisions) | N/A — 3 input runs gave majority |
| Open items complete | Partial | Partial (ChatGPT missed 3) | ✅ — 6 items, all with resolution paths |
| Model pairing recommendation | 1/3 | 2/2 ✅ | N/A — single collation model |
| Opposite canonical decisions | 0 | 1 (rewards placement) | 0 — 3 input runs gave clear majorities |

---

## Run Quality Notes

### Agent (collation run 1)

**Strengths**: Best open items documentation of any tab — 6 items, all labelled with blocking status and specific resolution paths. The community signer endpoint flag is particularly valuable as a content-production blocker. Conflict handling (NaaP, BYOC) is correct and thorough. Structural decisions are all backed by explicit majority rationale. The single-run persona exclusions are well-reasoned (The Off-Chain Explorer, Protocol-Native Operator, AI Pipeline Tester all correctly excluded with coverage analysis).

**Weaknesses**: Only one collation run — no cross-model quality comparison possible. The S13 split design flag relies on content authors to make the evaluate/build overload judgement; could have been flagged more explicitly as a Phase 2 blocker.

---

## Recommended Actions

| # | Action | Where | Priority |
|---|---|---|---|
| 1 | Resolve NaaP expansion before any content page uses the full form | Open Item 1 — verify against livepeer/naap repo | BLOCKING |
| 2 | Resolve community signer endpoint before S5 authoring begins | Open Item 5 — verify signer.eliteencoder.net availability | BLOCKING (S5) |
| 3 | Run second collation model (Claude Web or ChatGPT) to enable cross-model quality comparison | Testing | BEFORE collation prompt v3 assessment |
| 4 | Review S13 load during Phase 2 design — split if evaluate + build cannot co-exist | Phase 2 content design | NON-BLOCKING |
