---
name: docs-copy
version: "1.0"
description: >-
  Route documentation copy planning, rewriting, review, and claim-sensitive updates through the correct Livepeer Docs skills so wording changes stay accurate, scoped, and ready for handoff.
tier: 2
invoke_when:
  - "apply docs-copy framework to this task"
  - "rewrite this docs content for clarity and accuracy"
  - "plan a docs copy pass for this page"
  - "review and tighten this docs copy"
  - "update docs copy after facts changed"
primary_paths:
  - "v2"
  - "docs-guide/frameworks/content-system.mdx"
  - "docs-guide/policies/source-of-truth-policy.mdx"
  - "docs-guide/policies/quality-gates.mdx"
  - "ai-tools/ai-skills/page-authoring/SKILL.md"
  - "ai-tools/ai-skills/product-thinking/SKILL.md"
  - "ai-tools/ai-skills/templates"
primary_commands:
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
  - "node tests/run-all.js --staged --skip-browser"
  - "node tests/run-pr-checks.js --base-ref docs-v2-dev"
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

When to load references
- Load `references/task-routing.md` first so the request is classified into the correct docs-copy mode.
- Load `references/workflow.md` while executing the task so the output shape matches the selected mode.
- Load `references/handoff-checklist.md` before finishing so follow-up paths, checks, and claim notes are not missed.

Workflow
1. Classify the request as `copy-plan`, `copy-rewrite`, `copy-review`, `claim-update`, or `section-strategy`.
2. Use `references/task-routing.md` to choose the next specialist surface instead of assuming every copy task needs the same workflow.
3. Load `ai-tools/ai-skills/page-authoring/SKILL.md` for new pages or substantial MDX drafting, and load `ai-tools/ai-skills/product-thinking/SKILL.md` for IA or journey questions.
4. If wording changes touch factual or time-sensitive claims, load `ai-tools/ai-skills/templates/33-docs-source-verification.template.md` before editing.
5. If a verified or changed claim family affects more than one page, load `ai-tools/ai-skills/templates/35-docs-impact-propagation.template.md`.
6. When the task requires a verdict on changed copy, load `ai-tools/ai-skills/templates/34-docs-change-review.template.md` after the rewrite or verification work is complete.
7. Return the mode-specific output, the files touched or queued, and the checks run or deferred.

Deliverable Format
- One-line scope statement naming the page, diff, or section.
- Task mode used and specialist skill load order.
- Mode-specific output from `references/workflow.md`.
- Explicit follow-up list naming dependent pages, unresolved claims, or unrun checks.

Failure Modes / Fallback
- If the task is only language homogenization, route it to `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md`.
- If the page needs a structural split rather than a line edit, return `copy-plan` or `section-strategy` instead of forcing a rewrite.
- If factual verification cannot be completed in the same pass, keep the wording conservative and leave a verification queue.
- If another page appears to own the changed claim, preserve that canonical boundary and treat the current page as a dependent surface.

Validation Checklist
- [ ] The request was classified into one docs-copy mode before editing.
- [ ] The correct specialist skill or skills were loaded for the task.
- [ ] Claim-sensitive wording changes triggered verification before polish.
- [ ] The final output named follow-up files, unresolved claims, and checks run or deferred.
