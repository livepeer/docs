# Per-Page Quality Check Report
## `v2/orchestrators/concepts/architecture.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Code (automated findings report)
**Generated-file-banner:** Not present — human-authored page. All checks apply.

---

## Verdict: NEEDS WORK

Six findings require resolution before this page ships. None require a rewrite. One CRITICAL (broken internal link), two HIGH (missing required frontmatter fields, deprecated `purpose` value), three MEDIUM (banned construction, heading score gaps, CSS hardcoded colours in Mermaid).

---

## Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|-------|---------|-------|-----------|------|
| `title` | Yes | `'Orchestrator Architecture'` | PASS | |
| `sidebarTitle` | Yes | `'Architecture'` | PASS | |
| `description` | Yes | `How Orchestrators fit into the Livepeer stack - layer position, internal components, request flow, GPU worker management, and protocol interactions.` | PASS | Subject-first, 148 chars, UK English. Hyphen separator acceptable. |
| `pageType` | Yes | `'concept'` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `'orchestrator'` | PASS | Valid 7-token value |
| `purpose` | Yes | `'concept'` | FAIL | `concept` is a deprecated alias. Canonical value is `explain`. Check 1.4. Fix: change to `purpose: 'explain'` |
| `complexity` | No | — | FAIL | Missing required field. Derived from content: `advanced` (covers internal architecture, dual-pipeline, protocol contracts, O-T split). Fix: add `complexity: 'advanced'` |
| `lifecycleStage` | No | — | FAIL | Missing required field. Content maps to pre-deployment conceptual grounding. Best fit: `evaluate`. Fix: add `lifecycleStage: 'evaluate'` |
| `keywords` | Yes | 12-item array | PASS | Includes `livepeer`, `orchestrator`, `go-livepeer`, `AIServiceRegistry`, `BondingManager`, etc. |
| OG image block | Yes | All 5 fields present | PASS | `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` |
| `veracityStatus` | No | — | FAIL | Missing required field. Page contains 2 open REVIEW flags (lines 208, 443). Per check 1.8: `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Page cannot be `verified`. Fix: add `veracityStatus: 'unverified'` until REVIEW flags are resolved. |
| `industry` | No | — | INFO | Not required but derivable. Suggested: `industry: ['technical', 'livepeer']` — primary vocabulary is engineering/systems; secondary is Livepeer-protocol-specific. |
| `niche` | No | — | INFO | Not required but derivable. Suggested: `niche: ['infrastructure', 'protocol']` — covers node deployment and Arbitrum smart contract interactions. |
| `status` | Yes | `'current'` | FAIL (conditional) | Cannot be `current` while `veracityStatus` is absent and REVIEW flags are open. Revise to `status: 'draft'` until verification completes. |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Date present but `veracityStatus` field is absent — inconsistent. |
| `pageVariant` | No | — | N/A | Not required. This page is not a section entry/overview page, so omission is correct. |

**Required-field summary:** 3 of 10 required fields missing (`complexity`, `lifecycleStage`, `veracityStatus`). Check 1.1 FAIL.

---

## Category 1 — Frontmatter & Taxonomy

| Check | Result | Notes |
|-------|--------|-------|
| 1.1 All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing |
| 1.2 `pageType` uses 7-type canonical schema | PASS | `concept` is valid |
| 1.3 `pageVariant` valid if present | N/A | Not present; correct for this page |
| 1.4 `purpose` uses 15-value canonical set | FAIL | `concept` is deprecated alias; canonical replacement: `explain` |
| 1.5 `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 `complexity` single canonical value | FAIL | Field absent |
| 1.7 `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 `veracityStatus` present and honest | FAIL | Field absent; page has 2 open REVIEW flags — must be `unverified` |
| 1.9 `industry` array valid if present | N/A | Not present; suggested value provided in frontmatter table |
| 1.10 `niche` array valid if present | N/A | Not present; suggested value provided in frontmatter table |
| 1.11 `description` well-formed | PASS | Subject-first, ≤160 chars, UK English |
| 1.12 OG image block complete | PASS | All 5 fields present |

---

## Category 2 — Voice & Copy

| Check | Result | Notes |
|-------|--------|-------|
| 2.1 UK English throughout | PASS | No US spellings detected |
| 2.2 Zero banned words | PASS | No hits for `effectively`, `essentially`, `basically`, `meaningful`, `significant` (as intensifier), `various`, `several`, `obviously`, `clearly` |
| 2.3 Zero banned phrases | PASS | None of the banned phrase list detected |
| 2.4 Zero banned constructions | FAIL | Line 58: `This page explains…` — banned construction. See banned construction scan. |
| 2.5 Opening order correct | FAIL (minor) | Line 58 opens with self-referential meta-description instead of subject content. Same root as 2.4. |
| 2.6 Paragraph discipline | PASS | Paragraphs lead with fact; no hedging closers found |
| 2.7 Audience register correct | PASS | Peer-technical register throughout; appropriate for `orchestrator` audience |
| 2.8 Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for", or other orchestrator-prohibited phrases found |
| 2.9 No passive value statements | PASS | No unquantified value claims found |
| 2.10 No hedging openers | FAIL (minor) | Same finding as 2.4/2.5 — self-referential opener at line 58 |
| 2.11 Terminology locked and consistent | PASS | Uses `pool worker`, `probabilistic micropayment tickets`, `O-T split`, `AI Runner`, `go-livepeer` consistently |

---

## Banned Construction Scan

| Line | Sentence | Word | Classification | Flag? |
|------|----------|------|----------------|-------|
| 58 | "This page explains where Orchestrators sit in the Livepeer stack…" | — | `self-reference` — banned construction 2.4 / 2.5 | YES |
| 165 | "May run in-process or as a separate `transcoder` process in an O-T split configuration." | `may` | `procedural` — describing configuration option, not a value claim | No |
| 207 | "confirm the current integration status with your setup guide" | — | Instructional; no modal verb flag | No |
| 384 | "This allows GPU workers to scale independently of the Orchestrator controller." | — | Factual statement; no modal verb | No |
| 414 | "Revenue distribution between pool operator and workers is managed off-chain or via pool software" | — | Factual description; no modal verb | No |

**Flagged constructions requiring fixes:**

**Line 58 — MEDIUM**
Self-referential opener: `This page explains where Orchestrators sit in the Livepeer stack, how they interact with Gateways and the protocol layer, how a job flows through the system, and the key internal components.`

Violates check 2.4 (`This page [verb]`) and 2.5 (value/outcome before mechanism). The introductory paragraph restates what the headings already communicate — per the review standard "Prose restating a table — delete it."

Fix: Delete line 58 entirely. Move the cross-reference navigation line (line 61) to immediately after the CustomDivider at line 63, before the H2. The H2 "Orchestrator Layer Context" (proposed rename: "Network Layer Position") opens the content directly.

Repositioned navigation line:

```
For what Orchestrators *do*, see <LinkArrow href="/v2/orchestrators/concepts/capabilities" label="Capabilities" newline={false} />. For why you would run one, see <LinkArrow href="/v2/orchestrators/concepts/incentive-model" label="Incentive Model" newline={false} />.
```

---

## Heading Score Table

H2 and H3 only. H1/title not scored.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass (≥20) |
|---------|-----------|-------|-----------|---------|-------------|-------|------------|
| H2: Orchestrator Layer Context (line 65) | 3 | 3 | 4 | 3 | 3 | **16** | FAIL |
| H2: Orchestrator Interactions (line 144) | 3 | 3 | 4 | 3 | 4 | **17** | FAIL |
| H3: Gateways (line 148) | 4 | 3 | 5 | 5 | 5 | **22** | PASS |
| H3: GPU Workers (line 161) | 4 | 3 | 5 | 4 | 5 | **21** | PASS |
| H3: Arbitrum Protocol (line 172) | 4 | 3 | 5 | 4 | 4 | **20** | PASS (borderline) |
| H2: Dual Pipeline Architecture (line 213) | 4 | 4 | 5 | 4 | 4 | **21** | PASS |
| H3: Video vs AI Pipelines (line 280) | 2 | 2 | 3 | 3 | 4 | **14** | FAIL |
| H2: Request Flow (line 326) | 4 | 3 | 5 | 4 | 5 | **21** | PASS |
| H3: Lifecycle Steps (line 354) | 3 | 3 | 4 | 3 | 4 | **17** | FAIL |
| H2: Setup Configurations (line 372) | 3 | 3 | 4 | 3 | 4 | **17** | FAIL |
| H2: Software Components (line 421) | 3 | 3 | 4 | 3 | 4 | **17** | FAIL |
| H3: go-livepeer (line 423) | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| H3: AI Runner (line 437) | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| H3: livepeer_cli (line 451) | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| H3: Arbitrum Contracts (line 460) | 4 | 3 | 5 | 4 | 5 | **21** | PASS |
| H2: Related Pages (line 466) | 2 | 1 | 3 | 3 | 4 | **13** | FAIL |

**7 of 16 headings fail the ≥20/25 threshold.**

### Remediation suggestions

**H2: Orchestrator Layer Context (16/25)**
Problem: "Layer Context" is a structure label describing the category of content, not the concept itself. Does not communicate what layer position means for the reader.
Fix: `## Network Layer Position`
Rationale: Names the exact concept (where Orchestrators sit in the stack), anchors to domain noun, survives content changes, interpretable in isolation.

