# Repo-Docs-as-Infrastructure — Session-1 Synthesis (2026-05-18)

> **Purpose.** Production-ready, product-forward documentation of what *this repo* is, what features it ships, what state each feature is in, and what needs community help. This synthesises seven parallel deep audits — see `01-…` through `07-…` in this folder for the per-domain product audits.
>
> **Scope.** The livepeer/docs repository (branch `docs-v2-dev`) as a docs-as-infrastructure product. Not the rendered content of any page.
>
> **Audience.** Foundation reviewers, OSS contributors, AI agents, and Alison.

> **Companion package.** This synthesis complements (does NOT replace) the parallel artefacts at `workspace/plan/active/REPO-FEATURES-DOCS-AUDIT/`:
> - `docs-guide/decisions/docs-guide-structure.md` — **locked decisions D-DG-01 through D-DG-13** (dated 2026-05-04). These are authoritative.
> - `feature-docs-inventory-and-consolidation-audit.md` — full inventory.
> - `source-of-truth-matrix.md` — per-file canonical owner + target action.
> - `docs-guide-ia-proposal.md` — old → new path map for the D-DG migration (e.g. `docs-guide/features/*` → `docs-guide/reference/features/*`).
> - `archive-deletion-approval-queue.md` — governed deletion queue.
> - `feature-verification-report.md` — verification commands + 2026-05-18 results (9 `lpd test --staged` errors recorded, not hidden).
> - `framework-policy-gap-report.md` — enforcement gaps per framework/policy.
>
> What this synthesis adds: a **product-forward narrative per feature domain** (Sections 1–4 + 7–8) that the inventory/matrix doesn't provide. What the companion package adds: the **locked IA migration plan and per-file action register** that this synthesis defers to in Section 5.

---

## 1. What this repo actually is

Livepeer Docs is not a folder of MDX pages. It is a **self-remediating, ownerless documentation operating system** built on Mintlify, deployed to `docs.livepeer.org`. Three product layers run on top of the publishing platform:

1. **A self-governing repo** with 50 GitHub workflows, 263 operations scripts, 13 published frameworks, 18 policies, 5 standards, a decisions registry, and a 4-part ownerless contract (canonical source + validator + repair path + single gate). Drift on any governed surface is detected, named, and either auto-repaired or filed as backlog. Routine maintenance is OSS-contributable without staff context.
2. **An AI-native distribution surface** with `llms.txt`, `sitemap-ai.xml`, a hosted MCP server at `docs.livepeer.org/mcp`, a Mintlify chat assistant configured by `.mintlify/Assistant.md`, and 6 native agent adapters (Claude, Cursor, Windsurf, Augment, Codex, Copilot) all pointing back to a single `AGENTS.md` baseline.
3. **A contributor toolchain** — the `lpd` Bash CLI as the unified entry point (13 subcommands + 5 group shorthands), 4 in-repo VS Code extensions (component picker, MDX preview, authoring tools, markdown-list helpers), 312 governed VS Code snippets, scoped Mintlify preview that boots in seconds against a 770-page nav, and a `.githooks/` pipeline that enforces the cheap gates locally.

The novelty is not any single piece — it's that policy, runtime configuration, and enforcement are deliberately decoupled: policy lives in `docs-guide/policies/*.mdx`, runtime in `operations/governance/config/*.json`, enforcement in `.githooks/` + `.github/workflows/`. Hooks never embed rule definitions; they read the manifest. That separation is what makes the model contributable.

---

## 2. The six features at a glance

| # | Feature | Lives at | Current state | Headline gap |
|---|---|---|---|---|
| 1 | **AI Features** — `llms.txt`, MCP, chat assistant, agent adapters, 35 skills | `docs-guide/features/ai-features.mdx` + `.claude/` + `.codex/` + adapters | Production with stale automation belt | `llms.txt` + `sitemap-ai.xml` **33 days stale**; hand-maintained skill counts wrong by 11–19 |
| 2 | **UI System** — component library, templates, snippets, style tokens, voice rules | `docs-guide/features/ui-system.mdx` + `snippets/components/` + `style.css` | Production rendering, fragmented narrative | **4 surfaces disagree on component count** (59 / 117 / 118 / 132); page-composition + page-taxonomy "frameworks" are scratch notes |
| 3 | **Automations** — 50 workflows, 263 scripts, 7-prefix taxonomy, `.githooks/` | `docs-guide/features/automations.mdx` + `.github/workflows/` + `operations/scripts/` | Production, taxonomy-compliant | Script-framework spec **out of sync with filesystem** (declares `automations/` that doesn't exist, misses live `interfaces/`); two concern enums in production with no mapping; hook scripts violate their own JSDoc governance |
| 4 | **Data Integrations** — OpenAPI, contracts, releases, exchanges, social feeds, glossary | `docs-guide/features/data-integrations.mdx` + `snippets/data/` + integrators | Mixed: contracts gold-standard, OpenAPI weakest link | **5 OpenAPI specs 2 months stale**, fetcher covers only 2/5; Luma feed silently dead since Mar-18; `contracts-pipeline.mdx` orphaned from nav |
| 5 | **Adaptive Architecture / Ownerless** — the flagship product | `docs-guide/features/adaptive-architecture.mdx` + `operations/governance/` | Production, **partially adopted** | "Ownerless" is only **8 of 28 surfaces** formally ownerless-ready; **218 of ~300 scripts** fail the 11-tag JSDoc; `repo-governance-map.mdx` self-detects its own staleness |
| 6 | **Contributor Tools** — `lpd` CLI, hooks, VS Code extensions, scoped preview | `docs-guide/features/contributor-tools.mdx` + `tools/lpd` + `tools/dev/` + `tools/editor-extensions/` | Production canonical; stale public-facing twin | Public `contribute-to-the-docs.mdx` tells contributors to use `mint dev` directly and references the wrong working branch; public `lpd-cli.mdx` is a 5-line empty stub; `lpd repair` works but is undocumented |

Counts verified live on 2026-05-18: 50 `.github/workflows/*.yml`, 263 scripts under `operations/scripts/`, 35 SKILL.md, 132 components in registry (35 active JSX files + 24 archived = 59 file count), 541 v2 entries in docs.json, ~1,028 active v2 .mdx files.

---

## 3. Per-feature product summary

### 3.1 AI Features

**What contributors and agents get.** Two products from one codebase. *Outward-facing:* a hosted MCP endpoint, an `llms.txt` index, an AI-enriched sitemap, and a Mintlify chat assistant — any MCP-compatible client (Claude, Cursor, Copilot, ChatGPT) can query Livepeer documentation as freshness-stamped authoritative source instead of guessing from old training data. *Inward-facing:* a governed agent runtime where every supported coding tool has a thin native adapter, all rooted in `AGENTS.md`, with 34 active skill templates covering session lifecycle (thread, pm, research, design, build, iterate, close), content pipelines, repo audits, and governance creation. The same governance gates apply to humans and agents.

**Current state.** Production with one weak strut — the automation belt that keeps it honest. `llms.txt` and `sitemap-ai.xml` have no CI hook on `docs.json` changes; both are 33 days stale relative to live nav. Counts in `docs-guide/tooling/ai-tools.mdx` (claims 42 templates and 42 skills) are wrong on both numbers (live: 53 templates, 34 local skills, 53 portable exports). The published `https://docs.livepeer.org/skill.md` URL has no repo source — either aspirational or Mintlify-generated.

**Sharpest community-help opportunities.**
1. Wire `llms.txt` + `sitemap-ai.xml` regen to CI on `docs.json` / `v2/**` change. (P0 — single highest-impact freshness fix.)
2. Replace every hand-maintained skill/template count with generator-emitted output from `generate-ai-skills-indexes.js` + CI assertion on drift.
3. Resolve or document the local-skills vs portable-skills 34→53 divergence.
4. Decide on `skill.md` — implement a generator or strike from public docs.
5. Reconcile `check-agent-docs-freshness.js` canonical path (framework and AGENTS.md point at different paths).

Full audit: `01-ai-features-audit.md` (21 features, 295 lines).

---

### 3.2 UI System

**What contributors get.** A governed, opinionated authoring surface on top of Mintlify. JSX component library (132 named exports across 6 categories), 30+ MDX page and block templates, 8 portable composables, a `--lp-*` CSS-token design system with light/dark fidelity, VS Code snippet expansion for every component and template, and a pre-commit pipeline that enforces voice (UK English, banned words, no em dashes), style tokens (no `outline: none`, no inline-style drift), and 7-tag component JSDoc. The styles fleet-wide remediation cut violations from 3,986 → 74 (98% reduction).

**Current state.** Rendering and enforcement machinery is production-quality; user-facing narrative is fragmented. **Four surfaces disagree on component count**: feature page says 59 (JSX files), framework count table says 118 (hand-authored), public landing says 117 (exports), registry has 132 (the truth). Two voice files (`voice-and-copy.mdx` + `voice-rules.mdx`) publish identical banned-word lists with different metadata. Two "frameworks" under `docs-guide/frameworks/` (`page-composition-framework.mdx` and `page-taxonomy-framework.mdx`) are actually scratch notes — the first is a literal MDX template scaffold with placeholder description "Describe page-structure-template", the second has no frontmatter and typo'd field labels. Several wrapper components live under `snippets/components/displays/` (registry says they're wrappers — folder placement disagrees).

