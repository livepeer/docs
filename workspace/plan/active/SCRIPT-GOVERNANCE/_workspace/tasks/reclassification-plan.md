# Script Reclassification Subplan

> Based on findings from `audit-report.md`. 27 scripts need type reclassification.
> This is a subplan of the main `plan.md` — executes as part of the deep audit task.

---

## Scope

27 scripts mistyped + 8 dual-purpose validators + 1 output conflict + 1 misplaced concern.

This is broken into 5 waves, each independently committable and testable.

---

## Wave 1 — Clear-cut reclassifications (low risk)

Scripts where the current type is obviously wrong and the new type is unambiguous.
No splitting needed. Just `git mv` to the correct type folder.

### Dispatch → Automation (8 scripts)

These don't spawn other scripts — they read inputs and write outputs directly.

| Script | From | To |
|---|---|---|
| `cross-agent-packager.js` | `dispatch/ai/agents/` | `automations/ai/agents/` |
| `export-portable-skills.js` | `dispatch/ai/agents/` | `automations/ai/agents/` |
| `sync-codex-skills.js` | `dispatch/ai/agents/` | `automations/ai/agents/` |
| `lock-release.js` | `dispatch/ai/codex/` | `automations/ai/codex/` |
| `task-cleanup.js` | `dispatch/ai/codex/` | `automations/ai/codex/` |
| `task-preflight.js` | `dispatch/ai/codex/` | `automations/ai/codex/` |
| `publish-v2-internal-reports.js` | `dispatch/governance/pipelines/` | `automations/governance/pipelines/` |
| `test-mintlify-version-language-toggle.js` | `automations/content/language-translation/` | `validators/content/language-translation/` (integration test) |

### Dispatch → Validator (2 scripts)

These check conditions and exit 0/1 — they're validators, not dispatchers.

| Script | From | To |
|---|---|---|
| `validate-locks.js` | `dispatch/ai/codex/` | `validators/ai/codex/` |
| `check-no-ai-stash.sh` | `dispatch/ai/codex/` | `validators/ai/codex/` |

### Borderline dispatch → validator (1 script — discuss)

| Script | From | To | Notes |
|---|---|---|---|
| `check-codex-pr-overlap.js` | `dispatch/ai/codex/` | `validators/ai/codex/` ? | Calls GitHub API but fundamentally checks a condition. Borderline. |

**Wave 1 total: 11 scripts. CHECKPOINT before proceeding.**

---

## Wave 2 — Generator → Audit reclassifications (5 scripts)

Scripts labelled "generator" that actually scan/analyse and produce reports (read-only on source).

| Script | From | To |
|---|---|---|
| `terminology-search.js` | `generators/content/reference/` | `audits/content/reference/` |
| `scan-component-imports.js` | `generators/components/library/` | `audits/components/library/` |
| `generate-content-gap-reconciliation.js` | `generators/content/reconciliation/` | `audits/content/reconciliation/` |
| `generate-v2-folder-governance-cleanup-matrix.js` | `generators/governance/reports/` | `audits/governance/reports/` |
| `generate-component-governance-remediation-reports.js` | `generators/governance/reports/` | `audits/governance/reports/` |

**Wave 2 total: 5 scripts. CHECKPOINT.**

---

## Wave 3 — Generator → Remediator reclassifications (3 scripts)

Scripts labelled "generator" that edit existing files in-place.

| Script | From | To |
|---|---|---|
| `update-jsdoc-headers.js` | `generators/governance/scaffold/` | `remediators/governance/scaffold/` |
| `fix-usage-paths.js` | `generators/governance/scaffold/` | `remediators/governance/scaffold/` |
| `generate-seo.js` | `generators/content/seo/` | `remediators/content/seo/` |

### Remediator → Audit (1 script)

| Script | From | To | Reason |
|---|---|---|---|
| `style-and-language-homogenizer-en-gb.js` | `remediators/content/style/` | `audits/content/style/` | Only scans and writes reports. Never modifies source. |

**Wave 3 total: 4 scripts. CHECKPOINT.**

---

## Wave 4 — Audit → Dispatch/Validator reclassifications (6 scripts)

The veracity pipeline and repo orchestrator.

