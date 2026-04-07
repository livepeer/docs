# Phase 3 — Content Pass: Pack Guide

**Prompt**: `content-pass.md`
**Skill**: `ai-tools/ai-skills/content-pipeline-pass-a/SKILL.md`
**Resources**: `phase-resources.md`
**Test outputs**: `testing/`

---

## What This Phase Produces

**REVIEW mode**: A structured audit report per page — verdict (PASS / NEEDS WORK / REWRITE REQUIRED), prioritised issues with specific quotes and fixes, veracity flags, approved sections list.

**WRITE / REWRITE mode**: Full page content as plain markdown — ready for Pass B (layout). Every unverified factual claim is flagged with `{/* REVIEW: */}`. All 7 taxonomy fields identified for frontmatter completion in Pass B.

This phase does not touch MDX, components, or frontmatter. Content layer only.

---

## When to Run This Phase

- On every page in the tab, after Phase 2 (structure audit) has produced the gap analysis and work order
- In REVIEW mode first — only escalate to REWRITE if the verdict warrants it
- Run page by page. Do not batch — each page needs its own context block and adjacency check

**Do not run** without a Phase 1 output for the tab. The persona fit check (Phase 2.2) requires the Phase 1 personas table.

---

## Pre-flight (Human Steps Before Running)

- [ ] **Tab map**: Does `v2/[tab]/_workspace/tab-map.md` exist? If not, run the `content-pipeline-tab-map` skill first. Pass A degrades without journey context — PREV_PAGE and NEXT_PAGE become guesses.
- [ ] **Personas**: Phase 1 output is loaded and the PERSONA field in the context block matches a real persona from Phase 1 — not a generic label.
- [ ] **Primary sources**: Named before running. For pages with factual claims (on-chain values, economics, configuration specs), you must know BEFORE running which source to verify against. "Go-livepeer GitHub" is sufficient. "The internet" is not.
- [ ] **Select from `phase-resources.md`**: The Brand & Copy Guide and voice-rules.md are almost always worth loading. For developer-audience pages, load the developer research briefs. For gateway pages, load the gateway source hierarchy. For other tabs, note that operator-specific voice rules do not apply — flag the gap.

---

## Running Order

1. Fill the context block completely — every field
2. Run pre-flight — stop if any check fails, fix the brief
3. Phase 1 (read) — for REVIEW: read the page; for WRITE: confirm the brief is actionable
4. Phase 2 (audience fit) — pause for human review of persona fit findings
5. Phase 3 (purpose check)
6. Phase 4 (information type audit)
7. Phase 5 (voice check) — most iterative phase; multiple passes may be needed
8. Phase 6 (veracity check) — flag, don't remove
9. Phase 7 (structure check)
10. Produce output

Human review is recommended after Phase 2 (audience fit) and before the output is accepted. Persona fit issues in Phase 2 affect every subsequent phase — catching them early saves a full re-run.

---

## Modes

**REVIEW**: Use when the page exists and mostly works. The report gives you a prioritised fix list and tells you whether to patch or rewrite. A PASS verdict requires no Phase 3 pass. A NEEDS WORK verdict means targeted fixes. A REWRITE REQUIRED verdict means WRITE mode on the next pass.

**WRITE**: Use when the page doesn't exist (new page) or REVIEW returned REWRITE REQUIRED. Full page content written from scratch.

**REWRITE**: Use when content exists but REVIEW verdict was REWRITE REQUIRED. The REWRITE mode reads the existing content (Phase 1), then writes new content that addresses the structural failure identified in the review.

---

## Dos

