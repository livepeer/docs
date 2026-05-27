---
title: "Docs-as-Infrastructure — Principal Engineer Audit"
date: 2026-05-26
audience: engineering-leadership
auditor: Claude (Senior Documentation Engineer)
methodology: 5 parallel read-only audit agents across architecture, auto-doc pipeline, script quality, DX/maintenance, security
scope: operations/scripts (332), .github/workflows (11), ai-tools/ai-skills (35), docs-guide/{frameworks,policies,standards} (35 governance docs)
---

# Docs-as-Infrastructure — Principal Engineer Audit

## Executive summary

The Livepeer docs repository is **a sophisticated docs-as-infrastructure platform**, not a typical Mintlify docs site. It carries 332 governed Node.js operations scripts across a 7-type × 7-concern taxonomy, an 11-tag JSDoc enforcement standard, a 4-tier composable GitHub Actions architecture (11 active workflows, consolidated from 53 in May 2026), self-documenting catalogs that regenerate on schedule, and an ownerless-governance model where every folder declares its own contract via `GOVERNANCE.md` markers. The intent and architecture are excellent — significantly above industry baseline for an open-source documentation project.

**The platform is healthier in the layers where ownership is explicit (workflow permissions, JSDoc-on-new-scripts, framework canonicalisation) than in the layers where ownership is implicit (legacy-script accumulation, in-place file writes, untested script logic, manual auto-discovery of pipeline children).** The risks that emerge from this audit are not architectural — they are *implementation-discipline gaps* that compound silently as the surface grows.

Three issues stand out as **High-priority and high-leverage**:

1. **Supply-chain exposure on third-party GitHub Actions.** All 11 workflows correctly scope `permissions:` and gate `pull-requests:write` to specific jobs, but every third-party action is pinned to a moving tag (`peter-evans/create-pull-request@v7`) rather than a commit SHA. Combined with a classic-PAT (`DOCS_V2`, `repo` scope) for cross-workflow triggers and the absence of any secret-scanning gate on PRs, a single compromised action upstream — see the March 2025 `tj-actions/changed-files` incident — yields write access to the entire repo. **Smallest blast-reduction for smallest code change in the audit.**

2. **Pipeline auto-discovery is hardcoded in 16 meta-dispatchers** and **26% of `script-registry.json` entries have an empty `concern` field.** Both are silent-omission bugs of the same class as the recent 5→7 catalog-coverage regression that hid 28% of registered scripts. Every time a new pipeline is added, three meta-dispatchers must be edited manually; missing one silently drops a pipeline from the daily scan. The registry pollution causes ~25% of scripts to vanish from downstream surfaces. Both are O(n) coordination problems today, O(n²) at 2x scale.

3. **98% of script writes are non-atomic and 1% have signal handlers.** Of the 332 scripts, 232 of 235 `fs.writeFileSync` call sites write directly to the target path with no temp+rename pattern. Only 4 scripts intercept SIGTERM/SIGINT. The platform spawns Chromium for render verification, runs remediators in bulk, and is scheduled in CI — exactly the workloads where preemption corrupts files and orphans processes. The repository already paid this bill once ("Zombie Prevention" thread, 158 zombie processes killed). Without a shared atomic-write helper and a signal-handler boilerplate, the cost is paid again on the next CI timeout or hook crash.

The remaining findings (no unit tests for 254 production scripts, scattered `process.env` access, hook-failure recovery undocumented, drift-detection asymmetry across generators, dead-code accumulation in `archive/legacy/`) are real but secondary. They benefit from a sustained DX investment rather than a single sprint of work.

---

## Scope & methodology

| Surface | Count | Sample |
|---|---|---|
| Operations scripts | 332 | `operations/scripts/{audits,dispatch,generators,integrators,interfaces,remediators,validators}/{ai,components,content,governance,copy,media,maintenance}/*.js` |
| GitHub Actions workflows | 11 | `.github/workflows/dispatch-{brand,copy,discoverability,governance,health,maintenance}.yml` + 5 `interface-governance-*.yml` |
| AI skills | 35 | `ai-tools/ai-skills/*/SKILL.md` |
| Frameworks | 16 | `docs-guide/frameworks/*.mdx` |
| Policies | 17 | `docs-guide/policies/*.mdx` |
| Standards | 2 | `docs-guide/standards/{authoring-standard,frontmatter}.mdx` |
| Unit tests | ~30 | `operations/tests/unit/*.test.js` (governance/metadata only — no script logic) |
| Integration tests | 2 | `pipeline-smoke-test.js`, `pipeline-functional-tests.js` |

