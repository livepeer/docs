# Gap Analysis — OSS Contributor Governance
**Date:** 2026-03-27
**Status:** Phase 1 output — NOT source of truth
**Next use:** Input to Phase 2 design

---

## Summary

The ownerless governance foundation (Phases 0–1) is implemented and passing: canonical policy doc, machine-readable manifest, `lpd repair` wrapper, and 4 autofix surfaces are all operational. The label system is partially built — 24 labels live in the repo via inline `labelMeta` in `issue-auto-label.yml`, against a target of 55 — with 31 missing labels, no central `labels.yml`, and no lifecycle or agent-routing labels wired. Three governance surfaces remain migrating (`script-governance`, `component-governance`, `ai-tools-registry`) and one is advisory-only (`frontmatter-contract`), blocked on upstream schema migrations. Contributor ladder, stale automation, and AI agent auto-classification are planned but not implemented.

---

## 1. Label System

### Live (24 labels — managed inline in `.github/workflows/issue-auto-label.yml`)

| Group | Labels (live) | Count |
|---|---|---|
| `type:` | `type: bug`, `type: enhancement`, `type: documentation`, `type: question` | 4 |
| `status:` | `status: needs-routing`, `status: needs-info` | 2 |
| `priority:` | `priority: critical`, `priority: high`, `priority: medium`, `priority: low` | 4 |
| `classification:` | `classification: urgent`, `classification: high`, `classification: moderate`, `classification: minor` | 4 |
| `area:` | `area: home-about`, `area: community`, `area: developers`, `area: gateways`, `area: orchestrators`, `area: lpt-governance`, `area: resources`, `area: ci-cd`, `area: structure`, `area: multiple` | 10 (in workflow) |
| `kind:` | `kind: factual-error`, `kind: unclear-instructions`, `kind: missing-context`, `kind: broken-media-link`, `kind: accessibility-ux`, `kind: navigation-structure` | 6 (in workflow) |
| `scope:` | `scope: page` | 1 |
| Community standard | `docs-v2`, `help wanted` | 2 |

**Note:** The workflow `labelMeta` object defines 33 labels it will auto-create on demand. The verified live count in the GitHub repo is 24, meaning some auto-create labels have not yet been exercised against a live issue and may not exist in the repo label registry.

**No central `labels.yml`.** All label definitions are inline in `issue-auto-label.yml`. No standalone config file exists to drive bulk creation, audit, or external tooling.

### Target (55 labels — from planning docs)

| Group | Target count |
|---|---|
| `type:` | 4 |
| `status:` | 5 (`needs-triage`, `needs-info`, `backlog`, `in-progress`, `blocked`) |
| `priority:` | 4 |
| `classification:` | 4 |
| `area:` | 10 |
| `kind:` | 6 |
| `lifecycle:` | 2 (`stale`, `frozen`) — NEW |
| `size:` | 4 (`XS`, `S`, `M`, `L`) — NEW |
| `scope:` | 1 |
| Agent routing | 3 (`agent-ready`, `human-required`, `agent-assisted`) — NEW |
| Community standard | 3 (`good first issue`, `help wanted`, `wontfix`) |
| Automation/integration | 10 (`ai-opened:codex`, `dependencies`, `javascript`, `python`, `Docs`, `DevEx`, `linear`, `team: studio`, `Epic`, `Playback`) |
| Release/versioning | 6 (`custom`, `graduate`, `major`, `minor`, `patch`, `prerelease`) |
| Scope/project | 2 (`docs-v2`, `docs-review`) |

**Total target: 55 governed + documented labels. 17 labels to remove from current set.**

### Gap: 31 missing labels

