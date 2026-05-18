# Repo Features Documentation Inventory And Consolidation Audit

Date: 2026-05-18

Scope: repo-facing documentation for the docs-as-infrastructure repository, not Livepeer product content. This covers `docs-guide`, routed internal/resource docs, and workspace reports or summaries that describe repo features, governance, tooling, automation, AI systems, data integrations, UI systems, ownerless remediation, and RFP delivery evidence.

## Executive State

The canonical source of truth should be `docs-guide`, but repo-facing documentation is currently split across:

| Surface | Count found | Current role | Audit finding |
| --- | ---: | --- | --- |
| `docs-guide/` published docs | 105 md/mdx/json files | Canonical governance and feature docs | Best canonical base, but too broad and mixed across features, frameworks, policies, catalogs, tooling, repo-ops, canonical collation, and source-of-truth guides. |
| `docs-guide/_workspace/` | 40 files | Historical drafts and design specs | Keep as evidence only. Promote any still-current claims into `docs-guide`; otherwise archive/delete by policy. |
| `v2/resources/documentation-guide/` | 20 files | Public-facing guide to using/contributing to the docs | Overlaps heavily with `docs-guide`; should become reader-friendly mirrors/summaries, not canonical policy. |
| `v2/internal/` | 87 files | Internal hub, RFP, generated reports, transcripts | RFP report is important but stale relative to current repo architecture. Generated report aliases and old audit pages need retention review. |
| `workspace/` | 2,696 md/mdx/json files | Planning, reports, recovered chats, audits, active/complete plans | Not navigable as product documentation. Use as evidence inventory; consolidate only stable outcomes into `docs-guide`. |
| All `v2/**/_workspace` | 2,975 md/mdx/json files | Section-local reviews, drafts, canonical checks, migrated material | Major cleanup domain. Treat as non-publishable evidence; route active summaries into canonical docs or delete/archive governed waves. |

Immediate conclusion: the repo already has most proposed feature pages under `docs-guide/features`, but the source-of-truth boundary is unclear. The work should consolidate, verify, and enforce freshness rather than create a parallel docs set.

## Canonical Feature Categories

Recommended top-level docs-guide structure:

| Category | Canonical page | Supporting canonical docs | Status |
| --- | --- | --- | --- |
| Product map for the repo | `docs-guide/features/feature-map.mdx` | `docs-guide/features/architecture-map.mdx`, `docs-guide/policies/governance-index.mdx` | Keep and tighten as the product-facing entrypoint. |
| AI features and pipelines | `docs-guide/features/ai-features.mdx` | `docs-guide/frameworks/ai-tools-governance.mdx`, `docs-guide/policies/skill-pipeline-map.mdx`, `docs-guide/tooling/ai-tools.mdx` | Keep; add generated/live skill inventory dependency. |
| UX and UI system | `docs-guide/features/ui-system.mdx` | `docs-guide/frameworks/component-framework-canonical.mdx`, `docs-guide/frameworks/styles-engineering-guide.mdx`, `docs-guide/catalog/components-catalog.mdx`, `docs-guide/catalog/ui-templates.mdx` | Keep; needs archive/count drift cleanup. |
| Automations | `docs-guide/features/automations.mdx` | `docs-guide/frameworks/github-actions.mdx`, `docs-guide/frameworks/script-framework.mdx`, `docs-guide/catalog/workflows-catalog.mdx`, `docs-guide/catalog/scripts-catalog.mdx` | Keep; make workflow/script counts generated or checked. |
| Data integrations | `docs-guide/features/data-integrations.mdx` | `docs-guide/docs-library/pipelines/data-integration.mdx`, `docs-guide/repo-ops/secrets/solutions-secrets.mdx`, relevant OpenAPI/data pipeline docs | Keep; separate public product data from repo integration plumbing. |
| Adaptive architecture | `docs-guide/features/adaptive-architecture.mdx` | `docs-guide/policies/ownerless-governance.mdx`, `docs-guide/policies/generated-artifact-and-hook-governance.mdx`, `docs-guide/policies/quality-gates.mdx`, `docs-guide/repo-ops/maps/enforcement-map.mdx` | Keep; this is the ownerless/self-remediation narrative. |
| Dev and contributor tools | `docs-guide/features/contributor-tools.mdx` | `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/tooling/dev-tools.mdx`, `docs-guide/tooling/lpd-mdx-preview.mdx`, `docs-guide/contributing/*` | Keep; align with no-lazy-tooling and PATH discovery rules. |
| Gaps and community help | `docs-guide/features/gap-analysis.mdx` | `workspace/reports/governance/gap-report.mdx`, active audit outputs, RFP blockers | Keep; should become a structured help-needed queue by domain. |
| Contracts/changelog data feature | `docs-guide/features/contracts-pipeline.mdx` | `workspace/plan/active/CONTRACTS/**`, changelog pipeline docs | Keep as a specific data-pipeline case study or merge into data integrations if too narrow. |
| Visual review tooling | `docs-guide/features/visual-explainer-workflows.mdx` | none canonical yet | Decide: either promote to contributor-tools/AI features or archive as pilot-only. |

