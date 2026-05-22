# Terminology Collation — Research

**Date**: 2026-03-20
**Task**: 1 of 5 (Research all terminology sources)
**Status**: Draft — awaiting human review

---

## Overview

This document inventories every file in the repo that defines, introduces, or uses significant terminology. Each entry records: file path, status, what it covers, and what terms it defines.

47+ files identified across 8 source groups.

---

## 1. Existing Glossaries & Definitions

### 1.1 `v2/resources/livepeer-glossary.mdx`

**Status**: Stub — marked "brainstorm list only", unverified
**Covers**: Comprehensive Livepeer terminology across all domains

**Terms defined** (~80):

| Section | Terms |
|---|---|
| Core Terms | Livepeer Protocol, Livepeer Network, Protocol Actor, Livepeer Actor, Network Participant, Livepeer Ecosystem, Ecosystem Partner, Developer Platform |
| Actors & Roles | Gateway, Orchestrator (GPU Node), Transcoder (Worker), Delegator, Developer, Broadcaster (deprecated), Verifier, Protocol |
| Ecosystem | Livepeer Foundation, Special Purpose Entity (SPE), On-chain Treasury |
| Network Concepts | Job, Segment, Ticket / Payment Ticket, Rounds, Slashing, Inflation, Reputation |
| Web3 | DAO, Ethereum Address, Block Timestamps, DePIN (x2 duplicate), LPT, Tokenomics, Game Theory, On-chain, Off-chain, ETH, ARB, Layer 2, Staking, Gas, Slashing Conditions, Bridging, Rollups, Stake-for-Access (SFA), Merkle Mine, ICO |
| Video | Transcoding, Ingest, Delivery, Streaming, RTMP (x2 duplicate), HLS, Bitrate |
| AI | Inference, Model, Pipeline, Real-Time AI, World Model, Agent, TensorRT, ControlNet |
| Payments | Fee Pool, Reward Cut, Fee Cut, Delegator Rewards |
| Operational | Node, CLI, Configuration Parameters, Health Check |
| Other | Decentralized GPU Network, Open Source, Edge Compute, Latency, Quality Ladder |
| Business | Network Effects, TAM, MoC |

**Issues**: DePIN appears twice. RTMP appears twice. Several terms have empty/incomplete definitions (Game Theory, Livepeer Ecosystem, Health Check truncated). "Network Participant" has "..?" uncertainty note.

---

### 1.2 `v2/gateways/resources/glossary.mdx`

**Status**: Current — last verified 2026-03-14, most complete role glossary
**Covers**: Gateway-specific deployment terminology

**Terms defined** (~15):

| Section | Terms |
|---|---|
| Deployment Axes | Deployment, Operational Mode (On-chain / Off-chain), Setup Type (go-livepeer / SDK / GWID / Hosted), Node Type (Video / AI / Dual) |
| Key Terms | Gateway, Orchestrator, Remote signer, Probabilistic micropayments (PM), NaaP (Network as a Platform), SPE, Broadcaster (deprecated), Payment Clearinghouse |
| Concepts | Operational Mode Asymmetry (gateway vs orchestrator) |

---

### 1.3 `v2/orchestrators/resources/glossary.mdx`

**Status**: Current — last verified 2026-03-16
**Covers**: Orchestrator-specific deployment and protocol terminology

**Terms defined** (~35):

| Section | Terms |
|---|---|
| Deployment Axes | Deployment, Node Mode (Video / AI / Dual), Deployment Type (Solo / Pool node / Pool operator / O-T split / Siphon), Scale (Single GPU / Multi-GPU / Fleet) |
| Dual Mode | Dual mode, Combined mode (ambiguous — deprecated), Hybrid (informal — deprecated), dual-workload configuration |
| Protocol | Active set, Round, Reward call, Reward cut, Fee cut, Stake (self-stake), Delegated stake, Activation / deactivation, Service URI |
| Operational | Orchestrator (process), Transcoder (process), AI worker / AI runner, Session, Segment, Capability, Warm model / cold model, Pipeline, BYOC (Bring Your Own Container), Pool |
| Economic | PM ticket, Ticket redemption, pricePerUnit, pricePerGateway, autoAdjustPrice, Inflation rewards, Service fees, Earnings |
| Deprecated | Broadcaster, Combined mode, Hybrid, Pool worker (renamed to Pool Node) |

---

### 1.4 `v2/internal/definitions.mdx`

**Status**: Stub — 27 lines, no definitions written
**Covers**: Structural framework for four top-level concepts

**Terms listed** (no definitions): Protocol, Network, Product, Ecosystem

---

### 1.5 `v2/resources/concepts/livepeer-101.mdx`

**Status**: Partial content
**Covers**: Key introductory concepts