**Sharpest community-help opportunities.**
1. Replace every hand-authored component-count table with generator-emitted block sourced from `component-registry.json`. Single fix across `ui-system.mdx` + `component-framework-canonical.mdx` + public component-library pages.
2. Collapse `voice-rules.mdx` into `voice-and-copy.mdx`; redirect.
3. Fix wrapper-vs-display folder/category mismatch (AccordionGroupList, BasicList, CardCarousel, DisplayCard, DynamicTable).
4. Either rewrite `page-composition-framework.mdx` and `page-taxonomy-framework.mdx` as real frameworks or move them out of `frameworks/`.
5. Lock one canonical pageType enum — today there are three different enumerations across frontmatter.mdx, content-writing.mdx, and the taxonomy-framework scratch notes.

Full audit: `02-ui-system-audit.md` (15 features, 375 lines).

---

### 3.3 Automations

**What the repo gets.** An operating system. The repo is ownerless and self-governed — there is no single human responsible for keeping content fresh, links unbroken, navigation in sync, or generated artefacts aligned with their sources. The automation layer fills that role. Workflow YAML files in `.github/workflows/` are dispatchers only (no business logic). Typed work lives in `operations/scripts/`. Every script declares type/concern/niche via an 11-tag JSDoc header. Pre-commit and pre-push hooks run the hard gates locally — MDX syntax, redirect integrity, no-deletion, Codex branch isolation. PR CI re-runs blocking checks against changed files; scheduled CI runs broad sweeps; manual dispatch covers repair waves. The product promise: ship a change, the automations tell you what's broken and fix what can be fixed deterministically.

**Current state.** Live taxonomy verified: **50 workflows, zero off-taxonomy violations**. 14 validator + 9 generator + 9 integrator + 5 interface + 5 remediator + 5 audit + 3 dispatch. Generate/verify pairs declared as a rule but not yet linted. Multiple governance defects: (a) the script-framework spec declares an `automations/` folder that doesn't exist on disk, and misses the live `interfaces/` folder; (b) two concern enums are in production simultaneously — workflows use 7 (`copy, health, maintenance, discoverability, governance, brand, integrations`), scripts use 4 + extras (`content, components, governance, ai` plus undocumented `copy, maintenance, media`); (c) `.githooks/pre-commit` and `pre-push` use retired JSDoc tags that script-governance.mdx explicitly bans on lines 195-205 — **the hooks violate the governance they enforce**.

**Sharpest community-help opportunities.**
1. **Cherry-pick contract-addresses workflow to docs-v2 and dispatch.** P0 flag from 2026-03-31 — workflow exists only on docs-v2-dev so GitHub Actions never indexed it. Root-cause gap: no design rule requires dispatch verification before "done".
2. **Wire `generate-og-images.js` + `generate-seo.js` into CI.** Two P0 flags from 2026-03-30.
3. **Repair 218 JSDoc-non-compliant script headers** via `repair-script-inventory.js` in graduated waves; extend repair to handle empty `@purpose`/`@niche` and retired tags in hook scripts.
4. **Resolve the concern-enum split** in script-framework + github-actions framework + script-governance policy.
5. **Update `.githooks/pre-commit` and `pre-push`** to use canonical JSDoc tags so they pass the validators they enforce.

Full audit: `03-automations-audit.md` (16 features, 332 lines).

---

### 3.4 Data Integrations

**What the docs get.** Anywhere a number, an address, a release tag, a flag, or a forum post would otherwise rot, an integrator script pulls fresh truth from an external authority, runs a validation pass, and writes a deterministic JSX or JSON dataset under `snippets/data/`. MDX pages import the dataset and render through shared components. No author hand-types an address or a release tag — when they try, the source-of-truth policy and the canonical contracts pipeline catch it.

**Current state.** The contracts pipeline is the gold-standard: daily cron, shadow workflow for verification-only runs, bytecode verification against Arbitrum One and Ethereum Mainnet, health-check artefacts, incident issue creation on failure, publish gate that requires both successful generation and a `--check` rerun. OpenAPI is the weakest link: **5 specs in `api/` last touched 2026-03-18 (2 months stale)**, a one-shot `curl` shell script that only fetches 2 of them, no scheduled workflow, no validation gate. Social feeds: forum/Ghost/YouTube/Discord all refresh together on schedule (2026-04-14 last run); **Luma is silently dead** — `lumaEventsData.jsx` hasn't moved since the initial commit on 2026-03-18, suggesting either upstream API change or workflow trigger failure. `contracts-pipeline.mdx` is the single best deep-dive in the repo on a production pipeline but it is **not registered in docs.json** — orphan page. Legacy `snippets/data/changelogs/contractAddressesData.jsx` is a duplicate of the live pipeline output.

