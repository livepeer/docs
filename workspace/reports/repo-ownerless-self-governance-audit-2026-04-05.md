# Repo Ownerless Self-Governance Audit

Date: 2026-04-05
Repo: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`
Scope: governance, self-documentation, agent-caused repo bloat, workflow-safe path to an ownerless operating model
Mode: audit and recommendations only

---

## Executive Summary

This repo already has unusually strong governance intent. The problem is not lack of policy. The problem is that governance is split across several parallel control planes, some of which are current, some partial, and some stale relative to the actual implementation.

The repo is not yet ownerless in the strict operational sense.

It is partially self-governing:

- root governance now has a canonical manifest at `tools/config/runtime/root-governance.json`, though this is better treated as a temporary location than the ideal long-term home
- generated root docs and reports can now be regenerated deterministically
- generated artifacts have a manifest at `tools/config/runtime/generated-artifacts.json`, though this also reads more like repo operations governance than general tooling config
- ownerless governance has a policy page at `docs-guide/policies/ownerless-governance.mdx`
- agent governance has a strong canonical policy at `docs-guide/policies/agent-governance-framework.mdx`
- hooks and CI already enforce meaningful structural and task-isolation rules

But it is not yet fully self-documenting or self-governing because:

- the ownerless surface registry is incomplete and stale in places
- script governance is still in migration and parts of the governance layer violate the current script standard
- `.github/workspace` contains useful design work, but much of it is still planning material rather than live canonical contract
- several workflows and docs still carry stale paths, stale taxonomy, or disconnected enforcement
- agent output placement is governed in policy, but not yet enforced as a single repo-wide write-admission model

Main conclusion:

This repo should move to a unified governance control plane where every governed surface is admitted, classified, validated, repairable, and documented from one machine-readable registry layer, with generated human-readable maps on top. The rollout must be phased so current contributor workflows continue to work while stale and duplicate control planes are retired.

---

## What "Ownerless" Should Mean Here

For this repo, "ownerless" should not mean "no humans ever involved." It should mean:

1. No critical repo surface depends on a named maintainer remembering to run a manual task.
2. Every governed surface has a canonical source, validator, repair path, gate layer, and escalation path.
3. Automation either fixes drift, blocks unsafe changes, or opens a tracked escalation issue. It must not silently report into the void.
4. Humans review exceptions and policy changes, but normal repo health does not rely on a single human operator.
5. Agents are treated as first-class writers to the repo, which means their output locations, write scopes, and cleanup obligations are governed explicitly.

This definition is already partially present in `docs-guide/policies/ownerless-governance.mdx` and in the OSS handover material under `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/`, but it is not yet implemented consistently across all active governance surfaces.

---

## Current Governance Layers

The repo already has these meaningful governance layers:

### 1. Policy layer

- `docs-guide/policies/ownerless-governance.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/generated-artifact-and-hook-governance.mdx`
- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/policies/infrastructure-principles.mdx`
- `docs-guide/policies/script-governance.mdx`

These define most of the right principles.

### 2. Runtime manifest/config layer

Current live state:

- `tools/config/runtime/ownerless-governance-surfaces.json`
- `tools/config/runtime/root-governance.json`
- `tools/config/runtime/generated-artifacts.json`
- `tools/config/registry/script-registry.json`
- `tools/lib/governance/script-governance-config.js`

These are the beginnings of a real control plane, but they are not yet unified and the current placement is not ideal. Governance state is functioning more like repo operations infrastructure than generic tool runtime config. The better end state is a first-class governance concern under `operations/governance/`, with `tools/` limited to shared libraries and helper code.

### 3. Enforcement layer

- `.githooks/pre-commit`
- `.githooks/pre-push`
- `.github/workflows/governance-sync.yml`
- `.github/workflows/repair-governance.yml`
- `.github/workflows/codex-governance.yml`
- `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`
- `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`
- `operations/tests/unit/ownerless-governance.test.js`

This layer is real and active, but parts of it are stale or inconsistent with the declared policy.

### 4. Design and in-flight planning layer

- `.github/workspace/framework-canonical.md`
- `.github/workspace/phase2/locked-pipelines.md`
- `.github/workspace/design/governance/design-overview.md`
- `.github/workspace/design/governance/process-docs/research.md`
- `.github/workspace/design/governance/process-docs/audit.md`
- `.github/workspace/phase2/pipeline-design/governance.md`

