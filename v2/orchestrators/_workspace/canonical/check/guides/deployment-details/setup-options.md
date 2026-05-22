# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/setup-options.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Expected | Pass/Fail |
|---|---|---|---|---|
| `title` | Yes | `'Setup Options'` | Non-empty string | PASS |
| `sidebarTitle` | Yes | `'Setup Options'` | Non-empty string | PASS |
| `description` | Yes | `A guide to Livepeer GPU setup options - including installing with go-livepeer, using Siphon, joining a pool or operating concurrent workloads.` | ≤160 chars, subject-first, no self-ref | FAIL — 140 chars (within limit), but opens with "A guide to" — self-referential framing ("A guide" describes the document, not the subject). Also contains ` - ` (space-hyphen-space) as separator. Subject should be the reader's domain, not the document type. |
| `pageType` | Yes | `overview` | 7-type canonical schema | FAIL — `overview` is a **pageVariant**, not a pageType. Per Frameworks.mdx §1.1: "`overview` is a pageVariant, never a pageType." Canonical migration: pageType must be determined by content. This is an orientation/navigation page → `pageType: navigation` (pure routing) or `pageType: guide` (with overview variant). See BD-1. |
| `audience` | Yes | `orchestrator` | 7-token set | PASS |
| `purpose` | Yes | `orientation` | 15-value canonical set | FAIL — `orientation` is a deprecated alias for `orient` (Frameworks.mdx §1.2 deprecated aliases table). Fix: `purpose: orient` |
| `complexity` | Absent | — | required | FAIL |
| `lifecycleStage` | Absent | — | required | FAIL |
| `keywords` | Yes | 10 keywords | Specific, searcher-intent-aligned | FAIL — `setup options`, `on-chain`, `off-chain` are too generic. `go-livepeer` is weak as a standalone keyword. Better: `livepeer orchestrator setup guide`, `on-chain vs off-chain orchestrator`, `livepeer siphon setup`, `livepeer pool node setup`, `dual mode orchestrator` |
| OG image block | Yes | All 5 fields present | All 5 OG fields | PASS |
| `veracityStatus` | Absent | — | required | FAIL |
| `industry` | Absent | — | Required (P41) | FAIL — Proposed: `industry: ["technical"]` — confirm |
| `niche` | Absent | — | Required (P41) | FAIL — Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| `status` | Yes | `current` | Informational | FAIL — `status: current` + no `veracityStatus` violates §1.8 (P39). |
| `pageVariant` | Absent | — | Co-fix when pageType migrated (P42) | FAIL — When pageType is corrected, set `pageVariant: overview` as co-fix (this page is an overview/orientation for the Deployment Details section). |

**Frontmatter summary:** 10 fields fail. pageType is a variant used as a type (CRITICAL), purpose deprecated alias, description self-referential opener, complexity absent, lifecycleStage absent, veracityStatus absent, industry absent, niche absent, keywords weak, pageVariant absent (co-fix).

---

## Category 1: Frontmatter & Taxonomy