**Sharpest community-help opportunities.**
1. **Expand `fetch-openapi-specs.sh` to cover all 5 specs and schedule it** via a new `integrator-maintenance-update-openapi-specs.yml` gated by `openapi-reference-audit.js --full --strict`.
2. **Wire `generate-glossary.js` into a scheduled pipeline** + add drift validator that fails CI when MDX uses a term absent from the glossary.
3. **Diagnose and revive the Luma feed** (review fetcher logs, patch API contract changes or fix workflow trigger).
4. **Merge `contracts-pipeline.mdx` into `data-integrations.mdx`** as the canonical deep-dive section, or register it in nav.
5. **Remove `snippets/data/changelogs/contractAddressesData.jsx`** legacy duplicate.
6. **Resolve `showcaseData.jsx` vs `showcaseDataPopulated.jsx` duplication.**
7. **Populate or delete `snapshots/CoinGeckoExchanges.json` + `SolidityEmbed.json` placeholders.**

Full audit: `04-data-integrations-audit.md` (11 features, 244 lines).

---

### 3.5 Adaptive Architecture — the flagship feature

**What this repo's adaptive architecture delivers.** A control plane that lets a documentation site of nearly 800 pages keep its own house in order without a standing maintainer interpreting every drift event. Every governed surface declares **canonical source · deterministic validator · exact repair command · single gate layer** (the four-part contract). When any of those four is missing, the surface stays in `advisory` state until the contract is complete. Once complete, an OSS contributor — or an AI agent acting on their behalf — can correct routine drift without privileged context or staff approval.

**The five-stage control loop.** *Detect* via validators (49 scripts); *Explain* via policy documents and printed remediation messages; *Repair* via remediator scripts or `lpd repair`; *Verify* by re-running the validator; *Record* into generated reports, catalogues, or the decision registry. A live example: during this audit, `generate-repo-governance-status.js --check` printed `docs-guide/repo-ops/config/repo-governance-map.mdx is stale.` — the system reliably flags itself but nothing yet auto-runs the repair.

**Current state.** The model is real and enforced for the surfaces under contract. But the universal "ownerless" claim is **partial**: only **8 surfaces are formally ownerless-ready** in `ownerless-governance-surfaces.json`; the wider `repo-governance-surfaces.json` lists **28 surfaces, most still advisory**. Manifests still carry `owner: docs` everywhere; the framework distinction is "ownerless for routine drift, not for policy authorship or destructive operations" — that distinction is consistent with the design but not surfaced in product narrative. Mature subsystems: validators (49), remediators (29), generators (30), audits (21), root-allowlist pipeline, agent governance Phase 9, em-dash/spelling/page-link repair, generated-artifact manifest (29 artefacts). Prototype/stub: `tasks-retention.yml` (workspace TTL is a stub), automated decision-registry enforcement, `repo-governance-map.mdx` regeneration cadence. **218 scripts fail the 11-tag JSDoc compliance** the framework requires — major maturity gap. **307-row v2 cleanup matrix** is recommendation-only — pipeline mature, execution unstarted; `gateways` alone carries 199 rows.

**Sharpest community-help opportunities.**
1. Backfill the 218 non-compliant JSDoc script headers via `repair-script-inventory.js`. Excellent first PR.
2. Wire `--verify` mode into every remediator that lacks it (contract says repair-then-re-check; some only repair).
3. Promote one advisory surface in `repo-governance-surfaces.json` to ownerless-ready. Drafts the missing validator/remediator/repair-command triple, walks the promotion ladder.
4. Execute the first `gateways` v2 cleanup move-wave (199 rows, all documented recommendations).
5. Implement `tasks-retention.yml` for 30/90-day TTL enforcement on `_workspace/`.
6. Add a freshness validator for `docs-guide/features/*.mdx` (detect stale workflow names, moved script roots, TODO markers).

Full audit: `05-adaptive-architecture-audit.md` (23 features, 295 lines).

---

### 3.6 Contributor Tools

**What new contributors get.** They don't have to learn this repo's private maintainer knowledge to ship a high-quality change. `bash lpd setup --yes` installs hooks, dependencies, optionally CLI on PATH, and the Codex planner skill in a single non-interactive step. `lpd doctor` confirms the environment is ready. `lpd dev --scoped --scope-tab <Tab>` boots a filtered Mintlify preview against a 770-page nav in seconds rather than ten minutes. `lpd test --staged` and `lpd ci --skip-browser` run the same checks CI runs, locally. `lpd move-page` does governed file moves with reference rewrites so renames don't leave broken links. The "correct workflow" is, by design, the easiest workflow.

VS Code (and Cursor/Windsurf via the same `.vsix`) gets a bespoke MDX preview extension (`lpd-mdx-preview`, Cmd+Shift+V) that renders the full Livepeer component library — ~50 custom components in styled HTML, 20+ Mintlify built-ins, Mermaid with theme colours, debounced live update on edit, hot-reload on `.jsx` save — without running Mintlify itself. Three companion extensions (component picker, authoring tools, markdown-list) plus 312 governed VS Code snippets across 5 `.code-snippets` files give contributors structured frontmatter pickers, page scaffolds, and copy-ready component blocks.

**Current state.** Canonical surface is production-quality. Internal `docs-guide/contributing/contributing.mdx` (305 lines) is current and correct. `lpd-cli.mdx` is a strong 850-line reference. `lpd-mdx-preview.mdx` is excellent. The **public-facing twin is stale and contradicts the toolchain**: `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` tells contributors to `npm i -g mintlify` + `mint dev` directly (explicitly bypassing `lpd dev`), references `docs-v2-preview` as the working branch (actual is `docs-v2-dev`), and still carries "Non-Technical Contribution Proposal" sections marked "📋 Proposal" / "✅ Partially implementable" — proposal content sitting in a public page for over a month. The public `v2/resources/documentation-guide/tooling/lpd-cli.mdx` is a **5-line empty stub** with just frontmatter — no public CLI reference exists. `lpd repair` is fully implemented in source (`cmd_repair()`) and appears in `lpd help`, but is **completely absent from the canonical CLI reference accordion**. `docs-guide/tooling/dev-tools.mdx` is `status: draft, lastVerified: 2026-03-11`, contains a 50-line embedded JSX comment block of "best-practice options", references snippet counts (17/25/115) that drifted from reality (23/25/113) — should be retired.