**H2: Orchestrator Interactions (17/25)**
Problem: "Interactions" is generic — every component page involves interactions. Does not communicate what the three actor relationships are.
Fix: `## Actor Relationships`
Rationale: "Actor" is the domain noun; "Relationships" names the governing concept. Three H3s (Gateways, GPU Workers, Arbitrum Protocol) are the actors. Reader scanning headings builds correct mental model.

**H3: Video vs AI Pipelines (14/25)**
Problem: Violates check 3.3 directly — `X vs Y` heading. Checks.mdx §3: "No `X vs Y` headings — name the governing concept instead." Section is a comparison table; the governing concept is pipeline differentiation by workload type.
Fix: `### Pipeline Comparison`
Rationale: Names the governing concept, stable, no literal contrast labels, domain-anchored.

**H3: Lifecycle Steps (17/25)**
Problem: "Lifecycle Steps" describes the form of the content (an ordered list), not its substance (what the steps collectively achieve). Section covers the full job-execution sequence.
Fix: `### Job Execution Sequence`
Rationale: Names the exact concept, domain-anchored, survives content changes.

**H2: Setup Configurations (17/25)**
Problem: "Setup" is a generic prefix. The section describes physical deployment configurations — node arrangements.
Fix: `## Deployment Configurations`
Note: The CustomDivider at line 370 already uses `middleText="Deployment Configurations"` — the H2 text should match.

