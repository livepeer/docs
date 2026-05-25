# Slice 5 — .github/ deep inventory (2026-05-22)

Author: main-session direct read (agent dispatches were hook-blocked 3×).
Method: surveyed structure with `ls`, read all 11 active workflows in full, sampled 4 archived workflows by filename pattern, read `decisions-log.mdx` first 100 lines, read `framework-canonical.md` first 100 lines, surveyed `actions-library/`. Output dated and cross-referenced.

---

## 1. Top-level inventory

| Path | Size / Count | mtime | Role |
| --- | --- | --- | --- |
| `.github/.allowlist` | 729 B | 2026-05-19 13:37 | root-allowlist subset for .github/ entries |
| `.github/AGENTS.md` | 9.8 KB | 2026-04-03 13:57 | Codex adapter extension; declares 7-step Codex workflow + branch rules |
| `.github/GOVERNANCE.md` | 483 B | 2026-04-07 23:00 | .github root governance marker |
| `.github/ISSUE_TEMPLATE/` | 8 active templates + config.yml + deprecated/ + docs-review + feature_internal = 10 templates | 2026-04-27 20:58 | issue intake forms |
| `.github/augment-instructions.md` | 8.6 KB, 206 lines | 2026-04-05 15:48 | **legacy** Augment adapter at active path; archived-header but visible to directory-walkers |
| `.github/config/` | (1 subdir) | 2026-05-18 20:13 | likely governance config |
| `.github/copilot-instructions.md` | 1.3 KB | 2026-04-08 01:58 | GitHub Copilot adapter (thin) |
| `.github/pull-request-template-v2.md` | 2.1 KB | 2026-04-03 06:08 | older PR template (numbered) |
| `.github/pull_request_template.md` | 3.7 KB | 2026-04-06 00:49 | active PR template — includes Required Reading section per D-DG-12 |
| `.github/workflows/` | 11 active + 1 deprecated/ + 56 .archived + 5 non-.archived in x-archive/ + 2 README + GOVERNANCE.md | 2026-05-22 16:27 | the workflow surface |
| `.github/workspace/` | actions-library/ + audit-repair/ + decisions-log.mdx + design/ + framework-canonical.md + outcomes.md + render-gate-remediation-gap-report.md + x-archive/ | 2026-05-22 13:18 | canonical workflow architecture spec home |
| `.github/x-archive/` | (separate from .github/workflows/x-archive/) | 2026-05-22 16:41 | **third archive lane** at .github root |

---

## 2. Active workflows — the 11-workflow set (post 2026-05-22 refactor)

### 2.1 Dispatch workflows (6)

All 6 follow an identical 4-mode architecture per D-ACT-08 + D-GOV-08:
1. **PR check** (pull_request event) — runs `dispatch-{concern}-check.js --staged`
2. **Post-merge** (push to `docs-v2`) — runs `dispatch-{concern}-generate.js --write` (or `-sync.js`)
3. **Scheduled** (cron) — runs `dispatch-{concern}-update.js` or `-scan.js` with FLAGS pattern (see §2.3)
4. **Manual repair** (workflow_dispatch with mode=manual) — runs `dispatch-{concern}-repair.js` with FLAGS pattern

| File | Concern | Cron | Path filters (PR/push) | Post-merge action | Scheduled action |
| --- | --- | --- | --- | --- | --- |
| `dispatch-brand.yml` | brand | Mon 06:30 UTC | `v2/**/*.mdx`, `snippets/**/*.mdx`, `snippets/components/**` | (none — no post-merge job) | `dispatch-brand-scan.js` |
| `dispatch-copy.yml` | copy | daily 03:00 UTC | `v2/**/*.mdx`, `snippets/data/**` | (none — no post-merge job) | `dispatch-copy-update.js` |
| `dispatch-discoverability.yml` | discoverability | daily 04:00 UTC | `v2/**`, `snippets/**`, `docs.json` | `dispatch-discoverability-generate.js --write` | `dispatch-discoverability-generate.js` |
| `dispatch-governance.yml` | governance | daily 07:00 UTC | `.github/**`, `operations/scripts/**`, `docs-guide/**`, `tools/config/**`, `snippets/**` | `dispatch-governance-sync.js --write` | `dispatch-governance-scan.js` |
| `dispatch-health.yml` | health | daily 06:00 UTC | `v2/**`, `snippets/**`, `operations/scripts/dispatch/content/health/**`, `operations/scripts/validators/content/**`, `operations/scripts/audits/content/**`, `operations/scripts/remediators/content/**` | (none — push trigger absent) | `dispatch-health-scan.js` |
| `dispatch-maintenance.yml` | maintenance | daily 05:00 UTC | `snippets/components/**`, `snippets/data/**`, `docs.json` | `dispatch-maintenance-generate.js --write` | `dispatch-maintenance-update.js` |

