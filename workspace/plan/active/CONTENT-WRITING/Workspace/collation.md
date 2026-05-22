# Content Writing Pipeline — Resource Collation

**Created**: 2026-03-19
**Purpose**: Inventory of every repo resource related to the content writing pipeline, dated, with themes extracted.

> **Note on dates**: Most files show `2026-03-18 20:56` from a bulk merge into `docs-v2-dev`. Files with different timestamps represent genuinely recent work. Where git history would give better creation dates, those should be checked during Stream 0.

---

## 1. Most Recent Thinking (last 48 hours)

These represent your latest direction. Everything downstream should align with these.

| File | Modified | Theme |
|---|---|---|
| [content-naming.md](../../../v2/_workspace/research/content-naming.md) | **2026-03-19 18:50** | Section naming rubric: 6-step process to find governing-concept content descriptors. Score candidates on precision/depth/stability/clarity/brevity. Hard-reject literal labels, comparators, generic descriptors, taxonomy mismatches. Includes pageType/audience/purpose as constraints on naming (not outputs). |
| [page-composition-framework.mdx](../../../snippets/templates/pages/page-composition-framework.mdx) | **2026-03-19 18:49** | Page structure template: header (frontmatter + optional CTA), introduction (value prop + context), body (governing-concept H1s, not questions/numbers/literal labels), footer (related pages cards). One major layout element per page. Section naming examples inline. |
| [component-layout-profile.json](../../../tools/config/component-layout-profile.json) | **2026-03-19 19:23** | Machine-readable layout config per pageType. |
| [component-registry.json](../../../docs-guide/component-registry.json) | **2026-03-19 19:23** | Full component inventory (246KB), regenerated. |
| [research-review-packet-plan-template.md](../../../docs-guide/tooling/research-review-packet-plan-template.md) | **2026-03-19 13:07** | Tranche-based research packet planning with source-of-truth scope rules. |
| All scripts in `tools/scripts/` | **2026-03-19 19:04** | Bulk script header update (governance restructuring). |

**Key themes from recent work**:
1. Governing-concept naming > literal/generic labels (strong, repeated preference)
2. pageType + audience + purpose as structural constraints, not content
3. Page structure: header → intro (value prop) → body (concept H1s) → footer (related pages)
4. One major layout element per page
5. Machine-readable component/layout configs for automation

---

## 2. Research & Thinking Documents

| File | Modified | Themes |
|---|---|---|
| [content-naming.md](../../../v2/_workspace/research/content-naming.md) | 2026-03-19 18:50 | **Section naming rubric**: 12-candidate generation, 5-dimension scoring (/25), ranking rules, winner filter. Penalize: literal contrast ("X vs Y"), comparator labels, generic umbrella, taxonomy mismatches, stitched compounds. Prefer: governing-concept content descriptors at correct conceptual layer. Includes worked examples and anti-patterns. Two versions of the rubric (general + with metadata inputs). |
| [ai-coauthoring.md](../../../v2/_workspace/research/ai-coauthoring.md) | 2026-03-18 20:56 | **Evaluation-purpose documentation framework**: Purpose process (Question → Investigate → Discover → Assess → Deliberate → Determine). 16 pre-writing questions about context, audience, purpose, familiarity, industry, skill level. Page success metrics (time on page, shares, bookmarks, link click-throughs). |
| [page-composition-framework.mdx](../../../snippets/templates/pages/page-composition-framework.mdx) | 2026-03-19 18:49 | **Page structure rules**: Header section (frontmatter + CTA options: Quote, Tip, Card, CodeBlock, Accordion, CustomCallout). Introduction section (overview: value prop, context, outline — decode jargon, lead with value). Body section (H1 = governing-concept terminology, not questions/numbers/comparators). Footer (related pages cards: 1-3 word title, 1 sentence max 10 words description). One major layout element per page. |

**Themes**: Naming precision, audience-aware framing, structural consistency, value-first introductions, anti-patterns for section headers.

---

## 3. Personas & Audience

