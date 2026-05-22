# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2953–2960

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'AI Earning Quickstart'` | PASS | Clear title |
| `sidebarTitle` | Yes | `'AI Quickstart'` | PASS | Concise |
| `description` | Yes | `'Start earning from AI inference in under 2 hours...'` | PASS | Subject-first, 97 chars, no self-reference |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | No | — | FAIL | Required field absent |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 7 entries | FAIL | `livepeer`, `orchestrator`, `ai`, `quickstart`, `tutorial` are generic; `tutorial`/`quickstart` not searcher-intent terms |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators path |
| `industry` | No | — | FAIL | Required — P41 |
| `niche` | No | — | FAIL | Required — P41 |
| `veracityStatus` | No | — | FAIL | Required per check 1.8; `status: current` without it is incoherent (P39) |

**Special note — P41/checks.mdx §1.2:** `pageType` is `tutorial` (valid 7-type canonical). The prompt instructions flag checking for deprecated `pageType: quickstart` on this page. The page has `pageType: tutorial`, not `quickstart`. No deprecated pageType migration is needed. Check 1.2 PASS.

**Required field count:** 5/10 required frontmatter fields present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is a valid canonical 7-type value. Despite the page title containing "Quickstart", `pageType: tutorial` is valid (P50) — no migration needed |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType` is not deprecated — no co-fix required (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent; `status: current` requires `veracityStatus: verified` (checks.mdx §1.8). Page has 4 open FACT CHECK comments — cannot be verified |
| 1.9 | `industry` valid if present | FAIL | Field absent — P41: required |
| 1.10 | `niche` valid if present | FAIL | Field absent — P41: required |
| 1.11 | `description` well-formed | PASS | "Start earning from AI inference in under 2 hours - one GPU, one warm model, no active set membership required." 97 chars, subject-first, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` field quality | FAIL | `livepeer`, `orchestrator`, `ai`, `quickstart`, `tutorial` are generic. Good entries: `text-to-image`, `aiModels.json`, `gpu` |

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

| Phrase | Present? | Location | Verdict |
|---|---|---|---|
| "This section covers" | No | — | PASS |
| "This page covers/explains/walks you through" | No | — | PASS |
| "Understanding X is essential" | No | — | PASS |
| "It is important to note" | No | — | PASS |
| "As mentioned above" | No | — | PASS |
| "and so on" / "etc." | No | — | PASS |
| "rather than" | No | — | PASS |
| "what it takes" | No | — | PASS |
| "it should be noted" | No | — | PASS |
| "not just X" | No | — | PASS |
| "can generate" / "may produce" in value claims | No | — | PASS |
| "The reason is straightforward" | No | — | PASS |
| "among other factors" | No | — | PASS |
| "low but not zero" | No | — | PASS |
| "once X is stable" | No | — | PASS |
| "depends on various" | No | — | PASS |

**Banned construction scan — all candidates considered (P23, P46):**

| Construction | Candidate | Location | Classification | Result |
|---|---|---|---|---|
| `not [X]` as primary statement | None found | — | — | PASS |
| `if [condition]` in body prose | "If the pipeline does not appear after 10 minutes" | Line 308 | Troubleshooting conditional with concrete action | PASS |
| `This page [verb]` | None found | — | — | PASS |
| `can/may [verb]` in value claims | "should complete in under 5 seconds" | Line 352 | Not a value claim construction — conditional performance note (not `can/may`) | PASS |

**Component prop scan (P20):**

- `CustomDivider middleText` props: "Prerequisites", "Step 1: Install", "Step 2: Configure aiModels.json", "Step 3: Download the Model", "Step 4: Start the Node", "Step 5: Register on the Network", "Step 6: Test Locally", "What Just Happened" — no em-dashes, no banned terms
- `StyledStep title` props (P48): "Pull the go-livepeer Docker image", "Verify GPU access for the AI runner", "Create directories and volume", "Choose your model", "Create aiModels.json", "Start the node", "Watch for AI worker startup", "Activate on-chain for a new node", "Verify local capability registration", "Verify external network registration" — no em-dashes, no banned terms

**Em-dash scan (P30 — all visible text):**

- Title: PASS
- Description: PASS ("2 hours - one GPU" uses a hyphen, not an em-dash — PASS)
- H2 headings: PASS
- StyledStep title props: PASS
- CustomDivider middleText props: PASS
- Body prose: PASS
- Table cells: PASS

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | All 10 candidates scanned; none present |
| 2.3 | Zero banned phrases | PASS | All 16 candidates scanned; none present |
| 2.4 | Zero banned constructions | PASS | All candidates scanned; no violations |
| 2.5 | Opening order correct | PASS | Tip opens with mechanism/value (routing follows capability and price, not active-set rank). Intro states time estimate and concrete verification outcomes |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts; paragraphs are single-job |
| 2.7 | Audience register correct | PASS | Peer-technical operator register; no hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you for" |
| 2.9 | No passive value statements | PASS | "AI routing ignores active-set rank. It checks capability advertisement and price instead." — concrete and direct |
| 2.10 | No hedging openers | PASS | Opens with concrete Tip block |
| 2.11 | Terminology locked and consistent | PASS | AI worker, aiModels.json, VRAM, warm model, probabilistic micropayment tickets, active set — all used correctly |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table** (`Related Pages` heading: exempt per P16 — not scored, not included):

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Step 1: Install go-livepeer and pull the AI runner | 4 | 3 | 4 | 4 | 2 | 17/25 | FAIL |
| Step 2: Write aiModels.json | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 3: Pre-download the model | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL |
| Step 4: Start go-livepeer with AI worker | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Step 5: Register AI capabilities | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 6: Test a local inference | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| What happened | 2 | 2 | 3 | 3 | 4 | 14/25 | FAIL |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 4 headings fail: "Step 1: Install go-livepeer and pull the AI runner" (17/25), "Step 3: Pre-download the model" (19/25), "Step 4: Start go-livepeer with AI worker" (18/25), "What happened" (14/25) |
| 3.2 | No banned or weak standalone terms | PASS | No Banned-tier terms. "Prerequisites" is OK-tier per checks.mdx §3.2 |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | Domain nouns present where needed (aiModels.json, AI capabilities) |
| 3.5 | Heading names concept, not examples | PASS | No example-enumeration headings |
| 3.6 | Title well-formed | PASS | "AI Earning Quickstart" — concept-first, clear governing purpose |
| 3.7 | Sounds like expert editorial choice | FAIL | "What happened" names nothing — generic post-hoc summary label. "Step 1: Install go-livepeer and pull the AI runner" is an enumeration of actions, not a governing concept name |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: get a new AI-only orchestrator earning from AI inference. One audience: orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator go from zero to earning AI inference income in under 2 hours." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence (lines 2956–2958): `zero-to-first-reward` → `ai-earning-quickstart` → `add-ai-to-video-node`. Reader from zero-to-first-reward has completed video node setup. This page is a natural next step for AI income. |
| 4.4 | No dead ends | PASS | 4 Related Pages cards provide onward paths |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites table explicitly states all requirements with verification commands |
| 4.6 | Out-of-scope is clear | PASS | "No active set membership needed" explicitly stated; video transcoding not covered |
| 4.7 | Information type per section correct | PASS | Purpose is `start` (permitted: procedural, factual, conceptual). All sections are procedural (steps) or factual (prerequisites table) |
| 4.8 | No content duplication from adjacent sections | INFO | Some overlap with `add-ai-to-video-node` (aiModels.json creation, AI flags, Docker start command). Different context (fresh AI-only node vs additive to video node) — not exact duplication |
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
| `Tip` | Yes | PASS |
| `Warning` | Yes | PASS |
| `Note` | Yes (in tutorial matrix: Check/Warning/Tip; Note not listed but not in Avoid list) | NOT-TESTED |
| `CardGroup` / `Card` | Not in tutorial matrix | NOT-TESTED (Related Pages section) |

**Dead import check (P9):** All imports (`CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `StyledSteps`/`StyledStep`) appear used in the body content. No dead imports detected.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps (StyledSteps), and Related Pages (exit routing) all present |
| 5.2 | Required sections present | PASS | Prerequisites table present, Steps present through 6 step sections, Related Pages provides Next Steps equivalent |
| 5.3 | Only approved components used | NOT-TESTED | Custom wrappers not confirmed in approval list (P22) |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, no Coming Soon, no PreviewCallout |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses StyledSteps; Prerequisites table uses StyledTable |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute Mintlify build |
| 5.7 | No old-schema frontmatter | PASS | `tutorial` is canonical 7-type; valid audience token |
| 5.8 | CSS uses custom properties only | NOT-TESTED | No inline hex detected |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct JSX, no dead imports detected |

