# Research Review Packet Plan Template

Use this template to plan a report-first research packet before generating outputs.

## Summary

- Worktree:
- Branch:
- Scope mode:
- Source of truth:
- Scope statement:
- Output root:
- Packet naming convention:
- Editing guardrail: research-only, report-only, no content page edits

[//]: # (mdx-safe-markdown:divider)

## Source-Of-Truth Scope Rules

Choose exactly one scope mode.

### Live nav scope

Required inputs:

- nav source path
- version
- language
- tab
- group
- optional section filter

Rules:

- derive tranche order from nav subgroup order
- include live nav pages only
- do not substitute deprecated or historical files

### Folder or file scope

Required inputs:

- explicit files and or folders
- optional `split-by=dir`

Rules:

- keep only in-repo docs files
- exclude helper and deprecated files by default
- if no split is requested, keep one tranche for the full explicit set

### Manifest scope

Required inputs:

- manifest path
- manifest name
- ordered tranches
- output root or explicit `--out`

Rules:

- treat the manifest as the exact tranche contract
- fail on missing tranche files
- do not reorder or merge manifest tranches

[//]: # (mdx-safe-markdown:divider)

## Tranche Structure Rules

- nav mode: one tranche per nav subgroup in nav order
- manifest mode: one tranche per manifest tranche in manifest order
- paths mode without split: one tranche for the full explicit set
- paths mode with `split-by=dir`: one tranche per resolved directory

Each tranche must record:

- title
- slug
- exact page membership in order

[//]: # (mdx-safe-markdown:divider)

## Output Contract

Packet root:

- `tasks/reports/<scope>-review/<packet-root>/`

Required top-level files:

- `00-master-packet.md`
- `packet-summary.json`

Required tranche files:

- `03-research.md`
- `research-pages.md`
- `research-pages.json`
- `research-pr.md`
- `research-pr.json`
- `research-summary.json`

[//]: # (mdx-safe-markdown:divider)

## Per-Tranche Run Procedure

Preflight once:

- validate the fact registry
- validate the adjudication ledger
- confirm all in-scope files resolve

For each tranche:

- run `docs-page-research.js` on the tranche file list
- run `docs-page-research-pr-report.js` on the same tranche file list
- preserve raw page and PR artifacts
- write `03-research.md`
- write `research-summary.json`

`03-research.md` must include:

- validation status
- verified, conflicted, time-sensitive, unverified or historical counts
- contradiction-group, propagation, and evidence-source counts
- conflicted, time-sensitive, and unresolved claim lists
- recommended research-driven changes
- registry/path drift
- page-vs-PR delta when present

[//]: # (mdx-safe-markdown:divider)

## Master-Packet Rollup Contract

`00-master-packet.md` must include:

- worktree
- branch
- scope mode
- source nav, manifest, or explicit path input
- scope statement
- output root
- tranche execution order
- aggregate totals
- per-tranche scoreboard
- cross-tranche findings rollup

`packet-summary.json` must match the master packet for:

- tranche order
- page membership
- run status
- verified, conflicted, time-sensitive, unverified counts
- contradiction-group counts
- propagation counts
- evidence-source counts

[//]: # (mdx-safe-markdown:divider)

## Failure And Rerun Rules

- If a nav or manifest file is missing, block the run instead of substituting a non-live file.
- If page-run and PR-run materially disagree, preserve both and call out the delta.
- If a tranche is noisy because it mixes unrelated pages, keep the declared tranche intact for the first pass and log a future split recommendation.
- If registry/path drift appears, report it as a finding. Do not repair the registry inside the packet-generation pass unless the task explicitly expands scope.

[//]: # (mdx-safe-markdown:divider)

## Validation Checklist

- [ ] Exactly one scope mode is selected.
- [ ] Registry validation passed.
- [ ] Adjudication-ledger validation passed.
- [ ] Every in-scope page is covered exactly once.
- [ ] Deprecated and helper files were excluded by default.
- [ ] Every tranche directory contains the full research artifact set.
- [ ] `packet-summary.json` matches `00-master-packet.md`.
- [ ] No content pages were edited during packet generation.

[//]: # (mdx-safe-markdown:divider)

## Example Inputs

### Live nav example

- Nav source: `tools/config/scoped-navigation/docs-gate-work.json`
- Scope mode: `nav`
- Selector: `v2 / en / Orchestrators / Guides`
- Output root: `tasks/reports/orchestrator-guides-review/research-guides-review`

### Folder or file example

- Scope mode: `paths`
- Folders: `v2/gateways/guides/monitoring-and-tooling`
- Files: `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- Split rule: `dir`

### Manifest example

- Scope mode: `manifest`
- Manifest: `tasks/reports/gateway-guides-review/research-packet-manifest.json`
- Output root: manifest-defined or explicit `--out`

[//]: # (mdx-safe-markdown:divider)

## Assumptions

- The packet run is research-only and report-only.
- Human adjudication happens after packet generation, not during it.
- The declared source of truth controls tranche order and page membership unless the user explicitly changes scope.
- The packet contract should stay reusable across Orchestrators, Gateways, Concepts, Setup, and arbitrary mixed route groups.