**Terms defined**: Developer, Gateway Operator / Gateway

---

## 2. Framework & Structure Files (Canonical Sources of Truth)

### 2.1 `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md`

**Status**: Active — decisions being recorded
**Covers**: Content writing pipeline frontmatter schema

**Terms defined**:

| Dimension | Values |
|---|---|
| pageType (7) | navigation, concept, tutorial, guide, instruction, reference, resource |
| pageVariant | portal, landing, overview, quickstart, setup, specification, compendium, changelog |
| audience (10) | founder, builder, developer, gateway-operator, orchestrator, delegator, community, internal, general, everyone |
| persona | Optional refinement per audience (gateway personas exist: 5 detailed) |
| purpose (15) | orient, explain, choose, start, build, configure, operate, troubleshoot, optimize, integrate, verify, compare, reference, learn, update |
| domain | broad field (pending Step 6) |
| niche | specific context (pending Step 6) |
| complexity (3) | beginner, intermediate, advanced |
| lifecycleStage (7) | discover, evaluate, setup, build, operate, troubleshoot, optimize |

**Also defines**: Demand-side graduation path (founder -> builder -> developer -> gateway-operator)

---

### 2.2 `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

**Status**: Active — source of truth for component taxonomy
**Covers**: Component folder taxonomy, JSDoc header standard

**Terms defined**:

| Category | Terms |
|---|---|
| Component Types (6) | elements, wrappers, displays, scaffolding, integrators, config |
| Sub-niches (30) | a11y, buttons, callouts, icons, images, links, math, social, spacing, text, accordions, cards, containers, grids, lists, steps, tables, code, diagrams, quotes, response-fields, video, frame-mode, heroes, page-containers, portals, blog, embeds, feeds, video-data |
| JSDoc Tags (7) | @component, @type, @subniche, @status, @description, @dataSource, @accepts |
| @status values (4) | stable, experimental, deprecated, broken |
| @accepts values (4) | children, style, className, ...rest |
| Removed tags (10) | @owner, @category, @tier, @contentAffinity, @decision, @duplicates, @lastMeaningfulChange, @breakingChangeRisk, @dependencies, @usedIn |
| Decision Rules (6) | One per component type — "Is it a single visual piece...?", "Does it hold/group/arrange...?" etc. |

---

### 2.3 `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

**Status**: Active — source of truth for script taxonomy
**Covers**: Script folder taxonomy, JSDoc header standard

**Terms defined**:

| Category | Terms |
|---|---|
| Script Types (6) | audit, generator, validator, remediator, dispatch, automation |
| Concerns (4) | content, components, governance, ai |
| Niches (24) | quality, veracity, copy, structure, grammar, library, documentation, compliance, pr, codex, agents, pipelines, seo, catalogs, reference, reconciliation, repair, style, classification, data, language-translation, llm, scaffold, reports |
| JSDoc Tags (11) | @script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy |
| @mode values (5) | read-only, write, edit, generate, execute |
| Removed tags (5) | @owner, @category, @dualmode, @purpose-statement, @needs |

---

### 2.4 `docs-guide/frameworks/page-taxonomy-framework.mdx`

**Status**: Needs update after Phase 1 decisions
**Covers**: Original (pre-consolidation) frontmatter schema

**Terms defined**:

| Dimension | Old Values |
|---|---|
| pageType (12) | landing, overview, tutorial, quickstart, how_to, concept, reference, faq, troubleshooting, changelog, glossary, guide |
| audience (9) | developer, gateway-operator, orchestrator, delegator, platform-builder, community, internal, general, everyone |
| purpose (15) | orient, explain, choose, start, build, configure, operate, troubleshoot, optimize, integrate, verify, compare, reference, learn, update |
| purpose (old 16 format-mirroring) | landing, overview, concept, how_to, tutorial, reference, faq, glossary, changelog, troubleshooting (+ intent-based set) |

**Note**: Contains TWO competing purpose enum sets. The intent-based 15-value set is canonical per framework.md.

---

### 2.5 `v2/_workspace/references/content-pipeline/01-page-type-definitions.md`

**Status**: Draft — under interactive review
**Covers**: Detailed definitions for the 7 primary pageTypes with variants

**Terms defined**: Full definitions for navigation, concept, tutorial, guide, instruction, reference, resource — including job, UX pattern, content rules, forbidden patterns, success metrics, component rules, variants, and distinctions between similar types.

Also defines **migration map** from old 12-type enum to new 7-type system.

---

### 2.6 `docs-guide/frameworks/content-system.mdx`

**Status**: Current
**Covers**: Content layer model and IA principles

**Terms defined**:
- Layer 1: Product and Positioning
- Layer 2: Operational How-to
- Layer 3: Deep Reference
- Zero-to-hero comprehension paths
- Publishable docs vs workspace material
- Canonical references (preferred over duplication)