| Check | Result | Detail |
|---|---|---|
| 1.1 Required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing |
| 1.2 pageType canonical | FAIL | `overview` is a pageVariant, not a pageType. This is a CRITICAL classification error. Frameworks.mdx §1.1: "overview is a pageVariant, never a pageType." Migration requires determining the base pageType first. Options: (a) `pageType: navigation + pageVariant: overview` if this is a pure routing page, (b) `pageType: guide + pageVariant: overview` if it contains substantive orientation content. See BD-1. |
| 1.3 pageVariant | FAIL | `overview` should be `pageVariant`, not `pageType`. When 1.2 resolved, set `pageVariant: overview` as co-fix (P42). |
| 1.4 purpose canonical | FAIL | `orientation` is a deprecated alias. Fix: `purpose: orient` |
| 1.5 audience | PASS | `orchestrator` canonical |
| 1.6 complexity | FAIL | Missing. Proposed: `complexity: beginner` (orientation page, entry point) — confirm (P51) |
| 1.7 lifecycleStage | FAIL | Missing. Proposed: `lifecycleStage: evaluate` (reader choosing a path) — confirm (P51) |
| 1.8 veracityStatus | FAIL | Missing. `status: current` without `veracityStatus: verified` violates §1.8. Page contains factual claims (VRAM figures, protocol mechanics). Proposed: `veracityStatus: unverified` initially — run veracity check before setting to `verified` (P39). |
| 1.9 industry | FAIL | Absent. Required (P41). Proposed: `industry: ["technical"]` — confirm |
| 1.10 niche | FAIL | Absent. Required (P41). Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| 1.11 description | FAIL | Opens with "A guide to" — self-referential document descriptor. UK English OK. 140 chars (within limit but failing on opener). Proposed: `GPU setup options for Livepeer orchestrators: on-chain and off-chain modes, go-livepeer and Siphon paths, solo, pool, and O-T split deployments.` (143 chars) — confirm (P51) |
| 1.12 OG image block | PASS | All 5 fields present |
| 1.13 keywords quality | FAIL | `setup options`, `on-chain`, `off-chain` too generic. Proposed stronger set: `livepeer orchestrator setup`, `on-chain vs off-chain orchestrator`, `livepeer siphon`, `pool node livepeer`, `dual mode orchestrator` — confirm |

**Category 1 verdict:** 10 FAIL (1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13)

---

## Category 2: Voice & Copy

| Check | Result | Detail |
|---|---|---|
| 2.1 UK English | PASS | Scan: `Optimise` — correct UK spelling (line 109). No US spellings detected. PASS. |
| 2.2 Banned words | PASS | Scan: `effectively` — absent; `essentially` — absent; `basically` — absent; `meaningful` — absent; `significant` — absent; `real` (intensifier) — absent; `various` — absent; `several` — absent; `obviously` — absent; `clearly` — absent. All clean. |
| 2.3 Banned phrases | PASS | Scan: `This section covers` — absent; `This page covers` — absent; `rather than` — absent; `etc.` — absent; `and so on` — absent; `among other factors` — absent; `depends on various` — absent. All clean. |
| 2.4 Banned constructions | PASS | Scanning `can/may`: no `can generate` or `may produce` in value claims detected. Scanning `not [X]` as primary statement: Line 108 "All setup paths **use** go-livepeer for the compute side." — positive. No `not [X]` in primary value statements. PASS. Tip block labels ("What network you run on: On-chain or off-chain") are definition labels embedded in a Tip block, not body prose questions or banned constructions. PASS. |
| 2.5 Opening order | FAIL | Page opens with a `Tip` block listing "key decisions" before any content introduction. A Tip block is appropriate for supplementary context, not as the page opener. The reader encounters a bulleted decision list before understanding what they're deciding. |
| 2.6 Paragraph discipline | PASS | Individual sections are focused. The Tip block scope is tight. |
| 2.7 Audience register | PASS | Practical, operational, hardware-specific where needed (`VRAM`, `NVENC/NVDEC`). Matches orchestrator register. |
| 2.8 Prohibited phrases | PASS | No `easy to set up`, no `the network rewards you for`, no `Simple configuration`. PASS. |
| 2.9 No passive value statements | PASS | Mode descriptions are concrete: "No blockchain connection", "LPT inflation each round", "Full control over pricing, workloads, stake, and earnings." |
| 2.10 No hedging openers | FAIL | Opening Tip block frames page as a decision list before grounding the reader. Logged in 2.5. |
| 2.11 Terminology | PASS | `OrchestratorSiphon`, `go-livepeer`, `active set`, `NVENC/NVDEC`, `CUDA`, `arbETH`, `LPT`, `reward cut/fee cut` — domain terms used correctly where present. |

**Category 2 verdict:** 2 FAIL (2.5, 2.10)

