# RFP Report + Internal Tab — Audit and Refresh Recommendations (2026-05-18)

## Executive summary

The RFP report (`v2/internal/rfp/reports/livepeer-docs-v2-report.md`) is a 1,149-line evidence-backed audit dated **2026-02-21** describing the work delivered under the September 2024 RFP award. It remains structurally sound (engagement timeline, stakeholder map, time matrix, RFP completion matrix all valid as historical record) but every quantitative count and many path references are now demonstrably stale. The repository has moved on substantially in the three months since the report was written: from 58 scripts to **263**, from 17 GH workflows to **50**, from 0 AI skills to **35**, from a `v2/pages/00_home/...` numbered IA to a flat tab-named IA (`v2/home/`, `v2/about/`, `v2/gateways/`, etc.), and from a docs-restructure deliverable into a full ownerless-governance pipeline (decisions registry, frameworks/policies/standards/contributing tiers, governance map, repair orchestrator, propagate skill, em-dash/UK-spelling remediators, styles governance, asset pipeline).

The five `v2/internal/rfp/*.mdx` companion pages (aims, problem-statements, outcomes, deliverables, report) range from rich-but-stale (aims, problem-statements) to **empty body shells** (outcomes.mdx and deliverables.mdx have only frontmatter). The pages under `v2/internal/overview/`, plus `v2/internal/definitions.mdx`, `v2/internal/ecosystem.mdx`, and `v2/internal/references.mdx` are mostly skeletal — heading-only or placeholder text. The Internal tab as a deliverable surface is incomplete. The RFP report itself is the single richest artefact in the tab and should remain the primary submission; everything else needs a refresh-or-cull decision.

## RFP pages — per-page audit

### `v2/internal/rfp/aims.mdx`
**Last verified:** 2026-03-17
**Content state:** current narrative, stale numbers and paths
**Key claims and their accuracy:**
- "58-script test and maintenance suite" — NOW STALE. Live count: 263 JS/SH/Py files under `operations/scripts/`.
- "17 GitHub Actions workflows" — NOW STALE. Live count: 50 `.yml` files under `.github/workflows/`.
- Path references like `v2/pages/00_home/test.mdx`, `v2/pages/04_gateways/quickstart/AI-prompt.mdx`, `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx` — NOW STALE. The numbered `v2/pages/NN_*` IA has been replaced with flat tabs: `v2/home/`, `v2/gateways/`, `v2/developers/`, etc.
- "docs-guide/features/feature-map.mdx" — STILL TRUE (lastVerified 2026-05-14, current).
- "docs-guide/features/architecture-map.mdx" — needs verification (file not located at expected path in this audit).
- "tools/ai-rules/llms.txt.information.md" — needs verification; many references in the report use this path which may have moved (feature-map references `llms.txt` and `sitemap-ai.xml` at repo root).
- "AGENTS.md, .claude/, .cursor/, .windsurf/" — STILL TRUE plus EXPANDED. The repo now also has `.codex/`, `.augment/`, and a 35-skill `ai-tools/ai-skills/` system not mentioned anywhere.
- "audit-v2-usefulness.js … 384 pages scored … February 2026 audit" — historical fact, fine, but the script may have moved under `operations/scripts/audits/`.
- "audit-all-pages.js and audit-all-pages-simple.js" — likely moved/restructured under `operations/scripts/audits/`. Path needs verification.

