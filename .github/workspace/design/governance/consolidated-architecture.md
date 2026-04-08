# Consolidated Governance Architecture

> Complete blueprint for ownerless, self-governing documentation repo.
> Covers: workflows, scripts, hooks, policies, config, reports, design docs.
> NOTHING gets implemented until approved.
> Date: 2026-04-07 (updated with gap audit findings)

---

## 1. Governed Surfaces (complete inventory)

Everything in this repo that governance must account for.

### 1.1 Workflows (.github/workflows/)

52 current files. Target: 47 active + 4 deleted + 1 disabled.

**DELETE:** build-review-assets.yml, generate-review-table.yml, update-review-template.yml, update-blog-data.yml
**DISABLE:** project-showcase-sync.yml

**RENAME all 47 active to D-ACT-04 convention:** `type-concern-verb-name.yml`

See Appendix A for the complete rename table.

### 1.2 Scripts by location

| Location | Count | Governed? | JSDoc? | In registry? |
|---|---|---|---|---|
| operations/scripts/ (6 type folders) | ~196 | YES (script framework) | 93% have some, 70% have @type/@concern | YES (script-registry.json, 358 entries) |
| .github/scripts/ | 10 | PARTIAL (JSDoc exists, wrong location) | YES | YES |
| tools/lib/governance/ | 8 | NOT EXPLICITLY | PARTIAL | NOT IN REGISTRY |
| tools/dev/ | ~14 | NOT GOVERNED | UNKNOWN | NOT IN REGISTRY |
| tools/config/ | config files, not scripts | N/A | N/A | N/A |
| workspace/scripts/ | 1 (.py) | NOT GOVERNED | NO | NOT IN REGISTRY |
| .githooks/ | 7 | PARTIAL (in registry) | PARTIAL | PARTIAL |
| operations/scripts/dispatch/governance/ | 23 hooks + 2 pipeline scripts | YES (governance infra) | YES | PARTIAL |

