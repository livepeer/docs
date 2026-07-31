# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Expected | Pass/Fail |
|---|---|---|---|---|
| `title` | Yes | `'Join a Pool'` | Non-empty string | PASS |
| `sidebarTitle` | Yes | `'Join a Pool'` | Non-empty string | PASS |
| `description` | Yes | `How to contribute GPU compute to an existing Livepeer Orchestrator pool - what pools are, how to evaluate one, how to connect as a worker, and what to expect from payouts.` | ≤160 chars, subject-first, no self-ref, UK English | FAIL — 174 chars (exceeds 160 limit per check 1.11). Also contains ` - ` (space-hyphen-space) used as sentence separator. |
| `pageType` | Yes | `guide` | 7-type canonical schema | PASS — `guide` is canonical (P50) |
| `audience` | Yes | `orchestrator` | 7-token set | PASS |
| `purpose` | Yes | `guide` | 15-value canonical set | FAIL — `guide` is a valid pageType but not a valid purpose value. Error type (P37-b): pageType value placed in purpose field. Canonical fix: `purpose: start` (reader goes from zero to working pool-worker state) or `purpose: configure` — confirm before applying (P51) |
| `complexity` | Absent | — | `beginner` / `intermediate` / `advanced` | FAIL |
| `lifecycleStage` | Absent | — | one of 7 values | FAIL |
| `keywords` | Yes | 10 keywords listed | Specific, searcher-intent-aligned | FAIL — `video mining` and `passive income` are not domain-canonical terms; `titan node` is too specific for a general page; `GPU earnings` is vague. Better candidates: `join livepeer pool`, `livepeer pool worker setup`, `pool worker transcoding`, `earn without staking` |
| OG image block | Yes | All 5 fields present | All 5 OG fields + correct path | PASS |
| `veracityStatus` | Absent | — | `verified` / `unverified` / `stale` | FAIL |
| `industry` | Absent | — | Required (P41) | FAIL — Proposed: `industry: ["technical", "economics"]` — confirm before applying |
| `niche` | Absent | — | Required (P41) | FAIL — Proposed: `niche: ["infrastructure", "web3"]` — confirm before applying |
| `status` | Yes | `current` | Informational | FAIL — `status: current` requires `veracityStatus: verified` AND zero REVIEW flags (check 1.8, P39). Page has `status: current` but no `veracityStatus`. |
| `pageVariant` | Absent | — | N/A — pageType is not deprecated | N/A — no co-fix required (P42) |

**Frontmatter summary:** 8 fields fail. purpose wrong type, description too long, complexity absent, lifecycleStage absent, veracityStatus absent (incoherent with status: current), industry absent, niche absent, keywords weak.

---

## Category 1: Frontmatter & Taxonomy

| Check | Result | Detail |
|---|---|---|
| 1.1 Required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing |
| 1.2 pageType 7-type canonical | PASS | `guide` is canonical (P50) |
| 1.3 pageVariant valid if present | N/A — not present, no migration needed |
| 1.4 purpose 15-value canonical | FAIL | `guide` is a pageType value in a purpose field (P37-b: wrong field value). Proposed: `purpose: start` — confirm before applying (P51) |
| 1.5 audience 7-token | PASS | `orchestrator` is canonical |
| 1.6 complexity present | FAIL | Missing. Proposed: `complexity: beginner` — confirm before applying (P51) |
| 1.7 lifecycleStage present | FAIL | Missing. Proposed: `lifecycleStage: evaluate` or `lifecycleStage: setup` — confirm before applying (P51) |
| 1.8 veracityStatus present and honest | FAIL | Missing. `status: current` with no `veracityStatus: verified` is incoherent per checks.mdx §1.8. Valid options: (a) add `veracityStatus: verified` only if content is fully verified, (b) change `status` to `draft` and add `veracityStatus: unverified`. Page contains a TODO block with verify items. Proposed: `status: draft`, `veracityStatus: unverified` pending verification (P39). |
| 1.9 industry valid | FAIL | Absent. Required (P41). Proposed: `industry: ["technical", "economics"]` — confirm before applying |
| 1.10 niche valid | FAIL | Absent. Required (P41). Proposed: `niche: ["infrastructure", "web3"]` — confirm before applying |
| 1.11 description well-formed | FAIL | 174 chars — exceeds 160 limit. Proposed: `Contribute GPU compute to a Livepeer Orchestrator pool — how pools work, how to evaluate one, how to connect, and what to expect from payouts.` (139 chars) — confirm before applying (P51) |
| 1.12 OG image block complete | PASS | All 5 fields present |
| 1.13 keywords quality | FAIL | `video mining` and `passive income` are not canonical Livepeer terminology. `titan node` is too specific. Proposed stronger keywords: `join livepeer pool`, `livepeer pool worker setup`, `pool worker transcoding`, `GPU earnings livepeer` — confirm before applying |