---

## Category 3: Section Naming & Headings

**Note:** `Related Pages` pattern not present. Page uses `Next Steps` heading — see check 3.2.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Setup Type` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `Software Path` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `Operational Mode` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Workload Mode` | 4 | 3 | 4 | 5 | 5 | 21 | PASS |
| `Next Steps` | 2 | 1 | 3 | 3 | 4 | 13 | FAIL — Avoid-tier per check 3.2 |

| Check | Result | Detail |
|---|---|---|
| 3.1 All headings ≥20/25 | FAIL | 4 headings below threshold: `Setup Type` (18), `Software Path` (18), `Operational Mode` (17), `Next Steps` (13). |
| 3.2 No banned/weak terms | FAIL | `Next Steps` — in the Avoid-tier list per checks.mdx §3.2. This heading is not the exempt `Related Pages` heading (P53: exempt applies ONLY to `Related Pages` exact string). `Next Steps` must be scored and flagged. |
| 3.3 No contrast labels | PASS | No `X vs Y` headings. |
| 3.4 Domain-anchor rule | FAIL | `Setup Type`, `Software Path`, `Operational Mode` — all lack a domain anchor. In isolation, "Setup Type" could mean anything. "Operational Mode" could be from any operations guide. |
| 3.5 Heading names concept | PASS | Headings name the decision category, not examples. |
| 3.6 Title well-formed | PASS | `Setup Options` — 2 words, concept-derived. |
| 3.7 Expert editorial | FAIL | `Setup Type`, `Software Path`, `Operational Mode`, `Next Steps` are generic labels. A senior editor would choose: `Network Mode`, `Software Stack`, `Deployment Pattern`, and restructure the exit section. |

**Category 3 verdict:** 4 FAIL (3.1, 3.2, 3.4, 3.7)

---

## Category 4: Page Structure & Content Architecture

| Check | Result | Detail |
|---|---|---|
| 4.1 One purpose, one audience | PASS | Single audience (orchestrator choosing a deployment path), single job: orient to setup options and choose a path. |
| 4.2 Purpose statement | PASS | "This page lets an orchestrator understand the setup dimensions (network mode, software, operational mode, workload) and navigate to the right detailed guide." |
| 4.3 PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json sequence (lines 2883–2891): **`setup-options`** → `siphon-setup` → `dual-mode-configuration` → `orchestrator-transcoder-setup` → `join-a-pool` → `new-join-a-pool`. This is the first page in the Deployment Details group — it is the section entry point. The `Next Steps` CardGroup at the bottom correctly links to Requirements, Setup Guide, Join a Pool, and Operator Rationale. Adjacency with the next page (siphon-setup) is acceptable — a reader moving from setup-options to siphon-setup would have chosen the Siphon path on this page. PASS. |
| 4.4 No dead ends | PASS | Next Steps CardGroup and inline LinkArrow links provide clear exits to all detailed guides. |
| 4.5 Prerequisites stated | N/A — orientation page; prerequisites belong on the detail pages |
| 4.6 Out-of-scope clear | PASS | Page explicitly covers setup orientation only, with links to detail pages for each path. |
| 4.7 Information type per section | PASS | `purpose: orient` permits `structural`, `narrative`, `conceptual`. Setup Type (structural), Software Path (structural/conceptual), Operational Mode table (structural), Workload Mode (structural/factual). Aligned. |
| 4.8 No content duplication | PASS | Each section is a summary that links to a full detail page. No verbatim duplication. |
| 4.9 Section orientation | PASS — this page IS the section orientation page for Deployment Details |
| 4.10 Cross-tab links | N/A |

**Category 4 verdict:** 0 FAIL

---

## Category 5: Layout, Components & Template

