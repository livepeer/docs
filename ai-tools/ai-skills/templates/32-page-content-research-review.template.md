---
name: page-content-research-review
version: "1.0"
description: Route high-rigor Livepeer Docs fact-checking across claim extraction, source verification, contradiction analysis, claim-family propagation, and final research reporting workflows consistently.
tier: 2
invoke_when:
  - "deep research this docs page"
  - "verify whether this page is accurate and valid"
  - "review this page for stale or unsupported claims"
primary_paths:
  - "v2"
  - "docs-guide/policies/source-of-truth-policy.mdx"
  - "tasks/research/claims"
  - "tasks/reports/repo-ops"
  - "tools/scripts/docs-fact-registry.js"
  - "tools/scripts/docs-page-research.js"
  - "ai-tools/ai-skills/templates"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
---

SKILL: Page Content Research Review

Goal
Route high-rigor factual research so Livepeer Docs content is checked against current evidence, contradictions are surfaced, and dependent pages are queued when a claim family changes.

Constraints
- Treat time-sensitive claims as unverified until confirmed against primary or clearly authoritative sources.
- Separate verified facts, conservative rewrites, and unresolved items. Do not blur them together.
- Propagate by claim family, not by nearest hyperlink.
- Do not silently widen scope from one page to a repo-wide rewrite. Report follow-on work explicitly.
- Do not spend the task on link, nav, or MDX drift unless it changes factual ownership or contradiction behavior.

Canonical docs-guide source
- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/catalog/ai-tools.mdx`

When to load references
- Load `references/workflow-router.md` at the start to choose whether the task needs verification only, review only, or full propagation.
- Load `references/report-template.md` before writing the final output so findings, evidence, and unresolved items stay in a consistent format.

Workflow
1. Classify the request: single-page fact check, claim-family review, or page-plus-propagation review.
2. Run `$docs-source-verification` to extract material claims and check them against ranked evidence sources.
3. Run the manual research runner so evidence, contradiction checks, and propagation data are produced in one report.
4. If a claim family changes or remains conflicted, run `$docs-impact-propagation` to identify every dependent page that should be reviewed.
5. Run `$docs-change-review` only for factual contradiction severity, overstatement, and claim-presentation quality.
6. Save outputs in the standard report contract so evidence, contradictions, and propagation queues can be reused.
7. If the reviewed claim family is reusable beyond the current page, update the repo-native fact registry in `tasks/research/claims/`.

Deliverable Format
- Short scope statement naming the page or diff reviewed.
- Evidence-backed findings grouped into: verified, conflicted, time-sensitive, unverified or historical-only.
- Explicit list of contradictory pages and affected pages when propagation is required.
- Standard sections in this order: Scope, Claims Reviewed, Verified Claims, Conflicted Claims, Time-Sensitive Claims, Unverified / Historical Claims, Cross-Page Contradictions, Propagation Queue, Evidence Sources, Validation.

Failure Modes / Fallback
- If no authoritative source can confirm a claim, downgrade or remove the claim and log the gap.
- If the page mixes multiple page types, preserve the highest-value factual owner in-place and note the structural split needed.
- If propagation cannot be completed in the same pass, leave a follow-up queue with exact dependent paths.

Validation Checklist
- [ ] Verification evidence exists for every retained high-risk claim.
- [ ] Review output distinguishes fact issues from writing or structure issues.
- [ ] Claim changes triggered a claim-family impact check instead of a page-only fix.
- [ ] Final report lists unresolved items, contradictory pages, and next files to touch.