**Category 5 verdict: PASS (with caveats)** — 0 definitive fails. NOT-TESTED items require component approval review.

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Information type | Standard | Status |
|---|---|---|---|---|
| Minimum GPU: 24 GB VRAM for diffusion, 8 GB for LLM/audio | Line 66 | factual | Very high | UNVERIFIED — consistent with other pages but not confirmed against primary source |
| Minimum NVIDIA driver: CUDA 12.0 compatible (`525.60.13+`) | Line 71 | factual | Very high | UNVERIFIED |
| ETH on Arbitrum One: ~0.005 ETH for AI registration gas | Line 86 | evaluative | High | UNVERIFIED — subject to gas price fluctuation |
| `ByteDance/SDXL-Lightning` recommended for 24 GB GPU, fast (4 inference steps), high demand, ~6 GB on disk | Line 150 | evaluative | High | UNVERIFIED — demand claim is live-data dependent |
| `price_per_unit: 4768371` ≈ $0.0005 per megapixel at late-2025 ETH rates | Line 174 | evaluative | High | UNVERIFIED — time-referenced claim needs dated source |
| `dl_checkpoints.sh` script invocation pattern | Lines 192–195 | procedural | Very high | OPEN FACT CHECK (line 199) — ai-runner team to verify |
| `livepeer_cli` activation option: "Invoke multi-step become an orchestrator" | Line 286 | procedural | Very high | OPEN FACT CHECK (line 288) — Rick to verify |
| Local test endpoint `http://localhost:8935/text-to-image` and request format | Lines 327–338 | procedural | Very high | OPEN FACT CHECK (line 339) — Rick/j0sh to verify |
| "From the second request onward, SDXL-Lightning at 512×512 should complete in under 5 seconds" | Line 352 | evaluative | High | UNVERIFIED — performance claim without benchmark source |
| AI routing ignores active-set rank; checks capability and price instead | Line 365 | factual | Very high | UNVERIFIED — key architectural claim |
| Each completed job sends PM ticket worth `price_per_unit × pixels_in_output` wei | Line 363 | factual | Very high | UNVERIFIED — payment mechanics claim |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 3 FACT CHECK comments (lines 199, 288, 339) mark claims awaiting authoritative verification |
| 6.2 | Code/commands tested | FAIL | `dl_checkpoints.sh`, `livepeer_cli` option name, and local inference endpoint explicitly unverified |
| 6.3 | No deprecated API usage | NOT-TESTED | Cannot confirm without live CLI reference |
| 6.4 | Numbers are real | FAIL | `~0.005 ETH` gas estimate, `price_per_unit: 4768371` USD approximation, "under 5 seconds" performance claim — all unverified |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comments at lines 199, 288, 339; each names SME |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; `status: current` without `veracityStatus`; open FACT CHECK comments present |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary referenced |
| 6.8 | Source staleness check | FAIL | `livepeer/go-livepeer:latest` and `livepeer/ai-runner:latest` are floating tags. `price_per_unit` has an "at late-2025 ETH rates" qualifier but no verification date. Gas estimate has no source |

