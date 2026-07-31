# Review Rubric — Developers Tab

**Source:** `v2/developers1/_workspace/canonical/checks.mdx` (canonical 14-category, ~158-check rubric)
**Use:** apply to every non-stub page in `v2/developers/`. Every numbered check appears in the per-page review as PASS / FAIL / MIXED / N/A — never silently skipped.

## Verdict scale (page level)

| Verdict | Meaning |
|---|---|
| **PASS** | All checks pass. Ships as-is. |
| **MINOR** | 1–2 INFO/MEDIUM findings. Light polish before ship. |
| **MODERATE** | 3–5 findings, none CRITICAL. Targeted fix pass. |
| **MAJOR** | 6+ findings or any HIGH severity. Fix pass required. |
| **NEEDS WORK** | Any CRITICAL finding, or scope/audience mismatch. Re-brief before re-write. |
| **EMPTY-STUB** | Page is "This page is in progress." placeholder. Not reviewable until written. |

## Severity (per finding)

| Severity | Meaning | Action |
|---|---|---|
| **CRITICAL** | Breaks downstream, structurally wrong, scope mismatch | Fix before any other work |
| **HIGH** | Wrong on common cases (Studio leak, broken link, untested code, missing prereqs) | Fix before ship |
| **MEDIUM** | Inconsistent but renders | Next pass |
| **INFO** | Style preference / minor | Document, no action |

## The 10 categories (run in this order)

### 1. Frontmatter & Taxonomy (14 checks)
1.1 All 10 required frontmatter fields (title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG image block).
1.2 `pageType` is one of: `concept | tutorial | guide | instruction | navigation | reference | resource`. No deprecated 12-type values.
1.3 `pageVariant` (if present) is one of: `overview | specification | compendium | changelog | knowledge-hub | quickstart | troubleshooting`.
1.4 `purpose` is one of: `orient | explain | learn | choose | evaluate | start | build | configure | operate | troubleshoot | verify | integrate | optimise | reference | update`.
1.5 `audience` is one of: `founder | builder | developer | gateway | orchestrator | delegator | community`. Developers tab default: `developer` or `builder`.
1.6 `complexity` is one of: `beginner | intermediate | advanced`.
1.7 `lifecycleStage` is one of: `discover | evaluate | setup | build | operate | troubleshoot | optimise`.
1.8 `veracityStatus` present and honest (`verified | unverified | stale`).
1.9 `industry` array valid if present (≤2 from canonical set).
1.10 `niche` array valid if present.
1.11 `description` subject-first, ≤160 chars, no "this page", UK English.
1.12 OG image block complete (all 5 OG fields).
1.13 `keywords` specific and search-aligned (not generic like "livepeer", "developer").
1.14 **Developer/builder split honoured** — register matches the audience token.

### 2. Voice & Copy (22 universal + 7 developer + 8 builder)
**Universal (apply to every page):**
2.1 UK English throughout (no optimize/behavior/color/center/labeled/canceled etc.).
2.2 Zero banned words: `effectively, essentially, basically, meaningful, significant, real (intensifier), various, several, obviously, clearly`.
2.3 Zero banned phrases: `"This section covers", "This page covers/explains/walks you through", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on"/"etc.", "rather than", "what it takes", "it should be noted", "not just X", "can/may [verb]" in value claims, "depends on various"`.
2.4 Zero banned constructions: no `not [X]` in value statements; no unresolved `if [condition]` body prose; no `This page [verb]`; no `can/may` hedging in value claims.
2.5 Opening order: value/outcome before mechanism, fact before caveat, subject not caveat.
2.6 Paragraph discipline: one paragraph = one job. Lead with fact, end with fact or next step.
2.7 Audience register matches `audience` token.
2.8 Per-audience prohibited phrases absent.
2.9 No passive value statements — every claim quantified or concrete.
2.10 No hedging openers — page does not open with caveat or conditional.
2.11 Terminology locked (BYOC, NaaP, LIP-92, ComfyStream, PyTrickle exactly).
2.12 **Zero em-dashes** in MDX content. Hook-enforced.
2.13 Entity-led voice — paragraphs start with system fact/API behaviour/reader outcome, not "we", "our", "you will learn".
2.14 No hedging verbs in value claims (no "can help", "allows you to", "enables you to").
2.15 `description` not self-referential.
2.16 Zero deprecated terms: Broadcaster (use Gateway), Pool worker (use Pool node), Combined mode/Hybrid (use Dual mode), Transcoder as synonym for Orchestrator.
2.17 Universal terms consistent (Orchestrator, Gateway, Delegator, LPT, Transcoding, Staking).
2.18 Spell check passes against `tools/config/cspell.json`.
2.19 Terms match `TERMINOLOGY-COLLATE/consolidated/glossary-*.md`.
2.20 Per-tab terminology correct.
2.21 First use of specialised term defined or linked.
2.22 Terminology lock respected.

