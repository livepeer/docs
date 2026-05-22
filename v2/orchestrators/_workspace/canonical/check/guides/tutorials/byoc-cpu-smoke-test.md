# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2953–2960

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'BYOC CPU Smoke Test'` | PASS | Clear, specific |
| `sidebarTitle` | Yes | `'BYOC Smoke Test'` | PASS | Concise |
| `description` | Yes | `'Verify the Livepeer orchestrator framework works on your machine in under 20 minutes...'` | PASS | 89 chars, subject-first, no self-reference |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | No | — | FAIL | Required field absent |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 6 entries | FAIL | `livepeer`, `orchestrator`, `tutorial` are generic. Good entries: `byoc`, `cpu`, `smoke test` |
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
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType` is not deprecated (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent; `status: current` without `veracityStatus` violates checks.mdx §1.8. Page has 2 open FACT CHECK comments |
| 1.9 | `industry` valid if present | FAIL | Field absent — P41: required |
| 1.10 | `niche` valid if present | FAIL | Field absent — P41: required |
| 1.11 | `description` well-formed | PASS | 89 chars, subject-first, UK English, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` field quality | FAIL | `livepeer`, `orchestrator`, `tutorial` are generic. Good entries: `byoc`, `cpu`, `smoke test` |

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
| `not [X]` as primary statement | "No GPU, Ethereum wallet, Arbitrum RPC, or on-chain registration is required." | Line 74 | States excluded requirements — informational, not a value claim | PASS |
| `if [condition]` in body prose | None found | — | — | PASS |
| `This page [verb]` | None found | — | — | PASS |
| `can/may [verb]` in value claims | None found | — | — | PASS |

**Component prop scan (P20):**

- `CustomDivider middleText` props: "Prerequisites", "Part 1: BYOC Container", "Part 2: Orchestrator", "Part 3: Gateway", "Part 4: Send Test Job", "What Just Happened" — no em-dashes, no banned terms
- `StyledStep title` props (P48): "Create the project directory", "Write the pipeline code", "Write the entrypoint", "Write the Dockerfile", "Build and verify the image", "Install go-livepeer", "Start the BYOC container", "Start the orchestrator (off-chain mode)", "Start the gateway (off-chain mode with remote signer)", "Verify both processes are reachable", "Send a BYOC job via curl", "Inspect the log trail" — no em-dashes, no banned terms

**Em-dash scan (P30 — all visible text):**

- Title: PASS
- Description: PASS
- H2 headings: PASS
- StyledStep title props: PASS
- CustomDivider middleText props: PASS
- Body prose: PASS
- Table cells: N/A (no body tables beyond Prerequisites)

**Note on Tip block (line 31–33):** "This tutorial proves the Livepeer orchestrator pipeline works on your machine before you commit GPU hardware, ETH, or LPT. A job enters a gateway, routes to the orchestrator, executes in a CPU Docker container, and returns a response. No GPU, no wallet, no on-chain registration." — Contains `This tutorial proves...` — check 2.4: "This page [verb]" pattern. "This tutorial proves..." is a variant of the self-referential opener ban.

**Additional construction finding:** Tip block opens with "This tutorial proves..." — this matches the `This page [verb]` banned construction pattern (the page refers to itself). However, the Tip block is a component prop/wrapper and is borderline — the sentence is framing the page purpose, not being used as a standalone opener in body prose. Flagging as BORDERLINE per P23 — requires human review.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | All 10 candidates scanned; none present |
| 2.3 | Zero banned phrases | PASS | All 16 candidates scanned; none present |
| 2.4 | Zero banned constructions | BORDERLINE | Tip block line 31: "This tutorial proves the Livepeer orchestrator pipeline works..." — matches `This [page type] [verb]` pattern. Borderline: occurs in a Tip component framing context rather than body prose. Human review required |
| 2.5 | Opening order correct | PASS | Tip leads with purpose (proving pipeline works before committing resources). Intro states what the smoke test accomplishes concretely |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts; no paragraphs end on hedges |
| 2.7 | Audience register correct | PASS | Peer-technical operator register; no hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you for" |
| 2.9 | No passive value statements | PASS | Claims are specific and concrete |
| 2.10 | No hedging openers | PASS | Opens with a concrete purpose statement |
| 2.11 | Terminology locked and consistent | PASS | BYOC, off-chain, remote signer, probabilistic micropayment tickets — used correctly |

**Category 2 verdict: PASS (with borderline flag on 2.4)**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table** (`Related Pages` heading: exempt per P16 — not scored, not included):

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Build the CPU BYOC container | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Start the orchestrator | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS (borderline) |
| Start the gateway | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS (borderline) |
| Send a test job | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS (borderline) |
| What happened | 2 | 2 | 3 | 3 | 4 | 14/25 | FAIL |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | "What happened" (14/25) fails. All other headings meet threshold |
| 3.2 | No banned or weak standalone terms | PASS | No Banned-tier terms. "Prerequisites" is OK-tier |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | "CPU BYOC container" includes domain nouns; orchestrator/gateway headings scoped by context |
| 3.5 | Heading names concept, not examples | PASS | No example-enumeration headings |
| 3.6 | Title well-formed | PASS | "BYOC CPU Smoke Test" — concept-first, specific, 1–3 effective words |
| 3.7 | Sounds like expert editorial choice | FAIL | "What happened" names nothing — generic post-hoc summary label. Not an expert editorial choice |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: verify BYOC pipeline works on one machine before committing GPU/ETH resources. One audience: orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator verify the Livepeer BYOC pipeline end-to-end without a GPU or on-chain setup." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence (lines 2955–2956): `byoc-cpu-smoke-test` → `zero-to-first-reward`. This page positions itself as a pre-commitment validation before the full GPU setup. Good entry-level positioning |
| 4.4 | No dead ends | PASS | 4 Related Pages cards provide onward paths |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites table explicitly states requirements with verify commands. "No GPU, Ethereum wallet..." clarification on line 74 |
| 4.6 | Out-of-scope is clear | PASS | Scope limited to off-chain smoke test; graduate-to-production section clearly marked as optional next step |
| 4.7 | Information type per section correct | PASS | Purpose is `verify` (permitted: procedural, factual, technical). All sections are procedural (steps) or factual (expected outputs) |
| 4.8 | No content duplication from adjacent sections | INFO | `byoc-cpu-tutorial.mdx` covers near-identical ground. Significant overlap between these two pages — see blocking decision BD-1 |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component vs matrix cross-reference (component-layout-decisions.mdx `tutorial` row: Preferred = Steps, Step, CodeGroup, Tip, Warning, Check):**

| Component used | In "Preferred" list? | Status |
|---|---|---|
| `CustomDivider` | No | NOT-TESTED |
| `LinkArrow` | No — imported but usage not visible in body | NOT-TESTED / possible dead import |
| `StyledTable` / `TableRow` / `TableCell` | No | NOT-TESTED |
| `StyledSteps` / `StyledStep` | No — wraps canonical Steps/Step | NOT-TESTED |
| `Note` | Not in tutorial "Preferred" list, not in "Avoid" | NOT-TESTED |
| `CardGroup` / `Card` | Not in tutorial matrix | NOT-TESTED (Related Pages) |

**Dead import check (P9):** `LinkArrow` imported at line 26 but not found in visible body content on visual scan. Suspected dead import — verify before finalising.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps (StyledSteps), and Related Pages all present |
| 5.2 | Required sections present | PASS | Prerequisites, Steps, Related Pages present |
| 5.3 | Only approved components used | NOT-TESTED | Custom wrappers not confirmed (P22). `LinkArrow` may be dead import |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, no Coming Soon, no PreviewCallout |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses StyledSteps; Prerequisites table uses StyledTable |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute Mintlify build |
| 5.7 | No old-schema frontmatter | PASS | `tutorial` is canonical 7-type; valid audience token |
| 5.8 | CSS uses custom properties only | NOT-TESTED | No inline hex detected |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS (with flag) | PascalCase, correct JSX. `LinkArrow` may be dead import |

**Category 5 verdict: PASS (with caveats)** — 0 definitive fails. `LinkArrow` dead import suspected.

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Information type | Standard | Status |
|---|---|---|---|---|
| BYOC job flow uses HTTP capability query (not gRPC for OrchestratorInfo) | Body prose | factual | Very high | UNVERIFIED — architectural claim |
| go-livepeer binary download URL: `livepeer-linux-amd64.tar.gz` at `releases/latest` | Lines 221–223 | procedural | Very high | OPEN FACT CHECK (line 226) — Rick to verify URL pattern |
| `-byoc`, `-byocContainerURL`, `-byocModelID` are correct flag names | Lines 264–269 | procedural | Very high | OPEN FACT CHECK (line 280) — Rick to verify |
| Community remote signer at `signer.eliteencoder.net` is available | Lines 298–316 | factual | High | UNVERIFIED — community-maintained external service |
| Off-chain mode requires no Ethereum wallet or RPC | Lines 257, 293 | factual | Very high | UNVERIFIED — needs confirmation for current release |
| Payment signing appears in gateway logs as "Calling remote signer: signTicket" | Lines 377–388 | procedural | Very high | UNVERIFIED — expected log output claimed |
| TicketBroker contract on Arbitrum handles on-chain settlement | Line 405 | factual | Very high | UNVERIFIED |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 2 FACT CHECK comments (lines 226, 280) mark procedural claims awaiting verification |
| 6.2 | Code/commands tested | FAIL | Download URL pattern and `-byoc` flag names explicitly unverified |
| 6.3 | No deprecated API usage | NOT-TESTED | Cannot confirm flag names without live CLI reference |
| 6.4 | Numbers are real | PASS | No quantitative numbers beyond port numbers and file sizes (those are not at risk) |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comments at lines 226 and 280; both name Rick as SME |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; `status: current` without `veracityStatus`; open FACT CHECK comments present |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary referenced |
| 6.8 | Source staleness check | FAIL | `releases/latest` URL is a moving target with no pinned version. Community remote signer (`signer.eliteencoder.net`) is an external service with no SLA — availability cannot be guaranteed |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.2, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | docs.json line 2955: `"v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test"` confirmed |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Page reachable via docs.json nav |
| 7.5 | Audience journey complete | PASS | Related Pages: zero-to-first-reward, ai-earning-quickstart, ai-inference-operations, dual-mode-configuration |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/tutorials/` — publishable content, correct lane |
| 7.8 | File naming conventions | PASS | `byoc-cpu-smoke-test.mdx` — no deprecated prefixes |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path confirmed against docs.json):**