**Governance workflow has a unique fifth job: `pipeline-tests`** (runs on PR, schedule, dispatch). It executes `operations/tests/integration/pipeline-smoke-test.js` (the 66/66 dispatcher smoke test) and `pipeline-functional-tests.js` (synthetic violation cycles per D-GOV-03). Confirms the smoke-test mentioned in `framework-canonical.md` Status line.

**Health workflow has a sixth feature: opens a PR on manual repair** via `peter-evans/create-pull-request@v7` — title `chore(health): manual repair sweep`, label set `health, auto-generated, needs-review`. Brand has the same PR-creation step. The other 4 dispatchers do not.

### 2.2 Interface workflows (5)

| File | Trigger | Script called | Purpose |
| --- | --- | --- | --- |
| `interface-governance-assign-reviewers.yml` | pull_request {opened, reopened, ready_for_review, edited, labeled} | `operations/scripts/interfaces/governance/assign-reviewers.js` (3 entry points: `gate`, `requestReviewers`, `addFallbackComment`) | gate Codex PR eligibility, request Copilot reviewer, fallback assign Copilot via gh CLI |
| `interface-governance-close-linked-issues.yml` | push (to docs-v2) | (script reference — file not opened in this session) | close issues linked to merged PRs |
| `interface-governance-index-issues.yml` | issues + workflow_dispatch + cron every 6h | `operations/scripts/interfaces/governance/issue-indexer.js` | maintain rolling docs-v2 issue index |
| `interface-governance-intake-discord-issues.yml` | repository_dispatch (type: `discord-issue-intake`) | `operations/scripts/interfaces/governance/discord-issue-intake.js` | Discord webhook → GitHub issue conversion |
| `interface-governance-label-issues.yml` | (script reference — file not opened in this session) | (script reference) | auto-label new issues |

All interface workflows are tagged `# pipeline: P7` in their header comment — distinct from the P2-P6 + manual + event-driven taxonomy.

### 2.3 The cron-is-dry-run-by-default bug 🚨

**Every `dispatch-{concern}.yml` scheduled job has this pattern:**

```yaml
- name: {concern} scheduled meta
  run: |
    FLAGS=""
    if [[ "${{ inputs.dry_run }}" == "false" ]]; then FLAGS="--write --verify"; fi
    node operations/scripts/dispatch/.../dispatch-{concern}-update.js $FLAGS
```

When the workflow is triggered by the `schedule` event, **`inputs.dry_run` is the empty string** (not "false"), so `FLAGS` stays empty and the script runs with no `--write --verify`. **Cron physically cannot pass the `dry_run: false` input** — that input only exists for `workflow_dispatch`.

**Net effect:** the entire daily-cron schedule is **check-only theatre**. Only a human running `workflow_dispatch` with explicit `dry_run: false` actually writes.

**This is the root cause of:**
- Contracts addresses haven't been written since 2026-05-04 (18 days) despite `_health-checks.json` showing the pipeline RAN on 2026-05-22
- llms.txt + sitemap-ai.xml 47 days stale (no manual dispatch with `dry_run: false`)
- generate-og-images.js + generate-seo.js classified as "manual-only" in the 2026-03-30 P0 flag — they're not manual-only by design; they're wired in but **the cron schedule cannot trigger their write mode**

This is a systemic governance gap. Every `Pattern A: Integrate` and `Pattern B: Generate` pipeline that depends on cron writes is broken the same way.