## Documents Gathered

### `docs-guide/features`

- `docs-guide/features/feature-map.mdx` - feature index and product map for the repo.
- `docs-guide/features/architecture-map.mdx` - architecture layers and contract edges.
- `docs-guide/features/ai-features.mdx` - AI public surfaces, agent adapters, skills, AI governance risks.
- `docs-guide/features/ui-system.mdx` - component library, templates, snippets, style governance.
- `docs-guide/features/automations.mdx` - workflow/script automation taxonomy, gates, gaps.
- `docs-guide/features/data-integrations.mdx` - OpenAPI, contract feeds, releases, social/community data.
- `docs-guide/features/adaptive-architecture.mdx` - detect/explain/repair/verify/record loop and remediation model.
- `docs-guide/features/contributor-tools.mdx` - `lpd`, hooks, editor tooling, scoped preview, safety rules.
- `docs-guide/features/gap-analysis.mdx` - implementation backlog for ownerless repo standard.
- `docs-guide/features/contracts-pipeline.mdx` - contracts workflow summary and current limits.
- `docs-guide/features/visual-explainer-workflows.mdx` - pilot visual review workflow.

### Core `docs-guide` Support Docs

- Governance entrypoint: `docs-guide/policies/governance-index.mdx`
- Frameworks: `docs-guide/frameworks/ai-tools-governance.mdx`, `component-framework-canonical.mdx`, `component-governance.mdx`, `content-system.mdx`, `content-writing.mdx`, `doc-item-model.mdx`, `file-placement.mdx`, `github-actions.mdx`, `page-composition-framework.mdx`, `page-taxonomy-framework.mdx`, `repo-structure.mdx`, `research-skill-workflow.mdx`, `script-framework.mdx`, `styles-engineering-guide.mdx`
- Policies: `docs-guide/policies/agent-governance-framework.mdx`, `audit-system-overview.mdx`, `cleanup-quarantine-policy.mdx`, `docs-guide-structure-policy.mdx`, `generated-artifact-and-hook-governance.mdx`, `infrastructure-principles.mdx`, `ownerless-governance.mdx`, `quality-gates.mdx`, `source-of-truth-policy.mdx`, `workspace-lifecycle-policy.mdx`
- Catalogs: `docs-guide/catalog/components-catalog.mdx`, `pages-catalog.mdx`, `scripts-catalog.mdx`, `templates-catalog.mdx`, `ui-templates.mdx`, `workflows-catalog.mdx`
- Tooling: `docs-guide/tooling/ai-tools.mdx`, `dev-tools.mdx`, `lpd-cli.mdx`, `lpd-mdx-preview.mdx`, `reference-maps/badge-map.mdx`, `reference-maps/icon-map.mdx`
- Docs library: `docs-guide/docs-library/index.mdx` and pipeline pages for component health, content quality, copy/brand, data integration, discoverability, governance compliance
- Standards: `docs-guide/standards/authoring-standard.mdx`, `frontmatter.mdx`, `naming-conventions.mdx`, `voice-and-copy.mdx`, `voice-rules.mdx`
- Repo ops maps: `docs-guide/repo-ops/config/repo-config-map.mdx`, `repo-governance-map.mdx`, `root-governance-map.mdx`, `docs-guide/repo-ops/maps/enforcement-map.mdx`
- Decisions: `docs-guide/decisions/registry.md`, `docs-guide/decisions/docs-guide-structure.md`, `docs-guide/decisions/glossary-boundary.md`

### Public Routed Repo Docs Under `v2/resources/documentation-guide`