**H2: Software Components (17/25)**
Problem: "Software Components" is a generic container label. Does not communicate what the section contains.
Fix: `## Node Software Stack`
Rationale: "Node" anchors to domain; "Software Stack" communicates what the section delivers.

**H2: Related Pages (13/25)**
Problem: Generic section label with zero information value.
Fix: `## Next Steps`
Rationale: Standard footer navigation label consistent with tab-level pattern.

---

## Spelling/Typo Pass

No typos found. Technical terms (`go-livepeer`, `livepeer_cli`, `BondingManager`, `TicketBroker`, `ServiceRegistry`, `RoundsManager`, `AIServiceRegistry`, `NVENC`, `HLS`, `DASH`, `RTMP`, `BYOC`) are spelled consistently throughout.

One style note (not a typo): the TODO comment block at line 42 reads "Headers are concise and technical (aim for max 3 words)" — the heading rubric in checks.mdx states max 8 words. The TODO block is not published content and should be deleted regardless; the conflicting instruction is moot.

---

## Component Matrix

| Component | Used | Appropriate for `concept` | Notes |
|-----------|------|--------------------------|-------|
| `CustomDivider` | Yes | PASS | Section dividers; approved |
| `ScrollableDiagram` | Yes | PASS | Wraps Mermaid diagrams; appropriate for architecture visualisations |
| `StyledTable` / `TableRow` / `TableCell` | Yes | PASS | Preferred table component |
| `Tabs` / `Tab` | Yes | PASS | Preferred for concept pages per checks.mdx matrix |
| `Note` | Yes | PASS | Preferred component for concept pages |
| `LinkArrow` | Yes | PASS | Approved navigation element |
| `Card` / `CardGroup` | Yes | PASS | Preferred for concept pages |
| Mermaid diagrams (3 instances) | Yes | PASS | Appropriate for architecture pages |
| Inline `bash` code blocks | Yes | PASS | Appropriate for CLI configuration examples |
| `CenteredContainer` / `BorderedBox` | Imported but not used | INFO | Imported at line 54 but no instances found in body. Dead imports are out of scope for this run per reporting rules. |

**Preferred components for `concept` per checks.mdx:** `Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`. All used components are within the permitted set. No avoided components present.