| Check | Result | Detail |
|---|---|---|
| 5.1 Correct template | FAIL | `pageType: overview` is a deprecated/incorrect classification. If correct type is `navigation`, preferred components per matrix are `Card`, `CardGroup` for routing. Page uses `Tip`, `CardGroup`, `Card`, `StyledTable`, `Badge`, `LinkArrow`, `Note` — not a pure `navigation` page structure. If correct type is `guide + pageVariant: overview`, the structure is closer. Template compliance depends on BD-1 resolution. |
| 5.2 Required sections present | FAIL | Depends on BD-1. If `navigation`: needs portal/routing structure. If `guide`: needs Overview + sections. Current structure has neither a clean navigation structure nor a clear guide structure. |
| 5.3 Approved components only | NOT-TESTED | `Badge`, `Icon` used inline. Component approval file not read (P22). |
| 5.4 Avoided components absent | PASS | No TODO/TBD placeholders. Comment `{/* <Quote> Adding your GPU to Livepeer </Quote> */}` is a commented-out element — not rendered. |
| 5.5 Information type → component | PASS | Tables (structural) → `StyledTable`. Cards (navigation routing) → `CardGroup`/`Card`. Note (conceptual) → `Note`. |
| 5.6 MDX renders clean | NOT-TESTED | `<Icon icon="link" size={14} />` at line 73 — `Icon` is used but not imported. `Badge` not imported. In Mintlify, `Icon` and `Badge` may be globally available components. Cannot declare FAIL without verification (P22). NOT-TESTED render risk. |
| 5.7 No old-schema frontmatter | FAIL | `pageType: overview` (pageVariant used as pageType). `purpose: orientation` (deprecated alias). Both logged in Category 1. |
| 5.8 CSS custom properties | PASS | No inline styles detected. |
| 5.9 Generated file banner | N/A |
| 5.10 Component conventions | NOT-TESTED | `Icon` and `Badge` used without explicit imports. If Mintlify globals, PASS. If not, broken import. Mark as NOT-TESTED (P22). |

**Category 5 verdict:** 3 FAIL (5.1, 5.2, 5.7), 2 NOT-TESTED (5.3, 5.6/5.10 for Icon/Badge)

---

## Category 6: Veracity & Factual Accuracy

| Check | Result | Detail |
|---|---|---|
| 6.1 Every factual claim citable | FAIL | (1) "Video VRAM minimum: 4 GB" (Workload Mode table) — NOT-TESTED against hardware specs. (2) "AI VRAM: 8-24 GB" — NOT-TESTED. (3) "Dual VRAM: 16-24 GB" — NOT-TESTED. (4) "Arbitrum RPC, arbETH, LPT stake" as on-chain requirements — factual, verifiable via protocol docs but NOT-TESTED here. (5) "A missed reward round is permanent LPT loss" (line 110) — factual claim. NOT-TESTED against protocol specs (known behaviour but uncited). |
| 6.2 Code/commands tested | N/A — no code blocks on this page |
| 6.3 No deprecated API usage | N/A — no API references |
| 6.4 Numbers are real | FAIL | VRAM figures (Video: 4 GB, AI: 8-24 GB, Dual: 16-24 GB) — NOT-TESTED. Consistent with dual-mode-configuration.mdx figures, but VRAM source not established. |
| 6.5 REVIEW flags for unverified claims | FAIL | No REVIEW flags present. Page has factual claims (VRAM numbers, LPT loss statement) with no inline verification markers. |
| 6.6 veracityStatus honest | FAIL | Missing. `status: current` without `veracityStatus: verified` + unverified factual claims. Fix: `veracityStatus: unverified` until VRAM figures and protocol claims are confirmed against primary sources (P39). |
| 6.7 Authoritative vs AI-generated | PASS | No glossary references. |
| 6.8 Source staleness | FAIL | VRAM table numbers (`4 GB video min`, `8-24 GB AI`) — staleness risk as GPU support evolves. No date-stamp or source link. |
| 6.9 No open-ended research tasks | PASS — no open-ended tasks; all claims have concrete fixes available |