This layer contains strong analysis and useful target-state thinking, but it is not yet fully promoted into the canonical runtime governance model.

---

## Major Governance Gaps

### 1. The repo has multiple control planes instead of one

Root governance, ownerless governance, generated-artifact governance, script governance, agent governance, and workflow design each have their own policy and manifest surfaces. That is workable only if they are all linked and generated from a single source of truth. Today they are not.

Evidence:

- `tools/config/runtime/ownerless-governance-surfaces.json` does not yet treat root governance or generated-artifact governance as first-class ownerless surfaces.
- `tools/config/runtime/root-governance.json` now governs root admission, but that root model is not yet fully reflected in the ownerless surface registry.
- `.github/workspace/phase2/locked-pipelines.md` and `.github/workspace/design/governance/process-docs/audit.md` still describe broken or stale workflow behavior that is not folded back into one canonical machine-readable system.

Path-architecture issue:

- the current governance manifests live under `tools/config/runtime/`, but their meaning and consumers are primarily operational: hooks, validators, workflows, repair pipelines, and repo policy enforcement
- that makes governance feel like a tooling sub-config instead of a top-level repo concern

Impact:

- drift is rediscovered in documents instead of prevented by design
- contributors and agents cannot reliably tell which registry is authoritative
- "self-documenting" becomes documentation about governance rather than governance generating its own documentation

### 2. The ownerless registry is partial and stale

`tools/config/runtime/ownerless-governance-surfaces.json` is the right idea, but it is not yet mature enough to be the ownerless control plane.

Observed issues:

- only a subset of governed surfaces are registered there
- some paths are stale or inconsistent with the current repo layout
- some surfaces are still marked not ownerless-ready
- current rollout does not cover all active governance-critical surfaces

Examples:

- `docs-guide-generated.surface_globs` still references old wrapper-style generator paths
- `script-governance.surface_globs` includes `operations/operations/tests/**`
- script-governance points at stale canonical paths

Impact:

- the registry cannot yet be trusted as a full repo governance index
- "ownerless-ready" status is informative, not yet operationally complete

### 3. Governance code itself is not yet governed to the current standard

This is one of the clearest gaps.

The repo says script governance is canonical in `docs-guide/policies/script-governance.mdx`, but some governance-critical files still use deprecated metadata conventions.

Examples:

- `.githooks/pre-commit` still uses legacy tags like `@category`, `@domain`, `@needs`, and `@purpose-statement`
- `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js` has an incomplete header and legacy fields
- `operations/tests/unit/ownerless-governance.test.js` still uses legacy tags like `@category`, `@owner`, `@needs`, and `@purpose-statement`
- `operations/scripts/README.md` still documents the old six-type/four-concern script model instead of the newer seven-type/seven-concern model described in design material and config

Impact:

- the governance layer is asking the repo to comply with standards it does not yet apply to itself
- script catalogs and script docs remain partially untrustworthy
- contributors cannot tell whether the old or new taxonomy is the real one

### 4. `.github/workspace` is valuable, but it is not yet safely integrated into canonical governance

The workspace material contains strong planning and accurate diagnosis. It also contains explicit "BROKEN", "MISSING", "HEADLESS", and "stale" findings. That is useful. The problem is that these design documents are not consistently wired back into the live governance manifests and workflow implementations.

Examples:

- `.github/workspace/phase2/locked-pipelines.md` records critical gaps such as headless freshness monitoring, missing copy enforcement, and disconnected self-documentation pipelines
- `.github/workspace/design/governance/process-docs/audit.md` says `governance-sync` is broken due to stale paths
- `.github/workspace/phase2/pipeline-design/governance.md` proposes extracting five inline workflow scripts, but this is still design material rather than enforced runtime policy

Impact:

- design evidence exists, but operational governance still drifts
- the repo has analysis of itself rather than a closed-loop system that consumes that analysis and repairs or gates automatically

### 5. Several workflows remain fragile, stale, or only partially ownerless

The current workflow layer is not uniformly closed-loop.

Examples:

