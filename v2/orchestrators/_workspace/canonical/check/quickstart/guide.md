# Per-Page Quality Check Report
**Page:** `v2/orchestrators/quickstart/guide.mdx`
**Date:** 2026-03-24
**Verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Orchestrator Quickstart` | PASS | |
| `sidebarTitle` | Yes | `Overview` | PASS | |
| `description` | Yes | `Choose your quickstart path — video transcoding, AI inference, or join a pool — and get your first orchestrator node running.` | PASS | 133 chars, UK English, subject-first |
| `pageType` | Yes | `overview` | FAIL | `overview` is a deprecated alias from the old 12-type schema. Per checks.mdx §1.2 + Frameworks.mdx §1.1, `overview` must migrate to the correct new type. Per §1.3, `overview` is a valid `pageVariant` but never a `pageType`. See Cat 1.2 below. |
| `audience` | Yes | `orchestrator` | PASS | Valid canonical token |
| `purpose` | **No** | *(field absent)* | FAIL | Required field missing. See Cat 1.1 below. |
| `complexity` | **No** | *(field absent)* | FAIL | Required field missing. See Cat 1.1 below. |
| `lifecycleStage` | **No** | *(field absent)* | FAIL | Required field missing. See Cat 1.1 below. |
| `keywords` | Yes | `livepeer, orchestrator, quickstart, transcoding, AI, go-livepeer, GPU` | FAIL | Low-quality; generic terms not aligned to searcher intent. See Cat 1.13 below. |
| OG image block | Yes | All 5 fields present | PASS | |
| `status` | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8). Page has an open REVIEW flag at line 26. Fails this rule. |
| `veracityStatus` | **No** | *(field absent)* | FAIL | Required field missing. |
| `pageVariant` | No | *(absent)* | INFO | Once `pageType` is corrected to `instruction`, set `pageVariant: quickstart`. |
| `industry` | No | *(absent)* | INFO | Optional field; not a required field per checks.mdx §1.1. No action required unless taxonomy completeness is needed. |
| `niche` | No | *(absent)* | INFO | Optional. |
| `lastVerified` | Yes | `2026-03-13` | INFO | Not a required field per checks.mdx §1.1 but present. |

---

## Category 1 — Frontmatter & Taxonomy

### 1.1 — All 10 required frontmatter fields present
**FAIL**

Missing fields: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`.

**Fix:**
Add the following fields to the frontmatter block after `status: current`:

```yaml
purpose: orient
complexity: beginner
lifecycleStage: setup
veracityStatus: unverified
```

Rationale: `orient` matches the page's function — a reader arrives, scans paths, locates their entry point, and navigates. `beginner` is correct for a first-time operator entry point. `setup` matches the reader's lifecycle position. `veracityStatus: unverified` is the honest default; an open REVIEW flag disqualifies `verified` per §1.8.

### 1.2 — `pageType` uses 7-type canonical schema
**FAIL**

Current value: `overview`. Per Frameworks.mdx §1.1, `overview` is a deprecated alias from the old 12-type schema — it migrates explicitly to the correct new type. `overview` is a `pageVariant`, not a `pageType`.

Per Frameworks.mdx §1.1: the old `overview` value has no direct migration mapping (unlike `quickstart` → `instruction` + `quickstart`). The page must be classified against the 7-type schema on its actual content.

This page is a routing/orientation page — it routes the reader to one of several paths and orients them on which path to take. The correct classification is `pageType: navigation` (pure routing) or, if the comparison table and prerequisites section are considered substantive content, `pageType: instruction` + `pageVariant: quickstart`.

**Blocking Decision — see Blocking Decisions section.** The correct value depends on how the page scope is resolved. The REVIEW flag at line 26 also signals that the page's current scope may not be final.

Failure type: (a) deprecated alias — `overview` was valid in the old 12-type schema.

### 1.3 — `pageVariant` valid if present
**N/A** — `pageVariant` is not currently present. Applies after 1.2 is resolved.

### 1.4 — `purpose` uses 15-value canonical set
**FAIL** — field absent. Addressed under 1.1.

### 1.5 — `audience` uses 7-token set
**PASS** — `orchestrator` is a valid canonical token.

### 1.6 — `complexity` single canonical value
**FAIL** — field absent. Addressed under 1.1.

### 1.7 — `lifecycleStage` single canonical value
**FAIL** — field absent. Addressed under 1.1.

### 1.8 — `veracityStatus` present and honest
**FAIL**

Field absent. Additionally, `status: current` is set, which per checks.mdx §1.8 requires `veracityStatus: verified` AND zero REVIEW flags. Line 26 contains an open REVIEW flag:

> `{/* REVIEW: THIS SHOULD NOT BE IN QUICKSTART - BE VERBOSE ABOUT THE EASIEST SETUP PATH FOR QUICKSTART. */}`