| Label | Group | Priority | What it unblocks |
|---|---|---|---|
| `status: backlog` | `status:` | P1 | Triage workflow — triaged issues have nowhere to land without it |
| `status: in-progress` | `status:` | P1 | Replaces verbose `status: core contributors working on it` (1 item to migrate) |
| `status: blocked` | `status:` | P1 | Blocks-on-external-dep tracking; no current equivalent |
| `status: needs-triage` | `status:` | P1 | Planning docs reference this; current live label is `status: needs-routing` — name mismatch |
| `lifecycle: stale` | `lifecycle:` | P1 | Stale automation cannot run without this label |
| `lifecycle: frozen` | `lifecycle:` | P1 | Stale exemption path blocked without this label |
| `size: XS` | `size:` | P2 | Sprint planning; agent-routing auto-classification |
| `size: S` | `size:` | P2 | Sprint planning; agent-routing auto-classification |
| `size: M` | `size:` | P2 | Sprint planning |
| `size: L` | `size:` | P2 | Sprint planning |
| `agent-ready` | Agent routing | P1 | Copilot agent issue assignment; auto-classification workflow |
| `human-required` | Agent routing | P1 | Explicit routing away from AI agents for strategic issues |
| `agent-assisted` | Agent routing | P2 | AI-draft + human-finish workflow |
| `good first issue` | Community standard | P1 | Community contributor onboarding; GitHub discovery |
| `wontfix` | Community standard | P2 | Closed issue signalling; lifecycle closure |
| `docs-review` | Scope/project | P2 | Referenced in planning; unblocks PR review routing |
| `ai-opened:codex` | Automation | P2 | AI contribution traceability (already referenced in AGENTS.md) |
| `size: XS` + `kind:` auto-routing | Automation | P2 | agent-ready auto-classification rule in `issue-auto-label.yml` |
| All 6 `ai-opened:` variants (copilot, cursor, claude, etc.) | Automation | P3 | Full AI contribution prefix group; required for agent governance policy |
| `area: solutions` | `area:` | P3 | Solutions tab content area; not currently in taxonomy |

**Summary:** 4 `status:` labels (including the `needs-triage` vs `needs-routing` discrepancy), 2 `lifecycle:` labels, 4 `size:` labels, 3 agent-routing labels, and community-standard labels account for the highest-priority gap. Automation prefix labels (`ai-opened:*`) are P2–P3 and can follow after core status/lifecycle gaps close.

---

## 2. Governance Surfaces

### Current: 4 autofix / 3 migrating / 1 advisory

| Surface | Status | Ownerless Ready | Canonical source | Gate layer |
|---|---|---|---|---|
| `github-contributor-governance` | Autofix | YES | `ownerless-governance.mdx` + `ownerless-governance.test.js` | `pr-changed` |
| `portable-skills` | Autofix | YES | `ai-tools/ai-skills/templates/*.template.md` | `pr-changed` |
| `docs-guide-generated` | Autofix | YES | `docs-guide/*.mdx` + generator scripts | `pr-changed` |
| `ui-templates` | Autofix | YES | `snippets/templates/**` | `pr-changed` |
| `script-governance` | Migrating | NO | `tools/lib/script-governance-config.js` | `pre-commit` |
| `component-governance` | Migrating | NO | Component JSDoc in `snippets/components/**` | `pr-changed` |
| `ai-tools-registry` | Migrating | NO | Partial repair path only | Not specified |
| `frontmatter-contract` | Advisory | NO | `tools/lib/frontmatter-taxonomy.js` | `pr-changed` (advisory) |

### Target: all 8 ownerless-ready

Each migrating and advisory surface needs the following to graduate:

| Surface | What it needs to graduate |
|---|---|
| `script-governance` | Complete `@owner` → `@domain` migration in all governed script headers; `lpd repair --surface script-governance --write` must produce a clean baseline run; generated script reports must not reference deleted or legacy owner artifacts |
| `component-governance` | Complete `@owner` → `@domain` migration in all `snippets/components/**` JSDoc; component registry schema must expose `domain`; published component library pages must regenerate from domain-based metadata |
| `ai-tools-registry` | Define canonical source; wire full validator and repair path (currently partial); add manifest entry to `ownerless-governance-surfaces.json` |
| `frontmatter-contract` | Reduce advisory noise to low; update `tests/unit/quality.test.js` to consume taxonomy helpers; scope blocking enforcement to deterministic metadata checks only; prove changed-file PR scope stays bounded before promoting |

