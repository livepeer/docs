# Per-Page Quality Check Report
## `v2/orchestrators/resources/faq.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2969)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `FAQ and Troubleshooting` | PASS | |
| `sidebarTitle` | Yes | `FAQ` | PASS | |
| `description` | Yes | `Answers to common orchestrator questions and step-by-step fixes for the most frequent errors — installation, networking, job routing, AI pipelines, and earnings.` | PASS | 157 chars; subject-first; contains em-dash |
| `pageType` | Yes | `reference` | PASS | Canonical 7-type value |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `faq` | FAIL | `faq` is not in the 15-value canonical set. Closest correct value: `reference`. See check 1.4. |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 9 values | PASS (partial) | See check 1.13 |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41) |
| `niche` | No | — | FAIL | Required (P41) |
| `veracityStatus` | No | — | FAIL | Required |
| `status` | Yes | `review` | INFO | Non-canonical value; valid values: `current`, `draft` |

**Required field count:** 7/10 required fields present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` not present; not required here since `pageType` is not deprecated |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `faq` is a deprecated alias. Correct value: `reference` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is non-canonical (valid: `current`, `draft`) — flag as INFO per P57 |
| 1.9 | `industry` valid | FAIL | Field absent (required per P41). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` valid | FAIL | Field absent (required per P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Contains em-dash (P30). Otherwise well-formed, subject-first, 157 chars, UK English. |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | FAIL | `livepeer`, `orchestrator`, `FAQ` are generic/title-synonyms. Stronger searcher-intent keywords needed. |

**Category 1 verdict:** FAIL — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)
Candidate scan — no US spelling patterns found. `behaviour` (line 677) spelled correctly. `behaviour` at line 677: correct UK form. PASS.

### Banned words scan (check 2.2)
Scanning all body prose:
- `significantly` — line 332: "price is **significantly** above the market rate" — BANNED word (`significant` as intensifier). FAIL.
- `effectively` — not found.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `various` — not found.
- `several` — not found.
- `obviously` — not found.
- `clearly` — not found.

### Banned phrases scan (check 2.3)
Scanning for all listed banned phrases:
- "This page covers" — line 56: "This page covers the most common errors orchestrators encounter and answers the questions that come up most often." — BANNED phrase. FAIL.
- "This section covers" — not found.
- "Understanding X is essential" — not found.
- "It is important to note" — not found.
- "As mentioned above" — not found.
- "and so on"/"etc." — not found.
- "rather than" — not found.
- "what it takes" — not found.
- "not just X" — not found.
- "can generate"/"may produce" in value claims — not found.

### Banned Construction Scan
| Line | Sentence | Pattern | Classification | Flag? |
|------|----------|---------|----------------|-------|
| 56 | "This page covers the most common errors..." | `This page [verb]` self-reference | Banned construction (check 2.4) + banned phrase (check 2.3) — belongs in 2.4 only per P56 | Yes — check 2.4 FAIL |
| 111 | "This can be caused by the `-maxSessions` flag being set too low, or by hitting the hardware NVENC/NVDEC session limit" | `can be caused` | Passive construction; not in value claim context | BORDERLINE — informational explanation, not a value claim |
| 127 | "consumer cards (GTX/RTX series) typically cap at 3–5 concurrent NVENC sessions" | — | No banned pattern | No |
| 336 | "livepeer.tools — this shows per-pixel pricing for active orchestrators" | — | No banned pattern | No |
| Description field | "...most frequent errors — installation, networking..." | Em-dash in description field | P30: em-dash in description | Flag in F-01 |

*Em-dashes tracked under P30 — see F-01.*

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | FAIL | `significantly` at line 332 |
| 2.3 | Zero banned phrases | PASS | "This page covers" is a banned construction (check 2.4), not a banned phrase per P56 |
| 2.4 | Zero banned constructions | FAIL | Line 56: `This page covers` self-reference opener |
| 2.5 | Opening order correct | FAIL | Page opens with "This page covers..." — self-reference before content |
| 2.6 | Paragraph discipline | PASS | Accordion entries use lead-fact structure correctly |
| 2.7 | Audience register correct | PASS | Technical peer register, correctly assumes orchestrator operator |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up" or "the network rewards you for" found |
| 2.9 | No passive value statements | PASS | Value claims are concrete and operational |
| 2.10 | No hedging openers | FAIL | Page opens with a self-description rather than content |
| 2.11 | Terminology locked and consistent | PASS | `pool worker` used and defined; `reward cut`/`fee cut` correct; `probabilistic micropayment` not used but `PM ticket` used consistently in the glossary context |

