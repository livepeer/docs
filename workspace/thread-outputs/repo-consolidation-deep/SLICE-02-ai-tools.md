# SLICE-02 — ai-tools/ Deep Inventory

**Audit date:** 2026-05-19
**Scope:** every file under `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/ai-tools/` (324 files total)
**Method:** READ-ONLY. Frontmatter, body, mtime captured per file.
**Branch:** docs-v2-dev-draft

---

## 1. Top-level files

| Path | Size | Mtime | Frontmatter `lastVerified` | Content-claimed date | Status | Notes |
|---|---:|---|---|---|---|---|
| `ai-tools/.allowlist` | 225 | 2026-05-22 | — | — | active | Top-level entries only. Lists: GOVERNANCE.md, README.md, _workspace/, agent-packs/, ai-rules/, ai-skills/, claude-code.mdx, cursor.mdx, registry/, windsurf.mdx. Note: 2026-05-22 mtime is FUTURE-DATED relative to most files (drift signal). |
| `ai-tools/GOVERNANCE.md` | 401 | 2026-04-07 | — | — | active | One-liner: "Active — 31 skills, maintenance mode". Claims 31 — actual local SKILL.md = 34, portable = 53. |
| `ai-tools/README.md` | 2104 | 2026-04-03 | — | — | active | Directory map. References `ai-skills/README.md` which does not exist at that path; only `ai-skills/_workspace/README.md` exists. |
| `ai-tools/_workspace/.gitkeep` | 0 | 2026-04-03 | — | — | active | Empty dir marker. Registered in inventory.json. |
| `ai-tools/claude-code.mdx` | 1621 | 2026-03-18 | title only | — | active (in nav) | Setup guide. Mtime 2026-03-18 — OLDEST file in tree. |
| `ai-tools/cursor.mdx` | 1595 | 2026-03-18 | title only | — | active (in nav) | Setup guide. Mtime 2026-03-18. |
| `ai-tools/windsurf.mdx` | 1518 | 2026-03-18 | title only | — | active (in nav) | Setup guide. Mtime 2026-03-18. |

---

## 2. ai-skills/ — Local SKILL.md inventory (33 active + 1 archived)

All metadata extracted from frontmatter. None carry `lastVerified` in their frontmatter — versioning is done via `metadata.version` and `metadata.status`. Many are marked `draft` and have empty test-log tables.

### Process-category skills (lifecycle scaffolding)

| Skill | Local v | Local status | mtime | Size | Portable v | Drift |
|---|---|---|---|---:|---|---|
| `thread/SKILL.md` | 1.4 | active | 2026-04-07 | 21,692 | 1.0 (adapter wrapper) | **MAJOR**: portable is 5-line wrapper (1.6KB), local is full 450+ line lifecycle (v1.4). Portable points to local. |
| `research/SKILL.md` | 1.0 | draft | 2026-04-03 | 4,995 | 1.0 (adapter) | Portable is 1.6KB wrapper |
| `pm/SKILL.md` | 1.0 | draft | 2026-04-03 | 7,797 | 1.0 (adapter) | Portable wrapper |
| `design/SKILL.md` | 1.0 | draft | 2026-04-03 | 7,691 | 1.0 (adapter) | Portable wrapper |
| `build/SKILL.md` | 1.0 | draft | 2026-04-03 | 9,538 | — | LOCAL ONLY. No portable wrapper. |
| `iterate/SKILL.md` | 1.0 | draft | 2026-04-03 | 6,026 | 1.0 (adapter) | Portable wrapper |
| `dispatch/SKILL.md` | 1.0 | draft | 2026-04-03 | 5,679 | 1.0 (adapter) | Portable wrapper |
| `diagnose/SKILL.md` | 1.0 | draft | 2026-04-03 | 9,824 | 1.0 (adapter) | Portable wrapper |
| `agent-brief/SKILL.md` | 1.0 | draft | 2026-04-03 | 9,792 | 1.0 (adapter) | Portable wrapper |
| `close/SKILL.md` | 1.0 | active | 2026-04-03 | 7,232 | 1.0 (adapter) | Portable wrapper |
| `propagate/SKILL.md` | 1.0 | draft | 2026-04-03 | 11,942 | 1.0 (adapter) | category=governance, but file is process-shaped |

All process skills (except `close` and `thread`) are still in **`draft` status with empty test logs** — never validated in production despite being the primary lifecycle backbone.

### Authoring-category skills

| Skill | Local v | mtime | Size | Portable v | Drift |
|---|---|---|---:|---|---|
| `page-authoring/SKILL.md` | 1.3 | 2026-04-05 | 14,674 | — | LOCAL ONLY. No portable wrapper. Canonical authoring guide. |
| `product-thinking/SKILL.md` | 1.2 | 2026-04-03 | 15,757 | — | LOCAL ONLY. |
| `docs-copy/SKILL.md` | 1.4 | 2026-04-03 | 3,724 | 1.2 | **VERSION DRIFT**: portable is 1.2 (stale), local is 1.4. |
| `create-action/SKILL.md` | 1.0 | 2026-04-08 | 13,943 | — | LOCAL ONLY. Production active. |
| `create-component/SKILL.md` | 1.0 | 2026-04-09 | 11,795 | — | LOCAL ONLY. NEWEST FILE in tree (2026-04-09). |
| `create-script/SKILL.md` | 1.0 | 2026-04-08 | 12,091 | — | LOCAL ONLY. |

### Audit-category skills

| Skill | Local v | mtime | Size | Portable v | Drift |
|---|---|---|---:|---|---|
| `rubric-static-review/SKILL.md` | 1.2 | 2026-04-03 | 3,581 | — | LOCAL ONLY |
| `script-footprint-and-usage-audit/SKILL.md` | 1.2 | 2026-04-03 | 982 | — | LOCAL ONLY — 1KB stub |
| `docs-quality-and-freshness-audit/SKILL.md` | 1.2 | 2026-04-03 | 906 | — | LOCAL ONLY — 1KB stub |
| `docs-coverage-and-route-integrity-audit/SKILL.md` | 1.2 | 2026-04-03 | 990 | — | LOCAL ONLY — 1KB stub. **Notes the audit script "not yet implemented"** — planned path commented out. |

### Governance-category skills

