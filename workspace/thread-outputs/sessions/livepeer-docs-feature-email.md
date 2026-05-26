---
purpose: Forwardable email about the Livepeer Docs repo — prose, no tables, email-safe
audience: external developers / engineering teams / dev-rel networks
generated: 2026-05-25
status: draft
---

**Subject:** Livepeer Docs — an AI-first, future-proof, ownerless documentation repo

Hi [Name],

I want to introduce you to the documentation infrastructure we have built at Livepeer. The repository at github.com/livepeer/docs (branch `docs-v2`) is not a typical docs site — it is a docs-as-infrastructure system. Every governed surface in it declares its canonical source, its validator, its repair path, and its primary gate, so a contributor or an AI agent can diagnose and repair drift without needing private maintainer context.

The system rests on three operating principles: **AI-first** (every artefact is directly consumable by AI agents), **future-proof** (every contract is machine-readable and locked to a dated decision), and **ownerless** (no human is the bottleneck for routine maintenance). Below is how those principles are delivered.

---

**Six core policies**

The principles are enforced through six policies, each documented in `docs-guide/policies/`:

- **Ownerless governance.** A surface is not production-ready unless it has one canonical source, one validator, one repair path, and one primary gate layer. Four of our five unified governance surfaces meet the contract today.
- **Source of truth before convenience.** Generated outputs, indexes, and registries regenerate from canonical inputs. They are never hand-edited. 29 governed artefacts are declared with class, commit policy, hook policy, CI policy, and delta strategy per file.
- **Root causes over bypasses.** Failures get repaired in the policy, generator, source data, or validator that owns the drift. No ignoring files. No suppressing failures. No `--no-verify` shortcuts.
- **Layered enforcement.** Five gate layers in sequence: write-time, commit-time, PR-time, post-merge, and scheduled. A rule that only catches violations on cron is a rule that lets violations land.
- **Public docs and repo ops are one product.** Content, components, data feeds, automation, AI artefacts, and governance docs evolve together under one release. There is no separate "ops" repo.
- **Honesty about partial state.** Live state never lies in the canonical docs. Every count traces to a generator command or a verified read. A dedicated gap-analysis page tracks what is not done.

---

**Nine features**

The repo ships nine product-grade feature areas. Each has its own page under `docs-guide/features/` with the full architecture, surfaces, and current state.

**1. AI features.** Every documentation artefact is directly consumable by AI agents without scraping. The repo auto-regenerates `llms.txt` and `sitemap-ai.xml` on every change. Six native agent adapters (Claude Code, Codex, Cursor, Continue, Augment, plus the cross-agent `AGENTS.md` baseline) are thin wrappers around a single canonical rules file. 35 self-contained agent skills give any agent a playbook for a specific job — start a session, run an investigation, do a layout pass on a draft page, propagate a file rename across ten reference surfaces, debug systematically, or scaffold a governance-compliant new script. Mintlify hosts the chat assistant and the MCP server; we feed both from the same canonical data. **This delivers the AI-first principle.**

**2. UI system.** A governed library of 132 registered components, 37 page templates, 8 Tier-1 composables, and 312 VS Code snippets. Every component declares a 7-tag JSDoc header. The registry is auto-generated, not hand-maintained. Styles are enforced through a remediator with 14 fix types plus a regression-verification pass. **This delivers the source-of-truth and future-proof principles.**

**3. Automations.** Eleven active GitHub Actions workflows under a 4-tier composable architecture, down from 53 pre-refactor. Tier 1 is six per-concern dispatchers plus five event-handler interfaces. Tier 2 is meta dispatchers. Tier 3 is pipeline dispatchers. Tier 4 is 230 type-pure atomic scripts. Every tier is independently runnable locally with `--dry-run` — no CI dependency. 18 architectural decisions are locked in machine-readable form. Three new veracity dispatchers (May 2026) bridge fact-checking into PR review. **This delivers the layered-enforcement and root-causes principles.**

