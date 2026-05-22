---
name: docs-review-packet-generation
version: "1.0"
description: >-
  Generate dated, report-only docs review packets from live navigation scope so
  copy-framework, authoring-style, and research findings land in reusable
  trackers, summaries, and section artifact sets.
tier: 2
invoke_when:
  - "generate a docs review packet"
  - "review this tab or section and create packet reports"
  - "build copy style and research reports for live docs pages"
  - "create a tracker and report packet for this docs section"
primary_paths:
  - "tools/config/scoped-navigation"
  - "tasks/reports"
  - "ai-tools/ai-skills/docs-copy/SKILL.md"
  - "ai-tools/ai-skills/page-authoring/SKILL.md"
  - "ai-tools/ai-skills/templates/32-page-content-research-review.template.md"
  - "docs-guide/tooling/review-packet-plan-template.md"
primary_commands:
  - "node tests/unit/copy-lint.test.js --files [csv]"
  - "node tools/scripts/lint-copy.js [file-or-glob]"
  - "node tools/scripts/lint-structure.js [file]"
  - "node tools/scripts/lint-patterns.js [file-or-glob]"
  - "node tools/scripts/pattern-observer.js --tab [name] --output [file]"
  - "node tools/scripts/docs-page-research.js --files [csv] --report-md [file] --report-json [file]"
  - "node tools/scripts/docs-page-research-pr-report.js --files [csv] --report-md [file] --report-json [file]"
---

SKILL: Docs Review Packet Generation

Goal
Generate dated three-phase review packets from live navigation scope without editing content pages.

Constraints
- Keep the run report-only. Do not edit page files while generating the packet.
- Derive page membership from the declared nav source first, not from folder guesses.
- Include only live pages and exclude deprecated docs, helper notes, review files, and non-nav artifacts.
- Use `ai-tools/ai-skills/docs-copy/SKILL.md` for copy-framework expectations, `ai-tools/ai-skills/page-authoring/SKILL.md` for authoring-style expectations, and `ai-tools/ai-skills/templates/32-page-content-research-review.template.md` for research routing.
- Preserve raw `authoring-style-findings.json` alongside `02-authoring-style.md`; the raw JSON stays equal source-of-truth when the markdown summary is incomplete.
- The tracker must start in execution form with exactly one `[copy-framework]` bullet and one `[authoring-style]` bullet per live page, and no per-page research bullets.

When to load references
- Load `references/scope-derivation.md` first so section membership, nav order, and live-page exclusions are locked before any report generation.
- Load `references/packet-contract.md` before writing outputs so the packet root, per-section files, and raw artifacts follow the standard contract.
- Load `references/tracker-contract.md` before drafting `00-master-packet.md` so queue bullets, counts, and future strikethrough mechanics stay consistent.
- Load `references/validation-checklist.md` before finishing so packet integrity checks are not skipped.

Workflow
1. Confirm the target worktree, branch, nav source, and output root, then load `docs-guide/tooling/review-packet-plan-template.md` if the run still needs a formal packet plan.
2. Derive section order and live page membership from the declared nav source using `references/scope-derivation.md`; build one nav-ordered file list per section and explicitly exclude helper or deprecated files.
3. Create a dated packet root under `tasks/reports/<scope>-review/` and create one section directory per nav section.
4. Run the copy-framework phase for each section with the current lint and pattern scripts, then summarize the findings in `01-copy-framework.md`.
5. Run the authoring-style phase for each section with the scoped authoring tests, preserve the raw findings JSON, and summarize the deduplicated page-level action families in `02-authoring-style.md`.
6. Run the research phase for each section with the current research workflow, then summarize stale, unsupported, contradictory, or volatile claims in `03-research.md`.
7. Build `00-master-packet.md` in tracker form and `packet-summary.json` so counts, page membership, and section order match exactly.
8. Finish with packet-only validation from `references/validation-checklist.md` and report any gaps instead of filling them with guessed outputs.

Deliverable Format
- One-line scope statement naming the reviewed tab, guide set, or declared content scope.
- Packet root path and nav source used.
- `00-master-packet.md`, `packet-summary.json`, and per-section directories containing all three phases and raw artifacts.
- Validation status naming any skipped commands, partial sections, or unresolved source-of-truth ambiguities.

Failure Modes / Fallback
- If the nav source and file tree disagree, report the mismatch and stop before generating a partial packet.
- If a section mixes live pages and deprecated helpers, keep only the live pages in scope and list the excluded files explicitly.
- If a required script or test cannot run, keep the packet report-only and record the missing artifact instead of inventing counts.
- If the requested scope already has a packet root, create a new dated sibling instead of overwriting the old packet silently.

Validation Checklist
- [ ] Section order and page membership come from the declared nav source.
- [ ] Packet outputs include all three phases plus the required raw artifacts.
- [ ] `00-master-packet.md` is tracker-shaped with exactly two per-page bullets and no research bullets.
- [ ] `packet-summary.json` matches the tracker in section order, page membership, and count families.
- [ ] No content pages were edited during packet generation.
