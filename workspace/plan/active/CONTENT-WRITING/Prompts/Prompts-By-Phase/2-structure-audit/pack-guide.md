# Phase 2 — Structure Audit: Pack Guide

**Prompt**: `structure-audit.md`
**Resources**: `phase-resources.md`
**Test outputs**: `testing/`

---

## What This Phase Produces

A tab map: the current state of the tab measured against the ideal design from Phase 1. Output contains a page inventory, ideal→canonical mapping with position types, gap analysis (P0/P1/P2), orphan analysis, and cross-tab handoff audit. This is the work order for Phases 3 and 4.

---

## When to Run This Phase

- After Phase 1 is complete and approved for this tab
- Before any page-level content or layout work begins
- When re-auditing a tab after significant structural changes

**Do not run** without an approved Phase 1 output. The structure audit measures actual against ideal — without the ideal, it has no standard to measure against.

---

## Pre-flight (Human Steps Before Running the Prompt)

- [ ] **Phase 1 output approved**: Path confirmed in the context block. If Phase 1 was run but not reviewed at checkpoints, review it now — the structure audit inherits all Phase 1 decisions.
- [ ] **Page type taxonomy decision made**: The prompt uses the 7-type canonical set. The validator still uses the old 12-type schema. Decide before running: are you auditing to the new canonical standard (flag old-schema values as issues) or the current passing standard (accept old-schema values)? The answer determines which frontmatter values get flagged. Recommended: audit to the new canonical standard and flag old-schema values so they're visible.
- [ ] **Select from `phase-resources.md`**: Review the candidate resources using first principles. The canonical section vocabulary is already in the prompt. You likely need the Phase 1 output (required), docs.json (required), and possibly `ia-maps-and-templates.md` if you want a quality benchmark. Resist loading more than necessary.

---

## Running Order

1. Fill the context block (TAB, AUDIENCE_DESIGN_FILE, DOCS_JSON_PATH, TAB_FOLDER)
2. Phase 3.1 — Read and extract Phase 1 audience design
3. Phase 3.2 — Inventory the existing tab — pause for human spot-check (sample 2–3 pages to verify AI read them correctly)
4. Phase 3.3 — Map ideal sections to canonical structure — pause for human review of position types and routing page check
5. Phase 3.4 — Gap analysis
6. Phase 3.5 — Orphan analysis
7. Phase 3.6 — Cross-tab boundary check
8. Produce output document
9. Human checkpoint: review all P0 gaps and confirm recommendations before marking DRAFT → APPROVED

---

## Dos

- **Do** distinguish `empty` from `missing`. An `empty` section already exists in docs.json — it's a live dead-end nav item that readers will click and find nothing. This is a more urgent UX problem than a `missing` section that simply hasn't been created yet.
- **Do** enforce the position validation. The canonical vocabulary already states that positions 1–3 are linear and 4–6 are on-demand. The audit must check whether the actual sections respect this. A FAQ buried at position 6 is fine. A quickstart buried at position 5 is a P0 structural failure.
- **Do** flag old-schema frontmatter values explicitly. `pageType: how_to`, `pageType: quickstart`, `pageType: landing` are old-schema values. They will fail CI once the validator is updated. Surface them now so they can be fixed in Phase 4 rather than discovered at commit time.
- **Do** trace orphans back to the Phase 1 jobs list before recommending removal. An orphan that serves a job that wasn't captured in Phase 1 is not noise — it may indicate a Phase 1 gap. Flag it as "serves unstated need — verify in Phase 1" rather than "remove."
- **Do** check both directions in the cross-tab audit. The tab should link OUT to tabs it routes readers to, and it should be reachable FROM the tabs that route readers here. Both directions matter.

## Don'ts

- **Don't** read the full content of every page. The prompt is explicit: read the portal, navigator, and one representative page per section. Full-page reading is Phase 3's job. Phase 2 is structural.
- **Don't** recommend removing orphans on the basis of topic overlap alone. "This page covers something that About also covers" is not grounds for removal — About covers everything conceptually. The question is: does this page serve a job in the Phase 1 ideal structure? If yes, keep it. If no, investigate why it exists before recommending removal.
- **Don't** accept vague gap recommendations. "Add more content to the concepts section" is not a recommendation. "Add a `guide` page at `concepts/economics` covering delegation reward calculation for the delegator persona" is.
- **Don't** skip the routing page check if the Phase 1 self-identification check flagged an ambiguous audience label. If Phase 1 flagged `developer` as mapping to 3 different personas, a routing page is P0 — not optional.

---

## What Good Output Looks Like

**Good inventory row**: `guides/payments-and-pricing | 6 pages | current | 2/6 frontmatter complete (4 missing audience field)`
**Bad inventory row**: `guides | complete | yes`

**Good gap**: `P0 | Quickstart path for off-chain mode | No section routes the Graduate persona to off-chain setup — they are forced through on-chain funding before any testable action | Recommendation: add instruction page at setup/off-chain-quickstart`
**Bad gap**: `P1 | Missing content about configuration | Recommendation: add more configuration docs`

**Good orphan assessment**: `v2/orchestrators/guides/ai-configuration.mdx | Serves "configure AI pipeline" job — not in Phase 1 ideal structure, but job is real. Recommendation: add job to Phase 1, keep page.`
**Bad orphan assessment**: `some-page.mdx | Remove — not in the ideal structure`

---

## Common Failure Modes

| Failure | Signal | Fix |
|---|---|---|
| AI reads docs.json only, not actual pages | Inventory shows all sections as `current` with no detail | Ask AI to read one representative page per section and check frontmatter |
| `empty` and `missing` conflated | Status column uses only `current` / `missing` | Explicitly ask AI to check whether a nav entry exists in docs.json with zero pages |
| Position violations missed | Linear quickstart appears at position 5 with no flag | Explicitly ask: "Are any sections that must be completed sequentially in positions 4–6?" |
| Vague recommendations | Gap column says "add more content" | Push back: "Specify page type, path, and which persona the page serves" |
| Orphan analysis skipped | No orphan section in output | Ask for Phase 3.5 explicitly if missing |
| Old-schema frontmatter not flagged | Inventory shows frontmatter as `complete` for pages with `pageType: how_to` | Clarify: canonical values only — `how_to` is not canonical |

---

## After Running — Testing & Iteration

Record your test run in `testing/`. Minimum entry:
- Date
- Tab audited
- Which resources were loaded
- Quality assessment: did the gap analysis surface real issues, or was it shallow?
- Updates made to the prompt or resource list as a result

Update test status in `phase-resources.md` for resources used.