---

### 2.7 `docs-guide/frameworks/component-governance.mdx`

**Status**: Current but partially superseded by COMPONENT-GOVERNANCE/structure.md
**Covers**: Legacy component governance (5-category model, 14-field JSDoc)

**Terms defined** (many now superseded):
- Old categories: Primitives, Layout, Content, Data, Page Structure
- Old tiers: primitive, composite, pattern
- Old JSDoc tags (14): @component, @category, @tier, @status, @description, @contentAffinity, @owner, @dependencies, @usedIn, @breakingChangeRisk, @decision, @dataSource, @duplicates, @lastMeaningfulChange
- CSS governance: --lp-* prefix, ThemeData (banned), Three-Layer Hierarchy
- Testing tiers: Visual verification, Browser tests, Unit tests
- Component constraints: No inter-component composition (Mintlify constraint)

---

## 3. Governance Policies (12 files)

### 3.1 `docs-guide/policies/ownerless-governance.mdx`

**Status**: Current
**Terms**: Canonical source, Derived output, Repair command, Gate layer, Rollout state (advisory / autofix / blocking / migrating), Domain, Lock holder, Legacy review map

### 3.2 `docs-guide/policies/infrastructure-principles.mdx`

**Status**: Current
**Terms**: P0-P3 priority levels, Repository topology, Content contract, Generated artifacts, Local commit gate, Branch governance, PR changed-scope CI, Full sweep CI, Scheduled ingestion, Policy system

### 3.3 `docs-guide/policies/generated-artifact-and-hook-governance.mdx`

**Status**: Current
**Terms**: committed_authoritative, committed_derived_scoped, ephemeral_local (artifact classes), check_only, write_and_stage, ignore (hook behaviours)

### 3.4 `docs-guide/policies/quality-gates.mdx`

**Status**: Current
**Terms**: Pre-commit, Pre-push, PR Changed-File CI, Full/Broad CI Sweeps, V2 Lane Contract

### 3.5 `docs-guide/policies/agent-governance-framework.mdx`

**Status**: Current
**Terms**: Must-have canonical rules, Recommended shared rules, Native adapter rules, Required Repo Knowledge (10 knowledge domains)

### 3.6 `docs-guide/policies/audit-system-overview.mdx`

**Status**: Current
**Terms**: Static and report-synthesis mode, AI-tools registry, Cleanup policy, Language enforcement, Agent portability

### 3.7 `docs-guide/policies/cleanup-quarantine-policy.mdx`

**Status**: Current
**Terms**: keep, quarantine, delete-later (cleanup outcomes), "Classify first, review second, quarantine third" (workflow)

### 3.8 `docs-guide/policies/component-layout-decisions.mdx`

**Status**: Current (uses old 12-type pageType — needs update)
**Terms**: Layout contracts per pageType (landing, overview, how_to, reference, tutorial, concept, faq, troubleshooting, glossary, changelog) with required sections and preferred components

### 3.9 `docs-guide/policies/root-allowlist-governance.mdx`

**Status**: Current
**Terms**: .allowlist, Keep/Move/Remove criteria, Root clutter, Governed root state

### 3.10 `docs-guide/policies/skill-pipeline-map.mdx`

**Status**: Current
**Terms**: 6-stage pipeline: script-footprint-and-usage-audit, docs-quality-and-freshness-audit, style-and-language-homogenizer-en-gb, component-layout-governance, cleanup-quarantine-manager, cross-agent-packager

### 3.11 `docs-guide/policies/source-of-truth-policy.mdx`

**Status**: Current
**Terms**: Script/runtime behaviour, Script metadata and inventory, AI-tools inventory + lifecycle, Repo feature navigation map, Codex skill portability, Audit pipeline skill catalog, Public user-facing docs content, CI/test execution behaviour, Issue/PR intake behaviour, Generated files

### 3.12 `docs-guide/policies/v2-folder-governance.mdx`

**Status**: Current
**Terms**: Publishable section root, Publishable content tree, Active non-publishable working lane (_workspace/), Section-local retirement lane (x-deprecated/), Global frozen archive lane (v2/x-archived/), Workspace subfolder types (plans/, research/, research/sources/, reviews/, drafts/, handoff/), Legacy workspace patterns (banned)

---

## 4. Copy & Voice Governance

### 4.1 `workspace/plan/complete/dep-COPYWRITING FRAMEWORK/copy-rules-SKILL.md`

**Status**: Deprecated folder, but copy rules still apply
**Covers**: Banned phrases, banned words, entity-led voice rules

**Not read in full** — superseded by machine-readable files below.

### 4.2 `tools/lib/copy-governance/banned-phrases.txt`

