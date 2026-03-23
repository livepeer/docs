# Prompt Testing Protocol
## Content Writing Pipeline — All Phases

**Version**: 1.0
**Date**: 2026-03-23
**Applies to**: Every new or upgraded prompt before any production run
**Plan reference**: `misty-rolling-starfish.md` — Prompt Testing Protocol section

---

## Purpose

This protocol defines the mandatory testing process for every new or upgraded phase prompt in the content writing pipeline. Its goal is to catch prompt failures before they corrupt production output.

A prompt that looks correct on one tab may generalise poorly to other tabs. A prompt that produces well-structured output may not produce output that downstream phases can actually consume. This protocol catches both classes of failure before they cost production time.

The protocol is intentionally lightweight: one review agent, three test runs, collated learnings, human approval. It replaces a three-agent review model that was over-engineered for the current phase of the pipeline.

---

## Pre-flight Checklist

Before running any prompt through this protocol, confirm all of the following are true:

- [ ] The prompt file exists at its canonical path
- [ ] The prompt's downstream consumer (the next phase prompt) exists and has been read
- [ ] The 7-type canonical schema is loaded (`content-pipeline-framework.md` — Decision 1)
- [ ] The `design-canonical.mdx` has been read for this session
- [ ] The prompt's stated output format is defined (not implied)
- [ ] At least one multi-audience tab (About or Community) is identified for inclusion in test runs
- [ ] A learnings file path is defined before testing begins

If any item is unchecked, stop. Do not proceed to Step 1.

---

## Step-by-Step Protocol

### Step 1 — Internal Review Agent Pass

One agent runs all three checks in a single structured pass. The agent does not execute the prompt — it reviews the prompt text itself.

Give the review agent:
- The prompt file
- The downstream consumer prompt (the next phase)
- `design-canonical.mdx`
- This protocol document (so it knows what to check)

The agent produces a structured review covering:

**Check A — Best Practices**
- Is instruction hierarchy clear? (most critical instructions first, not buried)
- Are there ambiguous instructions that could produce multiple valid interpretations?
- Are failure modes anticipated and handled?
- Is the context block complete — does the agent know exactly what it receives as input?
- Are output format requirements specific enough to reproduce consistently?

**Check B — Canonical Design Alignment**
- Does the output format provide all fields that the downstream phase expects?
- Are schema values aligned with the 7-type canonical set (`navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`)?
- Are deprecated type values (`landing`, `how_to`, `overview`, `faq`, `troubleshooting`, `glossary`, `changelog`, `quickstart`) explicitly handled — not silently accepted?
- Does the output align with what `design-canonical.mdx` defines as the ideal state for this phase?

**Check C — Generality**
- Is the prompt usable for ANY tab — not just a single-audience tab?
- Does it handle multi-audience tabs (About, Community) without breaking?
- Are any tab-specific assumptions baked in that would fail on other tabs?
- Does it handle tabs with no workspace artefacts gracefully?
- Does it handle tabs with mixed status pages (stub, draft, empty alongside current) gracefully?

The review agent outputs findings using the severity definitions in this protocol. CRITICAL findings must be fixed before proceeding to Step 2.

---

### Step 2 — Fix CRITICAL Issues

Before running any test runs, fix every CRITICAL issue from Step 1. Re-run the review agent on the revised prompt if any CRITICAL finding required a structural change to the prompt.

HIGH findings are recorded and may be fixed before test runs at the author's discretion. MEDIUM and INFO findings are recorded but do not block.

---

### Step 3 — Three Agent Test Runs

Run the prompt three times with different agents or model instances. Tab selection must be randomised, with one constraint:

**Constraint**: At least one of the three runs must use a multi-audience tab (About or Community). Do not run all three tests on single-audience tabs.

For each run, record:
- Tab tested
- Agent/model used
- Whether the run completed without fatal errors
- Output path where result was written
- Any issues observed during the run

Do not fix issues found during test runs. Record them. Step 4 handles collation.

---

### Step 4 — Collate Learnings

After all three test runs, collate findings into the learnings file for this prompt version. The learnings file format is defined in this protocol.

For every issue found across all three steps:
- Assign severity (CRITICAL / HIGH / MEDIUM / INFO)
- Record which tab(s) the issue appeared on
- Record whether it was fixed before finalisation
- For CRITICAL and HIGH: record the recommended fix

Findings from the review agent (Step 1) and test runs (Step 3) are collated together. Do not maintain separate lists.

---

### Step 5 — Human Approval

Present the following to the human for approval:

1. The final prompt (post-fix if any CRITICAL/HIGH fixes were applied)
2. The collated learnings file
3. Confirmation that Check B passed — the output is compatible with the downstream phase

The human must explicitly:
- Approve the prompt for production use
- Confirm the output format aligns with downstream phase expectations
- Confirm at least one multi-audience tab test was completed

**The human must approve before any version increment.** Do not bump the version number without explicit human approval. Do not run production tabs before approval.

---

## Severity Definitions