| File | Modified | Themes |
|---|---|---|
| [personas.mdx](../../../v2/internal/overview/personas.mdx) | 2026-03-18 20:56 | **Developer journey model**: Awareness → Orientation → Activation → Progression → Hero. Builder persona types: App Dev, Gateway Operator, GPU Node, Protocol Dev, Tooling, Community. Mermaid flowchart. |
| [personas.md](../../../v2/gateways/personas.md) | 2026-03-18 20:56 | **5 gateway operator personas** (287 lines): Graduate (app dev → self-hosted), Provider (gateway-as-service), Builder (SDK/alt gateway), Broadcaster-Turned-Operator, Platform Builder. Each has: background, motivations, entry points, prior context, key questions, pain points, hardware profile. Sourced from GitHub issues, Discord, blog posts, SPE reports. |

**Themes**: Journey stages as a progression model, personas grounded in real user research (not invented), hardware/infrastructure as a persona dimension.

**Gap**: No equivalent persona research exists for orchestrators, developers, delegators, or community audiences.

---

## 4. Copy & Voice Rules

| File | Modified | Themes |
|---|---|---|
| [copy-rules-SKILL.md](../../../complete/dep-COPYWRITING%20FRAMEWORK/copy-rules-SKILL.md) | 2026-03-18 20:56 | **Executable copy rules**: Master test ("Does this sentence give the operator something they can act on, believe, or use to make a decision?"). 42 banned phrases. Banned words: effectively, essentially, basically, meaningful, significant, real, various, several, simply, obviously, clearly, just. Banned constructions: conditional gatekeeping, comparative headers, contrast-by-diminishment. Section opening order: Operator benefit → Technical mechanism → Configuration. Frontmatter SEO: max 160 chars. REVIEW flag handling. |
| [Copywriting Governance Framework.md](../../../complete/dep-COPYWRITING%20FRAMEWORK/Copywriting%20Governance%20Framework.md) | 2026-03-18 20:56 | **Master framework** (~183KB, 3 layers): Layer 1 (framework/philosophy), Layer 2 (research from 6 external frameworks: Diátaxis, Google Tech Writing, Microsoft Style Guide, Red Hat Modular Docs, DITA, SKILL.md standards), Layer 3 (issue audit with codebase examples). Traceability table mapping each rule to source + principle. |
| [banned-phrases.txt](../../../tools/lib/copy-governance/banned-phrases.txt) | 2026-03-18 20:56 | Machine-readable banned phrase list for automated linting. |
| [banned-words.txt](../../../tools/lib/copy-governance/banned-words.txt) | 2026-03-18 20:56 | Machine-readable banned word list for automated linting. |

**Themes**: Operator-first voice (act on it, believe it, use it), aggressive anti-qualifier stance, section opening order is prescriptive, rules are traceable to external authority.

**Gap**: Copy rules are operator-focused. Developer, delegator, and community voice variants are not defined.

---

## 5. Page Taxonomy & Frameworks

| File | Modified | Themes |
|---|---|---|
| [page-taxonomy-framework.mdx](../../../docs-guide/frameworks/page-taxonomy-framework.mdx) | 2026-03-18 20:56 | **Frontmatter schema**: pageType (12 values), audience (9 values), purpose (15 values), complexity (3 values), lifecycleStage (7 values). Governance: pageType governs format/UX/metrics, audience governs terminology/assumptions/voice, purpose governs content need/outcomes. Component taxonomy by function. |
| [content-system.mdx](../../../docs-guide/frameworks/content-system.mdx) | 2026-03-18 20:56 | **IA model**: Role/intent-driven primary areas. Content layers: Layer 1 (Product & Positioning), Layer 2 (Operational How-to), Layer 3 (Deep Reference). Copy principles: product clarity without sacrificing precision, canonical references, traceable claims, maintainable docs. Publishable vs workspace distinction. |
| [component-governance.mdx](../../../docs-guide/frameworks/component-governance.mdx) | 2026-03-18 20:56 | **Component classification** (26KB): 5-category taxonomy (primitives, layout, content, data, page-structure), 113 components, decision tree, compositional tiers, library boundary rules. |
| [research-skill-workflow.mdx](../../../docs-guide/frameworks/research-skill-workflow.mdx) | 2026-03-18 20:56 | **Research workflow runbook**: Operator commands, discovery boundaries, trust summary, adjudication workflow. Codex-ready, cross-agent portable. |