### Gap

| Surface | Blocker |
|---|---|
| `script-governance` | Depends on SCRIPT-GOVERNANCE Task 15+ completing the `@owner` → `@domain` migration; broad inventory repair touches many files simultaneously; stale/incomplete framework headers cause cascading classification failures |
| `component-governance` | Depends on COMPONENT-GOVERNANCE completing `@owner` → `@domain` for all components; large `@usedIn` recalculations create wide diffs; duplicate legacy component paths need staying excluded by governance utilities |
| `ai-tools-registry` | No canonical source defined; no validator; repair path is partial only; not fully captured in the `Ownerless Repo Plan.md` surface inventory |
| `frontmatter-contract` | Advisory surface: relative-link advisories remain noisy; path to blocking is not yet defined; no promotion timeline set |

---

## 3. Contributor-Facing Docs

### Exists

| Document | Location |
|---|---|
| `CONTRIBUTING.md` (full contributor guide) | `contribute/CONTRIBUTING/README.md` |
| `GIT-HOOKS.md` (pre-commit hook system) | `contribute/CONTRIBUTING/GIT-HOOKS.md` |
| `AGENTS.md` (AI assistant rules) | `.github/AGENTS.md` |
| Issue templates (8 templates with Codex scope/acceptance/risk fields) | `.github/ISSUE_TEMPLATE/*.yml` |
| PR template | `.github/PULL_REQUEST_TEMPLATE/` |
| `ownerless-governance.mdx` (canonical ownerless policy) | `docs-guide/policies/ownerless-governance.mdx` |
| `agent-governance-framework.mdx` (AI governance) | Referenced in planning docs; location not confirmed from audit |
| `governance.mdx` (ownership model, SLAs, triage) | `v2/internal/overview/governance.mdx` |
| `contribute-to-the-docs.mdx` (public-facing contributor guide) | `v2/resources/documentation-guide/contribute-to-the-docs.mdx` |
| `community-guidelines.mdx` | `v2/community/livepeer-community/community-guidelines.mdx` |
| `.cursorrules` | `.cursorrules` |

### Missing

| Document | Why it is needed |
|---|---|
| Contributor ladder doc (or section in `governance.mdx`) | No public path from first-time contributor to maintainer with measurable criteria; community cannot self-assess readiness |
| `GOVERNANCE.md` public-facing | Standard OSS artefact per Apache/GitHub Open Source Guides model; roles, decision-making, project lifecycle in one place |
| Stale policy doc | No documented rule for when issues are closed; contributors have no expectation set |
| Agent-ready classification guide | No guide explaining which issues are routable to AI agents, how `agent-ready` label is applied, or what Copilot agent assignment means for contributors |
| `labels.yml` central config | No single file for label definitions; all definitions inline in workflow; no standalone audit or bulk-create capability |
| Custom Copilot instruction files | `.github/instructions/` directory and instruction files do not exist; Copilot has no repo-specific review context |

---

## 4. Automation

### Live

| Workflow | File | What it does |
|---|---|---|
| Issue auto-label | `.github/workflows/issue-auto-label.yml` | Parses issue form bodies, applies/removes managed label families, auto-creates labels on demand, posts needs-info comment |
| Auto-assign docs reviewers | `.github/workflows/auto-assign-docs-reviewers.yml` | Assigns reviewers to PRs based on changed paths |
| Governance sync | `.github/workflows/governance-sync.yml` | Syncs governance surfaces; details not confirmed from plan files alone |
| Repair governance | `.github/workflows/repair-governance.yml` | Runs `repair-governance.js` as the full-surface repair backbone for script governance |
| Discord issue intake | `.github/workflows/discord-issue-intake.yml` | Creates GitHub issues from Discord intake payloads via `repository_dispatch` |
| Docs-v2 issue indexer | `.github/workflows/docs-v2-issue-indexer.yml` | Maintains rolling issue index; runs on issue events and every 6 hours |

### Planned but not wired