**Check 5.8 — CSS hardcoded hex colours: FAIL (MEDIUM)**
All three Mermaid diagrams contain hardcoded hex colour values (`#1a1a1a`, `#0d0d0d`, `#2d9a67`, `#3b82f6`, `#a855f7`, `#fff`). Check 5.8 requires CSS custom properties only.

This is a known Mermaid constraint: `themeVariables` does not support CSS custom properties at render time. The TODO block at lines 35–48 acknowledges this: "Mermaid diagrams use theme colours (but must be hardcoded)." Classification deferred to blocking decision BD-1.

---

## Category 3 — Section Naming & Headings

| Check | Result | Notes |
|-------|--------|-------|
| 3.1 Every heading ≥20/25 | FAIL | 7 of 16 headings fail — see heading score table |
| 3.2 No generic descriptors as headings | FAIL | "Related Pages" (line 466) is a standalone generic label |
| 3.3 No literal contrast labels | FAIL | "Video vs AI Pipelines" (line 280) is a literal contrast label — violates check 3.3 directly |
| 3.4 Domain-anchor rule applied | PASS | Most headings include domain nouns |
| 3.5 Heading names the concept, not examples | PASS | No example-based headings found |
| 3.6 Title well-formed | PASS | "Orchestrator Architecture" — 2 words, concept-derived, no banned forms |
| 3.7 Sounds like an expert editorial choice | PARTIAL | High-scoring headings (go-livepeer, AI Runner, Dual Pipeline Architecture) pass. Low-scoring headings (Related Pages, Video vs AI) do not. |

---

## Category 4 — Page Structure & Content Architecture

| Check | Result | Notes |
|-------|--------|-------|
| 4.1 One purpose, one audience, one job | PASS | Single purpose: explain the Orchestrator's architectural position. Single audience: orchestrator. |
| 4.2 Purpose statement test | PASS | "This page lets the orchestrator understand how the node fits into the Livepeer stack and what happens to a job from receipt to payment." Passes. |
| 4.3 PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence: `role` → `architecture` → `capabilities` → `incentive-model`. Architecture is the natural second concept. Reader arriving from Role has context needed. |
| 4.4 No dead ends | FAIL (conditional) | Related Pages card at line 478 links to non-existent `payment-flow` — see BD-5 and CC-3 |
| 4.5 Prerequisites stated or linked | PASS | No formal prerequisites needed for a concept page; content is self-contained |
| 4.6 Out-of-scope is clear | PASS | Lines 61–62 explicitly route readers to Capabilities and Incentive Model for adjacent topics |
| 4.7 Information type per section correct | PASS | Conceptual, technical, procedural-reference, and structural information types all appropriate for `explain` purpose |
| 4.8 No content duplication from adjacent sections | PASS | No duplication with capabilities.mdx or incentive-model.mdx detected |
| 4.9 Section orientation page present | N/A — page-level check | |
| 4.10 Cross-tab links at journey intersections | PARTIAL | Page links to other Orchestrator concepts but has no link to the Gateway tab, which is the Orchestrator's primary counterpart. Consider adding `/v2/gateways/concepts/architecture` to Related Pages. |

---

## Category 5 — Layout, Components & Template

| Check | Result | Notes |
|-------|--------|-------|
| 5.1 Correct template for pageType | PASS | Concept page structure: context prose → diagrams → tables → related cards |
| 5.2 Required sections present | PASS | `concept` requires Overview — present |
| 5.3 Only approved components used | PASS | All components in permitted set for `concept` |
| 5.4 Avoided components absent | FAIL (LOW) | Lines 35–48: TODO comment block present in the published file. Not rendered but should be removed. Fix: delete lines 35–48. |
| 5.5 Information type → component mapping | PASS | Architecture diagrams use ScrollableDiagram; comparison uses StyledTable; multi-config uses Tabs; callout uses Note |
| 5.6 MDX renders clean | NOT-TESTED | No broken JSX detected by inspection but page not run through `npx mintlify dev` |
| 5.7 No old-schema frontmatter | FAIL | `purpose: 'concept'` is deprecated alias — see check 1.4 |
| 5.8 CSS uses custom properties only | FAIL (MEDIUM — pending BD-1) | Mermaid themeVariables use hardcoded hex; see BD-1 for exception ruling |
| 5.9 Generated file banners | N/A | Not a generated file |
| 5.10 Component naming/import conventions | PASS | PascalCase, correct import paths from `/snippets/components/` |

---