**Category 1 verdict:** 9 FAIL (1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13)

---

## Category 2: Voice & Copy

| Check | Result | Detail |
|---|---|---|
| 2.1 UK English | PASS | Scan: `monetise` used correctly (line 49). No US spellings detected: `summarize/summarise` — absent; `organize/organise` — absent; `behavior/behaviour` — absent. All clean. |
| 2.2 Banned words | PASS | Scan: `effectively` — absent; `essentially` — absent; `basically` — absent; `meaningful` — absent; `significant` — absent; `real` (intensifier) — absent; `various` — absent; `several` — absent; `obviously` — absent; `clearly` — absent. All clean. |
| 2.3 Banned phrases | PASS | Scan for all listed banned phrases: `This section covers` — absent; `This page covers` — absent; `rather than` — absent; `etc.` — absent; `and so on` — absent; `Understanding X is essential` — absent. All clean. |
| 2.4 Banned constructions | FAIL | (1) Line 44–48: "A pool lets GPU compute contribute to the Livepeer network **without** running a full Orchestrator." — `without [X]` pattern. Value is defined by exclusion. BORDERLINE — not a primary value statement using `not [X]` directly, but value framed through negative exclusion. Request human review (P23). (2) Scanning `can/may` occurrences: no `can [verb]` in value claims found. PASS. |
| 2.5 Opening order | PASS | Opens with value definition: "A pool lets GPU compute contribute to the Livepeer network without running a full Orchestrator." Reader benefit before mechanism. |
| 2.6 Paragraph discipline | PASS | Paragraphs are single-topic. Accordion content is appropriately scoped. |
| 2.7 Audience register | PASS | Hardware-specific framing, practical tone, no hand-holding. Pool worker context is appropriately operational. |
| 2.8 Prohibited phrases | PASS | `easy to set up` — absent; `the network rewards you for` — absent. PASS. |
| 2.9 No passive value statements | PASS | "This is the lowest-barrier entry point" is concrete and comparative. Earnings framed via mechanism (off-chain payouts by pool operator). |
| 2.10 No hedging openers | PASS | No caveat or disclaimer opener. |
| 2.11 Terminology locked | FAIL | `pool worker` used at line 44 and throughout, but not explicitly defined at first use in body prose — the Note on line 51 does not define `pool worker`. First prose use at line 44 is implicit in context. `pool worker` needs definition at first use per CLAUDE.md domain terms table. |

**Category 2 verdict:** 2 FAIL (2.4 BORDERLINE, 2.11)

---

## Category 3: Section Naming & Headings

