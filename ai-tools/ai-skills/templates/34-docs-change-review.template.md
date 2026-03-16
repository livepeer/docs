---
name: docs-change-review
version: "1.0"
description: Review Livepeer Docs pages or diffs for factual contradictions, overstatement, ownership overlap, historical drift, unresolved evidence gaps, and reader-facing claim quality.
tier: 2
invoke_when:
  - "review this docs diff"
  - "check this page for clarity and correctness"
  - "give a docs review verdict on these changes"
primary_paths:
  - "v2"
  - "tasks/research/claims"
  - "tools/scripts/docs-page-research.js"
  - "docs-guide/policies/quality-gates.mdx"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
---

SKILL: Docs Change Review

Goal
Review docs changes for factual accuracy, contradiction risk, ownership overlap, and claim presentation quality with a clear severity-based verdict.

Constraints
- Findings come first. Summaries are secondary.
- Treat factual risk as more important than copy polish.
- Review the page in the context of its page type and reader job, not as generic markdown.
- Flag duplication and ownership overlap when a change creates competing canonical pages.
- Do not spend the review on links, nav, or MDX mechanics unless they directly change factual ownership or reader truth.

Canonical docs-guide source
- `docs-guide/policies/quality-gates.mdx`
- `docs-guide/frameworks/content-system.mdx`

When to load references
- Load `references/review-rubric.md` before reviewing so page-type criteria and repo-specific checks stay consistent.
- Load `references/severity-and-verdicts.md` before writing the response so the verdict matches the actual risk and testing state.

Workflow
1. Identify the page type, intended reader, and primary task the page is meant to support.
2. Review for factual issues first, then contradictions across active pages, ownership overlap, and finally clarity and maintainability issues.
3. Check whether the page overstates certainty or presents volatile claims as durable truth.
4. Produce a severity-ranked finding list with file references and testing gaps.
5. End with a concise verdict: ready, ready with follow-up, or not ready.

Deliverable Format
- Severity-ranked findings with file references.
- Open questions or assumptions that block confidence.
- Short verdict and validation status.
- Standard output sections should preserve the shared research report order when the review is part of a broader research pass.

Failure Modes / Fallback
- If the diff is too large for a trustworthy static review, split findings by page or responsibility boundary.
- If the page type is unclear, call out the ambiguity as a review risk rather than guessing silently.
- If tests could not be run, state that explicitly and lower confidence in the verdict.

Validation Checklist
- [ ] Findings are ordered by user risk, not by file order.
- [ ] Review criteria matched the page type and reader intent.
- [ ] Duplication and ownership overlap were called out where relevant.
- [ ] Final verdict states confidence and any unrun checks.