**Category 6 verdict: FAIL** — 5 checks fail: 6.1, 6.2, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | docs.json line 2957: `"v2/orchestrators/guides/tutorials/ai-earning-quickstart"` confirmed |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Page reachable via docs.json nav |
| 7.5 | Audience journey complete | PASS | Onward links to: add-ai-to-video-node, model-demand-reference, pricing-strategy, ai-model-management |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/tutorials/` — publishable content, correct lane |
| 7.8 | File naming conventions | PASS | `ai-earning-quickstart.mdx` — no deprecated prefixes |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path confirmed against docs.json):**

| Link href | docs.json presence | Line | Status |
|---|---|---|---|
| `/v2/orchestrators/guides/tutorials/add-ai-to-video-node` | Yes | 2958 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Yes | 2903 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Yes | 2921 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` | Yes | 2923 | PASS |
| `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Yes | 2912 | PASS |
| `https://tools.livepeer.cloud/ai/network-capabilities` | External | — | NOT-TESTED |
| `https://arbiscan.io` | External | — | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External URLs not verified |
| 8.3 | All snippet imports resolve | NOT-TESTED | Cannot verify without snippet file access |
| 8.4 | All images load | N/A | No images beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot execute Mintlify build |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | 3 FACT CHECK MDX comments (lines 199, 288, 339) are unresolved content flags in a `status: current` file |

**Category 8 verdict: FAIL** — 1 check fails: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No human approval recorded |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Cannot verify decision registry |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA Draft only, Terminology not locked, Content Pass not open |
| 9.4 | Phase ordering respected | FAIL | `status: current` set; veracity pass has open items |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify process history |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify routing history |

**Category 9 verdict: FAIL** — 3 checks fail: 9.1, 9.3, 9.4

---

## Cross-Category Connections