**Themes**: Layered content model (product → operational → reference), strict governance of what goes where, formal component taxonomy, research as a governed workflow not ad-hoc.

**Gap**: No `persona` field in taxonomy. Content layers don't map to audience journey stages explicitly.

---

## 6. Layout & Components

| File | Modified | Themes |
|---|---|---|
| [component-layout-decisions.mdx](../../../docs-guide/policies/component-layout-decisions.mdx) | 2026-03-18 20:56 | **Layout contract per pageType**: Required sections and approved components for each of the page types. Maps pageType → structure. |
| [component-layout-profile.json](../../../tools/config/component-layout-profile.json) | 2026-03-19 19:23 | Machine-readable version of layout contracts. |
| [component-registry.json](../../../docs-guide/component-registry.json) | 2026-03-19 19:23 | Full component inventory (246KB): 14 governance fields per component. |
| [component-usage-map.json](../../../docs-guide/component-usage-map.json) | 2026-03-18 20:56 | Component usage across all v2 pages (418KB). |

**Themes**: Layout is pageType-driven and machine-readable, component usage is tracked, governance fields per component.

---

## 7. Style & Authoring Standards

| File | Modified | Themes |
|---|---|---|
| [style-guide.mdx](../../../v2/resources/documentation-guide/style-guide.mdx) | 2026-03-18 20:56 | **3-layer styling framework**: Layer 1 (Global CSS: theme vars + framework overrides), Layer 2 (JSX Components: self-contained), Layer 3 (MDX Files: content only, zero inline styles). Typography, spacing, page layouts by type. Component usage guidelines. Mintlify overrides and gotchas (9 critical items). Git workflow, testing checklist. |
| [authoring-standard.mdx](../../../v2/resources/documentation-guide/authoring-standard.mdx) | 2026-03-18 20:56 | **Hybrid framework**: Diátaxis (structural) + RFC/Ethereum (protocol) + Stripe/Vercel (product) + Kubernetes/Rust (operational). Mandatory 9-component page structure. Mathematical/economic standards. Smart contract requirements. Metrics policy (no fabricated values). Diagram standards (Mermaid). Prohibited practices. Social preview metadata. |

**Themes**: Strict separation of style layers, Mintlify-specific gotchas are documented, authoring standard combines 4+ external frameworks, publication readiness has a formal checklist.

**Gap**: Style guide doesn't reference the persona model or audience-specific styling.

---

## 8. Policies

| File | Modified | Themes |
|---|---|---|
| [source-of-truth-policy.mdx](../../../docs-guide/policies/source-of-truth-policy.mdx) | 2026-03-18 20:56 | 7 canonical boundaries for content authority. Required docs-guide canonical files and generated indexes. |
| [quality-gates.mdx](../../../docs-guide/policies/quality-gates.mdx) | 2026-03-18 20:56 | Layered gate map: pre-commit (local/fast), pre-push (codex), PR CI (blocking), full sweeps (advisory/blocking). Ownership and runtime budgets. |
| [skill-pipeline-map.mdx](../../../docs-guide/policies/skill-pipeline-map.mdx) | 2026-03-18 20:56 | 6-stage audit pipeline run order: script-footprint → docs-quality → style-homogenizer → component-layout → cleanup-quarantine → cross-agent-packager. |
| [audit-system-overview.mdx](../../../docs-guide/policies/audit-system-overview.mdx) | 2026-03-18 20:56 | Static-first audit system: performance, link integrity, stale content, style consistency, component governance, cleanup workflows. |

**Themes**: Quality is layered (fast local → slow CI → advisory sweeps), audit pipeline has a defined run order, source-of-truth has formal boundaries.

---

## 9. Page Templates