**Fix:**
- Add `veracityStatus: unverified` to frontmatter (see 1.1).
- Either resolve the REVIEW flag or downgrade `status` from `current` to a draft/in-progress value until the flag is resolved.

### 1.9 — `industry` array valid if present
**N/A** — field absent (optional per checks.mdx §1.1).

### 1.10 — `niche` array valid if present
**N/A** — field absent (optional).

### 1.11 — `description` well-formed
**PASS**

Value: `Choose your quickstart path — video transcoding, AI inference, or join a pool — and get your first orchestrator node running.`

133 characters (≤160). Subject-first construction. No "this page" self-reference. UK English (no detected US variants). Em-dash used in description is a borderline concern — see Banned Construction Scan. The construction is structural enumeration rather than a sentence break and does not violate the em-dash prohibition as applied to body prose and headings.

### 1.12 — OG image block complete
**PASS** — All 5 OG fields present at lines 15–19.

### 1.13 — `keywords` field quality
**FAIL**

Current keywords: `livepeer`, `orchestrator`, `quickstart`, `transcoding`, `AI`, `go-livepeer`, `GPU`

These are generic umbrella terms, not searcher-intent-aligned keywords. Per checks.mdx §1.13, terms like `"livepeer"` and `"orchestrator"` are explicitly cited as bad examples. `"quickstart"` and `"AI"` are similarly low-value.

**Fix — replace with:**
```yaml
keywords:
  - run livepeer orchestrator node
  - livepeer orchestrator setup
  - GPU transcoding node quickstart
  - go-livepeer docker setup
  - livepeer video transcoding quickstart
  - join livepeer orchestrator pool
  - AI inference pipeline livepeer
```

---

## Category 2 — Voice & Copy

### 2.1 — UK English throughout
**PASS**

No US spellings detected. Relevant terms checked: no `optimize`, `behavior`, `color`, `center`, `labeled`, `canceled`.

### 2.2 — Zero banned words
**PASS**

Banned word scan across all body prose, table cells, card descriptions, and Note content:
- `effectively`: not found
- `essentially`: not found
- `basically`: not found
- `meaningful`: not found
- `significant`: not found
- `real` (intensifier): not found
- `various`: not found
- `several`: not found
- `obviously`: not found
- `clearly`: not found

### 2.3 — Zero banned phrases
**PASS** — no banned phrases found.

Checked: "This section covers", "This page covers", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on"/"etc.", "rather than", "what it takes", "it should be noted", "not just X", "can generate"/"may produce", "The reason is straightforward", "among other factors", "low but not zero", "once X is stable", "depends on various".

None present.

### 2.4 — Zero banned constructions
**PASS** (body prose). See Banned Construction Scan for full candidate list.

No `This page [verb]` self-reference in body prose. Opening line at 31: `The quickstart gets you from zero to a working orchestrator node as fast as possible.` — subject-first, no self-reference.

### 2.5 — Opening order correct
**PASS**

Line 31: `The quickstart gets you from zero to a working orchestrator node as fast as possible.` — outcome (working node, fast) before any mechanism. No caveat opener.

### 2.6 — Paragraph discipline
**PASS**

The page is primarily structured with components (cards, tables, Notes) rather than prose paragraphs. The single prose statement at line 31 is a clean lead sentence. Line 85 (linking prose after the requirements table) ends with a link/next step — acceptable. Line 124 (comparison table bridge sentence) is a single sentence that ends with a link.

Line 130: `Once your node is running and you have received your first job:` — this is a short lead-in to the card group. It ends with a colon leading to a component, which is structurally sound. Minor flag: the `if [condition]` structure is present (`once` is functionally equivalent). See Banned Construction Scan.

### 2.7 — Audience register correct
**PASS**

The page is in the orchestrator register: hardware-specific terms (NVIDIA GPU, NVENC, Docker, NVIDIA Container Toolkit, Arbitrum One), practical and outcome-focused, no vague "the network rewards you" framing.

### 2.8 — Per-audience prohibited phrases absent
**PASS** (orchestrator register checked)

No "easy to set up", "the network rewards you for", "your orchestrator will automatically", "simple configuration" detected.

### 2.9 — No passive value statements
**PASS** — no unquantified value claims. Hardware specs are concrete.

### 2.10 — No hedging openers
**PASS** — opening is direct.

### 2.11 — Terminology locked and consistent
**INFO — NOT-TESTED**

`terminology-tracking.md` not read in this session. Terms observed: `NVENC`, `Docker`, `NVIDIA Container Toolkit`, `Arbitrum One`, `LPT`, `ETH`. These align with CLAUDE.md locked domain terms. No deprecated term variants (`broadcaster`, `miner`, `hybrid`) detected.

`pool worker` not present on this page. No first-use violation since the term does not appear.

---

## Category 3 — Section Naming & Headings