| Skill | Local v | mtime | Size | Portable v | Drift |
|---|---|---|---:|---|---|
| `browser/SKILL.md` | 1.2 | 2026-04-08 | 5,625 | 1.2 | Local is `layer: canonical` body; portable is `layer: adapter` wrapper. Equal versions but different content roles. |
| `cleanup-quarantine-manager/SKILL.md` | 1.2 | 2026-04-03 | 987 | — | LOCAL ONLY — stub. References `tools/config/...` (legacy path). |
| `component-layout-governance/SKILL.md` | 1.2 | 2026-04-03 | 869 | — | LOCAL ONLY — stub. References `tools/config/component-layout-profile.json` (legacy path). |
| `style-and-language-homogenizer-en-gb/SKILL.md` | 1.2 | 2026-04-03 | 906 | — | LOCAL ONLY — stub |
| `generated-mdx-banners-governance/SKILL.md` | 1.2 | 2026-04-08 | 4,264 | — | LOCAL ONLY |

### Meta-category skills

| Skill | Local v | mtime | Size | Portable v | Drift |
|---|---|---|---:|---|---|
| `skill-docs/SKILL.md` | 1.4 | 2026-04-03 | 3,684 | 1.2 | **VERSION DRIFT**: portable stale at 1.2, local at 1.4 |
| `cross-agent-packager/SKILL.md` | 1.2 | 2026-04-08 | 828 | — | LOCAL ONLY — 828-byte stub. Ironically, the packager that generates packs is itself unpacked. |
| `repo-audit-orchestrator/SKILL.md` | 1.2 | 2026-04-03 | 1,134 | — | LOCAL ONLY |

### Content-pipeline / review-pipeline skills

| Skill | Local v | mtime | Size | Portable v | Drift |
|---|---|---|---:|---|---|
| `content-pipeline-tab-map/SKILL.md` | 1.1 | 2026-04-03 | 3,698 | — | LOCAL ONLY |
| `content-pipeline-pass-a/SKILL.md` | 1.1 | 2026-04-03 | 4,576 | — | LOCAL ONLY |
| `content-pipeline-pass-b/SKILL.md` | 1.1 | 2026-04-03 | 4,382 | — | LOCAL ONLY |
| `docs-review-packet-generation/SKILL.md` | 1.3 | 2026-04-03 | 4,778 | 1.2 | **VERSION DRIFT**: portable stale |
| `docs-review-fix-execution/SKILL.md` | 1.3 | 2026-04-03 | 4,238 | 1.2 | **VERSION DRIFT**: portable stale |

### Archived

| Skill | mtime | Notes |
|---|---|---|
| `x-archive/component-create/SKILL.md` | 2026-04-09 | v1.0, status=active in frontmatter despite x-archive location. 6.6KB. Superseded by `create-component/SKILL.md` (note: mtime tied at 2026-04-09; suggests retirement+rebuild same day). |

### Local skill companion files

- `docs-copy/` has the most companion bundle (16 files): README.md, .codex-sync-manifest.json, agents/openai.yaml, reference/{banned-phrases.txt, banned-words.txt, invocation-guide.md, phrase-mapping.md}, references/{handoff-checklist.md, task-routing.md, workflow.md}, skills/{copy-rules.md, iteration-diagnostic.md, pattern-observer.md, persona-routing.md, review-gate.md, skill-docs.md, structure-rules.md, value-prop-check.md}. All mtime 2026-03-18 (oldest in repo). **Surprising**: two parallel ref dirs — `reference/` (singular) and `references/` (plural).
- `docs-review-fix-execution/` and `docs-review-packet-generation/` both have `.codex-sync-manifest.json`, `agents/openai.yaml`, and `references/` (4 files each). mtime 2026-03-18.

---

## 3. ai-skills/templates/ — 53 templates + 9 .references dirs

All templates dated 2026-04-03 except a 2026-04-05 cluster (templates 27, 28, 29, 30) and a 2026-04-08 (25-external-docs-sync-and-sanitize). They mirror exactly the portable agent-pack content (byte-identical to `agent-packs/skills/<id>/SKILL.md` for sampled cases — diff returned 0 lines).

### Numbered template inventory