## Category 6 — Veracity & Factual Accuracy

| Check | Result | Notes |
|-------|--------|-------|
| 6.1 Every factual claim citable | PARTIAL | Most architectural claims consistent with go-livepeer documentation. Two open REVIEW flags. |
| 6.2 Code/commands tested | NOT-TESTED | Three CLI examples (lines 388, 402–405, 448) not tested. Risk: flags may have changed in current release. |
| 6.3 No deprecated API usage | NOT-TESTED | `-aiServiceRegistry`, `-aiWorker`, `-aiModels`, `-aiModelsDir`, `-orchAddr` require verification against current go-livepeer release — see BD-4 |
| 6.4 Numbers are real | PASS (partial) | Port 7935 (Prometheus default) is a known correct value. No VRAM/earnings/percentage claims on this page. |
| 6.5 REVIEW flags for unverified claims | PASS | Two REVIEW flags correctly placed: line 208 (AIServiceRegistry controller status) and line 443 (AI Runner container lifecycle) |
| 6.6 `veracityStatus` honest | FAIL | Field absent; must be added as `unverified` while REVIEW flags remain open |
| 6.7 Authoritative vs AI-generated glossary | N/A | No glossary links |
| 6.8 Source staleness check | FAIL | CLI flags and contract address are high-staleness-risk content. AIServiceRegistry address `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5` (line 204) requires on-chain verification. NOT-TESTED. |
| 6.9 No open-ended research tasks | FAIL | Line 208 REVIEW tag names "Mehrdad" but has no concrete next step or ticket. Line 443 REVIEW tag names "j0sh" but has no concrete next step. Both need an actionable next step added. |

---

## Category 7 — Navigation & Information Architecture

| Check | Result | Notes |
|-------|--------|-------|
| 7.1 Page exists in docs.json | PASS | `v2/orchestrators/concepts/architecture` confirmed at docs.json line 2843 |
| 7.2 Navigation matches file system | PASS | File exists at correct path; docs.json entry matches |
| 7.3 Tab entry portal routes to all sections | N/A — tab-level check | |
| 7.4 No structural orphans | PASS | Page reachable via concepts section navigation |
| 7.5 Audience journey complete | PASS | Correct sequence within Concepts section |
| 7.6 Cross-tab graduation paths exist | PARTIAL | No explicit cross-tab link to Gateway architecture. See check 4.10. |
| 7.7 File in correct lane | PASS | Publishable file in `v2/orchestrators/concepts/` |
| 7.8 File naming conventions | PASS | `architecture.mdx` — no incorrect prefix or `-index` suffix |
| 7.9 `_workspace/` TTL compliance | N/A | Not a workspace file |

---

## Category 8 — Links & Rendering

| Check | Result | Notes |
|-------|--------|-------|
| 8.1 All internal links resolve | FAIL (CRITICAL) | Two broken links — see link verification table |
| 8.2 All external links live | NOT-TESTED | `https://github.com/livepeer/go-livepeer` (line 435) not verified live |
| 8.3 All snippet imports resolve | NOT-TESTED | Standard component imports; not run through build |
| 8.4 All images load | N/A | No direct image elements |
| 8.5 Page renders without error | NOT-TESTED | Not run through `npx mintlify dev` |
| 8.6 No TODO/TBD/Coming Soon in published content | FAIL (LOW) | Lines 35–48: TODO comment block. Not rendered; same finding as 5.4. |

### Link Verification Table

| Link href | Linked text | In docs.json | On disk | Status |
|-----------|-------------|-------------|---------|--------|
| `/v2/orchestrators/concepts/capabilities` (line 61) | Capabilities | Yes (docs.json line 2842) | Yes | PASS |
| `/v2/orchestrators/concepts/incentive-model` (line 61) | Incentive Model | Yes (docs.json line 2844) | Yes | PASS |
| `/v2/orchestrators/resources/technical/contract-addresses` (line 462) | Contract Addresses | FAIL | File is `x-contract-addresses.mdx`; docs.json entry is `v2/orchestrators/resources/technical/x-contract-addresses` (line 2978) | CRITICAL |
| `/v2/orchestrators/concepts/role` (line 469) | Orchestrator Role | Yes (docs.json line 2841) | Yes | PASS |
| `/v2/orchestrators/concepts/capabilities` (line 472) | Orchestrator Capabilities | Yes (docs.json line 2842) | Yes | PASS |
| `/v2/orchestrators/concepts/incentive-model` (line 475) | Incentive Model | Yes (docs.json line 2844) | Yes | PASS |
| `/v2/orchestrators/guides/payments-and-pricing/payment-flow` (line 478) | Payment Flow | FAIL | Does not exist on disk or in docs.json | CRITICAL |