**4. Data integrations.** Eleven integration families pull live external data into the repo: contract addresses (with Etherscan + Arbitrum bytecode verification), gateway version and config flags, release version, CoinGecko exchanges, six social feeds (Discord, forum, blog, YouTube, GitHub, RSS), OpenAPI specs, contributor profiles. The contracts pipeline is the gold standard — daily cron, verification shadow run, incident issue creation on bytecode failure, publish gate requiring a re-check. Every integrator writes to a snippet; every snippet renders into pages. There is no hardcoded external data in any MDX file. **This delivers the source-of-truth and ownerless principles.**

**5. Adaptive architecture.** This is the ownerless layer made concrete. A five-stage control loop runs per governed surface: detect, explain, repair, verify, record. 49 validators, 37 remediators, 31 generators, and 25 audits sit under `operations/scripts/`. The unified governance registry at `operations/governance/config/repo-governance-surfaces.json` is the canonical source for all governed surfaces. The `propagate` skill detects file moves and audits ten reference surfaces (docs nav, MDX links, redirects, `llms.txt`, AI sitemap, companion manifest, and more) before applying changes — dry-run first, human approval, then deterministic application. **This is the ownerless principle in practice.**

**6. Contributor tools.** The `lpd` CLI gives contributors local equivalents to every CI capability: 13 subcommands plus 5 group shorthands. Scoped Mintlify preview boots one subsection in under two minutes instead of cold-starting the full 1,128-page site. Four in-repo VS Code extensions plus 312 governed snippets handle the boring parts (frontmatter, JSDoc headers, component imports). A local-only social-feed dispatcher mirrors the CI workflow for `.env`-based workstation use. **This delivers the public-docs-and-ops-as-one-product principle.**

**7. Content writing pipeline.** A nine-stage project pipeline from research through publication, with locked gates per stage. Level 1 (Pass A) does content writing in plain markdown; Level 2 (Pass B) applies MDX layout — template selection, component placement, frontmatter completion, render validation — without rewriting content. Fourteen supporting AI skills cover tab mapping, per-page review, propagation, and packet generation. Voice and copy standards (UK English, banned phrases, per-audience tone, em-dash policy) are codified at `docs-guide/standards/voice-and-copy.mdx` and remediator-enforced. **This delivers the source-of-truth and root-causes principles.**

**8. Checks framework.** An eleven-phase per-page review pipeline plus nine universal check categories. Every page in `v2/` gets the same review structure: structural, frontmatter, copy, voice, render, propagation, veracity, layout, accessibility, SEO, freshness. Skills run the checks programmatically; remediators fix what they can; humans adjudicate the rest. **This delivers the layered-enforcement and ownerless principles.**

**9. Gap analysis.** The honest implementation backlog. P0 / P1 / P2 priorities with file paths and acceptance criteria, refreshed against live data. The audit pipeline runs through a single skill — `repo-audit-orchestrator` — that runs every static audit stage in sequence and emits one prioritised scorecard. **This delivers the honesty-about-partial-state principle.**

---

**Where to look first**

If you want the whole system at a glance, start at `docs-guide/index.mdx`. The feature catalogue this email is built from is at `docs-guide/features/feature-map.mdx`. The workflow and pipeline architecture is at `docs-guide/frameworks/github-actions.mdx`. The locked decisions are at `.github/workspace/decisions-log.mdx` and `.github/workspace/design/governance/design-overview.md`. The ownerless / adaptive architecture lives at `docs-guide/features/adaptive-architecture.mdx`. The AI features and skills catalogue is at `docs-guide/features/ai-features.mdx`.

---

The architecture is portable — none of these patterns are Livepeer-specific. The 4-tier composable workflow architecture, the four-part ownerless contract per surface, the layered prevention chain, the agent-adapter thinness rule, the `propagate` skill pattern, the `lpd` CLI shape — any of them can be lifted into another docs repo with minimal adaptation.

I would value your feedback, and I am happy to walk you through any of it on a call or to share specific files, generators, or configuration in advance.

Best regards,
Alison Haire
ally@lilypad.tech

---

## Forwarding notes (not part of the email)