**Status**: Current — machine-readable
**Phrases (17)**:
1. This section covers
2. The reason is straightforward
3. Understanding X is essential
4. It is important to note
5. As mentioned above
6. among other factors
7. and so on
8. low but not zero
9. not just
10. rather than
11. what it takes
12. once X is stable
13. it should be noted
14. not preference
15. depends on various
16. can generate
17. may produce

### 4.3 `tools/lib/copy-governance/banned-words.txt`

**Status**: Current — machine-readable
**Words (10)**:
1. effectively
2. essentially
3. basically
4. meaningful
5. significant
6. real
7. various
8. several
9. obviously
10. clearly

---

## 5. Research & Reference Materials

### 5.1 `v2/_workspace/research/content-naming.md`

**Status**: Active research
**Covers**: Section naming rubric (6-step process, 5-dimension scoring)

**Terms defined**: Literal label, Comparator label, Generic descriptor, Taxonomy mismatch, Content descriptor, Governing-concept label, Domain-anchor rule, Conditional precision rule

### 5.2 `v2/gateways/personas.md`

**Status**: Active research
**Covers**: 5 gateway operator personas

**Terms defined**:
- Persona A: "The Graduate" (app developer graduating to self-hosted)
- Persona B: "The Provider" (gateway-as-service provider)
- Persona C: "The Builder" (SDK / alternative gateway developer)
- Persona D: "The Broadcaster-Turned-Operator" (video infrastructure operator)
- Persona E: "The Platform Builder" (enterprise / AI platform operator)
- Also introduces: demand-side, supply-side, remote signer, clearinghouse, O-T split, BYOC, NaaP

### 5.3 Network terminology research pilot

**Path**: `workspace/plan/repo-ops-reports/page-content-research-history/2026-03-16-page-content-research-pilot-network-terminology.md`
**Status**: Research pilot
**Covers**: Gateway/orchestrator role terminology validation and propagation

---

## 6. Repo Baseline

### 6.1 `AGENTS.md`

**Status**: Current
**Covers**: Agent governance baseline

**Terms defined**: Canonical governance docs, Required Context (hierarchy), Native adapters, Human override, Lock/task validators, Worktree, Hook, .allowlist

---

## 7. Existing Scripts

### 7.1 `tools/scripts/generators/content/reference/generate-glossary.js`

**Status**: Exists (not read in detail)
**Covers**: Generates JSON glossary by scanning MDX pages

### 7.2 `tools/scripts/generators/content/reference/terminology-search.js`

**Status**: Exists (not read in detail)
**Covers**: Pattern-matching term discovery with optional LLM evaluation

---

## 8. Component & Script Registries

### 8.1 `docs-guide/component-registry.json`

**Status**: Generated — 118 components with 14 governance fields
**Covers**: Machine-readable component inventory

### 8.2 `docs-guide/component-usage-map.json`

**Status**: Generated
**Covers**: Component import tracking across pages

---

## Summary Statistics

| Source Group | Files | Terms (approx) |
|---|---|---|
| Existing glossaries | 5 | ~130 |
| Framework/structure files | 7 | ~120 |
| Governance policies | 12 | ~80 |
| Copy/voice governance | 3 | ~27 |
| Research/reference | 3 | ~15 |
| Repo baseline | 1 | ~10 |
| Scripts | 2 | (patterns, not terms) |
| Registries | 2 | (data, not terms) |
| **Total** | **35** | **~380+** |

---

## Known Issues & Conflicts

1. **DePIN** — duplicate definition in livepeer-glossary.mdx
2. **RTMP** — duplicate entry in livepeer-glossary.mdx
3. **pageType enum conflict** — old 12-type vs new 7-type. New 7-type is canonical per framework.md
4. **purpose enum conflict** — format-mirroring 16-value set vs intent-based 15-value set. Intent-based is canonical
5. **audience count** — old 9-token vs new 10-token (added `founder`, renamed `platform-builder` to `builder`). New 10-token is canonical
6. **Component governance conflict** — old 5-category/14-tag model (component-governance.mdx) vs new 6-type/7-tag model (COMPONENT-GOVERNANCE/structure.md). New model is canonical
7. **"Network Participant"** — flagged with "..?" in glossary, unclear if distinct from Protocol Actor
8. **"Broadcaster"** — deprecated but still referenced in go-livepeer codebase and CLI output
9. **"Combined mode"** — deprecated, ambiguous (meant two different things)
10. **"Pool worker"** — renamed to "Pool Node", old term may still appear

---

## Next Step

**Checkpoint**: Human reviews this research document.
- Is the source inventory complete? Any files missing?
- Are the term counts roughly right?
- Any sources I should add or skip?

Once approved, proceed to **Task 2: Harvest raw terms** -> `harvest.md`.