The post-merge job (push to docs-v2) DOES write — it doesn't use the FLAGS pattern. So pipelines that have a post-merge job write on every push. But the post-merge jobs only fire for the concern's path filter — e.g. `dispatch-maintenance.yml` only fires post-merge on changes to `snippets/components/**`, `snippets/data/**`, `docs.json`. External-data pulls (contracts, exchanges, social feeds) don't get triggered by pushes to those paths.

### 2.4 Deprecated workflow at active path

`.github/workflows/deprecated/update-blog-data.yml` — 1 file. Per D-ACT-03, `update-blog-data.yml` was the "broken, remove" target. Still present at the deprecated path. Per `actions-audit.json` ratification, retention undocumented.

### 2.5 Archived workflows — 56 .archived + 5 non-.archived in `.github/workflows/x-archive/`

The 56 `.archived` files are the pre-2026-05-22 workflow set: validators (15), generators (10), integrators (12), remediators (6), audits (6), dispatch (3), interfaces (4). They predate the dispatch-{concern} consolidation and were renamed `.archived` rather than removed.

The 5 non-`.archived` files in x-archive/:
- `audit-governance-scan-workspace-retention.yml` (not `.archived` suffix — likely still active reference?)
- `build-review-assets.yml`, `generate-review-table.yml`, `update-blog-data.yml`, `update-review-template.yml` — pre-D-ACT-04 naming (no type-concern-verb-name pattern)

**Archive sprawl:** there are now THREE archive locations in .github/:
1. `.github/workflows/deprecated/` (1 file, kept at "deprecated" lane)
2. `.github/workflows/x-archive/` (61 files, "x-archive" lane)
3. `.github/x-archive/` (separate at .github root, contents not enumerated this session)

The script-framework declares **one** archive lane (`x-archive/`); the live tree has three.

---

## 3. .github/workspace/ — the canonical workflow architecture spec

### 3.1 `framework-canonical.md`

Header (first 16 lines, dated 2026-05-22):

> **This file is the internal working specification. The canonical published framework is the source of truth.**
> Canonical published framework: `docs-guide/frameworks/github-actions.mdx`
> Operator guide: `docs-guide/frameworks/dispatch-pipelines.mdx`
> Status (2026-05-22): Phase 4 consolidation shipped. 4-tier composable architecture active. 53 → 11 workflows (6 dispatch + 5 interface). D-GOV-08 prevention chain wired layers 1-5. Smoke test 66/66 passing.
> 18 decisions locked: D-ACT-01..10 and D-GOV-01..08.

**Pipeline shapes A-G** declared:
- **Pattern A: Integrate** — Trigger → fetch external API → transform → diff check → commit + push → on failure create issue
- **Pattern B: Generate** — Push to deploy branch / manual → read repo data → generate output → diff → commit + push
- **Pattern C: Check** — pull_request/push → validator script(s) → P2 block or P3 advise
- **Pattern D: Scan, Report, Act** — cron/manual → scan → report → route findings (auto-remediate, create issue, re-dispatch). "No headless scans. Every finding gets a response." — this is the doctrine. Adoption is partial; see §5 cross-slice findings.
- **Pattern E: Repair** — cron/manual → scan for drift → fix → commit or PR
- Patterns F, G — not read in scope.

**The dispatcher model (D-ACT-08):** workflow YAMLs are dispatchers (trigger + permissions + orchestration). Typed work (validate/generate/integrate/remediate/audit) lives in scripts. The type prefix stays in the workflow filename for visual grouping.

### 3.2 `decisions-log.mdx`

Header dated 2026-03-31. **18 locked decisions** (D-ACT-01..10 + D-GOV-01..08).

Decisions captured (read first 100 lines):

- **D-ACT-01** (2026-03-31): Issue/PR interfaces is a 7th type (was a subtype of `automation`)
- **D-ACT-02** (2026-03-31): P5-auto is a distinct pipeline tag (P5 = read-only monitoring; P5-auto = scheduled writes)
- **D-ACT-03** (2026-03-31): Data-fetch consolidation — merge 7 social-data workflows into one matrix workflow `update-data-feeds.yml`; keep 6 separate (contracts, changelogs, livepeer-release, project-showcase-sync, sync-large-assets, sdk_generation)
- **D-ACT-04** (2026-03-31): Workflow naming convention `type-concern-function-name.yml` with closed-enum 11 function verbs