| Link href | docs.json presence | Line | Status |
|---|---|---|---|
| `/v2/orchestrators/guides/tutorials/zero-to-first-reward` | Yes | 2956 | PASS |
| `/v2/orchestrators/guides/tutorials/ai-earning-quickstart` | Yes | 2957 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | Yes | 2898 | PASS |
| `/v2/orchestrators/guides/deployment-details/dual-mode-configuration` | Yes | 2887 | PASS |
| `https://discord.gg/livepeer` | External | — | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 4 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | `discord.gg/livepeer` not verified |
| 8.3 | All snippet imports resolve | NOT-TESTED | Cannot verify without snippet file access |
| 8.4 | All images load | N/A | No images beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot execute Mintlify build |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | 2 FACT CHECK MDX comments (lines 226, 280) are unresolved content flags in a `status: current` file |

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

1. **`status: current` + missing `veracityStatus` + open FACT CHECK comments** — Checks 1.1, 1.8, 6.1, 6.2, 6.6, 8.6, 9.4 share one root cause. Root fix: complete veracity pass, change `status` to `draft`, set `veracityStatus: unverified`.

2. **Missing frontmatter block** — Checks 1.1, 1.4, 1.6, 1.7, 1.9, 1.10 share one root cause. Single operation.

3. **Heading quality (3.1, 3.7)** — "What happened" is the sole failing heading. Fix together with F-04.

