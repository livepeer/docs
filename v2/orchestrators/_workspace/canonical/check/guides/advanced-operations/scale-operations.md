# Per-Page Quality Check Report
## `v2/orchestrators/guides/advanced-operations/scale-operations.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2938–2942 — page confirmed at line 2942: `"v2/orchestrators/guides/advanced-operations/scale-operations"`. Navigation sequence within "Advanced Operations" group: [1] `gateway-relationships`, [2] `gateway-orchestrator-interface`, [3] `pool-operators`, [4] `scale-operations`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Scale Operations` | PASS | Present, non-empty |
| `sidebarTitle` | Yes | `Scale Operations` | PASS | Present, non-empty |
| `description` | Yes | `Architectural patterns for running multiple Livepeer orchestrator nodes at data-centre scale — multi-orchestrator setup, capacity management, rolling updates, fleet-wide monitoring, and enterprise onboarding.` | FAIL | 212 chars (>160 limit). Em-dash (—) present. See F-01 |
| `pageType` | Yes | `concept` | FAIL | `concept` is a valid canonical pageType. However, content is primarily operational/procedural (rolling updates, capacity management steps, worker provisioning steps). Scope mismatch between pageType and content. See BD-1 |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `explain` | FAIL | `explain` is valid but content is mostly `operate` — step sequences, capacity tables, monitoring commands. Mismatch between stated purpose and actual content. See BD-1. Value is read directly from frontmatter |
| `complexity` | No | absent | FAIL | Required field missing. Proposed: `complexity: advanced` — confirm before applying. See F-02 |
| `lifecycleStage` | No | absent | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. See F-03 |
| `keywords` | Yes | `livepeer, orchestrator, fleet, multi-orchestrator, data centre, enterprise, scale, multi-o, load balancing, rolling update` | PASS | Specific, searcher-aligned. `multi-orchestrator`, `fleet`, `rolling update` are strong keywords |
| OG image block | Yes | `/snippets/assets/site/og-image/en/orchestrators.png`, alt, type, width, height present | PASS | All 5 OG fields present |
| `veracityStatus` | No | absent | FAIL | Required. Page contains specific architectural claims and referenced documentation (`doc/multi-o.md`, `doc/redeemer.md`) that require verification. Proposed: `veracityStatus: unverified` — confirm before applying. See F-04 |
| `industry` | No | absent | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-05 |
| `niche` | No | absent | FAIL | Required (P41). Proposed: `niche: [infrastructure, hardware]` — confirm before applying. See F-06 |
| `status` | Yes | `published` | FAIL | `status: published` with `veracityStatus` absent is incoherent per checks.mdx §1.8. Change to `status: draft`. See F-07 |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | absent | INFO | `pageType: concept` is canonical. `pageVariant: overview` is valid but not required. Not a finding |

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` absent. Five fields missing |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is a valid canonical value |
| 1.3 | `pageVariant` valid if present | N/A | Not present |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is a valid value (read directly from frontmatter). Schema-valid, but see BD-1 for editorial concern |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: advanced` — confirm before applying. See F-02 |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: operate` — confirm before applying. See F-03 |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: published` with unverified content. See F-04 and F-07 |
| 1.9 | `industry` array valid | FAIL | Absent. Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-05 |
| 1.10 | `niche` array valid | FAIL | Absent. Proposed: `niche: [infrastructure, hardware]` — confirm before applying. See F-06 |
| 1.11 | `description` well-formed | FAIL | 212 chars (>160). Em-dash present. See F-01 |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` quality | PASS | `multi-orchestrator`, `multi-o`, `fleet`, `rolling update` are searcher-aligned |

**Category 1 verdict:** FAIL. Checks failing: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings detected. "data-centre" in keywords — correct UK hyphenation. No -ize endings, no behavior/colour violations |
| 2.2 | Zero banned words | PASS | Candidates scanned: no `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` found in body prose |
| 2.3 | Zero banned phrases | PASS | No "this page covers", "this section covers", "as mentioned above", "rather than", "and so on" found |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. Multiple `can [verb]` instances. See F-08. Also: line 98 reference to siphon-setup uses "This pattern is architecturally similar to the [Siphon split setup]" — not a self-reference opener, acceptable. Line 48: "Start with a single node unless one of these conditions already applies" — not a banned construction |
| 2.5 | Opening order correct | PASS | Line 35: "Run a fleet when one orchestrator is no longer enough for the GPU footprint, failure isolation, or regional coverage you need." — opens with the condition for use, leading with reader outcome |
| 2.6 | Paragraph discipline | PASS | Paragraphs single-job. Lead sentences factual |
| 2.7 | Audience register correct | PASS | Operational/technical register. Architectural level of detail appropriate for advanced orchestrators. Enterprise-facing language in the final section is appropriate |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…", "Easy to set up" found |
| 2.9 | No passive value statements | PASS | Claims are specific: "Running reward calling on multiple nodes risks duplicate submissions and wasted gas" |
| 2.10 | No hedging openers | PASS | Direct conditional opening ("Run a fleet when…") is not a hedge |
| 2.11 | Terminology locked and consistent | PASS | `multi-orchestrator`, `fleet`, `reward()`, `reward calling`, `ticket redemption`, `orchSecret`, `-reward=false`, `-selectStakeWeight` used consistently |

**Category 2 verdict:** FAIL. Check failing: 2.4

---

## Category 3 — Section Naming & Headings

*(Note: No "Related Pages" heading. CardGroup at end is unnamed. N/A for exemption.)*

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| When you need fleet operations | 3 | 3 | 4 | 4 | 4 | 18 | FAIL |
| Multi-orchestrator architecture | 5 | 5 | 5 | 5 | 5 | 25 | PASS |
| Scaling GPU workers | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Capacity management at fleet scale | 4 | 4 | 5 | 4 | 4 | 21 | PASS |
| Rolling updates | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Network and key management at scale | 4 | 4 | 5 | 4 | 4 | 21 | PASS |
| Enterprise and data-centre onboarding | 5 | 4 | 5 | 5 | 4 | 23 | PASS |

**Scoring rationale for "When you need fleet operations":**
- Precision (3): "When you need" is a conditional frame, not a concept name. The section names a threshold/trigger, not a mechanism.
- Depth (3): "Fleet operations" is accurate but the section's content is a decision tree — the heading doesn't signal that.
- Stability (4): Stable to content changes.
- Clarity (4): Clear within context.
- Conciseness (4): Slightly wordy.
- Proposed rename: `Fleet Operations Threshold` or `Fleet Decision Criteria`. See F-09.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "When you need fleet operations" scores 18/25. See F-09 |
| 3.2 | No banned or weak standalone terms | PASS | No Banned or Avoid tier terms. "Operations" in context is not standalone "Notes" or "Overview" |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule | PASS | All headings interpretable in isolation with domain context |
| 3.5 | Heading names concept, not examples | PASS | No example-enumerating headings |
| 3.6 | Title well-formed | PASS | `Scale Operations` — 2 words, concept-derived. Clean |
| 3.7 | Expert editorial choice | FAIL | "When you need fleet operations" reads as a Q&A FAQ-style heading rather than an expert editorial choice. See F-09 |

**Category 3 verdict:** FAIL. Checks failing: 3.1, 3.7

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | FAIL | Page mixes two purposes: (a) explaining fleet architecture (conceptual, appropriate for concept/explain), and (b) operational procedures like rolling updates and worker provisioning (procedural, appropriate for guide/operate). See BD-1 |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator operator understand fleet architecture and scale beyond a single node." Passes for the conceptual reading. Conditional on BD-1 |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json (line 2939–2942): `pool-operators` → `scale-operations` → (next is Roadmap and Funding group). Arriving from `pool-operators` (single pool with workers), the operator has multi-worker context. Scale-operations is a natural next step. No knowledge gap |
| 4.4 | No dead ends | PASS | Final CardGroup provides four onward paths: Run a Pool, Split O-T Setup, Siphon Setup, Metrics and Monitoring |
| 4.5 | Prerequisites stated | PASS | Line 35: "Run a fleet when one orchestrator is no longer enough" — implicit prerequisite (existing single-node operation). Pool Operators page is a logical prerequisite |
| 4.6 | Out-of-scope clear | PASS | Page focuses on multi-node fleet patterns. Single-node operation is explicitly routed to earlier pages |
| 4.7 | Information type per section correct | FAIL | `purpose: explain` permits conceptual, technical, factual, analytical. However: "Rolling updates" section is procedural (step 1, step 2, step 3, step 4). "Scaling GPU workers" section is procedural. Procedural is not in the permitted secondary types for `explain`. This is a purpose/content mismatch — see BD-1 |
| 4.8 | No content duplication | FAIL | CardGroup at end (lines 216–225): "Split O-T Setup" (line 220) and "Siphon Setup" (line 223) both point to the same `siphon-setup` path. Two cards with different titles link to the same href. See F-10 |
| 4.9 | Section orientation page | N/A — page-level check |
| 4.10 | Cross-tab links | INFO | No internal cross-tab links. Tab-level check |

**Category 4 verdict:** FAIL. Checks failing: 4.1, 4.7, 4.8

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | FAIL | `concept` pageType should use Overview + AccordionGroup/Tabs/prose structure. Page has numbered step sequences (lines 112–123) which are procedural template elements, not concept template elements. Template mismatch — see BD-1 |
| 5.2 | Required sections present | PASS | For `concept`: Overview is required. Opening paragraph serves as Overview |
| 5.3 | Only approved components used | NOT-TESTED | Components: `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `CardGroup`, `Card`, `Note`. `docs-guide/policies/component-layout-decisions.mdx` not read |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon in visible content |
| 5.5 | Information type → component mapping | PASS | Table for capacity monitoring metrics — correct. CardGroup for next steps — correct. Numbered steps for rolling updates — correct for procedural (though procedural content in a concept page is BD-1 scope) |
| 5.6 | MDX renders clean | PASS | No broken JSX, imports present, Mermaid syntax present, no unclosed tags |
| 5.7 | No old-schema frontmatter | PASS | `pageType: concept`, `purpose: explain` are both canonical values |
| 5.8 | CSS uses custom properties | PASS | No hardcoded styles |
| 5.9 | Generated file banners | N/A — not a generated file |
| 5.10 | Component naming conventions | PASS | PascalCase, correct imports |

### Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|-----------|-------|---------------------------|-------|
| `StyledTable` | Yes | NOT-TESTED | In preferred list for multiple types |
| `CustomDivider` | Yes | NOT-TESTED | Approval file not read |
| `CardGroup` / `Card` | Yes | NOT-TESTED | Not in primary preferred list for concept per matrix; listed for guide and resource. NOT-TESTED |
| `Note` | Yes | NOT-TESTED | Listed in preferred for concept |

**Category 5 verdict:** FAIL (5.1 only — template mismatch tied to BD-1). Component checks NOT-TESTED.

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | NOT-TESTED: "each orchestrator node has its own keypair and accepts payments on behalf of the same on-chain registered Ethereum address" (line 56) — not verified against go-livepeer source. Multi-orchestrator architecture described (line 54) — `doc/multi-o.md` referenced but not read |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: `livepeer -transcoder -orchAddr ... -orchSecret ... -nvidia 0,1,2 -maxSessions 10` (lines 115–120) not executed. `docker run --net=host --env LP_MODE=standalone --env LP_NODES=... livepeer/monitoring:latest` (lines 162–165) not executed |
| 6.3 | No deprecated API usage | PASS | NOT-TESTED: `-reward=false`, `-transcoder`, `-orchAddr`, `-orchSecret`, `-nvidia`, `-maxSessions` referenced. No obviously deprecated flags, but not confirmed against current release |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "at least two workload nodes to maintain service continuity" (line 183) — operational recommendation, not cited. LP_NODES env var format `worker1:7935,worker2:7935` not verified against livepeer/livepeer-monitoring documentation |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW flags on the page. Multiple architectural claims about multi-orchestrator behaviour (`doc/multi-o.md` referenced but not inline-verified). See F-11 |
| 6.6 | `veracityStatus` honest | FAIL | Absent. `status: published` with unverified claims. See F-04 and F-07 |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness risk | FAIL | NOT-TESTED: `livepeer/livepeer-monitoring` Docker image tag `latest` (line 163) — staleness risk. `doc/multi-o.md` and `doc/redeemer.md` in go-livepeer repo may be out of date. SPE programme details (MuxionLabs, Titan Node) are subject to change |
| 6.9 | No open-ended research tasks | PASS | No open-ended "needs research" statements. Claims are specific if unverified |