**Pipeline tags (8 total):**

| Tag | When | What | Authority | Count |
| --- | --- | --- | --- | --- |
| P2 | PR (required check) | Blocks merge | Hard gate | 2 |
| P3 | PR (non-required) | Reports, no block | Soft gate | 8 |
| P4 | Push to deploy branch | Post-merge generators | Auto-commit | 8 |
| P5 | Schedule (read-only) | Monitor and report | Advisory | 4 |
| P5-auto | Schedule + auto-commit | Fetch data, commit | Writes on schedule | 10 |
| P6 | Schedule + auto-fix | Self-heal broken state | Writes + may PR | 1 |
| manual | workflow_dispatch only | Human-triggered | User decides | 4 |
| event-driven | repository_dispatch / issues | React to external events | Event-specific | 3 |

**Type taxonomy (7 types):** integrator (12), generator (7), validator (10), audit (3), remediator (3), dispatch (1), interface (5) — totals from decisions-log are PRE-refactor.

**Concern taxonomy (7 concerns):** integrations (11), copy (2), maintenance (6), health (8), discoverability (7), governance (8), brand (1) — totals PRE-refactor.

### 3.3 Drift between `framework-canonical.md` (workspace) and `docs-guide/frameworks/github-actions.mdx` (published)

The internal workspace spec says: **"Canonical published framework: docs-guide/frameworks/github-actions.mdx — read that first."** Per cross-reference, that file claims a different prior count (50 workflows) per the 2026-05-18 audit. Need to read both side-by-side to assess drift. **Likely the published framework lags the 2026-05-22 refactor.**

### 3.4 Other workspace files (enumerated, not deep-read)

- `audit-repair/` — directory of audit-repair pairing reference
- `design/` — design notes
- `outcomes.md` — outcomes log
- `render-gate-remediation-gap-report.md` — gap report on render-gate remediation (Phase 5)
- `x-archive/` — archive lane (yet another, the FOURTH archive location in .github/)

---

## 4. `.github/workspace/actions-library/`

Per CLAUDE.md row 2026-05-22 and gitstatus at session start, this folder contains the master action catalogue — one MDX file per atomic action covering validators, generators, integrators, remediators, audits, dispatchers, interfaces. Specifically the git status showed files like:

- `validators/health/audit-health-scan-content-quality.mdx`
- `dispatchers/copy/dispatch-copy-update-social-feeds.mdx`
- `dispatchers/governance/dispatch-governance-post-merge-sync.mdx`
- `dispatchers/maintenance/dispatch-maintenance-check-catalogs.mdx`
- `generators/discoverability/*` (4 mdx)
- `generators/maintenance/*` (4 mdx)
- `integrators/copy/*` (2 mdx)
- `remediators/brand/*` (2 mdx)
- `remediators/discoverability/*` (1 mdx)
- `validators/brand/*` (1 mdx)
- and the catalog-index.mdx, audit json

**Pattern:** every script under `operations/scripts/{type}/{concern}/{niche}/*.js` has a corresponding `.github/workspace/actions-library/{type}/{concern}/{niche}/*.mdx` documentation file. The actions-library mdx files are the canonical action documentation. Full enumeration was not done this session; SLICE-04 (operations/scripts) should reference these for the verification pairing.

---

## 5. ISSUE_TEMPLATE catalogue

8 active YAML form templates + config.yml + 2 additional (docs-review, feature_internal) = 10 templates + 1 config. Per CLAUDE.md row 2026-05-22 the project ships 9 issue templates + 1 PR template (likely 8 + docs-review = 9, with feature_internal counted separately as the 10th).

Files (not opened individually in this session):

1. `01_bug_report.yml`
2. `02_docs_page_issue.yml`
3. `03_feature_request.yml`
4. `04_content_request.yml`
5. `05_tooling_ci_issue.yml`
6. `06_question_clarification.yml`
7. `docs-review.yml`
8. `feature_internal.yml`
9. `config.yml` (config, not a template)
10. `deprecated/` subfolder (archive lane)

