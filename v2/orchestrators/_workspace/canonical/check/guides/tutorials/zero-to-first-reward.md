# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2952–2961

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Zero to First Reward` | PASS | Clear, outcome-anchored |
| `sidebarTitle` | Yes | `Zero to Reward` | PASS | Concise |
| `description` | Yes | `End-to-end tutorial: install go-livepeer, configure video transcoding, fund and stake LPT, activate on the Livepeer network, and claim a first LPT reward.` | PASS | Subject-first, 151 chars |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | ABSENT | — | FAIL | Required field missing |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | Yes | `[livepeer, orchestrator, tutorial, reward, lpt, staking, activate, arbitrum]` | FAIL | `livepeer`, `orchestrator`, `tutorial` are generic. `reward`, `lpt`, `staking`, `activate`, `arbitrum` are better but still broad |
| `industry` | ABSENT | — | FAIL | Required field missing (P41) |
| `niche` | ABSENT | — | FAIL | Required field missing (P41) |
| OG image block | Yes | 5 fields present | PASS | Correct path |

**Required field count:** 5/10. Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is valid |
| 1.3 | `pageVariant` valid if present | N/A — not present; no deprecated migration required | |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Page has 4 `FACT CHECK` inline comments and time-sensitive on-chain data (LPT stake thresholds, round timing). `status: current` without `veracityStatus` is incoherent per checks.mdx §1.8. Correct value: `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent — required (P41). Proposed: `industry: [technical, economics]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent — required (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | Subject-first; 151 chars; no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` field quality | FAIL | Improve with searcher-intent specificity. Proposed: `run livepeer orchestrator mainnet`, `activate livepeer node arbitrum`, `claim first lpt reward`, `stake lpt orchestrator tutorial`, `livepeer video node first reward` — confirm before applying |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)
Candidates reviewed: `staking` — not a US-only spelling. `stabilize` — not present. No `-ize`, `-or` (color/colour), `-er` (center/centre) US endings found.
Result: PASS.

### Banned words scan (check 2.2)

Candidates considered for `effectively`, `essentially`, `basically`, `meaningful`, `significant` (intensifier), `various`, `several`, `obviously`, `clearly`:
- Line 38: "By the end, the orchestrator node is running on Arbitrum One mainnet" — no banned words.
- Line 280: "Active-set entry starts at the next round boundary. The node becomes active when its total stake is already above the current 100th orchestrator at that boundary." — no banned words.
- Line 300: "Livepeer distributes LPT inflation to active orchestrators once per round (approximately every 22 hours)" — `approximately` is not a banned word.
- Scanning all prose: no instances of any banned word found.

Result: PASS.

### Banned phrases scan (check 2.3)
Full scan:
- No "This section covers", "This page covers/explains", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on"/"etc.", "rather than", "what it takes", "not just X", "can generate"/"may produce" in value claims.
- Line 208: "This is the waiting step." — not a banned phrase; it's a pragmatic label for the funding step.
Result: PASS.

### Banned constructions scan (check 2.4)

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 33 | "Follow this path when the goal is straightforward: start a production video orchestrator, enter the active set, and claim a first LPT reward." | `when` (conditional) | Procedural framing — acceptable conditional | No |
| 33 | "AI pipelines, dual mode, and pool joining build on this baseline." | — | Factual statement | No |
| 82 | "Check the current threshold at [Livepeer Explorer]..." | — | Procedural instruction | No |
| 88 | "Acquiring LPT on Arbitrum One usually takes hours because exchange support and bridge confirmation timing vary." | — | Factual caveat | No |
| 88 | "Start once LPT is already in the wallet, or reserve that waiting time up front." | — | Procedural instruction | No |
| 205 | "The active set is the top 100 orchestrators by total stake." | — | Factual | No |
| 241 | "Setting 0% attracts more delegation; setting 100% keeps all inflation yourself." | — | Factual contrast — not a banned construction | No |
| 280 | "The node becomes active when its total stake is already above the current 100th orchestrator at that boundary." | `when` | Conditional threshold — threshold is stated directly | No |
| 285 | "Use Explorer to watch your ranking and add more delegated LPT whenever the node stays below the cutoff." | `whenever` | Procedural conditional — directly actionable | No |
| 300 | "go-livepeer automatically calls `Reward()` at round initialisation by default." | — | Factual | No |
| 306 | "Confirm -reward=false is NOT in the command - if absent, auto-reward is on" | `not [X]`, `if absent` | `not [X]`: the phrasing is a code comment explaining a negative check on a CLI flag — procedural not a value statement. `if absent`: conditional caveat in procedural context | No |
| 341 | "ETH fee income is separate and arrives as gateways route transcoding jobs to the node." | — | Factual | No |
| 346 | "Fee income scales with job volume, while reward size scales with stake." | — | Factual | No |

