# Per-Page Quality Check Report
## `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2585–2595 (gateways), 2953–2960 (orchestrators)

---

## Critical Pre-Check: Navigation Lane Mismatch

**This file is in the wrong directory lane — or docs.json has a phantom entry.**

- **File location:** `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- **docs.json orchestrators section (lines 2953–2960):** Does NOT contain `byoc-cpu-tutorial`. The file is NOT listed under orchestrators.
- **docs.json gateways section (line 2589):** Lists `"v2/gateways/guides/tutorials/byoc-cpu-tutorial"` — a different file path.
- **`v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`:** Exists and is the correct match for the docs.json gateways entry. It has different frontmatter (`audience: gateway-operator`, `sidebarTitle: 'Tutorial: BYOC Gateway'`).

**Conclusion:** `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` is NOT in docs.json navigation. It is a structural orphan in the orchestrators section. The file being checked here is also substantively a gateway-focused tutorial (covers gateway setup, PM deposits, gateway-to-orchestrator routing) placed in the orchestrators directory.

Check 7.1 is a definitive FAIL. The full check proceeds below but the lane mismatch is the primary finding and must be resolved before any other fix.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)'` | FAIL | Em-dash in title (P30): `smoke-test:` uses a colon; `(off-chain to on-chain)` — no em-dashes present. PASS on em-dash. But title is 64 chars — long for a title |
| `sidebarTitle` | Yes | `'BYOC CPU tutorial'` | PASS | Concise |
| `description` | Yes | 162 chars | FAIL | 162 chars exceeds 160-char limit (check 1.11) |
| `pageType` | Yes | `tutorial` | PASS | Valid 7-type canonical value |
| `audience` | No (field absent) | — | FAIL | Required field absent. Page is in orchestrators directory but gateways version has `audience: gateway-operator` (deprecated token) |
| `purpose` | Yes | `tutorial` | FAIL | `tutorial` is a pageType value, not a purpose value. Wrong-field error (P37 error type b): valid pageType value in the wrong field |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 9 entries | FAIL | `livepeer`, `tutorial` are generic. Better entries present: `BYOC`, `gateway`, `off-chain`, `remote signer`, `Docker` |
| OG image block | FAIL | `og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"` | FAIL | Wrong OG path format. Missing `'og:image:alt'`, `'og:image:type'`, `'og:image:width'`, `'og:image:height'` fields. OG block incomplete — only 1 of 5 fields present |
| `industry` | No | — | FAIL | Required — P41 |
| `niche` | No | — | FAIL | Required — P41 |
| `veracityStatus` | No | — | FAIL | Required per check 1.8 |