- **Best targets:** docs engineers at infra companies (Vercel, Cloudflare, Stripe), DX leads at large OSS projects, agentic-AI-product teams, dev-rel networks, Mintlify customer engineering
- **Structure:** mirrors `docs-guide/features/feature-map.mdx` — three pillars → six policies → nine features → where-to-look — so a reader who clicks into the docs lands on the same shape
- **Format:** prose with bullets and bolded labels. No tables (they render as raw pipe-separated text in most email clients)
- **Tone:** professional, structured, feature-first with explicit philosophy mapping per feature
- **Subject-line variants:** "Livepeer Docs — an AI-first, future-proof, ownerless documentation repo" / "Worth a look: a docs-as-infrastructure system at livepeer/docs" / "Nine features, six policies, three principles — the Livepeer Docs operating model"
- **Trim guidance:** for shorter forwards, keep the three-pillar intro + the nine feature paragraphs (drop the six-policies section if length matters); the per-feature paragraphs each end with which principle they deliver, so dropping the policies section does not break the through-line

---

# Reference tables (for the sender / not the email body)

The tables below match every heading in the email above. They enumerate live surfaces, scripts, configs, and pages as of 2026-05-25. Use them to answer follow-up questions from the recipient, to back up the prose, or to attach as a reference doc on a longer engagement.

## Three operating principles

| Principle | Definition | Lead policy doc | Lead feature page |
| --- | --- | --- | --- |
| AI-first | Every artefact is directly consumable by AI agents without scraping or translation. The repo is a first-class data source for agentic workflows | `docs-guide/policies/agent-governance-framework.mdx` | `docs-guide/features/ai-features.mdx` |
| Future-proof | Every contract is machine-readable and locked to a dated decision. Future maintainers inherit explicit rules, not folklore | `docs-guide/policies/source-of-truth-policy.mdx` | `docs-guide/frameworks/github-actions.mdx` |
| Ownerless | No human is the bottleneck for routine maintenance. Drift detects, repairs, and escalates itself | `docs-guide/policies/ownerless-governance.mdx` | `docs-guide/features/adaptive-architecture.mdx` |

---

## Six core policies (full set)

The repo has 17 published policy pages under `docs-guide/policies/`. The six headline policies named in the email body are the ones referenced from `docs-guide/features/feature-map.mdx`. The full set is included here for completeness.

| # | Policy | File | What it enforces |
| --- | --- | --- | --- |
| 1 | Ownerless governance | `docs-guide/policies/ownerless-governance.mdx` | Four-part contract per surface: canonical source · validator · repair command · primary gate |
| 2 | Source of truth | `docs-guide/policies/source-of-truth-policy.mdx` | Generated outputs regenerate from canonical inputs, never hand-edited |
| 3 | Quality gates | `docs-guide/policies/quality-gates.mdx` | Tier-by-tier gate ownership; root causes over bypasses |
| 4 | Infrastructure principles | `docs-guide/policies/infrastructure-principles.mdx` | Layered enforcement: which checks belong at which gate |
| 5 | Governance index | `docs-guide/policies/governance-index.mdx` | Entry point listing every governed surface |
| 6 | Generated-artifact and hook governance | `docs-guide/policies/generated-artifact-and-hook-governance.mdx` | 29 artefacts × 3 classes × commit / hook / CI policies |
| 7 | Script governance | `docs-guide/policies/script-governance.mdx` | 11-tag JSDoc standard, type/concern/niche taxonomy |
| 8 | Agent governance framework | `docs-guide/policies/agent-governance-framework.mdx` | Adapter rules, retired-legacy table, migration map |
| 9 | Root allowlist governance | `docs-guide/policies/root-allowlist-governance.mdx` | Pre-commit refuses non-allowlisted root entries |
| 10 | v2 folder governance | `docs-guide/policies/v2-folder-governance.mdx` | Publishable vs `_workspace` vs `x-deprecated` lane definitions |
| 11 | Workspace lifecycle policy | `docs-guide/policies/workspace-lifecycle-policy.mdx` | 30/90-day TTLs for `_workspace/` reports |
| 12 | Snippets assets policy | `docs-guide/policies/snippets-assets-policy.mdx` | Where snippets and assets live and how they regenerate |
| 13 | Component layout decisions | `docs-guide/policies/component-layout-decisions.mdx` | Per-component layout decisions |
| 14 | Audit system overview | `docs-guide/policies/audit-system-overview.mdx` | How the audit pipeline composes |
| 15 | Cleanup quarantine policy | `docs-guide/policies/cleanup-quarantine-policy.mdx` | Quarantine-before-delete workflow |
| 16 | Skill pipeline map | `docs-guide/policies/skill-pipeline-map.mdx` | Which skills run at which content-pipeline phase |
| 17 | docs-guide structure policy | `docs-guide/policies/docs-guide-structure-policy.mdx` | D-DG-01..13 decisions on docs-guide IA |