- Overview/use docs: `documentation-overview.mdx`, `documentation-guide.mdx`
- Repo features: `features/docs-features-and-ai-integrations.mdx`
- AI and automations: `ai-automations/ai-features.mdx`, `automations-workflows.mdx`, `research-and-fact-checking.mdx`
- Copy/style: `copy-style/authoring-guide.mdx`, `authoring-standard.mdx`, `style-guide.mdx`
- Component library: `component-library/overview.mdx`, `component-library.mdx`, `elements.mdx`, `wrappers.mdx`, `displays.mdx`, `scaffolding.mdx`, `integrators.mdx`, `config.mdx`
- Tooling: `tooling/lpd-cli.mdx`, `tooling/snippets-inventory.mdx`
- Contributing: `contributing/contribute-to-the-docs.mdx`

Recommendation: keep these as public-facing summaries and contribution docs. Do not let them define canonical rules where `docs-guide` already owns the rule.

### Internal RFP And Repo Evidence

- `v2/internal/rfp/report.mdx` - routed RFP delivery table; important but needs updating for current repo feature categories.
- `v2/internal/rfp/reports/livepeer-docs-v2-report.md` - comprehensive RFP work audit generated 2026-02-21; useful source evidence, but it references older deployed paths and should not be treated as current architecture.
- `v2/internal/rfp/aims.mdx`, `deliverables.mdx`, `outcomes.mdx`, `problem-statements.mdx` - RFP support pages with blocked/incomplete status evidence.
- `v2/internal/_workspace/reviews/rfp/*.md` - review packet for RFP pages.
- `v2/internal/reports/**` - routed generated report pages and legacy report aliases. Many should be summarized, regenerated, or removed from nav after retention review.

### Prior Summaries And Audit Evidence

High-value prior summaries to use as evidence:

- `workspace/plan/active/master-summary.mdx`
- `workspace/plan/active/CONTENT-WRITING/chat-session-summary.md`
- `workspace/plan/active/DOCUMENTATION/canonical-consolidation-audit.md`
- `workspace/plan/active/DOCUMENTATION/docs-guide-site-audit-2026-04-08.md`
- `workspace/plan/active/DOCUMENTATION/audits/master-audit.md`
- `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md`
- `workspace/plan/active/COMPONENT-GOVERNANCE/audits/audit-report.md`
- `workspace/plan/active/SCRIPT-GOVERNANCE/master-status.mdx`
- `workspace/plan/active/SCRIPT WORKFLOW AUDIT/docs-platform-streamlining-report.md`
- `workspace/plan/active/SCRIPT WORKFLOW AUDIT/architecture-streamlining-report.md`
- `workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md`
- `workspace/plan/active/AI-TOOLS-GOVERNANCE/architecture-audit.md`
- `workspace/plan/active/AUTOMATIONS-RESTRUCTURE/master-status.mdx`
- `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/gap-analysis.md`
- `workspace/plan/active/TOOLING/lpd-audit.md`
- `workspace/reports/INDEX.md`
- `workspace/reports/archive/component-governance-audit.md`
- `workspace/reports/archive/migration-impact-report.md`
- `workspace/reports/archive/important-removal-report.md`
- `workspace/thread-outputs/research/actions-audit-full.md`
- `workspace/thread-outputs/research/actions-repo-analysis-report.md`
- `workspace/thread-outputs/build/staleness-remediation-report.md`

These should not become another docs layer. They should feed the feature pages, gap queue, and RFP update.

## Current Gaps And Help-Wanted Domains

| Domain | Current evidence | Production-ready outcome | Community help candidate |
| --- | --- | --- | --- |
| Style and copy | Style governance exists, but spelling/em-dash flags remain for context-sensitive terms and component prop tables. | Validators distinguish prose from code identifiers and frontmatter user-facing text. | Improve language-rule exceptions and add fixtures. |
| Content quality | Content-writing pipeline exists; many section `_workspace` reviews and summaries remain scattered. | One canonical content quality framework plus generated status dashboards. | Review unresolved tab/section summary packets and close stale blockers. |
| UX/component system | `ui-system.mdx` reports 24 archived JSX components and component count drift. | Generated component inventory owns counts; archived components classified as alias/evidence/delete. | Classify archived components and test live consumers. |
| Skills and AI workflows | AI feature docs list agent adapters and skill groups; skill count drift is already flagged. | Generated skill indexes feed docs; adapters stay thin and fresh. | Add freshness checks and update stale skill docs. |
| Self-remediation pipelines | Adaptive architecture exists; governance map drift and generated artifact coverage remain gaps. | Every governed surface has detect/repair/verify/record path. | Add missing repair commands and generated artifact entries. |
| Governance/ownerless repo | Ownerless governance policies exist; repo still has large tracked reports, backup artifacts, and non-publishable v2 lanes. | Bounded publishable tree, retained evidence only where justified, deterministic cleanup rules. | Execute approved cleanup waves after inventory review. |
| Automations | Workflow and script taxonomies exist; some docs still reference old paths in public resource docs. | Feature pages and public guides only point to live workflow/script roots. | Fix stale path references and add docs-guide freshness validator. |
| Data integrations | Data integration map exists; changelog consolidation remains incomplete and cross-team dependent. | Clear ownership model for each upstream feed and release source. | Help define release feed contracts with owning teams. |
| RFP reporting | Internal RFP pages exist but mix completed, blocked, cancelled, and current repo-infra claims. | Updated RFP report organised by current feature categories and honest completion status. | Review blocked/cancelled statuses and provide missing stakeholder evidence. |

