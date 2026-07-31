# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2953–2960

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Add AI to a Video Node'` | PASS | Subject-first, clear |
| `sidebarTitle` | Yes | `'Add AI to Video'` | PASS | Concise |
| `description` | Yes | `'Add AI inference to an existing video orchestrator...'` | PASS | 115 chars, subject-first, no self-reference |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | No | — | FAIL | Required field absent |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 7 entries | FAIL | `livepeer`, `orchestrator`, `ai`, `tutorial` are generic/not searcher-intent (check 1.13) |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators path |
| `industry` | No | — | FAIL | Required — P41 |
| `niche` | No | — | FAIL | Required — P41 |
| `veracityStatus` | No | — | FAIL | Required per check 1.8; `status: current` without it is incoherent (P39) |

**Required field count:** 5/10 required frontmatter fields present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is a valid canonical value |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType` is not deprecated — no co-fix required (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: current` requires `veracityStatus: verified` (checks.mdx §1.8). Page has 3 open FACT CHECK comments — cannot be verified |
| 1.9 | `industry` valid if present | FAIL | Field absent — P41: required |
| 1.10 | `niche` valid if present | FAIL | Field absent — P41: required |
| 1.11 | `description` well-formed | PASS | 115 chars, subject-first, UK English, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` field quality | FAIL | `livepeer`, `orchestrator`, `ai`, `tutorial` are generic; `tutorial` is not a search term. Good entries: `dual mode`, `aiWorker`, `VRAM` |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13

---

## Category 2 — VOICE & COPY

**Banned word scan — all candidates considered:**

| Word | Present? | Verdict |
|---|---|---|
| `effectively` | No | PASS |
| `essentially` | No | PASS |
| `basically` | No | PASS |
| `meaningful` | No | PASS |
| `significant` | No | PASS |
| `real` (intensifier) | No | PASS |
| `various` | No | PASS |
| `several` | No | PASS |
| `obviously` | No | PASS |
| `clearly` | No | PASS |

**Banned phrase scan — all candidates considered:**

| Phrase | Present? | Verdict |
|---|---|---|
| "This section covers" | No | PASS |
| "This page covers/explains/walks you through" | No | PASS |
| "Understanding X is essential" | No | PASS |
| "It is important to note" | No | PASS |
| "As mentioned above" | No | PASS |
| "and so on" / "etc." | No | PASS |
| "rather than" | No | PASS |
| "what it takes" | No | PASS |
| "it should be noted" | No | PASS |
| "not just X" | No | PASS |
| "can generate" / "may produce" in value claims | No | PASS |
| "The reason is straightforward" | No | PASS |
| "among other factors" | No | PASS |
| "low but not zero" | No | PASS |
| "once X is stable" | No | PASS |
| "depends on various" | No | PASS |

**Banned construction scan — all candidates considered (P23, P46):**

| Construction pattern | Candidate sentence / prop | Location | Value claim? | Result |
|---|---|---|---|---|
| `not [X]` as primary statement | "No re-registration needed" | Table cell, line 59 | No — table qualifier | PASS |
| `not [X]` as primary statement | "**Unchanged** - no re-registration needed" | Table cell, line 59 | No | PASS |
| `if [condition]` in body prose | "If the pipeline does not appear, inspect AI runner containers" | Line 290 | No — troubleshooting branch with concrete action | PASS |
| `This page [verb]` | None found | — | — | PASS |
| `can/may [verb]` in value claims | None found | — | — | PASS |

**Component prop scan (P20):**

- `CustomDivider middleText` props: "What Changes", "VRAM Check", "Step 1: Download Model", "Step 2: Create aiModels.json", "Step 3: Add AI Flags", "Step 4: Verify Both Workloads", "What Just Happened" — no em-dashes, no banned terms
- `StyledStep title` props (P48): "Verify the node started cleanly", "Verify video transcoding still works", "Verify AI capabilities registered locally", "Verify AI capabilities registered on the network", "Test AI inference" — no em-dashes, no banned terms

**Em-dash scan (P30 — all visible text):**

- Title: PASS
- Description: PASS
- H2 headings: PASS
- StyledStep title props: PASS
- CustomDivider middleText props: PASS
- Body prose: PASS
- Table cells: PASS

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | All 10 candidates scanned; none present |
| 2.3 | Zero banned phrases | PASS | All 16 candidates scanned; none present |
| 2.4 | Zero banned constructions | PASS | All candidates scanned above; no violations |
| 2.5 | Opening order correct | PASS | Tip opens with value statement (additive, what stays unchanged). Intro states scope and time before mechanism |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts; no paragraphs end on hedges |
| 2.7 | Audience register correct | PASS | Peer-technical operator register throughout; no hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you for" |
| 2.9 | No passive value statements | PASS | "Income now flows from two sources" with concrete examples |
| 2.10 | No hedging openers | PASS | Opens with a fact in the Tip block |
| 2.11 | Terminology locked and consistent | PASS | NVENC, NVDEC, CUDA, VRAM, aiWorker, aiModels.json, probabilistic micropayment tickets — used correctly |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table** (`Related Pages` heading: exempt per P16 — not scored, not included):

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| What changes and what stays the same | 4 | 3 | 4 | 4 | 2 | 17/25 | FAIL |
| VRAM headroom check | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 1: Download model weights | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Step 2: Create aiModels.json | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 3: Add AI flags to the start command | 4 | 3 | 4 | 4 | 2 | 17/25 | FAIL |
| Step 4: Verify both workloads | 4 | 4 | 4 | 4 | 4 | 20/25 | PASS |
| What happened | 2 | 2 | 3 | 3 | 4 | 14/25 | FAIL |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 4 headings fail: "What changes and what stays the same" (17/25), "Step 1: Download model weights" (18/25), "Step 3: Add AI flags to the start command" (17/25), "What happened" (14/25) |
| 3.2 | No banned or weak standalone terms | PASS | No Banned-tier terms found. "Step N:" prefix is structural |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | Domain nouns present where needed (VRAM, aiModels.json) |
| 3.5 | Heading names concept, not examples | PASS | No example-enumeration headings |
| 3.6 | Title well-formed | PASS | "Add AI to a Video Node" — action-first, clear governing concept |
| 3.7 | Sounds like expert editorial choice | FAIL | "What changes and what stays the same" describes content instead of naming a concept. "What happened" is a generic post-hoc summary label — neither is an expert editorial choice |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: add AI inference to a running video orchestrator. One audience: orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator add AI inference to a running video node." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence (lines 2957–2959): `ai-earning-quickstart` → `add-ai-to-video-node` → `full-ai-pipeline-tutorial`. Reader from ai-earning-quickstart has AI activation context. This page assumes an existing video orchestrator — reasonable prerequisite chain |
| 4.4 | No dead ends | PASS | 4 Related Pages cards provide onward paths |
| 4.5 | Prerequisites stated or linked | PASS | "A working video orchestrator already running on Arbitrum One mainnet" stated inline with link to Zero to First Reward |
| 4.6 | Out-of-scope is clear | PASS | Scope bounded: additive change only; all existing video flags explicitly shown as unchanged |
| 4.7 | Information type per section correct | PASS | Purpose is `build` (permitted: procedural, technical, factual). All sections are procedural (steps) or factual (VRAM/change tables) |
| 4.8 | No content duplication from adjacent sections | INFO | Procedural overlap exists between this page and `ai-earning-quickstart` (both cover aiModels.json creation and AI flags). Contexts differ (additive vs fresh setup) — not exact duplication, but worth monitoring |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component vs matrix cross-reference (component-layout-decisions.mdx `tutorial` row: Preferred = Steps, Step, CodeGroup, Tip, Warning, Check):**

| Component used | In "Preferred" list? | Status |
|---|---|---|
| `CustomDivider` | No | NOT-TESTED |
| `LinkArrow` | No | NOT-TESTED |
| `StyledTable` / `TableRow` / `TableCell` | No | NOT-TESTED |
| `StyledSteps` / `StyledStep` | No — wraps canonical `Steps`/`Step` | NOT-TESTED |
| `BorderedBox` | No | NOT-TESTED |
| `Tip` | Yes | PASS |
| `Warning` | Yes | PASS |
| `CardGroup` / `Card` | Not in tutorial matrix | NOT-TESTED (used in Related Pages section) |

Note: Custom wrapper components (`StyledSteps`, `StyledTable`) are not confirmed unapproved — P22 applies: NOT-TESTED, not FAIL.

**Dead import check (P9):** `BorderedBox` imported at line 31 but not present in visible body content. Suspected dead import.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps (StyledSteps), and Next Steps routing (Related Pages) all present |
| 5.2 | Required sections present | PASS | Prerequisites present (inline + link), Steps present, Related Pages provides exit routing |
| 5.3 | Only approved components used | NOT-TESTED | Custom wrappers not confirmed in approval list (P22). `BorderedBox` may be dead import |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, no Coming Soon, no PreviewCallout |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses StyledSteps; tabular reference data uses StyledTable |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute Mintlify build |
| 5.7 | No old-schema frontmatter | PASS | `tutorial` is canonical 7-type; valid audience token; no deprecated purpose aliases |
| 5.8 | CSS uses custom properties only | NOT-TESTED | No inline hex or ThemeData detected on visual scan |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS (with flag) | PascalCase, correct JSX; `BorderedBox` import may be dead — see F-06 |

**Category 5 verdict: PASS (with caveats)** — 0 definitive fails. NOT-TESTED items require component approval review.

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Information type | Standard | Status |
|---|---|---|---|---|
| NVENC/NVDEC are fixed-function hardware; AI uses CUDA cores; separate hardware paths on same die | Line 47 | technical | Very high | UNVERIFIED — consistent with known NVIDIA architecture |
| VRAM compatibility table (RTX 4090 = 24 GB, RTX 4080 = 16 GB, RTX 4070 Ti = 12 GB, RTX 3070 = 8 GB) and per-pipeline VRAM floors | Lines 133–149 | factual | Very high | OPEN FACT CHECK (line 153) — Rick to verify |
| `dl_checkpoints.sh` script name and invocation pattern in latest ai-runner image | Lines 164–167 | procedural | Very high | OPEN FACT CHECK (line 171) — Rick and ai-runner team to verify |
| `price_per_unit: 4768371` is valid starting price | Line 190 | evaluative | High | UNVERIFIED — linked to market fluctuation |
| Docker socket mount (`/var/run/docker.sock`) required for AI runner | Lines 215–232 | procedural | Very high | UNVERIFIED — plausible but not SME-confirmed |
| Local inference endpoint `http://localhost:8935/text-to-image` and request format | Line 302 | procedural | Very high | OPEN FACT CHECK (line 314) — Rick and j0sh to verify |
| Dual-workload earnings: ETH from video + ETH from AI, same wallet, same Reward() call | Lines 329–333 | factual | Very high | UNVERIFIED — mechanically plausible |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 3 FACT CHECK comments (lines 153, 171, 314) mark claims awaiting authoritative verification |
| 6.2 | Code/commands tested | FAIL | `dl_checkpoints.sh` and local inference endpoint explicitly unverified |
| 6.3 | No deprecated API usage | NOT-TESTED | Cannot confirm without live CLI reference |
| 6.4 | Numbers are real | FAIL | VRAM table explicitly flagged (line 153). `price_per_unit: 4768371` without dated source |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comments present at all 3 known unverified procedural claims; each names SME |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; `status: current` without `veracityStatus`; open FACT CHECK comments present |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary referenced |
| 6.8 | Source staleness check | FAIL | `livepeer/go-livepeer:latest` and `livepeer/ai-runner:latest` are floating tags; no version pinning |