**Note:** `Related Pages` heading is excluded from scoring per P16.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Pool Architecture` | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| `Pool Worker vs Solo Orchestrator` | 4 | 4 | 4 | 5 | 3 | 20 | PASS |
| `Step 1: Choose a Pool` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Evaluating a pool before joining` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Step 2: Connect Your GPU` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Option A: Docker worker (recommended)` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Option B: go-livepeer transcoder mode` | 4 | 4 | 4 | 4 | 3 | 19 | FAIL |
| `Option C: Cloud GPU` | 4 | 3 | 4 | 4 | 4 | 19 | FAIL |
| `Step 3: Verify Work Is Arriving` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Step 4: Track Your Earnings` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Frequently Asked Questions` | 2 | 1 | 3 | 3 | 3 | 12 | FAIL |
| `Related Pages` | EXEMPT | — | — | — | — | — | EXEMPT |

| Check | Result | Detail |
|---|---|---|
| 3.1 All headings ≥20/25 | FAIL | 9 headings below threshold: `Step 1`, `Evaluating a pool before joining`, `Step 2`, `Option A`, `Option B`, `Option C`, `Step 3`, `Step 4`, `Frequently Asked Questions` (12). See F-03 through F-11. |
| 3.2 No banned/weak terms | FAIL | `Frequently Asked Questions` — scores 12/25. Not in explicit banned list but is a generic safe label. `Step 1:`, `Step 2:` etc. are procedural labels — not banned but reduce heading quality. |
| 3.3 No literal contrast labels | PASS | `Pool Worker vs Solo Orchestrator` is a comparison heading naming the governance concept (comparison table). BORDERLINE — heading uses literal `vs`. Request human review (P23). |
| 3.4 Domain-anchor rule | FAIL | `Step 1: Choose a Pool` — "a Pool" is generic. `Evaluating a pool before joining` — no domain anchor indicating what kind of pool. Acceptable in context of this page but borderline for isolation. |
| 3.5 Heading names concept, not examples | PASS | `Option A: Docker worker` names the method. `Option C: Cloud GPU` names the deployment class. |
| 3.6 Title well-formed | PASS | `Join a Pool` — clear, concept-derived, 3 words. |
| 3.7 Expert editorial | FAIL | `Step 1: Choose a Pool`, `Frequently Asked Questions` are generic labels, not expert editorial choices. |

**Category 3 verdict:** 4 FAIL (3.1, 3.2, 3.4, 3.7)

---

## Category 4: Page Structure & Content Architecture

| Check | Result | Detail |
|---|---|---|
| 4.1 One purpose, one audience, one job | PASS | Single audience (orchestrator wanting to join a pool), single job: join and operate as a pool worker. |
| 4.2 Purpose statement test | PASS | "This page lets an orchestrator connect GPU compute to an existing pool operator and start earning." Clear. |
| 4.3 PREV_PAGE / NEXT_PAGE adjacency | FAIL | docs.json sequence (lines 2883–2891): `setup-options` → `siphon-setup` → `dual-mode-configuration` → `orchestrator-transcoder-setup` → `join-a-pool` → **`new-join-a-pool`**. Both `join-a-pool` (line 2889) and `new-join-a-pool` (line 2890) appear as consecutive pages with the same title in the sidebar. This is a structural problem: duplicate navigation items with identical titles. `new-join-a-pool` is the canonical version per session log (2026-03-24). See BD-1. |
| 4.4 No dead ends | PASS | Related Pages links to Setup Options, Solo Setup Guide, Operating Rationale, Community Pools. Clear exits. |
| 4.5 Prerequisites stated or linked | FAIL | Page does not state hardware prerequisites explicitly. The comparison table references GPU hardware implicitly. Minimum VRAM, OS, and network requirements are not stated for pool workers. |
| 4.6 Out-of-scope clear | PASS | Page explicitly scopes to pool workers, not solo operators. Comparison table makes the distinction clear. |
| 4.7 Information type per section correct | PASS | With `purpose: start` (proposed fix), permitted types are `procedural`, `factual`. Pool Architecture (factual/structural), comparison table (evaluative — permitted as secondary), Steps (procedural), FAQ (factual). Aligned. |
| 4.8 No content duplication | PASS | Content is specific to pool-worker path. Setup Options page has a brief pool-worker row; this page provides the full detail. No verbatim duplication. |
| 4.9 Section orientation page | N/A |
| 4.10 Cross-tab links | N/A |

**Category 4 verdict:** 2 FAIL (4.3 structural duplicate issue, 4.5)

---

## Category 5: Layout, Components & Template

| Check | Result | Detail |
|---|---|---|
| 5.1 Correct template for pageType | PASS | `guide` template: Overview + Steps or H2 sections. Page has Pool Architecture (overview), comparison table, Step 1–4 sections, FAQ, Related Pages. Matches guide template. |
| 5.2 Required sections present | PASS | Overview section present (Pool Architecture), step-by-step sections present, Related Pages present. |
| 5.3 Approved components only | NOT-TESTED | `AccordionGroup`, `Accordion`, `CardGroup`, `Card`, `StyledTable`, `CustomDivider`, `LinkArrow`, `Warning`, `Note` used. Component approval file not read (P22). |
| 5.4 Avoided components absent | FAIL | `{/* TODO: Verify: ... */}` block at lines 31–36 is a TODO in MDX comment. Not rendered. However, `status: current` with an unresolved TODO block is incoherent. See F-17. |
| 5.5 Information type → component mapping | PASS | Steps → H2 sections with ordered content. Accordion for FAQ (reference/factual). |
| 5.6 MDX renders clean | PASS | All imports used. JSX is well-formed. AccordionGroup, Accordion, CardGroup, Card all properly structured. |
| 5.7 No old-schema frontmatter | FAIL | `purpose: guide` is a pageType value in the purpose field — wrong field usage (P37-b). |
| 5.8 CSS custom properties | N/A — no inline styles or hex colours detected |
| 5.9 Generated file banner | N/A |
| 5.10 Component naming/import conventions | PASS | All imports PascalCase, used, no dead imports. |

**Category 5 verdict:** 2 FAIL (5.4, 5.7)

---

## Category 6: Veracity & Factual Accuracy

| Check | Result | Detail |
|---|---|---|
| 6.1 Every factual claim citable | FAIL | (1) "Titan Node operates the most visible one" (line 139) — evaluative claim. NOT-TESTED against any external source. (2) "Most pools pay weekly or monthly" (line 173) — factual claim about community norms. NOT-TESTED. (3) "AI inference via the AI subnet requires capability registration tied to the Orchestrator node. As of early 2026, publicly documented pools primarily handle video transcoding." — temporal claim. NOT-TESTED. (4) "Running AI inference workloads and earning from them currently requires a solo Orchestrator path." — factual/status claim. NOT-TESTED. |
| 6.2 Code/commands tested | FAIL | `livepeer -transcoder -orchAddr <pool-orchestrator-address>:8935 -nvidia 0 -maxSessions 10` — NOT-TESTED against live system. `git clone https://github.com/Titan-Node/Titan-Node-Pool.git` / `docker compose up -d` — NOT-TESTED. |
| 6.3 No deprecated API usage | NOT-TESTED | `-transcoder`, `-orchAddr`, `-nvidia`, `-maxSessions` flags — NOT-TESTED against current go-livepeer release. |
| 6.4 Numbers are real | FAIL | `port 8935` at line 268 — listed as required from pool Orchestrator to worker. NOT-TESTED against go-livepeer docs. `-maxSessions 10` — illustrative value, no source. |
| 6.5 REVIEW flags for unverified claims | FAIL | TODO block requests verification of formatting only. Substantive factual claims (Titan Node status, AI pool availability) have no REVIEW flags. |
| 6.6 veracityStatus honest | FAIL | Missing. `status: current` + no `veracityStatus: verified` violates §1.8. Content has unverified procedural claims. Fix: `status: draft`, `veracityStatus: unverified` (P39). |
| 6.7 Authoritative vs AI-generated glossary | PASS | No glossary references. |
| 6.8 Source staleness | FAIL | `https://github.com/Titan-Node/Titan-Node-Pool` and `app.titan-node.com` — third-party community resources with no Livepeer control. High staleness risk. The claim "Titan Node operates the most visible one" is contingent on the community pool landscape as of writing. |
| 6.9 No open-ended research tasks | FAIL | "Check Discord for any AI-focused pools that have launched" (Accordion, AI inference pools) — open-ended research task delegated to the reader without a resolution path. AI pool availability claim has no named source. |

