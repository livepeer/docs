---
name: iterate
description: >-
  Review, test, and refine skill. Reviews build output against design test criteria AND
  best practice. Categorises findings as pass/fix/redesign/research. Routes back to the
  correct phase. Prevents rubber-stamping. Use after /build completes or when reviewing
  any existing work.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Iterate — Review, Test, Refine

Iterate is critical review, not sign-off. Its job is to find what's wrong, categorise it, and route to the right fix. "Looks good" is not a review.

---

## When to use

- After `/build` completes — review the output
- When reviewing any existing work against standards
- When the user says "is this right?" or "what would you change?"
- When testing a skill, framework, or process for the first time

## When NOT to use

- During `/design` — that's co-creation, not review
- When more information is needed first — use `/research`

---

## Step 1: Define what you're testing against

Before reviewing anything, state the criteria explicitly:

1. **Design test criteria** — from the architecture doc (if one exists)
2. **Best practice** — does the approach follow sound principles, independent of the spec?
3. **Thread outcome** — does the result actually serve the session goal?

```
Reviewing: [what]
Against:
  - Design criteria: [list or "no design doc — testing against best practice only"]
  - Best practice: [which principles apply]
  - Thread outcome: [restate]
```

---

## Step 2: Review with evidence

Go through each criterion. For every judgement, state the evidence.

### Format
```
Criterion: [statement]
Verdict: PASS / FAIL / PARTIAL
Evidence: [specific observation — quote, line reference, or concrete example]
```

Do not say "PASS" without stating what you checked. Do not say "FAIL" without stating what's wrong.

---

## Step 3: Categorise findings

Every finding goes into exactly one category:

| Category | Meaning | Routes to |
|---|---|---|
| **Pass** | Meets criteria, no action needed | Done |
| **Fix** | Doesn't meet criteria, fix is clear and scoped | `/build` (small) or fix inline |
| **Redesign** | The design itself is wrong — the spec needs changing | `/design` |
| **Research** | We discovered something we don't understand | `/research` |

### Format
```
## Iterate Report: [what was reviewed]

### Pass (N items)
- [criterion]: [evidence]

### Fix (N items)
- [criterion]: [what's wrong] → [proposed fix]

### Redesign (N items)
- [criterion]: [why the design is wrong] → [what needs rethinking]

### Research (N items)
- [question]: [what we don't know] → [what to investigate]
```

---

## Step 4: Recommend next action

Based on findings:

- **All pass:** "This meets all criteria. Recommend closing this thread or moving to the next piece."
- **Fixes only:** "N items need fixing. Here's the fix list — approve and I'll execute via `/build`."
- **Redesign needed:** "N items reveal a design flaw. Recommend `/design` to revisit [specific piece]."
- **Research needed:** "N items surfaced unknowns. Recommend `/research` to investigate [specific questions]."

Always recommend. Never leave it as "here are the findings, what do you want to do?"

---

## Step 4b: Render verification for MDX/JSX changes

If the work being reviewed involved MDX or JSX changes, verify rendering as part of the review:

```bash
# Smoke test changed routes
node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path/to/page

# Or scoped dev for visual check — start in its OWN background process, never hijack existing sessions
lpd dev --scoped --scope-prefix v2/relevant-path
```

A review that doesn't verify rendering for MDX/JSX changes is incomplete. Add to the review report:

```
Render verification:
  Route(s): [paths]
  Result: PASS / FAIL
  Errors: [none / list]
```

---

## Step 5: After fixes — re-review

If fixes were applied, re-review the affected criteria. Do not assume the fix worked.

```
Re-review after fixes:
- [criterion]: was FAIL, now [PASS/still FAIL]
- [criterion]: was FAIL, now [PASS/still FAIL]
```

If still failing after 2 fix attempts, escalate: "This isn't converging with targeted fixes. Recommend `/design` to rethink [piece]."

---

## Anti-patterns — things this skill explicitly prevents

1. **Rubber-stamping.** Every PASS must have evidence. "Looks good" is not a review.
2. **Fix-everything-now.** Categorise first, then fix. Don't interleave finding and fixing — that's uncontrolled iteration.
3. **Ignoring best practice.** Testing only against the spec misses design flaws. Always include a best-practice lens.
4. **Silent acceptance.** If something is wrong, say so. Even if it's awkward. Especially if it's Claude's own prior output.
5. **Infinite loops.** If the same thing fails twice, it's not a fix problem — it's a design problem. Escalate. Specifically: STOP, state what was tried, list the facts (error messages, file state), propose a different approach based on root-cause analysis. Never retry the same failing approach a third time.

---

## Principles

1. **Review is thinking, not checking boxes.** Go beyond the criteria. Ask: "Is this actually good? Would I recommend this approach to someone else?"
2. **Challenge your own work.** If Claude built it, Claude must be willing to say it's wrong. No ownership bias.
3. **Categorisation drives action.** The whole point is routing to the right phase. A finding without a category is noise.
4. **Two failures = escalate.** If a targeted fix doesn't converge, the problem is upstream. Don't brute-force.
5. **Best practice is always in scope.** Even if the spec is satisfied, flag approaches that create future problems. Tech debt is a review finding.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real iterate/review task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
