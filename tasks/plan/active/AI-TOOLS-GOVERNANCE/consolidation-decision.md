# Skill Consolidation Decision Document

> **Date:** 2026-03-20
> **Status:** Awaiting human decision

---

## Pair 1: Content Audit Skills

### Current state

| Skill | Script exists? | Has produced output? | Checks |
|---|---|---|---|
| `docs-quality-and-freshness-audit` | Yes (`audits/content/quality/`) | No | TODO/TBD markers, thin pages, freshness risk |
| `docs-coverage-and-route-integrity-audit` | No (script never implemented) | No | Missing routes, orphan files, legacy `/v2/pages/` refs |

### Analysis

These skills audit **different dimensions** of content health:
- **Quality/freshness** = content completeness (is the page finished? is it stale?)
- **Coverage/route integrity** = navigation correctness (does every nav entry have a page? are there orphan files?)

They share the same output shape (`tasks/reports/repo-ops/`) and the same invocation pattern (`--scope full`), but their checks don't overlap.

### Recommendation: **Keep separate, but defer coverage audit**

- The coverage audit has no backing script and has never run. It shouldn't be merged with a working skill — that would add dead weight to a functional audit.
- When the coverage script is eventually implemented, it should remain separate because the check categories are distinct (content quality vs. navigation integrity).
- **Action:** Leave both as-is. The coverage audit is already marked as "not yet implemented" in its SKILL.md. Consider retiring the template if no script is planned within the next quarter.

---

## Pair 2: Review Pipeline Skills

### Current state

| Skill | Local SKILL.md? | Reference files | Purpose |
|---|---|---|---|
| `docs-review-packet-generation` | Yes + 4 references | scope-derivation, packet-contract, tracker-contract, validation-checklist | Generate review packets (report-only, no edits) |
| `docs-review-fix-execution` | Yes + 4 references | execution-loop, tracker-update-rules, residual-warning-policy, section-closeout | Execute fixes from packets (edits pages) |

### Analysis

These skills are **sequentially coupled** — generation always precedes execution — but they have fundamentally different modes of operation:

| Dimension | Generation | Execution |
|---|---|---|
| **Edits pages?** | No (report-only) | Yes |
| **Input** | Nav source + lint scripts | Approved packet |
| **Output** | Dated packet root with trackers | Updated pages + tracker strikethroughs |
| **Risk profile** | Low (read-only) | High (writes to live docs) |
| **Reference files** | 4 (all about scope/contract) | 4 (all about execution/policy) |
| **Complexity** | 8-step workflow | 8-step workflow |

### Recommendation: **Keep separate**

- Merging would create a ~120-line SKILL.md with 8 reference files, 16 workflow steps, and two fundamentally different risk profiles (read-only vs. write). This violates the principle that skills should be focused enough for an agent to hold in context.
- The sequential coupling is a feature, not a problem — it enforces a human approval gate between "see what needs fixing" and "fix it."
- The reference files have zero overlap (scope-derivation vs. execution-loop, etc.), confirming these are genuinely different domains.
- **Action:** Leave both as-is. The separation enforces the generate → approve → execute workflow that prevents unreviewed edits.

---

## Summary

| Pair | Recommendation | Reason |
|---|---|---|
| Quality + Coverage audits | Keep separate | Different check domains; coverage has no script yet |
| Packet Generation + Fix Execution | Keep separate | Different risk profiles; separation enforces approval gate |

No merges recommended. Both pairs have legitimate reasons for their current separation.