## Delete, Archive, Update, Consolidate Queue

No deletion should happen in this thread. Tracked deletion requires the governed deletion path.

| Action | Candidates | Reason |
| --- | --- | --- |
| Update | `v2/internal/rfp/report.mdx` and `v2/internal/rfp/reports/livepeer-docs-v2-report.md` | RFP evidence predates the current feature docs and path structure. Add current repo-as-product feature summary and unresolved gaps. |
| Update | `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx` | It still references `tasks/staging/deprecated-n8n/`; current archive evidence is under `workspace/staging/deprecated-n8n/`. |
| Update | `docs-guide/features/*` | Keep as canonical feature pages, but ensure counts and path claims are generated or checked. |
| Consolidate | `v2/resources/documentation-guide/*` into public summaries | These should mirror `docs-guide`, not redefine governance. |
| Consolidate | `docs-guide/_workspace/02_Design-Specification/**` and `03_Component-Governance-Framework/**` | Promote only current decisions into frameworks/standards/policies; archive historical design drafts. |
| Archive/delete review | `v2/internal/reports/repo-ops/audit-tasks-folders--*.md` legacy aliases | Many are labelled "Legacy Alias"; likely generated compatibility pages or stale report wrappers. |
| Archive/delete review | Section-local `v2/**/_workspace/reviews/**` after summaries are consumed | They are evidence packets, not permanent docs. Keep summary only where still useful. |
| Archive/delete review | Large historical `workspace/reports/archive/**` and `workspace/reports/**/files/**` | Retention policy should prefer concise summaries over full historical file captures. |
| Delete with approval | `.DS_Store`, `.bak`, and backup artifacts already listed in `docs-guide/features/gap-analysis.mdx` | Non-source artifacts reduce trust and should be purged through approved cleanup. |

## RFP Report Update Inputs

The updated RFP report should add a "Docs-as-Infrastructure Repo Features" section with these product-forward capabilities:

1. AI-ready public artifacts and agent-operable repository instructions: `llms.txt`, `sitemap-ai.xml`, AI assistant support, MCP-ready published docs, and native agent adapters.
2. Ownerless governance and remediation loop: validators, generators, remediators, hooks, CI gates, generated maps, repair commands, evidence records.
3. Maintainer CLI and local tooling: `lpd`, scoped Mintlify preview, staged tests, doctor/setup, repair, move-page, AI sitemap commands.
4. Component and style system: governed MDX-safe JSX library, templates, CSS-token style governance, component registry/catalogs.
5. Automation and data pipelines: GitHub Actions, OpenAPI/reference generation, contracts/releases/exchanges/social-feed/changelog integrations.
6. Content operating system: frontmatter taxonomy, page taxonomy, content-writing pipeline, copy/style standards, research/fact-check workflows.
7. Community contribution pathways: contribution docs, issue intake, Discord/GitHub interfaces, review packets, generated reports.
8. Remaining work: changelog ownership, workflow/script metadata debt, v2 workspace normalization, generated governance map drift, large report retention, component archive classification, context-sensitive style validator improvements.

## Proposed Next Pass

1. Convert this inventory into a source-of-truth matrix with columns: path, audience, canonical owner, feature category, current/stale/legacy, evidence source, required action.
2. Produce a docs-guide IA proposal that reduces navigation load while preserving all canonical contracts.
3. Update `v2/internal/rfp/report.mdx` with current feature-category evidence and honest blocked/incomplete/community-help rows.
4. Create a deletion/archive approval queue only after the matrix is reviewed.
5. Add a freshness validator for `docs-guide/features/**` that checks missing linked files, old roots, TODO markers, and stale generated counts.

