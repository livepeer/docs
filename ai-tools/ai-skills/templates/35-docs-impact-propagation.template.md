---
name: docs-impact-propagation
version: "1.0"
description: Map changed claim families to every dependent page, glossary, example, comparison, and reference surface that should be verified or updated.
tier: 2
invoke_when:
  - "find every page affected by this docs change"
  - "propagate this claim update across the docs"
  - "identify downstream pages that depend on this statement"
primary_paths:
  - "v2"
  - "tools/scripts/docs-fact-registry.js"
  - "tools/scripts/docs-page-research.js"
  - "tasks/research/claims"
  - "tasks/reports"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
---

SKILL: Docs Impact Propagation

Goal
Find and queue every page, glossary entry, example, and support surface that depends on a changed claim so docs stay consistent after a factual update.

Constraints
- Propagate by entity, workflow, API, limit, or terminology claim, not by direct links alone.
- Distinguish canonical pages from context pages and supporting references.
- Do not assume the edited page is the only owner of the changed claim.
- Prefer a complete propagation queue over partial silent edits.
- Renamed concepts and stale aliases only matter here when they alter factual ownership or factual contradictions.

Canonical docs-guide source
- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/features/feature-map.mdx`

When to load references
- Load `references/claim-map-method.md` before searching so the impact pass is claim-family-led rather than route-led.
- Load `references/propagation-checklist.md` while finishing the task so dependent page classes are not missed.
- Consult `tasks/research/claims/*.json` first when the changed claim family is already tracked.

Workflow
1. State the changed claim in one sentence and identify its owning entity, workflow, or term.
2. Query the fact registry first; if a tracked claim family exists, use it as the starting propagation set rather than rebuilding the map from scratch.
3. Find the canonical page for that claim, then enumerate direct pages, context pages, examples, glossary entries, FAQs, and migration or comparison content that rely on it.
4. Identify any pages that restate the same fact with different certainty, dates, or numbers and treat those as contradiction risks.
5. Classify each dependent file as update now, verify only, follow-up, or historical-review.
6. Apply or recommend cross-page updates in an order that preserves canonical ownership.
7. Return the propagation map with exact paths and rationale for each file.

Deliverable Format
- One-line changed-claim summary.
- Propagation table listing affected files, page class, and why they depend on the claim.
- Follow-up queue for pages that were not updated in the current pass.

Failure Modes / Fallback
- If no canonical owner exists, stop and recommend creating or clarifying one before broad propagation.
- If several pages duplicate the same claim, identify the duplicate set and nominate the canonical owner.
- If a dependent page cannot be safely updated without more verification, keep it in the queue instead of forcing parity language.

Validation Checklist
- [ ] The changed claim is explicit and scoped to an entity, workflow, limit, or term.
- [ ] Canonical, glossary/reference, and context pages are distinguished.
- [ ] Glossary, examples, FAQs, and comparison pages were considered, not just direct guides.
- [ ] The output provides exact follow-up paths for anything left unresolved.