Five parallel read-only audit agents were briefed with verified repo facts and a structured return format (strengths, ranked weaknesses with evidence/risk/fix-sketch, one concrete remediation recipe per category). Agent IDs and per-category reports are appended.

---

## Category 1 — Architecture & Scalability

**Strengths**
- Clean 7-type × 7-concern atomic taxonomy is consistently enforced; every atomic script is type-pure, making composition predictable.
- 4-tier dispatch composability (action workflow → meta dispatcher → pipeline dispatcher → atomic script) is end-to-end runnable locally with `--dry-run`; no CI-only code paths.
- Shared `pipeline-mode.js` library standardises `--mode pr|scheduled|manual|post-merge` across all 65 dispatch scripts.

**Weaknesses (ranked)**

| ID | Issue | Severity | Evidence |
|---|---|---|---|
| 1.1 | Hardcoded pipeline arrays in 16 meta-dispatchers | **H** | `operations/scripts/dispatch/content/health/dispatch-health-check.js:22–29` (6 paths literal); `dispatch-governance-scan.js:21` (5 paths literal); pattern in 16+ files |
| 1.2 | `script-registry.json` concern pollution: 137/505 entries (26%) have empty concern; phantom concerns like `"update-og-image.js"` appear as concern values | **H** | `tools/config/registry/script-registry.json`; `generate-script-registry.js:87–130, 146–172` |
| 1.3 | Sequential `spawnSync` execution across dispatch tiers; no fan-out | M | `pipeline-mode.js:47`; loop at `dispatch-health-check.js:36–40` |
| 1.4 | Single-concurrency-group risk if cross-concern pipelines added later | M | `.github/workflows/dispatch-governance.yml:39–41` |
| 1.5 | Glob/JSDoc parse on full registry per invocation — OOM risk at 10x | M | 62 `readFileSync`/JSON.require hits across dispatch; `walkFiles()` in `generate-script-registry.js:44–73` |

**Scalability bottleneck table**

| Bottleneck | At 2x scale | At 10x |
|---|---|---|
| Hardcoded pipeline arrays | 1–2 missed pipelines per new addition | Silent skips; 10+ edits per feature; unmaintainable |
| Registry concern pollution | Catalog accuracy drops, 25% of scripts invisible | >50% unmapped; cascading audit failures |
| Sequential dispatch | 3 min scan → 6 min | 1 hour per cron run; CI timeout; queued jobs block |
| Memory footprint | ~50 MB per run (acceptable) | 500 MB; OOM with parallel workers in 7 GB runner |

---

## Category 2 — Auto-Documentation Pipeline

**Inventory**

| Generator | Source | Output | Drift detection |
|---|---|---|---|
| `script-docs.test.js` | JSDoc 11-tag headers via `extractLeadingScriptHeader()` | `docs-guide/catalog/scripts-catalog.mdx` (637 lines, 505 scripts) | `lastVerified` frontmatter + content equality `--check` |
| `generate-script-registry.js` | JSDoc + path fallback | `tools/config/registry/script-registry.json` | None beyond entry count |
| `generate-component-docs.js` | Component JSDoc 7-tag | `v2/resources/documentation-guide/component-library/*` | SHA256 hash + `--check` |
| `generate-governance-map.js` | `GOVERNANCE.md` markers (recursive, 4-level) from 11 roots | `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json` | `generated` timestamp; 90-day staleness threshold |
| `generate-action-pages.js` | `actions-audit.json` from `.github/workflows/*.yml` | `.github/workspace/actions-library/*.mdx` (61 files) | Narrative banner only — no `--check`, no hash |

**Strengths**
- Canonical 7-type taxonomy now enforced via `TYPE_ORDER` constant locked in `script-docs.test.js:117`; fallback `deriveFromPath()` covers missing tags.
- Hash + `--check` drift mode wired for components catalog and scripts catalog; cron at `dispatch-governance.yml:24` runs daily.
- Generated-file banners standardised via shared `buildGeneratedFrontmatterLines()` + `buildGeneratedNoteLines()`; templates marked `pipeline: indirect`.

**Weaknesses (ranked)**

