# Script Library Audit Report

> Generated 2026-03-20. Deep implementation audit of all 120 pipeline scripts.
> Each script's actual code was read — not just headers.

---

## Executive summary

**120 scripts audited across 6 type folders.**

| Issue | Count | Impact |
|---|---|---|
| Mistyped scripts (wrong `@type` for what they actually do) | **27** | Scripts in wrong folders, misleading taxonomy |
| Not single-purpose (does 2+ unrelated things) | **~44** | Hard to compose into pipelines, hard to test |
| Dual-purpose validators (--check AND --fix in one script) | **8** | Blurs validator/remediator boundary |
| Direct output conflicts (two scripts write same file) | **1** | One overwrites the other |
| Significant overlaps (duplicate work) | **6 pairs** | Wasted compute, inconsistent results |
| Misplaced concern (wrong folder) | **2** | Confusing discovery |

### Top-priority actions

1. **Reclassify 19 mistyped scripts** — move to correct type folder
2. **Split or document the 8 dual-purpose validators** — separate --check and --fix into validator + remediator pairs
3. **Resolve the `.vscode/components.code-snippets` conflict** — `generate-ui-templates.js` and `generate-component-snippets.py` both write the same file
4. **Evaluate 5 overlap pairs** for consolidation or pipeline composition
5. **Flag ~40 multi-purpose scripts** for future splitting (not blocking, but reduces composability)

---

## Mistyped scripts

Scripts whose `@type` doesn't match what they actually do.

### Currently in `audits/` but should be elsewhere

| Script | Current type | Actual type | Reason |
|---|---|---|---|
| `docs-fact-registry.js` | audit | **validator** | Primary mode is `--validate` with exit 0/1. Schema validation, not reporting. |
| `docs-page-research-pr-report.js` | audit | **dispatch** | Spawns `docs-page-research.js`, reformats output. Thin orchestration wrapper. |
| `docs-research-adjudication.js` | audit | **validator+remediator+generator** | Three modes: validate ledger, record outcomes (mutates), summarise (generates) |
| `docs-research-packet.js` | audit | **dispatch** | Batch orchestrator: spawns 4 other scripts, aggregates results |
| `orchestrator-guides-research-review.js` | audit | **dispatch** | Pure delegation wrapper to `docs-research-packet.js` |
| `repo-audit-orchestrator.js` | audit | **dispatch** | Top-level pipeline dispatcher: spawns stages, aggregates health score |

### Currently in `generators/` but should be elsewhere

| Script | Current type | Actual type | Reason |
|---|---|---|---|
| `update-jsdoc-headers.js` | generator | **remediator** | Edits existing files in-place (header blocks) |
| `fix-usage-paths.js` | generator | **remediator** | Edits existing files to fix stale metadata |
| `generate-seo.js` | generator | **remediator** | Backfills frontmatter into existing MDX files |
| `terminology-search.js` | generator | **audit** | Discovers/analyses terms via heuristic scanning |
| `scan-component-imports.js` | generator | **audit** | Scans imports, detects `@usedIn` drift |
| `generate-content-gap-reconciliation.js` | generator | **audit** | Analyses coverage gaps, produces report |
| `generate-v2-folder-governance-cleanup-matrix.js` | generator | **audit** | Inventories non-publishable artefacts |
| `generate-component-governance-remediation-reports.js` | generator | **audit** | Analyses code, produces remediation guidance |

### Currently in `remediators/` but should be elsewhere

| Script | Current type | Actual type | Reason |
|---|---|---|---|
| `style-and-language-homogenizer-en-gb.js` | remediator | **audit** | Only scans and writes reports. Never modifies source content. |

### Misplaced concern

| Script | Current location | Should be | Reason |
|---|---|---|---|
| `audit-python.py` | `audits/governance/repo/` | `audits/content/quality/` | Audits v2 page content (file existence, links, MDX imports), not repo governance |
| `audit-tasks-folders.js` | `audits/governance/repo/` | Correct, but has `--apply` mode → `remediator` | The `--apply` mode moves/deletes files |

---

## Dual-purpose validators (--check AND --fix)

These scripts blur the validator/remediator boundary. Each should ideally be split into a validator (read-only, exit code) and a remediator (fix mode).

| Script | Check mode | Fix mode | Recommendation |
|---|---|---|---|
| `check-grammar-en-gb.js` | Default: detects grammar issues | `--fix`: auto-corrects safe rules | Split or document as pipeline pair |
| `check-proper-nouns.js` | Default: detects capitalisation | `--fix`: corrects proper nouns | Split or document |
| `check-double-headers.js` | Default: detects duplicates | `--fix`: removes duplicate H1s | Split or document |
| `check-page-endings.js` | Default: detects missing endings | `--fix`: appends TODO comment | Split or document |
| `check-component-css.js` | Default: detects styling issues | `--fix`: replaces hardcoded colours | Split or document |
| `enforce-generated-file-banners.js` | `--check`: validates banners | Default/`--write`: writes banners + runs generators | Split — the `--write` mode does too much |
| `validate-ai-tools-registry.js` | Default: validates registry | `--write-report`: generates inventory markdown | Split reporting into separate generator |
| `audit-script-inventory.js` | Default: audits scripts | `--fix`: repairs headers + rebuilds indexes | Split — fix mode overlaps with `add-framework-headers.js` |

