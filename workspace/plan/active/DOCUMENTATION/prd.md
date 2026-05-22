# Documentation Governance Pipeline

## ALWAYS APPLY FIRST PRINCIPLES THINKING

## Purpose & Aims

- Establish a single, predictable governance model for all documentation in this repo — covering governance docs, catalogs, policies, tooling references, contributor guides, and AI agent rules
- Define clear ownership, audience, maintenance mode, and validation requirements for every documentation item — so both humans and agents can always find the canonical source for any concern
- Eliminate the current fragmentation: 13+ documentation locations, no audience tags, no freshness validators, duplicate and conflicting content
- Ensure documentation is self-maintaining where possible (generated) and validatable where hand-maintained — aligned with the ownerless governance model already in use for other repo surfaces

## Outcomes Expected

- Documentation Governance Model
  - Defined (co-created with human)
  - Applied to all existing docs-guide pages
  - Applied to all documentation surfaces across the repo
  - Enforced via validators and CI gates
  - Documented in docs-guide as a canonical policy
  - Ready for use by contributors and agents

- Documentation Inventory (catalog)
  - Every documentation item listed with: canonical source, audience, maintenance mode, validator/gate, repair path
  - Machine-readable format for agent use
  - Human-readable format for contributor use
  - Kept current by a generator or freshness gate

- Ownerless surfaces for documentation
  - All critical documentation surfaces registered in `tools/config/ownerless-governance-surfaces.json`
  - Validators exist for each surface
  - Repair paths are deterministic and documented

## Process to Complete

### Setup Phase