No `not [X]` as primary value statement, no `can/may [verb]` in value claims, no `This page [verb]` self-reference.
Line 306: the `-reward=false is NOT in the command` phrasing is borderline — the `NOT` is in a code comment (`# Confirm -reward=false is NOT in the command`) flagged as a negative check. Not a prose value statement. No automatic FAIL.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | No instances found |
| 2.3 | Zero banned phrases | PASS | No instances found |
| 2.4 | Zero banned constructions | PASS | No violations. Line 306 code comment BORDERLINE — see above |
| 2.5 | Opening order correct | PASS | Tip opens with concrete path description. Body opens with outcome statement ("By the end...") |
| 2.6 | Paragraph discipline | PASS | Sections focused; most paragraphs lead with fact |
| 2.7 | Audience register correct | PASS | Peer-technical tone. Assumes familiarity with Docker and blockchain basics |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | PASS | Reward income formula is explicit; fee income relationship is stated directly |
| 2.10 | No hedging openers | PASS | Opens with outcome, not caveat |
| 2.11 | Terminology locked and consistent | PASS | `LPT`, `active set`, `reward cut`, `fee cut`, `Arbitrum One`, `livepeer_cli` used consistently |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related pages` heading is fully exempt from all checks in this category (P16, checks.mdx §3.1).

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Prerequisites | 5 | 3 | 5 | 5 | 5 | 23/25 |
| Step 1: Install go-livepeer | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Step 2: Configure the node | 4 | 3 | 5 | 4 | 5 | 21/25 |
| Step 3: Fund the wallet | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Step 4: Stake LPT and activate | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Step 5: Verify on Livepeer Explorer | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Step 6: Claim the first reward | 5 | 4 | 5 | 5 | 4 | 23/25 |
| What happened | 3 | 2 | 4 | 3 | 5 | 17/25 |

**Heading failing ≥20 threshold:** "What happened" (17/25).

"Step 2: Configure the node" also relatively generic (21/25) — not a fail but could be "Step 2: Configure GPU and Pricing" (estimated 23/25).
"What happened" pattern is consistent with the other tutorials but still fails the threshold. Proposed: `Full Orchestrator Lifecycle` or `Activation to First Reward` (22/25 estimated).

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "What happened" = 17/25 |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms. `Prerequisites` is OK tier |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable in isolation |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | `Zero to First Reward` — 4 words, outcome-anchored |
| 3.7 | Sounds like expert editorial choice | FAIL | "What happened" fails the expert test |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

### Spelling/Typo Check

All visible text scanned including CustomDivider middleText props: "Prerequisites", "Step 1: Install", "Step 2: Configure", "Step 3: Fund the Wallet", "Step 4: Activate", "Step 5: Verify on Explorer", "Step 6: First Reward", "What Just Happened".
- StyledStep title props scanned for em-dashes: "Pull the Docker image", "Create persistent data volume", "Identify your GPU device ID", "Start the node for the first time (key generation)", "Note your orchestrator Ethereum address", "Open livepeer_cli", "Activate as an orchestrator", "Verify activation in logs" — no em-dashes (P48).
- Body prose, table cells: no typos found.
- Line 109: "e.g. `Livepeer Node Version: v0.8.9`" — the version `v0.8.9` is an example string; not a live factual claim requiring sourcing, but may be stale (see Category 6).

No typos found.

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: go from zero to an active orchestrator claiming its first LPT reward |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator install, configure, fund, activate, and claim a first LPT reward on mainnet." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Positioned after `byoc-cpu-smoke-test` (line 2955), before `ai-earning-quickstart` (line 2957) in docs.json. Sequence: smoke test → zero-to-reward → AI earning. Knowledge gap: page is self-contained; prerequisite table lists all requirements |
| 4.4 | No dead ends | PASS | Related Pages links to `add-ai-to-video-node`, `ai-earning-quickstart`, `earning-model`, `reward-call-tuning` |
| 4.5 | Prerequisites stated or linked | PASS | Explicit prerequisite table with hardware, software, network, and financial requirements. Warning about LPT acquisition timing |
| 4.6 | Out-of-scope is clear | PASS | Tip explicitly scopes: "AI pipelines, dual mode, and pool joining build on this baseline." |
| 4.7 | Information type per section is correct | PASS | Procedural steps dominate. Factual notes on round timing and active-set mechanics correctly placed as Note blocks |
| 4.8 | No content duplication from adjacent sections | PASS | No material duplicated from setup guide; this is a streamlined tutorial path |
| 4.9 | Section orientation page present | N/A — section-level check | |
| 4.10 | Cross-tab links at journey intersections | FAIL | No cross-tab links. The LPT acquisition step (Step 3) is directly relevant to the Delegators tab. The reward formula mentions delegation mechanics but links only within Orchestrators tab |

**Category 4 verdict: FAIL** — 1 check fails: 4.10

---

## Category 5 — LAYOUT & COMPONENTS

### Component Matrix

| Component | Used? | Appropriate for `tutorial`? | Notes |
|-----------|-------|----------------------------|-------|
| `CustomDivider` | Yes | Not in Preferred list | Decorative. NOT-TESTED against catalog |
| `StyledTable` / `TableRow` / `TableCell` | Yes | Not in Preferred list | Prerequisites table — functionally appropriate |
| `StyledSteps` / `StyledStep` | Yes | Preferred (`Steps`, `Step`) | Used in Steps 1, 2, 4 — correct pattern |
| `Note` | Yes | In Preferred list | Correct use |
| `Tip` | Yes | In Preferred list | Correct use |
| `Warning` | Yes | In Preferred list | Correct use — keystore backup warning |
| `CardGroup` / `Card` | Yes (Related Pages) | Not in Preferred list for `tutorial` | Navigation use only |
| `LinkArrow` | Imported, not used | — | Dead import |
| Code blocks | Yes | Preferred | Standard code blocks |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | PASS | Tutorial: Tip → Prerequisites → StyledSteps with sub-steps → What happened → Related Pages |
| 5.2 | Required sections present | PASS | Prerequisites: present. Steps 1–6 (with StyledStep sub-steps): present. Related Pages: present |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `StyledTable` not in Preferred list for `tutorial`. Catalog not read |
| 5.4 | Avoided components absent | PASS | No Coming Soon, no TODO/TBD in MDX components |
| 5.5 | Information type → component mapping correct | PASS | Procedural steps → StyledSteps/StyledStep. Prerequisites → StyledTable. Warnings → Warning block |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed. Dead import `LinkArrow` won't cause render error |
| 5.7 | No old-schema frontmatter | PASS | `pageType: tutorial` is valid |
| 5.8 | CSS uses custom properties only | N/A — no CSS | |
| 5.9 | Generated file banners intact | N/A — not generated | |
| 5.10 | Component naming/import conventions | FAIL | `LinkArrow` is imported but never used in body — dead import |

**Category 5 verdict: FAIL** — 1 confirmed fail: 5.10. 2 NOT-TESTED: 5.3, 5.6

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Location | Type | Status |
|-------|----------|------|--------|
| "4 to 8 hours" completion estimate | Line 38 | evaluative | NOT-TESTED |
| "The active set is the top 100 orchestrators by total stake" | Lines 82, 205 | factual | NOT-TESTED — protocol parameter, may change |
| "~0.01 ETH minimum for gas" | Line 78 | factual | NOT-TESTED — gas cost is volatile |
| "Bridge from L1 at bridge.arbitrum.io" (ETH) | Line 78 | structural | PASS — bridge.arbitrum.io is authoritative |
| "bridge.arbitrum.io... typical 10 to 15 minute confirmation" | Line 208 | evaluative | NOT-TESTED — bridge timing varies |
| Version example `v0.8.9` | Line 109 | factual | NOT-TESTED — may be stale |
| `livepeer_cli` menu option "Get node status" | Line 216 | procedural | NOT-TESTED — inline FACT CHECK flag present |
| `livepeer_cli` menu item "Invoke multi-step become an orchestrator" | Lines 238, 248 | procedural | NOT-TESTED — inline FACT CHECK flag present |
| "Confirmation takes 1–3 minutes" for activation tx | Line 246 | evaluative | NOT-TESTED |
| "Active-set entry starts at the next round boundary" | Line 280 | factual | NOT-TESTED — protocol timing |
| "Roughly 22 hours after activation" for next round | Line 280 | factual | NOT-TESTED — round duration is a protocol parameter |
| "Once per round (approximately every 22 hours)" for reward distribution | Line 300 | factual | NOT-TESTED — same parameter |
| `Called Reward() for round XXXXX` expected log | Line 319 | procedural | NOT-TESTED — log format tied to go-livepeer version |
| Reward income formula | Line 345 | factual/analytical | NOT-TESTED — formula components need verification |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | FAIL | 14 claims not tested. 2 explicit FACT CHECK inline comments. No source citations |
| 6.2 | Code/commands tested | NOT-TESTED | No evidence of execution. 2 explicit FACT CHECK flags |
| 6.3 | No deprecated API usage | NOT-TESTED | `livepeer_cli` menu options not verified against current release |
| 6.4 | Numbers are real | FAIL | `~0.01 ETH` gas estimate, `1–3 minutes` activation confirmation, `22 hours` round duration — not sourced. Round duration is on-chain verifiable via Arbitrum |
| 6.5 | REVIEW flags for unverified claims | PASS | 2 FACT CHECK comments on highest-risk procedural claims |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Given 14 NOT-TESTED claims, correct value is `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references | |
| 6.8 | Source staleness check | FAIL | `active set = top 100` is a protocol parameter that can change via governance. `22 hours` round duration is derived from on-chain `roundLength` parameter. `v0.8.9` version string in example output may be stale. `livepeer/go-livepeer:latest` tag volatility |
| 6.9 | No open-ended research tasks | FAIL | 2 FACT CHECK comments assign to Rick with no source and no concrete next step |