**Category 6 verdict:** 5 FAIL (6.1, 6.4, 6.5, 6.6, 6.8)

---

## Category 7: Navigation & Information Architecture

| Check | Result | Detail |
|---|---|---|
| 7.1 Page in docs.json | PASS | `v2/orchestrators/guides/deployment-details/setup-options` present at docs.json line 2885. |
| 7.2 Navigation matches file system | PASS | File exists at declared path. |
| 7.3 Tab entry portal routes to all sections | N/A — page-level check |
| 7.4 No structural orphans | PASS | Page is first in Deployment Details group. |
| 7.5 Audience journey complete | PASS | Orientation page links to all 4 primary paths (Requirements, Setup Guide, Join a Pool, Operator Rationale). |
| 7.6 Cross-tab graduation | PASS | No cross-tab links required at this page. |
| 7.7 File in correct lane | PASS | In `v2/orchestrators/guides/deployment-details/`. |
| 7.8 File naming conventions | PASS | No invalid prefix. `setup-options.mdx` descriptive. |
| 7.9 _workspace/ TTL | N/A |

**Category 7 verdict:** 0 FAIL

---

## Category 8: Links & Rendering

| Check | Result | Detail |
|---|---|---|
| 8.1 Internal links resolve | PASS | (1) `/v2/orchestrators/guides/deployment-details/siphon-setup` — PRESENT docs.json line 2886. PASS. (2) `/v2/orchestrators/setup/guide` — PRESENT docs.json setup section (confirmed). PASS. (3) `/v2/orchestrators/guides/deployment-details/join-a-pool` — PRESENT docs.json line 2889. PASS. (4) `/v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` — PRESENT docs.json line 2888. PASS. (5) `/v2/orchestrators/guides/deployment-details/dual-mode-configuration` — PRESENT docs.json line 2887. PASS. (6) `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` — PRESENT docs.json line 2896. PASS. (7) `/v2/orchestrators/guides/advanced-operations/pool-operators` — PRESENT docs.json line 2941. PASS. (8) `/v2/orchestrators/guides/operator-considerations/requirements` — PRESENT docs.json line 2879. PASS. (9) `/v2/orchestrators/guides/operator-considerations/operator-rationale` — PRESENT docs.json line 2876. PASS. All internal links verified. |
| 8.2 External links live | N/A — no external links on this page |
| 8.3 Snippet imports resolve | PASS | `quote.jsx`, `Tables.jsx`, `Divider.jsx`, `Links.jsx` — standard paths. Note: `Quote` is imported but commented out (line 33: `{/* <Quote> Adding your GPU to Livepeer </Quote> */}`). `Quote` is a dead import (never used in rendered content). See F-10. |
| 8.4 Images load | N/A |
| 8.5 Renders clean | NOT-TESTED | `Icon` and `Badge` used without explicit imports — see 5.6/5.10 |
| 8.6 No TODO/TBD | PASS | No TODO/TBD in rendered content. Commented-out Quote is not rendered. |

**Category 8 verdict:** 1 FAIL (8.3 dead import), 1 NOT-TESTED (8.5)

---

## Category 9: Process & Governance

| Check | Result | Detail |
|---|---|---|
| 9.1 Human sign-off | FAIL | `status: current` + no `veracityStatus` + dead import. |
| 9.2 Consuming decisions | NOT-TESTED |
| 9.3 Gate prerequisites | FAIL | Tab pre-IA-approval. |
| 9.4 Phase ordering | NOT-TESTED |
| 9.5 Findings before fixes | PASS |
| 9.6 Feedback routed | N/A |

**Category 9 verdict:** 2 FAIL (9.1, 9.3)

---

## Banned Construction Scan

