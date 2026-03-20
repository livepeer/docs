# Tracker Contract

`00-master-packet.md` is the future execution tracker even when the packet run is report-only.

## Header Requirements

At the top, include:

- worktree
- branch
- packet root
- scope statement
- note that no content pages were edited in the packet run
- note that research artifacts exist on disk but are excluded from the actionable per-page queue

## Section Shape

For each section, include:

- section title
- `Status: not started`
- copy-framework pressure counts
- authoring-style pressure counts
- research pressure counts
- source report references:
  - `01-copy-framework.md`
  - `02-authoring-style.md`
  - `03-research.md`

Keep section order identical to the nav source.

## Page Bullet Rules

Every live page gets exactly two bullets:

- `[copy-framework]`
- `[authoring-style]`

Rules:

- never add a per-page `[research]` bullet
- keep bullets as deduplicated page-level action families, not raw lint dumps
- if a page has no style findings, write `[authoring-style] no action required`
- keep wording specific enough that a later fix-execution run can act without rebuilding the section reports from scratch

## Future Completion Mechanics

Even in a report-only run, the tracker should be ready for later execution:

- use normal bullets, not checkboxes
- preserve section status lines
- leave room for future strikethrough completion
- do not pre-strike or pre-complete anything in the packet-generation tranche