| Automation | Blocker / Status |
|---|---|
| Stale workflow (`actions/stale` or custom) | No implementation; `lifecycle: stale` and `lifecycle: frozen` labels do not yet exist; timing decision (D5) outstanding |
| Agent-ready auto-classification in `issue-auto-label.yml` | No `agent-ready` label; auto-classification rule (size XS/S + kind: broken-media-link / factual-error / unclear-instructions → `agent-ready`) not written |
| Copilot reviewer workflow promotion | Workflow is partially wired (Copilot reviewer referenced in planning); decisions D1, D2, D3 not made; `.github/instructions/` directory and instruction files do not exist |
| Lifecycle label enforcement | Labels `lifecycle: stale`, `lifecycle: frozen` not created; stale bot not deployed |
| AI contribution prefix label group (`ai-opened: copilot`, `ai-opened: cursor`, `ai-opened: claude`) | Labels not created; auto-apply logic not written in `issue-auto-label.yml` |
| Quarterly label audit script | Referenced in proposal; not built |
| Issue indexer milestone/size distribution extension | Planned in Repo Management Proposal; not implemented |

---

## 5. Key Contradictions in Planning Docs

| # | Contradiction | Where |
|---|---|---|
| C1 | **`status: needs-triage` vs `status: needs-routing`** — The OSS Governance Plan and Label Proposal target `status: needs-triage` as the base label. The `Ownerless Repo Plan.md` Phase 2 explicitly mandates migrating to `status: needs-routing` as the ownerless-preferred wording. The live workflow uses `status: needs-routing`. The two planning streams have diverged on the canonical label name. | Label Proposal (Repo Labels `index.md`) vs Ownerless Repo Plan Phase 2 vs live `issue-auto-label.yml` |
| C2 | **44 labels vs 24 labels** — The Repo Management Proposal states "44 labels exist but 27 required labels are missing." The live audit gives 24 labels live. The Label Proposal summary table lists a current count that was left blank (`| Total labels | | 55 |`). The baseline count is unconfirmed in the planning docs. | Repo Management Proposal `index.md` (line 15) vs live state context |
| C3 | **27 missing labels vs 31 missing labels** — The OSS Governance Plan and Repo Management Proposal both state "27 template-required labels are missing." The target (55) minus live (24) yields 31 missing. The discrepancy is unexplained — likely the 27 figure counts only template-referenced labels and excludes lifecycle, size, and agent-routing labels. | OSS Governance Plan (Section 3.5) vs Label Proposal summary table |
| C4 | **CODEOWNERS status** — The OSS Governance Plan (Section 1.2) lists CODEOWNERS as "Complete" and references `.github/CODEOWNERS` as an active artefact. The live state shows CODEOWNERS is archived (ownerless design removes named owner assignments). The planning doc was not updated after the ownerless migration. | OSS Governance Plan `index.md` line 48 vs live state context |
| C5 | **Phase timing mismatch between the two proposals** — The Repo Management Proposal defines a 4-phase sequence: Phase 1 (immediate) = fix 27 missing labels, Phase 2 (Week 1) = consolidate duplicates, Phase 3 (Week 2) = lifecycle/size labels + stale bot, Phase 4 (Week 3) = workflow sync + AI governance. The OSS Governance Plan defines: Phase 1 (Week 1) = foundation, Phase 2 (Week 2) = Copilot integration (decisions required), Phase 3 (Week 3) = policy + docs, Phase 4 (Week 4) = handover. Phase 1 of one plan ≠ Phase 1 of the other. No cross-reference or reconciliation exists between them. | Repo Management Proposal `01_Management-Proposal/index.md` vs OSS Governance Plan `01_OSS-Governance-Plan/index.md` |
| C6 | **`ai-tools-registry` surface** — The Ownerless Repo Plan surface inventory lists 7 surfaces; it does not include `ai-tools-registry`. The live state context lists 8 governance surfaces including `ai-tools-registry` as "migrating." The surface inventory table is out of sync with the live manifest. | `Ownerless Repo Plan.md` surface inventory table vs live state context |

---

## 6. Decisions Outstanding (D1–D7)