**Category 2 verdict:** FAIL — 4 checks fail: 2.2, 2.4, 2.5, 2.10

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Troubleshooting — Installation and GPU Detection` | 4 | 4 | 4 | 4 | 3 | 19/25 | Em-dash present (P30). Slightly verbose but clear. Fails 20-threshold by 1 point. |
| `Troubleshooting — Networking and Connectivity` | 4 | 4 | 4 | 4 | 3 | 19/25 | Em-dash present (P30). |
| `Troubleshooting — Not Receiving Jobs` | 5 | 4 | 5 | 5 | 4 | 23/25 | Em-dash present (P30). Strong heading despite dash. |
| `Troubleshooting — AI Pipeline Errors` | 5 | 4 | 5 | 5 | 4 | 23/25 | Em-dash present (P30). |
| `Troubleshooting — Earnings and Payments` | 4 | 4 | 4 | 4 | 3 | 19/25 | Em-dash present (P30). |
| `FAQ — General Questions` | 3 | 2 | 4 | 3 | 3 | 15/25 | Em-dash present (P30). "General Questions" is vague. Fails 20-threshold. |
| `Still Stuck?` | 3 | 3 | 3 | 4 | 5 | 18/25 | Question-form heading (check 3.1 failure per P63). Does not fail check 3.2. |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading ≥20/25 | FAIL | `Troubleshooting — Installation and GPU Detection` (19/25), `Troubleshooting — Networking and Connectivity` (19/25), `Troubleshooting — Earnings and Payments` (19/25), `FAQ — General Questions` (15/25), `Still Stuck?` (18/25) — 5 headings below threshold |
| 3.2 | No banned/weak standalone terms | PASS | No banned-tier terms. `General Questions` is weak but not in the banned list. |
| 3.3 | No `X vs Y` headings | PASS | None found |
| 3.4 | Domain-anchor rule applied | PASS | Domain noun present in all H2s |
| 3.5 | Heading names concept, not examples | PASS | Headings name symptom categories, not examples |
| 3.6 | Title well-formed | PASS | `FAQ and Troubleshooting` — acceptable compound title, concept-derived |
| 3.7 | Expert editorial choice | FAIL | `FAQ — General Questions` and `Still Stuck?` are generic/colloquial; `Still Stuck?` is a question-form heading that would not pass senior editorial review |

**Category 3 verdict:** FAIL — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves troubleshooting + FAQ for orchestrators — hybrid but coherent given `pageType: reference` |
| 4.2 | Intro paragraph test | FAIL | Lines 56–58 intro paragraph is pure self-description; deleting it loses nothing — the accordion sections communicate all value |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json line 2969: `faq` follows `community-pools` in Resources group. No explicit prev/next frontmatter required for Mintlify sidebar navigation |
| 4.4 | No dead ends | PASS | "Still Stuck?" section provides forward paths to Discord, Forum, GitHub |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisite context given per accordion (e.g., active set, port, RPC) |
| 4.6 | Out-of-scope is clear | PASS | Pool earnings section correctly scopes to pool operator, not go-livepeer |
| 4.7 | Information type per section correct | PASS | `purpose: reference` permits `factual, technical` — procedural troubleshooting entries are correct |
| 4.8 | No content duplication | PASS | No significant duplication within page; minor cross-reference to Networking section in `serviceAddr` accordion is appropriate |
| 4.9 | Section orientation page present | PASS | Resources section has a resources grouping in docs.json |
| 4.10 | Cross-tab links at journey intersections | INFO | No cross-tab links. Pool earnings entry could link to Delegators tab for staking context. Not a hard FAIL for this page type. |

**Category 4 verdict:** FAIL — 1 check fails: 4.2

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `pageType: reference` — accordion-grouped Q&A with CardGroup footer is appropriate |
| 5.2 | Required sections present | PASS | Page has content, navigation forward path, and escalation section |
| 5.3 | Only approved components used | NOT-TESTED | `AccordionGroup`, `Accordion`, `Note`, `Warning`, `CardGroup`, `Card`, `CustomDivider` — standard Mintlify components. Cannot confirm against approval file without reading `docs-guide/policies/component-layout-decisions.mdx` (per P22) |
| 5.4 | Avoided components absent | PASS | No tabs used for flat content; accordion appropriate for Q&A structure |
| 5.5 | Information type → component mapping correct | PASS | Procedural troubleshooting in Accordion is correct; CardGroup for escalation paths is appropriate |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute render without live system |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is non-canonical. Valid values: `current`, `draft`. `lastVerified` is a non-standard field (not in the 10 required fields) — INFO only |
| 5.8 | CSS uses custom properties only | NOT-TESTED | No inline CSS present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | `CustomDivider` imported from correct path |

**Category 5 verdict:** FAIL — 1 confirmed fail: 5.7

---

## Category 6 — VERACITY

### Veracity Claims Inventory
| Claim | Location | Type | Status |
|-------|----------|------|--------|
| NVIDIA driver minimum required by current go-livepeer release | Line 72 | technical/factual | NOT-TESTED — no version cited |
| NVENC/NVDEC session limit causes OrchestratorCapped | Line 111 | technical | Plausible; not REVIEW-flagged |
| Consumer cards (GTX/RTX series) cap at 3–5 concurrent NVENC sessions | Line 127 | factual | BORDERLINE — range may be stale; varies by model |
| Active set = top 100 by total LPT stake | Line 304 | factual | UNVERIFIED — HIGH staleness tier (P77: protocol-state figure) |
| Rounds are approximately 5,760 Ethereum blocks long (roughly 22–24 hours) | Line 653 | factual | UNVERIFIED — HIGH staleness tier (P77) |
| After activation, eligible at next round start | Line 653 | factual | UNVERIFIED — MEDIUM staleness |
| 1 LPT = 1,000,000,000,000,000,000 LPTU | Line 377 | factual | HIGH staleness (protocol-state, token precision) |
| Gas cost: reward call on Arbitrum, ETH balance check via arbiscan.io | Line 602 | factual | LOW staleness (tool reference, not a number) |
| Arbitrum One chain ID: `0xa4b1` (42161) | Line 278 | factual | PASS — chain IDs are stable |
| LPT threshold has historically ranged from a few hundred to multiple thousand LPT | Line 663 | factual | UNVERIFIED — HIGH staleness |
| rinkeby testnet reference | Line 576 | factual | STALE — Rinkeby is deprecated; Arbitrum Sepolia replaced it |
| `aiModels.json` price_per_unit example values (4200 wei, 180000000000000 wei) | Lines 464, 483 | technical | UNVERIFIED |
| Livepeer-verified model list URL: docs.livepeer.org/ai/pipelines/overview | Line 543 | structural | NOT-TESTED |
| `~/.lpData/arbitrum-one-mainnet/keystore` default path | Line 253 | technical | NOT-TESTED |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | FAIL | Active set size (top 100), round length (5760 blocks), LPTU conversion not cited |
| 6.2 | Code/commands tested | NOT-TESTED | Cannot test against live system |
| 6.3 | No deprecated API usage | FAIL | Line 576: `rinkeby` testnet reference is stale. Arbitrum Rinkeby is deprecated. |
| 6.4 | Numbers are real and sourced | FAIL | LPTU conversion (1e18), active set top-100, round length — uncited |
| 6.5 | REVIEW flags correct format | FAIL | TODO block (lines 30–52) uses `{/* TODO: ... */}` format, not `{/* REVIEW: [claim] — [source] */}`. Per P61, `{/* TODO */}` does not satisfy check 6.5 |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent; content contains unverified factual claims |
| 6.7 | N/A | N/A | Not a glossary page |
| 6.8 | Source staleness | FAIL | Rinkeby reference (line 576) is stale — deprecated network |
| 6.9 | No open-ended research tasks | FAIL | TODO block contains open-ended tasks without named sources or contacts |

**Category 6 verdict:** FAIL — 7 checks fail: 6.1, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2969: `"v2/orchestrators/resources/faq"` |
| 7.2 | Navigation matches file system | PASS | File at correct path |
| 7.3 | Tab entry portal routes to all sections | NOT-TESTED | Portal/navigator page routing not evaluated for this page |
| 7.4 | No structural orphans | PASS | Page is in docs.json and has internal cross-references |
| 7.5 | Audience journey complete | PASS | Page is a support resource, correctly positioned as last resort before Discord |
| 7.6 | Cross-tab graduation paths | INFO | No cross-tab links; pool worker earnings could point to delegators/staking context |
| 7.7 | File in correct lane | PASS | FAQ is in `resources/` — correct section for support reference |
| 7.8 | File naming conventions | PASS | `faq.mdx` — no `x-` prefix, not deprecated |
| 7.9 | `_workspace/` TTL compliance | N/A | Published file |

**Category 7 verdict:** PASS

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | Internal links resolve | PASS | `/v2/orchestrators/resources/faq#arbitrum-rpc-connection-failing--node-will-not-start` — anchor link to same page. `/v2/orchestrators/resources/faq` in community-guides: confirmed in docs.json. |
| 8.2 | External links live | NOT-TESTED | `https://explorer.livepeer.org`, `https://livepeer.tools`, `https://arbiscan.io`, `https://github.com/livepeer/go-livepeer/issues`, `https://docs.livepeer.org/ai/pipelines/overview`, `https://discord.gg/livepeer`, `https://forum.livepeer.org/c/transcoding` — not tested against live URLs |
| 8.3 | Snippet imports resolve | PASS | `CustomDivider` imported from `/snippets/components/elements/spacing/Divider.jsx` — path follows convention |
| 8.4 | Images load | N/A | No inline images |
| 8.5 | Page renders without error | NOT-TESTED |  |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | TODO block lines 30–52 is in published content (not hidden from render — JSX comments ARE visible in MDX processing context; TODO is in a `{/* ... */}` JSX comment which Mintlify does not render, but it constitutes an open task in published source) — see governance check 9.6 |

