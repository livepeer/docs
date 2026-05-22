# Decision Log — OSS Contributor Governance
**Created:** 2026-03-28
**Status:** Phase 1 output — active, append-only
**Format:** ID | question | options considered | decision | date | rationale | unblocks

---

## Handover Context

This repo is being handed over to **the OSS community + a human review team**. There is no internal owner after handover. This is the master constraint for all design decisions below and for Phase 2/3.

**Implications:**
- Governance must be fully self-explanatory to external contributors with no prior context
- Automation must be self-healing — no internal person to run scripts manually
- All canonical sources must be public, discoverable, and linked from entry points
- The human review team handles escalations the automation cannot resolve
- AI agents (Codex, Copilot) are first-class contributors — the system must route to them without human intervention

---

## Decisions

### D1 — Enable Copilot on the docs repo

| Field | Value |
|---|---|
| **Question** | Enable GitHub Copilot as a reviewer on this repo? |
| **Options** | Enable (docs repo only) / Enable org-wide / Defer |
| **Decision** | **ENABLE — docs repo only** |
| **Date** | 2026-03-28 |
| **Rationale** | `auto-assign-docs-reviewers.yml` already assigns Copilot on `codex/*` PRs — partially live. Formalise what's wired. Scope to docs repo only until org decision is made separately. |
| **Unblocks** | D2, D3, D6 (all depend on Copilot being enabled) |

---

### D2 — Copilot review mode

| Field | Value |
|---|---|
| **Question** | Should Copilot review be blocking (required to pass) or advisory (comment only)? |
| **Options** | Blocking / Advisory / Advisory with promotion path |
| **Decision** | **ADVISORY** |
| **Date** | 2026-03-28 |
| **Rationale** | Ownerless model — a blocking AI review creates a new single point of failure with no human fallback. Advisory aligns with the ownerless principle: emit signal, never gate on a named authority. Promote to blocking after 30-day clean baseline if noise stays low. |
| **Unblocks** | Phase 3 Copilot integration design |

---

### D3 — Agent issue assignment policy

| Field | Value |
|---|---|
| **Question** | Which agents can self-assign `agent-ready` issues? |
| **Options** | Maintainers-only / Triage team only / Open (any agent with scope contract) |
| **Decision** | **OPEN** — any agent that can read the scope contract (scope_in, scope_out, acceptance_checks) can pick up an `agent-ready` issue |
| **Date** | 2026-03-28 |
| **Rationale** | Ownerless model requires agents to operate without human assignment. The issue template scope contract is the gate — not an allowlist of approved agents. Any agent that fails the contract (wrong files touched, checks not passing) will fail CI, not pollute the repo. |
| **Unblocks** | agent-ready auto-classification workflow design (Phase 2) |

---

### D4 — Contributor ladder

| Field | Value |
|---|---|
| **Question** | Adopt full 4-role ladder (Contributor → Reviewer → Maintainer → Lead) or lightweight? |
| **Options** | Full 4-role with advancement criteria / Lightweight (Contributor + Reviewer only) / Skip |
| **Decision** | **LIGHTWEIGHT** — Contributor + Reviewer roles only |
| **Date** | 2026-03-28 |
| **Rationale** | No active human maintainer pool. A 4-role ladder is ceremony without substance at this stage. AI roles (Codex as implementer, Copilot as reviewer) are handled by label taxonomy, not a ladder. Revisit when 3+ regular human contributors are active post-handover. |
| **Unblocks** | Contributor-facing docs design (Phase 2) |

---

### D5 — Stale issue timing

| Field | Value |
|---|---|
| **Question** | How long before an issue is marked stale, then closed? |
| **Options** | 90 days inactive → stale, 30 days after → freeze/close (90/30) / 60/14 / 30/14 |
| **Decision** | **90/30** |
| **Date** | 2026-03-28 |
| **Rationale** | Low-traffic OSS repo post-handover. Aggressive timers create noise and discourage community contributors who may work slowly. 90/30 is conservative and community-friendly. |
| **Unblocks** | Stale/lifecycle automation design (Phase 2) |

---

### D6 — Custom instruction scope

| Field | Value |
|---|---|
| **Question** | Should custom Copilot instructions cover agent implementation AND code review, or just one? |
| **Options** | Both (agent + code review instructions) / Code review only / Agent only |
| **Decision** | **BOTH** |
| **Date** | 2026-03-28 |
| **Rationale** | The two instruction sets serve different surfaces and don't conflict. Agent instructions govern what Codex does when implementing. Code review instructions govern what Copilot flags when reviewing. Both needed for full ownerless operation. |
| **Unblocks** | Custom instruction file design (Phase 2) |

---

### D7 — Phase 3 execution ownership

| Field | Value |
|---|---|
| **Question** | Who executes Phase 3 and on what timeline? |
| **Options** | Internal team (4 weeks) / Immediate (2 weeks) / 6 weeks |
| **Decision** | **COMMUNITY + HUMAN REVIEW TEAM — immediate handover** |
| **Date** | 2026-03-28 |
| **Rationale** | Repo is being handed over to the OSS community with a human review team for escalations. There is no internal executor. Phase 3 must therefore be a complete, self-contained runbook that the community or agents can execute without prior context. Timeline is driven by handover readiness, not internal capacity. |
| **Unblocks** | Phase 3 design — changes execution from "Alison runs" to "community/agents can run from the runbook" |
| **Phase 3 implication** | Phase 3 deliverable is a community-executable runbook + automated scripts, not a task list for an internal person |

---

### D8 — Tasks-retention label cluster + solution product labels

| Field | Value |
|---|---|
| **Question** | What to do with 11 unlisted "tasks-retention" labels in the live set? And which solution product area labels are needed? |
| **Options** | Delete cluster / Keep cluster / Migrate to governed namespace |
| **Decision** | **DELETE** the 11 tasks-retention labels. **ADD** solution product area labels. |
| **Date** | 2026-03-28 |
| **Rationale (delete)** | Labels `plan-stale`, `error-stale`, `agent-brief`, `backlog`, `handoff`, `analysis`, `execution`, `copilot-candidate`, `needs-human`, `uncategorised`, `tasks-retention` appear to be internal session/task tracking leaked into the GitHub label namespace. None map to any contributor triage workflow. Verify zero active issues before deleting. |
| **Rationale (add)** | Solution products are owned by their respective teams. Community contributors need to route issues by product. These are governance-critical for the community handover. |
| **Solution product labels to add** | `area: daydream`, `area: studio`, `area: embody`, `area: streamplace`, `area: frameworks` |
| **Unblocks** | Phase 3 label cleanup (label-remove.sh scope), Phase 3 label creation |

---

## Open Items

None — all D1–D8 decisions are resolved.

---

## Decision Registry Cross-Reference

These decisions are scoped to OSS-OWNERLESS-REPO-GOVERNANCE and do not need to be duplicated in the CONTENT-WRITING decision registry. If any decision affects content pipeline governance, a reference note should be added to `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`.