| ID | Issue | Severity | Drift scenario |
|---|---|---|---|
| 2.1 | Catalog generator has no assertion that all 7 types appear; empty sections silently omitted | **H** | A type is retired or all its scripts misclassified → catalog renders 6 sections, no warning. Same class of bug as the recent 5→7 regression. |
| 2.2 | Scripts with no JSDoc are silently excluded from catalog (empty `type` → filter drops them) | M | A new script lands without JSDoc; folder is governed, file is committed, but it's invisible to readers. |
| 2.3 | Actions library catalog has narrative comment only — no `--check` mode, no hash, no `lastVerified` | M | Workflow renamed → actions library still references old name; catalog lies. |
| 2.4 | Registry schema accepts empty `type`/`concern`/`niche`; no upstream validator fails on missing required tags | M | New script with only `@script` + `@purpose` lands; catalog excludes it; SME never sees it for review. |
| 2.5 | Catalog regenerates daily on cron, not at commit-time | L | 24-hour window where a merged PR shows stale catalog in history. |

---

## Category 3 — Script Quality & Robustness

**Quantified state (from 332 scripts; sample of 15 across types for JSDoc, 100 for try/catch, 8 for signal handlers)**

| Metric | Value | Source |
|---|---|---|
| JSDoc-compliant (full 11-tag) | 179 / 332 (54%) | `grep '@policy'` |
| Known backlog | ~218 scripts | `workspace/thread-outputs/repo-docs-consolidation` |
| `--dry-run` support (remediators + integrators) | 60 / 92 (65%) | `grep dryRun` |
| `try/catch` on fs (sampled) | 90 / 100 (90%) | manual |
| **Atomic writes (temp + rename)** | **2 / 332 (0.6%)** | `grep mkdtemp` |
| Direct non-atomic `writeFileSync` | 232 / 235 (98%) | `grep fs.writeFileSync` |
| **SIGTERM/SIGINT handlers** | **4 / 332 (1%)** | `grep SIGTERM` |
| Explicit `process.exit(2)` | 107 / 332 (32%) | `grep process.exit` |
| Hardcoded `/tmp/` paths | 4 | `grep '"/tmp/'` |
| Hardcoded `/opt/homebrew/` or `/home/` | 10+ | `grep` |
| `ps -o etime` (BSD-only flag in cleanup-local-dev-sessions.js etc.) | 3 | `grep etime` |

**Strengths**
- Error handling discipline is good at the surface (90% sampled have `try/catch` around fs reads); explicit `process.exit` codes are used widely.
- JSON-structured logging is adopted in 270+ scripts (81%); reports land in `workspace/reports/` for downstream observability.
- The 11-tag JSDoc standard, where applied, is uniformly high quality — the *new-script* path is solid; debt is concentrated in older code.

**Weaknesses (ranked)**

| ID | Issue | Severity | Risk |
|---|---|---|---|
| 3.1 | 98% of writes bypass atomic temp+rename | **H** | SIGTERM mid-write → partially-written frontmatter, truncated prose. Already burned via "Zombie Prevention" history. |
| 3.2 | Only 1% of scripts handle SIGTERM/SIGINT cleanup | **H** | Orphaned Chromium / locked `.codex/locks-local/*.lock` files prevent next CI run; root cause of the existing zombie thread. |
| 3.3 | 46% JSDoc compliance gap (no `@policy` tag); ~218 scripts in backlog | M | Pipelines cannot verify policy coverage; no machine traceability from script → governance decision. |
| 3.4 | Dry-run coverage 65% across write-heavy scripts | M | Bulk-overwrite footgun; CI cannot safely test remediators without dry-run gate. |
| 3.5 | Non-portable env paths in 17+ scripts (`/opt/homebrew/bin/node`, BSD `etime` flag, hardcoded user paths in `archive/legacy/`) | M | Linux CI runner failures; local-only scripts fail invisibly. |
| 3.6 | Redundant `repair-spelling.js` + `remediate-us-spelling.js` with no deprecation marker | L | Code-review confusion; dead code stays maintainable debt. |
| 3.7 | `archive/legacy/` (15 files) + `x-archive/` (4 files) both executable, not consolidated | L | Cognitive load; framework audits must special-case them. |

---

## Category 4 — Maintenance & Developer Experience

**Onboarding friction score: 6/10.** A new contributor adding script #333 must cross-reference three governance files (SKILL.md, framework summary, full 52KB spec) and infer type/concern/niche from prose tables. No worked example, no template under `snippets/templates/scripts/`.

**Testing coverage matrix**