**Category 8 verdict:** FAIL — 1 confirmed fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded; TODO block explicitly lists items still needing human review |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Cannot verify without reading registry against this page's decisions |
| 9.3 | Gate prerequisites met | FAIL | `status: review`, missing `veracityStatus`, open TODO — page not past content pass gate |
| 9.4 | Phase ordering respected | FAIL | TODO block indicates authoring skill not yet applied, voice not yet converted |
| 9.5 | Findings gathered before fixes | N/A | This is a check report, not a fix pass |
| 9.6 | Feedback routed | FAIL | TODO block contains unrouted items (no named owner, no ticket reference) |

**Category 9 verdict:** FAIL — 4 checks fail: 9.1, 9.3, 9.4, 9.6

---

## Cross-Category Connections

**Root cause 1 — Missing taxonomy fields (1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10):** Six frontmatter fields are absent or incorrect. All trace to the page not having completed its taxonomy pass. Single fix: add `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`, and correct `purpose` to `reference`.

**Root cause 2 — Open TODO block (8.6, 9.1, 9.3, 9.4, 9.6, 6.5, 6.9):** The TODO block (lines 30–52) signals the page is in draft-review state. It drives failures in veracity governance, process, and rendering categories. The TODO block must be resolved before publication.

**Root cause 3 — Em-dashes throughout (1.11, 3.1, headings):** Em-dashes appear in the description field and all five H2 headings. This is a consistent style violation across the page. One pass to replace all `—` with `: ` or restructure headings resolves 1.11, contributes to 3.1 improvement.