**Category 6 verdict: FAIL** — 5 checks fail: 6.1, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | PASS | Present at docs.json line 2956: `"v2/orchestrators/guides/tutorials/zero-to-first-reward"` |
| 7.2 | Navigation matches file system | PASS | File at correct path |
| 7.3 | Tab entry portal routes to all sections | N/A — section-level check | |
| 7.4 | No structural orphans | PASS | Reachable via Tutorials group |
| 7.5 | Audience journey complete | PASS | Self-contained end-to-end tutorial. Related Pages provides clear continuation paths |
| 7.6 | Cross-tab graduation paths exist | FAIL | No cross-tab links. Step 3 (Fund the wallet / LPT acquisition) intersects with Delegators tab. Reward income formula mentions delegation — no link to delegators/staking |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/tutorials/` — publishable |
| 7.8 | File naming conventions | PASS | Lowercase hyphenated, no problematic prefix |
| 7.9 | `_workspace/` TTL compliance | N/A — publishable page | |

**Category 7 verdict: FAIL** — 1 check fails: 7.6

---

## Category 8 — LINKS & RENDERING

### Internal link verification (docs.json checked — P47)

| Link href | docs.json confirmed? | Notes |
|-----------|---------------------|-------|
| `https://explorer.livepeer.org/orchestrators` (line 41) | External — NOT-TESTED | |
| `/v2/orchestrators/guides/tutorials/add-ai-to-video-node` | PASS — line 2958 | Confirmed |
| `/v2/orchestrators/guides/tutorials/ai-earning-quickstart` | PASS — line 2957 | Confirmed |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | PASS — line 2910 | Confirmed |
| `/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` | PASS — line 2924 | Confirmed |

