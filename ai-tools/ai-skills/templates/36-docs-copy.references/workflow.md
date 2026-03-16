# Workflow

Use the mode below that matches the routed task. Keep outputs compact and explicit.

## `copy-plan`

Use when the user wants a rewrite plan before copy changes are made.

Output shape:

- Scope
- Current copy risks
- Proposed rewrite plan
- Claim-sensitive checks needed
- Follow-up files

## `copy-rewrite`

Use when the task is to improve wording on an existing page or diff.

Sequence:

1. State the page question and page type.
2. Preserve the canonical owner and remove wording that drifts beyond it.
3. Tighten prose for clarity, scannability, and decision usefulness.
4. If a sentence changes factual meaning, trigger verification before finalizing it.

Output shape:

- Scope
- Revised copy or rewrite summary
- Changed-claim summary
- Follow-up files or checks

## `copy-review`

Use when the user wants a review verdict on changed docs wording.

Sequence:

1. Review factual risk before style polish.
2. Call out duplication, canonical ownership drift, and page-type mismatch.
3. Return a verdict only after the findings list is complete.

Output shape:

- Findings
- Open questions or assumptions
- Verdict
- Validation status

## `claim-update`

Use when wording changes are tied to factual updates, dates, limits, or terminology.

Sequence:

1. Name the changed claim family in one sentence.
2. Verify the claim.
3. Propagate the update to dependent pages if needed.
4. Keep the canonical owner explicit.

Output shape:

- Changed claim summary
- Safe wording or rewrite recommendation
- Propagation queue
- Unresolved evidence gaps

## `section-strategy`

Use when the copy task is actually about section framing or writing order.

Output shape:

- Reader job or entry situation
- Recommended page or section order
- Copy surfaces to rewrite first
- Risks if the current order remains unchanged

## Shared Rules

- Lead with the smallest safe scope.
- Do not turn one page into a repo-wide rewrite unless the user explicitly asks for it.
- Separate verified truth from copy preference.
- End every mode with the next files or checks, even when no edits are made.