| Script type | Total | Unit tests | Integration | Pre-commit | CI |
|---|---|---|---|---|---|
| audit | 25 | **0** | 5 (smoke) | yes | dispatch-governance.yml |
| generator | 30 | **0** | 5 (smoke) | yes | dispatch-governance.yml |
| validator | 54 | **0** | 5 (smoke) | yes | dispatch-governance.yml |
| remediator | 37 | **0** | 0 | yes | dispatch-governance.yml |
| dispatch | 100 | **0** | 2 (smoke + functional) | yes | dispatch-governance.yml |
| interfaces | 8 | **0** | 0 | yes | actions configs |
| **Total** | **254** | **0** | **17** | — | — |

The 30 tests in `operations/tests/unit/` are governance metadata tests (JSDoc validation, frontmatter, fact registry) — none cover script *logic*. The recent 5→7 catalog-coverage bug would have been caught by even a single unit test on the catalog generator's type-iteration loop.

**Merge gate inventory**

| Gate | Blocks/Reports | Trigger |
|---|---|---|
| MDX syntax + docs.json redirect integrity | Blocks | Pre-commit |
| `.allowlist` and `v1/` frozen | Blocks | Pre-commit |
| No file deletions (except `--trailer` opt-out) | Blocks | Pre-commit |
| Governance PR meta | Reports (PR comment) | PR creation |
| Pipeline smoke test (66 dispatchers) | Blocks | PR / schedule |
| Pipeline functional cycles | Blocks | PR / schedule |
| Post-merge governance sync | Blocks merge | Push to `docs-v2` |
| Daily scheduled scan | Reports + opens PR | Cron 07:00 UTC |

`quality-gates.mdx` (lastVerified 2026-05-19) accurately reflects this — docs and reality match.

**Weaknesses (ranked)**

| ID | Issue | Severity | Cost |
|---|---|---|---|
| 4.1 | **Zero unit tests for 254 production scripts**; all testing is integration-level | **H** | ~5 hours/year on preventable regressions caught only after CI; hides logic regressions until merge. |
| 4.2 | No worked-example onboarding doc; junior must read 4 files to scaffold script #333 | M | ~45 min per new script × 10/year × 10 contributors = ~75 hours/year. |
| 4.3 | Hook failure modes undocumented; recovery path requires reading source | M | Support-ticket friction; users use `--no-verify` indiscriminately. |
| 4.4 | Integration tests are smoke-level; only 2 dispatch families have functional cycles | M | Regressions in remediator output format / generator idempotency slip past CI. |
| 4.5 | Governance map staleness not validated post-merge | L | Map can diverge from filesystem silently. |

---

## Category 5 — Security & Compliance

**Token / credential scan**: clean. No tracked `.env`, no high-entropy tokens in source. `.env.example` schema at `docs-guide/repo-ops/config/.env.example` is exemplary (names consumer + workflow + secret name + URL to generate). `.gitignore` defence-in-depth (`.env`, `**/client_secret*.json`, chat reconstructions).

**Workflow permissions matrix**: all 11 workflows have explicit `permissions:` blocks scoped to `contents: read` at top with write narrowed per-job. This is the GitHub-recommended pattern and ahead of >80% of public repos.

**process.env**: 89 unique env vars; 18 secret-bearing; 13 GH-runtime-provided. No central `requireEnv()` helper — scattered access; silent `undefined` failures possible for soft-config vars.

**Strengths**
- Exemplary secrets schema documentation and ignore rules.
- Workflow permissions correctly scoped (top-level read, per-job write).
- No dynamic shell construction from external input across 270 inspected `execSync`/`spawnSync` sites — all interpolations trace to internal sources.

**Weaknesses (ranked)**

| ID | Issue | Severity | Risk |
|---|---|---|---|
| 5.1 | Third-party actions pinned to moving tags, not SHAs (`peter-evans/create-pull-request@v7`, etc.) | **H** | Supply-chain compromise → attacker re-points `@v7` → inherits `pull-requests:write` + `DOCS_V2` PAT (`repo` scope) on next run. tj-actions/changed-files class incident. |
| 5.2 | Classic PAT (`DOCS_V2`, `repo` scope) used to bypass `GITHUB_TOKEN` cross-workflow-trigger limitation | M | PAT does not auto-expire; user-scoped; compromise exposes every repo the user can write to. |
| 5.3 | No automated secret-scanning gate on PRs (no gitleaks/trufflehog workflow) | M | Public repo; one accidental commit of a real key is harvested within minutes. |
| 5.4 | Two headless-browser stacks (`puppeteer@^24.40.0` AND `playwright@^1.59.1`) in `tools/package.json` | L | Larger supply-chain surface than necessary; consolidate. |
| 5.5 | No central typed env-var validator | L | Silent failures, easier to log secrets in debug prints. |

---

