# Audit: `tasks/`

*Audited: 2026-03-20*

---

## Structure

```
tasks/
├── plan/
│   ├── active/            10 plan folders + 4 loose files
│   ├── complete/          EMPTY (only .gitkeep)
│   ├── future/            1 file
│   └── repo-ops-reports/  historical rollout reports
├── reports/               17 subdirectories, ~474 files (script-generated)
├── research/              2 subdirs: adjudication, claims
├── staging/               deprecated-n8n/ (4 JSON files)
├── scripts/               index file only
├── errors/                EMPTY (.gitkeep)
└── README.md              governance contract
```

---

## `plan/active/` — 10 Folders

| Folder | Status | Notes |
|---|---|---|
| `AI-TOOLS-GOVERNANCE` | Active — created 2026-03-20 | Fixing broken paths in 42 templates + 40 agent packs |
| `CANONICAL-TRUTH-GUIDES` | Active | In-progress |
| `COMPONENT-GOVERNANCE` | Active | Restructuring component registry + docs |
| `CONTENT-STRUCTURE-TEMPLATES` | Active | Framework for content templates |
| `CONTENT-WRITING` | Active | Pilot on v2/gateways/guides |
| `OSS-OWNERLESS-REPO-GOVERNANCE` | Active | Governance for ownerless content |
| `REPO-STRUCTURE-GOV` | Active | This audit is part of it |
| `SCRIPT-GOVERNANCE` | Active (60% complete) | On separate `docs-v2-dev-scripts` branch |
| `TERMINOLOGY-COLLATE` | Active | Terminology harvesting |
| `dep-COPYWRITING FRAMEWORK` | **Deprecated** — prefix says so | Should be moved to `plan/complete/` or deleted |

**Loose files in `plan/active/` (not in any folder):**
- `optimise-performance.md` — orphan planning note, no owning task folder
- `usefulness-scoring-gap-analysis.md` — orphan
- `usefulness-scoring-implementation-strategy.md` — orphan
- `visual-explainer-workflows.mdx` — orphan

**Issue:** These 4 files are planning artifacts sitting loose in `active/` without a task folder. Either create a task folder for them or move them to `_workspace/` within an appropriate task, or to `plan/future/`.

---

## `plan/complete/`

Empty except `.gitkeep`. Governance specifies 30-day auto-deletion for completed plans — apparently this is working (nothing accumulates here).

---

## `plan/future/`

Single file: `page-content-research-trust-roadmap.md`. This appears static — no active work scheduled. May be stale. Review for retention.

---

## `reports/` — 17 Subdirectories, ~474 Files

All script-generated. Not manually edited per governance. Most are dated research outputs.

| Subdir | Notes |
|---|---|
| `repo-ops/` | 78+ files — governance audit outputs, script inventories |
| `orchestrator-guides-review/` | Deep nested research, dated 2026-03-16 |
| `gateway-guides-review/` | Similar |
| `gateway-concepts-review/` | Similar |
| `link-health/` | 2 audit files, dated 2026-03-09 |
| `merge-readiness/` | 1 file, dated 2026-03-17 |
| `v1-v2-mapping-audit/` | Migration mapping outputs |
| `page-audits/` | Page quality audits |
| Others | Various content quality reports |

**Assessment:** Well-governed. Reports are outputs only — no manual editing. TTL policy exists (stale-flag at 30 days, auto-delete after retention period). No action needed beyond ensuring the retention workflow is running.

---

## `research/`

Two JSON audit outputs (`adjudication/`, `claims/`). Data extracts, not active plans. Appear to be audit pipeline outputs. No cleanup needed unless stale per retention rules.

---

## `staging/`

`deprecated-n8n/` — 4 JSON files (Forum, Ghost, YouTube → Mintlify mappings). Explicitly marked deprecated. Historical migration data. **Can be deleted** if migration is confirmed complete.

---

## `errors/`

Empty. Only `.gitkeep`. Governance specifies 14-day stale-flagging. Working as designed.

---

## Scratch / Notes Findings

No orphaned `notes.txt` or scratch files found inside task folders themselves. The 4 loose files in `plan/active/` are the only governance gap.

No `_workspace/` directory exists in `tasks/`. The governance model here is clean — tasks/ is not a scratch space, it's a structured work registry. This is correct and should stay that way.

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| 4 loose files in `plan/active/` (no owning folder) | Medium | Create task folders or move to `plan/future/` |
| `dep-COPYWRITING FRAMEWORK` (deprecated, prefixed) | Low | Move to `plan/complete/` or delete |
| `plan/future/page-content-research-trust-roadmap.md` | Low | Review: active roadmap or stale? Move or delete |
| `staging/deprecated-n8n/` (4 JSON files) | Low | Delete if migration confirmed complete |