**Developer-register (developer audience):**
2.D1 Code-first opening on instruction/tutorial pages.
2.D2 Every function/API/method named in prose has code example or GitHub link.
2.D3 Versions stated explicitly (no "latest" without a number).
2.D4 Error states and edge cases in main content, not buried in `<Note>` at the end.
2.D5 No prose explanations of self-evident code.
2.D6 No marketing language adjacent to technical content.
2.D7 `<Note>` and `<Info>` not used for primary content.

**Builder-register (builder audience):**
2.B1 Integration value before network architecture.
2.B2 Exact API endpoint or SDK method named first.
2.B3 Working code in most-likely language (JS/TS first).
2.B4 Full request/response cycle shown.
2.B5 Prerequisites stated explicitly at top.
2.B6 No node-operator terminology without translation.
2.B7 No web3 mechanics without framing.
2.B8 No mixing protocol mechanics with integration steps.

### 3. Section Naming & Headings (10 checks)
3.1 Every heading scores ≥20/25 (Precision + Depth + Stability + Clarity + Conciseness). **Exception: `Related Pages` exempt.**
3.2 No banned/weak terms: `Basics, Notes, How It Works, See Also, Conclusion, What's Next`. Avoid: `Overview, Details, Information, Introduction, Summary, Options, Background, Next Steps, Further Reading`.
3.3 No literal contrast labels (`X vs Y`).
3.4 Domain-anchor rule applied (includes domain noun if interpretable in isolation).
3.5 Names the concept, not examples ("AI Pipeline Endpoints" not "text-to-image, image-to-video").
3.6 Title well-formed (1–3 words, concept-derived).
3.7 Sounds like an expert editorial choice.
3.8 Per-pageType naming style applied (reference = literal/findability; instruction/tutorial = task-oriented; concept = governing-concept; navigation = map language).
3.9 Per-audience register in headings.
3.10 Domain-anchor rule applied.

### 4. Page Structure & Content Architecture (20 checks)
4.1 One purpose, one audience, one job.
4.2 Purpose statement test: "This page lets the [audience] [concrete action]."
4.3 PREV/NEXT adjacency correct — no knowledge gaps.
4.4 No dead ends — every page has a clear next step.
4.5 Prerequisites stated or linked (API keys, SDK version, runtime, hardware).
4.6 Out-of-scope clear (links to Solutions/Gateways/About rather than recreating).
4.7 Information type per section correct (Developers tab skews procedural, technical, factual, analytical).
4.8 No content duplication from adjacent pages.
4.9 Section orientation page present (each section has an entry).
4.10 ≥3 cross-tab links to expected graduations (Gateways self-host, Solutions managed, About protocol).
4.11 Discord test — page answers its question completely.
4.12 Page size appropriate (concept/guide ≥5KB substantive; <2KB is a stub).
4.13 Zero `TODO`/unblocked `REVIEW` comments.
4.14 Flat layout where appropriate (Tabs for language variants, not sub-folders).
4.15 Trade-offs/limitations/failure-conditions named.
4.16 Content-pass context block completable.
4.17 **Every code block has language tag** (`bash`, `ts`, `python`, `go` etc.).
4.18 Code-first opening on instruction/tutorial pages (cross-ref 2.D1).
4.19 Error states in main content, not buried in Note (cross-ref 2.D4).
4.20 Every function/API/method named in prose has code example or link (cross-ref 2.D2).

### 5. Layout, Components & Template (34 checks)
5.1 Correct template for pageType + pageVariant.
5.2 Required sections present per pageType (instruction: Prerequisites + Steps + Next Steps; tutorial: Prerequisites + Steps + Verification + Related; reference: Reference; guide: Overview + Steps/H2).
5.3 Only approved components used.
5.4 Avoided components absent (no TODO/TBD/Coming Soon/PreviewCallout where forbidden).
5.5 Information-type → component mapping correct (procedural → StyledSteps; technical → CodeComponent/CodeGroup; reference → ParamField/ResponseField/StyledTable; multi-language → Tabs).
5.6 MDX renders clean — no broken JSX, no import errors.
5.7 No old-schema frontmatter values.
5.8 CSS custom properties only — no hardcoded hex, no inline styles.
5.9 Generated file banners intact.
5.10 Component naming/import conventions (PascalCase).
5.11 Page follows gold-standard template at `snippets/templates/pages/gold-standard-templates/{pageType}-template.mdx`.
5.12 Section blocks from `snippets/templates/pages/gold-standard/`.
5.13 Section ordering matches pageType.
5.14 Multi-view layout rules (1D = Tabs; 2D = Views then Tabs; Steps never inside Accordions; Tabs never inside Steps).
5.15 Data imports used — no hardcoded contract addresses, CLI flags, API endpoints, model IDs.
5.16 **Related Pages footer OR Next Step CTA present** — every non-navigation page ends with one or the other (never both).
5.17 **Related Pages format**: `<Columns cols={2}>` with `<Card>` using `<CustomCardTitle>` (icon + horizontal). Card title 1–3 words. Description one sentence, ≤10 words.
5.18 **Tab icon prop present** — every `<Tab>` includes `icon` (js, python, golang, docker, etc.).
5.19 **Accordion icon prop present** — every `<Accordion>` includes `icon`.
5.20 **Code block metadata** — every fenced block includes `icon` + `title` attributes. `icon="terminal"`, `title="auth.ts"`.
5.21 **StyledSteps used, not raw Steps.** Accent styling props (`iconColor`, `titleColor`).
5.22 Navigation cards use `<CustomCardTitle>` with icon + title.
5.23 Tables use `<StyledTable>` not raw markdown tables.
5.24 Maximum 1–2 tables per page.
5.25 Maximum 1 major layout element per page (StyledTable, StyledSteps) unless nested.
5.26 **CustomDivider placement** — one opening divider after imports; NO divider between intro and first H2; optional between major H2s; ALWAYS before Related Pages.
5.27 Mermaid uses `MermaidColours.jsx`. Prose before every diagram. `ScrollableDiagram` for overflow.
5.28 Import section ordering (component → data → page → composable).
5.29 Media placeholders in TODO JSX comments.
5.30 Fact-check flags as `{/* REVIEW: ... */}` JSX comments.
5.31 Decision-critical info visible without interaction (not hidden behind Tabs/Accordions).
5.32 Reference tables at end, not beginning.
5.33 Drafts in workspace, not live.
5.34 No inline styles, no hardcoded hex.