| # | Template | Has .references dir | Companion files | mtime |
|---:|---|---|---|---|
| 01 | lpd-bootstrap-and-doctor | no | — | 2026-04-03 |
| 02 | mint-dev-and-hook-install | no | — | 2026-04-05 |
| 03 | mintlify-authoring-style-compliance | no | — | 2026-04-03 |
| 04 | component-library-guided-authoring | no | — | 2026-04-03 |
| 05 | mdx-parent-child-scope-patterns | no | — | 2026-04-03 |
| 06 | docs-ia-route-placement | no | — | 2026-04-03 |
| 07 | docs-json-navigation-maintenance | no | — | 2026-04-03 |
| 08 | structure-and-allowlist-guardrails | no | — | 2026-04-03 |
| 09 | precommit-failure-triage | no | — | 2026-04-03 |
| 10 | staged-test-suite-runner | no | — | 2026-04-03 |
| 11 | pr-changed-file-ci-simulation | no | — | 2026-04-03 |
| 12 | style-mdx-quality-fix-playbook | no | — | 2026-04-03 |
| 13 | spelling-and-cspell-maintenance | no | — | 2026-04-03 |
| 14 | v2-link-audit-runbook | no | — | 2026-04-03 |
| 15 | domain-pages-audit-runbook | no | — | 2026-04-03 |
| 16 | v2-browser-sweep-runbook | no | — | 2026-04-03 |
| 17 | broken-links-advisory-triage | no | — | 2026-04-03 |
| 18 | new-script-scaffold | no | — | 2026-04-03 |
| 19 | script-header-and-index-sync | no | — | 2026-04-03 |
| 20 | v2-pages-index-sync | no | — | 2026-04-03 |
| 21 | component-library-index-refresh | no | — | 2026-04-03 |
| 22 | docs-status-table-generation | no | — | 2026-04-03 |
| 23 | seo-frontmatter-generation | no | — | 2026-04-03 |
| 24 | openapi-sync-and-api-doc-generation | no | — | 2026-04-03 |
| 25 | external-docs-sync-and-sanitize | no | — | 2026-04-08 |
| 26 | glossary-terminology-generation | no | — | 2026-04-03 |
| 27 | github-actions-data-pipeline-maintenance | no | — | 2026-04-05 |
| 28 | release-version-workflow-maintenance | no | — | 2026-04-05 |
| 29 | n8n-workflow-maintenance | no | — | 2026-04-05 |
| 30 | discord-issue-intake-maintenance | no | — | 2026-04-05 |
| 31 | codex-task-isolation-standard | no | — | 2026-04-03 |
| 32 | agentic-project-management-orchestrator | no | — | 2026-04-03 |
| 32 | page-content-research-review | yes (32-page-content-research-review.references/) | 2 files | 2026-04-03 |
| 33 | docs-source-verification | yes | 2 files | 2026-04-03 |
| 34 | docs-change-review | yes | 2 files | 2026-04-03 |
| 35 | docs-impact-propagation | yes | 2 files | 2026-04-03 |
| 36 | docs-copy | yes | 3 files | 2026-04-03 |
| 37 | docs-research-packet-generation | yes | 3 files | 2026-04-03 |
| 37 | docs-review-packet-generation | yes (37-docs-review-packet-generation.references/) | 4 files | — |
| 38 | docs-research-to-implementation-plan | yes | 2 files | 2026-04-03 |
| 38 | docs-review-fix-execution | yes (38-docs-review-fix-execution.references/) | 4 files | — |
| 39 | page-content-research-review | no | — | 2026-04-03 |
| 40 | skill-docs | no | — | 2026-04-03 |
| 41 | docs-review-packet-generation | no | — | 2026-04-03 |
| 42 | docs-review-fix-execution | no | — | 2026-04-03 |
| 43 | thread | no | — | 2026-04-03 |
| 44 | agent-brief | no | — | 2026-04-03 |
| 45 | research | no | — | 2026-04-03 |
| 46 | dispatch | no | — | 2026-04-03 |
| 47 | design | no | — | 2026-04-03 |
| 48 | diagnose | no | — | 2026-04-03 |
| 49 | iterate | no | — | 2026-04-03 |
| 50 | propagate | no | — | 2026-04-03 |
| 51 | pm | no | — | 2026-04-03 |
| 52 | close | no | — | 2026-04-03 |
| 53 | browser | no | — | 2026-04-08 |

**DRIFT**: Numbers 32, 37, and 38 are used twice (collision). `32-agentic-project-management-orchestrator` vs `32-page-content-research-review.references`; `37-docs-research-packet-generation` vs `37-docs-review-packet-generation`; `38-docs-research-to-implementation-plan` vs `38-docs-review-fix-execution`. There is no `39-` template_md for page-content-research-review (just .references). The numbering scheme broke between 31 and 39.

**SHADOWING**: Numbers 41+ template names duplicate earlier entries (e.g. `37-docs-research-packet-generation.template.md` and `41-docs-review-packet-generation.template.md`). Looks like the canonical templates were renumbered, but the old numbered files were never deleted. Same for `42-docs-review-fix-execution` (also at 38).

---

## 4. ai-skills/catalog/ — pipeline registry (3 files)

| Path | mtime | Frontmatter | Status | Notes |
|---|---|---|---|---|
| `catalog/README.md` | 2026-04-03 | — | active | Says it is "single source of truth for the docs infrastructure audit pipeline" |
| `catalog/skill-catalog.json` | 2026-04-08 | version: 1.0.0 | active | **Lists only 9 skills**: repo-audit-orchestrator, rubric-static-review, script-footprint-and-usage-audit, docs-quality-and-freshness-audit, style-and-language-homogenizer-en-gb, component-layout-governance, cleanup-quarantine-manager, page-authoring, cross-agent-packager. Excludes thread/research/pm/design/build/iterate/dispatch/diagnose/agent-brief/close/propagate (the entire process backbone) and the 3 `create-*` skills. |
| `catalog/execution-manifest.json` | 2026-03-18 | version: 1.0.0 | active | 6-stage pipeline. mtime 2026-03-18 = OLDEST in catalog. |
| `catalog/skill-catalog.schema.json` | 2026-03-18 | — | active | JSON Schema. Strict: only allows severity_model ∈ {critical-high-medium-low, scorecard-0-100, info-only} and autofix_mode ∈ {none, advisory, safe, requires-approval}. |

**GAP**: Skill catalog is 9/34 of local skills (26%). Most lifecycle/authoring skills are NOT in the catalog. The catalog is scoped to the "repo audit pipeline" only — but no readme clarifies this scope publicly.

---

## 5. ai-skills/source-content/ — snapshot of agent docs

Surprising find: 5 files mirroring v2/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md + a `llms.txt` snapshot + `.github/augment-instructions.md` snapshot.

| Path | Size | mtime | Frontmatter | Notes |
|---|---:|---|---|---|
| `source-content/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | 6393 | 2026-04-07 | — | Newest snapshot. Mentions Codex task isolation, `.codex/task-contract.yaml`, hooks lifecycle. |
| `source-content/v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | 5944 | 2026-03-18 | — | CN locale — older snapshot |
| `source-content/v2/es/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | 6808 | 2026-03-18 | — | ES locale |
| `source-content/v2/fr/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | 6921 | 2026-03-18 | — | FR locale |
| `source-content/.github/augment-instructions.md` | 8146 | 2026-04-03 | — | Mirror of `.github/augment-instructions.md`. Per inventory.json, this surface is `status: retired` — but the snapshot persists. |
| `source-content/llms.txt` | 35,897 | **2026-04-15** | — | **NEWEST file in entire ai-tools/ tree.** Full site nav snapshot. Refers to `docs.livepeer.org/v2/...`. |

**GAP**: `inventory.json` claims these snapshots are `status: snapshot`. But:
- `v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` is marked `exists: false` in the live repo by inventory.json — yet the source-content snapshot still includes a 5,944-byte version.
- Same `exists: false` for ES and FR locales.
- So the snapshots preserve files that no longer exist in v2/.

---

## 6. ai-skills/_workspace/ — research and legacy notes (7 files)