---

## Direct output conflict

| Script A | Script B | Conflicting output |
|---|---|---|
| `generate-ui-templates.js` | `generate-component-snippets.py` | Both write `.vscode/components.code-snippets` |

The Python script is more sophisticated (handles prop types, overrides). The JS script generates from the same registry but also produces 5 other artefact types. **Recommendation**: Remove component snippet generation from `generate-ui-templates.js`, let the Python script own that output.

---

## Significant overlaps

| Script A | Script B | Overlap | Recommendation |
|---|---|---|---|
| `lint-copy.js` | `lint-patterns.js` | Share 5+ identical pattern IDs (CONDITIONAL_IF, NOT_CONSTRUCTION, etc.). lint-copy is a superset. | `lint-patterns.js` may be redundant — verify and merge or remove |
| `test-v2-pages.js` | `verify-all-pages.js` | Both use Puppeteer to visit pages and check for errors | Different scope (all v2 pages vs component library). Document distinction. |
| `generate-glossary.js` | `terminology-search.js` | Both scan MDX for terminology | One uses curated list, one uses heuristic discovery. Could be pipeline stages. |
| `audit-script-inventory.js --fix` | `add-framework-headers.js --write` | Both write framework headers from classification data | Consolidate header-writing into one tool |
| `generate-docs-index.js --backfill` | `generate-seo.js` | Both inject frontmatter fields into MDX files | Different fields but same pattern. Document or unify the backfill approach. |

---

## Multi-purpose scripts (not single-purpose)

Scripts that do 2+ distinguishable things. Not all need splitting — some are coherent pipelines within a single file. Flagged for awareness.

### audits/ (9 of 16)

| Script | Purposes |
|---|---|
| `audit-media-assets.js` | (1) local asset inventory, (2) gitignore leakage, (3) remote assets-branch inventory, (4) migration targeting, (5) baseline metrics |
| `audit-v2-usefulness.js` | (1) page scoring, (2) LLM evaluation, (3) journey checks, (4) baseline comparison, (5) multi-format reporting |
| `docs-fact-registry.js` | (1) validation, (2) normalisation, (3) report generation, (4) domain filtering |
| `docs-page-research.js` | (1) claim matching, (2) evidence discovery, (3) ranking, (4) classification, (5) contradiction detection, (6) propagation queues, (7) reporting. 1,970 lines. |
| `docs-research-adjudication.js` | (1) validate ledger, (2) record outcomes, (3) summarise metrics |
| `docs-research-packet.js` | (1) scope resolution, (2) tranche splitting, (3) validation dispatch, (4) research dispatch, (5) drift analysis, (6) rollup reporting |
| `audit-tasks-folders.js` | (1) scan, (2) classify, (3) duplicate detection, (4) report normalisation, (5) recommendation extraction, (6) file moves/deletes. 2,013 lines. |
| `audit-script-categories.js` | (1) discovery, (2) template compliance, (3) usage mapping, (4) category assignment, (5) duplicate detection, (6) reporting. 1,705 lines. |
| `audit-python.py` | (1) file existence, (2) MDX import validation, (3) link checking |

### generators/ (15 of 24)

| Script | Purposes |
|---|---|
| `generate-docs-index.js` | (1) generate docs-index.json, (2) backfill frontmatter into MDX, (3) report missing frontmatter |
| `generate-pages-index.js` | (1) generate index files, (2) validate them, (3) remove legacy, (4) stage git changes |
| `generate-seo.js` | (1) generate keywords, (2) add og:image, (3) generate description |
| `generate-llms-files.js` | (1) generate index file, (2) generate full-content file |
| `generate-ui-templates.js` | (1) catalog MDX, (2) preview routes, (3) block examples, (4) VS Code template snippets, (5) VS Code component snippets, (6) UI system page update |
| `generate-component-registry.js` | (1) validate governance fields, (2) generate registry JSON, (3) generate schema JSON |
| `generate-component-docs.js` | (1) English category pages, (2) locale scaffolds, (3) overview/landing, (4) archive legacy, (5) optional LLM editorial |
| `scan-component-imports.js` | (1) build usage map, (2) detect @usedIn drift |
| `generate-docs-guide-indexes.js` | (1) workflows catalog, (2) templates catalog |
| `generate-ai-skills-indexes.js` | (1) inventory JSON, (2) content map MD |
| `terminology-search.js` | (1) heuristic discovery, (2) LLM evaluation |
| `fix-usage-paths.js` | (1) fix @usage paths, (2) deduplicate @pipeline |
| `generate-content-gap-reconciliation.js` | (1) audit quality, (2) generate gap report, (3) identify unmapped pages |
| `generate-component-governance-remediation-reports.js` | (1) migration report, (2) colour report, (3) token report, (4) defensive rendering report |
| `generate-v2-folder-governance-cleanup-matrix.js` | Single matrix in 2 formats (borderline) |