**Two broken internal links:**

**Link 1 — Line 462 — CRITICAL**
`href="/v2/orchestrators/resources/technical/contract-addresses"` — path not in docs.json.
docs.json entry: `v2/orchestrators/resources/technical/x-contract-addresses`
Fix: change href to `/v2/orchestrators/resources/technical/x-contract-addresses`

**Link 2 — Line 478 — CRITICAL**
`href="/v2/orchestrators/guides/payments-and-pricing/payment-flow"` — path does not exist on disk or in docs.json.
docs.json payments section contains only `payment-receipts` and `payments` (docs.json lines 2913–2914).
Fix options (requires human decision — see BD-5):
- Option A: Change href to `/v2/orchestrators/guides/payments-and-pricing/payments`, update label to `Payments`.
- Option B: Create `payment-flow.mdx` as a planned stub; hold the card until it exists.

---

## Category 9 — Process & Governance

| Check | Result | Notes |
|-------|--------|-------|
| 9.1 Human sign-off recorded | NOT-TESTED | Cannot verify from repo files |
| 9.2 All consuming decisions in registry | NOT-TESTED | Not verified against decision registry |
| 9.3 Gate prerequisites met | FAIL | Orchestrators tab has no open content-pass gate and no IA approval. Page is in pre-gate state. |
| 9.4 Phase ordering respected | INFO | Phase 7 (veracity) is in progress. Phase 8 (naming) should run before Phase 7. Heading failures found here may generate new REVIEW markers that become orphaned after naming changes. Heading renames should run first. |
| 9.5 Findings gathered before fixes | N/A | This is the findings report |
| 9.6 Feedback routed | N/A | Pending execution |

---

## Cross-Category Connections

```
Root Cause CC-1: Self-referential opener (line 58)
Affects: Cat 2.4 (banned construction) + Cat 2.5 (opening order)
Fix: Delete lines 58–59. Move line 61 (cross-reference navigation) to immediately
after the CustomDivider at line 63.
```

```
Root Cause CC-2: Missing veracityStatus + open REVIEW flags
Affects: Cat 1.8 (veracityStatus absent) + Cat 6.6 (veracityStatus dishonest)
+ Cat 9.3 (gate not met)
Fix: Add `veracityStatus: 'unverified'` to frontmatter. Resolve REVIEW flags
(lines 208, 443) via SME input before changing to `verified`.
```

```
Root Cause CC-3: Broken payment-flow link
Affects: Cat 8.1 (link resolves) + Cat 4.4 (no dead ends)
Fix: See link verification table — Option A or B requires human decision (BD-5).
```

```
Root Cause CC-4: Deprecated purpose alias
Affects: Cat 1.4 (purpose value) + Cat 5.7 (no old-schema frontmatter)
Fix: Change `purpose: 'concept'` to `purpose: 'explain'`
```

---

## Blocking Decisions

**BD-1: Mermaid hardcoded hex colours**
All three Mermaid diagrams use hardcoded hex values in `themeVariables`. Check 5.8 requires CSS custom properties only. The TODO comment block (lines 35–48) acknowledges "Mermaid diagrams use theme colours (but must be hardcoded)" — suggesting the author treated this as a known exception.
Decision needed: Is hardcoded hex in Mermaid `themeVariables` an approved exception to check 5.8? If yes, this finding closes as N/A. If no, the check 5.8 FAIL stands.
Information needed: Confirmation from Alison or design authority that Mermaid hex is an approved exception.

**BD-2: AIServiceRegistry detached-from-controller status (line 208)**
The Note at lines 203–209 states the AIServiceRegistry contract is "currently detached from the main protocol controller." This is a significant architectural claim affecting how operators configure AI subnet registration.
Decision needed: Is this claim current? Has the AIServiceRegistry been integrated into the main protocol controller?
Information needed: Mehrdad to confirm current integration status.

**BD-3: AI Runner container warm-up behaviour (line 443)**
Section states "Containers are started on demand and kept warm while work is flowing." Directly affects operator capacity planning and latency expectations.
Decision needed: Is the warm-up description accurate? What is the actual container lifecycle policy?
Information needed: j0sh to confirm.