**Category 6 verdict:** FAIL. Checks failing: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/advanced-operations/scale-operations` confirmed at docs.json line 2942 |
| 7.2 | Navigation matches file system | PASS | File exists at stated path |
| 7.3 | Tab entry portal | N/A — page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Advanced Operations group |
| 7.5 | Audience journey complete | PASS | Scale operations is the logical endpoint for operators growing beyond single-node or pool configurations |
| 7.6 | Cross-tab graduation paths | INFO | No internal cross-tab links on this page. Tab-level check. The enterprise onboarding section (line 208) links externally to `https://livepeer.org/contact` |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable |
| 7.8 | File naming conventions | PASS | `scale-operations.mdx` — no disallowed prefix, no `-index.mdx` |
| 7.9 | TTL compliance | N/A |  |

**Category 7 verdict:** PASS

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | Issue: CardGroup at lines 216–228 has two cards both pointing to `/v2/orchestrators/guides/deployment-details/siphon-setup` (docs.json line 2886 ✓ — path exists). Both cards are valid links individually, but duplicate destination is a content quality issue (see F-10). `/v2/orchestrators/guides/advanced-operations/pool-operators` (docs.json line 2941 ✓), `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (docs.json line 2932 ✓). All paths resolve. External: `https://github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md` and `https://github.com/livepeer/livepeer-monitoring` — NOT-TESTED |
| 8.2 | External links live | NOT-TESTED | `https://github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md`, `https://github.com/livepeer/livepeer-monitoring`, `https://livepeer.org/contact` |
| 8.3 | Snippet imports resolve | PASS | Standard component imports from known paths |
| 8.4 | Images load | PASS | OG image only; standard path |
| 8.5 | Page renders clean | PASS | No broken JSX, valid Mermaid syntax, imports used |
| 8.6 | No TODO/TBD/Coming Soon | PASS | No placeholders in visible content |