---

## Nine features (full surface enumeration per feature)

### Feature 1 — AI features

**Page:** `docs-guide/features/ai-features.mdx`

| Surface | Path | Live count / notes |
| --- | --- | --- |
| Cross-agent baseline | `AGENTS.md` (root) | 119 lines |
| Native agent adapters | `.claude/`, `.codex/`, `.cursor/`, `.continue/`, `.augment/`, `.github/AGENTS.md` | 6 adapters |
| Local agent skills | `ai-tools/ai-skills/<skill>/SKILL.md` | 35 skills |
| Portable skill exports | `ai-tools/agent-packs/skills/` | 53 exports |
| Authoring templates | `ai-tools/ai-skills/templates/` | 53 `.template.md` files |
| ai-rules (cross-agent rule files) | `ai-tools/ai-rules/` | 16 files |
| ai-tools registry | `ai-tools/registry/ai-tools-registry.json` | Canonical inventory |
| Public AI artefacts | `llms.txt`, `sitemap-ai.xml`, `ai-companion-manifest.json` | Auto-regenerated from source |
| Mintlify hosted MCP server | (Mintlify-hosted) | Out-of-the-box, no repo wiring |
| Mintlify chat assistant | `.mintlify/Assistant.md` | Production at docs.livepeer.org |
| Veracity research dispatchers | `operations/scripts/dispatch/content/veracity/` | 3 dispatchers (May 2026) |

**Headline skills the recipient should ask about:** `thread` (session anchor), `research` (delegated investigation), `propagate` (file-move reference propagation), `diagnose` (systematic debugging), `create-script` / `create-component` / `create-action` (governance-compliant scaffolding), `content-pipeline-pass-a` + `pass-b` (Level 1 content + Level 2 layout), `repo-audit-orchestrator` (full audit pipeline), `cross-agent-packager` (export local skills to portable format).

### Feature 2 — UI system

**Page:** `docs-guide/features/ui-system.mdx`

| Surface | Path | Live count / notes |
| --- | --- | --- |
| Component categories | `snippets/components/` | 7 categories: `config`, `displays`, `elements`, `examples`, `integrators`, `scaffolding`, `wrappers` |
| Registered components | `snippets/components/<category>/*.jsx` + `component-registry.json` | 132 exports |
| Page templates | `snippets/templates/` | 37 templates |
| Tier-1 composables | `snippets/composables/` | 8 composables |
| VS Code snippets | `.vscode/*.code-snippets` | 312 snippets |
| Stylesheet | `style.css` | Token-driven, remediator-enforced |
| Styles remediator | `operations/scripts/remediators/content/style/` | 14 fix types + `--verify` regression check |
| Component-framework spec | `docs-guide/frameworks/component-framework-canonical.mdx` | 7-tag JSDoc standard |
| Component governance | `docs-guide/frameworks/component-governance.mdx` | Category / sub-niche taxonomy |

### Feature 3 — Automations

**Page:** `docs-guide/features/automations.mdx`