**Category 6 verdict:** 7 FAIL (6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9), 1 NOT-TESTED (6.3)

---

## Category 7: Navigation & Information Architecture

| Check | Result | Detail |
|---|---|---|
| 7.1 Page in docs.json | PASS | `v2/orchestrators/guides/deployment-details/new-join-a-pool` present at docs.json line 2890. |
| 7.2 Navigation matches file system | PASS | File exists at declared path. |
| 7.3 Tab entry portal | N/A |
| 7.4 No structural orphans | FAIL | Both `join-a-pool` (line 2889) and `new-join-a-pool` (line 2890) appear in docs.json. Both render in the sidebar as separate navigation items with the same title "Join a Pool". Per session log (2026-03-24): `new-join-a-pool` is canonical; `join-a-pool` (2/10 score) should be deprecated. The old `join-a-pool.mdx` must be removed from docs.json and moved to `x-deprecated/`. See BD-1. |
| 7.5 Audience journey complete | PASS | Entry from setup-options or community-pools, complete steps through connect and verify, exits to solo setup or rationale. |
| 7.6 Cross-tab graduation paths | PASS | `community-pools` resource links to external community resources. Pool-to-solo graduation path via Related Pages links. |
| 7.7 File in correct lane | PASS | In `v2/orchestrators/guides/deployment-details/`. |
| 7.8 File naming conventions | FAIL | `new-join-a-pool.mdx` — `new-` prefix is not a valid naming convention prefix per check 7.8 (valid prefixes: `s-`, `r-`, `rs-`, `rcs-`, `x-`, `dep-`). The `new-` prefix is a temporary disambiguation from the legacy file. File should be renamed to `join-a-pool.mdx` once the old file is deprecated. See BD-1. |
| 7.9 _workspace/ TTL | N/A |