**Note on `doc/multi-o.md` and `doc/redeemer.md`:** Referenced as in-text paths, not hyperlinks, except for the `github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md` Card link which is an external URL (NOT-TESTED).

**Category 8 verdict:** PASS (link issue at 8.1 is a content quality issue, not a broken link — path resolves. External links NOT-TESTED)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off | FAIL | `status: published` but `veracityStatus` absent. See F-07 |
| 9.2 | Consuming decisions in registry | N/A |  |
| 9.3 | Gate prerequisites met | FAIL | Tab has no open content pass gate. Status inconsistency |
| 9.4 | Phase ordering | N/A |  |
| 9.5 | Findings before fixes | N/A |  |
| 9.6 | Feedback routed | N/A |  |

**Category 9 verdict:** FAIL. Checks failing: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, description, CustomDivider `middleText` props, component props, table cells, card descriptions.

| Line | Sentence/phrase | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| description | "Architectural patterns for running multiple Livepeer orchestrator nodes at data-centre scale — multi-orchestrator setup…" | em-dash (—) | banned (CLAUDE.md) | YES — F-01 |
| 35 | "Run a fleet when one orchestrator is no longer enough for the GPU footprint, failure isolation, or regional coverage you need." | `no longer enough` / `not [X]` — "no longer enough" contains a negation | value statement framing — "no longer enough" is a threshold statement, not a primary `not [X]` construction. The sentence asserts a positive action ("Run a fleet when") | BORDERLINE — acceptable framing |
| 47–48 | "Start with a single node unless one of these conditions already applies. Fleet architecture adds operational complexity, and the gains only justify that overhead once scale pressure is already present." | `unless` / `only justify that overhead once` — near conditional | threshold statement | BORDERLINE — "unless" is a threshold construction, not a banned `if [condition]` in body prose. Acceptable |
| 54 | "The key insight: each orchestrator node has its own keypair and accepts payments on behalf of the same on-chain registered Ethereum address." | no banned pattern | factual | No |
| 98 | "This pattern is architecturally similar to the [Siphon split setup]." | `This` in "This pattern" — not `This page [verb]` | references a pattern in scope | No |
| 108 | "Whether you are running a single orchestrator or a fleet, GPU workers scale horizontally." | no banned pattern | factual | No |
| 108 | "Each worker connects to an orchestrator with `-orchSecret` and the orchestrator distributes segments across all connected workers." | no banned pattern | factual | No |
| 123 | "The orchestrator immediately begins routing to the new worker — no configuration change on the orchestrator required" | em-dash (—) | banned (no em-dashes) | YES — F-12 |
| 134 | "There is no manual load balancing step — go-livepeer handles distribution internally." | em-dash (—) | banned (no em-dashes) | YES — F-13 |
| 134 | "go-livepeer handles distribution internally." | no banned pattern | factual | No |
| 160–165 | "For Prometheus fleet monitoring, run the [livepeer/livepeer-monitoring] Docker image configured with all worker node addresses" | no banned pattern | procedural | No |
| 183 | "This requires at least two workload nodes to maintain service continuity during updates." | no banned pattern | factual/procedural | No |
| 195 | "Distribute the keystore file carefully — only over encrypted channels, with restricted file permissions on each machine." | em-dash (—) | banned (no em-dashes) | YES — F-14 |
| 198 | "Running reward calling on multiple nodes risks duplicate submissions and wasted gas." | no banned pattern | factual | No |
| 198 | "Designate a single node for reward calling and set `-reward=false` on all others." | no banned pattern | procedural | No |
| 206–207 | "If you are operating at data-centre scale, multiple co-location sites, or with commercial-grade SLA requirements, the Livepeer Foundation offers direct engagement support." | `if [condition]` in body prose | conditional — but this is a segmentation clause for the audience of this section (enterprise/data-centre operators). The condition segments the audience, not a threshold. | BORDERLINE — acceptable as audience segmentation |
| 212 | "The SPE (Special Purpose Entity) programme is the primary pathway for professional GPU operators who want a structured relationship with the network." | no banned pattern | factual | No |
| Card desc "Pool operations — accepting worker connections and managing off-chain payouts." | Card description | no banned pattern | description | No |
| Card desc "The foundational split between orchestrator and transcoder processes." | Card description | no banned pattern | description | No |
| Card desc "The reward-safe split setup using OrchestratorSiphon." | Card description | no banned pattern | description | No |
| Card desc "Scaling Prometheus monitoring to a multi-node fleet." | Card description | no banned pattern | description | No |
| Card title "Split O-T Setup" | Card title | no banned pattern | label | No |
| Card title "Siphon Setup" | Card title | no banned pattern | label | No |