- `.github/workflows/governance-sync.yml` still contains dead `inputs.use_test_branch` logic and `cd tests && npm ci`, which does not match the current repo layout
- `.github/workflows/repair-governance.yml` is much closer to the intended ownerless pattern, but still depends on a broader governance pipeline that deliberately limits full-repo repair
- `.github/workspace/phase2/locked-pipelines.md` calls out headless scanners and disconnected or missing verify pairs

Impact:

- some governance paths still rely on manual noticing instead of machine-enforced follow-up
- the repo is not yet safe to call "self-healing" across all major surfaces

### 6. Agent-caused bloat is recognised, but not yet governed through a single write-admission model

The repo already recognises that agents create drift and root clutter. The existing protections are useful but fragmented:

- root governance controls root admission
- `workspace/` is declared the AI working directory in `AGENTS.md`
- hooks constrain agent behavior
- Codex task contracts constrain branch and file-scope behavior
- local browser outputs are now routed away from root in `tools/config/runtime/root-governance.json`

This is not yet enough for an ownerless repo because there is still no single machine-readable rule set that tells any writer:

- where a new file may be created
- where temporary outputs must go
- how long they may live
- whether they must be committed, ignored, or deleted
- what validator owns that surface

Impact:

- agents can still generate repo sprawl outside a unified placement contract
- governance relies too much on after-the-fact audits and not enough on admission control

### 7. Self-documentation is strong in pockets, but fragmented overall

The repo can already generate useful artifacts such as:

- root-governance map
- root sync reports
- docs catalogs
- pages catalog
- generated-artifact manifest outputs
- script registry

But there is no single generated "repo governance map" that answers, in one place:

- what surfaces exist
- what each surface governs
- canonical source
- validator
- repair path
- gate layer
- rollout state
- ownerless readiness
- write-admission rules
- escalation behavior

Impact:

- contributors and agents still need to infer system behavior by reading many documents
- self-documentation exists, but not yet as a coherent control-plane view

---

## Assessment of Current Ownerless Readiness

### Strongest areas

- root governance is much stronger than before and now has a real canonical manifest
- agent governance policy is well-structured and clear about approved adapter surfaces
- generated-artifact governance is conceptually strong
- pre-commit and pre-push gates enforce real repo safety
- repair-governance has a better shape than many repos have at all

### Weakest areas

- script governance migration and taxonomy alignment
- stale or legacy headers in governance-critical code
- fragmented ownerless registries
- disconnected or advisory-only monitoring paths
- design material not yet promoted into canonical operational manifests
- agent file-placement rules not yet unified as repo-wide admission control

Current maturity judgement:

- policy maturity: high
- runtime governance maturity: medium
- self-documentation maturity: medium
- self-repair maturity: medium-low
- ownerless readiness: medium-low

---

## Recommended Operating Model

### A. One governance control plane, many generated views

The repo should keep specialized manifests, but they must all register into one canonical governance index.

Recommended canonical layer:

- `operations/governance/config/repo-governance-surfaces.json`

This should either replace or supersede the current `tools/config/runtime/ownerless-governance-surfaces.json`.

Each governed surface should declare:

- `id`
- `name`
- `surface_type`
- `paths`
- `canonical_sources`
- `derived_outputs`
- `validators`
- `repair_commands`
- `gate_layer`
- `rollout_state`
- `ownerless_ready`
- `write_policy`
- `agent_write_policy`
- `network_dependent`
- `public_contract`
- `doc_refs`
- `escalation_mode`
- `success_signals`

Specialized manifests should remain, but they should move under the same top-level governance concern and be referenced from this registry.

Recommended target examples:

- `operations/governance/config/root-governance.json`
- `operations/governance/config/generated-artifacts.json`
- `operations/governance/config/agent-write-governance.json`

This gives the repo one answer to: "what is governed here?"

### B. Make self-documentation generated, not handwritten

Keep normative policy docs manual. Generate state maps.

Manual:

- policy principles
- rollout decisions
- exception policy
- human override rules

Generated:

- root inventory
- governed surfaces map
- enforcement map
- generated-artifact matrix
- agent surface map
- script governance coverage map
- ownerless readiness dashboard

Recommended generated docs:

