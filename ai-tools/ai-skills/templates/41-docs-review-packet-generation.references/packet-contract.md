# Packet Contract

Use this contract whenever the skill generates a packet root.

## Packet Root

- Write into `tasks/reports/<scope>-review/<date>-copy-review-packet/` unless the user explicitly requests a different naming pattern.
- Keep packet roots dated so historical review runs remain diffable and reusable.
- Treat the packet root as report-only output. Do not mix content edits into the same run.

## Required Top-Level Files

Every packet root must contain:

- `00-master-packet.md`
- `packet-summary.json`
- one directory per section, ordered to match the nav source

## Required Section Files

Every section directory must contain:

- `01-copy-framework.md`
- `02-authoring-style.md`
- `03-research.md`
- `copy-framework-findings.json`
- `authoring-style-findings.json`
- `pattern-observer.json`
- `pattern-observer-<section-slug>.md`
- `research-pages.md`
- `research-pages.json`
- `research-pr.md`
- `research-pr.json`
- `research-summary.json`

If a section cannot produce one of these files, stop and record the blocker instead of silently degrading the contract.

## Phase Expectations

### Copy-framework

- Use the current copy lint, structure lint, pattern lint, and pattern observer surfaces.
- Summarize findings by page and by repeated section pattern.
- End with recommended copy or prose changes for later execution.

### Authoring-style

- Use the current page-authoring test surfaces and preserve the raw findings JSON.
- Deduplicate repeated warnings into page-level action families.
- Keep style findings separate from copy-framework findings unless one issue is genuinely both.

### Research

- Use the current research workflow and preserve both page-level and PR-style research outputs.
- Record stale, unsupported, contradictory, and volatile claims.
- Keep research out of the tracker queue even though the artifacts stay in the packet.

## Output Quality Bar

- Counts must be reconcilable back to raw findings.
- Section file lists must stay in nav order.
- File names must stay stable so later fix-execution runs can consume the packet without re-mapping it.