**Category 7 verdict:** 2 FAIL (7.4, 7.8)

---

## Category 8: Links & Rendering

| Check | Result | Detail |
|---|---|---|
| 8.1 Internal links resolve | PASS | (1) `/v2/orchestrators/guides/deployment-details/setup-options` — PRESENT docs.json line 2885. PASS. (2) `/v2/orchestrators/setup/guide` — PRESENT docs.json (confirmed). PASS. (3) `/v2/orchestrators/guides/operator-considerations/operator-rationale` — PRESENT docs.json line 2876. PASS. (4) `/v2/orchestrators/resources/community-pools` — PRESENT docs.json line 2972. PASS. All internal links verified. |
| 8.2 External links live | NOT-TESTED | `https://github.com/Titan-Node/Titan-Node-Pool`, `https://github.com/Titan-Node/Titan-Node-Pool/tree/main/docker`, `https://discord.gg/livepeer`, `app.titan-node.com` — NOT-TESTED. |
| 8.3 Snippet imports resolve | PASS | `Links.jsx`, `Tables.jsx`, `Divider.jsx` — standard paths. |
| 8.4 Images load | N/A — no inline images |
| 8.5 Renders without error | PASS | JSX well-formed. Accordion/AccordionGroup, CardGroup/Card properly closed. |
| 8.6 No TODO/TBD in published content | PASS | `{/* TODO: Verify: ... */}` block at lines 31–36 is in MDX comment — not rendered. Status/veracity incoherence logged in F-17. |

**Category 8 verdict:** 0 FAIL, 1 NOT-TESTED (8.2)

---

## Category 9: Process & Governance

| Check | Result | Detail |
|---|---|---|
| 9.1 Human sign-off | FAIL | No sign-off evidence. `status: current` but veracityStatus absent. |
| 9.2 Consuming decisions in registry | NOT-TESTED |
| 9.3 Gate prerequisites met | FAIL | Tab pre-IA-approval. |
| 9.4 Phase ordering | NOT-TESTED |
| 9.5 Findings before fixes | PASS |
| 9.6 Feedback routed | N/A |

**Category 9 verdict:** 2 FAIL (9.1, 9.3)

---

## Banned Construction Scan

| Location | Text | Type | Classification | Canonical Fix |
|---|---|---|---|---|
| Lines 44–48 | "A pool lets GPU compute contribute…**without** running a full Orchestrator." | `without [X]` / value-by-exclusion | BORDERLINE — value framed through exclusion. Not a direct `not [X]` in a value statement but close. Request human review (P23). | Proposed: "A pool lets GPU compute contribute to the Livepeer network. The pool operator handles staking, registration, and protocol operations." |
| Line 52–53 | "Pools are community-run and each pool operates independently. **Vet any pool carefully** before connecting hardware." | Imperative + conditional preamble | PASS — appropriate caution for a Note; not a banned construction. |
| Scanning `can/may`: Line 163: "others pay proportionally to GPU time contributed" — PASS. Line 166: "some pools issue a native token that is exchangeable for ETH **or worth holding**" — `or worth holding` is a passive value hedge. BORDERLINE. | | | | Proposed: "some pools issue a native token exchangeable for ETH." (remove vague secondary claim) |

