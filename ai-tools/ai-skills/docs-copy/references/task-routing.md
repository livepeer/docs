# Task Routing

Use this decision table first so `docs-copy` loads only the specialist surface the
request actually needs.

| Situation | Task mode | Load next | Notes |
| --- | --- | --- | --- |
| Existing page needs clearer wording, tighter scope, or shorter prose | `copy-rewrite` | `ai-tools/ai-skills/page-authoring/SKILL.md` only if the rewrite becomes structural | Keep the page's existing question and page type intact. |
| User wants an edit plan before writing | `copy-plan` | `ai-tools/ai-skills/page-authoring/SKILL.md` when page-type fit is unclear | Return plan, risks, and follow-up files instead of speculative copy. |
| User wants a verdict on changed docs wording or a docs diff | `copy-review` | `ai-tools/ai-skills/templates/34-docs-change-review.template.md` | Findings come first, verdict second. |
| Wording changes alter product behavior, limits, dates, support, or terminology truth | `claim-update` | `ai-tools/ai-skills/templates/33-docs-source-verification.template.md` | Verify before rewriting. |
| A changed claim family appears in more than one page | `claim-update` | `ai-tools/ai-skills/templates/35-docs-impact-propagation.template.md` after verification | Queue every dependent page explicitly. |
| Request is really about section framing, navigation, journeys, or page sequencing | `section-strategy` | `ai-tools/ai-skills/product-thinking/SKILL.md` | Do not hide IA work inside a copy task. |
| Request is a new page or a major MDX draft, not an edit pass | `copy-rewrite` | `ai-tools/ai-skills/page-authoring/SKILL.md` | `docs-copy` may frame the task, but page-authoring owns the page build. |
| Request is repo-wide UK English cleanup or language homogenization | Out of scope | `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md` | Do not widen a local copy task into repo-wide cleanup. |

## Boundary Rules

- Prefer `docs-copy` when the user is asking about wording quality, copy clarity, or copy-task planning.
- Prefer `page-authoring` when the main risk is page structure, component usage, or MDX authoring mechanics.
- Prefer `product-thinking` when the main risk is page purpose, entry-point design, or reader journey fit.
- Prefer verification and propagation skills whenever wording changes could change the truth readers take away.