| ID | Question | What it unblocks | Status |
|---|---|---|---|
| D1 | Enable Copilot coding agent and code review on `livepeer/docs`? Scope: docs repo only / org-wide / defer. Owner: Rich (Executive Director) / Rick (Technical Director) | All Phase 2 Copilot integration work; custom instruction files; agent-ready auto-assignment workflow | OPEN |
| D2 | Copilot code review: blocking status check (required to merge) or advisory only? Options: blocking / advisory / start advisory then move to blocking. Owner: Rick | Whether Copilot review gates merges; whether false positives create workflow friction | OPEN |
| D3 | Agent issue assignment policy: who can assign issues to `@copilot`? Options: maintainers only / any contributor with triage access / open to all. Owner: Rich / Rick | Agent-ready label auto-assignment scope; contributor guide wording for AI assignment; governance section in `CONTRIBUTING.md` | OPEN |
| D4 | Contributor ladder: approve the proposed 4-role structure (Contributor → Reviewer → Maintainer → Lead) with defined criteria and publish in `governance.mdx`? Options: approve as-is / modify criteria / defer. Owner: Rich | `governance.mdx` contributor ladder section; `CONTRIBUTING.md` advancement criteria; community transparency on maintainer path | OPEN |
| D5 | Stale issue timing: 90/30 days (stale then auto-close) or shorter window? Options: 90/30 / 60/14 / 30/14 / custom. Owner: Rick | `lifecycle: stale` and `lifecycle: frozen` label creation; stale workflow deployment; issue lifecycle policy doc | OPEN |
| D6 | Custom Copilot instruction scope: create instruction files for code review only, coding agent only, or both? Owner: Rick | `.github/instructions/` directory creation; which `excludeAgent` properties to set; whether one shared instruction set suffices | OPEN |
| D7 | Timeline and resourcing: 4-week plan (Alison executes Phases 1, 3, 4; Rick/Foundation admin enables Copilot for Phase 2)? Options: 4 weeks / compress to 2 weeks / extend to 6 weeks. Owner: Rich / Rick | Phase sequencing; who owns Copilot enablement step (requires GitHub org admin access) | OPEN |

---

## Severity Summary

| Gap | Severity | Phase to close |
|---|---|---|
| `status: needs-triage` vs `status: needs-routing` naming contradiction | Critical | Phase 1 — requires decision before label creation |
| 31 missing labels (core: `status:`, `lifecycle:`, `agent-ready`) | Critical | Phase 1 (labels) + Phase 2 (agent labels, requires D1) |
| No `lifecycle: stale` / `lifecycle: frozen` labels or stale workflow | High | Phase 1 (labels); Phase 3 (stale workflow, pending D5) |
| No contributor ladder published | High | Phase 3 (pending D4) |
| No central `labels.yml` config file | High | Phase 1 |
| `script-governance` surface stuck migrating | High | Phase 3 (blocked on SCRIPT-GOVERNANCE schema migration) |
| `component-governance` surface stuck migrating | High | Phase 4 (blocked on COMPONENT-GOVERNANCE schema migration) |
| No Copilot instruction files (`.github/instructions/`) | High | Phase 2 (blocked on D1, D6) |
| No agent-ready auto-classification in `issue-auto-label.yml` | High | Phase 2 (blocked on D1, D3) |
| `ai-tools-registry` surface: no canonical source or validator | High | Phase 3 |
| `frontmatter-contract` surface advisory — no promotion path defined | Medium | Phase 5 |
| No `GOVERNANCE.md` public-facing doc | Medium | Phase 3 |
| No stale policy doc | Medium | Phase 3 (pending D5) |
| Planning docs not updated after ownerless migration (CODEOWNERS ref, label counts) | Medium | Phase 1 (doc hygiene) |
| Phase-numbering mismatch between OSS Governance Plan and Repo Management Proposal | Medium | Phase 1 (reconciliation needed before Phase 2 design) |
| No quarterly label audit script | Low | Phase 4 |
| Issue indexer not extended for milestone/size distribution | Low | Phase 4 |
| `ai-opened:` prefix group not created | Low | Phase 3 |