4. **Page overlap with `byoc-cpu-tutorial.mdx`** — Both pages cover the same BYOC CPU off-chain smoke test with significant procedural overlap. This is a structural question requiring editorial decision (merge / differentiate / drop one). Flagged as BD-1 below.

5. **`LinkArrow` dead import** — affects 5.3 and 5.10. Verify and remove if unused.

---

## Blocking Decisions

| BD | Decision needed | Blocks |
|---|---|---|
| BD-1 | Page overlap with `byoc-cpu-tutorial.mdx`: both cover BYOC CPU off-chain smoke test. Decide: differentiate, merge, or deprecate one | Resolving 4.8 INFO, scoping duplication fix |
| BD-2 | Download URL pattern for go-livepeer binary — Rick to verify (line 226) | F-01 |
| BD-3 | `-byoc`, `-byocContainerURL`, `-byocModelID` flag names — Rick to verify (line 280) | F-01 |

---

## Verdict Summary

**Overall: NEEDS WORK**

**15 checks fail:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4

Note: 9.1, 9.3, 9.4 included in count = 16 checks fail. Content quality and structure are strong. No voice, copy, or navigation failures. Failures cluster in incomplete frontmatter, 2 open veracity items, 1 heading below threshold, and a structural overlap issue with `byoc-cpu-tutorial.mdx` that requires editorial decision.