| Surface | Path / count | Notes |
| --- | --- | --- |
| Active workflows | `.github/workflows/*.yml` | 11 active (6 dispatch-concern + 5 interface-governance) |
| Concern dispatchers | `dispatch-brand.yml`, `dispatch-copy.yml`, `dispatch-discoverability.yml`, `dispatch-governance.yml`, `dispatch-health.yml`, `dispatch-maintenance.yml` | 6 workflows, one per concern |
| Interface workflows | `interface-governance-assign-reviewers.yml`, `interface-governance-close-linked-issues.yml`, `interface-governance-index-issues.yml`, `interface-governance-intake-discord-issues.yml`, `interface-governance-label-issues.yml` | 5 event handlers, P7 pipeline tag |
| Dispatch scripts | `operations/scripts/dispatch/` | 100 scripts (Tier 2 meta + Tier 3 pipeline) |
| Atomic scripts | `operations/scripts/{validators,audits,remediators,generators,integrators,interfaces}/` | 230 wired (Tier 4) |
| Per-type counts | validators 54 / audits 25 / remediators 37 / generators 30 / integrators 55 / dispatch 100 / interfaces 8 | Live 2026-05-25 |
| Locked decisions | `.github/workspace/decisions-log.mdx` + `.github/workspace/design/governance/design-overview.md` | 18 total (D-ACT-01..10 + D-GOV-01..08) |
| Pipeline tags | P2 / P3 / P4 / P5 / P5-auto / P6 / P7 / manual / event-driven | Taxonomy of when a pipeline runs |
| Veracity dispatchers (new May 2026) | `operations/scripts/dispatch/content/veracity/` | `docs-research-packet.js`, `orchestrator-guides-research-review.js`, `docs-page-research-pr-report.js` |
| Workflow framework | `docs-guide/frameworks/github-actions.mdx` | v2.2, lastVerified 2026-05-25 |
| Dispatch-pipelines framework | `docs-guide/frameworks/dispatch-pipelines.mdx` | Pattern A–G pipeline shapes |

### Feature 4 — Data integrations

**Page:** `docs-guide/features/data-integrations.mdx`

| Integration family | Source | Target snippet | Integrator script |
| --- | --- | --- | --- |
| Contract addresses | Etherscan + Arbitrum (bytecode auth) | `snippets/data/contract-addresses/` | `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js` |
| Release version | livepeer/go-livepeer GitHub releases | `snippets/data/globals/latestRelease.jsx` | `operations/scripts/integrators/maintenance/release/update-livepeer-release.js` |
| Gateway version + config flags | go-livepeer source | `snippets/data/gateways/version.jsx`, `configuration-flags.jsx` | `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js` |
| CoinGecko exchanges | CoinGecko API | `snippets/data/exchanges/` | `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js` |
| Discord feed | Discord webhook | `snippets/data/social-feeds/discord.json` | `operations/scripts/integrators/copy/social-feeds/fetch-discord-data.js` |
| Forum feed | Discourse API | `snippets/data/social-feeds/forum.json` | `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js` |
| Blog feed (Ghost) | Ghost API | `snippets/data/social-feeds/ghost.json` | `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js` |
| YouTube feed | YouTube Data API | `snippets/data/social-feeds/youtube.json` | `operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js` |
| GitHub feed | GitHub API | `snippets/data/social-feeds/github.json` | `operations/scripts/integrators/copy/social-feeds/fetch-github-data.js` |
| RSS feed | external RSS | `snippets/data/social-feeds/rss.json` | `operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js` |
| OpenAPI specs | upstream service repos | `api/*.yaml` | `operations/scripts/integrators/maintenance/api/fetch-openapi-specs.sh` (covers 2 of 5; P0 gap) |

**Snippet families (live):** `changelogs`, `contract-addresses`, `exchanges`, `gateways`, `globals`, `reference-maps`, `references`, `showcase-feed`, `snapshots`, `social-feed-solutions`, `social-feeds`, `variables`.

### Feature 5 — Adaptive architecture

**Page:** `docs-guide/features/adaptive-architecture.mdx`