| File | Modified | Themes |
|---|---|---|
| [overview-page.mdx](../../../snippets/templates/pages/overview-page.mdx) | 2026-03-18 20:56 | Template for overview pages |
| [how-to-page.mdx](../../../snippets/templates/pages/how-to-page.mdx) | 2026-03-18 20:56 | Template for how-to guides |
| [tutorial-page.mdx](../../../snippets/templates/pages/tutorial-page.mdx) | 2026-03-18 20:56 | Template for tutorials |
| [reference-page.mdx](../../../snippets/templates/pages/reference-page.mdx) | 2026-03-18 20:56 | Template for reference pages |
| [faq-page.mdx](../../../snippets/templates/pages/faq-page.mdx) | 2026-03-18 20:56 | Template for FAQ pages |
| [landing-frame-page.mdx](../../../snippets/templates/pages/landing-frame-page.mdx) | 2026-03-18 20:56 | Template for landing pages (frame mode) |
| [portal-page.mdx](../../../snippets/templates/pages/landing-and-navigation/portal-page.mdx) | 2026-03-18 20:56 | Template for portal navigation pages |
| [navigation-page.mdx](../../../snippets/templates/pages/landing-and-navigation/navigation-page.mdx) | 2026-03-18 20:56 | Template for navigation pages |
| [page-composition-framework.mdx](../../../snippets/templates/pages/page-composition-framework.mdx) | 2026-03-19 18:49 | **Master composition rules** (see Section 1) |

**Themes**: One template per pageType, composition framework is the meta-template that all others should follow.

**Gap**: Templates exist but may not be consistent with the page-composition-framework (which was updated more recently). Need to verify alignment.

---

## 10. Tooling Templates

| File | Modified | Themes |
|---|---|---|
| [review-packet-plan-template.md](../../../docs-guide/tooling/review-packet-plan-template.md) | 2026-03-18 20:56 | 3-phase review workflow: copy-framework findings, authoring-style findings, research findings. Tracker contract, validation checklist. |
| [research-review-packet-plan-template.md](../../../docs-guide/tooling/research-review-packet-plan-template.md) | 2026-03-19 13:07 | Research packet planning with source-of-truth scope rules (nav/folder/manifest modes). Tranche structure, output contract, per-tranche procedure. |
| [research-to-implementation-plan-template.md](../../../docs-guide/tooling/research-to-implementation-plan-template.md) | 2026-03-18 20:56 | Research-to-execution handoff: findings → work phases → validation → risks. |
| [content-brief-template.md](../../../docs-guide/tooling/content-brief-template.md) | 2026-03-18 20:56 | Content brief structure for new pages. |

**Themes**: Review is structured as packets with tranches, research has a formal handoff to implementation, content briefs exist as a template.

---

## 11. Configs & Registries

| File | Modified | Themes |
|---|---|---|
| [accuracy-source-registry.json](../../../tools/config/accuracy-source-registry.json) | 2026-03-18 20:56 | Source-of-truth mappings per docs section. |
| [usefulness-journeys.json](../../../tools/config/usefulness-journeys.json) | 2026-03-18 20:56 | User journey definitions for usefulness scoring. |
| [usefulness-rubric.json](../../../tools/config/usefulness-rubric.json) | 2026-03-18 20:56 | Rubric for page usefulness evaluation. |

**Themes**: Machine-readable configs for automated evaluation. Journey and rubric are decoupled from the scripts that use them.

---

## 12. Existing Skills (content pipeline relevant)

### CORE — Would be replaced or absorbed by the new pipeline