**Sharpest community-help opportunities.**
1. **Replace the stale public contribution page** with a public-shaped excerpt of canonical `docs-guide/contributing/contributing.mdx` — correct branch, `lpd` workflow, no proposal sections.
2. **Fill in the public LPD CLI reference** (currently 5-line empty stub).
3. **Retire `docs-guide/tooling/dev-tools.mdx`** — migrate any unique content to `contributor-tools.mdx`, remove the embedded JSX comment block.
4. **Document `lpd repair`** in the canonical CLI reference.
5. **Regenerate the script-catalog table** in `lpd-cli.mdx` from `lpd scripts list --json`.
6. **Deduplicate** `components.code-snippets` (113 prefixes) vs `lp-components.code-snippets` (125 prefixes).
7. **Document the other three VS Code extensions** (authoring-tools, components, markdown-list) at the `lpd-mdx-preview.mdx` level.
8. **Clean up stray duplicates**: `components 2/`, `markdown-list 2/`, `.vscode/livepeer-legacy.code-snippets.bak`.

Full audit: `06-dev-tools-audit.md` (14 features, 320 lines).

---

### 3.7 RFP report and Internal tab

**State.** The RFP report (`v2/internal/rfp/reports/livepeer-docs-v2-report.md`) is a 1,149-line evidence-backed audit dated 2026-02-21. Structurally sound (engagement timeline, stakeholder map, time matrix, RFP completion matrix all valid as historical record) but **every quantitative count and many path references are now demonstrably stale**. The five `rfp/*.mdx` companion pages range from rich-but-stale (aims, problem-statements) to **empty body shells** (outcomes.mdx, deliverables.mdx are frontmatter-only). The Internal tab is incomplete: `definitions.mdx`, `ecosystem.mdx`, `references.mdx`, `overview/strategic-alignment.mdx` are skeletal. `personas.mdx` promises 4 personas, delivers 1 (Developer only — Gateway Operator, Orchestrator, Delegator missing entirely).

**Numbers refresh (old → new, live as of 2026-05-18):**

| Claim | RFP report value (2026-02) | Live (2026-05-18) | Evidence |
|---|---|---|---|
| Operations scripts | **58** | **263** | `find operations/scripts \( -name "*.js" -o -name "*.sh" -o -name "*.py" \) \| wc -l` |
| GitHub workflows | **17** | **50** | `ls .github/workflows/*.yml \| wc -l` |
| AI skills (SKILL.md) | 0 / not mentioned | **35** | `find ai-tools/ai-skills -name SKILL.md \| wc -l` |
| Total v2 .mdx (active) | not stated | **1,028** | `find v2 -name "*.mdx" ! workspace/archive paths \| wc -l` |
| docs.json registered v2 routes | not stated | **541** | `grep -c '"v2/' docs.json` |
| Active JSX components | not stated | **35** active + 24 archived = 59 file count, 132 registry exports | per UI audit |
| Top-level tabs | 9 (Home, About, Platforms, Developers, Gateways, GPU Nodes, Delegators, Community, Resource HUB) | 10 (home, about, community, delegators, developers, gateways, internal, orchestrators, resources, solutions) + stray `developers1/2` | `find v2 -maxdepth 1 -type d` |
| v2 IA prefix system | "numbered prefix 00_home → 09_internal" | Removed; flat tab-named | Live tree |