| Location | Text | Type | Classification | Canonical Fix |
|---|---|---|---|---|
| Lines 35–40 | Tip block: "The key decisions for Orchestrator setup are: 1. **Setup Mode** - What network you run on: On-chain or off-chain..." | `What [X]` embedded labels | PASS — these are decision-category definitions, not body prose questions or banned constructions. |
| Line 110 | "Siphon exists because GPU machines restart - and a missed reward round is **permanent LPT loss**." | Statement | PASS — factual, direct, positive statement. |
| Scanning all `can/may`: No `can [verb]` in value claims detected. | | | | |
| Scanning all `not [X]`: No `not [X]` as primary statement detected. | | | | |
| Description: "A guide to Livepeer GPU setup options" | `This page [verb]` variant | FAIL — "A guide to" is a document self-descriptor. Logged in F-01. | Fix: Replace description with subject-first, action-oriented text. |

---

## Heading Score Table (Full Breakdown)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Setup Type` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `Software Path` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `Operational Mode` | 3 | 2 | 4 | 4 | 4 | 17 | FAIL |
| `Workload Mode` | 4 | 3 | 4 | 5 | 5 | 21 | PASS |
| `Next Steps` | 2 | 1 | 3 | 3 | 4 | 13 | FAIL |
| `Related Pages` | N/A — not present | — | — | — | — | — | N/A |

**Rename proposals (validated against check 3.2 prohibited list — P18):**

- `Setup Type` → `Network Mode` (not prohibited; domain-anchored; scores 22)
- `Software Path` → `Software Stack` (not prohibited; more precise; scores 20)
- `Operational Mode` → `Deployment Pattern` (not prohibited; domain-anchored; scores 22)
- `Next Steps` → restructure as `Related Pages` CardGroup — or rename to a concrete heading that is not in Avoid-tier (not using `Next Steps`)

---

## Spelling / Typo Check

Visible text scanned. `Optimise` (UK — correct, line 109). `arbETH` — correct. `OrchestratorSiphon` — correct. `NVENC/NVDEC` — correct. No typos detected. Badge labels: `On-chain`, `Off-chain`, `Solo`, `O-T Split`, `Siphon`, `Video`, `AI`, `Dual` — consistent and correct.

---

## Component Matrix

| Component | Used? | Preferred for `navigation`? | Preferred for `guide + overview`? | Notes |
|---|---|---|---|---|
| `CardGroup` / `Card` | Yes | Yes (navigation) | Yes (guide) | Correct for routing |
| `StyledTable` | Yes | Borderline for navigation | Yes for guide | Used for Setup Type, Software Path, Operational Mode, Workload Mode tables |
| `Tip` | Yes | Not standard for navigation | OK for guide | Used as page opener — see 2.5 |
| `Badge` | Yes | NOT-TESTED | NOT-TESTED | Used inline; not imported explicitly |
| `Icon` | Yes | NOT-TESTED | NOT-TESTED | Used in table header; not imported explicitly |
| `Note` | Yes | Borderline for navigation | OK for guide | Pool operations note appropriate |
| `CustomDivider` | Yes | NOT-TESTED | NOT-TESTED | Common element |
| `LinkArrow` | Yes | NOT-TESTED | NOT-TESTED | Used for inline links |
| `Quote` | Imported but unused | N/A | N/A | Dead import — F-10 |

---

## Cross-Category Connections

| Connection | Categories | Finding IDs |
|---|---|---|
| `pageType: overview` (variant used as type) — root cause of template/structure ambiguity | 1.2, 5.1, 5.2, 5.7 | F-02 — single blocking decision (BD-1) |
| `purpose: orientation` deprecated alias | 1.4 | F-03 |
| `status: current` + no `veracityStatus` + factual claims unverified | 1.8, 6.1, 6.4, 6.5, 6.6, 9.1 | F-09 |
| Description self-referential opener | 1.11 | F-01 |
| `Next Steps` heading — Avoid-tier | 3.1, 3.2 | F-08 |
| Dead `Quote` import | 8.3 | F-10 |
| Inline `Icon` and `Badge` without explicit import | 5.3, 5.6, 5.10 | F-11 — NOT-TESTED |
| Opening Tip block — not ideal page opener | 2.5 | F-04 |
| VRAM figures unverified with no REVIEW flags | 6.1, 6.4, 6.5 | F-09 |