| Severity | Criteria | Action required |
|---|---|---|
| `CRITICAL` | The prompt will produce output that breaks the downstream phase, produces structurally wrong output, or fails entirely on a common tab type | Fix before Step 2. Re-run review agent if structural change made. Do not proceed to test runs with unresolved CRITICAL findings. |
| `HIGH` | The prompt will likely produce incorrect or incomplete output on specific tab types or edge cases, but will not break the downstream phase entirely | Fix recommended before test runs. If deferred, record explicitly with rationale. Requires human acknowledgement at approval step. |
| `MEDIUM` | The prompt produces inconsistent output across runs or tabs, but not in a way that breaks downstream consumption. May indicate an emerging pattern. | Record and monitor. Do not fix before approval — accumulate pattern evidence first. |
| `INFO` | Expected variation between runs or tabs. Structurally correct output that differs in depth, phrasing, or ordering. | Document as expected behaviour. No action required. |

---

## Review Agent Brief Template

Use this template when handing off to the review agent for Step 1.

```
REVIEW TASK — PROMPT REVIEW PASS

You are reviewing a prompt before it goes into production testing. Your job is
to find problems — not to confirm it looks good.

Run all three checks in one pass. Output a structured findings list.

FILES:
- [prompt file path] — the prompt under review
- [downstream phase prompt path] — what this prompt's output must feed
- design-canonical.mdx — the system design

CHECKS:

Check A — Best Practices
Review the prompt text for: instruction hierarchy (most critical first),
ambiguous instructions, missing failure mode handling, incomplete context block,
underspecified output format.

Check B — Canonical Design Alignment
Verify: output fields match what the downstream phase expects; schema values
align with the 7-type canonical set; deprecated type values are handled (not
silently accepted); output matches design-canonical.mdx Phase [N] ideal state.

Check C — Generality
Verify: prompt works for any tab; handles multi-audience tabs (About,
Community); contains no single-tab assumptions; handles missing workspace
artefacts; handles mixed-status pages.

OUTPUT FORMAT:

## Check A — Best Practices
[findings list with severity]

## Check B — Canonical Design Alignment
[findings list with severity]

## Check C — Generality
[findings list with severity]

## Summary
[count of CRITICAL / HIGH / MEDIUM / INFO across all checks]
[recommendation: PROCEED TO TEST RUNS / FIX FIRST]
```

---

## Learnings File Template

One learnings file per prompt, per version. Location: in the same directory as the prompt.
Filename convention: `[prompt-name]-learnings.md`

```markdown
# [Prompt Name] — Learnings
## Version [N]

**Prompt version**: [N]
**Date**: [YYYY-MM-DD]
**Test tabs**: [tab 1], [tab 2], [tab 3 — must include a multi-audience tab]
**Status**: [DRAFT | APPROVED | SUPERSEDED]

---

## Review Agent Findings (Step 1)

### Check A — Best Practices

| Severity | Finding | Fixed before finalisation? |
|---|---|---|

### Check B — Canonical Design Alignment

| Severity | Finding | Fixed before finalisation? |
|---|---|---|

### Check C — Generality

| Severity | Finding | Fixed before finalisation? |
|---|---|---|

---

## Test Run Findings (Step 3)

### Run 1 — Tab: [tab] · Agent: [agent]

[findings]

### Run 2 — Tab: [tab] · Agent: [agent]

[findings]

### Run 3 — Tab: [tab] · Agent: [agent]

[findings]

---

## Collated Learnings

| # | Severity | Finding | Tab(s) | Fixed? | Recommended action |
|---|---|---|---|---|---|

---

## Summary

**CRITICAL**: [count]
**HIGH**: [count]
**MEDIUM**: [count]
**INFO**: [count]

**Prompt approved for production**: [YES / NO / PENDING]
**Approved by**: [name]
**Date approved**: [date]

---

## Version Upgrade Proposals

[List any proposals for the next version. Surface before version bump for human approval.]
```

---

## What NOT to Test

These are known anti-patterns. Avoid them.

**Do not test against a single tab and assume it generalises.** A single-audience tab (Gateways, Orchestrators) does not test multi-audience handling. At least one multi-audience tab is required.

**Do not run test runs before the review agent pass.** Test runs are expensive. The review agent catches structural problems cheaply. Finding a CRITICAL issue after three test runs wastes the run cost and may have contaminated your output files.

**Do not fix issues found during test runs mid-run.** Fix after collation. Fixing mid-run changes the prompt under test and invalidates the comparison between runs.

**Do not bump the version number before human approval.** The version number signals "approved for production." A version bump without human approval is a false signal.

**Do not treat the review agent's opinion as ground truth.** The review agent checks the prompt — it does not run it. Test run findings take precedence over review agent predictions when they conflict.

**Do not skip Check B because the downstream phase seems obvious.** Schema compatibility failures are the most common source of pipeline breakage. Check B must be explicit.

**Do not run production tabs before protocol completion.** The protocol exists to protect production output. Running a production tab "to test" is a production run.

---

## When to Re-Run the Protocol

Re-run the full protocol (all five steps) when:
- The prompt is upgraded to a new version
- The downstream phase prompt changes its input format
- The canonical schema changes (new type added, deprecated type removed)
- A production run produces output that cannot be consumed by the downstream phase

Re-run from Step 1 only (review agent) when:
- A CRITICAL or HIGH finding was fixed and you need to verify the fix
- A minor wording change was made that could affect instruction hierarchy

---

## Protocol Governance

This protocol is owned by the content writing pipeline. Any change to the protocol requires:
1. A note in the plan's decision registry (`decisions/decision-registry.md`)
2. Human approval before the change takes effect

Changes to severity definitions or step order require full re-testing of any prompts currently in the testing phase.