**Banned Construction Scan verdict:** One description em-dash (F-01) and three body prose em-dashes (F-12, F-13, F-14) confirmed. Three BORDERLINEs noted, all acceptable.

---

## Spelling/Typo Check

Scan of all visible text.

- "OrchestratorSiphon" — correct product name
- "MuxionLabs" — proper noun, accept
- "multi-o" — accepted shorthand per go-livepeer docs
- "NVIDIA" — correct
- "NVLink" — correct
- "go-livepeer" — correct
- "LP_MODE", "LP_NODES" — correct env var names
- "multi-orchestrator" — correct hyphenation
- "data-centre" — correct UK hyphenation
- "SPE" (Special Purpose Entity) — defined at first use in text
- "reward()" — correct function name
- "doc/multi-o.md", "doc/redeemer.md" — correct file paths
- Line 98: "Siphon split setup" — consistent with siphon-setup.mdx title

**Result: No spelling errors or typos found in visible text.**

---

## Cross-Category Connections

```
Root Cause 1: Missing required frontmatter fields (complexity, lifecycleStage, veracityStatus, industry, niche)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10
Fix: Add five missing fields with proposed values (see F-02 through F-06). All values require human sign-off.
```

```
Root Cause 2: status: published inconsistency with absent veracityStatus
Affects: Cat 1.8 + Cat 9.1 + Cat 9.3
Fix (F-07): Change `status: draft` until veracityStatus is honestly set.
```

```
Root Cause 3: Em-dashes throughout visible text
Affects: Cat 1.11 (description) + body prose (lines 123, 134, 195)
Fix: Remove em-dashes from all four locations. See F-01, F-12, F-13, F-14.
```

```
Root Cause 4: pageType/purpose mismatch with procedural content
Affects: Cat 4.1 + Cat 4.7 + Cat 5.1 + check 1.4 (editorial concern)
Fix: See BD-1. Requires human decision.
```

```
Root Cause 5: Duplicate card destinations in CardGroup
Affects: Cat 4.8 + Cat 8.1
Fix (F-10): Remove duplicate. "Split O-T Setup" and "Siphon Setup" both link to siphon-setup. Remove one and replace with a distinct destination. Proposed: Remove "Split O-T Setup" card (redundant), keep "Siphon Setup". Or replace "Split O-T Setup" with a link to `orchestrator-transcoder-setup` (different page). Confirm before applying.
```

---

## Blocking Decisions

```
BD-1: pageType and purpose — concept/explain vs guide/operate
Question: Is scale-operations an explanatory concept page or an operational guide?
Context: Content includes:
  - Conceptual sections: When you need fleet operations, Multi-orchestrator architecture, Enterprise onboarding
  - Procedural sections: Scaling GPU workers (numbered steps), Rolling updates (numbered steps), Network and key management (directives)
Options:
  [A] Keep `pageType: concept` + `purpose: explain` — remove or convert procedural sections (rolling updates, worker provisioning steps) to concept-oriented prose. The how-to steps belong in a guide or instruction page.
  [B] Change `pageType: guide` + `purpose: operate` — restructure to guide template with H2 sections and procedural content. Retain all current sections.
If A: Sections "Scaling GPU workers" and "Rolling updates" need conversion to conceptual prose, or splitting to a separate instruction page. Check 4.7 and 5.1 resolve.
If B: Apply `pageType: guide`, `purpose: operate`, confirm template compliance. Check 5.7 stays PASS. Check 4.7 resolves. Check 3.6 title `Scale Operations` stays valid for guide.
Recommendation: [B] is lower effort and better matches content. Page reads operationally throughout. Confirm before applying.
```