---

## Finding Registry

| ID | Severity | Category | Description | Canonical Fix |
|---|---|---|---|---|
| F-01 | HIGH | 1.11 | Description opens with "A guide to" — self-referential | Proposed: `GPU setup options for Livepeer orchestrators: on-chain and off-chain modes, go-livepeer and Siphon paths, solo, pool, and O-T split deployments.` — confirm (P51) |
| F-02 | CRITICAL | 1.2, 5.1, 5.7 | `pageType: overview` — pageVariant used as pageType | Resolve BD-1: determine correct base pageType, then apply co-fix `pageVariant: overview` (P42) |
| F-03 | HIGH | 1.4 | `purpose: orientation` — deprecated alias | Fix: `purpose: orient` |
| F-04 | MEDIUM | 2.5 | Page opens with `Tip` block before content context | Move Tip block to after the first prose paragraph, or convert to an introductory `Note` or remove |
| F-05 | HIGH | 1.1, 1.6 | `complexity` absent | Proposed: `complexity: beginner` — confirm |
| F-06 | HIGH | 1.1, 1.7 | `lifecycleStage` absent | Proposed: `lifecycleStage: evaluate` — confirm |
| F-07 | HIGH | 1.1, 1.9 | `industry` absent | Proposed: `industry: ["technical"]` — confirm |
| F-08 | HIGH | 3.1, 3.2 | `Next Steps` (13/25) — Avoid-tier heading | Rename or restructure as a `Related Pages` CardGroup (not using `Next Steps`) |
| F-09 | HIGH | 1.8, 6.1, 6.6 | `status: current` + no `veracityStatus` + unverified VRAM claims | Fix: `veracityStatus: unverified` until VRAM figures confirmed. Add REVIEW flags to VRAM numbers in Workload Mode table. |
| F-10 | MEDIUM | 8.3 | Dead `Quote` import (imported, never used) | Remove `import { Quote } from '/snippets/components/content/quote.jsx'` |
| F-11 | INFO | 5.3, 5.6 | `Icon` and `Badge` used without explicit imports — NOT-TESTED | Confirm whether Mintlify makes these globally available; if not, add imports |
| F-12 | HIGH | 1.1, 1.10 | `niche` absent | Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| F-13 | MEDIUM | 1.13 | Keywords too generic | Proposed stronger set: `livepeer orchestrator setup`, `on-chain vs off-chain orchestrator`, `livepeer siphon`, `pool node livepeer`, `dual mode orchestrator` — confirm |
| F-14 | MEDIUM | 3.1, 3.4 | `Setup Type` (18/25), `Software Path` (18/25) — no domain anchor | Rename to `Network Mode` and `Software Stack` |
| F-15 | MEDIUM | 3.1, 3.4 | `Operational Mode` (17/25) — no domain anchor | Rename to `Deployment Pattern` |

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | Determine correct base `pageType` for this page: `navigation` (pure routing) vs `guide` (substantive orientation content with summaries). This determines template requirements and co-fix `pageVariant`. | F-02 fix execution; 5.1, 5.2 resolution | Alison |
| BD-2 | Confirm VRAM figures in Workload Mode table against hardware reference (Video: 4 GB, AI: 8–24 GB, Dual: 16–24 GB) | F-09 veracity resolution | SME + Alison |

---

**Verdict Summary:** 27 checks fail: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 2.10, 3.1, 3.2, 3.4, 3.7, 5.1, 5.2, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 8.3, 9.1, 9.3. Most critical: `pageType: overview` is a CRITICAL classification error (pageVariant used as pageType). All internal links verified PASS — solid navigation foundation. Content quality is good; taxonomy and heading structure need work.