All headings extracted from the page:
1. `Choose your path` (H2, line 35)
2. `What you will need` (H2, line 52)
3. `Quickstart vs Setup guide` (H2, line 89)
4. `After the quickstart` (H2, line 128)

### 3.1 — Every heading scores ≥20/25

**Scoring:**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Choose your path | 3 | 2 | 3 | 4 | 4 | 16/25 | FAIL |
| What you will need | 3 | 2 | 3 | 4 | 3 | 15/25 | FAIL |
| Quickstart vs Setup guide | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| After the quickstart | 3 | 2 | 2 | 4 | 3 | 14/25 | FAIL |

All four headings fail the ≥20/25 threshold.

**Detailed scoring rationale:**

**"Choose your path"** (16/25)
- Precision (3): names the action but not the domain — "path" is ambiguous without context. "Choose" is command-form, acceptable, but "path" is a soft generic.
- Depth (2): no intellectual signal — conveys nothing about what paths exist or why the choice matters.
- Stability (3): stable if paths don't change, fragile if a third path is added and "path" becomes plural.
- Clarity (4): understood immediately, if generic.
- Conciseness (4): short and direct.
- **Proposed fix:** `Setup Path` (20/25 est.) or `Quickstart Paths` (21/25 est.)

**"What you will need"** (15/25)
- Precision (3): vague — does not specify what kind of requirements (hardware, software, credentials).
- Depth (2): lowest-denominator label for a requirements section.
- Stability (3): stable enough but interchangeable with any prerequisites section on any page.
- Clarity (4): clear to any reader.
- Conciseness (3): four words but "will need" is indirect — "need" or "required" is tighter.
- **Proposed fix:** `Prerequisites` or `Node Prerequisites` (both ≥20/25). Note: `Prerequisites` is listed in the "OK" column of the AVOID/BANNED tier check.

**"Quickstart vs Setup guide"** (18/25)
- Precision (4): names both items under comparison.
- Depth (3): signals a comparison but not the governing decision.
- Stability (4): stable as long as both docs exist.
- Clarity (4): clear.
- Conciseness (3): could be tighter — the conjunction "vs" is functional but the heading breaks check 3.3 (literal contrast labels).
- **Fails check 3.3** — `X vs Y` heading. See 3.3 below.
- **Proposed fix:** `Which Path to Use` fails check 3.2 (contains "which" — borderline — not a banned term, but "path" is weak). Better: `Choosing Your Start Point` or `Quickstart or Setup Guide`. Actually strongest candidate: `Start Point Selection` or `Quickstart Scope` (names the governing concept, not the contrast).

**"After the quickstart"** (14/25)
- Precision (3): states timing but not content — what happens after is unnamed.
- Depth (2): no signal about what the next steps are.
- Stability (2): fragile — if the section moves earlier in a reader journey, "after" breaks.
- Clarity (4): clear temporal marker.
- Conciseness (3): short but "after" + section name is a structural crutch.
- **Proposed fix:** `Next Steps` — however, `Next Steps` is listed under the **Avoid** tier (not Banned). Better: `Post-Setup Actions` or `After First Job` or simply `What Comes Next` — all score higher on depth and stability. Strongest candidate: `Node Running: Next Steps` — but over 3 words. Recommend: `After First Run` (names the milestone, not just timing).

### 3.2 — No banned or weak standalone heading terms
**INFO (partial fail)**