Additional external links: `https://bridge.arbitrum.io` (line 78, 208), `https://explorer.livepeer.org` (multiple), `https://explorer.livepeer.org/orchestrators` — NOT-TESTED.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | All internal links resolve | PASS | All 4 internal links verified against docs.json |
| 8.2 | All external links live | NOT-TESTED | Explorer, bridge.arbitrum.io links not tested |
| 8.3 | All snippet imports resolve | PASS | 4 imports — follow established pattern. NOT-TESTED for runtime |
| 8.4 | All images load | N/A — no images in body | |
| 8.5 | Page renders without error | NOT-TESTED | Dead import `LinkArrow` — no expected render error |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | 2 `{/* FACT CHECK: ... */}` comments remain on a page with `status: current`. Additionally line 306 has an inline comment `# Confirm -reward=false is NOT in the command` in a code block — this is documentation of what to look for, not a TODO, so not flagged |

**Category 8 verdict: FAIL** — 1 fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off artefact |
| 9.2 | All consuming decisions in registry | FAIL | No decision registry entries for this page |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: Content Pass Open = No |
| 9.4 | Phase ordering respected | FAIL | 2 FACT CHECK flags open on a `status: current` page |
| 9.5 | Findings gathered before fixes | NOT-TESTED | |
| 9.6 | Feedback routed | NOT-TESTED | |

**Category 9 verdict: FAIL** — 4 checks fail: 9.1, 9.2, 9.3, 9.4

---

## Cross-Category Connections