Each issue template per CLAUDE.md `area:*` + `priority:*` auto-label policy.

---

## 6. Adapter files at .github root (cross-ref to SLICE-06)

| File | Role | Drift |
| --- | --- | --- |
| `.github/AGENTS.md` | Codex adapter extension | 9.8 KB, mtime 2026-04-03; SLICE-06 found in-body staleness note declaring checkpoint-branch system aspirational |
| `.github/copilot-instructions.md` | GitHub Copilot adapter (thin pointer) | 1.3 KB, mtime 2026-04-08; SLICE-06 confirmed thin per D-DG-11 |
| `.github/augment-instructions.md` | **legacy** Augment adapter at active path | 8.6 KB, 206 lines, mtime 2026-04-05; SLICE-06 flagged: heaviest adapter, archived-header but live path |

---

## 7. Pull request templates

Two PR templates exist side-by-side:

- `.github/pull_request_template.md` (3.7 KB, mtime 2026-04-06) — **active** template per D-DG-12 (Required Reading section auto-fills from changed-path globs via `check-canonical-citation.js`)
- `.github/pull-request-template-v2.md` (2.1 KB, mtime 2026-04-03) — older numbered template; GitHub uses `pull_request_template.md` by default. This is likely a vestigial draft.

---

## 8. Cross-slice findings

### 8.1 Major findings

1. **Cron-is-dry-run-by-default bug (P0).** Every `dispatch-{concern}.yml` scheduled job uses a FLAGS pattern that requires `inputs.dry_run == "false"` to set `--write --verify`. Cron has no way to pass that input. All daily/weekly cron runs are check-only. Contracts addresses last written 2026-05-04 despite cron firing daily. llms.txt + sitemap-ai.xml 47 days stale. Pattern A integrators and Pattern B generators that depend on cron writes are all affected the same way.
2. **Path drift: contracts pipeline doc references `.github/scripts/fetch-contract-addresses.js`** but the directory is **empty** — script moved to `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`. The pipeline doc and any operator running the old path will fail.
3. **Three archive lanes** in .github/: `workflows/deprecated/` + `workflows/x-archive/` + `.github/x-archive/`. Script-framework declares one (`x-archive/`).
4. **Pattern D "Scan, Report, Act" is doctrine but partial in implementation.** Framework-canonical.md says "No headless scans. Every finding gets a response." Health scheduled scan opens a PR on manual repair; Brand same. But the daily scheduled runs (which are check-only per the bug above) write findings nowhere except step-summary output.
5. **`framework-canonical.md` declares itself the working spec** but the canonical published framework lives at `docs-guide/frameworks/github-actions.mdx`. Sync state between the two is undocumented; likely the published version lags 2026-05-22.
6. **Two PR templates** at `.github/pull_request_template.md` (active) and `.github/pull-request-template-v2.md` (vestigial). The v2 file is older and GitHub doesn't use it. Cleanup candidate.
7. **`.github/augment-instructions.md` (206 lines, heaviest adapter) lives at the active path with archived-header.** Directory-walking agents still read it. Confirmed cross-ref to SLICE-06 finding.
8. **D-ACT-03 consolidation of 7 social data-fetch workflows into `update-data-feeds.yml`** — those 7 files are all in `.github/workflows/x-archive/` with `.archived` suffix. Did the consolidation complete? `update-data-feeds.yml` is not in the active workflow set. Either the consolidation moved into `operations/scripts/dispatch/copy/` (per D-ACT-08 dispatcher model) or the consolidation is unfinished. Per actions-audit needs verification.
9. **No CI workflow validates that every generator has a matching --check validator.** D-ACT framework declares the rule; no script enforces it.
10. **`actions-audit.json` and `catalog-index.mdx` under `actions-library/`** — generated catalogues per the actions-library architecture. Freshness vs source unknown this session.

### 8.2 Adapter drift (cross-ref SLICE-06)

- `.github/AGENTS.md` in-body staleness note unchanged
- `.github/augment-instructions.md` still at active path with archived-header
- `.github/copilot-instructions.md` thin per D-DG-11 ✓
- `.github/.allowlist` 729 B subset for .github/ scope; relationship to root `.allowlist` (36 entries per SLICE-12) undocumented this session