1. Draft PRD (aims, outcomes, project management) in `prd.md` ← this file
2. Define folders → [Working Folder Structure](#working-folder-structure)
3. Define co-working rules → [Co-Working Rules](#co-working-rules)
4. Draft base plan in `plan.md`

### Planning Phase

1. ⏸ **Co-create the documentation governance model** with human (Phase 1 in plan.md)
   - The model: `canonical source · audience · maintenance mode · validator/gate · ownerless repair path`
   - Define each field as an enum or contract — not just a concept
2. Apply model to the full documentation inventory
3. Define phases for remediation and automation in `plan.md`

### Defining, Frameworking & Ideation Phase

In `Research/` and `Frameworks/`

**Thinking needed:**

- What does "canonical source" mean for each documentation type?
- What audiences genuinely need to be distinguished, and what frontmatter field represents this?
- What is the minimum viable validator for a hand-maintained file?
- How does this interact with the existing ownerless governance model?

**Approach:**

- Collaborative — human defines intent, AI proposes implementation
- Enumerate first, then validate against real repo state
- Feed decisions back to CANONICAL-TRUTH-GUIDES, REPO-STRUCTURE-GOV, OSS-OWNERLESS plans

### Execution & Implementation Phase

In tasks defined per phase in `plan.md`:

- Apply governance model fields to all docs-guide pages (frontmatter)
- Fix critical issues from audit.md (immediate + short-term items)
- Create missing canonical files (agent-documentation-contract.mdx, documentation-catalog.mdx)
- Add validators to ownerless surface manifest
- Consolidate duplicate/overlapping content
- Feed handoffs to other plans (REPO Phase 1.3, SCRIPT Task 14 prep, component library sync)

### Testing & Iteration Phase

- Validate all docs-guide pages pass naming convention validator
- Validate all ownerless surface entries are reachable
- Test agent behaviour with updated adapter files and documentation contract
- Iterate on freshness gate implementations

### Finalisation Phase

- All documentation surfaces have ownerless entries
- Generator regeneration schedule documented in source-of-truth-guide.mdx
- Documentation governance model documented in `docs-guide/policies/documentation-governance-policy.mdx`
- Handoffs to public surface (`v2/resources/documentation-guide/`) complete

---

## Project Management

### Co-Working Rules

#### ALWAYS APPLY FIRST PRINCIPLES THINKING!!!!!

#### ALWAYS APPLY THE CORRECT THINKING TYPE FOR THE TASK - research, evaluate, plan, ideation, implement

- Always confirm understanding of the task before executing
- On task completion provide:
  - Notes on what was done
  - Any flags or conflicts found during implementation
  - A brief plan status update (which items are now complete)
  - The next step and any blockers
- **Nothing executes in Phase 1 (model co-creation) without explicit human approval.** The model is a contract that affects 40+ files across the repo.
- Flag any decision that affects other active plans (REPO, SCRIPT, COMPONENT, OSS-OWNERLESS) before acting — these have their own gate processes
- Don't create new documentation files to document the process of documenting — use this folder as scratch and docs-guide as the destination

### Working Folder Structure

Working directory: `workspace/plan/active/DOCUMENTATION/`

**Root — canonical pages**

| File                 | Purpose                                                                       |
| -------------------- | ----------------------------------------------------------------------------- |
| `prd.md`             | This file — product requirements: aims, outcomes, process, project management |
| `plan.md`            | Phased execution plan, progress tracker, open questions                       |
| `context.md`         | Working context, aim, key facts, related plans                                |
| `research.md`        | Plan review summaries + docs-guide/repo scan findings                         |
| `audit.md`           | Full audit: locations, duplicates, gaps, type×concern inventory               |
| `recommendations.md` | Full recommendation list with prioritised action items                        |

**Frameworks/ — governance model definitions**

| File                    | Purpose                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| `doc-item-model.md`     | The core model: field definitions for canonical source, audience, maintenance mode, validator, repair path |
| `audience-enum.md`      | Audience values — what `human`, `agent`, `both` mean in this context; edge cases                           |
| `maintenance-enum.md`   | Maintenance mode values — `generated`, `hand-maintained`, `mixed`; rules per mode                          |
| `validator-patterns.md` | Validator pattern library — freshness checks, naming validators, ownerless surface patterns                |

**Tasks/ — handoff tasks and subplans**

| File                               | Purpose                                                           |
| ---------------------------------- | ----------------------------------------------------------------- |
| `task-fix-immediate.md`            | Immediate fixes (5 items from audit, no coordination)             |
| `task-frontmatter-rollout.md`      | Apply audience + maintenance frontmatter to all docs-guide pages  |
| `task-ownerless-surfaces.md`       | Register documentation surfaces in ownerless governance manifest  |
| `task-consolidate-contributing.md` | Coordinate Phase 1.3 contribute/ → docs-guide/contributing/ merge |
| `task-documentation-catalog.md`    | Design + generate documentation-catalog.mdx                       |

---

## Output Model

The core output of this plan is a **documentation item record**. Every item in the repo that serves as documentation (policy, catalog, framework, contributing guide, agent rule, env reference, tooling reference) should be expressible as:

```
<doc-item>
  canonical: <path>                   # single authoritative file
  audience: human | agent | both      # who reads this
  maintenance: generated | hand-maintained | mixed
  generator: <script-path>            # if generated — what produces it
  validator: <script-path or CI>      # what checks it's current and correct
  repair: <command or instructions>   # deterministic repair path
  ownerless-surface: true | false     # registered in ownerless-governance-surfaces.json
</doc-item>
```

This maps directly onto the existing ownerless governance model. The goal is that every documentation item is an ownerless surface.

---

## Related Pages

| File                                              | What it is                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| `plan.md`                                         | Full execution plan with phases and steps                           |
| `audit.md`                                        | Full findings — locations, duplicates, gaps, type×concern inventory |
| `recommendations.md`                              | Prioritised action list                                             |
| `docs-guide/policies/source-of-truth-policy.mdx`  | Current canonical boundaries — will be updated                      |
| `docs-guide/policies/ownerless-governance.mdx`    | Ownerless governance policy — model this extends                    |
| `tools/config/ownerless-governance-surfaces.json` | Machine-readable surface manifest — will gain new entries           |
| `workspace/plan/active/CANONICAL-TRUTH-GUIDES/`   | Related stub plan — may be absorbed into this plan                  |