---

## Prioritised Fix List

**F-01** — CRITICAL — Resolve open FACT CHECK comments before `status: current` can stand
Two unverified procedural claims:
- Line 226: Binary download URL pattern — Rick to verify
- Line 280: `-byoc`, `-byocContainerURL`, `-byocModelID` flag names — Rick to verify
Until resolved: change `status` to `draft`.

**F-02** — HIGH — Add missing required frontmatter fields (single operation)
- Proposed: `purpose: verify` — confirm before applying
- Proposed: `complexity: beginner` — confirm before applying
- Proposed: `lifecycleStage: evaluate` — confirm before applying
- Proposed: `industry: ["technical"]` — confirm before applying
- Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying
- Add: `veracityStatus: unverified` (until F-01 is resolved)

**F-03** — HIGH — Fix `status`/`veracityStatus` incoherence
Change `status` to `draft` and add `veracityStatus: unverified` until veracity pass completes (P39).

**F-04** — MEDIUM — Rename "What happened" heading
"What happened" (14/25): Proposed: `Job Routing Path` — confirm before applying

**F-05** — MEDIUM — Fix keywords to meet check 1.13
Remove: `livepeer`, `orchestrator`, `tutorial`
Add: Proposed: `"BYOC CPU pipeline Livepeer"`, `"off-chain orchestrator smoke test"`, `"Docker BYOC passthrough container"` — confirm before applying

**F-06** — MEDIUM — Resolve `LinkArrow` dead import
`LinkArrow` imported at line 26 but not found in body content on visual scan. Verify usage. If unused, remove the import.

**F-07** — MEDIUM — Address community remote signer reliability
Line 316: Remote signer at `signer.eliteencoder.net` is a community-maintained service. The current Note already directs to Discord for availability issues. Add staleness risk note in frontmatter FACT CHECK or inline comment noting that the URL may change and should be verified before each veracity pass. Addresses check 6.8.

**F-08** — MEDIUM — Review "This tutorial proves..." Tip opener (2.4 BORDERLINE)
Tip block line 31: "This tutorial proves the Livepeer orchestrator pipeline works on your machine..." — matches `This [page type] [verb]` pattern. Human review required: if flagged as a violation, rewrite to lead with the value statement: Proposed: `Run a complete Livepeer gateway and orchestrator on one machine — CPU only, no wallet, no on-chain registration. A job enters a gateway, routes to the orchestrator, executes in a CPU Docker container, and returns a response.` — confirm before applying.

**F-09** — INFO — Editorial decision on overlap with `byoc-cpu-tutorial.mdx`
Both this page and `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` cover BYOC CPU off-chain smoke testing with significant overlap. Requires editorial decision: differentiate scope clearly, merge, or deprecate one. Blocking decision BD-1.