- **Do** load the Brand & Copy Guide before Phase 5. `voice-rules.md` has per-audience rules — but they layer on top of the base voice ("knowledgeable colleague", transparent/candid/performant/inclusive, second person for instructions). Without the base, audience-specific rules are applied without foundation.
- **Do** enforce the information type classification in Phase 4. The type determines the veracity standard. If you skip Phase 4, Phase 6 has no basis for knowing which claims need verification.
- **Do** flag `{/* REVIEW: */}` for every unverified factual claim. Do not remove or soften claims because they can't be verified in this pass — human verification is the next step. The flag is the handoff mechanism.
- **Do** write the opening paragraph last (WRITE mode). Draft the body sections first, then write the opening to reflect what the page actually delivers. An opening written first will describe what you planned, not what you wrote.
- **Do** push back if PURPOSE requires two distinct reader outcomes. That is two pages. Splitting is not optional — a page with two purposes fails both.

## Don'ts

- **Don't** apply MDX components or frontmatter in this pass. Pass B does that. Adding `<Steps>` or writing the frontmatter block here creates confusion about which pass produced which output.
- **Don't** remove flagged claims during Phase 6. Flag them, name the source to verify against, and move on. Removal is a human decision.
- **Don't** accept "understands X" as an exit state from Phase 1 — and don't reproduce it in WRITE mode content. If the Phase 1 exit state says "understands the economics model", reframe the section to deliver "has calculated their expected reward" or similar.
- **Don't** run Phase 5.4 with voice-rules.md alone for non-operator audiences. Voice-rules.md currently covers gateway and orchestrator only. For developer, delegator, or community audiences, apply the base voice rules and explicitly note the gap in the output.
- **Don't** run multiple pages in one pass. Each page needs a separate context block with correct PREV_PAGE and NEXT_PAGE. Batching collapses the adjacency check and produces generic output.

---

## What Good Output Looks Like

**Good REVIEW issue**: `Phase 5 — Voice — Phase 5.1 banned phrase — "Understanding the clearinghouse architecture is essential before configuring payments" — violates "Understanding X is essential" — Fix: "The clearinghouse sits between your gateway and the orchestrator network. Configure payments before going live."`

**Bad REVIEW issue**: `Voice — some sentences are unclear`

**Good veracity flag**: `{/* REVIEW: "orchestrators earn approximately 25% margins on AI inference jobs" — verify with: go-livepeer GitHub economics documentation or Messari research report */}`

**Bad veracity flag**: `{/* REVIEW: check this */}`

**Good WRITE opening**: `Gateway pricing runs on a per-job model: you set a maximum price per pixel for transcoding, and orchestrators either accept or reject based on their minimum ask. The clearinghouse settles the difference.`

**Bad WRITE opening**: `This page explains how gateway pricing works and covers the different options available to you.`

---

## Common Failure Modes

| Failure | Signal | Fix |
|---|---|---|
| Persona fit check is generic | Phase 2.2 says "the page is appropriate for this audience" with no specifics | Push: "Which sections serve this persona's arriving question? Which don't? Quote the text." |
| Purpose check passes without justification | Phase 3 says "yes the page delivers the purpose" | Push: "Show me the section sequence that delivers the purpose. Where exactly does the reader achieve it?" |
| Voice check misses embedded violations | Phase 5 returns PASS but page contains "essentially", "various", "it is important to note" | Run a targeted word search against the banned list before accepting Phase 5 |
| Veracity phase is vague | Phase 6 says "some claims may need verification" | Push: "List the specific claims. Name the source for each." |
| Opening paragraph written first in WRITE mode | Introduction describes the plan rather than the delivered content | Draft body sections first. Return to the opening at the end. |
| All sections get REVIEW flags | Every factual claim flagged as unverified | Pre-flight failure — primary sources weren't named. Stop, fill PRIMARY_SOURCES in the context block, re-run. |

---

## After Running — Testing & Iteration

Record your test run in `testing/`. Minimum entry:
- Date, tab, page path
- MODE used
- Which resources were loaded
- Quality assessment: did Phase 4 correctly classify information types? Did Phase 5 catch real violations? Were Phase 6 flags specific enough for human verification?
- Updates to prompt or resource list

Update test status in `phase-resources.md` for resources used.