| Surface | Path | Live count / role |
| --- | --- | --- |
| Unified governance registry (canonical post-D-ACT-10) | `operations/governance/config/repo-governance-surfaces.json` | 5 unified surfaces, 4 ownerless-ready, 1 advisory. `bridge_mode: "retired"`, `legacy_bridge_inventory` empty |
| Legacy ownerless registry (superseded) | `operations/governance/config/ownerless-governance-surfaces.json` | 8 entries, kept on disk for reference |
| Generated-artefacts registry | `operations/governance/config/generated-artifacts.json` | 29 artefacts, 3 classes, commit/hook/CI policies |
| Root-governance registry | `operations/governance/config/root-governance.json` | 35 root entries, generates `.allowlist` |
| Agent-write governance | `operations/governance/config/agent-write-governance.json` | Per-path agent capability rules |
| Approval policy | `operations/governance/config/governance-approval-policy.json` | PR evidence labels for sensitive changes |
| Validators | `operations/scripts/validators/` | 54 scripts |
| Audits | `operations/scripts/audits/` | 25 scripts |
| Remediators | `operations/scripts/remediators/` | 37 scripts |
| Generators | `operations/scripts/generators/` | 30 scripts |
| Hooks | `.githooks/` | pre-commit + pre-push + others |
| `propagate` skill | `ai-tools/ai-skills/propagate/SKILL.md` | File-move detection + 10-surface audit |
| `lpd repair` CLI | `tools/lpd` | Direct trigger for any governed-surface repair |

### Feature 6 — Contributor tools

**Page:** `docs-guide/features/contributor-tools.mdx`

| Surface | Path / command | Notes |
| --- | --- | --- |
| `lpd` CLI | `tools/lpd` | 13 subcommands + 5 group shorthands |
| `lpd setup` | First-time environment setup | macOS / Linux supported |
| `lpd doctor` | Environment diagnostics | Detects Node, npm, mintlify, PATH issues |
| `lpd dev` | Mintlify dev server wrapper | `--scoped --scope-prefix v2/<tab>` for fast preview |
| `lpd test --staged` | CI-equivalent local validation | Pre-push gate equivalent |
| `lpd ci` | Full CI run locally | `--skip-browser` for headless |
| `lpd move-page` | Move page with reference propagation | `--check` for dry-run, then re-run to apply |
| `lpd repair --surface <id>` | Trigger governed-surface repair | Bypasses cron / CI |
| `lpd ai-sitemap --write` | Regenerate AI sitemap | Mirrors scheduled job |
| Local social-feed dispatcher (May 2026) | `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js` | `.env`-based, mirrors `dispatch-social-feeds.yml` for workstation use |
| Scoped Mintlify preview | `lpd dev --scoped` | <2 min boot vs 10+ min cold-start |
| In-repo VS Code extensions | `tools/editor-extensions/` | 4 extensions |
| VS Code snippets | `.vscode/*.code-snippets` | 312 snippets |
| Git hooks | `.githooks/` | pre-commit, pre-push, post-commit hooks |

### Feature 7 — Content writing pipeline

**Framework:** `docs-guide/frameworks/content-writing.mdx`

| Phase | What happens | Lead skill | Output |
| --- | --- | --- | --- |
| 1 — Research | Tab-scoped investigation + content scan | `research`, `content-pipeline-tab-map` | Research packet + tab map |
| 2 — IA design | Information architecture per tab | `pm`, `design` | IA tree, locked via human review |
| 3 — Structure | Section-level outline per page | `design` | Structure approved |
| 4 — Content (Pass A) | Plain markdown content writing | `content-pipeline-pass-a` | Approved Pass A markdown |
| 5 — Veracity | Fact-check against canonical sources | `docs-research-packet` + `docs-page-research-pr-report` dispatchers | Veracity report |
| 6 — Layout (Pass B) | MDX layout + component placement | `content-pipeline-pass-b` | Production-ready `.mdx` |
| 7 — Render verify | Mintlify render validation | `mdx-component-runtime-smoke` | Render PASSED |
| 8 — Propagate | Cross-surface reference updates | `propagate` | All references current |
| 9 — Close | Session summary + log entry | `close` | Session log + thread row updated |