| Script | From | To | Reason |
|---|---|---|---|
| `docs-fact-registry.js` | `audits/content/veracity/` | `validators/content/veracity/` | Primary mode is `--validate` with exit 0/1 |
| `docs-page-research-pr-report.js` | `audits/content/veracity/` | `dispatch/content/veracity/` | Spawns docs-page-research.js, reformats output |
| `docs-research-packet.js` | `audits/content/veracity/` | `dispatch/content/veracity/` | Batch orchestrator, spawns 4 scripts |
| `orchestrator-guides-research-review.js` | `audits/content/veracity/` | `dispatch/content/veracity/` | Pure delegation wrapper |
| `repo-audit-orchestrator.js` | `audits/governance/repo/` | `dispatch/governance/repo/` | Top-level pipeline dispatcher |
| `audit-python.py` | `audits/governance/repo/` | `audits/content/quality/` | Audits v2 content, not governance |

### Complex: `docs-research-adjudication.js` (needs split discussion)

Currently `audits/content/veracity/`. Has 3 modes:
- `--validate` → validator
- `--record` → remediator (mutates ledger)
- `--summary` → generator (produces report)

**Options**: (a) leave as-is and document, (b) split into 3 scripts, (c) keep in validators since `--validate` is the primary gate mode.

**Wave 4 total: 6 scripts + 1 discussion item. CHECKPOINT.**

---

## Wave 5 — Dual-purpose validators and overlaps (deferred)

These don't need moving — they need either splitting or documenting.

### 8 dual-purpose validators with --fix modes

**Option A (split)**: Create a remediator counterpart for each, move --fix logic there.
**Option B (document)**: Keep as-is, document --fix as an intentional secondary mode in `@pipeline`.

| Script | If split, remediator would be... |
|---|---|
| `check-grammar-en-gb.js` | `repair-grammar-en-gb.js` |
| `check-proper-nouns.js` | `repair-proper-nouns.js` |
| `check-double-headers.js` | `repair-double-headers.js` |
| `check-page-endings.js` | `repair-page-endings.js` |
| `check-component-css.js` | `repair-component-css.js` |
| `enforce-generated-file-banners.js` | Already has separate --check/--write. Just needs clearer naming. |
| `validate-ai-tools-registry.js` | `generate-ai-tools-inventory.js` (report generation) |
| `audit-script-inventory.js` | Fix mode overlaps with `add-framework-headers.js` — consolidate. |

### Output conflict

| Issue | Resolution |
|---|---|
| `generate-ui-templates.js` + `generate-component-snippets.py` both write `.vscode/components.code-snippets` | Remove snippet generation from `generate-ui-templates.js`. Python script owns that output. |

### Overlaps to evaluate

| Pair | Action |
|---|---|
| `lint-copy.js` + `lint-patterns.js` | lint-copy is superset — verify and potentially remove lint-patterns |
| `generate-glossary.js` + `terminology-search.js` | Compose as pipeline (search discovers → glossary curates) |
| `audit-script-inventory.js --fix` + `add-framework-headers.js` | Consolidate header-writing into one tool |
| `generate-docs-index.js --backfill` + `generate-seo.js` | Document or unify frontmatter backfill approach |

**Wave 5: Discuss approach before executing. CHECKPOINT.**

---

## Execution order

| Step | What | Scripts | Risk |
|---|---|---|---|
| **Wave 1** | dispatch→automation/validator | 11 | Low |
| **Test 1** | Run broken-require checker + `npm test --prefix tests` | — | Gate |
| **CHECKPOINT 1** | Human reviews diff before merge | — | — |
| **Wave 2** | generator→audit | 5 | Low |
| **Test 2** | Run broken-require checker + `npm test --prefix tests` | — | Gate |
| **CHECKPOINT 2** | Human reviews diff before merge | — | — |
| **Wave 3** | generator→remediator + remediator→audit | 4 | Low |
| **Test 3** | Run broken-require checker + `npm test --prefix tests` | — | Gate |
| **CHECKPOINT 3** | Human reviews diff before merge | — | — |
| **Wave 4** | audit→dispatch/validator + concern fix | 7 | Medium |
| **Test 4** | Full test suite + verify veracity pipeline scripts still chain correctly | — | Gate |
| **CHECKPOINT 4** | Human reviews diff before merge | — | — |
| **Wave 5** | Dual-purpose splits + overlaps | 8+ | High |
| **CHECKPOINT 5a** | **Interactive** — discuss split vs document approach for each | — | — |
| **Test 5** | Full test suite after any splits/consolidations | — | Gate |
| **CHECKPOINT 5b** | Human reviews final state | — | — |
| **Final test** | Full broken-require check + test suite + verify all @type tags match folder | — | Gate |

Each wave: `git mv` → update all refs → update `@type` in headers → test → **CHECKPOINT** → merge.
