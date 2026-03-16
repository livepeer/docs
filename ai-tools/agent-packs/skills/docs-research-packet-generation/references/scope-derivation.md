# Scope Derivation

Derive packet scope before generating any research output.

## Source Of Truth

- Nav mode: start from the declared nav source, usually `tools/config/scoped-navigation/docs-gate-work.json`.
- Manifest mode: start from the declared manifest file and treat its tranche order as authoritative.
- Paths mode: start from the explicit files and folders given in the request, then apply the default helper/deprecated exclusions.

Do not start from a folder walk when the user already gave a nav group or manifest.

## Scope Rules

Include:

- live nav pages only for nav mode
- manifest tranche pages only for manifest mode
- explicit files and folder-resolved docs pages only for paths mode

Exclude by default:

- `dep-*.mdx`
- `x-deprecated/**`
- `review.md`
- `verify-notes.md`
- `to-include.md`
- `tutorial-sources.md`
- `tutorials-resources.mdx`
- `.DS_Store`

## Tranche Rules

- Nav mode: one tranche per nav subgroup in nav order
- Manifest mode: one tranche per manifest tranche in manifest order
- Paths mode without split: one tranche for the full explicit set
- Paths mode with `--split-by=dir`: one tranche per resolved directory

## Mismatch Handling

If the declared scope and file tree disagree:

- stop before packet generation
- list the exact missing or duplicate file
- do not guess replacements or silently widen the scope
