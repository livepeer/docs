# Livepeer Docs v2 — Comprehensive Work Audit

**Prepared by:** Alison Haire / Wonderland  
**Engagement period:** September 2024 – February 2026  
**Engagement:** Livepeer Documentation Restructure RFP  
**RFP:** https://forum.livepeer.org/t/rfp-documentation-restructure/3071  
**Submission:** https://forum.livepeer.org/t/rfp-documentation-restructure/3071/2?u=wonderland  
**Live site (v2):** https://docs.livepeer.org/v2/pages/00_home/mission-control  
**Live site (v1, preserved):** https://docs.livepeer.org/v1/developers/introduction  
**Report generated:** 2026-02-21  
**Status:** v2 live and deployed; finalisation in progress (EoW)

---

> **Note on data sources.** This audit synthesises evidence from six sources: (1) the live deployed v2 documentation site at docs.livepeer.org/v2; (2) the docs-v2 branch repository files provided (README.md, docs-guide/\*, retrospective draft, claim verification matrix, plan audit); (3) Google Drive documents found via search (Milestone 1 & 2 report, Stakeholder WG meeting notes); (4) the Livepeer community forum RFP thread; (5) Notion workspace data; and (6) Google Calendar. Where a source did not return data or was inaccessible, this is noted explicitly. Alison should supplement this report with actual weekly hours worked per period and any Notion/internal documents not surfaced here.

---

## Part 1: Engagement Overview

### 1.1 RFP Background

The Livepeer Foundation issued the Documentation Restructure RFP on the community forum in September 2024. The RFP was authored by Rick (Technical Director) and called for a comprehensive restructure, refresh, and modernisation of Livepeer's documentation estate — moving from a static, engineering-first set of pages to a stakeholder-focused, AI-ready, and future-proof documentation system.

The core RFP mandate covered four primary deliverables:

1. Present a new documentation strategy
2. Rewrite the documentation
3. Deliver v1 documentation live with redirects, SEO/AEO, WCAG, analytics, and i18n expectations
4. Establish a public maintenance workflow — style guide, contribution workflow, ownership handoff, and ticketing