| Path | Size | mtime | Status | Notes |
|---|---:|---|---|---|
| `_workspace/README.md` | 592 | 2026-04-03 | — | Working dir orientation |
| `_workspace/examples/claude-coauthoring.md` | 14,782 | 2026-03-18 | — | Co-authoring research notes. Oldest. |
| `_workspace/research/copywriting-research.md` | 16,841 | 2026-04-03 | — | Research draft |
| `_workspace/research/product-writing-research-sources.md` | 5,652 | 2026-04-03 | — | Same size as product-writing-research.md → possible DUPLICATE |
| `_workspace/research/product-writing-research.md` | 5,652 | 2026-03-18 | — | Older sibling — same byte count, suspicious of pure rename. |
| `_workspace/research/product-writing-skill-package.md` | 9,022 | 2026-04-03 | — | Same size as product-writing.md → DUPLICATE pair |
| `_workspace/research/product-writing.md` | 9,022 | 2026-04-03 | — | Likely duplicate of product-writing-skill-package.md |
| `_workspace/rubric-static-review-legacy.md` | 3,236 | 2026-04-03 | legacy | Predecessor of `rubric-static-review/SKILL.md` |

---

## 7. ai-skills/ root-level reference files

| Path | Size | mtime | Status | Notes |
|---|---:|---|---|---|
| `agentskills-io-standard.md` | 5,948 | 2026-04-03 | reference | Canonical reference for the December 2025 agentskills.io standard (Linux Foundation). Anchors what SKILL.md frontmatter MUST contain (name ≤64 chars; description ≤1024 chars; metadata is sole extension point). |
| `content-map.md` | 5,568 | 2026-04-05 | reference | Generated content map — generated `2026-04-05T07:11:26.270Z`. References 31 files (mismatch with actual 34 SKILL.md files). |
| `inventory.json` | 12,950 | 2026-04-05 | reference | Tracks 32 files across canonical-runtime/contributor-docs/setup-guides/generated-supplemental/source-content-snapshots/retired-legacy. Notes `operations/scripts/validators/governance/check-agent-docs-freshness.js` as `exists: false`. |
| `skill-spec-contract.md` | 10,513 | 2026-04-03 | spec | Central contract spec for skill authoring. |

---

## 8. agent-packs/ — generated multi-agent exports

### 8a. Top-level outputs

| Path | Size | mtime | Generated_at | Status |
|---|---:|---|---|---|
| `agent-packs/README.md` | 995 | 2026-04-08 | — | Documents the 6-stage pipeline. |
| `agent-packs/claude/CLAUDE.md` | 4,250 | 2026-04-08 | (regen on demand) | 111-line pack mirror — lists the same 6 audit stages |
| `agent-packs/codex/skills-manifest.json` | 6,639 | 2026-04-08 | **2026-03-22T11:41:44.939Z** | Source dates contradict: header claims March 22 but file mtime is April 8 |
| `agent-packs/cursor/rules.md` | 4,245 | 2026-04-08 | — | Identical content to claude/CLAUDE.md |
| `agent-packs/windsurf/rules.md` | 4,247 | 2026-04-08 | — | Identical content to claude/CLAUDE.md |

**Surprise**: The `codex/skills-manifest.json` has `"generated_at": "2026-03-22T11:41:44.939Z"` but the file mtime is `2026-04-08`. This file was rewritten without updating its embedded generation timestamp — generator bug or manual edit.

### 8b. agent-packs/skills/ — 53 portable SKILL.md wrappers + manifest

| Type | Count |
|---:|---|
| Portable SKILL.md | 53 |
| Manifest entries | 1 (only `browser` is listed!) |
| Has `references/` companion dir | 6 (docs-change-review, docs-copy, docs-impact-propagation, docs-research-packet-generation, docs-research-to-implementation-plan, docs-source-verification, page-content-research-review) |

**CRITICAL GAP**: `agent-packs/skills/manifest.json` only registers ONE skill (`browser`). The other 52 portable skills exist in the directory but are not registered in any manifest. Either the manifest is half-built or out-of-date.

### 8c. Portable SKILL.md drift summary

Confirmed via diff:
- **Templates ARE byte-identical to portable skills** (sampled 3, all matched). The numbered template files and the `agent-packs/skills/<id>/SKILL.md` files are the same content via different paths.
- **Local SKILL.md is DIFFERENT from portable** (for those 15 skills present in both). The portable is a "thin wrapper" pointing to the local canonical. e.g. portable `thread` is 1.6KB pointing-to-canonical wrapper at v1.0; local `thread` is 21.7KB full v1.4 lifecycle.
- **15 skills exist as both local and portable wrappers**: agent-brief, browser, close, design, diagnose, dispatch, docs-copy, docs-review-fix-execution, docs-review-packet-generation, iterate, pm, propagate, research, skill-docs, thread.
- **19 skills exist as LOCAL ONLY**: build, cleanup-quarantine-manager, component-layout-governance, content-pipeline-pass-a, content-pipeline-pass-b, content-pipeline-tab-map, create-action, create-component, create-script, cross-agent-packager, docs-coverage-and-route-integrity-audit, docs-quality-and-freshness-audit, generated-mdx-banners-governance, page-authoring, product-thinking, repo-audit-orchestrator, rubric-static-review, script-footprint-and-usage-audit, style-and-language-homogenizer-en-gb.
- **38 skills exist as PORTABLE ONLY** (not in `ai-skills/<name>/SKILL.md`): agentic-project-management-orchestrator, broken-links-advisory-triage, codex-task-isolation-standard, component-library-guided-authoring, component-library-index-refresh, discord-issue-intake-maintenance, docs-change-review, docs-ia-route-placement, docs-impact-propagation, docs-json-navigation-maintenance, docs-research-packet-generation, docs-research-to-implementation-plan, docs-source-verification, docs-status-table-generation, domain-pages-audit-runbook, external-docs-sync-and-sanitize, github-actions-data-pipeline-maintenance, glossary-terminology-generation, lpd-bootstrap-and-doctor, mdx-parent-child-scope-patterns, mint-dev-and-hook-install, mintlify-authoring-style-compliance, n8n-workflow-maintenance, new-script-scaffold, openapi-sync-and-api-doc-generation, page-content-research-review, pr-changed-file-ci-simulation, precommit-failure-triage, release-version-workflow-maintenance, script-header-and-index-sync, seo-frontmatter-generation, spelling-and-cspell-maintenance, staged-test-suite-runner, structure-and-allowlist-guardrails, style-mdx-quality-fix-playbook, v2-browser-sweep-runbook, v2-link-audit-runbook, v2-pages-index-sync.

