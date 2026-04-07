# Audit: `tools/`

*Audited: 2026-03-20*

---

## Structure

```
tools/
├── cli/              1 file: lpdignore.example
├── config/           31 config + policy files
├── dev/              13 development utility scripts
├── i18n/             1 file: config.json
├── lib/              37 shared utility modules
├── node_modules/     npm dependencies
├── notion/           15 Notion sync files + docs
├── scripts/          ~142 scripts in <type>/<concern>/<niche>/ taxonomy
├── vscode/           4 VS Code extensions
├── package.json      18 npm dependencies, 42 npm scripts
├── package-lock.json
└── script-index.md   PARTIALLY STALE (paths are out of date)
```

---

## `tools/scripts/` — Full Taxonomy

Structure: `<type> / <concern> / <niche>/`

**Types:**
- `audits/` — Read-only scans and measurements
- `generators/` — Produce files from source data
- `validators/` — Enforce rules, pass/fail
- `remediators/` — Bulk fix/repair
- `dispatch/` — Pipeline orchestration, agent dispatch
- `automations/` — Automated pipelines
- `archive/` — Deprecated (organized: `legacy/`, `deprecated/`, `fixtures/`)
- `x-archive/` — Superseded via git mv (22 items, flat)
- `config/` — Shared config
- `snippets/` — `test-scripts.sh`, `luma-calendar.jsx`

**Concerns (uniform across all types):** `content/`, `components/`, `governance/`, `ai/`

**Stats:**
| Metric | Count |
|---|---|
| Total JS + shell scripts | 142 |
| Active scripts | ~102–115 |
| Archived (archive/ + x-archive/) | ~40 |
| Empty organizational dirs | 28 |
| Shared lib modules | 37 |
| Config files | 31 |

---

## `tools/lib/` — Shared Utilities

Well-organized, no duplication. 37 files covering:
- Core utilities: `docs-index-utils.js`, `frontmatter-taxonomy.js`, `component-governance-utils.js`, `generated-file-banners.js`, `mdx-safe-markdown.js`
- Docs usefulness (8 files): LLM evaluator, rubric loader, scoring, quality gate, 10 per-page-type prompts
- Copy governance: `banned-phrases.txt`, `banned-words.txt`

**Assessment:** Strong. No action needed.

---

## `tools/config/` — 31 Config Files

Well-organized. Key items:
- Policy configs: `component-layout-profile.json`, `generated-artifacts.json`, `report-retention-policy.json`, `ownerless-governance-surfaces.json`
- Usefulness: `usefulness-rubric.json`, `usefulness-journeys.json`, `usefulness-llm-tiers.json`
- Style: `style-language-profile-en-gb.json`, `cspell.json`
- Scoped navigation: `scoped-navigation/` (4 JSON variants for different doc.json scopes)
- Speakeasy API gen: `.speakeasy/workflow.yaml` + lock

**Assessment:** Good. No consolidation needed.

---

## `tools/dev/` — 13 Dev Utilities

Useful local dev tools: Mintlify dev server launcher (`mint-dev.sh`), MDX formatter, scoped docs.json generator, VS Code extension installer. Two test files (`test-add-callouts.js`, `test-seo-generator.js`) that may be redundant with the main test suite.

---

## `tools/notion/` — 15 Files

Numbered 5-step sync pipeline (Notion ↔ docs). Clean, self-contained with its own `package.json`, docs, and `.env.example`. No issues found.

---

## `tools/vscode/` — 4 Extensions

| Extension | Purpose | Status |
|---|---|---|
| `lpd-mdx-preview` | MDX file previewer | Active, includes compiled `.vsix` |
| `markdown-list` | Markdown list utilities | Active, includes compiled `.vsix` |
| `authoring-tools` | General authoring | Active |
| `components` | Component registry browser | Active |

Compiled `.vsix` files committed to repo — this is intentional for local install. No issues.

---

## `tools/script-index.md` — STALE

**Status:** Partially current. 144 lines, 138+ scripts listed. Last git update: Mar 20. **But paths are wrong.**

**Specific breakage:** The index consistently references `tools/scripts/codex/` paths (old structure). After SCRIPT-GOVERNANCE restructure, those scripts now live at:
- `tools/scripts/automations/ai/codex/`
- `tools/scripts/validators/ai/codex/`
- `tools/scripts/dispatch/ai/codex/`

**This is likely causing a broken pre-push hook** (see below).

---

## CRITICAL: Broken Pre-Push Hook Path

The pre-push hook expects:
```
tools/scripts/codex/validate-locks.js   ← DOES NOT EXIST
```

Actual location after SCRIPT-GOVERNANCE restructure:
```
tools/scripts/validators/ai/codex/validate-locks.js   ✓
```

**Impact:** Pre-push validation is silently broken — `validate-locks.js` is not running. This is a direct consequence of SCRIPT-GOVERNANCE moving scripts without updating all hook references.

**Action required (immediate):** Update pre-push hook to use new path.

---

## Archive Strategy — Two Parallel Approaches

| Dir | Approach | Count |
|---|---|---|
| `scripts/archive/` | Organized — `legacy/`, `deprecated/`, `fixtures/` subdirs | ~18 |
| `scripts/x-archive/` | Flat + git mv, with README files | 22 |

Two different archival patterns coexist. `x-archive/` was from the SCRIPT-GOVERNANCE governance contract ("superseded files go to x-archive/ via git mv"). `archive/` predates that. They serve the same purpose.

**Recommendation:** Consolidate to one strategy after SCRIPT-GOVERNANCE completes. `x-archive/` (git mv, never deleted) is the governed approach — migrate `archive/` contents there, or document why both exist.

---

## Empty Organizational Directories (28)

28 dirs exist with no scripts at their level. These are structural containers for anticipated future scripts. Not a problem but should be noted — if a concern/niche has no scripts after SCRIPT-GOVERNANCE completes, those empty dirs can be pruned.

---

## Scratch / Notes Findings

No `notes.txt`, no `_workspace/`, no `.bak` files found. Clean.

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| **Pre-push hook references broken codex path** | **CRITICAL** | Fix hook: update `tools/scripts/codex/validate-locks.js` → `tools/scripts/validators/ai/codex/validate-locks.js` |
| `script-index.md` has stale paths (codex) | High | Regenerate — this is an auto-generated catalog |
| Two archive strategies (`archive/` + `x-archive/`) | Medium | Consolidate to `x-archive/` after SCRIPT-GOVERNANCE completes |
| 28 empty organizational dirs | Low | Prune empty leaf dirs after SCRIPT-GOVERNANCE completes |
| `dev/test-add-callouts.js`, `dev/test-seo-generator.js` may duplicate tests/ | Low | Verify — if covered by tests/ suite, remove from dev/ |
