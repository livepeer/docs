---
name: docs-research-to-implementation-plan
version: "1.0"
description: >-
  Turn docs research outputs into a decision-complete implementation plan so
  factual findings become ordered repo work without re-deciding scope, risks,
  or validation gates.
tier: 2
invoke_when:
  - "turn this research report into an implementation plan"
  - "plan the fixes from this docs research run"
  - "convert this research packet into phased repo work"
  - "make an implementation plan from these research findings"
primary_paths:
  - "tools/scripts/docs-page-research.js"
  - "tools/scripts/docs-page-research-pr-report.js"
  - "tools/scripts/docs-research-packet.js"
  - "tasks/research/claims"
  - "docs-guide/frameworks/research-skill-workflow.mdx"
  - "docs-guide/tooling/research-to-implementation-plan-template.md"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
  - "node tools/scripts/docs-page-research-pr-report.js --files [a,b,c] --report-md /tmp/page-content-research-pr.md --report-json /tmp/page-content-research-pr.json"
---

SKILL: Docs Research To Implementation Plan

Goal
Turn existing research outputs into a planning-only implementation artifact that separates content fixes, registry fixes, and evidence-adapter work without executing any changes.

Constraints
- Consume existing research artifacts first. Do not restart research unless the current outputs are missing the minimum evidence needed to plan.
- Stay planning-only. Do not implement or rewrite docs inside this skill.
- Keep the plan scoped to research-driven workstreams: content wording, claim registry coverage, evidence discovery/ranking, propagation, and validation.
- Do not expand into generic repo planning when the findings are local to one claim family, page cluster, or packet tranche.
- Preserve unresolved items and confidence limits explicitly instead of hiding them inside the task list.

When to load references
- Load `references/findings-triage.md` first to classify each finding into content, registry, or evidence-adapter work.
- Load `references/plan-shape.md` before drafting the artifact so the output stays decision-complete and validation-ready.

Workflow
1. Read the research artifact set that already exists: page report, PR advisory report, or research packet.
2. Extract the affected claim families, contradictory pages, propagation targets, and evidence gaps.
3. Classify work into:
   - content changes
   - claim-registry changes
   - evidence-adapter or discovery changes
   - adjudication or follow-up research only
4. Sequence the work into phases that another agent or engineer can execute without making new governance decisions.
5. Map each phase to exact validation gates and manual evidence where automation is insufficient.
6. Produce one implementation plan that names target outcomes, risks, blockers, and the next execution surface.

Deliverable Format
- Scope statement naming the research artifact and the bounded implementation target.
- Affected claim families and pages.
- Ordered work phases with dependencies.
- Separate sections for content, registry, and evidence-adapter changes.
- Exact validation commands or manual evidence per phase.
- Risks, unresolved questions, and recommended next execution skill.

Failure Modes / Fallback
- If the research output is too thin to plan safely, stop and request the missing research pass instead of inventing tasks.
- If findings mix unrelated domains or page groups, split the plan into separate workstreams instead of one packed backlog.
- If a contradiction is really a source-of-truth dispute, keep it as a verification task rather than promoting it to implementation.

Validation Checklist
- [ ] The plan is derived from an existing research artifact, not from guesswork.
- [ ] Claim families, pages, and follow-up scope are explicit.
- [ ] Content, registry, and evidence-adapter work are separated.
- [ ] Every phase has exact validation gates or manual evidence.
- [ ] The output remains planning-only and does not drift into execution.
