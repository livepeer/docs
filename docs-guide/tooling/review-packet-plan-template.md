# Review Packet Plan Template

Use this template to plan a report-first docs review packet before generating outputs.

## Summary

- Worktree:
- Branch:
- Nav source:
- Scope:
- Output root:
- Packet naming convention:
- Editing guardrail: report-only, no content page edits

[//]: # (mdx-safe-markdown:divider)

## Live-Page Scope Rules

Include:

- live pages present in the declared nav source
- sections and page order exactly as the nav source defines them

Exclude:

- deprecated files such as `dep-*.mdx`
- helper files such as `review.md`, `verify-notes.md`, `to-include.md`
- tutorial helper sources such as `tutorial-sources.md` or `tutorials-resources.mdx`
- non-nav artifacts such as `.DS_Store`
- historical filenames that are no longer live nav entries

[//]: # (mdx-safe-markdown:divider)

## Packet Output Contract

Packet root:

- `tasks/reports/<scope>-review/<date>-copy-review-packet/`

Required top-level files:

- `00-master-packet.md`
- `packet-summary.json`
- one directory per nav section

Required section files:

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

[//]: # (mdx-safe-markdown:divider)

## Three-Phase Workflow

### Phase 1: Copy-framework

- derive one nav-ordered file list per section
- run copy-framework scripts against that list
- summarize page-level findings, repeated section patterns, and recommended copy changes

### Phase 2: Authoring-style

- run scoped page-authoring tests against the same section file list
- preserve raw `authoring-style-findings.json`
- summarize deduplicated page-level style and metadata fix families in `02-authoring-style.md`

### Phase 3: Research

- run the research workflow against the same section file list
- preserve raw page and PR research outputs
- summarize stale, unsupported, contradictory, and volatile claims in `03-research.md`

[//]: # (mdx-safe-markdown:divider)

## Tracker Contract

`00-master-packet.md` must be in execution-tracker form from the start.

Header must include:

- worktree
- branch
- packet root
- scope statement
- note that no content pages were edited
- note that research is on disk but excluded from the per-page action queue

For each section include:

- section title
- `Status: not started`
- copy-framework pressure counts
- authoring-style pressure counts
- research pressure counts
- report references

For each live page include exactly two bullets:

- `[copy-framework]`
- `[authoring-style]`

Rules:

- no `[research]` page bullets
- no strikethroughs during report generation
- pages with no style findings still get `[authoring-style] no action required`
- action bullets must be deduplicated summaries, not raw lint dumps

[//]: # (mdx-safe-markdown:divider)

## Packet Summary Contract

`packet-summary.json` must match `00-master-packet.md` exactly for:

- section names
- section order
- page membership
- copy-framework counts
- authoring-style counts
- research counts

[//]: # (mdx-safe-markdown:divider)

## Validation Checklist

- [ ] Packet root exists at the planned output path
- [ ] Every nav section in scope has a directory
- [ ] Every section directory contains all required files
- [ ] Only live nav pages were included
- [ ] Deprecated/helper files were excluded
- [ ] Every tracked page has one `[copy-framework]` and one `[authoring-style]` bullet
- [ ] Pages with no style findings still have explicit `no action required` style lines
- [ ] Research outputs exist but do not appear as per-page tracker bullets
- [ ] `packet-summary.json` matches the tracker exactly
- [ ] No content page files were edited

[//]: # (mdx-safe-markdown:divider)

## Assumptions

- The declared nav source is the only scope authority unless the user explicitly overrides it.
- The packet run is report-only unless the user explicitly asks for fix execution instead.
- Raw `authoring-style-findings.json` stays equal source-of-truth alongside `02-authoring-style.md`.
- A later execution tranche will use the packet rather than regenerate scope from scratch.