**Recommended updates:**
- Replace every script and workflow count with live numbers or remove the count and link to the live catalogue (`docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/catalog/workflows-catalog.mdx`).
- Replace `v2/pages/NN_*/...` paths with the current `v2/<tab>/...` paths (or use route URLs not file paths).
- Add the ownerless-governance, decisions registry, propagate skill, styles governance, asset pipeline (PR #851), and changelog pipeline as additional AI-first / future-proofing implementation evidence.
- Bump `lastVerified` to 2026-05-18.

**Priority:** P0 (this is the canonical aims-delivery narrative and is read by Foundation reviewers).

### `v2/internal/rfp/problem-statements.mdx`
**Last verified:** no `lastVerified` field set
**Content state:** strong narrative, stale paths and a few inaccurate counts
**Key claims and their accuracy:**
- Nine top-level sections in docs.json (Home, About, Platforms, Developers, Gateways, GPU Nodes, Delegators, Community, Resource HUB) — PARTIALLY STALE. Current `v2/` directory shows: home, about, community, delegators, developers, gateways, internal, orchestrators, resources, solutions (also stray `developers1`, `developers2`). "Platforms" and "GPU Nodes" as separately-named tabs are no longer present as directories; "Solutions" and "Internal" are visible additions.
- "Numbered prefix system (00_home through 09_internal)" — NOW STALE. Numbered prefixes have been removed in the current directory tree.
- "12+ Studio-specific pages removed from core docs with 301 redirects to livepeer.studio/docs" — claim still valid as historical action; redirect status needs verification against current `docs.json` `redirects` block.
- "7 deprecated AI pipeline pages removed; text-to-image retained" — STILL TRUE conceptually but current AI pipeline coverage should be re-listed against live pages.
- "Project Showcase fully automated via Google Sheets + n8n pipeline" — STILL TRUE; the asset pipeline thread (PR #849/#851) extends this.
- `v2/pages/02_community/...`, `v2/pages/03_developers/...`, `v2/pages/04_gateways/...`, `v2/pages/07_resources/...` — ALL STALE paths.
- "snippets/components/" duplication-via-single-source claim — STILL TRUE; the component framework now codifies this with 7-tag JSDoc.

**Recommended updates:**
- Replace `v2/pages/NN_*` paths with current `v2/<tab>/` paths sitewide in this file.
- Re-list the actual current tab structure (10 surfaces incl. internal + solutions, not 9).
- Add a "Resolved/Closed since 2026-02" subsection per problem statement: changelog pipeline progress, solutions tab merged, asset pipeline shipped, styles governance shipped.
- Add `lastVerified` frontmatter.

**Priority:** P0.

### `v2/internal/rfp/outcomes.mdx`
**Last verified:** 2026-03-17
**Content state:** **EMPTY** — frontmatter only, no body content.
**Recommended updates:** Either populate with concrete RFP outcomes (KPIs delivered, scope expansions, contractual outcomes vs. proposal) or remove from the Internal nav and replace with a redirect to the relevant section of `report.mdx` / `livepeer-docs-v2-report.md`.
**Priority:** P0 (a sidebar entry titled "Outcomes" that loads an empty page reads as broken delivery to the Foundation).

### `v2/internal/rfp/deliverables.mdx`
**Last verified:** 2026-03-17
**Content state:** **EMPTY** — frontmatter only, no body content.
**Recommended updates:** Populate with the four RFP deliverables and their current state, OR drop from nav and rely on `report.mdx` which has the full StyledTable already. Recommendation: drop the empty file and update the nav, since `report.mdx` already serves this purpose.
**Priority:** P0.

### `v2/internal/rfp/report.mdx`
**Last verified:** 2026-03-17
**Content state:** working page — renders the `DocsPhilosophyContent` snippet and a comprehensive RFP deliverables `StyledTable`. Content is the end-of-engagement snapshot.
**Key claims and their accuracy:**
- StyledTable status entries (Completed, Blocked, Cancelled) are accurate for end-of-engagement. Two items worth re-reviewing now that 3 months have passed:
  - "Integrate multilingual readiness and analytics tracking — Completed — 3 translations available" — needs verification (whether translations are actually published and which languages).
  - "Consolidation of multiple changelogs — Cancelled — Foundation to manage" — the master tracker shows the Changelog Pipeline thread Active, with 24 targets registered and 19 resource pages populated. Status should change from Cancelled to **Partial — automated pipeline shipped, content ownership remains with Foundation**.
  - "Migration guides for Studio users — Blocked — Migration to where?" — likely resolvable now that Platforms/Studio relationship has stabilised.
- "Goal-based tutorials … Incomplete" — current quickstart estate (gateways verify, gateways monitor, gateways connect threads all built or shipping) should be re-evaluated; this row may now be Completed.

**Recommended updates:** Re-grade the StyledTable rows against current state. Add a "Status as of 2026-05-18" footer. Bump `lastVerified`.

**Priority:** P0.

### `v2/internal/rfp/reports/livepeer-docs-v2-report.md`
**Last verified:** 2026-02-21 (the report's own dateline)
**Content state:** Comprehensive 1,149-line audit. Structure and narrative are excellent and should be retained. The factual layer (counts, paths, dates) is the problem.

**Key claims and their accuracy — see refresh table below for the big ones.** Additional issues:
- "Engagement period: September 2024 – February 2026" header is correct; multiple in-body lines write "Oct 2024 – Feb 2025" which is a typo for 2026 (e.g. section 6.5, 6.11, calendar audit).
- "v2 last modified February 20, 2026" — needs re-checking against the live site.
- "v1 fully preserved" — verify against `docs.json` / redirects.
- "Mintlify AI Assistant integrated and live" — verify against the live deployment.
- The 58-script claim appears in every Part 4–6 table; a global find-replace is needed.
- The `v2/pages/NN_*` path scheme appears throughout — global path update required.
- "Three IA options evaluated" — STILL TRUE as historical fact.
- 14-platform evaluation — STILL TRUE as historical fact.
- "25 ecosystem partners" — historical fact, fine.
- "Mintlify selected for v2" — STILL TRUE.

**Recommended updates:** See refresh table below + recommended refresh plan. The report should grow a final "Part 13: Updates 2026-02-21 → 2026-05-18" addendum rather than overwriting historical numbers, so the original record stays auditable.

**Priority:** P0 (this is the contractual submission record).

## livepeer-docs-v2-report.md staleness — numbers refresh table

| Claim | Old value (report, 2026-02) | New value (live, 2026-05-18) | Evidence |
|---|---|---|---|
| Total v2 MDX files (active) | not explicitly stated; implied "all v2/pages/" | **1,028** | `find v2 -name "*.mdx" ! -path "*/_workspace/*" ! -path "*/x-archived/*" ! -path "*/x-deprecated/*" \| wc -l` |
| docs.json registered v2 routes | not explicitly stated | **541** v2-prefixed entries | `grep -c '"v2/' docs.json` |
| AI skills (SKILL.md count) | 0 / not mentioned | **35** SKILL.md files (feature-map says 34 — minor drift) | `find ai-tools/ai-skills -name "SKILL.md" \| wc -l` |
| GitHub workflows | **17** | **50** | `ls .github/workflows/*.yml \| wc -l` |
| Operations scripts | **58** (claimed throughout) | **263** JS/SH/Py | `find operations/scripts \( -name "*.js" -o -name "*.sh" -o -name "*.py" \) \| wc -l` |
| Active JSX components | not explicitly stated | **35** active (59 total − 24 archived) | `find snippets/components -name "*.jsx" -not -path "*/x-archive/*" \| wc -l` |
| Archived JSX components | not stated | **24** in `x-archive/` | `find snippets/components -name "*.jsx" -path "*/x-archive/*" \| wc -l` |
| Issue templates | 8 (+2 PR templates) | needs re-verify; templates likely intact | inspect `.github/ISSUE_TEMPLATE/` |
| docs-guide manual files | 8 manual + 3 generated | 13 frameworks + 5 standards + 18 GOVERNANCE.md markers + decisions registry + 6 feature pages | `docs-guide/index.mdx`, master tracker (Canonical Consolidation thread) |
| V2 top-level section count | 9 (Home, About, Platforms, Developers, Gateways, GPU Nodes, Delegators, Community, Resource HUB) | 10 directories: home, about, community, delegators, developers, gateways, internal, orchestrators, resources, solutions (+ stray `developers1`, `developers2`) | `find v2 -maxdepth 1 -type d` |
| V2 IA prefix system | "numbered prefix system 00_home → 09_internal" | numbered prefixes removed; flat tab-named directories | live tree |
| Governance map | not stated | exists at `docs-guide/repo-ops/config/repo-governance-map.mdx`; currently flagged stale by `generate-repo-governance-status.js --check` | `docs-guide/features/gap-analysis.mdx` Executive Findings |
| Cleanup matrix open rows | not stated | 307 rows (235 `_workspace`, 72 `x-deprecated`) | `gap-analysis.mdx` |
| Script-metadata non-compliance | "self-documenting via script-docs.test.js" | 218 template-non-compliant scripts still in baseline; framework now requires 11-tag JSDoc | `gap-analysis.mdx`, master tracker |

## Internal Tab Overview Pages — per-page assessment

- **`v2/internal/index.mdx`** — Generated table-of-contents. Current. Auto-regenerates via `operations/scripts/generators/content/catalogs/generate-pages-index.js`. **Action:** none.
- **`v2/internal/internal-overview.mdx`** — Brief landing page with six cards. Functional. Vague copy. The Definitions card lands on a near-empty page. **Action:** P1 — tighten copy; fix or remove the Definitions card until the target is populated.
- **`v2/internal/definitions.mdx`** — **Skeletal**. Body is four words: "Protocol Network Product Ecosystem" then "Livepeer Documentation Definitions" heading with nothing under it. **Action:** P0 — populate (cross-link to the canonical glossary at `v2/resources/glossary.mdx` / `docs-guide/reference/internal-glossary.mdx`) or remove from nav.
- **`v2/internal/ecosystem.mdx`** — **Empty body**, frontmatter only. **Action:** P0 — populate (could reuse the ecosystem mapping content from RFP report sections 2.2 and Part 9), or remove from nav.
- **`v2/internal/references.mdx`** — **Empty section headings only** (`RFP Requirements`, `Repo's`, `Products`). **Action:** P0 — populate with actual reference links or remove.
- **`v2/internal/overview/about.mdx`** — duplicate of `internal-overview.mdx` with the same six cards, no `lastVerified`, sibling-relative resources link. **Action:** P1 — pick one (about.mdx vs internal-overview.mdx) and remove the other; near-duplicates causing IA confusion.
- **`v2/internal/overview/docs-philosophy.mdx`** — Two lines: imports `/snippets/composables/pages/internal/docs-philosophy.mdx` then renders `<DocsPhilosophyContent />`. **Action:** verify the snippet still exists and renders the AI-First / Infrastructure / Agents narrative; no in-file change.
- **`v2/internal/overview/governance-pipeline.mdx`** — Strong, current content. Says "this repository currently governs about 214 scripts" — close to but not matching live count (263); cites the 9-field metadata model and the Monday repair pipeline. **Action:** P1 — bump 214 → live count and cross-reference `docs-guide/policies/ownerless-governance.mdx`.
- **`v2/internal/overview/governance.mdx`** — Detailed governance / reviewers / SLA / ticketing page. Last-updated footer: 2026-02-16. The Section Owners table uses `v2/pages/NN_*` paths throughout — STALE. CODEOWNERS link valid. Issue label taxonomy is current. **Action:** P0 — fix `v2/pages/NN_*` paths in the Section Owners table; refresh last-updated date.
- **`v2/internal/overview/personas.mdx`** — Only Developer persona is fleshed out (with mermaid journey diagram). Gateway, Orchestrator, Delegator persona sections are missing entirely. Page heading promises four personas; delivers one. **Action:** P1 — finish the four-persona deliverable (matches the RFP completion claim).
- **`v2/internal/overview/strategic-alignment.mdx`** — Skeleton only. Lists "Aim 1: Users paying for services / Aim 2: More services / Aim 3:" with empty bodies. **Action:** P0 — populate or remove.

## Updates needed to reflect 2026-05-18 state

Specifically:

- **New AI/agent infrastructure** delivered or expanded since the report was written:
  - 34–35 reusable AI skills under `ai-tools/ai-skills/` (none mentioned in the report).
  - Agent adapter expansion: `.codex/`, `.augment/` added alongside `.claude/`, `.cursor/`, `.windsurf/`, `.github/`.
  - Cross-agent packager (`operations/scripts/integrators/ai/agents/cross-agent-packager.js`).
  - `sitemap-ai.xml` and `llms.txt` at repo root for LLM discoverability.

- **New governance/automation work** completed or in flight:
  - Ownerless governance spine: published frameworks (13) and standards (5) under `docs-guide/`, decisions registry under `docs-guide/decisions/`, unified decision index.
  - Governance map generator (`operations/scripts/generators/governance/reports/generate-repo-governance-status.js`).
  - Repair orchestrator and weekly auto-repair workflow (`repair-governance.yml`).
  - 11-tag JSDoc script framework + 7-tag JSDoc component framework — replacing the "script self-documentation" model.
  - Styles governance pipeline: audit + remediator + CI workflow; non-mermaid violations from 3,986 → 0.
  - UK spelling + em-dash sweep with zone-aware remediators.
  - `/propagate` skill + move-detect hook + docs-path-sync extensions.
  - Asset Pipeline (PR #851): 19 assets migrated, 3-layer verification gate.
  - Changelog Pipeline: 24 targets registered, 19 resource pages populated, nav grouped into 5 categories (report claims this was Cancelled).
  - Snippets root governance (`snippets/guide.mdx`) and snippets/automations + snippets/data audit.
  - Gateways Verify, Monitor, Connect built or in active build (master tracker).
  - GitHub Actions governance: 7-phase framework rewrite, pipeline architecture first, 6 enforcement layers.
  - Zombie process prevention (158 zombies killed; SessionStart/SessionEnd/UserPromptSubmit hooks).
  - Docs Library at `docs-guide/docs-library/index.mdx` — 8 pages with pipeline diagrams and gap analysis.

- **Resolved/closed since the report:**
  - Changelog: from "Cancelled" → "Pipeline shipped, awaiting Foundation content".
  - URL restructure recovery: report said "in active remediation" — verify whether closed.

- **New gaps surfaced since the report:**
  - 307-row v2 folder cleanup matrix (235 `_workspace`, 72 `x-deprecated`).
  - 218 template-non-compliant scripts.
  - Component archive drift (59 JSX, 24 archived).
  - Stray `v2/developers1/` and `v2/developers2/` directories in the live tree (visible in `find v2 -maxdepth 1 -type d`) — likely scratch lanes, should not be in publishable root.

## RFP 4 deliverables — current completion state

1. **Documentation Strategy** — **Complete (historical).** Persona-first IA delivered; deprecation matrix delivered; 14-platform evaluation delivered; Mintlify selected. No change since report.

2. **Content Rewrites** — **Complete in shape, in active refinement.** Current tab list: `home, about, community, delegators, developers, gateways, internal, orchestrators, resources, solutions`. "Solutions" is a new top-level tab added since the report. Gateways has had three additional pages built (verify, monitor, connect) per master tracker. Developers content had a "first commit" recently (git log) — substantial recent activity. The 307-row cleanup matrix shows content still in workspace lanes awaiting purge.

3. **v1 Live + redirects + SEO/AEO/WCAG/analytics/i18n** — **Mostly complete, gaps unchanged from report.**
   - v1 live + version switcher: STILL TRUE.
   - SEO: STILL TRUE; generator now expanded.
   - AEO: STILL PARTIAL (no CI gate yet).
   - WCAG: a WCAG audit report exists at `v2/internal/reports/quality-accessibility/v2-wcag-audit.md`; styles governance work added WCAG focus-visible + responsive CSS. Status moves from "needs Alison input" → "audited and partially repaired".
   - Analytics: STILL PARTIAL.
   - i18n: STILL PARTIAL — switcher live, no published translations.

4. **Public maintenance workflow** — **Substantially advanced beyond report.**
   - Style guide: still live + enforced. Extended with 10 new sections + pixel spacing + brand tokens (Styles Governance thread).
   - Contribution workflow: still live. Extended with agent governance, native adapters, and `docs-guide/contributing/agent-instructions.mdx`.
   - Handoff / ownership: ownerless governance model formalised. Each surface declares canonical source / validator / repair / gate. CODEOWNERS still in place. Decision registry added.
   - Ticketing: 8 issue templates still live. Auto-label and auto-assign-docs-reviewers still live.

## Recommended refresh plan

**Phase 1 — Stop the bleed (P0, this week).** Files that read as broken delivery to the Foundation:
1. `v2/internal/rfp/outcomes.mdx` — populate or remove from nav.
2. `v2/internal/rfp/deliverables.mdx` — populate or remove from nav (recommend remove; `report.mdx` already serves it).
3. `v2/internal/definitions.mdx`, `v2/internal/ecosystem.mdx`, `v2/internal/references.mdx`, `v2/internal/overview/strategic-alignment.mdx` — populate or remove from nav.
4. `v2/internal/overview/governance.mdx` — fix `v2/pages/NN_*` paths in Section Owners table; bump last-updated.

**Phase 2 — Refresh the canonical record (P0, next).** Add a `Part 13: Updates 2026-02-21 → 2026-05-18` addendum to `livepeer-docs-v2-report.md` rather than overwriting the historical record. Include:
- The number-refresh table from this audit (script count 58→263, workflows 17→50, AI skills 0→35, components, etc.).
- Tabulate the work added since Feb 2026 (governance spine, decisions registry, propagate skill, styles governance, asset pipeline, changelog pipeline progress, gateways verify/monitor/connect, agent skills, em-dash + UK spelling sweep, zombie prevention).
- Re-grade RFP completion matrix rows that have changed (changelog Cancelled → Partial; tutorials Incomplete → Completed; WCAG needs-input → audited).

**Phase 3 — Refresh aims + problem-statements (P0).**
- Global find-replace `v2/pages/NN_*` → `v2/<tab>/` paths.
- Replace bare counts with link to live catalogue (self-updating).
- Add a "Delivered since handover" subsection to each Tab on `aims.mdx` and each problem-statement.
- Bump `lastVerified: 2026-05-18` on both.

**Phase 4 — Complete or cull the Overview pages (P1).**
- `personas.mdx`: finish three missing personas with the same template as Developer (Gateway Operator, Orchestrator, Delegator).
- `internal-overview.mdx` vs `overview/about.mdx`: collapse to one canonical landing page.
- `governance-pipeline.mdx`: bump 214 → live script count; cross-link to ownerless-governance policy.

**Phase 5 — Surface the new infrastructure to Foundation reviewers (P1).** Add a single page `v2/internal/rfp/post-handover-summary.mdx` summarising what has been delivered between handover (Feb 2026) and 2026-05-18, so the Foundation can see the engagement has continued to compound — not as new RFP work but as ongoing stewardship.

## Community-help opportunities (internal/RFP surface specific)

1. **Empty Internal tab pages.** Six pages with only frontmatter or skeleton headings are nav-registered and load empty. Each is a 30–60 minute writeup for a community contributor with light Livepeer context (definitions, ecosystem, references, strategic-alignment, outcomes, deliverables).
2. **Persona journey maps for Gateway Operator, Orchestrator, Delegator.** Developer persona is the template. The RFP report Part 9 / Section 3.3 contains the journey-stage data; a contributor could lift it directly into the same mermaid + table format used for Developer.
3. **Number-refresh sweep.** Replace every "58 scripts" / "17 workflows" claim across `aims.mdx`, `problem-statements.mdx`, `livepeer-docs-v2-report.md` with either current numbers or a link to the live catalogue. Mechanical, scoped, ideal first-PR for a docs contributor.
4. **`v2/pages/NN_*` path sweep.** Same as above for stale path references — a single replace pass across the three RFP narrative files plus `governance.mdx`. Auditable with grep before/after.
5. **Refresh CONTRIBUTING/docs-guide cross-links from the Internal tab.** The tab currently links to a "Documentation Reviews" Notion page; the public-facing contributor surface (`docs-guide/contributing/contributing.mdx`) is richer and should be the primary callout. Re-pointing the cards is a five-minute change with high navigation payoff.
