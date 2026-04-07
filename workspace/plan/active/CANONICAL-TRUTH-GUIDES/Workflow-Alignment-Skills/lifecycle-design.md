# Thread Lifecycle Pipeline — Design Reference

**Status:** Active
**Version:** 1.0
**Primary file:** `ai-tools/ai-skills/thread/SKILL.md` (Step 1b)

---

## Problem

The `/thread` skill anchors every session but lacks a structured phase progression. The co-work skills exist (`/research`, `/design`, `/build`, `/iterate`, `/diagnose`, `/close`) but nothing connects them into a repeatable lifecycle. Sessions drift, skip phases, or jump to implementation without research or design.

## Principles

1. **Every thread follows the same lifecycle** — the phases are universal; what varies is which phases apply and how deep each goes
2. **Gates prevent premature execution** — no phase starts until its predecessor's gate is satisfied
3. **Skills serve phases** — each lifecycle phase maps to one or more existing skills; gaps are noted, not hidden
4. **Verify before shipping** — a dedicated production-readiness check catches what test and iterate miss
5. **The lifecycle is a scaffold, not a straitjacket** — sessions declare which phases apply and skip the rest explicitly

## The Lifecycle (10 phases)

```
research → audit → design → implement → test → iterate → test → verify → document → cleanup
```

## Skill Mapping

| Phase | Skill(s) | Notes |
|---|---|---|
| Research | `/research` | Produces brief with findings/analysis/recommendation |
| Audit | `/dispatch` | No dedicated `/audit` skill — use `/dispatch` for parallel inventory + classification |
| Design | `/design` | Produces architecture doc + phase-gate.jsonl checkpoints |
| Implement | `/build` | Validates against design criteria, agent-delegated execution |
| Test | `/build` Step 4, `/iterate` Step 4b | Render verification, completeness cross-refs |
| Iterate | `/iterate` | Categorises: pass/fix/redesign/research. Routes to correct phase |
| Test | `/build` Step 4 | Re-verify after iteration changes |
| Verify | — | **NEW — no dedicated skill yet.** Specification below |
| Document | — | **No dedicated skill.** Reference exemplar + self-documenting pipeline |
| Cleanup | — | **No dedicated skill.** Archive, consolidate, final audit |

## Verify Phase Specification

### Purpose

Production-readiness verification. Different from test (does it work?) and iterate (does the human approve?). Verify asks: **is this safe to ship to a production branch and survive without a human watching it?**

### Universal checks (always apply)

| Check | What it verifies |
|---|---|
| End-to-end pipeline | Full chain traced: trigger → script → data → output → consumer. No dead ends, no orphaned outputs |
| Framework alignment | Follows all applicable repo governance (script framework, component framework, naming conventions, Mintlify constraints) |
| Self-remediation | Survives ownerless operation. Error reporting exists (issues, logs). Failure self-heals or creates an issue. Cron/dispatch triggers work unattended. Recovery path documented |
| Risk mitigation | Failure modes identified and handled. What breaks if an API is down? A schema changes? A dependency is removed? Edge cases covered |
| Scalability | Works at 10x current scale. Architecture is composable, not brittle. Will it buckle when applied to 50 more targets? |
| Hanging threads | No TODOs, temp workarounds, unresolved deferrals, stale references, debug logs, backup files |
| Data integrity | Source data matches rendered output. No stale values, no hardcoded overrides that bypass the pipeline |
| Future recommendations | Concrete, prioritised, actionable. What was deferred? What would make this better? What should the next session pick up? |

### Context-aware checks (layer on based on what was built)

| If the build produced... | Also verify... |
|---|---|
| MDX pages | UK English (-ise, -our, -re). No em dashes. All links resolve. Frontmatter complete and valid. Voice/register matches audience. No questions in headings. Heading hierarchy valid (no skipped levels) |
| Scripts | JSDoc 11-tag header complete. Type/concern/niche placement correct. Exit codes (0=pass, 1=fail, 2=usage). Error handling present. `@usage` example actually works |
| Components | 7-tag JSDoc header. Mintlify constraints (no React imports, no hooks, no SSR). All existing consumers still render after changes |
| Data pipelines | Source → rendered output match verified. No stale values. No hardcoded overrides. Health check metadata exists. Pipeline recovers from upstream failure |
| GitHub Actions | Triggers fire correctly. Referenced secrets exist. Error reporting/issue creation works. Dry-run mode available. Concurrency groups set |
| Governance/framework docs | Enforcement tiers defined (hard gate/soft gate/self-heal). Self-heal paths exist and work. Examples match actual implementations in the repo |

### Output format

```markdown
## Verification Report: [what was built]

### Universal checks
- [ ] End-to-end pipeline — [pass/fail + evidence]
- [ ] Framework alignment — [pass/fail + evidence]
- [ ] Self-remediation — [pass/fail + evidence]
- [ ] Risk mitigation — [pass/fail + evidence]
- [ ] Scalability — [pass/fail + evidence]
- [ ] Hanging threads — [pass/fail + evidence]
- [ ] Data integrity — [pass/fail + evidence]

### [Context] checks
- [ ] [check] — [pass/fail + evidence]
...

### Issues found
| Issue | Severity | Routes to | Recommendation |
|---|---|---|---|
| [description] | P0/P1/P2 | [phase to revisit] | [what to do] |

### Future recommendations
1. [Concrete, prioritised, actionable]
2. ...
```

### Gate

Verify must pass before document/cleanup. Issues route back:
- Data/implementation issue → `/build`
- Design flaw → `/design`
- Unknown/misunderstood → `/research`
- Needs human decision → present with recommendation

## Gaps — Skills Not Yet Built

| Gap | What it would do | Priority | Workaround |
|---|---|---|---|
| `/audit` | Standalone inventory + classification skill | Medium | Use `/dispatch` with audit-scoped agent briefs |
| `/verify` | Production readiness verification | High | Inline in `/thread` lifecycle (this design) |
| `/document` | Reference exemplar creation + self-documenting pipeline | Low | Manual — add to `.claude/references/` and update governance indexes |
| `/cleanup` | Archive, consolidate, final audit | Low | Manual — follow cleanup phase description in lifecycle |

## Test Criteria

1. Every thread that uses the lifecycle can declare which phases apply — tested by the "Lifecycle position" format in Step 1b
2. Phase transitions require gate evidence — tested by Step 3 format requiring evidence line
3. Verify phase produces a structured report — tested by running verify on a completed build
4. Context-aware checks adapt to what was built — tested by running verify on MDX work vs script work and confirming different checks fire
5. Issues found in verify route back to the correct phase — tested by categorisation in the issues table

## Decisions Made

| Decision | Rationale |
|---|---|
| Verify is a phase in `/thread`, not a standalone skill | It needs context from the full session (what was built, which frameworks apply). A standalone skill would need all that context passed in. Inline is simpler and more reliable for now |
| 10 phases, not 9 | Verify fills the gap between "human approved" (iterate) and "documented and shipped" (document). Without it, production readiness is assumed, not checked |
| Context-aware checks are a table, not a script | The checks vary too much by domain to automate now. The table is a prompt for Claude to apply the right checks. Automation can come later as individual validators |