**Category 6 verdict: FAIL** — 5 checks fail: 6.1, 6.2, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | docs.json line 2958: `"v2/orchestrators/guides/tutorials/add-ai-to-video-node"` confirmed |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Page reachable via docs.json nav |
| 7.5 | Audience journey complete | PASS | Prerequisites link to zero-to-first-reward; Related Pages link to capacity-planning, ai-model-management, dual-mode-configuration, pricing-strategy |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/tutorials/` — publishable content, correct lane |
| 7.8 | File naming conventions | PASS | `add-ai-to-video-node.mdx` — no deprecated prefixes, no `-index.mdx` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path confirmed against docs.json):**

| Link href | docs.json presence | Line | Status |
|---|---|---|---|
| `/v2/orchestrators/guides/tutorials/zero-to-first-reward` | Yes | 2956 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` | Yes | 2922 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` | Yes | 2923 | PASS |
| `/v2/orchestrators/guides/deployment-details/dual-mode-configuration` | Yes | 2887 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Yes | 2921 | PASS |
| `https://tools.livepeer.cloud/ai/network-capabilities` | External | — | NOT-TESTED |
| `https://explorer.livepeer.org/orchestrators` | External | — | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External URLs not verified |
| 8.3 | All snippet imports resolve | NOT-TESTED | Cannot verify without file system access to snippet paths |
| 8.4 | All images load | N/A | No images beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot execute Mintlify build |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | 3 FACT CHECK MDX comments (lines 153, 171, 314) represent unresolved content flags in a `status: current` file |

