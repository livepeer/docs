---
name: docs-copy
version: "1.1"
description: >-
  Route documentation copy planning, rewriting, review, and claim-sensitive updates through the correct Livepeer Docs skills so wording changes stay accurate, scoped, and ready for handoff.
invoke_when:
  - "apply docs-copy framework to this task"
  - "rewrite this docs content for clarity and accuracy"
  - "plan a docs copy pass for this page"
  - "review and tighten this docs copy"
  - "update docs copy after facts changed"
---

SKILL: Docs Copy

Goal
Route documentation copy work so wording changes stay aligned with page purpose, factual evidence, and canonical ownership boundaries.

Constraints
- Do not silently widen a page-local rewrite into a repo-wide language cleanup.
- Do not treat factual rewrites as style-only edits. Verify risky claims before polishing them.
- Do not replace `page-authoring` or `product-thinking` when the task is really new-page authoring or section strategy.
- Keep copy outputs scoped to the user request and leave explicit follow-up queues instead of speculative broad rewrites.
- Use UK English conventions, but route repo-wide normalization work to `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md`.

Workflow

Step 1 — Classify the request into one mode:

| Situation | Mode | Load specialist? |
| --- | --- | --- |
| Existing page needs clearer wording or tighter prose | `copy-rewrite` | `page-authoring` only if rewrite becomes structural |
| User wants an edit plan before writing | `copy-plan` | `page-authoring` when page-type fit is unclear |
| User wants a verdict on changed wording or a diff | `copy-review` | `ai-tools/ai-skills/templates/34-docs-change-review.template.md` |
| Wording changes alter product behavior, limits, dates, or terminology | `claim-update` | `ai-tools/ai-skills/templates/33-docs-source-verification.template.md` — verify first |
| Changed claim family appears in more than one page | `claim-update` | Also load `ai-tools/ai-skills/templates/35-docs-impact-propagation.template.md` |
| Request is about section framing, journeys, or page sequencing | `section-strategy` | `ai-tools/ai-skills/product-thinking/SKILL.md` |
| Request is a new page or major MDX draft | `copy-rewrite` | `ai-tools/ai-skills/page-authoring/SKILL.md` owns the build |
| Request is repo-wide UK English cleanup | Out of scope | Route to `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md` |

Boundary rules: prefer `docs-copy` for wording quality and copy clarity; prefer `page-authoring` for structure, components, or MDX mechanics; prefer `product-thinking` for page purpose or reader journey; prefer verification skills whenever wording could change the truth readers take away.

Step 2 — Execute the mode and return mode-specific output:

**`copy-plan`** — Return: scope, current copy risks, proposed rewrite plan, claim-sensitive checks needed, follow-up files.

**`copy-rewrite`** — Sequence: state the page question and page type → preserve canonical owner → tighten prose for clarity → trigger verification if a sentence changes factual meaning. Return: scope, revised copy or summary, changed-claim summary, follow-up files.

**`copy-review`** — Sequence: review factual risk before style → call out duplication, ownership drift, page-type mismatch → return verdict after findings. Return: findings, open questions, verdict, validation status.

**`claim-update`** — Sequence: name the changed claim family → verify → propagate to dependent pages → keep canonical owner explicit. Return: changed claim summary, safe wording, propagation queue, evidence gaps.

**`section-strategy`** — Return: reader job, recommended page/section order, copy surfaces to rewrite first, risks if current order stays.

Shared rules: lead with the smallest safe scope; do not turn one page into a repo-wide rewrite; separate verified truth from copy preference; end every mode with next files or checks.

Deliverable Format
- One-line scope statement naming the page, diff, or section.
- Task mode used and any specialist skills loaded.
- Mode-specific output (see Step 2 above).
- Explicit follow-up list naming dependent pages, unresolved claims, or unrun checks.

Failure Modes / Fallback
- If the task is only language homogenization, route to `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md`.
- If the page needs a structural split rather than a line edit, return `copy-plan` or `section-strategy` instead of forcing a rewrite.
- If factual verification cannot be completed in the same pass, keep the wording conservative and leave a verification queue.
- If another page appears to own the changed claim, preserve that canonical boundary and treat the current page as a dependent surface.

Validation Checklist
- [ ] The request was classified into one docs-copy mode before editing.
- [ ] The page, diff, or section under review is named explicitly.
- [ ] The rewrite preserves the page's primary question and canonical owner.
- [ ] UK English and current repo style rules are respected.
- [ ] Claim-sensitive wording changes triggered verification before polish.
- [ ] Dependent pages are queued when the changed claim family appears elsewhere.
- [ ] Follow-up files, unresolved claims, and checks run or deferred are listed.
- [ ] If files changed, staged validation commands are named before handoff.