**Substantial 2026-Q1+Q2 work missing from the report.** Ownerless governance spine; 35 AI skills under `ai-tools/ai-skills/`; expanded agent adapters (.codex, .augment); cross-agent packager; governance map generator + weekly repair; 11-tag JSDoc script framework + 7-tag component framework; styles governance pipeline (3,986 → 0 non-mermaid violations); UK spelling + em-dash zone-aware remediators; `/propagate` skill + move-detect hook; Asset Pipeline (PR #851); Changelog Pipeline (24 targets, 19 pages — report says Cancelled); Gateways Verify/Monitor/Connect built or shipping; GitHub Actions governance 7-phase framework; Zombie process prevention; Docs Library (8 pages).

**RFP 4 deliverables — actual completion state.**
1. **Documentation Strategy** — Complete (historical).
2. **Content Rewrites** — Complete in shape, in active refinement (10 tabs, 307-row cleanup backlog).
3. **v1 Live + redirects + SEO/AEO/WCAG/analytics/i18n** — Mostly complete: v1 + version switcher live, SEO expanded, AEO partial (no CI gate), WCAG audited + partially repaired (was "needs Alison input" in report), Analytics partial, i18n partial (switcher live, no published translations).
4. **Public maintenance workflow** — Substantially advanced beyond report: style guide extended, contribution workflow + agent governance + native adapters, ownerless governance model formalised, CODEOWNERS still in place, decision registry added, 8 issue templates still live with auto-label/auto-assign.

Full audit: `07-rfp-internal-audit.md` (17 pages audited, 263 lines).

---

## 4. Cross-cutting patterns

Five patterns appear across every domain. They are the real consolidation work.

### 4.1 Claims drift from live state

Every feature page makes counts and path claims that have drifted. Documented vs live:

| Domain | Doc claim | Live reality |
|---|---|---|
| AI | "42 templates / 42 skills" in `docs-guide/tooling/ai-tools.mdx` | 53 templates, 34 local SKILL.md, 53 portable exports |
| AI | `llms.txt` + `sitemap-ai.xml` fresh | 33 days stale relative to `docs.json` |
| AI | Public `skill.md` artefact | No repo source — file does not exist |
| UI | 59 components (feature page) | 132 in registry; 117 published exports; 35 active files |
| UI | "118 total components" (framework table) | 132 in registry |
| Automations | Script taxonomy includes `automations/` folder | Folder does not exist; `interfaces/` exists but undocumented |
| Automations | `automations.mdx` "50 workflows" prefix counts | All accurate ✓ |
| Data | OpenAPI specs maintained | All 5 specs last touched 2026-03-18 (2 months stale) |
| Data | Luma feed scheduled | Hasn't refreshed since 2026-03-18 |
| Adaptive | Repo is "ownerless" universally | 8 of 28 surfaces formally ownerless-ready |
| Adaptive | `repo-governance-map.mdx` current | Self-detects stale via `--check` |
| Contributor Tools | `lpd-cli.mdx` script-catalog table | "Pre-2026-03-21 layout" per the page itself |
| Contributor Tools | Snippet counts in `dev-tools.mdx` (17/25/115) | Live: 23/25/113 |
| RFP | "58 scripts, 17 workflows" | 263 scripts, 50 workflows |
| RFP | `v2/pages/NN_*` paths throughout | Flat tab-named, numbered prefixes removed |

**Pattern fix:** every count or path in every feature page should either link to a generated catalogue or be replaced by a generator-emitted block at build time. Hand-maintained inventories are the root cause; the catalog generators already exist.

### 4.2 Governance specs out of sync with their own filesystem

Several "framework" or "policy" documents describe a structure that no longer matches the live filesystem:

- **Script framework** declares `operations/scripts/automations/` (doesn't exist) and omits `operations/scripts/interfaces/` (8 live scripts).
- **Component framework** count table claims 118 components; registry exports 132. Counts hand-authored, never regenerated.
- **`page-composition-framework.mdx` and `page-taxonomy-framework.mdx`** sit under `docs-guide/frameworks/` but the first is a literal template scaffold ("Describe page-structure-template") and the second has no frontmatter and contains typo'd field labels — they are scratch notes, not frameworks.
- **`docs-guide/policies/quality-gates.mdx`** references legacy workflow filenames (test-suite.yml, broken-links.yml, openapi-reference-validation.yml) that predate the D-ACT-04 rename to `validator-*` / `audit-*` prefixes.
- **`check-agent-docs-freshness.js`** is referenced at two different paths in `agent-governance-framework.mdx` vs `AGENTS.md`.

**Pattern fix:** every framework that names paths or counts should run a verifier in CI. A "framework freshness" validator that scans `docs-guide/frameworks/**` and `docs-guide/features/**` for path references and counts, then asserts they exist or match.

### 4.3 Three-surface duplication (docs-guide / v2/internal / v2/resources/documentation-guide)

Three audience surfaces exist for similar content — intentionally — but content has bled across them with drift:

| Topic | Internal-canonical | Public-facing twin | Internal-only |
|---|---|---|---|
| AI features | `docs-guide/features/ai-features.mdx` (terse) | `v2/resources/documentation-guide/ai-automations/ai-features.mdx` (rich recipes) | — |
| Voice rules | `docs-guide/standards/voice-and-copy.mdx` | `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` (re-implements same rules) | also `docs-guide/standards/voice-rules.mdx` (duplicate) |
| Authoring standard | `docs-guide/standards/authoring-standard.mdx` (67-line gateway) | `v2/resources/documentation-guide/copy-style/authoring-standard.mdx` (full 432-line spec) | also `docs-guide/_workspace/livepeer_production_authoring_standard_2026.md` |
| LPD CLI | `docs-guide/tooling/lpd-cli.mdx` (850 lines, current) | `v2/resources/documentation-guide/tooling/lpd-cli.mdx` (5-line empty stub) | — |
| Contribute to docs | `docs-guide/contributing/contributing.mdx` (305 lines, current) | `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` (770 lines, contradicts canonical) | — |
| RFP report | — | — | `v2/internal/rfp/report.mdx` + `livepeer-docs-v2-report.md` |
| Domain terms table | `docs-guide/standards/voice-and-copy.mdx` AND `docs-guide/standards/naming-conventions.mdx` | — | also in `.claude/CLAUDE.md` |

**Pattern fix:** declare an explicit transclusion contract. `docs-guide/` is the single source of truth for governance-grade content. `v2/resources/documentation-guide/` should be a slim *public-shaped* surface that links into the canonical, never re-implements. `v2/internal/` is the project-internal record (RFP, philosophy, personas) — strictly internal audience.

### 4.4 Persistent incomplete features

These features are documented as production but are not. They form the longest list of community-help opportunities:

| Feature | State | Doc claims |
|---|---|---|
| `skill.md` public artefact | Doesn't exist | Documented as published |
| `generate-og-images.js` in CI | Manual-only | Production |
| `generate-seo.js` in CI | Manual-only | Production |
| `generate-glossary.js` in pipeline | Manual annotation in feature page | Designed pipeline |
| `generate-api-docs.sh` in pipeline | Manual annotation | Designed pipeline |
| OpenAPI fetcher | Covers 2/5 specs, no schedule | Production |
| Luma feed | Silently dead since 2026-03-18 | One of seven scheduled feeds |
| `tasks-retention.yml` | Stub | Documented workflow |
| `update-contract-addresses.yml` | Never dispatched | Documented |
| 218 scripts | Fail 11-tag JSDoc | Framework requires it |
| 307-row v2 cleanup matrix | Recommendation-only | Pipeline mature |
| 24 archived JSX components | No removal schedule | "Lifecycle states" documented |
| 4 personas (Gateway/Orch/Delegator) | Missing | `personas.mdx` promises 4 |
| Internal tab pages (outcomes, deliverables, definitions, ecosystem, references, strategic-alignment) | Empty stubs or skeletal | Nav-registered |
| 38 archived workflow residue | Split across `deprecated/` and `x-archive/` | One archive path per framework |
| Audit → issue automation | "Act" stage missing | Pattern D documented |

**Pattern fix:** every "documented but not implemented" item should either ship or be retracted. Today they create a credibility gap — readers can't tell which features are real.

### 4.5 Self-violation: tools that don't follow their own rules

The most surprising pattern:

- **`.githooks/pre-commit` and `pre-push` use retired JSDoc tags** (`@category`, `@domain`, `@needs`, `@purpose-statement`) that `docs-guide/policies/script-governance.mdx` explicitly bans on lines 195-205. The hooks that enforce JSDoc compliance violate the JSDoc spec.
- **`v2/resources/documentation-guide/copy-style/authoring-standard.mdx`** uses US spelling ("labelled", "speculative roadmap claims") despite enforcing UK English.
- **`docs-guide/policies/quality-gates.mdx`** references legacy workflow filenames after the D-ACT-04 rename — a policy page that predates its own enforcement layer.
- **`docs-guide/features/contracts-pipeline.mdx`** is the best deep-dive on a production pipeline but is **not in nav** — orphaned from the system it documents.

**Pattern fix:** every governance doc should pass the validator it enforces. Add a `--strict` check that runs the governance docs through their own validators.

---

## 5. Consolidation plan for `docs-guide/`

The user's brief proposed 6 feature pages. Five of the six already exist under `docs-guide/features/` and are current. The work is **validate, consolidate, and rewrite for product-forward narrative**, not "build from scratch."

### 5.0 Alignment with locked D-DG decisions

The locked decisions in `docs-guide/decisions/docs-guide-structure.md` (D-DG-01 through D-DG-13, dated 2026-05-04) **supersede the path recommendations in this section** wherever they conflict. Specifically:

| Decision | Implication for this section |
|---|---|
| D-DG-02 / D-DG-03 | `docs-guide/features/` migrates under `docs-guide/reference/features/`. Same for `tooling/`, `repo-ops/`, `docs-library/`. Future paths use the `reference/` prefix; this section uses the current paths because the migration is route-approved separately. |
| D-DG-04 | `docs-guide/canonical/frontmatter.md` (legacy stub) is queued for governed deletion. |
| D-DG-05 | `docs-guide/config/*.json` registries move under `operations/governance/config/`. |
| D-DG-06 | `docs-guide/source-of-truth-guide.mdx` + `docs-guide/policies/governance-index.mdx` merge into `docs-guide/index.mdx`; old routes redirect. |
| D-DG-07 | Mandatory docs-guide frontmatter contract — `authority`, `consumer`, `maintenance`, `status`, `lastVerified`, `owner`. **Not yet enforced** — `check-docs-guide-contract.js` is a build target (gap-report item). |
| D-DG-08 | `docs-guide/frameworks/component-governance.mdx` and `docs-guide/policies/script-governance.mdx` are **retired duplicates** after reference propagation. |
| D-DG-09 | `ai-tools-governance.mdx` → `ai-tools-framework.mdx`; `agent-governance-framework.mdx` → `agent-governance-policy.mdx`. |
| D-DG-10 | Per-surface freshness thresholds move into ownerless surface config. **Not yet implemented.** |

Every per-file recommendation in 5.1–5.7 below **defers to the matrix** in `workspace/plan/active/REPO-FEATURES-DOCS-AUDIT/source-of-truth-matrix.md` where the matrix names a specific action. This synthesis adds the product-forward "what's incomplete / community-help" framing to those actions; it does not re-decide them.

**Live count corrections (per parallel package, 2026-05-18):** workflows 55 (not 50), scripts 264 (not 263), skills 35 (not 34). Use these going forward.

### 5.1 Feature pages

### Feature pages — recommended state after consolidation
(All paths shown at current locations; per D-DG-02/03 they migrate under `docs-guide/reference/features/` post-route-approval)

| Page | Status | Recommendation |
|---|---|---|
| `features/feature-map.mdx` | Current, strong spine | **Keep.** Add one row per feature with current state + community-help count. |
| `features/ai-features.mdx` | Current; gaps named | **Rewrite product-forward** per audit outline. 250-350 lines. Replace hand-maintained counts with generator output. |
| `features/ui-system.mdx` | Current; counts stale | **Rewrite** with registry-sourced counts, link to frameworks + standards + catalogs. |
| `features/automations.mdx` | Current; counts accurate | **Update** to consolidate the 7×7 type×concern matrix; surface the gaps (cherry-pick, manual generators, 218 scripts). |
| `features/data-integrations.mdx` | Current; covers 11 families | **Rewrite** to fold in `contracts-pipeline.mdx` as a section; add Solution-scoped feeds; flag OpenAPI as P0 gap. |
| `features/adaptive-architecture.mdx` | Current; flagship | **Rewrite** as "Self-Remediating Docs Infrastructure" with one walk-through example, ownerless-ladder, and honesty about "ownerless for routine drift, not policy." 350-500 lines. |
| `features/contributor-tools.mdx` | Current; gaps named | **Update** with `lpd repair`, the four VS Code extensions, MCP config, snippets reconciliation. |
| `features/gap-analysis.mdx` | Current; 2026-05-14 | **Auto-populate** from `workspace/reports/repo-ops/SCRIPT_AUDIT.json` + governance-map check + cleanup matrix. Don't hand-author. |
| `features/contracts-pipeline.mdx` | Orphan (not in nav) | **Merge into `data-integrations.mdx`** as the canonical deep-dive subsection. Delete the orphan. |
| `features/architecture-map.mdx` | Redundant with feature-map | **Merge into `feature-map.mdx`**. The two overlap; one canonical map. |
| `features/visual-explainer-workflows.mdx` | Narrow scope (one pilot tool) | **Move to `docs-guide/tooling/`** or archive. Doesn't belong as a top-level feature. |

### Frameworks (`docs-guide/frameworks/`)

| File | Status | Recommendation |
|---|---|---|
| `ai-tools-governance.mdx` | Current | Keep |
| `component-framework-canonical.mdx` | Current; counts stale | Update — registry-sourced counts |
| `component-governance.mdx` | Current; 6-vs-7 field count drift | Update — reconcile with canonical |
| `content-system.mdx` | Read for status | Verify |
| `content-writing.mdx` | Read for status | Verify |
| `doc-item-model.mdx` | Read for status | Verify |
| `file-placement.mdx` | Read for status | Verify |
| `github-actions.mdx` | Current; concern enum split | Update — declare one enum or publish mapping |
| `page-composition-framework.mdx` | Scratch notes | **Rewrite as real framework or relocate to `_workspace/`** |
| `page-taxonomy-framework.mdx` | Scratch notes | **Rewrite as real framework or relocate to `_workspace/`** |
| `repo-structure.mdx` | Read for status | Verify |
| `research-skill-workflow.mdx` | Read for status | Verify |
| `script-framework.mdx` | Current; out of sync with FS | Update — declare `interfaces/`, remove `automations/` or restore the folder |
| `styles-engineering-guide.mdx` | Current | Keep |

### Standards (`docs-guide/standards/`)

| File | Recommendation |
|---|---|
| `authoring-standard.mdx` | Keep as canonical gateway. Reconcile with the v2 "full standard" — pick one as the published authoritative spec. |
| `frontmatter.mdx` | Keep. Lock one pageType enum across the repo. |
| `naming-conventions.mdx` | Keep. Remove domain-term table duplication (single source elsewhere). |
| `voice-and-copy.mdx` | Keep as canonical |
| `voice-rules.mdx` | **Collapse into `voice-and-copy.mdx`** and replace with one-line redirect |

### Policies (`docs-guide/policies/`)

Keep all. These are the most mature governance surface. Light edits only — refresh `quality-gates.mdx` workflow filename references; reconcile `agent-governance-framework.mdx` `check-agent-docs-freshness.js` path.

### Tooling (`docs-guide/tooling/`)

| File | Recommendation |
|---|---|
| `ai-tools.mdx` | Update — replace hand-maintained counts with generator output |
| `dev-tools.mdx` | **Retire** — status: draft, stale 2026-03-11; migrate unique content to `contributor-tools.mdx` |
| `lpd-cli.mdx` | Update — document `lpd repair`, regenerate script-catalog table |
| `lpd-mdx-preview.mdx` | Keep — strong already |
| `content-brief-template.md`, `research-*-template.md`, `review-packet-plan-template.md` | Keep as templates |

### Catalogs (`docs-guide/catalog/`)

Keep all. **Regenerate every stale catalog** (templates-catalog and ui-templates last regenerated 2026-04-03 — 6 weeks stale). Add a CI workflow that regenerates on touched source paths.

### Contributing (`docs-guide/contributing/`)

Keep all 5 pages. Expand `git-hooks.mdx` to include the full hook inventory (not just pre-commit/pre-push). Expand `agent-instructions.mdx` from its current 30-line pointer to a contributor-onboarding entry.

### v2/resources/documentation-guide/ (public surface)

| Page | Recommendation |
|---|---|
| `documentation-guide.mdx`, `documentation-overview.mdx` | Keep as public landing |
| `ai-automations/*` (3 pages) | **Slim to public-shaped excerpts** that link back to `docs-guide/features/ai-features.mdx` |
| `component-library/*` (8 pages) | Keep as the public component reference. Regenerate to fix count drift. |
| `copy-style/style-guide.mdx` | Keep as public style guide (update `--accent` aliases to canonical `--lp-*`) |
| `copy-style/authoring-guide.mdx` | Keep as public authoring guide (remove per-audience tables — link to `docs-guide/standards/voice-and-copy.mdx`) |
| `copy-style/authoring-standard.mdx` | **Choose one canonical home** — either keep as public standard and demote docs-guide/standards/authoring-standard.mdx to redirect, or vice versa |
| `contributing/contribute-to-the-docs.mdx` | **Rewrite** to use lpd workflow, correct branch, remove proposal sections |
| `features/docs-features-and-ai-integrations.mdx` | Keep as public reader-facing feature intro |
| `tooling/lpd-cli.mdx` | **Fill in** (currently 5-line empty stub) |
| `tooling/snippets-inventory.mdx` | Keep |

### v2/internal/ (internal-only)

| Page | Recommendation |
|---|---|
| `rfp/aims.mdx`, `rfp/problem-statements.mdx` | **Refresh** — replace `v2/pages/NN_*` paths and bare counts; add "Delivered since handover" subsections |
| `rfp/outcomes.mdx`, `rfp/deliverables.mdx` | **Remove from nav** (empty stubs). `rfp/report.mdx` already serves the deliverable matrix |
| `rfp/report.mdx` | Update StyledTable status entries (Changelog Cancelled → Partial; Tutorials Incomplete → Completed; WCAG audited) |
| `rfp/reports/livepeer-docs-v2-report.md` | **Append Part 13 addendum** with 2026-02 → 2026-05 work; preserve original historical record |
| `internal-overview.mdx` vs `overview/about.mdx` | **Collapse to one** — duplicate landing pages |
| `overview/personas.mdx` | **Finish** the missing Gateway Operator, Orchestrator, Delegator personas |
| `overview/governance.mdx` | Refresh `v2/pages/NN_*` paths in Section Owners table |
| `overview/governance-pipeline.mdx` | Update 214 → live script count |
| `overview/strategic-alignment.mdx` | **Populate or remove** (skeleton only) |
| `definitions.mdx`, `ecosystem.mdx`, `references.mdx` | **Populate or remove** (empty/skeletal) |
| `reports/` | Archive — 36 historical audit files; condense to a single index + retention rule |

### workspaces (root `workspace/` + `v2/_workspace/`)

These are project working folders, not features. Per workspace-lifecycle-policy: 30-day TTL on `notes/drafts/research/reviews/`; 90-day on `archive/`. **Action:** implement the `tasks-retention.yml` workflow to enforce TTL automatically. Until then, the 27 active plans surfaced in session state are recommendation-only.

Background workspace inventory (separate agent run) flagged 93 curated REPO-META files. Top promotion candidates already accounted for in `docs-guide/features/` and `docs-guide/frameworks/` (script-framework, component-framework, AI-tools governance). No additional promotions urgent.

---

## 6. RFP refresh plan

**Phase 1 (P0, this week) — Stop the bleed.** Six pages render as broken delivery:
1. `v2/internal/rfp/outcomes.mdx` — populate or remove from nav.
2. `v2/internal/rfp/deliverables.mdx` — remove from nav (recommend); `report.mdx` already serves the matrix.
3. `v2/internal/definitions.mdx`, `ecosystem.mdx`, `references.mdx` — populate or remove from nav.
4. `v2/internal/overview/strategic-alignment.mdx` — populate or remove.
5. `v2/internal/overview/governance.mdx` — fix `v2/pages/NN_*` paths in Section Owners table; bump last-updated.
6. `v2/internal/overview/personas.mdx` — add the 3 missing personas (Gateway Operator, Orchestrator, Delegator) using Developer as template.

**Phase 2 (P0, next) — Refresh canonical record.** Append **Part 13: Updates 2026-02-21 → 2026-05-18** to `livepeer-docs-v2-report.md`. *Don't overwrite history* — append the refresh so the original record stays auditable. Contents:
- Number refresh table (58→263 scripts, 17→50 workflows, 0→35 AI skills, 9→10 tabs, etc.).
- 2026 Q1–Q2 work delivered (ownerless governance, decisions registry, propagate skill, styles governance, asset pipeline, changelog pipeline, gateways verify/monitor/connect, AI skills, em-dash + UK spelling sweep, zombie prevention, docs-library).
- Re-graded RFP completion matrix rows (Changelog Cancelled → Partial; Tutorials Incomplete → Completed; WCAG needs-input → audited).

**Phase 3 (P0) — Refresh aims + problem-statements.** Global find-replace `v2/pages/NN_*` → `v2/<tab>/` paths. Replace bare counts with link to live catalogue. Add "Delivered since handover" subsections. Bump `lastVerified: 2026-05-18`.

**Phase 4 (P1) — Surface new infrastructure to Foundation reviewers.** Add a single page `v2/internal/rfp/post-handover-summary.mdx` summarising what was delivered between handover (Feb 2026) and now — not as new RFP work, but as ongoing stewardship.

**Phase 5 (P1) — Collapse duplicates.** Pick one canonical landing between `internal-overview.mdx` and `overview/about.mdx`. Reconcile `governance-pipeline.mdx` script count.

---

## 7. Community-help index

Eighty-plus specific, file-pathed, acceptance-criterion'd opportunities across the seven sub-audits. The top 25 by leverage, grouped by domain:

### AI Features (5)
1. Wire `llms.txt` + `sitemap-ai.xml` regen to CI on `docs.json` / `v2/**` change. **P0.**
2. Replace hand-maintained skill/template counts in `docs-guide/tooling/ai-tools.mdx` with generator output; CI assertion on drift.
3. Resolve `skill.md` — implement generator or strike from `v2/resources/documentation-guide/ai-automations/ai-features.mdx`.
4. Reconcile `check-agent-docs-freshness.js` canonical path between `agent-governance-framework.mdx` and `AGENTS.md`.
5. Trim `.claude/CLAUDE.md` toward thin-adapter target (≤200 lines, no policy duplicated from AGENTS.md).

### UI System (5)
6. Replace hand-authored component count tables across `ui-system.mdx`, `component-framework-canonical.mdx`, public component-library pages with generator-emitted blocks from `component-registry.json`.
7. Collapse `docs-guide/standards/voice-rules.mdx` into `voice-and-copy.mdx`.
8. Fix wrapper-vs-display folder/category mismatch (AccordionGroupList, BasicList, CardCarousel, DisplayCard, DynamicTable).
9. Rewrite `page-composition-framework.mdx` and `page-taxonomy-framework.mdx` as real frameworks or relocate them out of `frameworks/`.
10. Lock one canonical `pageType` enum and propagate across frontmatter.mdx, content-writing.mdx, authoring-guide.mdx.

### Automations (5)
11. **Cherry-pick `integrator-maintenance-update-contract-addresses.yml` to docs-v2** and dispatch with `--dry-run`. P0 from 2026-03-31.
12. **Wire `generate-og-images.js` + `generate-seo.js` into CI.** Two P0 from 2026-03-30.
13. Repair 218 non-compliant JSDoc script headers via graduated `repair-script-inventory.js` waves.
14. Resolve the concern-enum split — declare one enum or publish a mapping table across script-framework, github-actions framework, and script-governance.
15. Update `.githooks/pre-commit` and `pre-push` to use canonical JSDoc tags so they pass the validators they enforce.

### Data Integrations (5)
16. Expand `fetch-openapi-specs.sh` to cover all 5 specs and schedule it as a new `integrator-maintenance-update-openapi-specs.yml` workflow.
17. Diagnose and revive the Luma feed (silently dead since 2026-03-18).
18. Wire `generate-glossary.js` and `generate-api-docs.sh` into scheduled pipelines.
19. Remove legacy `snippets/data/changelogs/contractAddressesData.jsx` duplicate.
20. Resolve `showcaseData.jsx` vs `showcaseDataPopulated.jsx` duplication.

### Adaptive Architecture (3)
21. Promote one advisory surface in `repo-governance-surfaces.json` to ownerless-ready (drafts validator/remediator/repair-command triple, walks the promotion ladder).
22. Implement `tasks-retention.yml` for 30/90-day TTL enforcement on `_workspace/`.
23. Execute the first `gateways` v2 cleanup move-wave (199 of 307 backlog rows).

### Contributor Tools (4)
24. **Replace stale public `contribute-to-the-docs.mdx`** with a public-shaped excerpt of canonical contributing.mdx (correct branch, `lpd` workflow).
25. **Fill in public `v2/resources/documentation-guide/tooling/lpd-cli.mdx`** (currently 5-line stub).

(Full list of 80+ items lives in the 7 sub-audit files. Each item has a file path and acceptance criterion suitable for a community PR.)

---

## 8. Major product/dev-facing features summary

Reusable as the lede for `docs-guide/index.mdx`, the RFP refresh, or a public "What this repo is" page:

> **Livepeer Docs is a self-remediating, ownerless documentation operating system.** It ships nine things contributors, agents, and the Foundation can rely on:
>
> 1. **A governed publishing surface** on Mintlify — 1,028 v2 .mdx pages, 541 routed entries in docs.json, a 770-page nav, light/dark theme fidelity, WCAG-compliant focus behaviour, scoped previews that boot in seconds.
> 2. **A 132-component JSX library** with 7-tag JSDoc governance, generator-emitted catalogs, registry-driven VS Code snippets, and 3,986 → 0 non-mermaid styling violations.
> 3. **A 50-workflow automation belt** on a 7-prefix taxonomy (validator/generator/integrator/remediator/audit/dispatch/interface), 263 typed scripts, and zero off-taxonomy violations.
> 4. **A 4-part ownerless-governance contract** (canonical source + validator + repair path + single gate layer) covering 8 production surfaces, with 28 more surfaces in the broader registry. Drift on any contracted surface is detected, named, and auto-repaired or filed as backlog.
> 5. **An AI-native distribution surface** — `llms.txt`, AI-enriched sitemap, hosted MCP at `docs.livepeer.org/mcp`, Mintlify chat assistant, and 6 native agent adapters (Claude, Cursor, Windsurf, Augment, Codex, Copilot) all rooted in one `AGENTS.md`.
> 6. **A 34-skill canonical skill system** covering session lifecycle, content pipelines, repo audits, and governance creation — portable across agents via the cross-agent packager.
> 7. **A `lpd` Bash CLI** as the unified contributor entry point — 13 subcommands plus group shorthands, JSON envelope output, dry-run support, hooks/repair/move-page/scoped-preview/staged-test all in one tool.
> 8. **4 in-repo VS Code extensions** including a custom MDX preview that renders the full Livepeer component library without running Mintlify, distributed via `.vsix` packages that install in VS Code, Cursor, or Windsurf.
> 9. **A 1,149-line evidence-backed RFP audit** + framework spine (13 frameworks, 18 policies, 5 standards, decisions registry) that establishes "Documentation is Infrastructure" as the operating thesis for the engagement.
>
> Three product-grade pipelines are gold-standard: **contracts** (daily cron with shadow verification and bytecode auth against Arbitrum + Ethereum), **styles** (audit + remediator + CI workflow with `--verify` regression check), and **agent-pack distribution** (canonical-template-driven, sync-once-export-many).
>
> The honesty: the model is "ownerless for routine drift, not policy authorship or destructive operations." 218 scripts still lack the required JSDoc; 307 v2 paths still sit in non-publishable lanes; OpenAPI specs are 2 months stale; the Luma social feed is silently dead. Each of those is a contributor-grade community-help opportunity, not a hidden defect — every one has a documented file path and acceptance criterion.

---

## 9. Recommended Session-2 actions

In priority order:

1. **Approve this synthesis** as the master record for the Repo-Docs-Consolidation thread.
2. **RFP Phase 1** — remove or populate the 6 empty stubs in `v2/internal/rfp/` and `v2/internal/overview/`. ~1-2 hours of mechanical work.
3. **RFP Phase 2** — append Part 13 to `livepeer-docs-v2-report.md`. ~half a day.
4. **Counts sweep** — wire generator-emitted counts into `ai-features.mdx`, `ui-system.mdx`, `automations.mdx`, `data-integrations.mdx`. ~half a day.
5. **Retire the orphans** — merge `contracts-pipeline.mdx` into `data-integrations.mdx`; collapse `voice-rules.mdx` into `voice-and-copy.mdx`; retire `docs-guide/tooling/dev-tools.mdx`.
6. **Public-surface refresh** — fix `contribute-to-the-docs.mdx` and `v2/resources/documentation-guide/tooling/lpd-cli.mdx`.
7. **Two P0 cherry-picks** — contract-addresses workflow to docs-v2; wire generate-og-images + generate-seo into CI.
8. **Open the community-help index as good-first-issues** — the 80+ items from the sub-audits become a tracked backlog.

After Session-2, the consolidated `docs-guide/features/` becomes the canonical source of truth a contributor or agent can read in 15 minutes to know what this repo is, what state every feature is in, and where they can help.

---

## Artefacts

| File | Lines | Features audited |
|---|---|---|
| `01-ai-features-audit.md` | 295 | 21 |
| `02-ui-system-audit.md` | 375 | 15 |
| `03-automations-audit.md` | 332 | 16 |
| `04-data-integrations-audit.md` | 244 | 11 |
| `05-adaptive-architecture-audit.md` | 295 | 23 |
| `06-dev-tools-audit.md` | 320 | 14 |
| `07-rfp-internal-audit.md` | 263 | 5 RFP pages + 11 internal pages + 1 long-form report |
| `00-SYNTHESIS.md` (this file) | — | Cross-cutting |

**Total:** ~2,124 lines of evidence; 105 features audited across 7 product domains.