### validators/ (8 of 27 — the dual-purpose ones listed above)

### remediators/ (3 of 12)

| Script | Purposes |
|---|---|
| `add-framework-headers.js` | (1) write headers, (2) verify headers |
| `repair-ownerless-language.js` | (1) check mode (read-only), (2) write mode (fix) |
| `assign-purpose-metadata.js` | (1) rule-based classification, (2) content heuristics, (3) LLM classification |

---

## Pipeline dependencies

### Veracity research pipeline
```
docs-fact-registry.js (validator)
  → docs-page-research.js (analysis engine)
    → docs-page-research-pr-report.js (PR wrapper)
    → docs-research-adjudication.js (ledger management)
  All orchestrated by: docs-research-packet.js (dispatch)
  Convenience wrapper: orchestrator-guides-research-review.js (dispatch)
```

### Governance audit pipeline
```
audit-script-categories.js (audit)
  → script-footprint-and-usage-audit.js (audit, reads SCRIPT_AUDIT.json)
  → repo-audit-orchestrator.js (dispatch, spawns both + others)
```

### Component pipeline
```
generate-component-registry.js (generator, core)
  → scan-component-imports.js (audit, produces usage map)
  → generate-component-docs.js (generator, produces library pages)
  → generate-component-snippets.py (generator, produces VS Code snippets)
  → generate-ui-templates.js (generator, produces catalog + previews + snippets ← CONFLICT)
  → generate-docs-guide-components-index.js (generator, produces catalog MDX)
  → repair-component-metadata.js (remediator, fixes JSDoc from registry)
```

### Content index pipeline
```
generate-docs-index.js (generator, core — most-called script)
  → generate-pages-index.js (generator, produces section indexes)
    → generate-docs-guide-pages-index.js (generator, produces catalog)
  → generate-ai-sitemap.js (generator, produces sitemap-ai.xml)
  → generate-llms-files.js (generator, produces llms.txt)
  All share: docs.json navigation parsing + MDX frontmatter reading
```

### Validator → remediator pairs
```
check-mdx-safe-markdown.js ↔ repair-mdx-safe-markdown.js
check-docs-path-sync.js ↔ sync-docs-paths.js
lint-copy.js / lint-patterns.js (validate only, no repair counterpart)
check-grammar-en-gb.js (has own --fix mode — not split)
check-proper-nouns.js (has own --fix mode — not split)
```

---

## Dispatch scripts audit

### Mistyped as `dispatch` — don't actually spawn/coordinate other scripts

| Script | Actual type | Reason |
|---|---|---|
| `cross-agent-packager.js` | **automation** | Reads catalog/manifest, writes agent pack files directly |
| `export-portable-skills.js` | **automation** | Reads templates, writes skill packs. Has --check drift mode. |
| `sync-codex-skills.js` | **automation** | Reads templates, writes to local Codex install |
| `lock-release.js` | **automation** | Reads/writes JSON lock files directly |
| `task-cleanup.js` | **automation** | Inspects and removes git worktrees/branches/locks directly |
| `task-preflight.js` | **automation** | Creates branches, writes YAML contract + JSON lock files |
| `validate-locks.js` | **validator** | Reads lock/contract files, reports errors. Exit 0/1. |
| `publish-v2-internal-reports.js` | **automation** | Reads report manifests, writes MDX pages, updates docs.json |

### Correctly typed as `dispatch` (genuine orchestrators)

| Script | Why it's a real dispatcher |
|---|---|
| `check-codex-pr-overlap.js` | Coordinates git + GitHub API (borderline validator) |
| `check-no-ai-stash.sh` | Lightweight enforcer (borderline validator) |
| `codex-commit.js` | Spawns `git commit` with controlled arguments |
| `create-codex-pr.js` | Spawns git, gh, optionally research script |
| `task-finalise.js` | Genuine orchestrator — spawns 3-4 child scripts |
| `governance-pipeline.js` | Multi-stage pipeline: audit→repair→verify→report→commit |

### Codex lock lifecycle (well-separated — no problematic overlap)