- `docs-guide/repo-ops/config/repo-governance-map.mdx`
- `workspace/reports/repo-ops/REPO_GOVERNANCE_STATUS_LATEST.json`
- `workspace/reports/repo-ops/REPO_GOVERNANCE_STATUS_LATEST.md`

These should be built from the canonical governance registry under `operations/governance/config/`, not maintained manually.

### C. Move from passive drift detection to admission control

The repo should not mainly discover clutter after it lands. It should increasingly reject or reroute it at creation time.

Recommended admission controls:

1. New-file admission policy
   - any new tracked file must belong to a governed surface or an approved workspace scratch path
2. Path-class enforcement
   - every path belongs to a class: runtime, policy, generated, scratch, archive, local-only
3. Commit-time placement check
   - new files outside an admitted class fail pre-commit or PR validation
4. Generated/scratch distinction
   - scratch outputs cannot silently become canonical files
5. TTL cleanup for local and workspace scratch artifacts
   - especially under agent-heavy flows

### D. Treat agents as governed writers, not special-case exceptions

This repo is AI-first. That means agent governance is not an accessory. It is part of the repo operating model.

Required agent governance model:

1. Every agent write path must be classified.
2. Every agent-only output location must be declared.
3. Temporary artifacts must have a home and TTL.
4. New root entries must be impossible without explicit governance admission.
5. Branch/task contracts should include write-scope classes, not just file paths.
6. Agent-generated reports must default to `workspace/reports/**`.
7. Agent-generated scratch, captures, exports, and diagnostics must default to `_local` or another declared scratch namespace, never repo root.

Recommended path classes for agent output:

- canonical tracked docs: `v2/**`, `docs-guide/**`
- canonical tracked tooling/config: `tools/**`, `operations/**`, `.github/**`, `.githooks/**`, `ai-tools/**`
- generated tracked outputs: only manifest-declared outputs
- tracked reports: `workspace/reports/**` only when the task explicitly calls for a committed report
- untracked local outputs: `workspace/reports/_local/**`, `workspace/tmp/**`
- forbidden without admission: repo root, arbitrary hidden dotfolders, ad hoc top-level reports, miscellaneous work folders

### E. Keep current workflows stable by rolling out in three stages

Do not attempt one-shot hard gating across all repo surfaces.

Recommended rollout:

#### Stage 1: Visibility and sync

- unify the governance registry
- generate a single repo governance map
- generate an ownerless readiness report
- flag stale surfaces and stale docs
- keep most new checks advisory

#### Stage 2: Admission control and auto-repair

- block undeclared new root entries
- block undeclared new tracked surface types
- auto-route known local outputs into approved scratch locations
- wire missing scan-to-act follow-ups where low risk

#### Stage 3: Blocking ownerless contract

- require every governed surface to have validator and repair path
- require governance-critical scripts to comply with the current script taxonomy
- fail drift between policy, manifests, and generated maps

This avoids workflow disruption while still moving the repo toward real ownerless enforcement.

---

## Specific Recommendations

## 1. Create one canonical repo governance registry

Recommendation:

Create `operations/governance/config/repo-governance-surfaces.json` and use it as the master control plane for all governed surfaces.

It should subsume or reconcile:

- current `tools/config/runtime/ownerless-governance-surfaces.json`
- current `tools/config/runtime/root-governance.json`
- current `tools/config/runtime/generated-artifacts.json`
- major governance-specific manifest references from script and agent governance

Reason:

The repo currently has too many partially overlapping governance registries, and their current placement under `tools/` undersells governance as a first-class operational concern.

## 2. Generate a full repo governance map

Recommendation:

Generate `docs-guide/repo-ops/config/repo-governance-map.mdx`.

It should include:

- all governed surfaces
- path ownership by surface class
- validators and repair commands
- gate-layer map
- generated outputs by source
- scratch/local-only path map
- agent write-path map
- ownerless readiness status

Reason:

The repo can only be self-documenting if its operational state is generated from the same machine-readable governance layer that enforces it.

## 3. Turn agent file placement into an explicit governance contract

Recommendation:

Add an agent write-governance manifest or extend the canonical governance registry with:

- allowed agent path classes
- forbidden agent path classes
- scratch destinations by artifact type
- TTL/cleanup policy
- commitability policy
- validator references

Minimum governed artifact classes:

- report
- scratch
- capture
- export
- generated canonical
- task state
- runtime adapter