### 8d. Portable skill summary (full table — 53 entries)

| Skill | v | type | category | tier | layer | mtime | size |
|---|---|---|---|---|---|---|---:|
| agent-brief | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,556 |
| agentic-project-management-orchestrator | 1.2 | — | meta | 2 | — | 2026-04-03 | 5,751 |
| broken-links-advisory-triage | 1.2 | — | audit | 2 | — | 2026-04-03 | 2,048 |
| browser | 1.2 | governance | governance | 2 | adapter | 2026-04-08 | 2,209 |
| close | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,518 |
| codex-task-isolation-standard | 1.2 | — | meta | 2 | — | 2026-04-03 | 3,116 |
| component-library-guided-authoring | 1.2 | — | authoring | 1 | — | 2026-04-03 | 2,058 |
| component-library-index-refresh | 1.2 | — | governance | 2 | — | 2026-04-03 | 1,963 |
| design | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,474 |
| diagnose | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,525 |
| discord-issue-intake-maintenance | 1.2 | — | meta | 2 | — | 2026-04-05 | 2,192 |
| dispatch | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,552 |
| docs-change-review | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 3,293 |
| docs-copy | 1.2 | — | authoring | 2 | — | 2026-04-03 | 4,384 |
| docs-ia-route-placement | 1.2 | — | authoring | 1 | — | 2026-04-03 | 1,824 |
| docs-impact-propagation | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 3,836 |
| docs-json-navigation-maintenance | 1.2 | — | governance | 1 | — | 2026-04-03 | 2,113 |
| docs-research-packet-generation | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 4,804 |
| docs-research-to-implementation-plan | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 4,440 |
| docs-review-fix-execution | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 5,095 |
| docs-review-packet-generation | 1.2 | — | review-pipeline | 2 | — | 2026-04-03 | 5,838 |
| docs-source-verification | 1.2 | — | audit | 2 | — | 2026-04-03 | 4,614 |
| docs-status-table-generation | 1.2 | — | audit | 2 | — | 2026-04-03 | 1,999 |
| domain-pages-audit-runbook | 1.3 | — | audit | 1 | — | 2026-04-03 | 2,506 |
| external-docs-sync-and-sanitize | 1.2 | — | governance | 2 | — | 2026-04-08 | 2,129 |
| github-actions-data-pipeline-maintenance | 1.2 | — | meta | 2 | — | 2026-04-05 | 2,028 |
| glossary-terminology-generation | 1.2 | — | authoring | 2 | — | 2026-04-03 | 2,094 |
| iterate | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,556 |
| lpd-bootstrap-and-doctor | 1.2 | — | meta | 1 | — | 2026-04-03 | 1,748 |
| mdx-parent-child-scope-patterns | 1.2 | — | authoring | 1 | — | 2026-04-03 | 2,259 |
| mint-dev-and-hook-install | 1.3 | — | meta | 1 | — | 2026-04-05 | 2,338 |
| mintlify-authoring-style-compliance | 1.2 | — | governance | 1 | — | 2026-04-03 | 2,015 |
| n8n-workflow-maintenance | 1.2 | — | meta | 2 | — | 2026-04-05 | 2,106 |
| new-script-scaffold | 1.2 | — | meta | 2 | — | 2026-04-03 | 2,091 |
| openapi-sync-and-api-doc-generation | 1.2 | — | governance | 2 | — | 2026-04-03 | 2,055 |
| page-content-research-review | 1.2 | — | audit | 2 | — | 2026-04-03 | 4,444 |
| pm | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,434 |
| pr-changed-file-ci-simulation | 1.2 | — | meta | 1 | — | 2026-04-03 | 1,896 |
| precommit-failure-triage | 1.2 | — | meta | 1 | — | 2026-04-03 | 1,710 |
| propagate | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,607 |
| release-version-workflow-maintenance | 1.2 | — | meta | 2 | — | 2026-04-05 | 2,088 |
| research | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,560 |
| script-header-and-index-sync | 1.2 | — | governance | 2 | — | 2026-04-03 | 2,029 |
| seo-frontmatter-generation | 1.2 | — | governance | 2 | — | 2026-04-03 | 1,979 |
| skill-docs | 1.2 | — | meta | 2 | — | 2026-04-03 | 2,916 |
| spelling-and-cspell-maintenance | 1.2 | — | governance | 1 | — | 2026-04-03 | 1,779 |
| staged-test-suite-runner | 1.2 | — | meta | 1 | — | 2026-04-03 | 1,946 |
| structure-and-allowlist-guardrails | 1.2 | — | governance | 1 | — | 2026-04-03 | 1,825 |
| style-mdx-quality-fix-playbook | 1.2 | — | governance | 1 | — | 2026-04-03 | 1,833 |
| thread | 1.0 | adapter | process | 2 | adapter | 2026-04-03 | 1,574 |
| v2-browser-sweep-runbook | 1.3 | — | audit | 1 | — | 2026-04-03 | 2,547 |
| v2-link-audit-runbook | 1.2 | — | audit | 1 | — | 2026-04-03 | 2,020 |
| v2-pages-index-sync | 1.2 | — | governance | 2 | — | 2026-04-03 | 1,992 |

Two distinct authoring conventions visible:
- **"Adapter" pattern (15 skills)**: includes `type: adapter`, `layer: adapter`, `invoke_when:` list, `primary_paths:` and `primary_commands:`. These are thin wrappers pointing to the canonical local skill. Tier 2.
- **"Body" pattern (38 skills)**: includes `primary_paths:` and `primary_commands:` but no `type` / `layer`. These are full-body portable skills (no local canonical exists). Tier varies (1 or 2).

---

## 9. registry/ — canonical inventory and workflow library

### 9a. Registry files