```
task-preflight.js (create lock + branch + contract)
  → validate-locks.js (check lock integrity)
  → lock-release.js (mark lock as released after merge)
  → task-cleanup.js (prune stale worktrees/branches/locks)
  Orchestrated by: task-finalise.js
```

### Agent skill sync (mild overlap worth reviewing)

| Script | What it writes | From what |
|---|---|---|
| `cross-agent-packager.js` | `ai-tools/agent-packs/` (JSON/MD packs) | catalog + manifest |
| `export-portable-skills.js` | `ai-tools/agent-packs/` (SKILL.md + companions) | canonical templates |
| `sync-codex-skills.js` | `~/.codex/skills/` (local install) | canonical templates |

All three use `codex-skill-templates` lib. Different output shapes and targets but overlapping source data.

---

## Automations scripts audit

### All correctly typed

| Script | Notes |
|---|---|
| `fetch-external-docs.sh` | Correct — data fetcher with TTL caching |
| `fetch-lpt-exchanges.sh` | Correct — API fetcher + MDX renderer |
| `fetch-openapi-specs.sh` | Correct — spec file fetcher |
| `convert-rss-to-mdx.js` | Correct — RSS XML → MDX transform |
| `translate-docs.js` | Correct — full translation pipeline (multi-stage by design) |
| `generate-localized-docs-json.js` | Correct — post-translation docs.json updater |
| `validate-generated.js` | Correct (could also be a validator) — validates translation output |

### One header anomaly

`test-mintlify-version-language-toggle.js` — still uses old `@category`/`@owner` header format. Also functionally an **integration test**, not an automation.

---

## Updated mistype totals

### All 27 mistyped scripts

| # | Script | Currently | Should be |
|---|---|---|---|
| 1 | `docs-fact-registry.js` | audit | validator |
| 2 | `docs-page-research-pr-report.js` | audit | dispatch |
| 3 | `docs-research-adjudication.js` | audit | validator+remediator+generator |
| 4 | `docs-research-packet.js` | audit | dispatch |
| 5 | `orchestrator-guides-research-review.js` | audit | dispatch |
| 6 | `repo-audit-orchestrator.js` | audit | dispatch |
| 7 | `update-jsdoc-headers.js` | generator | remediator |
| 8 | `fix-usage-paths.js` | generator | remediator |
| 9 | `generate-seo.js` | generator | remediator |
| 10 | `terminology-search.js` | generator | audit |
| 11 | `scan-component-imports.js` | generator | audit |
| 12 | `generate-content-gap-reconciliation.js` | generator | audit |
| 13 | `generate-v2-folder-governance-cleanup-matrix.js` | generator | audit |
| 14 | `generate-component-governance-remediation-reports.js` | generator | audit |
| 15 | `style-and-language-homogenizer-en-gb.js` | remediator | audit |
| 16 | `cross-agent-packager.js` | dispatch | automation |
| 17 | `export-portable-skills.js` | dispatch | automation |
| 18 | `sync-codex-skills.js` | dispatch | automation |
| 19 | `lock-release.js` | dispatch | automation |
| 20 | `task-cleanup.js` | dispatch | automation |
| 21 | `task-preflight.js` | dispatch | automation |
| 22 | `validate-locks.js` | dispatch | validator |
| 23 | `publish-v2-internal-reports.js` | dispatch | automation |
| 24 | `check-codex-pr-overlap.js` | dispatch | validator (borderline) |
| 25 | `check-no-ai-stash.sh` | dispatch | validator (borderline) |
| 26 | `test-mintlify-version-language-toggle.js` | automation | validator (integration test) |
| 27 | `docs-research-adjudication.js` | audit | multi-mode (needs split) |

---

## Recommendations summary

### Immediate (before `/operations` move)

1. **Reclassify the 6 mistyped audits/** scripts that are actually dispatchers/validators
2. **Reclassify the 8 mistyped generators/** scripts that are actually remediators/audits
3. **Reclassify `style-and-language-homogenizer-en-gb.js`** from remediators/ to audits/
4. **Move `audit-python.py`** to `audits/content/quality/`
5. **Resolve `.vscode/components.code-snippets` conflict**

### Next phase (after move, before final merge)

6. **Split the 8 dual-purpose validators** into validator + remediator pairs (or document --fix as intentional dual-mode)
7. **Evaluate `lint-patterns.js`** — likely redundant with `lint-copy.js`
8. **Consolidate header-writing** — `audit-script-inventory.js --fix` and `add-framework-headers.js` do the same thing
9. **Document pipeline dependencies** in each script's `@pipeline` tag using the flow notation

### Future work (incremental, not blocking)

10. Break up the 3 largest scripts (1,700–2,000 lines) into composable pipeline stages
11. Unify the frontmatter backfill pattern (`generate-docs-index.js --backfill` vs `generate-seo.js`)
12. Compose `generate-glossary.js` and `terminology-search.js` into a pipeline