### 6. Veracity & Factual Accuracy (12 checks)
6.1 Every factual claim citable to authoritative source.
6.2 Code/commands tested. **TESTED:** label required on every code block. NOT-TESTED requires justification.
6.3 No deprecated API usage. Version-pin every example.
6.4 Numbers are real (pricing, latency, VRAM, dimensions).
6.5 REVIEW flags for unverified claims.
6.6 `veracityStatus` honest — reflects weakest section.
6.7 Uses `resources/glossary.mdx` (human-reviewed), not compendium glossary (AI-generated).
6.8 Source staleness check — SDK versions stated explicitly.
6.9 No open-ended "needs more research" tasks.
6.10 Source authority tiers respected (T1 primary > T2 tagged > T3 search/community).
6.11 Glossary definitions match `universal-terms.md`.
6.12 Glossary definitions verified against `veracity-sources.md`.

### 7. Navigation & IA (12 checks)
7.1 Page exists in docs.json. No orphans. No phantom entries.
7.2 docs.json mirrors filesystem.
7.3 Portal/index routes to every section.
7.4 No structural orphans.
7.5 Audience journey complete for all 5 primary personas.
7.6 ≥3 cross-tab graduation paths (Gateways/Solutions/About/Orchestrators).
7.7 File in correct lane (publishable in `v2/`, draft in `_workspace/`).
7.8 File naming conventions (no `-index` suffix).
7.9 `_workspace/` TTL compliance.
7.10 No stubs in published nav (every nav entry >2KB substantive).
7.11 Resources sub-structure correct.
7.12 Guides scope correct.

### 8. Links & Rendering (6 checks)
8.1 All internal links resolve.
8.2 All external links live (no 404, no redirect chains).
8.3 All snippet imports resolve.
8.4 All images load. PNGs >500KB reviewed for WebP.
8.5 Page renders without error.
8.6 No TODO/TBD/Coming Soon in published content.

### 9. Process & Governance (6 checks)
9.1 Human sign-off recorded.
9.2 Consuming decisions in registry.
9.3 Gate prerequisites met.
9.4 Phase ordering respected.
9.5 Findings gathered before fixes.
9.6 Feedback routed.

### 10. Content Completeness (7 checks)
10.1 Every question in tab's job list has a page.
10.2 Zero-to-hero journey complete.
10.3 All primary persona paths unblocked.
10.4 Scope boundaries explicit.
10.5 Self-containment holds.
10.6 Code samples have working language path (TS for builder; Python where AI; Go for OSS contributor).
10.7 Persona-specific guides present (AI: authentication, webhooks, troubleshooting, production-checklist; Video: access-control, webhooks, monitor-stream-health, playback; OSS: contribution, local testnet).

## Reporting rules

- **Fixes must be executable.** No "add appropriate X". Specify exact value/line/action.
- **Definition strings in fixes use REVIEW placeholders.**
- **Schema rules must cite the specific check** (e.g. "fails 5.20 — code block missing icon").
- **Read fields directly** from the file. Do not infer.
- **Evaluate current state only.** Findings describe the page as it is now.
- **TESTED or NOT-TESTED** required for every code block + factual claim.
- **Verify every cited occurrence.** Quote the actual line content.
- **Severity:** CRITICAL / HIGH / MEDIUM / INFO only.
- **Findings appear in all applicable categories.** No orphans.
- **Deduplication:** each finding logged once in the most specific category.

## Studio framing — special rule

Project rule 3: **zero Studio content in v2/developers/** (Studio refs are CRITICAL findings). Only legitimate location is `learn/where-to-find/studio-paths.mdx`. Any `livepeer.studio`, `Studio API`, `Studio dashboard`, `Studio account` reference elsewhere is a HIGH or CRITICAL finding under 1.14 + 4.1.