| Path | Size | mtime | Frontmatter `lastVerified` | Status | Notes |
|---|---:|---|---|---|---|
| `registry/README.md` | 2,919 | 2026-04-03 | — | active | Documents lane model. Some validator paths referenced. |
| `registry/ai-tools-registry.json` | 344,792 | 2026-04-08 | — | active | 317 artifact entries across 7 lanes. Lifecycle distribution: manual-doc 99, canonical-template 77, portable-export 75, legacy-active 53, retired 8, local-synced 5. The lane assignments don't match the file count: 53 local SKILL.md but only 5 `local-synced` — implying 28+ local skills are tagged `legacy-active`. |
| `registry/ai-tools-registry.schema.json` | 4,949 | 2026-03-18 | — | active | JSON Schema. mtime 2026-03-18. |
| `registry/ai-tools-inventory.md` | 44,535 | 2026-04-05 | — | generated | Generated report. |
| `registry/llms-txt-notes.md` | 1,324 | 2026-04-05 | — | reference | Notes on Mintlify llms.txt. |

### 9b. registry/dispatchers/ — 6 dispatcher pages

All generated by `operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js`. All carry `last_verified: '2026-04-05'`. All `status: active`, `readiness: phase-1-design`, `cleanup_decision: keep`.

| File | Concern | Child Skills | Outputs |
|---|---|---:|---:|
| `index.mdx` | repo-ops | — | — (catalog index) |
| `research-review-packet.mdx` | research | 4 | 4 |
| `review-fix.mdx` | review | 4 | 4 |
| `handover-readiness.mdx` | repo-ops | 4 | 4 |
| `page-ship.mdx` | authoring | 6 | 4 |
| `repo-cleanup-handover.mdx` | repo-ops | 4 | 4 |

All dispatcher pages are auto-generated MDX with same hidden generated banner + visible Note. All declare child skills using names that map to PORTABLE skills (e.g. `page-content-research-review`, `docs-copy`, `mintlify-authoring-style-compliance`, `v2-link-audit-runbook`, `v2-browser-sweep-runbook`). Several of these portable-only skills exist nowhere as local canonical — they are templates that are exposed via agent-packs and referenced by dispatchers but never have a body in `ai-skills/<name>/SKILL.md`.

### 9c. registry/workflows/ — 50 workflow MDX pages

All `last_verified: '2026-04-05'`, all `status: active`. Generated from `.github/workflows/*.yml`. The index reports:

| Cleanup decision | Count |
|---|---:|
| consolidate | 9 |
| keep | 13 |
| merge | 20 |
| needs-investigation | 6 |
| retire | 2 |

| Workflow family | Count |
|---|---:|
| ai-runtime-artifacts | 6 |
| content-publication | 6 |
| data-refresh | 9 |
| docs-catalog-governance | 6 |
| governance-maintenance | 5 |
| issue-intake-and-triage | 3 |
| placeholder-backlog | 3 |
| review-event-automation | 3 |
| validation-sweeps | 9 |

49 individual workflow pages plus index. Sampled `test-suite.mdx` (Docs CI Content Quality Suite): `risk_level: high`, `cleanup_decision: keep`, `consolidation_target: dispatcher:review-fix`. Pages declare Triggers, Jobs, Inputs, Dependencies, Dependants, Mermaid Pipeline, Frailty/Risk, Cleanup Rationale.

Workflow pages are **rich** (~4-7KB each) — substantially more populated than dispatcher pages.

---

## 10. ai-rules/ — legacy safety doctrine

### 10a. Live ai-rules files

| Path | Size | mtime | Notes |
|---|---:|---|---|
| `ai-rules/best-practices.md` | 4,137 | 2026-04-03 | Live — references AGENTS.md as primary policy. Scope discipline, ambiguity handling, etc. |
| `ai-rules/HUMAN-OVERRIDE-POLICY.md` | 1,028 | 2026-04-03 | Live — defines `--no-verify` override audit metadata requirements |
| `ai-rules/ROLLBACK-GUIDE.md` | 1,707 | 2026-04-03 | Live — emergency git recovery |
| `ai-rules/rules/git-safety.md` | 1,163 | **2026-03-18** | Live (referenced by HUMAN-OVERRIDE-POLICY). mtime 2026-03-18. Allows `--no-verify` with metadata. |

### 10b. ai-rules/_retired/ — 8 files