Reason:

The repo already knows agents create clutter. That must be governed at the same level as root admission and generated artifact policy, not left to convention.

Recommended target location:

- `operations/governance/config/agent-write-governance.json`

## 4. Normalize script governance before expanding ownerless blocking

Recommendation:

Do not call the repo self-governing while governance-critical scripts and hooks still use legacy metadata or stale taxonomy.

Required cleanup:

- align `operations/scripts/README.md` to the current canonical taxonomy
- migrate governance-critical scripts/tests/hooks off deprecated header tags
- make the script catalog reflect one active taxonomy, not old and new in parallel
- ensure the governance layer itself passes the same script governance rules it enforces

Reason:

The repo cannot be self-documenting if the documentation and the code disagree about what a governed script is.

## 5. Promote `.github/workspace` findings into canonical governance or archive them

Recommendation:

Treat `.github/workspace` as design input, not a permanent parallel governance universe.

For each high-value finding in:

- `.github/workspace/phase2/locked-pipelines.md`
- `.github/workspace/design/governance/process-docs/audit.md`
- `.github/workspace/phase2/pipeline-design/governance.md`

do one of:

1. promote into a canonical manifest or policy
2. convert into an implementation issue or task
3. mark as historical design material

Reason:

The current state mixes active diagnosis with canonical policy. That increases drift risk.

## 6. Close the loop on monitoring

Recommendation:

An ownerless repo should ban "headless" scans for governance-critical surfaces.

Every scheduled monitor must do one of:

- auto-fix
- open/update issue
- create repair PR
- fail a dashboarded status surface

No report-only scanners for critical surfaces.

Priority candidates already identified in repo design work:

- freshness monitoring
- external link audit
- copy/brand compliance
- script sprawl and disconnected script inventories

Reason:

Monitoring without response is not ownerless governance. It is operational theatre.

## 7. Make enforcement maps generated from live configuration

Recommendation:

`docs-guide/repo-ops/maps/enforcement-map.mdx` should eventually be generated from live hook/workflow/config data, or at least validated against it.

Reason:

This page is valuable, but it is vulnerable to drift because it is currently descriptive rather than derived.

## 8. Add a repo-wide path-class validator

Recommendation:

Introduce a validator that classifies every tracked file path into one of a small set of governance classes and fails on uncategorized paths.

Suggested classes:

- `platform-root`
- `runtime-config`
- `governance-policy`
- `canonical-docs`
- `generated-tracked`
- `workspace-report`
- `workspace-local`
- `archive`
- `deprecated`

Reason:

This is the missing middle layer between "root allowlist" and "everything else".

Recommended ownership:

- canonical rules and path classes under `operations/governance/config/**`
- implementation helpers under `tools/lib/**`
- validators under `operations/governance/validators/**` or, if repo structure remains mixed for a time, via compatibility wrappers from existing validator locations

## 9. Establish ownerless escalation without named owners

Recommendation:

For each governed surface, define escalation mode without requiring a named maintainer:

- auto-fix PR
- rolling governance issue
- label-driven reviewer pool
- human-review queue

The repo should avoid fields like "owner: Alice" for operational dependence. Use domain or queue ownership, not personal ownership.

Reason:

An ownerless repo still needs explicit escalation paths. It just cannot depend on an individual.

## 10. Treat `ai-tools/` as a governed root subsystem, not a loophole

Recommendation:

Keep `ai-tools/` at root as requested, but govern it as a first-class root subsystem with:

- declared internal taxonomy
- allowed sub-surface classes
- generated index of active canonical vs generated vs retired content
- explicit ban on ad hoc dumps into `ai-tools/`

Reason:

If `ai-tools/` is AI-first infrastructure, it must not become a catch-all.

---

## Recommended Governance Model for Agent-Caused Bloat

This needs its own section because it is a primary source of repo drift.

### The problem

Agents tend to create:

- ad hoc root files
- temporary exports and capture folders
- reports in inconsistent places
- duplicate governance notes
- tool outputs that look canonical but are actually scratch
- "one-off helper" scripts outside governed script taxonomy

### The governing rule

No agent may create a tracked file unless the destination path class is already admitted in the governance registry.

### Required controls