| Skill | Modified | Description | Has refs | Theme |
|---|---|---|---|---|
| **docs-change-review** | 2026-03-18 20:56 | Review pages/diffs for factual contradictions, overstatement, ownership overlap, historical drift, evidence gaps, claim quality | YES (2) | Fact-checking and claim quality. Focuses on accuracy, not voice/layout/naming. |
| **docs-copy** | 2026-03-18 20:56 | Route copy planning, rewriting, review, and claim-sensitive updates through correct skills | YES (3) | Orchestration skill — routes to other skills. Not a rewriter itself. |
| **docs-research-packet-generation** | 2026-03-18 20:56 | Generate research packets from nav scope/manifests/files for section-level fact-check | YES (3) | Packet-based research. Tranche structure, scope derivation, registry/adjudication validation. Most mature skill pattern. |
| **docs-source-verification** | 2026-03-18 20:56 | Verify claims against ranked primary sources, record evidence, assess freshness, classify contradictions | YES (2) | Source verification. Evidence-based, freshness-aware. |
| **page-content-research-review** | 2026-03-18 20:56 | Route fact-checking across claim extraction, source verification, contradiction analysis, propagation, reporting | YES (2) | Meta-workflow for research. Routes to sub-skills. |
| **docs-research-to-implementation-plan** | 2026-03-18 20:56 | Turn research outputs into decision-complete implementation plans | YES (2) | Research → action bridge. |
| **docs-impact-propagation** | 2026-03-18 20:56 | Map changed claim families to every dependent page/glossary/example/reference | YES (2) | Change propagation across pages. |
| **mintlify-authoring-style-compliance** | 2026-03-18 20:56 | Author/edit MDX in compliance with repo style and Mintlify constraints | NO | Style enforcement. No references — relies on external docs. |
| **style-mdx-quality-fix-playbook** | 2026-03-18 20:56 | Fix style, MDX, and quality test failures with smallest-risk edits | NO | Reactive fix workflow. |

### SUPPORTING — Keep as standalone utilities

| Skill | Modified | Description | Has refs | Theme |
|---|---|---|---|---|
| **seo-frontmatter-generation** | 2026-03-18 20:56 | Generate/normalize SEO metadata in MDX frontmatter | NO | Frontmatter automation. |
| **glossary-terminology-generation** | 2026-03-18 20:56 | Generate terminology/glossary datasets from content signals | NO | Terminology extraction. |
| **docs-ia-route-placement** | 2026-03-18 20:56 | Place content in correct v2 hierarchy and route context | NO | IA structure. |
| **component-library-guided-authoring** | 2026-03-18 20:56 | Use existing components before introducing new presentation logic | NO | Component reuse guidance. |

### INFRASTRUCTURE — Not directly part of content pipeline

26 additional skills covering: CI simulation, hook troubleshooting, script scaffolding, link audits, browser sweeps, data pipeline maintenance, environment setup, navigation maintenance, etc. All dated 2026-03-18 20:56.

---

## 13. Audit Scripts & Libraries

### Scripts (all dated 2026-03-19 19:04 — bulk header update)

| Script | Purpose |
|---|---|
| `repo-audit-orchestrator.js` | Master pipeline orchestrator — coordinates all audit stages |
| `audit-v2-usefulness.js` | Page usefulness scoring against rubric |
| `docs-quality-and-freshness-audit.js` | TODO/TBD/placeholder detection, thin content risk |
| `lint-copy.js` | Automated copy rule enforcement (banned words/phrases) |
| `docs-page-research.js` | Single-page fact-check pass |
| `docs-page-research-pr-report.js` | PR-advisory research helper |
| `docs-research-packet.js` | Packet-mode research (nav/manifest/paths) |
| `docs-research-adjudication.js` | Adjudication ledger validation |
| `docs-fact-registry.js` | Fact registry validation |
| `component-layout-governance.js` | Component layout compliance checker |
| `audit-component-usage.js` | Component usage tracking |
| `audit-media-assets.js` | Media asset inventory |
| `audit-scripts.js` | Script footprint audit |
| `audit-tasks-folders.js` | Tasks folder structure audit |
| `script-footprint-and-usage-audit.js` | Script sprawl detection |

### Libraries

| File | Modified | Purpose |
|---|---|---|
| `tools/lib/frontmatter-taxonomy.js` | 2026-03-18 20:56 | Frontmatter validation against taxonomy |
| `tools/lib/docs-authoring-rules.js` | 2026-03-18 20:56 | Authoring rule enforcement |
| `tools/lib/docs-publishability.js` | 2026-03-18 20:56 | Publishability determination |
| `tools/lib/docs-usefulness/prompts/*.js` | 2026-03-18 20:56 | 11 page-type-specific evaluation prompts (landing, overview, tutorial, how_to, faq, troubleshooting, changelog, concept, reference, glossary, index) |