**Root cause 4 — Self-reference opener (2.3/2.4, 2.5, 2.10, 4.2):** Lines 56–58 are a pure self-description paragraph. Deleting it resolves 2.4, 2.5, 2.10, and 4.2 simultaneously.

**Root cause 5 — Stale content (6.3, 6.8):** Rinkeby testnet reference (line 576) is a deprecated network. Needs replacement with Arbitrum Sepolia.

---

## Blocking Decisions

None. All failures have clear single-correct fixes.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Confirmed fail checks:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.2, 2.4, 2.5, 2.10, 3.1, 3.7, 4.2, 5.7, 6.1, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6 — **29 confirmed FAILs**
**NOT-TESTED checks:** 5.3, 5.6, 5.8, 6.2, 8.2, 8.5, 9.2
**BORDERLINE checks:** 6.1 (active set size — claim is plausible but uncited)

---

## Prioritised Fix List

**F-01 — CRITICAL — Replace em-dash in `description` field and all H2 headings**
In `description`: change `— installation, networking, job routing, AI pipelines, and earnings.` to `: installation, networking, job routing, AI pipelines, and earnings.`
In H2 headings: replace `Troubleshooting — [X]` with `Troubleshooting: [X]` pattern across all 5 H2s. E.g. `## Troubleshooting: Installation and GPU Detection`.
Apply same pattern to `## FAQ — General Questions` → `## FAQ: Common Questions`.
Fixes: 1.11, 3.1 (partial), F-related P30 violations