**Required field count:** 3/10 required frontmatter fields present (title, sidebarTitle present; description present but over limit). Missing: `audience`, `purpose` (wrong value), `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. OG block incomplete.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | Missing: `audience`, proper `purpose` value, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. OG block incomplete (4 of 5 OG sub-fields absent) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` is valid (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType` is not deprecated (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: tutorial` — `tutorial` is a pageType value, not a purpose value. This is a wrong-field error (P37: type b — valid value in wrong field). Correct field: `pageType: tutorial`. Purpose field needs a valid 15-value purpose |
| 1.5 | `audience` uses 7-token set | FAIL | Field absent. Note: gateways version has `audience: gateway-operator` — `gateway-operator` is a deprecated token (not in 7-type canonical set: valid is `gateway`) |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent |
| 1.9 | `industry` valid if present | FAIL | Field absent — P41: required |
| 1.10 | `niche` valid if present | FAIL | Field absent — P41: required |
| 1.11 | `description` well-formed | FAIL | 162 chars — exceeds 160-char maximum. Description: "Run a complete Livepeer gateway and orchestrator on one machine using a CPU Docker container as a BYOC pipeline, test end-to-end with off-chain payments via a remote signer, then graduate to a production on-chain setup." (162 chars) |
| 1.12 | OG image block complete | FAIL | Only `og:image` present (using wrong format — missing quote delimiters consistent with other pages). Missing: `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. 4 of 5 OG fields absent |
| 1.13 | `keywords` field quality | FAIL | `livepeer`, `tutorial` are generic. Array format correct (JSON vs YAML). Good entries: `BYOC`, `gateway`, `off-chain`, `remote signer`, `Docker`, `CPU`, `orchestrator` |

**Category 1 verdict: FAIL** — 11 checks fail: 1.1, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

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
| "This tutorial walks through" | Yes | Line 9 | FAIL — "This tutorial walks through" is a variant of "This page walks you through" (self-referential opener, check 2.3 / 2.4) |
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
| "simply" | No | — | PASS |

**Banned construction scan — all candidates considered (P23, P46):**

| Construction | Candidate | Location | Classification | Result |
|---|---|---|---|---|
| `not [X]` as primary statement | "You do **not** need: A GPU, An Ethereum wallet..." | Lines 45–50 | Primary exclusion list — functions as a value statement | BORDERLINE — states what is NOT required as the primary claim. Human review required |
| `if [condition]` in body prose | "If this fails, post in #local-gateways on Discord..." | Line 423 | Troubleshooting conditional with concrete action | PASS |
| `This page [verb]` | "This tutorial walks through..." | Line 9 | Self-referential page opener — matches banned phrase pattern | FAIL |
| `can/may [verb]` in value claims | None found as value claims | — | — | PASS |

**Component prop scan (P20):**

- No `CustomDivider` used
- `Step title` props (native Mintlify Steps): "Create the pipeline directory", "Write the pipeline code", "Write the entrypoint", "Write the Dockerfile", "Build the Docker image", "Download the go-livepeer binary", "Start the BYOC container", "Start the orchestrator", "Start the gateway with remote signer", "Verify both processes are running", "Install the Python gateway SDK (optional but recommended)", "Send a BYOC job via the SDK", "Alternative: Test via curl (gateway HTTP API)", "Inspect the logs", "Acquire ETH on Arbitrum One", "Create an Ethereum wallet for your gateway", "Set up an Arbitrum RPC endpoint", "Deposit PM funds on-chain", "Register your orchestrator on-chain", "Switch the gateway to on-chain mode", "Verify on-chain operation" — no em-dashes detected
- `Accordion title` props: "Gateway cannot connect to remote signer", "Orchestrator not registering the BYOC capability", "Port conflict errors", "Gateway cannot find the orchestrator", "BYOC container exits immediately" — no em-dashes, no banned terms

**Em-dash scan (P30 — all visible text):**

- Title: No em-dashes (colon and hyphens only) — PASS
- Description: No em-dashes — PASS
- H2 headings: "Architecture overview", "What next" — no em-dashes — PASS
- Step title props: PASS (all checked above)
- Accordion title props: PASS
- Body prose: PASS (no em-dashes detected on scan)
- Note/Warning blocks: PASS

**"What next" heading check (3.2):** "What next" — "Next Steps" is on the Avoid list but "What next" is not explicitly listed. However it functions as a navigation footer equivalent. Score below.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | All 10 candidates scanned; none present |
| 2.3 | Zero banned phrases | FAIL | Line 9: "This tutorial walks through a complete end-to-end test of the Livepeer gateway + orchestrator pipeline..." — self-referential opener matching banned phrase pattern |
| 2.4 | Zero banned constructions | FAIL | Line 9: "This tutorial walks through..." matches `This [page-type] [verb]` construction. Separate from 2.3 (banned phrase vs banned construction overlap — counted once per F-01 canonical fix rule) |
| 2.5 | Opening order correct | FAIL | First sentence opens with a self-referential description of what the tutorial does. Should open with the value/outcome: what the reader achieves |
| 2.6 | Paragraph discipline | PASS | Paragraphs are generally single-job with factual lead sentences |
| 2.7 | Audience register correct | INFO | Page is in orchestrators directory but primarily covers gateway operations (PM deposits, gateway mode, remote signer). Audience is unclear at the page level — gateway reader more appropriate for most content |
| 2.8 | Per-audience prohibited phrases absent | PASS | No audience-specific prohibited phrases detected |
| 2.9 | No passive value statements | PASS | Claims are concrete |
| 2.10 | No hedging openers | FAIL | Page opens with self-description instead of value/outcome |
| 2.11 | Terminology locked and consistent | PASS | BYOC, remote signer, off-chain, PM deposit — used consistently |

**Category 2 verdict: FAIL** — 4 checks fail: 2.3, 2.4, 2.5, 2.10

Note: 2.3 and 2.4 share the same root (line 9). Canonical fix: rewrite opening sentence to lead with outcome, not self-description. One fix resolves both.

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table** (`Related Pages` or `What next` check — "What next" is not `Related Pages` and is not exempt. Scored normally per P53):

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Architecture overview | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Part 1: Build the CPU BYOC container | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| Part 2: Run the orchestrator | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS (borderline) |
| Part 3: Run the gateway (off-chain mode) | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Part 4: Send a test job | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS (borderline) |
| Part 5: Troubleshooting | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Part 6: Graduate to on-chain production | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| What next | 1 | 1 | 3 | 3 | 5 | 13/25 | FAIL |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 3 headings fail: "Architecture overview" (18/25), "Part 3: Run the gateway (off-chain mode)" (18/25), "What next" (13/25) |
| 3.2 | No banned or weak standalone terms | FAIL | "What next" — functions as "Next Steps" equivalent (Avoid-tier per checks.mdx §3.2 banned terms list). "Architecture overview" contains "overview" which is Avoid-tier when used as a standalone heading (Avoid: `Overview`) |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | "CPU BYOC container", "off-chain mode" include domain context |
| 3.5 | Heading names concept, not examples | PASS | No example-enumeration headings |
| 3.6 | Title well-formed | FAIL | Title is 64 chars: "BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)" — verbose, not 1–3 words governing concept. Parenthetical scope qualifier adds noise |
| 3.7 | Sounds like expert editorial choice | FAIL | "What next" is a generic conversational label. "Architecture overview" is a safe generic. Neither is an expert editorial choice |

**Category 3 verdict: FAIL** — 4 checks fail: 3.1, 3.2, 3.6, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | FAIL | Page covers two distinct jobs: (1) off-chain smoke test (Parts 1–4) and (2) on-chain production setup (Part 6: Graduate). These are different lifecycle stages for different audiences. Part 6 is substantially a gateway setup guide |
| 4.2 | Purpose statement test passes | FAIL | Cannot write a clean one-sentence purpose statement: "This page lets the [orchestrator/gateway?] do [smoke test / on-chain production setup?]." Two purposes prevent clean framing |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | File is NOT in docs.json under orchestrators — it is an orphan in this directory. No adjacency can be evaluated because the page has no nav position in the orchestrators section |
| 4.4 | No dead ends | FAIL | "What next" section links to gateway pages (`/v2/gateways/setup/monitor/monitor-and-optimise`, remote signers, clearinghouse-guide). These are gateway-tab resources. An orchestrator reader arriving here would land on gateway pages without context. Also: the links to `/v2/gateways/payments/remote-signers` and `/v2/gateways/payments/payment-clearinghouse` need verification |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites section present with specific software requirements |
| 4.6 | Out-of-scope is clear | FAIL | Part 6 blurs scope: adds on-chain gateway production setup as an extension of the smoke test. Scope creep from smoke test into production deployment guide |
| 4.7 | Information type per section correct | INFO | Purpose field contains wrong value (`tutorial`); cannot evaluate against valid purpose. Using inferred purpose of `verify` (Parts 1–4) and `build` (Part 6): both are procedural — acceptable types for those purposes |
| 4.8 | No content duplication from adjacent sections | FAIL | Near-identical content to `byoc-cpu-smoke-test.mdx` (Parts 1–4). Both pages cover BYOC CPU off-chain smoke test with the same pipeline code, same Docker commands, same gateway/orchestrator flags. Part 6 is unique to this page |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL** — 5 checks fail: 4.1, 4.2, 4.3, 4.4, 4.6, 4.8 (6 checks fail)

---

## Category 5 — LAYOUT & COMPONENTS

**Component vs matrix cross-reference (component-layout-decisions.mdx `tutorial` row: Preferred = Steps, Step, CodeGroup, Tip, Warning, Check):**

| Component used | In "Preferred" list? | Status |
|---|---|---|
| Native `Steps` / `Step` | Yes | PASS |
| `AccordionGroup` / `Accordion` | Not in tutorial "Preferred", not in "Avoid" | NOT-TESTED |
| `CardGroup` / `Card` (What next section) | Not in tutorial matrix | NOT-TESTED |
| `Note` | Not in tutorial "Preferred" list | NOT-TESTED |
| `Warning` | Yes | PASS |

**Dead import check (P9):** No import block present in this file — no MDX imports at the top. The file uses native Mintlify components (Steps, Accordion, Card) which require no explicit imports. No dead imports.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps, and a Next Steps equivalent (What next) present |
| 5.2 | Required sections present | PASS | Prerequisites, Steps, next steps routing present |
| 5.3 | Only approved components used | NOT-TESTED | AccordionGroup not in tutorial "Preferred" list but not in "Avoid" (P22) |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, no Coming Soon, no PreviewCallout |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses Steps; troubleshooting uses AccordionGroup |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute Mintlify build. The `og:image` field is not in YAML quoted format — may cause frontmatter parse issues |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: tutorial` uses a pageType value in the purpose field. This is not exactly an old-schema value, but it is an invalid purpose value. If the gateways version was checked it would also have `audience: gateway-operator` (deprecated token) |
| 5.8 | CSS uses custom properties only | NOT-TESTED | No inline hex detected |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | No imports; native components used correctly |

**Category 5 verdict: FAIL** — 1 check fails: 5.7

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Information type | Standard | Status |
|---|---|---|---|---|
| Off-chain gateway mode introduced via PRs #3791 and #3822 in Q4 2025 | Line 19 | factual | Very high | UNVERIFIED — PR citations need confirmation |
| BYOC uses HTTP capability query (not gRPC for OrchestratorInfo) | Line 23 | factual | Very high | UNVERIFIED |
| Community remote signer at `signer.eliteencoder.net` is active | Lines 51, 307, 423 | factual | High | UNVERIFIED — external community service |
| PM deposit ~0.065 ETH; PM reserve ~0.03 ETH | Line 469 | evaluative | High | UNVERIFIED — amounts are ETH/USD rate-dependent |
| `livepeer_cli` menu option "Deposit broadcasting funds (ETH)" | Lines 519–520 | procedural | Very high | UNVERIFIED — CLI option name may change between releases |
| `livepeer_cli` menu option "Activate orchestrator" | Line 555 | procedural | Very high | UNVERIFIED |
| `livepeer-python-gateway` pip install URL | Line 335 | procedural | Very high | UNVERIFIED — third-party package may not be on PyPI |
| Flag names `-byoc`, `-byocContainerURL`, `-byocModelID` | Lines 243–249 | procedural | Very high | UNVERIFIED — same as byoc-cpu-smoke-test concern |
| Release download URL pattern for go-livepeer | Lines 212–213 | procedural | Very high | UNVERIFIED — URL contains placeholder `vX.Y.Z` |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | PR numbers (#3791, #3822) unverified. Multiple CLI option names unverified. No FACT CHECK comments present — unverified claims have no flags |
| 6.2 | Code/commands tested | FAIL | `livepeer-python-gateway` pip install, `livepeer_cli` menu options, `-byoc` flag names — not flagged as unverified, not confirmed tested |
| 6.3 | No deprecated API usage | NOT-TESTED | Cannot confirm without live CLI reference |
| 6.4 | Numbers are real | FAIL | ~0.065 ETH PM deposit and ~0.03 ETH reserve presented without source or date |
| 6.5 | REVIEW flags for unverified claims | FAIL | No FACT CHECK or REVIEW comments present despite multiple unverified procedural claims. This is the opposite problem from other pages — claims are not flagged at all |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; no `status` field set at all |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary referenced |
| 6.8 | Source staleness check | FAIL | PR citations from "Q4 2025" have no verification date. PM deposit amounts are ETH/USD-sensitive. Community remote signer URL has no SLA. Release download URL uses placeholder |

**Category 6 verdict: FAIL** — 6 checks fail: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | FAIL | `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial` is NOT in docs.json. docs.json line 2589 lists `v2/gateways/guides/tutorials/byoc-cpu-tutorial` — a different file in the gateways directory |
| 7.2 | Navigation matches file system | FAIL | File at `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` has no matching docs.json entry. Structural orphan |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | FAIL | File is unreachable from any navigation path (no docs.json entry for this path) |
| 7.5 | Audience journey complete | FAIL | Page is an orphan — no reader journey can be defined for an unreachable page |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | FAIL | Content is gateway-focused (PM deposits, gateway-mode flags, remote signer). File is in `v2/orchestrators/` — wrong tab for the content. The equivalent gateways version exists at `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx` and is properly listed in docs.json |
| 7.8 | File naming conventions | PASS | `byoc-cpu-tutorial.mdx` — naming is correct |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: FAIL** — 5 checks fail: 7.1, 7.2, 7.4, 7.5, 7.7

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path confirmed against docs.json):**

| Link href | docs.json presence | Line | Status |
|---|---|---|---|
| `https://bridge.arbitrum.io/` | External | — | NOT-TESTED |
| `/v2/gateways/resources/technical/arbitrum-exchanges` | Yes | 2784 | PASS |
| `/v2/gateways/setup/requirements/on-chain%20setup/on-chain` | Yes | 2607 | PASS (URL-encoded space in path) |
| `/v2/gateways/resources/technical/arbitrum-rpc` | Yes | 2785 | PASS |
| `/v2/gateways/setup/monitor/monitor-and-optimise` | Yes | 2651 | PASS |
| `https://github.com/livepeer/ai-runner/blob/main/docs/custom-pipeline.md` | External | — | NOT-TESTED |
| `https://github.com/j0sh/livepeer-python-gateway` (pip install URL) | External | — | NOT-TESTED |
| `/v2/gateways/guides/payments-and-pricing/remote-signers` | Yes | 2692 | PASS |
| `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` | Yes | 2693 | PASS |
| `https://explorer.livepeer.org` | External | — | NOT-TESTED |
| `https://tools.livepeer.cloud` | External | — | NOT-TESTED |
| `https://discord.gg/livepeer` | External | — | NOT-TESTED |
| `https://github.com/j0sh/livepeer-python-gateway/pulls` | External | — | NOT-TESTED |

Note: The "What next" cards link to `/v2/gateways/payments/remote-signers` and `/v2/gateways/payments/payment-clearinghouse` — these paths are NOT in docs.json. docs.json has `v2/gateways/guides/payments-and-pricing/remote-signers` (line 2692) and `v2/gateways/guides/payments-and-pricing/clearinghouse-guide` (line 2693). The card links use wrong paths.

| Link href (card) | docs.json presence | Notes |
|---|---|---|
| `/v2/gateways/payments/remote-signers` | NO | Wrong path. Correct: `/v2/gateways/guides/payments-and-pricing/remote-signers` |
| `/v2/gateways/payments/payment-clearinghouse` | NO | Wrong path. Correct: `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | 2 broken internal links in "What next" cards: `/v2/gateways/payments/remote-signers` and `/v2/gateways/payments/payment-clearinghouse` not in docs.json. Correct paths exist at different slugs |
| 8.2 | All external links live | NOT-TESTED | Multiple external URLs not verified |
| 8.3 | All snippet imports resolve | N/A | No MDX imports in this file |
| 8.4 | All images load | N/A | No images beyond `og:image` |
| 8.5 | Page renders without error | NOT-TESTED | `og:image` is unquoted YAML — may cause frontmatter parse error |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | No placeholder text found |

**Category 8 verdict: FAIL** — 1 check fails: 8.1

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No human approval recorded |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Cannot verify decision registry |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA Draft only, Terminology not locked, Content Pass not open. Additionally the file is not in the orchestrators nav |
| 9.4 | Phase ordering respected | FAIL | No `status` field at all. File has unverified claims with no FACT CHECK flags |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify process history |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify routing history |

**Category 9 verdict: FAIL** — 3 checks fail: 9.1, 9.3, 9.4

---

## Cross-Category Connections

1. **Navigation orphan** — Checks 7.1, 7.2, 7.4, 7.5, 7.7, 4.3, 4.4 all flow from the same root: the file is not in docs.json for orchestrators and does not belong in the orchestrators directory. Root resolution is structural (BD-1).

2. **Incomplete frontmatter + wrong purpose value** — Checks 1.1, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 5.7 share one root: the frontmatter was copied from an early draft without completing the taxonomy fields and with `purpose: tutorial` (wrong field).

3. **Broken card links** — Check 8.1 directly caused by using `payments/` path prefix instead of `guides/payments-and-pricing/`. Two cards affected.

4. **No veracity flags** — Checks 6.1, 6.2, 6.4, 6.5, 6.6, 6.8 form a cluster: this page has multiple unverified procedural and factual claims but, unlike the other tutorial pages, has NO FACT CHECK comments. The problem is worse because there's no visibility into what needs checking.

5. **Self-referential opener (2.3, 2.4, 2.5, 2.10)** — All trace to line 9. One rewrite resolves all four.

6. **Scope creep (4.1, 4.2, 4.6)** — Part 6 (Graduate to on-chain production) is a substantively different document blended into the smoke test. This inflates the page scope and creates the purpose ambiguity.

7. **Duplicate content with byoc-cpu-smoke-test.mdx** — Check 4.8. Parts 1–4 of this page are near-identical to `byoc-cpu-smoke-test.mdx`. One of them should be deprecated or they should be clearly differentiated.

---

## Blocking Decisions

| BD | Decision needed | Blocks |
|---|---|---|
| BD-1 | CRITICAL: File is a nav orphan in orchestrators. Decide: (a) add to docs.json under orchestrators, (b) move to gateways lane and reconcile with gateways version, or (c) deprecate this orchestrators copy entirely. The gateways version at `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx` already exists in docs.json | F-01 |
| BD-2 | Part 6 scope: should "Graduate to on-chain production" be a separate page or remain embedded? If separate, the split must be planned before content fixes | F-04 |
| BD-3 | Duplicate content with `byoc-cpu-smoke-test.mdx`: merge, differentiate, or deprecate this orchestrators copy | F-04 |

---

## Verdict Summary

**Overall: REWRITE**

**36 checks fail:** 1.1, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.6, 3.7, 4.1, 4.2, 4.3, 4.4, 4.6, 4.8, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 7.1, 7.2, 7.4, 7.5, 7.7, 8.1, 9.1, 9.3, 9.4

This page is a structural orphan with fundamental navigation, taxonomy, and scope problems. The failure count (36+ checks) and the nature of those failures — wrong directory, not in docs.json, duplicate content, incomplete frontmatter, wrong purpose value, broken links, no veracity flags — indicate this file requires an editorial decision before any content fixes are applied. The root issue is not copy quality (which is acceptable) but whether this file should exist in this location at all.

---

## Prioritised Fix List

**F-01** — CRITICAL — Resolve navigation lane mismatch (blocking decision BD-1)
File at `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx` is NOT in docs.json. An equivalent (and nav-registered) version exists at `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`. Decide:
- Option A: Deprecate this orchestrators copy (move to `x-deprecated/` or delete) — recommended if content is gateway-focused
- Option B: Add to docs.json under orchestrators with clear differentiation from the gateways version
- Option C: Merge distinct sections (Part 6 on-chain graduation) into the existing smoke-test or gateway tutorial

**F-02** — CRITICAL — Fix broken internal card links
Two "What next" cards use wrong paths:
- `/v2/gateways/payments/remote-signers` → correct path: `/v2/gateways/guides/payments-and-pricing/remote-signers` (docs.json line 2692)
- `/v2/gateways/payments/payment-clearinghouse` → correct path: `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` (docs.json line 2693)

**F-03** — CRITICAL — Fix self-referential opener
Line 9: "This tutorial walks through a complete end-to-end test of the Livepeer gateway + orchestrator pipeline using BYOC (Bring Your Own Container) with a CPU-only Docker container. No GPU is required."
Proposed rewrite: "Run a complete Livepeer gateway and orchestrator on one machine using a CPU-only BYOC container — no GPU, no wallet, no on-chain registration. A job enters the gateway, routes to the orchestrator, runs in the BYOC container, and returns a result." — confirm before applying.
Resolves checks 2.3, 2.4, 2.5, 2.10.

**F-04** — HIGH — Resolve scope: separate or eliminate Part 6
"Graduate to on-chain production" (Part 6) is a substantively different procedure from the smoke test. If retained: split into a separate page. If removed: link to the gateways on-chain setup guide instead. Requires blocking decision BD-2.

**F-05** — HIGH — Complete frontmatter (single operation; requires BD-1 resolved first)
Once the file's lane is confirmed:
- Proposed: `purpose: build` — confirm before applying
- Proposed: `audience: orchestrator` (if in orchestrators lane) or `audience: gateway` (if in gateways lane) — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: setup` — confirm before applying
- Proposed: `industry: ["technical"]` — confirm before applying
- Proposed: `niche: ["infrastructure", "AI"]` — confirm before applying
- Add: `veracityStatus: unverified`
- Add: `status: draft`
- Fix `purpose: tutorial` → valid 15-value purpose (P37: wrong-field error, not deprecated alias)

**F-06** — HIGH — Complete OG image block
Current: `og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"` — wrong format and incomplete. Replace with full 5-field block matching other tutorial pages:
```yaml
'og:image': /snippets/assets/site/og-image/en/orchestrators.png
'og:image:alt': Livepeer Docs social preview image for Orchestrators
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
```
Confirm correct path for the target tab before applying.

**F-07** — HIGH — Add FACT CHECK comments to all unverified procedural claims
Unlike other tutorial pages, this file has no veracity flags despite multiple unverified procedural claims. Add FACT CHECK comments at minimum for:
- PR numbers #3791 and #3822 (line 19) — verify against go-livepeer GitHub
- `-byoc`, `-byocContainerURL`, `-byocModelID` flag names (lines 243–249) — Rick to verify
- `livepeer_cli` option names for PM deposit and orchestrator activation (lines 519–520, 555)
- `livepeer-python-gateway` pip install path (line 335) — verify package exists on PyPI or GitHub

**F-08** — MEDIUM — Fix description to ≤160 chars
Current: 162 chars. Proposed trim: "Run a complete Livepeer gateway and orchestrator on one machine using a CPU BYOC container, test end-to-end with off-chain payments, then graduate to on-chain." (158 chars) — confirm before applying.

**F-09** — MEDIUM — Fix 3 failing headings
- "Architecture overview" (18/25): Proposed: `Pipeline Architecture` — confirm before applying
- "Part 3: Run the gateway (off-chain mode)" (18/25): Proposed: `Part 3: Gateway Off-chain Setup` — confirm before applying
- "What next" (13/25) — also check 3.2 violation: Proposed: `Related Pages` (exempted structural heading per P53) or rename to `Next Steps` (Avoid-tier but not Banned) — confirm before applying

**F-10** — MEDIUM — Fix keywords
Remove: `livepeer`, `tutorial`
Add: Proposed: `"BYOC CPU gateway orchestrator"`, `"off-chain payment remote signer"`, `"on-chain Livepeer production setup"` — confirm before applying

**F-11** — MEDIUM — Add veracity flags for PM deposit amounts
Line 469: `approximately 0.065 ETH` deposit and `approximately 0.03 ETH` reserve. Add FACT CHECK comment: `{/* FACT CHECK: PM deposit and reserve amounts — confirm current ETH requirements against go-livepeer docs or Discord #lounge. Amounts are ETH/USD-sensitive. */}`