| Path | Size | mtime | Notes |
|---|---:|---|---|
| `_retired/.AI-SAFEGUARDS.md` | 0 | 2026-04-03 | EMPTY file — placeholder. |
| `_retired/.augment-guidelines` | 790 | 2026-04-03 | "Standard Operating Procedure for Scripts" with safety/verification workflow. **IDENTICAL** to `_retired/.augment-guidelines` and `.augment/.augment-guidelines` (see below). |
| `_retired/AI-ACCOUNTABILITY-CHECKLIST.md` | 2,435 | 2026-04-03 | Marked "Legacy reference only" — pointed to AGENTS.md |
| `_retired/AI_GUIDELINES.md` | 1,737 | 2026-04-03 | `type: always_apply` Augment-style frontmatter. **Allows** `--no-verify` with audit. |
| `_retired/REVIEW_TABLE.md` | 958 | 2026-04-03 | Pending-only review table, all rows in "Pending" status. Refers to legacy section names (`includes`, `assets-and-components`). |
| `_retired/UNIVERSAL-AI-PROTOCOL.md` | 4,630 | 2026-04-03 | "Last Updated: 2026-01-06". Dramatic doc ("After catastrophic AI failure destroying 12+ files"). Lists docs-v2 + main as protected. |
| `_retired/imported-copilot-instructions.md` | 4,024 | 2026-04-03 | Copilot-style architecture doc. `type: agent_requested`. |
| `_retired/tasks-directory-structure.mdc` | 2,398 | 2026-04-03 | `alwaysApply: true`. References `/tasks` directory structure (legacy — directory doesn't exist anymore). |

### 10c. ai-rules/.augment/ — duplicate subtree

| Path | Size | mtime | Notes |
|---|---:|---|---|
| `.augment/.augment-guidelines` | 790 | **2026-03-18** | **IDENTICAL** content to `_retired/.augment-guidelines` (790 bytes, same SOP-for-scripts text). |
| `.augment/rules/git-safety.md` | 485 | 2026-03-18 | **FORBIDS** `--no-verify` outright — CONFLICTS WITH live policy. |
| `.augment/rules/imported/AI_GUIDELINES.md` | 1,661 | 2026-03-18 | "STRICTLY PROHIBITED" `--no-verify`. **CONFLICTS** with `_retired/AI_GUIDELINES.md` (1,737B) which explicitly ALLOWS the same flag with metadata. |
| `.augment/rules/imported/copilot-instructions.md` | 3,969 | 2026-03-18 | Older variant of the copilot instructions; 4 bytes shorter than `_retired/imported-copilot-instructions.md`. |

**MAJOR FINDING**: There are TWO copies of `.augment-guidelines` (in `_retired` and `.augment`), and the two `AI_GUIDELINES.md` files in `_retired` vs `.augment/rules/imported/` give CONTRADICTORY policy — one allows `--no-verify`, one forbids it.

---

## 11. Cross-slice findings

### 11a. Count drift summary

| Surface | Local SKILL.md | Portable SKILL.md | Templates | Catalog | Registry artifacts | GOVERNANCE.md claim |
|---|---:|---:|---:|---:|---:|---:|
| Count | 34 (+1 x-archive) | 53 | 53 templates + 9 .references dirs | 9 | 317 paths total | "31 skills, maintenance mode" |

- `GOVERNANCE.md` says 31. Reality: 34 local + 1 archived = 35. Drift: +4.
- Catalog covers only 9/35 = 26%.
- Local-only: 19; Portable-only: 38; Both: 15. Total unique: 72 (but many are wrappers vs canonical, not true duplicates).

### 11b. Where templates and portable diverge from local

- Templates ARE the source for portable. (Templates and portable SKILL.md are byte-identical for sampled cases.)
- Portable adapters (15 skills) are thin pointers to local canonical, mostly v1.0 (out of date — local has bumped to v1.3/1.4 in 4 cases).
- Portable bodies (38 skills) have no local canonical. They exist in templates + agent-packs but not in `ai-skills/<name>/SKILL.md`. If we treat local SKILL.md as canonical, these 38 skills are "orphaned in templates only".

### 11c. Skill-routing chain breaks

The skill `thread` (portable adapter v1.0) says "Read `ai-tools/ai-skills/thread/SKILL.md`" — but the local v1.4 file is 21.7KB with materially different structure than v1.0 (e.g. v1.4 adds STATUS mode, phase-gate hooks, Karpathy alignment). Portable wrapper says it's still tracking the original spec.

Same for `docs-copy`: portable v1.2 wrapper points to local v1.4 — version drift across the wrapper.

### 11d. Companion file drift between local and portable

- Local `docs-copy/SKILL.md` has these companion dirs: `reference/` (singular), `references/` (plural), `skills/`, `agents/`. **Both `reference/` and `references/` exist** — possible typo-fork.
- Portable `docs-copy/` has only `references/` (matches the templates structure).
- Local `docs-review-fix-execution/` and `docs-review-packet-generation/` have `references/` + `agents/`; portable doesn't have the `agents/` companion.

### 11e. Duplicate files across the tree

- `.augment-guidelines` exists in TWO locations (790 bytes each, identical content): `ai-rules/_retired/.augment-guidelines` and `ai-rules/.augment/.augment-guidelines`. Both are dated differently (2026-04-03 vs 2026-03-18) but contents are identical.
- `product-writing-research-sources.md` (5,652 B) and `product-writing-research.md` (5,652 B) — same size suggesting copy/rename of the same content.
- `product-writing-skill-package.md` (9,022 B) and `product-writing.md` (9,022 B) — same size.

### 11f. Sites of inactive / placeholder / stub files

- 4 of the audit-category SKILL.md stubs are 868–990 bytes (cleanup-quarantine-manager, component-layout-governance, docs-coverage-and-route-integrity-audit, docs-quality-and-freshness-audit, script-footprint-and-usage-audit, style-and-language-homogenizer-en-gb). They are essentially command-line wrappers without real instructional content.
- `cross-agent-packager/SKILL.md` is 828 bytes — also a stub.
- `repo-audit-orchestrator/SKILL.md` is 1,134 bytes.
- `_retired/.AI-SAFEGUARDS.md` is 0 bytes.

### 11g. Future-dated and stale files

- `ai-tools/.allowlist` — mtime `2026-05-22` (FUTURE relative to other files; possibly post-audit edit signal)
- `source-content/llms.txt` — mtime `2026-04-15` (newest file in tree)
- `claude-code.mdx`, `cursor.mdx`, `windsurf.mdx` — mtime `2026-03-18` (oldest setup guides)
- `catalog/execution-manifest.json` — mtime `2026-03-18` (oldest pipeline manifest)
- `catalog/skill-catalog.schema.json` — mtime `2026-03-18`
- `registry/ai-tools-registry.schema.json` — mtime `2026-03-18`

---

## 12. Top findings (10 most surprising)

1. **Portable vs local skill divergence is enormous and structural.** The 15 skills that appear in both lanes have stale portable wrappers (v1.0) pointing to canonical local bodies that have moved to v1.4. The wrapper claims it tracks the canonical file but routes by name to a substantially evolved doc.
2. **`agent-packs/skills/manifest.json` registers ONLY ONE skill** (`browser`), yet 53 portable SKILL.md files live next to it. The manifest is effectively empty — generators/consumers that read this manifest cannot discover the other 52.
3. **`skill-catalog.json` lists only 9 skills, but local has 34 + 1 archived.** The "single source of truth for the docs infrastructure audit pipeline" excludes the entire lifecycle backbone (thread/research/pm/design/build/iterate/dispatch/diagnose/agent-brief/close/propagate) and all 3 `create-*` authoring scaffolds.
4. **38 portable skills are "phantom" — no local body exists.** They are referenced by dispatchers (e.g. `page-ship.mdx` declares `docs-ia-route-placement`, `mintlify-authoring-style-compliance`, `v2-link-audit-runbook`, `v2-browser-sweep-runbook` as children) but no canonical SKILL.md exists at `ai-tools/ai-skills/<name>/SKILL.md`. The dispatcher graph is partly fictional.
5. **`.augment-guidelines` exists TWICE with identical content** (`_retired/.augment-guidelines` and `.augment/.augment-guidelines`), and the two `AI_GUIDELINES.md` files give CONTRADICTORY policy: `.augment/rules/imported/AI_GUIDELINES.md` "STRICTLY PROHIBITS" `--no-verify` while `_retired/AI_GUIDELINES.md` allows it with metadata. Live `ai-rules/rules/git-safety.md` allows it; live `_retired/AI_GUIDELINES.md` allows it; the `.augment/` shadow tree forbids it.
6. **Templates numbering scheme broke.** Templates 32, 37, 38 each appear twice with different content. Templates 41 and 42 duplicate the content of templates 37 and 38 (renumbered but original numbered files never deleted). 53 templates but 4-6 are redundant.
7. **18 of 34 local skills are still `draft` with empty test logs.** The lifecycle process backbone (research/pm/design/build/iterate/dispatch/diagnose/agent-brief/propagate) carries `status: "draft"` and explicit "Not yet tested on a real X task" in the file body — none has been validated in production despite being the primary execution scaffold.
8. **`docs-copy/` local skill has TWO ref directories** (`reference/` singular and `references/` plural). Both contain different files. Looks like a fork that was never reconciled.
9. **`source-content/llms.txt` is the newest file in ai-tools/ (2026-04-15)** but the directory is officially `workspace-draft` / `snapshot` per inventory.json. The newest activity in the AI tools tree is a generated snapshot, not skill development.
10. **Codex skills-manifest.json claims `generated_at: 2026-03-22T11:41:44.939Z` but mtime is 2026-04-08**. The file has been modified without regenerating — generator bug or hand-edit. Same generator (`cross-agent-packager.js`) is itself documented by an 828-byte stub local SKILL.md.

---

## 13. Consolidation matrix (paths to reconcile)

| Surface | Current state | Recommended action |
|---|---|---|
| GOVERNANCE.md "31 skills" | Stale | Update to current 34 (+1 archived) count. Better: have generator write this number. |
| `ai-skills/README.md` reference in `ai-tools/README.md` | Missing file — only `_workspace/README.md` exists | Either create `ai-skills/README.md` OR fix the link target. |
| `skill-catalog.json` | Covers 9/34 skills | Either expand to cover all skills, OR rename to clarify it's only the "repo audit pipeline" subset (e.g. `audit-pipeline-catalog.json`). |
| Portable vs local skill drift | 15 wrappers stale (v1.0 vs local v1.3–v1.4) | Regenerate via `cross-agent-packager.js --agent-pack all`. |
| Templates vs portable | Byte-identical | Eliminate one path. Keep templates as source, generate portable on demand. |
| Templates numbering | 32/37/38 collisions; 41/42 duplicates of 37/38 | Renumber once, archive old numbered files into `templates/_retired/`. |
| `agent-packs/skills/manifest.json` | Lists only `browser` (1 of 53) | Regenerate to list all portable skills, OR document the intended scope. |
| 38 phantom portable skills | No local body | Decide: promote to local (give each a body) OR keep portable-only and document explicitly. Currently they're referenced by dispatchers despite having no canonical instructions. |
| `_retired/.AI-SAFEGUARDS.md` | 0 bytes | Delete. |
| `.augment/` shadow tree | Duplicate + contradicts live policy | Delete entire `.augment/` subtree (live policy is in `ai-rules/` root). |
| Two `.augment-guidelines` files | Identical content in 2 locations | Delete the `.augment/` copy. |
| `source-content/` snapshots | 3 locale snapshots of files that don't exist in v2 | Delete or move to `_workspace/`. |
| `_workspace/research/` duplicates | `product-writing-research-sources.md` + `product-writing-research.md` (same byte count); `product-writing-skill-package.md` + `product-writing.md` (same byte count) | Diff and pick one of each pair; archive other. |
| `docs-copy/reference/` vs `docs-copy/references/` | Two ref directories | Merge into one. Standardise to plural to match other skills. |
| `inventory.json` "31 files" vs `content-map.md` mention 31 vs actual 34 SKILL.md | Stale counts | Regenerate. |
| Audit-category stubs (868–990 bytes) | Pure shell wrappers | Either flesh out with instructional content OR delete and refer agents directly to script `--help`. |
| `x-archive/component-create/` | `status: active` despite x-archive location | Set `status: retired` OR move out of x-archive. |

---

## 14. File counts confirmation

| Category | Count |
|---|---:|
| Total ai-tools/ files | 324 |
| Local SKILL.md (active) | 34 |
| Local SKILL.md (archived) | 1 |
| Portable SKILL.md | 53 |
| Templates (.template.md) | 53 |
| Template .references dirs | 9 |
| Dispatchers | 6 (5 + index) |
| Workflows | 51 (50 + index) |
| ai-rules live | 4 |
| ai-rules retired | 8 |
| ai-rules .augment shadow | 5 |
| Registry artifacts (in JSON) | 317 |
| Catalog skills | 9 |

---

## 15. Date timeline (selected anchors)

| Date | Event |
|---|---|
| 2026-03-18 | Setup guides (claude-code.mdx, cursor.mdx, windsurf.mdx), original templates, schemas, .augment/ shadow tree, docs-copy companion bundle, _workspace examples. Treated as the v2 baseline. |
| 2026-03-22T11:41 | (claimed in codex skills-manifest.json) Codex manifest "generated_at" timestamp. |
| 2026-04-03 | Mass authoring/refactor: nearly all process skills + portable wrappers + templates + ai-rules + _retired/ + most agent-packs/skills. |
| 2026-04-05 | content-map.md and inventory.json generated. registry/ MDX visual library generated with last_verified=2026-04-05. Workflow + dispatcher pages last_verified=2026-04-05. |
| 2026-04-07 | thread/SKILL.md updated to v1.4 (BL-014 redesign). source-content/contribute/CONTRIBUTING refreshed. ai-tools/GOVERNANCE.md set to "31 skills, maintenance mode". |
| 2026-04-08 | Multi-file refresh: browser/SKILL.md v1.2, generated-mdx-banners-governance, agent-packs/* (regenerated), skill-catalog.json, registry/ai-tools-registry.json, create-action/, create-script/, external-docs-sync-and-sanitize. |
| 2026-04-09 | create-component/SKILL.md (newest local skill). x-archive/component-create/SKILL.md (same day — superseding). |
| 2026-04-15 | source-content/llms.txt snapshot — newest file in tree. |
| 2026-05-22 | ai-tools/.allowlist (future-dated relative to most files). |

---

**End of slice.**