---

## Heading Score Table (Full Breakdown)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Pool Architecture` | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| `Pool Worker vs Solo Orchestrator` | 4 | 4 | 4 | 5 | 3 | 20 | PASS |
| `Step 1: Choose a Pool` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Evaluating a pool before joining` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Step 2: Connect Your GPU` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Option A: Docker worker (recommended)` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Option B: go-livepeer transcoder mode` | 4 | 4 | 4 | 4 | 3 | 19 | FAIL |
| `Option C: Cloud GPU` | 4 | 3 | 4 | 4 | 4 | 19 | FAIL |
| `Step 3: Verify Work Is Arriving` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Step 4: Track Your Earnings` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Frequently Asked Questions` | 2 | 1 | 3 | 3 | 3 | 12 | FAIL |
| `Related Pages` | EXEMPT | — | — | — | — | — | EXEMPT |

**Rename proposals (validated against check 3.2 prohibited list — P18):**

- `Step 1: Choose a Pool` → `Pool Selection` (not in prohibited list; concise, domain-anchored)
- `Evaluating a pool before joining` → `Pool Evaluation Criteria` (not prohibited; adds domain anchor, removes gerund opener)
- `Step 2: Connect Your GPU` → `Worker Connection` (not prohibited; concise)
- `Option A: Docker worker (recommended)` → `Docker Worker Setup` (not prohibited; removes qualifier)
- `Option B: go-livepeer transcoder mode` → `Native go-livepeer Worker` (not prohibited; more concise)
- `Option C: Cloud GPU` → `Cloud Worker Setup` (not prohibited; consistent pattern with others)
- `Step 3: Verify Work Is Arriving` → `Verify Work Arrival` (not prohibited; removes "Is Arriving" padding; scores 21)
- `Step 4: Track Your Earnings` → `Track Earnings` (not prohibited; removes "Your"; scores 21)
- `Frequently Asked Questions` → `FAQ` (if keeping FAQ format, rename section; or migrate to AccordionGroup heading anchor only)

---

## Spelling / Typo Check

Visible text scanned. `monetise` (UK English — correct). No typos detected. `Titan Node`, `OrchestratorSiphon`, `go-livepeer`, `orchAddr` — correct proper nouns and flag names.

---

## Component Matrix

| Component | Used? | Preferred for `guide`? | Notes |
|---|---|---|---|
| `StyledTable` | Yes | Yes | Correct for comparison tables |
| `AccordionGroup` / `Accordion` | Yes | Yes (concept/reference sections) | Used for evaluation criteria and FAQ |
| `CardGroup` / `Card` | Yes | Yes | Used for pool selection and related pages |
| `CustomDivider` | Yes | NOT-TESTED | Common structural element |
| `LinkArrow` | Yes | NOT-TESTED | Common element |
| `Warning` | Yes | Yes — appropriate for security warning | Keystore/private key warning |
| `Note` | Yes | Yes | Appropriate for important context |

---

## Cross-Category Connections

| Connection | Categories | Finding IDs |
|---|---|---|
| `purpose: guide` (wrong field value) + status/veracity incoherence | 1.4, 1.8, 5.7, 9.1 | F-17 — single root cause |
| Duplicate docs.json entry (`join-a-pool` + `new-join-a-pool`) + invalid `new-` filename prefix | 7.4, 7.8, 4.3 | BD-1 — blocking structural decision |
| 9 headings below threshold — all step/option labels | 3.1, 3.2, 3.7 | F-03 through F-11 |
| `pool worker` not defined at first use | 2.11 | F-18 |
| `status: current` + no `veracityStatus` + TODO block + unverified procedural claims | 1.8, 6.1, 6.2, 6.6, 9.1 | F-17 (root cause) |
| Third-party community links (Titan Node) — staleness risk | 6.8, 8.2 | F-19 |

