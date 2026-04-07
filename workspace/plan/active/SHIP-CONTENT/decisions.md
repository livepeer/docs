# SHIP-CONTENT — Decision Log

Single source of truth for all decisions surfaced during content writing execution.

**Rules:**
- Agents log every decision they cannot make. Do not leave it in a chat message.
- Decisions with a clear default: default is applied automatically. Human only intervenes to override.
- Decisions without a clear default: agents pre-build both versions. Human picks A or B.
- A decision is resolved when a human records a pick in the "Human pick" column.

---

## Decision Table

| # | Tab | Decision | Options | Default | Human pick | Status |
|---|-----|----------|---------|---------|------------|--------|
| D-01 | Orchestrators | **S1 path model** — 3 flat paths (IA) vs 4 paths (existing) vs proposed 2-step workload-first model | A: 3 flat (solo video/dual, AI-focused, pool node) / B: 4 flat (existing content) / C: 2-step (workload first, then participation if video/dual) | C — 2-step model (logged 2026-03-24 in decision-registry.md) | — | OPEN |
| D-02 | Orchestrators | **Pool worker vs pool operator** — real distinction the IA misses. Pool worker = contributes GPU to someone else's pool. Pool operator = runs the pool. Belongs in S1 or S6? | A: both defined in S1 nav page / B: defined in S6 (join a pool section) | B — define in S6, reference in S1 | — | OPEN |
| D-03 | Orchestrators | **Enterprise persona** — dropped from canonical 5 in the IA review session. Correct, or reinstate? | A: keep dropped (enterprise = scale, not a path) / B: reinstate as a 6th persona | A — keep dropped | — | OPEN |
| D-04 | Orchestrators | **S2/S3 merge** — sections flagged as merge candidates. S2 (viability/hardware) + S3 (work routing/payment) are conceptually separate but thin. | A: keep as 2 separate sections / B: merge into one "How it works" concept section | A — keep separate | — | OPEN |
| D-05 | Orchestrators | **Fee cut direction** — possible inversion between v1 and v2. Is the fee cut % the amount the orchestrator keeps, or the amount given to delegators? | A: % kept by orchestrator / B: % given to delegators | A — % kept by orchestrator (requires SME verification before writing S3/S7) | — | NEEDS VERIFICATION |
| D-06 | Orchestrators | **BYOC (Bring Your Own Compute)** — in scope for S8 or deferred? | A: include in S8 AI pipelines / B: defer to a future section | B — defer | — | OPEN |
| D-07 | Orchestrators | **S9 standalone or collapse into S5** — S9 (verify node working) overlaps with S5 (get node running) verification steps. 2 pages or fold into S5? | A: keep S9 standalone / B: fold S9 verification into S5 as a final step | B — fold into S5 | — | OPEN |
| D-08 | Gateways | **NaaP terminology lock** — "Network-as-a-Product" — lock as canonical term or keep provisional? | A: lock as canonical / B: keep provisional pending SME sign-off | A — lock | — | OPEN |
| D-09 | Gateways | **Archive aggressiveness** — 301 files, expect 30-50%+ to be MERGE/DROP candidates. How aggressive? | A: aggressive (archive anything that doesn't map cleanly to IA sections) / B: conservative (only archive clear duplicates) | A — aggressive; agents recommend list, human confirms | — | OPEN |
| D-10 | Developers | **S6 split** — real-time compute vs custom compute: one section or two? | A: one merged section / B: split into two sections | Agents pre-build both tab-maps. Human picks. | — | OPEN |
| D-11 | About | **Multi-audience frontmatter model** — About tab serves multiple audiences. How to express in frontmatter? | A: array of audiences (`audience: [gateway, orchestrator, ...]`) / B: `audience: general` token / C: `audience: primary` + `audience-secondary: [...]` | Agents present all 3 with trade-offs. Human picks. | — | OPEN |
| D-12 | Delegators | **Rewards placement** — in the delegator journey, does the rewards/earnings explanation come before or after the "choose an orchestrator" step? | A: rewards before selection (motivate then explain how to act) / B: selection before rewards (orient to action first, then show payoff) | Agents pre-build both journey orderings. Human picks. | — | OPEN |

---

## Resolved Decisions

| # | Tab | Decision | Resolution | Date | Resolved by |
|---|-----|----------|------------|------|-------------|
| D-NAV-01 | ALL | `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths | Locked. One nav file per multi-path tab, not per-persona. | 2026-03-23 | Human |

---

## Verification Queue

Items that need SME input (not a design decision — a factual check):

| # | Tab | Claim | Source needed | Priority |
|---|-----|-------|---------------|----------|
| V-01 | Orchestrators | Fee cut direction: is the fee cut % the orchestrator keeps, or gives to delegators? (D-05) | On-chain contract read or SME confirmation | HIGH — blocks all S3, S7, S11 content |
| V-02 | Orchestrators | Active set size: is it still 100? Governance-controlled. | Live network check | MEDIUM — needed before S2, S3 |
| V-03 | Orchestrators | "AI routing does NOT require active set membership" — stated in IA but needs explicit confirmation | SME or go-livepeer source | HIGH — central claim in S2/S3 |
| V-04 | Orchestrators | LIP-92 identity: Treasury Contribution Percentage or AI model registry? | LIPs index | MEDIUM — needed before glossary references |

---

_Last updated: 2026-03-29_