**F-02 — CRITICAL — Add missing frontmatter fields**
Add the following fields — confirm before applying:
- `purpose: reference`
- `complexity: intermediate`
- `lifecycleStage: troubleshoot`
- `veracityStatus: unverified`
- `industry: [technical, livepeer]`
- `niche: [infrastructure, protocol]`
Also change `status: review` to `status: draft`.
Fixes: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7

**F-03 — HIGH — Delete self-reference opener (lines 56–58)**
Delete: `This page covers the most common errors orchestrators encounter and answers the questions that come up most often. Find your symptom or question in the relevant section. Each entry is self-contained — you should be able to read one entry and resolve your issue without reading the rest.`
The accordion structure communicates page organisation without this meta-description. The sentence at line 58 (escalation paths pointer) can be retained as a standalone Note if desired.
Fixes: 2.4, 2.5, 2.10, 4.2

**F-04 — HIGH — Replace banned word `significantly` (line 332)**
Change: `If your price is significantly above the market rate`
To: `If your price exceeds the market rate`
(per P44: check proposed fix — `exceeds` contains no banned words or constructions)
Fixes: 2.2

**F-05 — HIGH — Replace stale Rinkeby testnet reference (line 576)**
Change: `Verify you are checking the correct network. go-livepeer operates on Arbitrum One. If you have connected to a testnet (\`rinkeby\`, \`arbitrum-one-rinkeby\`) your earnings will show on Explorer for that network only.`
To: `Verify you are checking the correct network. go-livepeer operates on Arbitrum One. If you have connected to a testnet (\`arbitrum-one-sepolia\`) your earnings will show on Explorer for that testnet only.`
Fixes: 6.3, 6.8

**F-06 — HIGH — Rename weak/question-form headings**
`## FAQ — General Questions` → `## FAQ: Common Questions` (after F-01 em-dash fix, further improve from `General Questions`)
`## Still Stuck?` → `## Escalation Paths` (removes question form, scores higher on Precision/Stability)
(per P44: `Escalation Paths` — no banned words, no banned constructions)
Fixes: 3.1 (partial), 3.7

**F-07 — HIGH — Add `{/* REVIEW: */}` flags for unverified protocol-state figures**
Add REVIEW flags to:
- Line 304: `{/* REVIEW: active set size (top 100) — verify current parameter on Livepeer smart contracts or Explorer */}`
- Line 377: `{/* REVIEW: LPTU conversion (1 LPT = 1e18 LPTU) — verify against LPT ERC-20 decimals on Arbitrum */}`
- Line 653: `{/* REVIEW: round length (5760 Ethereum L1 blocks, ~22–24 hours) — verify current protocol parameter */}`
Remove or convert the TODO block (lines 30–52) to proper `{/* REVIEW: */}` flags or remove entirely if items are resolved.
Fixes: 6.1, 6.4, 6.5, 6.9

**F-08 — MEDIUM — Improve keyword specificity**
Replace generic keywords `livepeer`, `orchestrator`, `FAQ` with searcher-intent terms, e.g.:
`livepeer orchestrator not receiving jobs`, `OrchestratorCapped error fix`, `go-livepeer port 8935 not reachable`, `livepeer reward call not working` — confirm before applying.
Fixes: 1.13