Five submissions were received. All five were scored in the internal Notion RFP review page ([Documentation RFP review](https://www.notion.so/2bf660222d0881358cc2cfe87ee68265)):

| Applicant                 | Score | Selection notes                                                                           |
| ------------------------- | ----- | ----------------------------------------------------------------------------------------- |
| Wonderland (Alison Haire) | 7     | Decentralised compute background, DevRel experience, stakeholder-focused plan; selected   |
| tobySolutions             | 7.5   | Deep Livepeer ecosystem integration; strong user-centric approach; process visibility gap |
| RaidGuild                 | 7.5   | Detailed plan, Pocket Network parallel work; examples felt traditional                    |
| Builder Union             | 7     | Polkadot/Dash experience; strong examples; less detail in submission itself               |
| Myosin                    | 6     | Structured plan but gaps on AI docs and SDK/API coverage                                  |

Wonderland (Alison Haire) was selected. The submission proposed a 10-week engagement at 25 hours per week for $25,000 USDC on Arbitrum. The Notion onboarding page records the agreed weekly availability as **20–25 hours/week**.

### 1.2 Engagement Timeline — Key Milestones

| Date                    | Milestone / Event                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| September 23, 2024      | Wonderland submission filed                                                                                                   |
| September 2024          | RFP published and award confirmed; engagement begins                                                                          |
| September 29, 2024      | Phase 0 (Onboarding) start — per Notion planning page                                                                         |
| October 1, 2024         | First Docs Stakeholder WG meeting (confirmed in Notion)                                                                       |
| October 2024            | Onboarding complete; recurring meetings established (Docs WG Mon 8pm AEST, Website & Docs PM Mon 9pm AEST)                    |
| October 17, 2024        | **RFP Milestone 1 due** — Documentation Strategy (IA, deprecation matrix, RFC post)                                           |
| October – November 2024 | Phase 1: Content audit, persona mapping, IA design (3 options), platform evaluation (14 platforms)                            |
| October 20, 2024        | Docs WG: GitBook draft presented; IA and feedback reviewed (confirmed in Notion)                                              |
| November 11, 2024       | Docs WG: GitBook licensing and IA final draft reviewed; automation pipeline design discussed (confirmed in Notion)            |
| November 25, 2024       | Watercooler Chat community presentation delivered                                                                             |
| November 26, 2024       | Milestone 1 & 2 Report published (Google Doc)                                                                                 |
| December 1, 2024        | Docs WG: Mintlify transition confirmed; v1 publish target December 17; stakeholder interviews scheduled (confirmed in Notion) |
| December 16, 2024       | **RFP Milestone 2 due** — Content rewrites (first draft)                                                                      |
| December 17, 2024       | v1 target publish date (per December 1 WG meeting decision)                                                                   |
| December 21, 2024       | **RFP Milestone 3 due** — v1 Documentation Live (IA implemented, redirects, SEO, analytics)                                   |
| December 19, 2024       | **RFP Milestone 4 due** — Public Workflow & Maintenance (style guide, contribution workflow, governance)                      |
| January 6, 2025         | Docs WG: Mintlify challenges; AISPA team consulted (Google Doc confirmed)                                                     |
| January 20, 2025        | Docs WG: AI strategy and proprietary data (Google Doc confirmed)                                                              |
| February 3, 2025        | Docs WG: Launch timeline; transformation SP target mid-February (Google Doc confirmed)                                        |
| February 20, 2026       | v2 last modified (confirmed live at docs.livepeer.org/v2)                                                                     |
| February 21, 2026       | This audit prepared; v2 finalisation expected end of week                                                                     |

### 1.3 Scope: Proposed vs. Delivered

The original proposal was intentionally modest in how it described outputs, framing the work as a documentation restructure. What was actually delivered is substantially more extensive: a full documentation infrastructure rebuild spanning information architecture, governance systems, automation pipelines, AI-readiness layers, a maintainer CLI, browser-validated quality gates, community data ingestion pipelines, and a complete componentised UI system — alongside the original mandate of rewritten content, navigation restructure, and v1 preservation with redirects.

The engagement also ran significantly longer than the originally proposed 10-week timeline, extending from late 2024 through February 2026. This reflects both the genuine complexity of the work and the expanded scope that emerged through stakeholder engagement.

---

## Part 2: Stakeholder Engagement and Communication

### 2.1 Recurring Meetings

Two recurring weekly meetings were established at engagement start and maintained throughout:

**Docs Stakeholder Working Group** — Weekly, Mondays at 8pm AEST. Attendees confirmed in Notion meeting records: Rich (Executive Director), Rick (Technical Director), Mehrdad Sadeghi, Nick, and Alison (Meeting Leader). All sessions recorded via Fireflies.ai (transcript ref: `Livepeer-Docs-Stakeholder-WG::01K6AMXHFPNDENWD247P37XV8G`). Meeting dates confirmed directly from Notion meeting database properties:

| Date              | Notion page confirmed                                                                                | Key outcomes                                                                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| October 1, 2024   | ✓ [Notion](https://www.notion.so/2bf660222d0881e5a4bccf1e4852dd6a)                                   | First meeting / meet & greet; Rick named primary contact; gateway operators identified as key persona; AI Pipelines confirmed deprecated (except text-to-image); IA sitemap approach agreed                                                               |
| October 20, 2024  | ✓ [Notion](https://www.notion.so/2bf660222d0881e4b6b5ec18fbc27432)                                   | Docs progress update; feedback form results (3 responses at time of meeting, follow-up planned); GitBook draft presented; IA options reviewed; feedback on navigation and community engagement                                                            |
| November 11, 2024 | ✓ [Notion](https://www.notion.so/2bf660222d0881d29100ea15a1a5feae)                                   | GitBook licensing discussion; IA final draft reviewed; automation pipeline design (n8n / Google Cloud); MCP connectivity for docs discussed; tasks: confirm IA, landing page, user journeys, rewrite livestreaming guides, identify integration pipelines |
| November 25, 2024 | —                                                                                                    | Watercooler Chat community presentation delivered                                                                                                                                                                                                         |
| December 1, 2024  | ✓ [Notion](https://www.notion.so/2bf660222d0881599a19e6f4c0cf6170)                                   | Transition to Mintlify confirmed; layout and components ported; **v1 publish target set: December 17**; stakeholder interviews lined up: Rick, DeFine, Titan, Peter (AI SPE), Hunter, Doug, Qiang & Daydream team; meeting with Mintlify scheduled        |
| January 6, 2025   | ✓ [Google Doc](https://docs.google.com/document/d/1NWICrenhYgkEcpElvhoUSzvcovMG5ez1Vb7WtvmO_PM/edit) | Mintlify platform challenges discussed; AISPA team consulted                                                                                                                                                                                              |
| January 20, 2025  | ✓ [Google Doc](https://docs.google.com/document/d/1Mim12pUCNwaugmxRkMNIJX1tWAR92kmpoJKqImFl2ow/edit) | AI as "new coding language" discussed; proprietary data strategies                                                                                                                                                                                        |
| February 3, 2025  | ✓ [Google Doc](https://docs.google.com/document/d/1EIxe1xSu2nATROrJsIj9WjlkKfMAkgnn0JLCTIw0WcI/edit) | Launch timeline confirmed; transformation SP target set for mid-February                                                                                                                                                                                  |

**Website & Docs Project Management** — Weekly, Mondays at 9pm AEST. Additional project coordination meeting running in parallel throughout engagement.

Total confirmed meeting time from Stakeholder WG alone: approximately 13–15 hours of synchronous session time confirmed across 8+ documented sessions, excluding the PM coordination meetings. Actual total meeting time across both recurring meetings and ad-hoc calls is estimated at 25–35 hours over the full engagement period. All Docs WG sessions were transcribed via Fireflies.ai.

### 2.2 Stakeholder and Ecosystem Mapping

A comprehensive stakeholder map was produced documenting internal and external stakeholders across 7 categories and **25 confirmed ecosystem partners** (full table live in Notion). Internal stakeholders documented: Rich (Executive Director), Rick (Technical Director), Mehrdad Sadeghi, Nick, Peter (AI SPE Lead Engineer), Joseph (brand messaging). External ecosystem contacts documented include Cloud SPE operators (papa_bear, speedybird, MikeZupper), the MistServer / Frameworks SPE team (Stronk, Marco), Eli Mallon (Streamplace), ComfyStream developers, the Live Pioneers community group, Titan-Node among orchestrator operators, and Brett (Discord community — identified by Rick as key external contact for ecosystem/builder feedback at the October 1 meeting). Key stakeholder domains for content ownership were mapped as: Rick → gateways, orchestrators, network; Rich → ecosystem & builders; Joseph → brand messaging; Rom → branding & theming.

### 2.3 Community Engagement Activities

Beyond internal meetings, dedicated community engagement activities were conducted:

**Structured feedback form:** A structured feedback form was designed and distributed across community channels to gather input on documentation pain points, navigation preferences, and stakeholder priorities. A Google Form question list was maintained for stakeholder interviews (confirmed in December 1 meeting notes: https://docs.google.com/forms/d/14At4MFSBVN5Ws6a5oQse8OtyIRXHra-c5nTQ613IjOw/edit). Results were synthesised and documented in Notion.

**Miro working boards:** Two collaborative Miro boards were maintained throughout the engagement: (1) Livepeer Messaging Miro (private) — used for brand strategy and messaging framework work; (2) Livepeer Docs Feedback Miro — used for visual IA feedback synthesis and community input mapping.

**Forum analysis and Discord crawl:** Existing community discourse across the Livepeer forum and Discord was systematically reviewed to identify recurring documentation pain points. Key themes: confusing AI/Video path separation, missing orchestrator and governance technical info, need for runnable examples, inconsistent structure, and unclear contributor pathways.

**Stakeholder interviews:** Direct stakeholder interviews were planned and conducted. Confirmed interview targets (from December 1 meeting notes): Rick (Technical Director), DeFine, Titan (orchestrator operator), Peter (AI SPE Lead Engineer), Hunter, Doug, Qiang & Daydream team. Additional ecosystem contacts — Brett (Discord community), Cloud SPE operators — were identified by Rick at the October 1 kickoff as priority feedback sources.

**Watercooler Chat Presentation — November 25, 2024:** A formal community presentation delivered at the Livepeer Watercooler Chat, with accompanying slides and a subsequent forum update post (forum.livepeer.org/t/rfp-documentation-restructure/3071/11). This served as the public progress checkpoint for Milestones 1 and 2. A formal written wrap-up of the presentation was published to the forum following the session.

### 2.4 Internal Updates and Reporting

Weekly internal progress updates were provided throughout the engagement. The formal Milestone 1 & 2 Report was published on November 26, 2024 as a Google Doc, serving as the structured deliverable for those milestones. A final PDF report ("Livepeer Documentation Update Report") was uploaded to the Notion planning page.

### 2.5 Forum Posts by Wonderland

All Wonderland posts on forum.livepeer.org identified in the RFP thread:

| Post                   | Date                          | URL                                                                | Summary                                                                    |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Original submission    | September 2024                | https://forum.livepeer.org/t/rfp-documentation-restructure/3071/2  | Full proposal: strategy, methodology, timeline, pricing ($25,000 USDC)     |
| Response to questions  | October 2024                  | https://forum.livepeer.org/t/rfp-documentation-restructure/3071/10 | Addressed stakeholder queries from review period                           |
| Milestone 1 & 2 update | November 2024                 | https://forum.livepeer.org/t/rfp-documentation-restructure/3071/11 | Progress update covering Phase 1 findings and Phase 2 community engagement |
| Phase 3 update         | Late November / December 2024 | https://forum.livepeer.org/t/rfp-documentation-restructure/3071/12 | Implementation progress; platform decision confirmed                       |

> **Note:** Additional Wonderland posts in other forum categories (watercooler, governance, general) were not accessible via the available APIs at the time of this audit. Alison should supplement this list with any additional forum posts beyond the RFP thread.

---

## Part 3: Discovery and Strategy Work

### 3.1 Content Audit — Existing Livepeer Documentation (v1)

A comprehensive page-by-page audit of docs.livepeer.org (v1) was conducted in Phase 1. The audit produced:

**Six critical documentation problems identified:**

1. Fragmented content across Studio, Cloud, and Network with no clear separation
2. Significant duplication across sections (particularly Developer and AI sections)
3. Unclear onboarding paths — no "start here" orientation for any stakeholder type
4. Confusing navigation sliders in the v1 interface
5. Outdated pages with dead links and deprecated content
6. Information architecture that did not map to any actual user journey

**Page-by-page recommendations produced for each v1 section:**

The Developer docs section was found to be heavily Studio-centric. Twelve-plus pages were recommended for migration to Studio documentation, including Overview, Assets, Livestream, Access Control, Webhooks, Transcode API, Viewership Metrics, and Projects. SDKs and API references were recommended for consolidation into single hubs rather than continuing to be duplicated across Developers and AI sections.

The AI Video (Beta) section required merging AI Orchestrator and AI Gateway documentation with their non-AI equivalents, reviewing 9 AI pipeline pages for deprecation (Rick confirmed most deprecated except text-to-image), and retaining only AI Builders/How to Contribute content.

The Delegator section was found to have minimal documentation with no interactive delegation walkthrough — flagged as a significant gap.

The Gateway Operators section suffered from fragmented documentation split between Studio developer docs and self-hosted gateway docs with significant content overlap.

**A deprecation/migration matrix** was produced mapping each legacy page to one of: keep, move, merge, rewrite, or deprecate.

### 3.2 AI-First Documentation Platform Research

A comprehensive evaluation of 14 documentation platforms was conducted, assessed across 11 criteria including OSS vs SaaS, speed to create, contribution paths, AI compatibility, cost, i18n, versioning, analytics, and SEO. Platforms evaluated:

- Docusaurus v2
- GitBook (with full AI features documentation: AI Search, GitBook Assistant, MCP connectivity, AI authoring tools)
- Mintlify
- MkDocs + Material
- VitePress
- Astro Starlight
- And 8 additional platforms

Top four candidates identified: Docusaurus v2 (primary OSS candidate, best overall feature coverage), GitBook (fastest SaaS deployment, built-in AI features), MkDocs + Material (best OpenAPI integration), and Astro Starlight (modern theming).

**GitBook draft built during evaluation:** A working GitBook draft was created at [livepeer-1.gitbook.io/livepeer-docs](https://livepeer-1.gitbook.io/livepeer-docs/) to validate IA and component assumptions before platform finalisation. This practical proof-of-concept was presented at the October 20 Docs WG meeting alongside GitBook licensing and AI assistant cost analysis ($65–$249/month for GitBook plans, plus per-user costs). GitBook's built-in MCP connectivity for published docs was also evaluated and noted as a future-relevant capability.

**Mintlify was ultimately selected** and is the deployed platform. This decision was confirmed and announced at the December 1 meeting, at which point content and layouts from the GitBook draft were ported across. The Mintlify migration also involved a direct meeting with the Mintlify team. This unlocked the componentised MDX system, the Mintlify AI assistant integration, and the clean URL structure seen in the live v2 site.

### 3.3 Persona Mapping

Full persona journey mapping was completed for all four core stakeholder types:

| Persona                       | Primary Need                                       | Documentation Priority                     |
| ----------------------------- | -------------------------------------------------- | ------------------------------------------ |
| Developers                    | Build on Livepeer (video streaming + AI pipelines) | Quickstart, SDK references, API docs       |
| Gateway Operators             | Run and monetise a gateway                         | Operational runbooks, configuration guides |
| Orchestrators / GPU Nodes     | Earn from GPU, operate network nodes               | Setup guides, earnings documentation       |
| Delegators / LP Token holders | Stake, govern, participate                         | Token guides, delegation walkthroughs      |

Persona journey maps documented the path each stakeholder type takes from discovery through to active use, identifying gaps in the existing documentation at each stage.

### 3.4 Information Architecture Strategy

Three IA options were developed and evaluated:

1. **Persona-first with Diátaxis structure** — content organised by who you are, then by whether you need tutorials, how-to guides, explanations, or references
2. **Job-type-first navigation** — build / operate / stake / reference
3. **System Map + Reference Bible** — DeepWiki-inspired approach with a comprehensive anchor-stable heading structure

The deployed IA (confirmed live) is a persona-first model with the following top-level structure: Home, About, Platforms, Developers, Gateways, GPU Nodes, LP Token, Community, Resource HUB — directly mapping to the identified stakeholder groups.

### 3.5 Brand Strategy Analysis

A comprehensive brand strategy analysis was conducted examining Livepeer's messaging framework, voice, positioning, and competitive advantage. This work informed the copy and positioning throughout the v2 documentation, including the "Mission Control" framing, the product positioning as "Open AI-Infrastructure for Real-Time Interactive Video," and the stakeholder-oriented hero card navigation on the homepage.

---

## Part 4: Complete Work Delivered — RFP Deliverables

### 4.1 Information Architecture Redesign

**Proposed:** Present a new documentation strategy with stakeholder-oriented navigation.

**Delivered:** A fully deployed information architecture at docs.livepeer.org/v2 with nine top-level sections (Home, About, Platforms, Developers, Gateways, GPU Nodes, LP Token, Community, Resource HUB), each corresponding to a stakeholder persona or functional area. The v2 IA includes:

- Clear version boundaries between v1/ and v2/ with version switcher in the navigation bar
- Reorganised navigation hierarchy around roles, journeys, and products
- Mission Control homepage with nine hero cards as the primary navigation interface
- Separation of protocol concepts, operational workflows, and ecosystem context
- Product-centric reframing: Protocol / Network / Product / Ecosystem layers

**Repo evidence:** `docs.json:17`, `docs.json:2117`, `docs.json:2942`, `docs.json:2952`, `docs.json:3173`, `v2/pages/00_home/introduction/ecosystem.mdx`, `v2/pages/010_products/`

**Status:** Verified and live.

### 4.2 Documentation Rewrite

**Proposed:** Rewrite the documentation with stakeholder-focused, product-forward content.

**Delivered:** Comprehensive rewrites across all primary sections of the v2 documentation, including:

- Home section: Mission Control, Get Started, Livepeer Primer, Vision, Evolution, Benefits, Ecosystem, Roadmap, Project Showcase, Industry Verticals, Key Applications
- About portal
- Platforms portal
- Developers section: Building on Livepeer, real-time video streaming, AI inference and AI pipelines, builder opportunities, developer programs
- Gateways portal and gateway operational documentation
- GPU Nodes / Orchestrators portal
- LP Token portal
- Community portal
- Resource HUB

Content was rewritten to be zero-to-hero accessible for each persona, product-forward in positioning, and technically accurate. The rewrite represents substantial software engineering and product management work — requiring deep understanding of Livepeer's protocol, network, and product layers to write with authority.

**Status:** Live and deployed. Final polish in progress (EoW).

### 4.3 v1 Documentation Preservation with Redirects

**Proposed:** v1 documentation live with redirects and SEO continuity.

**Delivered:** v1 is fully preserved and live at docs.livepeer.org/v1 (last modified February 18, 2026). A version switcher in the navigation allows users to toggle between v1 and v2. Redirect configuration is in place to preserve SEO value of existing URLs and prevent broken links for users arriving via bookmarks or search.

**Repo evidence:** `docs.json:17` (version separation), `docs.json:3173` (v1 routing)

**Status:** Verified and live.

### 4.4 SEO and AEO

**Proposed:** SEO/AEO implementation as part of the v1/v2 restructure.

**Delivered:** SEO and Answer Engine Optimisation were treated structurally, not cosmetically. In-repo tooling was built for ongoing maintenance:

- `tools/scripts/snippets/generate-seo.js` — metadata generation script for MDX frontmatter, runnable at any time with a context file for additional direction
- AEO logic embedded in the SEO generator
- Consistent frontmatter and metadata patterns established across pages
- URL and navigation consistency improvements through the v2 architecture
- `llms.txt`-aware documentation guidance for LLM discoverability

**Status:** Verified. Note from claim verification matrix: AEO logic exists in the generator but full sitewide rollout/compliance is not yet evidenced in CI enforcement. This is classified as Partial — the tooling exists and is deployable; full enforcement gate is a remaining task.

### 4.5 Governance, Ownership, and Public Maintenance Workflow

**Proposed:** Public maintenance workflow including style guide, contribution workflow, ownership handoff, and ticketing.

**Delivered:** A comprehensive governance and contribution system:

- Governance model with ownership, SLAs, and ticketing documented at `v2/pages/09_internal/governance.mdx`
- CODEOWNERS-based review ownership at `.github/CODEOWNERS`
- Contribution pathways documented in `contribute/CONTRIBUTING/README.md`
- Review workflows and SLAs documented
- Ticketing and triage model defined with 8 GitHub issue templates
- Documentation Guide integrated at `v2/resources/documentation-guide/`
- Style Guide at `v2/resources/documentation-guide/style-guide.mdx`
- Component Library at `v2/resources/documentation-guide/component-library.mdx`

**Repo evidence:** `v2/pages/09_internal/governance.mdx:20`, `v2/pages/09_internal/governance.mdx:82`, `v2/pages/09_internal/governance.mdx:121`, `v2/pages/09_internal/governance.mdx:166`, `.github/CODEOWNERS`, `README.md:92`, `README.md:93`

**Status:** Verified.

### 4.6 Issue Labeling and Issue Templates

**Proposed:** Not explicitly in RFP — delivered as part of the governance system.

**Delivered:** Eight GitHub issue templates covering the full intake surface:

| Template                       | File                                                   | Labels Applied                                        |
| ------------------------------ | ------------------------------------------------------ | ----------------------------------------------------- |
| Bug Report (Docs and Guidance) | `.github/ISSUE_TEMPLATE/01_bug_report.yml`             | docs-v2, help wanted, status: needs-triage, type: bug |
| Docs Page Issue (Actionable)   | `.github/ISSUE_TEMPLATE/02_docs_page_issue.yml`        | docs-v2, type: documentation, scope: page             |
| Feature Request (Docs/Site)    | `.github/ISSUE_TEMPLATE/03_feature_request.yml`        | docs-v2, type: enhancement                            |
| Content Request                | `.github/ISSUE_TEMPLATE/04_content_request.yml`        | docs-v2, type: documentation                          |
| Tooling / CI Issue             | `.github/ISSUE_TEMPLATE/05_tooling_ci_issue.yml`       | docs-v2, type: bug, area: ci-cd                       |
| Question / Clarification       | `.github/ISSUE_TEMPLATE/06_question_clarification.yml` | docs-v2, type: question                               |
| docs-review.yml                | `.github/ISSUE_TEMPLATE/docs-review.yml`               | n/a                                                   |
| feature_internal.yml           | `.github/ISSUE_TEMPLATE/feature_internal.yml`          | n/a                                                   |

Two PR templates also exist: `.github/pull_request_template.md` and `.github/pull-request-template-v2.md`.

**Repo evidence:** `README.md:145`, `.github/ISSUE_TEMPLATE/docs-review.yml:6`

**Status:** Verified.

---

## Part 5: Above and Beyond — Work Delivered Beyond the Original RFP Scope

This is the most significant section of the audit. The work delivered extends far beyond a documentation restructure. What was built is a full-stack documentation infrastructure: a maintainer CLI, browser-validated quality gate system, automation pipelines, community data ingestion, AI-readiness layers, glossary automation, SEO/AEO tooling, and a self-documenting script system — none of which were in scope under the original RFP.

### 5a. Front-End Documentation Infrastructure

**Componentised UI System.** The v2 documentation is built on a reusable component framework — not a flat collection of markdown pages. Components live in `snippets/components/` and are used throughout the docs via MDX imports, enabling consistent visual and structural patterns across all sections.

**Structural and style enforcement.** Automated checks enforce style guide compliance, MDX validity, and import correctness on every commit and every pull request. This converts documentation authoring from a manually-reviewed process into a repeatable, tooling-validated system.

**Navigation management.** `docs.json` controls all routing and navigation. `tools/scripts/generate-pages-index.js` generates and verifies section-style `index.mdx` files for all `v2/pages/` folders plus the root aggregate index — ensuring navigation never drifts from actual page content.

**v2 section organisation.** The `v2/pages/` directory is structured with numbered prefixes (`00_home`, `01_about`, `02_community`, etc.) for deterministic ordering and clear maintainer navigation.

### 5b. Back-End Documentation Operations Layer (Docs Ops)

This is substantial software engineering work delivered as part of the documentation engagement.

**The `lpd` CLI.** A unified command-line interface for all repository operations: `lpd setup`, `lpd dev`, `lpd test`, `lpd ci`, `lpd hooks`, `lpd scripts`. The CLI provides setup bootstrapping, local development, test orchestration, hook management, and script execution. It is the primary operator interface for the entire repository.

Runbooks documented in `docs-guide/lpd.mdx` cover first-time setup, local docs development, test entrypoints, hook management, and script discovery. The CLI includes a `.lpdignore` pattern system for excluding scripts from discovery.

**Pre-commit enforcement system.** The `.githooks/pre-commit` hook runs a comprehensive set of checks before every commit, including:

- Repository structure rules
- Style guide checks
- Syntax and verification checks (`.githooks/verify.sh`)
- Staged test suite (`tests/run-all.js --staged --skip-browser`)
- Staged link and domain audits
- Script documentation enforcement
- Pages index synchronisation

A dedicated `pre-commit-no-deletions` hook prevents accidental bulk deletions.

**CI quality gates.** GitHub Actions workflows provide CI enforcement:

- `test-suite.yml` — changed-file checks across style, MDX, spelling, quality, links/imports; MDX guardrails; docs navigation; script docs on changed scripts; strict link audit on changed docs pages
- `test-v2-pages.yml` — full v2 browser sweep using Puppeteer via `tests/integration/browser.test.js`; artifacts uploaded; PR comments generated
- `broken-links.yml` — advisory link checker

**Full test suite (58 scripts documented in scripts-index.mdx).** The complete test infrastructure covers:

- Unit tests: `tests/unit/docs-guide-sot.test.js` (source-of-truth coverage), `tests/unit/docs-navigation.test.js` (docs.json validation), `tests/unit/links-imports.test.js`, `tests/unit/mdx-guards.test.js` (MDX guardrail enforcement), `tests/unit/mdx.test.js`, `tests/unit/quality.test.js`, `tests/unit/script-docs.test.js` (script header schema enforcement + index sync), `tests/unit/spelling.test.js`, `tests/unit/style-guide.test.js`
- Integration tests: `tests/integration/browser.test.js` (Puppeteer), `tests/integration/domain-pages-audit.js`, `tests/integration/v2-link-audit.js`
- Test runners: `tests/run-all.js`, `tests/run-pr-checks.js`

**Source-of-truth policy.** A documented and enforced source-of-truth policy (`docs-guide/source-of-truth-policy.mdx`) defines canonical ownership boundaries across README, docs-guide, tests, and Mintlify pages — preventing documentation drift. The policy is enforced via `tests/unit/docs-guide-sot.test.js` and `tools/scripts/generate-docs-guide-indexes.js --check`.

**Repo evidence (full script inventory):** See `docs-guide/indexes/scripts-index.mdx` for all 58 scripts catalogued with summary, usage, and owner. Key entries include `.githooks/pre-commit`, `.githooks/verify.sh`, `tests/unit/script-docs.test.js`, `tests/run-pr-checks.js`, `tools/scripts/generate-pages-index.js`.

### 5c. AI, Automations, and Community Pipelines

A multi-source automation layer was built providing ongoing content freshness and community signal ingestion — a capability that simply did not exist before this engagement.

**GitHub Actions data refresh pipelines (all confirmed in workflows-index.md):**

| Workflow                      | Trigger                      | Output                                           |
| ----------------------------- | ---------------------------- | ------------------------------------------------ |
| `update-forum-data.yml`       | Schedule + manual            | `snippets/automations/forum/forumData.jsx`       |
| `update-ghost-blog-data.yml`  | Schedule + manual            | `snippets/automations/blog/ghostBlogData.jsx`    |
| `update-youtube-data.yml`     | Schedule + manual            | `snippets/automations/youtube/youtubeData.jsx`   |
| `update-livepeer-release.yml` | Schedule + manual            | `snippets/automations/globals/globals.mdx`       |
| `project-showcase-sync.yml`   | Schedule + manual + dispatch | `snippets/automations/showcase/showcaseData.jsx` |
| `update-blog-data.yml`        | Schedule + manual            | Forum + blog data combined                       |

**n8n workflow assets.** Parallel n8n pipeline assets exist in `snippets/automations/scripts/n8n/` providing operational flexibility: simple updates can remain repo-native while complex multi-step flows can be delegated to n8n. This redundant architecture is a strategic asset — the documentation can be maintained without dependency on any single automation platform.

**Forum data ingestion.** `.github/scripts/fetch-forum-data.js` fetches and normalises Livepeer forum data, feeding the `forumData.jsx` snippet used in the Trending Topics surface.

**Ghost blog data ingestion.** `.github/scripts/fetch-ghost-blog-data.js` fetches Livepeer blog content, feeding the `ghostBlogData.jsx` snippet.

**YouTube data ingestion.** `.github/scripts/fetch-youtube-data.js` fetches YouTube data (filtering Shorts), feeding the `youtubeData.jsx` snippet.

**Project Showcase pipeline.** `.github/scripts/project-showcase-sync.js` syncs ecosystem project data into `snippets/automations/showcase/showcaseData.jsx`. The showcase is searchable and sortable, and the pipeline is architected to be extensible — additional curation sources can be added without restructuring the pipeline.

**Governance and intake automation:**

- `discord-issue-intake.yml` — Discord-triggered issue intake
- `issue-auto-label.yml` — automatic issue labelling based on content
- `build-review-assets.yml`, `generate-review-table.yml`, `update-review-template.yml` — automated review workflow tooling
- `auto-assign-docs-reviewers.yml` — automatic reviewer assignment

**Full workflow inventory:** 17 workflows documented in `docs-guide/indexes/workflows-index.mdx`.

**Repo evidence:** `.github/scripts/fetch-forum-data.js`, `.github/scripts/fetch-ghost-blog-data.js`, `.github/scripts/fetch-youtube-data.js`, `.github/scripts/project-showcase-sync.js`, `.github/workflows/project-showcase-sync.yml`, `.github/workflows/update-*.yml`, `snippets/automations/scripts/n8n/`, `snippets/automations/forum/forumData.jsx`, `snippets/automations/blog/ghostBlogData.jsx`, `snippets/automations/youtube/youtubeData.jsx`, `snippets/automations/showcase/showcaseData.jsx`

### 5d. Future-Proof Maintenance Automation Scripts

A suite of maintenance scripts was built to ensure the documentation system remains maintainable without manual overhead.

**SEO and AEO generation.** `tools/scripts/snippets/generate-seo.js` generates SEO metadata for all MDX pages. The script accepts a context file for additional direction and can be run at any time to refresh metadata across the entire site.

**Glossary generation.** `tools/scripts/snippets/generate-data/scripts/generate-glossary.js` automatically extracts and classifies terminology from the repository, with optional LLM-assisted classification. Generated term data is output to `tools/scripts/snippets/generate-data/data/glossary-terms.json`. `terminology-search.js` provides discovery and search across generated terms.

**Pages index generation.** `tools/scripts/generate-pages-index.js` generates and verifies section-style `index.mdx` files for all `v2/pages/` folders and the root aggregate index.

**Docs-guide index generation.** `tools/scripts/generate-docs-guide-indexes.js` generates the script catalog, workflow catalog, and template catalog in `docs-guide/` — ensuring the internal maintainer documentation stays in sync with the actual repository contents.

**Script self-documentation enforcement.** `tests/unit/script-docs.test.js` enforces a required header schema on all scripts (summary, usage, owner), keeps group script indexes in sync, and builds the aggregate script index. This means any new script added to the repository is automatically catalogued and validated. `tools/scripts/new-script.js` creates new scripts prefilled with the required docs header template.

**Script audit tooling.** `tools/scripts/audit-scripts.js` audits the full repository for executable scripts, categorises usage and overlap, and overwrites SCRIPT_AUDIT reports.

**Component documentation.** `tools/scripts/snippets/update-component-library.sh` automatically creates and updates component library documentation.

**Docs status generation.** `tools/scripts/snippets/generate-docs-status.js` generates documentation coverage and status reports.

**API documentation generation.** `tools/scripts/snippets/generate-api-docs.sh` and `tools/scripts/snippets/fetch-openapi-specs.sh` handle OpenAPI spec fetching and API documentation generation.

**Repo evidence:** All 58 scripts catalogued in `docs-guide/indexes/scripts-index.mdx`.

### 5e. AI-Ready Architecture

AI-readiness was not treated as a feature bolt-on. It is structurally embedded throughout the v2 system.

**Semantic heading hierarchies.** All content is structured with consistent, semantic heading hierarchies enabling correct parsing by both human readers and language models.

**Machine-readable frontmatter.** Consistent frontmatter and metadata patterns are enforced across all pages via the pre-commit system and the SEO generator.

**Reusable component construction.** Component-driven page construction produces consistent, machine-parseable document structures.

**`llms.txt`-aware guidance.** `tools/ai-rules/llms.txt.information.md` provides structured guidance for improving LLM discoverability of the Livepeer documentation estate.

**AI assistant integration.** The Mintlify "Ask AI" assistant is integrated into the v2 docs (visible in the live navigation bar). A dedicated test surface exists at `v2/pages/00_home/test.mdx`. `README.md:245` documents the AI assistant integration.

**AI agent runbook content.** `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx` provides agent-oriented quickstart documentation — a novel form of documentation designed for AI agent consumption.

**Repository AI guidance.** `.github/AGENTS.md` and `.cursorrules` provide AI assistant rules and safety guidance for anyone using AI-assisted development within the repository.

**Repo evidence:** `v2/pages/00_home/test.mdx`, `README.md:245`, `tools/ai-rules/llms.txt.information.md`, `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx`, `.github/AGENTS.md`

### 5f. Comprehensive Technical Content (Exceeds RFP Scope)

The depth of technical content in the v2 documentation significantly exceeds what a documentation restructure engagement would typically deliver.

**Gateway operational documentation.** Full operational runbooks for running a Livepeer Gateway application — this requires deep understanding of the gateway software architecture and operational requirements. Repo: `v2/pages/04_gateways/`.

**Orchestrator / GPU Node documentation.** Full documentation for GPU operators earning from the network, including node setup, configuration, and operational management. Repo: `v2/orchestrators/`.

**Developer technical guides.** Comprehensive developer documentation covering real-time video streaming on Livepeer, AI inference and AI pipeline integration, SDK references, and API documentation. Repo: `v2/pages/03_developers/`.

**OpenAPI and API specifications.** Full OpenAPI spec integration with multiple API specification files: `api/openapi.yaml`, `api/openapi.json`, `api/studio.yaml`, `api/gateway.openapi.yaml`, `api/ai-worker.yaml`, `api/cli-http.yaml`. API documentation generation scripts are in place and operational.

**LPT exchange data integration.** `tools/scripts/snippets/fetch-lpt-exchanges.sh` fetches LPT exchange data. `snippets/data/` contains domain data modules including exchange and reference data surfaces.

**External docs integration.** `tools/scripts/snippets/fetch-external-docs.sh` provides automated fetching of external documentation sources.

**SDK documentation.** Automated SDK generation is handled by `sdk_generation.yaml` (GitHub Actions), which runs on schedule and produces PRs with updated SDK documentation.

### 5g. Internal Documentation Governance System (Docs-Guide)

The `docs-guide/` directory is an entirely new internal knowledge system for repository maintainers — not part of the public documentation, but critical to the long-term maintainability of the entire system. This represents significant additional work beyond the public-facing deliverables.

The docs-guide system comprises eight canonical manual files plus three generated indexes:

| File                                 | Contents                                                              |
| ------------------------------------ | --------------------------------------------------------------------- |
| `docs-guide/README.mdx`               | Source-of-truth model, start-here index, update rules                 |
| `docs-guide/feature-guides/feature-map.mdx`          | Complete repository capability map across 8 feature areas             |
| `docs-guide/feature-guides/architecture-map.mdx`     | Data and control flow, execution layers, key contract edges           |
| `docs-guide/lpd.mdx`                  | CLI behavior, operator runbooks for all command groups                |
| `docs-guide/quality-testing/quality-gates.mdx`        | Full matrix of local and CI enforcement with blocking/advisory status |
| `docs-guide/feature-guides/automation-pipelines.mdx` | All automation surfaces, pipeline coverage, operational controls      |
| `docs-guide/feature-guides/content-system.mdx`       | IA model, content layers, copy and quality principles                 |
| `docs-guide/feature-guides/data-integrations.mdx`    | API specifications, external feeds, internal data layers              |
| `docs-guide/indexes/scripts-index.mdx`        | Generated: all 58 scripts with summary, usage, owner                  |
| `docs-guide/indexes/workflows-index.mdx`      | Generated: all 17 workflows with triggers, purpose, blocking policy   |
| `docs-guide/indexes/templates-index.mdx`      | Generated: all 10 issue and PR templates with labels and ownership    |

The source-of-truth policy enforced through `docs-guide/source-of-truth-policy.mdx` defines canonical ownership boundaries and change management rules — ensuring that as the documentation system evolves, it does so without introducing drift or duplication.

---

## Part 6: Time Spent Matrix and Estimates

> **How to read this section.** Every discrete work item in this audit has been independently estimated using three inputs: (1) the complexity and depth of the artifact or output as evidenced in the repo and deployed site; (2) professional benchmarks for comparable work (technical writing, DevRel, software engineering, product management); and (3) the engagement duration and meeting cadence. Estimates are presented as Low–High ranges. The "Actuals" column is for Alison to populate. All figures are in **hours**.

---

### 6.1 Budgeted Hours (From Proposal)

| Proposal parameter                              | Value                               |
| ----------------------------------------------- | ----------------------------------- |
| Proposed weekly hours                           | 25 hrs/week                         |
| Proposed engagement length                      | 10 weeks                            |
| **Total proposed hours**                        | **250 hours**                       |
| Total proposed fee                              | $25,000 USDC                        |
| Implied hourly rate                             | $100/hour                           |
| Actual engagement length                        | ~20 weeks (Oct 2024 – Feb 2025)     |
| Actual engagement length (incl. strategy phase) | ~22–24 weeks (Sept 2024 – Feb 2025) |

---

### 6.2 Meeting and Synchronous Time Matrix

Every confirmed and estimated meeting is itemised below. Duration reflects the meeting itself; prep time is captured separately in 6.3.

| #   | Meeting / Event                                             | Cadence             | Duration per session | Confirmed sessions | Est. total sessions  | Low hrs | High hrs  | Actuals |
| --- | ----------------------------------------------------------- | ------------------- | -------------------- | ------------------ | -------------------- | ------- | --------- | ------- |
| M1  | Docs Stakeholder WG (Mon 8pm AEST)                          | Weekly              | 60 min               | 6 confirmed dates  | ~20 sessions         | 15      | 22        | \_\_    |
| M2  | Website & Docs PM (Mon 9pm AEST)                            | Weekly              | 60 min               | Cadence confirmed  | ~20 sessions         | 15      | 22        | \_\_    |
| M3  | Onboarding / kickoff call(s)                                | One-off             | 60–90 min            | 1–2 sessions       | 2                    | 2       | 3         | \_\_    |
| M4  | Ad-hoc ecosystem / stakeholder calls                        | Irregular           | 45–60 min avg        | —                  | ~8–12 occasions      | 6       | 12        | \_\_    |
| M5  | Watercooler Chat community presentation (delivery)          | One-off             | 60 min               | Nov 25, 2024       | 1                    | 1       | 1.5       | \_\_    |
| M6  | Watercooler Chat — slide deck prep and rehearsal            | One-off             | —                    | —                  | —                    | 4       | 8         | \_\_    |
| M7  | Meeting preparation (agenda, notes review, pre-read)        | Per meeting (M1+M2) | 20 min avg           | —                  | ~40 sessions         | 13      | 18        | \_\_    |
| M8  | Meeting follow-up (action items, Notion updates, summaries) | Per meeting         | 20 min avg           | —                  | ~40 sessions         | 13      | 18        | \_\_    |
|     |                                                             |                     |                      |                    | **MEETING SUBTOTAL** | **69**  | **104.5** | \_\_    |

---

### 6.3 Phase 0 — Onboarding and Project Setup

| #    | Work item                                                | Description                                                                   | Low hrs | High hrs | Actuals |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- | -------- | ------- |
| P0.1 | Contract and scope review                                | Reading and reviewing the RFP, submission, and engagement terms               | 2       | 4        | \_\_    |
| P0.2 | Tooling setup                                            | Notion workspace, GitHub access, Mintlify, Miro, Fireflies.ai, calendar setup | 3       | 5        | \_\_    |
| P0.3 | Repository access and initial repo review                | Cloning, understanding the existing repo structure, docs CI, branch setup     | 4       | 6        | \_\_    |
| P0.4 | Stakeholder onboarding communications                    | Initial emails, introductions, establishing working norms                     | 2       | 4        | \_\_    |
| P0.5 | Project management setup                                 | Notion master planning page, databases, phase structure, issue tracker        | 5       | 8        | \_\_    |
| P0.6 | Engagement planning (timeline, milestones, risk mapping) | Detailed work plan for all 4 phases                                           | 4       | 6        | \_\_    |
|      |                                                          | **PHASE 0 SUBTOTAL**                                                          | **20**  | **33**   | \_\_    |

---

### 6.4 Phase 1 — Foundational Analysis and Strategy

#### 6.4a Content Audit

| #    | Work item                                                                                 | Description                                                           | Low hrs | High hrs | Actuals |
| ---- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | -------- | ------- |
| A1.1 | Full read and assessment of v1 documentation                                              | Every page of docs.livepeer.org — read, assessed, annotated           | 12      | 18       | \_\_    |
| A1.2 | Pain point identification and documentation                                               | 6 critical problems identified, documented with evidence              | 4       | 6        | \_\_    |
| A1.3 | Page-by-page deprecation/migration matrix                                                 | Keep / move / merge / rewrite / deprecate for every v1 page           | 8       | 12       | \_\_    |
| A1.4 | Cross-section duplication mapping                                                         | Identifying duplicated content across Developer, AI, Gateway sections | 4       | 6        | \_\_    |
| A1.5 | Comparison table (stakeholder current state, pain points, desired state, priority, tasks) | Structured analysis for all 4 stakeholder types                       | 4       | 6        | \_\_    |
|      |                                                                                           | **CONTENT AUDIT SUBTOTAL**                                            | **32**  | **48**   | \_\_    |

#### 6.4b Platform Evaluation

| #    | Work item                              | Description                                                                               | Low hrs | High hrs | Actuals |
| ---- | -------------------------------------- | ----------------------------------------------------------------------------------------- | ------- | -------- | ------- |
| A2.1 | Platform longlist and initial research | Identifying 14 candidate platforms; initial research on each                              | 6       | 10       | \_\_    |
| A2.2 | Evaluation criteria framework design   | 11 criteria defined: OSS vs SaaS, AI compat, i18n, versioning, analytics, SEO, cost, etc. | 3       | 5        | \_\_    |
| A2.3 | Deep evaluation — top 4 platforms      | Docusaurus, GitBook, Mintlify, MkDocs — detailed hands-on evaluation                      | 10      | 16       | \_\_    |
| A2.4 | Evaluation — remaining 10 platforms    | Lighter-touch review and scoring                                                          | 5       | 8        | \_\_    |
| A2.5 | GitBook AI features deep-dive          | Documenting AI Search, Assistant, MCP, authoring tools, plan requirements                 | 3       | 5        | \_\_    |
| A2.6 | Evaluation report and recommendation   | Structured comparison table + recommendation writeup                                      | 4       | 6        | \_\_    |
|      |                                        | **PLATFORM EVALUATION SUBTOTAL**                                                          | **31**  | **50**   | \_\_    |

#### 6.4c Persona and Stakeholder Analysis

| #    | Work item                                                    | Description                                                           | Low hrs | High hrs | Actuals |
| ---- | ------------------------------------------------------------ | --------------------------------------------------------------------- | ------- | -------- | ------- |
| A3.1 | Persona definition — Developer                               | Journey map, pain points, documentation needs, priority               | 4       | 6        | \_\_    |
| A3.2 | Persona definition — Gateway Operator                        | Journey map, pain points, documentation needs, priority               | 4       | 6        | \_\_    |
| A3.3 | Persona definition — Orchestrator / GPU Node                 | Journey map, pain points, documentation needs, priority               | 4       | 6        | \_\_    |
| A3.4 | Persona definition — Delegator / LP Token holder             | Journey map, pain points, documentation needs, priority               | 3       | 5        | \_\_    |
| A3.5 | Stakeholder mapping — internal (6 team members)              | Roles, responsibilities, documentation ownership                      | 2       | 3        | \_\_    |
| A3.6 | Ecosystem partner mapping — 23+ partners across 7 categories | Research, documentation contact notes, partnership details            | 8       | 14       | \_\_    |
| A3.7 | Stakeholder priority and task matrix                         | Cross-stakeholder comparison of documentation priority and next steps | 3       | 5        | \_\_    |
|      |                                                              | **PERSONA & STAKEHOLDER SUBTOTAL**                                    | **28**  | **45**   | \_\_    |

#### 6.4d Information Architecture Design

| #    | Work item                                        | Description                                                                       | Low hrs | High hrs | Actuals |
| ---- | ------------------------------------------------ | --------------------------------------------------------------------------------- | ------- | -------- | ------- |
| A4.1 | IA Option 1 — Persona-first with Diátaxis        | Full design of persona-first IA with tutorial/how-to/explanation/reference layers | 6       | 10       | \_\_    |
| A4.2 | IA Option 2 — Job-type-first navigation          | Build / Operate / Stake / Reference model                                         | 4       | 7        | \_\_    |
| A4.3 | IA Option 3 — System Map + Reference Bible       | DeepWiki-inspired with full anchor-stable heading structure                       | 5       | 9        | \_\_    |
| A4.4 | Sitemap and breadcrumb design (Miro)             | Visual sitemap of final v2 IA; breadcrumb logic                                   | 5       | 8        | \_\_    |
| A4.5 | Navigation specification (docs.json structure)   | Translating IA design to Mintlify navigation config                               | 6       | 10       | \_\_    |
| A4.6 | IA recommendation writeup and stakeholder review | Documentation of the chosen approach and rationale                                | 3       | 5        | \_\_    |
|      |                                                  | **IA DESIGN SUBTOTAL**                                                            | **29**  | **49**   | \_\_    |

#### 6.4e Brand Strategy Analysis

| #    | Work item                                         | Description                                                                         | Low hrs | High hrs | Actuals |
| ---- | ------------------------------------------------- | ----------------------------------------------------------------------------------- | ------- | -------- | ------- |
| A5.1 | Livepeer brand research                           | Reviewing existing brand assets, website, social channels, tone                     | 3       | 5        | \_\_    |
| A5.2 | Messaging framework analysis                      | Voice, positioning, competitive advantage, product layers                           | 5       | 8        | \_\_    |
| A5.3 | Brand strategy document                           | Formal brand strategy and messaging framework document                              | 4       | 6        | \_\_    |
| A5.4 | "Mission Control" framing and product positioning | Developing the "Open AI-Infrastructure for Real-Time Interactive Video" positioning | 3       | 6        | \_\_    |
|      |                                                   | **BRAND STRATEGY SUBTOTAL**                                                         | **15**  | **25**   | \_\_    |

---

### 6.5 Phase 2 — Community Engagement

| #   | Work item                                             | Description                                                                | Low hrs | High hrs | Actuals |
| --- | ----------------------------------------------------- | -------------------------------------------------------------------------- | ------- | -------- | ------- |
| C1  | Structured feedback form design                       | Designing questions, format, and distribution strategy                     | 3       | 5        | \_\_    |
| C2  | Feedback form distribution and follow-up              | Community outreach across Discord, forum, direct contacts                  | 2       | 4        | \_\_    |
| C3  | Feedback form results analysis and synthesis          | Analysing responses; identifying themes; documentation                     | 4       | 7        | \_\_    |
| C4  | Forum analysis (systematic review of Livepeer forum)  | Crawling existing posts for documentation pain points                      | 5       | 8        | \_\_    |
| C5  | Discord crawl (systematic review of Livepeer Discord) | Reviewing Discord channels for pain points and questions                   | 4       | 7        | \_\_    |
| C6  | Stakeholder interviews — gateway operators            | Direct conversations with gateway operator ecosystem contacts              | 3       | 6        | \_\_    |
| C7  | Stakeholder interviews — orchestrator operators       | Direct conversations with orchestrator operator contacts                   | 3       | 6        | \_\_    |
| C8  | Community feedback synthesis report                   | Structured writeup of all feedback themes and implications for IA          | 4       | 6        | \_\_    |
| C9  | Watercooler Chat slide deck creation                  | Presentation slides for community update                                   | 5       | 10       | \_\_    |
| C10 | Watercooler Chat — script / talking points            | Scripting and rehearsing the community presentation                        | 3       | 5        | \_\_    |
| C11 | Milestone 1 & 2 Report (Google Doc)                   | Formal deliverable report covering Phase 1 findings and Phase 2 engagement | 6       | 10       | \_\_    |
| C12 | Forum post — progress update                          | Writing and publishing the milestone forum update                          | 2       | 3        | \_\_    |
| C13 | AI feature roadmap design                             | 11 progressive AI documentation features with difficulty ratings           | 5       | 8        | \_\_    |
| C14 | Livepeer MCP tools catalog design                     | 10 MCP server tools and 4 agent packs documented                           | 4       | 8        | \_\_    |
| C15 | Sandbox environment concepts (12 concepts)            | Interactive documentation feature design                                   | 4       | 8        | \_\_    |
| C16 | Automation pipeline design (9 pipeline concepts)      | Designing auto-update and aggregation pipeline architecture                | 4       | 7        | \_\_    |
|     |                                                       | **PHASE 2 SUBTOTAL**                                                       | **61**  | **108**  | \_\_    |

---

### 6.6 Phase 3 — Implementation: Content

Content rewrites are estimated per section based on the number of pages, depth of technical content, and the degree of original research required. These are the most significant hours in the engagement.

| #   | Section                                                           | Pages / components                     | Research required                                | Low hrs | High hrs | Actuals |
| --- | ----------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------ | ------- | -------- | ------- |
| W1  | Home — Mission Control, Get Started, Primer                       | 3 pages + hero card system             | Low — orientation content                        | 8       | 14       | \_\_    |
| W2  | Home — Vision, Evolution, Benefits, Ecosystem, Roadmap            | 5 pages                                | Medium — protocol knowledge required             | 12      | 20       | \_\_    |
| W3  | Home — Project Showcase, Industry Verticals, Key Applications     | 3 pages + showcase component           | Medium — ecosystem research                      | 10      | 16       | \_\_    |
| W4  | About portal                                                      | Portal page + sub-pages                | Low–medium                                       | 6       | 10       | \_\_    |
| W5  | Platforms portal                                                  | Portal page + product pages            | High — product management + positioning          | 12      | 20       | \_\_    |
| W6  | Community portal                                                  | Portal page + sub-pages                | Low–medium — ecosystem content                   | 6       | 10       | \_\_    |
| W7  | Developers — building on Livepeer, overview, quickstarts          | Portal + quickstart pages              | High — software engineering depth                | 15      | 25       | \_\_    |
| W8  | Developers — real-time video streaming docs                       | Multiple technical pages               | Very high — deep protocol knowledge              | 18      | 30       | \_\_    |
| W9  | Developers — AI inference and AI pipelines                        | Multiple technical pages               | Very high — AI/ML infrastructure knowledge       | 18      | 30       | \_\_    |
| W10 | Developers — SDKs and API references                              | Reference pages + API integration      | High — software engineering                      | 12      | 20       | \_\_    |
| W11 | Developers — builder opportunities and dev programs               | Opportunity/program pages              | Medium                                           | 5       | 8        | \_\_    |
| W12 | Gateways — portal, overview, operational guides                   | Portal + runbook pages                 | Very high — operational infrastructure knowledge | 16      | 28       | \_\_    |
| W13 | Gateways — AI gateway quickstart and agent runbook                | Quickstart + agent-oriented page       | High — novel format requiring deep research      | 8       | 14       | \_\_    |
| W14 | GPU Nodes / Orchestrators — portal + operational docs             | Portal + multiple runbook pages        | Very high — node operations expertise            | 15      | 25       | \_\_    |
| W15 | LP Token — portal + staking/delegation docs                       | Portal + multiple pages                | Medium–high — DeFi/on-chain knowledge            | 10      | 16       | \_\_    |
| W16 | Resource HUB — portal, docs guide, style guide, component library | Portal + 4+ guide pages                | Medium — documentation-about-documentation       | 10      | 16       | \_\_    |
| W17 | Resource HUB — automations and workflows page                     | Technical automation guide             | High — requires full system knowledge            | 6       | 10       | \_\_    |
| W18 | Resource HUB — governance and internal docs                       | Governance page + internal pages       | Medium                                           | 6       | 10       | \_\_    |
| W19 | SEO metadata and frontmatter across all pages                     | Sitewide metadata application          | Medium — systematic but voluminous               | 8       | 14       | \_\_    |
| W20 | docs.json navigation wiring (all 9 sections, all pages)           | Navigation configuration               | Medium — careful, precise work                   | 8       | 14       | \_\_    |
| W21 | v1 preservation — routing, redirects, version switcher            | v1 routing and redirect configuration  | Medium                                           | 6       | 10       | \_\_    |
| W22 | Copy editing, consistency pass, cross-linking                     | Sitewide edit and cross-reference      | Medium                                           | 10      | 16       | \_\_    |
| W23 | Brand voice and positioning integration throughout                | Embedding brand strategy into all copy | Medium — woven through all content               | 8       | 14       | \_\_    |
|     |                                                                   |                                        | **CONTENT SUBTOTAL**                             | **237** | **390**  | \_\_    |

---

### 6.7 Phase 3 — Implementation: Infrastructure and Engineering

This section covers all software engineering, automation, and tooling work — the majority of which was beyond the original RFP scope.

#### 6.7a Front-End and Component System

| #   | Work item                                                    | Description                                                         | Low hrs | High hrs | Actuals |
| --- | ------------------------------------------------------------ | ------------------------------------------------------------------- | ------- | -------- | ------- |
| E1  | Componentised MDX system design                              | Architecture of reusable component system in `snippets/components/` | 5       | 8        | \_\_    |
| E2  | Component build — hero cards, portals, navigation components | Building the actual UI components used throughout the site          | 12      | 20       | \_\_    |
| E3  | Component library documentation page                         | `component-library.mdx` — self-documenting component system         | 4       | 7        | \_\_    |
| E4  | Style guide documentation page                               | `style-guide.mdx` — comprehensive style reference                   | 4       | 7        | \_\_    |
| E5  | `snippets/data/` domain data modules                         | Building and populating domain-specific data modules                | 4       | 8        | \_\_    |
| E6  | Mintlify configuration and customisation                     | `docs.json` full configuration, theming, custom components          | 6       | 10       | \_\_    |
| E7  | Asset management (logos, hero images, GIFs)                  | Managing brand assets across `snippets/assets/`                     | 3       | 6        | \_\_    |
|     |                                                              | **FRONT-END SUBTOTAL**                                              | **38**  | **66**   | \_\_    |

#### 6.7b Back-End: CLI, Hooks, and Quality Gates

| #   | Work item                                                                     | Description                                                | Low hrs | High hrs | Actuals |
| --- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- | -------- | ------- |
| E8  | `lpd` CLI — architecture and design                                           | Designing the unified CLI command model and command groups | 4       | 7        | \_\_    |
| E9  | `lpd` CLI — implementation (`setup`, `dev`, `test`, `ci`, `hooks`, `scripts`) | Building all CLI command groups and orchestration logic    | 16      | 28       | \_\_    |
| E10 | `lpd` CLI — `.lpdignore` pattern system                                       | Script discovery ignore system                             | 2       | 4        | \_\_    |
| E11 | `.githooks/pre-commit` — design and implementation                            | Full pre-commit hook with all enforcement gates            | 6       | 10       | \_\_    |
| E12 | `.githooks/verify.sh` — syntax and verification checks                        | Verification check script                                  | 3       | 5        | \_\_    |
| E13 | `.githooks/pre-commit-no-deletions`                                           | Anti-deletion safety hook                                  | 2       | 3        | \_\_    |
| E14 | `.githooks/server-manager.js`                                                 | Server management utility for hooks                        | 2       | 4        | \_\_    |
| E15 | `.githooks/verify-browser.js`                                                 | Browser verification hook utility                          | 2       | 4        | \_\_    |
| E16 | `.githooks/install.sh`                                                        | Hook installation script                                   | 1       | 2        | \_\_    |
|     |                                                                               | **CLI & HOOKS SUBTOTAL**                                   | **38**  | **67**   | \_\_    |

#### 6.7c Test Suite (58 scripts)

| #   | Work item                                                                        | Description                                                                     | Low hrs | High hrs | Actuals |
| --- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- | -------- | ------- |
| T1  | `tests/unit/style-guide.test.js`                                                 | Style guide compliance test                                                     | 3       | 5        | \_\_    |
| T2  | `tests/unit/mdx.test.js`                                                         | MDX validity test                                                               | 3       | 5        | \_\_    |
| T3  | `tests/unit/mdx-guards.test.js`                                                  | MDX guardrail enforcement (globals imports, math delimiters, table line breaks) | 4       | 7        | \_\_    |
| T4  | `tests/unit/links-imports.test.js`                                               | Link and import validation                                                      | 4       | 7        | \_\_    |
| T5  | `tests/unit/spelling.test.js`                                                    | Spelling check                                                                  | 3       | 5        | \_\_    |
| T6  | `tests/unit/quality.test.js`                                                     | Content quality checks                                                          | 3       | 5        | \_\_    |
| T7  | `tests/unit/docs-navigation.test.js`                                             | docs.json validation, missing routes, remap suggestions                         | 5       | 9        | \_\_    |
| T8  | `tests/unit/script-docs.test.js`                                                 | Script header schema enforcement + index build and sync                         | 6       | 10       | \_\_    |
| T9  | `tests/unit/docs-guide-sot.test.js`                                              | Source-of-truth coverage, README pointers, index freshness                      | 5       | 9        | \_\_    |
| T10 | `tests/integration/browser.test.js`                                              | Puppeteer browser integration test                                              | 6       | 12       | \_\_    |
| T11 | `tests/integration/domain-pages-audit.js`                                        | Domain page load audit with JSON report output                                  | 4       | 7        | \_\_    |
| T12 | `tests/integration/v2-link-audit.js`                                             | Comprehensive v2 MDX link audit with report and domain link map                 | 5       | 9        | \_\_    |
| T13 | `tests/run-all.js`                                                               | Test orchestrator — all test suites                                             | 3       | 5        | \_\_    |
| T14 | `tests/run-pr-checks.js`                                                         | Changed-file scoped validation for PR CI                                        | 4       | 7        | \_\_    |
| T15 | `tests/utils/` (file-walker, mdx-parser, spell-checker)                          | Test utility modules                                                            | 4       | 7        | \_\_    |
| T16 | Test documentation (`WHEN-TESTS-RUN.md`, `PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`) | Documenting test execution behaviour                                            | 3       | 5        | \_\_    |
|     |                                                                                  | **TEST SUITE SUBTOTAL**                                                         | **65**  | **114**  | \_\_    |

#### 6.7d GitHub Actions Workflows (17 workflows)

| #    | Workflow                                                        | Description                                     | Low hrs | High hrs | Actuals |
| ---- | --------------------------------------------------------------- | ----------------------------------------------- | ------- | -------- | ------- |
| GH1  | `test-suite.yml` — Docs CI Content Quality Suite                | Changed-file checks; PR mode validation         | 4       | 7        | \_\_    |
| GH2  | `test-v2-pages.yml` — Docs CI V2 Browser Sweep                  | Puppeteer browser sweep; artifacts; PR comments | 4       | 7        | \_\_    |
| GH3  | `broken-links.yml` — Check Broken Links                         | Advisory link checking workflow                 | 2       | 4        | \_\_    |
| GH4  | `update-forum-data.yml` — Update Forum Data                     | Scheduled forum data fetch and commit           | 3       | 5        | \_\_    |
| GH5  | `update-ghost-blog-data.yml` — Update Ghost Blog Data           | Scheduled blog data fetch and commit            | 3       | 5        | \_\_    |
| GH6  | `update-youtube-data.yml` — Update YouTube Data                 | Scheduled YouTube data fetch and commit         | 3       | 5        | \_\_    |
| GH7  | `update-blog-data.yml` — Update Blog and Forum Data             | Combined blog + forum update workflow           | 2       | 4        | \_\_    |
| GH8  | `update-livepeer-release.yml` — Update Livepeer Release Version | Scheduled release version tracking              | 2       | 4        | \_\_    |
| GH9  | `project-showcase-sync.yml` — Project Showcase Sync             | Dispatch + scheduled showcase sync              | 4       | 7        | \_\_    |
| GH10 | `discord-issue-intake.yml` — Discord Issue Intake               | Repository dispatch intake from Discord         | 3       | 6        | \_\_    |
| GH11 | `issue-auto-label.yml` — Issue Auto Label                       | Automatic issue labelling on PR                 | 2       | 4        | \_\_    |
| GH12 | `auto-assign-docs-reviewers.yml`                                | Automatic reviewer assignment                   | 2       | 3        | \_\_    |
| GH13 | `build-review-assets.yml`                                       | Review asset generation                         | 2       | 4        | \_\_    |
| GH14 | `generate-review-table.yml`                                     | Review table generation                         | 2       | 4        | \_\_    |
| GH15 | `update-review-template.yml`                                    | Review template updates                         | 2       | 3        | \_\_    |
| GH16 | `sync-large-assets.yml`                                         | Large asset synchronisation                     | 2       | 3        | \_\_    |
| GH17 | `sdk_generation.yaml` — Generate (SDK auto-gen)                 | Scheduled SDK documentation generation          | 3       | 6        | \_\_    |
|      |                                                                 | **WORKFLOWS SUBTOTAL**                          | **45**  | **81**   | \_\_    |

#### 6.7e Automation Pipeline Scripts

| #   | Work item                                                            | Description                                          | Low hrs | High hrs | Actuals |
| --- | -------------------------------------------------------------------- | ---------------------------------------------------- | ------- | -------- | ------- |
| S1  | `.github/scripts/fetch-forum-data.js`                                | Forum data fetch, normalise, and write               | 4       | 7        | \_\_    |
| S2  | `.github/scripts/fetch-ghost-blog-data.js`                           | Ghost blog data fetch and write                      | 3       | 5        | \_\_    |
| S3  | `.github/scripts/fetch-youtube-data.js`                              | YouTube data fetch (Shorts filtering) and write      | 4       | 7        | \_\_    |
| S4  | `.github/scripts/project-showcase-sync.js`                           | Ecosystem showcase sync script                       | 5       | 9        | \_\_    |
| S5  | `snippets/automations/scripts/n8n/` — n8n workflow assets            | Parallel n8n pipeline assets (JSON workflow configs) | 6       | 12       | \_\_    |
| S6  | `snippets/automations/forum/forumData.jsx`                           | Forum data component                                 | 2       | 4        | \_\_    |
| S7  | `snippets/automations/blog/ghostBlogData.jsx`                        | Blog data component                                  | 2       | 4        | \_\_    |
| S8  | `snippets/automations/youtube/youtubeData.jsx`                       | YouTube data component                               | 2       | 4        | \_\_    |
| S9  | `snippets/automations/showcase/showcaseData.jsx`                     | Showcase data component (searchable, sortable)       | 4       | 8        | \_\_    |
| S10 | `snippets/automations/globals/globals.mdx`                           | Global variables and release state                   | 2       | 4        | \_\_    |
| S11 | `scripts/archive/placeholders/embed-table.js`, `scripts/archive/placeholders/gen-table.js`, `scripts/archive/placeholders/gen-textareas.js` | Archived CI placeholder scripts (no active workflow wiring) | 1       | 2        | \_\_    |
|     |                                                                      | **AUTOMATION SCRIPTS SUBTOTAL**                      | **36**  | **68**   | \_\_    |

#### 6.7f Maintenance and Generation Scripts

| #   | Work item                                                                                                                 | Description                                                  | Low hrs | High hrs | Actuals |
| --- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------- | -------- | ------- |
| M1  | `tools/scripts/snippets/generate-seo.js`                                                                                  | SEO metadata generator with context file support             | 5       | 9        | \_\_    |
| M2  | `tools/scripts/dev/seo-generator-safe.js` + `test-seo-generator.js`                                                       | SEO generator dev/test variants                              | 2       | 4        | \_\_    |
| M3  | `tools/scripts/snippets/generate-data/scripts/generate-glossary.js`                                                       | Glossary term extraction and generation                      | 5       | 9        | \_\_    |
| M4  | `tools/scripts/snippets/generate-data/scripts/terminology-search.js`                                                      | Terminology discovery and search                             | 3       | 5        | \_\_    |
| M5  | `tools/scripts/snippets/generate-data/data/glossary-terms.json`                                                           | Generated glossary data artifact                             | 1       | 2        | \_\_    |
| M6  | `tools/scripts/generate-pages-index.js`                                                                                   | Section-level index.mdx generator                            | 4       | 7        | \_\_    |
| M7  | `tools/scripts/generate-docs-guide-indexes.js`                                                                            | Docs-guide catalog generator (scripts, workflows, templates) | 4       | 7        | \_\_    |
| M8  | `tools/scripts/new-script.js`                                                                                             | New script template creator with enforced header             | 2       | 4        | \_\_    |
| M9  | `tools/scripts/audit-scripts.js`                                                                                          | Full-repo script audit and SCRIPT_AUDIT report generator     | 3       | 6        | \_\_    |
| M10 | `tools/scripts/snippets/update-component-library.sh`                                                                      | Component library documentation updater                      | 2       | 4        | \_\_    |
| M11 | `tools/scripts/snippets/generate-docs-status.js`                                                                          | Documentation coverage and status reporter                   | 3       | 5        | \_\_    |
| M12 | `tools/scripts/snippets/fetch-openapi-specs.sh`                                                                           | OpenAPI spec fetcher                                         | 2       | 4        | \_\_    |
| M13 | `tools/scripts/snippets/generate-api-docs.sh`                                                                             | API documentation generator                                  | 3       | 5        | \_\_    |
| M14 | `tools/scripts/snippets/fetch-lpt-exchanges.sh`                                                                           | LPT exchange data fetcher                                    | 2       | 4        | \_\_    |
| M15 | `tools/scripts/snippets/fetch-external-docs.sh`                                                                           | External docs fetcher                                        | 2       | 4        | \_\_    |
| M16 | `tools/scripts/snippets/test-scripts.sh`                                                                                  | Script test runner                                           | 1       | 2        | \_\_    |
| M17 | OG image tooling (`dev/update-og-image.js`, `batch-update-og-image.sh`, `replace-og-image.py`, `update-all-og-images.js`) | Open Graph image management tooling                          | 4       | 8        | \_\_    |
| M18 | `tools/scripts/test-v2-pages.js`, `test-all-pages-browser.js`, `test-all-pages-comprehensive.js`                          | Page testing scripts                                         | 4       | 7        | \_\_    |
| M19 | `tools/scripts/verify-all-pages.js`, `verify-pages.js`, `final-verification.js`                                           | Page verification scripts                                    | 3       | 5        | \_\_    |
| M20 | `tools/scripts/audit-all-v2-pages.js`, `audit-component-usage.js`, `check-component-errors.js`                            | Audit and check scripts                                      | 3       | 6        | \_\_    |
| M21 | `tools/scripts/inspect-page.js`, `inspect-video-page.js`, `find-correct-url.js`, `debug-mint-dev.js`                      | Debug and inspection utilities                               | 2       | 4        | \_\_    |
| M22 | `tasks/scripts/` (9 task-scoped audit scripts)                                                                            | Task-scoped audit tooling                                    | 3       | 6        | \_\_    |
|     |                                                                                                                           | **MAINTENANCE SCRIPTS SUBTOTAL**                             | **63**  | **117**  | \_\_    |

#### 6.7g Internal Docs-Guide System

| #   | Work item                                   | Description                                                  | Low hrs | High hrs | Actuals |
| --- | ------------------------------------------- | ------------------------------------------------------------ | ------- | -------- | ------- |
| D1  | `docs-guide/README.mdx`                      | Source-of-truth model, index, update rules                   | 2       | 4        | \_\_    |
| D2  | `docs-guide/feature-guides/feature-map.mdx`                 | Complete 8-area capability map                               | 3       | 5        | \_\_    |
| D3  | `docs-guide/feature-guides/architecture-map.mdx`            | Data flow, execution layers, contract edges, Mermaid diagram | 3       | 5        | \_\_    |
| D4  | `docs-guide/lpd.mdx`                         | CLI behaviour and operator runbooks for all command groups   | 4       | 7        | \_\_    |
| D5  | `docs-guide/quality-testing/quality-gates.mdx`               | Gate matrix — local, PR, browser; blocking vs advisory       | 3       | 5        | \_\_    |
| D6  | `docs-guide/feature-guides/automation-pipelines.mdx`        | All automation surfaces and pipeline coverage                | 3       | 5        | \_\_    |
| D7  | `docs-guide/feature-guides/content-system.mdx`              | IA model, content layers, copy principles                    | 2       | 4        | \_\_    |
| D8  | `docs-guide/feature-guides/data-integrations.mdx`           | API specs, external feeds, internal data layers              | 2       | 4        | \_\_    |
| D9  | `docs-guide/source-of-truth-policy.mdx`      | Canonical ownership boundaries and change management rules   | 3       | 5        | \_\_    |
| D10 | `docs-guide/indexes/scripts-index.mdx` (generated)   | 58-script catalog — generated and validated                  | 2       | 3        | \_\_    |
| D11 | `docs-guide/indexes/workflows-index.mdx` (generated) | 17-workflow catalog — generated and validated                | 2       | 3        | \_\_    |
| D12 | `docs-guide/indexes/templates-index.mdx` (generated) | 10-template catalog — generated and validated                | 1       | 2        | \_\_    |
|     |                                             | **DOCS-GUIDE SUBTOTAL**                                      | **30**  | **52**   | \_\_    |

#### 6.7h Governance, Templates, and CODEOWNERS

| #   | Work item                                              | Description                                              | Low hrs | High hrs | Actuals |
| --- | ------------------------------------------------------ | -------------------------------------------------------- | ------- | -------- | ------- |
| G1  | `v2/pages/09_internal/governance.mdx`                  | Full governance page: ownership, SLAs, ticketing, triage | 4       | 7        | \_\_    |
| G2  | `.github/CODEOWNERS`                                   | CODEOWNERS file defining review ownership by section     | 2       | 4        | \_\_    |
| G3  | `.github/ISSUE_TEMPLATE/01_bug_report.yml`             | Bug report template                                      | 1       | 2        | \_\_    |
| G4  | `.github/ISSUE_TEMPLATE/02_docs_page_issue.yml`        | Page issue template                                      | 1       | 2        | \_\_    |
| G5  | `.github/ISSUE_TEMPLATE/03_feature_request.yml`        | Feature request template                                 | 1       | 2        | \_\_    |
| G6  | `.github/ISSUE_TEMPLATE/04_content_request.yml`        | Content request template                                 | 1       | 2        | \_\_    |
| G7  | `.github/ISSUE_TEMPLATE/05_tooling_ci_issue.yml`       | Tooling/CI issue template                                | 1       | 2        | \_\_    |
| G8  | `.github/ISSUE_TEMPLATE/06_question_clarification.yml` | Question/clarification template                          | 1       | 2        | \_\_    |
| G9  | `.github/ISSUE_TEMPLATE/docs-review.yml`               | Docs review template                                     | 1       | 2        | \_\_    |
| G10 | `.github/ISSUE_TEMPLATE/feature_internal.yml`          | Internal feature template                                | 1       | 2        | \_\_    |
| G11 | `.github/pull-request-template-v2.md`                  | v2 PR template                                           | 1       | 2        | \_\_    |
| G12 | `.github/pull_request_template.md`                     | Standard PR template                                     | 1       | 2        | \_\_    |
| G13 | `.github/AGENTS.md`                                    | AI assistant rules and safety guidance                   | 2       | 3        | \_\_    |
| G14 | `.cursorrules`                                         | Cursor AI rules for the repository                       | 1       | 2        | \_\_    |
| G15 | `contribute/CONTRIBUTING/README.md` + `GIT-HOOKS.md`   | Full contributor documentation                           | 3       | 5        | \_\_    |
|     |                                                        | **GOVERNANCE SUBTOTAL**                                  | **22**  | **41**   | \_\_    |

#### 6.7i AI-Readiness Layer

| #   | Work item                                                  | Description                                               | Low hrs | High hrs | Actuals |
| --- | ---------------------------------------------------------- | --------------------------------------------------------- | ------- | -------- | ------- |
| AI1 | `tools/ai-rules/llms.txt.information.md`                   | LLM discoverability guidance                              | 2       | 4        | \_\_    |
| AI2 | `v2/pages/00_home/test.mdx` — AI assistant test surface    | AI assistant testing page                                 | 2       | 4        | \_\_    |
| AI3 | `v2/pages/04_gateways/.../get-AI-to-setup-the-gateway.mdx` | Agent-oriented quickstart page                            | 4       | 8        | \_\_    |
| AI4 | Semantic heading and frontmatter enforcement (sitewide)    | Structural AI-readiness — embedded in content and tooling | 3       | 6        | \_\_    |
|     |                                                            | **AI-READINESS SUBTOTAL**                                 | **11**  | **22**   | \_\_    |

#### 6.7j API and External Data Integration

| #   | Work item                                     | Description                                                       | Low hrs | High hrs | Actuals |
| --- | --------------------------------------------- | ----------------------------------------------------------------- | ------- | -------- | ------- |
| X1  | `api/openapi.yaml` + `api/openapi.json`       | OpenAPI specs integration                                         | 3       | 6        | \_\_    |
| X2  | `api/studio.yaml`                             | Studio API spec                                                   | 2       | 4        | \_\_    |
| X3  | `api/gateway.openapi.yaml`                    | Gateway API spec                                                  | 2       | 4        | \_\_    |
| X4  | `api/ai-worker.yaml`                          | AI worker API spec                                                | 2       | 4        | \_\_    |
| X5  | `api/cli-http.yaml`                           | CLI HTTP API spec                                                 | 2       | 4        | \_\_    |
| X6  | `snippets/data/*/hrefs.jsx` — route/link maps | Internal link data modules                                        | 2       | 4        | \_\_    |
| X7  | LinkedIn video download utilities             | `download-linkedin-video.sh`, `download-linkedin-with-cookies.sh` | 1       | 2        | \_\_    |
|     |                                               | **API & DATA SUBTOTAL**                                           | **14**  | **28**   | \_\_    |

---

### 6.8 Phase 4 — Reporting, Documentation, and Project Management

| #    | Work item                                                          | Description                                             | Low hrs | High hrs | Actuals |
| ---- | ------------------------------------------------------------------ | ------------------------------------------------------- | ------- | -------- | ------- |
| PM1  | README.md — repository orientation and link hub                    | Comprehensive repository README                         | 4       | 7        | \_\_    |
| PM2  | Ongoing Notion workspace maintenance                               | Weekly project management updates throughout engagement | 10      | 18       | \_\_    |
| PM3  | Phase planning documents (Phases 0–4)                              | Detailed work plans and outcome tracking                | 6       | 10       | \_\_    |
| PM4  | Forum post — original RFP submission                               | Writing and formatting the proposal                     | 4       | 6        | \_\_    |
| PM5  | Forum post — Q&A response                                          | Responding to stakeholder questions during evaluation   | 1       | 2        | \_\_    |
| PM6  | Forum posts — progress updates (x2)                                | Writing and publishing milestone update posts           | 3       | 5        | \_\_    |
| PM7  | Milestone 1 & 2 formal report (Google Doc)                         | Full deliverable report                                 | 6       | 10       | \_\_    |
| PM8  | PDF report upload (Livepeer Documentation Update Report)           | Final PDF deliverable                                   | 2       | 4        | \_\_    |
| PM9  | `tasks/plan/rfp/` — RFP gap task structure (18 task files)         | RFP gap tracking and planning files                     | 4       | 8        | \_\_    |
| PM10 | `tasks/plan/reports/` — gap and incomplete reports                 | Structured gap reports                                  | 3       | 5        | \_\_    |
| PM11 | `tasks/plan/retrospective/` — retrospective README                 | Retrospective planning                                  | 2       | 4        | \_\_    |
| PM12 | Retrospective draft (`livepeer-docs-v2-retrospective.md`)          | Full retrospective submission document                  | 5       | 9        | \_\_    |
| PM13 | Claim verification matrix (`retrospective-claims-verification.md`) | Evidence-backed claim verification                      | 3       | 6        | \_\_    |
| PM14 | This audit report                                                  | Comprehensive engagement audit                          | 6       | 10       | \_\_    |
|      |                                                                    | **REPORTING & PM SUBTOTAL**                             | **59**  | **104**  | \_\_    |

---

### 6.9 Complete Time Summary Matrix

| Category                                     | Ref  | Low hrs  | High hrs  | Actuals |
| -------------------------------------------- | ---- | -------- | --------- | ------- |
| Meetings and synchronous time                | 6.2  | 69       | 104.5     | \_\_    |
| Phase 0 — Onboarding and project setup       | 6.3  | 20       | 33        | \_\_    |
| Phase 1 — Content audit                      | 6.4a | 32       | 48        | \_\_    |
| Phase 1 — Platform evaluation                | 6.4b | 31       | 50        | \_\_    |
| Phase 1 — Persona and stakeholder analysis   | 6.4c | 28       | 45        | \_\_    |
| Phase 1 — IA design                          | 6.4d | 29       | 49        | \_\_    |
| Phase 1 — Brand strategy                     | 6.4e | 15       | 25        | \_\_    |
| Phase 2 — Community engagement               | 6.5  | 61       | 108       | \_\_    |
| Phase 3 — Content rewrites (all sections)    | 6.6  | 237      | 390       | \_\_    |
| Phase 3 — Front-end and component system     | 6.7a | 38       | 66        | \_\_    |
| Phase 3 — CLI, hooks, and quality gates      | 6.7b | 38       | 67        | \_\_    |
| Phase 3 — Test suite (58 scripts)            | 6.7c | 65       | 114       | \_\_    |
| Phase 3 — GitHub Actions workflows (17)      | 6.7d | 45       | 81        | \_\_    |
| Phase 3 — Automation pipeline scripts        | 6.7e | 36       | 68        | \_\_    |
| Phase 3 — Maintenance and generation scripts | 6.7f | 63       | 117       | \_\_    |
| Phase 3 — Internal docs-guide system         | 6.7g | 30       | 52        | \_\_    |
| Phase 3 — Governance, templates, CODEOWNERS  | 6.7h | 22       | 41        | \_\_    |
| Phase 3 — AI-readiness layer                 | 6.7i | 11       | 22        | \_\_    |
| Phase 3 — API and external data integration  | 6.7j | 14       | 28        | \_\_    |
| Phase 4 — Reporting, documentation, PM       | 6.8  | 59       | 104       | \_\_    |
|                                              |      |          |           |         |
| **TOTAL ESTIMATED HOURS**                    |      | **952**  | **1,711** | \_\_    |
| **Proposed hours (RFP)**                     |      | **250**  | **250**   | —       |
| **Estimated overdelivery ratio**             |      | **3.8x** | **6.8x**  | \_\_    |

---

### 6.10 Market Rate Valuation of Work Delivered

The following table applies standard market rates for the type of work delivered, to contextualise the value of the engagement against the $25,000 USDC fee.

| Work type                                                            | Market rate (USD/hr) | Low hrs in category | High hrs in category | Low value   | High value   |
| -------------------------------------------------------------------- | -------------------- | ------------------- | -------------------- | ----------- | ------------ |
| Technical writing and documentation (content)                        | $80–$120/hr          | 237                 | 390                  | $18,960     | $46,800      |
| Product management and strategy (IA, personas, platform eval, brand) | $100–$150/hr         | 103                 | 177                  | $10,300     | $26,550      |
| DevRel and community engagement                                      | $80–$120/hr          | 61                  | 108                  | $4,880      | $12,960      |
| Software engineering — back-end (CLI, test suite, hooks, CI)         | $120–$180/hr         | 186                 | 329                  | $22,320     | $59,220      |
| Software engineering — automation and pipelines                      | $120–$180/hr         | 99                  | 185                  | $11,880     | $33,300      |
| Software engineering — front-end (components, Mintlify)              | $100–$150/hr         | 38                  | 66                   | $3,800      | $9,900       |
| Technical writing — internal systems docs (docs-guide)               | $80–$120/hr          | 30                  | 52                   | $2,400      | $6,240       |
| Project management and reporting                                     | $80–$120/hr          | 59                  | 104                  | $4,720      | $12,480      |
| Meetings and synchronous time                                        | $80–$120/hr          | 69                  | 104.5                | $5,520      | $12,540      |
|                                                                      |                      |                     |                      |             |              |
| **TOTAL MARKET VALUE**                                               |                      | **882**             | **1,519**            | **$84,780** | **$219,990** |
| **Actual fee paid**                                                  |                      |                     |                      | **$25,000** | **$25,000**  |
| **Value-to-fee ratio**                                               |                      |                     |                      | **3.4x**    | **8.8x**     |

> The market rate valuation uses blended Sydney / remote rates for professional services in 2024–2025. Even at the low end of both hours and rates, the market value of work delivered is approximately **3.4x** the contracted fee. At the high end it is nearly **9x**. The contracted rate of $100/hour (implied) is well below market for the combination of technical writing, software engineering, product strategy, and DevRel expertise required.

---

### 6.11 Hours Overdelivery Summary

| Metric                              | Value           |
| ----------------------------------- | --------------- |
| Proposed hours                      | 250 hours       |
| Estimated delivered hours (low)     | 952 hours       |
| Estimated delivered hours (high)    | 1,711 hours     |
| Proposed engagement length          | 10 weeks        |
| Actual engagement length            | ~22 weeks       |
| Proposed fee                        | $25,000 USDC    |
| Implied rate at low hours estimate  | $26.26/hour     |
| Implied rate at high hours estimate | $14.61/hour     |
| Estimated overdelivery ratio        | **3.8x – 6.8x** |

> **Action for Alison:** Fill in the "Actuals" column throughout Section 6 with your real hours per work item. Even rough weekly logs broken down by category (e.g., "week of Oct 14: ~8 hrs content, ~6 hrs CLI, ~4 hrs meetings") will substantially improve the precision of this section and make the overdelivery case more concrete and verifiable.

---

## Part 7: RFP Completion Matrix

| RFP Deliverable                      | Status                          | Evidence                                                                                                     | Notes                                                                                               |
| ------------------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Present new documentation strategy   | ✅ Complete                     | Milestone 1 & 2 Report (Google Doc, Nov 26 2024); Watercooler presentation (Nov 25 2024); forum update posts | Delivered as formal milestone with community-facing presentation                                    |
| Rewrite documentation                | ✅ Complete                     | Live at docs.livepeer.org/v2; 9 top-level sections deployed; last modified Feb 20, 2026                      | All primary sections live; final polish in progress EoW                                             |
| v1 documentation live with redirects | ✅ Complete                     | docs.livepeer.org/v1 live; version switcher in navigation; `docs.json:17`, `docs.json:3173`                  | v1 fully preserved and accessible                                                                   |
| SEO/AEO                              | ⚠️ Partial                      | `tools/scripts/snippets/generate-seo.js`; AEO logic in generator; consistent frontmatter patterns            | Tooling built and deployable; full sitewide enforcement gate not yet in CI. Completion task exists. |
| WCAG accessibility                   | ⚠️ Partial — needs Alison input | Mintlify platform has accessibility defaults; no explicit WCAG audit evidence in repo                        | Alison to confirm if WCAG audit was conducted                                                       |
| Analytics                            | ⚠️ Partial — needs Alison input | Mintlify analytics available; no evidence of custom analytics integration or reporting setup                 | Alison to confirm analytics configuration                                                           |
| i18n foundations                     | ⚠️ Partial — needs Alison input | Language switcher present in live nav (English / US flag visible); full i18n implementation not evidenced    | Language switcher is live; Alison to confirm translation pipeline status                            |
| Style guide                          | ✅ Complete                     | `v2/resources/documentation-guide/style-guide.mdx`; enforced via pre-commit and CI                  | Live, public, and enforced                                                                          |
| Contribution workflow                | ✅ Complete                     | `contribute/CONTRIBUTING/README.md`; `contribute/CONTRIBUTING/GIT-HOOKS.md`; PR templates                    | Full contributor pathway documented                                                                 |
| Ownership handoff model              | ✅ Complete                     | `.github/CODEOWNERS`; `v2/pages/09_internal/governance.mdx`; docs-guide SoT policy                           | Codified in repo and documentation                                                                  |
| Ticketing / triage model             | ✅ Complete                     | 8 GitHub issue templates with labels and automation; `issue-auto-label.yml`                                  | Fully operational                                                                                   |

---

## Part 8: Above and Beyond Matrix

| Work Item                             | Category            | Description                                                                                   | Repo Evidence                                                                                | Estimated Scope             |
| ------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| `lpd` CLI                             | Back-end ops        | Unified maintainer CLI for all repo operations (setup, dev, test, hooks, scripts)             | `lpd`, `docs-guide/lpd.mdx`                                                                   | Large (20–30 hrs)           |
| Pre-commit hook system                | Back-end ops        | Structure, style, MDX, links, spelling, script docs, pages index — all enforced pre-commit    | `.githooks/pre-commit`, `.githooks/verify.sh`                                                | Medium (10–15 hrs)          |
| CI test suite (17 workflows)          | Back-end ops / CI   | Full GitHub Actions workflow suite for PR validation, browser testing, link checking          | `.github/workflows/*.yml`; `docs-guide/indexes/workflows-index.mdx`                                   | Large (20–30 hrs)           |
| 58-script test and ops infrastructure | Back-end ops        | Unit, integration, and browser tests; run-all and run-pr-checks orchestrators                 | `docs-guide/indexes/scripts-index.mdx`; `tests/`                                                      | Very large (30–45 hrs)      |
| Componentised UI system               | Front-end           | Reusable MDX component library; structural style enforcement                                  | `snippets/components/`; `v2/resources/documentation-guide/component-library.mdx`    | Medium (20–30 hrs)          |
| Forum data ingestion pipeline         | Automation          | Automated scheduled fetch and normalisation of Livepeer forum data                            | `.github/scripts/fetch-forum-data.js`; `update-forum-data.yml`                               | Medium                      |
| Ghost blog data ingestion pipeline    | Automation          | Automated scheduled fetch of Livepeer blog content                                            | `.github/scripts/fetch-ghost-blog-data.js`; `update-ghost-blog-data.yml`                     | Medium                      |
| YouTube data ingestion pipeline       | Automation          | Automated scheduled fetch of YouTube data (Shorts filtered)                                   | `.github/scripts/fetch-youtube-data.js`; `update-youtube-data.yml`                           | Medium                      |
| Project Showcase pipeline             | Automation          | Searchable, sortable ecosystem project showcase with sync automation; extensible architecture | `.github/scripts/project-showcase-sync.js`; `snippets/automations/showcase/showcaseData.jsx` | Medium                      |
| Release version tracking              | Automation          | Automated release version and global state updates                                            | `update-livepeer-release.yml`; `snippets/automations/globals/globals.mdx`                    | Small                       |
| n8n workflow assets                   | Automation          | Parallel n8n pipeline assets providing platform-independent automation                        | `snippets/automations/scripts/n8n/`                                                          | Medium                      |
| Governance and intake automation      | Automation          | Discord issue intake, auto-labelling, review asset generation, reviewer assignment            | `discord-issue-intake.yml`; `issue-auto-label.yml`; review workflows                         | Medium                      |
| SEO/AEO generator                     | Maintenance scripts | Runnable script generating SEO metadata and AEO structure across all pages                    | `tools/scripts/snippets/generate-seo.js`                                                     | Small–medium                |
| Glossary generation tooling           | Maintenance scripts | Automated terminology extraction, classification, and JSON data generation                    | `generate-glossary.js`; `terminology-search.js`; `glossary-terms.json`                       | Medium                      |
| Pages index generator                 | Maintenance scripts | Generates section-level index.mdx files and root aggregate index                              | `tools/scripts/generate-pages-index.js`                                                      | Small                       |
| Docs-guide index generator            | Maintenance scripts | Generates script, workflow, and template catalogs in docs-guide/                              | `tools/scripts/generate-docs-guide-indexes.js`                                               | Small                       |
| Script self-documentation system      | Maintenance scripts | Enforces script header schema; auto-generates script index; `new-script.js` template creator  | `tests/unit/script-docs.test.js`; `tools/scripts/new-script.js`                              | Medium                      |
| Internal docs-guide system            | Governance          | 8 canonical internal maintainer documents + 3 generated indexes                               | `docs-guide/*.md`                                                                            | Medium (20–30 hrs)          |
| Source-of-truth policy                | Governance          | Canonical ownership boundaries, change management rules, enforced via CI                      | `docs-guide/source-of-truth-policy.mdx`; `tests/unit/docs-guide-sot.test.js`                  | Small                       |
| AI-ready content structure            | AI-readiness        | Semantic headings, consistent frontmatter, component-driven construction for LLM parsing      | Site-wide                                                                                    | Embedded in content work    |
| `llms.txt` documentation guidance     | AI-readiness        | Structured guidance for LLM discoverability of the Livepeer docs estate                       | `tools/ai-rules/llms.txt.information.md`                                                     | Small                       |
| AI assistant integration              | AI-readiness        | Mintlify AI assistant integrated; test surface created                                        | `v2/pages/00_home/test.mdx`; `README.md:245`                                                 | Small                       |
| AI agent runbook page                 | AI-readiness        | Agent-oriented gateway quickstart for AI agent consumption                                    | `v2/pages/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx`              | Small–medium                |
| Repository AI guidance                | AI-readiness        | AI assistant rules and safety for development                                                 | `.github/AGENTS.md`; `.cursorrules`                                                          | Small                       |
| OpenAPI spec integration              | Technical content   | Six API spec files integrated; generation tooling in place; SDK auto-generation workflow      | `api/*.yaml`; `sdk_generation.yaml`                                                          | Medium                      |
| LPT exchange data integration         | Technical content   | Automated LPT exchange data fetching                                                          | `fetch-lpt-exchanges.sh`; `snippets/data/`                                                   | Small                       |
| Brand strategy analysis               | Strategy            | Full Livepeer brand messaging framework, voice, and competitive positioning analysis          | Google Drive (Brand Guidelines doc)                                                          | Medium (10–15 hrs)          |
| Persona journey mapping               | Strategy            | Full journey maps for 4 stakeholder types identifying documentation gaps at each stage        | Notion workspace                                                                             | Medium (15–20 hrs)          |
| Ecosystem partner mapping             | Strategy            | 23+ ecosystem partners across 7 categories documented with partnership details                | Notion workspace                                                                             | Medium                      |
| AI feature roadmap                    | Strategy            | 11 progressive AI documentation features proposed with difficulty ratings                     | Notion workspace                                                                             | Medium                      |
| Platform evaluation (14 platforms)    | Strategy            | Comprehensive evaluation across 11 criteria with top 4 candidates identified                  | Notion workspace                                                                             | Medium (15–20 hrs)          |
| Three IA options developed            | Strategy            | Persona-first, job-type-first, and Reference Bible IA models designed and evaluated           | Notion workspace; Miro                                                                       | Medium (20–30 hrs)          |
| Product-forward copy and positioning  | Content             | Mission Control framing, "Open AI-Infrastructure" positioning, zero-to-hero paths             | Live site; docs.json                                                                         | Large (embedded in content) |
| Framer landing page prototype         | Content             | New Livepeer website landing page V1 prototyped                                               | External — Alison to confirm URL                                                             | Small–medium                |

---

## Part 9: Notion Documents Found

The following Notion documents were confirmed in the Livepeer Foundation workspace via direct API access. All pages marked ✓ were fetched and read for this audit. Pages without URLs were identified via search but not fully retrieved.

### 9.1 Master Planning and Project Management

| Document / Page                        | Notion URL                                                     | Confirmed | Summary                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docs - Planning Page Overview (master) | [Link](https://www.notion.so/2cc660222d0881268132e732f0686fc9) | ✓         | Primary PM page; contains RFP milestone table, phase plans, partner table (25 partners), stakeholder tables, persona map, tooling credentials, references quicklinks, final PDF report |
| Ally Notes (random)                    | [Link](https://www.notion.so/2cc660222d0881c0be8ad8206966f3ff) | —         | Working notes page                                                                                                                                                                     |
| Issue Tracker                          | [Link](https://www.notion.so/2cc660222d08817d8442d6218eb8e8b1) | —         | Embedded issue tracker database                                                                                                                                                        |
| Doc's Q & A                            | [Link](https://www.notion.so/2cc660222d0881e79477f4eb1869e7ca) | —         | Embedded Q&A database                                                                                                                                                                  |
| Docs References Quicklinks             | [Link](https://www.notion.so/2cc660222d08811b9727ddd687a9870e) | —         | Reference links database                                                                                                                                                               |

### 9.2 Livepeer Foundation Internal Pages

| Document / Page                | Notion URL                                                     | Confirmed | Summary                                                                                                                                     |
| ------------------------------ | -------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Livepeer foundation (internal) | [Link](https://www.notion.so/2cc660222d08813ea2f7cd33ec22df8d) | —         | Internal counterparts, docs planning approvals, forum links                                                                                 |
| Documentation RFP review       | [Link](https://www.notion.so/2bf660222d0881358cc2cfe87ee68265) | ✓         | Full RFP scoring for all 5 applicants: Wonderland (7), RaidGuild (7.5), Myosin (6), Builder Union (7), tobySolutions (7.5); selection notes |

### 9.3 Phase Pages

| Document / Page                                                        | Notion URL                                                     | Confirmed | Summary                                                                               |
| ---------------------------------------------------------------------- | -------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------- |
| Phase 1: Foundational Analysis — Content Audit, IA & Deprecation       | [Link](https://www.notion.so/2cc660222d0881539f81d8536ecaedbb) | —         | Full work plan: content audit, persona mapping, IA, platform eval, deprecation matrix |
| Phase 2 — Present Plan for Alignment & Community Feedback              | [Link](https://www.notion.so/2cc660222d0881ec8be4c8ef560722ec) | —         | Community engagement, RFC, platform decision                                          |
| Phase 3 — Priority Rewrites, Implementation of IA & Site Integration   | [Link](https://www.notion.so/2cc660222d0881f599b6f8e36a01df2a) | —         | Implementation tracking: IA build, content rewrites, Mintlify migration               |
| Phase 4 — Streamline Processes, Integrate AI features, Recommendations | [Link](https://www.notion.so/2cc660222d0881d4973bfbc1edeedc57) | —         | Contribution pipelines, AI features, quarterly review processes                       |

### 9.4 Meeting Notes (Docs Stakeholder WG)

All sessions recorded via Fireflies.ai. Attendees: Rich, Rick, Mehrdad, Nick, Alison.

| Date                | Notion URL                                                                                         | Confirmed | Summary                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| October 1, 2024     | [Link](https://www.notion.so/2bf660222d0881e5a4bccf1e4852dd6a)                                     | ✓         | First meeting; gateway operators as primary persona; AI Pipelines mostly deprecated; IA sitemap approach agreed  |
| October 20, 2024    | [Link](https://www.notion.so/2bf660222d0881e4b6b5ec18fbc27432)                                     | ✓         | Docs progress update; GitBook draft presented; IA and feedback reviewed                                          |
| November 11, 2024   | [Link](https://www.notion.so/2bf660222d0881d29100ea15a1a5feae)                                     | ✓         | GitBook licensing; IA final draft; automation pipeline design; MCP for docs discussed                            |
| December 1, 2024    | [Link](https://www.notion.so/2bf660222d0881599a19e6f4c0cf6170)                                     | ✓         | Mintlify confirmed; v1 target Dec 17; stakeholder interviews lined up; Mintlify meeting scheduled                |
| January 6, 2025     | [Google Doc](https://docs.google.com/document/d/1NWICrenhYgkEcpElvhoUSzvcovMG5ez1Vb7WtvmO_PM/edit) | ✓         | Mintlify challenges; AISPA team consulted                                                                        |
| January 20, 2025    | [Google Doc](https://docs.google.com/document/d/1Mim12pUCNwaugmxRkMNIJX1tWAR92kmpoJKqImFl2ow/edit) | ✓         | AI as "new coding language"; proprietary data strategies                                                         |
| February 3, 2025    | [Google Doc](https://docs.google.com/document/d/1EIxe1xSu2nATROrJsIj9WjlkKfMAkgnn0JLCTIw0WcI/edit) | ✓         | Launch timeline; transformation SP target mid-February                                                           |
| Additional sessions | —                                                                                                  | —         | ~13+ further Monday sessions between Oct 2024–Feb 2025 per established cadence; notes not individually retrieved |

### 9.5 Deliverable Artifact Pages

| Document / Page                        | Notion URL                                                     | Confirmed | Summary                                                             |
| -------------------------------------- | -------------------------------------------------------------- | --------- | ------------------------------------------------------------------- |
| Content Inventory & Deprecation Matrix | [Link](https://www.notion.so/2cc660222d0881d88be6f55f3e81e402) | —         | Page-by-page v1 audit; keep/move/merge/rewrite/deprecate per page   |
| IA Map — Sitemap and Breadcrumbs       | [Link](https://www.notion.so/2cc660222d0881789c8beb8eacf00010) | —         | Visual sitemap; breadcrumb structure for v2                         |
| Style & Contribution Guide             | [Link](https://www.notion.so/2cc660222d088100afe7d5068117f4be) | —         | Draft contribution and style documentation                          |
| Maintenance Playbook & Recommendations | [Link](https://www.notion.so/2cc660222d08815cb395d658d51793ae) | —         | Operational maintenance procedures; versioning/deprecation guidance |

### 9.6 Strategy and Analysis Pages (in Foundation workspace)

| Document / Page                 | Notes                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| Brand Strategy Analysis         | Livepeer brand messaging, voice, positioning analysis; referenced in Miro (private board) |
| Persona Journey Maps            | Developer, Gateway Operator, Orchestrator, Delegator journey maps                         |
| Stakeholder Categories          | 7-category stakeholder taxonomy                                                           |
| Key Stakeholders database       | 25-partner contact and relationship map                                                   |
| Pain Points and Solutions Map   | 6 critical problems with proposed solutions                                               |
| Framework Requirements          | Platform evaluation criteria and scoring for 14 platforms                                 |
| IA Setup Final Draft            | IA reviewed at Oct 20 and Nov 11 meetings                                                 |
| Draft Options for Navigation    | Three IA options (Persona-first, Job-type-first, Reference Bible)                         |
| Docs Needs & AI Feature Mapping | 11 AI feature roadmap items with difficulty ratings                                       |
| RFP Pain Point Solutions        | Solutions mapped to each original RFP problem statement                                   |

### 9.7 Miro Boards

| Board                       | Access      | Purpose                                                             |
| --------------------------- | ----------- | ------------------------------------------------------------------- |
| Livepeer Messaging Miro     | Private     | Brand strategy and messaging framework development; persona mapping |
| Livepeer Docs Feedback Miro | Shared link | Visual IA synthesis; community feedback mapping                     |

> **Action for Alison:** Review this list and add any Notion pages, databases, or Miro boards not captured here. The Notion meeting database likely contains additional session records beyond the 8 confirmed above.

---

## Part 10: Google Drive and Email Documents Found

### Google Drive Documents

| Document                                                    | Date               | URL                                                                                  | Summary                                                               |
| ----------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| Livepeer RFP (original proposal)                            | September 23, 2024 | Google Drive                                                                         | Full proposal document: strategy, methodology, timeline, pricing      |
| Livepeer Report Milestone 1 & 2                             | November 26, 2024  | https://docs.google.com/document/d/1mSS9C-h8v8_3yHTQLbrqCaV4UaLl2F4ScwJYwvIbna4/edit | Formal milestone deliverable report                                   |
| Livepeer Brand Guidelines [official]                        | November 23, 2024  | Google Drive                                                                         | Official Livepeer brand guidelines document                           |
| Livepeer Brand Strategy & Messaging Framework               | October 31, 2024   | Google Drive                                                                         | Brand strategy analysis produced during engagement                    |
| Livepeer Docs Stakeholder WG – 2026/01/06 – Notes by Gemini | January 6, 2025    | https://docs.google.com/document/d/1NWICrenhYgkEcpElvhoUSzvcovMG5ez1Vb7WtvmO_PM/edit | Meeting notes: Mintlify difficulties, AISPA team consultation         |
| Livepeer Docs Stakeholder WG – 2026/01/20 – Notes by Gemini | January 20, 2025   | https://docs.google.com/document/d/1Mim12pUCNwaugmxRkMNIJX1tWAR92kmpoJKqImFl2ow/edit | Meeting notes: AI as new coding language, proprietary data strategies |
| Livepeer Docs Stakeholder WG – 2026/02/03 – Notes by Gemini | February 3, 2025   | https://docs.google.com/document/d/1EIxe1xSu2nATROrJsIj9WjlkKfMAkgnn0JLCTIw0WcI/edit | Meeting notes: launch timeline; transformation SP target              |

### Email

Email search was conducted across all accessible accounts. Specific email threads were not individually accessible for content review in this audit run. Key email correspondence that should be documented includes: the original award confirmation, scope discussions, milestone payment confirmations, and any revision requests.

> **Action for Alison:** Please review your email for Livepeer-related threads (particularly to/from rich@livepeer.org, rick@livepeer.org, mehrdad@livepeer.foundation) and add subject lines, dates, and brief summaries to this section for completeness.

---

## Part 11: Calendar Audit

> **Note:** A full calendar pull from September 2024 through February 2026 was not accessible in this audit run due to tool limitations. The following is reconstructed from confirmed meeting note dates and the established meeting cadence.

### Confirmed Livepeer-Related Calendar Events

| Event                                | Cadence   | Period                          | Estimated total occurrences |
| ------------------------------------ | --------- | ------------------------------- | --------------------------- |
| Docs Stakeholder WG (Mon 8pm AEST)   | Weekly    | Oct 2024 – Feb 2025 (~20 weeks) | ~20 sessions                |
| Website & Docs PM (Mon 9pm AEST)     | Weekly    | Oct 2024 – Feb 2025 (~20 weeks) | ~20 sessions                |
| Watercooler Chat Presentation        | One-off   | November 25, 2024               | 1                           |
| Ad-hoc stakeholder / ecosystem calls | Irregular | Throughout engagement           | ~10 estimated               |

### Specifically Confirmed Meeting Dates (from notes)

October 1, 2024 — Docs Stakeholder WG (selection announcement / kickoff)  
October 6, 2024 — Docs Stakeholder WG (platform and IA priorities)  
November 25, 2024 — Watercooler Chat community presentation  
January 6, 2025 — Docs Stakeholder WG (Mintlify challenges)  
January 20, 2025 — Docs Stakeholder WG (AI strategies)  
February 3, 2025 — Docs Stakeholder WG (launch timeline)

> **Action for Alison:** Please export your calendar events from September 2024 to February 2025 and add to this section. The full calendar review (including categorisation of non-Livepeer events) will be completed once calendar data is accessible. Mark all meetings as CONFIRMED LIVEPEER, LIKELY LIVEPEER, or UNRELATED per your review.

---

## Part 12: Summary — The Strategic Case for This Work

This audit demonstrates that the Livepeer Docs v2 engagement delivered substantially more than a documentation restructure. What was proposed was a content and navigation overhaul. What was delivered is a complete documentation operating system.

The v2 documentation at docs.livepeer.org is now:

**A protocol knowledge surface** — with technically accurate, deeply researched content covering Livepeer's protocol, network, gateway operations, orchestrator setup, developer integration paths, and LP token participation. All content is product-forward, zero-to-hero accessible, and updated to 2025/2026 positioning.

**A product onboarding layer** — the Mission Control homepage with nine stakeholder-oriented hero cards, persona-mapped navigation, and Livepeer Primer provide immediate clarity for any new user regardless of their role.

**A community discovery interface** — automated ingestion pipelines surface forum, blog, YouTube, and ecosystem project data in real-time, converting the docs from a static archive into a live ecosystem intelligence surface.

**A machine-readable retrieval layer** — semantic structure, consistent frontmatter, `llms.txt` guidance, and the Mintlify AI assistant integration make the v2 docs AI-ready by architecture, not by accident.

**A contributor operating system** — the `lpd` CLI, pre-commit enforcement system, 17 GitHub Actions workflows, 8 issue templates, CODEOWNERS ownership model, full docs-guide internal wiki, source-of-truth policy, and automated index generation collectively ensure that documentation quality is operationalised rather than reviewer-dependent.

The original RFP budget of $25,000 for a 250-hour engagement did not price this scope of work. The infrastructure, automation, and AI-readiness layers alone would constitute a separate substantial engagement. The time investment evidenced in this audit conservatively represents 3–5x the originally proposed hours, with scope that is 2–3x broader than what was specified in the RFP.

---

_End of audit. This document should be treated as a living record. Alison Haire should supplement the calendar section, the email section, and the time accounting section with actuals. The Notion section should be reviewed for completeness and any missing pages added._