**Root Cause 1: Missing required frontmatter fields**
Affects: Cat 1.1 + 1.4 + 1.6 + 1.7 + 1.8 + 1.9 + 1.10
Fix: Add `purpose: build`, `complexity: intermediate`, `lifecycleStage: setup`, `industry: [technical, economics]`, `niche: [protocol, infrastructure]`, `veracityStatus: unverified` to frontmatter. All proposed — confirm before applying.

**Root Cause 2: Open FACT CHECK items on a `status: current` page**
Affects: Cat 6.1 + 6.6 + 8.6 + 9.4
Fix: Either resolve the 2 FACT CHECK flags (Rick to confirm `livepeer_cli` menu options) or change `status` from `current` to `draft`. Do NOT set `veracityStatus: verified` while flags remain.

**Root Cause 3: Dead import**
Affects: Cat 5.10
Fix: Remove `import { LinkArrow } from '/snippets/components/elements/links/Links.jsx'`.

**Root Cause 4: Generic "What happened" heading**
Affects: Cat 3.1 + 3.7
Fix: Rename to `Full Orchestrator Lifecycle` (estimated 22/25). Verify no conflict on page — none found.

---

## Blocking Decisions

None required. Page scope and purpose are unambiguous.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks that fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 4.10, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 7.6, 8.6, 9.1, 9.2, 9.3, 9.4**

**23 checks fail. 5 NOT-TESTED (5.3, 5.6, 6.2, 6.3, 8.2).**

Voice and structure quality are strong. The page is the clearest end-to-end tutorial in the set — step logic, warnings, and outcome framing are all good. Failures follow the same pattern as the other tutorials: missing frontmatter, open veracity items, process governance. Protocol parameters (active set = top 100, round = 22h) need on-chain source verification.

---

## Prioritised Fix List

**F-01 — CRITICAL — Add missing required frontmatter fields**
Add to frontmatter block (all proposed — confirm before applying per P51):
```yaml
purpose: build
complexity: intermediate
lifecycleStage: setup
veracityStatus: unverified
industry:
  - technical
  - economics
niche:
  - protocol
  - infrastructure
```
Fixes: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

**F-02 — HIGH — Resolve FACT CHECK flags or change status to draft**
2 FACT CHECK flags open (lines 218, 248 — `livepeer_cli` menu options). Until resolved: change `status` from `current` to `draft`. Do not set `veracityStatus: verified` while flags remain.
Fixes: 6.1, 6.6, 8.6, 9.4

**F-03 — HIGH — Source or flag protocol parameters**
The following claims are factual but unverified against primary source:
- "The active set is the top 100 orchestrators" — verifiable on-chain via the Livepeer BondingManager contract `maxActiveOrchestrators` parameter on Arbitrum. Add `{/* REVIEW: confirm current maxActiveOrchestrators value via BondingManager contract on Arbitrum */}`.
- "approximately every 22 hours" round duration — derive from on-chain `roundLength` (blocks) × average block time. Add `{/* REVIEW: confirm current round duration — derived from BondingManager roundLength × Arbitrum block time */}`.
- `~0.01 ETH minimum for gas` — add `{/* REVIEW: gas cost for activation + reward calls — verify against current Arbitrum gas prices */}`.
Fixes: 6.4 (partial), 6.8 (partial)

**F-04 — MEDIUM — Remove dead import**
Delete: `import { LinkArrow } from '/snippets/components/elements/links/Links.jsx'`
Fixes: 5.10

**F-05 — MEDIUM — Rename "What happened" heading**
"What happened" (17/25) → `Full Orchestrator Lifecycle` (estimated 22/25). No conflict with existing headings.
Fixes: 3.1, 3.7

**F-06 — MEDIUM — Flag stale version example**
Line 109: `Livepeer Node Version: v0.8.9` — add `{/* REVIEW: example version string — update to match current release */}`.
Fixes: 6.8 (partial)

**F-07 — MEDIUM — Improve keywords**
Proposed:
```yaml
keywords:
  - run livepeer orchestrator mainnet
  - activate livepeer node arbitrum one
  - claim first lpt reward tutorial
  - stake lpt orchestrator active set
  - go-livepeer video transcoding setup
```
Confirm before applying.
Fixes: 1.13

**F-08 — LOW (INFO) — Add cross-tab link for LPT acquisition context**
Step 3 (Fund the wallet) discusses LPT acquisition and the active-set stake threshold. Add a Card in Related Pages linking to the Delegators tab or the `about` tab's staking mechanics page to support readers who need more context on LPT.
Fixes: 4.10, 7.6