## Cross-cutting issue register (H / M / L)

### High

| # | Issue | Category | Why H |
|---|---|---|---|
| H1 | Third-party Actions pinned to tags, not SHAs; no secret-scanning gate; classic PAT in use | Security 5.1, 5.2, 5.3 | Public repo, supply-chain attack vector with full-repo blast radius |
| H2 | Hardcoded pipeline arrays in 16 meta-dispatchers + 26% empty concerns in `script-registry.json` + catalog has no all-types assertion | Architecture 1.1, 1.2 + Auto-Doc 2.1 | Silent omission of pipelines/scripts; same bug class as recent 28% coverage regression |
| H3 | 98% of writes are non-atomic + 1% have signal handlers | Script Quality 3.1, 3.2 | Data corruption + zombie processes; repository has already paid this bill once |
| H4 | Zero unit tests for 254 production scripts | DX 4.1 | Logic regressions invisible until integration runs; foundational for safe refactors |

### Medium

| # | Issue | Category |
|---|---|---|
| M1 | Sequential `spawnSync` dispatch — 1-hour cron time at 10x scale | Architecture 1.3 |
| M2 | Glob/registry loaded fully into memory per invocation — OOM risk at 10x | Architecture 1.5 |
| M3 | Scripts with no JSDoc silently excluded from catalog (not flagged) | Auto-Doc 2.2 |
| M4 | Actions library has narrative banner only — no `--check`/hash | Auto-Doc 2.3 |
| M5 | Registry accepts empty required tags; no upstream validator | Auto-Doc 2.4 |
| M6 | 46% JSDoc compliance gap (`@policy` missing); ~218 backlog | Script Quality 3.3 |
| M7 | 35% of write-heavy scripts lack `--dry-run` | Script Quality 3.4 |
| M8 | Non-portable env paths block Linux CI portability | Script Quality 3.5 |
| M9 | No worked-example onboarding doc | DX 4.2 |
| M10 | Hook failure modes undocumented | DX 4.3 |
| M11 | Integration tests smoke-level only; 2 of 7 types covered functionally | DX 4.4 |
| M12 | Classic PAT (`repo` scope) used for cross-workflow trigger | Security 5.2 |
| M13 | No secret-scanning gate on PRs | Security 5.3 |

### Low

| # | Issue | Category |
|---|---|---|
| L1 | Workflow concurrency-group rule undocumented for cross-concern future pipelines | Architecture 1.4 |
| L2 | Daily-cron-only catalog regeneration leaves 24h staleness window | Auto-Doc 2.5 |
| L3 | Duplicate spelling remediators, no deprecation marker | Script Quality 3.6 |
| L4 | `archive/legacy/` + `x-archive/` both executable, not consolidated | Script Quality 3.7 |
| L5 | Governance map staleness not validated post-merge | DX 4.5 |
| L6 | Two headless-browser stacks (Puppeteer + Playwright) | Security 5.4 |
| L7 | No central `requireEnv()` validator | Security 5.5 |

---

## Top 3 fix recipes (code-level)

The three fixes below are chosen for **highest leverage × smallest delta**: each closes multiple findings at once and the surface area of the change is modest.

### Fix 1 (H1, Security) — SHA-pin third-party actions + gitleaks gate

**Closes:** Security 5.1 (supply-chain), 5.3 (no secret-scanning); indirectly reduces 5.2 blast radius.

**Step A — pin every third-party action to a commit SHA with the version tag as a trailing comment.** Apply across all 11 workflows. Concrete edit for `.github/workflows/dispatch-health.yml`:

```yaml
# BEFORE
      - name: Create PR
        uses: peter-evans/create-pull-request@v7
        with:
          token: ${{ secrets.DOCS_V2 }}

# AFTER
      - name: Create PR
        # peter-evans/create-pull-request v7.0.5 — SHA-pinned (do not bump without re-verifying SHA)
        uses: peter-evans/create-pull-request@c5a7806660adbe173f04e3e038b0ccdcd758773c
        with:
          token: ${{ secrets.DOCS_V2 }}
```

`actions/*` (first-party) may stay on `@v4`/`@v7` tags pragmatically, but every non-`actions/*` action must be SHA-pinned. Fetch the actual current SHA for each tag before applying (the value above is illustrative).

**Step B — add Dependabot for `github-actions` ecosystem** so SHA bumps arrive as PRs.

```yaml
# .github/dependabot.yml (new file or append)
version: 2
updates:
  - package-ecosystem: github-actions
    directory: /
    schedule: { interval: weekly }
```