---

## Verdict Summary

**Verdict: NEEDS WORK**

**Checks failing (count: 20):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.7, 4.1, 4.7, 4.8, 5.1, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3

**Finding register:**

| ID | Category | Severity | Description |
|----|----------|----------|-------------|
| F-01 | 1.11 | HIGH | Description is 212 chars (>160) and contains em-dash. Proposed trim without em-dash: `Multi-node fleet patterns for Livepeer orchestrators at data-centre scale: multi-orchestrator setup, capacity management, rolling updates, fleet monitoring, and enterprise onboarding.` (181 chars — still over). Further trim: `Fleet patterns for Livepeer orchestrators at scale: multi-orchestrator setup, capacity management, rolling updates, and enterprise onboarding.` (142 chars) — confirm before applying |
| F-02 | 1.6 | HIGH | `complexity` absent. Proposed: `complexity: advanced` — confirm before applying |
| F-03 | 1.7 | HIGH | `lifecycleStage` absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| F-04 | 1.8 | HIGH | `veracityStatus` absent. Add `veracityStatus: unverified` |
| F-05 | 1.9 | HIGH | `industry` absent. Proposed: `industry: [technical, livepeer]` — confirm before applying |
| F-06 | 1.10 | HIGH | `niche` absent. Proposed: `niche: [infrastructure, hardware]` — confirm before applying |
| F-07 | 1.8 / 9.1 | HIGH | `status: published` inconsistent with absent veracityStatus. Change `status` to `draft` |
| F-08 | 2.4 | MEDIUM | Banned Construction Scan shows no confirmed `can [verb]` value claims. Check 2.4 result is FAIL only for em-dashes in body prose. Reclassification: em-dash findings (F-12, F-13, F-14) are the 2.4 items. Check 2.4 FAIL is tied to F-12/F-13/F-14 |
| F-09 | 3.1 / 3.7 | MEDIUM | "When you need fleet operations" scores 18/25. Proposed rename: `Fleet Decision Criteria` — confirm before applying |
| F-10 | 4.8 / 8.1 | HIGH | CardGroup cards "Split O-T Setup" (line 220) and "Siphon Setup" (line 223) both href `/v2/orchestrators/guides/deployment-details/siphon-setup`. Duplicate destination. Proposed fix: Remove the "Split O-T Setup" card and replace with `/v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` titled "Orchestrator-Transcoder Setup" — confirm before applying |
| F-11 | 6.5 | HIGH | No REVIEW flags on page. Multi-orchestrator key-per-node claim (line 56) and architecture description require verification. Add: `{/* REVIEW: verify multi-orchestrator keypair-sharing model against doc/multi-o.md in go-livepeer repo before publication. */}` adjacent to line 56. NOT-TESTED |
| F-12 | body / 2.4 | MEDIUM | Line 123: em-dash in body prose "no configuration change on the orchestrator required — proceed". Proposed: "No configuration change on the orchestrator is required; proceed to the next worker." — confirm before applying |
| F-13 | body / 2.4 | MEDIUM | Line 134: em-dash in body prose "no manual load balancing step — go-livepeer handles distribution internally". Proposed: "No manual load balancing step is required. go-livepeer handles distribution internally." — confirm before applying |
| F-14 | body / 2.4 | MEDIUM | Line 195: em-dash in body prose "only over encrypted channels, with restricted file permissions on each machine". Proposed: "Distribute it only over encrypted channels; restrict file permissions on each machine." — confirm before applying. Note: also removes "only" as implied minimiser (acceptable here as qualifier for security) |

**Priority order (dependent on BD-1):**
- BD-1 decision first (pageType/purpose migration)
- F-10 (duplicate card, HIGH) — independent of BD-1
- F-07 (status inconsistency, HIGH) — independent
- F-02 through F-06 (missing fields, HIGH) — independent
- F-11 (veracity flag, HIGH) — independent
- F-09 (heading rename, MEDIUM) — independent
- F-12, F-13, F-14 (em-dashes, MEDIUM) — independent
- F-01 (description trim, HIGH) — independent
