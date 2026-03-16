# Gateway Concepts Copy + Style + Research Execution Tracker

- Worktree: `Docs-v2-dev-gateway-concepts`
- Branch: `docs-v2-dev-gateway-concepts`
- Packet root: `tasks/reports/gateway-concepts-review/2026-03-17-copy-review-packet`
- Scope: all live `v2/gateways/concepts` pages present in `docs-gate-work.json`.
- This tranche executed copy/style fixes for the live gateway concepts pages.
- Research reports are present on disk for the section, but research is excluded from the actionable per-page bullet queue.
- Use `authoring-style-findings.json` alongside `02-authoring-style.md` when converting this packet into a future fix queue.

## Execution Order
1. Concepts

## Completion Rules
- Strike through an individual task bullet only when that specific task is completed and the relevant targeted checks have been rerun.
- A page is complete when both its `[copy-framework]` and `[authoring-style]` bullets are struck through.
- A section is complete when every page task in that section is struck through.
- Leave report-reference lines readable.
- Do not add research bullets to the tracker action surface.

## ~~Concepts~~

- ~~Status: complete~~
- Copy-framework pressure: 6 blocking / 59 warnings
- Authoring/style pressure: 0 blocking / 39 warnings
- Research pressure: 11 blocking / 36 warnings
- Source reports: `01-concepts/01-copy-framework.md`, `01-concepts/02-authoring-style.md`, `01-concepts/03-research.md`

### `role.mdx`
- ~~[copy-framework] remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] fix MDX or component syntax issues; adjust guide layout components to match authoring rules.~~

### `capabilities.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] fix MDX or component syntax issues; adjust guide layout components to match authoring rules.~~

### `architecture.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] adjust guide layout components to match authoring rules; replace templated opening language with a direct explanatory lead.~~

### `business-model.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; fix MDX or component syntax issues; adjust guide layout components to match authoring rules.~~

- Completion note: reran `copy-lint.test`, `lint-copy`, `lint-structure`, `lint-patterns`, scoped `style-guide`, `links-imports`, `mdx`, `quality`, and the supplemental docs-authoring-rules checks. Accepted residual `lint-copy` warnings are heuristic false positives from Mermaid or table markup in `role.mdx`, `capabilities.mdx`, and `business-model.mdx`.