**GAP: ~45 scripts in tools/lib/, tools/dev/, workspace/scripts/ are ungoverned.** These need classification and either:
- Governance (add to registry with JSDoc)
- Exemption (document why they're exempt)
- Migration (move to operations/scripts/)

### 1.3 Git hooks (.githooks/)

| File | Purpose | In architecture? |
|---|---|---|
| pre-commit | 5 hard gates (< 5 seconds) | YES |
| pre-push | Codex isolation + task contract | YES |
| pre-commit-no-deletions | Alternative pre-commit (deletion guard variant) | NOT IN ARCHITECTURE |
| post-commit.disabled | Disabled post-commit hook | NOT IN ARCHITECTURE |
| install.sh | Hook installer | YES |
| verify.sh | Hook verification | NOT IN ARCHITECTURE |
| verify-browser.js | Browser verification tool | NOT IN ARCHITECTURE |
| server-manager.js | Mintlify dev server lifecycle | NOT IN ARCHITECTURE |
| script-index.md | Hook documentation | N/A |
| README.md | Hook documentation | N/A |

### 1.4 Claude hooks (operations/scripts/dispatch/governance/)

23 files implementing enforcement at write time (Layer 1).

| Hook | Event | Purpose |
|---|---|---|
| pre-tool-guard.js | PreToolUse | Block destructive git, public posts, auto-generated edits, em-dashes |
| mdx-constraints-injector.js | UserPromptSubmit | Inject Mintlify constraints |
| mdx-validate-hook.js | PostToolUse (Edit/Write .mdx) | Validate MDX renders |
| mdx-render-verify.js | PostToolUse (Edit/Write .mdx) | Render verification with gate state |
| mdx-render-gate.js | PreToolUse (Write/Edit) | Block edits while render failing |
| edit-loop-guard.js | PostToolUse (Edit/Write) | Circuit breaker at 3/5 edits |
| phase-gate-hook.js | PostToolUse (Edit/Write) | Nag unverified checkpoints |
| move-detect-hook.js | PostToolUse (Bash) | Detect file moves, prompt /propagate |
| blast-radius-scanner.js | PostToolUse (Edit/Write) | List consumers of edited shared files |
| grep-loop-guard.js | PostToolUse (Grep) | Circuit breaker at 3 empty results |
| post-tool-verify.js | PostToolUseFailure | Circuit breaker at 3 consecutive failures |
| completion-gate.js | PreToolUse (Write) | Block completion artifacts while render failing |
| server-lifecycle.js | SessionStart | Ensure Mintlify dev server running |
| pre-compact-checkpoint.js | PreCompact | Preserve state before compaction |
| message-backup.js | UserPromptSubmit | Backup messages > 200 chars |
| session-register.js | SessionStart + PostToolUse | Track sessions, detect collisions |
| session-state.js | SessionStart | Inject session state |
| read-logger.js | PostToolUse (Read) | Track file reads |
| friction-logger.js | UserPromptSubmit | Log frustration signals |
| scope-checkpoint.js | PostToolUse | Periodic scope reconnection |

**GAP: 3 hooks not in the above list** (need to verify complete inventory against .claude/settings.json hooks registration)

### 1.5 Policy documents (docs-guide/policies/)

17 files found. All must be referenced in governance-index.mdx or explicitly marked as covered by another surface.

| Policy | Referenced in architecture? | Status |
|---|---|---|
| governance-index.mdx | YES (the index itself) | Current |
| ownerless-governance.mdx | YES | Current |
| root-allowlist-governance.mdx | YES | Reconciled |
| agent-governance-framework.mdx | YES | Reconciled |
| generated-artifact-and-hook-governance.mdx | YES | Current |
| script-governance.mdx | YES | Stale (4 concerns) |
| infrastructure-principles.mdx | Via source-of-truth-guide.mdx | Current |
| quality-gates.mdx | Via source-of-truth-guide.mdx | Current |
| source-of-truth-policy.mdx | Via source-of-truth-guide.mdx + governance-index.mdx | Current |
| component-layout-decisions.mdx | Via source-of-truth-guide.mdx | Current |
| docs-guide-structure-policy.mdx | Via source-of-truth-guide.mdx + governance-index.mdx | Current |
| v2-folder-governance.mdx | Via source-of-truth-guide.mdx + governance-index.mdx | Current |
| cleanup-quarantine-policy.mdx | Via source-of-truth-guide.mdx | Current |
| snippets-assets-policy.mdx | Via source-of-truth-guide.mdx | Current |
| audit-system-overview.mdx | Via source-of-truth-guide.mdx | Current |
| skill-pipeline-map.mdx | Via source-of-truth-guide.mdx + ai-tools.mdx | Current |
| workspace-lifecycle-policy.mdx | Via source-of-truth-guide.mdx | Current |

**RESOLVED (2026-04-08):** All 11 policies verified as current with operational paths. Referenced in the human governance model via `docs-guide/canonical/source-of-truth-guide.mdx`. The enforcement layer (hooks/workflows/gates) and the human governance model (read-before-you-write policies) are complementary systems — both are covered.

### 1.6 Governance config (operations/governance/config/)

| File | Purpose | Status |
|---|---|---|
| repo-governance-surfaces.json | Unified registry (PRIMARY) | Current |
| root-governance.json | Root placement rules | Current (canonical location) |
| generated-artifacts.json | Generated artifact contracts | Current (canonical location) |
| agent-write-governance.json | Agent output placement rules | Current |
| ownerless-governance-surfaces.json | Ownerless operating model | Current (canonical location) |
| governance-approval-policy.json | PR approval requirements | Current |

**Bridge-mode legacy files (tools/config/runtime/):**

| Legacy file | Canonical location | Bridge status |
|---|---|---|
| tools/config/runtime/root-governance.json | operations/governance/config/root-governance.json | Passive mirror |
| tools/config/runtime/generated-artifacts.json | operations/governance/config/generated-artifacts.json | Passive mirror |
| tools/config/runtime/ownerless-governance-surfaces.json | operations/governance/config/ownerless-governance-surfaces.json | Passive mirror |

### 1.7 Generated artifacts at repo root

| File | In manifest? | Generator | Status |
|---|---|---|---|
| docs-index.json | YES | generate-docs-index.js | Current |
| llms.txt | YES | generate-llms-files.js | Current |
| sitemap-ai.xml | YES | generate-ai-sitemap.js | Current |
| .allowlist | YES | generate-root-governance-artifacts.js | Current |
| robots.txt | NOT IN MANIFEST | Mintlify platform | GAP: governance unclear |
| docs.json | NOT IN MANIFEST | Hand-maintained | GAP: should be in governance-index as canonical source |
| style.css | NOT IN MANIFEST | Mintlify platform | GAP: governance unclear |

### 1.8 Report folders

| Location | Contents | Status |
|---|---|---|
| workspace/reports/repo-ops/ | Active governance reports (8 LATEST files) | Current, governed |
| workspace/reports/ (root) | 60+ historical reports, audits, reviews | STALE: needs archival policy |
| workspace/reports/_local/ | Local-only scratch outputs | Current, governed (untracked) |
| workspace/reports/contracts/ | Contract pipeline reports | Current |
| .github/workspace/reports-audits/ | Phase 1 audit artifacts + dependency map | Superseded by design/ folder |

### 1.9 Design docs

| Location | Purpose | Status |
|---|---|---|
| .github/workspace/design/ | Per-concern design docs (7 folders) | Active |
| .github/workspace/design/governance/ | Governance design + this architecture | Active |
| .github/workspace/phase2/ | Pipeline design, review process, locked-pipelines | SUPERSEDED by design/ (archive candidate) |
| .github/workspace/framework-canonical.md | Pipeline framework | Active (transitional-runtime per registry) |
| .github/workspace/decisions-log.mdx | D-ACT decisions | Active (transitional-runtime per registry) |
| .github/workspace/outcomes.md | Visual maps + data feed table | Design-only (archive candidate) |

---

## 2. Enforcement Layer Architecture

### Layer 1: Write time (Claude hooks, < 1 second)

**Implementation:** 20+ hooks in operations/scripts/dispatch/governance/ registered in .claude/settings.json
**Self-repair:** Constraints auto-injected. Em-dashes blocked. Render validation.
**GAP:** No auto-fix on write (hooks warn but don't correct). Render gate false-positives on Mintlify platform React 418 errors.

### Layer 2: Commit time (git hooks, < 5 seconds)

**Implementation:** .githooks/pre-commit (5 hard gates), .githooks/pre-push (codex isolation)
**Self-repair:** BLOCK only. No auto-correct.
**GAP:** Pre-push overrides use env vars not git trailers (no audit trail). Codex validators run in both pre-commit AND pre-push (should be pre-push only).

### Layer 3: PR time (GitHub Actions, minutes)

**P2 hard gates (block merge):**
- test-suite.yml (content quality, components)
- codex-governance.yml (codex compliance)

**P3 advisory (report, don't block):**
- check-copy-standards.yml (copy lint: 4 validators)
- check-page-structure.yml (structure: 6 validators)
- broken-links.yml (link check)
- test-v2-pages.yml (browser rendering)
- check-ai-companions.yml (verify pair)
- check-docs-guide-catalogs.yml (verify pair, via docs-catalog-governance.yml)
- check-docs-index.yml (verify pair, via docs-catalog-governance.yml)
- verify-ai-sitemap.yml (verify pair)
- verify-llms-files.yml (verify pair)
- openapi-reference-validation.yml (spec check, also P5)

**Self-repair:** Most validators have --fix mode but don't expose it in workflow. Only openapi provides PR comment with fix instructions.
**GAP:** 70% of PR workflows have no PR comment with fix instructions. --fix mode not surfaced.

### Layer 4: Merge time (GitHub Actions, P4)

**Generators (auto-commit after merge):**
- generate-ai-companions.yml
- generate-ai-sitemap.yml
- generate-component-registry.yml
- generate-docs-guide-catalogs.yml
- generate-docs-index.yml
- generate-llms-files.yml

**Dispatchers (orchestrate post-merge):**
- governance-sync.yml (governance-pipeline.js)
- docs-catalog-governance.yml (catalog validation)

**Self-repair:** Generators auto-commit. governance-sync catches failures.
**GAP:** No single generator orchestrator (generators run independently, can race). No concurrency control on generators. No error handling (all fail silently).

### Layer 5: Scheduled (GitHub Actions, P5/P5-auto)

**Read-only scanners (P5):**
- content-health.yml (quality + components, weekly)
- freshness-monitor.yml (data staleness, daily)
- v2-external-link-audit.yml (external links, daily)
- page-integrity-health.yml (links + imports + auto-repair, daily)
- openapi-reference-validation.yml (spec drift + auto-fix, daily)
- tasks-retention.yml (workspace retention)

**Auto-commit integrators (P5-auto):**
- 6 social feed wrappers (via data-refresh-governance.yml)
- update-changelogs.yml
- update-contract-addresses.yml (+shadow)
- update-livepeer-release.yml
- sync-large-assets.yml
- sdk_generation.yaml

**Self-repair:** page-integrity-health and openapi have full scan-to-act (rolling issue, auto-close). freshness-monitor and v2-external-link-audit now have rolling issues (added this session). content-health unblinded (continue-on-error removed).
**GAP:** Data integrators have no error handling (no issue creation on fetch failure).

### Layer 6: Self-heal (GitHub Actions, P6)

**Implementation:** repair-governance.yml (weekly Monday, governance-pipeline.js)
**Self-repair:** Full cycle: audit, fix, verify, create PR.
**GAP:** Repair scope limited by @owner to @domain migration guards. Full-repo repair disabled.

### Layer 7: Event-driven (GitHub Actions)

**Implementation:**
- auto-assign-docs-reviewers.yml (PR opened)
- close-linked-issues-docs-v2.yml (PR merged)
- discord-issue-intake.yml (repository_dispatch)
- docs-v2-issue-indexer.yml (issues + schedule)
- issue-auto-label.yml (issues)

**Self-repair:** Inherently self-managing (fire on event).
**GAP:** All 5 have inline JS (1,340 lines total). Labels hardcoded (not config-driven). No .github/ISSUE_TEMPLATE/ files.

---

## 3. Self-Remediation Map

```
DETECTION                     RESPONSE
---------                     --------
Pre-commit violation      --> BLOCK + clear error + trailer override
PR P2 failure             --> BLOCK merge + step summary with fix instructions
PR P3 failure             --> WARN + step summary (does not block)
Generator drift           --> Auto-commit on merge + verify pair catches on PR
Content-health finding    --> Step summary (repair-component-metadata in pipeline)
Stale data feed           --> Rolling issue (health:data-freshness) + auto-close when fresh
Broken external link      --> Rolling issue (health:external-links) + auto-close when clean
Page integrity issue      --> Auto-repair links/imports + rolling issue for unresolved
OpenAPI spec drift        --> Auto-fix PR + rolling issue
Governance drift          --> Weekly repair: audit, fix, verify, create PR
Issue/PR event            --> Auto-label, assign, index, close, intake
```

**Pattern:** Detect -> Diagnose -> Self-repair (if possible) -> Escalate (if not) -> Verify
**Priority:** Auto-fix silently > Auto-fix PR > Create issue > Block with error
**Rule:** No headless scans. Every finding gets a response.

---

## 4. File Moves and Renames

### 4.1 Workflow renames (47 files)

See Appendix A for the complete table.

### 4.2 Script migrations (D-ACT-06: .github/scripts/ to operations/scripts/)

| Current | Target | Notes |
|---|---|---|
| .github/scripts/fetch-contract-addresses.js | Keep (CLI entrypoint delegates to operations/scripts/integrators/content/data/contracts/) | Already has pipeline modules |
| .github/scripts/fetch-discord-announcements.js | operations/scripts/integrators/copy/social-feeds/ | Create directory |
| .github/scripts/fetch-forum-data.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/fetch-ghost-blog-data.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/fetch-github-discussions.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/fetch-github-releases.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/fetch-rss-blog-data.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/fetch-youtube-data.js | operations/scripts/integrators/copy/social-feeds/ | |
| .github/scripts/generate-changelog.js | operations/scripts/integrators/copy/changelogs/ | Create directory |
| .github/scripts/project-showcase-sync.js | operations/scripts/integrators/copy/showcase/ | Create directory |

**Note:** operations/scripts/ type folder is currently `automations/` not `integrators/`. Need to either:
- Rename the folder (high risk, many references)
- Accept `automations/` as the current name and add `integrators/` as alias
- Add `integrators/` as new folder alongside `automations/`

### 4.3 Inline script extractions (5 workflows)

| Workflow | Extract to | Lines |
|---|---|---|
| auto-assign-docs-reviewers.yml | operations/scripts/interfaces/governance/assign-reviewers.js | 80 |
| close-linked-issues-docs-v2.yml | operations/scripts/interfaces/governance/close-linked-issues.js | 140 |
| discord-issue-intake.yml | operations/scripts/interfaces/governance/discord-issue-intake.js | 260 |
| docs-v2-issue-indexer.yml | operations/scripts/interfaces/governance/issue-indexer.js | 400 |
| issue-auto-label.yml | operations/scripts/interfaces/governance/issue-auto-label.js | 340 |

**Note:** operations/scripts/interfaces/ doesn't exist yet. `interface` is a new type (D-ACT-01). Need to create the folder.

### 4.4 Design doc archival

| Current | Action |
|---|---|
| .github/workspace/phase2/ | Archive to .github/workspace/archive/phase2/ (superseded by design/) |
| .github/workspace/outcomes.md | Keep as reference (design-only per registry classification) |
| .github/workspace/reports-audits/ | Archive to .github/workspace/archive/reports-audits/ |

### 4.5 Report cleanup

| Location | Action |
|---|---|
| workspace/reports/repo-ops/ | Keep (active governance reports) |
| workspace/reports/ (60+ historical reports) | Archive dated reports to workspace/reports/archive/ |
| workspace/reports/_local/ | Keep (local scratch) |

---

## 5. Gaps Still Open

### Critical

| Gap | What's needed |
|---|---|
| 4 deleted workflows still exist | Execute deletion |
| Script framework doc says 6 types, 4 concerns | Update to 7 types, 7 concerns |
| operations/scripts/README.md says old taxonomy | Update to match |

### High

| Gap | What's needed |
|---|---|
| 11 scripts in .github/scripts/ not migrated | Create target dirs, git mv, update workflow paths |
| 5 inline scripts not extracted | Create operations/scripts/interfaces/, extract, add JSDoc |
| ~45 scripts in tools/lib/ tools/dev/ ungoverned | Classify: govern, exempt, or migrate |
| Script registry incomplete | Regenerate to include all governed scripts |
| docs.json and robots.txt not in governance manifest | Add to governance-index or generated-artifacts |

### Medium

| Gap | What's needed |
|---|---|
| ~~10 policy docs not referenced in architecture~~ | ~~RESOLVED 2026-04-08: all referenced via source-of-truth-guide.mdx~~ |
| PR workflows have no fix instructions (70%) | Add step summary with fix guidance |
| Generators have no concurrency control | Add concurrency groups |
| Labels hardcoded in 3 workflows | Centralise to config file |
| No .github/ISSUE_TEMPLATE/ files | Create from Discord schema |
| phase2/ docs superseded but not archived | Move to archive/ |
| 60+ stale reports unarchived | Move to workspace/reports/archive/ |

### Low

| Gap | What's needed |
|---|---|
| Pre-push overrides use env vars not trailers | Change to git trailers |
| Render gate false-positives on React 418 | Add platform-error exclusion to render-verify hook |
| Advisory-to-gate promotion not documented | Write criteria in framework doc |

---

## 6. Implementation Order

1. **Architecture approval** (this document)
2. **Delete 4 workflows + disable showcase**
3. **Verify every script runs** (--help/--dry-run/--check for every script referenced by every workflow)
4. **Fix all standards violations** across all workflows (permissions, concurrency, node version, npm ci, error handling, branch targeting)
5. **Rename all 47 workflows** in one batch (with full reference scan after)
6. **Extract 5 inline scripts** (create operations/scripts/interfaces/, extract verbatim, add JSDoc, test)
7. **Migrate .github/scripts/** (create target dirs, git mv, update workflow paths, test)
8. **Add scan-to-act** to remaining headless scanners
9. **Centralise labels** + create issue templates
10. **Classify ungoverned scripts** (tools/lib/, tools/dev/) - govern, exempt, or migrate
11. **Update all canonical docs** (script-framework.md, governance-index.mdx, operations/scripts/README.md)
12. **Archive superseded design docs** (phase2/, reports-audits/)
13. **Archive stale reports** (workspace/reports/ historical)
14. **Regenerate script registry** (full, covering all governed scripts)
15. **Full end-to-end test** per enforcement layer
16. **Merge to docs-v2**

Each step: explain intent, wait for go, test, document.

---

## Appendix A: Complete Workflow Rename Table

| # | Current name | New name (D-ACT-04) | Type | Concern | Tag |
|---|---|---|---|---|---|
| 1 | auto-assign-docs-reviewers.yml | interface-governance-assign-reviewers.yml | interface | governance | P3 |
| 2 | broken-links.yml | validator-health-check-broken-links.yml | validator | health | P3 |
| 3 | check-ai-companions.yml | validator-discoverability-check-companions.yml | validator | discoverability | P3 |
| 4 | check-copy-standards.yml | validator-brand-check-copy-standards.yml | validator | brand | P3 |
| 5 | check-docs-guide-catalogs.yml | validator-maintenance-check-catalogs.yml | validator | maintenance | P3 |
| 6 | check-docs-index.yml | validator-maintenance-check-docs-index.yml | validator | maintenance | P3 |
| 7 | check-page-structure.yml | validator-health-check-page-structure.yml | validator | health | P3 |
| 8 | close-linked-issues-docs-v2.yml | interface-governance-close-linked-issues.yml | interface | governance | P4 |
| 9 | codex-governance.yml | validator-governance-check-codex-compliance.yml | validator | governance | P2 |
| 10 | content-health.yml | audit-health-scan-content-quality.yml | audit | health | P5 |
| 11 | data-refresh-governance.yml | dispatch-copy-update-social-feeds.yml | dispatch | copy | reusable |
| 12 | discord-issue-intake.yml | interface-governance-intake-discord-issues.yml | interface | governance | event |
| 13 | docs-catalog-governance.yml | dispatch-maintenance-check-catalogs.yml | dispatch | maintenance | reusable |
| 14 | docs-v2-issue-indexer.yml | interface-governance-index-issues.yml | interface | governance | P5+event |
| 15 | freshness-monitor.yml | audit-health-scan-data-freshness.yml | audit | health | P5 |
| 16 | generate-ai-companions.yml | generator-discoverability-generate-companions.yml | generator | discoverability | P4 |
| 17 | generate-ai-sitemap.yml | generator-discoverability-generate-ai-sitemap.yml | generator | discoverability | P4 |
| 18 | generate-component-registry.yml | generator-maintenance-generate-component-registry.yml | generator | maintenance | P4 |
| 19 | generate-docs-guide-catalogs.yml | generator-maintenance-generate-catalogs.yml | generator | maintenance | P4 |
| 20 | generate-docs-index.yml | generator-maintenance-generate-docs-index.yml | generator | maintenance | P4 |
| 21 | generate-llms-files.yml | generator-discoverability-generate-llms-files.yml | generator | discoverability | P4 |
| 22 | governance-sync.yml | dispatch-governance-post-merge-sync.yml | dispatch | governance | P4 |
| 23 | issue-auto-label.yml | interface-governance-label-issues.yml | interface | governance | event |
| 24 | openapi-reference-validation.yml | validator-health-check-openapi-reference.yml | validator | health | P3+P5 |
| 25 | page-integrity-health.yml | audit-health-scan-page-integrity.yml | audit | health | P5 |
| 26 | repair-governance.yml | remediator-governance-repair-pipelines.yml | remediator | governance | P6 |
| 27 | sdk_generation.yaml | generator-maintenance-generate-sdk-clients.yml | generator | maintenance | P5-auto |
| 28 | seo-refresh.yml | remediator-discoverability-repair-seo-metadata.yml | remediator | discoverability | manual |
| 29 | style-homogenise.yml | remediator-brand-repair-en-gb-style.yml | remediator | brand | manual |
| 30 | sync-large-assets.yml | integrator-maintenance-update-large-assets.yml | integrator | maintenance | P5-auto |
| 31 | tasks-retention.yml | audit-governance-scan-workspace-retention.yml | audit | governance | P5 |
| 32 | test-suite.yml | validator-copy-check-content-quality-suite.yml | validator | copy | P2 |
| 33 | test-v2-pages.yml | validator-health-check-page-rendering.yml | validator | health | P3 |
| 34 | translate-docs.yml | integrator-copy-update-translations.yml | integrator | copy | manual |
| 35 | update-changelogs.yml | integrator-copy-update-changelogs.yml | integrator | copy | P5-auto |
| 36 | update-contract-addresses.yml | integrator-maintenance-update-contract-addresses.yml | integrator | maintenance | P5-auto |
| 37 | update-contract-addresses-shadow.yml | integrator-maintenance-update-contract-addresses-shadow.yml | integrator | maintenance | P5-auto |
| 38 | update-discord-data.yml | integrator-copy-update-discord-data.yml | integrator | copy | P5-auto |
| 39 | update-forum-data.yml | integrator-copy-update-forum-data.yml | integrator | copy | P5-auto |
| 40 | update-ghost-blog-data.yml | integrator-copy-update-ghost-blog-data.yml | integrator | copy | P5-auto |
| 41 | update-github-data.yml | integrator-copy-update-github-data.yml | integrator | copy | P5-auto |
| 42 | update-livepeer-release.yml | integrator-maintenance-update-release-version.yml | integrator | maintenance | P5-auto |
| 43 | update-rss-blog-data.yml | integrator-copy-update-rss-blog-data.yml | integrator | copy | P5-auto |
| 44 | update-youtube-data.yml | integrator-copy-update-youtube-data.yml | integrator | copy | P5-auto |
| 45 | v2-external-link-audit.yml | audit-health-scan-external-links.yml | audit | health | P5 |
| 46 | verify-ai-sitemap.yml | validator-discoverability-check-ai-sitemap.yml | validator | discoverability | P3 |
| 47 | verify-llms-files.yml | validator-discoverability-check-llms-files.yml | validator | discoverability | P3 |