1. Write-scope classification
   - branch/task contracts should classify writes as `canonical`, `generated`, `report`, `scratch`, or `forbidden`
2. Scratch-by-default for diagnostics
   - browser captures, ad hoc exports, debug logs, and snapshots go to `workspace/reports/_local/**` or `workspace/tmp/**`
3. Report-by-request only
   - tracked Markdown reports should only be created when the task explicitly asks for a repo report
4. One-off helper control
   - throwaway scripts should default to scratch or be banned unless promoted through the governed script scaffold
5. Root zero-tolerance
   - no agent-created root entries without registry update and explicit human-governed governance change
6. Auto-cleanup
   - scheduled retention for `_local` scratch surfaces
7. Surface declaration
   - any new agent-facing adapter or rule surface must update agent governance policy, root governance, and the canonical governance registry together

### Success condition

An agent should be able to infer where every output belongs before it writes anything.

---

## Low-Disruption Rollout Plan

### Phase 1: Unify and document

- create the single repo governance registry
- generate repo governance map and status reports
- validate current registries against the master registry
- classify all current root, generated, script, and agent surfaces
- mark surfaces as `advisory`, `autofix`, `blocking`, or `migrating`

Disruption risk: low

### Phase 2: Fix governance self-contradictions

- update governance-critical script headers and taxonomy drift
- align `operations/scripts/README.md`
- fix stale ownerless manifest paths
- reconcile `.github/workspace` design findings into canonical manifests/issues
- validate enforcement-map claims against live files

Disruption risk: low to medium

### Phase 3: Add admission control

- add repo-wide path-class validator
- add agent write-admission rules
- block uncategorized new tracked files
- block undeclared generated outputs
- keep scratch outputs allowed only in approved local/workspace destinations

Disruption risk: medium

### Phase 4: Close monitoring loops

- replace advisory-only governance-critical scans with auto-fix, issue, or PR behavior
- wire disconnected validators and repairers where already safe
- add ownerless readiness dashboards

Disruption risk: medium

### Phase 5: Make the ownerless contract blocking

- require full governance metadata for all critical surfaces
- fail drift between manifests, generated maps, and policy references
- fail governance code that does not comply with the current governance standard

Disruption risk: medium to high

This phase should happen only after the repo has clean baseline compliance.

---

## Definition of Done for an Ownerless Self-Documenting Repo Layer

The repo layer should only be considered ownerless and self-documenting when all of the following are true:

1. Every governed surface appears in one canonical governance registry.
2. Every governed surface has canonical source, validator, repair path, gate layer, and escalation mode.
3. Root placement, generated outputs, agent outputs, and script placement are all governed by the same control plane.
4. A generated governance map exists and is current.
5. No governance-critical script or hook is still using deprecated metadata conventions.
6. Governance-critical scanners are closed-loop.
7. New uncategorized tracked files are blocked.
8. Agent outputs have declared destinations and cleanup policy.
9. `.github/workspace` planning material is either promoted, tracked, or archived, not left as a second governance universe.
10. No core repo behavior depends on a named maintainer remembering what to do next.

---

## Recommended Immediate Priorities

If this were sequenced pragmatically, the first priorities should be:

1. Create the single canonical repo governance registry and generate a repo governance map.
2. Reconcile ownerless, root, generated-artifact, agent, and script governance manifests into that registry.
3. Normalize governance-critical script metadata and script taxonomy drift.
4. Add agent write-path governance and scratch-path rules as first-class repo policy.
5. Convert high-value `.github/workspace` governance findings into canonical runtime governance or tracked implementation work.
6. Add a repo-wide path-class validator before expanding more blocking rules.

---

## Bottom Line

This repo is close to having the right architecture for an ownerless, self-documenting, AI-first documentation system. The main missing piece is not another policy page. It is consolidation.

Right now the repo has:

- good policy
- meaningful hooks
- meaningful manifests
- meaningful generated governance outputs
- strong design work

But it still lacks one unified governance control plane that classifies all surfaces, governs where agents can write, and generates the live repo governance map from runtime truth. That control plane should be treated as `operations/governance/**`, not as a subordinate `tools/config/runtime/**` concern.

That is the next necessary step if the repo is meant to be production-ready, ownerless, AI-first, and resistant to root and path bloat over time.