**Category 8 verdict: FAIL** — 1 check fails: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No human approval recorded |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Cannot verify decision registry |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA Draft only, Terminology not locked, Content Pass not open (tab-status.md) |
| 9.4 | Phase ordering respected | FAIL | `status: current` set; veracity pass (Phase 7) has open items |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify process history |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify routing history |

**Category 9 verdict: FAIL** — 3 checks fail: 9.1, 9.3, 9.4

---

## Cross-Category Connections

1. **`status: current` + missing `veracityStatus` + open FACT CHECK comments** — Checks 1.1, 1.8, 6.1, 6.2, 6.4, 6.6, 8.6, 9.4 share one root cause: the page is presented as complete but has unresolved veracity claims. Root fix: complete veracity pass, set `veracityStatus: unverified` until done, change `status` to `draft`.

2. **Missing frontmatter block (purpose, complexity, lifecycleStage, industry, niche)** — Checks 1.1, 1.4, 1.6, 1.7, 1.9, 1.10 share one root cause: incomplete frontmatter. Single operation to resolve.

3. **Heading quality (3.1, 3.7)** — "What changes and what stays the same" and "What happened" both meta-describe content instead of naming concepts. Related to F-04.

4. **`BorderedBox` dead import** — Affects 5.3 and 5.10. If not used, remove. Verify first.