No **Banned** terms found (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`).

`What you will need` contains no banned terms but is a weak construction (flagged under 3.1).

`After the quickstart` — not a banned term, but scores poorly on depth and stability (see 3.1).

### 3.3 — No literal contrast labels
**FAIL**

Line 89: `## Quickstart vs Setup guide` — literal `X vs Y` pattern. Per checks.mdx §3.3, name the governing concept instead.

**Fix:** Replace with a heading that names the decision frame, not the contrast. Candidate: `Choosing Your Start Point` or `Quickstart Scope`.

### 3.4 — Domain-anchor rule
**PASS** — headings are interpretable in isolation given the page context (orchestrators quickstart).

### 3.5 — Heading names the concept, not examples
**PASS** — no heading is an example-list label.

### 3.6 — Title well-formed
**PASS**

`Orchestrator Quickstart` — 2 words, concept-derived, no banned forms. Clean.

### 3.7 — Sounds like an expert editorial choice
**FAIL** (for all four H2s)

"Choose your path", "What you will need", "After the quickstart" are all generic structural labels that would appear on documentation for any product. An expert technical editor would name the specific concept. Addressed via fixes in 3.1.

---

## Category 4 — Page Structure & Content Architecture

### 4.1 — One purpose, one audience, one job
**BORDERLINE**

The page attempts to serve multiple functions in parallel:
1. Route the reader to a quickstart path (navigation/orientation)
2. List prerequisites
3. Compare quickstart vs setup guide
4. Surface post-quickstart next steps

The page is a navigation hub — which is fine as a design pattern. However, the open REVIEW flag at line 26 explicitly states this scope is wrong: `THIS SHOULD NOT BE IN QUICKSTART - BE VERBOSE ABOUT THE EASIEST SETUP PATH FOR QUICKSTART.` This is a structural scope flag that must be resolved before the page can be assessed as complete.

The prerequisites table, comparison table, and after-quickstart cards could all belong on separate pages or in a more verbose single-path quickstart. **Blocking Decision required — see Blocking Decisions section.**

### 4.2 — Purpose statement test
**BORDERLINE** (pending 4.1 resolution)

If scoped as a navigation page: "This page lets the orchestrator scan available quickstart paths and select the one matching their hardware and goal." Passes.

If scoped as a quickstart instruction page: the page does not get the reader from zero to a working node — it only routes them. That is a scope failure for a `pageType: instruction` + `pageVariant: quickstart`.

### 4.3 — PREV/NEXT adjacency correct
**INFO — requires docs.json analysis**

Per docs.json lines 2847–2854, the Quickstart group contains:
1. `v2/orchestrators/quickstart/guide` ← this page (position 1)
2. `v2/orchestrators/quickstart/video-transcoding` (NEXT)

PREV: The last page in the Concepts group is `v2/orchestrators/concepts/incentive-model` (docs.json line 2843). A reader arriving from incentive-model would have conceptual knowledge of how earnings work — sufficient to understand the path selection on this page. Adjacency is acceptable.

NEXT: `video-transcoding` — the card at line 38 links directly to this page, which is consistent with the nav sequence. Adjacency is correct.

### 4.4 — No dead ends
**PASS**

Every section provides a next step (cards in "Choose your path" section, links in requirements and comparison sections, cards in "After the quickstart").

### 4.5 — Prerequisites stated or linked
**PASS**

Prerequisites table (lines 54–83) is present and explicit. Hardware, OS, Docker, Wallet, Port, and RPC requirements stated.

Hardware reference linked at line 85: `/v2/orchestrators/guides/hardware-reference` — **this link is broken** (see Category 8). The link path does not match the docs.json entry. Reported under 8.1.

### 4.6 — Out-of-scope is clear
**PASS**

The comparison table (lines 89–122) implicitly scopes out custom configurations, split orchestrator/transcoder, advanced pricing, and AI pipelines — all routed to the Setup Guide.

### 4.7 — Information type per section is correct
**PASS** (structural + procedural + evaluative sections all appropriate for an `orient` purpose)

- "Choose your path" → structural + evaluative: permitted for `orient`
- "What you will need" → factual: permitted as secondary for `orient`
- "Quickstart vs Setup guide" → evaluative: permitted for `orient`
- "After the quickstart" → structural: permitted for `orient`

### 4.8 — No content duplication from adjacent sections
**PASS** — no duplicated content detected between this page and its nav neighbours.

### 4.9 — Section orientation page present
**N/A** — this check applies at the section level, not per-page.

### 4.10 — Cross-tab links at journey intersections
**INFO** — no cross-tab links present. This is a tab-level check (not per-page), but noted: a first-time orchestrator may benefit from a link to the About tab (economics overview) or Delegators tab (delegation context). Low priority for this page's scope.

---

## Category 5 — Layout, Components & Template

### 5.1 — Correct template for pageType + pageVariant
**NOT-TESTED** — `component-layout-decisions.mdx` was not read in this session. No template violation can be confirmed without it. Using the component matrix quick reference from checks.mdx §5 as a proxy.

Per the quick-reference matrix in checks.mdx:
- If `navigation`: required sections = portal/routing; preferred = Card, CardGroup.
- If `instruction` + `quickstart`: required sections = Prerequisites, Steps, Next Steps; preferred = Steps, Step, CodeGroup, Tip, Warning, Check.

The page includes CardGroup/Card, a StyledTable, and a Note. If `instruction/quickstart`, a Steps component and procedural steps are required — absent. If `navigation`, the current structure is closer to appropriate.

**Blocking Decision dependency** — template verdict deferred until pageType is resolved.

### 5.2 — Required sections present
**CONDITIONAL FAIL** (if `instruction/quickstart`)

No Steps component, no explicit step sequence, no "Next Steps" section using the correct component. The `After the quickstart` cards function as next steps but are not formatted with a Steps/Step pattern.

If reclassified as `navigation`, no required section violation.

### 5.3 — Only approved components used
**NOT-TESTED** — `docs-guide/catalog/components-catalog.mdx` not read. Cannot confirm component approval without it.

Flagging for review: `StyledTable`, `TableRow`, `TableCell`, `CustomDivider` are custom JSX imports — not standard Mintlify components. Their approval status requires catalog verification.

### 5.4 — Avoided components absent
**PASS** — no TODO/TBD placeholders or `Coming Soon` text in rendered content (the REVIEW flag at line 26 is a comment, not rendered).

### 5.5 — Information type → component mapping
**PASS** — conceptual/structural content uses prose + cards + tables. No procedural content using the wrong component type.

### 5.6 — MDX renders clean
**NOT-TESTED** — render validation requires live environment. No obvious JSX errors visible on inspection.

### 5.7 — No old-schema frontmatter
**FAIL** — `pageType: overview` is an old-schema value. Addressed in 1.2.

### 5.8 — CSS uses custom properties only
**N/A** — no inline CSS detected.

### 5.9 — Generated file banners intact
**N/A** — no generated file banner present; this is not a generated file.

### 5.10 — Component naming/import conventions
**INFO**

Line 28: `import { StyledTable, TableRow, TableCell } from '/snippets/components/wrappers/tables/Tables.jsx'`
Line 29: `import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'`

PascalCase naming is correct. Import paths use absolute `/snippets/` prefix — consistent with project conventions observed in other files. No issue visible without catalog read.

---

## Category 6 — Veracity & Factual Accuracy

### 6.1 — Every factual claim citable
**NOT-TESTED**

Specific factual claims in the page:

| Line | Claim | Type | Status |
|------|-------|------|--------|
| 39 | "Docker in under 30 minutes" | evaluative/procedural | NOT-TESTED — timing claim requires live execution |
| 39 | "Requires an NVIDIA GPU" | factual | NOT-TESTED — aligns with known go-livepeer requirements but not verified against current docs |
| 41 | "No staking, no activation — just install and connect" | factual | NOT-TESTED — pool worker requirement description |
| 61 | "GTX 1060+ for transcoding, RTX 3090+ for AI" | factual/technical | NOT-TESTED — VRAM/GPU model requirements need verification against go-livepeer current requirements |
| 65 | "Linux recommended. macOS/Windows for development only" | factual | NOT-TESTED |
| 74 | "ETH and LPT on Arbitrum One" | factual | NOT-TESTED — chain requirement |
| 78 | "8935 TCP open to the public internet" | factual | NOT-TESTED — port requirement |
| 115 | "~30 minutes" | evaluative | NOT-TESTED — timing claim |
| 115 | "~1–2 hours" | evaluative | NOT-TESTED — timing claim |

### 6.2 — Code/commands tested
**N/A** — no code blocks or CLI commands on this page.

### 6.3 — No deprecated API usage
**N/A** — no API endpoints or SDK methods on this page.

### 6.4 — Numbers are real
**NOT-TESTED**

GPU model thresholds (GTX 1060, RTX 3090) require source verification against current go-livepeer documentation. Time estimates (30 minutes, 1–2 hours) are evaluative and should be labelled as approximate.

### 6.5 — REVIEW flags for unverified claims
**FAIL**

Line 26 contains: `{/* REVIEW: THIS SHOULD NOT BE IN QUICKSTART - BE VERBOSE ABOUT THE EASIEST SETUP PATH FOR QUICKSTART. */}`

This is an open structural REVIEW flag. It signals that the page's scope itself is under question, not just individual claims. This flag must be resolved before the page can progress.

### 6.6 — `veracityStatus` honest
**FAIL** — field absent. Given the open REVIEW flag and NOT-TESTED factual claims, the honest value is `unverified`.

### 6.7 — Authoritative vs AI-generated glossary
**N/A** — no glossary-sourced content on this page.

### 6.8 — Source staleness check
**INFO**

GPU model recommendations (GTX 1060+, RTX 3090+) are medium-staleness-risk — go-livepeer hardware requirements evolve with software releases. Should be linked to `hardware-reference` page or sourced from current go-livepeer docs. The hardware-reference link at line 85 is broken (see Cat 8).

### 6.9 — No open-ended research tasks
**FAIL**

Line 26 REVIEW flag is an open-ended scope question without a named next step or owner. Must be resolved or assigned.

---

## Category 7 — Navigation & Information Architecture

### 7.1 — Page exists in docs.json
**PASS**

`v2/orchestrators/quickstart/guide` confirmed at docs.json line 2850.

### 7.2 — Navigation matches file system
**PASS** — file exists at `v2/orchestrators/quickstart/guide.mdx`.

### 7.3 — Tab entry portal routes to all sections
**N/A** — this is a section check, not per-page.

### 7.4 — No structural orphans
**PASS** — page is reachable via the Quickstart group in the Orchestrators tab.

### 7.5 — Audience journey complete
**PASS** — this page is the entry point to the quickstart section and routes correctly to the first substantive page (video-transcoding).

### 7.6 — Cross-tab graduation paths exist
**INFO** — no cross-tab links present. Not a per-page requirement (tab-level check), but the `After the quickstart` section could benefit from a cross-tab link to the Delegators tab (for new operators who need to understand staking) or About tab (for economics context).

### 7.7 — File in correct lane
**PASS** — file is in `v2/orchestrators/quickstart/`, a publishable lane.

### 7.8 — File naming conventions
**PASS** — `guide.mdx` has no prefix. A navigation/orientation file at the start of a section does not require a prefix per convention (compare: `portal.mdx`, `navigator.mdx`).

### 7.9 — `_workspace/` TTL compliance
**N/A** — publishable lane file.

---

## Category 8 — Links & Rendering

### 8.1 — All internal links resolve

Link inventory from guide.mdx:

| Line | Link text | Target path | In docs.json? | Status |
|------|-----------|-------------|---------------|--------|
| 38 | Video Transcoding (card) | `/v2/orchestrators/quickstart/video-transcoding` | Yes (line 2851) | PASS |
| 41 | Join a Pool (card) | `/v2/orchestrators/guides/setup-paths/join-a-pool` | **No** | **FAIL** |
| 47 | AI Workloads Guide | `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | **No** | **FAIL** |
| 85 | Hardware Reference | `/v2/orchestrators/guides/feasibility-and-hardware/hardware-reference` | **No** | **FAIL** |
| 124 | Setup Guide | `/v2/orchestrators/setup/guide` | Yes (line 2860) | PASS |
| 133 | Add AI Workloads (card) | `/v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | **No** | **FAIL** |
| 136 | Optimise Earnings (card) | `/v2/orchestrators/guides/staking-and-rewards/earnings` | **No** | **FAIL** |
| 139 | Set Up Monitoring (card) | `/v2/orchestrators/setup/r-monitor` | Yes (line 2866) | PASS |
| 142 | Attract Delegates (card) | `/v2/orchestrators/guides/staking-and-rewards/attracting-delegates` | **No** | **FAIL** |

**6 broken internal links confirmed.**

**Fixes — exact replacement paths from docs.json:**

1. **Line 41** — `setup-paths/join-a-pool` does not exist. The correct path per docs.json line 2889 is `v2/orchestrators/guides/deployment-details/join-a-pool`.
   Fix: `href="/v2/orchestrators/guides/deployment-details/join-a-pool"`

2. **Line 47 + 133** — `workloads-and-ai/ai-workloads-guide` does not exist. The closest match in docs.json (line 2896) is `v2/orchestrators/guides/ai-and-job-workloads/workload-options`. However, `ai-workloads-guide` is a specific page title — it may be a page not yet added to docs.json, or it may be the wrong slug. Verify against the actual file system.
   Provisional fix: `href="/v2/orchestrators/guides/ai-and-job-workloads/workload-options"` — or add `ai-workloads-guide` to docs.json if the file exists.

3. **Line 85** — `feasibility-and-hardware/hardware-reference` does not exist in docs.json. No matching path found. The page either does not exist or is not yet in nav.
   Fix: Verify file existence and add to docs.json, or link to `v2/orchestrators/setup/rcs-requirements` (docs.json line 2861) as the closest existing substitute.

4. **Line 136** — `staking-and-rewards/earnings` does not exist. The correct path per docs.json line 2910 is `v2/orchestrators/guides/staking-and-rewards/earning-model`.
   Fix: `href="/v2/orchestrators/guides/staking-and-rewards/earning-model"`

5. **Line 142** — `staking-and-rewards/attracting-delegates` does not exist in docs.json. No matching path found. The page either does not exist or is not yet in nav.
   Fix: Verify file existence and add to docs.json, or remove the card until the page is published.

### 8.2 — All external links live
**N/A** — no external links on this page.

### 8.3 — All snippet imports resolve
**NOT-TESTED**

Line 28: `import { StyledTable, TableRow, TableCell } from '/snippets/components/wrappers/tables/Tables.jsx'`
Line 29: `import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'`

These paths require live file system verification. Based on project conventions they are likely valid, but NOT-TESTED.

### 8.4 — All images load
**N/A** — no images on this page (OG image is metadata, not rendered content).

### 8.5 — Page renders without error
**NOT-TESTED** — requires live Mintlify preview.

### 8.6 — No TODO/TBD/Coming Soon in published content
**FAIL**

Line 47 (Note component): `**AI quickstart coming soon.**` — a `Coming Soon` placeholder in published content. Per checks.mdx §8.6, this belongs in `_workspace/`, not in publishable pages.

Additionally, the REVIEW comment at line 26 is not rendered but signals unresolved scope.

**Fix:** Either remove the `Coming Soon` note and omit the AI path until the page exists, or replace with a concrete link to the AI inference operations page (`v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations`, docs.json line 2898).

---

## Category 9 — Process & Governance

### 9.1 — Human sign-off recorded
**NOT-TESTED** — sign-off records are not stored in the page file. Requires checking decision registry.

### 9.2 — All consuming decisions in registry
**NOT-TESTED** — decision registry not read in this session.

### 9.3 — Gate prerequisites met
**INFO**

Per CLAUDE.md current project state: Orchestrators tab IA is in "Draft only" status. No gate has been formally passed. The page is in the active tab, not in `_workspace/` — this is appropriate for a draft under active development.

### 9.4 — Phase ordering respected
**INFO** — cannot verify without checking phase logs.

### 9.5 — Findings gathered before fixes
**N/A** — this is a findings report.

### 9.6 — Feedback routed
**N/A** — will apply when fixes are actioned.

---

## Banned Construction Scan

**Scope:** all visible text including body prose, headings, frontmatter description, Note content, card descriptions, table cells, and component props.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| 5–6 | `Choose your quickstart path — video transcoding, AI inference, or join a pool — and get your first orchestrator node running.` | `and get your first` — uses `get` not `can/may` | none | No |
| 31 | `The quickstart gets you from zero to a working orchestrator node as fast as possible.` | no modal | none | No |
| 38–39 | `The default path. Run a transcoding orchestrator with Docker in under 30 minutes. Requires an NVIDIA GPU.` | no modal | none | No |
| 41–43 | `Contribute your GPU to an existing orchestrator pool. No staking, no activation — just install and connect.` | `No staking, no activation` — `not [X]` adjacent | evaluative framing | BORDERLINE — two negative statements used to describe scope elimination. Not a direct value claim, but worth review. |
| 47–48 | `To add AI inference pipelines to your node today, complete the video transcoding quickstart first, then follow the [AI Workloads Guide]...` | `to add...complete...then follow` — procedural imperatives | procedural | No |
| 61 | `NVIDIA with NVENC support (GTX 1060+ for transcoding, RTX 3090+ for AI)` | no modal | factual | No |
| 65 | `Linux recommended. macOS/Windows for development only.` | no modal | factual | No |
| 85 | `For detailed hardware guidance, see [Hardware Reference].` | `For` construction — acceptable linking prose | none | No |
| 99 | `First working node, fast` | no modal | none | No |
| 100 | `Production-ready deployment` | no modal | none | No |
| 104 | `Docker only` | no modal | none | No |
| 105 | `Docker, binary, or source` | no modal | none | No |
| 119 | `First-time operators, evaluation` | no modal | none | No |
| 120 | `Production, custom configurations` | no modal | none | No |
| 124 | `If you need more control — custom binary installs, split orchestrator/transcoder, advanced pricing, or AI pipelines — use the [Setup Guide] instead.` | `If you need` | conditional caveat | BORDERLINE — this is a `if [condition]` construction in body prose. Per checks.mdx §2.4, `if [condition]` in body prose should be resolved by stating the threshold directly. However, this is a decision-routing sentence, not a value claim. Recommend flagging for human review. |
| 130 | `Once your node is running and you have received your first job:` | `once [condition]` | conditional caveat | BORDERLINE — functionally equivalent to `if [condition]`. Structurally acceptable as a card-group lead-in but violates the spirit of the rule. Fix: `After your first job:` or `Node running: next steps:` |
| 133–134 | `Add AI inference pipelines alongside transcoding.` | no modal | none | No |
| 136–137 | `Understand your revenue streams and tune your parameters.` | no modal | none | No |
| 139–140 | `Enable Prometheus metrics and track node health.` | no modal | none | No |
| 142–143 | `Increase your stake and job selection probability.` | no modal | none | No |

**Summary of flagged constructions:**
- Line 41: BORDERLINE `not [X]` pattern — review
- Line 124: BORDERLINE `if [condition]` — review; low severity, structural routing sentence
- Line 130: BORDERLINE `once [condition]` — minor; fix recommended

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Choose your path | 3 | 2 | 3 | 4 | 4 | 16/25 | FAIL |
| What you will need | 3 | 2 | 3 | 4 | 3 | 15/25 | FAIL |
| Quickstart vs Setup guide | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| After the quickstart | 3 | 2 | 2 | 4 | 3 | 14/25 | FAIL |

**Proposed replacements (≥20/25):**

| Current | Proposed | Est. Score |
|---------|----------|------------|
| Choose your path | `Quickstart Paths` | 21/25 |
| What you will need | `Prerequisites` | 22/25 |
| Quickstart vs Setup guide | `Quickstart Scope` | 21/25 |
| After the quickstart | `After First Run` | 20/25 |

Note on `Prerequisites`: listed in the "OK" tier per checks.mdx §3.2 (not banned, not "Avoid"). Acceptable.

Note on `Quickstart Scope`: names the governing concept (what the quickstart covers and excludes) without contrast-label construction. Scores well on Precision and Stability.

---

## Spelling/Typo Check

Scan of all visible text — headings, prose, table cells, card descriptions, Note content:

- `sidebarTitle: Overview` — capital O, standard
- `Orchestrator Quickstart` — standard
- All technical terms: NVIDIA, NVENC, Docker, Docker Engine, Arbitrum One, Prometheus — appear correctly cased
- `go-livepeer` — consistent hyphenation
- `GPU` — uppercase consistent throughout
- `macOS/Windows` — correct casing
- `LPT` and `ETH` — uppercase consistent

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `overview` (current) / `navigation` (proposed)? | Notes |
|-----------|-------|------------------------------------------------------------------|-------|
| `CardGroup` | Yes | Appropriate for both navigation and instruction/quickstart | PASS |
| `Card` | Yes | Appropriate for both | PASS |
| `Note` | Yes | Appropriate for concept/guide; caution for navigation (content belongs in main flow) | INFO — the Note at lines 46–48 contains a `Coming Soon` item (8.6 fail) |
| `StyledTable` | Yes | NOT-TESTED — custom component; catalog not read | NOT-TESTED |
| `TableRow` | Yes | NOT-TESTED | NOT-TESTED |
| `TableCell` | Yes | NOT-TESTED | NOT-TESTED |
| `CustomDivider` | Yes | NOT-TESTED | NOT-TESTED |

No standard Mintlify components are used for procedural content (Steps, Step, CodeGroup) — consistent with the page's orientation function but would be required if reclassified as `instruction/quickstart`.

---

## Cross-Category Connections

```
Root Cause 1: pageType: overview is a deprecated alias
Affects: Cat 1.2 + Cat 5.7 + Cat 5.1 + Cat 5.2
Fix: Migrate to pageType: instruction + pageVariant: quickstart OR pageType: navigation.
Decision required first — see Blocking Decisions.
```

```
Root Cause 2: 6 broken internal link targets
Affects: Cat 8.1 + Cat 4.5 (hardware-reference link in prerequisites section)
Fix: See Cat 8.1 fix table for exact replacement paths. 4 paths need verification against file system; 2 paths have confirmed docs.json equivalents.
```

```
Root Cause 3: missing required frontmatter fields (purpose, complexity, lifecycleStage, veracityStatus)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 6.6
Fix: Add 4 fields per the fix block in Cat 1.1.
```

```
Root Cause 4: open REVIEW flag at line 26 (scope unresolved)
Affects: Cat 1.8 (status: current invalid) + Cat 4.1 (page scope uncertain) + Cat 6.5 + Cat 6.9
Fix: Resolve scope decision (see Blocking Decisions), then remove REVIEW flag and update status/veracityStatus.
```

```
Root Cause 5: Coming Soon content in published page
Affects: Cat 8.6 + Cat 5.4
Fix: Remove Note containing "AI quickstart coming soon" or replace with link to existing AI page. See Cat 8.6 fix.
```

---

## Blocking Decisions

**Blocking Decision 1: Page scope — navigation hub or verbose single-path quickstart?**

The open REVIEW flag at line 26 states: `THIS SHOULD NOT BE IN QUICKSTART - BE VERBOSE ABOUT THE EASIEST SETUP PATH FOR QUICKSTART.`

```
Blocking Decision: Is this page a routing/navigation hub (orients the reader and routes to paths) OR should it be rewritten as a verbose single-path quickstart for the simplest case?
Options:
  [A] Keep as navigation hub (current structure — choose a path, prerequisites summary, comparison)
  [B] Rewrite as verbose single-path quickstart for video transcoding (Docker, NVIDIA GPU) — move choice/comparison to a separate entry page
If A: Correct pageType to navigation. Remove the REVIEW flag. Add missing frontmatter. Fix links. Fix headings. The Coming Soon note is the only content issue beyond structural corrections.
If B: Page brief required before rewrite. pageType becomes instruction + pageVariant: quickstart. All current content except the prerequisites table is superseded. A separate navigation/entry page may be needed.
```

Decision owner: Alison. This finding blocks pageType classification, template validation (Cat 5), and the heading score for "Quickstart vs Setup guide" which only applies if the page remains a hub.

---

## Summary

**Verdict: NEEDS WORK (blocking items present)**

`v2/orchestrators/quickstart/guide.mdx` has 4 categories of blocking issues:

1. **6 broken internal links** (Cat 8.1) — four card links and two prose links point to paths that do not exist in docs.json. Two have confirmed replacements; four require file system verification.
2. **Missing required frontmatter** (Cat 1.1) — `purpose`, `complexity`, `lifecycleStage`, and `veracityStatus` are all absent.
3. **Deprecated pageType** (Cat 1.2) — `overview` is an old 12-type alias; migration requires a scope decision (Blocking Decision 1).
4. **Open REVIEW flag + Coming Soon content** (Cat 6.5, Cat 8.6) — the structural scope of the page is explicitly flagged as unresolved; a `Coming Soon` notice appears in published content.

All four heading scores fail the ≥20/25 threshold, and `keywords` are generic. These are fixable independently of the blocking decision. Voice, UK English, banned words, paragraph discipline, and copy quality are all clean — no issues in Category 2.