**Voice + copy standards:** `docs-guide/standards/voice-and-copy.mdx` — UK English (-ise, -our, -re), banned phrases, per-audience tone, em-dash policy, heading rules. Enforced via `operations/scripts/remediators/content/copy/`.

**Per-tab artefacts:** `_workspace/canonical/IA.mdx`, `Frameworks.mdx`, `process.mdx`, `checks.mdx`, `REVIEW-REGISTRY.md` per tab.

### Feature 8 — Checks framework

**Framework:** `docs-guide/frameworks/checks-framework.mdx`

| Phase | Check category | Lead validator / skill |
| --- | --- | --- |
| 1 | Structural integrity | `lint-structure.js` |
| 2 | Frontmatter completeness | `lint-structure.js` (frontmatter rules) |
| 3 | Copy + voice | `style-and-language-homogenizer-en-gb` skill + copy remediators |
| 4 | Render | `mdx-component-runtime-smoke.js` |
| 5 | Propagation | `propagate` skill |
| 6 | Veracity | `docs-research-packet` + `docs-page-research-pr-report` dispatchers |
| 7 | Layout + component placement | `content-pipeline-pass-b` skill |
| 8 | Accessibility (WCAG) | WCAG validators + remediators |
| 9 | SEO + OG | `generate-og-images.js` + `generate-seo.js` |
| 10 | Link health | Link-health validator |
| 11 | Freshness | `docs-quality-and-freshness-audit` skill |

**Master checks:** `master-checks.mdx`. **Per-tab checks:** 5 per-tab `canonical/checks.mdx` files. **Supporting skills:** 14 skills under `ai-tools/ai-skills/` covering audit, pipeline, propagation, and packet generation.

### Feature 9 — Gap analysis

**Page:** `docs-guide/features/gap-analysis.mdx`

| Surface | Path | Role |
| --- | --- | --- |
| Live gap analysis | `docs-guide/features/gap-analysis.mdx` | P0 / P1 / P2 backlog with file paths and acceptance criteria |
| Audit orchestrator | `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js` + `repo-audit-orchestrator` skill | Runs every static audit stage; emits one prioritised scorecard |
| Deep-slice audits | `workspace/thread-outputs/repo-consolidation-deep/SLICE-*.md` | 10 deep slices covering every non-content area of the repo |
| Aggregate reports | `workspace/reports/repo-ops/` | All audit outputs, dated |
| Decisions registry | `docs-guide/decisions/registry.md` | Cross-index of D-ACT/D-GOV (18), D-DG (13), D-NAV (1) |

---

## Where to look first (table form for reference)

| If you care about... | Start here |
| --- | --- |
| The whole system at a glance | `docs-guide/index.mdx` |
| Feature catalogue (this email's source) | `docs-guide/features/feature-map.mdx` |
| Workflow + pipeline framework (v2.2) | `docs-guide/frameworks/github-actions.mdx` |
| Automations + dispatch architecture | `docs-guide/features/automations.mdx` |
| Adaptive (ownerless) architecture | `docs-guide/features/adaptive-architecture.mdx` |
| AI features + skills catalogue | `docs-guide/features/ai-features.mdx` |
| Data integrations + contracts pipeline | `docs-guide/features/data-integrations.mdx` |
| UI system + components | `docs-guide/features/ui-system.mdx` |
| Contributor toolchain | `docs-guide/features/contributor-tools.mdx` |
| What's not done yet | `docs-guide/features/gap-analysis.mdx` |
| All policies | `docs-guide/policies/governance-index.mdx` (entry point) |
| All frameworks | `docs-guide/frameworks/` |
| All standards | `docs-guide/standards/` |
| Decision logs | `.github/workspace/decisions-log.mdx` (D-ACT-01..10 + D-GOV-07..08) + `.github/workspace/design/governance/design-overview.md` (D-GOV-01..06) + `docs-guide/decisions/registry.md` (unified) |