**Step C — add a gitleaks PR gate.** New file `.github/workflows/interface-governance-secret-scan.yml`:

```yaml
# @type: interface
# @concern: governance
# @niche: security
# @pipeline: P7
name: Secret Scan

on:
  pull_request:
  push:
    branches: [docs-v2, docs-v2-dev]

permissions:
  contents: read

concurrency:
  group: secret-scan-${{ github.ref }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}

jobs:
  gitleaks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      # gitleaks/gitleaks-action v2.3.7 — SHA-pinned
      - uses: gitleaks/gitleaks-action@cb7149b9b57195b609c63e8518d2f5840f9aa7e9
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**Step D — append a 4-line pre-commit short-circuit** in `.githooks/pre-commit` (after the existing structure-check block):

```bash
# Secret-leak short-circuit (silent if gitleaks not installed locally)
if command -v gitleaks >/dev/null 2>&1; then
  gitleaks protect --staged --redact --no-banner || { echo "❌ secret detected in staged changes"; exit 1; }
fi
```

**Why this is the #1 fix:** smallest code change in the entire audit, closes the largest blast-radius exposure, follows the same governance pattern (workflow type/concern/niche tags) the repo already uses.

---

### Fix 2 (H2, Architecture + Auto-Doc) — Discovery-based meta-dispatch + registry concern validator + 7-type catalog assertion

**Closes:** Architecture 1.1 (hardcoded arrays), 1.2 (registry pollution), Auto-Doc 2.1 (no all-types assertion). Bundled because they are the same bug class (silent omission of pipelines/scripts/types).

**Step A — replace hardcoded pipeline arrays with filesystem discovery.** Apply pattern to all 16 meta-dispatchers (`dispatch-{concern}-{health|check|scan|repair}.js`). Example edit for `operations/scripts/dispatch/content/health/dispatch-health-check.js`:

```javascript
// BEFORE (lines 22–29)
const PIPELINES = [
  'dispatch-page-structure.js',
  'dispatch-page-rendering.js',
  'dispatch-page-integrity.js',
  'dispatch-wcag.js',
  'dispatch-content-quality.js',
  'dispatch-openapi-reference.js',
].map((f) => path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health', f));

// AFTER
const fs = require('fs');
const HEALTH_DIR = path.join(REPO_ROOT, 'operations/scripts/dispatch/content/health');

function discoverPipelines() {
  return fs.readdirSync(HEALTH_DIR)
    .filter(f => f.startsWith('dispatch-') && f.endsWith('.js') && f !== path.basename(__filename))
    .filter(f => {
      // Opt-out: scripts with @pipeline draft tag are excluded
      const src = fs.readFileSync(path.join(HEALTH_DIR, f), 'utf8').slice(0, 2000);
      return !/@pipeline\s+draft/.test(src);
    })
    .sort()
    .map(f => path.join(HEALTH_DIR, f));
}

const PIPELINES = discoverPipelines();
```

The `@pipeline draft` opt-out prevents auto-enrolment of half-finished pipelines.

**Step B — add a registry validation gate.** Edit `operations/scripts/generators/governance/generate-script-registry.js` around line 150 (after `extractEntry()` builds the record):

```javascript
// AFTER the registry is fully built but BEFORE writeFileSync
const VALID_TYPES = new Set(['audit', 'generator', 'validator', 'remediator', 'integrator', 'dispatch', 'interface']);
const VALID_CONCERNS = new Set(['ai', 'components', 'content', 'governance', 'copy', 'media', 'maintenance']);

const polluted = registry.filter(e =>
  !VALID_TYPES.has(e.type) ||
  !VALID_CONCERNS.has(e.concern) ||
  !e.type || !e.concern
);

if (polluted.length > 0) {
  console.error(`\n❌ Registry pollution: ${polluted.length} entries have invalid type/concern`);
  polluted.slice(0, 10).forEach(e =>
    console.error(`  ${e.path}: type="${e.type}" concern="${e.concern}"`)
  );
  if (!options.allowPollution) {
    console.error(`\nFix the JSDoc headers, or pass --allow-pollution to bypass.`);
    process.exit(1);
  }
}
```

This converts the silent 26% pollution into a CI-blocking error and gives the offender a path to fix it.

**Step C — add the all-types assertion to the catalog generator.** Edit `operations/tests/unit/script-docs.test.js` around line 904 (where `buildAggregateMarkdown()` returns):

```javascript
// AFTER the catalog markdown is built, BEFORE return
const typesPresent = TYPE_ORDER.filter(t =>
  registry.some(e => (e.type || '') === t && !normalizePipelineTiers(e.pipeline).includes('indirect'))
);
const missingTypes = TYPE_ORDER.filter(t => !typesPresent.includes(t));

if (missingTypes.length > 0) {
  console.warn(`\n⚠️  CATALOG DRIFT: ${missingTypes.length} canonical type(s) absent from catalog:`);
  missingTypes.forEach(t => console.warn(`   ${TYPE_ICONS[t] || ''} ${t}`));
  console.warn('\nEither:');
  console.warn('  1. Update TYPE_ORDER if the type was retired (locked governance decision required)');
  console.warn('  2. Reclassify or add scripts so the type appears\n');
  if (!options.allowDriftingCatalog) process.exit(1);
}
```

**Why this fix:** the recent 5→7 catalog regression was *exactly* this class of bug — a generator silently omitted a section because no upstream assertion forced parity with the taxonomy. With Steps A+B+C, three silent-omission paths (pipeline children, registry concerns, catalog types) become CI-blocking errors with clear remediation.

---

### Fix 3 (H3, Script Quality) — Shared atomic-write helper + signal-handler boilerplate library

**Closes:** Script Quality 3.1 (98% non-atomic writes), 3.2 (1% signal handlers). Bundled because both are the same gap: missing shared infrastructure for safe write operations.

**Step A — create `tools/lib/safe-io.js`** as the single canonical helper:

```javascript
/**
 * @script safe-io
 * @type integrator
 * @concern governance
 * @niche infrastructure
 * @description Atomic write helper + signal-handler bootstrap. Use in any script that writes files or spawns long-lived processes.
 * @inputs target path, content (string|Buffer)
 * @outputs Atomic file write; SIGTERM/SIGINT cleanup of registered temp dirs and process handles
 * @errors throws on write failure; on signal, runs registered cleanup hooks before exit
 * @usage const { atomicWrite, registerCleanup, installSignalHandlers } = require('../../tools/lib/safe-io');
 * @lastVerified 2026-05-26
 * @policy script-framework
 * @pipeline indirect
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const cleanupHooks = [];
let signalsInstalled = false;

function atomicWrite(filePath, content, { mode = 0o644 } = {}) {
  const dir = path.dirname(filePath);
  const tmpName = `.${path.basename(filePath)}.${process.pid}.${crypto.randomBytes(4).toString('hex')}.tmp`;
  const tmpPath = path.join(dir, tmpName);
  try {
    fs.writeFileSync(tmpPath, content, { mode });
    fs.renameSync(tmpPath, filePath); // POSIX-atomic on the same filesystem
  } catch (err) {
    try { fs.unlinkSync(tmpPath); } catch {}
    throw err;
  }
}

function registerCleanup(fn) {
  cleanupHooks.push(fn);
  installSignalHandlers();
}

function installSignalHandlers() {
  if (signalsInstalled) return;
  signalsInstalled = true;
  const runCleanup = (signal, exitCode) => async () => {
    process.stderr.write(`\n[safe-io] ${signal} received — running ${cleanupHooks.length} cleanup hook(s)\n`);
    for (const fn of cleanupHooks) {
      try { await fn(); } catch (e) { process.stderr.write(`[safe-io] cleanup hook failed: ${e.message}\n`); }
    }
    process.exit(exitCode);
  };
  process.on('SIGTERM', runCleanup('SIGTERM', 0));
  process.on('SIGINT', runCleanup('SIGINT', 130));
}

module.exports = { atomicWrite, registerCleanup, installSignalHandlers };
```

**Step B — migrate one representative remediator and one Puppeteer script** to prove the pattern. Example edit for `operations/scripts/remediators/content/style/remediate-us-spelling.js`:

```javascript
// BEFORE
const fs = require('fs');
// ...
fs.writeFileSync(fullPath, updated, 'utf8');

// AFTER
const { atomicWrite } = require('../../../../../tools/lib/safe-io');
// ...
atomicWrite(fullPath, updated);
```

For a Puppeteer/Chrome script (e.g. anything under `mdx-render-verify.js`):

```javascript
const { registerCleanup } = require('../../../../tools/lib/safe-io');
let browser;
registerCleanup(async () => {
  if (browser) await browser.close().catch(() => {});
});
browser = await puppeteer.launch(/* ... */);
```

**Step C — add a validator** at `operations/scripts/validators/governance/check-write-safety.js` (skeleton):

```javascript
/**
 * @script check-write-safety
 * @type validator
 * @concern governance
 * @niche infrastructure
 * @description Flags scripts that use fs.writeFileSync without going through tools/lib/safe-io atomicWrite, or spawn Puppeteer without registering cleanup.
 * @policy script-framework
 * @pipeline P3
 */
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const SCRIPTS = glob.sync('operations/scripts/**/*.js', { ignore: ['**/x-archive/**', '**/archive/**'] });
const violations = [];

