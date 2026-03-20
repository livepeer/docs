# Scope Derivation

Derive scope before generating any section output.

## Source Of Truth

- Start from the declared nav source, usually `tools/config/scoped-navigation/docs-gate-work.json`.
- Use the nav source to determine:
  - section order
  - page order inside each section
  - the exact set of live pages in scope

Do not start from a folder walk and then try to guess which files matter.

## Live-Page Filters

Include:

- only live pages present in the nav source for the requested scope
- only the current filenames or routes represented there

Exclude:

- `dep-*.mdx`
- `review.md`
- `verify-notes.md`
- `to-include.md`
- `tutorial-sources.md`
- `tutorials-resources.mdx`
- `.DS_Store`
- absorbed or renamed historical filenames that are not current nav entries

If a historical name maps cleanly to a current nav page, record the mapping in the section report, but do not treat the old file as in-scope output.

## Section File Lists

For each section:

1. build one explicit file list in nav order
2. reuse the same file list across copy-framework, authoring-style, and research
3. keep mixed-directory sections as one logical section if the nav groups them together

Examples:

- a combined payments section can span more than one folder if the nav does
- a single tutorials section can include pages from more than one subsection if the nav does

## Mismatch Handling

If the nav source and the file tree disagree:

- stop before generating the packet
- list the missing page, extra file, or ambiguous mapping
- ask for a scope decision only after documenting the exact mismatch
