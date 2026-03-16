---
name: docs-research-packet-generation
version: "1.0"
description: >-
  Generate report-only research packets from live nav scope, manifests, or
  explicit files and folders so section-level fact-check findings can be
  produced consistently without bespoke one-off runners.
tier: 2
invoke_when:
  - "generate a research packet"
  - "run research review on this tab folder or file set"
  - "review this docs section and write research reports"
  - "build a research packet for these docs pages"
primary_paths:
  - "tools/scripts/docs-research-packet.js"
  - "tools/scripts/docs-page-research.js"
  - "tools/scripts/docs-page-research-pr-report.js"
  - "tools/scripts/docs-fact-registry.js"
  - "tools/scripts/docs-research-adjudication.js"
  - "docs-guide/frameworks/research-skill-workflow.mdx"
  - "docs-guide/tooling/research-review-packet-plan-template.md"
  - "tasks/reports"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-research-adjudication.js --validate --ledger tasks/research/adjudication/page-content-research-outcomes.json"
  - "node tools/scripts/docs-research-packet.js --tab [name] --group [name] --out [path]"
---

SKILL: Docs Research Packet Generation

Goal
Generate reusable, report-only research packets for live docs scope without writing a new section-specific runner for each review request.

Constraints
- Keep the run research-only. Do not mix copy, style, or content-page edits into the same packet-generation pass.
- Derive live nav scope from the declared nav source first, not from folder guesses.
- Preserve page-run and PR-style research outputs separately when they disagree.
- Exclude deprecated and helper files by default instead of quietly treating them as live review scope.
- Do not write adjudication ledger entries during packet generation. Human review happens after the packet exists.

When to load references
- Load `references/scope-derivation.md` first so the packet scope and tranche order are locked before any report generation.
- Load `references/packet-contract.md` before writing outputs so the root packet and per-tranche artifacts match the standard contract.
- Load `references/validation-checklist.md` before finishing so scope, counts, and packet integrity are checked consistently.

Workflow
1. Classify the request into one packet mode: `nav`, `manifest`, or `paths`.
2. Validate the fact registry and adjudication ledger before tranche execution.
3. Derive tranche order from the nav source, manifest, or explicit path split requested by the user.
4. Run `tools/scripts/docs-page-research.js` for each tranche and save `research-pages.md` and `research-pages.json`.
5. Run `tools/scripts/docs-page-research-pr-report.js` for the same tranche and save `research-pr.md` and `research-pr.json`.
6. Build `03-research.md`, `research-summary.json`, `00-master-packet.md`, and `packet-summary.json` without collapsing page-run and PR-run deltas.
7. Return the packet root, the scope source used, the validation status, and any blocked tranche details.

Deliverable Format
- One-line scope statement naming the reviewed nav group, manifest, or explicit path set.
- Packet root path and source-of-truth input used.
- Per-tranche research summaries plus root rollup artifacts.
- Explicit note of blocked files, scope mismatches, or skipped scripts instead of invented counts.

Failure Modes / Fallback
- If the nav source and file tree disagree, stop before generating a partial packet and report the exact mismatch.
- If a manifest defines missing files or malformed tranches, fail with the manifest contract error instead of guessing replacements.
- If a folder run resolves only helper or deprecated files after exclusions, stop and report the empty in-scope result.
- If research scripts fail for a tranche, keep existing artifacts separate and record the blocked tranche instead of collapsing the run into a false success.

Validation Checklist
- [ ] Exactly one scope mode was chosen: nav, manifest, or paths.
- [ ] Registry and adjudication validation both passed before tranche execution.
- [ ] Packet outputs include `00-master-packet.md`, `packet-summary.json`, and the full per-tranche research artifact set.
- [ ] Deprecated and helper files were excluded unless the scope contract explicitly kept them live.
- [ ] Page-run and PR-run deltas remain visible in the packet summaries when they differ.
