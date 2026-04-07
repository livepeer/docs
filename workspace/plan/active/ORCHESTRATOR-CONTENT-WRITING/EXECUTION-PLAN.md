# Orchestrators Tab — 30-Minute Execution Plan

> **Created**: 2026-03-23
> **Scope**: Orchestrators tab ONLY
> **Goal**: Maximum progress toward complete content in 30 minutes
> **Method**: Parallel agent execution with human gates compressed to minimum viable review

---

## Reality Check

The full pipeline has 12 phases with 7 human gates. In 30 minutes, the limiting factor is human review time, not agent execution. Agents can run multiple phases in parallel in ~5 min each. Human review of outputs is the bottleneck.

**What 30 minutes can realistically produce**: All agent-runnable phases complete. All outputs ready for your review. Content drafts for the highest-priority sections started or complete. NOT: all 70+ pages written, reviewed, verified, and laid out.

---

## Minute-by-Minute Plan

### Minutes 0-2: HUMAN DECISIONS (you, right now)

You need to confirm or adjust 3 things:

1. **Lock the Orchestrators IA** — The 12-section structure (S1-S12) in MASTER-STATE.md Part 2. Say "approved" or tell me what to change.

2. **Fee cut direction** — Is fee cut in v2 expressed as "% orchestrator keeps" or "% delegators get"? If you know, tell me now and I record it. If not, I flag it as unresolved and we write around it.

3. **BYOC in S8** — Does BYOC get its own page in the AI section, or is it a subsection of S8? Quick call.

### Minutes 2-7: PARALLEL AGENT BURST (5 agents simultaneously)

Once you approve the IA, I spawn ALL of these at once:

| Agent | What it does | Output | Time |
|-------|-------------|--------|------|
| 1. Content Scan | Reads all 84 .mdx files + docs.json, produces per-page inventory | `orchestrators-content-scan.md` | ~5 min |
| 2. IA-Mapped Research Pack | Maps existing content against 12 IA sections, identifies gaps | `orchestrators-research-pack-v2.md` | ~5 min |
| 3. Phase 1b Persona Check | Reads raw inventory against IA, flags uncovered personas | Persona flags report | ~3 min |
| 4. Structure Audit | Maps ideal vs actual, gap analysis, P0/P1/P2 priority | `orchestrators-tab-map.md` | ~5 min |
| 5. Terminology Resolution | Resolves all verify flags from IA terminology lock, updates glossary | `terminology-locked-orchestrators.md` | ~4 min |

**Why these can run in parallel**: Agents 1-3 only READ existing files. Agent 4 needs the IA (which you just locked) + existing files. Agent 5 only reads veracity sources + existing glossary.

### Minutes 7-10: HUMAN REVIEW (you review agent outputs)

I present:
- Content scan summary (what exists, what's missing, what's broken)
- Research pack (content mapped to IA sections — where are the gaps?)
- Persona flags (any personas not covered?)
- Tab-map (approved structure with P0/P1/P2 work order)
- Terminology report (what's verified, what's still open)

You review. Approve or flag issues. This is the **Structure Approved** gate.

### Minutes 10-12: CONTENT AUDIT (AUDIT mode)

Agent runs AUDIT mode on all section groups simultaneously (one agent per group). Per page: KEEP / MOVE / MERGE / SPLIT / REWRITE / DROP.

Output: reconsolidation plan for your approval.

### Minutes 12-14: HUMAN APPROVES RECONSOLIDATION

You review the KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP decisions. Approve.

### Minutes 14-28: CONTENT WRITING (the big push)

**Strategy**: Start with LINEAR sections (S1-S5) — these are the reader's first experience and must be right. Run PARALLEL agents — one per page.

**Phase 6 WRITE mode per page**:
1. I generate the page brief (reader definition, outcome, journey position, single job, out-of-scope)
2. You approve the brief (or I batch-present briefs for a section and you approve the batch)
3. Agent writes the full page (plain markdown, no MDX, REVIEW markers on unverified claims)

**Batch approach** (to save human review time):
- I present ALL briefs for S1-S5 at once (5-7 pages). You approve the batch.
- Agents write all S1-S5 pages in parallel (~5 min).
- While you review S1-S5 outputs, agents start S6-S9 briefs.
- Continue overlapping.

**Realistic output in 14 minutes of writing time**:
- S1 (navigation/disambiguation): 1 page — WRITE from scratch
- S2 (viability/concepts): 4 existing pages — REVIEW/REWRITE
- S3 (payment mechanics): 4 existing pages — REVIEW/REWRITE
- S4 (prerequisites): 7 existing pages — REVIEW/REWRITE
- S5 (node setup): 1 new page or REWRITE of setup/guide
- S6-S12: Briefs produced, writing started, may not complete in 30 min

### Minutes 28-30: STATUS CHECKPOINT

I produce:
- What's complete (which pages have WRITE output)
- What's in review (waiting for your approval)
- What's remaining (which sections still need writing)
- Updated tab-status.md gates
- Next session pickup point

---

## What This Plan Skips (Deferred, Not Forgotten)

These are deferred to AFTER the 30-minute sprint, not skipped:

| Deferred Item | Why | When |
|---------------|-----|------|
| Phase 8 Naming Audit | Needs written content first | After content pass |
| Phase 7 Veracity Pass | Needs naming done first | After naming |
| Phase 9 Schema Migration (new validators) | Independent track, not blocking | Parallel |
| Phase 10 Layout Pass | Needs content + naming + veracity | After veracity |
| Phase 11 Universal Pages | Needs 70%+ content | After content |
| Phase 12 Cross-Tab | Needs multiple tabs | After Gateways tab |
| Brand & Copy Guide integration | Voice rules already cover orchestrator | Can enhance later |
| Persona-level voice differentiation | Voice rules work at audience level | Can enhance later |
| Voice testing (3 pages) | Content must exist first | After content pass |
| Golden examples per pageType | Nice-to-have for layout pass | Before Phase 10 |

---

## What This Plan Does NOT Skip

| Item | How it's handled |
|------|-----------------|
| IA approval | You approve S1-S12 at minute 0 |
| Content scan | Agent at minute 2 |
| Research pack mapping | Agent at minute 2 |
| Persona iteration check | Agent at minute 2 |
| Structure audit + tab-map | Agent at minute 2 |
| Terminology resolution | Agent at minute 2 |
| Human review of all outputs | Minutes 7-10 |
| Content audit (AUDIT mode) | Minutes 10-12 |
| Reconsolidation approval | Minutes 12-14 |
| Page briefs before writing | Batch-approved per section |
| Veracity markers in content | Placed during WRITE (REVIEW flags) |
| Voice rules applied | During WRITE mode Phase 5 check |
| UK English | During WRITE mode |

---

## Dependencies Graph (What Blocks What)

```
YOU APPROVE IA ─────────────────────────────────────────┐
  │                                                      │
  ├── Agent: Content Scan ──────────┐                    │
  ├── Agent: Research Pack ─────────┤                    │
  ├── Agent: Persona Check ─────────┤                    │
  ├── Agent: Structure Audit ───────┤                    │
  └── Agent: Terminology ───────────┤                    │
                                    │                    │
                          YOU REVIEW ALL ────────────────┤
                                    │                    │
                          Agent: Content Audit ──────────┤
                                    │                    │
                          YOU APPROVE RECON ─────────────┤
                                    │                    │
                          CONTENT WRITING (parallel) ────┘
                            S1 S2 S3 S4 S5 S6 S7 S8 S9 S10 S11 S12
```

---

## How to Start

Say: **"IA approved, go"** — and I launch all 5 agents immediately.

Or say what needs changing first.