**Themes**: Automated quality checks exist for copy, usefulness, layout, components, links, and freshness. Research has a full pipeline (page → packet → adjudication → fact registry). But these are audit/report tools — they don't rewrite anything.

---

## 14. Existing Review Outputs

| Location | Modified | Content |
|---|---|---|
| `workspace/reports/gateway-guides-review/2026-03-17-copy-review-packet/` | 2026-03-18 20:56 | Copy-framework + authoring-style findings for 8 gateway guide sections |
| `workspace/reports/orchestrator-guides-review/2026-03-16-copy-review-packet/` | 2026-03-18 20:56 | Copy-framework + authoring-style findings for 12 orchestrator guide sections |
| `workspace/reports/copy-governance/` | 2026-03-18 20:56 | Copy framework audit reports |
| `workspace/reports/page-audits/` | 2026-03-18 20:56 | Page-level audit reports |
| `workspace/research/adjudication/page-content-research-outcomes.json` | 2026-03-18 20:56 | Adjudication ledger with trust tiers |
| `workspace/research/claims/` | 2026-03-18 20:56 | Factual claim registry |

**Themes**: Reports exist but are report-only — no rewrite step follows. Gateway and orchestrator guides have the most complete review packets.

---

## 15. Catalogs (generated indexes)

| File | Modified | Purpose |
|---|---|---|
| [pages-catalog.mdx](../../../docs-guide/catalog/pages-catalog.mdx) | 2026-03-18 20:56 | Generated page inventory |
| [components-catalog.mdx](../../../docs-guide/catalog/components-catalog.mdx) | 2026-03-18 20:56 | Generated component inventory |
| [templates-catalog.mdx](../../../docs-guide/catalog/templates-catalog.mdx) | 2026-03-18 20:56 | Generated template reference |
| [ai-tools.mdx](../../../docs-guide/catalog/ai-tools.mdx) | 2026-03-18 20:56 | AI tools inventory |
| [workflows-catalog.mdx](../../../docs-guide/catalog/workflows-catalog.mdx) | 2026-03-18 20:56 | Workflow patterns |

---

## Theme Summary

### What exists and is solid

1. **Copy rules** — well-defined, traceable to external frameworks, machine-lintable
2. **Section naming rubric** — comprehensive, with scoring and anti-patterns
3. **Page taxonomy** — 12 pageTypes, 9 audiences, 15 purposes, machine-readable
4. **Component system** — 113 components, classified, with layout contracts per pageType
5. **Page templates** — one per pageType, plus a master composition framework
6. **Research pipeline** — packet generation, fact registry, adjudication, source verification
7. **Automated linting** — copy rules, frontmatter, layout compliance, usefulness scoring

### What exists but doesn't work well enough

1. **Skills are fragmented** — 9 core skills each do one slice; no single skill does a full page review
2. **Review produces reports, not rewrites** — the pipeline stops at diagnosis
3. **Voice is operator-only** — copy rules are written for gateway/orchestrator operators; developer, delegator, community voice undefined
4. **Persona is disconnected** — exists for gateways (5 detailed), missing for all other audiences, not in frontmatter
5. **Templates may be stale** — page-composition-framework was updated today but individual templates were not; alignment is unverified
6. **Journey mapping is implicit** — usefulness-journeys.json exists but isn't connected to persona or context packs

### What's missing entirely

1. **Context packs** — no per-group document that synthesizes audience + journey + information needs + gaps
2. **Page review briefs** — no structured, actionable diagnosis format that feeds a rewrite
3. **Rewrite skill** — nothing takes a review brief and produces a rewritten page
4. **Pipeline orchestration** — no way to run context → review → rewrite → validate in sequence with checkpoints
5. **Per-audience don'ts** — copy governance is one-size; no audience-specific extracts
6. **Golden examples** — no exemplar pages per pageType that define "what good looks like"
7. **Persona field in frontmatter** — taxonomy has audience but not persona
8. **Persona research for non-gateway audiences** — orchestrators, developers, delegators, community are undefined