1. **`status: current` + missing `veracityStatus` + open FACT CHECK comments** — Checks 1.1, 1.8, 6.1, 6.2, 6.4, 6.6, 8.6, 9.4 share one root cause: unresolved veracity with a completion claim. Root fix: complete veracity pass, set `veracityStatus: unverified`, change `status` to `draft` until done.

2. **Missing frontmatter block** — Checks 1.1, 1.4, 1.6, 1.7, 1.9, 1.10 share one root cause. Single operation to resolve.

3. **Heading quality (3.1, 3.7)** — "What happened" and three step headings fail for the same reason: verbosity or meta-description rather than concept naming. Fix together with F-04.

4. **`pageType: tutorial` vs title containing "Quickstart"** — The page title says "AI Earning Quickstart" but `pageType: tutorial` is correct and valid (P50). No migration needed. If editorial preference is to signal quickstart, use `pageVariant: quickstart` as an additive field — not a replacement of `pageType: tutorial`. INFO only, not a failure.

---

## Blocking Decisions

| BD | Decision needed | Blocks |
|---|---|---|
| BD-1 | `dl_checkpoints.sh` script name and invocation — ai-runner team to verify (line 199) | F-01 |
| BD-2 | `livepeer_cli` activation option name in current release — Rick to verify (line 288) | F-01 |
| BD-3 | Local inference endpoint format — Rick/j0sh to verify (line 339) | F-01 |
| BD-4 | `~0.005 ETH` gas estimate for AI registration — needs current source | F-01 |

---

## Verdict Summary

**Overall: NEEDS WORK**

**17 checks fail:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4

Content structure, voice, and navigation are strong. All failures cluster in incomplete frontmatter taxonomy, open veracity items, and 4 heading scores below threshold. No structural changes required.

---

## Prioritised Fix List

**F-01** — CRITICAL — Resolve all open FACT CHECK comments before `status: current` can stand
Four unverified procedural/factual claims flagged at lines 199, 288, 339, and the gas estimate (line 86).
- Line 199: `dl_checkpoints.sh` — ai-runner team to verify
- Line 288: `livepeer_cli` option name — Rick to verify
- Line 339: Local inference endpoint — Rick/j0sh to verify
- Line 86: `~0.005 ETH` gas estimate — needs current source (Arbiscan or go-livepeer release notes)
Until resolved: change `status` to `draft`. Do not set `veracityStatus: verified`.

**F-02** — HIGH — Add missing required frontmatter fields (single operation)
- Proposed: `purpose: start` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: setup` — confirm before applying
- Proposed: `industry: ["technical", "AI"]` — confirm before applying
- Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying
- Add: `veracityStatus: unverified` (until F-01 is resolved)

**F-03** — HIGH — Fix `status`/`veracityStatus` incoherence
Change `status` to `draft` and add `veracityStatus: unverified` until veracity pass completes. Do not set `veracityStatus: verified` while FACT CHECK comments remain open (P39).

**F-04** — MEDIUM — Rename 4 failing headings
- "Step 1: Install go-livepeer and pull the AI runner" (17/25): Proposed: `Installation` — confirm before applying
- "Step 3: Pre-download the model" (19/25): Proposed: `Model Pre-download` — confirm before applying
- "Step 4: Start go-livepeer with AI worker" (18/25): Proposed: `AI Worker Start` — confirm before applying
- "What happened" (14/25): Proposed: `AI Inference Path` — confirm before applying

**F-05** — MEDIUM — Fix keywords to meet check 1.13
Remove: `livepeer`, `orchestrator`, `ai`, `quickstart`, `tutorial`
Add: Proposed: `"AI inference orchestrator quickstart"`, `"earn AI inference livepeer GPU"`, `"aiModels.json setup"` — confirm before applying

**F-06** — MEDIUM — Add version pinning note for Docker image tags
`livepeer/go-livepeer:latest` and `livepeer/ai-runner:latest` are floating tags. When veracity pass runs, document the tested release tag in a Note block. Addresses check 6.8.

**F-07** — MEDIUM — Date-stamp the `price_per_unit` approximation
Line 174 references "late-2025 ETH rates" without a verification date. Add a staleness marker with the date verified and direct the reader to tools.livepeer.cloud for current rates. Addresses check 6.4 and 6.8.

**F-08** — INFO — Consider `pageVariant: quickstart` as additive field
The title signals a quickstart orientation but `pageType: tutorial` is correct (P50). If editorial preference is to signal this at taxonomy level, add `pageVariant: quickstart` alongside `pageType: tutorial`. This is editorial, not a schema requirement.