---

## Finding Registry

| ID | Severity | Category | Description | Canonical Fix |
|---|---|---|---|---|
| F-01 | HIGH | 1.4 | `purpose: guide` — pageType value in purpose field | Proposed: `purpose: start` — confirm before applying (P51) |
| F-02 | HIGH | 1.8 | `status: current` + no `veracityStatus` — incoherent | Fix: `status: draft`, `veracityStatus: unverified` (P39) |
| F-03 | MEDIUM | 3.1 | `Step 1: Choose a Pool` (17/25) | Rename to `Pool Selection` |
| F-04 | MEDIUM | 3.1 | `Evaluating a pool before joining` (17/25) | Rename to `Pool Evaluation Criteria` |
| F-05 | MEDIUM | 3.1 | `Step 2: Connect Your GPU` (17/25) | Rename to `Worker Connection` |
| F-06 | MEDIUM | 3.1 | `Option A: Docker worker (recommended)` (17/25) | Rename to `Docker Worker Setup` |
| F-07 | MEDIUM | 3.1 | `Option B: go-livepeer transcoder mode` (19/25) | Rename to `Native go-livepeer Worker` |
| F-08 | MEDIUM | 3.1 | `Option C: Cloud GPU` (19/25) | Rename to `Cloud Worker Setup` |
| F-09 | MEDIUM | 3.1 | `Step 3: Verify Work Is Arriving` (17/25) | Rename to `Verify Work Arrival` |
| F-10 | MEDIUM | 3.1 | `Step 4: Track Your Earnings` (17/25) | Rename to `Track Earnings` |
| F-11 | HIGH | 3.1, 3.2 | `Frequently Asked Questions` (12/25) | Rename to `FAQ` or restructure |
| F-12 | HIGH | 1.1, 1.6 | `complexity` absent | Proposed: `complexity: beginner` — confirm |
| F-13 | HIGH | 1.1, 1.7 | `lifecycleStage` absent | Proposed: `lifecycleStage: evaluate` — confirm |
| F-14 | HIGH | 1.1, 1.9 | `industry` absent | Proposed: `industry: ["technical", "economics"]` — confirm |
| F-15 | HIGH | 1.1, 1.10 | `niche` absent | Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| F-16 | MEDIUM | 1.11 | Description 174 chars (exceeds 160) | Proposed: `Contribute GPU compute to a Livepeer Orchestrator pool — how pools work, how to evaluate one, how to connect, and what to expect from payouts.` (139 chars) — confirm |
| F-17 | CRITICAL | 1.4, 1.8, 5.7, 9.1 | Status/purpose/veracity incoherence — root cause of multiple findings | Fix: `status: draft`, `veracityStatus: unverified`, `purpose: start` (pending BD-2) |
| F-18 | MEDIUM | 2.11 | `pool worker` not defined at first use (line 44) | Add definition at first use: "A **pool worker** contributes GPU compute to a pool operator's Orchestrator node, earning off-chain payouts without managing on-chain registration." — verify definition before inserting (`{/* REVIEW: pool worker definition — verify against glossary */}`) |
| F-19 | MEDIUM | 6.8 | Third-party Titan Node links — staleness risk | Add staleness disclosure near Titan Node references; confirm `app.titan-node.com` is live |

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | Deprecate `join-a-pool.mdx` and rename `new-join-a-pool.mdx` to `join-a-pool.mdx`; remove old entry from docs.json | F-17 (7.4, 7.8); prevents duplicate sidebar entries | Alison |
| BD-2 | Confirm correct `purpose` value: `start` (zero to working pool-worker) vs `configure` (map options to requirements) | F-01 fix execution | Alison |

---

**Verdict Summary:** 25 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.4 (BORDERLINE), 2.11, 3.1, 3.2, 3.4, 3.7, 4.3, 4.5, 5.4, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.4, 7.8, 9.1, 9.3. Content quality is solid; heading structure needs systematic rename; major blocking issue is the duplicate docs.json entry (BD-1). Veracity pass required before `status: current` is valid.