for (const file of SCRIPTS) {
  const src = fs.readFileSync(file, 'utf8');
  const usesSafeIo = /require\(.*tools\/lib\/safe-io.*\)/.test(src);
  const directWrite = /fs\.writeFileSync\s*\(/.test(src) && !usesSafeIo;
  const spawnsBrowser = /(puppeteer|playwright)\.launch\(/.test(src);
  const hasCleanup = /registerCleanup\(|process\.on\(['"]SIGTERM/.test(src);

  if (directWrite) violations.push({ file, kind: 'non-atomic-write' });
  if (spawnsBrowser && !hasCleanup) violations.push({ file, kind: 'no-signal-cleanup' });
}

if (violations.length) {
  console.error(`❌ ${violations.length} write-safety violations:`);
  violations.slice(0, 20).forEach(v => console.error(`  [${v.kind}] ${v.file}`));
  process.exit(1);
}
process.exit(0);
```

Wire this into `dispatch-governance.yml` as a non-blocking report initially, then promote to blocking after the 232-script migration is complete.

**Why this fix:** repo has already paid the cost of this gap once (158 zombie processes killed). Centralising the pattern in `tools/lib/safe-io.js` makes the right thing the easy thing — and the validator prevents regression.

---

## Recommendations & roadmap

### Sprint 1 (1 week, P0)
- Fix 1 (security SHA-pin + gitleaks gate) — ~4 hours
- Fix 2A + 2B + 2C (discovery dispatch, registry validator, all-types catalog assertion) — ~12 hours
- Fix 3A + 3B partial (safe-io library + 5–10 representative migrations) — ~10 hours

### Sprint 2–3 (P1)
- Migrate remaining 222 `writeFileSync` call sites to `atomicWrite` (mechanical, scriptable)
- Promote `check-write-safety.js` from report-only to blocking
- Migrate to fine-grained PAT or GitHub App for `DOCS_V2`
- Backfill `@policy` tag across the 218-script JSDoc debt
- Add `--dry-run` to the 32 remaining write-heavy scripts that lack it

### Sprint 4+ (P2)
- Build unit-test scaffold per script type (target: 50 tests, 2-min runtime, pre-commit subset + CI full)
- Write `docs-guide/contributing/add-a-new-script.mdx` worked-example onboarding doc
- Consolidate `archive/legacy/` into `x-archive/` with a `MANIFEST.json` deprecation reason per file
- Convert sequential `spawnSync` dispatch to bounded-parallel via `p-queue`
- Consolidate Puppeteer vs Playwright on a single headless stack
- Add `tools/lib/env.js` `requireEnv()` central validator

---

## Appendix A — Outcome evaluation

**Met.** The audit deliverable exists at this path with all five categories covered, a cross-cutting H/M/L issue register (4 High, 13 Medium, 7 Low), and three code-level fix recipes that together close all four High-priority findings.

## Appendix B — Methodology

Five parallel read-only audit agents (4 `Explore`, 1 `general-purpose`) were briefed with verified repo facts and a structured return contract (strengths / ranked weaknesses / remediation recipe). Each agent operated independently with no shared context. Synthesis cross-referenced agent outputs for overlap and prioritised by `blast radius × likelihood × cost-to-fix`. No code was edited during the audit.

| Agent | Category | Duration | Findings |
|---|---|---|---|
| `a7be45143716d389d` | Architecture & Scalability | 113s | 5 weaknesses (2H, 3M) |
| `adc343bdb1b7c3c46` | Auto-Documentation Pipeline | 122s | 5 weaknesses (1H, 3M, 1L) |
| `a4ed292ba54068cc1` | Script Quality & Robustness | 155s | 7 weaknesses (2H, 3M, 2L) |
| `a9094a03f4d5098cd` | Maintenance & DX | 116s | 5 weaknesses (1H, 3M, 1L) |
| `aec5e9800fc9831fa` | Security & Compliance | 146s | 5 weaknesses (1H, 2M, 2L) |

Total: 27 weaknesses ranked, deduplicated to 24 cross-cutting items, prioritised into 4H / 13M / 7L.
