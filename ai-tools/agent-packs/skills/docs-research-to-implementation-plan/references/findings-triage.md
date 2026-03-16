# Findings Triage

Use the research output to classify work before writing tasks.

## Triage Buckets

- `content-change`
  - wording is too strong
  - page content conflicts with stronger evidence
  - a current page needs dates, caveats, or removals
- `registry-change`
  - claim-family coverage is missing
  - canonical owner or dependent-page mapping is stale
  - truth mode or discovery config is wrong
- `evidence-adapter-change`
  - source ranking picked the wrong winner
  - GitHub or forum discovery is missing obvious candidates
  - repo hidden-lane context is needed but not surfaced
- `research-only`
  - evidence is still too weak to act
  - the contradiction is unresolved outside the repo
  - human adjudication is required before implementation

## Planning Rules

- Put content changes first only when the evidence is already strong.
- Put registry changes first when repeated page edits would otherwise reintroduce the same factual drift.
- Put evidence-adapter changes first when multiple families are failing for the same ranking or discovery reason.
- Keep unresolved source disputes as research-only follow-up, not implementation.