---

## Blocking Decisions

| BD | Decision needed | Blocks |
|---|---|---|
| BD-1 | VRAM compatibility table figures — Rick/SME to confirm per-pipeline VRAM floors at each GPU VRAM tier | F-01 |
| BD-2 | `dl_checkpoints.sh` script invocation pattern in latest ai-runner image — ai-runner team to verify | F-01 |
| BD-3 | Local inference endpoint format (`localhost:8935/text-to-image`) — Rick/j0sh to verify current endpoint | F-01 |

---

## Verdict Summary

**Overall: NEEDS WORK**

**17 checks fail:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4

Content quality and structure are strong. No voice, copy, or navigation failures. All failures are in three clusters: incomplete frontmatter taxonomy (F-02), open veracity items from FACT CHECK comments (F-01/F-03), and 4 heading scores below threshold (F-04). All correctable without structural changes.

---

## Prioritised Fix List

**F-01** — CRITICAL — Resolve all open FACT CHECK comments before `status: current` can stand
Three unverified procedural claims flagged at lines 153, 171, 314. Each names an SME (Rick, j0sh, ai-runner team). Until resolved: change `status` to `draft`. Do not set `veracityStatus: verified`.
- Line 153: VRAM table — Rick to verify per-pipeline VRAM floors
- Line 171: `dl_checkpoints.sh` — ai-runner team to verify script name and invocation
- Line 314: Local inference endpoint — Rick/j0sh to verify current endpoint format

**F-02** — HIGH — Add missing required frontmatter fields (single operation)
- Proposed: `purpose: build` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: setup` — confirm before applying
- Proposed: `industry: ["technical", "AI"]` — confirm before applying
- Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying
- Add: `veracityStatus: unverified` (until F-01 is resolved)

**F-03** — HIGH — Fix `status`/`veracityStatus` incoherence
`status: current` without `veracityStatus` violates checks.mdx §1.8 (P39). Change `status` to `draft` and add `veracityStatus: unverified` until veracity pass completes.

**F-04** — MEDIUM — Rename 4 failing headings
- "What changes and what stays the same" (17/25): Proposed: `Configuration Delta` — confirm before applying
- "Step 1: Download model weights" (18/25): Proposed: `Model Pre-download` — confirm before applying
- "Step 3: Add AI flags to the start command" (17/25): Proposed: `AI Flag Configuration` — confirm before applying
- "What happened" (14/25): Proposed: `Dual-workload Architecture` — confirm before applying

**F-05** — MEDIUM — Fix keywords to meet check 1.13
Remove: `livepeer`, `orchestrator`, `ai`, `tutorial`
Add: Proposed: `"add AI inference to video orchestrator"`, `"dual workload GPU configuration"`, `"VRAM headroom NVENC AI"` — confirm before applying

**F-06** — MEDIUM — Verify and remove `BorderedBox` dead import
`BorderedBox` imported at line 31 but not found in body content. If unused, remove the import statement.

**F-07** — MEDIUM — Add version pinning note for Docker image tags
`livepeer/go-livepeer:latest` and `livepeer/ai-runner:latest` are floating tags. When veracity pass runs, add a Note block documenting the release version tested. Addresses check 6.8.

**F-08** — INFO — `price_per_unit: 4768371` staleness marker
The specific value lacks a dated source. Add inline comment noting the verification date and instructing readers to check tools.livepeer.cloud for current rates. (Inline link already present — add a staleness date note.)