**BD-4: CLI flags currency (lines 388, 402–405, 445–448)**
NOT-TESTED. Three code blocks contain `livepeer` CLI flags: `-orchestrator`, `-transcoder`, `-datadir`, `-orchAddr`, `-aiModels`, `-aiWorker`, `-aiModelsDir`. Require verification against current go-livepeer release.
Decision needed: Are these flags current?
Information needed: Run `livepeer --help` against current binary, or cross-check against `v2/orchestrators/resources/technical/cli-flags`. Concrete next step: assign to a verifier with access to the current binary.

**BD-5: payment-flow card — create or redirect (line 478)**
The Related Pages card links to `/v2/orchestrators/guides/payments-and-pricing/payment-flow` which does not exist on disk or in docs.json.
Decision needed: Option A (redirect to `payments.mdx`) or Option B (create `payment-flow.mdx` stub before this page ships)?
Options:
- A: href → `/v2/orchestrators/guides/payments-and-pricing/payments`, label → `Payments`
- B: Create stub `payment-flow.mdx`; hold card until it exists

---

## Self-Consistency Review

Checked for internal contradictions:

1. Check 5.4 and check 8.6 flag the same TODO comment block — consolidated into single finding, cross-referenced. No duplication.
2. `status: 'current'` marked FAIL (conditional) — the finding correctly notes it depends on resolving veracityStatus, not a standalone failure. Consistent with check 1.8.
3. Check 4.10 and check 7.6 surface the same cross-tab gap — noted once in CC connections. No contradiction.
4. BD-1 (Mermaid hex) is logged as FAIL under check 5.8 but classified as a blocking decision because the TODO comment suggests a prior exception ruling. The finding is not self-resolved — it is escalated. No contradiction.
5. "Arbitrum Protocol" H3 scored 20/25 as PASS (borderline). Scores are consistent with rubric dimensions applied. No contradiction.
6. H3 "go-livepeer", "AI Runner", "livepeer_cli" score 24/25 despite being product/tool names rather than concept labels. These score high because they satisfy Precision, Depth, Stability, Clarity, and Conciseness fully as direct component identifiers — they are the exact names of the things being described. No contradiction.

---

## Summary — Findings by Severity

| Severity | Count | Items |
|----------|-------|-------|
| CRITICAL | 2 | Broken link: `contract-addresses` → should be `x-contract-addresses` (line 462); broken link: `payment-flow` does not exist (line 478) |
| HIGH | 4 | Missing `complexity`; missing `lifecycleStage`; missing `veracityStatus`; deprecated `purpose` alias |
| MEDIUM | 4 | 7 headings below 20/25; self-referential opener line 58; `Video vs AI Pipelines` contrast label; hardcoded Mermaid hex (pending BD-1) |
| LOW | 1 | TODO comment block lines 35–48 in published file |
| INFO | 3 | `industry`/`niche` suggestions; `lastVerified` inconsistency; no cross-tab link to Gateway architecture |

### Fixes executable without human input

1. `purpose: 'concept'` → `purpose: 'explain'`
2. Add `complexity: 'advanced'`
3. Add `lifecycleStage: 'evaluate'`
4. Add `veracityStatus: 'unverified'`
5. Change `status: 'current'` → `status: 'draft'`
6. Fix href line 462: `/contract-addresses` → `/x-contract-addresses`
7. Delete self-referential opener lines 58–59; reposition line 61 after CustomDivider at line 63
8. Delete TODO comment block lines 35–48
9. Rename H2 `Setup Configurations` → `Deployment Configurations` (matches CustomDivider text already in use)
10. Rename H2 `Related Pages` → `Next Steps`
11. Rename H3 `Video vs AI Pipelines` → `Pipeline Comparison`
12. Rename H2 `Orchestrator Layer Context` → `Network Layer Position`
13. Rename H2 `Orchestrator Interactions` → `Actor Relationships`
14. Rename H3 `Lifecycle Steps` → `Job Execution Sequence`
15. Rename H2 `Software Components` → `Node Software Stack`

### Fixes requiring human decision

- BD-1: Mermaid hex exception ruling
- BD-2: AIServiceRegistry controller status (Mehrdad)
- BD-3: AI Runner container lifecycle (j0sh)
- BD-4: CLI flag currency verification (current binary)
- BD-5: payment-flow card — create or redirect