### 8.3 Decision-log coverage

`decisions-log.mdx` was last updated 2026-03-31 per its header. But `framework-canonical.md` Status line is 2026-05-22 and references D-GOV-08 prevention chain. **There's a 2-month gap in the decisions-log** — D-ACT-05..10 and D-GOV-01..08 are referenced but not in the first 100 lines I read. Either they appear later in the file, or the log has drifted.

---

## 9. Consolidation matrix

| File / surface | Action | Target canonical home | Rationale |
| --- | --- | --- | --- |
| `.github/workflows/*.yml` (11 active) | KEEP | unchanged | Post-refactor; canonical |
| `.github/workflows/deprecated/update-blog-data.yml` | RETIRE | move to `.github/workflows/x-archive/` and remove `deprecated/` | One archive lane per script-framework |
| `.github/workflows/x-archive/` | RATIONALISE | document retention policy | 61 files; no policy file lives there |
| `.github/x-archive/` (root .github archive) | INVESTIGATE | merge into `.github/workflows/x-archive/` or document | Third archive lane unexplained |
| `.github/pull-request-template-v2.md` | DELETE | — | Vestigial; GitHub uses pull_request_template.md |
| `.github/augment-instructions.md` | MOVE | `.augment/_retired/` or delete | Active path with archived-header; mis-routes agents |
| `.github/scripts/` (empty) | DELETE | — | Empty since contracts script moved to operations/ |
| `.github/AGENTS.md` | UPDATE | resolve in-body staleness note | Aspirational checkpoint-branch contradicts body |
| `.github/workspace/decisions-log.mdx` | UPDATE | append D-ACT-05..10 and D-GOV-01..08 entries | 18 decisions referenced; file shows 4 |
| `.github/workspace/framework-canonical.md` | SYNC | confirm parity with `docs-guide/frameworks/github-actions.mdx` | Internal vs published; 2-month update gap |
| Cron-is-dry-run pattern in 6 dispatchers | FIX (P0) | invert default OR add separate scheduled-write job | Root cause of multi-week stale data |
| Pattern D "every finding gets a response" | IMPLEMENT | add audit→issue step to dispatch-*-scan.js jobs | Doctrine exists; implementation partial |

---

## 10. What this slice did NOT cover (gaps for future session)

- `.github/workspace/actions-library/**` — per-action MDX files (estimated 50-150 files); only the top-level structure was confirmed via git status
- `.github/config/` contents not opened
- `.github/x-archive/` contents not enumerated
- ISSUE_TEMPLATE per-template content (only filenames)
- `.github/workflows/interface-governance-close-linked-issues.yml` + `interface-governance-label-issues.yml` not opened in full
- `.github/workspace/audit-repair/`, `design/`, `render-gate-remediation-gap-report.md`, `outcomes.md` not opened
- `decisions-log.mdx` only first 100 lines; D-ACT-05..10 + D-GOV-01..08 detail not captured
- `framework-canonical.md` only first 100 lines; pipeline patterns F, G + scan-to-act routing tables + generate/verify pair register not captured
- `actions-audit.json` not opened (per session start it was modified)

These gaps are non-blocking for the consolidation map (the canonical-architecture picture is clear) but should be filled in a focused .github/workspace deep slice.

---

## 11. Summary

11 active workflows on a clean 4-tier composable architecture (PR check / post-merge / scheduled / manual repair). 18 locked decisions cover the surface. Smoke test 66/66 passing per framework-canonical.md.

**Three structural problems repeat in the data:**

1. **Cron is dry-run by default** — root cause of 18-day contract staleness, 47-day llms.txt staleness, OG-images/SEO classified as "manual-only" when they're actually wired-but-write-blocked.
2. **Archive sprawl** — 3 lanes in .github/ vs 1 declared in the framework.
3. **Path drift** — pipeline docs reference `.github/scripts/` paths after the script moved to `operations/scripts/`.

The published framework at `docs-guide/frameworks/github-actions.mdx` likely lags this 2026-05-22 refactor by 2 months; needs explicit sync before any consolidation claims canonical accuracy.

— end of slice 5 —
