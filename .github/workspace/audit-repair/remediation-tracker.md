# .github/ Audit Remediation Tracker

> **Thread:** GitHub Actions & Scripts Consolidation Audit
> **Plan:** `.claude/plans/nested-painting-spindle.md`
> **Started:** 2026-04-15

---

## Checkpoint Status

| CP | Scope | Findings | Severity | Tag | Status | Commit |
|---|---|---|---|---|---|---|
| 0 | Findings report | — | — | `audit-repair/checkpoint-0` | ⬜ Pending | — |
| 1 | Script migration | F1 | P1 | `audit-repair/checkpoint-1` | ⬜ Pending | — |
| 2 | Workflow renames + concurrency | F3, F4 | P1, P2 | `audit-repair/checkpoint-2` | ⬜ Pending | — |
| 3 | Documentation surfaces | F7, F12, F2, F5 | P1–P2 | `audit-repair/checkpoint-3` | ⬜ Pending | — |
| 4 | Render gate mappings | F14 | P2 | `audit-repair/checkpoint-4` | ⬜ Pending | — |
| 5 | Cleanup | F6, F8, F9, F10, F11 | P3 | `audit-repair/checkpoint-5` | ⬜ Pending | — |

---

## Finding Resolution

| # | Finding | Severity | Checkpoint | Resolved |
|---|---|---|---|---|
| F1 | Scripts in `.github/scripts/` | P1 | CP1 | ⬜ |
| F2 | Concern taxonomy drift | P2 | CP3 | ⬜ |
| F3 | 4 workflows break naming | P1 | CP2 | ⬜ |
| F4 | 2 workflows lack concurrency | P2 | CP2 | ⬜ |
| F5 | Missing verify pair | P2 | CP3 | ⬜ |
| F6 | Duplicated scaffolding | P3 | CP5 | ⬜ |
| F7 | 6 stale doc surfaces | P1 | CP3 | ⬜ |
| F8 | PR template confusion | P3 | CP5 | ⬜ |
| F9 | Archived augment file | P3 | CP5 | ⬜ |
| F10 | Redundant deprecated template | P3 | CP5 | ⬜ |
| F11 | dep-CODEOWNERS | P3 | CP5 | ⬜ |
| F12 | Stale gap numbers | P2 | CP3 | ⬜ |
| F14 | 15 missing remediators | P2 | CP4 | ⬜ |

---

## Rollback Log

| CP | Rolled back? | Reason | Recovery |
|---|---|---|---|
| — | — | — | — |

---

## Validation Results

| CP | Workflow governance | Script locations | JSDoc headers | Stale refs | YAML syntax | Pass? |
|---|---|---|---|---|---|---|
| 0 | — | — | — | — | — | — |
| 1 | ⬜ | ⬜ | ⬜ | ⬜ | — | ⬜ |
| 2 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 3 | ⬜ | ⬜ | ⬜ | ⬜ | — | ⬜ |
| 4 | — | — | — | — | ⬜ | ⬜ |
| 5 | ⬜ | ⬜ | ⬜ | ⬜ | — | ⬜ |
